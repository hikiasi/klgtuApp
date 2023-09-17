import{j as e}from"./jsx-runtime-6eef64cc.js";import{H as a}from"./styled-components.browser.esm-2266bc01.js";import{r as m}from"./index-c013ead5.js";import{T as l}from"./typography-1c065611.js";import"./icon-workshop-pe-bc270cda.js";import"./radio-button-97b5567a.js";import"./infinity-circle-progress-1a0860ea.js";import"./list-item-a334a94a.js";import"./text-input-6a2bfc79.js";import{B as g}from"./button-7a8d2db4.js";import"./radio-item-d999eaf3.js";import"./icon-button-a3781c00.js";import"./notification-item-75306928.js";import"./_commonjsHelpers-725317a4.js";import"./icon-list-ce1b1f10.js";const x=({children:r})=>e.jsx(f,{children:r}),f=a.div`
display: flex;
width: 1140px;
align-items: flex-start;
gap: 24px;
  
`;try{card.displayName="card",card.__docgenInfo={description:"",displayName:"card",props:{}}}catch{}const u=({children:r})=>e.jsx(_,{children:r}),_=a.div`
  & img {
    width: 100%;
    height: auto;
    opacity: 0.33;
    background: 50% / cover no-repeat;
    mix-blend-mode: luminosity;
    display: block;
    border-radius: 0 0 20px 20px;
    transition: .3s ease all;
  }
  &:hover img,
  &:focus img {
    opacity: 0.8;
    mix-blend-mode: normal;
    background: url("./images/main-section-state-hovered-focused.png") 50% / cover no-repeat;
  }
`;try{cardmain.displayName="cardmain",cardmain.__docgenInfo={description:"",displayName:"cardmain",props:{}}}catch{}const y=m.forwardRef(({children:r,...p},c)=>e.jsx(h,{ref:c,...p,children:r})),h=a.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;try{cardinfo.displayName="cardinfo",cardinfo.__docgenInfo={description:"",displayName:"cardinfo",props:{}}}catch{}const t=Object.assign(x,{Info:y,Main:u}),d=({})=>e.jsx(t,{children:e.jsxs(j,{children:[e.jsxs(t.Info,{children:[e.jsx(l,{variant:"title1",type:"bold",children:"Веб-версия расписания КГТУ"}),e.jsx(b,{children:e.jsx(g,{text:"Перейти к расписанию",variant:"filled",size:"large"})})]}),e.jsx(t.Main,{children:e.jsx("img",{src:"./images/main-section-state-enabled.png",alt:""})})]})}),b=a.div`
  display: flex;
  align-items: center;
  gap: 8px;
`,j=a.div`
display: flex;
padding-top: 64px;
flex-direction: column;
justify-content: flex-end;
align-items: center;
gap: 56px;
border-radius: 20px;
border: 1px solid ${({theme:{palette:r}})=>r.background.bg_150};
background: ${({theme:{palette:r}})=>r.background.bg_000};
`,T={title:"",component:d},o={render:r=>e.jsx(d,{...r}),args:{}};var i,n,s;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: args => <CardComponent {...args} />,
  args: {}
}`,...(s=(n=o.parameters)==null?void 0:n.docs)==null?void 0:s.source}}};const z=["Default"];export{o as Default,z as __namedExportsOrder,T as default};
//# sourceMappingURL=card.stories-877ae03a.js.map
