const evidence = [
  ["Soil test","terracotta",8,18],["Weather","sage",45,15],["Management","ochre",72,18],
  ["Satellite","sage",5,48],["Input use","ochre",52,44],["Certification","sage",83,42],
  ["Financial","terracotta",16,72],["Regional data","sage",41,70],["Production","terracotta",69,61],
  ["Advisory note","ochre",76,78],["Field note","stone",27,36],["History","stone",58,28]
];

const cloud = document.getElementById("evidenceCloud");
evidence.forEach(([label, cls, x, y]) => {
  const el = document.createElement("span");
  el.className = `evidence-chip ${cls}`;
  el.textContent = label;
  el.style.left = `${x}%`;
  el.style.top = `${y}%`;
  cloud.appendChild(el);
});

function addSvgDot(group, x, y, r, fill, opacity=1){
  const ns="http://www.w3.org/2000/svg";
  const c=document.createElementNS(ns,"circle");
  c.setAttribute("cx",x); c.setAttribute("cy",y); c.setAttribute("r",r);
  c.setAttribute("fill",fill); c.setAttribute("opacity",opacity);
  group.appendChild(c);
}

const heroDots = document.getElementById("heroDots");
for(let i=0;i<145;i++){
  const x = 60 + Math.random()*790;
  const y = 90 + Math.random()*340;
  const fill = Math.random()>.72 ? "#A4513C" : "#F5F1E9";
  addSvgDot(heroDots,x,y,Math.random()*2.2+.55,fill,Math.random()*.65+.18);
}

const flowDots = document.getElementById("flowDots");
for(let i=0;i<50;i++){
  const x = 20 + Math.random()*340;
  const y = 45 + Math.random()*220;
  const palette=["#A4513C","#5E6F5E","#B48A44","#A7A7A1","#2B2B2B"];
  addSvgDot(flowDots,x,y,Math.random()*3+1.2,palette[Math.floor(Math.random()*palette.length)],.7);
}

const io = new IntersectionObserver((entries)=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting) entry.target.classList.add("visible");
  })
},{threshold:.13});

document.querySelectorAll(".reveal").forEach(el=>io.observe(el));
document.getElementById("year").textContent = new Date().getFullYear();
