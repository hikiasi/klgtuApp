import{j as e}from"./jsx-runtime-6eef64cc.js";import{H as s,Z as T}from"./styled-components.browser.esm-2266bc01.js";import{T as u}from"./typography-1c065611.js";import{B as G}from"./icon-workshop-pe-bc270cda.js";import"./radio-button-97b5567a.js";import"./infinity-circle-progress-1a0860ea.js";import"./list-item-a334a94a.js";import{T as L}from"./text-input-6a2bfc79.js";import{B}from"./button-7a8d2db4.js";import"./radio-item-d999eaf3.js";import"./icon-button-a3781c00.js";import"./notification-item-75306928.js";import{S}from"./search-list-c2260cfb.js";import"./index-d9a8719c.js";import"./index-972598e8.js";import{r as c}from"./index-c013ead5.js";import"./_commonjsHelpers-725317a4.js";import"./icon-list-ce1b1f10.js";const h=({searchComponent:t,subtitleComponent:o,titleComponent:a,variantsListComponent:r,showVariants:i})=>e.jsx(V,{children:e.jsxs(N,{children:[e.jsxs(q,{children:[e.jsx(F,{children:a}),e.jsx(R,{children:o})]}),e.jsxs(W,{children:[t,i&&e.jsx(D,{children:r})]})]})}),V=s.div`
  width: 100%;
  height: 100%;
  padding-top: 16px;
`,N=s.div`
  width: 1140px;
  margin: 0 auto;
  padding: 48px 0px 64px 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  border: 1px solid ${({theme:{palette:t}})=>t.background.bg_150};
  border-radius: 20px;
`,q=s.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  text-align: center;
`,F=s.div`
  
`,R=s.div`
  max-width: 440px;
`,W=s.div`
  position: relative;
`,D=s.div`
  position: absolute;
  margin-top: 16px;
`;try{h.displayName="SelectPageTemplate",h.__docgenInfo={description:"",displayName:"SelectPageTemplate",props:{titleComponent:{defaultValue:null,description:"",name:"titleComponent",required:!0,type:{name:"ReactNode"}},subtitleComponent:{defaultValue:null,description:"",name:"subtitleComponent",required:!0,type:{name:"ReactNode"}},searchComponent:{defaultValue:null,description:"",name:"searchComponent",required:!0,type:{name:"ReactNode"}},variantsListComponent:{defaultValue:null,description:"",name:"variantsListComponent",required:!0,type:{name:"ReactNode"}},showVariants:{defaultValue:null,description:"",name:"showVariants",required:!0,type:{name:"boolean"}}}}}catch{}const x=({buttonProps:t,inputProps:o,searchListProps:a})=>e.jsx(h,{showVariants:!0,titleComponent:e.jsx(u,{variant:"title1",type:"bold",children:"Выбор расписания"}),subtitleComponent:e.jsx(u,{variant:"callout",type:"light",children:"Можно выбрать расписание учебной группы, преподавателя или аудитории"}),searchComponent:e.jsx(E,{inputProps:o,buttonProps:t}),variantsListComponent:a.show?e.jsx(H,{...a}):null}),E=({buttonProps:t,inputProps:o})=>e.jsxs($,{children:[e.jsx(L,{icon:"search",width:480,...o}),e.jsx(B,{text:"Показать",...t})]}),H=({items:t,subItems:o,isLoading:a,isBackward:r,onBackward:i})=>{const{palette:p}=T();return e.jsxs(O,{children:[e.jsx(z,{showSubItems:r,children:e.jsx(S,{title:e.jsx(u,{type:"light",variant:"caption1",color:p.content.cnt_050,children:"РЕЗУЛЬТАТЫ ПОИСКА"}),items:t,isLoading:a})}),e.jsx(M,{showSubItems:r,children:e.jsx(S,{title:e.jsxs(A,{onClick:i,children:[e.jsx(G,{direction:"left",color:p.accent.primary_500,size:12}),e.jsx(u,{type:"light",variant:"caption1",color:p.accent.primary_500,children:"ВЕРНУТЬСЯ НАЗАД"})]}),items:o,isLoading:a})})]})},$=s.div`
  display: flex;
  gap: 12px;
`,z=s.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  opacity: ${({showSubItems:t})=>t?0:1};
  transition: opacity .2s ease-out;
`,M=s.div`
  position: absolute;
  left: ${({showSubItems:t})=>t?0:"100%"};
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 10;
  transition: left .3s ease-out;
`,O=s.div`
  position: relative;
  display: flex;
  overflow: hidden;
  gap: 10px;
  width: 480px;
  height: 255px;
  border-radius: 16px;
  box-shadow: 0px 5px 16px 0px rgba(0,0,0,.1);
  & div {
    box-shadow: none;
  }
`,A=s.div`
  display: flex;
  align-items: center;
  gap: 4px;
  cursor: pointer;
`;try{x.displayName="SelectPage",x.__docgenInfo={description:"",displayName:"SelectPage",props:{buttonProps:{defaultValue:null,description:"",name:"buttonProps",required:!0,type:{name:'Required<Pick<TButton & RefAttributes<HTMLButtonElement>, "onClick" | "isDisable">>'}},inputProps:{defaultValue:null,description:"",name:"inputProps",required:!0,type:{name:'Required<Pick<TTextInput & RefAttributes<HTMLDivElement>, "placeholder" | "onChange" | "disabled" | "value">>'}},searchListProps:{defaultValue:null,description:"",name:"searchListProps",required:!0,type:{name:'Omit<TSearchList, "title" | "height" | "width"> & { subItems: TSearchItem[]; isBackward: boolean; onBackward: () => void; } & { show: boolean; }'}}}}}catch{}const C=({})=>{const[t,o]=c.useState(!1),[a,r]=c.useState(""),i=Z,[p,_]=c.useState([]),[P,m]=c.useState(!1),[y,b]=c.useState(-12),k=i.map(n=>{var f;return{id:n.content.id,value:n.name,isIcon:n.content.subGroups?((f=n.content.subGroups)==null?void 0:f.length)>0:!1,onClick(){var g;n.content.subGroups&&((g=n.content.subGroups)==null?void 0:g.length)>0?(m(!0),_(n.content.subGroups.map(d=>({id:d.id,isIcon:!1,isPicked:d.id===y,onClick(){r(d.name),b(d.id),m(!1),o(!1)},value:d.name})))):(r(n.name),b(n.content.id),o(!1))},isPicked:n.content.id===y}}),I=()=>{m(!1)};return e.jsx(x,{inputProps:{disabled:!1,value:a,onChange:n=>{r(n),o(!0)},placeholder:"Группа, преподаватель, аудитория"},searchListProps:{subItems:p,show:t,onBackward:I,isBackward:P,items:k.filter(n=>n.value.includes(a.toUpperCase())),isLoading:!1},buttonProps:{onClick(){},isDisable:!1}})},ue={title:"",component:C},l={render:t=>e.jsx(C,{...t}),args:{}},Z=[{type:"students",name:"19-ВТ(рас)",content:{id:699,name:"19-ВТ(рас)",studyForm:1,subGroups:[{id:701,name:"19-ВТ(рас)-1"},{id:700,name:"19-ВТ(рас)-2"}]}},{type:"students",name:"20-ВТ-1",content:{id:745,name:"20-ВТ-1",studyForm:1,subGroups:[{id:746,name:"20-ВТ-1-1"},{id:747,name:"20-ВТ-1-2"}]}},{type:"students",name:"20-ВТ-2",content:{id:748,name:"20-ВТ-2",studyForm:1,subGroups:[]}},{type:"students",name:"21-ВТ-1",content:{id:784,name:"21-ВТ-1",studyForm:1,subGroups:[{id:786,name:"21-ВТ-1-1"},{id:785,name:"21-ВТ-1-2"}]}},{type:"students",name:"21-ВТ-2",content:{id:787,name:"21-ВТ-2",studyForm:1,subGroups:[{id:789,name:"21-ВТ-2-1"},{id:788,name:"21-ВТ-2-2"}]}},{type:"students",name:"22-ВТ-1",content:{id:1565,name:"22-ВТ-1",studyForm:1,subGroups:[{id:1566,name:"22-ВТ-1-1"},{id:1567,name:"22-ВТ-1-2"}]}},{type:"students",name:"22-ВТ-2",content:{id:1568,name:"22-ВТ-2",studyForm:1,subGroups:[]}},{type:"students",name:"22-ВТ-2-1",content:{id:1569,name:"22-ВТ-2-1",studyForm:1,subGroups:[]}},{type:"students",name:"22-ВТ-2-2",content:{id:1570,name:"22-ВТ-2-2",studyForm:1,subGroups:[]}},{type:"students",name:"22-ВТ/м",content:{id:2139,name:"22-ВТ/м",studyForm:1,subGroups:[]}},{type:"teachers",name:"Евтропков Владимир Михайлович",content:{id:3359,firstName:"Владимир",lastName:"Евтропков",middleName:"Михайлович"}}];var v,j,w;l.parameters={...l.parameters,docs:{...(v=l.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: args => <SelectPageStory {...args} />,
  args: {}
}`,...(w=(j=l.parameters)==null?void 0:j.docs)==null?void 0:w.source}}};const me=["Default"];export{l as Default,me as __namedExportsOrder,ue as default};
//# sourceMappingURL=select-page.stories-567724b4.js.map
