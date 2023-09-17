import{j as t}from"./jsx-runtime-6eef64cc.js";import{Z as m,H as i}from"./styled-components.browser.esm-2266bc01.js";import{T as u}from"./typography-1c065611.js";import{r as f}from"./icon-workshop-pe-bc270cda.js";import{I as x}from"./icon-list-ce1b1f10.js";import"./radio-button-97b5567a.js";import"./infinity-circle-progress-1a0860ea.js";import{r as h}from"./index-c013ead5.js";const n=h.forwardRef(({text:e,onClick:l,isPicked:r=!1,type:a="default",showIcon:s=!1,icon:o,...p},c)=>{const{palette:d}=m();return t.jsxs(y,{onClick:l,type:a,ref:c,...p,children:[t.jsx(u,{variant:a==="default"?"callout":"footnote",type:"light",children:e}),r&&t.jsx(f,{color:d.accent.primary_550,size:a==="default"?22:16}),!r&&s&&o&&t.jsx(_,{children:x[o]})]})}),y=i.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${({type:e})=>e==="default"?"9px 24px 9px 16px":"12px 11px"};
  border-bottom: 1px solid ${({theme:{palette:e}})=>e.content.cnt_200};
  cursor: pointer;
  background: ${({theme:{palette:e}})=>e.background.bg_000};
  &:hover, &:active {
    border-color: ${({theme:{palette:e}})=>e.accent.primary_500_op12};
    background: ${({theme:{palette:e}})=>e.accent.primary_500_op12};
  };
`,_=i.div`
  & svg {
    width: 22px;
    height: 22px;
  }
  & svg path {
    fill: ${({theme:{palette:e}})=>e.content.cnt_100};
  }
`;try{n.displayName="ListItem",n.__docgenInfo={description:"",displayName:"ListItem",props:{onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"(() => void)"}},text:{defaultValue:null,description:"",name:"text",required:!0,type:{name:"string"}},icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"any"}},showIcon:{defaultValue:{value:"false"},description:"",name:"showIcon",required:!1,type:{name:"boolean"}},isPicked:{defaultValue:{value:"false"},description:"",name:"isPicked",required:!1,type:{name:"boolean"}},type:{defaultValue:{value:"default"},description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"default"'}]}}}}}catch{}export{n as L};
//# sourceMappingURL=list-item-a334a94a.js.map
