import{F as a,c as p}from"./index-f28b3217.js";import{j as t,c as s}from"./index-31f541c4.js";import{C as c}from"./genName-6cc4e155.js";const i="_input_f1r2s_1",l="_icon_f1r2s_6",x="_textareaWrapper_f1r2s_10",_="_textareaCopy_f1r2s_13",m="_label_f1r2s_18",e={input:i,icon:l,textareaWrapper:x,textareaCopy:_,label:m},y=({layout:o="vertical",value:r,label:n})=>t.jsx(a,{layout:o,children:t.jsxs(a.Item,{className:s(e.textareaWrapper,e.label),label:n,children:[t.jsx(p.TextArea,{className:e.input,style:{resize:"none"},autoSize:!0,value:r,readOnly:!0}),t.jsx(c,{className:s(e.icon,e.textareaCopy),onClick:()=>navigator.clipboard.writeText(r)})]})});export{y as C};
