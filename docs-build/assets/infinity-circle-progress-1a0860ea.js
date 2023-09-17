import{j as a}from"./jsx-runtime-6eef64cc.js";import{r as d}from"./index-c013ead5.js";import{H as i}from"./styled-components.browser.esm-2266bc01.js";const p=({size:e=48,progress:r=50,spinnerSpeed:n=1,indicatorWidth:t=5})=>{const o=t,s=e/2,c=s-(o>t?o:t),l=2*Math.PI*c,m=l*((100-r)/100);return a.jsx(f,{children:a.jsxs(y,{size:e,children:[a.jsx(g,{cx:s,cy:s,r:c,strokeWidth:o}),a.jsx(h,{cx:s,cy:s,r:c,spinnerSpeed:n,strokeWidth:t,strokeDasharray:l,strokeDashoffset:m})]})})},f=i.div`

`,y=i.svg`
  width: ${({size:e})=>`${e}px`};
  height: ${({size:e})=>`${e}px`};
  transform: rotate(-90deg);
`,h=i.circle`
  fill: transparent;
  stroke-width: 4px;
  stroke: ${({theme:{palette:e}})=>e.accent.primary_500};
  animation-duration: ${({spinnerSpeed:e})=>e*1e3};
`,g=i.circle`
  fill: transparent;
  stroke-width: 4px;
  stroke: transparent;
`;try{p.displayName="CircleProgress",p.__docgenInfo={description:"",displayName:"CircleProgress",props:{size:{defaultValue:{value:"48"},description:"",name:"size",required:!1,type:{name:"number"}},progress:{defaultValue:{value:"50"},description:"",name:"progress",required:!1,type:{name:"number"}},indicatorWidth:{defaultValue:{value:"5"},description:"",name:"indicatorWidth",required:!1,type:{name:"number"}},spinnerSpeed:{defaultValue:{value:"1"},description:"",name:"spinnerSpeed",required:!1,type:{name:"number"}}}}}catch{}const u=e=>{const[r,n]=d.useState(0);return d.useEffect(()=>{const t=setInterval(()=>{r<100?n(r+1):n(0)},10);return()=>clearInterval(t)},[r]),a.jsx(p,{progress:r,...e})};try{u.displayName="InfinityCircleProgress",u.__docgenInfo={description:"",displayName:"InfinityCircleProgress",props:{size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"number"}},spinnerSpeed:{defaultValue:null,description:"",name:"spinnerSpeed",required:!1,type:{name:"number"}},indicatorWidth:{defaultValue:null,description:"",name:"indicatorWidth",required:!1,type:{name:"number"}}}}}catch{}export{u as I};
//# sourceMappingURL=infinity-circle-progress-1a0860ea.js.map
