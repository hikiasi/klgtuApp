import{H as u,C as r}from"./styled-components.browser.esm-2266bc01.js";const d={light:300,medium:500,bold:700},l=u.p.attrs(()=>({}))`
  ${({theme:{typography:e,palette:t},variant:a="body",color:n,type:i="medium"})=>r`
    font-family: ${e[a].fontFamily};
    line-height: ${e[a].lineHeight};
    font-size: ${e[a].size};
    color: ${n??t.text.primary};
    font-weight: ${d[i]};
  `}
`;try{l.displayName="Typography",l.__docgenInfo={description:"",displayName:"Typography",props:{type:{defaultValue:null,description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"light"'},{value:'"medium"'},{value:'"bold"'}]}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLParagraphElement | null) => void) | RefObject<HTMLParagraphElement> | null"}},variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"body"'},{value:'"largeTitle"'},{value:'"title1"'},{value:'"title2"'},{value:'"title3"'},{value:'"callout"'},{value:'"subheadline"'},{value:'"footnote"'},{value:'"caption1"'},{value:'"caption2"'}]}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}}}catch{}export{l as T};
//# sourceMappingURL=typography-1c065611.js.map
