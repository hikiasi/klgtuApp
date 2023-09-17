import{j as l}from"./jsx-runtime-6eef64cc.js";import{H as f}from"./styled-components.browser.esm-2266bc01.js";import{T as a}from"./typography-1c065611.js";import"./icon-workshop-pe-bc270cda.js";import{I as x}from"./icon-list-ce1b1f10.js";import"./radio-button-97b5567a.js";import"./infinity-circle-progress-1a0860ea.js";import{r as _}from"./index-c013ead5.js";const c=_.forwardRef(({text:e,isDisable:t=!1,variant:r="filled",size:n="medium",icon:o,onClick:u,...d},m)=>{const p={large:"subheadline",medium:"footnote",small:"caption2"};return l.jsxs(h,{onClick:u,isDisable:t,variant:r,disabled:t,size:n,ref:m,...d,children:[o&&x[o],l.jsx(a,{type:"medium",variant:p[n],children:e})]})}),h=f.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  padding: ${({size:e})=>{switch(e){case"small":return"6px 10px";case"medium":return"9px 14px";case"large":return"10px 16px"}}};
  border-radius: 6px;
  background: ${({theme:{palette:e},isDisable:t,variant:r})=>{let n=t?e.background.bg_150:e.accent.primary_500;return(r==="outlined"||r==="text")&&(n="transparent"),n}};
  border: ${({theme:{palette:e},variant:t,isDisable:r})=>t==="outlined"?r?`1px solid ${e.background.bg_150}`:`1px solid ${e.accent.primary_500}`:"none"};
  cursor: pointer;
  &:active {
    box-shadow: ${({theme:{palette:e},isDisable:t,variant:r})=>!t&&r!=="text"&&`0px 0px 0px 2px ${e.accent.primary_500_op12}`};
  };
  &:hover {
    background: ${({theme:{palette:e},isDisable:t,variant:r})=>r==="filled"&&!t?e.accent.primary_550:""};
  };
  & ${a} {
  color: ${({theme:e,isDisable:t,variant:r})=>i(e,{isDisable:t,variant:r})};
  };
  &:hover ${a} {
    color: ${({theme:{palette:e},isDisable:t,variant:r})=>{let n=e.accent.primary_550;return r==="filled"&&(n=e.content.cnt_const_white),t&&(n=e.content.cnt_050),n}};
  };
  &:active ${a}{
    color: ${({theme:e,isDisable:t,variant:r})=>i(e,{isDisable:t,variant:r})}
  };
  & svg {
    width: ${({size:e})=>s({size:e})};
    height: ${({size:e})=>s({size:e})};
  }
  & svg path {
    fill: ${({theme:e,isDisable:t,variant:r})=>i(e,{isDisable:t,variant:r})}
  };
  &:hover svg path {
    fill: ${({theme:{palette:e},isDisable:t,variant:r})=>{let n=e.accent.primary_550;return r==="filled"&&(n=e.content.cnt_const_white),t&&(n=e.content.cnt_050),n}}
  };
`,i=({palette:e},{variant:t,isDisable:r})=>{let n=e.accent.primary_500;return t==="filled"&&(n=e.content.cnt_const_white),r&&(n=e.content.cnt_050),n},s=({size:e})=>{let t=0;switch(e){case"small":t=12;break;case"medium":t=14;break;case"large":t=16;break}return`${t}px`};try{c.displayName="Button",c.__docgenInfo={description:"",displayName:"Button",props:{text:{defaultValue:null,description:"",name:"text",required:!0,type:{name:"string"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"(() => void)"}},size:{defaultValue:{value:"medium"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'}]}},variant:{defaultValue:{value:"filled"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"text"'},{value:'"filled"'},{value:'"outlined"'}]}},isDisable:{defaultValue:{value:"false"},description:"",name:"isDisable",required:!1,type:{name:"boolean"}},icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"any"}}}}}catch{}export{c as B};
//# sourceMappingURL=button-7a8d2db4.js.map
