import{j as r}from"./jsx-runtime-6eef64cc.js";import{H as t,U as l}from"./styled-components.browser.esm-2266bc01.js";import{T as d}from"./typography-1c065611.js";import{q as m}from"./icon-workshop-pe-bc270cda.js";import"./radio-button-97b5567a.js";import"./infinity-circle-progress-1a0860ea.js";import{I as c}from"./icon-button-a3781c00.js";import{r as u}from"./index-c013ead5.js";const o=u.forwardRef(({text:e,isPicked:i,onClose:a,autoCloseTime:n=10,...s},p)=>r.jsxs(x,{ref:p,...s,children:[i&&r.jsx(h,{timer:n}),r.jsx(m,{}),r.jsx(d,{children:e}),r.jsx(f,{children:r.jsx(c,{icon:"xClose",variant:"transparent",onClick:a})})]})),x=t.div`
  position: relative;
  padding: 24px;
  background: ${({theme:{palette:e}})=>e.background.bg_000};
  display: flex;
  align-items: center;
  gap: 12px;
  border-radius: 20px;
  box-shadow: 0px 5px 16px 0px rgba(0,0,0, .1);
`,f=t.div`
  display: flex;
  margin-left: auto;
`,g=l`
  from {
    width: calc(100% - 48px)
  }
  to {
    width: 0;
  }
`,h=t.div`
  margin-right: auto;
  position: absolute;
  top: 0;
  left: 24px;
  height: 4px;
  background: ${({theme:{palette:e}})=>e.system.error_500};
  border-radius: 0px 0px 2px 2px;
  animation: ${g} ${({timer:e})=>`${e}s`} linear;
`;try{o.displayName="NotificationItem",o.__docgenInfo={description:"",displayName:"NotificationItem",props:{isPicked:{defaultValue:null,description:"",name:"isPicked",required:!1,type:{name:"boolean"}},autoCloseTime:{defaultValue:{value:"10"},description:"",name:"autoCloseTime",required:!1,type:{name:"number"}},text:{defaultValue:null,description:"",name:"text",required:!0,type:{name:"string"}},onClose:{defaultValue:null,description:"",name:"onClose",required:!0,type:{name:"() => void"}}}}}catch{}export{o as N};
//# sourceMappingURL=notification-item-75306928.js.map
