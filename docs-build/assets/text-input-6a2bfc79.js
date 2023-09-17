import{j as u}from"./jsx-runtime-6eef64cc.js";import{H as p}from"./styled-components.browser.esm-2266bc01.js";import{r as i}from"./index-c013ead5.js";import"./typography-1c065611.js";import"./icon-workshop-pe-bc270cda.js";import{I}from"./icon-list-ce1b1f10.js";import"./radio-button-97b5567a.js";import"./infinity-circle-progress-1a0860ea.js";const x=i.forwardRef(({value:e="",placeholder:n,onChange:o,disabled:t=!1,icon:r,button:c,width:g,...y},_)=>{var f;const s=i.useRef(null),l=i.useRef(null),[b,d]=i.useState(!1),v=a=>{a.preventDefault,!t&&o(a.target.value)},w=()=>{d(!0)},$=()=>{d(!1)},q=a=>{var m,h;t||(m=l.current)!=null&&m.contains(a.target)||(h=s.current)==null||h.focus()};return u.jsxs(R,{onClick:q,isActive:b,isDisable:t,isText:!!((f=s.current)!=null&&f.value),width:g,ref:_,...y,children:[r&&I[r],u.jsx(V,{placeholder:n,value:e,type:"text",onChange:v,ref:s,onFocus:w,onBlur:$,disabled:t}),c&&u.jsx(j,{ref:l,children:c})]})}),R=p.div`
  width: ${({width:e})=>e}px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 8px;
  padding: 11px 16px;
  border: 1.5px solid ${({theme:{palette:e},isActive:n,isDisable:o})=>{let t=n?e.accent.primary_500:e.content.cnt_100;return o&&(t=e.background.bg_250),t}};
  border-radius: 8px;
  cursor: pointer;
  box-shadow: 0px 0px 0px 2px ${({theme:{palette:e},isActive:n})=>n?e.accent.primary_500_op12:"none"};
  & > svg {
    height: 20px;
    width: 20px;
    min-height: 20px;
    min-width: 20px;
  };
  & > svg path {
    fill: ${({theme:{palette:e},isActive:n,isDisable:o,isText:t})=>{let r=e.content.cnt_100;return(n||t)&&(r=e.content.cnt_000),o&&(r=e.background.bg_250),r}};
  }
`,V=p.input`
  width: 100%;
  height: auto;
  background: transparent;
  outline: none;
  border: none;
  cursor: pointer;
  padding: 0;
  caret-color: ${({theme:{palette:e}})=>e.accent.primary_500};
  ${({theme:{typography:e}})=>e.footnote};
  font-size: ${({theme:{typography:e}})=>e.footnote.size};
  &::placeholder {
    color: ${({theme:{palette:e}})=>e.content.cnt_100};
  }
`,j=p.div`
  width: auto;
`;try{x.displayName="TextInput",x.__docgenInfo={description:"",displayName:"TextInput",props:{value:{defaultValue:{value:""},description:"",name:"value",required:!1,type:{name:"string"}},placeholder:{defaultValue:null,description:"",name:"placeholder",required:!1,type:{name:"string"}},icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"any"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"(e: string) => void"}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}},button:{defaultValue:null,description:"",name:"button",required:!1,type:{name:"ReactNode"}},width:{defaultValue:null,description:"",name:"width",required:!1,type:{name:"number"}}}}}catch{}export{x as T};
//# sourceMappingURL=text-input-6a2bfc79.js.map
