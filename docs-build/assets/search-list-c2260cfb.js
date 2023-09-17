import{j as r}from"./jsx-runtime-6eef64cc.js";import{H as i}from"./styled-components.browser.esm-2266bc01.js";import{L as x}from"./list-item-a334a94a.js";import{T as s}from"./typography-1c065611.js";import"./icon-workshop-pe-bc270cda.js";import"./radio-button-97b5567a.js";import{I as h}from"./infinity-circle-progress-1a0860ea.js";const d=({items:e,width:n=480,height:a=256,isLoading:c,title:u})=>c?r.jsx(o,{width:n,height:a,children:r.jsx(l,{children:r.jsx(p,{children:r.jsx(h,{})})})}):e.length===0?r.jsx(o,{width:n,height:a,children:r.jsx(l,{children:r.jsxs(p,{children:[r.jsx(s,{type:"bold",variant:"title2",children:"Ничего не найдено"}),r.jsx(s,{type:"light",variant:"subheadline",children:"Проверьте, нет ли ошибок в написанном запросе."})]})})}):r.jsxs(o,{width:n,height:a,children:[r.jsx(m,{children:u}),r.jsx(l,{children:e.map(t=>r.jsx(x,{type:"default",onClick:t.onClick,text:t.value,icon:"chevronRight",showIcon:t.isIcon,isPicked:t.isPicked},t.id))})]}),o=i.div`
  width: ${({width:e})=>`${e}px`};
  height: ${({height:e})=>`${e}px`};
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  background: ${({theme:{palette:e}})=>e.background.bg_000};
  box-shadow: 0px 5px 16px 0px rgba(0,0,0,.1);
  border-radius: 16px;
  padding: 0px 0px 16px 0px;
`,m=i.div`
  width: 100%;
  padding: 16px 16px 8px 16px;
  & ${s} {
    text-transform: uppercase;
  }
`,l=i.div`
  position: relative;
  overflow: auto;
  width: 100%;
  height: 100%;
  scrollbar-width: thin;
  scrollbar-color: ${({theme:{palette:e}})=>`${e.content.cnt_150} ${e.background.bg_000}`};
  &::-webkit-scrollbar {
    width: 4px;
  }
  &::-webkit-scrollbar-track {
    background: transparent;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 2px;
    background: ${({theme:{palette:e}})=>e.content.cnt_150};
  }
  &::-webkit-scrollbar-thumb:hover {
    border-radius: 2px;
  }
`,p=i.div`
  max-width: 280px;
  display: flex;
  flex-direction: column;
  gap: 4px;
  align-items: center;
  justify-content: center;
  position: relative;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
`;try{d.displayName="SearchList",d.__docgenInfo={description:"",displayName:"SearchList",props:{title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"ReactNode"}},items:{defaultValue:null,description:"",name:"items",required:!0,type:{name:"TSearchItem[]"}},isLoading:{defaultValue:null,description:"",name:"isLoading",required:!0,type:{name:"boolean"}},width:{defaultValue:{value:"480"},description:"",name:"width",required:!1,type:{name:"number"}},height:{defaultValue:{value:"256"},description:"",name:"height",required:!1,type:{name:"number"}}}}}catch{}export{d as S};
//# sourceMappingURL=search-list-c2260cfb.js.map
