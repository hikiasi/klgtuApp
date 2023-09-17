import{j as d}from"./jsx-runtime-6eef64cc.js";import{H as p}from"./styled-components.browser.esm-2266bc01.js";import"./typography-1c065611.js";import"./icon-workshop-pe-bc270cda.js";import{I as f}from"./icon-list-ce1b1f10.js";import"./radio-button-97b5567a.js";import"./infinity-circle-progress-1a0860ea.js";import{r as m}from"./index-c013ead5.js";const a=m.forwardRef(({onClick:e,icon:t,isDisable:n=!1,variant:r="filled",form:i="ellipse",width:l=24,height:o=24,padding:u=!0,...s},c)=>d.jsx(_,{onClick:e,isDisable:n,variant:r,form:i,disabled:n,height:o,width:l,padding:u,ref:c,...s,children:f[t]})),_=p.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${({padding:e})=>e?"8px":"0px"};
  border-radius: ${({form:e})=>e==="square"?"8px":"50%"};
  border: none;
  cursor: pointer;
  background: ${({theme:{palette:e},variant:t,isDisable:n})=>{let r=e.accent.primary_500;return t==="tonal"&&(r=e.accent.primary_500_op12),n&&(t==="tonal"?r=e.background.bg_050:r=e.background.bg_150),t==="transparent"&&(r="transparent"),r}};
  &:hover {
    background: ${({theme:{palette:e},variant:t,isDisable:n})=>t==="filled"&&!n?e.accent.primary_550:""};
  };
  & svg {
    width: ${({width:e})=>`${e}px`};
    height: ${({height:e})=>`${e}px`};
  };
  & svg path {
    fill: ${({theme:{palette:e},isDisable:t,variant:n})=>{let r=e.content.cnt_000;return n==="filled"?r=e.content.cnt_const_white:n==="tonal"&&(r=e.accent.primary_500),t&&(n==="transparent"&&(r=e.content.cnt_100),n==="filled"&&(r=e.content.cnt_050),n==="tonal"&&(r=e.content.cnt_150)),r}}
  };
  &:active svg path {
    fill: ${({theme:{palette:e},variant:t})=>t==="transparent"?e.accent.primary_500:""}
  }
`;try{a.displayName="IconButton",a.__docgenInfo={description:"",displayName:"IconButton",props:{onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"(() => void)"}},variant:{defaultValue:{value:"filled"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"filled"'},{value:'"transparent"'},{value:'"tonal"'}]}},form:{defaultValue:{value:"ellipse"},description:"",name:"form",required:!1,type:{name:"enum",value:[{value:'"ellipse"'},{value:'"square"'}]}},isDisable:{defaultValue:{value:"false"},description:"",name:"isDisable",required:!1,type:{name:"boolean"}},icon:{defaultValue:null,description:"",name:"icon",required:!0,type:{name:"TIconsList"}},width:{defaultValue:{value:"24"},description:"",name:"width",required:!1,type:{name:"number"}},height:{defaultValue:{value:"24"},description:"",name:"height",required:!1,type:{name:"number"}},padding:{defaultValue:{value:"true"},description:"",name:"padding",required:!1,type:{name:"boolean"}}}}}catch{}export{a as I};
//# sourceMappingURL=icon-button-a3781c00.js.map
