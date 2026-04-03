(function() {
  var container = document.getElementById("webgl-bg");
  if (!container) return;

  var canvas = document.createElement("canvas");
  canvas.style.cssText = "display:block;width:100%;height:100%;";
  container.appendChild(canvas);

  var gl = canvas.getContext("webgl", { alpha: false, antialias: false, powerPreference: "low-power" });
  if (!gl) return;

  var vsSrc = "attribute vec2 a_position;void main(){gl_Position=vec4(a_position,0.0,1.0);}";

  var fsSrc = [
    "precision mediump float;",
    "uniform float u_time;",
    "uniform vec2 u_resolution;",
    "",
    "float hash(vec2 p){p=fract(p*vec2(123.34,456.21));p+=dot(p,p+45.32);return fract(p.x*p.y);}",
    "float hash2(vec2 p){vec3 p3=fract(vec3(p.xyx)*0.1031);p3+=dot(p3,p3.yzx+33.33);return fract((p3.x+p3.y)*p3.z);}",
    "float noise(vec2 p){vec2 i=floor(p);vec2 f=fract(p);f=f*f*(3.0-2.0*f);float a=hash(i);float b=hash(i+vec2(1.0,0.0));float c=hash(i+vec2(0.0,1.0));float d=hash(i+vec2(1.0,1.0));return mix(mix(a,b,f.x),mix(c,d,f.x),f.y);}",
    "float fbm(vec2 p){float v=0.0;float a=0.5;for(int i=0;i<4;i++){v+=a*noise(p);p*=2.0;a*=0.5;}return v;}",
    "vec2 rot(vec2 p,float a){float c=cos(a);float s=sin(a);return vec2(p.x*c-p.y*s,p.x*s+p.y*c);}",
    "float starLayer(vec2 uv,float scale,float drift,float t,float tw){",
    "  vec2 st=uv*scale+vec2(t*drift,t*drift*0.7);",
    "  vec2 cell=floor(st);vec2 sub=fract(st);",
    "  float stars=0.0;",
    "  for(int y=-1;y<=1;y++){for(int x=-1;x<=1;x++){",
    "    vec2 nb=vec2(float(x),float(y));",
    "    vec2 pos=vec2(hash(cell+nb),hash2(cell+nb));",
    "    vec2 diff=nb+pos-sub;float dist=length(diff);",
    "    float br=hash(cell+nb+100.0);",
    "    float vis=step(0.5,br);br=br*br*vis;",
    "    float ph=hash(cell+nb+200.0)*6.283;",
    "    float twinkle=0.4+0.6*(0.5+0.5*sin(t*tw+ph));",
    "    float star=br*twinkle*smoothstep(0.04,0.0,dist);",
    "    star+=br*twinkle*0.3*smoothstep(0.12,0.0,dist);",
    "    stars+=star;",
    "  }}return stars;}",
    "",
    "void main(){",
    "  vec2 uv=gl_FragCoord.xy/u_resolution;",
    "  float aspect=u_resolution.x/u_resolution.y;",
    "  vec2 st=vec2((uv.x-0.5)*aspect,uv.y-0.5);",
    "  float t=u_time;float rs=0.008;",
    "  vec2 st1=rot(st,t*rs)+0.5;",
    "  vec2 st2=rot(st,t*rs*1.4)+0.5;",
    "  vec2 st3=rot(st,t*rs*2.0)+0.5;",
    "  vec2 nst=rot(st,t*rs*0.5)+0.5;",
    "  vec3 color=vec3(0.02,0.01,0.04);",
    "  float st2_=t*0.015;",
    "  float neb=fbm(nst*1.8+vec2(st2_*0.4,st2_*0.25));",
    "  float neb2=fbm(nst*2.5+vec2(-st2_*0.3,st2_*0.2));",
    "  float breath=0.8+0.2*sin(t*0.1);",
    "  color+=vec3(0.12,0.04,0.22)*smoothstep(0.35,0.7,neb)*0.5*breath;",
    "  color+=vec3(0.06,0.06,0.18)*smoothstep(0.4,0.75,neb2)*0.4*breath;",
    "  float cd=length(uv-vec2(0.5,0.5));",
    "  float cp=0.7+0.3*sin(t*0.08+1.0);",
    "  color+=vec3(0.08,0.02,0.14)*max(1.0-cd*1.5,0.0)*0.3*cp;",
    "  float s1=starLayer(st1,40.0,0.015,t,1.2);",
    "  float s2=starLayer(st2,18.0,0.03,t,0.8);",
    "  float s3=starLayer(st3,8.0,0.06,t,0.5);",
    "  color+=vec3(0.6,0.65,0.8)*s1*0.7;",
    "  color+=vec3(0.8,0.8,0.9)*s2*1.0;",
    "  color+=vec3(1.0,0.95,0.85)*s3*1.2;",
    "  float vig=1.0-smoothstep(0.3,1.1,cd*1.4);",
    "  color*=0.6+vig*0.4;",
    "  gl_FragColor=vec4(color,1.0);",
    "}"
  ].join("\n");

  function makeShader(type, src) {
    var s = gl.createShader(type);
    gl.shaderSource(s, src);
    gl.compileShader(s);
    if (!gl.getShaderParameter(s, gl.COMPILE_STATUS)) {
      console.warn("WebGL shader error:", gl.getShaderInfoLog(s));
      return null;
    }
    return s;
  }

  var vs = makeShader(gl.VERTEX_SHADER, vsSrc);
  var fs = makeShader(gl.FRAGMENT_SHADER, fsSrc);
  if (!vs || !fs) return;

  var prog = gl.createProgram();
  gl.attachShader(prog, vs);
  gl.attachShader(prog, fs);
  gl.linkProgram(prog);
  if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) return;
  gl.useProgram(prog);

  var buf = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, buf);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]), gl.STATIC_DRAW);
  var pos = gl.getAttribLocation(prog, "a_position");
  gl.enableVertexAttribArray(pos);
  gl.vertexAttribPointer(pos, 2, gl.FLOAT, false, 0, 0);

  var tLoc = gl.getUniformLocation(prog, "u_time");
  var rLoc = gl.getUniformLocation(prog, "u_resolution");

  function resize() {
    var dpr = Math.min(window.devicePixelRatio, 1.5);
    canvas.width = canvas.clientWidth * dpr;
    canvas.height = canvas.clientHeight * dpr;
    gl.viewport(0, 0, canvas.width, canvas.height);
  }

  resize();
  window.addEventListener("resize", resize);

  var start = performance.now();
  function render() {
    var t = (performance.now() - start) / 1000;
    gl.uniform1f(tLoc, t);
    gl.uniform2f(rLoc, canvas.width, canvas.height);
    gl.drawArrays(gl.TRIANGLES, 0, 6);
    requestAnimationFrame(render);
  }
  render();
})();
