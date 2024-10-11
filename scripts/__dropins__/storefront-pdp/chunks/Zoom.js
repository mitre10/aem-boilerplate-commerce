import{jsxs as z,jsx as C,Fragment as _e}from"@dropins/tools/preact-jsx-runtime.js";import*as V from"@dropins/tools/preact-compat.js";import{useState as E,Children as B,useRef as he,useMemo as be,useEffect as S,useCallback as U}from"@dropins/tools/preact-compat.js";import{debounce as ve,classes as M}from"@dropins/tools/lib.js";import{Button as de,Icon as Ne}from"@dropins/tools/components.js";/* empty css     */import{useText as T}from"@dropins/tools/i18n.js";import{cloneElement as Ee}from"@dropins/tools/preact.js";const We=i=>V.createElement("svg",{width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...i},V.createElement("path",{d:"M7.74512 9.87701L12.0001 14.132L16.2551 9.87701",stroke:"currentColor",strokeWidth:1.5,strokeLinecap:"square",strokeLinejoin:"round"})),Le=i=>V.createElement("svg",{width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...i},V.createElement("path",{vectorEffect:"non-scaling-stroke",d:"M18.3599 5.64001L5.62988 18.37",stroke:"currentColor"}),V.createElement("path",{vectorEffect:"non-scaling-stroke",d:"M18.3599 18.37L5.62988 5.64001",stroke:"currentColor"})),ke=24,ye=16,R=2,De="32";var Ce=(i=>(i[i.small=16]="small",i[i.medium=24]="medium",i[i.large=64]="large",i))(Ce||{});const He=({show:i=1,scrollbar:w=!1,peak:y=!1,arrows:p=!1,controls:n="dots",arrowsOnMainImage:N=!1,loop:s=!1,gap:m=null,direction:W="horizontal",width:H="100%",height:le="100%",defaultIndex:k=0,className:ne,children:x,thumbnails:X=null,isZoomed:I,...J})=>{const Q=T("PDP.Carousel.label").label,G=T("PDP.Carousel.Slide.label").label,ee=T("PDP.Carousel.Previous.label").label,te=T("PDP.Carousel.Next.label").label,ae=T("PDP.Carousel.Controls.label").label,re=T("PDP.Carousel.Controls.Button.label").label,[h,ce]=E(()=>we(i)),r=Math.ceil(B.count(x)/h),d=y?ke:0,g=m?Ce[m]:0,P=B.count(x)%h,[a,Y]=E(s?L()?k-1:k+1:k),D=he([]),[O,ie]=E(0),[Z,Me]=E(0),fe=be(()=>B.toArray(X),[X]),_=be(()=>{const e=B.toArray(x).reduce((t,l,o)=>o%h===0?[...t,[l]]:[...t.slice(0,-1),[...t[t.length-1],l]],[]);return!s||e.length===1?e:s&&B.count(x)%h===0?[e[r-1]].concat(e).concat([e[0],e[1]]):[B.toArray(x).slice(-h)].concat(e).concat([e[0],e[1]])},[x,h,r,s]),j=he(null),pe=he(null),b=n==="thumbnailsRow"||n==="thumbnailsColumn";S(()=>{const e=j.current;if(!e)return;const t=ve(()=>{ie(e.offsetWidth??0),Me(e.offsetHeight??0);const o=window.innerWidth,u=we(i,o);u!==h&&ce(u)},50),l=new ResizeObserver(t);return l.observe(e),()=>{l.unobserve(e)}},[h,i]);const F=U(e=>{const t=s?e-1:e,l=D==null?void 0:D.current[0],o=(l==null?void 0:l.offsetWidth)+ye,u=(l==null?void 0:l.offsetHeight)+ye,c=pe.current,A=n==="thumbnailsRow",se=n==="thumbnailsColumn",$=A?c==null?void 0:c.offsetWidth:c==null?void 0:c.offsetHeight,f=A?o:u;(A||se)&&$&&(f*(t+1)>$&&(c.style.scrollBehavior="smooth",A?c.scrollLeft=L()?c.scrollWidth-c.clientWidth-(t+R)*f:(t+R)*f:c.scrollTop=(t+R)*f),(L()&&(A?c.scrollLeft:c.scrollTop)<=-f*t||!L()&&(A?c.scrollLeft:c.scrollTop)>f*t)&&(c.style.scrollBehavior="smooth",A?c.scrollLeft=L()?-(t-R)*f:(t-R)*f:c.scrollTop=(t-R)*f))},[n,s]);S(()=>{F(a)},[a,F]);const v=U((e,t,l)=>{b&&F(e);const o=j.current,u=d?o.offsetWidth-d:o.offsetWidth-d+g;if(!Array.from(o.querySelectorAll("[data-index]")).filter($=>{const f=Number($.getAttribute("data-index"));return!isNaN(f)&&f>-1})[e])return;if(l){const $=e===0?r:0,f=u*(r+(P||h)/h);if(L()){if(o.scrollLeft<=0&&o.scrollLeft>-(u-5)){v(1,!0);return}if(o.scrollLeft<u-f&&o.scrollLeft>=-f){v(r,!0);return}o.style.scrollBehavior="auto",o.scrollLeft=$===0?0:-f,v($===0?1:r,!0)}else{if(o.scrollLeft>=0&&o.scrollLeft<u-5){v(1,!0);return}if(o.scrollLeft>f-u&&o.scrollLeft<=f){v(r,!0);return}o.style.scrollBehavior="auto",o.scrollLeft=$===0?0:f,v($===0?1:r,!0);return}}const se=(o.offsetWidth-g)/h*_[e].length-d;o.style.scrollBehavior=t?"smooth":"auto",o.scrollLeft=L()?-(_[e].length===h?u*e:u*(e-1)-se):_[e].length===h?u*e:u*(e-1)+se},[g,r,d,h,P,_,F,n]),K=U(()=>{if(s){const t=a-1;v(t,!0,L()?a===r-1:a===1);return}const e=a<=0?0:a-1;v(e,!0)},[a,v,s]),q=U(()=>{const e=_.length-1;if(s){const l=a+1;v(l,!0,L()?a===0:a===r);return}const t=a>=e?e:a+1;v(t,!0)},[_.length,s,a,v,r]);S(()=>{const e=t=>{t.key==="ArrowLeft"&&(t.preventDefault(),L()?q():K()),t.key==="ArrowRight"&&(t.preventDefault(),L()?K():q())};return window.addEventListener("keydown",e),()=>{window.removeEventListener("keydown",e)}},[q,K]),S(()=>{v(s?k+1:k,!1)},[k,v,s]);const ue=ve(()=>{const e=j.current,t=d?e.offsetWidth-d:e.offsetWidth-d+g,l=Math.abs(e.scrollLeft)/t,o=Math.abs(Math.round(l)-l<1?Math.round(l):Math.ceil(l));if(b&&F(o),s){const u=t*(r+(P||h)/h),c=L()?-e.scrollLeft:e.scrollLeft;if(Math.ceil(Math.abs(c))>=Math.ceil(u)-5){e.style.scrollBehavior="auto",e.scrollLeft=L()?-e.offsetWidth+(Math.ceil(c)-Math.ceil(u)-d):e.offsetWidth+(Math.ceil(c)-Math.ceil(u)-d);return}if(Math.abs(c)===0){e.style.scrollBehavior="auto",e.scrollLeft=L()?-(u-e.offsetWidth+d):u-e.offsetWidth+d;return}}a!==o&&Y(o)},100);S(()=>{const e=j.current;return e==null||e.addEventListener("scroll",ue),()=>{e==null||e.removeEventListener("scroll",ue)}},[ue]);const oe=(e,t,l)=>C(de,{className:M([["pdp-carousel__button",!e],[`pdp-carousel__button--${t}`,!e],[`pdp-carousel__button--${n}`,e]]),style:{"--height":`${Z}px`},variant:"tertiary","aria-label":t==="next"?te:ee,onClick:l,disabled:s?!1:t==="next"?a>=_.length-1:a<1,children:C(Ne,{className:M([["pdp-carousel__button__icon",!e],[`pdp-carousel__button__icon--${t}`,!e],[`pdp-carousel__button__icon--${n}--${t}`,e]]),size:De,source:We})}),me=p&&_.length!=1&&oe(b,"prev",K),ge=p&&_.length!=1&&oe(b,"next",q),Pe=p&&_.length!=1&&oe(!1,"prev",K),xe=p&&_.length!=1&&oe(!1,"next",q);return z("div",{role:"region","aria-roledescription":Q,className:M(["pdp-carousel",["pdp-carousel--main-image-controls",N],["pdp-carousel--arrows",p&&!b],[`pdp-carousel--${n}`,b],ne]),style:{"--flex-carousel":n==="thumbnailsColumn"?"row-reverse":"column","--gap":b?"0":"var(--spacing-small)","--width":H},...J,children:[C("div",{ref:j,className:M(["pdp-carousel__wrapper",`pdp-carousel__wrapper--${W}`,["pdp-carousel__wrapper--scrollbar",w],["pdp-carousel__wrapper--peak",y]]),style:{"--total-width":n==="thumbnailsColumn"?"81.6%":"100%","--height":n==="thumbnailsColumn"?"auto":le,"--gap":m?`var(--spacing-${m})`:"0px","--per-page":h},tabIndex:0,children:_.map((e,t)=>{const l=e.length<h;return C("div",{role:"group","aria-roledescription":G,"data-index":t,className:M(["pdp-carousel__slide",`pdp-carousel__slide--${W}`,["pdp-carousel__slide--active",a===t],["pdp-carousel__slide--orphan",l]]),style:{"--length":e.length},children:e},t)})}),!b&&z(_e,{children:[me,ge]}),b&&N&&z(_e,{children:[Pe,xe]}),n&&_.length!=1&&z("div",{className:M([[`pdp-carousel__controls__container--${n}`,b],["pdp-carousel__controls__container--no-arrows",!p||N]]),style:{"--width":n==="thumbnailsRow"?`${O}px`:H,"--height":`${Z}px`,"--nr-thumbnails":fe.length},children:[(b||I)&&!N&&me,C("div",{ref:pe,className:M([[`pdp-carousel__controls__wrapper--${n}`,b],["pdp-carousel__controls__wrapper",b]]),children:C("div",{role:"group","aria-label":ae,className:M(["pdp-carousel__controls",[`pdp-carousel__controls--${n}`,b]]),children:(s?_.slice(0,r):_).map((e,t)=>{const l=s?r:_.length,o=s?a-1===t:a===t;return b?z("label",{className:M(["pdp-carousel__thumbnail__container"]),ref:u=>{u&&(D.current[t]=u)},children:[C("input",{type:"radio",name:"carousel-thumbnails","aria-label":re.replace("{key}",String(t+1)).replace("{total}",String(l)),checked:o&&O!==0,onChange:()=>{v(s?t+1:t,!0)},...J,className:M(["pdp-carousel__thumbnail",["pdp-carousel__thumbnail--selected",o&&O!==0]])}),C("span",{className:M(["pdp-carousel__thumbnail__span"]),children:fe[t]})]},t):C("button",{"aria-label":re.replace("{key}",String(t+1)).replace("{total}",String(l)),onClick:()=>{v(s?t+1:t,!0)},className:M(["pdp-carousel__controls__button",["pdp-carousel__controls__button--active",o]])},t)})})}),(b||I)&&!N&&ge]})]})};function we(i,w=0){if(typeof i=="number")return i;const{small:y,medium:p,large:n}=i,s=[{breakpoint:1024,value:n},{breakpoint:786,value:p},{breakpoint:0,value:y}].find(({breakpoint:m})=>w>m);return s?s.value:y}function L(){return document.documentElement.dir==="rtl"}const Xe=({centered:i,onClose:w,className:y,children:p,...n})=>{const N=T("PDP.Overlay.Close.label").label,s=U(()=>{w==null||w()},[w]);return S(()=>{const m=W=>{W.key==="Escape"&&s()};return document.addEventListener("keydown",m),()=>{document.removeEventListener("keydown",m)}},[s]),S(()=>{const m=document.scrollingElement,W=m.style.overflow;return m.style.overflow="hidden",()=>{m.style.overflow=W}},[]),z("div",{...n,className:M(["pdp-overlay",["pdp-overlay--centered",i],y]),children:[C("div",{className:"pdp-overlay__content",children:p}),C(de,{"aria-label":N,variant:"tertiary",className:"pdp-overlay__close-button",onClick:s,icon:C(Le,{})})]})},Ye=({children:i,scale:w=2,closeButton:y=!0})=>{const[p,n]=E(!1),[N,s]=E("pdp-zoom"),[m,W]=E(!1),[H,le]=E({x:0,y:0}),[k,ne]=E({x:0,y:0}),[x,X]=E({x:0,y:0}),I=r=>{!p||r.type!=="touchstart"||(le({x:r.touches[0].clientX,y:r.touches[0].clientY}),ne({x:x.x,y:x.y}),W(!0))},J=r=>{var Z;if(!m||r.type!=="touchmove")return;const d=(Z=r.currentTarget)==null?void 0:Z.getBoundingClientRect(),g=(100-100/w)/2,P=r.touches[0].clientX-H.x,a=r.touches[0].clientY-H.y,Y=P*100/(d.width*w),D=a*100/(d.height*w),O=k.x+Y,ie=k.y+D;X({x:Math.max(-g,Math.min(O,g))||0,y:Math.max(-g,Math.min(ie,g))||0}),r.preventDefault()},Q=r=>{var D;const d=(D=r.currentTarget)==null?void 0:D.getBoundingClientRect(),g=(100-100/w)/2;let P;if("touches"in r)P=r.touches[0];else if(r instanceof MouseEvent)P=r;else return;const a=g-(P.clientX-d.left)/d.width*100,Y=g-(P.clientY-d.top)/d.height*100;X({x:Math.max(-g,Math.min(a,g))||0,y:Math.max(-g,Math.min(Y,g))||0})},G=r=>{if(!m){if(p){if(y&&"touches"in r){I(r);return}y||n(!1)}else n(!0),Q(r);r.preventDefault()}},ee=r=>{if(y&&"touches"in r){J(r);return}p&&Q(r)},te=()=>{if(y){W(!1);return}n(!1)},ae=r=>{n(!1),r.stopPropagation()},re=p?`scale(${w}) translateX(${x.x}%) translateY(${x.y}%)`:"none",h=T("PDP.Zoom.Close.label").label,ce=Ee(B.only(i),{draggable:!1,style:{"--transform":re}});return S(()=>{s(p?`pdp-zoom ${y?"pdp-zoom--no-effects":"pdp-zoom--zoomed"}`:"pdp-zoom")},[p,y]),z("figure",{className:N,onClick:G,onMouseMove:ee,onMouseLeave:te,onTouchStart:G,onTouchMove:ee,onTouchEnd:te,children:[ce,y&&p&&C(de,{"aria-label":h,variant:"tertiary",className:"pdp-zoom__close-button",icon:C(Le,{}),onClick:ae})]})};export{He as C,Xe as O,Ye as Z};