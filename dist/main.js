(()=>{"use strict";function e(){document.querySelector(".overlay").classList.remove("active"),document.querySelector(".modal").classList.remove("active"),document.querySelector("#miss").textContent="";const e=document.getElementById("tname"),t=document.getElementById("tdesc"),n=document.getElementById("tpty"),d=document.getElementById("ddate");e.value="",t.value="",n.value="",d.value=""}document.getElementById("create-task-button").addEventListener("click",(function(){const t=document.querySelector(".overlay");t.classList.add("active"),document.querySelector(".modal").classList.add("active"),t.addEventListener("click",e)}));let t=[];class n{constructor(e,t,n,d){this.name=e,this.description=t,this.priority=n,this.dueDate=d}}function d(d,c,o,i){let s=new n(d,c,o,i);t.push(s),function(t){const n=document.createElement("div");n.classList.add("task"),document.getElementById("content-holder").appendChild(n);const d=document.createElement("div");d.classList.add("taskCntDivider"),n.appendChild(d);const c=document.createElement("p");d.appendChild(c),c.innerText=t.name;const o=document.createElement("p");o.classList.add("DueDate"),d.appendChild(o),o.innerText=t.dueDate;const i=document.createElement("div");n.appendChild(i),i.classList.add("taskCntDivider2");const s=document.createElement("button");i.appendChild(s),s.innerText="Remove",s.classList.add("taskBtns"),s.setAttribute("id","removeBtn"),s.addEventListener("click",a);const u=document.createElement("button");i.appendChild(u),u.innerText="Modify",u.classList.add("taskBtns"),u.setAttribute("id","modifyBtn"),u.addEventListener("click",l);const m=document.getElementById("tname"),r=document.getElementById("tdesc"),v=document.getElementById("tpty"),y=document.getElementById("ddate");m.value="",r.value="",v.value="",y.value="",u.addEventListener("click",l),e()}(s)}function a(e){const n=e.target.parentElement.parentElement,d=e.target.parentElement.parentElement.firstChild.firstChild.textContent;for(let e=0;e<t.length;e++)t[e].name==d&&t.splice(e,1);n.remove()}function l(e){const n=e.target.parentElement.parentElement.firstChild.firstChild.textContent;for(let d=0;d<t.length;d++)if(t[d].name==n){document.querySelector(".modal2").classList.add("active");const n=document.querySelector(".overlay");n.classList.add("active"),n.addEventListener("click",c);const a=document.querySelector("#tname2");a.value=t[d].name;const l=document.querySelector("#tdesc2");l.value=t[d].description;const o=document.querySelector("#tpty2");o.value=t[d].priority;const i=document.querySelector("#ddate2");i.value=t[d].dueDate,document.querySelector("#addButton2").addEventListener("click",(n=>{n.preventDefault(),t[d].name=a.value,t[d].description=l.value,t[d].priority=o.value,t[d].dueDate=i.value,e.target.parentElement.parentElement.firstChild.firstChild.textContent=`${a.value}`,e.target.parentElement.parentElement.firstChild.firstChild.nextElementSibling.textContent=`${i.value}`,c()}))}}function c(){document.querySelector(".overlay").classList.remove("active"),document.querySelector(".modal2").classList.remove("active")}document.getElementById("addButton").addEventListener("click",(e=>{e.preventDefault();const n=document.getElementById("tname"),a=document.getElementById("tdesc"),l=document.getElementById("tpty"),c=document.getElementById("ddate");if(""!==n.value&&""!==a.value&&""!==l.value&&""!==c.value&&void 0===t.find((e=>e.name===n.value)))d(document.getElementById("tname").value,document.getElementById("tdesc").value,document.getElementById("tpty").value,document.getElementById("ddate").value);else if(t.find((e=>e.name===n.value)))return void(document.querySelector("#miss").textContent="You already have a Task with this name")})),document.getElementById("button").addEventListener("click",(function(){const e=document.querySelector("nav");"none"!=e.style.display?e.style.display="none":e.style.display="inline"})),d("Compiti Italiano","Dante pg256","Alta","2023-01-31"),d("Compiti Matematica","Frazioni pg456","Media","2023-01-31")})();