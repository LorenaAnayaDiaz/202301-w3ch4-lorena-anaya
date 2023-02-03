var __classPrivateFieldSet =
  (this && this.__classPrivateFieldSet) ||
  function (receiver, state, value, kind, f) {
    if (kind === 'm') throw new TypeError('Private method is not writable');
    if (kind === 'a' && !f)
      throw new TypeError('Private accessor was defined without a setter');
    if (
      typeof state === 'function'
        ? receiver !== state || !f
        : !state.has(receiver)
    )
      throw new TypeError(
        'Cannot write private member to an object whose class did not declare it'
      );
    return (
      kind === 'a'
        ? f.call(receiver, value)
        : f
        ? (f.value = value)
        : state.set(receiver, value),
      value
    );
  };
var __classPrivateFieldGet =
  (this && this.__classPrivateFieldGet) ||
  function (receiver, state, kind, f) {
    if (kind === 'a' && !f)
      throw new TypeError('Private accessor was defined without a getter');
    if (
      typeof state === 'function'
        ? receiver !== state || !f
        : !state.has(receiver)
    )
      throw new TypeError(
        'Cannot read private member from an object whose class did not declare it'
      );
    return kind === 'm'
      ? f
      : kind === 'a'
      ? f.call(receiver)
      : f
      ? f.value
      : state.get(receiver);
  };
var _App_children;
import Component from '../Component/Component.js';
import Card from '../Card/Card.js';
import Header1 from '../Heading/Heading.js';
import { series } from '../Card/Card.js';
export default class App extends Component {
  constructor(parentElement, cssClasses = '') {
    super(parentElement, 'section', cssClasses);
    _App_children.set(this, void 0);
    __classPrivateFieldSet(
      this,
      _App_children,
      [new Header1('My series', this.element, 'main-header')],
      'f'
    );
    for (let i = 0; i < series.length; i++) {
      __classPrivateFieldGet(this, _App_children, 'f').push(
        new Card(this.element, 'series-list', i)
      );
    }
  }
  render() {
    super.render();
    __classPrivateFieldGet(this, _App_children, 'f').forEach((component) =>
      component.render()
    );
  }
}
_App_children = new WeakMap();
