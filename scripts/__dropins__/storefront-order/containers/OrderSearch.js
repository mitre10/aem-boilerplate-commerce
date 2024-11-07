import{jsxs as V,jsx as s}from"@dropins/tools/preact-jsx-runtime.js";import{classes as L}from"@dropins/tools/lib.js";import{Card as M,InLineAlert as k,Icon as C,Button as q}from"@dropins/tools/components.js";import{F as D}from"../chunks/OrderCancel.js";import{useState as v,useCallback as w,useEffect as F,useMemo as U}from"@dropins/tools/preact-hooks.js";import{events as _}from"@dropins/tools/event-bus.js";import*as N from"@dropins/tools/preact-compat.js";import"@dropins/tools/preact.js";import{Text as g,useText as H}from"@dropins/tools/i18n.js";import{F as T}from"../chunks/form.types.js";import{g as B}from"../chunks/getFormValues.js";import{r as f}from"../chunks/redirectTo.js";import{g as E,a as z}from"../chunks/getCustomer.js";import"../chunks/network-error.js";import"../chunks/fetch-graphql.js";import"@dropins/tools/fetch-graphql.js";import"../chunks/getGuestOrder.graphql.js";import"../chunks/transform-order-details.js";import"../chunks/convertCase.js";const P=t=>N.createElement("svg",{width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...t},N.createElement("path",{vectorEffect:"non-scaling-stroke",fillRule:"evenodd",clipRule:"evenodd",d:"M1 20.8953L12.1922 1.5L23.395 20.8953H1ZM13.0278 13.9638L13.25 10.0377V9H11.25V10.0377L11.4722 13.9638H13.0278ZM11.2994 16V17.7509H13.2253V16H11.2994Z",fill:"currentColor"})),X=({onSubmit:t,loading:r,inLineAlert:a,fieldsConfig:o})=>V(M,{variant:"secondary",className:"order-order-search-form",children:[s("h2",{className:"order-order-search-form__title",children:s(g,{id:"Order.OrderSearchForm.title"})}),s("p",{children:s(g,{id:"Order.OrderSearchForm.description"})}),a.text?s(k,{"data-testid":"orderAlert",className:"order-order-search-form__alert",type:a.type,variant:"secondary",heading:a.text,icon:s(C,{source:P})}):null,s(D,{className:"order-order-search-form__wrapper",name:"orderSearchForm",loading:r,fieldsConfig:o,onSubmit:t,children:s("div",{className:"order-order-search-form__button-container",children:s(q,{className:"order-order-search-form__button",size:"medium",variant:"primary",type:"submit",disabled:r,children:s(g,{id:"Order.OrderSearchForm.button"})},"logIn")})})]}),x=t=>{try{return new URL(window.location.href).searchParams.get(t)}catch{return null}},Z=({onError:t,isAuth:r,renderSignIn:a,routeCustomerOrder:o,routeGuestOrder:c})=>{const[y,u]=v({text:"",type:"success"}),[b,p]=v(!1),m=H({invalidSearch:"Order.Errors.invalidSearch",email:"Order.OrderSearchForm.email",postcode:"Order.OrderSearchForm.postcode",number:"Order.OrderSearchForm.orderNumber"}),R=w(async e=>{const i=x("orderRef"),l=i&&i.length>20;if(!e&&!i||!(e!=null&&e.number)&&!(e!=null&&e.token)&&!i)return null;if(r){const d=await E();(d==null?void 0:d.email)===e.email?f(o,{orderRef:e==null?void 0:e.number}):l||f(c,{orderRef:e.token})}else l||f(c,{orderRef:e==null?void 0:e.token})},[r,o,c]);F(()=>{const e=_.on("order/data",i=>{R(i)},{eager:!0});return()=>{e==null||e.off()}},[R]),F(()=>{const e=x("orderRef"),i=e&&e.length>20?e:null;e&&(i?f(c,{orderRef:e}):r?f(o,{orderRef:e}):a==null||a({render:!0,formValues:{number:e}}))},[r,o,c,a]);const O=U(()=>[{entityType:"CUSTOMER_ADDRESS",is_unique:!1,label:m.email,options:[],defaultValue:"",fieldType:T.TEXT,className:"",required:!0,orderNumber:1,name:"email",id:"email",code:"email"},{entityType:"CUSTOMER_ADDRESS",is_unique:!1,label:m.postcode,options:[],defaultValue:"",fieldType:T.TEXT,className:"",required:!0,orderNumber:2,name:"postcode",id:"postcode",code:"postcode"},{entityType:"CUSTOMER_ADDRESS",is_unique:!1,label:m.number,options:[],defaultValue:"",fieldType:T.TEXT,className:"",required:!0,orderNumber:3,name:"number",id:"number",code:"number"}],[m]);return{onSubmit:w(async(e,i)=>{if(!i)return null;p(!0);const l=B(e.target);await z(l).then(n=>{n||u({text:m.invalidSearch,type:"warning"}),_.emit("order/data",n)}).catch(async n=>{var S;let d=!0;t==null||t({error:n.message});const h=r?await E():{email:""};(h==null?void 0:h.email)===(l==null?void 0:l.email)?f(o,{orderRef:l.number}):d=a==null?void 0:a({render:h===null||((S=n==null?void 0:n.message)==null?void 0:S.includes("Please login to view the order.")),formValues:l}),d&&u({text:n.message,type:"warning"})}).finally(()=>{p(!1)})},[r,t,a,o,m.invalidSearch]),inLineAlert:y,loading:b,normalizeFieldsConfig:O}},ce=({className:t,isAuth:r,renderSignIn:a,routeCustomerOrder:o,routeGuestOrder:c,onError:y})=>{const{onSubmit:u,loading:b,inLineAlert:p,normalizeFieldsConfig:m}=Z({onError:y,isAuth:r,renderSignIn:a,routeCustomerOrder:o,routeGuestOrder:c});return s("div",{className:L(["order-order-search",t]),children:s(X,{onSubmit:u,loading:b,inLineAlert:p,fieldsConfig:m})})};export{ce as OrderSearch,ce as default};
