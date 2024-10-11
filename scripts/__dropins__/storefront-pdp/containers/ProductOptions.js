import{jsx as k}from"@dropins/tools/preact-jsx-runtime.js";import{useState as h,useEffect as L,useCallback as j}from"@dropins/tools/preact-compat.js";import{Slot as R}from"@dropins/tools/lib.js";import{events as w}from"@dropins/tools/event-bus.js";import"@dropins/tools/components.js";/* empty css             */import{S as q}from"../chunks/Swatches.js";import"@dropins/tools/preact.js";import{c as z,j as A,h as G,p as H}from"../chunks/fetchPDPData.js";import{g as C,s as y}from"../chunks/getProductConfigurationValues.js";import{s as g}from"../chunks/isProductConfigurationValid.js";import{g as J}from"../chunks/getFetchedProductData.js";import"@dropins/tools/i18n.js";import"@dropins/tools/fetch-graphql.js";const K=({initialData:f={data:null,optionsUIDs:[]},hideSelectedValue:I=!1,slots:l,onValues:p,onErrors:u,children:N,...v})=>{const[t,O]=h(f.data),[n,b]=h(f.optionsUIDs),[B,M]=h();L(()=>{const i=w.on("pdp/data",O),r=w.on("pdp/values",({optionsUIDs:a})=>{a&&b(a)});return g(()=>t!=null&&t.options?(n==null?void 0:n.length)===t.options.length:!0),()=>{i==null||i.off(),r==null||r.off()}},[]);const T=j(async i=>{var d,P,D,S,U;if(!(t!=null&&t.sku))return;const{persistURLParams:r,anchors:a,acdl:F}=z.getConfig();let s=Object.keys(i).map(o=>i[o].value).filter(o=>o!==void 0);if(r&&((d=t==null?void 0:t.options)!=null&&d.some(c=>(c==null?void 0:c.typename)==="ProductViewOptionValueProduct")||A({optionsUIDs:s.join(",")})),((D=(P=C())==null?void 0:P.optionsUIDs)==null?void 0:D.join("|"))!==(s==null?void 0:s.join("|"))){y(e=>({...e,optionsUIDs:s})),p==null||p(s);const o=await G(t.sku);let c=(s==null?void 0:s.length)===((S=o==null?void 0:o.options)==null?void 0:S.length);if(a!=null&&a.length){const e=(o==null?void 0:o.optionUIDs)??[];s.every(m=>e.includes(m))||(M(o==null?void 0:o.options),y(m=>({...m,optionsUIDs:e})),c=(e==null?void 0:e.length)===((U=o==null?void 0:o.options)==null?void 0:U.length))}g(()=>c),F&&o&&(o==null?void 0:o.variantSku)!==t.sku&&H(o)}},[t==null?void 0:t.options,t==null?void 0:t.sku,p]),V=j(i=>{Object.keys(i).length!==0&&(g(()=>!1),u==null||u(i))},[u]);return!t||!t.options?null:k(R,{name:"Swatches",slot:l==null?void 0:l.Swatches,context:{data:t,optionsUIDs:n},children:k(q,{...v,options:t.options,selectedUIDs:n,defaultOptions:n,selectionsToUpdate:B,hideSelectedValue:I,onValues:T,onErrors:V})})};K.getInitialData=async function(){var f;return{data:await J(),optionsUIDs:((f=C())==null?void 0:f.optionsUIDs)??[]}};export{K as ProductOptions,K as default};