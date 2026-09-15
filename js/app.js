
const KEY="csharp-revision-v1";
const S=()=>JSON.parse(localStorage.getItem(KEY)||"{}");
const save=s=>localStorage.setItem(KEY,JSON.stringify(s));
const topics=ROADMAP.flatMap(p=>p.topics);
const total=topics.reduce((a,t)=>a+t.weight,0);
const done=(state,list=topics)=>list.reduce((a,t)=>a+(state[t.id]?t.weight:0),0);
const pct=(a,b)=>b?Math.min(100,a/b*100):0;
const bar=p=>`<div class="progress"><div style="width:${p}%"></div></div>`;
const priority=p=>({must:"🔴 MUST",should:"🟠 SHOULD",good:"🔵 GOOD",advanced:"⚪ ADVANCED"}[p]);
function nextTopic(s){return topics.find(t=>!s[t.id]);}

function sidebar(active){
 const s=S(), d=done(s), p=pct(d,total), next=nextTopic(s);
 return `<aside class="sidebar" id="sidebar">
   <div class="side-head"><a class="side-brand" href="index.html">C# <span>Revision</span></a><button class="close-side" id="closeSide">×</button></div>
   <nav class="side-nav">
     <a class="${active==='home'?'active':''}" href="index.html"><span>⌂</span> Dashboard</a>
     <a class="${active==='path'?'active':''}" href="roadmap.html"><span>☷</span> Learning Path</a>
     <a class="${active==='resources'?'active':''}" href="resources.html"><span>▤</span> Resources</a>
   </nav>
   <div class="side-section"><div class="side-label">LEARNING</div>
     ${ROADMAP.map(p=>`<a class="side-phase" href="roadmap.html#${p.id}"><span>${p.icon}</span><span>${p.title}</span></a>`).join("")}
   </div>
   <div class="side-section progress-side">
     <div class="side-label">PROGRESS</div>
     <div class="side-progress-row"><b>${p.toFixed(0)}%</b><span>${topics.filter(t=>s[t.id]).length}/${topics.length}</span></div>
     ${bar(p)}
     ${next?`<div class="side-next"><small>NEXT</small><a href="roadmap.html#${next.id}">${String(next.number).padStart(3,'0')} — ${next.title}</a></div>`:"<div class='side-next'><small>STATUS</small>🎉 Completed</div>"}
   </div>
 </aside>`;
}
function layout(active, content){
 document.querySelector("#app").innerHTML=`${sidebar(active)}<div class="sidebar-overlay" id="overlay"></div><main class="main"><button class="mobile-menu" id="mobileMenu">☰</button><div class="shell">${content}</div></main>`;
 document.querySelector("#mobileMenu").onclick=()=>document.body.classList.add("side-open");
 document.querySelector("#closeSide").onclick=()=>document.body.classList.remove("side-open");
 document.querySelector("#overlay").onclick=()=>document.body.classList.remove("side-open");
}
function dashboard(){
 const s=S(),d=done(s),p=pct(d,total),next=nextTopic(s),completed=topics.filter(t=>s[t.id]).length;
 layout("home",`<section class="hero"><div class="eyebrow">Your strict C# learning sequence</div><h1>Learn C# properly.<br><span class="muted">From fundamentals to advanced.</span></h1><p>Built for a .NET developer who wants to understand the language deeply — not just remember syntax.</p>${next?`<a class="continue" href="roadmap.html#${next.id}">Continue: ${String(next.number).padStart(3,'0')} — ${next.title} →</a>`:`<div class="continue">🎉 Entire roadmap completed!</div>`}</section>
 <div class="grid"><section class="card overall"><div class="row"><div><div class="eyebrow">Overall progress</div><h2 style="margin:7px 0">${p.toFixed(1)}%</h2></div><b>${d.toFixed(1)} / ${total.toFixed(1)} points</b></div>${bar(p)}<div class="muted">Weighted progress across ${topics.length} topics.</div></section>
 <section class="card stat"><div class="eyebrow">Completed</div><h2>${completed}</h2><div class="muted">topics checked</div></section><section class="card stat"><div class="eyebrow">Next topic</div><h2>${next?String(next.number).padStart(3,'0'):"Done"}</h2><div class="muted">${next?next.title:"All finished 🎉"}</div></section><section class="card stat"><div class="eyebrow">Priority system</div><div class="muted">🔴 Must → 🟠 Should → 🔵 Good → ⚪ Advanced</div></section>
 ${ROADMAP.map(x=>{let pd=pct(done(s,x.topics),x.weight);return `<a class="card phase-card" href="roadmap.html#${x.id}"><div class="eyebrow">${x.phase}</div><h3>${x.icon} ${x.title}</h3><div class="row"><span class="muted">${x.topics.length} steps</span><b>${pd.toFixed(0)}%</b></div>${bar(pd)}</a>`}).join("")}</div><div class="footer">Saved automatically in this browser using localStorage.</div>`);
}
function roadmap(){
 const s=S(),next=nextTopic(s);
 layout("path",`<section class="hero"><div class="eyebrow">Follow the numbers</div><h1>Your complete C# revision path 🧭</h1><p>Start at <b>001</b> and move forward. Priority tells you how deeply to learn the topic; the sequence tells you what to learn next.</p></section><div class="actions"><button class="btn danger" id="reset">Reset all progress</button></div>
 ${ROADMAP.map(p=>{let pd=pct(done(s,p.topics),p.weight);return `<section class="phase" id="${p.id}"><div class="phase-head"><div class="row"><div><div class="eyebrow">${p.phase}</div><h2 style="margin:5px 0">${p.icon} ${p.title}</h2></div><b>${pd.toFixed(1)}%</b></div>${bar(pd)}</div><div class="topic-list">${p.topics.map(t=>`<label id="${t.id}" class="topic ${s[t.id]?'done':''} ${next&&next.id===t.id?'next':''}"><input type="checkbox" data-id="${t.id}" ${s[t.id]?'checked':''}><div class="topic-main">${next&&next.id===t.id?'<div class="next-label">🎯 YOUR NEXT STEP</div>':''}<div class="row"><div class="topic-title"><span class="number">${String(t.number).padStart(3,'0')}</span> — ${t.title}</div><span class="priority ${t.priority}">${priority(t.priority)}</span></div><div class="topic-desc">${t.description}</div><div class="meta resource-row"><span><a class="resource" href="${t.easyUrl}" target="_blank" rel="noopener">🟢 Easy explanation ↗</a>${t.deepUrl?` <a class="deep-link" href="${t.deepUrl}" target="_blank" rel="noopener">🧠 Deep dive ↗</a>`:''} <a class="official-link" href="${t.officialUrl}" target="_blank" rel="noopener">📘 Official reference ↗</a> <a class="practice-link" href="${t.practiceUrl}" target="_blank" rel="noopener">💻 Practice ↗</a></span><span class="weight">Progress weight: ${t.weight}</span></div><details class="practice"><summary>🧠 Practice questions — 5 challenges</summary><ol>${t.practice.map(q=>`<li>${q}</li>`).join("")}</ol></details></div></label>`).join("")}</div></section>`}).join("")}<div class="footer">One language. Deep understanding. Practice every topic before moving on. 🚀</div>`);
 document.querySelectorAll("[data-id]").forEach(c=>c.addEventListener("change",()=>{let s=S();s[c.dataset.id]=c.checked;save(s);roadmap();}));
 document.querySelector("#reset").onclick=()=>{if(confirm("Reset all progress?")){localStorage.removeItem(KEY);roadmap();}};
 if(location.hash){setTimeout(()=>document.querySelector(location.hash)?.scrollIntoView({behavior:"smooth",block:"center"}),100);}
}
function resources(){
 layout("resources",`<section class="hero"><div class="eyebrow">Study resources</div><h1>Direct links. Less Googling. 😄</h1><p>Every numbered C# topic now points to a topic-specific study page, plus a C# practice track for hands-on confidence.</p></section><div class="grid">${ROADMAP.map(p=>`<section class="card phase-card"><div class="eyebrow">${p.phase}</div><h3>${p.icon} ${p.title}</h3>${p.topics.slice(0,5).map(t=>`<p><a class="resource" href="${t.easyUrl}" target="_blank">🟢 ${String(t.number).padStart(3,'0')} — ${t.title} (easy) ↗</a></p>`).join("")}<a class="continue" href="roadmap.html#${p.id}">View phase →</a></section>`).join("")}</div>`);
}
({home:dashboard,path:roadmap,resources:resources}[document.body.dataset.page])();
