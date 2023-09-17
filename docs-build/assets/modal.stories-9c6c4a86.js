import{j as o}from"./jsx-runtime-6eef64cc.js";import{H as a}from"./styled-components.browser.esm-2266bc01.js";import{r as n}from"./index-c013ead5.js";import"./list-item-a334a94a.js";import"./text-input-6a2bfc79.js";import{B as y}from"./button-7a8d2db4.js";import"./radio-item-d999eaf3.js";import{I as $}from"./icon-button-a3781c00.js";import"./notification-item-75306928.js";import{T as q}from"./typography-1c065611.js";import"./icon-workshop-pe-bc270cda.js";import"./radio-button-97b5567a.js";import"./infinity-circle-progress-1a0860ea.js";import"./_commonjsHelpers-725317a4.js";import"./icon-list-ce1b1f10.js";const b=n.createContext({onHide(){}}),v=n.forwardRef(({children:e,...r},t)=>o.jsx(V,{...r,ref:t,children:e})),V=a.div`

`;try{modaldialog.displayName="modaldialog",modaldialog.__docgenInfo={description:"",displayName:"modaldialog",props:{}}}catch{}const I=n.forwardRef(({backdrop:e=!0,autoFocus:r=!0,scrollable:t=!1,keyboard:s=!0,onEscapeKeyDown:c,onHide:d,onShow:p,children:k,closeOnBackdrop:A=!0,show:f,...x},B)=>{const m=()=>{t||(document.body.style.overflow="auto"),d==null||d()},C=n.useMemo(()=>({onHide:m}),[m]),M=u=>{s&&D(u)&&(c==null||c(u)),u.defaultPrevented&&(d==null||d())},N=()=>{t||(document.body.style.overflow="hidden"),p==null||p()},w=()=>o.jsx(v,{ref:B,...x,children:k});return n.useEffect(()=>{f&&N()},[f]),o.jsxs(b.Provider,{value:C,children:[o.jsx(E,{onMouseUp:m}),o.jsx(T,{onKeyDown:M,...x,children:w()})]})}),T=a.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  border-radius: 12px;
  border: 1px solid ${({theme:{palette:e}})=>e.background.bg_150};
  background: ${({theme:{palette:e}})=>e.background.bg_000};
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`,E=a.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  left: 0;
  right: 0;
  background: rgba(0,0,0,.2);
`,D=e=>e.code==="Escape"||e.keyCode===27;try{modal.displayName="modal",modal.__docgenInfo={description:"",displayName:"modal",props:{scrollable:{defaultValue:{value:"false"},description:"",name:"scrollable",required:!1,type:{name:"boolean"}},keyboard:{defaultValue:{value:"true"},description:"",name:"keyboard",required:!1,type:{name:"boolean"}},backdrop:{defaultValue:{value:"true"},description:"",name:"backdrop",required:!1,type:{name:"boolean"}},show:{defaultValue:null,description:"",name:"show",required:!0,type:{name:"boolean"}},closeOnBackdrop:{defaultValue:{value:"true"},description:"",name:"closeOnBackdrop",required:!1,type:{name:"boolean"}},onEscapeKeyDown:{defaultValue:null,description:"",name:"onEscapeKeyDown",required:!1,type:{name:"((e: KeyboardEvent<Element>) => void)"}},onHide:{defaultValue:null,description:"",name:"onHide",required:!1,type:{name:"(() => void)"}},onShow:{defaultValue:null,description:"",name:"onShow",required:!1,type:{name:"(() => void)"}}}}}catch{}const F=({children:e})=>o.jsx(O,{children:o.jsx(W,{children:e})}),O=a.div`
  padding: 16px 16px 0px 16px;
  margin-bottom: 20px;
`,W=a.div`

`;try{modalbody.displayName="modalbody",modalbody.__docgenInfo={description:"",displayName:"modalbody",props:{}}}catch{}const H=({children:e})=>o.jsx(R,{children:e}),R=a.div`
  padding: 0px 16px 16px 16px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 16px;
`;try{modalfooter.displayName="modalfooter",modalfooter.__docgenInfo={description:"",displayName:"modalfooter",props:{}}}catch{}const z=({children:e,onHide:r})=>{const t=n.useContext(b),s=()=>{t==null||t.onHide(),r==null||r()};return o.jsxs(K,{children:[e,o.jsx($,{icon:"xClose",variant:"transparent",width:18,height:18,onClick:s,padding:!1})]})},K=a.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid ${({theme:{palette:e}})=>e.background.bg_150};
  padding: 16px;
  gap: 8px;
`;try{modalheader.displayName="modalheader",modalheader.__docgenInfo={description:"",displayName:"modalheader",props:{onHide:{defaultValue:null,description:"",name:"onHide",required:!1,type:{name:"(() => void)"}}}}}catch{}const P=({children:e})=>o.jsx(q,{variant:"callout",children:e});try{modaltitle.displayName="modaltitle",modaltitle.__docgenInfo={description:"",displayName:"modaltitle",props:{}}}catch{}const l=Object.assign(I,{Body:F,Header:z,Title:P,Footer:H,Dialog:v}),j=({backdrop:e,contentWidth:r,contentHeight:t})=>o.jsxs(l,{show:!0,backdrop:e,children:[o.jsx(l.Header,{children:o.jsx(l.Title,{children:"Test"})}),o.jsx(l.Body,{children:o.jsx(U,{width:r,height:t,children:"Содержимое компонента"})}),o.jsxs(l.Footer,{children:[o.jsx(y,{variant:"outlined",icon:"plus",size:"medium",text:"ButtonText"}),o.jsx(y,{variant:"filled",icon:"plus",size:"medium",text:"ButtonText"})]})]}),U=a.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px dashed ${({theme:{palette:e}})=>e.content.cnt_100};
  background: ${({theme:{palette:e}})=>e.content.cnt_150};
  border-radius: 6px;
  width: ${({width:e})=>`${e}px`};
  height: ${({height:e})=>`${e}px`}
`,le={title:"",component:j},i={render:e=>o.jsx(j,{...e}),args:{backdrop:!1,contentWidth:367,contentHeight:80}};var _,g,h;i.parameters={...i.parameters,docs:{...(_=i.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: args => <ModalComp {...args} />,
  args: {
    backdrop: false,
    contentWidth: 367,
    contentHeight: 80
  }
}`,...(h=(g=i.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};const ie=["Default"];export{i as Default,ie as __namedExportsOrder,le as default};
//# sourceMappingURL=modal.stories-9c6c4a86.js.map
