!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e(require("react")):"function"==typeof define&&define.amd?define(["react"],e):"object"==typeof exports?exports.ReactCountdownClock=e(require("react")):t.ReactCountdownClock=e(t.React)}(this,function(t){return function(t){function e(i){if(n[i])return n[i].exports;var r=n[i]={i:i,l:!1,exports:{}};return t[i].call(r.exports,r,r.exports,e),r.l=!0,r.exports}var n={};return e.m=t,e.c=n,e.d=function(t,n,i){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:i})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="/Users/JS/Sites/dev/react-countdown-clock/build",e(e.s=2)}([function(e,n){e.exports=t},function(t,e,n){"use strict";function i(t,e,n,i,s,o,a,c){if(r(e),!t){var u;if(void 0===e)u=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var p=[n,i,s,o,a,c],h=0;u=new Error(e.replace(/%s/g,function(){return p[h++]})),u.name="Invariant Violation"}throw u.framesToPop=1,u}}var r=function(t){};t.exports=i},function(t,e,n){var i,r,s,o;s=n(0),r=n(3),i=n(7),o=i({_seconds:0,_radius:null,_fraction:null,_content:null,_canvas:null,_timeoutIds:[],displayName:"ReactCountdownClock",componentDidUpdate:function(t){if(t.seconds!==this.props.seconds&&(this._seconds=t.seconds,this._setupTimer()),t.color!==this.props.color&&(this._clearBackground(),this._drawBackground(),this._updateCanvas()),t.paused!==this.props.paused&&(this.props.paused||this._startTimer(),this.props.paused))return this._pauseTimer()},componentDidMount:function(){return this._seconds=this.props.seconds,this._setupTimer()},componentWillUnmount:function(){return this._cancelTimer()},_setupTimer:function(){if(this._setScale(),this._setupCanvases(),this._drawBackground(),this._drawTimer(),!this.props.paused)return this._startTimer()},_updateCanvas:function(){return this._clearTimer(),this._drawTimer()},_setScale:function(){return this._radius=this.props.size/2,this._fraction=2/this._seconds,this._tickPeriod=this._calculateTick(),this._innerRadius=this.props.weight?this._radius-this.props.weight:this._radius/1.8},_calculateTick:function(){var t,e;return e=1.8,t=this._seconds*e,t>1e3?1e3:t},_setupCanvases:function(){if(this._background=this.refs.background.getContext("2d"),this._timer=this.refs.timer.getContext("2d"),this.refs.background.width=2*this.props.size,this.refs.background.height=2*this.props.size,this.refs.timer.width=2*this.props.size,this.refs.timer.height=2*this.props.size,this.refs.background.style.width=this.props.size+"px",this.refs.background.style.height=this.props.size+"px",this.refs.timer.style.width=this.props.size+"px",this.refs.timer.style.height=this.props.size+"px",this.refs.background.getContext("2d").scale(2,2),this.refs.timer.getContext("2d").scale(2,2),this._timer.textAlign="center",this._timer.textBaseline="middle",null!=this.props.onClick)return this.refs.component.addEventListener("click",this.props.onClick)},_startTimer:function(){return this._timeoutIds.push(setTimeout(function(t){return function(){return t._tick()}}(this),200))},_pauseTimer:function(){return this._stopTimer(),this._updateCanvas()},_stopTimer:function(){var t,e,n,i,r;for(n=this._timeoutIds,i=[],t=0,e=n.length;t<e;t++)r=n[t],i.push(clearTimeout(r));return i},_cancelTimer:function(){if(this._stopTimer(),null!=this.props.onClick)return this.refs.component.removeEventListener("click",this.props.onClick)},_tick:function(){var t;return t=Date.now(),this._timeoutIds.push(setTimeout(function(e){return function(){var n;return n=(Date.now()-t)/1e3,e._seconds-=n,e._seconds<=0?(e._seconds=0,e._handleComplete(),e._clearTimer()):(e._updateCanvas(),e._tick())}}(this),this._tickPeriod))},_handleComplete:function(){if(this.props.onComplete)return this.props.onComplete()},_clearBackground:function(){return this._background.clearRect(0,0,this.refs.timer.width,this.refs.timer.height)},_clearTimer:function(){return this._timer.clearRect(0,0,this.refs.timer.width,this.refs.timer.height)},_drawBackground:function(){return this._background.beginPath(),this._background.globalAlpha=this.props.alpha/3,this._background.fillStyle=this.props.color,this._background.arc(this._radius,this._radius,this._radius,0,2*Math.PI,!1),this._background.arc(this._radius,this._radius,this._innerRadius,2*Math.PI,0,!0),this._background.closePath(),this._background.fill()},_formattedTime:function(){var t,e,n,i,r,s,o,a,c;return t=null!=(s=this._seconds<=9.9&&this.props.showMilliseconds)?s:{1:0},"hms"===this.props.timeFormat?(e=parseInt(this._seconds/3600)%24,i=parseInt(this._seconds/60)%60,o=(this._seconds%60).toFixed(t),n=""+e,r=""+i,a=""+o,e<10&&(n="0"+e),i<10&&e>=1&&(r="0"+i),o<10&&(i>=1||e>=1)&&(a="0"+o),c=[],e>0&&c.push(n),(i>0||e>0)&&c.push(r),c.push(a),c.join(":")):this._seconds.toFixed(t)},_fontSize:function(t){var e;return"auto"===this.props.fontSize?(e=function(){switch(t.length){case 8:return 4;case 5:return 3;default:return 2}}(),this._radius/e+"px"):this.props.fontSize},_drawTimer:function(){var t,e,n;return e=this._fraction*this._seconds+1.5,t=this._formattedTime(),n=this.props.paused&&null!=this.props.pausedText?this.props.pausedText:t,this._timer.globalAlpha=this.props.alpha,this._timer.fillStyle=this.props.color,this._timer.font="bold "+this._fontSize(t)+" "+this.props.font,this._timer.fillText(n,this._radius,this._radius),this._timer.beginPath(),this._timer.arc(this._radius,this._radius,this._radius,1.5*Math.PI,Math.PI*e,!1),this._timer.arc(this._radius,this._radius,this._innerRadius,Math.PI*e,1.5*Math.PI,!0),this._timer.closePath(),this._timer.fill()},render:function(){return s.createElement("div",{ref:"component",className:"react-countdown-clock"},s.createElement("canvas",{ref:"background",style:{position:"absolute"},width:this.props.size,height:this.props.size}),s.createElement("canvas",{ref:"timer",style:{position:"absolute"},width:this.props.size,height:this.props.size}))}}),o.propTypes={seconds:r.number,size:r.number,weight:r.number,color:r.string,fontSize:r.string,font:r.string,alpha:r.number,timeFormat:r.string,onComplete:r.func,onClick:r.func,showMilliseconds:r.bool,paused:r.bool,pausedText:r.string},o.defaultProps={seconds:60,size:300,color:"#000",alpha:1,timeFormat:"hms",fontSize:"auto",font:"Arial",showMilliseconds:!0,paused:!1},t.exports=o},function(t,e,n){t.exports=n(4)()},function(t,e,n){"use strict";var i=n(5),r=n(1),s=n(6);t.exports=function(){function t(t,e,n,i,o,a){a!==s&&r(!1,"Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types")}function e(){return t}t.isRequired=t;var n={array:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e};return n.checkPropTypes=i,n.PropTypes=n,n}},function(t,e,n){"use strict";function i(t){return function(){return t}}var r=function(){};r.thatReturns=i,r.thatReturnsFalse=i(!1),r.thatReturnsTrue=i(!0),r.thatReturnsNull=i(null),r.thatReturnsThis=function(){return this},r.thatReturnsArgument=function(t){return t},t.exports=r},function(t,e,n){"use strict";t.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},function(t,e,n){"use strict";var i=n(0),r=n(8);if(void 0===i)throw Error("create-react-class could not find the React object. If you are using script tags, make sure that React is being loaded before create-react-class.");var s=(new i.Component).updater;t.exports=r(i.Component,i.isValidElement,s)},function(t,e,n){"use strict";function i(t){return t}function r(t,e,n){function r(t,e){var n=y.hasOwnProperty(e)?y[e]:null;x.hasOwnProperty(e)&&a("OVERRIDE_BASE"===n,"ReactClassInterface: You are attempting to override `%s` from your class specification. Ensure that your method names do not overlap with React methods.",e),t&&a("DEFINE_MANY"===n||"DEFINE_MANY_MERGED"===n,"ReactClassInterface: You are attempting to define `%s` on your component more than once. This conflict may be due to a mixin.",e)}function u(t,n){if(n){a("function"!=typeof n,"ReactClass: You're attempting to use a component class or function as a mixin. Instead, just use a regular object."),a(!e(n),"ReactClass: You're attempting to use a component as a mixin. Instead, just use a regular object.");var i=t.prototype,s=i.__reactAutoBindPairs;n.hasOwnProperty(c)&&b.mixins(t,n.mixins);for(var o in n)if(n.hasOwnProperty(o)&&o!==c){var u=n[o],p=i.hasOwnProperty(o);if(r(p,o),b.hasOwnProperty(o))b[o](t,u);else{var h=y.hasOwnProperty(o),d="function"==typeof u,m=d&&!h&&!p&&!1!==n.autobind;if(m)s.push(o,u),i[o]=u;else if(p){var _=y[o];a(h&&("DEFINE_MANY_MERGED"===_||"DEFINE_MANY"===_),"ReactClass: Unexpected spec policy %s for key %s when mixing in component specs.",_,o),"DEFINE_MANY_MERGED"===_?i[o]=l(i[o],u):"DEFINE_MANY"===_&&(i[o]=f(i[o],u))}else i[o]=u}}}else;}function p(t,e){if(e)for(var n in e){var i=e[n];if(e.hasOwnProperty(n)){var r=n in b;a(!r,'ReactClass: You are attempting to define a reserved property, `%s`, that shouldn\'t be on the "statics" key. Define it as an instance property instead; it will still be accessible on the constructor.',n);var s=n in t;a(!s,"ReactClass: You are attempting to define `%s` on your component more than once. This conflict may be due to a mixin.",n),t[n]=i}}}function h(t,e){a(t&&e&&"object"==typeof t&&"object"==typeof e,"mergeIntoWithNoDuplicateKeys(): Cannot merge non-objects.");for(var n in e)e.hasOwnProperty(n)&&(a(void 0===t[n],"mergeIntoWithNoDuplicateKeys(): Tried to merge two objects with the same key: `%s`. This conflict may be due to a mixin; in particular, this may be caused by two getInitialState() or getDefaultProps() methods returning objects with clashing keys.",n),t[n]=e[n]);return t}function l(t,e){return function(){var n=t.apply(this,arguments),i=e.apply(this,arguments);if(null==n)return i;if(null==i)return n;var r={};return h(r,n),h(r,i),r}}function f(t,e){return function(){t.apply(this,arguments),e.apply(this,arguments)}}function d(t,e){var n=e.bind(t);return n}function m(t){for(var e=t.__reactAutoBindPairs,n=0;n<e.length;n+=2){var i=e[n],r=e[n+1];t[i]=d(t,r)}}function _(t){var e=i(function(t,i,r){this.__reactAutoBindPairs.length&&m(this),this.props=t,this.context=i,this.refs=o,this.updater=r||n,this.state=null;var s=this.getInitialState?this.getInitialState():null;a("object"==typeof s&&!Array.isArray(s),"%s.getInitialState(): must return an object or null",e.displayName||"ReactCompositeComponent"),this.state=s});e.prototype=new w,e.prototype.constructor=e,e.prototype.__reactAutoBindPairs=[],g.forEach(u.bind(null,e)),u(e,E),u(e,t),u(e,v),e.getDefaultProps&&(e.defaultProps=e.getDefaultProps()),a(e.prototype.render,"createClass(...): Class specification must implement a `render` method.");for(var r in y)e.prototype[r]||(e.prototype[r]=null);return e}var g=[],y={mixins:"DEFINE_MANY",statics:"DEFINE_MANY",propTypes:"DEFINE_MANY",contextTypes:"DEFINE_MANY",childContextTypes:"DEFINE_MANY",getDefaultProps:"DEFINE_MANY_MERGED",getInitialState:"DEFINE_MANY_MERGED",getChildContext:"DEFINE_MANY_MERGED",render:"DEFINE_ONCE",componentWillMount:"DEFINE_MANY",componentDidMount:"DEFINE_MANY",componentWillReceiveProps:"DEFINE_MANY",shouldComponentUpdate:"DEFINE_ONCE",componentWillUpdate:"DEFINE_MANY",componentDidUpdate:"DEFINE_MANY",componentWillUnmount:"DEFINE_MANY",updateComponent:"OVERRIDE_BASE"},b={displayName:function(t,e){t.displayName=e},mixins:function(t,e){if(e)for(var n=0;n<e.length;n++)u(t,e[n])},childContextTypes:function(t,e){t.childContextTypes=s({},t.childContextTypes,e)},contextTypes:function(t,e){t.contextTypes=s({},t.contextTypes,e)},getDefaultProps:function(t,e){t.getDefaultProps?t.getDefaultProps=l(t.getDefaultProps,e):t.getDefaultProps=e},propTypes:function(t,e){t.propTypes=s({},t.propTypes,e)},statics:function(t,e){p(t,e)},autobind:function(){}},E={componentDidMount:function(){this.__isMounted=!0}},v={componentWillUnmount:function(){this.__isMounted=!1}},x={replaceState:function(t,e){this.updater.enqueueReplaceState(this,t,e)},isMounted:function(){return!!this.__isMounted}},w=function(){};return s(w.prototype,t.prototype,x),_}var s=n(9),o=n(10),a=n(1),c="mixins";t.exports=r},function(t,e,n){"use strict";function i(t){if(null===t||void 0===t)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(t)}/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var r=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable;t.exports=function(){try{if(!Object.assign)return!1;var t=new String("abc");if(t[5]="de","5"===Object.getOwnPropertyNames(t)[0])return!1;for(var e={},n=0;n<10;n++)e["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(e).map(function(t){return e[t]}).join(""))return!1;var i={};return"abcdefghijklmnopqrst".split("").forEach(function(t){i[t]=t}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},i)).join("")}catch(t){return!1}}()?Object.assign:function(t,e){for(var n,a,c=i(t),u=1;u<arguments.length;u++){n=Object(arguments[u]);for(var p in n)s.call(n,p)&&(c[p]=n[p]);if(r){a=r(n);for(var h=0;h<a.length;h++)o.call(n,a[h])&&(c[a[h]]=n[a[h]])}}return c}},function(t,e,n){"use strict";var i={};t.exports=i}])});
//# sourceMappingURL=react-countdown-clock.js.map