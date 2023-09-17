import{j as e}from"./jsx-runtime-6eef64cc.js";import{H as r}from"./styled-components.browser.esm-2266bc01.js";import{T as a}from"./typography-1c065611.js";import"./icon-workshop-pe-bc270cda.js";import{T as f}from"./timetable-icon-list-1ba21933.js";import"./radio-button-97b5567a.js";import"./infinity-circle-progress-1a0860ea.js";import{r as y}from"./index-c013ead5.js";import"./_commonjsHelpers-725317a4.js";const s=y.forwardRef(({type:t,title:d,time:u,status:V,subtitle:m,number:c,classroomNumber:n,...x},b)=>e.jsxs(h,{ref:b,...x,children:[e.jsxs(g,{children:[e.jsx(v,{variant:"body",type:"bold",children:c}),e.jsx(j,{children:f[t]})]}),e.jsxs(w,{children:[e.jsxs(_,{children:[e.jsx(a,{variant:"body",type:"bold",children:d}),n&&e.jsx(a,{variant:"body",type:"bold",children:n})]}),e.jsxs(T,{children:[e.jsx(a,{variant:"subheadline",children:m}),e.jsx(W,{children:u})]})]})]})),h=r.div`
  display: flex;
  padding: 12px 24px;
  gap: 16px;
  align-items: center;
`,g=r.div`
  display: flex;
  align-items: center;
  gap: 12px;
`,v=r(a)`
  width: 12px;
`,j=r.div`
  display: flex;
`,w=r.div`
  display: flex;
  gap: 4px;
  width: 100%;
  flex-wrap: wrap;
  border-bottom: 1px splid ${({theme:{palette:t}})=>t.content.cnt_200};
`,_=r.div`
  display: flex;
  width: 100%;
  height: auto;
  justify-content: space-between;
  align-items: center;
`,T=r.div`
  display: flex;
  width: 100%;
  height: auto;
  justify-content: space-between;
  align-items: center;
`,W=r(a)`

`;try{s.displayName="TimetableItem",s.__docgenInfo={description:"",displayName:"TimetableItem",props:{number:{defaultValue:null,description:"",name:"number",required:!1,type:{name:"string | number"}},type:{defaultValue:null,description:"",name:"type",required:!0,type:{name:"enum",value:[{value:'"other"'},{value:'"exam"'},{value:'"credit"'},{value:'"unknown"'},{value:'"window"'},{value:'"consult"'},{value:'"dayOff"'},{value:'"holiday"'},{value:'"lecture"'},{value:'"distance"'},{value:'"workshop"'},{value:'"workshopPe"'},{value:'"toNPair"'},{value:'"laboratory"'},{value:'"diffCredit"'}]}},title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},subtitle:{defaultValue:null,description:"",name:"subtitle",required:!0,type:{name:"string"}},classroomNumber:{defaultValue:null,description:"",name:"classroomNumber",required:!1,type:{name:"string | number"}},time:{defaultValue:null,description:"",name:"time",required:!1,type:{name:"string"}},status:{defaultValue:null,description:"",name:"status",required:!1,type:{name:"string"}}}}}catch{}const N=t=>e.jsx(q,{children:e.jsx(s,{...t})}),q=r.div`
  border: 1px solid ${({theme:{palette:t}})=>t.content.cnt_150};
  background: ${({theme:{palette:t}})=>t.background.bg_000};
  border-radius: 20px;
  margin: 20px auto;
  width: 752px;
  display: flex;
  padding: 12px 0px;
  flex-direction: column;
  gap: 10px;
`,P={title:"",component:s},i={render:t=>e.jsx(N,{...t}),args:{type:"exam",time:"10:35 – 12:00",title:"Title",number:"2",status:"",subtitle:"Subtitle",classroomNumber:"248"}};var l,o,p;i.parameters={...i.parameters,docs:{...(l=i.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: args => <TimetableWrapper {...args} />,
  args: {
    type: 'exam',
    time: '10:35 – 12:00',
    title: 'Title',
    number: '2',
    status: '',
    subtitle: "Subtitle",
    classroomNumber: '248'
  }
}`,...(p=(o=i.parameters)==null?void 0:o.docs)==null?void 0:p.source}}};const R=["Default"];export{i as Default,R as __namedExportsOrder,P as default};
//# sourceMappingURL=timetable-item.stories-a2d0fdd2.js.map
