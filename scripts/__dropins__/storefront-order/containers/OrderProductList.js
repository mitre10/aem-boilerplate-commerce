import{jsx as i,jsxs as T}from"@dropins/tools/preact-jsx-runtime.js";import{Card as S,Header as N}from"@dropins/tools/components.js";import{C as b}from"../chunks/OrderCancel.js";import{classes as k}from"@dropins/tools/lib.js";import{useState as C,useEffect as x,useMemo as v}from"@dropins/tools/preact-hooks.js";import{events as G}from"@dropins/tools/event-bus.js";import{s as j}from"../chunks/setTaxStatus.js";import{g as q}from"../chunks/getStoreConfig.js";import{Fragment as w}from"@dropins/tools/preact.js";import"@dropins/tools/preact-compat.js";import{e as y}from"../chunks/returnOrdersHelper.js";import{O as E}from"../chunks/OrderLoaders.js";import{useText as F}from"@dropins/tools/i18n.js";import"../chunks/fetch-graphql.js";import"@dropins/tools/fetch-graphql.js";import"../chunks/form.types.js";const _=({orderData:l})=>{const[a,t]=C(!0),[u,c]=C(l),[m,d]=C({taxIncluded:!1,taxExcluded:!1});return x(()=>{q().then(e=>{if(e){const n=j(e==null?void 0:e.shoppingCartDisplayPrice);d(n)}}).finally(()=>{t(!1)})},[]),x(()=>{const e=G.on("order/data",n=>{c(n)},{eager:!0});return()=>{e==null||e.off()}},[]),{loading:a,taxConfig:m,order:u}},$=({loading:l,taxConfig:a,order:t=null,withHeader:u=!0,showConfigurableOptions:c,routeProductDetails:m})=>{const d=!!(t!=null&&t.returnNumber),e=t==null?void 0:t.returnNumber,n=F({cancelled:"Order.OrderProductListContent.cancelledTitle",allOrders:"Order.OrderProductListContent.allOrdersTitle",returned:"Order.OrderProductListContent.returnedTitle",refunded:"Order.OrderProductListContent.refundedTitle",sender:"Order.OrderProductListContent.GiftCard.sender",recipient:"Order.OrderProductListContent.GiftCard.recipient",message:"Order.OrderProductListContent.GiftCard.message",outOfStock:"Order.OrderProductListContent.stockStatus.outOfStock",downloadableCount:"Order.OrderProductListContent.downloadableCount"}),g=v(()=>{var p,f;if(!t)return[];if(!d){const r=((p=y(t))==null?void 0:p.modifyOrder)??[],O=((f=y(t))==null?void 0:f.returnedList)??[],h=r==null?void 0:r.filter(o=>o.quantityCanceled),I=r==null?void 0:r.filter(o=>!o.quantityCanceled);return[{type:"returned",list:O,title:n.returned},{type:"cancelled",list:h,title:n.cancelled},{type:"allItems",list:I,title:n.allOrders}].filter(o=>{var P;return((P=o==null?void 0:o.list)==null?void 0:P.length)>0})}const s=t.returns.find(r=>r.returnNumber===e);return[{type:"returned",list:(s==null?void 0:s.items)??[],title:n.returned}]},[t,d,n,e]);return t?g.every(s=>s.list.length===0)?null:i(S,{variant:"secondary",className:"order-order-product-list-content",children:g.map((s,L)=>{var f;const p=s.list.reduce((r,{totalQuantity:O})=>O+r,0);return T(w,{children:[u?i(N,{title:`${s.title} (${p})`}):null,i("ul",{className:"order-order-product-list-content__items",children:(f=s.list)==null?void 0:f.map(r=>i("li",{"data-testid":"order-product-list-content-item",children:i(b,{loading:l,product:r,itemType:s.type,taxConfig:a,translations:n,showConfigurableOptions:c,routeProductDetails:m})},r.id))})]},L)})}):i(E,{})},tt=({className:l,orderData:a,withHeader:t,showConfigurableOptions:u,routeProductDetails:c})=>{const{loading:m,taxConfig:d,order:e}=_({orderData:a});return i("div",{className:k(["order-order-product-list",l]),children:i($,{loading:m,taxConfig:d,order:e,withHeader:t,showConfigurableOptions:u,routeProductDetails:c})})};export{tt as OrderProductList,tt as default};
