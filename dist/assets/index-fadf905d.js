import{B as o,T as n}from"./index-2a334e56.js";import{j as t}from"./index-31f541c4.js";import{L as a}from"./react-venders-3a9fd7ec.js";import{E as c}from"./paths-1d44e380.js";import{u as i}from"./useTranslation-f1e31b7f.js";const l="/assets/no-alerts-7e9b9cca.png",m="_wrapper_1f9ck_1",p="_img_1f9ck_11",x="_text_1f9ck_14",_="_btn_1f9ck_17",r={wrapper:m,img:p,text:x,btn:_},{Title:f,Text:g}=n,b=({type:e="alerts"})=>{const{t:s}=i(["alerts","reports","common"]);return t.jsxs("div",{className:r.wrapper,children:[t.jsx("img",{className:r.img,src:l,alt:""}),t.jsx(f,{level:4,children:s(e==="alerts"?"not_found.title":"reports:not.title")}),t.jsxs(g,{className:r.text,children:[" ",s(e==="alerts"?"not_found.text":"reports:not.text")]}),t.jsx(o,{size:"large",type:"primary",children:t.jsx(a,{to:c,children:s("not_found.explore_btn")})})]})};export{b as N};
