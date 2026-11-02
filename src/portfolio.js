import { DCLogic } from './dc-lite.js';

const ASSET_EXT = {
  "1bfd85621958216cf8628bf291513154": "pdf",
  "b1d0fc34c74f44fbe6bfab8713559336": "pdf",
  "0b462a9fa3921b566f2c93a870249936": "svg",
  "0eb966ebff0864a162523ec31b822984": "svg",
  "122027c076205ad467201d4e53228aef": "svg",
  "135bec1c7047efce93f71511a40069dc": "svg",
  "136d48e9bd8f79bb71c8ccb73639125e": "svg",
  "137c7af35011961a95d82d9e8cba08a2": "svg",
  "1733c96c7e57c7561d669002f6f924a7": "svg",
  "1c99906d4aba915d70bde28088c2299a": "svg",
  "20e2c65c1ef698773f2768c50e33fc3d": "svg",
  "23742a4852b7f3018700d381bd30f0e4": "svg",
  "2b0ddde9aea47aea8615ebf904286431": "png",
  "319afdcdb9fb56dae9de274f381c6fb4": "svg",
  "320c7f232153daf5434d071245876371": "svg",
  "3225a1eeb36f1f2b316c5c5462785256": "png",
  "32dabf686dcaffdf13f0359ac5a2f306": "svg",
  "36a914379b4362b4741b6f6ce31dc04f": "svg",
  "3861e95bcb52a031e2acd9c6632703a8": "svg",
  "3a794641c12f1676705f3c82be1c49b5": "svg",
  "3c3537315151e68e2d70aa09bfb205a2": "svg",
  "3cab9eb69b95010aeed26f834abc40ed": "svg",
  "499e33cb066d7363e738c619608a9578": "svg",
  "51893f200efcb35d853d1dd151d6be09": "svg",
  "519d043df54e41e1c7694528821d7dc5": "svg",
  "5329d825dc84f6790a72c74481e9fa29": "svg",
  "581fcebbd55b367dc8071350c25f4b0a": "svg",
  "59940ec62604d4e3113c26a388be8ff7": "svg",
  "59ebb96bad2766f7dedb27ea325c5811": "svg",
  "5cdbec6252616a0e64b95d9697972049": "svg",
  "5e4488354fd03b3d32f981f105541c1b": "svg",
  "5fe34f8a0e3ac78437afb374351e300a": "svg",
  "62eddaf524843665bfd5b75b75888f61": "svg",
  "6dbce79d54234e1df521efbd351833e3": "svg",
  "6e3dc21cbf9b80dbee40a010e0081840": "svg",
  "70e7b3efed03219218488561eae52390": "svg",
  "75414f56a2359315cc838554c7d408a1": "svg",
  "7557fe6748d537b1dcf5bc34a7c9313e": "svg",
  "75827075227865953f929593c7c3bec3": "png",
  "783fa4d6d245c0f608fa2941a58094f7": "svg",
  "7b07608bb14984e1322ca818bc61a524": "svg",
  "7d2aa1506bc729b29d83b9f6bc57981f": "jpg",
  "7de73cd4ae6d08fa95760852fc3333ba": "svg",
  "8016151bde3ca5208600896acd114b3a": "svg",
  "867b36cb5e711d5d8e6b3a68248382be": "svg",
  "8747886018f0e66ab14ec56968561343": "svg",
  "8a5ecc9465a04415196fdb3e4d5a9f9b": "svg",
  "8a5f85ff85fc208920d7b2aa1bfef611": "svg",
  "92a09d67b7adcb949b586aa39835d7bc": "png",
  "93dbf6547b638d61daa9a22f76977d57": "svg",
  "9674e6db1bd5602da6fdbebf9442ccbe": "svg",
  "9b40c94f46a2c4bfc39006d49afd3609": "svg",
  "9d59acfa8db05d42342dd8bdc5f10178": "svg",
  "9d886a47c9468aa891a605445f682da0": "svg",
  "a1420a16d16270cfd919d291b3fcd701": "svg",
  "a15e6320e4637e51defa329a0737bf25": "svg",
  "a406475ec9e536f1fee9f778ed5dcd9a": "svg",
  "a966d6fa35cc7648ed777f526cc5af42": "svg",
  "a9edfc66e0b1df870e84962ea94eb790": "svg",
  "ac0c379df0ac943b43ccb6da617fd672": "svg",
  "adf4a945330c69f88a09690d105b7bc6": "svg",
  "ae09823b497affe6842f7320fc0c8942": "svg",
  "afad2cbf7747faf46a36e0167b7ce05f": "svg",
  "b00d21c8937e55489a81706902414ed3": "svg",
  "b3ac107df03a1de87fdaf5275673e660": "svg",
  "b70161053017a700e3470bd6a25665bb": "svg",
  "b94097807bcbf187cde25de25c8317e3": "svg",
  "bac59b29bed669342ef5da4d6f562d94": "svg",
  "c3cee2be487f602103d3ff568fd8604e": "svg",
  "c43e831ef2dff9cdcd0767f444001ee6": "png",
  "c5e344d02f8418fdd79c104b3d501794": "svg",
  "c8a8769dbc46cac93eee12af2738c2df": "svg",
  "cc55a5fc69b5012efc053a190eef487e": "svg",
  "ccada986bf73ec6509bc929b3966af38": "svg",
  "d1715bce58335255d52b99e6d4cae933": "svg",
  "d39b75fd016aba5e3216a7d9928ff2c2": "svg",
  "d769829ed077dc6b3aec46ef9295973a": "svg",
  "d9a5e1e26ea40825a099818b09e7a20f": "svg",
  "db2435eecab53ff1dd5af9ae0568c680": "svg",
  "de70106160c6bb377a2198a8e0dca291": "png",
  "dec3172bf71ed9a1d7097bfea7ac4cdc": "svg",
  "dfa8fbd575ada6ff2143116f62826ecf": "svg",
  "e19d3227e735eb5512ac094b4a4b880c": "svg",
  "eee2fbc3e4aadf093258bbc2f95a3375": "svg",
  "f06aacd5d9bdbaf6237917f2d5c764a1": "png",
  "f20802461b0596ec6d6195d404a810dc": "svg",
  "f2681f6411808dd74e879de75951d0f7": "svg",
  "f2fcbe47e9d9b6ef2ff0577fc6f0140d": "svg",
  "f302c3a459535e757016f88b13b8b441": "svg",
  "f512061cd6e9278f639035a5344963c0": "svg",
  "f997f8f397464c7f5c3d07618438d682": "svg"
};
const blob = (id) => 'assets/' + id + '.' + ASSET_EXT[id];

const IMAGE_IDS = {
  retrato: '7d2aa1506bc729b29d83b9f6bc57981f',
  github: '867b36cb5e711d5d8e6b3a68248382be',
  gmail: 'a966d6fa35cc7648ed777f526cc5af42',
  linkedin: 'cc55a5fc69b5012efc053a190eef487e',
  curriculum: 'a9edfc66e0b1df870e84962ea94eb790',
  quant1: '75827075227865953f929593c7c3bec3',
  twosolve: 'f997f8f397464c7f5c3d07618438d682',
  aws: 'b3ac107df03a1de87fdaf5275673e660',
  cloudflare: '135bec1c7047efce93f71511a40069dc',
  svelte: '5329d825dc84f6790a72c74481e9fa29',
  kubernetes: 'eee2fbc3e4aadf093258bbc2f95a3375',
  huggingface: '122027c076205ad467201d4e53228aef',
  opencv: '9674e6db1bd5602da6fdbebf9442ccbe',
  streamlit: 'a15e6320e4637e51defa329a0737bf25',
  gitlab: '1c99906d4aba915d70bde28088c2299a',
  keras: '0eb966ebff0864a162523ec31b822984',
  linux: '3c3537315151e68e2d70aa09bfb205a2',
  pytorch: 'd769829ed077dc6b3aec46ef9295973a',
  openai: '137c7af35011961a95d82d9e8cba08a2',
  tensorflow: 'b00d21c8937e55489a81706902414ed3',
  terraform: '136d48e9bd8f79bb71c8ccb73639125e',
  fest: '2b0ddde9aea47aea8615ebf904286431',
  superprof: '75414f56a2359315cc838554c7d408a1',
  influxdb: '9d886a47c9468aa891a605445f682da0',
  claude: '70e7b3efed03219218488561eae52390',
  awsAcm: '8a5ecc9465a04415196fdb3e4d5a9f9b',
  awsFargate: '581fcebbd55b367dc8071350c25f4b0a',
  awsEcsTask: 'adf4a945330c69f88a09690d105b7bc6',
  awsLightsail: '62eddaf524843665bfd5b75b75888f61',
  awsEc2: 'f2fcbe47e9d9b6ef2ff0577fc6f0140d',
  awsEcs: '6e3dc21cbf9b80dbee40a010e0081840',
  awsVpc: '783fa4d6d245c0f608fa2941a58094f7',
  awsAlb: 'db2435eecab53ff1dd5af9ae0568c680',
  awsRds: '6dbce79d54234e1df521efbd351833e3',
  awsS3: 'f2681f6411808dd74e879de75951d0f7',
  awsTimestream: 'd1715bce58335255d52b99e6d4cae933',
  awsSqs: '20e2c65c1ef698773f2768c50e33fc3d',
  awsSns: '7de73cd4ae6d08fa95760852fc3333ba',
  awsKinesis: '499e33cb066d7363e738c619608a9578',
  awsFirehose: '8016151bde3ca5208600896acd114b3a',
  awsIam: '320c7f232153daf5434d071245876371',
  awsSecrets: '36a914379b4362b4741b6f6ce31dc04f',
  awsCloudwatch: '9b40c94f46a2c4bfc39006d49afd3609',
  awsEventbridge: 'b70161053017a700e3470bd6a25665bb',
  awsCost: '1733c96c7e57c7561d669002f6f924a7',
  awsAmi: '7b07608bb14984e1322ca818bc61a524',
  awsEip: 'c3cee2be487f602103d3ff568fd8604e',
  awsNat: '9d59acfa8db05d42342dd8bdc5f10178',
  awsSnapshot: 'dfa8fbd575ada6ff2143116f62826ecf',
  awsBastion: 'c8a8769dbc46cac93eee12af2738c2df',
  githubcopilot: '3861e95bcb52a031e2acd9c6632703a8',
  loomis: '3cab9eb69b95010aeed26f834abc40ed',
  loomisDark: 'a1420a16d16270cfd919d291b3fcd701',
  controleeletronica: '92a09d67b7adcb949b586aa39835d7bc',
  html: 'a406475ec9e536f1fee9f778ed5dcd9a',
  css: '5cdbec6252616a0e64b95d9697972049',
  javascript: '0b462a9fa3921b566f2c93a870249936',
  typescript: '51893f200efcb35d853d1dd151d6be09',
  reactjs: '8747886018f0e66ab14ec56968561343',
  nextjs: '93dbf6547b638d61daa9a22f76977d57',
  nodejs: '59ebb96bad2766f7dedb27ea325c5811',
  sass: '7557fe6748d537b1dcf5bc34a7c9313e',
  bootstrap: 'ac0c379df0ac943b43ccb6da617fd672',
  jquery: '519d043df54e41e1c7694528821d7dc5',
  flask: '5fe34f8a0e3ac78437afb374351e300a',
  php: 'e19d3227e735eb5512ac094b4a4b880c',
  python: 'b94097807bcbf187cde25de25c8317e3',
  java: 'c5e344d02f8418fdd79c104b3d501794',
  c: 'ae09823b497affe6842f7320fc0c8942',
  cplusplus: 'afad2cbf7747faf46a36e0167b7ce05f',
  csharp: 'ccada986bf73ec6509bc929b3966af38',
  dotnet: 'f512061cd6e9278f639035a5344963c0',
  archlinux: 'dec3172bf71ed9a1d7097bfea7ac4cdc',
  ubuntu: '32dabf686dcaffdf13f0359ac5a2f306',
  windows: 'f302c3a459535e757016f88b13b8b441',
  sqlserver: 'bac59b29bed669342ef5da4d6f562d94',
  mysql: 'd39b75fd016aba5e3216a7d9928ff2c2',
  postgresql: '59940ec62604d4e3113c26a388be8ff7',
  docker: '8a5f85ff85fc208920d7b2aa1bfef611',
  git: '23742a4852b7f3018700d381bd30f0e4',
  fastapi: 'f20802461b0596ec6d6195d404a810dc',
  openapi: '319afdcdb9fb56dae9de274f381c6fb4',
  fedora: 'd9a5e1e26ea40825a099818b09e7a20f',
  linuxmint: '3a794641c12f1676705f3c82be1c49b5',
  deepin: '5e4488354fd03b3d32f981f105541c1b',
};

const img = (key) => blob(IMAGE_IDS[key]);
const flipClass = (key) => (['nextjs', 'flask', 'linux', 'openai', 'influxdb', 'githubcopilot'].includes(key) ? 'flip' : '');

const BAR_EDU = { sesi: 'ensinomedio', senai: 'ctds01', ufes: 'ufes', master: 'ufesmaster' };
const BAR_JOBS = { superprof: 'superprof', twosolve: 'twosolve', fest: 'fest', quantum: 'quant1', controle: 'controleeletronica' };
const MONTHS = ['jan', 'fev', 'mar', 'abr', 'mai', 'jun', 'jul', 'ago', 'set', 'out', 'nov', 'dez'];
const MONTHS_EN = { feb: 1, apr: 3, may: 4, aug: 7, sep: 8, oct: 9, dec: 11 };
const PROJECT_CATS = {
  'https://github.com/itswillian/react-wedding-gifts': 'front',
  'https://github.com/itswillian/sveltekit-contacts': 'front',
  'https://github.com/itswillian/wps-termo': 'front',
  'https://github.com/itswillian/wps-timer': 'front',
  'https://github.com/itswillian/inpeace-frontend': 'front',
  'https://github.com/itswillian/particle-swarm-optimization': 'ia',
  'https://github.com/itswillian/finetuned-model-api': 'ia',
  'https://github.com/itswillian/closing-price-gan': 'ia',
  'https://github.com/itswillian/opencv': 'ia',
  'https://github.com/itswillian/node-crud-microservice': 'back',
  'https://github.com/itswillian/wps-finance': 'back',
  'https://github.com/itswillian/cs50-introduction-to-computer-science': 'back',
  'https://github.com/itswillian/tcc-senai': 'back',
  'https://github.com/itswillian/uri': 'other',
  'https://github.com/itswillian/organic-chemistry': 'other',
};

const TECHS = [
  { key: 'reactjs', name: 'React JS', group: 'front' },
  { key: 'nextjs', name: 'Next JS', group: 'front' },
  { key: 'typescript', name: 'TypeScript', group: 'front' },
  { key: 'javascript', name: 'JavaScript', group: 'front' },
  { key: 'svelte', name: 'SvelteKit', group: 'front' },
  { key: 'html', name: 'HTML', group: 'front' },
  { key: 'css', name: 'CSS', group: 'front' },
  { key: 'sass', name: 'Sass', group: 'front' },
  { key: 'bootstrap', name: 'Bootstrap', group: 'front' },
  { key: 'jquery', name: 'jQuery', group: 'front' },
  { key: 'python', name: 'Python', group: 'back' },
  { key: 'nodejs', name: 'Node JS', group: 'back' },
  { key: 'fastapi', name: 'FastAPI', group: 'back' },
  { key: 'flask', name: 'Flask', group: 'back' },
  { key: 'openapi', name: 'OpenAPI (Swagger)', group: 'back' },
  { key: 'java', name: 'Java', group: 'back' },
  { key: 'csharp', name: 'C#', group: 'back' },
  { key: 'dotnet', name: '.NET', group: 'back' },
  { key: 'php', name: 'PHP', group: 'back' },
  { key: 'c', name: 'C', group: 'back' },
  { key: 'cplusplus', name: 'C++', group: 'back' },
  { key: 'docker', name: 'Docker', group: 'infra' },
  { key: 'git', name: 'Git', group: 'infra' },
  { key: 'postgresql', name: 'PostgreSQL', group: 'infra' },
  { key: 'mysql', name: 'MySQL', group: 'infra' },
  { key: 'sqlserver', name: 'SQL Server', group: 'infra' },
  { key: 'sqlite', name: 'SQLite', group: 'infra', icon: 'database' },
  { key: 'influxdb', name: 'InfluxDB', group: 'infra' },
  { key: 'ubuntu', name: 'Ubuntu', group: 'linux' },
  { key: 'archlinux', name: 'Arch Linux', group: 'linux' },
  { key: 'fedora', name: 'Fedora', group: 'linux' },
  { key: 'linuxmint', name: 'Linux Mint', group: 'linux' },
  { key: 'deepin', name: 'Deepin', group: 'linux' },
  { key: 'windows', name: 'Windows', group: 'infra' },
];

// Fontes: Lattes (24/10/2026) e LinkedIn (exportados pelo Willian). Os nomes dos reconhecimentos vêm do LinkedIn, sem datas.
const LATTES_LINK = 'http://lattes.cnpq.br/1561732707542523';
const ORCID_LINK = 'https://orcid.org/0009-0004-4888-9408';
// PDFs do currículo (português e inglês), servidos de assets/.
// Páginas do currículo como imagens: o visualizador funciona mesmo sem leitor de PDF no navegador.
const CV_FILES = {
  portuguese: { link: blob('1bfd85621958216cf8628bf291513154'), filename: 'curriculo-willian-pacheco-silva.pdf', pages: ['3225a1eeb36f1f2b316c5c5462785256', 'de70106160c6bb377a2198a8e0dca291'] },
  english: { link: blob('b1d0fc34c74f44fbe6bfab8713559336'), filename: 'resume-willian-pacheco-silva.pdf', pages: ['f06aacd5d9bdbaf6237917f2d5c764a1', 'c43e831ef2dff9cdcd0767f444001ee6'] },
};

// Idioma inicial; o visitante troca pelo seletor PT/EN. O tema inicial é o claro.
const DEFAULT_LANGUAGE = 'portuguese';

const EXTRA = {
  portuguese: {
    focus: ['Arquitetura de software', 'Sistemas distribuídos', 'AWS e DevOps', 'Inteligência Artificial', 'Machine learning', 'Instrumentação inteligente', 'Agentes e skills de IA', 'Desenvolvimento orientado por especificação (SDD)'],
    spoken: ['Português: nativo', 'Inglês: profissional pleno', 'Espanhol: básico'],
    cloudName: 'Cloud e DevOps',
    cloud: [
      { text: 'AWS', key: 'aws', service: 'aws' },
      { text: 'Cloudflare', key: 'cloudflare', service: 'cloudflare' },
      { text: 'Vercel', icon: 'vercel' },
      { text: 'OCI', icon: 'cloudstack', service: 'oci' },
      { text: 'Docker', key: 'docker' },
      { text: 'Terraform', key: 'terraform' },
      { text: 'CloudFormation', icon: 'cloudformation' },
      { text: 'CI/CD', icon: 'cicd' },
      { text: 'GitHub', key: 'github' },
      { text: 'GitLab', key: 'gitlab' },
      { text: 'Linux', key: 'linux' },
    ],
    cloudflareName: 'Serviços Cloudflare',
    cloudflare: [
      { text: 'Workers (API e site)', icon: 'terminal' },
      { text: 'D1', icon: 'database' },
    ],
    ociName: 'Serviços OCI',
    oci: [{ text: 'Compute (Always Free)', icon: 'cloudstack' }],
    awsName: 'Serviços AWS',
    aws: [
      { title: 'Computação', items: [{ text: 'Lightsail', key: 'awsLightsail' }, { text: 'EC2', key: 'awsEc2' }, { text: 'ECS', key: 'awsEcs' }, { text: 'Task Definitions', key: 'awsEcsTask' }, { text: 'Fargate', key: 'awsFargate' }, { text: 'Fargate Spot', key: 'awsFargate' }, { text: 'Bastion host', key: 'awsBastion' }, { text: 'AMIs', key: 'awsAmi' }] },
      { title: 'Rede', items: [{ text: 'VPC', key: 'awsVpc' }, { text: 'Rede pública e privada', icon: 'network' }, { text: 'Security Groups', icon: 'shield' }, { text: 'ALB', key: 'awsAlb' }, { text: 'Elastic IP', key: 'awsEip' }, { text: 'NAT Gateway', key: 'awsNat' }] },
      { title: 'Dados e armazenamento', items: [{ text: 'RDS', key: 'awsRds' }, { text: 'S3', key: 'awsS3' }, { text: 'Timestream', key: 'awsTimestream' }, { text: 'Snapshots', key: 'awsSnapshot' }] },
      { title: 'Mensageria e streaming', items: [{ text: 'SQS', key: 'awsSqs' }, { text: 'SNS', key: 'awsSns' }, { text: 'Kinesis', key: 'awsKinesis' }, { text: 'Firehose', key: 'awsFirehose' }] },
      { title: 'Segurança, observabilidade e custos', items: [{ text: 'IAM', key: 'awsIam' }, { text: 'ACM', key: 'awsAcm' }, { text: 'Secrets Manager', key: 'awsSecrets' }, { text: 'CloudWatch', key: 'awsCloudwatch' }, { text: 'EventBridge', key: 'awsEventbridge' }, { text: 'Cost Management', key: 'awsCost' }] },
    ],
    mlName: 'IA e machine learning',
    ml: [
      { text: 'PyTorch', key: 'pytorch' },
      { text: 'TensorFlow', key: 'tensorflow' },
      { text: 'Transformers', icon: 'layers' },
      { text: 'LLMs, OpenAI', key: 'openai' },
      { text: 'Hugging Face', key: 'huggingface' },
      { text: 'Keras', key: 'keras' },
      { text: 'Redes neurais', icon: 'network' },
      { text: 'Random Forest', icon: 'forest' },
      { text: 'Séries temporais', icon: 'series' },
      { text: 'Metaheurísticas', icon: 'target', service: 'meta' },
      { text: 'Optuna', icon: 'sliders' },
    ],
    metaName: 'Metaheurísticas',
    meta: [
      { text: 'PSO', icon: 'target' },
      { text: 'MOPSO', icon: 'target' },
      { text: 'GWO', icon: 'target' },
      { text: 'MOGWO', icon: 'target' },
    ],
    linuxName: 'Distribuições Linux',
    claudeName: 'Como trabalho com IA',
    claude: [
      { text: 'SDD (Spec-Driven Development)', icon: 'spec' },
      { text: 'Skills', icon: 'layers' },
      { text: 'Agentes', icon: 'skills' },
      { text: 'Workflows', icon: 'cicd' },
      { text: 'Hooks', icon: 'sliders' },
      { text: 'MCPs', icon: 'network' },
    ],
    aiName: 'Desenvolvimento com IA',
    aiTools: [{ text: 'Claude', key: 'claude', service: 'claude' }, { text: 'Codex', key: 'openai' }, { text: 'GitHub Copilot', key: 'githubcopilot' }],
    ai: [
      { title: 'Skills', icon: 'skills', text: 'Criação de skills para o Claude: rotinas recorrentes viram fluxos reutilizáveis e padronizados.' },
      { title: 'SDD', icon: 'spec', text: 'Desenvolvimento orientado por especificação: a especificação guia a implementação e a validação.' },
      { title: 'Este portfólio', icon: 'layout', text: 'Redesenhado com o Claude Code, usando skills de design, subagentes em paralelo e revisão cruzada entre modelos.' },
    ],
    awards: [
      'Prêmios por gestão de tarefas: Reconhecido mais de uma vez pelo acompanhamento rigoroso das tarefas sob minha responsabilidade',
      'Menção honrosa por assiduidade: Maior frequência entre os alunos do curso técnico do SENAI',
      'Menção honrosa por desempenho: Maior nota geral da turma no curso técnico do SENAI',
      'Premiação na MAPCOM: Primeiro lugar entre calouros e terceiro lugar no pódio global',
      'Prêmio Aluno Nota 10: Reconhecimento por desempenho escolar',
      'Torneio FLL de robótica: Classificação da equipe da etapa seletiva à regional, chegando a competir na etapa nacional',
    ],
  },
  english: {
    focus: ['Software architecture', 'Distributed systems', 'AWS and DevOps', 'Artificial Intelligence', 'Machine learning', 'Smart instrumentation', 'AI agents and skills', 'Spec-driven development (SDD)'],
    spoken: ['Portuguese: native', 'English: full professional', 'Spanish: basic'],
    cloudName: 'Cloud and DevOps',
    cloud: [
      { text: 'AWS', key: 'aws', service: 'aws' },
      { text: 'Cloudflare', key: 'cloudflare', service: 'cloudflare' },
      { text: 'Vercel', icon: 'vercel' },
      { text: 'OCI', icon: 'cloudstack', service: 'oci' },
      { text: 'Docker', key: 'docker' },
      { text: 'Terraform', key: 'terraform' },
      { text: 'CloudFormation', icon: 'cloudformation' },
      { text: 'CI/CD', icon: 'cicd' },
      { text: 'GitHub', key: 'github' },
      { text: 'GitLab', key: 'gitlab' },
      { text: 'Linux', key: 'linux' },
    ],
    cloudflareName: 'Cloudflare services',
    cloudflare: [
      { text: 'Workers (API and site)', icon: 'terminal' },
      { text: 'D1', icon: 'database' },
    ],
    ociName: 'OCI services',
    oci: [{ text: 'Compute (Always Free)', icon: 'cloudstack' }],
    awsName: 'AWS services',
    aws: [
      { title: 'Compute', items: [{ text: 'Lightsail', key: 'awsLightsail' }, { text: 'EC2', key: 'awsEc2' }, { text: 'ECS', key: 'awsEcs' }, { text: 'Task Definitions', key: 'awsEcsTask' }, { text: 'Fargate', key: 'awsFargate' }, { text: 'Fargate Spot', key: 'awsFargate' }, { text: 'Bastion host', key: 'awsBastion' }, { text: 'AMIs', key: 'awsAmi' }] },
      { title: 'Networking', items: [{ text: 'VPC', key: 'awsVpc' }, { text: 'Public and private network', icon: 'network' }, { text: 'Security Groups', icon: 'shield' }, { text: 'ALB', key: 'awsAlb' }, { text: 'Elastic IP', key: 'awsEip' }, { text: 'NAT Gateway', key: 'awsNat' }] },
      { title: 'Data and storage', items: [{ text: 'RDS', key: 'awsRds' }, { text: 'S3', key: 'awsS3' }, { text: 'Timestream', key: 'awsTimestream' }, { text: 'Snapshots', key: 'awsSnapshot' }] },
      { title: 'Messaging and streaming', items: [{ text: 'SQS', key: 'awsSqs' }, { text: 'SNS', key: 'awsSns' }, { text: 'Kinesis', key: 'awsKinesis' }, { text: 'Firehose', key: 'awsFirehose' }] },
      { title: 'Security, observability and costs', items: [{ text: 'IAM', key: 'awsIam' }, { text: 'ACM', key: 'awsAcm' }, { text: 'Secrets Manager', key: 'awsSecrets' }, { text: 'CloudWatch', key: 'awsCloudwatch' }, { text: 'EventBridge', key: 'awsEventbridge' }, { text: 'Cost Management', key: 'awsCost' }] },
    ],
    mlName: 'AI and machine learning',
    ml: [
      { text: 'PyTorch', key: 'pytorch' },
      { text: 'TensorFlow', key: 'tensorflow' },
      { text: 'Transformers', icon: 'layers' },
      { text: 'LLMs, OpenAI', key: 'openai' },
      { text: 'Hugging Face', key: 'huggingface' },
      { text: 'Keras', key: 'keras' },
      { text: 'Neural networks', icon: 'network' },
      { text: 'Random Forest', icon: 'forest' },
      { text: 'Time series', icon: 'series' },
      { text: 'Metaheuristics', icon: 'target', service: 'meta' },
      { text: 'Optuna', icon: 'sliders' },
    ],
    metaName: 'Metaheuristics',
    meta: [
      { text: 'PSO', icon: 'target' },
      { text: 'MOPSO', icon: 'target' },
      { text: 'GWO', icon: 'target' },
      { text: 'MOGWO', icon: 'target' },
    ],
    linuxName: 'Linux distributions',
    claudeName: 'How I work with AI',
    claude: [
      { text: 'SDD (Spec-Driven Development)', icon: 'spec' },
      { text: 'Skills', icon: 'layers' },
      { text: 'Agents', icon: 'skills' },
      { text: 'Workflows', icon: 'cicd' },
      { text: 'Hooks', icon: 'sliders' },
      { text: 'MCPs', icon: 'network' },
    ],
    aiName: 'Development with AI',
    aiTools: [{ text: 'Claude', key: 'claude', service: 'claude' }, { text: 'Codex', key: 'openai' }, { text: 'GitHub Copilot', key: 'githubcopilot' }],
    ai: [
      { title: 'Skills', icon: 'skills', text: 'Building skills for Claude: recurring routines become reusable, standardized workflows.' },
      { title: 'SDD', icon: 'spec', text: 'Spec-driven development: the specification guides implementation and validation.' },
      { title: 'This portfolio', icon: 'layout', text: 'Redesigned with Claude Code, using design skills, parallel subagents and cross-review across models.' },
    ],
    awards: [
      'Task management awards: Recognized more than once for rigorous tracking of the tasks under my responsibility',
      'Honorable mention for attendance: Highest attendance among the students of the SENAI technical course',
      'Honorable mention for performance: Highest overall grade in the class in the SENAI technical course',
      'MAPCOM award: First place among freshmen and third place on the global podium',
      'Top Grade Student award: Recognition for academic performance',
      'FLL robotics tournament: Team qualified from the selection stage through the regional stage, reaching the national stage',
    ],
  },
};

const DATA = {
  portuguese: {
    ui: {
      navLabel: 'Seções do portfólio',
      nav: { profile: 'Perfil', journey: 'Experiência', programming: 'Programação', school: 'Formação', publications: 'Publicações', professional: 'Profissional', company: 'Empresa', projects: 'Projetos' },
      role: 'Tech Lead em engenharia de software: sistemas distribuídos, AWS e DevOps',
      lead: 'Engenheiro da Computação e mestre pela UFES, com pesquisa em IA e machine learning. Fundador da Loomis.',
      ctaProjects: 'Ver projetos',
      demo: 'Ver demo',
      cv: 'Currículo',
      cvTitle: 'Currículo em PDF',
      cvDownload: 'Baixar PDF',
      cvLangLabel: 'Idioma do currículo',
      cvNewTab: 'Abrir em nova aba',
      cvClose: 'Fechar',
      progTabsLabel: 'Áreas de tecnologia',
      tabIa: 'IA',
      tabCloud: 'Cloud',
      tabLang: 'Linguagens',
      eduTabsLabel: 'Áreas da formação',
      tabEdu: 'Escolaridade',
      tabCourses: 'Cursos',
      tabAwards: 'Premiações',
      pubYearsLabel: 'Publicações por ano',
      projTabsLabel: 'Projetos por área',
      journeyTitle: 'Trajetória e experiência',
      chartHint: 'Do primeiro código à liderança técnica. Clique em uma linha para ver cargos e atividades; cada degrau da barra é uma mudança de cargo ou de nível.',
      tabProjFront: 'Front-end',
      tabProjAi: 'IA e machine learning',
      tabProjBack: 'Back-end e dados',
      tabProjOther: 'Acadêmicos e outros',
      photoAlt: 'Retrato de Willian Pacheco Silva',
      badgeTitle: 'Mestre em Engenharia Elétrica',
      badgeText: 'UFES, 2026',
      badgeWorkTitle: 'Tech Lead',
      badgeWorkText: '2Solve, desde jan. 2026',
      badgeCompanyTitle: 'Fundador da Loomis',
      badgeCompanyText: 'Desde jan. 2026',
      aboutTitle: 'Sobre',
      focusTitle: 'Em foco',
      chartTitle: 'Trajetória',
      timelineAria: 'Linha do tempo de 2015 até hoje com a formação e a atuação profissional',
      languagesTitle: 'Idiomas',
      contactTitle: 'Vamos conversar',
      contactText: 'Arquitetura de software, liderança técnica ou um projeto com a Loomis: escreva para mim.',
      email: 'Enviar e-mail',
      langAria: 'PT EN: mudar o idioma para inglês',
      themeToDark: 'Ativar o tema escuro',
      themeToLight: 'Ativar o tema claro',
      groups: { front: 'Front-end', back: 'Back-end', infra: 'Infraestrutura' },
    },
    profile: {
      bio: [
        'Atuo em arquitetura de soluções e liderança técnica, no ciclo completo de desenvolvimento: sistemas escaláveis, padrões de engenharia e qualidade em cada etapa. Hoje conduzo times, desenho soluções corporativas e integro plataformas.',
        'Descobri a programação em 2015, com apenas 14 anos, e em 2018 comecei a desenvolver na empresa da família, enquanto fazia o curso técnico do SENAI. Concluí Engenharia da Computação na UFES em 2023 e o mestrado em 2026, com foco em computação: IA e machine learning aplicados à fusão sensorial e a sensores FBG, com artigos em congressos do IEEE e em periódico.',
      ],
      socialNetworks: [
        { name: 'GitHub', key: 'github', link: 'https://github.com/itswillian' },
        { name: 'E-mail', key: 'gmail', link: 'mailto:willianpacheco31@gmail.com' },
        { name: 'LinkedIn', key: 'linkedin', link: 'https://www.linkedin.com/in/pachecowillians/' },
        { name: 'Currículo', key: 'curriculum', link: 'https://drive.google.com/file/d/10T7wsvErw2WzI4i0kHaKw1mO8OO4s93L/view?usp=sharing' },
      ],
    },
    programming: {
      informationText: 'Ferramentas e tecnologias com que trabalho: IA, cloud e linguagens.',
    },
    school: {
      informationText: 'Minha formação e alguns cursos que concluí.',
      titles: {
        scholarity: 'Formação',
        courses: 'Cursos',
        certificate: 'Links',
        proofNote: 'Certificados e comprovações disponíveis mediante contato.',
        description: 'Descrição',
        subjectsStudied: 'Conteúdo estudado',
        awards: 'Premiações e reconhecimentos',
      },
      schooling: [
        {
          name: 'Mestrado em Engenharia Elétrica - Telecomunicações e Tecnologia da Informação (TTI)',
          institution: 'UFES',
          referenceName: 'ufesmaster',
          date: '2024 - 2026',
          links: [
            { name: 'Dissertação no repositório do PPGEE/UFES', ref: 'https://ele.ufes.br/pt-br/pos-graduacao/PPGEE/detalhes-da-tese?id=23875' },
          ],
          description: 'Foco em computação: inteligência artificial e machine learning.\n\nOrientação do Prof. Dr. Helder Roberto de Oliveira Rocha e coorientação da Profa. Dra. Maria José Pontes.\n\nDissertação defendida em 23/06/2026: "Fusão sensorial baseada em sensores FBG para estimativa robusta de nível de líquidos em ambientes com ruído". Estima o nível em ambientes bifásicos água-óleo, fundindo sensores ópticos FBG com redes neurais dinâmicas. Em cerca de 8.300 amostras, MLP, CNN e LNN foram otimizadas com Optuna e testadas sob ruído gaussiano e ruído colorido 1/f. A LNN foi a mais robusta nos cenários degradados, embora o R² muito alto sem ruído deva ser lido com cautela. O MOGWO identificou configurações Pareto-ótimas dos parâmetros geométricos dos sensores, como direcionamento de projeto, e não como validação experimental.\n\nBanca: Helder Roberto de Oliveira Rocha (presidente), Mariana Lyra Silveira (examinadora interna), Claunir Pavan (examinador externo) e Maria José Pontes (coorientadora).',
          subjectsStudied: [
            'Python',
            'TensorFlow',
            'Machine learning',
            'Inteligência artificial',
            'Sensores FBG',
            'Fusão sensorial',
            'Deep learning: MLP, CNN e LNN (redes neurais de tempo contínuo)',
            'Otimização de hiperparâmetros com Optuna',
            'Otimização meta-heurística: GWO, PSO e versões multiobjetivo (MOGWO e MOPSO)',
            'Testes de robustez a ruído gaussiano e ruído colorido 1/f',
          ],
        },
        {
          name: 'Bacharelado em Engenharia da Computação',
          institution: 'UFES',
          referenceName: 'ufes',
          date: '2019 - 2023',
          links: [],
          proof: true,
          description: 'Concluído em 2023. Trabalho de conclusão de curso: "Análise da fusão sensorial em redes neurais convolucionais para previsão de níveis de líquido com sensores óticos FBG", orientado pelo Prof. Dr. Guilherme Fernandes de Souza Miguel.',
          subjectsStudied: [
            'Python',
            'MySQL',
            'Docker',
            'C / C++',
            'Java',
            'MIPS assembly',
            'Processing',
            'Estruturas de dados',
            'Programação orientada a objetos',
            'UML',
            'Metodologias ágeis e tradicionais de desenvolvimento de software',
            'Manipulação de arquivos',
            'Alocação estática e dinâmica de memória',
            'Arquitetura de computadores',
            'Sistemas operacionais',
            'Operadores bitwise',
            'Eletrônica analógica e digital',
            'Algoritmos computacionais de interpolação e regressão',
            'Cálculo integral, diferencial e limites',
            'Análise de circuitos elétricos no domínio do tempo e da frequência',
            'Criação de blocos de controle utilizando máquinas de estado',
            'Solução de sistemas lineares',
            'Projeto elétrico residencial',
            'Mecânica clássica',
            'Eletromagnetismo',
          ],
        },
        {
          name: 'Curso Técnico em Desenvolvimento de Sistemas',
          institution: 'SENAI',
          referenceName: 'ctds01',
          date: '2017 - 2018',
          links: [],
          proof: true,
          description: 'Realizado com a bolsa integral EBEP do ensino médio. Duas menções honrosas: maior nota geral da turma e maior assiduidade.',
          subjectsStudied: [
            'Programação orientada a objetos',
            'SQL Server',
            'Modelo MVC',
            'C#',
            '.NET',
            'Metodologias ágeis e tradicionais de desenvolvimento de software',
            'UML',
            'Teste de sistemas',
            'Pacote Office (Word, Excel e PowerPoint)',
            'VisuAlg',
          ],
        },
        {
          name: 'Ensino Médio',
          institution: 'SESI',
          referenceName: 'ensinomedio',
          date: '2016 - 2018',
          links: [],
          proof: true,
          description: 'Cursado com a bolsa integral EBEP, oferecida aos alunos de destaque.',
          subjectsStudied: [
            'Arte',
            'Biologia',
            'Educação física',
            'Filosofia',
            'Física',
            'Geografia',
            'História',
            'Português',
            'Matemática',
            'Química',
            'Redação',
            'Sociologia',
            'Inglês',
          ],
        },
      ],
      courses: [
        {
          name: 'Séries Temporais e Análises Preditivas com Python',
          institution: 'Udemy',
          referenceName: 'temporalSeries',
          date: '2023',
          links: [],
          proof: true,
          description: 'Análise de séries temporais com Python: pré-processamento, métodos estatísticos, machine learning, Transformers e detecção de anomalias.',
          subjectsStudied: [
            'Fundamentos: decomposição (sazonalidade, tendência, resíduos) e autocorrelação',
            'Pré-processamento e visualização de dados temporais',
            'Médias móveis, estacionariedade e remoção de tendência e sazonalidade',
            'Previsão estatística: suavização exponencial, Holt-Winters, ARIMA e Auto-ARIMA',
            'Machine learning e deep learning: Keras, random forest, MLP, RNN, LSTM e GRU',
            'Transformers com PyTorch na previsão de séries temporais',
            'Detecção de anomalias: média móvel, suavização exponencial, STL e ARIMA',
          ],
        },
        {
          name: 'Designer Web & Mobile Completo: UI/UX, Figma, +mais',
          institution: 'Udemy',
          referenceName: 'webandmobile',
          date: '2022',
          links: [],
          proof: true,
          description: 'UI/UX para web e mobile, do esboço ao protótipo no Figma e ao site em HTML e CSS.',
          subjectsStudied: [
            'Princípios de design para web e dispositivos móveis + design vs desenvolvimento web',
            'Esboço, inspiração + estrutura',
            'Wireframes, prototipagem e feedback',
            'Teoria do design + acessibilidade',
            'Design de aplicativos + sistemas de design',
            'Utilizando nosso sistema de design e prototipagem de alta fidelidade com o Figma',
            'Transformar um design no Figma em um site funcional usando HTML e CSS',
            'HTML + HTML5',
            'CSS + CSS3 - Noções básicas de CSS, grid CSS, flexbox, animações CSS',
            'Colocando seu site online',
          ],
        },
        {
          name: 'HTML e CSS: O Início (incluindo 5 Projetos)',
          institution: 'Udemy',
          referenceName: 'htmlcss',
          date: '2022',
          links: [],
          proof: true,
          description: 'Fundamentos de HTML e CSS, com cinco projetos web práticos.',
          subjectsStudied: [
            'HTML com boas práticas e estruturação de layouts',
            'CSS aplicado a páginas web, com as propriedades mais usadas em exemplos de projetos reais',
            'HTML e CSS como são usados no mercado',
            'Desenvolvimento de projetos web',
          ],
        },
        {
          name: 'CS50 - Introdução à Ciência da Computação',
          institution: 'Harvard',
          referenceName: 'cs50',
          date: '2020',
          links: [],
          proof: true,
          description: 'Introdução à Ciência da Computação de Harvard (CS50), oferecida pelo edX.',
          subjectsStudied: [
            'Python',
            'C',
            'SQL',
            'Ponteiros',
            'Alocação estática de memória',
            'Alocação dinâmica de memória',
            'Análise de dados em arquivo csv',
            'Integração com banco de dados sqlite3',
            'Processamento e filtro de imagens',
            'Manipulação de arquivos',
            'Estruturas condicionais',
            'Estruturas de repetição',
            'Estruturas de dados',
            'Execução com passagem de parâmetros no terminal',
            'Expressões regulares',
            'Detecção de voz',
          ],
        },
        {
          name: 'Introdução à Internet das Coisas',
          institution: 'Code IoT',
          referenceName: 'iot101',
          date: '2020',
          links: [],
          proof: true,
          description: 'Conceitos, aplicações e tendências de Internet das Coisas, incluindo o projeto de soluções para problemas reais.',
          subjectsStudied: [
            'Funcionamento da Internet',
            'Aplicação da Internet das Coisas no dia a dia',
            'Conceitos e tendências de Internet das Coisas',
            'Identificar problemas e imaginar soluções com Internet das Coisas',
            'Ferramentas para desenvolver soluções de Internet das Coisas',
          ],
        },
        {
          name: 'Aplicativos para dispositivos móveis',
          institution: 'Code IoT',
          referenceName: 'iot105',
          date: '2020',
          links: [],
          proof: true,
          description: 'Criação de aplicativos para smartphones com o AppInventor.',
          subjectsStudied: [
            'Entender na prática os princípios básicos da criação de aplicativos',
            'Interface e programação de aplicativos no App Inventor',
            'Conceitos de design e usabilidade de aplicativos',
            'Aplicativos executados em smartphone e tablet',
          ],
        },
        {
          name: 'Dominando Modelagem 3D com Blender para Iniciantes',
          institution: 'Udemy',
          referenceName: 'blenderforbeginners',
          date: '2020',
          links: [],
          proof: true,
          description: 'Modelagem 3D com Blender 2.8, do zero até projetos próprios.',
          subjectsStudied: [
            'Ferramentas de modelagem do Blender 2.8',
            'Técnicas de modelagem 3D',
            'Série de exercícios práticos',
            'Modelagem de um pequeno robô',
          ],
        },
        {
          name: 'Inglês intermediário I',
          institution: 'UECE e Dell',
          referenceName: 'inglesintermediario',
          date: '2020',
          links: [],
          proof: true,
          description: 'Inglês intermediário I, curso da Universidade Estadual do Ceará (UECE) em parceria com a Dell, realizado pelo IDESCO.',
          subjectsStudied: [
            'Aula 1 - What are you like?',
            'Aula 2 - I used to do a lot of things',
            'Aula 3 - Talking about future events',
            'Aula 4 - Have you finished it yet?',
            'Aula 5 - What should I do?',
            'Aula 6 - How healthy are you?',
            'Aula 7 - Take out the trash',
            'Aula 8 - If you study English, you will learn it!',
          ],
        },
        {
          name: 'Desvendando a Indústria 4.0',
          institution: 'SENAI',
          referenceName: 'senaiindustria',
          date: '2020',
          links: [],
          proof: true,
          description: 'Curso do SENAI-SP sobre os conceitos e as tecnologias da Indústria 4.0, com aplicações reais na indústria.',
          subjectsStudied: [
            'Indústria 4.0',
            'Evolução industrial',
            'Big data',
            'Robótica avançada',
            'Segurança digital',
            'Computação em nuvem',
            'Manufatura digital',
            'Manufatura aditiva',
            'Integração de sistemas',
          ],
        },
        {
          name: 'Aprenda JavaScript com Diversão - Construa um Jogo UFO Hunter',
          institution: 'Udemy',
          referenceName: 'ufohunter',
          date: '2019',
          links: [],
          proof: true,
          description: 'Fundamentos de JavaScript e desenvolvimento de jogos.',
          subjectsStudied: [
            'Fundamentos JavaScript',
            'Fundamentos de desenvolvimento de jogos',
            'Jogo no estilo Space Invaders',
          ],
        },
      ],
    },
    professional: {
      informationText: 'Software do back-end à nuvem: arquitetura, bancos de dados, infraestrutura e DevOps, com experiência full stack.',
      titles: { website: 'Site', description: 'Descrição', tasks: 'Tarefas' },
      items: [
        {
          name: 'Superprof',
          key: 'superprof',
          date: '2025 - Presente',
          roles: [
            {
              title: 'Professor particular, nível Super Professor',
              date: 'dez. 2025 - Presente',
              paragraphs: [
                'Professor autônomo na plataforma Superprof: aulas personalizadas de Matemática, Programação e Música, hoje de forma ocasional.',
              ],
            },
            { title: 'Professor particular, nível Recomendado', date: 'out. 2025 - dez. 2025', paragraphs: ['Base de alunos em crescimento e didática cada vez mais consolidada, a caminho do nível Super Professor.'] },
            { title: 'Professor particular, nível Iniciante', date: 'jun. 2025 - out. 2025', paragraphs: ['Primeiras aulas na plataforma e construção da base de alunos.'] },
          ],
          tasks: [
            'Planejamento e condução de aulas',
            'Elaboração de materiais atualizados e adaptados ao perfil de cada estudante',
            'Acompanhamento contínuo da evolução do aluno por meio de feedbacks estruturados',
            'Preparação para avaliações, trabalhos e reforço acadêmico',
            'Desenvolvimento de projetos práticos de programação e orientação técnica',
            'Ensino de fundamentos e práticas musicais para iniciantes e intermediários',
          ],
        },
        {
          name: '2Solve Inteligência Tecnológica',
          key: 'twosolve',
          date: '2024 - Presente',
          roles: [
            {
              title: 'Tech Lead',
              date: 'jan. 2026 - Presente',
              paragraphs: [
                'Lidero tecnicamente o time de engenharia de software, com visão estratégica e participação prática: decisões críticas de arquitetura, padrões de engenharia e qualidade de código.',
                'Atuo direto em desenvolvimento e revisão de código, arquitetura, infraestrutura em nuvem e decisões de banco de dados (modelagem, desempenho, disponibilidade e confiabilidade).',
              ],
            },
            {
              title: 'Desenvolvedor Backend Pleno Nível II',
              date: 'nov. 2025 - jan. 2026',
              paragraphs: [
                'Liderança técnica de projetos estratégicos: treinamentos em português e inglês, acompanhamento individual, revisões de código e definição de padrões.',
                'Arquitetura e manutenção da infraestrutura na AWS: servidores Linux em EC2, microsserviços em ECS Fargate, pipelines, automações e provisionamento com Terraform.',
              ],
            },
            {
              title: 'Desenvolvedor Backend Nível 2',
              date: 'mar. 2024 - nov. 2025',
              paragraphs: [
                'Desenvolvimento back-end em Python, com imagens Docker, deploy em instâncias EC2 da AWS e integração com bancos de dados.',
              ],
            },
          ],
        },
        {
          name: 'Fundação Espírito-santense de Tecnologia (FEST)',
          key: 'fest',
          date: '2023 - 2026',
          roles: [
            {
              title: 'Pesquisa: iniciação científica e projeto de pesquisa',
              date: 'jul. 2023 - jun. 2026',
              paragraphs: [
                'Projeto "Perfilador com Fibra Óptica para Tanques de FPSO" (Floating Production Storage and Offloading), desde 01/07/2023: iniciação científica na graduação e, no mestrado, pesquisa em paralelo à dissertação. Analisei os dados do perfilador para relacionar as leituras dos sensores aos níveis de água e óleo em tanques da Petrobras, apoiando a eficiência operacional e a tomada de decisões.',
              ],
            },
          ],
        },
        {
          name: 'Quantum Tecnologia',
          key: 'quant1',
          date: '2023 - 2024',
          link: 'https://www.quant1.com.br/',
          roles: [
            { title: 'Estagiário em Desenvolvimento de IA - Desenvolvimento Full Cycle', date: 'jun. 2023 - jan. 2024', paragraphs: [] },
          ],
          description: 'Empresa de tecnologia que, desde 2020, entrega soluções sob medida para que os clientes usem a tecnologia a favor dos negócios.',
          tasks: [
            'Análise exploratória de tecnologias de IA',
            'Uso de LLMs para processamento de texto e áudio',
            'Análise exploratória do forecasting de séries temporais',
            'Criação de ferramentas e chatbots usando OpenAI',
            'Python com clean code e orientação a objetos',
            'Containerização com Docker',
            'Implementação de CI/CD',
            'Criação de APIs com Swagger',
            'Criação de documentação com PlantUML',
            'Gerenciamento de projetos com o OpenProject',
            'Versionamento de código com Git e GitLab',
          ],
        },
        {
          name: 'Controle Eletrônica',
          key: 'controleeletronica',
          date: '2018',
          roles: [
            { title: 'Desenvolvedor Full Stack - Aplicações Web e Desktop', date: 'jan. 2018 - dez. 2018', paragraphs: [] },
          ],
          description: 'Empresa familiar, hoje encerrada, que fabricava e mantinha produtos eletrônicos, como relés temporizadores, sequenciadoras e indicadores digitais.',
          tasks: [
            'Implementação e manutenção do site da empresa',
            'Manutenção do ERP da empresa',
            'Programação de microcontroladores',
            'Análise de estoque',
            'Desenvolvimento e otimização dos produtos',
            'Montagem e manutenção de eletrônicos',
            'Operação de máquinas pick and place',
            'Desenvolvimento em Pascal, C, C++ e Python',
            'Bancos de dados MySQL e PostgreSQL com SQL',
            'Web design responsivo com HTML, CSS, JavaScript e Bootstrap',
            'Design gráfico e edição de vídeos de demonstração da empresa',
            'Containerização com Docker',
          ],
        },
      ],
    },
    projects: {
      informationText: 'Uma seleção de projetos de áreas diferentes, do front-end à IA e ao machine learning. Todos públicos no GitHub.',
      items: [
        {
          name: 'Lista de presentes de casamento',
          link: 'https://github.com/itswillian/react-wedding-gifts',
          demo: 'https://presentes-de-casamento.vercel.app/',
          date: 'Atualizado em ago. 2024',
          key: 'react-wedding-gifts',
          description: 'O casal monta a lista e compartilha com os convidados os presentes que deseja ganhar.',
          tech: ['nextjs', 'reactjs', 'javascript', 'html', 'css'],
        },
        {
          name: 'MOPSO - otimização multiobjetivo',
          link: 'https://github.com/itswillian/particle-swarm-optimization',
          date: 'Atualizado em jul. 2024',
          key: 'particle-swarm-optimization',
          description: 'Otimização por enxame de partículas multiobjetivo (MOPSO) para problemas complexos de alocação de recursos, equilibrando objetivos e restrições.',
          tech: ['python'],
        },
        {
          name: 'SvelteKit Contacts',
          link: 'https://github.com/itswillian/sveltekit-contacts',
          demo: 'https://sveltekit-contacts.vercel.app/',
          date: 'Atualizado em fev. 2024',
          key: 'sveltekit-contacts',
          description: 'Lista de contatos dinâmica feita com SvelteKit.',
          tech: ['svelte', 'javascript', 'html', 'css'],
        },
        {
          name: 'Sentimentos com LLM',
          link: 'https://github.com/itswillian/finetuned-model-api',
          date: 'Atualizado em jan. 2024',
          key: 'finetuned-model-api',
          description: 'API Flask para classificação de sentimento com um modelo da Hugging Face refinado por fine-tuning, com Docker e testes em pytest.',
          tech: ['python', 'flask', 'huggingface', 'docker'],
        },
        {
          name: 'WPS Finance',
          link: 'https://github.com/itswillian/wps-finance',
          date: 'Atualizado em set. 2023',
          key: 'wps-finance',
          description: 'Rastreador pessoal de investimentos: calcula os retornos e mostra a evolução da carteira e do patrimônio.',
          tech: ['python', 'streamlit'],
        },
        {
          name: 'CRUD com microsserviços',
          link: 'https://github.com/itswillian/node-crud-microservice',
          date: 'Atualizado em jun. 2023',
          key: 'node-crud-microservice',
          description: 'Microsserviço CRUD em Node.js executado em Docker, Docker Swarm e Kubernetes, com PostgreSQL.',
          tech: ['nodejs', 'docker', 'kubernetes', 'postgresql'],
        },
        {
          name: 'Closing Price GAN',
          link: 'https://github.com/itswillian/closing-price-gan',
          date: 'Atualizado em mai. 2023',
          key: 'closing-price-gan',
          description: 'Rede generativa adversarial (GAN) para prever preços de fechamento do mercado financeiro, treinada com dados históricos.',
          tech: ['python', 'tensorflow', 'keras'],
        },
        {
          name: 'WPS Termo',
          link: 'https://github.com/itswillian/wps-termo',
          demo: 'https://wps-termo.vercel.app/',
          date: 'Atualizado em mai. 2023',
          key: 'wps-termo',
          description: 'Clone do jogo term.ooo, feito com Next.js e TypeScript.',
          tech: ['nextjs', 'reactjs', 'typescript', 'html', 'css'],
        },
        {
          name: 'WPS - Timer',
          link: 'https://github.com/itswillian/wps-timer',
          demo: 'https://wps-timer.vercel.app/',
          date: 'Atualizado em mai. 2023',
          key: 'wpstimer',
          description: 'Temporizador para o método Pomodoro, com tempos pré-definidos, alerta sonoro e notificação ao fim.',
          tech: ['nextjs', 'reactjs', 'javascript', 'typescript', 'html', 'css'],
        },
        {
          name: 'OpenCV',
          link: 'https://github.com/itswillian/opencv',
          date: 'Atualizado em mai. 2023',
          key: 'opencv',
          description: 'Série de projetos de visão computacional com OpenCV: processamento de imagens, detecção de objetos e regiões de interesse.',
          tech: ['python', 'opencv'],
        },
        {
          name: 'Front-end do processo seletivo inPeace',
          link: 'https://github.com/itswillian/inpeace-frontend',
          date: 'Atualizado em mai. 2023',
          key: 'inpeace-frontend',
          description: 'Front-end de um processo seletivo da inPeace: simula uma aplicação de gerenciamento de usuários.',
          tech: ['html', 'javascript', 'sass'],
        },
        {
          name: 'URI Online Judge',
          link: 'https://github.com/itswillian/uri',
          date: 'Atualizado em set. 2022',
          key: 'uri',
          description: 'Soluções de problemas do URI Online Judge em C++, com estruturas de dados, structs, alocação dinâmica, vector, map e pair.',
          tech: ['cplusplus'],
        },
        {
          name: 'TCC - CS50',
          link: 'https://github.com/itswillian/cs50-introduction-to-computer-science',
          date: 'Atualizado em jul. 2022',
          key: 'cs50',
          description: 'Projeto final do CS50 de Harvard: gerenciador de tarefas organizado por datas e tarefas recorrentes.',
          tech: ['python', 'flask', 'html', 'css'],
        },
        {
          name: 'TCC - SENAI',
          link: 'https://github.com/itswillian/tcc-senai',
          date: 'Atualizado em jul. 2022',
          key: 'tcctecnico',
          description: 'TCC do curso técnico do SENAI: site de eventos regionais com login, cadastro e gerenciamento de eventos.',
          tech: ['css', 'html', 'php', 'bootstrap', 'jquery', 'mysql'],
        },
        {
          name: 'Química Orgânica',
          link: 'https://github.com/itswillian/organic-chemistry',
          date: 'Atualizado em jul. 2022',
          key: 'quimicaorganica',
          description: 'Sistema desktop criado a pedido do professor de química do ensino médio para ensinar Química Orgânica com gamificação.',
          tech: ['csharp', 'dotnet', 'windows'],
        },
      ],
    },
  },
  english: {
    ui: {
      navLabel: 'Portfolio sections',
      nav: { profile: 'Profile', journey: 'Experience', programming: 'Programming', school: 'Education', publications: 'Publications', professional: 'Professional', company: 'Company', projects: 'Projects' },
      role: 'Tech Lead in software engineering: distributed systems, AWS and DevOps',
      lead: 'Computer Engineer and UFES master\'s graduate, researching AI and machine learning. Founder of Loomis.',
      ctaProjects: 'See projects',
      demo: 'Live demo',
      cv: 'Resume',
      cvTitle: 'Resume (PDF)',
      cvDownload: 'Download PDF',
      cvLangLabel: 'Resume language',
      cvNewTab: 'Open in new tab',
      cvClose: 'Close',
      progTabsLabel: 'Technology areas',
      tabIa: 'AI',
      tabCloud: 'Cloud',
      tabLang: 'Languages',
      eduTabsLabel: 'Education areas',
      tabEdu: 'Education',
      tabCourses: 'Courses',
      tabAwards: 'Awards',
      pubYearsLabel: 'Publications by year',
      projTabsLabel: 'Projects by area',
      journeyTitle: 'Timeline and experience',
      chartHint: 'From the first line of code to technical leadership. Click a row to see roles and activities; each step in a bar is a change of role or level.',
      tabProjFront: 'Front-end',
      tabProjAi: 'AI and machine learning',
      tabProjBack: 'Back-end and data',
      tabProjOther: 'Academic and other',
      photoAlt: 'Portrait of Willian Pacheco Silva',
      badgeTitle: 'Master\'s in Electrical Engineering',
      badgeText: 'UFES, 2026',
      badgeWorkTitle: 'Tech Lead',
      badgeWorkText: '2Solve, since Jan 2026',
      badgeCompanyTitle: 'Founder of Loomis',
      badgeCompanyText: 'Since Jan 2026',
      aboutTitle: 'About',
      focusTitle: 'Focus',
      chartTitle: 'Timeline',
      timelineAria: 'Timeline from 2015 to today with education and professional work',
      languagesTitle: 'Languages',
      contactTitle: 'Let\'s talk',
      contactText: 'Software architecture, technical leadership or a project with Loomis: write to me.',
      email: 'Send an email',
      langAria: 'PT EN: switch the language to Portuguese',
      themeToDark: 'Turn on dark theme',
      themeToLight: 'Turn on light theme',
      groups: { front: 'Front-end', back: 'Back-end', infra: 'Infrastructure' },
    },
    profile: {
      bio: [
        'I work in solution architecture and technical leadership, across the full development cycle: scalable systems, engineering standards and quality at every stage. Today I lead teams, design enterprise solutions and integrate platforms.',
        'I discovered programming in 2015, at just 14, and in 2018 I started developing at my family\'s company, while taking the SENAI technical course. I completed Computer Engineering at UFES in 2023 and my master\'s in 2026, focused on computing: AI and machine learning applied to sensor fusion and FBG sensors, with papers in IEEE conferences and a journal.',
      ],
      socialNetworks: [
        { name: 'GitHub', key: 'github', link: 'https://github.com/itswillian' },
        { name: 'E-mail', key: 'gmail', link: 'mailto:willianpacheco31@gmail.com' },
        { name: 'LinkedIn', key: 'linkedin', link: 'https://www.linkedin.com/in/pachecowillians/' },
        { name: 'Resume', key: 'curriculum', link: 'https://drive.google.com/file/d/10T7wsvErw2WzI4i0kHaKw1mO8OO4s93L/view?usp=sharing' },
      ],
    },
    programming: {
      informationText: 'Tools and technologies I work with: AI, cloud and languages.',
    },
    school: {
      informationText: 'My education and some courses I completed.',
      titles: {
        scholarity: 'Education',
        courses: 'Courses',
        certificate: 'Links',
        proofNote: 'Certificates and supporting documents available on request.',
        description: 'Description',
        subjectsStudied: 'Subjects studied',
        awards: 'Awards and recognitions',
      },
      schooling: [
        {
          name: 'Master\'s in Electrical Engineering - Telecommunications and Information Technology (TTI)',
          institution: 'UFES',
          referenceName: 'ufesmaster',
          date: '2024 - 2026',
          links: [
            { name: 'Dissertation in the PPGEE/UFES repository (in Portuguese)', ref: 'https://ele.ufes.br/pt-br/pos-graduacao/PPGEE/detalhes-da-tese?id=23875' },
          ],
          description: 'Focus on computing: artificial intelligence and machine learning.\n\nSupervised by Prof. Dr. Helder Roberto de Oliveira Rocha and co-supervised by Prof. Dr. Maria José Pontes.\n\nDissertation defended on June 23, 2026: "Sensor fusion based on FBG sensors for robust liquid level estimation in noisy environments". It estimates level in two-phase water-oil environments by fusing FBG optical sensors with dynamic neural networks. On about 8,300 samples, MLP, CNN and LNN models were tuned with Optuna and tested under Gaussian and 1/f colored noise. The LNN was the most robust in degraded scenarios, although the very high R² without noise should be read with caution. MOGWO identified Pareto-optimal configurations for the sensors\' geometric parameters, as design guidance rather than direct experimental validation.\n\nExamination committee: Helder Roberto de Oliveira Rocha (chair), Mariana Lyra Silveira (internal examiner), Claunir Pavan (external examiner) and Maria José Pontes (co-supervisor).',
          subjectsStudied: [
            'Python',
            'TensorFlow',
            'Machine learning',
            'Artificial intelligence',
            'FBG sensors',
            'Sensor fusion',
            'Deep learning: MLP, CNN and LNN (continuous-time neural networks)',
            'Hyperparameter optimization with Optuna',
            'Metaheuristic optimization: GWO, PSO and multi-objective versions (MOGWO and MOPSO)',
            'Robustness tests under Gaussian and 1/f colored noise',
          ],
        },
        {
          name: 'Bachelor\'s Degree in Computer Engineering',
          institution: 'UFES',
          referenceName: 'ufes',
          date: '2019 - 2023',
          links: [],
          proof: true,
          description: 'Completed in 2023. Final project: "Analysis of sensor fusion in convolutional neural networks for liquid level prediction with FBG optical sensors" (original title in Portuguese), supervised by Prof. Dr. Guilherme Fernandes de Souza Miguel.',
          subjectsStudied: [
            'Python',
            'MySQL',
            'Docker',
            'C / C++',
            'Java',
            'MIPS assembly',
            'Processing',
            'Data structures',
            'Object-oriented programming',
            'UML',
            'Agile and traditional software development methodologies',
            'File handling',
            'Static and dynamic memory allocation',
            'Computer architecture',
            'Operating systems',
            'Bitwise operators',
            'Analog and digital electronics',
            'Interpolation and regression computational algorithms',
            'Differential and integral calculus and limits',
            'Analysis of electrical circuits in the time and frequency domain',
            'Creating control blocks using state machines',
            'Solving linear systems',
            'Residential electrical project',
            'Classical mechanics',
            'Electromagnetism',
          ],
        },
        {
          name: 'Technical Course in Systems Development',
          institution: 'SENAI',
          referenceName: 'ctds01',
          date: '2017 - 2018',
          links: [],
          proof: true,
          description: 'Completed with a full EBEP scholarship. Two honorable mentions: highest overall grade in the class and highest attendance.',
          subjectsStudied: [
            'Object-oriented programming',
            'SQL Server',
            'MVC pattern',
            'C#',
            '.NET',
            'Agile and traditional software development methodologies',
            'UML',
            'Software testing',
            'Office package (Word, Excel and PowerPoint)',
            'VisuAlg',
          ],
        },
        {
          name: 'High School',
          institution: 'SESI',
          referenceName: 'ensinomedio',
          date: '2016 - 2018',
          links: [],
          proof: true,
          description: 'Attended on a full EBEP scholarship for outstanding students.',
          subjectsStudied: [
            'Art',
            'Biology',
            'Physical education',
            'Philosophy',
            'Physics',
            'Geography',
            'History',
            'Portuguese',
            'Math',
            'Chemistry',
            'Writing',
            'Sociology',
            'English',
          ],
        },
      ],
      courses: [
        {
          name: 'Time Series and Predictive Analysis with Python',
          institution: 'Udemy',
          referenceName: 'temporalSeries',
          date: '2023',
          links: [],
          proof: true,
          description: 'Time series analysis with Python: pre-processing, statistical methods, machine learning, Transformers and anomaly detection.',
          subjectsStudied: [
            'Fundamentals: decomposition (seasonality, trend, residuals) and autocorrelation',
            'Pre-processing and visualization of temporal data',
            'Moving averages, stationarity and removal of trend and seasonality',
            'Statistical forecasting: exponential smoothing, Holt-Winters, ARIMA and Auto-ARIMA',
            'Machine learning and deep learning: Keras, random forest, MLP, RNN, LSTM and GRU',
            'Transformers with PyTorch for time series forecasting',
            'Anomaly detection: moving average, exponential smoothing, STL and ARIMA',
          ],
        },
        {
          name: 'Complete Web & Mobile Designer: UI/UX, Figma, +more',
          institution: 'Udemy',
          referenceName: 'webandmobile',
          date: '2022',
          links: [],
          proof: true,
          description: 'UI/UX for web and mobile, from sketch to a Figma prototype and a working HTML and CSS site.',
          subjectsStudied: [
            'Web & mobile design principles + design vs web development',
            'Sketching, inspiration + structure',
            'Wireframes, prototyping and feedback',
            'Design theory + accessibility',
            'Application design + design systems',
            'Using our design system and Hi-Fi prototyping with Figma',
            'Take a Figma design and convert it to a live website using HTML and CSS',
            'HTML + HTML5',
            'CSS + CSS3 - CSS basics, CSS grid, flexbox, CSS animations',
            'Putting your website online',
          ],
        },
        {
          name: 'HTML and CSS: The Beginning (including 5 Projects)',
          institution: 'Udemy',
          referenceName: 'htmlcss',
          date: '2022',
          links: [],
          proof: true,
          description: 'HTML and CSS fundamentals, with five hands-on web projects.',
          subjectsStudied: [
            'HTML with good practices and layout structure',
            'CSS for web pages, with the most used properties in real-project examples',
            'HTML and CSS as used in industry',
            'Web project development',
          ],
        },
        {
          name: 'CS50 - Introduction to Computer Science',
          institution: 'Harvard',
          referenceName: 'cs50',
          date: '2020',
          links: [],
          proof: true,
          description: 'Harvard\'s Introduction to Computer Science (CS50), offered on edX.',
          subjectsStudied: [
            'Python',
            'C',
            'SQL',
            'Pointers',
            'Static memory allocation',
            'Dynamic memory allocation',
            'Data analysis of CSV files',
            'Integration with sqlite3 database',
            'Image processing and filtering',
            'File manipulation',
            'Conditional structures',
            'Loops',
            'Data structures',
            'Execution with passing parameters in the terminal',
            'Regular expressions',
            'Voice detection',
          ],
        },
        {
          name: 'Introduction to the Internet of Things',
          institution: 'Code IoT',
          referenceName: 'iot101',
          date: '2020',
          links: [],
          proof: true,
          description: 'Internet of Things concepts, applications and trends, including designing solutions for real problems.',
          subjectsStudied: [
            'How the Internet works',
            'Application of the Internet of Things in everyday life',
            'Internet of Things concepts and trends',
            'Identify problems and imagine solutions with the Internet of Things',
            'Tools to develop Internet of Things solutions',
          ],
        },
        {
          name: 'Mobile App Development',
          institution: 'Code IoT',
          referenceName: 'iot105',
          date: '2020',
          links: [],
          proof: true,
          description: 'Building smartphone apps with AppInventor.',
          subjectsStudied: [
            'Understand the basic principles of application creation in practice',
            'App interface and programming in App Inventor',
            'App design and usability concepts',
            'Apps running on smartphone and tablet',
          ],
        },
        {
          name: 'Mastering 3D Modeling With Blender For Beginners',
          institution: 'Udemy',
          referenceName: 'blenderforbeginners',
          date: '2020',
          links: [],
          proof: true,
          description: '3D modeling with Blender 2.8, from zero to personal projects.',
          subjectsStudied: [
            'Blender 2.8 modeling tools',
            '3D modeling techniques',
            'A series of hands-on exercises',
            'Modeling a small robot',
          ],
        },
        {
          name: 'Intermediate English I',
          institution: 'UECE and Dell',
          referenceName: 'inglesintermediario',
          date: '2020',
          links: [],
          proof: true,
          description: 'Intermediate English I, a course from the State University of Ceará (UECE) in partnership with Dell, delivered by IDESCO.',
          subjectsStudied: [
            'Class 1 - What are you like?',
            'Class 2 - I used to do a lot of things',
            'Class 3 - Talking about future events',
            'Class 4 - Have you finished it yet?',
            'Class 5 - What should I do?',
            'Class 6 - How healthy are you?',
            'Class 7 - Take out the trash',
            'Class 8 - If you study English, you will learn it!',
          ],
        },
        {
          name: 'Unveiling Industry 4.0',
          institution: 'SENAI',
          referenceName: 'senaiindustria',
          date: '2020',
          links: [],
          proof: true,
          description: 'SENAI-SP course on Industry 4.0 concepts and technologies, with real industrial applications.',
          subjectsStudied: [
            'Industry 4.0',
            'Industrial evolution',
            'Big data',
            'Advanced robotics',
            'Digital security',
            'Cloud computing',
            'Digital manufacturing',
            'Additive manufacturing',
            'Systems integration',
          ],
        },
        {
          name: 'Learn JavaScript with Fun - Build an UFO Hunter Game',
          institution: 'Udemy',
          referenceName: 'ufohunter',
          date: '2019',
          links: [],
          proof: true,
          description: 'JavaScript fundamentals and game development.',
          subjectsStudied: [
            'JavaScript fundamentals',
            'Game development fundamentals',
            'Space Invaders-style game',
          ],
        },
      ],
    },
    professional: {
      informationText: 'Software from back end to cloud: architecture, databases, infrastructure and DevOps, backed by full stack experience.',
      titles: { website: 'Website', description: 'Description', tasks: 'Tasks' },
      items: [
        {
          name: 'Superprof',
          key: 'superprof',
          date: '2025 - Present',
          roles: [
            {
              title: 'Private tutor, Super Professor level',
              date: 'Dec 2025 - Present',
              paragraphs: [
                'Self-employed tutor on the Superprof platform: personalized Mathematics, Programming and Music lessons, nowadays on an occasional basis.',
              ],
            },
            { title: 'Private tutor, Recommended level', date: 'Oct 2025 - Dec 2025', paragraphs: ['A growing student base and an increasingly consolidated teaching method, on the way to the Super Professor level.'] },
            { title: 'Private tutor, Beginner level', date: 'Jun 2025 - Oct 2025', paragraphs: ['First lessons on the platform, building a student base.'] },
          ],
          tasks: [
            'Lesson planning and delivery',
            'Preparation of up-to-date materials adapted to each student\'s profile',
            'Continuous follow-up of student progress through structured feedback',
            'Preparation for exams, assignments and academic reinforcement',
            'Development of practical programming projects and technical guidance',
            'Teaching musical fundamentals and practice to beginners and intermediates',
          ],
        },
        {
          name: '2Solve Inteligência Tecnológica',
          key: 'twosolve',
          date: '2024 - Present',
          roles: [
            {
              title: 'Tech Lead',
              date: 'Jan 2026 - Present',
              paragraphs: [
                'I technically lead the software engineering team, with strategic vision and hands-on involvement: critical architecture decisions, engineering standards and code quality.',
                'I work directly on development and code review, architecture, cloud infrastructure and database decisions (modeling, performance, availability and reliability).',
              ],
            },
            {
              title: 'Mid-level Backend Developer II',
              date: 'Nov 2025 - Jan 2026',
              paragraphs: [
                'Technical leadership of strategic projects: training in Portuguese and English, one-on-one follow-up, code reviews and standards.',
                'Architecture and maintenance of the AWS infrastructure: Linux servers on EC2, microservices on ECS Fargate, pipelines, automation and provisioning with Terraform.',
              ],
            },
            {
              title: 'Backend Developer Level 2',
              date: 'Mar 2024 - Nov 2025',
              paragraphs: [
                'Back-end development in Python, with Docker images, deployment on AWS EC2 instances and database integration.',
              ],
            },
          ],
        },
        {
          name: 'Fundação Espírito-santense de Tecnologia (FEST)',
          key: 'fest',
          date: '2023 - 2026',
          roles: [
            {
              title: 'Research: undergraduate scholarship and research project',
              date: 'Jul 2023 - Jun 2026',
              paragraphs: [
                'Project "Optical Fiber Profiler for FPSO Tanks" (Floating Production Storage and Offloading), since July 1, 2023: undergraduate research scholarship and, during the master\'s, research in parallel with the thesis. I analyzed the profiler data to relate sensor readings to water and oil levels in Petrobras tanks, supporting operational efficiency and decision-making.',
              ],
            },
          ],
        },
        {
          name: 'Quantum Tecnologia',
          key: 'quant1',
          date: '2023 - 2024',
          link: 'https://www.quant1.com.br/',
          roles: [
            { title: 'AI Development Intern - Full Cycle Development', date: 'Jun 2023 - Jan 2024', paragraphs: [] },
          ],
          description: 'A technology company that, since 2020, delivers custom solutions so clients can use technology in favor of their business.',
          tasks: [
            'Exploratory analysis of AI technologies',
            'Use of LLMs for text and audio processing',
            'Exploratory analysis of time series forecasting',
            'Creation of tools and chatbots using OpenAI',
            'Python with clean code and object-oriented design',
            'Containerization with Docker',
            'Implementation of CI/CD',
            'Creation of APIs with Swagger',
            'Creation of documentation with PlantUML',
            'Project management with OpenProject',
            'Code versioning with Git and GitLab',
          ],
        },
        {
          name: 'Controle Eletrônica',
          key: 'controleeletronica',
          date: '2018',
          roles: [
            { title: 'Full Stack Developer - Web and Desktop Applications', date: 'Jan 2018 - Dec 2018', paragraphs: [] },
          ],
          description: 'Family business, now closed, that manufactured and maintained electronic products, such as timer relays, sequencers and digital indicators.',
          tasks: [
            'Company website implementation and maintenance',
            'Maintenance of the company\'s ERP',
            'Microcontroller programming',
            'Inventory analysis',
            'Product development and optimization',
            'Electronics assembly and maintenance',
            'Pick and place machine operation',
            'Development in Pascal, C, C++ and Python',
            'MySQL and PostgreSQL databases with SQL',
            'Responsive web design with HTML, CSS, JavaScript and Bootstrap',
            'Graphic design and editing of the company\'s demonstration videos',
            'Containerization with Docker',
          ],
        },
      ],
    },
    projects: {
      informationText: 'A selection of projects from different areas, from front end to AI and machine learning. All of them are public on GitHub.',
      items: [
        {
          name: 'Wedding gift registry',
          link: 'https://github.com/itswillian/react-wedding-gifts',
          demo: 'https://presentes-de-casamento.vercel.app/',
          date: 'Updated in Aug 2024',
          key: 'react-wedding-gifts',
          description: 'Couples build their list and share with guests the gifts they would like to receive.',
          tech: ['nextjs', 'reactjs', 'javascript', 'html', 'css'],
        },
        {
          name: 'MOPSO - multi-objective optimization',
          link: 'https://github.com/itswillian/particle-swarm-optimization',
          date: 'Updated in Jul 2024',
          key: 'particle-swarm-optimization',
          description: 'Multi-objective particle swarm optimization (MOPSO) for complex resource allocation problems, balancing objectives and constraints.',
          tech: ['python'],
        },
        {
          name: 'SvelteKit Contacts',
          link: 'https://github.com/itswillian/sveltekit-contacts',
          demo: 'https://sveltekit-contacts.vercel.app/',
          date: 'Updated in Feb 2024',
          key: 'sveltekit-contacts',
          description: 'Dynamic contact list built with SvelteKit.',
          tech: ['svelte', 'javascript', 'html', 'css'],
        },
        {
          name: 'Sentiment analysis with an LLM',
          link: 'https://github.com/itswillian/finetuned-model-api',
          date: 'Updated in Jan 2024',
          key: 'finetuned-model-api',
          description: 'Flask API for sentiment classification with a Hugging Face model refined by fine-tuning, with Docker and pytest tests.',
          tech: ['python', 'flask', 'huggingface', 'docker'],
        },
        {
          name: 'WPS Finance',
          link: 'https://github.com/itswillian/wps-finance',
          date: 'Updated in Sep 2023',
          key: 'wps-finance',
          description: 'Personal investment tracker: calculates returns and shows the evolution of the portfolio and net worth.',
          tech: ['python', 'streamlit'],
        },
        {
          name: 'CRUD with microservices',
          link: 'https://github.com/itswillian/node-crud-microservice',
          date: 'Updated in Jun 2023',
          key: 'node-crud-microservice',
          description: 'Node.js CRUD microservice running on Docker, Docker Swarm and Kubernetes, with PostgreSQL.',
          tech: ['nodejs', 'docker', 'kubernetes', 'postgresql'],
        },
        {
          name: 'Closing Price GAN',
          link: 'https://github.com/itswillian/closing-price-gan',
          date: 'Updated in May 2023',
          key: 'closing-price-gan',
          description: 'Generative adversarial network (GAN) to predict closing prices in the financial market, trained on historical data.',
          tech: ['python', 'tensorflow', 'keras'],
        },
        {
          name: 'WPS Termo',
          link: 'https://github.com/itswillian/wps-termo',
          demo: 'https://wps-termo.vercel.app/',
          date: 'Updated in May 2023',
          key: 'wps-termo',
          description: 'Clone of the term.ooo game, built with Next.js and TypeScript.',
          tech: ['nextjs', 'reactjs', 'typescript', 'html', 'css'],
        },
        {
          name: 'WPS - Timer',
          link: 'https://github.com/itswillian/wps-timer',
          demo: 'https://wps-timer.vercel.app/',
          date: 'Updated in May 2023',
          key: 'wpstimer',
          description: 'Timer for the Pomodoro method, with preset times, an audible alert and a notification when time is up.',
          tech: ['nextjs', 'reactjs', 'javascript', 'typescript', 'html', 'css'],
        },
        {
          name: 'OpenCV',
          link: 'https://github.com/itswillian/opencv',
          date: 'Updated in May 2023',
          key: 'opencv',
          description: 'Series of computer vision projects with OpenCV: image processing, object detection and regions of interest.',
          tech: ['python', 'opencv'],
        },
        {
          name: 'inPeace selection process front end',
          link: 'https://github.com/itswillian/inpeace-frontend',
          date: 'Updated in May 2023',
          key: 'inpeace-frontend',
          description: 'Front end for an inPeace selection process: simulates a user management application.',
          tech: ['html', 'javascript', 'sass'],
        },
        {
          name: 'URI Online Judge',
          link: 'https://github.com/itswillian/uri',
          date: 'Updated in Sep 2022',
          key: 'uri',
          description: 'URI Online Judge problem solutions in C++, using data structures, structs, dynamic allocation, vector, map and pair.',
          tech: ['cplusplus'],
        },
        {
          name: 'Final Project - CS50',
          link: 'https://github.com/itswillian/cs50-introduction-to-computer-science',
          date: 'Updated in Jul 2022',
          key: 'cs50',
          description: 'Final project of Harvard\'s CS50: a task manager organized by dates and recurring tasks.',
          tech: ['python', 'flask', 'html', 'css'],
        },
        {
          name: 'Final Project - SENAI',
          link: 'https://github.com/itswillian/tcc-senai',
          date: 'Updated in Jul 2022',
          key: 'tcctecnico',
          description: 'Final project of the SENAI technical course: a regional events site with login, registration and event management.',
          tech: ['css', 'html', 'php', 'bootstrap', 'jquery', 'mysql'],
        },
        {
          name: 'Organic Chemistry',
          link: 'https://github.com/itswillian/organic-chemistry',
          date: 'Updated in Jul 2022',
          key: 'quimicaorganica',
          description: 'Desktop system built at the request of the high school chemistry teacher to teach Organic Chemistry through gamification.',
          tech: ['csharp', 'dotnet', 'windows'],
        },
      ],
    },
  },
};

const SECTION_ICONS = ['profile', 'journey', 'company', 'programming', 'projects', 'publications'];

// Publicações conferidas no ORCID 0009-0004-4888-9408, no Crossref (DOI de cada uma) e no OpenAlex.
// O nome nos registros é "Willian P. Silva".
const ME = 'Willian P. Silva';
const DOI = 'https://doi.org/';
const THESIS_LINK = 'https://ele.ufes.br/pt-br/pos-graduacao/PPGEE/detalhes-da-tese?id=23875';

const PUBLICATIONS = {
  portuguese: {
    informationText: 'Pesquisa em IA, machine learning e redes neurais aplicadas a instrumentação, sensores, monitoramento e otimização energética.',
    timelineNote: 'Durante o mestrado: {n} artigos publicados e a dissertação, na seção [Publicações].',
    kinds: { journal: 'Artigo em periódico', conference: 'Trabalho em congresso', thesis: 'Dissertação de mestrado' },
    items: [
      {
        year: '2026',
        kind: 'journal',
        title: 'Towards smart EVs energy scheduling for a logistic distribution center: cost, emissions and makespan optimizing',
        venue: 'Energy Conversion and Management: X, v. 31, art. 102017, 2026',
        authors: ['Rodrigo Fiorotti', 'Imene Yahyaoui', ME, 'Alysson A. P. Machado', 'Jussara F. Fardin', 'Marcelo E. V. Segatto', 'Helder R. O. Rocha'],
        link: DOI + '10.1016/j.ecmx.2026.102017',
      },
      {
        year: '2026',
        kind: 'thesis',
        title: 'Fusão sensorial baseada em sensores FBG para estimativa robusta de nível de líquidos em ambientes com ruído',
        venue: 'Dissertação de mestrado, PPGEE, Universidade Federal do Espírito Santo, defendida em 23/06/2026',
        authors: [ME],
        link: THESIS_LINK,
      },
      {
        year: '2025',
        kind: 'conference',
        title: 'Robustness of Liquid Neural Networks to Noise: A Comparative Study with Convolutional Neural Networks',
        venue: '2025 SBMO/IEEE MTT-S International Microwave and Optoelectronics Conference (IMOC), Campina Grande, Brasil, p. 429-433',
        authors: [ME, 'Arnaldo Gomes Leal Junior', 'Marcelo E. V. Segatto', 'Maria José Pontes', 'Helder R. O. Rocha'],
        link: DOI + '10.1109/imoc65414.2025.11365756',
      },
      {
        year: '2025',
        kind: 'conference',
        title: 'Fine-Tuning Large Language Models to Detect Critical Scenarios in Dementia Patient Monitoring and to Reduce Bandwidth Usage',
        venue: '2025 16th IEEE International Conference on Industry Applications (INDUSCON), São Sebastião, Brasil, p. 2214-2219',
        authors: [ME, 'Helder R. O. Rocha', 'Menno J. Faber', 'Jan Kleine Deters', 'Ewout Bergsma', 'Jair A. L. Silva'],
        link: DOI + '10.1109/induscon66435.2025.11241782',
      },
      {
        year: '2025',
        kind: 'conference',
        title: 'Minimization of Energy Expenditure and Charging Cycles in Distribution Systems With Electric Vehicles Using MOGWO',
        venue: '2025 15th International Renewable Energy Congress (IREC), Hammamet, Tunísia, p. 1-6',
        authors: [ME, 'Rodrigo Fiorotti', 'Helder R. O. Rocha', 'Imene Yahyaoui'],
        link: DOI + '10.1109/irec64614.2025.10926778',
      },
    ],
  },
  english: {
    informationText: 'Research in AI, machine learning and neural networks applied to instrumentation, sensors, monitoring and energy optimization.',
    timelineNote: 'During the master\'s: {n} papers published and the dissertation, in the [Publications] section.',
    kinds: { journal: 'Journal article', conference: 'Conference paper', thesis: 'Master\'s dissertation' },
    items: [
      {
        year: '2026',
        kind: 'journal',
        title: 'Towards smart EVs energy scheduling for a logistic distribution center: cost, emissions and makespan optimizing',
        venue: 'Energy Conversion and Management: X, vol. 31, article 102017, 2026',
        authors: ['Rodrigo Fiorotti', 'Imene Yahyaoui', ME, 'Alysson A. P. Machado', 'Jussara F. Fardin', 'Marcelo E. V. Segatto', 'Helder R. O. Rocha'],
        link: DOI + '10.1016/j.ecmx.2026.102017',
      },
      {
        year: '2026',
        kind: 'thesis',
        title: 'Fusão sensorial baseada em sensores FBG para estimativa robusta de nível de líquidos em ambientes com ruído',
        venue: 'Master\'s dissertation (in Portuguese), PPGEE, Federal University of Espírito Santo, defended on June 23, 2026',
        authors: [ME],
        link: THESIS_LINK,
      },
      {
        year: '2025',
        kind: 'conference',
        title: 'Robustness of Liquid Neural Networks to Noise: A Comparative Study with Convolutional Neural Networks',
        venue: '2025 SBMO/IEEE MTT-S International Microwave and Optoelectronics Conference (IMOC), Campina Grande, Brazil, pp. 429-433',
        authors: [ME, 'Arnaldo Gomes Leal Junior', 'Marcelo E. V. Segatto', 'Maria José Pontes', 'Helder R. O. Rocha'],
        link: DOI + '10.1109/imoc65414.2025.11365756',
      },
      {
        year: '2025',
        kind: 'conference',
        title: 'Fine-Tuning Large Language Models to Detect Critical Scenarios in Dementia Patient Monitoring and to Reduce Bandwidth Usage',
        venue: '2025 16th IEEE International Conference on Industry Applications (INDUSCON), São Sebastião, Brazil, pp. 2214-2219',
        authors: [ME, 'Helder R. O. Rocha', 'Menno J. Faber', 'Jan Kleine Deters', 'Ewout Bergsma', 'Jair A. L. Silva'],
        link: DOI + '10.1109/induscon66435.2025.11241782',
      },
      {
        year: '2025',
        kind: 'conference',
        title: 'Minimization of Energy Expenditure and Charging Cycles in Distribution Systems With Electric Vehicles Using MOGWO',
        venue: '2025 15th International Renewable Energy Congress (IREC), Hammamet, Tunisia, pp. 1-6',
        authors: [ME, 'Rodrigo Fiorotti', 'Helder R. O. Rocha', 'Imene Yahyaoui'],
        link: DOI + '10.1109/irec64614.2025.10926778',
      },
    ],
  },
};

// Loomis: texto derivado do design system da empresa (voz.md e README.md) e dos dados do LinkedIn. A data de fundação (12/01/2026) foi informada pelo próprio Willian; clientes, serviços e resultados ainda não foram informados e não aparecem na página.
// Posição dos botões flutuantes do currículo: 'vertical' (canto direito) ou 'horizontal' (pílula centralizada), para comparar.
const CV_DOCK = 'vertical';

const COMPANY_MAIL = 'mailto:contato.loomis@gmail.com?subject=Loomis';

const COMPANY = {
  portuguese: {
    informationText: 'A Loomis Desenvolvimento de Softwares Ltda. é a empresa que fundei.',
    tagline: 'Software sob medida, do desenho à produção.',
    cta: 'Falar com a Loomis',
    mailto: COMPANY_MAIL,
    facts: [
      { label: 'Fundação', value: '12 de janeiro de 2026' },
      { label: 'Atuação', value: 'Desenvolvimento de software e arquitetura' },
      { label: 'Papel', value: 'CEO e sócio-fundador' },
    ],
    pillars: [
      { title: 'Estratégia', icon: 'target', text: 'Decisões técnicas ligadas aos objetivos do negócio.' },
      { title: 'Arquitetura', icon: 'projects', text: 'Sistemas bem estruturados, fáceis de manter e de evoluir.' },
      { title: 'Construção', icon: 'programming', text: 'Sistemas completos entregues do código à infraestrutura e ao deploy.' },
      { title: 'Evolução', icon: 'cicd', text: 'Manutenção e melhoria contínua do que está em produção.' },
    ],
  },
  english: {
    informationText: 'Loomis Desenvolvimento de Softwares Ltda. is the company I founded.',
    tagline: 'Custom software, from design to production.',
    cta: 'Talk to Loomis',
    mailto: COMPANY_MAIL,
    facts: [
      { label: 'Founded', value: 'January 12, 2026' },
      { label: 'Focus', value: 'Software development and architecture' },
      { label: 'Role', value: 'CEO and founding partner' },
    ],
    pillars: [
      { title: 'Strategy', icon: 'target', text: 'Technical decisions tied to business goals.' },
      { title: 'Architecture', icon: 'projects', text: 'Well-structured systems, easy to maintain and evolve.' },
      { title: 'Build', icon: 'programming', text: 'Complete systems delivered from code to infrastructure and deployment.' },
      { title: 'Evolution', icon: 'cicd', text: 'Continuous maintenance and improvement of what runs in production.' },
    ],
  },
};

// Linha do tempo: datas de LinkedIn e Lattes (início, fim) em anos decimais; "open" = continua até hoje.
const TL_START = 2015;
// Intervalos de data com travessão e "atual", iguais na Trajetória e nos modais.
const fmtRange = (text) => String(text || '').replace(/\s+-\s+/g, ' – ').replace('Presente', 'atual').replace('Present', 'present');
// "Hoje" é recalculado a cada renderização, e a página renderiza de novo quando o dia vira.
// O eixo acompanha a data atual até 2029; depois disso os dados do gráfico precisam ser revisados.
const timelineNow = () => {
  const date = new Date();
  const now = date.getFullYear() + (date.getMonth() + date.getDate() / 31) / 12;
  return { now, end: Math.min(2029, Math.max(2027, Math.ceil(now + 0.15))) };
};
// Abertura da Loomis em 12/01/2026, em ano decimal. Com null, a barra fica oculta.
const LOOMIS_FROM = 2026.03;

const TIMELINE = [
  {
    track: 'school',
    bars: [
      { id: 'sesi', lane: 0, from: 2016.1, to: 2019.0 },
      { id: 'senai', lane: 1, from: 2017.1, to: 2019.0 },
      { id: 'ufes', lane: 0, from: 2019.2, to: 2024.0 },
      { id: 'master', lane: 0, from: 2024.2, to: 2026.5 },
    ],
  },
  {
    track: 'work',
    bars: [
      { id: 'learning', lane: 0, from: 2015.0, to: 2018.0, kind: 'learning' },
      { id: 'controle', lane: 0, from: 2018.0, to: 2019.0 },
      { id: 'quantum', lane: 0, from: 2023.4, to: 2024.1 },
      { id: 'fest', lane: 1, from: 2023.5, to: 2026.5 },
      { id: 'twosolve', lane: 2, from: 2024.2, to: 'now', open: true },
      { id: 'superprof', lane: 3, from: 2025.4, to: 'now', open: true },
      { id: 'loomis', lane: 4, from: LOOMIS_FROM, to: 'now', open: true },
    ],
  },
];

const TIMELINE_TEXT = {
  portuguese: {
    tracks: { school: 'Formação', courses: 'Cursos', work: 'Atuação' },
    bars: { sesi: 'Ensino Médio', learning: 'Aprendendo a programar', senai: 'Técnico SENAI', ufes: 'Engenharia da Computação', master: 'Mestrado', controle: 'Empresa da família', quantum: 'Quantum', fest: 'FEST, pesquisa', loomis: 'Loomis', twosolve: '2Solve', superprof: 'Superprof' },
    today: 'Hoje',
  },
  english: {
    tracks: { school: 'Education', courses: 'Courses', work: 'Work' },
    bars: { sesi: 'High school', learning: 'Learning to code', senai: 'SENAI technical', ufes: 'Computer Engineering', master: 'Master\'s', controle: 'Family company', quantum: 'Quantum', fest: 'FEST, research', loomis: 'Loomis', twosolve: '2Solve', superprof: 'Superprof' },
    today: 'Today',
  },
};

class Component extends DCLogic {
  constructor(props) {
    super(props);
    this.appId = 'a' + Math.random().toString(36).slice(2, 8);
    this.state = { progTab: 'ia', eduModal: '', jobModal: '', projTab: 'front', eduTab: 'edu', pubYear: '', svcOpen: '', active: 'profile', open: {}, cvOpen: false, cvLang: null, badgeIndex: 0, badgeFade: false, language: null, dark: null, day: new Date().toDateString() };
  }

  // Primeira secao cuja base passa da metade da janela (mesma regra do site original).
  // Rolagem até a seção com aceleração e desaceleração. A duração cresce com a distância (de ~0,5 s a 1,4 s) e o menu
  // marca a seção de destino já no clique, em vez de piscar por todas as seções do caminho. Qualquer gesto do usuário
  // (roda, toque, teclado) cancela a animação. Com "reduzir movimento" a rolagem é direta.
  scrollToSection(id) {
    const main = document.querySelector('main');
    const target = document.getElementById(id);
    if (!main || !target) return;
    if (this.scrollStop) this.scrollStop();
    const calm = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const max = main.scrollHeight - main.clientHeight;
    const from = main.scrollTop;
    const to = Math.max(0, Math.min(max, target.getBoundingClientRect().top - main.getBoundingClientRect().top + from));
    const distance = Math.abs(to - from);
    this.navTarget = id;
    if (id !== this.state.active) this.setState({ active: id });
    // O cabeçalho da seção (ou o herói) chega com um leve deslize, só quando o usuário pediu a navegação.
    const arrive = () => {
      const el = target.querySelector('.section-head') || target.querySelector('.hero');
      if (el && el.animate && !calm) el.animate([{ opacity: 0.35, transform: 'translateY(14px)' }, { opacity: 1, transform: 'none' }], { duration: 600, easing: 'cubic-bezier(0.2, 0.7, 0.2, 1)' });
    };
    const finish = () => {
      main.style.scrollBehavior = '';
      ['wheel', 'touchstart', 'keydown'].forEach((type) => main.removeEventListener(type, this.scrollStop));
      window.removeEventListener('keydown', this.scrollStop);
      this.scrollStop = null;
      this.navTarget = null;
      this.syncActive();
    };
    if (calm || distance < 2) {
      main.style.scrollBehavior = 'auto';
      main.scrollTop = to;
      finish();
      return;
    }
    const duration = Math.min(1400, 400 + Math.sqrt(distance) * 11);
    const ease = (t) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);
    const t0 = performance.now();
    let frame = 0;
    let done = false;
    main.style.scrollBehavior = 'auto';
    this.scrollStop = () => { if (done) return; done = true; window.cancelAnimationFrame(frame); finish(); };
    ['wheel', 'touchstart', 'keydown'].forEach((type) => main.addEventListener(type, this.scrollStop, { passive: true }));
    window.addEventListener('keydown', this.scrollStop);
    const step = (now) => {
      if (done) return;
      const t = Math.min(1, (now - t0) / duration);
      main.scrollTop = from + (to - from) * ease(t);
      if (t < 1) { frame = window.requestAnimationFrame(step); return; }
      done = true;
      finish();
      arrive();
    };
    frame = window.requestAnimationFrame(step);
  }

  syncActive() {
    const main = document.querySelector('main');
    if (!main) return;
    // Durante a rolagem animada o destino manda no menu; o cálculo por posição volta quando ela termina.
    if (this.navTarget) { this.updateNavIndicator(); return; }
    const day = new Date().toDateString();
    if (day !== this.state.day) this.setState({ day });
    this.updateNavIndicator();
    let id = null;
    for (const section of main.querySelectorAll('section')) {
      if (section.getBoundingClientRect().bottom > window.innerHeight / 2) {
        id = section.id;
        break;
      }
    }
    if (id && id !== this.state.active) this.setState({ active: id });
  }

  // Indicador deslizante do menu: acompanha o item ativo (some no layout mobile, que usa a barra inferior).
  updateNavIndicator() {
    const navList = document.querySelector('.nav-list');
    const current = navList && navList.querySelector('.nav-link[aria-current="page"]');
    if (!current) return;
    const x = current.offsetLeft + 'px';
    const w = current.offsetWidth + 'px';
    if (navList.style.getPropertyValue('--ind-x') !== x) navList.style.setProperty('--ind-x', x);
    if (navList.style.getPropertyValue('--ind-w') !== w) navList.style.setProperty('--ind-w', w);
    navList.dataset.ind = '1';
  }

  componentDidMount() {
    this.shownLanguage = this.state.language || DEFAULT_LANGUAGE;
    // O selo do retrato alterna entre trabalho, formação e empresa. Ele pausa com o mouse em cima (só em dispositivos com mouse);
    // com "reduzir movimento" ele fica parado no primeiro item.
    const calm = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!calm) {
      this.badgeTimer = window.setInterval(() => {
        if (this.badgeHover) return;
        this.setState({ badgeFade: true });
        this.badgeSwap = window.setTimeout(() => this.setState({ badgeIndex: (this.state.badgeIndex + 1) % 3, badgeFade: false }), 260);
      }, 4500);
    }
    this.onKeyDown = (event) => {
      if (event.key === 'Tab') {
        const dialog = document.querySelector('[role="dialog"]');
        if (!dialog) return;
        const items = [...dialog.querySelectorAll('a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])')].filter((el) => el.offsetParent !== null);
        if (!items.length) return;
        const first = items[0];
        const last = items[items.length - 1];
        if (!dialog.contains(document.activeElement)) { event.preventDefault(); first.focus(); }
        else if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
        else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
        return;
      }
      if (event.key !== 'Escape') return; if (this.state.eduModal) this.setState({ eduModal: '' }); else if (this.state.jobModal) this.setState({ jobModal: '' }); else if (this.state.svcOpen) this.setState({ svcOpen: '' }); else if (this.state.cvOpen) this.setState({ cvOpen: false, cvLang: null }); };
    window.addEventListener('keydown', this.onKeyDown);
    this.onWindowLoad = () => this.syncActive();
    window.addEventListener('load', this.onWindowLoad);
    // Como o site original: o layout muda sem evento de rolagem (acordeão, fontes, imagens), então reconfere a cada 300 ms.
    this.activeTimer = window.setInterval(() => this.syncActive(), 300);
    this.syncActive();
  }

  componentDidUpdate(prevProps) {
    this.updateNavIndicator();
    // Guarda o botão que abriu o modal e devolve o foco a ele quando o modal fecha.
    const st = this.state;
    const isOpen = !!(st.eduModal || st.jobModal || st.svcOpen || st.cvOpen);
    const wasOpen = !!this.modalWasOpen;
    this.modalWasOpen = isOpen;
    if (!wasOpen && isOpen) this.modalTrigger = document.activeElement;
    if (wasOpen && !isOpen && this.modalTrigger) {
      const trigger = this.modalTrigger;
      this.modalTrigger = null;
      if (trigger.isConnected && trigger.focus) trigger.focus({ preventScroll: true });
    }
    const language = this.state.language || DEFAULT_LANGUAGE;
    if (language !== this.shownLanguage) {
      this.shownLanguage = language;
      this.syncActive();
    }
  }

  componentWillUnmount() {
    window.removeEventListener('load', this.onWindowLoad);
    window.removeEventListener('keydown', this.onKeyDown);
    window.clearInterval(this.badgeTimer);
    window.clearTimeout(this.badgeSwap);
    window.clearInterval(this.activeTimer);
  }

  root() {
    return document.querySelector('[data-app-id="' + this.appId + '"]');
  }

  renderVals() {
    const language = this.state.language || DEFAULT_LANGUAGE;
    const dark = this.state.dark === true;
    const data = DATA[language];
    const ui = data.ui;
    const open = this.state.open;

    const docHref = (ref) => (ref.startsWith('../') ? ref.slice(3) : ref);

    const entry = (item) => {
      const isOpen = !!open[item.referenceName];
      const shortSubjects = item.subjectsStudied.every((text) => text.length <= 36);
      return {
        openClass: isOpen ? 'open' : '',
        expanded: isOpen ? 'true' : 'false',
        date: fmtRange(item.date),
        name: item.name,
        institution: item.institution,
        description: item.description,
        hasLinks: item.links.length > 0,
        hasProof: !!item.proof,
        links: item.links.map((link) => ({ name: link.name, href: docHref(link.ref) })),
        subjects: item.subjectsStudied.map((text) => ({ text })),
        shortSubjects,
        longSubjects: !shortSubjects,
        toggle: () => this.setState({ open: { ...this.state.open, [item.referenceName]: !this.state.open[item.referenceName] } }),
      };
    };

    // Conteúdo do modal acadêmico: uma formação, os cursos de um ano ou as premiações.
    const eduCard = (item) => ({
      ...entry(item),
      hasInstitution: !!item.institution,
      hasDate: !!item.date,
      hasDescription: !!item.description,
      hasSubjects: item.subjectsStudied.length > 0,
    });
    const AWARD_ICONS = ['star', 'calendar-check', 'award', 'trophy', 'school', 'robot'];
    const eduModalView = (() => {
      const [kind, ref] = (this.state.eduModal || '').split(':');
      if (kind === 'entry') {
        const found = data.school.schooling.find((item) => item.referenceName === ref);
        const barId = Object.keys(BAR_EDU).find((id) => BAR_EDU[id] === ref);
        const shortName = barId ? TIMELINE_TEXT[language].bars[barId] : '';
        const same = !!found && shortName.toLowerCase() === found.name.toLowerCase();
        return { title: shortName || (found ? found.name : ''), items: found ? [{ ...eduCard(found), hideName: same }] : [] };
      }
      if (kind === 'courses') {
        return { title: (language === 'portuguese' ? 'Cursos de ' : 'Courses in ') + ref, items: data.school.courses.filter((item) => String(parseInt(item.date, 10)) === ref).map(eduCard) };
      }
      if (kind === 'awards') {
        return {
          title: ui.tabAwards,
          items: EXTRA[language].awards.map((line, index) => {
            const at = line.indexOf(': ');
            return { cls: 'award-card', isAward: true, icon: AWARD_ICONS[index] || 'award', name: at < 0 ? line : line.slice(0, at), description: at < 0 ? '' : line.slice(at + 2), hasInstitution: false, hasDate: false, hasDescription: at >= 0, hasSubjects: false, hasLinks: false, hasProof: false, subjects: [], links: [], shortSubjects: true, longSubjects: false };
          }),
        };
      }
      return { title: '', items: [] };
    })();

    // O link direto para o PDF não abre dentro do canvas do Design: o download passa pela capacidade "downloads".
    // Se ela não existir (ou o visitante recusar), o link normal abre o PDF numa nova aba.
    const openCv = (event) => {
      if (event && event.preventDefault) event.preventDefault();
      this.setState({ cvOpen: true, cvLang: null }, () => { const root = this.root(); const el = root && root.querySelector('.cv-dialog .icon-btn'); if (el) el.focus(); });
    };
    const closeCv = () => this.setState({ cvOpen: false, cvLang: null });
    const closeSvc = () => this.setState({ svcOpen: '' });
    const stopCv = (event) => { if (event && event.stopPropagation) event.stopPropagation(); };
    // O idioma do currículo começa igual ao do site e o visitante troca no próprio visualizador.
    const cvKey = this.state.cvLang || language;
    const cvFile = CV_FILES[cvKey];
    const downloadCv = (event) => {
      if (event && event.preventDefault) event.preventDefault();
      const fallback = () => window.open(cvFile.link, '_blank');
      if (!window.claude || !window.claude.use) return fallback();
      window.claude.use('downloads')
        .then((downloads) => {
          if (!downloads) return fallback();
          return fetch(cvFile.link)
            .then((response) => response.blob())
            .then((blob) => downloads.save({ filename: cvFile.filename, data: blob }));
        })
        .catch((error) => { if (!error || error.code !== 'declined') fallback(); });
    };

    const socials = data.profile.socialNetworks.map((media) => ({
      name: media.name,
      link: media.key === 'curriculum' ? cvFile.link : media.link,
      key: media.key,
      onClick: media.key === 'curriculum' ? openCv : undefined,
    }));
    const mail = socials.find((media) => media.key === 'gmail');

    // Rolagem dentro do <main>, que é o contêiner de rolagem da página (animação em scrollToSection).
    const goTo = (ref) => (event) => {
      if (event && event.preventDefault) event.preventDefault();
      this.scrollToSection(ref);
    };

    const techOf = (tech) => ({ plain: true, expandable: false, count: 0, name: tech.name, src: tech.icon ? '' : img(tech.key), cls: tech.icon ? '' : flipClass(tech.key), hasLogo: !tech.icon, noLogo: !!tech.icon, icon: tech.icon || '' });
    const groupKeys = ['front', 'back', 'infra'];
    const EXTRA_TECH_NAMES = { huggingface: 'Hugging Face', streamlit: 'Streamlit', kubernetes: 'Kubernetes', tensorflow: 'TensorFlow', keras: 'Keras', opencv: 'OpenCV' };
    const techName = (key) => {
      const found = TECHS.find((tech) => tech.key === key);
      return found ? found.name : (EXTRA_TECH_NAMES[key] || key);
    };

    // Abas verticais: setas, Home e End trocam de aba e levam o foco junto (roving tabindex).
    const makeTabs = (group, stateKey, tabs, current) => tabs.map((tab, at) => ({
      label: tab.label,
      count: tab.count,
      selected: current === tab.id ? 'true' : 'false',
      tabIndex: current === tab.id ? '0' : '-1',
      tabId: 'tab-' + group + '-' + tab.id + '-' + this.appId,
      panelId: 'tabpanel-' + group + '-' + tab.id + '-' + this.appId,
      select: () => this.setState({ [stateKey]: tab.id }),
      keys: (event) => {
        if (event.altKey || event.ctrlKey || event.metaKey) return;
        let next = -1;
        if (event.key === 'ArrowDown' || event.key === 'ArrowRight') next = (at + 1) % tabs.length;
        else if (event.key === 'ArrowUp' || event.key === 'ArrowLeft') next = (at - 1 + tabs.length) % tabs.length;
        else if (event.key === 'Home') next = 0;
        else if (event.key === 'End') next = tabs.length - 1;
        if (next < 0) return;
        event.preventDefault();
        this.setState({ [stateKey]: tabs[next].id }, () => {
          const root = this.root();
          const el = root && root.querySelector('#tab-' + group + '-' + tabs[next].id + '-' + this.appId);
          if (el) el.focus();
        });
      },
    }));
    const onFlags = (ids, current) => { const flags = {}; ids.forEach((id) => { flags[id] = current === id ? 'true' : 'false'; }); return flags; };
    const awsCount = EXTRA[language].aws.reduce((total, area) => total + area.items.length, 0);
    const ociCount = EXTRA[language].oci.length;
    const cfCount = EXTRA[language].cloudflare.length;
    const claudeCount = EXTRA[language].claude.length;
    const metaCount = EXTRA[language].meta.length;
    const linuxCount = TECHS.filter((tech) => tech.group === 'linux').length;
    const svcCount = { aws: awsCount, oci: ociCount, cloudflare: cfCount, claude: claudeCount, meta: metaCount, linux: linuxCount };
    const pubAll = PUBLICATIONS[language].items;
    const pubYearList = pubAll.map((pub) => pub.year).filter((year, at, list) => list.indexOf(year) === at);
    const pubYear = pubYearList.includes(this.state.pubYear) ? this.state.pubYear : pubYearList[0];
    const projAll = data.projects.items;
    const projCount = (cat) => projAll.filter((project) => PROJECT_CATS[project.link] === cat).length;
    const projTabs = makeTabs('proj', 'projTab', [
      { id: 'front', label: ui.tabProjFront, count: projCount('front') },
      { id: 'ia', label: ui.tabProjAi, count: projCount('ia') },
      { id: 'back', label: ui.tabProjBack, count: projCount('back') },
      { id: 'other', label: ui.tabProjOther, count: projCount('other') },
    ], this.state.projTab);
    const progTabs = makeTabs('prog', 'progTab', [
      { id: 'ia', label: ui.tabIa, count: EXTRA[language].aiTools.length + EXTRA[language].ml.length + claudeCount + metaCount },
      { id: 'cloud', label: ui.tabCloud, count: EXTRA[language].cloud.length + awsCount + ociCount + cfCount },
      { id: 'lang', label: ui.tabLang, count: TECHS.length },
    ], this.state.progTab);
    const eduTabs = makeTabs('edu', 'eduTab', [
      { id: 'edu', label: ui.tabEdu, count: data.school.schooling.length },
      { id: 'courses', label: ui.tabCourses, count: data.school.courses.length },
      { id: 'awards', label: ui.tabAwards, count: EXTRA[language].awards.length },
    ], this.state.eduTab);
    const pubTabs = makeTabs('pub', 'pubYear', pubYearList.map((year) => ({ id: year, label: year, count: pubAll.filter((pub) => pub.year === year).length })), pubYear);

    const badgeItems = [
      { title: ui.badgeWorkTitle, text: ui.badgeWorkText, icon: 'professional' },
      { title: ui.badgeTitle, text: ui.badgeText, icon: 'school' },
      { title: ui.badgeCompanyTitle, text: ui.badgeCompanyText, icon: 'loomis' },
    ];
    const badge = badgeItems[this.state.badgeIndex % badgeItems.length];
    const tlText = TIMELINE_TEXT[language];
    const { now: TL_NOW, end: TL_END } = timelineNow();
    const barEnd = (bar) => (bar.to === 'now' ? TL_NOW : bar.to);
    const pt = language === 'portuguese';
    const span = TL_END - TL_START;
    const tlFrac = (value) => (Math.min(Math.max(value, TL_START), TL_END) - TL_START) / span;
    const pct = (value) => (value * 100).toFixed(2) + '%';
    const focusClose = () => { const root = this.root(); const el = root && root.querySelector('.svc-close'); if (el) el.focus(); };
    // Datas dos cargos lidas do texto em português ("mar. 2024 - nov. 2025"); "Presente" vai até hoje.
    const MONTHS = ['jan', 'fev', 'mar', 'abr', 'mai', 'jun', 'jul', 'ago', 'set', 'out', 'nov', 'dez'];
    const parseMonth = (text) => {
      if (/Presente/.test(text)) return TL_NOW;
      const match = /([a-z]{3})\.?\s+(\d{4})/.exec(text);
      return match ? +match[2] + MONTHS.indexOf(match[1]) / 12 : null;
    };
    const ptJobs = DATA.portuguese.professional.items;
    const shortDate = fmtRange;
    const segBar = (from, to, cls, title) => [{ left: pct(tlFrac(from)), width: pct(Math.max(tlFrac(to) - tlFrac(from), 0.012)), height: '100%', cls, title: title || '' }];
    const workRow = (bar) => {
      const jobKey = BAR_JOBS[bar.id] || '';
      const job = jobKey ? data.professional.items.find((item) => item.key === jobKey) : null;
      const ptJob = jobKey ? ptJobs.find((item) => item.key === jobKey) : null;
      const to = barEnd(bar);
      const label = tlText.bars[bar.id];
      const dateText = (job ? shortDate(job.date) : '') || (Math.floor(bar.from) + (bar.open ? ' – ' + (pt ? 'atual' : 'present') : (Math.floor(to - 0.01) > Math.floor(bar.from) ? ' – ' + Math.floor(to - 0.01) : '')));
      // Mais de um cargo: a barra vira uma escada, um degrau por cargo, do mais antigo (mais baixo) ao atual (cheio).
      let segs = segBar(bar.from, to, 'work' + (bar.kind ? ' ' + bar.kind : '') + (bar.open ? ' open' : ''));
      const roles = job && ptJob ? job.roles.map((role, index) => ({ title: role.title, from: parseMonth(ptJob.roles[index].date.split(' - ')[0]), to: parseMonth(ptJob.roles[index].date.split(' - ')[1] || '') })) : [];
      const steps = roles.slice().reverse().filter((role) => role.from !== null);
      if (steps.length > 1) {
        segs = steps.map((role, index) => {
          const end = index === steps.length - 1 ? to : steps[index + 1].from;
          const last = index === steps.length - 1;
          return {
            left: pct(tlFrac(role.from)),
            width: pct(Math.max(tlFrac(end) - tlFrac(role.from), 0.006)),
            height: Math.round(42 + (58 * index) / (steps.length - 1)) + '%',
            cls: 'work step' + (last ? ' top' : ' s' + Math.min(index, 1)) + (last && bar.open ? ' open' : ''),
            title: role.title,
          };
        });
      }
      const current = roles.length ? roles[0].title : '';
      const isLoomis = bar.id === 'loomis';
      return {
        title: label,
        sub: [dateText, isLoomis ? COMPANY[language].facts.find((fact) => /Papel|Role/.test(fact.label)).value : current].filter(Boolean).join(' · '),
        segs,
        cls: (steps.length > 1 ? 'has-steps' : '') + (bar.kind ? ' ' + bar.kind : ''),
        clickable: !!job || isLoomis,
        plain: !job && !isLoomis,
        pills: false,
        popup: isLoomis ? 'false' : 'dialog',
        icon: isLoomis ? 'arrow-right' : 'arrow',
        open: isLoomis ? () => this.scrollToSection('company') : () => this.setState({ jobModal: jobKey }, focusClose),
        sort: bar.from,
      };
    };
    const schoolRow = (bar) => {
      const ref = BAR_EDU[bar.id];
      const entry = data.school.schooling.find((item) => item.referenceName === ref);
      return {
        title: tlText.bars[bar.id],
        sub: (entry ? entry.institution + ' · ' + shortDate(entry.date) : ''),
        segs: segBar(bar.from, barEnd(bar), 'school'),
        cls: '',
        clickable: true,
        plain: false,
        pills: false,
        popup: 'dialog',
        icon: 'arrow',
        open: () => this.setState({ eduModal: 'entry:' + ref }, focusClose),
        sort: bar.from,
      };
    };
    const courseYears = [];
    data.school.courses.forEach((course) => {
      const year = parseInt(course.date, 10);
      if (year && !courseYears.includes(year)) courseYears.push(year);
    });
    courseYears.sort((a, b) => a - b);
    const coursesRow = {
      title: tlText.tracks.courses,
      sub: data.school.courses.length + (pt ? ' cursos · ' : ' courses · ') + courseYears[0] + ' – ' + courseYears[courseYears.length - 1],
      clickable: false,
      plain: false,
      pills: true,
      cls: 'courses',
      years: courseYears.map((year) => {
        const total = data.school.courses.filter((course) => parseInt(course.date, 10) === year).length;
        return {
          left: pct(tlFrac(year + 0.08)),
          width: pct(0.84 / span),
          count: String(total),
          year: String(year),
          aria: year + ': ' + total + (pt ? (total === 1 ? ' curso' : ' cursos') : (total === 1 ? ' course' : ' courses')),
          open: () => this.setState({ eduModal: 'courses:' + year }, focusClose),
        };
      }),
    };
    // Mais recente no topo: a sequência de barras sobe da esquerda para a direita, como a carreira.
    const byRecent = (list) => list.sort((a, b) => b.sort - a.sort);
    const journeyGroups = [
      { name: tlText.tracks.work, rows: byRecent(TIMELINE[1].bars.filter((bar) => bar.from !== null).map(workRow)) },
      { name: tlText.tracks.school, rows: byRecent(TIMELINE[0].bars.map(schoolRow)).concat([coursesRow]) },
    ];
    const timelineYears = [];
    // O ano do eixo que cai perto do marcador "Hoje" some, para os dois rótulos não se sobreporem.
    for (let year = TL_START; year < TL_END; year += 1) {
      if (Math.abs(year - TL_NOW) > 0.7) timelineYears.push({ label: (year - TL_START) % 2 ? "'" + String(year).slice(2) : String(year), left: pct(tlFrac(year)), cls: year === TL_START ? 'first' : ((year - TL_START) % 2 ? 'minor' : ((year - TL_START) % 4 ? 'mid' : '')) });
    }
    const pubData = PUBLICATIONS[language];
    // Publicações do período do mestrado, resumidas na linha do tempo em vez de um gráfico próprio.
    const pubCount = pubData.items.filter((pub) => pub.kind !== 'thesis').length;
    const [noteBefore, noteLink, noteAfter] = pubData.timelineNote.replace('{n}', pubCount).split(/[\[\]]/);

    const extraTile = (item) => ({
      text: item.text,
      hasLogo: !!item.key,
      noLogo: !item.key,
      src: item.key ? img(item.key) : '',
      cls: flipClass(item.key),
      icon: item.icon || '',
    });

    const jobList = data.professional.items.map((job) => ({
      key: job.key,
      openClass: open['job:' + job.key + job.name] ? 'open' : '',
      expanded: open['job:' + job.key + job.name] ? 'true' : 'false',
      toggle: () => this.setState({ open: { ...this.state.open, ['job:' + job.key + job.name]: !this.state.open['job:' + job.key + job.name] } }),
      headline: job.roles && job.roles.length ? job.roles[0].title : '',
      hasPromo: (job.roles || []).length > 1,
      promo: (() => {
        const n = (job.roles || []).length - 1;
        const pt = language === 'portuguese';
        if (job.key === 'superprof') return pt ? n + (n === 1 ? ' nível conquistado' : ' níveis conquistados') : n + (n === 1 ? ' level earned' : ' levels earned');
        return pt ? n + (n === 1 ? ' promoção' : ' promoções') : n + (n === 1 ? ' promotion' : ' promotions');
      })(),
      name: job.name,
      date: fmtRange(job.date),
      link: job.link || '',
      hasLink: !!job.link,
      description: job.description || '',
      hasDescription: !!job.description,
      hasLogo: !!job.key,
      noLogo: !job.key,
      initials: job.initials || '',
      src: job.key ? img(job.key) : '',
      rolesCls: (job.roles || []).length > 1 ? 'path' : '',
      roles: (job.roles || []).map((role) => ({
        cls: /Presente|Present/.test(role.date) ? 'current' : '',
        title: role.title,
        date: fmtRange(role.date),
        paragraphs: role.paragraphs.map((text) => ({ text })),
      })),
      hasTasks: !!job.tasks && job.tasks.length > 0,
      tasks: (job.tasks || []).map((text) => ({ text })),
    }));

    return {
      themeName: dark ? 'dark' : 'light',
      cvDockCls: CV_DOCK === 'horizontal' ? 'cv-dock horizontal' : 'cv-dock',
      navMode: 'pill',
      appId: this.appId,
      journeyGroups,
      gxGrid: (100 / span).toFixed(4) + '%',
      todayP: tlFrac(TL_NOW).toFixed(4),
      awardsLabel: ui.tabAwards,
      awardsCount: EXTRA[language].awards.length,
      openAwards: () => this.setState({ eduModal: 'awards' }, focusClose),
      eduOpen: !!this.state.eduModal,
      eduTitle: eduModalView.title,
      eduItems: eduModalView.items.map((item) => ({ ...item, hasProof: false, showName: !item.hideName })),
      eduProof: eduModalView.items.some((item) => item.hasProof),
      closeEdu: () => this.setState({ eduModal: '' }),
      projectsLayout: ['lista', 'compacta', 'grade'].includes(this.props.projectsLayout) ? this.props.projectsLayout : 'compacta',
      themeIcon: dark ? 'sun' : 'moon',
      ptCls: language === 'portuguese' ? 'on' : '',
      enCls: language === 'english' ? 'on' : '',
      t: { ...ui, today: tlText.today, badgeTitle: badge.title, badgeText: badge.text, badgeIcon: badge.icon, themeAria: dark ? ui.themeToLight : ui.themeToDark },
      badgeCls: this.state.badgeFade ? 'fading' : '',
      langCode: (() => { const code = language === 'portuguese' ? 'pt-BR' : 'en'; try { document.documentElement.lang = code; } catch (e) {} return code; })(),
      loomisLogo: img('loomis'),
      loomisLogoDark: img('loomisDark'),
      company: COMPANY[language],
      timelineYears,
      // Depois do fim do eixo o marcador some, em vez de apontar para uma data errada.
      showToday: TL_NOW <= TL_END,
      todayLeft: pct(tlFrac(TL_NOW)),
      retrato: img('retrato'),
      lattesLink: LATTES_LINK,
      orcidLink: ORCID_LINK,
      cvLink: cvFile.link,
      cvFilename: cvFile.filename,
      cvPtCls: cvKey === 'portuguese' ? 'on' : '',
      cvEnCls: cvKey === 'english' ? 'on' : '',
      cvPtPressed: cvKey === 'portuguese' ? 'true' : 'false',
      cvEnPressed: cvKey === 'english' ? 'true' : 'false',
      cvSetPt: () => this.setState({ cvLang: 'portuguese' }),
      cvSetEn: () => this.setState({ cvLang: 'english' }),
      mailLink: mail.link,
      socials: socials.filter((media) => media.key !== 'curriculum'),
      socialsNoMail: socials.filter((media) => media.key !== 'gmail'),
      sections: SECTION_ICONS.map((ref) => ({
        ref,
        label: ui.nav[ref],
        current: ref === this.state.active ? 'page' : 'false',
        go: goTo(ref),
      })),
      goProfile: goTo('profile'),
      goProjects: goTo('projects'),
      goPublications: goTo('publications'),
      noteBefore,
      noteLink,
      noteAfter,
      downloadCv,
      openCv,
      // A pausa vale só com mouse: no toque o navegador simula "mouse em cima" e deixaria o selo travado.
      holdBadge: () => { this.badgeHover = !!(window.matchMedia && window.matchMedia('(hover: hover) and (pointer: fine)').matches); },
      releaseBadge: () => { this.badgeHover = false; },
      closeCv,
      stopCv,
      closeSvc,
      svcIsAws: this.state.svcOpen === 'aws',
      svcIsCloudflare: this.state.svcOpen === 'cloudflare',
      svcIsOci: this.state.svcOpen === 'oci',
      svcIsClaude: this.state.svcOpen === 'claude',
      svcIsMeta: this.state.svcOpen === 'meta',
      svcIsLinux: this.state.svcOpen === 'linux',
      cvOpen: this.state.cvOpen,
      cvPages: cvFile.pages.map((id, index) => ({ src: blob(id), alt: ui.cvTitle + ' ' + (index + 1) + '/' + cvFile.pages.length })),
      bio: data.profile.bio.map((text, index) => ({ text, cls: index === 0 ? 'lead' : '' })),
      focus: EXTRA[language].focus.map((text) => ({ text })),
      spoken: EXTRA[language].spoken.map((text) => ({ text })),
      cloud: {
        name: EXTRA[language].cloudName,
        items: EXTRA[language].cloud.map((item) => {
          const key = item.service || '';
          return {
            ...extraTile(item),
            plain: !key,
            expandable: !!key,
            count: key ? svcCount[key] : 0,
            toggle: () => this.setState({ svcOpen: key }, () => { const root = this.root(); const el = root && root.querySelector('.svc-close'); if (el) el.focus(); }),
          };
        }),
      },
      cloudflare: { name: EXTRA[language].cloudflareName, items: EXTRA[language].cloudflare.map(extraTile) },
      oci: { name: EXTRA[language].ociName, items: EXTRA[language].oci.map(extraTile) },
      awards: EXTRA[language].awards.map((line) => { const at = line.indexOf(': '); return at < 0 ? { title: line, text: '', hasText: false } : { title: line.slice(0, at), text: line.slice(at + 2), hasText: true }; }),
      aws: { name: EXTRA[language].awsName, areas: EXTRA[language].aws.map((area) => ({ title: area.title, items: area.items.map(extraTile) })) },
      ml: {
        name: EXTRA[language].mlName,
        items: EXTRA[language].ml.map((item) => {
          const key = item.service || '';
          return {
            ...extraTile(item),
            plain: !key,
            expandable: !!key,
            count: key ? svcCount[key] : 0,
            toggle: () => this.setState({ svcOpen: key }, () => { const root = this.root(); const el = root && root.querySelector('.svc-close'); if (el) el.focus(); }),
          };
        }),
      },
      meta: { name: EXTRA[language].metaName, items: EXTRA[language].meta.map(extraTile) },
      linux: { name: EXTRA[language].linuxName, items: TECHS.filter((tech) => tech.group === 'linux').map(techOf) },
      ai: { name: EXTRA[language].aiName, items: EXTRA[language].ai, tools: EXTRA[language].aiTools.map((item) => {
        const key = item.service || '';
        return {
          ...extraTile(item),
          plain: !key,
          expandable: !!key,
          count: key ? svcCount[key] : 0,
          toggle: () => this.setState({ svcOpen: key }, () => { const root = this.root(); const el = root && root.querySelector('.svc-close'); if (el) el.focus(); }),
        };
      }) },
      claude: { name: EXTRA[language].claudeName, items: EXTRA[language].claude.map(extraTile) },
      progTabs,
      projTabs,
      projTabsLabel: ui.projTabsLabel,
      projPanelId: 'tabpanel-proj-' + this.state.projTab + '-' + this.appId,
      projTabId: 'tab-proj-' + this.state.projTab + '-' + this.appId,
      progOn: onFlags(['ia', 'cloud', 'lang'], this.state.progTab),
      eduTabs,
      eduOn: onFlags(['edu', 'courses', 'awards'], this.state.eduTab),
      pubTabs,
      pubTabsLabel: ui.pubYearsLabel,
      pubPanelId: 'tabpanel-pub-' + pubYear + '-' + this.appId,
      pubTabId: 'tab-pub-' + pubYear + '-' + this.appId,
      programming: data.programming,
      groups: groupKeys.map((group) => ({
        name: ui.groups[group],
        items: TECHS.filter((tech) => tech.group === group).map(techOf).flatMap((tech) => (group === 'infra' && tech.name === 'Windows' ? [{
          name: 'Linux',
          src: img('linux'),
          cls: flipClass('linux'),
          hasLogo: true,
          noLogo: false,
          icon: '',
          plain: false,
          expandable: true,
          count: linuxCount,
          toggle: () => this.setState({ svcOpen: 'linux' }, () => { const root = this.root(); const el = root && root.querySelector('.svc-close'); if (el) el.focus(); }),
        }, tech] : [tech])),
      })),
      school: data.school,
      schooling: data.school.schooling.map(entry),
      courses: data.school.courses.map(entry),
      publications: PUBLICATIONS[language],
      pubItems: PUBLICATIONS[language].items.filter((pub) => pub.year === pubYear).map((pub) => ({
        year: pub.year,
        kind: PUBLICATIONS[language].kinds[pub.kind],
        title: pub.title,
        venue: pub.venue,
        link: pub.link,
        authors: pub.authors.map((name) => ({ name, cls: name === ME ? 'me' : '' })),
      })),
      professional: data.professional,
      jobOpen: !!this.state.jobModal,
      jobModal: this.state.jobModal ? jobList.find((job) => job.key === this.state.jobModal) || { roles: [], tasks: [] } : { roles: [], tasks: [] },
      closeJob: () => this.setState({ jobModal: '' }),
      projects: data.projects,
      projectItems: data.projects.items.filter((project) => PROJECT_CATS[project.link] === this.state.projTab).map((project) => ({
        name: project.name,
        link: project.link,
        demo: project.demo || '',
        hasDemo: !!project.demo,
        date: project.date,
        description: project.description,
        tech: project.tech.map((key) => ({ name: techName(key), src: img(key), cls: flipClass(key) })),
      })),
      onScroll: () => this.syncActive(),
      toggleTheme: () => this.setState({ dark: !dark }),
      toggleLanguage: () => this.setState({ language: language === 'portuguese' ? 'english' : 'portuguese', open: {} }),
    };
  }
}

export { Component };
export const defaultProps = {"projectsLayout": "compacta"};
