import{V as E}from"./VueLoading-2Eqe2jIZ.js";import{m as U,D as k}from"./DelModal-R3UFUOPQ.js";import{_ as x,o as d,c as r,a as t,e as i,v as c,b as M,F as y,i as A,j as V,E as I,S as p,r as f,d as _,t as g}from"./index-TAIjxXEn.js";import{P as D}from"./PaginationComponent--dXmcmC6.js";const T={BASE_URL:"/vite-cafeproject/",DEV:!1,MODE:"production",PROD:!0,SSR:!1,VITE_APP_API:"https://vue3-course-api.hexschool.io/",VITE_APP_PATH:"funniecafeweb-api"},{VITE_APP_API:$,VITE_APP_PATH:L}=T,F={props:{product:{type:Object,default(){return{}}}},watch:{product(){this.tempProduct=this.product,this.tempProduct.images||(this.tempProduct.images=[])}},data(){return{modal:{},tempProduct:{}}},methods:{uploadFile(){const l=this.$refs.fileInput.files[0],o=new FormData;o.append("file-to-upload",l);const n=`${$}api/${L}/admin/upload`;this.$http.post(n,o).then(m=>{m.data.success&&(this.tempProduct.imageUrl=m.data.imageUrl)})}},mixins:[U]},S={class:"modal fade",id:"exampleModal",tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true",ref:"modal"},N={class:"modal-dialog modal-xl",role:"document"},R={class:"modal-content border-0"},B={class:"modal-body"},H={class:"row"},O={class:"col-sm-4"},j={class:"mb-3"},q={class:"mb-3"},z=["src","alt"],G={key:0,class:"mt-5"},J=["onUpdate:modelValue"],K=["src","alt"],Q=["onClick"],W={key:0},X={class:"col-sm-8"},Y={class:"mb-3"},Z={class:"row gx-2"},tt={class:"mb-3 col-md-6"},ot={class:"mb-3 col-md-6"},et={class:"row gx-2"},st={class:"mb-3 col-md-6"},lt={class:"mb-3 col-md-6"},nt={class:"mb-3"},it={class:"mb-3"},dt={class:"mb-3"},rt={class:"form-check"},at={class:"modal-footer"};function ut(l,o,n,m,e,a){return d(),r("div",S,[t("div",N,[t("div",R,[o[24]||(o[24]=t("div",{class:"modal-header bg-primary text-white"},[t("h5",{class:"modal-title",id:"exampleModalLabel"},[t("span",null,"新增產品")]),t("button",{type:"button",class:"btn btn-close btn-secondary","data-bs-dismiss":"modal","aria-label":"Close"})],-1)),t("div",B,[t("div",H,[t("div",O,[t("div",j,[o[12]||(o[12]=t("label",{for:"image",class:"form-label"},"輸入圖片網址",-1)),i(t("input",{type:"text",class:"form-control",id:"image","onUpdate:modelValue":o[0]||(o[0]=s=>e.tempProduct.imageUrl=s),placeholder:"請輸入圖片連結"},null,512),[[c,e.tempProduct.imageUrl]])]),t("div",q,[o[13]||(o[13]=t("label",{for:"customFile",class:"form-label"},[M("或 上傳圖片 "),t("i",{class:"fas fa-spinner fa-spin"})],-1)),t("input",{type:"file",id:"customFile",class:"form-control",ref:"fileInput",onChange:o[1]||(o[1]=(...s)=>a.uploadFile&&a.uploadFile(...s))},null,544)]),t("img",{class:"img-fluid",src:e.tempProduct.imageUrl,alt:`${e.tempProduct.title} 圖片`},null,8,z),e.tempProduct.images?(d(),r("div",G,[(d(!0),r(y,null,A(e.tempProduct.images,(s,b)=>(d(),r("div",{class:"mb-3 input-group",key:b},[i(t("input",{type:"url",class:"form-control form-control","onUpdate:modelValue":P=>e.tempProduct.images[b]=P,placeholder:"請輸入連結"},null,8,J),[[c,e.tempProduct.images[b]]]),t("div",null,[t("img",{class:"img-fluid",src:s,alt:`${e.tempProduct.title} 圖片`},null,8,K)]),t("button",{type:"button",class:"btn btn-outline-danger",onClick:P=>e.tempProduct.images.splice(b,1)}," 移除 ",8,Q)]))),128)),e.tempProduct.images[e.tempProduct.images.length-1]||!e.tempProduct.images.length?(d(),r("div",W,[t("button",{class:"btn btn-outline-primary btn-sm d-block w-100",type:"button",onClick:o[2]||(o[2]=s=>e.tempProduct.images.push(""))}," 新增圖片 ")])):V("",!0)])):V("",!0)]),t("div",X,[t("div",Y,[o[14]||(o[14]=t("label",{for:"title",class:"form-label"},"標題",-1)),i(t("input",{type:"text",class:"form-control",id:"title","onUpdate:modelValue":o[3]||(o[3]=s=>e.tempProduct.title=s),placeholder:"請輸入標題"},null,512),[[c,e.tempProduct.title]])]),t("div",Z,[t("div",tt,[o[15]||(o[15]=t("label",{for:"category",class:"form-label"},"分類",-1)),i(t("input",{type:"text",class:"form-control",id:"category","onUpdate:modelValue":o[4]||(o[4]=s=>e.tempProduct.category=s),placeholder:"請輸入分類"},null,512),[[c,e.tempProduct.category]])]),t("div",ot,[o[16]||(o[16]=t("label",{for:"price",class:"form-label"},"單位",-1)),i(t("input",{type:"text",class:"form-control",id:"unit","onUpdate:modelValue":o[5]||(o[5]=s=>e.tempProduct.unit=s),placeholder:"請輸入單位"},null,512),[[c,e.tempProduct.unit]])])]),t("div",et,[t("div",st,[o[17]||(o[17]=t("label",{for:"origin_price",class:"form-label"},"原價",-1)),i(t("input",{type:"number",class:"form-control",id:"origin_price","onUpdate:modelValue":o[6]||(o[6]=s=>e.tempProduct.origin_price=s),placeholder:"請輸入原價"},null,512),[[c,e.tempProduct.origin_price,void 0,{number:!0}]])]),t("div",lt,[o[18]||(o[18]=t("label",{for:"price",class:"form-label"},"售價",-1)),i(t("input",{type:"number",class:"form-control",id:"price","onUpdate:modelValue":o[7]||(o[7]=s=>e.tempProduct.price=s),placeholder:"請輸入售價"},null,512),[[c,e.tempProduct.price,void 0,{number:!0}]])])]),o[22]||(o[22]=t("hr",null,null,-1)),t("div",nt,[o[19]||(o[19]=t("label",{for:"description",class:"form-label"},"產品描述",-1)),i(t("textarea",{type:"text",class:"form-control",id:"description","onUpdate:modelValue":o[8]||(o[8]=s=>e.tempProduct.description=s),placeholder:"請輸入產品描述"},null,512),[[c,e.tempProduct.description]])]),t("div",it,[o[20]||(o[20]=t("label",{for:"content",class:"form-label"},"說明內容",-1)),i(t("textarea",{type:"text",class:"form-control",id:"content","onUpdate:modelValue":o[9]||(o[9]=s=>e.tempProduct.content=s),placeholder:"請輸入產品說明內容"},null,512),[[c,e.tempProduct.content]])]),t("div",dt,[t("div",rt,[i(t("input",{class:"form-check-input",type:"checkbox","onUpdate:modelValue":o[10]||(o[10]=s=>e.tempProduct.is_enabled=s),"true-value":1,"false-value":0,id:"is_enabled"},null,512),[[I,e.tempProduct.is_enabled]]),o[21]||(o[21]=t("label",{class:"form-check-label",for:"is_enabled"}," 是否上架 ",-1))])])])])]),t("div",at,[o[23]||(o[23]=t("button",{type:"button",class:"btn btn-outline-secondary rounded-0","data-bs-dismiss":"modal"}," 取消 ",-1)),t("button",{type:"button",class:"btn btn-primary rounded-0",onClick:o[11]||(o[11]=s=>l.$emit("update-product",e.tempProduct))}," 確認 ")])])])],512)}const ct=x(F,[["render",ut]]),pt={BASE_URL:"/vite-cafeproject/",DEV:!1,MODE:"production",PROD:!0,SSR:!1,VITE_APP_API:"https://vue3-course-api.hexschool.io/",VITE_APP_PATH:"funniecafeweb-api"},{VITE_APP_API:h,VITE_APP_PATH:v}=pt,mt={data(){return{products:[],pagination:{},tempProduct:{},isNew:!1,isLoading:!1}},components:{VueLoading:E,ProductModal:ct,DelModal:k,Pagination:D},methods:{getProducts(l=1){const o=`${h}api/${v}/admin/products/?page=${l}`;this.isLoading=!0,this.$http.get(o).then(n=>{this.isLoading=!1,n.data.success&&(this.products=n.data.products,this.pagination=n.data.pagination)}).catch(n=>{p("error",`${n.response.data.message}`)})},openModal(l,o){l?this.tempProduct={}:this.tempProduct={...o},this.isNew=l,this.$refs.productModal.showModal()},updateProduct(l){this.tempProduct=l;let o=`${h}api/${v}/admin/product`,n="post";this.isNew||(o=`${h}api/${v}/admin/product/${l.id}`,n="put");const m=this.$refs.productModal;this.$http[n](o,{data:this.tempProduct}).then(e=>{m.hideModal(),e.data.success?(this.getProducts(),p("success","更新成功")):p("error","更新失敗")}).catch(e=>{p("error",`${e.response.data.message}`)})},openDelProductModal(l){this.tempProduct={...l},this.$refs.delModal.showModal()},delProduct(){const l=`${h}api/${v}/admin/product/${this.tempProduct.id}`,o=this.$refs.delModal;this.$http.delete(l).then(n=>{o.hideModal(),n.data.success?(this.getProducts(),p("success","刪除商品成功")):p("error","刪除商品失敗")}).catch(n=>{p("error",`${n.response.data.message}`)})}},created(){this.getProducts()}},bt={class:"text-end mt-3"},Pt={class:"table mt-4"},ft={class:"text-right"},_t={class:"text-right"},gt={key:0,class:"text-success"},ht={key:1,class:"text-muted"},vt={class:"btn-group"},yt=["onClick"],Vt=["onClick"];function xt(l,o,n,m,e,a){const s=f("VueLoading"),b=f("Pagination"),P=f("ProductModal"),w=f("DelModal");return d(),r(y,null,[_(s,{active:e.isLoading},null,8,["active"]),t("div",bt,[t("button",{class:"btn btn-primary rounded-0",type:"button",onClick:o[0]||(o[0]=u=>a.openModal(!0))},o[1]||(o[1]=[t("i",{class:"bi bi-plus-lg pe-1"},null,-1),M("新增產品 ")]))]),t("table",Pt,[o[2]||(o[2]=t("thead",null,[t("tr",null,[t("th",{width:"120"},"分類"),t("th",null,"產品名稱"),t("th",{width:"120"},"原價"),t("th",{width:"120"},"售價"),t("th",{width:"100"},"是否上架"),t("th",{width:"200"},"編輯")])],-1)),t("tbody",null,[(d(!0),r(y,null,A(e.products,u=>(d(),r("tr",{key:u.id},[t("td",null,g(u.category),1),t("td",null,g(u.title),1),t("td",ft,g(l.$filters.currency(u.origin_price)),1),t("td",_t,g(l.$filters.currency(u.price)),1),t("td",null,[u.is_enabled?(d(),r("span",gt,"上架")):(d(),r("span",ht,"未上架"))]),t("td",null,[t("div",vt,[t("button",{class:"btn btn-outline-primary btn-sm rounded-0",type:"button",onClick:C=>a.openModal(!1,u)}," 編輯 ",8,yt),t("button",{class:"btn btn-outline-danger btn-sm rounded-0",type:"button",onClick:C=>a.openDelProductModal(u)}," 刪除 ",8,Vt)])])]))),128))])]),_(b,{pages:e.pagination,onEmitPages:a.getProducts},null,8,["pages","onEmitPages"]),_(P,{ref:"productModal",product:e.tempProduct,onUpdateProduct:a.updateProduct},null,8,["product","onUpdateProduct"]),_(w,{item:e.tempProduct,ref:"delModal",onDelItem:a.delProduct},null,8,["item","onDelItem"])],64)}const Et=x(mt,[["render",xt]]);export{Et as default};
