import{_ as k,m as w,g as x,S,h as N,r as c,o as u,c as f,d as l,a as s,k as A,F as g,i as q,t as p,j as h,w as y,b as n,n as m,e as D,v as E}from"./index-TAIjxXEn.js";import{V as T}from"./VueLoading-2Eqe2jIZ.js";import{F as M}from"./FooterComponent-D6nMOh1K.js";const U={BASE_URL:"/vite-cafeproject/",DEV:!1,MODE:"production",PROD:!0,SSR:!1,VITE_APP_API:"https://vue3-course-api.hexschool.io/",VITE_APP_PATH:"funniecafeweb-api"},{VITE_APP_API:F,VITE_APP_PATH:L}=U,I={components:{VueLoading:T,FooterComponent:M},data(){return{isLoading:!1,total:0,final_total:0,form:{user:{name:"",email:"",tel:"",address:"",pay:""},message:""},coupon_code:"",expiryDate:"",cardNumber:""}},watch:{cardNumber(t,e){t.length<e.length&&t.charAt(t.length-1)===" "&&(this.cardNumber=e.slice(0,-2)),t.length>e.length&&(t.length+1)%5===0&&this.cardNumber.length!==0&&this.cardNumber.length<19&&(this.cardNumber=t+" ")},expiryDate(t,e){t.length===2&&t.length>e.length?this.expiryDate+="/":t.length<e.length&&e.charAt(2)==="/"&&e.length===3&&(this.expiryDate=e.slice(0,1))}},methods:{...w(x,["getCart"]),createOrder(){const t=`${F}api/${L}/order`,e=this.form;this.$http.post(t,{data:e}).then(b=>{this.$router.push(`/checkorder/${b.data.orderId}`),this.getCart()}).catch(b=>{S("error",`${b.response.data.message}`)})}},computed:{...N(x,["cart"])},created(){this.getCart()}},O={class:"mb-5"},j={class:"container"},R={class:"row my-5 py-5 bg-light rounded-2"},B={class:"col-lg-7"},H={class:"table-responsive-md mb-5 mb-lg-0"},Y={class:"table align-middle table-light table-borderless"},z={class:"text-center"},Q={class:"table-nowrap fw-bold text-primary"},G={class:"text-end text-nowrap"},J={key:0,class:"text-danger text-end"},K={class:"text-end fs-5 text-primary fw-bold"},W={key:0},X={class:"text-end text-danger fs-5 fw-bold"},Z={class:"row col-lg-5"},$={class:"mb-3"},ee={class:"mb-3"},se={class:"mb-3"},te={class:"mb-3"},le={class:"mb-4"},ae={class:"col-12 d-flex flex-column"},oe={class:"d-flex"},re={class:"form-check form-radio me-3"},ne={class:"form-check form-radio"},de={key:0,class:"mb-3"},ie={class:"row"},me={class:"col-12"},ce={class:"my-3 col-12 col-md-6"},ue={class:"mb-3 col-12 col-md-6"},fe={class:"mb-3"},pe={class:"d-flex justify-content-between"};function be(t,e,b,he,a,v){const V=c("VueLoading"),d=c("FieldVue"),i=c("ErrorMessage"),_=c("RouterLink"),P=c("FormVue"),C=c("FooterComponent");return u(),f(g,null,[l(V,{active:a.isLoading},null,8,["active"]),s("section",O,[s("div",j,[e[27]||(e[27]=A('<div class="d-flex justify-content-center align-items-center my-5 position-relative banner banner2 container-fluid"><h2 class="position-absolute text-center text-white fw-bolder banner-title"> Checkout Process </h2></div><div class="d-flex justify-content-center align-items-center my-5 mt-3"><h6 class="d-flex flex-column text-center fw-bold mb-0 text-secondary pay-header active"><span class="mb-1">STEP 1</span><span>Information</span></h6><i class="bi bi-caret-right-fill mx-1 mx-md-2 text-secondary"></i><h6 class="d-flex flex-column text-center fw-bold mb-0 text-secondary pay-header"><span class="mb-1">STEP 2</span><span>Payment</span></h6><i class="bi bi-caret-right-fill mx-1 mx-md-2 text-secondary"></i><h6 class="d-flex flex-column text-center fw-bold mb-0 text-secondary pay-header"><span class="mb-1">STEP 3</span><span>Complete</span></h6></div>',2)),s("div",R,[s("div",B,[e[12]||(e[12]=s("h3",{class:"text-center fw-bold mb-4"},"Order Details",-1)),s("div",H,[s("table",Y,[e[11]||(e[11]=s("thead",{class:"text-center table-secondary"},[s("tr",{class:"table-nowrap"},[s("th",null,"Product"),s("th",{class:"text-nowrap"},"Qty"),s("th",{class:"text-end"},"Price")])],-1)),s("tbody",z,[(u(!0),f(g,null,q(t.cart.carts,r=>(u(),f("tr",{class:"table-nowrap",key:r.id},[s("td",Q,p(r.product.title),1),s("td",null,p(r.qty),1),s("td",G,[t.cart.final_total!==t.cart.total?(u(),f("small",J,"Special：")):h("",!0),n(" "+p(t.$filters.currency(r.final_total)),1)])]))),128))]),s("tfoot",null,[s("tr",null,[e[9]||(e[9]=s("td",{colspan:"2",class:"text-end fs-5"},"Total",-1)),s("td",K,p(t.$filters.currency(t.cart.total)),1)]),t.cart.final_total!==t.cart.total?(u(),f("tr",W,[e[10]||(e[10]=s("td",{colspan:"2",class:"text-end text-danger fs-5"},"Special：",-1)),s("td",X,p(t.$filters.currency(t.cart.final_total)),1)])):h("",!0)])])])]),s("div",Z,[e[26]||(e[26]=s("h3",{class:"text-center fw-bold mb-4"},"Customer Details",-1)),l(P,{onSubmit:v.createOrder},{default:y(({errors:r})=>[s("div",$,[e[13]||(e[13]=s("label",{for:"name",class:"form-label"},[n("Name"),s("small",{class:"ps-1 text-danger fw-bold"},"*")],-1)),l(d,{id:"name",name:"name",type:"text",class:m(["form-control rounded-0",{"is-invalid":r.name}]),placeholder:"Please enter your name",rules:"required",modelValue:a.form.user.name,"onUpdate:modelValue":e[0]||(e[0]=o=>a.form.user.name=o)},null,8,["class","modelValue"]),l(i,{name:"name",class:"invalid-feedback"})]),s("div",ee,[e[14]||(e[14]=s("label",{for:"email",class:"form-label"},[n("Email"),s("small",{class:"ps-1 text-danger fw-bold"},"*")],-1)),l(d,{id:"email",name:"email",type:"email",class:m(["form-control rounded-0",{"is-invalid":r.email}]),placeholder:"Please enter your email",rules:"email|required",modelValue:a.form.user.email,"onUpdate:modelValue":e[1]||(e[1]=o=>a.form.user.email=o)},null,8,["class","modelValue"]),l(i,{name:"email",class:"invalid-feedback"})]),s("div",se,[e[15]||(e[15]=s("label",{for:"tel",class:"form-label"},[n("Phone"),s("small",{class:"ps-1 text-danger fw-bold"},"*")],-1)),l(d,{id:"tel",name:"phone number",type:"tel",class:m(["form-control rounded-0",{"is-invalid":r["phone number"]}]),placeholder:"Please enter your phone number",rules:"required|numeric|min:7|max:11",modelValue:a.form.user.tel,"onUpdate:modelValue":e[2]||(e[2]=o=>a.form.user.tel=o)},null,8,["class","modelValue"]),l(i,{name:"phone number",class:"invalid-feedback"})]),s("div",te,[e[16]||(e[16]=s("label",{for:"address",class:"form-label"},[n("Delivery Address"),s("small",{class:"ps-1 text-danger fw-bold"},"*")],-1)),l(d,{id:"address",name:"address",type:"text",class:m(["form-control rounded-0",{"is-invalid":r.address}]),placeholder:"Please enter your address",rules:"required",modelValue:a.form.user.address,"onUpdate:modelValue":e[3]||(e[3]=o=>a.form.user.address=o)},null,8,["class","modelValue"]),l(i,{name:"address",class:"invalid-feedback"})]),s("div",le,[s("fieldset",ae,[e[19]||(e[19]=s("legend",{class:"form-label mb-0 fs-6 fs-md-5 w-auto mb-2"},[n(" Payment Method"),s("small",{class:"ps-1 text-danger fw-bold"},"*")],-1)),s("div",{class:m(["normal-input",{error:r["Payment Method"]}])},[s("div",oe,[s("div",re,[l(d,{class:"form-check-input",type:"radio",name:"Payment Method",rules:"required",id:"creditCard",value:"creditCard",modelValue:a.form.user.pay,"onUpdate:modelValue":e[4]||(e[4]=o=>a.form.user.pay=o)},null,8,["modelValue"]),e[17]||(e[17]=s("label",{class:"form-check-label",for:"creditCard"},"Credit Card",-1))]),s("div",ne,[l(d,{class:"form-check-input",type:"radio",name:"Payment Method",rules:"required",id:"cash",value:"cash",modelValue:a.form.user.pay,"onUpdate:modelValue":e[5]||(e[5]=o=>a.form.user.pay=o)},null,8,["modelValue"]),e[18]||(e[18]=s("label",{class:"form-check-label",for:"cash"},"Cash",-1))])]),l(i,{name:"Payment Method",class:"error-text position-absolute text-danger"})],2)])]),a.form.user.pay==="creditCard"?(u(),f("div",de,[e[22]||(e[22]=s("label",{for:"cardNum",class:"form-label"},[n("Card Number"),s("small",{class:"ps-1 text-danger fw-bold"},"*")],-1)),s("div",ie,[s("div",me,[l(d,{id:"cardNum",name:"Credit Card Number",type:"tel",class:m(["form-control rounded-0",{"is-invalid":r["Credit Card Number"]}]),maxlength:"19",placeholder:"**** **** **** ****",rules:"required",modelValue:a.cardNumber,"onUpdate:modelValue":e[6]||(e[6]=o=>a.cardNumber=o)},null,8,["class","modelValue"]),l(i,{name:"Credit Card Number",class:"invalid-feedback"}),s("div",ce,[e[20]||(e[20]=s("label",{for:"period",class:"form-label required"},[n("Expiration Date"),s("small",{class:"ps-1 text-danger fw-bold"},"*")],-1)),l(d,{id:"period",name:"Expiration Date",type:"tel",class:m(["form-control rounded-0",{"is-invalid":r["Expiration Date"]}]),placeholder:"MM/YY",maxlength:"5",modelValue:a.expiryDate,"onUpdate:modelValue":e[7]||(e[7]=o=>a.expiryDate=o),rules:"required"},null,8,["modelValue","class"]),l(i,{name:"Expiration Date",class:"invalid-feedback"})]),s("div",ue,[e[21]||(e[21]=s("label",{for:"checkCode",class:"form-label required"},[n("CVV"),s("small",{class:"ps-1 text-danger fw-bold"},"*")],-1)),l(d,{id:"checkCode",name:"CVV",type:"text",class:m(["form-control rounded-0",{"is-invalid":r.CVV}]),maxlength:"3",placeholder:"CVV",rules:"required|length:3|numeric:true"},null,8,["class"]),l(i,{name:"CVV",class:"invalid-feedback"})])])])])):h("",!0),s("div",fe,[e[23]||(e[23]=s("label",{for:"message",class:"form-label"},"Comment",-1)),D(s("textarea",{name:"",id:"message",class:"form-control rounded-0",cols:"30",rows:"10","onUpdate:modelValue":e[8]||(e[8]=o=>a.form.message=o)},null,512),[[E,a.form.message]])]),s("div",pe,[l(_,{class:"btn btn-outline-primary rounded-0",to:"/cart"},{default:y(()=>e[24]||(e[24]=[s("i",{class:"bi bi-caret-left-fill"},null,-1),n("Previous")])),_:1}),e[25]||(e[25]=s("button",{type:"submit",class:"btn btn-secondary check-btn rounded-0"},[n(" Next"),s("i",{class:"bi bi-caret-right-fill"})],-1))])]),_:1},8,["onSubmit"])])])])]),l(C)],64)}const ve=k(I,[["render",be]]);export{ve as default};
