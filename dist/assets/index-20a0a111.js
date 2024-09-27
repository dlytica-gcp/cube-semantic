import{B as d,T as L,R as b,C as w}from"./index-2a334e56.js";import{A as N}from"./index-d4c68e4d.js";import{m as v}from"./index-4e5c896b.js";import{j as s,c as f}from"./index-31f541c4.js";import{B as I}from"./index-9534a782.js";import{u as S,F as T,I as j}from"./index-f28b3217.js";import{u as x}from"./useLocation-795e9ebc.js";import{v as A}from"./validations-55614028.js";import{a as C,b as E}from"./paths-1d44e380.js";import{r as _}from"./react-venders-3a9fd7ec.js";import{u as h}from"./useTranslation-f1e31b7f.js";import{u as B}from"./useAuth-c4a8cfeb.js";import{A as F}from"./index-01236b0c.js";import"./button-255d95e9.js";import"./index-217cb9e2.js";import"./Sider-2eea88ce.js";import"./index-d72c3122.js";import"./tslib.es6-5f87f175.js";import"./dayjs.min-e1e47a26.js";import"./formatTime-900939d2.js";import"./AuthTokensStore-9401662d.js";import"./index-801816c4.js";const R="_wrapper_8ju6c_1",W="_header_8ju6c_5",q="_form_8ju6c_9",P="_or_8ju6c_14",U="_formItem_8ju6c_19",z="_text_8ju6c_22",G="_desc_8ju6c_25",O="_link_8ju6c_28",V="_input_8ju6c_31",$="_error_8ju6c_39",D="_magicLinkWrapper_8ju6c_45",H="_magicLink_8ju6c_45",J="_submit_8ju6c_59",r={wrapper:R,header:W,form:q,or:P,formItem:U,text:z,desc:G,link:O,input:V,error:$,magicLinkWrapper:D,magicLink:H,submit:J},{Title:K,Text:g}=L,Q=({isMagicLink:i,loading:n,onSubmit:a})=>{const[,l]=x(),{t:e}=h(["sign","common"]),{control:m,handleSubmit:p,setValue:c,formState:{errors:o}}=S();return _.useEffect(()=>{i&&c("password",void 0)},[i,c]),s.jsxs("div",{className:r.wrapper,children:[s.jsxs("div",{className:r.header,children:[s.jsx(K,{level:2,children:e("sign_in.title")}),s.jsxs(g,{className:r.desc,children:[e("sign_in.text"),"!"]})]}),s.jsxs(T,{className:r.form,children:[s.jsx(j,{className:f(r.formItem,r.input,{[r.error]:o==null?void 0:o.email}),variant:"borderless",placeholder:e("common:form.placeholders.email"),control:m,rules:{required:!0,validate:u=>A.email(u)||e("common:form.errors.email")},name:"email"}),!i&&s.jsx(j,{className:f(r.formItem,r.input,{[r.error]:o==null?void 0:o.password}),variant:"borderless",placeholder:e("common:form.placeholders.password"),control:m,rules:{required:!0},name:"password",fieldType:"password"}),s.jsx(d,{className:r.submit,type:"primary",htmlType:"submit",size:"large",loading:n,onClick:p(a),children:e(i?"sign_in.send_link":"sign_in.login")}),s.jsxs(g,{className:r.text,children:[e("sign_in.bottom_text")," ",s.jsx(d,{className:r.link,type:"link",onClick:()=>l(C),children:e("sign_in.sign_up_link")})]})]})]})},X="_container_b0pkk_1",Y={container:X},ks=()=>{const{t:i}=h(["sign"]),[n,a]=_.useState(),[l,e]=_.useState(!1),{login:m}=B(),[p,c]=x(),{magicLink:o}=p.query,u=o!==void 0,k=async y=>{a(null),e(!0);const t=await m(y);if(e(!1),t!=null&&t.magicLink){v.success(i("sign_in.link_sended"));return}if(t!=null&&t.error){a(t.message||t.error);return}t.magicLink||c(E)};return s.jsx(I,{header:s.jsx(F,{currentPage:"signin"}),children:s.jsx(b,{className:Y.container,justify:"center",align:"middle",children:s.jsxs(w,{xs:24,style:{maxWidth:356},children:[s.jsx(Q,{loading:l,onSubmit:k,isMagicLink:u}),n&&s.jsx(N,{message:s.jsx("span",{children:n}),type:"error"})]})})})};export{ks as default};
