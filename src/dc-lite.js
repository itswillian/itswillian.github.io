// Mini runtime para o template do portfólio: <sc-if>, <sc-for>, buracos {{ caminho }} e eventos onXxx.
// Cada setState monta a árvore nova e aplica só as diferenças na página (foco, rolagem e animações continuam intactos).

const HOLE = /\{\{\s*([\w$.]+)\s*\}\}/g;
const WHOLE = /^\s*\{\{\s*([\w$.]+)\s*\}\}\s*$/;

const HANDLERS = ['onclick', 'onkeydown', 'onscroll', 'onmouseenter', 'onmouseleave'];

const lookup = (scope, path) => path.split('.').reduce((value, key) => (value == null ? undefined : value[key]), scope);

const build = (node, scope, parent) => {
  if (node.nodeType === Node.TEXT_NODE) {
    const text = node.nodeValue;
    let last = 0;
    for (const match of text.matchAll(HOLE)) {
      if (match.index > last) parent.appendChild(document.createTextNode(text.slice(last, match.index)));
      const wrap = document.createElement('span');
      wrap.className = 'sc-interp';
      const value = lookup(scope, match[1]);
      wrap.textContent = value == null || value === false ? '' : String(value);
      parent.appendChild(wrap);
      last = match.index + match[0].length;
    }
    if (last < text.length) parent.appendChild(document.createTextNode(text.slice(last)));
    return;
  }
  if (node.nodeType !== Node.ELEMENT_NODE) return;
  const tag = node.localName;
  if (tag === 'sc-if') {
    const whole = WHOLE.exec(node.getAttribute('value') || '');
    if (whole && lookup(scope, whole[1])) node.childNodes.forEach((child) => build(child, scope, parent));
    return;
  }
  if (tag === 'sc-for') {
    const whole = WHOLE.exec(node.getAttribute('list') || '');
    const items = (whole && lookup(scope, whole[1])) || [];
    const name = node.getAttribute('as');
    items.forEach((item) => {
      const inner = Object.create(scope);
      inner[name] = item;
      node.childNodes.forEach((child) => build(child, inner, parent));
    });
    return;
  }
  const el = document.createElementNS(node.namespaceURI, node.localName);
  const own = [];
  for (const attr of node.attributes) {
    if (attr.name.startsWith('hint-')) continue;
    if (HANDLERS.includes(attr.name)) {
      const whole = WHOLE.exec(attr.value);
      const handler = whole && lookup(scope, whole[1]);
      if (typeof handler === 'function') el[attr.name] = handler;
      continue;
    }
    const whole = WHOLE.exec(attr.value);
    if (whole) {
      const value = lookup(scope, whole[1]);
      if (value == null || value === false) continue;
      el.setAttribute(attr.name, String(value));
      own.push(attr.name);
    } else {
      el.setAttribute(attr.name, attr.value.replace(HOLE, (_, path) => {
        const value = lookup(scope, path);
        return value == null || value === false ? '' : String(value);
      }));
      own.push(attr.name);
    }
  }
  el._own = own;
  node.childNodes.forEach((child) => build(child, scope, el));
  parent.appendChild(el);
};


const patch = (live, next) => {
  if (live.nodeType === Node.TEXT_NODE) {
    if (live.nodeValue !== next.nodeValue) live.nodeValue = next.nodeValue;
    return;
  }
  // só remove atributos que o template já tinha posto; os que o próprio código define (ex.: style do menu) ficam
  for (const name of live._own || []) {
    if (!next.hasAttribute(name)) live.removeAttribute(name);
  }
  live._own = next._own;
  for (const attr of next.attributes) {
    if (live.getAttribute(attr.name) !== attr.value) live.setAttribute(attr.name, attr.value);
  }
  HANDLERS.forEach((name) => { if (live[name] !== next[name]) live[name] = next[name]; });
  patchChildren(live, next);
};

const sameKind = (a, b) => a.nodeType === b.nodeType && (a.nodeType !== Node.ELEMENT_NODE || (a.localName === b.localName && a.namespaceURI === b.namespaceURI));

const patchChildren = (live, next) => {
  const wanted = [...next.childNodes];
  const current = [...live.childNodes];
  wanted.forEach((child, index) => {
    const old = current[index];
    if (!old) live.appendChild(child);
    else if (sameKind(old, child)) patch(old, child);
    else live.replaceChild(child, old);
  });
  for (let index = current.length - 1; index >= wanted.length; index -= 1) live.removeChild(current[index]);
};

export class DCLogic {
  constructor(props) {
    this.props = props || {};
    this.state = {};
    this._rendering = false;
    this._queue = [];
  }

  setState(patchValue, callback) {
    Object.assign(this.state, typeof patchValue === 'function' ? patchValue(this.state) : patchValue);
    if (callback) this._queue.push(callback);
    if (this._mount) this._render();
  }

  _render() {
    // um setState feito durante a renderização (ex.: em componentDidMount) pede uma nova passada logo em seguida
    if (this._rendering) { this._dirty = true; return; }
    this._rendering = true;
    this._dirty = false;
    try {
      const vals = this.renderVals();
      const holder = document.createElement('div');
      this._template.forEach((child) => build(child, vals, holder));
      const first = !this._mounted;
      this._mounted = true;
      if (first) this._mount.replaceChildren(...holder.childNodes);
      else patchChildren(this._mount, holder);
      const props = this._prevProps;
      this._prevProps = this.props;
      if (first) { if (this.componentDidMount) this.componentDidMount(); }
      else if (this.componentDidUpdate) this.componentDidUpdate(props);
    } catch (error) {
      // a atualização falhou: os callbacks dela não rodam depois, numa renderização sem relação
      this._passes = 0;
      this._queue.length = 0;
      throw error;
    } finally {
      this._rendering = false;
    }
    if (this._dirty) {
      this._passes = (this._passes || 0) + 1;
      if (this._passes < 20) { this._render(); return; }
      console.warn('dc-lite: o estado continua mudando depois de 20 renderizações seguidas; parando.');
      this._queue.length = 0;
    }
    this._passes = 0;
    this._dirty = false;
    const queue = this._queue.splice(0);
    queue.forEach((callback) => { try { callback(); } catch (error) { console.error(error); } });
  }
}

export const mount = (Component, templateHtml, target, props) => {
  const parsed = new DOMParser().parseFromString('<!doctype html><body>' + templateHtml, 'text/html');
  const instance = new Component(props);
  instance._template = [...parsed.body.childNodes];
  instance._mount = target;
  instance._prevProps = props;
  instance._render();
  return instance;
};
