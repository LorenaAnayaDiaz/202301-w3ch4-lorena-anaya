var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Header1_h1;
import Component from '../Component/Component.js';
export default class Header1 extends Component {
    constructor(h1, parentElement, cssClasses = '') {
        super(parentElement, 'h1', cssClasses);
        _Header1_h1.set(this, void 0);
        __classPrivateFieldSet(this, _Header1_h1, h1, "f");
    }
    render() {
        super.render();
        const h1 = this.element;
        h1.textContent = __classPrivateFieldGet(this, _Header1_h1, "f");
    }
}
_Header1_h1 = new WeakMap();
