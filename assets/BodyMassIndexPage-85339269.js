import{_ as c,o as i,c as r,a as u,t as m,g as a,b as g,h as d,v as f,i as h,k as x,d as w,j as _,F as b,p as k,l as M}from"./index-040902cf.js";import{S as B}from"./Sidebar-04c68a5f.js";const S={props:["result"]},R={class:"results"},C={key:0},T={key:1},L={key:2},N={key:3},V={key:4},F={key:5};function H(l,e,o,y,n,s){return i(),r("div",R,[u("p",null,"Индекс массы тела: "+m(o.result),1),o.result<18.5?(i(),r("p",C,"Ниже нормального")):o.result>=18.5&&o.result<25?(i(),r("p",T,"Нормальный вес")):o.result>=25&&o.result<30?(i(),r("p",L,"Избыточный вес")):o.result>=30&&o.result<35?(i(),r("p",N,"Ожирение 1 степени")):o.result>=35&&o.result<40?(i(),r("p",V,"Ожирение 2 степени")):(i(),r("p",F,"Ожирение 3 степени"))])}const K=c(S,[["render",H],["__scopeId","data-v-8001683e"]]);const W={},D={class:"loader"};function P(l,e){return i(),r("div",D)}const U=c(W,[["render",P],["__scopeId","data-v-8e4d88aa"]]);const j={components:{Sidebar:B,TheBodyMassIndexResults:K,TheBodyMassIndexLoader:U},data(){return{isCounting:!1,isLoading:!1,height:"",weight:"",result:"",error:""}},methods:{limitHeight(){if(this.height>240){const l=Math.floor(this.height).toString().substring(0,3);this.height=+l}},limitWeight(){if(this.weight>200){const l=Math.floor(this.weight).toString().substring(0,3);this.weight=+l}},countResult(){this.height>0&&this.weight>0?(this.error="",this.isLoading=!0,this.isCounting=!1,setTimeout(()=>{this.isLoading=!1,this.isCounting=!0},650),this.height.toString().includes(".")?this.result=(this.weight/Math.pow(+this.height,2)).toFixed(3):this.result=(this.weight/Math.pow(this.height/100,2)).toFixed(3)):(this.clearInfo(),this.error="Значение не может быть 0")},clearInfo(){this.weight="",this.height="",this.result="",this.isCounting=!1}}},E=l=>(k("data-v-74771404"),l=l(),M(),l),q={class:"wrapper"},z=E(()=>u("h1",null,"Расчитать индекс массы тела",-1)),A={class:"inputs"},G={key:1,class:"count",disabled:""};function J(l,e,o,y,n,s){const I=a("Sidebar"),p=a("TheBodyMassIndexResults"),v=a("TheBodyMassIndexLoader");return i(),r(b,null,[g(I),u("div",q,[z,u("div",A,[d(u("input",{"onUpdate:modelValue":e[0]||(e[0]=t=>n.height=t),onInput:e[1]||(e[1]=(...t)=>s.limitHeight&&s.limitHeight(...t)),onKeydown:[e[2]||(e[2]=h((...t)=>s.countResult&&s.countResult(...t),["enter"])),e[3]||(e[3]=h((...t)=>s.clearInfo&&s.clearInfo(...t),["esc"]))],type:"number",placeholder:"Введите ваш рост"},null,544),[[f,n.height,void 0,{number:!0}]]),d(u("input",{"onUpdate:modelValue":e[4]||(e[4]=t=>n.weight=t),onInput:e[5]||(e[5]=(...t)=>s.limitWeight&&s.limitWeight(...t)),onKeydown:[e[6]||(e[6]=h((...t)=>s.countResult&&s.countResult(...t),["enter"])),e[7]||(e[7]=h((...t)=>s.clearInfo&&s.clearInfo(...t),["esc"]))],type:"number",placeholder:"Введите ваш вес"},null,544),[[f,n.weight,void 0,{number:!0}]])]),n.height&&n.weight?(i(),r("button",{key:0,class:"count",onClick:e[8]||(e[8]=(...t)=>s.countResult&&s.countResult(...t))},"Расчитать")):(i(),r("button",G,"Введите данные")),n.isCounting?(i(),x(p,{key:2,result:n.result},null,8,["result"])):w("",!0),d(g(v,null,null,512),[[_,n.isLoading]]),d(u("div",{class:"error"},m(n.error),513),[[_,n.error]]),d(u("button",{class:"close",onClick:e[9]||(e[9]=(...t)=>s.clearInfo&&s.clearInfo(...t))},"Очистить",512),[[_,n.isCounting]])])],64)}const X=c(j,[["render",J],["__scopeId","data-v-74771404"]]);export{X as default};