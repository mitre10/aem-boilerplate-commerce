import*as e from"@dropins/elsie/event-bus.js";import*as s from"@dropins/elsie/fetch-graphql.js";import*as r from"@dropins/elsie/preact-compat.js";import*as t from"@dropins/elsie/preact-hooks.js";import*as a from"@dropins/elsie/preact-jsx-runtime.js";import*as o from"@dropins/elsie/preact.js";export const id=908;export const ids=[908];export const modules={6374:(e,s,r)=>{r.d(s,{U:()=>c});var t=r(845),a=r(1468),o=r(1466),n=r(9636),i=r(7238),l=r(1497),u=r(8393),d=r(7294),m=r(3042),p=r(4853),f=r(7188),c=function(){var e=(0,l.oR)().cartId,s=(0,d.l)().fields,r=(0,u.Mg)().isBillToShipping,c=(0,p.useRef)(null),v=!r.value,C=(0,p.useCallback)((function(s){return(0,t.w)({signal:s.signal,cartId:e,input:{address:r.value?void 0:(0,a.vY)(s.address),same_as_shipping:r.value}})}),[e,r.value]),g=(0,p.useCallback)((function(){var e,r=m.t.value.data;return!(0,n.I)(s,null==r||null===(e=r.shipping_addresses)||void 0===e?void 0:e[0],null==r?void 0:r.billing_address)}),[s]);return(0,p.useEffect)((function(){var e=new AbortController;return!1===r.value&&c.current.triggerSaveAddress(e.signal),function(){e.abort()}}),[r.value]),(0,f.jsx)(o.k,{ref:c,name:i.U,addressType:"billing_address",headingId:"Checkout.BillingAddress.title",saveAddressHandler:C,shouldAutoFillForm:g,style:{display:v?"block":"none"},"data-testid":"billing-form",className:"checkout-billing-address-form"})}},7238:(e,s,r)=>{r.d(s,{U:()=>t});var t="billing_address"},8994:(e,s,r)=>{r.d(s,{U1:()=>t.U,UG:()=>a.U,ZP:()=>t.U});var t=r(6374),a=r(7238)},6765:(s,r,t)=>{s.exports=(e=>{var s={};return t.d(s,e),s})({events:()=>e.events})},9699:(e,r,t)=>{e.exports=(e=>{var s={};return t.d(s,e),s})({FetchGraphQL:()=>s.FetchGraphQL})},4853:(e,s,t)=>{e.exports=(e=>{var s={};return t.d(s,e),s})({createContext:()=>r.createContext,forwardRef:()=>r.forwardRef,useCallback:()=>r.useCallback,useContext:()=>r.useContext,useEffect:()=>r.useEffect,useImperativeHandle:()=>r.useImperativeHandle,useMemo:()=>r.useMemo,useRef:()=>r.useRef,useState:()=>r.useState})},5437:(e,s,r)=>{e.exports=(e=>{var s={};return r.d(s,e),s})({useCallback:()=>t.useCallback,useContext:()=>t.useContext,useDebugValue:()=>t.useDebugValue,useEffect:()=>t.useEffect,useId:()=>t.useId,useImperativeHandle:()=>t.useImperativeHandle,useLayoutEffect:()=>t.useLayoutEffect,useMemo:()=>t.useMemo,useReducer:()=>t.useReducer,useRef:()=>t.useRef,useState:()=>t.useState})},4142:(e,s,r)=>{e.exports=(e=>{var s={};return r.d(s,e),s})({Fragment:()=>a.Fragment,jsx:()=>a.jsx,jsxs:()=>a.jsxs})},3474:(e,s,r)=>{e.exports=(e=>{var s={};return r.d(s,e),s})({Component:()=>o.Component,Fragment:()=>o.Fragment,cloneElement:()=>o.cloneElement,createContext:()=>o.createContext,createElement:()=>o.createElement,createRef:()=>o.createRef,h:()=>o.h,hydrate:()=>o.hydrate,isValidElement:()=>o.isValidElement,options:()=>o.options,render:()=>o.render,toChildArray:()=>o.toChildArray})}};import n from"../runtime.js";import*as i from"../757.js";n.C(i);import*as l from"../448.js";n.C(l);import*as u from"../79.js";n.C(u);import*as d from"../499.js";n.C(d);import*as m from"../822.js";n.C(m);import*as p from"../965.js";n.C(p);import*as f from"../483.js";n.C(f);import*as c from"../378.js";n.C(c);import*as v from"../603.js";n.C(v);import*as C from"../466.js";n.C(C);import*as g from"../636.js";n.C(g);import*as j from"./BillingForm.js";n.C(j);var x,h=(x=8994,n(n.s=x)),b=h.UG,E=h.U1,R=h.ZP;export{b as BILLING_FORM_NAME,E as BillingForm,R as default};