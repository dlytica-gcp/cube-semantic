var o=function(){return o=Object.assign||function(e){for(var n,t=1,l=arguments.length;t<l;t++){n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},o.apply(this,arguments)};function c(r){var e=typeof Symbol=="function"&&Symbol.iterator,n=e&&r[e],t=0;if(n)return n.call(r);if(r&&typeof r.length=="number")return{next:function(){return r&&t>=r.length&&(r=void 0),{value:r&&r[t++],done:!r}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")}function f(r,e){var n=typeof Symbol=="function"&&r[Symbol.iterator];if(!n)return r;var t=n.call(r),l,a=[],i;try{for(;(e===void 0||e-- >0)&&!(l=t.next()).done;)a.push(l.value)}catch(u){i={error:u}}finally{try{l&&!l.done&&(n=t.return)&&n.call(t)}finally{if(i)throw i.error}}return a}function s(r,e,n){if(n||arguments.length===2)for(var t=0,l=e.length,a;t<l;t++)(a||!(t in e))&&(a||(a=Array.prototype.slice.call(e,0,t)),a[t]=e[t]);return r.concat(a||Array.prototype.slice.call(e))}export{s as _,f as a,o as b,c};
