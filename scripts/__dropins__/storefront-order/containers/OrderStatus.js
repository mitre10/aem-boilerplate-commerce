import{jsx as c,jsxs as N,Fragment as S}from"@dropins/tools/preact-jsx-runtime.js";import{Card as U,Header as F,Button as E,InLineAlert as P,Modal as K}from"@dropins/tools/components.js";import"../chunks/OrderCancel.js";import{f as k}from"../chunks/returnOrdersHelper.js";import{classes as y,Slot as G}from"@dropins/tools/lib.js";import{f as b}from"../chunks/formatDateToLocale.js";import{useState as O,useEffect as I,useCallback as V}from"@dropins/tools/preact-hooks.js";import{events as v}from"@dropins/tools/event-bus.js";import{useMemo as q,useState as H}from"@dropins/tools/preact-compat.js";import{r as x}from"../chunks/redirectTo.js";import"@dropins/tools/preact.js";import{O as W}from"../chunks/OrderCancelForm.js";import{useText as C,Text as L}from"@dropins/tools/i18n.js";import{r as j}from"../chunks/reorderItems.js";import{C as J}from"../chunks/OrderLoaders.js";import{G as z}from"../chunks/getGuestOrder.graphql.js";import{f as B,h as Q}from"../chunks/fetch-graphql.js";import{b as X}from"../chunks/transform-order-details.js";import{g as Y}from"../chunks/getStoreConfig.js";import"../chunks/form.types.js";import"../chunks/requestGuestOrderCancel.js";import"../chunks/network-error.js";import"@dropins/tools/fetch-graphql.js";import"../chunks/convertCase.js";var _=(r=>(r.CANCEL="CANCEL",r.RETURN="RETURN",r.REORDER="REORDER",r))(_||{});const w={pending:"orderPending",shiping:"orderShipped",complete:"orderComplete",processing:"orderProcessing","on hold":"orderOnHold",canceled:"orderCanceled","suspected fraud":"orderSuspectedFraud","payment Review":"orderPaymentReview","order received":"orderReceived","guest order cancellation requested":"guestOrderCancellationRequested"},Z=({slots:r,title:t,status:n,orderData:e,routeCreateReturn:i,onError:s,routeOnSuccess:d})=>{var M;const l=!!(e!=null&&e.returnNumber),a=String(n).toLocaleLowerCase(),o=(M=e==null?void 0:e.returns)==null?void 0:M[0],m=(o==null?void 0:o.returnStatus)??"",p=(o==null?void 0:o.createdReturnAt)??"",g=C(`Order.OrderStatusContent.${w[a]}.title`),h=C(`Order.OrderStatusContent.${w[a]}.message`),R=C(`Order.OrderStatusContent.${w[a]}.messageWithoutDate`),u=C({title:`Order.OrderStatusContent.resturnStatus.${k(m)}`,returnMessage:"Order.OrderStatusContent.returnMessage"});if(!n)return c("div",{});const f=e!=null&&e.orderStatusChangeDate?h==null?void 0:h.message.replace("{DATE}",e==null?void 0:e.orderStatusChangeDate):R.messageWithoutDate,A=(u==null?void 0:u.returnMessage.replace("{ORDER_CREATE_DATE}",b(e==null?void 0:e.orderDate)).replace("{RETURN_CREATE_DATE}",b(p)))??"",T=l?t??u.title:t??g.title;return N(U,{className:"order-order-status-content",variant:"secondary",children:[c(F,{title:T}),N("div",{className:"order-order-status-content__wrapper",children:[c("div",{className:y(["order-order-status-content__wrapper-description",["order-order-status-content__wrapper-description--actions-slot",!!(r!=null&&r.OrderActions)]]),children:c("p",{children:l?A:f})}),c(ee,{orderData:e,slots:r,routeCreateReturn:i,routeOnSuccess:d,onError:s})]})]})},D=({orderData:r})=>{const[t,n]=O(r),[e,i]=O(r==null?void 0:r.status);return I(()=>{const s=v.on("order/data",d=>{n(d),i(d.status)},{eager:!0});return()=>{s==null||s.off()}},[]),{orderStatus:e,order:t}},ee=({className:r,orderData:t,slots:n,routeCreateReturn:e,routeOnSuccess:i,onError:s})=>{const d=C({cancel:"Order.OrderStatusContent.actions.cancel",createReturn:"Order.OrderStatusContent.actions.createReturn",createAnotherReturn:"Order.OrderStatusContent.actions.createAnotherReturn",reorder:"Order.OrderStatusContent.actions.reorder"}),l=q(()=>{const a=t==null?void 0:t.availableActions,o=!!(a!=null&&a.length),m=!!(t!=null&&t.returnNumber),p=()=>{x(e,{},t)};return c(S,{children:n!=null&&n.OrderActions?c(G,{"data-testid":"OrderActionsSlot",name:"OrderCanceledActions",slot:n==null?void 0:n.OrderActions,context:t}):c("div",{"data-testid":"availableActionsList",className:y(["order-order-actions__wrapper",["order-order-actions__wrapper--empty",!o]]),children:a==null?void 0:a.map(g=>{switch(g){case _.CANCEL:return c(S,{children:m?null:!!t&&c(se,{orderRef:t.token??atob(t.id)})});case _.RETURN:return c(E,{variant:"secondary",onClick:p,children:m?d.createAnotherReturn:d.createReturn});case _.REORDER:return c(S,{children:m?null:c(oe,{orderData:t,onError:s,routeOnSuccess:i,children:d.reorder})})}})})})},[s,t,i,e,n,d]);return c("div",{className:y(["order-order-actions",r]),children:l})},$=()=>{const[r,t]=O(null);return I(()=>{const n=sessionStorage.getItem("orderStoreConfig"),e=n?JSON.parse(n):null;e?t(e):Y().then(i=>{i&&(sessionStorage.setItem("orderStoreConfig",JSON.stringify(i)),t(i))})},[]),r},re=`
  mutation CONFIRM_CANCEL_ORDER_MUTATION(
      $orderId: ID!,
      $confirmationKey: String!
    ) {
    confirmCancelOrder(input: {
      order_id: $orderId,
      confirmation_key: $confirmationKey
    }) {
      order {
        ...guestOrderData
      }
      errorV2 {
        message
        code
      }
    }
  }
${z}
`,te=async(r,t)=>B(re,{variables:{orderId:r,confirmationKey:t}}).then(async({errors:n,data:e})=>{var d,l,a,o;const i=[...(d=e==null?void 0:e.confirmCancelOrder)!=null&&d.errorV2?[(l=e==null?void 0:e.confirmCancelOrder)==null?void 0:l.errorV2]:[],...n??[]];let s=null;return(a=e==null?void 0:e.confirmCancelOrder)!=null&&a.order&&(s=X((o=e==null?void 0:e.confirmCancelOrder)==null?void 0:o.order),v.emit("order/data",s)),i.length>0?Q(i):s}),ne=({enableOrderCancellation:r})=>{const t=C({orderCancelled:"Order.OrderStatusContent.orderCanceled.message"}),[n,e]=O({text:"",status:void 0});return I(()=>{if(!r)return;const i=new URLSearchParams(window.location.search),s=i.get("orderId"),d=i.get("confirmationKey");s&&d&&te(atob(s),d).then(()=>{e({text:t.orderCancelled,status:"success"})}).catch(l=>{e({text:l.message,status:"warning"})})},[r,t.orderCancelled]),{confirmOrderCancellation:n}},Me=({slots:r,orderData:t,className:n,statusTitle:e,status:i,routeCreateReturn:s,onError:d,routeOnSuccess:l})=>{const{orderStatus:a,order:o}=D({orderData:t}),[m,p]=H(!1),g=()=>{p(!0);const f=new URL(window.location.href),A=f.searchParams.get("orderId"),T=f.searchParams.get("confirmationKey");A&&T&&(f.searchParams.delete("orderId"),f.searchParams.delete("confirmationKey"),window.history.replaceState({},document.title,f.toString()))},h=C({cancelOrder:"Order.OrderStatusContent.actions.cancel"}),R=$(),{confirmOrderCancellation:u}=ne({enableOrderCancellation:R==null?void 0:R.orderCancellationEnabled});return N("div",{className:y(["order-order-status",n]),children:[!m&&(u==null?void 0:u.status)!==void 0&&c(P,{heading:h.cancelOrder,onDismiss:g,description:u.text,type:u.status}),o?c(Z,{title:e,status:i||a,slots:r,orderData:o,routeCreateReturn:s,onError:d,routeOnSuccess:l}):c(J,{withCard:!1})]})},se=({orderRef:r})=>{const[t,n]=O(!1),e=()=>{n(!0)},i=()=>{n(!1)},s=$(),d=(s==null?void 0:s.orderCancellationReasons)??[],l=a=>a.map((o,m)=>({text:o==null?void 0:o.description,value:m.toString()}));return v.on("order/data",a=>{const o=String(a.status).toLocaleLowerCase();(o==="guest order cancellation requested"||o==="canceled")&&i()}),N(S,{children:[c(E,{variant:"secondary",onClick:e,"data-testid":"cancel-button",children:c(L,{id:"Order.OrderStatusContent.actions.cancel"})}),t&&c(K,{centered:!0,size:"medium",onClose:i,className:"order-order-cancel__modal",title:c("h2",{className:"order-order-cancel__title",children:c(L,{id:"Order.OrderCancelForm.title"})}),"data-testid":"order-cancellation-reasons-modal",children:c(W,{orderRef:r,cancelReasons:l(d)})})]})},oe=({onError:r,routeOnSuccess:t,orderData:n,children:e})=>{const[i,s]=O(!1),d=V(()=>{s(!0);const l=n==null?void 0:n.number;j(l).then(({success:a,userInputErrors:o})=>{a&&x(t,{}),o.length&&(r==null||r(o))}).catch(a=>{r==null||r(a.message)}).finally(()=>{s(!1)})},[n,t,r]);return c(E,{type:"button",disabled:i,variant:"secondary",className:"order-reorder",onClick:d,children:e})};export{Me as OrderStatus,Me as default};
