import { mount } from './src/dc-lite.js';
import { Component, defaultProps } from './src/portfolio.js';

const template = await fetch('./src/template.html').then((response) => response.text());

mount(Component, template, document.getElementById('root'), defaultProps);
