import{r as e,j as a}from"./app-CzYDytL5.js";const i=e.forwardRef(function({type:o="text",className:u="",isFocused:t=!1,...f},n){const s=e.useRef(null);return e.useImperativeHandle(n,()=>({focus:()=>{var r;return(r=s.current)==null?void 0:r.focus()}})),e.useEffect(()=>{var r;t&&((r=s.current)==null||r.focus())},[t]),a.jsx("input",{type:o,ref:s,className:`w-full rounded-lg focus:border-0 border-gray-100 focus:ring-1 focus:ring-primary shadow-sm shadow-black/5 text-sm ${u}`,...f})});export{i as I};