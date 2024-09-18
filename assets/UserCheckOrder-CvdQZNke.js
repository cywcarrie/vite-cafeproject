import{F as g}from"./FooterComponent-C90UfFVk.js";import{_ as P,S as u,r as d,o,c as r,d as c,a as t,n as m,j as a,f as v,F as f,i as k,t as n,b,w as C}from"./index-BCkRVABS.js";const S={BASE_URL:"/vite-cafeproject/",DEV:!1,MODE:"production",PROD:!0,SSR:!1,VITE_APP_API:"https://vue3-course-api.hexschool.io/",VITE_APP_PATH:"funniecafeweb-api"},{VITE_APP_API:x,VITE_APP_PATH:_}=S,E={components:{FooterComponent:g},data(){return{order:{user:{}},orderId:"",isLoading:!1}},methods:{getOrder(){const i=`${x}api/${_}/order/${this.orderId}`;this.$http.get(i).then(e=>{e.data.success&&(this.order=e.data.order)}).catch(e=>{u.fire({position:"top-end",icon:"error",title:`${e.response.data.message}`,timer:1500,toast:!0,color:"#14213d",background:"#fef8e2",showConfirmButton:!1,timerProgressBar:!0})})},payOrder(){const i=`${x}api/${_}/pay/${this.orderId}`;this.$http.post(i).then(e=>{e.data.success&&this.getOrder()}).catch(e=>{u.fire({position:"top-end",icon:"error",title:`${e.response.data.message}`,timer:1500,toast:!0,color:"#14213d",background:"#fef8e2",showConfirmButton:!1,timerProgressBar:!0})})}},created(){this.orderId=this.$route.params.orderId,this.getOrder()}},I={class:"mb-5"},A={class:"container"},T={class:"d-flex justify-content-center align-items-center mb-5 mt-3"},V={class:"row justify-content-center align-items-center"},O={class:"col-md-10"},B={key:0,class:"d-flex justify-content-center align-items-center"},L={key:1,class:"fw-bold mt-4 mb-5 text-center"},j={class:"my-5 row justify-content-center"},D={class:"table align-middle table-light table-borderless mb-4"},F={class:"text-center text-primary fw-bold"},N={class:"text-center text-nowrap"},R={class:"text-center text-nowrap"},H={class:"fs-5 text-primary fw-bold text-nowrap"},M={class:"table table-light table-borderless mb-4"},U={class:"table-nowrap"},q={class:"text-nowrap"},z={class:"table-nowrap"},Q={class:"text-nowrap"},Y={class:"table-nowrap"},$={class:"text-nowrap"},G={class:"table-nowrap"},J={class:"text-nowrap"},K={class:"table-nowrap"},W={key:0,class:"text-nowrap text-danger fw-bold"},X={key:1,class:"text-success fw-bold text-nowrap"},Z={key:0,class:"text-end"},tt={key:1,class:"text-end"};function et(i,e,st,ot,s,p){const h=d("LoadingVue"),w=d("RouterLink"),y=d("FooterComponent");return o(),r(f,null,[c(h,{active:s.isLoading,loader:"bars",color:"#6c584c",width:70,height:70},null,8,["active"]),t("section",I,[t("div",A,[e[18]||(e[18]=t("div",{class:"d-flex justify-content-center align-items-center my-5 position-relative banner banner2 container-fluid"},[t("h2",{class:"position-absolute text-center text-white fw-bolder banner-title"},"Checkout Process")],-1)),t("div",T,[e[3]||(e[3]=t("h6",{class:"d-flex flex-column text-center fw-bold mb-0 text-secondary pay-header"},[t("span",{class:"mb-1"},"STEP 1"),t("span",null,"Information")],-1)),e[4]||(e[4]=t("i",{class:"bi bi-caret-right-fill mx-1 mx-md-2 text-secondary"},null,-1)),t("h6",{class:m(["d-flex flex-column text-center fw-bold mb-0 text-secondary pay-header",{active:s.order.is_paid===!1}])},e[1]||(e[1]=[t("span",{class:"mb-1"},"STEP 2",-1),t("span",null,"Payment",-1)]),2),e[5]||(e[5]=t("i",{class:"bi bi-caret-right-fill mx-1 mx-md-2 text-secondary"},null,-1)),t("h6",{class:m(["d-flex flex-column text-center fw-bold mb-0 text-secondary pay-header",{active:s.order.is_paid===!0}])},e[2]||(e[2]=[t("span",{class:"mb-1"},"STEP 3",-1),t("span",null,"Complete",-1)]),2)]),t("div",V,[t("div",O,[s.order.is_paid===!0?(o(),r("div",B,e[6]||(e[6]=[t("i",{class:"bi bi-check-circle-fill fs-2 pe-2 text-success"},null,-1),t("h2",{class:"fw-bold mb-0 text-success"},"Success !",-1)]))):a("",!0),s.order.is_paid===!0?(o(),r("h6",L,"A confirmation as been sent to your email !")):a("",!0),t("div",j,[e[17]||(e[17]=t("h3",{class:"text-center fw-bold mb-4"},"Order Details",-1)),t("form",{class:"col-lg-6",onSubmit:e[0]||(e[0]=v((...l)=>p.payOrder&&p.payOrder(...l),["prevent"]))},[t("table",D,[e[8]||(e[8]=t("thead",{class:"text-center bg-light"},[t("tr",null,[t("th",{class:"text-nowrap"},"Product"),t("th",{class:"text-center text-nowrap"},"Qty"),t("th",{class:"text-nowrap"},"Price")])],-1)),t("tbody",null,[(o(!0),r(f,null,k(s.order.products,l=>(o(),r("tr",{key:l.id},[t("td",F,n(l.product.title),1),t("td",N,n(l.qty)+"/"+n(l.product.unit),1),t("td",R,n(i.$filters.currency(l.final_total)),1)]))),128))]),t("tfoot",null,[t("tr",null,[e[7]||(e[7]=t("td",{colspan:"2",class:"text-end text-nowrap"},"Total",-1)),t("td",H,n(i.$filters.currency(s.order.total)),1)])])]),e[16]||(e[16]=t("h3",{class:"text-center fw-bold mb-4"},"Customer Details",-1)),t("table",M,[t("tbody",null,[t("tr",U,[e[9]||(e[9]=t("th",{width:"100",class:"text-nowrap"},"Email",-1)),t("td",q,n(s.order.user.email),1)]),t("tr",z,[e[10]||(e[10]=t("th",{class:"text-nowrap"},"Name",-1)),t("td",Q,n(s.order.user.name),1)]),t("tr",Y,[e[11]||(e[11]=t("th",{class:"text-nowrap"},"Phone",-1)),t("td",$,n(s.order.user.tel),1)]),t("tr",G,[e[12]||(e[12]=t("th",null,"Address",-1)),t("td",J,n(s.order.user.address),1)]),t("tr",K,[e[13]||(e[13]=t("th",null,"Payment Status",-1)),t("td",null,[s.order.is_paid?(o(),r("span",X,"Payment Completed")):(o(),r("span",W,"Not Yet Paid"))])])])]),s.order.is_paid===!1?(o(),r("div",Z,e[14]||(e[14]=[t("button",{class:"btn btn-primary ms-auto rounded-0",type:"submit"},[b("Confirm Payment"),t("i",{class:"bi bi-caret-right-fill"})],-1)]))):a("",!0),s.order.is_paid===!0?(o(),r("div",tt,[c(w,{to:"/products",class:"btn btn-primary ms-auto rounded-0"},{default:C(()=>e[15]||(e[15]=[t("i",{class:"bi bi-cart4 pe-1 fs-5"},null,-1),b("Continue Shopping")])),_:1})])):a("",!0)],32)])])])])]),c(y)],64)}const lt=P(E,[["render",et]]);export{lt as default};
