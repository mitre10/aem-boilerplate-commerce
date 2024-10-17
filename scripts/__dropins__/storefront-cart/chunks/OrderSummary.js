import{jsxs as l,jsx as t,Fragment as gr}from"@dropins/tools/preact-jsx-runtime.js";import*as yr from"@dropins/tools/preact-compat.js";import{useState as Y,useEffect as er,useCallback as Tr}from"@dropins/tools/preact-compat.js";import{classes as m,VComponent as p,Slot as br}from"@dropins/tools/lib.js";import{events as hr}from"@dropins/tools/event-bus.js";import{g as Sr}from"./persisted-data.js";import{s as xr}from"./resetCart.js";import{g as Cr}from"./getEstimatedTotals.js";import{b as vr}from"./acdl.js";import{Accordion as Pr,AccordionSection as Nr,ProgressSpinner as wr,Divider as fr,Price as u,Button as Ir}from"@dropins/tools/components.js";/* empty css             */import{S as kr}from"./ChevronDown.js";import{useText as _r}from"@dropins/tools/i18n.js";const Er=()=>{const[f,L]=Y(!1),[S,y]=Y();return{handleEstimateTotals:(x,r)=>{L(!0);const{shippingCountry:C,shippingState:d="",shippingStateId:v,shippingZip:o=""}=x,P={countryCode:C,postcode:o,region:{region:d,id:v},shipping_method:{carrier_code:(r==null?void 0:r.carrier_code)||"",method_code:(r==null?void 0:r.method_code)||""}};Cr(P).then(e=>{var k,E,a,N,w,_,g,h,B,D,n,W,A,O,F,z,G,V,Z,j;e&&y({estimatedTaxTotal:{amount:(k=e.totalTax)==null?void 0:k.value,currency:(E=e.totalTax)==null?void 0:E.currency},estimatedSubTotal:{excludingTax:{amount:(N=(a=e.subtotal)==null?void 0:a.excludingTax)==null?void 0:N.value,currency:(_=(w=e.subtotal)==null?void 0:w.excludingTax)==null?void 0:_.currency},includingTax:{amount:(h=(g=e.subtotal)==null?void 0:g.includingTax)==null?void 0:h.value,currency:(D=(B=e.subtotal)==null?void 0:B.includingTax)==null?void 0:D.currency},includingDiscountOnly:{amount:(W=(n=e.subtotal)==null?void 0:n.includingDiscountOnly)==null?void 0:W.value,currency:(O=(A=e.subtotal)==null?void 0:A.includingDiscountOnly)==null?void 0:O.currency}},estimatedGrandTotalPrice:{includingTax:{amount:(F=e.total)==null?void 0:F.includingTax.value,currency:(z=e.total)==null?void 0:z.includingTax.currency},excludingTax:{amount:(G=e.total)==null?void 0:G.excludingTax.value,currency:(V=e.total)==null?void 0:V.excludingTax.currency}},estimatedAppliedTaxes:{taxes:(Z=e.appliedTaxes)==null?void 0:Z.map(c=>{var T,b;return{label:c.label,amount:{value:(T=c.amount)==null?void 0:T.value,currency:(b=c.amount)==null?void 0:b.currency}}})},estimatedItems:{items:(j=e.items)==null?void 0:j.map(c=>{var T,b,U,Q,X,$,q,H,R,J;return{uid:c.uid,price:{amount:(T=c.price)==null?void 0:T.value,currency:(b=c.price)==null?void 0:b.currency},taxedPrice:{amount:(U=c.taxedPrice)==null?void 0:U.value,currency:(Q=c.taxedPrice)==null?void 0:Q.currency},rowTotal:{amount:(X=c.rowTotal)==null?void 0:X.value,currency:($=c.rowTotal)==null?void 0:$.currency},rowTotalIncludingTax:{amount:(q=c.rowTotalIncludingTax)==null?void 0:q.value,currency:(H=c.rowTotalIncludingTax)==null?void 0:H.currency},regularPrice:{amount:(R=c.regularPrice)==null?void 0:R.value,currency:(J=c.regularPrice)==null?void 0:J.currency}}})}})}).finally(()=>{L(!1)})},estimatedTotals:S,setEstimatedTotals:y,loading:f}},Br=f=>yr.createElement("svg",{width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...f},yr.createElement("path",{d:"M7.74512 14.132L12.0001 9.87701L16.2551 14.132",stroke:"#2B2B2B",strokeWidth:1.5,strokeLinecap:"square",strokeLinejoin:"round"})),Dr=({className:f,children:L,variant:S="primary",heading:y,loading:I=!0,subTotal:x,shipping:r,discounts:C,taxTotal:d,taxesApplied:v,total:o,primaryAction:P,...e})=>{const[k,E]=Y(!1),a=_r({checkout:"Cart.PriceSummary.checkout",discountedPrice:"Cart.CartItem.discountedPrice",download:"Cart.CartItem.download",heading:"Cart.Cart.heading",message:"Cart.CartItem.message",regularPrice:"Cart.CartItem.regularPrice",recipient:"Cart.CartItem.recipient",sender:"Cart.CartItem.sender",file:"Cart.CartItem.file",files:"Cart.CartItem.files",orderSummary:"Cart.PriceSummary.orderSummary",taxesBreakdownTitle:"Cart.PriceSummary.taxes.breakdown",taxTotal:"Cart.PriceSummary.taxes.total",taxEstimated:"Cart.PriceSummary.taxes.estimated",taxTotalOnly:"Cart.PriceSummary.taxes.totalOnly",showTaxBreakdown:"Cart.PriceSummary.taxes.showBreakdown",hideTaxBreakdown:"Cart.PriceSummary.taxes.hideBreakdown",taxToBeDetermined:"Cart.PriceSummary.taxToBeDetermined",subtotalLabel:"Cart.PriceSummary.subTotal.label",subtotalWithTaxes:"Cart.PriceSummary.subTotal.withTaxes",subtotalWithoutTaxes:"Cart.PriceSummary.subTotal.withoutTaxes",totalEstimated:"Cart.PriceSummary.total.estimated",totalLabel:"Cart.PriceSummary.total.label",totalWithoutTax:"Cart.PriceSummary.total.withoutTax",shippingLabel:"Cart.PriceSummary.shipping.label",zipPlaceholder:"Cart.PriceSummary.shipping.zipPlaceholder",editZipAction:"Cart.PriceSummary.shipping.editZipAction",shippingWithTaxes:"Cart.PriceSummary.shipping.withTaxes",shippingWithoutTaxes:"Cart.PriceSummary.shipping.withoutTaxes",shippingEstimated:"Cart.PriceSummary.shipping.estimated",shippingEstimatedByState:"Cart.PriceSummary.shipping.alternateField.state",shippingEstimatedByZip:"Cart.PriceSummary.shipping.alternateField.zip",destinationLinkAriaLabel:"Cart.PriceSummary.shipping.destinationLinkAriaLabel",applyButton:"Cart.PriceSummary.estimatedShippingForm.apply.label",countryField:"Cart.PriceSummary.estimatedShippingForm.country.placeholder",freeShipping:"Cart.PriceSummary.freeShipping",stateField:"Cart.PriceSummary.estimatedShippingForm.state.placeholder",zipField:"Cart.PriceSummary.estimatedShippingForm.zip.placeholder"}),N=x&&l("div",{className:m(["cart-order-summary__entry","cart-order-summary__subTotal"]),children:[t("span",{className:"cart-order-summary__label",children:a.subtotalLabel}),t(p,{node:x.price,className:"cart-order-summary__price"}),x.taxIncluded&&t("div",{"data-testid":"sub-total-tax-caption",className:"cart-order-summary__caption",children:t("span",{children:a.subtotalWithTaxes})}),x.taxExcluded?t("div",{"data-testid":"sub-total-tax-caption-excluded",className:"cart-order-summary__caption",children:l("span",{children:[x.priceExcludingTax," ",a.subtotalWithoutTaxes]})}):void 0]}),w=r&&t(p,{node:r,className:"cart-order-summary__shipping"}),_=C&&C.length>0&&t(gr,{children:C.map(n=>l("div",{className:m(["cart-order-summary__entry","cart-order-summary__discount"]),children:[t("span",{className:"cart-order-summary__label",children:n.label}),t(p,{node:n.price,className:"cart-order-summary__price"}),n.caption&&t(p,{node:n.caption,className:"cart-order-summary__caption"})]},n.label))}),g=v&&v.length>0?t(Pr,{"data-testid":"tax-breakdown",className:"cart-order-summary__taxes",iconOpen:kr,iconClose:Br,children:l(Nr,{title:a.taxesBreakdownTitle,secondaryText:!k&&d?t(p,{node:d.price,className:"cart-order-summary__price"}):void 0,renderContentWhenClosed:!1,onStateChange:E,children:[t("div",{className:"cart-order-summary__appliedTaxes",children:v.map(n=>l("div",{className:m(["cart-order-summary__entry","cart-order-summary__taxEntry"]),children:[t("span",{className:m(["cart-order-summary__label","cart-order-summary__label--muted"]),children:n.label}),t(p,{node:n.price,className:m(["cart-order-summary__price","cart-order-summary__price--muted"])})]},n.label))}),l("div",{className:m(["cart-order-summary__entry","cart-order-summary__taxTotal"]),children:[t("span",{className:"cart-order-summary__label",children:a.taxTotal}),d&&t(p,{node:d.price,className:"cart-order-summary__price"})]})]})}):d&&l("div",{"data-testid":"tax-total-only",className:m(["cart-order-summary__entry","cart-order-summary__taxTotal"]),children:[t("span",{className:"cart-order-summary__label",children:d.estimated?a.taxEstimated:a.taxTotalOnly}),t(p,{node:d.price,className:"cart-order-summary__price"})]}),h=o&&l("div",{"data-testid":"total-content",className:m(["cart-order-summary__entry","cart-order-summary__total",o.estimated&&"cart-order-summary__total--padded"]),children:[t("span",{className:m(["cart-order-summary__label","cart-order-summary__label--bold"]),children:o.estimated?a.totalEstimated:a.totalLabel}),t(p,{node:o.price,className:m(["cart-order-summary__price","cart-order-summary__price--bold"])})]}),B=o&&o.priceWithoutTax&&l("div",{"data-testid":"total-without-tax",className:m(["cart-order-summary__entry","cart-order-summary__totalWithoutTax"]),children:[t("span",{className:m(["cart-order-summary__label","cart-order-summary__label--muted"]),children:a.totalWithoutTax}),t(p,{node:o.priceWithoutTax,className:m(["cart-order-summary__price","cart-order-summary__price--muted"])})]}),D=P&&t("div",{className:m(["cart-order-summary__entry","cart-order-summary__primaryAction"]),children:P});return l("div",{...e,className:m(["cart-order-summary",["cart-order-summary--loading",I],[`cart-order-summary__${S}`,S],f]),children:[I&&t(wr,{className:"cart-order-summary__spinner"}),l("div",{className:"cart-order-summary__heading",children:[y&&t(p,{node:y,className:"cart-order-summary__heading-text"}),t(fr,{variant:"primary",className:"cart-order-summary__divider-primary"})]}),l("div",{className:"cart-order-summary__content",children:[N,w,_,g,h,B,D]})]})},Lr=({children:f,initialData:L=null,routeCheckout:S,slots:y,errors:I,...x})=>{var n,W,A,O,F,z,G,V,Z,j,c,T,b,U,Q,X,$,q,H,R,J,tr,ar,ir,cr,nr,sr,mr;const[r,C]=Y(L),[d,v]=Y(!1),o=r==null?void 0:r.isVirtual,{handleEstimateTotals:P,estimatedTotals:e,setEstimatedTotals:k,loading:E}=Er(),a=(n=xr.config)==null?void 0:n.shoppingCartDisplaySetting,N=(a==null?void 0:a.subtotal)==="INCLUDING_TAX",w=(a==null?void 0:a.subtotal)==="INCLUDING_EXCLUDING_TAX",_=a==null?void 0:a.zeroTax;er(()=>{const s=hr.on("cart/data",i=>{var K;C(i);const M=(K=i==null?void 0:i.addresses)==null?void 0:K.shipping,rr=i==null?void 0:i.isVirtual;(M||rr)&&k(null)},{eager:!0});return()=>{s==null||s.off()}},[]),er(()=>{v(I)},[I]),er(()=>{const s=hr.on("shipping/estimate",i=>{var K,or,ur,lr,dr,pr;const M={shippingCountry:(K=i==null?void 0:i.address)==null?void 0:K.countryCode,shippingState:(or=i==null?void 0:i.address)==null?void 0:or.region,shippingStateId:(ur=i==null?void 0:i.address)==null?void 0:ur.regionId,shippingZip:(lr=i==null?void 0:i.address)==null?void 0:lr.postCode},rr={carrier_code:((dr=i==null?void 0:i.shippingMethod)==null?void 0:dr.carrierCode)||"",method_code:((pr=i==null?void 0:i.shippingMethod)==null?void 0:pr.methodCode)||""};P(M,rr)});return()=>{s==null||s.off()}},[P]);const g=_r({checkout:"Cart.PriceSummary.checkout",orderSummary:"Cart.PriceSummary.orderSummary",taxToBeDetermined:"Cart.PriceSummary.taxToBeDetermined"}),h=(r==null?void 0:r.hasOutOfStockItems)||d,B=Tr(()=>{!h&&r&&vr(r,xr.locale)},[h,r]),D=!o&&(y!=null&&y.EstimateShipping)?t(br,{name:"EstimateShipping",slot:y.EstimateShipping},"estimateShippingId"):void 0;return!Object.keys(r??{}).length||(r==null?void 0:r.totalQuantity)===0?null:t(Dr,{...x,"data-testid":"cart-order-summary",heading:t("div",{children:g.orderSummary}),shipping:D,loading:E,subTotal:{taxIncluded:N&&!_,taxExcluded:w,zeroTaxSubtotal:_,priceExcludingTax:(W=e==null?void 0:e.estimatedSubTotal)!=null&&W.excludingTax?t(u,{"data-testid":"subtotal",...(A=e==null?void 0:e.estimatedSubTotal)==null?void 0:A.excludingTax}):t(u,{"data-testid":"subtotal",amount:(F=(O=r==null?void 0:r.subtotal)==null?void 0:O.excludingTax)==null?void 0:F.value,currency:(G=(z=r==null?void 0:r.subtotal)==null?void 0:z.excludingTax)==null?void 0:G.currency}),price:!_&&N||!_&&w?(V=e==null?void 0:e.estimatedSubTotal)!=null&&V.includingTax?t(u,{"data-testid":"subtotal",...(Z=e==null?void 0:e.estimatedSubTotal)==null?void 0:Z.includingTax}):t(u,{"data-testid":"subtotal",amount:(j=r==null?void 0:r.subtotal.includingTax)==null?void 0:j.value,currency:(c=r==null?void 0:r.subtotal.includingTax)==null?void 0:c.currency}):t(u,{"data-testid":"subtotal",amount:(b=(T=r==null?void 0:r.subtotal)==null?void 0:T.excludingTax)==null?void 0:b.value,currency:(Q=(U=r==null?void 0:r.subtotal)==null?void 0:U.excludingTax)==null?void 0:Q.currency})},discounts:(X=r==null?void 0:r.appliedDiscounts)==null?void 0:X.map(s=>({label:s.label,price:t(u,{"data-testid":"summary-discount-total",amount:-s.amount.value,currency:s.amount.currency,sale:!0})})),taxTotal:o?{price:t("span",{"data-testid":"tax-total",children:g.taxToBeDetermined})}:{price:e!=null&&e.estimatedTaxTotal?t(u,{"data-testid":"tax-total",...e==null?void 0:e.estimatedTaxTotal}):t(u,{"data-testid":"tax-total",amount:($=r==null?void 0:r.totalTax)==null?void 0:$.value,currency:(q=r==null?void 0:r.totalTax)==null?void 0:q.currency}),estimated:(!e||!!(e!=null&&e.estimatedTaxTotal))&&!((H=r==null?void 0:r.addresses)!=null&&H.shipping)},taxesApplied:o?void 0:a!=null&&a.fullSummary?(J=((R=e==null?void 0:e.estimatedAppliedTaxes)==null?void 0:R.taxes)||(r==null?void 0:r.appliedTaxes))==null?void 0:J.map(s=>({label:s.label,price:t(u,{"data-testid":"applied-taxes",amount:s.amount.value,currency:s.amount.currency})})):void 0,total:{price:e!=null&&e.estimatedGrandTotalPrice?t(u,{...(tr=e==null?void 0:e.estimatedGrandTotalPrice)==null?void 0:tr.includingTax}):t(u,{amount:(ar=r==null?void 0:r.total)==null?void 0:ar.includingTax.value,currency:(ir=r==null?void 0:r.total)==null?void 0:ir.includingTax.currency}),estimated:(!e||!!(e!=null&&e.estimatedTaxTotal))&&!((cr=r==null?void 0:r.addresses)!=null&&cr.shipping),priceWithoutTax:a!=null&&a.grandTotal?e!=null&&e.estimatedAppliedTaxes?t(u,{...(nr=e==null?void 0:e.estimatedGrandTotalPrice)==null?void 0:nr.excludingTax}):t(u,{amount:(sr=r==null?void 0:r.total)==null?void 0:sr.excludingTax.value,currency:(mr=r==null?void 0:r.total)==null?void 0:mr.excludingTax.currency}):void 0},primaryAction:S&&t(Ir,{"data-testid":"checkout-button",variant:"primary",disabled:h,"aria-disabled":h,href:h?void 0:S({cartId:r.id}),onClick:B,children:g.checkout})})};Lr.getInitialData=async function(){return Sr()};export{Lr as O};