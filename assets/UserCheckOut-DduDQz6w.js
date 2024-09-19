import{_ as k,m as C,g as x,S,h as E,r as d,o as i,c as m,d as l,a as e,k as T,F as h,i as A,t as c,j as g,w as y,b as n,n as b,e as F,v as I}from"./index-BWAJPlKJ.js";import{F as L}from"./FooterComponent-D_32WqI4.js";const D={BASE_URL:"/vite-cafeproject/",DEV:!1,MODE:"production",PROD:!0,SSR:!1,VITE_APP_API:"https://vue3-course-api.hexschool.io/",VITE_APP_PATH:"funniecafeweb-api"},{VITE_APP_API:N,VITE_APP_PATH:U}=D,B={components:{FooterComponent:L},data(){return{isLoading:!1,total:0,final_total:0,form:{user:{name:"",email:"",tel:"",address:""},message:""},coupon_code:""}},methods:{...C(x,["getCart"]),createOrder(){const s=`${N}api/${U}/order`,t=this.form;this.$http.post(s,{data:t}).then(u=>{this.$router.push(`/checkorder/${u.data.orderId}`),this.getCart()}).catch(u=>{S.fire({position:"top-end",icon:"error",title:`${u.response.data.message}`,timer:1500,toast:!0,color:"#14213d",background:"#fef8e2",showConfirmButton:!1,timerProgressBar:!0})})}},computed:{...E(x,["cart"])},created(){this.getCart()}},O={class:"mb-5"},j={class:"container"},q={class:"row my-5 py-5 bg-light rounded-2"},R={class:"col-lg-7"},M={class:"table-responsive-md mb-5 mb-lg-0"},H={class:"table align-middle table-light table-borderless"},z={class:"text-center"},Q={class:"table-nowrap fw-bold text-primary"},$={class:"text-end text-nowrap"},G={key:0,class:"text-danger text-end"},J={class:"text-end fs-5 text-primary fw-bold"},K={key:0},W={class:"text-end text-danger fs-5 fw-bold"},X={class:"row col-lg-5"},Y={class:"mb-3"},Z={class:"mb-3"},ee={class:"mb-3"},te={class:"mb-3"},se={class:"mb-3"},le={class:"d-flex justify-content-between"};function oe(s,t,u,ae,o,_){const v=d("LoadingVue"),f=d("FieldVue"),p=d("ErrorMessage"),w=d("RouterLink"),V=d("FormVue"),P=d("FooterComponent");return i(),m(h,null,[l(v,{active:o.isLoading,loader:"bars",color:"#6c584c",width:70,height:70},null,8,["active"]),e("section",O,[e("div",j,[t[17]||(t[17]=T('<div class="d-flex justify-content-center align-items-center my-5 position-relative banner banner2 container-fluid"><h2 class="position-absolute text-center text-white fw-bolder banner-title"> Checkout Process </h2></div><div class="d-flex justify-content-center align-items-center my-5 mt-3"><h6 class="d-flex flex-column text-center fw-bold mb-0 text-secondary pay-header active"><span class="mb-1">STEP 1</span><span>Information</span></h6><i class="bi bi-caret-right-fill mx-1 mx-md-2 text-secondary"></i><h6 class="d-flex flex-column text-center fw-bold mb-0 text-secondary pay-header"><span class="mb-1">STEP 2</span><span>Payment</span></h6><i class="bi bi-caret-right-fill mx-1 mx-md-2 text-secondary"></i><h6 class="d-flex flex-column text-center fw-bold mb-0 text-secondary pay-header"><span class="mb-1">STEP 3</span><span>Complete</span></h6></div>',2)),e("div",q,[e("div",R,[t[8]||(t[8]=e("h3",{class:"text-center fw-bold mb-4"},"Order Details",-1)),e("div",M,[e("table",H,[t[7]||(t[7]=e("thead",{class:"text-center table-secondary"},[e("tr",{class:"table-nowrap"},[e("th",null,"Product"),e("th",{class:"text-nowrap"},"Qty"),e("th",{class:"text-end"},"Price")])],-1)),e("tbody",z,[(i(!0),m(h,null,A(s.cart.carts,a=>(i(),m("tr",{class:"table-nowrap",key:a.id},[e("td",Q,c(a.product.title),1),e("td",null,c(a.qty),1),e("td",$,[s.cart.final_total!==s.cart.total?(i(),m("small",G,"Special：")):g("",!0),n(" "+c(s.$filters.currency(a.final_total)),1)])]))),128))]),e("tfoot",null,[e("tr",null,[t[5]||(t[5]=e("td",{colspan:"2",class:"text-end fs-5"},"Total",-1)),e("td",J,c(s.$filters.currency(s.cart.total)),1)]),s.cart.final_total!==s.cart.total?(i(),m("tr",K,[t[6]||(t[6]=e("td",{colspan:"2",class:"text-end text-danger fs-5"},"Special：",-1)),e("td",W,c(s.$filters.currency(s.cart.final_total)),1)])):g("",!0)])])])]),e("div",X,[t[16]||(t[16]=e("h3",{class:"text-center fw-bold mb-4"},"Customer Details",-1)),l(V,{onSubmit:_.createOrder},{default:y(({errors:a})=>[e("div",Y,[t[9]||(t[9]=e("label",{for:"email",class:"form-label"},[n("Email"),e("small",{class:"ps-1 text-danger fw-bold"},"*")],-1)),l(f,{id:"email",name:"email",type:"email",class:b(["form-control rounded-0",{"is-invalid":a.email}]),placeholder:"Please enter your email",rules:"email|required",modelValue:o.form.user.email,"onUpdate:modelValue":t[0]||(t[0]=r=>o.form.user.email=r)},null,8,["class","modelValue"]),l(p,{name:"email",class:"invalid-feedback"})]),e("div",Z,[t[10]||(t[10]=e("label",{for:"name",class:"form-label"},[n("Name"),e("small",{class:"ps-1 text-danger fw-bold"},"*")],-1)),l(f,{id:"name",name:"name",type:"text",class:b(["form-control rounded-0",{"is-invalid":a.name}]),placeholder:"Please enter your name",rules:"required",modelValue:o.form.user.name,"onUpdate:modelValue":t[1]||(t[1]=r=>o.form.user.name=r)},null,8,["class","modelValue"]),l(p,{name:"name",class:"invalid-feedback"})]),e("div",ee,[t[11]||(t[11]=e("label",{for:"tel",class:"form-label"},[n("Phone"),e("small",{class:"ps-1 text-danger fw-bold"},"*")],-1)),l(f,{id:"tel",name:"phone number",type:"tel",class:b(["form-control rounded-0",{"is-invalid":a["phone number"]}]),placeholder:"Please enter your phone number",rules:"required|numeric|min:7|max:11",modelValue:o.form.user.tel,"onUpdate:modelValue":t[2]||(t[2]=r=>o.form.user.tel=r)},null,8,["class","modelValue"]),l(p,{name:"phone number",class:"invalid-feedback"})]),e("div",te,[t[12]||(t[12]=e("label",{for:"address",class:"form-label"},[n("Address"),e("small",{class:"ps-1 text-danger fw-bold"},"*")],-1)),l(f,{id:"address",name:"address",type:"text",class:b(["form-control rounded-0",{"is-invalid":a.address}]),placeholder:"Please enter your address",rules:"required",modelValue:o.form.user.address,"onUpdate:modelValue":t[3]||(t[3]=r=>o.form.user.address=r)},null,8,["class","modelValue"]),l(p,{name:"address",class:"invalid-feedback"})]),e("div",se,[t[13]||(t[13]=e("label",{for:"message",class:"form-label"},"Comment",-1)),F(e("textarea",{name:"",id:"message",class:"form-control rounded-0",cols:"30",rows:"10","onUpdate:modelValue":t[4]||(t[4]=r=>o.form.message=r)},null,512),[[I,o.form.message]])]),e("div",le,[l(w,{class:"btn btn-outline-primary rounded-0",to:"/cart"},{default:y(()=>t[14]||(t[14]=[e("i",{class:"bi bi-caret-left-fill"},null,-1),n("Previous")])),_:1}),t[15]||(t[15]=e("button",{type:"submit",class:"btn btn-secondary check-btn rounded-0"},[n(" Next"),e("i",{class:"bi bi-caret-right-fill"})],-1))])]),_:1},8,["onSubmit"])])])])]),l(P)],64)}const de=k(B,[["render",oe]]);export{de as default};
