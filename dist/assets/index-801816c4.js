import{r as R,g as m}from"./react-venders-3a9fd7ec.js";var U={exports:{}},A={};/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _=R;function T(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var x=typeof Object.is=="function"?Object.is:T,V=_.useState,L=_.useEffect,D=_.useLayoutEffect,O=_.useDebugValue;function q(t,e){var r=e(),o=V({inst:{value:r,getSnapshot:e}}),n=o[0].inst,s=o[1];return D(function(){n.value=r,n.getSnapshot=e,v(n)&&s({inst:n})},[t,r,e]),L(function(){return v(n)&&s({inst:n}),t(function(){v(n)&&s({inst:n})})},[t]),O(r),r}function v(t){var e=t.getSnapshot;t=t.value;try{var r=e();return!x(t,r)}catch{return!0}}function w(t,e){return e()}var C=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?w:q;A.useSyncExternalStore=_.useSyncExternalStore!==void 0?_.useSyncExternalStore:C;U.exports=A;var b=U.exports;const I=t=>{let e;const r=new Set,o=(u,p)=>{const i=typeof u=="function"?u(e):u;if(!Object.is(i,e)){const E=e;e=p??typeof i!="object"?i:Object.assign({},e,i),r.forEach(d=>d(e,E))}},n=()=>e,l={setState:o,getState:n,subscribe:u=>(r.add(u),()=>r.delete(u)),destroy:()=>{r.clear()}};return e=t(o,n,l),l},B=t=>t?I(t):I;var g={exports:{}},P={};/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var f=R,H=b;function J(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var N=typeof Object.is=="function"?Object.is:J,W=H.useSyncExternalStore,j=f.useRef,G=f.useEffect,Q=f.useMemo,F=f.useDebugValue;P.useSyncExternalStoreWithSelector=function(t,e,r,o,n){var s=j(null);if(s.current===null){var a={hasValue:!1,value:null};s.current=a}else a=s.current;s=Q(function(){function u(c){if(!p){if(p=!0,i=c,c=o(c),n!==void 0&&a.hasValue){var S=a.value;if(n(S,c))return E=S}return E=c}if(S=E,N(i,c))return S;var y=o(c);return n!==void 0&&n(S,y)?S:(i=c,E=y)}var p=!1,i,E,d=r===void 0?null:r;return[function(){return u(e())},d===null?void 0:function(){return u(d())}]},[e,r,o,n]);var l=W(t,s[0],s[1]);return G(function(){a.hasValue=!0,a.value=l},[l]),F(l),l};g.exports=P;var M=g.exports;const $=m(M),{useSyncExternalStoreWithSelector:z}=$;function Y(t,e=t.getState,r){const o=z(t.subscribe,t.getState,t.getServerState||t.getState,e,r);return R.useDebugValue(o),o}const h=t=>{const e=typeof t=="function"?B(t):t,r=(o,n)=>Y(e,o,n);return Object.assign(r,e),r},K=t=>t?h(t):h;export{K as c};
