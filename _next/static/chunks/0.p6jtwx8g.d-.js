(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,8341,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0});var n={cancelIdleCallback:function(){return i},requestIdleCallback:function(){return o}};for(var a in n)Object.defineProperty(r,a,{enumerable:!0,get:n[a]});let o="u">typeof self&&self.requestIdleCallback&&self.requestIdleCallback.bind(window)||function(e){let t=Date.now();return self.setTimeout(function(){e({didTimeout:!1,timeRemaining:function(){return Math.max(0,50-(Date.now()-t))}})},1)},i="u">typeof self&&self.cancelIdleCallback&&self.cancelIdleCallback.bind(window)||function(e){return clearTimeout(e)};("function"==typeof r.default||"object"==typeof r.default&&null!==r.default)&&void 0===r.default.__esModule&&(Object.defineProperty(r.default,"__esModule",{value:!0}),Object.assign(r.default,r),t.exports=r.default)},79520,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0});var n={default:function(){return x},handleClientScriptLoad:function(){return v},initScriptLoader:function(){return g}};for(var a in n)Object.defineProperty(r,a,{enumerable:!0,get:n[a]});let o=e.r(55682),i=e.r(90809),l=e.r(43476),s=o._(e.r(74080)),c=i._(e.r(71645)),f=e.r(42732),d=e.r(22737),u=e.r(8341),h=new Map,p=new Set,m=e=>{let{src:t,id:r,onLoad:n=()=>{},onReady:a=null,dangerouslySetInnerHTML:o,children:i="",strategy:l="afterInteractive",onError:c,stylesheets:f}=e,u=r||t;if(u&&p.has(u))return;if(h.has(t)){p.add(u),h.get(t).then(n,c);return}let m=()=>{a&&a(),p.add(u)},v=document.createElement("script"),g=new Promise((e,t)=>{v.addEventListener("load",function(t){e(),n&&n.call(this,t),m()}),v.addEventListener("error",function(e){t(e)})}).catch(function(e){c&&c(e)});o?(v.innerHTML=o.__html||"",m()):i?(v.textContent="string"==typeof i?i:Array.isArray(i)?i.join(""):"",m()):t&&(v.src=t,h.set(t,g)),(0,d.setAttributesFromProps)(v,e),"worker"===l&&v.setAttribute("type","text/partytown"),v.setAttribute("data-nscript",l),f&&(e=>{if(s.default.preinit)return e.forEach(e=>{s.default.preinit(e,{as:"style"})});if("u">typeof window){let t=document.head;e.forEach(e=>{let r=document.createElement("link");r.type="text/css",r.rel="stylesheet",r.href=e,t.appendChild(r)})}})(f),document.body.appendChild(v)};function v(e){let{strategy:t="afterInteractive"}=e;"lazyOnload"===t?window.addEventListener("load",()=>{(0,u.requestIdleCallback)(()=>m(e))}):m(e)}function g(e){e.forEach(v),[...document.querySelectorAll('[data-nscript="beforeInteractive"]'),...document.querySelectorAll('[data-nscript="beforePageRender"]')].forEach(e=>{let t=e.id||e.getAttribute("src");p.add(t)})}function b(e){let{id:t,src:r="",onLoad:n=()=>{},onReady:a=null,strategy:o="afterInteractive",onError:i,stylesheets:d,...h}=e,{updateScripts:v,scripts:g,getIsSsr:b,appDir:x,nonce:w}=(0,c.useContext)(f.HeadManagerContext);w=h.nonce||w;let y=(0,c.useRef)(!1);(0,c.useEffect)(()=>{let e=t||r;y.current||(a&&e&&p.has(e)&&a(),y.current=!0)},[a,t,r]);let _=(0,c.useRef)(!1);if((0,c.useEffect)(()=>{if(!_.current){if("afterInteractive"===o)m(e);else"lazyOnload"===o&&("complete"===document.readyState?(0,u.requestIdleCallback)(()=>m(e)):window.addEventListener("load",()=>{(0,u.requestIdleCallback)(()=>m(e))}));_.current=!0}},[e,o]),("beforeInteractive"===o||"worker"===o)&&(v?(g[o]=(g[o]||[]).concat([{id:t,src:r,onLoad:n,onReady:a,onError:i,...h,nonce:w}]),v(g)):b&&b()?p.add(t||r):b&&!b()&&m({...e,nonce:w})),x){if(d&&d.forEach(e=>{s.default.preinit(e,{as:"style"})}),"beforeInteractive"===o)if(!r)return h.dangerouslySetInnerHTML&&(h.children=h.dangerouslySetInnerHTML.__html,delete h.dangerouslySetInnerHTML),(0,l.jsx)("script",{nonce:w,dangerouslySetInnerHTML:{__html:`(self.__next_s=self.__next_s||[]).push(${JSON.stringify([0,{...h,id:t}])})`}});else return s.default.preload(r,h.integrity?{as:"script",integrity:h.integrity,nonce:w,crossOrigin:h.crossOrigin}:{as:"script",nonce:w,crossOrigin:h.crossOrigin}),(0,l.jsx)("script",{nonce:w,dangerouslySetInnerHTML:{__html:`(self.__next_s=self.__next_s||[]).push(${JSON.stringify([r,{...h,id:t}])})`}});"afterInteractive"===o&&r&&s.default.preload(r,h.integrity?{as:"script",integrity:h.integrity,nonce:w,crossOrigin:h.crossOrigin}:{as:"script",nonce:w,crossOrigin:h.crossOrigin})}return null}Object.defineProperty(b,"__nextScript",{value:!0});let x=b;("function"==typeof r.default||"object"==typeof r.default&&null!==r.default)&&void 0===r.default.__esModule&&(Object.defineProperty(r.default,"__esModule",{value:!0}),Object.assign(r.default,r),t.exports=r.default)},2971,e=>{"use strict";var t=e.i(43476),r=e.i(71645);let n=[{href:"#services",label:"Services"},{href:"#products",label:"Products"},{href:"#contact",label:"Contact"}];e.s(["default",0,function(){let[e,a]=(0,r.useState)(!1),[o,i]=(0,r.useState)(!1);return(0,r.useEffect)(()=>{let e=()=>a(window.scrollY>20);return window.addEventListener("scroll",e),()=>window.removeEventListener("scroll",e)},[]),(0,t.jsx)("header",{className:`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${e?"glass-header border-b border-white/10 shadow-lg":"bg-transparent"}`,role:"banner",children:(0,t.jsxs)("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[(0,t.jsxs)("div",{className:"flex items-center justify-between h-16 md:h-20",children:[(0,t.jsx)("a",{href:"#",className:"text-xl md:text-2xl font-bold tracking-tight focus-ring rounded",children:(0,t.jsx)("span",{className:"gradient-text",children:"HYPEDRIVEN"})}),(0,t.jsxs)("nav",{className:"hidden md:flex items-center gap-8","aria-label":"Main navigation",children:[n.map(e=>(0,t.jsx)("a",{href:e.href,className:"text-sm font-medium text-muted hover:text-foreground transition-colors focus-ring rounded px-1",children:e.label},e.href)),(0,t.jsx)("a",{href:"mailto:info@hypedriven.com",className:"bg-accent hover:bg-accent-light text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-colors focus-ring","data-track":"nav-contact",children:"Contact Us"})]}),(0,t.jsx)("button",{className:"md:hidden text-foreground p-2 focus-ring rounded",onClick:()=>i(!o),"aria-label":"Toggle menu","aria-expanded":o,children:(0,t.jsx)("svg",{className:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:o?(0,t.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M6 18L18 6M6 6l12 12"}):(0,t.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M4 6h16M4 12h16M4 18h16"})})})]}),o&&(0,t.jsx)("nav",{className:"md:hidden pb-6 animate-fade-in","aria-label":"Mobile navigation",children:(0,t.jsxs)("div",{className:"flex flex-col gap-4",children:[n.map(e=>(0,t.jsx)("a",{href:e.href,className:"text-base font-medium text-muted hover:text-foreground transition-colors focus-ring rounded px-1",onClick:()=>i(!1),children:e.label},e.href)),(0,t.jsx)("a",{href:"mailto:info@hypedriven.com",className:"bg-accent hover:bg-accent-light text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-colors text-center mt-2 focus-ring",onClick:()=>i(!1),children:"Contact Us"})]})})]})})}])},96433,e=>{"use strict";var t=e.i(43476),r=e.i(71645);let n=`
  attribute vec2 a_position;
  void main() {
    gl_Position = vec4(a_position, 0.0, 1.0);
  }
`,a=`
precision mediump float;
uniform float u_time;
uniform vec2 u_resolution;

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
`;function o(){let e=(0,r.useRef)(null),o=(0,r.useRef)(0);return(0,r.useEffect)(()=>{if(window.matchMedia("(prefers-reduced-motion: reduce)").matches)return;let t=e.current;if(!t)return;let r=t.getContext("webgl",{alpha:!1,antialias:!1,powerPreference:"low-power"});if(!r)return;function i(e,t){let n=r.createShader(e);return n?(r.shaderSource(n,t),r.compileShader(n),r.getShaderParameter(n,r.COMPILE_STATUS))?n:(console.warn("WebGL shader error:",r.getShaderInfoLog(n)),r.deleteShader(n),null):null}let l=i(r.VERTEX_SHADER,n),s=i(r.FRAGMENT_SHADER,a);if(!l||!s)return;let c=r.createProgram();if(!c)return;if(r.attachShader(c,l),r.attachShader(c,s),r.linkProgram(c),!r.getProgramParameter(c,r.LINK_STATUS))return void console.warn("WebGL link error:",r.getProgramInfoLog(c));r.useProgram(c);let f=r.createBuffer();r.bindBuffer(r.ARRAY_BUFFER,f),r.bufferData(r.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]),r.STATIC_DRAW);let d=r.getAttribLocation(c,"a_position");r.enableVertexAttribArray(d),r.vertexAttribPointer(d,2,r.FLOAT,!1,0,0);let u=r.getUniformLocation(c,"u_time"),h=r.getUniformLocation(c,"u_resolution");function p(){if(!t)return;let e=Math.min(window.devicePixelRatio,1.5);t.width=window.innerWidth*e,t.height=window.innerHeight*e,r.viewport(0,0,t.width,t.height)}p(),window.addEventListener("resize",p);let m=performance.now();function v(){let e=(performance.now()-m)/1e3;r.uniform1f(u,e),r.uniform2f(h,t.width,t.height),r.drawArrays(r.TRIANGLES,0,6),o.current=requestAnimationFrame(v)}return requestAnimationFrame(()=>{p(),o.current=requestAnimationFrame(v)}),()=>{cancelAnimationFrame(o.current),window.removeEventListener("resize",p)}},[]),(0,t.jsx)("canvas",{ref:e,className:"absolute inset-0 w-full h-full","aria-hidden":"true"})}e.s(["default",0,function(){let[e,n]=(0,r.useState)(!1);return(0,r.useEffect)(()=>n(!0),[]),(0,t.jsx)("div",{className:"fixed inset-0 bg-gradient-to-br from-[#0a0612] via-[#0a0a0a] to-[#110a1a]",style:{zIndex:0},"aria-hidden":"true",children:e&&(0,t.jsx)(o,{})})}],96433)}]);