var Zo=Object.create;var ct=Object.defineProperty;var Xo=Object.getOwnPropertyDescriptor;var ea=Object.getOwnPropertyNames;var ta=Object.getPrototypeOf,ra=Object.prototype.hasOwnProperty;var a=(r,e)=>ct(r,"name",{value:e,configurable:!0}),Wn=(r=>typeof require<"u"?require:
typeof Proxy<"u"?new Proxy(r,{get:(e,t)=>(typeof require<"u"?require:e)[t]}):r)(
function(r){if(typeof require<"u")return require.apply(this,arguments);throw Error(
'Dynamic require of "'+r+'" is not supported')});var de=(r,e)=>()=>(r&&(e=r(r=0)),e);var B=(r,e)=>()=>(e||r((e={exports:{}}).exports,e),e.exports),ge=(r,e)=>{for(var t in e)
ct(r,t,{get:e[t],enumerable:!0})},Vn=(r,e,t,n)=>{if(e&&typeof e=="object"||typeof e==
"function")for(let i of ea(e))!ra.call(r,i)&&i!==t&&ct(r,i,{get:()=>e[i],enumerable:!(n=
Xo(e,i))||n.enumerable});return r};var je=(r,e,t)=>(t=r!=null?Zo(ta(r)):{},Vn(e||!r||!r.__esModule?ct(t,"default",{
value:r,enumerable:!0}):t,r)),ne=r=>Vn(ct({},"__esModule",{value:!0}),r);var Jn=B(qt=>{"use strict";y();qt.byteLength=ia;qt.toByteArray=oa;qt.fromByteArray=
ua;var Ae=[],we=[],na=typeof Uint8Array<"u"?Uint8Array:Array,fr="ABCDEFGHIJKLMNO\
PQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";for(De=0,Gn=fr.length;De<Gn;++De)
Ae[De]=fr[De],we[fr.charCodeAt(De)]=De;var De,Gn;we[45]=62;we[95]=63;function zn(r){
var e=r.length;if(e%4>0)throw new Error("Invalid string. Length must be a multip\
le of 4");var t=r.indexOf("=");t===-1&&(t=e);var n=t===e?0:4-t%4;return[t,n]}a(zn,
"getLens");function ia(r){var e=zn(r),t=e[0],n=e[1];return(t+n)*3/4-n}a(ia,"byte\
Length");function sa(r,e,t){return(e+t)*3/4-t}a(sa,"_byteLength");function oa(r){
var e,t=zn(r),n=t[0],i=t[1],s=new na(sa(r,n,i)),o=0,c=i>0?n-4:n,u;for(u=0;u<c;u+=
4)e=we[r.charCodeAt(u)]<<18|we[r.charCodeAt(u+1)]<<12|we[r.charCodeAt(u+2)]<<6|we[r.
charCodeAt(u+3)],s[o++]=e>>16&255,s[o++]=e>>8&255,s[o++]=e&255;return i===2&&(e=
we[r.charCodeAt(u)]<<2|we[r.charCodeAt(u+1)]>>4,s[o++]=e&255),i===1&&(e=we[r.charCodeAt(
u)]<<10|we[r.charCodeAt(u+1)]<<4|we[r.charCodeAt(u+2)]>>2,s[o++]=e>>8&255,s[o++]=
e&255),s}a(oa,"toByteArray");function aa(r){return Ae[r>>18&63]+Ae[r>>12&63]+Ae[r>>
6&63]+Ae[r&63]}a(aa,"tripletToBase64");function ca(r,e,t){for(var n,i=[],s=e;s<t;s+=
3)n=(r[s]<<16&16711680)+(r[s+1]<<8&65280)+(r[s+2]&255),i.push(aa(n));return i.join(
"")}a(ca,"encodeChunk");function ua(r){for(var e,t=r.length,n=t%3,i=[],s=16383,o=0,
c=t-n;o<c;o+=s)i.push(ca(r,o,o+s>c?c:o+s));return n===1?(e=r[t-1],i.push(Ae[e>>2]+
Ae[e<<4&63]+"==")):n===2&&(e=(r[t-2]<<8)+r[t-1],i.push(Ae[e>>10]+Ae[e>>4&63]+Ae[e<<
2&63]+"=")),i.join("")}a(ua,"fromByteArray")});var Yn=B(dr=>{y();dr.read=function(r,e,t,n,i){var s,o,c=i*8-n-1,u=(1<<c)-1,l=u>>
1,h=-7,f=t?i-1:0,g=t?-1:1,p=r[e+f];for(f+=g,s=p&(1<<-h)-1,p>>=-h,h+=c;h>0;s=s*256+
r[e+f],f+=g,h-=8);for(o=s&(1<<-h)-1,s>>=-h,h+=n;h>0;o=o*256+r[e+f],f+=g,h-=8);if(s===
0)s=1-l;else{if(s===u)return o?NaN:(p?-1:1)*(1/0);o=o+Math.pow(2,n),s=s-l}return(p?
-1:1)*o*Math.pow(2,s-n)};dr.write=function(r,e,t,n,i,s){var o,c,u,l=s*8-i-1,h=(1<<
l)-1,f=h>>1,g=i===23?Math.pow(2,-24)-Math.pow(2,-77):0,p=n?0:s-1,E=n?1:-1,C=e<0||
e===0&&1/e<0?1:0;for(e=Math.abs(e),isNaN(e)||e===1/0?(c=isNaN(e)?1:0,o=h):(o=Math.
floor(Math.log(e)/Math.LN2),e*(u=Math.pow(2,-o))<1&&(o--,u*=2),o+f>=1?e+=g/u:e+=
g*Math.pow(2,1-f),e*u>=2&&(o++,u/=2),o+f>=h?(c=0,o=h):o+f>=1?(c=(e*u-1)*Math.pow(
2,i),o=o+f):(c=e*Math.pow(2,f-1)*Math.pow(2,i),o=0));i>=8;r[t+p]=c&255,p+=E,c/=256,
i-=8);for(o=o<<i|c,l+=i;l>0;r[t+p]=o&255,p+=E,o/=256,l-=8);r[t+p-E]|=C*128}});var pi=B(Ge=>{"use strict";y();var pr=Jn(),We=Yn(),Zn=typeof Symbol=="function"&&
typeof Symbol.for=="function"?Symbol.for("nodejs.util.inspect.custom"):null;Ge.Buffer=
d;Ge.SlowBuffer=ya;Ge.INSPECT_MAX_BYTES=50;var kt=2147483647;Ge.kMaxLength=kt;d.
TYPED_ARRAY_SUPPORT=la();!d.TYPED_ARRAY_SUPPORT&&typeof console<"u"&&typeof console.
error=="function"&&console.error("This browser lacks typed array (Uint8Array) su\
pport which is required by `buffer` v5.x. Use `buffer` v4.x if you require old b\
rowser support.");function la(){try{let r=new Uint8Array(1),e={foo:a(function(){
return 42},"foo")};return Object.setPrototypeOf(e,Uint8Array.prototype),Object.setPrototypeOf(
r,e),r.foo()===42}catch{return!1}}a(la,"typedArraySupport");Object.defineProperty(
d.prototype,"parent",{enumerable:!0,get:a(function(){if(d.isBuffer(this))return this.
buffer},"get")});Object.defineProperty(d.prototype,"offset",{enumerable:!0,get:a(
function(){if(d.isBuffer(this))return this.byteOffset},"get")});function Re(r){if(r>
kt)throw new RangeError('The value "'+r+'" is invalid for option "size"');let e=new Uint8Array(
r);return Object.setPrototypeOf(e,d.prototype),e}a(Re,"createBuffer");function d(r,e,t){
if(typeof r=="number"){if(typeof e=="string")throw new TypeError('The "string" a\
rgument must be of type string. Received type number');return wr(r)}return ri(r,
e,t)}a(d,"Buffer");d.poolSize=8192;function ri(r,e,t){if(typeof r=="string")return fa(
r,e);if(ArrayBuffer.isView(r))return da(r);if(r==null)throw new TypeError("The f\
irst argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-l\
ike Object. Received type "+typeof r);if(ve(r,ArrayBuffer)||r&&ve(r.buffer,ArrayBuffer)||
typeof SharedArrayBuffer<"u"&&(ve(r,SharedArrayBuffer)||r&&ve(r.buffer,SharedArrayBuffer)))
return mr(r,e,t);if(typeof r=="number")throw new TypeError('The "value" argument\
 must not be of type number. Received type number');let n=r.valueOf&&r.valueOf();
if(n!=null&&n!==r)return d.from(n,e,t);let i=pa(r);if(i)return i;if(typeof Symbol<
"u"&&Symbol.toPrimitive!=null&&typeof r[Symbol.toPrimitive]=="function")return d.
from(r[Symbol.toPrimitive]("string"),e,t);throw new TypeError("The first argumen\
t must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. \
Received type "+typeof r)}a(ri,"from");d.from=function(r,e,t){return ri(r,e,t)};
Object.setPrototypeOf(d.prototype,Uint8Array.prototype);Object.setPrototypeOf(d,
Uint8Array);function ni(r){if(typeof r!="number")throw new TypeError('"size" arg\
ument must be of type number');if(r<0)throw new RangeError('The value "'+r+'" is\
 invalid for option "size"')}a(ni,"assertSize");function ha(r,e,t){return ni(r),
r<=0?Re(r):e!==void 0?typeof t=="string"?Re(r).fill(e,t):Re(r).fill(e):Re(r)}a(ha,
"alloc");d.alloc=function(r,e,t){return ha(r,e,t)};function wr(r){return ni(r),Re(
r<0?0:Sr(r)|0)}a(wr,"allocUnsafe");d.allocUnsafe=function(r){return wr(r)};d.allocUnsafeSlow=
function(r){return wr(r)};function fa(r,e){if((typeof e!="string"||e==="")&&(e="\
utf8"),!d.isEncoding(e))throw new TypeError("Unknown encoding: "+e);let t=ii(r,e)|
0,n=Re(t),i=n.write(r,e);return i!==t&&(n=n.slice(0,i)),n}a(fa,"fromString");function yr(r){
let e=r.length<0?0:Sr(r.length)|0,t=Re(e);for(let n=0;n<e;n+=1)t[n]=r[n]&255;return t}
a(yr,"fromArrayLike");function da(r){if(ve(r,Uint8Array)){let e=new Uint8Array(r);
return mr(e.buffer,e.byteOffset,e.byteLength)}return yr(r)}a(da,"fromArrayView");
function mr(r,e,t){if(e<0||r.byteLength<e)throw new RangeError('"offset" is outs\
ide of buffer bounds');if(r.byteLength<e+(t||0))throw new RangeError('"length" i\
s outside of buffer bounds');let n;return e===void 0&&t===void 0?n=new Uint8Array(
r):t===void 0?n=new Uint8Array(r,e):n=new Uint8Array(r,e,t),Object.setPrototypeOf(
n,d.prototype),n}a(mr,"fromArrayBuffer");function pa(r){if(d.isBuffer(r)){let e=Sr(
r.length)|0,t=Re(e);return t.length===0||r.copy(t,0,0,e),t}if(r.length!==void 0)
return typeof r.length!="number"||Er(r.length)?Re(0):yr(r);if(r.type==="Buffer"&&
Array.isArray(r.data))return yr(r.data)}a(pa,"fromObject");function Sr(r){if(r>=
kt)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+
kt.toString(16)+" bytes");return r|0}a(Sr,"checked");function ya(r){return+r!=r&&
(r=0),d.alloc(+r)}a(ya,"SlowBuffer");d.isBuffer=a(function(e){return e!=null&&e.
_isBuffer===!0&&e!==d.prototype},"isBuffer");d.compare=a(function(e,t){if(ve(e,Uint8Array)&&
(e=d.from(e,e.offset,e.byteLength)),ve(t,Uint8Array)&&(t=d.from(t,t.offset,t.byteLength)),
!d.isBuffer(e)||!d.isBuffer(t))throw new TypeError('The "buf1", "buf2" arguments\
 must be one of type Buffer or Uint8Array');if(e===t)return 0;let n=e.length,i=t.
length;for(let s=0,o=Math.min(n,i);s<o;++s)if(e[s]!==t[s]){n=e[s],i=t[s];break}return n<
i?-1:i<n?1:0},"compare");d.isEncoding=a(function(e){switch(String(e).toLowerCase()){case"\
hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"\
ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},"isEn\
coding");d.concat=a(function(e,t){if(!Array.isArray(e))throw new TypeError('"lis\
t" argument must be an Array of Buffers');if(e.length===0)return d.alloc(0);let n;
if(t===void 0)for(t=0,n=0;n<e.length;++n)t+=e[n].length;let i=d.allocUnsafe(t),s=0;
for(n=0;n<e.length;++n){let o=e[n];if(ve(o,Uint8Array))s+o.length>i.length?(d.isBuffer(
o)||(o=d.from(o)),o.copy(i,s)):Uint8Array.prototype.set.call(i,o,s);else if(d.isBuffer(
o))o.copy(i,s);else throw new TypeError('"list" argument must be an Array of Buf\
fers');s+=o.length}return i},"concat");function ii(r,e){if(d.isBuffer(r))return r.
length;if(ArrayBuffer.isView(r)||ve(r,ArrayBuffer))return r.byteLength;if(typeof r!=
"string")throw new TypeError('The "string" argument must be one of type string, \
Buffer, or ArrayBuffer. Received type '+typeof r);let t=r.length,n=arguments.length>
2&&arguments[2]===!0;if(!n&&t===0)return 0;let i=!1;for(;;)switch(e){case"ascii":case"\
latin1":case"binary":return t;case"utf8":case"utf-8":return gr(r).length;case"uc\
s2":case"ucs-2":case"utf16le":case"utf-16le":return t*2;case"hex":return t>>>1;case"\
base64":return di(r).length;default:if(i)return n?-1:gr(r).length;e=(""+e).toLowerCase(),
i=!0}}a(ii,"byteLength");d.byteLength=ii;function ma(r,e,t){let n=!1;if((e===void 0||
e<0)&&(e=0),e>this.length||((t===void 0||t>this.length)&&(t=this.length),t<=0)||
(t>>>=0,e>>>=0,t<=e))return"";for(r||(r="utf8");;)switch(r){case"hex":return Ta(
this,e,t);case"utf8":case"utf-8":return oi(this,e,t);case"ascii":return va(this,
e,t);case"latin1":case"binary":return Ca(this,e,t);case"base64":return xa(this,e,
t);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return Ra(this,e,t);default:
if(n)throw new TypeError("Unknown encoding: "+r);r=(r+"").toLowerCase(),n=!0}}a(
ma,"slowToString");d.prototype._isBuffer=!0;function Oe(r,e,t){let n=r[e];r[e]=r[t],
r[t]=n}a(Oe,"swap");d.prototype.swap16=a(function(){let e=this.length;if(e%2!==0)
throw new RangeError("Buffer size must be a multiple of 16-bits");for(let t=0;t<
e;t+=2)Oe(this,t,t+1);return this},"swap16");d.prototype.swap32=a(function(){let e=this.
length;if(e%4!==0)throw new RangeError("Buffer size must be a multiple of 32-bit\
s");for(let t=0;t<e;t+=4)Oe(this,t,t+3),Oe(this,t+1,t+2);return this},"swap32");
d.prototype.swap64=a(function(){let e=this.length;if(e%8!==0)throw new RangeError(
"Buffer size must be a multiple of 64-bits");for(let t=0;t<e;t+=8)Oe(this,t,t+7),
Oe(this,t+1,t+6),Oe(this,t+2,t+5),Oe(this,t+3,t+4);return this},"swap64");d.prototype.
toString=a(function(){let e=this.length;return e===0?"":arguments.length===0?oi(
this,0,e):ma.apply(this,arguments)},"toString");d.prototype.toLocaleString=d.prototype.
toString;d.prototype.equals=a(function(e){if(!d.isBuffer(e))throw new TypeError(
"Argument must be a Buffer");return this===e?!0:d.compare(this,e)===0},"equals");
d.prototype.inspect=a(function(){let e="",t=Ge.INSPECT_MAX_BYTES;return e=this.toString(
"hex",0,t).replace(/(.{2})/g,"$1 ").trim(),this.length>t&&(e+=" ... "),"<Buffer "+
e+">"},"inspect");Zn&&(d.prototype[Zn]=d.prototype.inspect);d.prototype.compare=
a(function(e,t,n,i,s){if(ve(e,Uint8Array)&&(e=d.from(e,e.offset,e.byteLength)),!d.
isBuffer(e))throw new TypeError('The "target" argument must be one of type Buffe\
r or Uint8Array. Received type '+typeof e);if(t===void 0&&(t=0),n===void 0&&(n=e?
e.length:0),i===void 0&&(i=0),s===void 0&&(s=this.length),t<0||n>e.length||i<0||
s>this.length)throw new RangeError("out of range index");if(i>=s&&t>=n)return 0;
if(i>=s)return-1;if(t>=n)return 1;if(t>>>=0,n>>>=0,i>>>=0,s>>>=0,this===e)return 0;
let o=s-i,c=n-t,u=Math.min(o,c),l=this.slice(i,s),h=e.slice(t,n);for(let f=0;f<u;++f)
if(l[f]!==h[f]){o=l[f],c=h[f];break}return o<c?-1:c<o?1:0},"compare");function si(r,e,t,n,i){
if(r.length===0)return-1;if(typeof t=="string"?(n=t,t=0):t>2147483647?t=2147483647:
t<-2147483648&&(t=-2147483648),t=+t,Er(t)&&(t=i?0:r.length-1),t<0&&(t=r.length+t),
t>=r.length){if(i)return-1;t=r.length-1}else if(t<0)if(i)t=0;else return-1;if(typeof e==
"string"&&(e=d.from(e,n)),d.isBuffer(e))return e.length===0?-1:Xn(r,e,t,n,i);if(typeof e==
"number")return e=e&255,typeof Uint8Array.prototype.indexOf=="function"?i?Uint8Array.
prototype.indexOf.call(r,e,t):Uint8Array.prototype.lastIndexOf.call(r,e,t):Xn(r,
[e],t,n,i);throw new TypeError("val must be string, number or Buffer")}a(si,"bid\
irectionalIndexOf");function Xn(r,e,t,n,i){let s=1,o=r.length,c=e.length;if(n!==
void 0&&(n=String(n).toLowerCase(),n==="ucs2"||n==="ucs-2"||n==="utf16le"||n==="\
utf-16le")){if(r.length<2||e.length<2)return-1;s=2,o/=2,c/=2,t/=2}function u(h,f){
return s===1?h[f]:h.readUInt16BE(f*s)}a(u,"read");let l;if(i){let h=-1;for(l=t;l<
o;l++)if(u(r,l)===u(e,h===-1?0:l-h)){if(h===-1&&(h=l),l-h+1===c)return h*s}else h!==
-1&&(l-=l-h),h=-1}else for(t+c>o&&(t=o-c),l=t;l>=0;l--){let h=!0;for(let f=0;f<c;f++)
if(u(r,l+f)!==u(e,f)){h=!1;break}if(h)return l}return-1}a(Xn,"arrayIndexOf");d.prototype.
includes=a(function(e,t,n){return this.indexOf(e,t,n)!==-1},"includes");d.prototype.
indexOf=a(function(e,t,n){return si(this,e,t,n,!0)},"indexOf");d.prototype.lastIndexOf=
a(function(e,t,n){return si(this,e,t,n,!1)},"lastIndexOf");function ga(r,e,t,n){
t=Number(t)||0;let i=r.length-t;n?(n=Number(n),n>i&&(n=i)):n=i;let s=e.length;n>
s/2&&(n=s/2);let o;for(o=0;o<n;++o){let c=parseInt(e.substr(o*2,2),16);if(Er(c))
return o;r[t+o]=c}return o}a(ga,"hexWrite");function wa(r,e,t,n){return Dt(gr(e,
r.length-t),r,t,n)}a(wa,"utf8Write");function Sa(r,e,t,n){return Dt(_a(e),r,t,n)}
a(Sa,"asciiWrite");function ba(r,e,t,n){return Dt(di(e),r,t,n)}a(ba,"base64Write");
function Ea(r,e,t,n){return Dt(Pa(e,r.length-t),r,t,n)}a(Ea,"ucs2Write");d.prototype.
write=a(function(e,t,n,i){if(t===void 0)i="utf8",n=this.length,t=0;else if(n===void 0&&
typeof t=="string")i=t,n=this.length,t=0;else if(isFinite(t))t=t>>>0,isFinite(n)?
(n=n>>>0,i===void 0&&(i="utf8")):(i=n,n=void 0);else throw new Error("Buffer.wri\
te(string, encoding, offset[, length]) is no longer supported");let s=this.length-
t;if((n===void 0||n>s)&&(n=s),e.length>0&&(n<0||t<0)||t>this.length)throw new RangeError(
"Attempt to write outside buffer bounds");i||(i="utf8");let o=!1;for(;;)switch(i){case"\
hex":return ga(this,e,t,n);case"utf8":case"utf-8":return wa(this,e,t,n);case"asc\
ii":case"latin1":case"binary":return Sa(this,e,t,n);case"base64":return ba(this,
e,t,n);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return Ea(this,e,t,n);default:
if(o)throw new TypeError("Unknown encoding: "+i);i=(""+i).toLowerCase(),o=!0}},"\
write");d.prototype.toJSON=a(function(){return{type:"Buffer",data:Array.prototype.
slice.call(this._arr||this,0)}},"toJSON");function xa(r,e,t){return e===0&&t===r.
length?pr.fromByteArray(r):pr.fromByteArray(r.slice(e,t))}a(xa,"base64Slice");function oi(r,e,t){
t=Math.min(r.length,t);let n=[],i=e;for(;i<t;){let s=r[i],o=null,c=s>239?4:s>223?
3:s>191?2:1;if(i+c<=t){let u,l,h,f;switch(c){case 1:s<128&&(o=s);break;case 2:u=
r[i+1],(u&192)===128&&(f=(s&31)<<6|u&63,f>127&&(o=f));break;case 3:u=r[i+1],l=r[i+
2],(u&192)===128&&(l&192)===128&&(f=(s&15)<<12|(u&63)<<6|l&63,f>2047&&(f<55296||
f>57343)&&(o=f));break;case 4:u=r[i+1],l=r[i+2],h=r[i+3],(u&192)===128&&(l&192)===
128&&(h&192)===128&&(f=(s&15)<<18|(u&63)<<12|(l&63)<<6|h&63,f>65535&&f<1114112&&
(o=f))}}o===null?(o=65533,c=1):o>65535&&(o-=65536,n.push(o>>>10&1023|55296),o=56320|
o&1023),n.push(o),i+=c}return Aa(n)}a(oi,"utf8Slice");var ei=4096;function Aa(r){
let e=r.length;if(e<=ei)return String.fromCharCode.apply(String,r);let t="",n=0;
for(;n<e;)t+=String.fromCharCode.apply(String,r.slice(n,n+=ei));return t}a(Aa,"d\
ecodeCodePointsArray");function va(r,e,t){let n="";t=Math.min(r.length,t);for(let i=e;i<
t;++i)n+=String.fromCharCode(r[i]&127);return n}a(va,"asciiSlice");function Ca(r,e,t){
let n="";t=Math.min(r.length,t);for(let i=e;i<t;++i)n+=String.fromCharCode(r[i]);
return n}a(Ca,"latin1Slice");function Ta(r,e,t){let n=r.length;(!e||e<0)&&(e=0),
(!t||t<0||t>n)&&(t=n);let i="";for(let s=e;s<t;++s)i+=Ba[r[s]];return i}a(Ta,"he\
xSlice");function Ra(r,e,t){let n=r.slice(e,t),i="";for(let s=0;s<n.length-1;s+=
2)i+=String.fromCharCode(n[s]+n[s+1]*256);return i}a(Ra,"utf16leSlice");d.prototype.
slice=a(function(e,t){let n=this.length;e=~~e,t=t===void 0?n:~~t,e<0?(e+=n,e<0&&
(e=0)):e>n&&(e=n),t<0?(t+=n,t<0&&(t=0)):t>n&&(t=n),t<e&&(t=e);let i=this.subarray(
e,t);return Object.setPrototypeOf(i,d.prototype),i},"slice");function ie(r,e,t){
if(r%1!==0||r<0)throw new RangeError("offset is not uint");if(r+e>t)throw new RangeError(
"Trying to access beyond buffer length")}a(ie,"checkOffset");d.prototype.readUintLE=
d.prototype.readUIntLE=a(function(e,t,n){e=e>>>0,t=t>>>0,n||ie(e,t,this.length);
let i=this[e],s=1,o=0;for(;++o<t&&(s*=256);)i+=this[e+o]*s;return i},"readUIntLE");
d.prototype.readUintBE=d.prototype.readUIntBE=a(function(e,t,n){e=e>>>0,t=t>>>0,
n||ie(e,t,this.length);let i=this[e+--t],s=1;for(;t>0&&(s*=256);)i+=this[e+--t]*
s;return i},"readUIntBE");d.prototype.readUint8=d.prototype.readUInt8=a(function(e,t){
return e=e>>>0,t||ie(e,1,this.length),this[e]},"readUInt8");d.prototype.readUint16LE=
d.prototype.readUInt16LE=a(function(e,t){return e=e>>>0,t||ie(e,2,this.length),this[e]|
this[e+1]<<8},"readUInt16LE");d.prototype.readUint16BE=d.prototype.readUInt16BE=
a(function(e,t){return e=e>>>0,t||ie(e,2,this.length),this[e]<<8|this[e+1]},"rea\
dUInt16BE");d.prototype.readUint32LE=d.prototype.readUInt32LE=a(function(e,t){return e=
e>>>0,t||ie(e,4,this.length),(this[e]|this[e+1]<<8|this[e+2]<<16)+this[e+3]*16777216},
"readUInt32LE");d.prototype.readUint32BE=d.prototype.readUInt32BE=a(function(e,t){
return e=e>>>0,t||ie(e,4,this.length),this[e]*16777216+(this[e+1]<<16|this[e+2]<<
8|this[e+3])},"readUInt32BE");d.prototype.readBigUInt64LE=Le(a(function(e){e=e>>>
0,Ve(e,"offset");let t=this[e],n=this[e+7];(t===void 0||n===void 0)&&ut(e,this.length-
8);let i=t+this[++e]*2**8+this[++e]*2**16+this[++e]*2**24,s=this[++e]+this[++e]*
2**8+this[++e]*2**16+n*2**24;return BigInt(i)+(BigInt(s)<<BigInt(32))},"readBigU\
Int64LE"));d.prototype.readBigUInt64BE=Le(a(function(e){e=e>>>0,Ve(e,"offset");let t=this[e],
n=this[e+7];(t===void 0||n===void 0)&&ut(e,this.length-8);let i=t*2**24+this[++e]*
2**16+this[++e]*2**8+this[++e],s=this[++e]*2**24+this[++e]*2**16+this[++e]*2**8+
n;return(BigInt(i)<<BigInt(32))+BigInt(s)},"readBigUInt64BE"));d.prototype.readIntLE=
a(function(e,t,n){e=e>>>0,t=t>>>0,n||ie(e,t,this.length);let i=this[e],s=1,o=0;for(;++o<
t&&(s*=256);)i+=this[e+o]*s;return s*=128,i>=s&&(i-=Math.pow(2,8*t)),i},"readInt\
LE");d.prototype.readIntBE=a(function(e,t,n){e=e>>>0,t=t>>>0,n||ie(e,t,this.length);
let i=t,s=1,o=this[e+--i];for(;i>0&&(s*=256);)o+=this[e+--i]*s;return s*=128,o>=
s&&(o-=Math.pow(2,8*t)),o},"readIntBE");d.prototype.readInt8=a(function(e,t){return e=
e>>>0,t||ie(e,1,this.length),this[e]&128?(255-this[e]+1)*-1:this[e]},"readInt8");
d.prototype.readInt16LE=a(function(e,t){e=e>>>0,t||ie(e,2,this.length);let n=this[e]|
this[e+1]<<8;return n&32768?n|4294901760:n},"readInt16LE");d.prototype.readInt16BE=
a(function(e,t){e=e>>>0,t||ie(e,2,this.length);let n=this[e+1]|this[e]<<8;return n&
32768?n|4294901760:n},"readInt16BE");d.prototype.readInt32LE=a(function(e,t){return e=
e>>>0,t||ie(e,4,this.length),this[e]|this[e+1]<<8|this[e+2]<<16|this[e+3]<<24},"\
readInt32LE");d.prototype.readInt32BE=a(function(e,t){return e=e>>>0,t||ie(e,4,this.
length),this[e]<<24|this[e+1]<<16|this[e+2]<<8|this[e+3]},"readInt32BE");d.prototype.
readBigInt64LE=Le(a(function(e){e=e>>>0,Ve(e,"offset");let t=this[e],n=this[e+7];
(t===void 0||n===void 0)&&ut(e,this.length-8);let i=this[e+4]+this[e+5]*2**8+this[e+
6]*2**16+(n<<24);return(BigInt(i)<<BigInt(32))+BigInt(t+this[++e]*2**8+this[++e]*
2**16+this[++e]*2**24)},"readBigInt64LE"));d.prototype.readBigInt64BE=Le(a(function(e){
e=e>>>0,Ve(e,"offset");let t=this[e],n=this[e+7];(t===void 0||n===void 0)&&ut(e,
this.length-8);let i=(t<<24)+this[++e]*2**16+this[++e]*2**8+this[++e];return(BigInt(
i)<<BigInt(32))+BigInt(this[++e]*2**24+this[++e]*2**16+this[++e]*2**8+n)},"readB\
igInt64BE"));d.prototype.readFloatLE=a(function(e,t){return e=e>>>0,t||ie(e,4,this.
length),We.read(this,e,!0,23,4)},"readFloatLE");d.prototype.readFloatBE=a(function(e,t){
return e=e>>>0,t||ie(e,4,this.length),We.read(this,e,!1,23,4)},"readFloatBE");d.
prototype.readDoubleLE=a(function(e,t){return e=e>>>0,t||ie(e,8,this.length),We.
read(this,e,!0,52,8)},"readDoubleLE");d.prototype.readDoubleBE=a(function(e,t){return e=
e>>>0,t||ie(e,8,this.length),We.read(this,e,!1,52,8)},"readDoubleBE");function pe(r,e,t,n,i,s){
if(!d.isBuffer(r))throw new TypeError('"buffer" argument must be a Buffer instan\
ce');if(e>i||e<s)throw new RangeError('"value" argument is out of bounds');if(t+
n>r.length)throw new RangeError("Index out of range")}a(pe,"checkInt");d.prototype.
writeUintLE=d.prototype.writeUIntLE=a(function(e,t,n,i){if(e=+e,t=t>>>0,n=n>>>0,
!i){let c=Math.pow(2,8*n)-1;pe(this,e,t,n,c,0)}let s=1,o=0;for(this[t]=e&255;++o<
n&&(s*=256);)this[t+o]=e/s&255;return t+n},"writeUIntLE");d.prototype.writeUintBE=
d.prototype.writeUIntBE=a(function(e,t,n,i){if(e=+e,t=t>>>0,n=n>>>0,!i){let c=Math.
pow(2,8*n)-1;pe(this,e,t,n,c,0)}let s=n-1,o=1;for(this[t+s]=e&255;--s>=0&&(o*=256);)
this[t+s]=e/o&255;return t+n},"writeUIntBE");d.prototype.writeUint8=d.prototype.
writeUInt8=a(function(e,t,n){return e=+e,t=t>>>0,n||pe(this,e,t,1,255,0),this[t]=
e&255,t+1},"writeUInt8");d.prototype.writeUint16LE=d.prototype.writeUInt16LE=a(function(e,t,n){
return e=+e,t=t>>>0,n||pe(this,e,t,2,65535,0),this[t]=e&255,this[t+1]=e>>>8,t+2},
"writeUInt16LE");d.prototype.writeUint16BE=d.prototype.writeUInt16BE=a(function(e,t,n){
return e=+e,t=t>>>0,n||pe(this,e,t,2,65535,0),this[t]=e>>>8,this[t+1]=e&255,t+2},
"writeUInt16BE");d.prototype.writeUint32LE=d.prototype.writeUInt32LE=a(function(e,t,n){
return e=+e,t=t>>>0,n||pe(this,e,t,4,4294967295,0),this[t+3]=e>>>24,this[t+2]=e>>>
16,this[t+1]=e>>>8,this[t]=e&255,t+4},"writeUInt32LE");d.prototype.writeUint32BE=
d.prototype.writeUInt32BE=a(function(e,t,n){return e=+e,t=t>>>0,n||pe(this,e,t,4,
4294967295,0),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=e&255,t+
4},"writeUInt32BE");function ai(r,e,t,n,i){fi(e,n,i,r,t,7);let s=Number(e&BigInt(
4294967295));r[t++]=s,s=s>>8,r[t++]=s,s=s>>8,r[t++]=s,s=s>>8,r[t++]=s;let o=Number(
e>>BigInt(32)&BigInt(4294967295));return r[t++]=o,o=o>>8,r[t++]=o,o=o>>8,r[t++]=
o,o=o>>8,r[t++]=o,t}a(ai,"wrtBigUInt64LE");function ci(r,e,t,n,i){fi(e,n,i,r,t,7);
let s=Number(e&BigInt(4294967295));r[t+7]=s,s=s>>8,r[t+6]=s,s=s>>8,r[t+5]=s,s=s>>
8,r[t+4]=s;let o=Number(e>>BigInt(32)&BigInt(4294967295));return r[t+3]=o,o=o>>8,
r[t+2]=o,o=o>>8,r[t+1]=o,o=o>>8,r[t]=o,t+8}a(ci,"wrtBigUInt64BE");d.prototype.writeBigUInt64LE=
Le(a(function(e,t=0){return ai(this,e,t,BigInt(0),BigInt("0xffffffffffffffff"))},
"writeBigUInt64LE"));d.prototype.writeBigUInt64BE=Le(a(function(e,t=0){return ci(
this,e,t,BigInt(0),BigInt("0xffffffffffffffff"))},"writeBigUInt64BE"));d.prototype.
writeIntLE=a(function(e,t,n,i){if(e=+e,t=t>>>0,!i){let u=Math.pow(2,8*n-1);pe(this,
e,t,n,u-1,-u)}let s=0,o=1,c=0;for(this[t]=e&255;++s<n&&(o*=256);)e<0&&c===0&&this[t+
s-1]!==0&&(c=1),this[t+s]=(e/o>>0)-c&255;return t+n},"writeIntLE");d.prototype.writeIntBE=
a(function(e,t,n,i){if(e=+e,t=t>>>0,!i){let u=Math.pow(2,8*n-1);pe(this,e,t,n,u-
1,-u)}let s=n-1,o=1,c=0;for(this[t+s]=e&255;--s>=0&&(o*=256);)e<0&&c===0&&this[t+
s+1]!==0&&(c=1),this[t+s]=(e/o>>0)-c&255;return t+n},"writeIntBE");d.prototype.writeInt8=
a(function(e,t,n){return e=+e,t=t>>>0,n||pe(this,e,t,1,127,-128),e<0&&(e=255+e+1),
this[t]=e&255,t+1},"writeInt8");d.prototype.writeInt16LE=a(function(e,t,n){return e=
+e,t=t>>>0,n||pe(this,e,t,2,32767,-32768),this[t]=e&255,this[t+1]=e>>>8,t+2},"wr\
iteInt16LE");d.prototype.writeInt16BE=a(function(e,t,n){return e=+e,t=t>>>0,n||pe(
this,e,t,2,32767,-32768),this[t]=e>>>8,this[t+1]=e&255,t+2},"writeInt16BE");d.prototype.
writeInt32LE=a(function(e,t,n){return e=+e,t=t>>>0,n||pe(this,e,t,4,2147483647,-2147483648),
this[t]=e&255,this[t+1]=e>>>8,this[t+2]=e>>>16,this[t+3]=e>>>24,t+4},"writeInt32\
LE");d.prototype.writeInt32BE=a(function(e,t,n){return e=+e,t=t>>>0,n||pe(this,e,
t,4,2147483647,-2147483648),e<0&&(e=4294967295+e+1),this[t]=e>>>24,this[t+1]=e>>>
16,this[t+2]=e>>>8,this[t+3]=e&255,t+4},"writeInt32BE");d.prototype.writeBigInt64LE=
Le(a(function(e,t=0){return ai(this,e,t,-BigInt("0x8000000000000000"),BigInt("0x\
7fffffffffffffff"))},"writeBigInt64LE"));d.prototype.writeBigInt64BE=Le(a(function(e,t=0){
return ci(this,e,t,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))},
"writeBigInt64BE"));function ui(r,e,t,n,i,s){if(t+n>r.length)throw new RangeError(
"Index out of range");if(t<0)throw new RangeError("Index out of range")}a(ui,"ch\
eckIEEE754");function li(r,e,t,n,i){return e=+e,t=t>>>0,i||ui(r,e,t,4,34028234663852886e22,
-34028234663852886e22),We.write(r,e,t,n,23,4),t+4}a(li,"writeFloat");d.prototype.
writeFloatLE=a(function(e,t,n){return li(this,e,t,!0,n)},"writeFloatLE");d.prototype.
writeFloatBE=a(function(e,t,n){return li(this,e,t,!1,n)},"writeFloatBE");function hi(r,e,t,n,i){
return e=+e,t=t>>>0,i||ui(r,e,t,8,17976931348623157e292,-17976931348623157e292),
We.write(r,e,t,n,52,8),t+8}a(hi,"writeDouble");d.prototype.writeDoubleLE=a(function(e,t,n){
return hi(this,e,t,!0,n)},"writeDoubleLE");d.prototype.writeDoubleBE=a(function(e,t,n){
return hi(this,e,t,!1,n)},"writeDoubleBE");d.prototype.copy=a(function(e,t,n,i){
if(!d.isBuffer(e))throw new TypeError("argument should be a Buffer");if(n||(n=0),
!i&&i!==0&&(i=this.length),t>=e.length&&(t=e.length),t||(t=0),i>0&&i<n&&(i=n),i===
n||e.length===0||this.length===0)return 0;if(t<0)throw new RangeError("targetSta\
rt out of bounds");if(n<0||n>=this.length)throw new RangeError("Index out of ran\
ge");if(i<0)throw new RangeError("sourceEnd out of bounds");i>this.length&&(i=this.
length),e.length-t<i-n&&(i=e.length-t+n);let s=i-n;return this===e&&typeof Uint8Array.
prototype.copyWithin=="function"?this.copyWithin(t,n,i):Uint8Array.prototype.set.
call(e,this.subarray(n,i),t),s},"copy");d.prototype.fill=a(function(e,t,n,i){if(typeof e==
"string"){if(typeof t=="string"?(i=t,t=0,n=this.length):typeof n=="string"&&(i=n,
n=this.length),i!==void 0&&typeof i!="string")throw new TypeError("encoding must\
 be a string");if(typeof i=="string"&&!d.isEncoding(i))throw new TypeError("Unkn\
own encoding: "+i);if(e.length===1){let o=e.charCodeAt(0);(i==="utf8"&&o<128||i===
"latin1")&&(e=o)}}else typeof e=="number"?e=e&255:typeof e=="boolean"&&(e=Number(
e));if(t<0||this.length<t||this.length<n)throw new RangeError("Out of range inde\
x");if(n<=t)return this;t=t>>>0,n=n===void 0?this.length:n>>>0,e||(e=0);let s;if(typeof e==
"number")for(s=t;s<n;++s)this[s]=e;else{let o=d.isBuffer(e)?e:d.from(e,i),c=o.length;
if(c===0)throw new TypeError('The value "'+e+'" is invalid for argument "value"');
for(s=0;s<n-t;++s)this[s+t]=o[s%c]}return this},"fill");var Ke={};function br(r,e,t){
Ke[r]=class extends t{static{a(this,"NodeError")}constructor(){super(),Object.defineProperty(
this,"message",{value:e.apply(this,arguments),writable:!0,configurable:!0}),this.
name=`${this.name} [${r}]`,this.stack,delete this.name}get code(){return r}set code(i){
Object.defineProperty(this,"code",{configurable:!0,enumerable:!0,value:i,writable:!0})}toString(){
return`${this.name} [${r}]: ${this.message}`}}}a(br,"E");br("ERR_BUFFER_OUT_OF_B\
OUNDS",function(r){return r?`${r} is outside of buffer bounds`:"Attempt to acces\
s memory outside buffer bounds"},RangeError);br("ERR_INVALID_ARG_TYPE",function(r,e){
return`The "${r}" argument must be of type number. Received type ${typeof e}`},TypeError);
br("ERR_OUT_OF_RANGE",function(r,e,t){let n=`The value of "${r}" is out of range\
.`,i=t;return Number.isInteger(t)&&Math.abs(t)>2**32?i=ti(String(t)):typeof t=="\
bigint"&&(i=String(t),(t>BigInt(2)**BigInt(32)||t<-(BigInt(2)**BigInt(32)))&&(i=
ti(i)),i+="n"),n+=` It must be ${e}. Received ${i}`,n},RangeError);function ti(r){
let e="",t=r.length,n=r[0]==="-"?1:0;for(;t>=n+4;t-=3)e=`_${r.slice(t-3,t)}${e}`;
return`${r.slice(0,t)}${e}`}a(ti,"addNumericalSeparator");function Ua(r,e,t){Ve(
e,"offset"),(r[e]===void 0||r[e+t]===void 0)&&ut(e,r.length-(t+1))}a(Ua,"checkBo\
unds");function fi(r,e,t,n,i,s){if(r>t||r<e){let o=typeof e=="bigint"?"n":"",c;throw s>
3?e===0||e===BigInt(0)?c=`>= 0${o} and < 2${o} ** ${(s+1)*8}${o}`:c=`>= -(2${o} \
** ${(s+1)*8-1}${o}) and < 2 ** ${(s+1)*8-1}${o}`:c=`>= ${e}${o} and <= ${t}${o}`,
new Ke.ERR_OUT_OF_RANGE("value",c,r)}Ua(n,i,s)}a(fi,"checkIntBI");function Ve(r,e){
if(typeof r!="number")throw new Ke.ERR_INVALID_ARG_TYPE(e,"number",r)}a(Ve,"vali\
dateNumber");function ut(r,e,t){throw Math.floor(r)!==r?(Ve(r,t),new Ke.ERR_OUT_OF_RANGE(
t||"offset","an integer",r)):e<0?new Ke.ERR_BUFFER_OUT_OF_BOUNDS:new Ke.ERR_OUT_OF_RANGE(
t||"offset",`>= ${t?1:0} and <= ${e}`,r)}a(ut,"boundsError");var Ia=/[^+/0-9A-Za-z-_]/g;
function La(r){if(r=r.split("=")[0],r=r.trim().replace(Ia,""),r.length<2)return"";
for(;r.length%4!==0;)r=r+"=";return r}a(La,"base64clean");function gr(r,e){e=e||
1/0;let t,n=r.length,i=null,s=[];for(let o=0;o<n;++o){if(t=r.charCodeAt(o),t>55295&&
t<57344){if(!i){if(t>56319){(e-=3)>-1&&s.push(239,191,189);continue}else if(o+1===
n){(e-=3)>-1&&s.push(239,191,189);continue}i=t;continue}if(t<56320){(e-=3)>-1&&s.
push(239,191,189),i=t;continue}t=(i-55296<<10|t-56320)+65536}else i&&(e-=3)>-1&&
s.push(239,191,189);if(i=null,t<128){if((e-=1)<0)break;s.push(t)}else if(t<2048){
if((e-=2)<0)break;s.push(t>>6|192,t&63|128)}else if(t<65536){if((e-=3)<0)break;s.
push(t>>12|224,t>>6&63|128,t&63|128)}else if(t<1114112){if((e-=4)<0)break;s.push(
t>>18|240,t>>12&63|128,t>>6&63|128,t&63|128)}else throw new Error("Invalid code \
point")}return s}a(gr,"utf8ToBytes");function _a(r){let e=[];for(let t=0;t<r.length;++t)
e.push(r.charCodeAt(t)&255);return e}a(_a,"asciiToBytes");function Pa(r,e){let t,
n,i,s=[];for(let o=0;o<r.length&&!((e-=2)<0);++o)t=r.charCodeAt(o),n=t>>8,i=t%256,
s.push(i),s.push(n);return s}a(Pa,"utf16leToBytes");function di(r){return pr.toByteArray(
La(r))}a(di,"base64ToBytes");function Dt(r,e,t,n){let i;for(i=0;i<n&&!(i+t>=e.length||
i>=r.length);++i)e[i+t]=r[i];return i}a(Dt,"blitBuffer");function ve(r,e){return r instanceof
e||r!=null&&r.constructor!=null&&r.constructor.name!=null&&r.constructor.name===
e.name}a(ve,"isInstance");function Er(r){return r!==r}a(Er,"numberIsNaN");var Ba=function(){
let r="0123456789abcdef",e=new Array(256);for(let t=0;t<16;++t){let n=t*16;for(let i=0;i<
16;++i)e[n+i]=r[t]+r[i]}return e}();function Le(r){return typeof BigInt>"u"?Na:r}
a(Le,"defineBigIntMethod");function Na(){throw new Error("BigInt not supported")}
a(Na,"BufferBigIntNotDefined")});var R,U,I,T,w,b,y=de(()=>{"use strict";R=globalThis,U=globalThis.setImmediate??(r=>setTimeout(
r,0)),I=globalThis.clearImmediate??(r=>clearTimeout(r)),T=globalThis.crypto??{};
T.subtle??={};w=typeof globalThis.Buffer=="function"&&typeof globalThis.Buffer.allocUnsafe==
"function"?globalThis.Buffer:pi().Buffer,b=globalThis.process??{};b.env??={};try{
b.nextTick(()=>{})}catch{let e=Promise.resolve();b.nextTick=e.then.bind(e)}});function lt(r){let e=1779033703,t=3144134277,n=1013904242,i=2773480762,s=1359893119,
o=2600822924,c=528734635,u=1541459225,l=0,h=0,f=[1116352408,1899447441,3049323471,
3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,
1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,
604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,
3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,
1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,
3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,
883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,
2361852424,2428436474,2756734187,3204031479,3329325298],g=a((S,m)=>S>>>m|S<<32-m,
"rrot"),p=new Uint32Array(64),E=new Uint8Array(64),C=a(()=>{for(let P=0,W=0;P<16;P++,
W+=4)p[P]=E[W]<<24|E[W+1]<<16|E[W+2]<<8|E[W+3];for(let P=16;P<64;P++){let W=g(p[P-
15],7)^g(p[P-15],18)^p[P-15]>>>3,oe=g(p[P-2],17)^g(p[P-2],19)^p[P-2]>>>10;p[P]=p[P-
16]+W+p[P-7]+oe|0}let S=e,m=t,x=n,N=i,_=s,D=o,Y=c,te=u;for(let P=0;P<64;P++){let W=g(
_,6)^g(_,11)^g(_,25),oe=_&D^~_&Y,ee=te+W+oe+f[P]+p[P]|0,j=g(S,2)^g(S,13)^g(S,22),
H=S&m^S&x^m&x,Q=j+H|0;te=Y,Y=D,D=_,_=N+ee|0,N=x,x=m,m=S,S=ee+Q|0}e=e+S|0,t=t+m|0,
n=n+x|0,i=i+N|0,s=s+_|0,o=o+D|0,c=c+Y|0,u=u+te|0,h=0},"process"),v=a(S=>{typeof S==
"string"&&(S=new TextEncoder().encode(S));for(let m=0;m<S.length;m++)E[h++]=S[m],
h===64&&C();l+=S.length},"add"),A=a(()=>{if(E[h++]=128,h==64&&C(),h+8>64){for(;h<
64;)E[h++]=0;C()}for(;h<58;)E[h++]=0;let S=l*8;E[h++]=S/1099511627776&255,E[h++]=
S/4294967296&255,E[h++]=S>>>24,E[h++]=S>>>16&255,E[h++]=S>>>8&255,E[h++]=S&255,C();
let m=new Uint8Array(32);return m[0]=e>>>24,m[1]=e>>>16&255,m[2]=e>>>8&255,m[3]=
e&255,m[4]=t>>>24,m[5]=t>>>16&255,m[6]=t>>>8&255,m[7]=t&255,m[8]=n>>>24,m[9]=n>>>
16&255,m[10]=n>>>8&255,m[11]=n&255,m[12]=i>>>24,m[13]=i>>>16&255,m[14]=i>>>8&255,
m[15]=i&255,m[16]=s>>>24,m[17]=s>>>16&255,m[18]=s>>>8&255,m[19]=s&255,m[20]=o>>>
24,m[21]=o>>>16&255,m[22]=o>>>8&255,m[23]=o&255,m[24]=c>>>24,m[25]=c>>>16&255,m[26]=
c>>>8&255,m[27]=c&255,m[28]=u>>>24,m[29]=u>>>16&255,m[30]=u>>>8&255,m[31]=u&255,
m},"digest");return r===void 0?{add:v,digest:A}:(v(r),A())}var yi=de(()=>{"use s\
trict";y();a(lt,"sha256")});var ht,mi=de(()=>{"use strict";y();ht=class r{static{a(this,"Md5")}static hashByteArray(e,t=!1){
return this.onePassHasher.start().appendByteArray(e).end(t)}static hashStr(e,t=!1){
return this.onePassHasher.start().appendStr(e).end(t)}static hashAsciiStr(e,t=!1){
return this.onePassHasher.start().appendAsciiStr(e).end(t)}static stateIdentity=new Int32Array(
[1732584193,-271733879,-1732584194,271733878]);static buffer32Identity=new Int32Array(
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]);static hexChars="0123456789abcdef";static hexOut=[];static onePassHasher=new r;static _hex(e){
let t=r.hexChars,n=r.hexOut,i,s,o,c;for(c=0;c<4;c+=1)for(s=c*8,i=e[c],o=0;o<8;o+=
2)n[s+1+o]=t.charAt(i&15),i>>>=4,n[s+0+o]=t.charAt(i&15),i>>>=4;return n.join("")}static _md5cycle(e,t){
let n=e[0],i=e[1],s=e[2],o=e[3];n+=(i&s|~i&o)+t[0]-680876936|0,n=(n<<7|n>>>25)+i|
0,o+=(n&i|~n&s)+t[1]-389564586|0,o=(o<<12|o>>>20)+n|0,s+=(o&n|~o&i)+t[2]+606105819|
0,s=(s<<17|s>>>15)+o|0,i+=(s&o|~s&n)+t[3]-1044525330|0,i=(i<<22|i>>>10)+s|0,n+=(i&
s|~i&o)+t[4]-176418897|0,n=(n<<7|n>>>25)+i|0,o+=(n&i|~n&s)+t[5]+1200080426|0,o=(o<<
12|o>>>20)+n|0,s+=(o&n|~o&i)+t[6]-1473231341|0,s=(s<<17|s>>>15)+o|0,i+=(s&o|~s&n)+
t[7]-45705983|0,i=(i<<22|i>>>10)+s|0,n+=(i&s|~i&o)+t[8]+1770035416|0,n=(n<<7|n>>>
25)+i|0,o+=(n&i|~n&s)+t[9]-1958414417|0,o=(o<<12|o>>>20)+n|0,s+=(o&n|~o&i)+t[10]-
42063|0,s=(s<<17|s>>>15)+o|0,i+=(s&o|~s&n)+t[11]-1990404162|0,i=(i<<22|i>>>10)+s|
0,n+=(i&s|~i&o)+t[12]+1804603682|0,n=(n<<7|n>>>25)+i|0,o+=(n&i|~n&s)+t[13]-40341101|
0,o=(o<<12|o>>>20)+n|0,s+=(o&n|~o&i)+t[14]-1502002290|0,s=(s<<17|s>>>15)+o|0,i+=
(s&o|~s&n)+t[15]+1236535329|0,i=(i<<22|i>>>10)+s|0,n+=(i&o|s&~o)+t[1]-165796510|
0,n=(n<<5|n>>>27)+i|0,o+=(n&s|i&~s)+t[6]-1069501632|0,o=(o<<9|o>>>23)+n|0,s+=(o&
i|n&~i)+t[11]+643717713|0,s=(s<<14|s>>>18)+o|0,i+=(s&n|o&~n)+t[0]-373897302|0,i=
(i<<20|i>>>12)+s|0,n+=(i&o|s&~o)+t[5]-701558691|0,n=(n<<5|n>>>27)+i|0,o+=(n&s|i&
~s)+t[10]+38016083|0,o=(o<<9|o>>>23)+n|0,s+=(o&i|n&~i)+t[15]-660478335|0,s=(s<<14|
s>>>18)+o|0,i+=(s&n|o&~n)+t[4]-405537848|0,i=(i<<20|i>>>12)+s|0,n+=(i&o|s&~o)+t[9]+
568446438|0,n=(n<<5|n>>>27)+i|0,o+=(n&s|i&~s)+t[14]-1019803690|0,o=(o<<9|o>>>23)+
n|0,s+=(o&i|n&~i)+t[3]-187363961|0,s=(s<<14|s>>>18)+o|0,i+=(s&n|o&~n)+t[8]+1163531501|
0,i=(i<<20|i>>>12)+s|0,n+=(i&o|s&~o)+t[13]-1444681467|0,n=(n<<5|n>>>27)+i|0,o+=(n&
s|i&~s)+t[2]-51403784|0,o=(o<<9|o>>>23)+n|0,s+=(o&i|n&~i)+t[7]+1735328473|0,s=(s<<
14|s>>>18)+o|0,i+=(s&n|o&~n)+t[12]-1926607734|0,i=(i<<20|i>>>12)+s|0,n+=(i^s^o)+
t[5]-378558|0,n=(n<<4|n>>>28)+i|0,o+=(n^i^s)+t[8]-2022574463|0,o=(o<<11|o>>>21)+
n|0,s+=(o^n^i)+t[11]+1839030562|0,s=(s<<16|s>>>16)+o|0,i+=(s^o^n)+t[14]-35309556|
0,i=(i<<23|i>>>9)+s|0,n+=(i^s^o)+t[1]-1530992060|0,n=(n<<4|n>>>28)+i|0,o+=(n^i^s)+
t[4]+1272893353|0,o=(o<<11|o>>>21)+n|0,s+=(o^n^i)+t[7]-155497632|0,s=(s<<16|s>>>
16)+o|0,i+=(s^o^n)+t[10]-1094730640|0,i=(i<<23|i>>>9)+s|0,n+=(i^s^o)+t[13]+681279174|
0,n=(n<<4|n>>>28)+i|0,o+=(n^i^s)+t[0]-358537222|0,o=(o<<11|o>>>21)+n|0,s+=(o^n^i)+
t[3]-722521979|0,s=(s<<16|s>>>16)+o|0,i+=(s^o^n)+t[6]+76029189|0,i=(i<<23|i>>>9)+
s|0,n+=(i^s^o)+t[9]-640364487|0,n=(n<<4|n>>>28)+i|0,o+=(n^i^s)+t[12]-421815835|0,
o=(o<<11|o>>>21)+n|0,s+=(o^n^i)+t[15]+530742520|0,s=(s<<16|s>>>16)+o|0,i+=(s^o^n)+
t[2]-995338651|0,i=(i<<23|i>>>9)+s|0,n+=(s^(i|~o))+t[0]-198630844|0,n=(n<<6|n>>>
26)+i|0,o+=(i^(n|~s))+t[7]+1126891415|0,o=(o<<10|o>>>22)+n|0,s+=(n^(o|~i))+t[14]-
1416354905|0,s=(s<<15|s>>>17)+o|0,i+=(o^(s|~n))+t[5]-57434055|0,i=(i<<21|i>>>11)+
s|0,n+=(s^(i|~o))+t[12]+1700485571|0,n=(n<<6|n>>>26)+i|0,o+=(i^(n|~s))+t[3]-1894986606|
0,o=(o<<10|o>>>22)+n|0,s+=(n^(o|~i))+t[10]-1051523|0,s=(s<<15|s>>>17)+o|0,i+=(o^
(s|~n))+t[1]-2054922799|0,i=(i<<21|i>>>11)+s|0,n+=(s^(i|~o))+t[8]+1873313359|0,n=
(n<<6|n>>>26)+i|0,o+=(i^(n|~s))+t[15]-30611744|0,o=(o<<10|o>>>22)+n|0,s+=(n^(o|~i))+
t[6]-1560198380|0,s=(s<<15|s>>>17)+o|0,i+=(o^(s|~n))+t[13]+1309151649|0,i=(i<<21|
i>>>11)+s|0,n+=(s^(i|~o))+t[4]-145523070|0,n=(n<<6|n>>>26)+i|0,o+=(i^(n|~s))+t[11]-
1120210379|0,o=(o<<10|o>>>22)+n|0,s+=(n^(o|~i))+t[2]+718787259|0,s=(s<<15|s>>>17)+
o|0,i+=(o^(s|~n))+t[9]-343485551|0,i=(i<<21|i>>>11)+s|0,e[0]=n+e[0]|0,e[1]=i+e[1]|
0,e[2]=s+e[2]|0,e[3]=o+e[3]|0}_dataLength=0;_bufferLength=0;_state=new Int32Array(
4);_buffer=new ArrayBuffer(68);_buffer8;_buffer32;constructor(){this._buffer8=new Uint8Array(
this._buffer,0,68),this._buffer32=new Uint32Array(this._buffer,0,17),this.start()}start(){
return this._dataLength=0,this._bufferLength=0,this._state.set(r.stateIdentity),
this}appendStr(e){let t=this._buffer8,n=this._buffer32,i=this._bufferLength,s,o;
for(o=0;o<e.length;o+=1){if(s=e.charCodeAt(o),s<128)t[i++]=s;else if(s<2048)t[i++]=
(s>>>6)+192,t[i++]=s&63|128;else if(s<55296||s>56319)t[i++]=(s>>>12)+224,t[i++]=
s>>>6&63|128,t[i++]=s&63|128;else{if(s=(s-55296)*1024+(e.charCodeAt(++o)-56320)+
65536,s>1114111)throw new Error("Unicode standard supports code points up to U+1\
0FFFF");t[i++]=(s>>>18)+240,t[i++]=s>>>12&63|128,t[i++]=s>>>6&63|128,t[i++]=s&63|
128}i>=64&&(this._dataLength+=64,r._md5cycle(this._state,n),i-=64,n[0]=n[16])}return this.
_bufferLength=i,this}appendAsciiStr(e){let t=this._buffer8,n=this._buffer32,i=this.
_bufferLength,s,o=0;for(;;){for(s=Math.min(e.length-o,64-i);s--;)t[i++]=e.charCodeAt(
o++);if(i<64)break;this._dataLength+=64,r._md5cycle(this._state,n),i=0}return this.
_bufferLength=i,this}appendByteArray(e){let t=this._buffer8,n=this._buffer32,i=this.
_bufferLength,s,o=0;for(;;){for(s=Math.min(e.length-o,64-i);s--;)t[i++]=e[o++];if(i<
64)break;this._dataLength+=64,r._md5cycle(this._state,n),i=0}return this._bufferLength=
i,this}getState(){let e=this._state;return{buffer:String.fromCharCode.apply(null,
Array.from(this._buffer8)),buflen:this._bufferLength,length:this._dataLength,state:[
e[0],e[1],e[2],e[3]]}}setState(e){let t=e.buffer,n=e.state,i=this._state,s;for(this.
_dataLength=e.length,this._bufferLength=e.buflen,i[0]=n[0],i[1]=n[1],i[2]=n[2],i[3]=
n[3],s=0;s<t.length;s+=1)this._buffer8[s]=t.charCodeAt(s)}end(e=!1){let t=this._bufferLength,
n=this._buffer8,i=this._buffer32,s=(t>>2)+1;this._dataLength+=t;let o=this._dataLength*
8;if(n[t]=128,n[t+1]=n[t+2]=n[t+3]=0,i.set(r.buffer32Identity.subarray(s),s),t>55&&
(r._md5cycle(this._state,i),i.set(r.buffer32Identity)),o<=4294967295)i[14]=o;else{
let c=o.toString(16).match(/(.*?)(.{0,8})$/);if(c===null)return;let u=parseInt(c[2],
16),l=parseInt(c[1],16)||0;i[14]=u,i[15]=l}return r._md5cycle(this._state,i),e?this.
_state:r._hex(this._state)}}});var ft={};ge(ft,{createHash:()=>qa,createHmac:()=>ka,randomBytes:()=>Fa});function Fa(r){
return typeof T<"u"&&T.randomBytes!==void 0?(T.webcrypto??T).getRandomValues(w.alloc(
r)):Wn(Ma).randomBytes(r)}function qa(r){if(r==="sha256")return{update:a(function(e){
return{digest:a(function(){return w.from(lt(e))},"digest")}},"update")};if(r==="\
md5")return{update:a(function(e){return{digest:a(function(){return typeof e=="st\
ring"?ht.hashStr(e):ht.hashByteArray(e)},"digest")}},"update")};throw new Error(
`Hash type '${r}' not supported`)}function ka(r,e){if(r!=="sha256")throw new Error(
`Only sha256 is supported (requested: '${r}')`);return{update:a(function(t){return{
digest:a(function(){typeof e=="string"&&(e=new TextEncoder().encode(e)),typeof t==
"string"&&(t=new TextEncoder().encode(t));let n=e.length;if(n>64)e=lt(e);else if(n<
64){let u=new Uint8Array(64);u.set(e),e=u}let i=new Uint8Array(64),s=new Uint8Array(
64);for(let u=0;u<64;u++)i[u]=54^e[u],s[u]=92^e[u];let o=new Uint8Array(t.length+
64);o.set(i,0),o.set(t,64);let c=new Uint8Array(96);return c.set(s,0),c.set(lt(o),
64),w.from(lt(c))},"digest")}},"update")}}var Ma,dt=de(()=>{"use strict";y();yi();
mi();Ma="node:crypto";a(Fa,"randomBytes");a(qa,"createHash");a(ka,"createHmac")});var Ne=B((Jf,Br)=>{"use strict";y();var Ye=typeof Reflect=="object"?Reflect:null,
Di=Ye&&typeof Ye.apply=="function"?Ye.apply:a(function(e,t,n){return Function.prototype.
apply.call(e,t,n)},"ReflectApply"),jt;Ye&&typeof Ye.ownKeys=="function"?jt=Ye.ownKeys:
Object.getOwnPropertySymbols?jt=a(function(e){return Object.getOwnPropertyNames(
e).concat(Object.getOwnPropertySymbols(e))},"ReflectOwnKeys"):jt=a(function(e){return Object.
getOwnPropertyNames(e)},"ReflectOwnKeys");function tu(r){console&&console.warn&&
console.warn(r)}a(tu,"ProcessEmitWarning");var Qi=Number.isNaN||a(function(e){return e!==
e},"NumberIsNaN");function $(){$.init.call(this)}a($,"EventEmitter");Br.exports=
$;Br.exports.once=su;$.EventEmitter=$;$.prototype._events=void 0;$.prototype._eventsCount=
0;$.prototype._maxListeners=void 0;var Oi=10;function Kt(r){if(typeof r!="functi\
on")throw new TypeError('The "listener" argument must be of type Function. Recei\
ved type '+typeof r)}a(Kt,"checkListener");Object.defineProperty($,"defaultMaxLi\
steners",{enumerable:!0,get:a(function(){return Oi},"get"),set:a(function(r){if(typeof r!=
"number"||r<0||Qi(r))throw new RangeError('The value of "defaultMaxListeners" is\
 out of range. It must be a non-negative number. Received '+r+".");Oi=r},"set")});
$.init=function(){(this._events===void 0||this._events===Object.getPrototypeOf(this).
_events)&&(this._events=Object.create(null),this._eventsCount=0),this._maxListeners=
this._maxListeners||void 0};$.prototype.setMaxListeners=a(function(e){if(typeof e!=
"number"||e<0||Qi(e))throw new RangeError('The value of "n" is out of range. It \
must be a non-negative number. Received '+e+".");return this._maxListeners=e,this},
"setMaxListeners");function Hi(r){return r._maxListeners===void 0?$.defaultMaxListeners:
r._maxListeners}a(Hi,"_getMaxListeners");$.prototype.getMaxListeners=a(function(){
return Hi(this)},"getMaxListeners");$.prototype.emit=a(function(e){for(var t=[],
n=1;n<arguments.length;n++)t.push(arguments[n]);var i=e==="error",s=this._events;
if(s!==void 0)i=i&&s.error===void 0;else if(!i)return!1;if(i){var o;if(t.length>
0&&(o=t[0]),o instanceof Error)throw o;var c=new Error("Unhandled error."+(o?" ("+
o.message+")":""));throw c.context=o,c}var u=s[e];if(u===void 0)return!1;if(typeof u==
"function")Di(u,this,t);else for(var l=u.length,h=Vi(u,l),n=0;n<l;++n)Di(h[n],this,
t);return!0},"emit");function $i(r,e,t,n){var i,s,o;if(Kt(t),s=r._events,s===void 0?
(s=r._events=Object.create(null),r._eventsCount=0):(s.newListener!==void 0&&(r.emit(
"newListener",e,t.listener?t.listener:t),s=r._events),o=s[e]),o===void 0)o=s[e]=
t,++r._eventsCount;else if(typeof o=="function"?o=s[e]=n?[t,o]:[o,t]:n?o.unshift(
t):o.push(t),i=Hi(r),i>0&&o.length>i&&!o.warned){o.warned=!0;var c=new Error("Po\
ssible EventEmitter memory leak detected. "+o.length+" "+String(e)+" listeners a\
dded. Use emitter.setMaxListeners() to increase limit");c.name="MaxListenersExce\
ededWarning",c.emitter=r,c.type=e,c.count=o.length,tu(c)}return r}a($i,"_addList\
ener");$.prototype.addListener=a(function(e,t){return $i(this,e,t,!1)},"addListe\
ner");$.prototype.on=$.prototype.addListener;$.prototype.prependListener=a(function(e,t){
return $i(this,e,t,!0)},"prependListener");function ru(){if(!this.fired)return this.
target.removeListener(this.type,this.wrapFn),this.fired=!0,arguments.length===0?
this.listener.call(this.target):this.listener.apply(this.target,arguments)}a(ru,
"onceWrapper");function ji(r,e,t){var n={fired:!1,wrapFn:void 0,target:r,type:e,
listener:t},i=ru.bind(n);return i.listener=t,n.wrapFn=i,i}a(ji,"_onceWrap");$.prototype.
once=a(function(e,t){return Kt(t),this.on(e,ji(this,e,t)),this},"once");$.prototype.
prependOnceListener=a(function(e,t){return Kt(t),this.prependListener(e,ji(this,
e,t)),this},"prependOnceListener");$.prototype.removeListener=a(function(e,t){var n,
i,s,o,c;if(Kt(t),i=this._events,i===void 0)return this;if(n=i[e],n===void 0)return this;
if(n===t||n.listener===t)--this._eventsCount===0?this._events=Object.create(null):
(delete i[e],i.removeListener&&this.emit("removeListener",e,n.listener||t));else if(typeof n!=
"function"){for(s=-1,o=n.length-1;o>=0;o--)if(n[o]===t||n[o].listener===t){c=n[o].
listener,s=o;break}if(s<0)return this;s===0?n.shift():nu(n,s),n.length===1&&(i[e]=
n[0]),i.removeListener!==void 0&&this.emit("removeListener",e,c||t)}return this},
"removeListener");$.prototype.off=$.prototype.removeListener;$.prototype.removeAllListeners=
a(function(e){var t,n,i;if(n=this._events,n===void 0)return this;if(n.removeListener===
void 0)return arguments.length===0?(this._events=Object.create(null),this._eventsCount=
0):n[e]!==void 0&&(--this._eventsCount===0?this._events=Object.create(null):delete n[e]),
this;if(arguments.length===0){var s=Object.keys(n),o;for(i=0;i<s.length;++i)o=s[i],
o!=="removeListener"&&this.removeAllListeners(o);return this.removeAllListeners(
"removeListener"),this._events=Object.create(null),this._eventsCount=0,this}if(t=
n[e],typeof t=="function")this.removeListener(e,t);else if(t!==void 0)for(i=t.length-
1;i>=0;i--)this.removeListener(e,t[i]);return this},"removeAllListeners");function Ki(r,e,t){
var n=r._events;if(n===void 0)return[];var i=n[e];return i===void 0?[]:typeof i==
"function"?t?[i.listener||i]:[i]:t?iu(i):Vi(i,i.length)}a(Ki,"_listeners");$.prototype.
listeners=a(function(e){return Ki(this,e,!0)},"listeners");$.prototype.rawListeners=
a(function(e){return Ki(this,e,!1)},"rawListeners");$.listenerCount=function(r,e){
return typeof r.listenerCount=="function"?r.listenerCount(e):Wi.call(r,e)};$.prototype.
listenerCount=Wi;function Wi(r){var e=this._events;if(e!==void 0){var t=e[r];if(typeof t==
"function")return 1;if(t!==void 0)return t.length}return 0}a(Wi,"listenerCount");
$.prototype.eventNames=a(function(){return this._eventsCount>0?jt(this._events):
[]},"eventNames");function Vi(r,e){for(var t=new Array(e),n=0;n<e;++n)t[n]=r[n];
return t}a(Vi,"arrayClone");function nu(r,e){for(;e+1<r.length;e++)r[e]=r[e+1];r.
pop()}a(nu,"spliceOne");function iu(r){for(var e=new Array(r.length),t=0;t<e.length;++t)
e[t]=r[t].listener||r[t];return e}a(iu,"unwrapListeners");function su(r,e){return new Promise(
function(t,n){function i(o){r.removeListener(e,s),n(o)}a(i,"errorListener");function s(){
typeof r.removeListener=="function"&&r.removeListener("error",i),t([].slice.call(
arguments))}a(s,"resolver"),Gi(r,e,s,{once:!0}),e!=="error"&&ou(r,i,{once:!0})})}
a(su,"once");function ou(r,e,t){typeof r.on=="function"&&Gi(r,"error",e,t)}a(ou,
"addErrorHandlerIfEventEmitter");function Gi(r,e,t,n){if(typeof r.on=="function")
n.once?r.once(e,t):r.on(e,t);else if(typeof r.addEventListener=="function")r.addEventListener(
e,a(function i(s){n.once&&r.removeEventListener(e,i),t(s)},"wrapListener"));else
throw new TypeError('The "emitter" argument must be of type EventEmitter. Receiv\
ed type '+typeof r)}a(Gi,"eventTargetAgnosticAddListener")});var wt={};ge(wt,{default:()=>au});var au,St=de(()=>{"use strict";y();au={}});var Mr=B(zi=>{"use strict";y();zi.parse=function(r,e){return new Nr(r,e).parse()};
var Nr=class r{static{a(this,"ArrayParser")}constructor(e,t){this.source=e,this.
transform=t||cu,this.position=0,this.entries=[],this.recorded=[],this.dimension=
0}isEof(){return this.position>=this.source.length}nextCharacter(){var e=this.source[this.
position++];return e==="\\"?{value:this.source[this.position++],escaped:!0}:{value:e,
escaped:!1}}record(e){this.recorded.push(e)}newEntry(e){var t;(this.recorded.length>
0||e)&&(t=this.recorded.join(""),t==="NULL"&&!e&&(t=null),t!==null&&(t=this.transform(
t)),this.entries.push(t),this.recorded=[])}consumeDimensions(){if(this.source[0]===
"[")for(;!this.isEof();){var e=this.nextCharacter();if(e.value==="=")break}}parse(e){
var t,n,i;for(this.consumeDimensions();!this.isEof();)if(t=this.nextCharacter(),
t.value==="{"&&!i)this.dimension++,this.dimension>1&&(n=new r(this.source.substr(
this.position-1),this.transform),this.entries.push(n.parse(!0)),this.position+=n.
position-2);else if(t.value==="}"&&!i){if(this.dimension--,!this.dimension&&(this.
newEntry(),e))return this.entries}else t.value==='"'&&!t.escaped?(i&&this.newEntry(
!0),i=!i):t.value===","&&!i?this.newEntry():this.record(t.value);if(this.dimension!==
0)throw new Error("array dimension not balanced");return this.entries}};function cu(r){
return r}a(cu,"identity")});var Fr=B((nd,Ji)=>{y();var uu=Mr();Ji.exports={create:a(function(r,e){return{parse:a(
function(){return uu.parse(r,e)},"parse")}},"create")}});var Xi=B((od,Zi)=>{"use strict";y();var lu=/(\d{1,})-(\d{2})-(\d{2}) (\d{2}):(\d{2}):(\d{2})(\.\d{1,})?.*?( BC)?$/,
hu=/^(\d{1,})-(\d{2})-(\d{2})( BC)?$/,fu=/([Z+-])(\d{2})?:?(\d{2})?:?(\d{2})?/,du=/^-?infinity$/;
Zi.exports=a(function(e){if(du.test(e))return Number(e.replace("i","I"));var t=lu.
exec(e);if(!t)return pu(e)||null;var n=!!t[8],i=parseInt(t[1],10);n&&(i=Yi(i));var s=parseInt(
t[2],10)-1,o=t[3],c=parseInt(t[4],10),u=parseInt(t[5],10),l=parseInt(t[6],10),h=t[7];
h=h?1e3*parseFloat(h):0;var f,g=yu(e);return g!=null?(f=new Date(Date.UTC(i,s,o,
c,u,l,h)),qr(i)&&f.setUTCFullYear(i),g!==0&&f.setTime(f.getTime()-g)):(f=new Date(
i,s,o,c,u,l,h),qr(i)&&f.setFullYear(i)),f},"parseDate");function pu(r){var e=hu.
exec(r);if(e){var t=parseInt(e[1],10),n=!!e[4];n&&(t=Yi(t));var i=parseInt(e[2],
10)-1,s=e[3],o=new Date(t,i,s);return qr(t)&&o.setFullYear(t),o}}a(pu,"getDate");
function yu(r){if(r.endsWith("+00"))return 0;var e=fu.exec(r.split(" ")[1]);if(e){
var t=e[1];if(t==="Z")return 0;var n=t==="-"?-1:1,i=parseInt(e[2],10)*3600+parseInt(
e[3]||0,10)*60+parseInt(e[4]||0,10);return i*n*1e3}}a(yu,"timeZoneOffset");function Yi(r){
return-(r-1)}a(Yi,"bcYearToNegativeYear");function qr(r){return r>=0&&r<100}a(qr,
"is0To99")});var ts=B((ud,es)=>{y();es.exports=gu;var mu=Object.prototype.hasOwnProperty;function gu(r){
for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var n in t)mu.call(t,
n)&&(r[n]=t[n])}return r}a(gu,"extend")});var is=B((fd,ns)=>{"use strict";y();var wu=ts();ns.exports=Ze;function Ze(r){if(!(this instanceof
Ze))return new Ze(r);wu(this,Lu(r))}a(Ze,"PostgresInterval");var Su=["seconds","\
minutes","hours","days","months","years"];Ze.prototype.toPostgres=function(){var r=Su.
filter(this.hasOwnProperty,this);return this.milliseconds&&r.indexOf("seconds")<
0&&r.push("seconds"),r.length===0?"0":r.map(function(e){var t=this[e]||0;return e===
"seconds"&&this.milliseconds&&(t=(t+this.milliseconds/1e3).toFixed(6).replace(/\.?0+$/,
"")),t+" "+e},this).join(" ")};var bu={years:"Y",months:"M",days:"D",hours:"H",minutes:"\
M",seconds:"S"},Eu=["years","months","days"],xu=["hours","minutes","seconds"];Ze.
prototype.toISOString=Ze.prototype.toISO=function(){var r=Eu.map(t,this).join(""),
e=xu.map(t,this).join("");return"P"+r+"T"+e;function t(n){var i=this[n]||0;return n===
"seconds"&&this.milliseconds&&(i=(i+this.milliseconds/1e3).toFixed(6).replace(/0+$/,
"")),i+bu[n]}};var kr="([+-]?\\d+)",Au=kr+"\\s+years?",vu=kr+"\\s+mons?",Cu=kr+"\
\\s+days?",Tu="([+-])?([\\d]*):(\\d\\d):(\\d\\d)\\.?(\\d{1,6})?",Ru=new RegExp([
Au,vu,Cu,Tu].map(function(r){return"("+r+")?"}).join("\\s*")),rs={years:2,months:4,
days:6,hours:9,minutes:10,seconds:11,milliseconds:12},Uu=["hours","minutes","sec\
onds","milliseconds"];function Iu(r){var e=r+"000000".slice(r.length);return parseInt(
e,10)/1e3}a(Iu,"parseMilliseconds");function Lu(r){if(!r)return{};var e=Ru.exec(
r),t=e[8]==="-";return Object.keys(rs).reduce(function(n,i){var s=rs[i],o=e[s];return!o||
(o=i==="milliseconds"?Iu(o):parseInt(o,10),!o)||(t&&~Uu.indexOf(i)&&(o*=-1),n[i]=
o),n},{})}a(Lu,"parse")});var os=B((yd,ss)=>{"use strict";y();ss.exports=a(function(e){if(/^\\x/.test(e))return new w(
e.substr(2),"hex");for(var t="",n=0;n<e.length;)if(e[n]!=="\\")t+=e[n],++n;else if(/[0-7]{3}/.
test(e.substr(n+1,3)))t+=String.fromCharCode(parseInt(e.substr(n+1,3),8)),n+=4;else{
for(var i=1;n+i<e.length&&e[n+i]==="\\";)i++;for(var s=0;s<Math.floor(i/2);++s)t+=
"\\";n+=Math.floor(i/2)*2}return new w(t,"binary")},"parseBytea")});var ds=B((wd,fs)=>{y();var bt=Mr(),Et=Fr(),Wt=Xi(),cs=is(),us=os();function Vt(r){
return a(function(t){return t===null?t:r(t)},"nullAllowed")}a(Vt,"allowNull");function ls(r){
return r===null?r:r==="TRUE"||r==="t"||r==="true"||r==="y"||r==="yes"||r==="on"||
r==="1"}a(ls,"parseBool");function _u(r){return r?bt.parse(r,ls):null}a(_u,"pars\
eBoolArray");function Pu(r){return parseInt(r,10)}a(Pu,"parseBaseTenInt");function Dr(r){
return r?bt.parse(r,Vt(Pu)):null}a(Dr,"parseIntegerArray");function Bu(r){return r?
bt.parse(r,Vt(function(e){return hs(e).trim()})):null}a(Bu,"parseBigIntegerArray");
var Nu=a(function(r){if(!r)return null;var e=Et.create(r,function(t){return t!==
null&&(t=$r(t)),t});return e.parse()},"parsePointArray"),Or=a(function(r){if(!r)
return null;var e=Et.create(r,function(t){return t!==null&&(t=parseFloat(t)),t});
return e.parse()},"parseFloatArray"),Se=a(function(r){if(!r)return null;var e=Et.
create(r);return e.parse()},"parseStringArray"),Qr=a(function(r){if(!r)return null;
var e=Et.create(r,function(t){return t!==null&&(t=Wt(t)),t});return e.parse()},"\
parseDateArray"),Mu=a(function(r){if(!r)return null;var e=Et.create(r,function(t){
return t!==null&&(t=cs(t)),t});return e.parse()},"parseIntervalArray"),Fu=a(function(r){
return r?bt.parse(r,Vt(us)):null},"parseByteAArray"),Hr=a(function(r){return parseInt(
r,10)},"parseInteger"),hs=a(function(r){var e=String(r);return/^\d+$/.test(e)?e:
r},"parseBigInteger"),as=a(function(r){return r?bt.parse(r,Vt(JSON.parse)):null},
"parseJsonArray"),$r=a(function(r){return r[0]!=="("?null:(r=r.substring(1,r.length-
1).split(","),{x:parseFloat(r[0]),y:parseFloat(r[1])})},"parsePoint"),qu=a(function(r){
if(r[0]!=="<"&&r[1]!=="(")return null;for(var e="(",t="",n=!1,i=2;i<r.length-1;i++){
if(n||(e+=r[i]),r[i]===")"){n=!0;continue}else if(!n)continue;r[i]!==","&&(t+=r[i])}
var s=$r(e);return s.radius=parseFloat(t),s},"parseCircle"),ku=a(function(r){r(20,
hs),r(21,Hr),r(23,Hr),r(26,Hr),r(700,parseFloat),r(701,parseFloat),r(16,ls),r(1082,
Wt),r(1114,Wt),r(1184,Wt),r(600,$r),r(651,Se),r(718,qu),r(1e3,_u),r(1001,Fu),r(1005,
Dr),r(1007,Dr),r(1028,Dr),r(1016,Bu),r(1017,Nu),r(1021,Or),r(1022,Or),r(1231,Or),
r(1014,Se),r(1015,Se),r(1008,Se),r(1009,Se),r(1040,Se),r(1041,Se),r(1115,Qr),r(1182,
Qr),r(1185,Qr),r(1186,cs),r(1187,Mu),r(17,us),r(114,JSON.parse.bind(JSON)),r(3802,
JSON.parse.bind(JSON)),r(199,as),r(3807,as),r(3907,Se),r(2951,Se),r(791,Se),r(1183,
Se),r(1270,Se)},"init");fs.exports={init:ku}});var ys=B((Ed,ps)=>{"use strict";y();var ye=1e6;function Du(r){var e=r.readInt32BE(
0),t=r.readUInt32BE(4),n="";e<0&&(e=~e+(t===0),t=~t+1>>>0,n="-");var i="",s,o,c,
u,l,h;{if(s=e%ye,e=e/ye>>>0,o=4294967296*s+t,t=o/ye>>>0,c=""+(o-ye*t),t===0&&e===
0)return n+c+i;for(u="",l=6-c.length,h=0;h<l;h++)u+="0";i=u+c+i}{if(s=e%ye,e=e/ye>>>
0,o=4294967296*s+t,t=o/ye>>>0,c=""+(o-ye*t),t===0&&e===0)return n+c+i;for(u="",l=
6-c.length,h=0;h<l;h++)u+="0";i=u+c+i}{if(s=e%ye,e=e/ye>>>0,o=4294967296*s+t,t=o/
ye>>>0,c=""+(o-ye*t),t===0&&e===0)return n+c+i;for(u="",l=6-c.length,h=0;h<l;h++)
u+="0";i=u+c+i}return s=e%ye,o=4294967296*s+t,c=""+o%ye,n+c+i}a(Du,"readInt8");ps.
exports=Du});var bs=B((vd,Ss)=>{y();var Ou=ys(),G=a(function(r,e,t,n,i){t=t||0,n=n||!1,i=i||function(p,E,C){
return p*Math.pow(2,C)+E};var s=t>>3,o=a(function(p){return n?~p&255:p},"inv"),c=255,
u=8-t%8;e<u&&(c=255<<8-e&255,u=e),t&&(c=c>>t%8);var l=0;t%8+e>=8&&(l=i(0,o(r[s])&
c,u));for(var h=e+t>>3,f=s+1;f<h;f++)l=i(l,o(r[f]),8);var g=(e+t)%8;return g>0&&
(l=i(l,o(r[h])>>8-g,g)),l},"parseBits"),ws=a(function(r,e,t){var n=Math.pow(2,t-
1)-1,i=G(r,1),s=G(r,t,1);if(s===0)return 0;var o=1,c=a(function(l,h,f){l===0&&(l=
1);for(var g=1;g<=f;g++)o/=2,(h&1<<f-g)>0&&(l+=o);return l},"parsePrecisionBits"),
u=G(r,e,t+1,!1,c);return s==Math.pow(2,t+1)-1?u===0?i===0?1/0:-1/0:NaN:(i===0?1:
-1)*Math.pow(2,s-n)*u},"parseFloatFromBits"),Qu=a(function(r){return G(r,1)==1?-1*
(G(r,15,1,!0)+1):G(r,15,1)},"parseInt16"),ms=a(function(r){return G(r,1)==1?-1*(G(
r,31,1,!0)+1):G(r,31,1)},"parseInt32"),Hu=a(function(r){return ws(r,23,8)},"pars\
eFloat32"),$u=a(function(r){return ws(r,52,11)},"parseFloat64"),ju=a(function(r){
var e=G(r,16,32);if(e==49152)return NaN;for(var t=Math.pow(1e4,G(r,16,16)),n=0,i=[],
s=G(r,16),o=0;o<s;o++)n+=G(r,16,64+16*o)*t,t/=1e4;var c=Math.pow(10,G(r,16,48));
return(e===0?1:-1)*Math.round(n*c)/c},"parseNumeric"),gs=a(function(r,e){var t=G(
e,1),n=G(e,63,1),i=new Date((t===0?1:-1)*n/1e3+9466848e5);return r||i.setTime(i.
getTime()+i.getTimezoneOffset()*6e4),i.usec=n%1e3,i.getMicroSeconds=function(){return this.
usec},i.setMicroSeconds=function(s){this.usec=s},i.getUTCMicroSeconds=function(){
return this.usec},i},"parseDate"),xt=a(function(r){for(var e=G(r,32),t=G(r,32,32),
n=G(r,32,64),i=96,s=[],o=0;o<e;o++)s[o]=G(r,32,i),i+=32,i+=32;var c=a(function(l){
var h=G(r,32,i);if(i+=32,h==4294967295)return null;var f;if(l==23||l==20)return f=
G(r,h*8,i),i+=h*8,f;if(l==25)return f=r.toString(this.encoding,i>>3,(i+=h<<3)>>3),
f;console.log("ERROR: ElementType not implemented: "+l)},"parseElement"),u=a(function(l,h){
var f=[],g;if(l.length>1){var p=l.shift();for(g=0;g<p;g++)f[g]=u(l,h);l.unshift(
p)}else for(g=0;g<l[0];g++)f[g]=c(h);return f},"parse");return u(s,n)},"parseArr\
ay"),Ku=a(function(r){return r.toString("utf8")},"parseText"),Wu=a(function(r){return r===
null?null:G(r,8)>0},"parseBool"),Vu=a(function(r){r(20,Ou),r(21,Qu),r(23,ms),r(26,
ms),r(1700,ju),r(700,Hu),r(701,$u),r(16,Wu),r(1114,gs.bind(null,!1)),r(1184,gs.bind(
null,!0)),r(1e3,xt),r(1007,xt),r(1016,xt),r(1008,xt),r(1009,xt),r(25,Ku)},"init");
Ss.exports={init:Vu}});var xs=B((Rd,Es)=>{y();Es.exports={BOOL:16,BYTEA:17,CHAR:18,INT8:20,INT2:21,INT4:23,
REGPROC:24,TEXT:25,OID:26,TID:27,XID:28,CID:29,JSON:114,XML:142,PG_NODE_TREE:194,
SMGR:210,PATH:602,POLYGON:604,CIDR:650,FLOAT4:700,FLOAT8:701,ABSTIME:702,RELTIME:703,
TINTERVAL:704,CIRCLE:718,MACADDR8:774,MONEY:790,MACADDR:829,INET:869,ACLITEM:1033,
BPCHAR:1042,VARCHAR:1043,DATE:1082,TIME:1083,TIMESTAMP:1114,TIMESTAMPTZ:1184,INTERVAL:1186,
TIMETZ:1266,BIT:1560,VARBIT:1562,NUMERIC:1700,REFCURSOR:1790,REGPROCEDURE:2202,REGOPER:2203,
REGOPERATOR:2204,REGCLASS:2205,REGTYPE:2206,UUID:2950,TXID_SNAPSHOT:2970,PG_LSN:3220,
PG_NDISTINCT:3361,PG_DEPENDENCIES:3402,TSVECTOR:3614,TSQUERY:3615,GTSVECTOR:3642,
REGCONFIG:3734,REGDICTIONARY:3769,JSONB:3802,REGNAMESPACE:4089,REGROLE:4096}});var Ct=B(vt=>{y();var Gu=ds(),zu=bs(),Ju=Fr(),Yu=xs();vt.getTypeParser=Zu;vt.setTypeParser=
Xu;vt.arrayParser=Ju;vt.builtins=Yu;var At={text:{},binary:{}};function As(r){return String(
r)}a(As,"noParse");function Zu(r,e){return e=e||"text",At[e]&&At[e][r]||As}a(Zu,
"getTypeParser");function Xu(r,e,t){typeof e=="function"&&(t=e,e="text"),At[e][r]=
t}a(Xu,"setTypeParser");Gu.init(function(r,e){At.text[r]=e});zu.init(function(r,e){
At.binary[r]=e})});var Tt=B((Pd,jr)=>{"use strict";y();jr.exports={host:"localhost",user:b.platform===
"win32"?b.env.USERNAME:b.env.USER,database:void 0,password:null,connectionString:void 0,
port:5432,rows:0,binary:!1,max:10,idleTimeoutMillis:3e4,client_encoding:"",ssl:!1,
application_name:void 0,fallback_application_name:void 0,options:void 0,parseInputDatesAsUTC:!1,
statement_timeout:!1,lock_timeout:!1,idle_in_transaction_session_timeout:!1,query_timeout:!1,
connect_timeout:0,keepalives:1,keepalives_idle:0};var Xe=Ct(),el=Xe.getTypeParser(
20,"text"),tl=Xe.getTypeParser(1016,"text");jr.exports.__defineSetter__("parseIn\
t8",function(r){Xe.setTypeParser(20,"text",r?Xe.getTypeParser(23,"text"):el),Xe.
setTypeParser(1016,"text",r?Xe.getTypeParser(1007,"text"):tl)})});var Rt=B((Nd,Cs)=>{"use strict";y();var rl=(dt(),ne(ft)),nl=Tt();function il(r){
var e=r.replace(/\\/g,"\\\\").replace(/"/g,'\\"');return'"'+e+'"'}a(il,"escapeEl\
ement");function vs(r){for(var e="{",t=0;t<r.length;t++)t>0&&(e=e+","),r[t]===null||
typeof r[t]>"u"?e=e+"NULL":Array.isArray(r[t])?e=e+vs(r[t]):r[t]instanceof w?e+=
"\\\\x"+r[t].toString("hex"):e+=il(Gt(r[t]));return e=e+"}",e}a(vs,"arrayString");
var Gt=a(function(r,e){if(r==null)return null;if(r instanceof w)return r;if(ArrayBuffer.
isView(r)){var t=w.from(r.buffer,r.byteOffset,r.byteLength);return t.length===r.
byteLength?t:t.slice(r.byteOffset,r.byteOffset+r.byteLength)}return r instanceof
Date?nl.parseInputDatesAsUTC?al(r):ol(r):Array.isArray(r)?vs(r):typeof r=="objec\
t"?sl(r,e):r.toString()},"prepareValue");function sl(r,e){if(r&&typeof r.toPostgres==
"function"){if(e=e||[],e.indexOf(r)!==-1)throw new Error('circular reference det\
ected while preparing "'+r+'" for query');return e.push(r),Gt(r.toPostgres(Gt),e)}
return JSON.stringify(r)}a(sl,"prepareObject");function le(r,e){for(r=""+r;r.length<
e;)r="0"+r;return r}a(le,"pad");function ol(r){var e=-r.getTimezoneOffset(),t=r.
getFullYear(),n=t<1;n&&(t=Math.abs(t)+1);var i=le(t,4)+"-"+le(r.getMonth()+1,2)+
"-"+le(r.getDate(),2)+"T"+le(r.getHours(),2)+":"+le(r.getMinutes(),2)+":"+le(r.getSeconds(),
2)+"."+le(r.getMilliseconds(),3);return e<0?(i+="-",e*=-1):i+="+",i+=le(Math.floor(
e/60),2)+":"+le(e%60,2),n&&(i+=" BC"),i}a(ol,"dateToString");function al(r){var e=r.
getUTCFullYear(),t=e<1;t&&(e=Math.abs(e)+1);var n=le(e,4)+"-"+le(r.getUTCMonth()+
1,2)+"-"+le(r.getUTCDate(),2)+"T"+le(r.getUTCHours(),2)+":"+le(r.getUTCMinutes(),
2)+":"+le(r.getUTCSeconds(),2)+"."+le(r.getUTCMilliseconds(),3);return n+="+00:0\
0",t&&(n+=" BC"),n}a(al,"dateToStringUTC");function cl(r,e,t){return r=typeof r==
"string"?{text:r}:r,e&&(typeof e=="function"?r.callback=e:r.values=e),t&&(r.callback=
t),r}a(cl,"normalizeQueryConfig");var Kr=a(function(r){return rl.createHash("md5").
update(r,"utf-8").digest("hex")},"md5"),ul=a(function(r,e,t){var n=Kr(e+r),i=Kr(
w.concat([w.from(n),t]));return"md5"+i},"postgresMd5PasswordHash");Cs.exports={prepareValue:a(
function(e){return Gt(e)},"prepareValueWrapper"),normalizeQueryConfig:cl,postgresMd5PasswordHash:ul,
md5:Kr}});var Ls=B((qd,Is)=>{"use strict";y();var Wr=(dt(),ne(ft));function ll(r){if(r.indexOf(
"SCRAM-SHA-256")===-1)throw new Error("SASL: Only mechanism SCRAM-SHA-256 is cur\
rently supported");let e=Wr.randomBytes(18).toString("base64");return{mechanism:"\
SCRAM-SHA-256",clientNonce:e,response:"n,,n=*,r="+e,message:"SASLInitialResponse"}}
a(ll,"startSession");function hl(r,e,t){if(r.message!=="SASLInitialResponse")throw new Error(
"SASL: Last message was not SASLInitialResponse");if(typeof e!="string")throw new Error(
"SASL: SCRAM-SERVER-FIRST-MESSAGE: client password must be a string");if(typeof t!=
"string")throw new Error("SASL: SCRAM-SERVER-FIRST-MESSAGE: serverData must be a\
 string");let n=pl(t);if(n.nonce.startsWith(r.clientNonce)){if(n.nonce.length===
r.clientNonce.length)throw new Error("SASL: SCRAM-SERVER-FIRST-MESSAGE: server n\
once is too short")}else throw new Error("SASL: SCRAM-SERVER-FIRST-MESSAGE: serv\
er nonce does not start with client nonce");var i=w.from(n.salt,"base64"),s=gl(e,
i,n.iteration),o=et(s,"Client Key"),c=ml(o),u="n=*,r="+r.clientNonce,l="r="+n.nonce+
",s="+n.salt+",i="+n.iteration,h="c=biws,r="+n.nonce,f=u+","+l+","+h,g=et(c,f),p=Us(
o,g),E=p.toString("base64"),C=et(s,"Server Key"),v=et(C,f);r.message="SASLRespon\
se",r.serverSignature=v.toString("base64"),r.response=h+",p="+E}a(hl,"continueSe\
ssion");function fl(r,e){if(r.message!=="SASLResponse")throw new Error("SASL: La\
st message was not SASLResponse");if(typeof e!="string")throw new Error("SASL: S\
CRAM-SERVER-FINAL-MESSAGE: serverData must be a string");let{serverSignature:t}=yl(
e);if(t!==r.serverSignature)throw new Error("SASL: SCRAM-SERVER-FINAL-MESSAGE: s\
erver signature does not match")}a(fl,"finalizeSession");function dl(r){if(typeof r!=
"string")throw new TypeError("SASL: text must be a string");return r.split("").map(
(e,t)=>r.charCodeAt(t)).every(e=>e>=33&&e<=43||e>=45&&e<=126)}a(dl,"isPrintableC\
hars");function Ts(r){return/^(?:[a-zA-Z0-9+/]{4})*(?:[a-zA-Z0-9+/]{2}==|[a-zA-Z0-9+/]{3}=)?$/.
test(r)}a(Ts,"isBase64");function Rs(r){if(typeof r!="string")throw new TypeError(
"SASL: attribute pairs text must be a string");return new Map(r.split(",").map(e=>{
if(!/^.=/.test(e))throw new Error("SASL: Invalid attribute pair entry");let t=e[0],
n=e.substring(2);return[t,n]}))}a(Rs,"parseAttributePairs");function pl(r){let e=Rs(
r),t=e.get("r");if(t){if(!dl(t))throw new Error("SASL: SCRAM-SERVER-FIRST-MESSAG\
E: nonce must only contain printable characters")}else throw new Error("SASL: SC\
RAM-SERVER-FIRST-MESSAGE: nonce missing");let n=e.get("s");if(n){if(!Ts(n))throw new Error(
"SASL: SCRAM-SERVER-FIRST-MESSAGE: salt must be base64")}else throw new Error("S\
ASL: SCRAM-SERVER-FIRST-MESSAGE: salt missing");let i=e.get("i");if(i){if(!/^[1-9][0-9]*$/.
test(i))throw new Error("SASL: SCRAM-SERVER-FIRST-MESSAGE: invalid iteration cou\
nt")}else throw new Error("SASL: SCRAM-SERVER-FIRST-MESSAGE: iteration missing");
let s=parseInt(i,10);return{nonce:t,salt:n,iteration:s}}a(pl,"parseServerFirstMe\
ssage");function yl(r){let t=Rs(r).get("v");if(t){if(!Ts(t))throw new Error("SAS\
L: SCRAM-SERVER-FINAL-MESSAGE: server signature must be base64")}else throw new Error(
"SASL: SCRAM-SERVER-FINAL-MESSAGE: server signature is missing");return{serverSignature:t}}
a(yl,"parseServerFinalMessage");function Us(r,e){if(!w.isBuffer(r))throw new TypeError(
"first argument must be a Buffer");if(!w.isBuffer(e))throw new TypeError("second\
 argument must be a Buffer");if(r.length!==e.length)throw new Error("Buffer leng\
ths must match");if(r.length===0)throw new Error("Buffers cannot be empty");return w.
from(r.map((t,n)=>r[n]^e[n]))}a(Us,"xorBuffers");function ml(r){return Wr.createHash(
"sha256").update(r).digest()}a(ml,"sha256");function et(r,e){return Wr.createHmac(
"sha256",r).update(e).digest()}a(et,"hmacSha256");function gl(r,e,t){for(var n=et(
r,w.concat([e,w.from([0,0,0,1])])),i=n,s=0;s<t-1;s++)n=et(r,n),i=Us(i,n);return i}
a(gl,"Hi");Is.exports={startSession:ll,continueSession:hl,finalizeSession:fl}});var Vr={};ge(Vr,{join:()=>wl});function wl(...r){return r.join("/")}var Gr=de(()=>{
"use strict";y();a(wl,"join")});var zr={};ge(zr,{stat:()=>Sl});function Sl(r,e){e(new Error("No filesystem"))}var Jr=de(
()=>{"use strict";y();a(Sl,"stat")});var Yr={};ge(Yr,{default:()=>bl});var bl,Zr=de(()=>{"use strict";y();bl={}});var _s={};ge(_s,{StringDecoder:()=>Xr});var Xr,Ps=de(()=>{"use strict";y();Xr=class{static{
a(this,"StringDecoder")}td;constructor(e){this.td=new TextDecoder(e)}write(e){return this.
td.decode(e,{stream:!0})}end(e){return this.td.decode(e)}}});var Fs=B((Vd,Ms)=>{"use strict";y();var{Transform:El}=(Zr(),ne(Yr)),{StringDecoder:xl}=(Ps(),ne(_s)),
Me=Symbol("last"),zt=Symbol("decoder");function Al(r,e,t){let n;if(this.overflow){
if(n=this[zt].write(r).split(this.matcher),n.length===1)return t();n.shift(),this.
overflow=!1}else this[Me]+=this[zt].write(r),n=this[Me].split(this.matcher);this[Me]=
n.pop();for(let i=0;i<n.length;i++)try{Ns(this,this.mapper(n[i]))}catch(s){return t(
s)}if(this.overflow=this[Me].length>this.maxLength,this.overflow&&!this.skipOverflow){
t(new Error("maximum buffer reached"));return}t()}a(Al,"transform");function vl(r){
if(this[Me]+=this[zt].end(),this[Me])try{Ns(this,this.mapper(this[Me]))}catch(e){
return r(e)}r()}a(vl,"flush");function Ns(r,e){e!==void 0&&r.push(e)}a(Ns,"push");
function Bs(r){return r}a(Bs,"noop");function Cl(r,e,t){switch(r=r||/\r?\n/,e=e||
Bs,t=t||{},arguments.length){case 1:typeof r=="function"?(e=r,r=/\r?\n/):typeof r==
"object"&&!(r instanceof RegExp)&&!r[Symbol.split]&&(t=r,r=/\r?\n/);break;case 2:
typeof r=="function"?(t=e,e=r,r=/\r?\n/):typeof e=="object"&&(t=e,e=Bs)}t=Object.
assign({},t),t.autoDestroy=!0,t.transform=Al,t.flush=vl,t.readableObjectMode=!0;
let n=new El(t);return n[Me]="",n[zt]=new xl("utf8"),n.matcher=r,n.mapper=e,n.maxLength=
t.maxLength,n.skipOverflow=t.skipOverflow||!1,n.overflow=!1,n._destroy=function(i,s){
this._writableState.errorEmitted=!1,s(i)},n}a(Cl,"split");Ms.exports=Cl});var Ds=B((Jd,Ue)=>{"use strict";y();var qs=(Gr(),ne(Vr)),Tl=(Zr(),ne(Yr)).Stream,
Rl=Fs(),ks=(St(),ne(wt)),Ul=5432,Jt=b.platform==="win32",Ut=b.stderr,Il=56,Ll=7,
_l=61440,Pl=32768;function Bl(r){return(r&_l)==Pl}a(Bl,"isRegFile");var tt=["hos\
t","port","database","user","password"],en=tt.length,Nl=tt[en-1];function tn(){var r=Ut instanceof
Tl&&Ut.writable===!0;if(r){var e=Array.prototype.slice.call(arguments).concat(`
`);Ut.write(ks.format.apply(ks,e))}}a(tn,"warn");Object.defineProperty(Ue.exports,
"isWin",{get:a(function(){return Jt},"get"),set:a(function(r){Jt=r},"set")});Ue.
exports.warnTo=function(r){var e=Ut;return Ut=r,e};Ue.exports.getFileName=function(r){
var e=r||b.env,t=e.PGPASSFILE||(Jt?qs.join(e.APPDATA||"./","postgresql","pgpass.\
conf"):qs.join(e.HOME||"./",".pgpass"));return t};Ue.exports.usePgPass=function(r,e){
return Object.prototype.hasOwnProperty.call(b.env,"PGPASSWORD")?!1:Jt?!0:(e=e||"\
<unkn>",Bl(r.mode)?r.mode&(Il|Ll)?(tn('WARNING: password file "%s" has group or \
world access; permissions should be u=rw (0600) or less',e),!1):!0:(tn('WARNING:\
 password file "%s" is not a plain file',e),!1))};var Ml=Ue.exports.match=function(r,e){
return tt.slice(0,-1).reduce(function(t,n,i){return i==1&&Number(r[n]||Ul)===Number(
e[n])?t&&!0:t&&(e[n]==="*"||e[n]===r[n])},!0)};Ue.exports.getPassword=function(r,e,t){
var n,i=e.pipe(Rl());function s(u){var l=Fl(u);l&&ql(l)&&Ml(r,l)&&(n=l[Nl],i.end())}
a(s,"onLine");var o=a(function(){e.destroy(),t(n)},"onEnd"),c=a(function(u){e.destroy(),
tn("WARNING: error on reading file: %s",u),t(void 0)},"onErr");e.on("error",c),i.
on("data",s).on("end",o).on("error",c)};var Fl=Ue.exports.parseLine=function(r){
if(r.length<11||r.match(/^\s+#/))return null;for(var e="",t="",n=0,i=0,s=0,o={},
c=!1,u=a(function(h,f,g){var p=r.substring(f,g);Object.hasOwnProperty.call(b.env,
"PGPASS_NO_DEESCAPE")||(p=p.replace(/\\([:\\])/g,"$1")),o[tt[h]]=p},"addToObj"),
l=0;l<r.length-1;l+=1){if(e=r.charAt(l+1),t=r.charAt(l),c=n==en-1,c){u(n,i);break}
l>=0&&e==":"&&t!=="\\"&&(u(n,i,l+1),i=l+2,n+=1)}return o=Object.keys(o).length===
en?o:null,o},ql=Ue.exports.isValidEntry=function(r){for(var e={0:function(o){return o.
length>0},1:function(o){return o==="*"?!0:(o=Number(o),isFinite(o)&&o>0&&o<9007199254740992&&
Math.floor(o)===o)},2:function(o){return o.length>0},3:function(o){return o.length>
0},4:function(o){return o.length>0}},t=0;t<tt.length;t+=1){var n=e[t],i=r[tt[t]]||
"",s=n(i);if(!s)return!1}return!0}});var Qs=B((ep,rn)=>{"use strict";y();var Xd=(Gr(),ne(Vr)),Os=(Jr(),ne(zr)),Yt=Ds();
rn.exports=function(r,e){var t=Yt.getFileName();Os.stat(t,function(n,i){if(n||!Yt.
usePgPass(i,t))return e(void 0);var s=Os.createReadStream(t);Yt.getPassword(r,s,
e)})};rn.exports.warnTo=Yt.warnTo});var Xt=B((rp,Hs)=>{"use strict";y();var kl=Ct();function Zt(r){this._types=r||kl,
this.text={},this.binary={}}a(Zt,"TypeOverrides");Zt.prototype.getOverrides=function(r){
switch(r){case"text":return this.text;case"binary":return this.binary;default:return{}}};
Zt.prototype.setTypeParser=function(r,e,t){typeof e=="function"&&(t=e,e="text"),
this.getOverrides(e)[r]=t};Zt.prototype.getTypeParser=function(r,e){return e=e||
"text",this.getOverrides(e)[r]||this._types.getTypeParser(r,e)};Hs.exports=Zt});var $s={};ge($s,{default:()=>Dl});var Dl,js=de(()=>{"use strict";y();Dl={}});var Ks={};ge(Ks,{parse:()=>nn});function nn(r,e=!1){let{protocol:t}=new URL(r),n="\
http:"+r.substring(t.length),{username:i,password:s,host:o,hostname:c,port:u,pathname:l,
search:h,searchParams:f,hash:g}=new URL(n);s=decodeURIComponent(s),i=decodeURIComponent(
i),l=decodeURIComponent(l);let p=i+":"+s,E=e?Object.fromEntries(f.entries()):h;return{
href:r,protocol:t,auth:p,username:i,password:s,host:o,hostname:c,port:u,pathname:l,
search:h,query:E,hash:g}}var sn=de(()=>{"use strict";y();a(nn,"parse")});var Vs=B((cp,Ws)=>{"use strict";y();var Ol=(sn(),ne(Ks)),on=(Jr(),ne(zr));function an(r){
if(r.charAt(0)==="/"){var t=r.split(" ");return{host:t[0],database:t[1]}}var e=Ol.
parse(/ |%[^a-f0-9]|%[a-f0-9][^a-f0-9]/i.test(r)?encodeURI(r).replace(/\%25(\d\d)/g,
"%$1"):r,!0),t=e.query;for(var n in t)Array.isArray(t[n])&&(t[n]=t[n][t[n].length-
1]);var i=(e.auth||":").split(":");if(t.user=i[0],t.password=i.splice(1).join(":"),
t.port=e.port,e.protocol=="socket:")return t.host=decodeURI(e.pathname),t.database=
e.query.db,t.client_encoding=e.query.encoding,t;t.host||(t.host=e.hostname);var s=e.
pathname;if(!t.host&&s&&/^%2f/i.test(s)){var o=s.split("/");t.host=decodeURIComponent(
o[0]),s=o.splice(1).join("/")}switch(s&&s.charAt(0)==="/"&&(s=s.slice(1)||null),
t.database=s&&decodeURI(s),(t.ssl==="true"||t.ssl==="1")&&(t.ssl=!0),t.ssl==="0"&&
(t.ssl=!1),(t.sslcert||t.sslkey||t.sslrootcert||t.sslmode)&&(t.ssl={}),t.sslcert&&
(t.ssl.cert=on.readFileSync(t.sslcert).toString()),t.sslkey&&(t.ssl.key=on.readFileSync(
t.sslkey).toString()),t.sslrootcert&&(t.ssl.ca=on.readFileSync(t.sslrootcert).toString()),
t.sslmode){case"disable":{t.ssl=!1;break}case"prefer":case"require":case"verify-\
ca":case"verify-full":break;case"no-verify":{t.ssl.rejectUnauthorized=!1;break}}
return t}a(an,"parse");Ws.exports=an;an.parse=an});var er=B((hp,Js)=>{"use strict";y();var Ql=(js(),ne($s)),zs=Tt(),Gs=Vs().parse,he=a(
function(r,e,t){return t===void 0?t=b.env["PG"+r.toUpperCase()]:t===!1||(t=b.env[t]),
e[r]||t||zs[r]},"val"),Hl=a(function(){switch(b.env.PGSSLMODE){case"disable":return!1;case"\
prefer":case"require":case"verify-ca":case"verify-full":return!0;case"no-verify":
return{rejectUnauthorized:!1}}return zs.ssl},"readSSLConfigFromEnvironment"),rt=a(
function(r){return"'"+(""+r).replace(/\\/g,"\\\\").replace(/'/g,"\\'")+"'"},"quo\
teParamValue"),be=a(function(r,e,t){var n=e[t];n!=null&&r.push(t+"="+rt(n))},"ad\
d"),cn=class{static{a(this,"ConnectionParameters")}constructor(e){e=typeof e=="s\
tring"?Gs(e):e||{},e.connectionString&&(e=Object.assign({},e,Gs(e.connectionString))),
this.user=he("user",e),this.database=he("database",e),this.database===void 0&&(this.
database=this.user),this.port=parseInt(he("port",e),10),this.host=he("host",e),Object.
defineProperty(this,"password",{configurable:!0,enumerable:!1,writable:!0,value:he(
"password",e)}),this.binary=he("binary",e),this.options=he("options",e),this.ssl=
typeof e.ssl>"u"?Hl():e.ssl,typeof this.ssl=="string"&&this.ssl==="true"&&(this.
ssl=!0),this.ssl==="no-verify"&&(this.ssl={rejectUnauthorized:!1}),this.ssl&&this.
ssl.key&&Object.defineProperty(this.ssl,"key",{enumerable:!1}),this.client_encoding=
he("client_encoding",e),this.replication=he("replication",e),this.isDomainSocket=
!(this.host||"").indexOf("/"),this.application_name=he("application_name",e,"PGA\
PPNAME"),this.fallback_application_name=he("fallback_application_name",e,!1),this.
statement_timeout=he("statement_timeout",e,!1),this.lock_timeout=he("lock_timeou\
t",e,!1),this.idle_in_transaction_session_timeout=he("idle_in_transaction_sessio\
n_timeout",e,!1),this.query_timeout=he("query_timeout",e,!1),e.connectionTimeoutMillis===
void 0?this.connect_timeout=b.env.PGCONNECT_TIMEOUT||0:this.connect_timeout=Math.
floor(e.connectionTimeoutMillis/1e3),e.keepAlive===!1?this.keepalives=0:e.keepAlive===
!0&&(this.keepalives=1),typeof e.keepAliveInitialDelayMillis=="number"&&(this.keepalives_idle=
Math.floor(e.keepAliveInitialDelayMillis/1e3))}getLibpqConnectionString(e){var t=[];
be(t,this,"user"),be(t,this,"password"),be(t,this,"port"),be(t,this,"application\
_name"),be(t,this,"fallback_application_name"),be(t,this,"connect_timeout"),be(t,
this,"options");var n=typeof this.ssl=="object"?this.ssl:this.ssl?{sslmode:this.
ssl}:{};if(be(t,n,"sslmode"),be(t,n,"sslca"),be(t,n,"sslkey"),be(t,n,"sslcert"),
be(t,n,"sslrootcert"),this.database&&t.push("dbname="+rt(this.database)),this.replication&&
t.push("replication="+rt(this.replication)),this.host&&t.push("host="+rt(this.host)),
this.isDomainSocket)return e(null,t.join(" "));this.client_encoding&&t.push("cli\
ent_encoding="+rt(this.client_encoding)),Ql.lookup(this.host,function(i,s){return i?
e(i,null):(t.push("hostaddr="+rt(s)),e(null,t.join(" ")))})}};Js.exports=cn});var Xs=B((pp,Zs)=>{"use strict";y();var $l=Ct(),Ys=/^([A-Za-z]+)(?: (\d+))?(?: (\d+))?/,
un=class{static{a(this,"Result")}constructor(e,t){this.command=null,this.rowCount=
null,this.oid=null,this.rows=[],this.fields=[],this._parsers=void 0,this._types=
t,this.RowCtor=null,this.rowAsArray=e==="array",this.rowAsArray&&(this.parseRow=
this._parseRowAsArray)}addCommandComplete(e){var t;e.text?t=Ys.exec(e.text):t=Ys.
exec(e.command),t&&(this.command=t[1],t[3]?(this.oid=parseInt(t[2],10),this.rowCount=
parseInt(t[3],10)):t[2]&&(this.rowCount=parseInt(t[2],10)))}_parseRowAsArray(e){
for(var t=new Array(e.length),n=0,i=e.length;n<i;n++){var s=e[n];s!==null?t[n]=this.
_parsers[n](s):t[n]=null}return t}parseRow(e){for(var t={},n=0,i=e.length;n<i;n++){
var s=e[n],o=this.fields[n].name;s!==null?t[o]=this._parsers[n](s):t[o]=null}return t}addRow(e){
this.rows.push(e)}addFields(e){this.fields=e,this.fields.length&&(this._parsers=
new Array(e.length));for(var t=0;t<e.length;t++){var n=e[t];this._types?this._parsers[t]=
this._types.getTypeParser(n.dataTypeID,n.format||"text"):this._parsers[t]=$l.getTypeParser(
n.dataTypeID,n.format||"text")}}};Zs.exports=un});var no=B((gp,ro)=>{"use strict";y();var{EventEmitter:jl}=Ne(),eo=Xs(),to=Rt(),ln=class extends jl{static{
a(this,"Query")}constructor(e,t,n){super(),e=to.normalizeQueryConfig(e,t,n),this.
text=e.text,this.values=e.values,this.rows=e.rows,this.types=e.types,this.name=e.
name,this.binary=e.binary,this.portal=e.portal||"",this.callback=e.callback,this.
_rowMode=e.rowMode,b.domain&&e.callback&&(this.callback=b.domain.bind(e.callback)),
this._result=new eo(this._rowMode,this.types),this._results=this._result,this.isPreparedStatement=
!1,this._canceledDueToError=!1,this._promise=null}requiresPreparation(){return this.
name||this.rows?!0:!this.text||!this.values?!1:this.values.length>0}_checkForMultirow(){
this._result.command&&(Array.isArray(this._results)||(this._results=[this._result]),
this._result=new eo(this._rowMode,this.types),this._results.push(this._result))}handleRowDescription(e){
this._checkForMultirow(),this._result.addFields(e.fields),this._accumulateRows=this.
callback||!this.listeners("row").length}handleDataRow(e){let t;if(!this._canceledDueToError){
try{t=this._result.parseRow(e.fields)}catch(n){this._canceledDueToError=n;return}
this.emit("row",t,this._result),this._accumulateRows&&this._result.addRow(t)}}handleCommandComplete(e,t){
this._checkForMultirow(),this._result.addCommandComplete(e),this.rows&&t.sync()}handleEmptyQuery(e){
this.rows&&e.sync()}handleError(e,t){if(this._canceledDueToError&&(e=this._canceledDueToError,
this._canceledDueToError=!1),this.callback)return this.callback(e);this.emit("er\
ror",e)}handleReadyForQuery(e){if(this._canceledDueToError)return this.handleError(
this._canceledDueToError,e);if(this.callback)try{this.callback(null,this._results)}catch(t){
b.nextTick(()=>{throw t})}this.emit("end",this._results)}submit(e){if(typeof this.
text!="string"&&typeof this.name!="string")return new Error("A query must have e\
ither text or a name. Supplying neither is unsupported.");let t=e.parsedStatements[this.
name];return this.text&&t&&this.text!==t?new Error(`Prepared statements must be \
unique - '${this.name}' was used for a different statement`):this.values&&!Array.
isArray(this.values)?new Error("Query values must be an array"):(this.requiresPreparation()?
this.prepare(e):e.query(this.text),null)}hasBeenParsed(e){return this.name&&e.parsedStatements[this.
name]}handlePortalSuspended(e){this._getRows(e,this.rows)}_getRows(e,t){e.execute(
{portal:this.portal,rows:t}),t?e.flush():e.sync()}prepare(e){this.isPreparedStatement=
!0,this.hasBeenParsed(e)||e.parse({text:this.text,name:this.name,types:this.types});
try{e.bind({portal:this.portal,statement:this.name,values:this.values,binary:this.
binary,valueMapper:to.prepareValue})}catch(t){this.handleError(t,e);return}e.describe(
{type:"P",name:this.portal||""}),this._getRows(e,this.rows)}handleCopyInResponse(e){
e.sendCopyFail("No source stream defined")}handleCopyData(e,t){}};ro.exports=ln});var oo={};ge(oo,{Socket:()=>Ee,isIP:()=>Kl});function Kl(r){return 0}var so,io,Ee,
tr=de(()=>{"use strict";y();so=je(Ne(),1);a(Kl,"isIP");io=/^[^.]+\./,Ee=class r extends so.EventEmitter{static{
a(this,"Socket")}static defaults={poolQueryViaFetch:!1,fetchEndpoint:a((e,t,n)=>{
let i;return n?.jwtAuth?i=e.replace(io,"apiauth."):i=e.replace(io,"api."),"https\
://"+i+"/sql"},"fetchEndpoint"),fetchConnectionCache:!0,fetchFunction:void 0,webSocketConstructor:void 0,
wsProxy:a(e=>e+"/v2","wsProxy"),useSecureWebSocket:!0,forceDisablePgSSL:!0,coalesceWrites:!0,
pipelineConnect:"password",subtls:void 0,rootCerts:"",pipelineTLS:!1,disableSNI:!1};static opts={};opts={};static get poolQueryViaFetch(){
return r.opts.poolQueryViaFetch??r.defaults.poolQueryViaFetch}static set poolQueryViaFetch(e){
r.opts.poolQueryViaFetch=e}static get fetchEndpoint(){return r.opts.fetchEndpoint??
r.defaults.fetchEndpoint}static set fetchEndpoint(e){r.opts.fetchEndpoint=e}static get fetchConnectionCache(){
return!0}static set fetchConnectionCache(e){console.warn("The `fetchConnectionCa\
che` option is deprecated (now always `true`)")}static get fetchFunction(){return r.
opts.fetchFunction??r.defaults.fetchFunction}static set fetchFunction(e){r.opts.
fetchFunction=e}static get webSocketConstructor(){return r.opts.webSocketConstructor??
r.defaults.webSocketConstructor}static set webSocketConstructor(e){r.opts.webSocketConstructor=
e}get webSocketConstructor(){return this.opts.webSocketConstructor??r.webSocketConstructor}set webSocketConstructor(e){
this.opts.webSocketConstructor=e}static get wsProxy(){return r.opts.wsProxy??r.defaults.
wsProxy}static set wsProxy(e){r.opts.wsProxy=e}get wsProxy(){return this.opts.wsProxy??
r.wsProxy}set wsProxy(e){this.opts.wsProxy=e}static get coalesceWrites(){return r.
opts.coalesceWrites??r.defaults.coalesceWrites}static set coalesceWrites(e){r.opts.
coalesceWrites=e}get coalesceWrites(){return this.opts.coalesceWrites??r.coalesceWrites}set coalesceWrites(e){
this.opts.coalesceWrites=e}static get useSecureWebSocket(){return r.opts.useSecureWebSocket??
r.defaults.useSecureWebSocket}static set useSecureWebSocket(e){r.opts.useSecureWebSocket=
e}get useSecureWebSocket(){return this.opts.useSecureWebSocket??r.useSecureWebSocket}set useSecureWebSocket(e){
this.opts.useSecureWebSocket=e}static get forceDisablePgSSL(){return r.opts.forceDisablePgSSL??
r.defaults.forceDisablePgSSL}static set forceDisablePgSSL(e){r.opts.forceDisablePgSSL=
e}get forceDisablePgSSL(){return this.opts.forceDisablePgSSL??r.forceDisablePgSSL}set forceDisablePgSSL(e){
this.opts.forceDisablePgSSL=e}static get disableSNI(){return r.opts.disableSNI??
r.defaults.disableSNI}static set disableSNI(e){r.opts.disableSNI=e}get disableSNI(){
return this.opts.disableSNI??r.disableSNI}set disableSNI(e){this.opts.disableSNI=
e}static get pipelineConnect(){return r.opts.pipelineConnect??r.defaults.pipelineConnect}static set pipelineConnect(e){
r.opts.pipelineConnect=e}get pipelineConnect(){return this.opts.pipelineConnect??
r.pipelineConnect}set pipelineConnect(e){this.opts.pipelineConnect=e}static get subtls(){
return r.opts.subtls??r.defaults.subtls}static set subtls(e){r.opts.subtls=e}get subtls(){
return this.opts.subtls??r.subtls}set subtls(e){this.opts.subtls=e}static get pipelineTLS(){
return r.opts.pipelineTLS??r.defaults.pipelineTLS}static set pipelineTLS(e){r.opts.
pipelineTLS=e}get pipelineTLS(){return this.opts.pipelineTLS??r.pipelineTLS}set pipelineTLS(e){
this.opts.pipelineTLS=e}static get rootCerts(){return r.opts.rootCerts??r.defaults.
rootCerts}static set rootCerts(e){r.opts.rootCerts=e}get rootCerts(){return this.
opts.rootCerts??r.rootCerts}set rootCerts(e){this.opts.rootCerts=e}wsProxyAddrForHost(e,t){
let n=this.wsProxy;if(n===void 0)throw new Error("No WebSocket proxy is configur\
ed. Please see https://github.com/neondatabase/serverless/blob/main/CONFIG.md#ws\
proxy-string--host-string-port-number--string--string");return typeof n=="functi\
on"?n(e,t):`${n}?address=${e}:${t}`}connecting=!1;pending=!0;writable=!0;encrypted=!1;authorized=!1;destroyed=!1;ws=null;writeBuffer;tlsState=0;tlsRead;tlsWrite;setNoDelay(){
return this}setKeepAlive(){return this}ref(){return this}unref(){return this}connect(e,t,n){
this.connecting=!0,n&&this.once("connect",n);let i=a(()=>{this.connecting=!1,this.
pending=!1,this.emit("connect"),this.emit("ready")},"handleWebSocketOpen"),s=a((c,u=!1)=>{
c.binaryType="arraybuffer",c.addEventListener("error",l=>{this.emit("error",l),this.
emit("close")}),c.addEventListener("message",l=>{if(this.tlsState===0){let h=w.from(
l.data);this.emit("data",h)}}),c.addEventListener("close",()=>{this.emit("close")}),
u?i():c.addEventListener("open",i)},"configureWebSocket"),o;try{o=this.wsProxyAddrForHost(
t,typeof e=="string"?parseInt(e,10):e)}catch(c){this.emit("error",c),this.emit("\
close");return}try{let u=(this.useSecureWebSocket?"wss:":"ws:")+"//"+o;if(this.webSocketConstructor!==
void 0)this.ws=new this.webSocketConstructor(u),s(this.ws);else try{this.ws=new WebSocket(
u),s(this.ws)}catch{this.ws=new __unstable_WebSocket(u),s(this.ws)}}catch(c){let l=(this.
useSecureWebSocket?"https:":"http:")+"//"+o;fetch(l,{headers:{Upgrade:"websocket"}}).
then(h=>{if(this.ws=h.webSocket,this.ws==null)throw c;this.ws.accept(),s(this.ws,
!0)}).catch(h=>{this.emit("error",new Error(`All attempts to open a WebSocket to\
 connect to the database failed. Please refer to https://github.com/neondatabase\
/serverless/blob/main/CONFIG.md#websocketconstructor-typeof-websocket--undefined\
. Details: ${h}`)),this.emit("close")})}}async startTls(e){if(this.subtls===void 0)
throw new Error("For Postgres SSL connections, you must set `neonConfig.subtls` \
to the subtls library. See https://github.com/neondatabase/serverless/blob/main/\
CONFIG.md for more information.");this.tlsState=1;let t=this.subtls.TrustedCert.
databaseFromPEM(this.rootCerts),n=new this.subtls.WebSocketReadQueue(this.ws),i=n.
read.bind(n),s=this.rawWrite.bind(this),[o,c]=await this.subtls.startTls(e,t,i,s,
{useSNI:!this.disableSNI,expectPreData:this.pipelineTLS?new Uint8Array([83]):void 0});
this.tlsRead=o,this.tlsWrite=c,this.tlsState=2,this.encrypted=!0,this.authorized=
!0,this.emit("secureConnection",this),this.tlsReadLoop()}async tlsReadLoop(){for(;;){
let e=await this.tlsRead();if(e===void 0)break;{let t=w.from(e);this.emit("data",
t)}}}rawWrite(e){if(!this.coalesceWrites){this.ws.send(e);return}if(this.writeBuffer===
void 0)this.writeBuffer=e,setTimeout(()=>{this.ws.send(this.writeBuffer),this.writeBuffer=
void 0},0);else{let t=new Uint8Array(this.writeBuffer.length+e.length);t.set(this.
writeBuffer),t.set(e,this.writeBuffer.length),this.writeBuffer=t}}write(e,t="utf\
8",n=i=>{}){return e.length===0?(n(),!0):(typeof e=="string"&&(e=w.from(e,t)),this.
tlsState===0?(this.rawWrite(e),n()):this.tlsState===1?this.once("secureConnectio\
n",()=>{this.write(e,t,n)}):(this.tlsWrite(e),n()),!0)}end(e=w.alloc(0),t="utf8",n=()=>{}){
return this.write(e,t,()=>{this.ws.close(),n()}),this}destroy(){return this.destroyed=
!0,this.end()}}});var Cn=B(L=>{"use strict";y();Object.defineProperty(L,"__esModule",{value:!0});L.
NoticeMessage=L.DataRowMessage=L.CommandCompleteMessage=L.ReadyForQueryMessage=L.
NotificationResponseMessage=L.BackendKeyDataMessage=L.AuthenticationMD5Password=
L.ParameterStatusMessage=L.ParameterDescriptionMessage=L.RowDescriptionMessage=L.
Field=L.CopyResponse=L.CopyDataMessage=L.DatabaseError=L.copyDone=L.emptyQuery=L.
replicationStart=L.portalSuspended=L.noData=L.closeComplete=L.bindComplete=L.parseComplete=
void 0;L.parseComplete={name:"parseComplete",length:5};L.bindComplete={name:"bin\
dComplete",length:5};L.closeComplete={name:"closeComplete",length:5};L.noData={name:"\
noData",length:5};L.portalSuspended={name:"portalSuspended",length:5};L.replicationStart=
{name:"replicationStart",length:4};L.emptyQuery={name:"emptyQuery",length:4};L.copyDone=
{name:"copyDone",length:4};var hn=class extends Error{static{a(this,"DatabaseErr\
or")}constructor(e,t,n){super(e),this.length=t,this.name=n}};L.DatabaseError=hn;
var fn=class{static{a(this,"CopyDataMessage")}constructor(e,t){this.length=e,this.
chunk=t,this.name="copyData"}};L.CopyDataMessage=fn;var dn=class{static{a(this,"\
CopyResponse")}constructor(e,t,n,i){this.length=e,this.name=t,this.binary=n,this.
columnTypes=new Array(i)}};L.CopyResponse=dn;var pn=class{static{a(this,"Field")}constructor(e,t,n,i,s,o,c){
this.name=e,this.tableID=t,this.columnID=n,this.dataTypeID=i,this.dataTypeSize=s,
this.dataTypeModifier=o,this.format=c}};L.Field=pn;var yn=class{static{a(this,"R\
owDescriptionMessage")}constructor(e,t){this.length=e,this.fieldCount=t,this.name=
"rowDescription",this.fields=new Array(this.fieldCount)}};L.RowDescriptionMessage=
yn;var mn=class{static{a(this,"ParameterDescriptionMessage")}constructor(e,t){this.
length=e,this.parameterCount=t,this.name="parameterDescription",this.dataTypeIDs=
new Array(this.parameterCount)}};L.ParameterDescriptionMessage=mn;var gn=class{static{
a(this,"ParameterStatusMessage")}constructor(e,t,n){this.length=e,this.parameterName=
t,this.parameterValue=n,this.name="parameterStatus"}};L.ParameterStatusMessage=gn;
var wn=class{static{a(this,"AuthenticationMD5Password")}constructor(e,t){this.length=
e,this.salt=t,this.name="authenticationMD5Password"}};L.AuthenticationMD5Password=
wn;var Sn=class{static{a(this,"BackendKeyDataMessage")}constructor(e,t,n){this.length=
e,this.processID=t,this.secretKey=n,this.name="backendKeyData"}};L.BackendKeyDataMessage=
Sn;var bn=class{static{a(this,"NotificationResponseMessage")}constructor(e,t,n,i){
this.length=e,this.processId=t,this.channel=n,this.payload=i,this.name="notifica\
tion"}};L.NotificationResponseMessage=bn;var En=class{static{a(this,"ReadyForQue\
ryMessage")}constructor(e,t){this.length=e,this.status=t,this.name="readyForQuer\
y"}};L.ReadyForQueryMessage=En;var xn=class{static{a(this,"CommandCompleteMessag\
e")}constructor(e,t){this.length=e,this.text=t,this.name="commandComplete"}};L.CommandCompleteMessage=
xn;var An=class{static{a(this,"DataRowMessage")}constructor(e,t){this.length=e,this.
fields=t,this.name="dataRow",this.fieldCount=t.length}};L.DataRowMessage=An;var vn=class{static{
a(this,"NoticeMessage")}constructor(e,t){this.length=e,this.message=t,this.name=
"notice"}};L.NoticeMessage=vn});var ao=B(rr=>{"use strict";y();Object.defineProperty(rr,"__esModule",{value:!0});
rr.Writer=void 0;var Tn=class{static{a(this,"Writer")}constructor(e=256){this.size=
e,this.offset=5,this.headerPosition=0,this.buffer=w.allocUnsafe(e)}ensure(e){var t=this.
buffer.length-this.offset;if(t<e){var n=this.buffer,i=n.length+(n.length>>1)+e;this.
buffer=w.allocUnsafe(i),n.copy(this.buffer)}}addInt32(e){return this.ensure(4),this.
buffer[this.offset++]=e>>>24&255,this.buffer[this.offset++]=e>>>16&255,this.buffer[this.
offset++]=e>>>8&255,this.buffer[this.offset++]=e>>>0&255,this}addInt16(e){return this.
ensure(2),this.buffer[this.offset++]=e>>>8&255,this.buffer[this.offset++]=e>>>0&
255,this}addCString(e){if(!e)this.ensure(1);else{var t=w.byteLength(e);this.ensure(
t+1),this.buffer.write(e,this.offset,"utf-8"),this.offset+=t}return this.buffer[this.
offset++]=0,this}addString(e=""){var t=w.byteLength(e);return this.ensure(t),this.
buffer.write(e,this.offset),this.offset+=t,this}add(e){return this.ensure(e.length),
e.copy(this.buffer,this.offset),this.offset+=e.length,this}join(e){if(e){this.buffer[this.
headerPosition]=e;let t=this.offset-(this.headerPosition+1);this.buffer.writeInt32BE(
t,this.headerPosition+1)}return this.buffer.slice(e?0:5,this.offset)}flush(e){var t=this.
join(e);return this.offset=5,this.headerPosition=0,this.buffer=w.allocUnsafe(this.
size),t}};rr.Writer=Tn});var uo=B(ir=>{"use strict";y();Object.defineProperty(ir,"__esModule",{value:!0});
ir.serialize=void 0;var Rn=ao(),z=new Rn.Writer,Wl=a(r=>{z.addInt16(3).addInt16(
0);for(let n of Object.keys(r))z.addCString(n).addCString(r[n]);z.addCString("cl\
ient_encoding").addCString("UTF8");var e=z.addCString("").flush(),t=e.length+4;return new Rn.
Writer().addInt32(t).add(e).flush()},"startup"),Vl=a(()=>{let r=w.allocUnsafe(8);
return r.writeInt32BE(8,0),r.writeInt32BE(80877103,4),r},"requestSsl"),Gl=a(r=>z.
addCString(r).flush(112),"password"),zl=a(function(r,e){return z.addCString(r).addInt32(
w.byteLength(e)).addString(e),z.flush(112)},"sendSASLInitialResponseMessage"),Jl=a(
function(r){return z.addString(r).flush(112)},"sendSCRAMClientFinalMessage"),Yl=a(
r=>z.addCString(r).flush(81),"query"),co=[],Zl=a(r=>{let e=r.name||"";e.length>63&&
(console.error("Warning! Postgres only supports 63 characters for query names."),
console.error("You supplied %s (%s)",e,e.length),console.error("This can cause c\
onflicts and silent errors executing queries"));let t=r.types||co;for(var n=t.length,
i=z.addCString(e).addCString(r.text).addInt16(n),s=0;s<n;s++)i.addInt32(t[s]);return z.
flush(80)},"parse"),nt=new Rn.Writer,Xl=a(function(r,e){for(let t=0;t<r.length;t++){
let n=e?e(r[t],t):r[t];n==null?(z.addInt16(0),nt.addInt32(-1)):n instanceof w?(z.
addInt16(1),nt.addInt32(n.length),nt.add(n)):(z.addInt16(0),nt.addInt32(w.byteLength(
n)),nt.addString(n))}},"writeValues"),eh=a((r={})=>{let e=r.portal||"",t=r.statement||
"",n=r.binary||!1,i=r.values||co,s=i.length;return z.addCString(e).addCString(t),
z.addInt16(s),Xl(i,r.valueMapper),z.addInt16(s),z.add(nt.flush()),z.addInt16(n?1:
0),z.flush(66)},"bind"),th=w.from([69,0,0,0,9,0,0,0,0,0]),rh=a(r=>{if(!r||!r.portal&&
!r.rows)return th;let e=r.portal||"",t=r.rows||0,n=w.byteLength(e),i=4+n+1+4,s=w.
allocUnsafe(1+i);return s[0]=69,s.writeInt32BE(i,1),s.write(e,5,"utf-8"),s[n+5]=
0,s.writeUInt32BE(t,s.length-4),s},"execute"),nh=a((r,e)=>{let t=w.allocUnsafe(16);
return t.writeInt32BE(16,0),t.writeInt16BE(1234,4),t.writeInt16BE(5678,6),t.writeInt32BE(
r,8),t.writeInt32BE(e,12),t},"cancel"),Un=a((r,e)=>{let n=4+w.byteLength(e)+1,i=w.
allocUnsafe(1+n);return i[0]=r,i.writeInt32BE(n,1),i.write(e,5,"utf-8"),i[n]=0,i},
"cstringMessage"),ih=z.addCString("P").flush(68),sh=z.addCString("S").flush(68),
oh=a(r=>r.name?Un(68,`${r.type}${r.name||""}`):r.type==="P"?ih:sh,"describe"),ah=a(
r=>{let e=`${r.type}${r.name||""}`;return Un(67,e)},"close"),ch=a(r=>z.add(r).flush(
100),"copyData"),uh=a(r=>Un(102,r),"copyFail"),nr=a(r=>w.from([r,0,0,0,4]),"code\
OnlyBuffer"),lh=nr(72),hh=nr(83),fh=nr(88),dh=nr(99),ph={startup:Wl,password:Gl,
requestSsl:Vl,sendSASLInitialResponseMessage:zl,sendSCRAMClientFinalMessage:Jl,query:Yl,
parse:Zl,bind:eh,execute:rh,describe:oh,close:ah,flush:a(()=>lh,"flush"),sync:a(
()=>hh,"sync"),end:a(()=>fh,"end"),copyData:ch,copyDone:a(()=>dh,"copyDone"),copyFail:uh,
cancel:nh};ir.serialize=ph});var lo=B(sr=>{"use strict";y();Object.defineProperty(sr,"__esModule",{value:!0});
sr.BufferReader=void 0;var yh=w.allocUnsafe(0),In=class{static{a(this,"BufferRea\
der")}constructor(e=0){this.offset=e,this.buffer=yh,this.encoding="utf-8"}setBuffer(e,t){
this.offset=e,this.buffer=t}int16(){let e=this.buffer.readInt16BE(this.offset);return this.
offset+=2,e}byte(){let e=this.buffer[this.offset];return this.offset++,e}int32(){
let e=this.buffer.readInt32BE(this.offset);return this.offset+=4,e}string(e){let t=this.
buffer.toString(this.encoding,this.offset,this.offset+e);return this.offset+=e,t}cstring(){
let e=this.offset,t=e;for(;this.buffer[t++]!==0;);return this.offset=t,this.buffer.
toString(this.encoding,e,t-1)}bytes(e){let t=this.buffer.slice(this.offset,this.
offset+e);return this.offset+=e,t}};sr.BufferReader=In});var po=B(or=>{"use strict";y();Object.defineProperty(or,"__esModule",{value:!0});
or.Parser=void 0;var J=Cn(),mh=lo(),Ln=1,gh=4,ho=Ln+gh,fo=w.allocUnsafe(0),_n=class{static{
a(this,"Parser")}constructor(e){if(this.buffer=fo,this.bufferLength=0,this.bufferOffset=
0,this.reader=new mh.BufferReader,e?.mode==="binary")throw new Error("Binary mod\
e not supported yet");this.mode=e?.mode||"text"}parse(e,t){this.mergeBuffer(e);let n=this.
bufferOffset+this.bufferLength,i=this.bufferOffset;for(;i+ho<=n;){let s=this.buffer[i],
o=this.buffer.readUInt32BE(i+Ln),c=Ln+o;if(c+i<=n){let u=this.handlePacket(i+ho,
s,o,this.buffer);t(u),i+=c}else break}i===n?(this.buffer=fo,this.bufferLength=0,
this.bufferOffset=0):(this.bufferLength=n-i,this.bufferOffset=i)}mergeBuffer(e){
if(this.bufferLength>0){let t=this.bufferLength+e.byteLength;if(t+this.bufferOffset>
this.buffer.byteLength){let i;if(t<=this.buffer.byteLength&&this.bufferOffset>=this.
bufferLength)i=this.buffer;else{let s=this.buffer.byteLength*2;for(;t>=s;)s*=2;i=
w.allocUnsafe(s)}this.buffer.copy(i,0,this.bufferOffset,this.bufferOffset+this.bufferLength),
this.buffer=i,this.bufferOffset=0}e.copy(this.buffer,this.bufferOffset+this.bufferLength),
this.bufferLength=t}else this.buffer=e,this.bufferOffset=0,this.bufferLength=e.byteLength}handlePacket(e,t,n,i){
switch(t){case 50:return J.bindComplete;case 49:return J.parseComplete;case 51:return J.
closeComplete;case 110:return J.noData;case 115:return J.portalSuspended;case 99:
return J.copyDone;case 87:return J.replicationStart;case 73:return J.emptyQuery;case 68:
return this.parseDataRowMessage(e,n,i);case 67:return this.parseCommandCompleteMessage(
e,n,i);case 90:return this.parseReadyForQueryMessage(e,n,i);case 65:return this.
parseNotificationMessage(e,n,i);case 82:return this.parseAuthenticationResponse(
e,n,i);case 83:return this.parseParameterStatusMessage(e,n,i);case 75:return this.
parseBackendKeyData(e,n,i);case 69:return this.parseErrorMessage(e,n,i,"error");case 78:
return this.parseErrorMessage(e,n,i,"notice");case 84:return this.parseRowDescriptionMessage(
e,n,i);case 116:return this.parseParameterDescriptionMessage(e,n,i);case 71:return this.
parseCopyInMessage(e,n,i);case 72:return this.parseCopyOutMessage(e,n,i);case 100:
return this.parseCopyData(e,n,i);default:return new J.DatabaseError("received in\
valid response: "+t.toString(16),n,"error")}}parseReadyForQueryMessage(e,t,n){this.
reader.setBuffer(e,n);let i=this.reader.string(1);return new J.ReadyForQueryMessage(
t,i)}parseCommandCompleteMessage(e,t,n){this.reader.setBuffer(e,n);let i=this.reader.
cstring();return new J.CommandCompleteMessage(t,i)}parseCopyData(e,t,n){let i=n.
slice(e,e+(t-4));return new J.CopyDataMessage(t,i)}parseCopyInMessage(e,t,n){return this.
parseCopyMessage(e,t,n,"copyInResponse")}parseCopyOutMessage(e,t,n){return this.
parseCopyMessage(e,t,n,"copyOutResponse")}parseCopyMessage(e,t,n,i){this.reader.
setBuffer(e,n);let s=this.reader.byte()!==0,o=this.reader.int16(),c=new J.CopyResponse(
t,i,s,o);for(let u=0;u<o;u++)c.columnTypes[u]=this.reader.int16();return c}parseNotificationMessage(e,t,n){
this.reader.setBuffer(e,n);let i=this.reader.int32(),s=this.reader.cstring(),o=this.
reader.cstring();return new J.NotificationResponseMessage(t,i,s,o)}parseRowDescriptionMessage(e,t,n){
this.reader.setBuffer(e,n);let i=this.reader.int16(),s=new J.RowDescriptionMessage(
t,i);for(let o=0;o<i;o++)s.fields[o]=this.parseField();return s}parseField(){let e=this.
reader.cstring(),t=this.reader.int32(),n=this.reader.int16(),i=this.reader.int32(),
s=this.reader.int16(),o=this.reader.int32(),c=this.reader.int16()===0?"text":"bi\
nary";return new J.Field(e,t,n,i,s,o,c)}parseParameterDescriptionMessage(e,t,n){
this.reader.setBuffer(e,n);let i=this.reader.int16(),s=new J.ParameterDescriptionMessage(
t,i);for(let o=0;o<i;o++)s.dataTypeIDs[o]=this.reader.int32();return s}parseDataRowMessage(e,t,n){
this.reader.setBuffer(e,n);let i=this.reader.int16(),s=new Array(i);for(let o=0;o<
i;o++){let c=this.reader.int32();s[o]=c===-1?null:this.reader.string(c)}return new J.
DataRowMessage(t,s)}parseParameterStatusMessage(e,t,n){this.reader.setBuffer(e,n);
let i=this.reader.cstring(),s=this.reader.cstring();return new J.ParameterStatusMessage(
t,i,s)}parseBackendKeyData(e,t,n){this.reader.setBuffer(e,n);let i=this.reader.int32(),
s=this.reader.int32();return new J.BackendKeyDataMessage(t,i,s)}parseAuthenticationResponse(e,t,n){
this.reader.setBuffer(e,n);let i=this.reader.int32(),s={name:"authenticationOk",
length:t};switch(i){case 0:break;case 3:s.length===8&&(s.name="authenticationCle\
artextPassword");break;case 5:if(s.length===12){s.name="authenticationMD5Passwor\
d";let c=this.reader.bytes(4);return new J.AuthenticationMD5Password(t,c)}break;case 10:
s.name="authenticationSASL",s.mechanisms=[];let o;do o=this.reader.cstring(),o&&
s.mechanisms.push(o);while(o);break;case 11:s.name="authenticationSASLContinue",
s.data=this.reader.string(t-8);break;case 12:s.name="authenticationSASLFinal",s.
data=this.reader.string(t-8);break;default:throw new Error("Unknown authenticati\
onOk message type "+i)}return s}parseErrorMessage(e,t,n,i){this.reader.setBuffer(
e,n);let s={},o=this.reader.string(1);for(;o!=="\0";)s[o]=this.reader.cstring(),
o=this.reader.string(1);let c=s.M,u=i==="notice"?new J.NoticeMessage(t,c):new J.
DatabaseError(c,t,i);return u.severity=s.S,u.code=s.C,u.detail=s.D,u.hint=s.H,u.
position=s.P,u.internalPosition=s.p,u.internalQuery=s.q,u.where=s.W,u.schema=s.s,
u.table=s.t,u.column=s.c,u.dataType=s.d,u.constraint=s.n,u.file=s.F,u.line=s.L,u.
routine=s.R,u}};or.Parser=_n});var Pn=B(Fe=>{"use strict";y();Object.defineProperty(Fe,"__esModule",{value:!0});
Fe.DatabaseError=Fe.serialize=Fe.parse=void 0;var wh=Cn();Object.defineProperty(
Fe,"DatabaseError",{enumerable:!0,get:a(function(){return wh.DatabaseError},"get")});
var Sh=uo();Object.defineProperty(Fe,"serialize",{enumerable:!0,get:a(function(){
return Sh.serialize},"get")});var bh=po();function Eh(r,e){let t=new bh.Parser;return r.
on("data",n=>t.parse(n,e)),new Promise(n=>r.on("end",()=>n()))}a(Eh,"parse");Fe.
parse=Eh});var yo={};ge(yo,{connect:()=>xh});function xh({socket:r,servername:e}){return r.
startTls(e),r}var mo=de(()=>{"use strict";y();a(xh,"connect")});var Nn=B((Hp,So)=>{"use strict";y();var go=(tr(),ne(oo)),Ah=Ne().EventEmitter,{parse:vh,
serialize:se}=Pn(),wo=se.flush(),Ch=se.sync(),Th=se.end(),Bn=class extends Ah{static{
a(this,"Connection")}constructor(e){super(),e=e||{},this.stream=e.stream||new go.
Socket,this._keepAlive=e.keepAlive,this._keepAliveInitialDelayMillis=e.keepAliveInitialDelayMillis,
this.lastBuffer=!1,this.parsedStatements={},this.ssl=e.ssl||!1,this._ending=!1,this.
_emitMessage=!1;var t=this;this.on("newListener",function(n){n==="message"&&(t._emitMessage=
!0)})}connect(e,t){var n=this;this._connecting=!0,this.stream.setNoDelay(!0),this.
stream.connect(e,t),this.stream.once("connect",function(){n._keepAlive&&n.stream.
setKeepAlive(!0,n._keepAliveInitialDelayMillis),n.emit("connect")});let i=a(function(s){
n._ending&&(s.code==="ECONNRESET"||s.code==="EPIPE")||n.emit("error",s)},"report\
StreamError");if(this.stream.on("error",i),this.stream.on("close",function(){n.emit(
"end")}),!this.ssl)return this.attachListeners(this.stream);this.stream.once("da\
ta",function(s){var o=s.toString("utf8");switch(o){case"S":break;case"N":return n.
stream.end(),n.emit("error",new Error("The server does not support SSL connectio\
ns"));default:return n.stream.end(),n.emit("error",new Error("There was an error\
 establishing an SSL connection"))}var c=(mo(),ne(yo));let u={socket:n.stream};n.
ssl!==!0&&(Object.assign(u,n.ssl),"key"in n.ssl&&(u.key=n.ssl.key)),go.isIP(t)===
0&&(u.servername=t);try{n.stream=c.connect(u)}catch(l){return n.emit("error",l)}
n.attachListeners(n.stream),n.stream.on("error",i),n.emit("sslconnect")})}attachListeners(e){
e.on("end",()=>{this.emit("end")}),vh(e,t=>{var n=t.name==="error"?"errorMessage":
t.name;this._emitMessage&&this.emit("message",t),this.emit(n,t)})}requestSsl(){this.
stream.write(se.requestSsl())}startup(e){this.stream.write(se.startup(e))}cancel(e,t){
this._send(se.cancel(e,t))}password(e){this._send(se.password(e))}sendSASLInitialResponseMessage(e,t){
this._send(se.sendSASLInitialResponseMessage(e,t))}sendSCRAMClientFinalMessage(e){
this._send(se.sendSCRAMClientFinalMessage(e))}_send(e){return this.stream.writable?
this.stream.write(e):!1}query(e){this._send(se.query(e))}parse(e){this._send(se.
parse(e))}bind(e){this._send(se.bind(e))}execute(e){this._send(se.execute(e))}flush(){
this.stream.writable&&this.stream.write(wo)}sync(){this._ending=!0,this._send(wo),
this._send(Ch)}ref(){this.stream.ref()}unref(){this.stream.unref()}end(){if(this.
_ending=!0,!this._connecting||!this.stream.writable){this.stream.end();return}return this.
stream.write(Th,()=>{this.stream.end()})}close(e){this._send(se.close(e))}describe(e){
this._send(se.describe(e))}sendCopyFromChunk(e){this._send(se.copyData(e))}endCopyFrom(){
this._send(se.copyDone())}sendCopyFail(e){this._send(se.copyFail(e))}};So.exports=
Bn});var xo=B((Wp,Eo)=>{"use strict";y();var Rh=Ne().EventEmitter,Kp=(St(),ne(wt)),Uh=Rt(),
Mn=Ls(),Ih=Qs(),Lh=Xt(),_h=er(),bo=no(),Ph=Tt(),Bh=Nn(),ar=class extends Rh{static{
a(this,"Client")}constructor(e){super(),this.connectionParameters=new _h(e),this.
user=this.connectionParameters.user,this.database=this.connectionParameters.database,
this.port=this.connectionParameters.port,this.host=this.connectionParameters.host,
Object.defineProperty(this,"password",{configurable:!0,enumerable:!1,writable:!0,
value:this.connectionParameters.password}),this.replication=this.connectionParameters.
replication;var t=e||{};this._Promise=t.Promise||R.Promise,this._types=new Lh(t.
types),this._ending=!1,this._connecting=!1,this._connected=!1,this._connectionError=
!1,this._queryable=!0,this.connection=t.connection||new Bh({stream:t.stream,ssl:this.
connectionParameters.ssl,keepAlive:t.keepAlive||!1,keepAliveInitialDelayMillis:t.
keepAliveInitialDelayMillis||0,encoding:this.connectionParameters.client_encoding||
"utf8"}),this.queryQueue=[],this.binary=t.binary||Ph.binary,this.processID=null,
this.secretKey=null,this.ssl=this.connectionParameters.ssl||!1,this.ssl&&this.ssl.
key&&Object.defineProperty(this.ssl,"key",{enumerable:!1}),this._connectionTimeoutMillis=
t.connectionTimeoutMillis||0}_errorAllQueries(e){let t=a(n=>{b.nextTick(()=>{n.handleError(
e,this.connection)})},"enqueueError");this.activeQuery&&(t(this.activeQuery),this.
activeQuery=null),this.queryQueue.forEach(t),this.queryQueue.length=0}_connect(e){
var t=this,n=this.connection;if(this._connectionCallback=e,this._connecting||this.
_connected){let i=new Error("Client has already been connected. You cannot reuse\
 a client.");b.nextTick(()=>{e(i)});return}this._connecting=!0,this.connectionTimeoutHandle,
this._connectionTimeoutMillis>0&&(this.connectionTimeoutHandle=setTimeout(()=>{n.
_ending=!0,n.stream.destroy(new Error("timeout expired"))},this._connectionTimeoutMillis)),
this.host&&this.host.indexOf("/")===0?n.connect(this.host+"/.s.PGSQL."+this.port):
n.connect(this.port,this.host),n.on("connect",function(){t.ssl?n.requestSsl():n.
startup(t.getStartupConf())}),n.on("sslconnect",function(){n.startup(t.getStartupConf())}),
this._attachListeners(n),n.once("end",()=>{let i=this._ending?new Error("Connect\
ion terminated"):new Error("Connection terminated unexpectedly");clearTimeout(this.
connectionTimeoutHandle),this._errorAllQueries(i),this._ending||(this._connecting&&
!this._connectionError?this._connectionCallback?this._connectionCallback(i):this.
_handleErrorEvent(i):this._connectionError||this._handleErrorEvent(i)),b.nextTick(
()=>{this.emit("end")})})}connect(e){if(e){this._connect(e);return}return new this.
_Promise((t,n)=>{this._connect(i=>{i?n(i):t()})})}_attachListeners(e){e.on("auth\
enticationCleartextPassword",this._handleAuthCleartextPassword.bind(this)),e.on(
"authenticationMD5Password",this._handleAuthMD5Password.bind(this)),e.on("authen\
ticationSASL",this._handleAuthSASL.bind(this)),e.on("authenticationSASLContinue",
this._handleAuthSASLContinue.bind(this)),e.on("authenticationSASLFinal",this._handleAuthSASLFinal.
bind(this)),e.on("backendKeyData",this._handleBackendKeyData.bind(this)),e.on("e\
rror",this._handleErrorEvent.bind(this)),e.on("errorMessage",this._handleErrorMessage.
bind(this)),e.on("readyForQuery",this._handleReadyForQuery.bind(this)),e.on("not\
ice",this._handleNotice.bind(this)),e.on("rowDescription",this._handleRowDescription.
bind(this)),e.on("dataRow",this._handleDataRow.bind(this)),e.on("portalSuspended",
this._handlePortalSuspended.bind(this)),e.on("emptyQuery",this._handleEmptyQuery.
bind(this)),e.on("commandComplete",this._handleCommandComplete.bind(this)),e.on(
"parseComplete",this._handleParseComplete.bind(this)),e.on("copyInResponse",this.
_handleCopyInResponse.bind(this)),e.on("copyData",this._handleCopyData.bind(this)),
e.on("notification",this._handleNotification.bind(this))}_checkPgPass(e){let t=this.
connection;typeof this.password=="function"?this._Promise.resolve().then(()=>this.
password()).then(n=>{if(n!==void 0){if(typeof n!="string"){t.emit("error",new TypeError(
"Password must be a string"));return}this.connectionParameters.password=this.password=
n}else this.connectionParameters.password=this.password=null;e()}).catch(n=>{t.emit(
"error",n)}):this.password!==null?e():Ih(this.connectionParameters,n=>{n!==void 0&&
(this.connectionParameters.password=this.password=n),e()})}_handleAuthCleartextPassword(e){
this._checkPgPass(()=>{this.connection.password(this.password)})}_handleAuthMD5Password(e){
this._checkPgPass(()=>{let t=Uh.postgresMd5PasswordHash(this.user,this.password,
e.salt);this.connection.password(t)})}_handleAuthSASL(e){this._checkPgPass(()=>{
this.saslSession=Mn.startSession(e.mechanisms),this.connection.sendSASLInitialResponseMessage(
this.saslSession.mechanism,this.saslSession.response)})}_handleAuthSASLContinue(e){
Mn.continueSession(this.saslSession,this.password,e.data),this.connection.sendSCRAMClientFinalMessage(
this.saslSession.response)}_handleAuthSASLFinal(e){Mn.finalizeSession(this.saslSession,
e.data),this.saslSession=null}_handleBackendKeyData(e){this.processID=e.processID,
this.secretKey=e.secretKey}_handleReadyForQuery(e){this._connecting&&(this._connecting=
!1,this._connected=!0,clearTimeout(this.connectionTimeoutHandle),this._connectionCallback&&
(this._connectionCallback(null,this),this._connectionCallback=null),this.emit("c\
onnect"));let{activeQuery:t}=this;this.activeQuery=null,this.readyForQuery=!0,t&&
t.handleReadyForQuery(this.connection),this._pulseQueryQueue()}_handleErrorWhileConnecting(e){
if(!this._connectionError){if(this._connectionError=!0,clearTimeout(this.connectionTimeoutHandle),
this._connectionCallback)return this._connectionCallback(e);this.emit("error",e)}}_handleErrorEvent(e){
if(this._connecting)return this._handleErrorWhileConnecting(e);this._queryable=!1,
this._errorAllQueries(e),this.emit("error",e)}_handleErrorMessage(e){if(this._connecting)
return this._handleErrorWhileConnecting(e);let t=this.activeQuery;if(!t){this._handleErrorEvent(
e);return}this.activeQuery=null,t.handleError(e,this.connection)}_handleRowDescription(e){
this.activeQuery.handleRowDescription(e)}_handleDataRow(e){this.activeQuery.handleDataRow(
e)}_handlePortalSuspended(e){this.activeQuery.handlePortalSuspended(this.connection)}_handleEmptyQuery(e){
this.activeQuery.handleEmptyQuery(this.connection)}_handleCommandComplete(e){this.
activeQuery.handleCommandComplete(e,this.connection)}_handleParseComplete(e){this.
activeQuery.name&&(this.connection.parsedStatements[this.activeQuery.name]=this.
activeQuery.text)}_handleCopyInResponse(e){this.activeQuery.handleCopyInResponse(
this.connection)}_handleCopyData(e){this.activeQuery.handleCopyData(e,this.connection)}_handleNotification(e){
this.emit("notification",e)}_handleNotice(e){this.emit("notice",e)}getStartupConf(){
var e=this.connectionParameters,t={user:e.user,database:e.database},n=e.application_name||
e.fallback_application_name;return n&&(t.application_name=n),e.replication&&(t.replication=
""+e.replication),e.statement_timeout&&(t.statement_timeout=String(parseInt(e.statement_timeout,
10))),e.lock_timeout&&(t.lock_timeout=String(parseInt(e.lock_timeout,10))),e.idle_in_transaction_session_timeout&&
(t.idle_in_transaction_session_timeout=String(parseInt(e.idle_in_transaction_session_timeout,
10))),e.options&&(t.options=e.options),t}cancel(e,t){if(e.activeQuery===t){var n=this.
connection;this.host&&this.host.indexOf("/")===0?n.connect(this.host+"/.s.PGSQL."+
this.port):n.connect(this.port,this.host),n.on("connect",function(){n.cancel(e.processID,
e.secretKey)})}else e.queryQueue.indexOf(t)!==-1&&e.queryQueue.splice(e.queryQueue.
indexOf(t),1)}setTypeParser(e,t,n){return this._types.setTypeParser(e,t,n)}getTypeParser(e,t){
return this._types.getTypeParser(e,t)}escapeIdentifier(e){return'"'+e.replace(/"/g,
'""')+'"'}escapeLiteral(e){for(var t=!1,n="'",i=0;i<e.length;i++){var s=e[i];s===
"'"?n+=s+s:s==="\\"?(n+=s+s,t=!0):n+=s}return n+="'",t===!0&&(n=" E"+n),n}_pulseQueryQueue(){
if(this.readyForQuery===!0)if(this.activeQuery=this.queryQueue.shift(),this.activeQuery){
this.readyForQuery=!1,this.hasExecuted=!0;let e=this.activeQuery.submit(this.connection);
e&&b.nextTick(()=>{this.activeQuery.handleError(e,this.connection),this.readyForQuery=
!0,this._pulseQueryQueue()})}else this.hasExecuted&&(this.activeQuery=null,this.
emit("drain"))}query(e,t,n){var i,s,o,c,u;if(e==null)throw new TypeError("Client\
 was passed a null or undefined query");return typeof e.submit=="function"?(o=e.
query_timeout||this.connectionParameters.query_timeout,s=i=e,typeof t=="function"&&
(i.callback=i.callback||t)):(o=this.connectionParameters.query_timeout,i=new bo(
e,t,n),i.callback||(s=new this._Promise((l,h)=>{i.callback=(f,g)=>f?h(f):l(g)}))),
o&&(u=i.callback,c=setTimeout(()=>{var l=new Error("Query read timeout");b.nextTick(
()=>{i.handleError(l,this.connection)}),u(l),i.callback=()=>{};var h=this.queryQueue.
indexOf(i);h>-1&&this.queryQueue.splice(h,1),this._pulseQueryQueue()},o),i.callback=
(l,h)=>{clearTimeout(c),u(l,h)}),this.binary&&!i.binary&&(i.binary=!0),i._result&&
!i._result._types&&(i._result._types=this._types),this._queryable?this._ending?(b.
nextTick(()=>{i.handleError(new Error("Client was closed and is not queryable"),
this.connection)}),s):(this.queryQueue.push(i),this._pulseQueryQueue(),s):(b.nextTick(
()=>{i.handleError(new Error("Client has encountered a connection error and is n\
ot queryable"),this.connection)}),s)}ref(){this.connection.ref()}unref(){this.connection.
unref()}end(e){if(this._ending=!0,!this.connection._connecting)if(e)e();else return this.
_Promise.resolve();if(this.activeQuery||!this._queryable?this.connection.stream.
destroy():this.connection.end(),e)this.connection.once("end",e);else return new this.
_Promise(t=>{this.connection.once("end",t)})}};ar.Query=bo;Eo.exports=ar});var To=B((zp,Co)=>{"use strict";y();var Nh=Ne().EventEmitter,Ao=a(function(){},"\
NOOP"),vo=a((r,e)=>{let t=r.findIndex(e);return t===-1?void 0:r.splice(t,1)[0]},
"removeWhere"),Fn=class{static{a(this,"IdleItem")}constructor(e,t,n){this.client=
e,this.idleListener=t,this.timeoutId=n}},it=class{static{a(this,"PendingItem")}constructor(e){
this.callback=e}};function Mh(){throw new Error("Release called on client which \
has already been released to the pool.")}a(Mh,"throwOnDoubleRelease");function cr(r,e){
if(e)return{callback:e,result:void 0};let t,n,i=a(function(o,c){o?t(o):n(c)},"cb"),
s=new r(function(o,c){n=o,t=c}).catch(o=>{throw Error.captureStackTrace(o),o});return{
callback:i,result:s}}a(cr,"promisify");function Fh(r,e){return a(function t(n){n.
client=e,e.removeListener("error",t),e.on("error",()=>{r.log("additional client \
error after disconnection due to error",n)}),r._remove(e),r.emit("error",n,e)},"\
idleListener")}a(Fh,"makeIdleListener");var qn=class extends Nh{static{a(this,"P\
ool")}constructor(e,t){super(),this.options=Object.assign({},e),e!=null&&"passwo\
rd"in e&&Object.defineProperty(this.options,"password",{configurable:!0,enumerable:!1,
writable:!0,value:e.password}),e!=null&&e.ssl&&e.ssl.key&&Object.defineProperty(
this.options.ssl,"key",{enumerable:!1}),this.options.max=this.options.max||this.
options.poolSize||10,this.options.maxUses=this.options.maxUses||1/0,this.options.
allowExitOnIdle=this.options.allowExitOnIdle||!1,this.options.maxLifetimeSeconds=
this.options.maxLifetimeSeconds||0,this.log=this.options.log||function(){},this.
Client=this.options.Client||t||ur().Client,this.Promise=this.options.Promise||R.
Promise,typeof this.options.idleTimeoutMillis>"u"&&(this.options.idleTimeoutMillis=
1e4),this._clients=[],this._idle=[],this._expired=new WeakSet,this._pendingQueue=
[],this._endCallback=void 0,this.ending=!1,this.ended=!1}_isFull(){return this._clients.
length>=this.options.max}_pulseQueue(){if(this.log("pulse queue"),this.ended){this.
log("pulse queue ended");return}if(this.ending){this.log("pulse queue on ending"),
this._idle.length&&this._idle.slice().map(t=>{this._remove(t.client)}),this._clients.
length||(this.ended=!0,this._endCallback());return}if(!this._pendingQueue.length){
this.log("no queued requests");return}if(!this._idle.length&&this._isFull())return;
let e=this._pendingQueue.shift();if(this._idle.length){let t=this._idle.pop();clearTimeout(
t.timeoutId);let n=t.client;n.ref&&n.ref();let i=t.idleListener;return this._acquireClient(
n,e,i,!1)}if(!this._isFull())return this.newClient(e);throw new Error("unexpecte\
d condition")}_remove(e){let t=vo(this._idle,n=>n.client===e);t!==void 0&&clearTimeout(
t.timeoutId),this._clients=this._clients.filter(n=>n!==e),e.end(),this.emit("rem\
ove",e)}connect(e){if(this.ending){let i=new Error("Cannot use a pool after call\
ing end on the pool");return e?e(i):this.Promise.reject(i)}let t=cr(this.Promise,
e),n=t.result;if(this._isFull()||this._idle.length){if(this._idle.length&&b.nextTick(
()=>this._pulseQueue()),!this.options.connectionTimeoutMillis)return this._pendingQueue.
push(new it(t.callback)),n;let i=a((c,u,l)=>{clearTimeout(o),t.callback(c,u,l)},
"queueCallback"),s=new it(i),o=setTimeout(()=>{vo(this._pendingQueue,c=>c.callback===
i),s.timedOut=!0,t.callback(new Error("timeout exceeded when trying to connect"))},
this.options.connectionTimeoutMillis);return this._pendingQueue.push(s),n}return this.
newClient(new it(t.callback)),n}newClient(e){let t=new this.Client(this.options);
this._clients.push(t);let n=Fh(this,t);this.log("checking client timeout");let i,
s=!1;this.options.connectionTimeoutMillis&&(i=setTimeout(()=>{this.log("ending c\
lient due to timeout"),s=!0,t.connection?t.connection.stream.destroy():t.end()},
this.options.connectionTimeoutMillis)),this.log("connecting new client"),t.connect(
o=>{if(i&&clearTimeout(i),t.on("error",n),o)this.log("client failed to connect",
o),this._clients=this._clients.filter(c=>c!==t),s&&(o.message="Connection termin\
ated due to connection timeout"),this._pulseQueue(),e.timedOut||e.callback(o,void 0,
Ao);else{if(this.log("new client connected"),this.options.maxLifetimeSeconds!==0){
let c=setTimeout(()=>{this.log("ending client due to expired lifetime"),this._expired.
add(t),this._idle.findIndex(l=>l.client===t)!==-1&&this._acquireClient(t,new it(
(l,h,f)=>f()),n,!1)},this.options.maxLifetimeSeconds*1e3);c.unref(),t.once("end",
()=>clearTimeout(c))}return this._acquireClient(t,e,n,!0)}})}_acquireClient(e,t,n,i){
i&&this.emit("connect",e),this.emit("acquire",e),e.release=this._releaseOnce(e,n),
e.removeListener("error",n),t.timedOut?i&&this.options.verify?this.options.verify(
e,e.release):e.release():i&&this.options.verify?this.options.verify(e,s=>{if(s)return e.
release(s),t.callback(s,void 0,Ao);t.callback(void 0,e,e.release)}):t.callback(void 0,
e,e.release)}_releaseOnce(e,t){let n=!1;return i=>{n&&Mh(),n=!0,this._release(e,
t,i)}}_release(e,t,n){if(e.on("error",t),e._poolUseCount=(e._poolUseCount||0)+1,
this.emit("release",n,e),n||this.ending||!e._queryable||e._ending||e._poolUseCount>=
this.options.maxUses){e._poolUseCount>=this.options.maxUses&&this.log("remove ex\
pended client"),this._remove(e),this._pulseQueue();return}if(this._expired.has(e)){
this.log("remove expired client"),this._expired.delete(e),this._remove(e),this._pulseQueue();
return}let s;this.options.idleTimeoutMillis&&(s=setTimeout(()=>{this.log("remove\
 idle client"),this._remove(e)},this.options.idleTimeoutMillis),this.options.allowExitOnIdle&&
s.unref()),this.options.allowExitOnIdle&&e.unref(),this._idle.push(new Fn(e,t,s)),
this._pulseQueue()}query(e,t,n){if(typeof e=="function"){let s=cr(this.Promise,e);
return U(function(){return s.callback(new Error("Passing a function as the first\
 parameter to pool.query is not supported"))}),s.result}typeof t=="function"&&(n=
t,t=void 0);let i=cr(this.Promise,n);return n=i.callback,this.connect((s,o)=>{if(s)
return n(s);let c=!1,u=a(l=>{c||(c=!0,o.release(l),n(l))},"onError");o.once("err\
or",u),this.log("dispatching query");try{o.query(e,t,(l,h)=>{if(this.log("query \
dispatched"),o.removeListener("error",u),!c)return c=!0,o.release(l),l?n(l):n(void 0,
h)})}catch(l){return o.release(l),n(l)}}),i.result}end(e){if(this.log("ending"),
this.ending){let n=new Error("Called end on pool more than once");return e?e(n):
this.Promise.reject(n)}this.ending=!0;let t=cr(this.Promise,e);return this._endCallback=
t.callback,this._pulseQueue(),t.result}get waitingCount(){return this._pendingQueue.
length}get idleCount(){return this._idle.length}get expiredCount(){return this._clients.
reduce((e,t)=>e+(this._expired.has(t)?1:0),0)}get totalCount(){return this._clients.
length}};Co.exports=qn});var Ro={};ge(Ro,{default:()=>qh});var qh,Uo=de(()=>{"use strict";y();qh={}});var Io=B((Xp,kh)=>{kh.exports={name:"pg",version:"8.8.0",description:"PostgreSQL\
 client - pure javascript & libpq with the same API",keywords:["database","libpq",
"pg","postgre","postgres","postgresql","rdbms"],homepage:"https://github.com/bri\
anc/node-postgres",repository:{type:"git",url:"git://github.com/brianc/node-post\
gres.git",directory:"packages/pg"},author:"Brian Carlson <brian.m.carlson@gmail.\
com>",main:"./lib",dependencies:{"buffer-writer":"2.0.0","packet-reader":"1.0.0",
"pg-connection-string":"^2.5.0","pg-pool":"^3.5.2","pg-protocol":"^1.5.0","pg-ty\
pes":"^2.1.0",pgpass:"1.x"},devDependencies:{async:"2.6.4",bluebird:"3.5.2",co:"\
4.6.0","pg-copy-streams":"0.3.0"},peerDependencies:{"pg-native":">=3.0.1"},peerDependenciesMeta:{
"pg-native":{optional:!0}},scripts:{test:"make test-all"},files:["lib","SPONSORS\
.md"],license:"MIT",engines:{node:">= 8.0.0"},gitHead:"c99fb2c127ddf8d712500db2c\
7b9a5491a178655"}});var Po=B((ey,_o)=>{"use strict";y();var Lo=Ne().EventEmitter,Dh=(St(),ne(wt)),kn=Rt(),
st=_o.exports=function(r,e,t){Lo.call(this),r=kn.normalizeQueryConfig(r,e,t),this.
text=r.text,this.values=r.values,this.name=r.name,this.callback=r.callback,this.
state="new",this._arrayMode=r.rowMode==="array",this._emitRowEvents=!1,this.on("\
newListener",function(n){n==="row"&&(this._emitRowEvents=!0)}.bind(this))};Dh.inherits(
st,Lo);var Oh={sqlState:"code",statementPosition:"position",messagePrimary:"mess\
age",context:"where",schemaName:"schema",tableName:"table",columnName:"column",dataTypeName:"\
dataType",constraintName:"constraint",sourceFile:"file",sourceLine:"line",sourceFunction:"\
routine"};st.prototype.handleError=function(r){var e=this.native.pq.resultErrorFields();
if(e)for(var t in e){var n=Oh[t]||t;r[n]=e[t]}this.callback?this.callback(r):this.
emit("error",r),this.state="error"};st.prototype.then=function(r,e){return this.
_getPromise().then(r,e)};st.prototype.catch=function(r){return this._getPromise().
catch(r)};st.prototype._getPromise=function(){return this._promise?this._promise:
(this._promise=new Promise(function(r,e){this._once("end",r),this._once("error",
e)}.bind(this)),this._promise)};st.prototype.submit=function(r){this.state="runn\
ing";var e=this;this.native=r.native,r.native.arrayMode=this._arrayMode;var t=a(
function(s,o,c){if(r.native.arrayMode=!1,U(function(){e.emit("_done")}),s)return e.
handleError(s);e._emitRowEvents&&(c.length>1?o.forEach((u,l)=>{u.forEach(h=>{e.emit(
"row",h,c[l])})}):o.forEach(function(u){e.emit("row",u,c)})),e.state="end",e.emit(
"end",c),e.callback&&e.callback(null,c)},"after");if(b.domain&&(t=b.domain.bind(
t)),this.name){this.name.length>63&&(console.error("Warning! Postgres only suppo\
rts 63 characters for query names."),console.error("You supplied %s (%s)",this.name,
this.name.length),console.error("This can cause conflicts and silent errors exec\
uting queries"));var n=(this.values||[]).map(kn.prepareValue);if(r.namedQueries[this.
name]){if(this.text&&r.namedQueries[this.name]!==this.text){let s=new Error(`Pre\
pared statements must be unique - '${this.name}' was used for a different statem\
ent`);return t(s)}return r.native.execute(this.name,n,t)}return r.native.prepare(
this.name,this.text,n.length,function(s){return s?t(s):(r.namedQueries[e.name]=e.
text,e.native.execute(e.name,n,t))})}else if(this.values){if(!Array.isArray(this.
values)){let s=new Error("Query values must be an array");return t(s)}var i=this.
values.map(kn.prepareValue);r.native.query(this.text,i,t)}else r.native.query(this.
text,t)}});var Fo=B((iy,Mo)=>{"use strict";y();var Qh=(Uo(),ne(Ro)),Hh=Xt(),ny=Io(),Bo=Ne().
EventEmitter,$h=(St(),ne(wt)),jh=er(),No=Po(),me=Mo.exports=function(r){Bo.call(
this),r=r||{},this._Promise=r.Promise||R.Promise,this._types=new Hh(r.types),this.
native=new Qh({types:this._types}),this._queryQueue=[],this._ending=!1,this._connecting=
!1,this._connected=!1,this._queryable=!0;var e=this.connectionParameters=new jh(
r);this.user=e.user,Object.defineProperty(this,"password",{configurable:!0,enumerable:!1,
writable:!0,value:e.password}),this.database=e.database,this.host=e.host,this.port=
e.port,this.namedQueries={}};me.Query=No;$h.inherits(me,Bo);me.prototype._errorAllQueries=
function(r){let e=a(t=>{b.nextTick(()=>{t.native=this.native,t.handleError(r)})},
"enqueueError");this._hasActiveQuery()&&(e(this._activeQuery),this._activeQuery=
null),this._queryQueue.forEach(e),this._queryQueue.length=0};me.prototype._connect=
function(r){var e=this;if(this._connecting){b.nextTick(()=>r(new Error("Client h\
as already been connected. You cannot reuse a client.")));return}this._connecting=
!0,this.connectionParameters.getLibpqConnectionString(function(t,n){if(t)return r(
t);e.native.connect(n,function(i){if(i)return e.native.end(),r(i);e._connected=!0,
e.native.on("error",function(s){e._queryable=!1,e._errorAllQueries(s),e.emit("er\
ror",s)}),e.native.on("notification",function(s){e.emit("notification",{channel:s.
relname,payload:s.extra})}),e.emit("connect"),e._pulseQueryQueue(!0),r()})})};me.
prototype.connect=function(r){if(r){this._connect(r);return}return new this._Promise(
(e,t)=>{this._connect(n=>{n?t(n):e()})})};me.prototype.query=function(r,e,t){var n,
i,s,o,c;if(r==null)throw new TypeError("Client was passed a null or undefined qu\
ery");if(typeof r.submit=="function")s=r.query_timeout||this.connectionParameters.
query_timeout,i=n=r,typeof e=="function"&&(r.callback=e);else if(s=this.connectionParameters.
query_timeout,n=new No(r,e,t),!n.callback){let u,l;i=new this._Promise((h,f)=>{u=
h,l=f}),n.callback=(h,f)=>h?l(h):u(f)}return s&&(c=n.callback,o=setTimeout(()=>{
var u=new Error("Query read timeout");b.nextTick(()=>{n.handleError(u,this.connection)}),
c(u),n.callback=()=>{};var l=this._queryQueue.indexOf(n);l>-1&&this._queryQueue.
splice(l,1),this._pulseQueryQueue()},s),n.callback=(u,l)=>{clearTimeout(o),c(u,l)}),
this._queryable?this._ending?(n.native=this.native,b.nextTick(()=>{n.handleError(
new Error("Client was closed and is not queryable"))}),i):(this._queryQueue.push(
n),this._pulseQueryQueue(),i):(n.native=this.native,b.nextTick(()=>{n.handleError(
new Error("Client has encountered a connection error and is not queryable"))}),i)};
me.prototype.end=function(r){var e=this;this._ending=!0,this._connected||this.once(
"connect",this.end.bind(this,r));var t;return r||(t=new this._Promise(function(n,i){
r=a(s=>s?i(s):n(),"cb")})),this.native.end(function(){e._errorAllQueries(new Error(
"Connection terminated")),b.nextTick(()=>{e.emit("end"),r&&r()})}),t};me.prototype.
_hasActiveQuery=function(){return this._activeQuery&&this._activeQuery.state!=="\
error"&&this._activeQuery.state!=="end"};me.prototype._pulseQueryQueue=function(r){
if(this._connected&&!this._hasActiveQuery()){var e=this._queryQueue.shift();if(!e){
r||this.emit("drain");return}this._activeQuery=e,e.submit(this);var t=this;e.once(
"_done",function(){t._pulseQueryQueue()})}};me.prototype.cancel=function(r){this.
_activeQuery===r?this.native.cancel(function(){}):this._queryQueue.indexOf(r)!==
-1&&this._queryQueue.splice(this._queryQueue.indexOf(r),1)};me.prototype.ref=function(){};
me.prototype.unref=function(){};me.prototype.setTypeParser=function(r,e,t){return this.
_types.setTypeParser(r,e,t)};me.prototype.getTypeParser=function(r,e){return this.
_types.getTypeParser(r,e)}});var Dn=B((ay,qo)=>{"use strict";y();qo.exports=Fo()});var ur=B((ly,It)=>{"use strict";y();var Kh=xo(),Wh=Tt(),Vh=Nn(),Gh=To(),{DatabaseError:zh}=Pn(),
Jh=a(r=>class extends Gh{static{a(this,"BoundPool")}constructor(t){super(t,r)}},
"poolFactory"),On=a(function(r){this.defaults=Wh,this.Client=r,this.Query=this.Client.
Query,this.Pool=Jh(this.Client),this._pools=[],this.Connection=Vh,this.types=Ct(),
this.DatabaseError=zh},"PG");typeof b.env.NODE_PG_FORCE_NATIVE<"u"?It.exports=new On(
Dn()):(It.exports=new On(Kh),Object.defineProperty(It.exports,"native",{configurable:!0,
enumerable:!1,get(){var r=null;try{r=new On(Dn())}catch(e){if(e.code!=="MODULE_N\
OT_FOUND")throw e}return Object.defineProperty(It.exports,"native",{value:r}),r}}))});y();var _r={};ge(_r,{SocketReadQueue:()=>wc,TrustedCert:()=>mt,WebSocketReadQueue:()=>gc,
base64Decode:()=>Ci,hexFromU8:()=>Z,stableStringify:()=>Sc,startTls:()=>mc,u8FromHex:()=>Pe});
y();var Da=Object.defineProperty,Oa=a((r,e,t)=>e in r?Da(r,e,{enumerable:!0,configurable:!0,
writable:!0,value:t}):r[e]=t,"__defNormalProp"),K=a((r,e,t)=>Oa(r,typeof e!="sym\
bol"?e+"":e,t),"__publicField");function ce(...r){if(r.length===1&&r[0]instanceof
Uint8Array)return r[0];let e=r.reduce((i,s)=>i+s.length,0),t=new Uint8Array(e),n=0;
for(let i of r)t.set(i,n),n+=i.length;return t}a(ce,"concat");function Ht(r,e){let t=r.
length;if(t!==e.length)return!1;for(let n=0;n<t;n++)if(r[n]!==e[n])return!1;return!0}
a(Ht,"equal");var Qa=class{static{a(this,"GrowableData")}constructor(){K(this,"l\
ength"),K(this,"data"),this.length=0,this.data=new Uint8Array}append(r){let e=r.
length;if(this.length+e>this.data.length){let t=this.data;this.data=new Uint8Array(
this.length*2+e),this.data.set(t)}this.data.set(r,this.length),this.length+=r.length}getData(){
return this.data.subarray(0,this.length)}},Cr="\xB7\xB7 ",gi=new TextEncoder,Ha=new TextDecoder,
Ce=class{static{a(this,"Bytes")}constructor(r){K(this,"offset"),K(this,"dataView"),
K(this,"data"),K(this,"comments"),K(this,"indents"),K(this,"indent"),this.offset=
0,this.data=typeof r=="number"?new Uint8Array(r):r,this.dataView=new DataView(this.
data.buffer,this.data.byteOffset,this.data.byteLength),this.comments={},this.indents=
{},this.indent=0}extend(r){let e=typeof r=="number"?new Uint8Array(r):r;this.data=
ce(this.data,e),this.dataView=new DataView(this.data.buffer,this.data.byteOffset,
this.data.byteLength)}remaining(){return this.data.length-this.offset}subarray(r){
return this.data.subarray(this.offset,this.offset+=r)}skip(r,e){return this.offset+=
r,e&&this.comment(e),this}comment(r,e=this.offset){throw new Error("No comments \
should be emitted outside of chatty mode")}lengthComment(r,e,t=!1){return r===1?
`${r} byte${e?` of ${e}`:""} ${t?"starts here":"follows"}`:`${r===0?"no":r} byte\
s${e?` of ${e}`:""} ${t?"start here":"follow"}`}readBytes(r){return this.data.slice(
this.offset,this.offset+=r)}readUTF8String(r){let e=this.subarray(r);return Ha.decode(
e)}readUTF8StringNullTerminated(){let r=this.offset;for(;this.data[r]!==0;)r++;let e=this.
readUTF8String(r-this.offset);return this.expectUint8(0,"end of string"),e}readUint8(r){
let e=this.dataView.getUint8(this.offset);return this.offset+=1,e}readUint16(r){
let e=this.dataView.getUint16(this.offset);return this.offset+=2,e}readUint24(r){
let e=this.readUint8(),t=this.readUint16();return(e<<16)+t}readUint32(r){let e=this.
dataView.getUint32(this.offset);return this.offset+=4,e}expectBytes(r,e){let t=this.
readBytes(r.length);if(!Ht(t,r))throw new Error("Unexpected bytes")}expectUint8(r,e){
let t=this.readUint8();if(t!==r)throw new Error(`Expected ${r}, got ${t}`)}expectUint16(r,e){
let t=this.readUint16();if(t!==r)throw new Error(`Expected ${r}, got ${t}`)}expectUint24(r,e){
let t=this.readUint24();if(t!==r)throw new Error(`Expected ${r}, got ${t}`)}expectUint32(r,e){
let t=this.readUint32();if(t!==r)throw new Error(`Expected ${r}, got ${t}`)}expectLength(r,e=1){
let t=this.offset,n=t+r;if(n>this.data.length)throw new Error("Expected length e\
xceeds remaining data length");return this.indent+=e,this.indents[t]=this.indent,
[()=>{if(this.indent-=e,this.indents[this.offset]=this.indent,this.offset!==n)throw new Error(
`${r} bytes expected but ${this.offset-t} read`)},()=>n-this.offset]}expectLengthUint8(r){
let e=this.readUint8();return this.expectLength(e)}expectLengthUint16(r){let e=this.
readUint16();return this.expectLength(e)}expectLengthUint24(r){let e=this.readUint24();
return this.expectLength(e)}expectLengthUint32(r){let e=this.readUint32();return this.
expectLength(e)}expectLengthUint8Incl(r){let e=this.readUint8();return this.expectLength(
e-1)}expectLengthUint16Incl(r){let e=this.readUint16();return this.expectLength(
e-2)}expectLengthUint24Incl(r){let e=this.readUint24();return this.expectLength(
e-3)}expectLengthUint32Incl(r){let e=this.readUint32();return this.expectLength(
e-4)}writeBytes(r){return this.data.set(r,this.offset),this.offset+=r.length,this}writeUTF8String(r){
let e=gi.encode(r);return this.writeBytes(e),this}writeUTF8StringNullTerminated(r){
let e=gi.encode(r);return this.writeBytes(e),this.writeUint8(0),this}writeUint8(r,e){
return this.dataView.setUint8(this.offset,r),this.offset+=1,this}writeUint16(r,e){
return this.dataView.setUint16(this.offset,r),this.offset+=2,this}writeUint24(r,e){
return this.writeUint8((r&16711680)>>16),this.writeUint16(r&65535,e),this}writeUint32(r,e){
return this.dataView.setUint32(this.offset,r),this.offset+=4,this}_writeLengthGeneric(r,e,t){
let n=this.offset;this.offset+=r;let i=this.offset;return this.indent+=1,this.indents[i]=
this.indent,()=>{let s=this.offset-(e?n:i);if(r===1)this.dataView.setUint8(n,s);else if(r===
2)this.dataView.setUint16(n,s);else if(r===3)this.dataView.setUint8(n,(s&16711680)>>
16),this.dataView.setUint16(n+1,s&65535);else if(r===4)this.dataView.setUint32(n,
s);else throw new Error(`Invalid length for length field: ${r}`);this.indent-=1,
this.indents[this.offset]=this.indent}}writeLengthUint8(r){return this._writeLengthGeneric(
1,!1,r)}writeLengthUint16(r){return this._writeLengthGeneric(2,!1,r)}writeLengthUint24(r){
return this._writeLengthGeneric(3,!1,r)}writeLengthUint32(r){return this._writeLengthGeneric(
4,!1,r)}writeLengthUint8Incl(r){return this._writeLengthGeneric(1,!0,r)}writeLengthUint16Incl(r){
return this._writeLengthGeneric(2,!0,r)}writeLengthUint24Incl(r){return this._writeLengthGeneric(
3,!0,r)}writeLengthUint32Incl(r){return this._writeLengthGeneric(4,!0,r)}array(){
return this.data.subarray(0,this.offset)}commentedString(r=!1){let e=this.indents[0]!==
void 0?Cr.repeat(this.indents[0]):"",t=this.indents[0]??0,n=r?this.data.length:this.
offset;for(let i=0;i<n;i++){e+=this.data[i].toString(16).padStart(2,"0")+" ";let s=this.
comments[i+1];this.indents[i+1]!==void 0&&(t=this.indents[i+1]),s&&(e+=` ${s}
${Cr.repeat(t)}`)}return e}},$a=typeof T<"u"?Promise.resolve(T):Promise.resolve().then(()=>(dt(),ft)).
then(r=>r.webcrypto);async function Ai(...r){return(await $a).getRandomValues(...r)}
a(Ai,"getRandomValues");async function ja(r,e,t,n=!0){let i=new Ce(1024);i.writeUint8(
22,0),i.writeUint16(769,0);let s=i.writeLengthUint16("TLS record");i.writeUint8(
1,0);let o=i.writeLengthUint24();i.writeUint16(771,0),await Ai(i.subarray(32));let c=i.
writeLengthUint8(0);i.writeBytes(t),c();let u=i.writeLengthUint16(0);i.writeUint16(
4865,0),u();let l=i.writeLengthUint8(0);i.writeUint8(0,0),l();let h=i.writeLengthUint16(
0);if(n){i.writeUint16(0,0);let _=i.writeLengthUint16(0),D=i.writeLengthUint16(0);
i.writeUint8(0,0);let Y=i.writeLengthUint16(0);i.writeUTF8String(r),Y(),D(),_()}
i.writeUint16(11,0);let f=i.writeLengthUint16(0),g=i.writeLengthUint8(0);i.writeUint8(
0,0),g(),f(),i.writeUint16(10,0);let p=i.writeLengthUint16(0),E=i.writeLengthUint16(
0);i.writeUint16(23,0),E(),p(),i.writeUint16(13,0);let C=i.writeLengthUint16(0),
v=i.writeLengthUint16(0);i.writeUint16(1027,0),i.writeUint16(2052,0),v(),C(),i.writeUint16(
43,0);let A=i.writeLengthUint16(0),S=i.writeLengthUint8(0);i.writeUint16(772,0),
S(),A(),i.writeUint16(51,0);let m=i.writeLengthUint16(0),x=i.writeLengthUint16(0);
i.writeUint16(23,0);let N=i.writeLengthUint16(0);return i.writeBytes(e),N(),x(),
m(),h(),o(),s(),i}a(ja,"makeClientHello");function Pe(r){return new Uint8Array(Array.
from(r.matchAll(/[0-9a-f]/g)).map(e=>parseInt(e[0],16)))}a(Pe,"u8FromHex");function Z(r,e=""){
return[...r].map(t=>t.toString(16).padStart(2,"0")).join(e)}a(Z,"hexFromU8");function Ka(r,e){
let t,n,[i]=r.expectLength(r.remaining());r.expectUint8(2,0);let[s]=r.expectLengthUint24(
0);r.expectUint16(771,0);let o=r.readBytes(32);if(Ht(o,[207,33,173,116,229,154,97,
17,190,29,140,2,30,101,184,145,194,162,17,22,122,187,140,94,7,158,9,226,200,168,
51,156]))throw new Error("Unexpected HelloRetryRequest");r.expectUint8(e.length,
0),r.expectBytes(e,0),r.expectUint16(4865,0),r.expectUint8(0,0);let[c,u]=r.expectLengthUint16(
0);for(;u()>0;){let l=r.readUint16(0),[h]=r.expectLengthUint16(0);if(l===43)r.expectUint16(
772,0),n=!0;else if(l===51){r.expectUint16(23,0);let[f,g]=r.expectLengthUint16("\
key share"),p=g();if(p!==65)throw new Error(`Expected 65 bytes of key share, but\
 got ${p}`);t=r.readBytes(p),f()}else throw new Error(`Unexpected extension 0x${Z(
[l])}`);h()}if(c(),s(),i(),n!==!0)throw new Error("No TLS version provided");if(t===
void 0)throw new Error("No key provided");return t}a(Ka,"parseServerHello");var Uf=new RegExp(
`  .+|^(${Cr})+`,"gm");var pt=16384,Wa=pt+1+255;async function Tr(r,e,t=pt){let i=await r(5);if(i===void 0)
return;if(i.length<5)throw new Error("TLS record header truncated");let s=new Ce(
i),o=s.readUint8();if(o<20||o>24)throw new Error(`Illegal TLS record type 0x${o.
toString(16)}`);if(e!==void 0&&o!==e)throw new Error(`Unexpected TLS record type\
 0x${o.toString(16).padStart(2,"0")} (expected 0x${e.toString(16).padStart(2,"0")}\
)`);s.expectUint16(771,"TLS record version 1.2 (middlebox compatibility)");let c=s.
readUint16();if(c>t)throw new Error(`Record too long: ${c} bytes`);let u=await r(
c);if(u===void 0||u.length<c)throw new Error("TLS record content truncated");return{
headerData:i,header:s,type:o,length:c,content:u}}a(Tr,"readTlsRecord");async function Rr(r,e,t){
let n=await Tr(r,23,Wa);if(n===void 0)return;let i=new Ce(n.content),[s]=i.expectLength(
i.remaining());i.skip(n.length-16,0),i.skip(16,0),s();let o=await e.process(n.content,
16,n.headerData),c=o.length-1;for(;o[c]===0;)c-=1;if(c<0)throw new Error("Decryp\
ted message has no record type indicator (all zeroes)");let u=o[c],l=o.subarray(
0,c);if(!(u===21&&l.length===2&&l[0]===1&&l[1]===0)){if(u===22&&l[0]===4)return Rr(
r,e,t);if(t!==void 0&&u!==t)throw new Error(`Unexpected TLS record type 0x${u.toString(
16).padStart(2,"0")} (expected 0x${t.toString(16).padStart(2,"0")})`);return l}}
a(Rr,"readEncryptedTlsRecord");async function Va(r,e,t){let n=ce(r,[t]),i=5,c=n.
length+16,u=new Ce(i+c);u.writeUint8(23,0),u.writeUint16(771,0),u.writeUint16(c,
`${c} bytes follow`);let[l]=u.expectLength(c),h=u.array(),f=await e.process(n,16,
h);return u.writeBytes(f.subarray(0,f.length-16)),u.writeBytes(f.subarray(f.length-
16)),l(),u.array()}a(Va,"makeEncryptedTlsRecord");async function wi(r,e,t){let n=Math.
ceil(r.length/pt),i=[];for(let s=0;s<n;s++){let o=r.subarray(s*pt,(s+1)*pt),c=await Va(
o,e,t);i.push(c)}return i}a(wi,"makeEncryptedTlsRecords");var Ga=typeof T<"u"&&T.
subtle!==void 0?Promise.resolve(T.subtle):Promise.resolve().then(()=>(dt(),ft)).
then(r=>r.webcrypto.subtle);function za(r,e){return Ga.then(t=>t[r](...e))}a(za,
"subtleCryptoMethod");var O=new Proxy({},{get(r,e,t){return(...n)=>za(e,n)}}),vi=new TextEncoder;
async function Ur(r,e,t){let n=await O.importKey("raw",r,{name:"HMAC",hash:{name:`\
SHA-${t}`}},!1,["sign"]);var i=new Uint8Array(await O.sign("HMAC",n,e));return i}
a(Ur,"hkdfExtract");async function Ja(r,e,t,n){let i=n>>3,s=Math.ceil(t/i),o=new Uint8Array(
s*i),c=await O.importKey("raw",r,{name:"HMAC",hash:{name:`SHA-${n}`}},!1,["sign"]),
u=new Uint8Array(0);for(let l=0;l<s;l++){let h=ce(u,e,[l+1]),f=await O.sign("HMA\
C",c,h),g=new Uint8Array(f);o.set(g,i*l),u=g}return o.subarray(0,t)}a(Ja,"hkdfEx\
pand");var Si=vi.encode("tls13 ");async function ue(r,e,t,n,i){let s=vi.encode(e),
o=ce([(n&65280)>>8,n&255],[Si.length+s.length],Si,s,[t.length],t);return Ja(r,o,
n,i)}a(ue,"hkdfExpandLabel");async function Ya(r,e,t,n,i){let s=n>>>3,o=new Uint8Array(
s),c=await O.importKey("raw",r,{name:"ECDH",namedCurve:"P-256"},!1,[]),u=await O.
deriveBits({name:"ECDH",public:c},e,256),l=new Uint8Array(u),h=await O.digest("S\
HA-256",t),f=new Uint8Array(h),g=await Ur(new Uint8Array(1),o,n),p=await O.digest(
`SHA-${n}`,new Uint8Array(0)),E=new Uint8Array(p),C=await ue(g,"derived",E,s,n),
v=await Ur(C,l,n),A=await ue(v,"c hs traffic",f,s,n),S=await ue(v,"s hs traffic",
f,s,n),m=await ue(A,"key",new Uint8Array(0),i,n),x=await ue(S,"key",new Uint8Array(
0),i,n),N=await ue(A,"iv",new Uint8Array(0),12,n),_=await ue(S,"iv",new Uint8Array(
0),12,n);return{serverHandshakeKey:x,serverHandshakeIV:_,clientHandshakeKey:m,clientHandshakeIV:N,
handshakeSecret:v,clientSecret:A,serverSecret:S}}a(Ya,"getHandshakeKeys");async function Za(r,e,t,n){
let i=t>>>3,s=new Uint8Array(i),o=await O.digest(`SHA-${t}`,new Uint8Array(0)),c=new Uint8Array(
o),u=await ue(r,"derived",c,i,t),l=await Ur(u,s,t),h=await ue(l,"c ap traffic",e,
i,t),f=await ue(l,"s ap traffic",e,i,t),g=await ue(h,"key",new Uint8Array(0),n,t),
p=await ue(f,"key",new Uint8Array(0),n,t),E=await ue(h,"iv",new Uint8Array(0),12,
t),C=await ue(f,"iv",new Uint8Array(0),12,t);return{serverApplicationKey:p,serverApplicationIV:C,
clientApplicationKey:g,clientApplicationIV:E}}a(Za,"getApplicationKeys");var Ot=class{static{
a(this,"Crypter")}constructor(r,e,t){this.mode=r,this.key=e,this.initialIv=t,K(this,
"recordsProcessed",0n),K(this,"priorPromise",Promise.resolve(new Uint8Array))}async process(r,e,t){
return this.sequence(this.processUnsequenced(r,e,t))}async sequence(r){let e=this.
priorPromise.then(()=>r);return this.priorPromise=e,e}async processUnsequenced(r,e,t){
let n=this.recordsProcessed;this.recordsProcessed+=1n;let i=this.initialIv.slice(),
s=BigInt(i.length),o=s-1n;for(let f=0n;f<s;f++){let g=n>>(f<<3n);if(g===0n)break;
i[Number(o-f)]^=Number(g&0xffn)}let c=e<<3,u={name:"AES-GCM",iv:i,tagLength:c,additionalData:t},
l=await O[this.mode](u,this.key,r);return new Uint8Array(l)}};function Xa(r){throw new Error(
`Invalid base 64 character: ${String.fromCharCode(r)}`)}a(Xa,"base64Error");function ec(r){
return r>64&&r<91?r-65:r>96&&r<123?r-71:r>47&&r<58?r+4:r===43?62:r===47?63:r===61?
64:Xa(r)}a(ec,"stdCharCodes");function Ci(r,e=ec,t=!0){let n=r.length;t&&(r+="=".
repeat(n%4));let i=0,s=0,o=64,c=64,u=64,l=64,h=new Uint8Array(n*.75);for(;i<n;)o=
e(r.charCodeAt(i++)),c=e(r.charCodeAt(i++)),u=e(r.charCodeAt(i++)),l=e(r.charCodeAt(
i++)),h[s++]=o<<2|c>>4,h[s++]=(c&15)<<4|u>>2,h[s++]=(u&3)<<6|l;let f=c===64?0:u===
64?2:l===64?1:0;return h.subarray(0,s-f)}a(Ci,"base64Decode");var yt=class extends Ce{static{
a(this,"ASN1Bytes")}readASN1Length(r){let e=this.readUint8();if(e<128)return e;let t=e&
127,n=0;if(t===1)return this.readUint8(n);if(t===2)return this.readUint16(n);if(t===
3)return this.readUint24(n);if(t===4)return this.readUint32(n);throw new Error(`\
ASN.1 length fields are only supported up to 4 bytes (this one is ${t} bytes)`)}expectASN1Length(r){
let e=this.readASN1Length(r);return this.expectLength(e)}readASN1OID(r){let[e,t]=this.
expectASN1Length(0),n=this.readUint8(),i=`${Math.floor(n/40)}.${n%40}`;for(;t()>
0;){let s=0;for(;;){let o=this.readUint8();if(s<<=7,s+=o&127,o<128)break}i+=`.${s}`}
return e(),i}readASN1Boolean(r){let[e,t]=this.expectASN1Length(0),n=t();if(n!==1)
throw new Error(`Boolean has weird length: ${n}`);let i=this.readUint8(),s;if(i===
255)s=!0;else if(i===0)s=!1;else throw new Error(`Boolean has weird value: 0x${Z(
[i])}`);return e(),s}readASN1UTCTime(){let[r,e]=this.expectASN1Length(0),n=this.
readUTF8String(e()).match(/^(\d\d)(\d\d)(\d\d)(\d\d)(\d\d)(\d\d)Z$/);if(!n)throw new Error(
"Unrecognised ASN.1 UTC time format");let[,i,s,o,c,u,l]=n,h=parseInt(i,10),f=h+(h>=
50?1900:2e3),g=new Date(`${f}-${s}-${o}T${c}:${u}:${l}Z`);return r(),g}readASN1GeneralizedTime(){
let[r,e]=this.expectASN1Length(0),n=this.readUTF8String(e()).match(/^([0-9]{4})([0-9]{2})([0-9]{2})([0-9]{2})([0-9]{2})?([0-9]{2})?([.][0-9]+)?(Z)?([-+][0-9]+)?$/);
if(!n)throw new Error("Unrecognised ASN.1 generalized time format");let[,i,s,o,c,
u,l,h,f,g]=n;if(l===void 0&&h!==void 0)throw new Error("Invalid ASN.1 generalize\
d time format (fraction without seconds)");if(f!==void 0&&g!==void 0)throw new Error(
"Invalid ASN.1 generalized time format (Z and timezone)");let p=new Date(`${i}-${s}\
-${o}T${c}:${u??"00"}:${l??"00"}${h??""}${g??"Z"}`);return r(),p}readASN1BitString(){
let[r,e]=this.expectASN1Length(0),t=this.readUint8(0),n=e(),i=this.readBytes(n);
if(t>7)throw new Error(`Invalid right pad value: ${t}`);if(t>0){let s=8-t;for(let o=n-
1;o>0;o--)i[o]=255&i[o-1]<<s|i[o]>>>t;i[0]=i[0]>>>t}return r(),i}},xr=1,Qt=2,ae=48,
tc=49,Je=6,rc=19,nc=20,ic=12,sc=22,bi=23,Ei=24,Ar=5,_e=4,vr=3,oc=163,ze=128,ac={
"2.5.4.6":"C","2.5.4.10":"O","2.5.4.11":"OU","2.5.4.3":"CN","2.5.4.7":"L","2.5.4\
.8":"ST","2.5.4.12":"T","2.5.4.42":"GN","2.5.4.43":"I","2.5.4.4":"SN","1.2.840.1\
13549.1.9.1":"MAIL","2.5.4.5":"SERIALNUMBER"};function cc(r){let{length:e}=r;if(e>
4)throw new Error(`Bit string length ${e} would overflow JS bit operators`);let t=0,
n=0;for(let i=r.length-1;i>=0;i--)t|=r[i]<<n,n+=8;return t}a(cc,"intFromBitStrin\
g");function xi(r,e){let t={};r.expectUint8(ae,0);let[n,i]=r.expectASN1Length(0);
for(;i()>0;){r.expectUint8(tc,0);let[s]=r.expectASN1Length(0);r.expectUint8(ae,0);
let[o]=r.expectASN1Length(0);r.expectUint8(Je,0);let c=r.readASN1OID(),u=ac[c]??
c,l=r.readUint8();if(l!==rc){if(l!==ic){if(l!==sc){if(l!==nc)throw new Error(`Un\
expected item type in certificate ${e}: 0x${Z([l])}`)}}}let[h,f]=r.expectASN1Length(
0),g=r.readUTF8String(f());h(),o(),s();let p=t[u];p===void 0?t[u]=g:typeof p=="s\
tring"?t[u]=[p,g]:p.push(g)}return n(),t}a(xi,"readSeqOfSetOfSeq");function uc(r,e=0){
let t=[],[n,i]=r.expectASN1Length(0);for(;i()>0;){let s=r.readUint8(0),[o,c]=r.expectASN1Length(
0),u;s===(e|2)?u=r.readUTF8String(c()):u=r.readBytes(c()),t.push({name:u,type:s}),
o()}return n(),t}a(uc,"readNamesSeq");function lc(r){let e={"1.2.840.113549.1.1.\
1":{name:"RSAES-PKCS1-v1_5"},"1.2.840.113549.1.1.5":{name:"RSASSA-PKCS1-v1_5",hash:{
name:"SHA-1"}},"1.2.840.113549.1.1.11":{name:"RSASSA-PKCS1-v1_5",hash:{name:"SHA\
-256"}},"1.2.840.113549.1.1.12":{name:"RSASSA-PKCS1-v1_5",hash:{name:"SHA-384"}},
"1.2.840.113549.1.1.13":{name:"RSASSA-PKCS1-v1_5",hash:{name:"SHA-512"}},"1.2.84\
0.113549.1.1.10":{name:"RSA-PSS"},"1.2.840.113549.1.1.7":{name:"RSA-OAEP"},"1.2.\
840.10045.2.1":{name:"ECDSA",hash:{name:"SHA-1"}},"1.2.840.10045.4.1":{name:"ECD\
SA",hash:{name:"SHA-1"}},"1.2.840.10045.4.3.2":{name:"ECDSA",hash:{name:"SHA-256"}},
"1.2.840.10045.4.3.3":{name:"ECDSA",hash:{name:"SHA-384"}},"1.2.840.10045.4.3.4":{
name:"ECDSA",hash:{name:"SHA-512"}},"1.3.133.16.840.63.0.2":{name:"ECDH",kdf:"SH\
A-1"},"1.3.132.1.11.1":{name:"ECDH",kdf:"SHA-256"},"1.3.132.1.11.2":{name:"ECDH",
kdf:"SHA-384"},"1.3.132.1.11.3":{name:"ECDH",kdf:"SHA-512"},"2.16.840.1.101.3.4.\
1.2":{name:"AES-CBC",length:128},"2.16.840.1.101.3.4.1.22":{name:"AES-CBC",length:192},
"2.16.840.1.101.3.4.1.42":{name:"AES-CBC",length:256},"2.16.840.1.101.3.4.1.6":{
name:"AES-GCM",length:128},"2.16.840.1.101.3.4.1.26":{name:"AES-GCM",length:192},
"2.16.840.1.101.3.4.1.46":{name:"AES-GCM",length:256},"2.16.840.1.101.3.4.1.4":{
name:"AES-CFB",length:128},"2.16.840.1.101.3.4.1.24":{name:"AES-CFB",length:192},
"2.16.840.1.101.3.4.1.44":{name:"AES-CFB",length:256},"2.16.840.1.101.3.4.1.5":{
name:"AES-KW",length:128},"2.16.840.1.101.3.4.1.25":{name:"AES-KW",length:192},"\
2.16.840.1.101.3.4.1.45":{name:"AES-KW",length:256},"1.2.840.113549.2.7":{name:"\
HMAC",hash:{name:"SHA-1"}},"1.2.840.113549.2.9":{name:"HMAC",hash:{name:"SHA-256"}},
"1.2.840.113549.2.10":{name:"HMAC",hash:{name:"SHA-384"}},"1.2.840.113549.2.11":{
name:"HMAC",hash:{name:"SHA-512"}},"1.2.840.113549.1.9.16.3.5":{name:"DH"},"1.3.\
14.3.2.26":{name:"SHA-1"},"2.16.840.1.101.3.4.2.1":{name:"SHA-256"},"2.16.840.1.\
101.3.4.2.2":{name:"SHA-384"},"2.16.840.1.101.3.4.2.3":{name:"SHA-512"},"1.2.840\
.113549.1.5.12":{name:"PBKDF2"},"1.2.840.10045.3.1.7":{name:"P-256"},"1.3.132.0.\
34":{name:"P-384"},"1.3.132.0.35":{name:"P-521"}}[r];if(e===void 0)throw new Error(
`Unsupported algorithm identifier: ${r}`);return e}a(lc,"algorithmWithOID");function Ti(r,e=[]){
return Object.values(r).forEach(t=>{typeof t=="string"?e=[...e,t]:e=Ti(t,e)}),e}
a(Ti,"_descriptionForAlgorithm");function hc(r){return Ti(r).join(" / ")}a(hc,"d\
escriptionForAlgorithm");var fc=["digitalSignature","nonRepudiation","keyEnciphe\
rment","dataEncipherment","keyAgreement","keyCertSign","cRLSign","encipherOnly",
"decipherOnly"],Ir=class Lr{static{a(this,"_Cert")}constructor(e){if(K(this,"ser\
ialNumber"),K(this,"algorithm"),K(this,"issuer"),K(this,"validityPeriod"),K(this,
"subject"),K(this,"publicKey"),K(this,"signature"),K(this,"keyUsage"),K(this,"su\
bjectAltNames"),K(this,"extKeyUsage"),K(this,"authorityKeyIdentifier"),K(this,"s\
ubjectKeyIdentifier"),K(this,"basicConstraints"),K(this,"signedData"),e instanceof
yt||e instanceof Uint8Array){let t=e instanceof yt?e:new yt(e);t.expectUint8(ae,
0);let[n]=t.expectASN1Length(0),i=t.offset;t.expectUint8(ae,0);let[s]=t.expectASN1Length(
0);t.expectBytes([160,3,2,1,2],0),t.expectUint8(Qt,0);let[o,c]=t.expectASN1Length(
0);this.serialNumber=t.subarray(c()),o(),t.expectUint8(ae,0);let[u,l]=t.expectASN1Length(
0);t.expectUint8(Je,0),this.algorithm=t.readASN1OID(),l()>0&&(t.expectUint8(Ar,0),
t.expectUint8(0,0)),u(),this.issuer=xi(t,"issuer");let h,f;t.expectUint8(ae,0);let[
g]=t.expectASN1Length(0),p=t.readUint8();if(p===bi)h=t.readASN1UTCTime();else if(p===
Ei)h=t.readASN1GeneralizedTime();else throw new Error(`Unexpected validity start\
 type 0x${Z([p])}`);let E=t.readUint8();if(E===bi)f=t.readASN1UTCTime();else if(E===
Ei)f=t.readASN1GeneralizedTime();else throw new Error(`Unexpected validity end t\
ype 0x${Z([E])}`);this.validityPeriod={notBefore:h,notAfter:f},g(),this.subject=
xi(t,"subject");let C=t.offset;t.expectUint8(ae,0);let[v]=t.expectASN1Length(0);
t.expectUint8(ae,0);let[A,S]=t.expectASN1Length(0),m=[];for(;S()>0;){let W=t.readUint8();
if(W===Je){let oe=t.readASN1OID();m.push(oe)}else W===Ar&&t.expectUint8(0,0)}A(),
t.expectUint8(vr,0);let x=t.readASN1BitString();this.publicKey={identifiers:m,data:x,
all:t.data.subarray(C,t.offset)},v(),t.expectUint8(oc,0);let[N]=t.expectASN1Length();
t.expectUint8(ae,0);let[_,D]=t.expectASN1Length(0);for(;D()>0;){t.expectUint8(ae,
0);let[W,oe]=t.expectASN1Length();t.expectUint8(Je,0);let ee=t.readASN1OID();if(ee===
"2.5.29.17"){t.expectUint8(_e,0);let[j]=t.expectASN1Length(0);t.expectUint8(ae,0);
let H=uc(t,ze);this.subjectAltNames=H.filter(Q=>Q.type===(2|ze)).map(Q=>Q.name),
j()}else if(ee==="2.5.29.15"){let j,H=t.readUint8();if(H===xr&&(j=t.readASN1Boolean(
0),H=t.readUint8()),H!==_e)throw new Error(`Expected 0x${Z([_e])}, got 0x${Z([H])}`);
let[Q]=t.expectASN1Length(0);t.expectUint8(vr,0);let V=t.readASN1BitString(),k=cc(
V),q=new Set(fc.filter((M,F)=>k&1<<F));Q(),this.keyUsage={critical:j,usages:q}}else if(ee===
"2.5.29.37"){this.extKeyUsage={},t.expectUint8(_e,0);let[j]=t.expectASN1Length(0);
t.expectUint8(ae,0);let[H,Q]=t.expectASN1Length(0);for(;Q()>0;){t.expectUint8(Je,
0);let V=t.readASN1OID();V==="1.3.6.1.5.5.7.3.1"&&(this.extKeyUsage.serverTls=!0),
V==="1.3.6.1.5.5.7.3.2"&&(this.extKeyUsage.clientTls=!0)}H(),j()}else if(ee==="2\
.5.29.35"){t.expectUint8(_e,0);let[j]=t.expectASN1Length(0);t.expectUint8(ae,0);
let[H,Q]=t.expectASN1Length(0);for(;Q()>0;){let V=t.readUint8();if(V===(ze|0)){let[
k,q]=t.expectASN1Length(0);this.authorityKeyIdentifier=t.readBytes(q()),k()}else if(V===
(ze|1)){let[k,q]=t.expectASN1Length(0);t.skip(q(),0),k()}else if(V===(ze|2)){let[
k,q]=t.expectASN1Length(0);t.skip(q(),0),k()}else if(V===(ze|33)){let[k,q]=t.expectASN1Length(
0);t.skip(q(),0),k()}else throw new Error(`Unexpected data type ${V} in authorit\
yKeyIdentifier certificate extension`)}H(),j()}else if(ee==="2.5.29.14"){t.expectUint8(
_e,0);let[j]=t.expectASN1Length(0);t.expectUint8(_e,0);let[H,Q]=t.expectASN1Length(
0);this.subjectKeyIdentifier=t.readBytes(Q()),H(),j()}else if(ee==="2.5.29.19"){
let j,H=t.readUint8();if(H===xr&&(j=t.readASN1Boolean(0),H=t.readUint8()),H!==_e)
throw new Error("Unexpected type in certificate basic constraints");let[Q]=t.expectASN1Length(
0);t.expectUint8(ae,0);let[V,k]=t.expectASN1Length(),q;k()>0&&(t.expectUint8(xr,
0),q=t.readASN1Boolean(0));let M;if(k()>0){t.expectUint8(Qt,0);let F=t.readASN1Length(
0);if(M=F===1?t.readUint8():F===2?t.readUint16():F===3?t.readUint24():void 0,M===
void 0)throw new Error("Too many bytes in max path length in certificate basicCo\
nstraints")}V(),Q(),this.basicConstraints={critical:j,ca:q,pathLength:M}}else t.
skip(oe(),0);W()}_(),N(),s(),this.signedData=t.data.subarray(i,t.offset),t.expectUint8(
ae,0);let[Y,te]=t.expectASN1Length(0);t.expectUint8(Je,0);let P=t.readASN1OID(0);
if(te()>0&&(t.expectUint8(Ar,0),t.expectUint8(0,0)),Y(),P!==this.algorithm)throw new Error(
`Certificate specifies different signature algorithms inside(${this.algorithm}) \
and out(${P})`);t.expectUint8(vr,0),this.signature=t.readASN1BitString(),n()}else
this.serialNumber=Pe(e.serialNumber),this.algorithm=e.algorithm,this.issuer=e.issuer,
this.validityPeriod={notBefore:new Date(e.validityPeriod.notBefore),notAfter:new Date(
e.validityPeriod.notAfter)},this.subject=e.subject,this.publicKey={identifiers:e.
publicKey.identifiers,data:Pe(e.publicKey.data),all:Pe(e.publicKey.all)},this.signature=
Pe(e.signature),this.keyUsage={critical:e.keyUsage.critical,usages:new Set(e.keyUsage.
usages)},this.subjectAltNames=e.subjectAltNames,this.extKeyUsage=e.extKeyUsage,e.
authorityKeyIdentifier&&(this.authorityKeyIdentifier=Pe(e.authorityKeyIdentifier)),
e.subjectKeyIdentifier&&(this.subjectKeyIdentifier=Pe(e.subjectKeyIdentifier)),this.
basicConstraints=e.basicConstraints,this.signedData=Pe(e.signedData)}static distinguishedNamesAreEqual(e,t){
return this.stringFromDistinguishedName(e)===this.stringFromDistinguishedName(t)}static stringFromDistinguishedName(e){
return Object.entries(e).map(([t,n])=>typeof n=="string"?`${t}=${n.trim().replace(
/[\\,]/g,"\\$&")}`:n.map(i=>`${t}=${i.trim().replace(/[\\,]/g,"\\$&")}`).join(",\
 ")).join(", ")}subjectAltNameMatchingHost(e){let t=/[.][^.]+[.][^.]+$/;return(this.
subjectAltNames??[]).find(n=>{let i=n,s=e;if(t.test(e)&&t.test(i)&&i.startsWith(
"*.")&&(i=i.slice(1),s=s.slice(s.indexOf("."))),i===s)return!0})}isValidAtMoment(e=new Date){
return e>=this.validityPeriod.notBefore&&e<=this.validityPeriod.notAfter}description(){
return"subject: "+Lr.stringFromDistinguishedName(this.subject)+(this.subjectAltNames?
`
subject alt names: `+this.subjectAltNames.join(", "):"")+(this.subjectKeyIdentifier?
`
subject key id: ${Z(this.subjectKeyIdentifier," ")}`:"")+`
issuer: `+Lr.stringFromDistinguishedName(this.issuer)+(this.authorityKeyIdentifier?
`
authority key id: ${Z(this.authorityKeyIdentifier," ")}`:"")+`
validity: `+this.validityPeriod.notBefore.toISOString()+" \u2013 "+this.validityPeriod.
notAfter.toISOString()+` (${this.isValidAtMoment()?"currently valid":"not valid"}\
)`+(this.keyUsage?`
key usage (${this.keyUsage.critical?"critical":"non-critical"}): `+[...this.keyUsage.
usages].join(", "):"")+(this.extKeyUsage?`
extended key usage: TLS server \u2014\xA0${this.extKeyUsage.serverTls}, TLS clie\
nt \u2014\xA0${this.extKeyUsage.clientTls}`:"")+(this.basicConstraints?`
basic constraints (${this.basicConstraints.critical?"critical":"non-critical"}):\
 CA \u2014\xA0${this.basicConstraints.ca}, path length \u2014 ${this.basicConstraints.
pathLength}`:"")+`
signature algorithm: `+hc(lc(this.algorithm))}toJSON(){return{serialNumber:Z(this.
serialNumber),algorithm:this.algorithm,issuer:this.issuer,validityPeriod:{notBefore:this.
validityPeriod.notBefore.toISOString(),notAfter:this.validityPeriod.notAfter.toISOString()},
subject:this.subject,publicKey:{identifiers:this.publicKey.identifiers,data:Z(this.
publicKey.data),all:Z(this.publicKey.all)},signature:Z(this.signature),keyUsage:{
critical:this.keyUsage?.critical,usages:[...this.keyUsage?.usages??[]]},subjectAltNames:this.
subjectAltNames,extKeyUsage:this.extKeyUsage,authorityKeyIdentifier:this.authorityKeyIdentifier&&
Z(this.authorityKeyIdentifier),subjectKeyIdentifier:this.subjectKeyIdentifier&&Z(
this.subjectKeyIdentifier),basicConstraints:this.basicConstraints,signedData:Z(this.
signedData)}}static uint8ArraysFromPEM(e){let t="[A-Z0-9 ]+",n=new RegExp(`-----\
BEGIN ${t}-----([a-zA-Z0-9=+\\/\\n\\r]+)-----END ${t}-----`,"g"),i=[],s=null;for(;s=
n.exec(e);){let o=s[1].replace(/[\r\n]/g,""),c=Ci(o);i.push(c)}return i}static fromPEM(e){
return this.uint8ArraysFromPEM(e).map(t=>new this(t))}},mt=class extends Ir{static{
a(this,"TrustedCert")}static databaseFromPEM(r){let e=this.uint8ArraysFromPEM(r),
t=[0],n={},i=new Qa;for(let o of e){let c=new this(o),u=t.length-1;c.subjectKeyIdentifier&&
(n[Z(c.subjectKeyIdentifier)]=u),n[this.stringFromDistinguishedName(c.subject)]=
u,i.append(o),t[t.length]=t[u]+o.length}let s=i.getData();return{index:{offsets:t,
subjects:n},data:s}}static findInDatabase(r,e){let{index:{subjects:t,offsets:n},
data:i}=e,s=typeof r=="string"?r:Ir.stringFromDistinguishedName(r),o=t[s];if(o===
void 0)return;let c=n[o],u=n[o+1],l=i.subarray(c,u);return new this(l)}};async function Ri(r,e,t,n,i){
r.expectUint8(ae,0);let[s]=r.expectASN1Length(0);r.expectUint8(Qt,0);let[o,c]=r.
expectASN1Length(0),u=r.readBytes(c());o(),r.expectUint8(Qt,0);let[l,h]=r.expectASN1Length(
0),f=r.readBytes(h());l(),s();let g=a((A,S)=>A.length>S?A.subarray(A.length-S):A.
length<S?ce(new Uint8Array(S-A.length),A):A,"clampToLength"),p=n==="P-256"?32:48,
E=ce(g(u,p),g(f,p)),C=await O.importKey("spki",e,{name:"ECDSA",namedCurve:n},!1,
["verify"]);if(await O.verify({name:"ECDSA",hash:i},C,E,t)!==!0)throw new Error(
"ECDSA-SECP256R1-SHA256 certificate verify failed")}a(Ri,"ecdsaVerify");async function dc(r,e,t,n=!0,i=!0){
for(let l of e);let s=e[0];if(s.subjectAltNameMatchingHost(r)===void 0)throw new Error(
`No matching subjectAltName for ${r}`);if(!s.isValidAtMoment())throw new Error("\
End-user certificate is not valid now");if(n&&!s.extKeyUsage?.serverTls)throw new Error(
"End-user certificate has no TLS server extKeyUsage");let u=!1;for(let l=0,h=e.length;l<
h;l++){let f=e[l],g=f.authorityKeyIdentifier,p;if(g===void 0?p=mt.findInDatabase(
f.issuer,t):p=mt.findInDatabase(Z(g),t),p===void 0&&(p=e[l+1]),p===void 0)throw new Error(
"Ran out of certificates before reaching trusted root");let E=p instanceof mt;if(p.
isValidAtMoment()!==!0)throw new Error("Signing certificate is not valid now");if(i&&
p.keyUsage?.usages.has("digitalSignature")!==!0)throw new Error("Signing certifi\
cate keyUsage does not include digital signatures");if(p.basicConstraints?.ca!==
!0)throw new Error("Signing certificate basicConstraints do not indicate a CA ce\
rtificate");let{pathLength:C}=p.basicConstraints;if(C!==void 0){if(C<l)throw new Error(
"Exceeded certificate pathLength")}if(f.algorithm==="1.2.840.10045.4.3.2"||f.algorithm===
"1.2.840.10045.4.3.3"){let v=f.algorithm==="1.2.840.10045.4.3.2"?"SHA-256":"SHA-\
384",A=p.publicKey.identifiers,S=A.includes("1.2.840.10045.3.1.7")?"P-256":A.includes(
"1.3.132.0.34")?"P-384":void 0;if(S===void 0)throw new Error("Unsupported signin\
g key curve");let m=new yt(f.signature);await Ri(m,p.publicKey.all,f.signedData,
S,v)}else if(f.algorithm==="1.2.840.113549.1.1.11"||f.algorithm==="1.2.840.11354\
9.1.1.12"){let v=f.algorithm==="1.2.840.113549.1.1.11"?"SHA-256":"SHA-384",A=await O.
importKey("spki",p.publicKey.all,{name:"RSASSA-PKCS1-v1_5",hash:v},!1,["verify"]);
if(await O.verify({name:"RSASSA-PKCS1-v1_5"},A,f.signature,f.signedData)!==!0)throw new Error(
"RSASSA_PKCS1-v1_5-SHA256 certificate verify failed")}else throw new Error("Unsu\
pported signing algorithm");if(E){u=!0;break}}return u}a(dc,"verifyCerts");var pc=new TextEncoder;
async function yc(r,e,t,n,i,s=!0,o=!0){let c=new yt(await e());c.expectUint8(8,0);
let[u]=c.expectLengthUint24(),[l,h]=c.expectLengthUint16(0);for(;h()>0;){let F=c.
readUint16(0);if(F===0)c.expectUint16(0,0);else if(F===10){let[X]=c.expectLengthUint16(
0),[fe,xe]=c.expectLengthUint16(0);for(;xe()>0;){let $e=c.readUint16()}fe(),X()}else
throw new Error(`Unsupported server encrypted extension type 0x${Z([F]).padStart(
4,"0")}`)}l(),u(),c.remaining()===0&&c.extend(await e());let f=!1,g=c.readUint8();
if(g===13){f=!0;let[F]=c.expectLengthUint24("certificate request data");c.expectUint8(
0,0);let[X,fe]=c.expectLengthUint16("certificate request extensions");c.skip(fe(),
0),X(),F(),c.remaining()===0&&c.extend(await e()),g=c.readUint8()}if(g!==11)throw new Error(
`Unexpected handshake message type 0x${Z([g])}`);let[p]=c.expectLengthUint24(0);
c.expectUint8(0,0);let[E,C]=c.expectLengthUint24(0),v=[];for(;C()>0;){let[F]=c.expectLengthUint24(
0),X=new Ir(c);v.push(X),F();let[fe,xe]=c.expectLengthUint16("certificate extens\
ions");c.skip(xe()),fe()}if(E(),p(),v.length===0)throw new Error("No certificate\
s supplied");let A=v[0],S=c.data.subarray(0,c.offset),m=ce(n,S),x=await O.digest(
"SHA-256",m),N=new Uint8Array(x),_=ce(pc.encode(" ".repeat(64)+"TLS 1.3, server \
CertificateVerify"),[0],N);c.remaining()===0&&c.extend(await e()),c.expectUint8(
15,0);let[D]=c.expectLengthUint24(0),Y=c.readUint16();if(Y===1027){let[F]=c.expectLengthUint16();
await Ri(c,A.publicKey.all,_,"P-256","SHA-256"),F()}else if(Y===2052){let[F,X]=c.
expectLengthUint16(),fe=c.subarray(X());F();let xe=await O.importKey("spki",A.publicKey.
all,{name:"RSA-PSS",hash:"SHA-256"},!1,["verify"]);if(await O.verify({name:"RSA-\
PSS",saltLength:32},xe,fe,_)!==!0)throw new Error("RSA-PSS-RSAE-SHA256 certifica\
te verify failed")}else throw new Error(`Unsupported certificate verify signatur\
e type 0x${Z([Y]).padStart(4,"0")}`);D();let te=c.data.subarray(0,c.offset),P=ce(
n,te),W=await ue(t,"finished",new Uint8Array(0),32,256),oe=await O.digest("SHA-2\
56",P),ee=await O.importKey("raw",W,{name:"HMAC",hash:{name:"SHA-256"}},!1,["sig\
n"]),j=await O.sign("HMAC",ee,oe),H=new Uint8Array(j);c.remaining()===0&&c.extend(
await e()),c.expectUint8(20,0);let[Q,V]=c.expectLengthUint24(0),k=c.readBytes(V());
if(Q(),c.remaining()!==0)throw new Error("Unexpected extra bytes in server hands\
hake");if(Ht(k,H)!==!0)throw new Error("Invalid server verify hash");if(!await dc(
r,v,i,s,o))throw new Error("Validated certificate chain did not end in a trusted\
 root");return[c.data,f]}a(yc,"readEncryptedHandshake");async function mc(r,e,t,n,{
useSNI:i,requireServerTlsExtKeyUsage:s,requireDigitalSigKeyUsage:o,writePreData:c,
expectPreData:u,commentPreData:l}={}){i??(i=!0),s??(s=!0),o??(o=!0),typeof e=="s\
tring"&&(e=mt.databaseFromPEM(e));let h=await O.generateKey({name:"ECDH",namedCurve:"\
P-256"},!0,["deriveKey","deriveBits"]),f=await O.exportKey("raw",h.publicKey),g=new Uint8Array(
f),p=new Uint8Array(32);await Ai(p);let C=(await ja(r,g,p,i)).array(),v=c?ce(c,C):
C;if(n(v),u){let re=await t(u.length);if(!re||!Ht(re,u))throw new Error("Pre dat\
a did not match expectation")}let A=await Tr(t,22);if(A===void 0)throw new Error(
"Connection closed while awaiting server hello");let S=new Ce(A.content),m=Ka(S,
p),x=await Tr(t,20);if(x===void 0)throw new Error("Connection closed awaiting se\
rver cipher change");let N=new Ce(x.content),[_]=N.expectLength(1);N.expectUint8(
1,0),_();let D=C.subarray(5),Y=A.content,te=ce(D,Y),P=await Ya(m,h.privateKey,te,
256,16),W=await O.importKey("raw",P.serverHandshakeKey,{name:"AES-GCM"},!1,["dec\
rypt"]),oe=new Ot("decrypt",W,P.serverHandshakeIV),ee=await O.importKey("raw",P.
clientHandshakeKey,{name:"AES-GCM"},!1,["encrypt"]),j=new Ot("encrypt",ee,P.clientHandshakeIV),
H=a(async()=>{let re=await Rr(t,oe,22);if(re===void 0)throw new Error("Premature\
 end of encrypted server handshake");return re},"readHandshakeRecord"),[Q,V]=await yc(
r,H,P.serverSecret,te,e,s,o),k=new Ce(6);k.writeUint8(20,0),k.writeUint16(771,0);
let q=k.writeLengthUint16();k.writeUint8(1,0),q();let M=k.array(),F=new Uint8Array(
0);if(V){let re=new Ce(8);re.writeUint8(11,0);let at=re.writeLengthUint24("clien\
t certificate data");re.writeUint8(0,0),re.writeUint24(0,0),at(),F=re.array()}let X=ce(
te,Q,F),fe=await O.digest("SHA-256",X),xe=new Uint8Array(fe),$e=await ue(P.clientSecret,
"finished",new Uint8Array(0),32,256),hr=await O.importKey("raw",$e,{name:"HMAC",
hash:{name:"SHA-256"}},!1,["sign"]),Hn=await O.sign("HMAC",hr,xe),jo=new Uint8Array(
Hn),Nt=new Ce(36);Nt.writeUint8(20,0);let Ko=Nt.writeLengthUint24(0);Nt.writeBytes(
jo),Ko();let Wo=Nt.array(),$n=await wi(ce(F,Wo),j,22),jn=xe;if(F.length>0){let re=X.
subarray(0,X.length-F.length),at=await O.digest("SHA-256",re);jn=new Uint8Array(
at)}let Mt=await Za(P.handshakeSecret,jn,256,16),Vo=await O.importKey("raw",Mt.clientApplicationKey,
{name:"AES-GCM"},!0,["encrypt"]),Go=new Ot("encrypt",Vo,Mt.clientApplicationIV),
zo=await O.importKey("raw",Mt.serverApplicationKey,{name:"AES-GCM"},!0,["decrypt"]),
Jo=new Ot("decrypt",zo,Mt.serverApplicationIV),Ft=!1;return[a(()=>{if(!Ft){let re=ce(
M,...$n);n(re),Ft=!0}return Rr(t,Jo)},"read"),a(async re=>{let at=Ft;Ft=!0;let Kn=await wi(
re,Go,23),Yo=at?ce(...Kn):ce(M,...$n,...Kn);n(Yo)},"write")]}a(mc,"startTls");var Ui=class{static{
a(this,"ReadQueue")}constructor(){K(this,"queue"),K(this,"outstandingRequest"),this.
queue=[]}enqueue(r){this.queue.push(r),this.dequeue()}dequeue(){if(this.outstandingRequest===
void 0)return;let{resolve:r,bytes:e}=this.outstandingRequest,t=this.bytesInQueue();
if(t<e&&this.socketIsNotClosed())return;if(e=Math.min(e,t),e===0)return r(void 0);
this.outstandingRequest=void 0;let n=this.queue[0],i=n.length;if(i===e)return this.
queue.shift(),r(n);if(i>e)return this.queue[0]=n.subarray(e),r(n.subarray(0,e));
{let s=new Uint8Array(e),o=e,c=0;for(;o>0;){let u=this.queue[0],l=u.length;l<=o?
(this.queue.shift(),s.set(u,c),c+=l,o-=l):(this.queue[0]=u.subarray(o),s.set(u.subarray(
0,o),c),o-=o,c+=o)}return r(s)}}bytesInQueue(){return this.queue.reduce((r,e)=>r+
e.length,0)}async read(r){if(this.outstandingRequest!==void 0)throw new Error("C\
an\u2019t read while already awaiting read");return new Promise(e=>{this.outstandingRequest=
{resolve:e,bytes:r},this.dequeue()})}},gc=class extends Ui{static{a(this,"WebSoc\
ketReadQueue")}constructor(r){super(),this.socket=r,r.addEventListener("message",
e=>this.enqueue(new Uint8Array(e.data))),r.addEventListener("close",()=>this.dequeue())}socketIsNotClosed(){
let{socket:r}=this,{readyState:e}=r;return e<=1}},wc=class extends Ui{static{a(this,
"SocketReadQueue")}constructor(r){super(),this.socket=r,r.on("data",e=>this.enqueue(
new Uint8Array(e))),r.on("close",()=>this.dequeue())}socketIsNotClosed(){let{socket:r}=this,
{readyState:e}=r;return e==="opening"||e==="open"}};function Sc(r,e=(n,i)=>i,t){
return JSON.stringify(r,a((i,s)=>e(i,typeof s!="object"||s===null||Array.isArray(
s)?s:Object.fromEntries(Object.entries(s).sort(([o],[c])=>o<c?-1:o>c?1:0))),"det\
erministicReplacer"),t)}a(Sc,"stableStringify");var Ii=`-----BEGIN CERTIFICATE-----
MIIFazCCA1OgAwIBAgIRAIIQz7DSQONZRGPgu2OCiwAwDQYJKoZIhvcNAQELBQAw
TzELMAkGA1UEBhMCVVMxKTAnBgNVBAoTIEludGVybmV0IFNlY3VyaXR5IFJlc2Vh
cmNoIEdyb3VwMRUwEwYDVQQDEwxJU1JHIFJvb3QgWDEwHhcNMTUwNjA0MTEwNDM4
WhcNMzUwNjA0MTEwNDM4WjBPMQswCQYDVQQGEwJVUzEpMCcGA1UEChMgSW50ZXJu
ZXQgU2VjdXJpdHkgUmVzZWFyY2ggR3JvdXAxFTATBgNVBAMTDElTUkcgUm9vdCBY
MTCCAiIwDQYJKoZIhvcNAQEBBQADggIPADCCAgoCggIBAK3oJHP0FDfzm54rVygc
h77ct984kIxuPOZXoHj3dcKi/vVqbvYATyjb3miGbESTtrFj/RQSa78f0uoxmyF+
0TM8ukj13Xnfs7j/EvEhmkvBioZxaUpmZmyPfjxwv60pIgbz5MDmgK7iS4+3mX6U
A5/TR5d8mUgjU+g4rk8Kb4Mu0UlXjIB0ttov0DiNewNwIRt18jA8+o+u3dpjq+sW
T8KOEUt+zwvo/7V3LvSye0rgTBIlDHCNAymg4VMk7BPZ7hm/ELNKjD+Jo2FR3qyH
B5T0Y3HsLuJvW5iB4YlcNHlsdu87kGJ55tukmi8mxdAQ4Q7e2RCOFvu396j3x+UC
B5iPNgiV5+I3lg02dZ77DnKxHZu8A/lJBdiB3QW0KtZB6awBdpUKD9jf1b0SHzUv
KBds0pjBqAlkd25HN7rOrFleaJ1/ctaJxQZBKT5ZPt0m9STJEadao0xAH0ahmbWn
OlFuhjuefXKnEgV4We0+UXgVCwOPjdAvBbI+e0ocS3MFEvzG6uBQE3xDk3SzynTn
jh8BCNAw1FtxNrQHusEwMFxIt4I7mKZ9YIqioymCzLq9gwQbooMDQaHWBfEbwrbw
qHyGO0aoSCqI3Haadr8faqU9GY/rOPNk3sgrDQoo//fb4hVC1CLQJ13hef4Y53CI
rU7m2Ys6xt0nUW7/vGT1M0NPAgMBAAGjQjBAMA4GA1UdDwEB/wQEAwIBBjAPBgNV
HRMBAf8EBTADAQH/MB0GA1UdDgQWBBR5tFnme7bl5AFzgAiIyBpY9umbbjANBgkq
hkiG9w0BAQsFAAOCAgEAVR9YqbyyqFDQDLHYGmkgJykIrGF1XIpu+ILlaS/V9lZL
ubhzEFnTIZd+50xx+7LSYK05qAvqFyFWhfFQDlnrzuBZ6brJFe+GnY+EgPbk6ZGQ
3BebYhtF8GaV0nxvwuo77x/Py9auJ/GpsMiu/X1+mvoiBOv/2X/qkSsisRcOj/KK
NFtY2PwByVS5uCbMiogziUwthDyC3+6WVwW6LLv3xLfHTjuCvjHIInNzktHCgKQ5
ORAzI4JMPJ+GslWYHb4phowim57iaztXOoJwTdwJx4nLCgdNbOhdjsnvzqvHu7Ur
TkXWStAmzOVyyghqpZXjFaH3pO3JLF+l+/+sKAIuvtd7u+Nxe5AW0wdeRlN8NwdC
jNPElpzVmbUq4JUagEiuTDkHzsxHpFKVK7q4+63SM1N95R1NbdWhscdCb+ZAJzVc
oyi3B43njTOQ5yOf+1CceWxG1bQVs5ZufpsMljq4Ui0/1lvh+wjChP4kqKOJ2qxq
4RgqsahDYVvTH9w7jXbyLeiNdd8XM2w9U/t7y0Ff/9yi0GE44Za4rF2LN9d11TPA
mRGunUHBcnWEvgJBQl9nJEiU0Zsnvgc/ubhPgXRR4Xq37Z0j4r7g1SgEEzwxA57d
emyPxgcYxn/eR44/KJ4EBs+lVDR3veyJm+kXQ99b21/+jh5Xos1AnX5iItreGCc=
-----END CERTIFICATE-----
`;y();var Ec=Object.getOwnPropertyNames,xc=Object.getOwnPropertySymbols,Ac=Object.prototype.
hasOwnProperty;function Li(r,e){return a(function(n,i,s){return r(n,i,s)&&e(n,i,
s)},"isEqual")}a(Li,"combineComparators");function $t(r){return a(function(t,n,i){
if(!t||!n||typeof t!="object"||typeof n!="object")return r(t,n,i);var s=i.cache,
o=s.get(t),c=s.get(n);if(o&&c)return o===n&&c===t;s.set(t,n),s.set(n,t);var u=r(
t,n,i);return s.delete(t),s.delete(n),u},"isCircular")}a($t,"createIsCircular");
function _i(r){return Ec(r).concat(xc(r))}a(_i,"getStrictProperties");var vc=Object.
hasOwn||function(r,e){return Ac.call(r,e)};function Qe(r,e){return r===e||!r&&!e&&
r!==r&&e!==e}a(Qe,"sameValueZeroEqual");var Cc="__v",Tc="__o",Rc="_owner",Pi=Object.
getOwnPropertyDescriptor,Bi=Object.keys;function Uc(r,e,t){var n=r.length;if(e.length!==
n)return!1;for(;n-- >0;)if(!t.equals(r[n],e[n],n,n,r,e,t))return!1;return!0}a(Uc,
"areArraysEqual");function Ic(r,e){return Qe(r.getTime(),e.getTime())}a(Ic,"areD\
atesEqual");function Lc(r,e){return r.name===e.name&&r.message===e.message&&r.cause===
e.cause&&r.stack===e.stack}a(Lc,"areErrorsEqual");function _c(r,e){return r===e}
a(_c,"areFunctionsEqual");function Ni(r,e,t){var n=r.size;if(n!==e.size)return!1;
if(!n)return!0;for(var i=new Array(n),s=r.entries(),o,c,u=0;(o=s.next())&&!o.done;){
for(var l=e.entries(),h=!1,f=0;(c=l.next())&&!c.done;){if(i[f]){f++;continue}var g=o.
value,p=c.value;if(t.equals(g[0],p[0],u,f,r,e,t)&&t.equals(g[1],p[1],g[0],p[0],r,
e,t)){h=i[f]=!0;break}f++}if(!h)return!1;u++}return!0}a(Ni,"areMapsEqual");var Pc=Qe;
function Bc(r,e,t){var n=Bi(r),i=n.length;if(Bi(e).length!==i)return!1;for(;i-- >
0;)if(!ki(r,e,t,n[i]))return!1;return!0}a(Bc,"areObjectsEqual");function gt(r,e,t){
var n=_i(r),i=n.length;if(_i(e).length!==i)return!1;for(var s,o,c;i-- >0;)if(s=n[i],
!ki(r,e,t,s)||(o=Pi(r,s),c=Pi(e,s),(o||c)&&(!o||!c||o.configurable!==c.configurable||
o.enumerable!==c.enumerable||o.writable!==c.writable)))return!1;return!0}a(gt,"a\
reObjectsEqualStrict");function Nc(r,e){return Qe(r.valueOf(),e.valueOf())}a(Nc,
"arePrimitiveWrappersEqual");function Mc(r,e){return r.source===e.source&&r.flags===
e.flags}a(Mc,"areRegExpsEqual");function Mi(r,e,t){var n=r.size;if(n!==e.size)return!1;
if(!n)return!0;for(var i=new Array(n),s=r.values(),o,c;(o=s.next())&&!o.done;){for(var u=e.
values(),l=!1,h=0;(c=u.next())&&!c.done;){if(!i[h]&&t.equals(o.value,c.value,o.value,
c.value,r,e,t)){l=i[h]=!0;break}h++}if(!l)return!1}return!0}a(Mi,"areSetsEqual");
function Fc(r,e){var t=r.length;if(e.length!==t)return!1;for(;t-- >0;)if(r[t]!==
e[t])return!1;return!0}a(Fc,"areTypedArraysEqual");function qc(r,e){return r.hostname===
e.hostname&&r.pathname===e.pathname&&r.protocol===e.protocol&&r.port===e.port&&r.
hash===e.hash&&r.username===e.username&&r.password===e.password}a(qc,"areUrlsEqu\
al");function ki(r,e,t,n){return(n===Rc||n===Tc||n===Cc)&&(r.$$typeof||e.$$typeof)?
!0:vc(e,n)&&t.equals(r[n],e[n],n,n,r,e,t)}a(ki,"isPropertyEqual");var kc="[objec\
t Arguments]",Dc="[object Boolean]",Oc="[object Date]",Qc="[object Error]",Hc="[\
object Map]",$c="[object Number]",jc="[object Object]",Kc="[object RegExp]",Wc="\
[object Set]",Vc="[object String]",Gc="[object URL]",zc=Array.isArray,Fi=typeof ArrayBuffer==
"function"&&ArrayBuffer.isView?ArrayBuffer.isView:null,qi=Object.assign,Jc=Object.
prototype.toString.call.bind(Object.prototype.toString);function Yc(r){var e=r.areArraysEqual,
t=r.areDatesEqual,n=r.areErrorsEqual,i=r.areFunctionsEqual,s=r.areMapsEqual,o=r.
areNumbersEqual,c=r.areObjectsEqual,u=r.arePrimitiveWrappersEqual,l=r.areRegExpsEqual,
h=r.areSetsEqual,f=r.areTypedArraysEqual,g=r.areUrlsEqual;return a(function(E,C,v){
if(E===C)return!0;if(E==null||C==null)return!1;var A=typeof E;if(A!==typeof C)return!1;
if(A!=="object")return A==="number"?o(E,C,v):A==="function"?i(E,C,v):!1;var S=E.
constructor;if(S!==C.constructor)return!1;if(S===Object)return c(E,C,v);if(zc(E))
return e(E,C,v);if(Fi!=null&&Fi(E))return f(E,C,v);if(S===Date)return t(E,C,v);if(S===
RegExp)return l(E,C,v);if(S===Map)return s(E,C,v);if(S===Set)return h(E,C,v);var m=Jc(
E);return m===Oc?t(E,C,v):m===Kc?l(E,C,v):m===Hc?s(E,C,v):m===Wc?h(E,C,v):m===jc?
typeof E.then!="function"&&typeof C.then!="function"&&c(E,C,v):m===Gc?g(E,C,v):m===
Qc?n(E,C,v):m===kc?c(E,C,v):m===Dc||m===$c||m===Vc?u(E,C,v):!1},"comparator")}a(
Yc,"createEqualityComparator");function Zc(r){var e=r.circular,t=r.createCustomConfig,
n=r.strict,i={areArraysEqual:n?gt:Uc,areDatesEqual:Ic,areErrorsEqual:Lc,areFunctionsEqual:_c,
areMapsEqual:n?Li(Ni,gt):Ni,areNumbersEqual:Pc,areObjectsEqual:n?gt:Bc,arePrimitiveWrappersEqual:Nc,
areRegExpsEqual:Mc,areSetsEqual:n?Li(Mi,gt):Mi,areTypedArraysEqual:n?gt:Fc,areUrlsEqual:qc};
if(t&&(i=qi({},i,t(i))),e){var s=$t(i.areArraysEqual),o=$t(i.areMapsEqual),c=$t(
i.areObjectsEqual),u=$t(i.areSetsEqual);i=qi({},i,{areArraysEqual:s,areMapsEqual:o,
areObjectsEqual:c,areSetsEqual:u})}return i}a(Zc,"createEqualityComparatorConfig");
function Xc(r){return function(e,t,n,i,s,o,c){return r(e,t,c)}}a(Xc,"createInter\
nalEqualityComparator");function eu(r){var e=r.circular,t=r.comparator,n=r.createState,
i=r.equals,s=r.strict;if(n)return a(function(u,l){var h=n(),f=h.cache,g=f===void 0?
e?new WeakMap:void 0:f,p=h.meta;return t(u,l,{cache:g,equals:i,meta:p,strict:s})},
"isEqual");if(e)return a(function(u,l){return t(u,l,{cache:new WeakMap,equals:i,
meta:void 0,strict:s})},"isEqual");var o={cache:void 0,equals:i,meta:void 0,strict:s};
return a(function(u,l){return t(u,l,o)},"isEqual")}a(eu,"createIsEqual");var Pr=Be(),
Of=Be({strict:!0}),Qf=Be({circular:!0}),Hf=Be({circular:!0,strict:!0}),$f=Be({createInternalComparator:a(
function(){return Qe},"createInternalComparator")}),jf=Be({strict:!0,createInternalComparator:a(
function(){return Qe},"createInternalComparator")}),Kf=Be({circular:!0,createInternalComparator:a(
function(){return Qe},"createInternalComparator")}),Wf=Be({circular:!0,createInternalComparator:a(
function(){return Qe},"createInternalComparator"),strict:!0});function Be(r){r===
void 0&&(r={});var e=r.circular,t=e===void 0?!1:e,n=r.createInternalComparator,i=r.
createState,s=r.strict,o=s===void 0?!1:s,c=Zc(r),u=Yc(c),l=n?n(u):Xc(u);return eu(
{circular:t,comparator:u,createState:i,equals:l,strict:o})}a(Be,"createCustomEqu\
al");y();var lr=je(ur());tr();y();tr();sn();var Oo=je(Rt()),Qo=je(Xt());function Yh(r){return r instanceof w?"\\x"+r.toString("hex"):r}a(Yh,"encodeBuffe\
rsAsBytea");var Ie=class r extends Error{static{a(this,"NeonDbError")}name="Neon\
DbError";severity;code;detail;hint;position;internalPosition;internalQuery;where;schema;table;column;dataType;constraint;file;line;routine;sourceError;constructor(e){
super(e),"captureStackTrace"in Error&&typeof Error.captureStackTrace=="function"&&
Error.captureStackTrace(this,r)}},ko="transaction() expects an array of queries,\
 or a function returning an array of queries",Zh=["severity","code","detail","hi\
nt","position","internalPosition","internalQuery","where","schema","table","colu\
mn","dataType","constraint","file","line","routine"];function Te(r,{arrayMode:e,
fullResults:t,fetchOptions:n,isolationLevel:i,readOnly:s,deferrable:o,queryCallback:c,
resultCallback:u,authToken:l}={}){if(!r)throw new Error("No database connection \
string was provided to `neon()`. Perhaps an environment variable has not been se\
t?");let h;try{h=nn(r)}catch{throw new Error("Database connection string provide\
d to `neon()` is not a valid URL. Connection string: "+String(r))}let{protocol:f,
username:g,hostname:p,port:E,pathname:C}=h;if(f!=="postgres:"&&f!=="postgresql:"||
!g||!p||!C)throw new Error("Database connection string format for `neon()` shoul\
d be: postgresql://user:password@host.tld/dbname?option=value");function v(S,...m){
let x,N;if(typeof S=="string")x=S,N=m[1],m=m[0]??[];else{x="";for(let D=0;D<S.length;D++)
x+=S[D],D<m.length&&(x+="$"+(D+1))}m=m.map(D=>Yh((0,Oo.prepareValue)(D)));let _={
query:x,params:m};return c&&c(_),Xh(A,_,N)}a(v,"resolve"),v.transaction=async(S,m)=>{
if(typeof S=="function"&&(S=S(v)),!Array.isArray(S))throw new Error(ko);S.forEach(
_=>{if(_[Symbol.toStringTag]!=="NeonQueryPromise")throw new Error(ko)});let x=S.
map(_=>_.parameterizedQuery),N=S.map(_=>_.opts??{});return A(x,N,m)};async function A(S,m,x){
let{fetchEndpoint:N,fetchFunction:_}=Ee,D=Array.isArray(S)?{queries:S}:S,Y=n??{},
te=e??!1,P=t??!1,W=i,oe=s,ee=o;x!==void 0&&(x.fetchOptions!==void 0&&(Y={...Y,...x.
fetchOptions}),x.arrayMode!==void 0&&(te=x.arrayMode),x.fullResults!==void 0&&(P=
x.fullResults),x.isolationLevel!==void 0&&(W=x.isolationLevel),x.readOnly!==void 0&&
(oe=x.readOnly),x.deferrable!==void 0&&(ee=x.deferrable)),m!==void 0&&!Array.isArray(
m)&&m.fetchOptions!==void 0&&(Y={...Y,...m.fetchOptions});let j=l;!Array.isArray(
m)&&m?.authToken!==void 0&&(j=m.authToken);let H=typeof N=="function"?N(p,E,{jwtAuth:j!==
void 0}):N,Q={"Neon-Connection-String":r,"Neon-Raw-Text-Output":"true","Neon-Arr\
ay-Mode":"true"},V=await ef(j);V&&(Q.Authorization=`Bearer ${V}`),Array.isArray(
S)&&(W!==void 0&&(Q["Neon-Batch-Isolation-Level"]=W),oe!==void 0&&(Q["Neon-Batch\
-Read-Only"]=String(oe)),ee!==void 0&&(Q["Neon-Batch-Deferrable"]=String(ee)));let k;
try{k=await(_??fetch)(H,{method:"POST",body:JSON.stringify(D),headers:Q,...Y})}catch(q){
let M=new Ie(`Error connecting to database: ${q}`);throw M.sourceError=q,M}if(k.
ok){let q=await k.json();if(Array.isArray(S)){let M=q.results;if(!Array.isArray(
M))throw new Ie("Neon internal error: unexpected result format");return M.map((F,X)=>{
let fe=m[X]??{},xe=fe.arrayMode??te,$e=fe.fullResults??P;return Do(F,{arrayMode:xe,
fullResults:$e,parameterizedQuery:S[X],resultCallback:u,types:fe.types})})}else{
let M=m??{},F=M.arrayMode??te,X=M.fullResults??P;return Do(q,{arrayMode:F,fullResults:X,
parameterizedQuery:S,resultCallback:u,types:M.types})}}else{let{status:q}=k;if(q===
400){let M=await k.json(),F=new Ie(M.message);for(let X of Zh)F[X]=M[X]??void 0;
throw F}else{let M=await k.text();throw new Ie(`Server error (HTTP status ${q}):\
 ${M}`)}}}return a(A,"execute"),v}a(Te,"neon");function Xh(r,e,t){return{[Symbol.
toStringTag]:"NeonQueryPromise",parameterizedQuery:e,opts:t,then:a((n,i)=>r(e,t).
then(n,i),"then"),catch:a(n=>r(e,t).catch(n),"catch"),finally:a(n=>r(e,t).finally(
n),"finally")}}a(Xh,"createNeonQueryPromise");function Do(r,{arrayMode:e,fullResults:t,
parameterizedQuery:n,resultCallback:i,types:s}){let o=new Qo.default(s),c=r.fields.
map(h=>h.name),u=r.fields.map(h=>o.getTypeParser(h.dataTypeID)),l=e===!0?r.rows.
map(h=>h.map((f,g)=>f===null?null:u[g](f))):r.rows.map(h=>Object.fromEntries(h.map(
(f,g)=>[c[g],f===null?null:u[g](f)])));return i&&i(n,r,l,{arrayMode:e,fullResults:t}),
t?(r.viaNeonFetch=!0,r.rowAsArray=e,r.rows=l,r._parsers=u,r._types=o,r):l}a(Do,"\
processQueryResult");async function ef(r){if(typeof r=="string")return r;if(typeof r==
"function")try{return await Promise.resolve(r())}catch(e){let t=new Ie("Error ge\
tting auth token.");throw e instanceof Error&&(t=new Ie(`Error getting auth toke\
n: ${e.message}`)),t}}a(ef,"getAuthToken");var Ho=je(er()),Qn=je(ur());var qe=class extends lr.Client{constructor(t){super(t);this.config=t}static{a(this,
"NeonClient")}get neonConfig(){return this.connection.stream}connect(t){let{neonConfig:n}=this;
n.forceDisablePgSSL&&(this.ssl=this.connection.ssl=!1),this.ssl&&n.useSecureWebSocket&&
console.warn("SSL is enabled for both Postgres (e.g. ?sslmode=require in the con\
nection string + forceDisablePgSSL = false) and the WebSocket tunnel (useSecureW\
ebSocket = true). Double encryption will increase latency and CPU usage. It may \
be appropriate to disable SSL in the Postgres connection parameters or set force\
DisablePgSSL = true.");let i=this.config?.host!==void 0||this.config?.connectionString!==
void 0||b.env.PGHOST!==void 0,s=b.env.USER??b.env.USERNAME;if(!i&&this.host==="l\
ocalhost"&&this.user===s&&this.database===s&&this.password===null)throw new Error(
`No database host or connection string was set, and key parameters have default \
values (host: localhost, user: ${s}, db: ${s}, password: null). Is an environmen\
t variable missing? Alternatively, if you intended to connect with these paramet\
ers, please set the host to 'localhost' explicitly.`);let o=super.connect(t),c=n.
pipelineTLS&&this.ssl,u=n.pipelineConnect==="password";if(!c&&!n.pipelineConnect)
return o;let l=this.connection;if(c&&l.on("connect",()=>l.stream.emit("data","S")),
u){l.removeAllListeners("authenticationCleartextPassword"),l.removeAllListeners(
"readyForQuery"),l.once("readyForQuery",()=>l.on("readyForQuery",this._handleReadyForQuery.
bind(this)));let h=this.ssl?"sslconnect":"connect";l.on(h,()=>{this._handleAuthCleartextPassword(),
this._handleReadyForQuery()})}return o}async _handleAuthSASLContinue(t){if(typeof T>
"u"||T.subtle===void 0||T.subtle.importKey===void 0)throw new Error("Cannot use \
SASL auth when `crypto.subtle` is not defined");let n=T.subtle,i=this.saslSession,
s=this.password,o=t.data;if(i.message!=="SASLInitialResponse"||typeof s!="string"||
typeof o!="string")throw new Error("SASL: protocol error");let c=Object.fromEntries(
o.split(",").map(q=>{if(!/^.=/.test(q))throw new Error("SASL: Invalid attribute \
pair entry");let M=q[0],F=q.substring(2);return[M,F]})),u=c.r,l=c.s,h=c.i;if(!u||
!/^[!-+--~]+$/.test(u))throw new Error("SASL: SCRAM-SERVER-FIRST-MESSAGE: nonce \
missing/unprintable");if(!l||!/^(?:[a-zA-Z0-9+/]{4})*(?:[a-zA-Z0-9+/]{2}==|[a-zA-Z0-9+/]{3}=)?$/.
test(l))throw new Error("SASL: SCRAM-SERVER-FIRST-MESSAGE: salt missing/not base\
64");if(!h||!/^[1-9][0-9]*$/.test(h))throw new Error("SASL: SCRAM-SERVER-FIRST-M\
ESSAGE: missing/invalid iteration count");if(!u.startsWith(i.clientNonce))throw new Error(
"SASL: SCRAM-SERVER-FIRST-MESSAGE: server nonce does not start with client nonce");
if(u.length===i.clientNonce.length)throw new Error("SASL: SCRAM-SERVER-FIRST-MES\
SAGE: server nonce is too short");let f=parseInt(h,10),g=w.from(l,"base64"),p=new TextEncoder,
E=p.encode(s),C=await n.importKey("raw",E,{name:"HMAC",hash:{name:"SHA-256"}},!1,
["sign"]),v=new Uint8Array(await n.sign("HMAC",C,w.concat([g,w.from([0,0,0,1])]))),
A=v;for(var S=0;S<f-1;S++)v=new Uint8Array(await n.sign("HMAC",C,v)),A=w.from(A.
map((q,M)=>A[M]^v[M]));let m=A,x=await n.importKey("raw",m,{name:"HMAC",hash:{name:"\
SHA-256"}},!1,["sign"]),N=new Uint8Array(await n.sign("HMAC",x,p.encode("Client \
Key"))),_=await n.digest("SHA-256",N),D="n=*,r="+i.clientNonce,Y="r="+u+",s="+l+
",i="+f,te="c=biws,r="+u,P=D+","+Y+","+te,W=await n.importKey("raw",_,{name:"HMA\
C",hash:{name:"SHA-256"}},!1,["sign"]);var oe=new Uint8Array(await n.sign("HMAC",
W,p.encode(P))),ee=w.from(N.map((q,M)=>N[M]^oe[M])),j=ee.toString("base64");let H=await n.
importKey("raw",m,{name:"HMAC",hash:{name:"SHA-256"}},!1,["sign"]),Q=await n.sign(
"HMAC",H,p.encode("Server Key")),V=await n.importKey("raw",Q,{name:"HMAC",hash:{
name:"SHA-256"}},!1,["sign"]);var k=w.from(await n.sign("HMAC",V,p.encode(P)));i.
message="SASLResponse",i.serverSignature=k.toString("base64"),i.response=te+",p="+
j,this.connection.sendSCRAMClientFinalMessage(this.saslSession.response)}};function tf(r,e){
if(e)return{callback:e,result:void 0};let t,n,i=a(function(o,c){o?t(o):n(c)},"cb"),
s=new r(function(o,c){n=o,t=c});return{callback:i,result:s}}a(tf,"promisify");var He=class extends lr.Pool{static{
a(this,"NeonPool")}Client=qe;hasFetchUnsupportedListeners=!1;on(e,t){return e!==
"error"&&(this.hasFetchUnsupportedListeners=!0),super.on(e,t)}addListener=this.on;query(e,t,n){
if(!Ee.poolQueryViaFetch||this.hasFetchUnsupportedListeners||typeof e=="function")
return super.query(e,t,n);typeof t=="function"&&(n=t,t=void 0);let i=tf(this.Promise,
n);n=i.callback;try{let s=new Ho.default(this.options),o=encodeURIComponent,c=encodeURI,
u=`postgresql://${o(s.user)}:${o(s.password)}@${o(s.host)}/${c(s.database)}`,l=typeof e==
"string"?e:e.text,h=t??e.values??[];Te(u,{fullResults:!0,arrayMode:e.rowMode==="\
array"})(l,h,{types:e.types??this.options?.types}).then(g=>n(void 0,g)).catch(g=>n(
g))}catch(s){n(s)}return i.result}};var Ey=BUNDLE_EXT;y();async function rf(r){let e=Date.now(),t=await r();return[Date.now()-e,t]}a(rf,"t\
imed");async function ot(r,e,t=(n,i)=>{}){let n=[];for(let s=0;s<r;s++){let o=await rf(
e),[c,u]=o;t(c,u),n.push(o)}return[n.reduce((s,[o])=>s+o,0),n]}a(ot,"timedRepeat\
s");async function Lt(r,e){let{sql:t,test:n}=e,{rows:i}=await(typeof r=="functio\
n"?r(t):r.query(t));if(!n(i))throw new Error(`Result fails test
Query: ${t}
Result: ${JSON.stringify(i)}`);return i}a(Lt,"runQuery");async function _t(r,e,t,n){
await e.connect();let i=await ot(r,()=>Lt(e,n));return t.waitUntil(e.end()),i}a(
_t,"clientRunQuery");async function Pt(r,e,t,n){let i=new He({connectionString:e}),
s=await ot(r,()=>Lt(i,n));return t.waitUntil(i.end()),s}a(Pt,"poolRunQuery");async function $o(r,e,t,n){
let i=Te(e,{fullResults:!0});return await ot(r,()=>Lt(i,n))}a($o,"httpRunQuery");y();var Bt=[{sql:"SELECT * FROM employees LIMIT 10",test:a(r=>r.length>1&&typeof r[0].
first_name=="string","test")},{sql:"SELECT now()",test:a(r=>/^2\d\d\d-\d\d-\d\dT\d\d:\d\d:\d\d.\d+Z$/.
test(r[0].now.toISOString()),"test")}];async function Qy(r,e,t){let n=[];for(let i of Bt){let[,[[,s]]]=await Pt(1,e.NEON_DB_URL,
t,i);n.push(s)}for(let i of Bt){let[,[[,s]]]=await $o(1,e.NEON_DB_URL,t,i);n.push(
s)}return new Response(JSON.stringify(n,null,2),{headers:{"Content-Type":"applic\
ation/json"}})}a(Qy,"cf");var ke={waitUntil(r){},passThroughOnException(){}};async function nf(r,e=(...t)=>{}){
let t=Te(r.NEON_DB_URL),[[n],[i]]=await t.transaction([t`SELECT ${1}::int AS "batchInt"`,
t`SELECT ${"hello"} AS "batchStr"`]);if(e("batch results:",JSON.stringify(n),JSON.
stringify(i),`
`),n.batchInt!==1||i.batchStr!=="hello")throw new Error("Batch query problem");let[
[s],[o]]=await t.transaction(x=>[x`SELECT ${1}::int AS "batchInt"`,x`SELECT ${"h\
ello"} AS "batchStr"`]);if(e("batch results:",JSON.stringify(s),JSON.stringify(o),
`
`),s.batchInt!==1||o.batchStr!=="hello")throw new Error("Batch query problem");let c=await t.
transaction(x=>[]);e("empty txn result:",JSON.stringify(c),`
`);let[[[u]],[[l]]]=await t.transaction(x=>[x`SELECT ${1}::int AS "batchInt"`,x`SELECT ${"\
hello"} AS "batchStr"`],{arrayMode:!0,isolationLevel:"Serializable",readOnly:!0});
if(e("array mode (via transaction options) batch results:",JSON.stringify(u),JSON.
stringify(l),`
`),u!==1||l!=="hello")throw new Error("Batch query problem");let h=Te(r.NEON_DB_URL,
{arrayMode:!0,isolationLevel:"RepeatableRead"}),[[[f]],[[g]]]=await h.transaction(
x=>[x`SELECT ${1}::int AS "batchInt"`,x`SELECT ${"hello"} AS "batchStr"`]);if(e(
"array mode (via neon options) batch results:",JSON.stringify(f),JSON.stringify(
g),`
`),f!==1||g!=="hello")throw new Error("Batch query problem");let p=Te(r.NEON_DB_URL,
{arrayMode:!0}),[[E],[C]]=await p.transaction(x=>[x`SELECT ${1}::int AS "batchInt"`,
x`SELECT ${"hello"} AS "batchStr"`],{arrayMode:!1});if(e("ordinary (via overridd\
en options) batch results:",JSON.stringify(E),JSON.stringify(C),`
`),E.batchInt!==1||C.batchStr!=="hello")throw new Error("Batch query problem");let[
[v],[A]]=await t.transaction(x=>[x`SELECT ${1}::int AS "batchInt"`,x('SELECT $1 \
AS "batchStr"',["hello"],{arrayMode:!0})]);if(e("query options on individual bat\
ch queries:",JSON.stringify(v),JSON.stringify(A),`
`),v.batchInt!==1||A[0]!=="hello")throw new Error("Batch query problem");let S;try{
await t.transaction(x=>[x`SELECT ${1}::int AS "batchInt"`,`SELECT 'hello' AS "ba\
tchStr"`])}catch(x){S=x}if(S===void 0)throw new Error("Error should have been ra\
ised for string passed to `transaction()`");e("successfully caught invalid query\
 passed to `transaction()`\n");let m;try{let x=r.NEON_DB_URL.replace(/@/,"x@");await Te(
x).transaction(N=>[N`SELECT 'never' AS this_should_be_seen_precisely`])}catch(x){
m=x}if(m===void 0)throw new Error("Error should have been raised for bad passwor\
d");e("successfully caught invalid password passed to `neon()`\n")}a(nf,"batchQu\
eryTest");async function Hy(r,e,t=(...n)=>{}){let n=[1,3],i=9;t(`Warm-up ...

`),await Pt(1,r.NEON_DB_URL,ke,Bt[0]);let s=0;t(`
===== SQL-over-HTTP tests =====

`);let o=new Set(["command","rowCount","rows","fields"]),c=await new He({connectionString:r.
NEON_DB_URL}),u=Te(r.NEON_DB_URL,{resultCallback:a(async(p,E,C,v)=>{let A=await c.
query({text:p.query,values:p.params,...v.arrayMode?{rowMode:"array"}:{}}),S=E.command===
A.command,m=E.rowCount===A.rowCount,x=Pr(E.fields.map(D=>D.dataTypeID),A.fields.
map(D=>D.dataTypeID)),N=Pr(C,A.rows);t(S&&m&&N&&x?"\u2713":"X",JSON.stringify(p),
`
  -> us:`,JSON.stringify(C),`
  -> pg:`,JSON.stringify(A.rows),`
`)},"resultCallback")}),l=new Date;await u`SELECT ${1} AS int_uncast`,await u`SELECT ${1}::int AS int`,
await u`SELECT ${1}::int8 AS int8num`,await u`SELECT ${1}::decimal AS decimalnum`,
await u`SELECT ${"[1,4)"}::int4range AS int4range`,await u`SELECT ${"hello"} AS str`,
await u`SELECT ${["a","b","c"]} AS arrstr_uncast`,await u`SELECT ${[[2],[4]]}::int[][] AS arrnumnested`,
await u`SELECT ${l}::timestamptz AS timestamptznow`,await u`SELECT ${"16:17:18+0\
1:00"}::timetz AS timetz`,await u`SELECT ${"17:18:19"}::time AS time`,await u`SELECT ${l}::date AS datenow`,
await u`SELECT ${{x:"y"}} AS obj_uncast`,await u`SELECT ${"11:22:33:44:55:66"}::macaddr AS macaddr`,
await u`SELECT ${"\\xDEADBEEF"}::bytea AS bytea`,await u`SELECT ${"(2, 3)"}::point AS point`,
await u`SELECT ${"<(2, 3), 1>"}::circle AS circle`,await u`SELECT ${"10.10.10.0/\
24"}::cidr AS cidr`,await u`SELECT ${!0} AS bool_uncast`,await u`SELECT ${"hello"} || ' ' || ${"\
world"} AS greeting`,await u`SELECT ${[1,2,3]}::int[] AS arrnum`,await u`SELECT ${[
"a","b","c"]}::text[] AS arrstr`,await u`SELECT ${{x:"y"}}::jsonb AS jsonb_obj`,
await u`SELECT ${{x:"y"}}::json AS json_obj`,await u`SELECT ${["11:22:33:44:55:6\
6"]}::macaddr[] AS arrmacaddr`,await u`SELECT ${["10.10.10.0/24"]}::cidr[] AS arrcidr`,
await u`SELECT ${!0}::boolean AS bool`,await u`SELECT ${[l]}::timestamptz[] AS arrtstz`,
await u`SELECT ${["(2, 3)"]}::point[] AS arrpoint`,await u`SELECT ${["<(2, 3), 1\
>"]}::circle[] AS arrcircle`,await u`SELECT ${["\\xDEADBEEF","\\xDEADBEEF"]}::bytea[] AS arrbytea`,
await u`SELECT null AS null`,await u`SELECT ${null} AS null`,await u`SELECT ${"N\
ULL"} AS null_str`,await u`SELECT ${[1,2,3]} AS arrnum_uncast`,await u`SELECT ${[
[2],[4]]} AS arrnumnested_uncast`,await u`SELECT ${l} AS timenow_uncast`,await u`SELECT ${l}::timestamp AS timestampnow`,
await u("SELECT $1::timestamp AS timestampnow",[l]),await u("SELECT $1 || ' ' ||\
 $2 AS greeting",["hello","world"]),await u("SELECT 123 AS num"),await u("SELECT\
 123 AS num",[],{arrayMode:!0,fullResults:!0});function h(p,E,C=3){return async function(v,...A){
let S="";for(let m=0;m<v.length;m++)S+=v[m],m<A.length&&(S+="$"+(m+1));for(let m=1;;m++){
let x=new AbortController,N=setTimeout(()=>x.abort("fetch timed out"),E);try{let{
signal:_}=x;return await p(S,A,{fetchOptions:{signal:_}})}catch(_){if(!(_.sourceError&&
_.sourceError instanceof DOMException&&_.sourceError.name==="AbortError")||m>=C)
throw _}finally{clearTimeout(N)}}}}a(h,"sqlWithRetries"),await h(u,5e3)`SELECT ${"\
did this time out?"} AS str`,await nf(r,t),Ee.fetchFunction=(p,E)=>(console.log(
"custom fetch:",p,E),fetch(p,E)),await u`SELECT ${"customFetch"} AS str`;let g="\
SELECT 123::int[] WHERE x";try{await u(g)}catch(p){console.log("Fields of this e\
xpected error should match the following error, except for having no `length` fi\
eld"),console.log(p)}try{await Pt(1,r.NEON_DB_URL,ke,{sql:g,test:a(()=>!0,"test")})}catch(p){
console.log("Fields of this expected error should match the previous error, exce\
pt for having an additional `length` field"),console.log(p)}await new Promise(p=>setTimeout(
p,1e3)),c.end(),t(`

===== Pool/Client tests =====
`);for(let p of Bt){t(`
----- ${p.sql} -----

`);async function E(v,A){let S=String.fromCharCode(s+(s>25?23:65));t(`${S}
`);try{await fetch(`http://localhost:443/${S}`)}catch{}t('<span class="live">Liv\
e:</span>    ');let[,m]=await ot(i,()=>A(v),x=>t(`<span class="live">${x.toFixed()}\
ms</span> `));t(`
Sorted:  `),m.map(([x])=>x).sort((x,N)=>x-N).forEach((x,N)=>{t(N===(i-1)/2?`<spa\
n class="median">${x.toFixed()}ms</span> `:`${x.toFixed()}ms `)}),t(`

`),s+=1}a(E,"section");async function C(v,A){t(`----- ${v} -----

`);for(let S of n)t(`${S} quer${S===1?"y":"ies"} \u2013 `),await E(S,A)}a(C,"sec\
tions"),await C("Neon/wss, no pipelining",async v=>{let A=new qe(r.NEON_DB_URL);
A.neonConfig.pipelineConnect=!1,await _t(v,A,ke,p)}),await C("Neon/wss, pipeline\
d connect (default)",async v=>{let A=new qe(r.NEON_DB_URL);await _t(v,A,ke,p)}),
await C("Neon/wss, pipelined connect, no coalescing",async v=>{let A=new qe(r.NEON_DB_URL);
A.neonConfig.coalesceWrites=!1,await _t(v,A,ke,p)}),await C("Neon/wss, pipelined\
 connect using Pool.query",async v=>{await Pt(v,r.NEON_DB_URL,ke,p)}),await C("N\
eon/wss, pipelined connect using Pool.connect",async v=>{let A=new He({connectionString:r.
NEON_DB_URL}),S=await A.connect();await ot(v,()=>Lt(S,p)),S.release(),ke.waitUntil(
A.end())}),e&&(Ee.subtls=_r,Ee.rootCerts=Ii,await C("pg/subtls, pipelined connec\
t",async v=>{let A=new qe(r.NEON_DB_URL);A.neonConfig.wsProxy=(S,m)=>`subtls-wsp\
roxy.jawj.workers.dev/?address=${S}:${m}`,A.neonConfig.forceDisablePgSSL=A.neonConfig.
useSecureWebSocket=!1,A.neonConfig.pipelineTLS=!1,A.neonConfig.pipelineConnect=!1;
try{await _t(v,A,ke,p)}catch(S){console.error(`
*** ${S.message}`)}}))}}a(Hy,"latencies");export{nf as batchQueryTest,Qy as cf,Hy as latencies,Ee as neonConfig};
/*! Bundled license information:

ieee754/index.js:
  (*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> *)

buffer/index.js:
  (*!
   * The buffer module from node.js, for the browser.
   *
   * @author   Feross Aboukhadijeh <https://feross.org>
   * @license  MIT
   *)
*/
