import*as e from"@dropins/elsie/event-bus.js";import*as r from"@dropins/elsie/fetch-graphql.js";import*as t from"@dropins/elsie/preact-compat.js";import*as n from"@dropins/elsie/preact-hooks.js";import*as o from"@dropins/elsie/preact-jsx-runtime.js";import*as i from"@dropins/elsie/preact.js";export const id=340;export const ids=[340];export const modules={304:(e,r,t)=>{t.d(r,{_:()=>Y,i:()=>V});var n=t(2532),o=t(2460),i=t(4944),s=t(5450),a=t(6668),l=t(8340),u=function(){return(0,l.jsx)(a.W,{className:"bill-to-shipping-address__skeleton",children:(0,l.jsx)(a.K,{variant:"row",size:"small"})})},c=t(5536),d=t.n(c),f=t(7008),p=t.n(f),m=t(1496),b=t.n(m),y=t(9836),v=t.n(y),g=t(9904),h=t.n(g),j=t(4192),O=t.n(j),S=t(1336),x={};x.styleTagTransform=O(),x.setAttributes=v(),x.insert=b().bind(null,"head"),x.domAPI=p(),x.insertStyleElement=h();d()(S.c,x);S.c&&S.c.locals&&S.c.locals;function k(e){return k="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},k(e)}var C=["className","isInitialized","checked"];function w(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function P(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?w(Object(t),!0).forEach((function(r){_(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):w(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function _(e,r,t){var n;return n=function(e,r){if("object"!=k(e)||!e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var n=t.call(e,r||"default");if("object"!=k(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(e)}(r,"string"),(r="symbol"==k(n)?n:String(n))in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function E(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var I=function(e){var r=e.className,t=e.isInitialized,n=void 0===t||t,a=e.checked,c=void 0===a||a,d=E(e,C);return n?(0,l.jsx)("div",{className:"checkout-bill-to-shipping-address",children:(0,l.jsx)(s.y,P({"data-testid":"bill-to-shipping-checkbox",className:(0,i.i)(["checkout-bill-to-shipping-address__checkbox",r]),checked:c,name:"checkout-bill-to-shipping-address__checkbox",label:(0,l.jsx)(o.a,{id:"Checkout.BillToShippingAddress.title"})},d))}):(0,l.jsx)(u,{})},A=t(5668),M=t(9488),N=t(2288),B=t(40),R=t(2236),F=["className","children"];function D(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function T(e,r,t){var n;return n=function(e,r){if("object"!=U(e)||!e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var n=t.call(e,r||"default");if("object"!=U(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(e)}(r,"string"),(r="symbol"==U(n)?n:String(n))in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function z(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}function L(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var n,o,i,s,a=[],l=!0,u=!1;try{if(i=(t=t.call(e)).next,0===r){if(Object(t)!==t)return;l=!1}else for(;!(l=(n=i.call(t)).done)&&(a.push(n.value),a.length!==r);l=!0);}catch(e){u=!0,o=e}finally{try{if(!l&&null!=t.return&&(s=t.return(),Object(s)!==s))return}finally{if(u)throw o}}return a}}(e,r)||function(e,r){if(!e)return;if("string"==typeof e)return H(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return H(e,r)}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function H(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}function U(e){return U="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},U(e)}function V(e,r,t){return!r&&!t||!(!r||!t)&&e.every((function(e){var n=e.code;return function(e,r,t){var n=e[t],o=r[t];return void 0===n&&void 0===o||null===n&&null===o||("object"===U(n)&&"object"===U(o)?JSON.stringify(n)===JSON.stringify(o):n===o)}(r,t,n)}))}var Y=function(e){var r=e.className,t=(e.children,z(e,F)),o=A.s.value.data,i=(null==o?void 0:o.id)||"",s=M.Y.value.checked,a=function(e){var r,t=e.isBillToShipping,n=L((0,N.useState)(!1),2),o=n[0],i=n[1],s=(0,R.q)().fields,a=A.s.value.data,l=!!a,u=null==a?void 0:a.billing_address,c=null==a||null===(r=a.shipping_addresses)||void 0===r?void 0:r[0];return(0,N.useEffect)((function(){if(s){var e=localStorage.getItem(B.c);if(!o&&e)return i(!0),void(t.value={checked:"true"===e,setByUser:!1});if(!o&&l){i(!0);var r=V(s,u,c);t.value={checked:null!=a&&a.billing_address?r:t.value.checked,setByUser:!1}}}}),[u,null==a?void 0:a.billing_address,s,l,t,o,c]),{isInitialized:o}}({isBillToShipping:M.Y}),u=a.isInitialized;return(0,l.jsx)(I,function(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?D(Object(t),!0).forEach((function(r){T(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):D(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}({className:r,checked:s,isInitialized:u,onChange:function(e){var r,t=e.target.checked,o=A.s.value.data,s=Boolean(null==o||null===(r=o.shipping_addresses)||void 0===r?void 0:r[0]);if(M.Y.value={checked:t,setByUser:!0},localStorage.setItem(B.c,t.toString()),u&&t&&s){var a=new AbortController;return(0,n.W)({signal:a.signal,cartId:i,input:{same_as_shipping:!0}}).catch((function(e){console.error(e)})),function(){a.abort()}}},disabled:A.s.value.pending},t))}},40:(e,r,t)=>{t.d(r,{c:()=>n});var n="is_bill_to_shipping_address"},2872:(e,r,t)=>{t.d(r,{M:()=>p});var n=t(2532),o=t(5124),i=t(9734),s=t(304),a=t(6476),l=t(2236),u=t(5668),c=t(9488),d=t(2288),f=t(8340),p=function(){var e=(0,l.q)().fields,r=(0,d.useRef)(null),t=u.s.value.data,p=(null==t?void 0:t.id)||"",m=c.Y.value,b=m.checked,y=m.setByUser,v=!b,g=(0,d.useCallback)((function(e){return(0,n.W)({signal:e.signal,cartId:p,input:{address:b?void 0:(0,o.ek)(e.address),same_as_shipping:b}})}),[p,b]),h=(0,d.useCallback)((function(){var r,t=u.s.value.data;return!(0,s.i)(e,null==t||null===(r=t.shipping_addresses)||void 0===r?void 0:r[0],null==t?void 0:t.billing_address)}),[e]);return(0,d.useEffect)((function(){if(y){var e=new AbortController;return b||r.current.triggerSaveAddress(e.signal),function(){e.abort()}}}),[b,y]),(0,f.jsx)(i.i,{"data-testid":"billing-form",ref:r,name:a.M,addressType:"billing_address",headingId:"Checkout.BillingAddress.title",saveAddressHandler:g,shouldAutoFillForm:h,style:{display:v?"block":"none"},className:"checkout-billing-address-form"})}},6476:(e,r,t)=>{t.d(r,{M:()=>n});var n="billing_address"},3084:(e,r,t)=>{t.d(r,{Mh:()=>o.M,Mx:()=>n.M,cp:()=>n.M});var n=t(2872),o=t(6476)},1336:(e,r,t)=>{t.d(r,{c:()=>a});var n=t(6008),o=t.n(n),i=t(2076),s=t.n(i)()(o());s.push([e.id,".checkout-bill-to-shipping-address{\n  display:grid;\n}\n\n.checkout-bill-to-shipping-address label{\n  font:var(--type-body-2-default-font);\n  letter-spacing:var(--type-body-2-default-letter-spacing);\n  gap:0;\n}\n",""]);const a=s},1996:(r,t,n)=>{r.exports=(e=>{var r={};return n.d(r,e),r})({events:()=>e.events})},4720:(e,t,n)=>{e.exports=(e=>{var r={};return n.d(r,e),r})({FetchGraphQL:()=>r.FetchGraphQL})},2288:(e,r,n)=>{e.exports=(e=>{var r={};return n.d(r,e),r})({createContext:()=>t.createContext,forwardRef:()=>t.forwardRef,useCallback:()=>t.useCallback,useContext:()=>t.useContext,useEffect:()=>t.useEffect,useImperativeHandle:()=>t.useImperativeHandle,useMemo:()=>t.useMemo,useRef:()=>t.useRef,useState:()=>t.useState})},5456:(e,r,t)=>{e.exports=(e=>{var r={};return t.d(r,e),r})({useCallback:()=>n.useCallback,useContext:()=>n.useContext,useDebugValue:()=>n.useDebugValue,useEffect:()=>n.useEffect,useId:()=>n.useId,useImperativeHandle:()=>n.useImperativeHandle,useLayoutEffect:()=>n.useLayoutEffect,useMemo:()=>n.useMemo,useReducer:()=>n.useReducer,useRef:()=>n.useRef,useState:()=>n.useState})},9992:(e,r,t)=>{e.exports=(e=>{var r={};return t.d(r,e),r})({Fragment:()=>o.Fragment,jsx:()=>o.jsx,jsxs:()=>o.jsxs})},2576:(e,r,t)=>{e.exports=(e=>{var r={};return t.d(r,e),r})({Component:()=>i.Component,Fragment:()=>i.Fragment,cloneElement:()=>i.cloneElement,createContext:()=>i.createContext,createElement:()=>i.createElement,createRef:()=>i.createRef,h:()=>i.h,hydrate:()=>i.hydrate,isValidElement:()=>i.isValidElement,options:()=>i.options,render:()=>i.render,toChildArray:()=>i.toChildArray})}};import s from"../runtime.js";import*as a from"../456.js";s.C(a);import*as l from"../856.js";s.C(l);import*as u from"../644.js";s.C(u);import*as c from"../984.js";s.C(c);import*as d from"../872.js";s.C(d);import*as f from"../876.js";s.C(f);import*as p from"../664.js";s.C(p);import*as m from"../700.js";s.C(m);import*as b from"../808.js";s.C(b);import*as y from"./BillingForm.js";s.C(y);var v,g=(v=3084,s(s.s=v)),h=g.Mh,j=g.Mx,O=g.cp;export{h as BILLING_FORM_NAME,j as BillingForm,O as default};