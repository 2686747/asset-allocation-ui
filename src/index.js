import 'purecss';
import { render } from 'inferno';
import { createElement } from 'inferno-create-element';

console.log('loaded1');

render(
  createElement('div', { className: 'test' }, "I'm a child!"),
  document.getElementById("app")
);