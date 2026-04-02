(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,32177,e=>{"use strict";var t=e.i(43476),a=e.i(71645);let r=`
  attribute vec2 a_position;
  void main() {
    gl_Position = vec4(a_position, 0.0, 1.0);
  }
`,s=`
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

  float starLayer(vec2 uv, float scale, float drift, float t) {
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
        // ~50% of cells have visible stars
        float visible = step(0.5, brightness);
        brightness = brightness * brightness * visible;
        float twinkle = 0.7 + 0.3 * sin(t * 0.8 + brightness * 50.0);
        // Bright sharp star core
        float star = brightness * twinkle * smoothstep(0.04, 0.0, dist);
        // Wider soft glow
        star += brightness * twinkle * 0.3 * smoothstep(0.12, 0.0, dist);
        stars += star;
      }
    }
    return stars;
  }

  void main() {
    vec2 uv = gl_FragCoord.xy / u_resolution;
    float aspect = u_resolution.x / u_resolution.y;
    vec2 st = vec2(uv.x * aspect, uv.y);
    float t = u_time * 0.015;

    // Deep space base
    vec3 color = vec3(0.02, 0.01, 0.04);

    // Nebula clouds
    float neb = fbm(st * 1.8 + vec2(t * 0.4, t * 0.25));
    float neb2 = fbm(st * 2.5 + vec2(-t * 0.3, t * 0.2));

    // Purple/blue nebula glow
    color += vec3(0.12, 0.04, 0.22) * smoothstep(0.35, 0.7, neb) * 0.5;
    color += vec3(0.06, 0.06, 0.18) * smoothstep(0.4, 0.75, neb2) * 0.4;

    // Warm accent near center
    float center = 1.0 - length(uv - vec2(0.5, 0.5)) * 1.5;
    color += vec3(0.08, 0.02, 0.14) * max(center, 0.0) * 0.3;

    // Star layers - three depths with parallax drift
    float s1 = starLayer(st, 40.0, 0.015, t);  // Distant dense field
    float s2 = starLayer(st, 18.0, 0.03, t);    // Mid-depth
    float s3 = starLayer(st, 8.0, 0.06, t);     // Close bright stars

    // Star colors with slight tints
    color += vec3(0.6, 0.65, 0.8) * s1 * 0.7;    // Cool blue distant
    color += vec3(0.8, 0.8, 0.9) * s2 * 1.0;      // White-blue mid
    color += vec3(1.0, 0.95, 0.85) * s3 * 1.2;    // Warm-white close

    // Gentle vignette
    float vig = 1.0 - smoothstep(0.3, 1.1, length(uv - 0.5) * 1.4);
    color *= 0.6 + vig * 0.4;

    gl_FragColor = vec4(color, 1.0);
  }
`;function o(){let e=(0,a.useRef)(null),o=(0,a.useRef)(0);return(0,a.useEffect)(()=>{if(window.matchMedia("(prefers-reduced-motion: reduce)").matches)return;let t=e.current;if(!t)return;let a=t.getContext("webgl",{alpha:!1,antialias:!1,powerPreference:"low-power"});if(!a)return;function n(e,t){let r=a.createShader(e);return r?(a.shaderSource(r,t),a.compileShader(r),a.getShaderParameter(r,a.COMPILE_STATUS))?r:(console.warn("WebGL shader error:",a.getShaderInfoLog(r)),a.deleteShader(r),null):null}let i=n(a.VERTEX_SHADER,r),l=n(a.FRAGMENT_SHADER,s);if(!i||!l)return;let c=a.createProgram();if(!c)return;if(a.attachShader(c,i),a.attachShader(c,l),a.linkProgram(c),!a.getProgramParameter(c,a.LINK_STATUS))return void console.warn("WebGL link error:",a.getProgramInfoLog(c));a.useProgram(c);let d=a.createBuffer();a.bindBuffer(a.ARRAY_BUFFER,d),a.bufferData(a.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]),a.STATIC_DRAW);let m=a.getAttribLocation(c,"a_position");a.enableVertexAttribArray(m),a.vertexAttribPointer(m,2,a.FLOAT,!1,0,0);let u=a.getUniformLocation(c,"u_time"),f=a.getUniformLocation(c,"u_resolution");function h(){if(!t)return;let e=t.getBoundingClientRect();if(0===e.width||0===e.height)return;let r=Math.min(window.devicePixelRatio,1.5);t.width=e.width*r,t.height=e.height*r,a.viewport(0,0,t.width,t.height)}h(),window.addEventListener("resize",h);let x=performance.now();function p(){(0===t.width||0===t.height)&&h();let e=(performance.now()-x)/1e3;a.uniform1f(u,e),a.uniform2f(f,t.width,t.height),a.drawArrays(a.TRIANGLES,0,6),o.current=requestAnimationFrame(p)}return requestAnimationFrame(()=>{h(),o.current=requestAnimationFrame(p)}),()=>{cancelAnimationFrame(o.current),window.removeEventListener("resize",h)}},[]),(0,t.jsx)("canvas",{ref:e,className:"absolute inset-0 w-full h-full",style:{zIndex:1},"aria-hidden":"true"})}e.s(["default",0,function(){let[e,r]=(0,a.useState)(!1);return(0,a.useEffect)(()=>r(!0),[]),(0,t.jsxs)("section",{className:"relative min-h-screen flex items-center justify-center overflow-hidden",children:[(0,t.jsx)("div",{className:"absolute inset-0 bg-gradient-to-br from-[#0a0612] via-[#0a0a0a] to-[#110a1a]",children:e&&(0,t.jsx)(o,{})}),(0,t.jsx)("div",{className:"absolute inset-0 grid-bg",style:{zIndex:2}}),(0,t.jsxs)("div",{className:"relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20",children:[(0,t.jsxs)("div",{className:"animate-fade-in-up",children:[(0,t.jsx)("p",{className:"text-accent-light text-sm md:text-base font-semibold tracking-widest uppercase mb-6",children:"Senior IT Outstaffing"}),(0,t.jsxs)("h1",{className:"text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-6",children:["Senior IT outstaffing for",(0,t.jsx)("br",{}),(0,t.jsx)("span",{className:"gradient-text",children:"software, cloud, and security projects"})]}),(0,t.jsx)("p",{className:"text-muted text-lg md:text-xl max-w-3xl mx-auto mb-10 leading-relaxed",children:"AI-driven programming, security reviews, server administration, and app development with deep experience in .NET, Kubernetes, and cloud deployments."}),(0,t.jsxs)("div",{className:"glass-panel inline-flex flex-col sm:flex-row items-center justify-center gap-4 p-6 rounded-2xl",children:[(0,t.jsx)("a",{href:"mailto:info@hypedriven.com",className:"bg-accent hover:bg-accent-light text-white font-semibold px-8 py-4 rounded-lg text-lg transition-all hover:scale-105 animate-pulse-glow","data-track":"hero-cta-contact",children:"Contact Us"}),(0,t.jsx)("a",{href:"#products",className:"border border-white/20 hover:border-accent text-foreground font-semibold px-8 py-4 rounded-lg text-lg transition-all hover:bg-white/5","data-track":"hero-cta-products",children:"View Products"})]})]}),(0,t.jsx)("div",{className:"mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-12 animate-fade-in",style:{animationDelay:"0.4s",opacity:0},children:[{value:"10+",label:"Years in Production"},{value:".NET",label:"Core Specialization"},{value:"K8s",label:"Cloud Native"},{value:"4",label:"Industry Verticals"}].map(e=>(0,t.jsxs)("div",{className:"text-center",children:[(0,t.jsx)("div",{className:"text-3xl md:text-4xl font-bold gradient-text",children:e.value}),(0,t.jsx)("div",{className:"text-muted text-sm mt-1",children:e.label})]},e.label))})]}),(0,t.jsx)("div",{className:"absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0a0a0a] to-transparent"})]})}],32177)},75854,e=>{"use strict";var t=e.i(43476),a=e.i(71645);e.s(["default",0,function(){let[e,r]=(0,a.useState)(!1),[s,o]=(0,a.useState)(!1),n=async e=>{e.preventDefault();let t=e.currentTarget;t.elements.namedItem("website")?.value||(o(!0),"function"==typeof window.gtag&&window.gtag("event","form_submit",{event_category:"contact",event_label:"contact_form"}),await new Promise(e=>setTimeout(e,1e3)),r(!0),o(!1))};return(0,t.jsx)("section",{id:"contact",className:"py-24 md:py-32 bg-surface",children:(0,t.jsxs)("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[(0,t.jsxs)("div",{className:"max-w-2xl mx-auto text-center mb-12",children:[(0,t.jsx)("h2",{className:"text-3xl md:text-5xl font-bold mb-6",children:"Contact"}),(0,t.jsxs)("p",{className:"text-muted text-lg",children:["For project inquiries, outstaffing requests, or product questions, contact"," ",(0,t.jsx)("a",{href:"mailto:info@hypedriven.com",className:"text-accent-light hover:text-accent underline underline-offset-4 focus-ring rounded",children:"info@hypedriven.com"}),"."]})]}),(0,t.jsx)("div",{className:"max-w-xl mx-auto",children:e?(0,t.jsxs)("div",{className:"text-center glass-card rounded-xl p-10 animate-fade-in",children:[(0,t.jsx)("svg",{className:"w-16 h-16 text-accent mx-auto mb-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:(0,t.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1.5,d:"M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"})}),(0,t.jsx)("h3",{className:"text-2xl font-bold mb-2",children:"Message Sent"}),(0,t.jsx)("p",{className:"text-muted",children:"Thank you for reaching out. We will get back to you shortly."})]}):(0,t.jsxs)("form",{onSubmit:n,className:"space-y-5",children:[(0,t.jsxs)("div",{className:"grid sm:grid-cols-2 gap-5",children:[(0,t.jsxs)("div",{children:[(0,t.jsx)("label",{htmlFor:"name",className:"block text-sm font-medium mb-2",children:"Name"}),(0,t.jsx)("input",{type:"text",id:"name",name:"name",required:!0,autoComplete:"name",className:"w-full bg-background border border-white/10 rounded-lg px-4 py-3 text-foreground placeholder-muted focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/30 transition-colors",placeholder:"Your name"})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("label",{htmlFor:"email",className:"block text-sm font-medium mb-2",children:"Email"}),(0,t.jsx)("input",{type:"email",id:"email",name:"email",required:!0,autoComplete:"email",className:"w-full bg-background border border-white/10 rounded-lg px-4 py-3 text-foreground placeholder-muted focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/30 transition-colors",placeholder:"you@company.com"})]})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("label",{htmlFor:"company",className:"block text-sm font-medium mb-2",children:"Company"}),(0,t.jsx)("input",{type:"text",id:"company",name:"company",autoComplete:"organization",className:"w-full bg-background border border-white/10 rounded-lg px-4 py-3 text-foreground placeholder-muted focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/30 transition-colors",placeholder:"Your company (optional)"})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("label",{htmlFor:"message",className:"block text-sm font-medium mb-2",children:"Project Summary"}),(0,t.jsx)("textarea",{id:"message",name:"message",rows:4,required:!0,className:"w-full bg-background border border-white/10 rounded-lg px-4 py-3 text-foreground placeholder-muted focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/30 transition-colors resize-none",placeholder:"Tell us about your project, timeline, and what kind of engineering support you need."})]}),(0,t.jsxs)("div",{className:"absolute -left-[9999px]","aria-hidden":"true",children:[(0,t.jsx)("label",{htmlFor:"website",children:"Do not fill this"}),(0,t.jsx)("input",{type:"text",id:"website",name:"website",tabIndex:-1,autoComplete:"off"})]}),(0,t.jsxs)("div",{className:"flex items-center gap-6 text-muted text-xs",children:[(0,t.jsxs)("span",{className:"flex items-center gap-1",children:[(0,t.jsx)("svg",{className:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:(0,t.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"})}),"No spam. Ever."]}),(0,t.jsxs)("span",{className:"flex items-center gap-1",children:[(0,t.jsx)("svg",{className:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:(0,t.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"})}),"Response within 24h"]})]}),(0,t.jsx)("button",{type:"submit",disabled:s,className:"w-full bg-accent hover:bg-accent-light disabled:opacity-50 text-white font-semibold py-4 rounded-lg text-lg transition-all hover:scale-[1.02] focus-ring","data-track":"contact-form-submit",children:s?"Sending...":"Send Message"})]})})]})})}])}]);