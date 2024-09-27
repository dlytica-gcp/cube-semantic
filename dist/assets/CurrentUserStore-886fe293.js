import{q as pe,s as Be,t as je,m as C,v as lt,w as pt,x as _e,y as he,z as H,A as _t,B as ht,C as X,D as ft,g as mt,r as ne}from"./react-venders-3a9fd7ec.js";import{b as ye}from"./tslib.es6-5f87f175.js";import{D as A,E as k,F as _}from"./urql.es-e4ed66a8.js";import{c as yt}from"./index-801816c4.js";function Z(e,t){if(!!!e)throw new Error(t)}function bt(e){return typeof e=="object"&&e!==null}function Et(e,t){if(!!!e)throw new Error(t??"Unexpected invariant triggered.")}const Tt=/\r\n|[\n\r]/g;function se(e,t){let r=0,s=1;for(const n of e.body.matchAll(Tt)){if(typeof n.index=="number"||Et(!1),n.index>=t)break;r=n.index+n[0].length,s+=1}return{line:s,column:t+1-r}}function gt(e){return Ve(e.source,se(e.source,e.start))}function Ve(e,t){const r=e.locationOffset.column-1,s="".padStart(r)+e.body,n=t.line-1,i=e.locationOffset.line-1,o=t.line+i,u=t.line===1?r:0,l=t.column+u,p=`${e.name}:${o}:${l}
`,h=s.split(/\r\n|[\n\r]/g),b=h[n];if(b.length>120){const f=Math.floor(l/80),v=l%80,m=[];for(let T=0;T<b.length;T+=80)m.push(b.slice(T,T+80));return p+be([[`${o} |`,m[0]],...m.slice(1,f+1).map(T=>["|",T]),["|","^".padStart(v)],["|",m[f+1]]])}return p+be([[`${o-1} |`,h[n-1]],[`${o} |`,b],["|","^".padStart(l)],[`${o+1} |`,h[n+1]]])}function be(e){const t=e.filter(([s,n])=>n!==void 0),r=Math.max(...t.map(([s])=>s.length));return t.map(([s,n])=>s.padStart(r)+(n?" "+n:"")).join(`
`)}function vt(e){const t=e[0];return t==null||"kind"in t||"length"in t?{nodes:t,source:e[1],positions:e[2],path:e[3],originalError:e[4],extensions:e[5]}:t}class fe extends Error{constructor(t,...r){var s,n,i;const{nodes:o,source:u,positions:l,path:p,originalError:h,extensions:b}=vt(r);super(t),this.name="GraphQLError",this.path=p??void 0,this.originalError=h??void 0,this.nodes=Ee(Array.isArray(o)?o:o?[o]:void 0);const f=Ee((s=this.nodes)===null||s===void 0?void 0:s.map(m=>m.loc).filter(m=>m!=null));this.source=u??(f==null||(n=f[0])===null||n===void 0?void 0:n.source),this.positions=l??(f==null?void 0:f.map(m=>m.start)),this.locations=l&&u?l.map(m=>se(u,m)):f==null?void 0:f.map(m=>se(m.source,m.start));const v=bt(h==null?void 0:h.extensions)?h==null?void 0:h.extensions:void 0;this.extensions=(i=b??v)!==null&&i!==void 0?i:Object.create(null),Object.defineProperties(this,{message:{writable:!0,enumerable:!0},name:{enumerable:!1},nodes:{enumerable:!1},source:{enumerable:!1},positions:{enumerable:!1},originalError:{enumerable:!1}}),h!=null&&h.stack?Object.defineProperty(this,"stack",{value:h.stack,writable:!0,configurable:!0}):Error.captureStackTrace?Error.captureStackTrace(this,fe):Object.defineProperty(this,"stack",{value:Error().stack,writable:!0,configurable:!0})}get[Symbol.toStringTag](){return"GraphQLError"}toString(){let t=this.message;if(this.nodes)for(const r of this.nodes)r.loc&&(t+=`

`+gt(r.loc));else if(this.source&&this.locations)for(const r of this.locations)t+=`

`+Ve(this.source,r);return t}toJSON(){const t={message:this.message};return this.locations!=null&&(t.locations=this.locations),this.path!=null&&(t.path=this.path),this.extensions!=null&&Object.keys(this.extensions).length>0&&(t.extensions=this.extensions),t}}function Ee(e){return e===void 0||e.length===0?void 0:e}function g(e,t,r){return new fe(`Syntax Error: ${r}`,{source:e,positions:[t]})}class At{constructor(t,r,s){this.start=t.start,this.end=r.end,this.startToken=t,this.endToken=r,this.source=s}get[Symbol.toStringTag](){return"Location"}toJSON(){return{start:this.start,end:this.end}}}class Ge{constructor(t,r,s,n,i,o){this.kind=t,this.start=r,this.end=s,this.line=n,this.column=i,this.value=o,this.prev=null,this.next=null}get[Symbol.toStringTag](){return"Token"}toJSON(){return{kind:this.kind,value:this.value,line:this.line,column:this.column}}}const It={Name:[],Document:["definitions"],OperationDefinition:["name","variableDefinitions","directives","selectionSet"],VariableDefinition:["variable","type","defaultValue","directives"],Variable:["name"],SelectionSet:["selections"],Field:["alias","name","arguments","directives","selectionSet"],Argument:["name","value"],FragmentSpread:["name","directives"],InlineFragment:["typeCondition","directives","selectionSet"],FragmentDefinition:["name","variableDefinitions","typeCondition","directives","selectionSet"],IntValue:[],FloatValue:[],StringValue:[],BooleanValue:[],NullValue:[],EnumValue:[],ListValue:["values"],ObjectValue:["fields"],ObjectField:["name","value"],Directive:["name","arguments"],NamedType:["name"],ListType:["type"],NonNullType:["type"],SchemaDefinition:["description","directives","operationTypes"],OperationTypeDefinition:["type"],ScalarTypeDefinition:["description","name","directives"],ObjectTypeDefinition:["description","name","interfaces","directives","fields"],FieldDefinition:["description","name","arguments","type","directives"],InputValueDefinition:["description","name","type","defaultValue","directives"],InterfaceTypeDefinition:["description","name","interfaces","directives","fields"],UnionTypeDefinition:["description","name","directives","types"],EnumTypeDefinition:["description","name","directives","values"],EnumValueDefinition:["description","name","directives"],InputObjectTypeDefinition:["description","name","directives","fields"],DirectiveDefinition:["description","name","arguments","locations"],SchemaExtension:["directives","operationTypes"],ScalarTypeExtension:["name","directives"],ObjectTypeExtension:["name","interfaces","directives","fields"],InterfaceTypeExtension:["name","interfaces","directives","fields"],UnionTypeExtension:["name","directives","types"],EnumTypeExtension:["name","directives","values"],InputObjectTypeExtension:["name","directives","fields"]};new Set(Object.keys(It));var S;(function(e){e.QUERY="query",e.MUTATION="mutation",e.SUBSCRIPTION="subscription"})(S||(S={}));var ie;(function(e){e.QUERY="QUERY",e.MUTATION="MUTATION",e.SUBSCRIPTION="SUBSCRIPTION",e.FIELD="FIELD",e.FRAGMENT_DEFINITION="FRAGMENT_DEFINITION",e.FRAGMENT_SPREAD="FRAGMENT_SPREAD",e.INLINE_FRAGMENT="INLINE_FRAGMENT",e.VARIABLE_DEFINITION="VARIABLE_DEFINITION",e.SCHEMA="SCHEMA",e.SCALAR="SCALAR",e.OBJECT="OBJECT",e.FIELD_DEFINITION="FIELD_DEFINITION",e.ARGUMENT_DEFINITION="ARGUMENT_DEFINITION",e.INTERFACE="INTERFACE",e.UNION="UNION",e.ENUM="ENUM",e.ENUM_VALUE="ENUM_VALUE",e.INPUT_OBJECT="INPUT_OBJECT",e.INPUT_FIELD_DEFINITION="INPUT_FIELD_DEFINITION"})(ie||(ie={}));var d;(function(e){e.NAME="Name",e.DOCUMENT="Document",e.OPERATION_DEFINITION="OperationDefinition",e.VARIABLE_DEFINITION="VariableDefinition",e.SELECTION_SET="SelectionSet",e.FIELD="Field",e.ARGUMENT="Argument",e.FRAGMENT_SPREAD="FragmentSpread",e.INLINE_FRAGMENT="InlineFragment",e.FRAGMENT_DEFINITION="FragmentDefinition",e.VARIABLE="Variable",e.INT="IntValue",e.FLOAT="FloatValue",e.STRING="StringValue",e.BOOLEAN="BooleanValue",e.NULL="NullValue",e.ENUM="EnumValue",e.LIST="ListValue",e.OBJECT="ObjectValue",e.OBJECT_FIELD="ObjectField",e.DIRECTIVE="Directive",e.NAMED_TYPE="NamedType",e.LIST_TYPE="ListType",e.NON_NULL_TYPE="NonNullType",e.SCHEMA_DEFINITION="SchemaDefinition",e.OPERATION_TYPE_DEFINITION="OperationTypeDefinition",e.SCALAR_TYPE_DEFINITION="ScalarTypeDefinition",e.OBJECT_TYPE_DEFINITION="ObjectTypeDefinition",e.FIELD_DEFINITION="FieldDefinition",e.INPUT_VALUE_DEFINITION="InputValueDefinition",e.INTERFACE_TYPE_DEFINITION="InterfaceTypeDefinition",e.UNION_TYPE_DEFINITION="UnionTypeDefinition",e.ENUM_TYPE_DEFINITION="EnumTypeDefinition",e.ENUM_VALUE_DEFINITION="EnumValueDefinition",e.INPUT_OBJECT_TYPE_DEFINITION="InputObjectTypeDefinition",e.DIRECTIVE_DEFINITION="DirectiveDefinition",e.SCHEMA_EXTENSION="SchemaExtension",e.SCALAR_TYPE_EXTENSION="ScalarTypeExtension",e.OBJECT_TYPE_EXTENSION="ObjectTypeExtension",e.INTERFACE_TYPE_EXTENSION="InterfaceTypeExtension",e.UNION_TYPE_EXTENSION="UnionTypeExtension",e.ENUM_TYPE_EXTENSION="EnumTypeExtension",e.INPUT_OBJECT_TYPE_EXTENSION="InputObjectTypeExtension"})(d||(d={}));function $t(e){return e===9||e===32}function P(e){return e>=48&&e<=57}function Ye(e){return e>=97&&e<=122||e>=65&&e<=90}function Qe(e){return Ye(e)||e===95}function xt(e){return Ye(e)||P(e)||e===95}function Dt(e){var t;let r=Number.MAX_SAFE_INTEGER,s=null,n=-1;for(let o=0;o<e.length;++o){var i;const u=e[o],l=Nt(u);l!==u.length&&(s=(i=s)!==null&&i!==void 0?i:o,n=o,o!==0&&l<r&&(r=l))}return e.map((o,u)=>u===0?o:o.slice(r)).slice((t=s)!==null&&t!==void 0?t:0,n+1)}function Nt(e){let t=0;for(;t<e.length&&$t(e.charCodeAt(t));)++t;return t}var a;(function(e){e.SOF="<SOF>",e.EOF="<EOF>",e.BANG="!",e.DOLLAR="$",e.AMP="&",e.PAREN_L="(",e.PAREN_R=")",e.SPREAD="...",e.COLON=":",e.EQUALS="=",e.AT="@",e.BRACKET_L="[",e.BRACKET_R="]",e.BRACE_L="{",e.PIPE="|",e.BRACE_R="}",e.NAME="Name",e.INT="Int",e.FLOAT="Float",e.STRING="String",e.BLOCK_STRING="BlockString",e.COMMENT="Comment"})(a||(a={}));class St{constructor(t){const r=new Ge(a.SOF,0,0,0,0);this.source=t,this.lastToken=r,this.token=r,this.line=1,this.lineStart=0}get[Symbol.toStringTag](){return"Lexer"}advance(){return this.lastToken=this.token,this.token=this.lookahead()}lookahead(){let t=this.token;if(t.kind!==a.EOF)do if(t.next)t=t.next;else{const r=Ct(this,t.end);t.next=r,r.prev=t,t=r}while(t.kind===a.COMMENT);return t}}function Ot(e){return e===a.BANG||e===a.DOLLAR||e===a.AMP||e===a.PAREN_L||e===a.PAREN_R||e===a.SPREAD||e===a.COLON||e===a.EQUALS||e===a.AT||e===a.BRACKET_L||e===a.BRACKET_R||e===a.BRACE_L||e===a.PIPE||e===a.BRACE_R}function L(e){return e>=0&&e<=55295||e>=57344&&e<=1114111}function z(e,t){return Je(e.charCodeAt(t))&&He(e.charCodeAt(t+1))}function Je(e){return e>=55296&&e<=56319}function He(e){return e>=56320&&e<=57343}function N(e,t){const r=e.source.body.codePointAt(t);if(r===void 0)return a.EOF;if(r>=32&&r<=126){const s=String.fromCodePoint(r);return s==='"'?`'"'`:`"${s}"`}return"U+"+r.toString(16).toUpperCase().padStart(4,"0")}function E(e,t,r,s,n){const i=e.line,o=1+r-e.lineStart;return new Ge(t,r,s,i,o,n)}function Ct(e,t){const r=e.source.body,s=r.length;let n=t;for(;n<s;){const i=r.charCodeAt(n);switch(i){case 65279:case 9:case 32:case 44:++n;continue;case 10:++n,++e.line,e.lineStart=n;continue;case 13:r.charCodeAt(n+1)===10?n+=2:++n,++e.line,e.lineStart=n;continue;case 35:return kt(e,n);case 33:return E(e,a.BANG,n,n+1);case 36:return E(e,a.DOLLAR,n,n+1);case 38:return E(e,a.AMP,n,n+1);case 40:return E(e,a.PAREN_L,n,n+1);case 41:return E(e,a.PAREN_R,n,n+1);case 46:if(r.charCodeAt(n+1)===46&&r.charCodeAt(n+2)===46)return E(e,a.SPREAD,n,n+3);break;case 58:return E(e,a.COLON,n,n+1);case 61:return E(e,a.EQUALS,n,n+1);case 64:return E(e,a.AT,n,n+1);case 91:return E(e,a.BRACKET_L,n,n+1);case 93:return E(e,a.BRACKET_R,n,n+1);case 123:return E(e,a.BRACE_L,n,n+1);case 124:return E(e,a.PIPE,n,n+1);case 125:return E(e,a.BRACE_R,n,n+1);case 34:return r.charCodeAt(n+1)===34&&r.charCodeAt(n+2)===34?Pt(e,n):wt(e,n)}if(P(i)||i===45)return Lt(e,n,i);if(Qe(i))return Ut(e,n);throw g(e.source,n,i===39?`Unexpected single quote character ('), did you mean to use a double quote (")?`:L(i)||z(r,n)?`Unexpected character: ${N(e,n)}.`:`Invalid character: ${N(e,n)}.`)}return E(e,a.EOF,s,s)}function kt(e,t){const r=e.source.body,s=r.length;let n=t+1;for(;n<s;){const i=r.charCodeAt(n);if(i===10||i===13)break;if(L(i))++n;else if(z(r,n))n+=2;else break}return E(e,a.COMMENT,t,n,r.slice(t+1,n))}function Lt(e,t,r){const s=e.source.body;let n=t,i=r,o=!1;if(i===45&&(i=s.charCodeAt(++n)),i===48){if(i=s.charCodeAt(++n),P(i))throw g(e.source,n,`Invalid number, unexpected digit after 0: ${N(e,n)}.`)}else n=K(e,n,i),i=s.charCodeAt(n);if(i===46&&(o=!0,i=s.charCodeAt(++n),n=K(e,n,i),i=s.charCodeAt(n)),(i===69||i===101)&&(o=!0,i=s.charCodeAt(++n),(i===43||i===45)&&(i=s.charCodeAt(++n)),n=K(e,n,i),i=s.charCodeAt(n)),i===46||Qe(i))throw g(e.source,n,`Invalid number, expected digit but got: ${N(e,n)}.`);return E(e,o?a.FLOAT:a.INT,t,n,s.slice(t,n))}function K(e,t,r){if(!P(r))throw g(e.source,t,`Invalid number, expected digit but got: ${N(e,t)}.`);const s=e.source.body;let n=t+1;for(;P(s.charCodeAt(n));)++n;return n}function wt(e,t){const r=e.source.body,s=r.length;let n=t+1,i=n,o="";for(;n<s;){const u=r.charCodeAt(n);if(u===34)return o+=r.slice(i,n),E(e,a.STRING,t,n+1,o);if(u===92){o+=r.slice(i,n);const l=r.charCodeAt(n+1)===117?r.charCodeAt(n+2)===123?Rt(e,n):Ft(e,n):Mt(e,n);o+=l.value,n+=l.size,i=n;continue}if(u===10||u===13)break;if(L(u))++n;else if(z(r,n))n+=2;else throw g(e.source,n,`Invalid character within String: ${N(e,n)}.`)}throw g(e.source,n,"Unterminated string.")}function Rt(e,t){const r=e.source.body;let s=0,n=3;for(;n<12;){const i=r.charCodeAt(t+n++);if(i===125){if(n<5||!L(s))break;return{value:String.fromCodePoint(s),size:n}}if(s=s<<4|M(i),s<0)break}throw g(e.source,t,`Invalid Unicode escape sequence: "${r.slice(t,t+n)}".`)}function Ft(e,t){const r=e.source.body,s=Te(r,t+2);if(L(s))return{value:String.fromCodePoint(s),size:6};if(Je(s)&&r.charCodeAt(t+6)===92&&r.charCodeAt(t+7)===117){const n=Te(r,t+8);if(He(n))return{value:String.fromCodePoint(s,n),size:12}}throw g(e.source,t,`Invalid Unicode escape sequence: "${r.slice(t,t+6)}".`)}function Te(e,t){return M(e.charCodeAt(t))<<12|M(e.charCodeAt(t+1))<<8|M(e.charCodeAt(t+2))<<4|M(e.charCodeAt(t+3))}function M(e){return e>=48&&e<=57?e-48:e>=65&&e<=70?e-55:e>=97&&e<=102?e-87:-1}function Mt(e,t){const r=e.source.body;switch(r.charCodeAt(t+1)){case 34:return{value:'"',size:2};case 92:return{value:"\\",size:2};case 47:return{value:"/",size:2};case 98:return{value:"\b",size:2};case 102:return{value:"\f",size:2};case 110:return{value:`
`,size:2};case 114:return{value:"\r",size:2};case 116:return{value:"	",size:2}}throw g(e.source,t,`Invalid character escape sequence: "${r.slice(t,t+2)}".`)}function Pt(e,t){const r=e.source.body,s=r.length;let n=e.lineStart,i=t+3,o=i,u="";const l=[];for(;i<s;){const p=r.charCodeAt(i);if(p===34&&r.charCodeAt(i+1)===34&&r.charCodeAt(i+2)===34){u+=r.slice(o,i),l.push(u);const h=E(e,a.BLOCK_STRING,t,i+3,Dt(l).join(`
`));return e.line+=l.length-1,e.lineStart=n,h}if(p===92&&r.charCodeAt(i+1)===34&&r.charCodeAt(i+2)===34&&r.charCodeAt(i+3)===34){u+=r.slice(o,i),o=i+1,i+=4;continue}if(p===10||p===13){u+=r.slice(o,i),l.push(u),p===13&&r.charCodeAt(i+1)===10?i+=2:++i,u="",o=i,n=i;continue}if(L(p))++i;else if(z(r,i))i+=2;else throw g(e.source,i,`Invalid character within String: ${N(e,i)}.`)}throw g(e.source,i,"Unterminated string.")}function Ut(e,t){const r=e.source.body,s=r.length;let n=t+1;for(;n<s;){const i=r.charCodeAt(n);if(xt(i))++n;else break}return E(e,a.NAME,t,n,r.slice(t,n))}const qt=10,Xe=2;function Bt(e){return W(e,[])}function W(e,t){switch(typeof e){case"string":return JSON.stringify(e);case"function":return e.name?`[function ${e.name}]`:"[function]";case"object":return jt(e,t);default:return String(e)}}function jt(e,t){if(e===null)return"null";if(t.includes(e))return"[Circular]";const r=[...t,e];if(Vt(e)){const s=e.toJSON();if(s!==e)return typeof s=="string"?s:W(s,r)}else if(Array.isArray(e))return Yt(e,r);return Gt(e,r)}function Vt(e){return typeof e.toJSON=="function"}function Gt(e,t){const r=Object.entries(e);return r.length===0?"{}":t.length>Xe?"["+Qt(e)+"]":"{ "+r.map(([n,i])=>n+": "+W(i,t)).join(", ")+" }"}function Yt(e,t){if(e.length===0)return"[]";if(t.length>Xe)return"[Array]";const r=Math.min(qt,e.length),s=e.length-r,n=[];for(let i=0;i<r;++i)n.push(W(e[i],t));return s===1?n.push("... 1 more item"):s>1&&n.push(`... ${s} more items`),"["+n.join(", ")+"]"}function Qt(e){const t=Object.prototype.toString.call(e).replace(/^\[object /,"").replace(/]$/,"");if(t==="Object"&&typeof e.constructor=="function"){const r=e.constructor.name;if(typeof r=="string"&&r!=="")return r}return t}const Jt=function(t,r){return t instanceof r};class ze{constructor(t,r="GraphQL request",s={line:1,column:1}){typeof t=="string"||Z(!1,`Body must be a string. Received: ${Bt(t)}.`),this.body=t,this.name=r,this.locationOffset=s,this.locationOffset.line>0||Z(!1,"line in locationOffset is 1-indexed and must be positive."),this.locationOffset.column>0||Z(!1,"column in locationOffset is 1-indexed and must be positive.")}get[Symbol.toStringTag](){return"Source"}}function Ht(e){return Jt(e,ze)}function Xt(e,t){return new zt(e,t).parseDocument()}class zt{constructor(t,r={}){const s=Ht(t)?t:new ze(t);this._lexer=new St(s),this._options=r,this._tokenCounter=0}parseName(){const t=this.expectToken(a.NAME);return this.node(t,{kind:d.NAME,value:t.value})}parseDocument(){return this.node(this._lexer.token,{kind:d.DOCUMENT,definitions:this.many(a.SOF,this.parseDefinition,a.EOF)})}parseDefinition(){if(this.peek(a.BRACE_L))return this.parseOperationDefinition();const t=this.peekDescription(),r=t?this._lexer.lookahead():this._lexer.token;if(r.kind===a.NAME){switch(r.value){case"schema":return this.parseSchemaDefinition();case"scalar":return this.parseScalarTypeDefinition();case"type":return this.parseObjectTypeDefinition();case"interface":return this.parseInterfaceTypeDefinition();case"union":return this.parseUnionTypeDefinition();case"enum":return this.parseEnumTypeDefinition();case"input":return this.parseInputObjectTypeDefinition();case"directive":return this.parseDirectiveDefinition()}if(t)throw g(this._lexer.source,this._lexer.token.start,"Unexpected description, descriptions are supported only on type definitions.");switch(r.value){case"query":case"mutation":case"subscription":return this.parseOperationDefinition();case"fragment":return this.parseFragmentDefinition();case"extend":return this.parseTypeSystemExtension()}}throw this.unexpected(r)}parseOperationDefinition(){const t=this._lexer.token;if(this.peek(a.BRACE_L))return this.node(t,{kind:d.OPERATION_DEFINITION,operation:S.QUERY,name:void 0,variableDefinitions:[],directives:[],selectionSet:this.parseSelectionSet()});const r=this.parseOperationType();let s;return this.peek(a.NAME)&&(s=this.parseName()),this.node(t,{kind:d.OPERATION_DEFINITION,operation:r,name:s,variableDefinitions:this.parseVariableDefinitions(),directives:this.parseDirectives(!1),selectionSet:this.parseSelectionSet()})}parseOperationType(){const t=this.expectToken(a.NAME);switch(t.value){case"query":return S.QUERY;case"mutation":return S.MUTATION;case"subscription":return S.SUBSCRIPTION}throw this.unexpected(t)}parseVariableDefinitions(){return this.optionalMany(a.PAREN_L,this.parseVariableDefinition,a.PAREN_R)}parseVariableDefinition(){return this.node(this._lexer.token,{kind:d.VARIABLE_DEFINITION,variable:this.parseVariable(),type:(this.expectToken(a.COLON),this.parseTypeReference()),defaultValue:this.expectOptionalToken(a.EQUALS)?this.parseConstValueLiteral():void 0,directives:this.parseConstDirectives()})}parseVariable(){const t=this._lexer.token;return this.expectToken(a.DOLLAR),this.node(t,{kind:d.VARIABLE,name:this.parseName()})}parseSelectionSet(){return this.node(this._lexer.token,{kind:d.SELECTION_SET,selections:this.many(a.BRACE_L,this.parseSelection,a.BRACE_R)})}parseSelection(){return this.peek(a.SPREAD)?this.parseFragment():this.parseField()}parseField(){const t=this._lexer.token,r=this.parseName();let s,n;return this.expectOptionalToken(a.COLON)?(s=r,n=this.parseName()):n=r,this.node(t,{kind:d.FIELD,alias:s,name:n,arguments:this.parseArguments(!1),directives:this.parseDirectives(!1),selectionSet:this.peek(a.BRACE_L)?this.parseSelectionSet():void 0})}parseArguments(t){const r=t?this.parseConstArgument:this.parseArgument;return this.optionalMany(a.PAREN_L,r,a.PAREN_R)}parseArgument(t=!1){const r=this._lexer.token,s=this.parseName();return this.expectToken(a.COLON),this.node(r,{kind:d.ARGUMENT,name:s,value:this.parseValueLiteral(t)})}parseConstArgument(){return this.parseArgument(!0)}parseFragment(){const t=this._lexer.token;this.expectToken(a.SPREAD);const r=this.expectOptionalKeyword("on");return!r&&this.peek(a.NAME)?this.node(t,{kind:d.FRAGMENT_SPREAD,name:this.parseFragmentName(),directives:this.parseDirectives(!1)}):this.node(t,{kind:d.INLINE_FRAGMENT,typeCondition:r?this.parseNamedType():void 0,directives:this.parseDirectives(!1),selectionSet:this.parseSelectionSet()})}parseFragmentDefinition(){const t=this._lexer.token;return this.expectKeyword("fragment"),this._options.allowLegacyFragmentVariables===!0?this.node(t,{kind:d.FRAGMENT_DEFINITION,name:this.parseFragmentName(),variableDefinitions:this.parseVariableDefinitions(),typeCondition:(this.expectKeyword("on"),this.parseNamedType()),directives:this.parseDirectives(!1),selectionSet:this.parseSelectionSet()}):this.node(t,{kind:d.FRAGMENT_DEFINITION,name:this.parseFragmentName(),typeCondition:(this.expectKeyword("on"),this.parseNamedType()),directives:this.parseDirectives(!1),selectionSet:this.parseSelectionSet()})}parseFragmentName(){if(this._lexer.token.value==="on")throw this.unexpected();return this.parseName()}parseValueLiteral(t){const r=this._lexer.token;switch(r.kind){case a.BRACKET_L:return this.parseList(t);case a.BRACE_L:return this.parseObject(t);case a.INT:return this.advanceLexer(),this.node(r,{kind:d.INT,value:r.value});case a.FLOAT:return this.advanceLexer(),this.node(r,{kind:d.FLOAT,value:r.value});case a.STRING:case a.BLOCK_STRING:return this.parseStringLiteral();case a.NAME:switch(this.advanceLexer(),r.value){case"true":return this.node(r,{kind:d.BOOLEAN,value:!0});case"false":return this.node(r,{kind:d.BOOLEAN,value:!1});case"null":return this.node(r,{kind:d.NULL});default:return this.node(r,{kind:d.ENUM,value:r.value})}case a.DOLLAR:if(t)if(this.expectToken(a.DOLLAR),this._lexer.token.kind===a.NAME){const s=this._lexer.token.value;throw g(this._lexer.source,r.start,`Unexpected variable "$${s}" in constant value.`)}else throw this.unexpected(r);return this.parseVariable();default:throw this.unexpected()}}parseConstValueLiteral(){return this.parseValueLiteral(!0)}parseStringLiteral(){const t=this._lexer.token;return this.advanceLexer(),this.node(t,{kind:d.STRING,value:t.value,block:t.kind===a.BLOCK_STRING})}parseList(t){const r=()=>this.parseValueLiteral(t);return this.node(this._lexer.token,{kind:d.LIST,values:this.any(a.BRACKET_L,r,a.BRACKET_R)})}parseObject(t){const r=()=>this.parseObjectField(t);return this.node(this._lexer.token,{kind:d.OBJECT,fields:this.any(a.BRACE_L,r,a.BRACE_R)})}parseObjectField(t){const r=this._lexer.token,s=this.parseName();return this.expectToken(a.COLON),this.node(r,{kind:d.OBJECT_FIELD,name:s,value:this.parseValueLiteral(t)})}parseDirectives(t){const r=[];for(;this.peek(a.AT);)r.push(this.parseDirective(t));return r}parseConstDirectives(){return this.parseDirectives(!0)}parseDirective(t){const r=this._lexer.token;return this.expectToken(a.AT),this.node(r,{kind:d.DIRECTIVE,name:this.parseName(),arguments:this.parseArguments(t)})}parseTypeReference(){const t=this._lexer.token;let r;if(this.expectOptionalToken(a.BRACKET_L)){const s=this.parseTypeReference();this.expectToken(a.BRACKET_R),r=this.node(t,{kind:d.LIST_TYPE,type:s})}else r=this.parseNamedType();return this.expectOptionalToken(a.BANG)?this.node(t,{kind:d.NON_NULL_TYPE,type:r}):r}parseNamedType(){return this.node(this._lexer.token,{kind:d.NAMED_TYPE,name:this.parseName()})}peekDescription(){return this.peek(a.STRING)||this.peek(a.BLOCK_STRING)}parseDescription(){if(this.peekDescription())return this.parseStringLiteral()}parseSchemaDefinition(){const t=this._lexer.token,r=this.parseDescription();this.expectKeyword("schema");const s=this.parseConstDirectives(),n=this.many(a.BRACE_L,this.parseOperationTypeDefinition,a.BRACE_R);return this.node(t,{kind:d.SCHEMA_DEFINITION,description:r,directives:s,operationTypes:n})}parseOperationTypeDefinition(){const t=this._lexer.token,r=this.parseOperationType();this.expectToken(a.COLON);const s=this.parseNamedType();return this.node(t,{kind:d.OPERATION_TYPE_DEFINITION,operation:r,type:s})}parseScalarTypeDefinition(){const t=this._lexer.token,r=this.parseDescription();this.expectKeyword("scalar");const s=this.parseName(),n=this.parseConstDirectives();return this.node(t,{kind:d.SCALAR_TYPE_DEFINITION,description:r,name:s,directives:n})}parseObjectTypeDefinition(){const t=this._lexer.token,r=this.parseDescription();this.expectKeyword("type");const s=this.parseName(),n=this.parseImplementsInterfaces(),i=this.parseConstDirectives(),o=this.parseFieldsDefinition();return this.node(t,{kind:d.OBJECT_TYPE_DEFINITION,description:r,name:s,interfaces:n,directives:i,fields:o})}parseImplementsInterfaces(){return this.expectOptionalKeyword("implements")?this.delimitedMany(a.AMP,this.parseNamedType):[]}parseFieldsDefinition(){return this.optionalMany(a.BRACE_L,this.parseFieldDefinition,a.BRACE_R)}parseFieldDefinition(){const t=this._lexer.token,r=this.parseDescription(),s=this.parseName(),n=this.parseArgumentDefs();this.expectToken(a.COLON);const i=this.parseTypeReference(),o=this.parseConstDirectives();return this.node(t,{kind:d.FIELD_DEFINITION,description:r,name:s,arguments:n,type:i,directives:o})}parseArgumentDefs(){return this.optionalMany(a.PAREN_L,this.parseInputValueDef,a.PAREN_R)}parseInputValueDef(){const t=this._lexer.token,r=this.parseDescription(),s=this.parseName();this.expectToken(a.COLON);const n=this.parseTypeReference();let i;this.expectOptionalToken(a.EQUALS)&&(i=this.parseConstValueLiteral());const o=this.parseConstDirectives();return this.node(t,{kind:d.INPUT_VALUE_DEFINITION,description:r,name:s,type:n,defaultValue:i,directives:o})}parseInterfaceTypeDefinition(){const t=this._lexer.token,r=this.parseDescription();this.expectKeyword("interface");const s=this.parseName(),n=this.parseImplementsInterfaces(),i=this.parseConstDirectives(),o=this.parseFieldsDefinition();return this.node(t,{kind:d.INTERFACE_TYPE_DEFINITION,description:r,name:s,interfaces:n,directives:i,fields:o})}parseUnionTypeDefinition(){const t=this._lexer.token,r=this.parseDescription();this.expectKeyword("union");const s=this.parseName(),n=this.parseConstDirectives(),i=this.parseUnionMemberTypes();return this.node(t,{kind:d.UNION_TYPE_DEFINITION,description:r,name:s,directives:n,types:i})}parseUnionMemberTypes(){return this.expectOptionalToken(a.EQUALS)?this.delimitedMany(a.PIPE,this.parseNamedType):[]}parseEnumTypeDefinition(){const t=this._lexer.token,r=this.parseDescription();this.expectKeyword("enum");const s=this.parseName(),n=this.parseConstDirectives(),i=this.parseEnumValuesDefinition();return this.node(t,{kind:d.ENUM_TYPE_DEFINITION,description:r,name:s,directives:n,values:i})}parseEnumValuesDefinition(){return this.optionalMany(a.BRACE_L,this.parseEnumValueDefinition,a.BRACE_R)}parseEnumValueDefinition(){const t=this._lexer.token,r=this.parseDescription(),s=this.parseEnumValueName(),n=this.parseConstDirectives();return this.node(t,{kind:d.ENUM_VALUE_DEFINITION,description:r,name:s,directives:n})}parseEnumValueName(){if(this._lexer.token.value==="true"||this._lexer.token.value==="false"||this._lexer.token.value==="null")throw g(this._lexer.source,this._lexer.token.start,`${B(this._lexer.token)} is reserved and cannot be used for an enum value.`);return this.parseName()}parseInputObjectTypeDefinition(){const t=this._lexer.token,r=this.parseDescription();this.expectKeyword("input");const s=this.parseName(),n=this.parseConstDirectives(),i=this.parseInputFieldsDefinition();return this.node(t,{kind:d.INPUT_OBJECT_TYPE_DEFINITION,description:r,name:s,directives:n,fields:i})}parseInputFieldsDefinition(){return this.optionalMany(a.BRACE_L,this.parseInputValueDef,a.BRACE_R)}parseTypeSystemExtension(){const t=this._lexer.lookahead();if(t.kind===a.NAME)switch(t.value){case"schema":return this.parseSchemaExtension();case"scalar":return this.parseScalarTypeExtension();case"type":return this.parseObjectTypeExtension();case"interface":return this.parseInterfaceTypeExtension();case"union":return this.parseUnionTypeExtension();case"enum":return this.parseEnumTypeExtension();case"input":return this.parseInputObjectTypeExtension()}throw this.unexpected(t)}parseSchemaExtension(){const t=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("schema");const r=this.parseConstDirectives(),s=this.optionalMany(a.BRACE_L,this.parseOperationTypeDefinition,a.BRACE_R);if(r.length===0&&s.length===0)throw this.unexpected();return this.node(t,{kind:d.SCHEMA_EXTENSION,directives:r,operationTypes:s})}parseScalarTypeExtension(){const t=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("scalar");const r=this.parseName(),s=this.parseConstDirectives();if(s.length===0)throw this.unexpected();return this.node(t,{kind:d.SCALAR_TYPE_EXTENSION,name:r,directives:s})}parseObjectTypeExtension(){const t=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("type");const r=this.parseName(),s=this.parseImplementsInterfaces(),n=this.parseConstDirectives(),i=this.parseFieldsDefinition();if(s.length===0&&n.length===0&&i.length===0)throw this.unexpected();return this.node(t,{kind:d.OBJECT_TYPE_EXTENSION,name:r,interfaces:s,directives:n,fields:i})}parseInterfaceTypeExtension(){const t=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("interface");const r=this.parseName(),s=this.parseImplementsInterfaces(),n=this.parseConstDirectives(),i=this.parseFieldsDefinition();if(s.length===0&&n.length===0&&i.length===0)throw this.unexpected();return this.node(t,{kind:d.INTERFACE_TYPE_EXTENSION,name:r,interfaces:s,directives:n,fields:i})}parseUnionTypeExtension(){const t=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("union");const r=this.parseName(),s=this.parseConstDirectives(),n=this.parseUnionMemberTypes();if(s.length===0&&n.length===0)throw this.unexpected();return this.node(t,{kind:d.UNION_TYPE_EXTENSION,name:r,directives:s,types:n})}parseEnumTypeExtension(){const t=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("enum");const r=this.parseName(),s=this.parseConstDirectives(),n=this.parseEnumValuesDefinition();if(s.length===0&&n.length===0)throw this.unexpected();return this.node(t,{kind:d.ENUM_TYPE_EXTENSION,name:r,directives:s,values:n})}parseInputObjectTypeExtension(){const t=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("input");const r=this.parseName(),s=this.parseConstDirectives(),n=this.parseInputFieldsDefinition();if(s.length===0&&n.length===0)throw this.unexpected();return this.node(t,{kind:d.INPUT_OBJECT_TYPE_EXTENSION,name:r,directives:s,fields:n})}parseDirectiveDefinition(){const t=this._lexer.token,r=this.parseDescription();this.expectKeyword("directive"),this.expectToken(a.AT);const s=this.parseName(),n=this.parseArgumentDefs(),i=this.expectOptionalKeyword("repeatable");this.expectKeyword("on");const o=this.parseDirectiveLocations();return this.node(t,{kind:d.DIRECTIVE_DEFINITION,description:r,name:s,arguments:n,repeatable:i,locations:o})}parseDirectiveLocations(){return this.delimitedMany(a.PIPE,this.parseDirectiveLocation)}parseDirectiveLocation(){const t=this._lexer.token,r=this.parseName();if(Object.prototype.hasOwnProperty.call(ie,r.value))return r;throw this.unexpected(t)}node(t,r){return this._options.noLocation!==!0&&(r.loc=new At(t,this._lexer.lastToken,this._lexer.source)),r}peek(t){return this._lexer.token.kind===t}expectToken(t){const r=this._lexer.token;if(r.kind===t)return this.advanceLexer(),r;throw g(this._lexer.source,r.start,`Expected ${We(t)}, found ${B(r)}.`)}expectOptionalToken(t){return this._lexer.token.kind===t?(this.advanceLexer(),!0):!1}expectKeyword(t){const r=this._lexer.token;if(r.kind===a.NAME&&r.value===t)this.advanceLexer();else throw g(this._lexer.source,r.start,`Expected "${t}", found ${B(r)}.`)}expectOptionalKeyword(t){const r=this._lexer.token;return r.kind===a.NAME&&r.value===t?(this.advanceLexer(),!0):!1}unexpected(t){const r=t??this._lexer.token;return g(this._lexer.source,r.start,`Unexpected ${B(r)}.`)}any(t,r,s){this.expectToken(t);const n=[];for(;!this.expectOptionalToken(s);)n.push(r.call(this));return n}optionalMany(t,r,s){if(this.expectOptionalToken(t)){const n=[];do n.push(r.call(this));while(!this.expectOptionalToken(s));return n}return[]}many(t,r,s){this.expectToken(t);const n=[];do n.push(r.call(this));while(!this.expectOptionalToken(s));return n}delimitedMany(t,r){this.expectOptionalToken(t);const s=[];do s.push(r.call(this));while(this.expectOptionalToken(t));return s}advanceLexer(){const{maxTokens:t}=this._options,r=this._lexer.advance();if(t!==void 0&&r.kind!==a.EOF&&(++this._tokenCounter,this._tokenCounter>t))throw g(this._lexer.source,r.start,`Document contains more that ${t} tokens. Parsing aborted.`)}}function B(e){const t=e.value;return We(e.kind)+(t!=null?` "${t}"`:"")}function We(e){return Ot(e)?`"${e}"`:e}var Wt=pe;function Zt(){this.__data__=new Wt,this.size=0}var Kt=Zt;function er(e){var t=this.__data__,r=t.delete(e);return this.size=t.size,r}var tr=er;function rr(e){return this.__data__.get(e)}var nr=rr;function sr(e){return this.__data__.has(e)}var ir=sr,ar=pe,or=Be,cr=je,ur=200;function dr(e,t){var r=this.__data__;if(r instanceof ar){var s=r.__data__;if(!or||s.length<ur-1)return s.push([e,t]),this.size=++r.size,this;r=this.__data__=new cr(s)}return r.set(e,t),this.size=r.size,this}var lr=dr,pr=pe,_r=Kt,hr=tr,fr=nr,mr=ir,yr=lr;function w(e){var t=this.__data__=new pr(e);this.size=t.size}w.prototype.clear=_r;w.prototype.delete=hr;w.prototype.get=fr;w.prototype.has=mr;w.prototype.set=yr;var br=w,Er="__lodash_hash_undefined__";function Tr(e){return this.__data__.set(e,Er),this}var gr=Tr;function vr(e){return this.__data__.has(e)}var Ar=vr,Ir=je,$r=gr,xr=Ar;function G(e){var t=-1,r=e==null?0:e.length;for(this.__data__=new Ir;++t<r;)this.add(e[t])}G.prototype.add=G.prototype.push=$r;G.prototype.has=xr;var Dr=G;function Nr(e,t){for(var r=-1,s=e==null?0:e.length;++r<s;)if(t(e[r],r,e))return!0;return!1}var Sr=Nr;function Or(e,t){return e.has(t)}var Cr=Or,kr=Dr,Lr=Sr,wr=Cr,Rr=1,Fr=2;function Mr(e,t,r,s,n,i){var o=r&Rr,u=e.length,l=t.length;if(u!=l&&!(o&&l>u))return!1;var p=i.get(e),h=i.get(t);if(p&&h)return p==t&&h==e;var b=-1,f=!0,v=r&Fr?new kr:void 0;for(i.set(e,t),i.set(t,e);++b<u;){var m=e[b],T=t[b];if(s)var I=o?s(T,m,b,t,e,i):s(m,T,b,e,t,i);if(I!==void 0){if(I)continue;f=!1;break}if(v){if(!Lr(t,function($,x){if(!wr(v,x)&&(m===$||n(m,$,r,s,i)))return v.push(x)})){f=!1;break}}else if(!(m===T||n(m,T,r,s,i))){f=!1;break}}return i.delete(e),i.delete(t),f}var Ze=Mr,Pr=C,Ur=Pr.Uint8Array,qr=Ur;function Br(e){var t=-1,r=Array(e.size);return e.forEach(function(s,n){r[++t]=[n,s]}),r}var jr=Br;function Vr(e){var t=-1,r=Array(e.size);return e.forEach(function(s){r[++t]=s}),r}var Gr=Vr,ge=lt,ve=qr,Yr=pt,Qr=Ze,Jr=jr,Hr=Gr,Xr=1,zr=2,Wr="[object Boolean]",Zr="[object Date]",Kr="[object Error]",en="[object Map]",tn="[object Number]",rn="[object RegExp]",nn="[object Set]",sn="[object String]",an="[object Symbol]",on="[object ArrayBuffer]",cn="[object DataView]",Ae=ge?ge.prototype:void 0,ee=Ae?Ae.valueOf:void 0;function un(e,t,r,s,n,i,o){switch(r){case cn:if(e.byteLength!=t.byteLength||e.byteOffset!=t.byteOffset)return!1;e=e.buffer,t=t.buffer;case on:return!(e.byteLength!=t.byteLength||!i(new ve(e),new ve(t)));case Wr:case Zr:case tn:return Yr(+e,+t);case Kr:return e.name==t.name&&e.message==t.message;case rn:case sn:return e==t+"";case en:var u=Jr;case nn:var l=s&Xr;if(u||(u=Hr),e.size!=t.size&&!l)return!1;var p=o.get(e);if(p)return p==t;s|=zr,o.set(e,t);var h=Qr(u(e),u(t),s,n,i,o);return o.delete(e),h;case an:if(ee)return ee.call(e)==ee.call(t)}return!1}var dn=un;function ln(e,t){for(var r=-1,s=t.length,n=e.length;++r<s;)e[n+r]=t[r];return e}var pn=ln,_n=pn,hn=_e;function fn(e,t,r){var s=t(e);return hn(e)?s:_n(s,r(e))}var mn=fn;function yn(e,t){for(var r=-1,s=e==null?0:e.length,n=0,i=[];++r<s;){var o=e[r];t(o,r,e)&&(i[n++]=o)}return i}var bn=yn;function En(){return[]}var Tn=En,gn=bn,vn=Tn,An=Object.prototype,In=An.propertyIsEnumerable,Ie=Object.getOwnPropertySymbols,$n=Ie?function(e){return e==null?[]:(e=Object(e),gn(Ie(e),function(t){return In.call(e,t)}))}:vn,xn=$n;function Dn(e,t){for(var r=-1,s=Array(e);++r<e;)s[r]=t(r);return s}var Nn=Dn,Sn=he,On=H,Cn="[object Arguments]";function kn(e){return On(e)&&Sn(e)==Cn}var Ln=kn,$e=Ln,wn=H,Ke=Object.prototype,Rn=Ke.hasOwnProperty,Fn=Ke.propertyIsEnumerable,Mn=$e(function(){return arguments}())?$e:function(e){return wn(e)&&Rn.call(e,"callee")&&!Fn.call(e,"callee")},Pn=Mn,Y={exports:{}};function Un(){return!1}var qn=Un;Y.exports;(function(e,t){var r=C,s=qn,n=t&&!t.nodeType&&t,i=n&&!0&&e&&!e.nodeType&&e,o=i&&i.exports===n,u=o?r.Buffer:void 0,l=u?u.isBuffer:void 0,p=l||s;e.exports=p})(Y,Y.exports);var et=Y.exports,Bn=9007199254740991,jn=/^(?:0|[1-9]\d*)$/;function Vn(e,t){var r=typeof e;return t=t??Bn,!!t&&(r=="number"||r!="symbol"&&jn.test(e))&&e>-1&&e%1==0&&e<t}var Gn=Vn,Yn=9007199254740991;function Qn(e){return typeof e=="number"&&e>-1&&e%1==0&&e<=Yn}var tt=Qn,Jn=he,Hn=tt,Xn=H,zn="[object Arguments]",Wn="[object Array]",Zn="[object Boolean]",Kn="[object Date]",es="[object Error]",ts="[object Function]",rs="[object Map]",ns="[object Number]",ss="[object Object]",is="[object RegExp]",as="[object Set]",os="[object String]",cs="[object WeakMap]",us="[object ArrayBuffer]",ds="[object DataView]",ls="[object Float32Array]",ps="[object Float64Array]",_s="[object Int8Array]",hs="[object Int16Array]",fs="[object Int32Array]",ms="[object Uint8Array]",ys="[object Uint8ClampedArray]",bs="[object Uint16Array]",Es="[object Uint32Array]",y={};y[ls]=y[ps]=y[_s]=y[hs]=y[fs]=y[ms]=y[ys]=y[bs]=y[Es]=!0;y[zn]=y[Wn]=y[us]=y[Zn]=y[ds]=y[Kn]=y[es]=y[ts]=y[rs]=y[ns]=y[ss]=y[is]=y[as]=y[os]=y[cs]=!1;function Ts(e){return Xn(e)&&Hn(e.length)&&!!y[Jn(e)]}var gs=Ts;function vs(e){return function(t){return e(t)}}var As=vs,Q={exports:{}};Q.exports;(function(e,t){var r=_t,s=t&&!t.nodeType&&t,n=s&&!0&&e&&!e.nodeType&&e,i=n&&n.exports===s,o=i&&r.process,u=function(){try{var l=n&&n.require&&n.require("util").types;return l||o&&o.binding&&o.binding("util")}catch{}}();e.exports=u})(Q,Q.exports);var Is=Q.exports,$s=gs,xs=As,xe=Is,De=xe&&xe.isTypedArray,Ds=De?xs(De):$s,rt=Ds,Ns=Nn,Ss=Pn,Os=_e,Cs=et,ks=Gn,Ls=rt,ws=Object.prototype,Rs=ws.hasOwnProperty;function Fs(e,t){var r=Os(e),s=!r&&Ss(e),n=!r&&!s&&Cs(e),i=!r&&!s&&!n&&Ls(e),o=r||s||n||i,u=o?Ns(e.length,String):[],l=u.length;for(var p in e)(t||Rs.call(e,p))&&!(o&&(p=="length"||n&&(p=="offset"||p=="parent")||i&&(p=="buffer"||p=="byteLength"||p=="byteOffset")||ks(p,l)))&&u.push(p);return u}var Ms=Fs,Ps=Object.prototype;function Us(e){var t=e&&e.constructor,r=typeof t=="function"&&t.prototype||Ps;return e===r}var qs=Us;function Bs(e,t){return function(r){return e(t(r))}}var js=Bs,Vs=js,Gs=Vs(Object.keys,Object),Ys=Gs,Qs=qs,Js=Ys,Hs=Object.prototype,Xs=Hs.hasOwnProperty;function zs(e){if(!Qs(e))return Js(e);var t=[];for(var r in Object(e))Xs.call(e,r)&&r!="constructor"&&t.push(r);return t}var Ws=zs,Zs=ht,Ks=tt;function ei(e){return e!=null&&Ks(e.length)&&!Zs(e)}var ti=ei,ri=Ms,ni=Ws,si=ti;function ii(e){return si(e)?ri(e):ni(e)}var ai=ii,oi=mn,ci=xn,ui=ai;function di(e){return oi(e,ui,ci)}var li=di,Ne=li,pi=1,_i=Object.prototype,hi=_i.hasOwnProperty;function fi(e,t,r,s,n,i){var o=r&pi,u=Ne(e),l=u.length,p=Ne(t),h=p.length;if(l!=h&&!o)return!1;for(var b=l;b--;){var f=u[b];if(!(o?f in t:hi.call(t,f)))return!1}var v=i.get(e),m=i.get(t);if(v&&m)return v==t&&m==e;var T=!0;i.set(e,t),i.set(t,e);for(var I=o;++b<l;){f=u[b];var $=e[f],x=t[f];if(s)var me=o?s(x,$,f,t,e,i):s($,x,f,e,t,i);if(!(me===void 0?$===x||n($,x,r,s,i):me)){T=!1;break}I||(I=f=="constructor")}if(T&&!I){var U=e.constructor,q=t.constructor;U!=q&&"constructor"in e&&"constructor"in t&&!(typeof U=="function"&&U instanceof U&&typeof q=="function"&&q instanceof q)&&(T=!1)}return i.delete(e),i.delete(t),T}var mi=fi,yi=X,bi=C,Ei=yi(bi,"DataView"),Ti=Ei,gi=X,vi=C,Ai=gi(vi,"Promise"),Ii=Ai,$i=X,xi=C,Di=$i(xi,"Set"),Ni=Di,Si=X,Oi=C,Ci=Si(Oi,"WeakMap"),ki=Ci,ae=Ti,oe=Be,ce=Ii,ue=Ni,de=ki,nt=he,R=ft,Se="[object Map]",Li="[object Object]",Oe="[object Promise]",Ce="[object Set]",ke="[object WeakMap]",Le="[object DataView]",wi=R(ae),Ri=R(oe),Fi=R(ce),Mi=R(ue),Pi=R(de),D=nt;(ae&&D(new ae(new ArrayBuffer(1)))!=Le||oe&&D(new oe)!=Se||ce&&D(ce.resolve())!=Oe||ue&&D(new ue)!=Ce||de&&D(new de)!=ke)&&(D=function(e){var t=nt(e),r=t==Li?e.constructor:void 0,s=r?R(r):"";if(s)switch(s){case wi:return Le;case Ri:return Se;case Fi:return Oe;case Mi:return Ce;case Pi:return ke}return t});var Ui=D,te=br,qi=Ze,Bi=dn,ji=mi,we=Ui,Re=_e,Fe=et,Vi=rt,Gi=1,Me="[object Arguments]",Pe="[object Array]",j="[object Object]",Yi=Object.prototype,Ue=Yi.hasOwnProperty;function Qi(e,t,r,s,n,i){var o=Re(e),u=Re(t),l=o?Pe:we(e),p=u?Pe:we(t);l=l==Me?j:l,p=p==Me?j:p;var h=l==j,b=p==j,f=l==p;if(f&&Fe(e)){if(!Fe(t))return!1;o=!0,h=!1}if(f&&!h)return i||(i=new te),o||Vi(e)?qi(e,t,r,s,n,i):Bi(e,t,l,r,s,n,i);if(!(r&Gi)){var v=h&&Ue.call(e,"__wrapped__"),m=b&&Ue.call(t,"__wrapped__");if(v||m){var T=v?e.value():e,I=m?t.value():t;return i||(i=new te),n(T,I,r,s,i)}}return f?(i||(i=new te),ji(e,t,r,s,n,i)):!1}var Ji=Qi,Hi=Ji,qe=H;function st(e,t,r,s,n){return e===t?!0:e==null||t==null||!qe(e)&&!qe(t)?e!==e&&t!==t:Hi(e,t,r,s,st,n)}var Xi=st,zi=Xi;function Wi(e,t){return zi(e,t)}var Zi=Wi;const Ki=mt(Zi);var ea=function(e,t){return e===void 0&&(e=[]),t===void 0&&(t=[]),Ki(e,t)},ta=function(e){return function(t,r){var s=ne.useRef(),n=ne.useRef(0);(r===void 0||!ea(r,s.current))&&(s.current=r,n.current+=1),e(t,[n.current])}};const po=ta(ne.useEffect);var V=new Map,le=new Map,it=!0,J=!1;function at(e){return e.replace(/[\s,]+/g," ").trim()}function ra(e){return at(e.source.body.substring(e.start,e.end))}function na(e){var t=new Set,r=[];return e.definitions.forEach(function(s){if(s.kind==="FragmentDefinition"){var n=s.name.value,i=ra(s.loc),o=le.get(n);o&&!o.has(i)?it&&console.warn("Warning: fragment with name "+n+` already exists.
graphql-tag enforces all fragment names across your application to be unique; read more about
this in the docs: http://dev.apollodata.com/core/fragments.html#unique-names`):o||le.set(n,o=new Set),o.add(i),t.has(i)||(t.add(i),r.push(s))}else r.push(s)}),ye(ye({},e),{definitions:r})}function sa(e){var t=new Set(e.definitions);t.forEach(function(s){s.loc&&delete s.loc,Object.keys(s).forEach(function(n){var i=s[n];i&&typeof i=="object"&&t.add(i)})});var r=e.loc;return r&&(delete r.startToken,delete r.endToken),e}function ia(e){var t=at(e);if(!V.has(t)){var r=Xt(e,{experimentalFragmentVariables:J,allowLegacyFragmentVariables:J});if(!r||r.kind!=="Document")throw new Error("Not a valid GraphQL document.");V.set(t,sa(na(r)))}return V.get(t)}function O(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];typeof e=="string"&&(e=[e]);var s=e[0];return t.forEach(function(n,i){n&&n.kind==="Document"?s+=n.loc.source.body:s+=n,s+=e[i+1]}),ia(s)}function aa(){V.clear(),le.clear()}function oa(){it=!1}function ca(){J=!0}function ua(){J=!1}var F={gql:O,resetCaches:aa,disableFragmentWarnings:oa,enableExperimentalFragmentVariables:ca,disableExperimentalFragmentVariables:ua};(function(e){e.gql=F.gql,e.resetCaches=F.resetCaches,e.disableFragmentWarnings=F.disableFragmentWarnings,e.enableExperimentalFragmentVariables=F.enableExperimentalFragmentVariables,e.disableExperimentalFragmentVariables=F.disableExperimentalFragmentVariables})(O||(O={}));O.default=O;const c=O;var da=(e=>(e.Active="active",e.Archived="archived",e.Created="created",e))(da||{}),la=(e=>(e.Asc="asc",e.AscNullsFirst="asc_nulls_first",e.AscNullsLast="asc_nulls_last",e.Desc="desc",e.DescNullsFirst="desc_nulls_first",e.DescNullsLast="desc_nulls_last",e))(la||{});const ot=c`
  fragment BranchesFields on branches {
    id
    name
    status
  }
`,ct=c`
  fragment UserTeamFields on teams {
    id
    name
    created_at
    updated_at
    members(order_by: { updated_at: desc }) {
      id
      user_id
      member_roles {
        team_role
      }
      user {
        id
        avatar_url
        display_name
        account {
          email
        }
      }
    }
  }
`,ut=c`
  fragment TeamMembersFields on teams {
    members(order_by: { updated_at: desc }) {
      id
      user_id
      member_roles {
        id
        team_role
        created_at
        updated_at
        access_list {
          id
          name
          config
        }
      }
      user {
        id
        avatar_url
        display_name
        account {
          email
        }
      }
    }
  }
`,dt=c`
  fragment DefaultFields on request_logs {
    id
    created_at
    start_time
    duration
    path
    user_id
    datasource_id
  }
`,pa=c`
  query AllAccessLists(
    $offset: Int
    $limit: Int
    $where: access_lists_bool_exp
    $order_by: [access_lists_order_by!]
  ) {
    access_lists(
      offset: $offset
      limit: $limit
      where: $where
      order_by: $order_by
    ) {
      id
      name
      config
      team_id
      created_at
      updated_at
    }
  }
`;function _o(e){return A({query:pa,...e})}const _a=c`
  subscription SubAccessLists(
    $offset: Int
    $limit: Int
    $where: access_lists_bool_exp
    $order_by: [access_lists_order_by!]
  ) {
    access_lists(
      offset: $offset
      limit: $limit
      where: $where
      order_by: $order_by
    ) {
      id
      name
      config
      created_at
      updated_at
    }
  }
`;function ho(e,t){return k({query:_a,...e},t)}c`
  query AccessList($id: uuid!) {
    access_lists_by_pk(id: $id) {
      name
      config
      team_id
    }
  }
`;const ha=c`
  mutation UpdateAccessList(
    $pk_columns: access_lists_pk_columns_input!
    $_set: access_lists_set_input!
  ) {
    update_access_lists_by_pk(pk_columns: $pk_columns, _set: $_set) {
      id
    }
  }
`;function fo(){return _(ha)}const fa=c`
  mutation DeleteAccessList($id: uuid!) {
    delete_access_lists_by_pk(id: $id) {
      id
    }
  }
`;function mo(){return _(fa)}const ma=c`
  mutation CreateAccessList($object: access_lists_insert_input!) {
    insert_access_lists_one(object: $object) {
      id
    }
  }
`;function yo(){return _(ma)}const ya=c`
  mutation CreateAlert($object: alerts_insert_input!) {
    insert_alerts_one(object: $object) {
      id
    }
  }
`;function bo(){return _(ya)}const ba=c`
  mutation UpdateAlert(
    $pk_columns: alerts_pk_columns_input!
    $_set: alerts_set_input!
  ) {
    update_alerts_by_pk(pk_columns: $pk_columns, _set: $_set) {
      id
    }
  }
`;function Eo(){return _(ba)}const Ea=c`
  mutation DeleteAlert($id: uuid!) {
    delete_alerts_by_pk(id: $id) {
      id
    }
  }
`;function To(){return _(Ea)}const Ta=c`
  mutation SendTestAlert(
    $deliveryConfig: json!
    $deliveryType: String!
    $explorationId: uuid
    $name: String
  ) {
    send_test_alert(
      deliveryConfig: $deliveryConfig
      deliveryType: $deliveryType
      name: $name
      explorationId: $explorationId
    ) {
      error
      result
    }
  }
`;function go(){return _(Ta)}const ga=c`
  mutation SetDefaultBranch($branch_id: uuid!, $datasource_id: uuid!) {
    update_branches(
      _set: { status: created }
      where: { datasource_id: { _eq: $datasource_id }, status: { _eq: active } }
    ) {
      affected_rows
    }
    update_branches_by_pk(
      _set: { status: active }
      pk_columns: { id: $branch_id }
    ) {
      id
      name
    }
  }
`;function vo(){return _(ga)}const va=c`
  mutation ExportData($branch_id: String) {
    export_data_models(branch_id: $branch_id) {
      download_url
    }
  }
`;function Ao(){return _(va)}const Aa=c`
  mutation CreateBranch($object: branches_insert_input!) {
    insert_branches_one(object: $object) {
      id
    }
  }
`;function Io(){return _(Aa)}const Ia=c`
  query CurrentUser($id: uuid!) {
    users_by_pk(id: $id) {
      id
      display_name
      avatar_url
      account {
        email
      }
      members(order_by: { updated_at: desc }) {
        member_roles {
          team_role
        }
        user {
          id
          avatar_url
          display_name
          account {
            email
          }
        }
        team {
          ...UserTeamFields
        }
      }
    }
  }
  ${ct}
`;function $o(e){return A({query:Ia,...e})}const $a=c`
  subscription SubCurrentUser($id: uuid!) {
    users_by_pk(id: $id) {
      id
      display_name
      avatar_url
      account {
        email
      }
      members(order_by: { updated_at: desc }) {
        id
        user_id
        member_roles {
          id
          team_role
          created_at
          updated_at
          access_list {
            id
            name
            config
          }
        }
        user {
          id
          avatar_url
          display_name
          account {
            email
          }
        }
        team {
          ...UserTeamFields
        }
      }
    }
  }
  ${ct}
`;function xo(e,t){return k({query:$a,...e},t)}const xa=c`
  query TeamData($team_id: uuid!) {
    teams_by_pk(id: $team_id) {
      ...TeamMembersFields
      datasources(order_by: { updated_at: desc }) {
        id
        name
        db_params_computed
        db_type
        created_at
        updated_at
        branches(
          where: { status: { _in: [active, created] } }
          order_by: { created_at: desc }
        ) {
          ...BranchesFields
        }
        sql_credentials(order_by: { updated_at: desc }) {
          id
          username
          created_at
          updated_at
          user {
            id
            display_name
          }
        }
      }
      alerts(order_by: { created_at: desc }) {
        id
        name
        delivery_type
        delivery_config
        trigger_config
        created_at
        updated_at
        schedule
        user {
          id
          avatar_url
          display_name
          account {
            email
          }
        }
        exploration {
          id
          playground_state
        }
      }
      reports(order_by: { created_at: desc }) {
        id
        name
        schedule
        delivery_type
        delivery_config
        created_at
        updated_at
        user {
          id
          avatar_url
          display_name
          account {
            email
          }
        }
        exploration {
          id
          playground_state
        }
      }
    }
  }
  ${ut}
  ${ot}
`;function Do(e){return A({query:xa,...e})}const Da=c`
  subscription SubTeamData($team_id: uuid!) {
    teams_by_pk(id: $team_id) {
      ...TeamMembersFields
      datasources(order_by: { updated_at: desc }) {
        id
        name
        db_params_computed
        db_type
        created_at
        updated_at
        branches(
          where: { status: { _in: [active, created] } }
          order_by: { created_at: desc }
        ) {
          ...BranchesFields
        }
        sql_credentials {
          id
          username
          created_at
          updated_at
          user {
            id
            display_name
          }
        }
      }
      alerts(order_by: { created_at: desc }) {
        id
        name
        delivery_type
        delivery_config
        trigger_config
        created_at
        updated_at
        schedule
        user {
          id
          avatar_url
          display_name
          account {
            email
          }
        }
        exploration {
          id
          playground_state
        }
      }
      reports(order_by: { created_at: desc }) {
        id
        name
        schedule
        delivery_type
        delivery_config
        created_at
        updated_at
        user {
          id
          avatar_url
          display_name
          account {
            email
          }
        }
        exploration {
          id
          playground_state
        }
      }
    }
  }
  ${ut}
  ${ot}
`;function No(e,t){return k({query:Da,...e},t)}const Na=c`
  mutation UpdateUserInfo(
    $user_id: uuid!
    $display_name: String
    $email: citext
  ) {
    update_users_by_pk(
      pk_columns: { id: $user_id }
      _set: { display_name: $display_name }
    ) {
      id
    }
    update_auth_accounts(
      where: { user_id: { _eq: $user_id } }
      _set: { email: $email }
    ) {
      affected_rows
    }
  }
`;function So(){return _(Na)}const Sa=c`
  mutation CreateDataSource($object: datasources_insert_input!) {
    insert_datasources_one(object: $object) {
      id
      name
      branches {
        id
      }
      sql_credentials {
        id
      }
    }
  }
`;function Oo(){return _(Sa)}c`
  query Datasources(
    $offset: Int
    $limit: Int
    $where: datasources_bool_exp
    $order_by: [datasources_order_by!]
  ) {
    datasources(
      offset: $offset
      limit: $limit
      where: $where
      order_by: $order_by
    ) {
      id
      name
      db_params_computed
      db_type
      created_at
      updated_at
      branches(where: { status: { _eq: active } }) {
        id
      }
      sql_credentials {
        id
        username
        created_at
        updated_at
        user {
          id
          display_name
        }
      }
    }
    datasources_aggregate(where: $where) {
      aggregate {
        count
      }
    }
  }
`;c`
  subscription AllDataSources(
    $offset: Int
    $limit: Int
    $where: datasources_bool_exp
    $order_by: [datasources_order_by!]
  ) {
    datasources(
      offset: $offset
      limit: $limit
      where: $where
      order_by: $order_by
    ) {
      id
      name
      db_params_computed
      db_type
      created_at
      updated_at
      branches(where: { status: { _eq: active } }) {
        id
      }
      sql_credentials {
        id
        username
        created_at
        updated_at
        user {
          id
          display_name
        }
      }
    }
  }
`;const Oa=c`
  query FetchTables($id: uuid!) {
    fetch_tables(datasource_id: $id) {
      schema
    }
  }
`;function Co(e){return A({query:Oa,...e})}const Ca=c`
  query FetchMeta($datasource_id: uuid!, $branch_id: uuid) {
    fetch_meta(datasource_id: $datasource_id, branch_id: $branch_id) {
      cubes
    }
  }
`;function ko(e){return A({query:Ca,...e})}c`
  query CurrentDataSource($id: uuid!) {
    datasources_by_pk(id: $id) {
      id
      name
      db_type
      db_params_computed
      created_at
      updated_at
    }
  }
`;const ka=c`
  mutation UpdateDataSource(
    $pk_columns: datasources_pk_columns_input!
    $_set: datasources_set_input!
  ) {
    update_datasources_by_pk(pk_columns: $pk_columns, _set: $_set) {
      id
      branches(where: { status: { _eq: active } }) {
        id
      }
    }
  }
`;function Lo(){return _(ka)}const La=c`
  mutation CheckConnection($id: uuid!) {
    check_connection(datasource_id: $id) {
      message
      code
    }
  }
`;function wo(){return _(La)}const wa=c`
  mutation DeleteDataSource($id: uuid!) {
    delete_datasources_by_pk(id: $id) {
      id
    }
  }
`;function Ro(){return _(wa)}const Ra=c`
  mutation GenDataSchemas(
    $datasource_id: uuid!
    $branch_id: uuid!
    $tables: [SourceTable!]!
    $overwrite: Boolean
    $format: String
  ) {
    gen_dataschemas(
      datasource_id: $datasource_id
      branch_id: $branch_id
      tables: $tables
      overwrite: $overwrite
      format: $format
    ) {
      code
      message
    }
  }
`;function Fo(){return _(Ra)}const Fa=c`
  mutation RunSourceSQLQuery(
    $datasource_id: uuid!
    $query: String!
    $limit: Int!
  ) {
    run_query(datasource_id: $datasource_id, query: $query, limit: $limit) {
      result
    }
  }
`;function Mo(){return _(Fa)}const Ma=c`
  mutation CreateExploration($object: explorations_insert_input!) {
    insert_explorations_one(object: $object) {
      id
    }
  }
`;function Po(){return _(Ma)}const Pa=c`
  mutation GenSQL($exploration_id: uuid!) {
    gen_sql(exploration_id: $exploration_id) {
      result
    }
  }
`;function Uo(){return _(Pa)}const Ua=c`
  query CurrentExploration($id: uuid!, $offset: Int, $limit: Int) {
    explorations_by_pk(id: $id) {
      id
      branch_id
      datasource_id
      playground_state
      playground_settings
      created_at
      updated_at
    }
    fetch_dataset(exploration_id: $id, offset: $offset, limit: $limit) {
      annotation
      data
      query
      progress
      hitLimit
    }
  }
`;function qo(e){return A({query:Ua,...e})}c`
  query Members(
    $offset: Int
    $limit: Int
    $where: members_bool_exp
    $order_by: [members_order_by!]
  ) {
    members(
      offset: $offset
      limit: $limit
      where: $where
      order_by: $order_by
    ) {
      id
      user {
        id
        display_name
        account {
          email
        }
      }
      member_roles {
        id
        team_role
        access_list {
          id
          name
        }
        updated_at
        created_at
      }
      updated_at
      created_at
    }
  }
`;c`
  mutation UpdateMember(
    $pk_columns: members_pk_columns_input!
    $_set: members_set_input!
  ) {
    update_members_by_pk(pk_columns: $pk_columns, _set: $_set) {
      id
    }
  }
`;const qa=c`
  mutation UpdateMemberRole(
    $pk_columns: member_roles_pk_columns_input!
    $_set: member_roles_set_input!
  ) {
    update_member_roles_by_pk(pk_columns: $pk_columns, _set: $_set) {
      id
    }
  }
`;function Bo(){return _(qa)}const Ba=c`
  mutation DeleteMember($id: uuid!) {
    delete_members_by_pk(id: $id) {
      id
    }
  }
`;function jo(){return _(Ba)}const ja=c`
  mutation InviteMember($email: String!, $teamId: uuid!, $role: String) {
    invite_team_member(email: $email, teamId: $teamId, role: $role) {
      memberId
    }
  }
`;function Vo(){return _(ja)}const Va=c`
  query CurrentLog($id: uuid!) {
    request_logs_by_pk(id: $id) {
      ...DefaultFields
      end_time
      request_id
      updated_at
      request_event_logs(order_by: { timestamp: desc }) {
        id
        duration
        event
        path
        query
        query_key
        query_sql
        query_key_md5
        queue_prefix
        time_in_queue
        timestamp
        error
      }
    }
  }
  ${dt}
`;function Go(e){return A({query:Va,...e})}const Ga=c`
  query AllLogs(
    $offset: Int
    $limit: Int
    $where: request_logs_bool_exp
    $order_by: [request_logs_order_by!]
  ) {
    request_logs(
      offset: $offset
      limit: $limit
      where: $where
      order_by: $order_by
    ) {
      ...DefaultFields
      request_event_logs_aggregate {
        aggregate {
          count
        }
      }
    }
    request_logs_aggregate(where: $where) {
      aggregate {
        count
      }
    }
  }
  ${dt}
`;function Yo(e){return A({query:Ga,...e})}const Ya=c`
  subscription SubAllLogs(
    $offset: Int
    $limit: Int
    $where: request_logs_bool_exp
    $order_by: [request_logs_order_by!]
  ) {
    request_logs(
      offset: $offset
      limit: $limit
      where: $where
      order_by: $order_by
    ) {
      id
    }
  }
`;function Qo(e,t){return k({query:Ya,...e},t)}const Qa=c`
  mutation CreateReport($object: reports_insert_input!) {
    insert_reports_one(object: $object) {
      id
    }
  }
`;function Jo(){return _(Qa)}const Ja=c`
  mutation UpdateReport(
    $pk_columns: reports_pk_columns_input!
    $_set: reports_set_input!
  ) {
    update_reports_by_pk(pk_columns: $pk_columns, _set: $_set) {
      id
    }
  }
`;function Ho(){return _(Ja)}const Ha=c`
  mutation DeleteReport($id: uuid!) {
    delete_reports_by_pk(id: $id) {
      id
    }
  }
`;function Xo(){return _(Ha)}c`
  subscription AllSchemas(
    $offset: Int
    $limit: Int
    $where: dataschemas_bool_exp
    $order_by: [dataschemas_order_by!]
  ) {
    dataschemas(
      offset: $offset
      limit: $limit
      where: $where
      order_by: $order_by
    ) {
      id
      user_id
      name
      checksum
      datasource {
        team_id
      }
    }
  }
`;c`
  query AllDataSchemas(
    $offset: Int
    $limit: Int
    $where: branches_bool_exp
    $order_by: [branches_order_by!]
  ) {
    branches(
      offset: $offset
      limit: $limit
      where: $where
      order_by: $order_by
    ) {
      id
      name
      status
      versions(order_by: { created_at: desc }) {
        id
        checksum
        created_at
        updated_at
        user {
          display_name
        }
        dataschemas {
          id
          name
          code
          created_at
          updated_at
          datasource_id
        }
      }
    }
  }
`;const Xa=c`
  mutation DeleteSchema($id: uuid!) {
    update_branches_by_pk(_set: { status: archived }, pk_columns: { id: $id }) {
      id
    }
  }
`;function zo(){return _(Xa)}c`
  query Credentials($teamId: uuid!) {
    sql_credentials(
      where: { datasource: { team_id: { _eq: $teamId } } }
      order_by: { created_at: desc }
    ) {
      id
      username
      created_at
      user {
        id
        display_name
      }
      datasource {
        id
        name
        db_type
        db_params_computed
      }
    }
  }
`;c`
  subscription SubCredentials($teamId: uuid!) {
    sql_credentials(where: { datasource: { team_id: { _eq: $teamId } } }) {
      id
    }
  }
`;const za=c`
  mutation InsertSqlCredentials($object: sql_credentials_insert_input!) {
    insert_sql_credentials_one(object: $object) {
      id
    }
  }
`;function Wo(){return _(za)}const Wa=c`
  mutation DeleteCredentials($id: uuid!) {
    delete_sql_credentials_by_pk(id: $id) {
      id
    }
  }
`;function Zo(){return _(Wa)}const Za=c`
  mutation CreateTeam($name: String!) {
    create_team(name: $name) {
      id
      name
    }
  }
`;function Ko(){return _(Za)}const Ka=c`
  mutation EditTeam(
    $pk_columns: teams_pk_columns_input!
    $_set: teams_set_input!
  ) {
    update_teams_by_pk(pk_columns: $pk_columns, _set: $_set) {
      id
      name
    }
  }
`;function ec(){return _(Ka)}const eo=c`
  mutation DeleteTeam($id: uuid!) {
    delete_teams_by_pk(id: $id) {
      id
    }
  }
`;function tc(){return _(eo)}c`
  query CurrentTeam($id: uuid!) {
    teams_by_pk(id: $id) {
      id
      created_at
      updated_at
      members {
        user {
          display_name
        }
      }
    }
  }
`;c`
  query GetUsers {
    users {
      id
    }
  }
`;const to=c`
  subscription VersionDoc($id: uuid!) {
    versions_by_pk(id: $id) {
      markdown_doc
    }
  }
`;function rc(e,t){return k({query:to,...e},t)}const ro=c`
  mutation CreateVersion($object: versions_insert_input!) {
    insert_versions_one(object: $object) {
      id
    }
  }
`;function nc(){return _(ro)}const no=c`
  query versionByBranchId($branch_id: uuid!, $limit: Int, $offset: Int) {
    versions(
      limit: $limit
      offset: $offset
      order_by: { created_at: desc }
      where: { branch_id: { _eq: $branch_id } }
    ) {
      id
      checksum
      updated_at
      created_at
      user {
        display_name
      }
      dataschemas(order_by: { name: asc }) {
        created_at
        updated_at
        datasource_id
        id
        user_id
        name
        code
        checksum
      }
    }
    versions_aggregate(where: { branch_id: { _eq: $branch_id } }) {
      aggregate {
        count
      }
    }
  }
`;function sc(e){return A({query:no,...e})}const so=c`
  query CurrentVersion($branch_id: uuid!) {
    versions(
      limit: 1
      offset: 0
      order_by: { created_at: desc }
      where: { branch_id: { _eq: $branch_id } }
    ) {
      id
      checksum
      dataschemas(order_by: { name: asc }) {
        created_at
        updated_at
        datasource_id
        id
        user_id
        name
        code
        checksum
      }
    }
  }
`;function ic(e){return A({query:so,...e})}const io=c`
  subscription VersionsCount($branch_id: uuid!) {
    versions_aggregate(where: { branch_id: { _eq: $branch_id } }) {
      aggregate {
        count
      }
    }
  }
`;function ac(e,t){return k({query:io,...e},t)}const ao=5e3,re="lastTeamId",oc=yt((e,t)=>({loading:!1,currentUser:{teams:[]},currentTeam:null,teamData:null,setTeamData:r=>e({teamData:r,loading:!1}),setLoading:r=>{e({loading:r}),setTimeout(()=>{t().loading&&e({loading:!1})},ao)},setUserData:r=>{e({currentUser:r,loading:!1})},setCurrentTeam(r){var o,u;const s=t(),n=(u=(o=s==null?void 0:s.currentUser)==null?void 0:o.teams)==null?void 0:u.find(l=>l.id===r);if(!n){localStorage.removeItem(re);return}localStorage.getItem(re)!==r&&localStorage.setItem(re,r),e({currentTeam:n})}}));export{Vo as A,Bo as B,oc as C,_o as D,yo as E,fo as F,mo as G,ho as H,So as I,Wo as J,da as K,re as L,Zo as M,Qo as N,la as O,Yo as P,Go as Q,Po as R,Uo as S,qo as T,Jo as U,Ho as V,Xo as W,bo as X,Eo as Y,To as Z,go as _,$o as a,xo as b,Do as c,No as d,po as e,sc as f,Oo as g,Lo as h,Ro as i,wo as j,Fo as k,Mo as l,ko as m,Co as n,zo as o,Io as p,nc as q,vo as r,ac as s,ic as t,Ko as u,Ao as v,rc as w,ec as x,tc as y,jo as z};
