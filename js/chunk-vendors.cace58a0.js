(self["webpackChunkhypedriven"]=self["webpackChunkhypedriven"]||[]).push([[998],{9662:function(t,e,n){var i=n(7854),o=n(614),r=n(6330),s=i.TypeError;t.exports=function(t){if(o(t))return t;throw s(r(t)+" is not a function")}},6077:function(t,e,n){var i=n(7854),o=n(614),r=i.String,s=i.TypeError;t.exports=function(t){if("object"==typeof t||o(t))return t;throw s("Can't set "+r(t)+" as a prototype")}},1223:function(t,e,n){var i=n(5112),o=n(30),r=n(3070),s=i("unscopables"),a=Array.prototype;void 0==a[s]&&r.f(a,s,{configurable:!0,value:o(null)}),t.exports=function(t){a[s][t]=!0}},5787:function(t,e,n){var i=n(7854),o=n(7976),r=i.TypeError;t.exports=function(t,e){if(o(e,t))return t;throw r("Incorrect invocation")}},9670:function(t,e,n){var i=n(7854),o=n(111),r=i.String,s=i.TypeError;t.exports=function(t){if(o(t))return t;throw s(r(t)+" is not an object")}},4019:function(t){t.exports="undefined"!=typeof ArrayBuffer&&"undefined"!=typeof DataView},260:function(t,e,n){"use strict";var i,o,r,s=n(4019),a=n(9781),c=n(7854),l=n(614),u=n(111),d=n(2597),h=n(648),p=n(6330),f=n(8880),g=n(1320),m=n(3070).f,k=n(7976),b=n(9518),w=n(7674),v=n(5112),_=n(9711),A=c.Int8Array,C=A&&A.prototype,y=c.Uint8ClampedArray,E=y&&y.prototype,x=A&&b(A),I=C&&b(C),T=Object.prototype,D=c.TypeError,S=v("toStringTag"),M=_("TYPED_ARRAY_TAG"),N=_("TYPED_ARRAY_CONSTRUCTOR"),O=s&&!!w&&"Opera"!==h(c.opera),P=!1,B={Int8Array:1,Uint8Array:1,Uint8ClampedArray:1,Int16Array:2,Uint16Array:2,Int32Array:4,Uint32Array:4,Float32Array:4,Float64Array:8},L={BigInt64Array:8,BigUint64Array:8},R=function(t){if(!u(t))return!1;var e=h(t);return"DataView"===e||d(B,e)||d(L,e)},j=function(t){if(!u(t))return!1;var e=h(t);return d(B,e)||d(L,e)},z=function(t){if(j(t))return t;throw D("Target is not a typed array")},F=function(t){if(l(t)&&(!w||k(x,t)))return t;throw D(p(t)+" is not a typed array constructor")},V=function(t,e,n,i){if(a){if(n)for(var o in B){var r=c[o];if(r&&d(r.prototype,t))try{delete r.prototype[t]}catch(s){try{r.prototype[t]=e}catch(l){}}}I[t]&&!n||g(I,t,n?e:O&&C[t]||e,i)}},U=function(t,e,n){var i,o;if(a){if(w){if(n)for(i in B)if(o=c[i],o&&d(o,t))try{delete o[t]}catch(r){}if(x[t]&&!n)return;try{return g(x,t,n?e:O&&x[t]||e)}catch(r){}}for(i in B)o=c[i],!o||o[t]&&!n||g(o,t,e)}};for(i in B)o=c[i],r=o&&o.prototype,r?f(r,N,o):O=!1;for(i in L)o=c[i],r=o&&o.prototype,r&&f(r,N,o);if((!O||!l(x)||x===Function.prototype)&&(x=function(){throw D("Incorrect invocation")},O))for(i in B)c[i]&&w(c[i],x);if((!O||!I||I===T)&&(I=x.prototype,O))for(i in B)c[i]&&w(c[i].prototype,I);if(O&&b(E)!==I&&w(E,I),a&&!d(I,S))for(i in P=!0,m(I,S,{get:function(){return u(this)?this[M]:void 0}}),B)c[i]&&f(c[i],M,i);t.exports={NATIVE_ARRAY_BUFFER_VIEWS:O,TYPED_ARRAY_CONSTRUCTOR:N,TYPED_ARRAY_TAG:P&&M,aTypedArray:z,aTypedArrayConstructor:F,exportTypedArrayMethod:V,exportTypedArrayStaticMethod:U,isView:R,isTypedArray:j,TypedArray:x,TypedArrayPrototype:I}},1318:function(t,e,n){var i=n(5656),o=n(1400),r=n(6244),s=function(t){return function(e,n,s){var a,c=i(e),l=r(c),u=o(s,l);if(t&&n!=n){while(l>u)if(a=c[u++],a!=a)return!0}else for(;l>u;u++)if((t||u in c)&&c[u]===n)return t||u||0;return!t&&-1}};t.exports={includes:s(!0),indexOf:s(!1)}},4326:function(t,e,n){var i=n(1702),o=i({}.toString),r=i("".slice);t.exports=function(t){return r(o(t),8,-1)}},648:function(t,e,n){var i=n(7854),o=n(1694),r=n(614),s=n(4326),a=n(5112),c=a("toStringTag"),l=i.Object,u="Arguments"==s(function(){return arguments}()),d=function(t,e){try{return t[e]}catch(n){}};t.exports=o?s:function(t){var e,n,i;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(n=d(e=l(t),c))?n:u?s(e):"Object"==(i=s(e))&&r(e.callee)?"Arguments":i}},7741:function(t,e,n){var i=n(1702),o=i("".replace),r=function(t){return String(Error(t).stack)}("zxcasd"),s=/\n\s*at [^:]*:[^\n]*/,a=s.test(r);t.exports=function(t,e){if(a&&"string"==typeof t)while(e--)t=o(t,s,"");return t}},9920:function(t,e,n){var i=n(2597),o=n(3887),r=n(1236),s=n(3070);t.exports=function(t,e,n){for(var a=o(e),c=s.f,l=r.f,u=0;u<a.length;u++){var d=a[u];i(t,d)||n&&i(n,d)||c(t,d,l(e,d))}}},8544:function(t,e,n){var i=n(7293);t.exports=!i((function(){function t(){}return t.prototype.constructor=null,Object.getPrototypeOf(new t)!==t.prototype}))},8880:function(t,e,n){var i=n(9781),o=n(3070),r=n(9114);t.exports=i?function(t,e,n){return o.f(t,e,r(1,n))}:function(t,e,n){return t[e]=n,t}},9114:function(t){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},9781:function(t,e,n){var i=n(7293);t.exports=!i((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},317:function(t,e,n){var i=n(7854),o=n(111),r=i.document,s=o(r)&&o(r.createElement);t.exports=function(t){return s?r.createElement(t):{}}},3678:function(t){t.exports={IndexSizeError:{s:"INDEX_SIZE_ERR",c:1,m:1},DOMStringSizeError:{s:"DOMSTRING_SIZE_ERR",c:2,m:0},HierarchyRequestError:{s:"HIERARCHY_REQUEST_ERR",c:3,m:1},WrongDocumentError:{s:"WRONG_DOCUMENT_ERR",c:4,m:1},InvalidCharacterError:{s:"INVALID_CHARACTER_ERR",c:5,m:1},NoDataAllowedError:{s:"NO_DATA_ALLOWED_ERR",c:6,m:0},NoModificationAllowedError:{s:"NO_MODIFICATION_ALLOWED_ERR",c:7,m:1},NotFoundError:{s:"NOT_FOUND_ERR",c:8,m:1},NotSupportedError:{s:"NOT_SUPPORTED_ERR",c:9,m:1},InUseAttributeError:{s:"INUSE_ATTRIBUTE_ERR",c:10,m:1},InvalidStateError:{s:"INVALID_STATE_ERR",c:11,m:1},SyntaxError:{s:"SYNTAX_ERR",c:12,m:1},InvalidModificationError:{s:"INVALID_MODIFICATION_ERR",c:13,m:1},NamespaceError:{s:"NAMESPACE_ERR",c:14,m:1},InvalidAccessError:{s:"INVALID_ACCESS_ERR",c:15,m:1},ValidationError:{s:"VALIDATION_ERR",c:16,m:0},TypeMismatchError:{s:"TYPE_MISMATCH_ERR",c:17,m:1},SecurityError:{s:"SECURITY_ERR",c:18,m:1},NetworkError:{s:"NETWORK_ERR",c:19,m:1},AbortError:{s:"ABORT_ERR",c:20,m:1},URLMismatchError:{s:"URL_MISMATCH_ERR",c:21,m:1},QuotaExceededError:{s:"QUOTA_EXCEEDED_ERR",c:22,m:1},TimeoutError:{s:"TIMEOUT_ERR",c:23,m:1},InvalidNodeTypeError:{s:"INVALID_NODE_TYPE_ERR",c:24,m:1},DataCloneError:{s:"DATA_CLONE_ERR",c:25,m:1}}},8113:function(t,e,n){var i=n(5005);t.exports=i("navigator","userAgent")||""},7392:function(t,e,n){var i,o,r=n(7854),s=n(8113),a=r.process,c=r.Deno,l=a&&a.versions||c&&c.version,u=l&&l.v8;u&&(i=u.split("."),o=i[0]>0&&i[0]<4?1:+(i[0]+i[1])),!o&&s&&(i=s.match(/Edge\/(\d+)/),(!i||i[1]>=74)&&(i=s.match(/Chrome\/(\d+)/),i&&(o=+i[1]))),t.exports=o},748:function(t){t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},2914:function(t,e,n){var i=n(7293),o=n(9114);t.exports=!i((function(){var t=Error("a");return!("stack"in t)||(Object.defineProperty(t,"stack",o(1,7)),7!==t.stack)}))},2109:function(t,e,n){var i=n(7854),o=n(1236).f,r=n(8880),s=n(1320),a=n(3505),c=n(9920),l=n(4705);t.exports=function(t,e){var n,u,d,h,p,f,g=t.target,m=t.global,k=t.stat;if(u=m?i:k?i[g]||a(g,{}):(i[g]||{}).prototype,u)for(d in e){if(p=e[d],t.noTargetGet?(f=o(u,d),h=f&&f.value):h=u[d],n=l(m?d:g+(k?".":"#")+d,t.forced),!n&&void 0!==h){if(typeof p==typeof h)continue;c(p,h)}(t.sham||h&&h.sham)&&r(p,"sham",!0),s(u,d,p,t)}}},7293:function(t){t.exports=function(t){try{return!!t()}catch(e){return!0}}},2104:function(t,e,n){var i=n(4374),o=Function.prototype,r=o.apply,s=o.call;t.exports="object"==typeof Reflect&&Reflect.apply||(i?s.bind(r):function(){return s.apply(r,arguments)})},4374:function(t,e,n){var i=n(7293);t.exports=!i((function(){var t=function(){}.bind();return"function"!=typeof t||t.hasOwnProperty("prototype")}))},6916:function(t,e,n){var i=n(4374),o=Function.prototype.call;t.exports=i?o.bind(o):function(){return o.apply(o,arguments)}},6530:function(t,e,n){var i=n(9781),o=n(2597),r=Function.prototype,s=i&&Object.getOwnPropertyDescriptor,a=o(r,"name"),c=a&&"something"===function(){}.name,l=a&&(!i||i&&s(r,"name").configurable);t.exports={EXISTS:a,PROPER:c,CONFIGURABLE:l}},1702:function(t,e,n){var i=n(4374),o=Function.prototype,r=o.bind,s=o.call,a=i&&r.bind(s,s);t.exports=i?function(t){return t&&a(t)}:function(t){return t&&function(){return s.apply(t,arguments)}}},5005:function(t,e,n){var i=n(7854),o=n(614),r=function(t){return o(t)?t:void 0};t.exports=function(t,e){return arguments.length<2?r(i[t]):i[t]&&i[t][e]}},8173:function(t,e,n){var i=n(9662);t.exports=function(t,e){var n=t[e];return null==n?void 0:i(n)}},7854:function(t,e,n){var i=function(t){return t&&t.Math==Math&&t};t.exports=i("object"==typeof globalThis&&globalThis)||i("object"==typeof window&&window)||i("object"==typeof self&&self)||i("object"==typeof n.g&&n.g)||function(){return this}()||Function("return this")()},2597:function(t,e,n){var i=n(1702),o=n(7908),r=i({}.hasOwnProperty);t.exports=Object.hasOwn||function(t,e){return r(o(t),e)}},3501:function(t){t.exports={}},490:function(t,e,n){var i=n(5005);t.exports=i("document","documentElement")},4664:function(t,e,n){var i=n(9781),o=n(7293),r=n(317);t.exports=!i&&!o((function(){return 7!=Object.defineProperty(r("div"),"a",{get:function(){return 7}}).a}))},8361:function(t,e,n){var i=n(7854),o=n(1702),r=n(7293),s=n(4326),a=i.Object,c=o("".split);t.exports=r((function(){return!a("z").propertyIsEnumerable(0)}))?function(t){return"String"==s(t)?c(t,""):a(t)}:a},9587:function(t,e,n){var i=n(614),o=n(111),r=n(7674);t.exports=function(t,e,n){var s,a;return r&&i(s=e.constructor)&&s!==n&&o(a=s.prototype)&&a!==n.prototype&&r(t,a),t}},2788:function(t,e,n){var i=n(1702),o=n(614),r=n(5465),s=i(Function.toString);o(r.inspectSource)||(r.inspectSource=function(t){return s(t)}),t.exports=r.inspectSource},8340:function(t,e,n){var i=n(111),o=n(8880);t.exports=function(t,e){i(e)&&"cause"in e&&o(t,"cause",e.cause)}},9909:function(t,e,n){var i,o,r,s=n(8536),a=n(7854),c=n(1702),l=n(111),u=n(8880),d=n(2597),h=n(5465),p=n(6200),f=n(3501),g="Object already initialized",m=a.TypeError,k=a.WeakMap,b=function(t){return r(t)?o(t):i(t,{})},w=function(t){return function(e){var n;if(!l(e)||(n=o(e)).type!==t)throw m("Incompatible receiver, "+t+" required");return n}};if(s||h.state){var v=h.state||(h.state=new k),_=c(v.get),A=c(v.has),C=c(v.set);i=function(t,e){if(A(v,t))throw new m(g);return e.facade=t,C(v,t,e),e},o=function(t){return _(v,t)||{}},r=function(t){return A(v,t)}}else{var y=p("state");f[y]=!0,i=function(t,e){if(d(t,y))throw new m(g);return e.facade=t,u(t,y,e),e},o=function(t){return d(t,y)?t[y]:{}},r=function(t){return d(t,y)}}t.exports={set:i,get:o,has:r,enforce:b,getterFor:w}},614:function(t){t.exports=function(t){return"function"==typeof t}},4705:function(t,e,n){var i=n(7293),o=n(614),r=/#|\.prototype\./,s=function(t,e){var n=c[a(t)];return n==u||n!=l&&(o(e)?i(e):!!e)},a=s.normalize=function(t){return String(t).replace(r,".").toLowerCase()},c=s.data={},l=s.NATIVE="N",u=s.POLYFILL="P";t.exports=s},111:function(t,e,n){var i=n(614);t.exports=function(t){return"object"==typeof t?null!==t:i(t)}},1913:function(t){t.exports=!1},2190:function(t,e,n){var i=n(7854),o=n(5005),r=n(614),s=n(7976),a=n(3307),c=i.Object;t.exports=a?function(t){return"symbol"==typeof t}:function(t){var e=o("Symbol");return r(e)&&s(e.prototype,c(t))}},6244:function(t,e,n){var i=n(7466);t.exports=function(t){return i(t.length)}},133:function(t,e,n){var i=n(7392),o=n(7293);t.exports=!!Object.getOwnPropertySymbols&&!o((function(){var t=Symbol();return!String(t)||!(Object(t)instanceof Symbol)||!Symbol.sham&&i&&i<41}))},8536:function(t,e,n){var i=n(7854),o=n(614),r=n(2788),s=i.WeakMap;t.exports=o(s)&&/native code/.test(r(s))},6277:function(t,e,n){var i=n(1340);t.exports=function(t,e){return void 0===t?arguments.length<2?"":e:i(t)}},30:function(t,e,n){var i,o=n(9670),r=n(6048),s=n(748),a=n(3501),c=n(490),l=n(317),u=n(6200),d=">",h="<",p="prototype",f="script",g=u("IE_PROTO"),m=function(){},k=function(t){return h+f+d+t+h+"/"+f+d},b=function(t){t.write(k("")),t.close();var e=t.parentWindow.Object;return t=null,e},w=function(){var t,e=l("iframe"),n="java"+f+":";return e.style.display="none",c.appendChild(e),e.src=String(n),t=e.contentWindow.document,t.open(),t.write(k("document.F=Object")),t.close(),t.F},v=function(){try{i=new ActiveXObject("htmlfile")}catch(e){}v="undefined"!=typeof document?document.domain&&i?b(i):w():b(i);var t=s.length;while(t--)delete v[p][s[t]];return v()};a[g]=!0,t.exports=Object.create||function(t,e){var n;return null!==t?(m[p]=o(t),n=new m,m[p]=null,n[g]=t):n=v(),void 0===e?n:r.f(n,e)}},6048:function(t,e,n){var i=n(9781),o=n(3353),r=n(3070),s=n(9670),a=n(5656),c=n(1956);e.f=i&&!o?Object.defineProperties:function(t,e){s(t);var n,i=a(e),o=c(e),l=o.length,u=0;while(l>u)r.f(t,n=o[u++],i[n]);return t}},3070:function(t,e,n){var i=n(7854),o=n(9781),r=n(4664),s=n(3353),a=n(9670),c=n(4948),l=i.TypeError,u=Object.defineProperty,d=Object.getOwnPropertyDescriptor,h="enumerable",p="configurable",f="writable";e.f=o?s?function(t,e,n){if(a(t),e=c(e),a(n),"function"===typeof t&&"prototype"===e&&"value"in n&&f in n&&!n[f]){var i=d(t,e);i&&i[f]&&(t[e]=n.value,n={configurable:p in n?n[p]:i[p],enumerable:h in n?n[h]:i[h],writable:!1})}return u(t,e,n)}:u:function(t,e,n){if(a(t),e=c(e),a(n),r)try{return u(t,e,n)}catch(i){}if("get"in n||"set"in n)throw l("Accessors not supported");return"value"in n&&(t[e]=n.value),t}},1236:function(t,e,n){var i=n(9781),o=n(6916),r=n(5296),s=n(9114),a=n(5656),c=n(4948),l=n(2597),u=n(4664),d=Object.getOwnPropertyDescriptor;e.f=i?d:function(t,e){if(t=a(t),e=c(e),u)try{return d(t,e)}catch(n){}if(l(t,e))return s(!o(r.f,t,e),t[e])}},8006:function(t,e,n){var i=n(6324),o=n(748),r=o.concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return i(t,r)}},5181:function(t,e){e.f=Object.getOwnPropertySymbols},9518:function(t,e,n){var i=n(7854),o=n(2597),r=n(614),s=n(7908),a=n(6200),c=n(8544),l=a("IE_PROTO"),u=i.Object,d=u.prototype;t.exports=c?u.getPrototypeOf:function(t){var e=s(t);if(o(e,l))return e[l];var n=e.constructor;return r(n)&&e instanceof n?n.prototype:e instanceof u?d:null}},7976:function(t,e,n){var i=n(1702);t.exports=i({}.isPrototypeOf)},6324:function(t,e,n){var i=n(1702),o=n(2597),r=n(5656),s=n(1318).indexOf,a=n(3501),c=i([].push);t.exports=function(t,e){var n,i=r(t),l=0,u=[];for(n in i)!o(a,n)&&o(i,n)&&c(u,n);while(e.length>l)o(i,n=e[l++])&&(~s(u,n)||c(u,n));return u}},1956:function(t,e,n){var i=n(6324),o=n(748);t.exports=Object.keys||function(t){return i(t,o)}},5296:function(t,e){"use strict";var n={}.propertyIsEnumerable,i=Object.getOwnPropertyDescriptor,o=i&&!n.call({1:2},1);e.f=o?function(t){var e=i(this,t);return!!e&&e.enumerable}:n},7674:function(t,e,n){var i=n(1702),o=n(9670),r=n(6077);t.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var t,e=!1,n={};try{t=i(Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set),t(n,[]),e=n instanceof Array}catch(s){}return function(n,i){return o(n),r(i),e?t(n,i):n.__proto__=i,n}}():void 0)},2140:function(t,e,n){var i=n(7854),o=n(6916),r=n(614),s=n(111),a=i.TypeError;t.exports=function(t,e){var n,i;if("string"===e&&r(n=t.toString)&&!s(i=o(n,t)))return i;if(r(n=t.valueOf)&&!s(i=o(n,t)))return i;if("string"!==e&&r(n=t.toString)&&!s(i=o(n,t)))return i;throw a("Can't convert object to primitive value")}},3887:function(t,e,n){var i=n(5005),o=n(1702),r=n(8006),s=n(5181),a=n(9670),c=o([].concat);t.exports=i("Reflect","ownKeys")||function(t){var e=r.f(a(t)),n=s.f;return n?c(e,n(t)):e}},1320:function(t,e,n){var i=n(7854),o=n(614),r=n(2597),s=n(8880),a=n(3505),c=n(2788),l=n(9909),u=n(6530).CONFIGURABLE,d=l.get,h=l.enforce,p=String(String).split("String");(t.exports=function(t,e,n,c){var l,d=!!c&&!!c.unsafe,f=!!c&&!!c.enumerable,g=!!c&&!!c.noTargetGet,m=c&&void 0!==c.name?c.name:e;o(n)&&("Symbol("===String(m).slice(0,7)&&(m="["+String(m).replace(/^Symbol\(([^)]*)\)/,"$1")+"]"),(!r(n,"name")||u&&n.name!==m)&&s(n,"name",m),l=h(n),l.source||(l.source=p.join("string"==typeof m?m:""))),t!==i?(d?!g&&t[e]&&(f=!0):delete t[e],f?t[e]=n:s(t,e,n)):f?t[e]=n:a(e,n)})(Function.prototype,"toString",(function(){return o(this)&&d(this).source||c(this)}))},4488:function(t,e,n){var i=n(7854),o=i.TypeError;t.exports=function(t){if(void 0==t)throw o("Can't call method on "+t);return t}},3505:function(t,e,n){var i=n(7854),o=Object.defineProperty;t.exports=function(t,e){try{o(i,t,{value:e,configurable:!0,writable:!0})}catch(n){i[t]=e}return e}},6200:function(t,e,n){var i=n(2309),o=n(9711),r=i("keys");t.exports=function(t){return r[t]||(r[t]=o(t))}},5465:function(t,e,n){var i=n(7854),o=n(3505),r="__core-js_shared__",s=i[r]||o(r,{});t.exports=s},2309:function(t,e,n){var i=n(1913),o=n(5465);(t.exports=function(t,e){return o[t]||(o[t]=void 0!==e?e:{})})("versions",[]).push({version:"3.21.1",mode:i?"pure":"global",copyright:"© 2014-2022 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.21.1/LICENSE",source:"https://github.com/zloirock/core-js"})},1400:function(t,e,n){var i=n(9303),o=Math.max,r=Math.min;t.exports=function(t,e){var n=i(t);return n<0?o(n+e,0):r(n,e)}},5656:function(t,e,n){var i=n(8361),o=n(4488);t.exports=function(t){return i(o(t))}},9303:function(t){var e=Math.ceil,n=Math.floor;t.exports=function(t){var i=+t;return i!==i||0===i?0:(i>0?n:e)(i)}},7466:function(t,e,n){var i=n(9303),o=Math.min;t.exports=function(t){return t>0?o(i(t),9007199254740991):0}},7908:function(t,e,n){var i=n(7854),o=n(4488),r=i.Object;t.exports=function(t){return r(o(t))}},4590:function(t,e,n){var i=n(7854),o=n(3002),r=i.RangeError;t.exports=function(t,e){var n=o(t);if(n%e)throw r("Wrong offset");return n}},3002:function(t,e,n){var i=n(7854),o=n(9303),r=i.RangeError;t.exports=function(t){var e=o(t);if(e<0)throw r("The argument can't be less than 0");return e}},7593:function(t,e,n){var i=n(7854),o=n(6916),r=n(111),s=n(2190),a=n(8173),c=n(2140),l=n(5112),u=i.TypeError,d=l("toPrimitive");t.exports=function(t,e){if(!r(t)||s(t))return t;var n,i=a(t,d);if(i){if(void 0===e&&(e="default"),n=o(i,t,e),!r(n)||s(n))return n;throw u("Can't convert object to primitive value")}return void 0===e&&(e="number"),c(t,e)}},4948:function(t,e,n){var i=n(7593),o=n(2190);t.exports=function(t){var e=i(t,"string");return o(e)?e:e+""}},1694:function(t,e,n){var i=n(5112),o=i("toStringTag"),r={};r[o]="z",t.exports="[object z]"===String(r)},1340:function(t,e,n){var i=n(7854),o=n(648),r=i.String;t.exports=function(t){if("Symbol"===o(t))throw TypeError("Cannot convert a Symbol value to a string");return r(t)}},6330:function(t,e,n){var i=n(7854),o=i.String;t.exports=function(t){try{return o(t)}catch(e){return"Object"}}},9711:function(t,e,n){var i=n(1702),o=0,r=Math.random(),s=i(1..toString);t.exports=function(t){return"Symbol("+(void 0===t?"":t)+")_"+s(++o+r,36)}},3307:function(t,e,n){var i=n(133);t.exports=i&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},3353:function(t,e,n){var i=n(9781),o=n(7293);t.exports=i&&o((function(){return 42!=Object.defineProperty((function(){}),"prototype",{value:42,writable:!1}).prototype}))},5112:function(t,e,n){var i=n(7854),o=n(2309),r=n(2597),s=n(9711),a=n(133),c=n(3307),l=o("wks"),u=i.Symbol,d=u&&u["for"],h=c?u:u&&u.withoutSetter||s;t.exports=function(t){if(!r(l,t)||!a&&"string"!=typeof l[t]){var e="Symbol."+t;a&&r(u,t)?l[t]=u[t]:l[t]=c&&d?d(e):h(e)}return l[t]}},9191:function(t,e,n){"use strict";var i=n(5005),o=n(2597),r=n(8880),s=n(7976),a=n(7674),c=n(9920),l=n(9587),u=n(6277),d=n(8340),h=n(7741),p=n(2914),f=n(1913);t.exports=function(t,e,n,g){var m=g?2:1,k=t.split("."),b=k[k.length-1],w=i.apply(null,k);if(w){var v=w.prototype;if(!f&&o(v,"cause")&&delete v.cause,!n)return w;var _=i("Error"),A=e((function(t,e){var n=u(g?e:t,void 0),i=g?new w(t):new w;return void 0!==n&&r(i,"message",n),p&&r(i,"stack",h(i.stack,2)),this&&s(v,this)&&l(i,this,A),arguments.length>m&&d(i,arguments[m]),i}));if(A.prototype=v,"Error"!==b&&(a?a(A,_):c(A,_,{name:!0})),c(A,w),!f)try{v.name!==b&&r(v,"name",b),v.constructor=A}catch(C){}return A}}},2262:function(t,e,n){"use strict";var i=n(2109),o=n(7908),r=n(6244),s=n(9303),a=n(1223);i({target:"Array",proto:!0},{at:function(t){var e=o(this),n=r(e),i=s(t),a=i>=0?i:n+i;return a<0||a>=n?void 0:e[a]}}),a("at")},1703:function(t,e,n){var i=n(2109),o=n(7854),r=n(2104),s=n(9191),a="WebAssembly",c=o[a],l=7!==Error("e",{cause:7}).cause,u=function(t,e){var n={};n[t]=s(t,e,l),i({global:!0,forced:l},n)},d=function(t,e){if(c&&c[t]){var n={};n[t]=s(a+"."+t,e,l),i({target:a,stat:!0,forced:l},n)}};u("Error",(function(t){return function(e){return r(t,this,arguments)}})),u("EvalError",(function(t){return function(e){return r(t,this,arguments)}})),u("RangeError",(function(t){return function(e){return r(t,this,arguments)}})),u("ReferenceError",(function(t){return function(e){return r(t,this,arguments)}})),u("SyntaxError",(function(t){return function(e){return r(t,this,arguments)}})),u("TypeError",(function(t){return function(e){return r(t,this,arguments)}})),u("URIError",(function(t){return function(e){return r(t,this,arguments)}})),d("CompileError",(function(t){return function(e){return r(t,this,arguments)}})),d("LinkError",(function(t){return function(e){return r(t,this,arguments)}})),d("RuntimeError",(function(t){return function(e){return r(t,this,arguments)}}))},6314:function(t,e,n){var i=n(2109),o=n(2597);i({target:"Object",stat:!0},{hasOwn:o})},4506:function(t,e,n){"use strict";var i=n(2109),o=n(1702),r=n(4488),s=n(9303),a=n(1340),c=n(7293),l=o("".charAt),u=c((function(){return"\ud842"!=="𠮷".at(-2)}));i({target:"String",proto:!0,forced:u},{at:function(t){var e=a(r(this)),n=e.length,i=s(t),o=i>=0?i:n+i;return o<0||o>=n?void 0:l(e,o)}})},8675:function(t,e,n){"use strict";var i=n(260),o=n(6244),r=n(9303),s=i.aTypedArray,a=i.exportTypedArrayMethod;a("at",(function(t){var e=s(this),n=o(e),i=r(t),a=i>=0?i:n+i;return a<0||a>=n?void 0:e[a]}))},3462:function(t,e,n){"use strict";var i=n(7854),o=n(6916),r=n(260),s=n(6244),a=n(4590),c=n(7908),l=n(7293),u=i.RangeError,d=i.Int8Array,h=d&&d.prototype,p=h&&h.set,f=r.aTypedArray,g=r.exportTypedArrayMethod,m=!l((function(){var t=new Uint8ClampedArray(2);return o(p,t,{length:1,0:3},1),3!==t[1]})),k=m&&r.NATIVE_ARRAY_BUFFER_VIEWS&&l((function(){var t=new d(2);return t.set(1),t.set("2",1),0!==t[0]||2!==t[1]}));g("set",(function(t){f(this);var e=a(arguments.length>1?arguments[1]:void 0,1),n=c(t);if(m)return o(p,this,n,e);var i=this.length,r=s(n),l=0;if(r+e>i)throw u("Wrong length");while(l<r)this[e+l]=n[l++]}),!m||k)},2801:function(t,e,n){"use strict";var i=n(2109),o=n(5005),r=n(9114),s=n(3070).f,a=n(2597),c=n(5787),l=n(9587),u=n(6277),d=n(3678),h=n(7741),p=n(1913),f="DOMException",g=o("Error"),m=o(f),k=function(){c(this,b);var t=arguments.length,e=u(t<1?void 0:arguments[0]),n=u(t<2?void 0:arguments[1],"Error"),i=new m(e,n),o=g(e);return o.name=f,s(i,"stack",r(1,h(o.stack,1))),l(i,this,k),i},b=k.prototype=m.prototype,w="stack"in g(f),v="stack"in new m(1,2),_=w&&!v;i({global:!0,forced:p||_},{DOMException:_?k:m});var A=o(f),C=A.prototype;if(C.constructor!==A)for(var y in p||s(C,"constructor",r(1,A)),d)if(a(d,y)){var E=d[y],x=E.s;a(A,x)||s(A,x,r(6,E.c))}},6713:function(t,e,n){t=n.nmd(t),n(1703),n(2801),n(8675),n(3462),n(2262),n(4506),function(t){const e=t.en=t.en||{};e.dictionary=Object.assign(e.dictionary||{},{"%0 of %1":"%0 of %1",Accept:"Accept","Align cell text to the bottom":"Align cell text to the bottom","Align cell text to the center":"Align cell text to the center","Align cell text to the left":"Align cell text to the left","Align cell text to the middle":"Align cell text to the middle","Align cell text to the right":"Align cell text to the right","Align cell text to the top":"Align cell text to the top","Align table to the left":"Align table to the left","Align table to the right":"Align table to the right",Alignment:"Alignment",Aquamarine:"Aquamarine",Background:"Background",Black:"Black","Block quote":"Block quote",Blue:"Blue",Bold:"Bold",Border:"Border","Break text":"Break text","Bulleted List":"Bulleted List","Bulleted list styles toolbar":"Bulleted list styles toolbar",Cancel:"Cancel","Cannot access default workspace.":"Cannot access default workspace.","Cannot determine a category for the uploaded file.":"Cannot determine a category for the uploaded file.","Cannot upload file:":"Cannot upload file:","Caption for image: %0":"Caption for image: %0","Caption for the image":"Caption for the image","Cell properties":"Cell properties","Center table":"Center table","Centered image":"Centered image","Change image text alternative":"Change image text alternative","Choose heading":"Choose heading",Circle:"Circle",Clear:"Clear","Click to edit block":"Click to edit block",Close:"Close",Code:"Code",Color:"Color","Color picker":"Color picker",Column:"Column","Could not insert image at the current position.":"Could not insert image at the current position.","Could not obtain resized image URL.":"Could not obtain resized image URL.",Dashed:"Dashed",Decimal:"Decimal","Decimal with leading zero":"Decimal with leading zero","Decrease indent":"Decrease indent","Delete column":"Delete column","Delete row":"Delete row","Dim grey":"Dim grey",Dimensions:"Dimensions",Disc:"Disc",Dotted:"Dotted",Double:"Double",Downloadable:"Downloadable","Drag to move":"Drag to move","Dropdown toolbar":"Dropdown toolbar","Edit block":"Edit block","Edit image":"Edit image","Edit link":"Edit link","Editor block content toolbar":"Editor block content toolbar","Editor contextual toolbar":"Editor contextual toolbar","Editor dialog":"Editor dialog","Editor editing area: %0":"Editor editing area: %0","Editor toolbar":"Editor toolbar","Enter image caption":"Enter image caption","Enter table caption":"Enter table caption","Failed to determine category of edited image.":"Failed to determine category of edited image.","Full size image":"Full size image",Green:"Green",Grey:"Grey",Groove:"Groove","Header column":"Header column","Header row":"Header row",Heading:"Heading","Heading 1":"Heading 1","Heading 2":"Heading 2","Heading 3":"Heading 3","Heading 4":"Heading 4","Heading 5":"Heading 5","Heading 6":"Heading 6",Height:"Height",HEX:"HEX","Horizontal text alignment toolbar":"Horizontal text alignment toolbar","Image resize list":"Image resize list","Image toolbar":"Image toolbar","image widget":"image widget","In line":"In line","Increase indent":"Increase indent",Insert:"Insert","Insert column left":"Insert column left","Insert column right":"Insert column right","Insert image":"Insert image","Insert image or file":"Insert image or file","Insert image via URL":"Insert image via URL","Insert image with file manager":"Insert image with file manager","Insert media":"Insert media","Insert paragraph after block":"Insert paragraph after block","Insert paragraph before block":"Insert paragraph before block","Insert row above":"Insert row above","Insert row below":"Insert row below","Insert table":"Insert table","Insert with file manager":"Insert with file manager","Inserting image failed":"Inserting image failed",Inset:"Inset",Italic:"Italic","Justify cell text":"Justify cell text","Left aligned image":"Left aligned image","Light blue":"Light blue","Light green":"Light green","Light grey":"Light grey",Link:"Link","Link image":"Link image","Link URL":"Link URL","List properties":"List properties","Lower-latin":"Lower-latin","Lower–roman":"Lower–roman","Media toolbar":"Media toolbar","Media URL":"Media URL","media widget":"media widget","Merge cell down":"Merge cell down","Merge cell left":"Merge cell left","Merge cell right":"Merge cell right","Merge cell up":"Merge cell up","Merge cells":"Merge cells",Next:"Next","No results found":"No results found","No searchable items":"No searchable items",None:"None","Numbered List":"Numbered List","Numbered list styles toolbar":"Numbered list styles toolbar","Open file manager":"Open file manager","Open in a new tab":"Open in a new tab","Open link in new tab":"Open link in new tab","Open media in new tab":"Open media in new tab",Orange:"Orange",Original:"Original",Outset:"Outset",Padding:"Padding",Paragraph:"Paragraph","Paste the media URL in the input.":"Paste the media URL in the input.","Press Enter to type after or press Shift + Enter to type before the widget":"Press Enter to type after or press Shift + Enter to type before the widget",Previous:"Previous","Processing the edited image.":"Processing the edited image.",Purple:"Purple",Red:"Red",Redo:"Redo","Remove color":"Remove color","Replace from computer":"Replace from computer","Replace image":"Replace image","Replace image from computer":"Replace image from computer","Replace image with file manager":"Replace image with file manager","Replace with file manager":"Replace with file manager","Resize image":"Resize image","Resize image to %0":"Resize image to %0","Resize image to the original size":"Resize image to the original size","Restore default":"Restore default","Reversed order":"Reversed order","Rich Text Editor":"Rich Text Editor",Ridge:"Ridge","Right aligned image":"Right aligned image",Row:"Row",Save:"Save","Select all":"Select all","Select column":"Select column","Select row":"Select row","Selecting resized image failed":"Selecting resized image failed","Server failed to process the image.":"Server failed to process the image.","Show more items":"Show more items","Side image":"Side image",Solid:"Solid","Split cell horizontally":"Split cell horizontally","Split cell vertically":"Split cell vertically",Square:"Square","Start at":"Start at","Start index must be greater than 0.":"Start index must be greater than 0.",Strikethrough:"Strikethrough",Style:"Style",Subscript:"Subscript",Superscript:"Superscript","Table alignment toolbar":"Table alignment toolbar","Table cell text alignment":"Table cell text alignment","Table properties":"Table properties","Table toolbar":"Table toolbar","Text alternative":"Text alternative",'The color is invalid. Try "#FF0000" or "rgb(255,0,0)" or "red".':'The color is invalid. Try "#FF0000" or "rgb(255,0,0)" or "red".',"The URL must not be empty.":"The URL must not be empty.",'The value is invalid. Try "10px" or "2em" or simply "2".':'The value is invalid. Try "10px" or "2em" or simply "2".',"This link has no URL":"This link has no URL","This media URL is not supported.":"This media URL is not supported.","Tip: Paste the URL into the content to embed faster.":"Tip: Paste the URL into the content to embed faster.","To-do List":"To-do List","Toggle caption off":"Toggle caption off","Toggle caption on":"Toggle caption on","Toggle the circle list style":"Toggle the circle list style","Toggle the decimal list style":"Toggle the decimal list style","Toggle the decimal with leading zero list style":"Toggle the decimal with leading zero list style","Toggle the disc list style":"Toggle the disc list style","Toggle the lower–latin list style":"Toggle the lower–latin list style","Toggle the lower–roman list style":"Toggle the lower–roman list style","Toggle the square list style":"Toggle the square list style","Toggle the upper–latin list style":"Toggle the upper–latin list style","Toggle the upper–roman list style":"Toggle the upper–roman list style",Turquoise:"Turquoise","Type or paste your content here.":"Type or paste your content here.","Type your title":"Type your title",Underline:"Underline",Undo:"Undo",Unlink:"Unlink",Update:"Update","Update image URL":"Update image URL","Upload failed":"Upload failed","Upload from computer":"Upload from computer","Upload image from computer":"Upload image from computer","Upload in progress":"Upload in progress","Upper-latin":"Upper-latin","Upper-roman":"Upper-roman","Vertical text alignment toolbar":"Vertical text alignment toolbar",White:"White","Widget toolbar":"Widget toolbar",Width:"Width","Wrap text":"Wrap text",Yellow:"Yellow"})}(window.CKEDITOR_TRANSLATIONS||(window.CKEDITOR_TRANSLATIONS={})),
/*!
 * @license Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const i=function(t){const e=[];let n=0;for(let i=0;i<t.length;i++){let o=t.charCodeAt(i);o<128?e[n++]=o:o<2048?(e[n++]=o>>6|192,e[n++]=63&o|128):55296===(64512&o)&&i+1<t.length&&56320===(64512&t.charCodeAt(i+1))?(o=65536+((1023&o)<<10)+(1023&t.charCodeAt(++i)),e[n++]=o>>18|240,e[n++]=o>>12&63|128,e[n++]=o>>6&63|128,e[n++]=63&o|128):(e[n++]=o>>12|224,e[n++]=o>>6&63|128,e[n++]=63&o|128)}return e},o=function(t){const e=[];let n=0,i=0;while(n<t.length){const o=t[n++];if(o<128)e[i++]=String.fromCharCode(o);else if(o>191&&o<224){const r=t[n++];e[i++]=String.fromCharCode((31&o)<<6|63&r)}else if(o>239&&o<365){const r=t[n++],s=t[n++],a=t[n++],c=((7&o)<<18|(63&r)<<12|(63&s)<<6|63&a)-65536;e[i++]=String.fromCharCode(55296+(c>>10)),e[i++]=String.fromCharCode(56320+(1023&c))}else{const r=t[n++],s=t[n++];e[i++]=String.fromCharCode((15&o)<<12|(63&r)<<6|63&s)}}return e.join("")},r={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"===typeof atob,encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let o=0;o<t.length;o+=3){const e=t[o],r=o+1<t.length,s=r?t[o+1]:0,a=o+2<t.length,c=a?t[o+2]:0,l=e>>2,u=(3&e)<<4|s>>4;let d=(15&s)<<2|c>>6,h=63&c;a||(h=64,r||(d=64)),i.push(n[l],n[u],n[d],n[h])}return i.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(i(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):o(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let o=0;o<t.length;){const e=n[t.charAt(o++)],r=o<t.length,a=r?n[t.charAt(o)]:0;++o;const c=o<t.length,l=c?n[t.charAt(o)]:64;++o;const u=o<t.length,d=u?n[t.charAt(o)]:64;if(++o,null==e||null==a||null==l||null==d)throw new s;const h=e<<2|a>>4;if(i.push(h),64!==l){const t=a<<4&240|l>>2;if(i.push(t),64!==d){const t=l<<6&192|d;i.push(t)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const a=function(t){const e=i(t);return r.encodeByteArray(e,!0)},c=function(t){return a(t).replace(/\./g,"")},l=function(t){try{return r.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function u(){if("undefined"!==typeof self)return self;if("undefined"!==typeof window)return window;if("undefined"!==typeof n.g)return n.g;throw new Error("Unable to locate global object.")}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const d=()=>u().__FIREBASE_DEFAULTS__,h=()=>{if("undefined"===typeof process)return;const t={NODE_ENV:"production",BASE_URL:"/HypeDriven.github.io/"}.__FIREBASE_DEFAULTS__;return t?JSON.parse(t):void 0},p=()=>{if("undefined"===typeof document)return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(n){return}const e=t&&l(t[1]);return e&&JSON.parse(e)},f=()=>{try{return d()||h()||p()}catch(t){return void console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`)}},g=t=>{var e,n;return null===(n=null===(e=f())||void 0===e?void 0:e.emulatorHosts)||void 0===n?void 0:n[t]},m=t=>{const e=g(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const i=parseInt(e.substring(n+1),10);return"["===e[0]?[e.substring(1,n-1),i]:[e.substring(0,n),i]},k=()=>{var t;return null===(t=f())||void 0===t?void 0:t.config},b=t=>{var e;return null===(e=f())||void 0===e?void 0:e[`_${t}`]};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class w{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}wrapCallback(t){return(e,n)=>{e?this.reject(e):this.resolve(n),"function"===typeof t&&(this.promise.catch((()=>{})),1===t.length?t(e):t(e,n))}}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function v(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},i=e||"demo-project",o=t.iat||0,r=t.sub||t.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const s=Object.assign({iss:`https://securetoken.google.com/${i}`,aud:i,iat:o,exp:o+3600,auth_time:o,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[c(JSON.stringify(n)),c(JSON.stringify(s)),a].join(".")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _(){return"undefined"!==typeof navigator&&"string"===typeof navigator["userAgent"]?navigator["userAgent"]:""}function A(){return"undefined"!==typeof window&&!!(window["cordova"]||window["phonegap"]||window["PhoneGap"])&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(_())}function C(){const t="object"===typeof chrome?chrome.runtime:"object"===typeof browser?browser.runtime:void 0;return"object"===typeof t&&void 0!==t.id}function y(){return"object"===typeof navigator&&"ReactNative"===navigator["product"]}function E(){const t=_();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function x(){try{return"object"===typeof indexedDB}catch(t){return!1}}function I(){return new Promise(((t,e)=>{try{let n=!0;const i="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(i);o.onsuccess=()=>{o.result.close(),n||self.indexedDB.deleteDatabase(i),t(!0)},o.onupgradeneeded=()=>{n=!1},o.onerror=()=>{var t;e((null===(t=o.error)||void 0===t?void 0:t.message)||"")}}catch(n){e(n)}}))}function T(){return!("undefined"===typeof navigator||!navigator.cookieEnabled)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const D="FirebaseError";class S extends Error{constructor(t,e,n){super(e),this.code=t,this.customData=n,this.name=D,Object.setPrototypeOf(this,S.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,M.prototype.create)}}class M{constructor(t,e,n){this.service=t,this.serviceName=e,this.errors=n}create(t,...e){const n=e[0]||{},i=`${this.service}/${t}`,o=this.errors[t],r=o?N(o,n):"Error",s=`${this.serviceName}: ${r} (${i}).`,a=new S(i,s,n);return a}}function N(t,e){return t.replace(O,((t,n)=>{const i=e[n];return null!=i?String(i):`<${n}?>`}))}const O=/\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function P(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function B(t,e){if(t===e)return!0;const n=Object.keys(t),i=Object.keys(e);for(const o of n){if(!i.includes(o))return!1;const n=t[o],r=e[o];if(L(n)&&L(r)){if(!B(n,r))return!1}else if(n!==r)return!1}for(const o of i)if(!n.includes(o))return!1;return!0}function L(t){return null!==t&&"object"===typeof t}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function R(t){const e=[];for(const[n,i]of Object.entries(t))Array.isArray(i)?i.forEach((t=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(t))})):e.push(encodeURIComponent(n)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}function j(t){const e={},n=t.replace(/^\?/,"").split("&");return n.forEach((t=>{if(t){const[n,i]=t.split("=");e[decodeURIComponent(n)]=decodeURIComponent(i)}})),e}function z(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function F(t,e){const n=new V(t,e);return n.subscribe.bind(n)}class V{constructor(t,e){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=e,this.task.then((()=>{t(this)})).catch((t=>{this.error(t)}))}next(t){this.forEachObserver((e=>{e.next(t)}))}error(t){this.forEachObserver((e=>{e.error(t)})),this.close(t)}complete(){this.forEachObserver((t=>{t.complete()})),this.close()}subscribe(t,e,n){let i;if(void 0===t&&void 0===e&&void 0===n)throw new Error("Missing Observer.");i=U(t,["next","error","complete"])?t:{next:t,error:e,complete:n},void 0===i.next&&(i.next=H),void 0===i.error&&(i.error=H),void 0===i.complete&&(i.complete=H);const o=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch(t){}})),this.observers.push(i),o}unsubscribeOne(t){void 0!==this.observers&&void 0!==this.observers[t]&&(delete this.observers[t],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let e=0;e<this.observers.length;e++)this.sendOne(e,t)}sendOne(t,e){this.task.then((()=>{if(void 0!==this.observers&&void 0!==this.observers[t])try{e(this.observers[t])}catch(n){"undefined"!==typeof console&&console.error&&console.error(n)}}))}close(t){this.finalized||(this.finalized=!0,void 0!==t&&(this.finalError=t),this.task.then((()=>{this.observers=void 0,this.onNoObservers=void 0})))}}function U(t,e){if("object"!==typeof t||null===t)return!1;for(const n of e)if(n in t&&"function"===typeof t[n])return!0;return!1}function H(){}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const q=1e3,$=2,G=144e5,W=.5;function K(t,e=q,n=$){const i=e*Math.pow(n,t),o=Math.round(W*i*(Math.random()-.5)*2);return Math.min(G,i+o)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Z(t){return t&&t._delegate?t._delegate:t}},4870:function(t,e,n){"use strict";n.d(e,{Bj:function(){return r},qq:function(){return A},Fl:function(){return ie},ZM:function(){return Jt},cE:function(){return y},B:function(){return s},nZ:function(){return c},X3:function(){return Bt},PG:function(){return Nt},$y:function(){return Ot},dq:function(){return Ut},yT:function(){return Pt},Xl:function(){return Rt},EB:function(){return l},Jd:function(){return T},WL:function(){return Yt},qj:function(){return It},OT:function(){return Dt},iH:function(){return Ht},lk:function(){return D},Um:function(){return Tt},YS:function(){return St},XI:function(){return qt},sT:function(){return E},IU:function(){return Lt},Vh:function(){return ee},BK:function(){return Xt},j:function(){return S},X$:function(){return N},oR:function(){return Wt},SU:function(){return Kt}});var i=n(7139);let o;class r{constructor(t=!1){this.active=!0,this.effects=[],this.cleanups=[],!t&&o&&(this.parent=o,this.index=(o.scopes||(o.scopes=[])).push(this)-1)}run(t){if(this.active)try{return o=this,t()}finally{o=this.parent}else 0}on(){o=this}off(){o=this.parent}stop(t){if(this.active){let e,n;for(e=0,n=this.effects.length;e<n;e++)this.effects[e].stop();for(e=0,n=this.cleanups.length;e<n;e++)this.cleanups[e]();if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].stop(!0);if(this.parent&&!t){const t=this.parent.scopes.pop();t&&t!==this&&(this.parent.scopes[this.index]=t,t.index=this.index)}this.active=!1}}}function s(t){return new r(t)}function a(t,e=o){e&&e.active&&e.effects.push(t)}function c(){return o}function l(t){o&&o.cleanups.push(t)}const u=t=>{const e=new Set(t);return e.w=0,e.n=0,e},d=t=>(t.w&k)>0,h=t=>(t.n&k)>0,p=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=k},f=t=>{const{deps:e}=t;if(e.length){let n=0;for(let i=0;i<e.length;i++){const o=e[i];d(o)&&!h(o)?o.delete(t):e[n++]=o,o.w&=~k,o.n&=~k}e.length=n}},g=new WeakMap;let m=0,k=1;const b=30;let w;const v=Symbol(""),_=Symbol("");class A{constructor(t,e=null,n){this.fn=t,this.scheduler=e,this.active=!0,this.deps=[],this.parent=void 0,a(this,n)}run(){if(!this.active)return this.fn();let t=w,e=x;while(t){if(t===this)return;t=t.parent}try{return this.parent=w,w=this,x=!0,k=1<<++m,m<=b?p(this):C(this),this.fn()}finally{m<=b&&f(this),k=1<<--m,w=this.parent,x=e,this.parent=void 0}}stop(){this.active&&(C(this),this.onStop&&this.onStop(),this.active=!1)}}function C(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}function y(t,e){t.effect&&(t=t.effect.fn);const n=new A(t);e&&((0,i.l7)(n,e),e.scope&&a(n,e.scope)),e&&e.lazy||n.run();const o=n.run.bind(n);return o.effect=n,o}function E(t){t.effect.stop()}let x=!0;const I=[];function T(){I.push(x),x=!1}function D(){const t=I.pop();x=void 0===t||t}function S(t,e,n){if(x&&w){let e=g.get(t);e||g.set(t,e=new Map);let i=e.get(n);i||e.set(n,i=u());const o=void 0;M(i,o)}}function M(t,e){let n=!1;m<=b?h(t)||(t.n|=k,n=!d(t)):n=!t.has(w),n&&(t.add(w),w.deps.push(t))}function N(t,e,n,o,r,s){const a=g.get(t);if(!a)return;let c=[];if("clear"===e)c=[...a.values()];else if("length"===n&&(0,i.kJ)(t))a.forEach(((t,e)=>{("length"===e||e>=o)&&c.push(t)}));else switch(void 0!==n&&c.push(a.get(n)),e){case"add":(0,i.kJ)(t)?(0,i.S0)(n)&&c.push(a.get("length")):(c.push(a.get(v)),(0,i._N)(t)&&c.push(a.get(_)));break;case"delete":(0,i.kJ)(t)||(c.push(a.get(v)),(0,i._N)(t)&&c.push(a.get(_)));break;case"set":(0,i._N)(t)&&c.push(a.get(v));break}if(1===c.length)c[0]&&O(c[0]);else{const t=[];for(const e of c)e&&t.push(...e);O(u(t))}}function O(t,e){for(const n of(0,i.kJ)(t)?t:[...t])(n!==w||n.allowRecurse)&&(n.scheduler?n.scheduler():n.run())}const P=(0,i.fY)("__proto__,__v_isRef,__isVue"),B=new Set(Object.getOwnPropertyNames(Symbol).map((t=>Symbol[t])).filter(i.yk)),L=U(),R=U(!1,!0),j=U(!0),z=U(!0,!0),F=V();function V(){const t={};return["includes","indexOf","lastIndexOf"].forEach((e=>{t[e]=function(...t){const n=Lt(this);for(let e=0,o=this.length;e<o;e++)S(n,"get",e+"");const i=n[e](...t);return-1===i||!1===i?n[e](...t.map(Lt)):i}})),["push","pop","shift","unshift","splice"].forEach((e=>{t[e]=function(...t){T();const n=Lt(this)[e].apply(this,t);return D(),n}})),t}function U(t=!1,e=!1){return function(n,o,r){if("__v_isReactive"===o)return!t;if("__v_isReadonly"===o)return t;if("__v_isShallow"===o)return e;if("__v_raw"===o&&r===(t?e?yt:Ct:e?At:_t).get(n))return n;const s=(0,i.kJ)(n);if(!t&&s&&(0,i.RI)(F,o))return Reflect.get(F,o,r);const a=Reflect.get(n,o,r);if((0,i.yk)(o)?B.has(o):P(o))return a;if(t||S(n,"get",o),e)return a;if(Ut(a)){const t=!s||!(0,i.S0)(o);return t?a.value:a}return(0,i.Kn)(a)?t?Dt(a):It(a):a}}const H=$(),q=$(!0);function $(t=!1){return function(e,n,o,r){let s=e[n];if(Ot(s)&&Ut(s)&&!Ut(o))return!1;if(!t&&!Ot(o)&&(Pt(o)||(o=Lt(o),s=Lt(s)),!(0,i.kJ)(e)&&Ut(s)&&!Ut(o)))return s.value=o,!0;const a=(0,i.kJ)(e)&&(0,i.S0)(n)?Number(n)<e.length:(0,i.RI)(e,n),c=Reflect.set(e,n,o,r);return e===Lt(r)&&(a?(0,i.aU)(o,s)&&N(e,"set",n,o,s):N(e,"add",n,o)),c}}function G(t,e){const n=(0,i.RI)(t,e),o=t[e],r=Reflect.deleteProperty(t,e);return r&&n&&N(t,"delete",e,void 0,o),r}function W(t,e){const n=Reflect.has(t,e);return(0,i.yk)(e)&&B.has(e)||S(t,"has",e),n}function K(t){return S(t,"iterate",(0,i.kJ)(t)?"length":v),Reflect.ownKeys(t)}const Z={get:L,set:H,deleteProperty:G,has:W,ownKeys:K},Y={get:j,set(t,e){return!0},deleteProperty(t,e){return!0}},Q=(0,i.l7)({},Z,{get:R,set:q}),J=(0,i.l7)({},Y,{get:z}),X=t=>t,tt=t=>Reflect.getPrototypeOf(t);function et(t,e,n=!1,i=!1){t=t["__v_raw"];const o=Lt(t),r=Lt(e);e!==r&&!n&&S(o,"get",e),!n&&S(o,"get",r);const{has:s}=tt(o),a=i?X:n?zt:jt;return s.call(o,e)?a(t.get(e)):s.call(o,r)?a(t.get(r)):void(t!==o&&t.get(e))}function nt(t,e=!1){const n=this["__v_raw"],i=Lt(n),o=Lt(t);return t!==o&&!e&&S(i,"has",t),!e&&S(i,"has",o),t===o?n.has(t):n.has(t)||n.has(o)}function it(t,e=!1){return t=t["__v_raw"],!e&&S(Lt(t),"iterate",v),Reflect.get(t,"size",t)}function ot(t){t=Lt(t);const e=Lt(this),n=tt(e),i=n.has.call(e,t);return i||(e.add(t),N(e,"add",t,t)),this}function rt(t,e){e=Lt(e);const n=Lt(this),{has:o,get:r}=tt(n);let s=o.call(n,t);s||(t=Lt(t),s=o.call(n,t));const a=r.call(n,t);return n.set(t,e),s?(0,i.aU)(e,a)&&N(n,"set",t,e,a):N(n,"add",t,e),this}function st(t){const e=Lt(this),{has:n,get:i}=tt(e);let o=n.call(e,t);o||(t=Lt(t),o=n.call(e,t));const r=i?i.call(e,t):void 0,s=e.delete(t);return o&&N(e,"delete",t,void 0,r),s}function at(){const t=Lt(this),e=0!==t.size,n=void 0,i=t.clear();return e&&N(t,"clear",void 0,void 0,n),i}function ct(t,e){return function(n,i){const o=this,r=o["__v_raw"],s=Lt(r),a=e?X:t?zt:jt;return!t&&S(s,"iterate",v),r.forEach(((t,e)=>n.call(i,a(t),a(e),o)))}}function lt(t,e,n){return function(...o){const r=this["__v_raw"],s=Lt(r),a=(0,i._N)(s),c="entries"===t||t===Symbol.iterator&&a,l="keys"===t&&a,u=r[t](...o),d=n?X:e?zt:jt;return!e&&S(s,"iterate",l?_:v),{next(){const{value:t,done:e}=u.next();return e?{value:t,done:e}:{value:c?[d(t[0]),d(t[1])]:d(t),done:e}},[Symbol.iterator](){return this}}}}function ut(t){return function(...e){return"delete"!==t&&this}}function dt(){const t={get(t){return et(this,t)},get size(){return it(this)},has:nt,add:ot,set:rt,delete:st,clear:at,forEach:ct(!1,!1)},e={get(t){return et(this,t,!1,!0)},get size(){return it(this)},has:nt,add:ot,set:rt,delete:st,clear:at,forEach:ct(!1,!0)},n={get(t){return et(this,t,!0)},get size(){return it(this,!0)},has(t){return nt.call(this,t,!0)},add:ut("add"),set:ut("set"),delete:ut("delete"),clear:ut("clear"),forEach:ct(!0,!1)},i={get(t){return et(this,t,!0,!0)},get size(){return it(this,!0)},has(t){return nt.call(this,t,!0)},add:ut("add"),set:ut("set"),delete:ut("delete"),clear:ut("clear"),forEach:ct(!0,!0)},o=["keys","values","entries",Symbol.iterator];return o.forEach((o=>{t[o]=lt(o,!1,!1),n[o]=lt(o,!0,!1),e[o]=lt(o,!1,!0),i[o]=lt(o,!0,!0)})),[t,n,e,i]}const[ht,pt,ft,gt]=dt();function mt(t,e){const n=e?t?gt:ft:t?pt:ht;return(e,o,r)=>"__v_isReactive"===o?!t:"__v_isReadonly"===o?t:"__v_raw"===o?e:Reflect.get((0,i.RI)(n,o)&&o in e?n:e,o,r)}const kt={get:mt(!1,!1)},bt={get:mt(!1,!0)},wt={get:mt(!0,!1)},vt={get:mt(!0,!0)};const _t=new WeakMap,At=new WeakMap,Ct=new WeakMap,yt=new WeakMap;function Et(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function xt(t){return t["__v_skip"]||!Object.isExtensible(t)?0:Et((0,i.W7)(t))}function It(t){return Ot(t)?t:Mt(t,!1,Z,kt,_t)}function Tt(t){return Mt(t,!1,Q,bt,At)}function Dt(t){return Mt(t,!0,Y,wt,Ct)}function St(t){return Mt(t,!0,J,vt,yt)}function Mt(t,e,n,o,r){if(!(0,i.Kn)(t))return t;if(t["__v_raw"]&&(!e||!t["__v_isReactive"]))return t;const s=r.get(t);if(s)return s;const a=xt(t);if(0===a)return t;const c=new Proxy(t,2===a?o:n);return r.set(t,c),c}function Nt(t){return Ot(t)?Nt(t["__v_raw"]):!(!t||!t["__v_isReactive"])}function Ot(t){return!(!t||!t["__v_isReadonly"])}function Pt(t){return!(!t||!t["__v_isShallow"])}function Bt(t){return Nt(t)||Ot(t)}function Lt(t){const e=t&&t["__v_raw"];return e?Lt(e):t}function Rt(t){return(0,i.Nj)(t,"__v_skip",!0),t}const jt=t=>(0,i.Kn)(t)?It(t):t,zt=t=>(0,i.Kn)(t)?Dt(t):t;function Ft(t){x&&w&&(t=Lt(t),M(t.dep||(t.dep=u())))}function Vt(t,e){t=Lt(t),t.dep&&O(t.dep)}function Ut(t){return!(!t||!0!==t.__v_isRef)}function Ht(t){return $t(t,!1)}function qt(t){return $t(t,!0)}function $t(t,e){return Ut(t)?t:new Gt(t,e)}class Gt{constructor(t,e){this.__v_isShallow=e,this.dep=void 0,this.__v_isRef=!0,this._rawValue=e?t:Lt(t),this._value=e?t:jt(t)}get value(){return Ft(this),this._value}set value(t){t=this.__v_isShallow?t:Lt(t),(0,i.aU)(t,this._rawValue)&&(this._rawValue=t,this._value=this.__v_isShallow?t:jt(t),Vt(this,t))}}function Wt(t){Vt(t,void 0)}function Kt(t){return Ut(t)?t.value:t}const Zt={get:(t,e,n)=>Kt(Reflect.get(t,e,n)),set:(t,e,n,i)=>{const o=t[e];return Ut(o)&&!Ut(n)?(o.value=n,!0):Reflect.set(t,e,n,i)}};function Yt(t){return Nt(t)?t:new Proxy(t,Zt)}class Qt{constructor(t){this.dep=void 0,this.__v_isRef=!0;const{get:e,set:n}=t((()=>Ft(this)),(()=>Vt(this)));this._get=e,this._set=n}get value(){return this._get()}set value(t){this._set(t)}}function Jt(t){return new Qt(t)}function Xt(t){const e=(0,i.kJ)(t)?new Array(t.length):{};for(const n in t)e[n]=ee(t,n);return e}class te{constructor(t,e,n){this._object=t,this._key=e,this._defaultValue=n,this.__v_isRef=!0}get value(){const t=this._object[this._key];return void 0===t?this._defaultValue:t}set value(t){this._object[this._key]=t}}function ee(t,e,n){const i=t[e];return Ut(i)?i:new te(t,e,n)}class ne{constructor(t,e,n,i){this._setter=e,this.dep=void 0,this.__v_isRef=!0,this._dirty=!0,this.effect=new A(t,(()=>{this._dirty||(this._dirty=!0,Vt(this))})),this.effect.computed=this,this.effect.active=this._cacheable=!i,this["__v_isReadonly"]=n}get value(){const t=Lt(this);return Ft(t),!t._dirty&&t._cacheable||(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}function ie(t,e,n=!1){let o,r;const s=(0,i.mf)(t);s?(o=t,r=i.dG):(o=t.get,r=t.set);const a=new ne(o,r,s||!r,n);return a}Promise.resolve()},3396:function(t,e,n){"use strict";n.d(e,{Bj:function(){return i.Bj},qq:function(){return i.qq},ZM:function(){return i.ZM},cE:function(){return i.cE},B:function(){return i.B},nZ:function(){return i.nZ},X3:function(){return i.X3},PG:function(){return i.PG},$y:function(){return i.$y},dq:function(){return i.dq},yT:function(){return i.yT},Xl:function(){return i.Xl},EB:function(){return i.EB},WL:function(){return i.WL},qj:function(){return i.qj},OT:function(){return i.OT},iH:function(){return i.iH},Um:function(){return i.Um},YS:function(){return i.YS},XI:function(){return i.XI},sT:function(){return i.sT},IU:function(){return i.IU},Vh:function(){return i.Vh},BK:function(){return i.BK},oR:function(){return i.oR},SU:function(){return i.SU},_A:function(){return o._A},kC:function(){return o.kC},C_:function(){return o.C_},vs:function(){return o.vs},j5:function(){return o.j5},zw:function(){return o.zw},hR:function(){return o.hR},P$:function(){return Pt},sv:function(){return xn},HY:function(){return yn},Ob:function(){return Wt},qG:function(){return In},n4:function(){return ut},lR:function(){return gn},xv:function(){return En},$d:function(){return p},KU:function(){return h},Ho:function(){return Kn},ry:function(){return oo},Fl:function(){return Ri},j4:function(){return Rn},kq:function(){return Qn},iD:function(){return Ln},_:function(){return qn},Eo:function(){return nn},p1:function(){return Gi},Us:function(){return en},Nv:function(){return oi},uE:function(){return Yn},Uk:function(){return Zn},Wm:function(){return $n},RC:function(){return Ht},aZ:function(){return Vt},Bz:function(){return zi},WY:function(){return Fi},MW:function(){return ji},mW:function(){return V},FN:function(){return mi},Q6:function(){return Ft},F4:function(){return Wn},h:function(){return Ki},S3:function(){return f},Mr:function(){return Qi},f3:function(){return _t},nQ:function(){return Xi},of:function(){return Ii},lA:function(){return jn},u_:function(){return $i},dG:function(){return ei},Y3:function(){return D},dl:function(){return Zt},wF:function(){return ie},Jd:function(){return ae},Xn:function(){return re},se:function(){return Yt},d1:function(){return he},bv:function(){return oe},bT:function(){return de},Yq:function(){return ue},vl:function(){return le},Ah:function(){return ce},ic:function(){return se},wg:function(){return Sn},Cn:function(){return J},JJ:function(){return vt},dD:function(){return Q},qb:function(){return L},Y1:function(){return xi},Ko:function(){return ii},WI:function(){return ri},up:function(){return bn},Q2:function(){return _n},LL:function(){return vn},eq:function(){return io},U2:function(){return Lt},qZ:function(){return Pn},ec:function(){return q},nK:function(){return zt},Uc:function(){return Zi},G:function(){return no},mx:function(){return ai},C3:function(){return Fn},l1:function(){return Hi},Zq:function(){return Yi},Rr:function(){return Ui},Y8:function(){return Mt},i8:function(){return to},ZK:function(){return s},YP:function(){return xt},m0:function(){return At},Rh:function(){return Ct},yX:function(){return yt},mv:function(){return Wi},w5:function(){return tt},b9:function(){return Vi},wy:function(){return He},MX:function(){return Ji},HX:function(){return X}});n(1703);var i=n(4870),o=n(7139);const r=[];function s(t,...e){(0,i.Jd)();const n=r.length?r[r.length-1].component:null,o=n&&n.appContext.config.warnHandler,s=a();if(o)h(o,n,11,[t+e.join(""),n&&n.proxy,s.map((({vnode:t})=>`at <${Bi(n,t.type)}>`)).join("\n"),s]);else{const n=[`[Vue warn]: ${t}`,...e];s.length&&n.push("\n",...c(s)),console.warn(...n)}(0,i.lk)()}function a(){let t=r[r.length-1];if(!t)return[];const e=[];while(t){const n=e[0];n&&n.vnode===t?n.recurseCount++:e.push({vnode:t,recurseCount:0});const i=t.component&&t.component.parent;t=i&&i.vnode}return e}function c(t){const e=[];return t.forEach(((t,n)=>{e.push(...0===n?[]:["\n"],...l(t))})),e}function l({vnode:t,recurseCount:e}){const n=e>0?`... (${e} recursive calls)`:"",i=!!t.component&&null==t.component.parent,o=` at <${Bi(t.component,t.type,i)}`,r=">"+n;return t.props?[o,...u(t.props),r]:[o+r]}function u(t){const e=[],n=Object.keys(t);return n.slice(0,3).forEach((n=>{e.push(...d(n,t[n]))})),n.length>3&&e.push(" ..."),e}function d(t,e,n){return(0,o.HD)(e)?(e=JSON.stringify(e),n?e:[`${t}=${e}`]):"number"===typeof e||"boolean"===typeof e||null==e?n?e:[`${t}=${e}`]:(0,i.dq)(e)?(e=d(t,(0,i.IU)(e.value),!0),n?e:[`${t}=Ref<`,e,">"]):(0,o.mf)(e)?[`${t}=fn${e.name?`<${e.name}>`:""}`]:(e=(0,i.IU)(e),n?e:[`${t}=`,e])}function h(t,e,n,i){let o;try{o=i?t(...i):t()}catch(r){f(r,e,n)}return o}function p(t,e,n,i){if((0,o.mf)(t)){const r=h(t,e,n,i);return r&&(0,o.tI)(r)&&r.catch((t=>{f(t,e,n)})),r}const r=[];for(let o=0;o<t.length;o++)r.push(p(t[o],e,n,i));return r}function f(t,e,n,i=!0){const o=e?e.vnode:null;if(e){let i=e.parent;const o=e.proxy,r=n;while(i){const e=i.ec;if(e)for(let n=0;n<e.length;n++)if(!1===e[n](t,o,r))return;i=i.parent}const s=e.appContext.config.errorHandler;if(s)return void h(s,null,10,[t,o,r])}g(t,n,o,i)}function g(t,e,n,i=!0){console.error(t)}let m=!1,k=!1;const b=[];let w=0;const v=[];let _=null,A=0;const C=[];let y=null,E=0;const x=Promise.resolve();let I=null,T=null;function D(t){const e=I||x;return t?e.then(this?t.bind(this):t):e}function S(t){let e=w+1,n=b.length;while(e<n){const i=e+n>>>1,o=z(b[i]);o<t?e=i+1:n=i}return e}function M(t){b.length&&b.includes(t,m&&t.allowRecurse?w+1:w)||t===T||(null==t.id?b.push(t):b.splice(S(t.id),0,t),N())}function N(){m||k||(k=!0,I=x.then(F))}function O(t){const e=b.indexOf(t);e>w&&b.splice(e,1)}function P(t,e,n,i){(0,o.kJ)(t)?n.push(...t):e&&e.includes(t,t.allowRecurse?i+1:i)||n.push(t),N()}function B(t){P(t,_,v,A)}function L(t){P(t,y,C,E)}function R(t,e=null){if(v.length){for(T=e,_=[...new Set(v)],v.length=0,A=0;A<_.length;A++)_[A]();_=null,A=0,T=null,R(t,e)}}function j(t){if(C.length){const t=[...new Set(C)];if(C.length=0,y)return void y.push(...t);for(y=t,y.sort(((t,e)=>z(t)-z(e))),E=0;E<y.length;E++)y[E]();y=null,E=0}}const z=t=>null==t.id?1/0:t.id;function F(t){k=!1,m=!0,R(t),b.sort(((t,e)=>z(t)-z(e)));o.dG;try{for(w=0;w<b.length;w++){const t=b[w];t&&!1!==t.active&&h(t,null,14)}}finally{w=0,b.length=0,j(t),m=!1,I=null,(b.length||v.length||C.length)&&F(t)}}new Set;new Map;let V,U=[],H=!1;function q(t,e){var n,i;if(V=t,V)V.enabled=!0,U.forEach((({event:t,args:e})=>V.emit(t,...e))),U=[];else if("undefined"!==typeof window&&window.HTMLElement&&!(null===(i=null===(n=window.navigator)||void 0===n?void 0:n.userAgent)||void 0===i?void 0:i.includes("jsdom"))){const t=e.__VUE_DEVTOOLS_HOOK_REPLAY__=e.__VUE_DEVTOOLS_HOOK_REPLAY__||[];t.push((t=>{q(t,e)})),setTimeout((()=>{V||(e.__VUE_DEVTOOLS_HOOK_REPLAY__=null,H=!0,U=[])}),3e3)}else H=!0,U=[]}function $(t,e,...n){const i=t.vnode.props||o.kT;let r=n;const s=e.startsWith("update:"),a=s&&e.slice(7);if(a&&a in i){const t=`${"modelValue"===a?"model":a}Modifiers`,{number:e,trim:s}=i[t]||o.kT;s?r=n.map((t=>t.trim())):e&&(r=n.map(o.He))}let c;let l=i[c=(0,o.hR)(e)]||i[c=(0,o.hR)((0,o._A)(e))];!l&&s&&(l=i[c=(0,o.hR)((0,o.rs)(e))]),l&&p(l,t,6,r);const u=i[c+"Once"];if(u){if(t.emitted){if(t.emitted[c])return}else t.emitted={};t.emitted[c]=!0,p(u,t,6,r)}}function G(t,e,n=!1){const i=e.emitsCache,r=i.get(t);if(void 0!==r)return r;const s=t.emits;let a={},c=!1;if(!(0,o.mf)(t)){const i=t=>{const n=G(t,e,!0);n&&(c=!0,(0,o.l7)(a,n))};!n&&e.mixins.length&&e.mixins.forEach(i),t.extends&&i(t.extends),t.mixins&&t.mixins.forEach(i)}return s||c?((0,o.kJ)(s)?s.forEach((t=>a[t]=null)):(0,o.l7)(a,s),i.set(t,a),a):(i.set(t,null),null)}function W(t,e){return!(!t||!(0,o.F7)(e))&&(e=e.slice(2).replace(/Once$/,""),(0,o.RI)(t,e[0].toLowerCase()+e.slice(1))||(0,o.RI)(t,(0,o.rs)(e))||(0,o.RI)(t,e))}let K=null,Z=null;function Y(t){const e=K;return K=t,Z=t&&t.type.__scopeId||null,e}function Q(t){Z=t}function J(){Z=null}const X=t=>tt;function tt(t,e=K,n){if(!e)return t;if(t._n)return t;const i=(...n)=>{i._d&&Pn(-1);const o=Y(e),r=t(...n);return Y(o),i._d&&Pn(1),r};return i._n=!0,i._c=!0,i._d=!0,i}function et(t){const{type:e,vnode:n,proxy:i,withProxy:r,props:s,propsOptions:[a],slots:c,attrs:l,emit:u,render:d,renderCache:h,data:p,setupState:g,ctx:m,inheritAttrs:k}=t;let b,w;const v=Y(t);try{if(4&n.shapeFlag){const t=r||i;b=Jn(d.call(t,t,h,s,g,p,m)),w=l}else{const t=e;0,b=Jn(t.length>1?t(s,{attrs:l,slots:c,emit:u}):t(s,null)),w=e.props?l:it(l)}}catch(A){Tn.length=0,f(A,t,1),b=$n(xn)}let _=b;if(w&&!1!==k){const t=Object.keys(w),{shapeFlag:e}=_;t.length&&7&e&&(a&&t.some(o.tR)&&(w=ot(w,a)),_=Kn(_,w))}return n.dirs&&(_.dirs=_.dirs?_.dirs.concat(n.dirs):n.dirs),n.transition&&(_.transition=n.transition),b=_,Y(v),b}function nt(t){let e;for(let n=0;n<t.length;n++){const i=t[n];if(!jn(i))return;if(i.type!==xn||"v-if"===i.children){if(e)return;e=i}}return e}const it=t=>{let e;for(const n in t)("class"===n||"style"===n||(0,o.F7)(n))&&((e||(e={}))[n]=t[n]);return e},ot=(t,e)=>{const n={};for(const i in t)(0,o.tR)(i)&&i.slice(9)in e||(n[i]=t[i]);return n};function rt(t,e,n){const{props:i,children:o,component:r}=t,{props:s,children:a,patchFlag:c}=e,l=r.emitsOptions;if(e.dirs||e.transition)return!0;if(!(n&&c>=0))return!(!o&&!a||a&&a.$stable)||i!==s&&(i?!s||st(i,s,l):!!s);if(1024&c)return!0;if(16&c)return i?st(i,s,l):!!s;if(8&c){const t=e.dynamicProps;for(let e=0;e<t.length;e++){const n=t[e];if(s[n]!==i[n]&&!W(l,n))return!0}}return!1}function st(t,e,n){const i=Object.keys(e);if(i.length!==Object.keys(t).length)return!0;for(let o=0;o<i.length;o++){const r=i[o];if(e[r]!==t[r]&&!W(n,r))return!0}return!1}function at({vnode:t,parent:e},n){while(e&&e.subTree===t)(t=e.vnode).el=n,e=e.parent}const ct=t=>t.__isSuspense,lt={name:"Suspense",__isSuspense:!0,process(t,e,n,i,o,r,s,a,c,l){null==t?ht(e,n,i,o,r,s,a,c,l):pt(t,e,n,i,o,s,a,c,l)},hydrate:gt,create:ft,normalize:mt},ut=lt;function dt(t,e){const n=t.props&&t.props[e];(0,o.mf)(n)&&n()}function ht(t,e,n,i,o,r,s,a,c){const{p:l,o:{createElement:u}}=c,d=u("div"),h=t.suspense=ft(t,o,i,e,d,n,r,s,a,c);l(null,h.pendingBranch=t.ssContent,d,null,i,h,r,s),h.deps>0?(dt(t,"onPending"),dt(t,"onFallback"),l(null,t.ssFallback,e,n,i,null,r,s),wt(h,t.ssFallback)):h.resolve()}function pt(t,e,n,i,o,r,s,a,{p:c,um:l,o:{createElement:u}}){const d=e.suspense=t.suspense;d.vnode=e,e.el=t.el;const h=e.ssContent,p=e.ssFallback,{activeBranch:f,pendingBranch:g,isInFallback:m,isHydrating:k}=d;if(g)d.pendingBranch=h,zn(h,g)?(c(g,h,d.hiddenContainer,null,o,d,r,s,a),d.deps<=0?d.resolve():m&&(c(f,p,n,i,o,null,r,s,a),wt(d,p))):(d.pendingId++,k?(d.isHydrating=!1,d.activeBranch=g):l(g,o,d),d.deps=0,d.effects.length=0,d.hiddenContainer=u("div"),m?(c(null,h,d.hiddenContainer,null,o,d,r,s,a),d.deps<=0?d.resolve():(c(f,p,n,i,o,null,r,s,a),wt(d,p))):f&&zn(h,f)?(c(f,h,n,i,o,d,r,s,a),d.resolve(!0)):(c(null,h,d.hiddenContainer,null,o,d,r,s,a),d.deps<=0&&d.resolve()));else if(f&&zn(h,f))c(f,h,n,i,o,d,r,s,a),wt(d,h);else if(dt(e,"onPending"),d.pendingBranch=h,d.pendingId++,c(null,h,d.hiddenContainer,null,o,d,r,s,a),d.deps<=0)d.resolve();else{const{timeout:t,pendingId:e}=d;t>0?setTimeout((()=>{d.pendingId===e&&d.fallback(p)}),t):0===t&&d.fallback(p)}}function ft(t,e,n,i,r,s,a,c,l,u,d=!1){const{p:h,m:p,um:g,n:m,o:{parentNode:k,remove:b}}=u,w=(0,o.He)(t.props&&t.props.timeout),v={vnode:t,parent:e,parentComponent:n,isSVG:a,container:i,hiddenContainer:r,anchor:s,deps:0,pendingId:0,timeout:"number"===typeof w?w:-1,activeBranch:null,pendingBranch:null,isInFallback:!0,isHydrating:d,isUnmounted:!1,effects:[],resolve(t=!1){const{vnode:e,activeBranch:n,pendingBranch:i,pendingId:o,effects:r,parentComponent:s,container:a}=v;if(v.isHydrating)v.isHydrating=!1;else if(!t){const t=n&&i.transition&&"out-in"===i.transition.mode;t&&(n.transition.afterLeave=()=>{o===v.pendingId&&p(i,a,e,0)});let{anchor:e}=v;n&&(e=m(n),g(n,s,v,!0)),t||p(i,a,e,0)}wt(v,i),v.pendingBranch=null,v.isInFallback=!1;let c=v.parent,l=!1;while(c){if(c.pendingBranch){c.effects.push(...r),l=!0;break}c=c.parent}l||L(r),v.effects=[],dt(e,"onResolve")},fallback(t){if(!v.pendingBranch)return;const{vnode:e,activeBranch:n,parentComponent:i,container:o,isSVG:r}=v;dt(e,"onFallback");const s=m(n),a=()=>{v.isInFallback&&(h(null,t,o,s,i,null,r,c,l),wt(v,t))},u=t.transition&&"out-in"===t.transition.mode;u&&(n.transition.afterLeave=a),v.isInFallback=!0,g(n,i,null,!0),u||a()},move(t,e,n){v.activeBranch&&p(v.activeBranch,t,e,n),v.container=t},next(){return v.activeBranch&&m(v.activeBranch)},registerDep(t,e){const n=!!v.pendingBranch;n&&v.deps++;const i=t.vnode.el;t.asyncDep.catch((e=>{f(e,t,0)})).then((o=>{if(t.isUnmounted||v.isUnmounted||v.pendingId!==t.suspenseId)return;t.asyncResolved=!0;const{vnode:r}=t;Ei(t,o,!1),i&&(r.el=i);const s=!i&&t.subTree.el;e(t,r,k(i||t.subTree.el),i?null:m(t.subTree),v,a,l),s&&b(s),at(t,r.el),n&&0===--v.deps&&v.resolve()}))},unmount(t,e){v.isUnmounted=!0,v.activeBranch&&g(v.activeBranch,n,t,e),v.pendingBranch&&g(v.pendingBranch,n,t,e)}};return v}function gt(t,e,n,i,o,r,s,a,c){const l=e.suspense=ft(e,i,n,t.parentNode,document.createElement("div"),null,o,r,s,a,!0),u=c(t,l.pendingBranch=e.ssContent,n,l,r,s);return 0===l.deps&&l.resolve(),u}function mt(t){const{shapeFlag:e,children:n}=t,i=32&e;t.ssContent=kt(i?n.default:n),t.ssFallback=i?kt(n.fallback):$n(xn)}function kt(t){let e;if((0,o.mf)(t)){const n=On&&t._c;n&&(t._d=!1,Sn()),t=t(),n&&(t._d=!0,e=Dn,Mn())}if((0,o.kJ)(t)){const e=nt(t);0,t=e}return t=Jn(t),e&&!t.dynamicChildren&&(t.dynamicChildren=e.filter((e=>e!==t))),t}function bt(t,e){e&&e.pendingBranch?(0,o.kJ)(t)?e.effects.push(...t):e.effects.push(t):L(t)}function wt(t,e){t.activeBranch=e;const{vnode:n,parentComponent:i}=t,o=n.el=e.el;i&&i.subTree===n&&(i.vnode.el=o,at(i,o))}function vt(t,e){if(gi){let n=gi.provides;const i=gi.parent&&gi.parent.provides;i===n&&(n=gi.provides=Object.create(i)),n[t]=e}else 0}function _t(t,e,n=!1){const i=gi||K;if(i){const r=null==i.parent?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides;if(r&&t in r)return r[t];if(arguments.length>1)return n&&(0,o.mf)(e)?e.call(i.proxy):e}else 0}function At(t,e){return It(t,null,e)}function Ct(t,e){return It(t,null,{flush:"post"})}function yt(t,e){return It(t,null,{flush:"sync"})}const Et={};function xt(t,e,n){return It(t,e,n)}function It(t,e,{immediate:n,deep:r,flush:s,onTrack:a,onTrigger:c}=o.kT){const l=gi;let u,d,f=!1,g=!1;if((0,i.dq)(t)?(u=()=>t.value,f=(0,i.yT)(t)):(0,i.PG)(t)?(u=()=>t,r=!0):(0,o.kJ)(t)?(g=!0,f=t.some(i.PG),u=()=>t.map((t=>(0,i.dq)(t)?t.value:(0,i.PG)(t)?St(t):(0,o.mf)(t)?h(t,l,2):void 0))):u=(0,o.mf)(t)?e?()=>h(t,l,2):()=>{if(!l||!l.isUnmounted)return d&&d(),p(t,l,3,[m])}:o.dG,e&&r){const t=u;u=()=>St(t())}let m=t=>{d=v.onStop=()=>{h(t,l,4)}};if(Ai)return m=o.dG,e?n&&p(e,l,3,[u(),g?[]:void 0,m]):u(),o.dG;let k=g?[]:Et;const b=()=>{if(v.active)if(e){const t=v.run();(r||f||(g?t.some(((t,e)=>(0,o.aU)(t,k[e]))):(0,o.aU)(t,k)))&&(d&&d(),p(e,l,3,[t,k===Et?void 0:k,m]),k=t)}else v.run()};let w;b.allowRecurse=!!e,w="sync"===s?b:"post"===s?()=>tn(b,l&&l.suspense):()=>{!l||l.isMounted?B(b):b()};const v=new i.qq(u,w);return e?n?b():k=v.run():"post"===s?tn(v.run.bind(v),l&&l.suspense):v.run(),()=>{v.stop(),l&&l.scope&&(0,o.Od)(l.scope.effects,v)}}function Tt(t,e,n){const i=this.proxy,r=(0,o.HD)(t)?t.includes(".")?Dt(i,t):()=>i[t]:t.bind(i,i);let s;(0,o.mf)(e)?s=e:(s=e.handler,n=e);const a=gi;ki(this);const c=It(r,s.bind(i),n);return a?ki(a):bi(),c}function Dt(t,e){const n=e.split(".");return()=>{let e=t;for(let t=0;t<n.length&&e;t++)e=e[n[t]];return e}}function St(t,e){if(!(0,o.Kn)(t)||t["__v_skip"])return t;if(e=e||new Set,e.has(t))return t;if(e.add(t),(0,i.dq)(t))St(t.value,e);else if((0,o.kJ)(t))for(let n=0;n<t.length;n++)St(t[n],e);else if((0,o.DM)(t)||(0,o._N)(t))t.forEach((t=>{St(t,e)}));else if((0,o.PO)(t))for(const n in t)St(t[n],e);return t}function Mt(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return oe((()=>{t.isMounted=!0})),ae((()=>{t.isUnmounting=!0})),t}const Nt=[Function,Array],Ot={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Nt,onEnter:Nt,onAfterEnter:Nt,onEnterCancelled:Nt,onBeforeLeave:Nt,onLeave:Nt,onAfterLeave:Nt,onLeaveCancelled:Nt,onBeforeAppear:Nt,onAppear:Nt,onAfterAppear:Nt,onAppearCancelled:Nt},setup(t,{slots:e}){const n=mi(),o=Mt();let r;return()=>{const s=e.default&&Ft(e.default(),!0);if(!s||!s.length)return;const a=(0,i.IU)(t),{mode:c}=a;const l=s[0];if(o.isLeaving)return Rt(l);const u=jt(l);if(!u)return Rt(l);const d=Lt(u,a,o,n);zt(u,d);const h=n.subTree,p=h&&jt(h);let f=!1;const{getTransitionKey:g}=u.type;if(g){const t=g();void 0===r?r=t:t!==r&&(r=t,f=!0)}if(p&&p.type!==xn&&(!zn(u,p)||f)){const t=Lt(p,a,o,n);if(zt(p,t),"out-in"===c)return o.isLeaving=!0,t.afterLeave=()=>{o.isLeaving=!1,n.update()},Rt(l);"in-out"===c&&u.type!==xn&&(t.delayLeave=(t,e,n)=>{const i=Bt(o,p);i[String(p.key)]=p,t._leaveCb=()=>{e(),t._leaveCb=void 0,delete d.delayedLeave},d.delayedLeave=n})}return l}}},Pt=Ot;function Bt(t,e){const{leavingVNodes:n}=t;let i=n.get(e.type);return i||(i=Object.create(null),n.set(e.type,i)),i}function Lt(t,e,n,i){const{appear:o,mode:r,persisted:s=!1,onBeforeEnter:a,onEnter:c,onAfterEnter:l,onEnterCancelled:u,onBeforeLeave:d,onLeave:h,onAfterLeave:f,onLeaveCancelled:g,onBeforeAppear:m,onAppear:k,onAfterAppear:b,onAppearCancelled:w}=e,v=String(t.key),_=Bt(n,t),A=(t,e)=>{t&&p(t,i,9,e)},C={mode:r,persisted:s,beforeEnter(e){let i=a;if(!n.isMounted){if(!o)return;i=m||a}e._leaveCb&&e._leaveCb(!0);const r=_[v];r&&zn(t,r)&&r.el._leaveCb&&r.el._leaveCb(),A(i,[e])},enter(t){let e=c,i=l,r=u;if(!n.isMounted){if(!o)return;e=k||c,i=b||l,r=w||u}let s=!1;const a=t._enterCb=e=>{s||(s=!0,A(e?r:i,[t]),C.delayedLeave&&C.delayedLeave(),t._enterCb=void 0)};e?(e(t,a),e.length<=1&&a()):a()},leave(e,i){const o=String(t.key);if(e._enterCb&&e._enterCb(!0),n.isUnmounting)return i();A(d,[e]);let r=!1;const s=e._leaveCb=n=>{r||(r=!0,i(),A(n?g:f,[e]),e._leaveCb=void 0,_[o]===t&&delete _[o])};_[o]=t,h?(h(e,s),h.length<=1&&s()):s()},clone(t){return Lt(t,e,n,i)}};return C}function Rt(t){if($t(t))return t=Kn(t),t.children=null,t}function jt(t){return $t(t)?t.children?t.children[0]:void 0:t}function zt(t,e){6&t.shapeFlag&&t.component?zt(t.component.subTree,e):128&t.shapeFlag?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function Ft(t,e=!1){let n=[],i=0;for(let o=0;o<t.length;o++){const r=t[o];r.type===yn?(128&r.patchFlag&&i++,n=n.concat(Ft(r.children,e))):(e||r.type!==xn)&&n.push(r)}if(i>1)for(let o=0;o<n.length;o++)n[o].patchFlag=-2;return n}function Vt(t){return(0,o.mf)(t)?{setup:t,name:t.name}:t}const Ut=t=>!!t.type.__asyncLoader;function Ht(t){(0,o.mf)(t)&&(t={loader:t});const{loader:e,loadingComponent:n,errorComponent:r,delay:s=200,timeout:a,suspensible:c=!0,onError:l}=t;let u,d=null,h=0;const p=()=>(h++,d=null,g()),g=()=>{let t;return d||(t=d=e().catch((t=>{if(t=t instanceof Error?t:new Error(String(t)),l)return new Promise(((e,n)=>{const i=()=>e(p()),o=()=>n(t);l(t,i,o,h+1)}));throw t})).then((e=>t!==d&&d?d:(e&&(e.__esModule||"Module"===e[Symbol.toStringTag])&&(e=e.default),u=e,e))))};return Vt({name:"AsyncComponentWrapper",__asyncLoader:g,get __asyncResolved(){return u},setup(){const t=gi;if(u)return()=>qt(u,t);const e=e=>{d=null,f(e,t,13,!r)};if(c&&t.suspense||Ai)return g().then((e=>()=>qt(e,t))).catch((t=>(e(t),()=>r?$n(r,{error:t}):null)));const o=(0,i.iH)(!1),l=(0,i.iH)(),h=(0,i.iH)(!!s);return s&&setTimeout((()=>{h.value=!1}),s),null!=a&&setTimeout((()=>{if(!o.value&&!l.value){const t=new Error(`Async component timed out after ${a}ms.`);e(t),l.value=t}}),a),g().then((()=>{o.value=!0,t.parent&&$t(t.parent.vnode)&&M(t.parent.update)})).catch((t=>{e(t),l.value=t})),()=>o.value&&u?qt(u,t):l.value&&r?$n(r,{error:l.value}):n&&!h.value?$n(n):void 0}})}function qt(t,{vnode:{ref:e,props:n,children:i}}){const o=$n(t,n,i);return o.ref=e,o}const $t=t=>t.type.__isKeepAlive,Gt={name:"KeepAlive",__isKeepAlive:!0,props:{include:[String,RegExp,Array],exclude:[String,RegExp,Array],max:[String,Number]},setup(t,{slots:e}){const n=mi(),i=n.ctx;if(!i.renderer)return e.default;const r=new Map,s=new Set;let a=null;const c=n.suspense,{renderer:{p:l,m:u,um:d,o:{createElement:h}}}=i,p=h("div");function f(t){Xt(t),d(t,n,c,!0)}function g(t){r.forEach(((e,n)=>{const i=Pi(e.type);!i||t&&t(i)||m(n)}))}function m(t){const e=r.get(t);a&&e.type===a.type?a&&Xt(a):f(e),r.delete(t),s.delete(t)}i.activate=(t,e,n,i,r)=>{const s=t.component;u(t,e,n,0,c),l(s.vnode,t,e,n,s,c,i,t.slotScopeIds,r),tn((()=>{s.isDeactivated=!1,s.a&&(0,o.ir)(s.a);const e=t.props&&t.props.onVnodeMounted;e&&ni(e,s.parent,t)}),c)},i.deactivate=t=>{const e=t.component;u(t,p,null,1,c),tn((()=>{e.da&&(0,o.ir)(e.da);const n=t.props&&t.props.onVnodeUnmounted;n&&ni(n,e.parent,t),e.isDeactivated=!0}),c)},xt((()=>[t.include,t.exclude]),(([t,e])=>{t&&g((e=>Kt(t,e))),e&&g((t=>!Kt(e,t)))}),{flush:"post",deep:!0});let k=null;const b=()=>{null!=k&&r.set(k,te(n.subTree))};return oe(b),se(b),ae((()=>{r.forEach((t=>{const{subTree:e,suspense:i}=n,o=te(e);if(t.type!==o.type)f(t);else{Xt(o);const t=o.component.da;t&&tn(t,i)}}))})),()=>{if(k=null,!e.default)return null;const n=e.default(),i=n[0];if(n.length>1)return a=null,n;if(!jn(i)||!(4&i.shapeFlag)&&!(128&i.shapeFlag))return a=null,i;let o=te(i);const c=o.type,l=Pi(Ut(o)?o.type.__asyncResolved||{}:c),{include:u,exclude:d,max:h}=t;if(u&&(!l||!Kt(u,l))||d&&l&&Kt(d,l))return a=o,i;const p=null==o.key?c:o.key,f=r.get(p);return o.el&&(o=Kn(o),128&i.shapeFlag&&(i.ssContent=o)),k=p,f?(o.el=f.el,o.component=f.component,o.transition&&zt(o,o.transition),o.shapeFlag|=512,s.delete(p),s.add(p)):(s.add(p),h&&s.size>parseInt(h,10)&&m(s.values().next().value)),o.shapeFlag|=256,a=o,i}}},Wt=Gt;function Kt(t,e){return(0,o.kJ)(t)?t.some((t=>Kt(t,e))):(0,o.HD)(t)?t.split(",").includes(e):!!t.test&&t.test(e)}function Zt(t,e){Qt(t,"a",e)}function Yt(t,e){Qt(t,"da",e)}function Qt(t,e,n=gi){const i=t.__wdc||(t.__wdc=()=>{let e=n;while(e){if(e.isDeactivated)return;e=e.parent}return t()});if(ee(e,i,n),n){let t=n.parent;while(t&&t.parent)$t(t.parent.vnode)&&Jt(i,e,n,t),t=t.parent}}function Jt(t,e,n,i){const r=ee(e,t,i,!0);ce((()=>{(0,o.Od)(i[e],r)}),n)}function Xt(t){let e=t.shapeFlag;256&e&&(e-=256),512&e&&(e-=512),t.shapeFlag=e}function te(t){return 128&t.shapeFlag?t.ssContent:t}function ee(t,e,n=gi,o=!1){if(n){const r=n[t]||(n[t]=[]),s=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;(0,i.Jd)(),ki(n);const r=p(e,n,t,o);return bi(),(0,i.lk)(),r});return o?r.unshift(s):r.push(s),s}}const ne=t=>(e,n=gi)=>(!Ai||"sp"===t)&&ee(t,e,n),ie=ne("bm"),oe=ne("m"),re=ne("bu"),se=ne("u"),ae=ne("bum"),ce=ne("um"),le=ne("sp"),ue=ne("rtg"),de=ne("rtc");function he(t,e=gi){ee("ec",t,e)}let pe=!0;function fe(t){const e=be(t),n=t.proxy,r=t.ctx;pe=!1,e.beforeCreate&&me(e.beforeCreate,t,"bc");const{data:s,computed:a,methods:c,watch:l,provide:u,inject:d,created:h,beforeMount:p,mounted:f,beforeUpdate:g,updated:m,activated:k,deactivated:b,beforeDestroy:w,beforeUnmount:v,destroyed:_,unmounted:A,render:C,renderTracked:y,renderTriggered:E,errorCaptured:x,serverPrefetch:I,expose:T,inheritAttrs:D,components:S,directives:M,filters:N}=e,O=null;if(d&&ge(d,r,O,t.appContext.config.unwrapInjectedRef),c)for(const i in c){const t=c[i];(0,o.mf)(t)&&(r[i]=t.bind(n))}if(s){0;const e=s.call(n,n);0,(0,o.Kn)(e)&&(t.data=(0,i.qj)(e))}if(pe=!0,a)for(const i in a){const t=a[i],e=(0,o.mf)(t)?t.bind(n,n):(0,o.mf)(t.get)?t.get.bind(n,n):o.dG;0;const s=!(0,o.mf)(t)&&(0,o.mf)(t.set)?t.set.bind(n):o.dG,c=Ri({get:e,set:s});Object.defineProperty(r,i,{enumerable:!0,configurable:!0,get:()=>c.value,set:t=>c.value=t})}if(l)for(const i in l)ke(l[i],r,n,i);if(u){const t=(0,o.mf)(u)?u.call(n):u;Reflect.ownKeys(t).forEach((e=>{vt(e,t[e])}))}function P(t,e){(0,o.kJ)(e)?e.forEach((e=>t(e.bind(n)))):e&&t(e.bind(n))}if(h&&me(h,t,"c"),P(ie,p),P(oe,f),P(re,g),P(se,m),P(Zt,k),P(Yt,b),P(he,x),P(de,y),P(ue,E),P(ae,v),P(ce,A),P(le,I),(0,o.kJ)(T))if(T.length){const e=t.exposed||(t.exposed={});T.forEach((t=>{Object.defineProperty(e,t,{get:()=>n[t],set:e=>n[t]=e})}))}else t.exposed||(t.exposed={});C&&t.render===o.dG&&(t.render=C),null!=D&&(t.inheritAttrs=D),S&&(t.components=S),M&&(t.directives=M)}function ge(t,e,n=o.dG,r=!1){(0,o.kJ)(t)&&(t=Ce(t));for(const s in t){const n=t[s];let a;a=(0,o.Kn)(n)?"default"in n?_t(n.from||s,n.default,!0):_t(n.from||s):_t(n),(0,i.dq)(a)&&r?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>a.value,set:t=>a.value=t}):e[s]=a}}function me(t,e,n){p((0,o.kJ)(t)?t.map((t=>t.bind(e.proxy))):t.bind(e.proxy),e,n)}function ke(t,e,n,i){const r=i.includes(".")?Dt(n,i):()=>n[i];if((0,o.HD)(t)){const n=e[t];(0,o.mf)(n)&&xt(r,n)}else if((0,o.mf)(t))xt(r,t.bind(n));else if((0,o.Kn)(t))if((0,o.kJ)(t))t.forEach((t=>ke(t,e,n,i)));else{const i=(0,o.mf)(t.handler)?t.handler.bind(n):e[t.handler];(0,o.mf)(i)&&xt(r,i,t)}else 0}function be(t){const e=t.type,{mixins:n,extends:i}=e,{mixins:o,optionsCache:r,config:{optionMergeStrategies:s}}=t.appContext,a=r.get(e);let c;return a?c=a:o.length||n||i?(c={},o.length&&o.forEach((t=>we(c,t,s,!0))),we(c,e,s)):c=e,r.set(e,c),c}function we(t,e,n,i=!1){const{mixins:o,extends:r}=e;r&&we(t,r,n,!0),o&&o.forEach((e=>we(t,e,n,!0)));for(const s in e)if(i&&"expose"===s);else{const i=ve[s]||n&&n[s];t[s]=i?i(t[s],e[s]):e[s]}return t}const ve={data:_e,props:Ee,emits:Ee,methods:Ee,computed:Ee,beforeCreate:ye,created:ye,beforeMount:ye,mounted:ye,beforeUpdate:ye,updated:ye,beforeDestroy:ye,beforeUnmount:ye,destroyed:ye,unmounted:ye,activated:ye,deactivated:ye,errorCaptured:ye,serverPrefetch:ye,components:Ee,directives:Ee,watch:xe,provide:_e,inject:Ae};function _e(t,e){return e?t?function(){return(0,o.l7)((0,o.mf)(t)?t.call(this,this):t,(0,o.mf)(e)?e.call(this,this):e)}:e:t}function Ae(t,e){return Ee(Ce(t),Ce(e))}function Ce(t){if((0,o.kJ)(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function ye(t,e){return t?[...new Set([].concat(t,e))]:e}function Ee(t,e){return t?(0,o.l7)((0,o.l7)(Object.create(null),t),e):e}function xe(t,e){if(!t)return e;if(!e)return t;const n=(0,o.l7)(Object.create(null),t);for(const i in e)n[i]=ye(t[i],e[i]);return n}function Ie(t,e,n,r=!1){const s={},a={};(0,o.Nj)(a,Vn,1),t.propsDefaults=Object.create(null),De(t,e,s,a);for(const i in t.propsOptions[0])i in s||(s[i]=void 0);n?t.props=r?s:(0,i.Um)(s):t.type.props?t.props=s:t.props=a,t.attrs=a}function Te(t,e,n,r){const{props:s,attrs:a,vnode:{patchFlag:c}}=t,l=(0,i.IU)(s),[u]=t.propsOptions;let d=!1;if(!(r||c>0)||16&c){let i;De(t,e,s,a)&&(d=!0);for(const r in l)e&&((0,o.RI)(e,r)||(i=(0,o.rs)(r))!==r&&(0,o.RI)(e,i))||(u?!n||void 0===n[r]&&void 0===n[i]||(s[r]=Se(u,l,r,void 0,t,!0)):delete s[r]);if(a!==l)for(const t in a)e&&(0,o.RI)(e,t)||(delete a[t],d=!0)}else if(8&c){const n=t.vnode.dynamicProps;for(let i=0;i<n.length;i++){let r=n[i];const c=e[r];if(u)if((0,o.RI)(a,r))c!==a[r]&&(a[r]=c,d=!0);else{const e=(0,o._A)(r);s[e]=Se(u,l,e,c,t,!1)}else c!==a[r]&&(a[r]=c,d=!0)}}d&&(0,i.X$)(t,"set","$attrs")}function De(t,e,n,r){const[s,a]=t.propsOptions;let c,l=!1;if(e)for(let i in e){if((0,o.Gg)(i))continue;const u=e[i];let d;s&&(0,o.RI)(s,d=(0,o._A)(i))?a&&a.includes(d)?(c||(c={}))[d]=u:n[d]=u:W(t.emitsOptions,i)||i in r&&u===r[i]||(r[i]=u,l=!0)}if(a){const e=(0,i.IU)(n),r=c||o.kT;for(let i=0;i<a.length;i++){const c=a[i];n[c]=Se(s,e,c,r[c],t,!(0,o.RI)(r,c))}}return l}function Se(t,e,n,i,r,s){const a=t[n];if(null!=a){const t=(0,o.RI)(a,"default");if(t&&void 0===i){const t=a.default;if(a.type!==Function&&(0,o.mf)(t)){const{propsDefaults:o}=r;n in o?i=o[n]:(ki(r),i=o[n]=t.call(null,e),bi())}else i=t}a[0]&&(s&&!t?i=!1:!a[1]||""!==i&&i!==(0,o.rs)(n)||(i=!0))}return i}function Me(t,e,n=!1){const i=e.propsCache,r=i.get(t);if(r)return r;const s=t.props,a={},c=[];let l=!1;if(!(0,o.mf)(t)){const i=t=>{l=!0;const[n,i]=Me(t,e,!0);(0,o.l7)(a,n),i&&c.push(...i)};!n&&e.mixins.length&&e.mixins.forEach(i),t.extends&&i(t.extends),t.mixins&&t.mixins.forEach(i)}if(!s&&!l)return i.set(t,o.Z6),o.Z6;if((0,o.kJ)(s))for(let d=0;d<s.length;d++){0;const t=(0,o._A)(s[d]);Ne(t)&&(a[t]=o.kT)}else if(s){0;for(const t in s){const e=(0,o._A)(t);if(Ne(e)){const n=s[t],i=a[e]=(0,o.kJ)(n)||(0,o.mf)(n)?{type:n}:n;if(i){const t=Be(Boolean,i.type),n=Be(String,i.type);i[0]=t>-1,i[1]=n<0||t<n,(t>-1||(0,o.RI)(i,"default"))&&c.push(e)}}}}const u=[a,c];return i.set(t,u),u}function Ne(t){return"$"!==t[0]}function Oe(t){const e=t&&t.toString().match(/^\s*function (\w+)/);return e?e[1]:null===t?"null":""}function Pe(t,e){return Oe(t)===Oe(e)}function Be(t,e){return(0,o.kJ)(e)?e.findIndex((e=>Pe(e,t))):(0,o.mf)(e)&&Pe(e,t)?0:-1}const Le=t=>"_"===t[0]||"$stable"===t,Re=t=>(0,o.kJ)(t)?t.map(Jn):[Jn(t)],je=(t,e,n)=>{const i=tt(((...t)=>Re(e(...t))),n);return i._c=!1,i},ze=(t,e,n)=>{const i=t._ctx;for(const r in t){if(Le(r))continue;const n=t[r];if((0,o.mf)(n))e[r]=je(r,n,i);else if(null!=n){0;const t=Re(n);e[r]=()=>t}}},Fe=(t,e)=>{const n=Re(e);t.slots.default=()=>n},Ve=(t,e)=>{if(32&t.vnode.shapeFlag){const n=e._;n?(t.slots=(0,i.IU)(e),(0,o.Nj)(e,"_",n)):ze(e,t.slots={})}else t.slots={},e&&Fe(t,e);(0,o.Nj)(t.slots,Vn,1)},Ue=(t,e,n)=>{const{vnode:i,slots:r}=t;let s=!0,a=o.kT;if(32&i.shapeFlag){const t=e._;t?n&&1===t?s=!1:((0,o.l7)(r,e),n||1!==t||delete r._):(s=!e.$stable,ze(e,r)),a=e}else e&&(Fe(t,e),a={default:1});if(s)for(const o in r)Le(o)||o in a||delete r[o]};function He(t,e){const n=K;if(null===n)return t;const i=n.proxy,r=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[t,n,a,c=o.kT]=e[s];(0,o.mf)(t)&&(t={mounted:t,updated:t}),t.deep&&St(n),r.push({dir:t,instance:i,value:n,oldValue:void 0,arg:a,modifiers:c})}return t}function qe(t,e,n,o){const r=t.dirs,s=e&&e.dirs;for(let a=0;a<r.length;a++){const c=r[a];s&&(c.oldValue=s[a].value);let l=c.dir[o];l&&((0,i.Jd)(),p(l,n,8,[t.el,c,t,e]),(0,i.lk)())}}function $e(){return{app:null,config:{isNativeTag:o.NO,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Ge=0;function We(t,e){return function(n,i=null){null==i||(0,o.Kn)(i)||(i=null);const r=$e(),s=new Set;let a=!1;const c=r.app={_uid:Ge++,_component:n,_props:i,_container:null,_context:r,_instance:null,version:to,get config(){return r.config},set config(t){0},use(t,...e){return s.has(t)||(t&&(0,o.mf)(t.install)?(s.add(t),t.install(c,...e)):(0,o.mf)(t)&&(s.add(t),t(c,...e))),c},mixin(t){return r.mixins.includes(t)||r.mixins.push(t),c},component(t,e){return e?(r.components[t]=e,c):r.components[t]},directive(t,e){return e?(r.directives[t]=e,c):r.directives[t]},mount(o,s,l){if(!a){const u=$n(n,i);return u.appContext=r,s&&e?e(u,o):t(u,o,l),a=!0,c._container=o,o.__vue_app__=c,Mi(u.component)||u.component.proxy}},unmount(){a&&(t(null,c._container),delete c._container.__vue_app__)},provide(t,e){return r.provides[t]=e,c}};return c}}function Ke(t,e,n,r,s=!1){if((0,o.kJ)(t))return void t.forEach(((t,i)=>Ke(t,e&&((0,o.kJ)(e)?e[i]:e),n,r,s)));if(Ut(r)&&!s)return;const a=4&r.shapeFlag?Mi(r.component)||r.component.proxy:r.el,c=s?null:a,{i:l,r:u}=t;const d=e&&e.r,p=l.refs===o.kT?l.refs={}:l.refs,f=l.setupState;if(null!=d&&d!==u&&((0,o.HD)(d)?(p[d]=null,(0,o.RI)(f,d)&&(f[d]=null)):(0,i.dq)(d)&&(d.value=null)),(0,o.mf)(u))h(u,l,12,[c,p]);else{const e=(0,o.HD)(u),r=(0,i.dq)(u);if(e||r){const r=()=>{if(t.f){const n=e?p[u]:u.value;s?(0,o.kJ)(n)&&(0,o.Od)(n,a):(0,o.kJ)(n)?n.includes(a)||n.push(a):e?p[u]=[a]:(u.value=[a],t.k&&(p[t.k]=u.value))}else e?(p[u]=c,(0,o.RI)(f,u)&&(f[u]=c)):(0,i.dq)(u)&&(u.value=c,t.k&&(p[t.k]=c))};c?(r.id=-1,tn(r,n)):r()}else 0}}let Ze=!1;const Ye=t=>/svg/.test(t.namespaceURI)&&"foreignObject"!==t.tagName,Qe=t=>8===t.nodeType;function Je(t){const{mt:e,p:n,o:{patchProp:i,nextSibling:r,parentNode:s,remove:a,insert:c,createComment:l}}=t,u=(t,e)=>{if(!e.hasChildNodes())return n(null,t,e),void j();Ze=!1,d(e.firstChild,t,null,null,null),j(),Ze&&console.error("Hydration completed but contains mismatches.")},d=(n,i,o,a,c,l=!1)=>{const u=Qe(n)&&"["===n.data,k=()=>g(n,i,o,a,c,u),{type:b,ref:w,shapeFlag:v}=i,_=n.nodeType;i.el=n;let A=null;switch(b){case En:3!==_?A=k():(n.data!==i.children&&(Ze=!0,n.data=i.children),A=r(n));break;case xn:A=8!==_||u?k():r(n);break;case In:if(1===_){A=n;const t=!i.children.length;for(let e=0;e<i.staticCount;e++)t&&(i.children+=A.outerHTML),e===i.staticCount-1&&(i.anchor=A),A=r(A);return A}A=k();break;case yn:A=u?f(n,i,o,a,c,l):k();break;default:if(1&v)A=1!==_||i.type.toLowerCase()!==n.tagName.toLowerCase()?k():h(n,i,o,a,c,l);else if(6&v){i.slotScopeIds=c;const t=s(n);if(e(i,t,null,o,a,Ye(t),l),A=u?m(n):r(n),Ut(i)){let e;u?(e=$n(yn),e.anchor=A?A.previousSibling:t.lastChild):e=3===n.nodeType?Zn(""):$n("div"),e.el=n,i.component.subTree=e}}else 64&v?A=8!==_?k():i.type.hydrate(n,i,o,a,c,l,t,p):128&v&&(A=i.type.hydrate(n,i,o,a,Ye(s(n)),c,l,t,d))}return null!=w&&Ke(w,null,a,i),A},h=(t,e,n,r,s,c)=>{c=c||!!e.dynamicChildren;const{type:l,props:u,patchFlag:d,shapeFlag:h,dirs:f}=e,g="input"===l&&f||"option"===l;if(g||-1!==d){if(f&&qe(e,null,n,"created"),u)if(g||!c||48&d)for(const e in u)(g&&e.endsWith("value")||(0,o.F7)(e)&&!(0,o.Gg)(e))&&i(t,e,null,u[e],!1,void 0,n);else u.onClick&&i(t,"onClick",null,u.onClick,!1,void 0,n);let l;if((l=u&&u.onVnodeBeforeMount)&&ni(l,n,e),f&&qe(e,null,n,"beforeMount"),((l=u&&u.onVnodeMounted)||f)&&bt((()=>{l&&ni(l,n,e),f&&qe(e,null,n,"mounted")}),r),16&h&&(!u||!u.innerHTML&&!u.textContent)){let i=p(t.firstChild,e,t,n,r,s,c);while(i){Ze=!0;const t=i;i=i.nextSibling,a(t)}}else 8&h&&t.textContent!==e.children&&(Ze=!0,t.textContent=e.children)}return t.nextSibling},p=(t,e,i,o,r,s,a)=>{a=a||!!e.dynamicChildren;const c=e.children,l=c.length;for(let u=0;u<l;u++){const e=a?c[u]:c[u]=Jn(c[u]);if(t)t=d(t,e,o,r,s,a);else{if(e.type===En&&!e.children)continue;Ze=!0,n(null,e,i,null,o,r,Ye(i),s)}}return t},f=(t,e,n,i,o,a)=>{const{slotScopeIds:u}=e;u&&(o=o?o.concat(u):u);const d=s(t),h=p(r(t),e,d,n,i,o,a);return h&&Qe(h)&&"]"===h.data?r(e.anchor=h):(Ze=!0,c(e.anchor=l("]"),d,h),h)},g=(t,e,i,o,c,l)=>{if(Ze=!0,e.el=null,l){const e=m(t);while(1){const n=r(t);if(!n||n===e)break;a(n)}}const u=r(t),d=s(t);return a(t),n(null,e,d,u,i,o,Ye(d),c),u},m=t=>{let e=0;while(t)if(t=r(t),t&&Qe(t)&&("["===t.data&&e++,"]"===t.data)){if(0===e)return r(t);e--}return t};return[u,d]}function Xe(){}const tn=bt;function en(t){return on(t)}function nn(t){return on(t,Je)}function on(t,e){Xe();const n=(0,o.E9)();n.__VUE__=!0;const{insert:r,remove:s,patchProp:a,createElement:c,createText:l,createComment:u,setText:d,setElementText:h,parentNode:p,nextSibling:f,setScopeId:g=o.dG,cloneNode:m,insertStaticContent:k}=t,b=(t,e,n,i=null,o=null,r=null,s=!1,a=null,c=!!e.dynamicChildren)=>{if(t===e)return;t&&!zn(t,e)&&(i=Y(t),$(t,o,r,!0),t=null),-2===e.patchFlag&&(c=!1,e.dynamicChildren=null);const{type:l,ref:u,shapeFlag:d}=e;switch(l){case En:w(t,e,n,i);break;case xn:v(t,e,n,i);break;case In:null==t&&_(e,n,i,s);break;case yn:N(t,e,n,i,o,r,s,a,c);break;default:1&d?y(t,e,n,i,o,r,s,a,c):6&d?P(t,e,n,i,o,r,s,a,c):(64&d||128&d)&&l.process(t,e,n,i,o,r,s,a,c,J)}null!=u&&o&&Ke(u,t&&t.ref,r,e||t,!e)},w=(t,e,n,i)=>{if(null==t)r(e.el=l(e.children),n,i);else{const n=e.el=t.el;e.children!==t.children&&d(n,e.children)}},v=(t,e,n,i)=>{null==t?r(e.el=u(e.children||""),n,i):e.el=t.el},_=(t,e,n,i)=>{[t.el,t.anchor]=k(t.children,e,n,i,t.el,t.anchor)},A=({el:t,anchor:e},n,i)=>{let o;while(t&&t!==e)o=f(t),r(t,n,i),t=o;r(e,n,i)},C=({el:t,anchor:e})=>{let n;while(t&&t!==e)n=f(t),s(t),t=n;s(e)},y=(t,e,n,i,o,r,s,a,c)=>{s=s||"svg"===e.type,null==t?E(e,n,i,o,r,s,a,c):T(t,e,o,r,s,a,c)},E=(t,e,n,i,s,l,u,d)=>{let p,f;const{type:g,props:k,shapeFlag:b,transition:w,patchFlag:v,dirs:_}=t;if(t.el&&void 0!==m&&-1===v)p=t.el=m(t.el);else{if(p=t.el=c(t.type,l,k&&k.is,k),8&b?h(p,t.children):16&b&&I(t.children,p,null,i,s,l&&"foreignObject"!==g,u,d),_&&qe(t,null,i,"created"),k){for(const e in k)"value"===e||(0,o.Gg)(e)||a(p,e,null,k[e],l,t.children,i,s,Z);"value"in k&&a(p,"value",null,k.value),(f=k.onVnodeBeforeMount)&&ni(f,i,t)}x(p,t,t.scopeId,u,i)}_&&qe(t,null,i,"beforeMount");const A=(!s||s&&!s.pendingBranch)&&w&&!w.persisted;A&&w.beforeEnter(p),r(p,e,n),((f=k&&k.onVnodeMounted)||A||_)&&tn((()=>{f&&ni(f,i,t),A&&w.enter(p),_&&qe(t,null,i,"mounted")}),s)},x=(t,e,n,i,o)=>{if(n&&g(t,n),i)for(let r=0;r<i.length;r++)g(t,i[r]);if(o){let n=o.subTree;if(e===n){const e=o.vnode;x(t,e,e.scopeId,e.slotScopeIds,o.parent)}}},I=(t,e,n,i,o,r,s,a,c=0)=>{for(let l=c;l<t.length;l++){const c=t[l]=a?Xn(t[l]):Jn(t[l]);b(null,c,e,n,i,o,r,s,a)}},T=(t,e,n,i,r,s,c)=>{const l=e.el=t.el;let{patchFlag:u,dynamicChildren:d,dirs:p}=e;u|=16&t.patchFlag;const f=t.props||o.kT,g=e.props||o.kT;let m;n&&rn(n,!1),(m=g.onVnodeBeforeUpdate)&&ni(m,n,e,t),p&&qe(e,t,n,"beforeUpdate"),n&&rn(n,!0);const k=r&&"foreignObject"!==e.type;if(d?D(t.dynamicChildren,d,l,n,i,k,s):c||V(t,e,l,null,n,i,k,s,!1),u>0){if(16&u)S(l,e,f,g,n,i,r);else if(2&u&&f.class!==g.class&&a(l,"class",null,g.class,r),4&u&&a(l,"style",f.style,g.style,r),8&u){const o=e.dynamicProps;for(let e=0;e<o.length;e++){const s=o[e],c=f[s],u=g[s];u===c&&"value"!==s||a(l,s,c,u,r,t.children,n,i,Z)}}1&u&&t.children!==e.children&&h(l,e.children)}else c||null!=d||S(l,e,f,g,n,i,r);((m=g.onVnodeUpdated)||p)&&tn((()=>{m&&ni(m,n,e,t),p&&qe(e,t,n,"updated")}),i)},D=(t,e,n,i,o,r,s)=>{for(let a=0;a<e.length;a++){const c=t[a],l=e[a],u=c.el&&(c.type===yn||!zn(c,l)||70&c.shapeFlag)?p(c.el):n;b(c,l,u,null,i,o,r,s,!0)}},S=(t,e,n,i,r,s,c)=>{if(n!==i){for(const l in i){if((0,o.Gg)(l))continue;const u=i[l],d=n[l];u!==d&&"value"!==l&&a(t,l,d,u,c,e.children,r,s,Z)}if(n!==o.kT)for(const l in n)(0,o.Gg)(l)||l in i||a(t,l,n[l],null,c,e.children,r,s,Z);"value"in i&&a(t,"value",n.value,i.value)}},N=(t,e,n,i,o,s,a,c,u)=>{const d=e.el=t?t.el:l(""),h=e.anchor=t?t.anchor:l("");let{patchFlag:p,dynamicChildren:f,slotScopeIds:g}=e;g&&(c=c?c.concat(g):g),null==t?(r(d,n,i),r(h,n,i),I(e.children,n,h,o,s,a,c,u)):p>0&&64&p&&f&&t.dynamicChildren?(D(t.dynamicChildren,f,n,o,s,a,c),(null!=e.key||o&&e===o.subTree)&&sn(t,e,!0)):V(t,e,n,h,o,s,a,c,u)},P=(t,e,n,i,o,r,s,a,c)=>{e.slotScopeIds=a,null==t?512&e.shapeFlag?o.ctx.activate(e,n,i,s,c):B(e,n,i,o,r,s,c):L(t,e,c)},B=(t,e,n,i,o,r,s)=>{const a=t.component=fi(t,i,o);if($t(t)&&(a.ctx.renderer=J),Ci(a),a.asyncDep){if(o&&o.registerDep(a,z),!t.el){const t=a.subTree=$n(xn);v(null,t,e,n)}}else z(a,t,e,n,o,r,s)},L=(t,e,n)=>{const i=e.component=t.component;if(rt(t,e,n)){if(i.asyncDep&&!i.asyncResolved)return void F(i,e,n);i.next=e,O(i.update),i.update()}else e.component=t.component,e.el=t.el,i.vnode=e},z=(t,e,n,r,s,a,c)=>{const l=()=>{if(t.isMounted){let e,{next:n,bu:i,u:r,parent:l,vnode:u}=t,d=n;0,rn(t,!1),n?(n.el=u.el,F(t,n,c)):n=u,i&&(0,o.ir)(i),(e=n.props&&n.props.onVnodeBeforeUpdate)&&ni(e,l,n,u),rn(t,!0);const h=et(t);0;const f=t.subTree;t.subTree=h,b(f,h,p(f.el),Y(f),t,s,a),n.el=h.el,null===d&&at(t,h.el),r&&tn(r,s),(e=n.props&&n.props.onVnodeUpdated)&&tn((()=>ni(e,l,n,u)),s)}else{let i;const{el:c,props:l}=e,{bm:u,m:d,parent:h}=t,p=Ut(e);if(rn(t,!1),u&&(0,o.ir)(u),!p&&(i=l&&l.onVnodeBeforeMount)&&ni(i,h,e),rn(t,!0),c&&tt){const n=()=>{t.subTree=et(t),tt(c,t.subTree,t,s,null)};p?e.type.__asyncLoader().then((()=>!t.isUnmounted&&n())):n()}else{0;const i=t.subTree=et(t);0,b(null,i,n,r,t,s,a),e.el=i.el}if(d&&tn(d,s),!p&&(i=l&&l.onVnodeMounted)){const t=e;tn((()=>ni(i,h,t)),s)}256&e.shapeFlag&&t.a&&tn(t.a,s),t.isMounted=!0,e=n=r=null}},u=t.effect=new i.qq(l,(()=>M(t.update)),t.scope),d=t.update=u.run.bind(u);d.id=t.uid,rn(t,!0),d()},F=(t,e,n)=>{e.component=t;const o=t.vnode.props;t.vnode=e,t.next=null,Te(t,e.props,o,n),Ue(t,e.children,n),(0,i.Jd)(),R(void 0,t.update),(0,i.lk)()},V=(t,e,n,i,o,r,s,a,c=!1)=>{const l=t&&t.children,u=t?t.shapeFlag:0,d=e.children,{patchFlag:p,shapeFlag:f}=e;if(p>0){if(128&p)return void H(l,d,n,i,o,r,s,a,c);if(256&p)return void U(l,d,n,i,o,r,s,a,c)}8&f?(16&u&&Z(l,o,r),d!==l&&h(n,d)):16&u?16&f?H(l,d,n,i,o,r,s,a,c):Z(l,o,r,!0):(8&u&&h(n,""),16&f&&I(d,n,i,o,r,s,a,c))},U=(t,e,n,i,r,s,a,c,l)=>{t=t||o.Z6,e=e||o.Z6;const u=t.length,d=e.length,h=Math.min(u,d);let p;for(p=0;p<h;p++){const i=e[p]=l?Xn(e[p]):Jn(e[p]);b(t[p],i,n,null,r,s,a,c,l)}u>d?Z(t,r,s,!0,!1,h):I(e,n,i,r,s,a,c,l,h)},H=(t,e,n,i,r,s,a,c,l)=>{let u=0;const d=e.length;let h=t.length-1,p=d-1;while(u<=h&&u<=p){const i=t[u],o=e[u]=l?Xn(e[u]):Jn(e[u]);if(!zn(i,o))break;b(i,o,n,null,r,s,a,c,l),u++}while(u<=h&&u<=p){const i=t[h],o=e[p]=l?Xn(e[p]):Jn(e[p]);if(!zn(i,o))break;b(i,o,n,null,r,s,a,c,l),h--,p--}if(u>h){if(u<=p){const t=p+1,o=t<d?e[t].el:i;while(u<=p)b(null,e[u]=l?Xn(e[u]):Jn(e[u]),n,o,r,s,a,c,l),u++}}else if(u>p)while(u<=h)$(t[u],r,s,!0),u++;else{const f=u,g=u,m=new Map;for(u=g;u<=p;u++){const t=e[u]=l?Xn(e[u]):Jn(e[u]);null!=t.key&&m.set(t.key,u)}let k,w=0;const v=p-g+1;let _=!1,A=0;const C=new Array(v);for(u=0;u<v;u++)C[u]=0;for(u=f;u<=h;u++){const i=t[u];if(w>=v){$(i,r,s,!0);continue}let o;if(null!=i.key)o=m.get(i.key);else for(k=g;k<=p;k++)if(0===C[k-g]&&zn(i,e[k])){o=k;break}void 0===o?$(i,r,s,!0):(C[o-g]=u+1,o>=A?A=o:_=!0,b(i,e[o],n,null,r,s,a,c,l),w++)}const y=_?an(C):o.Z6;for(k=y.length-1,u=v-1;u>=0;u--){const t=g+u,o=e[t],h=t+1<d?e[t+1].el:i;0===C[u]?b(null,o,n,h,r,s,a,c,l):_&&(k<0||u!==y[k]?q(o,n,h,2):k--)}}},q=(t,e,n,i,o=null)=>{const{el:s,type:a,transition:c,children:l,shapeFlag:u}=t;if(6&u)return void q(t.component.subTree,e,n,i);if(128&u)return void t.suspense.move(e,n,i);if(64&u)return void a.move(t,e,n,J);if(a===yn){r(s,e,n);for(let t=0;t<l.length;t++)q(l[t],e,n,i);return void r(t.anchor,e,n)}if(a===In)return void A(t,e,n);const d=2!==i&&1&u&&c;if(d)if(0===i)c.beforeEnter(s),r(s,e,n),tn((()=>c.enter(s)),o);else{const{leave:t,delayLeave:i,afterLeave:o}=c,a=()=>r(s,e,n),l=()=>{t(s,(()=>{a(),o&&o()}))};i?i(s,a,l):l()}else r(s,e,n)},$=(t,e,n,i=!1,o=!1)=>{const{type:r,props:s,ref:a,children:c,dynamicChildren:l,shapeFlag:u,patchFlag:d,dirs:h}=t;if(null!=a&&Ke(a,null,n,t,!0),256&u)return void e.ctx.deactivate(t);const p=1&u&&h,f=!Ut(t);let g;if(f&&(g=s&&s.onVnodeBeforeUnmount)&&ni(g,e,t),6&u)K(t.component,n,i);else{if(128&u)return void t.suspense.unmount(n,i);p&&qe(t,null,e,"beforeUnmount"),64&u?t.type.remove(t,e,n,o,J,i):l&&(r!==yn||d>0&&64&d)?Z(l,e,n,!1,!0):(r===yn&&384&d||!o&&16&u)&&Z(c,e,n),i&&G(t)}(f&&(g=s&&s.onVnodeUnmounted)||p)&&tn((()=>{g&&ni(g,e,t),p&&qe(t,null,e,"unmounted")}),n)},G=t=>{const{type:e,el:n,anchor:i,transition:o}=t;if(e===yn)return void W(n,i);if(e===In)return void C(t);const r=()=>{s(n),o&&!o.persisted&&o.afterLeave&&o.afterLeave()};if(1&t.shapeFlag&&o&&!o.persisted){const{leave:e,delayLeave:i}=o,s=()=>e(n,r);i?i(t.el,r,s):s()}else r()},W=(t,e)=>{let n;while(t!==e)n=f(t),s(t),t=n;s(e)},K=(t,e,n)=>{const{bum:i,scope:r,update:s,subTree:a,um:c}=t;i&&(0,o.ir)(i),r.stop(),s&&(s.active=!1,$(a,t,e,n)),c&&tn(c,e),tn((()=>{t.isUnmounted=!0}),e),e&&e.pendingBranch&&!e.isUnmounted&&t.asyncDep&&!t.asyncResolved&&t.suspenseId===e.pendingId&&(e.deps--,0===e.deps&&e.resolve())},Z=(t,e,n,i=!1,o=!1,r=0)=>{for(let s=r;s<t.length;s++)$(t[s],e,n,i,o)},Y=t=>6&t.shapeFlag?Y(t.component.subTree):128&t.shapeFlag?t.suspense.next():f(t.anchor||t.el),Q=(t,e,n)=>{null==t?e._vnode&&$(e._vnode,null,null,!0):b(e._vnode||null,t,e,null,null,null,n),j(),e._vnode=t},J={p:b,um:$,m:q,r:G,mt:B,mc:I,pc:V,pbc:D,n:Y,o:t};let X,tt;return e&&([X,tt]=e(J)),{render:Q,hydrate:X,createApp:We(Q,X)}}function rn({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function sn(t,e,n=!1){const i=t.children,r=e.children;if((0,o.kJ)(i)&&(0,o.kJ)(r))for(let o=0;o<i.length;o++){const t=i[o];let e=r[o];1&e.shapeFlag&&!e.dynamicChildren&&((e.patchFlag<=0||32===e.patchFlag)&&(e=r[o]=Xn(r[o]),e.el=t.el),n||sn(t,e))}}function an(t){const e=t.slice(),n=[0];let i,o,r,s,a;const c=t.length;for(i=0;i<c;i++){const c=t[i];if(0!==c){if(o=n[n.length-1],t[o]<c){e[i]=o,n.push(i);continue}r=0,s=n.length-1;while(r<s)a=r+s>>1,t[n[a]]<c?r=a+1:s=a;c<t[n[r]]&&(r>0&&(e[i]=n[r-1]),n[r]=i)}}r=n.length,s=n[r-1];while(r-- >0)n[r]=s,s=e[s];return n}const cn=t=>t.__isTeleport,ln=t=>t&&(t.disabled||""===t.disabled),un=t=>"undefined"!==typeof SVGElement&&t instanceof SVGElement,dn=(t,e)=>{const n=t&&t.to;if((0,o.HD)(n)){if(e){const t=e(n);return t}return null}return n},hn={__isTeleport:!0,process(t,e,n,i,o,r,s,a,c,l){const{mc:u,pc:d,pbc:h,o:{insert:p,querySelector:f,createText:g,createComment:m}}=l,k=ln(e.props);let{shapeFlag:b,children:w,dynamicChildren:v}=e;if(null==t){const t=e.el=g(""),l=e.anchor=g("");p(t,n,i),p(l,n,i);const d=e.target=dn(e.props,f),h=e.targetAnchor=g("");d&&(p(h,d),s=s||un(d));const m=(t,e)=>{16&b&&u(w,t,e,o,r,s,a,c)};k?m(n,l):d&&m(d,h)}else{e.el=t.el;const i=e.anchor=t.anchor,u=e.target=t.target,p=e.targetAnchor=t.targetAnchor,g=ln(t.props),m=g?n:u,b=g?i:p;if(s=s||un(u),v?(h(t.dynamicChildren,v,m,o,r,s,a),sn(t,e,!0)):c||d(t,e,m,b,o,r,s,a,!1),k)g||pn(e,n,i,l,1);else if((e.props&&e.props.to)!==(t.props&&t.props.to)){const t=e.target=dn(e.props,f);t&&pn(e,t,null,l,0)}else g&&pn(e,u,p,l,1)}},remove(t,e,n,i,{um:o,o:{remove:r}},s){const{shapeFlag:a,children:c,anchor:l,targetAnchor:u,target:d,props:h}=t;if(d&&r(u),(s||!ln(h))&&(r(l),16&a))for(let p=0;p<c.length;p++){const t=c[p];o(t,e,n,!0,!!t.dynamicChildren)}},move:pn,hydrate:fn};function pn(t,e,n,{o:{insert:i},m:o},r=2){0===r&&i(t.targetAnchor,e,n);const{el:s,anchor:a,shapeFlag:c,children:l,props:u}=t,d=2===r;if(d&&i(s,e,n),(!d||ln(u))&&16&c)for(let h=0;h<l.length;h++)o(l[h],e,n,2);d&&i(a,e,n)}function fn(t,e,n,i,o,r,{o:{nextSibling:s,parentNode:a,querySelector:c}},l){const u=e.target=dn(e.props,c);if(u){const c=u._lpa||u.firstChild;16&e.shapeFlag&&(ln(e.props)?(e.anchor=l(s(t),e,a(t),n,i,o,r),e.targetAnchor=c):(e.anchor=s(t),e.targetAnchor=l(c,e,u,n,i,o,r)),u._lpa=e.targetAnchor&&s(e.targetAnchor))}return e.anchor&&s(e.anchor)}const gn=hn,mn="components",kn="directives";function bn(t,e){return An(mn,t,!0,e)||t}const wn=Symbol();function vn(t){return(0,o.HD)(t)?An(mn,t,!1)||t:t||wn}function _n(t){return An(kn,t)}function An(t,e,n=!0,i=!1){const r=K||gi;if(r){const n=r.type;if(t===mn){const t=Pi(n);if(t&&(t===e||t===(0,o._A)(e)||t===(0,o.kC)((0,o._A)(e))))return n}const s=Cn(r[t]||n[t],e)||Cn(r.appContext[t],e);return!s&&i?n:s}}function Cn(t,e){return t&&(t[e]||t[(0,o._A)(e)]||t[(0,o.kC)((0,o._A)(e))])}const yn=Symbol(void 0),En=Symbol(void 0),xn=Symbol(void 0),In=Symbol(void 0),Tn=[];let Dn=null;function Sn(t=!1){Tn.push(Dn=t?null:[])}function Mn(){Tn.pop(),Dn=Tn[Tn.length-1]||null}let Nn,On=1;function Pn(t){On+=t}function Bn(t){return t.dynamicChildren=On>0?Dn||o.Z6:null,Mn(),On>0&&Dn&&Dn.push(t),t}function Ln(t,e,n,i,o,r){return Bn(qn(t,e,n,i,o,r,!0))}function Rn(t,e,n,i,o){return Bn($n(t,e,n,i,o,!0))}function jn(t){return!!t&&!0===t.__v_isVNode}function zn(t,e){return t.type===e.type&&t.key===e.key}function Fn(t){Nn=t}const Vn="__vInternal",Un=({key:t})=>null!=t?t:null,Hn=({ref:t,ref_key:e,ref_for:n})=>null!=t?(0,o.HD)(t)||(0,i.dq)(t)||(0,o.mf)(t)?{i:K,r:t,k:e,f:!!n}:t:null;function qn(t,e=null,n=null,i=0,r=null,s=(t===yn?0:1),a=!1,c=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Un(e),ref:e&&Hn(e),scopeId:Z,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:i,dynamicProps:r,dynamicChildren:null,appContext:null};return c?(ti(l,n),128&s&&t.normalize(l)):n&&(l.shapeFlag|=(0,o.HD)(n)?8:16),On>0&&!a&&Dn&&(l.patchFlag>0||6&s)&&32!==l.patchFlag&&Dn.push(l),l}const $n=Gn;function Gn(t,e=null,n=null,r=0,s=null,a=!1){if(t&&t!==wn||(t=xn),jn(t)){const i=Kn(t,e,!0);return n&&ti(i,n),i}if(Li(t)&&(t=t.__vccOpts),e){e=Wn(e);let{class:t,style:n}=e;t&&!(0,o.HD)(t)&&(e.class=(0,o.C_)(t)),(0,o.Kn)(n)&&((0,i.X3)(n)&&!(0,o.kJ)(n)&&(n=(0,o.l7)({},n)),e.style=(0,o.j5)(n))}const c=(0,o.HD)(t)?1:ct(t)?128:cn(t)?64:(0,o.Kn)(t)?4:(0,o.mf)(t)?2:0;return qn(t,e,n,r,s,c,a,!0)}function Wn(t){return t?(0,i.X3)(t)||Vn in t?(0,o.l7)({},t):t:null}function Kn(t,e,n=!1){const{props:i,ref:r,patchFlag:s,children:a}=t,c=e?ei(i||{},e):i,l={__v_isVNode:!0,__v_skip:!0,type:t.type,props:c,key:c&&Un(c),ref:e&&e.ref?n&&r?(0,o.kJ)(r)?r.concat(Hn(e)):[r,Hn(e)]:Hn(e):r,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:a,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==yn?-1===s?16:16|s:s,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Kn(t.ssContent),ssFallback:t.ssFallback&&Kn(t.ssFallback),el:t.el,anchor:t.anchor};return l}function Zn(t=" ",e=0){return $n(En,null,t,e)}function Yn(t,e){const n=$n(In,null,t);return n.staticCount=e,n}function Qn(t="",e=!1){return e?(Sn(),Rn(xn,null,t)):$n(xn,null,t)}function Jn(t){return null==t||"boolean"===typeof t?$n(xn):(0,o.kJ)(t)?$n(yn,null,t.slice()):"object"===typeof t?Xn(t):$n(En,null,String(t))}function Xn(t){return null===t.el||t.memo?t:Kn(t)}function ti(t,e){let n=0;const{shapeFlag:i}=t;if(null==e)e=null;else if((0,o.kJ)(e))n=16;else if("object"===typeof e){if(65&i){const n=e.default;return void(n&&(n._c&&(n._d=!1),ti(t,n()),n._c&&(n._d=!0)))}{n=32;const i=e._;i||Vn in e?3===i&&K&&(1===K.slots._?e._=1:(e._=2,t.patchFlag|=1024)):e._ctx=K}}else(0,o.mf)(e)?(e={default:e,_ctx:K},n=32):(e=String(e),64&i?(n=16,e=[Zn(e)]):n=8);t.children=e,t.shapeFlag|=n}function ei(...t){const e={};for(let n=0;n<t.length;n++){const i=t[n];for(const t in i)if("class"===t)e.class!==i.class&&(e.class=(0,o.C_)([e.class,i.class]));else if("style"===t)e.style=(0,o.j5)([e.style,i.style]);else if((0,o.F7)(t)){const n=e[t],r=i[t];!r||n===r||(0,o.kJ)(n)&&n.includes(r)||(e[t]=n?[].concat(n,r):r)}else""!==t&&(e[t]=i[t])}return e}function ni(t,e,n,i=null){p(t,e,7,[n,i])}function ii(t,e,n,i){let r;const s=n&&n[i];if((0,o.kJ)(t)||(0,o.HD)(t)){r=new Array(t.length);for(let n=0,i=t.length;n<i;n++)r[n]=e(t[n],n,void 0,s&&s[n])}else if("number"===typeof t){0,r=new Array(t);for(let n=0;n<t;n++)r[n]=e(n+1,n,void 0,s&&s[n])}else if((0,o.Kn)(t))if(t[Symbol.iterator])r=Array.from(t,((t,n)=>e(t,n,void 0,s&&s[n])));else{const n=Object.keys(t);r=new Array(n.length);for(let i=0,o=n.length;i<o;i++){const o=n[i];r[i]=e(t[o],o,i,s&&s[i])}}else r=[];return n&&(n[i]=r),r}function oi(t,e){for(let n=0;n<e.length;n++){const i=e[n];if((0,o.kJ)(i))for(let e=0;e<i.length;e++)t[i[e].name]=i[e].fn;else i&&(t[i.name]=i.fn)}return t}function ri(t,e,n={},i,o){if(K.isCE)return $n("slot","default"===e?null:{name:e},i&&i());let r=t[e];r&&r._c&&(r._d=!1),Sn();const s=r&&si(r(n)),a=Rn(yn,{key:n.key||`_${e}`},s||(i?i():[]),s&&1===t._?64:-2);return!o&&a.scopeId&&(a.slotScopeIds=[a.scopeId+"-s"]),r&&r._c&&(r._d=!0),a}function si(t){return t.some((t=>!jn(t)||t.type!==xn&&!(t.type===yn&&!si(t.children))))?t:null}function ai(t){const e={};for(const n in t)e[(0,o.hR)(n)]=t[n];return e}const ci=t=>t?wi(t)?Mi(t)||t.proxy:ci(t.parent):null,li=(0,o.l7)(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>ci(t.parent),$root:t=>ci(t.root),$emit:t=>t.emit,$options:t=>be(t),$forceUpdate:t=>()=>M(t.update),$nextTick:t=>D.bind(t.proxy),$watch:t=>Tt.bind(t)}),ui={get({_:t},e){const{ctx:n,setupState:r,data:s,props:a,accessCache:c,type:l,appContext:u}=t;let d;if("$"!==e[0]){const i=c[e];if(void 0!==i)switch(i){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return a[e]}else{if(r!==o.kT&&(0,o.RI)(r,e))return c[e]=1,r[e];if(s!==o.kT&&(0,o.RI)(s,e))return c[e]=2,s[e];if((d=t.propsOptions[0])&&(0,o.RI)(d,e))return c[e]=3,a[e];if(n!==o.kT&&(0,o.RI)(n,e))return c[e]=4,n[e];pe&&(c[e]=0)}}const h=li[e];let p,f;return h?("$attrs"===e&&(0,i.j)(t,"get",e),h(t)):(p=l.__cssModules)&&(p=p[e])?p:n!==o.kT&&(0,o.RI)(n,e)?(c[e]=4,n[e]):(f=u.config.globalProperties,(0,o.RI)(f,e)?f[e]:void 0)},set({_:t},e,n){const{data:i,setupState:r,ctx:s}=t;return r!==o.kT&&(0,o.RI)(r,e)?(r[e]=n,!0):i!==o.kT&&(0,o.RI)(i,e)?(i[e]=n,!0):!(0,o.RI)(t.props,e)&&(("$"!==e[0]||!(e.slice(1)in t))&&(s[e]=n,!0))},has({_:{data:t,setupState:e,accessCache:n,ctx:i,appContext:r,propsOptions:s}},a){let c;return!!n[a]||t!==o.kT&&(0,o.RI)(t,a)||e!==o.kT&&(0,o.RI)(e,a)||(c=s[0])&&(0,o.RI)(c,a)||(0,o.RI)(i,a)||(0,o.RI)(li,a)||(0,o.RI)(r.config.globalProperties,a)},defineProperty(t,e,n){return null!=n.get?this.set(t,e,n.get(),null):null!=n.value&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};const di=(0,o.l7)({},ui,{get(t,e){if(e!==Symbol.unscopables)return ui.get(t,e,t)},has(t,e){const n="_"!==e[0]&&!(0,o.e1)(e);return n}});const hi=$e();let pi=0;function fi(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||hi,a={uid:pi++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new i.Bj(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Me(r,s),emitsOptions:G(r,s),emit:null,emitted:null,propsDefaults:o.kT,inheritAttrs:r.inheritAttrs,ctx:o.kT,data:o.kT,props:o.kT,attrs:o.kT,slots:o.kT,refs:o.kT,setupState:o.kT,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return a.ctx={_:a},a.root=e?e.root:a,a.emit=$.bind(null,a),t.ce&&t.ce(a),a}let gi=null;const mi=()=>gi||K,ki=t=>{gi=t,t.scope.on()},bi=()=>{gi&&gi.scope.off(),gi=null};function wi(t){return 4&t.vnode.shapeFlag}let vi,_i,Ai=!1;function Ci(t,e=!1){Ai=e;const{props:n,children:i}=t.vnode,o=wi(t);Ie(t,n,o,e),Ve(t,i);const r=o?yi(t,e):void 0;return Ai=!1,r}function yi(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=(0,i.Xl)(new Proxy(t.ctx,ui));const{setup:r}=n;if(r){const n=t.setupContext=r.length>1?Si(t):null;ki(t),(0,i.Jd)();const s=h(r,t,0,[t.props,n]);if((0,i.lk)(),bi(),(0,o.tI)(s)){if(s.then(bi,bi),e)return s.then((n=>{Ei(t,n,e)})).catch((e=>{f(e,t,0)}));t.asyncDep=s}else Ei(t,s,e)}else Ti(t,e)}function Ei(t,e,n){(0,o.mf)(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:(0,o.Kn)(e)&&(t.setupState=(0,i.WL)(e)),Ti(t,n)}function xi(t){vi=t,_i=t=>{t.render._rc&&(t.withProxy=new Proxy(t.ctx,di))}}const Ii=()=>!vi;function Ti(t,e,n){const r=t.type;if(!t.render){if(!e&&vi&&!r.render){const e=r.template;if(e){0;const{isCustomElement:n,compilerOptions:i}=t.appContext.config,{delimiters:s,compilerOptions:a}=r,c=(0,o.l7)((0,o.l7)({isCustomElement:n,delimiters:s},i),a);r.render=vi(e,c)}}t.render=r.render||o.dG,_i&&_i(t)}ki(t),(0,i.Jd)(),fe(t),(0,i.lk)(),bi()}function Di(t){return new Proxy(t.attrs,{get(e,n){return(0,i.j)(t,"get","$attrs"),e[n]}})}function Si(t){const e=e=>{t.exposed=e||{}};let n;return{get attrs(){return n||(n=Di(t))},slots:t.slots,emit:t.emit,expose:e}}function Mi(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy((0,i.WL)((0,i.Xl)(t.exposed)),{get(e,n){return n in e?e[n]:n in li?li[n](t):void 0}}))}const Ni=/(?:^|[-_])(\w)/g,Oi=t=>t.replace(Ni,(t=>t.toUpperCase())).replace(/[-_]/g,"");function Pi(t){return(0,o.mf)(t)&&t.displayName||t.name}function Bi(t,e,n=!1){let i=Pi(e);if(!i&&e.__file){const t=e.__file.match(/([^/\\]+)\.\w+$/);t&&(i=t[1])}if(!i&&t&&t.parent){const n=t=>{for(const n in t)if(t[n]===e)return n};i=n(t.components||t.parent.type.components)||n(t.appContext.components)}return i?Oi(i):n?"App":"Anonymous"}function Li(t){return(0,o.mf)(t)&&"__vccOpts"in t}const Ri=(t,e)=>(0,i.Fl)(t,e,Ai);function ji(){return null}function zi(){return null}function Fi(t){0}function Vi(t,e){return null}function Ui(){return qi().slots}function Hi(){return qi().attrs}function qi(){const t=mi();return t.setupContext||(t.setupContext=Si(t))}function $i(t,e){const n=(0,o.kJ)(t)?t.reduce(((t,e)=>(t[e]={},t)),{}):t;for(const i in e){const t=n[i];t?(0,o.kJ)(t)||(0,o.mf)(t)?n[i]={type:t,default:e[i]}:t.default=e[i]:null===t&&(n[i]={default:e[i]})}return n}function Gi(t,e){const n={};for(const i in t)e.includes(i)||Object.defineProperty(n,i,{enumerable:!0,get:()=>t[i]});return n}function Wi(t){const e=mi();let n=t();return bi(),(0,o.tI)(n)&&(n=n.catch((t=>{throw ki(e),t}))),[n,()=>ki(e)]}function Ki(t,e,n){const i=arguments.length;return 2===i?(0,o.Kn)(e)&&!(0,o.kJ)(e)?jn(e)?$n(t,null,[e]):$n(t,e):$n(t,null,e):(i>3?n=Array.prototype.slice.call(arguments,2):3===i&&jn(n)&&(n=[n]),$n(t,e,n))}const Zi=Symbol(""),Yi=()=>{{const t=_t(Zi);return t||s("Server rendering context not provided. Make sure to only call useSSRContext() conditionally in the server build."),t}};function Qi(){return void 0}function Ji(t,e,n,i){const o=n[i];if(o&&Xi(o,t))return o;const r=e();return r.memo=t.slice(),n[i]=r}function Xi(t,e){const n=t.memo;if(n.length!=e.length)return!1;for(let i=0;i<n.length;i++)if(n[i]!==e[i])return!1;return On>0&&Dn&&Dn.push(t),!0}const to="3.2.31",eo={createComponentInstance:fi,setupComponent:Ci,renderComponentRoot:et,setCurrentRenderingInstance:Y,isVNode:jn,normalizeVNode:Jn},no=eo,io=null,oo=null},9242:function(t,e,n){"use strict";n.d(e,{P$:function(){return o.P$},sv:function(){return o.sv},Bj:function(){return o.Bj},HY:function(){return o.HY},Ob:function(){return o.Ob},qq:function(){return o.qq},qG:function(){return o.qG},n4:function(){return o.n4},lR:function(){return o.lR},xv:function(){return o.xv},$d:function(){return o.$d},KU:function(){return o.KU},_A:function(){return o._A},kC:function(){return o.kC},Ho:function(){return o.Ho},ry:function(){return o.ry},Fl:function(){return o.Fl},j4:function(){return o.j4},kq:function(){return o.kq},iD:function(){return o.iD},_:function(){return o._},Eo:function(){return o.Eo},p1:function(){return o.p1},Us:function(){return o.Us},Nv:function(){return o.Nv},uE:function(){return o.uE},Uk:function(){return o.Uk},Wm:function(){return o.Wm},ZM:function(){return o.ZM},RC:function(){return o.RC},aZ:function(){return o.aZ},Bz:function(){return o.Bz},WY:function(){return o.WY},yb:function(){return o.MW},mW:function(){return o.mW},cE:function(){return o.cE},B:function(){return o.B},FN:function(){return o.FN},nZ:function(){return o.nZ},Q6:function(){return o.Q6},F4:function(){return o.F4},h:function(){return o.h},S3:function(){return o.S3},Mr:function(){return o.Mr},f3:function(){return o.f3},nQ:function(){return o.nQ},X3:function(){return o.X3},PG:function(){return o.PG},$y:function(){return o.$y},dq:function(){return o.dq},of:function(){return o.of},yT:function(){return o.yT},lA:function(){return o.lA},Xl:function(){return o.Xl},u_:function(){return o.u_},dG:function(){return o.dG},Y3:function(){return o.Y3},C_:function(){return o.C_},vs:function(){return o.vs},j5:function(){return o.j5},dl:function(){return o.dl},wF:function(){return o.wF},Jd:function(){return o.Jd},Xn:function(){return o.Xn},se:function(){return o.se},d1:function(){return o.d1},bv:function(){return o.bv},bT:function(){return o.bT},Yq:function(){return o.Yq},EB:function(){return o.EB},vl:function(){return o.vl},SK:function(){return o.Ah},ic:function(){return o.ic},wg:function(){return o.wg},Cn:function(){return o.Cn},JJ:function(){return o.JJ},WL:function(){return o.WL},dD:function(){return o.dD},qb:function(){return o.qb},qj:function(){return o.qj},OT:function(){return o.OT},iH:function(){return o.iH},Y1:function(){return o.Y1},Ko:function(){return o.Ko},WI:function(){return o.WI},up:function(){return o.up},Q2:function(){return o.Q2},LL:function(){return o.LL},eq:function(){return o.eq},U2:function(){return o.U2},qZ:function(){return o.qZ},ec:function(){return o.ec},nK:function(){return o.nK},Um:function(){return o.Um},YS:function(){return o.YS},XI:function(){return o.XI},Uc:function(){return o.Uc},G:function(){return o.G},sT:function(){return o.sT},zw:function(){return o.zw},hR:function(){return o.hR},mx:function(){return o.mx},IU:function(){return o.IU},Vh:function(){return o.Vh},BK:function(){return o.BK},C3:function(){return o.C3},oR:function(){return o.oR},SU:function(){return o.SU},l1:function(){return o.l1},Zq:function(){return o.Zq},Rr:function(){return o.Rr},Y8:function(){return o.Y8},i8:function(){return o.i8},ZK:function(){return o.ZK},YP:function(){return o.YP},m0:function(){return o.m0},Rh:function(){return o.Rh},yX:function(){return o.yX},mv:function(){return o.mv},w5:function(){return o.w5},b9:function(){return o.b9},wy:function(){return o.wy},MX:function(){return o.MX},HX:function(){return o.HX},uT:function(){return G},W3:function(){return ht},a2:function(){return z},ri:function(){return Wt},vr:function(){return Kt},MW:function(){return L},Ah:function(){return R},ZB:function(){return Gt},Nd:function(){return Qt},sY:function(){return $t},fb:function(){return F},sj:function(){return V},e8:function(){return At},YZ:function(){return Dt},G2:function(){return yt},bM:function(){return Et},nr:function(){return _t},F8:function(){return Rt},D2:function(){return Lt},iM:function(){return Pt}});var i=n(7139),o=n(3396),r=n(4870);const s="http://www.w3.org/2000/svg",a="undefined"!==typeof document?document:null,c=a&&a.createElement("template"),l={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,i)=>{const o=e?a.createElementNS(s,t):a.createElement(t,n?{is:n}:void 0);return"select"===t&&i&&null!=i.multiple&&o.setAttribute("multiple",i.multiple),o},createText:t=>a.createTextNode(t),createComment:t=>a.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>a.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},cloneNode(t){const e=t.cloneNode(!0);return"_value"in t&&(e._value=t._value),e},insertStaticContent(t,e,n,i,o,r){const s=n?n.previousSibling:e.lastChild;if(o&&(o===r||o.nextSibling)){while(1)if(e.insertBefore(o.cloneNode(!0),n),o===r||!(o=o.nextSibling))break}else{c.innerHTML=i?`<svg>${t}</svg>`:t;const o=c.content;if(i){const t=o.firstChild;while(t.firstChild)o.appendChild(t.firstChild);o.removeChild(t)}e.insertBefore(o,n)}return[s?s.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function u(t,e,n){const i=t._vtc;i&&(e=(e?[e,...i]:[...i]).join(" ")),null==e?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function d(t,e,n){const o=t.style,r=(0,i.HD)(n);if(n&&!r){for(const t in n)p(o,t,n[t]);if(e&&!(0,i.HD)(e))for(const t in e)null==n[t]&&p(o,t,"")}else{const i=o.display;r?e!==n&&(o.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(o.display=i)}}const h=/\s*!important$/;function p(t,e,n){if((0,i.kJ)(n))n.forEach((n=>p(t,e,n)));else if(e.startsWith("--"))t.setProperty(e,n);else{const o=m(t,e);h.test(n)?t.setProperty((0,i.rs)(o),n.replace(h,""),"important"):t[o]=n}}const f=["Webkit","Moz","ms"],g={};function m(t,e){const n=g[e];if(n)return n;let o=(0,i._A)(e);if("filter"!==o&&o in t)return g[e]=o;o=(0,i.kC)(o);for(let i=0;i<f.length;i++){const n=f[i]+o;if(n in t)return g[e]=n}return e}const k="http://www.w3.org/1999/xlink";function b(t,e,n,o,r){if(o&&e.startsWith("xlink:"))null==n?t.removeAttributeNS(k,e.slice(6,e.length)):t.setAttributeNS(k,e,n);else{const o=(0,i.Pq)(e);null==n||o&&!(0,i.yA)(n)?t.removeAttribute(e):t.setAttribute(e,o?"":n)}}function w(t,e,n,o,r,s,a){if("innerHTML"===e||"textContent"===e)return o&&a(o,r,s),void(t[e]=null==n?"":n);if("value"===e&&"PROGRESS"!==t.tagName&&!t.tagName.includes("-")){t._value=n;const i=null==n?"":n;return t.value===i&&"OPTION"!==t.tagName||(t.value=i),void(null==n&&t.removeAttribute(e))}if(""===n||null==n){const o=typeof t[e];if("boolean"===o)return void(t[e]=(0,i.yA)(n));if(null==n&&"string"===o)return t[e]="",void t.removeAttribute(e);if("number"===o){try{t[e]=0}catch(c){}return void t.removeAttribute(e)}}try{t[e]=n}catch(l){0}}let v=Date.now,_=!1;if("undefined"!==typeof window){v()>document.createEvent("Event").timeStamp&&(v=()=>performance.now());const t=navigator.userAgent.match(/firefox\/(\d+)/i);_=!!(t&&Number(t[1])<=53)}let A=0;const C=Promise.resolve(),y=()=>{A=0},E=()=>A||(C.then(y),A=v());function x(t,e,n,i){t.addEventListener(e,n,i)}function I(t,e,n,i){t.removeEventListener(e,n,i)}function T(t,e,n,i,o=null){const r=t._vei||(t._vei={}),s=r[e];if(i&&s)s.value=i;else{const[n,a]=S(e);if(i){const s=r[e]=M(i,o);x(t,n,s,a)}else s&&(I(t,n,s,a),r[e]=void 0)}}const D=/(?:Once|Passive|Capture)$/;function S(t){let e;if(D.test(t)){let n;e={};while(n=t.match(D))t=t.slice(0,t.length-n[0].length),e[n[0].toLowerCase()]=!0}return[(0,i.rs)(t.slice(2)),e]}function M(t,e){const n=t=>{const i=t.timeStamp||v();(_||i>=n.attached-1)&&(0,o.$d)(N(t,n.value),e,5,[t])};return n.value=t,n.attached=E(),n}function N(t,e){if((0,i.kJ)(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map((t=>e=>!e._stopped&&t&&t(e)))}return e}const O=/^on[a-z]/,P=(t,e,n,o,r=!1,s,a,c,l)=>{"class"===e?u(t,o,r):"style"===e?d(t,n,o):(0,i.F7)(e)?(0,i.tR)(e)||T(t,e,n,o,a):("."===e[0]?(e=e.slice(1),1):"^"===e[0]?(e=e.slice(1),0):B(t,e,o,r))?w(t,e,o,s,a,c,l):("true-value"===e?t._trueValue=o:"false-value"===e&&(t._falseValue=o),b(t,e,o,r))};function B(t,e,n,o){return o?"innerHTML"===e||"textContent"===e||!!(e in t&&O.test(e)&&(0,i.mf)(n)):"spellcheck"!==e&&"draggable"!==e&&("form"!==e&&(("list"!==e||"INPUT"!==t.tagName)&&(("type"!==e||"TEXTAREA"!==t.tagName)&&((!O.test(e)||!(0,i.HD)(n))&&e in t))))}function L(t,e){const n=(0,o.aZ)(t);class i extends z{constructor(t){super(n,t,e)}}return i.def=n,i}const R=t=>L(t,Gt),j="undefined"!==typeof HTMLElement?HTMLElement:class{};class z extends j{constructor(t,e={},n){super(),this._def=t,this._props=e,this._instance=null,this._connected=!1,this._resolved=!1,this._numberProps=null,this.shadowRoot&&n?n(this._createVNode(),this.shadowRoot):this.attachShadow({mode:"open"})}connectedCallback(){this._connected=!0,this._instance||this._resolveDef()}disconnectedCallback(){this._connected=!1,(0,o.Y3)((()=>{this._connected||($t(null,this.shadowRoot),this._instance=null)}))}_resolveDef(){if(this._resolved)return;this._resolved=!0;for(let n=0;n<this.attributes.length;n++)this._setAttr(this.attributes[n].name);new MutationObserver((t=>{for(const e of t)this._setAttr(e.attributeName)})).observe(this,{attributes:!0});const t=t=>{const{props:e,styles:n}=t,o=!(0,i.kJ)(e),r=e?o?Object.keys(e):e:[];let s;if(o)for(const a in this._props){const t=e[a];(t===Number||t&&t.type===Number)&&(this._props[a]=(0,i.He)(this._props[a]),(s||(s=Object.create(null)))[a]=!0)}this._numberProps=s;for(const i of Object.keys(this))"_"!==i[0]&&this._setProp(i,this[i],!0,!1);for(const a of r.map(i._A))Object.defineProperty(this,a,{get(){return this._getProp(a)},set(t){this._setProp(a,t)}});this._applyStyles(n),this._update()},e=this._def.__asyncLoader;e?e().then(t):t(this._def)}_setAttr(t){let e=this.getAttribute(t);this._numberProps&&this._numberProps[t]&&(e=(0,i.He)(e)),this._setProp((0,i._A)(t),e,!1)}_getProp(t){return this._props[t]}_setProp(t,e,n=!0,o=!0){e!==this._props[t]&&(this._props[t]=e,o&&this._instance&&this._update(),n&&(!0===e?this.setAttribute((0,i.rs)(t),""):"string"===typeof e||"number"===typeof e?this.setAttribute((0,i.rs)(t),e+""):e||this.removeAttribute((0,i.rs)(t))))}_update(){$t(this._createVNode(),this.shadowRoot)}_createVNode(){const t=(0,o.Wm)(this._def,(0,i.l7)({},this._props));return this._instance||(t.ce=t=>{this._instance=t,t.isCE=!0,t.emit=(t,...e)=>{this.dispatchEvent(new CustomEvent(t,{detail:e}))};let e=this;while(e=e&&(e.parentNode||e.host))if(e instanceof z){t.parent=e._instance;break}}),t}_applyStyles(t){t&&t.forEach((t=>{const e=document.createElement("style");e.textContent=t,this.shadowRoot.appendChild(e)}))}}function F(t="$style"){{const e=(0,o.FN)();if(!e)return i.kT;const n=e.type.__cssModules;if(!n)return i.kT;const r=n[t];return r||i.kT}}function V(t){const e=(0,o.FN)();if(!e)return;const n=()=>U(e.subTree,t(e.proxy));(0,o.Rh)(n),(0,o.bv)((()=>{const t=new MutationObserver(n);t.observe(e.subTree.el.parentNode,{childList:!0}),(0,o.Ah)((()=>t.disconnect()))}))}function U(t,e){if(128&t.shapeFlag){const n=t.suspense;t=n.activeBranch,n.pendingBranch&&!n.isHydrating&&n.effects.push((()=>{U(n.activeBranch,e)}))}while(t.component)t=t.component.subTree;if(1&t.shapeFlag&&t.el)H(t.el,e);else if(t.type===o.HY)t.children.forEach((t=>U(t,e)));else if(t.type===o.qG){let{el:n,anchor:i}=t;while(n){if(H(n,e),n===i)break;n=n.nextSibling}}}function H(t,e){if(1===t.nodeType){const n=t.style;for(const t in e)n.setProperty(`--${t}`,e[t])}}const q="transition",$="animation",G=(t,{slots:e})=>(0,o.h)(o.P$,Q(t),e);G.displayName="Transition";const W={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},K=G.props=(0,i.l7)({},o.P$.props,W),Z=(t,e=[])=>{(0,i.kJ)(t)?t.forEach((t=>t(...e))):t&&t(...e)},Y=t=>!!t&&((0,i.kJ)(t)?t.some((t=>t.length>1)):t.length>1);function Q(t){const e={};for(const i in t)i in W||(e[i]=t[i]);if(!1===t.css)return e;const{name:n="v",type:o,duration:r,enterFromClass:s=`${n}-enter-from`,enterActiveClass:a=`${n}-enter-active`,enterToClass:c=`${n}-enter-to`,appearFromClass:l=s,appearActiveClass:u=a,appearToClass:d=c,leaveFromClass:h=`${n}-leave-from`,leaveActiveClass:p=`${n}-leave-active`,leaveToClass:f=`${n}-leave-to`}=t,g=J(r),m=g&&g[0],k=g&&g[1],{onBeforeEnter:b,onEnter:w,onEnterCancelled:v,onLeave:_,onLeaveCancelled:A,onBeforeAppear:C=b,onAppear:y=w,onAppearCancelled:E=v}=e,x=(t,e,n)=>{et(t,e?d:c),et(t,e?u:a),n&&n()},I=(t,e)=>{et(t,f),et(t,p),e&&e()},T=t=>(e,n)=>{const i=t?y:w,r=()=>x(e,t,n);Z(i,[e,r]),nt((()=>{et(e,t?l:s),tt(e,t?d:c),Y(i)||ot(e,o,m,r)}))};return(0,i.l7)(e,{onBeforeEnter(t){Z(b,[t]),tt(t,s),tt(t,a)},onBeforeAppear(t){Z(C,[t]),tt(t,l),tt(t,u)},onEnter:T(!1),onAppear:T(!0),onLeave(t,e){const n=()=>I(t,e);tt(t,h),ct(),tt(t,p),nt((()=>{et(t,h),tt(t,f),Y(_)||ot(t,o,k,n)})),Z(_,[t,n])},onEnterCancelled(t){x(t,!1),Z(v,[t])},onAppearCancelled(t){x(t,!0),Z(E,[t])},onLeaveCancelled(t){I(t),Z(A,[t])}})}function J(t){if(null==t)return null;if((0,i.Kn)(t))return[X(t.enter),X(t.leave)];{const e=X(t);return[e,e]}}function X(t){const e=(0,i.He)(t);return e}function tt(t,e){e.split(/\s+/).forEach((e=>e&&t.classList.add(e))),(t._vtc||(t._vtc=new Set)).add(e)}function et(t,e){e.split(/\s+/).forEach((e=>e&&t.classList.remove(e)));const{_vtc:n}=t;n&&(n.delete(e),n.size||(t._vtc=void 0))}function nt(t){requestAnimationFrame((()=>{requestAnimationFrame(t)}))}let it=0;function ot(t,e,n,i){const o=t._endId=++it,r=()=>{o===t._endId&&i()};if(n)return setTimeout(r,n);const{type:s,timeout:a,propCount:c}=rt(t,e);if(!s)return i();const l=s+"end";let u=0;const d=()=>{t.removeEventListener(l,h),r()},h=e=>{e.target===t&&++u>=c&&d()};setTimeout((()=>{u<c&&d()}),a+1),t.addEventListener(l,h)}function rt(t,e){const n=window.getComputedStyle(t),i=t=>(n[t]||"").split(", "),o=i(q+"Delay"),r=i(q+"Duration"),s=st(o,r),a=i($+"Delay"),c=i($+"Duration"),l=st(a,c);let u=null,d=0,h=0;e===q?s>0&&(u=q,d=s,h=r.length):e===$?l>0&&(u=$,d=l,h=c.length):(d=Math.max(s,l),u=d>0?s>l?q:$:null,h=u?u===q?r.length:c.length:0);const p=u===q&&/\b(transform|all)(,|$)/.test(n[q+"Property"]);return{type:u,timeout:d,propCount:h,hasTransform:p}}function st(t,e){while(t.length<e.length)t=t.concat(t);return Math.max(...e.map(((e,n)=>at(e)+at(t[n]))))}function at(t){return 1e3*Number(t.slice(0,-1).replace(",","."))}function ct(){return document.body.offsetHeight}const lt=new WeakMap,ut=new WeakMap,dt={name:"TransitionGroup",props:(0,i.l7)({},K,{tag:String,moveClass:String}),setup(t,{slots:e}){const n=(0,o.FN)(),i=(0,o.Y8)();let s,a;return(0,o.ic)((()=>{if(!s.length)return;const e=t.moveClass||`${t.name||"v"}-move`;if(!mt(s[0].el,n.vnode.el,e))return;s.forEach(pt),s.forEach(ft);const i=s.filter(gt);ct(),i.forEach((t=>{const n=t.el,i=n.style;tt(n,e),i.transform=i.webkitTransform=i.transitionDuration="";const o=n._moveCb=t=>{t&&t.target!==n||t&&!/transform$/.test(t.propertyName)||(n.removeEventListener("transitionend",o),n._moveCb=null,et(n,e))};n.addEventListener("transitionend",o)}))})),()=>{const c=(0,r.IU)(t),l=Q(c);let u=c.tag||o.HY;s=a,a=e.default?(0,o.Q6)(e.default()):[];for(let t=0;t<a.length;t++){const e=a[t];null!=e.key&&(0,o.nK)(e,(0,o.U2)(e,l,i,n))}if(s)for(let t=0;t<s.length;t++){const e=s[t];(0,o.nK)(e,(0,o.U2)(e,l,i,n)),lt.set(e,e.el.getBoundingClientRect())}return(0,o.Wm)(u,null,a)}}},ht=dt;function pt(t){const e=t.el;e._moveCb&&e._moveCb(),e._enterCb&&e._enterCb()}function ft(t){ut.set(t,t.el.getBoundingClientRect())}function gt(t){const e=lt.get(t),n=ut.get(t),i=e.left-n.left,o=e.top-n.top;if(i||o){const e=t.el.style;return e.transform=e.webkitTransform=`translate(${i}px,${o}px)`,e.transitionDuration="0s",t}}function mt(t,e,n){const i=t.cloneNode();t._vtc&&t._vtc.forEach((t=>{t.split(/\s+/).forEach((t=>t&&i.classList.remove(t)))})),n.split(/\s+/).forEach((t=>t&&i.classList.add(t))),i.style.display="none";const o=1===e.nodeType?e:e.parentNode;o.appendChild(i);const{hasTransform:r}=rt(i);return o.removeChild(i),r}const kt=t=>{const e=t.props["onUpdate:modelValue"];return(0,i.kJ)(e)?t=>(0,i.ir)(e,t):e};function bt(t){t.target.composing=!0}function wt(t){const e=t.target;e.composing&&(e.composing=!1,vt(e,"input"))}function vt(t,e){const n=document.createEvent("HTMLEvents");n.initEvent(e,!0,!0),t.dispatchEvent(n)}const _t={created(t,{modifiers:{lazy:e,trim:n,number:o}},r){t._assign=kt(r);const s=o||r.props&&"number"===r.props.type;x(t,e?"change":"input",(e=>{if(e.target.composing)return;let o=t.value;n?o=o.trim():s&&(o=(0,i.He)(o)),t._assign(o)})),n&&x(t,"change",(()=>{t.value=t.value.trim()})),e||(x(t,"compositionstart",bt),x(t,"compositionend",wt),x(t,"change",wt))},mounted(t,{value:e}){t.value=null==e?"":e},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:o,number:r}},s){if(t._assign=kt(s),t.composing)return;if(document.activeElement===t){if(n)return;if(o&&t.value.trim()===e)return;if((r||"number"===t.type)&&(0,i.He)(t.value)===e)return}const a=null==e?"":e;t.value!==a&&(t.value=a)}},At={deep:!0,created(t,e,n){t._assign=kt(n),x(t,"change",(()=>{const e=t._modelValue,n=It(t),o=t.checked,r=t._assign;if((0,i.kJ)(e)){const t=(0,i.hq)(e,n),s=-1!==t;if(o&&!s)r(e.concat(n));else if(!o&&s){const n=[...e];n.splice(t,1),r(n)}}else if((0,i.DM)(e)){const t=new Set(e);o?t.add(n):t.delete(n),r(t)}else r(Tt(t,o))}))},mounted:Ct,beforeUpdate(t,e,n){t._assign=kt(n),Ct(t,e,n)}};function Ct(t,{value:e,oldValue:n},o){t._modelValue=e,(0,i.kJ)(e)?t.checked=(0,i.hq)(e,o.props.value)>-1:(0,i.DM)(e)?t.checked=e.has(o.props.value):e!==n&&(t.checked=(0,i.WV)(e,Tt(t,!0)))}const yt={created(t,{value:e},n){t.checked=(0,i.WV)(e,n.props.value),t._assign=kt(n),x(t,"change",(()=>{t._assign(It(t))}))},beforeUpdate(t,{value:e,oldValue:n},o){t._assign=kt(o),e!==n&&(t.checked=(0,i.WV)(e,o.props.value))}},Et={deep:!0,created(t,{value:e,modifiers:{number:n}},o){const r=(0,i.DM)(e);x(t,"change",(()=>{const e=Array.prototype.filter.call(t.options,(t=>t.selected)).map((t=>n?(0,i.He)(It(t)):It(t)));t._assign(t.multiple?r?new Set(e):e:e[0])})),t._assign=kt(o)},mounted(t,{value:e}){xt(t,e)},beforeUpdate(t,e,n){t._assign=kt(n)},updated(t,{value:e}){xt(t,e)}};function xt(t,e){const n=t.multiple;if(!n||(0,i.kJ)(e)||(0,i.DM)(e)){for(let o=0,r=t.options.length;o<r;o++){const r=t.options[o],s=It(r);if(n)(0,i.kJ)(e)?r.selected=(0,i.hq)(e,s)>-1:r.selected=e.has(s);else if((0,i.WV)(It(r),e))return void(t.selectedIndex!==o&&(t.selectedIndex=o))}n||-1===t.selectedIndex||(t.selectedIndex=-1)}}function It(t){return"_value"in t?t._value:t.value}function Tt(t,e){const n=e?"_trueValue":"_falseValue";return n in t?t[n]:e}const Dt={created(t,e,n){St(t,e,n,null,"created")},mounted(t,e,n){St(t,e,n,null,"mounted")},beforeUpdate(t,e,n,i){St(t,e,n,i,"beforeUpdate")},updated(t,e,n,i){St(t,e,n,i,"updated")}};function St(t,e,n,i,o){let r;switch(t.tagName){case"SELECT":r=Et;break;case"TEXTAREA":r=_t;break;default:switch(n.props&&n.props.type){case"checkbox":r=At;break;case"radio":r=yt;break;default:r=_t}}const s=r[o];s&&s(t,e,n,i)}function Mt(){_t.getSSRProps=({value:t})=>({value:t}),yt.getSSRProps=({value:t},e)=>{if(e.props&&(0,i.WV)(e.props.value,t))return{checked:!0}},At.getSSRProps=({value:t},e)=>{if((0,i.kJ)(t)){if(e.props&&(0,i.hq)(t,e.props.value)>-1)return{checked:!0}}else if((0,i.DM)(t)){if(e.props&&t.has(e.props.value))return{checked:!0}}else if(t)return{checked:!0}}}const Nt=["ctrl","shift","alt","meta"],Ot={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&0!==t.button,middle:t=>"button"in t&&1!==t.button,right:t=>"button"in t&&2!==t.button,exact:(t,e)=>Nt.some((n=>t[`${n}Key`]&&!e.includes(n)))},Pt=(t,e)=>(n,...i)=>{for(let t=0;t<e.length;t++){const i=Ot[e[t]];if(i&&i(n,e))return}return t(n,...i)},Bt={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},Lt=(t,e)=>n=>{if(!("key"in n))return;const o=(0,i.rs)(n.key);return e.some((t=>t===o||Bt[t]===o))?t(n):void 0},Rt={beforeMount(t,{value:e},{transition:n}){t._vod="none"===t.style.display?"":t.style.display,n&&e?n.beforeEnter(t):jt(t,e)},mounted(t,{value:e},{transition:n}){n&&e&&n.enter(t)},updated(t,{value:e,oldValue:n},{transition:i}){!e!==!n&&(i?e?(i.beforeEnter(t),jt(t,!0),i.enter(t)):i.leave(t,(()=>{jt(t,!1)})):jt(t,e))},beforeUnmount(t,{value:e}){jt(t,e)}};function jt(t,e){t.style.display=e?t._vod:"none"}function zt(){Rt.getSSRProps=({value:t})=>{if(!t)return{style:{display:"none"}}}}const Ft=(0,i.l7)({patchProp:P},l);let Vt,Ut=!1;function Ht(){return Vt||(Vt=(0,o.Us)(Ft))}function qt(){return Vt=Ut?Vt:(0,o.Eo)(Ft),Ut=!0,Vt}const $t=(...t)=>{Ht().render(...t)},Gt=(...t)=>{qt().hydrate(...t)},Wt=(...t)=>{const e=Ht().createApp(...t);const{mount:n}=e;return e.mount=t=>{const o=Zt(t);if(!o)return;const r=e._component;(0,i.mf)(r)||r.render||r.template||(r.template=o.innerHTML),o.innerHTML="";const s=n(o,!1,o instanceof SVGElement);return o instanceof Element&&(o.removeAttribute("v-cloak"),o.setAttribute("data-v-app","")),s},e},Kt=(...t)=>{const e=qt().createApp(...t);const{mount:n}=e;return e.mount=t=>{const e=Zt(t);if(e)return n(e,!0,e instanceof SVGElement)},e};function Zt(t){if((0,i.HD)(t)){const e=document.querySelector(t);return e}return t}let Yt=!1;const Qt=()=>{Yt||(Yt=!0,Mt(),zt())}},7139:function(t,e,n){"use strict";function i(t,e){const n=Object.create(null),i=t.split(",");for(let o=0;o<i.length;o++)n[i[o]]=!0;return e?t=>!!n[t.toLowerCase()]:t=>!!n[t]}n.d(e,{Z6:function(){return _},kT:function(){return v},NO:function(){return C},dG:function(){return A},_A:function(){return K},kC:function(){return Q},Nj:function(){return et},l7:function(){return I},E9:function(){return ot},aU:function(){return X},RI:function(){return S},rs:function(){return Y},yA:function(){return c},ir:function(){return tt},kJ:function(){return M},mf:function(){return B},e1:function(){return r},S0:function(){return q},_N:function(){return N},tR:function(){return x},Kn:function(){return j},F7:function(){return E},PO:function(){return H},tI:function(){return z},Gg:function(){return $},DM:function(){return O},Pq:function(){return a},HD:function(){return L},yk:function(){return R},WV:function(){return m},hq:function(){return k},fY:function(){return i},C_:function(){return p},vs:function(){return f},j5:function(){return l},Od:function(){return T},zw:function(){return b},hR:function(){return J},He:function(){return nt},W7:function(){return U}});const o="Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt",r=i(o);const s="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",a=i(s);function c(t){return!!t||""===t}function l(t){if(M(t)){const e={};for(let n=0;n<t.length;n++){const i=t[n],o=L(i)?h(i):l(i);if(o)for(const t in o)e[t]=o[t]}return e}return L(t)||j(t)?t:void 0}const u=/;(?![^(]*\))/g,d=/:(.+)/;function h(t){const e={};return t.split(u).forEach((t=>{if(t){const n=t.split(d);n.length>1&&(e[n[0].trim()]=n[1].trim())}})),e}function p(t){let e="";if(L(t))e=t;else if(M(t))for(let n=0;n<t.length;n++){const i=p(t[n]);i&&(e+=i+" ")}else if(j(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}function f(t){if(!t)return null;let{class:e,style:n}=t;return e&&!L(e)&&(t.class=p(e)),n&&(t.style=l(n)),t}function g(t,e){if(t.length!==e.length)return!1;let n=!0;for(let i=0;n&&i<t.length;i++)n=m(t[i],e[i]);return n}function m(t,e){if(t===e)return!0;let n=P(t),i=P(e);if(n||i)return!(!n||!i)&&t.getTime()===e.getTime();if(n=M(t),i=M(e),n||i)return!(!n||!i)&&g(t,e);if(n=j(t),i=j(e),n||i){if(!n||!i)return!1;const o=Object.keys(t).length,r=Object.keys(e).length;if(o!==r)return!1;for(const n in t){const i=t.hasOwnProperty(n),o=e.hasOwnProperty(n);if(i&&!o||!i&&o||!m(t[n],e[n]))return!1}}return String(t)===String(e)}function k(t,e){return t.findIndex((t=>m(t,e)))}const b=t=>L(t)?t:null==t?"":M(t)||j(t)&&(t.toString===F||!B(t.toString))?JSON.stringify(t,w,2):String(t),w=(t,e)=>e&&e.__v_isRef?w(t,e.value):N(e)?{[`Map(${e.size})`]:[...e.entries()].reduce(((t,[e,n])=>(t[`${e} =>`]=n,t)),{})}:O(e)?{[`Set(${e.size})`]:[...e.values()]}:!j(e)||M(e)||H(e)?e:String(e),v={},_=[],A=()=>{},C=()=>!1,y=/^on[^a-z]/,E=t=>y.test(t),x=t=>t.startsWith("onUpdate:"),I=Object.assign,T=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},D=Object.prototype.hasOwnProperty,S=(t,e)=>D.call(t,e),M=Array.isArray,N=t=>"[object Map]"===V(t),O=t=>"[object Set]"===V(t),P=t=>t instanceof Date,B=t=>"function"===typeof t,L=t=>"string"===typeof t,R=t=>"symbol"===typeof t,j=t=>null!==t&&"object"===typeof t,z=t=>j(t)&&B(t.then)&&B(t.catch),F=Object.prototype.toString,V=t=>F.call(t),U=t=>V(t).slice(8,-1),H=t=>"[object Object]"===V(t),q=t=>L(t)&&"NaN"!==t&&"-"!==t[0]&&""+parseInt(t,10)===t,$=i(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),G=t=>{const e=Object.create(null);return n=>{const i=e[n];return i||(e[n]=t(n))}},W=/-(\w)/g,K=G((t=>t.replace(W,((t,e)=>e?e.toUpperCase():"")))),Z=/\B([A-Z])/g,Y=G((t=>t.replace(Z,"-$1").toLowerCase())),Q=G((t=>t.charAt(0).toUpperCase()+t.slice(1))),J=G((t=>t?`on${Q(t)}`:"")),X=(t,e)=>!Object.is(t,e),tt=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},et=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},nt=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let it;const ot=()=>it||(it="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof self?self:"undefined"!==typeof window?window:"undefined"!==typeof n.g?n.g:{})},3029:function(t,e,n){"use strict";n.d(e,{Z:function(){return d}});const i="undefined"!==typeof crypto&&crypto.randomUUID&&crypto.randomUUID.bind(crypto);var o={randomUUID:i};n(8675),n(3462),n(1703);let r;const s=new Uint8Array(16);function a(){if(!r&&(r="undefined"!==typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!r))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return r(s)}const c=[];for(let h=0;h<256;++h)c.push((h+256).toString(16).slice(1));function l(t,e=0){return c[t[e+0]]+c[t[e+1]]+c[t[e+2]]+c[t[e+3]]+"-"+c[t[e+4]]+c[t[e+5]]+"-"+c[t[e+6]]+c[t[e+7]]+"-"+c[t[e+8]]+c[t[e+9]]+"-"+c[t[e+10]]+c[t[e+11]]+c[t[e+12]]+c[t[e+13]]+c[t[e+14]]+c[t[e+15]]}function u(t,e,n){if(o.randomUUID&&!e&&!t)return o.randomUUID();t=t||{};const i=t.random||(t.rng||a)();if(i[6]=15&i[6]|64,i[8]=63&i[8]|128,e){n=n||0;for(let t=0;t<16;++t)e[n+t]=i[t];return e}return l(i)}var d=u},4329:function(t,e,n){"use strict";n.d(e,{o:function(){return Qe}});const i="function"===typeof Symbol&&"symbol"===typeof Symbol.toStringTag,o=t=>i?Symbol(t):t,r=(t,e,n)=>s({l:t,k:e,s:n}),s=t=>JSON.stringify(t).replace(/\u2028/g,"\\u2028").replace(/\u2029/g,"\\u2029").replace(/\u0027/g,"\\u0027"),a=t=>"number"===typeof t&&isFinite(t),c=t=>"[object Date]"===y(t),l=t=>"[object RegExp]"===y(t),u=t=>E(t)&&0===Object.keys(t).length;function d(t,e){"undefined"!==typeof console&&(console.warn("[intlify] "+t),e&&console.warn(e.stack))}const h=Object.assign;let p;const f=()=>p||(p="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof self?self:"undefined"!==typeof window?window:"undefined"!==typeof n.g?n.g:{});function g(t){return t.replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&apos;")}const m=Object.prototype.hasOwnProperty;function k(t,e){return m.call(t,e)}const b=Array.isArray,w=t=>"function"===typeof t,v=t=>"string"===typeof t,_=t=>"boolean"===typeof t,A=t=>null!==t&&"object"===typeof t,C=Object.prototype.toString,y=t=>C.call(t),E=t=>"[object Object]"===y(t),x=t=>null==t?"":b(t)||E(t)&&t.toString===C?JSON.stringify(t,null,2):String(t);const I=Object.prototype.hasOwnProperty;function T(t,e){return I.call(t,e)}const D=t=>null!==t&&"object"===typeof t,S=[];S[0]={["w"]:[0],["i"]:[3,0],["["]:[4],["o"]:[7]},S[1]={["w"]:[1],["."]:[2],["["]:[4],["o"]:[7]},S[2]={["w"]:[2],["i"]:[3,0],["0"]:[3,0]},S[3]={["i"]:[3,0],["0"]:[3,0],["w"]:[1,1],["."]:[2,1],["["]:[4,1],["o"]:[7,1]},S[4]={["'"]:[5,0],['"']:[6,0],["["]:[4,2],["]"]:[1,3],["o"]:8,["l"]:[4,0]},S[5]={["'"]:[4,0],["o"]:8,["l"]:[5,0]},S[6]={['"']:[4,0],["o"]:8,["l"]:[6,0]};const M=/^\s?(?:true|false|-?[\d.]+|'[^']*'|"[^"]*")\s?$/;function N(t){return M.test(t)}function O(t){const e=t.charCodeAt(0),n=t.charCodeAt(t.length-1);return e!==n||34!==e&&39!==e?t:t.slice(1,-1)}function P(t){if(void 0===t||null===t)return"o";const e=t.charCodeAt(0);switch(e){case 91:case 93:case 46:case 34:case 39:return t;case 95:case 36:case 45:return"i";case 9:case 10:case 13:case 160:case 65279:case 8232:case 8233:return"w"}return"i"}function B(t){const e=t.trim();return("0"!==t.charAt(0)||!isNaN(parseInt(t)))&&(N(e)?O(e):"*"+e)}function L(t){const e=[];let n,i,o,r,s,a,c,l=-1,u=0,d=0;const h=[];function p(){const e=t[l+1];if(5===u&&"'"===e||6===u&&'"'===e)return l++,o="\\"+e,h[0](),!0}h[0]=()=>{void 0===i?i=o:i+=o},h[1]=()=>{void 0!==i&&(e.push(i),i=void 0)},h[2]=()=>{h[0](),d++},h[3]=()=>{if(d>0)d--,u=4,h[0]();else{if(d=0,void 0===i)return!1;if(i=B(i),!1===i)return!1;h[1]()}};while(null!==u)if(l++,n=t[l],"\\"!==n||!p()){if(r=P(n),c=S[u],s=c[r]||c["l"]||8,8===s)return;if(u=s[0],void 0!==s[1]&&(a=h[s[1]],a&&(o=n,!1===a())))return;if(7===u)return e}}const R=new Map;function j(t,e){if(!D(t))return null;let n=R.get(e);if(n||(n=L(e),n&&R.set(e,n)),!n)return null;const i=n.length;let o=t,r=0;while(r<i){const t=o[n[r]];if(void 0===t)return null;o=t,r++}return o}function z(t){if(!D(t))return t;for(const e in t)if(T(t,e))if(e.includes(".")){const n=e.split("."),i=n.length-1;let o=t;for(let t=0;t<i;t++)n[t]in o||(o[n[t]]={}),o=o[n[t]];o[n[i]]=t[e],delete t[e],D(o[n[i]])&&z(o[n[i]])}else D(t[e])&&z(t[e]);return t}
/*!
  * @intlify/runtime v9.1.10
  * (c) 2022 kazuya kawaguchi
  * Released under the MIT License.
  */
const F=t=>t,V=t=>"",U="text",H=t=>0===t.length?"":t.join(""),q=x;function $(t,e){return t=Math.abs(t),2===e?t?t>1?1:0:1:t?Math.min(t,2):0}function G(t){const e=a(t.pluralIndex)?t.pluralIndex:-1;return t.named&&(a(t.named.count)||a(t.named.n))?a(t.named.count)?t.named.count:a(t.named.n)?t.named.n:e:e}function W(t,e){e.count||(e.count=t),e.n||(e.n=t)}function K(t={}){const e=t.locale,n=G(t),i=A(t.pluralRules)&&v(e)&&w(t.pluralRules[e])?t.pluralRules[e]:$,o=A(t.pluralRules)&&v(e)&&w(t.pluralRules[e])?$:void 0,r=t=>t[i(n,t.length,o)],s=t.list||[],c=t=>s[t],l=t.named||{};a(t.pluralIndex)&&W(n,l);const u=t=>l[t];function d(e){const n=w(t.messages)?t.messages(e):!!A(t.messages)&&t.messages[e];return n||(t.parent?t.parent.message(e):V)}const h=e=>t.modifiers?t.modifiers[e]:F,p=E(t.processor)&&w(t.processor.normalize)?t.processor.normalize:H,f=E(t.processor)&&w(t.processor.interpolate)?t.processor.interpolate:q,g=E(t.processor)&&v(t.processor.type)?t.processor.type:U,m={["list"]:c,["named"]:u,["plural"]:r,["linked"]:(t,e)=>{const n=d(t)(m);return v(e)?h(e)(n):n},["message"]:d,["type"]:g,["interpolate"]:f,["normalize"]:p};return m}n(1703);function Z(t,e,n={}){const{domain:i,messages:o,args:r}=n,s=t,a=new SyntaxError(String(s));return a.code=t,e&&(a.location=e),a.domain=i,a}function Y(t){throw t}function Q(t,e,n){return{line:t,column:e,offset:n}}function J(t,e,n){const i={start:t,end:e};return null!=n&&(i.source=n),i}const X=" ",tt="\r",et="\n",nt=String.fromCharCode(8232),it=String.fromCharCode(8233);function ot(t){const e=t;let n=0,i=1,o=1,r=0;const s=t=>e[t]===tt&&e[t+1]===et,a=t=>e[t]===et,c=t=>e[t]===it,l=t=>e[t]===nt,u=t=>s(t)||a(t)||c(t)||l(t),d=()=>n,h=()=>i,p=()=>o,f=()=>r,g=t=>s(t)||c(t)||l(t)?et:e[t],m=()=>g(n),k=()=>g(n+r);function b(){return r=0,u(n)&&(i++,o=0),s(n)&&n++,n++,o++,e[n]}function w(){return s(n+r)&&r++,r++,e[n+r]}function v(){n=0,i=1,o=1,r=0}function _(t=0){r=t}function A(){const t=n+r;while(t!==n)b();r=0}return{index:d,line:h,column:p,peekOffset:f,charAt:g,currentChar:m,currentPeek:k,next:b,peek:w,reset:v,resetPeek:_,skipToPeek:A}}const rt=void 0,st="'",at="tokenizer";function ct(t,e={}){const n=!1!==e.location,i=ot(t),o=()=>i.index(),r=()=>Q(i.line(),i.column(),i.index()),s=r(),a=o(),c={currentType:14,offset:a,startLoc:s,endLoc:s,lastType:14,lastOffset:a,lastStartLoc:s,lastEndLoc:s,braceNest:0,inLinked:!1,text:""},l=()=>c,{onError:u}=e;function d(t,e,n,...i){const o=l();if(e.column+=n,e.offset+=n,u){const n=J(o.startLoc,e),r=Z(t,n,{domain:at,args:i});u(r)}}function h(t,e,i){t.endLoc=r(),t.currentType=e;const o={type:e};return n&&(o.loc=J(t.startLoc,t.endLoc)),null!=i&&(o.value=i),o}const p=t=>h(t,14);function f(t,e){return t.currentChar()===e?(t.next(),e):(d(0,r(),0,e),"")}function g(t){let e="";while(t.currentPeek()===X||t.currentPeek()===et)e+=t.currentPeek(),t.peek();return e}function m(t){const e=g(t);return t.skipToPeek(),e}function k(t){if(t===rt)return!1;const e=t.charCodeAt(0);return e>=97&&e<=122||e>=65&&e<=90||95===e}function b(t){if(t===rt)return!1;const e=t.charCodeAt(0);return e>=48&&e<=57}function w(t,e){const{currentType:n}=e;if(2!==n)return!1;g(t);const i=k(t.currentPeek());return t.resetPeek(),i}function v(t,e){const{currentType:n}=e;if(2!==n)return!1;g(t);const i="-"===t.currentPeek()?t.peek():t.currentPeek(),o=b(i);return t.resetPeek(),o}function _(t,e){const{currentType:n}=e;if(2!==n)return!1;g(t);const i=t.currentPeek()===st;return t.resetPeek(),i}function A(t,e){const{currentType:n}=e;if(8!==n)return!1;g(t);const i="."===t.currentPeek();return t.resetPeek(),i}function C(t,e){const{currentType:n}=e;if(9!==n)return!1;g(t);const i=k(t.currentPeek());return t.resetPeek(),i}function y(t,e){const{currentType:n}=e;if(8!==n&&12!==n)return!1;g(t);const i=":"===t.currentPeek();return t.resetPeek(),i}function E(t,e){const{currentType:n}=e;if(10!==n)return!1;const i=()=>{const e=t.currentPeek();return"{"===e?k(t.peek()):!("@"===e||"%"===e||"|"===e||":"===e||"."===e||e===X||!e)&&(e===et?(t.peek(),i()):k(e))},o=i();return t.resetPeek(),o}function x(t){g(t);const e="|"===t.currentPeek();return t.resetPeek(),e}function I(t,e=!0){const n=(e=!1,i="",o=!1)=>{const r=t.currentPeek();return"{"===r?"%"!==i&&e:"@"!==r&&r?"%"===r?(t.peek(),n(e,"%",!0)):"|"===r?!("%"!==i&&!o)||!(i===X||i===et):r===X?(t.peek(),n(!0,X,o)):r!==et||(t.peek(),n(!0,et,o)):"%"===i||e},i=n();return e&&t.resetPeek(),i}function T(t,e){const n=t.currentChar();return n===rt?rt:e(n)?(t.next(),n):null}function D(t){const e=t=>{const e=t.charCodeAt(0);return e>=97&&e<=122||e>=65&&e<=90||e>=48&&e<=57||95===e||36===e};return T(t,e)}function S(t){const e=t=>{const e=t.charCodeAt(0);return e>=48&&e<=57};return T(t,e)}function M(t){const e=t=>{const e=t.charCodeAt(0);return e>=48&&e<=57||e>=65&&e<=70||e>=97&&e<=102};return T(t,e)}function N(t){let e="",n="";while(e=S(t))n+=e;return n}function O(t){let e="";while(1){const n=t.currentChar();if("{"===n||"}"===n||"@"===n||"|"===n||!n)break;if("%"===n){if(!I(t))break;e+=n,t.next()}else if(n===X||n===et)if(I(t))e+=n,t.next();else{if(x(t))break;e+=n,t.next()}else e+=n,t.next()}return e}function P(t){m(t);let e="",n="";while(e=D(t))n+=e;return t.currentChar()===rt&&d(6,r(),0),n}function B(t){m(t);let e="";return"-"===t.currentChar()?(t.next(),e+=`-${N(t)}`):e+=N(t),t.currentChar()===rt&&d(6,r(),0),e}function L(t){m(t),f(t,"'");let e="",n="";const i=t=>t!==st&&t!==et;while(e=T(t,i))n+="\\"===e?R(t):e;const o=t.currentChar();return o===et||o===rt?(d(2,r(),0),o===et&&(t.next(),f(t,"'")),n):(f(t,"'"),n)}function R(t){const e=t.currentChar();switch(e){case"\\":case"'":return t.next(),`\\${e}`;case"u":return j(t,e,4);case"U":return j(t,e,6);default:return d(3,r(),0,e),""}}function j(t,e,n){f(t,e);let i="";for(let o=0;o<n;o++){const n=M(t);if(!n){d(4,r(),0,`\\${e}${i}${t.currentChar()}`);break}i+=n}return`\\${e}${i}`}function z(t){m(t);let e="",n="";const i=t=>"{"!==t&&"}"!==t&&t!==X&&t!==et;while(e=T(t,i))n+=e;return n}function F(t){let e="",n="";while(e=D(t))n+=e;return n}function V(t){const e=(n=!1,i)=>{const o=t.currentChar();return"{"!==o&&"%"!==o&&"@"!==o&&"|"!==o&&o?o===X?i:o===et?(i+=o,t.next(),e(n,i)):(i+=o,t.next(),e(!0,i)):i};return e(!1,"")}function U(t){m(t);const e=f(t,"|");return m(t),e}function H(t,e){let n=null;const i=t.currentChar();switch(i){case"{":return e.braceNest>=1&&d(8,r(),0),t.next(),n=h(e,2,"{"),m(t),e.braceNest++,n;case"}":return e.braceNest>0&&2===e.currentType&&d(7,r(),0),t.next(),n=h(e,3,"}"),e.braceNest--,e.braceNest>0&&m(t),e.inLinked&&0===e.braceNest&&(e.inLinked=!1),n;case"@":return e.braceNest>0&&d(6,r(),0),n=q(t,e)||p(e),e.braceNest=0,n;default:let i=!0,o=!0,s=!0;if(x(t))return e.braceNest>0&&d(6,r(),0),n=h(e,1,U(t)),e.braceNest=0,e.inLinked=!1,n;if(e.braceNest>0&&(5===e.currentType||6===e.currentType||7===e.currentType))return d(6,r(),0),e.braceNest=0,$(t,e);if(i=w(t,e))return n=h(e,5,P(t)),m(t),n;if(o=v(t,e))return n=h(e,6,B(t)),m(t),n;if(s=_(t,e))return n=h(e,7,L(t)),m(t),n;if(!i&&!o&&!s)return n=h(e,13,z(t)),d(1,r(),0,n.value),m(t),n;break}return n}function q(t,e){const{currentType:n}=e;let i=null;const o=t.currentChar();switch(8!==n&&9!==n&&12!==n&&10!==n||o!==et&&o!==X||d(9,r(),0),o){case"@":return t.next(),i=h(e,8,"@"),e.inLinked=!0,i;case".":return m(t),t.next(),h(e,9,".");case":":return m(t),t.next(),h(e,10,":");default:return x(t)?(i=h(e,1,U(t)),e.braceNest=0,e.inLinked=!1,i):A(t,e)||y(t,e)?(m(t),q(t,e)):C(t,e)?(m(t),h(e,12,F(t))):E(t,e)?(m(t),"{"===o?H(t,e)||i:h(e,11,V(t))):(8===n&&d(9,r(),0),e.braceNest=0,e.inLinked=!1,$(t,e))}}function $(t,e){let n={type:14};if(e.braceNest>0)return H(t,e)||p(e);if(e.inLinked)return q(t,e)||p(e);const i=t.currentChar();switch(i){case"{":return H(t,e)||p(e);case"}":return d(5,r(),0),t.next(),h(e,3,"}");case"@":return q(t,e)||p(e);default:if(x(t))return n=h(e,1,U(t)),e.braceNest=0,e.inLinked=!1,n;if(I(t))return h(e,0,O(t));if("%"===i)return t.next(),h(e,4,"%");break}return n}function G(){const{currentType:t,offset:e,startLoc:n,endLoc:s}=c;return c.lastType=t,c.lastOffset=e,c.lastStartLoc=n,c.lastEndLoc=s,c.offset=o(),c.startLoc=r(),i.currentChar()===rt?h(c,14):$(i,c)}return{nextToken:G,currentOffset:o,currentPosition:r,context:l}}const lt="parser",ut=/(?:\\\\|\\'|\\u([0-9a-fA-F]{4})|\\U([0-9a-fA-F]{6}))/g;function dt(t,e,n){switch(t){case"\\\\":return"\\";case"\\'":return"'";default:{const t=parseInt(e||n,16);return t<=55295||t>=57344?String.fromCodePoint(t):"�"}}}function ht(t={}){const e=!1!==t.location,{onError:n}=t;function i(t,e,i,o,...r){const s=t.currentPosition();if(s.offset+=o,s.column+=o,n){const t=J(i,s),o=Z(e,t,{domain:lt,args:r});n(o)}}function o(t,n,i){const o={type:t,start:n,end:n};return e&&(o.loc={start:i,end:i}),o}function r(t,n,i,o){t.end=n,o&&(t.type=o),e&&t.loc&&(t.loc.end=i)}function s(t,e){const n=t.context(),i=o(3,n.offset,n.startLoc);return i.value=e,r(i,t.currentOffset(),t.currentPosition()),i}function a(t,e){const n=t.context(),{lastOffset:i,lastStartLoc:s}=n,a=o(5,i,s);return a.index=parseInt(e,10),t.nextToken(),r(a,t.currentOffset(),t.currentPosition()),a}function c(t,e){const n=t.context(),{lastOffset:i,lastStartLoc:s}=n,a=o(4,i,s);return a.key=e,t.nextToken(),r(a,t.currentOffset(),t.currentPosition()),a}function l(t,e){const n=t.context(),{lastOffset:i,lastStartLoc:s}=n,a=o(9,i,s);return a.value=e.replace(ut,dt),t.nextToken(),r(a,t.currentOffset(),t.currentPosition()),a}function u(t){const e=t.nextToken(),n=t.context(),{lastOffset:s,lastStartLoc:a}=n,c=o(8,s,a);return 12!==e.type?(i(t,11,n.lastStartLoc,0),c.value="",r(c,s,a),{nextConsumeToken:e,node:c}):(null==e.value&&i(t,13,n.lastStartLoc,0,pt(e)),c.value=e.value||"",r(c,t.currentOffset(),t.currentPosition()),{node:c})}function d(t,e){const n=t.context(),i=o(7,n.offset,n.startLoc);return i.value=e,r(i,t.currentOffset(),t.currentPosition()),i}function p(t){const e=t.context(),n=o(6,e.offset,e.startLoc);let s=t.nextToken();if(9===s.type){const e=u(t);n.modifier=e.node,s=e.nextConsumeToken||t.nextToken()}switch(10!==s.type&&i(t,13,e.lastStartLoc,0,pt(s)),s=t.nextToken(),2===s.type&&(s=t.nextToken()),s.type){case 11:null==s.value&&i(t,13,e.lastStartLoc,0,pt(s)),n.key=d(t,s.value||"");break;case 5:null==s.value&&i(t,13,e.lastStartLoc,0,pt(s)),n.key=c(t,s.value||"");break;case 6:null==s.value&&i(t,13,e.lastStartLoc,0,pt(s)),n.key=a(t,s.value||"");break;case 7:null==s.value&&i(t,13,e.lastStartLoc,0,pt(s)),n.key=l(t,s.value||"");break;default:i(t,12,e.lastStartLoc,0);const u=t.context(),h=o(7,u.offset,u.startLoc);return h.value="",r(h,u.offset,u.startLoc),n.key=h,r(n,u.offset,u.startLoc),{nextConsumeToken:s,node:n}}return r(n,t.currentOffset(),t.currentPosition()),{node:n}}function f(t){const e=t.context(),n=1===e.currentType?t.currentOffset():e.offset,u=1===e.currentType?e.endLoc:e.startLoc,d=o(2,n,u);d.items=[];let h=null;do{const n=h||t.nextToken();switch(h=null,n.type){case 0:null==n.value&&i(t,13,e.lastStartLoc,0,pt(n)),d.items.push(s(t,n.value||""));break;case 6:null==n.value&&i(t,13,e.lastStartLoc,0,pt(n)),d.items.push(a(t,n.value||""));break;case 5:null==n.value&&i(t,13,e.lastStartLoc,0,pt(n)),d.items.push(c(t,n.value||""));break;case 7:null==n.value&&i(t,13,e.lastStartLoc,0,pt(n)),d.items.push(l(t,n.value||""));break;case 8:const o=p(t);d.items.push(o.node),h=o.nextConsumeToken||null;break}}while(14!==e.currentType&&1!==e.currentType);const f=1===e.currentType?e.lastOffset:t.currentOffset(),g=1===e.currentType?e.lastEndLoc:t.currentPosition();return r(d,f,g),d}function g(t,e,n,s){const a=t.context();let c=0===s.items.length;const l=o(1,e,n);l.cases=[],l.cases.push(s);do{const e=f(t);c||(c=0===e.items.length),l.cases.push(e)}while(14!==a.currentType);return c&&i(t,10,n,0),r(l,t.currentOffset(),t.currentPosition()),l}function m(t){const e=t.context(),{offset:n,startLoc:i}=e,o=f(t);return 14===e.currentType?o:g(t,n,i,o)}function k(n){const s=ct(n,h({},t)),a=s.context(),c=o(0,a.offset,a.startLoc);return e&&c.loc&&(c.loc.source=n),c.body=m(s),14!==a.currentType&&i(s,13,a.lastStartLoc,0,n[a.offset]||""),r(c,s.currentOffset(),s.currentPosition()),c}return{parse:k}}function pt(t){if(14===t.type)return"EOF";const e=(t.value||"").replace(/\r?\n/gu,"\\n");return e.length>10?e.slice(0,9)+"…":e}function ft(t,e={}){const n={ast:t,helpers:new Set},i=()=>n,o=t=>(n.helpers.add(t),t);return{context:i,helper:o}}function gt(t,e){for(let n=0;n<t.length;n++)mt(t[n],e)}function mt(t,e){switch(t.type){case 1:gt(t.cases,e),e.helper("plural");break;case 2:gt(t.items,e);break;case 6:const n=t;mt(n.key,e),e.helper("linked");break;case 5:e.helper("interpolate"),e.helper("list");break;case 4:e.helper("interpolate"),e.helper("named");break}}function kt(t,e={}){const n=ft(t);n.helper("normalize"),t.body&&mt(t.body,n);const i=n.context();t.helpers=Array.from(i.helpers)}function bt(t,e){const{sourceMap:n,filename:i,breakLineCode:o,needIndent:r}=e,s={source:t.loc.source,filename:i,code:"",column:1,line:1,offset:0,map:void 0,breakLineCode:o,needIndent:r,indentLevel:0},a=()=>s;function c(t,e){s.code+=t}function l(t,e=!0){const n=e?o:"";c(r?n+"  ".repeat(t):n)}function u(t=!0){const e=++s.indentLevel;t&&l(e)}function d(t=!0){const e=--s.indentLevel;t&&l(e)}function h(){l(s.indentLevel)}const p=t=>`_${t}`,f=()=>s.needIndent;return{context:a,push:c,indent:u,deindent:d,newline:h,helper:p,needIndent:f}}function wt(t,e){const{helper:n}=t;t.push(`${n("linked")}(`),Ct(t,e.key),e.modifier&&(t.push(", "),Ct(t,e.modifier)),t.push(")")}function vt(t,e){const{helper:n,needIndent:i}=t;t.push(`${n("normalize")}([`),t.indent(i());const o=e.items.length;for(let r=0;r<o;r++){if(Ct(t,e.items[r]),r===o-1)break;t.push(", ")}t.deindent(i()),t.push("])")}function _t(t,e){const{helper:n,needIndent:i}=t;if(e.cases.length>1){t.push(`${n("plural")}([`),t.indent(i());const o=e.cases.length;for(let n=0;n<o;n++){if(Ct(t,e.cases[n]),n===o-1)break;t.push(", ")}t.deindent(i()),t.push("])")}}function At(t,e){e.body?Ct(t,e.body):t.push("null")}function Ct(t,e){const{helper:n}=t;switch(e.type){case 0:At(t,e);break;case 1:_t(t,e);break;case 2:vt(t,e);break;case 6:wt(t,e);break;case 8:t.push(JSON.stringify(e.value),e);break;case 7:t.push(JSON.stringify(e.value),e);break;case 5:t.push(`${n("interpolate")}(${n("list")}(${e.index}))`,e);break;case 4:t.push(`${n("interpolate")}(${n("named")}(${JSON.stringify(e.key)}))`,e);break;case 9:t.push(JSON.stringify(e.value),e);break;case 3:t.push(JSON.stringify(e.value),e);break;default:0}}const yt=(t,e={})=>{const n=v(e.mode)?e.mode:"normal",i=v(e.filename)?e.filename:"message.intl",o=!!e.sourceMap,r=null!=e.breakLineCode?e.breakLineCode:"arrow"===n?";":"\n",s=e.needIndent?e.needIndent:"arrow"!==n,a=t.helpers||[],c=bt(t,{mode:n,filename:i,sourceMap:o,breakLineCode:r,needIndent:s});c.push("normal"===n?"function __msg__ (ctx) {":"(ctx) => {"),c.indent(s),a.length>0&&(c.push(`const { ${a.map((t=>`${t}: _${t}`)).join(", ")} } = ctx`),c.newline()),c.push("return "),Ct(c,t),c.deindent(s),c.push("}");const{code:l,map:u}=c.context();return{ast:t,code:l,map:u?u.toJSON():void 0}};function Et(t,e={}){const n=h({},e),i=ht(n),o=i.parse(t);return kt(o,n),yt(o,n)}
/*!
  * @intlify/devtools-if v9.1.10
  * (c) 2022 kazuya kawaguchi
  * Released under the MIT License.
  */
const xt={I18nInit:"i18n:init",FunctionTranslate:"function:translate"};
/*!
  * @intlify/core-base v9.1.10
  * (c) 2022 kazuya kawaguchi
  * Released under the MIT License.
  */
let It=null;function Tt(t){It=t}function Dt(t,e,n){It&&It.emit(xt.I18nInit,{timestamp:Date.now(),i18n:t,version:e,meta:n})}const St=Mt(xt.FunctionTranslate);function Mt(t){return e=>It&&It.emit(t,e)}const Nt="9.1.10",Ot=-1,Pt="";function Bt(){return{upper:t=>v(t)?t.toUpperCase():t,lower:t=>v(t)?t.toLowerCase():t,capitalize:t=>v(t)?`${t.charAt(0).toLocaleUpperCase()}${t.substr(1)}`:t}}let Lt;function Rt(t){Lt=t}let jt=null;const zt=t=>{jt=t},Ft=()=>jt;let Vt=0;function Ut(t={}){const e=v(t.version)?t.version:Nt,n=v(t.locale)?t.locale:"en-US",i=b(t.fallbackLocale)||E(t.fallbackLocale)||v(t.fallbackLocale)||!1===t.fallbackLocale?t.fallbackLocale:n,o=E(t.messages)?t.messages:{[n]:{}},r=E(t.datetimeFormats)?t.datetimeFormats:{[n]:{}},s=E(t.numberFormats)?t.numberFormats:{[n]:{}},a=h({},t.modifiers||{},Bt()),c=t.pluralRules||{},u=w(t.missing)?t.missing:null,p=!_(t.missingWarn)&&!l(t.missingWarn)||t.missingWarn,f=!_(t.fallbackWarn)&&!l(t.fallbackWarn)||t.fallbackWarn,g=!!t.fallbackFormat,m=!!t.unresolving,k=w(t.postTranslation)?t.postTranslation:null,C=E(t.processor)?t.processor:null,y=!_(t.warnHtmlMessage)||t.warnHtmlMessage,x=!!t.escapeParameter,I=w(t.messageCompiler)?t.messageCompiler:Lt,T=w(t.onWarn)?t.onWarn:d,D=t,S=A(D.__datetimeFormatters)?D.__datetimeFormatters:new Map,M=A(D.__numberFormatters)?D.__numberFormatters:new Map,N=A(D.__meta)?D.__meta:{};Vt++;const O={version:e,cid:Vt,locale:n,fallbackLocale:i,messages:o,datetimeFormats:r,numberFormats:s,modifiers:a,pluralRules:c,missing:u,missingWarn:p,fallbackWarn:f,fallbackFormat:g,unresolving:m,postTranslation:k,processor:C,warnHtmlMessage:y,escapeParameter:x,messageCompiler:I,onWarn:T,__datetimeFormatters:S,__numberFormatters:M,__meta:N};return __INTLIFY_PROD_DEVTOOLS__&&Dt(O,e,N),O}function Ht(t,e,n,i,o){const{missing:r,onWarn:s}=t;if(null!==r){const i=r(t,n,e,o);return v(i)?i:e}return e}function qt(t,e,n){const i=t;i.__localeChainCache||(i.__localeChainCache=new Map);let o=i.__localeChainCache.get(n);if(!o){o=[];let t=[n];while(b(t))t=$t(o,t,e);const r=b(e)?e:E(e)?e["default"]?e["default"]:null:e;t=v(r)?[r]:r,b(t)&&$t(o,t,!1),i.__localeChainCache.set(n,o)}return o}function $t(t,e,n){let i=!0;for(let o=0;o<e.length&&_(i);o++){const r=e[o];v(r)&&(i=Gt(t,e[o],n))}return i}function Gt(t,e,n){let i;const o=e.split("-");do{const e=o.join("-");i=Wt(t,e,n),o.splice(-1,1)}while(o.length&&!0===i);return i}function Wt(t,e,n){let i=!1;if(!t.includes(e)&&(i=!0,e)){i="!"!==e[e.length-1];const o=e.replace(/!/g,"");t.push(o),(b(n)||E(n))&&n[o]&&(i=n[o])}return i}function Kt(t,e,n){const i=t;i.__localeChainCache=new Map,qt(t,n,e)}const Zt=t=>t;let Yt=Object.create(null);function Qt(t,e={}){{const n=e.onCacheKey||Zt,i=n(t),o=Yt[i];if(o)return o;let r=!1;const s=e.onError||Y;e.onError=t=>{r=!0,s(t)};const{code:a}=Et(t,e),c=new Function(`return ${a}`)();return r?c:Yt[i]=c}}function Jt(t){return Z(t,null,void 0)}const Xt=()=>"",te=t=>w(t);function ee(t,...e){const{fallbackFormat:n,postTranslation:i,unresolving:o,fallbackLocale:r,messages:s}=t,[a,c]=se(...e),l=_(c.missingWarn)?c.missingWarn:t.missingWarn,u=_(c.fallbackWarn)?c.fallbackWarn:t.fallbackWarn,d=_(c.escapeParameter)?c.escapeParameter:t.escapeParameter,p=!!c.resolvedMessage,f=v(c.default)||_(c.default)?_(c.default)?a:c.default:n?a:"",g=n||""!==f,m=v(c.locale)?c.locale:t.locale;d&&ne(c);let[k,b,w]=p?[a,m,s[m]||{}]:ie(t,a,m,r,u,l),A=a;if(p||v(k)||te(k)||g&&(k=f,A=k),!p&&(!v(k)&&!te(k)||!v(b)))return o?Ot:a;let C=!1;const y=()=>{C=!0},E=te(k)?k:oe(t,a,b,k,A,y);if(C)return k;const x=ce(t,b,w,c),I=K(x),T=re(t,E,I),D=i?i(T):T;if(__INTLIFY_PROD_DEVTOOLS__){const e={timestamp:Date.now(),key:v(a)?a:te(k)?k.key:"",locale:b||(te(k)?k.locale:""),format:v(k)?k:te(k)?k.source:"",message:D};e.meta=h({},t.__meta,Ft()||{}),St(e)}return D}function ne(t){b(t.list)?t.list=t.list.map((t=>v(t)?g(t):t)):A(t.named)&&Object.keys(t.named).forEach((e=>{v(t.named[e])&&(t.named[e]=g(t.named[e]))}))}function ie(t,e,n,i,o,r){const{messages:s,onWarn:a}=t,c=qt(t,i,n);let l,u={},d=null,h=n,p=null;const f="translate";for(let g=0;g<c.length;g++){l=p=c[g],u=s[l]||{};if(null===(d=j(u,e))&&(d=u[e]),v(d)||w(d))break;const n=Ht(t,e,l,r,f);n!==e&&(d=n),h=p}return[d,l,u]}function oe(t,e,n,i,o,r){const{messageCompiler:s,warnHtmlMessage:a}=t;if(te(i)){const t=i;return t.locale=t.locale||n,t.key=t.key||e,t}const c=s(i,ae(t,n,o,i,a,r));return c.locale=n,c.key=e,c.source=i,c}function re(t,e,n){const i=e(n);return i}function se(...t){const[e,n,i]=t,o={};if(!v(e)&&!a(e)&&!te(e))throw Jt(14);const r=a(e)?String(e):(te(e),e);return a(n)?o.plural=n:v(n)?o.default=n:E(n)&&!u(n)?o.named=n:b(n)&&(o.list=n),a(i)?o.plural=i:v(i)?o.default=i:E(i)&&h(o,i),[r,o]}function ae(t,e,n,i,o,s){return{warnHtmlMessage:o,onError:t=>{throw s&&s(t),t},onCacheKey:t=>r(e,n,t)}}function ce(t,e,n,i){const{modifiers:o,pluralRules:r}=t,s=i=>{const o=j(n,i);if(v(o)){let n=!1;const r=()=>{n=!0},s=oe(t,i,e,o,i,r);return n?Xt:s}return te(o)?o:Xt},c={locale:e,modifiers:o,pluralRules:r,messages:s};return t.processor&&(c.processor=t.processor),i.list&&(c.list=i.list),i.named&&(c.named=i.named),a(i.plural)&&(c.pluralIndex=i.plural),c}const le="undefined"!==typeof Intl;le&&Intl.DateTimeFormat,le&&Intl.NumberFormat;function ue(t,...e){const{datetimeFormats:n,unresolving:i,fallbackLocale:o,onWarn:r}=t,{__datetimeFormatters:s}=t;const[a,c,l,d]=de(...e),p=_(l.missingWarn)?l.missingWarn:t.missingWarn,f=(_(l.fallbackWarn)?l.fallbackWarn:t.fallbackWarn,!!l.part),g=v(l.locale)?l.locale:t.locale,m=qt(t,o,g);if(!v(a)||""===a)return new Intl.DateTimeFormat(g).format(c);let k,b={},w=null,A=g,C=null;const y="datetime format";for(let u=0;u<m.length;u++){if(k=C=m[u],b=n[k]||{},w=b[a],E(w))break;Ht(t,a,k,p,y),A=C}if(!E(w)||!v(k))return i?Ot:a;let x=`${k}__${a}`;u(d)||(x=`${x}__${JSON.stringify(d)}`);let I=s.get(x);return I||(I=new Intl.DateTimeFormat(k,h({},w,d)),s.set(x,I)),f?I.formatToParts(c):I.format(c)}function de(...t){const[e,n,i,o]=t;let r,s={},l={};if(v(e)){if(!/\d{4}-\d{2}-\d{2}(T.*)?/.test(e))throw Jt(16);r=new Date(e);try{r.toISOString()}catch(u){throw Jt(16)}}else if(c(e)){if(isNaN(e.getTime()))throw Jt(15);r=e}else{if(!a(e))throw Jt(14);r=e}return v(n)?s.key=n:E(n)&&(s=n),v(i)?s.locale=i:E(i)&&(l=i),E(o)&&(l=o),[s.key||"",r,s,l]}function he(t,e,n){const i=t;for(const o in n){const t=`${e}__${o}`;i.__datetimeFormatters.has(t)&&i.__datetimeFormatters.delete(t)}}function pe(t,...e){const{numberFormats:n,unresolving:i,fallbackLocale:o,onWarn:r}=t,{__numberFormatters:s}=t;const[a,c,l,d]=fe(...e),p=_(l.missingWarn)?l.missingWarn:t.missingWarn,f=(_(l.fallbackWarn)?l.fallbackWarn:t.fallbackWarn,!!l.part),g=v(l.locale)?l.locale:t.locale,m=qt(t,o,g);if(!v(a)||""===a)return new Intl.NumberFormat(g).format(c);let k,b={},w=null,A=g,C=null;const y="number format";for(let u=0;u<m.length;u++){if(k=C=m[u],b=n[k]||{},w=b[a],E(w))break;Ht(t,a,k,p,y),A=C}if(!E(w)||!v(k))return i?Ot:a;let x=`${k}__${a}`;u(d)||(x=`${x}__${JSON.stringify(d)}`);let I=s.get(x);return I||(I=new Intl.NumberFormat(k,h({},w,d)),s.set(x,I)),f?I.formatToParts(c):I.format(c)}function fe(...t){const[e,n,i,o]=t;let r={},s={};if(!a(e))throw Jt(14);const c=e;return v(n)?r.key=n:E(n)&&(r=n),v(i)?r.locale=i:E(i)&&(s=i),E(o)&&(s=o),[r.key||"",c,r,s]}function ge(t,e,n){const i=t;for(const o in n){const t=`${e}__${o}`;i.__numberFormatters.has(t)&&i.__numberFormatters.delete(t)}}"boolean"!==typeof __INTLIFY_PROD_DEVTOOLS__&&(f().__INTLIFY_PROD_DEVTOOLS__=!1);var me=n(3396),ke=n(4870);
/*!
  * vue-i18n v9.1.10
  * (c) 2022 kazuya kawaguchi
  * Released under the MIT License.
  */
const be="9.1.10";function we(){let t=!1;"boolean"!==typeof __VUE_I18N_FULL_INSTALL__&&(t=!0,f().__VUE_I18N_FULL_INSTALL__=!0),"boolean"!==typeof __VUE_I18N_LEGACY_API__&&(t=!0,f().__VUE_I18N_LEGACY_API__=!0),"boolean"!==typeof __INTLIFY_PROD_DEVTOOLS__&&(f().__INTLIFY_PROD_DEVTOOLS__=!1)}function ve(t,...e){return Z(t,null,void 0)}const _e="__INTLIFY_META__",Ae=o("__transrateVNode"),Ce=o("__datetimeParts"),ye=o("__numberParts"),Ee=(o("__enableEmitter"),o("__disableEmitter"),o("__setPluralRules"));o("__intlifyMeta");const xe=o("__injectWithOption");let Ie=0;function Te(t){return(e,n,i,o)=>t(n,i,(0,me.FN)()||void 0,o)}function De(t,e){const{messages:n,__i18n:i}=e,o=E(n)?n:b(i)?{}:{[t]:{}};if(b(i)&&i.forEach((({locale:t,resource:e})=>{t?(o[t]=o[t]||{},Me(e,o[t])):Me(e,o)})),e.flatJson)for(const r in o)k(o,r)&&z(o[r]);return o}const Se=t=>!A(t)||b(t);function Me(t,e){if(Se(t)||Se(e))throw ve(20);for(const n in t)k(t,n)&&(Se(t[n])||Se(e[n])?e[n]=t[n]:Me(t[n],e[n]))}const Ne=()=>{const t=(0,me.FN)();return t&&t.type[_e]?{[_e]:t.type[_e]}:null};function Oe(t={}){const{__root:e}=t,n=void 0===e;let i=!_(t.inheritLocale)||t.inheritLocale;const o=(0,ke.iH)(e&&i?e.locale.value:v(t.locale)?t.locale:"en-US"),r=(0,ke.iH)(e&&i?e.fallbackLocale.value:v(t.fallbackLocale)||b(t.fallbackLocale)||E(t.fallbackLocale)||!1===t.fallbackLocale?t.fallbackLocale:o.value),s=(0,ke.iH)(De(o.value,t)),c=(0,ke.iH)(E(t.datetimeFormats)?t.datetimeFormats:{[o.value]:{}}),u=(0,ke.iH)(E(t.numberFormats)?t.numberFormats:{[o.value]:{}});let d=e?e.missingWarn:!_(t.missingWarn)&&!l(t.missingWarn)||t.missingWarn,p=e?e.fallbackWarn:!_(t.fallbackWarn)&&!l(t.fallbackWarn)||t.fallbackWarn,f=e?e.fallbackRoot:!_(t.fallbackRoot)||t.fallbackRoot,g=!!t.fallbackFormat,m=w(t.missing)?t.missing:null,k=w(t.missing)?Te(t.missing):null,C=w(t.postTranslation)?t.postTranslation:null,y=!_(t.warnHtmlMessage)||t.warnHtmlMessage,x=!!t.escapeParameter;const I=e?e.modifiers:E(t.modifiers)?t.modifiers:{};let T,D=t.pluralRules||e&&e.pluralRules;function S(){return Ut({version:be,locale:o.value,fallbackLocale:r.value,messages:s.value,datetimeFormats:c.value,numberFormats:u.value,modifiers:I,pluralRules:D,missing:null===k?void 0:k,missingWarn:d,fallbackWarn:p,fallbackFormat:g,unresolving:!0,postTranslation:null===C?void 0:C,warnHtmlMessage:y,escapeParameter:x,__datetimeFormatters:E(T)?T.__datetimeFormatters:void 0,__numberFormatters:E(T)?T.__numberFormatters:void 0,__v_emitter:E(T)?T.__v_emitter:void 0,__meta:{framework:"vue"}})}function M(){return[o.value,r.value,s.value,c.value,u.value]}T=S(),Kt(T,o.value,r.value);const N=(0,me.Fl)({get:()=>o.value,set:t=>{o.value=t,T.locale=o.value}}),O=(0,me.Fl)({get:()=>r.value,set:t=>{r.value=t,T.fallbackLocale=r.value,Kt(T,o.value,t)}}),P=(0,me.Fl)((()=>s.value)),B=(0,me.Fl)((()=>c.value)),L=(0,me.Fl)((()=>u.value));function R(){return w(C)?C:null}function z(t){C=t,T.postTranslation=t}function F(){return m}function V(t){null!==t&&(k=Te(t)),m=t,T.missing=k}function U(t,n,i,o,r,s){let c;if(M(),__INTLIFY_PROD_DEVTOOLS__)try{zt(Ne()),c=t(T)}finally{zt(null)}else c=t(T);if(a(c)&&c===Ot){const[t,i]=n();return e&&f?o(e):r(t)}if(s(c))return c;throw ve(14)}function H(...t){return U((e=>ee(e,...t)),(()=>se(...t)),"translate",(e=>e.t(...t)),(t=>t),(t=>v(t)))}function q(...t){const[e,n,i]=t;if(i&&!A(i))throw ve(15);return H(e,n,h({resolvedMessage:!0},i||{}))}function $(...t){return U((e=>ue(e,...t)),(()=>de(...t)),"datetime format",(e=>e.d(...t)),(()=>Pt),(t=>v(t)))}function G(...t){return U((e=>pe(e,...t)),(()=>fe(...t)),"number format",(e=>e.n(...t)),(()=>Pt),(t=>v(t)))}function W(t){return t.map((t=>v(t)?(0,me.Wm)(me.xv,null,t,0):t))}const K=t=>t,Z={normalize:W,interpolate:K,type:"vnode"};function Y(...t){return U((e=>{let n;const i=e;try{i.processor=Z,n=ee(i,...t)}finally{i.processor=null}return n}),(()=>se(...t)),"translate",(e=>e[Ae](...t)),(t=>[(0,me.Wm)(me.xv,null,t,0)]),(t=>b(t)))}function Q(...t){return U((e=>pe(e,...t)),(()=>fe(...t)),"number format",(e=>e[ye](...t)),(()=>[]),(t=>v(t)||b(t)))}function J(...t){return U((e=>ue(e,...t)),(()=>de(...t)),"datetime format",(e=>e[Ce](...t)),(()=>[]),(t=>v(t)||b(t)))}function X(t){D=t,T.pluralRules=D}function tt(t,e){const n=v(e)?e:o.value,i=it(n);return null!==j(i,t)}function et(t){let e=null;const n=qt(T,r.value,o.value);for(let i=0;i<n.length;i++){const o=s.value[n[i]]||{},r=j(o,t);if(null!=r){e=r;break}}return e}function nt(t){const n=et(t);return null!=n?n:e&&e.tm(t)||{}}function it(t){return s.value[t]||{}}function ot(t,e){s.value[t]=e,T.messages=s.value}function rt(t,e){s.value[t]=s.value[t]||{},Me(e,s.value[t]),T.messages=s.value}function st(t){return c.value[t]||{}}function at(t,e){c.value[t]=e,T.datetimeFormats=c.value,he(T,t,e)}function ct(t,e){c.value[t]=h(c.value[t]||{},e),T.datetimeFormats=c.value,he(T,t,e)}function lt(t){return u.value[t]||{}}function ut(t,e){u.value[t]=e,T.numberFormats=u.value,ge(T,t,e)}function dt(t,e){u.value[t]=h(u.value[t]||{},e),T.numberFormats=u.value,ge(T,t,e)}Ie++,e&&((0,me.YP)(e.locale,(t=>{i&&(o.value=t,T.locale=t,Kt(T,o.value,r.value))})),(0,me.YP)(e.fallbackLocale,(t=>{i&&(r.value=t,T.fallbackLocale=t,Kt(T,o.value,r.value))})));const ht={id:Ie,locale:N,fallbackLocale:O,get inheritLocale(){return i},set inheritLocale(t){i=t,t&&e&&(o.value=e.locale.value,r.value=e.fallbackLocale.value,Kt(T,o.value,r.value))},get availableLocales(){return Object.keys(s.value).sort()},messages:P,datetimeFormats:B,numberFormats:L,get modifiers(){return I},get pluralRules(){return D||{}},get isGlobal(){return n},get missingWarn(){return d},set missingWarn(t){d=t,T.missingWarn=d},get fallbackWarn(){return p},set fallbackWarn(t){p=t,T.fallbackWarn=p},get fallbackRoot(){return f},set fallbackRoot(t){f=t},get fallbackFormat(){return g},set fallbackFormat(t){g=t,T.fallbackFormat=g},get warnHtmlMessage(){return y},set warnHtmlMessage(t){y=t,T.warnHtmlMessage=t},get escapeParameter(){return x},set escapeParameter(t){x=t,T.escapeParameter=t},t:H,rt:q,d:$,n:G,te:tt,tm:nt,getLocaleMessage:it,setLocaleMessage:ot,mergeLocaleMessage:rt,getDateTimeFormat:st,setDateTimeFormat:at,mergeDateTimeFormat:ct,getNumberFormat:lt,setNumberFormat:ut,mergeNumberFormat:dt,getPostTranslationHandler:R,setPostTranslationHandler:z,getMissingHandler:F,setMissingHandler:V,[Ae]:Y,[ye]:Q,[Ce]:J,[Ee]:X,[xe]:t.__injectWithOption};return ht}function Pe(t){const e=v(t.locale)?t.locale:"en-US",n=v(t.fallbackLocale)||b(t.fallbackLocale)||E(t.fallbackLocale)||!1===t.fallbackLocale?t.fallbackLocale:e,i=w(t.missing)?t.missing:void 0,o=!_(t.silentTranslationWarn)&&!l(t.silentTranslationWarn)||!t.silentTranslationWarn,r=!_(t.silentFallbackWarn)&&!l(t.silentFallbackWarn)||!t.silentFallbackWarn,s=!_(t.fallbackRoot)||t.fallbackRoot,a=!!t.formatFallbackMessages,c=E(t.modifiers)?t.modifiers:{},u=t.pluralizationRules,d=w(t.postTranslation)?t.postTranslation:void 0,p=!v(t.warnHtmlInMessage)||"off"!==t.warnHtmlInMessage,f=!!t.escapeParameterHtml,g=!_(t.sync)||t.sync;let m=t.messages;if(E(t.sharedMessages)){const e=t.sharedMessages,n=Object.keys(e);m=n.reduce(((t,n)=>{const i=t[n]||(t[n]={});return h(i,e[n]),t}),m||{})}const{__i18n:k,__root:A,__injectWithOption:C}=t,y=t.datetimeFormats,x=t.numberFormats,I=t.flatJson;return{locale:e,fallbackLocale:n,messages:m,flatJson:I,datetimeFormats:y,numberFormats:x,missing:i,missingWarn:o,fallbackWarn:r,fallbackRoot:s,fallbackFormat:a,modifiers:c,pluralRules:u,postTranslation:d,warnHtmlMessage:p,escapeParameter:f,inheritLocale:g,__i18n:k,__root:A,__injectWithOption:C}}function Be(t={}){const e=Oe(Pe(t)),n={id:e.id,get locale(){return e.locale.value},set locale(t){e.locale.value=t},get fallbackLocale(){return e.fallbackLocale.value},set fallbackLocale(t){e.fallbackLocale.value=t},get messages(){return e.messages.value},get datetimeFormats(){return e.datetimeFormats.value},get numberFormats(){return e.numberFormats.value},get availableLocales(){return e.availableLocales},get formatter(){return{interpolate(){return[]}}},set formatter(t){},get missing(){return e.getMissingHandler()},set missing(t){e.setMissingHandler(t)},get silentTranslationWarn(){return _(e.missingWarn)?!e.missingWarn:e.missingWarn},set silentTranslationWarn(t){e.missingWarn=_(t)?!t:t},get silentFallbackWarn(){return _(e.fallbackWarn)?!e.fallbackWarn:e.fallbackWarn},set silentFallbackWarn(t){e.fallbackWarn=_(t)?!t:t},get modifiers(){return e.modifiers},get formatFallbackMessages(){return e.fallbackFormat},set formatFallbackMessages(t){e.fallbackFormat=t},get postTranslation(){return e.getPostTranslationHandler()},set postTranslation(t){e.setPostTranslationHandler(t)},get sync(){return e.inheritLocale},set sync(t){e.inheritLocale=t},get warnHtmlInMessage(){return e.warnHtmlMessage?"warn":"off"},set warnHtmlInMessage(t){e.warnHtmlMessage="off"!==t},get escapeParameterHtml(){return e.escapeParameter},set escapeParameterHtml(t){e.escapeParameter=t},get preserveDirectiveContent(){return!0},set preserveDirectiveContent(t){},get pluralizationRules(){return e.pluralRules||{}},__composer:e,t(...t){const[n,i,o]=t,r={};let s=null,a=null;if(!v(n))throw ve(15);const c=n;return v(i)?r.locale=i:b(i)?s=i:E(i)&&(a=i),b(o)?s=o:E(o)&&(a=o),e.t(c,s||a||{},r)},rt(...t){return e.rt(...t)},tc(...t){const[n,i,o]=t,r={plural:1};let s=null,c=null;if(!v(n))throw ve(15);const l=n;return v(i)?r.locale=i:a(i)?r.plural=i:b(i)?s=i:E(i)&&(c=i),v(o)?r.locale=o:b(o)?s=o:E(o)&&(c=o),e.t(l,s||c||{},r)},te(t,n){return e.te(t,n)},tm(t){return e.tm(t)},getLocaleMessage(t){return e.getLocaleMessage(t)},setLocaleMessage(t,n){e.setLocaleMessage(t,n)},mergeLocaleMessage(t,n){e.mergeLocaleMessage(t,n)},d(...t){return e.d(...t)},getDateTimeFormat(t){return e.getDateTimeFormat(t)},setDateTimeFormat(t,n){e.setDateTimeFormat(t,n)},mergeDateTimeFormat(t,n){e.mergeDateTimeFormat(t,n)},n(...t){return e.n(...t)},getNumberFormat(t){return e.getNumberFormat(t)},setNumberFormat(t,n){e.setNumberFormat(t,n)},mergeNumberFormat(t,n){e.mergeNumberFormat(t,n)},getChoiceIndex(t,e){return-1},__onComponentInstanceCreated(e){const{componentInstanceCreatedListener:i}=t;i&&i(e,n)}};return n}const Le={tag:{type:[String,Object]},locale:{type:String},scope:{type:String,validator:t=>"parent"===t||"global"===t,default:"parent"},i18n:{type:Object}},Re={name:"i18n-t",props:h({keypath:{type:String,required:!0},plural:{type:[Number,String],validator:t=>a(t)||!isNaN(t)}},Le),setup(t,e){const{slots:n,attrs:i}=e,o=t.i18n||Je({useScope:t.scope,__useComponent:!0}),r=Object.keys(n).filter((t=>"_"!==t));return()=>{const n={};t.locale&&(n.locale=t.locale),void 0!==t.plural&&(n.plural=v(t.plural)?+t.plural:t.plural);const s=je(e,r),a=o[Ae](t.keypath,s,n),c=h({},i);return v(t.tag)||A(t.tag)?(0,me.h)(t.tag,c,a):(0,me.h)(me.HY,c,a)}}};function je({slots:t},e){return 1===e.length&&"default"===e[0]?t.default?t.default():[]:e.reduce(((e,n)=>{const i=t[n];return i&&(e[n]=i()),e}),{})}function ze(t,e,n,i){const{slots:o,attrs:r}=e;return()=>{const e={part:!0};let s={};t.locale&&(e.locale=t.locale),v(t.format)?e.key=t.format:A(t.format)&&(v(t.format.key)&&(e.key=t.format.key),s=Object.keys(t.format).reduce(((e,i)=>n.includes(i)?h({},e,{[i]:t.format[i]}):e),{}));const a=i(t.value,e,s);let c=[e.key];b(a)?c=a.map(((t,e)=>{const n=o[t.type];return n?n({[t.type]:t.value,index:e,parts:a}):[t.value]})):v(a)&&(c=[a]);const l=h({},r);return v(t.tag)||A(t.tag)?(0,me.h)(t.tag,l,c):(0,me.h)(me.HY,l,c)}}const Fe=["localeMatcher","style","unit","unitDisplay","currency","currencyDisplay","useGrouping","numberingSystem","minimumIntegerDigits","minimumFractionDigits","maximumFractionDigits","minimumSignificantDigits","maximumSignificantDigits","notation","formatMatcher"],Ve={name:"i18n-n",props:h({value:{type:Number,required:!0},format:{type:[String,Object]}},Le),setup(t,e){const n=t.i18n||Je({useScope:"parent",__useComponent:!0});return ze(t,e,Fe,((...t)=>n[ye](...t)))}},Ue=["dateStyle","timeStyle","fractionalSecondDigits","calendar","dayPeriod","numberingSystem","localeMatcher","timeZone","hour12","hourCycle","formatMatcher","weekday","era","year","month","day","hour","minute","second","timeZoneName"],He={name:"i18n-d",props:h({value:{type:[Number,Date],required:!0},format:{type:[String,Object]}},Le),setup(t,e){const n=t.i18n||Je({useScope:"parent",__useComponent:!0});return ze(t,e,Ue,((...t)=>n[Ce](...t)))}};function qe(t,e){const n=t;if("composition"===t.mode)return n.__getInstance(e)||t.global;{const i=n.__getInstance(e);return null!=i?i.__composer:t.global.__composer}}function $e(t){const e=(e,{instance:n,value:i,modifiers:o})=>{if(!n||!n.$)throw ve(22);const r=qe(t,n.$);const s=Ge(i);e.textContent=r.t(...We(s))};return{beforeMount:e,beforeUpdate:e}}function Ge(t){if(v(t))return{path:t};if(E(t)){if(!("path"in t))throw ve(19,"path");return t}throw ve(20)}function We(t){const{path:e,locale:n,args:i,choice:o,plural:r}=t,s={},c=i||{};return v(n)&&(s.locale=n),a(o)&&(s.plural=o),a(r)&&(s.plural=r),[e,c,s]}function Ke(t,e,...n){const i=E(n[0])?n[0]:{},o=!!i.useI18nComponentName,r=!_(i.globalInstall)||i.globalInstall;r&&(t.component(o?"i18n":Re.name,Re),t.component(Ve.name,Ve),t.component(He.name,He)),t.directive("t",$e(e))}function Ze(t,e,n){return{beforeCreate(){const i=(0,me.FN)();if(!i)throw ve(22);const o=this.$options;if(o.i18n){const n=o.i18n;o.__i18n&&(n.__i18n=o.__i18n),n.__root=e,this===this.$root?this.$i18n=Ye(t,n):(n.__injectWithOption=!0,this.$i18n=Be(n))}else o.__i18n?this===this.$root?this.$i18n=Ye(t,o):this.$i18n=Be({__i18n:o.__i18n,__injectWithOption:!0,__root:e}):this.$i18n=t;t.__onComponentInstanceCreated(this.$i18n),n.__setInstance(i,this.$i18n),this.$t=(...t)=>this.$i18n.t(...t),this.$rt=(...t)=>this.$i18n.rt(...t),this.$tc=(...t)=>this.$i18n.tc(...t),this.$te=(t,e)=>this.$i18n.te(t,e),this.$d=(...t)=>this.$i18n.d(...t),this.$n=(...t)=>this.$i18n.n(...t),this.$tm=t=>this.$i18n.tm(t)},mounted(){0},beforeUnmount(){const t=(0,me.FN)();if(!t)throw ve(22);delete this.$t,delete this.$rt,delete this.$tc,delete this.$te,delete this.$d,delete this.$n,delete this.$tm,n.__deleteInstance(t),delete this.$i18n}}}function Ye(t,e){t.locale=e.locale||t.locale,t.fallbackLocale=e.fallbackLocale||t.fallbackLocale,t.missing=e.missing||t.missing,t.silentTranslationWarn=e.silentTranslationWarn||t.silentFallbackWarn,t.silentFallbackWarn=e.silentFallbackWarn||t.silentFallbackWarn,t.formatFallbackMessages=e.formatFallbackMessages||t.formatFallbackMessages,t.postTranslation=e.postTranslation||t.postTranslation,t.warnHtmlInMessage=e.warnHtmlInMessage||t.warnHtmlInMessage,t.escapeParameterHtml=e.escapeParameterHtml||t.escapeParameterHtml,t.sync=e.sync||t.sync,t.__composer[Ee](e.pluralizationRules||t.pluralizationRules);const n=De(t.locale,{messages:e.messages,__i18n:e.__i18n});return Object.keys(n).forEach((e=>t.mergeLocaleMessage(e,n[e]))),e.datetimeFormats&&Object.keys(e.datetimeFormats).forEach((n=>t.mergeDateTimeFormat(n,e.datetimeFormats[n]))),e.numberFormats&&Object.keys(e.numberFormats).forEach((n=>t.mergeNumberFormat(n,e.numberFormats[n]))),t}function Qe(t={}){const e=__VUE_I18N_LEGACY_API__&&_(t.legacy)?t.legacy:__VUE_I18N_LEGACY_API__,n=!!t.globalInjection,i=new Map,r=__VUE_I18N_LEGACY_API__&&e?Be(t):Oe(t),s=o(""),a={get mode(){return __VUE_I18N_LEGACY_API__&&e?"legacy":"composition"},async install(t,...i){t.__VUE_I18N_SYMBOL__=s,t.provide(t.__VUE_I18N_SYMBOL__,a),!e&&n&&on(t,a.global),__VUE_I18N_FULL_INSTALL__&&Ke(t,a,...i),__VUE_I18N_LEGACY_API__&&e&&t.mixin(Ze(r,r.__composer,a))},get global(){return r},__instances:i,__getInstance(t){return i.get(t)||null},__setInstance(t,e){i.set(t,e)},__deleteInstance(t){i.delete(t)}};return a}function Je(t={}){const e=(0,me.FN)();if(null==e)throw ve(16);if(!e.appContext.app.__VUE_I18N_SYMBOL__)throw ve(17);const n=(0,me.f3)(e.appContext.app.__VUE_I18N_SYMBOL__);if(!n)throw ve(22);const i="composition"===n.mode?n.global:n.global.__composer,o=u(t)?"__i18n"in e.type?"local":"global":t.useScope?t.useScope:"local";if("global"===o){let n=A(t.messages)?t.messages:{};"__i18nGlobal"in e.type&&(n=De(i.locale.value,{messages:n,__i18n:e.type.__i18nGlobal}));const o=Object.keys(n);if(o.length&&o.forEach((t=>{i.mergeLocaleMessage(t,n[t])})),A(t.datetimeFormats)){const e=Object.keys(t.datetimeFormats);e.length&&e.forEach((e=>{i.mergeDateTimeFormat(e,t.datetimeFormats[e])}))}if(A(t.numberFormats)){const e=Object.keys(t.numberFormats);e.length&&e.forEach((e=>{i.mergeNumberFormat(e,t.numberFormats[e])}))}return i}if("parent"===o){let o=Xe(n,e,t.__useComponent);return null==o&&(o=i),o}if("legacy"===n.mode)throw ve(18);const r=n;let s=r.__getInstance(e);if(null==s){const n=e.type,o=h({},t);n.__i18n&&(o.__i18n=n.__i18n),i&&(o.__root=i),s=Oe(o),tn(r,e,s),r.__setInstance(e,s)}return s}function Xe(t,e,n=!1){let i=null;const o=e.root;let r=e.parent;while(null!=r){const e=t;if("composition"===t.mode)i=e.__getInstance(r);else{const t=e.__getInstance(r);null!=t&&(i=t.__composer),n&&i&&!i[xe]&&(i=null)}if(null!=i)break;if(o===r)break;r=r.parent}return i}function tn(t,e,n){(0,me.bv)((()=>{0}),e),(0,me.Ah)((()=>{t.__deleteInstance(e)}),e)}const en=["locale","fallbackLocale","availableLocales"],nn=["t","rt","d","n","tm"];function on(t,e){const n=Object.create(null);en.forEach((t=>{const i=Object.getOwnPropertyDescriptor(e,t);if(!i)throw ve(22);const o=(0,ke.dq)(i.value)?{get(){return i.value.value},set(t){i.value.value=t}}:{get(){return i.get&&i.get()}};Object.defineProperty(n,t,o)})),t.config.globalProperties.$i18n=n,nn.forEach((n=>{const i=Object.getOwnPropertyDescriptor(e,n);if(!i||!i.value)throw ve(22);Object.defineProperty(t.config.globalProperties,`$${n}`,i)}))}if(Rt(Qt),we(),__INTLIFY_PROD_DEVTOOLS__){const t=f();t.__INTLIFY__=!0,Tt(t.__INTLIFY_DEVTOOLS_GLOBAL_HOOK__)}},89:function(t,e){"use strict";e.Z=(t,e)=>{const n=t.__vccOpts||t;for(const[i,o]of e)n[i]=o;return n}},678:function(t,e,n){"use strict";n.d(e,{p7:function(){return te},PO:function(){return $}});n(1703);var i=n(3396),o=n(4870);
/*!
  * vue-router v4.0.12
  * (c) 2021 Eduardo San Martin Morote
  * @license MIT
  */
const r="function"===typeof Symbol&&"symbol"===typeof Symbol.toStringTag,s=t=>r?Symbol(t):"_vr_"+t,a=s("rvlm"),c=s("rvd"),l=s("r"),u=s("rl"),d=s("rvl"),h="undefined"!==typeof window;function p(t){return t.__esModule||r&&"Module"===t[Symbol.toStringTag]}const f=Object.assign;function g(t,e){const n={};for(const i in e){const o=e[i];n[i]=Array.isArray(o)?o.map(t):t(o)}return n}const m=()=>{};const k=/\/$/,b=t=>t.replace(k,"");function w(t,e,n="/"){let i,o={},r="",s="";const a=e.indexOf("?"),c=e.indexOf("#",a>-1?a:0);return a>-1&&(i=e.slice(0,a),r=e.slice(a+1,c>-1?c:e.length),o=t(r)),c>-1&&(i=i||e.slice(0,c),s=e.slice(c,e.length)),i=I(null!=i?i:e,n),{fullPath:i+(r&&"?")+r+s,path:i,query:o,hash:s}}function v(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function _(t,e){return e&&t.toLowerCase().startsWith(e.toLowerCase())?t.slice(e.length)||"/":t}function A(t,e,n){const i=e.matched.length-1,o=n.matched.length-1;return i>-1&&i===o&&C(e.matched[i],n.matched[o])&&y(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function C(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function y(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!E(t[n],e[n]))return!1;return!0}function E(t,e){return Array.isArray(t)?x(t,e):Array.isArray(e)?x(e,t):t===e}function x(t,e){return Array.isArray(e)?t.length===e.length&&t.every(((t,n)=>t===e[n])):1===t.length&&t[0]===e}function I(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),i=t.split("/");let o,r,s=n.length-1;for(o=0;o<i.length;o++)if(r=i[o],1!==s&&"."!==r){if(".."!==r)break;s--}return n.slice(0,s).join("/")+"/"+i.slice(o-(o===i.length?1:0)).join("/")}var T,D;(function(t){t["pop"]="pop",t["push"]="push"})(T||(T={})),function(t){t["back"]="back",t["forward"]="forward",t["unknown"]=""}(D||(D={}));function S(t){if(!t)if(h){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return"/"!==t[0]&&"#"!==t[0]&&(t="/"+t),b(t)}const M=/^[^#]+#/;function N(t,e){return t.replace(M,"#")+e}function O(t,e){const n=document.documentElement.getBoundingClientRect(),i=t.getBoundingClientRect();return{behavior:e.behavior,left:i.left-n.left-(e.left||0),top:i.top-n.top-(e.top||0)}}const P=()=>({left:window.pageXOffset,top:window.pageYOffset});function B(t){let e;if("el"in t){const n=t.el,i="string"===typeof n&&n.startsWith("#");0;const o="string"===typeof n?i?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!o)return;e=O(o,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(null!=e.left?e.left:window.pageXOffset,null!=e.top?e.top:window.pageYOffset)}function L(t,e){const n=history.state?history.state.position-e:-1;return n+t}const R=new Map;function j(t,e){R.set(t,e)}function z(t){const e=R.get(t);return R.delete(t),e}let F=()=>location.protocol+"//"+location.host;function V(t,e){const{pathname:n,search:i,hash:o}=e,r=t.indexOf("#");if(r>-1){let e=o.includes(t.slice(r))?t.slice(r).length:1,n=o.slice(e);return"/"!==n[0]&&(n="/"+n),_(n,"")}const s=_(n,t);return s+i+o}function U(t,e,n,i){let o=[],r=[],s=null;const a=({state:r})=>{const a=V(t,location),c=n.value,l=e.value;let u=0;if(r){if(n.value=a,e.value=r,s&&s===c)return void(s=null);u=l?r.position-l.position:0}else i(a);o.forEach((t=>{t(n.value,c,{delta:u,type:T.pop,direction:u?u>0?D.forward:D.back:D.unknown})}))};function c(){s=n.value}function l(t){o.push(t);const e=()=>{const e=o.indexOf(t);e>-1&&o.splice(e,1)};return r.push(e),e}function u(){const{history:t}=window;t.state&&t.replaceState(f({},t.state,{scroll:P()}),"")}function d(){for(const t of r)t();r=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u),{pauseListeners:c,listen:l,destroy:d}}function H(t,e,n,i=!1,o=!1){return{back:t,current:e,forward:n,replaced:i,position:window.history.length,scroll:o?P():null}}function q(t){const{history:e,location:n}=window,i={value:V(t,n)},o={value:e.state};function r(i,r,s){const a=t.indexOf("#"),c=a>-1?(n.host&&document.querySelector("base")?t:t.slice(a))+i:F()+t+i;try{e[s?"replaceState":"pushState"](r,"",c),o.value=r}catch(l){console.error(l),n[s?"replace":"assign"](c)}}function s(t,n){const s=f({},e.state,H(o.value.back,t,o.value.forward,!0),n,{position:o.value.position});r(t,s,!0),i.value=t}function a(t,n){const s=f({},o.value,e.state,{forward:t,scroll:P()});r(s.current,s,!0);const a=f({},H(i.value,t,null),{position:s.position+1},n);r(t,a,!1),i.value=t}return o.value||r(i.value,{back:null,current:i.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0),{location:i,state:o,push:a,replace:s}}function $(t){t=S(t);const e=q(t),n=U(t,e.state,e.location,e.replace);function i(t,e=!0){e||n.pauseListeners(),history.go(t)}const o=f({location:"",base:t,go:i,createHref:N.bind(null,t)},e,n);return Object.defineProperty(o,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(o,"state",{enumerable:!0,get:()=>e.state.value}),o}function G(t){return"string"===typeof t||t&&"object"===typeof t}function W(t){return"string"===typeof t||"symbol"===typeof t}const K={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Z=s("nf");var Y;(function(t){t[t["aborted"]=4]="aborted",t[t["cancelled"]=8]="cancelled",t[t["duplicated"]=16]="duplicated"})(Y||(Y={}));function Q(t,e){return f(new Error,{type:t,[Z]:!0},e)}function J(t,e){return t instanceof Error&&Z in t&&(null==e||!!(t.type&e))}const X="[^/]+?",tt={sensitive:!1,strict:!1,start:!0,end:!0},et=/[.+*?^${}()[\]/\\]/g;function nt(t,e){const n=f({},tt,e),i=[];let o=n.start?"^":"";const r=[];for(const u of t){const t=u.length?[]:[90];n.strict&&!u.length&&(o+="/");for(let e=0;e<u.length;e++){const i=u[e];let s=40+(n.sensitive?.25:0);if(0===i.type)e||(o+="/"),o+=i.value.replace(et,"\\$&"),s+=40;else if(1===i.type){const{value:t,repeatable:n,optional:a,regexp:c}=i;r.push({name:t,repeatable:n,optional:a});const d=c||X;if(d!==X){s+=10;try{new RegExp(`(${d})`)}catch(l){throw new Error(`Invalid custom RegExp for param "${t}" (${d}): `+l.message)}}let h=n?`((?:${d})(?:/(?:${d}))*)`:`(${d})`;e||(h=a&&u.length<2?`(?:/${h})`:"/"+h),a&&(h+="?"),o+=h,s+=20,a&&(s+=-8),n&&(s+=-20),".*"===d&&(s+=-50)}t.push(s)}i.push(t)}if(n.strict&&n.end){const t=i.length-1;i[t][i[t].length-1]+=.7000000000000001}n.strict||(o+="/?"),n.end?o+="$":n.strict&&(o+="(?:/|$)");const s=new RegExp(o,n.sensitive?"":"i");function a(t){const e=t.match(s),n={};if(!e)return null;for(let i=1;i<e.length;i++){const t=e[i]||"",o=r[i-1];n[o.name]=t&&o.repeatable?t.split("/"):t}return n}function c(e){let n="",i=!1;for(const o of t){i&&n.endsWith("/")||(n+="/"),i=!1;for(const t of o)if(0===t.type)n+=t.value;else if(1===t.type){const{value:r,repeatable:s,optional:a}=t,c=r in e?e[r]:"";if(Array.isArray(c)&&!s)throw new Error(`Provided param "${r}" is an array but it is not repeatable (* or + modifiers)`);const l=Array.isArray(c)?c.join("/"):c;if(!l){if(!a)throw new Error(`Missing required param "${r}"`);o.length<2&&(n.endsWith("/")?n=n.slice(0,-1):i=!0)}n+=l}}return n}return{re:s,score:i,keys:r,parse:a,stringify:c}}function it(t,e){let n=0;while(n<t.length&&n<e.length){const i=e[n]-t[n];if(i)return i;n++}return t.length<e.length?1===t.length&&80===t[0]?-1:1:t.length>e.length?1===e.length&&80===e[0]?1:-1:0}function ot(t,e){let n=0;const i=t.score,o=e.score;while(n<i.length&&n<o.length){const t=it(i[n],o[n]);if(t)return t;n++}return o.length-i.length}const rt={type:0,value:""},st=/[a-zA-Z0-9_]/;function at(t){if(!t)return[[]];if("/"===t)return[[rt]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(t){throw new Error(`ERR (${n})/"${l}": ${t}`)}let n=0,i=n;const o=[];let r;function s(){r&&o.push(r),r=[]}let a,c=0,l="",u="";function d(){l&&(0===n?r.push({type:0,value:l}):1===n||2===n||3===n?(r.length>1&&("*"===a||"+"===a)&&e(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),r.push({type:1,value:l,regexp:u,repeatable:"*"===a||"+"===a,optional:"*"===a||"?"===a})):e("Invalid state to consume buffer"),l="")}function h(){l+=a}while(c<t.length)if(a=t[c++],"\\"!==a||2===n)switch(n){case 0:"/"===a?(l&&d(),s()):":"===a?(d(),n=1):h();break;case 4:h(),n=i;break;case 1:"("===a?n=2:st.test(a)?h():(d(),n=0,"*"!==a&&"?"!==a&&"+"!==a&&c--);break;case 2:")"===a?"\\"==u[u.length-1]?u=u.slice(0,-1)+a:n=3:u+=a;break;case 3:d(),n=0,"*"!==a&&"?"!==a&&"+"!==a&&c--,u="";break;default:e("Unknown state");break}else i=n,n=4;return 2===n&&e(`Unfinished custom RegExp for param "${l}"`),d(),s(),o}function ct(t,e,n){const i=nt(at(t.path),n);const o=f(i,{record:t,parent:e,children:[],alias:[]});return e&&!o.record.aliasOf===!e.record.aliasOf&&e.children.push(o),o}function lt(t,e){const n=[],i=new Map;function o(t){return i.get(t)}function r(t,n,i){const o=!i,a=dt(t);a.aliasOf=i&&i.record;const l=gt(e,t),u=[a];if("alias"in t){const e="string"===typeof t.alias?[t.alias]:t.alias;for(const t of e)u.push(f({},a,{components:i?i.record.components:a.components,path:t,aliasOf:i?i.record:a}))}let d,h;for(const e of u){const{path:u}=e;if(n&&"/"!==u[0]){const t=n.record.path,i="/"===t[t.length-1]?"":"/";e.path=n.record.path+(u&&i+u)}if(d=ct(e,n,l),i?i.alias.push(d):(h=h||d,h!==d&&h.alias.push(d),o&&t.name&&!pt(d)&&s(t.name)),"children"in a){const t=a.children;for(let e=0;e<t.length;e++)r(t[e],d,i&&i.children[e])}i=i||d,c(d)}return h?()=>{s(h)}:m}function s(t){if(W(t)){const e=i.get(t);e&&(i.delete(t),n.splice(n.indexOf(e),1),e.children.forEach(s),e.alias.forEach(s))}else{const e=n.indexOf(t);e>-1&&(n.splice(e,1),t.record.name&&i.delete(t.record.name),t.children.forEach(s),t.alias.forEach(s))}}function a(){return n}function c(t){let e=0;while(e<n.length&&ot(t,n[e])>=0)e++;n.splice(e,0,t),t.record.name&&!pt(t)&&i.set(t.record.name,t)}function l(t,e){let o,r,s,a={};if("name"in t&&t.name){if(o=i.get(t.name),!o)throw Q(1,{location:t});s=o.record.name,a=f(ut(e.params,o.keys.filter((t=>!t.optional)).map((t=>t.name))),t.params),r=o.stringify(a)}else if("path"in t)r=t.path,o=n.find((t=>t.re.test(r))),o&&(a=o.parse(r),s=o.record.name);else{if(o=e.name?i.get(e.name):n.find((t=>t.re.test(e.path))),!o)throw Q(1,{location:t,currentLocation:e});s=o.record.name,a=f({},e.params,t.params),r=o.stringify(a)}const c=[];let l=o;while(l)c.unshift(l.record),l=l.parent;return{name:s,path:r,params:a,matched:c,meta:ft(c)}}return e=gt({strict:!1,end:!0,sensitive:!1},e),t.forEach((t=>r(t))),{addRoute:r,resolve:l,removeRoute:s,getRoutes:a,getRecordMatcher:o}}function ut(t,e){const n={};for(const i of e)i in t&&(n[i]=t[i]);return n}function dt(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:ht(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||{}:{default:t.component}}}function ht(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const i in t.components)e[i]="boolean"===typeof n?n:n[i];return e}function pt(t){while(t){if(t.record.aliasOf)return!0;t=t.parent}return!1}function ft(t){return t.reduce(((t,e)=>f(t,e.meta)),{})}function gt(t,e){const n={};for(const i in t)n[i]=i in e?e[i]:t[i];return n}const mt=/#/g,kt=/&/g,bt=/\//g,wt=/=/g,vt=/\?/g,_t=/\+/g,At=/%5B/g,Ct=/%5D/g,yt=/%5E/g,Et=/%60/g,xt=/%7B/g,It=/%7C/g,Tt=/%7D/g,Dt=/%20/g;function St(t){return encodeURI(""+t).replace(It,"|").replace(At,"[").replace(Ct,"]")}function Mt(t){return St(t).replace(xt,"{").replace(Tt,"}").replace(yt,"^")}function Nt(t){return St(t).replace(_t,"%2B").replace(Dt,"+").replace(mt,"%23").replace(kt,"%26").replace(Et,"`").replace(xt,"{").replace(Tt,"}").replace(yt,"^")}function Ot(t){return Nt(t).replace(wt,"%3D")}function Pt(t){return St(t).replace(mt,"%23").replace(vt,"%3F")}function Bt(t){return null==t?"":Pt(t).replace(bt,"%2F")}function Lt(t){try{return decodeURIComponent(""+t)}catch(e){}return""+t}function Rt(t){const e={};if(""===t||"?"===t)return e;const n="?"===t[0],i=(n?t.slice(1):t).split("&");for(let o=0;o<i.length;++o){const t=i[o].replace(_t," "),n=t.indexOf("="),r=Lt(n<0?t:t.slice(0,n)),s=n<0?null:Lt(t.slice(n+1));if(r in e){let t=e[r];Array.isArray(t)||(t=e[r]=[t]),t.push(s)}else e[r]=s}return e}function jt(t){let e="";for(let n in t){const i=t[n];if(n=Ot(n),null==i){void 0!==i&&(e+=(e.length?"&":"")+n);continue}const o=Array.isArray(i)?i.map((t=>t&&Nt(t))):[i&&Nt(i)];o.forEach((t=>{void 0!==t&&(e+=(e.length?"&":"")+n,null!=t&&(e+="="+t))}))}return e}function zt(t){const e={};for(const n in t){const i=t[n];void 0!==i&&(e[n]=Array.isArray(i)?i.map((t=>null==t?null:""+t)):null==i?i:""+i)}return e}function Ft(){let t=[];function e(e){return t.push(e),()=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)}}function n(){t=[]}return{add:e,list:()=>t,reset:n}}function Vt(t,e,n,i,o){const r=i&&(i.enterCallbacks[o]=i.enterCallbacks[o]||[]);return()=>new Promise(((s,a)=>{const c=t=>{!1===t?a(Q(4,{from:n,to:e})):t instanceof Error?a(t):G(t)?a(Q(2,{from:e,to:t})):(r&&i.enterCallbacks[o]===r&&"function"===typeof t&&r.push(t),s())},l=t.call(i&&i.instances[o],e,n,c);let u=Promise.resolve(l);t.length<3&&(u=u.then(c)),u.catch((t=>a(t)))}))}function Ut(t,e,n,i){const o=[];for(const r of t)for(const t in r.components){let s=r.components[t];if("beforeRouteEnter"===e||r.instances[t])if(Ht(s)){const a=s.__vccOpts||s,c=a[e];c&&o.push(Vt(c,n,i,r,t))}else{let a=s();0,o.push((()=>a.then((o=>{if(!o)return Promise.reject(new Error(`Couldn't resolve component "${t}" at "${r.path}"`));const s=p(o)?o.default:o;r.components[t]=s;const a=s.__vccOpts||s,c=a[e];return c&&Vt(c,n,i,r,t)()}))))}}return o}function Ht(t){return"object"===typeof t||"displayName"in t||"props"in t||"__vccOpts"in t}function qt(t){const e=(0,i.f3)(l),n=(0,i.f3)(u),r=(0,i.Fl)((()=>e.resolve((0,o.SU)(t.to)))),s=(0,i.Fl)((()=>{const{matched:t}=r.value,{length:e}=t,i=t[e-1],o=n.matched;if(!i||!o.length)return-1;const s=o.findIndex(C.bind(null,i));if(s>-1)return s;const a=Zt(t[e-2]);return e>1&&Zt(i)===a&&o[o.length-1].path!==a?o.findIndex(C.bind(null,t[e-2])):s})),a=(0,i.Fl)((()=>s.value>-1&&Kt(n.params,r.value.params))),c=(0,i.Fl)((()=>s.value>-1&&s.value===n.matched.length-1&&y(n.params,r.value.params)));function d(n={}){return Wt(n)?e[(0,o.SU)(t.replace)?"replace":"push"]((0,o.SU)(t.to)).catch(m):Promise.resolve()}return{route:r,href:(0,i.Fl)((()=>r.value.href)),isActive:a,isExactActive:c,navigate:d}}const $t=(0,i.aZ)({name:"RouterLink",props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:qt,setup(t,{slots:e}){const n=(0,o.qj)(qt(t)),{options:r}=(0,i.f3)(l),s=(0,i.Fl)((()=>({[Yt(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[Yt(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive})));return()=>{const o=e.default&&e.default(n);return t.custom?o:(0,i.h)("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},o)}}}),Gt=$t;function Wt(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&(void 0===t.button||0===t.button)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function Kt(t,e){for(const n in e){const i=e[n],o=t[n];if("string"===typeof i){if(i!==o)return!1}else if(!Array.isArray(o)||o.length!==i.length||i.some(((t,e)=>t!==o[e])))return!1}return!0}function Zt(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Yt=(t,e,n)=>null!=t?t:null!=e?e:n,Qt=(0,i.aZ)({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},setup(t,{attrs:e,slots:n}){const r=(0,i.f3)(d),s=(0,i.Fl)((()=>t.route||r.value)),l=(0,i.f3)(c,0),u=(0,i.Fl)((()=>s.value.matched[l]));(0,i.JJ)(c,l+1),(0,i.JJ)(a,u),(0,i.JJ)(d,s);const h=(0,o.iH)();return(0,i.YP)((()=>[h.value,u.value,t.name]),(([t,e,n],[i,o,r])=>{e&&(e.instances[n]=t,o&&o!==e&&t&&t===i&&(e.leaveGuards.size||(e.leaveGuards=o.leaveGuards),e.updateGuards.size||(e.updateGuards=o.updateGuards))),!t||!e||o&&C(e,o)&&i||(e.enterCallbacks[n]||[]).forEach((e=>e(t)))}),{flush:"post"}),()=>{const o=s.value,r=u.value,a=r&&r.components[t.name],c=t.name;if(!a)return Jt(n.default,{Component:a,route:o});const l=r.props[t.name],d=l?!0===l?o.params:"function"===typeof l?l(o):l:null,p=t=>{t.component.isUnmounted&&(r.instances[c]=null)},g=(0,i.h)(a,f({},d,e,{onVnodeUnmounted:p,ref:h}));return Jt(n.default,{Component:g,route:o})||g}}});function Jt(t,e){if(!t)return null;const n=t(e);return 1===n.length?n[0]:n}const Xt=Qt;function te(t){const e=lt(t.routes,t),n=t.parseQuery||Rt,r=t.stringifyQuery||jt,s=t.history;const a=Ft(),c=Ft(),p=Ft(),k=(0,o.XI)(K);let b=K;h&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const _=g.bind(null,(t=>""+t)),C=g.bind(null,Bt),y=g.bind(null,Lt);function E(t,n){let i,o;return W(t)?(i=e.getRecordMatcher(t),o=n):o=t,e.addRoute(o,i)}function x(t){const n=e.getRecordMatcher(t);n&&e.removeRoute(n)}function I(){return e.getRoutes().map((t=>t.record))}function D(t){return!!e.getRecordMatcher(t)}function S(t,i){if(i=f({},i||k.value),"string"===typeof t){const o=w(n,t,i.path),r=e.resolve({path:o.path},i),a=s.createHref(o.fullPath);return f(o,r,{params:y(r.params),hash:Lt(o.hash),redirectedFrom:void 0,href:a})}let o;if("path"in t)o=f({},t,{path:w(n,t.path,i.path).path});else{const e=f({},t.params);for(const t in e)null==e[t]&&delete e[t];o=f({},t,{params:C(t.params)}),i.params=C(i.params)}const a=e.resolve(o,i),c=t.hash||"";a.params=_(y(a.params));const l=v(r,f({},t,{hash:Mt(c),path:a.path})),u=s.createHref(l);return f({fullPath:l,hash:c,query:r===jt?zt(t.query):t.query||{}},a,{redirectedFrom:void 0,href:u})}function M(t){return"string"===typeof t?w(n,t,k.value.path):f({},t)}function N(t,e){if(b!==t)return Q(8,{from:e,to:t})}function O(t){return V(t)}function R(t){return O(f(M(t),{replace:!0}))}function F(t){const e=t.matched[t.matched.length-1];if(e&&e.redirect){const{redirect:n}=e;let i="function"===typeof n?n(t):n;return"string"===typeof i&&(i=i.includes("?")||i.includes("#")?i=M(i):{path:i},i.params={}),f({query:t.query,hash:t.hash,params:t.params},i)}}function V(t,e){const n=b=S(t),i=k.value,o=t.state,s=t.force,a=!0===t.replace,c=F(n);if(c)return V(f(M(c),{state:o,force:s,replace:a}),e||n);const l=n;let u;return l.redirectedFrom=e,!s&&A(r,i,n)&&(u=Q(16,{to:l,from:i}),ot(i,i,!0,!1)),(u?Promise.resolve(u):H(l,i)).catch((t=>J(t)?t:et(t,l,i))).then((t=>{if(t){if(J(t,2))return V(f(M(t.to),{state:o,force:s,replace:a}),e||l)}else t=$(l,i,!0,a,o);return q(l,i,t),t}))}function U(t,e){const n=N(t,e);return n?Promise.reject(n):Promise.resolve()}function H(t,e){let n;const[i,o,r]=ne(t,e);n=Ut(i.reverse(),"beforeRouteLeave",t,e);for(const a of i)a.leaveGuards.forEach((i=>{n.push(Vt(i,t,e))}));const s=U.bind(null,t,e);return n.push(s),ee(n).then((()=>{n=[];for(const i of a.list())n.push(Vt(i,t,e));return n.push(s),ee(n)})).then((()=>{n=Ut(o,"beforeRouteUpdate",t,e);for(const i of o)i.updateGuards.forEach((i=>{n.push(Vt(i,t,e))}));return n.push(s),ee(n)})).then((()=>{n=[];for(const i of t.matched)if(i.beforeEnter&&!e.matched.includes(i))if(Array.isArray(i.beforeEnter))for(const o of i.beforeEnter)n.push(Vt(o,t,e));else n.push(Vt(i.beforeEnter,t,e));return n.push(s),ee(n)})).then((()=>(t.matched.forEach((t=>t.enterCallbacks={})),n=Ut(r,"beforeRouteEnter",t,e),n.push(s),ee(n)))).then((()=>{n=[];for(const i of c.list())n.push(Vt(i,t,e));return n.push(s),ee(n)})).catch((t=>J(t,8)?t:Promise.reject(t)))}function q(t,e,n){for(const i of p.list())i(t,e,n)}function $(t,e,n,i,o){const r=N(t,e);if(r)return r;const a=e===K,c=h?history.state:{};n&&(i||a?s.replace(t.fullPath,f({scroll:a&&c&&c.scroll},o)):s.push(t.fullPath,o)),k.value=t,ot(t,e,n,a),it()}let G;function Z(){G=s.listen(((t,e,n)=>{const i=S(t),o=F(i);if(o)return void V(f(o,{replace:!0}),i).catch(m);b=i;const r=k.value;h&&j(L(r.fullPath,n.delta),P()),H(i,r).catch((t=>J(t,12)?t:J(t,2)?(V(t.to,i).then((t=>{J(t,20)&&!n.delta&&n.type===T.pop&&s.go(-1,!1)})).catch(m),Promise.reject()):(n.delta&&s.go(-n.delta,!1),et(t,i,r)))).then((t=>{t=t||$(i,r,!1),t&&(n.delta?s.go(-n.delta,!1):n.type===T.pop&&J(t,20)&&s.go(-1,!1)),q(i,r,t)})).catch(m)}))}let Y,X=Ft(),tt=Ft();function et(t,e,n){it(t);const i=tt.list();return i.length?i.forEach((i=>i(t,e,n))):console.error(t),Promise.reject(t)}function nt(){return Y&&k.value!==K?Promise.resolve():new Promise(((t,e)=>{X.add([t,e])}))}function it(t){Y||(Y=!0,Z(),X.list().forEach((([e,n])=>t?n(t):e())),X.reset())}function ot(e,n,o,r){const{scrollBehavior:s}=t;if(!h||!s)return Promise.resolve();const a=!o&&z(L(e.fullPath,0))||(r||!o)&&history.state&&history.state.scroll||null;return(0,i.Y3)().then((()=>s(e,n,a))).then((t=>t&&B(t))).catch((t=>et(t,e,n)))}const rt=t=>s.go(t);let st;const at=new Set,ct={currentRoute:k,addRoute:E,removeRoute:x,hasRoute:D,getRoutes:I,resolve:S,options:t,push:O,replace:R,go:rt,back:()=>rt(-1),forward:()=>rt(1),beforeEach:a.add,beforeResolve:c.add,afterEach:p.add,onError:tt.add,isReady:nt,install(t){const e=this;t.component("RouterLink",Gt),t.component("RouterView",Xt),t.config.globalProperties.$router=e,Object.defineProperty(t.config.globalProperties,"$route",{enumerable:!0,get:()=>(0,o.SU)(k)}),h&&!st&&k.value===K&&(st=!0,O(s.location).catch((t=>{0})));const n={};for(const o in K)n[o]=(0,i.Fl)((()=>k.value[o]));t.provide(l,e),t.provide(u,(0,o.qj)(n)),t.provide(d,k);const r=t.unmount;at.add(t),t.unmount=function(){at.delete(t),at.size<1&&(b=K,G&&G(),k.value=K,st=!1,Y=!1),r()}}};return ct}function ee(t){return t.reduce(((t,e)=>t.then((()=>e()))),Promise.resolve())}function ne(t,e){const n=[],i=[],o=[],r=Math.max(e.matched.length,t.matched.length);for(let s=0;s<r;s++){const r=e.matched[s];r&&(t.matched.find((t=>C(t,r)))?i.push(r):n.push(r));const a=t.matched[s];a&&(e.matched.find((t=>C(t,a)))||o.push(a))}return[n,i,o]}},3994:function(t,e,n){n(1703),n(2801),n(6314),function(e,i){t.exports=i(n(6866))}("undefined"!==typeof self&&self,(function(t){return function(t){var e={};function n(i){if(e[i])return e[i].exports;var o=e[i]={i:i,l:!1,exports:{}};return t[i].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(i,o,function(e){return t[e]}.bind(null,o));return i},n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s="fb15")}({"06cf":function(t,e,n){var i=n("83ab"),o=n("d1e7"),r=n("5c6c"),s=n("fc6a"),a=n("c04e"),c=n("5135"),l=n("0cfb"),u=Object.getOwnPropertyDescriptor;e.f=i?u:function(t,e){if(t=s(t),e=a(e,!0),l)try{return u(t,e)}catch(n){}if(c(t,e))return r(!o.f.call(t,e),t[e])}},"0cb2":function(t,e,n){var i=n("7b0b"),o=Math.floor,r="".replace,s=/\$([$&'`]|\d{1,2}|<[^>]*>)/g,a=/\$([$&'`]|\d{1,2})/g;t.exports=function(t,e,n,c,l,u){var d=n+t.length,h=c.length,p=a;return void 0!==l&&(l=i(l),p=s),r.call(u,p,(function(i,r){var s;switch(r.charAt(0)){case"$":return"$";case"&":return t;case"`":return e.slice(0,n);case"'":return e.slice(d);case"<":s=l[r.slice(1,-1)];break;default:var a=+r;if(0===a)return i;if(a>h){var u=o(a/10);return 0===u?i:u<=h?void 0===c[u-1]?r.charAt(1):c[u-1]+r.charAt(1):i}s=c[a-1]}return void 0===s?"":s}))}},"0cfb":function(t,e,n){var i=n("83ab"),o=n("d039"),r=n("cc12");t.exports=!i&&!o((function(){return 7!=Object.defineProperty(r("div"),"a",{get:function(){return 7}}).a}))},"107c":function(t,e,n){var i=n("d039");t.exports=i((function(){var t=RegExp("(?<a>b)","string".charAt(5));return"b"!==t.exec("b").groups.a||"bc"!=="b".replace(t,"$<a>c")}))},1280:function(t,e){var n="undefined"!==typeof window&&"requestAnimationFrame"in window?window.requestAnimationFrame:function(t){setTimeout(t,16)};function i(t){var e="startValue"in t?t.startValue:0,i="endValue"in t?t.endValue:1,o="durationMs"in t?t.durationMs:200,r=t.onComplete||function(){},s=o/16,a=(i-e)/s,c=Math.PI/s,l=e,u=0;function d(){u+=c,l+=a*Math.pow(Math.sin(u),2)*2,u<Math.PI?(t.onStep(l),n(d)):(t.onStep(i),r())}n(d)}t.exports=i},"14c3":function(t,e,n){var i=n("c6b6"),o=n("9263");t.exports=function(t,e){var n=t.exec;if("function"===typeof n){var r=n.call(t,e);if("object"!==typeof r)throw TypeError("RegExp exec method returned something other than an Object or null");return r}if("RegExp"!==i(t))throw TypeError("RegExp#exec called on incompatible receiver");return o.call(t,e)}},"1be4":function(t,e,n){var i=n("d066");t.exports=i("document","documentElement")},"1d80":function(t,e){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on "+t);return t}},"23cb":function(t,e,n){var i=n("a691"),o=Math.max,r=Math.min;t.exports=function(t,e){var n=i(t);return n<0?o(n+e,0):r(n,e)}},"23df":function(t,e,n){var i=n("4dd5");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var o=n("499e").default;o("122a8ab0",i,!0,{sourceMap:!1,shadowMode:!1})},"23e7":function(t,e,n){var i=n("da84"),o=n("06cf").f,r=n("9112"),s=n("6eeb"),a=n("ce4e"),c=n("e893"),l=n("94ca");t.exports=function(t,e){var n,u,d,h,p,f,g=t.target,m=t.global,k=t.stat;if(u=m?i:k?i[g]||a(g,{}):(i[g]||{}).prototype,u)for(d in e){if(p=e[d],t.noTargetGet?(f=o(u,d),h=f&&f.value):h=u[d],n=l(m?d:g+(k?".":"#")+d,t.forced),!n&&void 0!==h){if(typeof p===typeof h)continue;c(p,h)}(t.sham||h&&h.sham)&&r(p,"sham",!0),s(u,d,p,t)}}},"241c":function(t,e,n){var i=n("ca84"),o=n("7839"),r=o.concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return i(t,r)}},"24fb":function(t,e,n){"use strict";function i(t,e){var n=t[1]||"",i=t[3];if(!i)return n;if(e&&"function"===typeof btoa){var r=o(i),s=i.sources.map((function(t){return"/*# sourceURL=".concat(i.sourceRoot||"").concat(t," */")}));return[n].concat(s).concat([r]).join("\n")}return[n].join("\n")}function o(t){var e=btoa(unescape(encodeURIComponent(JSON.stringify(t)))),n="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(e);return"/*# ".concat(n," */")}t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n=i(e,t);return e[2]?"@media ".concat(e[2]," {").concat(n,"}"):n})).join("")},e.i=function(t,n,i){"string"===typeof t&&(t=[[null,t,""]]);var o={};if(i)for(var r=0;r<this.length;r++){var s=this[r][0];null!=s&&(o[s]=!0)}for(var a=0;a<t.length;a++){var c=[].concat(t[a]);i&&o[c[0]]||(n&&(c[2]?c[2]="".concat(n," and ").concat(c[2]):c[2]=n),e.push(c))}},e}},"2d00":function(t,e,n){var i,o,r=n("da84"),s=n("342f"),a=r.process,c=a&&a.versions,l=c&&c.v8;l?(i=l.split("."),o=i[0]<4?1:i[0]+i[1]):s&&(i=s.match(/Edge\/(\d+)/),(!i||i[1]>=74)&&(i=s.match(/Chrome\/(\d+)/),i&&(o=i[1]))),t.exports=o&&+o},"342f":function(t,e,n){var i=n("d066");t.exports=i("navigator","userAgent")||""},"37e8":function(t,e,n){var i=n("83ab"),o=n("9bf2"),r=n("825a"),s=n("df75");t.exports=i?Object.defineProperties:function(t,e){r(t);var n,i=s(e),a=i.length,c=0;while(a>c)o.f(t,n=i[c++],e[n]);return t}},"3bbe":function(t,e,n){var i=n("861d");t.exports=function(t){if(!i(t)&&null!==t)throw TypeError("Can't set "+String(t)+" as a prototype");return t}},"428f":function(t,e,n){var i=n("da84");t.exports=i},"44ad":function(t,e,n){var i=n("d039"),o=n("c6b6"),r="".split;t.exports=i((function(){return!Object("z").propertyIsEnumerable(0)}))?function(t){return"String"==o(t)?r.call(t,""):Object(t)}:Object},4930:function(t,e,n){var i=n("2d00"),o=n("d039");t.exports=!!Object.getOwnPropertySymbols&&!o((function(){var t=Symbol();return!String(t)||!(Object(t)instanceof Symbol)||!Symbol.sham&&i&&i<41}))},"499e":function(t,e,n){"use strict";function i(t,e){for(var n=[],i={},o=0;o<e.length;o++){var r=e[o],s=r[0],a=r[1],c=r[2],l=r[3],u={id:t+":"+o,css:a,media:c,sourceMap:l};i[s]?i[s].parts.push(u):n.push(i[s]={id:s,parts:[u]})}return n}n.r(e),n.d(e,"default",(function(){return f}));var o="undefined"!==typeof document;if("undefined"!==typeof DEBUG&&DEBUG&&!o)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var r={},s=o&&(document.head||document.getElementsByTagName("head")[0]),a=null,c=0,l=!1,u=function(){},d=null,h="data-vue-ssr-id",p="undefined"!==typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());function f(t,e,n,o){l=n,d=o||{};var s=i(t,e);return g(s),function(e){for(var n=[],o=0;o<s.length;o++){var a=s[o],c=r[a.id];c.refs--,n.push(c)}for(e?(s=i(t,e),g(s)):s=[],o=0;o<n.length;o++)if(c=n[o],0===c.refs){for(var l=0;l<c.parts.length;l++)c.parts[l]();delete r[c.id]}}}function g(t){for(var e=0;e<t.length;e++){var n=t[e],i=r[n.id];if(i){i.refs++;for(var o=0;o<i.parts.length;o++)i.parts[o](n.parts[o]);for(;o<n.parts.length;o++)i.parts.push(k(n.parts[o]));i.parts.length>n.parts.length&&(i.parts.length=n.parts.length)}else{var s=[];for(o=0;o<n.parts.length;o++)s.push(k(n.parts[o]));r[n.id]={id:n.id,refs:1,parts:s}}}}function m(){var t=document.createElement("style");return t.type="text/css",s.appendChild(t),t}function k(t){var e,n,i=document.querySelector("style["+h+'~="'+t.id+'"]');if(i){if(l)return u;i.parentNode.removeChild(i)}if(p){var o=c++;i=a||(a=m()),e=w.bind(null,i,o,!1),n=w.bind(null,i,o,!0)}else i=m(),e=v.bind(null,i),n=function(){i.parentNode.removeChild(i)};return e(t),function(i){if(i){if(i.css===t.css&&i.media===t.media&&i.sourceMap===t.sourceMap)return;e(t=i)}else n()}}var b=function(){var t=[];return function(e,n){return t[e]=n,t.filter(Boolean).join("\n")}}();function w(t,e,n,i){var o=n?"":i.css;if(t.styleSheet)t.styleSheet.cssText=b(e,o);else{var r=document.createTextNode(o),s=t.childNodes;s[e]&&t.removeChild(s[e]),s.length?t.insertBefore(r,s[e]):t.appendChild(r)}}function v(t,e){var n=e.css,i=e.media,o=e.sourceMap;if(i&&t.setAttribute("media",i),d.ssrId&&t.setAttribute(h,e.id),o&&(n+="\n/*# sourceURL="+o.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */"),t.styleSheet)t.styleSheet.cssText=n;else{while(t.firstChild)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}},"4d64":function(t,e,n){var i=n("fc6a"),o=n("50c4"),r=n("23cb"),s=function(t){return function(e,n,s){var a,c=i(e),l=o(c.length),u=r(s,l);if(t&&n!=n){while(l>u)if(a=c[u++],a!=a)return!0}else for(;l>u;u++)if((t||u in c)&&c[u]===n)return t||u||0;return!t&&-1}};t.exports={includes:s(!0),indexOf:s(!1)}},"4dd5":function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,':root{--su-size-text:24px;--su-size-padding:6px;--su-color-bg:#ebebeb;--su-color-progress-normal-bg:#cacaca;--su-color-progress-complete-bg:#42b983;--su-color-text-normal:#4f4f4f;--su-color-text-complete:#fefefe;--su-color-handler-bg:#fff;--su-icon-handler:url("data:image/svg;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3hpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDIxIDc5LjE1NTc3MiwgMjAxNC8wMS8xMy0xOTo0NDowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo0ZDhlNWY5My05NmI0LTRlNWQtOGFjYi03ZTY4OGYyMTU2ZTYiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NTEyNTVEMURGMkVFMTFFNEI5NDBCMjQ2M0ExMDQ1OUYiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NTEyNTVEMUNGMkVFMTFFNEI5NDBCMjQ2M0ExMDQ1OUYiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTQgKE1hY2ludG9zaCkiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo2MTc5NzNmZS02OTQxLTQyOTYtYTIwNi02NDI2YTNkOWU5YmUiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NGQ4ZTVmOTMtOTZiNC00ZTVkLThhY2ItN2U2ODhmMjE1NmU2Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+YiRG4AAAALFJREFUeNpi/P//PwMlgImBQkA9A+bOnfsIiBOxKcInh+yCaCDuByoswaIOpxwjciACFegBqZ1AvBSIS5OTk/8TkmNEjwWgQiUgtQuIjwAxUF3yX3xyGIEIFLwHpKyAWB+I1xGSwxULIGf9A7mQkBwTlhBXAFLHgPgqEAcTkmNCU6AL9d8WII4HOvk3ITkWJAXWUMlOoGQHmsE45ViQ2KuBuASoYC4Wf+OUYxz6mQkgwAAN9mIrUReCXgAAAABJRU5ErkJggg==")}@-webkit-keyframes animated{0%{background-position:-300px 0}to{background-position:300px 0}}@keyframes animated{0%{background-position:-300px 0}to{background-position:300px 0}}@-webkit-keyframes shine{to{width:100%;transition:all 5s ease-out;background-color:hsla(0,0%,100%,0)}}@keyframes shine{to{width:100%;transition:all 5s ease-out;background-color:hsla(0,0%,100%,0)}}.slideunlock{display:flex;position:relative;box-sizing:content-box;padding:var(--su-size-padding);background-color:var(--su-color-bg);text-align:center}.slideunlock:after{content:"";position:absolute;top:0;left:0;width:0;height:100%;transition:none;-webkit-animation:shine 4s infinite;animation:shine 4s infinite;background-color:hsla(0,0%,100%,.4)}.slideunlock .slideunlock-progressbar{position:absolute;z-index:1;width:0;height:34px;transition:background 1s ease-out;background-color:var(--su-color-progress-normal-bg)}.slideunlock .slideunlock-text{display:inline;z-index:2;align-items:center;justify-content:center;width:100%;transition:background 1s ease,color 1s ease;-webkit-animation:animated 2s linear infinite;animation:animated 2s linear infinite;background:var(--su-color-text-normal) linear-gradient(90deg,hsla(0,0%,100%,0),#fff,hsla(0,0%,100%,0)) no-repeat;-webkit-background-clip:text;background-clip:text;color:transparent;font-size:var(--su-size-text);-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.slideunlock .slideunlock-text:before{content:"";display:inline-block;height:100%;vertical-align:middle}.slideunlock .slideunlock-handler{position:absolute;z-index:3;top:0;left:0;margin:var(--su-size-padding);transition:background .75s ease,transform .1s ease-in;background:var(--su-color-handler-bg) var(--su-icon-handler) no-repeat 50%;cursor:-webkit-grab;cursor:grab}.slideunlock .slideunlock-handler:active{transform:scale(1.05);cursor:-webkit-grabbing;cursor:grabbing}.slideunlock.is-circle{border-radius:50rem}.slideunlock.is-circle:after{border-radius:50rem 0 0 50rem}.slideunlock.is-circle .slideunlock-handler{border-radius:50%}.slideunlock.is-noanimate:after{-webkit-animation:none;animation:none}.slideunlock.is-noanimate .slideunlock-text{-webkit-animation:none;animation:none;color:var(--su-color-text-normal)}.slideunlock.is-disabled{opacity:.5}.slideunlock.is-disabled:after{content:"";position:absolute;z-index:10;top:0;left:0;width:100%;height:100%;-webkit-animation:none;animation:none;opacity:.5;background-color:var(--su-color-bg)}.slideunlock.is-disabled .slideunlock-text{-webkit-animation:none;animation:none;opacity:.25;color:var(--su-color-text-normal)}.slideunlock.is-disabled .slideunlock-handler{pointer-events:none}.slideunlock.is-disabled.is-circle:after{border-radius:50rem}.slideunlock.is-complete:after{-webkit-animation:none;animation:none}.slideunlock.is-complete .slideunlock-progressbar{background-color:var(--su-color-progress-complete-bg)}.slideunlock.is-complete .slideunlock-text{-webkit-animation:none;animation:none;opacity:1!important;color:var(--su-color-text-complete)}.slideunlock.is-complete .slideunlock-handler{opacity:0;background:var(--su-color-progress-complete-bg)}',""]),t.exports=e},"50c4":function(t,e,n){var i=n("a691"),o=Math.min;t.exports=function(t){return t>0?o(i(t),9007199254740991):0}},5135:function(t,e,n){var i=n("7b0b"),o={}.hasOwnProperty;t.exports=Object.hasOwn||function(t,e){return o.call(i(t),e)}},5319:function(t,e,n){"use strict";var i=n("d784"),o=n("d039"),r=n("825a"),s=n("50c4"),a=n("a691"),c=n("1d80"),l=n("8aa5"),u=n("0cb2"),d=n("14c3"),h=n("b622"),p=h("replace"),f=Math.max,g=Math.min,m=function(t){return void 0===t?t:String(t)},k=function(){return"$0"==="a".replace(/./,"$0")}(),b=function(){return!!/./[p]&&""===/./[p]("a","$0")}(),w=!o((function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")}));i("replace",(function(t,e,n){var i=b?"$":"$0";return[function(t,n){var i=c(this),o=void 0==t?void 0:t[p];return void 0!==o?o.call(t,i,n):e.call(String(i),t,n)},function(t,o){if("string"===typeof o&&-1===o.indexOf(i)&&-1===o.indexOf("$<")){var c=n(e,this,t,o);if(c.done)return c.value}var h=r(this),p=String(t),k="function"===typeof o;k||(o=String(o));var b=h.global;if(b){var w=h.unicode;h.lastIndex=0}var v=[];while(1){var _=d(h,p);if(null===_)break;if(v.push(_),!b)break;var A=String(_[0]);""===A&&(h.lastIndex=l(p,s(h.lastIndex),w))}for(var C="",y=0,E=0;E<v.length;E++){_=v[E];for(var x=String(_[0]),I=f(g(a(_.index),p.length),0),T=[],D=1;D<_.length;D++)T.push(m(_[D]));var S=_.groups;if(k){var M=[x].concat(T,I,p);void 0!==S&&M.push(S);var N=String(o.apply(void 0,M))}else N=u(x,p,I,T,S,o);I>=y&&(C+=p.slice(y,I)+N,y=I+x.length)}return C+p.slice(y)}]}),!w||!k||b)},5692:function(t,e,n){var i=n("c430"),o=n("c6cd");(t.exports=function(t,e){return o[t]||(o[t]=void 0!==e?e:{})})("versions",[]).push({version:"3.15.2",mode:i?"pure":"global",copyright:"© 2021 Denis Pushkarev (zloirock.ru)"})},"56ef":function(t,e,n){var i=n("d066"),o=n("241c"),r=n("7418"),s=n("825a");t.exports=i("Reflect","ownKeys")||function(t){var e=o.f(s(t)),n=r.f;return n?e.concat(n(t)):e}},5899:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(t,e,n){var i=n("1d80"),o=n("5899"),r="["+o+"]",s=RegExp("^"+r+r+"*"),a=RegExp(r+r+"*$"),c=function(t){return function(e){var n=String(i(e));return 1&t&&(n=n.replace(s,"")),2&t&&(n=n.replace(a,"")),n}};t.exports={start:c(1),end:c(2),trim:c(3)}},"5c6c":function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},6547:function(t,e,n){var i=n("a691"),o=n("1d80"),r=function(t){return function(e,n){var r,s,a=String(o(e)),c=i(n),l=a.length;return c<0||c>=l?t?"":void 0:(r=a.charCodeAt(c),r<55296||r>56319||c+1===l||(s=a.charCodeAt(c+1))<56320||s>57343?t?a.charAt(c):r:t?a.slice(c,c+2):s-56320+(r-55296<<10)+65536)}};t.exports={codeAt:r(!1),charAt:r(!0)}},"69f3":function(t,e,n){var i,o,r,s=n("7f9a"),a=n("da84"),c=n("861d"),l=n("9112"),u=n("5135"),d=n("c6cd"),h=n("f772"),p=n("d012"),f="Object already initialized",g=a.WeakMap,m=function(t){return r(t)?o(t):i(t,{})},k=function(t){return function(e){var n;if(!c(e)||(n=o(e)).type!==t)throw TypeError("Incompatible receiver, "+t+" required");return n}};if(s||d.state){var b=d.state||(d.state=new g),w=b.get,v=b.has,_=b.set;i=function(t,e){if(v.call(b,t))throw new TypeError(f);return e.facade=t,_.call(b,t,e),e},o=function(t){return w.call(b,t)||{}},r=function(t){return v.call(b,t)}}else{var A=h("state");p[A]=!0,i=function(t,e){if(u(t,A))throw new TypeError(f);return e.facade=t,l(t,A,e),e},o=function(t){return u(t,A)?t[A]:{}},r=function(t){return u(t,A)}}t.exports={set:i,get:o,has:r,enforce:m,getterFor:k}},"6eeb":function(t,e,n){var i=n("da84"),o=n("9112"),r=n("5135"),s=n("ce4e"),a=n("8925"),c=n("69f3"),l=c.get,u=c.enforce,d=String(String).split("String");(t.exports=function(t,e,n,a){var c,l=!!a&&!!a.unsafe,h=!!a&&!!a.enumerable,p=!!a&&!!a.noTargetGet;"function"==typeof n&&("string"!=typeof e||r(n,"name")||o(n,"name",e),c=u(n),c.source||(c.source=d.join("string"==typeof e?e:""))),t!==i?(l?!p&&t[e]&&(h=!0):delete t[e],h?t[e]=n:o(t,e,n)):h?t[e]=n:s(e,n)})(Function.prototype,"toString",(function(){return"function"==typeof this&&l(this).source||a(this)}))},7005:function(t,e,n){"use strict";n("23df")},7156:function(t,e,n){var i=n("861d"),o=n("d2bb");t.exports=function(t,e,n){var r,s;return o&&"function"==typeof(r=e.constructor)&&r!==n&&i(s=r.prototype)&&s!==n.prototype&&o(t,s),t}},7418:function(t,e){e.f=Object.getOwnPropertySymbols},7839:function(t,e){t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},"7b0b":function(t,e,n){var i=n("1d80");t.exports=function(t){return Object(i(t))}},"7c73":function(t,e,n){var i,o=n("825a"),r=n("37e8"),s=n("7839"),a=n("d012"),c=n("1be4"),l=n("cc12"),u=n("f772"),d=">",h="<",p="prototype",f="script",g=u("IE_PROTO"),m=function(){},k=function(t){return h+f+d+t+h+"/"+f+d},b=function(t){t.write(k("")),t.close();var e=t.parentWindow.Object;return t=null,e},w=function(){var t,e=l("iframe"),n="java"+f+":";return e.style.display="none",c.appendChild(e),e.src=String(n),t=e.contentWindow.document,t.open(),t.write(k("document.F=Object")),t.close(),t.F},v=function(){try{i=document.domain&&new ActiveXObject("htmlfile")}catch(e){}v=i?b(i):w();var t=s.length;while(t--)delete v[p][s[t]];return v()};a[g]=!0,t.exports=Object.create||function(t,e){var n;return null!==t?(m[p]=o(t),n=new m,m[p]=null,n[g]=t):n=v(),void 0===e?n:r(n,e)}},"7f9a":function(t,e,n){var i=n("da84"),o=n("8925"),r=i.WeakMap;t.exports="function"===typeof r&&/native code/.test(o(r))},"825a":function(t,e,n){var i=n("861d");t.exports=function(t){if(!i(t))throw TypeError(String(t)+" is not an object");return t}},"83ab":function(t,e,n){var i=n("d039");t.exports=!i((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},"861d":function(t,e){t.exports=function(t){return"object"===typeof t?null!==t:"function"===typeof t}},8875:function(t,e,n){var i,o,r;(function(n,s){o=[],i=s,r="function"===typeof i?i.apply(e,o):i,void 0===r||(t.exports=r)})("undefined"!==typeof self&&self,(function(){function t(){var e=Object.getOwnPropertyDescriptor(document,"currentScript");if(!e&&"currentScript"in document&&document.currentScript)return document.currentScript;if(e&&e.get!==t&&document.currentScript)return document.currentScript;try{throw new Error}catch(p){var n,i,o,r=/.*at [^(]*\((.*):(.+):(.+)\)$/gi,s=/@([^@]*):(\d+):(\d+)\s*$/gi,a=r.exec(p.stack)||s.exec(p.stack),c=a&&a[1]||!1,l=a&&a[2]||!1,u=document.location.href.replace(document.location.hash,""),d=document.getElementsByTagName("script");c===u&&(n=document.documentElement.outerHTML,i=new RegExp("(?:[^\\n]+?\\n){0,"+(l-2)+"}[^<]*<script>([\\d\\D]*?)<\\/script>[\\d\\D]*","i"),o=n.replace(i,"$1").trim());for(var h=0;h<d.length;h++){if("interactive"===d[h].readyState)return d[h];if(d[h].src===c)return d[h];if(c===u&&d[h].innerHTML&&d[h].innerHTML.trim()===o)return d[h]}return null}}return t}))},8925:function(t,e,n){var i=n("c6cd"),o=Function.toString;"function"!=typeof i.inspectSource&&(i.inspectSource=function(t){return o.call(t)}),t.exports=i.inspectSource},"8aa5":function(t,e,n){"use strict";var i=n("6547").charAt;t.exports=function(t,e,n){return e+(n?i(t,e).length:1)}},"8bbf":function(e,n){e.exports=t},"90e3":function(t,e){var n=0,i=Math.random();t.exports=function(t){return"Symbol("+String(void 0===t?"":t)+")_"+(++n+i).toString(36)}},9112:function(t,e,n){var i=n("83ab"),o=n("9bf2"),r=n("5c6c");t.exports=i?function(t,e,n){return o.f(t,e,r(1,n))}:function(t,e,n){return t[e]=n,t}},9263:function(t,e,n){"use strict";var i=n("ad6d"),o=n("9f7f"),r=n("5692"),s=n("7c73"),a=n("69f3").get,c=n("fce3"),l=n("107c"),u=RegExp.prototype.exec,d=r("native-string-replace",String.prototype.replace),h=u,p=function(){var t=/a/,e=/b*/g;return u.call(t,"a"),u.call(e,"a"),0!==t.lastIndex||0!==e.lastIndex}(),f=o.UNSUPPORTED_Y||o.BROKEN_CARET,g=void 0!==/()??/.exec("")[1],m=p||g||f||c||l;m&&(h=function(t){var e,n,o,r,c,l,m,k=this,b=a(k),w=b.raw;if(w)return w.lastIndex=k.lastIndex,e=h.call(w,t),k.lastIndex=w.lastIndex,e;var v=b.groups,_=f&&k.sticky,A=i.call(k),C=k.source,y=0,E=t;if(_&&(A=A.replace("y",""),-1===A.indexOf("g")&&(A+="g"),E=String(t).slice(k.lastIndex),k.lastIndex>0&&(!k.multiline||k.multiline&&"\n"!==t[k.lastIndex-1])&&(C="(?: "+C+")",E=" "+E,y++),n=new RegExp("^(?:"+C+")",A)),g&&(n=new RegExp("^"+C+"$(?!\\s)",A)),p&&(o=k.lastIndex),r=u.call(_?n:k,E),_?r?(r.input=r.input.slice(y),r[0]=r[0].slice(y),r.index=k.lastIndex,k.lastIndex+=r[0].length):k.lastIndex=0:p&&r&&(k.lastIndex=k.global?r.index+r[0].length:o),g&&r&&r.length>1&&d.call(r[0],n,(function(){for(c=1;c<arguments.length-2;c++)void 0===arguments[c]&&(r[c]=void 0)})),r&&v)for(r.groups=l=s(null),c=0;c<v.length;c++)m=v[c],l[m[0]]=r[m[1]];return r}),t.exports=h},"94ca":function(t,e,n){var i=n("d039"),o=/#|\.prototype\./,r=function(t,e){var n=a[s(t)];return n==l||n!=c&&("function"==typeof e?i(e):!!e)},s=r.normalize=function(t){return String(t).replace(o,".").toLowerCase()},a=r.data={},c=r.NATIVE="N",l=r.POLYFILL="P";t.exports=r},"9bf2":function(t,e,n){var i=n("83ab"),o=n("0cfb"),r=n("825a"),s=n("c04e"),a=Object.defineProperty;e.f=i?a:function(t,e,n){if(r(t),e=s(e,!0),r(n),o)try{return a(t,e,n)}catch(i){}if("get"in n||"set"in n)throw TypeError("Accessors not supported");return"value"in n&&(t[e]=n.value),t}},"9f7f":function(t,e,n){var i=n("d039"),o=function(t,e){return RegExp(t,e)};e.UNSUPPORTED_Y=i((function(){var t=o("a","y");return t.lastIndex=2,null!=t.exec("abcd")})),e.BROKEN_CARET=i((function(){var t=o("^r","gy");return t.lastIndex=2,null!=t.exec("str")}))},a691:function(t,e){var n=Math.ceil,i=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?i:n)(t)}},a9e3:function(t,e,n){"use strict";var i=n("83ab"),o=n("da84"),r=n("94ca"),s=n("6eeb"),a=n("5135"),c=n("c6b6"),l=n("7156"),u=n("c04e"),d=n("d039"),h=n("7c73"),p=n("241c").f,f=n("06cf").f,g=n("9bf2").f,m=n("58a8").trim,k="Number",b=o[k],w=b.prototype,v=c(h(w))==k,_=function(t){var e,n,i,o,r,s,a,c,l=u(t,!1);if("string"==typeof l&&l.length>2)if(l=m(l),e=l.charCodeAt(0),43===e||45===e){if(n=l.charCodeAt(2),88===n||120===n)return NaN}else if(48===e){switch(l.charCodeAt(1)){case 66:case 98:i=2,o=49;break;case 79:case 111:i=8,o=55;break;default:return+l}for(r=l.slice(2),s=r.length,a=0;a<s;a++)if(c=r.charCodeAt(a),c<48||c>o)return NaN;return parseInt(r,i)}return+l};if(r(k,!b(" 0o1")||!b("0b1")||b("+0x1"))){for(var A,C=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof C&&(v?d((function(){w.valueOf.call(n)})):c(n)!=k)?l(new b(_(e)),n,C):_(e)},y=i?p(b):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","),E=0;y.length>E;E++)a(b,A=y[E])&&!a(C,A)&&g(C,A,f(b,A));C.prototype=w,w.constructor=C,s(o,k,C)}},ac1f:function(t,e,n){"use strict";var i=n("23e7"),o=n("9263");i({target:"RegExp",proto:!0,forced:/./.exec!==o},{exec:o})},ad6d:function(t,e,n){"use strict";var i=n("825a");t.exports=function(){var t=i(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.dotAll&&(e+="s"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},b622:function(t,e,n){var i=n("da84"),o=n("5692"),r=n("5135"),s=n("90e3"),a=n("4930"),c=n("fdbf"),l=o("wks"),u=i.Symbol,d=c?u:u&&u.withoutSetter||s;t.exports=function(t){return r(l,t)&&(a||"string"==typeof l[t])||(a&&r(u,t)?l[t]=u[t]:l[t]=d("Symbol."+t)),l[t]}},c04e:function(t,e,n){var i=n("861d");t.exports=function(t,e){if(!i(t))return t;var n,o;if(e&&"function"==typeof(n=t.toString)&&!i(o=n.call(t)))return o;if("function"==typeof(n=t.valueOf)&&!i(o=n.call(t)))return o;if(!e&&"function"==typeof(n=t.toString)&&!i(o=n.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},c430:function(t,e){t.exports=!1},c6b6:function(t,e){var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)}},c6cd:function(t,e,n){var i=n("da84"),o=n("ce4e"),r="__core-js_shared__",s=i[r]||o(r,{});t.exports=s},c8ba:function(t,e){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(i){"object"===typeof window&&(n=window)}t.exports=n},ca84:function(t,e,n){var i=n("5135"),o=n("fc6a"),r=n("4d64").indexOf,s=n("d012");t.exports=function(t,e){var n,a=o(t),c=0,l=[];for(n in a)!i(s,n)&&i(a,n)&&l.push(n);while(e.length>c)i(a,n=e[c++])&&(~r(l,n)||l.push(n));return l}},cc12:function(t,e,n){var i=n("da84"),o=n("861d"),r=i.document,s=o(r)&&o(r.createElement);t.exports=function(t){return s?r.createElement(t):{}}},ce4e:function(t,e,n){var i=n("da84"),o=n("9112");t.exports=function(t,e){try{o(i,t,e)}catch(n){i[t]=e}return e}},d012:function(t,e){t.exports={}},d039:function(t,e){t.exports=function(t){try{return!!t()}catch(e){return!0}}},d066:function(t,e,n){var i=n("428f"),o=n("da84"),r=function(t){return"function"==typeof t?t:void 0};t.exports=function(t,e){return arguments.length<2?r(i[t])||r(o[t]):i[t]&&i[t][e]||o[t]&&o[t][e]}},d1e7:function(t,e,n){"use strict";var i={}.propertyIsEnumerable,o=Object.getOwnPropertyDescriptor,r=o&&!i.call({1:2},1);e.f=r?function(t){var e=o(this,t);return!!e&&e.enumerable}:i},d2bb:function(t,e,n){var i=n("825a"),o=n("3bbe");t.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var t,e=!1,n={};try{t=Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set,t.call(n,[]),e=n instanceof Array}catch(r){}return function(n,r){return i(n),o(r),e?t.call(n,r):n.__proto__=r,n}}():void 0)},d784:function(t,e,n){"use strict";n("ac1f");var i=n("6eeb"),o=n("9263"),r=n("d039"),s=n("b622"),a=n("9112"),c=s("species"),l=RegExp.prototype;t.exports=function(t,e,n,u){var d=s(t),h=!r((function(){var e={};return e[d]=function(){return 7},7!=""[t](e)})),p=h&&!r((function(){var e=!1,n=/a/;return"split"===t&&(n={},n.constructor={},n.constructor[c]=function(){return n},n.flags="",n[d]=/./[d]),n.exec=function(){return e=!0,null},n[d](""),!e}));if(!h||!p||n){var f=/./[d],g=e(d,""[t],(function(t,e,n,i,r){var s=e.exec;return s===o||s===l.exec?h&&!r?{done:!0,value:f.call(e,n,i)}:{done:!0,value:t.call(n,e,i)}:{done:!1}}));i(String.prototype,t,g[0]),i(l,d,g[1])}u&&a(l[d],"sham",!0)}},da84:function(t,e,n){(function(e){var n=function(t){return t&&t.Math==Math&&t};t.exports=n("object"==typeof globalThis&&globalThis)||n("object"==typeof window&&window)||n("object"==typeof self&&self)||n("object"==typeof e&&e)||function(){return this}()||Function("return this")()}).call(this,n("c8ba"))},df75:function(t,e,n){var i=n("ca84"),o=n("7839");t.exports=Object.keys||function(t){return i(t,o)}},e893:function(t,e,n){var i=n("5135"),o=n("56ef"),r=n("06cf"),s=n("9bf2");t.exports=function(t,e){for(var n=o(e),a=s.f,c=r.f,l=0;l<n.length;l++){var u=n[l];i(t,u)||a(t,u,c(e,u))}}},f772:function(t,e,n){var i=n("5692"),o=n("90e3"),r=i("keys");t.exports=function(t){return r[t]||(r[t]=o(t))}},fb15:function(t,e,n){"use strict";if(n.r(e),"undefined"!==typeof window){var i=window.document.currentScript,o=n("8875");i=o(),"currentScript"in document||Object.defineProperty(document,"currentScript",{get:o});var r=i&&i.src.match(/(.+\/)[^/]+\.js(\?.*)?$/);r&&(n.p=r[1])}var s=n("8bbf");function a(t,e,n,i,o,r){return Object(s["openBlock"])(),Object(s["createBlock"])("div",{ref:"slider",class:["slideunlock",{"is-disabled":t.disabled,"is-noanimate":t.noanimate,"is-circle":t.circle,"is-complete":t.IsComplete}],style:t.slideUnlockStyle,onMousemove:e[3]||(e[3]=function(){return t.slideMoving&&t.slideMoving.apply(t,arguments)}),onMouseup:e[4]||(e[4]=function(){return t.slideFinish&&t.slideFinish.apply(t,arguments)}),onTouchmove:e[5]||(e[5]=function(){return t.slideMoving&&t.slideMoving.apply(t,arguments)}),onTouchend:e[6]||(e[6]=function(){return t.slideFinish&&t.slideFinish.apply(t,arguments)})},[Object(s["createVNode"])("div",{class:"slideunlock-progressbar",style:t.progressBarStyle},null,4),Object(s["createVNode"])("div",{class:"slideunlock-text",style:t.Text},Object(s["toDisplayString"])(t.message),5),Object(s["createVNode"])("div",{ref:"handler",class:"slideunlock-handler",style:t.handlerStyle,onMousedown:e[1]||(e[1]=function(){return t.slideStart&&t.slideStart.apply(t,arguments)}),onTouchstart:e[2]||(e[2]=function(){return t.slideStart&&t.slideStart.apply(t,arguments)})},null,36)],38)}n("a9e3"),n("ac1f"),n("5319");var c=n("1280"),l=n.n(c);function u(t,e,n){var i;return function(){var o=this,r=arguments,s=function(){i=null,n||t.apply(o,r)},a=n&&!i;clearTimeout(i),i=setTimeout(s,e),a&&t.apply(o,r)}}var d=Object(s["defineComponent"])({name:"SlideUnlock",props:{autoWidth:{type:Boolean,default:!0},width:{type:Number,default:400},height:{type:Number,default:60},text:{type:String,default:"slide to unlock"},successText:{type:String,default:"success"},circle:{type:Boolean,default:!0},disabled:{type:Boolean,default:!1},noanimate:{type:Boolean,default:!1}},data:function(){return{CanMove:!1,IsComplete:!1,StartPositionWindow:0,HandlerPosition:0,Handler:{left:0},Progress:{width:0},Text:{opacity:1}}},computed:{slideUnlockStyle:function(){return{width:this.autoWidth?"auto":this.width+"px",height:this.height+"px"}},progressBarStyle:function(){return{width:this.Progress.width,height:this.height+"px",background:this.Progress.background,borderRadius:this.circle?this.IsComplete?this.height/2+"px ":this.height/2+"px 0 0 "+this.height/2+"px":0}},handlerStyle:function(){return{left:this.Handler.left,width:this.height+"px",height:this.height+"px"}},message:function(){return this.IsComplete?this.successText:this.text},sliderWidth:function(){return this.autoWidth?this.$refs.slider.clientWidth-2*parseInt(getComputedStyle(document.documentElement).getPropertyValue("--su-size-padding").replace("px",""),10):this.width}},watch:{autoWidth:function(){if(this.IsComplete){var t=this;setTimeout((function(){t.Progress.width=t.sliderWidth+"px"}),1)}},width:function(){this.IsComplete&&(this.Progress.width=this.sliderWidth+"px")}},methods:{fadeText:u((function(){var t=(this.sliderWidth-this.height)*(100/this.HandlerPosition)/1e3-.1;this.CanMove&&(this.Text.opacity=t)}),5),slideStart:function(t){var e=this;this.IsComplete||(this.CanMove=!0,this.StartPositionWindow=(t.pageX||t.touches[0].pageX)-parseInt(this.$refs.handler.style.left.replace("px",""),10)),document.onmousemove=function(t){var n=t;return e.slideMoving(n),!1},document.onmouseup=function(t){var n=t;return e.slideFinish(n),document.onmousemove=null,!1}},slideMoving:function(t){this.CanMove&&!this.IsComplete&&(this.HandlerPosition=(t.pageX||t.touches[0].pageX)-this.StartPositionWindow,this.HandlerPosition>0&&this.HandlerPosition<=this.sliderWidth-this.height?(this.Handler.left=this.HandlerPosition+"px",this.Progress.width=this.HandlerPosition+this.height/2+"px",this.fadeText()):this.HandlerPosition>this.sliderWidth-this.height&&(this.Handler.left=this.sliderWidth-this.height+"px",this.Progress.width=this.sliderWidth+"px",this.passVerify()))},slideFinish:function(t){var e=this;this.CanMove&&!this.IsComplete&&(this.HandlerPosition=(t.pageX||t.changedTouches[0].pageX)-this.StartPositionWindow,this.HandlerPosition<this.sliderWidth-this.height&&(l()({startValue:this.HandlerPosition,endValue:0,durationMs:200,onStep:function(t){e.Handler.left=t+"px",e.Progress.width=t+e.height/2+"px"}}),this.Text.opacity=1),this.CanMove=!1)},passVerify:function(){this.IsComplete=!0,this.CanMove=!1,this.$emit("completed")},reset:function(){this.CanMove=!1,this.IsComplete=!1,this.StartPositionWindow=0,this.HandlerPosition=0,this.Handler.left=0,this.Progress.width=0,this.Text.opacity=1}}});n("7005"),d.render=a;var h=d,p=h;e["default"]=p},fc6a:function(t,e,n){var i=n("44ad"),o=n("1d80");t.exports=function(t){return i(o(t))}},fce3:function(t,e,n){var i=n("d039");t.exports=i((function(){var t=RegExp(".","string".charAt(0));return!(t.dotAll&&t.exec("\n")&&"s"===t.flags)}))},fdbf:function(t,e,n){var i=n("4930");t.exports=i&&!Symbol.sham&&"symbol"==typeof Symbol.iterator}})}))},1658:function(t,e,n){"use strict";n.d(e,{lr:function(){return p},W_:function(){return m},tl:function(){return b},Mi:function(){return k}});var i=n(3396),o=n(4870);
/**
 * Vue 3 Carousel 0.1.40
 * (c) 2022
 * @license MIT
 */
const r={itemsToShow:1,itemsToScroll:1,modelValue:0,transition:300,autoplay:0,snapAlign:"center",wrapAround:!1,pauseAutoplayOnHover:!1,mouseDrag:!0,touchDrag:!0,dir:"ltr",breakpoints:void 0};function s(t,e){let n;return function(...i){n&&clearTimeout(n),n=setTimeout((()=>{t(...i),n=null}),e)}}function a(t,e){let n;return function(...i){const o=this;n||(t.apply(o,i),n=!0,setTimeout((()=>n=!1),e))}}function c(t){var e,n,i;return t?"CarouselSlide"===(null===(n=null===(e=t[0])||void 0===e?void 0:e.type)||void 0===n?void 0:n.name)?t:(null===(i=t[0])||void 0===i?void 0:i.children)||[]:[]}function l(t,e){if(t.wrapAround)return e-1;switch(t.snapAlign){case"start":return e-t.itemsToShow;case"end":return e-1;case"center":case"center-odd":return e-Math.ceil(t.itemsToShow/2);case"center-even":return e-Math.ceil(t.itemsToShow/2);default:return 0}}function u(t){if(t.wrapAround)return 0;switch(t.snapAlign){case"start":return 0;case"end":return t.itemsToShow-1;case"center":case"center-odd":return Math.floor((t.itemsToShow-1)/2);case"center-even":return Math.floor((t.itemsToShow-2)/2);default:return 0}}function d(t,e,n,i){return t.wrapAround?e:Math.min(Math.max(e,i),n)}function h({slidesBuffer:t,currentSlide:e,snapAlign:n,itemsToShow:i,wrapAround:o,slidesCount:r}){let s=t.indexOf(e);if(-1===s&&(s=t.indexOf(Math.ceil(e))),"center"===n||"center-odd"===n?s-=(i-1)/2:"center-even"===n?s-=(i-2)/2:"end"===n&&(s-=i-1),!o){const t=r-i,e=0;s=Math.max(Math.min(s,t),e)}return s}var p=(0,i.aZ)({name:"Carousel",props:{itemsToShow:{default:r.itemsToShow,type:Number},itemsToScroll:{default:r.itemsToScroll,type:Number},wrapAround:{default:r.wrapAround,type:Boolean},snapAlign:{default:r.snapAlign,validator(t){return["start","end","center","center-even","center-odd"].includes(t)}},transition:{default:r.transition,type:Number},breakpoints:{default:r.breakpoints,type:Object},autoplay:{default:r.autoplay,type:Number},pauseAutoplayOnHover:{default:r.pauseAutoplayOnHover,type:Boolean},modelValue:{default:void 0,type:Number},mouseDrag:{default:r.mouseDrag,type:Boolean},touchDrag:{default:r.touchDrag,type:Boolean},dir:{default:r.dir,validator(t){return["rtl","ltr"].includes(t)}},settings:{default(){return{}},type:Object}},setup(t,{slots:e,emit:n,expose:p}){var f;const g=(0,o.iH)(null),m=(0,o.iH)([]),k=(0,o.iH)([]),b=(0,o.iH)(0),w=(0,o.iH)(1),v=(0,o.iH)(null),_=(0,o.iH)(null);let A=(0,o.iH)({}),C=Object.assign({},r);const y=(0,o.qj)(Object.assign({},C)),E=(0,o.iH)(null!==(f=y.modelValue)&&void 0!==f?f:0),x=(0,o.iH)(0),I=(0,o.iH)(0),T=(0,o.iH)(0),D=(0,o.iH)(0);function S(){const e=Object.assign(Object.assign({},t),t.settings);A=(0,o.iH)(Object.assign({},e.breakpoints)),C=Object.assign(Object.assign({},e),{settings:void 0,breakpoints:void 0}),N(C)}function M(){const t=Object.keys(A.value).map((t=>Number(t))).sort(((t,e)=>+e-+t));let e=Object.assign({},C);t.some((t=>{const n=window.matchMedia(`(min-width: ${t}px)`).matches;return!!n&&(e=Object.assign(Object.assign({},e),A.value[t]),!0)})),N(e)}function N(t){for(let e in t)y[e]=t[e]}(0,i.JJ)("config",y),(0,i.JJ)("slidesBuffer",k),(0,i.JJ)("slidesCount",w),(0,i.JJ)("currentSlide",E),(0,i.JJ)("maxSlide",T),(0,i.JJ)("minSlide",D);const O=s((()=>{A.value&&(M(),B()),P()}),16);function P(){if(!g.value)return;const t=g.value.getBoundingClientRect();b.value=t.width/y.itemsToShow}function B(){w.value=Math.max(m.value.length,1),w.value<=0||(I.value=Math.ceil((w.value-1)/2),T.value=l(y,w.value),D.value=u(y),E.value=d(y,E.value,T.value,D.value))}function L(){const t=[...Array(w.value).keys()],e=y.wrapAround&&y.itemsToShow+1<=w.value;if(e){const e=1!==y.itemsToShow?Math.round((w.value-y.itemsToShow)/2):0;let n=e-E.value;if("end"===y.snapAlign?n+=Math.floor(y.itemsToShow-1):"center"!==y.snapAlign&&"center-odd"!==y.snapAlign||n++,n<0)for(let i=n;i<0;i++)t.push(Number(t.shift()));else for(let i=0;i<n;i++)t.unshift(Number(t.pop()))}k.value=t}(0,i.bv)((()=>{A.value&&(M(),B()),(0,i.Y3)((()=>setTimeout(P,16))),y.autoplay&&y.autoplay>0&&K(),window.addEventListener("resize",O,{passive:!0})})),(0,i.Ah)((()=>{_.value&&clearTimeout(_.value),Z(!1)}));let R=!1;const j={x:0,y:0},z={x:0,y:0},F=(0,o.qj)({x:0,y:0}),V=(0,o.iH)(!1),U=(0,o.iH)(!1),H=()=>{U.value=!0},q=()=>{U.value=!1};function $(t){R="touchstart"===t.type,!R&&0!==t.button||Y.value||(V.value=!0,j.x=R?t.touches[0].clientX:t.clientX,j.y=R?t.touches[0].clientY:t.clientY,document.addEventListener(R?"touchmove":"mousemove",G,!0),document.addEventListener(R?"touchend":"mouseup",W,!0))}const G=a((t=>{z.x=R?t.touches[0].clientX:t.clientX,z.y=R?t.touches[0].clientY:t.clientY;const e=z.x-j.x,n=z.y-j.y;F.y=n,F.x=e}),16);function W(){V.value=!1;const t="rtl"===y.dir?-1:1,e=.4*Math.sign(F.x),n=Math.round(F.x/b.value+e)*t;let i=d(y,E.value-n,T.value,D.value);if(n){const t=e=>{e.stopPropagation(),window.removeEventListener("click",t,!0)};window.addEventListener("click",t,!0)}Q(i),F.x=0,F.y=0,document.removeEventListener(R?"touchmove":"mousemove",G,!0),document.removeEventListener(R?"touchend":"mouseup",W,!0)}function K(){v.value=setInterval((()=>{y.pauseAutoplayOnHover&&U.value||J()}),y.autoplay)}function Z(t=!0){v.value&&(clearInterval(v.value),t&&K())}const Y=(0,o.iH)(!1);function Q(t,e=!1){if(Z(),E.value===t||Y.value)return;const i=w.value-1;return t>i?Q(t-w.value):t<0?Q(t+w.value):(Y.value=!0,x.value=E.value,E.value=t,e||n("update:modelValue",E.value),void(_.value=setTimeout((()=>{y.wrapAround&&L(),Y.value=!1}),y.transition)))}function J(){let t=E.value+y.itemsToScroll;y.wrapAround||(t=Math.min(t,T.value)),Q(t)}function X(){let t=E.value-y.itemsToScroll;y.wrapAround||(t=Math.max(t,D.value)),Q(t)}const tt={slideTo:Q,next:J,prev:X};(0,i.JJ)("nav",tt);const et=(0,i.Fl)((()=>h({slidesBuffer:k.value,itemsToShow:y.itemsToShow,snapAlign:y.snapAlign,wrapAround:Boolean(y.wrapAround),currentSlide:E.value,slidesCount:w.value})));(0,i.JJ)("slidesToScroll",et);const nt=(0,i.Fl)((()=>{const t="rtl"===y.dir?-1:1,e=et.value*b.value*t;return{transform:`translateX(${F.x-e}px)`,transition:`${Y.value?y.transition:0}ms`}}));function it(){S()}function ot(){S(),M(),B(),L(),P()}function rt(){B(),L()}(0,i.YP)((()=>Object.values(t)),ot),it(),(0,i.m0)((()=>{const e=w.value!==m.value.length,n=void 0!==t.modelValue&&E.value!==t.modelValue;n&&Q(Number(t.modelValue),!0),e&&rt()}));const st={config:y,slidesBuffer:k,slidesCount:w,slideWidth:b,currentSlide:E,maxSlide:T,minSlide:D,middleSlide:I};p({updateBreakpointsConfigs:M,updateSlidesData:B,updateSlideWidth:P,updateSlidesBuffer:L,initCarousel:it,restartCarousel:ot,updateCarousel:rt,slideTo:Q,next:J,prev:X,nav:tt,data:st});const at=e.default||e.slides,ct=e.addons,lt=(0,o.qj)(st);return()=>{const t=c(null===at||void 0===at?void 0:at(lt)),e=(null===ct||void 0===ct?void 0:ct(lt))||[];m.value=t,t.forEach(((t,e)=>t.props.index=e));const n=(0,i.h)("ol",{class:"carousel__track",style:nt.value,onMousedown:y.mouseDrag?$:null,onTouchstart:y.touchDrag?$:null},t),o=(0,i.h)("div",{class:"carousel__viewport"},n);return(0,i.h)("section",{ref:g,class:{carousel:!0,"carousel--rtl":"rtl"===y.dir},dir:y.dir,"aria-label":"Gallery",onMouseenter:H,onMouseleave:q},[o,e])}}});const f={arrowUp:"M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z",arrowDown:"M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z",arrowRight:"M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z",arrowLeft:"M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z"},g=t=>{const e=t.name;if(!e||"string"!==typeof e)return;const n=f[e],o=(0,i.h)("path",{d:n}),r=t.title||e,s=(0,i.h)("title",null,e);return(0,i.h)("svg",{class:"carousel__icon",viewBox:"0 0 24 24",role:"img",ariaLabel:r},[s,o])};g.props={name:String,title:String};const m=(t,{slots:e,attrs:n})=>{const{next:s,prev:a}=e,c=(0,i.f3)("config",(0,o.qj)(Object.assign({},r))),l=(0,i.f3)("maxSlide",(0,o.iH)(1)),u=(0,i.f3)("minSlide",(0,o.iH)(1)),d=(0,i.f3)("currentSlide",(0,o.iH)(1)),h=(0,i.f3)("nav",{}),p="rtl"===c.dir,f=(0,i.h)("button",{type:"button",class:["carousel__prev",!c.wrapAround&&d.value<=u.value&&"carousel__prev--in-active",null===n||void 0===n?void 0:n.class],"aria-label":"Navigate to previous slide",onClick:h.prev},(null===a||void 0===a?void 0:a())||(0,i.h)(g,{name:p?"arrowRight":"arrowLeft"})),m=(0,i.h)("button",{type:"button",class:["carousel__next",!c.wrapAround&&d.value>=l.value&&"carousel__next--in-active",null===n||void 0===n?void 0:n.class],"aria-label":"Navigate to next slide",onClick:h.next},(null===s||void 0===s?void 0:s())||(0,i.h)(g,{name:p?"arrowLeft":"arrowRight"}));return[f,m]};var k=(0,i.aZ)({name:"CarouselSlide",props:{index:{type:Number,default:1}},setup(t,{slots:e}){const n=(0,i.f3)("config",(0,o.qj)(Object.assign({},r))),s=(0,i.f3)("slidesBuffer",(0,o.iH)([])),a=(0,i.f3)("currentSlide",(0,o.iH)(0)),c=(0,i.f3)("slidesToScroll",(0,o.iH)(0)),l=(0,o.iH)(t.index);function u(){l.value=s.value.indexOf(t.index)}n.wrapAround&&(u(),(0,i.YP)(s,u));const d=(0,i.Fl)((()=>{const t=n.itemsToShow,e=1/t*100+"%";return{width:e,order:l.value.toString()}})),h=()=>t.index===a.value,p=()=>{const e=Math.ceil(c.value),i=Math.floor(c.value+n.itemsToShow),o=s.value.slice(e,i);return o.includes(t.index)},f=()=>t.index===s.value[Math.ceil(c.value)-1],g=()=>t.index===s.value[Math.floor(c.value+n.itemsToShow)];return()=>{var t;return(0,i.h)("li",{style:d.value,class:{carousel__slide:!0,"carousel__slide--active":h(),"carousel__slide--visible":p(),"carousel__slide--prev":f(),"carousel__slide--next":g()}},null===(t=e.default)||void 0===t?void 0:t.call(e))}}});const b=()=>{const t=(0,i.f3)("maxSlide",(0,o.iH)(1)),e=(0,i.f3)("minSlide",(0,o.iH)(1)),n=(0,i.f3)("currentSlide",(0,o.iH)(1)),r=(0,i.f3)("nav",{});function s(t){r.slideTo(t)}const a=i=>{const o=n.value;return o===i||o>t.value&&i>=t.value||o<e.value&&i<=e.value},c=[];for(let o=e.value;o<t.value+1;o++){const t=(0,i.h)("button",{type:"button",class:{"carousel__pagination-button":!0,"carousel__pagination-button--active":a(o)},"aria-label":`Navigate to slide ${o+1}`,onClick:()=>s(o)}),e=(0,i.h)("li",{class:"carousel__pagination-item",key:o},t);c.push(e)}return(0,i.h)("ol",{class:"carousel__pagination"},c)}},6866:function(t,e,n){"use strict";n.r(e),n.d(e,{BaseTransition:function(){return i.P$},Comment:function(){return i.sv},EffectScope:function(){return i.Bj},Fragment:function(){return i.HY},KeepAlive:function(){return i.Ob},ReactiveEffect:function(){return i.qq},Static:function(){return i.qG},Suspense:function(){return i.n4},Teleport:function(){return i.lR},Text:function(){return i.xv},Transition:function(){return i.uT},TransitionGroup:function(){return i.W3},VueElement:function(){return i.a2},callWithAsyncErrorHandling:function(){return i.$d},callWithErrorHandling:function(){return i.KU},camelize:function(){return i._A},capitalize:function(){return i.kC},cloneVNode:function(){return i.Ho},compatUtils:function(){return i.ry},computed:function(){return i.Fl},createApp:function(){return i.ri},createBlock:function(){return i.j4},createCommentVNode:function(){return i.kq},createElementBlock:function(){return i.iD},createElementVNode:function(){return i._},createHydrationRenderer:function(){return i.Eo},createPropsRestProxy:function(){return i.p1},createRenderer:function(){return i.Us},createSSRApp:function(){return i.vr},createSlots:function(){return i.Nv},createStaticVNode:function(){return i.uE},createTextVNode:function(){return i.Uk},createVNode:function(){return i.Wm},customRef:function(){return i.ZM},defineAsyncComponent:function(){return i.RC},defineComponent:function(){return i.aZ},defineCustomElement:function(){return i.MW},defineEmits:function(){return i.Bz},defineExpose:function(){return i.WY},defineProps:function(){return i.yb},defineSSRCustomElement:function(){return i.Ah},devtools:function(){return i.mW},effect:function(){return i.cE},effectScope:function(){return i.B},getCurrentInstance:function(){return i.FN},getCurrentScope:function(){return i.nZ},getTransitionRawChildren:function(){return i.Q6},guardReactiveProps:function(){return i.F4},h:function(){return i.h},handleError:function(){return i.S3},hydrate:function(){return i.ZB},initCustomFormatter:function(){return i.Mr},initDirectivesForSSR:function(){return i.Nd},inject:function(){return i.f3},isMemoSame:function(){return i.nQ},isProxy:function(){return i.X3},isReactive:function(){return i.PG},isReadonly:function(){return i.$y},isRef:function(){return i.dq},isRuntimeOnly:function(){return i.of},isShallow:function(){return i.yT},isVNode:function(){return i.lA},markRaw:function(){return i.Xl},mergeDefaults:function(){return i.u_},mergeProps:function(){return i.dG},nextTick:function(){return i.Y3},normalizeClass:function(){return i.C_},normalizeProps:function(){return i.vs},normalizeStyle:function(){return i.j5},onActivated:function(){return i.dl},onBeforeMount:function(){return i.wF},onBeforeUnmount:function(){return i.Jd},onBeforeUpdate:function(){return i.Xn},onDeactivated:function(){return i.se},onErrorCaptured:function(){return i.d1},onMounted:function(){return i.bv},onRenderTracked:function(){return i.bT},onRenderTriggered:function(){return i.Yq},onScopeDispose:function(){return i.EB},onServerPrefetch:function(){return i.vl},onUnmounted:function(){return i.SK},onUpdated:function(){return i.ic},openBlock:function(){return i.wg},popScopeId:function(){return i.Cn},provide:function(){return i.JJ},proxyRefs:function(){return i.WL},pushScopeId:function(){return i.dD},queuePostFlushCb:function(){return i.qb},reactive:function(){return i.qj},readonly:function(){return i.OT},ref:function(){return i.iH},registerRuntimeCompiler:function(){return i.Y1},render:function(){return i.sY},renderList:function(){return i.Ko},renderSlot:function(){return i.WI},resolveComponent:function(){return i.up},resolveDirective:function(){return i.Q2},resolveDynamicComponent:function(){return i.LL},resolveFilter:function(){return i.eq},resolveTransitionHooks:function(){return i.U2},setBlockTracking:function(){return i.qZ},setDevtoolsHook:function(){return i.ec},setTransitionHooks:function(){return i.nK},shallowReactive:function(){return i.Um},shallowReadonly:function(){return i.YS},shallowRef:function(){return i.XI},ssrContextKey:function(){return i.Uc},ssrUtils:function(){return i.G},stop:function(){return i.sT},toDisplayString:function(){return i.zw},toHandlerKey:function(){return i.hR},toHandlers:function(){return i.mx},toRaw:function(){return i.IU},toRef:function(){return i.Vh},toRefs:function(){return i.BK},transformVNodeArgs:function(){return i.C3},triggerRef:function(){return i.oR},unref:function(){return i.SU},useAttrs:function(){return i.l1},useCssModule:function(){return i.fb},useCssVars:function(){return i.sj},useSSRContext:function(){return i.Zq},useSlots:function(){return i.Rr},useTransitionState:function(){return i.Y8},vModelCheckbox:function(){return i.e8},vModelDynamic:function(){return i.YZ},vModelRadio:function(){return i.G2},vModelSelect:function(){return i.bM},vModelText:function(){return i.nr},vShow:function(){return i.F8},version:function(){return i.i8},warn:function(){return i.ZK},watch:function(){return i.YP},watchEffect:function(){return i.m0},watchPostEffect:function(){return i.Rh},watchSyncEffect:function(){return i.yX},withAsyncContext:function(){return i.mv},withCtx:function(){return i.w5},withDefaults:function(){return i.b9},withDirectives:function(){return i.wy},withKeys:function(){return i.D2},withMemo:function(){return i.MX},withModifiers:function(){return i.iM},withScopeId:function(){return i.HX},compile:function(){return o}});var i=n(9242);const o=()=>{0}},4509:function(t,e,n){"use strict";n.d(e,{rz:function(){return h},vn:function(){return f},L4:function(){return p}});n(1703);function i(t,e){return o(t)||r(t,e)||s(t,e)||c()}function o(t){if(Array.isArray(t))return t}function r(t,e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t)){var n=[],i=!0,o=!1,r=void 0;try{for(var s,a=t[Symbol.iterator]();!(i=(s=a.next()).done);i=!0)if(n.push(s.value),e&&n.length===e)break}catch(c){o=!0,r=c}finally{try{i||null==a["return"]||a["return"]()}finally{if(o)throw r}}return n}}function s(t,e){if(t){if("string"===typeof t)return a(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?a(t,e):void 0}}function a(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,i=new Array(e);n<e;n++)i[n]=t[n];return i}function c(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function l(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return t.reduce((function(t,e){var n=e.split(".").slice(-1)[0];if(t[n])throw new Error("The key `".concat(n,"` is already in use."));return t[n]=e,t}),{})}function u(t){return Object.keys(t).map((function(e){return[e,t[e]]}))}function d(t){return function(){for(var e=arguments.length,n=new Array(e),o=0;o<e;o++)n[o]=arguments[o];var r="string"===typeof n[0]?[].concat(n):[""].concat(n),s=i(r,4),a=s[0],c=s[1],l=s[2],u=s[3];return a.length&&"/"!==a.charAt(a.length-1)&&(a+="/"),l="".concat(a).concat(l||"getField"),u="".concat(a).concat(u||"updateField"),t(a,c,l,u)}}function h(t){return function(e){return e.split(/[.[\]]+/).reduce((function(t,e){return t[e]}),t)}}function p(t,e){var n=e.path,i=e.value;n.split(/[.[\]]+/).reduce((function(t,e,n,o){return o.length===n+1&&(t[e]=i),t[e]}),t)}var f=d((function(t,e,n,i){var o=Array.isArray(e)?l(e):e;return Object.keys(o).reduce((function(t,e){var r=o[e],s={get:function(){return this.$store.getters[n](r)},set:function(t){this.$store.commit(i,{path:r,value:t})}};return t[e]=s,t}),{})}));d((function(t,e,n,i){var o=Array.isArray(e)?l(e):e;return Object.keys(o).reduce((function(t,e){var r=o[e];return t[e]={get:function(){var t=this.$store,e=u(t.getters[n](r));return e.map((function(e){return Object.keys(e[1]).reduce((function(o,s){var a="".concat(r,"[").concat(e[0],"].").concat(s);return Object.defineProperty(o,s,{get:function(){return t.getters[n](a)},set:function(e){t.commit(i,{path:a,value:e})}})}),{})}))}},t}),{})}))},9749:function(t,e,n){"use strict";n.d(e,{MT:function(){return Y},Se:function(){return tt},OI:function(){return X}});n(1703);var i=n(3396),o=n(4870);function r(){return s().__VUE_DEVTOOLS_GLOBAL_HOOK__}function s(){return"undefined"!==typeof navigator&&"undefined"!==typeof window?window:"undefined"!==typeof n.g?n.g:{}}const a="function"===typeof Proxy,c="devtools-plugin:setup",l="plugin:settings:set";class u{constructor(t,e){this.target=null,this.targetQueue=[],this.onQueue=[],this.plugin=t,this.hook=e;const n={};if(t.settings)for(const s in t.settings){const e=t.settings[s];n[s]=e.defaultValue}const i=`__vue-devtools-plugin-settings__${t.id}`;let o=Object.assign({},n);try{const t=localStorage.getItem(i),e=JSON.parse(t);Object.assign(o,e)}catch(r){}this.fallbacks={getSettings(){return o},setSettings(t){try{localStorage.setItem(i,JSON.stringify(t))}catch(r){}o=t}},e&&e.on(l,((t,e)=>{t===this.plugin.id&&this.fallbacks.setSettings(e)})),this.proxiedOn=new Proxy({},{get:(t,e)=>this.target?this.target.on[e]:(...t)=>{this.onQueue.push({method:e,args:t})}}),this.proxiedTarget=new Proxy({},{get:(t,e)=>this.target?this.target[e]:"on"===e?this.proxiedOn:Object.keys(this.fallbacks).includes(e)?(...t)=>(this.targetQueue.push({method:e,args:t,resolve:()=>{}}),this.fallbacks[e](...t)):(...t)=>new Promise((n=>{this.targetQueue.push({method:e,args:t,resolve:n})}))})}async setRealTarget(t){this.target=t;for(const e of this.onQueue)this.target.on[e.method](...e.args);for(const e of this.targetQueue)e.resolve(await this.target[e.method](...e.args))}}function d(t,e){const n=t,i=s(),o=r(),l=a&&n.enableEarlyProxy;if(!o||!i.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__&&l){const t=l?new u(n,o):null,r=i.__VUE_DEVTOOLS_PLUGINS__=i.__VUE_DEVTOOLS_PLUGINS__||[];r.push({pluginDescriptor:n,setupFn:e,proxy:t}),t&&e(t.proxiedTarget)}else o.emit(c,t,e)}
/*!
 * vuex v4.1.0
 * (c) 2022 Evan You
 * @license MIT
 */
var h="store";function p(t,e){Object.keys(t).forEach((function(n){return e(t[n],n)}))}function f(t){return null!==t&&"object"===typeof t}function g(t){return t&&"function"===typeof t.then}function m(t,e){return function(){return t(e)}}function k(t,e,n){return e.indexOf(t)<0&&(n&&n.prepend?e.unshift(t):e.push(t)),function(){var n=e.indexOf(t);n>-1&&e.splice(n,1)}}function b(t,e){t._actions=Object.create(null),t._mutations=Object.create(null),t._wrappedGetters=Object.create(null),t._modulesNamespaceMap=Object.create(null);var n=t.state;v(t,n,[],t._modules.root,!0),w(t,n,e)}function w(t,e,n){var r=t._state,s=t._scope;t.getters={},t._makeLocalGettersCache=Object.create(null);var a=t._wrappedGetters,c={},l={},u=(0,o.B)(!0);u.run((function(){p(a,(function(e,n){c[n]=m(e,t),l[n]=(0,i.Fl)((function(){return c[n]()})),Object.defineProperty(t.getters,n,{get:function(){return l[n].value},enumerable:!0})}))})),t._state=(0,o.qj)({data:e}),t._scope=u,t.strict&&x(t),r&&n&&t._withCommit((function(){r.data=null})),s&&s.stop()}function v(t,e,n,i,o){var r=!n.length,s=t._modules.getNamespace(n);if(i.namespaced&&(t._modulesNamespaceMap[s],t._modulesNamespaceMap[s]=i),!r&&!o){var a=I(e,n.slice(0,-1)),c=n[n.length-1];t._withCommit((function(){a[c]=i.state}))}var l=i.context=_(t,s,n);i.forEachMutation((function(e,n){var i=s+n;C(t,i,e,l)})),i.forEachAction((function(e,n){var i=e.root?n:s+n,o=e.handler||e;y(t,i,o,l)})),i.forEachGetter((function(e,n){var i=s+n;E(t,i,e,l)})),i.forEachChild((function(i,r){v(t,e,n.concat(r),i,o)}))}function _(t,e,n){var i=""===e,o={dispatch:i?t.dispatch:function(n,i,o){var r=T(n,i,o),s=r.payload,a=r.options,c=r.type;return a&&a.root||(c=e+c),t.dispatch(c,s)},commit:i?t.commit:function(n,i,o){var r=T(n,i,o),s=r.payload,a=r.options,c=r.type;a&&a.root||(c=e+c),t.commit(c,s,a)}};return Object.defineProperties(o,{getters:{get:i?function(){return t.getters}:function(){return A(t,e)}},state:{get:function(){return I(t.state,n)}}}),o}function A(t,e){if(!t._makeLocalGettersCache[e]){var n={},i=e.length;Object.keys(t.getters).forEach((function(o){if(o.slice(0,i)===e){var r=o.slice(i);Object.defineProperty(n,r,{get:function(){return t.getters[o]},enumerable:!0})}})),t._makeLocalGettersCache[e]=n}return t._makeLocalGettersCache[e]}function C(t,e,n,i){var o=t._mutations[e]||(t._mutations[e]=[]);o.push((function(e){n.call(t,i.state,e)}))}function y(t,e,n,i){var o=t._actions[e]||(t._actions[e]=[]);o.push((function(e){var o=n.call(t,{dispatch:i.dispatch,commit:i.commit,getters:i.getters,state:i.state,rootGetters:t.getters,rootState:t.state},e);return g(o)||(o=Promise.resolve(o)),t._devtoolHook?o.catch((function(e){throw t._devtoolHook.emit("vuex:error",e),e})):o}))}function E(t,e,n,i){t._wrappedGetters[e]||(t._wrappedGetters[e]=function(t){return n(i.state,i.getters,t.state,t.getters)})}function x(t){(0,i.YP)((function(){return t._state.data}),(function(){0}),{deep:!0,flush:"sync"})}function I(t,e){return e.reduce((function(t,e){return t[e]}),t)}function T(t,e,n){return f(t)&&t.type&&(n=e,e=t,t=t.type),{type:t,payload:e,options:n}}var D="vuex bindings",S="vuex:mutations",M="vuex:actions",N="vuex",O=0;function P(t,e){d({id:"org.vuejs.vuex",app:t,label:"Vuex",homepage:"https://next.vuex.vuejs.org/",logo:"https://vuejs.org/images/icons/favicon-96x96.png",packageName:"vuex",componentStateTypes:[D]},(function(n){n.addTimelineLayer({id:S,label:"Vuex Mutations",color:B}),n.addTimelineLayer({id:M,label:"Vuex Actions",color:B}),n.addInspector({id:N,label:"Vuex",icon:"storage",treeFilterPlaceholder:"Filter stores..."}),n.on.getInspectorTree((function(n){if(n.app===t&&n.inspectorId===N)if(n.filter){var i=[];V(i,e._modules.root,n.filter,""),n.rootNodes=i}else n.rootNodes=[F(e._modules.root,"")]})),n.on.getInspectorState((function(n){if(n.app===t&&n.inspectorId===N){var i=n.nodeId;A(e,i),n.state=U(q(e._modules,i),"root"===i?e.getters:e._makeLocalGettersCache,i)}})),n.on.editInspectorState((function(n){if(n.app===t&&n.inspectorId===N){var i=n.nodeId,o=n.path;"root"!==i&&(o=i.split("/").filter(Boolean).concat(o)),e._withCommit((function(){n.set(e._state.data,o,n.state.value)}))}})),e.subscribe((function(t,e){var i={};t.payload&&(i.payload=t.payload),i.state=e,n.notifyComponentUpdate(),n.sendInspectorTree(N),n.sendInspectorState(N),n.addTimelineEvent({layerId:S,event:{time:Date.now(),title:t.type,data:i}})})),e.subscribeAction({before:function(t,e){var i={};t.payload&&(i.payload=t.payload),t._id=O++,t._time=Date.now(),i.state=e,n.addTimelineEvent({layerId:M,event:{time:t._time,title:t.type,groupId:t._id,subtitle:"start",data:i}})},after:function(t,e){var i={},o=Date.now()-t._time;i.duration={_custom:{type:"duration",display:o+"ms",tooltip:"Action duration",value:o}},t.payload&&(i.payload=t.payload),i.state=e,n.addTimelineEvent({layerId:M,event:{time:Date.now(),title:t.type,groupId:t._id,subtitle:"end",data:i}})}})}))}var B=8702998,L=6710886,R=16777215,j={label:"namespaced",textColor:R,backgroundColor:L};function z(t){return t&&"root"!==t?t.split("/").slice(-2,-1)[0]:"Root"}function F(t,e){return{id:e||"root",label:z(e),tags:t.namespaced?[j]:[],children:Object.keys(t._children).map((function(n){return F(t._children[n],e+n+"/")}))}}function V(t,e,n,i){i.includes(n)&&t.push({id:i||"root",label:i.endsWith("/")?i.slice(0,i.length-1):i||"Root",tags:e.namespaced?[j]:[]}),Object.keys(e._children).forEach((function(o){V(t,e._children[o],n,i+o+"/")}))}function U(t,e,n){e="root"===n?e:e[n];var i=Object.keys(e),o={state:Object.keys(t.state).map((function(e){return{key:e,editable:!0,value:t.state[e]}}))};if(i.length){var r=H(e);o.getters=Object.keys(r).map((function(t){return{key:t.endsWith("/")?z(t):t,editable:!1,value:$((function(){return r[t]}))}}))}return o}function H(t){var e={};return Object.keys(t).forEach((function(n){var i=n.split("/");if(i.length>1){var o=e,r=i.pop();i.forEach((function(t){o[t]||(o[t]={_custom:{value:{},display:t,tooltip:"Module",abstract:!0}}),o=o[t]._custom.value})),o[r]=$((function(){return t[n]}))}else e[n]=$((function(){return t[n]}))})),e}function q(t,e){var n=e.split("/").filter((function(t){return t}));return n.reduce((function(t,i,o){var r=t[i];if(!r)throw new Error('Missing module "'+i+'" for path "'+e+'".');return o===n.length-1?r:r._children}),"root"===e?t:t.root._children)}function $(t){try{return t()}catch(e){return e}}var G=function(t,e){this.runtime=e,this._children=Object.create(null),this._rawModule=t;var n=t.state;this.state=("function"===typeof n?n():n)||{}},W={namespaced:{configurable:!0}};W.namespaced.get=function(){return!!this._rawModule.namespaced},G.prototype.addChild=function(t,e){this._children[t]=e},G.prototype.removeChild=function(t){delete this._children[t]},G.prototype.getChild=function(t){return this._children[t]},G.prototype.hasChild=function(t){return t in this._children},G.prototype.update=function(t){this._rawModule.namespaced=t.namespaced,t.actions&&(this._rawModule.actions=t.actions),t.mutations&&(this._rawModule.mutations=t.mutations),t.getters&&(this._rawModule.getters=t.getters)},G.prototype.forEachChild=function(t){p(this._children,t)},G.prototype.forEachGetter=function(t){this._rawModule.getters&&p(this._rawModule.getters,t)},G.prototype.forEachAction=function(t){this._rawModule.actions&&p(this._rawModule.actions,t)},G.prototype.forEachMutation=function(t){this._rawModule.mutations&&p(this._rawModule.mutations,t)},Object.defineProperties(G.prototype,W);var K=function(t){this.register([],t,!1)};function Z(t,e,n){if(e.update(n),n.modules)for(var i in n.modules){if(!e.getChild(i))return void 0;Z(t.concat(i),e.getChild(i),n.modules[i])}}K.prototype.get=function(t){return t.reduce((function(t,e){return t.getChild(e)}),this.root)},K.prototype.getNamespace=function(t){var e=this.root;return t.reduce((function(t,n){return e=e.getChild(n),t+(e.namespaced?n+"/":"")}),"")},K.prototype.update=function(t){Z([],this.root,t)},K.prototype.register=function(t,e,n){var i=this;void 0===n&&(n=!0);var o=new G(e,n);if(0===t.length)this.root=o;else{var r=this.get(t.slice(0,-1));r.addChild(t[t.length-1],o)}e.modules&&p(e.modules,(function(e,o){i.register(t.concat(o),e,n)}))},K.prototype.unregister=function(t){var e=this.get(t.slice(0,-1)),n=t[t.length-1],i=e.getChild(n);i&&i.runtime&&e.removeChild(n)},K.prototype.isRegistered=function(t){var e=this.get(t.slice(0,-1)),n=t[t.length-1];return!!e&&e.hasChild(n)};function Y(t){return new Q(t)}var Q=function(t){var e=this;void 0===t&&(t={});var n=t.plugins;void 0===n&&(n=[]);var i=t.strict;void 0===i&&(i=!1);var o=t.devtools;this._committing=!1,this._actions=Object.create(null),this._actionSubscribers=[],this._mutations=Object.create(null),this._wrappedGetters=Object.create(null),this._modules=new K(t),this._modulesNamespaceMap=Object.create(null),this._subscribers=[],this._makeLocalGettersCache=Object.create(null),this._scope=null,this._devtools=o;var r=this,s=this,a=s.dispatch,c=s.commit;this.dispatch=function(t,e){return a.call(r,t,e)},this.commit=function(t,e,n){return c.call(r,t,e,n)},this.strict=i;var l=this._modules.root.state;v(this,l,[],this._modules.root),w(this,l),n.forEach((function(t){return t(e)}))},J={state:{configurable:!0}};Q.prototype.install=function(t,e){t.provide(e||h,this),t.config.globalProperties.$store=this;var n=void 0!==this._devtools&&this._devtools;n&&P(t,this)},J.state.get=function(){return this._state.data},J.state.set=function(t){0},Q.prototype.commit=function(t,e,n){var i=this,o=T(t,e,n),r=o.type,s=o.payload,a=(o.options,{type:r,payload:s}),c=this._mutations[r];c&&(this._withCommit((function(){c.forEach((function(t){t(s)}))})),this._subscribers.slice().forEach((function(t){return t(a,i.state)})))},Q.prototype.dispatch=function(t,e){var n=this,i=T(t,e),o=i.type,r=i.payload,s={type:o,payload:r},a=this._actions[o];if(a){try{this._actionSubscribers.slice().filter((function(t){return t.before})).forEach((function(t){return t.before(s,n.state)}))}catch(l){0}var c=a.length>1?Promise.all(a.map((function(t){return t(r)}))):a[0](r);return new Promise((function(t,e){c.then((function(e){try{n._actionSubscribers.filter((function(t){return t.after})).forEach((function(t){return t.after(s,n.state)}))}catch(l){0}t(e)}),(function(t){try{n._actionSubscribers.filter((function(t){return t.error})).forEach((function(e){return e.error(s,n.state,t)}))}catch(l){0}e(t)}))}))}},Q.prototype.subscribe=function(t,e){return k(t,this._subscribers,e)},Q.prototype.subscribeAction=function(t,e){var n="function"===typeof t?{before:t}:t;return k(n,this._actionSubscribers,e)},Q.prototype.watch=function(t,e,n){var o=this;return(0,i.YP)((function(){return t(o.state,o.getters)}),e,Object.assign({},n))},Q.prototype.replaceState=function(t){var e=this;this._withCommit((function(){e._state.data=t}))},Q.prototype.registerModule=function(t,e,n){void 0===n&&(n={}),"string"===typeof t&&(t=[t]),this._modules.register(t,e),v(this,this.state,t,this._modules.get(t),n.preserveState),w(this,this.state)},Q.prototype.unregisterModule=function(t){var e=this;"string"===typeof t&&(t=[t]),this._modules.unregister(t),this._withCommit((function(){var n=I(e.state,t.slice(0,-1));delete n[t[t.length-1]]})),b(this)},Q.prototype.hasModule=function(t){return"string"===typeof t&&(t=[t]),this._modules.isRegistered(t)},Q.prototype.hotUpdate=function(t){this._modules.update(t),b(this,!0)},Q.prototype._withCommit=function(t){var e=this._committing;this._committing=!0,t(),this._committing=e},Object.defineProperties(Q.prototype,J);it((function(t,e){var n={};return et(e).forEach((function(e){var i=e.key,o=e.val;n[i]=function(){var e=this.$store.state,n=this.$store.getters;if(t){var i=ot(this.$store,"mapState",t);if(!i)return;e=i.context.state,n=i.context.getters}return"function"===typeof o?o.call(this,e,n):e[o]},n[i].vuex=!0})),n}));var X=it((function(t,e){var n={};return et(e).forEach((function(e){var i=e.key,o=e.val;n[i]=function(){var e=[],n=arguments.length;while(n--)e[n]=arguments[n];var i=this.$store.commit;if(t){var r=ot(this.$store,"mapMutations",t);if(!r)return;i=r.context.commit}return"function"===typeof o?o.apply(this,[i].concat(e)):i.apply(this.$store,[o].concat(e))}})),n})),tt=it((function(t,e){var n={};return et(e).forEach((function(e){var i=e.key,o=e.val;o=t+o,n[i]=function(){if(!t||ot(this.$store,"mapGetters",t))return this.$store.getters[o]},n[i].vuex=!0})),n}));it((function(t,e){var n={};return et(e).forEach((function(e){var i=e.key,o=e.val;n[i]=function(){var e=[],n=arguments.length;while(n--)e[n]=arguments[n];var i=this.$store.dispatch;if(t){var r=ot(this.$store,"mapActions",t);if(!r)return;i=r.context.dispatch}return"function"===typeof o?o.apply(this,[i].concat(e)):i.apply(this.$store,[o].concat(e))}})),n}));function et(t){return nt(t)?Array.isArray(t)?t.map((function(t){return{key:t,val:t}})):Object.keys(t).map((function(e){return{key:e,val:t[e]}})):[]}function nt(t){return Array.isArray(t)||f(t)}function it(t){return function(e,n){return"string"!==typeof e?(n=e,e=""):"/"!==e.charAt(e.length-1)&&(e+="/"),t(e,n)}}function ot(t,e,n){var i=t._modulesNamespaceMap[n];return i}},7077:function(t,e,n){"use strict";n.d(e,{Jn:function(){return gt},qX:function(){return dt},Xd:function(){return ut},Mq:function(){return kt},ZF:function(){return mt},KN:function(){return bt}});var i=n(7142),o=n(5168),r=n(223);n(2801);const s=(t,e)=>e.some((e=>t instanceof e));let a,c;function l(){return a||(a=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function u(){return c||(c=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const d=new WeakMap,h=new WeakMap,p=new WeakMap,f=new WeakMap,g=new WeakMap;function m(t){const e=new Promise(((e,n)=>{const i=()=>{t.removeEventListener("success",o),t.removeEventListener("error",r)},o=()=>{e(A(t.result)),i()},r=()=>{n(t.error),i()};t.addEventListener("success",o),t.addEventListener("error",r)}));return e.then((e=>{e instanceof IDBCursor&&d.set(e,t)})).catch((()=>{})),g.set(e,t),e}function k(t){if(h.has(t))return;const e=new Promise(((e,n)=>{const i=()=>{t.removeEventListener("complete",o),t.removeEventListener("error",r),t.removeEventListener("abort",r)},o=()=>{e(),i()},r=()=>{n(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",o),t.addEventListener("error",r),t.addEventListener("abort",r)}));h.set(t,e)}let b={get(t,e,n){if(t instanceof IDBTransaction){if("done"===e)return h.get(t);if("objectStoreNames"===e)return t.objectStoreNames||p.get(t);if("store"===e)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return A(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&("done"===e||"store"===e)||e in t}};function w(t){b=t(b)}function v(t){return t!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?u().includes(t)?function(...e){return t.apply(C(this),e),A(d.get(this))}:function(...e){return A(t.apply(C(this),e))}:function(e,...n){const i=t.call(C(this),e,...n);return p.set(i,e.sort?e.sort():[e]),A(i)}}function _(t){return"function"===typeof t?v(t):(t instanceof IDBTransaction&&k(t),s(t,l())?new Proxy(t,b):t)}function A(t){if(t instanceof IDBRequest)return m(t);if(f.has(t))return f.get(t);const e=_(t);return e!==t&&(f.set(t,e),g.set(e,t)),e}const C=t=>g.get(t);function y(t,e,{blocked:n,upgrade:i,blocking:o,terminated:r}={}){const s=indexedDB.open(t,e),a=A(s);return i&&s.addEventListener("upgradeneeded",(t=>{i(A(s.result),t.oldVersion,t.newVersion,A(s.transaction),t)})),n&&s.addEventListener("blocked",(t=>n(t.oldVersion,t.newVersion,t))),a.then((t=>{r&&t.addEventListener("close",(()=>r())),o&&t.addEventListener("versionchange",(t=>o(t.oldVersion,t.newVersion,t)))})).catch((()=>{})),a}const E=["get","getKey","getAll","getAllKeys","count"],x=["put","add","delete","clear"],I=new Map;function T(t,e){if(!(t instanceof IDBDatabase)||e in t||"string"!==typeof e)return;if(I.get(e))return I.get(e);const n=e.replace(/FromIndex$/,""),i=e!==n,o=x.includes(n);if(!(n in(i?IDBIndex:IDBObjectStore).prototype)||!o&&!E.includes(n))return;const r=async function(t,...e){const r=this.transaction(t,o?"readwrite":"readonly");let s=r.store;return i&&(s=s.index(e.shift())),(await Promise.all([s[n](...e),o&&r.done]))[0]};return I.set(e,r),r}w((t=>({...t,get:(e,n,i)=>T(e,n)||t.get(e,n,i),has:(e,n)=>!!T(e,n)||t.has(e,n)})));
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class D{constructor(t){this.container=t}getPlatformInfoString(){const t=this.container.getProviders();return t.map((t=>{if(S(t)){const e=t.getImmediate();return`${e.library}/${e.version}`}return null})).filter((t=>t)).join(" ")}}function S(t){const e=t.getComponent();return"VERSION"===(null===e||void 0===e?void 0:e.type)}const M="@firebase/app",N="0.9.25",O=new o.Yd("@firebase/app"),P="@firebase/app-compat",B="@firebase/analytics-compat",L="@firebase/analytics",R="@firebase/app-check-compat",j="@firebase/app-check",z="@firebase/auth",F="@firebase/auth-compat",V="@firebase/database",U="@firebase/database-compat",H="@firebase/functions",q="@firebase/functions-compat",$="@firebase/installations",G="@firebase/installations-compat",W="@firebase/messaging",K="@firebase/messaging-compat",Z="@firebase/performance",Y="@firebase/performance-compat",Q="@firebase/remote-config",J="@firebase/remote-config-compat",X="@firebase/storage",tt="@firebase/storage-compat",et="@firebase/firestore",nt="@firebase/firestore-compat",it="firebase",ot="10.7.1",rt="[DEFAULT]",st={[M]:"fire-core",[P]:"fire-core-compat",[L]:"fire-analytics",[B]:"fire-analytics-compat",[j]:"fire-app-check",[R]:"fire-app-check-compat",[z]:"fire-auth",[F]:"fire-auth-compat",[V]:"fire-rtdb",[U]:"fire-rtdb-compat",[H]:"fire-fn",[q]:"fire-fn-compat",[$]:"fire-iid",[G]:"fire-iid-compat",[W]:"fire-fcm",[K]:"fire-fcm-compat",[Z]:"fire-perf",[Y]:"fire-perf-compat",[Q]:"fire-rc",[J]:"fire-rc-compat",[X]:"fire-gcs",[tt]:"fire-gcs-compat",[et]:"fire-fst",[nt]:"fire-fst-compat","fire-js":"fire-js",[it]:"fire-js-all"},at=new Map,ct=new Map;function lt(t,e){try{t.container.addComponent(e)}catch(n){O.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function ut(t){const e=t.name;if(ct.has(e))return O.debug(`There were multiple attempts to register component ${e}.`),!1;ct.set(e,t);for(const n of at.values())lt(n,t);return!0}function dt(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const ht={["no-app"]:"No Firebase App '{$appName}' has been created - call initializeApp() first",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},pt=new r.LL("app","Firebase",ht);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ft{constructor(t,e,n){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},e),this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new i.wA("app",(()=>this),"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw pt.create("app-deleted",{appName:this._name})}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gt=ot;function mt(t,e={}){let n=t;if("object"!==typeof e){const t=e;e={name:t}}const o=Object.assign({name:rt,automaticDataCollectionEnabled:!1},e),s=o.name;if("string"!==typeof s||!s)throw pt.create("bad-app-name",{appName:String(s)});if(n||(n=(0,r.aH)()),!n)throw pt.create("no-options");const a=at.get(s);if(a){if((0,r.vZ)(n,a.options)&&(0,r.vZ)(o,a.config))return a;throw pt.create("duplicate-app",{appName:s})}const c=new i.H0(s);for(const i of ct.values())c.addComponent(i);const l=new ft(n,o,c);return at.set(s,l),l}function kt(t=rt){const e=at.get(t);if(!e&&t===rt&&(0,r.aH)())return mt();if(!e)throw pt.create("no-app",{appName:t});return e}function bt(t,e,n){var o;let r=null!==(o=st[t])&&void 0!==o?o:t;n&&(r+=`-${n}`);const s=r.match(/\s|\//),a=e.match(/\s|\//);if(s||a){const t=[`Unable to register library "${r}" with version "${e}":`];return s&&t.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&a&&t.push("and"),a&&t.push(`version name "${e}" contains illegal characters (whitespace or "/")`),void O.warn(t.join(" "))}ut(new i.wA(`${r}-version`,(()=>({library:r,version:e})),"VERSION"))}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const wt="firebase-heartbeat-database",vt=1,_t="firebase-heartbeat-store";let At=null;function Ct(){return At||(At=y(wt,vt,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(_t)}}}).catch((t=>{throw pt.create("idb-open",{originalErrorMessage:t.message})}))),At}async function yt(t){try{const e=await Ct(),n=await e.transaction(_t).objectStore(_t).get(xt(t));return n}catch(e){if(e instanceof r.ZR)O.warn(e.message);else{const t=pt.create("idb-get",{originalErrorMessage:null===e||void 0===e?void 0:e.message});O.warn(t.message)}}}async function Et(t,e){try{const n=await Ct(),i=n.transaction(_t,"readwrite"),o=i.objectStore(_t);await o.put(e,xt(t)),await i.done}catch(n){if(n instanceof r.ZR)O.warn(n.message);else{const t=pt.create("idb-set",{originalErrorMessage:null===n||void 0===n?void 0:n.message});O.warn(t.message)}}}function xt(t){return`${t.name}!${t.options.appId}`}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const It=1024,Tt=2592e6;class Dt{constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new Nt(e),this._heartbeatsCachePromise=this._storage.read().then((t=>(this._heartbeatsCache=t,t)))}async triggerHeartbeat(){var t,e;const n=this.container.getProvider("platform-logger").getImmediate(),i=n.getPlatformInfoString(),o=St();if((null!=(null===(t=this._heartbeatsCache)||void 0===t?void 0:t.heartbeats)||(this._heartbeatsCache=await this._heartbeatsCachePromise,null!=(null===(e=this._heartbeatsCache)||void 0===e?void 0:e.heartbeats)))&&this._heartbeatsCache.lastSentHeartbeatDate!==o&&!this._heartbeatsCache.heartbeats.some((t=>t.date===o)))return this._heartbeatsCache.heartbeats.push({date:o,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter((t=>{const e=new Date(t.date).valueOf(),n=Date.now();return n-e<=Tt})),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var t;if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null==(null===(t=this._heartbeatsCache)||void 0===t?void 0:t.heartbeats)||0===this._heartbeatsCache.heartbeats.length)return"";const e=St(),{heartbeatsToSend:n,unsentEntries:i}=Mt(this._heartbeatsCache.heartbeats),o=(0,r.L)(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}}function St(){const t=new Date;return t.toISOString().substring(0,10)}function Mt(t,e=It){const n=[];let i=t.slice();for(const o of t){const t=n.find((t=>t.agent===o.agent));if(t){if(t.dates.push(o.date),Ot(n)>e){t.dates.pop();break}}else if(n.push({agent:o.agent,dates:[o.date]}),Ot(n)>e){n.pop();break}i=i.slice(1)}return{heartbeatsToSend:n,unsentEntries:i}}class Nt{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!(0,r.hl)()&&(0,r.eu)().then((()=>!0)).catch((()=>!1))}async read(){const t=await this._canUseIndexedDBPromise;if(t){const t=await yt(this.app);return(null===t||void 0===t?void 0:t.heartbeats)?t:{heartbeats:[]}}return{heartbeats:[]}}async overwrite(t){var e;const n=await this._canUseIndexedDBPromise;if(n){const n=await this.read();return Et(this.app,{lastSentHeartbeatDate:null!==(e=t.lastSentHeartbeatDate)&&void 0!==e?e:n.lastSentHeartbeatDate,heartbeats:t.heartbeats})}}async add(t){var e;const n=await this._canUseIndexedDBPromise;if(n){const n=await this.read();return Et(this.app,{lastSentHeartbeatDate:null!==(e=t.lastSentHeartbeatDate)&&void 0!==e?e:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...t.heartbeats]})}}}function Ot(t){return(0,r.L)(JSON.stringify({version:2,heartbeats:t})).length}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pt(t){ut(new i.wA("platform-logger",(t=>new D(t)),"PRIVATE")),ut(new i.wA("heartbeat",(t=>new Dt(t)),"PRIVATE")),bt(M,N,t),bt(M,N,"esm2017"),bt("fire-js","")}Pt("")},7142:function(t,e,n){"use strict";n.d(e,{wA:function(){return o},H0:function(){return l}});n(1703);var i=n(223);class o{constructor(t,e,n){this.name=t,this.instanceFactory=e,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const r="[DEFAULT]";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const t=new i.BH;if(this.instancesDeferred.set(e,t),this.isInitialized(e)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:e});n&&t.resolve(n)}catch(n){}}return this.instancesDeferred.get(e).promise}getImmediate(t){var e;const n=this.normalizeInstanceIdentifier(null===t||void 0===t?void 0:t.identifier),i=null!==(e=null===t||void 0===t?void 0:t.optional)&&void 0!==e&&e;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(i)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(o){if(i)return null;throw o}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,this.shouldAutoInitialize()){if(c(t))try{this.getOrInitializeService({instanceIdentifier:r})}catch(e){}for(const[t,n]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(t);try{const t=this.getOrInitializeService({instanceIdentifier:i});n.resolve(t)}catch(e){}}}}clearInstance(t=r){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter((t=>"INTERNAL"in t)).map((t=>t.INTERNAL.delete())),...t.filter((t=>"_delete"in t)).map((t=>t._delete()))])}isComponentSet(){return null!=this.component}isInitialized(t=r){return this.instances.has(t)}getOptions(t=r){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,n=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:n,options:e});for(const[o,r]of this.instancesDeferred.entries()){const t=this.normalizeInstanceIdentifier(o);n===t&&r.resolve(i)}return i}onInit(t,e){var n;const i=this.normalizeInstanceIdentifier(e),o=null!==(n=this.onInitCallbacks.get(i))&&void 0!==n?n:new Set;o.add(t),this.onInitCallbacks.set(i,o);const r=this.instances.get(i);return r&&t(r,i),()=>{o.delete(t)}}invokeOnInitCallbacks(t,e){const n=this.onInitCallbacks.get(e);if(n)for(const o of n)try{o(t,e)}catch(i){}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let n=this.instances.get(t);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:a(t),options:e}),this.instances.set(t,n),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(n,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,n)}catch(i){}return n||null}normalizeInstanceIdentifier(t=r){return this.component?this.component.multipleInstances?t:r:t}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}function a(t){return t===r?void 0:t}function c(t){return"EAGER"===t.instantiationMode}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class l{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){const e=this.getProvider(t.name);e.isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new s(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}},5168:function(t,e,n){"use strict";n.d(e,{in:function(){return o},Yd:function(){return l}});n(1703);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const i=[];var o;(function(t){t[t["DEBUG"]=0]="DEBUG",t[t["VERBOSE"]=1]="VERBOSE",t[t["INFO"]=2]="INFO",t[t["WARN"]=3]="WARN",t[t["ERROR"]=4]="ERROR",t[t["SILENT"]=5]="SILENT"})(o||(o={}));const r={debug:o.DEBUG,verbose:o.VERBOSE,info:o.INFO,warn:o.WARN,error:o.ERROR,silent:o.SILENT},s=o.INFO,a={[o.DEBUG]:"log",[o.VERBOSE]:"log",[o.INFO]:"info",[o.WARN]:"warn",[o.ERROR]:"error"},c=(t,e,...n)=>{if(e<t.logLevel)return;const i=(new Date).toISOString(),o=a[e];if(!o)throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`);console[o](`[${i}]  ${t.name}:`,...n)};class l{constructor(t){this.name=t,this._logLevel=s,this._logHandler=c,this._userLogHandler=null,i.push(this)}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in o))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel="string"===typeof t?r[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if("function"!==typeof t)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,o.DEBUG,...t),this._logHandler(this,o.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,o.VERBOSE,...t),this._logHandler(this,o.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,o.INFO,...t),this._logHandler(this,o.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,o.WARN,...t),this._logHandler(this,o.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,o.ERROR,...t),this._logHandler(this,o.ERROR,...t)}}},9365:function(t,e,n){"use strict";n.d(e,{IH:function(){return Ue}});var i=n(7077),o=n(5168),r=n(223),s=n(7142);n(2801),n(8675),n(3462);const a=(t,e)=>e.some((e=>t instanceof e));let c,l;function u(){return c||(c=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function d(){return l||(l=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const h=new WeakMap,p=new WeakMap,f=new WeakMap,g=new WeakMap,m=new WeakMap;function k(t){const e=new Promise(((e,n)=>{const i=()=>{t.removeEventListener("success",o),t.removeEventListener("error",r)},o=()=>{e(C(t.result)),i()},r=()=>{n(t.error),i()};t.addEventListener("success",o),t.addEventListener("error",r)}));return e.then((e=>{e instanceof IDBCursor&&h.set(e,t)})).catch((()=>{})),m.set(e,t),e}function b(t){if(p.has(t))return;const e=new Promise(((e,n)=>{const i=()=>{t.removeEventListener("complete",o),t.removeEventListener("error",r),t.removeEventListener("abort",r)},o=()=>{e(),i()},r=()=>{n(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",o),t.addEventListener("error",r),t.addEventListener("abort",r)}));p.set(t,e)}let w={get(t,e,n){if(t instanceof IDBTransaction){if("done"===e)return p.get(t);if("objectStoreNames"===e)return t.objectStoreNames||f.get(t);if("store"===e)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return C(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&("done"===e||"store"===e)||e in t}};function v(t){w=t(w)}function _(t){return t!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?d().includes(t)?function(...e){return t.apply(y(this),e),C(h.get(this))}:function(...e){return C(t.apply(y(this),e))}:function(e,...n){const i=t.call(y(this),e,...n);return f.set(i,e.sort?e.sort():[e]),C(i)}}function A(t){return"function"===typeof t?_(t):(t instanceof IDBTransaction&&b(t),a(t,u())?new Proxy(t,w):t)}function C(t){if(t instanceof IDBRequest)return k(t);if(g.has(t))return g.get(t);const e=A(t);return e!==t&&(g.set(t,e),m.set(e,t)),e}const y=t=>m.get(t);function E(t,e,{blocked:n,upgrade:i,blocking:o,terminated:r}={}){const s=indexedDB.open(t,e),a=C(s);return i&&s.addEventListener("upgradeneeded",(t=>{i(C(s.result),t.oldVersion,t.newVersion,C(s.transaction))})),n&&s.addEventListener("blocked",(()=>n())),a.then((t=>{r&&t.addEventListener("close",(()=>r())),o&&t.addEventListener("versionchange",(()=>o()))})).catch((()=>{})),a}const x=["get","getKey","getAll","getAllKeys","count"],I=["put","add","delete","clear"],T=new Map;function D(t,e){if(!(t instanceof IDBDatabase)||e in t||"string"!==typeof e)return;if(T.get(e))return T.get(e);const n=e.replace(/FromIndex$/,""),i=e!==n,o=I.includes(n);if(!(n in(i?IDBIndex:IDBObjectStore).prototype)||!o&&!x.includes(n))return;const r=async function(t,...e){const r=this.transaction(t,o?"readwrite":"readonly");let s=r.store;return i&&(s=s.index(e.shift())),(await Promise.all([s[n](...e),o&&r.done]))[0]};return T.set(e,r),r}v((t=>({...t,get:(e,n,i)=>D(e,n)||t.get(e,n,i),has:(e,n)=>!!D(e,n)||t.has(e,n)})));const S="@firebase/installations",M="0.6.4",N=1e4,O=`w:${M}`,P="FIS_v2",B="https://firebaseinstallations.googleapis.com/v1",L=36e5,R="installations",j="Installations",z={["missing-app-config-values"]:'Missing App configuration value: "{$valueName}"',["not-registered"]:"Firebase Installation is not registered.",["installation-not-found"]:"Firebase Installation not found.",["request-failed"]:'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',["app-offline"]:"Could not process request. Application offline.",["delete-pending-registration"]:"Can't delete installation while there is a pending registration request."},F=new r.LL(R,j,z);function V(t){return t instanceof r.ZR&&t.code.includes("request-failed")}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function U({projectId:t}){return`${B}/projects/${t}/installations`}function H(t){return{token:t.token,requestStatus:2,expiresIn:K(t.expiresIn),creationTime:Date.now()}}async function q(t,e){const n=await e.json(),i=n.error;return F.create("request-failed",{requestName:t,serverCode:i.code,serverMessage:i.message,serverStatus:i.status})}function $({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function G(t,{refreshToken:e}){const n=$(t);return n.append("Authorization",Z(e)),n}async function W(t){const e=await t();return e.status>=500&&e.status<600?t():e}function K(t){return Number(t.replace("s","000"))}function Z(t){return`${P} ${t}`}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Y({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const i=U(t),o=$(t),r=e.getImmediate({optional:!0});if(r){const t=await r.getHeartbeatsHeader();t&&o.append("x-firebase-client",t)}const s={fid:n,authVersion:P,appId:t.appId,sdkVersion:O},a={method:"POST",headers:o,body:JSON.stringify(s)},c=await W((()=>fetch(i,a)));if(c.ok){const t=await c.json(),e={fid:t.fid||n,registrationStatus:2,refreshToken:t.refreshToken,authToken:H(t.authToken)};return e}throw await q("Create Installation",c)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Q(t){return new Promise((e=>{setTimeout(e,t)}))}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function J(t){const e=btoa(String.fromCharCode(...t));return e.replace(/\+/g,"-").replace(/\//g,"_")}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const X=/^[cdef][\w-]{21}$/,tt="";function et(){try{const t=new Uint8Array(17),e=self.crypto||self.msCrypto;e.getRandomValues(t),t[0]=112+t[0]%16;const n=nt(t);return X.test(n)?n:tt}catch(t){return tt}}function nt(t){const e=J(t);return e.substr(0,22)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function it(t){return`${t.appName}!${t.appId}`}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ot=new Map;function rt(t,e){const n=it(t);st(n,e),at(n,e)}function st(t,e){const n=ot.get(t);if(n)for(const i of n)i(e)}function at(t,e){const n=lt();n&&n.postMessage({key:t,fid:e}),ut()}let ct=null;function lt(){return!ct&&"BroadcastChannel"in self&&(ct=new BroadcastChannel("[Firebase] FID Change"),ct.onmessage=t=>{st(t.data.key,t.data.fid)}),ct}function ut(){0===ot.size&&ct&&(ct.close(),ct=null)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dt="firebase-installations-database",ht=1,pt="firebase-installations-store";let ft=null;function gt(){return ft||(ft=E(dt,ht,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(pt)}}})),ft}async function mt(t,e){const n=it(t),i=await gt(),o=i.transaction(pt,"readwrite"),r=o.objectStore(pt),s=await r.get(n);return await r.put(e,n),await o.done,s&&s.fid===e.fid||rt(t,e.fid),e}async function kt(t){const e=it(t),n=await gt(),i=n.transaction(pt,"readwrite");await i.objectStore(pt).delete(e),await i.done}async function bt(t,e){const n=it(t),i=await gt(),o=i.transaction(pt,"readwrite"),r=o.objectStore(pt),s=await r.get(n),a=e(s);return void 0===a?await r.delete(n):await r.put(a,n),await o.done,!a||s&&s.fid===a.fid||rt(t,a.fid),a}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wt(t){let e;const n=await bt(t.appConfig,(n=>{const i=vt(n),o=_t(t,i);return e=o.registrationPromise,o.installationEntry}));return n.fid===tt?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function vt(t){const e=t||{fid:et(),registrationStatus:0};return Et(e)}function _t(t,e){if(0===e.registrationStatus){if(!navigator.onLine){const t=Promise.reject(F.create("app-offline"));return{installationEntry:e,registrationPromise:t}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},i=At(t,n);return{installationEntry:n,registrationPromise:i}}return 1===e.registrationStatus?{installationEntry:e,registrationPromise:Ct(t)}:{installationEntry:e}}async function At(t,e){try{const n=await Y(t,e);return mt(t.appConfig,n)}catch(n){throw V(n)&&409===n.customData.serverCode?await kt(t.appConfig):await mt(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function Ct(t){let e=await yt(t.appConfig);while(1===e.registrationStatus)await Q(100),e=await yt(t.appConfig);if(0===e.registrationStatus){const{installationEntry:e,registrationPromise:n}=await wt(t);return n||e}return e}function yt(t){return bt(t,(t=>{if(!t)throw F.create("installation-not-found");return Et(t)}))}function Et(t){return xt(t)?{fid:t.fid,registrationStatus:0}:t}function xt(t){return 1===t.registrationStatus&&t.registrationTime+N<Date.now()}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function It({appConfig:t,heartbeatServiceProvider:e},n){const i=Tt(t,n),o=G(t,n),r=e.getImmediate({optional:!0});if(r){const t=await r.getHeartbeatsHeader();t&&o.append("x-firebase-client",t)}const s={installation:{sdkVersion:O,appId:t.appId}},a={method:"POST",headers:o,body:JSON.stringify(s)},c=await W((()=>fetch(i,a)));if(c.ok){const t=await c.json(),e=H(t);return e}throw await q("Generate Auth Token",c)}function Tt(t,{fid:e}){return`${U(t)}/${e}/authTokens:generate`}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Dt(t,e=!1){let n;const i=await bt(t.appConfig,(i=>{if(!Ot(i))throw F.create("not-registered");const o=i.authToken;if(!e&&Pt(o))return i;if(1===o.requestStatus)return n=St(t,e),i;{if(!navigator.onLine)throw F.create("app-offline");const e=Lt(i);return n=Nt(t,e),e}})),o=n?await n:i.authToken;return o}async function St(t,e){let n=await Mt(t.appConfig);while(1===n.authToken.requestStatus)await Q(100),n=await Mt(t.appConfig);const i=n.authToken;return 0===i.requestStatus?Dt(t,e):i}function Mt(t){return bt(t,(t=>{if(!Ot(t))throw F.create("not-registered");const e=t.authToken;return Rt(e)?Object.assign(Object.assign({},t),{authToken:{requestStatus:0}}):t}))}async function Nt(t,e){try{const n=await It(t,e),i=Object.assign(Object.assign({},e),{authToken:n});return await mt(t.appConfig,i),n}catch(n){if(!V(n)||401!==n.customData.serverCode&&404!==n.customData.serverCode){const n=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await mt(t.appConfig,n)}else await kt(t.appConfig);throw n}}function Ot(t){return void 0!==t&&2===t.registrationStatus}function Pt(t){return 2===t.requestStatus&&!Bt(t)}function Bt(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+L}function Lt(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function Rt(t){return 1===t.requestStatus&&t.requestTime+N<Date.now()}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jt(t){const e=t,{installationEntry:n,registrationPromise:i}=await wt(e);return i?i.catch(console.error):Dt(e).catch(console.error),n.fid}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zt(t,e=!1){const n=t;await Ft(n);const i=await Dt(n,e);return i.token}async function Ft(t){const{registrationPromise:e}=await wt(t);e&&await e}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Vt(t){if(!t||!t.options)throw Ut("App Configuration");if(!t.name)throw Ut("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw Ut(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function Ut(t){return F.create("missing-app-config-values",{valueName:t})}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ht="installations",qt="installations-internal",$t=t=>{const e=t.getProvider("app").getImmediate(),n=Vt(e),o=(0,i.qX)(e,"heartbeat"),r={app:e,appConfig:n,heartbeatServiceProvider:o,_delete:()=>Promise.resolve()};return r},Gt=t=>{const e=t.getProvider("app").getImmediate(),n=(0,i.qX)(e,Ht).getImmediate(),o={getId:()=>jt(n),getToken:t=>zt(n,t)};return o};function Wt(){(0,i.Xd)(new s.wA(Ht,$t,"PUBLIC")),(0,i.Xd)(new s.wA(qt,Gt,"PRIVATE"))}Wt(),(0,i.KN)(S,M),(0,i.KN)(S,M,"esm2017");
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Kt="analytics",Zt="firebase_id",Yt="origin",Qt=6e4,Jt="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Xt="https://www.googletagmanager.com/gtag/js",te=new o.Yd("@firebase/analytics"),ee={["already-exists"]:"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.",["already-initialized"]:"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.",["already-initialized-settings"]:"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.",["interop-component-reg-failed"]:"Firebase Analytics Interop Component failed to instantiate: {$reason}",["invalid-analytics-context"]:"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["indexeddb-unavailable"]:"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["fetch-throttle"]:"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.",["config-fetch-failed"]:"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}",["no-api-key"]:'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',["no-app-id"]:'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',["no-client-id"]:'The "client_id" field is empty.',["invalid-gtag-resource"]:"Trusted Types detected an invalid gtag resource: {$gtagURL}."},ne=new r.LL("analytics","Analytics",ee);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function ie(t){if(!t.startsWith(Xt)){const e=ne.create("invalid-gtag-resource",{gtagURL:t});return te.warn(e.message),""}return t}function oe(t){return Promise.all(t.map((t=>t.catch((t=>t)))))}function re(t,e){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(t,e)),n}function se(t,e){const n=re("firebase-js-sdk-policy",{createScriptURL:ie}),i=document.createElement("script"),o=`${Xt}?l=${t}&id=${e}`;i.src=n?null===n||void 0===n?void 0:n.createScriptURL(o):o,i.async=!0,document.head.appendChild(i)}function ae(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function ce(t,e,n,i,o,r){const s=i[o];try{if(s)await e[s];else{const t=await oe(n),i=t.find((t=>t.measurementId===o));i&&await e[i.appId]}}catch(a){te.error(a)}t("config",o,r)}async function le(t,e,n,i,o){try{let r=[];if(o&&o["send_to"]){let t=o["send_to"];Array.isArray(t)||(t=[t]);const i=await oe(n);for(const n of t){const t=i.find((t=>t.measurementId===n)),o=t&&e[t.appId];if(!o){r=[];break}r.push(o)}}0===r.length&&(r=Object.values(e)),await Promise.all(r),t("event",i,o||{})}catch(r){te.error(r)}}function ue(t,e,n,i){async function o(o,...r){try{if("event"===o){const[i,o]=r;await le(t,e,n,i,o)}else if("config"===o){const[o,s]=r;await ce(t,e,n,i,o,s)}else if("consent"===o){const[e]=r;t("consent","update",e)}else if("get"===o){const[e,n,i]=r;t("get",e,n,i)}else if("set"===o){const[e]=r;t("set",e)}else t(o,...r)}catch(s){te.error(s)}}return o}function de(t,e,n,i,o){let r=function(...t){window[i].push(arguments)};return window[o]&&"function"===typeof window[o]&&(r=window[o]),window[o]=ue(r,t,e,n),{gtagCore:r,wrappedGtag:window[o]}}function he(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(Xt)&&n.src.includes(t))return n;return null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pe=30,fe=1e3;class ge{constructor(t={},e=fe){this.throttleMetadata=t,this.intervalMillis=e}getThrottleMetadata(t){return this.throttleMetadata[t]}setThrottleMetadata(t,e){this.throttleMetadata[t]=e}deleteThrottleMetadata(t){delete this.throttleMetadata[t]}}const me=new ge;function ke(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function be(t){var e;const{appId:n,apiKey:i}=t,o={method:"GET",headers:ke(i)},r=Jt.replace("{app-id}",n),s=await fetch(r,o);if(200!==s.status&&304!==s.status){let t="";try{const n=await s.json();(null===(e=n.error)||void 0===e?void 0:e.message)&&(t=n.error.message)}catch(a){}throw ne.create("config-fetch-failed",{httpStatus:s.status,responseMessage:t})}return s.json()}async function we(t,e=me,n){const{appId:i,apiKey:o,measurementId:r}=t.options;if(!i)throw ne.create("no-app-id");if(!o){if(r)return{measurementId:r,appId:i};throw ne.create("no-api-key")}const s=e.getThrottleMetadata(i)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new Ce;return setTimeout((async()=>{a.abort()}),void 0!==n?n:Qt),ve({appId:i,apiKey:o,measurementId:r},s,a,e)}async function ve(t,{throttleEndTimeMillis:e,backoffCount:n},i,o=me){var s;const{appId:a,measurementId:c}=t;try{await _e(i,e)}catch(l){if(c)return te.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${c} provided in the "measurementId" field in the local Firebase config. [${null===l||void 0===l?void 0:l.message}]`),{appId:a,measurementId:c};throw l}try{const e=await be(t);return o.deleteThrottleMetadata(a),e}catch(l){const e=l;if(!Ae(e)){if(o.deleteThrottleMetadata(a),c)return te.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${c} provided in the "measurementId" field in the local Firebase config. [${null===e||void 0===e?void 0:e.message}]`),{appId:a,measurementId:c};throw l}const u=503===Number(null===(s=null===e||void 0===e?void 0:e.customData)||void 0===s?void 0:s.httpStatus)?(0,r.$s)(n,o.intervalMillis,pe):(0,r.$s)(n,o.intervalMillis),d={throttleEndTimeMillis:Date.now()+u,backoffCount:n+1};return o.setThrottleMetadata(a,d),te.debug(`Calling attemptFetch again in ${u} millis`),ve(t,d,i,o)}}function _e(t,e){return new Promise(((n,i)=>{const o=Math.max(e-Date.now(),0),r=setTimeout(n,o);t.addEventListener((()=>{clearTimeout(r),i(ne.create("fetch-throttle",{throttleEndTimeMillis:e}))}))}))}function Ae(t){if(!(t instanceof r.ZR)||!t.customData)return!1;const e=Number(t.customData["httpStatus"]);return 429===e||500===e||503===e||504===e}class Ce{constructor(){this.listeners=[]}addEventListener(t){this.listeners.push(t)}abort(){this.listeners.forEach((t=>t()))}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ye,Ee;async function xe(t,e,n,i,o){if(o&&o.global)t("event",n,i);else{const o=await e,r=Object.assign(Object.assign({},i),{send_to:o});t("event",n,r)}}function Ie(t){Ee=t}function Te(t){ye=t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function De(){if(!(0,r.hl)())return te.warn(ne.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;try{await(0,r.eu)()}catch(t){return te.warn(ne.create("indexeddb-unavailable",{errorInfo:null===t||void 0===t?void 0:t.toString()}).message),!1}return!0}async function Se(t,e,n,i,o,r,s){var a;const c=we(t);c.then((e=>{n[e.measurementId]=e.appId,t.options.measurementId&&e.measurementId!==t.options.measurementId&&te.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${e.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)})).catch((t=>te.error(t))),e.push(c);const l=De().then((t=>t?i.getId():void 0)),[u,d]=await Promise.all([c,l]);he(r)||se(r,u.measurementId),Ee&&(o("consent","default",Ee),Ie(void 0)),o("js",new Date);const h=null!==(a=null===s||void 0===s?void 0:s.config)&&void 0!==a?a:{};return h[Yt]="firebase",h.update=!0,null!=d&&(h[Zt]=d),o("config",u.measurementId,h),ye&&(o("set",ye),Te(void 0)),u.measurementId}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Me{constructor(t){this.app=t}_delete(){return delete Ne[this.app.options.appId],Promise.resolve()}}let Ne={},Oe=[];const Pe={};let Be,Le,Re="dataLayer",je="gtag",ze=!1;function Fe(){const t=[];if((0,r.ru)()&&t.push("This is a browser extension environment."),(0,r.zI)()||t.push("Cookies are not available."),t.length>0){const e=t.map(((t,e)=>`(${e+1}) ${t}`)).join(" "),n=ne.create("invalid-analytics-context",{errorInfo:e});te.warn(n.message)}}function Ve(t,e,n){Fe();const i=t.options.appId;if(!i)throw ne.create("no-app-id");if(!t.options.apiKey){if(!t.options.measurementId)throw ne.create("no-api-key");te.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`)}if(null!=Ne[i])throw ne.create("already-exists",{id:i});if(!ze){ae(Re);const{wrappedGtag:t,gtagCore:e}=de(Ne,Oe,Pe,Re,je);Le=t,Be=e,ze=!0}Ne[i]=Se(t,Oe,Pe,e,Be,Re,n);const o=new Me(t);return o}function Ue(t=(0,i.Mq)()){t=(0,r.m9)(t);const e=(0,i.qX)(t,Kt);return e.isInitialized()?e.getImmediate():He(t)}function He(t,e={}){const n=(0,i.qX)(t,Kt);if(n.isInitialized()){const t=n.getImmediate();if((0,r.vZ)(e,n.getOptions()))return t;throw ne.create("already-initialized")}const o=n.initialize({options:e});return o}function qe(t,e,n,i){t=(0,r.m9)(t),xe(Le,Ne[t.app.options.appId],e,n,i).catch((t=>te.error(t)))}const $e="@firebase/analytics",Ge="0.10.0";function We(){function t(t){try{const e=t.getProvider(Kt).getImmediate();return{logEvent:(t,n,i)=>qe(e,t,n,i)}}catch(e){throw ne.create("interop-component-reg-failed",{reason:e})}}(0,i.Xd)(new s.wA(Kt,((t,{options:e})=>{const n=t.getProvider("app").getImmediate(),i=t.getProvider("installations-internal").getImmediate();return Ve(n,i,e)}),"PUBLIC")),(0,i.Xd)(new s.wA("analytics-internal",t,"PRIVATE")),(0,i.KN)($e,Ge),(0,i.KN)($e,Ge,"esm2017")}We()},7795:function(t,e,n){"use strict";n.d(e,{ZF:function(){return i.ZF}});var i=n(7077),o="firebase",r="10.7.1";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
(0,i.KN)(o,r,"app")},9221:function(t,e,n){"use strict";n.d(e,{v0:function(){return Ui},e5:function(){return Me},w7:function(){return Pe}});n(1703);var i=n(223),o=n(7077),r=n(5168);function s(t,e){var n={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.indexOf(i)<0&&(n[i]=t[i]);if(null!=t&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(i=Object.getOwnPropertySymbols(t);o<i.length;o++)e.indexOf(i[o])<0&&Object.prototype.propertyIsEnumerable.call(t,i[o])&&(n[i[o]]=t[i[o]])}return n}Object.create;Object.create;var a=n(7142);function c(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const l=c,u=new i.LL("auth","Firebase",c()),d=new r.Yd("@firebase/auth");function h(t,...e){d.logLevel<=r["in"].WARN&&d.warn(`Auth (${o.Jn}): ${t}`,...e)}function p(t,...e){d.logLevel<=r["in"].ERROR&&d.error(`Auth (${o.Jn}): ${t}`,...e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function f(t,...e){throw k(t,...e)}function g(t,...e){return k(t,...e)}function m(t,e,n){const o=Object.assign(Object.assign({},l()),{[e]:n}),r=new i.LL("auth","Firebase",o);return r.create(e,{appName:t.name})}function k(t,...e){if("string"!==typeof t){const n=e[0],i=[...e.slice(1)];return i[0]&&(i[0].appName=t.name),t._errorFactory.create(n,...i)}return u.create(t,...e)}function b(t,e,...n){if(!t)throw k(e,...n)}function w(t){const e="INTERNAL ASSERTION FAILED: "+t;throw p(e),new Error(e)}function v(t,e){t||w(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _(){var t;return"undefined"!==typeof self&&(null===(t=self.location)||void 0===t?void 0:t.href)||""}function A(){return"http:"===C()||"https:"===C()}function C(){var t;return"undefined"!==typeof self&&(null===(t=self.location)||void 0===t?void 0:t.protocol)||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function y(){return!("undefined"!==typeof navigator&&navigator&&"onLine"in navigator&&"boolean"===typeof navigator.onLine&&(A()||(0,i.ru)()||"connection"in navigator))||navigator.onLine}function E(){if("undefined"===typeof navigator)return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x{constructor(t,e){this.shortDelay=t,this.longDelay=e,v(e>t,"Short delay should be less than long delay!"),this.isMobile=(0,i.uI)()||(0,i.b$)()}get(){return y()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function I(t,e){v(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T{static initialize(t,e,n){this.fetchImpl=t,e&&(this.headersImpl=e),n&&(this.responseImpl=n)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!==typeof self&&"fetch"in self?self.fetch:"undefined"!==typeof globalThis&&globalThis.fetch?globalThis.fetch:"undefined"!==typeof fetch?fetch:void w("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!==typeof self&&"Headers"in self?self.Headers:"undefined"!==typeof globalThis&&globalThis.Headers?globalThis.Headers:"undefined"!==typeof Headers?Headers:void w("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!==typeof self&&"Response"in self?self.Response:"undefined"!==typeof globalThis&&globalThis.Response?globalThis.Response:"undefined"!==typeof Response?Response:void w("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const D={["CREDENTIAL_MISMATCH"]:"custom-token-mismatch",["MISSING_CUSTOM_TOKEN"]:"internal-error",["INVALID_IDENTIFIER"]:"invalid-email",["MISSING_CONTINUE_URI"]:"internal-error",["INVALID_PASSWORD"]:"wrong-password",["MISSING_PASSWORD"]:"missing-password",["INVALID_LOGIN_CREDENTIALS"]:"invalid-credential",["EMAIL_EXISTS"]:"email-already-in-use",["PASSWORD_LOGIN_DISABLED"]:"operation-not-allowed",["INVALID_IDP_RESPONSE"]:"invalid-credential",["INVALID_PENDING_TOKEN"]:"invalid-credential",["FEDERATED_USER_ID_ALREADY_LINKED"]:"credential-already-in-use",["MISSING_REQ_TYPE"]:"internal-error",["EMAIL_NOT_FOUND"]:"user-not-found",["RESET_PASSWORD_EXCEED_LIMIT"]:"too-many-requests",["EXPIRED_OOB_CODE"]:"expired-action-code",["INVALID_OOB_CODE"]:"invalid-action-code",["MISSING_OOB_CODE"]:"internal-error",["CREDENTIAL_TOO_OLD_LOGIN_AGAIN"]:"requires-recent-login",["INVALID_ID_TOKEN"]:"invalid-user-token",["TOKEN_EXPIRED"]:"user-token-expired",["USER_NOT_FOUND"]:"user-token-expired",["TOO_MANY_ATTEMPTS_TRY_LATER"]:"too-many-requests",["PASSWORD_DOES_NOT_MEET_REQUIREMENTS"]:"password-does-not-meet-requirements",["INVALID_CODE"]:"invalid-verification-code",["INVALID_SESSION_INFO"]:"invalid-verification-id",["INVALID_TEMPORARY_PROOF"]:"invalid-credential",["MISSING_SESSION_INFO"]:"missing-verification-id",["SESSION_EXPIRED"]:"code-expired",["MISSING_ANDROID_PACKAGE_NAME"]:"missing-android-pkg-name",["UNAUTHORIZED_DOMAIN"]:"unauthorized-continue-uri",["INVALID_OAUTH_CLIENT_ID"]:"invalid-oauth-client-id",["ADMIN_ONLY_OPERATION"]:"admin-restricted-operation",["INVALID_MFA_PENDING_CREDENTIAL"]:"invalid-multi-factor-session",["MFA_ENROLLMENT_NOT_FOUND"]:"multi-factor-info-not-found",["MISSING_MFA_ENROLLMENT_ID"]:"missing-multi-factor-info",["MISSING_MFA_PENDING_CREDENTIAL"]:"missing-multi-factor-session",["SECOND_FACTOR_EXISTS"]:"second-factor-already-in-use",["SECOND_FACTOR_LIMIT_EXCEEDED"]:"maximum-second-factor-count-exceeded",["BLOCKING_FUNCTION_ERROR_RESPONSE"]:"internal-error",["RECAPTCHA_NOT_ENABLED"]:"recaptcha-not-enabled",["MISSING_RECAPTCHA_TOKEN"]:"missing-recaptcha-token",["INVALID_RECAPTCHA_TOKEN"]:"invalid-recaptcha-token",["INVALID_RECAPTCHA_ACTION"]:"invalid-recaptcha-action",["MISSING_CLIENT_TYPE"]:"missing-client-type",["MISSING_RECAPTCHA_VERSION"]:"missing-recaptcha-version",["INVALID_RECAPTCHA_VERSION"]:"invalid-recaptcha-version",["INVALID_REQ_TYPE"]:"invalid-req-type"},S=new x(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function M(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function N(t,e,n,o,r={}){return O(t,r,(async()=>{let r={},s={};o&&("GET"===e?s=o:r={body:JSON.stringify(o)});const a=(0,i.xO)(Object.assign({key:t.config.apiKey},s)).slice(1),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode),T.fetch()(B(t,t.config.apiHost,n,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},r))}))}async function O(t,e,n){t._canInitEmulator=!1;const o=Object.assign(Object.assign({},D),e);try{const e=new R(t),i=await Promise.race([n(),e.promise]);e.clearNetworkTimeout();const r=await i.json();if("needConfirmation"in r)throw j(t,"account-exists-with-different-credential",r);if(i.ok&&!("errorMessage"in r))return r;{const e=i.ok?r.errorMessage:r.error.message,[n,s]=e.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===n)throw j(t,"credential-already-in-use",r);if("EMAIL_EXISTS"===n)throw j(t,"email-already-in-use",r);if("USER_DISABLED"===n)throw j(t,"user-disabled",r);const a=o[n]||n.toLowerCase().replace(/[_\s]+/g,"-");if(s)throw m(t,a,s);f(t,a)}}catch(r){if(r instanceof i.ZR)throw r;f(t,"network-request-failed",{message:String(r)})}}async function P(t,e,n,i,o={}){const r=await N(t,e,n,i,o);return"mfaPendingCredential"in r&&f(t,"multi-factor-auth-required",{_serverResponse:r}),r}function B(t,e,n,i){const o=`${e}${n}?${i}`;return t.config.emulator?I(t.config,o):`${t.config.apiScheme}://${o}`}function L(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class R{constructor(t){this.auth=t,this.timer=null,this.promise=new Promise(((t,e)=>{this.timer=setTimeout((()=>e(g(this.auth,"network-request-failed"))),S.get())}))}clearNetworkTimeout(){clearTimeout(this.timer)}}function j(t,e,n){const i={appName:t.name};n.email&&(i.email=n.email),n.phoneNumber&&(i.phoneNumber=n.phoneNumber);const o=g(t,e,i);return o.customData._tokenResponse=n,o}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function z(t){return void 0!==t&&void 0!==t.enterprise}class F{constructor(t){if(this.siteKey="",this.recaptchaEnforcementState=[],void 0===t.recaptchaKey)throw new Error("recaptchaKey undefined");this.siteKey=t.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=t.recaptchaEnforcementState}getProviderEnforcementState(t){if(!this.recaptchaEnforcementState||0===this.recaptchaEnforcementState.length)return null;for(const e of this.recaptchaEnforcementState)if(e.provider&&e.provider===t)return L(e.enforcementState);return null}isProviderEnabled(t){return"ENFORCE"===this.getProviderEnforcementState(t)||"AUDIT"===this.getProviderEnforcementState(t)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function V(t,e){return N(t,"GET","/v2/recaptchaConfig",M(t,e))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function U(t,e){return N(t,"POST","/v1/accounts:delete",e)}async function H(t,e){return N(t,"POST","/v1/accounts:lookup",e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function q(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch(e){}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $(t,e=!1){const n=(0,i.m9)(t),o=await n.getIdToken(e),r=W(o);b(r&&r.exp&&r.auth_time&&r.iat,n.auth,"internal-error");const s="object"===typeof r.firebase?r.firebase:void 0,a=null===s||void 0===s?void 0:s["sign_in_provider"];return{claims:r,token:o,authTime:q(G(r.auth_time)),issuedAtTime:q(G(r.iat)),expirationTime:q(G(r.exp)),signInProvider:a||null,signInSecondFactor:(null===s||void 0===s?void 0:s["sign_in_second_factor"])||null}}function G(t){return 1e3*Number(t)}function W(t){const[e,n,o]=t.split(".");if(void 0===e||void 0===n||void 0===o)return p("JWT malformed, contained fewer than 3 sections"),null;try{const t=(0,i.tV)(n);return t?JSON.parse(t):(p("Failed to decode base64 JWT payload"),null)}catch(r){return p("Caught error parsing JWT payload as JSON",null===r||void 0===r?void 0:r.toString()),null}}function K(t){const e=W(t);return b(e,"internal-error"),b("undefined"!==typeof e.exp,"internal-error"),b("undefined"!==typeof e.iat,"internal-error"),Number(e.exp)-Number(e.iat)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Z(t,e,n=!1){if(n)return e;try{return await e}catch(o){throw o instanceof i.ZR&&Y(o)&&t.auth.currentUser===t&&await t.auth.signOut(),o}}function Y({code:t}){return"auth/user-disabled"===t||"auth/user-token-expired"===t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(t){var e;if(t){const t=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),t}{this.errorBackoff=3e4;const t=null!==(e=this.user.stsTokenManager.expirationTime)&&void 0!==e?e:0,n=t-Date.now()-3e5;return Math.max(0,n)}}schedule(t=!1){if(!this.isRunning)return;const e=this.getInterval(t);this.timerId=setTimeout((async()=>{await this.iteration()}),e)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){return void("auth/network-request-failed"===(null===t||void 0===t?void 0:t.code)&&this.schedule(!0))}this.schedule()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J{constructor(t,e){this.createdAt=t,this.lastLoginAt=e,this._initializeTime()}_initializeTime(){this.lastSignInTime=q(this.lastLoginAt),this.creationTime=q(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function X(t){var e;const n=t.auth,i=await t.getIdToken(),o=await Z(t,H(n,{idToken:i}));b(null===o||void 0===o?void 0:o.users.length,n,"internal-error");const r=o.users[0];t._notifyReloadListener(r);const s=(null===(e=r.providerUserInfo)||void 0===e?void 0:e.length)?nt(r.providerUserInfo):[],a=et(t.providerData,s),c=t.isAnonymous,l=!(t.email&&r.passwordHash)&&!(null===a||void 0===a?void 0:a.length),u=!!c&&l,d={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:a,metadata:new J(r.createdAt,r.lastLoginAt),isAnonymous:u};Object.assign(t,d)}async function tt(t){const e=(0,i.m9)(t);await X(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function et(t,e){const n=t.filter((t=>!e.some((e=>e.providerId===t.providerId))));return[...n,...e]}function nt(t){return t.map((t=>{var{providerId:e}=t,n=s(t,["providerId"]);return{providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function it(t,e){const n=await O(t,{},(async()=>{const n=(0,i.xO)({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:o,apiKey:r}=t.config,s=B(t,o,"/v1/token",`key=${r}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",T.fetch()(s,{method:"POST",headers:a,body:n})}));return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function ot(t,e){return N(t,"POST","/v2/accounts:revokeToken",M(t,e))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rt{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){b(t.idToken,"internal-error"),b("undefined"!==typeof t.idToken,"internal-error"),b("undefined"!==typeof t.refreshToken,"internal-error");const e="expiresIn"in t&&"undefined"!==typeof t.expiresIn?Number(t.expiresIn):K(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,e)}async getToken(t,e=!1){return b(!this.accessToken||this.refreshToken,t,"user-token-expired"),e||!this.accessToken||this.isExpired?this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(t,e){const{accessToken:n,refreshToken:i,expiresIn:o}=await it(t,e);this.updateTokensAndExpiration(n,i,Number(o))}updateTokensAndExpiration(t,e,n){this.refreshToken=e||null,this.accessToken=t||null,this.expirationTime=Date.now()+1e3*n}static fromJSON(t,e){const{refreshToken:n,accessToken:i,expirationTime:o}=e,r=new rt;return n&&(b("string"===typeof n,"internal-error",{appName:t}),r.refreshToken=n),i&&(b("string"===typeof i,"internal-error",{appName:t}),r.accessToken=i),o&&(b("number"===typeof o,"internal-error",{appName:t}),r.expirationTime=o),r}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new rt,this.toJSON())}_performRefresh(){return w("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function st(t,e){b("string"===typeof t||"undefined"===typeof t,"internal-error",{appName:e})}class at{constructor(t){var{uid:e,auth:n,stsTokenManager:i}=t,o=s(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Q(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.providerData=o.providerData?[...o.providerData]:[],this.metadata=new J(o.createdAt||void 0,o.lastLoginAt||void 0)}async getIdToken(t){const e=await Z(this,this.stsTokenManager.getToken(this.auth,t));return b(e,this.auth,"internal-error"),this.accessToken!==e&&(this.accessToken=e,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),e}getIdTokenResult(t){return $(this,t)}reload(){return tt(this)}_assign(t){this!==t&&(b(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map((t=>Object.assign({},t))),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){const e=new at(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}));return e.metadata._copy(this.metadata),e}_onReload(t){b(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,e=!1){let n=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),n=!0),e&&await X(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){const t=await this.getIdToken();return await Z(this,U(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map((t=>Object.assign({},t))),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,e){var n,i,o,r,s,a,c,l;const u=null!==(n=e.displayName)&&void 0!==n?n:void 0,d=null!==(i=e.email)&&void 0!==i?i:void 0,h=null!==(o=e.phoneNumber)&&void 0!==o?o:void 0,p=null!==(r=e.photoURL)&&void 0!==r?r:void 0,f=null!==(s=e.tenantId)&&void 0!==s?s:void 0,g=null!==(a=e._redirectEventId)&&void 0!==a?a:void 0,m=null!==(c=e.createdAt)&&void 0!==c?c:void 0,k=null!==(l=e.lastLoginAt)&&void 0!==l?l:void 0,{uid:w,emailVerified:v,isAnonymous:_,providerData:A,stsTokenManager:C}=e;b(w&&C,t,"internal-error");const y=rt.fromJSON(this.name,C);b("string"===typeof w,t,"internal-error"),st(u,t.name),st(d,t.name),b("boolean"===typeof v,t,"internal-error"),b("boolean"===typeof _,t,"internal-error"),st(h,t.name),st(p,t.name),st(f,t.name),st(g,t.name),st(m,t.name),st(k,t.name);const E=new at({uid:w,auth:t,email:d,emailVerified:v,displayName:u,isAnonymous:_,photoURL:p,phoneNumber:h,tenantId:f,stsTokenManager:y,createdAt:m,lastLoginAt:k});return A&&Array.isArray(A)&&(E.providerData=A.map((t=>Object.assign({},t)))),g&&(E._redirectEventId=g),E}static async _fromIdTokenResponse(t,e,n=!1){const i=new rt;i.updateFromServerResponse(e);const o=new at({uid:e.localId,auth:t,stsTokenManager:i,isAnonymous:n});return await X(o),o}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ct=new Map;function lt(t){v(t instanceof Function,"Expected a class definition");let e=ct.get(t);return e?(v(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,ct.set(t,e),e)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ut{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,e){this.storage[t]=e}async _get(t){const e=this.storage[t];return void 0===e?null:e}async _remove(t){delete this.storage[t]}_addListener(t,e){}_removeListener(t,e){}}ut.type="NONE";const dt=ut;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ht(t,e,n){return`firebase:${t}:${e}:${n}`}class pt{constructor(t,e,n){this.persistence=t,this.auth=e,this.userKey=n;const{config:i,name:o}=this.auth;this.fullUserKey=ht(this.userKey,i.apiKey,o),this.fullPersistenceKey=ht("persistence",i.apiKey,o),this.boundEventHandler=e._onStorageEvent.bind(e),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);return t?at._fromJSON(this.auth,t):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const e=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=t,e?this.setCurrentUser(e):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,e,n="authUser"){if(!e.length)return new pt(lt(dt),t,n);const i=(await Promise.all(e.map((async t=>{if(await t._isAvailable())return t})))).filter((t=>t));let o=i[0]||lt(dt);const r=ht(n,t.config.apiKey,t.name);let s=null;for(const l of e)try{const e=await l._get(r);if(e){const n=at._fromJSON(t,e);l!==o&&(s=n),o=l;break}}catch(c){}const a=i.filter((t=>t._shouldAllowMigration));return o._shouldAllowMigration&&a.length?(o=a[0],s&&await o._set(r,s.toJSON()),await Promise.all(e.map((async t=>{if(t!==o)try{await t._remove(r)}catch(c){}}))),new pt(o,t,n)):new pt(o,t,n)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ft(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(bt(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(gt(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(vt(e))return"Blackberry";if(_t(e))return"Webos";if(mt(e))return"Safari";if((e.includes("chrome/")||kt(e))&&!e.includes("edge/"))return"Chrome";if(wt(e))return"Android";{const e=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=t.match(e);if(2===(null===n||void 0===n?void 0:n.length))return n[1]}return"Other"}function gt(t=(0,i.z$)()){return/firefox\//i.test(t)}function mt(t=(0,i.z$)()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function kt(t=(0,i.z$)()){return/crios\//i.test(t)}function bt(t=(0,i.z$)()){return/iemobile/i.test(t)}function wt(t=(0,i.z$)()){return/android/i.test(t)}function vt(t=(0,i.z$)()){return/blackberry/i.test(t)}function _t(t=(0,i.z$)()){return/webos/i.test(t)}function At(t=(0,i.z$)()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function Ct(t=(0,i.z$)()){var e;return At(t)&&!!(null===(e=window.navigator)||void 0===e?void 0:e.standalone)}function yt(){return(0,i.w1)()&&10===document.documentMode}function Et(t=(0,i.z$)()){return At(t)||wt(t)||_t(t)||vt(t)||/windows phone/i.test(t)||bt(t)}function xt(){try{return!(!window||window===window.top)}catch(t){return!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function It(t,e=[]){let n;switch(t){case"Browser":n=ft((0,i.z$)());break;case"Worker":n=`${ft((0,i.z$)())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${o.Jn}/${r}`}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tt{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,e){const n=e=>new Promise(((n,i)=>{try{const i=t(e);n(i)}catch(o){i(o)}}));n.onAbort=e,this.queue.push(n);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(t){if(this.auth.currentUser===t)return;const e=[];try{for(const n of this.queue)await n(t),n.onAbort&&e.push(n.onAbort)}catch(n){e.reverse();for(const t of e)try{t()}catch(i){}throw this.auth._errorFactory.create("login-blocked",{originalMessage:null===n||void 0===n?void 0:n.message})}}}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Dt(t,e={}){return N(t,"GET","/v2/passwordPolicy",M(t,e))}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const St=6;class Mt{constructor(t){var e,n,i,o;const r=t.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=null!==(e=r.minPasswordLength)&&void 0!==e?e:St,r.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=r.maxPasswordLength),void 0!==r.containsLowercaseCharacter&&(this.customStrengthOptions.containsLowercaseLetter=r.containsLowercaseCharacter),void 0!==r.containsUppercaseCharacter&&(this.customStrengthOptions.containsUppercaseLetter=r.containsUppercaseCharacter),void 0!==r.containsNumericCharacter&&(this.customStrengthOptions.containsNumericCharacter=r.containsNumericCharacter),void 0!==r.containsNonAlphanumericCharacter&&(this.customStrengthOptions.containsNonAlphanumericCharacter=r.containsNonAlphanumericCharacter),this.enforcementState=t.enforcementState,"ENFORCEMENT_STATE_UNSPECIFIED"===this.enforcementState&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=null!==(i=null===(n=t.allowedNonAlphanumericCharacters)||void 0===n?void 0:n.join(""))&&void 0!==i?i:"",this.forceUpgradeOnSignin=null!==(o=t.forceUpgradeOnSignin)&&void 0!==o&&o,this.schemaVersion=t.schemaVersion}validatePassword(t){var e,n,i,o,r,s;const a={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(t,a),this.validatePasswordCharacterOptions(t,a),a.isValid&&(a.isValid=null===(e=a.meetsMinPasswordLength)||void 0===e||e),a.isValid&&(a.isValid=null===(n=a.meetsMaxPasswordLength)||void 0===n||n),a.isValid&&(a.isValid=null===(i=a.containsLowercaseLetter)||void 0===i||i),a.isValid&&(a.isValid=null===(o=a.containsUppercaseLetter)||void 0===o||o),a.isValid&&(a.isValid=null===(r=a.containsNumericCharacter)||void 0===r||r),a.isValid&&(a.isValid=null===(s=a.containsNonAlphanumericCharacter)||void 0===s||s),a}validatePasswordLengthOptions(t,e){const n=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;n&&(e.meetsMinPasswordLength=t.length>=n),i&&(e.meetsMaxPasswordLength=t.length<=i)}validatePasswordCharacterOptions(t,e){let n;this.updatePasswordCharacterOptionsStatuses(e,!1,!1,!1,!1);for(let i=0;i<t.length;i++)n=t.charAt(i),this.updatePasswordCharacterOptionsStatuses(e,n>="a"&&n<="z",n>="A"&&n<="Z",n>="0"&&n<="9",this.allowedNonAlphanumericCharacters.includes(n))}updatePasswordCharacterOptionsStatuses(t,e,n,i,o){this.customStrengthOptions.containsLowercaseLetter&&(t.containsLowercaseLetter||(t.containsLowercaseLetter=e)),this.customStrengthOptions.containsUppercaseLetter&&(t.containsUppercaseLetter||(t.containsUppercaseLetter=n)),this.customStrengthOptions.containsNumericCharacter&&(t.containsNumericCharacter||(t.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(t.containsNonAlphanumericCharacter||(t.containsNonAlphanumericCharacter=o))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nt{constructor(t,e,n,i){this.app=t,this.heartbeatServiceProvider=e,this.appCheckServiceProvider=n,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Pt(this),this.idTokenSubscription=new Pt(this),this.beforeStateQueue=new Tt(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=u,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(t,e){return e&&(this._popupRedirectResolver=lt(e)),this._initializationPromise=this.queue((async()=>{var n,i;if(!this._deleted&&(this.persistenceManager=await pt.create(this,t),!this._deleted)){if(null===(n=this._popupRedirectResolver)||void 0===n?void 0:n._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(o){}await this.initializeCurrentUser(e),this.lastNotifiedUid=(null===(i=this.currentUser)||void 0===i?void 0:i.uid)||null,this._deleted||(this._isInitialized=!0)}})),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();return this.currentUser||t?this.currentUser&&t&&this.currentUser.uid===t.uid?(this._currentUser._assign(t),void await this.currentUser.getIdToken()):void await this._updateCurrentUser(t,!0):void 0}async initializeCurrentUser(t){var e;const n=await this.assertedPersistence.getCurrentUser();let i=n,o=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const n=null===(e=this.redirectUser)||void 0===e?void 0:e._redirectEventId,r=null===i||void 0===i?void 0:i._redirectEventId,s=await this.tryRedirectSignIn(t);n&&n!==r||!(null===s||void 0===s?void 0:s.user)||(i=s.user,o=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(o)try{await this.beforeStateQueue.runMiddleware(i)}catch(r){i=n,this._popupRedirectResolver._overrideRedirectResult(this,(()=>Promise.reject(r)))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return b(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(t){let e=null;try{e=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch(n){await this._setRedirectUser(null)}return e}async reloadAndSetCurrentUserOrClear(t){try{await X(t)}catch(e){if("auth/network-request-failed"!==(null===e||void 0===e?void 0:e.code))return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=E()}async _delete(){this._deleted=!0}async updateCurrentUser(t){const e=t?(0,i.m9)(t):null;return e&&b(e.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(e&&e._clone(this))}async _updateCurrentUser(t,e=!1){if(!this._deleted)return t&&b(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),e||await this.beforeStateQueue.runMiddleware(t),this.queue((async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()}))}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(t){return this.queue((async()=>{await this.assertedPersistence.setPersistence(lt(t))}))}_getRecaptchaConfig(){return null==this.tenantId?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(t){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const e=this._getPasswordPolicyInternal();return e.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):e.validatePassword(t)}_getPasswordPolicyInternal(){return null===this.tenantId?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const t=await Dt(this),e=new Mt(t);null===this.tenantId?this._projectPasswordPolicy=e:this._tenantPasswordPolicies[this.tenantId]=e}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(t){this._errorFactory=new i.LL("auth","Firebase",t())}onAuthStateChanged(t,e,n){return this.registerStateListener(this.authStateSubscription,t,e,n)}beforeAuthStateChanged(t,e){return this.beforeStateQueue.pushCallback(t,e)}onIdTokenChanged(t,e,n){return this.registerStateListener(this.idTokenSubscription,t,e,n)}authStateReady(){return new Promise(((t,e)=>{if(this.currentUser)t();else{const n=this.onAuthStateChanged((()=>{n(),t()}),e)}}))}async revokeAccessToken(t){if(this.currentUser){const e=await this.currentUser.getIdToken(),n={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:t,idToken:e};null!=this.tenantId&&(n.tenantId=this.tenantId),await ot(this,n)}}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(t=this._currentUser)||void 0===t?void 0:t.toJSON()}}async _setRedirectUser(t,e){const n=await this.getOrInitRedirectPersistenceManager(e);return null===t?n.removeCurrentUser():n.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const e=t&&lt(t)||this._popupRedirectResolver;b(e,this,"argument-error"),this.redirectPersistenceManager=await pt.create(this,[lt(e._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var e,n;return this._isInitialized&&await this.queue((async()=>{})),(null===(e=this._currentUser)||void 0===e?void 0:e._redirectEventId)===t?this._currentUser:(null===(n=this.redirectUser)||void 0===n?void 0:n._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue((async()=>this.directlySetCurrentUser(t)))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,e;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=null!==(e=null===(t=this.currentUser)||void 0===t?void 0:t.uid)&&void 0!==e?e:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,e,n,i){if(this._deleted)return()=>{};const o="function"===typeof e?e:e.next.bind(e);let r=!1;const s=this._isInitialized?Promise.resolve():this._initializationPromise;if(b(s,this,"internal-error"),s.then((()=>{r||o(this.currentUser)})),"function"===typeof e){const o=t.addObserver(e,n,i);return()=>{r=!0,o()}}{const n=t.addObserver(e);return()=>{r=!0,n()}}}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return b(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){t&&!this.frameworks.includes(t)&&(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=It(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var t;const e={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await(null===(t=this.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===t?void 0:t.getHeartbeatsHeader());n&&(e["X-Firebase-Client"]=n);const i=await this._getAppCheckToken();return i&&(e["X-Firebase-AppCheck"]=i),e}async _getAppCheckToken(){var t;const e=await(null===(t=this.appCheckServiceProvider.getImmediate({optional:!0}))||void 0===t?void 0:t.getToken());return(null===e||void 0===e?void 0:e.error)&&h(`Error while retrieving App Check token: ${e.error}`),null===e||void 0===e?void 0:e.token}}function Ot(t){return(0,i.m9)(t)}class Pt{constructor(t){this.auth=t,this.observer=null,this.addObserver=(0,i.ne)((t=>this.observer=t))}get next(){return b(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bt(){var t,e;return null!==(e=null===(t=document.getElementsByTagName("head"))||void 0===t?void 0:t[0])&&void 0!==e?e:document}function Lt(t){return new Promise(((e,n)=>{const i=document.createElement("script");i.setAttribute("src",t),i.onload=e,i.onerror=t=>{const e=g("internal-error");e.customData=t,n(e)},i.type="text/javascript",i.charset="UTF-8",Bt().appendChild(i)}))}function Rt(t){return`__${t}${Math.floor(1e6*Math.random())}`}const jt="https://www.google.com/recaptcha/enterprise.js?render=",zt="recaptcha-enterprise",Ft="NO_RECAPTCHA";class Vt{constructor(t){this.type=zt,this.auth=Ot(t)}async verify(t="verify",e=!1){async function n(t){if(!e){if(null==t.tenantId&&null!=t._agentRecaptchaConfig)return t._agentRecaptchaConfig.siteKey;if(null!=t.tenantId&&void 0!==t._tenantRecaptchaConfigs[t.tenantId])return t._tenantRecaptchaConfigs[t.tenantId].siteKey}return new Promise((async(e,n)=>{V(t,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then((i=>{if(void 0!==i.recaptchaKey){const n=new F(i);return null==t.tenantId?t._agentRecaptchaConfig=n:t._tenantRecaptchaConfigs[t.tenantId]=n,e(n.siteKey)}n(new Error("recaptcha Enterprise site key undefined"))})).catch((t=>{n(t)}))}))}function i(e,n,i){const o=window.grecaptcha;z(o)?o.enterprise.ready((()=>{o.enterprise.execute(e,{action:t}).then((t=>{n(t)})).catch((()=>{n(Ft)}))})):i(Error("No reCAPTCHA enterprise script loaded."))}return new Promise(((t,o)=>{n(this.auth).then((n=>{if(!e&&z(window.grecaptcha))i(n,t,o);else{if("undefined"===typeof window)return void o(new Error("RecaptchaVerifier is only supported in browser"));Lt(jt+n).then((()=>{i(n,t,o)})).catch((t=>{o(t)}))}})).catch((t=>{o(t)}))}))}}async function Ut(t,e,n,i=!1){const o=new Vt(t);let r;try{r=await o.verify(n)}catch(a){r=await o.verify(n,!0)}const s=Object.assign({},e);return i?Object.assign(s,{captchaResp:r}):Object.assign(s,{captchaResponse:r}),Object.assign(s,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(s,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),s}async function Ht(t,e,n,i){var o;if(null===(o=t._getRecaptchaConfig())||void 0===o?void 0:o.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await Ut(t,e,n,"getOobCode"===n);return i(t,o)}return i(t,e).catch((async o=>{if("auth/missing-recaptcha-token"===o.code){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await Ut(t,e,n,"getOobCode"===n);return i(t,o)}return Promise.reject(o)}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function qt(t,e){const n=(0,o.qX)(t,"auth");if(n.isInitialized()){const t=n.getImmediate(),o=n.getOptions();if((0,i.vZ)(o,null!==e&&void 0!==e?e:{}))return t;f(t,"already-initialized")}const r=n.initialize({options:e});return r}function $t(t,e){const n=(null===e||void 0===e?void 0:e.persistence)||[],i=(Array.isArray(n)?n:[n]).map(lt);(null===e||void 0===e?void 0:e.errorMap)&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(i,null===e||void 0===e?void 0:e.popupRedirectResolver)}function Gt(t,e,n){const i=Ot(t);b(i._canInitEmulator,i,"emulator-config-failed"),b(/^https?:\/\//.test(e),i,"invalid-emulator-scheme");const o=!!(null===n||void 0===n?void 0:n.disableWarnings),r=Wt(e),{host:s,port:a}=Kt(e),c=null===a?"":`:${a}`;i.config.emulator={url:`${r}//${s}${c}/`},i.settings.appVerificationDisabledForTesting=!0,i.emulatorConfig=Object.freeze({host:s,port:a,protocol:r.replace(":",""),options:Object.freeze({disableWarnings:o})}),o||Yt()}function Wt(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function Kt(t){const e=Wt(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const i=n[2].split("@").pop()||"",o=/^(\[[^\]]+\])(:|$)/.exec(i);if(o){const t=o[1];return{host:t,port:Zt(i.substr(t.length+1))}}{const[t,e]=i.split(":");return{host:t,port:Zt(e)}}}function Zt(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function Yt(){function t(){const t=document.createElement("p"),e=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",e.position="fixed",e.width="100%",e.backgroundColor="#ffffff",e.border=".1em solid #000000",e.color="#b50000",e.bottom="0px",e.left="0px",e.margin="0px",e.zIndex="10000",e.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}"undefined"!==typeof console&&"function"===typeof console.info&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),"undefined"!==typeof window&&"undefined"!==typeof document&&("loading"===document.readyState?window.addEventListener("DOMContentLoaded",t):t())}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qt{constructor(t,e){this.providerId=t,this.signInMethod=e}toJSON(){return w("not implemented")}_getIdTokenResponse(t){return w("not implemented")}_linkToIdToken(t,e){return w("not implemented")}_getReauthenticationResolver(t){return w("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Jt(t,e){return N(t,"POST","/v1/accounts:signUp",e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Xt(t,e){return P(t,"POST","/v1/accounts:signInWithPassword",M(t,e))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function te(t,e){return P(t,"POST","/v1/accounts:signInWithEmailLink",M(t,e))}async function ee(t,e){return P(t,"POST","/v1/accounts:signInWithEmailLink",M(t,e))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ne extends Qt{constructor(t,e,n,i=null){super("password",n),this._email=t,this._password=e,this._tenantId=i}static _fromEmailAndPassword(t,e){return new ne(t,e,"password")}static _fromEmailAndCode(t,e,n=null){return new ne(t,e,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(t){const e="string"===typeof t?JSON.parse(t):t;if((null===e||void 0===e?void 0:e.email)&&(null===e||void 0===e?void 0:e.password)){if("password"===e.signInMethod)return this._fromEmailAndPassword(e.email,e.password);if("emailLink"===e.signInMethod)return this._fromEmailAndCode(e.email,e.password,e.tenantId)}return null}async _getIdTokenResponse(t){switch(this.signInMethod){case"password":const e={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Ht(t,e,"signInWithPassword",Xt);case"emailLink":return te(t,{email:this._email,oobCode:this._password});default:f(t,"internal-error")}}async _linkToIdToken(t,e){switch(this.signInMethod){case"password":const n={idToken:e,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Ht(t,n,"signUpPassword",Jt);case"emailLink":return ee(t,{idToken:e,email:this._email,oobCode:this._password});default:f(t,"internal-error")}}_getReauthenticationResolver(t){return this._getIdTokenResponse(t)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ie(t,e){return P(t,"POST","/v1/accounts:signInWithIdp",M(t,e))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oe="http://localhost";class re extends Qt{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const e=new re(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(e.idToken=t.idToken),t.accessToken&&(e.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(e.nonce=t.nonce),t.pendingToken&&(e.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(e.accessToken=t.oauthToken,e.secret=t.oauthTokenSecret):f("argument-error"),e}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const e="string"===typeof t?JSON.parse(t):t,{providerId:n,signInMethod:i}=e,o=s(e,["providerId","signInMethod"]);if(!n||!i)return null;const r=new re(n,i);return r.idToken=o.idToken||void 0,r.accessToken=o.accessToken||void 0,r.secret=o.secret,r.nonce=o.nonce,r.pendingToken=o.pendingToken||null,r}_getIdTokenResponse(t){const e=this.buildRequest();return ie(t,e)}_linkToIdToken(t,e){const n=this.buildRequest();return n.idToken=e,ie(t,n)}_getReauthenticationResolver(t){const e=this.buildRequest();return e.autoCreate=!1,ie(t,e)}buildRequest(){const t={requestUri:oe,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const e={};this.idToken&&(e["id_token"]=this.idToken),this.accessToken&&(e["access_token"]=this.accessToken),this.secret&&(e["oauth_token_secret"]=this.secret),e["providerId"]=this.providerId,this.nonce&&!this.pendingToken&&(e["nonce"]=this.nonce),t.postBody=(0,i.xO)(e)}return t}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function se(t,e){return N(t,"POST","/v1/accounts:sendVerificationCode",M(t,e))}async function ae(t,e){return P(t,"POST","/v1/accounts:signInWithPhoneNumber",M(t,e))}async function ce(t,e){const n=await P(t,"POST","/v1/accounts:signInWithPhoneNumber",M(t,e));if(n.temporaryProof)throw j(t,"account-exists-with-different-credential",n);return n}const le={["USER_NOT_FOUND"]:"user-not-found"};async function ue(t,e){const n=Object.assign(Object.assign({},e),{operation:"REAUTH"});return P(t,"POST","/v1/accounts:signInWithPhoneNumber",M(t,n),le)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class de extends Qt{constructor(t){super("phone","phone"),this.params=t}static _fromVerification(t,e){return new de({verificationId:t,verificationCode:e})}static _fromTokenResponse(t,e){return new de({phoneNumber:t,temporaryProof:e})}_getIdTokenResponse(t){return ae(t,this._makeVerificationRequest())}_linkToIdToken(t,e){return ce(t,Object.assign({idToken:e},this._makeVerificationRequest()))}_getReauthenticationResolver(t){return ue(t,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:t,phoneNumber:e,verificationId:n,verificationCode:i}=this.params;return t&&e?{temporaryProof:t,phoneNumber:e}:{sessionInfo:n,code:i}}toJSON(){const t={providerId:this.providerId};return this.params.phoneNumber&&(t.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(t.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(t.verificationCode=this.params.verificationCode),this.params.verificationId&&(t.verificationId=this.params.verificationId),t}static fromJSON(t){"string"===typeof t&&(t=JSON.parse(t));const{verificationId:e,verificationCode:n,phoneNumber:i,temporaryProof:o}=t;return n||e||i||o?new de({verificationId:e,verificationCode:n,phoneNumber:i,temporaryProof:o}):null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function he(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function pe(t){const e=(0,i.zd)((0,i.pd)(t))["link"],n=e?(0,i.zd)((0,i.pd)(e))["deep_link_id"]:null,o=(0,i.zd)((0,i.pd)(t))["deep_link_id"],r=o?(0,i.zd)((0,i.pd)(o))["link"]:null;return r||o||n||e||t}class fe{constructor(t){var e,n,o,r,s,a;const c=(0,i.zd)((0,i.pd)(t)),l=null!==(e=c["apiKey"])&&void 0!==e?e:null,u=null!==(n=c["oobCode"])&&void 0!==n?n:null,d=he(null!==(o=c["mode"])&&void 0!==o?o:null);b(l&&u&&d,"argument-error"),this.apiKey=l,this.operation=d,this.code=u,this.continueUrl=null!==(r=c["continueUrl"])&&void 0!==r?r:null,this.languageCode=null!==(s=c["languageCode"])&&void 0!==s?s:null,this.tenantId=null!==(a=c["tenantId"])&&void 0!==a?a:null}static parseLink(t){const e=pe(t);try{return new fe(e)}catch(n){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ge{constructor(){this.providerId=ge.PROVIDER_ID}static credential(t,e){return ne._fromEmailAndPassword(t,e)}static credentialWithLink(t,e){const n=fe.parseLink(e);return b(n,"argument-error"),ne._fromEmailAndCode(t,n.code,n.tenantId)}}ge.PROVIDER_ID="password",ge.EMAIL_PASSWORD_SIGN_IN_METHOD="password",ge.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class me{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ke extends me{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class be extends ke{constructor(){super("facebook.com")}static credential(t){return re._fromParams({providerId:be.PROVIDER_ID,signInMethod:be.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return be.credentialFromTaggedObject(t)}static credentialFromError(t){return be.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t))return null;if(!t.oauthAccessToken)return null;try{return be.credential(t.oauthAccessToken)}catch(e){return null}}}be.FACEBOOK_SIGN_IN_METHOD="facebook.com",be.PROVIDER_ID="facebook.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class we extends ke{constructor(){super("google.com"),this.addScope("profile")}static credential(t,e){return re._fromParams({providerId:we.PROVIDER_ID,signInMethod:we.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:e})}static credentialFromResult(t){return we.credentialFromTaggedObject(t)}static credentialFromError(t){return we.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:e,oauthAccessToken:n}=t;if(!e&&!n)return null;try{return we.credential(e,n)}catch(i){return null}}}we.GOOGLE_SIGN_IN_METHOD="google.com",we.PROVIDER_ID="google.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ve extends ke{constructor(){super("github.com")}static credential(t){return re._fromParams({providerId:ve.PROVIDER_ID,signInMethod:ve.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return ve.credentialFromTaggedObject(t)}static credentialFromError(t){return ve.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t))return null;if(!t.oauthAccessToken)return null;try{return ve.credential(t.oauthAccessToken)}catch(e){return null}}}ve.GITHUB_SIGN_IN_METHOD="github.com",ve.PROVIDER_ID="github.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class _e extends ke{constructor(){super("twitter.com")}static credential(t,e){return re._fromParams({providerId:_e.PROVIDER_ID,signInMethod:_e.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:e})}static credentialFromResult(t){return _e.credentialFromTaggedObject(t)}static credentialFromError(t){return _e.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:e,oauthTokenSecret:n}=t;if(!e||!n)return null;try{return _e.credential(e,n)}catch(i){return null}}}_e.TWITTER_SIGN_IN_METHOD="twitter.com",_e.PROVIDER_ID="twitter.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ae{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,e,n,i=!1){const o=await at._fromIdTokenResponse(t,n,i),r=Ce(n),s=new Ae({user:o,providerId:r,_tokenResponse:n,operationType:e});return s}static async _forOperation(t,e,n){await t._updateTokensIfNecessary(n,!0);const i=Ce(n);return new Ae({user:t,providerId:i,_tokenResponse:n,operationType:e})}}function Ce(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ye extends i.ZR{constructor(t,e,n,i){var o;super(e.code,e.message),this.operationType=n,this.user=i,Object.setPrototypeOf(this,ye.prototype),this.customData={appName:t.name,tenantId:null!==(o=t.tenantId)&&void 0!==o?o:void 0,_serverResponse:e.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(t,e,n,i){return new ye(t,e,n,i)}}function Ee(t,e,n,i){const o="reauthenticate"===e?n._getReauthenticationResolver(t):n._getIdTokenResponse(t);return o.catch((n=>{if("auth/multi-factor-auth-required"===n.code)throw ye._fromErrorAndOperation(t,n,e,i);throw n}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xe(t,e,n=!1){const i=await Z(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Ae._forOperation(t,"link",i)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Ie(t,e,n=!1){const{auth:i}=t,o="reauthenticate";try{const r=await Z(t,Ee(i,o,e,t),n);b(r.idToken,i,"internal-error");const s=W(r.idToken);b(s,i,"internal-error");const{sub:a}=s;return b(t.uid===a,i,"user-mismatch"),Ae._forOperation(t,o,r)}catch(r){throw"auth/user-not-found"===(null===r||void 0===r?void 0:r.code)&&f(i,"user-mismatch"),r}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Te(t,e,n=!1){const i="signIn",o=await Ee(t,i,e),r=await Ae._fromIdTokenResponse(t,i,o);return n||await t._updateCurrentUser(r.user),r}async function De(t,e){return Te(Ot(t),e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Se(t){const e=Ot(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}function Me(t,e,n){return De((0,i.m9)(t),ge.credential(e,n)).catch((async e=>{throw"auth/password-does-not-meet-requirements"===e.code&&Se(t),e}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ne(t,e,n,o){return(0,i.m9)(t).onIdTokenChanged(e,n,o)}function Oe(t,e,n){return(0,i.m9)(t).beforeAuthStateChanged(e,n)}function Pe(t){return(0,i.m9)(t).signOut()}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Be(t,e){return N(t,"POST","/v2/accounts/mfaEnrollment:start",M(t,e))}function Le(t,e){return N(t,"POST","/v2/accounts/mfaEnrollment:finalize",M(t,e))}function Re(t,e){return N(t,"POST","/v2/accounts/mfaEnrollment:start",M(t,e))}function je(t,e){return N(t,"POST","/v2/accounts/mfaEnrollment:finalize",M(t,e))}new WeakMap;const ze="__sak";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fe{constructor(t,e){this.storageRetriever=t,this.type=e}_isAvailable(){try{return this.storage?(this.storage.setItem(ze,"1"),this.storage.removeItem(ze),Promise.resolve(!0)):Promise.resolve(!1)}catch(t){return Promise.resolve(!1)}}_set(t,e){return this.storage.setItem(t,JSON.stringify(e)),Promise.resolve()}_get(t){const e=this.storage.getItem(t);return Promise.resolve(e?JSON.parse(e):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ve(){const t=(0,i.z$)();return mt(t)||At(t)}const Ue=1e3,He=10;class qe extends Fe{constructor(){super((()=>window.localStorage),"LOCAL"),this.boundEventHandler=(t,e)=>this.onStorageEvent(t,e),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=Ve()&&xt(),this.fallbackToPolling=Et(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const e of Object.keys(this.listeners)){const n=this.storage.getItem(e),i=this.localCache[e];n!==i&&t(e,i,n)}}onStorageEvent(t,e=!1){if(!t.key)return void this.forAllChangedKeys(((t,e,n)=>{this.notifyListeners(t,n)}));const n=t.key;if(e?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const i=this.storage.getItem(n);if(t.newValue!==i)null!==t.newValue?this.storage.setItem(n,t.newValue):this.storage.removeItem(n);else if(this.localCache[n]===t.newValue&&!e)return}const i=()=>{const t=this.storage.getItem(n);(e||this.localCache[n]!==t)&&this.notifyListeners(n,t)},o=this.storage.getItem(n);yt()&&o!==t.newValue&&t.newValue!==t.oldValue?setTimeout(i,He):i()}notifyListeners(t,e){this.localCache[t]=e;const n=this.listeners[t];if(n)for(const i of Array.from(n))i(e?JSON.parse(e):e)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((()=>{this.forAllChangedKeys(((t,e,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:e,newValue:n}),!0)}))}),Ue)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,e){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(e)}_removeListener(t,e){this.listeners[t]&&(this.listeners[t].delete(e),0===this.listeners[t].size&&delete this.listeners[t]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(t,e){await super._set(t,e),this.localCache[t]=JSON.stringify(e)}async _get(t){const e=await super._get(t);return this.localCache[t]=JSON.stringify(e),e}async _remove(t){await super._remove(t),delete this.localCache[t]}}qe.type="LOCAL";const $e=qe;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ge extends Fe{constructor(){super((()=>window.sessionStorage),"SESSION")}_addListener(t,e){}_removeListener(t,e){}}Ge.type="SESSION";const We=Ge;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ke(t){return Promise.all(t.map((async t=>{try{const e=await t;return{fulfilled:!0,value:e}}catch(e){return{fulfilled:!1,reason:e}}})))}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ze{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const e=this.receivers.find((e=>e.isListeningto(t)));if(e)return e;const n=new Ze(t);return this.receivers.push(n),n}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const e=t,{eventId:n,eventType:i,data:o}=e.data,r=this.handlersMap[i];if(!(null===r||void 0===r?void 0:r.size))return;e.ports[0].postMessage({status:"ack",eventId:n,eventType:i});const s=Array.from(r).map((async t=>t(e.origin,o))),a=await Ke(s);e.ports[0].postMessage({status:"done",eventId:n,eventType:i,response:a})}_subscribe(t,e){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(e)}_unsubscribe(t,e){this.handlersMap[t]&&e&&this.handlersMap[t].delete(e),e&&0!==this.handlersMap[t].size||delete this.handlersMap[t],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Ye(t="",e=10){let n="";for(let i=0;i<e;i++)n+=Math.floor(10*Math.random());return t+n}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ze.receivers=[];class Qe{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,e,n=50){const i="undefined"!==typeof MessageChannel?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let o,r;return new Promise(((s,a)=>{const c=Ye("",20);i.port1.start();const l=setTimeout((()=>{a(new Error("unsupported_event"))}),n);r={messageChannel:i,onMessage(t){const e=t;if(e.data.eventId===c)switch(e.data.status){case"ack":clearTimeout(l),o=setTimeout((()=>{a(new Error("timeout"))}),3e3);break;case"done":clearTimeout(o),s(e.data.response);break;default:clearTimeout(l),clearTimeout(o),a(new Error("invalid_response"));break}}},this.handlers.add(r),i.port1.addEventListener("message",r.onMessage),this.target.postMessage({eventType:t,eventId:c,data:e},[i.port2])})).finally((()=>{r&&this.removeMessageHandler(r)}))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Je(){return window}function Xe(t){Je().location.href=t}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tn(){return"undefined"!==typeof Je()["WorkerGlobalScope"]&&"function"===typeof Je()["importScripts"]}async function en(){if(!(null===navigator||void 0===navigator?void 0:navigator.serviceWorker))return null;try{const t=await navigator.serviceWorker.ready;return t.active}catch(t){return null}}function nn(){var t;return(null===(t=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===t?void 0:t.controller)||null}function on(){return tn()?self:null}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rn="firebaseLocalStorageDb",sn=1,an="firebaseLocalStorage",cn="fbase_key";class ln{constructor(t){this.request=t}toPromise(){return new Promise(((t,e)=>{this.request.addEventListener("success",(()=>{t(this.request.result)})),this.request.addEventListener("error",(()=>{e(this.request.error)}))}))}}function un(t,e){return t.transaction([an],e?"readwrite":"readonly").objectStore(an)}function dn(){const t=indexedDB.deleteDatabase(rn);return new ln(t).toPromise()}function hn(){const t=indexedDB.open(rn,sn);return new Promise(((e,n)=>{t.addEventListener("error",(()=>{n(t.error)})),t.addEventListener("upgradeneeded",(()=>{const e=t.result;try{e.createObjectStore(an,{keyPath:cn})}catch(i){n(i)}})),t.addEventListener("success",(async()=>{const n=t.result;n.objectStoreNames.contains(an)?e(n):(n.close(),await dn(),e(await hn()))}))}))}async function pn(t,e,n){const i=un(t,!0).put({[cn]:e,value:n});return new ln(i).toPromise()}async function fn(t,e){const n=un(t,!1).get(e),i=await new ln(n).toPromise();return void 0===i?null:i.value}function gn(t,e){const n=un(t,!0).delete(e);return new ln(n).toPromise()}const mn=800,kn=3;class bn{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then((()=>{}),(()=>{}))}async _openDb(){return this.db||(this.db=await hn()),this.db}async _withRetries(t){let e=0;while(1)try{const e=await this._openDb();return await t(e)}catch(n){if(e++>kn)throw n;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return tn()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ze._getInstance(on()),this.receiver._subscribe("keyChanged",(async(t,e)=>{const n=await this._poll();return{keyProcessed:n.includes(e.key)}})),this.receiver._subscribe("ping",(async(t,e)=>["keyChanged"]))}async initializeSender(){var t,e;if(this.activeServiceWorker=await en(),!this.activeServiceWorker)return;this.sender=new Qe(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&(null===(t=n[0])||void 0===t?void 0:t.fulfilled)&&(null===(e=n[0])||void 0===e?void 0:e.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(this.sender&&this.activeServiceWorker&&nn()===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch(e){}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await hn();return await pn(t,ze,"1"),await gn(t,ze),!0}catch(t){}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,e){return this._withPendingWrite((async()=>(await this._withRetries((n=>pn(n,t,e))),this.localCache[t]=e,this.notifyServiceWorker(t))))}async _get(t){const e=await this._withRetries((e=>fn(e,t)));return this.localCache[t]=e,e}async _remove(t){return this._withPendingWrite((async()=>(await this._withRetries((e=>gn(e,t))),delete this.localCache[t],this.notifyServiceWorker(t))))}async _poll(){const t=await this._withRetries((t=>{const e=un(t,!1).getAll();return new ln(e).toPromise()}));if(!t)return[];if(0!==this.pendingWrites)return[];const e=[],n=new Set;if(0!==t.length)for(const{fbase_key:i,value:o}of t)n.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(o)&&(this.notifyListeners(i,o),e.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!n.has(i)&&(this.notifyListeners(i,null),e.push(i));return e}notifyListeners(t,e){this.localCache[t]=e;const n=this.listeners[t];if(n)for(const i of Array.from(n))i(e)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((async()=>this._poll()),mn)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,e){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(e)}_removeListener(t,e){this.listeners[t]&&(this.listeners[t].delete(e),0===this.listeners[t].size&&delete this.listeners[t]),0===Object.keys(this.listeners).length&&this.stopPolling()}}bn.type="LOCAL";const wn=bn;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vn(t,e){return N(t,"POST","/v2/accounts/mfaSignIn:start",M(t,e))}function _n(t,e){return N(t,"POST","/v2/accounts/mfaSignIn:finalize",M(t,e))}function An(t,e){return N(t,"POST","/v2/accounts/mfaSignIn:finalize",M(t,e))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Rt("rcb"),new x(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Cn="recaptcha";async function yn(t,e,n){var i;const o=await n.verify();try{let r;if(b("string"===typeof o,t,"argument-error"),b(n.type===Cn,t,"argument-error"),r="string"===typeof e?{phoneNumber:e}:e,"session"in r){const e=r.session;if("phoneNumber"in r){b("enroll"===e.type,t,"internal-error");const n=await Be(t,{idToken:e.credential,phoneEnrollmentInfo:{phoneNumber:r.phoneNumber,recaptchaToken:o}});return n.phoneSessionInfo.sessionInfo}{b("signin"===e.type,t,"internal-error");const n=(null===(i=r.multiFactorHint)||void 0===i?void 0:i.uid)||r.multiFactorUid;b(n,t,"missing-multi-factor-info");const s=await vn(t,{mfaPendingCredential:e.credential,mfaEnrollmentId:n,phoneSignInInfo:{recaptchaToken:o}});return s.phoneResponseInfo.sessionInfo}}{const{sessionInfo:e}=await se(t,{phoneNumber:r.phoneNumber,recaptchaToken:o});return e}}finally{n._reset()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class En{constructor(t){this.providerId=En.PROVIDER_ID,this.auth=Ot(t)}verifyPhoneNumber(t,e){return yn(this.auth,t,(0,i.m9)(e))}static credential(t,e){return de._fromVerification(t,e)}static credentialFromResult(t){const e=t;return En.credentialFromTaggedObject(e)}static credentialFromError(t){return En.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{phoneNumber:e,temporaryProof:n}=t;return e&&n?de._fromTokenResponse(e,n):null}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function xn(t,e){return e?lt(e):(b(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */En.PROVIDER_ID="phone",En.PHONE_SIGN_IN_METHOD="phone";class In extends Qt{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return ie(t,this._buildIdpRequest())}_linkToIdToken(t,e){return ie(t,this._buildIdpRequest(e))}_getReauthenticationResolver(t){return ie(t,this._buildIdpRequest())}_buildIdpRequest(t){const e={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(e.idToken=t),e}}function Tn(t){return Te(t.auth,new In(t),t.bypassAuthState)}function Dn(t){const{auth:e,user:n}=t;return b(n,e,"internal-error"),Ie(n,new In(t),t.bypassAuthState)}async function Sn(t){const{auth:e,user:n}=t;return b(n,e,"internal-error"),xe(n,new In(t),t.bypassAuthState)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mn{constructor(t,e,n,i,o=!1){this.auth=t,this.resolver=n,this.user=i,this.bypassAuthState=o,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(e)?e:[e]}execute(){return new Promise((async(t,e)=>{this.pendingPromise={resolve:t,reject:e};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(n){this.reject(n)}}))}async onAuthEvent(t){const{urlResponse:e,sessionId:n,postBody:i,tenantId:o,error:r,type:s}=t;if(r)return void this.reject(r);const a={auth:this.auth,requestUri:e,sessionId:n,tenantId:o||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(s)(a))}catch(c){this.reject(c)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return Tn;case"linkViaPopup":case"linkViaRedirect":return Sn;case"reauthViaPopup":case"reauthViaRedirect":return Dn;default:f(this.auth,"internal-error")}}resolve(t){v(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){v(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nn=new x(2e3,1e4);class On extends Mn{constructor(t,e,n,i,o){super(t,e,i,o),this.provider=n,this.authWindow=null,this.pollId=null,On.currentPopupAction&&On.currentPopupAction.cancel(),On.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return b(t,this.auth,"internal-error"),t}async onExecution(){v(1===this.filter.length,"Popup operations only handle one event");const t=Ye();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch((t=>{this.reject(t)})),this.resolver._isIframeWebStorageSupported(this.auth,(t=>{t||this.reject(g(this.auth,"web-storage-unsupported"))})),this.pollUserCancellation()}get eventId(){var t;return(null===(t=this.authWindow)||void 0===t?void 0:t.associatedEvent)||null}cancel(){this.reject(g(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,On.currentPopupAction=null}pollUserCancellation(){const t=()=>{var e,n;(null===(n=null===(e=this.authWindow)||void 0===e?void 0:e.window)||void 0===n?void 0:n.closed)?this.pollId=window.setTimeout((()=>{this.pollId=null,this.reject(g(this.auth,"popup-closed-by-user"))}),8e3):this.pollId=window.setTimeout(t,Nn.get())};t()}}On.currentPopupAction=null;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Pn="pendingRedirect",Bn=new Map;class Ln extends Mn{constructor(t,e,n=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],e,void 0,n),this.eventId=null}async execute(){let t=Bn.get(this.auth._key());if(!t){try{const e=await Rn(this.resolver,this.auth),n=e?await super.execute():null;t=()=>Promise.resolve(n)}catch(e){t=()=>Promise.reject(e)}Bn.set(this.auth._key(),t)}return this.bypassAuthState||Bn.set(this.auth._key(),(()=>Promise.resolve(null))),t()}async onAuthEvent(t){if("signInViaRedirect"===t.type)return super.onAuthEvent(t);if("unknown"!==t.type){if(t.eventId){const e=await this.auth._redirectUserForId(t.eventId);if(e)return this.user=e,super.onAuthEvent(t);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}}async function Rn(t,e){const n=Fn(e),i=zn(t);if(!await i._isAvailable())return!1;const o="true"===await i._get(n);return await i._remove(n),o}function jn(t,e){Bn.set(t._key(),e)}function zn(t){return lt(t._redirectPersistence)}function Fn(t){return ht(Pn,t.config.apiKey,t.name)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Vn(t,e,n=!1){const i=Ot(t),o=xn(i,e),r=new Ln(i,o,n),s=await r.execute();return s&&!n&&(delete s.user._redirectEventId,await i._persistUserIfCurrent(s.user),await i._setRedirectUser(null,e)),s}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Un=6e5;class Hn{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let e=!1;return this.consumers.forEach((n=>{this.isEventForConsumer(t,n)&&(e=!0,this.sendToConsumer(t,n),this.saveEventToCache(t))})),this.hasHandledPotentialRedirect||!Gn(t)||(this.hasHandledPotentialRedirect=!0,e||(this.queuedRedirectEvent=t,e=!0)),e}sendToConsumer(t,e){var n;if(t.error&&!$n(t)){const i=(null===(n=t.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error";e.onError(g(this.auth,i))}else e.onAuthEvent(t)}isEventForConsumer(t,e){const n=null===e.eventId||!!t.eventId&&t.eventId===e.eventId;return e.filter.includes(t.type)&&n}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=Un&&this.cachedEventUids.clear(),this.cachedEventUids.has(qn(t))}saveEventToCache(t){this.cachedEventUids.add(qn(t)),this.lastProcessedEventTime=Date.now()}}function qn(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter((t=>t)).join("-")}function $n({type:t,error:e}){return"unknown"===t&&"auth/no-auth-event"===(null===e||void 0===e?void 0:e.code)}function Gn(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return $n(t);default:return!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Wn(t,e={}){return N(t,"GET","/v1/projects",e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kn=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Zn=/^https?/;async function Yn(t){if(t.config.emulator)return;const{authorizedDomains:e}=await Wn(t);for(const i of e)try{if(Qn(i))return}catch(n){}f(t,"unauthorized-domain")}function Qn(t){const e=_(),{protocol:n,hostname:i}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return""===o.hostname&&""===i?"chrome-extension:"===n&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):"chrome-extension:"===n&&o.hostname===i}if(!Zn.test(n))return!1;if(Kn.test(t))return i===t;const o=t.replace(/\./g,"\\."),r=new RegExp("^(.+\\."+o+"|"+o+")$","i");return r.test(i)}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jn=new x(3e4,6e4);function Xn(){const t=Je().___jsl;if(null===t||void 0===t?void 0:t.H)for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}function ti(t){return new Promise(((e,n)=>{var i,o,r;function s(){Xn(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Xn(),n(g(t,"network-request-failed"))},timeout:Jn.get()})}if(null===(o=null===(i=Je().gapi)||void 0===i?void 0:i.iframes)||void 0===o?void 0:o.Iframe)e(gapi.iframes.getContext());else{if(!(null===(r=Je().gapi)||void 0===r?void 0:r.load)){const e=Rt("iframefcb");return Je()[e]=()=>{gapi.load?s():n(g(t,"network-request-failed"))},Lt(`https://apis.google.com/js/api.js?onload=${e}`).catch((t=>n(t)))}s()}})).catch((t=>{throw ei=null,t}))}let ei=null;function ni(t){return ei=ei||ti(t),ei}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ii=new x(5e3,15e3),oi="__/auth/iframe",ri="emulator/auth/iframe",si={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},ai=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function ci(t){const e=t.config;b(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?I(e,ri):`https://${t.config.authDomain}/${oi}`,r={apiKey:e.apiKey,appName:t.name,v:o.Jn},s=ai.get(t.config.apiHost);s&&(r.eid=s);const a=t._getFrameworks();return a.length&&(r.fw=a.join(",")),`${n}?${(0,i.xO)(r).slice(1)}`}async function li(t){const e=await ni(t),n=Je().gapi;return b(n,t,"internal-error"),e.open({where:document.body,url:ci(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:si,dontclear:!0},(e=>new Promise((async(n,i)=>{await e.restyle({setHideOnLeave:!1});const o=g(t,"network-request-failed"),r=Je().setTimeout((()=>{i(o)}),ii.get());function s(){Je().clearTimeout(r),n(e)}e.ping(s).then(s,(()=>{i(o)}))}))))}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ui={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},di=500,hi=600,pi="_blank",fi="http://localhost";class gi{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(t){}}}function mi(t,e,n,o=di,r=hi){const s=Math.max((window.screen.availHeight-r)/2,0).toString(),a=Math.max((window.screen.availWidth-o)/2,0).toString();let c="";const l=Object.assign(Object.assign({},ui),{width:o.toString(),height:r.toString(),top:s,left:a}),u=(0,i.z$)().toLowerCase();n&&(c=kt(u)?pi:n),gt(u)&&(e=e||fi,l.scrollbars="yes");const d=Object.entries(l).reduce(((t,[e,n])=>`${t}${e}=${n},`),"");if(Ct(u)&&"_self"!==c)return ki(e||"",c),new gi(null);const h=window.open(e||"",c,d);b(h,t,"popup-blocked");try{h.focus()}catch(p){}return new gi(h)}function ki(t,e){const n=document.createElement("a");n.href=t,n.target=e;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(i)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bi="__/auth/handler",wi="emulator/auth/handler",vi=encodeURIComponent("fac");async function _i(t,e,n,r,s,a){b(t.config.authDomain,t,"auth-domain-config-required"),b(t.config.apiKey,t,"invalid-api-key");const c={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:o.Jn,eventId:s};if(e instanceof me){e.setDefaultLanguage(t.languageCode),c.providerId=e.providerId||"",(0,i.xb)(e.getCustomParameters())||(c.customParameters=JSON.stringify(e.getCustomParameters()));for(const[t,e]of Object.entries(a||{}))c[t]=e}if(e instanceof ke){const t=e.getScopes().filter((t=>""!==t));t.length>0&&(c.scopes=t.join(","))}t.tenantId&&(c.tid=t.tenantId);const l=c;for(const i of Object.keys(l))void 0===l[i]&&delete l[i];const u=await t._getAppCheckToken(),d=u?`#${vi}=${encodeURIComponent(u)}`:"";return`${Ai(t)}?${(0,i.xO)(l).slice(1)}${d}`}function Ai({config:t}){return t.emulator?I(t,wi):`https://${t.authDomain}/${bi}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ci="webStorageSupport";class yi{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=We,this._completeRedirectFn=Vn,this._overrideRedirectResult=jn}async _openPopup(t,e,n,i){var o;v(null===(o=this.eventManagers[t._key()])||void 0===o?void 0:o.manager,"_initialize() not called before _openPopup()");const r=await _i(t,e,n,_(),i);return mi(t,r,Ye())}async _openRedirect(t,e,n,i){await this._originValidation(t);const o=await _i(t,e,n,_(),i);return Xe(o),new Promise((()=>{}))}_initialize(t){const e=t._key();if(this.eventManagers[e]){const{manager:t,promise:n}=this.eventManagers[e];return t?Promise.resolve(t):(v(n,"If manager is not set, promise should be"),n)}const n=this.initAndGetManager(t);return this.eventManagers[e]={promise:n},n.catch((()=>{delete this.eventManagers[e]})),n}async initAndGetManager(t){const e=await li(t),n=new Hn(t);return e.register("authEvent",(e=>{b(null===e||void 0===e?void 0:e.authEvent,t,"invalid-auth-event");const i=n.onEvent(e.authEvent);return{status:i?"ACK":"ERROR"}}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:n},this.iframes[t._key()]=e,n}_isIframeWebStorageSupported(t,e){const n=this.iframes[t._key()];n.send(Ci,{type:Ci},(n=>{var i;const o=null===(i=null===n||void 0===n?void 0:n[0])||void 0===i?void 0:i[Ci];void 0!==o&&e(!!o),f(t,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const e=t._key();return this.originValidationPromises[e]||(this.originValidationPromises[e]=Yn(t)),this.originValidationPromises[e]}get _shouldInitProactively(){return Et()||mt()||At()}}const Ei=yi;class xi{constructor(t){this.factorId=t}_process(t,e,n){switch(e.type){case"enroll":return this._finalizeEnroll(t,e.credential,n);case"signin":return this._finalizeSignIn(t,e.credential);default:return w("unexpected MultiFactorSessionType")}}}class Ii extends xi{constructor(t){super("phone"),this.credential=t}static _fromCredential(t){return new Ii(t)}_finalizeEnroll(t,e,n){return Le(t,{idToken:e,displayName:n,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(t,e){return _n(t,{mfaPendingCredential:e,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class Ti{constructor(){}static assertion(t){return Ii._fromCredential(t)}}Ti.FACTOR_ID="phone";class Di{static assertionForEnrollment(t,e){return Si._fromSecret(t,e)}static assertionForSignIn(t,e){return Si._fromEnrollmentId(t,e)}static async generateSecret(t){var e;const n=t;b("undefined"!==typeof(null===(e=n.user)||void 0===e?void 0:e.auth),"internal-error");const i=await Re(n.user.auth,{idToken:n.credential,totpEnrollmentInfo:{}});return Mi._fromStartTotpMfaEnrollmentResponse(i,n.user.auth)}}Di.FACTOR_ID="totp";class Si extends xi{constructor(t,e,n){super("totp"),this.otp=t,this.enrollmentId=e,this.secret=n}static _fromSecret(t,e){return new Si(e,void 0,t)}static _fromEnrollmentId(t,e){return new Si(e,t)}async _finalizeEnroll(t,e,n){return b("undefined"!==typeof this.secret,t,"argument-error"),je(t,{idToken:e,displayName:n,totpVerificationInfo:this.secret._makeTotpVerificationInfo(this.otp)})}async _finalizeSignIn(t,e){b(void 0!==this.enrollmentId&&void 0!==this.otp,t,"argument-error");const n={verificationCode:this.otp};return An(t,{mfaPendingCredential:e,mfaEnrollmentId:this.enrollmentId,totpVerificationInfo:n})}}class Mi{constructor(t,e,n,i,o,r,s){this.sessionInfo=r,this.auth=s,this.secretKey=t,this.hashingAlgorithm=e,this.codeLength=n,this.codeIntervalSeconds=i,this.enrollmentCompletionDeadline=o}static _fromStartTotpMfaEnrollmentResponse(t,e){return new Mi(t.totpSessionInfo.sharedSecretKey,t.totpSessionInfo.hashingAlgorithm,t.totpSessionInfo.verificationCodeLength,t.totpSessionInfo.periodSec,new Date(t.totpSessionInfo.finalizeEnrollmentTime).toUTCString(),t.totpSessionInfo.sessionInfo,e)}_makeTotpVerificationInfo(t){return{sessionInfo:this.sessionInfo,verificationCode:t}}generateQrCodeUrl(t,e){var n;let i=!1;return(Ni(t)||Ni(e))&&(i=!0),i&&(Ni(t)&&(t=(null===(n=this.auth.currentUser)||void 0===n?void 0:n.email)||"unknownuser"),Ni(e)&&(e=this.auth.name)),`otpauth://totp/${e}:${t}?secret=${this.secretKey}&issuer=${e}&algorithm=${this.hashingAlgorithm}&digits=${this.codeLength}`}}function Ni(t){return"undefined"===typeof t||0===(null===t||void 0===t?void 0:t.length)}var Oi="@firebase/auth",Pi="1.5.1";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Bi{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),(null===(t=this.auth.currentUser)||void 0===t?void 0:t.uid)||null}async getToken(t){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;const e=await this.auth.currentUser.getIdToken(t);return{accessToken:e}}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const e=this.auth.onIdTokenChanged((e=>{t((null===e||void 0===e?void 0:e.stsTokenManager.accessToken)||null)}));this.internalListeners.set(t,e),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const e=this.internalListeners.get(t);e&&(this.internalListeners.delete(t),e(),this.updateProactiveRefresh())}assertAuthConfigured(){b(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Li(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function Ri(t){(0,o.Xd)(new a.wA("auth",((e,{options:n})=>{const i=e.getProvider("app").getImmediate(),o=e.getProvider("heartbeat"),r=e.getProvider("app-check-internal"),{apiKey:s,authDomain:a}=i.options;b(s&&!s.includes(":"),"invalid-api-key",{appName:i.name});const c={apiKey:s,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:It(t)},l=new Nt(i,o,r,c);return $t(l,n),l}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback(((t,e,n)=>{const i=t.getProvider("auth-internal");i.initialize()}))),(0,o.Xd)(new a.wA("auth-internal",(t=>{const e=Ot(t.getProvider("auth").getImmediate());return(t=>new Bi(t))(e)}),"PRIVATE").setInstantiationMode("EXPLICIT")),(0,o.KN)(Oi,Pi,Li(t)),(0,o.KN)(Oi,Pi,"esm2017")}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ji=300,zi=(0,i.Pz)("authIdTokenMaxAge")||ji;let Fi=null;const Vi=t=>async e=>{const n=e&&await e.getIdTokenResult(),i=n&&((new Date).getTime()-Date.parse(n.issuedAtTime))/1e3;if(i&&i>zi)return;const o=null===n||void 0===n?void 0:n.token;Fi!==o&&(Fi=o,await fetch(t,{method:o?"POST":"DELETE",headers:o?{Authorization:`Bearer ${o}`}:{}}))};function Ui(t=(0,o.Mq)()){const e=(0,o.qX)(t,"auth");if(e.isInitialized())return e.getImmediate();const n=qt(t,{popupRedirectResolver:Ei,persistence:[wn,$e,We]}),r=(0,i.Pz)("authTokenSyncURL");if(r){const t=Vi(r);Oe(n,t,(()=>t(n.currentUser))),Ne(n,(e=>t(e)))}const s=(0,i.q4)("auth");return s&&Gt(n,`http://${s}`),n}Ri("Browser")},4287:function(t,e,n){"use strict";n.d(e,{ET:function(){return mh},hJ:function(){return sd},oe:function(){return gh},JU:function(){return ad},QT:function(){return dh},PL:function(){return ph},ad:function(){return ud},b9:function(){return Qd},Xo:function(){return Zd},IO:function(){return qd},TQ:function(){return Xd},r7:function(){return fh},ar:function(){return Gd}});n(1703),n(8675),n(3462),n(2801);var i,o=n(7077),r=n(7142),s=n(5168),a=n(223),c="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof window?window:"undefined"!==typeof global?global:"undefined"!==typeof self?self:{},l={},u=u||{},d=c||self;function h(t){var e=typeof t;return e="object"!=e?e:t?Array.isArray(t)?"array":e:"null","array"==e||"object"==e&&"number"==typeof t.length}function p(t){var e=typeof t;return"object"==e&&null!=t||"function"==e}function f(t){return Object.prototype.hasOwnProperty.call(t,g)&&t[g]||(t[g]=++m)}var g="closure_uid_"+(1e9*Math.random()>>>0),m=0;function k(t,e,n){return t.call.apply(t.bind,arguments)}function b(t,e,n){if(!t)throw Error();if(2<arguments.length){var i=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,i),t.apply(e,n)}}return function(){return t.apply(e,arguments)}}function w(t,e,n){return w=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?k:b,w.apply(null,arguments)}function v(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var e=n.slice();return e.push.apply(e,arguments),t.apply(this,e)}}function _(t,e){function n(){}n.prototype=e.prototype,t.$=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.ac=function(t,n,i){for(var o=Array(arguments.length-2),r=2;r<arguments.length;r++)o[r-2]=arguments[r];return e.prototype[n].apply(t,o)}}function A(){this.s=this.s,this.o=this.o}var C=0;A.prototype.s=!1,A.prototype.sa=function(){this.s||(this.s=!0,this.N(),0==C)||f(this)},A.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const y=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if("string"===typeof t)return"string"!==typeof e||1!=e.length?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function E(t){const e=t.length;if(0<e){const n=Array(e);for(let i=0;i<e;i++)n[i]=t[i];return n}return[]}function x(t,e){for(let n=1;n<arguments.length;n++){const e=arguments[n];if(h(e)){const n=t.length||0,i=e.length||0;t.length=n+i;for(let o=0;o<i;o++)t[n+o]=e[o]}else t.push(e)}}function I(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}I.prototype.h=function(){this.defaultPrevented=!0};var T=function(){if(!d.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{const t=()=>{};d.addEventListener("test",t,e),d.removeEventListener("test",t,e)}catch(n){}return t}();function D(t){return/^[\s\xa0]*$/.test(t)}function S(){var t=d.navigator;return t&&(t=t.userAgent)?t:""}function M(t){return-1!=S().indexOf(t)}function N(t){return N[" "](t),t}function O(t,e){var n=vi;return Object.prototype.hasOwnProperty.call(n,t)?n[t]:n[t]=e(t)}N[" "]=function(){};var P,B,L=M("Opera"),R=M("Trident")||M("MSIE"),j=M("Edge"),z=j||R,F=M("Gecko")&&!(-1!=S().toLowerCase().indexOf("webkit")&&!M("Edge"))&&!(M("Trident")||M("MSIE"))&&!M("Edge"),V=-1!=S().toLowerCase().indexOf("webkit")&&!M("Edge");function U(){var t=d.document;return t?t.documentMode:void 0}t:{var H="",q=function(){var t=S();return F?/rv:([^\);]+)(\)|;)/.exec(t):j?/Edge\/([\d\.]+)/.exec(t):R?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t):V?/WebKit\/(\S+)/.exec(t):L?/(?:Version)[ \/]?(\S+)/.exec(t):void 0}();if(q&&(H=q?q[1]:""),R){var $=U();if(null!=$&&$>parseFloat(H)){P=String($);break t}}P=H}if(d.document&&R){var G=U();B=G||(parseInt(P,10)||void 0)}else B=void 0;var W=B;function K(t,e){if(I.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,i=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(F){t:{try{N(e.nodeName);var o=!0;break t}catch(r){}o=!1}o||(e=null)}}else"mouseover"==n?e=t.fromElement:"mouseout"==n&&(e=t.toElement);this.relatedTarget=e,i?(this.clientX=void 0!==i.clientX?i.clientX:i.pageX,this.clientY=void 0!==i.clientY?i.clientY:i.pageY,this.screenX=i.screenX||0,this.screenY=i.screenY||0):(this.clientX=void 0!==t.clientX?t.clientX:t.pageX,this.clientY=void 0!==t.clientY?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType="string"===typeof t.pointerType?t.pointerType:Z[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&K.$.h.call(this)}}_(K,I);var Z={2:"touch",3:"pen",4:"mouse"};K.prototype.h=function(){K.$.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Y="closure_listenable_"+(1e6*Math.random()|0),Q=0;function J(t,e,n,i,o){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!i,this.la=o,this.key=++Q,this.fa=this.ia=!1}function X(t){t.fa=!0,t.listener=null,t.proxy=null,t.src=null,t.la=null}function tt(t,e,n){for(const i in t)e.call(n,t[i],i,t)}function et(t,e){for(const n in t)e.call(void 0,t[n],n,t)}function nt(t){const e={};for(const n in t)e[n]=t[n];return e}const it="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function ot(t,e){let n,i;for(let o=1;o<arguments.length;o++){for(n in i=arguments[o],i)t[n]=i[n];for(let e=0;e<it.length;e++)n=it[e],Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])}}function rt(t){this.src=t,this.g={},this.h=0}function st(t,e){var n=e.type;if(n in t.g){var i,o=t.g[n],r=y(o,e);(i=0<=r)&&Array.prototype.splice.call(o,r,1),i&&(X(e),0==t.g[n].length&&(delete t.g[n],t.h--))}}function at(t,e,n,i){for(var o=0;o<t.length;++o){var r=t[o];if(!r.fa&&r.listener==e&&r.capture==!!n&&r.la==i)return o}return-1}rt.prototype.add=function(t,e,n,i,o){var r=t.toString();t=this.g[r],t||(t=this.g[r]=[],this.h++);var s=at(t,e,i,o);return-1<s?(e=t[s],n||(e.ia=!1)):(e=new J(e,this.src,r,!!i,o),e.ia=n,t.push(e)),e};var ct="closure_lm_"+(1e6*Math.random()|0),lt={};function ut(t,e,n,i,o){if(i&&i.once)return pt(t,e,n,i,o);if(Array.isArray(e)){for(var r=0;r<e.length;r++)ut(t,e[r],n,i,o);return null}return n=vt(n),t&&t[Y]?t.O(e,n,p(i)?!!i.capture:!!i,o):dt(t,e,n,!1,i,o)}function dt(t,e,n,i,o,r){if(!e)throw Error("Invalid event type");var s=p(o)?!!o.capture:!!o,a=bt(t);if(a||(t[ct]=a=new rt(t)),n=a.add(e,n,i,s,r),n.proxy)return n;if(i=ht(),n.proxy=i,i.src=t,i.listener=n,t.addEventListener)T||(o=s),void 0===o&&(o=!1),t.addEventListener(e.toString(),i,o);else if(t.attachEvent)t.attachEvent(mt(e.toString()),i);else{if(!t.addListener||!t.removeListener)throw Error("addEventListener and attachEvent are unavailable.");t.addListener(i)}return n}function ht(){function t(n){return e.call(t.src,t.listener,n)}const e=kt;return t}function pt(t,e,n,i,o){if(Array.isArray(e)){for(var r=0;r<e.length;r++)pt(t,e[r],n,i,o);return null}return n=vt(n),t&&t[Y]?t.P(e,n,p(i)?!!i.capture:!!i,o):dt(t,e,n,!0,i,o)}function ft(t,e,n,i,o){if(Array.isArray(e))for(var r=0;r<e.length;r++)ft(t,e[r],n,i,o);else i=p(i)?!!i.capture:!!i,n=vt(n),t&&t[Y]?(t=t.i,e=String(e).toString(),e in t.g&&(r=t.g[e],n=at(r,n,i,o),-1<n&&(X(r[n]),Array.prototype.splice.call(r,n,1),0==r.length&&(delete t.g[e],t.h--)))):t&&(t=bt(t))&&(e=t.g[e.toString()],t=-1,e&&(t=at(e,n,i,o)),(n=-1<t?e[t]:null)&&gt(n))}function gt(t){if("number"!==typeof t&&t&&!t.fa){var e=t.src;if(e&&e[Y])st(e.i,t);else{var n=t.type,i=t.proxy;e.removeEventListener?e.removeEventListener(n,i,t.capture):e.detachEvent?e.detachEvent(mt(n),i):e.addListener&&e.removeListener&&e.removeListener(i),(n=bt(e))?(st(n,t),0==n.h&&(n.src=null,e[ct]=null)):X(t)}}}function mt(t){return t in lt?lt[t]:lt[t]="on"+t}function kt(t,e){if(t.fa)t=!0;else{e=new K(e,this);var n=t.listener,i=t.la||t.src;t.ia&&gt(t),t=n.call(i,e)}return t}function bt(t){return t=t[ct],t instanceof rt?t:null}var wt="__closure_events_fn_"+(1e9*Math.random()>>>0);function vt(t){return"function"===typeof t?t:(t[wt]||(t[wt]=function(e){return t.handleEvent(e)}),t[wt])}function _t(){A.call(this),this.i=new rt(this),this.S=this,this.J=null}function At(t,e){var n,i=t.J;if(i)for(n=[];i;i=i.J)n.push(i);if(t=t.S,i=e.type||e,"string"===typeof e)e=new I(e,t);else if(e instanceof I)e.target=e.target||t;else{var o=e;e=new I(i,t),ot(e,o)}if(o=!0,n)for(var r=n.length-1;0<=r;r--){var s=e.g=n[r];o=Ct(s,i,!0,e)&&o}if(s=e.g=t,o=Ct(s,i,!0,e)&&o,o=Ct(s,i,!1,e)&&o,n)for(r=0;r<n.length;r++)s=e.g=n[r],o=Ct(s,i,!1,e)&&o}function Ct(t,e,n,i){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var o=!0,r=0;r<e.length;++r){var s=e[r];if(s&&!s.fa&&s.capture==n){var a=s.listener,c=s.la||s.src;s.ia&&st(t.i,s),o=!1!==a.call(c,i)&&o}}return o&&!i.defaultPrevented}_(_t,A),_t.prototype[Y]=!0,_t.prototype.removeEventListener=function(t,e,n,i){ft(this,t,e,n,i)},_t.prototype.N=function(){if(_t.$.N.call(this),this.i){var t,e=this.i;for(t in e.g){for(var n=e.g[t],i=0;i<n.length;i++)X(n[i]);delete e.g[t],e.h--}}this.J=null},_t.prototype.O=function(t,e,n,i){return this.i.add(String(t),e,!1,n,i)},_t.prototype.P=function(t,e,n,i){return this.i.add(String(t),e,!0,n,i)};var yt=d.JSON.stringify;class Et{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}function xt(){var t=Pt;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class It{constructor(){this.h=this.g=null}add(t,e){const n=Tt.get();n.set(t,e),this.h?this.h.next=n:this.g=n,this.h=n}}var Tt=new Et((()=>new Dt),(t=>t.reset()));class Dt{constructor(){this.next=this.g=this.h=null}set(t,e){this.h=t,this.g=e,this.next=null}reset(){this.next=this.g=this.h=null}}function St(t){var e=1;t=t.split(":");const n=[];for(;0<e&&t.length;)n.push(t.shift()),e--;return t.length&&n.push(t.join(":")),n}function Mt(t){d.setTimeout((()=>{throw t}),0)}let Nt,Ot=!1,Pt=new It,Bt=()=>{const t=d.Promise.resolve(void 0);Nt=()=>{t.then(Lt)}};var Lt=()=>{for(var t;t=xt();){try{t.h.call(t.g)}catch(n){Mt(n)}var e=Tt;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Ot=!1};function Rt(t,e){_t.call(this),this.h=t||1,this.g=e||d,this.j=w(this.qb,this),this.l=Date.now()}function jt(t){t.ga=!1,t.T&&(t.g.clearTimeout(t.T),t.T=null)}function zt(t,e,n){if("function"===typeof t)n&&(t=w(t,n));else{if(!t||"function"!=typeof t.handleEvent)throw Error("Invalid listener argument");t=w(t.handleEvent,t)}return 2147483647<Number(e)?-1:d.setTimeout(t,e||0)}function Ft(t){t.g=zt((()=>{t.g=null,t.i&&(t.i=!1,Ft(t))}),t.j);const e=t.h;t.h=null,t.m.apply(null,e)}_(Rt,_t),i=Rt.prototype,i.ga=!1,i.T=null,i.qb=function(){if(this.ga){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-t):(this.T&&(this.g.clearTimeout(this.T),this.T=null),At(this,"tick"),this.ga&&(jt(this),this.start()))}},i.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())},i.N=function(){Rt.$.N.call(this),jt(this),delete this.g};class Vt extends A{constructor(t,e){super(),this.m=t,this.j=e,this.h=null,this.i=!1,this.g=null}l(t){this.h=arguments,this.g?this.i=!0:Ft(this)}N(){super.N(),this.g&&(d.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Ut(t){A.call(this),this.h=t,this.g={}}_(Ut,A);var Ht=[];function qt(t,e,n,i){Array.isArray(n)||(n&&(Ht[0]=n.toString()),n=Ht);for(var o=0;o<n.length;o++){var r=ut(e,n[o],i||t.handleEvent,!1,t.h||t);if(!r)break;t.g[r.key]=r}}function $t(t){tt(t.g,(function(t,e){this.g.hasOwnProperty(e)&&gt(t)}),t),t.g={}}function Gt(){this.g=!0}function Wt(t,e,n,i,o,r){t.info((function(){if(t.g)if(r)for(var s="",a=r.split("&"),c=0;c<a.length;c++){var l=a[c].split("=");if(1<l.length){var u=l[0];l=l[1];var d=u.split("_");s=2<=d.length&&"type"==d[1]?s+(u+"=")+l+"&":s+(u+"=redacted&")}}else s=null;else s=r;return"XMLHTTP REQ ("+i+") [attempt "+o+"]: "+e+"\n"+n+"\n"+s}))}function Kt(t,e,n,i,o,r,s){t.info((function(){return"XMLHTTP RESP ("+i+") [ attempt "+o+"]: "+e+"\n"+n+"\n"+r+" "+s}))}function Zt(t,e,n,i){t.info((function(){return"XMLHTTP TEXT ("+e+"): "+Qt(t,n)+(i?" "+i:"")}))}function Yt(t,e){t.info((function(){return"TIMEOUT: "+e}))}function Qt(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n)for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var i=n[t];if(!(2>i.length)){var o=i[1];if(Array.isArray(o)&&!(1>o.length)){var r=o[0];if("noop"!=r&&"stop"!=r&&"close"!=r)for(var s=1;s<o.length;s++)o[s]=""}}}return yt(n)}catch(a){return e}}Ut.prototype.N=function(){Ut.$.N.call(this),$t(this)},Ut.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")},Gt.prototype.Ea=function(){this.g=!1},Gt.prototype.info=function(){};var Jt={},Xt=null;function te(){return Xt=Xt||new _t}function ee(t){I.call(this,Jt.Ta,t)}function ne(t){const e=te();At(e,new ee(e))}function ie(t,e){I.call(this,Jt.STAT_EVENT,t),this.stat=e}function oe(t){const e=te();At(e,new ie(e,t))}function re(t,e){I.call(this,Jt.Ua,t),this.size=e}function se(t,e){if("function"!==typeof t)throw Error("Fn must not be null and must be a function");return d.setTimeout((function(){t()}),e)}Jt.Ta="serverreachability",_(ee,I),Jt.STAT_EVENT="statevent",_(ie,I),Jt.Ua="timingevent",_(re,I);var ae={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},ce={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function le(){}function ue(t){return t.h||(t.h=t.i())}function de(){}le.prototype.h=null;var he,pe={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function fe(){I.call(this,"d")}function ge(){I.call(this,"c")}function me(){}function ke(t,e,n,i){this.l=t,this.j=e,this.m=n,this.W=i||1,this.U=new Ut(this),this.P=we,t=z?125:void 0,this.V=new Rt(t),this.I=null,this.i=!1,this.u=this.B=this.A=this.L=this.G=this.Y=this.C=null,this.F=[],this.g=null,this.o=0,this.s=this.v=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new be}function be(){this.i=null,this.g="",this.h=!1}_(fe,I),_(ge,I),_(me,le),me.prototype.g=function(){return new XMLHttpRequest},me.prototype.i=function(){return{}},he=new me;var we=45e3,ve={},_e={};function Ae(t,e,n){t.L=1,t.A=qe(ze(e)),t.u=n,t.S=!0,Ce(t,null)}function Ce(t,e){t.G=Date.now(),Ie(t),t.B=ze(t.A);var n=t.B,i=t.W;Array.isArray(i)||(i=[String(i)]),on(n.i,"t",i),t.o=0,n=t.l.J,t.h=new be,t.g=li(t.l,n?e:null,!t.u),0<t.O&&(t.M=new Vt(w(t.Pa,t,t.g),t.O)),qt(t.U,t.g,"readystatechange",t.nb),e=t.I?nt(t.I):{},t.u?(t.v||(t.v="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ha(t.B,t.v,t.u,e)):(t.v="GET",t.g.ha(t.B,t.v,null,e)),ne(),Wt(t.j,t.v,t.B,t.m,t.W,t.u)}function ye(t){return!!t.g&&("GET"==t.v&&2!=t.L&&t.l.Ha)}function Ee(t,e,n){let i,o=!0;for(;!t.J&&t.o<n.length;){if(i=xe(t,n),i==_e){4==e&&(t.s=4,oe(14),o=!1),Zt(t.j,t.m,null,"[Incomplete Response]");break}if(i==ve){t.s=4,oe(15),Zt(t.j,t.m,n,"[Invalid Chunk]"),o=!1;break}Zt(t.j,t.m,i,null),Ne(t,i)}ye(t)&&0!=t.o&&(t.h.g=t.h.g.slice(t.o),t.o=0),4!=e||0!=n.length||t.h.h||(t.s=1,oe(16),o=!1),t.i=t.i&&o,o?0<n.length&&!t.ba&&(t.ba=!0,e=t.l,e.g==t&&e.ca&&!e.M&&(e.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),ei(e),e.M=!0,oe(11))):(Zt(t.j,t.m,n,"[Invalid Chunked Response]"),Me(t),Se(t))}function xe(t,e){var n=t.o,i=e.indexOf("\n",n);return-1==i?_e:(n=Number(e.substring(n,i)),isNaN(n)?ve:(i+=1,i+n>e.length?_e:(e=e.slice(i,i+n),t.o=i+n,e)))}function Ie(t){t.Y=Date.now()+t.P,Te(t,t.P)}function Te(t,e){if(null!=t.C)throw Error("WatchDog timer not null");t.C=se(w(t.lb,t),e)}function De(t){t.C&&(d.clearTimeout(t.C),t.C=null)}function Se(t){0==t.l.H||t.J||oi(t.l,t)}function Me(t){De(t);var e=t.M;e&&"function"==typeof e.sa&&e.sa(),t.M=null,jt(t.V),$t(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.sa())}function Ne(t,e){try{var n=t.l;if(0!=n.H&&(n.g==t||hn(n.i,t)))if(!t.K&&hn(n.i,t)&&3==n.H){try{var i=n.Ja.g.parse(e)}catch(l){i=null}if(Array.isArray(i)&&3==i.length){var o=i;if(0==o[0]){t:if(!n.u){if(n.g){if(!(n.g.G+3e3<t.G))break t;ii(n),Gn(n)}ti(n),oe(18)}}else n.Fa=o[1],0<n.Fa-n.V&&37500>o[2]&&n.G&&0==n.A&&!n.v&&(n.v=se(w(n.ib,n),6e3));if(1>=dn(n.i)&&n.oa){try{n.oa()}catch(l){}n.oa=void 0}}else si(n,11)}else if((t.K||n.g==t)&&ii(n),!D(e))for(o=n.Ja.g.parse(e),e=0;e<o.length;e++){let l=o[e];if(n.V=l[0],l=l[1],2==n.H)if("c"==l[0]){n.K=l[1],n.pa=l[2];const e=l[3];null!=e&&(n.ra=e,n.l.info("VER="+n.ra));const o=l[4];null!=o&&(n.Ga=o,n.l.info("SVER="+n.Ga));const u=l[5];null!=u&&"number"===typeof u&&0<u&&(i=1.5*u,n.L=i,n.l.info("backChannelRequestTimeoutMs_="+i)),i=n;const d=t.g;if(d){const t=d.g?d.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(t){var r=i.i;r.g||-1==t.indexOf("spdy")&&-1==t.indexOf("quic")&&-1==t.indexOf("h2")||(r.j=r.l,r.g=new Set,r.h&&(pn(r,r.h),r.h=null))}if(i.F){const t=d.g?d.g.getResponseHeader("X-HTTP-Session-Id"):null;t&&(i.Da=t,He(i.I,i.F,t))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-t.G,n.l.info("Handshake RTT: "+n.S+"ms")),i=n;var s=t;if(i.wa=ci(i,i.J?i.pa:null,i.Y),s.K){fn(i.i,s);var a=s,c=i.L;c&&a.setTimeout(c),a.C&&(De(a),Ie(a)),i.g=s}else Xn(i);0<n.j.length&&Kn(n)}else"stop"!=l[0]&&"close"!=l[0]||si(n,7);else 3==n.H&&("stop"==l[0]||"close"==l[0]?"stop"==l[0]?si(n,7):$n(n):"noop"!=l[0]&&n.h&&n.h.Aa(l),n.A=0)}ne(4)}catch(l){}}function Oe(t){if(t.Z&&"function"==typeof t.Z)return t.Z();if("undefined"!==typeof Map&&t instanceof Map||"undefined"!==typeof Set&&t instanceof Set)return Array.from(t.values());if("string"===typeof t)return t.split("");if(h(t)){for(var e=[],n=t.length,i=0;i<n;i++)e.push(t[i]);return e}for(i in e=[],n=0,t)e[n++]=t[i];return e}function Pe(t){if(t.ta&&"function"==typeof t.ta)return t.ta();if(!t.Z||"function"!=typeof t.Z){if("undefined"!==typeof Map&&t instanceof Map)return Array.from(t.keys());if(!("undefined"!==typeof Set&&t instanceof Set)){if(h(t)||"string"===typeof t){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const i in t)e[n++]=i;return e}}}function Be(t,e){if(t.forEach&&"function"==typeof t.forEach)t.forEach(e,void 0);else if(h(t)||"string"===typeof t)Array.prototype.forEach.call(t,e,void 0);else for(var n=Pe(t),i=Oe(t),o=i.length,r=0;r<o;r++)e.call(void 0,i[r],n&&n[r],t)}i=ke.prototype,i.setTimeout=function(t){this.P=t},i.nb=function(t){t=t.target;const e=this.M;e&&3==jn(t)?e.l():this.Pa(t)},i.Pa=function(t){try{if(t==this.g)t:{const u=jn(this.g);var e=this.g.Ia();const h=this.g.da();if(!(3>u)&&(3!=u||z||this.g&&(this.h.h||this.g.ja()||zn(this.g)))){this.J||4!=u||7==e||ne(8==e||0>=h?3:2),De(this);var n=this.g.da();this.ca=n;e:if(ye(this)){var i=zn(this.g);t="";var o=i.length,r=4==jn(this.g);if(!this.h.i){if("undefined"===typeof TextDecoder){Me(this),Se(this);var s="";break e}this.h.i=new d.TextDecoder}for(e=0;e<o;e++)this.h.h=!0,t+=this.h.i.decode(i[e],{stream:r&&e==o-1});i.length=0,this.h.g+=t,this.o=0,s=this.h.g}else s=this.g.ja();if(this.i=200==n,Kt(this.j,this.v,this.B,this.m,this.W,u,n),this.i){if(this.aa&&!this.K){e:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!D(a)){var l=a;break e}}l=null}if(!(n=l)){this.i=!1,this.s=3,oe(12),Me(this),Se(this);break t}Zt(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Ne(this,n)}this.S?(Ee(this,u,s),z&&this.i&&3==u&&(qt(this.U,this.V,"tick",this.mb),this.V.start())):(Zt(this.j,this.m,s,null),Ne(this,s)),4==u&&Me(this),this.i&&!this.J&&(4==u?oi(this.l,this):(this.i=!1,Ie(this)))}else Fn(this.g),400==n&&0<s.indexOf("Unknown SID")?(this.s=3,oe(12)):(this.s=0,oe(13)),Me(this),Se(this)}}}catch(u){}},i.mb=function(){if(this.g){var t=jn(this.g),e=this.g.ja();this.o<e.length&&(De(this),Ee(this,t,e),this.i&&4!=t&&Ie(this))}},i.cancel=function(){this.J=!0,Me(this)},i.lb=function(){this.C=null;const t=Date.now();0<=t-this.Y?(Yt(this.j,this.B),2!=this.L&&(ne(),oe(17)),Me(this),this.s=2,Se(this)):Te(this,this.Y-t)};var Le=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Re(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var i=t[n].indexOf("="),o=null;if(0<=i){var r=t[n].substring(0,i);o=t[n].substring(i+1)}else r=t[n];e(r,o?decodeURIComponent(o.replace(/\+/g," ")):"")}}}function je(t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof je){this.h=t.h,Fe(this,t.j),this.s=t.s,this.g=t.g,Ve(this,t.m),this.l=t.l;var e=t.i,n=new Xe;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),Ue(this,n),this.o=t.o}else t&&(e=String(t).match(Le))?(this.h=!1,Fe(this,e[1]||"",!0),this.s=$e(e[2]||""),this.g=$e(e[3]||"",!0),Ve(this,e[4]),this.l=$e(e[5]||"",!0),Ue(this,e[6]||"",!0),this.o=$e(e[7]||"")):(this.h=!1,this.i=new Xe(null,this.h))}function ze(t){return new je(t)}function Fe(t,e,n){t.j=n?$e(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Ve(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Ue(t,e,n){e instanceof Xe?(t.i=e,sn(t.i,t.h)):(n||(e=Ge(e,Qe)),t.i=new Xe(e,t.h))}function He(t,e,n){t.i.set(e,n)}function qe(t){return He(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function $e(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Ge(t,e,n){return"string"===typeof t?(t=encodeURI(t).replace(e,We),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function We(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(15&t).toString(16)}je.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Ge(e,Ke,!0),":");var n=this.g;return(n||"file"==e)&&(t.push("//"),(e=this.s)&&t.push(Ge(e,Ke,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,null!=n&&t.push(":",String(n))),(n=this.l)&&(this.g&&"/"!=n.charAt(0)&&t.push("/"),t.push(Ge(n,"/"==n.charAt(0)?Ye:Ze,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Ge(n,Je)),t.join("")};var Ke=/[#\/\?@]/g,Ze=/[#\?:]/g,Ye=/[#\?]/g,Qe=/[#\?@]/g,Je=/#/g;function Xe(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function tn(t){t.g||(t.g=new Map,t.h=0,t.i&&Re(t.i,(function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)})))}function en(t,e){tn(t),e=rn(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function nn(t,e){return tn(t),e=rn(t,e),t.g.has(e)}function on(t,e,n){en(t,e),0<n.length&&(t.i=null,t.g.set(rn(t,e),E(n)),t.h+=n.length)}function rn(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function sn(t,e){e&&!t.j&&(tn(t),t.i=null,t.g.forEach((function(t,e){var n=e.toLowerCase();e!=n&&(en(this,e),on(this,n,t))}),t)),t.j=e}i=Xe.prototype,i.add=function(t,e){tn(this),this.i=null,t=rn(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this},i.forEach=function(t,e){tn(this),this.g.forEach((function(n,i){n.forEach((function(n){t.call(e,n,i,this)}),this)}),this)},i.ta=function(){tn(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let i=0;i<e.length;i++){const o=t[i];for(let t=0;t<o.length;t++)n.push(e[i])}return n},i.Z=function(t){tn(this);let e=[];if("string"===typeof t)nn(this,t)&&(e=e.concat(this.g.get(rn(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e},i.set=function(t,e){return tn(this),this.i=null,t=rn(this,t),nn(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this},i.get=function(t,e){return t?(t=this.Z(t),0<t.length?String(t[0]):e):e},i.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var i=e[n];const r=encodeURIComponent(String(i)),s=this.Z(i);for(i=0;i<s.length;i++){var o=r;""!==s[i]&&(o+="="+encodeURIComponent(String(s[i]))),t.push(o)}}return this.i=t.join("&")};var an=class{constructor(t,e){this.g=t,this.map=e}};function cn(t){this.l=t||ln,d.PerformanceNavigationTiming?(t=d.performance.getEntriesByType("navigation"),t=0<t.length&&("hq"==t[0].nextHopProtocol||"h2"==t[0].nextHopProtocol)):t=!!(d.g&&d.g.Ka&&d.g.Ka()&&d.g.Ka().dc),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var ln=10;function un(t){return!!t.h||!!t.g&&t.g.size>=t.j}function dn(t){return t.h?1:t.g?t.g.size:0}function hn(t,e){return t.h?t.h==e:!!t.g&&t.g.has(e)}function pn(t,e){t.g?t.g.add(e):t.h=e}function fn(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}function gn(t){if(null!=t.h)return t.i.concat(t.h.F);if(null!=t.g&&0!==t.g.size){let e=t.i;for(const n of t.g.values())e=e.concat(n.F);return e}return E(t.i)}cn.prototype.cancel=function(){if(this.i=gn(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(const t of this.g.values())t.cancel();this.g.clear()}};var mn=class{stringify(t){return d.JSON.stringify(t,void 0)}parse(t){return d.JSON.parse(t,void 0)}};function kn(){this.g=new mn}function bn(t,e,n){const i=n||"";try{Be(t,(function(t,n){let o=t;p(t)&&(o=yt(t)),e.push(i+n+"="+encodeURIComponent(o))}))}catch(o){throw e.push(i+"type="+encodeURIComponent("_badmap")),o}}function wn(t,e){const n=new Gt;if(d.Image){const i=new Image;i.onload=v(vn,n,i,"TestLoadImage: loaded",!0,e),i.onerror=v(vn,n,i,"TestLoadImage: error",!1,e),i.onabort=v(vn,n,i,"TestLoadImage: abort",!1,e),i.ontimeout=v(vn,n,i,"TestLoadImage: timeout",!1,e),d.setTimeout((function(){i.ontimeout&&i.ontimeout()}),1e4),i.src=t}else e(!1)}function vn(t,e,n,i,o){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,o(i)}catch(r){}}function _n(t){this.l=t.ec||null,this.j=t.ob||!1}function An(t,e){_t.call(this),this.F=t,this.u=e,this.m=void 0,this.readyState=Cn,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}_(_n,le),_n.prototype.g=function(){return new An(this.l,this.j)},_n.prototype.i=function(t){return function(){return t}}({}),_(An,_t);var Cn=0;function yn(t){t.j.read().then(t.Xa.bind(t)).catch(t.ka.bind(t))}function En(t){t.readyState=4,t.l=null,t.j=null,t.A=null,xn(t)}function xn(t){t.onreadystatechange&&t.onreadystatechange.call(t)}i=An.prototype,i.open=function(t,e){if(this.readyState!=Cn)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,xn(this)},i.send=function(t){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.F||d).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))},i.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch((()=>{})),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,En(this)),this.readyState=Cn},i.$a=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,xn(this)),this.g&&(this.readyState=3,xn(this),this.g)))if("arraybuffer"===this.responseType)t.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if("undefined"!==typeof d.ReadableStream&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;yn(this)}else t.text().then(this.Za.bind(this),this.ka.bind(this))},i.Xa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?En(this):xn(this),3==this.readyState&&yn(this)}},i.Za=function(t){this.g&&(this.response=this.responseText=t,En(this))},i.Ya=function(t){this.g&&(this.response=t,En(this))},i.ka=function(){this.g&&En(this)},i.setRequestHeader=function(t,e){this.v.append(t,e)},i.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""},i.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join("\r\n")},Object.defineProperty(An.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(t){this.m=t?"include":"same-origin"}});var In=d.JSON.parse;function Tn(t){_t.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=Dn,this.L=this.M=!1}_(Tn,_t);var Dn="",Sn=/^https?$/i,Mn=["POST","PUT"];function Nn(t){return R&&"number"===typeof t.timeout&&void 0!==t.ontimeout}function On(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,Pn(t),Ln(t)}function Pn(t){t.F||(t.F=!0,At(t,"complete"),At(t,"error"))}function Bn(t){if(t.h&&"undefined"!=typeof u&&(!t.C[1]||4!=jn(t)||2!=t.da()))if(t.v&&4==jn(t))zt(t.La,0,t);else if(At(t,"readystatechange"),4==jn(t)){t.h=!1;try{const a=t.da();t:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break t;default:e=!1}var n;if(!(n=e)){var i;if(i=0===a){var o=String(t.I).match(Le)[1]||null;!o&&d.self&&d.self.location&&(o=d.self.location.protocol.slice(0,-1)),i=!Sn.test(o?o.toLowerCase():"")}n=i}if(n)At(t,"complete"),At(t,"success");else{t.m=6;try{var r=2<jn(t)?t.g.statusText:""}catch(s){r=""}t.j=r+" ["+t.da()+"]",Pn(t)}}finally{Ln(t)}}}function Ln(t,e){if(t.g){Rn(t);const i=t.g,o=t.C[0]?()=>{}:null;t.g=null,t.C=null,e||At(t,"ready");try{i.onreadystatechange=o}catch(n){}}}function Rn(t){t.g&&t.L&&(t.g.ontimeout=null),t.A&&(d.clearTimeout(t.A),t.A=null)}function jn(t){return t.g?t.g.readyState:0}function zn(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.K){case Dn:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch(Yi){return null}}function Fn(t){const e={};t=(t.g&&2<=jn(t)&&t.g.getAllResponseHeaders()||"").split("\r\n");for(let i=0;i<t.length;i++){if(D(t[i]))continue;var n=St(t[i]);const o=n[0];if(n=n[1],"string"!==typeof n)continue;n=n.trim();const r=e[o]||[];e[o]=r,r.push(n)}et(e,(function(t){return t.join(", ")}))}function Vn(t){let e="";return tt(t,(function(t,n){e+=n,e+=":",e+=t,e+="\r\n"})),e}function Un(t,e,n){t:{for(i in n){var i=!1;break t}i=!0}i||(n=Vn(n),"string"===typeof t?null!=n&&encodeURIComponent(String(n)):He(t,e,n))}function Hn(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function qn(t){this.Ga=0,this.j=[],this.l=new Gt,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=Hn("failFast",!1,t),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=Hn("baseRetryDelayMs",5e3,t),this.hb=Hn("retryDelaySeedMs",1e4,t),this.eb=Hn("forwardChannelMaxRetries",2,t),this.xa=Hn("forwardChannelRequestTimeoutMs",2e4,t),this.va=t&&t.xmlHttpFactory||void 0,this.Ha=t&&t.useFetchStreams||!1,this.L=void 0,this.J=t&&t.supportsCrossDomainXhr||!1,this.K="",this.i=new cn(t&&t.concurrentRequestLimit),this.Ja=new kn,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=t&&t.bc||!1,t&&t.Ea&&this.l.Ea(),t&&t.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&t&&t.detectBufferingProxy||!1,this.qa=void 0,t&&t.longPollingTimeout&&0<t.longPollingTimeout&&(this.qa=t.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}function $n(t){if(Wn(t),3==t.H){var e=t.W++,n=ze(t.I);if(He(n,"SID",t.K),He(n,"RID",e),He(n,"TYPE","terminate"),Qn(t,n),e=new ke(t,t.l,e),e.L=2,e.A=qe(ze(n)),n=!1,d.navigator&&d.navigator.sendBeacon)try{n=d.navigator.sendBeacon(e.A.toString(),"")}catch(i){}!n&&d.Image&&((new Image).src=e.A,n=!0),n||(e.g=li(e.l,null),e.g.ha(e.A)),e.G=Date.now(),Ie(e)}ai(t)}function Gn(t){t.g&&(ei(t),t.g.cancel(),t.g=null)}function Wn(t){Gn(t),t.u&&(d.clearTimeout(t.u),t.u=null),ii(t),t.i.cancel(),t.m&&("number"===typeof t.m&&d.clearTimeout(t.m),t.m=null)}function Kn(t){if(!un(t.i)&&!t.m){t.m=!0;var e=t.Na;Nt||Bt(),Ot||(Nt(),Ot=!0),Pt.add(e,t),t.C=0}}function Zn(t,e){return!(dn(t.i)>=t.i.j-(t.m?1:0))&&(t.m?(t.j=e.F.concat(t.j),!0):!(1==t.H||2==t.H||t.C>=(t.cb?0:t.eb))&&(t.m=se(w(t.Na,t,e),ri(t,t.C)),t.C++,!0))}function Yn(t,e){var n;n=e?e.m:t.W++;const i=ze(t.I);He(i,"SID",t.K),He(i,"RID",n),He(i,"AID",t.V),Qn(t,i),t.o&&t.s&&Un(i,t.o,t.s),n=new ke(t,t.l,n,t.C+1),null===t.o&&(n.I=t.s),e&&(t.j=e.F.concat(t.j)),e=Jn(t,n,1e3),n.setTimeout(Math.round(.5*t.xa)+Math.round(.5*t.xa*Math.random())),pn(t.i,n),Ae(n,i,e)}function Qn(t,e){t.na&&tt(t.na,(function(t,n){He(e,n,t)})),t.h&&Be({},(function(t,n){He(e,n,t)}))}function Jn(t,e,n){n=Math.min(t.j.length,n);var i=t.h?w(t.h.Va,t.h,t):null;t:{var o=t.j;let e=-1;for(;;){const t=["count="+n];-1==e?0<n?(e=o[0].g,t.push("ofs="+e)):e=0:t.push("ofs="+e);let s=!0;for(let a=0;a<n;a++){let n=o[a].g;const c=o[a].map;if(n-=e,0>n)e=Math.max(0,o[a].g-100),s=!1;else try{bn(c,t,"req"+n+"_")}catch(r){i&&i(c)}}if(s){i=t.join("&");break t}}}return t=t.j.splice(0,n),e.F=t,i}function Xn(t){if(!t.g&&!t.u){t.ba=1;var e=t.Ma;Nt||Bt(),Ot||(Nt(),Ot=!0),Pt.add(e,t),t.A=0}}function ti(t){return!(t.g||t.u||3<=t.A)&&(t.ba++,t.u=se(w(t.Ma,t),ri(t,t.A)),t.A++,!0)}function ei(t){null!=t.B&&(d.clearTimeout(t.B),t.B=null)}function ni(t){t.g=new ke(t,t.l,"rpc",t.ba),null===t.o&&(t.g.I=t.s),t.g.O=0;var e=ze(t.wa);He(e,"RID","rpc"),He(e,"SID",t.K),He(e,"AID",t.V),He(e,"CI",t.G?"0":"1"),!t.G&&t.qa&&He(e,"TO",t.qa),He(e,"TYPE","xmlhttp"),Qn(t,e),t.o&&t.s&&Un(e,t.o,t.s),t.L&&t.g.setTimeout(t.L);var n=t.g;t=t.pa,n.L=1,n.A=qe(ze(e)),n.u=null,n.S=!0,Ce(n,t)}function ii(t){null!=t.v&&(d.clearTimeout(t.v),t.v=null)}function oi(t,e){var n=null;if(t.g==e){ii(t),ei(t),t.g=null;var i=2}else{if(!hn(t.i,e))return;n=e.F,fn(t.i,e),i=1}if(0!=t.H)if(e.i)if(1==i){n=e.u?e.u.length:0,e=Date.now()-e.G;var o=t.C;i=te(),At(i,new re(i,n)),Kn(t)}else Xn(t);else if(o=e.s,3==o||0==o&&0<e.ca||!(1==i&&Zn(t,e)||2==i&&ti(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),o){case 1:si(t,5);break;case 4:si(t,10);break;case 3:si(t,6);break;default:si(t,2)}}function ri(t,e){let n=t.ab+Math.floor(Math.random()*t.hb);return t.isActive()||(n*=2),n*e}function si(t,e){if(t.l.info("Error code "+e),2==e){var n=null;t.h&&(n=null);var i=w(t.pb,t);n||(n=new je("//www.google.com/images/cleardot.gif"),d.location&&"http"==d.location.protocol||Fe(n,"https"),qe(n)),wn(n.toString(),i)}else oe(2);t.H=0,t.h&&t.h.za(e),ai(t),Wn(t)}function ai(t){if(t.H=0,t.ma=[],t.h){const e=gn(t.i);0==e.length&&0==t.j.length||(x(t.ma,e),x(t.ma,t.j),t.i.i.length=0,E(t.j),t.j.length=0),t.h.ya()}}function ci(t,e,n){var i=n instanceof je?ze(n):new je(n);if(""!=i.g)e&&(i.g=e+"."+i.g),Ve(i,i.m);else{var o=d.location;i=o.protocol,e=e?e+"."+o.hostname:o.hostname,o=+o.port;var r=new je(null);i&&Fe(r,i),e&&(r.g=e),o&&Ve(r,o),n&&(r.l=n),i=r}return n=t.F,e=t.Da,n&&e&&He(i,n,e),He(i,"VER",t.ra),Qn(t,i),i}function li(t,e,n){if(e&&!t.J)throw Error("Can't create secondary domain capable XhrIo object.");return e=t.Ha&&!t.va?new Tn(new _n({ob:n})):new Tn(t.va),e.Oa(t.J),e}function ui(){}function di(){if(R&&!(10<=Number(W)))throw Error("Environmental error: no available transport.")}function hi(t,e){_t.call(this),this.g=new qn(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(t?t["X-WebChannel-Client-Profile"]=e.Ca:t={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=t,(t=e&&e.cc)&&!D(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!D(e)&&(this.g.F=e,t=this.h,null!==t&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new gi(this)}function pi(t){fe.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var e=t.__sm__;if(e){t:{for(const n in e){t=n;break t}t=void 0}(this.i=t)&&(t=this.i,e=null!==e&&t in e?e[t]:void 0),this.data=e}else this.data=t}function fi(){ge.call(this),this.status=1}function gi(t){this.g=t}function mi(){this.blockSize=-1}function ki(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}function bi(t,e,n){n||(n=0);var i=Array(16);if("string"===typeof e)for(var o=0;16>o;++o)i[o]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(o=0;16>o;++o)i[o]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],o=t.g[2];var r=t.g[3],s=e+(r^n&(o^r))+i[0]+3614090360&4294967295;e=n+(s<<7&4294967295|s>>>25),s=r+(o^e&(n^o))+i[1]+3905402710&4294967295,r=e+(s<<12&4294967295|s>>>20),s=o+(n^r&(e^n))+i[2]+606105819&4294967295,o=r+(s<<17&4294967295|s>>>15),s=n+(e^o&(r^e))+i[3]+3250441966&4294967295,n=o+(s<<22&4294967295|s>>>10),s=e+(r^n&(o^r))+i[4]+4118548399&4294967295,e=n+(s<<7&4294967295|s>>>25),s=r+(o^e&(n^o))+i[5]+1200080426&4294967295,r=e+(s<<12&4294967295|s>>>20),s=o+(n^r&(e^n))+i[6]+2821735955&4294967295,o=r+(s<<17&4294967295|s>>>15),s=n+(e^o&(r^e))+i[7]+4249261313&4294967295,n=o+(s<<22&4294967295|s>>>10),s=e+(r^n&(o^r))+i[8]+1770035416&4294967295,e=n+(s<<7&4294967295|s>>>25),s=r+(o^e&(n^o))+i[9]+2336552879&4294967295,r=e+(s<<12&4294967295|s>>>20),s=o+(n^r&(e^n))+i[10]+4294925233&4294967295,o=r+(s<<17&4294967295|s>>>15),s=n+(e^o&(r^e))+i[11]+2304563134&4294967295,n=o+(s<<22&4294967295|s>>>10),s=e+(r^n&(o^r))+i[12]+1804603682&4294967295,e=n+(s<<7&4294967295|s>>>25),s=r+(o^e&(n^o))+i[13]+4254626195&4294967295,r=e+(s<<12&4294967295|s>>>20),s=o+(n^r&(e^n))+i[14]+2792965006&4294967295,o=r+(s<<17&4294967295|s>>>15),s=n+(e^o&(r^e))+i[15]+1236535329&4294967295,n=o+(s<<22&4294967295|s>>>10),s=e+(o^r&(n^o))+i[1]+4129170786&4294967295,e=n+(s<<5&4294967295|s>>>27),s=r+(n^o&(e^n))+i[6]+3225465664&4294967295,r=e+(s<<9&4294967295|s>>>23),s=o+(e^n&(r^e))+i[11]+643717713&4294967295,o=r+(s<<14&4294967295|s>>>18),s=n+(r^e&(o^r))+i[0]+3921069994&4294967295,n=o+(s<<20&4294967295|s>>>12),s=e+(o^r&(n^o))+i[5]+3593408605&4294967295,e=n+(s<<5&4294967295|s>>>27),s=r+(n^o&(e^n))+i[10]+38016083&4294967295,r=e+(s<<9&4294967295|s>>>23),s=o+(e^n&(r^e))+i[15]+3634488961&4294967295,o=r+(s<<14&4294967295|s>>>18),s=n+(r^e&(o^r))+i[4]+3889429448&4294967295,n=o+(s<<20&4294967295|s>>>12),s=e+(o^r&(n^o))+i[9]+568446438&4294967295,e=n+(s<<5&4294967295|s>>>27),s=r+(n^o&(e^n))+i[14]+3275163606&4294967295,r=e+(s<<9&4294967295|s>>>23),s=o+(e^n&(r^e))+i[3]+4107603335&4294967295,o=r+(s<<14&4294967295|s>>>18),s=n+(r^e&(o^r))+i[8]+1163531501&4294967295,n=o+(s<<20&4294967295|s>>>12),s=e+(o^r&(n^o))+i[13]+2850285829&4294967295,e=n+(s<<5&4294967295|s>>>27),s=r+(n^o&(e^n))+i[2]+4243563512&4294967295,r=e+(s<<9&4294967295|s>>>23),s=o+(e^n&(r^e))+i[7]+1735328473&4294967295,o=r+(s<<14&4294967295|s>>>18),s=n+(r^e&(o^r))+i[12]+2368359562&4294967295,n=o+(s<<20&4294967295|s>>>12),s=e+(n^o^r)+i[5]+4294588738&4294967295,e=n+(s<<4&4294967295|s>>>28),s=r+(e^n^o)+i[8]+2272392833&4294967295,r=e+(s<<11&4294967295|s>>>21),s=o+(r^e^n)+i[11]+1839030562&4294967295,o=r+(s<<16&4294967295|s>>>16),s=n+(o^r^e)+i[14]+4259657740&4294967295,n=o+(s<<23&4294967295|s>>>9),s=e+(n^o^r)+i[1]+2763975236&4294967295,e=n+(s<<4&4294967295|s>>>28),s=r+(e^n^o)+i[4]+1272893353&4294967295,r=e+(s<<11&4294967295|s>>>21),s=o+(r^e^n)+i[7]+4139469664&4294967295,o=r+(s<<16&4294967295|s>>>16),s=n+(o^r^e)+i[10]+3200236656&4294967295,n=o+(s<<23&4294967295|s>>>9),s=e+(n^o^r)+i[13]+681279174&4294967295,e=n+(s<<4&4294967295|s>>>28),s=r+(e^n^o)+i[0]+3936430074&4294967295,r=e+(s<<11&4294967295|s>>>21),s=o+(r^e^n)+i[3]+3572445317&4294967295,o=r+(s<<16&4294967295|s>>>16),s=n+(o^r^e)+i[6]+76029189&4294967295,n=o+(s<<23&4294967295|s>>>9),s=e+(n^o^r)+i[9]+3654602809&4294967295,e=n+(s<<4&4294967295|s>>>28),s=r+(e^n^o)+i[12]+3873151461&4294967295,r=e+(s<<11&4294967295|s>>>21),s=o+(r^e^n)+i[15]+530742520&4294967295,o=r+(s<<16&4294967295|s>>>16),s=n+(o^r^e)+i[2]+3299628645&4294967295,n=o+(s<<23&4294967295|s>>>9),s=e+(o^(n|~r))+i[0]+4096336452&4294967295,e=n+(s<<6&4294967295|s>>>26),s=r+(n^(e|~o))+i[7]+1126891415&4294967295,r=e+(s<<10&4294967295|s>>>22),s=o+(e^(r|~n))+i[14]+2878612391&4294967295,o=r+(s<<15&4294967295|s>>>17),s=n+(r^(o|~e))+i[5]+4237533241&4294967295,n=o+(s<<21&4294967295|s>>>11),s=e+(o^(n|~r))+i[12]+1700485571&4294967295,e=n+(s<<6&4294967295|s>>>26),s=r+(n^(e|~o))+i[3]+2399980690&4294967295,r=e+(s<<10&4294967295|s>>>22),s=o+(e^(r|~n))+i[10]+4293915773&4294967295,o=r+(s<<15&4294967295|s>>>17),s=n+(r^(o|~e))+i[1]+2240044497&4294967295,n=o+(s<<21&4294967295|s>>>11),s=e+(o^(n|~r))+i[8]+1873313359&4294967295,e=n+(s<<6&4294967295|s>>>26),s=r+(n^(e|~o))+i[15]+4264355552&4294967295,r=e+(s<<10&4294967295|s>>>22),s=o+(e^(r|~n))+i[6]+2734768916&4294967295,o=r+(s<<15&4294967295|s>>>17),s=n+(r^(o|~e))+i[13]+1309151649&4294967295,n=o+(s<<21&4294967295|s>>>11),s=e+(o^(n|~r))+i[4]+4149444226&4294967295,e=n+(s<<6&4294967295|s>>>26),s=r+(n^(e|~o))+i[11]+3174756917&4294967295,r=e+(s<<10&4294967295|s>>>22),s=o+(e^(r|~n))+i[2]+718787259&4294967295,o=r+(s<<15&4294967295|s>>>17),s=n+(r^(o|~e))+i[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(o+(s<<21&4294967295|s>>>11))&4294967295,t.g[2]=t.g[2]+o&4294967295,t.g[3]=t.g[3]+r&4294967295}function wi(t,e){this.h=e;for(var n=[],i=!0,o=t.length-1;0<=o;o--){var r=0|t[o];i&&r==e||(n[o]=r,i=!1)}this.g=n}i=Tn.prototype,i.Oa=function(t){this.M=t},i.ha=function(t,e,n,i){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+t);e=e?e.toUpperCase():"GET",this.I=t,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():he.g(),this.C=this.u?ue(this.u):ue(he),this.g.onreadystatechange=w(this.La,this);try{this.G=!0,this.g.open(e,String(t),!0),this.G=!1}catch(r){return void On(this,r)}if(t=n||"",n=new Map(this.headers),i)if(Object.getPrototypeOf(i)===Object.prototype)for(var o in i)n.set(o,i[o]);else{if("function"!==typeof i.keys||"function"!==typeof i.get)throw Error("Unknown input type for opt_headers: "+String(i));for(const t of i.keys())n.set(t,i.get(t))}i=Array.from(n.keys()).find((t=>"content-type"==t.toLowerCase())),o=d.FormData&&t instanceof d.FormData,!(0<=y(Mn,e))||i||o||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[s,a]of n)this.g.setRequestHeader(s,a);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{Rn(this),0<this.B&&((this.L=Nn(this.g))?(this.g.timeout=this.B,this.g.ontimeout=w(this.ua,this)):this.A=zt(this.ua,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(r){On(this,r)}},i.ua=function(){"undefined"!=typeof u&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,At(this,"timeout"),this.abort(8))},i.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,At(this,"complete"),At(this,"abort"),Ln(this))},i.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Ln(this,!0)),Tn.$.N.call(this)},i.La=function(){this.s||(this.G||this.v||this.l?Bn(this):this.kb())},i.kb=function(){Bn(this)},i.isActive=function(){return!!this.g},i.da=function(){try{return 2<jn(this)?this.g.status:-1}catch(t){return-1}},i.ja=function(){try{return this.g?this.g.responseText:""}catch(t){return""}},i.Wa=function(t){if(this.g){var e=this.g.responseText;return t&&0==e.indexOf(t)&&(e=e.substring(t.length)),In(e)}},i.Ia=function(){return this.m},i.Sa=function(){return"string"===typeof this.j?this.j:String(this.j)},i=qn.prototype,i.ra=8,i.H=1,i.Na=function(t){if(this.m)if(this.m=null,1==this.H){if(!t){this.W=Math.floor(1e5*Math.random()),t=this.W++;const o=new ke(this,this.l,t);let r=this.s;if(this.U&&(r?(r=nt(r),ot(r,this.U)):r=this.U),null!==this.o||this.O||(o.I=r,r=null),this.P)t:{for(var e=0,n=0;n<this.j.length;n++){var i=this.j[n];if(i="__data__"in i.map&&(i=i.map.__data__,"string"===typeof i)?i.length:void 0,void 0===i)break;if(e+=i,4096<e){e=n;break t}if(4096===e||n===this.j.length-1){e=n+1;break t}}e=1e3}else e=1e3;e=Jn(this,o,e),n=ze(this.I),He(n,"RID",t),He(n,"CVER",22),this.F&&He(n,"X-HTTP-Session-Id",this.F),Qn(this,n),r&&(this.O?e="headers="+encodeURIComponent(String(Vn(r)))+"&"+e:this.o&&Un(n,this.o,r)),pn(this.i,o),this.bb&&He(n,"TYPE","init"),this.P?(He(n,"$req",e),He(n,"SID","null"),o.aa=!0,Ae(o,n,null)):Ae(o,n,e),this.H=2}}else 3==this.H&&(t?Yn(this,t):0==this.j.length||un(this.i)||Yn(this))},i.Ma=function(){if(this.u=null,ni(this),this.ca&&!(this.M||null==this.g||0>=this.S)){var t=2*this.S;this.l.info("BP detection timer enabled: "+t),this.B=se(w(this.jb,this),t)}},i.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,oe(10),Gn(this),ni(this))},i.ib=function(){null!=this.v&&(this.v=null,Gn(this),ti(this),oe(19))},i.pb=function(t){t?(this.l.info("Successfully pinged google.com"),oe(2)):(this.l.info("Failed to ping google.com"),oe(1))},i.isActive=function(){return!!this.h&&this.h.isActive(this)},i=ui.prototype,i.Ba=function(){},i.Aa=function(){},i.za=function(){},i.ya=function(){},i.isActive=function(){return!0},i.Va=function(){},di.prototype.g=function(t,e){return new hi(t,e)},_(hi,_t),hi.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var t=this.g,e=this.l,n=this.h||void 0;oe(0),t.Y=e,t.na=n||{},t.G=t.aa,t.I=ci(t,null,t.Y),Kn(t)},hi.prototype.close=function(){$n(this.g)},hi.prototype.u=function(t){var e=this.g;if("string"===typeof t){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=yt(t),t=n);e.j.push(new an(e.fb++,t)),3==e.H&&Kn(e)},hi.prototype.N=function(){this.g.h=null,delete this.j,$n(this.g),delete this.g,hi.$.N.call(this)},_(pi,fe),_(fi,ge),_(gi,ui),gi.prototype.Ba=function(){At(this.g,"a")},gi.prototype.Aa=function(t){At(this.g,new pi(t))},gi.prototype.za=function(t){At(this.g,new fi)},gi.prototype.ya=function(){At(this.g,"b")},_(ki,mi),ki.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0},ki.prototype.j=function(t,e){void 0===e&&(e=t.length);for(var n=e-this.blockSize,i=this.m,o=this.h,r=0;r<e;){if(0==o)for(;r<=n;)bi(this,t,r),r+=this.blockSize;if("string"===typeof t){for(;r<e;)if(i[o++]=t.charCodeAt(r++),o==this.blockSize){bi(this,i),o=0;break}}else for(;r<e;)if(i[o++]=t[r++],o==this.blockSize){bi(this,i),o=0;break}}this.h=o,this.i+=e},ki.prototype.l=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;var n=8*this.i;for(e=t.length-8;e<t.length;++e)t[e]=255&n,n/=256;for(this.j(t),t=Array(16),e=n=0;4>e;++e)for(var i=0;32>i;i+=8)t[n++]=this.g[e]>>>i&255;return t};var vi={};function _i(t){return-128<=t&&128>t?O(t,(function(t){return new wi([0|t],0>t?-1:0)})):new wi([0|t],0>t?-1:0)}function Ai(t){if(isNaN(t)||!isFinite(t))return Ei;if(0>t)return Si(Ai(-t));for(var e=[],n=1,i=0;t>=n;i++)e[i]=t/n|0,n*=yi;return new wi(e,0)}function Ci(t,e){if(0==t.length)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if("-"==t.charAt(0))return Si(Ci(t.substring(1),e));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=Ai(Math.pow(e,8)),i=Ei,o=0;o<t.length;o+=8){var r=Math.min(8,t.length-o),s=parseInt(t.substring(o,o+r),e);8>r?(r=Ai(Math.pow(e,r)),i=i.R(r).add(Ai(s))):(i=i.R(n),i=i.add(Ai(s)))}return i}var yi=4294967296,Ei=_i(0),xi=_i(1),Ii=_i(16777216);function Ti(t){if(0!=t.h)return!1;for(var e=0;e<t.g.length;e++)if(0!=t.g[e])return!1;return!0}function Di(t){return-1==t.h}function Si(t){for(var e=t.g.length,n=[],i=0;i<e;i++)n[i]=~t.g[i];return new wi(n,~t.h).add(xi)}function Mi(t,e){return t.add(Si(e))}function Ni(t,e){for(;(65535&t[e])!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function Oi(t,e){this.g=t,this.h=e}function Pi(t,e){if(Ti(e))throw Error("division by zero");if(Ti(t))return new Oi(Ei,Ei);if(Di(t))return e=Pi(Si(t),e),new Oi(Si(e.g),Si(e.h));if(Di(e))return e=Pi(t,Si(e)),new Oi(Si(e.g),e.h);if(30<t.g.length){if(Di(t)||Di(e))throw Error("slowDivide_ only works with positive integers.");for(var n=xi,i=e;0>=i.X(t);)n=Bi(n),i=Bi(i);var o=Li(n,1),r=Li(i,1);for(i=Li(i,2),n=Li(n,2);!Ti(i);){var s=r.add(i);0>=s.X(t)&&(o=o.add(n),r=s),i=Li(i,1),n=Li(n,1)}return e=Mi(t,o.R(e)),new Oi(o,e)}for(o=Ei;0<=t.X(e);){for(n=Math.max(1,Math.floor(t.ea()/e.ea())),i=Math.ceil(Math.log(n)/Math.LN2),i=48>=i?1:Math.pow(2,i-48),r=Ai(n),s=r.R(e);Di(s)||0<s.X(t);)n-=i,r=Ai(n),s=r.R(e);Ti(r)&&(r=xi),o=o.add(r),t=Mi(t,s)}return new Oi(o,t)}function Bi(t){for(var e=t.g.length+1,n=[],i=0;i<e;i++)n[i]=t.D(i)<<1|t.D(i-1)>>>31;return new wi(n,t.h)}function Li(t,e){var n=e>>5;e%=32;for(var i=t.g.length-n,o=[],r=0;r<i;r++)o[r]=0<e?t.D(r+n)>>>e|t.D(r+n+1)<<32-e:t.D(r+n);return new wi(o,t.h)}i=wi.prototype,i.ea=function(){if(Di(this))return-Si(this).ea();for(var t=0,e=1,n=0;n<this.g.length;n++){var i=this.D(n);t+=(0<=i?i:yi+i)*e,e*=yi}return t},i.toString=function(t){if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(Ti(this))return"0";if(Di(this))return"-"+Si(this).toString(t);for(var e=Ai(Math.pow(t,6)),n=this,i="";;){var o=Pi(n,e).g;n=Mi(n,o.R(e));var r=((0<n.g.length?n.g[0]:n.h)>>>0).toString(t);if(n=o,Ti(n))return r+i;for(;6>r.length;)r="0"+r;i=r+i}},i.D=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h},i.X=function(t){return t=Mi(this,t),Di(t)?-1:Ti(t)?0:1},i.abs=function(){return Di(this)?Si(this):this},i.add=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],i=0,o=0;o<=e;o++){var r=i+(65535&this.D(o))+(65535&t.D(o)),s=(r>>>16)+(this.D(o)>>>16)+(t.D(o)>>>16);i=s>>>16,r&=65535,s&=65535,n[o]=s<<16|r}return new wi(n,-2147483648&n[n.length-1]?-1:0)},i.R=function(t){if(Ti(this)||Ti(t))return Ei;if(Di(this))return Di(t)?Si(this).R(Si(t)):Si(Si(this).R(t));if(Di(t))return Si(this.R(Si(t)));if(0>this.X(Ii)&&0>t.X(Ii))return Ai(this.ea()*t.ea());for(var e=this.g.length+t.g.length,n=[],i=0;i<2*e;i++)n[i]=0;for(i=0;i<this.g.length;i++)for(var o=0;o<t.g.length;o++){var r=this.D(i)>>>16,s=65535&this.D(i),a=t.D(o)>>>16,c=65535&t.D(o);n[2*i+2*o]+=s*c,Ni(n,2*i+2*o),n[2*i+2*o+1]+=r*c,Ni(n,2*i+2*o+1),n[2*i+2*o+1]+=s*a,Ni(n,2*i+2*o+1),n[2*i+2*o+2]+=r*a,Ni(n,2*i+2*o+2)}for(i=0;i<e;i++)n[i]=n[2*i+1]<<16|n[2*i];for(i=e;i<2*e;i++)n[i]=0;return new wi(n,0)},i.gb=function(t){return Pi(this,t).h},i.and=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],i=0;i<e;i++)n[i]=this.D(i)&t.D(i);return new wi(n,this.h&t.h)},i.or=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],i=0;i<e;i++)n[i]=this.D(i)|t.D(i);return new wi(n,this.h|t.h)},i.xor=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],i=0;i<e;i++)n[i]=this.D(i)^t.D(i);return new wi(n,this.h^t.h)},di.prototype.createWebChannel=di.prototype.g,hi.prototype.send=hi.prototype.u,hi.prototype.open=hi.prototype.m,hi.prototype.close=hi.prototype.close,ae.NO_ERROR=0,ae.TIMEOUT=8,ae.HTTP_ERROR=6,ce.COMPLETE="complete",de.EventType=pe,pe.OPEN="a",pe.CLOSE="b",pe.ERROR="c",pe.MESSAGE="d",_t.prototype.listen=_t.prototype.O,Tn.prototype.listenOnce=Tn.prototype.P,Tn.prototype.getLastError=Tn.prototype.Sa,Tn.prototype.getLastErrorCode=Tn.prototype.Ia,Tn.prototype.getStatus=Tn.prototype.da,Tn.prototype.getResponseJson=Tn.prototype.Wa,Tn.prototype.getResponseText=Tn.prototype.ja,Tn.prototype.send=Tn.prototype.ha,Tn.prototype.setWithCredentials=Tn.prototype.Oa,ki.prototype.digest=ki.prototype.l,ki.prototype.reset=ki.prototype.reset,ki.prototype.update=ki.prototype.j,wi.prototype.add=wi.prototype.add,wi.prototype.multiply=wi.prototype.R,wi.prototype.modulo=wi.prototype.gb,wi.prototype.compare=wi.prototype.X,wi.prototype.toNumber=wi.prototype.ea,wi.prototype.toString=wi.prototype.toString,wi.prototype.getBits=wi.prototype.D,wi.fromNumber=Ai,wi.fromString=Ci;var Ri=l.createWebChannelTransport=function(){return new di},ji=l.getStatEventTarget=function(){return te()},zi=l.ErrorCode=ae,Fi=l.EventType=ce,Vi=l.Event=Jt,Ui=l.Stat={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},Hi=(l.FetchXmlHttpFactory=_n,l.WebChannel=de),qi=l.XhrIo=Tn,$i=l.Md5=ki,Gi=l.Integer=wi;const Wi="@firebase/firestore";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ki{constructor(t){this.uid=t}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}Ki.UNAUTHENTICATED=new Ki(null),Ki.GOOGLE_CREDENTIALS=new Ki("google-credentials-uid"),Ki.FIRST_PARTY=new Ki("first-party-uid"),Ki.MOCK_USER=new Ki("mock-user");
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let Zi="10.7.0";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yi=new s.Yd("@firebase/firestore");function Qi(){return Yi.logLevel}function Ji(t,...e){if(Yi.logLevel<=s["in"].DEBUG){const n=e.map(eo);Yi.debug(`Firestore (${Zi}): ${t}`,...n)}}function Xi(t,...e){if(Yi.logLevel<=s["in"].ERROR){const n=e.map(eo);Yi.error(`Firestore (${Zi}): ${t}`,...n)}}function to(t,...e){if(Yi.logLevel<=s["in"].WARN){const n=e.map(eo);Yi.warn(`Firestore (${Zi}): ${t}`,...n)}}function eo(t){if("string"==typeof t)return t;try{
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */return function(t){return JSON.stringify(t)}(t)}catch(e){return t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function no(t="Unexpected state"){const e=`FIRESTORE (${Zi}) INTERNAL ASSERTION FAILED: `+t;throw Xi(e),new Error(e)}function io(t,e){t||no()}function oo(t,e){return t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ro={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class so extends a.ZR{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ao{constructor(){this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class co{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class lo{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable((()=>e(Ki.UNAUTHENTICATED)))}shutdown(){}}class uo{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable((()=>e(this.token.user)))}shutdown(){this.changeListener=null}}class ho{constructor(t){this.t=t,this.currentUser=Ki.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){let n=this.i;const i=t=>this.i!==n?(n=this.i,e(t)):Promise.resolve();let o=new ao;this.o=()=>{this.i++,this.currentUser=this.u(),o.resolve(),o=new ao,t.enqueueRetryable((()=>i(this.currentUser)))};const r=()=>{const e=o;t.enqueueRetryable((async()=>{await e.promise,await i(this.currentUser)}))},s=t=>{Ji("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=t,this.auth.addAuthTokenListener(this.o),r()};this.t.onInit((t=>s(t))),setTimeout((()=>{if(!this.auth){const t=this.t.getImmediate({optional:!0});t?s(t):(Ji("FirebaseAuthCredentialsProvider","Auth not yet detected"),o.resolve(),o=new ao)}}),0),r()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then((e=>this.i!==t?(Ji("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):e?(io("string"==typeof e.accessToken),new co(e.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return io(null===t||"string"==typeof t),new Ki(t)}}class po{constructor(t,e,n){this.l=t,this.h=e,this.P=n,this.type="FirstParty",this.user=Ki.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const t=this.T();return t&&this.I.set("Authorization",t),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class fo{constructor(t,e,n){this.l=t,this.h=e,this.P=n}getToken(){return Promise.resolve(new po(this.l,this.h,this.P))}start(t,e){t.enqueueRetryable((()=>e(Ki.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class go{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class mo{constructor(t){this.A=t,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(t,e){const n=t=>{null!=t.error&&Ji("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${t.error.message}`);const n=t.token!==this.R;return this.R=t.token,Ji("FirebaseAppCheckTokenProvider",`Received ${n?"new":"existing"} token.`),n?e(t.token):Promise.resolve()};this.o=e=>{t.enqueueRetryable((()=>n(e)))};const i=t=>{Ji("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=t,this.appCheck.addTokenListener(this.o)};this.A.onInit((t=>i(t))),setTimeout((()=>{if(!this.appCheck){const t=this.A.getImmediate({optional:!0});t?i(t):Ji("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then((t=>t?(io("string"==typeof t.token),this.R=t.token,new go(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function ko(t){const e="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&"function"==typeof e.getRandomValues)e.getRandomValues(n);else for(let i=0;i<t;i++)n[i]=Math.floor(256*Math.random());return n}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bo{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=Math.floor(256/t.length)*t.length;let n="";for(;n.length<20;){const i=ko(40);for(let o=0;o<i.length;++o)n.length<20&&i[o]<e&&(n+=t.charAt(i[o]%t.length))}return n}}function wo(t,e){return t<e?-1:t>e?1:0}function vo(t,e,n){return t.length===e.length&&t.every(((t,i)=>n(t,e[i])))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class _o{constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new so(ro.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new so(ro.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<-62135596800)throw new so(ro.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new so(ro.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return _o.fromMillis(Date.now())}static fromDate(t){return _o.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),n=Math.floor(1e6*(t-1e3*e));return new _o(e,n)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?wo(this.nanoseconds,t.nanoseconds):wo(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ao{constructor(t){this.timestamp=t}static fromTimestamp(t){return new Ao(t)}static min(){return new Ao(new _o(0,0))}static max(){return new Ao(new _o(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Co{constructor(t,e,n){void 0===e?e=0:e>t.length&&no(),void 0===n?n=t.length-e:n>t.length-e&&no(),this.segments=t,this.offset=e,this.len=n}get length(){return this.len}isEqual(t){return 0===Co.comparator(this,t)}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof Co?t.forEach((t=>{e.push(t)})):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=void 0===t?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return 0===this.length}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,n=this.limit();e<n;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const n=Math.min(t.length,e.length);for(let i=0;i<n;i++){const n=t.get(i),o=e.get(i);if(n<o)return-1;if(n>o)return 1}return t.length<e.length?-1:t.length>e.length?1:0}}class yo extends Co{construct(t,e,n){return new yo(t,e,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...t){const e=[];for(const n of t){if(n.indexOf("//")>=0)throw new so(ro.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);e.push(...n.split("/").filter((t=>t.length>0)))}return new yo(e)}static emptyPath(){return new yo([])}}const Eo=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class xo extends Co{construct(t,e,n){return new xo(t,e,n)}static isValidIdentifier(t){return Eo.test(t)}canonicalString(){return this.toArray().map((t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),xo.isValidIdentifier(t)||(t="`"+t+"`"),t))).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new xo(["__name__"])}static fromServerFormat(t){const e=[];let n="",i=0;const o=()=>{if(0===n.length)throw new so(ro.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(n),n=""};let r=!1;for(;i<t.length;){const e=t[i];if("\\"===e){if(i+1===t.length)throw new so(ro.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const e=t[i+1];if("\\"!==e&&"."!==e&&"`"!==e)throw new so(ro.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);n+=e,i+=2}else"`"===e?(r=!r,i++):"."!==e||r?(n+=e,i++):(o(),i++)}if(o(),r)throw new so(ro.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new xo(e)}static emptyPath(){return new xo([])}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Io{constructor(t){this.path=t}static fromPath(t){return new Io(yo.fromString(t))}static fromName(t){return new Io(yo.fromString(t).popFirst(5))}static empty(){return new Io(yo.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return null!==t&&0===yo.comparator(this.path,t.path)}toString(){return this.path.toString()}static comparator(t,e){return yo.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new Io(new yo(t.slice()))}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class To{constructor(t,e,n,i){this.indexId=t,this.collectionGroup=e,this.fields=n,this.indexState=i}}To.UNKNOWN_ID=-1;function Do(t,e){const n=t.toTimestamp().seconds,i=t.toTimestamp().nanoseconds+1,o=Ao.fromTimestamp(1e9===i?new _o(n+1,0):new _o(n,i));return new Mo(o,Io.empty(),e)}function So(t){return new Mo(t.readTime,t.key,-1)}class Mo{constructor(t,e,n){this.readTime=t,this.documentKey=e,this.largestBatchId=n}static min(){return new Mo(Ao.min(),Io.empty(),-1)}static max(){return new Mo(Ao.max(),Io.empty(),-1)}}function No(t,e){let n=t.readTime.compareTo(e.readTime);return 0!==n?n:(n=Io.comparator(t.documentKey,e.documentKey),0!==n?n:wo(t.largestBatchId,e.largestBatchId))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oo="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Po{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((t=>t()))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Bo(t){if(t.code!==ro.FAILED_PRECONDITION||t.message!==Oo)throw t;Ji("LocalStore","Unexpectedly lost primary lease")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lo{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&no(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new Lo(((n,i)=>{this.nextCallback=e=>{this.wrapSuccess(t,e).next(n,i)},this.catchCallback=t=>{this.wrapFailure(e,t).next(n,i)}}))}toPromise(){return new Promise(((t,e)=>{this.next(t,e)}))}wrapUserFunction(t){try{const e=t();return e instanceof Lo?e:Lo.resolve(e)}catch(t){return Lo.reject(t)}}wrapSuccess(t,e){return t?this.wrapUserFunction((()=>t(e))):Lo.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction((()=>t(e))):Lo.reject(e)}static resolve(t){return new Lo(((e,n)=>{e(t)}))}static reject(t){return new Lo(((e,n)=>{n(t)}))}static waitFor(t){return new Lo(((e,n)=>{let i=0,o=0,r=!1;t.forEach((t=>{++i,t.next((()=>{++o,r&&o===i&&e()}),(t=>n(t)))})),r=!0,o===i&&e()}))}static or(t){let e=Lo.resolve(!1);for(const n of t)e=e.next((t=>t?Lo.resolve(t):n()));return e}static forEach(t,e){const n=[];return t.forEach(((t,i)=>{n.push(e.call(this,t,i))})),this.waitFor(n)}static mapArray(t,e){return new Lo(((n,i)=>{const o=t.length,r=new Array(o);let s=0;for(let a=0;a<o;a++){const c=a;e(t[c]).next((t=>{r[c]=t,++s,s===o&&n(r)}),(t=>i(t)))}}))}static doWhile(t,e){return new Lo(((n,i)=>{const o=()=>{!0===t()?e().next((()=>{o()}),i):n()};o()}))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ro(t){return"IndexedDbTransactionError"===t.name}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class jo{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=t=>this.se(t),this.oe=t=>e.writeSequenceNumber(t))}se(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.oe&&this.oe(t),t}}function zo(t){return null==t}function Fo(t){return 0===t&&1/t==-1/0}function Vo(t){return"number"==typeof t&&Number.isInteger(t)&&!Fo(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */jo._e=-1;const Uo=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],Ho=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],qo=Ho;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function $o(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Go(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function Wo(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ko{constructor(t,e){this.comparator=t,this.root=e||Yo.EMPTY}insert(t,e){return new Ko(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,Yo.BLACK,null,null))}remove(t){return new Ko(this.comparator,this.root.remove(t,this.comparator).copy(null,null,Yo.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const n=this.comparator(t,e.key);if(0===n)return e.value;n<0?e=e.left:n>0&&(e=e.right)}return null}indexOf(t){let e=0,n=this.root;for(;!n.isEmpty();){const i=this.comparator(t,n.key);if(0===i)return e+n.left.size;i<0?n=n.left:(e+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal(((e,n)=>(t(e,n),!1)))}toString(){const t=[];return this.inorderTraversal(((e,n)=>(t.push(`${e}:${n}`),!1))),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new Zo(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new Zo(this.root,t,this.comparator,!1)}getReverseIterator(){return new Zo(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new Zo(this.root,t,this.comparator,!0)}}class Zo{constructor(t,e,n,i){this.isReverse=i,this.nodeStack=[];let o=1;for(;!t.isEmpty();)if(o=e?n(t.key,e):1,e&&i&&(o*=-1),o<0)t=this.isReverse?t.left:t.right;else{if(0===o){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class Yo{constructor(t,e,n,i,o){this.key=t,this.value=e,this.color=null!=n?n:Yo.RED,this.left=null!=i?i:Yo.EMPTY,this.right=null!=o?o:Yo.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,n,i,o){return new Yo(null!=t?t:this.key,null!=e?e:this.value,null!=n?n:this.color,null!=i?i:this.left,null!=o?o:this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,n){let i=this;const o=n(t,i.key);return i=o<0?i.copy(null,null,null,i.left.insert(t,e,n),null):0===o?i.copy(null,e,null,null,null):i.copy(null,null,null,null,i.right.insert(t,e,n)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Yo.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let n,i=this;if(e(t,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(t,e),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),0===e(t,i.key)){if(i.right.isEmpty())return Yo.EMPTY;n=i.right.min(),i=i.copy(n.key,n.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(t,e))}return i.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,Yo.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,Yo.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw no();if(this.right.isRed())throw no();const t=this.left.check();if(t!==this.right.check())throw no();return t+(this.isRed()?0:1)}}Yo.EMPTY=null,Yo.RED=!0,Yo.BLACK=!1,Yo.EMPTY=new class{constructor(){this.size=0}get key(){throw no()}get value(){throw no()}get color(){throw no()}get left(){throw no()}get right(){throw no()}copy(t,e,n,i,o){return this}insert(t,e,n){return new Yo(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Qo{constructor(t){this.comparator=t,this.data=new Ko(this.comparator)}has(t){return null!==this.data.get(t)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal(((e,n)=>(t(e),!1)))}forEachInRange(t,e){const n=this.data.getIteratorFrom(t[0]);for(;n.hasNext();){const i=n.getNext();if(this.comparator(i.key,t[1])>=0)return;e(i.key)}}forEachWhile(t,e){let n;for(n=void 0!==e?this.data.getIteratorFrom(e):this.data.getIterator();n.hasNext();)if(!t(n.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new Jo(this.data.getIterator())}getIteratorFrom(t){return new Jo(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach((t=>{e=e.add(t)})),e}isEqual(t){if(!(t instanceof Qo))return!1;if(this.size!==t.size)return!1;const e=this.data.getIterator(),n=t.data.getIterator();for(;e.hasNext();){const t=e.getNext().key,i=n.getNext().key;if(0!==this.comparator(t,i))return!1}return!0}toArray(){const t=[];return this.forEach((e=>{t.push(e)})),t}toString(){const t=[];return this.forEach((e=>t.push(e))),"SortedSet("+t.toString()+")"}copy(t){const e=new Qo(this.comparator);return e.data=t,e}}class Jo{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Xo{constructor(t){this.fields=t,t.sort(xo.comparator)}static empty(){return new Xo([])}unionWith(t){let e=new Qo(xo.comparator);for(const n of this.fields)e=e.add(n);for(const n of t)e=e.add(n);return new Xo(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return vo(this.fields,t.fields,((t,e)=>t.isEqual(e)))}}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tr extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class er{constructor(t){this.binaryString=t}static fromBase64String(t){const e=function(t){try{return atob(t)}catch(t){throw"undefined"!=typeof DOMException&&t instanceof DOMException?new tr("Invalid base64 string: "+t):t}}(t);return new er(e)}static fromUint8Array(t){const e=function(t){let e="";for(let n=0;n<t.length;++n)e+=String.fromCharCode(t[n]);return e}(t);return new er(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const e=new Uint8Array(t.length);for(let n=0;n<t.length;n++)e[n]=t.charCodeAt(n);return e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return wo(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}er.EMPTY_BYTE_STRING=new er("");const nr=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function ir(t){if(io(!!t),"string"==typeof t){let e=0;const n=nr.exec(t);if(io(!!n),n[1]){let t=n[1];t=(t+"000000000").substr(0,9),e=Number(t)}const i=new Date(t);return{seconds:Math.floor(i.getTime()/1e3),nanos:e}}return{seconds:or(t.seconds),nanos:or(t.nanos)}}function or(t){return"number"==typeof t?t:"string"==typeof t?Number(t):0}function rr(t){return"string"==typeof t?er.fromBase64String(t):er.fromUint8Array(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sr(t){var e,n;return"server_timestamp"===(null===(n=((null===(e=null==t?void 0:t.mapValue)||void 0===e?void 0:e.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function ar(t){const e=t.mapValue.fields.__previous_value__;return sr(e)?ar(e):e}function cr(t){const e=ir(t.mapValue.fields.__local_write_time__.timestampValue);return new _o(e.seconds,e.nanos)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lr{constructor(t,e,n,i,o,r,s,a,c){this.databaseId=t,this.appId=e,this.persistenceKey=n,this.host=i,this.ssl=o,this.forceLongPolling=r,this.autoDetectLongPolling=s,this.longPollingOptions=a,this.useFetchStreams=c}}class ur{constructor(t,e){this.projectId=t,this.database=e||"(default)"}static empty(){return new ur("","")}get isDefaultDatabase(){return"(default)"===this.database}isEqual(t){return t instanceof ur&&t.projectId===this.projectId&&t.database===this.database}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dr={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function hr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?sr(t)?4:xr(t)?9007199254740991:10:no()}function pr(t,e){if(t===e)return!0;const n=hr(t);if(n!==hr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return cr(t).isEqual(cr(e));case 3:return function(t,e){if("string"==typeof t.timestampValue&&"string"==typeof e.timestampValue&&t.timestampValue.length===e.timestampValue.length)return t.timestampValue===e.timestampValue;const n=ir(t.timestampValue),i=ir(e.timestampValue);return n.seconds===i.seconds&&n.nanos===i.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(t,e){return rr(t.bytesValue).isEqual(rr(e.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(t,e){return or(t.geoPointValue.latitude)===or(e.geoPointValue.latitude)&&or(t.geoPointValue.longitude)===or(e.geoPointValue.longitude)}(t,e);case 2:return function(t,e){if("integerValue"in t&&"integerValue"in e)return or(t.integerValue)===or(e.integerValue);if("doubleValue"in t&&"doubleValue"in e){const n=or(t.doubleValue),i=or(e.doubleValue);return n===i?Fo(n)===Fo(i):isNaN(n)&&isNaN(i)}return!1}(t,e);case 9:return vo(t.arrayValue.values||[],e.arrayValue.values||[],pr);case 10:return function(t,e){const n=t.mapValue.fields||{},i=e.mapValue.fields||{};if($o(n)!==$o(i))return!1;for(const o in n)if(n.hasOwnProperty(o)&&(void 0===i[o]||!pr(n[o],i[o])))return!1;return!0}(t,e);default:return no()}}function fr(t,e){return void 0!==(t.values||[]).find((t=>pr(t,e)))}function gr(t,e){if(t===e)return 0;const n=hr(t),i=hr(e);if(n!==i)return wo(n,i);switch(n){case 0:case 9007199254740991:return 0;case 1:return wo(t.booleanValue,e.booleanValue);case 2:return function(t,e){const n=or(t.integerValue||t.doubleValue),i=or(e.integerValue||e.doubleValue);return n<i?-1:n>i?1:n===i?0:isNaN(n)?isNaN(i)?0:-1:1}(t,e);case 3:return mr(t.timestampValue,e.timestampValue);case 4:return mr(cr(t),cr(e));case 5:return wo(t.stringValue,e.stringValue);case 6:return function(t,e){const n=rr(t),i=rr(e);return n.compareTo(i)}(t.bytesValue,e.bytesValue);case 7:return function(t,e){const n=t.split("/"),i=e.split("/");for(let o=0;o<n.length&&o<i.length;o++){const t=wo(n[o],i[o]);if(0!==t)return t}return wo(n.length,i.length)}(t.referenceValue,e.referenceValue);case 8:return function(t,e){const n=wo(or(t.latitude),or(e.latitude));return 0!==n?n:wo(or(t.longitude),or(e.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(t,e){const n=t.values||[],i=e.values||[];for(let o=0;o<n.length&&o<i.length;++o){const t=gr(n[o],i[o]);if(t)return t}return wo(n.length,i.length)}(t.arrayValue,e.arrayValue);case 10:return function(t,e){if(t===dr.mapValue&&e===dr.mapValue)return 0;if(t===dr.mapValue)return 1;if(e===dr.mapValue)return-1;const n=t.fields||{},i=Object.keys(n),o=e.fields||{},r=Object.keys(o);i.sort(),r.sort();for(let s=0;s<i.length&&s<r.length;++s){const t=wo(i[s],r[s]);if(0!==t)return t;const e=gr(n[i[s]],o[r[s]]);if(0!==e)return e}return wo(i.length,r.length)}(t.mapValue,e.mapValue);default:throw no()}}function mr(t,e){if("string"==typeof t&&"string"==typeof e&&t.length===e.length)return wo(t,e);const n=ir(t),i=ir(e),o=wo(n.seconds,i.seconds);return 0!==o?o:wo(n.nanos,i.nanos)}function kr(t){return br(t)}function br(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(t){const e=ir(t);return`time(${e.seconds},${e.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(t){return rr(t).toBase64()}(t.bytesValue):"referenceValue"in t?function(t){return Io.fromName(t).toString()}(t.referenceValue):"geoPointValue"in t?function(t){return`geo(${t.latitude},${t.longitude})`}(t.geoPointValue):"arrayValue"in t?function(t){let e="[",n=!0;for(const i of t.values||[])n?n=!1:e+=",",e+=br(i);return e+"]"}(t.arrayValue):"mapValue"in t?function(t){const e=Object.keys(t.fields||{}).sort();let n="{",i=!0;for(const o of e)i?i=!1:n+=",",n+=`${o}:${br(t.fields[o])}`;return n+"}"}(t.mapValue):no()}function wr(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function vr(t){return!!t&&"integerValue"in t}function _r(t){return!!t&&"arrayValue"in t}function Ar(t){return!!t&&"nullValue"in t}function Cr(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function yr(t){return!!t&&"mapValue"in t}function Er(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&"object"==typeof t.timestampValue)return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Go(t.mapValue.fields,((t,n)=>e.mapValue.fields[t]=Er(n))),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Er(t.arrayValue.values[n]);return e}return Object.assign({},t)}function xr(t){return"__max__"===(((t.mapValue||{}).fields||{}).__type__||{}).stringValue}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ir{constructor(t){this.value=t}static empty(){return new Ir({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let n=0;n<t.length-1;++n)if(e=(e.mapValue.fields||{})[t.get(n)],!yr(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=Er(e)}setAll(t){let e=xo.emptyPath(),n={},i=[];t.forEach(((t,o)=>{if(!e.isImmediateParentOf(o)){const t=this.getFieldsMap(e);this.applyChanges(t,n,i),n={},i=[],e=o.popLast()}t?n[o.lastSegment()]=Er(t):i.push(o.lastSegment())}));const o=this.getFieldsMap(e);this.applyChanges(o,n,i)}delete(t){const e=this.field(t.popLast());yr(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return pr(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let n=0;n<t.length;++n){let i=e.mapValue.fields[t.get(n)];yr(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},e.mapValue.fields[t.get(n)]=i),e=i}return e.mapValue.fields}applyChanges(t,e,n){Go(e,((e,n)=>t[e]=n));for(const i of n)delete t[i]}clone(){return new Ir(Er(this.value))}}function Tr(t){const e=[];return Go(t.fields,((t,n)=>{const i=new xo([t]);if(yr(n)){const t=Tr(n.mapValue).fields;if(0===t.length)e.push(i);else for(const n of t)e.push(i.child(n))}else e.push(i)})),new Xo(e)
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class Dr{constructor(t,e,n,i,o,r,s){this.key=t,this.documentType=e,this.version=n,this.readTime=i,this.createTime=o,this.data=r,this.documentState=s}static newInvalidDocument(t){return new Dr(t,0,Ao.min(),Ao.min(),Ao.min(),Ir.empty(),0)}static newFoundDocument(t,e,n,i){return new Dr(t,1,e,Ao.min(),n,i,0)}static newNoDocument(t,e){return new Dr(t,2,e,Ao.min(),Ao.min(),Ir.empty(),0)}static newUnknownDocument(t,e){return new Dr(t,3,e,Ao.min(),Ao.min(),Ir.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual(Ao.min())||2!==this.documentType&&0!==this.documentType||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=Ir.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=Ir.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Ao.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(t){return t instanceof Dr&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new Dr(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sr{constructor(t,e){this.position=t,this.inclusive=e}}function Mr(t,e,n){let i=0;for(let o=0;o<t.position.length;o++){const r=e[o],s=t.position[o];if(i=r.field.isKeyField()?Io.comparator(Io.fromName(s.referenceValue),n.key):gr(s,n.data.field(r.field)),"desc"===r.dir&&(i*=-1),0!==i)break}return i}function Nr(t,e){if(null===t)return null===e;if(null===e)return!1;if(t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!pr(t.position[n],e.position[n]))return!1;return!0}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Or{constructor(t,e="asc"){this.field=t,this.dir=e}}function Pr(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Br{}class Lr extends Br{constructor(t,e,n){super(),this.field=t,this.op=e,this.value=n}static create(t,e,n){return t.isKeyField()?"in"===e||"not-in"===e?this.createKeyFieldInFilter(t,e,n):new qr(t,e,n):"array-contains"===e?new Kr(t,n):"in"===e?new Zr(t,n):"not-in"===e?new Yr(t,n):"array-contains-any"===e?new Qr(t,n):new Lr(t,e,n)}static createKeyFieldInFilter(t,e,n){return"in"===e?new $r(t,n):new Gr(t,n)}matches(t){const e=t.data.field(this.field);return"!="===this.op?null!==e&&this.matchesComparison(gr(e,this.value)):null!==e&&hr(this.value)===hr(e)&&this.matchesComparison(gr(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return 0===t;case"!=":return 0!==t;case">":return t>0;case">=":return t>=0;default:return no()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Rr extends Br{constructor(t,e){super(),this.filters=t,this.op=e,this.ue=null}static create(t,e){return new Rr(t,e)}matches(t){return jr(this)?void 0===this.filters.find((e=>!e.matches(t))):void 0!==this.filters.find((e=>e.matches(t)))}getFlattenedFilters(){return null!==this.ue||(this.ue=this.filters.reduce(((t,e)=>t.concat(e.getFlattenedFilters())),[])),this.ue}getFilters(){return Object.assign([],this.filters)}}function jr(t){return"and"===t.op}function zr(t){return Fr(t)&&jr(t)}function Fr(t){for(const e of t.filters)if(e instanceof Rr)return!1;return!0}function Vr(t){if(t instanceof Lr)return t.field.canonicalString()+t.op.toString()+kr(t.value);if(zr(t))return t.filters.map((t=>Vr(t))).join(",");{const e=t.filters.map((t=>Vr(t))).join(",");return`${t.op}(${e})`}}function Ur(t,e){return t instanceof Lr?function(t,e){return e instanceof Lr&&t.op===e.op&&t.field.isEqual(e.field)&&pr(t.value,e.value)}(t,e):t instanceof Rr?function(t,e){return e instanceof Rr&&t.op===e.op&&t.filters.length===e.filters.length&&t.filters.reduce(((t,n,i)=>t&&Ur(n,e.filters[i])),!0)}(t,e):void no()}function Hr(t){return t instanceof Lr?function(t){return`${t.field.canonicalString()} ${t.op} ${kr(t.value)}`}(t):t instanceof Rr?function(t){return t.op.toString()+" {"+t.getFilters().map(Hr).join(" ,")+"}"}(t):"Filter"}class qr extends Lr{constructor(t,e,n){super(t,e,n),this.key=Io.fromName(n.referenceValue)}matches(t){const e=Io.comparator(t.key,this.key);return this.matchesComparison(e)}}class $r extends Lr{constructor(t,e){super(t,"in",e),this.keys=Wr("in",e)}matches(t){return this.keys.some((e=>e.isEqual(t.key)))}}class Gr extends Lr{constructor(t,e){super(t,"not-in",e),this.keys=Wr("not-in",e)}matches(t){return!this.keys.some((e=>e.isEqual(t.key)))}}function Wr(t,e){var n;return((null===(n=e.arrayValue)||void 0===n?void 0:n.values)||[]).map((t=>Io.fromName(t.referenceValue)))}class Kr extends Lr{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return _r(e)&&fr(e.arrayValue,this.value)}}class Zr extends Lr{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return null!==e&&fr(this.value.arrayValue,e)}}class Yr extends Lr{constructor(t,e){super(t,"not-in",e)}matches(t){if(fr(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return null!==e&&!fr(this.value.arrayValue,e)}}class Qr extends Lr{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!_r(e)||!e.arrayValue.values)&&e.arrayValue.values.some((t=>fr(this.value.arrayValue,t)))}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jr{constructor(t,e=null,n=[],i=[],o=null,r=null,s=null){this.path=t,this.collectionGroup=e,this.orderBy=n,this.filters=i,this.limit=o,this.startAt=r,this.endAt=s,this.ce=null}}function Xr(t,e=null,n=[],i=[],o=null,r=null,s=null){return new Jr(t,e,n,i,o,r,s)}function ts(t){const e=oo(t);if(null===e.ce){let t=e.path.canonicalString();null!==e.collectionGroup&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((t=>Vr(t))).join(","),t+="|ob:",t+=e.orderBy.map((t=>function(t){return t.field.canonicalString()+t.dir}(t))).join(","),zo(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((t=>kr(t))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((t=>kr(t))).join(",")),e.ce=t}return e.ce}function es(t,e){if(t.limit!==e.limit)return!1;if(t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!Pr(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!Ur(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Nr(t.startAt,e.startAt)&&Nr(t.endAt,e.endAt)}function ns(t){return Io.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class is{constructor(t,e=null,n=[],i=[],o=null,r="F",s=null,a=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=n,this.filters=i,this.limit=o,this.limitType=r,this.startAt=s,this.endAt=a,this.le=null,this.he=null,this.Pe=null,this.startAt,this.endAt}}function os(t,e,n,i,o,r,s,a){return new is(t,e,n,i,o,r,s,a)}function rs(t){return new is(t)}function ss(t){return 0===t.filters.length&&null===t.limit&&null==t.startAt&&null==t.endAt&&(0===t.explicitOrderBy.length||1===t.explicitOrderBy.length&&t.explicitOrderBy[0].field.isKeyField())}function as(t){return null!==t.collectionGroup}function cs(t){const e=oo(t);if(null===e.le){e.le=[];const t=new Set;for(const o of e.explicitOrderBy)e.le.push(o),t.add(o.field.canonicalString());const n=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc",i=function(t){let e=new Qo(xo.comparator);return t.filters.forEach((t=>{t.getFlattenedFilters().forEach((t=>{t.isInequality()&&(e=e.add(t.field))}))})),e}(e);i.forEach((i=>{t.has(i.canonicalString())||i.isKeyField()||e.le.push(new Or(i,n))})),t.has(xo.keyField().canonicalString())||e.le.push(new Or(xo.keyField(),n))}return e.le}function ls(t){const e=oo(t);return e.he||(e.he=us(e,cs(t))),e.he}function us(t,e){if("F"===t.limitType)return Xr(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map((t=>{const e="desc"===t.dir?"asc":"desc";return new Or(t.field,e)}));const n=t.endAt?new Sr(t.endAt.position,t.endAt.inclusive):null,i=t.startAt?new Sr(t.startAt.position,t.startAt.inclusive):null;return Xr(t.path,t.collectionGroup,e,t.filters,t.limit,n,i)}}function ds(t,e){const n=t.filters.concat([e]);return new is(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function hs(t,e,n){return new is(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function ps(t,e){return es(ls(t),ls(e))&&t.limitType===e.limitType}function fs(t){return`${ts(ls(t))}|lt:${t.limitType}`}function gs(t){return`Query(target=${function(t){let e=t.path.canonicalString();return null!==t.collectionGroup&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map((t=>Hr(t))).join(", ")}]`),zo(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map((t=>function(t){return`${t.field.canonicalString()} (${t.dir})`}(t))).join(", ")}]`),t.startAt&&(e+=", startAt: ",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map((t=>kr(t))).join(",")),t.endAt&&(e+=", endAt: ",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map((t=>kr(t))).join(",")),`Target(${e})`}(ls(t))}; limitType=${t.limitType})`}function ms(t,e){return e.isFoundDocument()&&function(t,e){const n=e.key.path;return null!==t.collectionGroup?e.key.hasCollectionId(t.collectionGroup)&&t.path.isPrefixOf(n):Io.isDocumentKey(t.path)?t.path.isEqual(n):t.path.isImmediateParentOf(n)}(t,e)&&function(t,e){for(const n of cs(t))if(!n.field.isKeyField()&&null===e.data.field(n.field))return!1;return!0}(t,e)&&function(t,e){for(const n of t.filters)if(!n.matches(e))return!1;return!0}(t,e)&&function(t,e){return!(t.startAt&&!function(t,e,n){const i=Mr(t,e,n);return t.inclusive?i<=0:i<0}(t.startAt,cs(t),e))&&!(t.endAt&&!function(t,e,n){const i=Mr(t,e,n);return t.inclusive?i>=0:i>0}(t.endAt,cs(t),e))}(t,e)}function ks(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function bs(t){return(e,n)=>{let i=!1;for(const o of cs(t)){const t=ws(o,e,n);if(0!==t)return t;i=i||o.field.isKeyField()}return 0}}function ws(t,e,n){const i=t.field.isKeyField()?Io.comparator(e.key,n.key):function(t,e,n){const i=e.data.field(t),o=n.data.field(t);return null!==i&&null!==o?gr(i,o):no()}(t.field,e,n);switch(t.dir){case"asc":return i;case"desc":return-1*i;default:return no()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vs{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),n=this.inner[e];if(void 0!==n)for(const[i,o]of n)if(this.equalsFn(i,t))return o}has(t){return void 0!==this.get(t)}set(t,e){const n=this.mapKeyFn(t),i=this.inner[n];if(void 0===i)return this.inner[n]=[[t,e]],void this.innerSize++;for(let o=0;o<i.length;o++)if(this.equalsFn(i[o][0],t))return void(i[o]=[t,e]);i.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),n=this.inner[e];if(void 0===n)return!1;for(let i=0;i<n.length;i++)if(this.equalsFn(n[i][0],t))return 1===n.length?delete this.inner[e]:n.splice(i,1),this.innerSize--,!0;return!1}forEach(t){Go(this.inner,((e,n)=>{for(const[i,o]of n)t(i,o)}))}isEmpty(){return Wo(this.inner)}size(){return this.innerSize}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _s=new Ko(Io.comparator);function As(){return _s}const Cs=new Ko(Io.comparator);function ys(...t){let e=Cs;for(const n of t)e=e.insert(n.key,n);return e}function Es(t){let e=Cs;return t.forEach(((t,n)=>e=e.insert(t,n.overlayedDocument))),e}function xs(){return Ts()}function Is(){return Ts()}function Ts(){return new vs((t=>t.toString()),((t,e)=>t.isEqual(e)))}const Ds=new Ko(Io.comparator),Ss=new Qo(Io.comparator);function Ms(...t){let e=Ss;for(const n of t)e=e.add(n);return e}const Ns=new Qo(wo);function Os(){return Ns}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ps(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Fo(e)?"-0":e}}function Bs(t){return{integerValue:""+t}}function Ls(t,e){return Vo(e)?Bs(e):Ps(t,e)}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rs{constructor(){this._=void 0}}function js(t,e,n){return t instanceof Vs?function(t,e){const n={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:t.seconds,nanos:t.nanoseconds}}}};return e&&sr(e)&&(e=ar(e)),e&&(n.fields.__previous_value__=e),{mapValue:n}}(n,e):t instanceof Us?Hs(t,e):t instanceof qs?$s(t,e):function(t,e){const n=Fs(t,e),i=Ws(n)+Ws(t.Ie);return vr(n)&&vr(t.Ie)?Bs(i):Ps(t.serializer,i)}(t,e)}function zs(t,e,n){return t instanceof Us?Hs(t,e):t instanceof qs?$s(t,e):n}function Fs(t,e){return t instanceof Gs?function(t){return vr(t)||function(t){return!!t&&"doubleValue"in t}(t)}(e)?e:{integerValue:0}:null}class Vs extends Rs{}class Us extends Rs{constructor(t){super(),this.elements=t}}function Hs(t,e){const n=Ks(e);for(const i of t.elements)n.some((t=>pr(t,i)))||n.push(i);return{arrayValue:{values:n}}}class qs extends Rs{constructor(t){super(),this.elements=t}}function $s(t,e){let n=Ks(e);for(const i of t.elements)n=n.filter((t=>!pr(t,i)));return{arrayValue:{values:n}}}class Gs extends Rs{constructor(t,e){super(),this.serializer=t,this.Ie=e}}function Ws(t){return or(t.integerValue||t.doubleValue)}function Ks(t){return _r(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zs(t,e){return t.field.isEqual(e.field)&&function(t,e){return t instanceof Us&&e instanceof Us||t instanceof qs&&e instanceof qs?vo(t.elements,e.elements,pr):t instanceof Gs&&e instanceof Gs?pr(t.Ie,e.Ie):t instanceof Vs&&e instanceof Vs}(t.transform,e.transform)}class Ys{constructor(t,e){this.version=t,this.transformResults=e}}class Qs{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new Qs}static exists(t){return new Qs(void 0,t)}static updateTime(t){return new Qs(t)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function Js(t,e){return void 0!==t.updateTime?e.isFoundDocument()&&e.version.isEqual(t.updateTime):void 0===t.exists||t.exists===e.isFoundDocument()}class Xs{}function ta(t,e){if(!t.hasLocalMutations||e&&0===e.fields.length)return null;if(null===e)return t.isNoDocument()?new ua(t.key,Qs.none()):new ra(t.key,t.data,Qs.none());{const n=t.data,i=Ir.empty();let o=new Qo(xo.comparator);for(let t of e.fields)if(!o.has(t)){let e=n.field(t);null===e&&t.length>1&&(t=t.popLast(),e=n.field(t)),null===e?i.delete(t):i.set(t,e),o=o.add(t)}return new sa(t.key,i,new Xo(o.toArray()),Qs.none())}}function ea(t,e,n){t instanceof ra?function(t,e,n){const i=t.value.clone(),o=ca(t.fieldTransforms,e,n.transformResults);i.setAll(o),e.convertToFoundDocument(n.version,i).setHasCommittedMutations()}(t,e,n):t instanceof sa?function(t,e,n){if(!Js(t.precondition,e))return void e.convertToUnknownDocument(n.version);const i=ca(t.fieldTransforms,e,n.transformResults),o=e.data;o.setAll(aa(t)),o.setAll(i),e.convertToFoundDocument(n.version,o).setHasCommittedMutations()}(t,e,n):function(t,e,n){e.convertToNoDocument(n.version).setHasCommittedMutations()}(0,e,n)}function na(t,e,n,i){return t instanceof ra?function(t,e,n,i){if(!Js(t.precondition,e))return n;const o=t.value.clone(),r=la(t.fieldTransforms,i,e);return o.setAll(r),e.convertToFoundDocument(e.version,o).setHasLocalMutations(),null}(t,e,n,i):t instanceof sa?function(t,e,n,i){if(!Js(t.precondition,e))return n;const o=la(t.fieldTransforms,i,e),r=e.data;return r.setAll(aa(t)),r.setAll(o),e.convertToFoundDocument(e.version,r).setHasLocalMutations(),null===n?null:n.unionWith(t.fieldMask.fields).unionWith(t.fieldTransforms.map((t=>t.field)))}(t,e,n,i):function(t,e,n){return Js(t.precondition,e)?(e.convertToNoDocument(e.version).setHasLocalMutations(),null):n}(t,e,n)}function ia(t,e){let n=null;for(const i of t.fieldTransforms){const t=e.data.field(i.field),o=Fs(i.transform,t||null);null!=o&&(null===n&&(n=Ir.empty()),n.set(i.field,o))}return n||null}function oa(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(t,e){return void 0===t&&void 0===e||!(!t||!e)&&vo(t,e,((t,e)=>Zs(t,e)))}(t.fieldTransforms,e.fieldTransforms)&&(0===t.type?t.value.isEqual(e.value):1!==t.type||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class ra extends Xs{constructor(t,e,n,i=[]){super(),this.key=t,this.value=e,this.precondition=n,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class sa extends Xs{constructor(t,e,n,i,o=[]){super(),this.key=t,this.data=e,this.fieldMask=n,this.precondition=i,this.fieldTransforms=o,this.type=1}getFieldMask(){return this.fieldMask}}function aa(t){const e=new Map;return t.fieldMask.fields.forEach((n=>{if(!n.isEmpty()){const i=t.data.field(n);e.set(n,i)}})),e}function ca(t,e,n){const i=new Map;io(t.length===n.length);for(let o=0;o<n.length;o++){const r=t[o],s=r.transform,a=e.data.field(r.field);i.set(r.field,zs(s,a,n[o]))}return i}function la(t,e,n){const i=new Map;for(const o of t){const t=o.transform,r=n.data.field(o.field);i.set(o.field,js(t,r,e))}return i}class ua extends Xs{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class da extends Xs{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ha{constructor(t,e,n,i){this.batchId=t,this.localWriteTime=e,this.baseMutations=n,this.mutations=i}applyToRemoteDocument(t,e){const n=e.mutationResults;for(let i=0;i<this.mutations.length;i++){const e=this.mutations[i];e.key.isEqual(t.key)&&ea(e,t,n[i])}}applyToLocalView(t,e){for(const n of this.baseMutations)n.key.isEqual(t.key)&&(e=na(n,t,e,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(t.key)&&(e=na(n,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const n=Is();return this.mutations.forEach((i=>{const o=t.get(i.key),r=o.overlayedDocument;let s=this.applyToLocalView(r,o.mutatedFields);s=e.has(i.key)?null:s;const a=ta(r,s);null!==a&&n.set(i.key,a),r.isValidDocument()||r.convertToNoDocument(Ao.min())})),n}keys(){return this.mutations.reduce(((t,e)=>t.add(e.key)),Ms())}isEqual(t){return this.batchId===t.batchId&&vo(this.mutations,t.mutations,((t,e)=>oa(t,e)))&&vo(this.baseMutations,t.baseMutations,((t,e)=>oa(t,e)))}}class pa{constructor(t,e,n,i){this.batch=t,this.commitVersion=e,this.mutationResults=n,this.docVersions=i}static from(t,e,n){io(t.mutations.length===n.length);let i=function(){return Ds}();const o=t.mutations;for(let r=0;r<o.length;r++)i=i.insert(o[r].key,n[r].version);return new pa(t,e,n,i)}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fa{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return null!==t&&this.mutation===t.mutation}toString(){return`Overlay{\n      largestBatchId: ${this.largestBatchId},\n      mutation: ${this.mutation.toString()}\n    }`}}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ga{constructor(t,e){this.count=t,this.unchangedNames=e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ma,ka;function ba(t){switch(t){default:return no();case ro.CANCELLED:case ro.UNKNOWN:case ro.DEADLINE_EXCEEDED:case ro.RESOURCE_EXHAUSTED:case ro.INTERNAL:case ro.UNAVAILABLE:case ro.UNAUTHENTICATED:return!1;case ro.INVALID_ARGUMENT:case ro.NOT_FOUND:case ro.ALREADY_EXISTS:case ro.PERMISSION_DENIED:case ro.FAILED_PRECONDITION:case ro.ABORTED:case ro.OUT_OF_RANGE:case ro.UNIMPLEMENTED:case ro.DATA_LOSS:return!0}}function wa(t){if(void 0===t)return Xi("GRPC error has no .code"),ro.UNKNOWN;switch(t){case ma.OK:return ro.OK;case ma.CANCELLED:return ro.CANCELLED;case ma.UNKNOWN:return ro.UNKNOWN;case ma.DEADLINE_EXCEEDED:return ro.DEADLINE_EXCEEDED;case ma.RESOURCE_EXHAUSTED:return ro.RESOURCE_EXHAUSTED;case ma.INTERNAL:return ro.INTERNAL;case ma.UNAVAILABLE:return ro.UNAVAILABLE;case ma.UNAUTHENTICATED:return ro.UNAUTHENTICATED;case ma.INVALID_ARGUMENT:return ro.INVALID_ARGUMENT;case ma.NOT_FOUND:return ro.NOT_FOUND;case ma.ALREADY_EXISTS:return ro.ALREADY_EXISTS;case ma.PERMISSION_DENIED:return ro.PERMISSION_DENIED;case ma.FAILED_PRECONDITION:return ro.FAILED_PRECONDITION;case ma.ABORTED:return ro.ABORTED;case ma.OUT_OF_RANGE:return ro.OUT_OF_RANGE;case ma.UNIMPLEMENTED:return ro.UNIMPLEMENTED;case ma.DATA_LOSS:return ro.DATA_LOSS;default:return no()}}(ka=ma||(ma={}))[ka.OK=0]="OK",ka[ka.CANCELLED=1]="CANCELLED",ka[ka.UNKNOWN=2]="UNKNOWN",ka[ka.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ka[ka.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ka[ka.NOT_FOUND=5]="NOT_FOUND",ka[ka.ALREADY_EXISTS=6]="ALREADY_EXISTS",ka[ka.PERMISSION_DENIED=7]="PERMISSION_DENIED",ka[ka.UNAUTHENTICATED=16]="UNAUTHENTICATED",ka[ka.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ka[ka.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ka[ka.ABORTED=10]="ABORTED",ka[ka.OUT_OF_RANGE=11]="OUT_OF_RANGE",ka[ka.UNIMPLEMENTED=12]="UNIMPLEMENTED",ka[ka.INTERNAL=13]="INTERNAL",ka[ka.UNAVAILABLE=14]="UNAVAILABLE",ka[ka.DATA_LOSS=15]="DATA_LOSS";
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let va=null;
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _a(){return new TextEncoder}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Aa=new Gi([4294967295,4294967295],0);function Ca(t){const e=_a().encode(t),n=new $i;return n.update(e),new Uint8Array(n.digest())}function ya(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),i=e.getUint32(4,!0),o=e.getUint32(8,!0),r=e.getUint32(12,!0);return[new Gi([n,i],0),new Gi([o,r],0)]}class Ea{constructor(t,e,n){if(this.bitmap=t,this.padding=e,this.hashCount=n,e<0||e>=8)throw new xa(`Invalid padding: ${e}`);if(n<0)throw new xa(`Invalid hash count: ${n}`);if(t.length>0&&0===this.hashCount)throw new xa(`Invalid hash count: ${n}`);if(0===t.length&&0!==e)throw new xa(`Invalid padding when bitmap length is 0: ${e}`);this.Te=8*t.length-e,this.Ee=Gi.fromNumber(this.Te)}de(t,e,n){let i=t.add(e.multiply(Gi.fromNumber(n)));return 1===i.compare(Aa)&&(i=new Gi([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Ee).toNumber()}Ae(t){return 0!=(this.bitmap[Math.floor(t/8)]&1<<t%8)}mightContain(t){if(0===this.Te)return!1;const e=Ca(t),[n,i]=ya(e);for(let o=0;o<this.hashCount;o++){const t=this.de(n,i,o);if(!this.Ae(t))return!1}return!0}static create(t,e,n){const i=t%8==0?0:8-t%8,o=new Uint8Array(Math.ceil(t/8)),r=new Ea(o,i,e);return n.forEach((t=>r.insert(t))),r}insert(t){if(0===this.Te)return;const e=Ca(t),[n,i]=ya(e);for(let o=0;o<this.hashCount;o++){const t=this.de(n,i,o);this.Re(t)}}Re(t){const e=Math.floor(t/8),n=t%8;this.bitmap[e]|=1<<n}}class xa extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ia{constructor(t,e,n,i,o){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=n,this.documentUpdates=i,this.resolvedLimboDocuments=o}static createSynthesizedRemoteEventForCurrentChange(t,e,n){const i=new Map;return i.set(t,Ta.createSynthesizedTargetChangeForCurrentChange(t,e,n)),new Ia(Ao.min(),i,new Ko(wo),As(),Ms())}}class Ta{constructor(t,e,n,i,o){this.resumeToken=t,this.current=e,this.addedDocuments=n,this.modifiedDocuments=i,this.removedDocuments=o}static createSynthesizedTargetChangeForCurrentChange(t,e,n){return new Ta(n,e,Ms(),Ms(),Ms())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Da{constructor(t,e,n,i){this.Ve=t,this.removedTargetIds=e,this.key=n,this.me=i}}class Sa{constructor(t,e){this.targetId=t,this.fe=e}}class Ma{constructor(t,e,n=er.EMPTY_BYTE_STRING,i=null){this.state=t,this.targetIds=e,this.resumeToken=n,this.cause=i}}class Na{constructor(){this.ge=0,this.pe=Ba(),this.ye=er.EMPTY_BYTE_STRING,this.we=!1,this.Se=!0}get current(){return this.we}get resumeToken(){return this.ye}get be(){return 0!==this.ge}get De(){return this.Se}Ce(t){t.approximateByteSize()>0&&(this.Se=!0,this.ye=t)}ve(){let t=Ms(),e=Ms(),n=Ms();return this.pe.forEach(((i,o)=>{switch(o){case 0:t=t.add(i);break;case 2:e=e.add(i);break;case 1:n=n.add(i);break;default:no()}})),new Ta(this.ye,this.we,t,e,n)}Fe(){this.Se=!1,this.pe=Ba()}Me(t,e){this.Se=!0,this.pe=this.pe.insert(t,e)}xe(t){this.Se=!0,this.pe=this.pe.remove(t)}Oe(){this.ge+=1}Ne(){this.ge-=1,io(this.ge>=0)}Be(){this.Se=!0,this.we=!0}}class Oa{constructor(t){this.Le=t,this.ke=new Map,this.qe=As(),this.Qe=Pa(),this.Ke=new Ko(wo)}$e(t){for(const e of t.Ve)t.me&&t.me.isFoundDocument()?this.Ue(e,t.me):this.We(e,t.key,t.me);for(const e of t.removedTargetIds)this.We(e,t.key,t.me)}Ge(t){this.forEachTarget(t,(e=>{const n=this.ze(e);switch(t.state){case 0:this.je(e)&&n.Ce(t.resumeToken);break;case 1:n.Ne(),n.be||n.Fe(),n.Ce(t.resumeToken);break;case 2:n.Ne(),n.be||this.removeTarget(e);break;case 3:this.je(e)&&(n.Be(),n.Ce(t.resumeToken));break;case 4:this.je(e)&&(this.He(e),n.Ce(t.resumeToken));break;default:no()}}))}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.ke.forEach(((t,n)=>{this.je(n)&&e(n)}))}Je(t){const e=t.targetId,n=t.fe.count,i=this.Ye(e);if(i){const o=i.target;if(ns(o))if(0===n){const t=new Io(o.path);this.We(e,t,Dr.newNoDocument(t,Ao.min()))}else io(1===n);else{const i=this.Ze(e);if(i!==n){const n=this.Xe(t),o=n?this.et(n,t,i):1;if(0!==o){this.He(e);const t=2===o?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(e,t)}null==va||va.tt(function(t,e,n,i,o){var r,s,a,c,l,u;const d={localCacheCount:t,existenceFilterCount:e.count,databaseId:n.database,projectId:n.projectId},h=e.unchangedNames;return h&&(d.bloomFilter={applied:0===o,hashCount:null!==(r=null==h?void 0:h.hashCount)&&void 0!==r?r:0,bitmapLength:null!==(c=null===(a=null===(s=null==h?void 0:h.bits)||void 0===s?void 0:s.bitmap)||void 0===a?void 0:a.length)&&void 0!==c?c:0,padding:null!==(u=null===(l=null==h?void 0:h.bits)||void 0===l?void 0:l.padding)&&void 0!==u?u:0,mightContain:t=>{var e;return null!==(e=null==i?void 0:i.mightContain(t))&&void 0!==e&&e}}),d}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(i,t.fe,this.Le.nt(),n,o))}}}}Xe(t){const e=t.fe.unchangedNames;if(!e||!e.bits)return null;const{bits:{bitmap:n="",padding:i=0},hashCount:o=0}=e;let r,s;try{r=rr(n).toUint8Array()}catch(t){if(t instanceof tr)return to("Decoding the base64 bloom filter in existence filter failed ("+t.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw t}try{s=new Ea(r,i,o)}catch(t){return to(t instanceof xa?"BloomFilter error: ":"Applying bloom filter failed: ",t),null}return 0===s.Te?null:s}et(t,e,n){return e.fe.count===n-this.rt(t,e.targetId)?0:2}rt(t,e){const n=this.Le.getRemoteKeysForTarget(e);let i=0;return n.forEach((n=>{const o=this.Le.nt(),r=`projects/${o.projectId}/databases/${o.database}/documents/${n.path.canonicalString()}`;t.mightContain(r)||(this.We(e,n,null),i++)})),i}it(t){const e=new Map;this.ke.forEach(((n,i)=>{const o=this.Ye(i);if(o){if(n.current&&ns(o.target)){const e=new Io(o.target.path);null!==this.qe.get(e)||this.st(i,e)||this.We(i,e,Dr.newNoDocument(e,t))}n.De&&(e.set(i,n.ve()),n.Fe())}}));let n=Ms();this.Qe.forEach(((t,e)=>{let i=!0;e.forEachWhile((t=>{const e=this.Ye(t);return!e||"TargetPurposeLimboResolution"===e.purpose||(i=!1,!1)})),i&&(n=n.add(t))})),this.qe.forEach(((e,n)=>n.setReadTime(t)));const i=new Ia(t,e,this.Ke,this.qe,n);return this.qe=As(),this.Qe=Pa(),this.Ke=new Ko(wo),i}Ue(t,e){if(!this.je(t))return;const n=this.st(t,e.key)?2:0;this.ze(t).Me(e.key,n),this.qe=this.qe.insert(e.key,e),this.Qe=this.Qe.insert(e.key,this.ot(e.key).add(t))}We(t,e,n){if(!this.je(t))return;const i=this.ze(t);this.st(t,e)?i.Me(e,1):i.xe(e),this.Qe=this.Qe.insert(e,this.ot(e).delete(t)),n&&(this.qe=this.qe.insert(e,n))}removeTarget(t){this.ke.delete(t)}Ze(t){const e=this.ze(t).ve();return this.Le.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}Oe(t){this.ze(t).Oe()}ze(t){let e=this.ke.get(t);return e||(e=new Na,this.ke.set(t,e)),e}ot(t){let e=this.Qe.get(t);return e||(e=new Qo(wo),this.Qe=this.Qe.insert(t,e)),e}je(t){const e=null!==this.Ye(t);return e||Ji("WatchChangeAggregator","Detected inactive target",t),e}Ye(t){const e=this.ke.get(t);return e&&e.be?null:this.Le._t(t)}He(t){this.ke.set(t,new Na),this.Le.getRemoteKeysForTarget(t).forEach((e=>{this.We(t,e,null)}))}st(t,e){return this.Le.getRemoteKeysForTarget(t).has(e)}}function Pa(){return new Ko(Io.comparator)}function Ba(){return new Ko(Io.comparator)}const La=(()=>{const t={asc:"ASCENDING",desc:"DESCENDING"};return t})(),Ra=(()=>{const t={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"};return t})(),ja=(()=>{const t={and:"AND",or:"OR"};return t})();class za{constructor(t,e){this.databaseId=t,this.useProto3Json=e}}function Fa(t,e){return t.useProto3Json||zo(e)?e:{value:e}}function Va(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Ua(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function Ha(t,e){return Va(t,e.toTimestamp())}function qa(t){return io(!!t),Ao.fromTimestamp(function(t){const e=ir(t);return new _o(e.seconds,e.nanos)}(t))}function $a(t,e){return function(t){return new yo(["projects",t.projectId,"databases",t.database])}(t).child("documents").child(e).canonicalString()}function Ga(t){const e=yo.fromString(t);return io(gc(e)),e}function Wa(t,e){return $a(t.databaseId,e.path)}function Ka(t,e){const n=Ga(e);if(n.get(1)!==t.databaseId.projectId)throw new so(ro.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new so(ro.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new Io(Ja(n))}function Za(t,e){return $a(t.databaseId,e)}function Ya(t){const e=Ga(t);return 4===e.length?yo.emptyPath():Ja(e)}function Qa(t){return new yo(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Ja(t){return io(t.length>4&&"documents"===t.get(4)),t.popFirst(5)}function Xa(t,e,n){return{name:Wa(t,e),fields:n.value.mapValue.fields}}function tc(t,e){let n;if("targetChange"in e){e.targetChange;const i=function(t){return"NO_CHANGE"===t?0:"ADD"===t?1:"REMOVE"===t?2:"CURRENT"===t?3:"RESET"===t?4:no()}(e.targetChange.targetChangeType||"NO_CHANGE"),o=e.targetChange.targetIds||[],r=function(t,e){return t.useProto3Json?(io(void 0===e||"string"==typeof e),er.fromBase64String(e||"")):(io(void 0===e||e instanceof Uint8Array),er.fromUint8Array(e||new Uint8Array))}(t,e.targetChange.resumeToken),s=e.targetChange.cause,a=s&&function(t){const e=void 0===t.code?ro.UNKNOWN:wa(t.code);return new so(e,t.message||"")}(s);n=new Ma(i,o,r,a||null)}else if("documentChange"in e){e.documentChange;const i=e.documentChange;i.document,i.document.name,i.document.updateTime;const o=Ka(t,i.document.name),r=qa(i.document.updateTime),s=i.document.createTime?qa(i.document.createTime):Ao.min(),a=new Ir({mapValue:{fields:i.document.fields}}),c=Dr.newFoundDocument(o,r,s,a),l=i.targetIds||[],u=i.removedTargetIds||[];n=new Da(l,u,c.key,c)}else if("documentDelete"in e){e.documentDelete;const i=e.documentDelete;i.document;const o=Ka(t,i.document),r=i.readTime?qa(i.readTime):Ao.min(),s=Dr.newNoDocument(o,r),a=i.removedTargetIds||[];n=new Da([],a,s.key,s)}else if("documentRemove"in e){e.documentRemove;const i=e.documentRemove;i.document;const o=Ka(t,i.document),r=i.removedTargetIds||[];n=new Da([],r,o,null)}else{if(!("filter"in e))return no();{e.filter;const t=e.filter;t.targetId;const{count:i=0,unchangedNames:o}=t,r=new ga(i,o),s=t.targetId;n=new Sa(s,r)}}return n}function ec(t,e){let n;if(e instanceof ra)n={update:Xa(t,e.key,e.value)};else if(e instanceof ua)n={delete:Wa(t,e.key)};else if(e instanceof sa)n={update:Xa(t,e.key,e.data),updateMask:fc(e.fieldMask)};else{if(!(e instanceof da))return no();n={verify:Wa(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map((t=>function(t,e){const n=e.transform;if(n instanceof Vs)return{fieldPath:e.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(n instanceof Us)return{fieldPath:e.field.canonicalString(),appendMissingElements:{values:n.elements}};if(n instanceof qs)return{fieldPath:e.field.canonicalString(),removeAllFromArray:{values:n.elements}};if(n instanceof Gs)return{fieldPath:e.field.canonicalString(),increment:n.Ie};throw no()}(0,t)))),e.precondition.isNone||(n.currentDocument=function(t,e){return void 0!==e.updateTime?{updateTime:Ha(t,e.updateTime)}:void 0!==e.exists?{exists:e.exists}:no()}(t,e.precondition)),n}function nc(t,e){return t&&t.length>0?(io(void 0!==e),t.map((t=>function(t,e){let n=t.updateTime?qa(t.updateTime):qa(e);return n.isEqual(Ao.min())&&(n=qa(e)),new Ys(n,t.transformResults||[])}(t,e)))):[]}function ic(t,e){return{documents:[Za(t,e.path)]}}function oc(t,e){const n={structuredQuery:{}},i=e.path;null!==e.collectionGroup?(n.parent=Za(t,i),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=Za(t,i.popLast()),n.structuredQuery.from=[{collectionId:i.lastSegment()}]);const o=function(t){if(0!==t.length)return pc(Rr.create(t,"and"))}(e.filters);o&&(n.structuredQuery.where=o);const r=function(t){if(0!==t.length)return t.map((t=>function(t){return{field:dc(t.field),direction:cc(t.dir)}}(t)))}(e.orderBy);r&&(n.structuredQuery.orderBy=r);const s=Fa(t,e.limit);return null!==s&&(n.structuredQuery.limit=s),e.startAt&&(n.structuredQuery.startAt=function(t){return{before:t.inclusive,values:t.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(t){return{before:!t.inclusive,values:t.position}}(e.endAt)),n}function rc(t){let e=Ya(t.parent);const n=t.structuredQuery,i=n.from?n.from.length:0;let o=null;if(i>0){io(1===i);const t=n.from[0];t.allDescendants?o=t.collectionId:e=e.child(t.collectionId)}let r=[];n.where&&(r=function(t){const e=ac(t);return e instanceof Rr&&zr(e)?e.getFilters():[e]}(n.where));let s=[];n.orderBy&&(s=function(t){return t.map((t=>function(t){return new Or(hc(t.field),function(t){switch(t){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(t.direction))}(t)))}(n.orderBy));let a=null;n.limit&&(a=function(t){let e;return e="object"==typeof t?t.value:t,zo(e)?null:e}(n.limit));let c=null;n.startAt&&(c=function(t){const e=!!t.before,n=t.values||[];return new Sr(n,e)}(n.startAt));let l=null;return n.endAt&&(l=function(t){const e=!t.before,n=t.values||[];return new Sr(n,e)}(n.endAt)),os(e,o,s,r,a,"F",c,l)}function sc(t,e){const n=function(t){switch(t){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return no()}}(e.purpose);return null==n?null:{"goog-listen-tags":n}}function ac(t){return void 0!==t.unaryFilter?function(t){switch(t.unaryFilter.op){case"IS_NAN":const e=hc(t.unaryFilter.field);return Lr.create(e,"==",{doubleValue:NaN});case"IS_NULL":const n=hc(t.unaryFilter.field);return Lr.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=hc(t.unaryFilter.field);return Lr.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=hc(t.unaryFilter.field);return Lr.create(o,"!=",{nullValue:"NULL_VALUE"});default:return no()}}(t):void 0!==t.fieldFilter?function(t){return Lr.create(hc(t.fieldFilter.field),function(t){switch(t){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return no()}}(t.fieldFilter.op),t.fieldFilter.value)}(t):void 0!==t.compositeFilter?function(t){return Rr.create(t.compositeFilter.filters.map((t=>ac(t))),function(t){switch(t){case"AND":return"and";case"OR":return"or";default:return no()}}(t.compositeFilter.op))}(t):no()}function cc(t){return La[t]}function lc(t){return Ra[t]}function uc(t){return ja[t]}function dc(t){return{fieldPath:t.canonicalString()}}function hc(t){return xo.fromServerFormat(t.fieldPath)}function pc(t){return t instanceof Lr?function(t){if("=="===t.op){if(Cr(t.value))return{unaryFilter:{field:dc(t.field),op:"IS_NAN"}};if(Ar(t.value))return{unaryFilter:{field:dc(t.field),op:"IS_NULL"}}}else if("!="===t.op){if(Cr(t.value))return{unaryFilter:{field:dc(t.field),op:"IS_NOT_NAN"}};if(Ar(t.value))return{unaryFilter:{field:dc(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:dc(t.field),op:lc(t.op),value:t.value}}}(t):t instanceof Rr?function(t){const e=t.getFilters().map((t=>pc(t)));return 1===e.length?e[0]:{compositeFilter:{op:uc(t.op),filters:e}}}(t):no()}function fc(t){const e=[];return t.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function gc(t){return t.length>=4&&"projects"===t.get(0)&&"databases"===t.get(2)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mc{constructor(t,e,n,i,o=Ao.min(),r=Ao.min(),s=er.EMPTY_BYTE_STRING,a=null){this.target=t,this.targetId=e,this.purpose=n,this.sequenceNumber=i,this.snapshotVersion=o,this.lastLimboFreeSnapshotVersion=r,this.resumeToken=s,this.expectedCount=a}withSequenceNumber(t){return new mc(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,e){return new mc(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new mc(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new mc(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kc{constructor(t){this.ut=t}}function bc(t){const e=rc({parent:t.parent,structuredQuery:t.structuredQuery});return"LAST"===t.limitType?hs(e,e.limit,"L"):e}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wc{constructor(){}ht(t,e){this.Pt(t,e),e.It()}Pt(t,e){if("nullValue"in t)this.Tt(e,5);else if("booleanValue"in t)this.Tt(e,10),e.Et(t.booleanValue?1:0);else if("integerValue"in t)this.Tt(e,15),e.Et(or(t.integerValue));else if("doubleValue"in t){const n=or(t.doubleValue);isNaN(n)?this.Tt(e,13):(this.Tt(e,15),Fo(n)?e.Et(0):e.Et(n))}else if("timestampValue"in t){const n=t.timestampValue;this.Tt(e,20),"string"==typeof n?e.dt(n):(e.dt(`${n.seconds||""}`),e.Et(n.nanos||0))}else if("stringValue"in t)this.At(t.stringValue,e),this.Rt(e);else if("bytesValue"in t)this.Tt(e,30),e.Vt(rr(t.bytesValue)),this.Rt(e);else if("referenceValue"in t)this.ft(t.referenceValue,e);else if("geoPointValue"in t){const n=t.geoPointValue;this.Tt(e,45),e.Et(n.latitude||0),e.Et(n.longitude||0)}else"mapValue"in t?xr(t)?this.Tt(e,Number.MAX_SAFE_INTEGER):(this.gt(t.mapValue,e),this.Rt(e)):"arrayValue"in t?(this.yt(t.arrayValue,e),this.Rt(e)):no()}At(t,e){this.Tt(e,25),this.wt(t,e)}wt(t,e){e.dt(t)}gt(t,e){const n=t.fields||{};this.Tt(e,55);for(const i of Object.keys(n))this.At(i,e),this.Pt(n[i],e)}yt(t,e){const n=t.values||[];this.Tt(e,50);for(const i of n)this.Pt(i,e)}ft(t,e){this.Tt(e,37),Io.fromName(t).path.forEach((t=>{this.Tt(e,60),this.wt(t,e)}))}Tt(t,e){t.Et(e)}Rt(t){t.Et(2)}}wc.St=new wc;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class vc{constructor(){this.on=new _c}addToCollectionParentIndex(t,e){return this.on.add(e),Lo.resolve()}getCollectionParents(t,e){return Lo.resolve(this.on.getEntries(e))}addFieldIndex(t,e){return Lo.resolve()}deleteFieldIndex(t,e){return Lo.resolve()}deleteAllFieldIndexes(t){return Lo.resolve()}createTargetIndexes(t,e){return Lo.resolve()}getDocumentsMatchingTarget(t,e){return Lo.resolve(null)}getIndexType(t,e){return Lo.resolve(0)}getFieldIndexes(t,e){return Lo.resolve([])}getNextCollectionGroupToUpdate(t){return Lo.resolve(null)}getMinOffset(t,e){return Lo.resolve(Mo.min())}getMinOffsetFromCollectionGroup(t,e){return Lo.resolve(Mo.min())}updateCollectionGroup(t,e,n){return Lo.resolve()}updateIndexEntries(t,e){return Lo.resolve()}}class _c{constructor(){this.index={}}add(t){const e=t.lastSegment(),n=t.popLast(),i=this.index[e]||new Qo(yo.comparator),o=!i.has(n);return this.index[e]=i.add(n),o}has(t){const e=t.lastSegment(),n=t.popLast(),i=this.index[e];return i&&i.has(n)}getEntries(t){return(this.index[t]||new Qo(yo.comparator)).toArray()}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new Uint8Array(0);class Ac{constructor(t,e,n){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=e,this.maximumSequenceNumbersToCollect=n}static withCacheSize(t){return new Ac(t,Ac.DEFAULT_COLLECTION_PERCENTILE,Ac.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ac.DEFAULT_COLLECTION_PERCENTILE=10,Ac.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Ac.DEFAULT=new Ac(41943040,Ac.DEFAULT_COLLECTION_PERCENTILE,Ac.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Ac.DISABLED=new Ac(-1,0,0);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Cc{constructor(t){this.xn=t}next(){return this.xn+=2,this.xn}static On(){return new Cc(0)}static Nn(){return new Cc(-1)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class yc{constructor(){this.changes=new vs((t=>t.toString()),((t,e)=>t.isEqual(e))),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,Dr.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const n=this.changes.get(e);return void 0!==n?Lo.resolve(n):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ec{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xc{constructor(t,e,n,i){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=n,this.indexManager=i}getDocument(t,e){let n=null;return this.documentOverlayCache.getOverlay(t,e).next((i=>(n=i,this.remoteDocumentCache.getEntry(t,e)))).next((t=>(null!==n&&na(n.mutation,t,Xo.empty(),_o.now()),t)))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next((e=>this.getLocalViewOfDocuments(t,e,Ms()).next((()=>e))))}getLocalViewOfDocuments(t,e,n=Ms()){const i=xs();return this.populateOverlays(t,i,e).next((()=>this.computeViews(t,e,i,n).next((t=>{let e=ys();return t.forEach(((t,n)=>{e=e.insert(t,n.overlayedDocument)})),e}))))}getOverlayedDocuments(t,e){const n=xs();return this.populateOverlays(t,n,e).next((()=>this.computeViews(t,e,n,Ms())))}populateOverlays(t,e,n){const i=[];return n.forEach((t=>{e.has(t)||i.push(t)})),this.documentOverlayCache.getOverlays(t,i).next((t=>{t.forEach(((t,n)=>{e.set(t,n)}))}))}computeViews(t,e,n,i){let o=As();const r=Ts(),s=function(){return Ts()}();return e.forEach(((t,e)=>{const s=n.get(e.key);i.has(e.key)&&(void 0===s||s.mutation instanceof sa)?o=o.insert(e.key,e):void 0!==s?(r.set(e.key,s.mutation.getFieldMask()),na(s.mutation,e,s.mutation.getFieldMask(),_o.now())):r.set(e.key,Xo.empty())})),this.recalculateAndSaveOverlays(t,o).next((t=>(t.forEach(((t,e)=>r.set(t,e))),e.forEach(((t,e)=>{var n;return s.set(t,new Ec(e,null!==(n=r.get(t))&&void 0!==n?n:null))})),s)))}recalculateAndSaveOverlays(t,e){const n=Ts();let i=new Ko(((t,e)=>t-e)),o=Ms();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next((t=>{for(const o of t)o.keys().forEach((t=>{const r=e.get(t);if(null===r)return;let s=n.get(t)||Xo.empty();s=o.applyToLocalView(r,s),n.set(t,s);const a=(i.get(o.batchId)||Ms()).add(t);i=i.insert(o.batchId,a)}))})).next((()=>{const r=[],s=i.getReverseIterator();for(;s.hasNext();){const i=s.getNext(),a=i.key,c=i.value,l=Is();c.forEach((t=>{if(!o.has(t)){const i=ta(e.get(t),n.get(t));null!==i&&l.set(t,i),o=o.add(t)}})),r.push(this.documentOverlayCache.saveOverlays(t,a,l))}return Lo.waitFor(r)})).next((()=>n))}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next((e=>this.recalculateAndSaveOverlays(t,e)))}getDocumentsMatchingQuery(t,e,n,i){return function(t){return Io.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length}(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):as(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,n,i):this.getDocumentsMatchingCollectionQuery(t,e,n,i)}getNextDocuments(t,e,n,i){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,n,i).next((o=>{const r=i-o.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,n.largestBatchId,i-o.size):Lo.resolve(xs());let s=-1,a=o;return r.next((e=>Lo.forEach(e,((e,n)=>(s<n.largestBatchId&&(s=n.largestBatchId),o.get(e)?Lo.resolve():this.remoteDocumentCache.getEntry(t,e).next((t=>{a=a.insert(e,t)}))))).next((()=>this.populateOverlays(t,e,o))).next((()=>this.computeViews(t,a,e,Ms()))).next((t=>({batchId:s,changes:Es(t)})))))}))}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new Io(e)).next((t=>{let e=ys();return t.isFoundDocument()&&(e=e.insert(t.key,t)),e}))}getDocumentsMatchingCollectionGroupQuery(t,e,n,i){const o=e.collectionGroup;let r=ys();return this.indexManager.getCollectionParents(t,o).next((s=>Lo.forEach(s,(s=>{const a=function(t,e){return new is(e,null,t.explicitOrderBy.slice(),t.filters.slice(),t.limit,t.limitType,t.startAt,t.endAt)}(e,s.child(o));return this.getDocumentsMatchingCollectionQuery(t,a,n,i).next((t=>{t.forEach(((t,e)=>{r=r.insert(t,e)}))}))})).next((()=>r))))}getDocumentsMatchingCollectionQuery(t,e,n,i){let o;return this.documentOverlayCache.getOverlaysForCollection(t,e.path,n.largestBatchId).next((r=>(o=r,this.remoteDocumentCache.getDocumentsMatchingQuery(t,e,n,o,i)))).next((t=>{o.forEach(((e,n)=>{const i=n.getKey();null===t.get(i)&&(t=t.insert(i,Dr.newInvalidDocument(i)))}));let n=ys();return t.forEach(((t,i)=>{const r=o.get(t);void 0!==r&&na(r.mutation,i,Xo.empty(),_o.now()),ms(e,i)&&(n=n.insert(t,i))})),n}))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ic{constructor(t){this.serializer=t,this.ur=new Map,this.cr=new Map}getBundleMetadata(t,e){return Lo.resolve(this.ur.get(e))}saveBundleMetadata(t,e){return this.ur.set(e.id,function(t){return{id:t.id,version:t.version,createTime:qa(t.createTime)}}(e)),Lo.resolve()}getNamedQuery(t,e){return Lo.resolve(this.cr.get(e))}saveNamedQuery(t,e){return this.cr.set(e.name,function(t){return{name:t.name,query:bc(t.bundledQuery),readTime:qa(t.readTime)}}(e)),Lo.resolve()}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tc{constructor(){this.overlays=new Ko(Io.comparator),this.lr=new Map}getOverlay(t,e){return Lo.resolve(this.overlays.get(e))}getOverlays(t,e){const n=xs();return Lo.forEach(e,(e=>this.getOverlay(t,e).next((t=>{null!==t&&n.set(e,t)})))).next((()=>n))}saveOverlays(t,e,n){return n.forEach(((n,i)=>{this.lt(t,e,i)})),Lo.resolve()}removeOverlaysForBatchId(t,e,n){const i=this.lr.get(n);return void 0!==i&&(i.forEach((t=>this.overlays=this.overlays.remove(t))),this.lr.delete(n)),Lo.resolve()}getOverlaysForCollection(t,e,n){const i=xs(),o=e.length+1,r=new Io(e.child("")),s=this.overlays.getIteratorFrom(r);for(;s.hasNext();){const t=s.getNext().value,r=t.getKey();if(!e.isPrefixOf(r.path))break;r.path.length===o&&t.largestBatchId>n&&i.set(t.getKey(),t)}return Lo.resolve(i)}getOverlaysForCollectionGroup(t,e,n,i){let o=new Ko(((t,e)=>t-e));const r=this.overlays.getIterator();for(;r.hasNext();){const t=r.getNext().value;if(t.getKey().getCollectionGroup()===e&&t.largestBatchId>n){let e=o.get(t.largestBatchId);null===e&&(e=xs(),o=o.insert(t.largestBatchId,e)),e.set(t.getKey(),t)}}const s=xs(),a=o.getIterator();for(;a.hasNext();)if(a.getNext().value.forEach(((t,e)=>s.set(t,e))),s.size()>=i)break;return Lo.resolve(s)}lt(t,e,n){const i=this.overlays.get(n.key);if(null!==i){const t=this.lr.get(i.largestBatchId).delete(n.key);this.lr.set(i.largestBatchId,t)}this.overlays=this.overlays.insert(n.key,new fa(e,n));let o=this.lr.get(e);void 0===o&&(o=Ms(),this.lr.set(e,o)),this.lr.set(e,o.add(n.key))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dc{constructor(){this.hr=new Qo(Sc.Pr),this.Ir=new Qo(Sc.Tr)}isEmpty(){return this.hr.isEmpty()}addReference(t,e){const n=new Sc(t,e);this.hr=this.hr.add(n),this.Ir=this.Ir.add(n)}Er(t,e){t.forEach((t=>this.addReference(t,e)))}removeReference(t,e){this.dr(new Sc(t,e))}Ar(t,e){t.forEach((t=>this.removeReference(t,e)))}Rr(t){const e=new Io(new yo([])),n=new Sc(e,t),i=new Sc(e,t+1),o=[];return this.Ir.forEachInRange([n,i],(t=>{this.dr(t),o.push(t.key)})),o}Vr(){this.hr.forEach((t=>this.dr(t)))}dr(t){this.hr=this.hr.delete(t),this.Ir=this.Ir.delete(t)}mr(t){const e=new Io(new yo([])),n=new Sc(e,t),i=new Sc(e,t+1);let o=Ms();return this.Ir.forEachInRange([n,i],(t=>{o=o.add(t.key)})),o}containsKey(t){const e=new Sc(t,0),n=this.hr.firstAfterOrEqual(e);return null!==n&&t.isEqual(n.key)}}class Sc{constructor(t,e){this.key=t,this.gr=e}static Pr(t,e){return Io.comparator(t.key,e.key)||wo(t.gr,e.gr)}static Tr(t,e){return wo(t.gr,e.gr)||Io.comparator(t.key,e.key)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mc{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.pr=1,this.yr=new Qo(Sc.Pr)}checkEmpty(t){return Lo.resolve(0===this.mutationQueue.length)}addMutationBatch(t,e,n,i){const o=this.pr;this.pr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const r=new ha(o,e,n,i);this.mutationQueue.push(r);for(const s of i)this.yr=this.yr.add(new Sc(s.key,o)),this.indexManager.addToCollectionParentIndex(t,s.key.path.popLast());return Lo.resolve(r)}lookupMutationBatch(t,e){return Lo.resolve(this.wr(e))}getNextMutationBatchAfterBatchId(t,e){const n=e+1,i=this.Sr(n),o=i<0?0:i;return Lo.resolve(this.mutationQueue.length>o?this.mutationQueue[o]:null)}getHighestUnacknowledgedBatchId(){return Lo.resolve(0===this.mutationQueue.length?-1:this.pr-1)}getAllMutationBatches(t){return Lo.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const n=new Sc(e,0),i=new Sc(e,Number.POSITIVE_INFINITY),o=[];return this.yr.forEachInRange([n,i],(t=>{const e=this.wr(t.gr);o.push(e)})),Lo.resolve(o)}getAllMutationBatchesAffectingDocumentKeys(t,e){let n=new Qo(wo);return e.forEach((t=>{const e=new Sc(t,0),i=new Sc(t,Number.POSITIVE_INFINITY);this.yr.forEachInRange([e,i],(t=>{n=n.add(t.gr)}))})),Lo.resolve(this.br(n))}getAllMutationBatchesAffectingQuery(t,e){const n=e.path,i=n.length+1;let o=n;Io.isDocumentKey(o)||(o=o.child(""));const r=new Sc(new Io(o),0);let s=new Qo(wo);return this.yr.forEachWhile((t=>{const e=t.key.path;return!!n.isPrefixOf(e)&&(e.length===i&&(s=s.add(t.gr)),!0)}),r),Lo.resolve(this.br(s))}br(t){const e=[];return t.forEach((t=>{const n=this.wr(t);null!==n&&e.push(n)})),e}removeMutationBatch(t,e){io(0===this.Dr(e.batchId,"removed")),this.mutationQueue.shift();let n=this.yr;return Lo.forEach(e.mutations,(i=>{const o=new Sc(i.key,e.batchId);return n=n.delete(o),this.referenceDelegate.markPotentiallyOrphaned(t,i.key)})).next((()=>{this.yr=n}))}Fn(t){}containsKey(t,e){const n=new Sc(e,0),i=this.yr.firstAfterOrEqual(n);return Lo.resolve(e.isEqual(i&&i.key))}performConsistencyCheck(t){return this.mutationQueue.length,Lo.resolve()}Dr(t,e){return this.Sr(t)}Sr(t){return 0===this.mutationQueue.length?0:t-this.mutationQueue[0].batchId}wr(t){const e=this.Sr(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nc{constructor(t){this.Cr=t,this.docs=function(){return new Ko(Io.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const n=e.key,i=this.docs.get(n),o=i?i.size:0,r=this.Cr(e);return this.docs=this.docs.insert(n,{document:e.mutableCopy(),size:r}),this.size+=r-o,this.indexManager.addToCollectionParentIndex(t,n.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const n=this.docs.get(e);return Lo.resolve(n?n.document.mutableCopy():Dr.newInvalidDocument(e))}getEntries(t,e){let n=As();return e.forEach((t=>{const e=this.docs.get(t);n=n.insert(t,e?e.document.mutableCopy():Dr.newInvalidDocument(t))})),Lo.resolve(n)}getDocumentsMatchingQuery(t,e,n,i){let o=As();const r=e.path,s=new Io(r.child("")),a=this.docs.getIteratorFrom(s);for(;a.hasNext();){const{key:t,value:{document:s}}=a.getNext();if(!r.isPrefixOf(t.path))break;t.path.length>r.length+1||No(So(s),n)<=0||(i.has(s.key)||ms(e,s))&&(o=o.insert(s.key,s.mutableCopy()))}return Lo.resolve(o)}getAllFromCollectionGroup(t,e,n,i){no()}vr(t,e){return Lo.forEach(this.docs,(t=>e(t)))}newChangeBuffer(t){return new Oc(this)}getSize(t){return Lo.resolve(this.size)}}class Oc extends yc{constructor(t){super(),this._r=t}applyChanges(t){const e=[];return this.changes.forEach(((n,i)=>{i.isValidDocument()?e.push(this._r.addEntry(t,i)):this._r.removeEntry(n)})),Lo.waitFor(e)}getFromCache(t,e){return this._r.getEntry(t,e)}getAllFromCache(t,e){return this._r.getEntries(t,e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pc{constructor(t){this.persistence=t,this.Fr=new vs((t=>ts(t)),es),this.lastRemoteSnapshotVersion=Ao.min(),this.highestTargetId=0,this.Mr=0,this.Or=new Dc,this.targetCount=0,this.Nr=Cc.On()}forEachTarget(t,e){return this.Fr.forEach(((t,n)=>e(n))),Lo.resolve()}getLastRemoteSnapshotVersion(t){return Lo.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return Lo.resolve(this.Mr)}allocateTargetId(t){return this.highestTargetId=this.Nr.next(),Lo.resolve(this.highestTargetId)}setTargetsMetadata(t,e,n){return n&&(this.lastRemoteSnapshotVersion=n),e>this.Mr&&(this.Mr=e),Lo.resolve()}kn(t){this.Fr.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.Nr=new Cc(e),this.highestTargetId=e),t.sequenceNumber>this.Mr&&(this.Mr=t.sequenceNumber)}addTargetData(t,e){return this.kn(e),this.targetCount+=1,Lo.resolve()}updateTargetData(t,e){return this.kn(e),Lo.resolve()}removeTargetData(t,e){return this.Fr.delete(e.target),this.Or.Rr(e.targetId),this.targetCount-=1,Lo.resolve()}removeTargets(t,e,n){let i=0;const o=[];return this.Fr.forEach(((r,s)=>{s.sequenceNumber<=e&&null===n.get(s.targetId)&&(this.Fr.delete(r),o.push(this.removeMatchingKeysForTargetId(t,s.targetId)),i++)})),Lo.waitFor(o).next((()=>i))}getTargetCount(t){return Lo.resolve(this.targetCount)}getTargetData(t,e){const n=this.Fr.get(e)||null;return Lo.resolve(n)}addMatchingKeys(t,e,n){return this.Or.Er(e,n),Lo.resolve()}removeMatchingKeys(t,e,n){this.Or.Ar(e,n);const i=this.persistence.referenceDelegate,o=[];return i&&e.forEach((e=>{o.push(i.markPotentiallyOrphaned(t,e))})),Lo.waitFor(o)}removeMatchingKeysForTargetId(t,e){return this.Or.Rr(e),Lo.resolve()}getMatchingKeysForTargetId(t,e){const n=this.Or.mr(e);return Lo.resolve(n)}containsKey(t,e){return Lo.resolve(this.Or.containsKey(e))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bc{constructor(t,e){this.Br={},this.overlays={},this.Lr=new jo(0),this.kr=!1,this.kr=!0,this.referenceDelegate=t(this),this.qr=new Pc(this),this.indexManager=new vc,this.remoteDocumentCache=function(t){return new Nc(t)}((t=>this.referenceDelegate.Qr(t))),this.serializer=new kc(e),this.Kr=new Ic(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.kr=!1,Promise.resolve()}get started(){return this.kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new Tc,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let n=this.Br[t.toKey()];return n||(n=new Mc(e,this.referenceDelegate),this.Br[t.toKey()]=n),n}getTargetCache(){return this.qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Kr}runTransaction(t,e,n){Ji("MemoryPersistence","Starting transaction:",t);const i=new Lc(this.Lr.next());return this.referenceDelegate.$r(),n(i).next((t=>this.referenceDelegate.Ur(i).next((()=>t)))).toPromise().then((t=>(i.raiseOnCommittedEvent(),t)))}Wr(t,e){return Lo.or(Object.values(this.Br).map((n=>()=>n.containsKey(t,e))))}}class Lc extends Po{constructor(t){super(),this.currentSequenceNumber=t}}class Rc{constructor(t){this.persistence=t,this.Gr=new Dc,this.zr=null}static jr(t){return new Rc(t)}get Hr(){if(this.zr)return this.zr;throw no()}addReference(t,e,n){return this.Gr.addReference(n,e),this.Hr.delete(n.toString()),Lo.resolve()}removeReference(t,e,n){return this.Gr.removeReference(n,e),this.Hr.add(n.toString()),Lo.resolve()}markPotentiallyOrphaned(t,e){return this.Hr.add(e.toString()),Lo.resolve()}removeTarget(t,e){this.Gr.Rr(e.targetId).forEach((t=>this.Hr.add(t.toString())));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(t,e.targetId).next((t=>{t.forEach((t=>this.Hr.add(t.toString())))})).next((()=>n.removeTargetData(t,e)))}$r(){this.zr=new Set}Ur(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return Lo.forEach(this.Hr,(n=>{const i=Io.fromPath(n);return this.Jr(t,i).next((t=>{t||e.removeEntry(i,Ao.min())}))})).next((()=>(this.zr=null,e.apply(t))))}updateLimboDocument(t,e){return this.Jr(t,e).next((t=>{t?this.Hr.delete(e.toString()):this.Hr.add(e.toString())}))}Qr(t){return 0}Jr(t,e){return Lo.or([()=>Lo.resolve(this.Gr.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Wr(t,e)])}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class jc{constructor(t,e,n,i){this.targetId=t,this.fromCache=e,this.ki=n,this.qi=i}static Qi(t,e){let n=Ms(),i=Ms();for(const o of e.docChanges)switch(o.type){case 0:n=n.add(o.doc.key);break;case 1:i=i.add(o.doc.key)}return new jc(t,e.fromCache,n,i)}}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zc{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fc{constructor(){this.Ki=!1,this.$i=!1,this.Ui=100,this.Wi=8}initialize(t,e){this.Gi=t,this.indexManager=e,this.Ki=!0}getDocumentsMatchingQuery(t,e,n,i){const o={result:null};return this.zi(t,e).next((t=>{o.result=t})).next((()=>{if(!o.result)return this.ji(t,e,i,n).next((t=>{o.result=t}))})).next((()=>{if(o.result)return;const n=new zc;return this.Hi(t,e,n).next((i=>{if(o.result=i,this.$i)return this.Ji(t,e,n,i.size)}))})).next((()=>o.result))}Ji(t,e,n,i){return n.documentReadCount<this.Ui?(Qi()<=s["in"].DEBUG&&Ji("QueryEngine","SDK will not create cache indexes for query:",gs(e),"since it only creates cache indexes for collection contains","more than or equal to",this.Ui,"documents"),Lo.resolve()):(Qi()<=s["in"].DEBUG&&Ji("QueryEngine","Query:",gs(e),"scans",n.documentReadCount,"local documents and returns",i,"documents as results."),n.documentReadCount>this.Wi*i?(Qi()<=s["in"].DEBUG&&Ji("QueryEngine","The SDK decides to create cache indexes for query:",gs(e),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,ls(e))):Lo.resolve())}zi(t,e){if(ss(e))return Lo.resolve(null);let n=ls(e);return this.indexManager.getIndexType(t,n).next((i=>0===i?null:(null!==e.limit&&1===i&&(e=hs(e,null,"F"),n=ls(e)),this.indexManager.getDocumentsMatchingTarget(t,n).next((i=>{const o=Ms(...i);return this.Gi.getDocuments(t,o).next((i=>this.indexManager.getMinOffset(t,n).next((n=>{const r=this.Yi(e,i);return this.Zi(e,r,o,n.readTime)?this.zi(t,hs(e,null,"F")):this.Xi(t,r,e,n)}))))})))))}ji(t,e,n,i){return ss(e)||i.isEqual(Ao.min())?Lo.resolve(null):this.Gi.getDocuments(t,n).next((o=>{const r=this.Yi(e,o);return this.Zi(e,r,n,i)?Lo.resolve(null):(Qi()<=s["in"].DEBUG&&Ji("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),gs(e)),this.Xi(t,r,e,Do(i,-1)).next((t=>t)))}))}Yi(t,e){let n=new Qo(bs(t));return e.forEach(((e,i)=>{ms(t,i)&&(n=n.add(i))})),n}Zi(t,e,n,i){if(null===t.limit)return!1;if(n.size!==e.size)return!0;const o="F"===t.limitType?e.last():e.first();return!!o&&(o.hasPendingWrites||o.version.compareTo(i)>0)}Hi(t,e,n){return Qi()<=s["in"].DEBUG&&Ji("QueryEngine","Using full collection scan to execute query:",gs(e)),this.Gi.getDocumentsMatchingQuery(t,e,Mo.min(),n)}Xi(t,e,n,i){return this.Gi.getDocumentsMatchingQuery(t,n,i).next((t=>(e.forEach((e=>{t=t.insert(e.key,e)})),t)))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vc{constructor(t,e,n,i){this.persistence=t,this.es=e,this.serializer=i,this.ts=new Ko(wo),this.ns=new vs((t=>ts(t)),es),this.rs=new Map,this.ss=t.getRemoteDocumentCache(),this.qr=t.getTargetCache(),this.Kr=t.getBundleCache(),this.os(n)}os(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new xc(this.ss,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.ss.setIndexManager(this.indexManager),this.es.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(e=>t.collect(e,this.ts)))}}function Uc(t,e,n,i){return new Vc(t,e,n,i)}async function Hc(t,e){const n=oo(t);return await n.persistence.runTransaction("Handle user change","readonly",(t=>{let i;return n.mutationQueue.getAllMutationBatches(t).next((o=>(i=o,n.os(e),n.mutationQueue.getAllMutationBatches(t)))).next((e=>{const o=[],r=[];let s=Ms();for(const t of i){o.push(t.batchId);for(const e of t.mutations)s=s.add(e.key)}for(const t of e){r.push(t.batchId);for(const e of t.mutations)s=s.add(e.key)}return n.localDocuments.getDocuments(t,s).next((t=>({_s:t,removedBatchIds:o,addedBatchIds:r})))}))}))}function qc(t,e){const n=oo(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",(t=>{const i=e.batch.keys(),o=n.ss.newChangeBuffer({trackRemovals:!0});return function(t,e,n,i){const o=n.batch,r=o.keys();let s=Lo.resolve();return r.forEach((t=>{s=s.next((()=>i.getEntry(e,t))).next((e=>{const r=n.docVersions.get(t);io(null!==r),e.version.compareTo(r)<0&&(o.applyToRemoteDocument(e,n),e.isValidDocument()&&(e.setReadTime(n.commitVersion),i.addEntry(e)))}))})),s.next((()=>t.mutationQueue.removeMutationBatch(e,o)))}(n,t,e,o).next((()=>o.apply(t))).next((()=>n.mutationQueue.performConsistencyCheck(t))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(t,i,e.batch.batchId))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(t,function(t){let e=Ms();for(let n=0;n<t.mutationResults.length;++n)t.mutationResults[n].transformResults.length>0&&(e=e.add(t.batch.mutations[n].key));return e}(e)))).next((()=>n.localDocuments.getDocuments(t,i)))}))}function $c(t){const e=oo(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.qr.getLastRemoteSnapshotVersion(t)))}function Gc(t,e){const n=oo(t),i=e.snapshotVersion;let o=n.ts;return n.persistence.runTransaction("Apply remote event","readwrite-primary",(t=>{const r=n.ss.newChangeBuffer({trackRemovals:!0});o=n.ts;const s=[];e.targetChanges.forEach(((r,a)=>{const c=o.get(a);if(!c)return;s.push(n.qr.removeMatchingKeys(t,r.removedDocuments,a).next((()=>n.qr.addMatchingKeys(t,r.addedDocuments,a))));let l=c.withSequenceNumber(t.currentSequenceNumber);null!==e.targetMismatches.get(a)?l=l.withResumeToken(er.EMPTY_BYTE_STRING,Ao.min()).withLastLimboFreeSnapshotVersion(Ao.min()):r.resumeToken.approximateByteSize()>0&&(l=l.withResumeToken(r.resumeToken,i)),o=o.insert(a,l),function(t,e,n){return 0===t.resumeToken.approximateByteSize()||(e.snapshotVersion.toMicroseconds()-t.snapshotVersion.toMicroseconds()>=3e8||n.addedDocuments.size+n.modifiedDocuments.size+n.removedDocuments.size>0)}(c,l,r)&&s.push(n.qr.updateTargetData(t,l))}));let a=As(),c=Ms();if(e.documentUpdates.forEach((i=>{e.resolvedLimboDocuments.has(i)&&s.push(n.persistence.referenceDelegate.updateLimboDocument(t,i))})),s.push(Wc(t,r,e.documentUpdates).next((t=>{a=t.us,c=t.cs}))),!i.isEqual(Ao.min())){const e=n.qr.getLastRemoteSnapshotVersion(t).next((e=>n.qr.setTargetsMetadata(t,t.currentSequenceNumber,i)));s.push(e)}return Lo.waitFor(s).next((()=>r.apply(t))).next((()=>n.localDocuments.getLocalViewOfDocuments(t,a,c))).next((()=>a))})).then((t=>(n.ts=o,t)))}function Wc(t,e,n){let i=Ms(),o=Ms();return n.forEach((t=>i=i.add(t))),e.getEntries(t,i).next((t=>{let i=As();return n.forEach(((n,r)=>{const s=t.get(n);r.isFoundDocument()!==s.isFoundDocument()&&(o=o.add(n)),r.isNoDocument()&&r.version.isEqual(Ao.min())?(e.removeEntry(n,r.readTime),i=i.insert(n,r)):!s.isValidDocument()||r.version.compareTo(s.version)>0||0===r.version.compareTo(s.version)&&s.hasPendingWrites?(e.addEntry(r),i=i.insert(n,r)):Ji("LocalStore","Ignoring outdated watch update for ",n,". Current version:",s.version," Watch version:",r.version)})),{us:i,cs:o}}))}function Kc(t,e){const n=oo(t);return n.persistence.runTransaction("Get next mutation batch","readonly",(t=>(void 0===e&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(t,e))))}function Zc(t,e){const n=oo(t);return n.persistence.runTransaction("Allocate target","readwrite",(t=>{let i;return n.qr.getTargetData(t,e).next((o=>o?(i=o,Lo.resolve(i)):n.qr.allocateTargetId(t).next((o=>(i=new mc(e,o,"TargetPurposeListen",t.currentSequenceNumber),n.qr.addTargetData(t,i).next((()=>i)))))))})).then((t=>{const i=n.ts.get(t.targetId);return(null===i||t.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.ts=n.ts.insert(t.targetId,t),n.ns.set(e,t.targetId)),t}))}async function Yc(t,e,n){const i=oo(t),o=i.ts.get(e),r=n?"readwrite":"readwrite-primary";try{n||await i.persistence.runTransaction("Release target",r,(t=>i.persistence.referenceDelegate.removeTarget(t,o)))}catch(t){if(!Ro(t))throw t;Ji("LocalStore",`Failed to update sequence numbers for target ${e}: ${t}`)}i.ts=i.ts.remove(e),i.ns.delete(o.target)}function Qc(t,e,n){const i=oo(t);let o=Ao.min(),r=Ms();return i.persistence.runTransaction("Execute query","readwrite",(t=>function(t,e,n){const i=oo(t),o=i.ns.get(n);return void 0!==o?Lo.resolve(i.ts.get(o)):i.qr.getTargetData(e,n)}(i,t,ls(e)).next((e=>{if(e)return o=e.lastLimboFreeSnapshotVersion,i.qr.getMatchingKeysForTargetId(t,e.targetId).next((t=>{r=t}))})).next((()=>i.es.getDocumentsMatchingQuery(t,e,n?o:Ao.min(),n?r:Ms()))).next((t=>(Jc(i,ks(e),t),{documents:t,ls:r})))))}function Jc(t,e,n){let i=t.rs.get(e)||Ao.min();n.forEach(((t,e)=>{e.readTime.compareTo(i)>0&&(i=e.readTime)})),t.rs.set(e,i)}class Xc{constructor(){this.activeTargetIds=Os()}ds(t){this.activeTargetIds=this.activeTargetIds.add(t)}As(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Es(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class tl{constructor(){this.eo=new Xc,this.no={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,n){}addLocalQueryTarget(t){return this.eo.ds(t),this.no[t]||"not-current"}updateQueryState(t,e,n){this.no[t]=e}removeLocalQueryTarget(t){this.eo.As(t)}isLocalQueryTarget(t){return this.eo.activeTargetIds.has(t)}clearQueryState(t){delete this.no[t]}getAllActiveQueryTargets(){return this.eo.activeTargetIds}isActiveQueryTarget(t){return this.eo.activeTargetIds.has(t)}start(){return this.eo=new Xc,Promise.resolve()}handleUserChange(t,e,n){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class el{ro(t){}shutdown(){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nl{constructor(){this.io=()=>this.so(),this.oo=()=>this._o(),this.ao=[],this.uo()}ro(t){this.ao.push(t)}shutdown(){window.removeEventListener("online",this.io),window.removeEventListener("offline",this.oo)}uo(){window.addEventListener("online",this.io),window.addEventListener("offline",this.oo)}so(){Ji("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.ao)t(0)}_o(){Ji("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.ao)t(1)}static D(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let il=null;function ol(){return null===il?il=function(){return 268435456+Math.round(2147483648*Math.random())}():il++,"0x"+il.toString(16)
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}const rl={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sl{constructor(t){this.co=t.co,this.lo=t.lo}ho(t){this.Po=t}Io(t){this.To=t}onMessage(t){this.Eo=t}close(){this.lo()}send(t){this.co(t)}Ao(){this.Po()}Ro(t){this.To(t)}Vo(t){this.Eo(t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const al="WebChannelConnection";class cl extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const e=t.ssl?"https":"http",n=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.mo=e+"://"+t.host,this.fo=`projects/${n}/databases/${i}`,this.po="(default)"===this.databaseId.database?`project_id=${n}`:`project_id=${n}&database_id=${i}`}get yo(){return!1}wo(t,e,n,i,o){const r=ol(),s=this.So(t,e);Ji("RestConnection",`Sending RPC '${t}' ${r}:`,s,n);const a={"google-cloud-resource-prefix":this.fo,"x-goog-request-params":this.po};return this.bo(a,i,o),this.Do(t,s,a,n).then((e=>(Ji("RestConnection",`Received RPC '${t}' ${r}: `,e),e)),(e=>{throw to("RestConnection",`RPC '${t}' ${r} failed with error: `,e,"url: ",s,"request:",n),e}))}Co(t,e,n,i,o,r){return this.wo(t,e,n,i,o)}bo(t,e,n){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Zi}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),e&&e.headers.forEach(((e,n)=>t[n]=e)),n&&n.headers.forEach(((e,n)=>t[n]=e))}So(t,e){const n=rl[t];return`${this.mo}/v1/${e}:${n}`}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}Do(t,e,n,i){const o=ol();return new Promise(((r,s)=>{const a=new qi;a.setWithCredentials(!0),a.listenOnce(Fi.COMPLETE,(()=>{try{switch(a.getLastErrorCode()){case zi.NO_ERROR:const e=a.getResponseJson();Ji(al,`XHR for RPC '${t}' ${o} received:`,JSON.stringify(e)),r(e);break;case zi.TIMEOUT:Ji(al,`RPC '${t}' ${o} timed out`),s(new so(ro.DEADLINE_EXCEEDED,"Request time out"));break;case zi.HTTP_ERROR:const n=a.getStatus();if(Ji(al,`RPC '${t}' ${o} failed with status:`,n,"response text:",a.getResponseText()),n>0){let t=a.getResponseJson();Array.isArray(t)&&(t=t[0]);const e=null==t?void 0:t.error;if(e&&e.status&&e.message){const t=function(t){const e=t.toLowerCase().replace(/_/g,"-");return Object.values(ro).indexOf(e)>=0?e:ro.UNKNOWN}(e.status);s(new so(t,e.message))}else s(new so(ro.UNKNOWN,"Server responded with status "+a.getStatus()))}else s(new so(ro.UNAVAILABLE,"Connection failed."));break;default:no()}}finally{Ji(al,`RPC '${t}' ${o} completed.`)}}));const c=JSON.stringify(i);Ji(al,`RPC '${t}' ${o} sending request:`,i),a.send(e,"POST",c,n,15)}))}vo(t,e,n){const i=ol(),o=[this.mo,"/","google.firestore.v1.Firestore","/",t,"/channel"],r=Ri(),s=ji(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;void 0!==c&&(a.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(a.useFetchStreams=!0),this.bo(a.initMessageHeaders,e,n),a.encodeInitMessageHeaders=!0;const l=o.join("");Ji(al,`Creating RPC '${t}' stream ${i}: ${l}`,a);const u=r.createWebChannel(l,a);let d=!1,h=!1;const p=new sl({co:e=>{h?Ji(al,`Not sending because RPC '${t}' stream ${i} is closed:`,e):(d||(Ji(al,`Opening RPC '${t}' stream ${i} transport.`),u.open(),d=!0),Ji(al,`RPC '${t}' stream ${i} sending:`,e),u.send(e))},lo:()=>u.close()}),f=(t,e,n)=>{t.listen(e,(t=>{try{n(t)}catch(t){setTimeout((()=>{throw t}),0)}}))};return f(u,Hi.EventType.OPEN,(()=>{h||Ji(al,`RPC '${t}' stream ${i} transport opened.`)})),f(u,Hi.EventType.CLOSE,(()=>{h||(h=!0,Ji(al,`RPC '${t}' stream ${i} transport closed`),p.Ro())})),f(u,Hi.EventType.ERROR,(e=>{h||(h=!0,to(al,`RPC '${t}' stream ${i} transport errored:`,e),p.Ro(new so(ro.UNAVAILABLE,"The operation could not be completed")))})),f(u,Hi.EventType.MESSAGE,(e=>{var n;if(!h){const o=e.data[0];io(!!o);const r=o,s=r.error||(null===(n=r[0])||void 0===n?void 0:n.error);if(s){Ji(al,`RPC '${t}' stream ${i} received error:`,s);const e=s.status;let n=function(t){const e=ma[t];if(void 0!==e)return wa(e)}(e),o=s.message;void 0===n&&(n=ro.INTERNAL,o="Unknown error status: "+e+" with message "+s.message),h=!0,p.Ro(new so(n,o)),u.close()}else Ji(al,`RPC '${t}' stream ${i} received:`,o),p.Vo(o)}})),f(s,Vi.STAT_EVENT,(e=>{e.stat===Ui.PROXY?Ji(al,`RPC '${t}' stream ${i} detected buffering proxy`):e.stat===Ui.NOPROXY&&Ji(al,`RPC '${t}' stream ${i} detected no buffering proxy`)})),setTimeout((()=>{p.Ao()}),0),p}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ll(){return"undefined"!=typeof document?document:null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ul(t){return new za(t,!0)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dl{constructor(t,e,n=1e3,i=1.5,o=6e4){this.si=t,this.timerId=e,this.Fo=n,this.Mo=i,this.xo=o,this.Oo=0,this.No=null,this.Bo=Date.now(),this.reset()}reset(){this.Oo=0}Lo(){this.Oo=this.xo}ko(t){this.cancel();const e=Math.floor(this.Oo+this.qo()),n=Math.max(0,Date.now()-this.Bo),i=Math.max(0,e-n);i>0&&Ji("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Oo} ms, delay with jitter: ${e} ms, last attempt: ${n} ms ago)`),this.No=this.si.enqueueAfterDelay(this.timerId,i,(()=>(this.Bo=Date.now(),t()))),this.Oo*=this.Mo,this.Oo<this.Fo&&(this.Oo=this.Fo),this.Oo>this.xo&&(this.Oo=this.xo)}Qo(){null!==this.No&&(this.No.skipDelay(),this.No=null)}cancel(){null!==this.No&&(this.No.cancel(),this.No=null)}qo(){return(Math.random()-.5)*this.Oo}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hl{constructor(t,e,n,i,o,r,s,a){this.si=t,this.Ko=n,this.$o=i,this.connection=o,this.authCredentialsProvider=r,this.appCheckCredentialsProvider=s,this.listener=a,this.state=0,this.Uo=0,this.Wo=null,this.Go=null,this.stream=null,this.zo=new dl(t,e)}jo(){return 1===this.state||5===this.state||this.Ho()}Ho(){return 2===this.state||3===this.state}start(){4!==this.state?this.auth():this.Jo()}async stop(){this.jo()&&await this.close(0)}Yo(){this.state=0,this.zo.reset()}Zo(){this.Ho()&&null===this.Wo&&(this.Wo=this.si.enqueueAfterDelay(this.Ko,6e4,(()=>this.Xo())))}e_(t){this.t_(),this.stream.send(t)}async Xo(){if(this.Ho())return this.close(0)}t_(){this.Wo&&(this.Wo.cancel(),this.Wo=null)}n_(){this.Go&&(this.Go.cancel(),this.Go=null)}async close(t,e){this.t_(),this.n_(),this.zo.cancel(),this.Uo++,4!==t?this.zo.reset():e&&e.code===ro.RESOURCE_EXHAUSTED?(Xi(e.toString()),Xi("Using maximum backoff delay to prevent overloading the backend."),this.zo.Lo()):e&&e.code===ro.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.r_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.Io(e)}r_(){}auth(){this.state=1;const t=this.i_(this.Uo),e=this.Uo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([t,n])=>{this.Uo===e&&this.s_(t,n)}),(e=>{t((()=>{const t=new so(ro.UNKNOWN,"Fetching auth token failed: "+e.message);return this.o_(t)}))}))}s_(t,e){const n=this.i_(this.Uo);this.stream=this.__(t,e),this.stream.ho((()=>{n((()=>(this.state=2,this.Go=this.si.enqueueAfterDelay(this.$o,1e4,(()=>(this.Ho()&&(this.state=3),Promise.resolve()))),this.listener.ho())))})),this.stream.Io((t=>{n((()=>this.o_(t)))})),this.stream.onMessage((t=>{n((()=>this.onMessage(t)))}))}Jo(){this.state=5,this.zo.ko((async()=>{this.state=0,this.start()}))}o_(t){return Ji("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}i_(t){return e=>{this.si.enqueueAndForget((()=>this.Uo===t?e():(Ji("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class pl extends hl{constructor(t,e,n,i,o,r){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,n,i,r),this.serializer=o}__(t,e){return this.connection.vo("Listen",t,e)}onMessage(t){this.zo.reset();const e=tc(this.serializer,t),n=function(t){if(!("targetChange"in t))return Ao.min();const e=t.targetChange;return e.targetIds&&e.targetIds.length?Ao.min():e.readTime?qa(e.readTime):Ao.min()}(t);return this.listener.a_(e,n)}u_(t){const e={};e.database=Qa(this.serializer),e.addTarget=function(t,e){let n;const i=e.target;if(n=ns(i)?{documents:ic(t,i)}:{query:oc(t,i)},n.targetId=e.targetId,e.resumeToken.approximateByteSize()>0){n.resumeToken=Ua(t,e.resumeToken);const i=Fa(t,e.expectedCount);null!==i&&(n.expectedCount=i)}else if(e.snapshotVersion.compareTo(Ao.min())>0){n.readTime=Va(t,e.snapshotVersion.toTimestamp());const i=Fa(t,e.expectedCount);null!==i&&(n.expectedCount=i)}return n}(this.serializer,t);const n=sc(this.serializer,t);n&&(e.labels=n),this.e_(e)}c_(t){const e={};e.database=Qa(this.serializer),e.removeTarget=t,this.e_(e)}}class fl extends hl{constructor(t,e,n,i,o,r){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,n,i,r),this.serializer=o,this.l_=!1}get h_(){return this.l_}start(){this.l_=!1,this.lastStreamToken=void 0,super.start()}r_(){this.l_&&this.P_([])}__(t,e){return this.connection.vo("Write",t,e)}onMessage(t){if(io(!!t.streamToken),this.lastStreamToken=t.streamToken,this.l_){this.zo.reset();const e=nc(t.writeResults,t.commitTime),n=qa(t.commitTime);return this.listener.I_(n,e)}return io(!t.writeResults||0===t.writeResults.length),this.l_=!0,this.listener.T_()}E_(){const t={};t.database=Qa(this.serializer),this.e_(t)}P_(t){const e={streamToken:this.lastStreamToken,writes:t.map((t=>ec(this.serializer,t)))};this.e_(e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gl extends class{}{constructor(t,e,n,i){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=n,this.serializer=i,this.d_=!1}A_(){if(this.d_)throw new so(ro.FAILED_PRECONDITION,"The client has already been terminated.")}wo(t,e,n){return this.A_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([i,o])=>this.connection.wo(t,e,n,i,o))).catch((t=>{throw"FirebaseError"===t.name?(t.code===ro.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),t):new so(ro.UNKNOWN,t.toString())}))}Co(t,e,n,i){return this.A_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([o,r])=>this.connection.Co(t,e,n,o,r,i))).catch((t=>{throw"FirebaseError"===t.name?(t.code===ro.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),t):new so(ro.UNKNOWN,t.toString())}))}terminate(){this.d_=!0}}class ml{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.V_=0,this.m_=null,this.f_=!0}g_(){0===this.V_&&(this.p_("Unknown"),this.m_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.m_=null,this.y_("Backend didn't respond within 10 seconds."),this.p_("Offline"),Promise.resolve()))))}w_(t){"Online"===this.state?this.p_("Unknown"):(this.V_++,this.V_>=1&&(this.S_(),this.y_(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.p_("Offline")))}set(t){this.S_(),this.V_=0,"Online"===t&&(this.f_=!1),this.p_(t)}p_(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}y_(t){const e=`Could not reach Cloud Firestore backend. ${t}\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.f_?(Xi(e),this.f_=!1):Ji("OnlineStateTracker",e)}S_(){null!==this.m_&&(this.m_.cancel(),this.m_=null)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kl{constructor(t,e,n,i,o){this.localStore=t,this.datastore=e,this.asyncQueue=n,this.remoteSyncer={},this.b_=[],this.D_=new Map,this.C_=new Set,this.v_=[],this.F_=o,this.F_.ro((t=>{n.enqueueAndForget((async()=>{xl(this)&&(Ji("RemoteStore","Restarting streams for network reachability change."),await async function(t){const e=oo(t);e.C_.add(4),await wl(e),e.M_.set("Unknown"),e.C_.delete(4),await bl(e)}(this))}))})),this.M_=new ml(n,i)}}async function bl(t){if(xl(t))for(const e of t.v_)await e(!0)}async function wl(t){for(const e of t.v_)await e(!1)}function vl(t,e){const n=oo(t);n.D_.has(e.targetId)||(n.D_.set(e.targetId,e),El(n)?yl(n):ql(n).Ho()&&Al(n,e))}function _l(t,e){const n=oo(t),i=ql(n);n.D_.delete(e),i.Ho()&&Cl(n,e),0===n.D_.size&&(i.Ho()?i.Zo():xl(n)&&n.M_.set("Unknown"))}function Al(t,e){if(t.x_.Oe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Ao.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}ql(t).u_(e)}function Cl(t,e){t.x_.Oe(e),ql(t).c_(e)}function yl(t){t.x_=new Oa({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),_t:e=>t.D_.get(e)||null,nt:()=>t.datastore.serializer.databaseId}),ql(t).start(),t.M_.g_()}function El(t){return xl(t)&&!ql(t).jo()&&t.D_.size>0}function xl(t){return 0===oo(t).C_.size}function Il(t){t.x_=void 0}async function Tl(t){t.D_.forEach(((e,n)=>{Al(t,e)}))}async function Dl(t,e){Il(t),El(t)?(t.M_.w_(e),yl(t)):t.M_.set("Unknown")}async function Sl(t,e,n){if(t.M_.set("Online"),e instanceof Ma&&2===e.state&&e.cause)try{await async function(t,e){const n=e.cause;for(const i of e.targetIds)t.D_.has(i)&&(await t.remoteSyncer.rejectListen(i,n),t.D_.delete(i),t.x_.removeTarget(i))}(t,e)}catch(n){Ji("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),n),await Ml(t,n)}else if(e instanceof Da?t.x_.$e(e):e instanceof Sa?t.x_.Je(e):t.x_.Ge(e),!n.isEqual(Ao.min()))try{const e=await $c(t.localStore);n.compareTo(e)>=0&&await function(t,e){const n=t.x_.it(e);return n.targetChanges.forEach(((n,i)=>{if(n.resumeToken.approximateByteSize()>0){const o=t.D_.get(i);o&&t.D_.set(i,o.withResumeToken(n.resumeToken,e))}})),n.targetMismatches.forEach(((e,n)=>{const i=t.D_.get(e);if(!i)return;t.D_.set(e,i.withResumeToken(er.EMPTY_BYTE_STRING,i.snapshotVersion)),Cl(t,e);const o=new mc(i.target,e,n,i.sequenceNumber);Al(t,o)})),t.remoteSyncer.applyRemoteEvent(n)}(t,n)}catch(e){Ji("RemoteStore","Failed to raise snapshot:",e),await Ml(t,e)}}async function Ml(t,e,n){if(!Ro(e))throw e;t.C_.add(1),await wl(t),t.M_.set("Offline"),n||(n=()=>$c(t.localStore)),t.asyncQueue.enqueueRetryable((async()=>{Ji("RemoteStore","Retrying IndexedDB access"),await n(),t.C_.delete(1),await bl(t)}))}function Nl(t,e){return e().catch((n=>Ml(t,n,e)))}async function Ol(t){const e=oo(t),n=$l(e);let i=e.b_.length>0?e.b_[e.b_.length-1].batchId:-1;for(;Pl(e);)try{const t=await Kc(e.localStore,i);if(null===t){0===e.b_.length&&n.Zo();break}i=t.batchId,Bl(e,t)}catch(t){await Ml(e,t)}Ll(e)&&Rl(e)}function Pl(t){return xl(t)&&t.b_.length<10}function Bl(t,e){t.b_.push(e);const n=$l(t);n.Ho()&&n.h_&&n.P_(e.mutations)}function Ll(t){return xl(t)&&!$l(t).jo()&&t.b_.length>0}function Rl(t){$l(t).start()}async function jl(t){$l(t).E_()}async function zl(t){const e=$l(t);for(const n of t.b_)e.P_(n.mutations)}async function Fl(t,e,n){const i=t.b_.shift(),o=pa.from(i,e,n);await Nl(t,(()=>t.remoteSyncer.applySuccessfulWrite(o))),await Ol(t)}async function Vl(t,e){e&&$l(t).h_&&await async function(t,e){if(function(t){return ba(t)&&t!==ro.ABORTED}(e.code)){const n=t.b_.shift();$l(t).Yo(),await Nl(t,(()=>t.remoteSyncer.rejectFailedWrite(n.batchId,e))),await Ol(t)}}(t,e),Ll(t)&&Rl(t)}async function Ul(t,e){const n=oo(t);n.asyncQueue.verifyOperationInProgress(),Ji("RemoteStore","RemoteStore received new credentials");const i=xl(n);n.C_.add(3),await wl(n),i&&n.M_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.C_.delete(3),await bl(n)}async function Hl(t,e){const n=oo(t);e?(n.C_.delete(2),await bl(n)):e||(n.C_.add(2),await wl(n),n.M_.set("Unknown"))}function ql(t){return t.O_||(t.O_=function(t,e,n){const i=oo(t);return i.A_(),new pl(e,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,n)
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}(t.datastore,t.asyncQueue,{ho:Tl.bind(null,t),Io:Dl.bind(null,t),a_:Sl.bind(null,t)}),t.v_.push((async e=>{e?(t.O_.Yo(),El(t)?yl(t):t.M_.set("Unknown")):(await t.O_.stop(),Il(t))}))),t.O_}function $l(t){return t.N_||(t.N_=function(t,e,n){const i=oo(t);return i.A_(),new fl(e,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,n)}(t.datastore,t.asyncQueue,{ho:jl.bind(null,t),Io:Vl.bind(null,t),T_:zl.bind(null,t),I_:Fl.bind(null,t)}),t.v_.push((async e=>{e?(t.N_.Yo(),await Ol(t)):(await t.N_.stop(),t.b_.length>0&&(Ji("RemoteStore",`Stopping write stream with ${t.b_.length} pending writes`),t.b_=[]))}))),t.N_
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class Gl{constructor(t,e,n,i,o){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=n,this.op=i,this.removalCallback=o,this.deferred=new ao,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((t=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(t,e,n,i,o){const r=Date.now()+n,s=new Gl(t,e,r,i,o);return s.start(n),s}start(t){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new so(ro.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then((t=>this.deferred.resolve(t)))):Promise.resolve()))}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Wl(t,e){if(Xi("AsyncQueue",`${e}: ${t}`),Ro(t))return new so(ro.UNAVAILABLE,`${e}: ${t}`);throw t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kl{constructor(t){this.comparator=t?(e,n)=>t(e,n)||Io.comparator(e.key,n.key):(t,e)=>Io.comparator(t.key,e.key),this.keyedMap=ys(),this.sortedSet=new Ko(this.comparator)}static emptySet(t){return new Kl(t.comparator)}has(t){return null!=this.keyedMap.get(t)}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal(((e,n)=>(t(e),!1)))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof Kl))return!1;if(this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),n=t.sortedSet.getIterator();for(;e.hasNext();){const t=e.getNext().key,i=n.getNext().key;if(!t.isEqual(i))return!1}return!0}toString(){const t=[];return this.forEach((e=>{t.push(e.toString())})),0===t.length?"DocumentSet ()":"DocumentSet (\n  "+t.join("  \n")+"\n)"}copy(t,e){const n=new Kl;return n.comparator=this.comparator,n.keyedMap=t,n.sortedSet=e,n}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zl{constructor(){this.B_=new Ko(Io.comparator)}track(t){const e=t.doc.key,n=this.B_.get(e);n?0!==t.type&&3===n.type?this.B_=this.B_.insert(e,t):3===t.type&&1!==n.type?this.B_=this.B_.insert(e,{type:n.type,doc:t.doc}):2===t.type&&2===n.type?this.B_=this.B_.insert(e,{type:2,doc:t.doc}):2===t.type&&0===n.type?this.B_=this.B_.insert(e,{type:0,doc:t.doc}):1===t.type&&0===n.type?this.B_=this.B_.remove(e):1===t.type&&2===n.type?this.B_=this.B_.insert(e,{type:1,doc:n.doc}):0===t.type&&1===n.type?this.B_=this.B_.insert(e,{type:2,doc:t.doc}):no():this.B_=this.B_.insert(e,t)}L_(){const t=[];return this.B_.inorderTraversal(((e,n)=>{t.push(n)})),t}}class Yl{constructor(t,e,n,i,o,r,s,a,c){this.query=t,this.docs=e,this.oldDocs=n,this.docChanges=i,this.mutatedKeys=o,this.fromCache=r,this.syncStateChanged=s,this.excludesMetadataChanges=a,this.hasCachedResults=c}static fromInitialDocuments(t,e,n,i,o){const r=[];return e.forEach((t=>{r.push({type:0,doc:t})})),new Yl(t,e,Kl.emptySet(e),r,n,i,!0,!1,o)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&ps(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,n=t.docChanges;if(e.length!==n.length)return!1;for(let i=0;i<e.length;i++)if(e[i].type!==n[i].type||!e[i].doc.isEqual(n[i].doc))return!1;return!0}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ql{constructor(){this.k_=void 0,this.listeners=[]}}class Jl{constructor(){this.queries=new vs((t=>fs(t)),ps),this.onlineState="Unknown",this.q_=new Set}}async function Xl(t,e){const n=oo(t),i=e.query;let o=!1,r=n.queries.get(i);if(r||(o=!0,r=new Ql),o)try{r.k_=await n.onListen(i)}catch(t){const n=Wl(t,`Initialization of query '${gs(e.query)}' failed`);return void e.onError(n)}n.queries.set(i,r),r.listeners.push(e),e.Q_(n.onlineState),r.k_&&e.K_(r.k_)&&iu(n)}async function tu(t,e){const n=oo(t),i=e.query;let o=!1;const r=n.queries.get(i);if(r){const t=r.listeners.indexOf(e);t>=0&&(r.listeners.splice(t,1),o=0===r.listeners.length)}if(o)return n.queries.delete(i),n.onUnlisten(i)}function eu(t,e){const n=oo(t);let i=!1;for(const o of e){const t=o.query,e=n.queries.get(t);if(e){for(const t of e.listeners)t.K_(o)&&(i=!0);e.k_=o}}i&&iu(n)}function nu(t,e,n){const i=oo(t),o=i.queries.get(e);if(o)for(const r of o.listeners)r.onError(n);i.queries.delete(e)}function iu(t){t.q_.forEach((t=>{t.next()}))}class ou{constructor(t,e,n){this.query=t,this.U_=e,this.W_=!1,this.G_=null,this.onlineState="Unknown",this.options=n||{}}K_(t){if(!this.options.includeMetadataChanges){const e=[];for(const n of t.docChanges)3!==n.type&&e.push(n);t=new Yl(t.query,t.docs,t.oldDocs,e,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let e=!1;return this.W_?this.z_(t)&&(this.U_.next(t),e=!0):this.j_(t,this.onlineState)&&(this.H_(t),e=!0),this.G_=t,e}onError(t){this.U_.error(t)}Q_(t){this.onlineState=t;let e=!1;return this.G_&&!this.W_&&this.j_(this.G_,t)&&(this.H_(this.G_),e=!0),e}j_(t,e){if(!t.fromCache)return!0;const n="Offline"!==e;return(!this.options.J_||!n)&&(!t.docs.isEmpty()||t.hasCachedResults||"Offline"===e)}z_(t){if(t.docChanges.length>0)return!0;const e=this.G_&&this.G_.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&!0===this.options.includeMetadataChanges}H_(t){t=Yl.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.W_=!0,this.U_.next(t)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ru{constructor(t){this.key=t}}class su{constructor(t){this.key=t}}class au{constructor(t,e){this.query=t,this.ia=e,this.sa=null,this.hasCachedResults=!1,this.current=!1,this.oa=Ms(),this.mutatedKeys=Ms(),this._a=bs(t),this.aa=new Kl(this._a)}get ua(){return this.ia}ca(t,e){const n=e?e.la:new Zl,i=e?e.aa:this.aa;let o=e?e.mutatedKeys:this.mutatedKeys,r=i,s=!1;const a="F"===this.query.limitType&&i.size===this.query.limit?i.last():null,c="L"===this.query.limitType&&i.size===this.query.limit?i.first():null;if(t.inorderTraversal(((t,e)=>{const l=i.get(t),u=ms(this.query,e)?e:null,d=!!l&&this.mutatedKeys.has(l.key),h=!!u&&(u.hasLocalMutations||this.mutatedKeys.has(u.key)&&u.hasCommittedMutations);let p=!1;l&&u?l.data.isEqual(u.data)?d!==h&&(n.track({type:3,doc:u}),p=!0):this.ha(l,u)||(n.track({type:2,doc:u}),p=!0,(a&&this._a(u,a)>0||c&&this._a(u,c)<0)&&(s=!0)):!l&&u?(n.track({type:0,doc:u}),p=!0):l&&!u&&(n.track({type:1,doc:l}),p=!0,(a||c)&&(s=!0)),p&&(u?(r=r.add(u),o=h?o.add(t):o.delete(t)):(r=r.delete(t),o=o.delete(t)))})),null!==this.query.limit)for(;r.size>this.query.limit;){const t="F"===this.query.limitType?r.last():r.first();r=r.delete(t.key),o=o.delete(t.key),n.track({type:1,doc:t})}return{aa:r,la:n,Zi:s,mutatedKeys:o}}ha(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,n,i){const o=this.aa;this.aa=t.aa,this.mutatedKeys=t.mutatedKeys;const r=t.la.L_();r.sort(((t,e)=>function(t,e){const n=t=>{switch(t){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return no()}};return n(t)-n(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t.type,e.type)||this._a(t.doc,e.doc))),this.Pa(n),i=null!=i&&i;const s=e&&!i?this.Ia():[],a=0===this.oa.size&&this.current&&!i?1:0,c=a!==this.sa;return this.sa=a,0!==r.length||c?{snapshot:new Yl(this.query,t.aa,o,r,t.mutatedKeys,0===a,c,!1,!!n&&n.resumeToken.approximateByteSize()>0),Ta:s}:{Ta:s}}Q_(t){return this.current&&"Offline"===t?(this.current=!1,this.applyChanges({aa:this.aa,la:new Zl,mutatedKeys:this.mutatedKeys,Zi:!1},!1)):{Ta:[]}}Ea(t){return!this.ia.has(t)&&!!this.aa.has(t)&&!this.aa.get(t).hasLocalMutations}Pa(t){t&&(t.addedDocuments.forEach((t=>this.ia=this.ia.add(t))),t.modifiedDocuments.forEach((t=>{})),t.removedDocuments.forEach((t=>this.ia=this.ia.delete(t))),this.current=t.current)}Ia(){if(!this.current)return[];const t=this.oa;this.oa=Ms(),this.aa.forEach((t=>{this.Ea(t.key)&&(this.oa=this.oa.add(t.key))}));const e=[];return t.forEach((t=>{this.oa.has(t)||e.push(new su(t))})),this.oa.forEach((n=>{t.has(n)||e.push(new ru(n))})),e}da(t){this.ia=t.ls,this.oa=Ms();const e=this.ca(t.documents);return this.applyChanges(e,!0)}Aa(){return Yl.fromInitialDocuments(this.query,this.aa,this.mutatedKeys,0===this.sa,this.hasCachedResults)}}class cu{constructor(t,e,n){this.query=t,this.targetId=e,this.view=n}}class lu{constructor(t){this.key=t,this.Ra=!1}}class uu{constructor(t,e,n,i,o,r){this.localStore=t,this.remoteStore=e,this.eventManager=n,this.sharedClientState=i,this.currentUser=o,this.maxConcurrentLimboResolutions=r,this.Va={},this.ma=new vs((t=>fs(t)),ps),this.fa=new Map,this.ga=new Set,this.pa=new Ko(Io.comparator),this.ya=new Map,this.wa=new Dc,this.Sa={},this.ba=new Map,this.Da=Cc.Nn(),this.onlineState="Unknown",this.Ca=void 0}get isPrimaryClient(){return!0===this.Ca}}async function du(t,e){const n=Su(t);let i,o;const r=n.ma.get(e);if(r)i=r.targetId,n.sharedClientState.addLocalQueryTarget(i),o=r.view.Aa();else{const t=await Zc(n.localStore,ls(e)),r=n.sharedClientState.addLocalQueryTarget(t.targetId);i=t.targetId,o=await hu(n,e,i,"current"===r,t.resumeToken),n.isPrimaryClient&&vl(n.remoteStore,t)}return o}async function hu(t,e,n,i,o){t.va=(e,n,i)=>async function(t,e,n,i){let o=e.view.ca(n);o.Zi&&(o=await Qc(t.localStore,e.query,!1).then((({documents:t})=>e.view.ca(t,o))));const r=i&&i.targetChanges.get(e.targetId),s=i&&null!=i.targetMismatches.get(e.targetId),a=e.view.applyChanges(o,t.isPrimaryClient,r,s);return yu(t,e.targetId,a.Ta),a.snapshot}(t,e,n,i);const r=await Qc(t.localStore,e,!0),s=new au(e,r.ls),a=s.ca(r.documents),c=Ta.createSynthesizedTargetChangeForCurrentChange(n,i&&"Offline"!==t.onlineState,o),l=s.applyChanges(a,t.isPrimaryClient,c);yu(t,n,l.Ta);const u=new cu(e,n,s);return t.ma.set(e,u),t.fa.has(n)?t.fa.get(n).push(e):t.fa.set(n,[e]),l.snapshot}async function pu(t,e){const n=oo(t),i=n.ma.get(e),o=n.fa.get(i.targetId);if(o.length>1)return n.fa.set(i.targetId,o.filter((t=>!ps(t,e)))),void n.ma.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(i.targetId),n.sharedClientState.isActiveQueryTarget(i.targetId)||await Yc(n.localStore,i.targetId,!1).then((()=>{n.sharedClientState.clearQueryState(i.targetId),_l(n.remoteStore,i.targetId),Au(n,i.targetId)})).catch(Bo)):(Au(n,i.targetId),await Yc(n.localStore,i.targetId,!0))}async function fu(t,e,n){const i=Mu(t);try{const t=await function(t,e){const n=oo(t),i=_o.now(),o=e.reduce(((t,e)=>t.add(e.key)),Ms());let r,s;return n.persistence.runTransaction("Locally write mutations","readwrite",(t=>{let a=As(),c=Ms();return n.ss.getEntries(t,o).next((t=>{a=t,a.forEach(((t,e)=>{e.isValidDocument()||(c=c.add(t))}))})).next((()=>n.localDocuments.getOverlayedDocuments(t,a))).next((o=>{r=o;const s=[];for(const t of e){const e=ia(t,r.get(t.key).overlayedDocument);null!=e&&s.push(new sa(t.key,e,Tr(e.value.mapValue),Qs.exists(!0)))}return n.mutationQueue.addMutationBatch(t,i,s,e)})).next((e=>{s=e;const i=e.applyToLocalDocumentSet(r,c);return n.documentOverlayCache.saveOverlays(t,e.batchId,i)}))})).then((()=>({batchId:s.batchId,changes:Es(r)})))}(i.localStore,e);i.sharedClientState.addPendingMutation(t.batchId),function(t,e,n){let i=t.Sa[t.currentUser.toKey()];i||(i=new Ko(wo)),i=i.insert(e,n),t.Sa[t.currentUser.toKey()]=i}(i,t.batchId,n),await Iu(i,t.changes),await Ol(i.remoteStore)}catch(t){const e=Wl(t,"Failed to persist write");n.reject(e)}}async function gu(t,e){const n=oo(t);try{const t=await Gc(n.localStore,e);e.targetChanges.forEach(((t,e)=>{const i=n.ya.get(e);i&&(io(t.addedDocuments.size+t.modifiedDocuments.size+t.removedDocuments.size<=1),t.addedDocuments.size>0?i.Ra=!0:t.modifiedDocuments.size>0?io(i.Ra):t.removedDocuments.size>0&&(io(i.Ra),i.Ra=!1))})),await Iu(n,t,e)}catch(t){await Bo(t)}}function mu(t,e,n){const i=oo(t);if(i.isPrimaryClient&&0===n||!i.isPrimaryClient&&1===n){const t=[];i.ma.forEach(((n,i)=>{const o=i.view.Q_(e);o.snapshot&&t.push(o.snapshot)})),function(t,e){const n=oo(t);n.onlineState=e;let i=!1;n.queries.forEach(((t,n)=>{for(const o of n.listeners)o.Q_(e)&&(i=!0)})),i&&iu(n)}(i.eventManager,e),t.length&&i.Va.a_(t),i.onlineState=e,i.isPrimaryClient&&i.sharedClientState.setOnlineState(e)}}async function ku(t,e,n){const i=oo(t);i.sharedClientState.updateQueryState(e,"rejected",n);const o=i.ya.get(e),r=o&&o.key;if(r){let t=new Ko(Io.comparator);t=t.insert(r,Dr.newNoDocument(r,Ao.min()));const n=Ms().add(r),o=new Ia(Ao.min(),new Map,new Ko(wo),t,n);await gu(i,o),i.pa=i.pa.remove(r),i.ya.delete(e),xu(i)}else await Yc(i.localStore,e,!1).then((()=>Au(i,e,n))).catch(Bo)}async function bu(t,e){const n=oo(t),i=e.batch.batchId;try{const t=await qc(n.localStore,e);_u(n,i,null),vu(n,i),n.sharedClientState.updateMutationState(i,"acknowledged"),await Iu(n,t)}catch(t){await Bo(t)}}async function wu(t,e,n){const i=oo(t);try{const t=await function(t,e){const n=oo(t);return n.persistence.runTransaction("Reject batch","readwrite-primary",(t=>{let i;return n.mutationQueue.lookupMutationBatch(t,e).next((e=>(io(null!==e),i=e.keys(),n.mutationQueue.removeMutationBatch(t,e)))).next((()=>n.mutationQueue.performConsistencyCheck(t))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(t,i,e))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(t,i))).next((()=>n.localDocuments.getDocuments(t,i)))}))}(i.localStore,e);_u(i,e,n),vu(i,e),i.sharedClientState.updateMutationState(e,"rejected",n),await Iu(i,t)}catch(n){await Bo(n)}}function vu(t,e){(t.ba.get(e)||[]).forEach((t=>{t.resolve()})),t.ba.delete(e)}function _u(t,e,n){const i=oo(t);let o=i.Sa[i.currentUser.toKey()];if(o){const t=o.get(e);t&&(n?t.reject(n):t.resolve(),o=o.remove(e)),i.Sa[i.currentUser.toKey()]=o}}function Au(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const i of t.fa.get(e))t.ma.delete(i),n&&t.Va.Fa(i,n);t.fa.delete(e),t.isPrimaryClient&&t.wa.Rr(e).forEach((e=>{t.wa.containsKey(e)||Cu(t,e)}))}function Cu(t,e){t.ga.delete(e.path.canonicalString());const n=t.pa.get(e);null!==n&&(_l(t.remoteStore,n),t.pa=t.pa.remove(e),t.ya.delete(n),xu(t))}function yu(t,e,n){for(const i of n)i instanceof ru?(t.wa.addReference(i.key,e),Eu(t,i)):i instanceof su?(Ji("SyncEngine","Document no longer in limbo: "+i.key),t.wa.removeReference(i.key,e),t.wa.containsKey(i.key)||Cu(t,i.key)):no()}function Eu(t,e){const n=e.key,i=n.path.canonicalString();t.pa.get(n)||t.ga.has(i)||(Ji("SyncEngine","New document in limbo: "+n),t.ga.add(i),xu(t))}function xu(t){for(;t.ga.size>0&&t.pa.size<t.maxConcurrentLimboResolutions;){const e=t.ga.values().next().value;t.ga.delete(e);const n=new Io(yo.fromString(e)),i=t.Da.next();t.ya.set(i,new lu(n)),t.pa=t.pa.insert(n,i),vl(t.remoteStore,new mc(ls(rs(n.path)),i,"TargetPurposeLimboResolution",jo._e))}}async function Iu(t,e,n){const i=oo(t),o=[],r=[],s=[];i.ma.isEmpty()||(i.ma.forEach(((t,a)=>{s.push(i.va(a,e,n).then((t=>{if((t||n)&&i.isPrimaryClient&&i.sharedClientState.updateQueryState(a.targetId,(null==t?void 0:t.fromCache)?"not-current":"current"),t){o.push(t);const e=jc.Qi(a.targetId,t);r.push(e)}})))})),await Promise.all(s),i.Va.a_(o),await async function(t,e){const n=oo(t);try{await n.persistence.runTransaction("notifyLocalViewChanges","readwrite",(t=>Lo.forEach(e,(e=>Lo.forEach(e.ki,(i=>n.persistence.referenceDelegate.addReference(t,e.targetId,i))).next((()=>Lo.forEach(e.qi,(i=>n.persistence.referenceDelegate.removeReference(t,e.targetId,i)))))))))}catch(t){if(!Ro(t))throw t;Ji("LocalStore","Failed to update sequence numbers: "+t)}for(const i of e){const t=i.targetId;if(!i.fromCache){const e=n.ts.get(t),i=e.snapshotVersion,o=e.withLastLimboFreeSnapshotVersion(i);n.ts=n.ts.insert(t,o)}}}(i.localStore,r))}async function Tu(t,e){const n=oo(t);if(!n.currentUser.isEqual(e)){Ji("SyncEngine","User change. New user:",e.toKey());const t=await Hc(n.localStore,e);n.currentUser=e,function(t,e){t.ba.forEach((t=>{t.forEach((t=>{t.reject(new so(ro.CANCELLED,e))}))})),t.ba.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,t.removedBatchIds,t.addedBatchIds),await Iu(n,t._s)}}function Du(t,e){const n=oo(t),i=n.ya.get(e);if(i&&i.Ra)return Ms().add(i.key);{let t=Ms();const i=n.fa.get(e);if(!i)return t;for(const e of i){const i=n.ma.get(e);t=t.unionWith(i.view.ua)}return t}}function Su(t){const e=oo(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=gu.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=Du.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=ku.bind(null,e),e.Va.a_=eu.bind(null,e.eventManager),e.Va.Fa=nu.bind(null,e.eventManager),e}function Mu(t){const e=oo(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=bu.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=wu.bind(null,e),e}class Nu{constructor(){this.synchronizeTabs=!1}async initialize(t){this.serializer=ul(t.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(t),this.persistence=this.createPersistence(t),await this.persistence.start(),this.localStore=this.createLocalStore(t),this.gcScheduler=this.createGarbageCollectionScheduler(t,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(t,this.localStore)}createGarbageCollectionScheduler(t,e){return null}createIndexBackfillerScheduler(t,e){return null}createLocalStore(t){return Uc(this.persistence,new Fc,t.initialUser,this.serializer)}createPersistence(t){return new Bc(Rc.jr,this.serializer)}createSharedClientState(t){return new tl}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class Ou{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=t=>mu(this.syncEngine,t,1),this.remoteStore.remoteSyncer.handleCredentialChange=Tu.bind(null,this.syncEngine),await Hl(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new Jl}()}createDatastore(t){const e=ul(t.databaseInfo.databaseId),n=function(t){return new cl(t)}(t.databaseInfo);return function(t,e,n,i){return new gl(t,e,n,i)}(t.authCredentials,t.appCheckCredentials,n,e)}createRemoteStore(t){return function(t,e,n,i,o){return new kl(t,e,n,i,o)}(this.localStore,this.datastore,t.asyncQueue,(t=>mu(this.syncEngine,t,0)),function(){return nl.D()?new nl:new el}())}createSyncEngine(t,e){return function(t,e,n,i,o,r,s){const a=new uu(t,e,n,i,o,r);return s&&(a.Ca=!0),a}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}terminate(){return async function(t){const e=oo(t);Ji("RemoteStore","RemoteStore shutting down."),e.C_.add(5),await wl(e),e.F_.shutdown(),e.M_.set("Unknown")}(this.remoteStore)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Pu{constructor(t){this.observer=t,this.muted=!1}next(t){this.observer.next&&this.Oa(this.observer.next,t)}error(t){this.observer.error?this.Oa(this.observer.error,t):Xi("Uncaught Error in snapshot listener:",t.toString())}Na(){this.muted=!0}Oa(t,e){this.muted||setTimeout((()=>{this.muted||t(e)}),0)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Bu{constructor(t,e,n,i){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=n,this.databaseInfo=i,this.user=Ki.UNAUTHENTICATED,this.clientId=bo.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(n,(async t=>{Ji("FirestoreClient","Received user=",t.uid),await this.authCredentialListener(t),this.user=t})),this.appCheckCredentials.start(n,(t=>(Ji("FirestoreClient","Received new app check token=",t),this.appCheckCredentialListener(t,this.user))))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new so(ro.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new ao;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const n=Wl(e,"Failed to shutdown persistence");t.reject(n)}})),t.promise}}async function Lu(t,e){t.asyncQueue.verifyOperationInProgress(),Ji("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let i=n.initialUser;t.setCredentialChangeListener((async t=>{i.isEqual(t)||(await Hc(e.localStore,t),i=t)})),e.persistence.setDatabaseDeletedListener((()=>t.terminate())),t._offlineComponents=e}async function Ru(t,e){t.asyncQueue.verifyOperationInProgress();const n=await zu(t);Ji("FirestoreClient","Initializing OnlineComponentProvider");const i=await t.getConfiguration();await e.initialize(n,i),t.setCredentialChangeListener((t=>Ul(e.remoteStore,t))),t.setAppCheckTokenChangeListener(((t,n)=>Ul(e.remoteStore,n))),t._onlineComponents=e}function ju(t){return"FirebaseError"===t.name?t.code===ro.FAILED_PRECONDITION||t.code===ro.UNIMPLEMENTED:!("undefined"!=typeof DOMException&&t instanceof DOMException)||22===t.code||20===t.code||11===t.code}async function zu(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){Ji("FirestoreClient","Using user provided OfflineComponentProvider");try{await Lu(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!ju(n))throw n;to("Error using user provided cache. Falling back to memory cache: "+n),await Lu(t,new Nu)}}else Ji("FirestoreClient","Using default OfflineComponentProvider"),await Lu(t,new Nu);return t._offlineComponents}async function Fu(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(Ji("FirestoreClient","Using user provided OnlineComponentProvider"),await Ru(t,t._uninitializedComponentsProvider._online)):(Ji("FirestoreClient","Using default OnlineComponentProvider"),await Ru(t,new Ou))),t._onlineComponents}function Vu(t){return Fu(t).then((t=>t.syncEngine))}async function Uu(t){const e=await Fu(t),n=e.eventManager;return n.onListen=du.bind(null,e.syncEngine),n.onUnlisten=pu.bind(null,e.syncEngine),n}function Hu(t,e,n={}){const i=new ao;return t.asyncQueue.enqueueAndForget((async()=>function(t,e,n,i,o){const r=new Pu({next:r=>{e.enqueueAndForget((()=>tu(t,s)));const a=r.docs.has(n);!a&&r.fromCache?o.reject(new so(ro.UNAVAILABLE,"Failed to get document because the client is offline.")):a&&r.fromCache&&i&&"server"===i.source?o.reject(new so(ro.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):o.resolve(r)},error:t=>o.reject(t)}),s=new ou(rs(n.path),r,{includeMetadataChanges:!0,J_:!0});return Xl(t,s)}(await Uu(t),t.asyncQueue,e,n,i))),i.promise}function qu(t,e,n={}){const i=new ao;return t.asyncQueue.enqueueAndForget((async()=>function(t,e,n,i,o){const r=new Pu({next:n=>{e.enqueueAndForget((()=>tu(t,s))),n.fromCache&&"server"===i.source?o.reject(new so(ro.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):o.resolve(n)},error:t=>o.reject(t)}),s=new ou(n,r,{includeMetadataChanges:!0,J_:!0});return Xl(t,s)}(await Uu(t),t.asyncQueue,e,n,i))),i.promise}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function $u(t){const e={};return void 0!==t.timeoutSeconds&&(e.timeoutSeconds=t.timeoutSeconds),e
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}const Gu=new Map;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wu(t,e,n){if(!n)throw new so(ro.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function Ku(t,e,n,i){if(!0===e&&!0===i)throw new so(ro.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Zu(t){if(!Io.isDocumentKey(t))throw new so(ro.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Yu(t){if(Io.isDocumentKey(t))throw new so(ro.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Qu(t){if(void 0===t)return"undefined";if(null===t)return"null";if("string"==typeof t)return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if("number"==typeof t||"boolean"==typeof t)return""+t;if("object"==typeof t){if(t instanceof Array)return"an array";{const e=function(t){return t.constructor?t.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return"function"==typeof t?"a function":no()}function Ju(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new so(ro.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Qu(t);throw new so(ro.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}function Xu(t,e){if(e<=0)throw new so(ro.INVALID_ARGUMENT,`Function ${t}() requires a positive number, but it was: ${e}.`)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class td{constructor(t){var e,n;if(void 0===t.host){if(void 0!==t.ssl)throw new so(ro.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=null===(e=t.ssl)||void 0===e||e;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,void 0===t.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==t.cacheSizeBytes&&t.cacheSizeBytes<1048576)throw new so(ro.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}Ku("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:void 0===t.experimentalAutoDetectLongPolling?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=$u(null!==(n=t.experimentalLongPollingOptions)&&void 0!==n?n:{}),function(t){if(void 0!==t.timeoutSeconds){if(isNaN(t.timeoutSeconds))throw new so(ro.INVALID_ARGUMENT,`invalid long polling timeout: ${t.timeoutSeconds} (must not be NaN)`);if(t.timeoutSeconds<5)throw new so(ro.INVALID_ARGUMENT,`invalid long polling timeout: ${t.timeoutSeconds} (minimum allowed value is 5)`);if(t.timeoutSeconds>30)throw new so(ro.INVALID_ARGUMENT,`invalid long polling timeout: ${t.timeoutSeconds} (maximum allowed value is 30)`)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(t,e){return t.timeoutSeconds===e.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class ed{constructor(t,e,n,i){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=n,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new td({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new so(ro.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(t){if(this._settingsFrozen)throw new so(ro.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new td(t),void 0!==t.credentials&&(this._authCredentials=function(t){if(!t)return new lo;switch(t.type){case"firstParty":return new fo(t.sessionIndex||"0",t.iamToken||null,t.authTokenFactory||null);case"provider":return t.client;default:throw new so(ro.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const e=Gu.get(t);e&&(Ji("ComponentProvider","Removing Datastore"),Gu.delete(t),e.terminate())}(this),Promise.resolve()}}function nd(t,e,n,i={}){var o;const r=(t=Ju(t,ed))._getSettings(),s=`${e}:${n}`;if("firestore.googleapis.com"!==r.host&&r.host!==s&&to("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},r),{host:s,ssl:!1})),i.mockUserToken){let e,n;if("string"==typeof i.mockUserToken)e=i.mockUserToken,n=Ki.MOCK_USER;else{e=(0,a.Sg)(i.mockUserToken,null===(o=t._app)||void 0===o?void 0:o.options.projectId);const r=i.mockUserToken.sub||i.mockUserToken.user_id;if(!r)throw new so(ro.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");n=new Ki(r)}t._authCredentials=new uo(new co(e,n))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class id{constructor(t,e,n){this.converter=e,this._query=n,this.type="query",this.firestore=t}withConverter(t){return new id(this.firestore,t,this._query)}}class od{constructor(t,e,n){this.converter=e,this._key=n,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new rd(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new od(this.firestore,t,this._key)}}class rd extends id{constructor(t,e,n){super(t,e,rs(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new od(this.firestore,null,new Io(t))}withConverter(t){return new rd(this.firestore,t,this._path)}}function sd(t,e,...n){if(t=(0,a.m9)(t),Wu("collection","path",e),t instanceof ed){const i=yo.fromString(e,...n);return Yu(i),new rd(t,null,i)}{if(!(t instanceof od||t instanceof rd))throw new so(ro.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=t._path.child(yo.fromString(e,...n));return Yu(i),new rd(t.firestore,null,i)}}function ad(t,e,...n){if(t=(0,a.m9)(t),1===arguments.length&&(e=bo.newId()),Wu("doc","path",e),t instanceof ed){const i=yo.fromString(e,...n);return Zu(i),new od(t,null,new Io(i))}{if(!(t instanceof od||t instanceof rd))throw new so(ro.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=t._path.child(yo.fromString(e,...n));return Zu(i),new od(t.firestore,t instanceof rd?t.converter:null,new Io(i))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class cd{constructor(){this.Ja=Promise.resolve(),this.Ya=[],this.Za=!1,this.Xa=[],this.eu=null,this.tu=!1,this.nu=!1,this.ru=[],this.zo=new dl(this,"async_queue_retry"),this.iu=()=>{const t=ll();t&&Ji("AsyncQueue","Visibility state changed to "+t.visibilityState),this.zo.Qo()};const t=ll();t&&"function"==typeof t.addEventListener&&t.addEventListener("visibilitychange",this.iu)}get isShuttingDown(){return this.Za}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.su(),this.ou(t)}enterRestrictedMode(t){if(!this.Za){this.Za=!0,this.nu=t||!1;const e=ll();e&&"function"==typeof e.removeEventListener&&e.removeEventListener("visibilitychange",this.iu)}}enqueue(t){if(this.su(),this.Za)return new Promise((()=>{}));const e=new ao;return this.ou((()=>this.Za&&this.nu?Promise.resolve():(t().then(e.resolve,e.reject),e.promise))).then((()=>e.promise))}enqueueRetryable(t){this.enqueueAndForget((()=>(this.Ya.push(t),this._u())))}async _u(){if(0!==this.Ya.length){try{await this.Ya[0](),this.Ya.shift(),this.zo.reset()}catch(t){if(!Ro(t))throw t;Ji("AsyncQueue","Operation failed with retryable error: "+t)}this.Ya.length>0&&this.zo.ko((()=>this._u()))}}ou(t){const e=this.Ja.then((()=>(this.tu=!0,t().catch((t=>{this.eu=t,this.tu=!1;const e=function(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+"\n"+t.stack),e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t);throw Xi("INTERNAL UNHANDLED ERROR: ",e),t})).then((t=>(this.tu=!1,t))))));return this.Ja=e,e}enqueueAfterDelay(t,e,n){this.su(),this.ru.indexOf(t)>-1&&(e=0);const i=Gl.createAndSchedule(this,t,e,n,(t=>this.au(t)));return this.Xa.push(i),i}su(){this.eu&&no()}verifyOperationInProgress(){}async uu(){let t;do{t=this.Ja,await t}while(t!==this.Ja)}cu(t){for(const e of this.Xa)if(e.timerId===t)return!0;return!1}lu(t){return this.uu().then((()=>{this.Xa.sort(((t,e)=>t.targetTimeMs-e.targetTimeMs));for(const e of this.Xa)if(e.skipDelay(),"all"!==t&&e.timerId===t)break;return this.uu()}))}hu(t){this.ru.push(t)}au(t){const e=this.Xa.indexOf(t);this.Xa.splice(e,1)}}class ld extends ed{constructor(t,e,n,i){super(t,e,n,i),this.type="firestore",this._queue=function(){return new cd}(),this._persistenceKey=(null==i?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||hd(this),this._firestoreClient.terminate()}}function ud(t,e){const n="object"==typeof t?t:(0,o.Mq)(),i="string"==typeof t?t:e||"(default)",r=(0,o.qX)(n,"firestore").getImmediate({identifier:i});if(!r._initialized){const t=(0,a.P0)("firestore");t&&nd(r,...t)}return r}function dd(t){return t._firestoreClient||hd(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function hd(t){var e,n,i;const o=t._freezeSettings(),r=function(t,e,n,i){return new lr(t,e,n,i.host,i.ssl,i.experimentalForceLongPolling,i.experimentalAutoDetectLongPolling,$u(i.experimentalLongPollingOptions),i.useFetchStreams)}(t._databaseId,(null===(e=t._app)||void 0===e?void 0:e.options.appId)||"",t._persistenceKey,o);t._firestoreClient=new Bu(t._authCredentials,t._appCheckCredentials,t._queue,r),(null===(n=o.localCache)||void 0===n?void 0:n._offlineComponentProvider)&&(null===(i=o.localCache)||void 0===i?void 0:i._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:o.localCache.kind,_offline:o.localCache._offlineComponentProvider,_online:o.localCache._onlineComponentProvider})}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class pd{constructor(t){this._byteString=t}static fromBase64String(t){try{return new pd(er.fromBase64String(t))}catch(t){throw new so(ro.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(t){return new pd(er.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fd{constructor(...t){for(let e=0;e<t.length;++e)if(0===t[e].length)throw new so(ro.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new xo(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class gd{constructor(t){this._methodName=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class md{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new so(ro.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new so(ro.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return wo(this._lat,t._lat)||wo(this._long,t._long)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kd=/^__.*__$/;class bd{constructor(t,e,n){this.data=t,this.fieldMask=e,this.fieldTransforms=n}toMutation(t,e){return null!==this.fieldMask?new sa(t,this.data,this.fieldMask,e,this.fieldTransforms):new ra(t,this.data,e,this.fieldTransforms)}}class wd{constructor(t,e,n){this.data=t,this.fieldMask=e,this.fieldTransforms=n}toMutation(t,e){return new sa(t,this.data,this.fieldMask,e,this.fieldTransforms)}}function vd(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw no()}}class _d{constructor(t,e,n,i,o,r){this.settings=t,this.databaseId=e,this.serializer=n,this.ignoreUndefinedProperties=i,void 0===o&&this.Pu(),this.fieldTransforms=o||[],this.fieldMask=r||[]}get path(){return this.settings.path}get Iu(){return this.settings.Iu}Tu(t){return new _d(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Eu(t){var e;const n=null===(e=this.path)||void 0===e?void 0:e.child(t),i=this.Tu({path:n,du:!1});return i.Au(t),i}Ru(t){var e;const n=null===(e=this.path)||void 0===e?void 0:e.child(t),i=this.Tu({path:n,du:!1});return i.Pu(),i}Vu(t){return this.Tu({path:void 0,du:!0})}mu(t){return Ld(t,this.settings.methodName,this.settings.fu||!1,this.path,this.settings.gu)}contains(t){return void 0!==this.fieldMask.find((e=>t.isPrefixOf(e)))||void 0!==this.fieldTransforms.find((e=>t.isPrefixOf(e.field)))}Pu(){if(this.path)for(let t=0;t<this.path.length;t++)this.Au(this.path.get(t))}Au(t){if(0===t.length)throw this.mu("Document fields must not be empty");if(vd(this.Iu)&&kd.test(t))throw this.mu('Document fields cannot begin and end with "__"')}}class Ad{constructor(t,e,n){this.databaseId=t,this.ignoreUndefinedProperties=e,this.serializer=n||ul(t)}pu(t,e,n,i=!1){return new _d({Iu:t,methodName:e,gu:n,path:xo.emptyPath(),du:!1,fu:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Cd(t){const e=t._freezeSettings(),n=ul(t._databaseId);return new Ad(t._databaseId,!!e.ignoreUndefinedProperties,n)}function yd(t,e,n,i,o,r={}){const s=t.pu(r.merge||r.mergeFields?2:0,e,n,o);Nd("Data must be an object, but it was:",s,i);const a=Sd(i,s);let c,l;if(r.merge)c=new Xo(s.fieldMask),l=s.fieldTransforms;else if(r.mergeFields){const t=[];for(const i of r.mergeFields){const o=Od(e,i,n);if(!s.contains(o))throw new so(ro.INVALID_ARGUMENT,`Field '${o}' is specified in your field mask but missing from your input data.`);Rd(t,o)||t.push(o)}c=new Xo(t),l=s.fieldTransforms.filter((t=>c.covers(t.field)))}else c=null,l=s.fieldTransforms;return new bd(new Ir(a),c,l)}class Ed extends gd{_toFieldTransform(t){if(2!==t.Iu)throw 1===t.Iu?t.mu(`${this._methodName}() can only appear at the top level of your update data`):t.mu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return t.fieldMask.push(t.path),null}isEqual(t){return t instanceof Ed}}function xd(t,e,n,i){const o=t.pu(1,e,n);Nd("Data must be an object, but it was:",o,i);const r=[],s=Ir.empty();Go(i,((t,i)=>{const c=Bd(e,t,n);i=(0,a.m9)(i);const l=o.Ru(c);if(i instanceof Ed)r.push(c);else{const t=Dd(i,l);null!=t&&(r.push(c),s.set(c,t))}}));const c=new Xo(r);return new wd(s,c,o.fieldTransforms)}function Id(t,e,n,i,o,r){const s=t.pu(1,e,n),c=[Od(e,i,n)],l=[o];if(r.length%2!=0)throw new so(ro.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let a=0;a<r.length;a+=2)c.push(Od(e,r[a])),l.push(r[a+1]);const u=[],d=Ir.empty();for(let p=c.length-1;p>=0;--p)if(!Rd(u,c[p])){const t=c[p];let e=l[p];e=(0,a.m9)(e);const n=s.Ru(t);if(e instanceof Ed)u.push(t);else{const i=Dd(e,n);null!=i&&(u.push(t),d.set(t,i))}}const h=new Xo(u);return new wd(d,h,s.fieldTransforms)}function Td(t,e,n,i=!1){return Dd(n,t.pu(i?4:3,e))}function Dd(t,e){if(Md(t=(0,a.m9)(t)))return Nd("Unsupported field value:",e,t),Sd(t,e);if(t instanceof gd)return function(t,e){if(!vd(e.Iu))throw e.mu(`${t._methodName}() can only be used with update() and set()`);if(!e.path)throw e.mu(`${t._methodName}() is not currently supported inside arrays`);const n=t._toFieldTransform(e);n&&e.fieldTransforms.push(n)}(t,e),null;if(void 0===t&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.du&&4!==e.Iu)throw e.mu("Nested arrays are not supported");return function(t,e){const n=[];let i=0;for(const o of t){let t=Dd(o,e.Vu(i));null==t&&(t={nullValue:"NULL_VALUE"}),n.push(t),i++}return{arrayValue:{values:n}}}(t,e)}return function(t,e){if(null===(t=(0,a.m9)(t)))return{nullValue:"NULL_VALUE"};if("number"==typeof t)return Ls(e.serializer,t);if("boolean"==typeof t)return{booleanValue:t};if("string"==typeof t)return{stringValue:t};if(t instanceof Date){const n=_o.fromDate(t);return{timestampValue:Va(e.serializer,n)}}if(t instanceof _o){const n=new _o(t.seconds,1e3*Math.floor(t.nanoseconds/1e3));return{timestampValue:Va(e.serializer,n)}}if(t instanceof md)return{geoPointValue:{latitude:t.latitude,longitude:t.longitude}};if(t instanceof pd)return{bytesValue:Ua(e.serializer,t._byteString)};if(t instanceof od){const n=e.databaseId,i=t.firestore._databaseId;if(!i.isEqual(n))throw e.mu(`Document reference is for database ${i.projectId}/${i.database} but should be for database ${n.projectId}/${n.database}`);return{referenceValue:$a(t.firestore._databaseId||e.databaseId,t._key.path)}}throw e.mu(`Unsupported field value: ${Qu(t)}`)}(t,e)}function Sd(t,e){const n={};return Wo(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Go(t,((t,i)=>{const o=Dd(i,e.Eu(t));null!=o&&(n[t]=o)})),{mapValue:{fields:n}}}function Md(t){return!("object"!=typeof t||null===t||t instanceof Array||t instanceof Date||t instanceof _o||t instanceof md||t instanceof pd||t instanceof od||t instanceof gd)}function Nd(t,e,n){if(!Md(n)||!function(t){return"object"==typeof t&&null!==t&&(Object.getPrototypeOf(t)===Object.prototype||null===Object.getPrototypeOf(t))}(n)){const i=Qu(n);throw"an object"===i?e.mu(t+" a custom object"):e.mu(t+" "+i)}}function Od(t,e,n){if((e=(0,a.m9)(e))instanceof fd)return e._internalPath;if("string"==typeof e)return Bd(t,e);throw Ld("Field path arguments must be of type string or ",t,!1,void 0,n)}const Pd=new RegExp("[~\\*/\\[\\]]");function Bd(t,e,n){if(e.search(Pd)>=0)throw Ld(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new fd(...e.split("."))._internalPath}catch(_){throw Ld(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Ld(t,e,n,i,o){const r=i&&!i.isEmpty(),s=void 0!==o;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(r||s)&&(c+=" (found",r&&(c+=` in field ${i}`),s&&(c+=` in document ${o}`),c+=")"),new so(ro.INVALID_ARGUMENT,a+t+c)}function Rd(t,e){return t.some((t=>t.isEqual(e)))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jd{constructor(t,e,n,i,o){this._firestore=t,this._userDataWriter=e,this._key=n,this._document=i,this._converter=o}get id(){return this._key.path.lastSegment()}get ref(){return new od(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){const t=new zd(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(Fd("DocumentSnapshot.get",t));if(null!==e)return this._userDataWriter.convertValue(e)}}}class zd extends jd{data(){return super.data()}}function Fd(t,e){return"string"==typeof e?Bd(t,e):e instanceof fd?e._internalPath:e._delegate._internalPath}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vd(t){if("L"===t.limitType&&0===t.explicitOrderBy.length)throw new so(ro.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Ud{}class Hd extends Ud{}function qd(t,e,...n){let i=[];e instanceof Ud&&i.push(e),i=i.concat(n),function(t){const e=t.filter((t=>t instanceof Wd)).length,n=t.filter((t=>t instanceof $d)).length;if(e>1||e>0&&n>0)throw new so(ro.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(i);for(const o of i)t=o._apply(t);return t}class $d extends Hd{constructor(t,e,n){super(),this._field=t,this._op=e,this._value=n,this.type="where"}static _create(t,e,n){return new $d(t,e,n)}_apply(t){const e=this._parse(t);return ih(t._query,e),new id(t.firestore,t.converter,ds(t._query,e))}_parse(t){const e=Cd(t.firestore),n=function(t,e,n,i,o,r,s){let a;if(o.isKeyField()){if("array-contains"===r||"array-contains-any"===r)throw new so(ro.INVALID_ARGUMENT,`Invalid Query. You can't perform '${r}' queries on documentId().`);if("in"===r||"not-in"===r){nh(s,r);const e=[];for(const n of s)e.push(eh(i,t,n));a={arrayValue:{values:e}}}else a=eh(i,t,s)}else"in"!==r&&"not-in"!==r&&"array-contains-any"!==r||nh(s,r),a=Td(n,e,s,"in"===r||"not-in"===r);return Lr.create(o,r,a)}(t._query,"where",e,t.firestore._databaseId,this._field,this._op,this._value);return n}}function Gd(t,e,n){const i=e,o=Fd("where",t);return $d._create(o,i,n)}class Wd extends Ud{constructor(t,e){super(),this.type=t,this._queryConstraints=e}static _create(t,e){return new Wd(t,e)}_parse(t){const e=this._queryConstraints.map((e=>e._parse(t))).filter((t=>t.getFilters().length>0));return 1===e.length?e[0]:Rr.create(e,this._getOperator())}_apply(t){const e=this._parse(t);return 0===e.getFilters().length?t:(function(t,e){let n=t;const i=e.getFlattenedFilters();for(const o of i)ih(n,o),n=ds(n,o)}(t._query,e),new id(t.firestore,t.converter,ds(t._query,e)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return"and"===this.type?"and":"or"}}class Kd extends Hd{constructor(t,e){super(),this._field=t,this._direction=e,this.type="orderBy"}static _create(t,e){return new Kd(t,e)}_apply(t){const e=function(t,e,n){if(null!==t.startAt)throw new so(ro.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(null!==t.endAt)throw new so(ro.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Or(e,n)}(t._query,this._field,this._direction);return new id(t.firestore,t.converter,function(t,e){const n=t.explicitOrderBy.concat([e]);return new is(t.path,t.collectionGroup,n,t.filters.slice(),t.limit,t.limitType,t.startAt,t.endAt)}(t._query,e))}}function Zd(t,e="asc"){const n=e,i=Fd("orderBy",t);return Kd._create(i,n)}class Yd extends Hd{constructor(t,e,n){super(),this.type=t,this._limit=e,this._limitType=n}static _create(t,e,n){return new Yd(t,e,n)}_apply(t){return new id(t.firestore,t.converter,hs(t._query,this._limit,this._limitType))}}function Qd(t){return Xu("limit",t),Yd._create("limit",t,"F")}class Jd extends Hd{constructor(t,e,n){super(),this.type=t,this._docOrFields=e,this._inclusive=n}static _create(t,e,n){return new Jd(t,e,n)}_apply(t){const e=th(t,this.type,this._docOrFields,this._inclusive);return new id(t.firestore,t.converter,function(t,e){return new is(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),t.limit,t.limitType,e,t.endAt)}(t._query,e))}}function Xd(...t){return Jd._create("startAfter",t,!1)}function th(t,e,n,i){if(n[0]=(0,a.m9)(n[0]),n[0]instanceof jd)return function(t,e,n,i,o){if(!i)throw new so(ro.NOT_FOUND,`Can't use a DocumentSnapshot that doesn't exist for ${n}().`);const r=[];for(const s of cs(t))if(s.field.isKeyField())r.push(wr(e,i.key));else{const t=i.data.field(s.field);if(sr(t))throw new so(ro.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+s.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(null===t){const t=s.field.canonicalString();throw new so(ro.INVALID_ARGUMENT,`Invalid query. You are trying to start or end a query using a document for which the field '${t}' (used as the orderBy) does not exist.`)}r.push(t)}return new Sr(r,o)}(t._query,t.firestore._databaseId,e,n[0]._document,i);{const o=Cd(t.firestore);return function(t,e,n,i,o,r){const s=t.explicitOrderBy;if(o.length>s.length)throw new so(ro.INVALID_ARGUMENT,`Too many arguments provided to ${i}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);const a=[];for(let c=0;c<o.length;c++){const r=o[c];if(s[c].field.isKeyField()){if("string"!=typeof r)throw new so(ro.INVALID_ARGUMENT,`Invalid query. Expected a string for document ID in ${i}(), but got a ${typeof r}`);if(!as(t)&&-1!==r.indexOf("/"))throw new so(ro.INVALID_ARGUMENT,`Invalid query. When querying a collection and ordering by documentId(), the value passed to ${i}() must be a plain document ID, but '${r}' contains a slash.`);const n=t.path.child(yo.fromString(r));if(!Io.isDocumentKey(n))throw new so(ro.INVALID_ARGUMENT,`Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${i}() must result in a valid document path, but '${n}' is not because it contains an odd number of segments.`);const o=new Io(n);a.push(wr(e,o))}else{const t=Td(n,i,r);a.push(t)}}return new Sr(a,r)}(t._query,t.firestore._databaseId,o,e,n,i)}}function eh(t,e,n){if("string"==typeof(n=(0,a.m9)(n))){if(""===n)throw new so(ro.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!as(e)&&-1!==n.indexOf("/"))throw new so(ro.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const i=e.path.child(yo.fromString(n));if(!Io.isDocumentKey(i))throw new so(ro.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${i}' is not because it has an odd number of segments (${i.length}).`);return wr(t,new Io(i))}if(n instanceof od)return wr(t,n._key);throw new so(ro.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Qu(n)}.`)}function nh(t,e){if(!Array.isArray(t)||0===t.length)throw new so(ro.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function ih(t,e){const n=function(t,e){for(const n of t)for(const t of n.getFlattenedFilters())if(e.indexOf(t.op)>=0)return t.op;return null}(t.filters,function(t){switch(t){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(null!==n)throw n===e.op?new so(ro.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new so(ro.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class oh{convertValue(t,e="none"){switch(hr(t)){case 0:return null;case 1:return t.booleanValue;case 2:return or(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(rr(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 10:return this.convertObject(t.mapValue,e);default:throw no()}}convertObject(t,e){return this.convertObjectMap(t.fields,e)}convertObjectMap(t,e="none"){const n={};return Go(t,((t,i)=>{n[t]=this.convertValue(i,e)})),n}convertGeoPoint(t){return new md(or(t.latitude),or(t.longitude))}convertArray(t,e){return(t.values||[]).map((t=>this.convertValue(t,e)))}convertServerTimestamp(t,e){switch(e){case"previous":const n=ar(t);return null==n?null:this.convertValue(n,e);case"estimate":return this.convertTimestamp(cr(t));default:return null}}convertTimestamp(t){const e=ir(t);return new _o(e.seconds,e.nanos)}convertDocumentKey(t,e){const n=yo.fromString(t);io(gc(n));const i=new ur(n.get(1),n.get(3)),o=new Io(n.popFirst(5));return i.isEqual(e)||Xi(`Document ${o} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),o}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rh(t,e,n){let i;return i=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,i}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class sh{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class ah extends jd{constructor(t,e,n,i,o,r){super(t,e,n,i,r),this._firestore=t,this._firestoreImpl=t,this.metadata=o}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new ch(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const n=this._document.data.field(Fd("DocumentSnapshot.get",t));if(null!==n)return this._userDataWriter.convertValue(n,e.serverTimestamps)}}}class ch extends ah{data(t={}){return super.data(t)}}class lh{constructor(t,e,n,i){this._firestore=t,this._userDataWriter=e,this._snapshot=i,this.metadata=new sh(i.hasPendingWrites,i.fromCache),this.query=n}get docs(){const t=[];return this.forEach((e=>t.push(e))),t}get size(){return this._snapshot.docs.size}get empty(){return 0===this.size}forEach(t,e){this._snapshot.docs.forEach((n=>{t.call(e,new ch(this._firestore,this._userDataWriter,n.key,n,new sh(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new so(ro.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=function(t,e){if(t._snapshot.oldDocs.isEmpty()){let e=0;return t._snapshot.docChanges.map((n=>{const i=new ch(t._firestore,t._userDataWriter,n.doc.key,n.doc,new sh(t._snapshot.mutatedKeys.has(n.doc.key),t._snapshot.fromCache),t.query.converter);return n.doc,{type:"added",doc:i,oldIndex:-1,newIndex:e++}}))}{let n=t._snapshot.oldDocs;return t._snapshot.docChanges.filter((t=>e||3!==t.type)).map((e=>{const i=new ch(t._firestore,t._userDataWriter,e.doc.key,e.doc,new sh(t._snapshot.mutatedKeys.has(e.doc.key),t._snapshot.fromCache),t.query.converter);let o=-1,r=-1;return 0!==e.type&&(o=n.indexOf(e.doc.key),n=n.delete(e.doc.key)),1!==e.type&&(n=n.add(e.doc),r=n.indexOf(e.doc.key)),{type:uh(e.type),doc:i,oldIndex:o,newIndex:r}}))}}(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}}function uh(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return no()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function dh(t){t=Ju(t,od);const e=Ju(t.firestore,ld);return Hu(dd(e),t._key).then((n=>bh(e,t,n)))}class hh extends oh{constructor(t){super(),this.firestore=t}convertBytes(t){return new pd(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new od(this.firestore,null,e)}}function ph(t){t=Ju(t,id);const e=Ju(t.firestore,ld),n=dd(e),i=new hh(e);return Vd(t._query),qu(n,t._query).then((n=>new lh(e,i,t,n)))}function fh(t,e,n,...i){t=Ju(t,od);const o=Ju(t.firestore,ld),r=Cd(o);let s;return s="string"==typeof(e=(0,a.m9)(e))||e instanceof fd?Id(r,"updateDoc",t._key,e,n,i):xd(r,"updateDoc",t._key,e),kh(o,[s.toMutation(t._key,Qs.exists(!0))])}function gh(t){return kh(Ju(t.firestore,ld),[new ua(t._key,Qs.none())])}function mh(t,e){const n=Ju(t.firestore,ld),i=ad(t),o=rh(t.converter,e);return kh(n,[yd(Cd(t.firestore),"addDoc",i._key,o,null!==t.converter,{}).toMutation(i._key,Qs.exists(!1))]).then((()=>i))}function kh(t,e){return function(t,e){const n=new ao;return t.asyncQueue.enqueueAndForget((async()=>fu(await Vu(t),e,n))),n.promise}(dd(t),e)}function bh(t,e,n){const i=n.docs.get(e._key),o=new hh(t);return new ah(t,o,e._key,i,new sh(n.hasPendingWrites,n.fromCache),e.converter)}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new WeakMap;
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */!function(t,e=!0){!function(t){Zi=t}(o.Jn),(0,o.Xd)(new r.wA("firestore",((t,{instanceIdentifier:n,options:i})=>{const o=t.getProvider("app").getImmediate(),r=new ld(new ho(t.getProvider("auth-internal")),new mo(t.getProvider("app-check-internal")),function(t,e){if(!Object.prototype.hasOwnProperty.apply(t.options,["projectId"]))throw new so(ro.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ur(t.options.projectId,e)}(o,n),o);return i=Object.assign({useFetchStreams:e},i),r._setSettings(i),r}),"PUBLIC").setMultipleInstances(!0)),(0,o.KN)(Wi,"4.4.0",t),(0,o.KN)(Wi,"4.4.0","esm2017")}()},1294:function(t,e,n){"use strict";n.d(e,{oq:function(){return se},Jt:function(){return re},cF:function(){return ce},iH:function(){return ae},KV:function(){return oe}});n(2801),n(8675),n(3462),n(1703);var i=n(7077),o=n(223),r=n(7142);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const s="firebasestorage.googleapis.com",a="storageBucket",c=12e4,l=6e5;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class u extends o.ZR{constructor(t,e,n=0){super(p(t),`Firebase Storage: ${e} (${p(t)})`),this.status_=n,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,u.prototype)}get status(){return this.status_}set status(t){this.status_=t}_codeEquals(t){return p(t)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(t){this.customData.serverResponse=t,this.customData.serverResponse?this.message=`${this._baseMessage}\n${this.customData.serverResponse}`:this.message=this._baseMessage}}var d,h;function p(t){return"storage/"+t}function f(){const t="An unknown error occurred, please check the error payload for server response.";return new u(d.UNKNOWN,t)}function g(t){return new u(d.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function m(t){return new u(d.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function k(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new u(d.UNAUTHENTICATED,t)}function b(){return new u(d.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function w(t){return new u(d.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function v(){return new u(d.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function _(){return new u(d.CANCELED,"User canceled the upload/download.")}function A(t){return new u(d.INVALID_URL,"Invalid URL '"+t+"'.")}function C(t){return new u(d.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function y(){return new u(d.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+a+"' property when initializing the app?")}function E(){return new u(d.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function x(){return new u(d.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function I(t){return new u(d.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function T(t){return new u(d.INVALID_ARGUMENT,t)}function D(){return new u(d.APP_DELETED,"The Firebase app was deleted.")}function S(t){return new u(d.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function M(t,e){return new u(d.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function N(t){throw new u(d.INTERNAL_ERROR,"Internal error: "+t)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(function(t){t["UNKNOWN"]="unknown",t["OBJECT_NOT_FOUND"]="object-not-found",t["BUCKET_NOT_FOUND"]="bucket-not-found",t["PROJECT_NOT_FOUND"]="project-not-found",t["QUOTA_EXCEEDED"]="quota-exceeded",t["UNAUTHENTICATED"]="unauthenticated",t["UNAUTHORIZED"]="unauthorized",t["UNAUTHORIZED_APP"]="unauthorized-app",t["RETRY_LIMIT_EXCEEDED"]="retry-limit-exceeded",t["INVALID_CHECKSUM"]="invalid-checksum",t["CANCELED"]="canceled",t["INVALID_EVENT_NAME"]="invalid-event-name",t["INVALID_URL"]="invalid-url",t["INVALID_DEFAULT_BUCKET"]="invalid-default-bucket",t["NO_DEFAULT_BUCKET"]="no-default-bucket",t["CANNOT_SLICE_BLOB"]="cannot-slice-blob",t["SERVER_FILE_WRONG_SIZE"]="server-file-wrong-size",t["NO_DOWNLOAD_URL"]="no-download-url",t["INVALID_ARGUMENT"]="invalid-argument",t["INVALID_ARGUMENT_COUNT"]="invalid-argument-count",t["APP_DELETED"]="app-deleted",t["INVALID_ROOT_OPERATION"]="invalid-root-operation",t["INVALID_FORMAT"]="invalid-format",t["INTERNAL_ERROR"]="internal-error",t["UNSUPPORTED_ENVIRONMENT"]="unsupported-environment"})(d||(d={}));class O{constructor(t,e){this.bucket=t,this.path_=e}get path(){return this.path_}get isRoot(){return 0===this.path.length}fullServerUrl(){const t=encodeURIComponent;return"/b/"+t(this.bucket)+"/o/"+t(this.path)}bucketOnlyServerUrl(){const t=encodeURIComponent;return"/b/"+t(this.bucket)+"/o"}static makeFromBucketSpec(t,e){let n;try{n=O.makeFromUrl(t,e)}catch(i){return new O(t,"")}if(""===n.path)return n;throw C(t)}static makeFromUrl(t,e){let n=null;const i="([A-Za-z0-9.\\-_]+)";function o(t){"/"===t.path.charAt(t.path.length-1)&&(t.path_=t.path_.slice(0,-1))}const r="(/(.*))?$",a=new RegExp("^gs://"+i+r,"i"),c={bucket:1,path:3};function l(t){t.path_=decodeURIComponent(t.path)}const u="v[A-Za-z0-9_]+",d=e.replace(/[.]/g,"\\."),h="(/([^?#]*).*)?$",p=new RegExp(`^https?://${d}/${u}/b/${i}/o${h}`,"i"),f={bucket:1,path:3},g=e===s?"(?:storage.googleapis.com|storage.cloud.google.com)":e,m="([^?#]*)",k=new RegExp(`^https?://${g}/${i}/${m}`,"i"),b={bucket:1,path:2},w=[{regex:a,indices:c,postModify:o},{regex:p,indices:f,postModify:l},{regex:k,indices:b,postModify:l}];for(let s=0;s<w.length;s++){const e=w[s],i=e.regex.exec(t);if(i){const t=i[e.indices.bucket];let o=i[e.indices.path];o||(o=""),n=new O(t,o),e.postModify(n);break}}if(null==n)throw A(t);return n}}class P{constructor(t){this.promise_=Promise.reject(t)}getPromise(){return this.promise_}cancel(t=!1){}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function B(t,e,n){let i=1,o=null,r=null,s=!1,a=0;function c(){return 2===a}let l=!1;function u(...t){l||(l=!0,e.apply(null,t))}function d(e){o=setTimeout((()=>{o=null,t(p,c())}),e)}function h(){r&&clearTimeout(r)}function p(t,...e){if(l)return void h();if(t)return h(),void u.call(null,t,...e);const n=c()||s;if(n)return h(),void u.call(null,t,...e);let o;i<64&&(i*=2),1===a?(a=2,o=0):o=1e3*(i+Math.random()),d(o)}let f=!1;function g(t){f||(f=!0,h(),l||(null!==o?(t||(a=2),clearTimeout(o),d(0)):t||(a=1)))}return d(0),r=setTimeout((()=>{s=!0,g(!0)}),n),g}function L(t){t(!1)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function R(t){return void 0!==t}function j(t){return"object"===typeof t&&!Array.isArray(t)}function z(t){return"string"===typeof t||t instanceof String}function F(t){return V()&&t instanceof Blob}function V(){return"undefined"!==typeof Blob}function U(t,e,n,i){if(i<e)throw T(`Invalid value for '${t}'. Expected ${e} or greater.`);if(i>n)throw T(`Invalid value for '${t}'. Expected ${n} or less.`)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function H(t,e,n){let i=e;return null==n&&(i=`https://${e}`),`${n}://${i}/v0${t}`}function q(t){const e=encodeURIComponent;let n="?";for(const i in t)if(t.hasOwnProperty(i)){const o=e(i)+"="+e(t[i]);n=n+o+"&"}return n=n.slice(0,-1),n}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function $(t,e){const n=t>=500&&t<600,i=[408,429],o=-1!==i.indexOf(t),r=-1!==e.indexOf(t);return n||o||r}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(function(t){t[t["NO_ERROR"]=0]="NO_ERROR",t[t["NETWORK_ERROR"]=1]="NETWORK_ERROR",t[t["ABORT"]=2]="ABORT"})(h||(h={}));class G{constructor(t,e,n,i,o,r,s,a,c,l,u,d=!0){this.url_=t,this.method_=e,this.headers_=n,this.body_=i,this.successCodes_=o,this.additionalRetryCodes_=r,this.callback_=s,this.errorCallback_=a,this.timeout_=c,this.progressCallback_=l,this.connectionFactory_=u,this.retry=d,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise(((t,e)=>{this.resolve_=t,this.reject_=e,this.start_()}))}start_(){const t=(t,e)=>{if(e)return void t(!1,new W(!1,null,!0));const n=this.connectionFactory_();this.pendingConnection_=n;const i=t=>{const e=t.loaded,n=t.lengthComputable?t.total:-1;null!==this.progressCallback_&&this.progressCallback_(e,n)};null!==this.progressCallback_&&n.addUploadProgressListener(i),n.send(this.url_,this.method_,this.body_,this.headers_).then((()=>{null!==this.progressCallback_&&n.removeUploadProgressListener(i),this.pendingConnection_=null;const e=n.getErrorCode()===h.NO_ERROR,o=n.getStatus();if(!e||$(o,this.additionalRetryCodes_)&&this.retry){const e=n.getErrorCode()===h.ABORT;return void t(!1,new W(!1,null,e))}const r=-1!==this.successCodes_.indexOf(o);t(!0,new W(r,n))}))},e=(t,e)=>{const n=this.resolve_,i=this.reject_,o=e.connection;if(e.wasSuccessCode)try{const t=this.callback_(o,o.getResponse());R(t)?n(t):n()}catch(r){i(r)}else if(null!==o){const t=f();t.serverResponse=o.getErrorText(),this.errorCallback_?i(this.errorCallback_(o,t)):i(t)}else if(e.canceled){const t=this.appDelete_?D():_();i(t)}else{const t=v();i(t)}};this.canceled_?e(!1,new W(!1,null,!0)):this.backoffId_=B(t,e,this.timeout_)}getPromise(){return this.promise_}cancel(t){this.canceled_=!0,this.appDelete_=t||!1,null!==this.backoffId_&&L(this.backoffId_),null!==this.pendingConnection_&&this.pendingConnection_.abort()}}class W{constructor(t,e,n){this.wasSuccessCode=t,this.connection=e,this.canceled=!!n}}function K(t,e){null!==e&&e.length>0&&(t["Authorization"]="Firebase "+e)}function Z(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(null!==e&&void 0!==e?e:"AppManager")}function Y(t,e){e&&(t["X-Firebase-GMPID"]=e)}function Q(t,e){null!==e&&(t["X-Firebase-AppCheck"]=e)}function J(t,e,n,i,o,r,s=!0){const a=q(t.urlParams),c=t.url+a,l=Object.assign({},t.headers);return Y(l,e),K(l,n),Z(l,r),Q(l,i),new G(c,t.method,l,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,o,s)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function X(){return"undefined"!==typeof BlobBuilder?BlobBuilder:"undefined"!==typeof WebKitBlobBuilder?WebKitBlobBuilder:void 0}function tt(...t){const e=X();if(void 0!==e){const n=new e;for(let e=0;e<t.length;e++)n.append(t[e]);return n.getBlob()}if(V())return new Blob(t);throw new u(d.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}function et(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nt(t){if("undefined"===typeof atob)throw I("base-64");return atob(t)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const it={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class ot{constructor(t,e){this.data=t,this.contentType=e||null}}function rt(t,e){switch(t){case it.RAW:return new ot(st(e));case it.BASE64:case it.BASE64URL:return new ot(ct(t,e));case it.DATA_URL:return new ot(ut(e),dt(e))}throw f()}function st(t){const e=[];for(let n=0;n<t.length;n++){let i=t.charCodeAt(n);if(i<=127)e.push(i);else if(i<=2047)e.push(192|i>>6,128|63&i);else if(55296===(64512&i)){const o=n<t.length-1&&56320===(64512&t.charCodeAt(n+1));if(o){const o=i,r=t.charCodeAt(++n);i=65536|(1023&o)<<10|1023&r,e.push(240|i>>18,128|i>>12&63,128|i>>6&63,128|63&i)}else e.push(239,191,189)}else 56320===(64512&i)?e.push(239,191,189):e.push(224|i>>12,128|i>>6&63,128|63&i)}return new Uint8Array(e)}function at(t){let e;try{e=decodeURIComponent(t)}catch(n){throw M(it.DATA_URL,"Malformed data URL.")}return st(e)}function ct(t,e){switch(t){case it.BASE64:{const n=-1!==e.indexOf("-"),i=-1!==e.indexOf("_");if(n||i){const e=n?"-":"_";throw M(t,"Invalid character '"+e+"' found: is it base64url encoded?")}break}case it.BASE64URL:{const n=-1!==e.indexOf("+"),i=-1!==e.indexOf("/");if(n||i){const e=n?"+":"/";throw M(t,"Invalid character '"+e+"' found: is it base64 encoded?")}e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=nt(e)}catch(o){if(o.message.includes("polyfill"))throw o;throw M(t,"Invalid character found")}const i=new Uint8Array(n.length);for(let r=0;r<n.length;r++)i[r]=n.charCodeAt(r);return i}class lt{constructor(t){this.base64=!1,this.contentType=null;const e=t.match(/^data:([^,]+)?,/);if(null===e)throw M(it.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const n=e[1]||null;null!=n&&(this.base64=ht(n,";base64"),this.contentType=this.base64?n.substring(0,n.length-";base64".length):n),this.rest=t.substring(t.indexOf(",")+1)}}function ut(t){const e=new lt(t);return e.base64?ct(it.BASE64,e.rest):at(e.rest)}function dt(t){const e=new lt(t);return e.contentType}function ht(t,e){const n=t.length>=e.length;return!!n&&t.substring(t.length-e.length)===e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pt{constructor(t,e){let n=0,i="";F(t)?(this.data_=t,n=t.size,i=t.type):t instanceof ArrayBuffer?(e?this.data_=new Uint8Array(t):(this.data_=new Uint8Array(t.byteLength),this.data_.set(new Uint8Array(t))),n=this.data_.length):t instanceof Uint8Array&&(e?this.data_=t:(this.data_=new Uint8Array(t.length),this.data_.set(t)),n=t.length),this.size_=n,this.type_=i}size(){return this.size_}type(){return this.type_}slice(t,e){if(F(this.data_)){const n=this.data_,i=et(n,t,e);return null===i?null:new pt(i)}{const n=new Uint8Array(this.data_.buffer,t,e-t);return new pt(n,!0)}}static getBlob(...t){if(V()){const e=t.map((t=>t instanceof pt?t.data_:t));return new pt(tt.apply(null,e))}{const e=t.map((t=>z(t)?rt(it.RAW,t).data:t.data_));let n=0;e.forEach((t=>{n+=t.byteLength}));const i=new Uint8Array(n);let o=0;return e.forEach((t=>{for(let e=0;e<t.length;e++)i[o++]=t[e]})),new pt(i,!0)}}uploadData(){return this.data_}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ft(t){let e;try{e=JSON.parse(t)}catch(n){return null}return j(e)?e:null}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gt(t){if(0===t.length)return null;const e=t.lastIndexOf("/");if(-1===e)return"";const n=t.slice(0,e);return n}function mt(t,e){const n=e.split("/").filter((t=>t.length>0)).join("/");return 0===t.length?n:t+"/"+n}function kt(t){const e=t.lastIndexOf("/",t.length-2);return-1===e?t:t.slice(e+1)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bt(t,e){return e}class wt{constructor(t,e,n,i){this.server=t,this.local=e||t,this.writable=!!n,this.xform=i||bt}}let vt=null;function _t(t){return!z(t)||t.length<2?t:kt(t)}function At(){if(vt)return vt;const t=[];function e(t,e){return _t(e)}t.push(new wt("bucket")),t.push(new wt("generation")),t.push(new wt("metageneration")),t.push(new wt("name","fullPath",!0));const n=new wt("name");function i(t,e){return void 0!==e?Number(e):e}n.xform=e,t.push(n);const o=new wt("size");return o.xform=i,t.push(o),t.push(new wt("timeCreated")),t.push(new wt("updated")),t.push(new wt("md5Hash",null,!0)),t.push(new wt("cacheControl",null,!0)),t.push(new wt("contentDisposition",null,!0)),t.push(new wt("contentEncoding",null,!0)),t.push(new wt("contentLanguage",null,!0)),t.push(new wt("contentType",null,!0)),t.push(new wt("metadata","customMetadata",!0)),vt=t,vt}function Ct(t,e){function n(){const n=t["bucket"],i=t["fullPath"],o=new O(n,i);return e._makeStorageReference(o)}Object.defineProperty(t,"ref",{get:n})}function yt(t,e,n){const i={type:"file"},o=n.length;for(let r=0;r<o;r++){const t=n[r];i[t.local]=t.xform(i,e[t.server])}return Ct(i,t),i}function Et(t,e,n){const i=ft(e);if(null===i)return null;const o=i;return yt(t,o,n)}function xt(t,e,n,i){const o=ft(e);if(null===o)return null;if(!z(o["downloadTokens"]))return null;const r=o["downloadTokens"];if(0===r.length)return null;const s=encodeURIComponent,a=r.split(","),c=a.map((e=>{const o=t["bucket"],r=t["fullPath"],a="/b/"+s(o)+"/o/"+s(r),c=H(a,n,i),l=q({alt:"media",token:e});return c+l}));return c[0]}function It(t,e){const n={},i=e.length;for(let o=0;o<i;o++){const i=e[o];i.writable&&(n[i.server]=t[i.local])}return JSON.stringify(n)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tt{constructor(t,e,n,i){this.url=t,this.method=e,this.handler=n,this.timeout=i,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dt(t){if(!t)throw f()}function St(t,e){function n(n,i){const o=Et(t,i,e);return Dt(null!==o),o}return n}function Mt(t,e){function n(n,i){const o=Et(t,i,e);return Dt(null!==o),xt(o,i,t.host,t._protocol)}return n}function Nt(t){function e(e,n){let i;return i=401===e.getStatus()?e.getErrorText().includes("Firebase App Check token is invalid")?b():k():402===e.getStatus()?m(t.bucket):403===e.getStatus()?w(t.path):n,i.status=e.getStatus(),i.serverResponse=n.serverResponse,i}return e}function Ot(t){const e=Nt(t);function n(n,i){let o=e(n,i);return 404===n.getStatus()&&(o=g(t.path)),o.serverResponse=i.serverResponse,o}return n}function Pt(t,e,n){const i=e.fullServerUrl(),o=H(i,t.host,t._protocol),r="GET",s=t.maxOperationRetryTime,a=new Tt(o,r,Mt(t,n),s);return a.errorHandler=Ot(e),a}function Bt(t,e){const n=e.fullServerUrl(),i=H(n,t.host,t._protocol),o="DELETE",r=t.maxOperationRetryTime;function s(t,e){}const a=new Tt(i,o,s,r);return a.successCodes=[200,204],a.errorHandler=Ot(e),a}function Lt(t,e){return t&&t["contentType"]||e&&e.type()||"application/octet-stream"}function Rt(t,e,n){const i=Object.assign({},n);return i["fullPath"]=t.path,i["size"]=e.size(),i["contentType"]||(i["contentType"]=Lt(null,e)),i}function jt(t,e,n,i,o){const r=e.bucketOnlyServerUrl(),s={"X-Goog-Upload-Protocol":"multipart"};function a(){let t="";for(let e=0;e<2;e++)t+=Math.random().toString().slice(2);return t}const c=a();s["Content-Type"]="multipart/related; boundary="+c;const l=Rt(e,i,o),u=It(l,n),d="--"+c+"\r\nContent-Type: application/json; charset=utf-8\r\n\r\n"+u+"\r\n--"+c+"\r\nContent-Type: "+l["contentType"]+"\r\n\r\n",h="\r\n--"+c+"--",p=pt.getBlob(d,i,h);if(null===p)throw E();const f={name:l["fullPath"]},g=H(r,t.host,t._protocol),m="POST",k=t.maxUploadRetryTime,b=new Tt(g,m,St(t,n),k);return b.urlParams=f,b.headers=s,b.body=p.uploadData(),b.errorHandler=Nt(e),b}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let zt=null;class Ft{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=h.NO_ERROR,this.sendPromise_=new Promise((t=>{this.xhr_.addEventListener("abort",(()=>{this.errorCode_=h.ABORT,t()})),this.xhr_.addEventListener("error",(()=>{this.errorCode_=h.NETWORK_ERROR,t()})),this.xhr_.addEventListener("load",(()=>{t()}))}))}send(t,e,n,i){if(this.sent_)throw N("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(e,t,!0),void 0!==i)for(const o in i)i.hasOwnProperty(o)&&this.xhr_.setRequestHeader(o,i[o].toString());return void 0!==n?this.xhr_.send(n):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw N("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw N("cannot .getStatus() before sending");try{return this.xhr_.status}catch(t){return-1}}getResponse(){if(!this.sent_)throw N("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw N("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(t){return this.xhr_.getResponseHeader(t)}addUploadProgressListener(t){null!=this.xhr_.upload&&this.xhr_.upload.addEventListener("progress",t)}removeUploadProgressListener(t){null!=this.xhr_.upload&&this.xhr_.upload.removeEventListener("progress",t)}}class Vt extends Ft{initXhr(){this.xhr_.responseType="text"}}function Ut(){return zt?zt():new Vt}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ht{constructor(t,e){this._service=t,this._location=e instanceof O?e:O.makeFromUrl(e,t.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(t,e){return new Ht(t,e)}get root(){const t=new O(this._location.bucket,"");return this._newRef(this._service,t)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return kt(this._location.path)}get storage(){return this._service}get parent(){const t=gt(this._location.path);if(null===t)return null;const e=new O(this._location.bucket,t);return new Ht(this._service,e)}_throwIfRoot(t){if(""===this._location.path)throw S(t)}}function qt(t,e,n){t._throwIfRoot("uploadBytes");const i=jt(t.storage,t._location,At(),new pt(e,!0),n);return t.storage.makeRequestWithTokens(i,Ut).then((e=>({metadata:e,ref:t})))}function $t(t){t._throwIfRoot("getDownloadURL");const e=Pt(t.storage,t._location,At());return t.storage.makeRequestWithTokens(e,Ut).then((t=>{if(null===t)throw x();return t}))}function Gt(t){t._throwIfRoot("deleteObject");const e=Bt(t.storage,t._location);return t.storage.makeRequestWithTokens(e,Ut)}function Wt(t,e){const n=mt(t._location.path,e),i=new O(t._location.bucket,n);return new Ht(t.storage,i)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kt(t){return/^[A-Za-z]+:\/\//.test(t)}function Zt(t,e){return new Ht(t,e)}function Yt(t,e){if(t instanceof te){const n=t;if(null==n._bucket)throw y();const i=new Ht(n,n._bucket);return null!=e?Yt(i,e):i}return void 0!==e?Wt(t,e):t}function Qt(t,e){if(e&&Kt(e)){if(t instanceof te)return Zt(t,e);throw T("To use ref(service, url), the first argument must be a Storage instance.")}return Yt(t,e)}function Jt(t,e){const n=null===e||void 0===e?void 0:e[a];return null==n?null:O.makeFromBucketSpec(n,t)}function Xt(t,e,n,i={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:r}=i;r&&(t._overrideAuthToken="string"===typeof r?r:(0,o.Sg)(r,t.app.options.projectId))}class te{constructor(t,e,n,i,o){this.app=t,this._authProvider=e,this._appCheckProvider=n,this._url=i,this._firebaseVersion=o,this._bucket=null,this._host=s,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=c,this._maxUploadRetryTime=l,this._requests=new Set,this._bucket=null!=i?O.makeFromBucketSpec(i,this._host):Jt(this._host,this.app.options)}get host(){return this._host}set host(t){this._host=t,null!=this._url?this._bucket=O.makeFromBucketSpec(this._url,t):this._bucket=Jt(t,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(t){U("time",0,Number.POSITIVE_INFINITY,t),this._maxUploadRetryTime=t}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(t){U("time",0,Number.POSITIVE_INFINITY,t),this._maxOperationRetryTime=t}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const t=this._authProvider.getImmediate({optional:!0});if(t){const e=await t.getToken();if(null!==e)return e.accessToken}return null}async _getAppCheckToken(){const t=this._appCheckProvider.getImmediate({optional:!0});if(t){const e=await t.getToken();return e.token}return null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach((t=>t.cancel())),this._requests.clear()),Promise.resolve()}_makeStorageReference(t){return new Ht(this,t)}_makeRequest(t,e,n,i,o=!0){if(this._deleted)return new P(D());{const r=J(t,this._appId,n,i,e,this._firebaseVersion,o);return this._requests.add(r),r.getPromise().then((()=>this._requests.delete(r)),(()=>this._requests.delete(r))),r}}async makeRequestWithTokens(t,e){const[n,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(t,e,n,i).getPromise()}}const ee="@firebase/storage",ne="0.12.0",ie="storage";function oe(t,e,n){return t=(0,o.m9)(t),qt(t,e,n)}function re(t){return t=(0,o.m9)(t),$t(t)}function se(t){return t=(0,o.m9)(t),Gt(t)}function ae(t,e){return t=(0,o.m9)(t),Qt(t,e)}function ce(t=(0,i.Mq)(),e){t=(0,o.m9)(t);const n=(0,i.qX)(t,ie),r=n.getImmediate({identifier:e}),s=(0,o.P0)("storage");return s&&le(r,...s),r}function le(t,e,n,i={}){Xt(t,e,n,i)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ue(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),o=t.getProvider("auth-internal"),r=t.getProvider("app-check-internal");return new te(n,o,r,e,i.Jn)}function de(){(0,i.Xd)(new r.wA(ie,ue,"PUBLIC").setMultipleInstances(!0)),(0,i.KN)(ee,ne,""),(0,i.KN)(ee,ne,"esm2017")}de()}}]);
//# sourceMappingURL=chunk-vendors.cace58a0.js.map