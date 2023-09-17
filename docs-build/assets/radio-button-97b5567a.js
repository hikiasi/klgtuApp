import{j as o}from"./jsx-runtime-6eef64cc.js";import{H as t}from"./styled-components.browser.esm-2266bc01.js";const a=({isChecked:e,onChange:n,id:d,disabled:r=!1})=>{const i=s=>{const p=s.target.checked;n(p)};return o.jsxs(u,{children:[o.jsx(l,{type:"radio",id:d,checked:e,onChange:i,disabled:r}),o.jsx(c,{checked:e,disabled:r})]})},u=t.label`
  cursor: pointer;
`,l=t.input`
  display: none;
`,c=t.div`
  width: 16px;
  height: 16px;
  border-radius: 50%;
  border: ${({disabled:e,checked:n})=>h(n,e)};
  background: ${({disabled:e,checked:n})=>n&&e?"#72787f":"transparent"};
  &:hover {
    box-shadow: ${({disabled:e})=>e?"none":"0px 0px 0px 2px #98cbff"}
  }
`,h=(e,n)=>e&&!n?"5px solid #0193de":!e&&!n?"2px solid #ced0d6":"5px solid #ced0d6";try{a.displayName="RadioButton",a.__docgenInfo={description:"",displayName:"RadioButton",props:{id:{defaultValue:null,description:"",name:"id",required:!0,type:{name:"string"}},isChecked:{defaultValue:null,description:"",name:"isChecked",required:!0,type:{name:"boolean"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"(checked: boolean) => void"}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}}}}}catch{}export{a as R};
//# sourceMappingURL=radio-button-97b5567a.js.map
