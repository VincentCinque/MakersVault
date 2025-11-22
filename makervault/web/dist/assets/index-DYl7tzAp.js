const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/3MFLoader-a6ryrntd.js","assets/fflate.module-DxdqVi2p.js"])))=>i.map(i=>d[i]);
(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function _v(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}function q1(t){if(t.__esModule)return t;var e=t.default;if(typeof e=="function"){var n=function i(){return this instanceof i?Reflect.construct(e,arguments,this.constructor):e.apply(this,arguments)};n.prototype=e.prototype}else n={};return Object.defineProperty(n,"__esModule",{value:!0}),Object.keys(t).forEach(function(i){var r=Object.getOwnPropertyDescriptor(t,i);Object.defineProperty(n,i,r.get?r:{enumerable:!0,get:function(){return t[i]}})}),n}var dm={exports:{}},xl={},fm={exports:{}},Xe={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ro=Symbol.for("react.element"),vv=Symbol.for("react.portal"),xv=Symbol.for("react.fragment"),yv=Symbol.for("react.strict_mode"),Sv=Symbol.for("react.profiler"),Mv=Symbol.for("react.provider"),Ev=Symbol.for("react.context"),wv=Symbol.for("react.forward_ref"),Tv=Symbol.for("react.suspense"),Av=Symbol.for("react.memo"),Cv=Symbol.for("react.lazy"),xf=Symbol.iterator;function Rv(t){return t===null||typeof t!="object"?null:(t=xf&&t[xf]||t["@@iterator"],typeof t=="function"?t:null)}var hm={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},pm=Object.assign,mm={};function Rs(t,e,n){this.props=t,this.context=e,this.refs=mm,this.updater=n||hm}Rs.prototype.isReactComponent={};Rs.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Rs.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function gm(){}gm.prototype=Rs.prototype;function nd(t,e,n){this.props=t,this.context=e,this.refs=mm,this.updater=n||hm}var id=nd.prototype=new gm;id.constructor=nd;pm(id,Rs.prototype);id.isPureReactComponent=!0;var yf=Array.isArray,_m=Object.prototype.hasOwnProperty,rd={current:null},vm={key:!0,ref:!0,__self:!0,__source:!0};function xm(t,e,n){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)_m.call(e,i)&&!vm.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];r.children=l}if(t&&t.defaultProps)for(i in a=t.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:Ro,type:t,key:s,ref:o,props:r,_owner:rd.current}}function bv(t,e){return{$$typeof:Ro,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function sd(t){return typeof t=="object"&&t!==null&&t.$$typeof===Ro}function Lv(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Sf=/\/+/g;function Xl(t,e){return typeof t=="object"&&t!==null&&t.key!=null?Lv(""+t.key):e.toString(36)}function Ca(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Ro:case vv:o=!0}}if(o)return o=t,r=r(o),t=i===""?"."+Xl(o,0):i,yf(r)?(n="",t!=null&&(n=t.replace(Sf,"$&/")+"/"),Ca(r,e,n,"",function(u){return u})):r!=null&&(sd(r)&&(r=bv(r,n+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(Sf,"$&/")+"/")+t)),e.push(r)),1;if(o=0,i=i===""?".":i+":",yf(t))for(var a=0;a<t.length;a++){s=t[a];var l=i+Xl(s,a);o+=Ca(s,e,n,l,r)}else if(l=Rv(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=i+Xl(s,a++),o+=Ca(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Bo(t,e,n){if(t==null)return t;var i=[],r=0;return Ca(t,i,"","",function(s){return e.call(n,s,r++)}),i}function Pv(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Zt={current:null},Ra={transition:null},Dv={ReactCurrentDispatcher:Zt,ReactCurrentBatchConfig:Ra,ReactCurrentOwner:rd};function ym(){throw Error("act(...) is not supported in production builds of React.")}Xe.Children={map:Bo,forEach:function(t,e,n){Bo(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Bo(t,function(){e++}),e},toArray:function(t){return Bo(t,function(e){return e})||[]},only:function(t){if(!sd(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Xe.Component=Rs;Xe.Fragment=xv;Xe.Profiler=Sv;Xe.PureComponent=nd;Xe.StrictMode=yv;Xe.Suspense=Tv;Xe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Dv;Xe.act=ym;Xe.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=pm({},t.props),r=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=rd.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)_m.call(e,l)&&!vm.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];i.children=a}return{$$typeof:Ro,type:t.type,key:r,ref:s,props:i,_owner:o}};Xe.createContext=function(t){return t={$$typeof:Ev,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:Mv,_context:t},t.Consumer=t};Xe.createElement=xm;Xe.createFactory=function(t){var e=xm.bind(null,t);return e.type=t,e};Xe.createRef=function(){return{current:null}};Xe.forwardRef=function(t){return{$$typeof:wv,render:t}};Xe.isValidElement=sd;Xe.lazy=function(t){return{$$typeof:Cv,_payload:{_status:-1,_result:t},_init:Pv}};Xe.memo=function(t,e){return{$$typeof:Av,type:t,compare:e===void 0?null:e}};Xe.startTransition=function(t){var e=Ra.transition;Ra.transition={};try{t()}finally{Ra.transition=e}};Xe.unstable_act=ym;Xe.useCallback=function(t,e){return Zt.current.useCallback(t,e)};Xe.useContext=function(t){return Zt.current.useContext(t)};Xe.useDebugValue=function(){};Xe.useDeferredValue=function(t){return Zt.current.useDeferredValue(t)};Xe.useEffect=function(t,e){return Zt.current.useEffect(t,e)};Xe.useId=function(){return Zt.current.useId()};Xe.useImperativeHandle=function(t,e,n){return Zt.current.useImperativeHandle(t,e,n)};Xe.useInsertionEffect=function(t,e){return Zt.current.useInsertionEffect(t,e)};Xe.useLayoutEffect=function(t,e){return Zt.current.useLayoutEffect(t,e)};Xe.useMemo=function(t,e){return Zt.current.useMemo(t,e)};Xe.useReducer=function(t,e,n){return Zt.current.useReducer(t,e,n)};Xe.useRef=function(t){return Zt.current.useRef(t)};Xe.useState=function(t){return Zt.current.useState(t)};Xe.useSyncExternalStore=function(t,e,n){return Zt.current.useSyncExternalStore(t,e,n)};Xe.useTransition=function(){return Zt.current.useTransition()};Xe.version="18.3.1";fm.exports=Xe;var Me=fm.exports;const vt=_v(Me);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Nv=Me,Uv=Symbol.for("react.element"),Iv=Symbol.for("react.fragment"),Fv=Object.prototype.hasOwnProperty,Ov=Nv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,kv={key:!0,ref:!0,__self:!0,__source:!0};function Sm(t,e,n){var i,r={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)Fv.call(e,i)&&!kv.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:Uv,type:t,key:s,ref:o,props:r,_owner:Ov.current}}xl.Fragment=Iv;xl.jsx=Sm;xl.jsxs=Sm;dm.exports=xl;var D=dm.exports,Mm={exports:{}},vn={},Em={exports:{}},wm={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(P,O){var j=P.length;P.push(O);e:for(;0<j;){var K=j-1>>>1,oe=P[K];if(0<r(oe,O))P[K]=O,P[j]=oe,j=K;else break e}}function n(P){return P.length===0?null:P[0]}function i(P){if(P.length===0)return null;var O=P[0],j=P.pop();if(j!==O){P[0]=j;e:for(var K=0,oe=P.length,q=oe>>>1;K<q;){var Z=2*(K+1)-1,ce=P[Z],ge=Z+1,_e=P[ge];if(0>r(ce,j))ge<oe&&0>r(_e,ce)?(P[K]=_e,P[ge]=j,K=ge):(P[K]=ce,P[Z]=j,K=Z);else if(ge<oe&&0>r(_e,j))P[K]=_e,P[ge]=j,K=ge;else break e}}return O}function r(P,O){var j=P.sortIndex-O.sortIndex;return j!==0?j:P.id-O.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],u=[],f=1,d=null,h=3,p=!1,v=!1,x=!1,m=typeof setTimeout=="function"?setTimeout:null,c=typeof clearTimeout=="function"?clearTimeout:null,_=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function g(P){for(var O=n(u);O!==null;){if(O.callback===null)i(u);else if(O.startTime<=P)i(u),O.sortIndex=O.expirationTime,e(l,O);else break;O=n(u)}}function S(P){if(x=!1,g(P),!v)if(n(l)!==null)v=!0,$(R);else{var O=n(u);O!==null&&Y(S,O.startTime-P)}}function R(P,O){v=!1,x&&(x=!1,c(U),U=-1),p=!0;var j=h;try{for(g(O),d=n(l);d!==null&&(!(d.expirationTime>O)||P&&!B());){var K=d.callback;if(typeof K=="function"){d.callback=null,h=d.priorityLevel;var oe=K(d.expirationTime<=O);O=t.unstable_now(),typeof oe=="function"?d.callback=oe:d===n(l)&&i(l),g(O)}else i(l);d=n(l)}if(d!==null)var q=!0;else{var Z=n(u);Z!==null&&Y(S,Z.startTime-O),q=!1}return q}finally{d=null,h=j,p=!1}}var C=!1,A=null,U=-1,M=5,T=-1;function B(){return!(t.unstable_now()-T<M)}function z(){if(A!==null){var P=t.unstable_now();T=P;var O=!0;try{O=A(!0,P)}finally{O?Q():(C=!1,A=null)}}else C=!1}var Q;if(typeof _=="function")Q=function(){_(z)};else if(typeof MessageChannel<"u"){var L=new MessageChannel,F=L.port2;L.port1.onmessage=z,Q=function(){F.postMessage(null)}}else Q=function(){m(z,0)};function $(P){A=P,C||(C=!0,Q())}function Y(P,O){U=m(function(){P(t.unstable_now())},O)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(P){P.callback=null},t.unstable_continueExecution=function(){v||p||(v=!0,$(R))},t.unstable_forceFrameRate=function(P){0>P||125<P?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):M=0<P?Math.floor(1e3/P):5},t.unstable_getCurrentPriorityLevel=function(){return h},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(P){switch(h){case 1:case 2:case 3:var O=3;break;default:O=h}var j=h;h=O;try{return P()}finally{h=j}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(P,O){switch(P){case 1:case 2:case 3:case 4:case 5:break;default:P=3}var j=h;h=P;try{return O()}finally{h=j}},t.unstable_scheduleCallback=function(P,O,j){var K=t.unstable_now();switch(typeof j=="object"&&j!==null?(j=j.delay,j=typeof j=="number"&&0<j?K+j:K):j=K,P){case 1:var oe=-1;break;case 2:oe=250;break;case 5:oe=1073741823;break;case 4:oe=1e4;break;default:oe=5e3}return oe=j+oe,P={id:f++,callback:O,priorityLevel:P,startTime:j,expirationTime:oe,sortIndex:-1},j>K?(P.sortIndex=j,e(u,P),n(l)===null&&P===n(u)&&(x?(c(U),U=-1):x=!0,Y(S,j-K))):(P.sortIndex=oe,e(l,P),v||p||(v=!0,$(R))),P},t.unstable_shouldYield=B,t.unstable_wrapCallback=function(P){var O=h;return function(){var j=h;h=O;try{return P.apply(this,arguments)}finally{h=j}}}})(wm);Em.exports=wm;var Bv=Em.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var zv=Me,_n=Bv;function ie(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Tm=new Set,ao={};function Rr(t,e){ms(t,e),ms(t+"Capture",e)}function ms(t,e){for(ao[t]=e,t=0;t<e.length;t++)Tm.add(e[t])}var mi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Qu=Object.prototype.hasOwnProperty,Hv=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Mf={},Ef={};function Gv(t){return Qu.call(Ef,t)?!0:Qu.call(Mf,t)?!1:Hv.test(t)?Ef[t]=!0:(Mf[t]=!0,!1)}function Vv(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function Wv(t,e,n,i){if(e===null||typeof e>"u"||Vv(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Qt(t,e,n,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Ft={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Ft[t]=new Qt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Ft[e]=new Qt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Ft[t]=new Qt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Ft[t]=new Qt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Ft[t]=new Qt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Ft[t]=new Qt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Ft[t]=new Qt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Ft[t]=new Qt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Ft[t]=new Qt(t,5,!1,t.toLowerCase(),null,!1,!1)});var od=/[\-:]([a-z])/g;function ad(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(od,ad);Ft[e]=new Qt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(od,ad);Ft[e]=new Qt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(od,ad);Ft[e]=new Qt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Ft[t]=new Qt(t,1,!1,t.toLowerCase(),null,!1,!1)});Ft.xlinkHref=new Qt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Ft[t]=new Qt(t,1,!1,t.toLowerCase(),null,!0,!0)});function ld(t,e,n,i){var r=Ft.hasOwnProperty(e)?Ft[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(Wv(e,n,r,i)&&(n=null),i||r===null?Gv(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var yi=zv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,zo=Symbol.for("react.element"),$r=Symbol.for("react.portal"),qr=Symbol.for("react.fragment"),ud=Symbol.for("react.strict_mode"),Ju=Symbol.for("react.profiler"),Am=Symbol.for("react.provider"),Cm=Symbol.for("react.context"),cd=Symbol.for("react.forward_ref"),ec=Symbol.for("react.suspense"),tc=Symbol.for("react.suspense_list"),dd=Symbol.for("react.memo"),Ci=Symbol.for("react.lazy"),Rm=Symbol.for("react.offscreen"),wf=Symbol.iterator;function Us(t){return t===null||typeof t!="object"?null:(t=wf&&t[wf]||t["@@iterator"],typeof t=="function"?t:null)}var ct=Object.assign,$l;function $s(t){if($l===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);$l=e&&e[1]||""}return`
`+$l+t}var ql=!1;function Yl(t,e){if(!t||ql)return"";ql=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var i=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){i=u}t.call(e.prototype)}else{try{throw Error()}catch(u){i=u}t()}}catch(u){if(u&&i&&typeof u.stack=="string"){for(var r=u.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{ql=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?$s(t):""}function jv(t){switch(t.tag){case 5:return $s(t.type);case 16:return $s("Lazy");case 13:return $s("Suspense");case 19:return $s("SuspenseList");case 0:case 2:case 15:return t=Yl(t.type,!1),t;case 11:return t=Yl(t.type.render,!1),t;case 1:return t=Yl(t.type,!0),t;default:return""}}function nc(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case qr:return"Fragment";case $r:return"Portal";case Ju:return"Profiler";case ud:return"StrictMode";case ec:return"Suspense";case tc:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Cm:return(t.displayName||"Context")+".Consumer";case Am:return(t._context.displayName||"Context")+".Provider";case cd:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case dd:return e=t.displayName||null,e!==null?e:nc(t.type)||"Memo";case Ci:e=t._payload,t=t._init;try{return nc(t(e))}catch{}}return null}function Xv(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return nc(e);case 8:return e===ud?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function $i(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function bm(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function $v(t){var e=bm(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Ho(t){t._valueTracker||(t._valueTracker=$v(t))}function Lm(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=bm(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function Ga(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function ic(t,e){var n=e.checked;return ct({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Tf(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=$i(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Pm(t,e){e=e.checked,e!=null&&ld(t,"checked",e,!1)}function rc(t,e){Pm(t,e);var n=$i(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?sc(t,e.type,n):e.hasOwnProperty("defaultValue")&&sc(t,e.type,$i(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Af(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function sc(t,e,n){(e!=="number"||Ga(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var qs=Array.isArray;function as(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+$i(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function oc(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(ie(91));return ct({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Cf(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(ie(92));if(qs(n)){if(1<n.length)throw Error(ie(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:$i(n)}}function Dm(t,e){var n=$i(e.value),i=$i(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function Rf(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Nm(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ac(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Nm(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Go,Um=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Go=Go||document.createElement("div"),Go.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Go.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function lo(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Zs={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},qv=["Webkit","ms","Moz","O"];Object.keys(Zs).forEach(function(t){qv.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Zs[e]=Zs[t]})});function Im(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Zs.hasOwnProperty(t)&&Zs[t]?(""+e).trim():e+"px"}function Fm(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=Im(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var Yv=ct({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function lc(t,e){if(e){if(Yv[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(ie(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(ie(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(ie(61))}if(e.style!=null&&typeof e.style!="object")throw Error(ie(62))}}function uc(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var cc=null;function fd(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var dc=null,ls=null,us=null;function bf(t){if(t=Po(t)){if(typeof dc!="function")throw Error(ie(280));var e=t.stateNode;e&&(e=wl(e),dc(t.stateNode,t.type,e))}}function Om(t){ls?us?us.push(t):us=[t]:ls=t}function km(){if(ls){var t=ls,e=us;if(us=ls=null,bf(t),e)for(t=0;t<e.length;t++)bf(e[t])}}function Bm(t,e){return t(e)}function zm(){}var Kl=!1;function Hm(t,e,n){if(Kl)return t(e,n);Kl=!0;try{return Bm(t,e,n)}finally{Kl=!1,(ls!==null||us!==null)&&(zm(),km())}}function uo(t,e){var n=t.stateNode;if(n===null)return null;var i=wl(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(ie(231,e,typeof n));return n}var fc=!1;if(mi)try{var Is={};Object.defineProperty(Is,"passive",{get:function(){fc=!0}}),window.addEventListener("test",Is,Is),window.removeEventListener("test",Is,Is)}catch{fc=!1}function Kv(t,e,n,i,r,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(f){this.onError(f)}}var Qs=!1,Va=null,Wa=!1,hc=null,Zv={onError:function(t){Qs=!0,Va=t}};function Qv(t,e,n,i,r,s,o,a,l){Qs=!1,Va=null,Kv.apply(Zv,arguments)}function Jv(t,e,n,i,r,s,o,a,l){if(Qv.apply(this,arguments),Qs){if(Qs){var u=Va;Qs=!1,Va=null}else throw Error(ie(198));Wa||(Wa=!0,hc=u)}}function br(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Gm(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Lf(t){if(br(t)!==t)throw Error(ie(188))}function e0(t){var e=t.alternate;if(!e){if(e=br(t),e===null)throw Error(ie(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return Lf(r),t;if(s===i)return Lf(r),e;s=s.sibling}throw Error(ie(188))}if(n.return!==i.return)n=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===n){o=!0,n=r,i=s;break}if(a===i){o=!0,i=r,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,i=r;break}if(a===i){o=!0,i=s,n=r;break}a=a.sibling}if(!o)throw Error(ie(189))}}if(n.alternate!==i)throw Error(ie(190))}if(n.tag!==3)throw Error(ie(188));return n.stateNode.current===n?t:e}function Vm(t){return t=e0(t),t!==null?Wm(t):null}function Wm(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Wm(t);if(e!==null)return e;t=t.sibling}return null}var jm=_n.unstable_scheduleCallback,Pf=_n.unstable_cancelCallback,t0=_n.unstable_shouldYield,n0=_n.unstable_requestPaint,gt=_n.unstable_now,i0=_n.unstable_getCurrentPriorityLevel,hd=_n.unstable_ImmediatePriority,Xm=_n.unstable_UserBlockingPriority,ja=_n.unstable_NormalPriority,r0=_n.unstable_LowPriority,$m=_n.unstable_IdlePriority,yl=null,Qn=null;function s0(t){if(Qn&&typeof Qn.onCommitFiberRoot=="function")try{Qn.onCommitFiberRoot(yl,t,void 0,(t.current.flags&128)===128)}catch{}}var Gn=Math.clz32?Math.clz32:l0,o0=Math.log,a0=Math.LN2;function l0(t){return t>>>=0,t===0?32:31-(o0(t)/a0|0)|0}var Vo=64,Wo=4194304;function Ys(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Xa(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~r;a!==0?i=Ys(a):(s&=o,s!==0&&(i=Ys(s)))}else o=n&~r,o!==0?i=Ys(o):s!==0&&(i=Ys(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-Gn(e),r=1<<n,i|=t[n],e&=~r;return i}function u0(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function c0(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-Gn(s),a=1<<o,l=r[o];l===-1?(!(a&n)||a&i)&&(r[o]=u0(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function pc(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function qm(){var t=Vo;return Vo<<=1,!(Vo&4194240)&&(Vo=64),t}function Zl(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function bo(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Gn(e),t[e]=n}function d0(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-Gn(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function pd(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-Gn(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var Ke=0;function Ym(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Km,md,Zm,Qm,Jm,mc=!1,jo=[],Fi=null,Oi=null,ki=null,co=new Map,fo=new Map,bi=[],f0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Df(t,e){switch(t){case"focusin":case"focusout":Fi=null;break;case"dragenter":case"dragleave":Oi=null;break;case"mouseover":case"mouseout":ki=null;break;case"pointerover":case"pointerout":co.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":fo.delete(e.pointerId)}}function Fs(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=Po(e),e!==null&&md(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function h0(t,e,n,i,r){switch(e){case"focusin":return Fi=Fs(Fi,t,e,n,i,r),!0;case"dragenter":return Oi=Fs(Oi,t,e,n,i,r),!0;case"mouseover":return ki=Fs(ki,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return co.set(s,Fs(co.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,fo.set(s,Fs(fo.get(s)||null,t,e,n,i,r)),!0}return!1}function eg(t){var e=hr(t.target);if(e!==null){var n=br(e);if(n!==null){if(e=n.tag,e===13){if(e=Gm(n),e!==null){t.blockedOn=e,Jm(t.priority,function(){Zm(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function ba(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=gc(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);cc=i,n.target.dispatchEvent(i),cc=null}else return e=Po(n),e!==null&&md(e),t.blockedOn=n,!1;e.shift()}return!0}function Nf(t,e,n){ba(t)&&n.delete(e)}function p0(){mc=!1,Fi!==null&&ba(Fi)&&(Fi=null),Oi!==null&&ba(Oi)&&(Oi=null),ki!==null&&ba(ki)&&(ki=null),co.forEach(Nf),fo.forEach(Nf)}function Os(t,e){t.blockedOn===e&&(t.blockedOn=null,mc||(mc=!0,_n.unstable_scheduleCallback(_n.unstable_NormalPriority,p0)))}function ho(t){function e(r){return Os(r,t)}if(0<jo.length){Os(jo[0],t);for(var n=1;n<jo.length;n++){var i=jo[n];i.blockedOn===t&&(i.blockedOn=null)}}for(Fi!==null&&Os(Fi,t),Oi!==null&&Os(Oi,t),ki!==null&&Os(ki,t),co.forEach(e),fo.forEach(e),n=0;n<bi.length;n++)i=bi[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<bi.length&&(n=bi[0],n.blockedOn===null);)eg(n),n.blockedOn===null&&bi.shift()}var cs=yi.ReactCurrentBatchConfig,$a=!0;function m0(t,e,n,i){var r=Ke,s=cs.transition;cs.transition=null;try{Ke=1,gd(t,e,n,i)}finally{Ke=r,cs.transition=s}}function g0(t,e,n,i){var r=Ke,s=cs.transition;cs.transition=null;try{Ke=4,gd(t,e,n,i)}finally{Ke=r,cs.transition=s}}function gd(t,e,n,i){if($a){var r=gc(t,e,n,i);if(r===null)au(t,e,i,qa,n),Df(t,i);else if(h0(r,t,e,n,i))i.stopPropagation();else if(Df(t,i),e&4&&-1<f0.indexOf(t)){for(;r!==null;){var s=Po(r);if(s!==null&&Km(s),s=gc(t,e,n,i),s===null&&au(t,e,i,qa,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else au(t,e,i,null,n)}}var qa=null;function gc(t,e,n,i){if(qa=null,t=fd(i),t=hr(t),t!==null)if(e=br(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Gm(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return qa=t,null}function tg(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(i0()){case hd:return 1;case Xm:return 4;case ja:case r0:return 16;case $m:return 536870912;default:return 16}default:return 16}}var Pi=null,_d=null,La=null;function ng(){if(La)return La;var t,e=_d,n=e.length,i,r="value"in Pi?Pi.value:Pi.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var o=n-t;for(i=1;i<=o&&e[n-i]===r[s-i];i++);return La=r.slice(t,1<i?1-i:void 0)}function Pa(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Xo(){return!0}function Uf(){return!1}function xn(t){function e(n,i,r,s,o){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Xo:Uf,this.isPropagationStopped=Uf,this}return ct(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Xo)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Xo)},persist:function(){},isPersistent:Xo}),e}var bs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},vd=xn(bs),Lo=ct({},bs,{view:0,detail:0}),_0=xn(Lo),Ql,Jl,ks,Sl=ct({},Lo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:xd,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==ks&&(ks&&t.type==="mousemove"?(Ql=t.screenX-ks.screenX,Jl=t.screenY-ks.screenY):Jl=Ql=0,ks=t),Ql)},movementY:function(t){return"movementY"in t?t.movementY:Jl}}),If=xn(Sl),v0=ct({},Sl,{dataTransfer:0}),x0=xn(v0),y0=ct({},Lo,{relatedTarget:0}),eu=xn(y0),S0=ct({},bs,{animationName:0,elapsedTime:0,pseudoElement:0}),M0=xn(S0),E0=ct({},bs,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),w0=xn(E0),T0=ct({},bs,{data:0}),Ff=xn(T0),A0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},C0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},R0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function b0(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=R0[t])?!!e[t]:!1}function xd(){return b0}var L0=ct({},Lo,{key:function(t){if(t.key){var e=A0[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Pa(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?C0[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:xd,charCode:function(t){return t.type==="keypress"?Pa(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Pa(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),P0=xn(L0),D0=ct({},Sl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Of=xn(D0),N0=ct({},Lo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:xd}),U0=xn(N0),I0=ct({},bs,{propertyName:0,elapsedTime:0,pseudoElement:0}),F0=xn(I0),O0=ct({},Sl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),k0=xn(O0),B0=[9,13,27,32],yd=mi&&"CompositionEvent"in window,Js=null;mi&&"documentMode"in document&&(Js=document.documentMode);var z0=mi&&"TextEvent"in window&&!Js,ig=mi&&(!yd||Js&&8<Js&&11>=Js),kf=" ",Bf=!1;function rg(t,e){switch(t){case"keyup":return B0.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function sg(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Yr=!1;function H0(t,e){switch(t){case"compositionend":return sg(e);case"keypress":return e.which!==32?null:(Bf=!0,kf);case"textInput":return t=e.data,t===kf&&Bf?null:t;default:return null}}function G0(t,e){if(Yr)return t==="compositionend"||!yd&&rg(t,e)?(t=ng(),La=_d=Pi=null,Yr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return ig&&e.locale!=="ko"?null:e.data;default:return null}}var V0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function zf(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!V0[t.type]:e==="textarea"}function og(t,e,n,i){Om(i),e=Ya(e,"onChange"),0<e.length&&(n=new vd("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var eo=null,po=null;function W0(t){_g(t,0)}function Ml(t){var e=Qr(t);if(Lm(e))return t}function j0(t,e){if(t==="change")return e}var ag=!1;if(mi){var tu;if(mi){var nu="oninput"in document;if(!nu){var Hf=document.createElement("div");Hf.setAttribute("oninput","return;"),nu=typeof Hf.oninput=="function"}tu=nu}else tu=!1;ag=tu&&(!document.documentMode||9<document.documentMode)}function Gf(){eo&&(eo.detachEvent("onpropertychange",lg),po=eo=null)}function lg(t){if(t.propertyName==="value"&&Ml(po)){var e=[];og(e,po,t,fd(t)),Hm(W0,e)}}function X0(t,e,n){t==="focusin"?(Gf(),eo=e,po=n,eo.attachEvent("onpropertychange",lg)):t==="focusout"&&Gf()}function $0(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Ml(po)}function q0(t,e){if(t==="click")return Ml(e)}function Y0(t,e){if(t==="input"||t==="change")return Ml(e)}function K0(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var jn=typeof Object.is=="function"?Object.is:K0;function mo(t,e){if(jn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!Qu.call(e,r)||!jn(t[r],e[r]))return!1}return!0}function Vf(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Wf(t,e){var n=Vf(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Vf(n)}}function ug(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?ug(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function cg(){for(var t=window,e=Ga();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Ga(t.document)}return e}function Sd(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function Z0(t){var e=cg(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&ug(n.ownerDocument.documentElement,n)){if(i!==null&&Sd(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=Wf(n,s);var o=Wf(n,i);r&&o&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var Q0=mi&&"documentMode"in document&&11>=document.documentMode,Kr=null,_c=null,to=null,vc=!1;function jf(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;vc||Kr==null||Kr!==Ga(i)||(i=Kr,"selectionStart"in i&&Sd(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),to&&mo(to,i)||(to=i,i=Ya(_c,"onSelect"),0<i.length&&(e=new vd("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=Kr)))}function $o(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Zr={animationend:$o("Animation","AnimationEnd"),animationiteration:$o("Animation","AnimationIteration"),animationstart:$o("Animation","AnimationStart"),transitionend:$o("Transition","TransitionEnd")},iu={},dg={};mi&&(dg=document.createElement("div").style,"AnimationEvent"in window||(delete Zr.animationend.animation,delete Zr.animationiteration.animation,delete Zr.animationstart.animation),"TransitionEvent"in window||delete Zr.transitionend.transition);function El(t){if(iu[t])return iu[t];if(!Zr[t])return t;var e=Zr[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in dg)return iu[t]=e[n];return t}var fg=El("animationend"),hg=El("animationiteration"),pg=El("animationstart"),mg=El("transitionend"),gg=new Map,Xf="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ki(t,e){gg.set(t,e),Rr(e,[t])}for(var ru=0;ru<Xf.length;ru++){var su=Xf[ru],J0=su.toLowerCase(),ex=su[0].toUpperCase()+su.slice(1);Ki(J0,"on"+ex)}Ki(fg,"onAnimationEnd");Ki(hg,"onAnimationIteration");Ki(pg,"onAnimationStart");Ki("dblclick","onDoubleClick");Ki("focusin","onFocus");Ki("focusout","onBlur");Ki(mg,"onTransitionEnd");ms("onMouseEnter",["mouseout","mouseover"]);ms("onMouseLeave",["mouseout","mouseover"]);ms("onPointerEnter",["pointerout","pointerover"]);ms("onPointerLeave",["pointerout","pointerover"]);Rr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Rr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Rr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Rr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Rr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Rr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ks="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),tx=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ks));function $f(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,Jv(i,e,void 0,t),t.currentTarget=null}function _g(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;$f(r,a,u),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;$f(r,a,u),s=l}}}if(Wa)throw t=hc,Wa=!1,hc=null,t}function it(t,e){var n=e[Ec];n===void 0&&(n=e[Ec]=new Set);var i=t+"__bubble";n.has(i)||(vg(e,t,2,!1),n.add(i))}function ou(t,e,n){var i=0;e&&(i|=4),vg(n,t,i,e)}var qo="_reactListening"+Math.random().toString(36).slice(2);function go(t){if(!t[qo]){t[qo]=!0,Tm.forEach(function(n){n!=="selectionchange"&&(tx.has(n)||ou(n,!1,t),ou(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[qo]||(e[qo]=!0,ou("selectionchange",!1,e))}}function vg(t,e,n,i){switch(tg(e)){case 1:var r=m0;break;case 4:r=g0;break;default:r=gd}n=r.bind(null,e,n,t),r=void 0,!fc||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function au(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=hr(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}Hm(function(){var u=s,f=fd(n),d=[];e:{var h=gg.get(t);if(h!==void 0){var p=vd,v=t;switch(t){case"keypress":if(Pa(n)===0)break e;case"keydown":case"keyup":p=P0;break;case"focusin":v="focus",p=eu;break;case"focusout":v="blur",p=eu;break;case"beforeblur":case"afterblur":p=eu;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=If;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=x0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=U0;break;case fg:case hg:case pg:p=M0;break;case mg:p=F0;break;case"scroll":p=_0;break;case"wheel":p=k0;break;case"copy":case"cut":case"paste":p=w0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=Of}var x=(e&4)!==0,m=!x&&t==="scroll",c=x?h!==null?h+"Capture":null:h;x=[];for(var _=u,g;_!==null;){g=_;var S=g.stateNode;if(g.tag===5&&S!==null&&(g=S,c!==null&&(S=uo(_,c),S!=null&&x.push(_o(_,S,g)))),m)break;_=_.return}0<x.length&&(h=new p(h,v,null,n,f),d.push({event:h,listeners:x}))}}if(!(e&7)){e:{if(h=t==="mouseover"||t==="pointerover",p=t==="mouseout"||t==="pointerout",h&&n!==cc&&(v=n.relatedTarget||n.fromElement)&&(hr(v)||v[gi]))break e;if((p||h)&&(h=f.window===f?f:(h=f.ownerDocument)?h.defaultView||h.parentWindow:window,p?(v=n.relatedTarget||n.toElement,p=u,v=v?hr(v):null,v!==null&&(m=br(v),v!==m||v.tag!==5&&v.tag!==6)&&(v=null)):(p=null,v=u),p!==v)){if(x=If,S="onMouseLeave",c="onMouseEnter",_="mouse",(t==="pointerout"||t==="pointerover")&&(x=Of,S="onPointerLeave",c="onPointerEnter",_="pointer"),m=p==null?h:Qr(p),g=v==null?h:Qr(v),h=new x(S,_+"leave",p,n,f),h.target=m,h.relatedTarget=g,S=null,hr(f)===u&&(x=new x(c,_+"enter",v,n,f),x.target=g,x.relatedTarget=m,S=x),m=S,p&&v)t:{for(x=p,c=v,_=0,g=x;g;g=Lr(g))_++;for(g=0,S=c;S;S=Lr(S))g++;for(;0<_-g;)x=Lr(x),_--;for(;0<g-_;)c=Lr(c),g--;for(;_--;){if(x===c||c!==null&&x===c.alternate)break t;x=Lr(x),c=Lr(c)}x=null}else x=null;p!==null&&qf(d,h,p,x,!1),v!==null&&m!==null&&qf(d,m,v,x,!0)}}e:{if(h=u?Qr(u):window,p=h.nodeName&&h.nodeName.toLowerCase(),p==="select"||p==="input"&&h.type==="file")var R=j0;else if(zf(h))if(ag)R=Y0;else{R=$0;var C=X0}else(p=h.nodeName)&&p.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(R=q0);if(R&&(R=R(t,u))){og(d,R,n,f);break e}C&&C(t,h,u),t==="focusout"&&(C=h._wrapperState)&&C.controlled&&h.type==="number"&&sc(h,"number",h.value)}switch(C=u?Qr(u):window,t){case"focusin":(zf(C)||C.contentEditable==="true")&&(Kr=C,_c=u,to=null);break;case"focusout":to=_c=Kr=null;break;case"mousedown":vc=!0;break;case"contextmenu":case"mouseup":case"dragend":vc=!1,jf(d,n,f);break;case"selectionchange":if(Q0)break;case"keydown":case"keyup":jf(d,n,f)}var A;if(yd)e:{switch(t){case"compositionstart":var U="onCompositionStart";break e;case"compositionend":U="onCompositionEnd";break e;case"compositionupdate":U="onCompositionUpdate";break e}U=void 0}else Yr?rg(t,n)&&(U="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(U="onCompositionStart");U&&(ig&&n.locale!=="ko"&&(Yr||U!=="onCompositionStart"?U==="onCompositionEnd"&&Yr&&(A=ng()):(Pi=f,_d="value"in Pi?Pi.value:Pi.textContent,Yr=!0)),C=Ya(u,U),0<C.length&&(U=new Ff(U,t,null,n,f),d.push({event:U,listeners:C}),A?U.data=A:(A=sg(n),A!==null&&(U.data=A)))),(A=z0?H0(t,n):G0(t,n))&&(u=Ya(u,"onBeforeInput"),0<u.length&&(f=new Ff("onBeforeInput","beforeinput",null,n,f),d.push({event:f,listeners:u}),f.data=A))}_g(d,e)})}function _o(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Ya(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=uo(t,n),s!=null&&i.unshift(_o(t,s,r)),s=uo(t,e),s!=null&&i.push(_o(t,s,r))),t=t.return}return i}function Lr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function qf(t,e,n,i,r){for(var s=e._reactName,o=[];n!==null&&n!==i;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&u!==null&&(a=u,r?(l=uo(n,s),l!=null&&o.unshift(_o(n,l,a))):r||(l=uo(n,s),l!=null&&o.push(_o(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var nx=/\r\n?/g,ix=/\u0000|\uFFFD/g;function Yf(t){return(typeof t=="string"?t:""+t).replace(nx,`
`).replace(ix,"")}function Yo(t,e,n){if(e=Yf(e),Yf(t)!==e&&n)throw Error(ie(425))}function Ka(){}var xc=null,yc=null;function Sc(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Mc=typeof setTimeout=="function"?setTimeout:void 0,rx=typeof clearTimeout=="function"?clearTimeout:void 0,Kf=typeof Promise=="function"?Promise:void 0,sx=typeof queueMicrotask=="function"?queueMicrotask:typeof Kf<"u"?function(t){return Kf.resolve(null).then(t).catch(ox)}:Mc;function ox(t){setTimeout(function(){throw t})}function lu(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),ho(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);ho(e)}function Bi(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Zf(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Ls=Math.random().toString(36).slice(2),Zn="__reactFiber$"+Ls,vo="__reactProps$"+Ls,gi="__reactContainer$"+Ls,Ec="__reactEvents$"+Ls,ax="__reactListeners$"+Ls,lx="__reactHandles$"+Ls;function hr(t){var e=t[Zn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[gi]||n[Zn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Zf(t);t!==null;){if(n=t[Zn])return n;t=Zf(t)}return e}t=n,n=t.parentNode}return null}function Po(t){return t=t[Zn]||t[gi],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Qr(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(ie(33))}function wl(t){return t[vo]||null}var wc=[],Jr=-1;function Zi(t){return{current:t}}function st(t){0>Jr||(t.current=wc[Jr],wc[Jr]=null,Jr--)}function nt(t,e){Jr++,wc[Jr]=t.current,t.current=e}var qi={},Vt=Zi(qi),nn=Zi(!1),Sr=qi;function gs(t,e){var n=t.type.contextTypes;if(!n)return qi;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function rn(t){return t=t.childContextTypes,t!=null}function Za(){st(nn),st(Vt)}function Qf(t,e,n){if(Vt.current!==qi)throw Error(ie(168));nt(Vt,e),nt(nn,n)}function xg(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(ie(108,Xv(t)||"Unknown",r));return ct({},n,i)}function Qa(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||qi,Sr=Vt.current,nt(Vt,t),nt(nn,nn.current),!0}function Jf(t,e,n){var i=t.stateNode;if(!i)throw Error(ie(169));n?(t=xg(t,e,Sr),i.__reactInternalMemoizedMergedChildContext=t,st(nn),st(Vt),nt(Vt,t)):st(nn),nt(nn,n)}var ui=null,Tl=!1,uu=!1;function yg(t){ui===null?ui=[t]:ui.push(t)}function ux(t){Tl=!0,yg(t)}function Qi(){if(!uu&&ui!==null){uu=!0;var t=0,e=Ke;try{var n=ui;for(Ke=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}ui=null,Tl=!1}catch(r){throw ui!==null&&(ui=ui.slice(t+1)),jm(hd,Qi),r}finally{Ke=e,uu=!1}}return null}var es=[],ts=0,Ja=null,el=0,Mn=[],En=0,Mr=null,di=1,fi="";function ar(t,e){es[ts++]=el,es[ts++]=Ja,Ja=t,el=e}function Sg(t,e,n){Mn[En++]=di,Mn[En++]=fi,Mn[En++]=Mr,Mr=t;var i=di;t=fi;var r=32-Gn(i)-1;i&=~(1<<r),n+=1;var s=32-Gn(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,di=1<<32-Gn(e)+r|n<<r|i,fi=s+t}else di=1<<s|n<<r|i,fi=t}function Md(t){t.return!==null&&(ar(t,1),Sg(t,1,0))}function Ed(t){for(;t===Ja;)Ja=es[--ts],es[ts]=null,el=es[--ts],es[ts]=null;for(;t===Mr;)Mr=Mn[--En],Mn[En]=null,fi=Mn[--En],Mn[En]=null,di=Mn[--En],Mn[En]=null}var gn=null,mn=null,ot=!1,kn=null;function Mg(t,e){var n=An(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function eh(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,gn=t,mn=Bi(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,gn=t,mn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Mr!==null?{id:di,overflow:fi}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=An(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,gn=t,mn=null,!0):!1;default:return!1}}function Tc(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Ac(t){if(ot){var e=mn;if(e){var n=e;if(!eh(t,e)){if(Tc(t))throw Error(ie(418));e=Bi(n.nextSibling);var i=gn;e&&eh(t,e)?Mg(i,n):(t.flags=t.flags&-4097|2,ot=!1,gn=t)}}else{if(Tc(t))throw Error(ie(418));t.flags=t.flags&-4097|2,ot=!1,gn=t}}}function th(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;gn=t}function Ko(t){if(t!==gn)return!1;if(!ot)return th(t),ot=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Sc(t.type,t.memoizedProps)),e&&(e=mn)){if(Tc(t))throw Eg(),Error(ie(418));for(;e;)Mg(t,e),e=Bi(e.nextSibling)}if(th(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(ie(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){mn=Bi(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}mn=null}}else mn=gn?Bi(t.stateNode.nextSibling):null;return!0}function Eg(){for(var t=mn;t;)t=Bi(t.nextSibling)}function _s(){mn=gn=null,ot=!1}function wd(t){kn===null?kn=[t]:kn.push(t)}var cx=yi.ReactCurrentBatchConfig;function Bs(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(ie(309));var i=n.stateNode}if(!i)throw Error(ie(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(ie(284));if(!n._owner)throw Error(ie(290,t))}return t}function Zo(t,e){throw t=Object.prototype.toString.call(e),Error(ie(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function nh(t){var e=t._init;return e(t._payload)}function wg(t){function e(c,_){if(t){var g=c.deletions;g===null?(c.deletions=[_],c.flags|=16):g.push(_)}}function n(c,_){if(!t)return null;for(;_!==null;)e(c,_),_=_.sibling;return null}function i(c,_){for(c=new Map;_!==null;)_.key!==null?c.set(_.key,_):c.set(_.index,_),_=_.sibling;return c}function r(c,_){return c=Vi(c,_),c.index=0,c.sibling=null,c}function s(c,_,g){return c.index=g,t?(g=c.alternate,g!==null?(g=g.index,g<_?(c.flags|=2,_):g):(c.flags|=2,_)):(c.flags|=1048576,_)}function o(c){return t&&c.alternate===null&&(c.flags|=2),c}function a(c,_,g,S){return _===null||_.tag!==6?(_=gu(g,c.mode,S),_.return=c,_):(_=r(_,g),_.return=c,_)}function l(c,_,g,S){var R=g.type;return R===qr?f(c,_,g.props.children,S,g.key):_!==null&&(_.elementType===R||typeof R=="object"&&R!==null&&R.$$typeof===Ci&&nh(R)===_.type)?(S=r(_,g.props),S.ref=Bs(c,_,g),S.return=c,S):(S=ka(g.type,g.key,g.props,null,c.mode,S),S.ref=Bs(c,_,g),S.return=c,S)}function u(c,_,g,S){return _===null||_.tag!==4||_.stateNode.containerInfo!==g.containerInfo||_.stateNode.implementation!==g.implementation?(_=_u(g,c.mode,S),_.return=c,_):(_=r(_,g.children||[]),_.return=c,_)}function f(c,_,g,S,R){return _===null||_.tag!==7?(_=_r(g,c.mode,S,R),_.return=c,_):(_=r(_,g),_.return=c,_)}function d(c,_,g){if(typeof _=="string"&&_!==""||typeof _=="number")return _=gu(""+_,c.mode,g),_.return=c,_;if(typeof _=="object"&&_!==null){switch(_.$$typeof){case zo:return g=ka(_.type,_.key,_.props,null,c.mode,g),g.ref=Bs(c,null,_),g.return=c,g;case $r:return _=_u(_,c.mode,g),_.return=c,_;case Ci:var S=_._init;return d(c,S(_._payload),g)}if(qs(_)||Us(_))return _=_r(_,c.mode,g,null),_.return=c,_;Zo(c,_)}return null}function h(c,_,g,S){var R=_!==null?_.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return R!==null?null:a(c,_,""+g,S);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case zo:return g.key===R?l(c,_,g,S):null;case $r:return g.key===R?u(c,_,g,S):null;case Ci:return R=g._init,h(c,_,R(g._payload),S)}if(qs(g)||Us(g))return R!==null?null:f(c,_,g,S,null);Zo(c,g)}return null}function p(c,_,g,S,R){if(typeof S=="string"&&S!==""||typeof S=="number")return c=c.get(g)||null,a(_,c,""+S,R);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case zo:return c=c.get(S.key===null?g:S.key)||null,l(_,c,S,R);case $r:return c=c.get(S.key===null?g:S.key)||null,u(_,c,S,R);case Ci:var C=S._init;return p(c,_,g,C(S._payload),R)}if(qs(S)||Us(S))return c=c.get(g)||null,f(_,c,S,R,null);Zo(_,S)}return null}function v(c,_,g,S){for(var R=null,C=null,A=_,U=_=0,M=null;A!==null&&U<g.length;U++){A.index>U?(M=A,A=null):M=A.sibling;var T=h(c,A,g[U],S);if(T===null){A===null&&(A=M);break}t&&A&&T.alternate===null&&e(c,A),_=s(T,_,U),C===null?R=T:C.sibling=T,C=T,A=M}if(U===g.length)return n(c,A),ot&&ar(c,U),R;if(A===null){for(;U<g.length;U++)A=d(c,g[U],S),A!==null&&(_=s(A,_,U),C===null?R=A:C.sibling=A,C=A);return ot&&ar(c,U),R}for(A=i(c,A);U<g.length;U++)M=p(A,c,U,g[U],S),M!==null&&(t&&M.alternate!==null&&A.delete(M.key===null?U:M.key),_=s(M,_,U),C===null?R=M:C.sibling=M,C=M);return t&&A.forEach(function(B){return e(c,B)}),ot&&ar(c,U),R}function x(c,_,g,S){var R=Us(g);if(typeof R!="function")throw Error(ie(150));if(g=R.call(g),g==null)throw Error(ie(151));for(var C=R=null,A=_,U=_=0,M=null,T=g.next();A!==null&&!T.done;U++,T=g.next()){A.index>U?(M=A,A=null):M=A.sibling;var B=h(c,A,T.value,S);if(B===null){A===null&&(A=M);break}t&&A&&B.alternate===null&&e(c,A),_=s(B,_,U),C===null?R=B:C.sibling=B,C=B,A=M}if(T.done)return n(c,A),ot&&ar(c,U),R;if(A===null){for(;!T.done;U++,T=g.next())T=d(c,T.value,S),T!==null&&(_=s(T,_,U),C===null?R=T:C.sibling=T,C=T);return ot&&ar(c,U),R}for(A=i(c,A);!T.done;U++,T=g.next())T=p(A,c,U,T.value,S),T!==null&&(t&&T.alternate!==null&&A.delete(T.key===null?U:T.key),_=s(T,_,U),C===null?R=T:C.sibling=T,C=T);return t&&A.forEach(function(z){return e(c,z)}),ot&&ar(c,U),R}function m(c,_,g,S){if(typeof g=="object"&&g!==null&&g.type===qr&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case zo:e:{for(var R=g.key,C=_;C!==null;){if(C.key===R){if(R=g.type,R===qr){if(C.tag===7){n(c,C.sibling),_=r(C,g.props.children),_.return=c,c=_;break e}}else if(C.elementType===R||typeof R=="object"&&R!==null&&R.$$typeof===Ci&&nh(R)===C.type){n(c,C.sibling),_=r(C,g.props),_.ref=Bs(c,C,g),_.return=c,c=_;break e}n(c,C);break}else e(c,C);C=C.sibling}g.type===qr?(_=_r(g.props.children,c.mode,S,g.key),_.return=c,c=_):(S=ka(g.type,g.key,g.props,null,c.mode,S),S.ref=Bs(c,_,g),S.return=c,c=S)}return o(c);case $r:e:{for(C=g.key;_!==null;){if(_.key===C)if(_.tag===4&&_.stateNode.containerInfo===g.containerInfo&&_.stateNode.implementation===g.implementation){n(c,_.sibling),_=r(_,g.children||[]),_.return=c,c=_;break e}else{n(c,_);break}else e(c,_);_=_.sibling}_=_u(g,c.mode,S),_.return=c,c=_}return o(c);case Ci:return C=g._init,m(c,_,C(g._payload),S)}if(qs(g))return v(c,_,g,S);if(Us(g))return x(c,_,g,S);Zo(c,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,_!==null&&_.tag===6?(n(c,_.sibling),_=r(_,g),_.return=c,c=_):(n(c,_),_=gu(g,c.mode,S),_.return=c,c=_),o(c)):n(c,_)}return m}var vs=wg(!0),Tg=wg(!1),tl=Zi(null),nl=null,ns=null,Td=null;function Ad(){Td=ns=nl=null}function Cd(t){var e=tl.current;st(tl),t._currentValue=e}function Cc(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function ds(t,e){nl=t,Td=ns=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(tn=!0),t.firstContext=null)}function Ln(t){var e=t._currentValue;if(Td!==t)if(t={context:t,memoizedValue:e,next:null},ns===null){if(nl===null)throw Error(ie(308));ns=t,nl.dependencies={lanes:0,firstContext:t}}else ns=ns.next=t;return e}var pr=null;function Rd(t){pr===null?pr=[t]:pr.push(t)}function Ag(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,Rd(e)):(n.next=r.next,r.next=n),e.interleaved=n,_i(t,i)}function _i(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Ri=!1;function bd(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Cg(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function pi(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function zi(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,$e&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,_i(t,n)}return r=i.interleaved,r===null?(e.next=e,Rd(i)):(e.next=r.next,r.next=e),i.interleaved=e,_i(t,n)}function Da(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,pd(t,n)}}function ih(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function il(t,e,n,i){var r=t.updateQueue;Ri=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var f=t.alternate;f!==null&&(f=f.updateQueue,a=f.lastBaseUpdate,a!==o&&(a===null?f.firstBaseUpdate=u:a.next=u,f.lastBaseUpdate=l))}if(s!==null){var d=r.baseState;o=0,f=u=l=null,a=s;do{var h=a.lane,p=a.eventTime;if((i&h)===h){f!==null&&(f=f.next={eventTime:p,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var v=t,x=a;switch(h=e,p=n,x.tag){case 1:if(v=x.payload,typeof v=="function"){d=v.call(p,d,h);break e}d=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=x.payload,h=typeof v=="function"?v.call(p,d,h):v,h==null)break e;d=ct({},d,h);break e;case 2:Ri=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,h=r.effects,h===null?r.effects=[a]:h.push(a))}else p={eventTime:p,lane:h,tag:a.tag,payload:a.payload,callback:a.callback,next:null},f===null?(u=f=p,l=d):f=f.next=p,o|=h;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;h=a,a=h.next,h.next=null,r.lastBaseUpdate=h,r.shared.pending=null}}while(!0);if(f===null&&(l=d),r.baseState=l,r.firstBaseUpdate=u,r.lastBaseUpdate=f,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);wr|=o,t.lanes=o,t.memoizedState=d}}function rh(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(ie(191,r));r.call(i)}}}var Do={},Jn=Zi(Do),xo=Zi(Do),yo=Zi(Do);function mr(t){if(t===Do)throw Error(ie(174));return t}function Ld(t,e){switch(nt(yo,e),nt(xo,t),nt(Jn,Do),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:ac(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=ac(e,t)}st(Jn),nt(Jn,e)}function xs(){st(Jn),st(xo),st(yo)}function Rg(t){mr(yo.current);var e=mr(Jn.current),n=ac(e,t.type);e!==n&&(nt(xo,t),nt(Jn,n))}function Pd(t){xo.current===t&&(st(Jn),st(xo))}var lt=Zi(0);function rl(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var cu=[];function Dd(){for(var t=0;t<cu.length;t++)cu[t]._workInProgressVersionPrimary=null;cu.length=0}var Na=yi.ReactCurrentDispatcher,du=yi.ReactCurrentBatchConfig,Er=0,ut=null,yt=null,bt=null,sl=!1,no=!1,So=0,dx=0;function kt(){throw Error(ie(321))}function Nd(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!jn(t[n],e[n]))return!1;return!0}function Ud(t,e,n,i,r,s){if(Er=s,ut=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Na.current=t===null||t.memoizedState===null?mx:gx,t=n(i,r),no){s=0;do{if(no=!1,So=0,25<=s)throw Error(ie(301));s+=1,bt=yt=null,e.updateQueue=null,Na.current=_x,t=n(i,r)}while(no)}if(Na.current=ol,e=yt!==null&&yt.next!==null,Er=0,bt=yt=ut=null,sl=!1,e)throw Error(ie(300));return t}function Id(){var t=So!==0;return So=0,t}function Yn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return bt===null?ut.memoizedState=bt=t:bt=bt.next=t,bt}function Pn(){if(yt===null){var t=ut.alternate;t=t!==null?t.memoizedState:null}else t=yt.next;var e=bt===null?ut.memoizedState:bt.next;if(e!==null)bt=e,yt=t;else{if(t===null)throw Error(ie(310));yt=t,t={memoizedState:yt.memoizedState,baseState:yt.baseState,baseQueue:yt.baseQueue,queue:yt.queue,next:null},bt===null?ut.memoizedState=bt=t:bt=bt.next=t}return bt}function Mo(t,e){return typeof e=="function"?e(t):e}function fu(t){var e=Pn(),n=e.queue;if(n===null)throw Error(ie(311));n.lastRenderedReducer=t;var i=yt,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,u=s;do{var f=u.lane;if((Er&f)===f)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),i=u.hasEagerState?u.eagerState:t(i,u.action);else{var d={lane:f,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=d,o=i):l=l.next=d,ut.lanes|=f,wr|=f}u=u.next}while(u!==null&&u!==s);l===null?o=i:l.next=a,jn(i,e.memoizedState)||(tn=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,ut.lanes|=s,wr|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function hu(t){var e=Pn(),n=e.queue;if(n===null)throw Error(ie(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var o=r=r.next;do s=t(s,o.action),o=o.next;while(o!==r);jn(s,e.memoizedState)||(tn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function bg(){}function Lg(t,e){var n=ut,i=Pn(),r=e(),s=!jn(i.memoizedState,r);if(s&&(i.memoizedState=r,tn=!0),i=i.queue,Fd(Ng.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||bt!==null&&bt.memoizedState.tag&1){if(n.flags|=2048,Eo(9,Dg.bind(null,n,i,r,e),void 0,null),Pt===null)throw Error(ie(349));Er&30||Pg(n,e,r)}return r}function Pg(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=ut.updateQueue,e===null?(e={lastEffect:null,stores:null},ut.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Dg(t,e,n,i){e.value=n,e.getSnapshot=i,Ug(e)&&Ig(t)}function Ng(t,e,n){return n(function(){Ug(e)&&Ig(t)})}function Ug(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!jn(t,n)}catch{return!0}}function Ig(t){var e=_i(t,1);e!==null&&Vn(e,t,1,-1)}function sh(t){var e=Yn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Mo,lastRenderedState:t},e.queue=t,t=t.dispatch=px.bind(null,ut,t),[e.memoizedState,t]}function Eo(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=ut.updateQueue,e===null?(e={lastEffect:null,stores:null},ut.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function Fg(){return Pn().memoizedState}function Ua(t,e,n,i){var r=Yn();ut.flags|=t,r.memoizedState=Eo(1|e,n,void 0,i===void 0?null:i)}function Al(t,e,n,i){var r=Pn();i=i===void 0?null:i;var s=void 0;if(yt!==null){var o=yt.memoizedState;if(s=o.destroy,i!==null&&Nd(i,o.deps)){r.memoizedState=Eo(e,n,s,i);return}}ut.flags|=t,r.memoizedState=Eo(1|e,n,s,i)}function oh(t,e){return Ua(8390656,8,t,e)}function Fd(t,e){return Al(2048,8,t,e)}function Og(t,e){return Al(4,2,t,e)}function kg(t,e){return Al(4,4,t,e)}function Bg(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function zg(t,e,n){return n=n!=null?n.concat([t]):null,Al(4,4,Bg.bind(null,e,t),n)}function Od(){}function Hg(t,e){var n=Pn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Nd(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function Gg(t,e){var n=Pn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Nd(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function Vg(t,e,n){return Er&21?(jn(n,e)||(n=qm(),ut.lanes|=n,wr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,tn=!0),t.memoizedState=n)}function fx(t,e){var n=Ke;Ke=n!==0&&4>n?n:4,t(!0);var i=du.transition;du.transition={};try{t(!1),e()}finally{Ke=n,du.transition=i}}function Wg(){return Pn().memoizedState}function hx(t,e,n){var i=Gi(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},jg(t))Xg(e,n);else if(n=Ag(t,e,n,i),n!==null){var r=Kt();Vn(n,t,i,r),$g(n,e,i)}}function px(t,e,n){var i=Gi(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(jg(t))Xg(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(r.hasEagerState=!0,r.eagerState=a,jn(a,o)){var l=e.interleaved;l===null?(r.next=r,Rd(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=Ag(t,e,r,i),n!==null&&(r=Kt(),Vn(n,t,i,r),$g(n,e,i))}}function jg(t){var e=t.alternate;return t===ut||e!==null&&e===ut}function Xg(t,e){no=sl=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function $g(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,pd(t,n)}}var ol={readContext:Ln,useCallback:kt,useContext:kt,useEffect:kt,useImperativeHandle:kt,useInsertionEffect:kt,useLayoutEffect:kt,useMemo:kt,useReducer:kt,useRef:kt,useState:kt,useDebugValue:kt,useDeferredValue:kt,useTransition:kt,useMutableSource:kt,useSyncExternalStore:kt,useId:kt,unstable_isNewReconciler:!1},mx={readContext:Ln,useCallback:function(t,e){return Yn().memoizedState=[t,e===void 0?null:e],t},useContext:Ln,useEffect:oh,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Ua(4194308,4,Bg.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Ua(4194308,4,t,e)},useInsertionEffect:function(t,e){return Ua(4,2,t,e)},useMemo:function(t,e){var n=Yn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=Yn();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=hx.bind(null,ut,t),[i.memoizedState,t]},useRef:function(t){var e=Yn();return t={current:t},e.memoizedState=t},useState:sh,useDebugValue:Od,useDeferredValue:function(t){return Yn().memoizedState=t},useTransition:function(){var t=sh(!1),e=t[0];return t=fx.bind(null,t[1]),Yn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=ut,r=Yn();if(ot){if(n===void 0)throw Error(ie(407));n=n()}else{if(n=e(),Pt===null)throw Error(ie(349));Er&30||Pg(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,oh(Ng.bind(null,i,s,t),[t]),i.flags|=2048,Eo(9,Dg.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=Yn(),e=Pt.identifierPrefix;if(ot){var n=fi,i=di;n=(i&~(1<<32-Gn(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=So++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=dx++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},gx={readContext:Ln,useCallback:Hg,useContext:Ln,useEffect:Fd,useImperativeHandle:zg,useInsertionEffect:Og,useLayoutEffect:kg,useMemo:Gg,useReducer:fu,useRef:Fg,useState:function(){return fu(Mo)},useDebugValue:Od,useDeferredValue:function(t){var e=Pn();return Vg(e,yt.memoizedState,t)},useTransition:function(){var t=fu(Mo)[0],e=Pn().memoizedState;return[t,e]},useMutableSource:bg,useSyncExternalStore:Lg,useId:Wg,unstable_isNewReconciler:!1},_x={readContext:Ln,useCallback:Hg,useContext:Ln,useEffect:Fd,useImperativeHandle:zg,useInsertionEffect:Og,useLayoutEffect:kg,useMemo:Gg,useReducer:hu,useRef:Fg,useState:function(){return hu(Mo)},useDebugValue:Od,useDeferredValue:function(t){var e=Pn();return yt===null?e.memoizedState=t:Vg(e,yt.memoizedState,t)},useTransition:function(){var t=hu(Mo)[0],e=Pn().memoizedState;return[t,e]},useMutableSource:bg,useSyncExternalStore:Lg,useId:Wg,unstable_isNewReconciler:!1};function Fn(t,e){if(t&&t.defaultProps){e=ct({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Rc(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:ct({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Cl={isMounted:function(t){return(t=t._reactInternals)?br(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=Kt(),r=Gi(t),s=pi(i,r);s.payload=e,n!=null&&(s.callback=n),e=zi(t,s,r),e!==null&&(Vn(e,t,r,i),Da(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=Kt(),r=Gi(t),s=pi(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=zi(t,s,r),e!==null&&(Vn(e,t,r,i),Da(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Kt(),i=Gi(t),r=pi(n,i);r.tag=2,e!=null&&(r.callback=e),e=zi(t,r,i),e!==null&&(Vn(e,t,i,n),Da(e,t,i))}};function ah(t,e,n,i,r,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!mo(n,i)||!mo(r,s):!0}function qg(t,e,n){var i=!1,r=qi,s=e.contextType;return typeof s=="object"&&s!==null?s=Ln(s):(r=rn(e)?Sr:Vt.current,i=e.contextTypes,s=(i=i!=null)?gs(t,r):qi),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Cl,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function lh(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&Cl.enqueueReplaceState(e,e.state,null)}function bc(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},bd(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=Ln(s):(s=rn(e)?Sr:Vt.current,r.context=gs(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Rc(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&Cl.enqueueReplaceState(r,r.state,null),il(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function ys(t,e){try{var n="",i=e;do n+=jv(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function pu(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Lc(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var vx=typeof WeakMap=="function"?WeakMap:Map;function Yg(t,e,n){n=pi(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){ll||(ll=!0,zc=i),Lc(t,e)},n}function Kg(t,e,n){n=pi(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){Lc(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Lc(t,e),typeof i!="function"&&(Hi===null?Hi=new Set([this]):Hi.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function uh(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new vx;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=Dx.bind(null,t,e,n),e.then(t,t))}function ch(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function dh(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=pi(-1,1),e.tag=2,zi(n,e,1))),n.lanes|=1),t)}var xx=yi.ReactCurrentOwner,tn=!1;function $t(t,e,n,i){e.child=t===null?Tg(e,null,n,i):vs(e,t.child,n,i)}function fh(t,e,n,i,r){n=n.render;var s=e.ref;return ds(e,r),i=Ud(t,e,n,i,s,r),n=Id(),t!==null&&!tn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,vi(t,e,r)):(ot&&n&&Md(e),e.flags|=1,$t(t,e,i,r),e.child)}function hh(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!jd(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,Zg(t,e,s,i,r)):(t=ka(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:mo,n(o,i)&&t.ref===e.ref)return vi(t,e,r)}return e.flags|=1,t=Vi(s,i),t.ref=e.ref,t.return=e,e.child=t}function Zg(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(mo(s,i)&&t.ref===e.ref)if(tn=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(tn=!0);else return e.lanes=t.lanes,vi(t,e,r)}return Pc(t,e,n,i,r)}function Qg(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},nt(rs,hn),hn|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,nt(rs,hn),hn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,nt(rs,hn),hn|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,nt(rs,hn),hn|=i;return $t(t,e,r,n),e.child}function Jg(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Pc(t,e,n,i,r){var s=rn(n)?Sr:Vt.current;return s=gs(e,s),ds(e,r),n=Ud(t,e,n,i,s,r),i=Id(),t!==null&&!tn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,vi(t,e,r)):(ot&&i&&Md(e),e.flags|=1,$t(t,e,n,r),e.child)}function ph(t,e,n,i,r){if(rn(n)){var s=!0;Qa(e)}else s=!1;if(ds(e,r),e.stateNode===null)Ia(t,e),qg(e,n,i),bc(e,n,i,r),i=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=Ln(u):(u=rn(n)?Sr:Vt.current,u=gs(e,u));var f=n.getDerivedStateFromProps,d=typeof f=="function"||typeof o.getSnapshotBeforeUpdate=="function";d||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==u)&&lh(e,o,i,u),Ri=!1;var h=e.memoizedState;o.state=h,il(e,i,o,r),l=e.memoizedState,a!==i||h!==l||nn.current||Ri?(typeof f=="function"&&(Rc(e,n,f,i),l=e.memoizedState),(a=Ri||ah(e,n,a,i,h,l,u))?(d||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=u,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,Cg(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:Fn(e.type,a),o.props=u,d=e.pendingProps,h=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=Ln(l):(l=rn(n)?Sr:Vt.current,l=gs(e,l));var p=n.getDerivedStateFromProps;(f=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==d||h!==l)&&lh(e,o,i,l),Ri=!1,h=e.memoizedState,o.state=h,il(e,i,o,r);var v=e.memoizedState;a!==d||h!==v||nn.current||Ri?(typeof p=="function"&&(Rc(e,n,p,i),v=e.memoizedState),(u=Ri||ah(e,n,u,i,h,v,l)||!1)?(f||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,v,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,v,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=v),o.props=i,o.state=v,o.context=l,i=u):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),i=!1)}return Dc(t,e,n,i,s,r)}function Dc(t,e,n,i,r,s){Jg(t,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&Jf(e,n,!1),vi(t,e,s);i=e.stateNode,xx.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&o?(e.child=vs(e,t.child,null,s),e.child=vs(e,null,a,s)):$t(t,e,a,s),e.memoizedState=i.state,r&&Jf(e,n,!0),e.child}function e_(t){var e=t.stateNode;e.pendingContext?Qf(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Qf(t,e.context,!1),Ld(t,e.containerInfo)}function mh(t,e,n,i,r){return _s(),wd(r),e.flags|=256,$t(t,e,n,i),e.child}var Nc={dehydrated:null,treeContext:null,retryLane:0};function Uc(t){return{baseLanes:t,cachePool:null,transitions:null}}function t_(t,e,n){var i=e.pendingProps,r=lt.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),nt(lt,r&1),t===null)return Ac(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,t=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Ll(o,i,0,null),t=_r(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Uc(n),e.memoizedState=Nc,t):kd(e,o));if(r=t.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return yx(t,e,o,i,a,r,n);if(s){s=i.fallback,o=e.mode,r=t.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=Vi(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=Vi(a,s):(s=_r(s,o,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=t.child.memoizedState,o=o===null?Uc(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Nc,i}return s=t.child,t=s.sibling,i=Vi(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function kd(t,e){return e=Ll({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Qo(t,e,n,i){return i!==null&&wd(i),vs(e,t.child,null,n),t=kd(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function yx(t,e,n,i,r,s,o){if(n)return e.flags&256?(e.flags&=-257,i=pu(Error(ie(422))),Qo(t,e,o,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=Ll({mode:"visible",children:i.children},r,0,null),s=_r(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&vs(e,t.child,null,o),e.child.memoizedState=Uc(o),e.memoizedState=Nc,s);if(!(e.mode&1))return Qo(t,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(ie(419)),i=pu(s,i,void 0),Qo(t,e,o,i)}if(a=(o&t.childLanes)!==0,tn||a){if(i=Pt,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,_i(t,r),Vn(i,t,r,-1))}return Wd(),i=pu(Error(ie(421))),Qo(t,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=Nx.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,mn=Bi(r.nextSibling),gn=e,ot=!0,kn=null,t!==null&&(Mn[En++]=di,Mn[En++]=fi,Mn[En++]=Mr,di=t.id,fi=t.overflow,Mr=e),e=kd(e,i.children),e.flags|=4096,e)}function gh(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),Cc(t.return,e,n)}function mu(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function n_(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if($t(t,e,i.children,n),i=lt.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&gh(t,n,e);else if(t.tag===19)gh(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(nt(lt,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&rl(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),mu(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&rl(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}mu(e,!0,n,null,s);break;case"together":mu(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Ia(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function vi(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),wr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(ie(153));if(e.child!==null){for(t=e.child,n=Vi(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Vi(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function Sx(t,e,n){switch(e.tag){case 3:e_(e),_s();break;case 5:Rg(e);break;case 1:rn(e.type)&&Qa(e);break;case 4:Ld(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;nt(tl,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(nt(lt,lt.current&1),e.flags|=128,null):n&e.child.childLanes?t_(t,e,n):(nt(lt,lt.current&1),t=vi(t,e,n),t!==null?t.sibling:null);nt(lt,lt.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return n_(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),nt(lt,lt.current),i)break;return null;case 22:case 23:return e.lanes=0,Qg(t,e,n)}return vi(t,e,n)}var i_,Ic,r_,s_;i_=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Ic=function(){};r_=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,mr(Jn.current);var s=null;switch(n){case"input":r=ic(t,r),i=ic(t,i),s=[];break;case"select":r=ct({},r,{value:void 0}),i=ct({},i,{value:void 0}),s=[];break;case"textarea":r=oc(t,r),i=oc(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=Ka)}lc(n,i);var o;n=null;for(u in r)if(!i.hasOwnProperty(u)&&r.hasOwnProperty(u)&&r[u]!=null)if(u==="style"){var a=r[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(ao.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in i){var l=i[u];if(a=r!=null?r[u]:void 0,i.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(ao.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&it("scroll",t),s||a===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};s_=function(t,e,n,i){n!==i&&(e.flags|=4)};function zs(t,e){if(!ot)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function Bt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function Mx(t,e,n){var i=e.pendingProps;switch(Ed(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Bt(e),null;case 1:return rn(e.type)&&Za(),Bt(e),null;case 3:return i=e.stateNode,xs(),st(nn),st(Vt),Dd(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(Ko(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,kn!==null&&(Vc(kn),kn=null))),Ic(t,e),Bt(e),null;case 5:Pd(e);var r=mr(yo.current);if(n=e.type,t!==null&&e.stateNode!=null)r_(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(ie(166));return Bt(e),null}if(t=mr(Jn.current),Ko(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[Zn]=e,i[vo]=s,t=(e.mode&1)!==0,n){case"dialog":it("cancel",i),it("close",i);break;case"iframe":case"object":case"embed":it("load",i);break;case"video":case"audio":for(r=0;r<Ks.length;r++)it(Ks[r],i);break;case"source":it("error",i);break;case"img":case"image":case"link":it("error",i),it("load",i);break;case"details":it("toggle",i);break;case"input":Tf(i,s),it("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},it("invalid",i);break;case"textarea":Cf(i,s),it("invalid",i)}lc(n,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&Yo(i.textContent,a,t),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Yo(i.textContent,a,t),r=["children",""+a]):ao.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&it("scroll",i)}switch(n){case"input":Ho(i),Af(i,s,!0);break;case"textarea":Ho(i),Rf(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=Ka)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Nm(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=o.createElement(n,{is:i.is}):(t=o.createElement(n),n==="select"&&(o=t,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):t=o.createElementNS(t,n),t[Zn]=e,t[vo]=i,i_(t,e,!1,!1),e.stateNode=t;e:{switch(o=uc(n,i),n){case"dialog":it("cancel",t),it("close",t),r=i;break;case"iframe":case"object":case"embed":it("load",t),r=i;break;case"video":case"audio":for(r=0;r<Ks.length;r++)it(Ks[r],t);r=i;break;case"source":it("error",t),r=i;break;case"img":case"image":case"link":it("error",t),it("load",t),r=i;break;case"details":it("toggle",t),r=i;break;case"input":Tf(t,i),r=ic(t,i),it("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=ct({},i,{value:void 0}),it("invalid",t);break;case"textarea":Cf(t,i),r=oc(t,i),it("invalid",t);break;default:r=i}lc(n,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?Fm(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Um(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&lo(t,l):typeof l=="number"&&lo(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(ao.hasOwnProperty(s)?l!=null&&s==="onScroll"&&it("scroll",t):l!=null&&ld(t,s,l,o))}switch(n){case"input":Ho(t),Af(t,i,!1);break;case"textarea":Ho(t),Rf(t);break;case"option":i.value!=null&&t.setAttribute("value",""+$i(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?as(t,!!i.multiple,s,!1):i.defaultValue!=null&&as(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=Ka)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Bt(e),null;case 6:if(t&&e.stateNode!=null)s_(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(ie(166));if(n=mr(yo.current),mr(Jn.current),Ko(e)){if(i=e.stateNode,n=e.memoizedProps,i[Zn]=e,(s=i.nodeValue!==n)&&(t=gn,t!==null))switch(t.tag){case 3:Yo(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Yo(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[Zn]=e,e.stateNode=i}return Bt(e),null;case 13:if(st(lt),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(ot&&mn!==null&&e.mode&1&&!(e.flags&128))Eg(),_s(),e.flags|=98560,s=!1;else if(s=Ko(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(ie(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(ie(317));s[Zn]=e}else _s(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Bt(e),s=!1}else kn!==null&&(Vc(kn),kn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||lt.current&1?St===0&&(St=3):Wd())),e.updateQueue!==null&&(e.flags|=4),Bt(e),null);case 4:return xs(),Ic(t,e),t===null&&go(e.stateNode.containerInfo),Bt(e),null;case 10:return Cd(e.type._context),Bt(e),null;case 17:return rn(e.type)&&Za(),Bt(e),null;case 19:if(st(lt),s=e.memoizedState,s===null)return Bt(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)zs(s,!1);else{if(St!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=rl(t),o!==null){for(e.flags|=128,zs(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return nt(lt,lt.current&1|2),e.child}t=t.sibling}s.tail!==null&&gt()>Ss&&(e.flags|=128,i=!0,zs(s,!1),e.lanes=4194304)}else{if(!i)if(t=rl(o),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),zs(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!ot)return Bt(e),null}else 2*gt()-s.renderingStartTime>Ss&&n!==1073741824&&(e.flags|=128,i=!0,zs(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=gt(),e.sibling=null,n=lt.current,nt(lt,i?n&1|2:n&1),e):(Bt(e),null);case 22:case 23:return Vd(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?hn&1073741824&&(Bt(e),e.subtreeFlags&6&&(e.flags|=8192)):Bt(e),null;case 24:return null;case 25:return null}throw Error(ie(156,e.tag))}function Ex(t,e){switch(Ed(e),e.tag){case 1:return rn(e.type)&&Za(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return xs(),st(nn),st(Vt),Dd(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Pd(e),null;case 13:if(st(lt),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(ie(340));_s()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return st(lt),null;case 4:return xs(),null;case 10:return Cd(e.type._context),null;case 22:case 23:return Vd(),null;case 24:return null;default:return null}}var Jo=!1,Gt=!1,wx=typeof WeakSet=="function"?WeakSet:Set,me=null;function is(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){ht(t,e,i)}else n.current=null}function Fc(t,e,n){try{n()}catch(i){ht(t,e,i)}}var _h=!1;function Tx(t,e){if(xc=$a,t=cg(),Sd(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,u=0,f=0,d=t,h=null;t:for(;;){for(var p;d!==n||r!==0&&d.nodeType!==3||(a=o+r),d!==s||i!==0&&d.nodeType!==3||(l=o+i),d.nodeType===3&&(o+=d.nodeValue.length),(p=d.firstChild)!==null;)h=d,d=p;for(;;){if(d===t)break t;if(h===n&&++u===r&&(a=o),h===s&&++f===i&&(l=o),(p=d.nextSibling)!==null)break;d=h,h=d.parentNode}d=p}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(yc={focusedElem:t,selectionRange:n},$a=!1,me=e;me!==null;)if(e=me,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,me=t;else for(;me!==null;){e=me;try{var v=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var x=v.memoizedProps,m=v.memoizedState,c=e.stateNode,_=c.getSnapshotBeforeUpdate(e.elementType===e.type?x:Fn(e.type,x),m);c.__reactInternalSnapshotBeforeUpdate=_}break;case 3:var g=e.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(ie(163))}}catch(S){ht(e,e.return,S)}if(t=e.sibling,t!==null){t.return=e.return,me=t;break}me=e.return}return v=_h,_h=!1,v}function io(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&Fc(e,n,s)}r=r.next}while(r!==i)}}function Rl(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function Oc(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function o_(t){var e=t.alternate;e!==null&&(t.alternate=null,o_(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Zn],delete e[vo],delete e[Ec],delete e[ax],delete e[lx])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function a_(t){return t.tag===5||t.tag===3||t.tag===4}function vh(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||a_(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function kc(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Ka));else if(i!==4&&(t=t.child,t!==null))for(kc(t,e,n),t=t.sibling;t!==null;)kc(t,e,n),t=t.sibling}function Bc(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(Bc(t,e,n),t=t.sibling;t!==null;)Bc(t,e,n),t=t.sibling}var Nt=null,On=!1;function Si(t,e,n){for(n=n.child;n!==null;)l_(t,e,n),n=n.sibling}function l_(t,e,n){if(Qn&&typeof Qn.onCommitFiberUnmount=="function")try{Qn.onCommitFiberUnmount(yl,n)}catch{}switch(n.tag){case 5:Gt||is(n,e);case 6:var i=Nt,r=On;Nt=null,Si(t,e,n),Nt=i,On=r,Nt!==null&&(On?(t=Nt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Nt.removeChild(n.stateNode));break;case 18:Nt!==null&&(On?(t=Nt,n=n.stateNode,t.nodeType===8?lu(t.parentNode,n):t.nodeType===1&&lu(t,n),ho(t)):lu(Nt,n.stateNode));break;case 4:i=Nt,r=On,Nt=n.stateNode.containerInfo,On=!0,Si(t,e,n),Nt=i,On=r;break;case 0:case 11:case 14:case 15:if(!Gt&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Fc(n,e,o),r=r.next}while(r!==i)}Si(t,e,n);break;case 1:if(!Gt&&(is(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(a){ht(n,e,a)}Si(t,e,n);break;case 21:Si(t,e,n);break;case 22:n.mode&1?(Gt=(i=Gt)||n.memoizedState!==null,Si(t,e,n),Gt=i):Si(t,e,n);break;default:Si(t,e,n)}}function xh(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new wx),e.forEach(function(i){var r=Ux.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function Dn(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Nt=a.stateNode,On=!1;break e;case 3:Nt=a.stateNode.containerInfo,On=!0;break e;case 4:Nt=a.stateNode.containerInfo,On=!0;break e}a=a.return}if(Nt===null)throw Error(ie(160));l_(s,o,r),Nt=null,On=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(u){ht(r,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)u_(e,t),e=e.sibling}function u_(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Dn(e,t),qn(t),i&4){try{io(3,t,t.return),Rl(3,t)}catch(x){ht(t,t.return,x)}try{io(5,t,t.return)}catch(x){ht(t,t.return,x)}}break;case 1:Dn(e,t),qn(t),i&512&&n!==null&&is(n,n.return);break;case 5:if(Dn(e,t),qn(t),i&512&&n!==null&&is(n,n.return),t.flags&32){var r=t.stateNode;try{lo(r,"")}catch(x){ht(t,t.return,x)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&Pm(r,s),uc(a,o);var u=uc(a,s);for(o=0;o<l.length;o+=2){var f=l[o],d=l[o+1];f==="style"?Fm(r,d):f==="dangerouslySetInnerHTML"?Um(r,d):f==="children"?lo(r,d):ld(r,f,d,u)}switch(a){case"input":rc(r,s);break;case"textarea":Dm(r,s);break;case"select":var h=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?as(r,!!s.multiple,p,!1):h!==!!s.multiple&&(s.defaultValue!=null?as(r,!!s.multiple,s.defaultValue,!0):as(r,!!s.multiple,s.multiple?[]:"",!1))}r[vo]=s}catch(x){ht(t,t.return,x)}}break;case 6:if(Dn(e,t),qn(t),i&4){if(t.stateNode===null)throw Error(ie(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(x){ht(t,t.return,x)}}break;case 3:if(Dn(e,t),qn(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{ho(e.containerInfo)}catch(x){ht(t,t.return,x)}break;case 4:Dn(e,t),qn(t);break;case 13:Dn(e,t),qn(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(Hd=gt())),i&4&&xh(t);break;case 22:if(f=n!==null&&n.memoizedState!==null,t.mode&1?(Gt=(u=Gt)||f,Dn(e,t),Gt=u):Dn(e,t),qn(t),i&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!f&&t.mode&1)for(me=t,f=t.child;f!==null;){for(d=me=f;me!==null;){switch(h=me,p=h.child,h.tag){case 0:case 11:case 14:case 15:io(4,h,h.return);break;case 1:is(h,h.return);var v=h.stateNode;if(typeof v.componentWillUnmount=="function"){i=h,n=h.return;try{e=i,v.props=e.memoizedProps,v.state=e.memoizedState,v.componentWillUnmount()}catch(x){ht(i,n,x)}}break;case 5:is(h,h.return);break;case 22:if(h.memoizedState!==null){Sh(d);continue}}p!==null?(p.return=h,me=p):Sh(d)}f=f.sibling}e:for(f=null,d=t;;){if(d.tag===5){if(f===null){f=d;try{r=d.stateNode,u?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=d.stateNode,l=d.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=Im("display",o))}catch(x){ht(t,t.return,x)}}}else if(d.tag===6){if(f===null)try{d.stateNode.nodeValue=u?"":d.memoizedProps}catch(x){ht(t,t.return,x)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===t)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===t)break e;for(;d.sibling===null;){if(d.return===null||d.return===t)break e;f===d&&(f=null),d=d.return}f===d&&(f=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:Dn(e,t),qn(t),i&4&&xh(t);break;case 21:break;default:Dn(e,t),qn(t)}}function qn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(a_(n)){var i=n;break e}n=n.return}throw Error(ie(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(lo(r,""),i.flags&=-33);var s=vh(t);Bc(t,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=vh(t);kc(t,a,o);break;default:throw Error(ie(161))}}catch(l){ht(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function Ax(t,e,n){me=t,c_(t)}function c_(t,e,n){for(var i=(t.mode&1)!==0;me!==null;){var r=me,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||Jo;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||Gt;a=Jo;var u=Gt;if(Jo=o,(Gt=l)&&!u)for(me=r;me!==null;)o=me,l=o.child,o.tag===22&&o.memoizedState!==null?Mh(r):l!==null?(l.return=o,me=l):Mh(r);for(;s!==null;)me=s,c_(s),s=s.sibling;me=r,Jo=a,Gt=u}yh(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,me=s):yh(t)}}function yh(t){for(;me!==null;){var e=me;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Gt||Rl(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!Gt)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:Fn(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&rh(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}rh(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var f=u.memoizedState;if(f!==null){var d=f.dehydrated;d!==null&&ho(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(ie(163))}Gt||e.flags&512&&Oc(e)}catch(h){ht(e,e.return,h)}}if(e===t){me=null;break}if(n=e.sibling,n!==null){n.return=e.return,me=n;break}me=e.return}}function Sh(t){for(;me!==null;){var e=me;if(e===t){me=null;break}var n=e.sibling;if(n!==null){n.return=e.return,me=n;break}me=e.return}}function Mh(t){for(;me!==null;){var e=me;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Rl(4,e)}catch(l){ht(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){ht(e,r,l)}}var s=e.return;try{Oc(e)}catch(l){ht(e,s,l)}break;case 5:var o=e.return;try{Oc(e)}catch(l){ht(e,o,l)}}}catch(l){ht(e,e.return,l)}if(e===t){me=null;break}var a=e.sibling;if(a!==null){a.return=e.return,me=a;break}me=e.return}}var Cx=Math.ceil,al=yi.ReactCurrentDispatcher,Bd=yi.ReactCurrentOwner,Rn=yi.ReactCurrentBatchConfig,$e=0,Pt=null,xt=null,It=0,hn=0,rs=Zi(0),St=0,wo=null,wr=0,bl=0,zd=0,ro=null,en=null,Hd=0,Ss=1/0,li=null,ll=!1,zc=null,Hi=null,ea=!1,Di=null,ul=0,so=0,Hc=null,Fa=-1,Oa=0;function Kt(){return $e&6?gt():Fa!==-1?Fa:Fa=gt()}function Gi(t){return t.mode&1?$e&2&&It!==0?It&-It:cx.transition!==null?(Oa===0&&(Oa=qm()),Oa):(t=Ke,t!==0||(t=window.event,t=t===void 0?16:tg(t.type)),t):1}function Vn(t,e,n,i){if(50<so)throw so=0,Hc=null,Error(ie(185));bo(t,n,i),(!($e&2)||t!==Pt)&&(t===Pt&&(!($e&2)&&(bl|=n),St===4&&Li(t,It)),sn(t,i),n===1&&$e===0&&!(e.mode&1)&&(Ss=gt()+500,Tl&&Qi()))}function sn(t,e){var n=t.callbackNode;c0(t,e);var i=Xa(t,t===Pt?It:0);if(i===0)n!==null&&Pf(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&Pf(n),e===1)t.tag===0?ux(Eh.bind(null,t)):yg(Eh.bind(null,t)),sx(function(){!($e&6)&&Qi()}),n=null;else{switch(Ym(i)){case 1:n=hd;break;case 4:n=Xm;break;case 16:n=ja;break;case 536870912:n=$m;break;default:n=ja}n=v_(n,d_.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function d_(t,e){if(Fa=-1,Oa=0,$e&6)throw Error(ie(327));var n=t.callbackNode;if(fs()&&t.callbackNode!==n)return null;var i=Xa(t,t===Pt?It:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=cl(t,i);else{e=i;var r=$e;$e|=2;var s=h_();(Pt!==t||It!==e)&&(li=null,Ss=gt()+500,gr(t,e));do try{Lx();break}catch(a){f_(t,a)}while(!0);Ad(),al.current=s,$e=r,xt!==null?e=0:(Pt=null,It=0,e=St)}if(e!==0){if(e===2&&(r=pc(t),r!==0&&(i=r,e=Gc(t,r))),e===1)throw n=wo,gr(t,0),Li(t,i),sn(t,gt()),n;if(e===6)Li(t,i);else{if(r=t.current.alternate,!(i&30)&&!Rx(r)&&(e=cl(t,i),e===2&&(s=pc(t),s!==0&&(i=s,e=Gc(t,s))),e===1))throw n=wo,gr(t,0),Li(t,i),sn(t,gt()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(ie(345));case 2:lr(t,en,li);break;case 3:if(Li(t,i),(i&130023424)===i&&(e=Hd+500-gt(),10<e)){if(Xa(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){Kt(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=Mc(lr.bind(null,t,en,li),e);break}lr(t,en,li);break;case 4:if(Li(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var o=31-Gn(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=gt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*Cx(i/1960))-i,10<i){t.timeoutHandle=Mc(lr.bind(null,t,en,li),i);break}lr(t,en,li);break;case 5:lr(t,en,li);break;default:throw Error(ie(329))}}}return sn(t,gt()),t.callbackNode===n?d_.bind(null,t):null}function Gc(t,e){var n=ro;return t.current.memoizedState.isDehydrated&&(gr(t,e).flags|=256),t=cl(t,e),t!==2&&(e=en,en=n,e!==null&&Vc(e)),t}function Vc(t){en===null?en=t:en.push.apply(en,t)}function Rx(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!jn(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Li(t,e){for(e&=~zd,e&=~bl,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Gn(e),i=1<<n;t[n]=-1,e&=~i}}function Eh(t){if($e&6)throw Error(ie(327));fs();var e=Xa(t,0);if(!(e&1))return sn(t,gt()),null;var n=cl(t,e);if(t.tag!==0&&n===2){var i=pc(t);i!==0&&(e=i,n=Gc(t,i))}if(n===1)throw n=wo,gr(t,0),Li(t,e),sn(t,gt()),n;if(n===6)throw Error(ie(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,lr(t,en,li),sn(t,gt()),null}function Gd(t,e){var n=$e;$e|=1;try{return t(e)}finally{$e=n,$e===0&&(Ss=gt()+500,Tl&&Qi())}}function Tr(t){Di!==null&&Di.tag===0&&!($e&6)&&fs();var e=$e;$e|=1;var n=Rn.transition,i=Ke;try{if(Rn.transition=null,Ke=1,t)return t()}finally{Ke=i,Rn.transition=n,$e=e,!($e&6)&&Qi()}}function Vd(){hn=rs.current,st(rs)}function gr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,rx(n)),xt!==null)for(n=xt.return;n!==null;){var i=n;switch(Ed(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&Za();break;case 3:xs(),st(nn),st(Vt),Dd();break;case 5:Pd(i);break;case 4:xs();break;case 13:st(lt);break;case 19:st(lt);break;case 10:Cd(i.type._context);break;case 22:case 23:Vd()}n=n.return}if(Pt=t,xt=t=Vi(t.current,null),It=hn=e,St=0,wo=null,zd=bl=wr=0,en=ro=null,pr!==null){for(e=0;e<pr.length;e++)if(n=pr[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}n.pending=i}pr=null}return t}function f_(t,e){do{var n=xt;try{if(Ad(),Na.current=ol,sl){for(var i=ut.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}sl=!1}if(Er=0,bt=yt=ut=null,no=!1,So=0,Bd.current=null,n===null||n.return===null){St=1,wo=e,xt=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=It,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,f=a,d=f.tag;if(!(f.mode&1)&&(d===0||d===11||d===15)){var h=f.alternate;h?(f.updateQueue=h.updateQueue,f.memoizedState=h.memoizedState,f.lanes=h.lanes):(f.updateQueue=null,f.memoizedState=null)}var p=ch(o);if(p!==null){p.flags&=-257,dh(p,o,a,s,e),p.mode&1&&uh(s,u,e),e=p,l=u;var v=e.updateQueue;if(v===null){var x=new Set;x.add(l),e.updateQueue=x}else v.add(l);break e}else{if(!(e&1)){uh(s,u,e),Wd();break e}l=Error(ie(426))}}else if(ot&&a.mode&1){var m=ch(o);if(m!==null){!(m.flags&65536)&&(m.flags|=256),dh(m,o,a,s,e),wd(ys(l,a));break e}}s=l=ys(l,a),St!==4&&(St=2),ro===null?ro=[s]:ro.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var c=Yg(s,l,e);ih(s,c);break e;case 1:a=l;var _=s.type,g=s.stateNode;if(!(s.flags&128)&&(typeof _.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(Hi===null||!Hi.has(g)))){s.flags|=65536,e&=-e,s.lanes|=e;var S=Kg(s,a,e);ih(s,S);break e}}s=s.return}while(s!==null)}m_(n)}catch(R){e=R,xt===n&&n!==null&&(xt=n=n.return);continue}break}while(!0)}function h_(){var t=al.current;return al.current=ol,t===null?ol:t}function Wd(){(St===0||St===3||St===2)&&(St=4),Pt===null||!(wr&268435455)&&!(bl&268435455)||Li(Pt,It)}function cl(t,e){var n=$e;$e|=2;var i=h_();(Pt!==t||It!==e)&&(li=null,gr(t,e));do try{bx();break}catch(r){f_(t,r)}while(!0);if(Ad(),$e=n,al.current=i,xt!==null)throw Error(ie(261));return Pt=null,It=0,St}function bx(){for(;xt!==null;)p_(xt)}function Lx(){for(;xt!==null&&!t0();)p_(xt)}function p_(t){var e=__(t.alternate,t,hn);t.memoizedProps=t.pendingProps,e===null?m_(t):xt=e,Bd.current=null}function m_(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=Ex(n,e),n!==null){n.flags&=32767,xt=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{St=6,xt=null;return}}else if(n=Mx(n,e,hn),n!==null){xt=n;return}if(e=e.sibling,e!==null){xt=e;return}xt=e=t}while(e!==null);St===0&&(St=5)}function lr(t,e,n){var i=Ke,r=Rn.transition;try{Rn.transition=null,Ke=1,Px(t,e,n,i)}finally{Rn.transition=r,Ke=i}return null}function Px(t,e,n,i){do fs();while(Di!==null);if($e&6)throw Error(ie(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(ie(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(d0(t,s),t===Pt&&(xt=Pt=null,It=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||ea||(ea=!0,v_(ja,function(){return fs(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Rn.transition,Rn.transition=null;var o=Ke;Ke=1;var a=$e;$e|=4,Bd.current=null,Tx(t,n),u_(n,t),Z0(yc),$a=!!xc,yc=xc=null,t.current=n,Ax(n),n0(),$e=a,Ke=o,Rn.transition=s}else t.current=n;if(ea&&(ea=!1,Di=t,ul=r),s=t.pendingLanes,s===0&&(Hi=null),s0(n.stateNode),sn(t,gt()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(ll)throw ll=!1,t=zc,zc=null,t;return ul&1&&t.tag!==0&&fs(),s=t.pendingLanes,s&1?t===Hc?so++:(so=0,Hc=t):so=0,Qi(),null}function fs(){if(Di!==null){var t=Ym(ul),e=Rn.transition,n=Ke;try{if(Rn.transition=null,Ke=16>t?16:t,Di===null)var i=!1;else{if(t=Di,Di=null,ul=0,$e&6)throw Error(ie(331));var r=$e;for($e|=4,me=t.current;me!==null;){var s=me,o=s.child;if(me.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(me=u;me!==null;){var f=me;switch(f.tag){case 0:case 11:case 15:io(8,f,s)}var d=f.child;if(d!==null)d.return=f,me=d;else for(;me!==null;){f=me;var h=f.sibling,p=f.return;if(o_(f),f===u){me=null;break}if(h!==null){h.return=p,me=h;break}me=p}}}var v=s.alternate;if(v!==null){var x=v.child;if(x!==null){v.child=null;do{var m=x.sibling;x.sibling=null,x=m}while(x!==null)}}me=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,me=o;else e:for(;me!==null;){if(s=me,s.flags&2048)switch(s.tag){case 0:case 11:case 15:io(9,s,s.return)}var c=s.sibling;if(c!==null){c.return=s.return,me=c;break e}me=s.return}}var _=t.current;for(me=_;me!==null;){o=me;var g=o.child;if(o.subtreeFlags&2064&&g!==null)g.return=o,me=g;else e:for(o=_;me!==null;){if(a=me,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Rl(9,a)}}catch(R){ht(a,a.return,R)}if(a===o){me=null;break e}var S=a.sibling;if(S!==null){S.return=a.return,me=S;break e}me=a.return}}if($e=r,Qi(),Qn&&typeof Qn.onPostCommitFiberRoot=="function")try{Qn.onPostCommitFiberRoot(yl,t)}catch{}i=!0}return i}finally{Ke=n,Rn.transition=e}}return!1}function wh(t,e,n){e=ys(n,e),e=Yg(t,e,1),t=zi(t,e,1),e=Kt(),t!==null&&(bo(t,1,e),sn(t,e))}function ht(t,e,n){if(t.tag===3)wh(t,t,n);else for(;e!==null;){if(e.tag===3){wh(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Hi===null||!Hi.has(i))){t=ys(n,t),t=Kg(e,t,1),e=zi(e,t,1),t=Kt(),e!==null&&(bo(e,1,t),sn(e,t));break}}e=e.return}}function Dx(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=Kt(),t.pingedLanes|=t.suspendedLanes&n,Pt===t&&(It&n)===n&&(St===4||St===3&&(It&130023424)===It&&500>gt()-Hd?gr(t,0):zd|=n),sn(t,e)}function g_(t,e){e===0&&(t.mode&1?(e=Wo,Wo<<=1,!(Wo&130023424)&&(Wo=4194304)):e=1);var n=Kt();t=_i(t,e),t!==null&&(bo(t,e,n),sn(t,n))}function Nx(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),g_(t,n)}function Ux(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(ie(314))}i!==null&&i.delete(e),g_(t,n)}var __;__=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||nn.current)tn=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return tn=!1,Sx(t,e,n);tn=!!(t.flags&131072)}else tn=!1,ot&&e.flags&1048576&&Sg(e,el,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;Ia(t,e),t=e.pendingProps;var r=gs(e,Vt.current);ds(e,n),r=Ud(null,e,i,t,r,n);var s=Id();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,rn(i)?(s=!0,Qa(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,bd(e),r.updater=Cl,e.stateNode=r,r._reactInternals=e,bc(e,i,t,n),e=Dc(null,e,i,!0,s,n)):(e.tag=0,ot&&s&&Md(e),$t(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(Ia(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=Fx(i),t=Fn(i,t),r){case 0:e=Pc(null,e,i,t,n);break e;case 1:e=ph(null,e,i,t,n);break e;case 11:e=fh(null,e,i,t,n);break e;case 14:e=hh(null,e,i,Fn(i.type,t),n);break e}throw Error(ie(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Fn(i,r),Pc(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Fn(i,r),ph(t,e,i,r,n);case 3:e:{if(e_(e),t===null)throw Error(ie(387));i=e.pendingProps,s=e.memoizedState,r=s.element,Cg(t,e),il(e,i,null,n);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=ys(Error(ie(423)),e),e=mh(t,e,i,n,r);break e}else if(i!==r){r=ys(Error(ie(424)),e),e=mh(t,e,i,n,r);break e}else for(mn=Bi(e.stateNode.containerInfo.firstChild),gn=e,ot=!0,kn=null,n=Tg(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(_s(),i===r){e=vi(t,e,n);break e}$t(t,e,i,n)}e=e.child}return e;case 5:return Rg(e),t===null&&Ac(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,o=r.children,Sc(i,r)?o=null:s!==null&&Sc(i,s)&&(e.flags|=32),Jg(t,e),$t(t,e,o,n),e.child;case 6:return t===null&&Ac(e),null;case 13:return t_(t,e,n);case 4:return Ld(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=vs(e,null,i,n):$t(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Fn(i,r),fh(t,e,i,r,n);case 7:return $t(t,e,e.pendingProps,n),e.child;case 8:return $t(t,e,e.pendingProps.children,n),e.child;case 12:return $t(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,nt(tl,i._currentValue),i._currentValue=o,s!==null)if(jn(s.value,o)){if(s.children===r.children&&!nn.current){e=vi(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=pi(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var f=u.pending;f===null?l.next=l:(l.next=f.next,f.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Cc(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(ie(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Cc(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}$t(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,ds(e,n),r=Ln(r),i=i(r),e.flags|=1,$t(t,e,i,n),e.child;case 14:return i=e.type,r=Fn(i,e.pendingProps),r=Fn(i.type,r),hh(t,e,i,r,n);case 15:return Zg(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Fn(i,r),Ia(t,e),e.tag=1,rn(i)?(t=!0,Qa(e)):t=!1,ds(e,n),qg(e,i,r),bc(e,i,r,n),Dc(null,e,i,!0,t,n);case 19:return n_(t,e,n);case 22:return Qg(t,e,n)}throw Error(ie(156,e.tag))};function v_(t,e){return jm(t,e)}function Ix(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function An(t,e,n,i){return new Ix(t,e,n,i)}function jd(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Fx(t){if(typeof t=="function")return jd(t)?1:0;if(t!=null){if(t=t.$$typeof,t===cd)return 11;if(t===dd)return 14}return 2}function Vi(t,e){var n=t.alternate;return n===null?(n=An(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function ka(t,e,n,i,r,s){var o=2;if(i=t,typeof t=="function")jd(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case qr:return _r(n.children,r,s,e);case ud:o=8,r|=8;break;case Ju:return t=An(12,n,e,r|2),t.elementType=Ju,t.lanes=s,t;case ec:return t=An(13,n,e,r),t.elementType=ec,t.lanes=s,t;case tc:return t=An(19,n,e,r),t.elementType=tc,t.lanes=s,t;case Rm:return Ll(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Am:o=10;break e;case Cm:o=9;break e;case cd:o=11;break e;case dd:o=14;break e;case Ci:o=16,i=null;break e}throw Error(ie(130,t==null?t:typeof t,""))}return e=An(o,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function _r(t,e,n,i){return t=An(7,t,i,e),t.lanes=n,t}function Ll(t,e,n,i){return t=An(22,t,i,e),t.elementType=Rm,t.lanes=n,t.stateNode={isHidden:!1},t}function gu(t,e,n){return t=An(6,t,null,e),t.lanes=n,t}function _u(t,e,n){return e=An(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function Ox(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Zl(0),this.expirationTimes=Zl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Zl(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function Xd(t,e,n,i,r,s,o,a,l){return t=new Ox(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=An(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},bd(s),t}function kx(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:$r,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function x_(t){if(!t)return qi;t=t._reactInternals;e:{if(br(t)!==t||t.tag!==1)throw Error(ie(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(rn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(ie(171))}if(t.tag===1){var n=t.type;if(rn(n))return xg(t,n,e)}return e}function y_(t,e,n,i,r,s,o,a,l){return t=Xd(n,i,!0,t,r,s,o,a,l),t.context=x_(null),n=t.current,i=Kt(),r=Gi(n),s=pi(i,r),s.callback=e??null,zi(n,s,r),t.current.lanes=r,bo(t,r,i),sn(t,i),t}function Pl(t,e,n,i){var r=e.current,s=Kt(),o=Gi(r);return n=x_(n),e.context===null?e.context=n:e.pendingContext=n,e=pi(s,o),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=zi(r,e,o),t!==null&&(Vn(t,r,o,s),Da(t,r,o)),o}function dl(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Th(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function $d(t,e){Th(t,e),(t=t.alternate)&&Th(t,e)}function Bx(){return null}var S_=typeof reportError=="function"?reportError:function(t){console.error(t)};function qd(t){this._internalRoot=t}Dl.prototype.render=qd.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(ie(409));Pl(t,e,null,null)};Dl.prototype.unmount=qd.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Tr(function(){Pl(null,t,null,null)}),e[gi]=null}};function Dl(t){this._internalRoot=t}Dl.prototype.unstable_scheduleHydration=function(t){if(t){var e=Qm();t={blockedOn:null,target:t,priority:e};for(var n=0;n<bi.length&&e!==0&&e<bi[n].priority;n++);bi.splice(n,0,t),n===0&&eg(t)}};function Yd(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Nl(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Ah(){}function zx(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var u=dl(o);s.call(u)}}var o=y_(e,i,t,0,null,!1,!1,"",Ah);return t._reactRootContainer=o,t[gi]=o.current,go(t.nodeType===8?t.parentNode:t),Tr(),o}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var u=dl(l);a.call(u)}}var l=Xd(t,0,!1,null,null,!1,!1,"",Ah);return t._reactRootContainer=l,t[gi]=l.current,go(t.nodeType===8?t.parentNode:t),Tr(function(){Pl(e,l,n,i)}),l}function Ul(t,e,n,i,r){var s=n._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=dl(o);a.call(l)}}Pl(e,o,t,r)}else o=zx(n,e,t,r,i);return dl(o)}Km=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Ys(e.pendingLanes);n!==0&&(pd(e,n|1),sn(e,gt()),!($e&6)&&(Ss=gt()+500,Qi()))}break;case 13:Tr(function(){var i=_i(t,1);if(i!==null){var r=Kt();Vn(i,t,1,r)}}),$d(t,1)}};md=function(t){if(t.tag===13){var e=_i(t,134217728);if(e!==null){var n=Kt();Vn(e,t,134217728,n)}$d(t,134217728)}};Zm=function(t){if(t.tag===13){var e=Gi(t),n=_i(t,e);if(n!==null){var i=Kt();Vn(n,t,e,i)}$d(t,e)}};Qm=function(){return Ke};Jm=function(t,e){var n=Ke;try{return Ke=t,e()}finally{Ke=n}};dc=function(t,e,n){switch(e){case"input":if(rc(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=wl(i);if(!r)throw Error(ie(90));Lm(i),rc(i,r)}}}break;case"textarea":Dm(t,n);break;case"select":e=n.value,e!=null&&as(t,!!n.multiple,e,!1)}};Bm=Gd;zm=Tr;var Hx={usingClientEntryPoint:!1,Events:[Po,Qr,wl,Om,km,Gd]},Hs={findFiberByHostInstance:hr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Gx={bundleType:Hs.bundleType,version:Hs.version,rendererPackageName:Hs.rendererPackageName,rendererConfig:Hs.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:yi.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Vm(t),t===null?null:t.stateNode},findFiberByHostInstance:Hs.findFiberByHostInstance||Bx,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ta=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ta.isDisabled&&ta.supportsFiber)try{yl=ta.inject(Gx),Qn=ta}catch{}}vn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Hx;vn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Yd(e))throw Error(ie(200));return kx(t,e,null,n)};vn.createRoot=function(t,e){if(!Yd(t))throw Error(ie(299));var n=!1,i="",r=S_;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=Xd(t,1,!1,null,null,n,!1,i,r),t[gi]=e.current,go(t.nodeType===8?t.parentNode:t),new qd(e)};vn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(ie(188)):(t=Object.keys(t).join(","),Error(ie(268,t)));return t=Vm(e),t=t===null?null:t.stateNode,t};vn.flushSync=function(t){return Tr(t)};vn.hydrate=function(t,e,n){if(!Nl(e))throw Error(ie(200));return Ul(null,t,e,!0,n)};vn.hydrateRoot=function(t,e,n){if(!Yd(t))throw Error(ie(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",o=S_;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=y_(e,null,t,1,n??null,r,!1,s,o),t[gi]=e.current,go(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new Dl(e)};vn.render=function(t,e,n){if(!Nl(e))throw Error(ie(200));return Ul(null,t,e,!1,n)};vn.unmountComponentAtNode=function(t){if(!Nl(t))throw Error(ie(40));return t._reactRootContainer?(Tr(function(){Ul(null,null,t,!1,function(){t._reactRootContainer=null,t[gi]=null})}),!0):!1};vn.unstable_batchedUpdates=Gd;vn.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!Nl(n))throw Error(ie(200));if(t==null||t._reactInternals===void 0)throw Error(ie(38));return Ul(t,e,n,!1,i)};vn.version="18.3.1-next-f1338f8080-20240426";function M_(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(M_)}catch(t){console.error(t)}}M_(),Mm.exports=vn;var Vx=Mm.exports,E_,Ch=Vx;E_=Ch.createRoot,Ch.hydrateRoot;const Kd="makersvault_auth_token";function Zd(){if(typeof window>"u")return null;try{return window.localStorage}catch{return null}}function Qd(){const t=Zd();return t?t.getItem(Kd):null}function Rh(t){const e=Zd();e&&e.setItem(Kd,t)}function bh(){const t=Zd();t&&t.removeItem(Kd)}function ln(t){const e=new Headers(t||{}),n=Qd();return n&&e.set("Authorization",`Bearer ${n}`),e}function Wx(t){const e=Qd();if(!e)return t;try{const n=new URL(t,typeof window<"u"?window.location.origin:"http://localhost");return n.searchParams.set("token",e),n.toString()}catch{const n=t.includes("?")?"&":"?";return`${t}${n}token=${encodeURIComponent(e)}`}}class Il extends Error{constructor(e="Unauthorized"){super(e),this.name="UnauthorizedError"}}function un(t,e){if(t.status===401)throw new Il;if(!t.ok)throw new Error(e)}function jx(){return`http://${typeof window<"u"?window.location.hostname:"localhost"}:8000`}const Dt=jx();async function Xx(t={}){const e=new URLSearchParams;t.q&&e.set("q",t.q),t.tags&&t.tags.length&&e.set("tags",t.tags.join(",")),t.folder_id&&e.set("folder_id",t.folder_id);const n=await fetch(`${Dt}/assets?${e.toString()}`,{headers:ln()});return un(n,"Failed to list assets"),n.json()}async function $x(t,e={}){const n=new FormData;n.set("file",t),e.title&&n.set("title",e.title),e.notes&&n.set("notes",e.notes),e.tags&&e.tags.length&&n.set("tags",e.tags.join(",")),e.folder_id&&n.set("folder_id",e.folder_id);const i=await fetch(`${Dt}/upload`,{method:"POST",body:n,headers:ln()});return un(i,"Upload failed"),i.json()}async function qx(t,e){const n=await fetch(`${Dt}/asset/${t}/tags`,{method:"POST",headers:ln({"Content-Type":"application/json"}),body:JSON.stringify({tags:e})});return un(n,"Tag update failed"),n.json()}async function Yx(t,e){const n=await fetch(`${Dt}/asset/${t}/meta`,{method:"POST",headers:ln({"Content-Type":"application/json"}),body:JSON.stringify(e)});return un(n,"Metadata update failed"),n.json()}async function Kx(t){const e=await fetch(`${Dt}/asset/${t}`,{method:"DELETE",headers:ln()});return un(e,"Delete asset failed"),e.json()}async function Zx(t,e){const n=await fetch(`${Dt}/asset/${t}/rename`,{method:"POST",headers:ln({"Content-Type":"application/json"}),body:JSON.stringify({filename:e})});return un(n,"Rename failed"),n.json()}async function Qx(t,e){const n=await fetch(`${Dt}/asset/${t}/folder`,{method:"POST",headers:ln({"Content-Type":"application/json"}),body:JSON.stringify({folder_id:e})});return un(n,"Folder update failed"),n.json()}function fl(t){return t&&Wx(`${Dt}${t}`)}async function w_(){const t=await fetch(`${Dt}/folders`,{headers:ln()});return un(t,"Failed to list folders"),t.json()}async function Jx(t,e=[]){const n=await fetch(`${Dt}/folders`,{method:"POST",headers:ln({"Content-Type":"application/json"}),body:JSON.stringify({name:t,tags:e})});return un(n,"Create folder failed"),n.json()}async function ey(t,e,n){const i=await fetch(`${Dt}/folder/${t}`,{method:"PATCH",headers:ln({"Content-Type":"application/json"}),body:JSON.stringify({name:e,tags:n})});return un(i,"Update folder failed"),i.json()}async function ty(t){const e=await fetch(`${Dt}/folder/${t}`,{method:"DELETE",headers:ln()});return un(e,"Delete folder failed"),e.json()}async function Lh(t){const e=await fetch(`${Dt}/download/zip`,{method:"POST",headers:ln({"Content-Type":"application/json"}),body:JSON.stringify(t)});return un(e,"Download failed"),e}async function ny(t){const e=await fetch(`${Dt}/folder/${t}/download`,{headers:ln()});return un(e,"Folder download failed"),e}async function iy(){try{const t=await fetch(`${Dt}/health`,{cache:"no-store"});if(!t.ok)return null;const e=await t.json();return{ok:!!(e!=null&&e.ok),auth_required:!!(e!=null&&e.auth_required)}}catch{return null}}const ry=Dt;async function sy(t,e){const n=await fetch(`${Dt}/login`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:t,password:e})});if(!n.ok){let i="Login failed";try{const r=await n.json();typeof(r==null?void 0:r.detail)=="string"&&(i=r.detail)}catch{}throw new Error(i)}return n.json()}async function oy(){const t=await fetch(`${Dt}/refresh`,{method:"POST",headers:ln()});return un(t,"Token refresh failed"),t.json()}function ay({onUploaded:t,folderId:e,onUnauthorized:n}){const i=Me.useRef(null),[r,s]=Me.useState(!1),o=async a=>{const l=Array.from(a.target.files||[]);if(!l.length)return;s(!0);let u=0,f=[];for(const d of l)try{await $x(d,{folder_id:e||void 0}),u+=1}catch(h){if(h instanceof Il){n==null||n();break}console.error("Upload failed for",d.name,h),f.push(d.name)}u&&t(),f.length&&alert(`Failed to upload: ${f.join(", ")}`),s(!1),i.current&&(i.current.value="")};return D.jsxs("div",{className:"flex items-center gap-2",children:[D.jsx("input",{ref:i,type:"file",onChange:o,multiple:!0,accept:".png,.jpg,.jpeg,.webp,.bmp,.svg,.stl,.step,.stp,.3mf",className:"hidden"}),D.jsx("button",{className:"px-3 py-2 rounded-md bg-emerald-600 text-white hover:bg-emerald-700 disabled:opacity-60",disabled:r,onClick:()=>{var a;return(a=i.current)==null?void 0:a.click()},children:r?"Uploading…":"Upload"})]})}const ly="modulepreload",uy=function(t){return"/"+t},Ph={},Ms=function(e,n,i){let r=Promise.resolve();if(n&&n.length>0){document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),a=(o==null?void 0:o.nonce)||(o==null?void 0:o.getAttribute("nonce"));r=Promise.allSettled(n.map(l=>{if(l=uy(l),l in Ph)return;Ph[l]=!0;const u=l.endsWith(".css"),f=u?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${l}"]${f}`))return;const d=document.createElement("link");if(d.rel=u?"stylesheet":ly,u||(d.as="script"),d.crossOrigin="",d.href=l,a&&d.setAttribute("nonce",a),document.head.appendChild(d),u)return new Promise((h,p)=>{d.addEventListener("load",h),d.addEventListener("error",()=>p(new Error(`Unable to preload CSS for ${l}`)))})}))}function s(o){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o}return r.then(o=>{for(const a of o||[])a.status==="rejected"&&s(a.reason);return e().catch(s)})};/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Jd="160",Y1={ROTATE:0,DOLLY:1,PAN:2},K1={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},cy=0,Dh=1,dy=2,T_=1,fy=2,ai=3,Yi=0,on=1,ci=2,Wi=0,hs=1,Nh=2,Uh=3,Ih=4,hy=5,dr=100,py=101,my=102,Fh=103,Oh=104,gy=200,_y=201,vy=202,xy=203,Wc=204,jc=205,yy=206,Sy=207,My=208,Ey=209,wy=210,Ty=211,Ay=212,Cy=213,Ry=214,by=0,Ly=1,Py=2,hl=3,Dy=4,Ny=5,Uy=6,Iy=7,ef=0,Fy=1,Oy=2,ji=0,ky=1,By=2,zy=3,Hy=4,Gy=5,Vy=6,A_=300,Es=301,ws=302,Xc=303,$c=304,Fl=306,qc=1e3,zn=1001,Yc=1002,qt=1003,kh=1004,vu=1005,wn=1006,Wy=1007,To=1008,Xi=1009,jy=1010,Xy=1011,tf=1012,C_=1013,Ni=1014,Ui=1015,Ao=1016,R_=1017,b_=1018,vr=1020,$y=1021,Hn=1023,qy=1024,Yy=1025,xr=1026,Ts=1027,Ky=1028,L_=1029,Zy=1030,P_=1031,D_=1033,xu=33776,yu=33777,Su=33778,Mu=33779,Bh=35840,zh=35841,Hh=35842,Gh=35843,N_=36196,Vh=37492,Wh=37496,jh=37808,Xh=37809,$h=37810,qh=37811,Yh=37812,Kh=37813,Zh=37814,Qh=37815,Jh=37816,ep=37817,tp=37818,np=37819,ip=37820,rp=37821,Eu=36492,sp=36494,op=36495,Qy=36283,ap=36284,lp=36285,up=36286,U_=3e3,yr=3001,Jy=3200,eS=3201,nf=0,tS=1,Tn="",Ut="srgb",xi="srgb-linear",rf="display-p3",Ol="display-p3-linear",pl="linear",rt="srgb",ml="rec709",gl="p3",Pr=7680,cp=519,nS=512,iS=513,rS=514,I_=515,sS=516,oS=517,aS=518,lS=519,dp=35044,fp="300 es",Kc=1035,hi=2e3,_l=2001;class Ps{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const zt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ba=Math.PI/180,Zc=180/Math.PI;function No(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(zt[t&255]+zt[t>>8&255]+zt[t>>16&255]+zt[t>>24&255]+"-"+zt[e&255]+zt[e>>8&255]+"-"+zt[e>>16&15|64]+zt[e>>24&255]+"-"+zt[n&63|128]+zt[n>>8&255]+"-"+zt[n>>16&255]+zt[n>>24&255]+zt[i&255]+zt[i>>8&255]+zt[i>>16&255]+zt[i>>24&255]).toLowerCase()}function Yt(t,e,n){return Math.max(e,Math.min(n,t))}function uS(t,e){return(t%e+e)%e}function wu(t,e,n){return(1-n)*t+n*e}function hp(t){return(t&t-1)===0&&t!==0}function Qc(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function Gs(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function Jt(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}const Z1={DEG2RAD:Ba};class qe{constructor(e=0,n=0){qe.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Yt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class We{constructor(e,n,i,r,s,o,a,l,u){We.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,u)}set(e,n,i,r,s,o,a,l,u){const f=this.elements;return f[0]=e,f[1]=r,f[2]=a,f[3]=n,f[4]=s,f[5]=l,f[6]=i,f[7]=o,f[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[3],l=i[6],u=i[1],f=i[4],d=i[7],h=i[2],p=i[5],v=i[8],x=r[0],m=r[3],c=r[6],_=r[1],g=r[4],S=r[7],R=r[2],C=r[5],A=r[8];return s[0]=o*x+a*_+l*R,s[3]=o*m+a*g+l*C,s[6]=o*c+a*S+l*A,s[1]=u*x+f*_+d*R,s[4]=u*m+f*g+d*C,s[7]=u*c+f*S+d*A,s[2]=h*x+p*_+v*R,s[5]=h*m+p*g+v*C,s[8]=h*c+p*S+v*A,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],f=e[8];return n*o*f-n*a*u-i*s*f+i*a*l+r*s*u-r*o*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],f=e[8],d=f*o-a*u,h=a*l-f*s,p=u*s-o*l,v=n*d+i*h+r*p;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/v;return e[0]=d*x,e[1]=(r*u-f*i)*x,e[2]=(a*i-r*o)*x,e[3]=h*x,e[4]=(f*n-r*l)*x,e[5]=(r*s-a*n)*x,e[6]=p*x,e[7]=(i*l-u*n)*x,e[8]=(o*n-i*s)*x,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,o,a){const l=Math.cos(s),u=Math.sin(s);return this.set(i*l,i*u,-i*(l*o+u*a)+o+e,-r*u,r*l,-r*(-u*o+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(Tu.makeScale(e,n)),this}rotate(e){return this.premultiply(Tu.makeRotation(-e)),this}translate(e,n){return this.premultiply(Tu.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Tu=new We;function F_(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function Co(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function cS(){const t=Co("canvas");return t.style.display="block",t}const pp={};function oo(t){t in pp||(pp[t]=!0,console.warn(t))}const mp=new We().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),gp=new We().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),na={[xi]:{transfer:pl,primaries:ml,toReference:t=>t,fromReference:t=>t},[Ut]:{transfer:rt,primaries:ml,toReference:t=>t.convertSRGBToLinear(),fromReference:t=>t.convertLinearToSRGB()},[Ol]:{transfer:pl,primaries:gl,toReference:t=>t.applyMatrix3(gp),fromReference:t=>t.applyMatrix3(mp)},[rf]:{transfer:rt,primaries:gl,toReference:t=>t.convertSRGBToLinear().applyMatrix3(gp),fromReference:t=>t.applyMatrix3(mp).convertLinearToSRGB()}},dS=new Set([xi,Ol]),Qe={enabled:!0,_workingColorSpace:xi,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(t){if(!dS.has(t))throw new Error(`Unsupported working color space, "${t}".`);this._workingColorSpace=t},convert:function(t,e,n){if(this.enabled===!1||e===n||!e||!n)return t;const i=na[e].toReference,r=na[n].fromReference;return r(i(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this._workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this._workingColorSpace)},getPrimaries:function(t){return na[t].primaries},getTransfer:function(t){return t===Tn?pl:na[t].transfer}};function ps(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function Au(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let Dr;class O_{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Dr===void 0&&(Dr=Co("canvas")),Dr.width=e.width,Dr.height=e.height;const i=Dr.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=Dr}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Co("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=ps(s[o]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(ps(n[i]/255)*255):n[i]=ps(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let fS=0;class k_{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:fS++}),this.uuid=No(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Cu(r[o].image)):s.push(Cu(r[o]))}else s=Cu(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function Cu(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?O_.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let hS=0;class an extends Ps{constructor(e=an.DEFAULT_IMAGE,n=an.DEFAULT_MAPPING,i=zn,r=zn,s=wn,o=To,a=Hn,l=Xi,u=an.DEFAULT_ANISOTROPY,f=Tn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:hS++}),this.uuid=No(),this.name="",this.source=new k_(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=u,this.format=a,this.internalFormat=null,this.type=l,this.offset=new qe(0,0),this.repeat=new qe(1,1),this.center=new qe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new We,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof f=="string"?this.colorSpace=f:(oo("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=f===yr?Ut:Tn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==A_)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case qc:e.x=e.x-Math.floor(e.x);break;case zn:e.x=e.x<0?0:1;break;case Yc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case qc:e.y=e.y-Math.floor(e.y);break;case zn:e.y=e.y<0?0:1;break;case Yc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return oo("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Ut?yr:U_}set encoding(e){oo("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===yr?Ut:Tn}}an.DEFAULT_IMAGE=null;an.DEFAULT_MAPPING=A_;an.DEFAULT_ANISOTROPY=1;class Lt{constructor(e=0,n=0,i=0,r=1){Lt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,u=l[0],f=l[4],d=l[8],h=l[1],p=l[5],v=l[9],x=l[2],m=l[6],c=l[10];if(Math.abs(f-h)<.01&&Math.abs(d-x)<.01&&Math.abs(v-m)<.01){if(Math.abs(f+h)<.1&&Math.abs(d+x)<.1&&Math.abs(v+m)<.1&&Math.abs(u+p+c-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const g=(u+1)/2,S=(p+1)/2,R=(c+1)/2,C=(f+h)/4,A=(d+x)/4,U=(v+m)/4;return g>S&&g>R?g<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(g),r=C/i,s=A/i):S>R?S<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(S),i=C/r,s=U/r):R<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(R),i=A/s,r=U/s),this.set(i,r,s,n),this}let _=Math.sqrt((m-v)*(m-v)+(d-x)*(d-x)+(h-f)*(h-f));return Math.abs(_)<.001&&(_=1),this.x=(m-v)/_,this.y=(d-x)/_,this.z=(h-f)/_,this.w=Math.acos((u+p+c-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class pS extends Ps{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new Lt(0,0,e,n),this.scissorTest=!1,this.viewport=new Lt(0,0,e,n);const r={width:e,height:n,depth:1};i.encoding!==void 0&&(oo("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===yr?Ut:Tn),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:wn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new an(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(e,n,i=1){(this.width!==e||this.height!==n||this.depth!==i)&&(this.width=e,this.height=n,this.depth=i,this.texture.image.width=e,this.texture.image.height=n,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new k_(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ar extends pS{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class B_ extends an{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=qt,this.minFilter=qt,this.wrapR=zn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class mS extends an{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=qt,this.minFilter=qt,this.wrapR=zn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Uo{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,o,a){let l=i[r+0],u=i[r+1],f=i[r+2],d=i[r+3];const h=s[o+0],p=s[o+1],v=s[o+2],x=s[o+3];if(a===0){e[n+0]=l,e[n+1]=u,e[n+2]=f,e[n+3]=d;return}if(a===1){e[n+0]=h,e[n+1]=p,e[n+2]=v,e[n+3]=x;return}if(d!==x||l!==h||u!==p||f!==v){let m=1-a;const c=l*h+u*p+f*v+d*x,_=c>=0?1:-1,g=1-c*c;if(g>Number.EPSILON){const R=Math.sqrt(g),C=Math.atan2(R,c*_);m=Math.sin(m*C)/R,a=Math.sin(a*C)/R}const S=a*_;if(l=l*m+h*S,u=u*m+p*S,f=f*m+v*S,d=d*m+x*S,m===1-a){const R=1/Math.sqrt(l*l+u*u+f*f+d*d);l*=R,u*=R,f*=R,d*=R}}e[n]=l,e[n+1]=u,e[n+2]=f,e[n+3]=d}static multiplyQuaternionsFlat(e,n,i,r,s,o){const a=i[r],l=i[r+1],u=i[r+2],f=i[r+3],d=s[o],h=s[o+1],p=s[o+2],v=s[o+3];return e[n]=a*v+f*d+l*p-u*h,e[n+1]=l*v+f*h+u*d-a*p,e[n+2]=u*v+f*p+a*h-l*d,e[n+3]=f*v-a*d-l*h-u*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,u=a(i/2),f=a(r/2),d=a(s/2),h=l(i/2),p=l(r/2),v=l(s/2);switch(o){case"XYZ":this._x=h*f*d+u*p*v,this._y=u*p*d-h*f*v,this._z=u*f*v+h*p*d,this._w=u*f*d-h*p*v;break;case"YXZ":this._x=h*f*d+u*p*v,this._y=u*p*d-h*f*v,this._z=u*f*v-h*p*d,this._w=u*f*d+h*p*v;break;case"ZXY":this._x=h*f*d-u*p*v,this._y=u*p*d+h*f*v,this._z=u*f*v+h*p*d,this._w=u*f*d-h*p*v;break;case"ZYX":this._x=h*f*d-u*p*v,this._y=u*p*d+h*f*v,this._z=u*f*v-h*p*d,this._w=u*f*d+h*p*v;break;case"YZX":this._x=h*f*d+u*p*v,this._y=u*p*d+h*f*v,this._z=u*f*v-h*p*d,this._w=u*f*d-h*p*v;break;case"XZY":this._x=h*f*d-u*p*v,this._y=u*p*d-h*f*v,this._z=u*f*v+h*p*d,this._w=u*f*d+h*p*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],o=n[1],a=n[5],l=n[9],u=n[2],f=n[6],d=n[10],h=i+a+d;if(h>0){const p=.5/Math.sqrt(h+1);this._w=.25/p,this._x=(f-l)*p,this._y=(s-u)*p,this._z=(o-r)*p}else if(i>a&&i>d){const p=2*Math.sqrt(1+i-a-d);this._w=(f-l)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+u)/p}else if(a>d){const p=2*Math.sqrt(1+a-i-d);this._w=(s-u)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(l+f)/p}else{const p=2*Math.sqrt(1+d-i-a);this._w=(o-r)/p,this._x=(s+u)/p,this._y=(l+f)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Yt(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,o=e._w,a=n._x,l=n._y,u=n._z,f=n._w;return this._x=i*f+o*a+r*u-s*l,this._y=r*f+o*l+s*a-i*u,this._z=s*f+o*u+i*l-r*a,this._w=o*f-i*a-r*l-s*u,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-n;return this._w=p*o+n*this._w,this._x=p*i+n*this._x,this._y=p*r+n*this._y,this._z=p*s+n*this._z,this.normalize(),this}const u=Math.sqrt(l),f=Math.atan2(u,a),d=Math.sin((1-n)*f)/u,h=Math.sin(n*f)/u;return this._w=o*d+this._w*h,this._x=i*d+this._x*h,this._y=r*d+this._y*h,this._z=s*d+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=Math.random(),n=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(n*Math.cos(r),i*Math.sin(s),i*Math.cos(s),n*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class k{constructor(e=0,n=0,i=0){k.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(_p.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(_p.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,u=2*(o*r-a*i),f=2*(a*n-s*r),d=2*(s*i-o*n);return this.x=n+l*u+o*d-a*f,this.y=i+l*f+a*u-s*d,this.z=r+l*d+s*f-o*u,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,o=n.x,a=n.y,l=n.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Ru.copy(this).projectOnVector(e),this.sub(Ru)}reflect(e){return this.sub(Ru.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Yt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,n=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(n),this.y=i*Math.sin(n),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ru=new k,_p=new Uo;class Ji{constructor(e=new k(1/0,1/0,1/0),n=new k(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(Nn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(Nn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Nn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Nn):Nn.fromBufferAttribute(s,o),Nn.applyMatrix4(e.matrixWorld),this.expandByPoint(Nn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ia.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),ia.copy(i.boundingBox)),ia.applyMatrix4(e.matrixWorld),this.union(ia)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Nn),Nn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Vs),ra.subVectors(this.max,Vs),Nr.subVectors(e.a,Vs),Ur.subVectors(e.b,Vs),Ir.subVectors(e.c,Vs),Mi.subVectors(Ur,Nr),Ei.subVectors(Ir,Ur),ir.subVectors(Nr,Ir);let n=[0,-Mi.z,Mi.y,0,-Ei.z,Ei.y,0,-ir.z,ir.y,Mi.z,0,-Mi.x,Ei.z,0,-Ei.x,ir.z,0,-ir.x,-Mi.y,Mi.x,0,-Ei.y,Ei.x,0,-ir.y,ir.x,0];return!bu(n,Nr,Ur,Ir,ra)||(n=[1,0,0,0,1,0,0,0,1],!bu(n,Nr,Ur,Ir,ra))?!1:(sa.crossVectors(Mi,Ei),n=[sa.x,sa.y,sa.z],bu(n,Nr,Ur,Ir,ra))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Nn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Nn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ti[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ti[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ti[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ti[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ti[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ti[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ti[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ti[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ti),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const ti=[new k,new k,new k,new k,new k,new k,new k,new k],Nn=new k,ia=new Ji,Nr=new k,Ur=new k,Ir=new k,Mi=new k,Ei=new k,ir=new k,Vs=new k,ra=new k,sa=new k,rr=new k;function bu(t,e,n,i,r){for(let s=0,o=t.length-3;s<=o;s+=3){rr.fromArray(t,s);const a=r.x*Math.abs(rr.x)+r.y*Math.abs(rr.y)+r.z*Math.abs(rr.z),l=e.dot(rr),u=n.dot(rr),f=i.dot(rr);if(Math.max(-Math.max(l,u,f),Math.min(l,u,f))>a)return!1}return!0}const gS=new Ji,Ws=new k,Lu=new k;class Io{constructor(e=new k,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):gS.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ws.subVectors(e,this.center);const n=Ws.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(Ws,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Lu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ws.copy(e.center).add(Lu)),this.expandByPoint(Ws.copy(e.center).sub(Lu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ni=new k,Pu=new k,oa=new k,wi=new k,Du=new k,aa=new k,Nu=new k;class sf{constructor(e=new k,n=new k(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ni)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=ni.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(ni.copy(this.origin).addScaledVector(this.direction,n),ni.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){Pu.copy(e).add(n).multiplyScalar(.5),oa.copy(n).sub(e).normalize(),wi.copy(this.origin).sub(Pu);const s=e.distanceTo(n)*.5,o=-this.direction.dot(oa),a=wi.dot(this.direction),l=-wi.dot(oa),u=wi.lengthSq(),f=Math.abs(1-o*o);let d,h,p,v;if(f>0)if(d=o*l-a,h=o*a-l,v=s*f,d>=0)if(h>=-v)if(h<=v){const x=1/f;d*=x,h*=x,p=d*(d+o*h+2*a)+h*(o*d+h+2*l)+u}else h=s,d=Math.max(0,-(o*h+a)),p=-d*d+h*(h+2*l)+u;else h=-s,d=Math.max(0,-(o*h+a)),p=-d*d+h*(h+2*l)+u;else h<=-v?(d=Math.max(0,-(-o*s+a)),h=d>0?-s:Math.min(Math.max(-s,-l),s),p=-d*d+h*(h+2*l)+u):h<=v?(d=0,h=Math.min(Math.max(-s,-l),s),p=h*(h+2*l)+u):(d=Math.max(0,-(o*s+a)),h=d>0?s:Math.min(Math.max(-s,-l),s),p=-d*d+h*(h+2*l)+u);else h=o>0?-s:s,d=Math.max(0,-(o*h+a)),p=-d*d+h*(h+2*l)+u;return i&&i.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(Pu).addScaledVector(oa,h),p}intersectSphere(e,n){ni.subVectors(e.center,this.origin);const i=ni.dot(this.direction),r=ni.dot(ni)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,o,a,l;const u=1/this.direction.x,f=1/this.direction.y,d=1/this.direction.z,h=this.origin;return u>=0?(i=(e.min.x-h.x)*u,r=(e.max.x-h.x)*u):(i=(e.max.x-h.x)*u,r=(e.min.x-h.x)*u),f>=0?(s=(e.min.y-h.y)*f,o=(e.max.y-h.y)*f):(s=(e.max.y-h.y)*f,o=(e.min.y-h.y)*f),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),d>=0?(a=(e.min.z-h.z)*d,l=(e.max.z-h.z)*d):(a=(e.max.z-h.z)*d,l=(e.min.z-h.z)*d),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,ni)!==null}intersectTriangle(e,n,i,r,s){Du.subVectors(n,e),aa.subVectors(i,e),Nu.crossVectors(Du,aa);let o=this.direction.dot(Nu),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;wi.subVectors(this.origin,e);const l=a*this.direction.dot(aa.crossVectors(wi,aa));if(l<0)return null;const u=a*this.direction.dot(Du.cross(wi));if(u<0||l+u>o)return null;const f=-a*wi.dot(Nu);return f<0?null:this.at(f/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class pt{constructor(e,n,i,r,s,o,a,l,u,f,d,h,p,v,x,m){pt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,u,f,d,h,p,v,x,m)}set(e,n,i,r,s,o,a,l,u,f,d,h,p,v,x,m){const c=this.elements;return c[0]=e,c[4]=n,c[8]=i,c[12]=r,c[1]=s,c[5]=o,c[9]=a,c[13]=l,c[2]=u,c[6]=f,c[10]=d,c[14]=h,c[3]=p,c[7]=v,c[11]=x,c[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new pt().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/Fr.setFromMatrixColumn(e,0).length(),s=1/Fr.setFromMatrixColumn(e,1).length(),o=1/Fr.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),u=Math.sin(r),f=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const h=o*f,p=o*d,v=a*f,x=a*d;n[0]=l*f,n[4]=-l*d,n[8]=u,n[1]=p+v*u,n[5]=h-x*u,n[9]=-a*l,n[2]=x-h*u,n[6]=v+p*u,n[10]=o*l}else if(e.order==="YXZ"){const h=l*f,p=l*d,v=u*f,x=u*d;n[0]=h+x*a,n[4]=v*a-p,n[8]=o*u,n[1]=o*d,n[5]=o*f,n[9]=-a,n[2]=p*a-v,n[6]=x+h*a,n[10]=o*l}else if(e.order==="ZXY"){const h=l*f,p=l*d,v=u*f,x=u*d;n[0]=h-x*a,n[4]=-o*d,n[8]=v+p*a,n[1]=p+v*a,n[5]=o*f,n[9]=x-h*a,n[2]=-o*u,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){const h=o*f,p=o*d,v=a*f,x=a*d;n[0]=l*f,n[4]=v*u-p,n[8]=h*u+x,n[1]=l*d,n[5]=x*u+h,n[9]=p*u-v,n[2]=-u,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){const h=o*l,p=o*u,v=a*l,x=a*u;n[0]=l*f,n[4]=x-h*d,n[8]=v*d+p,n[1]=d,n[5]=o*f,n[9]=-a*f,n[2]=-u*f,n[6]=p*d+v,n[10]=h-x*d}else if(e.order==="XZY"){const h=o*l,p=o*u,v=a*l,x=a*u;n[0]=l*f,n[4]=-d,n[8]=u*f,n[1]=h*d+x,n[5]=o*f,n[9]=p*d-v,n[2]=v*d-p,n[6]=a*f,n[10]=x*d+h}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(_S,e,vS)}lookAt(e,n,i){const r=this.elements;return dn.subVectors(e,n),dn.lengthSq()===0&&(dn.z=1),dn.normalize(),Ti.crossVectors(i,dn),Ti.lengthSq()===0&&(Math.abs(i.z)===1?dn.x+=1e-4:dn.z+=1e-4,dn.normalize(),Ti.crossVectors(i,dn)),Ti.normalize(),la.crossVectors(dn,Ti),r[0]=Ti.x,r[4]=la.x,r[8]=dn.x,r[1]=Ti.y,r[5]=la.y,r[9]=dn.y,r[2]=Ti.z,r[6]=la.z,r[10]=dn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[4],l=i[8],u=i[12],f=i[1],d=i[5],h=i[9],p=i[13],v=i[2],x=i[6],m=i[10],c=i[14],_=i[3],g=i[7],S=i[11],R=i[15],C=r[0],A=r[4],U=r[8],M=r[12],T=r[1],B=r[5],z=r[9],Q=r[13],L=r[2],F=r[6],$=r[10],Y=r[14],P=r[3],O=r[7],j=r[11],K=r[15];return s[0]=o*C+a*T+l*L+u*P,s[4]=o*A+a*B+l*F+u*O,s[8]=o*U+a*z+l*$+u*j,s[12]=o*M+a*Q+l*Y+u*K,s[1]=f*C+d*T+h*L+p*P,s[5]=f*A+d*B+h*F+p*O,s[9]=f*U+d*z+h*$+p*j,s[13]=f*M+d*Q+h*Y+p*K,s[2]=v*C+x*T+m*L+c*P,s[6]=v*A+x*B+m*F+c*O,s[10]=v*U+x*z+m*$+c*j,s[14]=v*M+x*Q+m*Y+c*K,s[3]=_*C+g*T+S*L+R*P,s[7]=_*A+g*B+S*F+R*O,s[11]=_*U+g*z+S*$+R*j,s[15]=_*M+g*Q+S*Y+R*K,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],u=e[13],f=e[2],d=e[6],h=e[10],p=e[14],v=e[3],x=e[7],m=e[11],c=e[15];return v*(+s*l*d-r*u*d-s*a*h+i*u*h+r*a*p-i*l*p)+x*(+n*l*p-n*u*h+s*o*h-r*o*p+r*u*f-s*l*f)+m*(+n*u*d-n*a*p-s*o*d+i*o*p+s*a*f-i*u*f)+c*(-r*a*f-n*l*d+n*a*h+r*o*d-i*o*h+i*l*f)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],f=e[8],d=e[9],h=e[10],p=e[11],v=e[12],x=e[13],m=e[14],c=e[15],_=d*m*u-x*h*u+x*l*p-a*m*p-d*l*c+a*h*c,g=v*h*u-f*m*u-v*l*p+o*m*p+f*l*c-o*h*c,S=f*x*u-v*d*u+v*a*p-o*x*p-f*a*c+o*d*c,R=v*d*l-f*x*l-v*a*h+o*x*h+f*a*m-o*d*m,C=n*_+i*g+r*S+s*R;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/C;return e[0]=_*A,e[1]=(x*h*s-d*m*s-x*r*p+i*m*p+d*r*c-i*h*c)*A,e[2]=(a*m*s-x*l*s+x*r*u-i*m*u-a*r*c+i*l*c)*A,e[3]=(d*l*s-a*h*s-d*r*u+i*h*u+a*r*p-i*l*p)*A,e[4]=g*A,e[5]=(f*m*s-v*h*s+v*r*p-n*m*p-f*r*c+n*h*c)*A,e[6]=(v*l*s-o*m*s-v*r*u+n*m*u+o*r*c-n*l*c)*A,e[7]=(o*h*s-f*l*s+f*r*u-n*h*u-o*r*p+n*l*p)*A,e[8]=S*A,e[9]=(v*d*s-f*x*s-v*i*p+n*x*p+f*i*c-n*d*c)*A,e[10]=(o*x*s-v*a*s+v*i*u-n*x*u-o*i*c+n*a*c)*A,e[11]=(f*a*s-o*d*s-f*i*u+n*d*u+o*i*p-n*a*p)*A,e[12]=R*A,e[13]=(f*x*r-v*d*r+v*i*h-n*x*h-f*i*m+n*d*m)*A,e[14]=(v*a*r-o*x*r-v*i*l+n*x*l+o*i*m-n*a*m)*A,e[15]=(o*d*r-f*a*r+f*i*l-n*d*l-o*i*h+n*a*h)*A,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,o=e.x,a=e.y,l=e.z,u=s*o,f=s*a;return this.set(u*o+i,u*a-r*l,u*l+r*a,0,u*a+r*l,f*a+i,f*l-r*o,0,u*l-r*a,f*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,o=n._y,a=n._z,l=n._w,u=s+s,f=o+o,d=a+a,h=s*u,p=s*f,v=s*d,x=o*f,m=o*d,c=a*d,_=l*u,g=l*f,S=l*d,R=i.x,C=i.y,A=i.z;return r[0]=(1-(x+c))*R,r[1]=(p+S)*R,r[2]=(v-g)*R,r[3]=0,r[4]=(p-S)*C,r[5]=(1-(h+c))*C,r[6]=(m+_)*C,r[7]=0,r[8]=(v+g)*A,r[9]=(m-_)*A,r[10]=(1-(h+x))*A,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=Fr.set(r[0],r[1],r[2]).length();const o=Fr.set(r[4],r[5],r[6]).length(),a=Fr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Un.copy(this);const u=1/s,f=1/o,d=1/a;return Un.elements[0]*=u,Un.elements[1]*=u,Un.elements[2]*=u,Un.elements[4]*=f,Un.elements[5]*=f,Un.elements[6]*=f,Un.elements[8]*=d,Un.elements[9]*=d,Un.elements[10]*=d,n.setFromRotationMatrix(Un),i.x=s,i.y=o,i.z=a,this}makePerspective(e,n,i,r,s,o,a=hi){const l=this.elements,u=2*s/(n-e),f=2*s/(i-r),d=(n+e)/(n-e),h=(i+r)/(i-r);let p,v;if(a===hi)p=-(o+s)/(o-s),v=-2*o*s/(o-s);else if(a===_l)p=-o/(o-s),v=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=f,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,s,o,a=hi){const l=this.elements,u=1/(n-e),f=1/(i-r),d=1/(o-s),h=(n+e)*u,p=(i+r)*f;let v,x;if(a===hi)v=(o+s)*d,x=-2*d;else if(a===_l)v=s*d,x=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*u,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*f,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=x,l[14]=-v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const Fr=new k,Un=new pt,_S=new k(0,0,0),vS=new k(1,1,1),Ti=new k,la=new k,dn=new k,vp=new pt,xp=new Uo;class kl{constructor(e=0,n=0,i=0,r=kl.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],u=r[5],f=r[9],d=r[2],h=r[6],p=r[10];switch(n){case"XYZ":this._y=Math.asin(Yt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-f,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(h,u),this._z=0);break;case"YXZ":this._x=Math.asin(-Yt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(Yt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-o,u)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Yt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,u));break;case"YZX":this._z=Math.asin(Yt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-f,u),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Yt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,u),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-f,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return vp.makeRotationFromQuaternion(e),this.setFromRotationMatrix(vp,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return xp.setFromEuler(this),this.setFromQuaternion(xp,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}kl.DEFAULT_ORDER="XYZ";class z_{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let xS=0;const yp=new k,Or=new Uo,ii=new pt,ua=new k,js=new k,yS=new k,SS=new Uo,Sp=new k(1,0,0),Mp=new k(0,1,0),Ep=new k(0,0,1),MS={type:"added"},ES={type:"removed"};class Mt extends Ps{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:xS++}),this.uuid=No(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Mt.DEFAULT_UP.clone();const e=new k,n=new kl,i=new Uo,r=new k(1,1,1);function s(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new pt},normalMatrix:{value:new We}}),this.matrix=new pt,this.matrixWorld=new pt,this.matrixAutoUpdate=Mt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Mt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new z_,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Or.setFromAxisAngle(e,n),this.quaternion.multiply(Or),this}rotateOnWorldAxis(e,n){return Or.setFromAxisAngle(e,n),this.quaternion.premultiply(Or),this}rotateX(e){return this.rotateOnAxis(Sp,e)}rotateY(e){return this.rotateOnAxis(Mp,e)}rotateZ(e){return this.rotateOnAxis(Ep,e)}translateOnAxis(e,n){return yp.copy(e).applyQuaternion(this.quaternion),this.position.add(yp.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Sp,e)}translateY(e){return this.translateOnAxis(Mp,e)}translateZ(e){return this.translateOnAxis(Ep,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ii.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?ua.copy(e):ua.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),js.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ii.lookAt(js,ua,this.up):ii.lookAt(ua,js,this.up),this.quaternion.setFromRotationMatrix(ii),r&&(ii.extractRotation(r.matrixWorld),Or.setFromRotationMatrix(ii),this.quaternion.premultiply(Or.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(MS)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(ES)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ii.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ii.multiply(e.parent.matrixWorld)),e.applyMatrix4(ii),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(js,e,yS),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(js,SS,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++){const s=n[i];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),n===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++){const a=r[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let u=0,f=l.length;u<f;u++){const d=l[u];s(e.shapes,d)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,u=this.material.length;l<u;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(n){const a=o(e.geometries),l=o(e.materials),u=o(e.textures),f=o(e.images),d=o(e.shapes),h=o(e.skeletons),p=o(e.animations),v=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),u.length>0&&(i.textures=u),f.length>0&&(i.images=f),d.length>0&&(i.shapes=d),h.length>0&&(i.skeletons=h),p.length>0&&(i.animations=p),v.length>0&&(i.nodes=v)}return i.object=r,i;function o(a){const l=[];for(const u in a){const f=a[u];delete f.metadata,l.push(f)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Mt.DEFAULT_UP=new k(0,1,0);Mt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Mt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const In=new k,ri=new k,Uu=new k,si=new k,kr=new k,Br=new k,wp=new k,Iu=new k,Fu=new k,Ou=new k;let ca=!1;class Bn{constructor(e=new k,n=new k,i=new k){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),In.subVectors(e,n),r.cross(In);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){In.subVectors(r,n),ri.subVectors(i,n),Uu.subVectors(e,n);const o=In.dot(In),a=In.dot(ri),l=In.dot(Uu),u=ri.dot(ri),f=ri.dot(Uu),d=o*u-a*a;if(d===0)return s.set(0,0,0),null;const h=1/d,p=(u*l-a*f)*h,v=(o*f-a*l)*h;return s.set(1-p-v,v,p)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,si)===null?!1:si.x>=0&&si.y>=0&&si.x+si.y<=1}static getUV(e,n,i,r,s,o,a,l){return ca===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),ca=!0),this.getInterpolation(e,n,i,r,s,o,a,l)}static getInterpolation(e,n,i,r,s,o,a,l){return this.getBarycoord(e,n,i,r,si)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,si.x),l.addScaledVector(o,si.y),l.addScaledVector(a,si.z),l)}static isFrontFacing(e,n,i,r){return In.subVectors(i,n),ri.subVectors(e,n),In.cross(ri).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return In.subVectors(this.c,this.b),ri.subVectors(this.a,this.b),In.cross(ri).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Bn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Bn.getBarycoord(e,this.a,this.b,this.c,n)}getUV(e,n,i,r,s){return ca===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),ca=!0),Bn.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}getInterpolation(e,n,i,r,s){return Bn.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return Bn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Bn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let o,a;kr.subVectors(r,i),Br.subVectors(s,i),Iu.subVectors(e,i);const l=kr.dot(Iu),u=Br.dot(Iu);if(l<=0&&u<=0)return n.copy(i);Fu.subVectors(e,r);const f=kr.dot(Fu),d=Br.dot(Fu);if(f>=0&&d<=f)return n.copy(r);const h=l*d-f*u;if(h<=0&&l>=0&&f<=0)return o=l/(l-f),n.copy(i).addScaledVector(kr,o);Ou.subVectors(e,s);const p=kr.dot(Ou),v=Br.dot(Ou);if(v>=0&&p<=v)return n.copy(s);const x=p*u-l*v;if(x<=0&&u>=0&&v<=0)return a=u/(u-v),n.copy(i).addScaledVector(Br,a);const m=f*v-p*d;if(m<=0&&d-f>=0&&p-v>=0)return wp.subVectors(s,r),a=(d-f)/(d-f+(p-v)),n.copy(r).addScaledVector(wp,a);const c=1/(m+x+h);return o=x*c,a=h*c,n.copy(i).addScaledVector(kr,o).addScaledVector(Br,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const H_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ai={h:0,s:0,l:0},da={h:0,s:0,l:0};function ku(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class He{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Ut){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Qe.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=Qe.workingColorSpace){return this.r=e,this.g=n,this.b=i,Qe.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=Qe.workingColorSpace){if(e=uS(e,1),n=Yt(n,0,1),i=Yt(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,o=2*i-s;this.r=ku(o,s,e+1/3),this.g=ku(o,s,e),this.b=ku(o,s,e-1/3)}return Qe.toWorkingColorSpace(this,r),this}setStyle(e,n=Ut){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Ut){const i=H_[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ps(e.r),this.g=ps(e.g),this.b=ps(e.b),this}copyLinearToSRGB(e){return this.r=Au(e.r),this.g=Au(e.g),this.b=Au(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ut){return Qe.fromWorkingColorSpace(Ht.copy(this),e),Math.round(Yt(Ht.r*255,0,255))*65536+Math.round(Yt(Ht.g*255,0,255))*256+Math.round(Yt(Ht.b*255,0,255))}getHexString(e=Ut){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Qe.workingColorSpace){Qe.fromWorkingColorSpace(Ht.copy(this),n);const i=Ht.r,r=Ht.g,s=Ht.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,u;const f=(a+o)/2;if(a===o)l=0,u=0;else{const d=o-a;switch(u=f<=.5?d/(o+a):d/(2-o-a),o){case i:l=(r-s)/d+(r<s?6:0);break;case r:l=(s-i)/d+2;break;case s:l=(i-r)/d+4;break}l/=6}return e.h=l,e.s=u,e.l=f,e}getRGB(e,n=Qe.workingColorSpace){return Qe.fromWorkingColorSpace(Ht.copy(this),n),e.r=Ht.r,e.g=Ht.g,e.b=Ht.b,e}getStyle(e=Ut){Qe.fromWorkingColorSpace(Ht.copy(this),e);const n=Ht.r,i=Ht.g,r=Ht.b;return e!==Ut?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(Ai),this.setHSL(Ai.h+e,Ai.s+n,Ai.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Ai),e.getHSL(da);const i=wu(Ai.h,da.h,n),r=wu(Ai.s,da.s,n),s=wu(Ai.l,da.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ht=new He;He.NAMES=H_;let wS=0;class er extends Ps{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:wS++}),this.uuid=No(),this.name="",this.type="Material",this.blending=hs,this.side=Yi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Wc,this.blendDst=jc,this.blendEquation=dr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new He(0,0,0),this.blendAlpha=0,this.depthFunc=hl,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=cp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Pr,this.stencilZFail=Pr,this.stencilZPass=Pr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==hs&&(i.blending=this.blending),this.side!==Yi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Wc&&(i.blendSrc=this.blendSrc),this.blendDst!==jc&&(i.blendDst=this.blendDst),this.blendEquation!==dr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==hl&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==cp&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Pr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Pr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Pr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(n){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class G_ extends er{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new He(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=ef,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const _t=new k,fa=new qe;class bn{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=dp,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Ui,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)fa.fromBufferAttribute(this,n),fa.applyMatrix3(e),this.setXY(n,fa.x,fa.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)_t.fromBufferAttribute(this,n),_t.applyMatrix3(e),this.setXYZ(n,_t.x,_t.y,_t.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)_t.fromBufferAttribute(this,n),_t.applyMatrix4(e),this.setXYZ(n,_t.x,_t.y,_t.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)_t.fromBufferAttribute(this,n),_t.applyNormalMatrix(e),this.setXYZ(n,_t.x,_t.y,_t.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)_t.fromBufferAttribute(this,n),_t.transformDirection(e),this.setXYZ(n,_t.x,_t.y,_t.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=Gs(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=Jt(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Gs(n,this.array)),n}setX(e,n){return this.normalized&&(n=Jt(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Gs(n,this.array)),n}setY(e,n){return this.normalized&&(n=Jt(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Gs(n,this.array)),n}setZ(e,n){return this.normalized&&(n=Jt(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Gs(n,this.array)),n}setW(e,n){return this.normalized&&(n=Jt(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=Jt(n,this.array),i=Jt(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=Jt(n,this.array),i=Jt(i,this.array),r=Jt(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=Jt(n,this.array),i=Jt(i,this.array),r=Jt(r,this.array),s=Jt(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==dp&&(e.usage=this.usage),e}}class V_ extends bn{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class W_ extends bn{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class Wn extends bn{constructor(e,n,i){super(new Float32Array(e),n,i)}}let TS=0;const Sn=new pt,Bu=new Mt,zr=new k,fn=new Ji,Xs=new Ji,Rt=new k;class Xn extends Ps{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:TS++}),this.uuid=No(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(F_(e)?W_:V_)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new We().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Sn.makeRotationFromQuaternion(e),this.applyMatrix4(Sn),this}rotateX(e){return Sn.makeRotationX(e),this.applyMatrix4(Sn),this}rotateY(e){return Sn.makeRotationY(e),this.applyMatrix4(Sn),this}rotateZ(e){return Sn.makeRotationZ(e),this.applyMatrix4(Sn),this}translate(e,n,i){return Sn.makeTranslation(e,n,i),this.applyMatrix4(Sn),this}scale(e,n,i){return Sn.makeScale(e,n,i),this.applyMatrix4(Sn),this}lookAt(e){return Bu.lookAt(e),Bu.updateMatrix(),this.applyMatrix4(Bu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(zr).negate(),this.translate(zr.x,zr.y,zr.z),this}setFromPoints(e){const n=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];n.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Wn(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ji);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new k(-1/0,-1/0,-1/0),new k(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];fn.setFromBufferAttribute(s),this.morphTargetsRelative?(Rt.addVectors(this.boundingBox.min,fn.min),this.boundingBox.expandByPoint(Rt),Rt.addVectors(this.boundingBox.max,fn.max),this.boundingBox.expandByPoint(Rt)):(this.boundingBox.expandByPoint(fn.min),this.boundingBox.expandByPoint(fn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Io);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new k,1/0);return}if(e){const i=this.boundingSphere.center;if(fn.setFromBufferAttribute(e),n)for(let s=0,o=n.length;s<o;s++){const a=n[s];Xs.setFromBufferAttribute(a),this.morphTargetsRelative?(Rt.addVectors(fn.min,Xs.min),fn.expandByPoint(Rt),Rt.addVectors(fn.max,Xs.max),fn.expandByPoint(Rt)):(fn.expandByPoint(Xs.min),fn.expandByPoint(Xs.max))}fn.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)Rt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Rt));if(n)for(let s=0,o=n.length;s<o;s++){const a=n[s],l=this.morphTargetsRelative;for(let u=0,f=a.count;u<f;u++)Rt.fromBufferAttribute(a,u),l&&(zr.fromBufferAttribute(e,u),Rt.add(zr)),r=Math.max(r,i.distanceToSquared(Rt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,r=n.position.array,s=n.normal.array,o=n.uv.array,a=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new bn(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,u=[],f=[];for(let T=0;T<a;T++)u[T]=new k,f[T]=new k;const d=new k,h=new k,p=new k,v=new qe,x=new qe,m=new qe,c=new k,_=new k;function g(T,B,z){d.fromArray(r,T*3),h.fromArray(r,B*3),p.fromArray(r,z*3),v.fromArray(o,T*2),x.fromArray(o,B*2),m.fromArray(o,z*2),h.sub(d),p.sub(d),x.sub(v),m.sub(v);const Q=1/(x.x*m.y-m.x*x.y);isFinite(Q)&&(c.copy(h).multiplyScalar(m.y).addScaledVector(p,-x.y).multiplyScalar(Q),_.copy(p).multiplyScalar(x.x).addScaledVector(h,-m.x).multiplyScalar(Q),u[T].add(c),u[B].add(c),u[z].add(c),f[T].add(_),f[B].add(_),f[z].add(_))}let S=this.groups;S.length===0&&(S=[{start:0,count:i.length}]);for(let T=0,B=S.length;T<B;++T){const z=S[T],Q=z.start,L=z.count;for(let F=Q,$=Q+L;F<$;F+=3)g(i[F+0],i[F+1],i[F+2])}const R=new k,C=new k,A=new k,U=new k;function M(T){A.fromArray(s,T*3),U.copy(A);const B=u[T];R.copy(B),R.sub(A.multiplyScalar(A.dot(B))).normalize(),C.crossVectors(U,B);const Q=C.dot(f[T])<0?-1:1;l[T*4]=R.x,l[T*4+1]=R.y,l[T*4+2]=R.z,l[T*4+3]=Q}for(let T=0,B=S.length;T<B;++T){const z=S[T],Q=z.start,L=z.count;for(let F=Q,$=Q+L;F<$;F+=3)M(i[F+0]),M(i[F+1]),M(i[F+2])}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new bn(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let h=0,p=i.count;h<p;h++)i.setXYZ(h,0,0,0);const r=new k,s=new k,o=new k,a=new k,l=new k,u=new k,f=new k,d=new k;if(e)for(let h=0,p=e.count;h<p;h+=3){const v=e.getX(h+0),x=e.getX(h+1),m=e.getX(h+2);r.fromBufferAttribute(n,v),s.fromBufferAttribute(n,x),o.fromBufferAttribute(n,m),f.subVectors(o,s),d.subVectors(r,s),f.cross(d),a.fromBufferAttribute(i,v),l.fromBufferAttribute(i,x),u.fromBufferAttribute(i,m),a.add(f),l.add(f),u.add(f),i.setXYZ(v,a.x,a.y,a.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(m,u.x,u.y,u.z)}else for(let h=0,p=n.count;h<p;h+=3)r.fromBufferAttribute(n,h+0),s.fromBufferAttribute(n,h+1),o.fromBufferAttribute(n,h+2),f.subVectors(o,s),d.subVectors(r,s),f.cross(d),i.setXYZ(h+0,f.x,f.y,f.z),i.setXYZ(h+1,f.x,f.y,f.z),i.setXYZ(h+2,f.x,f.y,f.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Rt.fromBufferAttribute(e,n),Rt.normalize(),e.setXYZ(n,Rt.x,Rt.y,Rt.z)}toNonIndexed(){function e(a,l){const u=a.array,f=a.itemSize,d=a.normalized,h=new u.constructor(l.length*f);let p=0,v=0;for(let x=0,m=l.length;x<m;x++){a.isInterleavedBufferAttribute?p=l[x]*a.data.stride+a.offset:p=l[x]*f;for(let c=0;c<f;c++)h[v++]=u[p++]}return new bn(h,f,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Xn,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],u=e(l,i);n.setAttribute(a,u)}const s=this.morphAttributes;for(const a in s){const l=[],u=s[a];for(let f=0,d=u.length;f<d;f++){const h=u[f],p=e(h,i);l.push(p)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const u=o[a];n.addGroup(u.start,u.count,u.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const u in l)l[u]!==void 0&&(e[u]=l[u]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const u=i[l];e.data.attributes[l]=u.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const u=this.morphAttributes[l],f=[];for(let d=0,h=u.length;d<h;d++){const p=u[d];f.push(p.toJSON(e.data))}f.length>0&&(r[l]=f,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const u in r){const f=r[u];this.setAttribute(u,f.clone(n))}const s=e.morphAttributes;for(const u in s){const f=[],d=s[u];for(let h=0,p=d.length;h<p;h++)f.push(d[h].clone(n));this.morphAttributes[u]=f}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let u=0,f=o.length;u<f;u++){const d=o[u];this.addGroup(d.start,d.count,d.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Tp=new pt,sr=new sf,ha=new Io,Ap=new k,Hr=new k,Gr=new k,Vr=new k,zu=new k,pa=new k,ma=new qe,ga=new qe,_a=new qe,Cp=new k,Rp=new k,bp=new k,va=new k,xa=new k;class Cn extends Mt{constructor(e=new Xn,n=new G_){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){pa.set(0,0,0);for(let l=0,u=s.length;l<u;l++){const f=a[l],d=s[l];f!==0&&(zu.fromBufferAttribute(d,e),o?pa.addScaledVector(zu,f):pa.addScaledVector(zu.sub(n),f))}n.add(pa)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),ha.copy(i.boundingSphere),ha.applyMatrix4(s),sr.copy(e.ray).recast(e.near),!(ha.containsPoint(sr.origin)===!1&&(sr.intersectSphere(ha,Ap)===null||sr.origin.distanceToSquared(Ap)>(e.far-e.near)**2))&&(Tp.copy(s).invert(),sr.copy(e.ray).applyMatrix4(Tp),!(i.boundingBox!==null&&sr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,sr)))}_computeIntersections(e,n,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,u=s.attributes.uv,f=s.attributes.uv1,d=s.attributes.normal,h=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let v=0,x=h.length;v<x;v++){const m=h[v],c=o[m.materialIndex],_=Math.max(m.start,p.start),g=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let S=_,R=g;S<R;S+=3){const C=a.getX(S),A=a.getX(S+1),U=a.getX(S+2);r=ya(this,c,e,i,u,f,d,C,A,U),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const v=Math.max(0,p.start),x=Math.min(a.count,p.start+p.count);for(let m=v,c=x;m<c;m+=3){const _=a.getX(m),g=a.getX(m+1),S=a.getX(m+2);r=ya(this,o,e,i,u,f,d,_,g,S),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let v=0,x=h.length;v<x;v++){const m=h[v],c=o[m.materialIndex],_=Math.max(m.start,p.start),g=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let S=_,R=g;S<R;S+=3){const C=S,A=S+1,U=S+2;r=ya(this,c,e,i,u,f,d,C,A,U),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const v=Math.max(0,p.start),x=Math.min(l.count,p.start+p.count);for(let m=v,c=x;m<c;m+=3){const _=m,g=m+1,S=m+2;r=ya(this,o,e,i,u,f,d,_,g,S),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}}}function AS(t,e,n,i,r,s,o,a){let l;if(e.side===on?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===Yi,a),l===null)return null;xa.copy(a),xa.applyMatrix4(t.matrixWorld);const u=n.ray.origin.distanceTo(xa);return u<n.near||u>n.far?null:{distance:u,point:xa.clone(),object:t}}function ya(t,e,n,i,r,s,o,a,l,u){t.getVertexPosition(a,Hr),t.getVertexPosition(l,Gr),t.getVertexPosition(u,Vr);const f=AS(t,e,n,i,Hr,Gr,Vr,va);if(f){r&&(ma.fromBufferAttribute(r,a),ga.fromBufferAttribute(r,l),_a.fromBufferAttribute(r,u),f.uv=Bn.getInterpolation(va,Hr,Gr,Vr,ma,ga,_a,new qe)),s&&(ma.fromBufferAttribute(s,a),ga.fromBufferAttribute(s,l),_a.fromBufferAttribute(s,u),f.uv1=Bn.getInterpolation(va,Hr,Gr,Vr,ma,ga,_a,new qe),f.uv2=f.uv1),o&&(Cp.fromBufferAttribute(o,a),Rp.fromBufferAttribute(o,l),bp.fromBufferAttribute(o,u),f.normal=Bn.getInterpolation(va,Hr,Gr,Vr,Cp,Rp,bp,new k),f.normal.dot(i.direction)>0&&f.normal.multiplyScalar(-1));const d={a,b:l,c:u,normal:new k,materialIndex:0};Bn.getNormal(Hr,Gr,Vr,d.normal),f.face=d}return f}class Fo extends Xn{constructor(e=1,n=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],u=[],f=[],d=[];let h=0,p=0;v("z","y","x",-1,-1,i,n,e,o,s,0),v("z","y","x",1,-1,i,n,-e,o,s,1),v("x","z","y",1,1,e,i,n,r,o,2),v("x","z","y",1,-1,e,i,-n,r,o,3),v("x","y","z",1,-1,e,n,i,r,s,4),v("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Wn(u,3)),this.setAttribute("normal",new Wn(f,3)),this.setAttribute("uv",new Wn(d,2));function v(x,m,c,_,g,S,R,C,A,U,M){const T=S/A,B=R/U,z=S/2,Q=R/2,L=C/2,F=A+1,$=U+1;let Y=0,P=0;const O=new k;for(let j=0;j<$;j++){const K=j*B-Q;for(let oe=0;oe<F;oe++){const q=oe*T-z;O[x]=q*_,O[m]=K*g,O[c]=L,u.push(O.x,O.y,O.z),O[x]=0,O[m]=0,O[c]=C>0?1:-1,f.push(O.x,O.y,O.z),d.push(oe/A),d.push(1-j/U),Y+=1}}for(let j=0;j<U;j++)for(let K=0;K<A;K++){const oe=h+K+F*j,q=h+K+F*(j+1),Z=h+(K+1)+F*(j+1),ce=h+(K+1)+F*j;l.push(oe,q,ce),l.push(q,Z,ce),P+=6}a.addGroup(p,P,M),p+=P,h+=Y}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Fo(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function As(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function Xt(t){const e={};for(let n=0;n<t.length;n++){const i=As(t[n]);for(const r in i)e[r]=i[r]}return e}function CS(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function j_(t){return t.getRenderTarget()===null?t.outputColorSpace:Qe.workingColorSpace}const RS={clone:As,merge:Xt};var bS=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,LS=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Cr extends er{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=bS,this.fragmentShader=LS,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=As(e.uniforms),this.uniformsGroups=CS(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?n.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[r]={type:"m4",value:o.toArray()}:n.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class X_ extends Mt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new pt,this.projectionMatrix=new pt,this.projectionMatrixInverse=new pt,this.coordinateSystem=hi}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class pn extends X_{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Zc*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ba*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Zc*2*Math.atan(Math.tan(Ba*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,n,i,r,s,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Ba*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,u=o.fullHeight;s+=o.offsetX*r/l,n-=o.offsetY*i/u,r*=o.width/l,i*=o.height/u}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Wr=-90,jr=1;class PS extends Mt{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new pn(Wr,jr,e,n);r.layers=this.layers,this.add(r);const s=new pn(Wr,jr,e,n);s.layers=this.layers,this.add(s);const o=new pn(Wr,jr,e,n);o.layers=this.layers,this.add(o);const a=new pn(Wr,jr,e,n);a.layers=this.layers,this.add(a);const l=new pn(Wr,jr,e,n);l.layers=this.layers,this.add(l);const u=new pn(Wr,jr,e,n);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,o,a,l]=n;for(const u of n)this.remove(u);if(e===hi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===_l)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const u of n)this.add(u),u.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,u,f]=this.children,d=e.getRenderTarget(),h=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),v=e.xr.enabled;e.xr.enabled=!1;const x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,s),e.setRenderTarget(i,1,r),e.render(n,o),e.setRenderTarget(i,2,r),e.render(n,a),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,u),i.texture.generateMipmaps=x,e.setRenderTarget(i,5,r),e.render(n,f),e.setRenderTarget(d,h,p),e.xr.enabled=v,i.texture.needsPMREMUpdate=!0}}class $_ extends an{constructor(e,n,i,r,s,o,a,l,u,f){e=e!==void 0?e:[],n=n!==void 0?n:Es,super(e,n,i,r,s,o,a,l,u,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class DS extends Ar{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];n.encoding!==void 0&&(oo("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===yr?Ut:Tn),this.texture=new $_(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:wn}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Fo(5,5,5),s=new Cr({name:"CubemapFromEquirect",uniforms:As(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:on,blending:Wi});s.uniforms.tEquirect.value=n;const o=new Cn(r,s),a=n.minFilter;return n.minFilter===To&&(n.minFilter=wn),new PS(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,r);e.setRenderTarget(s)}}const Hu=new k,NS=new k,US=new We;class ur{constructor(e=new k(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=Hu.subVectors(i,n).cross(NS.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(Hu),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||US.getNormalMatrix(e),r=this.coplanarPoint(Hu).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const or=new Io,Sa=new k;class of{constructor(e=new ur,n=new ur,i=new ur,r=new ur,s=new ur,o=new ur){this.planes=[e,n,i,r,s,o]}set(e,n,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=hi){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],u=r[4],f=r[5],d=r[6],h=r[7],p=r[8],v=r[9],x=r[10],m=r[11],c=r[12],_=r[13],g=r[14],S=r[15];if(i[0].setComponents(l-s,h-u,m-p,S-c).normalize(),i[1].setComponents(l+s,h+u,m+p,S+c).normalize(),i[2].setComponents(l+o,h+f,m+v,S+_).normalize(),i[3].setComponents(l-o,h-f,m-v,S-_).normalize(),i[4].setComponents(l-a,h-d,m-x,S-g).normalize(),n===hi)i[5].setComponents(l+a,h+d,m+x,S+g).normalize();else if(n===_l)i[5].setComponents(a,d,x,g).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),or.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),or.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(or)}intersectsSprite(e){return or.center.set(0,0,0),or.radius=.7071067811865476,or.applyMatrix4(e.matrixWorld),this.intersectsSphere(or)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(Sa.x=r.normal.x>0?e.max.x:e.min.x,Sa.y=r.normal.y>0?e.max.y:e.min.y,Sa.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Sa)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function q_(){let t=null,e=!1,n=null,i=null;function r(s,o){n(s,o),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function IS(t,e){const n=e.isWebGL2,i=new WeakMap;function r(u,f){const d=u.array,h=u.usage,p=d.byteLength,v=t.createBuffer();t.bindBuffer(f,v),t.bufferData(f,d,h),u.onUploadCallback();let x;if(d instanceof Float32Array)x=t.FLOAT;else if(d instanceof Uint16Array)if(u.isFloat16BufferAttribute)if(n)x=t.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else x=t.UNSIGNED_SHORT;else if(d instanceof Int16Array)x=t.SHORT;else if(d instanceof Uint32Array)x=t.UNSIGNED_INT;else if(d instanceof Int32Array)x=t.INT;else if(d instanceof Int8Array)x=t.BYTE;else if(d instanceof Uint8Array)x=t.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)x=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:v,type:x,bytesPerElement:d.BYTES_PER_ELEMENT,version:u.version,size:p}}function s(u,f,d){const h=f.array,p=f._updateRange,v=f.updateRanges;if(t.bindBuffer(d,u),p.count===-1&&v.length===0&&t.bufferSubData(d,0,h),v.length!==0){for(let x=0,m=v.length;x<m;x++){const c=v[x];n?t.bufferSubData(d,c.start*h.BYTES_PER_ELEMENT,h,c.start,c.count):t.bufferSubData(d,c.start*h.BYTES_PER_ELEMENT,h.subarray(c.start,c.start+c.count))}f.clearUpdateRanges()}p.count!==-1&&(n?t.bufferSubData(d,p.offset*h.BYTES_PER_ELEMENT,h,p.offset,p.count):t.bufferSubData(d,p.offset*h.BYTES_PER_ELEMENT,h.subarray(p.offset,p.offset+p.count)),p.count=-1),f.onUploadCallback()}function o(u){return u.isInterleavedBufferAttribute&&(u=u.data),i.get(u)}function a(u){u.isInterleavedBufferAttribute&&(u=u.data);const f=i.get(u);f&&(t.deleteBuffer(f.buffer),i.delete(u))}function l(u,f){if(u.isGLBufferAttribute){const h=i.get(u);(!h||h.version<u.version)&&i.set(u,{buffer:u.buffer,type:u.type,bytesPerElement:u.elementSize,version:u.version});return}u.isInterleavedBufferAttribute&&(u=u.data);const d=i.get(u);if(d===void 0)i.set(u,r(u,f));else if(d.version<u.version){if(d.size!==u.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(d.buffer,u,f),d.version=u.version}}return{get:o,remove:a,update:l}}class af extends Xn{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,o=n/2,a=Math.floor(i),l=Math.floor(r),u=a+1,f=l+1,d=e/a,h=n/l,p=[],v=[],x=[],m=[];for(let c=0;c<f;c++){const _=c*h-o;for(let g=0;g<u;g++){const S=g*d-s;v.push(S,-_,0),x.push(0,0,1),m.push(g/a),m.push(1-c/l)}}for(let c=0;c<l;c++)for(let _=0;_<a;_++){const g=_+u*c,S=_+u*(c+1),R=_+1+u*(c+1),C=_+1+u*c;p.push(g,S,C),p.push(S,R,C)}this.setIndex(p),this.setAttribute("position",new Wn(v,3)),this.setAttribute("normal",new Wn(x,3)),this.setAttribute("uv",new Wn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new af(e.width,e.height,e.widthSegments,e.heightSegments)}}var FS=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,OS=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,kS=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,BS=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,zS=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,HS=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,GS=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,VS=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,WS=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,jS=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,XS=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,$S=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,qS=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,YS=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,KS=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,ZS=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,QS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,JS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,eM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,tM=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,nM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,iM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,rM=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,sM=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,oM=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,aM=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,lM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,uM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,cM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,dM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,fM="gl_FragColor = linearToOutputTexel( gl_FragColor );",hM=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,pM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,mM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,gM=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,_M=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,vM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,xM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,yM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,SM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,MM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,EM=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,wM=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,TM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,AM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,CM=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,RM=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,bM=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,LM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,PM=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,DM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,NM=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,UM=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,IM=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,FM=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,OM=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,kM=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,BM=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,zM=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,HM=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,GM=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,VM=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,WM=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,jM=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,XM=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,$M=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,qM=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,YM=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,KM=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,ZM=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,QM=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,JM=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,eE=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,tE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,nE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,iE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,rE=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,sE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,oE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,aE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,lE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,uE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,cE=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,dE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,fE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,hE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,pE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,mE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,gE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,_E=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,vE=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,xE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,yE=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,SE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,ME=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,EE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,wE=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,TE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,AE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,CE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,RE=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color *= toneMappingExposure;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,bE=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,LE=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,PE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,DE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,NE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,UE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const IE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,FE=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,OE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,kE=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,BE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,zE=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,HE=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,GE=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,VE=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,WE=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,jE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,XE=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$E=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,qE=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,YE=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,KE=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ZE=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,QE=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,JE=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,ew=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,tw=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,nw=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,iw=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,rw=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,sw=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,ow=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,aw=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,lw=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,uw=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,cw=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,dw=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,fw=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,hw=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,pw=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ke={alphahash_fragment:FS,alphahash_pars_fragment:OS,alphamap_fragment:kS,alphamap_pars_fragment:BS,alphatest_fragment:zS,alphatest_pars_fragment:HS,aomap_fragment:GS,aomap_pars_fragment:VS,batching_pars_vertex:WS,batching_vertex:jS,begin_vertex:XS,beginnormal_vertex:$S,bsdfs:qS,iridescence_fragment:YS,bumpmap_pars_fragment:KS,clipping_planes_fragment:ZS,clipping_planes_pars_fragment:QS,clipping_planes_pars_vertex:JS,clipping_planes_vertex:eM,color_fragment:tM,color_pars_fragment:nM,color_pars_vertex:iM,color_vertex:rM,common:sM,cube_uv_reflection_fragment:oM,defaultnormal_vertex:aM,displacementmap_pars_vertex:lM,displacementmap_vertex:uM,emissivemap_fragment:cM,emissivemap_pars_fragment:dM,colorspace_fragment:fM,colorspace_pars_fragment:hM,envmap_fragment:pM,envmap_common_pars_fragment:mM,envmap_pars_fragment:gM,envmap_pars_vertex:_M,envmap_physical_pars_fragment:bM,envmap_vertex:vM,fog_vertex:xM,fog_pars_vertex:yM,fog_fragment:SM,fog_pars_fragment:MM,gradientmap_pars_fragment:EM,lightmap_fragment:wM,lightmap_pars_fragment:TM,lights_lambert_fragment:AM,lights_lambert_pars_fragment:CM,lights_pars_begin:RM,lights_toon_fragment:LM,lights_toon_pars_fragment:PM,lights_phong_fragment:DM,lights_phong_pars_fragment:NM,lights_physical_fragment:UM,lights_physical_pars_fragment:IM,lights_fragment_begin:FM,lights_fragment_maps:OM,lights_fragment_end:kM,logdepthbuf_fragment:BM,logdepthbuf_pars_fragment:zM,logdepthbuf_pars_vertex:HM,logdepthbuf_vertex:GM,map_fragment:VM,map_pars_fragment:WM,map_particle_fragment:jM,map_particle_pars_fragment:XM,metalnessmap_fragment:$M,metalnessmap_pars_fragment:qM,morphcolor_vertex:YM,morphnormal_vertex:KM,morphtarget_pars_vertex:ZM,morphtarget_vertex:QM,normal_fragment_begin:JM,normal_fragment_maps:eE,normal_pars_fragment:tE,normal_pars_vertex:nE,normal_vertex:iE,normalmap_pars_fragment:rE,clearcoat_normal_fragment_begin:sE,clearcoat_normal_fragment_maps:oE,clearcoat_pars_fragment:aE,iridescence_pars_fragment:lE,opaque_fragment:uE,packing:cE,premultiplied_alpha_fragment:dE,project_vertex:fE,dithering_fragment:hE,dithering_pars_fragment:pE,roughnessmap_fragment:mE,roughnessmap_pars_fragment:gE,shadowmap_pars_fragment:_E,shadowmap_pars_vertex:vE,shadowmap_vertex:xE,shadowmask_pars_fragment:yE,skinbase_vertex:SE,skinning_pars_vertex:ME,skinning_vertex:EE,skinnormal_vertex:wE,specularmap_fragment:TE,specularmap_pars_fragment:AE,tonemapping_fragment:CE,tonemapping_pars_fragment:RE,transmission_fragment:bE,transmission_pars_fragment:LE,uv_pars_fragment:PE,uv_pars_vertex:DE,uv_vertex:NE,worldpos_vertex:UE,background_vert:IE,background_frag:FE,backgroundCube_vert:OE,backgroundCube_frag:kE,cube_vert:BE,cube_frag:zE,depth_vert:HE,depth_frag:GE,distanceRGBA_vert:VE,distanceRGBA_frag:WE,equirect_vert:jE,equirect_frag:XE,linedashed_vert:$E,linedashed_frag:qE,meshbasic_vert:YE,meshbasic_frag:KE,meshlambert_vert:ZE,meshlambert_frag:QE,meshmatcap_vert:JE,meshmatcap_frag:ew,meshnormal_vert:tw,meshnormal_frag:nw,meshphong_vert:iw,meshphong_frag:rw,meshphysical_vert:sw,meshphysical_frag:ow,meshtoon_vert:aw,meshtoon_frag:lw,points_vert:uw,points_frag:cw,shadow_vert:dw,shadow_frag:fw,sprite_vert:hw,sprite_frag:pw},ue={common:{diffuse:{value:new He(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new We}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new We}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new We}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new We},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new We},normalScale:{value:new qe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new We},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new We}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new We}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new We}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new He(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new He(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0},uvTransform:{value:new We}},sprite:{diffuse:{value:new He(16777215)},opacity:{value:1},center:{value:new qe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}}},Kn={basic:{uniforms:Xt([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.fog]),vertexShader:ke.meshbasic_vert,fragmentShader:ke.meshbasic_frag},lambert:{uniforms:Xt([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,ue.lights,{emissive:{value:new He(0)}}]),vertexShader:ke.meshlambert_vert,fragmentShader:ke.meshlambert_frag},phong:{uniforms:Xt([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,ue.lights,{emissive:{value:new He(0)},specular:{value:new He(1118481)},shininess:{value:30}}]),vertexShader:ke.meshphong_vert,fragmentShader:ke.meshphong_frag},standard:{uniforms:Xt([ue.common,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.roughnessmap,ue.metalnessmap,ue.fog,ue.lights,{emissive:{value:new He(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ke.meshphysical_vert,fragmentShader:ke.meshphysical_frag},toon:{uniforms:Xt([ue.common,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.gradientmap,ue.fog,ue.lights,{emissive:{value:new He(0)}}]),vertexShader:ke.meshtoon_vert,fragmentShader:ke.meshtoon_frag},matcap:{uniforms:Xt([ue.common,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,{matcap:{value:null}}]),vertexShader:ke.meshmatcap_vert,fragmentShader:ke.meshmatcap_frag},points:{uniforms:Xt([ue.points,ue.fog]),vertexShader:ke.points_vert,fragmentShader:ke.points_frag},dashed:{uniforms:Xt([ue.common,ue.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ke.linedashed_vert,fragmentShader:ke.linedashed_frag},depth:{uniforms:Xt([ue.common,ue.displacementmap]),vertexShader:ke.depth_vert,fragmentShader:ke.depth_frag},normal:{uniforms:Xt([ue.common,ue.bumpmap,ue.normalmap,ue.displacementmap,{opacity:{value:1}}]),vertexShader:ke.meshnormal_vert,fragmentShader:ke.meshnormal_frag},sprite:{uniforms:Xt([ue.sprite,ue.fog]),vertexShader:ke.sprite_vert,fragmentShader:ke.sprite_frag},background:{uniforms:{uvTransform:{value:new We},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ke.background_vert,fragmentShader:ke.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:ke.backgroundCube_vert,fragmentShader:ke.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ke.cube_vert,fragmentShader:ke.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ke.equirect_vert,fragmentShader:ke.equirect_frag},distanceRGBA:{uniforms:Xt([ue.common,ue.displacementmap,{referencePosition:{value:new k},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ke.distanceRGBA_vert,fragmentShader:ke.distanceRGBA_frag},shadow:{uniforms:Xt([ue.lights,ue.fog,{color:{value:new He(0)},opacity:{value:1}}]),vertexShader:ke.shadow_vert,fragmentShader:ke.shadow_frag}};Kn.physical={uniforms:Xt([Kn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new We},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new We},clearcoatNormalScale:{value:new qe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new We},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new We},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new We},sheen:{value:0},sheenColor:{value:new He(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new We},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new We},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new We},transmissionSamplerSize:{value:new qe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new We},attenuationDistance:{value:0},attenuationColor:{value:new He(0)},specularColor:{value:new He(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new We},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new We},anisotropyVector:{value:new qe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new We}}]),vertexShader:ke.meshphysical_vert,fragmentShader:ke.meshphysical_frag};const Ma={r:0,b:0,g:0};function mw(t,e,n,i,r,s,o){const a=new He(0);let l=s===!0?0:1,u,f,d=null,h=0,p=null;function v(m,c){let _=!1,g=c.isScene===!0?c.background:null;g&&g.isTexture&&(g=(c.backgroundBlurriness>0?n:e).get(g)),g===null?x(a,l):g&&g.isColor&&(x(g,1),_=!0);const S=t.xr.getEnvironmentBlendMode();S==="additive"?i.buffers.color.setClear(0,0,0,1,o):S==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(t.autoClear||_)&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),g&&(g.isCubeTexture||g.mapping===Fl)?(f===void 0&&(f=new Cn(new Fo(1,1,1),new Cr({name:"BackgroundCubeMaterial",uniforms:As(Kn.backgroundCube.uniforms),vertexShader:Kn.backgroundCube.vertexShader,fragmentShader:Kn.backgroundCube.fragmentShader,side:on,depthTest:!1,depthWrite:!1,fog:!1})),f.geometry.deleteAttribute("normal"),f.geometry.deleteAttribute("uv"),f.onBeforeRender=function(R,C,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(f.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(f)),f.material.uniforms.envMap.value=g,f.material.uniforms.flipEnvMap.value=g.isCubeTexture&&g.isRenderTargetTexture===!1?-1:1,f.material.uniforms.backgroundBlurriness.value=c.backgroundBlurriness,f.material.uniforms.backgroundIntensity.value=c.backgroundIntensity,f.material.toneMapped=Qe.getTransfer(g.colorSpace)!==rt,(d!==g||h!==g.version||p!==t.toneMapping)&&(f.material.needsUpdate=!0,d=g,h=g.version,p=t.toneMapping),f.layers.enableAll(),m.unshift(f,f.geometry,f.material,0,0,null)):g&&g.isTexture&&(u===void 0&&(u=new Cn(new af(2,2),new Cr({name:"BackgroundMaterial",uniforms:As(Kn.background.uniforms),vertexShader:Kn.background.vertexShader,fragmentShader:Kn.background.fragmentShader,side:Yi,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(u)),u.material.uniforms.t2D.value=g,u.material.uniforms.backgroundIntensity.value=c.backgroundIntensity,u.material.toneMapped=Qe.getTransfer(g.colorSpace)!==rt,g.matrixAutoUpdate===!0&&g.updateMatrix(),u.material.uniforms.uvTransform.value.copy(g.matrix),(d!==g||h!==g.version||p!==t.toneMapping)&&(u.material.needsUpdate=!0,d=g,h=g.version,p=t.toneMapping),u.layers.enableAll(),m.unshift(u,u.geometry,u.material,0,0,null))}function x(m,c){m.getRGB(Ma,j_(t)),i.buffers.color.setClear(Ma.r,Ma.g,Ma.b,c,o)}return{getClearColor:function(){return a},setClearColor:function(m,c=1){a.set(m),l=c,x(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,x(a,l)},render:v}}function gw(t,e,n,i){const r=t.getParameter(t.MAX_VERTEX_ATTRIBS),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),o=i.isWebGL2||s!==null,a={},l=m(null);let u=l,f=!1;function d(L,F,$,Y,P){let O=!1;if(o){const j=x(Y,$,F);u!==j&&(u=j,p(u.object)),O=c(L,Y,$,P),O&&_(L,Y,$,P)}else{const j=F.wireframe===!0;(u.geometry!==Y.id||u.program!==$.id||u.wireframe!==j)&&(u.geometry=Y.id,u.program=$.id,u.wireframe=j,O=!0)}P!==null&&n.update(P,t.ELEMENT_ARRAY_BUFFER),(O||f)&&(f=!1,U(L,F,$,Y),P!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,n.get(P).buffer))}function h(){return i.isWebGL2?t.createVertexArray():s.createVertexArrayOES()}function p(L){return i.isWebGL2?t.bindVertexArray(L):s.bindVertexArrayOES(L)}function v(L){return i.isWebGL2?t.deleteVertexArray(L):s.deleteVertexArrayOES(L)}function x(L,F,$){const Y=$.wireframe===!0;let P=a[L.id];P===void 0&&(P={},a[L.id]=P);let O=P[F.id];O===void 0&&(O={},P[F.id]=O);let j=O[Y];return j===void 0&&(j=m(h()),O[Y]=j),j}function m(L){const F=[],$=[],Y=[];for(let P=0;P<r;P++)F[P]=0,$[P]=0,Y[P]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:$,attributeDivisors:Y,object:L,attributes:{},index:null}}function c(L,F,$,Y){const P=u.attributes,O=F.attributes;let j=0;const K=$.getAttributes();for(const oe in K)if(K[oe].location>=0){const Z=P[oe];let ce=O[oe];if(ce===void 0&&(oe==="instanceMatrix"&&L.instanceMatrix&&(ce=L.instanceMatrix),oe==="instanceColor"&&L.instanceColor&&(ce=L.instanceColor)),Z===void 0||Z.attribute!==ce||ce&&Z.data!==ce.data)return!0;j++}return u.attributesNum!==j||u.index!==Y}function _(L,F,$,Y){const P={},O=F.attributes;let j=0;const K=$.getAttributes();for(const oe in K)if(K[oe].location>=0){let Z=O[oe];Z===void 0&&(oe==="instanceMatrix"&&L.instanceMatrix&&(Z=L.instanceMatrix),oe==="instanceColor"&&L.instanceColor&&(Z=L.instanceColor));const ce={};ce.attribute=Z,Z&&Z.data&&(ce.data=Z.data),P[oe]=ce,j++}u.attributes=P,u.attributesNum=j,u.index=Y}function g(){const L=u.newAttributes;for(let F=0,$=L.length;F<$;F++)L[F]=0}function S(L){R(L,0)}function R(L,F){const $=u.newAttributes,Y=u.enabledAttributes,P=u.attributeDivisors;$[L]=1,Y[L]===0&&(t.enableVertexAttribArray(L),Y[L]=1),P[L]!==F&&((i.isWebGL2?t:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](L,F),P[L]=F)}function C(){const L=u.newAttributes,F=u.enabledAttributes;for(let $=0,Y=F.length;$<Y;$++)F[$]!==L[$]&&(t.disableVertexAttribArray($),F[$]=0)}function A(L,F,$,Y,P,O,j){j===!0?t.vertexAttribIPointer(L,F,$,P,O):t.vertexAttribPointer(L,F,$,Y,P,O)}function U(L,F,$,Y){if(i.isWebGL2===!1&&(L.isInstancedMesh||Y.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;g();const P=Y.attributes,O=$.getAttributes(),j=F.defaultAttributeValues;for(const K in O){const oe=O[K];if(oe.location>=0){let q=P[K];if(q===void 0&&(K==="instanceMatrix"&&L.instanceMatrix&&(q=L.instanceMatrix),K==="instanceColor"&&L.instanceColor&&(q=L.instanceColor)),q!==void 0){const Z=q.normalized,ce=q.itemSize,ge=n.get(q);if(ge===void 0)continue;const _e=ge.buffer,be=ge.type,Pe=ge.bytesPerElement,re=i.isWebGL2===!0&&(be===t.INT||be===t.UNSIGNED_INT||q.gpuType===C_);if(q.isInterleavedBufferAttribute){const Ce=q.data,H=Ce.stride,Tt=q.offset;if(Ce.isInstancedInterleavedBuffer){for(let Ee=0;Ee<oe.locationSize;Ee++)R(oe.location+Ee,Ce.meshPerAttribute);L.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=Ce.meshPerAttribute*Ce.count)}else for(let Ee=0;Ee<oe.locationSize;Ee++)S(oe.location+Ee);t.bindBuffer(t.ARRAY_BUFFER,_e);for(let Ee=0;Ee<oe.locationSize;Ee++)A(oe.location+Ee,ce/oe.locationSize,be,Z,H*Pe,(Tt+ce/oe.locationSize*Ee)*Pe,re)}else{if(q.isInstancedBufferAttribute){for(let Ce=0;Ce<oe.locationSize;Ce++)R(oe.location+Ce,q.meshPerAttribute);L.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=q.meshPerAttribute*q.count)}else for(let Ce=0;Ce<oe.locationSize;Ce++)S(oe.location+Ce);t.bindBuffer(t.ARRAY_BUFFER,_e);for(let Ce=0;Ce<oe.locationSize;Ce++)A(oe.location+Ce,ce/oe.locationSize,be,Z,ce*Pe,ce/oe.locationSize*Ce*Pe,re)}}else if(j!==void 0){const Z=j[K];if(Z!==void 0)switch(Z.length){case 2:t.vertexAttrib2fv(oe.location,Z);break;case 3:t.vertexAttrib3fv(oe.location,Z);break;case 4:t.vertexAttrib4fv(oe.location,Z);break;default:t.vertexAttrib1fv(oe.location,Z)}}}}C()}function M(){z();for(const L in a){const F=a[L];for(const $ in F){const Y=F[$];for(const P in Y)v(Y[P].object),delete Y[P];delete F[$]}delete a[L]}}function T(L){if(a[L.id]===void 0)return;const F=a[L.id];for(const $ in F){const Y=F[$];for(const P in Y)v(Y[P].object),delete Y[P];delete F[$]}delete a[L.id]}function B(L){for(const F in a){const $=a[F];if($[L.id]===void 0)continue;const Y=$[L.id];for(const P in Y)v(Y[P].object),delete Y[P];delete $[L.id]}}function z(){Q(),f=!0,u!==l&&(u=l,p(u.object))}function Q(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:z,resetDefaultState:Q,dispose:M,releaseStatesOfGeometry:T,releaseStatesOfProgram:B,initAttributes:g,enableAttribute:S,disableUnusedAttributes:C}}function _w(t,e,n,i){const r=i.isWebGL2;let s;function o(f){s=f}function a(f,d){t.drawArrays(s,f,d),n.update(d,s,1)}function l(f,d,h){if(h===0)return;let p,v;if(r)p=t,v="drawArraysInstanced";else if(p=e.get("ANGLE_instanced_arrays"),v="drawArraysInstancedANGLE",p===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[v](s,f,d,h),n.update(d,s,h)}function u(f,d,h){if(h===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let v=0;v<h;v++)this.render(f[v],d[v]);else{p.multiDrawArraysWEBGL(s,f,0,d,0,h);let v=0;for(let x=0;x<h;x++)v+=d[x];n.update(v,s,1)}}this.setMode=o,this.render=a,this.renderInstances=l,this.renderMultiDraw=u}function vw(t,e,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");i=t.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(A){if(A==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&t.constructor.name==="WebGL2RenderingContext";let a=n.precision!==void 0?n.precision:"highp";const l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const u=o||e.has("WEBGL_draw_buffers"),f=n.logarithmicDepthBuffer===!0,d=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),h=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),p=t.getParameter(t.MAX_TEXTURE_SIZE),v=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),x=t.getParameter(t.MAX_VERTEX_ATTRIBS),m=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),c=t.getParameter(t.MAX_VARYING_VECTORS),_=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),g=h>0,S=o||e.has("OES_texture_float"),R=g&&S,C=o?t.getParameter(t.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:u,getMaxAnisotropy:r,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:f,maxTextures:d,maxVertexTextures:h,maxTextureSize:p,maxCubemapSize:v,maxAttributes:x,maxVertexUniforms:m,maxVaryings:c,maxFragmentUniforms:_,vertexTextures:g,floatFragmentTextures:S,floatVertexTextures:R,maxSamples:C}}function xw(t){const e=this;let n=null,i=0,r=!1,s=!1;const o=new ur,a=new We,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){const p=d.length!==0||h||i!==0||r;return r=h,i=d.length,p},this.beginShadows=function(){s=!0,f(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,h){n=f(d,h,0)},this.setState=function(d,h,p){const v=d.clippingPlanes,x=d.clipIntersection,m=d.clipShadows,c=t.get(d);if(!r||v===null||v.length===0||s&&!m)s?f(null):u();else{const _=s?0:i,g=_*4;let S=c.clippingState||null;l.value=S,S=f(v,h,g,p);for(let R=0;R!==g;++R)S[R]=n[R];c.clippingState=S,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=_}};function u(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function f(d,h,p,v){const x=d!==null?d.length:0;let m=null;if(x!==0){if(m=l.value,v!==!0||m===null){const c=p+x*4,_=h.matrixWorldInverse;a.getNormalMatrix(_),(m===null||m.length<c)&&(m=new Float32Array(c));for(let g=0,S=p;g!==x;++g,S+=4)o.copy(d[g]).applyMatrix4(_,a),o.normal.toArray(m,S),m[S+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,m}}function yw(t){let e=new WeakMap;function n(o,a){return a===Xc?o.mapping=Es:a===$c&&(o.mapping=ws),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===Xc||a===$c)if(e.has(o)){const l=e.get(o).texture;return n(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const u=new DS(l.height/2);return u.fromEquirectangularTexture(t,o),e.set(o,u),o.addEventListener("dispose",r),n(u.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class Y_ extends X_{constructor(e=-1,n=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=u*this.view.offsetX,o=s+u*this.view.width,a-=f*this.view.offsetY,l=a-f*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const ss=4,Lp=[.125,.215,.35,.446,.526,.582],fr=20,Gu=new Y_,Pp=new He;let Vu=null,Wu=0,ju=0;const cr=(1+Math.sqrt(5))/2,Xr=1/cr,Dp=[new k(1,1,1),new k(-1,1,1),new k(1,1,-1),new k(-1,1,-1),new k(0,cr,Xr),new k(0,cr,-Xr),new k(Xr,0,cr),new k(-Xr,0,cr),new k(cr,Xr,0),new k(-cr,Xr,0)];class Np{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){Vu=this._renderer.getRenderTarget(),Wu=this._renderer.getActiveCubeFace(),ju=this._renderer.getActiveMipmapLevel(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),n>0&&this._blur(s,0,0,n),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Fp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ip(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Vu,Wu,ju),e.scissorTest=!1,Ea(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Es||e.mapping===ws?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Vu=this._renderer.getRenderTarget(),Wu=this._renderer.getActiveCubeFace(),ju=this._renderer.getActiveMipmapLevel();const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:wn,minFilter:wn,generateMipmaps:!1,type:Ao,format:Hn,colorSpace:xi,depthBuffer:!1},r=Up(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Up(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Sw(s)),this._blurMaterial=Mw(s,e,n)}return r}_compileMaterial(e){const n=new Cn(this._lodPlanes[0],e);this._renderer.compile(n,Gu)}_sceneToCubeUV(e,n,i,r){const a=new pn(90,1,n,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],f=this._renderer,d=f.autoClear,h=f.toneMapping;f.getClearColor(Pp),f.toneMapping=ji,f.autoClear=!1;const p=new G_({name:"PMREM.Background",side:on,depthWrite:!1,depthTest:!1}),v=new Cn(new Fo,p);let x=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,x=!0):(p.color.copy(Pp),x=!0);for(let c=0;c<6;c++){const _=c%3;_===0?(a.up.set(0,l[c],0),a.lookAt(u[c],0,0)):_===1?(a.up.set(0,0,l[c]),a.lookAt(0,u[c],0)):(a.up.set(0,l[c],0),a.lookAt(0,0,u[c]));const g=this._cubeSize;Ea(r,_*g,c>2?g:0,g,g),f.setRenderTarget(r),x&&f.render(v,a),f.render(e,a)}v.geometry.dispose(),v.material.dispose(),f.toneMapping=h,f.autoClear=d,e.background=m}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===Es||e.mapping===ws;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Fp()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ip());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new Cn(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Ea(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,Gu)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Dp[(r-1)%Dp.length];this._blur(e,r-1,r,s,o)}n.autoClear=i}_blur(e,n,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,o,a){const l=this._renderer,u=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const f=3,d=new Cn(this._lodPlanes[r],u),h=u.uniforms,p=this._sizeLods[i]-1,v=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*fr-1),x=s/v,m=isFinite(s)?1+Math.floor(f*x):fr;m>fr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${fr}`);const c=[];let _=0;for(let A=0;A<fr;++A){const U=A/x,M=Math.exp(-U*U/2);c.push(M),A===0?_+=M:A<m&&(_+=2*M)}for(let A=0;A<c.length;A++)c[A]=c[A]/_;h.envMap.value=e.texture,h.samples.value=m,h.weights.value=c,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:g}=this;h.dTheta.value=v,h.mipInt.value=g-i;const S=this._sizeLods[r],R=3*S*(r>g-ss?r-g+ss:0),C=4*(this._cubeSize-S);Ea(n,R,C,3*S,2*S),l.setRenderTarget(n),l.render(d,Gu)}}function Sw(t){const e=[],n=[],i=[];let r=t;const s=t-ss+1+Lp.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);n.push(a);let l=1/a;o>t-ss?l=Lp[o-t+ss-1]:o===0&&(l=0),i.push(l);const u=1/(a-2),f=-u,d=1+u,h=[f,f,d,f,d,d,f,f,d,d,f,d],p=6,v=6,x=3,m=2,c=1,_=new Float32Array(x*v*p),g=new Float32Array(m*v*p),S=new Float32Array(c*v*p);for(let C=0;C<p;C++){const A=C%3*2/3-1,U=C>2?0:-1,M=[A,U,0,A+2/3,U,0,A+2/3,U+1,0,A,U,0,A+2/3,U+1,0,A,U+1,0];_.set(M,x*v*C),g.set(h,m*v*C);const T=[C,C,C,C,C,C];S.set(T,c*v*C)}const R=new Xn;R.setAttribute("position",new bn(_,x)),R.setAttribute("uv",new bn(g,m)),R.setAttribute("faceIndex",new bn(S,c)),e.push(R),r>ss&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function Up(t,e,n){const i=new Ar(t,e,n);return i.texture.mapping=Fl,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Ea(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function Mw(t,e,n){const i=new Float32Array(fr),r=new k(0,1,0);return new Cr({name:"SphericalGaussianBlur",defines:{n:fr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:lf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Wi,depthTest:!1,depthWrite:!1})}function Ip(){return new Cr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:lf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Wi,depthTest:!1,depthWrite:!1})}function Fp(){return new Cr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:lf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Wi,depthTest:!1,depthWrite:!1})}function lf(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Ew(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){const l=a.mapping,u=l===Xc||l===$c,f=l===Es||l===ws;if(u||f)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let d=e.get(a);return n===null&&(n=new Np(t)),d=u?n.fromEquirectangular(a,d):n.fromCubemap(a,d),e.set(a,d),d.texture}else{if(e.has(a))return e.get(a).texture;{const d=a.image;if(u&&d&&d.height>0||f&&d&&r(d)){n===null&&(n=new Np(t));const h=u?n.fromEquirectangular(a):n.fromCubemap(a);return e.set(a,h),a.addEventListener("dispose",s),h.texture}else return null}}}return a}function r(a){let l=0;const u=6;for(let f=0;f<u;f++)a[f]!==void 0&&l++;return l===u}function s(a){const l=a.target;l.removeEventListener("dispose",s);const u=e.get(l);u!==void 0&&(e.delete(l),u.dispose())}function o(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:o}}function ww(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(i){i.isWebGL2?(n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance")):(n("WEBGL_depth_texture"),n("OES_texture_float"),n("OES_texture_half_float"),n("OES_texture_half_float_linear"),n("OES_standard_derivatives"),n("OES_element_index_uint"),n("OES_vertex_array_object"),n("ANGLE_instanced_arrays")),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture")},get:function(i){const r=n(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function Tw(t,e,n,i){const r={},s=new WeakMap;function o(d){const h=d.target;h.index!==null&&e.remove(h.index);for(const v in h.attributes)e.remove(h.attributes[v]);for(const v in h.morphAttributes){const x=h.morphAttributes[v];for(let m=0,c=x.length;m<c;m++)e.remove(x[m])}h.removeEventListener("dispose",o),delete r[h.id];const p=s.get(h);p&&(e.remove(p),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,n.memory.geometries--}function a(d,h){return r[h.id]===!0||(h.addEventListener("dispose",o),r[h.id]=!0,n.memory.geometries++),h}function l(d){const h=d.attributes;for(const v in h)e.update(h[v],t.ARRAY_BUFFER);const p=d.morphAttributes;for(const v in p){const x=p[v];for(let m=0,c=x.length;m<c;m++)e.update(x[m],t.ARRAY_BUFFER)}}function u(d){const h=[],p=d.index,v=d.attributes.position;let x=0;if(p!==null){const _=p.array;x=p.version;for(let g=0,S=_.length;g<S;g+=3){const R=_[g+0],C=_[g+1],A=_[g+2];h.push(R,C,C,A,A,R)}}else if(v!==void 0){const _=v.array;x=v.version;for(let g=0,S=_.length/3-1;g<S;g+=3){const R=g+0,C=g+1,A=g+2;h.push(R,C,C,A,A,R)}}else return;const m=new(F_(h)?W_:V_)(h,1);m.version=x;const c=s.get(d);c&&e.remove(c),s.set(d,m)}function f(d){const h=s.get(d);if(h){const p=d.index;p!==null&&h.version<p.version&&u(d)}else u(d);return s.get(d)}return{get:a,update:l,getWireframeAttribute:f}}function Aw(t,e,n,i){const r=i.isWebGL2;let s;function o(p){s=p}let a,l;function u(p){a=p.type,l=p.bytesPerElement}function f(p,v){t.drawElements(s,v,a,p*l),n.update(v,s,1)}function d(p,v,x){if(x===0)return;let m,c;if(r)m=t,c="drawElementsInstanced";else if(m=e.get("ANGLE_instanced_arrays"),c="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[c](s,v,a,p*l,x),n.update(v,s,x)}function h(p,v,x){if(x===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let c=0;c<x;c++)this.render(p[c]/l,v[c]);else{m.multiDrawElementsWEBGL(s,v,0,a,p,0,x);let c=0;for(let _=0;_<x;_++)c+=v[_];n.update(c,s,1)}}this.setMode=o,this.setIndex=u,this.render=f,this.renderInstances=d,this.renderMultiDraw=h}function Cw(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(s/3);break;case t.LINES:n.lines+=a*(s/2);break;case t.LINE_STRIP:n.lines+=a*(s-1);break;case t.LINE_LOOP:n.lines+=a*s;break;case t.POINTS:n.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function Rw(t,e){return t[0]-e[0]}function bw(t,e){return Math.abs(e[1])-Math.abs(t[1])}function Lw(t,e,n){const i={},r=new Float32Array(8),s=new WeakMap,o=new Lt,a=[];for(let u=0;u<8;u++)a[u]=[u,0];function l(u,f,d){const h=u.morphTargetInfluences;if(e.isWebGL2===!0){const p=f.morphAttributes.position||f.morphAttributes.normal||f.morphAttributes.color,v=p!==void 0?p.length:0;let x=s.get(f);if(x===void 0||x.count!==v){let L=function(){z.dispose(),s.delete(f),f.removeEventListener("dispose",L)};x!==void 0&&x.texture.dispose();const _=f.morphAttributes.position!==void 0,g=f.morphAttributes.normal!==void 0,S=f.morphAttributes.color!==void 0,R=f.morphAttributes.position||[],C=f.morphAttributes.normal||[],A=f.morphAttributes.color||[];let U=0;_===!0&&(U=1),g===!0&&(U=2),S===!0&&(U=3);let M=f.attributes.position.count*U,T=1;M>e.maxTextureSize&&(T=Math.ceil(M/e.maxTextureSize),M=e.maxTextureSize);const B=new Float32Array(M*T*4*v),z=new B_(B,M,T,v);z.type=Ui,z.needsUpdate=!0;const Q=U*4;for(let F=0;F<v;F++){const $=R[F],Y=C[F],P=A[F],O=M*T*4*F;for(let j=0;j<$.count;j++){const K=j*Q;_===!0&&(o.fromBufferAttribute($,j),B[O+K+0]=o.x,B[O+K+1]=o.y,B[O+K+2]=o.z,B[O+K+3]=0),g===!0&&(o.fromBufferAttribute(Y,j),B[O+K+4]=o.x,B[O+K+5]=o.y,B[O+K+6]=o.z,B[O+K+7]=0),S===!0&&(o.fromBufferAttribute(P,j),B[O+K+8]=o.x,B[O+K+9]=o.y,B[O+K+10]=o.z,B[O+K+11]=P.itemSize===4?o.w:1)}}x={count:v,texture:z,size:new qe(M,T)},s.set(f,x),f.addEventListener("dispose",L)}let m=0;for(let _=0;_<h.length;_++)m+=h[_];const c=f.morphTargetsRelative?1:1-m;d.getUniforms().setValue(t,"morphTargetBaseInfluence",c),d.getUniforms().setValue(t,"morphTargetInfluences",h),d.getUniforms().setValue(t,"morphTargetsTexture",x.texture,n),d.getUniforms().setValue(t,"morphTargetsTextureSize",x.size)}else{const p=h===void 0?0:h.length;let v=i[f.id];if(v===void 0||v.length!==p){v=[];for(let g=0;g<p;g++)v[g]=[g,0];i[f.id]=v}for(let g=0;g<p;g++){const S=v[g];S[0]=g,S[1]=h[g]}v.sort(bw);for(let g=0;g<8;g++)g<p&&v[g][1]?(a[g][0]=v[g][0],a[g][1]=v[g][1]):(a[g][0]=Number.MAX_SAFE_INTEGER,a[g][1]=0);a.sort(Rw);const x=f.morphAttributes.position,m=f.morphAttributes.normal;let c=0;for(let g=0;g<8;g++){const S=a[g],R=S[0],C=S[1];R!==Number.MAX_SAFE_INTEGER&&C?(x&&f.getAttribute("morphTarget"+g)!==x[R]&&f.setAttribute("morphTarget"+g,x[R]),m&&f.getAttribute("morphNormal"+g)!==m[R]&&f.setAttribute("morphNormal"+g,m[R]),r[g]=C,c+=C):(x&&f.hasAttribute("morphTarget"+g)===!0&&f.deleteAttribute("morphTarget"+g),m&&f.hasAttribute("morphNormal"+g)===!0&&f.deleteAttribute("morphNormal"+g),r[g]=0)}const _=f.morphTargetsRelative?1:1-c;d.getUniforms().setValue(t,"morphTargetBaseInfluence",_),d.getUniforms().setValue(t,"morphTargetInfluences",r)}}return{update:l}}function Pw(t,e,n,i){let r=new WeakMap;function s(l){const u=i.render.frame,f=l.geometry,d=e.get(l,f);if(r.get(d)!==u&&(e.update(d),r.set(d,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==u&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,u))),l.isSkinnedMesh){const h=l.skeleton;r.get(h)!==u&&(h.update(),r.set(h,u))}return d}function o(){r=new WeakMap}function a(l){const u=l.target;u.removeEventListener("dispose",a),n.remove(u.instanceMatrix),u.instanceColor!==null&&n.remove(u.instanceColor)}return{update:s,dispose:o}}class K_ extends an{constructor(e,n,i,r,s,o,a,l,u,f){if(f=f!==void 0?f:xr,f!==xr&&f!==Ts)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&f===xr&&(i=Ni),i===void 0&&f===Ts&&(i=vr),super(null,r,s,o,a,l,f,i,u),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=a!==void 0?a:qt,this.minFilter=l!==void 0?l:qt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const Z_=new an,Q_=new K_(1,1);Q_.compareFunction=I_;const J_=new B_,ev=new mS,tv=new $_,Op=[],kp=[],Bp=new Float32Array(16),zp=new Float32Array(9),Hp=new Float32Array(4);function Ds(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=Op[r];if(s===void 0&&(s=new Float32Array(r),Op[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(s,a)}return s}function Et(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function wt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function Bl(t,e){let n=kp[e];n===void 0&&(n=new Int32Array(e),kp[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function Dw(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function Nw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Et(n,e))return;t.uniform2fv(this.addr,e),wt(n,e)}}function Uw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Et(n,e))return;t.uniform3fv(this.addr,e),wt(n,e)}}function Iw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Et(n,e))return;t.uniform4fv(this.addr,e),wt(n,e)}}function Fw(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Et(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),wt(n,e)}else{if(Et(n,i))return;Hp.set(i),t.uniformMatrix2fv(this.addr,!1,Hp),wt(n,i)}}function Ow(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Et(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),wt(n,e)}else{if(Et(n,i))return;zp.set(i),t.uniformMatrix3fv(this.addr,!1,zp),wt(n,i)}}function kw(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Et(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),wt(n,e)}else{if(Et(n,i))return;Bp.set(i),t.uniformMatrix4fv(this.addr,!1,Bp),wt(n,i)}}function Bw(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function zw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Et(n,e))return;t.uniform2iv(this.addr,e),wt(n,e)}}function Hw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Et(n,e))return;t.uniform3iv(this.addr,e),wt(n,e)}}function Gw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Et(n,e))return;t.uniform4iv(this.addr,e),wt(n,e)}}function Vw(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function Ww(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Et(n,e))return;t.uniform2uiv(this.addr,e),wt(n,e)}}function jw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Et(n,e))return;t.uniform3uiv(this.addr,e),wt(n,e)}}function Xw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Et(n,e))return;t.uniform4uiv(this.addr,e),wt(n,e)}}function $w(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);const s=this.type===t.SAMPLER_2D_SHADOW?Q_:Z_;n.setTexture2D(e||s,r)}function qw(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||ev,r)}function Yw(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||tv,r)}function Kw(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||J_,r)}function Zw(t){switch(t){case 5126:return Dw;case 35664:return Nw;case 35665:return Uw;case 35666:return Iw;case 35674:return Fw;case 35675:return Ow;case 35676:return kw;case 5124:case 35670:return Bw;case 35667:case 35671:return zw;case 35668:case 35672:return Hw;case 35669:case 35673:return Gw;case 5125:return Vw;case 36294:return Ww;case 36295:return jw;case 36296:return Xw;case 35678:case 36198:case 36298:case 36306:case 35682:return $w;case 35679:case 36299:case 36307:return qw;case 35680:case 36300:case 36308:case 36293:return Yw;case 36289:case 36303:case 36311:case 36292:return Kw}}function Qw(t,e){t.uniform1fv(this.addr,e)}function Jw(t,e){const n=Ds(e,this.size,2);t.uniform2fv(this.addr,n)}function eT(t,e){const n=Ds(e,this.size,3);t.uniform3fv(this.addr,n)}function tT(t,e){const n=Ds(e,this.size,4);t.uniform4fv(this.addr,n)}function nT(t,e){const n=Ds(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function iT(t,e){const n=Ds(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function rT(t,e){const n=Ds(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function sT(t,e){t.uniform1iv(this.addr,e)}function oT(t,e){t.uniform2iv(this.addr,e)}function aT(t,e){t.uniform3iv(this.addr,e)}function lT(t,e){t.uniform4iv(this.addr,e)}function uT(t,e){t.uniform1uiv(this.addr,e)}function cT(t,e){t.uniform2uiv(this.addr,e)}function dT(t,e){t.uniform3uiv(this.addr,e)}function fT(t,e){t.uniform4uiv(this.addr,e)}function hT(t,e,n){const i=this.cache,r=e.length,s=Bl(n,r);Et(i,s)||(t.uniform1iv(this.addr,s),wt(i,s));for(let o=0;o!==r;++o)n.setTexture2D(e[o]||Z_,s[o])}function pT(t,e,n){const i=this.cache,r=e.length,s=Bl(n,r);Et(i,s)||(t.uniform1iv(this.addr,s),wt(i,s));for(let o=0;o!==r;++o)n.setTexture3D(e[o]||ev,s[o])}function mT(t,e,n){const i=this.cache,r=e.length,s=Bl(n,r);Et(i,s)||(t.uniform1iv(this.addr,s),wt(i,s));for(let o=0;o!==r;++o)n.setTextureCube(e[o]||tv,s[o])}function gT(t,e,n){const i=this.cache,r=e.length,s=Bl(n,r);Et(i,s)||(t.uniform1iv(this.addr,s),wt(i,s));for(let o=0;o!==r;++o)n.setTexture2DArray(e[o]||J_,s[o])}function _T(t){switch(t){case 5126:return Qw;case 35664:return Jw;case 35665:return eT;case 35666:return tT;case 35674:return nT;case 35675:return iT;case 35676:return rT;case 5124:case 35670:return sT;case 35667:case 35671:return oT;case 35668:case 35672:return aT;case 35669:case 35673:return lT;case 5125:return uT;case 36294:return cT;case 36295:return dT;case 36296:return fT;case 35678:case 36198:case 36298:case 36306:case 35682:return hT;case 35679:case 36299:case 36307:return pT;case 35680:case 36300:case 36308:case 36293:return mT;case 36289:case 36303:case 36311:case 36292:return gT}}class vT{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=Zw(n.type)}}class xT{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=_T(n.type)}}class yT{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,n[a.id],i)}}}const Xu=/(\w+)(\])?(\[|\.)?/g;function Gp(t,e){t.seq.push(e),t.map[e.id]=e}function ST(t,e,n){const i=t.name,r=i.length;for(Xu.lastIndex=0;;){const s=Xu.exec(i),o=Xu.lastIndex;let a=s[1];const l=s[2]==="]",u=s[3];if(l&&(a=a|0),u===void 0||u==="["&&o+2===r){Gp(n,u===void 0?new vT(a,t,e):new xT(a,t,e));break}else{let d=n.map[a];d===void 0&&(d=new yT(a),Gp(n,d)),n=d}}}class za{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),o=e.getUniformLocation(n,s.name);ST(s,o,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,o=n.length;s!==o;++s){const a=n[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in n&&i.push(o)}return i}}function Vp(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const MT=37297;let ET=0;function wT(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}function TT(t){const e=Qe.getPrimaries(Qe.workingColorSpace),n=Qe.getPrimaries(t);let i;switch(e===n?i="":e===gl&&n===ml?i="LinearDisplayP3ToLinearSRGB":e===ml&&n===gl&&(i="LinearSRGBToLinearDisplayP3"),t){case xi:case Ol:return[i,"LinearTransferOETF"];case Ut:case rf:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",t),[i,"LinearTransferOETF"]}}function Wp(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+wT(t.getShaderSource(e),o)}else return r}function AT(t,e){const n=TT(e);return`vec4 ${t}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function CT(t,e){let n;switch(e){case ky:n="Linear";break;case By:n="Reinhard";break;case zy:n="OptimizedCineon";break;case Hy:n="ACESFilmic";break;case Vy:n="AgX";break;case Gy:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}function RT(t){return[t.extensionDerivatives||t.envMapCubeUVHeight||t.bumpMap||t.normalMapTangentSpace||t.clearcoatNormalMap||t.flatShading||t.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(t.extensionFragDepth||t.logarithmicDepthBuffer)&&t.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",t.extensionDrawBuffers&&t.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(t.extensionShaderTextureLOD||t.envMap||t.transmission)&&t.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(os).join(`
`)}function bT(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(os).join(`
`)}function LT(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function PT(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),o=s.name;let a=1;s.type===t.FLOAT_MAT2&&(a=2),s.type===t.FLOAT_MAT3&&(a=3),s.type===t.FLOAT_MAT4&&(a=4),n[o]={type:s.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function os(t){return t!==""}function jp(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Xp(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const DT=/^[ \t]*#include +<([\w\d./]+)>/gm;function Jc(t){return t.replace(DT,UT)}const NT=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function UT(t,e){let n=ke[e];if(n===void 0){const i=NT.get(e);if(i!==void 0)n=ke[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Jc(n)}const IT=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function $p(t){return t.replace(IT,FT)}function FT(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function qp(t){let e="precision "+t.precision+` float;
precision `+t.precision+" int;";return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function OT(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===T_?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===fy?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===ai&&(e="SHADOWMAP_TYPE_VSM"),e}function kT(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case Es:case ws:e="ENVMAP_TYPE_CUBE";break;case Fl:e="ENVMAP_TYPE_CUBE_UV";break}return e}function BT(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case ws:e="ENVMAP_MODE_REFRACTION";break}return e}function zT(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case ef:e="ENVMAP_BLENDING_MULTIPLY";break;case Fy:e="ENVMAP_BLENDING_MIX";break;case Oy:e="ENVMAP_BLENDING_ADD";break}return e}function HT(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function GT(t,e,n,i){const r=t.getContext(),s=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=OT(n),u=kT(n),f=BT(n),d=zT(n),h=HT(n),p=n.isWebGL2?"":RT(n),v=bT(n),x=LT(s),m=r.createProgram();let c,_,g=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(c=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x].filter(os).join(`
`),c.length>0&&(c+=`
`),_=[p,"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x].filter(os).join(`
`),_.length>0&&(_+=`
`)):(c=[qp(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+f:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors&&n.isWebGL2?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(os).join(`
`),_=[p,qp(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.envMap?"#define "+f:"",n.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==ji?"#define TONE_MAPPING":"",n.toneMapping!==ji?ke.tonemapping_pars_fragment:"",n.toneMapping!==ji?CT("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",ke.colorspace_pars_fragment,AT("linearToOutputTexel",n.outputColorSpace),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(os).join(`
`)),o=Jc(o),o=jp(o,n),o=Xp(o,n),a=Jc(a),a=jp(a,n),a=Xp(a,n),o=$p(o),a=$p(a),n.isWebGL2&&n.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,c=[v,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+c,_=["precision mediump sampler2DArray;","#define varying in",n.glslVersion===fp?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===fp?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const S=g+c+o,R=g+_+a,C=Vp(r,r.VERTEX_SHADER,S),A=Vp(r,r.FRAGMENT_SHADER,R);r.attachShader(m,C),r.attachShader(m,A),n.index0AttributeName!==void 0?r.bindAttribLocation(m,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(m,0,"position"),r.linkProgram(m);function U(z){if(t.debug.checkShaderErrors){const Q=r.getProgramInfoLog(m).trim(),L=r.getShaderInfoLog(C).trim(),F=r.getShaderInfoLog(A).trim();let $=!0,Y=!0;if(r.getProgramParameter(m,r.LINK_STATUS)===!1)if($=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,m,C,A);else{const P=Wp(r,C,"vertex"),O=Wp(r,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(m,r.VALIDATE_STATUS)+`

Program Info Log: `+Q+`
`+P+`
`+O)}else Q!==""?console.warn("THREE.WebGLProgram: Program Info Log:",Q):(L===""||F==="")&&(Y=!1);Y&&(z.diagnostics={runnable:$,programLog:Q,vertexShader:{log:L,prefix:c},fragmentShader:{log:F,prefix:_}})}r.deleteShader(C),r.deleteShader(A),M=new za(r,m),T=PT(r,m)}let M;this.getUniforms=function(){return M===void 0&&U(this),M};let T;this.getAttributes=function(){return T===void 0&&U(this),T};let B=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return B===!1&&(B=r.getProgramParameter(m,MT)),B},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(m),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=ET++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=C,this.fragmentShader=A,this}let VT=0;class WT{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new jT(e),n.set(e,i)),i}}class jT{constructor(e){this.id=VT++,this.code=e,this.usedTimes=0}}function XT(t,e,n,i,r,s,o){const a=new z_,l=new WT,u=[],f=r.isWebGL2,d=r.logarithmicDepthBuffer,h=r.vertexTextures;let p=r.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(M){return M===0?"uv":`uv${M}`}function m(M,T,B,z,Q){const L=z.fog,F=Q.geometry,$=M.isMeshStandardMaterial?z.environment:null,Y=(M.isMeshStandardMaterial?n:e).get(M.envMap||$),P=Y&&Y.mapping===Fl?Y.image.height:null,O=v[M.type];M.precision!==null&&(p=r.getMaxPrecision(M.precision),p!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",p,"instead."));const j=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,K=j!==void 0?j.length:0;let oe=0;F.morphAttributes.position!==void 0&&(oe=1),F.morphAttributes.normal!==void 0&&(oe=2),F.morphAttributes.color!==void 0&&(oe=3);let q,Z,ce,ge;if(O){const Wt=Kn[O];q=Wt.vertexShader,Z=Wt.fragmentShader}else q=M.vertexShader,Z=M.fragmentShader,l.update(M),ce=l.getVertexShaderID(M),ge=l.getFragmentShaderID(M);const _e=t.getRenderTarget(),be=Q.isInstancedMesh===!0,Pe=Q.isBatchedMesh===!0,re=!!M.map,Ce=!!M.matcap,H=!!Y,Tt=!!M.aoMap,Ee=!!M.lightMap,De=!!M.bumpMap,N=!!M.normalMap,te=!!M.displacementMap,J=!!M.emissiveMap,E=!!M.metalnessMap,y=!!M.roughnessMap,G=M.anisotropy>0,se=M.clearcoat>0,ne=M.iridescence>0,ae=M.sheen>0,ye=M.transmission>0,he=G&&!!M.anisotropyMap,ve=se&&!!M.clearcoatMap,Re=se&&!!M.clearcoatNormalMap,Be=se&&!!M.clearcoatRoughnessMap,ee=ne&&!!M.iridescenceMap,Ze=ne&&!!M.iridescenceThicknessMap,je=ae&&!!M.sheenColorMap,Ue=ae&&!!M.sheenRoughnessMap,we=!!M.specularMap,xe=!!M.specularColorMap,Oe=!!M.specularIntensityMap,Ye=ye&&!!M.transmissionMap,dt=ye&&!!M.thicknessMap,Ge=!!M.gradientMap,le=!!M.alphaMap,b=M.alphaTest>0,de=!!M.alphaHash,fe=!!M.extensions,Le=!!F.attributes.uv1,Te=!!F.attributes.uv2,Je=!!F.attributes.uv3;let et=ji;return M.toneMapped&&(_e===null||_e.isXRRenderTarget===!0)&&(et=t.toneMapping),{isWebGL2:f,shaderID:O,shaderType:M.type,shaderName:M.name,vertexShader:q,fragmentShader:Z,defines:M.defines,customVertexShaderID:ce,customFragmentShaderID:ge,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:p,batching:Pe,instancing:be,instancingColor:be&&Q.instanceColor!==null,supportsVertexTextures:h,outputColorSpace:_e===null?t.outputColorSpace:_e.isXRRenderTarget===!0?_e.texture.colorSpace:xi,map:re,matcap:Ce,envMap:H,envMapMode:H&&Y.mapping,envMapCubeUVHeight:P,aoMap:Tt,lightMap:Ee,bumpMap:De,normalMap:N,displacementMap:h&&te,emissiveMap:J,normalMapObjectSpace:N&&M.normalMapType===tS,normalMapTangentSpace:N&&M.normalMapType===nf,metalnessMap:E,roughnessMap:y,anisotropy:G,anisotropyMap:he,clearcoat:se,clearcoatMap:ve,clearcoatNormalMap:Re,clearcoatRoughnessMap:Be,iridescence:ne,iridescenceMap:ee,iridescenceThicknessMap:Ze,sheen:ae,sheenColorMap:je,sheenRoughnessMap:Ue,specularMap:we,specularColorMap:xe,specularIntensityMap:Oe,transmission:ye,transmissionMap:Ye,thicknessMap:dt,gradientMap:Ge,opaque:M.transparent===!1&&M.blending===hs,alphaMap:le,alphaTest:b,alphaHash:de,combine:M.combine,mapUv:re&&x(M.map.channel),aoMapUv:Tt&&x(M.aoMap.channel),lightMapUv:Ee&&x(M.lightMap.channel),bumpMapUv:De&&x(M.bumpMap.channel),normalMapUv:N&&x(M.normalMap.channel),displacementMapUv:te&&x(M.displacementMap.channel),emissiveMapUv:J&&x(M.emissiveMap.channel),metalnessMapUv:E&&x(M.metalnessMap.channel),roughnessMapUv:y&&x(M.roughnessMap.channel),anisotropyMapUv:he&&x(M.anisotropyMap.channel),clearcoatMapUv:ve&&x(M.clearcoatMap.channel),clearcoatNormalMapUv:Re&&x(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Be&&x(M.clearcoatRoughnessMap.channel),iridescenceMapUv:ee&&x(M.iridescenceMap.channel),iridescenceThicknessMapUv:Ze&&x(M.iridescenceThicknessMap.channel),sheenColorMapUv:je&&x(M.sheenColorMap.channel),sheenRoughnessMapUv:Ue&&x(M.sheenRoughnessMap.channel),specularMapUv:we&&x(M.specularMap.channel),specularColorMapUv:xe&&x(M.specularColorMap.channel),specularIntensityMapUv:Oe&&x(M.specularIntensityMap.channel),transmissionMapUv:Ye&&x(M.transmissionMap.channel),thicknessMapUv:dt&&x(M.thicknessMap.channel),alphaMapUv:le&&x(M.alphaMap.channel),vertexTangents:!!F.attributes.tangent&&(N||G),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,vertexUv1s:Le,vertexUv2s:Te,vertexUv3s:Je,pointsUvs:Q.isPoints===!0&&!!F.attributes.uv&&(re||le),fog:!!L,useFog:M.fog===!0,fogExp2:L&&L.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:Q.isSkinnedMesh===!0,morphTargets:F.morphAttributes.position!==void 0,morphNormals:F.morphAttributes.normal!==void 0,morphColors:F.morphAttributes.color!==void 0,morphTargetsCount:K,morphTextureStride:oe,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:M.dithering,shadowMapEnabled:t.shadowMap.enabled&&B.length>0,shadowMapType:t.shadowMap.type,toneMapping:et,useLegacyLights:t._useLegacyLights,decodeVideoTexture:re&&M.map.isVideoTexture===!0&&Qe.getTransfer(M.map.colorSpace)===rt,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===ci,flipSided:M.side===on,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionDerivatives:fe&&M.extensions.derivatives===!0,extensionFragDepth:fe&&M.extensions.fragDepth===!0,extensionDrawBuffers:fe&&M.extensions.drawBuffers===!0,extensionShaderTextureLOD:fe&&M.extensions.shaderTextureLOD===!0,extensionClipCullDistance:fe&&M.extensions.clipCullDistance&&i.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:f||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:f||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:f||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()}}function c(M){const T=[];if(M.shaderID?T.push(M.shaderID):(T.push(M.customVertexShaderID),T.push(M.customFragmentShaderID)),M.defines!==void 0)for(const B in M.defines)T.push(B),T.push(M.defines[B]);return M.isRawShaderMaterial===!1&&(_(T,M),g(T,M),T.push(t.outputColorSpace)),T.push(M.customProgramCacheKey),T.join()}function _(M,T){M.push(T.precision),M.push(T.outputColorSpace),M.push(T.envMapMode),M.push(T.envMapCubeUVHeight),M.push(T.mapUv),M.push(T.alphaMapUv),M.push(T.lightMapUv),M.push(T.aoMapUv),M.push(T.bumpMapUv),M.push(T.normalMapUv),M.push(T.displacementMapUv),M.push(T.emissiveMapUv),M.push(T.metalnessMapUv),M.push(T.roughnessMapUv),M.push(T.anisotropyMapUv),M.push(T.clearcoatMapUv),M.push(T.clearcoatNormalMapUv),M.push(T.clearcoatRoughnessMapUv),M.push(T.iridescenceMapUv),M.push(T.iridescenceThicknessMapUv),M.push(T.sheenColorMapUv),M.push(T.sheenRoughnessMapUv),M.push(T.specularMapUv),M.push(T.specularColorMapUv),M.push(T.specularIntensityMapUv),M.push(T.transmissionMapUv),M.push(T.thicknessMapUv),M.push(T.combine),M.push(T.fogExp2),M.push(T.sizeAttenuation),M.push(T.morphTargetsCount),M.push(T.morphAttributeCount),M.push(T.numDirLights),M.push(T.numPointLights),M.push(T.numSpotLights),M.push(T.numSpotLightMaps),M.push(T.numHemiLights),M.push(T.numRectAreaLights),M.push(T.numDirLightShadows),M.push(T.numPointLightShadows),M.push(T.numSpotLightShadows),M.push(T.numSpotLightShadowsWithMaps),M.push(T.numLightProbes),M.push(T.shadowMapType),M.push(T.toneMapping),M.push(T.numClippingPlanes),M.push(T.numClipIntersection),M.push(T.depthPacking)}function g(M,T){a.disableAll(),T.isWebGL2&&a.enable(0),T.supportsVertexTextures&&a.enable(1),T.instancing&&a.enable(2),T.instancingColor&&a.enable(3),T.matcap&&a.enable(4),T.envMap&&a.enable(5),T.normalMapObjectSpace&&a.enable(6),T.normalMapTangentSpace&&a.enable(7),T.clearcoat&&a.enable(8),T.iridescence&&a.enable(9),T.alphaTest&&a.enable(10),T.vertexColors&&a.enable(11),T.vertexAlphas&&a.enable(12),T.vertexUv1s&&a.enable(13),T.vertexUv2s&&a.enable(14),T.vertexUv3s&&a.enable(15),T.vertexTangents&&a.enable(16),T.anisotropy&&a.enable(17),T.alphaHash&&a.enable(18),T.batching&&a.enable(19),M.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.skinning&&a.enable(4),T.morphTargets&&a.enable(5),T.morphNormals&&a.enable(6),T.morphColors&&a.enable(7),T.premultipliedAlpha&&a.enable(8),T.shadowMapEnabled&&a.enable(9),T.useLegacyLights&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.transmission&&a.enable(15),T.sheen&&a.enable(16),T.opaque&&a.enable(17),T.pointsUvs&&a.enable(18),T.decodeVideoTexture&&a.enable(19),M.push(a.mask)}function S(M){const T=v[M.type];let B;if(T){const z=Kn[T];B=RS.clone(z.uniforms)}else B=M.uniforms;return B}function R(M,T){let B;for(let z=0,Q=u.length;z<Q;z++){const L=u[z];if(L.cacheKey===T){B=L,++B.usedTimes;break}}return B===void 0&&(B=new GT(t,T,M,s),u.push(B)),B}function C(M){if(--M.usedTimes===0){const T=u.indexOf(M);u[T]=u[u.length-1],u.pop(),M.destroy()}}function A(M){l.remove(M)}function U(){l.dispose()}return{getParameters:m,getProgramCacheKey:c,getUniforms:S,acquireProgram:R,releaseProgram:C,releaseShaderCache:A,programs:u,dispose:U}}function $T(){let t=new WeakMap;function e(s){let o=t.get(s);return o===void 0&&(o={},t.set(s,o)),o}function n(s){t.delete(s)}function i(s,o,a){t.get(s)[o]=a}function r(){t=new WeakMap}return{get:e,remove:n,update:i,dispose:r}}function qT(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function Yp(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function Kp(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function o(d,h,p,v,x,m){let c=t[e];return c===void 0?(c={id:d.id,object:d,geometry:h,material:p,groupOrder:v,renderOrder:d.renderOrder,z:x,group:m},t[e]=c):(c.id=d.id,c.object=d,c.geometry=h,c.material=p,c.groupOrder=v,c.renderOrder=d.renderOrder,c.z=x,c.group=m),e++,c}function a(d,h,p,v,x,m){const c=o(d,h,p,v,x,m);p.transmission>0?i.push(c):p.transparent===!0?r.push(c):n.push(c)}function l(d,h,p,v,x,m){const c=o(d,h,p,v,x,m);p.transmission>0?i.unshift(c):p.transparent===!0?r.unshift(c):n.unshift(c)}function u(d,h){n.length>1&&n.sort(d||qT),i.length>1&&i.sort(h||Yp),r.length>1&&r.sort(h||Yp)}function f(){for(let d=e,h=t.length;d<h;d++){const p=t[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:f,sort:u}}function YT(){let t=new WeakMap;function e(i,r){const s=t.get(i);let o;return s===void 0?(o=new Kp,t.set(i,[o])):r>=s.length?(o=new Kp,s.push(o)):o=s[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function KT(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new k,color:new He};break;case"SpotLight":n={position:new k,direction:new k,color:new He,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new k,color:new He,distance:0,decay:0};break;case"HemisphereLight":n={direction:new k,skyColor:new He,groundColor:new He};break;case"RectAreaLight":n={color:new He,position:new k,halfWidth:new k,halfHeight:new k};break}return t[e.id]=n,n}}}function ZT(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qe};break;case"SpotLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qe};break;case"PointLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qe,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let QT=0;function JT(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function e1(t,e){const n=new KT,i=ZT(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let f=0;f<9;f++)r.probe.push(new k);const s=new k,o=new pt,a=new pt;function l(f,d){let h=0,p=0,v=0;for(let z=0;z<9;z++)r.probe[z].set(0,0,0);let x=0,m=0,c=0,_=0,g=0,S=0,R=0,C=0,A=0,U=0,M=0;f.sort(JT);const T=d===!0?Math.PI:1;for(let z=0,Q=f.length;z<Q;z++){const L=f[z],F=L.color,$=L.intensity,Y=L.distance,P=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)h+=F.r*$*T,p+=F.g*$*T,v+=F.b*$*T;else if(L.isLightProbe){for(let O=0;O<9;O++)r.probe[O].addScaledVector(L.sh.coefficients[O],$);M++}else if(L.isDirectionalLight){const O=n.get(L);if(O.color.copy(L.color).multiplyScalar(L.intensity*T),L.castShadow){const j=L.shadow,K=i.get(L);K.shadowBias=j.bias,K.shadowNormalBias=j.normalBias,K.shadowRadius=j.radius,K.shadowMapSize=j.mapSize,r.directionalShadow[x]=K,r.directionalShadowMap[x]=P,r.directionalShadowMatrix[x]=L.shadow.matrix,S++}r.directional[x]=O,x++}else if(L.isSpotLight){const O=n.get(L);O.position.setFromMatrixPosition(L.matrixWorld),O.color.copy(F).multiplyScalar($*T),O.distance=Y,O.coneCos=Math.cos(L.angle),O.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),O.decay=L.decay,r.spot[c]=O;const j=L.shadow;if(L.map&&(r.spotLightMap[A]=L.map,A++,j.updateMatrices(L),L.castShadow&&U++),r.spotLightMatrix[c]=j.matrix,L.castShadow){const K=i.get(L);K.shadowBias=j.bias,K.shadowNormalBias=j.normalBias,K.shadowRadius=j.radius,K.shadowMapSize=j.mapSize,r.spotShadow[c]=K,r.spotShadowMap[c]=P,C++}c++}else if(L.isRectAreaLight){const O=n.get(L);O.color.copy(F).multiplyScalar($),O.halfWidth.set(L.width*.5,0,0),O.halfHeight.set(0,L.height*.5,0),r.rectArea[_]=O,_++}else if(L.isPointLight){const O=n.get(L);if(O.color.copy(L.color).multiplyScalar(L.intensity*T),O.distance=L.distance,O.decay=L.decay,L.castShadow){const j=L.shadow,K=i.get(L);K.shadowBias=j.bias,K.shadowNormalBias=j.normalBias,K.shadowRadius=j.radius,K.shadowMapSize=j.mapSize,K.shadowCameraNear=j.camera.near,K.shadowCameraFar=j.camera.far,r.pointShadow[m]=K,r.pointShadowMap[m]=P,r.pointShadowMatrix[m]=L.shadow.matrix,R++}r.point[m]=O,m++}else if(L.isHemisphereLight){const O=n.get(L);O.skyColor.copy(L.color).multiplyScalar($*T),O.groundColor.copy(L.groundColor).multiplyScalar($*T),r.hemi[g]=O,g++}}_>0&&(e.isWebGL2?t.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=ue.LTC_FLOAT_1,r.rectAreaLTC2=ue.LTC_FLOAT_2):(r.rectAreaLTC1=ue.LTC_HALF_1,r.rectAreaLTC2=ue.LTC_HALF_2):t.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=ue.LTC_FLOAT_1,r.rectAreaLTC2=ue.LTC_FLOAT_2):t.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=ue.LTC_HALF_1,r.rectAreaLTC2=ue.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=h,r.ambient[1]=p,r.ambient[2]=v;const B=r.hash;(B.directionalLength!==x||B.pointLength!==m||B.spotLength!==c||B.rectAreaLength!==_||B.hemiLength!==g||B.numDirectionalShadows!==S||B.numPointShadows!==R||B.numSpotShadows!==C||B.numSpotMaps!==A||B.numLightProbes!==M)&&(r.directional.length=x,r.spot.length=c,r.rectArea.length=_,r.point.length=m,r.hemi.length=g,r.directionalShadow.length=S,r.directionalShadowMap.length=S,r.pointShadow.length=R,r.pointShadowMap.length=R,r.spotShadow.length=C,r.spotShadowMap.length=C,r.directionalShadowMatrix.length=S,r.pointShadowMatrix.length=R,r.spotLightMatrix.length=C+A-U,r.spotLightMap.length=A,r.numSpotLightShadowsWithMaps=U,r.numLightProbes=M,B.directionalLength=x,B.pointLength=m,B.spotLength=c,B.rectAreaLength=_,B.hemiLength=g,B.numDirectionalShadows=S,B.numPointShadows=R,B.numSpotShadows=C,B.numSpotMaps=A,B.numLightProbes=M,r.version=QT++)}function u(f,d){let h=0,p=0,v=0,x=0,m=0;const c=d.matrixWorldInverse;for(let _=0,g=f.length;_<g;_++){const S=f[_];if(S.isDirectionalLight){const R=r.directional[h];R.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),R.direction.sub(s),R.direction.transformDirection(c),h++}else if(S.isSpotLight){const R=r.spot[v];R.position.setFromMatrixPosition(S.matrixWorld),R.position.applyMatrix4(c),R.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),R.direction.sub(s),R.direction.transformDirection(c),v++}else if(S.isRectAreaLight){const R=r.rectArea[x];R.position.setFromMatrixPosition(S.matrixWorld),R.position.applyMatrix4(c),a.identity(),o.copy(S.matrixWorld),o.premultiply(c),a.extractRotation(o),R.halfWidth.set(S.width*.5,0,0),R.halfHeight.set(0,S.height*.5,0),R.halfWidth.applyMatrix4(a),R.halfHeight.applyMatrix4(a),x++}else if(S.isPointLight){const R=r.point[p];R.position.setFromMatrixPosition(S.matrixWorld),R.position.applyMatrix4(c),p++}else if(S.isHemisphereLight){const R=r.hemi[m];R.direction.setFromMatrixPosition(S.matrixWorld),R.direction.transformDirection(c),m++}}}return{setup:l,setupView:u,state:r}}function Zp(t,e){const n=new e1(t,e),i=[],r=[];function s(){i.length=0,r.length=0}function o(d){i.push(d)}function a(d){r.push(d)}function l(d){n.setup(i,d)}function u(d){n.setupView(i,d)}return{init:s,state:{lightsArray:i,shadowsArray:r,lights:n},setupLights:l,setupLightsView:u,pushLight:o,pushShadow:a}}function t1(t,e){let n=new WeakMap;function i(s,o=0){const a=n.get(s);let l;return a===void 0?(l=new Zp(t,e),n.set(s,[l])):o>=a.length?(l=new Zp(t,e),a.push(l)):l=a[o],l}function r(){n=new WeakMap}return{get:i,dispose:r}}class n1 extends er{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Jy,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class i1 extends er{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const r1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,s1=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function o1(t,e,n){let i=new of;const r=new qe,s=new qe,o=new Lt,a=new n1({depthPacking:eS}),l=new i1,u={},f=n.maxTextureSize,d={[Yi]:on,[on]:Yi,[ci]:ci},h=new Cr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new qe},radius:{value:4}},vertexShader:r1,fragmentShader:s1}),p=h.clone();p.defines.HORIZONTAL_PASS=1;const v=new Xn;v.setAttribute("position",new bn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new Cn(v,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=T_;let c=this.type;this.render=function(C,A,U){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||C.length===0)return;const M=t.getRenderTarget(),T=t.getActiveCubeFace(),B=t.getActiveMipmapLevel(),z=t.state;z.setBlending(Wi),z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);const Q=c!==ai&&this.type===ai,L=c===ai&&this.type!==ai;for(let F=0,$=C.length;F<$;F++){const Y=C[F],P=Y.shadow;if(P===void 0){console.warn("THREE.WebGLShadowMap:",Y,"has no shadow.");continue}if(P.autoUpdate===!1&&P.needsUpdate===!1)continue;r.copy(P.mapSize);const O=P.getFrameExtents();if(r.multiply(O),s.copy(P.mapSize),(r.x>f||r.y>f)&&(r.x>f&&(s.x=Math.floor(f/O.x),r.x=s.x*O.x,P.mapSize.x=s.x),r.y>f&&(s.y=Math.floor(f/O.y),r.y=s.y*O.y,P.mapSize.y=s.y)),P.map===null||Q===!0||L===!0){const K=this.type!==ai?{minFilter:qt,magFilter:qt}:{};P.map!==null&&P.map.dispose(),P.map=new Ar(r.x,r.y,K),P.map.texture.name=Y.name+".shadowMap",P.camera.updateProjectionMatrix()}t.setRenderTarget(P.map),t.clear();const j=P.getViewportCount();for(let K=0;K<j;K++){const oe=P.getViewport(K);o.set(s.x*oe.x,s.y*oe.y,s.x*oe.z,s.y*oe.w),z.viewport(o),P.updateMatrices(Y,K),i=P.getFrustum(),S(A,U,P.camera,Y,this.type)}P.isPointLightShadow!==!0&&this.type===ai&&_(P,U),P.needsUpdate=!1}c=this.type,m.needsUpdate=!1,t.setRenderTarget(M,T,B)};function _(C,A){const U=e.update(x);h.defines.VSM_SAMPLES!==C.blurSamples&&(h.defines.VSM_SAMPLES=C.blurSamples,p.defines.VSM_SAMPLES=C.blurSamples,h.needsUpdate=!0,p.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new Ar(r.x,r.y)),h.uniforms.shadow_pass.value=C.map.texture,h.uniforms.resolution.value=C.mapSize,h.uniforms.radius.value=C.radius,t.setRenderTarget(C.mapPass),t.clear(),t.renderBufferDirect(A,null,U,h,x,null),p.uniforms.shadow_pass.value=C.mapPass.texture,p.uniforms.resolution.value=C.mapSize,p.uniforms.radius.value=C.radius,t.setRenderTarget(C.map),t.clear(),t.renderBufferDirect(A,null,U,p,x,null)}function g(C,A,U,M){let T=null;const B=U.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(B!==void 0)T=B;else if(T=U.isPointLight===!0?l:a,t.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const z=T.uuid,Q=A.uuid;let L=u[z];L===void 0&&(L={},u[z]=L);let F=L[Q];F===void 0&&(F=T.clone(),L[Q]=F,A.addEventListener("dispose",R)),T=F}if(T.visible=A.visible,T.wireframe=A.wireframe,M===ai?T.side=A.shadowSide!==null?A.shadowSide:A.side:T.side=A.shadowSide!==null?A.shadowSide:d[A.side],T.alphaMap=A.alphaMap,T.alphaTest=A.alphaTest,T.map=A.map,T.clipShadows=A.clipShadows,T.clippingPlanes=A.clippingPlanes,T.clipIntersection=A.clipIntersection,T.displacementMap=A.displacementMap,T.displacementScale=A.displacementScale,T.displacementBias=A.displacementBias,T.wireframeLinewidth=A.wireframeLinewidth,T.linewidth=A.linewidth,U.isPointLight===!0&&T.isMeshDistanceMaterial===!0){const z=t.properties.get(T);z.light=U}return T}function S(C,A,U,M,T){if(C.visible===!1)return;if(C.layers.test(A.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&T===ai)&&(!C.frustumCulled||i.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(U.matrixWorldInverse,C.matrixWorld);const Q=e.update(C),L=C.material;if(Array.isArray(L)){const F=Q.groups;for(let $=0,Y=F.length;$<Y;$++){const P=F[$],O=L[P.materialIndex];if(O&&O.visible){const j=g(C,O,M,T);C.onBeforeShadow(t,C,A,U,Q,j,P),t.renderBufferDirect(U,null,Q,j,C,P),C.onAfterShadow(t,C,A,U,Q,j,P)}}}else if(L.visible){const F=g(C,L,M,T);C.onBeforeShadow(t,C,A,U,Q,F,null),t.renderBufferDirect(U,null,Q,F,C,null),C.onAfterShadow(t,C,A,U,Q,F,null)}}const z=C.children;for(let Q=0,L=z.length;Q<L;Q++)S(z[Q],A,U,M,T)}function R(C){C.target.removeEventListener("dispose",R);for(const U in u){const M=u[U],T=C.target.uuid;T in M&&(M[T].dispose(),delete M[T])}}}function a1(t,e,n){const i=n.isWebGL2;function r(){let b=!1;const de=new Lt;let fe=null;const Le=new Lt(0,0,0,0);return{setMask:function(Te){fe!==Te&&!b&&(t.colorMask(Te,Te,Te,Te),fe=Te)},setLocked:function(Te){b=Te},setClear:function(Te,Je,et,At,Wt){Wt===!0&&(Te*=At,Je*=At,et*=At),de.set(Te,Je,et,At),Le.equals(de)===!1&&(t.clearColor(Te,Je,et,At),Le.copy(de))},reset:function(){b=!1,fe=null,Le.set(-1,0,0,0)}}}function s(){let b=!1,de=null,fe=null,Le=null;return{setTest:function(Te){Te?Pe(t.DEPTH_TEST):re(t.DEPTH_TEST)},setMask:function(Te){de!==Te&&!b&&(t.depthMask(Te),de=Te)},setFunc:function(Te){if(fe!==Te){switch(Te){case by:t.depthFunc(t.NEVER);break;case Ly:t.depthFunc(t.ALWAYS);break;case Py:t.depthFunc(t.LESS);break;case hl:t.depthFunc(t.LEQUAL);break;case Dy:t.depthFunc(t.EQUAL);break;case Ny:t.depthFunc(t.GEQUAL);break;case Uy:t.depthFunc(t.GREATER);break;case Iy:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}fe=Te}},setLocked:function(Te){b=Te},setClear:function(Te){Le!==Te&&(t.clearDepth(Te),Le=Te)},reset:function(){b=!1,de=null,fe=null,Le=null}}}function o(){let b=!1,de=null,fe=null,Le=null,Te=null,Je=null,et=null,At=null,Wt=null;return{setTest:function(tt){b||(tt?Pe(t.STENCIL_TEST):re(t.STENCIL_TEST))},setMask:function(tt){de!==tt&&!b&&(t.stencilMask(tt),de=tt)},setFunc:function(tt,jt,$n){(fe!==tt||Le!==jt||Te!==$n)&&(t.stencilFunc(tt,jt,$n),fe=tt,Le=jt,Te=$n)},setOp:function(tt,jt,$n){(Je!==tt||et!==jt||At!==$n)&&(t.stencilOp(tt,jt,$n),Je=tt,et=jt,At=$n)},setLocked:function(tt){b=tt},setClear:function(tt){Wt!==tt&&(t.clearStencil(tt),Wt=tt)},reset:function(){b=!1,de=null,fe=null,Le=null,Te=null,Je=null,et=null,At=null,Wt=null}}}const a=new r,l=new s,u=new o,f=new WeakMap,d=new WeakMap;let h={},p={},v=new WeakMap,x=[],m=null,c=!1,_=null,g=null,S=null,R=null,C=null,A=null,U=null,M=new He(0,0,0),T=0,B=!1,z=null,Q=null,L=null,F=null,$=null;const Y=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let P=!1,O=0;const j=t.getParameter(t.VERSION);j.indexOf("WebGL")!==-1?(O=parseFloat(/^WebGL (\d)/.exec(j)[1]),P=O>=1):j.indexOf("OpenGL ES")!==-1&&(O=parseFloat(/^OpenGL ES (\d)/.exec(j)[1]),P=O>=2);let K=null,oe={};const q=t.getParameter(t.SCISSOR_BOX),Z=t.getParameter(t.VIEWPORT),ce=new Lt().fromArray(q),ge=new Lt().fromArray(Z);function _e(b,de,fe,Le){const Te=new Uint8Array(4),Je=t.createTexture();t.bindTexture(b,Je),t.texParameteri(b,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(b,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let et=0;et<fe;et++)i&&(b===t.TEXTURE_3D||b===t.TEXTURE_2D_ARRAY)?t.texImage3D(de,0,t.RGBA,1,1,Le,0,t.RGBA,t.UNSIGNED_BYTE,Te):t.texImage2D(de+et,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,Te);return Je}const be={};be[t.TEXTURE_2D]=_e(t.TEXTURE_2D,t.TEXTURE_2D,1),be[t.TEXTURE_CUBE_MAP]=_e(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(be[t.TEXTURE_2D_ARRAY]=_e(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),be[t.TEXTURE_3D]=_e(t.TEXTURE_3D,t.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),u.setClear(0),Pe(t.DEPTH_TEST),l.setFunc(hl),J(!1),E(Dh),Pe(t.CULL_FACE),N(Wi);function Pe(b){h[b]!==!0&&(t.enable(b),h[b]=!0)}function re(b){h[b]!==!1&&(t.disable(b),h[b]=!1)}function Ce(b,de){return p[b]!==de?(t.bindFramebuffer(b,de),p[b]=de,i&&(b===t.DRAW_FRAMEBUFFER&&(p[t.FRAMEBUFFER]=de),b===t.FRAMEBUFFER&&(p[t.DRAW_FRAMEBUFFER]=de)),!0):!1}function H(b,de){let fe=x,Le=!1;if(b)if(fe=v.get(de),fe===void 0&&(fe=[],v.set(de,fe)),b.isWebGLMultipleRenderTargets){const Te=b.texture;if(fe.length!==Te.length||fe[0]!==t.COLOR_ATTACHMENT0){for(let Je=0,et=Te.length;Je<et;Je++)fe[Je]=t.COLOR_ATTACHMENT0+Je;fe.length=Te.length,Le=!0}}else fe[0]!==t.COLOR_ATTACHMENT0&&(fe[0]=t.COLOR_ATTACHMENT0,Le=!0);else fe[0]!==t.BACK&&(fe[0]=t.BACK,Le=!0);Le&&(n.isWebGL2?t.drawBuffers(fe):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(fe))}function Tt(b){return m!==b?(t.useProgram(b),m=b,!0):!1}const Ee={[dr]:t.FUNC_ADD,[py]:t.FUNC_SUBTRACT,[my]:t.FUNC_REVERSE_SUBTRACT};if(i)Ee[Fh]=t.MIN,Ee[Oh]=t.MAX;else{const b=e.get("EXT_blend_minmax");b!==null&&(Ee[Fh]=b.MIN_EXT,Ee[Oh]=b.MAX_EXT)}const De={[gy]:t.ZERO,[_y]:t.ONE,[vy]:t.SRC_COLOR,[Wc]:t.SRC_ALPHA,[wy]:t.SRC_ALPHA_SATURATE,[My]:t.DST_COLOR,[yy]:t.DST_ALPHA,[xy]:t.ONE_MINUS_SRC_COLOR,[jc]:t.ONE_MINUS_SRC_ALPHA,[Ey]:t.ONE_MINUS_DST_COLOR,[Sy]:t.ONE_MINUS_DST_ALPHA,[Ty]:t.CONSTANT_COLOR,[Ay]:t.ONE_MINUS_CONSTANT_COLOR,[Cy]:t.CONSTANT_ALPHA,[Ry]:t.ONE_MINUS_CONSTANT_ALPHA};function N(b,de,fe,Le,Te,Je,et,At,Wt,tt){if(b===Wi){c===!0&&(re(t.BLEND),c=!1);return}if(c===!1&&(Pe(t.BLEND),c=!0),b!==hy){if(b!==_||tt!==B){if((g!==dr||C!==dr)&&(t.blendEquation(t.FUNC_ADD),g=dr,C=dr),tt)switch(b){case hs:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Nh:t.blendFunc(t.ONE,t.ONE);break;case Uh:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Ih:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",b);break}else switch(b){case hs:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Nh:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case Uh:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Ih:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",b);break}S=null,R=null,A=null,U=null,M.set(0,0,0),T=0,_=b,B=tt}return}Te=Te||de,Je=Je||fe,et=et||Le,(de!==g||Te!==C)&&(t.blendEquationSeparate(Ee[de],Ee[Te]),g=de,C=Te),(fe!==S||Le!==R||Je!==A||et!==U)&&(t.blendFuncSeparate(De[fe],De[Le],De[Je],De[et]),S=fe,R=Le,A=Je,U=et),(At.equals(M)===!1||Wt!==T)&&(t.blendColor(At.r,At.g,At.b,Wt),M.copy(At),T=Wt),_=b,B=!1}function te(b,de){b.side===ci?re(t.CULL_FACE):Pe(t.CULL_FACE);let fe=b.side===on;de&&(fe=!fe),J(fe),b.blending===hs&&b.transparent===!1?N(Wi):N(b.blending,b.blendEquation,b.blendSrc,b.blendDst,b.blendEquationAlpha,b.blendSrcAlpha,b.blendDstAlpha,b.blendColor,b.blendAlpha,b.premultipliedAlpha),l.setFunc(b.depthFunc),l.setTest(b.depthTest),l.setMask(b.depthWrite),a.setMask(b.colorWrite);const Le=b.stencilWrite;u.setTest(Le),Le&&(u.setMask(b.stencilWriteMask),u.setFunc(b.stencilFunc,b.stencilRef,b.stencilFuncMask),u.setOp(b.stencilFail,b.stencilZFail,b.stencilZPass)),G(b.polygonOffset,b.polygonOffsetFactor,b.polygonOffsetUnits),b.alphaToCoverage===!0?Pe(t.SAMPLE_ALPHA_TO_COVERAGE):re(t.SAMPLE_ALPHA_TO_COVERAGE)}function J(b){z!==b&&(b?t.frontFace(t.CW):t.frontFace(t.CCW),z=b)}function E(b){b!==cy?(Pe(t.CULL_FACE),b!==Q&&(b===Dh?t.cullFace(t.BACK):b===dy?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):re(t.CULL_FACE),Q=b}function y(b){b!==L&&(P&&t.lineWidth(b),L=b)}function G(b,de,fe){b?(Pe(t.POLYGON_OFFSET_FILL),(F!==de||$!==fe)&&(t.polygonOffset(de,fe),F=de,$=fe)):re(t.POLYGON_OFFSET_FILL)}function se(b){b?Pe(t.SCISSOR_TEST):re(t.SCISSOR_TEST)}function ne(b){b===void 0&&(b=t.TEXTURE0+Y-1),K!==b&&(t.activeTexture(b),K=b)}function ae(b,de,fe){fe===void 0&&(K===null?fe=t.TEXTURE0+Y-1:fe=K);let Le=oe[fe];Le===void 0&&(Le={type:void 0,texture:void 0},oe[fe]=Le),(Le.type!==b||Le.texture!==de)&&(K!==fe&&(t.activeTexture(fe),K=fe),t.bindTexture(b,de||be[b]),Le.type=b,Le.texture=de)}function ye(){const b=oe[K];b!==void 0&&b.type!==void 0&&(t.bindTexture(b.type,null),b.type=void 0,b.texture=void 0)}function he(){try{t.compressedTexImage2D.apply(t,arguments)}catch(b){console.error("THREE.WebGLState:",b)}}function ve(){try{t.compressedTexImage3D.apply(t,arguments)}catch(b){console.error("THREE.WebGLState:",b)}}function Re(){try{t.texSubImage2D.apply(t,arguments)}catch(b){console.error("THREE.WebGLState:",b)}}function Be(){try{t.texSubImage3D.apply(t,arguments)}catch(b){console.error("THREE.WebGLState:",b)}}function ee(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(b){console.error("THREE.WebGLState:",b)}}function Ze(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(b){console.error("THREE.WebGLState:",b)}}function je(){try{t.texStorage2D.apply(t,arguments)}catch(b){console.error("THREE.WebGLState:",b)}}function Ue(){try{t.texStorage3D.apply(t,arguments)}catch(b){console.error("THREE.WebGLState:",b)}}function we(){try{t.texImage2D.apply(t,arguments)}catch(b){console.error("THREE.WebGLState:",b)}}function xe(){try{t.texImage3D.apply(t,arguments)}catch(b){console.error("THREE.WebGLState:",b)}}function Oe(b){ce.equals(b)===!1&&(t.scissor(b.x,b.y,b.z,b.w),ce.copy(b))}function Ye(b){ge.equals(b)===!1&&(t.viewport(b.x,b.y,b.z,b.w),ge.copy(b))}function dt(b,de){let fe=d.get(de);fe===void 0&&(fe=new WeakMap,d.set(de,fe));let Le=fe.get(b);Le===void 0&&(Le=t.getUniformBlockIndex(de,b.name),fe.set(b,Le))}function Ge(b,de){const Le=d.get(de).get(b);f.get(de)!==Le&&(t.uniformBlockBinding(de,Le,b.__bindingPointIndex),f.set(de,Le))}function le(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),i===!0&&(t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null)),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),h={},K=null,oe={},p={},v=new WeakMap,x=[],m=null,c=!1,_=null,g=null,S=null,R=null,C=null,A=null,U=null,M=new He(0,0,0),T=0,B=!1,z=null,Q=null,L=null,F=null,$=null,ce.set(0,0,t.canvas.width,t.canvas.height),ge.set(0,0,t.canvas.width,t.canvas.height),a.reset(),l.reset(),u.reset()}return{buffers:{color:a,depth:l,stencil:u},enable:Pe,disable:re,bindFramebuffer:Ce,drawBuffers:H,useProgram:Tt,setBlending:N,setMaterial:te,setFlipSided:J,setCullFace:E,setLineWidth:y,setPolygonOffset:G,setScissorTest:se,activeTexture:ne,bindTexture:ae,unbindTexture:ye,compressedTexImage2D:he,compressedTexImage3D:ve,texImage2D:we,texImage3D:xe,updateUBOMapping:dt,uniformBlockBinding:Ge,texStorage2D:je,texStorage3D:Ue,texSubImage2D:Re,texSubImage3D:Be,compressedTexSubImage2D:ee,compressedTexSubImage3D:Ze,scissor:Oe,viewport:Ye,reset:le}}function l1(t,e,n,i,r,s,o){const a=r.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,u=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),f=new WeakMap;let d;const h=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(E,y){return p?new OffscreenCanvas(E,y):Co("canvas")}function x(E,y,G,se){let ne=1;if((E.width>se||E.height>se)&&(ne=se/Math.max(E.width,E.height)),ne<1||y===!0)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap){const ae=y?Qc:Math.floor,ye=ae(ne*E.width),he=ae(ne*E.height);d===void 0&&(d=v(ye,he));const ve=G?v(ye,he):d;return ve.width=ye,ve.height=he,ve.getContext("2d").drawImage(E,0,0,ye,he),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+E.width+"x"+E.height+") to ("+ye+"x"+he+")."),ve}else return"data"in E&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+E.width+"x"+E.height+")."),E;return E}function m(E){return hp(E.width)&&hp(E.height)}function c(E){return a?!1:E.wrapS!==zn||E.wrapT!==zn||E.minFilter!==qt&&E.minFilter!==wn}function _(E,y){return E.generateMipmaps&&y&&E.minFilter!==qt&&E.minFilter!==wn}function g(E){t.generateMipmap(E)}function S(E,y,G,se,ne=!1){if(a===!1)return y;if(E!==null){if(t[E]!==void 0)return t[E];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let ae=y;if(y===t.RED&&(G===t.FLOAT&&(ae=t.R32F),G===t.HALF_FLOAT&&(ae=t.R16F),G===t.UNSIGNED_BYTE&&(ae=t.R8)),y===t.RED_INTEGER&&(G===t.UNSIGNED_BYTE&&(ae=t.R8UI),G===t.UNSIGNED_SHORT&&(ae=t.R16UI),G===t.UNSIGNED_INT&&(ae=t.R32UI),G===t.BYTE&&(ae=t.R8I),G===t.SHORT&&(ae=t.R16I),G===t.INT&&(ae=t.R32I)),y===t.RG&&(G===t.FLOAT&&(ae=t.RG32F),G===t.HALF_FLOAT&&(ae=t.RG16F),G===t.UNSIGNED_BYTE&&(ae=t.RG8)),y===t.RGBA){const ye=ne?pl:Qe.getTransfer(se);G===t.FLOAT&&(ae=t.RGBA32F),G===t.HALF_FLOAT&&(ae=t.RGBA16F),G===t.UNSIGNED_BYTE&&(ae=ye===rt?t.SRGB8_ALPHA8:t.RGBA8),G===t.UNSIGNED_SHORT_4_4_4_4&&(ae=t.RGBA4),G===t.UNSIGNED_SHORT_5_5_5_1&&(ae=t.RGB5_A1)}return(ae===t.R16F||ae===t.R32F||ae===t.RG16F||ae===t.RG32F||ae===t.RGBA16F||ae===t.RGBA32F)&&e.get("EXT_color_buffer_float"),ae}function R(E,y,G){return _(E,G)===!0||E.isFramebufferTexture&&E.minFilter!==qt&&E.minFilter!==wn?Math.log2(Math.max(y.width,y.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?y.mipmaps.length:1}function C(E){return E===qt||E===kh||E===vu?t.NEAREST:t.LINEAR}function A(E){const y=E.target;y.removeEventListener("dispose",A),M(y),y.isVideoTexture&&f.delete(y)}function U(E){const y=E.target;y.removeEventListener("dispose",U),B(y)}function M(E){const y=i.get(E);if(y.__webglInit===void 0)return;const G=E.source,se=h.get(G);if(se){const ne=se[y.__cacheKey];ne.usedTimes--,ne.usedTimes===0&&T(E),Object.keys(se).length===0&&h.delete(G)}i.remove(E)}function T(E){const y=i.get(E);t.deleteTexture(y.__webglTexture);const G=E.source,se=h.get(G);delete se[y.__cacheKey],o.memory.textures--}function B(E){const y=E.texture,G=i.get(E),se=i.get(y);if(se.__webglTexture!==void 0&&(t.deleteTexture(se.__webglTexture),o.memory.textures--),E.depthTexture&&E.depthTexture.dispose(),E.isWebGLCubeRenderTarget)for(let ne=0;ne<6;ne++){if(Array.isArray(G.__webglFramebuffer[ne]))for(let ae=0;ae<G.__webglFramebuffer[ne].length;ae++)t.deleteFramebuffer(G.__webglFramebuffer[ne][ae]);else t.deleteFramebuffer(G.__webglFramebuffer[ne]);G.__webglDepthbuffer&&t.deleteRenderbuffer(G.__webglDepthbuffer[ne])}else{if(Array.isArray(G.__webglFramebuffer))for(let ne=0;ne<G.__webglFramebuffer.length;ne++)t.deleteFramebuffer(G.__webglFramebuffer[ne]);else t.deleteFramebuffer(G.__webglFramebuffer);if(G.__webglDepthbuffer&&t.deleteRenderbuffer(G.__webglDepthbuffer),G.__webglMultisampledFramebuffer&&t.deleteFramebuffer(G.__webglMultisampledFramebuffer),G.__webglColorRenderbuffer)for(let ne=0;ne<G.__webglColorRenderbuffer.length;ne++)G.__webglColorRenderbuffer[ne]&&t.deleteRenderbuffer(G.__webglColorRenderbuffer[ne]);G.__webglDepthRenderbuffer&&t.deleteRenderbuffer(G.__webglDepthRenderbuffer)}if(E.isWebGLMultipleRenderTargets)for(let ne=0,ae=y.length;ne<ae;ne++){const ye=i.get(y[ne]);ye.__webglTexture&&(t.deleteTexture(ye.__webglTexture),o.memory.textures--),i.remove(y[ne])}i.remove(y),i.remove(E)}let z=0;function Q(){z=0}function L(){const E=z;return E>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+r.maxTextures),z+=1,E}function F(E){const y=[];return y.push(E.wrapS),y.push(E.wrapT),y.push(E.wrapR||0),y.push(E.magFilter),y.push(E.minFilter),y.push(E.anisotropy),y.push(E.internalFormat),y.push(E.format),y.push(E.type),y.push(E.generateMipmaps),y.push(E.premultiplyAlpha),y.push(E.flipY),y.push(E.unpackAlignment),y.push(E.colorSpace),y.join()}function $(E,y){const G=i.get(E);if(E.isVideoTexture&&te(E),E.isRenderTargetTexture===!1&&E.version>0&&G.__version!==E.version){const se=E.image;if(se===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(se.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ce(G,E,y);return}}n.bindTexture(t.TEXTURE_2D,G.__webglTexture,t.TEXTURE0+y)}function Y(E,y){const G=i.get(E);if(E.version>0&&G.__version!==E.version){ce(G,E,y);return}n.bindTexture(t.TEXTURE_2D_ARRAY,G.__webglTexture,t.TEXTURE0+y)}function P(E,y){const G=i.get(E);if(E.version>0&&G.__version!==E.version){ce(G,E,y);return}n.bindTexture(t.TEXTURE_3D,G.__webglTexture,t.TEXTURE0+y)}function O(E,y){const G=i.get(E);if(E.version>0&&G.__version!==E.version){ge(G,E,y);return}n.bindTexture(t.TEXTURE_CUBE_MAP,G.__webglTexture,t.TEXTURE0+y)}const j={[qc]:t.REPEAT,[zn]:t.CLAMP_TO_EDGE,[Yc]:t.MIRRORED_REPEAT},K={[qt]:t.NEAREST,[kh]:t.NEAREST_MIPMAP_NEAREST,[vu]:t.NEAREST_MIPMAP_LINEAR,[wn]:t.LINEAR,[Wy]:t.LINEAR_MIPMAP_NEAREST,[To]:t.LINEAR_MIPMAP_LINEAR},oe={[nS]:t.NEVER,[lS]:t.ALWAYS,[iS]:t.LESS,[I_]:t.LEQUAL,[rS]:t.EQUAL,[aS]:t.GEQUAL,[sS]:t.GREATER,[oS]:t.NOTEQUAL};function q(E,y,G){if(G?(t.texParameteri(E,t.TEXTURE_WRAP_S,j[y.wrapS]),t.texParameteri(E,t.TEXTURE_WRAP_T,j[y.wrapT]),(E===t.TEXTURE_3D||E===t.TEXTURE_2D_ARRAY)&&t.texParameteri(E,t.TEXTURE_WRAP_R,j[y.wrapR]),t.texParameteri(E,t.TEXTURE_MAG_FILTER,K[y.magFilter]),t.texParameteri(E,t.TEXTURE_MIN_FILTER,K[y.minFilter])):(t.texParameteri(E,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(E,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),(E===t.TEXTURE_3D||E===t.TEXTURE_2D_ARRAY)&&t.texParameteri(E,t.TEXTURE_WRAP_R,t.CLAMP_TO_EDGE),(y.wrapS!==zn||y.wrapT!==zn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),t.texParameteri(E,t.TEXTURE_MAG_FILTER,C(y.magFilter)),t.texParameteri(E,t.TEXTURE_MIN_FILTER,C(y.minFilter)),y.minFilter!==qt&&y.minFilter!==wn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),y.compareFunction&&(t.texParameteri(E,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(E,t.TEXTURE_COMPARE_FUNC,oe[y.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const se=e.get("EXT_texture_filter_anisotropic");if(y.magFilter===qt||y.minFilter!==vu&&y.minFilter!==To||y.type===Ui&&e.has("OES_texture_float_linear")===!1||a===!1&&y.type===Ao&&e.has("OES_texture_half_float_linear")===!1)return;(y.anisotropy>1||i.get(y).__currentAnisotropy)&&(t.texParameterf(E,se.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,r.getMaxAnisotropy())),i.get(y).__currentAnisotropy=y.anisotropy)}}function Z(E,y){let G=!1;E.__webglInit===void 0&&(E.__webglInit=!0,y.addEventListener("dispose",A));const se=y.source;let ne=h.get(se);ne===void 0&&(ne={},h.set(se,ne));const ae=F(y);if(ae!==E.__cacheKey){ne[ae]===void 0&&(ne[ae]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,G=!0),ne[ae].usedTimes++;const ye=ne[E.__cacheKey];ye!==void 0&&(ne[E.__cacheKey].usedTimes--,ye.usedTimes===0&&T(y)),E.__cacheKey=ae,E.__webglTexture=ne[ae].texture}return G}function ce(E,y,G){let se=t.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(se=t.TEXTURE_2D_ARRAY),y.isData3DTexture&&(se=t.TEXTURE_3D);const ne=Z(E,y),ae=y.source;n.bindTexture(se,E.__webglTexture,t.TEXTURE0+G);const ye=i.get(ae);if(ae.version!==ye.__version||ne===!0){n.activeTexture(t.TEXTURE0+G);const he=Qe.getPrimaries(Qe.workingColorSpace),ve=y.colorSpace===Tn?null:Qe.getPrimaries(y.colorSpace),Re=y.colorSpace===Tn||he===ve?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,y.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,y.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Re);const Be=c(y)&&m(y.image)===!1;let ee=x(y.image,Be,!1,r.maxTextureSize);ee=J(y,ee);const Ze=m(ee)||a,je=s.convert(y.format,y.colorSpace);let Ue=s.convert(y.type),we=S(y.internalFormat,je,Ue,y.colorSpace,y.isVideoTexture);q(se,y,Ze);let xe;const Oe=y.mipmaps,Ye=a&&y.isVideoTexture!==!0&&we!==N_,dt=ye.__version===void 0||ne===!0,Ge=R(y,ee,Ze);if(y.isDepthTexture)we=t.DEPTH_COMPONENT,a?y.type===Ui?we=t.DEPTH_COMPONENT32F:y.type===Ni?we=t.DEPTH_COMPONENT24:y.type===vr?we=t.DEPTH24_STENCIL8:we=t.DEPTH_COMPONENT16:y.type===Ui&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),y.format===xr&&we===t.DEPTH_COMPONENT&&y.type!==tf&&y.type!==Ni&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),y.type=Ni,Ue=s.convert(y.type)),y.format===Ts&&we===t.DEPTH_COMPONENT&&(we=t.DEPTH_STENCIL,y.type!==vr&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),y.type=vr,Ue=s.convert(y.type))),dt&&(Ye?n.texStorage2D(t.TEXTURE_2D,1,we,ee.width,ee.height):n.texImage2D(t.TEXTURE_2D,0,we,ee.width,ee.height,0,je,Ue,null));else if(y.isDataTexture)if(Oe.length>0&&Ze){Ye&&dt&&n.texStorage2D(t.TEXTURE_2D,Ge,we,Oe[0].width,Oe[0].height);for(let le=0,b=Oe.length;le<b;le++)xe=Oe[le],Ye?n.texSubImage2D(t.TEXTURE_2D,le,0,0,xe.width,xe.height,je,Ue,xe.data):n.texImage2D(t.TEXTURE_2D,le,we,xe.width,xe.height,0,je,Ue,xe.data);y.generateMipmaps=!1}else Ye?(dt&&n.texStorage2D(t.TEXTURE_2D,Ge,we,ee.width,ee.height),n.texSubImage2D(t.TEXTURE_2D,0,0,0,ee.width,ee.height,je,Ue,ee.data)):n.texImage2D(t.TEXTURE_2D,0,we,ee.width,ee.height,0,je,Ue,ee.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){Ye&&dt&&n.texStorage3D(t.TEXTURE_2D_ARRAY,Ge,we,Oe[0].width,Oe[0].height,ee.depth);for(let le=0,b=Oe.length;le<b;le++)xe=Oe[le],y.format!==Hn?je!==null?Ye?n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,le,0,0,0,xe.width,xe.height,ee.depth,je,xe.data,0,0):n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,le,we,xe.width,xe.height,ee.depth,0,xe.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ye?n.texSubImage3D(t.TEXTURE_2D_ARRAY,le,0,0,0,xe.width,xe.height,ee.depth,je,Ue,xe.data):n.texImage3D(t.TEXTURE_2D_ARRAY,le,we,xe.width,xe.height,ee.depth,0,je,Ue,xe.data)}else{Ye&&dt&&n.texStorage2D(t.TEXTURE_2D,Ge,we,Oe[0].width,Oe[0].height);for(let le=0,b=Oe.length;le<b;le++)xe=Oe[le],y.format!==Hn?je!==null?Ye?n.compressedTexSubImage2D(t.TEXTURE_2D,le,0,0,xe.width,xe.height,je,xe.data):n.compressedTexImage2D(t.TEXTURE_2D,le,we,xe.width,xe.height,0,xe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ye?n.texSubImage2D(t.TEXTURE_2D,le,0,0,xe.width,xe.height,je,Ue,xe.data):n.texImage2D(t.TEXTURE_2D,le,we,xe.width,xe.height,0,je,Ue,xe.data)}else if(y.isDataArrayTexture)Ye?(dt&&n.texStorage3D(t.TEXTURE_2D_ARRAY,Ge,we,ee.width,ee.height,ee.depth),n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,ee.width,ee.height,ee.depth,je,Ue,ee.data)):n.texImage3D(t.TEXTURE_2D_ARRAY,0,we,ee.width,ee.height,ee.depth,0,je,Ue,ee.data);else if(y.isData3DTexture)Ye?(dt&&n.texStorage3D(t.TEXTURE_3D,Ge,we,ee.width,ee.height,ee.depth),n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,ee.width,ee.height,ee.depth,je,Ue,ee.data)):n.texImage3D(t.TEXTURE_3D,0,we,ee.width,ee.height,ee.depth,0,je,Ue,ee.data);else if(y.isFramebufferTexture){if(dt)if(Ye)n.texStorage2D(t.TEXTURE_2D,Ge,we,ee.width,ee.height);else{let le=ee.width,b=ee.height;for(let de=0;de<Ge;de++)n.texImage2D(t.TEXTURE_2D,de,we,le,b,0,je,Ue,null),le>>=1,b>>=1}}else if(Oe.length>0&&Ze){Ye&&dt&&n.texStorage2D(t.TEXTURE_2D,Ge,we,Oe[0].width,Oe[0].height);for(let le=0,b=Oe.length;le<b;le++)xe=Oe[le],Ye?n.texSubImage2D(t.TEXTURE_2D,le,0,0,je,Ue,xe):n.texImage2D(t.TEXTURE_2D,le,we,je,Ue,xe);y.generateMipmaps=!1}else Ye?(dt&&n.texStorage2D(t.TEXTURE_2D,Ge,we,ee.width,ee.height),n.texSubImage2D(t.TEXTURE_2D,0,0,0,je,Ue,ee)):n.texImage2D(t.TEXTURE_2D,0,we,je,Ue,ee);_(y,Ze)&&g(se),ye.__version=ae.version,y.onUpdate&&y.onUpdate(y)}E.__version=y.version}function ge(E,y,G){if(y.image.length!==6)return;const se=Z(E,y),ne=y.source;n.bindTexture(t.TEXTURE_CUBE_MAP,E.__webglTexture,t.TEXTURE0+G);const ae=i.get(ne);if(ne.version!==ae.__version||se===!0){n.activeTexture(t.TEXTURE0+G);const ye=Qe.getPrimaries(Qe.workingColorSpace),he=y.colorSpace===Tn?null:Qe.getPrimaries(y.colorSpace),ve=y.colorSpace===Tn||ye===he?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,y.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,y.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,ve);const Re=y.isCompressedTexture||y.image[0].isCompressedTexture,Be=y.image[0]&&y.image[0].isDataTexture,ee=[];for(let le=0;le<6;le++)!Re&&!Be?ee[le]=x(y.image[le],!1,!0,r.maxCubemapSize):ee[le]=Be?y.image[le].image:y.image[le],ee[le]=J(y,ee[le]);const Ze=ee[0],je=m(Ze)||a,Ue=s.convert(y.format,y.colorSpace),we=s.convert(y.type),xe=S(y.internalFormat,Ue,we,y.colorSpace),Oe=a&&y.isVideoTexture!==!0,Ye=ae.__version===void 0||se===!0;let dt=R(y,Ze,je);q(t.TEXTURE_CUBE_MAP,y,je);let Ge;if(Re){Oe&&Ye&&n.texStorage2D(t.TEXTURE_CUBE_MAP,dt,xe,Ze.width,Ze.height);for(let le=0;le<6;le++){Ge=ee[le].mipmaps;for(let b=0;b<Ge.length;b++){const de=Ge[b];y.format!==Hn?Ue!==null?Oe?n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+le,b,0,0,de.width,de.height,Ue,de.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+le,b,xe,de.width,de.height,0,de.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Oe?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+le,b,0,0,de.width,de.height,Ue,we,de.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+le,b,xe,de.width,de.height,0,Ue,we,de.data)}}}else{Ge=y.mipmaps,Oe&&Ye&&(Ge.length>0&&dt++,n.texStorage2D(t.TEXTURE_CUBE_MAP,dt,xe,ee[0].width,ee[0].height));for(let le=0;le<6;le++)if(Be){Oe?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,0,0,ee[le].width,ee[le].height,Ue,we,ee[le].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,xe,ee[le].width,ee[le].height,0,Ue,we,ee[le].data);for(let b=0;b<Ge.length;b++){const fe=Ge[b].image[le].image;Oe?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+le,b+1,0,0,fe.width,fe.height,Ue,we,fe.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+le,b+1,xe,fe.width,fe.height,0,Ue,we,fe.data)}}else{Oe?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,0,0,Ue,we,ee[le]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,xe,Ue,we,ee[le]);for(let b=0;b<Ge.length;b++){const de=Ge[b];Oe?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+le,b+1,0,0,Ue,we,de.image[le]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+le,b+1,xe,Ue,we,de.image[le])}}}_(y,je)&&g(t.TEXTURE_CUBE_MAP),ae.__version=ne.version,y.onUpdate&&y.onUpdate(y)}E.__version=y.version}function _e(E,y,G,se,ne,ae){const ye=s.convert(G.format,G.colorSpace),he=s.convert(G.type),ve=S(G.internalFormat,ye,he,G.colorSpace);if(!i.get(y).__hasExternalTextures){const Be=Math.max(1,y.width>>ae),ee=Math.max(1,y.height>>ae);ne===t.TEXTURE_3D||ne===t.TEXTURE_2D_ARRAY?n.texImage3D(ne,ae,ve,Be,ee,y.depth,0,ye,he,null):n.texImage2D(ne,ae,ve,Be,ee,0,ye,he,null)}n.bindFramebuffer(t.FRAMEBUFFER,E),N(y)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,se,ne,i.get(G).__webglTexture,0,De(y)):(ne===t.TEXTURE_2D||ne>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&ne<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,se,ne,i.get(G).__webglTexture,ae),n.bindFramebuffer(t.FRAMEBUFFER,null)}function be(E,y,G){if(t.bindRenderbuffer(t.RENDERBUFFER,E),y.depthBuffer&&!y.stencilBuffer){let se=a===!0?t.DEPTH_COMPONENT24:t.DEPTH_COMPONENT16;if(G||N(y)){const ne=y.depthTexture;ne&&ne.isDepthTexture&&(ne.type===Ui?se=t.DEPTH_COMPONENT32F:ne.type===Ni&&(se=t.DEPTH_COMPONENT24));const ae=De(y);N(y)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,ae,se,y.width,y.height):t.renderbufferStorageMultisample(t.RENDERBUFFER,ae,se,y.width,y.height)}else t.renderbufferStorage(t.RENDERBUFFER,se,y.width,y.height);t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.RENDERBUFFER,E)}else if(y.depthBuffer&&y.stencilBuffer){const se=De(y);G&&N(y)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,se,t.DEPTH24_STENCIL8,y.width,y.height):N(y)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,se,t.DEPTH24_STENCIL8,y.width,y.height):t.renderbufferStorage(t.RENDERBUFFER,t.DEPTH_STENCIL,y.width,y.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.RENDERBUFFER,E)}else{const se=y.isWebGLMultipleRenderTargets===!0?y.texture:[y.texture];for(let ne=0;ne<se.length;ne++){const ae=se[ne],ye=s.convert(ae.format,ae.colorSpace),he=s.convert(ae.type),ve=S(ae.internalFormat,ye,he,ae.colorSpace),Re=De(y);G&&N(y)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,Re,ve,y.width,y.height):N(y)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Re,ve,y.width,y.height):t.renderbufferStorage(t.RENDERBUFFER,ve,y.width,y.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function Pe(E,y){if(y&&y.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,E),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(y.depthTexture).__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),$(y.depthTexture,0);const se=i.get(y.depthTexture).__webglTexture,ne=De(y);if(y.depthTexture.format===xr)N(y)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,se,0,ne):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,se,0);else if(y.depthTexture.format===Ts)N(y)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,se,0,ne):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,se,0);else throw new Error("Unknown depthTexture format")}function re(E){const y=i.get(E),G=E.isWebGLCubeRenderTarget===!0;if(E.depthTexture&&!y.__autoAllocateDepthBuffer){if(G)throw new Error("target.depthTexture not supported in Cube render targets");Pe(y.__webglFramebuffer,E)}else if(G){y.__webglDepthbuffer=[];for(let se=0;se<6;se++)n.bindFramebuffer(t.FRAMEBUFFER,y.__webglFramebuffer[se]),y.__webglDepthbuffer[se]=t.createRenderbuffer(),be(y.__webglDepthbuffer[se],E,!1)}else n.bindFramebuffer(t.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer=t.createRenderbuffer(),be(y.__webglDepthbuffer,E,!1);n.bindFramebuffer(t.FRAMEBUFFER,null)}function Ce(E,y,G){const se=i.get(E);y!==void 0&&_e(se.__webglFramebuffer,E,E.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),G!==void 0&&re(E)}function H(E){const y=E.texture,G=i.get(E),se=i.get(y);E.addEventListener("dispose",U),E.isWebGLMultipleRenderTargets!==!0&&(se.__webglTexture===void 0&&(se.__webglTexture=t.createTexture()),se.__version=y.version,o.memory.textures++);const ne=E.isWebGLCubeRenderTarget===!0,ae=E.isWebGLMultipleRenderTargets===!0,ye=m(E)||a;if(ne){G.__webglFramebuffer=[];for(let he=0;he<6;he++)if(a&&y.mipmaps&&y.mipmaps.length>0){G.__webglFramebuffer[he]=[];for(let ve=0;ve<y.mipmaps.length;ve++)G.__webglFramebuffer[he][ve]=t.createFramebuffer()}else G.__webglFramebuffer[he]=t.createFramebuffer()}else{if(a&&y.mipmaps&&y.mipmaps.length>0){G.__webglFramebuffer=[];for(let he=0;he<y.mipmaps.length;he++)G.__webglFramebuffer[he]=t.createFramebuffer()}else G.__webglFramebuffer=t.createFramebuffer();if(ae)if(r.drawBuffers){const he=E.texture;for(let ve=0,Re=he.length;ve<Re;ve++){const Be=i.get(he[ve]);Be.__webglTexture===void 0&&(Be.__webglTexture=t.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&E.samples>0&&N(E)===!1){const he=ae?y:[y];G.__webglMultisampledFramebuffer=t.createFramebuffer(),G.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let ve=0;ve<he.length;ve++){const Re=he[ve];G.__webglColorRenderbuffer[ve]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,G.__webglColorRenderbuffer[ve]);const Be=s.convert(Re.format,Re.colorSpace),ee=s.convert(Re.type),Ze=S(Re.internalFormat,Be,ee,Re.colorSpace,E.isXRRenderTarget===!0),je=De(E);t.renderbufferStorageMultisample(t.RENDERBUFFER,je,Ze,E.width,E.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ve,t.RENDERBUFFER,G.__webglColorRenderbuffer[ve])}t.bindRenderbuffer(t.RENDERBUFFER,null),E.depthBuffer&&(G.__webglDepthRenderbuffer=t.createRenderbuffer(),be(G.__webglDepthRenderbuffer,E,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(ne){n.bindTexture(t.TEXTURE_CUBE_MAP,se.__webglTexture),q(t.TEXTURE_CUBE_MAP,y,ye);for(let he=0;he<6;he++)if(a&&y.mipmaps&&y.mipmaps.length>0)for(let ve=0;ve<y.mipmaps.length;ve++)_e(G.__webglFramebuffer[he][ve],E,y,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+he,ve);else _e(G.__webglFramebuffer[he],E,y,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+he,0);_(y,ye)&&g(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(ae){const he=E.texture;for(let ve=0,Re=he.length;ve<Re;ve++){const Be=he[ve],ee=i.get(Be);n.bindTexture(t.TEXTURE_2D,ee.__webglTexture),q(t.TEXTURE_2D,Be,ye),_e(G.__webglFramebuffer,E,Be,t.COLOR_ATTACHMENT0+ve,t.TEXTURE_2D,0),_(Be,ye)&&g(t.TEXTURE_2D)}n.unbindTexture()}else{let he=t.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(a?he=E.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),n.bindTexture(he,se.__webglTexture),q(he,y,ye),a&&y.mipmaps&&y.mipmaps.length>0)for(let ve=0;ve<y.mipmaps.length;ve++)_e(G.__webglFramebuffer[ve],E,y,t.COLOR_ATTACHMENT0,he,ve);else _e(G.__webglFramebuffer,E,y,t.COLOR_ATTACHMENT0,he,0);_(y,ye)&&g(he),n.unbindTexture()}E.depthBuffer&&re(E)}function Tt(E){const y=m(E)||a,G=E.isWebGLMultipleRenderTargets===!0?E.texture:[E.texture];for(let se=0,ne=G.length;se<ne;se++){const ae=G[se];if(_(ae,y)){const ye=E.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,he=i.get(ae).__webglTexture;n.bindTexture(ye,he),g(ye),n.unbindTexture()}}}function Ee(E){if(a&&E.samples>0&&N(E)===!1){const y=E.isWebGLMultipleRenderTargets?E.texture:[E.texture],G=E.width,se=E.height;let ne=t.COLOR_BUFFER_BIT;const ae=[],ye=E.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,he=i.get(E),ve=E.isWebGLMultipleRenderTargets===!0;if(ve)for(let Re=0;Re<y.length;Re++)n.bindFramebuffer(t.FRAMEBUFFER,he.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Re,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,he.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Re,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,he.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,he.__webglFramebuffer);for(let Re=0;Re<y.length;Re++){ae.push(t.COLOR_ATTACHMENT0+Re),E.depthBuffer&&ae.push(ye);const Be=he.__ignoreDepthValues!==void 0?he.__ignoreDepthValues:!1;if(Be===!1&&(E.depthBuffer&&(ne|=t.DEPTH_BUFFER_BIT),E.stencilBuffer&&(ne|=t.STENCIL_BUFFER_BIT)),ve&&t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,he.__webglColorRenderbuffer[Re]),Be===!0&&(t.invalidateFramebuffer(t.READ_FRAMEBUFFER,[ye]),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[ye])),ve){const ee=i.get(y[Re]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,ee,0)}t.blitFramebuffer(0,0,G,se,0,0,G,se,ne,t.NEAREST),u&&t.invalidateFramebuffer(t.READ_FRAMEBUFFER,ae)}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),ve)for(let Re=0;Re<y.length;Re++){n.bindFramebuffer(t.FRAMEBUFFER,he.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Re,t.RENDERBUFFER,he.__webglColorRenderbuffer[Re]);const Be=i.get(y[Re]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,he.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Re,t.TEXTURE_2D,Be,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,he.__webglMultisampledFramebuffer)}}function De(E){return Math.min(r.maxSamples,E.samples)}function N(E){const y=i.get(E);return a&&E.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function te(E){const y=o.render.frame;f.get(E)!==y&&(f.set(E,y),E.update())}function J(E,y){const G=E.colorSpace,se=E.format,ne=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||E.format===Kc||G!==xi&&G!==Tn&&(Qe.getTransfer(G)===rt?a===!1?e.has("EXT_sRGB")===!0&&se===Hn?(E.format=Kc,E.minFilter=wn,E.generateMipmaps=!1):y=O_.sRGBToLinear(y):(se!==Hn||ne!==Xi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",G)),y}this.allocateTextureUnit=L,this.resetTextureUnits=Q,this.setTexture2D=$,this.setTexture2DArray=Y,this.setTexture3D=P,this.setTextureCube=O,this.rebindTextures=Ce,this.setupRenderTarget=H,this.updateRenderTargetMipmap=Tt,this.updateMultisampleRenderTarget=Ee,this.setupDepthRenderbuffer=re,this.setupFrameBufferTexture=_e,this.useMultisampledRTT=N}function u1(t,e,n){const i=n.isWebGL2;function r(s,o=Tn){let a;const l=Qe.getTransfer(o);if(s===Xi)return t.UNSIGNED_BYTE;if(s===R_)return t.UNSIGNED_SHORT_4_4_4_4;if(s===b_)return t.UNSIGNED_SHORT_5_5_5_1;if(s===jy)return t.BYTE;if(s===Xy)return t.SHORT;if(s===tf)return t.UNSIGNED_SHORT;if(s===C_)return t.INT;if(s===Ni)return t.UNSIGNED_INT;if(s===Ui)return t.FLOAT;if(s===Ao)return i?t.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===$y)return t.ALPHA;if(s===Hn)return t.RGBA;if(s===qy)return t.LUMINANCE;if(s===Yy)return t.LUMINANCE_ALPHA;if(s===xr)return t.DEPTH_COMPONENT;if(s===Ts)return t.DEPTH_STENCIL;if(s===Kc)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===Ky)return t.RED;if(s===L_)return t.RED_INTEGER;if(s===Zy)return t.RG;if(s===P_)return t.RG_INTEGER;if(s===D_)return t.RGBA_INTEGER;if(s===xu||s===yu||s===Su||s===Mu)if(l===rt)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===xu)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===yu)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Su)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Mu)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===xu)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===yu)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Su)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Mu)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Bh||s===zh||s===Hh||s===Gh)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===Bh)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===zh)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Hh)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Gh)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===N_)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===Vh||s===Wh)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===Vh)return l===rt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===Wh)return l===rt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===jh||s===Xh||s===$h||s===qh||s===Yh||s===Kh||s===Zh||s===Qh||s===Jh||s===ep||s===tp||s===np||s===ip||s===rp)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===jh)return l===rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Xh)return l===rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===$h)return l===rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===qh)return l===rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Yh)return l===rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Kh)return l===rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Zh)return l===rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Qh)return l===rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Jh)return l===rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===ep)return l===rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===tp)return l===rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===np)return l===rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===ip)return l===rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===rp)return l===rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Eu||s===sp||s===op)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===Eu)return l===rt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===sp)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===op)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===Qy||s===ap||s===lp||s===up)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(s===Eu)return a.COMPRESSED_RED_RGTC1_EXT;if(s===ap)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===lp)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===up)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===vr?i?t.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):t[s]!==void 0?t[s]:null}return{convert:r}}class c1 extends pn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Ii extends Mt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const d1={type:"move"};class $u{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ii,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ii,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new k,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new k),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ii,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new k,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new k),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,u=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(u&&e.hand){o=!0;for(const x of e.hand.values()){const m=n.getJointPose(x,i),c=this._getHandJoint(u,x);m!==null&&(c.matrix.fromArray(m.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,c.jointRadius=m.radius),c.visible=m!==null}const f=u.joints["index-finger-tip"],d=u.joints["thumb-tip"],h=f.position.distanceTo(d.position),p=.02,v=.005;u.inputState.pinching&&h>p+v?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&h<=p-v&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(d1)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),u!==null&&(u.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new Ii;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}class f1 extends Ps{constructor(e,n){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,u=null,f=null,d=null,h=null,p=null,v=null;const x=n.getContextAttributes();let m=null,c=null;const _=[],g=[],S=new qe;let R=null;const C=new pn;C.layers.enable(1),C.viewport=new Lt;const A=new pn;A.layers.enable(2),A.viewport=new Lt;const U=[C,A],M=new c1;M.layers.enable(1),M.layers.enable(2);let T=null,B=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let Z=_[q];return Z===void 0&&(Z=new $u,_[q]=Z),Z.getTargetRaySpace()},this.getControllerGrip=function(q){let Z=_[q];return Z===void 0&&(Z=new $u,_[q]=Z),Z.getGripSpace()},this.getHand=function(q){let Z=_[q];return Z===void 0&&(Z=new $u,_[q]=Z),Z.getHandSpace()};function z(q){const Z=g.indexOf(q.inputSource);if(Z===-1)return;const ce=_[Z];ce!==void 0&&(ce.update(q.inputSource,q.frame,u||o),ce.dispatchEvent({type:q.type,data:q.inputSource}))}function Q(){r.removeEventListener("select",z),r.removeEventListener("selectstart",z),r.removeEventListener("selectend",z),r.removeEventListener("squeeze",z),r.removeEventListener("squeezestart",z),r.removeEventListener("squeezeend",z),r.removeEventListener("end",Q),r.removeEventListener("inputsourceschange",L);for(let q=0;q<_.length;q++){const Z=g[q];Z!==null&&(g[q]=null,_[q].disconnect(Z))}T=null,B=null,e.setRenderTarget(m),p=null,h=null,d=null,r=null,c=null,oe.stop(),i.isPresenting=!1,e.setPixelRatio(R),e.setSize(S.width,S.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){s=q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){a=q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||o},this.setReferenceSpace=function(q){u=q},this.getBaseLayer=function(){return h!==null?h:p},this.getBinding=function(){return d},this.getFrame=function(){return v},this.getSession=function(){return r},this.setSession=async function(q){if(r=q,r!==null){if(m=e.getRenderTarget(),r.addEventListener("select",z),r.addEventListener("selectstart",z),r.addEventListener("selectend",z),r.addEventListener("squeeze",z),r.addEventListener("squeezestart",z),r.addEventListener("squeezeend",z),r.addEventListener("end",Q),r.addEventListener("inputsourceschange",L),x.xrCompatible!==!0&&await n.makeXRCompatible(),R=e.getPixelRatio(),e.getSize(S),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const Z={antialias:r.renderState.layers===void 0?x.antialias:!0,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,n,Z),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),c=new Ar(p.framebufferWidth,p.framebufferHeight,{format:Hn,type:Xi,colorSpace:e.outputColorSpace,stencilBuffer:x.stencil})}else{let Z=null,ce=null,ge=null;x.depth&&(ge=x.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,Z=x.stencil?Ts:xr,ce=x.stencil?vr:Ni);const _e={colorFormat:n.RGBA8,depthFormat:ge,scaleFactor:s};d=new XRWebGLBinding(r,n),h=d.createProjectionLayer(_e),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),c=new Ar(h.textureWidth,h.textureHeight,{format:Hn,type:Xi,depthTexture:new K_(h.textureWidth,h.textureHeight,ce,void 0,void 0,void 0,void 0,void 0,void 0,Z),stencilBuffer:x.stencil,colorSpace:e.outputColorSpace,samples:x.antialias?4:0});const be=e.properties.get(c);be.__ignoreDepthValues=h.ignoreDepthValues}c.isXRRenderTarget=!0,this.setFoveation(l),u=null,o=await r.requestReferenceSpace(a),oe.setContext(r),oe.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function L(q){for(let Z=0;Z<q.removed.length;Z++){const ce=q.removed[Z],ge=g.indexOf(ce);ge>=0&&(g[ge]=null,_[ge].disconnect(ce))}for(let Z=0;Z<q.added.length;Z++){const ce=q.added[Z];let ge=g.indexOf(ce);if(ge===-1){for(let be=0;be<_.length;be++)if(be>=g.length){g.push(ce),ge=be;break}else if(g[be]===null){g[be]=ce,ge=be;break}if(ge===-1)break}const _e=_[ge];_e&&_e.connect(ce)}}const F=new k,$=new k;function Y(q,Z,ce){F.setFromMatrixPosition(Z.matrixWorld),$.setFromMatrixPosition(ce.matrixWorld);const ge=F.distanceTo($),_e=Z.projectionMatrix.elements,be=ce.projectionMatrix.elements,Pe=_e[14]/(_e[10]-1),re=_e[14]/(_e[10]+1),Ce=(_e[9]+1)/_e[5],H=(_e[9]-1)/_e[5],Tt=(_e[8]-1)/_e[0],Ee=(be[8]+1)/be[0],De=Pe*Tt,N=Pe*Ee,te=ge/(-Tt+Ee),J=te*-Tt;Z.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(J),q.translateZ(te),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert();const E=Pe+te,y=re+te,G=De-J,se=N+(ge-J),ne=Ce*re/y*E,ae=H*re/y*E;q.projectionMatrix.makePerspective(G,se,ne,ae,E,y),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}function P(q,Z){Z===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(Z.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(r===null)return;M.near=A.near=C.near=q.near,M.far=A.far=C.far=q.far,(T!==M.near||B!==M.far)&&(r.updateRenderState({depthNear:M.near,depthFar:M.far}),T=M.near,B=M.far);const Z=q.parent,ce=M.cameras;P(M,Z);for(let ge=0;ge<ce.length;ge++)P(ce[ge],Z);ce.length===2?Y(M,C,A):M.projectionMatrix.copy(C.projectionMatrix),O(q,M,Z)};function O(q,Z,ce){ce===null?q.matrix.copy(Z.matrixWorld):(q.matrix.copy(ce.matrixWorld),q.matrix.invert(),q.matrix.multiply(Z.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(Z.projectionMatrix),q.projectionMatrixInverse.copy(Z.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=Zc*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(h===null&&p===null))return l},this.setFoveation=function(q){l=q,h!==null&&(h.fixedFoveation=q),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=q)};let j=null;function K(q,Z){if(f=Z.getViewerPose(u||o),v=Z,f!==null){const ce=f.views;p!==null&&(e.setRenderTargetFramebuffer(c,p.framebuffer),e.setRenderTarget(c));let ge=!1;ce.length!==M.cameras.length&&(M.cameras.length=0,ge=!0);for(let _e=0;_e<ce.length;_e++){const be=ce[_e];let Pe=null;if(p!==null)Pe=p.getViewport(be);else{const Ce=d.getViewSubImage(h,be);Pe=Ce.viewport,_e===0&&(e.setRenderTargetTextures(c,Ce.colorTexture,h.ignoreDepthValues?void 0:Ce.depthStencilTexture),e.setRenderTarget(c))}let re=U[_e];re===void 0&&(re=new pn,re.layers.enable(_e),re.viewport=new Lt,U[_e]=re),re.matrix.fromArray(be.transform.matrix),re.matrix.decompose(re.position,re.quaternion,re.scale),re.projectionMatrix.fromArray(be.projectionMatrix),re.projectionMatrixInverse.copy(re.projectionMatrix).invert(),re.viewport.set(Pe.x,Pe.y,Pe.width,Pe.height),_e===0&&(M.matrix.copy(re.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),ge===!0&&M.cameras.push(re)}}for(let ce=0;ce<_.length;ce++){const ge=g[ce],_e=_[ce];ge!==null&&_e!==void 0&&_e.update(ge,Z,u||o)}j&&j(q,Z),Z.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:Z}),v=null}const oe=new q_;oe.setAnimationLoop(K),this.setAnimationLoop=function(q){j=q},this.dispose=function(){}}}function h1(t,e){function n(m,c){m.matrixAutoUpdate===!0&&m.updateMatrix(),c.value.copy(m.matrix)}function i(m,c){c.color.getRGB(m.fogColor.value,j_(t)),c.isFog?(m.fogNear.value=c.near,m.fogFar.value=c.far):c.isFogExp2&&(m.fogDensity.value=c.density)}function r(m,c,_,g,S){c.isMeshBasicMaterial||c.isMeshLambertMaterial?s(m,c):c.isMeshToonMaterial?(s(m,c),d(m,c)):c.isMeshPhongMaterial?(s(m,c),f(m,c)):c.isMeshStandardMaterial?(s(m,c),h(m,c),c.isMeshPhysicalMaterial&&p(m,c,S)):c.isMeshMatcapMaterial?(s(m,c),v(m,c)):c.isMeshDepthMaterial?s(m,c):c.isMeshDistanceMaterial?(s(m,c),x(m,c)):c.isMeshNormalMaterial?s(m,c):c.isLineBasicMaterial?(o(m,c),c.isLineDashedMaterial&&a(m,c)):c.isPointsMaterial?l(m,c,_,g):c.isSpriteMaterial?u(m,c):c.isShadowMaterial?(m.color.value.copy(c.color),m.opacity.value=c.opacity):c.isShaderMaterial&&(c.uniformsNeedUpdate=!1)}function s(m,c){m.opacity.value=c.opacity,c.color&&m.diffuse.value.copy(c.color),c.emissive&&m.emissive.value.copy(c.emissive).multiplyScalar(c.emissiveIntensity),c.map&&(m.map.value=c.map,n(c.map,m.mapTransform)),c.alphaMap&&(m.alphaMap.value=c.alphaMap,n(c.alphaMap,m.alphaMapTransform)),c.bumpMap&&(m.bumpMap.value=c.bumpMap,n(c.bumpMap,m.bumpMapTransform),m.bumpScale.value=c.bumpScale,c.side===on&&(m.bumpScale.value*=-1)),c.normalMap&&(m.normalMap.value=c.normalMap,n(c.normalMap,m.normalMapTransform),m.normalScale.value.copy(c.normalScale),c.side===on&&m.normalScale.value.negate()),c.displacementMap&&(m.displacementMap.value=c.displacementMap,n(c.displacementMap,m.displacementMapTransform),m.displacementScale.value=c.displacementScale,m.displacementBias.value=c.displacementBias),c.emissiveMap&&(m.emissiveMap.value=c.emissiveMap,n(c.emissiveMap,m.emissiveMapTransform)),c.specularMap&&(m.specularMap.value=c.specularMap,n(c.specularMap,m.specularMapTransform)),c.alphaTest>0&&(m.alphaTest.value=c.alphaTest);const _=e.get(c).envMap;if(_&&(m.envMap.value=_,m.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=c.reflectivity,m.ior.value=c.ior,m.refractionRatio.value=c.refractionRatio),c.lightMap){m.lightMap.value=c.lightMap;const g=t._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=c.lightMapIntensity*g,n(c.lightMap,m.lightMapTransform)}c.aoMap&&(m.aoMap.value=c.aoMap,m.aoMapIntensity.value=c.aoMapIntensity,n(c.aoMap,m.aoMapTransform))}function o(m,c){m.diffuse.value.copy(c.color),m.opacity.value=c.opacity,c.map&&(m.map.value=c.map,n(c.map,m.mapTransform))}function a(m,c){m.dashSize.value=c.dashSize,m.totalSize.value=c.dashSize+c.gapSize,m.scale.value=c.scale}function l(m,c,_,g){m.diffuse.value.copy(c.color),m.opacity.value=c.opacity,m.size.value=c.size*_,m.scale.value=g*.5,c.map&&(m.map.value=c.map,n(c.map,m.uvTransform)),c.alphaMap&&(m.alphaMap.value=c.alphaMap,n(c.alphaMap,m.alphaMapTransform)),c.alphaTest>0&&(m.alphaTest.value=c.alphaTest)}function u(m,c){m.diffuse.value.copy(c.color),m.opacity.value=c.opacity,m.rotation.value=c.rotation,c.map&&(m.map.value=c.map,n(c.map,m.mapTransform)),c.alphaMap&&(m.alphaMap.value=c.alphaMap,n(c.alphaMap,m.alphaMapTransform)),c.alphaTest>0&&(m.alphaTest.value=c.alphaTest)}function f(m,c){m.specular.value.copy(c.specular),m.shininess.value=Math.max(c.shininess,1e-4)}function d(m,c){c.gradientMap&&(m.gradientMap.value=c.gradientMap)}function h(m,c){m.metalness.value=c.metalness,c.metalnessMap&&(m.metalnessMap.value=c.metalnessMap,n(c.metalnessMap,m.metalnessMapTransform)),m.roughness.value=c.roughness,c.roughnessMap&&(m.roughnessMap.value=c.roughnessMap,n(c.roughnessMap,m.roughnessMapTransform)),e.get(c).envMap&&(m.envMapIntensity.value=c.envMapIntensity)}function p(m,c,_){m.ior.value=c.ior,c.sheen>0&&(m.sheenColor.value.copy(c.sheenColor).multiplyScalar(c.sheen),m.sheenRoughness.value=c.sheenRoughness,c.sheenColorMap&&(m.sheenColorMap.value=c.sheenColorMap,n(c.sheenColorMap,m.sheenColorMapTransform)),c.sheenRoughnessMap&&(m.sheenRoughnessMap.value=c.sheenRoughnessMap,n(c.sheenRoughnessMap,m.sheenRoughnessMapTransform))),c.clearcoat>0&&(m.clearcoat.value=c.clearcoat,m.clearcoatRoughness.value=c.clearcoatRoughness,c.clearcoatMap&&(m.clearcoatMap.value=c.clearcoatMap,n(c.clearcoatMap,m.clearcoatMapTransform)),c.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=c.clearcoatRoughnessMap,n(c.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),c.clearcoatNormalMap&&(m.clearcoatNormalMap.value=c.clearcoatNormalMap,n(c.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(c.clearcoatNormalScale),c.side===on&&m.clearcoatNormalScale.value.negate())),c.iridescence>0&&(m.iridescence.value=c.iridescence,m.iridescenceIOR.value=c.iridescenceIOR,m.iridescenceThicknessMinimum.value=c.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=c.iridescenceThicknessRange[1],c.iridescenceMap&&(m.iridescenceMap.value=c.iridescenceMap,n(c.iridescenceMap,m.iridescenceMapTransform)),c.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=c.iridescenceThicknessMap,n(c.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),c.transmission>0&&(m.transmission.value=c.transmission,m.transmissionSamplerMap.value=_.texture,m.transmissionSamplerSize.value.set(_.width,_.height),c.transmissionMap&&(m.transmissionMap.value=c.transmissionMap,n(c.transmissionMap,m.transmissionMapTransform)),m.thickness.value=c.thickness,c.thicknessMap&&(m.thicknessMap.value=c.thicknessMap,n(c.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=c.attenuationDistance,m.attenuationColor.value.copy(c.attenuationColor)),c.anisotropy>0&&(m.anisotropyVector.value.set(c.anisotropy*Math.cos(c.anisotropyRotation),c.anisotropy*Math.sin(c.anisotropyRotation)),c.anisotropyMap&&(m.anisotropyMap.value=c.anisotropyMap,n(c.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=c.specularIntensity,m.specularColor.value.copy(c.specularColor),c.specularColorMap&&(m.specularColorMap.value=c.specularColorMap,n(c.specularColorMap,m.specularColorMapTransform)),c.specularIntensityMap&&(m.specularIntensityMap.value=c.specularIntensityMap,n(c.specularIntensityMap,m.specularIntensityMapTransform))}function v(m,c){c.matcap&&(m.matcap.value=c.matcap)}function x(m,c){const _=e.get(c).light;m.referencePosition.value.setFromMatrixPosition(_.matrixWorld),m.nearDistance.value=_.shadow.camera.near,m.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function p1(t,e,n,i){let r={},s={},o=[];const a=n.isWebGL2?t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(_,g){const S=g.program;i.uniformBlockBinding(_,S)}function u(_,g){let S=r[_.id];S===void 0&&(v(_),S=f(_),r[_.id]=S,_.addEventListener("dispose",m));const R=g.program;i.updateUBOMapping(_,R);const C=e.render.frame;s[_.id]!==C&&(h(_),s[_.id]=C)}function f(_){const g=d();_.__bindingPointIndex=g;const S=t.createBuffer(),R=_.__size,C=_.usage;return t.bindBuffer(t.UNIFORM_BUFFER,S),t.bufferData(t.UNIFORM_BUFFER,R,C),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,g,S),S}function d(){for(let _=0;_<a;_++)if(o.indexOf(_)===-1)return o.push(_),_;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(_){const g=r[_.id],S=_.uniforms,R=_.__cache;t.bindBuffer(t.UNIFORM_BUFFER,g);for(let C=0,A=S.length;C<A;C++){const U=Array.isArray(S[C])?S[C]:[S[C]];for(let M=0,T=U.length;M<T;M++){const B=U[M];if(p(B,C,M,R)===!0){const z=B.__offset,Q=Array.isArray(B.value)?B.value:[B.value];let L=0;for(let F=0;F<Q.length;F++){const $=Q[F],Y=x($);typeof $=="number"||typeof $=="boolean"?(B.__data[0]=$,t.bufferSubData(t.UNIFORM_BUFFER,z+L,B.__data)):$.isMatrix3?(B.__data[0]=$.elements[0],B.__data[1]=$.elements[1],B.__data[2]=$.elements[2],B.__data[3]=0,B.__data[4]=$.elements[3],B.__data[5]=$.elements[4],B.__data[6]=$.elements[5],B.__data[7]=0,B.__data[8]=$.elements[6],B.__data[9]=$.elements[7],B.__data[10]=$.elements[8],B.__data[11]=0):($.toArray(B.__data,L),L+=Y.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,z,B.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function p(_,g,S,R){const C=_.value,A=g+"_"+S;if(R[A]===void 0)return typeof C=="number"||typeof C=="boolean"?R[A]=C:R[A]=C.clone(),!0;{const U=R[A];if(typeof C=="number"||typeof C=="boolean"){if(U!==C)return R[A]=C,!0}else if(U.equals(C)===!1)return U.copy(C),!0}return!1}function v(_){const g=_.uniforms;let S=0;const R=16;for(let A=0,U=g.length;A<U;A++){const M=Array.isArray(g[A])?g[A]:[g[A]];for(let T=0,B=M.length;T<B;T++){const z=M[T],Q=Array.isArray(z.value)?z.value:[z.value];for(let L=0,F=Q.length;L<F;L++){const $=Q[L],Y=x($),P=S%R;P!==0&&R-P<Y.boundary&&(S+=R-P),z.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),z.__offset=S,S+=Y.storage}}}const C=S%R;return C>0&&(S+=R-C),_.__size=S,_.__cache={},this}function x(_){const g={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(g.boundary=4,g.storage=4):_.isVector2?(g.boundary=8,g.storage=8):_.isVector3||_.isColor?(g.boundary=16,g.storage=12):_.isVector4?(g.boundary=16,g.storage=16):_.isMatrix3?(g.boundary=48,g.storage=48):_.isMatrix4?(g.boundary=64,g.storage=64):_.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",_),g}function m(_){const g=_.target;g.removeEventListener("dispose",m);const S=o.indexOf(g.__bindingPointIndex);o.splice(S,1),t.deleteBuffer(r[g.id]),delete r[g.id],delete s[g.id]}function c(){for(const _ in r)t.deleteBuffer(r[_]);o=[],r={},s={}}return{bind:l,update:u,dispose:c}}class uf{constructor(e={}){const{canvas:n=cS(),context:i=null,depth:r=!0,stencil:s=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:u=!1,powerPreference:f="default",failIfMajorPerformanceCaveat:d=!1}=e;this.isWebGLRenderer=!0;let h;i!==null?h=i.getContextAttributes().alpha:h=o;const p=new Uint32Array(4),v=new Int32Array(4);let x=null,m=null;const c=[],_=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ut,this._useLegacyLights=!1,this.toneMapping=ji,this.toneMappingExposure=1;const g=this;let S=!1,R=0,C=0,A=null,U=-1,M=null;const T=new Lt,B=new Lt;let z=null;const Q=new He(0);let L=0,F=n.width,$=n.height,Y=1,P=null,O=null;const j=new Lt(0,0,F,$),K=new Lt(0,0,F,$);let oe=!1;const q=new of;let Z=!1,ce=!1,ge=null;const _e=new pt,be=new qe,Pe=new k,re={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Ce(){return A===null?Y:1}let H=i;function Tt(w,I){for(let W=0;W<w.length;W++){const X=w[W],V=n.getContext(X,I);if(V!==null)return V}return null}try{const w={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:u,powerPreference:f,failIfMajorPerformanceCaveat:d};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Jd}`),n.addEventListener("webglcontextlost",le,!1),n.addEventListener("webglcontextrestored",b,!1),n.addEventListener("webglcontextcreationerror",de,!1),H===null){const I=["webgl2","webgl","experimental-webgl"];if(g.isWebGL1Renderer===!0&&I.shift(),H=Tt(I,w),H===null)throw Tt(I)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&H instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),H.getShaderPrecisionFormat===void 0&&(H.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let Ee,De,N,te,J,E,y,G,se,ne,ae,ye,he,ve,Re,Be,ee,Ze,je,Ue,we,xe,Oe,Ye;function dt(){Ee=new ww(H),De=new vw(H,Ee,e),Ee.init(De),xe=new u1(H,Ee,De),N=new a1(H,Ee,De),te=new Cw(H),J=new $T,E=new l1(H,Ee,N,J,De,xe,te),y=new yw(g),G=new Ew(g),se=new IS(H,De),Oe=new gw(H,Ee,se,De),ne=new Tw(H,se,te,Oe),ae=new Pw(H,ne,se,te),je=new Lw(H,De,E),Be=new xw(J),ye=new XT(g,y,G,Ee,De,Oe,Be),he=new h1(g,J),ve=new YT,Re=new t1(Ee,De),Ze=new mw(g,y,G,N,ae,h,l),ee=new o1(g,ae,De),Ye=new p1(H,te,De,N),Ue=new _w(H,Ee,te,De),we=new Aw(H,Ee,te,De),te.programs=ye.programs,g.capabilities=De,g.extensions=Ee,g.properties=J,g.renderLists=ve,g.shadowMap=ee,g.state=N,g.info=te}dt();const Ge=new f1(g,H);this.xr=Ge,this.getContext=function(){return H},this.getContextAttributes=function(){return H.getContextAttributes()},this.forceContextLoss=function(){const w=Ee.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=Ee.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return Y},this.setPixelRatio=function(w){w!==void 0&&(Y=w,this.setSize(F,$,!1))},this.getSize=function(w){return w.set(F,$)},this.setSize=function(w,I,W=!0){if(Ge.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}F=w,$=I,n.width=Math.floor(w*Y),n.height=Math.floor(I*Y),W===!0&&(n.style.width=w+"px",n.style.height=I+"px"),this.setViewport(0,0,w,I)},this.getDrawingBufferSize=function(w){return w.set(F*Y,$*Y).floor()},this.setDrawingBufferSize=function(w,I,W){F=w,$=I,Y=W,n.width=Math.floor(w*W),n.height=Math.floor(I*W),this.setViewport(0,0,w,I)},this.getCurrentViewport=function(w){return w.copy(T)},this.getViewport=function(w){return w.copy(j)},this.setViewport=function(w,I,W,X){w.isVector4?j.set(w.x,w.y,w.z,w.w):j.set(w,I,W,X),N.viewport(T.copy(j).multiplyScalar(Y).floor())},this.getScissor=function(w){return w.copy(K)},this.setScissor=function(w,I,W,X){w.isVector4?K.set(w.x,w.y,w.z,w.w):K.set(w,I,W,X),N.scissor(B.copy(K).multiplyScalar(Y).floor())},this.getScissorTest=function(){return oe},this.setScissorTest=function(w){N.setScissorTest(oe=w)},this.setOpaqueSort=function(w){P=w},this.setTransparentSort=function(w){O=w},this.getClearColor=function(w){return w.copy(Ze.getClearColor())},this.setClearColor=function(){Ze.setClearColor.apply(Ze,arguments)},this.getClearAlpha=function(){return Ze.getClearAlpha()},this.setClearAlpha=function(){Ze.setClearAlpha.apply(Ze,arguments)},this.clear=function(w=!0,I=!0,W=!0){let X=0;if(w){let V=!1;if(A!==null){const pe=A.texture.format;V=pe===D_||pe===P_||pe===L_}if(V){const pe=A.texture.type,Se=pe===Xi||pe===Ni||pe===tf||pe===vr||pe===R_||pe===b_,Ae=Ze.getClearColor(),Ne=Ze.getClearAlpha(),ze=Ae.r,Ie=Ae.g,Fe=Ae.b;Se?(p[0]=ze,p[1]=Ie,p[2]=Fe,p[3]=Ne,H.clearBufferuiv(H.COLOR,0,p)):(v[0]=ze,v[1]=Ie,v[2]=Fe,v[3]=Ne,H.clearBufferiv(H.COLOR,0,v))}else X|=H.COLOR_BUFFER_BIT}I&&(X|=H.DEPTH_BUFFER_BIT),W&&(X|=H.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),H.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",le,!1),n.removeEventListener("webglcontextrestored",b,!1),n.removeEventListener("webglcontextcreationerror",de,!1),ve.dispose(),Re.dispose(),J.dispose(),y.dispose(),G.dispose(),ae.dispose(),Oe.dispose(),Ye.dispose(),ye.dispose(),Ge.dispose(),Ge.removeEventListener("sessionstart",Wt),Ge.removeEventListener("sessionend",tt),ge&&(ge.dispose(),ge=null),jt.stop()};function le(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),S=!0}function b(){console.log("THREE.WebGLRenderer: Context Restored."),S=!1;const w=te.autoReset,I=ee.enabled,W=ee.autoUpdate,X=ee.needsUpdate,V=ee.type;dt(),te.autoReset=w,ee.enabled=I,ee.autoUpdate=W,ee.needsUpdate=X,ee.type=V}function de(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function fe(w){const I=w.target;I.removeEventListener("dispose",fe),Le(I)}function Le(w){Te(w),J.remove(w)}function Te(w){const I=J.get(w).programs;I!==void 0&&(I.forEach(function(W){ye.releaseProgram(W)}),w.isShaderMaterial&&ye.releaseShaderCache(w))}this.renderBufferDirect=function(w,I,W,X,V,pe){I===null&&(I=re);const Se=V.isMesh&&V.matrixWorld.determinant()<0,Ae=hv(w,I,W,X,V);N.setMaterial(X,Se);let Ne=W.index,ze=1;if(X.wireframe===!0){if(Ne=ne.getWireframeAttribute(W),Ne===void 0)return;ze=2}const Ie=W.drawRange,Fe=W.attributes.position;let mt=Ie.start*ze,cn=(Ie.start+Ie.count)*ze;pe!==null&&(mt=Math.max(mt,pe.start*ze),cn=Math.min(cn,(pe.start+pe.count)*ze)),Ne!==null?(mt=Math.max(mt,0),cn=Math.min(cn,Ne.count)):Fe!=null&&(mt=Math.max(mt,0),cn=Math.min(cn,Fe.count));const Ct=cn-mt;if(Ct<0||Ct===1/0)return;Oe.setup(V,X,Ae,W,Ne);let ei,at=Ue;if(Ne!==null&&(ei=se.get(Ne),at=we,at.setIndex(ei)),V.isMesh)X.wireframe===!0?(N.setLineWidth(X.wireframeLinewidth*Ce()),at.setMode(H.LINES)):at.setMode(H.TRIANGLES);else if(V.isLine){let Ve=X.linewidth;Ve===void 0&&(Ve=1),N.setLineWidth(Ve*Ce()),V.isLineSegments?at.setMode(H.LINES):V.isLineLoop?at.setMode(H.LINE_LOOP):at.setMode(H.LINE_STRIP)}else V.isPoints?at.setMode(H.POINTS):V.isSprite&&at.setMode(H.TRIANGLES);if(V.isBatchedMesh)at.renderMultiDraw(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount);else if(V.isInstancedMesh)at.renderInstances(mt,Ct,V.count);else if(W.isInstancedBufferGeometry){const Ve=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,Gl=Math.min(W.instanceCount,Ve);at.renderInstances(mt,Ct,Gl)}else at.render(mt,Ct)};function Je(w,I,W){w.transparent===!0&&w.side===ci&&w.forceSinglePass===!1?(w.side=on,w.needsUpdate=!0,ko(w,I,W),w.side=Yi,w.needsUpdate=!0,ko(w,I,W),w.side=ci):ko(w,I,W)}this.compile=function(w,I,W=null){W===null&&(W=w),m=Re.get(W),m.init(),_.push(m),W.traverseVisible(function(V){V.isLight&&V.layers.test(I.layers)&&(m.pushLight(V),V.castShadow&&m.pushShadow(V))}),w!==W&&w.traverseVisible(function(V){V.isLight&&V.layers.test(I.layers)&&(m.pushLight(V),V.castShadow&&m.pushShadow(V))}),m.setupLights(g._useLegacyLights);const X=new Set;return w.traverse(function(V){const pe=V.material;if(pe)if(Array.isArray(pe))for(let Se=0;Se<pe.length;Se++){const Ae=pe[Se];Je(Ae,W,V),X.add(Ae)}else Je(pe,W,V),X.add(pe)}),_.pop(),m=null,X},this.compileAsync=function(w,I,W=null){const X=this.compile(w,I,W);return new Promise(V=>{function pe(){if(X.forEach(function(Se){J.get(Se).currentProgram.isReady()&&X.delete(Se)}),X.size===0){V(w);return}setTimeout(pe,10)}Ee.get("KHR_parallel_shader_compile")!==null?pe():setTimeout(pe,10)})};let et=null;function At(w){et&&et(w)}function Wt(){jt.stop()}function tt(){jt.start()}const jt=new q_;jt.setAnimationLoop(At),typeof self<"u"&&jt.setContext(self),this.setAnimationLoop=function(w){et=w,Ge.setAnimationLoop(w),w===null?jt.stop():jt.start()},Ge.addEventListener("sessionstart",Wt),Ge.addEventListener("sessionend",tt),this.render=function(w,I){if(I!==void 0&&I.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),I.parent===null&&I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),Ge.enabled===!0&&Ge.isPresenting===!0&&(Ge.cameraAutoUpdate===!0&&Ge.updateCamera(I),I=Ge.getCamera()),w.isScene===!0&&w.onBeforeRender(g,w,I,A),m=Re.get(w,_.length),m.init(),_.push(m),_e.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),q.setFromProjectionMatrix(_e),ce=this.localClippingEnabled,Z=Be.init(this.clippingPlanes,ce),x=ve.get(w,c.length),x.init(),c.push(x),$n(w,I,0,g.sortObjects),x.finish(),g.sortObjects===!0&&x.sort(P,O),this.info.render.frame++,Z===!0&&Be.beginShadows();const W=m.state.shadowsArray;if(ee.render(W,w,I),Z===!0&&Be.endShadows(),this.info.autoReset===!0&&this.info.reset(),Ze.render(x,w),m.setupLights(g._useLegacyLights),I.isArrayCamera){const X=I.cameras;for(let V=0,pe=X.length;V<pe;V++){const Se=X[V];hf(x,w,Se,Se.viewport)}}else hf(x,w,I);A!==null&&(E.updateMultisampleRenderTarget(A),E.updateRenderTargetMipmap(A)),w.isScene===!0&&w.onAfterRender(g,w,I),Oe.resetDefaultState(),U=-1,M=null,_.pop(),_.length>0?m=_[_.length-1]:m=null,c.pop(),c.length>0?x=c[c.length-1]:x=null};function $n(w,I,W,X){if(w.visible===!1)return;if(w.layers.test(I.layers)){if(w.isGroup)W=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(I);else if(w.isLight)m.pushLight(w),w.castShadow&&m.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||q.intersectsSprite(w)){X&&Pe.setFromMatrixPosition(w.matrixWorld).applyMatrix4(_e);const Se=ae.update(w),Ae=w.material;Ae.visible&&x.push(w,Se,Ae,W,Pe.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||q.intersectsObject(w))){const Se=ae.update(w),Ae=w.material;if(X&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),Pe.copy(w.boundingSphere.center)):(Se.boundingSphere===null&&Se.computeBoundingSphere(),Pe.copy(Se.boundingSphere.center)),Pe.applyMatrix4(w.matrixWorld).applyMatrix4(_e)),Array.isArray(Ae)){const Ne=Se.groups;for(let ze=0,Ie=Ne.length;ze<Ie;ze++){const Fe=Ne[ze],mt=Ae[Fe.materialIndex];mt&&mt.visible&&x.push(w,Se,mt,W,Pe.z,Fe)}}else Ae.visible&&x.push(w,Se,Ae,W,Pe.z,null)}}const pe=w.children;for(let Se=0,Ae=pe.length;Se<Ae;Se++)$n(pe[Se],I,W,X)}function hf(w,I,W,X){const V=w.opaque,pe=w.transmissive,Se=w.transparent;m.setupLightsView(W),Z===!0&&Be.setGlobalState(g.clippingPlanes,W),pe.length>0&&fv(V,pe,I,W),X&&N.viewport(T.copy(X)),V.length>0&&Oo(V,I,W),pe.length>0&&Oo(pe,I,W),Se.length>0&&Oo(Se,I,W),N.buffers.depth.setTest(!0),N.buffers.depth.setMask(!0),N.buffers.color.setMask(!0),N.setPolygonOffset(!1)}function fv(w,I,W,X){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;const pe=De.isWebGL2;ge===null&&(ge=new Ar(1,1,{generateMipmaps:!0,type:Ee.has("EXT_color_buffer_half_float")?Ao:Xi,minFilter:To,samples:pe?4:0})),g.getDrawingBufferSize(be),pe?ge.setSize(be.x,be.y):ge.setSize(Qc(be.x),Qc(be.y));const Se=g.getRenderTarget();g.setRenderTarget(ge),g.getClearColor(Q),L=g.getClearAlpha(),L<1&&g.setClearColor(16777215,.5),g.clear();const Ae=g.toneMapping;g.toneMapping=ji,Oo(w,W,X),E.updateMultisampleRenderTarget(ge),E.updateRenderTargetMipmap(ge);let Ne=!1;for(let ze=0,Ie=I.length;ze<Ie;ze++){const Fe=I[ze],mt=Fe.object,cn=Fe.geometry,Ct=Fe.material,ei=Fe.group;if(Ct.side===ci&&mt.layers.test(X.layers)){const at=Ct.side;Ct.side=on,Ct.needsUpdate=!0,pf(mt,W,X,cn,Ct,ei),Ct.side=at,Ct.needsUpdate=!0,Ne=!0}}Ne===!0&&(E.updateMultisampleRenderTarget(ge),E.updateRenderTargetMipmap(ge)),g.setRenderTarget(Se),g.setClearColor(Q,L),g.toneMapping=Ae}function Oo(w,I,W){const X=I.isScene===!0?I.overrideMaterial:null;for(let V=0,pe=w.length;V<pe;V++){const Se=w[V],Ae=Se.object,Ne=Se.geometry,ze=X===null?Se.material:X,Ie=Se.group;Ae.layers.test(W.layers)&&pf(Ae,I,W,Ne,ze,Ie)}}function pf(w,I,W,X,V,pe){w.onBeforeRender(g,I,W,X,V,pe),w.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),V.onBeforeRender(g,I,W,X,w,pe),V.transparent===!0&&V.side===ci&&V.forceSinglePass===!1?(V.side=on,V.needsUpdate=!0,g.renderBufferDirect(W,I,X,V,w,pe),V.side=Yi,V.needsUpdate=!0,g.renderBufferDirect(W,I,X,V,w,pe),V.side=ci):g.renderBufferDirect(W,I,X,V,w,pe),w.onAfterRender(g,I,W,X,V,pe)}function ko(w,I,W){I.isScene!==!0&&(I=re);const X=J.get(w),V=m.state.lights,pe=m.state.shadowsArray,Se=V.state.version,Ae=ye.getParameters(w,V.state,pe,I,W),Ne=ye.getProgramCacheKey(Ae);let ze=X.programs;X.environment=w.isMeshStandardMaterial?I.environment:null,X.fog=I.fog,X.envMap=(w.isMeshStandardMaterial?G:y).get(w.envMap||X.environment),ze===void 0&&(w.addEventListener("dispose",fe),ze=new Map,X.programs=ze);let Ie=ze.get(Ne);if(Ie!==void 0){if(X.currentProgram===Ie&&X.lightsStateVersion===Se)return gf(w,Ae),Ie}else Ae.uniforms=ye.getUniforms(w),w.onBuild(W,Ae,g),w.onBeforeCompile(Ae,g),Ie=ye.acquireProgram(Ae,Ne),ze.set(Ne,Ie),X.uniforms=Ae.uniforms;const Fe=X.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Fe.clippingPlanes=Be.uniform),gf(w,Ae),X.needsLights=mv(w),X.lightsStateVersion=Se,X.needsLights&&(Fe.ambientLightColor.value=V.state.ambient,Fe.lightProbe.value=V.state.probe,Fe.directionalLights.value=V.state.directional,Fe.directionalLightShadows.value=V.state.directionalShadow,Fe.spotLights.value=V.state.spot,Fe.spotLightShadows.value=V.state.spotShadow,Fe.rectAreaLights.value=V.state.rectArea,Fe.ltc_1.value=V.state.rectAreaLTC1,Fe.ltc_2.value=V.state.rectAreaLTC2,Fe.pointLights.value=V.state.point,Fe.pointLightShadows.value=V.state.pointShadow,Fe.hemisphereLights.value=V.state.hemi,Fe.directionalShadowMap.value=V.state.directionalShadowMap,Fe.directionalShadowMatrix.value=V.state.directionalShadowMatrix,Fe.spotShadowMap.value=V.state.spotShadowMap,Fe.spotLightMatrix.value=V.state.spotLightMatrix,Fe.spotLightMap.value=V.state.spotLightMap,Fe.pointShadowMap.value=V.state.pointShadowMap,Fe.pointShadowMatrix.value=V.state.pointShadowMatrix),X.currentProgram=Ie,X.uniformsList=null,Ie}function mf(w){if(w.uniformsList===null){const I=w.currentProgram.getUniforms();w.uniformsList=za.seqWithValue(I.seq,w.uniforms)}return w.uniformsList}function gf(w,I){const W=J.get(w);W.outputColorSpace=I.outputColorSpace,W.batching=I.batching,W.instancing=I.instancing,W.instancingColor=I.instancingColor,W.skinning=I.skinning,W.morphTargets=I.morphTargets,W.morphNormals=I.morphNormals,W.morphColors=I.morphColors,W.morphTargetsCount=I.morphTargetsCount,W.numClippingPlanes=I.numClippingPlanes,W.numIntersection=I.numClipIntersection,W.vertexAlphas=I.vertexAlphas,W.vertexTangents=I.vertexTangents,W.toneMapping=I.toneMapping}function hv(w,I,W,X,V){I.isScene!==!0&&(I=re),E.resetTextureUnits();const pe=I.fog,Se=X.isMeshStandardMaterial?I.environment:null,Ae=A===null?g.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:xi,Ne=(X.isMeshStandardMaterial?G:y).get(X.envMap||Se),ze=X.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,Ie=!!W.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),Fe=!!W.morphAttributes.position,mt=!!W.morphAttributes.normal,cn=!!W.morphAttributes.color;let Ct=ji;X.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(Ct=g.toneMapping);const ei=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,at=ei!==void 0?ei.length:0,Ve=J.get(X),Gl=m.state.lights;if(Z===!0&&(ce===!0||w!==M)){const yn=w===M&&X.id===U;Be.setState(X,w,yn)}let ft=!1;X.version===Ve.__version?(Ve.needsLights&&Ve.lightsStateVersion!==Gl.state.version||Ve.outputColorSpace!==Ae||V.isBatchedMesh&&Ve.batching===!1||!V.isBatchedMesh&&Ve.batching===!0||V.isInstancedMesh&&Ve.instancing===!1||!V.isInstancedMesh&&Ve.instancing===!0||V.isSkinnedMesh&&Ve.skinning===!1||!V.isSkinnedMesh&&Ve.skinning===!0||V.isInstancedMesh&&Ve.instancingColor===!0&&V.instanceColor===null||V.isInstancedMesh&&Ve.instancingColor===!1&&V.instanceColor!==null||Ve.envMap!==Ne||X.fog===!0&&Ve.fog!==pe||Ve.numClippingPlanes!==void 0&&(Ve.numClippingPlanes!==Be.numPlanes||Ve.numIntersection!==Be.numIntersection)||Ve.vertexAlphas!==ze||Ve.vertexTangents!==Ie||Ve.morphTargets!==Fe||Ve.morphNormals!==mt||Ve.morphColors!==cn||Ve.toneMapping!==Ct||De.isWebGL2===!0&&Ve.morphTargetsCount!==at)&&(ft=!0):(ft=!0,Ve.__version=X.version);let tr=Ve.currentProgram;ft===!0&&(tr=ko(X,I,V));let _f=!1,Ns=!1,Vl=!1;const Ot=tr.getUniforms(),nr=Ve.uniforms;if(N.useProgram(tr.program)&&(_f=!0,Ns=!0,Vl=!0),X.id!==U&&(U=X.id,Ns=!0),_f||M!==w){Ot.setValue(H,"projectionMatrix",w.projectionMatrix),Ot.setValue(H,"viewMatrix",w.matrixWorldInverse);const yn=Ot.map.cameraPosition;yn!==void 0&&yn.setValue(H,Pe.setFromMatrixPosition(w.matrixWorld)),De.logarithmicDepthBuffer&&Ot.setValue(H,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&Ot.setValue(H,"isOrthographic",w.isOrthographicCamera===!0),M!==w&&(M=w,Ns=!0,Vl=!0)}if(V.isSkinnedMesh){Ot.setOptional(H,V,"bindMatrix"),Ot.setOptional(H,V,"bindMatrixInverse");const yn=V.skeleton;yn&&(De.floatVertexTextures?(yn.boneTexture===null&&yn.computeBoneTexture(),Ot.setValue(H,"boneTexture",yn.boneTexture,E)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}V.isBatchedMesh&&(Ot.setOptional(H,V,"batchingTexture"),Ot.setValue(H,"batchingTexture",V._matricesTexture,E));const Wl=W.morphAttributes;if((Wl.position!==void 0||Wl.normal!==void 0||Wl.color!==void 0&&De.isWebGL2===!0)&&je.update(V,W,tr),(Ns||Ve.receiveShadow!==V.receiveShadow)&&(Ve.receiveShadow=V.receiveShadow,Ot.setValue(H,"receiveShadow",V.receiveShadow)),X.isMeshGouraudMaterial&&X.envMap!==null&&(nr.envMap.value=Ne,nr.flipEnvMap.value=Ne.isCubeTexture&&Ne.isRenderTargetTexture===!1?-1:1),Ns&&(Ot.setValue(H,"toneMappingExposure",g.toneMappingExposure),Ve.needsLights&&pv(nr,Vl),pe&&X.fog===!0&&he.refreshFogUniforms(nr,pe),he.refreshMaterialUniforms(nr,X,Y,$,ge),za.upload(H,mf(Ve),nr,E)),X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(za.upload(H,mf(Ve),nr,E),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&Ot.setValue(H,"center",V.center),Ot.setValue(H,"modelViewMatrix",V.modelViewMatrix),Ot.setValue(H,"normalMatrix",V.normalMatrix),Ot.setValue(H,"modelMatrix",V.matrixWorld),X.isShaderMaterial||X.isRawShaderMaterial){const yn=X.uniformsGroups;for(let jl=0,gv=yn.length;jl<gv;jl++)if(De.isWebGL2){const vf=yn[jl];Ye.update(vf,tr),Ye.bind(vf,tr)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return tr}function pv(w,I){w.ambientLightColor.needsUpdate=I,w.lightProbe.needsUpdate=I,w.directionalLights.needsUpdate=I,w.directionalLightShadows.needsUpdate=I,w.pointLights.needsUpdate=I,w.pointLightShadows.needsUpdate=I,w.spotLights.needsUpdate=I,w.spotLightShadows.needsUpdate=I,w.rectAreaLights.needsUpdate=I,w.hemisphereLights.needsUpdate=I}function mv(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(w,I,W){J.get(w.texture).__webglTexture=I,J.get(w.depthTexture).__webglTexture=W;const X=J.get(w);X.__hasExternalTextures=!0,X.__hasExternalTextures&&(X.__autoAllocateDepthBuffer=W===void 0,X.__autoAllocateDepthBuffer||Ee.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),X.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(w,I){const W=J.get(w);W.__webglFramebuffer=I,W.__useDefaultFramebuffer=I===void 0},this.setRenderTarget=function(w,I=0,W=0){A=w,R=I,C=W;let X=!0,V=null,pe=!1,Se=!1;if(w){const Ne=J.get(w);Ne.__useDefaultFramebuffer!==void 0?(N.bindFramebuffer(H.FRAMEBUFFER,null),X=!1):Ne.__webglFramebuffer===void 0?E.setupRenderTarget(w):Ne.__hasExternalTextures&&E.rebindTextures(w,J.get(w.texture).__webglTexture,J.get(w.depthTexture).__webglTexture);const ze=w.texture;(ze.isData3DTexture||ze.isDataArrayTexture||ze.isCompressedArrayTexture)&&(Se=!0);const Ie=J.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Ie[I])?V=Ie[I][W]:V=Ie[I],pe=!0):De.isWebGL2&&w.samples>0&&E.useMultisampledRTT(w)===!1?V=J.get(w).__webglMultisampledFramebuffer:Array.isArray(Ie)?V=Ie[W]:V=Ie,T.copy(w.viewport),B.copy(w.scissor),z=w.scissorTest}else T.copy(j).multiplyScalar(Y).floor(),B.copy(K).multiplyScalar(Y).floor(),z=oe;if(N.bindFramebuffer(H.FRAMEBUFFER,V)&&De.drawBuffers&&X&&N.drawBuffers(w,V),N.viewport(T),N.scissor(B),N.setScissorTest(z),pe){const Ne=J.get(w.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_CUBE_MAP_POSITIVE_X+I,Ne.__webglTexture,W)}else if(Se){const Ne=J.get(w.texture),ze=I||0;H.framebufferTextureLayer(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,Ne.__webglTexture,W||0,ze)}U=-1},this.readRenderTargetPixels=function(w,I,W,X,V,pe,Se){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ae=J.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Se!==void 0&&(Ae=Ae[Se]),Ae){N.bindFramebuffer(H.FRAMEBUFFER,Ae);try{const Ne=w.texture,ze=Ne.format,Ie=Ne.type;if(ze!==Hn&&xe.convert(ze)!==H.getParameter(H.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Fe=Ie===Ao&&(Ee.has("EXT_color_buffer_half_float")||De.isWebGL2&&Ee.has("EXT_color_buffer_float"));if(Ie!==Xi&&xe.convert(Ie)!==H.getParameter(H.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Ie===Ui&&(De.isWebGL2||Ee.has("OES_texture_float")||Ee.has("WEBGL_color_buffer_float")))&&!Fe){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}I>=0&&I<=w.width-X&&W>=0&&W<=w.height-V&&H.readPixels(I,W,X,V,xe.convert(ze),xe.convert(Ie),pe)}finally{const Ne=A!==null?J.get(A).__webglFramebuffer:null;N.bindFramebuffer(H.FRAMEBUFFER,Ne)}}},this.copyFramebufferToTexture=function(w,I,W=0){const X=Math.pow(2,-W),V=Math.floor(I.image.width*X),pe=Math.floor(I.image.height*X);E.setTexture2D(I,0),H.copyTexSubImage2D(H.TEXTURE_2D,W,0,0,w.x,w.y,V,pe),N.unbindTexture()},this.copyTextureToTexture=function(w,I,W,X=0){const V=I.image.width,pe=I.image.height,Se=xe.convert(W.format),Ae=xe.convert(W.type);E.setTexture2D(W,0),H.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,W.flipY),H.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),H.pixelStorei(H.UNPACK_ALIGNMENT,W.unpackAlignment),I.isDataTexture?H.texSubImage2D(H.TEXTURE_2D,X,w.x,w.y,V,pe,Se,Ae,I.image.data):I.isCompressedTexture?H.compressedTexSubImage2D(H.TEXTURE_2D,X,w.x,w.y,I.mipmaps[0].width,I.mipmaps[0].height,Se,I.mipmaps[0].data):H.texSubImage2D(H.TEXTURE_2D,X,w.x,w.y,Se,Ae,I.image),X===0&&W.generateMipmaps&&H.generateMipmap(H.TEXTURE_2D),N.unbindTexture()},this.copyTextureToTexture3D=function(w,I,W,X,V=0){if(g.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const pe=w.max.x-w.min.x+1,Se=w.max.y-w.min.y+1,Ae=w.max.z-w.min.z+1,Ne=xe.convert(X.format),ze=xe.convert(X.type);let Ie;if(X.isData3DTexture)E.setTexture3D(X,0),Ie=H.TEXTURE_3D;else if(X.isDataArrayTexture||X.isCompressedArrayTexture)E.setTexture2DArray(X,0),Ie=H.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}H.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,X.flipY),H.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),H.pixelStorei(H.UNPACK_ALIGNMENT,X.unpackAlignment);const Fe=H.getParameter(H.UNPACK_ROW_LENGTH),mt=H.getParameter(H.UNPACK_IMAGE_HEIGHT),cn=H.getParameter(H.UNPACK_SKIP_PIXELS),Ct=H.getParameter(H.UNPACK_SKIP_ROWS),ei=H.getParameter(H.UNPACK_SKIP_IMAGES),at=W.isCompressedTexture?W.mipmaps[V]:W.image;H.pixelStorei(H.UNPACK_ROW_LENGTH,at.width),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,at.height),H.pixelStorei(H.UNPACK_SKIP_PIXELS,w.min.x),H.pixelStorei(H.UNPACK_SKIP_ROWS,w.min.y),H.pixelStorei(H.UNPACK_SKIP_IMAGES,w.min.z),W.isDataTexture||W.isData3DTexture?H.texSubImage3D(Ie,V,I.x,I.y,I.z,pe,Se,Ae,Ne,ze,at.data):W.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),H.compressedTexSubImage3D(Ie,V,I.x,I.y,I.z,pe,Se,Ae,Ne,at.data)):H.texSubImage3D(Ie,V,I.x,I.y,I.z,pe,Se,Ae,Ne,ze,at),H.pixelStorei(H.UNPACK_ROW_LENGTH,Fe),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,mt),H.pixelStorei(H.UNPACK_SKIP_PIXELS,cn),H.pixelStorei(H.UNPACK_SKIP_ROWS,Ct),H.pixelStorei(H.UNPACK_SKIP_IMAGES,ei),V===0&&X.generateMipmaps&&H.generateMipmap(Ie),N.unbindTexture()},this.initTexture=function(w){w.isCubeTexture?E.setTextureCube(w,0):w.isData3DTexture?E.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?E.setTexture2DArray(w,0):E.setTexture2D(w,0),N.unbindTexture()},this.resetState=function(){R=0,C=0,A=null,N.reset(),Oe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return hi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=e===rf?"display-p3":"srgb",n.unpackColorSpace=Qe.workingColorSpace===Ol?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Ut?yr:U_}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===yr?Ut:xi}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class m1 extends uf{}m1.prototype.isWebGL1Renderer=!0;class nv extends Mt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n}}class g1 extends er{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new He(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Qp=new k,Jp=new k,em=new pt,qu=new sf,wa=new Io;class _1 extends Mt{constructor(e=new Xn,n=new g1){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[0];for(let r=1,s=n.count;r<s;r++)Qp.fromBufferAttribute(n,r-1),Jp.fromBufferAttribute(n,r),i[r]=i[r-1],i[r]+=Qp.distanceTo(Jp);e.setAttribute("lineDistance",new Wn(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),wa.copy(i.boundingSphere),wa.applyMatrix4(r),wa.radius+=s,e.ray.intersectsSphere(wa)===!1)return;em.copy(r).invert(),qu.copy(e.ray).applyMatrix4(em);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,u=new k,f=new k,d=new k,h=new k,p=this.isLineSegments?2:1,v=i.index,m=i.attributes.position;if(v!==null){const c=Math.max(0,o.start),_=Math.min(v.count,o.start+o.count);for(let g=c,S=_-1;g<S;g+=p){const R=v.getX(g),C=v.getX(g+1);if(u.fromBufferAttribute(m,R),f.fromBufferAttribute(m,C),qu.distanceSqToSegment(u,f,h,d)>l)continue;h.applyMatrix4(this.matrixWorld);const U=e.ray.origin.distanceTo(h);U<e.near||U>e.far||n.push({distance:U,point:d.clone().applyMatrix4(this.matrixWorld),index:g,face:null,faceIndex:null,object:this})}}else{const c=Math.max(0,o.start),_=Math.min(m.count,o.start+o.count);for(let g=c,S=_-1;g<S;g+=p){if(u.fromBufferAttribute(m,g),f.fromBufferAttribute(m,g+1),qu.distanceSqToSegment(u,f,h,d)>l)continue;h.applyMatrix4(this.matrixWorld);const C=e.ray.origin.distanceTo(h);C<e.near||C>e.far||n.push({distance:C,point:d.clone().applyMatrix4(this.matrixWorld),index:g,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}const tm=new k,nm=new k;class Q1 extends _1{constructor(e,n){super(e,n),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[];for(let r=0,s=n.count;r<s;r+=2)tm.fromBufferAttribute(n,r),nm.fromBufferAttribute(n,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+tm.distanceTo(nm);e.setAttribute("lineDistance",new Wn(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class v1 extends er{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new He(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const im=new pt,ed=new sf,Ta=new Io,Aa=new k;class J1 extends Mt{constructor(e=new Xn,n=new v1){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Ta.copy(i.boundingSphere),Ta.applyMatrix4(r),Ta.radius+=s,e.ray.intersectsSphere(Ta)===!1)return;im.copy(r).invert(),ed.copy(e.ray).applyMatrix4(im);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,u=i.index,d=i.attributes.position;if(u!==null){const h=Math.max(0,o.start),p=Math.min(u.count,o.start+o.count);for(let v=h,x=p;v<x;v++){const m=u.getX(v);Aa.fromBufferAttribute(d,m),rm(Aa,m,l,r,e,n,this)}}else{const h=Math.max(0,o.start),p=Math.min(d.count,o.start+o.count);for(let v=h,x=p;v<x;v++)Aa.fromBufferAttribute(d,v),rm(Aa,v,l,r,e,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function rm(t,e,n,i,r,s,o){const a=ed.distanceSqToPoint(t);if(a<n){const l=new k;ed.closestPointToPoint(t,l),l.applyMatrix4(i);const u=r.ray.origin.distanceTo(l);if(u<r.near||u>r.far)return;s.push({distance:u,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,object:o})}}class cf extends er{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new He(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new He(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=nf,this.normalScale=new qe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class eA extends er{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new He(16777215),this.specular=new He(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new He(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=nf,this.normalScale=new qe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=ef,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}const vl={enabled:!1,files:{},add:function(t,e){this.enabled!==!1&&(this.files[t]=e)},get:function(t){if(this.enabled!==!1)return this.files[t]},remove:function(t){delete this.files[t]},clear:function(){this.files={}}};class x1{constructor(e,n,i){const r=this;let s=!1,o=0,a=0,l;const u=[];this.onStart=void 0,this.onLoad=e,this.onProgress=n,this.onError=i,this.itemStart=function(f){a++,s===!1&&r.onStart!==void 0&&r.onStart(f,o,a),s=!0},this.itemEnd=function(f){o++,r.onProgress!==void 0&&r.onProgress(f,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(f){r.onError!==void 0&&r.onError(f)},this.resolveURL=function(f){return l?l(f):f},this.setURLModifier=function(f){return l=f,this},this.addHandler=function(f,d){return u.push(f,d),this},this.removeHandler=function(f){const d=u.indexOf(f);return d!==-1&&u.splice(d,2),this},this.getHandler=function(f){for(let d=0,h=u.length;d<h;d+=2){const p=u[d],v=u[d+1];if(p.global&&(p.lastIndex=0),p.test(f))return v}return null}}}const y1=new x1;class zl{constructor(e){this.manager=e!==void 0?e:y1,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,n){const i=this;return new Promise(function(r,s){i.load(e,r,n,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}zl.DEFAULT_MATERIAL_NAME="__DEFAULT";const oi={};class S1 extends Error{constructor(e,n){super(e),this.response=n}}class tA extends zl{constructor(e){super(e)}load(e,n,i,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=vl.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{n&&n(s),this.manager.itemEnd(e)},0),s;if(oi[e]!==void 0){oi[e].push({onLoad:n,onProgress:i,onError:r});return}oi[e]=[],oi[e].push({onLoad:n,onProgress:i,onError:r});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(u=>{if(u.status===200||u.status===0){if(u.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||u.body===void 0||u.body.getReader===void 0)return u;const f=oi[e],d=u.body.getReader(),h=u.headers.get("Content-Length")||u.headers.get("X-File-Size"),p=h?parseInt(h):0,v=p!==0;let x=0;const m=new ReadableStream({start(c){_();function _(){d.read().then(({done:g,value:S})=>{if(g)c.close();else{x+=S.byteLength;const R=new ProgressEvent("progress",{lengthComputable:v,loaded:x,total:p});for(let C=0,A=f.length;C<A;C++){const U=f[C];U.onProgress&&U.onProgress(R)}c.enqueue(S),_()}})}}});return new Response(m)}else throw new S1(`fetch for "${u.url}" responded with ${u.status}: ${u.statusText}`,u)}).then(u=>{switch(l){case"arraybuffer":return u.arrayBuffer();case"blob":return u.blob();case"document":return u.text().then(f=>new DOMParser().parseFromString(f,a));case"json":return u.json();default:if(a===void 0)return u.text();{const d=/charset="?([^;"\s]*)"?/i.exec(a),h=d&&d[1]?d[1].toLowerCase():void 0,p=new TextDecoder(h);return u.arrayBuffer().then(v=>p.decode(v))}}}).then(u=>{vl.add(e,u);const f=oi[e];delete oi[e];for(let d=0,h=f.length;d<h;d++){const p=f[d];p.onLoad&&p.onLoad(u)}}).catch(u=>{const f=oi[e];if(f===void 0)throw this.manager.itemError(e),u;delete oi[e];for(let d=0,h=f.length;d<h;d++){const p=f[d];p.onError&&p.onError(u)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class M1 extends zl{constructor(e){super(e)}load(e,n,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=vl.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){n&&n(o),s.manager.itemEnd(e)},0),o;const a=Co("img");function l(){f(),vl.add(e,this),n&&n(this),s.manager.itemEnd(e)}function u(d){f(),r&&r(d),s.manager.itemError(e),s.manager.itemEnd(e)}function f(){a.removeEventListener("load",l,!1),a.removeEventListener("error",u,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",u,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(e),a.src=e,a}}class nA extends zl{constructor(e){super(e)}load(e,n,i,r){const s=new an,o=new M1(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,n!==void 0&&n(s)},i,r),s}}class df extends Mt{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new He(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),n}}class iv extends df{constructor(e,n,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Mt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new He(n)}copy(e,n){return super.copy(e,n),this.groundColor.copy(e.groundColor),this}}const Yu=new pt,sm=new k,om=new k;class E1{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new qe(512,512),this.map=null,this.mapPass=null,this.matrix=new pt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new of,this._frameExtents=new qe(1,1),this._viewportCount=1,this._viewports=[new Lt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;sm.setFromMatrixPosition(e.matrixWorld),n.position.copy(sm),om.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(om),n.updateMatrixWorld(),Yu.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Yu),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Yu)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class w1 extends E1{constructor(){super(new Y_(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class am extends df{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Mt.DEFAULT_UP),this.updateMatrix(),this.target=new Mt,this.shadow=new w1}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class rv extends df{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}class iA{constructor(e=1,n=0,i=0){return this.radius=e,this.phi=n,this.theta=i,this}set(e,n,i){return this.radius=e,this.phi=n,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,n,i){return this.radius=Math.sqrt(e*e+n*n+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(Yt(n/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Jd}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Jd);const T1="/assets/occt-import-js-BhHfLpto.wasm",A1="data:text/javascript;base64,aW1wb3J0U2NyaXB0cyAoJ29jY3QtaW1wb3J0LWpzLmpzJyk7DQoNCm9ubWVzc2FnZSA9IGFzeW5jIGZ1bmN0aW9uIChldikNCnsNCglsZXQgbW9kdWxPdmVycmlkZXMgPSB7DQoJCWxvY2F0ZUZpbGU6IGZ1bmN0aW9uIChwYXRoKSB7DQoJCQlyZXR1cm4gcGF0aDsNCgkJfQ0KCX07DQoJbGV0IG9jY3QgPSBhd2FpdCBvY2N0aW1wb3J0anMgKG1vZHVsT3ZlcnJpZGVzKTsNCglsZXQgcmVzdWx0ID0gb2NjdC5SZWFkRmlsZSAoZXYuZGF0YS5mb3JtYXQsIGV2LmRhdGEuYnVmZmVyLCBldi5kYXRhLnBhcmFtcyk7DQoJcG9zdE1lc3NhZ2UgKHJlc3VsdCk7DQp9Ow0K";function C1({url:t,ext:e,assetId:n}){const i=Me.useRef(null),[r,s]=Me.useState(null);return Me.useEffect(()=>{let o=!1,a=null;const l=i.current;if(!l)return;s(null);const u=S=>{o||s(S)},f=new nv,d=new pn(45,1,.1,1e3),h=new uf({antialias:!0,alpha:!0});h.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),h.setSize(l.clientWidth||300,l.clientHeight||300),l.appendChild(h.domElement),f.add(new iv(16777215,4473924,1.6)),f.add(new rv(16777215,.9));const p=new am(16777215,1.4);p.position.set(3,6,2);const v=new am(16777215,1.2);v.position.set(-4,-2,3),f.add(p),f.add(v),d.position.set(1,1,3);let x,m;const c=n?`mv-view-${n}`:null,_=()=>{if(!c||typeof window>"u")return!1;try{const S=window.localStorage.getItem(c);if(!S)return!1;const R=JSON.parse(S);return!Array.isArray(R==null?void 0:R.position)||!Array.isArray(R==null?void 0:R.target)?!1:(d.position.fromArray(R.position),x==null||x.target.fromArray(R.target),x==null||x.update(),!0)}catch(S){return console.warn("Failed to load saved view",S),!1}},g=()=>{if(!(!c||typeof window>"u"||!x))try{const S={position:d.position.toArray(),target:x.target.toArray()};window.localStorage.setItem(c,JSON.stringify(S))}catch{}};return(async()=>{try{const{OrbitControls:C}=await Ms(async()=>{const{OrbitControls:M}=await import("./OrbitControls-CJw8TWgZ.js");return{OrbitControls:M}},[]);x=new C(d,h.domElement),x.enableDamping=!0,x.dampingFactor=.05,x.enablePan=!0,x.target.set(0,0,0),x.addEventListener("change",g);const A=M=>{const T=M.getSize(new k),B=M.getCenter(new k),z=Math.max(T.x,T.y,T.z)||1;_()||(d.position.copy(B).add(new k(z*1.8,z*1.2,z*1.8)),d.lookAt(B),x==null||x.target.copy(B),x==null||x.update())},U=(e||"").toLowerCase();try{const M=await av(U,t);if(!M){u("Preview unsupported for this file type.");return}if(o){td(M);return}a=M,f.add(M);const T=new Ji().setFromObject(M);T.isEmpty()||A(T)}catch(M){console.error("Viewer asset load failed:",M),u("Preview failed to load.")}}catch(C){console.error("Viewer init failed:",C)}const S=()=>{if(!l)return;const C=l.clientWidth||300,A=l.clientHeight||300;h.setSize(C,A),d.aspect=C/A,d.updateProjectionMatrix()};window.addEventListener("resize",S),m=()=>window.removeEventListener("resize",S);const R=()=>{o||(h.render(f,d),requestAnimationFrame(R))};R()})(),()=>{o=!0;try{m==null||m(),l.removeChild(h.domElement)}catch{}a&&td(a);try{x==null||x.removeEventListener("change",g),x==null||x.dispose()}catch{}h.dispose()}},[t,e,n]),D.jsx("div",{ref:i,className:"w-full h-full bg-neutral-100 dark:bg-neutral-900 rounded-md overflow-hidden relative",children:r&&D.jsx("div",{className:"absolute inset-0 flex items-center justify-center px-4 text-center text-sm font-medium text-red-700 dark:text-red-300 bg-white/90 dark:bg-black/70",children:r})})}const Ku=new Map;function R1({url:t,ext:e,assetId:n}){const i=Me.useRef(null),[r,s]=Me.useState(null),[o,a]=Me.useState("idle");return Me.useEffect(()=>{let l=!1;const u=n?`asset:${n}`:`${t}`;if(Ku.has(u)){s(Ku.get(u));return}return(async()=>{if(i.current){a("loading");try{const d=i.current.getBoundingClientRect(),h=Math.max(120,Math.floor(d.width||240)),p=Math.max(120,Math.floor(d.height||180)),v=await F1(t,e,h,p);if(l)return;Ku.set(u,v),s(v),a("idle")}catch(d){console.warn("Snapshot generation failed:",d),l||a("error")}}})(),()=>{l=!0}},[t,e,n]),D.jsx("div",{ref:i,className:"w-full h-full bg-neutral-100 dark:bg-neutral-900 flex items-center justify-center rounded-md overflow-hidden",children:r?D.jsx("img",{src:r,alt:"Preview",className:"w-full h-full object-cover"}):o==="loading"?D.jsx("span",{className:"text-xs text-neutral-500 dark:text-neutral-400",children:"Generating preview…"}):D.jsx("span",{className:"text-xs text-neutral-500 dark:text-neutral-400",children:"Preview unavailable"})})}async function b1(t){const e=await fetch(t);if(!e.ok)throw new Error(`3MF fetch failed with status ${e.status}`);const n=new Uint8Array(await e.arrayBuffer()),i=new TextDecoder,r=new Map,s=(l,u)=>{const f=typeof u=="string"?u:i.decode(u);try{const d=P1(f,l);(d.objects.size||d.buildItems.length)&&r.set(d.path,d)}catch(d){console.warn(`3MF fallback parse failed for ${l}`,d)}};let o=!1;try{const{unzipSync:l}=await Ms(async()=>{const{unzipSync:d}=await import("./fflate.module-DxdqVi2p.js");return{unzipSync:d}},[]),u=l(n),f=Object.keys(u).filter(d=>/\.model$/i.test(d));if(f.length){o=!0;for(const d of f)s(d,u[d])}}catch(l){console.warn("3MF fallback unzip failed, attempting inline parse",l)}if(o||s("/3D/3dmodel.model",n),!r.size)throw new Error("3MF fallback: no printable geometry found");const a=L1(r);if(!a.children.length)throw new Error("3MF fallback: no printable geometry found");return a}function L1(t){const e=new Ii,n=new Map,i=(r,s,o)=>{var p;const a=Hl(r),l=`${a}::${s}`,u=n.get(l);if(u)return u.clone(!0);const f=t.get(a);if(!f)return null;if(o.has(l))return console.warn("3MF fallback: detected recursive reference for %s",l),null;o.add(l);const d=f.objects.get(s);if(!d)return o.delete(l),null;let h=null;if(d.mesh)h=D1(d.mesh);else if((p=d.components)!=null&&p.length){const v=new Ii;for(const x of d.components){const m=i(x.sourcePath??f.path,x.objectId,o);m&&(x.transform&&m.applyMatrix4(x.transform.clone()),v.add(m))}h=v}return o.delete(l),h?(n.set(l,h),h.clone(!0)):null};for(const r of t.values()){if(!r.buildItems.length)continue;const s=new Ii;for(const o of r.buildItems){const a=i(o.sourcePath??r.path,o.objectId,new Set);a&&(o.transform&&a.applyMatrix4(o.transform.clone()),s.add(a))}s.children.length&&e.add(s)}return e}function P1(t,e){const i=new DOMParser().parseFromString(t,"application/xml");if(i.querySelector("parsererror"))throw new Error("3MF fallback: invalid XML");const r=Hl(e),s=new Map;for(const l of Cs(i,"object")){const u=l.getAttribute("id");if(!u)continue;const f={id:u},d=Zu(l,"mesh");if(d){const p=N1(d);p&&(f.mesh=p)}const h=Zu(l,"components");if(h){const p=U1(h);p.length&&(f.components=p)}s.set(u,f)}const o=Zu(i,"build"),a=o?I1(o):[];return{path:r,objects:s,buildItems:a}}function D1(t){const e=new Xn;return e.setAttribute("position",new bn(t.positions,3)),e.setIndex(new bn(t.indices,1)),e.computeVertexNormals(),e.computeBoundingSphere(),new Cn(e,new cf({color:15857145,metalness:.2,roughness:.8}))}function N1(t){const e=Cs(t,"vertex"),n=Cs(t,"triangle");if(!e.length||!n.length)return null;const i=new Float32Array(e.length*3);e.forEach((s,o)=>{i[o*3+0]=parseFloat(s.getAttribute("x")||"0"),i[o*3+1]=parseFloat(s.getAttribute("y")||"0"),i[o*3+2]=parseFloat(s.getAttribute("z")||"0")});const r=new Uint32Array(n.length*3);return n.forEach((s,o)=>{r[o*3+0]=parseInt(s.getAttribute("v1")||"0",10),r[o*3+1]=parseInt(s.getAttribute("v2")||"0",10),r[o*3+2]=parseInt(s.getAttribute("v3")||"0",10)}),{positions:i,indices:r}}function U1(t){const e=[];for(const n of Cs(t,"component")){const i=n.getAttribute("objectid");if(!i)continue;const r=n.getAttribute("transform"),s=ov(n,"path");e.push({objectId:i,transform:r?sv(r):void 0,sourcePath:s?Hl(s):void 0})}return e}function I1(t){const e=[];for(const n of Cs(t,"item")){const i=n.getAttribute("objectid");if(!i)continue;const r=n.getAttribute("transform"),s=ov(n,"path");e.push({objectId:i,transform:r?sv(r):void 0,sourcePath:s?Hl(s):void 0})}return e}function sv(t){const e=t.trim().split(/\s+/).map(i=>parseFloat(i)).filter(i=>!Number.isNaN(i));if(e.length!==12)return null;const n=new pt;return n.set(e[0],e[3],e[6],e[9],e[1],e[4],e[7],e[10],e[2],e[5],e[8],e[11],0,0,0,1),n}function ov(t,e){const n=t.getAttribute(e);if(n!==null)return n;if(typeof t.getAttributeNames=="function")for(const i of t.getAttributeNames()){const r=i.indexOf(":");if(r!==-1&&i.slice(r+1)===e){const s=t.getAttribute(i);if(s!==null)return s}}else for(const i of["p","m","s"]){const r=t.getAttribute(`${i}:${e}`);if(r!==null)return r}return null}function Hl(t){const e=(t||"").trim();if(!e)return"/3D/3dmodel.model";let n=e.replace(/\\/g,"/");return n=n.replace(/^\/+/,"/"),n.startsWith("/")||(n=`/${n}`),n}function Cs(t,e){const n=Array.from(t.getElementsByTagName(e));if(n.length)return n;if("getElementsByTagNameNS"in t){const i=t.getElementsByTagNameNS("*",e);return Array.from(i??[])}return[]}function Zu(t,e){return Cs(t,e)[0]??null}async function F1(t,e,n,i){const r=(e||"").toLowerCase(),s=await av(r,t);if(!s)throw new Error(`Unsupported snapshot extension: ${e}`);const o=new nv;o.add(new iv(16777215,4473924,1.2)),o.add(new rv(16777215,.8));const a=new pn(45,n/i,.1,1e3),l=new uf({antialias:!0,alpha:!0,preserveDrawingBuffer:!0});l.setSize(n,i,!1),o.add(s);const u=new Ji().setFromObject(s);if(u.isEmpty())a.position.set(1,1,3),a.lookAt(new k(0,0,0));else{const d=u.getSize(new k),h=u.getCenter(new k),p=Math.max(d.x,d.y,d.z)||1;a.position.copy(h).add(new k(p*1.8,p*1.3,p*1.6)),a.lookAt(h)}l.render(o,a);const f=l.domElement.toDataURL("image/png");return td(s),l.dispose(),f}async function av(t,e){if(t==="stl"){const{STLLoader:n}=await Ms(async()=>{const{STLLoader:a}=await import("./STLLoader-jite63eB.js");return{STLLoader:a}},[]),i=await new Promise((a,l)=>{new n().load(e,a,void 0,l)});i.computeBoundingBox();const s=(i.boundingBox??new Ji).getCenter(new k);return i.translate(-s.x,-s.y,-s.z),new Cn(i,new cf({metalness:.2,roughness:.8,color:14540253}))}if(t==="3mf")return await k1(e);if(t==="obj"){const{OBJLoader:n}=await Ms(async()=>{const{OBJLoader:i}=await import("./OBJLoader-CeF16utT.js");return{OBJLoader:i}},[]);return await new Promise((i,r)=>{new n().load(e,i,void 0,r)})}return t==="step"||t==="stp"?await O1(e):null}async function O1(t){var a,l,u,f,d;const e=(await Ms(async()=>{const{default:h}=await import("./occt-import-js-D2VVCwld.js").then(p=>p.o);return{default:h}},[])).default,n=await fetch(t),i=new Uint8Array(await n.arrayBuffer()),s=await(await e({locateFile:h=>h.endsWith(".wasm")?T1:h.endsWith(".worker.js")?A1:h})).ReadStepFile(i,null),o=new Ii;for(const h of s.meshes){const p=(l=(a=h.attributes)==null?void 0:a.position)==null?void 0:l.array;if(!p||!p.length)continue;const v=new Xn,x=S=>Float32Array.from(S);v.setAttribute("position",new Wn(x(p),3));const m=(f=(u=h.attributes)==null?void 0:u.normal)==null?void 0:f.array;m&&m.length&&v.setAttribute("normal",new Wn(x(m),3));const c=(d=h.index)==null?void 0:d.array;c&&c.length?v.setIndex(Array.isArray(c)?c:Array.from(c)):v.computeVertexNormals(),v.computeBoundingSphere();const _=h.color?new He(h.color[0]/255,h.color[1]/255,h.color[2]/255):new He(15857145),g=new Cn(v,new cf({color:_,metalness:.2,roughness:.8}));o.add(g)}if(!o.children.length)throw new Error("STEP preview produced no meshes");return o}async function k1(t){try{return await b1(t)}catch(e){return console.warn("Simple 3MF parse failed, falling back to ThreeMFLoader",e),await B1(t)}}async function B1(t){const{ThreeMFLoader:e}=await Ms(async()=>{const{ThreeMFLoader:n}=await import("./3MFLoader-a6ryrntd.js");return{ThreeMFLoader:n}},__vite__mapDeps([0,1]));return await new Promise((n,i)=>{new e().load(t,n,void 0,i)})}function td(t){t.traverse(e=>{var n,i;e instanceof Cn&&((n=e.geometry)==null||n.dispose(),Array.isArray(e.material)?e.material.forEach(r=>r.dispose()):(i=e.material)==null||i.dispose())})}const lm=[{bg:"#fee2e2",text:"#991b1b",border:"#fecaca"},{bg:"#ffedd5",text:"#9a3412",border:"#fed7aa"},{bg:"#fef9c3",text:"#854d0e",border:"#fde68a"},{bg:"#dcfce7",text:"#166534",border:"#bbf7d0"},{bg:"#e0f2fe",text:"#075985",border:"#bae6fd"},{bg:"#e0e7ff",text:"#3730a3",border:"#c7d2fe"},{bg:"#f4e8ff",text:"#6d28d9",border:"#e9d5ff"},{bg:"#fce7f3",text:"#9d174d",border:"#fbcfe8"},{bg:"#f1f5f9",text:"#475569",border:"#e2e8f0"}];function lv(t){const e=t.toLowerCase();let n=0;for(let r=0;r<e.length;r++)n=(n<<5)-n+e.charCodeAt(r),n|=0;return lm[Math.abs(n)%lm.length]}function ff({tag:t,className:e="",onRemove:n}){const i=lv(t);return D.jsxs("span",{className:`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-medium border ${e}`,style:{backgroundColor:i.bg,color:i.text,borderColor:i.border},children:[t,n&&D.jsx("button",{type:"button",className:"text-[10px] leading-none opacity-70 hover:opacity-100",onClick:n,"aria-label":`Remove ${t}`,children:"×"})]})}function uv({value:t,onChange:e,placeholder:n}){const[i,r]=vt.useState(""),s=vt.useRef(null),o=d=>d.trim().replace(/\s+/g," "),a=d=>{const h=o(d);if(h){if(t.some(p=>p.toLowerCase()===h.toLowerCase())){r("");return}e([...t,h]),r("")}},l=d=>{const h=[...t.slice(0,d),...t.slice(d+1)];e(h)},u=d=>{d.key==="Enter"||d.key===","?(d.preventDefault(),a(i)):d.key==="Backspace"&&i===""&&t.length&&(d.preventDefault(),l(t.length-1))},f=()=>{i.trim()&&a(i)};return D.jsxs("div",{className:"flex flex-wrap gap-2 px-2 py-2 rounded-md border border-neutral-300 dark:border-neutral-700 bg-white/80 dark:bg-neutral-900/80 text-sm",onClick:()=>{var d;return(d=s.current)==null?void 0:d.focus()},children:[t.map((d,h)=>D.jsx(ff,{tag:d,onRemove:()=>l(h)},`${d}-${h}`)),D.jsx("input",{ref:s,value:i,onChange:d=>r(d.target.value),onKeyDown:u,onBlur:f,placeholder:t.length===0?n:"",className:"flex-1 min-w-[120px] bg-transparent outline-none text-sm text-neutral-900 dark:text-neutral-100 placeholder:text-neutral-400"})]})}function Ha(t){const e=/\.([^.]+)$/.exec(t);return((e==null?void 0:e[1])||"").toLowerCase()}function z1({folderId:t,foldersVersion:e=0,onUnauthorized:n}){const[i,r]=Me.useState([]),[s,o]=Me.useState([]),[a,l]=Me.useState(new Set),[u,f]=Me.useState(""),[d,h]=Me.useState([]),[p,v]=Me.useState(!1),[x,m]=Me.useState(null),[c,_]=Me.useState(null),[g,S]=Me.useState(null),[R,C]=Me.useState(null),[A,U]=Me.useState("name"),[M,T]=Me.useState("asc"),[B,z]=Me.useState(new Set),[Q,L]=Me.useState(null),F=(N,te)=>N instanceof Il?(n==null||n(),!0):(console.error(N),te&&alert(te),!1),$=async(N={})=>{v(!0);try{const te=await Xx({q:N.search??u,tags:N.tags??d,folder_id:t||void 0});r(te)}catch(te){F(te,"Failed to load assets. Please sign in again or refresh.")}finally{v(!1)}};Me.useEffect(()=>{$()},[t]),Me.useEffect(()=>{(async()=>{try{o(await w_())}catch(N){F(N,"Failed to load folders. Please refresh.")}})()},[e]),Me.useEffect(()=>{const N=new Set(i.map(te=>te.id));z(te=>new Set([...te].filter(J=>N.has(J))))},[i]);const Y=Me.useMemo(()=>{const N=new Set;for(const te of i)for(const J of te.tags)N.add(J);return Array.from(N).sort((te,J)=>te.localeCompare(J))},[i]),P=Me.useMemo(()=>{const N={};for(const te of s)N[te.id]=te.name;return N},[s]),O=Me.useMemo(()=>[{id:null,name:"Unassigned"},...s.map(N=>({id:N.id,name:N.name||"Untitled"}))],[s]),j=Me.useMemo(()=>{const N=[...i],te=M==="asc"?1:-1,J=E=>E.folder_id&&P[E.folder_id]||"";return N.sort((E,y)=>A==="size"?(E.size-y.size)*te:A==="type"?Ha(E.filename).localeCompare(Ha(y.filename))*te:A==="folder"?J(E).localeCompare(J(y))*te:E.filename.localeCompare(y.filename)*te),N},[i,A,M,P]),K=Me.useMemo(()=>{if(A!=="folder")return[];const N={};for(const J of i){const E=J.folder_id||"__ungrouped";N[E]||(N[E]={id:`folder:${E}`,title:J.folder_id?P[J.folder_id]||"Untitled":"Unassigned",items:[]}),N[E].items.push(J)}const te=M==="asc"?1:-1;return Object.values(N).sort((J,E)=>J.title.localeCompare(E.title)*te).map(J=>({...J,items:J.items.sort((E,y)=>E.filename.localeCompare(y.filename))}))},[i,P,A,M]),oe=Me.useMemo(()=>{if(A!=="type")return[];const N={};for(const J of i){const E=Ha(J.filename)||"other";N[E]||(N[E]={id:`type:${E}`,title:E==="other"?"Other":E.toUpperCase(),items:[]}),N[E].items.push(J)}const te=M==="asc"?1:-1;return Object.values(N).sort((J,E)=>J.title.localeCompare(E.title)*te).map(J=>({...J,items:J.items.sort((E,y)=>E.filename.localeCompare(y.filename))}))},[i,A,M]),q=N=>{l(te=>{const J=new Set(te);return J.has(N)?J.delete(N):J.add(N),J})},Z=N=>{h(te=>{const J=te.includes(N)?te.filter(E=>E!==N):[...te,N];return $({tags:J}),J})},ce=N=>{z(te=>{const J=new Set(te);return J.has(N)?J.delete(N):J.add(N),J})},ge=(N,te)=>{const E=(N.headers.get("content-disposition")||"").match(/filename="?([^\";]+)"?/i);return E&&E[1]||te||"download"},_e=async(N,te)=>{const J=ge(N,te),E=await N.blob(),y=URL.createObjectURL(E),G=document.createElement("a");G.href=y,G.download=J,document.body.appendChild(G),G.click(),document.body.removeChild(G),URL.revokeObjectURL(y)},be=async(N,te)=>{try{await qx(N,te),await $()}catch(J){F(J,"Tag update failed. Please try again.")}},Pe=async(N,te)=>{try{await Yx(N,{notes:te}),await $()}catch(J){F(J,"Failed to save notes. Please try again.")}},re=async(N,te)=>{try{await Zx(N,te),await $()}catch(J){F(J,"Rename failed. Please try again.")}},Ce=async(N,te)=>{try{C(N),await Qx(N,te),await $()}catch(J){F(J)||alert("Folder update failed. Please try again.")}finally{C(null)}},H=async N=>{try{_(N.id);const te=await fetch(fl(N.url));if(te.status===401)throw n==null||n(),new Error("Unauthorized");if(!te.ok)throw new Error("Download failed");await _e(te,N.filename||"download")}catch(te){F(te)||(console.error(te),alert("Download failed. Please try again."))}finally{_(null)}},Tt=async()=>{if(!B.size){alert("Select at least one item to download.");return}try{L("selected");const N=await Lh({asset_ids:Array.from(B)});await _e(N,"makersvault-selected.zip")}catch(N){F(N,"Bulk download failed.")||console.error(N)}finally{L(null)}},Ee=async N=>{if(N)try{L(`tag:${N}`);const te=await Lh({tag:N});await _e(te,`${N}.zip`)}catch(te){F(te,"Download by tag failed.")||console.error(te)}finally{L(null)}},De=async N=>{if(confirm(`Delete "${N.title||N.filename}"? This cannot be undone.`))try{S(N.id),await Kx(N.id),await $()}catch(te){F(te)||alert("Delete failed. Please try again.")}finally{S(null)}};return D.jsxs("div",{className:"flex flex-col gap-4",children:[D.jsxs("div",{className:"flex items-center gap-3 flex-wrap",children:[D.jsx("input",{value:u,onChange:N=>f(N.target.value),onKeyDown:N=>{if(N.key==="Enter"){const te=N.currentTarget.value;$({search:te})}},placeholder:"Search title, filename, notes...",className:"px-3 py-2 rounded-md border border-neutral-300 dark:border-neutral-700 bg-white/70 dark:bg-neutral-900/70 w-80"}),D.jsx("button",{className:"px-3 py-2 rounded-md border border-neutral-300 dark:border-neutral-700 disabled:opacity-60",onClick:()=>$({search:u}),disabled:p,children:"Search"}),p&&D.jsx("span",{className:"text-sm opacity-70",children:"Loading..."}),D.jsxs("div",{className:"flex items-center gap-2 text-sm",children:[D.jsx("span",{className:"opacity-70",children:"Sort"}),D.jsxs("select",{className:"px-2 py-1 rounded-md border border-neutral-300 dark:border-neutral-700 bg-white/70 dark:bg-neutral-900/70",value:A,onChange:N=>U(N.target.value),children:[D.jsx("option",{value:"name",children:"Name"}),D.jsx("option",{value:"size",children:"Size"}),D.jsx("option",{value:"type",children:"File type"}),D.jsx("option",{value:"folder",children:"Folder"})]}),D.jsx("button",{type:"button",onClick:()=>T(N=>N==="asc"?"desc":"asc"),className:"px-2 py-1 rounded-md border border-neutral-300 dark:border-neutral-700",children:M==="asc"?"Asc":"Desc"})]})]}),!!Y.length&&D.jsxs("div",{className:"flex flex-wrap gap-2",children:[Y.map(N=>{const te=lv(N),J=d.includes(N);return D.jsx("button",{className:`px-2 py-1 rounded-full text-sm border transition-colors ${J?"ring-2 ring-offset-1 ring-emerald-500 dark:ring-offset-neutral-900":""}`,style:{backgroundColor:J?te.bg:"transparent",color:te.text,borderColor:te.border},onClick:()=>Z(N),children:N},N)}),d.length>0&&D.jsx("button",{className:"px-2 py-1 rounded-full text-sm border border-neutral-300 dark:border-neutral-700",onClick:()=>{h([]),$({tags:[]})},children:"Reset"})]}),["folder","type"].includes(A)?D.jsx("div",{className:"space-y-4",children:(A==="folder"?K:oe).map(N=>{const te=a.has(N.id);return D.jsxs("div",{className:"rounded-lg border border-neutral-200 dark:border-neutral-800 bg-white/70 dark:bg-neutral-900/70",children:[D.jsxs("button",{className:"w-full flex items-center justify-between px-4 py-3 text-left",onClick:()=>q(N.id),children:[D.jsxs("div",{children:[D.jsx("div",{className:"font-medium",children:N.title}),D.jsxs("div",{className:"text-xs opacity-70",children:[N.items.length," item",N.items.length===1?"":"s"]})]}),D.jsx("span",{className:"text-sm opacity-70",children:te?"Show":"Hide"})]}),!te&&D.jsx("div",{className:"px-4 pb-4 overflow-x-auto",children:D.jsxs("div",{className:"flex gap-4 min-h-[280px]",children:[N.items.map(J=>D.jsx("div",{className:"min-w-[260px] max-w-[320px]",children:D.jsx(um,{item:J,onSaveTags:be,onSaveNotes:Pe,onRename:re,onPreview:m,onDownloadSingle:H,downloading:c===J.id,onDelete:De,deleting:g===J.id,onMoveFolder:Ce,folderOptions:O,moving:R===J.id,onDownloadByTag:Ee,onDownloadSelected:Tt,selected:B.has(J.id),onToggleSelected:()=>ce(J.id),hasSelection:B.size>0,bulkDownloading:!!Q})},J.id)),!N.items.length&&D.jsx("div",{className:"px-2 py-4 text-sm opacity-60",children:"No assets in this folder"})]})})]},N.id)})}):D.jsx("div",{className:"grid gap-4",style:{gridTemplateColumns:"repeat(auto-fill, minmax(260px, 1fr))"},children:j.map(N=>D.jsx(um,{item:N,onSaveTags:be,onSaveNotes:Pe,onRename:re,onPreview:m,onDownloadSingle:H,downloading:c===N.id,onDelete:De,deleting:g===N.id,onMoveFolder:Ce,folderOptions:O,moving:R===N.id,onDownloadByTag:Ee,onDownloadSelected:Tt,selected:B.has(N.id),onToggleSelected:()=>ce(N.id),hasSelection:B.size>0,bulkDownloading:!!Q},N.id))}),x&&D.jsx(H1,{asset:x,onClose:()=>m(null)})]})}function um({item:t,onSaveTags:e,onSaveNotes:n,onRename:i,onPreview:r,onDownloadSingle:s,onDownloadByTag:o,onDownloadSelected:a,downloading:l,onDelete:u,deleting:f,onMoveFolder:d,folderOptions:h,moving:p,selected:v,onToggleSelected:x,hasSelection:m,bulkDownloading:c}){const[_,g]=Me.useState(!1),[S,R]=Me.useState(t.tags),[C,A]=Me.useState(!1),[U,M]=Me.useState(t.notes||""),[T,B]=Me.useState(!0),[z,Q]=Me.useState(!1),[L,F]=Me.useState(t.filename),$=vt.useRef(null),[Y,P]=Me.useState("");Me.useEffect(()=>{_||R(t.tags)},[t.tags,_]),Me.useEffect(()=>{C||M(t.notes||"")},[t.notes,C]),Me.useEffect(()=>{z?setTimeout(()=>{var re;return(re=$.current)==null?void 0:re.select()},0):F(t.filename)},[t.filename,z]);const O=()=>{R(t.tags),g(!0)},j=()=>{g(!1),R(t.tags)},K=async()=>{await e(t.id,S),g(!1)},oe=async()=>{await n(t.id,U),A(!1)},q=()=>{A(!1),M(t.notes||"")},Z=(t.notes||"").trim(),ce=async()=>{const re=L.trim();if(!re){F(t.filename),Q(!1);return}if(re===t.filename){Q(!1);return}try{await i(t.id,re)}catch(Ce){console.error(Ce),alert("Rename failed"),F(t.filename)}finally{Q(!1)}},ge=()=>{F(t.filename),Q(!1)},_e=re=>{re.key==="Enter"?(re.preventDefault(),ce()):re.key==="Escape"&&(re.preventDefault(),ge())},be=re=>{const Ce=re.target.value||null,H=t.folder_id||null;Ce!==H&&d(t.id,Ce)},Pe=re=>{const Ce=re.target.value;Ce&&(P(""),Ce==="single"?s(t):Ce==="selected"?a():Ce.startsWith("tag:")&&o(Ce.slice(4)))};return D.jsxs("div",{className:"rounded-lg border border-neutral-200 dark:border-neutral-800 overflow-hidden bg-white/60 dark:bg-neutral-900/60",children:[D.jsx("div",{className:"h-40 relative cursor-pointer",onDoubleClick:()=>r(t),title:"Double-click to open large preview",onClick:re=>re.stopPropagation(),children:cv(t,"card")}),D.jsxs("div",{className:"p-3 flex flex-col gap-2",children:[D.jsxs("div",{className:"flex items-center justify-between gap-2",children:[D.jsxs("label",{className:"flex items-center gap-2 text-sm",children:[D.jsx("input",{type:"checkbox",checked:v,onChange:x,className:"w-4 h-4"}),D.jsx("span",{children:"Select"})]}),D.jsxs("div",{className:"flex items-center gap-2",children:[D.jsxs("select",{value:Y,onChange:Pe,disabled:l||c,className:"px-2 py-1 rounded-md border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 text-sm",children:[D.jsx("option",{value:"",children:"Download..."}),D.jsx("option",{value:"single",children:"Download file"}),D.jsx("option",{value:"selected",disabled:!m,children:"Download all selected"}),t.tags.map(re=>D.jsxs("option",{value:`tag:${re}`,children:["Download tag: ",re]},`tag-${re}`))]}),(l||c)&&D.jsx("span",{className:"text-xs opacity-70",children:l?"Downloading...":"Preparing..."})]})]}),D.jsxs("div",{className:"flex flex-col gap-1",children:[D.jsx("label",{className:"text-xs font-semibold uppercase text-neutral-500 dark:text-neutral-400",children:p?"Updating...":"Folder"}),D.jsx("select",{value:t.folder_id||"",onChange:be,disabled:p,className:"px-2 py-1 rounded-md border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 text-sm",children:h.map(re=>D.jsx("option",{value:re.id||"",children:re.name},re.id||"none"))})]}),D.jsx("div",{className:"text-sm font-medium truncate cursor-text",title:t.filename,onDoubleClick:re=>{re.stopPropagation(),Q(!0)},onClick:re=>z&&re.stopPropagation(),children:z?D.jsx("input",{ref:$,value:L,onChange:re=>F(re.target.value),onBlur:ce,onKeyDown:_e,onClick:re=>re.stopPropagation(),className:"px-2 py-1 w-full rounded-md border border-neutral-300 dark:border-neutral-700 bg-white/80 dark:bg-neutral-900/80 text-sm",autoFocus:!0}):t.title||t.filename}),D.jsx("div",{className:"flex flex-wrap gap-1",children:t.tags.length?t.tags.map(re=>D.jsx(ff,{tag:re},re)):D.jsx("span",{className:"text-xs opacity-60",children:"No tags"})}),D.jsxs("div",{className:"border border-dashed border-neutral-300 dark:border-neutral-700 rounded-md p-2 text-sm flex flex-col gap-2",children:[D.jsxs("div",{className:"flex items-center justify-between text-xs uppercase tracking-wide text-neutral-500",children:[D.jsx("span",{children:"Notes"}),D.jsx("button",{className:"text-[11px] px-2 py-0.5 rounded-md border border-neutral-300 dark:border-neutral-700",onClick:()=>B(re=>!re),children:T?"Expand":"Collapse"})]}),!T&&D.jsx(D.Fragment,{children:C?D.jsxs(D.Fragment,{children:[D.jsx("textarea",{value:U,onChange:re=>M(re.target.value),className:"w-full min-h-[80px] rounded-md border border-neutral-300 dark:border-neutral-700 bg-white/70 dark:bg-neutral-900/70 p-2",placeholder:"Add some details about this asset"}),D.jsxs("div",{className:"flex flex-wrap gap-2",children:[D.jsx("button",{className:"text-sm px-3 py-1 rounded-md bg-emerald-600 text-white",onClick:oe,children:"Save"}),D.jsx("button",{className:"text-sm px-3 py-1 rounded-md border",onClick:q,children:"Cancel"})]})]}):D.jsxs(D.Fragment,{children:[D.jsx("div",{className:`text-sm whitespace-pre-wrap ${Z?"text-neutral-800 dark:text-neutral-100":"opacity-60"}`,children:Z||"Add notes"}),D.jsx("button",{className:"self-start text-xs px-2 py-1 rounded-md border border-neutral-300 dark:border-neutral-700",onClick:()=>A(!0),children:Z?"Edit notes":"Add notes"})]})}),T&&D.jsx("div",{className:`text-sm ${Z?"text-neutral-700 dark:text-neutral-200":"opacity-60"}`,children:Z?`${Z.slice(0,60)}${Z.length>60?"...":""}`:"No notes"})]}),_?D.jsxs("div",{className:"flex flex-col gap-2",children:[D.jsx(uv,{value:S,onChange:R,placeholder:"Type and press comma/Enter"}),D.jsxs("div",{className:"flex flex-wrap gap-2",children:[D.jsx("button",{className:"text-sm px-3 py-1 rounded-md bg-emerald-600 text-white",onClick:K,children:"Save"}),D.jsx("button",{className:"text-sm px-3 py-1 rounded-md border",onClick:j,children:"Cancel"})]})]}):D.jsxs("div",{className:"flex items-center gap-2 flex-wrap",children:[D.jsx("button",{className:"text-sm px-2 py-1 rounded-md border border-neutral-300 dark:border-neutral-700",onClick:O,children:"Edit tags"}),D.jsx("button",{className:"text-sm px-2 py-1 rounded-md border border-red-300 text-red-700 dark:text-red-300 disabled:opacity-60",onClick:()=>u(t),disabled:f,children:f?"Deleting...":"Delete"})]})]})]})}function cv(t,e){const n=Ha(t.filename),i=fl(t.url),r=t.thumb_url?fl(t.thumb_url):null,s=e==="card"?"w-full h-full object-cover":"w-full h-full object-contain bg-white",o=["stl","3mf","step","stp","obj"].includes(n);if(e==="card")return r?D.jsx("img",{src:r,alt:t.filename,className:s}):n==="svg"?D.jsx("img",{src:i,alt:t.filename,className:s}):o?D.jsx(R1,{url:i,ext:n,assetId:t.id}):D.jsx("div",{className:"flex items-center justify-center w-full h-full text-sm opacity-60",children:"No preview"});if(o)return D.jsx(C1,{url:i,ext:n,assetId:t.id},`${e}-${t.id}`);if(r||n==="svg"){const a=r||i;return D.jsx("img",{src:a,alt:t.filename,className:s})}return D.jsx("div",{className:"flex items-center justify-center w-full h-full text-sm opacity-60",children:"Preview unavailable"})}function H1({asset:t,onClose:e}){const n=i=>i.stopPropagation();return D.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4",onClick:e,children:D.jsxs("div",{className:"bg-white dark:bg-neutral-900 rounded-lg shadow-2xl max-w-5xl w-full max-h-full overflow-hidden flex flex-col",onClick:n,children:[D.jsxs("div",{className:"flex items-center justify-between border-b border-neutral-200 dark:border-neutral-800 px-4 py-3",children:[D.jsxs("div",{children:[D.jsx("h2",{className:"text-lg font-semibold",children:t.title||t.filename}),D.jsxs("p",{className:"text-sm opacity-70",children:[t.filename," · ",G1(t.size)]})]}),D.jsx("button",{className:"px-3 py-1 rounded-md border border-neutral-300 dark:border-neutral-700 text-sm",onClick:e,children:"Close"})]}),D.jsxs("div",{className:"p-4 space-y-4 overflow-auto",children:[D.jsx("div",{className:"w-full h-[70vh] min-h-[400px]",children:D.jsx("div",{className:"w-full h-full rounded-lg bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center overflow-hidden",children:cv(t,"modal")})}),D.jsx("div",{className:"flex flex-wrap gap-2",children:t.tags.length?t.tags.map(i=>D.jsx(ff,{tag:i},i)):D.jsx("span",{className:"text-xs opacity-60",children:"No tags"})}),t.notes&&D.jsx("div",{className:"text-sm border border-dashed border-neutral-300 dark:border-neutral-700 rounded-md p-3 whitespace-pre-wrap",children:t.notes}),D.jsxs("div",{className:"flex gap-3",children:[D.jsx("a",{className:"px-3 py-2 rounded-md bg-emerald-600 text-white text-sm",href:fl(t.url),download:t.filename,children:"Download"}),D.jsx("button",{className:"px-3 py-2 rounded-md border border-neutral-300 dark:border-neutral-700 text-sm",onClick:e,children:"Close"})]})]})]})})}function G1(t){if(!t&&t!==0)return"";const e=["B","KB","MB","GB"];let n=t,i=0;for(;n>=1024&&i<e.length-1;)n/=1024,i++;return`${n.toFixed(i===0?0:1)} ${e[i]}`}function V1({selectedId:t,onSelect:e,onFoldersChanged:n,onUnauthorized:i}){const[r,s]=Me.useState([]),[o,a]=Me.useState(!1),[l,u]=Me.useState(""),[f,d]=Me.useState(!1),[h,p]=Me.useState(null),[v,x]=Me.useState(""),[m,c]=Me.useState([]),_=(z,Q)=>{const F=(z.headers.get("content-disposition")||"").match(/filename="?([^\";]+)"?/i);return F&&F[1]||Q},g=async(z,Q)=>{const L=_(z,Q),F=await z.blob(),$=URL.createObjectURL(F),Y=document.createElement("a");Y.href=$,Y.download=L,document.body.appendChild(Y),Y.click(),document.body.removeChild(Y),URL.revokeObjectURL($)},S=(z,Q)=>{if(z instanceof Il){i==null||i();return}console.error(z),alert(Q)},R=async()=>{try{s(await w_())}catch(z){S(z,"Unable to load folders.")}};Me.useEffect(()=>{R()},[]);const C=()=>{a(!0),u("")},A=async()=>{if(l.trim()){d(!0);try{await Jx(l.trim()),await R(),n==null||n()}catch(z){S(z,"Folder creation failed. Please try again.")}finally{d(!1),a(!1)}}},U=z=>{p(z.id),x(z.name),c(z.tags)},M=async()=>{if(h){d(!0);try{await ey(h,v.trim()||"Untitled",m),await R(),n==null||n()}catch(z){S(z,"Folder update failed. Please try again.")}finally{d(!1),p(null),c([])}}},T=async z=>{if(confirm("Delete folder? (Assets remain but become unassigned)")){d(!0);try{await ty(z),await R(),n==null||n(),t===z&&e(null)}catch(Q){S(Q,"Failed to delete folder.")}finally{d(!1)}}},B=async z=>{d(!0);try{const Q=await ny(z.id),L=(z.name||"folder").replace(/\s+/g,"_")||"folder";await g(Q,`${L}.zip`)}catch(Q){S(Q,"Unable to download folder.")}finally{d(!1)}};return D.jsxs("aside",{className:"w-64 border-r border-neutral-200 dark:border-neutral-800 p-3 flex flex-col gap-3",children:[D.jsxs("div",{className:"flex items-center justify-between",children:[D.jsx("div",{className:"text-xs text-neutral-500",children:"Location Manager"}),D.jsx("button",{className:"text-sm px-2 py-1 rounded-md border",onClick:C,children:"New"})]}),D.jsx("button",{className:`flex items-center gap-2 px-2 py-1 rounded-md ${t?"":"bg-emerald-50 dark:bg-neutral-800"}`,onClick:()=>e(null),children:D.jsx("span",{children:"All Items"})}),D.jsxs("div",{className:"flex flex-col gap-1",children:[r.map(z=>D.jsx("div",{className:`rounded-md ${t===z.id?"bg-emerald-50 dark:bg-neutral-800":""}`,children:D.jsxs("div",{className:"flex items-center gap-2 px-2 py-1",children:[D.jsx("button",{className:"flex-1 text-left truncate",onClick:()=>e(z.id),title:z.name,children:z.name}),D.jsx("button",{className:"text-xs px-1.5 py-0.5 rounded border disabled:opacity-60",disabled:f,onClick:()=>B(z),children:"Zip"}),D.jsx("button",{className:"text-xs px-1.5 py-0.5 rounded border disabled:opacity-60",disabled:f,onClick:()=>U(z),children:"Edit"}),D.jsx("button",{className:"text-xs px-1.5 py-0.5 rounded border disabled:opacity-60",disabled:f,onClick:()=>T(z.id),children:"Del"})]})},z.id)),r.length===0&&D.jsx("div",{className:"text-sm opacity-60 px-2",children:"No folders yet"})]}),o&&D.jsxs("div",{className:"mt-2 flex flex-col gap-2",children:[D.jsx("input",{value:l,onChange:z=>u(z.target.value),placeholder:"Folder name",className:"px-2 py-1 text-sm rounded-md border w-full bg-white text-neutral-900 dark:bg-neutral-900 dark:text-white"}),D.jsxs("div",{className:"flex gap-2",children:[D.jsx("button",{disabled:f,className:"text-sm px-3 py-1 rounded-md bg-emerald-600 text-white flex-1",onClick:A,children:"Create"}),D.jsx("button",{className:"text-sm px-3 py-1 rounded-md border flex-1",onClick:()=>a(!1),children:"Cancel"})]})]}),h&&D.jsxs("div",{className:"mt-2 flex flex-col gap-2",children:[D.jsx("input",{value:v,onChange:z=>x(z.target.value),className:"px-2 py-1 text-sm rounded-md border bg-white text-neutral-900 dark:bg-neutral-900 dark:text-white"}),D.jsx(uv,{value:m,onChange:c,placeholder:"Add folder tags"}),D.jsxs("div",{className:"flex items-center gap-2",children:[D.jsx("button",{disabled:f,className:"text-sm px-2 py-1 rounded-md bg-emerald-600 text-white",onClick:M,children:"Save"}),D.jsx("button",{className:"text-sm px-2 py-1 rounded-md border",onClick:()=>{p(null),c([])},children:"Cancel"})]})]})]})}function W1({onSuccess:t,apiUp:e}){const[n,i]=vt.useState(""),[r,s]=vt.useState(""),[o,a]=vt.useState(!1),[l,u]=vt.useState(null),f=async d=>{d.preventDefault(),u(null),a(!0);try{const h=await sy(n,r);t(h.token,h.expires_in)}catch(h){console.error(h),h instanceof Error?u(h.message):u("Login failed")}finally{a(!1)}};return D.jsxs("div",{className:"w-full max-w-md rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white/80 dark:bg-neutral-900/80 p-6 shadow-xl backdrop-blur",children:[D.jsxs("div",{className:"mb-6 text-center space-y-1",children:[D.jsx("h1",{className:"text-2xl font-semibold text-neutral-900 dark:text-neutral-100",children:"Makers Vault"}),D.jsx("p",{className:"text-sm text-neutral-600 dark:text-neutral-400",children:"Sign in to continue"})]}),e===!1&&D.jsx("div",{className:"mb-4 rounded-md bg-red-100 text-red-900 dark:bg-red-900/30 dark:text-red-100 px-3 py-2 text-sm",children:"API appears offline. Ensure the API service is running."}),l&&D.jsx("div",{className:"mb-4 rounded-md bg-red-100 text-red-900 dark:bg-red-900/30 dark:text-red-100 px-3 py-2 text-sm",children:l}),D.jsxs("form",{className:"space-y-4",onSubmit:f,children:[D.jsxs("div",{className:"flex flex-col gap-1",children:[D.jsx("label",{className:"text-sm font-medium",children:"Username"}),D.jsx("input",{value:n,onChange:d=>i(d.target.value),className:"px-3 py-2 rounded-md border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900",autoComplete:"username",required:!0})]}),D.jsxs("div",{className:"flex flex-col gap-1",children:[D.jsx("label",{className:"text-sm font-medium",children:"Password"}),D.jsx("input",{type:"password",value:r,onChange:d=>s(d.target.value),className:"px-3 py-2 rounded-md border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900",autoComplete:"current-password",required:!0})]}),D.jsx("button",{type:"submit",disabled:o,className:"w-full px-3 py-2 rounded-md bg-emerald-600 text-white font-medium disabled:opacity-60",children:o?"Signing in…":"Sign in"})]})]})}function j1({value:t,onToggle:e}){const n=t==="dark";return D.jsxs("button",{onClick:e,className:"flex items-center gap-3 select-none","aria-label":"Toggle theme",type:"button",children:[D.jsx("span",{className:`w-14 h-7 rounded-full border-2 flex items-center ${n?"border-white bg-neutral-900 dark:border-neutral-200":"border-neutral-900 bg-white dark:bg-neutral-200"}`,children:D.jsx("span",{className:`h-6 w-6 rounded-full border-2 transition-transform duration-200 ${n?"translate-x-6 border-white bg-white":"translate-x-0 border-neutral-900 bg-neutral-900"}`,style:{marginLeft:"2px"}})}),D.jsxs("span",{className:"text-sm font-medium",children:["Theme: ",n?"Dark":"Light"]})]})}const cm="makersvault_theme",X1=6*60*60;function $1(){const[t,e]=vt.useState(()=>Qd()),[n,i]=vt.useState(0),[r,s]=vt.useState(null),[o,a]=vt.useState(0),[l,u]=vt.useState(null),[f,d]=vt.useState(null),[h,p]=vt.useState(()=>{if(typeof window>"u")return"light";try{const S=window.localStorage.getItem(cm);if(S==="light"||S==="dark")return S}catch{}return window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"});vt.useEffect(()=>{if(!(typeof document>"u")){try{window.localStorage.setItem(cm,h)}catch{}document.documentElement.classList.toggle("dark",h==="dark")}},[h]),vt.useEffect(()=>{(async()=>u(await iy()))()},[]);const v=(l==null?void 0:l.ok)??null,x=(l==null?void 0:l.auth_required)??!0,m=(S,R)=>{Rh(S),e(S),d(R)},c=vt.useCallback(()=>{bh(),e(null),d(null),alert("Your session has expired. Please sign in again.")},[]),_=vt.useCallback(()=>{a(S=>S+1)},[]),g=()=>{bh(),e(null),d(null)};return vt.useEffect(()=>{if(!t)return;const S=f??X1,R=Math.max(5*60*1e3,Math.min(S*.8*1e3,S*1e3-5*60*1e3)),C=window.setTimeout(async()=>{try{const A=await oy();Rh(A.token),e(A.token),d(A.expires_in)}catch{c()}},R);return()=>window.clearTimeout(C)},[t,f,c]),x&&!t?D.jsx("div",{className:"min-h-screen flex items-center justify-center bg-gradient-to-br from-neutral-200 via-neutral-100 to-white dark:from-neutral-900 dark:via-neutral-950 dark:to-black",children:D.jsx(W1,{onSuccess:m,apiUp:v})}):D.jsxs("div",{className:"h-screen flex",children:[D.jsx(V1,{selectedId:r,onSelect:s,onFoldersChanged:_,onUnauthorized:c}),D.jsxs("main",{className:"flex-1 p-4 overflow-auto",children:[v===!1&&D.jsxs("div",{className:"mb-3 p-2 rounded-md bg-red-100 text-red-900 dark:bg-red-900/30 dark:text-red-100",children:["API unreachable at ",ry,". Ensure the API container is running and port 8000 is accessible."]}),D.jsxs("header",{className:"flex items-center justify-between mb-4 gap-4 flex-wrap",children:[D.jsx("img",{src:"/img/whitelogo.png",alt:"Makers Vault",className:"h-32 w-auto max-w-[420px]"}),D.jsxs("div",{className:"flex flex-wrap items-center gap-3",children:[D.jsx(ay,{folderId:r,onUploaded:()=>i(S=>S+1),onUnauthorized:c}),D.jsx(j1,{value:h,onToggle:()=>p(S=>S==="light"?"dark":"light")}),D.jsx("button",{onClick:()=>{confirm("Are you sure you want to log out?")&&g()},className:"px-3 py-2 rounded-md border border-neutral-300 dark:border-neutral-700 text-sm",children:"Log out"})]})]}),D.jsx(z1,{folderId:r,foldersVersion:o,onUnauthorized:c},`${n+(r||"")}-${o}`)]})]})}const dv=document.getElementById("root");if(!dv)throw new Error("#root not found");E_(dv).render(D.jsx(vt.StrictMode,{children:D.jsx($1,{})}));export{Xn as B,He as C,Ps as E,tA as F,Ii as G,zl as L,Y1 as M,qt as N,ur as P,Uo as Q,sf as R,iA as S,K1 as T,k as V,qe as a,Z1 as b,bn as c,Wn as d,g1 as e,er as f,v1 as g,eA as h,Q1 as i,J1 as j,Cn as k,q1 as l,_v as m,nA as n,Ut as o,pt as p,qc as q,zn as r,Yc as s,wn as t,To as u,cf as v};
