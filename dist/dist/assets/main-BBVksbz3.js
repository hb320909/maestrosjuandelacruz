import{c as j}from"./vendor-CQnWzhEg.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function a(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(t){if(t.ep)return;t.ep=!0;const o=a(t);fetch(t.href,o)}})();const P="https://upznvkoiiiazvnuowhdr.supabase.co",J="sb_publishable_TaFJ0GGjMhmCGnGi4N4dyA_auGwFljE";j(P,J);const V="https://upznvkoiiiazvnuowhdr.supabase.co",_="sb_publishable_TaFJ0GGjMhmCGnGi4N4dyA_auGwFljE",$=j(V,_);l=l||[];g=g||[];p=p||[];v=v||{};const k={Kati:"sun12",Alvaro:"rock34","Juan Ignacio":"wiz56","Maria Jose":"moon78","Jose Antonio":"thun90",Lourdes:"rain21",Ruben:"comet43",Belen:"star65",Adolfo:"king999"};function W(){rooms=[];const n=["A","B","C","D","E","F"],e=(a,s,t,o,i)=>{for(let r=a;r<=s;r++){const d=`${r}`,c={};n.forEach(u=>{c[u]=null}),rooms.push({number:d,capacity:6,occupied:0,beds:c,type:"para 6",gender:t,floor:o,side:i})}};e(101,104,"hombre",1,"izquierda"),e(201,202,"mujer",1,"derecha"),e(211,214,"hombre",2,"izquierda"),e(301,304,"mujer",2,"derecha")}function O(n){if(!n)return null;const e=new Date,a=new Date(n);if(isNaN(a))return null;let s=e.getFullYear()-a.getFullYear();const t=e.getMonth()-a.getMonth();return(t<0||t===0&&e.getDate()<a.getDate())&&s--,s}function K(){const n=new Date,e=n.getMonth()+1,a=n.getDate(),s=l.filter(t=>{if(!t.fechaNacimiento)return!1;const o=new Date(t.fechaNacimiento+"T00:00:00");if(isNaN(o))return!1;const i=o.getMonth()+1,r=o.getDate();return i===e&&r===a});s.length>0&&U(s)}function U(n){const e=document.getElementById("birthdayModal"),a=document.getElementById("birthdayMessage");if(n.length===1)a.textContent=`Hoy es el cumpleaños de ${n[0].nombre}`;else{const s=n.map(t=>t.nombre).join(", ");a.textContent=`¡Hoy es el cumpleaños de ${s}!`}e.classList.remove("hidden"),Q(),setTimeout(()=>{Y()},6e3)}function Y(){document.getElementById("birthdayModal").classList.add("hidden")}function Q(){const n=document.getElementById("confettiContainer");if(!n)return;n.innerHTML="";const e=50,a=["#FF6B6B","#4ECDC4","#45B7D1","#FFA07A","#98D8C8","#F7DC6F","#BB8FCE"];for(let s=0;s<e;s++){const t=document.createElement("div");t.className="confetti-piece absolute w-2 h-2 rounded-full",t.style.left=Math.random()*100+"%",t.style.backgroundColor=a[Math.floor(Math.random()*a.length)],t.style.animationDelay=Math.random()*.5+"s",t.style.opacity="0.8",n.appendChild(t)}}let l=[],g=[],p=[],v={};async function M(){const{data:n,error:e}=await $.from("students").select("*");l=e?[]:n,e&&console.error("Error loading students:",e);const{data:a,error:s}=await $.from("absences").select("*");g=s?[]:a,s&&console.error("Error loading absences:",s);const{data:t,error:o}=await $.from("reports").select("*");p=o?[]:t,o&&console.error("Error loading reports:",o),W(),B(),C(),z(),x(),G(),S(),ee(),te(),K(),localStorage.setItem("students",JSON.stringify(l)),localStorage.setItem("absences",JSON.stringify(g)),localStorage.setItem("reports",JSON.stringify(p))}async function X(){await M()}X();document.getElementById("loginForm").addEventListener("submit",function(n){n.preventDefault();const e=document.getElementById("username").value,a=document.getElementById("password").value,s=document.getElementById("loginError");k[e]&&k[e]===a?(document.getElementById("currentUser").textContent=`Bienvenido, ${e}`,document.getElementById("loginScreen").classList.add("hidden"),document.getElementById("mainApp").classList.remove("hidden"),M(),N("dashboard"),s.classList.add("hidden")):(s.textContent="Usuario o contraseña incorrectos",s.classList.remove("hidden"))});document.getElementById("logoutBtn").addEventListener("click",function(){document.getElementById("username").value="",document.getElementById("password").value="",document.getElementById("loginScreen").classList.remove("hidden"),document.getElementById("mainApp").classList.add("hidden"),document.getElementById("loginError").classList.add("hidden")});document.querySelectorAll(".nav-link").forEach(n=>{n.addEventListener("click",function(e){e.preventDefault();const a=this.getAttribute("data-section");N(a)})});document.getElementById("mobileNav").addEventListener("change",function(){N(this.value)});var R;(R=document.getElementById("roomStudent"))==null||R.addEventListener("change",S);function N(n){document.querySelectorAll(".content-section").forEach(e=>{e.classList.add("hidden")}),document.getElementById(n).classList.remove("hidden")}document.getElementById("addStudentForm").addEventListener("submit",function(n){n.preventDefault();const e={id:Date.now(),nombre:document.getElementById("studentNombre").value,fechaNacimiento:document.getElementById("studentNacimiento").value,mayor16:!!document.getElementById("studentMayor16").checked,gender:document.getElementById("studentGenero").value,curso:document.getElementById("studentCurso").value,telefono1:document.getElementById("studentTelefono1").value,telefono2:document.getElementById("studentTelefono2").value,habitacion:null},a=O(e.fechaNacimiento);e.ageGroup=a!==null&&a>=18?"mayor":"menor",l.push(e),saveData(),B(),C(),S(),this.reset(),I(`Nuevo alumno añadido: ${e.nombre}`)});function B(){document.getElementById("totalAlumnos").textContent=l.length,document.getElementById("habitacionesOcupadas").textContent=rooms.filter(n=>n.occupied>0).length,document.getElementById("totalFaltas").textContent=g.length}function C(){const n=document.getElementById("studentsTableBody");if(l.length===0){n.innerHTML='<tr><td colspan="7" class="text-center py-8 text-gray-500">No hay alumnos registrados</td></tr>';return}n.innerHTML=l.map(e=>{const a=O(e.fechaNacimiento),t=new Date(e.fechaNacimiento+"T00:00:00").toLocaleDateString("es-ES",{day:"2-digit",month:"2-digit",year:"numeric"});return`
        <tr class="border-b border-gray-100 hover:bg-gray-50">
            <td class="py-3 px-4 font-medium">${e.nombre}</td>
            <td class="py-3 px-4 text-sm">${t}</td>
            <td class="py-3 px-4"><span class="bg-indigo-100 text-indigo-800 px-2 py-1 rounded-full text-sm font-medium">${a} años</span></td>
            <td class="py-3 px-4">${e.gender||"-"}</td>
            <td class="py-3 px-4">${e.curso}</td>
            <td class="py-3 px-4 text-sm text-gray-600">${e.telefono1||"-"}${e.telefono2?"<br/>"+e.telefono2:""}</td>
            <td class="py-3 px-4">
                ${e.habitacion?`<span class="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs">${e.habitacion}</span>`:'<span class="bg-gray-100 text-gray-600 px-2 py-1 rounded-full text-xs">Sin asignar</span>'}
            </td>
            <td class="py-3 px-4">
                <button onclick="openStudentSeguimiento(${e.id})" title="Seguimiento académico" class="text-indigo-600 hover:text-indigo-800 mr-2">
                    <i class="fas fa-book"></i>
                </button>
                <button onclick="editStudent(${e.id})" class="text-blue-600 hover:text-blue-800 mr-2">
                    <i class="fas fa-edit"></i>
                </button>
                <button onclick="deleteStudent(${e.id})" class="text-red-600 hover:text-red-800">
                    <i class="fas fa-trash"></i>
                </button>
            </td>
        </tr>`}).join("")}function z(){const n=document.getElementById("roomsGrid"),e={1:{izquierda:[],derecha:[]},2:{izquierda:[],derecha:[]}};rooms.forEach(t=>{const o=t.floor||1,i=t.side||"izquierda";e[o]||(e[o]={izquierda:[],derecha:[]}),e[o][i].push(t)});const a=t=>{const o=Object.values(t.beds).filter(r=>r!==null).length,i=Object.keys(t.beds).sort();return`
        <div class="bg-white p-6 rounded-xl shadow-sm border-2 ${o===t.capacity?"border-red-300 bg-red-50":o>0?"border-yellow-300 bg-yellow-50":"border-green-300 bg-green-50"}">
            <div class="flex justify-between items-start mb-4">
                <div>
                    <h3 class="text-lg font-semibold text-gray-800">Habitación ${t.number}</h3>
                    <p class="text-sm text-gray-600">
                        <span class="font-medium">${t.gender==="hombre"?"👨 Hombres":"👩 Mujeres"}</span> 
                        · Planta ${t.floor}
                    </p>
                </div>
                <span class="px-3 py-1 rounded-full text-xs font-medium ${o===0?"bg-green-100 text-green-800":o===t.capacity?"bg-red-100 text-red-800":"bg-yellow-100 text-yellow-800"}">${o}/${t.capacity}</span>
            </div>
            <div class="grid grid-cols-3 gap-2 mb-4">
                ${i.map(r=>{const d=t.beds[r],c=d?l.find(u=>u.id===d):null;return`
                        <div class="flex flex-col items-center p-3 rounded-lg ${c?"bg-indigo-100 border-2 border-indigo-300":"bg-gray-100 border-2 border-gray-300"}">
                            <span class="text-xs font-bold text-gray-600 mb-1">Cama ${r}</span>
                            ${c?`
                                <span class="text-xs text-center text-gray-700 font-medium">${c.nombre.split(" ")[0]}</span>
                            `:`
                                <span class="text-xs text-gray-500">Vacante</span>
                            `}
                        </div>
                    `}).join("")}
            </div>
            ${o<t.capacity?`<button onclick="assignRoomToStudent('${t.number}')" class="w-full bg-indigo-600 text-white py-2 px-4 rounded-lg text-sm font-medium hover:bg-indigo-700 transition-colors">Asignar</button>`:""}
        </div>
    `};let s="";[1,2].forEach(t=>{const o=e[t]||{izquierda:[],derecha:[]};s+=`
            <div class="mb-8">
                <h3 class="text-2xl font-bold text-gray-800 mb-6 border-b-2 border-indigo-600 pb-2">${t===1?"PLANTA 1":"PLANTA 2"}</h3>
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <!-- Izquierda (Hombres) -->
                    <div>
                        <h4 class="text-lg font-semibold text-gray-700 mb-4 text-center p-3 bg-blue-100 rounded-lg">👨 HOMBRES (Izquierda)</h4>
                        <div class="space-y-4">
                            ${o.izquierda.length>0?o.izquierda.map(r=>a(r)).join(""):'<p class="text-gray-500 text-center py-6">No hay habitaciones de hombres</p>'}
                        </div>
                    </div>
                    
                    <!-- Derecha (Mujeres) -->
                    <div>
                        <h4 class="text-lg font-semibold text-gray-700 mb-4 text-center p-3 bg-pink-100 rounded-lg">👩 MUJERES (Derecha)</h4>
                        <div class="space-y-4">
                            ${o.derecha.length>0?o.derecha.map(r=>a(r)).join(""):'<p class="text-gray-500 text-center py-6">No hay habitaciones de mujeres</p>'}
                        </div>
                    </div>
                </div>
            </div>
        `}),n.innerHTML=s}function x(){const n=document.getElementById("absencesTableBody"),e=document.getElementById("filterStudent").value,a=document.getElementById("filterDate").value;let s=g;if(e&&(s=s.filter(t=>t.studentId==e)),a&&(s=s.filter(t=>t.fecha===a)),s.length===0){n.innerHTML='<tr><td colspan="4" class="text-center py-8 text-gray-500">No hay faltas registradas</td></tr>';return}n.innerHTML=s.map(t=>{const o=l.find(i=>i.id===t.studentId);return`
            <tr class="border-b border-gray-100 hover:bg-gray-50">
                <td class="py-3 px-4 font-medium">${o?`${o.nombre}`:"Alumno eliminado"}</td>
                <td class="py-3 px-4">${t.fecha}</td>
                <td class="py-3 px-4">${t.descripcion}</td>
                <td class="py-3 px-4">
                    <button onclick="deleteAbsence(${t.id})" class="text-red-600 hover:text-red-800">
                        <i class="fas fa-trash"></i>
                    </button>
                </td>
            </tr>
        `}).join("")}document.getElementById("assignRoomForm").addEventListener("submit",function(n){n.preventDefault();const e=parseInt(document.getElementById("roomStudent").value),a=document.getElementById("roomNumber").value,s=document.getElementById("roomBed")?document.getElementById("roomBed").value:"",t=l.find(d=>d.id===e),o=rooms.find(d=>d.number===a);if(!t||!o)return;const i=t.gender;if(o.gender&&o.gender!=="mixta"&&i!=="otro"&&o.gender!==i){alert("La habitación seleccionada no es compatible con el género del alumno.");return}let r=null;if(s){if(o.beds[s]!==null){alert(`La cama ${s} ya está ocupada en esta habitación.`);return}r=s}else r=Object.keys(o.beds).find(d=>o.beds[d]===null);if(!r){alert("La habitación está llena. No hay camas disponibles.");return}if(t.habitacion){const d=rooms.find(c=>c.number===t.habitacion);d&&t.cama&&(d.beds[t.cama]=null,d.occupied--)}t.habitacion=a,t.cama=r,o.beds[r]=e,o.occupied++,saveData(),B(),C(),z(),S(),this.reset(),I(`Asignada habitación ${a} cama ${r} a ${t.nombre}`)});document.getElementById("addAbsenceForm").addEventListener("submit",function(n){var s;n.preventDefault();const e={id:Date.now(),studentId:parseInt(document.getElementById("absenceStudent").value),fecha:document.getElementById("absenceDate").value,descripcion:document.getElementById("absenceDescription").value};g.push(e),saveData(),B(),x();const a=document.getElementById("alumnoResumenSelect");a&&a.value===e.studentId.toString()&&E(e.studentId),this.reset(),I(`Falta registrada para ${(s=l.find(t=>t.id===e.studentId))==null?void 0:s.nombre}`)});var H;(H=document.getElementById("addReportForm"))==null||H.addEventListener("submit",function(n){var s;if(!n)return;n.preventDefault();const e={id:Date.now(),studentId:parseInt(document.getElementById("reportStudent").value),fecha:document.getElementById("reportDate").value,tipo:document.getElementById("reportType").value,descripcion:document.getElementById("reportDescription").value};p.push(e),saveData(),G();const a=document.getElementById("alumnoResumenSelect");a&&a.value===e.studentId.toString()&&E(e.studentId),this.reset(),I(`Parte registrado para ${(s=l.find(t=>t.id===e.studentId))==null?void 0:s.nombre}`)});function S(){["roomStudent","absenceStudent","filterStudent","seguimientoStudent"].forEach(i=>{const r=document.getElementById(i),d=r.value;r.innerHTML='<option value="">Seleccionar alumno</option>'+l.map(c=>`
                <option value="${c.id}">${c.nombre}</option>
            `).join(""),r.value=d});const e=document.getElementById("reportStudent");if(e){const i=e.value;e.innerHTML='<option value="">Seleccionar alumno</option>'+l.map(r=>`
                <option value="${r.id}">${r.nombre}</option>
            `).join(""),e.value=i}const a=document.getElementById("seguimientoStudent");if(a){const i=a.value;a.innerHTML='<option value="">Seleccionar alumno</option>'+l.map(r=>`
                <option value="${r.id}">${r.nombre}</option>
            `).join(""),a.value=i,a.removeEventListener("change",T),a.addEventListener("change",function(){T(this.value)})}const s=document.getElementById("alumnoResumenSelect");if(s){const i=s.value;s.innerHTML='<option value="">-- Seleccionar alumno --</option>'+l.map(r=>`
                <option value="${r.id}">${r.nombre}</option>
            `).join(""),s.value=i,s.removeEventListener("change",E),s.addEventListener("change",function(){E(this.value)})}const t=document.getElementById("roomNumber");t.innerHTML='<option value="">Seleccionar habitación</option>'+rooms.map(i=>`
            <option value="${i.number}">${i.number} (${i.type}, ${i.occupied}/${i.capacity})</option>
        `).join("");const o=document.getElementById("roomStudent");o&&(o.removeEventListener("change",D),o.addEventListener("change",D),D()),document.getElementById("roomBed"),t&&(t.removeEventListener("change",L),t.addEventListener("change",L),L())}function L(){const n=document.getElementById("roomNumber"),e=document.getElementById("roomBed");if(!n||!e)return;const a=n.value;if(e.innerHTML='<option value="">Seleccionar cama</option>',!a){e.disabled=!0;return}const s=rooms.find(i=>i.number===a);if(!s){e.disabled=!0;return}const t=Object.keys(s.beds).sort();let o=!1;t.forEach(i=>{const r=s.beds[i];if(r===null)o=!0,e.innerHTML+=`<option value="${i}">Cama ${i} - Vacante</option>`;else{const d=l.find(u=>u.id===r),c=d?d.nombre.split(" ")[0]:"Ocupada";e.innerHTML+=`<option value="${i}" disabled>Cama ${i} - Ocupada (${c})</option>`}}),e.disabled=!o}function D(){const n=document.getElementById("roomNumber"),e=document.getElementById("roomStudent");if(!n||!e)return;const a=parseInt(e.value);let s=rooms;if(a){const o=l.find(i=>i.id===a);if(o){const i=o.gender;s=rooms.filter(r=>r.gender===i)}}const t=n.value;n.innerHTML='<option value="">Seleccionar habitación</option>'+s.map(o=>{const i=o.floor===1?"Planta 1":"Planta 2",r=o.side==="izquierda"?"Izquierda":"Derecha",d=o.gender==="hombre"?"Hombres":"Mujeres";return`
                <option value="${o.number}">${o.number} - ${i} (${d}, ${r}) - ${o.occupied}/${o.capacity}</option>
            `}).join(""),n.value=t}function G(){const n=document.getElementById("reportsTableBody");if(n){if(p.length===0){n.innerHTML='<tr><td colspan="5" class="text-center py-8 text-gray-500">No hay partes registrados</td></tr>';return}n.innerHTML=p.map(e=>{const a=l.find(s=>s.id===e.studentId);return`
            <tr class="border-b border-gray-100 hover:bg-gray-50">
                <td class="py-3 px-4 font-medium">${a?`${a.nombre}`:"Alumno eliminado"}</td>
                <td class="py-3 px-4">${e.fecha}</td>
                <td class="py-3 px-4">${e.tipo}</td>
                <td class="py-3 px-4">${e.descripcion}</td>
                <td class="py-3 px-4">
                    <button onclick="deleteReport(${e.id})" class="text-red-600 hover:text-red-800">
                        <i class="fas fa-trash"></i>
                    </button>
                </td>
            </tr>
        `}).join("")}}var F;(F=document.getElementById("addSeguimientoForm"))==null||F.addEventListener("submit",function(n){if(!n)return;n.preventDefault();const e=parseInt(document.getElementById("seguimientoStudent").value);if(!e){alert("Seleccione un alumno para registrar el seguimiento");return}const a=document.getElementById("seguimientoAsignatura").value,s=document.getElementById("seguimientoFecha").value,t=document.getElementById("seguimientoTipo").value,o=document.getElementById("seguimientoNota").value,i=document.getElementById("seguimientoComentarios").value,r=l.find(u=>u.id===e);if(!r)return;r.academic||(r.academic={records:[]});const d={id:Date.now(),fecha:s,asignatura:a,tipo:t,nota:o,comentarios:i};r.academic.records.push(d),saveData(),T(e);const c=document.getElementById("alumnoResumenSelect");c&&c.value===e.toString()&&E(e),this.reset(),I(`Registro académico añadido para ${r.nombre}: ${a}`)});function E(n){const e=document.getElementById("alumnoResumenCard"),a=document.getElementById("alumnoResumenNombre"),s=document.getElementById("alumnoResumenFaltas"),t=document.getElementById("alumnoResumenPartes"),o=document.getElementById("alumnoResumenSuspensas");if(!n){e.classList.add("hidden");return}const i=l.find(u=>u.id===parseInt(n));if(!i){e.classList.add("hidden");return}const r=g.filter(u=>u.studentId===parseInt(n)).length,d=p.filter(u=>u.studentId===parseInt(n)).length;let c=0;if(i.academic&&i.academic.records){const u=m=>{if(!m)return!1;const f=(m.nota||"").toString().trim().replace(",","."),y=parseFloat(f);if(!isNaN(y))return y<5;const b=((m.tipo||"")+" "+(m.comentarios||"")+" "+(m.asignatura||"")+" "+(m.nota||"")).toLowerCase();return!!(b.includes("susp")||b.includes("suspenso")||b.includes("np")||b.includes("no presentado"))};c=i.academic.records.filter(u).length}a.textContent=i.nombre,s.textContent=r,t.textContent=d,o.textContent=c,e.classList.remove("hidden")}function T(n){const e=document.getElementById("seguimientoSummary");if(!e)return;if(!n){e.innerHTML='<div class="text-center col-span-3 py-8"><p class="text-gray-500">Seleccione un alumno para ver sus suspensas por trimestre</p></div>';return}const a=l.find(r=>r.id===parseInt(n));if(!a||!a.academic||a.academic.records.length===0){e.innerHTML='<div class="text-center col-span-3 py-8"><p class="text-gray-500">No hay registros para este alumno</p></div>';return}const s=r=>{if(!r)return!1;const d=(r.nota||"").toString().trim().replace(",","."),c=parseFloat(d);if(!isNaN(c))return c<5;const m=((r.tipo||"")+" "+(r.comentarios||"")+" "+(r.asignatura||"")+" "+(r.nota||"")).toLowerCase();return!!(m.includes("susp")||m.includes("suspenso")||m.includes("np")||m.includes("no presentado"))},t=a.academic.records.filter(s);if(t.length===0){e.innerHTML='<div class="text-center col-span-3 py-8"><p class="text-green-600 text-lg font-semibold"><i class="fas fa-check-circle mr-2"></i>Ninguna asignatura suspensa</p></div>';return}const o={"Trimestre 1":{count:0,color:"red"},"Trimestre 2":{count:0,color:"orange"},"Trimestre 3":{count:0,color:"red"}};t.forEach(r=>{const c=new Date(r.fecha+"T00:00:00").getMonth()+1;c>=9&&c<=11?o["Trimestre 1"].count+=1:c>=12||c<=3?o["Trimestre 2"].count+=1:c>=4&&c<=8&&(o["Trimestre 3"].count+=1)});let i="";Object.entries(o).forEach(([r,d])=>{const c=d.count===0?"bg-green-50 border-green-300":"bg-red-50 border-red-300",u=d.count===0?"text-green-800":"text-red-800",m=d.count===0?"text-green-600":"text-red-600";i+=`
            <div class="border-2 ${c} rounded-lg p-6 text-center">
                <p class="text-sm font-medium text-gray-600 mb-2">${r}</p>
                <div class="text-4xl font-bold ${u} mb-2">
                    <i class="fas ${d.count===0?"fa-check-circle":"fa-times-circle"} ${m} mr-2"></i>${d.count}
                </div>
                <p class="text-sm ${u} font-semibold">${d.count===1?"asignatura suspensa":"asignaturas suspensas"}</p>
            </div>
        `}),e.innerHTML=i}document.getElementById("filterStudent").addEventListener("change",x);document.getElementById("filterDate").addEventListener("change",x);document.getElementById("clearFilters").addEventListener("click",function(){document.getElementById("filterStudent").value="",document.getElementById("filterDate").value="",x()});function I(n){const e=document.getElementById("actividadReciente"),s=new Date().toLocaleString("es-ES"),t=document.createElement("div");for(t.className="flex items-center justify-between p-3 bg-gray-50 rounded-lg",t.innerHTML=`
        <div class="flex items-center space-x-3">
            <i class="fas fa-clock text-gray-400"></i>
            <span class="text-sm text-gray-700">${n}</span>
        </div>
        <span class="text-xs text-gray-500">${s}</span>
    `,e.children.length>0&&e.children[0].textContent.includes("No hay actividad reciente")&&(e.innerHTML=""),e.insertBefore(t,e.firstChild);e.children.length>10;)e.removeChild(e.lastChild)}function A(n){const e=new Date(n),a=(e.getDay()+6)%7;return e.setHours(0,0,0,0),e.setDate(e.getDate()-a),e.toISOString().slice(0,10)}function Z(n){const e=new Date(n+"T00:00:00");return e.setDate(e.getDate()+6),e.toISOString().slice(0,10)}function ee(){const n=localStorage.getItem("homeworks");if(n)try{v=JSON.parse(n)}catch{v={}}else v={}}let w=null;function te(){const n=document.getElementById("agendaGrid"),e=document.getElementById("weekSelector");if(!n)return;w||(w=A(new Date));const a=w,s=Z(a),t=v[a]||{},o=new Date(a+"T00:00:00"),i=new Date(s+"T00:00:00"),r=o.toLocaleDateString("es-ES",{day:"2-digit",month:"2-digit",year:"numeric"}),d=i.toLocaleDateString("es-ES",{day:"2-digit",month:"2-digit",year:"numeric"});e.textContent=`${r} → ${d}`;const u=A(new Date);let f=`<div class="mb-4">
        <h3 class="text-lg font-medium">Semana: ${a} → ${s}</h3>
        ${a===u?'<p class="text-sm text-green-600 font-medium"><i class="fas fa-check-circle mr-1"></i>Esta es la semana actual</p>':'<p class="text-sm text-gray-500">Semana anterior/futura</p>'}
    </div>`;f+='<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">',f+="<!-- Estudios -->";for(let y=1;y<=4;y++){const h=`estudio${y}`,b=t&&t[h]?t[h]:"",q=b.trim().length>0;f+=`
            <div class="bg-white p-4 rounded-lg border ${q?"border-indigo-300 bg-indigo-50":"border-gray-200"}">
                <h4 class="text-md font-semibold mb-2 text-gray-800">Estudio ${y}</h4>
                <textarea id="homework_${h}" rows="6" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500" placeholder="Escribe los deberes para esta semana">${b}</textarea>
                <div class="mt-3 flex items-center justify-between gap-2">
                    <button onclick="saveHomework('${h}')" class="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition-colors">
                        <i class="fas fa-save mr-1"></i>Guardar
                    </button>
                    <button onclick="clearHomework('${h}')" class="text-sm text-gray-600 hover:text-gray-800 hover:bg-gray-100 px-2 py-1 rounded transition-colors">
                        <i class="fas fa-trash-alt mr-1"></i>Limpiar
                    </button>
                </div>
            </div>
        `}f+="</div>",n.innerHTML=f}document.getElementById("absenceDate").valueAsDate=new Date;document.getElementById("reportDate")&&(document.getElementById("reportDate").valueAsDate=new Date);document.addEventListener("DOMContentLoaded",function(){M()});
//# sourceMappingURL=main-BBVksbz3.js.map
