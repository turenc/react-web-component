'use strict';var _createClass=function(){function a(a,b){for(var c,d=0;d<b.length;d++)c=b[d],c.enumerable=c.enumerable||!1,c.configurable=!0,'value'in c&&(c.writable=!0),Object.defineProperty(a,c.key,c)}return function(b,c,d){return c&&a(b.prototype,c),d&&a(b,d),b}}();function _classCallCheck(a,b){if(!(a instanceof b))throw new TypeError('Cannot call a class as a function')}function _possibleConstructorReturn(a,b){if(!a)throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');return b&&('object'==typeof b||'function'==typeof b)?b:a}function _inherits(a,b){if('function'!=typeof b&&null!==b)throw new TypeError('Super expression must either be null or a function, not '+typeof b);a.prototype=Object.create(b&&b.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}}),b&&(Object.setPrototypeOf?Object.setPrototypeOf(a,b):a.__proto__=b)}function _CustomElement(){return Reflect.construct(HTMLElement,[],this.__proto__.constructor)}Object.setPrototypeOf(_CustomElement.prototype,HTMLElement.prototype),Object.setPrototypeOf(_CustomElement,HTMLElement);var React=require('react'),ReactDOM=require('react-dom'),retargetEvents=require('react-shadow-dom-retarget-events'),getStyleElementsFromReactWebComponentStyleLoader=require('./getStyleElementsFromReactWebComponentStyleLoader'),extractAttributes=require('./extractAttributes');require('@webcomponents/shadydom'),require('@webcomponents/custom-elements'),module.exports={create:function create(a,b){function c(a){f&&f.webComponentConstructed&&f.webComponentConstructed.apply(f,[a])}function d(a,b){var c=g[a];c&&f&&f[c]&&f[c].apply(f,b||[])}var e=!(2<arguments.length&&arguments[2]!==void 0)||arguments[2],f=void 0,g={attachedCallback:'webComponentAttached',connectedCallback:'webComponentConnected',disconnectedCallback:'webComponentDisconnected',attributeChangedCallback:'webComponentAttributeChanged',adoptedCallback:'webComponentAdopted'},h=function(b){function g(){return _classCallCheck(this,g),_possibleConstructorReturn(this,(g.__proto__||Object.getPrototypeOf(g)).apply(this,arguments))}return _inherits(g,b),_createClass(g,[{key:'connectedCallback',value:function connectedCallback(){var b=this,g=b;if(e){var h=b.attachShadow({mode:'open'});g=document.createElement('div');var i=getStyleElementsFromReactWebComponentStyleLoader();i.forEach(function(a){h.appendChild(a.cloneNode(h))}),h.appendChild(g),retargetEvents(h)}ReactDOM.render(React.cloneElement(a,extractAttributes(b)),g,function(){f=this,c(b),d('connectedCallback')})}},{key:'disconnectedCallback',value:function disconnectedCallback(){d('disconnectedCallback')}},{key:'attributeChangedCallback',value:function attributeChangedCallback(a,b,c,e){d('attributeChangedCallback',[a,b,c,e])}},{key:'adoptedCallback',value:function adoptedCallback(a,b){d('adoptedCallback',[a,b])}}]),g}(_CustomElement);customElements.define(b,h)}};