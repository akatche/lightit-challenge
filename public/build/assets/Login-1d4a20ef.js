import{a as e,W as g,r as f,j as a,b as x,d as i}from"./app-d50a78e8.js";import{G as b}from"./GuestLayout-a1fe543f.js";import{I as n}from"./InputError-c9df036a.js";import{I as c}from"./InputLabel-9034364e.js";import{T as d}from"./TextInput-2dc04ca8.js";import{B as w}from"./Tooltip-018a7adb.js";import"./ApplicationLogo-1745a77d.js";function y({className:o="",...s}){return e("input",{...s,type:"checkbox",className:"rounded border-gray-300 text-indigo-600 shadow-sm focus:ring-indigo-500 "+o})}function L({status:o,canResetPassword:s}){const{data:r,setData:m,post:u,processing:p,errors:l,reset:h}=g({email:"",password:"",remember:!1});return f.useEffect(()=>()=>{h("password")},[]),a(b,{children:[e(x,{title:"Log in"}),e("h1",{className:"text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white",children:"Sign in to your account"}),a("form",{className:"space-y-4 md:space-y-6",onSubmit:t=>{t.preventDefault(),u(route("login"))},children:[a("div",{children:[e(c,{htmlFor:"email",value:"Email"}),e(d,{id:"email",type:"email",name:"email",value:r.email,className:"mt-1 block w-full",autoComplete:"username",isFocused:!0,onChange:t=>m("email",t.target.value)}),e(n,{message:l.email,className:"mt-2"})]}),a("div",{className:"mt-4",children:[e(c,{htmlFor:"password",value:"Password"}),e(d,{id:"password",type:"password",name:"password",value:r.password,className:"mt-1 block w-full",autoComplete:"current-password",onChange:t=>m("password",t.target.value)}),e(n,{message:l.password,className:"mt-2"})]}),a("div",{className:"flex items-center justify-between",children:[e("div",{className:"flex items-start",children:e("div",{className:"flex items-center h-5",children:a("label",{className:"flex items-center",children:[e(y,{name:"remember",checked:r.remember,onChange:t=>m("remember",t.target.checked)}),e("span",{className:"ml-2 text-sm text-gray-600",children:"Remember me"})]})})}),s&&e(i,{href:route("password.request"),className:"text-sm font-medium text-cyan-700 hover:underline dark:text-primary-500",children:"Forgot your password?"})]}),e(w,{type:"submit",className:"w-full",disabled:p,children:"Log in"}),a("p",{className:"text-sm font-light text-gray-500 dark:text-gray-400",children:["Don’t have an account yet?",e(i,{href:route("register"),className:"font-medium text-cyan-700 hover:underline pl-1",children:"Sign up"})]})]})]})}export{L as default};
