import{R as y,C as v}from"./index-2a334e56.js";import{D as C}from"./index-17f232aa.js";import{S as N}from"./index-f28b3217.js";import{m as S}from"./index-4e5c896b.js";import{j as o}from"./index-31f541c4.js";import{u as b}from"./index-d72c3122.js";import{u as A,r as p}from"./react-venders-3a9fd7ec.js";import{N as F}from"./index-fadf905d.js";import{A as M}from"./index-19cf5167.js";import{a as k}from"./index-166ce56c.js";import{C as R}from"./CurrentUserStore-886fe293.js";import{u as E}from"./useLocation-795e9ebc.js";import{u as T}from"./alertTypes-bd9943c7.js";import{u as D}from"./useCheckResponse-471c00b7.js";import{C as I}from"./index-81782579.js";import{A as L}from"./index-74275833.js";import{f as r}from"./formatTime-900939d2.js";import{S as O}from"./index-654ccca1.js";import{A as P}from"./paths-1d44e380.js";import{u as U}from"./useTranslation-f1e31b7f.js";import{S as $}from"./SettingOutlined-58db4ea1.js";import"./button-255d95e9.js";import"./Sider-2eea88ce.js";import"./dayjs.min-e1e47a26.js";import"./tslib.es6-5f87f175.js";import"./index-d4c68e4d.js";import"./validations-55614028.js";import"./capitalize-b2c18dd5.js";import"./urql.es-e4ed66a8.js";import"./index-801816c4.js";const z="_wrapper_2l4w9_1",B="_body_2l4w9_4",q="_action_2l4w9_7",G="_actionIcon_2l4w9_11",H="_modal_2l4w9_15",J="_creator_2l4w9_18",K="_avatar_2l4w9_22",Q="_email_2l4w9_26",n={wrapper:z,body:B,action:q,actionIcon:G,modal:H,creator:J,avatar:K,email:Q},bo=({alerts:i,exploration:u})=>{const{t:s}=U(["alerts","pages"]),x=b(),[,a]=E(),m=P,{teamData:c}=R(),{alertId:l}=A(),t=p.useMemo(()=>i!=null&&i.length?i:(c==null?void 0:c.alerts)||[],[i,c]),d=p.useMemo(()=>t.find(e=>e.id===l),[l,t]),{mutations:{deleteMutationData:j,execDeleteMutation:f}}=T({}),h=e=>{a(`${m}/${e.id}`)},_=e=>{f({id:e.id})},w=()=>{a(m)};D(j,()=>{},{successMessage:s("alert_deleted")}),p.useEffect(()=>{t!=null&&t.length&&l&&!d&&(S.error(s("not_found.wrong_id")),a(m))},[l,t==null?void 0:t.length,m,d,a,s]);const g=e=>o.jsx(I,{title:e.name,titleTooltip:e.name,onTitleClick:()=>h(e),extra:o.jsx(C,{className:n.btn,trigger:["click"],menu:{items:[{key:"edit",label:s("common:words.edit"),onClick:()=>h(e)},{key:"delete",label:o.jsx(k,{title:s("common:words.delete_alert"),onConfirm:()=>_(e),children:s("common:words.delete")})}]},children:o.jsx($,{},"setting")}),children:o.jsxs("dl",{children:[e.creator&&o.jsxs(o.Fragment,{children:[o.jsx("dt",{children:s("common:words.creator")}),o.jsx("dd",{title:e.creator.email,children:o.jsxs("div",{className:n.creator,children:[o.jsx(L,{className:n.avatar,width:x.md?36:27,height:x.md?36:27,username:e.creator.displayName,img:e.creator.avatarUrl}),o.jsx("div",{className:n.email,children:e.creator.email})]})})]}),e.type&&o.jsxs(o.Fragment,{children:[o.jsx("dt",{children:s("common:words.type")}),o.jsx("dd",{title:r(e.type),children:r(e.type)})]}),e.schedule&&o.jsxs(o.Fragment,{children:[o.jsx("dt",{children:s("common:words.schedule")}),o.jsx("dd",{title:r(e.schedule),children:r(e.schedule)})]}),e.createdAt&&o.jsxs(o.Fragment,{children:[o.jsx("dt",{children:s("common:words.created_at")}),o.jsx("dd",{title:r(e.createdAt),children:r(e.createdAt)})]}),e.updatedAt&&o.jsxs(o.Fragment,{children:[o.jsx("dt",{children:s("common:words.updated_at")}),o.jsx("dd",{title:r(e.updatedAt),children:r(e.updatedAt)})]}),e.status&&o.jsxs(o.Fragment,{children:[o.jsx("dt",{children:s("common:words.status")}),o.jsx("dd",{children:o.jsx(O,{status:e.status,children:e.lastActivity})})]})]})},e.id);return o.jsxs(o.Fragment,{children:[o.jsx(N,{className:n.wrapper,direction:"vertical",size:13,children:o.jsx("div",{className:n.body,children:t!=null&&t.length?o.jsx(y,{justify:"start",gutter:[32,32],children:t.map(e=>o.jsx(v,{xs:24,sm:12,xl:8,children:g(e)},e.id))}):o.jsx(F,{})})}),o.jsx(M,{alert:d,exploration:(d==null?void 0:d.exploration)||u,isOpen:!!d,onClose:w})]})};export{bo as default};
