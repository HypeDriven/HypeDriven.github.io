(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,8341,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0});var a={cancelIdleCallback:function(){return i},requestIdleCallback:function(){return o}};for(var n in a)Object.defineProperty(r,n,{enumerable:!0,get:a[n]});let o="u">typeof self&&self.requestIdleCallback&&self.requestIdleCallback.bind(window)||function(e){let t=Date.now();return self.setTimeout(function(){e({didTimeout:!1,timeRemaining:function(){return Math.max(0,50-(Date.now()-t))}})},1)},i="u">typeof self&&self.cancelIdleCallback&&self.cancelIdleCallback.bind(window)||function(e){return clearTimeout(e)};("function"==typeof r.default||"object"==typeof r.default&&null!==r.default)&&void 0===r.default.__esModule&&(Object.defineProperty(r.default,"__esModule",{value:!0}),Object.assign(r.default,r),t.exports=r.default)},79520,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0});var a={default:function(){return x},handleClientScriptLoad:function(){return v},initScriptLoader:function(){return b}};for(var n in a)Object.defineProperty(r,n,{enumerable:!0,get:a[n]});let o=e.r(55682),i=e.r(90809),l=e.r(43476),s=o._(e.r(74080)),c=i._(e.r(71645)),f=e.r(42732),d=e.r(22737),u=e.r(8341),p=new Map,h=new Set,m=e=>{let{src:t,id:r,onLoad:a=()=>{},onReady:n=null,dangerouslySetInnerHTML:o,children:i="",strategy:l="afterInteractive",onError:c,stylesheets:f}=e,u=r||t;if(u&&h.has(u))return;if(p.has(t)){h.add(u),p.get(t).then(a,c);return}let m=()=>{n&&n(),h.add(u)},v=document.createElement("script"),b=new Promise((e,t)=>{v.addEventListener("load",function(t){e(),a&&a.call(this,t),m()}),v.addEventListener("error",function(e){t(e)})}).catch(function(e){c&&c(e)});o?(v.innerHTML=o.__html||"",m()):i?(v.textContent="string"==typeof i?i:Array.isArray(i)?i.join(""):"",m()):t&&(v.src=t,p.set(t,b)),(0,d.setAttributesFromProps)(v,e),"worker"===l&&v.setAttribute("type","text/partytown"),v.setAttribute("data-nscript",l),f&&(e=>{if(s.default.preinit)return e.forEach(e=>{s.default.preinit(e,{as:"style"})});if("u">typeof window){let t=document.head;e.forEach(e=>{let r=document.createElement("link");r.type="text/css",r.rel="stylesheet",r.href=e,t.appendChild(r)})}})(f),document.body.appendChild(v)};function v(e){let{strategy:t="afterInteractive"}=e;"lazyOnload"===t?window.addEventListener("load",()=>{(0,u.requestIdleCallback)(()=>m(e))}):m(e)}function b(e){e.forEach(v),[...document.querySelectorAll('[data-nscript="beforeInteractive"]'),...document.querySelectorAll('[data-nscript="beforePageRender"]')].forEach(e=>{let t=e.id||e.getAttribute("src");h.add(t)})}function g(e){let{id:t,src:r="",onLoad:a=()=>{},onReady:n=null,strategy:o="afterInteractive",onError:i,stylesheets:d,...p}=e,{updateScripts:v,scripts:b,getIsSsr:g,appDir:x,nonce:w}=(0,c.useContext)(f.HeadManagerContext);w=p.nonce||w;let y=(0,c.useRef)(!1);(0,c.useEffect)(()=>{let e=t||r;y.current||(n&&e&&h.has(e)&&n(),y.current=!0)},[n,t,r]);let _=(0,c.useRef)(!1);if((0,c.useEffect)(()=>{if(!_.current){if("afterInteractive"===o)m(e);else"lazyOnload"===o&&("complete"===document.readyState?(0,u.requestIdleCallback)(()=>m(e)):window.addEventListener("load",()=>{(0,u.requestIdleCallback)(()=>m(e))}));_.current=!0}},[e,o]),("beforeInteractive"===o||"worker"===o)&&(v?(b[o]=(b[o]||[]).concat([{id:t,src:r,onLoad:a,onReady:n,onError:i,...p,nonce:w}]),v(b)):g&&g()?h.add(t||r):g&&!g()&&m({...e,nonce:w})),x){if(d&&d.forEach(e=>{s.default.preinit(e,{as:"style"})}),"beforeInteractive"===o)if(!r)return p.dangerouslySetInnerHTML&&(p.children=p.dangerouslySetInnerHTML.__html,delete p.dangerouslySetInnerHTML),(0,l.jsx)("script",{nonce:w,dangerouslySetInnerHTML:{__html:`(self.__next_s=self.__next_s||[]).push(${JSON.stringify([0,{...p,id:t}])})`}});else return s.default.preload(r,p.integrity?{as:"script",integrity:p.integrity,nonce:w,crossOrigin:p.crossOrigin}:{as:"script",nonce:w,crossOrigin:p.crossOrigin}),(0,l.jsx)("script",{nonce:w,dangerouslySetInnerHTML:{__html:`(self.__next_s=self.__next_s||[]).push(${JSON.stringify([r,{...p,id:t}])})`}});"afterInteractive"===o&&r&&s.default.preload(r,p.integrity?{as:"script",integrity:p.integrity,nonce:w,crossOrigin:p.crossOrigin}:{as:"script",nonce:w,crossOrigin:p.crossOrigin})}return null}Object.defineProperty(g,"__nextScript",{value:!0});let x=g;("function"==typeof r.default||"object"==typeof r.default&&null!==r.default)&&void 0===r.default.__esModule&&(Object.defineProperty(r.default,"__esModule",{value:!0}),Object.assign(r.default,r),t.exports=r.default)},2971,e=>{"use strict";var t=e.i(43476),r=e.i(71645);let a=[{href:"#services",label:"Services"},{href:"#expertise",label:"Expertise"},{href:"#products",label:"Products"},{href:"#contact",label:"Contact"}];e.s(["default",0,function(){let[e,n]=(0,r.useState)(!1),[o,i]=(0,r.useState)(!1);return(0,r.useEffect)(()=>{let e=()=>n(window.scrollY>20);return window.addEventListener("scroll",e),()=>window.removeEventListener("scroll",e)},[]),(0,t.jsx)("header",{className:`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 backdrop-blur-md border-b ${e||o?"bg-bg/85 border-line shadow-lg shadow-black/30":"bg-bg/55 border-line/50"}`,role:"banner",children:(0,t.jsxs)("div",{className:"max-w-6xl mx-auto px-5 sm:px-6 lg:px-8",children:[(0,t.jsxs)("div",{className:"flex items-center justify-between h-16",children:[(0,t.jsxs)("a",{href:"#",className:"mono font-bold text-base tracking-tight flex items-center gap-2",children:[(0,t.jsx)("span",{className:"text-accent",children:"◆"}),(0,t.jsx)("span",{children:"HYPEDRIVEN"})]}),(0,t.jsxs)("nav",{className:"hidden md:flex items-center gap-8","aria-label":"Main navigation",children:[a.map(e=>(0,t.jsx)("a",{href:e.href,className:"mono text-xs uppercase tracking-widest text-muted hover:text-fg transition-colors",children:e.label},e.href)),(0,t.jsx)("a",{href:"mailto:info@hypedriven.com",className:"mono text-xs uppercase tracking-widest btn-primary px-4 py-2","data-track":"nav-contact",children:"Start a project"})]}),(0,t.jsx)("button",{className:"md:hidden text-fg p-2",onClick:()=>i(!o),"aria-label":"Toggle menu","aria-expanded":o,children:(0,t.jsx)("svg",{className:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:o?(0,t.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1.5,d:"M6 18L18 6M6 6l12 12"}):(0,t.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1.5,d:"M4 7h16M4 12h16M4 17h16"})})})]}),o&&(0,t.jsx)("nav",{className:"md:hidden pb-6","aria-label":"Mobile navigation",children:(0,t.jsxs)("div",{className:"flex flex-col gap-1 border-t border-line pt-4",children:[a.map(e=>(0,t.jsx)("a",{href:e.href,className:"mono text-sm uppercase tracking-widest text-muted hover:text-fg transition-colors py-2",onClick:()=>i(!1),children:e.label},e.href)),(0,t.jsx)("a",{href:"mailto:info@hypedriven.com",className:"mono text-xs uppercase tracking-widest btn-primary px-4 py-3 text-center mt-3",onClick:()=>i(!1),children:"Start a project"})]})})]})})}])},64177,e=>{"use strict";var t=e.i(43476),r=e.i(71645);let a=`
  attribute vec2 a_position;
  void main() {
    gl_Position = vec4(a_position, 0.0, 1.0);
  }
`,n=`
precision mediump float;
uniform float u_time;
uniform vec2 u_resolution;
uniform float u_scroll_tilt;

float hash(vec2 p) {
  p = fract(p * vec2(123.34, 456.21));
  p += dot(p, p + 45.32);
  return fract(p.x * p.y);
}

float hash2(vec2 p) {
  vec3 p3 = fract(vec3(p.xyx) * 0.1031);
  p3 += dot(p3, p3.yzx + 33.33);
  return fract((p3.x + p3.y) * p3.z);
}

float noise(vec2 p) {
  vec2 i = floor(p);
  vec2 f = fract(p);
  f = f * f * (3.0 - 2.0 * f);
  float a = hash(i);
  float b = hash(i + vec2(1.0, 0.0));
  float c = hash(i + vec2(0.0, 1.0));
  float d = hash(i + vec2(1.0, 1.0));
  return mix(mix(a, b, f.x), mix(c, d, f.x), f.y);
}

float fbm(vec2 p) {
  float v = 0.0;
  float a = 0.5;
  for (int i = 0; i < 4; i++) {
    v += a * noise(p);
    p *= 2.0;
    a *= 0.5;
  }
  return v;
}

vec2 rot(vec2 p, float a) {
  float c = cos(a);
  float s = sin(a);
  return vec2(p.x * c - p.y * s, p.x * s + p.y * c);
}

vec2 tiltX(vec2 p, float a) {
  float c = cos(a);
  float s = sin(a);
  float cameraZ = 1.8;
  float y = p.y * c - s;
  float z = cameraZ + p.y * s + c - 1.0;
  return vec2(p.x, y) * (cameraZ / z);
}

float starLayer(vec2 uv, float scale, float drift, float t, float twinkleSpeed) {
  vec2 st = uv * scale + vec2(t * drift, t * drift * 0.7);
  vec2 cell = floor(st);
  vec2 sub = fract(st);
  float stars = 0.0;
  for (int y = -1; y <= 1; y++) {
    for (int x = -1; x <= 1; x++) {
      vec2 neighbor = vec2(float(x), float(y));
      vec2 pos = vec2(hash(cell + neighbor), hash2(cell + neighbor));
      vec2 diff = neighbor + pos - sub;
      float dist = length(diff);
      float brightness = hash(cell + neighbor + 100.0);
      float visible = step(0.5, brightness);
      brightness = brightness * brightness * visible;
      float phase = hash(cell + neighbor + 200.0) * 6.283;
      float twinkle = 0.5 + 0.5 * sin(t * twinkleSpeed + phase);
      twinkle = 0.4 + 0.6 * twinkle;
      float star = brightness * twinkle * smoothstep(0.04, 0.0, dist);
      star += brightness * twinkle * 0.3 * smoothstep(0.12, 0.0, dist);
      stars += star;
    }
  }
  return stars;
}

void main() {
  vec2 uv = gl_FragCoord.xy / u_resolution;
  float aspect = u_resolution.x / u_resolution.y;
  vec2 st = vec2((uv.x - 0.5) * aspect, uv.y - 0.5);
  float t = u_time;

  float rotSpeed = 0.008;
  st = tiltX(st, u_scroll_tilt);

  vec2 st1 = rot(st, t * rotSpeed) + 0.5;
  vec2 st2 = rot(st, t * rotSpeed * 1.4) + 0.5;
  vec2 st3 = rot(st, t * rotSpeed * 2.0) + 0.5;

  vec2 nebSt = rot(st, t * rotSpeed * 0.5) + 0.5;

  vec3 color = vec3(0.02, 0.01, 0.04);

  float slowT = t * 0.015;
  float neb = fbm(nebSt * 1.8 + vec2(slowT * 0.4, slowT * 0.25));
  float neb2 = fbm(nebSt * 2.5 + vec2(-slowT * 0.3, slowT * 0.2));

  float breath = 0.8 + 0.2 * sin(t * 0.1);

  color += vec3(0.12, 0.04, 0.22) * smoothstep(0.35, 0.7, neb) * 0.5 * breath;
  color += vec3(0.06, 0.06, 0.18) * smoothstep(0.4, 0.75, neb2) * 0.4 * breath;

  float centerDist = length(uv - vec2(0.5, 0.5));
  float centerGlow = (1.0 - centerDist * 1.5);
  float centerPulse = 0.7 + 0.3 * sin(t * 0.08 + 1.0);
  color += vec3(0.08, 0.02, 0.14) * max(centerGlow, 0.0) * 0.3 * centerPulse;

  float s1 = starLayer(st1, 40.0, 0.015, t, 1.2);
  float s2 = starLayer(st2, 18.0, 0.03, t, 0.8);
  float s3 = starLayer(st3, 8.0, 0.06, t, 0.5);

  color += vec3(0.6, 0.65, 0.8) * s1 * 0.7;
  color += vec3(0.8, 0.8, 0.9) * s2 * 1.0;
  color += vec3(1.0, 0.95, 0.85) * s3 * 1.2;

  float vig = 1.0 - smoothstep(0.3, 1.1, centerDist * 1.4);
  color *= 0.6 + vig * 0.4;

  gl_FragColor = vec4(color, 1.0);
}
`;e.s(["default",0,function(){let e=(0,r.useRef)(null),o=(0,r.useRef)(0),i=(0,r.useRef)({current:0,target:0,lastY:0});return(0,r.useEffect)(()=>{let t=e.current;if(!t)return;let r={alpha:!1,antialias:!1,powerPreference:"low-power"},l=t.getContext("webgl",r)||t.getContext("experimental-webgl",r);if(!l)return;function s(e,t){let r=l.createShader(e);return r?(l.shaderSource(r,t),l.compileShader(r),l.getShaderParameter(r,l.COMPILE_STATUS))?r:(console.warn("WebGL shader error:",l.getShaderInfoLog(r)),l.deleteShader(r),null):null}let c=s(l.VERTEX_SHADER,a),f=s(l.FRAGMENT_SHADER,n);if(!c||!f)return;let d=l.createProgram();if(!d)return;if(l.attachShader(d,c),l.attachShader(d,f),l.linkProgram(d),!l.getProgramParameter(d,l.LINK_STATUS))return void console.warn("WebGL link error:",l.getProgramInfoLog(d));l.useProgram(d);let u=l.createBuffer();l.bindBuffer(l.ARRAY_BUFFER,u),l.bufferData(l.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]),l.STATIC_DRAW);let p=l.getAttribLocation(d,"a_position");l.enableVertexAttribArray(p),l.vertexAttribPointer(p,2,l.FLOAT,!1,0,0);let h=l.getUniformLocation(d,"u_time"),m=l.getUniformLocation(d,"u_resolution"),v=l.getUniformLocation(d,"u_scroll_tilt");function b(){if(!t)return;let e=Math.min(window.devicePixelRatio||1,1.5),r=Math.max(1,Math.floor(window.innerWidth*e)),a=Math.max(1,Math.floor(window.innerHeight*e));t.width=r,t.height=a,l.viewport(0,0,r,a)}function g(){let e=i.current,t=window.scrollY-e.lastY;e.lastY=window.scrollY,e.target=Math.max(-.08,Math.min(.08,.002*t))}b(),window.addEventListener("resize",b),i.current.lastY=window.scrollY,window.addEventListener("scroll",g,{passive:!0});let x=performance.now();function w(){let e=(performance.now()-x)/1e3,r=i.current;r.current+=(r.target-r.current)*.08,l.uniform1f(h,e),l.uniform2f(m,t.width,t.height),l.uniform1f(v,r.current),l.drawArrays(l.TRIANGLES,0,6),o.current=requestAnimationFrame(w)}return requestAnimationFrame(()=>{b(),o.current=requestAnimationFrame(w)}),()=>{cancelAnimationFrame(o.current),window.removeEventListener("resize",b),window.removeEventListener("scroll",g)}},[]),(0,t.jsx)("canvas",{ref:e,style:{position:"absolute",top:0,left:0,width:"100%",height:"100%"},"aria-hidden":"true"})}])}]);