import{aw as o,ax as s,ay as i,ah as e,az as c,W as a}from"./index-55gDIWdW.js";const u=o(s(r=>({count:1,increment:t=>{r(n=>({count:n.count+t}))},decrement:t=>{r(n=>({count:n.count-t}))}}),{name:"count-storage",storage:i(()=>localStorage)}));function x(){const{count:r,decrement:t,increment:n}=u();return e.jsxs("div",{children:[e.jsx(c,{children:e.jsx("div",{className:"p-y-20px",children:r})}),e.jsx("br",{}),e.jsxs(c,{children:[e.jsx(a,{type:"primary",onClick:()=>t(1),children:"+"}),e.jsx(a,{type:"primary",onClick:()=>n(1),children:"-"})]})]})}export{x as default};
