/* ============================================================
   MUSEO VIRTUAL DEL SOMBRERO DE PAJA TOQUILLA
   Recorrido guiado en primera persona (Three.js) · galería finita
   ============================================================ */
/* Three.js se carga como script global (THREE) para funcionar por file:// y en GitHub Pages */
const $ = (s) => document.querySelector(s);

/* ---------- Libreto oficial (Ana, la guía) — texto literal del guion ---------- */
const WELCOME = "Bienvenidos al Museo Virtual del Sombrero de Paja Toquilla. Mi nombre es Ana y seré su guía durante este recorrido. Hoy descubriremos cómo una tradición artesanal nacida hace siglos llegó a convertirse en uno de los mayores símbolos culturales del Ecuador y en un Patrimonio Cultural Inmaterial de la Humanidad. Los invito a recorrer cinco salas donde conoceremos el origen del tejido, la preparación de la paja toquilla, el trabajo de los artesanos, el reconocimiento internacional de esta artesanía y la importancia de conservar este valioso legado para las futuras generaciones. Comencemos nuestro recorrido.";
const CLOSING = "Hemos llegado al final de nuestro recorrido. A lo largo de estas cinco salas descubrimos que el sombrero de paja toquilla es mucho más que una artesanía: es el resultado de siglos de historia, creatividad y dedicación, transmitidos de generación en generación. Esperamos que esta experiencia haya fortalecido su conocimiento y valoración de este importante patrimonio cultural del Ecuador. Gracias por acompañarnos en el Museo Virtual del Sombrero de Paja Toquilla. Los invitamos a compartir esta tradición y a contribuir a su preservación para que continúe inspirando a las futuras generaciones. ¡Hasta una próxima visita!";

const SALAS = [
  { z:10, title:"Raíces ancestrales del tejido",
    intro:"Bienvenidos a la primera sala: «Raíces ancestrales del tejido». En este espacio conoceremos cómo surgió el uso de las fibras vegetales en las culturas prehispánicas del Ecuador.",
    portada:{img:IMG.img1,cap:"Tejedora de paja toquilla"},
    obras:[
      {img:IMG.img2,cap:"Culturas prehispánicas tejiendo fibras vegetales en la costa del Ecuador",
       text:"Nuestra primera obra, «Culturas prehispánicas tejiendo fibras vegetales en la costa del Ecuador», nos muestra cómo las comunidades ancestrales elaboraban objetos para su vida cotidiana utilizando materiales naturales."},
      {img:IMG.img3,cap:"Recreación arqueológica de tejidos ancestrales",
       text:"A continuación observamos la obra «Recreación arqueológica de tejidos ancestrales», que representa las primeras técnicas de tejido desarrolladas hace cientos de años y que constituyen el origen de esta tradición artesanal."},
      {img:IMG.img4,cap:"Primeros objetos creados con fibras naturales",
       text:"Finalmente encontramos «Primeros objetos creados con fibras naturales», una colección que evidencia la creatividad y el ingenio de nuestros antepasados para transformar los recursos de la naturaleza en utensilios útiles y duraderos. Estas obras nos recuerdan que la historia del sombrero de paja toquilla comenzó mucho antes de convertirse en un símbolo del Ecuador."} ] },
  { z:0, title:"La paja que da vida al arte",
    intro:"Nos encontramos ahora en la segunda sala: «La paja que da vida al arte». Toda esta tradición comienza con una planta muy especial: la Carludovica palmata.",
    portada:{img:IMG.img5,cap:"Recolección de la paja toquilla"},
    obras:[
      {img:IMG.img6,cap:"Carludovica palmata",
       text:"La primera obra presenta la planta en su entorno tropical, permitiéndonos conocer el origen de la fibra utilizada para elaborar los sombreros."},
      {img:IMG.img7,cap:"Proceso artesanal de extracción y secado de la fibra",
       text:"En la segunda obra observamos el proceso artesanal de extracción y secado de la fibra, donde cada etapa requiere paciencia, experiencia y conocimientos transmitidos entre generaciones."},
      {img:IMG.img8,cap:"Fibras de paja toquilla clasificadas por calidad",
       text:"Finalmente apreciamos las fibras de paja toquilla clasificadas por calidad, un paso fundamental para garantizar la elaboración de sombreros finos reconocidos mundialmente. Como pueden observar, la excelencia de cada sombrero comienza mucho antes de iniciar el tejido."} ] },
  { z:-10, title:"Manos que tejen historia",
    intro:"Bienvenidos a la tercera sala: «Manos que tejen historia». Aquí conoceremos el extraordinario trabajo realizado por los artesanos ecuatorianos.",
    portada:{img:IMG.img9,cap:"El inicio del tejido"},
    obras:[
      {img:IMG.img10,cap:"Maestro artesano tejiendo un sombrero Montecristi",
       text:"La primera obra muestra a un maestro artesano tejiendo un sombrero Montecristi, considerado uno de los más finos del mundo."},
      {img:IMG.img11,cap:"Primer plano del tejido ultrafino",
       text:"La segunda obra nos acerca al tejido ultrafino, donde podemos apreciar la precisión y la paciencia necesarias para entrelazar cada fibra."},
      {img:IMG.img12,cap:"Herramientas tradicionales utilizadas por los artesanos",
       text:"Finalmente observamos las herramientas tradicionales utilizadas por los artesanos, instrumentos sencillos que, acompañados por la experiencia y el conocimiento, permiten crear auténticas obras de arte. Cada sombrero representa semanas o incluso meses de dedicación y refleja el legado cultural transmitido de generación en generación."} ] },
  { z:-20, title:"Del Ecuador al mundo",
    intro:"Continuamos nuestro recorrido en la cuarta sala: «Del Ecuador al mundo».",
    portada:{img:IMG.img13,cap:"Sombreros de paja toquilla"},
    obras:[
      {img:IMG.img14,cap:"Sombrero de paja toquilla exhibido en un museo internacional",
       text:"La primera obra presenta un sombrero de paja toquilla exhibido en un museo internacional, reflejando el prestigio que esta artesanía ha alcanzado fuera del Ecuador."},
      {img:IMG.img15,cap:"Mapa con Montecristi, Jipijapa y Cuenca como centros productores",
       text:"En la segunda obra observamos un mapa con Montecristi, Jipijapa y Cuenca, ciudades que desempeñaron un papel fundamental en la producción y comercialización de estos sombreros."},
      {img:IMG.img16,cap:"Exposición internacional del sombrero ecuatoriano",
       text:"Finalmente contemplamos una exposición internacional del sombrero ecuatoriano, donde esta artesanía representa la creatividad y la identidad cultural del país ante visitantes de todo el mundo. Gracias a su calidad y belleza, el sombrero de paja toquilla se convirtió en uno de los productos artesanales más reconocidos del Ecuador."} ] },
  { z:-30, title:"Patrimonio vivo",
    intro:"Hemos llegado a la quinta sala: «Patrimonio vivo».",
    portada:{img:IMG.img17,cap:"Hormas y sombreros"},
    obras:[
      {img:IMG.img18,cap:"Artesanos de diferentes generaciones trabajando juntos",
       text:"La primera obra reúne a artesanos de diferentes generaciones trabajando juntos, demostrando cómo este conocimiento continúa transmitiéndose dentro de las familias y las comunidades."},
      {img:IMG.img19,cap:"Sombrero de paja toquilla junto al emblema de la UNESCO",
       text:"La segunda obra presenta el sombrero de paja toquilla junto al emblema de la UNESCO, institución que en 2012 reconoció esta tradición como Patrimonio Cultural Inmaterial de la Humanidad."},
      {img:IMG.img20,cap:"Exposición moderna dedicada al patrimonio cultural ecuatoriano",
       text:"Finalmente observamos una exposición moderna dedicada al patrimonio cultural ecuatoriano, donde el sombrero de paja toquilla ocupa un lugar destacado como símbolo de identidad nacional. Conservar esta tradición significa preservar la memoria, la creatividad y el trabajo de miles de artesanos que mantienen vivo este legado cultural."} ] },
];

/* Nodos de narración: zonas automáticas (bienvenida, intro de sala, cierre)
   + obras que narran AL HACER CLIC sobre el cuadro (estando en su sala) */
const ZONES=[{id:"welcome",kind:"zone",z:15.5,label:"Ana · Su guía",room:"Bienvenida",short:"Bienvenida",text:WELCOME}];
const PHOTO_NODES=[];
const CLICKABLES=[]; // mallas de cuadros clicables → narración de la obra

/* ---------- Texturas por canvas ---------- */
function roundRect(c,x,y,w,h,r){c.beginPath();c.moveTo(x+r,y);c.arcTo(x+w,y,x+w,y+h,r);c.arcTo(x+w,y+h,x,y+h,r);c.arcTo(x,y+h,x,y,r);c.arcTo(x,y,x+w,y,r);c.closePath();}
function wrap(c,text,x,y,maxW,lh){const words=text.split(" ");let line="",yy=y;for(const w of words){const t=line+w+" ";if(c.measureText(t).width>maxW&&line){c.fillText(line.trim(),x,yy);line=w+" ";yy+=lh;}else line=t;}c.fillText(line.trim(),x,yy);return yy;}
function tex(cv){const t=new THREE.CanvasTexture(cv);t.anisotropy=8;t.encoding=THREE.sRGBEncoding;return t;}

function makeCaption(text){
  const cv=document.createElement("canvas");cv.width=560;cv.height=130;const c=cv.getContext("2d");
  c.fillStyle="#12181d";roundRect(c,0,0,560,130,14);c.fill();
  c.fillStyle="#1f9d63";c.fillRect(0,0,10,130);
  c.fillStyle="#ffffff";c.font="600 27px Georgia,serif";c.textAlign="center";c.textBaseline="middle";
  wrap(c,text,290,65,500,34);
  return tex(cv);
}
function makeBanner(short,title,color){
  const cv=document.createElement("canvas");cv.width=1024;cv.height=256;const c=cv.getContext("2d");
  c.clearRect(0,0,1024,256);
  c.fillStyle="#ffffff";roundRect(c,20,20,984,216,26);c.fill();
  c.fillStyle=color;c.fillRect(20,20,984,10);
  c.fillStyle=color;c.font="700 34px Arial,sans-serif";c.textAlign="center";c.textBaseline="middle";
  c.fillText(short.toUpperCase(),512,74);
  c.fillStyle="#12181d";c.font="900 62px Georgia,serif";c.fillText(title,512,158);
  return tex(cv);
}
function makeSign(big,small){
  const cv=document.createElement("canvas");cv.width=1024;cv.height=512;const c=cv.getContext("2d");
  c.fillStyle="#12181d";roundRect(c,0,0,1024,512,30);c.fill();
  c.fillStyle="#1f9d63";c.font="700 34px Arial,sans-serif";c.textAlign="center";c.textBaseline="middle";
  c.fillText(small.toUpperCase(),512,90);
  c.fillStyle="#ffffff";c.font="900 74px Georgia,serif";wrap(c,big,512,220,900,88);
  return tex(cv);
}

/* ---------- Escena ---------- */
const viewport=$("#viewport");
const renderer=new THREE.WebGLRenderer({antialias:true,preserveDrawingBuffer:true});
renderer.setPixelRatio(Math.min(window.devicePixelRatio,2));
renderer.setSize(window.innerWidth,window.innerHeight);
renderer.toneMapping=THREE.ACESFilmicToneMapping;renderer.toneMappingExposure=1.02;
renderer.outputEncoding=THREE.sRGBEncoding;
viewport.appendChild(renderer.domElement);

const scene=new THREE.Scene();
scene.background=new THREE.Color("#e7ebef");

const camera=new THREE.PerspectiveCamera(70,window.innerWidth/window.innerHeight,0.1,120);
camera.position.set(0,1.6,16.5);

/* --- Salón finito --- */
const HALFW=5.5, HEIGHT=4.4, Z0=18, Z1=-38, LEN=Z0-Z1, midZ=(Z0+Z1)/2;
const matFloor=new THREE.MeshStandardMaterial({color:"#c9ced5",roughness:.7});
const matWall =new THREE.MeshStandardMaterial({color:"#eef1f5",roughness:.97});
const matCeil =new THREE.MeshStandardMaterial({color:"#f7f9fb",roughness:1});
const matBase =new THREE.MeshStandardMaterial({color:"#20262d",roughness:.6});
function plane(w,h,mat,px,py,pz,rx,ry){const m=new THREE.Mesh(new THREE.PlaneGeometry(w,h),mat);m.position.set(px,py,pz);if(rx)m.rotation.x=rx;if(ry)m.rotation.y=ry;scene.add(m);return m;}
plane(HALFW*2,LEN,matFloor,0,0,midZ,-Math.PI/2,0);
plane(HALFW*2,LEN,matCeil,0,HEIGHT,midZ,Math.PI/2,0);
plane(LEN,HEIGHT,matWall,-HALFW,HEIGHT/2,midZ,0,Math.PI/2);
plane(LEN,HEIGHT,matWall, HALFW,HEIGHT/2,midZ,0,-Math.PI/2);
plane(HALFW*2,HEIGHT,new THREE.MeshStandardMaterial({color:"#9aa39c",roughness:.96}),0,HEIGHT/2,Z1,0,0); // fondo apagado
plane(HALFW*2,HEIGHT,matWall,0,HEIGHT/2,Z0,0,Math.PI);
plane(LEN,0.3,matBase,-HALFW+0.001,0.15,midZ,0,Math.PI/2);
plane(LEN,0.3,matBase, HALFW-0.001,0.15,midZ,0,-Math.PI/2);
// alfombra verde
const runner=new THREE.Mesh(new THREE.PlaneGeometry(2.4,LEN-2),new THREE.MeshStandardMaterial({color:"#1f4d3e",roughness:.9}));
runner.rotation.x=-Math.PI/2;runner.position.set(0,0.01,midZ);scene.add(runner);

/* --- Luces --- */
scene.add(new THREE.HemisphereLight(0xffffff,0xccd2da,1.05));
scene.add(new THREE.AmbientLight(0xffffff,0.6));
const d1=new THREE.DirectionalLight(0xfff6e8,0.7);d1.position.set(5,9,8);scene.add(d1);
const d2=new THREE.DirectionalLight(0xeaf0ff,0.35);d2.position.set(-6,7,-7);scene.add(d2);

/* --- Cuadro con foto --- */
function addArtwork(x,y,z,ry,url,cap,maxH,node){
  const g=new THREE.Group();g.position.set(x,y,z);g.rotation.y=ry;scene.add(g);
  const frame=new THREE.Mesh(new THREE.PlaneGeometry(1,1),new THREE.MeshBasicMaterial({color:0x1b2127}));
  frame.position.z=-0.01;g.add(frame);
  const mat=new THREE.MeshBasicMaterial({color:0xdddddd});
  const art=new THREE.Mesh(new THREE.PlaneGeometry(1,1),mat);art.position.z=0.01;g.add(art);
  if(node){art.userData.node=node;frame.userData.node=node;CLICKABLES.push(art,frame);}
  const plaque=new THREE.Mesh(new THREE.PlaneGeometry(1.4,0.325),new THREE.MeshBasicMaterial({map:makeCaption(cap),transparent:true}));
  plaque.visible=false;g.add(plaque);
  new THREE.TextureLoader().load(url,(t)=>{
    t.encoding=THREE.sRGBEncoding;t.anisotropy=8;mat.map=t;mat.color.set(0xffffff);mat.needsUpdate=true;
    const asp=t.image.width/t.image.height,h=maxH,w=h*asp;
    art.scale.set(w,h,1);frame.scale.set(w+0.14,h+0.14,1);
    plaque.position.set(0,-h/2-0.27,0.02);plaque.visible=true;
    // halo cálido detrás
    const halo=new THREE.Mesh(new THREE.PlaneGeometry(w+1.3,h+1.1),new THREE.MeshBasicMaterial({color:0xfff2d8,transparent:true,opacity:.22}));
    halo.position.z=-0.02;g.add(halo);
  });
  return g;
}
function addSign(x,y,z,ry,mapTex,w,h){
  const m=new THREE.Mesh(new THREE.PlaneGeometry(w,h),new THREE.MeshBasicMaterial({map:mapTex,transparent:true}));
  m.position.set(x,y,z);m.rotation.y=ry;scene.add(m);return m;
}

const BANNER_COLORS=["#6d7a5e","#7a746a","#5e6e7a","#75636d","#7a7260"];
/* Tonos de pared por sala: apagados y desaturados, para que la foto resalte */
const WALL_TONES=["#b6bdb0","#c4beb2","#aebbc3","#bfb6bc","#c2bba9"];
/* --- Construir salas: portada + 3 obras (recorrido en zigzag, narración por obra) --- */
SALAS.forEach((s,i)=>{
  const zc=s.z;
  // pared de acento de la sala (color apagado, distinto por sala)
  const acc=new THREE.MeshStandardMaterial({color:WALL_TONES[i],roughness:.97});
  plane(9.2,HEIGHT,acc,-HALFW+0.05,HEIGHT/2,zc,0,Math.PI/2);
  plane(9.2,HEIGHT,acc, HALFW-0.05,HEIGHT/2,zc,0,-Math.PI/2);
  // portada de la sala (sin narración propia: aquí habla la intro de sala)
  addArtwork(-HALFW+0.12, 2.0, zc+3.0, Math.PI/2, s.portada.img, s.portada.cap, 1.5);
  // obras del libreto: 1 derecha · 2 izquierda · 3 derecha
  const slots=[[ HALFW-0.12, zc+2.6, -Math.PI/2],
               [-HALFW+0.12, zc-0.6,  Math.PI/2],
               [ HALFW-0.12, zc-2.8, -Math.PI/2]];
  s.obras.forEach((o,k)=>{
    const [x,z,ry]=slots[k];
    const node={id:`s${i}o${k}`,kind:"obra",x,z,salaZ:zc,label:`Sala ${i+1} · Obra ${k+1}`,room:s.title,short:`Sala ${i+1}`,text:o.text};
    PHOTO_NODES.push(node);
    addArtwork(x,2.0,z,ry,o.img,o.cap,1.4,node);
  });
  addSign(0,3.55,zc+3.3,0,makeBanner("Sala "+(i+1),s.title,BANNER_COLORS[i]),4.6,1.15);
  ZONES.push({id:"sala"+i,kind:"zone",z:zc,label:`Sala ${i+1} · ${s.title}`,room:s.title,short:`Sala ${i+1}`,text:s.intro});
});
ZONES.push({id:"close",kind:"zone",z:-34.5,label:"Ana · Despedida",room:"Un legado que continúa",short:"Cierre",text:CLOSING});
// Pilastras divisorias entre salas (marcan el paso de una sala a otra)
const matPil=new THREE.MeshStandardMaterial({color:"#e2e5e9",roughness:.85});
[15,5,-5,-15,-25,-35].forEach(zb=>{
  [-1,1].forEach(sd=>{
    const pil=new THREE.Mesh(new THREE.BoxGeometry(0.6,HEIGHT,0.35),matPil);
    pil.position.set(sd*(HALFW-0.3),HEIGHT/2,zb);scene.add(pil);
  });
});
// Bienvenida: letrero elevado a la entrada (se pasa por debajo)
addSign(0,3.3,15.4,0,makeSign("Bienvenidos","Museo del Sombrero de Paja Toquilla"),4.6,2.0);
// Cierre (pared del fondo) + foto final
addArtwork(0,2.0,Z1+0.14,0,IMG.img21,"Nuestro patrimonio, nuestro futuro",2.1,
  {id:"close-art",kind:"obra",x:0,z:Z1+0.14,salaZ:-34.5,label:"Ana · Despedida",room:"Un legado que continúa",short:"Cierre",text:CLOSING});
addSign(0,3.7,Z1+0.16,0,makeSign("¡Gracias por su visita!","Tejiendo Identidad"),5.4,1.5);

/* ---------- Controles primera persona ---------- */
const controls=new THREE.PointerLockControls(camera,renderer.domElement);
scene.add(controls.getObject());
const keys={f:false,b:false,l:false,r:false};
const KEYMAP={KeyW:"f",ArrowUp:"f",KeyS:"b",ArrowDown:"b",KeyA:"l",ArrowLeft:"l",KeyD:"r",ArrowRight:"r"};
addEventListener("keydown",e=>{if(KEYMAP[e.code]){keys[KEYMAP[e.code]]=true;e.preventDefault();}});
addEventListener("keyup",e=>{if(KEYMAP[e.code]){keys[KEYMAP[e.code]]=false;}});
const velocity=new THREE.Vector3(),direction=new THREE.Vector3();
const clock=new THREE.Clock();
let started=false,entering=false,enterT=0;

controls.addEventListener("lock",()=>{
  $("#lobby").classList.add("is-gone");$("#paused").hidden=true;
  $("#hud").hidden=false;$("#crosshair").hidden=false;$("#narrator").hidden=false;
  if(!started){started=true;entering=true;enterT=0;controls.getObject().position.set(0,1.6,16.5);showNarr(ZONES[0]);}
});
controls.addEventListener("unlock",()=>{if(started){$("#paused").hidden=false;$("#crosshair").hidden=true;}});

/* ---------- Guía narradora + voz ---------- */
const narrator=$("#narrator"),guide=$("#guide"),bubble=$("#bubble");
let voiceOn=true, current=-1, talkTimer=null, talking=false;
function startGesture(ms){talking=true;guide.classList.add("is-talking");clearTimeout(talkTimer);talkTimer=setTimeout(stopGesture,ms);}
function stopGesture(){talking=false;guide.classList.remove("is-talking");}
// Voz SIEMPRE femenina (los nombres masculinos quedan excluidos de raíz) y lo más natural posible
const FEMALE=/(sabina|helena|laura|elvira|dalia|ximena|paloma|m[oó]nica|catalina|paulina|isidora|marisol|luc[ií]a|camila|valentina|abril|renata|salom|estrella|esperanza|teresa|yolanda|andrea|marina|sof[ií]a|isabela|francisca|larissa|triana|vera|carlota|google espa|mujer|female|femenin)/i;
const MALE=/(alvaro|álvaro|ra[uú]l|jorge|pablo|diego|andr[eé]s|carlos|miguel|juan|enrique|emilio|gerardo|liberto|sa[uú]l|dar[ií]o|manuel|mario|hern[aá]n|gonzalo|tom[aá]s|nicol[aá]s|arnau|male|masculin|hombre)/i;
const NATURAL=/(natural|neural|online|premium|wavenet)/i;
let chosenVoice=null, pendingSpeak=null;
function pickVoice(){
  const vs=speechSynthesis.getVoices().filter(v=>/^es/i.test(v.lang));
  if(!vs.length) return null;
  const fem=vs.filter(v=>FEMALE.test(v.name));
  const noMale=vs.filter(v=>!MALE.test(v.name));
  const pool=fem.length?fem:(noMale.length?noMale:vs); // jamás un hombre si hay alternativa
  const score=v=>(NATURAL.test(v.name)?4:0)+(v.localService===false?1:0)+(/es-?(es|mx|us|419|co)/i.test(v.lang)?1:0);
  return pool.slice().sort((a,b)=>score(b)-score(a))[0];
}
function speak(text){
  const hasTTS=("speechSynthesis" in window);
  if(hasTTS)speechSynthesis.cancel();
  if(!hasTTS||!voiceOn){
    // sin voz: la guía igual gesticula mientras "lees" el texto
    startGesture(Math.min(12000,Math.max(3500,text.length*45)));
    return;
  }
  if(!speechSynthesis.getVoices().length){
    // las voces aún cargan: esperar a voiceschanged para NO hablar con la voz por defecto
    pendingSpeak=text; startGesture(4000); return;
  }
  if(!chosenVoice)chosenVoice=pickVoice();
  const u=new SpeechSynthesisUtterance(text);u.rate=0.93;u.pitch=1.15;u.volume=1; // dulce: pausada y cálida
  if(chosenVoice){u.voice=chosenVoice;u.lang=chosenVoice.lang;}else u.lang="es-ES";
  startGesture(Math.min(30000,text.length*95)); // respaldo si onend no dispara
  u.onstart=()=>{talking=true;guide.classList.add("is-talking");};
  u.onend=stopGesture;
  u.onerror=stopGesture;
  speechSynthesis.speak(u);
}
let lastNode=null,lastZoneId=null;
function showNarr(n){
  lastNode=n;
  if(n.kind==="zone")lastZoneId=n.id;
  $("#bubbleSala").textContent=n.label;$("#bubbleText").textContent=n.text;
  narrator.classList.add("is-on");
  $("#roomCount").textContent=n.short;$("#roomName").textContent=n.room;
  speak(n.text);
}
function replayNarr(){if(lastNode)speak(lastNode.text);}
function toggleVoice(){voiceOn=!voiceOn;const b=$("#btnMute");
  b.innerHTML=(voiceOn?"🔊":"🔇")+" <kbd>M</kbd>";b.setAttribute("aria-pressed",String(voiceOn));
  if(!voiceOn){speechSynthesis.cancel();stopGesture();}
  else replayNarr();}
$("#btnReplay").addEventListener("click",replayNarr);
$("#btnMute").addEventListener("click",(e)=>{e.stopPropagation();toggleVoice();});
// Atajos sin soltar la cámara: R repetir · M voz
addEventListener("keydown",(e)=>{
  if(!started)return;
  if(e.code==="KeyR")replayNarr();
  else if(e.code==="KeyM")toggleVoice();
});

/* ---------- Apuntar y clicar un cuadro → narración de esa obra ---------- */
const raycaster=new THREE.Raycaster();
const AIM_CENTER=new THREE.Vector2(0,0);
let aimNode=null;
function nodeInSala(n){const p=controls.getObject().position;return Math.abs(p.z-n.salaZ)<=5.4;}
function updateAim(){
  aimNode=null;
  if(controls.isLocked&&CLICKABLES.length){
    raycaster.setFromCamera(AIM_CENTER,camera);
    const hits=raycaster.intersectObjects(CLICKABLES,false);
    if(hits.length&&hits[0].distance<8.5){
      const n=hits[0].object.userData.node;
      if(n&&nodeInSala(n))aimNode=n;   // solo dentro de la sala de esa obra
    }
  }
  $("#crosshair").classList.toggle("aim",!!aimNode);
  const h=$("#aimHint");if(h)h.hidden=!aimNode;
}

/* ---------- Zonas automáticas (bienvenida / intro de sala / cierre) ----------
   Las obras narran SOLO al hacer clic sobre su cuadro. */
function updateProximity(){
  const p=controls.getObject().position;
  let zn=null,bd=Infinity;
  for(const z of ZONES){const d=Math.abs(p.z-z.z);if(d<bd){bd=d;zn=z;}}
  if(zn&&zn.id!==lastZoneId)showNarr(zn);
}

/* ---------- Bucle ---------- */
let paused=false;
function animate(){
  if(paused)return;
  requestAnimationFrame(animate);
  const delta=Math.min(clock.getDelta(),0.05);
  const obj=controls.getObject();
  if(entering){
    enterT+=delta;const t=Math.min(enterT/1.8,1);
    obj.position.z=16.5-(1-Math.pow(1-t,3))*1.5;
    if(t>=1){entering=false;updateProximity();}
  } else if(controls.isLocked){
    velocity.x-=velocity.x*9*delta;velocity.z-=velocity.z*9*delta;
    direction.z=Number(keys.f)-Number(keys.b);direction.x=Number(keys.r)-Number(keys.l);direction.normalize();
    const SPEED=52;
    if(keys.f||keys.b)velocity.z-=direction.z*SPEED*delta;
    if(keys.l||keys.r)velocity.x-=direction.x*SPEED*delta;
    controls.moveRight(-velocity.x*delta);controls.moveForward(-velocity.z*delta);
    obj.position.x=Math.max(-HALFW+0.6,Math.min(HALFW-0.6,obj.position.x));
    obj.position.z=Math.max(Z1+1.2,Math.min(Z0-1,obj.position.z));
    obj.position.y=1.6;
    updateProximity();
    updateAim();
  }
  renderer.render(scene,camera);
}
animate();

/* ---------- Gestos de la guía (JS directo sobre el SVG: brazos, cabeza, boca, parpadeo) ---------- */
const gFig=document.getElementById("gFig"),gArmR=document.getElementById("gArmR"),
      gArmL=document.getElementById("gArmL"),gHead=document.getElementById("gHead"),
      gMouth=document.getElementById("gMouth"),gEyes=document.getElementById("gEyes");
function gestLoop(){
  if(paused)return;
  requestAnimationFrame(gestLoop);
  const t=performance.now()/1000;
  // hablando: gestos amplios · en reposo: respiración sutil
  const sway=(talking?1.8:0.6)*Math.sin(t*(talking?2.2:0.8));
  const aR = talking? (-15+13*Math.sin(t*5.2))      : (-2+2*Math.sin(t*1.15));
  const aL = talking? (9*Math.sin(t*3.7+1.2))       : (2*Math.sin(t+0.5));
  const hd = (talking?3.6:1.1)*Math.sin(t*(talking?2.7:0.9)+0.4);
  gFig.setAttribute("transform",`rotate(${sway.toFixed(2)} 80 208)`);
  gArmR.setAttribute("transform",`rotate(${aR.toFixed(2)} 104 140)`);
  gArmL.setAttribute("transform",`rotate(${aL.toFixed(2)} 56 140)`);
  gHead.setAttribute("transform",`rotate(${hd.toFixed(2)} 80 118)`);
  const ms=talking? (0.55+1.25*Math.abs(Math.sin(t*8.5))) : 1;
  gMouth.setAttribute("transform",`translate(80 101) scale(1 ${ms.toFixed(3)}) translate(-80 -101)`);
  const blink=((t%3.4)<0.13)?0.12:1; // parpadeo cada ~3.4s
  gEyes.setAttribute("transform",`translate(80 88) scale(1 ${blink}) translate(-80 -88)`);
}
gestLoop();

window.__museo={freeze(x,z,ry){paused=true;camera.position.set(x,1.6,z);camera.rotation.set(0,ry||0,0,"YXZ");updateProximity();renderer.render(scene,camera);},resume(){if(paused){paused=false;clock.getDelta();animate();gestLoop();}}};

/* ---------- UI ---------- */
$("#btnEnter").addEventListener("click",()=>controls.lock());
$("#btnResume").addEventListener("click",(e)=>{e.stopPropagation();controls.lock();});
// clic: con cursor libre retoma el recorrido · en modo cámara narra el cuadro apuntado
renderer.domElement.addEventListener("click",()=>{
  if(!started)return;
  if(!controls.isLocked){controls.lock();return;}
  if(aimNode)showNarr(aimNode);
});
$("#btnExit").addEventListener("click",()=>{controls.unlock();speechSynthesis&&speechSynthesis.cancel();stopGesture();
  $("#hud").hidden=true;$("#crosshair").hidden=true;$("#paused").hidden=true;$("#narrator").hidden=true;
  $("#lobby").classList.remove("is-gone");started=false;controls.getObject().position.set(0,1.6,16);});
addEventListener("resize",()=>{camera.aspect=window.innerWidth/window.innerHeight;camera.updateProjectionMatrix();renderer.setSize(window.innerWidth,window.innerHeight);});
if("speechSynthesis" in window){
  speechSynthesis.getVoices();
  speechSynthesis.onvoiceschanged=()=>{
    chosenVoice=pickVoice(); // recalcular con la lista completa (femenina + natural)
    if(pendingSpeak){const t=pendingSpeak;pendingSpeak=null;speak(t);}
  };
}

$("#btnEnter").disabled=false;
$("#loadNote").textContent="Listo · haz clic en «Entrar al museo»";
