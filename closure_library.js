
/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
'use strict';var aa="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){if(a==Array.prototype||a==Object.prototype)return a;a[b]=c.value;return a};
function ba(a){a=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global];for(var b=0;b<a.length;++b){var c=a[b];if(c&&c.Math==Math)return c}throw Error("Cannot find global object");}
var ca=ba(this);function da(a,b){if(b)a:{var c=ca;a=a.split(".");for(var d=0;d<a.length-1;d++){var e=a[d];if(!(e in c))break a;c=c[e]}a=a[a.length-1];d=c[a];b=b(d);b!=d&&null!=b&&aa(c,a,{configurable:!0,writable:!0,value:b})}}
function ea(a){function b(d){return a.next(d)}
function c(d){return a.throw(d)}
return new Promise(function(d,e){function f(g){g.done?d(g.value):Promise.resolve(g.value).then(b,c).then(f,e)}
f(a.next())})}
function q(a){return ea(a())}
function fa(a,b){a instanceof String&&(a+="");var c=0,d=!1,e={next:function(){if(!d&&c<a.length){var f=c++;return{value:b(f,a[f]),done:!1}}d=!0;return{done:!0,value:void 0}}};
e[Symbol.iterator]=function(){return e};
return e}
da("Array.prototype.values",function(a){return a?a:function(){return fa(this,function(b,c){return c})}});
da("Object.entries",function(a){return a?a:function(b){var c=[],d;for(d in b)Object.prototype.hasOwnProperty.call(b,d)&&c.push([d,b[d]]);return c}});
da("Array.prototype.includes",function(a){return a?a:function(b,c){var d=this;d instanceof String&&(d=String(d));var e=d.length;c=c||0;for(0>c&&(c=Math.max(c+e,0));c<e;c++){var f=d[c];if(f===b||Object.is(f,b))return!0}return!1}});
da("Object.values",function(a){return a?a:function(b){var c=[],d;for(d in b)Object.prototype.hasOwnProperty.call(b,d)&&c.push(b[d]);return c}});
da("String.prototype.matchAll",function(a){return a?a:function(b){if(b instanceof RegExp&&!b.global)throw new TypeError("RegExp passed into String.prototype.matchAll() must have global tag.");var c=new RegExp(b,b instanceof RegExp?void 0:"g"),d=this,e=!1,f={next:function(){if(e)return{value:void 0,done:!0};var g=c.exec(d);if(!g)return e=!0,{value:void 0,done:!0};""===g[0]&&(c.lastIndex+=1);return{value:g,done:!1}}};
f[Symbol.iterator]=function(){return f};
return f}});
da("Promise.prototype.finally",function(a){return a?a:function(b){return this.then(function(c){return Promise.resolve(b()).then(function(){return c})},function(c){return Promise.resolve(b()).then(function(){throw c;
})})}});
var r=this||self;function t(a,b,c){a=a.split(".");c=c||r;a[0]in c||"undefined"==typeof c.execScript||c.execScript("var "+a[0]);for(var d;a.length&&(d=a.shift());)a.length||void 0===b?c[d]&&c[d]!==Object.prototype[d]?c=c[d]:c=c[d]={}:c[d]=b}
function u(a,b){a=a.split(".");b=b||r;for(var c=0;c<a.length;c++)if(b=b[a[c]],null==b)return null;return b}
function ha(a){var b=typeof a;b="object"!=b?b:a?Array.isArray(a)?"array":b:"null";return"array"==b||"object"==b&&"number"==typeof a.length}
function ia(a){var b=typeof a;return"object"==b&&null!=a||"function"==b}
function ja(a,b,c){return a.call.apply(a.bind,arguments)}
function ka(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var e=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(e,d);return a.apply(b,e)}}return function(){return a.apply(b,arguments)}}
function la(a,b,c){Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?la=ja:la=ka;return la.apply(null,arguments)}
function ma(a,b){function c(){}
c.prototype=b.prototype;a.Oa=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.yb=function(d,e,f){for(var g=Array(arguments.length-2),h=2;h<arguments.length;h++)g[h-2]=arguments[h];return b.prototype[e].apply(d,g)}}
;function na(a,b){if(Error.captureStackTrace)Error.captureStackTrace(this,na);else{const c=Error().stack;c&&(this.stack=c)}a&&(this.message=String(a));void 0!==b&&(this.cause=b)}
ma(na,Error);na.prototype.name="CustomError";function oa(){}
;function pa(a,b){Array.prototype.forEach.call(a,b,void 0)}
function qa(a,b){return Array.prototype.map.call(a,b,void 0)}
function ra(a,b){b=Array.prototype.indexOf.call(a,b,void 0);0<=b&&Array.prototype.splice.call(a,b,1)}
function sa(a,b){for(let c=1;c<arguments.length;c++){const d=arguments[c];if(ha(d)){const e=a.length||0,f=d.length||0;a.length=e+f;for(let g=0;g<f;g++)a[e+g]=d[g]}else a.push(d)}}
;function ta(a){var b=ua;for(const c in b)if(a.call(void 0,b[c],c,b))return c}
function va(a){for(const b in a)return!1;return!0}
function wa(a){if(!a||"object"!==typeof a)return a;if("function"===typeof a.clone)return a.clone();if("undefined"!==typeof Map&&a instanceof Map)return new Map(a);if("undefined"!==typeof Set&&a instanceof Set)return new Set(a);if(a instanceof Date)return new Date(a.getTime());const b=Array.isArray(a)?[]:"function"!==typeof ArrayBuffer||"function"!==typeof ArrayBuffer.isView||!ArrayBuffer.isView(a)||a instanceof DataView?{}:new a.constructor(a.length);for(const c in a)b[c]=wa(a[c]);return b}
const xa="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function ya(a,b){let c,d;for(let e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(let f=0;f<xa.length;f++)c=xa[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}}
;function za(){}
function Aa(a){return new za(Ba,a)}
var Ba={};Aa("");var Ca=String.prototype.trim?function(a){return a.trim()}:function(a){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]};var Da,Ea=u("CLOSURE_FLAGS"),Fa=Ea&&Ea[610401301];Da=null!=Fa?Fa:!1;function Ga(){var a=r.navigator;return a&&(a=a.userAgent)?a:""}
var Ha;const Ia=r.navigator;Ha=Ia?Ia.userAgentData||null:null;function Ja(a){return Da?Ha?Ha.brands.some(({brand:b})=>b&&-1!=b.indexOf(a)):!1:!1}
function w(a){return-1!=Ga().indexOf(a)}
;function Ka(){return Da?!!Ha&&0<Ha.brands.length:!1}
function La(){return Ka()?Ja("Chromium"):(w("Chrome")||w("CriOS"))&&!(Ka()?0:w("Edge"))||w("Silk")}
;var Ma=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Na(a){return a?decodeURI(a):a}
function Oa(a,b,c){if(Array.isArray(b))for(var d=0;d<b.length;d++)Oa(a,String(b[d]),c);else null!=b&&c.push(a+(""===b?"":"="+encodeURIComponent(String(b))))}
function Pa(a){var b=[],c;for(c in a)Oa(c,a[c],b);return b.join("&")}
;function Qa(a,b){return Error(`Invalid wire type: ${a} (at position ${b})`)}
function Ra(){return Error("Failed to read varint, encoding is invalid.")}
function Sa(a,b){return Error(`Tried to read past the end of the data ${b} > ${a}`)}
;function Ta(){throw Error("Invalid UTF8");}
function Ua(a,b){b=String.fromCharCode.apply(null,b);return null==a?b:a+b}
let Wa=void 0,Xa;const Ya="undefined"!==typeof TextDecoder;function Za(a){r.setTimeout(()=>{throw a;},0)}
;var $a=Ka()?!1:w("Trident")||w("MSIE");!w("Android")||La();La();var ab=w("Safari")&&!(La()||(Ka()?0:w("Coast"))||(Ka()?0:w("Opera"))||(Ka()?0:w("Edge"))||(Ka()?Ja("Microsoft Edge"):w("Edg/"))||(Ka()?Ja("Opera"):w("OPR"))||w("Firefox")||w("FxiOS")||w("Silk")||w("Android"))&&!(w("iPhone")&&!w("iPod")&&!w("iPad")||w("iPad")||w("iPod"));var bb={},cb=null;function db(a,b){void 0===b&&(b=0);eb();b=bb[b];const c=Array(Math.floor(a.length/3)),d=b[64]||"";let e=0,f=0;for(;e<a.length-2;e+=3){var g=a[e],h=a[e+1],k=a[e+2],l=b[g>>2];g=b[(g&3)<<4|h>>4];h=b[(h&15)<<2|k>>6];k=b[k&63];c[f++]=""+l+g+h+k}l=0;k=d;switch(a.length-e){case 2:l=a[e+1],k=b[(l&15)<<2]||d;case 1:a=a[e],c[f]=""+b[a>>2]+b[(a&3)<<4|l>>4]+k+d}return c.join("")}
function fb(a){var b=a.length,c=3*b/4;c%3?c=Math.floor(c):-1!="=.".indexOf(a[b-1])&&(c=-1!="=.".indexOf(a[b-2])?c-2:c-1);var d=new Uint8Array(c),e=0;gb(a,function(f){d[e++]=f});
return e!==c?d.subarray(0,e):d}
function gb(a,b){function c(k){for(;d<a.length;){var l=a.charAt(d++),m=cb[l];if(null!=m)return m;if(!/^[\s\xa0]*$/.test(l))throw Error("Unknown base64 encoding at char: "+l);}return k}
eb();for(var d=0;;){var e=c(-1),f=c(0),g=c(64),h=c(64);if(64===h&&-1===e)break;b(e<<2|f>>4);64!=g&&(b(f<<4&240|g>>2),64!=h&&b(g<<6&192|h))}}
function eb(){if(!cb){cb={};for(var a="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),b=["+/=","+/","-_=","-_.","-_"],c=0;5>c;c++){var d=a.concat(b[c].split(""));bb[c]=d;for(var e=0;e<d.length;e++){var f=d[e];void 0===cb[f]&&(cb[f]=e)}}}}
;var hb="undefined"!==typeof Uint8Array;const ib=!$a&&"function"===typeof r.btoa;function jb(a){if(!ib)return db(a);let b="";for(;10240<a.length;)b+=String.fromCharCode.apply(null,a.subarray(0,10240)),a=a.subarray(10240);b+=String.fromCharCode.apply(null,a);return btoa(b)}
const kb=/[-_.]/g,lb={"-":"+",_:"/",".":"="};function mb(a){return lb[a]||""}
function nb(a){if(!ib)return fb(a);kb.test(a)&&(a=a.replace(kb,mb));a=atob(a);const b=new Uint8Array(a.length);for(let c=0;c<a.length;c++)b[c]=a.charCodeAt(c);return b}
function ob(a){return hb&&null!=a&&a instanceof Uint8Array}
let pb;var qb={};let rb;function sb(a){if(a!==qb)throw Error("illegal external caller");}
function tb(){return rb||(rb=new ub(null,qb))}
function vb(a){sb(qb);var b=a.h;b=null==b||ob(b)?b:"string"===typeof b?nb(b):null;return null==b?b:a.h=b}
var ub=class{constructor(a,b){sb(b);this.h=a;if(null!=a&&0===a.length)throw Error("ByteString should be constructed with non-empty values");}sizeBytes(){const a=vb(this);return a?a.length:0}};function wb(a){if("string"===typeof a)return{buffer:nb(a),H:!1};if(Array.isArray(a))return{buffer:new Uint8Array(a),H:!1};if(a.constructor===Uint8Array)return{buffer:a,H:!1};if(a.constructor===ArrayBuffer)return{buffer:new Uint8Array(a),H:!1};if(a.constructor===ub)return{buffer:vb(a)||pb||(pb=new Uint8Array(0)),H:!0};if(a instanceof Uint8Array)return{buffer:new Uint8Array(a.buffer,a.byteOffset,a.byteLength),H:!1};throw Error("Type not convertible to a Uint8Array, expected a Uint8Array, an ArrayBuffer, a base64 encoded string, a ByteString or an Array of numbers");
}
;const xb="function"===typeof Uint8Array.prototype.slice;function yb(a,b){a.h=b;if(b>a.i)throw Sa(a.i,b);}
function zb(a){const b=a.j;let c=a.h,d=b[c++],e=d&127;if(d&128&&(d=b[c++],e|=(d&127)<<7,d&128&&(d=b[c++],e|=(d&127)<<14,d&128&&(d=b[c++],e|=(d&127)<<21,d&128&&(d=b[c++],e|=d<<28,d&128&&b[c++]&128&&b[c++]&128&&b[c++]&128&&b[c++]&128&&b[c++]&128)))))throw Ra();yb(a,c);return e}
function Ab(a,b){if(0>b)throw Error(`Tried to read a negative byte length: ${b}`);const c=a.h,d=c+b;if(d>a.i)throw Sa(b,a.i-c);a.h=d;return c}
var Bb=class{constructor(a,b){this.j=null;this.m=!1;this.h=this.i=this.l=0;this.init(a,void 0,void 0,b)}init(a,b,c,{aa:d=!1}={}){this.aa=d;a&&(a=wb(a),this.j=a.buffer,this.m=a.H,this.l=b||0,this.i=void 0!==c?this.l+c:this.j.length,this.h=this.l)}clear(){this.j=null;this.m=!1;this.h=this.i=this.l=0;this.aa=!1}reset(){this.h=this.l}advance(a){yb(this,this.h+a)}},Cb=[];function Db(a,{la:b=!1}={}){a.la=b}
function Eb(a){var b=a.h;if(b.h==b.i)return!1;a.j=a.h.h;var c=zb(a.h)>>>0;b=c>>>3;c&=7;if(!(0<=c&&5>=c))throw Qa(c,a.j);if(1>b)throw Error(`Invalid field number: ${b} (at position ${a.j})`);a.l=b;a.i=c;return!0}
function Fb(a){switch(a.i){case 0:if(0!=a.i)Fb(a);else a:{a=a.h;var b=a.h;const c=b+10,d=a.j;for(;b<c;)if(0===(d[b++]&128)){yb(a,b);break a}throw Ra();}break;case 1:a.h.advance(8);break;case 2:2!=a.i?Fb(a):(b=zb(a.h)>>>0,a.h.advance(b));break;case 5:a.h.advance(4);break;case 3:b=a.l;do{if(!Eb(a))throw Error("Unmatched start-group tag: stream EOF");if(4==a.i){if(a.l!=b)throw Error("Unmatched end-group tag");break}Fb(a)}while(1);break;default:throw Qa(a.i,a.j);}}
var Gb=class{constructor(a,b){if(Cb.length){const c=Cb.pop();c.init(a,void 0,void 0,b);a=c}else a=new Bb(a,b);this.h=a;this.j=this.h.h;this.i=this.l=-1;Db(this,b)}reset(){this.h.reset();this.j=this.h.h;this.i=this.l=-1}advance(a){this.h.advance(a)}},Hb=[];const x="function"===typeof Symbol&&"symbol"===typeof Symbol()?Symbol():void 0;function Ib(a,b){if(x)return a[x]|=b;if(void 0!==a.D)return a.D|=b;Object.defineProperties(a,{D:{value:b,configurable:!0,writable:!0,enumerable:!1}});return b}
function Jb(a,b){x?a[x]&&(a[x]&=~b):void 0!==a.D&&(a.D&=~b)}
function y(a){let b;x?b=a[x]:b=a.D;return null==b?0:b}
function Kb(a,b){x?a[x]=b:void 0!==a.D?a.D=b:Object.defineProperties(a,{D:{value:b,configurable:!0,writable:!0,enumerable:!1}});return a}
function Lb(a){Ib(a,1);return a}
function Mb(a,b){Kb(b,(a|0)&-51)}
function Nb(a,b){Kb(b,(a|18)&-41)}
;var Ob={};function Pb(a){return null!==a&&"object"===typeof a&&!Array.isArray(a)&&a.constructor===Object}
let Qb;var Rb=Object.freeze(Kb([],23));function Sb(a){if(y(a.o)&2)throw Error();}
function Tb(a){var b=a.length;(b=b?a[b-1]:void 0)&&Pb(b)?b.g=1:a.push({g:1})}
;function Ub(a){return a.displayName||a.name||"unknown type name"}
function Vb(a,b){if(!(a instanceof b))throw Error(`Expected instanceof ${Ub(b)} but got ${a&&Ub(a.constructor)}`);return a}
function Wb(a,b){const c=y(a);let d=c;0===d&&(d|=b&16);d|=b&2;d!==c&&Kb(a,d)}
;function Yb(a){const b=a.j+a.L;return a.B||(a.B=a.o[b]={})}
function A(a,b,c){return-1===b?null:b>=a.j?a.B?a.B[b]:void 0:c&&a.B&&(c=a.B[b],null!=c)?c:a.o[b+a.L]}
function B(a,b,c,d){Sb(a);return Zb(a,b,c,d)}
function Zb(a,b,c,d){a.m&&(a.m=void 0);if(b>=a.j||d)return Yb(a)[b]=c,a;a.o[b+a.L]=c;(c=a.B)&&b in c&&delete c[b];return a}
function $b(a,b,c,d,e){let f=A(a,b,d);Array.isArray(f)||(f=Rb);const g=y(f);g&1||Lb(f);if(e)g&2||Ib(f,18),c&1||Object.freeze(f);else{e=!(c&2);const h=g&2;c&1||!h?e&&g&16&&!h&&Jb(f,16):(f=Lb(Array.prototype.slice.call(f)),Zb(a,b,f,d))}return f}
function ac(a,b,c,d){Sb(a);(c=bc(a,c))&&c!==b&&null!=d&&Zb(a,c,void 0,!1);return Zb(a,b,d)}
function bc(a,b){let c=0;for(let d=0;d<b.length;d++){const e=b[d];null!=A(a,e)&&(0!==c&&Zb(a,c,void 0,!1),c=e)}return c}
function cc(a,b,c){var d=A(a,c,!1);{let e=!1;null==d||"object"!==typeof d||(e=Array.isArray(d))||d.ea!==Ob?e?(Wb(d,y(a.o)),b=new b(d)):b=void 0:b=d}b!==d&&null!=b&&Zb(a,c,b,!1);d=b;if(null==d)return d;y(a.o)&2||(b=dc(d),b!==d&&(d=b,Zb(a,c,d,!1)));return d}
function ec(a,b,c,d,e){var f=!!(e&2);a.i||(a.i={});var g=a.i[c],h=$b(a,c,3,void 0,f);if(!g){var k=h;g=[];f=!!(e&2);h=!!(y(k)&2);const v=k;!f&&h&&(k=Array.prototype.slice.call(k));var l=e|(h?2:0);e=h;let n=0;for(;n<k.length;n++){var m=k[n];var p=b;Array.isArray(m)?(Wb(m,l),m=new p(m)):m=void 0;void 0!==m&&(e=e||!!(2&y(m.o)),g.push(m))}a.i[c]=g;l=y(k);b=l|33;b=e?b&-9:b|8;l!=b&&(e=k,Object.isFrozen(e)&&(e=Array.prototype.slice.call(e)),Kb(e,b),k=e);v!==k&&Zb(a,c,k);(f||1===d&&h)&&Ib(g,18);(f||1===d)&&
Object.freeze(g);return g}if(3===d)return g;f||((f=Object.isFrozen(g),1!==d||f)?2===d&&f&&(g=Array.prototype.slice.call(g),a.i[c]=g):Object.freeze(g));return g}
function fc(a,b,c){var d=y(a.o),e=!!(d&2);b=ec(a,b,c,e?1:2,d);a=$b(a,c,3,void 0,e);if(!(e||y(a)&8)){for(e=0;e<b.length;e++)c=b[e],d=dc(c),c!==d&&(b[e]=d,a[e]=d.o);Ib(a,8)}return b}
function C(a,b,c,d){Sb(a);null!=d?Vb(d,b):d=void 0;return Zb(a,c,d)}
function gc(a,b,c,d,e){Sb(a);null!=e?Vb(e,b):e=void 0;ac(a,c,d,e)}
function hc(a,b,c,d){var e=y(a.o);if(e&2)throw Error();e=ec(a,c,b,2,e);c=null!=d?Vb(d,c):new c;a=$b(a,b,2,void 0,!1);e.push(c);a.push(c.o);c.H()&&Jb(a,8);return c}
function ic(a){a:if(a=A(a,4),null!=a){switch(typeof a){case "string":a=+a;break a;case "number":break a}a=void 0}return a}
function jc(a,b){a=A(a,b);return null==a?"":a}
;let kc;function lc(a){switch(typeof a){case "number":return isFinite(a)?a:String(a);case "object":if(a)if(Array.isArray(a)){if(0!==(y(a)&128))return a=Array.prototype.slice.call(a),Tb(a),a}else{if(ob(a))return jb(a);if(a instanceof ub){const b=a.h;return null==b?"":"string"===typeof b?b:a.h=jb(b)}}}return a}
;function mc(a,b,c,d,e){if(null!=a){if(Array.isArray(a))a=e&&0==a.length&&y(a)&1?void 0:nc(a,b,c,void 0!==d,e);else if(Pb(a)){const f={};for(let g in a)f[g]=mc(a[g],b,c,d,e);a=f}else a=b(a,d);return a}}
function nc(a,b,c,d,e){const f=y(a);d=d?!!(f&16):void 0;a=Array.prototype.slice.call(a);for(let g=0;g<a.length;g++)a[g]=mc(a[g],b,c,d,e);c(f,a);return a}
function oc(a){return a.ea===Ob?a.toJSON():lc(a)}
function pc(a,b){a&128&&Tb(b)}
;function qc(a,b,c=Nb){if(null!=a){if(hb&&a instanceof Uint8Array)return b?a:new Uint8Array(a);if(Array.isArray(a)){const d=y(a);if(d&2)return a;if(b&&!(d&32)&&(d&16||0===d))return Kb(a,d|18),a;a=nc(a,qc,d&4?Nb:c,!0,!1);b=y(a);b&4&&b&2&&Object.freeze(a);return a}return a.ea===Ob?rc(a):a}}
function sc(a,b,c,d,e,f,g){if(a=a.i&&a.i[c]){d=0<a.length?a[0].constructor:void 0;f=y(a);f&2||(a=qa(a,rc),Nb(f,a),Object.freeze(a));Sb(b);g=null==a?Rb:Lb([]);if(null!=a){f=!!a.length;for(let h=0;h<a.length;h++){const k=a[h];Vb(k,d);f=f&&!(y(k.o)&2);g[h]=k.o}d=g;f=(f?8:0)|1;g=y(d);(g&f)!==f&&(Object.isFrozen(d)&&(d=Array.prototype.slice.call(d)),Kb(d,g|f));g=d;b.i||(b.i={});b.i[c]=a}else b.i&&(b.i[c]=void 0);Zb(b,c,g,e)}else B(b,c,qc(d,f,g),e)}
function rc(a){if(y(a.o)&2)return a;a=tc(a,!0);Ib(a.o,18);return a}
function tc(a,b){var c=a.o,d=[];Ib(d,16);var e=a.constructor.h;e&&d.push(e);e=a.B;if(e){d.length=c.length;var f={};d[d.length-1]=f}0!==(y(c)&128)&&Tb(d);b=b||a.H()?Nb:Mb;f=a.constructor;kc=d;d=new f(d);kc=void 0;a.U&&(d.U=a.U.slice());f=!!(y(c)&16);var g=e?c.length-1:c.length;for(let h=0;h<g;h++)sc(a,d,h-a.L,c[h],!1,f,b);if(e)for(const h in e)c=e[h],g=+h,Number.isNaN(g),sc(a,d,g,c,!0,f,b);return d}
function dc(a){if(!(y(a.o)&2))return a;const b=tc(a,!1);b.m=a;return b}
;function uc(a){Qb=!0;try{return JSON.stringify(a.toJSON(),vc)}finally{Qb=!1}}
var D=class{constructor(a,b,c){null==a&&(a=kc);kc=void 0;var d=this.constructor.h;if(null==a){a=d?[d]:[];var e=!0;Kb(a,48)}else{if(!Array.isArray(a))throw Error();if(d&&d!==a[0])throw Error();var f=Ib(a,0)|32;e=0!==(16&f);if(128&f)throw Error();Kb(a,f)}this.L=d?0:-1;this.i=void 0;this.o=a;a:{f=this.o.length;d=f-1;if(f&&(f=this.o[d],Pb(f))){this.B=f;this.j=d-this.L;break a}void 0!==b&&-1<b?(this.j=Math.max(b,d+1-this.L),this.B=void 0):this.j=Number.MAX_VALUE}if(this.B&&"g"in this.B)throw Error('Unexpected "g" flag in sparse object of message that is not a group type.');
if(c){b=e&&!0;e=this.j;let h;for(d=0;d<c.length;d++)if(f=c[d],f<e){f+=this.L;var g=a[f];g?wc(g,b):a[f]=Rb}else h||(h=Yb(this)),(g=h[f])?wc(g,b):h[f]=Rb}}toJSON(){const a=xc(this.o);var b;Qb?b=a:b=nc(a,oc,pc,void 0,!1);return b}clone(){return tc(this,!1)}H(){return!!(y(this.o)&2)}};function wc(a,b){if(Array.isArray(a)){var c=y(a),d=1;!b||c&2||(d|=16);(c&d)!==d&&Kb(a,c|d)}}
D.prototype.ea=Ob;function vc(a,b){return lc(b)}
function xc(a){let b,c=a.length,d=!1;for(let g=a.length;g--;){let h=a[g];if(Array.isArray(h)){var e=h;Array.isArray(h)&&y(h)&1&&!h.length?h=null:h=xc(h);h!=e&&(d=!0)}else if(g===a.length-1&&Pb(h)){a:{var f=h;e={};let k=!1;for(let l in f){let m=f[l];if(Array.isArray(m)){let p=m;Array.isArray(m)&&y(m)&1&&!m.length?m=null:m=xc(m);m!=p&&(k=!0)}null!=m?e[l]=m:k=!0}if(k){for(let l in e){f=e;break a}f=null}}f!=h&&(d=!0);c--;continue}null==h&&c==g+1?(d=!0,c--):d&&(b||(b=Array.prototype.slice.call(a,0,c),
Mb(y(a),b)),b[g]=h)}if(!d)return a;b||(b=Array.prototype.slice.call(a,0,c),Mb(y(a),b));f&&b.push(f);return b}
;const yc=Symbol();function zc(a,b,c){return a[yc]||(a[yc]=(d,e)=>b(d,e,c))}
function Ac(a){let b=a[yc];if(!b){const c=Bc(a);b=(d,e)=>Cc(d,e,c);
a[yc]=b}return b}
function Dc(a){var b=a.zb;if(b)return Ac(b);if(b=a.Jb)return zc(a.Ca.ba,b,a.Ib)}
function Ec(a){const b=Dc(a),c=a.Ca,d=a.Qb.X;return b?(e,f)=>d(e,f,c,b):(e,f)=>d(e,f,c)}
function Fc(a,b){let c=a[b];"function"==typeof c&&0===c.length&&(c=c(),a[b]=c);return Array.isArray(c)&&(Gc in c||Hc in c||0<c.length&&"function"==typeof c[0])?c:void 0}
const Hc=Symbol(),Gc=Symbol();function Ic(a,b){a[0]=b}
function Jc(a,b,c,d){const e=c.X;a[b]=d?(f,g,h)=>e(f,g,h,d):e}
function Kc(a,b,c,d,e){const f=c.X,g=Ac(d),h=Bc(d).ba;a[b]=(k,l,m)=>f(k,l,m,h,g,e)}
function Lc(a,b,c,d,e,f,g){const h=c.X,k=zc(d,e,f);a[b]=(l,m,p)=>h(l,m,p,d,k,g)}
function Bc(a){var b=a[Gc];if(b)return b;b=a[Gc]={};var c=Ic,d=Jc,e=Kc,f=Lc;b.ba=a[0];let g=1;if(a.length>g&&"number"!==typeof a[g]){var h=a[g++];c(b,h)}for(;g<a.length;){c=a[g++];for(var k=g+1;k<a.length&&"number"!==typeof a[k];)k++;h=a[g++];k-=g;switch(k){case 0:d(b,c,h);break;case 1:(k=Fc(a,g))?(g++,e(b,c,h,k)):d(b,c,h,a[g++]);break;case 2:k=b;var l=g++;l=Fc(a,l);e(k,c,h,l,a[g++]);break;case 3:f(b,c,h,a[g++],a[g++],a[g++]);break;case 4:f(b,c,h,a[g++],a[g++],a[g++],a[g++]);break;default:throw Error("unexpected number of binary field arguments: "+
k);}}Gc in a&&Hc in a&&(a.length=0);return b}
function Cc(a,b,c){for(;Eb(b)&&4!=b.i;){var d=b.l,e=c[d];if(!e){var f=c[0];f&&(f=f[d])&&(e=c[d]=Ec(f))}if(!e||!e(b,a,d))if(f=b,d=a,e=f.j,Fb(f),!f.la){var g=f.h.h-e;f.h.h=e;a:{f=f.h;e=g;if(0==e){e=tb();break a}const h=Ab(f,e);f.aa&&f.m?e=f.j.subarray(h,h+e):(f=f.j,g=h,e=h+e,e=g===e?pb||(pb=new Uint8Array(0)):xb?f.slice(g,e):new Uint8Array(f.subarray(g,e)));e=0==e.length?tb():new ub(e,qb)}(f=d.U)?f.push(e):d.U=[e]}}return a}
function Mc(a,b){return{X:a,Zb:b}}
var Nc=Mc(function(a,b,c){if(2!==a.i)return!1;var d=zb(a.h)>>>0;a=a.h;var e=Ab(a,d);a=a.j;if(Ya){var f=a,g;(g=Xa)||(g=Xa=new TextDecoder("utf-8",{fatal:!0}));a=e+d;f=0===e&&a===f.length?f:f.subarray(e,a);try{var h=g.decode(f)}catch(l){if(void 0===Wa){try{g.decode(new Uint8Array([128]))}catch(m){}try{g.decode(new Uint8Array([97])),Wa=!0}catch(m){Wa=!1}}!Wa&&(Xa=void 0);throw l;}}else{h=e;d=h+d;e=[];let l=null;let m;for(;h<d;){var k=a[h++];128>k?e.push(k):224>k?h>=d?Ta():(m=a[h++],194>k||128!==(m&192)?
(h--,Ta()):e.push((k&31)<<6|m&63)):240>k?h>=d-1?Ta():(m=a[h++],128!==(m&192)||224===k&&160>m||237===k&&160<=m||128!==((f=a[h++])&192)?(h--,Ta()):e.push((k&15)<<12|(m&63)<<6|f&63)):244>=k?h>=d-2?Ta():(m=a[h++],128!==(m&192)||0!==(k<<28)+(m-144)>>30||128!==((f=a[h++])&192)||128!==((g=a[h++])&192)?(h--,Ta()):(k=(k&7)<<18|(m&63)<<12|(f&63)<<6|g&63,k-=65536,e.push((k>>10&1023)+55296,(k&1023)+56320))):Ta();8192<=e.length&&(l=Ua(l,e),e.length=0)}h=Ua(l,e)}B(b,c,h);return!0},function(a,b,c){a.i(c,A(b,c))}),
Oc=Mc(function(a,b,c,d,e){if(2!==a.i)return!1;
b=hc(b,c,d);c=a.h.i;d=zb(a.h)>>>0;const f=a.h.h+d;let g=f-c;0>=g&&(a.h.i=f,e(b,a,void 0,void 0,void 0),g=f-a.h.h);if(g)throw Error("Message parsing ended unexpectedly. Expected to read "+`${d} bytes, instead read ${d-g} bytes, either the `+"data ended unexpectedly or the message misreported its own length");a.h.h=f;a.h.i=c;return!0},function(a,b,c,d,e){a.h(c,fc(b,d,c),e)});Aa("csi.gstatic.com");Aa("googleads.g.doubleclick.net");Aa("partner.googleadservices.com");Aa("pubads.g.doubleclick.net");Aa("securepubads.g.doubleclick.net");Aa("tpc.googlesyndication.com");function Pc(a,b){this.x=void 0!==a?a:0;this.y=void 0!==b?b:0}
Pc.prototype.clone=function(){return new Pc(this.x,this.y)};
Pc.prototype.ceil=function(){this.x=Math.ceil(this.x);this.y=Math.ceil(this.y);return this};
Pc.prototype.floor=function(){this.x=Math.floor(this.x);this.y=Math.floor(this.y);return this};
Pc.prototype.round=function(){this.x=Math.round(this.x);this.y=Math.round(this.y);return this};function Qc(a,b){for(var c=0;a;){if(b(a))return a;a=a.parentNode;c++}return null}
;function Rc(a){var b=u("window.location.href");null==a&&(a='Unknown Error of type "null/undefined"');if("string"===typeof a)return{message:a,name:"Unknown error",lineNumber:"Not available",fileName:b,stack:"Not available"};var c=!1;try{var d=a.lineNumber||a.line||"Not available"}catch(g){d="Not available",c=!0}try{var e=a.fileName||a.filename||a.sourceURL||r.$googDebugFname||b}catch(g){e="Not available",c=!0}b=Sc(a);if(!(!c&&a.lineNumber&&a.fileName&&a.stack&&a.message&&a.name)){c=a.message;if(null==
c){if(a.constructor&&a.constructor instanceof Function){if(a.constructor.name)c=a.constructor.name;else if(c=a.constructor,Tc[c])c=Tc[c];else{c=String(c);if(!Tc[c]){var f=/function\s+([^\(]+)/m.exec(c);Tc[c]=f?f[1]:"[Anonymous]"}c=Tc[c]}c='Unknown Error of type "'+c+'"'}else c="Unknown Error of unknown type";"function"===typeof a.toString&&Object.prototype.toString!==a.toString&&(c+=": "+a.toString())}return{message:c,name:a.name||"UnknownError",lineNumber:d,fileName:e,stack:b||"Not available"}}a.stack=
b;return{message:a.message,name:a.name,lineNumber:a.lineNumber,fileName:a.fileName,stack:a.stack}}
function Sc(a,b){b||(b={});b[Uc(a)]=!0;var c=a.stack||"";(a=a.cause)&&!b[Uc(a)]&&(c+="\nCaused by: ",a.stack&&0==a.stack.indexOf(a.toString())||(c+="string"===typeof a?a:a.message+"\n"),c+=Sc(a,b));return c}
function Uc(a){var b="";"function"===typeof a.toString&&(b=""+a);return b+a.stack}
var Tc={};function Vc(a){if(!a)return"";if(/^about:(?:blank|srcdoc)$/.test(a))return window.origin||"";a=a.split("#")[0].split("?")[0];a=a.toLowerCase();0==a.indexOf("//")&&(a=window.location.protocol+a);/^[\w\-]*:\/\//.test(a)||(a=window.location.href);var b=a.substring(a.indexOf("://")+3),c=b.indexOf("/");-1!=c&&(b=b.substring(0,c));c=a.substring(0,a.indexOf("://"));if(!c)throw Error("URI is missing protocol: "+a);if("http"!==c&&"https"!==c&&"chrome-extension"!==c&&"moz-extension"!==c&&"file"!==c&&"android-app"!==
c&&"chrome-search"!==c&&"chrome-untrusted"!==c&&"chrome"!==c&&"app"!==c&&"devtools"!==c)throw Error("Invalid URI scheme in origin: "+c);a="";var d=b.indexOf(":");if(-1!=d){var e=b.substring(d+1);b=b.substring(0,d);if("http"===c&&"80"!==e||"https"===c&&"443"!==e)a=":"+e}return c+"://"+b+a}
;var Wc="client_dev_domain client_dev_regex_map client_dev_root_url client_rollout_override expflag forcedCapability jsfeat jsmode mods".split(" "),Xc=[...Wc,"client_dev_set_cookie"];function Yc(){function a(){e[0]=1732584193;e[1]=4023233417;e[2]=2562383102;e[3]=271733878;e[4]=3285377520;m=l=0}
function b(p){for(var v=g,n=0;64>n;n+=4)v[n/4]=p[n]<<24|p[n+1]<<16|p[n+2]<<8|p[n+3];for(n=16;80>n;n++)p=v[n-3]^v[n-8]^v[n-14]^v[n-16],v[n]=(p<<1|p>>>31)&4294967295;p=e[0];var z=e[1],H=e[2],E=e[3],bd=e[4];for(n=0;80>n;n++){if(40>n)if(20>n){var Va=E^z&(H^E);var Xb=1518500249}else Va=z^H^E,Xb=1859775393;else 60>n?(Va=z&H|E&(z|H),Xb=2400959708):(Va=z^H^E,Xb=3395469782);Va=((p<<5|p>>>27)&4294967295)+Va+bd+Xb+v[n]&4294967295;bd=E;E=H;H=(z<<30|z>>>2)&4294967295;z=p;p=Va}e[0]=e[0]+p&4294967295;e[1]=e[1]+
z&4294967295;e[2]=e[2]+H&4294967295;e[3]=e[3]+E&4294967295;e[4]=e[4]+bd&4294967295}
function c(p,v){if("string"===typeof p){p=unescape(encodeURIComponent(p));for(var n=[],z=0,H=p.length;z<H;++z)n.push(p.charCodeAt(z));p=n}v||(v=p.length);n=0;if(0==l)for(;n+64<v;)b(p.slice(n,n+64)),n+=64,m+=64;for(;n<v;)if(f[l++]=p[n++],m++,64==l)for(l=0,b(f);n+64<v;)b(p.slice(n,n+64)),n+=64,m+=64}
function d(){var p=[],v=8*m;56>l?c(h,56-l):c(h,64-(l-56));for(var n=63;56<=n;n--)f[n]=v&255,v>>>=8;b(f);for(n=v=0;5>n;n++)for(var z=24;0<=z;z-=8)p[v++]=e[n]>>z&255;return p}
for(var e=[],f=[],g=[],h=[128],k=1;64>k;++k)h[k]=0;var l,m;a();return{reset:a,update:c,digest:d,Ba:function(){for(var p=d(),v="",n=0;n<p.length;n++)v+="0123456789ABCDEF".charAt(Math.floor(p[n]/16))+"0123456789ABCDEF".charAt(p[n]%16);return v}}}
;function Zc(a,b,c){var d=String(r.location.href);return d&&a&&b?[b,$c(Vc(d),a,c||null)].join(" "):null}
function $c(a,b,c){var d=[],e=[];if(1==(Array.isArray(c)?2:1))return e=[b,a],pa(d,function(h){e.push(h)}),ad(e.join(" "));
var f=[],g=[];pa(c,function(h){g.push(h.key);f.push(h.value)});
c=Math.floor((new Date).getTime()/1E3);e=0==f.length?[c,b,a]:[f.join(":"),c,b,a];pa(d,function(h){e.push(h)});
a=ad(e.join(" "));a=[c,a];0==g.length||a.push(g.join(""));return a.join("_")}
function ad(a){var b=Yc();b.update(a);return b.Ba().toLowerCase()}
;const cd={};function dd(){this.h=document||{cookie:""}}
dd.prototype.isEnabled=function(){if(!r.navigator.cookieEnabled)return!1;if(this.h.cookie)return!0;this.set("TESTCOOKIESENABLED","1",{oa:60});if("1"!==this.get("TESTCOOKIESENABLED"))return!1;this.remove("TESTCOOKIESENABLED");return!0};
dd.prototype.set=function(a,b,c){let d,e,f,g=!1,h;"object"===typeof c&&(h=c.Ub,g=c.Vb||!1,f=c.domain||void 0,e=c.path||void 0,d=c.oa);if(/[;=\s]/.test(a))throw Error('Invalid cookie name "'+a+'"');if(/[;\r\n]/.test(b))throw Error('Invalid cookie value "'+b+'"');void 0===d&&(d=-1);this.h.cookie=a+"="+b+(f?";domain="+f:"")+(e?";path="+e:"")+(0>d?"":0==d?";expires="+(new Date(1970,1,1)).toUTCString():";expires="+(new Date(Date.now()+1E3*d)).toUTCString())+(g?";secure":"")+(null!=h?";samesite="+h:"")};
dd.prototype.get=function(a,b){const c=a+"=",d=(this.h.cookie||"").split(";");for(let e=0,f;e<d.length;e++){f=Ca(d[e]);if(0==f.lastIndexOf(c,0))return f.slice(c.length);if(f==a)return""}return b};
dd.prototype.remove=function(a,b,c){const d=void 0!==this.get(a);this.set(a,"",{oa:0,path:b,domain:c});return d};
dd.prototype.clear=function(){var a=(this.h.cookie||"").split(";");const b=[],c=[];let d,e;for(let f=0;f<a.length;f++)e=Ca(a[f]),d=e.indexOf("="),-1==d?(b.push(""),c.push(e)):(b.push(e.substring(0,d)),c.push(e.substring(d+1)));for(a=b.length-1;0<=a;a--)this.remove(b[a])};function ed(){return!!cd.FPA_SAMESITE_PHASE2_MOD||!1}
function fd(a,b,c,d){(a=r[a])||(a=(new dd).get(b));return a?Zc(a,c,d):null}
;"undefined"!==typeof TextDecoder&&new TextDecoder;"undefined"!==typeof TextEncoder&&new TextEncoder;function gd(){this.j=this.j;this.m=this.m}
gd.prototype.j=!1;gd.prototype.dispose=function(){this.j||(this.j=!0,this.l())};
gd.prototype.l=function(){if(this.m)for(;this.m.length;)this.m.shift()()};const hd=self;function id(a,b){a.l(b);100>a.i&&(a.i++,b.next=a.h,a.h=b)}
class jd{constructor(a,b){this.j=a;this.l=b;this.i=0;this.h=null}get(){let a;0<this.i?(this.i--,a=this.h,this.h=a.next,a.next=null):a=this.j();return a}};class kd{constructor(){this.i=this.h=null}add(a,b){const c=ld.get();c.set(a,b);this.i?this.i.next=c:this.h=c;this.i=c}remove(){let a=null;this.h&&(a=this.h,this.h=this.h.next,this.h||(this.i=null),a.next=null);return a}}var ld=new jd(()=>new md,a=>a.reset());
class md{constructor(){this.next=this.scope=this.h=null}set(a,b){this.h=a;this.scope=b;this.next=null}reset(){this.next=this.scope=this.h=null}};let nd,od=!1,pd=new kd,rd=(a,b)=>{nd||qd();od||(nd(),od=!0);pd.add(a,b)},qd=()=>{const a=r.Promise.resolve(void 0);
nd=()=>{a.then(sd)}};
var sd=()=>{let a;for(;a=pd.remove();){try{a.h.call(a.scope)}catch(b){Za(b)}id(ld,a)}od=!1};class td{constructor(){this.promise=new Promise(a=>{this.resolve=a})}}
;function F(a){this.h=0;this.u=void 0;this.l=this.i=this.j=null;this.m=this.s=!1;if(a!=oa)try{var b=this;a.call(void 0,function(c){ud(b,2,c)},function(c){ud(b,3,c)})}catch(c){ud(this,3,c)}}
function vd(){this.next=this.context=this.i=this.j=this.h=null;this.l=!1}
vd.prototype.reset=function(){this.context=this.i=this.j=this.h=null;this.l=!1};
var wd=new jd(function(){return new vd},function(a){a.reset()});
function xd(a,b,c){var d=wd.get();d.j=a;d.i=b;d.context=c;return d}
function yd(a){if(a instanceof F)return a;var b=new F(oa);ud(b,2,a);return b}
F.prototype.then=function(a,b,c){return zd(this,"function"===typeof a?a:null,"function"===typeof b?b:null,c)};
F.prototype.$goog_Thenable=!0;F.prototype.F=function(a,b){return zd(this,null,a,b)};
F.prototype.catch=F.prototype.F;F.prototype.cancel=function(a){if(0==this.h){var b=new Ad(a);rd(function(){Bd(this,b)},this)}};
function Bd(a,b){if(0==a.h)if(a.j){var c=a.j;if(c.i){for(var d=0,e=null,f=null,g=c.i;g&&(g.l||(d++,g.h==a&&(e=g),!(e&&1<d)));g=g.next)e||(f=g);e&&(0==c.h&&1==d?Bd(c,b):(f?(d=f,d.next==c.l&&(c.l=d),d.next=d.next.next):Cd(c),Dd(c,e,3,b)))}a.j=null}else ud(a,3,b)}
function Ed(a,b){a.i||2!=a.h&&3!=a.h||Fd(a);a.l?a.l.next=b:a.i=b;a.l=b}
function zd(a,b,c,d){var e=xd(null,null,null);e.h=new F(function(f,g){e.j=b?function(h){try{var k=b.call(d,h);f(k)}catch(l){g(l)}}:f;
e.i=c?function(h){try{var k=c.call(d,h);void 0===k&&h instanceof Ad?g(h):f(k)}catch(l){g(l)}}:g});
e.h.j=a;Ed(a,e);return e.h}
F.prototype.M=function(a){this.h=0;ud(this,2,a)};
F.prototype.P=function(a){this.h=0;ud(this,3,a)};
function ud(a,b,c){if(0==a.h){a===c&&(b=3,c=new TypeError("Promise cannot resolve to itself"));a.h=1;a:{var d=c,e=a.M,f=a.P;if(d instanceof F){Ed(d,xd(e||oa,f||null,a));var g=!0}else{if(d)try{var h=!!d.$goog_Thenable}catch(l){h=!1}else h=!1;if(h)d.then(e,f,a),g=!0;else{if(ia(d))try{var k=d.then;if("function"===typeof k){Gd(d,k,e,f,a);g=!0;break a}}catch(l){f.call(a,l);g=!0;break a}g=!1}}}g||(a.u=c,a.h=b,a.j=null,Fd(a),3!=b||c instanceof Ad||Hd(a,c))}}
function Gd(a,b,c,d,e){function f(k){h||(h=!0,d.call(e,k))}
function g(k){h||(h=!0,c.call(e,k))}
var h=!1;try{b.call(a,g,f)}catch(k){f(k)}}
function Fd(a){a.s||(a.s=!0,rd(a.v,a))}
function Cd(a){var b=null;a.i&&(b=a.i,a.i=b.next,b.next=null);a.i||(a.l=null);return b}
F.prototype.v=function(){for(var a;a=Cd(this);)Dd(this,a,this.h,this.u);this.s=!1};
function Dd(a,b,c,d){if(3==c&&b.i&&!b.l)for(;a&&a.m;a=a.j)a.m=!1;if(b.h)b.h.j=null,Id(b,c,d);else try{b.l?b.j.call(b.context):Id(b,c,d)}catch(e){Jd.call(null,e)}id(wd,b)}
function Id(a,b,c){2==b?a.j.call(a.context,c):a.i&&a.i.call(a.context,c)}
function Hd(a,b){a.m=!0;rd(function(){a.m&&Jd.call(null,b)})}
var Jd=Za;function Ad(a){na.call(this,a)}
ma(Ad,na);Ad.prototype.name="cancel";function G(a){gd.call(this);this.M=1;this.s=[];this.u=0;this.h=[];this.i={};this.Z=!!a}
ma(G,gd);G.prototype.P=function(a,b,c){var d=this.i[a];d||(d=this.i[a]=[]);var e=this.M;this.h[e]=a;this.h[e+1]=b;this.h[e+2]=c;this.M=e+3;d.push(e);return e};
G.prototype.F=function(a){var b=this.h[a];if(b){var c=this.i[b];0!=this.u?(this.s.push(a),this.h[a+1]=()=>{}):(c&&ra(c,a),delete this.h[a],delete this.h[a+1],delete this.h[a+2])}return!!b};
G.prototype.v=function(a,b){var c=this.i[a];if(c){for(var d=Array(arguments.length-1),e=1,f=arguments.length;e<f;e++)d[e-1]=arguments[e];if(this.Z)for(e=0;e<c.length;e++){var g=c[e];Kd(this.h[g+1],this.h[g+2],d)}else{this.u++;try{for(e=0,f=c.length;e<f&&!this.j;e++)g=c[e],this.h[g+1].apply(this.h[g+2],d)}finally{if(this.u--,0<this.s.length&&0==this.u)for(;c=this.s.pop();)this.F(c)}}return 0!=e}return!1};
function Kd(a,b,c){rd(function(){a.apply(b,c)})}
G.prototype.clear=function(a){if(a){var b=this.i[a];b&&(b.forEach(this.F,this),delete this.i[a])}else this.h.length=0,this.i={}};
G.prototype.l=function(){G.Oa.l.call(this);this.clear();this.s.length=0};/*

 (The MIT License)

 Copyright (C) 2014 by Vitaly Puzrin

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in
 all copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 THE SOFTWARE.

 -----------------------------------------------------------------------------
 Ported from zlib, which is under the following license
 https://github.com/madler/zlib/blob/master/zlib.h

 zlib.h -- interface of the 'zlib' general purpose compression library
   version 1.2.8, April 28th, 2013
   Copyright (C) 1995-2013 Jean-loup Gailly and Mark Adler
   This software is provided 'as-is', without any express or implied
   warranty.  In no event will the authors be held liable for any damages
   arising from the use of this software.
   Permission is granted to anyone to use this software for any purpose,
   including commercial applications, and to alter it and redistribute it
   freely, subject to the following restrictions:
   1. The origin of this software must not be misrepresented; you must not
      claim that you wrote the original software. If you use this software
      in a product, an acknowledgment in the product documentation would be
      appreciated but is not required.
   2. Altered source versions must be plainly marked as such, and must not be
      misrepresented as being the original software.
   3. This notice may not be removed or altered from any source distribution.
   Jean-loup Gailly        Mark Adler
   jloup@gzip.org          madler@alumni.caltech.edu
   The data format used by the zlib library is described by RFCs (Request for
   Comments) 1950 to 1952 in the files http://tools.ietf.org/html/rfc1950
   (zlib format), rfc1951 (deflate format) and rfc1952 (gzip format).
*/
let I={};var Ld="undefined"!==typeof Uint8Array&&"undefined"!==typeof Uint16Array&&"undefined"!==typeof Int32Array;I.assign=function(a){for(var b=Array.prototype.slice.call(arguments,1);b.length;){var c=b.shift();if(c){if("object"!==typeof c)throw new TypeError(c+"must be non-object");for(var d in c)Object.prototype.hasOwnProperty.call(c,d)&&(a[d]=c[d])}}return a};
I.Xb=function(a,b){if(a.length===b)return a;if(a.subarray)return a.subarray(0,b);a.length=b;return a};
var Md={ya:function(a,b,c,d,e){if(b.subarray&&a.subarray)a.set(b.subarray(c,c+d),e);else for(var f=0;f<d;f++)a[e+f]=b[c+f]},
Da:function(a){var b,c;var d=c=0;for(b=a.length;d<b;d++)c+=a[d].length;var e=new Uint8Array(c);d=c=0;for(b=a.length;d<b;d++){var f=a[d];e.set(f,c);c+=f.length}return e}},Nd={ya:function(a,b,c,d,e){for(var f=0;f<d;f++)a[e+f]=b[c+f]},
Da:function(a){return[].concat.apply([],a)}};
I.Na=function(){Ld?(I.ga=Uint8Array,I.ra=Uint16Array,I.sa=Int32Array,I.assign(I,Md)):(I.ga=Array,I.ra=Array,I.sa=Array,I.assign(I,Nd))};
I.Na();try{new Uint8Array(1)}catch(a){}for(var Od=new I.ga(256),Pd=0;256>Pd;Pd++)Od[Pd]=252<=Pd?6:248<=Pd?5:240<=Pd?4:224<=Pd?3:192<=Pd?2:1;Od[254]=Od[254]=1;function Qd(a){for(var b=a.length;0<=--b;)a[b]=0}
Qd(Array(576));Qd(Array(60));Qd(Array(512));Qd(Array(256));Qd(Array(29));Qd(Array(30));/*

Math.uuid.js (v1.4)
http://www.broofa.com
mailto:robert@broofa.com
Copyright (c) 2010 Robert Kieffer
Dual licensed under the MIT and GPL licenses.
*/
var Rd="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split("");var Sd=class{constructor(a){this.name=a}};var Td=new Sd("rawColdConfigGroup");var Ud=new Sd("rawHotConfigGroup");function Vd(a,b){return B(a,1,b)}
var Wd=class extends D{constructor(a){super(a)}};var Yd=class extends D{constructor(a){super(a,-1,Xd)}},Xd=[1];var Zd=class extends D{constructor(a){super(a)}};var $d=class extends D{constructor(a){super(a)}};var be=class extends D{constructor(a){super(a,-1,ae)}},ae=[2];var de=class extends D{constructor(a){super(a,-1,ce)}getPlayerType(){return A(this,36)}setHomeGroupInfo(a){return C(this,be,81,a)}clearLocationPlayabilityToken(){return B(this,89,void 0,!1)}},ce=[9,66,24,32,86,100,101];var fe=class extends D{constructor(a){super(a)}getKey(){return jc(this,1)}R(){return jc(this,2===bc(this,ee)?2:-1)}},ee=[2,3,4,5,6];var he=class extends D{constructor(a){super(a,-1,ge)}},ge=[15,26,28];var je=class extends D{constructor(a){super(a,-1,ie)}},ie=[5];var ke=class extends D{constructor(a){super(a)}};var me=class extends D{constructor(a){super(a,-1,le)}setSafetyMode(a){return B(this,5,a)}},le=[12];var oe=class extends D{constructor(a){super(a,-1,ne)}l(a){return C(this,de,1,a)}},ne=[12];var pe=class extends D{constructor(a){super(a)}getKey(){return jc(this,1)}R(){return jc(this,2)}};var re=class extends D{constructor(a){super(a,-1,qe)}},qe=[4,5];var se=class extends D{constructor(a){super(a)}};var te=class extends D{constructor(a){super(a)}},ue=[2,3,4];var ve=class extends D{constructor(a){super(a)}};var we=class extends D{constructor(a){super(a)}};var xe=class extends D{constructor(a){super(a)}};var ze=class extends D{constructor(a){super(a,-1,ye)}},ye=[10,17];var Ae=class extends D{constructor(a){super(a)}};var J=class extends D{constructor(a){super(a)}};var Be=class extends D{constructor(a){super(a)}};var Ce=class extends D{constructor(a){super(a)}};var Ee=class extends D{constructor(a){super(a,-1,De)}getVideoData(){return cc(this,Ce,15)}},De=[4];function Fe(a,b){C(a,J,1,b)}
var Ge=class extends D{constructor(a){super(a)}};function He(a,b){return C(a,J,1,b)}
var Ie=class extends D{constructor(a){super(a)}h(a){return B(this,2,a)}};function Je(a,b){return C(a,J,2,b)}
var Le=class extends D{constructor(a){super(a,-1,Ke)}h(a){return B(this,1,a)}},Ke=[3];var Me=class extends D{constructor(a){super(a)}h(a){return B(this,1,a)}};var Ne=class extends D{constructor(a){super(a)}h(a){return B(this,1,a)}};var Oe=class extends D{constructor(a){super(a)}h(a){return B(this,1,a)}};var Pe=class extends D{constructor(a){super(a)}h(a){return B(this,1,a)}};var Qe=class extends D{constructor(a){super(a)}};var Re=class extends D{constructor(a){super(a)}};var K=class extends D{constructor(a){super(a,470)}},Se=[2,3,5,6,7,11,13,20,21,22,23,24,28,32,37,45,59,72,73,74,76,78,79,80,85,91,97,100,102,105,111,117,119,126,127,136,146,148,151,156,157,158,159,163,164,168,176,177,178,179,184,188,189,190,191,193,194,195,196,197,198,199,200,201,202,203,204,205,206,208,209,215,219,222,225,226,227,229,232,233,234,240,241,244,247,248,249,251,254,255,256,257,258,259,260,261,266,270,272,278,288,291,293,300,304,308,309,310,311,313,314,319,320,321,323,324,327,328,330,331,
332,334,337,338,340,344,348,350,351,352,353,354,355,356,357,358,361,363,364,368,369,370,373,374,375,378,380,381,383,388,389,402,403,410,411,412,413,414,415,416,417,418,423,424,425,426,427,429,430,431,439,441,444,448,458,469];var Te={pb:0,Xa:1,eb:2,fb:4,lb:8,gb:16,hb:32,ob:64,nb:128,Za:256,bb:512,jb:1024,ab:2048,cb:4096,Ya:8192,ib:16384,mb:32768,kb:65536};var Ue=class extends D{constructor(a){super(a)}};var We=class extends D{constructor(a){super(a)}setVideoId(a){return ac(this,1,Ve,a)}getPlaylistId(){var a=2===bc(this,Ve)?2:-1;return A(this,a)}},Ve=[1,2];var Ye=class extends D{constructor(){super(void 0,-1,Xe)}},Xe=[3];var Ze=new Sd("recordNotificationInteractionsEndpoint");var $e=["notification/convert_endpoint_to_url"],af=["notification/record_interactions"],bf=["notification_registration/set_registration"];var cf=a=>self.btoa(String.fromCharCode.apply(null,Array.from(new Uint8Array(a)))).replace(/\+/g,"-").replace(/\//g,"_");var df=["notifications_register","notifications_check_registration"];var L=class extends Error{constructor(a,...b){super(a);this.args=[...b]}};let ef=null;function M(a,b){const c={};c.key=a;c.value=b;return ff().then(d=>new Promise((e,f)=>{try{const g=d.transaction("swpushnotificationsstore","readwrite").objectStore("swpushnotificationsstore").put(c);g.onsuccess=()=>{e()};
g.onerror=()=>{f()}}catch(g){f(g)}}))}
function gf(){return M("IndexedDBCheck","testing IndexedDB").then(()=>hf("IndexedDBCheck")).then(a=>"testing IndexedDB"===a?Promise.resolve():Promise.reject()).then(()=>!0).catch(()=>!1)}
function hf(a){const b=new L("Error accessing DB");return ff().then(c=>new Promise((d,e)=>{try{const f=c.transaction("swpushnotificationsstore").objectStore("swpushnotificationsstore").get(a);f.onsuccess=()=>{const g=f.result;d(g?g.value:null)};
f.onerror=()=>{b.params={key:a,source:"onerror"};e(b)}}catch(f){b.params={key:a,
thrownError:String(f)},e(b)}}),()=>null)}
function ff(){return ef?Promise.resolve(ef):new Promise((a,b)=>{const c=self.indexedDB.open("swpushnotificationsdb");c.onerror=b;c.onsuccess=()=>{const d=c.result;if(d.objectStoreNames.contains("swpushnotificationsstore"))ef=d,a(ef);else return self.indexedDB.deleteDatabase("swpushnotificationsdb"),ff()};
c.onupgradeneeded=jf})}
function jf(a){a=a.target.result;a.objectStoreNames.contains("swpushnotificationsstore")&&a.deleteObjectStore("swpushnotificationsstore");a.createObjectStore("swpushnotificationsstore",{keyPath:"key"})}
;const kf={WEB_UNPLUGGED:"^unplugged/",WEB_UNPLUGGED_ONBOARDING:"^unplugged/",WEB_UNPLUGGED_OPS:"^unplugged/",WEB_UNPLUGGED_PUBLIC:"^unplugged/",WEB_CREATOR:"^creator/",WEB_KIDS:"^kids/",WEB_EXPERIMENTS:"^experiments/",WEB_MUSIC:"^music/",WEB_REMIX:"^music/",WEB_MUSIC_EMBEDDED_PLAYER:"^music/",WEB_MUSIC_EMBEDDED_PLAYER:"^main_app/|^sfv/"};
function lf(a){if(1===a.length)return a[0];var b=kf.UNKNOWN_INTERFACE;if(b){b=new RegExp(b);for(var c of a)if(b.exec(c))return c}const d=[];Object.entries(kf).forEach(([e,f])=>{"UNKNOWN_INTERFACE"!==e&&d.push(f)});
c=new RegExp(d.join("|"));a.sort((e,f)=>e.length-f.length);
for(const e of a)if(!c.exec(e))return e;return a[0]}
function mf(a){return`/youtubei/v1/${lf(a)}`}
;const nf=r.window;let of,pf;const qf=(null==nf?void 0:null==(of=nf.yt)?void 0:of.config_)||(null==nf?void 0:null==(pf=nf.ytcfg)?void 0:pf.data_)||{};t("yt.config_",qf);function N(...a){a=arguments;1<a.length?qf[a[0]]=a[1]:1===a.length&&Object.assign(qf,a[0])}
function O(a,b){return a in qf?qf[a]:b}
function rf(){return O("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS")}
function sf(){const a=qf.EXPERIMENT_FLAGS;return a?a.web_disable_gel_stp_ecatcher_killswitch:void 0}
;const tf=[];function uf(a){tf.forEach(b=>b(a))}
function P(a){return a&&window.yterr?function(){try{return a.apply(this,arguments)}catch(b){vf(b)}}:a}
function vf(a){var b=u("yt.logging.errors.log");b?b(a,"ERROR",void 0,void 0,void 0,void 0,void 0):(b=O("ERRORS",[]),b.push([a,"ERROR",void 0,void 0,void 0,void 0,void 0]),N("ERRORS",b));uf(a)}
function wf(a){var b=u("yt.logging.errors.log");b?b(a,"WARNING",void 0,void 0,void 0,void 0,void 0):(b=O("ERRORS",[]),b.push([a,"WARNING",void 0,void 0,void 0,void 0,void 0]),N("ERRORS",b))}
;function Q(a){a=xf(a);return"string"===typeof a&&"false"===a?!1:!!a}
function yf(a,b){a=xf(a);return void 0===a&&void 0!==b?b:Number(a||0)}
function zf(){return O("EXPERIMENTS_TOKEN","")}
function xf(a){const b=O("EXPERIMENTS_FORCED_FLAGS",{})||{};return void 0!==b[a]?b[a]:O("EXPERIMENT_FLAGS",{})[a]}
function Af(){const a=[],b=O("EXPERIMENTS_FORCED_FLAGS",{});for(var c of Object.keys(b))a.push({key:c,value:String(b[c])});c=O("EXPERIMENT_FLAGS",{});for(const d of Object.keys(c))d.startsWith("force_")&&void 0===b[d]&&a.push({key:d,value:String(c[d])});return a}
;function Bf(a,b){if(a)return a[b.name]}
;let Cf=0;t("ytDomDomGetNextId",u("ytDomDomGetNextId")||(()=>++Cf));function Df(a){this.version=1;this.args=a}
;function Ef(){var a=Ff;this.topic="screen-created";this.h=a}
Ef.prototype.toString=function(){return this.topic};function Gf(a,b){"function"===typeof a&&(a=P(a));return window.setTimeout(a,b)}
;var If=class{h(a,b){Hf(a,1,b)}};function Hf(a,b,c){void 0!==c&&Number.isNaN(Number(c))&&(c=void 0);const d=u("yt.scheduler.instance.addJob");return d?d(a,b,c):void 0===c?(a(),NaN):Gf(a,c||0)}
var Jf=class extends If{i(a){if(void 0===a||!Number.isNaN(Number(a))){var b=u("yt.scheduler.instance.cancelJob");b?b(a):window.clearTimeout(a)}}start(){const a=u("yt.scheduler.instance.start");a&&a()}};Jf.h||(Jf.h=new Jf);var Kf=Jf.h;const Lf=u("ytPubsub2Pubsub2Instance")||new G;G.prototype.subscribe=G.prototype.P;G.prototype.unsubscribeByKey=G.prototype.F;G.prototype.publish=G.prototype.v;G.prototype.clear=G.prototype.clear;t("ytPubsub2Pubsub2Instance",Lf);const Mf=u("ytPubsub2Pubsub2SubscribedKeys")||{};t("ytPubsub2Pubsub2SubscribedKeys",Mf);const Nf=u("ytPubsub2Pubsub2TopicToKeys")||{};t("ytPubsub2Pubsub2TopicToKeys",Nf);const Of=u("ytPubsub2Pubsub2IsAsync")||{};t("ytPubsub2Pubsub2IsAsync",Of);
t("ytPubsub2Pubsub2SkipSubKey",null);function Pf(a){var b=Qf;const c=Rf();c&&c.publish.call(c,b.toString(),b,a)}
function Sf(a){var b=Qf;const c=Rf();if(!c)return 0;const d=c.subscribe(b.toString(),(e,f)=>{var g=u("ytPubsub2Pubsub2SkipSubKey");g&&g==d||(g=()=>{if(Mf[d])try{if(f&&b instanceof Ef&&b!=e)try{var h=b.h,k=f;if(!k.args||!k.version)throw Error("yt.pubsub2.Data.deserialize(): serializedData is incomplete.");try{if(!h.qa){const n=new h;h.qa=n.version}var l=h.qa}catch(n){}if(!l||k.version!=l)throw Error("yt.pubsub2.Data.deserialize(): serializedData version is incompatible.");try{l=Reflect;var m=l.construct;
{var p=k.args;const n=p.length;if(0<n){const z=Array(n);for(k=0;k<n;k++)z[k]=p[k];var v=z}else v=[]}f=m.call(l,h,v)}catch(n){throw n.message="yt.pubsub2.Data.deserialize(): "+n.message,n;}}catch(n){throw n.message="yt.pubsub2.pubsub2 cross-binary conversion error for "+b.toString()+": "+n.message,n;}a.call(window,f)}catch(n){vf(n)}},Of[b.toString()]?u("yt.scheduler.instance")?Kf.h(g):Gf(g,0):g())});
Mf[d]=!0;Nf[b.toString()]||(Nf[b.toString()]=[]);Nf[b.toString()].push(d);return d}
function Tf(){var a=Uf;const b=Sf(function(c){a.apply(void 0,arguments);Vf(b)});
return b}
function Vf(a){const b=Rf();b&&("number"===typeof a&&(a=[a]),pa(a,c=>{b.unsubscribeByKey(c);delete Mf[c]}))}
function Rf(){return u("ytPubsub2Pubsub2Instance")}
;let Wf=Date.now().toString();function Xf(){const a=Array(16);for(var b=0;16>b;b++){var c=Date.now();for(let d=0;d<c%23;d++)a[b]=Math.random();a[b]=Math.floor(256*Math.random())}if(Wf)for(b=1,c=0;c<Wf.length;c++)a[b%16]=a[b%16]^a[(b-1)%16]/4^Wf.charCodeAt(c),b++;return a}
function Yf(){if(window.crypto&&window.crypto.getRandomValues)try{const a=Array(16),b=new Uint8Array(16);window.crypto.getRandomValues(b);for(let c=0;c<a.length;c++)a[c]=b[c];return a}catch(a){}return Xf()}
;const Zf=window;var R=Zf.ytcsi&&Zf.ytcsi.now?Zf.ytcsi.now:Zf.performance&&Zf.performance.timing&&Zf.performance.now&&Zf.performance.timing.navigationStart?()=>Zf.performance.timing.navigationStart+Zf.performance.now():()=>(new Date).getTime();const $f=/^[\w.]*$/,ag={q:!0,search_query:!0};function bg(a,b){b=a.split(b);const c={};for(let f=0,g=b.length;f<g;f++){const h=b[f].split("=");if(1==h.length&&h[0]||2==h.length)try{const k=cg(h[0]||""),l=cg(h[1]||"");k in c?Array.isArray(c[k])?sa(c[k],l):c[k]=[c[k],l]:c[k]=l}catch(k){var d=k,e=h[0];const l=String(bg);d.args=[{key:e,value:h[1],query:a,method:dg==l?"unchanged":l}];ag.hasOwnProperty(e)||wf(d)}}return c}
const dg=String(bg);function eg(a){"?"==a.charAt(0)&&(a=a.substr(1));return bg(a,"&")}
function fg(a,b,c){var d=a.split("#",2);a=d[0];d=1<d.length?"#"+d[1]:"";var e=a.split("?",2);a=e[0];e=eg(e[1]||"");for(var f in b)!c&&null!==e&&f in e||(e[f]=b[f]);b=a;a=Pa(e);a?(c=b.indexOf("#"),0>c&&(c=b.length),f=b.indexOf("?"),0>f||f>c?(f=c,e=""):e=b.substring(f+1,c),b=[b.slice(0,f),e,b.slice(c)],c=b[1],b[1]=a?c?c+"&"+a:a:c,a=b[0]+(b[1]?"?"+b[1]:"")+b[2]):a=b;return a+d}
function gg(a){if(!b)var b=window.location.href;const c=a.match(Ma)[1]||null,d=Na(a.match(Ma)[3]||null);c&&d?(a=a.match(Ma),b=b.match(Ma),a=a[3]==b[3]&&a[1]==b[1]&&a[4]==b[4]):a=d?Na(b.match(Ma)[3]||null)==d&&(Number(b.match(Ma)[4]||null)||null)==(Number(a.match(Ma)[4]||null)||null):!0;return a}
function cg(a){return a&&a.match($f)?a:decodeURIComponent(a.replace(/\+/g," "))}
;[...Wc];let hg=!1;function ig(a,b){const c={method:b.method||"GET",credentials:"same-origin"};b.headers&&(c.headers=b.headers);a=jg(a,b);const d=kg(a,b);d&&(c.body=d);b.withCredentials&&(c.credentials="include");const e=b.context||r;let f=!1,g;fetch(a,c).then(h=>{if(!f){f=!0;g&&window.clearTimeout(g);var k=h.ok,l=m=>{m=m||{};k?b.onSuccess&&b.onSuccess.call(e,m,h):b.onError&&b.onError.call(e,m,h);b.onFinish&&b.onFinish.call(e,m,h)};
"JSON"==(b.format||"JSON")&&(k||400<=h.status&&500>h.status)?h.json().then(l,function(){l(null)}):l(null)}}).catch(()=>{b.onError&&b.onError.call(e,{},{})});
a=b.timeout||0;b.onFetchTimeout&&0<a&&(g=Gf(()=>{f||(f=!0,window.clearTimeout(g),b.onFetchTimeout.call(b.context||r))},a))}
function jg(a,b){b.includeDomain&&(a=document.location.protocol+"//"+document.location.hostname+(document.location.port?":"+document.location.port:"")+a);const c=O("XSRF_FIELD_NAME");if(b=b.urlParams)b[c]&&delete b[c],a=fg(a,b||{},!0);return a}
function kg(a,b){const c=O("XSRF_FIELD_NAME"),d=O("XSRF_TOKEN");var e=b.postBody||"",f=b.postParams;const g=O("XSRF_FIELD_NAME");let h;b.headers&&(h=b.headers["Content-Type"]);b.excludeXsrf||Na(a.match(Ma)[3]||null)&&!b.withCredentials&&Na(a.match(Ma)[3]||null)!=document.location.hostname||"POST"!=b.method||h&&"application/x-www-form-urlencoded"!=h||b.postParams&&b.postParams[g]||(f||(f={}),f[c]=d);(Q("ajax_parse_query_data_only_when_filled")&&f&&0<Object.keys(f).length||f)&&"string"===typeof e&&
(e=eg(e),ya(e,f),e=b.postBodyFormat&&"JSON"==b.postBodyFormat?JSON.stringify(e):Pa(e));f=e||f&&!va(f);!hg&&f&&"POST"!=b.method&&(hg=!0,vf(Error("AJAX request with postData should use POST")));return e}
;const lg=[{da:a=>`Cannot read property '${a.key}'`,
W:{Error:[{A:/(Permission denied) to access property "([^']+)"/,groups:["reason","key"]}],TypeError:[{A:/Cannot read property '([^']+)' of (null|undefined)/,groups:["key","value"]},{A:/\u65e0\u6cd5\u83b7\u53d6\u672a\u5b9a\u4e49\u6216 (null|undefined) \u5f15\u7528\u7684\u5c5e\u6027\u201c([^\u201d]+)\u201d/,groups:["value","key"]},{A:/\uc815\uc758\ub418\uc9c0 \uc54a\uc74c \ub610\ub294 (null|undefined) \ucc38\uc870\uc778 '([^']+)' \uc18d\uc131\uc744 \uac00\uc838\uc62c \uc218 \uc5c6\uc2b5\ub2c8\ub2e4./,
groups:["value","key"]},{A:/No se puede obtener la propiedad '([^']+)' de referencia nula o sin definir/,groups:["key"]},{A:/Unable to get property '([^']+)' of (undefined or null) reference/,groups:["key","value"]},{A:/(null) is not an object \(evaluating '(?:([^.]+)\.)?([^']+)'\)/,groups:["value","base","key"]}]}},{da:a=>`Cannot call '${a.key}'`,
W:{TypeError:[{A:/(?:([^ ]+)?\.)?([^ ]+) is not a function/,groups:["base","key"]},{A:/([^ ]+) called on (null or undefined)/,groups:["key","value"]},{A:/Object (.*) has no method '([^ ]+)'/,groups:["base","key"]},{A:/Object doesn't support property or method '([^ ]+)'/,groups:["key"]},{A:/\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306f '([^']+)' \u30d7\u30ed\u30d1\u30c6\u30a3\u307e\u305f\u306f\u30e1\u30bd\u30c3\u30c9\u3092\u30b5\u30dd\u30fc\u30c8\u3057\u3066\u3044\u307e\u305b\u3093/,groups:["key"]},{A:/\uac1c\uccb4\uac00 '([^']+)' \uc18d\uc131\uc774\ub098 \uba54\uc11c\ub4dc\ub97c \uc9c0\uc6d0\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4./,
groups:["key"]}]}},{da:a=>`${a.key} is not defined`,
W:{ReferenceError:[{A:/(.*) is not defined/,groups:["key"]},{A:/Can't find variable: (.*)/,groups:["key"]}]}}];var ng={I:[],G:[{callback:mg,weight:500}]};function mg(a){if("JavaException"===a.name)return!0;a=a.stack;return a.includes("chrome://")||a.includes("chrome-extension://")||a.includes("moz-extension://")}
;function og(){if(!pg){var a=pg=new qg;a.I.length=0;a.G.length=0;rg(a,ng)}return pg}
function rg(a,b){b.I&&a.I.push.apply(a.I,b.I);b.G&&a.G.push.apply(a.G,b.G)}
var qg=class{constructor(){this.G=[];this.I=[]}},pg;const sg=new G;function tg(a){const b=a.length;let c=0;const d=()=>a.charCodeAt(c++);
do{var e=ug(d);if(Infinity===e)break;const f=e>>3;switch(e&7){case 0:e=ug(d);if(2===f)return e;break;case 1:if(2===f)return;c+=8;break;case 2:e=ug(d);if(2===f)return a.substr(c,e);c+=e;break;case 5:if(2===f)return;c+=4;break;default:return}}while(c<b)}
function ug(a){let b=a(),c=b&127;if(128>b)return c;b=a();c|=(b&127)<<7;if(128>b)return c;b=a();c|=(b&127)<<14;if(128>b)return c;b=a();return 128>b?c|(b&127)<<21:Infinity}
;function vg(a,b,c,d){if(a)if(Array.isArray(a)){var e=d;for(d=0;d<a.length&&!(a[d]&&(e+=wg(d,a[d],b,c),500<e));d++);d=e}else if("object"===typeof a)for(e in a){if(a[e]){var f=e;var g=a[e],h=b,k=c;f="string"!==typeof g||"clickTrackingParams"!==f&&"trackingParams"!==f?0:(g=tg(atob(g.replace(/-/g,"+").replace(/_/g,"/"))))?wg(`${f}.ve`,g,h,k):0;d+=f;d+=wg(e,a[e],b,c);if(500<d)break}}else c[b]=xg(a),d+=c[b].length;else c[b]=xg(a),d+=c[b].length;return d}
function wg(a,b,c,d){c+=`.${a}`;a=xg(b);d[c]=a;return c.length+a.length}
function xg(a){try{return("string"===typeof a?a:String(JSON.stringify(a))).substr(0,500)}catch(b){return`unable to serialize ${typeof a} (${b.message})`}}
;function yg(){zg.h||(zg.h=new zg);return zg.h}
function Ag(a,b){a={};var c=[],d=Vc(String(r.location.href));var e=[];var f=r.__SAPISID||r.__APISID||r.__3PSAPISID||r.__OVERRIDE_SID;ed()&&(f=f||r.__1PSAPISID);if(f)var g=!0;else g=new dd,f=g.get("SAPISID")||g.get("APISID")||g.get("__Secure-3PAPISID")||g.get("SID")||g.get("OSID"),ed()&&(f=f||g.get("__Secure-1PAPISID")),g=!!f;g&&(f=(g=d=0==d.indexOf("https:")||0==d.indexOf("chrome-extension:")||0==d.indexOf("moz-extension:"))?r.__SAPISID:r.__APISID,f||(f=new dd,f=f.get(g?"SAPISID":"APISID")||f.get("__Secure-3PAPISID")),
(g=f?Zc(f,g?"SAPISIDHASH":"APISIDHASH",c):null)&&e.push(g),d&&ed()&&((d=fd("__1PSAPISID","__Secure-1PAPISID","SAPISID1PHASH",c))&&e.push(d),(c=fd("__3PSAPISID","__Secure-3PAPISID","SAPISID3PHASH",c))&&e.push(c)));if(e=0==e.length?null:e.join(" "))a.Authorization=e,e=b=null==b?void 0:b.sessionIndex,void 0===e&&(e=Number(O("SESSION_INDEX",0)),e=isNaN(e)?0:e),Q("voice_search_auth_header_removal")||(a["X-Goog-AuthUser"]=e.toString()),"INNERTUBE_HOST_OVERRIDE"in qf||(a["X-Origin"]=window.location.origin),
void 0===b&&"DELEGATED_SESSION_ID"in qf&&(a["X-Goog-PageId"]=O("DELEGATED_SESSION_ID"));return a}
var zg=class{constructor(){this.Pa=!0}};var Bg={identityType:"UNAUTHENTICATED_IDENTITY_TYPE_UNKNOWN"};t("ytglobal.prefsUserPrefsPrefs_",u("ytglobal.prefsUserPrefsPrefs_")||{});function Cg(){if(void 0!==O("DATASYNC_ID"))return O("DATASYNC_ID");throw new L("Datasync ID not set","unknown");}
;const Dg=[];let Eg,Fg=!1;function Gg(a){Fg||(Eg?Eg.handleError(a):(Dg.push({type:"ERROR",payload:a}),10<Dg.length&&Dg.shift()))}
function Hg(a,b){Fg||(Eg?Eg.V(a,b):(Dg.push({type:"EVENT",eventType:a,payload:b}),10<Dg.length&&Dg.shift()))}
;function Ig(a){if(0<=a.indexOf(":"))throw Error("Database name cannot contain ':'");}
function Jg(a){return a.substr(0,a.indexOf(":"))||a}
;const Kg={AUTH_INVALID:"No user identifier specified.",EXPLICIT_ABORT:"Transaction was explicitly aborted.",IDB_NOT_SUPPORTED:"IndexedDB is not supported.",MISSING_INDEX:"Index not created.",MISSING_OBJECT_STORES:"Object stores not created.",DB_DELETED_BY_MISSING_OBJECT_STORES:"Database is deleted because expected object stores were not created.",DB_REOPENED_BY_MISSING_OBJECT_STORES:"Database is reopened because expected object stores were not created.",UNKNOWN_ABORT:"Transaction was aborted for unknown reasons.",
QUOTA_EXCEEDED:"The current transaction exceeded its quota limitations.",QUOTA_MAYBE_EXCEEDED:"The current transaction may have failed because of exceeding quota limitations.",EXECUTE_TRANSACTION_ON_CLOSED_DB:"Can't start a transaction on a closed database",INCOMPATIBLE_DB_VERSION:"The binary is incompatible with the database version"},Lg={AUTH_INVALID:"ERROR",EXECUTE_TRANSACTION_ON_CLOSED_DB:"WARNING",EXPLICIT_ABORT:"IGNORED",IDB_NOT_SUPPORTED:"ERROR",MISSING_INDEX:"WARNING",MISSING_OBJECT_STORES:"ERROR",
DB_DELETED_BY_MISSING_OBJECT_STORES:"WARNING",DB_REOPENED_BY_MISSING_OBJECT_STORES:"WARNING",QUOTA_EXCEEDED:"WARNING",QUOTA_MAYBE_EXCEEDED:"WARNING",UNKNOWN_ABORT:"WARNING",INCOMPATIBLE_DB_VERSION:"WARNING"},Mg={AUTH_INVALID:!1,EXECUTE_TRANSACTION_ON_CLOSED_DB:!1,EXPLICIT_ABORT:!1,IDB_NOT_SUPPORTED:!1,MISSING_INDEX:!1,MISSING_OBJECT_STORES:!1,DB_DELETED_BY_MISSING_OBJECT_STORES:!1,DB_REOPENED_BY_MISSING_OBJECT_STORES:!1,QUOTA_EXCEEDED:!1,QUOTA_MAYBE_EXCEEDED:!0,UNKNOWN_ABORT:!0,INCOMPATIBLE_DB_VERSION:!1};
var S=class extends L{constructor(a,b={},c=Kg[a],d=Lg[a],e=Mg[a]){super(c,Object.assign({},{name:"YtIdbKnownError",isSw:void 0===self.document,isIframe:self!==self.top,type:a},b));this.type=a;this.message=c;this.level=d;this.h=e;Object.setPrototypeOf(this,S.prototype)}},Ng=class extends S{constructor(a,b){super("MISSING_OBJECT_STORES",{expectedObjectStores:b,foundObjectStores:a},Kg.MISSING_OBJECT_STORES);Object.setPrototypeOf(this,Ng.prototype)}},Og=class extends Error{constructor(a,b){super();this.index=
a;this.objectStore=b;Object.setPrototypeOf(this,Og.prototype)}};const Pg=["The database connection is closing","Can't start a transaction on a closed database","A mutation operation was attempted on a database that did not allow mutations"];
function Qg(a,b,c,d){b=Jg(b);let e;e=a instanceof Error?a:Error(`Unexpected error: ${a}`);if(e instanceof S)return e;a={objectStoreNames:c,dbName:b,dbVersion:d};if("QuotaExceededError"===e.name)return new S("QUOTA_EXCEEDED",a);if(ab&&"UnknownError"===e.name)return new S("QUOTA_MAYBE_EXCEEDED",a);if(e instanceof Og)return new S("MISSING_INDEX",Object.assign({},a,{objectStore:e.objectStore,index:e.index}));if("InvalidStateError"===e.name&&Pg.some(f=>e.message.includes(f)))return new S("EXECUTE_TRANSACTION_ON_CLOSED_DB",
a);
if("AbortError"===e.name)return new S("UNKNOWN_ABORT",a,e.message);e.args=[Object.assign({},a,{name:"IdbError",Lb:e.name})];e.level="WARNING";return e}
function Rg(a,b,c){return new S("IDB_NOT_SUPPORTED",{context:{caller:a,publicName:b,version:c,hasSucceededOnce:void 0}})}
;function Sg(a){if(!a)throw Error();throw a;}
function Tg(a){return a}
var Ug=class{constructor(a){this.h=a}};function Vg(a,b,c,d,e){try{if("FULFILLED"!==a.state.status)throw Error("calling handleResolve before the promise is fulfilled.");const f=c(a.state.value);f instanceof Wg?Xg(a,b,f,d,e):d(f)}catch(f){e(f)}}
function Yg(a,b,c,d,e){try{if("REJECTED"!==a.state.status)throw Error("calling handleReject before the promise is rejected.");const f=c(a.state.reason);f instanceof Wg?Xg(a,b,f,d,e):d(f)}catch(f){e(f)}}
function Xg(a,b,c,d,e){b===c?e(new TypeError("Circular promise chain detected.")):c.then(f=>{f instanceof Wg?Xg(a,b,f,d,e):d(f)},f=>{e(f)})}
var Wg=class{constructor(a){this.state={status:"PENDING"};this.h=[];this.i=[];a=a.h;const b=d=>{if("PENDING"===this.state.status){this.state={status:"FULFILLED",value:d};for(const e of this.h)e()}},c=d=>{if("PENDING"===this.state.status){this.state={status:"REJECTED",
reason:d};for(const e of this.i)e()}};
try{a(b,c)}catch(d){c(d)}}static all(a){return new Wg(new Ug((b,c)=>{const d=[];let e=a.length;0===e&&b(d);for(let f=0;f<a.length;++f)Wg.resolve(a[f]).then(g=>{d[f]=g;e--;0===e&&b(d)}).catch(g=>{c(g)})}))}static resolve(a){return new Wg(new Ug((b,c)=>{a instanceof Wg?a.then(b,c):b(a)}))}then(a,b){const c=null!=a?a:Tg,d=null!=b?b:Sg;
return new Wg(new Ug((e,f)=>{"PENDING"===this.state.status?(this.h.push(()=>{Vg(this,this,c,e,f)}),this.i.push(()=>{Yg(this,this,d,e,f)})):"FULFILLED"===this.state.status?Vg(this,this,c,e,f):"REJECTED"===this.state.status&&Yg(this,this,d,e,f)}))}catch(a){return this.then(void 0,a)}};function Zg(a,b,c){const d=()=>{try{a.removeEventListener("success",e),a.removeEventListener("error",f)}catch(g){}},e=()=>{b(a.result);
d()},f=()=>{c(a.error);
d()};
a.addEventListener("success",e);a.addEventListener("error",f)}
function $g(a){return new Promise((b,c)=>{Zg(a,b,c)})}
function T(a){return new Wg(new Ug((b,c)=>{Zg(a,b,c)}))}
;function ah(a,b){return new Wg(new Ug((c,d)=>{const e=()=>{const f=a?b(a):null;f?f.then(g=>{a=g;e()},d):c()};
e()}))}
;function U(a,b,c,d){return q(function*(){const e={mode:"readonly",C:!1,tag:"IDB_TRANSACTION_TAG_UNKNOWN"};"string"===typeof c?e.mode=c:Object.assign(e,c);a.transactionCount++;const f=e.C?3:1;let g=0,h;for(;!h;){g++;const l=Math.round(R());try{const m=a.h.transaction(b,e.mode);var k=d;const p=new bh(m),v=yield ch(p,k),n=Math.round(R());dh(a,l,n,g,void 0,b.join(),e);return v}catch(m){k=Math.round(R());const p=Qg(m,a.h.name,b.join(),a.h.version);if(p instanceof S&&!p.h||g>=f)dh(a,l,k,g,p,b.join(),e),
h=p}}return Promise.reject(h)})}
function eh(a,b,c){a=a.h.createObjectStore(b,c);return new fh(a)}
function gh(a,b,c,d){return U(a,[b],{mode:"readwrite",C:!0},e=>{e=e.objectStore(b);return T(e.h.put(c,d))})}
function dh(a,b,c,d,e,f,g){b=c-b;e?(e instanceof S&&("QUOTA_EXCEEDED"===e.type||"QUOTA_MAYBE_EXCEEDED"===e.type)&&Hg("QUOTA_EXCEEDED",{dbName:Jg(a.h.name),objectStoreNames:f,transactionCount:a.transactionCount,transactionMode:g.mode}),e instanceof S&&"UNKNOWN_ABORT"===e.type&&(c-=a.j,0>c&&c>=Math.pow(2,31)&&(c=0),Hg("TRANSACTION_UNEXPECTEDLY_ABORTED",{objectStoreNames:f,transactionDuration:b,transactionCount:a.transactionCount,dbDuration:c}),a.i=!0),hh(a,!1,d,f,b,g.tag),Gg(e)):hh(a,!0,d,f,b,g.tag)}
function hh(a,b,c,d,e,f="IDB_TRANSACTION_TAG_UNKNOWN"){Hg("TRANSACTION_ENDED",{objectStoreNames:d,connectionHasUnknownAbortedTransaction:a.i,duration:e,isSuccessful:b,tryCount:c,tag:f})}
var ih=class{constructor(a,b){this.h=a;this.options=b;this.transactionCount=0;this.j=Math.round(R());this.i=!1}add(a,b,c){return U(this,[a],{mode:"readwrite",C:!0},d=>d.objectStore(a).add(b,c))}clear(a){return U(this,[a],{mode:"readwrite",
C:!0},b=>b.objectStore(a).clear())}close(){this.h.close();
let a;(null==(a=this.options)?0:a.closed)&&this.options.closed()}count(a,b){return U(this,[a],{mode:"readonly",C:!0},c=>c.objectStore(a).count(b))}delete(a,b){return U(this,[a],{mode:"readwrite",
C:!0},c=>c.objectStore(a).delete(b))}get(a,b){return U(this,[a],{mode:"readonly",
C:!0},c=>c.objectStore(a).get(b))}objectStoreNames(){return Array.from(this.h.objectStoreNames)}getName(){return this.h.name}};
function jh(a,b,c){a=a.h.openCursor(b.query,b.direction);return kh(a).then(d=>ah(d,c))}
function lh(a,b){return jh(a,{query:b},c=>c.delete().then(()=>c.continue())).then(()=>{})}
var fh=class{constructor(a){this.h=a}add(a,b){return T(this.h.add(a,b))}autoIncrement(){return this.h.autoIncrement}clear(){return T(this.h.clear()).then(()=>{})}count(a){return T(this.h.count(a))}delete(a){return a instanceof IDBKeyRange?lh(this,a):T(this.h.delete(a))}get(a){return T(this.h.get(a))}index(a){try{return new mh(this.h.index(a))}catch(b){if(b instanceof Error&&"NotFoundError"===b.name)throw new Og(a,this.h.name);
throw b;}}getName(){return this.h.name}keyPath(){return this.h.keyPath}};function ch(a,b){const c=new Promise((d,e)=>{try{b(a).then(f=>{d(f)}).catch(e)}catch(f){e(f),a.abort()}});
return Promise.all([c,a.done]).then(([d])=>d)}
var bh=class{constructor(a){this.h=a;this.j=new Map;this.i=!1;this.done=new Promise((b,c)=>{this.h.addEventListener("complete",()=>{b()});
this.h.addEventListener("error",d=>{d.currentTarget===d.target&&c(this.h.error)});
this.h.addEventListener("abort",()=>{var d=this.h.error;if(d)c(d);else if(!this.i){d=S;var e=this.h.objectStoreNames;const f=[];for(let g=0;g<e.length;g++){const h=e.item(g);if(null===h)throw Error("Invariant: item in DOMStringList is null");f.push(h)}d=new d("UNKNOWN_ABORT",{objectStoreNames:f.join(),dbName:this.h.db.name,mode:this.h.mode});c(d)}})})}abort(){this.h.abort();
this.i=!0;throw new S("EXPLICIT_ABORT");}objectStore(a){a=this.h.objectStore(a);let b=this.j.get(a);b||(b=new fh(a),this.j.set(a,b));return b}};function nh(a,b,c){const {query:d=null,direction:e="next"}=b;a=a.h.openCursor(d,e);return kh(a).then(f=>ah(f,c))}
var mh=class{constructor(a){this.h=a}count(a){return T(this.h.count(a))}delete(a){return nh(this,{query:a},b=>b.delete().then(()=>b.continue()))}get(a){return T(this.h.get(a))}getKey(a){return T(this.h.getKey(a))}keyPath(){return this.h.keyPath}unique(){return this.h.unique}};
function kh(a){return T(a).then(b=>b?new oh(a,b):null)}
var oh=class{constructor(a,b){this.request=a;this.cursor=b}advance(a){this.cursor.advance(a);return kh(this.request)}continue(a){this.cursor.continue(a);return kh(this.request)}delete(){return T(this.cursor.delete()).then(()=>{})}getKey(){return this.cursor.key}R(){return this.cursor.value}update(a){return T(this.cursor.update(a))}};function ph(a,b,c){return new Promise((d,e)=>{let f;f=void 0!==b?self.indexedDB.open(a,b):self.indexedDB.open(a);const g=c.za,h=c.blocking,k=c.Qa,l=c.upgrade,m=c.closed;let p;const v=()=>{p||(p=new ih(f.result,{closed:m}));return p};
f.addEventListener("upgradeneeded",n=>{try{if(null===n.newVersion)throw Error("Invariant: newVersion on IDbVersionChangeEvent is null");if(null===f.transaction)throw Error("Invariant: transaction on IDbOpenDbRequest is null");n.dataLoss&&"none"!==n.dataLoss&&Hg("IDB_DATA_CORRUPTED",{reason:n.dataLossMessage||"unknown reason",dbName:Jg(a)});const z=v(),H=new bh(f.transaction);l&&l(z,E=>n.oldVersion<E&&n.newVersion>=E,H);
H.done.catch(E=>{e(E)})}catch(z){e(z)}});
f.addEventListener("success",()=>{const n=f.result;h&&n.addEventListener("versionchange",()=>{h(v())});
n.addEventListener("close",()=>{Hg("IDB_UNEXPECTEDLY_CLOSED",{dbName:Jg(a),dbVersion:n.version});k&&k()});
d(v())});
f.addEventListener("error",()=>{e(f.error)});
g&&f.addEventListener("blocked",()=>{g()})})}
function qh(a,b,c={}){return ph(a,b,c)}
function rh(a,b={}){return q(function*(){try{const c=self.indexedDB.deleteDatabase(a),d=b.za;d&&c.addEventListener("blocked",()=>{d()});
yield $g(c)}catch(c){throw Qg(c,a,"",-1);}})}
;function sh(a,b){return new S("INCOMPATIBLE_DB_VERSION",{dbName:a.name,oldVersion:a.options.version,newVersion:b})}
function th(a,b){if(!b)throw Rg("openWithToken",Jg(a.name));return a.open()}
var uh=class{constructor(a,b){this.name=a;this.options=b;this.j=!0;this.m=this.l=0}i(a,b,c={}){return qh(a,b,c)}delete(a={}){return rh(this.name,a)}open(){if(!this.j)throw sh(this);if(this.h)return this.h;let a;const b=()=>{this.h===a&&(this.h=void 0)},c={blocking:e=>{e.close()},
closed:b,Qa:b,upgrade:this.options.upgrade},d=()=>{const e=this;return q(function*(){var f,g=null!=(f=Error().stack)?f:"";try{const k=yield e.i(e.name,e.options.version,c);f=k;var h=e.options;const l=[];for(const m of Object.keys(h.O)){const {N:p,Rb:v=Number.MAX_VALUE}=h.O[m];!(f.h.version>=p)||f.h.version>=v||f.h.objectStoreNames.contains(m)||l.push(m)}if(0!==l.length){const m=Object.keys(e.options.O),p=k.objectStoreNames();if(e.m<yf("ytidb_reopen_db_retries",0))return e.m++,k.close(),Gg(new S("DB_REOPENED_BY_MISSING_OBJECT_STORES",
{dbName:e.name,expectedObjectStores:m,foundObjectStores:p})),d();if(e.l<yf("ytidb_remake_db_retries",1))return e.l++,yield e.delete(),Gg(new S("DB_DELETED_BY_MISSING_OBJECT_STORES",{dbName:e.name,expectedObjectStores:m,foundObjectStores:p})),d();throw new Ng(p,m);}return k}catch(k){if(k instanceof DOMException?"VersionError"===k.name:"DOMError"in self&&k instanceof DOMError?"VersionError"===k.name:k instanceof Object&&"message"in k&&"An attempt was made to open a database using a lower version than the existing version."===
k.message){g=yield e.i(e.name,void 0,Object.assign({},c,{upgrade:void 0}));h=g.h.version;if(void 0!==e.options.version&&h>e.options.version+1)throw g.close(),e.j=!1,sh(e,h);return g}b();k instanceof Error&&!Q("ytidb_async_stack_killswitch")&&(k.stack=`${k.stack}\n${g.substring(g.indexOf("\n")+1)}`);let l;throw Qg(k,e.name,"",null!=(l=e.options.version)?l:-1);}})};
return this.h=a=d()}};const vh=new uh("YtIdbMeta",{O:{databases:{N:1}},upgrade(a,b){b(1)&&eh(a,"databases",{keyPath:"actualName"})}});function wh(a,b){return q(function*(){return U(yield th(vh,b),["databases"],{C:!0,mode:"readwrite"},c=>{const d=c.objectStore("databases");return d.get(a.actualName).then(e=>{if(e?a.actualName!==e.actualName||a.publicName!==e.publicName||a.userIdentifier!==e.userIdentifier:1)return T(d.h.put(a,void 0)).then(()=>{})})})})}
function xh(a,b){return q(function*(){if(a)return(yield th(vh,b)).delete("databases",a)})}
;let yh;const zh=new class{constructor(){}}(new class{constructor(){}});function Ah(){return q(function*(){return!0})}
function Bh(){if(void 0!==yh)return yh;Fg=!0;return yh=Ah().then(a=>{Fg=!1;return a})}
function Ch(){return u("ytglobal.idbToken_")||void 0}
function Dh(){const a=Ch();return a?Promise.resolve(a):Bh().then(b=>{(b=b?zh:void 0)&&t("ytglobal.idbToken_",b);return b})}
;new td;function Eh(a){try{Cg();var b=!0}catch(c){b=!1}if(!b)throw a=new S("AUTH_INVALID",{dbName:a}),Gg(a),a;b=Cg();return{actualName:`${a}:${b}`,publicName:a,userIdentifier:b}}
function Fh(a,b,c,d){return q(function*(){var e,f=null!=(e=Error().stack)?e:"";e=yield Dh();if(!e)throw e=Rg("openDbImpl",a,b),Q("ytidb_async_stack_killswitch")||(e.stack=`${e.stack}\n${f.substring(f.indexOf("\n")+1)}`),Gg(e),e;Ig(a);f=c?{actualName:a,publicName:a,userIdentifier:void 0}:Eh(a);try{return yield wh(f,e),yield qh(f.actualName,b,d)}catch(g){try{yield xh(f.actualName,e)}catch(h){}throw g;}})}
function Gh(a,b,c={}){return Fh(a,b,!1,c)}
function Hh(a,b,c={}){return Fh(a,b,!0,c)}
function Ih(a,b={}){return q(function*(){const c=yield Dh();if(c){Ig(a);var d=Eh(a);yield rh(d.actualName,b);yield xh(d.actualName,c)}})}
function Jh(a,b={}){return q(function*(){const c=yield Dh();c&&(Ig(a),yield rh(a,b),yield xh(a,c))})}
;function Kh(a,b){let c;return()=>{c||(c=new Lh(a,b));return c}}
var Lh=class extends uh{constructor(a,b){super(a,b);this.options=b;Ig(a)}i(a,b,c={}){return(this.options.Y?Hh:Gh)(a,b,Object.assign({},c))}delete(a={}){return(this.options.Y?Jh:Ih)(this.name,a)}};function Mh(a,b){return Kh(a,b)}
;var Nh=Mh("ytGcfConfig",{O:{coldConfigStore:{N:1},hotConfigStore:{N:1}},Y:!1,upgrade(a,b){b(1)&&(eh(a,"hotConfigStore",{keyPath:"key",autoIncrement:!0}).h.createIndex("hotTimestampIndex","timestamp",{unique:!1}),eh(a,"coldConfigStore",{keyPath:"key",autoIncrement:!0}).h.createIndex("coldTimestampIndex","timestamp",{unique:!1}))},version:1});function Oh(a){return th(Nh(),a)}
function Ph(a,b,c){return q(function*(){const d={config:a,hashData:b,timestamp:R()},e=yield Oh(c);yield e.clear("hotConfigStore");return yield gh(e,"hotConfigStore",d)})}
function Qh(a,b,c,d){return q(function*(){const e={config:a,hashData:b,configData:c,timestamp:R()},f=yield Oh(d);yield f.clear("coldConfigStore");return yield gh(f,"coldConfigStore",e)})}
function Rh(a){return q(function*(){let b=void 0;yield U(yield Oh(a),["coldConfigStore"],{mode:"readwrite",C:!0},c=>nh(c.objectStore("coldConfigStore").index("coldTimestampIndex"),{direction:"prev"},d=>{b=d.R()}));
return b})}
function Sh(a){return q(function*(){let b=void 0;yield U(yield Oh(a),["hotConfigStore"],{mode:"readwrite",C:!0},c=>nh(c.objectStore("hotConfigStore").index("hotTimestampIndex"),{direction:"prev"},d=>{b=d.R()}));
return b})}
;function Th(a,b,c){return q(function*(){if(Q("update_log_event_config")){c&&(a.i=c,t("yt.gcf.config.hotConfigGroup",a.i));a.hotHashData=b;t("yt.gcf.config.hotHashData",a.hotHashData);const d=Ch();if(d){if(!c){let e;c=null==(e=yield Sh(d))?void 0:e.config}yield Ph(c,b,d)}}})}
function Uh(a,b,c){return q(function*(){if(Q("update_log_event_config")){a.coldHashData=b;t("yt.gcf.config.coldHashData",a.coldHashData);const d=Ch();if(d){if(!c){let e;c=null==(e=yield Rh(d))?void 0:e.config}c&&(yield Qh(c,b,c.configData,d))}}})}
var Vh=class{constructor(){this.h=0}};function Wh(){return"INNERTUBE_API_KEY"in qf&&"INNERTUBE_API_VERSION"in qf}
function Xh(){return{innertubeApiKey:O("INNERTUBE_API_KEY"),innertubeApiVersion:O("INNERTUBE_API_VERSION"),ca:O("INNERTUBE_CONTEXT_CLIENT_CONFIG_INFO"),Ea:O("INNERTUBE_CONTEXT_CLIENT_NAME","WEB"),Fa:O("INNERTUBE_CONTEXT_CLIENT_NAME",1),innertubeContextClientVersion:O("INNERTUBE_CONTEXT_CLIENT_VERSION"),na:O("INNERTUBE_CONTEXT_HL"),ma:O("INNERTUBE_CONTEXT_GL"),Ga:O("INNERTUBE_HOST_OVERRIDE")||"",Ia:!!O("INNERTUBE_USE_THIRD_PARTY_AUTH",!1),Ha:!!O("INNERTUBE_OMIT_API_KEY_WHEN_AUTH_HEADER_IS_PRESENT",
!1),appInstallData:O("SERIALIZED_CLIENT_CONFIG_DATA")}}
function Yh(a){const b={client:{hl:a.na,gl:a.ma,clientName:a.Ea,clientVersion:a.innertubeContextClientVersion,configInfo:a.ca}};navigator.userAgent&&(b.client.userAgent=String(navigator.userAgent));var c=r.devicePixelRatio;c&&1!=c&&(b.client.screenDensityFloat=String(c));c=zf();""!==c&&(b.client.experimentsToken=c);c=Af();0<c.length&&(b.request={internalExperimentFlags:c});Zh(void 0,b);$h(a,void 0,b);Q("start_sending_config_hash")&&ai(void 0,b);O("DELEGATED_SESSION_ID")&&!Q("pageid_as_header_web")&&
(b.user={onBehalfOfUser:O("DELEGATED_SESSION_ID")});a=Object;c=a.assign;var d=b.client,e=O("DEVICE","");const f={};for(const [g,h]of Object.entries(eg(e))){e=g;const k=h;"cbrand"===e?f.deviceMake=k:"cmodel"===e?f.deviceModel=k:"cbr"===e?f.browserName=k:"cbrver"===e?f.browserVersion=k:"cos"===e?f.osName=k:"cosver"===e?f.osVersion=k:"cplatform"===e&&(f.platform=k)}b.client=c.call(a,d,f);return b}
function bi(a){const b=new oe,c=new de;B(c,1,a.na);B(c,2,a.ma);B(c,16,a.Fa);B(c,17,a.innertubeContextClientVersion);if(a.ca){var d=a.ca,e=new $d;d.coldConfigData&&B(e,1,d.coldConfigData);d.appInstallData&&B(e,6,d.appInstallData);d.coldHashData&&B(e,3,d.coldHashData);d.hotHashData&&B(e,5,d.hotHashData);C(c,$d,62,e)}if((d=r.devicePixelRatio)&&1!=d){if(null!=d&&"number"!==typeof d)throw Error(`Value of float/double field must be a number|null|undefined, found ${typeof d}: ${d}`);B(c,65,d)}d=zf();""!==
d&&B(c,54,d);d=Af();if(0<d.length){e=new he;for(let f=0;f<d.length;f++){const g=new fe;B(g,1,d[f].key);ac(g,2,ee,d[f].value);hc(e,15,fe,g)}C(b,he,5,e)}Zh(b);$h(a,c);Q("start_sending_config_hash")&&ai(c);O("DELEGATED_SESSION_ID")&&!Q("pageid_as_header_web")&&(a=new me,B(a,3,O("DELEGATED_SESSION_ID")));a=O("DEVICE","");for(const [f,g]of Object.entries(eg(a)))a=f,d=g,"cbrand"===a?B(c,12,d):"cmodel"===a?B(c,13,d):"cbr"===a?B(c,87,d):"cbrver"===a?B(c,88,d):"cos"===a?B(c,18,d):"cosver"===a?B(c,19,d):"cplatform"===
a&&B(c,42,d);b.l(c);return b}
function Zh(a,b){const c=u("yt.embedded_player.embed_url");c&&(a?(b=cc(a,je,7)||new je,B(b,4,c),C(a,je,7,b)):b&&(b.thirdParty={embedUrl:c}))}
function $h(a,b,c){if(a.appInstallData)if(b){let d;c=null!=(d=cc(b,$d,62))?d:new $d;B(c,6,a.appInstallData);C(b,$d,62,c)}else c&&(c.client.configInfo=c.client.configInfo||{},c.client.configInfo.appInstallData=a.appInstallData)}
function ci(a,b,c={}){let d={};O("EOM_VISITOR_DATA")?d={"X-Goog-EOM-Visitor-Id":O("EOM_VISITOR_DATA")}:d={"X-Goog-Visitor-Id":c.visitorData||O("VISITOR_DATA","")};if(b&&b.includes("www.youtube-nocookie.com"))return d;b=c.xb||O("AUTHORIZATION");b||(a?b=`Bearer ${u("gapi.auth.getToken")().wb}`:(a=Ag(yg()),Q("pageid_as_header_web")||delete a["X-Goog-PageId"],d=Object.assign({},d,a)));b&&(d.Authorization=b);return d}
function ai(a,b){Vh.h||(Vh.h=new Vh);var c=Vh.h;var d=R()-c.h;if(0!==c.h&&d<yf("send_config_hash_timer"))c=void 0;else{d=u("yt.gcf.config.coldConfigData");var e=u("yt.gcf.config.hotHashData"),f=u("yt.gcf.config.coldHashData");d&&e&&f&&(c.h=R());c={coldConfigData:d,hotHashData:e,coldHashData:f}}if(e=c)if(c=e.coldConfigData,d=e.coldHashData,e=e.hotHashData,c&&d&&e)if(a){let g;b=null!=(g=cc(a,$d,62))?g:new $d;B(b,1,c);B(b,3,d);B(b,5,e);C(a,$d,62,b)}else b&&(b.client.configInfo=b.client.configInfo||{},
b.client.configInfo.coldConfigData=c,b.client.configInfo.coldHashData=d,b.client.configInfo.hotHashData=e)}
;const di=["client.name","client.version"];function ei(a){if(!a.errorMetadata||!a.errorMetadata.kvPairs)return a;a.errorMetadata.kvPairs=a.errorMetadata.kvPairs.filter(b=>b.key?di.includes(b.key):!1);
return a}
;var fi=Mh("ServiceWorkerLogsDatabase",{O:{SWHealthLog:{N:1}},Y:!0,upgrade:(a,b)=>{b(1)&&eh(a,"SWHealthLog",{keyPath:"id",autoIncrement:!0}).h.createIndex("swHealthNewRequest",["interface","timestamp"],{unique:!1})},
version:1});function gi(a,b){return q(function*(){var c=yield th(fi(),b),d=O("INNERTUBE_CONTEXT_CLIENT_NAME",0);const e=Object.assign({},a);e.clientError&&(e.clientError=ei(e.clientError));e.interface=d;return gh(c,"SWHealthLog",e)})}
;t("ytNetworklessLoggingInitializationOptions",r.ytNetworklessLoggingInitializationOptions||{isNwlInitialized:!1});function hi(a,b,c){!O("VISITOR_DATA")&&.01>Math.random()&&wf(new L("Missing VISITOR_DATA when sending innertube request.","log_event",b,c));if(!a.isReady())throw a=new L("innertube xhrclient not ready","log_event",b,c),vf(a),a;b={headers:c.headers||{},method:"POST",postParams:b,postBody:c.postBody,postBodyFormat:c.postBodyFormat||"JSON",onTimeout:()=>{c.onTimeout()},
onFetchTimeout:c.onTimeout,onSuccess:(k,l)=>{if(c.onSuccess)c.onSuccess(l)},
onFetchSuccess:k=>{if(c.onSuccess)c.onSuccess(k)},
onError:(k,l)=>{if(c.onError)c.onError(l)},
onFetchError:k=>{if(c.onError)c.onError(k)},
timeout:c.timeout,withCredentials:!0,compress:c.compress};b.headers["Content-Type"]||(b.headers["Content-Type"]="application/json");let d="";var e=a.config_.Ga;e&&(d=e);var f=a.config_.Ia||!1;e=ci(f,d,c);Object.assign(b.headers,e);(e=b.headers.Authorization)&&!d&&f&&(b.headers["x-origin"]=window.location.origin);f=`/${"youtubei"}/${a.config_.innertubeApiVersion}/${"log_event"}`;let g={alt:"json"},h=a.config_.Ha&&e;h=h&&e.startsWith("Bearer");h||(g.key=a.config_.innertubeApiKey);a=fg(`${d}${f}`,g||
{},!0);try{ig(a,b)}catch(k){if("InvalidAccessError"==k.name)wf(Error("An extension is blocking network request."));else throw k;}}
class ii{constructor(a){this.config_=null;a?this.config_=a:Wh()&&(this.config_=Xh())}isReady(){!this.config_&&Wh()&&(this.config_=Xh());return!!this.config_}};const ji={stopImmediatePropagation:1,stopPropagation:1,preventMouseEvent:1,preventManipulation:1,preventDefault:1,layerX:1,layerY:1,screenX:1,screenY:1,scale:1,rotation:1,webkitMovementX:1,webkitMovementY:1};function ki(a){if(document.body&&document.documentElement){const b=document.body.scrollTop+document.documentElement.scrollTop;a.h=a.clientX+(document.body.scrollLeft+document.documentElement.scrollLeft);a.i=a.clientY+b}}
class li{constructor(a){this.type="";this.state=this.source=this.data=this.currentTarget=this.relatedTarget=this.target=null;this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.ctrlKey=this.altKey=!1;this.clientY=this.clientX=0;this.changedTouches=this.touches=null;try{if(a=a||window.event){this.event=a;for(let d in a)d in ji||(this[d]=a[d]);var b=a.target||a.srcElement;b&&3==b.nodeType&&(b=b.parentNode);this.target=b;var c=a.relatedTarget;if(c)try{c=c.nodeName?c:null}catch(d){c=null}else"mouseover"==
this.type?c=a.fromElement:"mouseout"==this.type&&(c=a.toElement);this.relatedTarget=c;this.clientX=void 0!=a.clientX?a.clientX:a.pageX;this.clientY=void 0!=a.clientY?a.clientY:a.pageY;this.keyCode=a.keyCode?a.keyCode:a.which;this.charCode=a.charCode||("keypress"==this.type?this.keyCode:0);this.altKey=a.altKey;this.ctrlKey=a.ctrlKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.h=a.pageX;this.i=a.pageY}}catch(d){}}preventDefault(){this.event&&(this.event.returnValue=!1,this.event.preventDefault&&
this.event.preventDefault())}stopPropagation(){this.event&&(this.event.cancelBubble=!0,this.event.stopPropagation&&this.event.stopPropagation())}stopImmediatePropagation(){this.event&&(this.event.cancelBubble=!0,this.event.stopImmediatePropagation&&this.event.stopImmediatePropagation())}};const ua=r.ytEventsEventsListeners||{};t("ytEventsEventsListeners",ua);const mi=r.ytEventsEventsCounter||{count:0};t("ytEventsEventsCounter",mi);
function ni(a,b,c,d={}){a.addEventListener&&("mouseenter"!=b||"onmouseenter"in document?"mouseleave"!=b||"onmouseenter"in document?"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"):b="mouseout":b="mouseover");return ta(e=>{const f="boolean"===typeof e[4]&&e[4]==!!d;var g;if(g=ia(e[4])&&ia(d))a:{g=e[4];for(const h in g)if(!(h in d)||g[h]!==d[h]){g=!1;break a}for(const h in d)if(!(h in g)){g=!1;break a}g=!0}return!!e.length&&e[0]==a&&e[1]==b&&e[2]==c&&(f||g)})}
const oi=function(a){let b=!1,c;return function(){b||(c=a(),b=!0);return c}}(function(){let a=!1;
try{const b=Object.defineProperty({},"capture",{get:function(){a=!0}});
window.addEventListener("test",null,b)}catch(b){}return a});
function pi(a,b,c,d={}){if(!a||!a.addEventListener&&!a.attachEvent)return"";let e=ni(a,b,c,d);if(e)return e;e=++mi.count+"";const f=!("mouseenter"!=b&&"mouseleave"!=b||!a.addEventListener||"onmouseenter"in document);let g;g=f?h=>{h=new li(h);if(!Qc(h.relatedTarget,k=>k==a))return h.currentTarget=a,h.type=b,c.call(a,h)}:h=>{h=new li(h);
h.currentTarget=a;return c.call(a,h)};
g=P(g);a.addEventListener?("mouseenter"==b&&f?b="mouseover":"mouseleave"==b&&f?b="mouseout":"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"),oi()||"boolean"===typeof d?a.addEventListener(b,g,d):a.addEventListener(b,g,!!d.capture)):a.attachEvent(`on${b}`,g);ua[e]=[a,b,c,g,d];return e}
function qi(a){a&&("string"==typeof a&&(a=[a]),pa(a,b=>{if(b in ua){var c=ua[b];const d=c[0],e=c[1],f=c[3];c=c[4];d.removeEventListener?oi()||"boolean"===typeof c?d.removeEventListener(e,f,c):d.removeEventListener(e,f,!!c.capture):d.detachEvent&&d.detachEvent(`on${e}`,f);delete ua[b]}}))}
;function ri(a){this.M=a;this.h=null;this.u=0;this.F=null;this.v=0;this.i=[];for(a=0;4>a;a++)this.i.push(0);this.s=0;this.Z=pi(window,"mousemove",la(this.ta,this));a=la(this.P,this);"function"===typeof a&&(a=P(a));this.va=window.setInterval(a,25)}
ma(ri,gd);ri.prototype.ta=function(a){void 0===a.h&&ki(a);var b=a.h;void 0===a.i&&ki(a);this.h=new Pc(b,a.i)};
ri.prototype.P=function(){if(this.h){var a=R();if(0!=this.u){var b=this.F,c=this.h,d=b.x-c.x;b=b.y-c.y;d=Math.sqrt(d*d+b*b)/(a-this.u);this.i[this.s]=.5<Math.abs((d-this.v)/this.v)?1:0;for(c=b=0;4>c;c++)b+=this.i[c]||0;3<=b&&this.M();this.v=d}this.u=a;this.F=this.h;this.s=(this.s+1)%4}};
ri.prototype.l=function(){window.clearInterval(this.va);qi(this.Z)};const si={};function ti(){var {Ob:a=!1,Eb:b=!0}={};if(null==u("_lact",window)){var c=parseInt(O("LACT"),10);c=isFinite(c)?Date.now()-Math.max(c,0):-1;t("_lact",c,window);t("_fact",c,window);-1==c&&ui();pi(document,"keydown",ui);pi(document,"keyup",ui);pi(document,"mousedown",ui);pi(document,"mouseup",ui);a?pi(window,"touchmove",()=>{vi("touchmove",200)},{passive:!0}):(pi(window,"resize",()=>{vi("resize",200)}),b&&pi(window,"scroll",()=>{vi("scroll",200)}));
new ri(()=>{vi("mouse",100)});
pi(document,"touchstart",ui,{passive:!0});pi(document,"touchend",ui,{passive:!0})}}
function vi(a,b){si[a]||(si[a]=!0,Kf.h(()=>{ui();si[a]=!1},b))}
function ui(){null==u("_lact",window)&&ti();var a=Date.now();t("_lact",a,window);-1==u("_fact",window)&&t("_fact",a,window);(a=u("ytglobal.ytUtilActivityCallback_"))&&a()}
function wi(){const a=u("_lact",window);return null==a?-1:Math.max(Date.now()-a,0)}
;r.ytPubsubPubsubInstance||new G;var xi=Symbol("injectionDeps"),yi=class{constructor(){this.name="INNERTUBE_TRANSPORT_TOKEN"}toString(){return`InjectionToken(${this.name})`}},zi=class{constructor(){this.key=Vh}};function Ai(a){var b={La:Bi,pa:Ci.h};a.i.set(b.La,b)}
function Di(a,b,c,d=!1){if(-1<c.indexOf(b))throw Error(`Deps cycle for: ${b}`);if(a.h.has(b))return a.h.get(b);if(!a.i.has(b)){if(d)return;throw Error(`No provider for: ${b}`);}d=a.i.get(b);c.push(b);if(d.pa)var e=d.pa;else if(d.Sa)e=d[xi]?Ei(a,d[xi],c):[],e=d.Sa(...e);else if(d.Ra){e=d.Ra;const f=e[xi]?Ei(a,e[xi],c):[];e=new e(...f)}else throw Error(`Could not resolve providers for: ${b}`);c.pop();d.Yb||a.h.set(b,e);return e}
function Ei(a,b,c){return b?b.map(d=>d instanceof zi?Di(a,d.key,c,!0):Di(a,d,c)):[]}
var Fi=class{constructor(){this.i=new Map;this.h=new Map}resolve(a){return a instanceof zi?Di(this,a.key,[],!0):Di(this,a,[])}};let Gi;function Hi(){Gi||(Gi=new Fi);return Gi}
;function Ii(a,b){const c=Ji(b);if(a.h[c])return a.h[c];const d=Object.keys(a.store)||[];if(1>=d.length&&Ji(b)===d[0])return d;const e=[];for(let g=0;g<d.length;g++){const h=d[g].split("/");if(Ki(b.auth,h[0])){var f=b.isJspb;Ki(void 0===f?"undefined":f?"true":"false",h[1])&&Ki(b.cttAuthInfo,h[2])&&e.push(d[g])}}return a.h[c]=e}
function Ki(a,b){return void 0===a||"undefined"===a?!0:a===b}
var Li=class{constructor(){this.store={};this.h={}}storePayload(a,b){a=Ji(a);this.store[a]?this.store[a].push(b):(this.h={},this.store[a]=[b]);return a}extractMatchingEntries(a){a=Ii(this,a);const b=[];for(let c=0;c<a.length;c++)this.store[a[c]]&&(b.push(...this.store[a[c]]),delete this.store[a[c]]);return b}getSequenceCount(a){a=Ii(this,a);let b=0;for(let c=0;c<a.length;c++)b+=this.store[a[c]].length||0;return b}};Li.prototype.getSequenceCount=Li.prototype.getSequenceCount;
Li.prototype.extractMatchingEntries=Li.prototype.extractMatchingEntries;Li.prototype.storePayload=Li.prototype.storePayload;function Ji(a){return[void 0===a.auth?"undefined":a.auth,void 0===a.isJspb?"undefined":a.isJspb,void 0===a.cttAuthInfo?"undefined":a.cttAuthInfo].join("/")}
;const Mi=yf("initial_gel_batch_timeout",2E3),Ni=yf("gel_queue_timeout_max_ms",6E4),Oi=Math.pow(2,16)-1;let V=void 0;class Pi{constructor(){this.j=this.h=this.i=0}}const Qi=new Pi,Ri=new Pi;let Si,Ti=!0;const Ui=r.ytLoggingTransportTokensToCttTargetIds_||{},Vi=r.ytLoggingTransportTokensToJspbCttTargetIds_||{};let Wi={};function Xi(){let a=u("yt.logging.ims");a||(a=new Li,t("yt.logging.ims",a));return a}
function Yi(a,b){Q("web_all_payloads_via_jspb")&&wf(new L("transport.log called for JSON in JSPB only experiment"));if("log_event"===a.endpoint){var c=Zi(a);Wi[c]=!0;var d={cttAuthInfo:c,isJspb:!1};Xi().storePayload(d,a.payload);$i(b,c,!1,d)}}
function aj(a,b){if("log_event"===a.endpoint){var c=Zi(a,!0);Wi[c]=!0;var d={cttAuthInfo:c,isJspb:!0};Xi().storePayload(d,a.payload.toJSON());$i(b,c,!0,d)}}
function $i(a,b,c=!1,d){a&&(V=new a);a=yf("tvhtml5_logging_max_batch_ads_fork")||yf("tvhtml5_logging_max_batch")||yf("web_logging_max_batch")||100;const e=R(),f=c?Ri.j:Qi.j;let g=0;d&&(g=Xi().getSequenceCount(d));g>=a?Si||(Si=bj(()=>{cj({writeThenSend:!0},Q("flush_only_full_queue")?b:void 0,c);Si=void 0},0)):10<=e-f&&(dj(c),c?Ri.j=e:Qi.j=e)}
function ej(a,b){Q("web_all_payloads_via_jspb")&&wf(new L("transport.logIsolatedGelPayload called in JSPB only experiment"));if("log_event"===a.endpoint){var c=Zi(a),d=new Map;d.set(c,[a.payload]);b&&(V=new b);return new F((e,f)=>{V&&V.isReady()?fj(d,V,e,f,{bypassNetworkless:!0},!0):e()})}}
function gj(a,b){if("log_event"===a.endpoint){var c=Zi(a,!0),d=new Map;d.set(c,[a.payload.toJSON()]);b&&(V=new b);return new F(e=>{V&&V.isReady()?hj(d,V,e,{bypassNetworkless:!0},!0):e()})}}
function Zi(a,b=!1){var c="";if(a.dangerousLogToVisitorSession)c="visitorOnlyApprovedKey";else if(a.cttAuthInfo){if(b){b=a.cttAuthInfo.token;c=a.cttAuthInfo;const d=new We;c.videoId?d.setVideoId(c.videoId):c.playlistId&&ac(d,2,Ve,c.playlistId);Vi[b]=d}else b=a.cttAuthInfo,c={},b.videoId?c.videoId=b.videoId:b.playlistId&&(c.playlistId=b.playlistId),Ui[a.cttAuthInfo.token]=c;c=a.cttAuthInfo.token}return c}
function cj(a={},b,c=!1){!c&&Q("web_all_payloads_via_jspb")&&wf(new L("transport.flushLogs called for JSON in JSPB only experiment"));new F((d,e)=>{c?(ij(Ri.i),ij(Ri.h),Ri.h=0):(ij(Qi.i),ij(Qi.h),Qi.h=0);V&&V.isReady()?jj(d,e,a,b,c):(dj(c),d())})}
function jj(a,b,c={},d,e=!1){var f=V,g=new Map;const h=new Map;if(void 0!==d)e?(b=Xi().extractMatchingEntries({isJspb:e,cttAuthInfo:d}),g.set(d,b),hj(g,f,a,c)):(g=Xi().extractMatchingEntries({isJspb:e,cttAuthInfo:d}),h.set(d,g),fj(h,f,a,b,c));else if(e){for(const k of Object.keys(Wi))b=Xi().extractMatchingEntries({isJspb:!0,cttAuthInfo:k}),0<b.length&&g.set(k,b),delete Wi[k];hj(g,f,a,c)}else{for(const k of Object.keys(Wi))d=Xi().extractMatchingEntries({isJspb:!1,cttAuthInfo:k}),0<d.length&&h.set(k,
d),delete Wi[k];fj(h,f,a,b,c)}}
function dj(a=!1){if(Q("web_gel_timeout_cap")&&(!a&&!Qi.h||a&&!Ri.h)){var b=bj(()=>{cj({writeThenSend:!0},void 0,a)},Ni);
a?Ri.h=b:Qi.h=b}ij(a?Ri.i:Qi.i);b=O("LOGGING_BATCH_TIMEOUT",yf("web_gel_debounce_ms",1E4));Q("shorten_initial_gel_batch_timeout")&&Ti&&(b=Mi);b=bj(()=>{cj({writeThenSend:!0},void 0,a)},b);
a?Ri.i=b:Qi.i=b}
function fj(a,b,c,d,e={},f){const g=Math.round(R());let h=a.size;for(const [l,m]of a){a=l;var k=m;const p=wa({context:Yh(b.config_||Xh())});if(!ha(k)&&!Q("throw_err_when_logevent_malformed_killswitch")){d();break}p.events=k;(k=Ui[a])&&kj(p,a,k);delete Ui[a];const v="visitorOnlyApprovedKey"===a;lj(p,g,v);mj(e);const n=E=>{Q("update_log_event_config")&&Kf.h(()=>q(function*(){yield nj(E)}));
h--;h||c()};
let z=0;const H=()=>{z++;if(e.bypassNetworkless&&1===z)try{hi(b,p,oj({writeThenSend:!0},v,n,H,f)),Ti=!1}catch(E){vf(E),d()}h--;h||c()};
try{hi(b,p,oj(e,v,n,H,f)),Ti=!1}catch(E){vf(E),d()}}}
function hj(a,b,c,d={},e){const f=Math.round(R());let g=a.size;var h=new Map([...a]);for(const [m]of h){var k=m,l=a.get(k);h=new Ye;const p=bi(b.config_||Xh());C(h,oe,1,p);l=l?pj(l):[];for(const v of l)hc(h,3,K,v);(l=Vi[k])&&qj(h,k,l);delete Vi[k];k="visitorOnlyApprovedKey"===k;rj(h,f,k);mj(d);h=uc(h);k=oj(d,k,v=>{Q("update_log_event_config")&&Kf.h(()=>q(function*(){yield nj(v)}));
g--;g||c()},()=>{g--;
g||c()},e);
k.headers["Content-Type"]="application/json+protobuf";k.postBodyFormat="JSPB";k.postBody=h;hi(b,"",k);Ti=!1}}
function mj(a){Q("always_send_and_write")&&(a.writeThenSend=!1)}
function oj(a,b,c,d,e){a={retry:!0,onSuccess:c,onError:d,Kb:a,dangerousLogToVisitorSession:b,Ab:!!e,headers:{},postBodyFormat:"",postBody:"",compress:Q("compress_gel")||Q("compress_gel_lr")};sj()&&(a.headers["X-Goog-Request-Time"]=JSON.stringify(Math.round(R())));return a}
function lj(a,b,c){sj()||(a.requestTimeMs=String(b));Q("unsplit_gel_payloads_in_logs")&&(a.unsplitGelPayloadsInLogs=!0);!c&&(b=O("EVENT_ID"))&&(c=tj(),a.serializedClientEventId={serializedEventId:b,clientCounter:String(c)})}
function rj(a,b,c){sj()||B(a,2,b);if(!c&&(b=O("EVENT_ID"))){c=tj();const d=new Ue;B(d,1,b);B(d,2,c);C(a,Ue,5,d)}}
function tj(){let a=O("BATCH_CLIENT_COUNTER")||0;a||(a=Math.floor(Math.random()*Oi/2));a++;a>Oi&&(a=1);N("BATCH_CLIENT_COUNTER",a);return a}
function kj(a,b,c){let d;if(c.videoId)d="VIDEO";else if(c.playlistId)d="PLAYLIST";else return;a.credentialTransferTokenTargetId=c;a.context=a.context||{};a.context.user=a.context.user||{};a.context.user.credentialTransferTokens=[{token:b,scope:d}]}
function qj(a,b,c){var d=1===bc(c,Ve)?1:-1;if(A(c,d))d=1;else if(c.getPlaylistId())d=2;else return;C(a,We,4,c);a=cc(a,oe,1)||new oe;c=cc(a,me,3)||new me;const e=new ke;B(e,2,b);B(e,1,d);hc(c,12,ke,e);C(a,me,3,c)}
function pj(a){const b=[];for(let c=0;c<a.length;c++)try{b.push(new K(a[c]))}catch(d){vf(new L("Transport failed to deserialize "+String(a[c])))}return b}
function sj(){return Q("use_request_time_ms_header")||Q("lr_use_request_time_ms_header")}
function bj(a,b){var c;Q("transport_use_scheduler")?c=Hf(a,0,b):c=Gf(a,b);return c}
function ij(a){Q("transport_use_scheduler")?Kf.i(a):window.clearTimeout(a)}
function nj(a){return q(function*(){var b,c=null==a?void 0:null==(b=a.responseContext)?void 0:b.globalConfigGroup;b=Bf(c,Ud);const d=null==c?void 0:c.hotHashData,e=Bf(c,Td);c=null==c?void 0:c.coldHashData;var f=Hi();if(f=f.resolve.call(f,new zi))d&&(b?yield Th(f,d,b):yield Th(f,d)),c&&(e?yield Uh(f,c,e):yield Uh(f,c))})}
;const uj=r.ytLoggingGelSequenceIdObj_||{};
function vj(a,b,c,d={}){const e={},f=Math.round(d.timestamp||R());e.eventTimeMs=f<Number.MAX_SAFE_INTEGER?f:0;e[a]=b;Q("enable_unknown_lact_fix_on_html5")&&ti();a=wi();e.context={lastActivityMs:String(d.timestamp||!isFinite(a)?-1:a)};Q("log_sequence_info_on_gel_web")&&d.sequenceGroup&&(a=e.context,b=d.sequenceGroup,b={index:wj(b),groupKey:b},a.sequence=b,d.endOfSequence&&delete uj[d.sequenceGroup]);(d.sendIsolatedPayload?ej:Yi)({endpoint:"log_event",payload:e,cttAuthInfo:d.cttAuthInfo,dangerousLogToVisitorSession:d.dangerousLogToVisitorSession},
c)}
function xj(a=!1){cj(void 0,void 0,a)}
function wj(a){uj[a]=a in uj?uj[a]+1:0;return uj[a]}
;let yj=ii;function W(a,b,c={}){let d=yj;O("ytLoggingEventsDefaultDisabled",!1)&&yj===ii&&(d=null);Q("web_all_payloads_via_jspb")&&wf(new L("Logs should be translated to JSPB but are sent as JSON instead",a));vj(a,b,d,c)}
;const zj=r.ytLoggingGelSequenceIdObj_||{};
function Aj(a,b,c={}){var d=Math.round(c.timestamp||R());B(a,1,d<Number.MAX_SAFE_INTEGER?d:0);var e=wi();d=new Re;B(d,1,c.timestamp||!isFinite(e)?-1:e);if(Q("log_sequence_info_on_gel_web")&&c.sequenceGroup){e=c.sequenceGroup;const f=wj(e),g=new Qe;B(g,2,f);B(g,1,e);C(d,Qe,3,g);c.endOfSequence&&delete zj[c.sequenceGroup]}C(a,Re,33,d);(c.sendIsolatedPayload?gj:aj)({endpoint:"log_event",payload:a,cttAuthInfo:c.cttAuthInfo,dangerousLogToVisitorSession:c.dangerousLogToVisitorSession},b)}
;function Bj(a,b={}){let c=!1;O("ytLoggingEventsDefaultDisabled",!1)&&(c=!0);Aj(a,c?null:ii,b)}
;function Cj(a,b,c){const d=new K;gc(d,Oe,72,Se,a);c?Aj(d,c,b):Bj(d,b)}
function Dj(a,b,c){const d=new K;gc(d,Ne,73,Se,a);c?Aj(d,c,b):Bj(d,b)}
function Ej(a,b,c){const d=new K;gc(d,Me,78,Se,a);c?Aj(d,c,b):Bj(d,b)}
function Fj(a,b,c){const d=new K;gc(d,Pe,208,Se,a);c?Aj(d,c,b):Bj(d,b)}
function Gj(a,b,c){const d=new K;gc(d,Ie,156,Se,a);c?Aj(d,c,b):Bj(d,b)}
function Hj(a,b,c){const d=new K;gc(d,Le,215,Se,a);c?Aj(d,c,b):Bj(d,b)}
;var Ij=new Set,Jj=0,Kj=0,Lj=0,Mj=[];const Nj=["PhantomJS","Googlebot","TO STOP THIS SECURITY SCAN go/scan"];function Oj(a){Pj(a)}
function Qj(a){Pj(a,"WARNING")}
function Pj(a,b="ERROR"){var c={};c.name=O("INNERTUBE_CONTEXT_CLIENT_NAME",1);c.version=O("INNERTUBE_CONTEXT_CLIENT_VERSION");Rj(a,c,b)}
function Rj(a,b,c="ERROR"){if(a){a.hasOwnProperty("level")&&a.level&&(c=a.level);if(Q("console_log_js_exceptions")){var d=[];d.push(`Name: ${a.name}`);d.push(`Message: ${a.message}`);a.hasOwnProperty("params")&&d.push(`Error Params: ${JSON.stringify(a.params)}`);a.hasOwnProperty("args")&&d.push(`Error args: ${JSON.stringify(a.args)}`);d.push(`File name: ${a.fileName}`);d.push(`Stacktrace: ${a.stack}`);window.console.log(d.join("\n"),a)}if(!(5<=Jj)){d=Mj;var e=Rc(a);const p=e.message||"Unknown Error",
v=e.name||"UnknownError";var f=e.stack||a.i||"Not available";if(f.startsWith(`${v}: ${p}`)){var g=f.split("\n");g.shift();f=g.join("\n")}g=e.lineNumber||"Not available";e=e.fileName||"Not available";let n=0;if(a.hasOwnProperty("args")&&a.args&&a.args.length)for(var h=0;h<a.args.length&&!(n=vg(a.args[h],`params.${h}`,b,n),500<=n);h++);else if(a.hasOwnProperty("params")&&a.params){const z=a.params;if("object"===typeof a.params)for(h in z){if(!z[h])continue;const H=`params.${h}`,E=xg(z[h]);b[H]=E;n+=
H.length+E.length;if(500<n)break}else b.params=xg(z)}if(d.length)for(h=0;h<d.length&&!(n=vg(d[h],`params.context.${h}`,b,n),500<=n);h++);navigator.vendor&&!b.hasOwnProperty("vendor")&&(b["device.vendor"]=navigator.vendor);b={message:p,name:v,lineNumber:g,fileName:e,stack:f,params:b,sampleWeight:1};d=Number(a.columnNumber);isNaN(d)||(b.lineNumber=`${b.lineNumber}:${d}`);if("IGNORED"===a.level)var k=0;else a:{a=og();d=b;for(k of a.I)if(d.message&&d.message.match(k.Ja)){k=k.weight;break a}for(var l of a.G)if(l.callback(d)){k=
l.weight;break a}k=1}b.sampleWeight=k;k=b;for(var m of lg)if(m.W[k.name]){l=m.W[k.name];for(const z of l)if(l=k.message.match(z.A)){k.params["params.error.original"]=l[0];a=z.groups;b={};for(d=0;d<a.length;d++)b[a[d]]=l[d+1],k.params[`params.error.${a[d]}`]=l[d+1];k.message=m.da(b);break}}k.params||(k.params={});m=og();k.params["params.errorServiceSignature"]=`msg=${m.I.length}&cb=${m.G.length}`;k.params["params.serviceWorker"]="true";r.document&&r.document.querySelectorAll&&(k.params["params.fscripts"]=
String(document.querySelectorAll("script:not([nonce])").length));Aa("sample").constructor!==za&&(k.params["params.fconst"]="true");window.yterr&&"function"===typeof window.yterr&&window.yterr(k);0===k.sampleWeight||Ij.has(k.message)||Sj(k,c)}}}
function Sj(a,b="ERROR"){if("ERROR"===b){sg.v("handleError",a);if(Q("record_app_crashed_web")&&0===Lj&&1===a.sampleWeight)if(Lj++,Q("errors_via_jspb")){var c=new Ae;c=B(c,1,1);if(!Q("report_client_error_with_app_crash_ks")){var d=new ze;var e=new xe;var f=new we;var g=new ve;g=B(g,1,a.message);f=C(f,ve,3,g);e=C(e,we,5,f);d=C(d,xe,9,e);C(c,ze,4,d)}d=new K;gc(d,Ae,20,Se,c);Bj(d)}else c={appCrashType:"APP_CRASH_TYPE_BREAKPAD"},Q("report_client_error_with_app_crash_ks")||(c.systemHealth={crashData:{clientError:{logMessage:{message:a.message}}}}),
W("appCrashed",c);Kj++}else"WARNING"===b&&sg.v("handleWarning",a);a:{if(Q("errors_via_jspb")){if(Tj())var h=void 0;else{c=new se;B(c,1,a.stack);a.fileName&&B(c,4,a.fileName);var k=a.lineNumber&&a.lineNumber.split?a.lineNumber.split(":"):[];0!==k.length&&(1!==k.length||isNaN(Number(k[0]))?2!==k.length||isNaN(Number(k[0]))||isNaN(Number(k[1]))||(B(c,2,Number(k[0])),B(c,3,Number(k[1]))):B(c,2,Number(k[0])));k=new ve;B(k,1,a.message);B(k,3,a.name);B(k,6,a.sampleWeight);"ERROR"===b?B(k,2,2):"WARNING"===
b?B(k,2,1):B(k,2,0);var l=new te;B(l,1,!0);gc(l,se,3,ue,c);c=new re;B(c,3,window.location.href);d=O("FEXP_EXPERIMENTS",[]);for(g=0;g<d.length;g++)e=c,f=d[g],Sb(e),$b(e,5,2,!1,!1).push(f);d=rf();if(!sf()&&d)for(var m of Object.keys(d))e=new pe,B(e,1,m),B(e,2,String(d[m])),hc(c,4,pe,e);if(m=a.params)for(h of Object.keys(m))d=new pe,B(d,1,`client.${h}`),B(d,2,String(m[h])),hc(c,4,pe,d);m=O("SERVER_NAME");h=O("SERVER_VERSION");m&&h&&(d=new pe,B(d,1,"server.name"),B(d,2,m),hc(c,4,pe,d),m=new pe,B(m,1,
"server.version"),B(m,2,h),hc(c,4,pe,m));h=new we;C(h,re,1,c);C(h,te,2,l);C(h,ve,3,k)}if(!h)break a;m=new K;gc(m,we,163,Se,h);Bj(m)}else{if(Tj())h=void 0;else{m={stackTrace:a.stack};a.fileName&&(m.filename=a.fileName);h=a.lineNumber&&a.lineNumber.split?a.lineNumber.split(":"):[];0!==h.length&&(1!==h.length||isNaN(Number(h[0]))?2!==h.length||isNaN(Number(h[0]))||isNaN(Number(h[1]))||(m.lineNumber=Number(h[0]),m.columnNumber=Number(h[1])):m.lineNumber=Number(h[0]));h={level:"ERROR_LEVEL_UNKNOWN",message:a.message,
errorClassName:a.name,sampleWeight:a.sampleWeight};"ERROR"===b?h.level="ERROR_LEVEL_ERROR":"WARNING"===b&&(h.level="ERROR_LEVEL_WARNNING");m={isObfuscated:!0,browserStackInfo:m};c={pageUrl:window.location.href,kvPairs:[]};O("FEXP_EXPERIMENTS")&&(c.experimentIds=O("FEXP_EXPERIMENTS"));d=rf();if(!sf()&&d)for(l of Object.keys(d))c.kvPairs.push({key:l,value:String(d[l])});if(l=a.params)for(k of Object.keys(l))c.kvPairs.push({key:`client.${k}`,value:String(l[k])});k=O("SERVER_NAME");l=O("SERVER_VERSION");
k&&l&&(c.kvPairs.push({key:"server.name",value:k}),c.kvPairs.push({key:"server.version",value:l}));h={errorMetadata:c,stackTrace:m,logMessage:h}}if(!h)break a;W("clientError",h)}if("ERROR"===b||Q("errors_flush_gel_always_killswitch"))b:{if(Q("web_fp_via_jspb")&&(xj(!0),!Q("web_fp_via_jspb_and_json")))break b;xj()}}try{Ij.add(a.message)}catch(p){}Jj++}
function Tj(){for(const a of Nj){const b=Ga();if(b&&0<=b.toLowerCase().indexOf(a.toLowerCase()))return!0}return!1}
function Uj(a,...b){a.args||(a.args=[]);a.args.push(...b)}
;t("ytLoggingLatencyUsageStats_",r.ytLoggingLatencyUsageStats_||{});const Vj=window;class Wj{constructor(){this.timing={};this.clearResourceTimings=()=>{};
this.webkitClearResourceTimings=()=>{};
this.mozClearResourceTimings=()=>{};
this.msClearResourceTimings=()=>{};
this.oClearResourceTimings=()=>{}}}
var Xj=Vj.performance||Vj.mozPerformance||Vj.msPerformance||Vj.webkitPerformance||new Wj;let Yj=r.ytLoggingDocDocumentNonce_;if(!Yj){const a=Yf(),b=[];for(let c=0;c<a.length;c++)b.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(a[c]&63));Yj=b.join("")}var Zj=Yj;var ak={Va:0,Ta:1,Ua:2,qb:3,Wa:4,vb:5,rb:6,ub:7,sb:8,tb:9,0:"DEFAULT",1:"CHAT",2:"CONVERSATIONS",3:"MINIPLAYER",4:"DIALOG",5:"VOZ",6:"MUSIC_WATCH_TABS",7:"SHARE",8:"PUSH_NOTIFICATIONS",9:"RICH_GRID_WATCH"};let bk=1;function ck(a){return new dk({trackingParams:a})}
function ek(a){const b=bk++;return new dk({veType:a,veCounter:b,elementIndex:void 0,dataElement:void 0,youtubeData:void 0,jspbYoutubeData:void 0})}
var dk=class{constructor(a){this.h=a}getAsJson(){const a={};void 0!==this.h.trackingParams?a.trackingParams=this.h.trackingParams:(a.veType=this.h.veType,void 0!==this.h.veCounter&&(a.veCounter=this.h.veCounter),void 0!==this.h.elementIndex&&(a.elementIndex=this.h.elementIndex));void 0!==this.h.dataElement&&(a.dataElement=this.h.dataElement.getAsJson());void 0!==this.h.youtubeData&&(a.youtubeData=this.h.youtubeData);this.h.isCounterfactual&&(a.isCounterfactual=!0);return a}getAsJspb(){const a=new J;
if(void 0!==this.h.trackingParams){var b=this.h.trackingParams;if(null!=b)if("string"===typeof b)b=b?new ub(b,qb):tb();else if(b.constructor!==ub)if(ob(b))b=b.length?new ub(new Uint8Array(b),qb):tb();else throw Error();B(a,1,b)}else void 0!==this.h.veType&&B(a,2,this.h.veType),void 0!==this.h.veCounter&&B(a,6,this.h.veCounter),void 0!==this.h.elementIndex&&B(a,3,this.h.elementIndex),this.h.isCounterfactual&&B(a,5,!0);void 0!==this.h.dataElement&&(b=this.h.dataElement.getAsJspb(),C(a,J,7,b));void 0!==
this.h.youtubeData&&C(a,Zd,8,this.h.jspbYoutubeData);return a}toString(){return JSON.stringify(this.getAsJson())}isClientVe(){return!this.h.trackingParams&&!!this.h.veType}};function fk(a=0){return 0===a?"client-screen-nonce":`${"client-screen-nonce"}.${a}`}
function gk(a=0){return 0===a?"ROOT_VE_TYPE":`${"ROOT_VE_TYPE"}.${a}`}
function hk(a=0){return O(gk(a))}
function ik(a=0){return(a=hk(a))?new dk({veType:a,youtubeData:void 0,jspbYoutubeData:void 0}):null}
function jk(){let a=O("csn-to-ctt-auth-info");a||(a={},N("csn-to-ctt-auth-info",a));return a}
function X(a=0){a=O(fk(a));if(!a&&!O("USE_CSN_FALLBACK",!0))return null;a||(a="UNDEFINED_CSN");return a?a:null}
function kk(a){for(const b of Object.values(ak))if(X(b)===a)return!0;return!1}
function lk(a,b,c){const d=jk();(c=X(c))&&delete d[c];b&&(d[a]=b)}
function mk(a){return jk()[a]}
function nk(a,b,c=0,d){if(a!==O(fk(c))||b!==O(gk(c)))if(lk(a,d,c),N(fk(c),a),N(gk(c),b),b=()=>{setTimeout(()=>{if(a)if(Q("web_time_via_jspb")){var e=new Be;B(e,1,Zj);B(e,2,a);const f=new K;gc(f,Be,111,Se,e);Bj(f)}else W("foregroundHeartbeatScreenAssociated",{clientDocumentNonce:Zj,clientScreenNonce:a})},0)},"requestAnimationFrame"in window)try{window.requestAnimationFrame(b)}catch(e){b()}else b()}
;la(Xj.clearResourceTimings||Xj.webkitClearResourceTimings||Xj.mozClearResourceTimings||Xj.msClearResourceTimings||Xj.oClearResourceTimings||oa,Xj);function ok(a=!0){a=a?Yf():Xf();const b=[];for(let c=0;c<a.length;c++)b.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(a[c]&63));return b.join("")}
;class Ff extends Df{constructor(a){super(arguments);this.csn=a}}const Qf=new Ef,pk=[];let rk=qk,sk=0;function tk(a,b,c,d,e,f,g,h){const k=rk(),l=new dk({veType:b,youtubeData:f,jspbYoutubeData:void 0});f={sequenceGroup:k};e&&(f.cttAuthInfo=e);var m=()=>{Qj(new L("newScreen() parent element does not have a VE - rootVe",b))};
if(Q("il_via_jspb")){e=He((new Ie).h(k),l.getAsJspb());c&&c.visualElement?(m=new Ge,c.clientScreenNonce&&B(m,2,c.clientScreenNonce),Fe(m,c.visualElement.getAsJspb()),g&&B(m,4,Te[g]),C(e,Ge,5,m)):c&&m();d&&B(e,3,d);if(Q("expectation_logging")&&h&&h.screenCreatedLoggingExpectations){c=new Yd;h=h.screenCreatedLoggingExpectations.expectedParentScreens||[];for(var p of h)p.screenVeType&&(h=Vd(new Wd,p.screenVeType),hc(c,1,Wd,h));C(e,Yd,7,c)}Gj(e,f,a)}else p={csn:k,pageVe:l.getAsJson()},Q("expectation_logging")&&
h&&h.screenCreatedLoggingExpectations&&(p.screenCreatedLoggingExpectations=h.screenCreatedLoggingExpectations),c&&c.visualElement?(p.implicitGesture={parentCsn:c.clientScreenNonce,gesturedVe:c.visualElement.getAsJson()},g&&(p.implicitGesture.gestureType=g)):c&&m(),d&&(p.cloneCsn=d),a?vj("screenCreated",p,a,f):W("screenCreated",p,f);Pf(new Ff(k));return k}
function uk(a,b,c,d){const e=d.filter(g=>{g.csn!==b?(g.csn=b,g=!0):g=!1;return g}),f={cttAuthInfo:mk(b)||void 0,
sequenceGroup:b};for(const g of d)d=g.getAsJson(),(va(d)||!d.trackingParams&&!d.veType)&&Qj(Error("Child VE logged with no data"));if(Q("il_via_jspb")){const g=Je((new Le).h(b),c.getAsJspb());qa(e,h=>{h=h.getAsJspb();hc(g,3,J,h)});
"UNDEFINED_CSN"===b?Y("visualElementAttached",f,void 0,g):Hj(g,f,a)}else c={csn:b,parentVe:c.getAsJson(),childVes:qa(e,g=>g.getAsJson())},"UNDEFINED_CSN"===b?Y("visualElementAttached",f,c):a?vj("visualElementAttached",c,a,f):W("visualElementAttached",c,f)}
function vk(a,b,c,d,e,f){wk(a,b,c,e,f)}
function wk(a,b,c,d,e){const f={cttAuthInfo:mk(b)||void 0,sequenceGroup:b};Q("il_via_jspb")?(d=(new Oe).h(b),c=c.getAsJspb(),c=C(d,J,2,c),c=B(c,4,1),e&&C(c,Ee,3,e),"UNDEFINED_CSN"===b?Y("visualElementShown",f,void 0,c):Cj(c,f,a)):(e={csn:b,ve:c.getAsJson(),eventType:1},d&&(e.clientData=d),"UNDEFINED_CSN"===b?Y("visualElementShown",f,e):a?vj("visualElementShown",e,a,f):W("visualElementShown",e,f))}
function xk(a,b,c,d=!1){var e=d?16:8;const f={cttAuthInfo:mk(b)||void 0,sequenceGroup:b,endOfSequence:d};Q("il_via_jspb")?(e=(new Ne).h(b),c=c.getAsJspb(),c=C(e,J,2,c),B(c,4,d?16:8),"UNDEFINED_CSN"===b?Y("visualElementHidden",f,void 0,c):Dj(c,f,a)):(d={csn:b,ve:c.getAsJson(),eventType:e},"UNDEFINED_CSN"===b?Y("visualElementHidden",f,d):a?vj("visualElementHidden",d,a,f):W("visualElementHidden",d,f))}
function yk(a,b,c,d){const e={cttAuthInfo:mk(b)||void 0,sequenceGroup:b};Q("il_via_jspb")?(d=(new Me).h(b),c=c.getAsJspb(),c=C(d,J,2,c),B(c,4,Te.INTERACTION_LOGGING_GESTURE_TYPE_GENERIC_CLICK),"UNDEFINED_CSN"===b?Y("visualElementGestured",e,void 0,c):Ej(c,e,a)):(c={csn:b,ve:c.getAsJson(),gestureType:"INTERACTION_LOGGING_GESTURE_TYPE_GENERIC_CLICK"},d&&(c.clientData=d),"UNDEFINED_CSN"===b?Y("visualElementGestured",e,c):a?vj("visualElementGestured",c,a,e):W("visualElementGestured",c,e))}
function qk(){if(Q("enable_web_96_bit_csn"))var a=ok();else if(Q("enable_web_96_bit_csn_no_crypto"))a=ok(!1);else{a=Math.random()+"";for(var b=[],c=0,d=0;d<a.length;d++){var e=a.charCodeAt(d);128>e?b[c++]=e:(2048>e?b[c++]=e>>6|192:(55296==(e&64512)&&d+1<a.length&&56320==(a.charCodeAt(d+1)&64512)?(e=65536+((e&1023)<<10)+(a.charCodeAt(++d)&1023),b[c++]=e>>18|240,b[c++]=e>>12&63|128):b[c++]=e>>12|224,b[c++]=e>>6&63|128),b[c++]=e&63|128)}a=db(b,3)}return a}
function Y(a,b,c,d){pk.push({S:a,payload:c,K:d,options:b});sk||(sk=Tf())}
function Uf(a){if(pk){for(const b of pk)if(Q("il_via_jspb")&&b.K)switch(b.K.h(a.csn),b.S){case "screenCreated":Gj(b.K,b.options);break;case "visualElementAttached":Hj(b.K,b.options);break;case "visualElementShown":Cj(b.K,b.options);break;case "visualElementHidden":Dj(b.K,b.options);break;case "visualElementGestured":Ej(b.K,b.options);break;case "visualElementStateChanged":Fj(b.K,b.options);break;default:Qj(new L("flushQueue unable to map payloadName to JSPB setter"))}else b.payload&&(b.payload.csn=
a.csn,W(b.S,b.payload,b.options));pk.length=0}sk=0}
;function Z(){zk.h||(zk.h=new zk);return zk.h}
function Ak(a,b,c){const d=X(c);return null===a.csn||d===a.csn||c?d:(a=new L("VisibilityLogger called before newScreen",{caller:b.tagName,previous_csn:a.csn,current_csn:d}),Qj(a),null)}
function Bk(a){return Math.floor(Number(a.data&&a.data.loggingDirectives&&a.data.loggingDirectives.visibility&&a.data.loggingDirectives.visibility.types||""))||1}
var zk=class{constructor(){this.m=new Set;this.j=new Set;this.h=new Map;this.client=void 0;this.csn=null}l(a){this.client=a}u(){this.clear();this.csn=X()}clear(){this.m.clear();this.j.clear();this.h.clear();this.csn=null}v(a,b,c){b=this.i(a);var d=a.visualElement?a.visualElement:b,e=this.m.has(d),f=this.h.get(d);this.m.add(d);this.h.set(d,!0);a.impressionLog&&!e&&a.impressionLog();if(b||a.visualElement)if(c=Ak(this,a,c)){var g=!(!a.data||!a.data.loggingDirectives);if(Bk(a)||g){d=a.visualElement?a.visualElement:
ck(b);var h=a.interactionLoggingClientData;b=a.interactionLoggingClientDataJspbType;g||e?Bk(a)&4?f||(a=this.client,e={cttAuthInfo:mk(c)||void 0,sequenceGroup:c},Q("il_via_jspb")?(f=(new Oe).h(c),d=d.getAsJspb(),f=C(f,J,2,d),f=B(f,4,4),b&&C(f,Ee,3,b),"UNDEFINED_CSN"===c?Y("visualElementShown",e,void 0,f):Cj(f,e,a)):(b={csn:c,ve:d.getAsJson(),eventType:4},h&&(b.clientData=h),"UNDEFINED_CSN"===c?Y("visualElementShown",e,b):a?vj("visualElementShown",b,a,e):W("visualElementShown",b,e))):Bk(a)&1&&!e&&wk(this.client,
c,d,h,b):wk(this.client,c,d,h,b)}}}s(a,b,c){var d=this.i(a),e=a.visualElement?a.visualElement:d;b=this.j.has(e);const f=this.h.get(e);this.j.add(e);this.h.set(e,!1);if(!1===f)return!0;if(!d&&!a.visualElement)return!1;c=Ak(this,a,c);if(!c||!Bk(a)&&a.data&&a.data.loggingDirectives)return!1;d=a.visualElement?a.visualElement:ck(d);Bk(a)&8?xk(this.client,c,d):Bk(a)&2&&!b&&(a=this.client,b={cttAuthInfo:mk(c)||void 0,sequenceGroup:c},Q("il_via_jspb")?(e=(new Ne).h(c),d=d.getAsJspb(),d=C(e,J,2,d),d=B(d,4,
2),"UNDEFINED_CSN"===c?Y("visualElementHidden",b,void 0,d):Dj(d,b,a)):(d={csn:c,ve:d.getAsJson(),eventType:2},"UNDEFINED_CSN"===c?Y("visualElementHidden",b,d):a?vj("visualElementHidden",d,a,b):W("visualElementHidden",d,b)));return!0}i(a){let b,c,d;return Q("il_use_view_model_logging_context")&&(null==(b=a.data)?0:null==(c=b.context)?0:null==(d=c.loggingContext)?0:d.loggingDirectives)?a.data.context.loggingContext.loggingDirectives.trackingParams||"":a.data&&a.data.loggingDirectives?a.data.loggingDirectives.trackingParams||
"":a.veContainer&&a.veContainer.trackingParams?a.veContainer.trackingParams:a.data&&a.data.trackingParams||""}};function Ck(){Dk.h||(Dk.h=new Dk);return Dk.h}
function Ek(a,b){P(Z().v).bind(Z())(b,void 0,8)}
var Dk=class{l(a){P(Z().l).bind(Z())(a)}clear(){P(Z().clear).bind(Z())()}};function Fk(){Gk.h||(Gk.h=new Gk);return Gk.h}
function Hk(a,b,c={}){a.i.add(c.layer||0);a.j=()=>{Ik(a,b,c);const d=ik(c.layer);if(d){for(const e of a.s)Jk(a,e[0],e[1]||d,c.layer);for(const e of a.u)Kk(a,e[0],e[1])}};
X(c.layer)||a.j();if(c.ka)for(const d of c.ka)Lk(a,d,c.layer);else Pj(Error("Delayed screen needs a data promise."))}
function Ik(a,b,c={}){var d=void 0;c.layer||(c.layer=0);d=void 0!==c.Ka?c.Ka:c.layer;const e=X(d);d=ik(d);let f;d&&(void 0!==c.parentCsn?f={clientScreenNonce:c.parentCsn,visualElement:d}:e&&"UNDEFINED_CSN"!==e&&(f={clientScreenNonce:e,visualElement:d}));let g;const h=O("EVENT_ID");"UNDEFINED_CSN"===e&&h&&(g={servletData:{serializedServletEventId:h}});let k;try{k=tk(a.client,b,f,c.ja,c.cttAuthInfo,g,c.Fb,c.loggingExpectations)}catch(p){Uj(p,{Tb:b,rootVe:d,Nb:void 0,Db:e,Mb:f,ja:c.ja});Pj(p);return}nk(k,
b,c.layer,c.cttAuthInfo);e&&"UNDEFINED_CSN"!==e&&d&&!kk(e)&&xk(a.client,e,d,!0);a.h[a.h.length-1]&&!a.h[a.h.length-1].csn&&(a.h[a.h.length-1].csn=k||"");Ck();P(Z().u).bind(Z())();const l=ik(c.layer);e&&"UNDEFINED_CSN"!==e&&l&&(Q("web_mark_root_visible")||Q("music_web_mark_root_visible"))&&P(vk)(void 0,k,l,void 0,void 0,void 0);a.i.delete(c.layer||0);a.j=void 0;let m;null==(m=a.F.get(c.layer))||m.forEach((p,v)=>{p?Jk(a,v,p,c.layer):l&&Jk(a,v,l,c.layer)});
Mk(a)}
function Nk(a){var b=28631,c={layer:8};P(()=>{[28631].includes(b)||(Qj(new L("createClientScreen() called with a non-page VE",b)),b=83769);c.isHistoryNavigation||a.h.push({rootVe:b,key:c.key||""});a.s=[];a.u=[];c.ka?Hk(a,b,c):Ik(a,b,c)})()}
function Lk(a,b,c=0){P(()=>{b.then(d=>{a.i.has(c)&&a.j&&a.j();const e=X(c),f=ik(c);if(e&&f){var g;(null==d?0:null==(g=d.response)?0:g.trackingParams)&&uk(a.client,e,f,[ck(d.response.trackingParams)]);var h;(null==d?0:null==(h=d.playerResponse)?0:h.trackingParams)&&uk(a.client,e,f,[ck(d.playerResponse.trackingParams)])}})})()}
function Jk(a,b,c,d=0){P(()=>{if(a.i.has(d))return a.s.push([b,c]),!0;const e=X(d),f=c||ik(d);return e&&f?(uk(a.client,e,f,[b]),!0):!1})()}
function Ok(a,b){return P(()=>{const c=ck(b);Jk(a,c,void 0,8);return c})()}
function Pk(a,b,c=0){(c=X(c))&&yk(a.client,c,b)}
function Qk(a,b,c,d=0){if(!b)return!1;d=X(d);if(!d)return!1;yk(a.client,d,ck(b),c);return!0}
function Rk(a,b){const c=b.getScreenLayer&&b.getScreenLayer();b.visualElement?Pk(a,b.visualElement,c):(Ck(),b=P(Z().i).bind(Z())(b),Qk(a,b,void 0,c))}
function Kk(a,b,c,d=0){const e=X(d);d=b||ik(d);e&&d&&(a=a.client,b={cttAuthInfo:mk(e)||void 0,sequenceGroup:e},Q("il_via_jspb")?(c=new Pe,c.h(e),d=d.getAsJspb(),C(c,J,2,d),"UNDEFINED_CSN"===e?Y("visualElementStateChanged",b,void 0,c):Fj(c,b,a)):(c={csn:e,ve:d.getAsJson(),clientData:c},"UNDEFINED_CSN"===e?Y("visualElementStateChanged",b,c):a?vj("visualElementStateChanged",c,a,b):W("visualElementStateChanged",c,b)))}
function Mk(a){for(var b=0;b<a.m.length;b++){var c=a.m[b];try{c()}catch(d){Pj(d)}}a.m.length=0;for(b=0;b<a.v.length;b++){c=a.v[b];try{c()}catch(d){Pj(d)}}}
var Gk=class{constructor(){this.s=[];this.u=[];this.h=[];this.m=[];this.v=[];this.i=new Set;this.F=new Map}l(a){this.client=a}clickCommand(a,b,c=0){return Qk(this,a.clickTrackingParams,b,c)}visualElementStateChanged(a,b,c=0){0===c&&this.i.has(c)?this.u.push([a,b]):Kk(this,a,b,c)}};var Sk=class extends D{constructor(a){super(a)}};var Tk=class extends D{constructor(a){super(a)}};Tk.h="yt.sw.adr";function Uk(a){return q(function*(){var b=yield r.fetch(a.i);if(200!==b.status)return Promise.reject("Server error when retrieving AmbientData");b=yield b.text();if(!b.startsWith(")]}'\n"))return Promise.reject("Incorrect JSPB formatting");a:{b=JSON.parse(b.substring(5));for(let c=0;c<b.length;c++)if(b[c][0]===(new Tk).constructor.h){b=new Tk(b[c]);break a}b=null}return b?b:Promise.reject("AmbientData missing from response")})}
function Vk(a=!1){const b=Wk.h;return q(function*(){if(a||!b.h)b.h=Uk(b).then(b.j).catch(c=>{delete b.h;Pj(c)});
return b.h})}
var Wk=class{constructor(){this.i=Xk("/sw.js_data")}j(a){const b=cc(a,Sk,2);if(b){const c=A(b,5);c&&(r.__SAPISID=c);null!=A(b,10)?N("EOM_VISITOR_DATA",A(b,10)):null!=A(b,7)&&N("VISITOR_DATA",A(b,7));null!=ic(b)&&N("SESSION_INDEX",String(ic(b)));null!=A(b,8)&&N("DELEGATED_SESSION_ID",A(b,8))}return a}};function Yk(a,b){b.encryptedTokenJarContents&&(a.h[b.encryptedTokenJarContents]=b,"string"===typeof b.expirationSeconds&&setTimeout(()=>{delete a.h[b.encryptedTokenJarContents]},1E3*Number(b.expirationSeconds)))}
var Zk=class{constructor(){this.h={}}handleResponse(a,b){if(!b)throw Error("request needs to be passed into ConsistencyService");let c,d;b=(null==(c=b.J.context)?void 0:null==(d=c.request)?void 0:d.consistencyTokenJars)||[];let e;if(a=null==(e=a.responseContext)?void 0:e.consistencyTokenJar){for(const f of b)delete this.h[f.encryptedTokenJarContents];Yk(this,a)}}};function $k(){var a=O("INNERTUBE_CONTEXT");if(!a)return Pj(Error("Error: No InnerTubeContext shell provided in ytconfig.")),{};a=wa(a);Q("web_no_tracking_params_in_shell_killswitch")||delete a.clickTracking;a.client||(a.client={});var b=a.client;b.utcOffsetMinutes=-Math.floor((new Date).getTimezoneOffset());var c=zf();c?b.experimentsToken=c:delete b.experimentsToken;Zk.h||(Zk.h=new Zk);b=Zk.h.h;c=[];let d=0;for(const e in b)c[d++]=b[e];a.request=Object.assign({},a.request,{consistencyTokenJars:c});
a.user=Object.assign({},a.user);return a}
;function al(a){var b=a;if(a=O("INNERTUBE_HOST_OVERRIDE")){a=String(a);var c=String,d=b.match(Ma);b=d[5];var e=d[6];d=d[7];var f="";b&&(f+=b);e&&(f+="?"+e);d&&(f+="#"+d);b=a+c(f)}return b}
;var bl=class{};const cl={GET_DATASYNC_IDS:function(a){return()=>new a}(class extends bl{})};const dl=["type.googleapis.com/youtube.api.pfiinnertube.YoutubeApiInnertube.BrowseResponse"];function el(a){var b={Cb:{}},c=yg();if(void 0!==Ci.h){const d=Ci.h;a=[b!==d.m,a!==d.l,c!==d.j,!1,!1,void 0!==d.i];if(a.some(e=>e))throw new L("InnerTubeTransportService is already initialized",a);
}else Ci.h=new Ci(b,a,c)}
function fl(a,b){return q(function*(){var c,d={sessionIndex:null==a?void 0:null==(c=a.ia)?void 0:c.sessionIndex};c=yield yd(Ag(0,d));return Promise.resolve(Object.assign({},gl(b),c))})}
function hl(a,b,c){return q(function*(){var d;if(null==b?0:null==(d=b.J)?0:d.context)for(const m of[])m.Pb(b.J.context);var e;if(null==(e=a.i)?0:e.Wb(b.input,b.J))return yield a.i.Hb(b.input,b.J);var f;if((d=null==(f=b.config)?void 0:f.Sb)&&a.h.has(d)&&Q("web_memoize_inflight_requests"))var g=a.h.get(d);else{f=JSON.stringify(b.J);let m;e=null!=(m=null==(g=b.T)?void 0:g.headers)?m:{};b.T=Object.assign({},b.T,{headers:Object.assign({},e,c)});g=Object.assign({},b.T);"POST"===b.T.method&&(g=Object.assign({},
g,{body:f}));g=a.l.fetch(b.input,g,b.config);d&&a.h.set(d,g)}g=yield g;var h;let k;if(g&&"error"in g&&(null==(h=g)?0:null==(k=h.error)?0:k.details)){h=g.error.details;for(const m of h)(h=m["@type"])&&-1<dl.indexOf(h)&&(delete m["@type"],g=m)}d&&a.h.has(d)&&a.h.delete(d);let l;!g&&(null==(l=a.i)?0:l.Bb(b.input,b.J))&&(g=yield a.i.Gb(b.input,b.J));return g||void 0})}
function il(a,b,c){var d={ia:{identity:Bg}};b.context||(b.context=$k());return new F(e=>q(function*(){var f=al(c);f=gg(f)?"same-origin":"cors";if(a.j.Pa){var g,h=null==d?void 0:null==(g=d.ia)?void 0:g.sessionIndex;g=Ag(0,{sessionIndex:h});f=Object.assign({},gl(f),g)}else f=yield fl(d,f);g=al(c);h={};O("INNERTUBE_OMIT_API_KEY_WHEN_AUTH_HEADER_IS_PRESENT")&&(null==f?0:f.Authorization)||(h.key=O("INNERTUBE_API_KEY"));Q("json_condensed_response")&&(h.prettyPrint="false");g=fg(g,h||{},!1);h={method:"POST",
mode:gg(g)?"same-origin":"cors",credentials:gg(g)?"same-origin":"include"};var k={};const l={};for(const m of Object.keys(k))k[m]&&(l[m]=k[m]);0<Object.keys(l).length&&(h.headers=l);e(hl(a,{input:g,T:h,J:b,config:d},f))}))}
function gl(a){const b={"Content-Type":"application/json"};O("EOM_VISITOR_DATA")?b["X-Goog-EOM-Visitor-Id"]=O("EOM_VISITOR_DATA"):O("VISITOR_DATA")&&(b["X-Goog-Visitor-Id"]=O("VISITOR_DATA"));b["X-Youtube-Bootstrap-Logged-In"]=O("LOGGED_IN",!1);"cors"!==a&&((a=O("INNERTUBE_CONTEXT_CLIENT_NAME"))&&(b["X-Youtube-Client-Name"]=a),(a=O("INNERTUBE_CONTEXT_CLIENT_VERSION"))&&(b["X-Youtube-Client-Version"]=a),(a=O("CHROME_CONNECTED_HEADER"))&&(b["X-Youtube-Chrome-Connected"]=a),(a=O("DOMAIN_ADMIN_STATE"))&&
(b["X-Youtube-Domain-Admin-State"]=a));return b}
var Ci=class{constructor(a,b,c){this.m=a;this.l=b;this.j=c;this.i=void 0;this.h=new Map;a.fa||(a.fa={});a.fa=Object.assign({},cl,a.fa)}};var Bi=new yi;let jl;function kl(){if(!jl){const a=Hi();el({fetch:(b,c)=>yd(fetch(new Request(b,c)))});
Ai(a);jl=a.resolve(Bi)}return jl}
;function ll(a){return q(function*(){yield ml();Qj(a)})}
function nl(a){return q(function*(){yield ml();Pj(a)})}
function ol(a){q(function*(){var b=yield Dh();b?yield gi(a,b):(yield Vk(),b={timestamp:a.timestamp},b=a.appShellAssetLoadReport?{S:"appShellAssetLoadReport",payload:a.appShellAssetLoadReport,options:b}:a.clientError?{S:"clientError",payload:a.clientError,options:b}:void 0,b&&W(b.S,b.payload))})}
function ml(){return q(function*(){try{yield Vk()}catch(a){}})}
;const pl={granted:"GRANTED",denied:"DENIED",unknown:"UNKNOWN"},ql=RegExp("^(?:[a-z]+:)?//","i");function rl(a){var b=a.data;a=b.type;b=b.data;"notifications_register"===a?(M("IDToken",b),sl()):"notifications_check_registration"===a&&tl(b)}
function ul(){return self.clients.matchAll({type:"window",includeUncontrolled:!0}).then(a=>{if(a)for(const b of a)b.postMessage({type:"update_unseen_notifications_count_signal"})})}
function vl(a){const b=[];a.forEach(c=>{b.push({key:c.key,value:c.value})});
return b}
function wl(a){return q(function*(){const b=vl(a.payload.chrome.extraUrlParams),c={recipientId:a.recipientId,endpoint:a.payload.chrome.endpoint,extraUrlParams:b},d=mf($e);return xl().then(e=>il(e,c,d).then(f=>{f.json().then(g=>g&&g.endpointUrl?yl(a,g.endpointUrl):Promise.resolve()).catch(g=>{nl(g);
Promise.reject(g)})}))})}
function zl(a,b){var c=X(8);if(null==c||!b)return a;a=ql.test(a)?new URL(a):new URL(a,self.registration.scope);a.searchParams.set("parentCsn",c);a.searchParams.set("parentTrackingParams",b);return a.toString()}
function yl(a,b){a.deviceId&&M("DeviceId",a.deviceId);a.timestampSec&&M("TimestampLowerBound",a.timestampSec);const c=a.payload.chrome,d=Fk();Nk(d);var e;const f=null==(e=c.postedEndpoint)?void 0:e.clickTrackingParams;e=c.title;const g={body:c.body,icon:c.iconUrl,data:{nav:zl(b,f),id:c.notificationId,attributionTag:c.attributionTag,clickEndpoint:c.clickEndpoint,postedEndpoint:c.postedEndpoint,clickTrackingParams:f,isDismissed:!0},tag:c.notificationTag||c.title+c.body+c.iconUrl,requireInteraction:!0};
return self.registration.showNotification(e,g).then(()=>{var h;(null==(h=g.data)?0:h.postedEndpoint)&&Al(g.data.postedEndpoint);let k;if(null==(k=g.data)?0:k.clickTrackingParams)h={screenLayer:8,visualElement:Ok(d,g.data.clickTrackingParams)},Ek(Ck(),h);Bl(a.displayCap)}).catch(()=>{})}
function Al(a){if(!Bf(a,Ze))return Promise.reject();const b={serializedRecordNotificationInteractionsRequest:Bf(a,Ze).serializedInteractionsRequest},c=mf(af);return xl().then(d=>il(d,b,c)).then(d=>d)}
function Bl(a){-1!==a&&self.registration.getNotifications().then(b=>{for(let e=0;e<b.length-a;e++){b[e].data.isDismissed=!1;b[e].close();let f;if(null==(f=b[e].data)?0:f.clickTrackingParams){let g;var c=ck(null==(g=b[e].data)?void 0:g.clickTrackingParams),d={screenLayer:8,visualElement:c};const h=ek(82046),k=Fk();Jk(k,h,c,8);c={screenLayer:8,visualElement:h};Ek(Ck(),c);Rk(k,c);Ck();P(Z().s).bind(Z())(d,void 0,8)}}})}
function tl(a){const b=[Cl(a),hf("RegistrationTimestamp").then(Dl),El(),Fl(),Gl()];Promise.all(b).catch(()=>{M("IDToken",a);sl();return Promise.resolve()})}
function Dl(a){return 9E7>=Date.now()-(a||0)?Promise.resolve():Promise.reject()}
function Cl(a){return hf("IDToken").then(b=>a===b?Promise.resolve():Promise.reject())}
function El(){return hf("Permission").then(a=>Notification.permission===a?Promise.resolve():Promise.reject())}
function Fl(){return hf("Endpoint").then(a=>Hl().then(b=>a===b?Promise.resolve():Promise.reject()))}
function Gl(){return hf("application_server_key").then(a=>Il().then(b=>a===b?Promise.resolve():Promise.reject()))}
function Jl(){var a=Notification.permission;if(pl[a])return pl[a]}
function sl(){M("RegistrationTimestamp",0);Promise.all([Hl(),Kl(),Ll(),Il()]).then(([a,b,c,d])=>{b=b?cf(b):null;c=c?cf(c):null;d=d?db(new Uint8Array(d),4):null;Ml(a,b,c,d)}).catch(()=>{Ml()})}
function Ml(a=null,b=null,c=null,d=null){gf().then(e=>{e&&(M("Endpoint",a),M("P256dhKey",b),M("AuthKey",c),M("application_server_key",d),M("Permission",Notification.permission),Promise.all([hf("DeviceId"),hf("NotificationsDisabled")]).then(([f,g])=>{if(null!=f)var h=f;else{f=[];var k;h=h||Rd.length;for(k=0;256>k;k++)f[k]=Rd[0|Math.random()*h];h=f.join("")}Nl(h,null!=a?a:void 0,null!=b?b:void 0,null!=c?c:void 0,null!=d?d:void 0,null!=g?g:void 0)}))})}
function Nl(a,b,c,d,e,f){q(function*(){const g={notificationRegistration:{chromeRegistration:{deviceId:a,pushParams:{applicationServerKey:e,authKey:d,p256dhKey:c,browserEndpoint:b},notificationsDisabledInApp:f,permission:Jl()}}},h=mf(bf);return xl().then(k=>il(k,g,h).then(()=>{M("DeviceId",a);M("RegistrationTimestamp",Date.now());M("TimestampLowerBound",Date.now())},l=>{ll(l)}))})}
function Hl(){return self.registration.pushManager.getSubscription().then(a=>a?Promise.resolve(a.endpoint):Promise.resolve(null))}
function Kl(){return self.registration.pushManager.getSubscription().then(a=>a&&a.getKey?Promise.resolve(a.getKey("p256dh")):Promise.resolve(null))}
function Ll(){return self.registration.pushManager.getSubscription().then(a=>a&&a.getKey?Promise.resolve(a.getKey("auth")):Promise.resolve(null))}
function Il(){return self.registration.pushManager.getSubscription().then(a=>a?Promise.resolve(a.options.applicationServerKey):Promise.resolve(null))}
function xl(){return q(function*(){try{return yield Vk(!0),kl()}catch(a){return yield ll(a),Promise.reject(a)}})}
;let Ol=self.location.origin+"/";function Xk(a){let b="undefined"!==typeof ServiceWorkerGlobalScope&&self instanceof ServiceWorkerGlobalScope?hd.registration.scope:Ol;b.endsWith("/")&&(b=b.slice(0,-1));return b+a}
;let Pl=void 0;function Ql(a){return q(function*(){Pl||(Pl=yield a.open("yt-appshell-assets"));return Pl})}
function Rl(a,b){return q(function*(){const c=yield Ql(a),d=b.map(e=>Sl(c,e));
return Promise.all(d)})}
function Tl(a,b){return q(function*(){let c;try{c=yield a.match(b,{cacheName:"yt-appshell-assets"})}catch(d){}return c})}
function Ul(a,b){return q(function*(){const c=yield Ql(a),d=(yield c.keys()).filter(e=>!b.includes(e.url)).map(e=>c.delete(e));
return Promise.all(d)})}
function Vl(a,b,c){return q(function*(){yield(yield Ql(a)).put(b,c)})}
function Wl(a,b){q(function*(){yield(yield Ql(a)).delete(b)})}
function Sl(a,b){return q(function*(){return(yield a.match(b))?Promise.resolve():a.add(b)})}
;var Xl=Mh("yt-serviceworker-metadata",{O:{auth:{N:1},["resource-manifest-assets"]:{N:2}},Y:!0,upgrade(a,b){b(1)&&eh(a,"resource-manifest-assets");b(2)&&eh(a,"auth")},version:2});let Yl=null;function Zl(a){return th(Xl(),a)}
function $l(){return q(function*(){const a=yield Dh();if(a)return am.h||(am.h=new am(a)),am.h})}
function bm(a,b){return q(function*(){yield U(yield Zl(a.token),["resource-manifest-assets"],"readwrite",c=>{const d=c.objectStore("resource-manifest-assets"),e=Date.now();return T(d.h.put(b,e)).then(()=>{Yl=e;let f=!0;return jh(d,{query:IDBKeyRange.bound(0,Date.now()),direction:"prev"},g=>f?(f=!1,g.advance(5)):d.delete(g.getKey()).then(()=>g.continue()))})})})}
function cm(a,b){return q(function*(){let c=!1,d=0;yield U(yield Zl(a.token),["resource-manifest-assets"],"readonly",e=>jh(e.objectStore("resource-manifest-assets"),{query:IDBKeyRange.bound(0,Date.now()),direction:"prev"},f=>{if(f.R().includes(b))c=!0;else return d+=1,f.continue()}));
return c?d:-1})}
function dm(a){return q(function*(){Yl||(yield U(yield Zl(a.token),["resource-manifest-assets"],"readonly",b=>jh(b.objectStore("resource-manifest-assets"),{query:IDBKeyRange.bound(0,Date.now()),direction:"prev"},c=>{Yl=c.getKey()})));
return Yl})}
var am=class{constructor(a){this.token=a}};function em(){return q(function*(){const a=yield Dh();if(a)return fm.h||(fm.h=new fm(a)),fm.h})}
function gm(a,b){return q(function*(){yield gh(yield Zl(a.token),"auth",b,"shell_identifier_key")})}
function hm(a){return q(function*(){return(yield(yield Zl(a.token)).get("auth","shell_identifier_key"))||""})}
function im(a){return q(function*(){yield(yield Zl(a.token)).clear("auth")})}
var fm=class{constructor(a){this.token=a}};function jm(){q(function*(){const a=yield em();a&&(yield im(a))})}
;var km=class extends D{constructor(a){super(a)}};var lm=[1],mm=function(a){return(b,c)=>{a:{if(Hb.length){const f=Hb.pop();Db(f,c);f.h.init(b,void 0,void 0,c);b=f}else b=new Gb(b,c);try{var d=Bc(a);var e=Cc(new d.ba,b,d);break a}finally{d=b,d.h.clear(),d.l=-1,d.i=-1,100>Hb.length&&Hb.push(d)}e=void 0}return e}}([class extends D{constructor(a){super(a,-1,lm)}},
1,Oc,[km,1,Nc]]);function nm(a){return q(function*(){const b=a.headers.get("X-Resource-Manifest");return b?Promise.resolve(om(b)):Promise.reject(Error("No resource manifest header"))})}
function om(a){return fc(mm(decodeURIComponent(a)),km,1).reduce((b,c)=>{(c=jc(c,1))&&b.push(c);return b},[])}
;function pm(a){return q(function*(){const b=yield Vk();if(b&&null!=A(b,3)){var c=yield em();c&&(c=yield hm(c),A(b,3)!==c&&(Wl(a.caches,a.h),jm()))}})}
function qm(a){return q(function*(){let b,c;try{c=yield rm(a.i),b=yield nm(c),yield Rl(a.caches,b)}catch(d){return Promise.reject(d)}try{yield sm(),yield Vl(a.caches,a.h,c)}catch(d){return Promise.reject(d)}if(b)try{yield tm(a,b,a.h)}catch(d){}return Promise.resolve()})}
function um(a){return q(function*(){yield pm(a);return qm(a)})}
function rm(a){return q(function*(){try{return yield r.fetch(new Request(a))}catch(b){return Promise.reject(b)}})}
function sm(){return q(function*(){var a=yield Vk();let b;a&&null!=A(a,3)&&(b=A(a,3));return b?(a=yield em())?Promise.resolve(gm(a,b)):Promise.reject(Error("Could not get AuthMonitor instance")):Promise.reject(Error("Could not get datasync ID"))})}
function tm(a,b,c){return q(function*(){const d=yield $l();if(d)try{yield bm(d,b)}catch(e){yield ll(e)}b.push(c);try{yield Ul(a.caches,b)}catch(e){yield ll(e)}return Promise.resolve()})}
function vm(a,b){return q(function*(){return Tl(a.caches,b)})}
function wm(a){return q(function*(){return Tl(a.caches,a.h)})}
var xm=class{constructor(){var a=self.caches;let b=Xk("/app_shell");Q("service_worker_forward_exp_params")&&(b+=self.location.search);var c=Xk("/app_shell_home");this.caches=a;this.i=b;this.h=c}};var ym=class{constructor(){const a=this;this.stream=new ReadableStream({start(b){a.close=()=>void b.close();
a.h=c=>{const d=c.getReader();return d.read().then(function h({done:f,value:g}){if(f)return Promise.resolve();b.enqueue(g);return d.read().then(h)})};
a.i=()=>{const c=(new TextEncoder).encode("<script>if (window.fetchInitialData) { window.fetchInitialData(); } else { window.getInitialData = undefined; }\x3c/script>");b.enqueue(c)}}})}};function zm(a,b){return q(function*(){const c=b.request,d=yield vm(a.h,c.url);if(d)return ol({appShellAssetLoadReport:{assetPath:c.url,cacheHit:!0},timestamp:R()}),d;Am(c);return Bm(b)})}
function Cm(a,b){return q(function*(){const c=yield Dm(b);if(c.response&&(c.response.ok||"opaqueredirect"===c.response.type||429===c.response.status||303===c.response.status||300<=c.response.status&&400>c.response.status))return c.response;const d=yield wm(a.h);if(d)return Em(a),Fm(d,b);Gm(a);return c.response?c.response:Promise.reject(c.error)})}
function Hm(a,b){b=new URL(b);if(!a.config.ha.includes(b.pathname))return!1;if(!b.search)return!0;for(const c of a.config.xa)if(a=b.searchParams.get(c.key),void 0===c.value||a===c.value)if(b.searchParams.delete(c.key),!b.search)return!0;return!1}
function Im(a,b){return q(function*(){const c=yield wm(a.h);if(!c)return Gm(a),Bm(b);Em(a);var d;a:{if(c.headers&&(d=c.headers.get("date"))&&(d=Date.parse(d),!isNaN(d))){d=Math.round(R()-d);break a}d=-1}if(!(-1<d&&7<=d/864E5))return Fm(c,b);d=yield Dm(b);return d.response&&d.response.ok?d.response:Fm(c,b)})}
function Bm(a){return Promise.resolve(a.preloadResponse).then(b=>b&&!Jm(b)?b:r.fetch(a.request))}
function Am(a){const b={assetPath:a.url,cacheHit:!1};$l().then(c=>{if(c){var d=dm(c).then(e=>{e&&(b.currentAppBundleTimestampSec=String(Math.floor(e/1E3)))});
c=cm(c,a.url).then(e=>{b.appBundleVersionDiffCount=e});
Promise.all([d,c]).catch(e=>{ll(e)}).finally(()=>{ol({appShellAssetLoadReport:b,
timestamp:R()})})}else ol({appShellAssetLoadReport:b,
timestamp:R()})})}
function Em(a){ol({appShellAssetLoadReport:{assetPath:a.h.h,cacheHit:!0},timestamp:R()})}
function Gm(a){ol({appShellAssetLoadReport:{assetPath:a.h.h,cacheHit:!1},timestamp:R()})}
function Fm(a,b){if(!Q("sw_nav_preload_pbj"))return a;const c=new ym,d=c.h(a.body);Promise.resolve(b.preloadResponse).then(e=>{if(!e||!Jm(e))throw Error("no pbj preload response available");d.then(()=>c.h(e.body)).then(()=>void c.close())}).catch(()=>{d.then(()=>{c.i();
c.close()})});
return new Response(c.stream,{status:a.status,statusText:a.statusText,headers:a.headers})}
function Dm(a){return q(function*(){try{return{response:yield Bm(a)}}catch(b){return{error:b}}})}
function Jm(a){return"pbj"===a.headers.get("x-navigation-preload-response-type")}
var Sm=class{constructor(){var a=Km;var b={Aa:Lm,Ma:Mm([Nm,/\/signin/,/\/logout/]),ha:["/","/feed/downloads"],xa:Om([{key:"feature",value:"ytca"}]),wa:Pm(Q("kevlar_sw_app_wide_fallback")?Qm:Rm)};this.h=a;this.config=b}};const Tm=/^\/$/,Rm=[Tm,/^\/feed\/downloads$/],Qm=[Tm,/^\/feed\/\w*/,/^\/results$/,/^\/playlist$/,/^\/watch$/,/^\/channel\/\w*/];function Pm(a){return new RegExp(a.map(b=>b.source).join("|"))}
const Um=/^https:\/\/([\w-]*\.)*youtube\.com.*/;function Mm(a){a=Pm(a);return new RegExp(`${Um.source}(${a.source})`)}
const Vm=Pm([/\.css$/,/\.js$/,/\.ico$/,/\/ytmweb\/_\/js\//,/\/ytmweb\/_\/ss\//,/\/kabuki\/_\/js\//,/\/kabuki\/_\/ss\//,/\/ytmainappweb\/_\/ss\//]),Lm=new RegExp(`${Um.source}(${Vm.source})`),Nm=/purge_shell=1/;function Om(a=[]){const b=[];for(const c of Xc)b.push({key:c});for(const c of a)b.push(c);return b}
Mm([Nm]);Om();var Xm=class{constructor(){var a=Km,b=Wm;this.h=self;this.i=a;this.m=b;this.v=df}init(){this.h.oninstall=this.s.bind(this);this.h.onactivate=this.j.bind(this);this.h.onfetch=this.l.bind(this);this.h.onmessage=this.u.bind(this)}s(a){this.h.skipWaiting();const b=um(this.i).catch(c=>{ll(c);return Promise.resolve()});
a.waitUntil(b)}j(a){const b=[this.h.clients.claim()],c=this.h.registration;c.navigationPreload&&(b.push(c.navigationPreload.enable()),Q("sw_nav_preload_pbj")&&b.push(c.navigationPreload.setHeaderValue("pbj")));a.waitUntil(Promise.all(b))}l(a){const b=this;return q(function*(){var c=b.m,d=!!b.h.registration.navigationPreload;const e=a.request;if(c.config.Ma.test(e.url))Wk.h&&(delete Wk.h.h,r.__SAPISID=void 0,N("VISITOR_DATA",void 0),N("SESSION_INDEX",void 0),N("DELEGATED_SESSION_ID",void 0)),d=a.respondWith,
c=c.h,Wl(c.caches,c.h),jm(),c=Bm(a),d.call(a,c);else if(c.config.Aa.test(e.url))a.respondWith(zm(c,a));else if("navigate"===e.mode){const f=new URL(e.url),g=c.config.ha;(!Q("sw_nav_request_network_first")&&g.includes(f.pathname)?0:c.config.wa.test(f.pathname))?a.respondWith(Cm(c,a)):Hm(c,e.url)?a.respondWith(Im(c,a)):d&&a.respondWith(Bm(a))}})}u(a){const b=a.data;
this.v.includes(b.type)?rl(a):"refresh_shell"===b.type&&qm(this.i).catch(c=>{ll(c)})}};function Ym(){let a=u("ytglobal.storage_");a||(a=new Zm,t("ytglobal.storage_",a));return a}
var Zm=class{estimate(){return q(function*(){const a=navigator;let b;if(null==(b=a.storage)?0:b.estimate)return a.storage.estimate();let c;if(null==(c=a.webkitTemporaryStorage)?0:c.queryUsageAndQuota)return $m()})}};
function $m(){const a=navigator;return new Promise((b,c)=>{let d;null!=(d=a.webkitTemporaryStorage)&&d.queryUsageAndQuota?a.webkitTemporaryStorage.queryUsageAndQuota((e,f)=>{b({usage:e,quota:f})},e=>{c(e)}):c(Error("webkitTemporaryStorage is not supported."))})}
t("ytglobal.storageClass_",Zm);function an(a,b){Ym().estimate().then(c=>{c=Object.assign({},b,{isSw:void 0===self.document,isIframe:self!==self.top,deviceStorageUsageMbytes:bn(null==c?void 0:c.usage),deviceStorageQuotaMbytes:bn(null==c?void 0:c.quota)});a.h("idbQuotaExceeded",c)})}
class cn{constructor(){var a=dn;this.handleError=en;this.h=a;this.i=!1;void 0===self.document||self.addEventListener("beforeunload",()=>{this.i=!0});
this.j=Math.random()<=yf("ytidb_transaction_ended_event_rate_limit_session",.2)}V(a,b){switch(a){case "IDB_DATA_CORRUPTED":Q("idb_data_corrupted_killswitch")||this.h("idbDataCorrupted",b);break;case "IDB_UNEXPECTEDLY_CLOSED":this.h("idbUnexpectedlyClosed",b);break;case "IS_SUPPORTED_COMPLETED":Q("idb_is_supported_completed_killswitch")||this.h("idbIsSupportedCompleted",b);break;case "QUOTA_EXCEEDED":an(this,b);break;case "TRANSACTION_ENDED":this.j&&Math.random()<=yf("ytidb_transaction_ended_event_rate_limit_transaction",
.1)&&this.h("idbTransactionEnded",b);break;case "TRANSACTION_UNEXPECTEDLY_ABORTED":a=Object.assign({},b,{hasWindowUnloaded:this.i}),this.h("idbTransactionAborted",a)}}}function bn(a){return"undefined"===typeof a?"-1":String(Math.ceil(a/1048576))}
;rg(og(),{I:[{Ja:/Failed to fetch/,weight:500}],G:[]});var {handleError:en=Oj,V:dn=W}={handleError:nl,V:function(a,b){return q(function*(){yield ml();W(a,b)})}};
for(Eg=new cn;0<Dg.length;){const a=Dg.shift();switch(a.type){case "ERROR":Eg.handleError(a.payload);break;case "EVENT":Eg.V(a.eventType,a.payload)}}Wk.h=new Wk;self.onnotificationclick=function(a){a.notification.close();const b=a.notification.data;b.isDismissed=!1;const c=self.clients.matchAll({type:"window",includeUncontrolled:!0});c.then(d=>{a:{var e=b.nav;for(const f of d)if(f.url===e){f.focus();break a}self.clients.openWindow(e)}});
a.waitUntil(c);a.waitUntil(Al(b.clickEndpoint))};
self.onnotificationclose=function(a){var b=a.notification.data;if(null==b?0:b.clickTrackingParams){var c=ck(b.clickTrackingParams);a={screenLayer:8,visualElement:c};if(b.isDismissed){const d=ek(74726);b=Fk();Jk(b,d,c,8);c={screenLayer:8,visualElement:d};Ek(Ck(),c);Rk(b,c)}Ck();P(Z().s).bind(Z())(a,void 0,8)}};
self.onpush=function(a){a.waitUntil(hf("NotificationsDisabled").then(b=>{if(b)return Promise.resolve();if(a.data&&a.data.text().length)try{return wl(a.data.json())}catch(c){return Promise.resolve(c.message)}return Promise.resolve()}));
a.waitUntil(ul())};
self.onpushsubscriptionchange=function(){sl()};
const Km=new xm,Wm=new Sm;(new Xm).init();