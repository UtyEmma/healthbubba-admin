import{r as g,j as u}from"./app-DlOlZR77.js";const r={success:["successfull","verified","paid"],warning:["pending","suspended"],danger:["failed"],info:["unpaid"]},x=({children:s,status:e="",className:t,...i})=>{const d=g.useMemo(()=>{const o="bg-green-50 border-green-200 text-green-500",c="bg-[#FEF4C7] border-[#FDE68A] text-[#B45309]",a="bg-red-50 border-red-200 text-red-500",n="bg-gray-50 border-gray-200 text-gray-500";return r.success.includes(e)?o:r.warning.includes(e)?c:r.danger.includes(e)?a:(r.info.includes(e),n)});return u.jsx("span",{className:`inline-flex capitalize items-center gap-x-1.5 py-[3px] px-3 rounded-full text-[12px] font-medium border ${d} ${t}`,...i,children:s})};export{x as B};