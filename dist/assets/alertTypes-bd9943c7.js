import{r as f,R as O,d as G}from"./react-venders-3a9fd7ec.js";import{R as Ee}from"./Sider-2eea88ce.js";import{k as ge,m as he,r as be,l as R,J as Me,o as X,c as N,t as te,d as ve,b as L,f as xe,v as ke,w as Re,h as Be,F as Te,n as De,y as ie,j as o}from"./index-31f541c4.js";import{z as ye,K as ce,w as ze,Q as Le,B as He,R as de,C as Ke}from"./index-2a334e56.js";import{t as V,a as Fe,A as We}from"./button-255d95e9.js";import{D as Xe,n as Ze,S as H}from"./index-f28b3217.js";import{u as Ce}from"./index-d72c3122.js";import{T as me}from"./index-74275833.js";import{u as je}from"./useTranslation-f1e31b7f.js";import{P as qe,C as Ge}from"./index-166ce56c.js";import{I as Ve}from"./index-17f232aa.js";import{C as Ue,X as Qe,Y as Je,Z as Ye,_ as en}from"./CurrentUserStore-886fe293.js";const nn=e=>{const{componentCls:n,iconCls:r,calc:t}=e;return{[n]:Object.assign(Object.assign({},be(e)),{color:e.itemColor,fontSize:e.fontSize,[r]:{fontSize:e.iconFontSize},ol:{display:"flex",flexWrap:"wrap",margin:0,padding:0,listStyle:"none"},a:Object.assign({color:e.linkColor,transition:`color ${e.motionDurationMid}`,padding:`0 ${R(e.paddingXXS)}`,borderRadius:e.borderRadiusSM,height:e.fontHeight,display:"inline-block",marginInline:t(e.marginXXS).mul(-1).equal(),"&:hover":{color:e.linkHoverColor,backgroundColor:e.colorBgTextHover}},Me(e)),"li:last-child":{color:e.lastItemColor},[`${n}-separator`]:{marginInline:e.separatorMargin,color:e.separatorColor},[`${n}-link`]:{[`
          > ${r} + span,
          > ${r} + a
        `]:{marginInlineStart:e.marginXXS}},[`${n}-overlay-link`]:{borderRadius:e.borderRadiusSM,height:e.fontHeight,display:"inline-block",padding:`0 ${R(e.paddingXXS)}`,marginInline:t(e.marginXXS).mul(-1).equal(),[`> ${r}`]:{marginInlineStart:e.marginXXS,fontSize:e.fontSizeIcon},"&:hover":{color:e.linkHoverColor,backgroundColor:e.colorBgTextHover,a:{color:e.linkHoverColor}},a:{"&:hover":{backgroundColor:"transparent"}}},[`&${e.componentCls}-rtl`]:{direction:"rtl"}})}},tn=e=>({itemColor:e.colorTextDescription,lastItemColor:e.colorText,iconFontSize:e.fontSize,linkColor:e.colorTextDescription,linkHoverColor:e.colorText,separatorColor:e.colorTextDescription,separatorMargin:e.marginXS}),rn=ge("Breadcrumb",e=>{const n=he(e,{});return nn(n)},tn),we=e=>{let{children:n}=e;const{getPrefixCls:r}=f.useContext(X),t=r("breadcrumb");return f.createElement("li",{className:`${t}-separator`,"aria-hidden":"true"},n===""?n:n||"/")};we.__ANT_BREADCRUMB_SEPARATOR=!0;const ae=we;var an=globalThis&&globalThis.__rest||function(e,n){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)n.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(r[t[a]]=e[t[a]]);return r};function on(e,n){if(e.title===void 0||e.title===null)return null;const r=Object.keys(n).join("|");return typeof e.title=="object"?e.title:String(e.title).replace(new RegExp(`:(${r})`,"g"),(t,a)=>n[a]||t)}function _e(e,n,r,t){if(r==null)return null;const{className:a,onClick:s}=n,i=an(n,["className","onClick"]),d=Object.assign(Object.assign({},ye(i,{data:!0,aria:!0})),{onClick:s});return t!==void 0?f.createElement("a",Object.assign({},d,{className:N(`${e}-link`,a),href:t}),r):f.createElement("span",Object.assign({},d,{className:N(`${e}-link`,a)}),r)}function sn(e,n){return(t,a,s,i,d)=>{if(n)return n(t,a,s,i);const l=on(t,a);return _e(e,t,l,d)}}var re=globalThis&&globalThis.__rest||function(e,n){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)n.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(r[t[a]]=e[t[a]]);return r};const $e=e=>{const{prefixCls:n,separator:r="/",children:t,menu:a,overlay:s,dropdownProps:i,href:d}=e,h=(C=>{if(a||s){const c=Object.assign({},i);if(a){const b=a||{},{items:g}=b,p=re(b,["items"]);c.menu=Object.assign(Object.assign({},p),{items:g==null?void 0:g.map((m,u)=>{var{key:x,title:_,label:j,path:y}=m,P=re(m,["key","title","label","path"]);let w=j??_;return y&&(w=f.createElement("a",{href:`${d}${y}`},w)),Object.assign(Object.assign({},P),{key:x??u,label:w})})})}else s&&(c.overlay=s);return f.createElement(Ve,Object.assign({placement:"bottom"},c),f.createElement("span",{className:`${n}-overlay-link`},C,f.createElement(Xe,null)))}return C})(t);return h!=null?f.createElement(f.Fragment,null,f.createElement("li",null,h),r&&f.createElement(ae,null,r)):null},Se=e=>{const{prefixCls:n,children:r,href:t}=e,a=re(e,["prefixCls","children","href"]),{getPrefixCls:s}=f.useContext(X),i=s("breadcrumb",n);return f.createElement($e,Object.assign({},a,{prefixCls:i}),_e(i,a,r,t))};Se.__ANT_BREADCRUMB_ITEM=!0;const ln=Se;var pe=globalThis&&globalThis.__rest||function(e,n){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)n.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(r[t[a]]=e[t[a]]);return r};function cn(e){const{breadcrumbName:n,children:r}=e,t=pe(e,["breadcrumbName","children"]),a=Object.assign({title:n},t);return r&&(a.menu={items:r.map(s=>{var{breadcrumbName:i}=s,d=pe(s,["breadcrumbName"]);return Object.assign(Object.assign({},d),{title:i})})}),a}function dn(e,n){return f.useMemo(()=>e||(n?n.map(cn):null),[e,n])}var mn=globalThis&&globalThis.__rest||function(e,n){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)n.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(r[t[a]]=e[t[a]]);return r};const pn=(e,n)=>{if(n===void 0)return n;let r=(n||"").replace(/^\//,"");return Object.keys(e).forEach(t=>{r=r.replace(`:${t}`,e[t])}),r},oe=e=>{const{prefixCls:n,separator:r="/",style:t,className:a,rootClassName:s,routes:i,items:d,children:l,itemRender:h,params:C={}}=e,c=mn(e,["prefixCls","separator","style","className","rootClassName","routes","items","children","itemRender","params"]),{getPrefixCls:b,direction:g,breadcrumb:p}=f.useContext(X);let m;const u=b("breadcrumb",n),[x,_,j]=rn(u),y=dn(d,i),P=sn(u,h);if(y&&y.length>0){const $=[],I=d||i;m=y.map((v,S)=>{const{path:M,key:B,type:W,menu:T,overlay:k,onClick:D,className:U,separator:Q,dropdownProps:Pe}=v,J=pn(C,M);J!==void 0&&$.push(J);const le=B??S;if(W==="separator")return f.createElement(ae,{key:le},Q);const Y={},Ae=S===y.length-1;T?Y.menu=T:k&&(Y.overlay=k);let{href:ee}=v;return $.length&&J!==void 0&&(ee=`#/${$.join("/")}`),f.createElement($e,Object.assign({key:le},Y,ye(v,{data:!0,aria:!0}),{className:U,dropdownProps:Pe,href:ee,separator:Ae?"":r,onClick:D,prefixCls:u}),P(v,C,I,$,ee))})}else if(l){const $=V(l).length;m=V(l).map((I,v)=>{if(!I)return I;const S=v===$-1;return te(I,{separator:S?"":r,key:v})})}const w=N(u,p==null?void 0:p.className,{[`${u}-rtl`]:g==="rtl"},a,s,_,j),A=Object.assign(Object.assign({},p==null?void 0:p.style),t);return x(f.createElement("nav",Object.assign({className:w,style:A},c),f.createElement("ol",null,m)))};oe.Item=ln;oe.Separator=ae;const un=oe;var Ie=O.forwardRef(function(e,n){var r,t=e.prefixCls,a=e.forceRender,s=e.className,i=e.style,d=e.children,l=e.isActive,h=e.role,C=O.useState(l||a),c=ve(C,2),b=c[0],g=c[1];return O.useEffect(function(){(a||l)&&g(!0)},[a,l]),b?O.createElement("div",{ref:n,className:N("".concat(t,"-content"),(r={},L(r,"".concat(t,"-content-active"),l),L(r,"".concat(t,"-content-inactive"),!l),r),s),style:i,role:h},O.createElement("div",{className:"".concat(t,"-content-box")},d)):null});Ie.displayName="PanelContent";var fn=["showArrow","headerClass","isActive","onItemClick","forceRender","className","prefixCls","collapsible","accordion","panelKey","extra","header","expandIcon","openMotion","destroyInactivePanel","children"],Oe=O.forwardRef(function(e,n){var r,t,a=e.showArrow,s=a===void 0?!0:a,i=e.headerClass,d=e.isActive,l=e.onItemClick,h=e.forceRender,C=e.className,c=e.prefixCls,b=e.collapsible,g=e.accordion,p=e.panelKey,m=e.extra,u=e.header,x=e.expandIcon,_=e.openMotion,j=e.destroyInactivePanel,y=e.children,P=xe(e,fn),w=b==="disabled",A=b==="header",$=b==="icon",I=m!=null&&typeof m!="boolean",v=function(){l==null||l(p)},S=function(D){(D.key==="Enter"||D.keyCode===ce.ENTER||D.which===ce.ENTER)&&v()},M=typeof x=="function"?x(e):O.createElement("i",{className:"arrow"});M&&(M=O.createElement("div",{className:"".concat(c,"-expand-icon"),onClick:["header","icon"].includes(b)?v:void 0},M));var B=N((r={},L(r,"".concat(c,"-item"),!0),L(r,"".concat(c,"-item-active"),d),L(r,"".concat(c,"-item-disabled"),w),r),C),W=N(i,(t={},L(t,"".concat(c,"-header"),!0),L(t,"".concat(c,"-header-collapsible-only"),A),L(t,"".concat(c,"-icon-collapsible-only"),$),t)),T={className:W,"aria-expanded":d,"aria-disabled":w,onKeyDown:S};return!A&&!$&&(T.onClick=v,T.role=g?"tab":"button",T.tabIndex=w?-1:0),O.createElement("div",G({},P,{ref:n,className:B}),O.createElement("div",T,s&&M,O.createElement("span",{className:"".concat(c,"-header-text"),onClick:b==="header"?v:void 0},u),I&&O.createElement("div",{className:"".concat(c,"-extra")},m)),O.createElement(ke,G({visible:d,leavedClassName:"".concat(c,"-content-hidden")},_,{forceRender:h,removeOnLeave:j}),function(k,D){var U=k.className,Q=k.style;return O.createElement(Ie,{ref:D,prefixCls:c,className:U,style:Q,isActive:d,forceRender:h,role:g?"tabpanel":void 0},y)}))}),gn=["children","label","key","collapsible","onItemClick","destroyInactivePanel"],hn=function(n,r){var t=r.prefixCls,a=r.accordion,s=r.collapsible,i=r.destroyInactivePanel,d=r.onItemClick,l=r.activeKey,h=r.openMotion,C=r.expandIcon;return n.map(function(c,b){var g=c.children,p=c.label,m=c.key,u=c.collapsible,x=c.onItemClick,_=c.destroyInactivePanel,j=xe(c,gn),y=String(m??b),P=u??s,w=_??i,A=function(v){P!=="disabled"&&(d(v),x==null||x(v))},$=!1;return a?$=l[0]===y:$=l.indexOf(y)>-1,O.createElement(Oe,G({},j,{prefixCls:t,key:y,panelKey:y,isActive:$,accordion:a,openMotion:h,expandIcon:C,header:p,collapsible:P,onItemClick:A,destroyInactivePanel:w}),g)})},bn=function(n,r,t){if(!n)return null;var a=t.prefixCls,s=t.accordion,i=t.collapsible,d=t.destroyInactivePanel,l=t.onItemClick,h=t.activeKey,C=t.openMotion,c=t.expandIcon,b=n.key||String(r),g=n.props,p=g.header,m=g.headerClass,u=g.destroyInactivePanel,x=g.collapsible,_=g.onItemClick,j=!1;s?j=h[0]===b:j=h.indexOf(b)>-1;var y=x??i,P=function($){y!=="disabled"&&(l($),_==null||_($))},w={key:b,panelKey:b,header:p,headerClass:m,isActive:j,prefixCls:a,destroyInactivePanel:u??d,openMotion:C,accordion:s,children:n.props.children,onItemClick:P,expandIcon:c,collapsible:y};return typeof n.type=="string"?n:(Object.keys(w).forEach(function(A){typeof w[A]>"u"&&delete w[A]}),O.cloneElement(n,w))};function vn(e,n,r){return Array.isArray(e)?hn(e,r):V(n).map(function(t,a){return bn(t,a,r)})}function xn(e){var n=e;if(!Array.isArray(n)){var r=Be(n);n=r==="number"||r==="string"?[n]:[]}return n.map(function(t){return String(t)})}var yn=O.forwardRef(function(e,n){var r=e.prefixCls,t=r===void 0?"rc-collapse":r,a=e.destroyInactivePanel,s=a===void 0?!1:a,i=e.style,d=e.accordion,l=e.className,h=e.children,C=e.collapsible,c=e.openMotion,b=e.expandIcon,g=e.activeKey,p=e.defaultActiveKey,m=e.onChange,u=e.items,x=N(t,l),_=ze([],{value:g,onChange:function(I){return m==null?void 0:m(I)},defaultValue:p,postState:xn}),j=ve(_,2),y=j[0],P=j[1],w=function(I){return P(function(){if(d)return y[0]===I?[]:[I];var v=y.indexOf(I),S=v>-1;return S?y.filter(function(M){return M!==I}):[].concat(Te(y),[I])})};Re(!h,"[rc-collapse] `children` will be removed in next major version. Please use `items` instead.");var A=vn(u,h,{prefixCls:t,accordion:d,openMotion:c,expandIcon:b,collapsible:C,destroyInactivePanel:s,onItemClick:w,activeKey:y});return O.createElement("div",{ref:n,className:x,style:i,role:d?"tablist":void 0},A)});const se=Object.assign(yn,{Panel:Oe});se.Panel;const Cn=f.forwardRef((e,n)=>{const{getPrefixCls:r}=f.useContext(X),{prefixCls:t,className:a,showArrow:s=!0}=e,i=r("collapse",t),d=N({[`${i}-no-arrow`]:!s},a);return f.createElement(se.Panel,Object.assign({ref:n},e,{prefixCls:i,className:d}))}),jn=Cn,wn=e=>{const{componentCls:n,contentBg:r,padding:t,headerBg:a,headerPadding:s,collapseHeaderPaddingSM:i,collapseHeaderPaddingLG:d,collapsePanelBorderRadius:l,lineWidth:h,lineType:C,colorBorder:c,colorText:b,colorTextHeading:g,colorTextDisabled:p,fontSizeLG:m,lineHeight:u,lineHeightLG:x,marginSM:_,paddingSM:j,paddingLG:y,paddingXS:P,motionDurationSlow:w,fontSizeIcon:A,contentPadding:$,fontHeight:I,fontHeightLG:v}=e,S=`${R(h)} ${C} ${c}`;return{[n]:Object.assign(Object.assign({},be(e)),{backgroundColor:a,border:S,borderBottom:0,borderRadius:l,"&-rtl":{direction:"rtl"},[`& > ${n}-item`]:{borderBottom:S,"&:last-child":{[`
            &,
            & > ${n}-header`]:{borderRadius:`0 0 ${R(l)} ${R(l)}`}},[`> ${n}-header`]:{position:"relative",display:"flex",flexWrap:"nowrap",alignItems:"flex-start",padding:s,color:g,lineHeight:u,cursor:"pointer",transition:`all ${w}, visibility 0s`,[`> ${n}-header-text`]:{flex:"auto"},"&:focus":{outline:"none"},[`${n}-expand-icon`]:{height:I,display:"flex",alignItems:"center",paddingInlineEnd:_},[`${n}-arrow`]:Object.assign(Object.assign({},De()),{fontSize:A,svg:{transition:`transform ${w}`}}),[`${n}-header-text`]:{marginInlineEnd:"auto"}},[`${n}-icon-collapsible-only`]:{cursor:"unset",[`${n}-expand-icon`]:{cursor:"pointer"}}},[`${n}-content`]:{color:b,backgroundColor:r,borderTop:S,[`& > ${n}-content-box`]:{padding:$},"&-hidden":{display:"none"}},"&-small":{[`> ${n}-item`]:{[`> ${n}-header`]:{padding:i,paddingInlineStart:P,[`> ${n}-expand-icon`]:{marginInlineStart:e.calc(j).sub(P).equal()}},[`> ${n}-content > ${n}-content-box`]:{padding:j}}},"&-large":{[`> ${n}-item`]:{fontSize:m,lineHeight:x,[`> ${n}-header`]:{padding:d,paddingInlineStart:t,[`> ${n}-expand-icon`]:{height:v,marginInlineStart:e.calc(y).sub(t).equal()}},[`> ${n}-content > ${n}-content-box`]:{padding:y}}},[`${n}-item:last-child`]:{[`> ${n}-content`]:{borderRadius:`0 0 ${R(l)} ${R(l)}`}},[`& ${n}-item-disabled > ${n}-header`]:{"\n          &,\n          & > .arrow\n        ":{color:p,cursor:"not-allowed"}},[`&${n}-icon-position-end`]:{[`& > ${n}-item`]:{[`> ${n}-header`]:{[`${n}-expand-icon`]:{order:1,paddingInlineEnd:0,paddingInlineStart:_}}}}})}},_n=e=>{const{componentCls:n}=e,r=`> ${n}-item > ${n}-header ${n}-arrow svg`;return{[`${n}-rtl`]:{[r]:{transform:"rotate(180deg)"}}}},$n=e=>{const{componentCls:n,headerBg:r,paddingXXS:t,colorBorder:a}=e;return{[`${n}-borderless`]:{backgroundColor:r,border:0,[`> ${n}-item`]:{borderBottom:`1px solid ${a}`},[`
        > ${n}-item:last-child,
        > ${n}-item:last-child ${n}-header
      `]:{borderRadius:0},[`> ${n}-item:last-child`]:{borderBottom:0},[`> ${n}-item > ${n}-content`]:{backgroundColor:"transparent",borderTop:0},[`> ${n}-item > ${n}-content > ${n}-content-box`]:{paddingTop:t}}}},Sn=e=>{const{componentCls:n,paddingSM:r}=e;return{[`${n}-ghost`]:{backgroundColor:"transparent",border:0,[`> ${n}-item`]:{borderBottom:0,[`> ${n}-content`]:{backgroundColor:"transparent",border:0,[`> ${n}-content-box`]:{paddingBlock:r}}}}}},In=e=>({headerPadding:`${e.paddingSM}px ${e.padding}px`,headerBg:e.colorFillAlter,contentPadding:`${e.padding}px 16px`,contentBg:e.colorBgContainer}),On=ge("Collapse",e=>{const n=he(e,{collapseHeaderPaddingSM:`${R(e.paddingXS)} ${R(e.paddingSM)}`,collapseHeaderPaddingLG:`${R(e.padding)} ${R(e.paddingLG)}`,collapsePanelBorderRadius:e.borderRadiusLG});return[wn(n),$n(n),Sn(n),_n(n),Ze(n)]},In),Nn=f.forwardRef((e,n)=>{const{getPrefixCls:r,direction:t,collapse:a}=f.useContext(X),{prefixCls:s,className:i,rootClassName:d,style:l,bordered:h=!0,ghost:C,size:c,expandIconPosition:b="start",children:g,expandIcon:p}=e,m=Fe(v=>{var S;return(S=c??v)!==null&&S!==void 0?S:"middle"}),u=r("collapse",s),x=r(),[_,j,y]=On(u),P=f.useMemo(()=>b==="left"?"start":b==="right"?"end":b,[b]),w=function(){let v=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const S=p?p(v):f.createElement(Ee,{rotate:v.isActive?90:void 0});return te(S,()=>({className:N(S.props.className,`${u}-arrow`)}))},A=N(`${u}-icon-position-${P}`,{[`${u}-borderless`]:!h,[`${u}-rtl`]:t==="rtl",[`${u}-ghost`]:!!C,[`${u}-${m}`]:m!=="middle"},a==null?void 0:a.className,i,d,j,y),$=Object.assign(Object.assign({},Le(x)),{motionAppear:!1,leavedClassName:`${u}-content-hidden`}),I=f.useMemo(()=>g?V(g).map((v,S)=>{var M,B;if(!((M=v.props)===null||M===void 0)&&M.disabled){const W=(B=v.key)!==null&&B!==void 0?B:String(S),{disabled:T,collapsible:k}=v.props,D=Object.assign(Object.assign({},ie(v.props,["disabled"])),{key:W,collapsible:k??(T?"disabled":void 0)});return te(v,D)}return v}):null,[g]);return _(f.createElement(se,Object.assign({ref:n,openMotion:$},ie(e,["rootClassName"]),{expandIcon:w,prefixCls:u,className:A,style:Object.assign(Object.assign({},a==null?void 0:a.style),l)}),I))}),Ne=Object.assign(Nn,{Panel:jn});var Pn={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M872 474H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h720c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8z"}}]},name:"minus",theme:"outlined"};const An=Pn;var En=function(n,r){return f.createElement(We,G({},n,{ref:r,icon:An}))};const Mn=f.forwardRef(En),kn="_wrapper_71qi7_1",Rn="_currentStep_71qi7_11",Bn="_steps_71qi7_29",Tn="_separator_71qi7_36",Dn="_step_71qi7_29",zn="_active_71qi7_49",Ln="_none_71qi7_65",K={wrapper:kn,currentStep:Rn,steps:Bn,separator:Tn,step:Dn,active:zn,none:Ln},Hn=({steps:e,currentStep:n,numbers:r=!0,onChange:t})=>{const a=Ce();return o.jsxs("div",{className:K.wrapper,children:[r&&o.jsxs("div",{className:K.currentStep,children:[n+1,"/",e.length]}),o.jsx(un,{separator:o.jsx("span",{className:N(K.separator,{[K.none]:!a.md})}),items:e.map((s,i)=>({title:o.jsxs("span",{className:N(K.step,{[K.active]:n>=i}),onClick:()=>t==null?void 0:t(i),children:[r&&i+1+"."," ",s]})}))})]})},Kn="_tag_n32m3_1",Fn="_inner_n32m3_6",ne={tag:Kn,inner:Fn},ue=({tag:e,nested:n})=>o.jsxs(me,{className:ne.tag,color:e.color,children:[e.title,n.map(r=>o.jsx(me,{className:N(ne.tag,ne.inner),color:r.color,children:r.title},r.key))]}),Z={measure:["#470D6999","#470D6999"],dimension:["#A31BCB80","#A31BCB80"],timeDimension:["#4386FA","#470D6999"],segment:["#33679199","#33679199"],order:["#892C6C99","#892C6C99"]},fe=e=>o.jsx(o.Fragment,{children:o.jsx("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"7",height:"10",fill:"none"},e,{children:o.jsx("path",{fill:"#fff",d:"M2.997 9.5V2.498l-1.74 1.74-.618-.612L3.501.764l2.856 2.862-.618.612L4.005 2.51V9.5H2.997Z"})}))}),Wn="_arrowDown_9sksp_1",Xn={arrowDown:Wn},z=({content:e,type:n,wrap:r=!1,direction:t="horizontal"})=>{const a=s=>{switch(s){case"asc":return o.jsx(fe,{});case"desc":return o.jsx(fe,{className:Xn.arrowDown});default:return s}};return e?o.jsx(H,{size:10,wrap:r,direction:t,children:Array.isArray(e)?e==null?void 0:e.map(s=>{let i=[];return typeof s=="string"?i=s==null?void 0:s.split("."):n==="order"?i=[s.id,s.desc?"asc":"desc"]:i=`${(s==null?void 0:s.dimension)||""}.${(s==null?void 0:s.granularity)||""}`.split("."),o.jsx(ue,{tag:{title:i[0],color:Z[n][0]},nested:i.slice(1).map((d,l)=>({title:a(d),color:Z[n][1],key:l}))},JSON.stringify(s))}):Object.entries(e).map(([s,i])=>{const d=`${s}.${i}`.split(".");return o.jsx(ue,{tag:{title:d[0],color:Z[n][0]},nested:d.slice(1).map((l,h)=>({title:a(l),color:Z[n][1],key:h}))},JSON.stringify(s))})}):null},Zn="_collapse_1nsdk_1",qn="_headerWrapperDots_1nsdk_4",Gn="_header_1nsdk_4",Vn="_collapseInner_1nsdk_18",Un="_panel_1nsdk_21",Qn="_tagLabel_1nsdk_26",Jn="_collapseDisabled_1nsdk_42",Yn="_collapseBtn_1nsdk_46",E={collapse:Zn,headerWrapperDots:qn,header:Gn,collapseInner:Vn,panel:Un,tagLabel:Qn,collapseDisabled:Jn,collapseBtn:Yn},{Panel:et}=Ne,$t=({measures:e,dimensions:n,segments:r,timeDimensions:t,order:a,withButton:s=!0})=>{const{t:i}=je(["alerts","common"]),l=Ce().md===!1,[h,C]=f.useState(),c=m=>Array.isArray(m)?m.length>0:!!m,g=(m=>m.reduce((u,x)=>x!=null&&x.length?u+x.length:u,0))([e,n,a,t,r])>=2&&!l,p=h==="1";return o.jsx(Ne,{expandIcon:({isActive:m})=>s&&g&&o.jsx(He,{className:E.collapseBtn,size:"small",children:m?o.jsx(Mn,{}):o.jsx(qe,{})}),bordered:!1,className:N(E.collapse,!g&&E.collapseDisabled),activeKey:l?"1":h,onChange:m=>C(m[0]),children:o.jsx(et,{className:N(E.panel),collapsible:g?void 0:"disabled",header:l?null:o.jsx("div",{className:N(!h&&!l&&!g&&E.headerWrapperDots),children:o.jsxs(H,{className:E.header,size:10,align:"center",children:[o.jsx(z,{content:e,type:"measure"}),!h&&o.jsxs(o.Fragment,{children:[(c(n)||c(t))&&o.jsxs(o.Fragment,{children:[o.jsx("span",{className:E.tagLabel,children:i("common:words.by")}),o.jsx(z,{content:n,type:"dimension"}),o.jsx(z,{content:t,type:"timeDimension"})]}),c(r)&&o.jsxs(o.Fragment,{children:[o.jsx("span",{className:E.tagLabel,children:i("common:words.in")}),o.jsx(z,{content:r,type:"segment"})]}),c(a)&&o.jsxs(o.Fragment,{children:[o.jsx("span",{className:E.tagLabel,children:i("common:words.ordered_by")}),o.jsx(z,{content:a,type:"order"})]})]})]})}),children:o.jsxs(H,{className:E.collapseInner,direction:"vertical",size:10,children:[(c(n)||c(t))&&o.jsxs(H,{size:9,wrap:!0,children:[o.jsx("span",{className:E.tagLabel,children:i("common:words.by")}),o.jsx(z,{content:n,type:"dimension",wrap:p,direction:l?"vertical":"horizontal"}),o.jsx(z,{content:t,type:"timeDimension",wrap:p,direction:l?"vertical":"horizontal"})]}),c(r)&&o.jsxs(H,{size:9,wrap:!0,children:[o.jsx("span",{className:E.tagLabel,children:i("common:words.in")}),o.jsx(z,{content:r,type:"segment",wrap:p,direction:l?"vertical":"horizontal"})]}),c(a)&&o.jsxs(H,{size:9,wrap:!0,children:[o.jsx("span",{className:E.tagLabel,children:i("common:words.ordered_by")}),o.jsx(z,{content:a,type:"order",wrap:p,direction:l?"vertical":"horizontal"})]})]})},"1")})},St="https://www.dlytica.com/",It=e=>o.jsx(o.Fragment,{children:o.jsx("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"18",height:"18",fill:"none"},e,{children:o.jsxs("g",{stroke:"#A5A5A5",strokeWidth:"1.125",children:[o.jsx("rect",{width:"15",height:"15",x:"1.502",y:"1.5",rx:"7.5"}),o.jsx("g",{strokeLinecap:"round",strokeLinejoin:"round",children:o.jsx("path",{d:"M9.377 12.75v-4.5M7.877 8.25h1.5M9.377 6v-.75"})})]})}))}),Ot=e=>o.jsx(o.Fragment,{children:o.jsx("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"none"},e,{children:o.jsxs("g",{strokeWidth:"1.125",children:[o.jsx("path",{stroke:"#470D69",d:"M13.79 1.07a.9.9 0 0 1 1.139 1.138l-3.793 11.377a.9.9 0 0 1-1.636.16L7.18 9.664a2.25 2.25 0 0 0-.844-.843L2.253 6.498a.9.9 0 0 1 .16-1.636L13.791 1.07Z"}),o.jsx("path",{stroke:"#A5A5A5",strokeLinecap:"round",strokeLinejoin:"round",d:"m8.588 7.411-1.5 1.5"})]})}))}),nt="_wrapper_1bb1a_1",tt="_card_1bb1a_4",rt="_iconWrapper_1bb1a_12",at="_active_1bb1a_28",ot="_icon_1bb1a_12",st="_title_1bb1a_35",F={wrapper:nt,card:tt,iconWrapper:rt,active:at,icon:ot,title:st},lt=({width:e,title:n,icon:r,onClick:t,active:a=!1})=>o.jsx("div",{className:F.wrapper,style:{width:e},children:o.jsxs(Ge,{className:F.card,bodyStyle:{padding:10},style:{background:"#F9F9F9",position:"static"},onClick:()=>t==null?void 0:t(n),hoverable:!0,children:[o.jsx("div",{className:N(F.iconWrapper,{[F.active]:a}),children:r}),o.jsx("span",{className:N(F.title,{[F.active]:a}),children:n})]})}),it="_wrapper_glb91_1",ct="_title_glb91_4",q={wrapper:it,title:ct},Nt=({type:e="alert",options:n,initialValue:r,onSubmit:t})=>{const{t:a}=je(["common"]),[s,i]=f.useState(r),d=l=>{i(l),l&&t(l)};return o.jsxs(H,{className:q.wrapper,direction:"vertical",size:24,"data-testid":"alert-type-selection",children:[o.jsx(de,{children:o.jsx("div",{className:q.header,children:o.jsx(Hn,{numbers:!1,steps:[a(e==="alert"?"words.alerts":"words.reports"),a("words.new")],currentStep:0})})}),o.jsx(de,{className:q.tiles,gutter:[16,16],children:n.map(l=>o.jsx(Ke,{className:q.tile,children:o.jsx(lt,{title:l.name,icon:l.icon,active:(s==null?void 0:s.value)===l.value,onClick:()=>d(l)})},l.name))})]})},Pt=({alertId:e,explorationId:n})=>{const{currentTeam:r}=Ue(),[t,a]=Qe(),[s,i]=Je(),[d,l]=Ye(),[h,C]=en(),c=f.useCallback(p=>{const m={name:p.name,schedule:p.schedule,trigger_config:p.triggerConfig,delivery_type:p.type,delivery_config:p.deliveryConfig,exploration_id:n,team_id:r==null?void 0:r.id};a({object:m})},[n,r==null?void 0:r.id,a]),b=f.useCallback(p=>{const m={name:p.name,schedule:p.schedule,trigger_config:p.triggerConfig,delivery_type:p.type,delivery_config:p.deliveryConfig};i({pk_columns:{id:e},_set:m})},[e,i]);return{mutations:{createMutationData:t,execInsertMutation:a,updateMutationData:s,execUpdateMutation:i,deleteMutationData:d,execDeleteMutation:l,sendTestMutationData:h,execSendTestMutation:C},createAlert:c,updateAlert:b,onSendTest:p=>{const{deliveryConfig:m,exploration:u,type:x,name:_}=p,j={explorationId:(u==null?void 0:u.id)||n,deliveryType:x,deliveryConfig:m,name:_};C(j)}}},dt=e=>o.jsx(o.Fragment,{children:o.jsx("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"31",height:"29",fill:"none"},e,{children:o.jsx("path",{fill:"#470D69",fillRule:"evenodd",d:"M15.81 10.536a2.809 2.809 0 0 1-2.989-2.802 2.809 2.809 0 0 1 2.808-2.807 2.809 2.809 0 0 1 2.18 4.576l3.103 5.705a6.986 6.986 0 0 1 9.37 6.564 6.988 6.988 0 0 1-10.824 5.838 1 1 0 0 1-.186-1.52c.002-.003.005-.005.009-.005a1.05 1.05 0 0 1 1.333-.169 4.938 4.938 0 1 0 2.684-9.08c-.943 0-2.283.412-3.088.923a.361.361 0 0 1-.534-.116l-3.866-7.107Zm-1.289 12.136a6.987 6.987 0 0 1-10.37 4.834 6.988 6.988 0 0 1 .356-12.294 1.001 1.001 0 0 1 1.41.6c.001.002.002.005 0 .009a1.05 1.05 0 0 1-.52 1.239 4.937 4.937 0 1 0 6.522 6.865c.471-.817.784-2.184.744-3.136a.36.36 0 0 1 .367-.405l8.088.206a2.809 2.809 0 0 1 3.92-1.188 2.809 2.809 0 0 1-2.807 4.863 2.795 2.795 0 0 1-1.218-1.428l-6.492-.165Zm-3.39-9.582a6.988 6.988 0 0 1 1-11.398 6.988 6.988 0 0 1 10.468 6.456 1.001 1.001 0 0 1-1.224.922c-.003-.001-.006-.002-.009-.005a1.05 1.05 0 0 1-.812-1.07 4.936 4.936 0 0 0-7.4-4.53 4.94 4.94 0 0 0-1.807 6.745c.472.817 1.5 1.771 2.344 2.213a.36.36 0 0 1 .167.52l-4.222 6.902a2.81 2.81 0 0 1-.932 3.99 2.809 2.809 0 0 1-3.835-1.029 2.809 2.809 0 0 1 2.873-4.176l3.39-5.54Z",clipRule:"evenodd"})}))}),mt=e=>o.jsx(o.Fragment,{children:o.jsxs("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"29",height:"29",fill:"none"},e,{children:[o.jsx("path",{fill:"#36C5F0",d:"M10.386.776A2.803 2.803 0 0 0 7.59 3.572a2.803 2.803 0 0 0 2.796 2.796h2.796V3.572A2.791 2.791 0 0 0 10.386.776Zm0 7.45H2.954a2.803 2.803 0 0 0-2.796 2.796 2.803 2.803 0 0 0 2.796 2.797h7.45a2.803 2.803 0 0 0 2.797-2.796 2.82 2.82 0 0 0-2.815-2.797Z"}),o.jsx("path",{fill:"#2EB67D",d:"M28.084 11.023a2.803 2.803 0 0 0-2.796-2.797 2.803 2.803 0 0 0-2.797 2.796v2.797h2.797c1.538.018 2.796-1.239 2.796-2.796Zm-7.45 0v-7.47A2.803 2.803 0 0 0 17.837.757a2.803 2.803 0 0 0-2.796 2.796v7.47a2.803 2.803 0 0 0 2.796 2.796c1.558.018 2.797-1.239 2.797-2.796Z"}),o.jsx("path",{fill:"#ECB22E",d:"M17.837 28.757a2.803 2.803 0 0 0 2.797-2.796 2.803 2.803 0 0 0-2.797-2.796h-2.796v2.796a2.803 2.803 0 0 0 2.796 2.796Zm0-7.47h7.45a2.803 2.803 0 0 0 2.797-2.795 2.803 2.803 0 0 0-2.796-2.797h-7.45a2.803 2.803 0 0 0-2.797 2.797 2.803 2.803 0 0 0 2.796 2.796Z"}),o.jsx("path",{fill:"#E01E5A",d:"M.158 18.492a2.803 2.803 0 0 0 2.796 2.796 2.803 2.803 0 0 0 2.797-2.796v-2.797H2.954a2.791 2.791 0 0 0-2.796 2.797Zm7.45 0v7.469a2.803 2.803 0 0 0 2.797 2.796 2.803 2.803 0 0 0 2.796-2.796v-7.47a2.803 2.803 0 0 0-2.796-2.796 2.791 2.791 0 0 0-2.796 2.797Z"})]}))}),pt=e=>o.jsx(o.Fragment,{children:o.jsxs("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"29",height:"24",fill:"none"},e,{children:[o.jsx("path",{fill:"#A31BCB",fillRule:"evenodd",d:"M7.99.09A7.667 7.667 0 0 0 .325 7.758v8a7.667 7.667 0 0 0 7.667 7.667h13.333a7.667 7.667 0 0 0 7.667-7.667v-8A7.667 7.667 0 0 0 21.324.091H7.991Z",clipRule:"evenodd",opacity:".3"}),o.jsx("path",{stroke:"#A31BCB",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"m6.658 7.757 6.4 4.8a2.667 2.667 0 0 0 3.2 0l6.4-4.8"})]}))}),At=[{name:"Webhook",icon:o.jsx(dt,{}),value:"WEBHOOK"},{name:"Slack",icon:o.jsx(mt,{}),value:"SLACK"},{name:"Mail",icon:o.jsx(pt,{}),value:"EMAIL"}];export{Nt as A,Ne as C,lt as F,ue as N,$t as Q,Hn as S,St as W,Z as a,It as b,Ot as c,At as d,Pt as u};
