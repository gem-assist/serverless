"use strict";var Es=Object.create;var Ne=Object.defineProperty;var vs=Object.getOwnPropertyDescriptor;var _s=Object.getOwnPropertyNames;var As=Object.getPrototypeOf,Cs=Object.prototype.hasOwnProperty;var Is=(r,e,t)=>e in r?Ne(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):
r[e]=t;var $=(r,e)=>()=>(r&&(e=r(r=0)),e);var C=(r,e)=>()=>(e||r((e={exports:{}}).exports,e),e.exports),X=(r,e)=>{for(var t in e)
Ne(r,t,{get:e[t],enumerable:!0})},Vr=(r,e,t,n)=>{if(e&&typeof e=="object"||typeof e==
"function")for(let i of _s(e))!Cs.call(r,i)&&i!==t&&Ne(r,i,{get:()=>e[i],enumerable:!(n=
vs(e,i))||n.enumerable});return r};var Qe=(r,e,t)=>(t=r!=null?Es(As(r)):{},Vr(e||!r||!r.__esModule?Ne(t,"default",{
value:r,enumerable:!0}):t,r)),D=r=>Vr(Ne({},"__esModule",{value:!0}),r);var I=(r,e,t)=>(Is(r,typeof e!="symbol"?e+"":e,t),t);var Zr=C(nt=>{"use strict";f();nt.byteLength=Ps;nt.toByteArray=Ls;nt.fromByteArray=
Ms;var oe=[],ee=[],Ts=typeof Uint8Array<"u"?Uint8Array:Array,Ct="ABCDEFGHIJKLMNO\
PQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";for(ve=0,zr=Ct.length;ve<zr;++ve)
oe[ve]=Ct[ve],ee[Ct.charCodeAt(ve)]=ve;var ve,zr;ee["-".charCodeAt(0)]=62;ee["_".
charCodeAt(0)]=63;function Yr(r){var e=r.length;if(e%4>0)throw new Error("Invali\
d string. Length must be a multiple of 4");var t=r.indexOf("=");t===-1&&(t=e);var n=t===
e?0:4-t%4;return[t,n]}function Ps(r){var e=Yr(r),t=e[0],n=e[1];return(t+n)*3/4-n}
function Bs(r,e,t){return(e+t)*3/4-t}function Ls(r){var e,t=Yr(r),n=t[0],i=t[1],
s=new Ts(Bs(r,n,i)),o=0,a=i>0?n-4:n,u;for(u=0;u<a;u+=4)e=ee[r.charCodeAt(u)]<<18|
ee[r.charCodeAt(u+1)]<<12|ee[r.charCodeAt(u+2)]<<6|ee[r.charCodeAt(u+3)],s[o++]=
e>>16&255,s[o++]=e>>8&255,s[o++]=e&255;return i===2&&(e=ee[r.charCodeAt(u)]<<2|ee[r.
charCodeAt(u+1)]>>4,s[o++]=e&255),i===1&&(e=ee[r.charCodeAt(u)]<<10|ee[r.charCodeAt(
u+1)]<<4|ee[r.charCodeAt(u+2)]>>2,s[o++]=e>>8&255,s[o++]=e&255),s}function Rs(r){
return oe[r>>18&63]+oe[r>>12&63]+oe[r>>6&63]+oe[r&63]}function Fs(r,e,t){for(var n,
i=[],s=e;s<t;s+=3)n=(r[s]<<16&16711680)+(r[s+1]<<8&65280)+(r[s+2]&255),i.push(Rs(
n));return i.join("")}function Ms(r){for(var e,t=r.length,n=t%3,i=[],s=16383,o=0,
a=t-n;o<a;o+=s)i.push(Fs(r,o,o+s>a?a:o+s));return n===1?(e=r[t-1],i.push(oe[e>>2]+
oe[e<<4&63]+"==")):n===2&&(e=(r[t-2]<<8)+r[t-1],i.push(oe[e>>10]+oe[e>>4&63]+oe[e<<
2&63]+"=")),i.join("")}});var Jr=C(It=>{f();It.read=function(r,e,t,n,i){var s,o,a=i*8-n-1,u=(1<<a)-1,c=u>>
1,h=-7,y=t?i-1:0,x=t?-1:1,v=r[e+y];for(y+=x,s=v&(1<<-h)-1,v>>=-h,h+=a;h>0;s=s*256+
r[e+y],y+=x,h-=8);for(o=s&(1<<-h)-1,s>>=-h,h+=n;h>0;o=o*256+r[e+y],y+=x,h-=8);if(s===
0)s=1-c;else{if(s===u)return o?NaN:(v?-1:1)*(1/0);o=o+Math.pow(2,n),s=s-c}return(v?
-1:1)*o*Math.pow(2,s-n)};It.write=function(r,e,t,n,i,s){var o,a,u,c=s*8-i-1,h=(1<<
c)-1,y=h>>1,x=i===23?Math.pow(2,-24)-Math.pow(2,-77):0,v=n?0:s-1,T=n?1:-1,q=e<0||
e===0&&1/e<0?1:0;for(e=Math.abs(e),isNaN(e)||e===1/0?(a=isNaN(e)?1:0,o=h):(o=Math.
floor(Math.log(e)/Math.LN2),e*(u=Math.pow(2,-o))<1&&(o--,u*=2),o+y>=1?e+=x/u:e+=
x*Math.pow(2,1-y),e*u>=2&&(o++,u/=2),o+y>=h?(a=0,o=h):o+y>=1?(a=(e*u-1)*Math.pow(
2,i),o=o+y):(a=e*Math.pow(2,y-1)*Math.pow(2,i),o=0));i>=8;r[t+v]=a&255,v+=T,a/=256,
i-=8);for(o=o<<i|a,c+=i;c>0;r[t+v]=o&255,v+=T,o/=256,c-=8);r[t+v-T]|=q*128}});var mn=C(Pe=>{"use strict";f();var Tt=Zr(),Ie=Jr(),Xr=typeof Symbol=="function"&&
typeof Symbol.for=="function"?Symbol.for("nodejs.util.inspect.custom"):null;Pe.Buffer=
l;Pe.SlowBuffer=Ns;Pe.INSPECT_MAX_BYTES=50;var it=2147483647;Pe.kMaxLength=it;l.
TYPED_ARRAY_SUPPORT=Ds();!l.TYPED_ARRAY_SUPPORT&&typeof console<"u"&&typeof console.
error=="function"&&console.error("This browser lacks typed array (Uint8Array) su\
pport which is required by `buffer` v5.x. Use `buffer` v4.x if you require old b\
rowser support.");function Ds(){try{let r=new Uint8Array(1),e={foo:function(){return 42}};
return Object.setPrototypeOf(e,Uint8Array.prototype),Object.setPrototypeOf(r,e),
r.foo()===42}catch{return!1}}Object.defineProperty(l.prototype,"parent",{enumerable:!0,
get:function(){if(l.isBuffer(this))return this.buffer}});Object.defineProperty(l.
prototype,"offset",{enumerable:!0,get:function(){if(l.isBuffer(this))return this.
byteOffset}});function le(r){if(r>it)throw new RangeError('The value "'+r+'" is \
invalid for option "size"');let e=new Uint8Array(r);return Object.setPrototypeOf(
e,l.prototype),e}function l(r,e,t){if(typeof r=="number"){if(typeof e=="string")
throw new TypeError('The "string" argument must be of type string. Received type\
 number');return Rt(r)}return nn(r,e,t)}l.poolSize=8192;function nn(r,e,t){if(typeof r==
"string")return Os(r,e);if(ArrayBuffer.isView(r))return Us(r);if(r==null)throw new TypeError(
"The first argument must be one of type string, Buffer, ArrayBuffer, Array, or A\
rray-like Object. Received type "+typeof r);if(ae(r,ArrayBuffer)||r&&ae(r.buffer,
ArrayBuffer)||typeof SharedArrayBuffer<"u"&&(ae(r,SharedArrayBuffer)||r&&ae(r.buffer,
SharedArrayBuffer)))return Bt(r,e,t);if(typeof r=="number")throw new TypeError('\
The "value" argument must not be of type number. Received type number');let n=r.
valueOf&&r.valueOf();if(n!=null&&n!==r)return l.from(n,e,t);let i=qs(r);if(i)return i;
if(typeof Symbol<"u"&&Symbol.toPrimitive!=null&&typeof r[Symbol.toPrimitive]=="f\
unction")return l.from(r[Symbol.toPrimitive]("string"),e,t);throw new TypeError(
"The first argument must be one of type string, Buffer, ArrayBuffer, Array, or A\
rray-like Object. Received type "+typeof r)}l.from=function(r,e,t){return nn(r,e,
t)};Object.setPrototypeOf(l.prototype,Uint8Array.prototype);Object.setPrototypeOf(
l,Uint8Array);function sn(r){if(typeof r!="number")throw new TypeError('"size" a\
rgument must be of type number');if(r<0)throw new RangeError('The value "'+r+'" \
is invalid for option "size"')}function ks(r,e,t){return sn(r),r<=0?le(r):e!==void 0?
typeof t=="string"?le(r).fill(e,t):le(r).fill(e):le(r)}l.alloc=function(r,e,t){return ks(
r,e,t)};function Rt(r){return sn(r),le(r<0?0:Ft(r)|0)}l.allocUnsafe=function(r){
return Rt(r)};l.allocUnsafeSlow=function(r){return Rt(r)};function Os(r,e){if((typeof e!=
"string"||e==="")&&(e="utf8"),!l.isEncoding(e))throw new TypeError("Unknown enco\
ding: "+e);let t=on(r,e)|0,n=le(t),i=n.write(r,e);return i!==t&&(n=n.slice(0,i)),
n}function Pt(r){let e=r.length<0?0:Ft(r.length)|0,t=le(e);for(let n=0;n<e;n+=1)
t[n]=r[n]&255;return t}function Us(r){if(ae(r,Uint8Array)){let e=new Uint8Array(
r);return Bt(e.buffer,e.byteOffset,e.byteLength)}return Pt(r)}function Bt(r,e,t){
if(e<0||r.byteLength<e)throw new RangeError('"offset" is outside of buffer bound\
s');if(r.byteLength<e+(t||0))throw new RangeError('"length" is outside of buffer\
 bounds');let n;return e===void 0&&t===void 0?n=new Uint8Array(r):t===void 0?n=new Uint8Array(
r,e):n=new Uint8Array(r,e,t),Object.setPrototypeOf(n,l.prototype),n}function qs(r){
if(l.isBuffer(r)){let e=Ft(r.length)|0,t=le(e);return t.length===0||r.copy(t,0,0,
e),t}if(r.length!==void 0)return typeof r.length!="number"||Dt(r.length)?le(0):Pt(
r);if(r.type==="Buffer"&&Array.isArray(r.data))return Pt(r.data)}function Ft(r){
if(r>=it)throw new RangeError("Attempt to allocate Buffer larger than maximum si\
ze: 0x"+it.toString(16)+" bytes");return r|0}function Ns(r){return+r!=r&&(r=0),l.
alloc(+r)}l.isBuffer=function(e){return e!=null&&e._isBuffer===!0&&e!==l.prototype};
l.compare=function(e,t){if(ae(e,Uint8Array)&&(e=l.from(e,e.offset,e.byteLength)),
ae(t,Uint8Array)&&(t=l.from(t,t.offset,t.byteLength)),!l.isBuffer(e)||!l.isBuffer(
t))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer \
or Uint8Array');if(e===t)return 0;let n=e.length,i=t.length;for(let s=0,o=Math.min(
n,i);s<o;++s)if(e[s]!==t[s]){n=e[s],i=t[s];break}return n<i?-1:i<n?1:0};l.isEncoding=
function(e){switch(String(e).toLowerCase()){case"hex":case"utf8":case"utf-8":case"\
ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16l\
e":case"utf-16le":return!0;default:return!1}};l.concat=function(e,t){if(!Array.isArray(
e))throw new TypeError('"list" argument must be an Array of Buffers');if(e.length===
0)return l.alloc(0);let n;if(t===void 0)for(t=0,n=0;n<e.length;++n)t+=e[n].length;
let i=l.allocUnsafe(t),s=0;for(n=0;n<e.length;++n){let o=e[n];if(ae(o,Uint8Array))
s+o.length>i.length?(l.isBuffer(o)||(o=l.from(o)),o.copy(i,s)):Uint8Array.prototype.
set.call(i,o,s);else if(l.isBuffer(o))o.copy(i,s);else throw new TypeError('"lis\
t" argument must be an Array of Buffers');s+=o.length}return i};function on(r,e){
if(l.isBuffer(r))return r.length;if(ArrayBuffer.isView(r)||ae(r,ArrayBuffer))return r.
byteLength;if(typeof r!="string")throw new TypeError('The "string" argument must\
 be one of type string, Buffer, or ArrayBuffer. Received type '+typeof r);let t=r.
length,n=arguments.length>2&&arguments[2]===!0;if(!n&&t===0)return 0;let i=!1;for(;;)
switch(e){case"ascii":case"latin1":case"binary":return t;case"utf8":case"utf-8":
return Lt(r).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return t*
2;case"hex":return t>>>1;case"base64":return yn(r).length;default:if(i)return n?
-1:Lt(r).length;e=(""+e).toLowerCase(),i=!0}}l.byteLength=on;function Qs(r,e,t){
let n=!1;if((e===void 0||e<0)&&(e=0),e>this.length||((t===void 0||t>this.length)&&
(t=this.length),t<=0)||(t>>>=0,e>>>=0,t<=e))return"";for(r||(r="utf8");;)switch(r){case"\
hex":return Zs(this,e,t);case"utf8":case"utf-8":return un(this,e,t);case"ascii":
return zs(this,e,t);case"latin1":case"binary":return Ys(this,e,t);case"base64":return Ks(
this,e,t);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return Js(this,e,t);default:
if(n)throw new TypeError("Unknown encoding: "+r);r=(r+"").toLowerCase(),n=!0}}l.
prototype._isBuffer=!0;function _e(r,e,t){let n=r[e];r[e]=r[t],r[t]=n}l.prototype.
swap16=function(){let e=this.length;if(e%2!==0)throw new RangeError("Buffer size\
 must be a multiple of 16-bits");for(let t=0;t<e;t+=2)_e(this,t,t+1);return this};
l.prototype.swap32=function(){let e=this.length;if(e%4!==0)throw new RangeError(
"Buffer size must be a multiple of 32-bits");for(let t=0;t<e;t+=4)_e(this,t,t+3),
_e(this,t+1,t+2);return this};l.prototype.swap64=function(){let e=this.length;if(e%
8!==0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(let t=0;t<
e;t+=8)_e(this,t,t+7),_e(this,t+1,t+6),_e(this,t+2,t+5),_e(this,t+3,t+4);return this};
l.prototype.toString=function(){let e=this.length;return e===0?"":arguments.length===
0?un(this,0,e):Qs.apply(this,arguments)};l.prototype.toLocaleString=l.prototype.
toString;l.prototype.equals=function(e){if(!l.isBuffer(e))throw new TypeError("A\
rgument must be a Buffer");return this===e?!0:l.compare(this,e)===0};l.prototype.
inspect=function(){let e="",t=Pe.INSPECT_MAX_BYTES;return e=this.toString("hex",
0,t).replace(/(.{2})/g,"$1 ").trim(),this.length>t&&(e+=" ... "),"<Buffer "+e+">"};
Xr&&(l.prototype[Xr]=l.prototype.inspect);l.prototype.compare=function(e,t,n,i,s){
if(ae(e,Uint8Array)&&(e=l.from(e,e.offset,e.byteLength)),!l.isBuffer(e))throw new TypeError(
'The "target" argument must be one of type Buffer or Uint8Array. Received type '+
typeof e);if(t===void 0&&(t=0),n===void 0&&(n=e?e.length:0),i===void 0&&(i=0),s===
void 0&&(s=this.length),t<0||n>e.length||i<0||s>this.length)throw new RangeError(
"out of range index");if(i>=s&&t>=n)return 0;if(i>=s)return-1;if(t>=n)return 1;if(t>>>=
0,n>>>=0,i>>>=0,s>>>=0,this===e)return 0;let o=s-i,a=n-t,u=Math.min(o,a),c=this.
slice(i,s),h=e.slice(t,n);for(let y=0;y<u;++y)if(c[y]!==h[y]){o=c[y],a=h[y];break}
return o<a?-1:a<o?1:0};function an(r,e,t,n,i){if(r.length===0)return-1;if(typeof t==
"string"?(n=t,t=0):t>2147483647?t=2147483647:t<-2147483648&&(t=-2147483648),t=+t,
Dt(t)&&(t=i?0:r.length-1),t<0&&(t=r.length+t),t>=r.length){if(i)return-1;t=r.length-
1}else if(t<0)if(i)t=0;else return-1;if(typeof e=="string"&&(e=l.from(e,n)),l.isBuffer(
e))return e.length===0?-1:en(r,e,t,n,i);if(typeof e=="number")return e=e&255,typeof Uint8Array.
prototype.indexOf=="function"?i?Uint8Array.prototype.indexOf.call(r,e,t):Uint8Array.
prototype.lastIndexOf.call(r,e,t):en(r,[e],t,n,i);throw new TypeError("val must \
be string, number or Buffer")}function en(r,e,t,n,i){let s=1,o=r.length,a=e.length;
if(n!==void 0&&(n=String(n).toLowerCase(),n==="ucs2"||n==="ucs-2"||n==="utf16le"||
n==="utf-16le")){if(r.length<2||e.length<2)return-1;s=2,o/=2,a/=2,t/=2}function u(h,y){
return s===1?h[y]:h.readUInt16BE(y*s)}let c;if(i){let h=-1;for(c=t;c<o;c++)if(u(
r,c)===u(e,h===-1?0:c-h)){if(h===-1&&(h=c),c-h+1===a)return h*s}else h!==-1&&(c-=
c-h),h=-1}else for(t+a>o&&(t=o-a),c=t;c>=0;c--){let h=!0;for(let y=0;y<a;y++)if(u(
r,c+y)!==u(e,y)){h=!1;break}if(h)return c}return-1}l.prototype.includes=function(e,t,n){
return this.indexOf(e,t,n)!==-1};l.prototype.indexOf=function(e,t,n){return an(this,
e,t,n,!0)};l.prototype.lastIndexOf=function(e,t,n){return an(this,e,t,n,!1)};function Ws(r,e,t,n){
t=Number(t)||0;let i=r.length-t;n?(n=Number(n),n>i&&(n=i)):n=i;let s=e.length;n>
s/2&&(n=s/2);let o;for(o=0;o<n;++o){let a=parseInt(e.substr(o*2,2),16);if(Dt(a))
return o;r[t+o]=a}return o}function js(r,e,t,n){return st(Lt(e,r.length-t),r,t,n)}
function Hs(r,e,t,n){return st(ro(e),r,t,n)}function Gs(r,e,t,n){return st(yn(e),
r,t,n)}function $s(r,e,t,n){return st(no(e,r.length-t),r,t,n)}l.prototype.write=
function(e,t,n,i){if(t===void 0)i="utf8",n=this.length,t=0;else if(n===void 0&&typeof t==
"string")i=t,n=this.length,t=0;else if(isFinite(t))t=t>>>0,isFinite(n)?(n=n>>>0,
i===void 0&&(i="utf8")):(i=n,n=void 0);else throw new Error("Buffer.write(string\
, encoding, offset[, length]) is no longer supported");let s=this.length-t;if((n===
void 0||n>s)&&(n=s),e.length>0&&(n<0||t<0)||t>this.length)throw new RangeError("\
Attempt to write outside buffer bounds");i||(i="utf8");let o=!1;for(;;)switch(i){case"\
hex":return Ws(this,e,t,n);case"utf8":case"utf-8":return js(this,e,t,n);case"asc\
ii":case"latin1":case"binary":return Hs(this,e,t,n);case"base64":return Gs(this,
e,t,n);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return $s(this,e,t,n);default:
if(o)throw new TypeError("Unknown encoding: "+i);i=(""+i).toLowerCase(),o=!0}};l.
prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(
this._arr||this,0)}};function Ks(r,e,t){return e===0&&t===r.length?Tt.fromByteArray(
r):Tt.fromByteArray(r.slice(e,t))}function un(r,e,t){t=Math.min(r.length,t);let n=[],
i=e;for(;i<t;){let s=r[i],o=null,a=s>239?4:s>223?3:s>191?2:1;if(i+a<=t){let u,c,
h,y;switch(a){case 1:s<128&&(o=s);break;case 2:u=r[i+1],(u&192)===128&&(y=(s&31)<<
6|u&63,y>127&&(o=y));break;case 3:u=r[i+1],c=r[i+2],(u&192)===128&&(c&192)===128&&
(y=(s&15)<<12|(u&63)<<6|c&63,y>2047&&(y<55296||y>57343)&&(o=y));break;case 4:u=r[i+
1],c=r[i+2],h=r[i+3],(u&192)===128&&(c&192)===128&&(h&192)===128&&(y=(s&15)<<18|
(u&63)<<12|(c&63)<<6|h&63,y>65535&&y<1114112&&(o=y))}}o===null?(o=65533,a=1):o>65535&&
(o-=65536,n.push(o>>>10&1023|55296),o=56320|o&1023),n.push(o),i+=a}return Vs(n)}
var tn=4096;function Vs(r){let e=r.length;if(e<=tn)return String.fromCharCode.apply(
String,r);let t="",n=0;for(;n<e;)t+=String.fromCharCode.apply(String,r.slice(n,n+=
tn));return t}function zs(r,e,t){let n="";t=Math.min(r.length,t);for(let i=e;i<t;++i)
n+=String.fromCharCode(r[i]&127);return n}function Ys(r,e,t){let n="";t=Math.min(
r.length,t);for(let i=e;i<t;++i)n+=String.fromCharCode(r[i]);return n}function Zs(r,e,t){
let n=r.length;(!e||e<0)&&(e=0),(!t||t<0||t>n)&&(t=n);let i="";for(let s=e;s<t;++s)
i+=io[r[s]];return i}function Js(r,e,t){let n=r.slice(e,t),i="";for(let s=0;s<n.
length-1;s+=2)i+=String.fromCharCode(n[s]+n[s+1]*256);return i}l.prototype.slice=
function(e,t){let n=this.length;e=~~e,t=t===void 0?n:~~t,e<0?(e+=n,e<0&&(e=0)):e>
n&&(e=n),t<0?(t+=n,t<0&&(t=0)):t>n&&(t=n),t<e&&(t=e);let i=this.subarray(e,t);return Object.
setPrototypeOf(i,l.prototype),i};function O(r,e,t){if(r%1!==0||r<0)throw new RangeError(
"offset is not uint");if(r+e>t)throw new RangeError("Trying to access beyond buf\
fer length")}l.prototype.readUintLE=l.prototype.readUIntLE=function(e,t,n){e=e>>>
0,t=t>>>0,n||O(e,t,this.length);let i=this[e],s=1,o=0;for(;++o<t&&(s*=256);)i+=this[e+
o]*s;return i};l.prototype.readUintBE=l.prototype.readUIntBE=function(e,t,n){e=e>>>
0,t=t>>>0,n||O(e,t,this.length);let i=this[e+--t],s=1;for(;t>0&&(s*=256);)i+=this[e+
--t]*s;return i};l.prototype.readUint8=l.prototype.readUInt8=function(e,t){return e=
e>>>0,t||O(e,1,this.length),this[e]};l.prototype.readUint16LE=l.prototype.readUInt16LE=
function(e,t){return e=e>>>0,t||O(e,2,this.length),this[e]|this[e+1]<<8};l.prototype.
readUint16BE=l.prototype.readUInt16BE=function(e,t){return e=e>>>0,t||O(e,2,this.
length),this[e]<<8|this[e+1]};l.prototype.readUint32LE=l.prototype.readUInt32LE=
function(e,t){return e=e>>>0,t||O(e,4,this.length),(this[e]|this[e+1]<<8|this[e+
2]<<16)+this[e+3]*16777216};l.prototype.readUint32BE=l.prototype.readUInt32BE=function(e,t){
return e=e>>>0,t||O(e,4,this.length),this[e]*16777216+(this[e+1]<<16|this[e+2]<<
8|this[e+3])};l.prototype.readBigUInt64LE=me(function(e){e=e>>>0,Te(e,"offset");
let t=this[e],n=this[e+7];(t===void 0||n===void 0)&&We(e,this.length-8);let i=t+
this[++e]*2**8+this[++e]*2**16+this[++e]*2**24,s=this[++e]+this[++e]*2**8+this[++e]*
2**16+n*2**24;return BigInt(i)+(BigInt(s)<<BigInt(32))});l.prototype.readBigUInt64BE=
me(function(e){e=e>>>0,Te(e,"offset");let t=this[e],n=this[e+7];(t===void 0||n===
void 0)&&We(e,this.length-8);let i=t*2**24+this[++e]*2**16+this[++e]*2**8+this[++e],
s=this[++e]*2**24+this[++e]*2**16+this[++e]*2**8+n;return(BigInt(i)<<BigInt(32))+
BigInt(s)});l.prototype.readIntLE=function(e,t,n){e=e>>>0,t=t>>>0,n||O(e,t,this.
length);let i=this[e],s=1,o=0;for(;++o<t&&(s*=256);)i+=this[e+o]*s;return s*=128,
i>=s&&(i-=Math.pow(2,8*t)),i};l.prototype.readIntBE=function(e,t,n){e=e>>>0,t=t>>>
0,n||O(e,t,this.length);let i=t,s=1,o=this[e+--i];for(;i>0&&(s*=256);)o+=this[e+
--i]*s;return s*=128,o>=s&&(o-=Math.pow(2,8*t)),o};l.prototype.readInt8=function(e,t){
return e=e>>>0,t||O(e,1,this.length),this[e]&128?(255-this[e]+1)*-1:this[e]};l.prototype.
readInt16LE=function(e,t){e=e>>>0,t||O(e,2,this.length);let n=this[e]|this[e+1]<<
8;return n&32768?n|4294901760:n};l.prototype.readInt16BE=function(e,t){e=e>>>0,t||
O(e,2,this.length);let n=this[e+1]|this[e]<<8;return n&32768?n|4294901760:n};l.prototype.
readInt32LE=function(e,t){return e=e>>>0,t||O(e,4,this.length),this[e]|this[e+1]<<
8|this[e+2]<<16|this[e+3]<<24};l.prototype.readInt32BE=function(e,t){return e=e>>>
0,t||O(e,4,this.length),this[e]<<24|this[e+1]<<16|this[e+2]<<8|this[e+3]};l.prototype.
readBigInt64LE=me(function(e){e=e>>>0,Te(e,"offset");let t=this[e],n=this[e+7];(t===
void 0||n===void 0)&&We(e,this.length-8);let i=this[e+4]+this[e+5]*2**8+this[e+6]*
2**16+(n<<24);return(BigInt(i)<<BigInt(32))+BigInt(t+this[++e]*2**8+this[++e]*2**
16+this[++e]*2**24)});l.prototype.readBigInt64BE=me(function(e){e=e>>>0,Te(e,"of\
fset");let t=this[e],n=this[e+7];(t===void 0||n===void 0)&&We(e,this.length-8);let i=(t<<
24)+this[++e]*2**16+this[++e]*2**8+this[++e];return(BigInt(i)<<BigInt(32))+BigInt(
this[++e]*2**24+this[++e]*2**16+this[++e]*2**8+n)});l.prototype.readFloatLE=function(e,t){
return e=e>>>0,t||O(e,4,this.length),Ie.read(this,e,!0,23,4)};l.prototype.readFloatBE=
function(e,t){return e=e>>>0,t||O(e,4,this.length),Ie.read(this,e,!1,23,4)};l.prototype.
readDoubleLE=function(e,t){return e=e>>>0,t||O(e,8,this.length),Ie.read(this,e,!0,
52,8)};l.prototype.readDoubleBE=function(e,t){return e=e>>>0,t||O(e,8,this.length),
Ie.read(this,e,!1,52,8)};function V(r,e,t,n,i,s){if(!l.isBuffer(r))throw new TypeError(
'"buffer" argument must be a Buffer instance');if(e>i||e<s)throw new RangeError(
'"value" argument is out of bounds');if(t+n>r.length)throw new RangeError("Index\
 out of range")}l.prototype.writeUintLE=l.prototype.writeUIntLE=function(e,t,n,i){
if(e=+e,t=t>>>0,n=n>>>0,!i){let a=Math.pow(2,8*n)-1;V(this,e,t,n,a,0)}let s=1,o=0;
for(this[t]=e&255;++o<n&&(s*=256);)this[t+o]=e/s&255;return t+n};l.prototype.writeUintBE=
l.prototype.writeUIntBE=function(e,t,n,i){if(e=+e,t=t>>>0,n=n>>>0,!i){let a=Math.
pow(2,8*n)-1;V(this,e,t,n,a,0)}let s=n-1,o=1;for(this[t+s]=e&255;--s>=0&&(o*=256);)
this[t+s]=e/o&255;return t+n};l.prototype.writeUint8=l.prototype.writeUInt8=function(e,t,n){
return e=+e,t=t>>>0,n||V(this,e,t,1,255,0),this[t]=e&255,t+1};l.prototype.writeUint16LE=
l.prototype.writeUInt16LE=function(e,t,n){return e=+e,t=t>>>0,n||V(this,e,t,2,65535,
0),this[t]=e&255,this[t+1]=e>>>8,t+2};l.prototype.writeUint16BE=l.prototype.writeUInt16BE=
function(e,t,n){return e=+e,t=t>>>0,n||V(this,e,t,2,65535,0),this[t]=e>>>8,this[t+
1]=e&255,t+2};l.prototype.writeUint32LE=l.prototype.writeUInt32LE=function(e,t,n){
return e=+e,t=t>>>0,n||V(this,e,t,4,4294967295,0),this[t+3]=e>>>24,this[t+2]=e>>>
16,this[t+1]=e>>>8,this[t]=e&255,t+4};l.prototype.writeUint32BE=l.prototype.writeUInt32BE=
function(e,t,n){return e=+e,t=t>>>0,n||V(this,e,t,4,4294967295,0),this[t]=e>>>24,
this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=e&255,t+4};function cn(r,e,t,n,i){dn(
e,n,i,r,t,7);let s=Number(e&BigInt(4294967295));r[t++]=s,s=s>>8,r[t++]=s,s=s>>8,
r[t++]=s,s=s>>8,r[t++]=s;let o=Number(e>>BigInt(32)&BigInt(4294967295));return r[t++]=
o,o=o>>8,r[t++]=o,o=o>>8,r[t++]=o,o=o>>8,r[t++]=o,t}function hn(r,e,t,n,i){dn(e,
n,i,r,t,7);let s=Number(e&BigInt(4294967295));r[t+7]=s,s=s>>8,r[t+6]=s,s=s>>8,r[t+
5]=s,s=s>>8,r[t+4]=s;let o=Number(e>>BigInt(32)&BigInt(4294967295));return r[t+3]=
o,o=o>>8,r[t+2]=o,o=o>>8,r[t+1]=o,o=o>>8,r[t]=o,t+8}l.prototype.writeBigUInt64LE=
me(function(e,t=0){return cn(this,e,t,BigInt(0),BigInt("0xffffffffffffffff"))});
l.prototype.writeBigUInt64BE=me(function(e,t=0){return hn(this,e,t,BigInt(0),BigInt(
"0xffffffffffffffff"))});l.prototype.writeIntLE=function(e,t,n,i){if(e=+e,t=t>>>
0,!i){let u=Math.pow(2,8*n-1);V(this,e,t,n,u-1,-u)}let s=0,o=1,a=0;for(this[t]=e&
255;++s<n&&(o*=256);)e<0&&a===0&&this[t+s-1]!==0&&(a=1),this[t+s]=(e/o>>0)-a&255;
return t+n};l.prototype.writeIntBE=function(e,t,n,i){if(e=+e,t=t>>>0,!i){let u=Math.
pow(2,8*n-1);V(this,e,t,n,u-1,-u)}let s=n-1,o=1,a=0;for(this[t+s]=e&255;--s>=0&&
(o*=256);)e<0&&a===0&&this[t+s+1]!==0&&(a=1),this[t+s]=(e/o>>0)-a&255;return t+n};
l.prototype.writeInt8=function(e,t,n){return e=+e,t=t>>>0,n||V(this,e,t,1,127,-128),
e<0&&(e=255+e+1),this[t]=e&255,t+1};l.prototype.writeInt16LE=function(e,t,n){return e=
+e,t=t>>>0,n||V(this,e,t,2,32767,-32768),this[t]=e&255,this[t+1]=e>>>8,t+2};l.prototype.
writeInt16BE=function(e,t,n){return e=+e,t=t>>>0,n||V(this,e,t,2,32767,-32768),this[t]=
e>>>8,this[t+1]=e&255,t+2};l.prototype.writeInt32LE=function(e,t,n){return e=+e,
t=t>>>0,n||V(this,e,t,4,2147483647,-2147483648),this[t]=e&255,this[t+1]=e>>>8,this[t+
2]=e>>>16,this[t+3]=e>>>24,t+4};l.prototype.writeInt32BE=function(e,t,n){return e=
+e,t=t>>>0,n||V(this,e,t,4,2147483647,-2147483648),e<0&&(e=4294967295+e+1),this[t]=
e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=e&255,t+4};l.prototype.writeBigInt64LE=
me(function(e,t=0){return cn(this,e,t,-BigInt("0x8000000000000000"),BigInt("0x7f\
ffffffffffffff"))});l.prototype.writeBigInt64BE=me(function(e,t=0){return hn(this,
e,t,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))});function ln(r,e,t,n,i,s){
if(t+n>r.length)throw new RangeError("Index out of range");if(t<0)throw new RangeError(
"Index out of range")}function fn(r,e,t,n,i){return e=+e,t=t>>>0,i||ln(r,e,t,4,34028234663852886e22,
-34028234663852886e22),Ie.write(r,e,t,n,23,4),t+4}l.prototype.writeFloatLE=function(e,t,n){
return fn(this,e,t,!0,n)};l.prototype.writeFloatBE=function(e,t,n){return fn(this,
e,t,!1,n)};function pn(r,e,t,n,i){return e=+e,t=t>>>0,i||ln(r,e,t,8,17976931348623157e292,
-17976931348623157e292),Ie.write(r,e,t,n,52,8),t+8}l.prototype.writeDoubleLE=function(e,t,n){
return pn(this,e,t,!0,n)};l.prototype.writeDoubleBE=function(e,t,n){return pn(this,
e,t,!1,n)};l.prototype.copy=function(e,t,n,i){if(!l.isBuffer(e))throw new TypeError(
"argument should be a Buffer");if(n||(n=0),!i&&i!==0&&(i=this.length),t>=e.length&&
(t=e.length),t||(t=0),i>0&&i<n&&(i=n),i===n||e.length===0||this.length===0)return 0;
if(t<0)throw new RangeError("targetStart out of bounds");if(n<0||n>=this.length)
throw new RangeError("Index out of range");if(i<0)throw new RangeError("sourceEn\
d out of bounds");i>this.length&&(i=this.length),e.length-t<i-n&&(i=e.length-t+n);
let s=i-n;return this===e&&typeof Uint8Array.prototype.copyWithin=="function"?this.
copyWithin(t,n,i):Uint8Array.prototype.set.call(e,this.subarray(n,i),t),s};l.prototype.
fill=function(e,t,n,i){if(typeof e=="string"){if(typeof t=="string"?(i=t,t=0,n=this.
length):typeof n=="string"&&(i=n,n=this.length),i!==void 0&&typeof i!="string")throw new TypeError(
"encoding must be a string");if(typeof i=="string"&&!l.isEncoding(i))throw new TypeError(
"Unknown encoding: "+i);if(e.length===1){let o=e.charCodeAt(0);(i==="utf8"&&o<128||
i==="latin1")&&(e=o)}}else typeof e=="number"?e=e&255:typeof e=="boolean"&&(e=Number(
e));if(t<0||this.length<t||this.length<n)throw new RangeError("Out of range inde\
x");if(n<=t)return this;t=t>>>0,n=n===void 0?this.length:n>>>0,e||(e=0);let s;if(typeof e==
"number")for(s=t;s<n;++s)this[s]=e;else{let o=l.isBuffer(e)?e:l.from(e,i),a=o.length;
if(a===0)throw new TypeError('The value "'+e+'" is invalid for argument "value"');
for(s=0;s<n-t;++s)this[s+t]=o[s%a]}return this};var Ce={};function Mt(r,e,t){Ce[r]=
class extends t{constructor(){super(),Object.defineProperty(this,"message",{value:e.
apply(this,arguments),writable:!0,configurable:!0}),this.name=`${this.name} [${r}\
]`,this.stack,delete this.name}get code(){return r}set code(i){Object.defineProperty(
this,"code",{configurable:!0,enumerable:!0,value:i,writable:!0})}toString(){return`${this.
name} [${r}]: ${this.message}`}}}Mt("ERR_BUFFER_OUT_OF_BOUNDS",function(r){return r?
`${r} is outside of buffer bounds`:"Attempt to access memory outside buffer boun\
ds"},RangeError);Mt("ERR_INVALID_ARG_TYPE",function(r,e){return`The "${r}" argum\
ent must be of type number. Received type ${typeof e}`},TypeError);Mt("ERR_OUT_O\
F_RANGE",function(r,e,t){let n=`The value of "${r}" is out of range.`,i=t;return Number.
isInteger(t)&&Math.abs(t)>2**32?i=rn(String(t)):typeof t=="bigint"&&(i=String(t),
(t>BigInt(2)**BigInt(32)||t<-(BigInt(2)**BigInt(32)))&&(i=rn(i)),i+="n"),n+=` It\
 must be ${e}. Received ${i}`,n},RangeError);function rn(r){let e="",t=r.length,
n=r[0]==="-"?1:0;for(;t>=n+4;t-=3)e=`_${r.slice(t-3,t)}${e}`;return`${r.slice(0,
t)}${e}`}function Xs(r,e,t){Te(e,"offset"),(r[e]===void 0||r[e+t]===void 0)&&We(
e,r.length-(t+1))}function dn(r,e,t,n,i,s){if(r>t||r<e){let o=typeof e=="bigint"?
"n":"",a;throw s>3?e===0||e===BigInt(0)?a=`>= 0${o} and < 2${o} ** ${(s+1)*8}${o}`:
a=`>= -(2${o} ** ${(s+1)*8-1}${o}) and < 2 ** ${(s+1)*8-1}${o}`:a=`>= ${e}${o} a\
nd <= ${t}${o}`,new Ce.ERR_OUT_OF_RANGE("value",a,r)}Xs(n,i,s)}function Te(r,e){
if(typeof r!="number")throw new Ce.ERR_INVALID_ARG_TYPE(e,"number",r)}function We(r,e,t){
throw Math.floor(r)!==r?(Te(r,t),new Ce.ERR_OUT_OF_RANGE(t||"offset","an integer",
r)):e<0?new Ce.ERR_BUFFER_OUT_OF_BOUNDS:new Ce.ERR_OUT_OF_RANGE(t||"offset",`>= ${t?
1:0} and <= ${e}`,r)}var eo=/[^+/0-9A-Za-z-_]/g;function to(r){if(r=r.split("=")[0],
r=r.trim().replace(eo,""),r.length<2)return"";for(;r.length%4!==0;)r=r+"=";return r}
function Lt(r,e){e=e||1/0;let t,n=r.length,i=null,s=[];for(let o=0;o<n;++o){if(t=
r.charCodeAt(o),t>55295&&t<57344){if(!i){if(t>56319){(e-=3)>-1&&s.push(239,191,189);
continue}else if(o+1===n){(e-=3)>-1&&s.push(239,191,189);continue}i=t;continue}if(t<
56320){(e-=3)>-1&&s.push(239,191,189),i=t;continue}t=(i-55296<<10|t-56320)+65536}else
i&&(e-=3)>-1&&s.push(239,191,189);if(i=null,t<128){if((e-=1)<0)break;s.push(t)}else if(t<
2048){if((e-=2)<0)break;s.push(t>>6|192,t&63|128)}else if(t<65536){if((e-=3)<0)break;
s.push(t>>12|224,t>>6&63|128,t&63|128)}else if(t<1114112){if((e-=4)<0)break;s.push(
t>>18|240,t>>12&63|128,t>>6&63|128,t&63|128)}else throw new Error("Invalid code \
point")}return s}function ro(r){let e=[];for(let t=0;t<r.length;++t)e.push(r.charCodeAt(
t)&255);return e}function no(r,e){let t,n,i,s=[];for(let o=0;o<r.length&&!((e-=2)<
0);++o)t=r.charCodeAt(o),n=t>>8,i=t%256,s.push(i),s.push(n);return s}function yn(r){
return Tt.toByteArray(to(r))}function st(r,e,t,n){let i;for(i=0;i<n&&!(i+t>=e.length||
i>=r.length);++i)e[i+t]=r[i];return i}function ae(r,e){return r instanceof e||r!=
null&&r.constructor!=null&&r.constructor.name!=null&&r.constructor.name===e.name}
function Dt(r){return r!==r}var io=function(){let r="0123456789abcdef",e=new Array(
256);for(let t=0;t<16;++t){let n=t*16;for(let i=0;i<16;++i)e[n+i]=r[t]+r[i]}return e}();
function me(r){return typeof BigInt>"u"?so:r}function so(){throw new Error("BigI\
nt not supported")}});var w,b,E,g,p,d,f=$(()=>{"use strict";w=globalThis,b=globalThis.setImmediate??(r=>setTimeout(
r,0)),E=globalThis.clearImmediate??(r=>clearTimeout(r)),g=globalThis.crypto??{};
g.subtle??(g.subtle={});p=typeof globalThis.Buffer=="function"&&typeof globalThis.
Buffer.allocUnsafe=="function"?globalThis.Buffer:mn().Buffer,d=globalThis.process??
{};d.env??(d.env={});try{d.nextTick(()=>{})}catch{let e=Promise.resolve();d.nextTick=
e.then.bind(e)}});var ge=C((xc,kt)=>{"use strict";f();var Be=typeof Reflect=="object"?Reflect:null,
gn=Be&&typeof Be.apply=="function"?Be.apply:function(e,t,n){return Function.prototype.
apply.call(e,t,n)},ot;Be&&typeof Be.ownKeys=="function"?ot=Be.ownKeys:Object.getOwnPropertySymbols?
ot=function(e){return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(
e))}:ot=function(e){return Object.getOwnPropertyNames(e)};function oo(r){console&&
console.warn&&console.warn(r)}var bn=Number.isNaN||function(e){return e!==e};function P(){
P.init.call(this)}kt.exports=P;kt.exports.once=ho;P.EventEmitter=P;P.prototype._events=
void 0;P.prototype._eventsCount=0;P.prototype._maxListeners=void 0;var wn=10;function at(r){
if(typeof r!="function")throw new TypeError('The "listener" argument must be of \
type Function. Received type '+typeof r)}Object.defineProperty(P,"defaultMaxList\
eners",{enumerable:!0,get:function(){return wn},set:function(r){if(typeof r!="nu\
mber"||r<0||bn(r))throw new RangeError('The value of "defaultMaxListeners" is ou\
t of range. It must be a non-negative number. Received '+r+".");wn=r}});P.init=function(){
(this._events===void 0||this._events===Object.getPrototypeOf(this)._events)&&(this.
_events=Object.create(null),this._eventsCount=0),this._maxListeners=this._maxListeners||
void 0};P.prototype.setMaxListeners=function(e){if(typeof e!="number"||e<0||bn(e))
throw new RangeError('The value of "n" is out of range. It must be a non-negativ\
e number. Received '+e+".");return this._maxListeners=e,this};function Sn(r){return r.
_maxListeners===void 0?P.defaultMaxListeners:r._maxListeners}P.prototype.getMaxListeners=
function(){return Sn(this)};P.prototype.emit=function(e){for(var t=[],n=1;n<arguments.
length;n++)t.push(arguments[n]);var i=e==="error",s=this._events;if(s!==void 0)i=
i&&s.error===void 0;else if(!i)return!1;if(i){var o;if(t.length>0&&(o=t[0]),o instanceof
Error)throw o;var a=new Error("Unhandled error."+(o?" ("+o.message+")":""));throw a.
context=o,a}var u=s[e];if(u===void 0)return!1;if(typeof u=="function")gn(u,this,
t);else for(var c=u.length,h=An(u,c),n=0;n<c;++n)gn(h[n],this,t);return!0};function xn(r,e,t,n){
var i,s,o;if(at(t),s=r._events,s===void 0?(s=r._events=Object.create(null),r._eventsCount=
0):(s.newListener!==void 0&&(r.emit("newListener",e,t.listener?t.listener:t),s=r.
_events),o=s[e]),o===void 0)o=s[e]=t,++r._eventsCount;else if(typeof o=="functio\
n"?o=s[e]=n?[t,o]:[o,t]:n?o.unshift(t):o.push(t),i=Sn(r),i>0&&o.length>i&&!o.warned){
o.warned=!0;var a=new Error("Possible EventEmitter memory leak detected. "+o.length+
" "+String(e)+" listeners added. Use emitter.setMaxListeners() to increase limit");
a.name="MaxListenersExceededWarning",a.emitter=r,a.type=e,a.count=o.length,oo(a)}
return r}P.prototype.addListener=function(e,t){return xn(this,e,t,!1)};P.prototype.
on=P.prototype.addListener;P.prototype.prependListener=function(e,t){return xn(this,
e,t,!0)};function ao(){if(!this.fired)return this.target.removeListener(this.type,
this.wrapFn),this.fired=!0,arguments.length===0?this.listener.call(this.target):
this.listener.apply(this.target,arguments)}function En(r,e,t){var n={fired:!1,wrapFn:void 0,
target:r,type:e,listener:t},i=ao.bind(n);return i.listener=t,n.wrapFn=i,i}P.prototype.
once=function(e,t){return at(t),this.on(e,En(this,e,t)),this};P.prototype.prependOnceListener=
function(e,t){return at(t),this.prependListener(e,En(this,e,t)),this};P.prototype.
removeListener=function(e,t){var n,i,s,o,a;if(at(t),i=this._events,i===void 0)return this;
if(n=i[e],n===void 0)return this;if(n===t||n.listener===t)--this._eventsCount===
0?this._events=Object.create(null):(delete i[e],i.removeListener&&this.emit("rem\
oveListener",e,n.listener||t));else if(typeof n!="function"){for(s=-1,o=n.length-
1;o>=0;o--)if(n[o]===t||n[o].listener===t){a=n[o].listener,s=o;break}if(s<0)return this;
s===0?n.shift():uo(n,s),n.length===1&&(i[e]=n[0]),i.removeListener!==void 0&&this.
emit("removeListener",e,a||t)}return this};P.prototype.off=P.prototype.removeListener;
P.prototype.removeAllListeners=function(e){var t,n,i;if(n=this._events,n===void 0)
return this;if(n.removeListener===void 0)return arguments.length===0?(this._events=
Object.create(null),this._eventsCount=0):n[e]!==void 0&&(--this._eventsCount===0?
this._events=Object.create(null):delete n[e]),this;if(arguments.length===0){var s=Object.
keys(n),o;for(i=0;i<s.length;++i)o=s[i],o!=="removeListener"&&this.removeAllListeners(
o);return this.removeAllListeners("removeListener"),this._events=Object.create(null),
this._eventsCount=0,this}if(t=n[e],typeof t=="function")this.removeListener(e,t);else if(t!==
void 0)for(i=t.length-1;i>=0;i--)this.removeListener(e,t[i]);return this};function vn(r,e,t){
var n=r._events;if(n===void 0)return[];var i=n[e];return i===void 0?[]:typeof i==
"function"?t?[i.listener||i]:[i]:t?co(i):An(i,i.length)}P.prototype.listeners=function(e){
return vn(this,e,!0)};P.prototype.rawListeners=function(e){return vn(this,e,!1)};
P.listenerCount=function(r,e){return typeof r.listenerCount=="function"?r.listenerCount(
e):_n.call(r,e)};P.prototype.listenerCount=_n;function _n(r){var e=this._events;
if(e!==void 0){var t=e[r];if(typeof t=="function")return 1;if(t!==void 0)return t.
length}return 0}P.prototype.eventNames=function(){return this._eventsCount>0?ot(
this._events):[]};function An(r,e){for(var t=new Array(e),n=0;n<e;++n)t[n]=r[n];
return t}function uo(r,e){for(;e+1<r.length;e++)r[e]=r[e+1];r.pop()}function co(r){
for(var e=new Array(r.length),t=0;t<e.length;++t)e[t]=r[t].listener||r[t];return e}
function ho(r,e){return new Promise(function(t,n){function i(o){r.removeListener(
e,s),n(o)}function s(){typeof r.removeListener=="function"&&r.removeListener("er\
ror",i),t([].slice.call(arguments))}Cn(r,e,s,{once:!0}),e!=="error"&&lo(r,i,{once:!0})})}
function lo(r,e,t){typeof r.on=="function"&&Cn(r,"error",e,t)}function Cn(r,e,t,n){
if(typeof r.on=="function")n.once?r.once(e,t):r.on(e,t);else if(typeof r.addEventListener==
"function")r.addEventListener(e,function i(s){n.once&&r.removeEventListener(e,i),
t(s)});else throw new TypeError('The "emitter" argument must be of type EventEmi\
tter. Received type '+typeof r)}});var je={};X(je,{default:()=>fo});var fo,He=$(()=>{f();fo={}});function Ge(r){let e=1779033703,t=3144134277,n=1013904242,i=2773480762,s=1359893119,
o=2600822924,a=528734635,u=1541459225,c=0,h=0,y=[1116352408,1899447441,3049323471,
3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,
1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,
604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,
3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,
1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,
3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,
883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,
2361852424,2428436474,2756734187,3204031479,3329325298],x=(_,m)=>_>>>m|_<<32-m,v=new Uint32Array(
64),T=new Uint8Array(64),q=()=>{for(let B=0,H=0;B<16;B++,H+=4)v[B]=T[H]<<24|T[H+
1]<<16|T[H+2]<<8|T[H+3];for(let B=16;B<64;B++){let H=x(v[B-15],7)^x(v[B-15],18)^
v[B-15]>>>3,ce=x(v[B-2],17)^x(v[B-2],19)^v[B-2]>>>10;v[B]=v[B-16]+H+v[B-7]+ce|0}
let _=e,m=t,M=n,j=i,N=s,Q=o,ue=a,de=u;for(let B=0;B<64;B++){let H=x(N,6)^x(N,11)^
x(N,25),ce=N&Q^~N&ue,ye=de+H+ce+y[B]+v[B]|0,Ee=x(_,2)^x(_,13)^x(_,22),he=_&m^_&M^
m&M,ie=Ee+he|0;de=ue,ue=Q,Q=N,N=j+ye|0,j=M,M=m,m=_,_=ye+ie|0}e=e+_|0,t=t+m|0,n=n+
M|0,i=i+j|0,s=s+N|0,o=o+Q|0,a=a+ue|0,u=u+de|0,h=0},J=_=>{typeof _=="string"&&(_=
new TextEncoder().encode(_));for(let m=0;m<_.length;m++)T[h++]=_[m],h===64&&q();
c+=_.length},pe=()=>{if(T[h++]=128,h==64&&q(),h+8>64){for(;h<64;)T[h++]=0;q()}for(;h<
58;)T[h++]=0;let _=c*8;T[h++]=_/1099511627776&255,T[h++]=_/4294967296&255,T[h++]=
_>>>24,T[h++]=_>>>16&255,T[h++]=_>>>8&255,T[h++]=_&255,q();let m=new Uint8Array(
32);return m[0]=e>>>24,m[1]=e>>>16&255,m[2]=e>>>8&255,m[3]=e&255,m[4]=t>>>24,m[5]=
t>>>16&255,m[6]=t>>>8&255,m[7]=t&255,m[8]=n>>>24,m[9]=n>>>16&255,m[10]=n>>>8&255,
m[11]=n&255,m[12]=i>>>24,m[13]=i>>>16&255,m[14]=i>>>8&255,m[15]=i&255,m[16]=s>>>
24,m[17]=s>>>16&255,m[18]=s>>>8&255,m[19]=s&255,m[20]=o>>>24,m[21]=o>>>16&255,m[22]=
o>>>8&255,m[23]=o&255,m[24]=a>>>24,m[25]=a>>>16&255,m[26]=a>>>8&255,m[27]=a&255,
m[28]=u>>>24,m[29]=u>>>16&255,m[30]=u>>>8&255,m[31]=u&255,m};return r===void 0?{
add:J,digest:pe}:(J(r),pe())}var In=$(()=>{"use strict";f()});var k,$e,Tn=$(()=>{"use strict";f();k=class k{constructor(){I(this,"_dataLength",
0);I(this,"_bufferLength",0);I(this,"_state",new Int32Array(4));I(this,"_buffer",
new ArrayBuffer(68));I(this,"_buffer8");I(this,"_buffer32");this._buffer8=new Uint8Array(
this._buffer,0,68),this._buffer32=new Uint32Array(this._buffer,0,17),this.start()}static hashByteArray(e,t=!1){
return this.onePassHasher.start().appendByteArray(e).end(t)}static hashStr(e,t=!1){
return this.onePassHasher.start().appendStr(e).end(t)}static hashAsciiStr(e,t=!1){
return this.onePassHasher.start().appendAsciiStr(e).end(t)}static _hex(e){let t=k.
hexChars,n=k.hexOut,i,s,o,a;for(a=0;a<4;a+=1)for(s=a*8,i=e[a],o=0;o<8;o+=2)n[s+1+
o]=t.charAt(i&15),i>>>=4,n[s+0+o]=t.charAt(i&15),i>>>=4;return n.join("")}static _md5cycle(e,t){
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
0,e[2]=s+e[2]|0,e[3]=o+e[3]|0}start(){return this._dataLength=0,this._bufferLength=
0,this._state.set(k.stateIdentity),this}appendStr(e){let t=this._buffer8,n=this.
_buffer32,i=this._bufferLength,s,o;for(o=0;o<e.length;o+=1){if(s=e.charCodeAt(o),
s<128)t[i++]=s;else if(s<2048)t[i++]=(s>>>6)+192,t[i++]=s&63|128;else if(s<55296||
s>56319)t[i++]=(s>>>12)+224,t[i++]=s>>>6&63|128,t[i++]=s&63|128;else{if(s=(s-55296)*
1024+(e.charCodeAt(++o)-56320)+65536,s>1114111)throw new Error("Unicode standard\
 supports code points up to U+10FFFF");t[i++]=(s>>>18)+240,t[i++]=s>>>12&63|128,
t[i++]=s>>>6&63|128,t[i++]=s&63|128}i>=64&&(this._dataLength+=64,k._md5cycle(this.
_state,n),i-=64,n[0]=n[16])}return this._bufferLength=i,this}appendAsciiStr(e){let t=this.
_buffer8,n=this._buffer32,i=this._bufferLength,s,o=0;for(;;){for(s=Math.min(e.length-
o,64-i);s--;)t[i++]=e.charCodeAt(o++);if(i<64)break;this._dataLength+=64,k._md5cycle(
this._state,n),i=0}return this._bufferLength=i,this}appendByteArray(e){let t=this.
_buffer8,n=this._buffer32,i=this._bufferLength,s,o=0;for(;;){for(s=Math.min(e.length-
o,64-i);s--;)t[i++]=e[o++];if(i<64)break;this._dataLength+=64,k._md5cycle(this._state,
n),i=0}return this._bufferLength=i,this}getState(){let e=this._state;return{buffer:String.
fromCharCode.apply(null,Array.from(this._buffer8)),buflen:this._bufferLength,length:this.
_dataLength,state:[e[0],e[1],e[2],e[3]]}}setState(e){let t=e.buffer,n=e.state,i=this.
_state,s;for(this._dataLength=e.length,this._bufferLength=e.buflen,i[0]=n[0],i[1]=
n[1],i[2]=n[2],i[3]=n[3],s=0;s<t.length;s+=1)this._buffer8[s]=t.charCodeAt(s)}end(e=!1){
let t=this._bufferLength,n=this._buffer8,i=this._buffer32,s=(t>>2)+1;this._dataLength+=
t;let o=this._dataLength*8;if(n[t]=128,n[t+1]=n[t+2]=n[t+3]=0,i.set(k.buffer32Identity.
subarray(s),s),t>55&&(k._md5cycle(this._state,i),i.set(k.buffer32Identity)),o<=4294967295)
i[14]=o;else{let a=o.toString(16).match(/(.*?)(.{0,8})$/);if(a===null)return;let u=parseInt(
a[2],16),c=parseInt(a[1],16)||0;i[14]=u,i[15]=c}return k._md5cycle(this._state,i),
e?this._state:k._hex(this._state)}};I(k,"stateIdentity",new Int32Array([1732584193,
-271733879,-1732584194,271733878])),I(k,"buffer32Identity",new Int32Array([0,0,0,
0,0,0,0,0,0,0,0,0,0,0,0,0])),I(k,"hexChars","0123456789abcdef"),I(k,"hexOut",[]),
I(k,"onePassHasher",new k);$e=k});var Ot={};X(Ot,{createHash:()=>yo,createHmac:()=>mo,randomBytes:()=>po});function po(r){
return g.getRandomValues(p.alloc(r))}function yo(r){if(r==="sha256")return{update:function(e){
return{digest:function(){return p.from(Ge(e))}}}};if(r==="md5")return{update:function(e){
return{digest:function(){return typeof e=="string"?$e.hashStr(e):$e.hashByteArray(
e)}}}};throw new Error(`Hash type '${r}' not supported`)}function mo(r,e){if(r!==
"sha256")throw new Error(`Only sha256 is supported (requested: '${r}')`);return{
update:function(t){return{digest:function(){typeof e=="string"&&(e=new TextEncoder().
encode(e)),typeof t=="string"&&(t=new TextEncoder().encode(t));let n=e.length;if(n>
64)e=Ge(e);else if(n<64){let u=new Uint8Array(64);u.set(e),e=u}let i=new Uint8Array(
64),s=new Uint8Array(64);for(let u=0;u<64;u++)i[u]=54^e[u],s[u]=92^e[u];let o=new Uint8Array(
t.length+64);o.set(i,0),o.set(t,64);let a=new Uint8Array(64+32);return a.set(s,0),
a.set(Ge(o),64),p.from(Ge(a))}}}}}var Ut=$(()=>{f();In();Tn()});var Nt=C(Pn=>{"use strict";f();Pn.parse=function(r,e){return new qt(r,e).parse()};
var qt=class r{constructor(e,t){this.source=e,this.transform=t||go,this.position=
0,this.entries=[],this.recorded=[],this.dimension=0}isEof(){return this.position>=
this.source.length}nextCharacter(){var e=this.source[this.position++];return e===
"\\"?{value:this.source[this.position++],escaped:!0}:{value:e,escaped:!1}}record(e){
this.recorded.push(e)}newEntry(e){var t;(this.recorded.length>0||e)&&(t=this.recorded.
join(""),t==="NULL"&&!e&&(t=null),t!==null&&(t=this.transform(t)),this.entries.push(
t),this.recorded=[])}consumeDimensions(){if(this.source[0]==="[")for(;!this.isEof();){
var e=this.nextCharacter();if(e.value==="=")break}}parse(e){var t,n,i;for(this.consumeDimensions();!this.
isEof();)if(t=this.nextCharacter(),t.value==="{"&&!i)this.dimension++,this.dimension>
1&&(n=new r(this.source.substr(this.position-1),this.transform),this.entries.push(
n.parse(!0)),this.position+=n.position-2);else if(t.value==="}"&&!i){if(this.dimension--,
!this.dimension&&(this.newEntry(),e))return this.entries}else t.value==='"'&&!t.
escaped?(i&&this.newEntry(!0),i=!i):t.value===","&&!i?this.newEntry():this.record(
t.value);if(this.dimension!==0)throw new Error("array dimension not balanced");return this.
entries}};function go(r){return r}});var Qt=C((Mc,Bn)=>{f();var wo=Nt();Bn.exports={create:function(r,e){return{parse:function(){
return wo.parse(r,e)}}}}});var Fn=C((kc,Rn)=>{"use strict";f();var bo=/(\d{1,})-(\d{2})-(\d{2}) (\d{2}):(\d{2}):(\d{2})(\.\d{1,})?.*?( BC)?$/,
So=/^(\d{1,})-(\d{2})-(\d{2})( BC)?$/,xo=/([Z+-])(\d{2})?:?(\d{2})?:?(\d{2})?/,Eo=/^-?infinity$/;
Rn.exports=function(e){if(Eo.test(e))return Number(e.replace("i","I"));var t=bo.
exec(e);if(!t)return vo(e)||null;var n=!!t[8],i=parseInt(t[1],10);n&&(i=Ln(i));var s=parseInt(
t[2],10)-1,o=t[3],a=parseInt(t[4],10),u=parseInt(t[5],10),c=parseInt(t[6],10),h=t[7];
h=h?1e3*parseFloat(h):0;var y,x=_o(e);return x!=null?(y=new Date(Date.UTC(i,s,o,
a,u,c,h)),Wt(i)&&y.setUTCFullYear(i),x!==0&&y.setTime(y.getTime()-x)):(y=new Date(
i,s,o,a,u,c,h),Wt(i)&&y.setFullYear(i)),y};function vo(r){var e=So.exec(r);if(e){
var t=parseInt(e[1],10),n=!!e[4];n&&(t=Ln(t));var i=parseInt(e[2],10)-1,s=e[3],o=new Date(
t,i,s);return Wt(t)&&o.setFullYear(t),o}}function _o(r){if(r.endsWith("+00"))return 0;
var e=xo.exec(r.split(" ")[1]);if(e){var t=e[1];if(t==="Z")return 0;var n=t==="-"?
-1:1,i=parseInt(e[2],10)*3600+parseInt(e[3]||0,10)*60+parseInt(e[4]||0,10);return i*
n*1e3}}function Ln(r){return-(r-1)}function Wt(r){return r>=0&&r<100}});var Dn=C((Uc,Mn)=>{f();Mn.exports=Co;var Ao=Object.prototype.hasOwnProperty;function Co(r){
for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var n in t)Ao.call(t,
n)&&(r[n]=t[n])}return r}});var Un=C((Nc,On)=>{"use strict";f();var Io=Dn();On.exports=Le;function Le(r){if(!(this instanceof
Le))return new Le(r);Io(this,qo(r))}var To=["seconds","minutes","hours","days","\
months","years"];Le.prototype.toPostgres=function(){var r=To.filter(this.hasOwnProperty,
this);return this.milliseconds&&r.indexOf("seconds")<0&&r.push("seconds"),r.length===
0?"0":r.map(function(e){var t=this[e]||0;return e==="seconds"&&this.milliseconds&&
(t=(t+this.milliseconds/1e3).toFixed(6).replace(/\.?0+$/,"")),t+" "+e},this).join(
" ")};var Po={years:"Y",months:"M",days:"D",hours:"H",minutes:"M",seconds:"S"},Bo=[
"years","months","days"],Lo=["hours","minutes","seconds"];Le.prototype.toISOString=
Le.prototype.toISO=function(){var r=Bo.map(t,this).join(""),e=Lo.map(t,this).join(
"");return"P"+r+"T"+e;function t(n){var i=this[n]||0;return n==="seconds"&&this.
milliseconds&&(i=(i+this.milliseconds/1e3).toFixed(6).replace(/0+$/,"")),i+Po[n]}};
var jt="([+-]?\\d+)",Ro=jt+"\\s+years?",Fo=jt+"\\s+mons?",Mo=jt+"\\s+days?",Do="\
([+-])?([\\d]*):(\\d\\d):(\\d\\d)\\.?(\\d{1,6})?",ko=new RegExp([Ro,Fo,Mo,Do].map(
function(r){return"("+r+")?"}).join("\\s*")),kn={years:2,months:4,days:6,hours:9,
minutes:10,seconds:11,milliseconds:12},Oo=["hours","minutes","seconds","millisec\
onds"];function Uo(r){var e=r+"000000".slice(r.length);return parseInt(e,10)/1e3}
function qo(r){if(!r)return{};var e=ko.exec(r),t=e[8]==="-";return Object.keys(kn).
reduce(function(n,i){var s=kn[i],o=e[s];return!o||(o=i==="milliseconds"?Uo(o):parseInt(
o,10),!o)||(t&&~Oo.indexOf(i)&&(o*=-1),n[i]=o),n},{})}});var Nn=C((Wc,qn)=>{"use strict";f();qn.exports=function(e){if(/^\\x/.test(e))return new p(
e.substr(2),"hex");for(var t="",n=0;n<e.length;)if(e[n]!=="\\")t+=e[n],++n;else if(/[0-7]{3}/.
test(e.substr(n+1,3)))t+=String.fromCharCode(parseInt(e.substr(n+1,3),8)),n+=4;else{
for(var i=1;n+i<e.length&&e[n+i]==="\\";)i++;for(var s=0;s<Math.floor(i/2);++s)t+=
"\\";n+=Math.floor(i/2)*2}return new p(t,"binary")}});var Kn=C((Hc,$n)=>{f();var Ke=Nt(),Ve=Qt(),ut=Fn(),Wn=Un(),jn=Nn();function ct(r){
return function(t){return t===null?t:r(t)}}function Hn(r){return r===null?r:r===
"TRUE"||r==="t"||r==="true"||r==="y"||r==="yes"||r==="on"||r==="1"}function No(r){
return r?Ke.parse(r,Hn):null}function Qo(r){return parseInt(r,10)}function Ht(r){
return r?Ke.parse(r,ct(Qo)):null}function Wo(r){return r?Ke.parse(r,ct(function(e){
return Gn(e).trim()})):null}var jo=function(r){if(!r)return null;var e=Ve.create(
r,function(t){return t!==null&&(t=Vt(t)),t});return e.parse()},Gt=function(r){if(!r)
return null;var e=Ve.create(r,function(t){return t!==null&&(t=parseFloat(t)),t});
return e.parse()},te=function(r){if(!r)return null;var e=Ve.create(r);return e.parse()},
$t=function(r){if(!r)return null;var e=Ve.create(r,function(t){return t!==null&&
(t=ut(t)),t});return e.parse()},Ho=function(r){if(!r)return null;var e=Ve.create(
r,function(t){return t!==null&&(t=Wn(t)),t});return e.parse()},Go=function(r){return r?
Ke.parse(r,ct(jn)):null},Kt=function(r){return parseInt(r,10)},Gn=function(r){var e=String(
r);return/^\d+$/.test(e)?e:r},Qn=function(r){return r?Ke.parse(r,ct(JSON.parse)):
null},Vt=function(r){return r[0]!=="("?null:(r=r.substring(1,r.length-1).split("\
,"),{x:parseFloat(r[0]),y:parseFloat(r[1])})},$o=function(r){if(r[0]!=="<"&&r[1]!==
"(")return null;for(var e="(",t="",n=!1,i=2;i<r.length-1;i++){if(n||(e+=r[i]),r[i]===
")"){n=!0;continue}else if(!n)continue;r[i]!==","&&(t+=r[i])}var s=Vt(e);return s.
radius=parseFloat(t),s},Ko=function(r){r(20,Gn),r(21,Kt),r(23,Kt),r(26,Kt),r(700,
parseFloat),r(701,parseFloat),r(16,Hn),r(1082,ut),r(1114,ut),r(1184,ut),r(600,Vt),
r(651,te),r(718,$o),r(1e3,No),r(1001,Go),r(1005,Ht),r(1007,Ht),r(1028,Ht),r(1016,
Wo),r(1017,jo),r(1021,Gt),r(1022,Gt),r(1231,Gt),r(1014,te),r(1015,te),r(1008,te),
r(1009,te),r(1040,te),r(1041,te),r(1115,$t),r(1182,$t),r(1185,$t),r(1186,Wn),r(1187,
Ho),r(17,jn),r(114,JSON.parse.bind(JSON)),r(3802,JSON.parse.bind(JSON)),r(199,Qn),
r(3807,Qn),r(3907,te),r(2951,te),r(791,te),r(1183,te),r(1270,te)};$n.exports={init:Ko}});var zn=C(($c,Vn)=>{"use strict";f();var z=1e6;function Vo(r){var e=r.readInt32BE(
0),t=r.readUInt32BE(4),n="";e<0&&(e=~e+(t===0),t=~t+1>>>0,n="-");var i="",s,o,a,
u,c,h;{if(s=e%z,e=e/z>>>0,o=4294967296*s+t,t=o/z>>>0,a=""+(o-z*t),t===0&&e===0)return n+
a+i;for(u="",c=6-a.length,h=0;h<c;h++)u+="0";i=u+a+i}{if(s=e%z,e=e/z>>>0,o=4294967296*
s+t,t=o/z>>>0,a=""+(o-z*t),t===0&&e===0)return n+a+i;for(u="",c=6-a.length,h=0;h<
c;h++)u+="0";i=u+a+i}{if(s=e%z,e=e/z>>>0,o=4294967296*s+t,t=o/z>>>0,a=""+(o-z*t),
t===0&&e===0)return n+a+i;for(u="",c=6-a.length,h=0;h<c;h++)u+="0";i=u+a+i}return s=
e%z,o=4294967296*s+t,a=""+o%z,n+a+i}Vn.exports=Vo});var ei=C((Vc,Xn)=>{f();var zo=zn(),L=function(r,e,t,n,i){t=t||0,n=n||!1,i=i||function(v,T,q){
return v*Math.pow(2,q)+T};var s=t>>3,o=function(v){return n?~v&255:v},a=255,u=8-
t%8;e<u&&(a=255<<8-e&255,u=e),t&&(a=a>>t%8);var c=0;t%8+e>=8&&(c=i(0,o(r[s])&a,u));
for(var h=e+t>>3,y=s+1;y<h;y++)c=i(c,o(r[y]),8);var x=(e+t)%8;return x>0&&(c=i(c,
o(r[h])>>8-x,x)),c},Jn=function(r,e,t){var n=Math.pow(2,t-1)-1,i=L(r,1),s=L(r,t,
1);if(s===0)return 0;var o=1,a=function(c,h,y){c===0&&(c=1);for(var x=1;x<=y;x++)
o/=2,(h&1<<y-x)>0&&(c+=o);return c},u=L(r,e,t+1,!1,a);return s==Math.pow(2,t+1)-
1?u===0?i===0?1/0:-1/0:NaN:(i===0?1:-1)*Math.pow(2,s-n)*u},Yo=function(r){return L(
r,1)==1?-1*(L(r,15,1,!0)+1):L(r,15,1)},Yn=function(r){return L(r,1)==1?-1*(L(r,31,
1,!0)+1):L(r,31,1)},Zo=function(r){return Jn(r,23,8)},Jo=function(r){return Jn(r,
52,11)},Xo=function(r){var e=L(r,16,32);if(e==49152)return NaN;for(var t=Math.pow(
1e4,L(r,16,16)),n=0,i=[],s=L(r,16),o=0;o<s;o++)n+=L(r,16,64+16*o)*t,t/=1e4;var a=Math.
pow(10,L(r,16,48));return(e===0?1:-1)*Math.round(n*a)/a},Zn=function(r,e){var t=L(
e,1),n=L(e,63,1),i=new Date((t===0?1:-1)*n/1e3+9466848e5);return r||i.setTime(i.
getTime()+i.getTimezoneOffset()*6e4),i.usec=n%1e3,i.getMicroSeconds=function(){return this.
usec},i.setMicroSeconds=function(s){this.usec=s},i.getUTCMicroSeconds=function(){
return this.usec},i},ze=function(r){for(var e=L(r,32),t=L(r,32,32),n=L(r,32,64),
i=96,s=[],o=0;o<e;o++)s[o]=L(r,32,i),i+=32,i+=32;var a=function(c){var h=L(r,32,
i);if(i+=32,h==4294967295)return null;var y;if(c==23||c==20)return y=L(r,h*8,i),
i+=h*8,y;if(c==25)return y=r.toString(this.encoding,i>>3,(i+=h<<3)>>3),y;console.
log("ERROR: ElementType not implemented: "+c)},u=function(c,h){var y=[],x;if(c.length>
1){var v=c.shift();for(x=0;x<v;x++)y[x]=u(c,h);c.unshift(v)}else for(x=0;x<c[0];x++)
y[x]=a(h);return y};return u(s,n)},ea=function(r){return r.toString("utf8")},ta=function(r){
return r===null?null:L(r,8)>0},ra=function(r){r(20,zo),r(21,Yo),r(23,Yn),r(26,Yn),
r(1700,Xo),r(700,Zo),r(701,Jo),r(16,ta),r(1114,Zn.bind(null,!1)),r(1184,Zn.bind(
null,!0)),r(1e3,ze),r(1007,ze),r(1016,ze),r(1008,ze),r(1009,ze),r(25,ea)};Xn.exports=
{init:ra}});var ri=C((Yc,ti)=>{f();ti.exports={BOOL:16,BYTEA:17,CHAR:18,INT8:20,INT2:21,INT4:23,
REGPROC:24,TEXT:25,OID:26,TID:27,XID:28,CID:29,JSON:114,XML:142,PG_NODE_TREE:194,
SMGR:210,PATH:602,POLYGON:604,CIDR:650,FLOAT4:700,FLOAT8:701,ABSTIME:702,RELTIME:703,
TINTERVAL:704,CIRCLE:718,MACADDR8:774,MONEY:790,MACADDR:829,INET:869,ACLITEM:1033,
BPCHAR:1042,VARCHAR:1043,DATE:1082,TIME:1083,TIMESTAMP:1114,TIMESTAMPTZ:1184,INTERVAL:1186,
TIMETZ:1266,BIT:1560,VARBIT:1562,NUMERIC:1700,REFCURSOR:1790,REGPROCEDURE:2202,REGOPER:2203,
REGOPERATOR:2204,REGCLASS:2205,REGTYPE:2206,UUID:2950,TXID_SNAPSHOT:2970,PG_LSN:3220,
PG_NDISTINCT:3361,PG_DEPENDENCIES:3402,TSVECTOR:3614,TSQUERY:3615,GTSVECTOR:3642,
REGCONFIG:3734,REGDICTIONARY:3769,JSONB:3802,REGNAMESPACE:4089,REGROLE:4096}});var Je=C(Ze=>{f();var na=Kn(),ia=ei(),sa=Qt(),oa=ri();Ze.getTypeParser=aa;Ze.setTypeParser=
ua;Ze.arrayParser=sa;Ze.builtins=oa;var Ye={text:{},binary:{}};function ni(r){return String(
r)}function aa(r,e){return e=e||"text",Ye[e]&&Ye[e][r]||ni}function ua(r,e,t){typeof e==
"function"&&(t=e,e="text"),Ye[e][r]=t}na.init(function(r,e){Ye.text[r]=e});ia.init(
function(r,e){Ye.binary[r]=e})});var Xe=C((eh,zt)=>{"use strict";f();zt.exports={host:"localhost",user:d.platform===
"win32"?d.env.USERNAME:d.env.USER,database:void 0,password:null,connectionString:void 0,
port:5432,rows:0,binary:!1,max:10,idleTimeoutMillis:3e4,client_encoding:"",ssl:!1,
application_name:void 0,fallback_application_name:void 0,options:void 0,parseInputDatesAsUTC:!1,
statement_timeout:!1,lock_timeout:!1,idle_in_transaction_session_timeout:!1,query_timeout:!1,
connect_timeout:0,keepalives:1,keepalives_idle:0};var Re=Je(),ca=Re.getTypeParser(
20,"text"),ha=Re.getTypeParser(1016,"text");zt.exports.__defineSetter__("parseIn\
t8",function(r){Re.setTypeParser(20,"text",r?Re.getTypeParser(23,"text"):ca),Re.
setTypeParser(1016,"text",r?Re.getTypeParser(1007,"text"):ha)})});var et=C((rh,si)=>{"use strict";f();var la=(Ut(),D(Ot)),fa=Xe();function pa(r){var e=r.
replace(/\\/g,"\\\\").replace(/"/g,'\\"');return'"'+e+'"'}function ii(r){for(var e="\
{",t=0;t<r.length;t++)t>0&&(e=e+","),r[t]===null||typeof r[t]>"u"?e=e+"NULL":Array.
isArray(r[t])?e=e+ii(r[t]):r[t]instanceof p?e+="\\\\x"+r[t].toString("hex"):e+=pa(
ht(r[t]));return e=e+"}",e}var ht=function(r,e){if(r==null)return null;if(r instanceof
p)return r;if(ArrayBuffer.isView(r)){var t=p.from(r.buffer,r.byteOffset,r.byteLength);
return t.length===r.byteLength?t:t.slice(r.byteOffset,r.byteOffset+r.byteLength)}
return r instanceof Date?fa.parseInputDatesAsUTC?ma(r):ya(r):Array.isArray(r)?ii(
r):typeof r=="object"?da(r,e):r.toString()};function da(r,e){if(r&&typeof r.toPostgres==
"function"){if(e=e||[],e.indexOf(r)!==-1)throw new Error('circular reference det\
ected while preparing "'+r+'" for query');return e.push(r),ht(r.toPostgres(ht),e)}
return JSON.stringify(r)}function W(r,e){for(r=""+r;r.length<e;)r="0"+r;return r}
function ya(r){var e=-r.getTimezoneOffset(),t=r.getFullYear(),n=t<1;n&&(t=Math.abs(
t)+1);var i=W(t,4)+"-"+W(r.getMonth()+1,2)+"-"+W(r.getDate(),2)+"T"+W(r.getHours(),
2)+":"+W(r.getMinutes(),2)+":"+W(r.getSeconds(),2)+"."+W(r.getMilliseconds(),3);
return e<0?(i+="-",e*=-1):i+="+",i+=W(Math.floor(e/60),2)+":"+W(e%60,2),n&&(i+="\
 BC"),i}function ma(r){var e=r.getUTCFullYear(),t=e<1;t&&(e=Math.abs(e)+1);var n=W(
e,4)+"-"+W(r.getUTCMonth()+1,2)+"-"+W(r.getUTCDate(),2)+"T"+W(r.getUTCHours(),2)+
":"+W(r.getUTCMinutes(),2)+":"+W(r.getUTCSeconds(),2)+"."+W(r.getUTCMilliseconds(),
3);return n+="+00:00",t&&(n+=" BC"),n}function ga(r,e,t){return r=typeof r=="str\
ing"?{text:r}:r,e&&(typeof e=="function"?r.callback=e:r.values=e),t&&(r.callback=
t),r}var Yt=function(r){return la.createHash("md5").update(r,"utf-8").digest("he\
x")},wa=function(r,e,t){var n=Yt(e+r),i=Yt(p.concat([p.from(n),t]));return"md5"+
i};si.exports={prepareValue:function(e){return ht(e)},normalizeQueryConfig:ga,postgresMd5PasswordHash:wa,
md5:Yt}});var hi=C((ih,ci)=>{"use strict";f();var Zt=(Ut(),D(Ot));function ba(r){if(r.indexOf(
"SCRAM-SHA-256")===-1)throw new Error("SASL: Only mechanism SCRAM-SHA-256 is cur\
rently supported");let e=Zt.randomBytes(18).toString("base64");return{mechanism:"\
SCRAM-SHA-256",clientNonce:e,response:"n,,n=*,r="+e,message:"SASLInitialResponse"}}
function Sa(r,e,t){if(r.message!=="SASLInitialResponse")throw new Error("SASL: L\
ast message was not SASLInitialResponse");if(typeof e!="string")throw new Error(
"SASL: SCRAM-SERVER-FIRST-MESSAGE: client password must be a string");if(typeof t!=
"string")throw new Error("SASL: SCRAM-SERVER-FIRST-MESSAGE: serverData must be a\
 string");let n=va(t);if(n.nonce.startsWith(r.clientNonce)){if(n.nonce.length===
r.clientNonce.length)throw new Error("SASL: SCRAM-SERVER-FIRST-MESSAGE: server n\
once is too short")}else throw new Error("SASL: SCRAM-SERVER-FIRST-MESSAGE: serv\
er nonce does not start with client nonce");var i=p.from(n.salt,"base64"),s=Ca(e,
i,n.iteration),o=Fe(s,"Client Key"),a=Aa(o),u="n=*,r="+r.clientNonce,c="r="+n.nonce+
",s="+n.salt+",i="+n.iteration,h="c=biws,r="+n.nonce,y=u+","+c+","+h,x=Fe(a,y),v=ui(
o,x),T=v.toString("base64"),q=Fe(s,"Server Key"),J=Fe(q,y);r.message="SASLRespon\
se",r.serverSignature=J.toString("base64"),r.response=h+",p="+T}function xa(r,e){
if(r.message!=="SASLResponse")throw new Error("SASL: Last message was not SASLRe\
sponse");if(typeof e!="string")throw new Error("SASL: SCRAM-SERVER-FINAL-MESSAGE\
: serverData must be a string");let{serverSignature:t}=_a(e);if(t!==r.serverSignature)
throw new Error("SASL: SCRAM-SERVER-FINAL-MESSAGE: server signature does not mat\
ch")}function Ea(r){if(typeof r!="string")throw new TypeError("SASL: text must b\
e a string");return r.split("").map((e,t)=>r.charCodeAt(t)).every(e=>e>=33&&e<=43||
e>=45&&e<=126)}function oi(r){return/^(?:[a-zA-Z0-9+/]{4})*(?:[a-zA-Z0-9+/]{2}==|[a-zA-Z0-9+/]{3}=)?$/.
test(r)}function ai(r){if(typeof r!="string")throw new TypeError("SASL: attribut\
e pairs text must be a string");return new Map(r.split(",").map(e=>{if(!/^.=/.test(
e))throw new Error("SASL: Invalid attribute pair entry");let t=e[0],n=e.substring(
2);return[t,n]}))}function va(r){let e=ai(r),t=e.get("r");if(t){if(!Ea(t))throw new Error(
"SASL: SCRAM-SERVER-FIRST-MESSAGE: nonce must only contain printable characters")}else
throw new Error("SASL: SCRAM-SERVER-FIRST-MESSAGE: nonce missing");let n=e.get("\
s");if(n){if(!oi(n))throw new Error("SASL: SCRAM-SERVER-FIRST-MESSAGE: salt must\
 be base64")}else throw new Error("SASL: SCRAM-SERVER-FIRST-MESSAGE: salt missin\
g");let i=e.get("i");if(i){if(!/^[1-9][0-9]*$/.test(i))throw new Error("SASL: SC\
RAM-SERVER-FIRST-MESSAGE: invalid iteration count")}else throw new Error("SASL: \
SCRAM-SERVER-FIRST-MESSAGE: iteration missing");let s=parseInt(i,10);return{nonce:t,
salt:n,iteration:s}}function _a(r){let t=ai(r).get("v");if(t){if(!oi(t))throw new Error(
"SASL: SCRAM-SERVER-FINAL-MESSAGE: server signature must be base64")}else throw new Error(
"SASL: SCRAM-SERVER-FINAL-MESSAGE: server signature is missing");return{serverSignature:t}}
function ui(r,e){if(!p.isBuffer(r))throw new TypeError("first argument must be a\
 Buffer");if(!p.isBuffer(e))throw new TypeError("second argument must be a Buffe\
r");if(r.length!==e.length)throw new Error("Buffer lengths must match");if(r.length===
0)throw new Error("Buffers cannot be empty");return p.from(r.map((t,n)=>r[n]^e[n]))}
function Aa(r){return Zt.createHash("sha256").update(r).digest()}function Fe(r,e){
return Zt.createHmac("sha256",r).update(e).digest()}function Ca(r,e,t){for(var n=Fe(
r,p.concat([e,p.from([0,0,0,1])])),i=n,s=0;s<t-1;s++)n=Fe(r,n),i=ui(i,n);return i}
ci.exports={startSession:ba,continueSession:Sa,finalizeSession:xa}});var Jt={};X(Jt,{join:()=>Ia});function Ia(...r){return r.join("/")}var Xt=$(()=>{
f()});var er={};X(er,{stat:()=>Ta});function Ta(r,e){e(new Error("No filesystem"))}var tr=$(
()=>{f()});var rr={};X(rr,{default:()=>Pa});var Pa,nr=$(()=>{f();Pa={}});var li={};X(li,{StringDecoder:()=>ir});var ir,fi=$(()=>{f();ir=class{constructor(e){
I(this,"td");this.td=new TextDecoder(e)}write(e){return this.td.decode(e,{stream:!0})}end(e){
return this.td.decode(e)}}});var mi=C((lh,yi)=>{"use strict";f();var{Transform:Ba}=(nr(),D(rr)),{StringDecoder:La}=(fi(),D(li)),
we=Symbol("last"),lt=Symbol("decoder");function Ra(r,e,t){let n;if(this.overflow){
if(n=this[lt].write(r).split(this.matcher),n.length===1)return t();n.shift(),this.
overflow=!1}else this[we]+=this[lt].write(r),n=this[we].split(this.matcher);this[we]=
n.pop();for(let i=0;i<n.length;i++)try{di(this,this.mapper(n[i]))}catch(s){return t(
s)}if(this.overflow=this[we].length>this.maxLength,this.overflow&&!this.skipOverflow){
t(new Error("maximum buffer reached"));return}t()}function Fa(r){if(this[we]+=this[lt].
end(),this[we])try{di(this,this.mapper(this[we]))}catch(e){return r(e)}r()}function di(r,e){
e!==void 0&&r.push(e)}function pi(r){return r}function Ma(r,e,t){switch(r=r||/\r?\n/,
e=e||pi,t=t||{},arguments.length){case 1:typeof r=="function"?(e=r,r=/\r?\n/):typeof r==
"object"&&!(r instanceof RegExp)&&!r[Symbol.split]&&(t=r,r=/\r?\n/);break;case 2:
typeof r=="function"?(t=e,e=r,r=/\r?\n/):typeof e=="object"&&(t=e,e=pi)}t=Object.
assign({},t),t.autoDestroy=!0,t.transform=Ra,t.flush=Fa,t.readableObjectMode=!0;
let n=new Ba(t);return n[we]="",n[lt]=new La("utf8"),n.matcher=r,n.mapper=e,n.maxLength=
t.maxLength,n.skipOverflow=t.skipOverflow||!1,n.overflow=!1,n._destroy=function(i,s){
this._writableState.errorEmitted=!1,s(i)},n}yi.exports=Ma});var bi=C((ph,fe)=>{"use strict";f();var gi=(Xt(),D(Jt)),Da=(nr(),D(rr)).Stream,ka=mi(),
wi=(He(),D(je)),Oa=5432,ft=d.platform==="win32",tt=d.stderr,Ua=56,qa=7,Na=61440,
Qa=32768;function Wa(r){return(r&Na)==Qa}var Me=["host","port","database","user",
"password"],sr=Me.length,ja=Me[sr-1];function or(){var r=tt instanceof Da&&tt.writable===
!0;if(r){var e=Array.prototype.slice.call(arguments).concat(`
`);tt.write(wi.format.apply(wi,e))}}Object.defineProperty(fe.exports,"isWin",{get:function(){
return ft},set:function(r){ft=r}});fe.exports.warnTo=function(r){var e=tt;return tt=
r,e};fe.exports.getFileName=function(r){var e=r||d.env,t=e.PGPASSFILE||(ft?gi.join(
e.APPDATA||"./","postgresql","pgpass.conf"):gi.join(e.HOME||"./",".pgpass"));return t};
fe.exports.usePgPass=function(r,e){return Object.prototype.hasOwnProperty.call(d.
env,"PGPASSWORD")?!1:ft?!0:(e=e||"<unkn>",Wa(r.mode)?r.mode&(Ua|qa)?(or('WARNING\
: password file "%s" has group or world access; permissions should be u=rw (0600\
) or less',e),!1):!0:(or('WARNING: password file "%s" is not a plain file',e),!1))};
var Ha=fe.exports.match=function(r,e){return Me.slice(0,-1).reduce(function(t,n,i){
return i==1&&Number(r[n]||Oa)===Number(e[n])?t&&!0:t&&(e[n]==="*"||e[n]===r[n])},
!0)};fe.exports.getPassword=function(r,e,t){var n,i=e.pipe(ka());function s(u){var c=Ga(
u);c&&$a(c)&&Ha(r,c)&&(n=c[ja],i.end())}var o=function(){e.destroy(),t(n)},a=function(u){
e.destroy(),or("WARNING: error on reading file: %s",u),t(void 0)};e.on("error",a),
i.on("data",s).on("end",o).on("error",a)};var Ga=fe.exports.parseLine=function(r){
if(r.length<11||r.match(/^\s+#/))return null;for(var e="",t="",n=0,i=0,s=0,o={},
a=!1,u=function(h,y,x){var v=r.substring(y,x);Object.hasOwnProperty.call(d.env,"\
PGPASS_NO_DEESCAPE")||(v=v.replace(/\\([:\\])/g,"$1")),o[Me[h]]=v},c=0;c<r.length-
1;c+=1){if(e=r.charAt(c+1),t=r.charAt(c),a=n==sr-1,a){u(n,i);break}c>=0&&e==":"&&
t!=="\\"&&(u(n,i,c+1),i=c+2,n+=1)}return o=Object.keys(o).length===sr?o:null,o},
$a=fe.exports.isValidEntry=function(r){for(var e={0:function(o){return o.length>
0},1:function(o){return o==="*"?!0:(o=Number(o),isFinite(o)&&o>0&&o<9007199254740992&&
Math.floor(o)===o)},2:function(o){return o.length>0},3:function(o){return o.length>
0},4:function(o){return o.length>0}},t=0;t<Me.length;t+=1){var n=e[t],i=r[Me[t]]||
"",s=n(i);if(!s)return!1}return!0}});var xi=C((mh,ar)=>{"use strict";f();var yh=(Xt(),D(Jt)),Si=(tr(),D(er)),pt=bi();
ar.exports=function(r,e){var t=pt.getFileName();Si.stat(t,function(n,i){if(n||!pt.
usePgPass(i,t))return e(void 0);var s=Si.createReadStream(t);pt.getPassword(r,s,
e)})};ar.exports.warnTo=pt.warnTo});var ur=C((wh,Ei)=>{"use strict";f();var Ka=Je();function dt(r){this._types=r||Ka,
this.text={},this.binary={}}dt.prototype.getOverrides=function(r){switch(r){case"\
text":return this.text;case"binary":return this.binary;default:return{}}};dt.prototype.
setTypeParser=function(r,e,t){typeof e=="function"&&(t=e,e="text"),this.getOverrides(
e)[r]=t};dt.prototype.getTypeParser=function(r,e){return e=e||"text",this.getOverrides(
e)[r]||this._types.getTypeParser(r,e)};Ei.exports=dt});var vi={};X(vi,{default:()=>Va});var Va,_i=$(()=>{f();Va={}});var Ai={};X(Ai,{parse:()=>cr});function cr(r,e=!1){let{protocol:t}=new URL(r),n="\
http:"+r.substring(t.length),{username:i,password:s,host:o,hostname:a,port:u,pathname:c,
search:h,searchParams:y,hash:x}=new URL(n);s=decodeURIComponent(s);let v=i+":"+s,
T=e?Object.fromEntries(y.entries()):h;return{href:r,protocol:t,auth:v,username:i,
password:s,host:o,hostname:a,port:u,pathname:c,search:h,query:T,hash:x}}var hr=$(
()=>{"use strict";f()});var Ii=C((Eh,Ci)=>{"use strict";f();var za=(hr(),D(Ai)),lr=(tr(),D(er));function fr(r){
if(r.charAt(0)==="/"){var t=r.split(" ");return{host:t[0],database:t[1]}}var e=za.
parse(/ |%[^a-f0-9]|%[a-f0-9][^a-f0-9]/i.test(r)?encodeURI(r).replace(/\%25(\d\d)/g,
"%$1"):r,!0),t=e.query;for(var n in t)Array.isArray(t[n])&&(t[n]=t[n][t[n].length-
1]);var i=(e.auth||":").split(":");if(t.user=i[0],t.password=i.splice(1).join(":"),
t.port=e.port,e.protocol=="socket:")return t.host=decodeURI(e.pathname),t.database=
e.query.db,t.client_encoding=e.query.encoding,t;t.host||(t.host=e.hostname);var s=e.
pathname;if(!t.host&&s&&/^%2f/i.test(s)){var o=s.split("/");t.host=decodeURIComponent(
o[0]),s=o.splice(1).join("/")}switch(s&&s.charAt(0)==="/"&&(s=s.slice(1)||null),
t.database=s&&decodeURI(s),(t.ssl==="true"||t.ssl==="1")&&(t.ssl=!0),t.ssl==="0"&&
(t.ssl=!1),(t.sslcert||t.sslkey||t.sslrootcert||t.sslmode)&&(t.ssl={}),t.sslcert&&
(t.ssl.cert=lr.readFileSync(t.sslcert).toString()),t.sslkey&&(t.ssl.key=lr.readFileSync(
t.sslkey).toString()),t.sslrootcert&&(t.ssl.ca=lr.readFileSync(t.sslrootcert).toString()),
t.sslmode){case"disable":{t.ssl=!1;break}case"prefer":case"require":case"verify-\
ca":case"verify-full":break;case"no-verify":{t.ssl.rejectUnauthorized=!1;break}}
return t}Ci.exports=fr;fr.parse=fr});var yt=C((_h,Bi)=>{"use strict";f();var Ya=(_i(),D(vi)),Pi=Xe(),Ti=Ii().parse,K=function(r,e,t){
return t===void 0?t=d.env["PG"+r.toUpperCase()]:t===!1||(t=d.env[t]),e[r]||t||Pi[r]},
Za=function(){switch(d.env.PGSSLMODE){case"disable":return!1;case"prefer":case"r\
equire":case"verify-ca":case"verify-full":return!0;case"no-verify":return{rejectUnauthorized:!1}}
return Pi.ssl},De=function(r){return"'"+(""+r).replace(/\\/g,"\\\\").replace(/'/g,
"\\'")+"'"},re=function(r,e,t){var n=e[t];n!=null&&r.push(t+"="+De(n))},pr=class{constructor(e){
e=typeof e=="string"?Ti(e):e||{},e.connectionString&&(e=Object.assign({},e,Ti(e.
connectionString))),this.user=K("user",e),this.database=K("database",e),this.database===
void 0&&(this.database=this.user),this.port=parseInt(K("port",e),10),this.host=K(
"host",e),Object.defineProperty(this,"password",{configurable:!0,enumerable:!1,writable:!0,
value:K("password",e)}),this.binary=K("binary",e),this.options=K("options",e),this.
ssl=typeof e.ssl>"u"?Za():e.ssl,typeof this.ssl=="string"&&this.ssl==="true"&&(this.
ssl=!0),this.ssl==="no-verify"&&(this.ssl={rejectUnauthorized:!1}),this.ssl&&this.
ssl.key&&Object.defineProperty(this.ssl,"key",{enumerable:!1}),this.client_encoding=
K("client_encoding",e),this.replication=K("replication",e),this.isDomainSocket=!(this.
host||"").indexOf("/"),this.application_name=K("application_name",e,"PGAPPNAME"),
this.fallback_application_name=K("fallback_application_name",e,!1),this.statement_timeout=
K("statement_timeout",e,!1),this.lock_timeout=K("lock_timeout",e,!1),this.idle_in_transaction_session_timeout=
K("idle_in_transaction_session_timeout",e,!1),this.query_timeout=K("query_timeou\
t",e,!1),e.connectionTimeoutMillis===void 0?this.connect_timeout=d.env.PGCONNECT_TIMEOUT||
0:this.connect_timeout=Math.floor(e.connectionTimeoutMillis/1e3),e.keepAlive===!1?
this.keepalives=0:e.keepAlive===!0&&(this.keepalives=1),typeof e.keepAliveInitialDelayMillis==
"number"&&(this.keepalives_idle=Math.floor(e.keepAliveInitialDelayMillis/1e3))}getLibpqConnectionString(e){
var t=[];re(t,this,"user"),re(t,this,"password"),re(t,this,"port"),re(t,this,"ap\
plication_name"),re(t,this,"fallback_application_name"),re(t,this,"connect_timeo\
ut"),re(t,this,"options");var n=typeof this.ssl=="object"?this.ssl:this.ssl?{sslmode:this.
ssl}:{};if(re(t,n,"sslmode"),re(t,n,"sslca"),re(t,n,"sslkey"),re(t,n,"sslcert"),
re(t,n,"sslrootcert"),this.database&&t.push("dbname="+De(this.database)),this.replication&&
t.push("replication="+De(this.replication)),this.host&&t.push("host="+De(this.host)),
this.isDomainSocket)return e(null,t.join(" "));this.client_encoding&&t.push("cli\
ent_encoding="+De(this.client_encoding)),Ya.lookup(this.host,function(i,s){return i?
e(i,null):(t.push("hostaddr="+De(s)),e(null,t.join(" ")))})}};Bi.exports=pr});var Fi=C((Ch,Ri)=>{"use strict";f();var Ja=Je(),Li=/^([A-Za-z]+)(?: (\d+))?(?: (\d+))?/,
dr=class{constructor(e,t){this.command=null,this.rowCount=null,this.oid=null,this.
rows=[],this.fields=[],this._parsers=void 0,this._types=t,this.RowCtor=null,this.
rowAsArray=e==="array",this.rowAsArray&&(this.parseRow=this._parseRowAsArray)}addCommandComplete(e){
var t;e.text?t=Li.exec(e.text):t=Li.exec(e.command),t&&(this.command=t[1],t[3]?(this.
oid=parseInt(t[2],10),this.rowCount=parseInt(t[3],10)):t[2]&&(this.rowCount=parseInt(
t[2],10)))}_parseRowAsArray(e){for(var t=new Array(e.length),n=0,i=e.length;n<i;n++){
var s=e[n];s!==null?t[n]=this._parsers[n](s):t[n]=null}return t}parseRow(e){for(var t={},
n=0,i=e.length;n<i;n++){var s=e[n],o=this.fields[n].name;s!==null?t[o]=this._parsers[n](
s):t[o]=null}return t}addRow(e){this.rows.push(e)}addFields(e){this.fields=e,this.
fields.length&&(this._parsers=new Array(e.length));for(var t=0;t<e.length;t++){var n=e[t];
this._types?this._parsers[t]=this._types.getTypeParser(n.dataTypeID,n.format||"t\
ext"):this._parsers[t]=Ja.getTypeParser(n.dataTypeID,n.format||"text")}}};Ri.exports=
dr});var Oi=C((Th,ki)=>{"use strict";f();var{EventEmitter:Xa}=ge(),Mi=Fi(),Di=et(),yr=class extends Xa{constructor(e,t,n){
super(),e=Di.normalizeQueryConfig(e,t,n),this.text=e.text,this.values=e.values,this.
rows=e.rows,this.types=e.types,this.name=e.name,this.binary=e.binary,this.portal=
e.portal||"",this.callback=e.callback,this._rowMode=e.rowMode,d.domain&&e.callback&&
(this.callback=d.domain.bind(e.callback)),this._result=new Mi(this._rowMode,this.
types),this._results=this._result,this.isPreparedStatement=!1,this._canceledDueToError=
!1,this._promise=null}requiresPreparation(){return this.name||this.rows?!0:!this.
text||!this.values?!1:this.values.length>0}_checkForMultirow(){this._result.command&&
(Array.isArray(this._results)||(this._results=[this._result]),this._result=new Mi(
this._rowMode,this.types),this._results.push(this._result))}handleRowDescription(e){
this._checkForMultirow(),this._result.addFields(e.fields),this._accumulateRows=this.
callback||!this.listeners("row").length}handleDataRow(e){let t;if(!this._canceledDueToError){
try{t=this._result.parseRow(e.fields)}catch(n){this._canceledDueToError=n;return}
this.emit("row",t,this._result),this._accumulateRows&&this._result.addRow(t)}}handleCommandComplete(e,t){
this._checkForMultirow(),this._result.addCommandComplete(e),this.rows&&t.sync()}handleEmptyQuery(e){
this.rows&&e.sync()}handleError(e,t){if(this._canceledDueToError&&(e=this._canceledDueToError,
this._canceledDueToError=!1),this.callback)return this.callback(e);this.emit("er\
ror",e)}handleReadyForQuery(e){if(this._canceledDueToError)return this.handleError(
this._canceledDueToError,e);if(this.callback)try{this.callback(null,this._results)}catch(t){
d.nextTick(()=>{throw t})}this.emit("end",this._results)}submit(e){if(typeof this.
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
binary,valueMapper:Di.prepareValue})}catch(t){this.handleError(t,e);return}e.describe(
{type:"P",name:this.portal||""}),this._getRows(e,this.rows)}handleCopyInResponse(e){
e.sendCopyFail("No source stream defined")}handleCopyData(e,t){}};ki.exports=yr});var qi={};X(qi,{Socket:()=>be,isIP:()=>eu});function eu(r){return 0}var Ui,S,be,
mt=$(()=>{"use strict";f();Ui=Qe(ge(),1);S=class S extends Ui.EventEmitter{constructor(){
super(...arguments);I(this,"opts",{});I(this,"connecting",!1);I(this,"pending",!0);
I(this,"writable",!0);I(this,"encrypted",!1);I(this,"authorized",!1);I(this,"des\
troyed",!1);I(this,"ws",null);I(this,"writeBuffer");I(this,"tlsState",0);I(this,
"tlsRead");I(this,"tlsWrite")}static get poolQueryViaFetch(){return S.opts.poolQueryViaFetch??
S.defaults.poolQueryViaFetch}static set poolQueryViaFetch(t){S.opts.poolQueryViaFetch=
t}static get fetchEndpoint(){return S.opts.fetchEndpoint??S.defaults.fetchEndpoint}static set fetchEndpoint(t){
S.opts.fetchEndpoint=t}static get fetchConnectionCache(){return S.opts.fetchConnectionCache??
S.defaults.fetchConnectionCache}static set fetchConnectionCache(t){S.opts.fetchConnectionCache=
t}static get fetchFunction(){return S.opts.fetchFunction??S.defaults.fetchFunction}static set fetchFunction(t){
S.opts.fetchFunction=t}static get webSocketConstructor(){return S.opts.webSocketConstructor??
S.defaults.webSocketConstructor}static set webSocketConstructor(t){S.opts.webSocketConstructor=
t}get webSocketConstructor(){return this.opts.webSocketConstructor??S.webSocketConstructor}set webSocketConstructor(t){
this.opts.webSocketConstructor=t}static get wsProxy(){return S.opts.wsProxy??S.defaults.
wsProxy}static set wsProxy(t){S.opts.wsProxy=t}get wsProxy(){return this.opts.wsProxy??
S.wsProxy}set wsProxy(t){this.opts.wsProxy=t}static get coalesceWrites(){return S.
opts.coalesceWrites??S.defaults.coalesceWrites}static set coalesceWrites(t){S.opts.
coalesceWrites=t}get coalesceWrites(){return this.opts.coalesceWrites??S.coalesceWrites}set coalesceWrites(t){
this.opts.coalesceWrites=t}static get useSecureWebSocket(){return S.opts.useSecureWebSocket??
S.defaults.useSecureWebSocket}static set useSecureWebSocket(t){S.opts.useSecureWebSocket=
t}get useSecureWebSocket(){return this.opts.useSecureWebSocket??S.useSecureWebSocket}set useSecureWebSocket(t){
this.opts.useSecureWebSocket=t}static get forceDisablePgSSL(){return S.opts.forceDisablePgSSL??
S.defaults.forceDisablePgSSL}static set forceDisablePgSSL(t){S.opts.forceDisablePgSSL=
t}get forceDisablePgSSL(){return this.opts.forceDisablePgSSL??S.forceDisablePgSSL}set forceDisablePgSSL(t){
this.opts.forceDisablePgSSL=t}static get disableSNI(){return S.opts.disableSNI??
S.defaults.disableSNI}static set disableSNI(t){S.opts.disableSNI=t}get disableSNI(){
return this.opts.disableSNI??S.disableSNI}set disableSNI(t){this.opts.disableSNI=
t}static get pipelineConnect(){return S.opts.pipelineConnect??S.defaults.pipelineConnect}static set pipelineConnect(t){
S.opts.pipelineConnect=t}get pipelineConnect(){return this.opts.pipelineConnect??
S.pipelineConnect}set pipelineConnect(t){this.opts.pipelineConnect=t}static get subtls(){
return S.opts.subtls??S.defaults.subtls}static set subtls(t){S.opts.subtls=t}get subtls(){
return this.opts.subtls??S.subtls}set subtls(t){this.opts.subtls=t}static get pipelineTLS(){
return S.opts.pipelineTLS??S.defaults.pipelineTLS}static set pipelineTLS(t){S.opts.
pipelineTLS=t}get pipelineTLS(){return this.opts.pipelineTLS??S.pipelineTLS}set pipelineTLS(t){
this.opts.pipelineTLS=t}static get rootCerts(){return S.opts.rootCerts??S.defaults.
rootCerts}static set rootCerts(t){S.opts.rootCerts=t}get rootCerts(){return this.
opts.rootCerts??S.rootCerts}set rootCerts(t){this.opts.rootCerts=t}wsProxyAddrForHost(t,n){
let i=this.wsProxy;if(i===void 0)throw new Error("No WebSocket proxy is configur\
ed. Please refer to https://github.com/neondatabase/serverless#run-your-own-webs\
ocket-proxy");return typeof i=="function"?i(t,n):`${i}?address=${t}:${n}`}setNoDelay(){
return this}setKeepAlive(){return this}ref(){return this}unref(){return this}async connect(t,n,i){
this.connecting=!0,i&&this.once("connect",i);let s;try{s=this.wsProxyAddrForHost(
n,typeof t=="string"?parseInt(t,10):t)}catch(o){this.emit("error",o),this.emit("\
close");return}return this.ws=await new Promise(async o=>{try{let u=(this.useSecureWebSocket?
"wss:":"ws:")+"//"+s,c;if(this.webSocketConstructor!==void 0)c=new this.webSocketConstructor(
u);else try{c=new WebSocket(u)}catch{c=new __unstable_WebSocket(u)}c.addEventListener(
"open",()=>{o(c)})}catch(a){try{let c=(this.useSecureWebSocket?"https:":"http:")+
"//"+s;await fetch(c,{headers:{Upgrade:"websocket"}}).then(h=>{let y=h.webSocket;
if(y==null)throw a;y.accept(),o(y)})}catch{this.emit("error",new Error("All atte\
mpts to open a WebSocket to connect to the database failed. Please refer to http\
s://github.com/neondatabase/serverless#run-on-node")),this.emit("close");return}}}),
this.ws.binaryType="arraybuffer",this.ws.addEventListener("error",o=>{this.emit(
"error",o),this.emit("close")}),this.ws.addEventListener("close",()=>{this.emit(
"close")}),this.ws.addEventListener("message",o=>{if(this.tlsState===0){let a=p.
from(o.data);this.emit("data",a)}}),this.connecting=!1,this.pending=!1,this.emit(
"connect"),this.emit("ready"),this}async startTls(t){if(this.subtls===void 0)throw new Error(
"For Postgres SSL connections, you must set `neonConfig.subtls` to the subtls li\
brary. See https://github.com/neondatabase/serverless/blob/main/CONFIG.md for mo\
re information.");this.tlsState=1;let n=this.subtls.TrustedCert.fromPEM(this.rootCerts),
i=new this.subtls.WebSocketReadQueue(this.ws),s=i.read.bind(i),o=this.rawWrite.bind(
this),[a,u]=await this.subtls.startTls(t,n,s,o,{useSNI:!this.disableSNI,expectPreData:this.
pipelineTLS?new Uint8Array([83]):void 0});this.tlsRead=a,this.tlsWrite=u,this.tlsState=
2,this.encrypted=!0,this.authorized=!0,this.emit("secureConnection",this),this.tlsReadLoop()}async tlsReadLoop(){
for(;;){let t=await this.tlsRead();if(t===void 0)break;{let n=p.from(t);this.emit(
"data",n)}}}rawWrite(t){if(!this.coalesceWrites){this.ws.send(t);return}if(this.
writeBuffer===void 0)this.writeBuffer=t,setTimeout(()=>{this.ws.send(this.writeBuffer),
this.writeBuffer=void 0},0);else{let n=new Uint8Array(this.writeBuffer.length+t.
length);n.set(this.writeBuffer),n.set(t,this.writeBuffer.length),this.writeBuffer=
n}}write(t,n="utf8",i=s=>{}){return t.length===0?i():(typeof t=="string"&&(t=p.from(
t,n)),this.tlsState===0?this.rawWrite(t):this.tlsState===1?this.once("secureConn\
ection",()=>this.write(t,n,i)):this.tlsWrite(t),!0)}end(t=p.alloc(0),n="utf8",i){
return this.write(t,n,()=>{this.ws.close(),i&&i()}),this}destroy(){return this.destroyed=
!0,this.end()}};I(S,"defaults",{poolQueryViaFetch:!1,fetchEndpoint:t=>"https://"+
t+"/sql",fetchConnectionCache:!1,fetchFunction:void 0,webSocketConstructor:void 0,
wsProxy:t=>t+"/v2",useSecureWebSocket:!0,forceDisablePgSSL:!0,coalesceWrites:!0,
pipelineConnect:"password",subtls:void 0,rootCerts:"",pipelineTLS:!1,disableSNI:!1}),
I(S,"opts",{});be=S});var Br=C(A=>{"use strict";f();Object.defineProperty(A,"__esModule",{value:!0});A.
NoticeMessage=A.DataRowMessage=A.CommandCompleteMessage=A.ReadyForQueryMessage=A.
NotificationResponseMessage=A.BackendKeyDataMessage=A.AuthenticationMD5Password=
A.ParameterStatusMessage=A.ParameterDescriptionMessage=A.RowDescriptionMessage=A.
Field=A.CopyResponse=A.CopyDataMessage=A.DatabaseError=A.copyDone=A.emptyQuery=A.
replicationStart=A.portalSuspended=A.noData=A.closeComplete=A.bindComplete=A.parseComplete=
void 0;A.parseComplete={name:"parseComplete",length:5};A.bindComplete={name:"bin\
dComplete",length:5};A.closeComplete={name:"closeComplete",length:5};A.noData={name:"\
noData",length:5};A.portalSuspended={name:"portalSuspended",length:5};A.replicationStart=
{name:"replicationStart",length:4};A.emptyQuery={name:"emptyQuery",length:4};A.copyDone=
{name:"copyDone",length:4};var mr=class extends Error{constructor(e,t,n){super(e),
this.length=t,this.name=n}};A.DatabaseError=mr;var gr=class{constructor(e,t){this.
length=e,this.chunk=t,this.name="copyData"}};A.CopyDataMessage=gr;var wr=class{constructor(e,t,n,i){
this.length=e,this.name=t,this.binary=n,this.columnTypes=new Array(i)}};A.CopyResponse=
wr;var br=class{constructor(e,t,n,i,s,o,a){this.name=e,this.tableID=t,this.columnID=
n,this.dataTypeID=i,this.dataTypeSize=s,this.dataTypeModifier=o,this.format=a}};
A.Field=br;var Sr=class{constructor(e,t){this.length=e,this.fieldCount=t,this.name=
"rowDescription",this.fields=new Array(this.fieldCount)}};A.RowDescriptionMessage=
Sr;var xr=class{constructor(e,t){this.length=e,this.parameterCount=t,this.name="\
parameterDescription",this.dataTypeIDs=new Array(this.parameterCount)}};A.ParameterDescriptionMessage=
xr;var Er=class{constructor(e,t,n){this.length=e,this.parameterName=t,this.parameterValue=
n,this.name="parameterStatus"}};A.ParameterStatusMessage=Er;var vr=class{constructor(e,t){
this.length=e,this.salt=t,this.name="authenticationMD5Password"}};A.AuthenticationMD5Password=
vr;var _r=class{constructor(e,t,n){this.length=e,this.processID=t,this.secretKey=
n,this.name="backendKeyData"}};A.BackendKeyDataMessage=_r;var Ar=class{constructor(e,t,n,i){
this.length=e,this.processId=t,this.channel=n,this.payload=i,this.name="notifica\
tion"}};A.NotificationResponseMessage=Ar;var Cr=class{constructor(e,t){this.length=
e,this.status=t,this.name="readyForQuery"}};A.ReadyForQueryMessage=Cr;var Ir=class{constructor(e,t){
this.length=e,this.text=t,this.name="commandComplete"}};A.CommandCompleteMessage=
Ir;var Tr=class{constructor(e,t){this.length=e,this.fields=t,this.name="dataRow",
this.fieldCount=t.length}};A.DataRowMessage=Tr;var Pr=class{constructor(e,t){this.
length=e,this.message=t,this.name="notice"}};A.NoticeMessage=Pr});var Ni=C(gt=>{"use strict";f();Object.defineProperty(gt,"__esModule",{value:!0});
gt.Writer=void 0;var Lr=class{constructor(e=256){this.size=e,this.offset=5,this.
headerPosition=0,this.buffer=p.allocUnsafe(e)}ensure(e){var t=this.buffer.length-
this.offset;if(t<e){var n=this.buffer,i=n.length+(n.length>>1)+e;this.buffer=p.allocUnsafe(
i),n.copy(this.buffer)}}addInt32(e){return this.ensure(4),this.buffer[this.offset++]=
e>>>24&255,this.buffer[this.offset++]=e>>>16&255,this.buffer[this.offset++]=e>>>
8&255,this.buffer[this.offset++]=e>>>0&255,this}addInt16(e){return this.ensure(2),
this.buffer[this.offset++]=e>>>8&255,this.buffer[this.offset++]=e>>>0&255,this}addCString(e){
if(!e)this.ensure(1);else{var t=p.byteLength(e);this.ensure(t+1),this.buffer.write(
e,this.offset,"utf-8"),this.offset+=t}return this.buffer[this.offset++]=0,this}addString(e=""){
var t=p.byteLength(e);return this.ensure(t),this.buffer.write(e,this.offset),this.
offset+=t,this}add(e){return this.ensure(e.length),e.copy(this.buffer,this.offset),
this.offset+=e.length,this}join(e){if(e){this.buffer[this.headerPosition]=e;let t=this.
offset-(this.headerPosition+1);this.buffer.writeInt32BE(t,this.headerPosition+1)}
return this.buffer.slice(e?0:5,this.offset)}flush(e){var t=this.join(e);return this.
offset=5,this.headerPosition=0,this.buffer=p.allocUnsafe(this.size),t}};gt.Writer=
Lr});var Wi=C(bt=>{"use strict";f();Object.defineProperty(bt,"__esModule",{value:!0});
bt.serialize=void 0;var Rr=Ni(),R=new Rr.Writer,tu=r=>{R.addInt16(3).addInt16(0);
for(let n of Object.keys(r))R.addCString(n).addCString(r[n]);R.addCString("clien\
t_encoding").addCString("UTF8");var e=R.addCString("").flush(),t=e.length+4;return new Rr.
Writer().addInt32(t).add(e).flush()},ru=()=>{let r=p.allocUnsafe(8);return r.writeInt32BE(
8,0),r.writeInt32BE(80877103,4),r},nu=r=>R.addCString(r).flush(112),iu=function(r,e){
return R.addCString(r).addInt32(p.byteLength(e)).addString(e),R.flush(112)},su=function(r){
return R.addString(r).flush(112)},ou=r=>R.addCString(r).flush(81),Qi=[],au=r=>{let e=r.
name||"";e.length>63&&(console.error("Warning! Postgres only supports 63 charact\
ers for query names."),console.error("You supplied %s (%s)",e,e.length),console.
error("This can cause conflicts and silent errors executing queries"));let t=r.types||
Qi;for(var n=t.length,i=R.addCString(e).addCString(r.text).addInt16(n),s=0;s<n;s++)
i.addInt32(t[s]);return R.flush(80)},ke=new Rr.Writer,uu=function(r,e){for(let t=0;t<
r.length;t++){let n=e?e(r[t],t):r[t];n==null?(R.addInt16(0),ke.addInt32(-1)):n instanceof
p?(R.addInt16(1),ke.addInt32(n.length),ke.add(n)):(R.addInt16(0),ke.addInt32(p.byteLength(
n)),ke.addString(n))}},cu=(r={})=>{let e=r.portal||"",t=r.statement||"",n=r.binary||
!1,i=r.values||Qi,s=i.length;return R.addCString(e).addCString(t),R.addInt16(s),
uu(i,r.valueMapper),R.addInt16(s),R.add(ke.flush()),R.addInt16(n?1:0),R.flush(66)},
hu=p.from([69,0,0,0,9,0,0,0,0,0]),lu=r=>{if(!r||!r.portal&&!r.rows)return hu;let e=r.
portal||"",t=r.rows||0,n=p.byteLength(e),i=4+n+1+4,s=p.allocUnsafe(1+i);return s[0]=
69,s.writeInt32BE(i,1),s.write(e,5,"utf-8"),s[n+5]=0,s.writeUInt32BE(t,s.length-
4),s},fu=(r,e)=>{let t=p.allocUnsafe(16);return t.writeInt32BE(16,0),t.writeInt16BE(
1234,4),t.writeInt16BE(5678,6),t.writeInt32BE(r,8),t.writeInt32BE(e,12),t},Fr=(r,e)=>{
let n=4+p.byteLength(e)+1,i=p.allocUnsafe(1+n);return i[0]=r,i.writeInt32BE(n,1),
i.write(e,5,"utf-8"),i[n]=0,i},pu=R.addCString("P").flush(68),du=R.addCString("S").
flush(68),yu=r=>r.name?Fr(68,`${r.type}${r.name||""}`):r.type==="P"?pu:du,mu=r=>{
let e=`${r.type}${r.name||""}`;return Fr(67,e)},gu=r=>R.add(r).flush(100),wu=r=>Fr(
102,r),wt=r=>p.from([r,0,0,0,4]),bu=wt(72),Su=wt(83),xu=wt(88),Eu=wt(99),vu={startup:tu,
password:nu,requestSsl:ru,sendSASLInitialResponseMessage:iu,sendSCRAMClientFinalMessage:su,
query:ou,parse:au,bind:cu,execute:lu,describe:yu,close:mu,flush:()=>bu,sync:()=>Su,
end:()=>xu,copyData:gu,copyDone:()=>Eu,copyFail:wu,cancel:fu};bt.serialize=vu});var ji=C(St=>{"use strict";f();Object.defineProperty(St,"__esModule",{value:!0});
St.BufferReader=void 0;var _u=p.allocUnsafe(0),Mr=class{constructor(e=0){this.offset=
e,this.buffer=_u,this.encoding="utf-8"}setBuffer(e,t){this.offset=e,this.buffer=
t}int16(){let e=this.buffer.readInt16BE(this.offset);return this.offset+=2,e}byte(){
let e=this.buffer[this.offset];return this.offset++,e}int32(){let e=this.buffer.
readInt32BE(this.offset);return this.offset+=4,e}string(e){let t=this.buffer.toString(
this.encoding,this.offset,this.offset+e);return this.offset+=e,t}cstring(){let e=this.
offset,t=e;for(;this.buffer[t++]!==0;);return this.offset=t,this.buffer.toString(
this.encoding,e,t-1)}bytes(e){let t=this.buffer.slice(this.offset,this.offset+e);
return this.offset+=e,t}};St.BufferReader=Mr});var Hi={};X(Hi,{default:()=>Au});var Au,Gi=$(()=>{f();Au={}});var Vi=C(Oe=>{"use strict";f();var Cu=Oe&&Oe.__importDefault||function(r){return r&&
r.__esModule?r:{default:r}};Object.defineProperty(Oe,"__esModule",{value:!0});Oe.
Parser=void 0;var F=Br(),Iu=ji(),Tu=Cu((Gi(),D(Hi))),Dr=1,Pu=4,$i=Dr+Pu,Ki=p.allocUnsafe(
0),kr=class{constructor(e){if(this.buffer=Ki,this.bufferLength=0,this.bufferOffset=
0,this.reader=new Iu.BufferReader,e?.mode==="binary")throw new Error("Binary mod\
e not supported yet");this.mode=e?.mode||"text"}parse(e,t){this.mergeBuffer(e);let n=this.
bufferOffset+this.bufferLength,i=this.bufferOffset;for(;i+$i<=n;){let s=this.buffer[i],
o=this.buffer.readUInt32BE(i+Dr),a=Dr+o;if(a+i<=n){let u=this.handlePacket(i+$i,
s,o,this.buffer);t(u),i+=a}else break}i===n?(this.buffer=Ki,this.bufferLength=0,
this.bufferOffset=0):(this.bufferLength=n-i,this.bufferOffset=i)}mergeBuffer(e){
if(this.bufferLength>0){let t=this.bufferLength+e.byteLength;if(t+this.bufferOffset>
this.buffer.byteLength){let i;if(t<=this.buffer.byteLength&&this.bufferOffset>=this.
bufferLength)i=this.buffer;else{let s=this.buffer.byteLength*2;for(;t>=s;)s*=2;i=
p.allocUnsafe(s)}this.buffer.copy(i,0,this.bufferOffset,this.bufferOffset+this.bufferLength),
this.buffer=i,this.bufferOffset=0}e.copy(this.buffer,this.bufferOffset+this.bufferLength),
this.bufferLength=t}else this.buffer=e,this.bufferOffset=0,this.bufferLength=e.byteLength}handlePacket(e,t,n,i){
switch(t){case 50:return F.bindComplete;case 49:return F.parseComplete;case 51:return F.
closeComplete;case 110:return F.noData;case 115:return F.portalSuspended;case 99:
return F.copyDone;case 87:return F.replicationStart;case 73:return F.emptyQuery;case 68:
return this.parseDataRowMessage(e,n,i);case 67:return this.parseCommandCompleteMessage(
e,n,i);case 90:return this.parseReadyForQueryMessage(e,n,i);case 65:return this.
parseNotificationMessage(e,n,i);case 82:return this.parseAuthenticationResponse(
e,n,i);case 83:return this.parseParameterStatusMessage(e,n,i);case 75:return this.
parseBackendKeyData(e,n,i);case 69:return this.parseErrorMessage(e,n,i,"error");case 78:
return this.parseErrorMessage(e,n,i,"notice");case 84:return this.parseRowDescriptionMessage(
e,n,i);case 116:return this.parseParameterDescriptionMessage(e,n,i);case 71:return this.
parseCopyInMessage(e,n,i);case 72:return this.parseCopyOutMessage(e,n,i);case 100:
return this.parseCopyData(e,n,i);default:Tu.default.fail(`unknown message code: ${t.
toString(16)}`)}}parseReadyForQueryMessage(e,t,n){this.reader.setBuffer(e,n);let i=this.
reader.string(1);return new F.ReadyForQueryMessage(t,i)}parseCommandCompleteMessage(e,t,n){
this.reader.setBuffer(e,n);let i=this.reader.cstring();return new F.CommandCompleteMessage(
t,i)}parseCopyData(e,t,n){let i=n.slice(e,e+(t-4));return new F.CopyDataMessage(
t,i)}parseCopyInMessage(e,t,n){return this.parseCopyMessage(e,t,n,"copyInRespons\
e")}parseCopyOutMessage(e,t,n){return this.parseCopyMessage(e,t,n,"copyOutRespon\
se")}parseCopyMessage(e,t,n,i){this.reader.setBuffer(e,n);let s=this.reader.byte()!==
0,o=this.reader.int16(),a=new F.CopyResponse(t,i,s,o);for(let u=0;u<o;u++)a.columnTypes[u]=
this.reader.int16();return a}parseNotificationMessage(e,t,n){this.reader.setBuffer(
e,n);let i=this.reader.int32(),s=this.reader.cstring(),o=this.reader.cstring();return new F.
NotificationResponseMessage(t,i,s,o)}parseRowDescriptionMessage(e,t,n){this.reader.
setBuffer(e,n);let i=this.reader.int16(),s=new F.RowDescriptionMessage(t,i);for(let o=0;o<
i;o++)s.fields[o]=this.parseField();return s}parseField(){let e=this.reader.cstring(),
t=this.reader.int32(),n=this.reader.int16(),i=this.reader.int32(),s=this.reader.
int16(),o=this.reader.int32(),a=this.reader.int16()===0?"text":"binary";return new F.
Field(e,t,n,i,s,o,a)}parseParameterDescriptionMessage(e,t,n){this.reader.setBuffer(
e,n);let i=this.reader.int16(),s=new F.ParameterDescriptionMessage(t,i);for(let o=0;o<
i;o++)s.dataTypeIDs[o]=this.reader.int32();return s}parseDataRowMessage(e,t,n){this.
reader.setBuffer(e,n);let i=this.reader.int16(),s=new Array(i);for(let o=0;o<i;o++){
let a=this.reader.int32();s[o]=a===-1?null:this.reader.string(a)}return new F.DataRowMessage(
t,s)}parseParameterStatusMessage(e,t,n){this.reader.setBuffer(e,n);let i=this.reader.
cstring(),s=this.reader.cstring();return new F.ParameterStatusMessage(t,i,s)}parseBackendKeyData(e,t,n){
this.reader.setBuffer(e,n);let i=this.reader.int32(),s=this.reader.int32();return new F.
BackendKeyDataMessage(t,i,s)}parseAuthenticationResponse(e,t,n){this.reader.setBuffer(
e,n);let i=this.reader.int32(),s={name:"authenticationOk",length:t};switch(i){case 0:
break;case 3:s.length===8&&(s.name="authenticationCleartextPassword");break;case 5:
if(s.length===12){s.name="authenticationMD5Password";let a=this.reader.bytes(4);
return new F.AuthenticationMD5Password(t,a)}break;case 10:s.name="authentication\
SASL",s.mechanisms=[];let o;do o=this.reader.cstring(),o&&s.mechanisms.push(o);while(o);
break;case 11:s.name="authenticationSASLContinue",s.data=this.reader.string(t-8);
break;case 12:s.name="authenticationSASLFinal",s.data=this.reader.string(t-8);break;default:
throw new Error("Unknown authenticationOk message type "+i)}return s}parseErrorMessage(e,t,n,i){
this.reader.setBuffer(e,n);let s={},o=this.reader.string(1);for(;o!=="\0";)s[o]=
this.reader.cstring(),o=this.reader.string(1);let a=s.M,u=i==="notice"?new F.NoticeMessage(
t,a):new F.DatabaseError(a,t,i);return u.severity=s.S,u.code=s.C,u.detail=s.D,u.
hint=s.H,u.position=s.P,u.internalPosition=s.p,u.internalQuery=s.q,u.where=s.W,u.
schema=s.s,u.table=s.t,u.column=s.c,u.dataType=s.d,u.constraint=s.n,u.file=s.F,u.
line=s.L,u.routine=s.R,u}};Oe.Parser=kr});var Or=C(Se=>{"use strict";f();Object.defineProperty(Se,"__esModule",{value:!0});
Se.DatabaseError=Se.serialize=Se.parse=void 0;var Bu=Br();Object.defineProperty(
Se,"DatabaseError",{enumerable:!0,get:function(){return Bu.DatabaseError}});var Lu=Wi();
Object.defineProperty(Se,"serialize",{enumerable:!0,get:function(){return Lu.serialize}});
var Ru=Vi();function Fu(r,e){let t=new Ru.Parser;return r.on("data",n=>t.parse(n,
e)),new Promise(n=>r.on("end",()=>n()))}Se.parse=Fu});var zi={};X(zi,{connect:()=>Mu});function Mu({socket:r,servername:e}){return r.startTls(
e),r}var Yi=$(()=>{f()});var qr=C(($h,Xi)=>{"use strict";f();var Zi=(mt(),D(qi)),Du=ge().EventEmitter,{parse:ku,
serialize:U}=Or(),Ji=U.flush(),Ou=U.sync(),Uu=U.end(),Ur=class extends Du{constructor(e){
super(),e=e||{},this.stream=e.stream||new Zi.Socket,this._keepAlive=e.keepAlive,
this._keepAliveInitialDelayMillis=e.keepAliveInitialDelayMillis,this.lastBuffer=
!1,this.parsedStatements={},this.ssl=e.ssl||!1,this._ending=!1,this._emitMessage=
!1;var t=this;this.on("newListener",function(n){n==="message"&&(t._emitMessage=!0)})}connect(e,t){
var n=this;this._connecting=!0,this.stream.setNoDelay(!0),this.stream.connect(e,
t),this.stream.once("connect",function(){n._keepAlive&&n.stream.setKeepAlive(!0,
n._keepAliveInitialDelayMillis),n.emit("connect")});let i=function(s){n._ending&&
(s.code==="ECONNRESET"||s.code==="EPIPE")||n.emit("error",s)};if(this.stream.on(
"error",i),this.stream.on("close",function(){n.emit("end")}),!this.ssl)return this.
attachListeners(this.stream);this.stream.once("data",function(s){var o=s.toString(
"utf8");switch(o){case"S":break;case"N":return n.stream.end(),n.emit("error",new Error(
"The server does not support SSL connections"));default:return n.stream.end(),n.
emit("error",new Error("There was an error establishing an SSL connection"))}var a=(Yi(),D(zi));
let u={socket:n.stream};n.ssl!==!0&&(Object.assign(u,n.ssl),"key"in n.ssl&&(u.key=
n.ssl.key)),Zi.isIP(t)===0&&(u.servername=t);try{n.stream=a.connect(u)}catch(c){
return n.emit("error",c)}n.attachListeners(n.stream),n.stream.on("error",i),n.emit(
"sslconnect")})}attachListeners(e){e.on("end",()=>{this.emit("end")}),ku(e,t=>{var n=t.
name==="error"?"errorMessage":t.name;this._emitMessage&&this.emit("message",t),this.
emit(n,t)})}requestSsl(){this.stream.write(U.requestSsl())}startup(e){this.stream.
write(U.startup(e))}cancel(e,t){this._send(U.cancel(e,t))}password(e){this._send(
U.password(e))}sendSASLInitialResponseMessage(e,t){this._send(U.sendSASLInitialResponseMessage(
e,t))}sendSCRAMClientFinalMessage(e){this._send(U.sendSCRAMClientFinalMessage(e))}_send(e){
return this.stream.writable?this.stream.write(e):!1}query(e){this._send(U.query(
e))}parse(e){this._send(U.parse(e))}bind(e){this._send(U.bind(e))}execute(e){this.
_send(U.execute(e))}flush(){this.stream.writable&&this.stream.write(Ji)}sync(){this.
_ending=!0,this._send(Ji),this._send(Ou)}ref(){this.stream.ref()}unref(){this.stream.
unref()}end(){if(this._ending=!0,!this._connecting||!this.stream.writable){this.
stream.end();return}return this.stream.write(Uu,()=>{this.stream.end()})}close(e){
this._send(U.close(e))}describe(e){this._send(U.describe(e))}sendCopyFromChunk(e){
this._send(U.copyData(e))}endCopyFrom(){this._send(U.copyDone())}sendCopyFail(e){
this._send(U.copyFail(e))}};Xi.exports=Ur});var rs=C((zh,ts)=>{"use strict";f();var qu=ge().EventEmitter,Vh=(He(),D(je)),Nu=et(),
Nr=hi(),Qu=xi(),Wu=ur(),ju=yt(),es=Oi(),Hu=Xe(),Gu=qr(),xt=class extends qu{constructor(e){
super(),this.connectionParameters=new ju(e),this.user=this.connectionParameters.
user,this.database=this.connectionParameters.database,this.port=this.connectionParameters.
port,this.host=this.connectionParameters.host,Object.defineProperty(this,"passwo\
rd",{configurable:!0,enumerable:!1,writable:!0,value:this.connectionParameters.password}),
this.replication=this.connectionParameters.replication;var t=e||{};this._Promise=
t.Promise||w.Promise,this._types=new Wu(t.types),this._ending=!1,this._connecting=
!1,this._connected=!1,this._connectionError=!1,this._queryable=!0,this.connection=
t.connection||new Gu({stream:t.stream,ssl:this.connectionParameters.ssl,keepAlive:t.
keepAlive||!1,keepAliveInitialDelayMillis:t.keepAliveInitialDelayMillis||0,encoding:this.
connectionParameters.client_encoding||"utf8"}),this.queryQueue=[],this.binary=t.
binary||Hu.binary,this.processID=null,this.secretKey=null,this.ssl=this.connectionParameters.
ssl||!1,this.ssl&&this.ssl.key&&Object.defineProperty(this.ssl,"key",{enumerable:!1}),
this._connectionTimeoutMillis=t.connectionTimeoutMillis||0}_errorAllQueries(e){let t=n=>{
d.nextTick(()=>{n.handleError(e,this.connection)})};this.activeQuery&&(t(this.activeQuery),
this.activeQuery=null),this.queryQueue.forEach(t),this.queryQueue.length=0}_connect(e){
var t=this,n=this.connection;if(this._connectionCallback=e,this._connecting||this.
_connected){let i=new Error("Client has already been connected. You cannot reuse\
 a client.");d.nextTick(()=>{e(i)});return}this._connecting=!0,this.connectionTimeoutHandle,
this._connectionTimeoutMillis>0&&(this.connectionTimeoutHandle=setTimeout(()=>{n.
_ending=!0,n.stream.destroy(new Error("timeout expired"))},this._connectionTimeoutMillis)),
this.host&&this.host.indexOf("/")===0?n.connect(this.host+"/.s.PGSQL."+this.port):
n.connect(this.port,this.host),n.on("connect",function(){t.ssl?n.requestSsl():n.
startup(t.getStartupConf())}),n.on("sslconnect",function(){n.startup(t.getStartupConf())}),
this._attachListeners(n),n.once("end",()=>{let i=this._ending?new Error("Connect\
ion terminated"):new Error("Connection terminated unexpectedly");clearTimeout(this.
connectionTimeoutHandle),this._errorAllQueries(i),this._ending||(this._connecting&&
!this._connectionError?this._connectionCallback?this._connectionCallback(i):this.
_handleErrorEvent(i):this._connectionError||this._handleErrorEvent(i)),d.nextTick(
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
"error",n)}):this.password!==null?e():Qu(this.connectionParameters,n=>{n!==void 0&&
(this.connectionParameters.password=this.password=n),e()})}_handleAuthCleartextPassword(e){
this._checkPgPass(()=>{this.connection.password(this.password)})}_handleAuthMD5Password(e){
this._checkPgPass(()=>{let t=Nu.postgresMd5PasswordHash(this.user,this.password,
e.salt);this.connection.password(t)})}_handleAuthSASL(e){this._checkPgPass(()=>{
this.saslSession=Nr.startSession(e.mechanisms),this.connection.sendSASLInitialResponseMessage(
this.saslSession.mechanism,this.saslSession.response)})}_handleAuthSASLContinue(e){
Nr.continueSession(this.saslSession,this.password,e.data),this.connection.sendSCRAMClientFinalMessage(
this.saslSession.response)}_handleAuthSASLFinal(e){Nr.finalizeSession(this.saslSession,
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
e&&d.nextTick(()=>{this.activeQuery.handleError(e,this.connection),this.readyForQuery=
!0,this._pulseQueryQueue()})}else this.hasExecuted&&(this.activeQuery=null,this.
emit("drain"))}query(e,t,n){var i,s,o,a,u;if(e==null)throw new TypeError("Client\
 was passed a null or undefined query");return typeof e.submit=="function"?(o=e.
query_timeout||this.connectionParameters.query_timeout,s=i=e,typeof t=="function"&&
(i.callback=i.callback||t)):(o=this.connectionParameters.query_timeout,i=new es(
e,t,n),i.callback||(s=new this._Promise((c,h)=>{i.callback=(y,x)=>y?h(y):c(x)}))),
o&&(u=i.callback,a=setTimeout(()=>{var c=new Error("Query read timeout");d.nextTick(
()=>{i.handleError(c,this.connection)}),u(c),i.callback=()=>{};var h=this.queryQueue.
indexOf(i);h>-1&&this.queryQueue.splice(h,1),this._pulseQueryQueue()},o),i.callback=
(c,h)=>{clearTimeout(a),u(c,h)}),this.binary&&!i.binary&&(i.binary=!0),i._result&&
!i._result._types&&(i._result._types=this._types),this._queryable?this._ending?(d.
nextTick(()=>{i.handleError(new Error("Client was closed and is not queryable"),
this.connection)}),s):(this.queryQueue.push(i),this._pulseQueryQueue(),s):(d.nextTick(
()=>{i.handleError(new Error("Client has encountered a connection error and is n\
ot queryable"),this.connection)}),s)}ref(){this.connection.ref()}unref(){this.connection.
unref()}end(e){if(this._ending=!0,!this.connection._connecting)if(e)e();else return this.
_Promise.resolve();if(this.activeQuery||!this._queryable?this.connection.stream.
destroy():this.connection.end(),e)this.connection.once("end",e);else return new this.
_Promise(t=>{this.connection.once("end",t)})}};xt.Query=es;ts.exports=xt});var os=C((Zh,ss)=>{"use strict";f();var $u=ge().EventEmitter,ns=function(){},is=(r,e)=>{
let t=r.findIndex(e);return t===-1?void 0:r.splice(t,1)[0]},Qr=class{constructor(e,t,n){
this.client=e,this.idleListener=t,this.timeoutId=n}},Ue=class{constructor(e){this.
callback=e}};function Ku(){throw new Error("Release called on client which has a\
lready been released to the pool.")}function Et(r,e){if(e)return{callback:e,result:void 0};
let t,n,i=function(o,a){o?t(o):n(a)},s=new r(function(o,a){n=o,t=a}).catch(o=>{throw Error.
captureStackTrace(o),o});return{callback:i,result:s}}function Vu(r,e){return function t(n){
n.client=e,e.removeListener("error",t),e.on("error",()=>{r.log("additional clien\
t error after disconnection due to error",n)}),r._remove(e),r.emit("error",n,e)}}
var Wr=class extends $u{constructor(e,t){super(),this.options=Object.assign({},e),
e!=null&&"password"in e&&Object.defineProperty(this.options,"password",{configurable:!0,
enumerable:!1,writable:!0,value:e.password}),e!=null&&e.ssl&&e.ssl.key&&Object.defineProperty(
this.options.ssl,"key",{enumerable:!1}),this.options.max=this.options.max||this.
options.poolSize||10,this.options.maxUses=this.options.maxUses||1/0,this.options.
allowExitOnIdle=this.options.allowExitOnIdle||!1,this.options.maxLifetimeSeconds=
this.options.maxLifetimeSeconds||0,this.log=this.options.log||function(){},this.
Client=this.options.Client||t||vt().Client,this.Promise=this.options.Promise||w.
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
d condition")}_remove(e){let t=is(this._idle,n=>n.client===e);t!==void 0&&clearTimeout(
t.timeoutId),this._clients=this._clients.filter(n=>n!==e),e.end(),this.emit("rem\
ove",e)}connect(e){if(this.ending){let i=new Error("Cannot use a pool after call\
ing end on the pool");return e?e(i):this.Promise.reject(i)}let t=Et(this.Promise,
e),n=t.result;if(this._isFull()||this._idle.length){if(this._idle.length&&d.nextTick(
()=>this._pulseQueue()),!this.options.connectionTimeoutMillis)return this._pendingQueue.
push(new Ue(t.callback)),n;let i=(a,u,c)=>{clearTimeout(o),t.callback(a,u,c)},s=new Ue(
i),o=setTimeout(()=>{is(this._pendingQueue,a=>a.callback===i),s.timedOut=!0,t.callback(
new Error("timeout exceeded when trying to connect"))},this.options.connectionTimeoutMillis);
return this._pendingQueue.push(s),n}return this.newClient(new Ue(t.callback)),n}newClient(e){
let t=new this.Client(this.options);this._clients.push(t);let n=Vu(this,t);this.
log("checking client timeout");let i,s=!1;this.options.connectionTimeoutMillis&&
(i=setTimeout(()=>{this.log("ending client due to timeout"),s=!0,t.connection?t.
connection.stream.destroy():t.end()},this.options.connectionTimeoutMillis)),this.
log("connecting new client"),t.connect(o=>{if(i&&clearTimeout(i),t.on("error",n),
o)this.log("client failed to connect",o),this._clients=this._clients.filter(a=>a!==
t),s&&(o.message="Connection terminated due to connection timeout"),this._pulseQueue(),
e.timedOut||e.callback(o,void 0,ns);else{if(this.log("new client connected"),this.
options.maxLifetimeSeconds!==0){let a=setTimeout(()=>{this.log("ending client du\
e to expired lifetime"),this._expired.add(t),this._idle.findIndex(c=>c.client===
t)!==-1&&this._acquireClient(t,new Ue((c,h,y)=>y()),n,!1)},this.options.maxLifetimeSeconds*
1e3);a.unref(),t.once("end",()=>clearTimeout(a))}return this._acquireClient(t,e,
n,!0)}})}_acquireClient(e,t,n,i){i&&this.emit("connect",e),this.emit("acquire",e),
e.release=this._releaseOnce(e,n),e.removeListener("error",n),t.timedOut?i&&this.
options.verify?this.options.verify(e,e.release):e.release():i&&this.options.verify?
this.options.verify(e,s=>{if(s)return e.release(s),t.callback(s,void 0,ns);t.callback(
void 0,e,e.release)}):t.callback(void 0,e,e.release)}_releaseOnce(e,t){let n=!1;
return i=>{n&&Ku(),n=!0,this._release(e,t,i)}}_release(e,t,n){if(e.on("error",t),
e._poolUseCount=(e._poolUseCount||0)+1,this.emit("release",n,e),n||this.ending||
!e._queryable||e._ending||e._poolUseCount>=this.options.maxUses){e._poolUseCount>=
this.options.maxUses&&this.log("remove expended client"),this._remove(e),this._pulseQueue();
return}if(this._expired.has(e)){this.log("remove expired client"),this._expired.
delete(e),this._remove(e),this._pulseQueue();return}let s;this.options.idleTimeoutMillis&&
(s=setTimeout(()=>{this.log("remove idle client"),this._remove(e)},this.options.
idleTimeoutMillis),this.options.allowExitOnIdle&&s.unref()),this.options.allowExitOnIdle&&
e.unref(),this._idle.push(new Qr(e,t,s)),this._pulseQueue()}query(e,t,n){if(typeof e==
"function"){let s=Et(this.Promise,e);return b(function(){return s.callback(new Error(
"Passing a function as the first parameter to pool.query is not supported"))}),s.
result}typeof t=="function"&&(n=t,t=void 0);let i=Et(this.Promise,n);return n=i.
callback,this.connect((s,o)=>{if(s)return n(s);let a=!1,u=c=>{a||(a=!0,o.release(
c),n(c))};o.once("error",u),this.log("dispatching query");try{o.query(e,t,(c,h)=>{
if(this.log("query dispatched"),o.removeListener("error",u),!a)return a=!0,o.release(
c),c?n(c):n(void 0,h)})}catch(c){return o.release(c),n(c)}}),i.result}end(e){if(this.
log("ending"),this.ending){let n=new Error("Called end on pool more than once");
return e?e(n):this.Promise.reject(n)}this.ending=!0;let t=Et(this.Promise,e);return this.
_endCallback=t.callback,this._pulseQueue(),t.result}get waitingCount(){return this.
_pendingQueue.length}get idleCount(){return this._idle.length}get expiredCount(){
return this._clients.reduce((e,t)=>e+(this._expired.has(t)?1:0),0)}get totalCount(){
return this._clients.length}};ss.exports=Wr});var as={};X(as,{default:()=>zu});var zu,us=$(()=>{f();zu={}});var cs=C((el,Yu)=>{Yu.exports={name:"pg",version:"8.8.0",description:"PostgreSQL\
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
7b9a5491a178655"}});var fs=C((tl,ls)=>{"use strict";f();var hs=ge().EventEmitter,Zu=(He(),D(je)),jr=et(),
qe=ls.exports=function(r,e,t){hs.call(this),r=jr.normalizeQueryConfig(r,e,t),this.
text=r.text,this.values=r.values,this.name=r.name,this.callback=r.callback,this.
state="new",this._arrayMode=r.rowMode==="array",this._emitRowEvents=!1,this.on("\
newListener",function(n){n==="row"&&(this._emitRowEvents=!0)}.bind(this))};Zu.inherits(
qe,hs);var Ju={sqlState:"code",statementPosition:"position",messagePrimary:"mess\
age",context:"where",schemaName:"schema",tableName:"table",columnName:"column",dataTypeName:"\
dataType",constraintName:"constraint",sourceFile:"file",sourceLine:"line",sourceFunction:"\
routine"};qe.prototype.handleError=function(r){var e=this.native.pq.resultErrorFields();
if(e)for(var t in e){var n=Ju[t]||t;r[n]=e[t]}this.callback?this.callback(r):this.
emit("error",r),this.state="error"};qe.prototype.then=function(r,e){return this.
_getPromise().then(r,e)};qe.prototype.catch=function(r){return this._getPromise().
catch(r)};qe.prototype._getPromise=function(){return this._promise?this._promise:
(this._promise=new Promise(function(r,e){this._once("end",r),this._once("error",
e)}.bind(this)),this._promise)};qe.prototype.submit=function(r){this.state="runn\
ing";var e=this;this.native=r.native,r.native.arrayMode=this._arrayMode;var t=function(s,o,a){
if(r.native.arrayMode=!1,b(function(){e.emit("_done")}),s)return e.handleError(s);
e._emitRowEvents&&(a.length>1?o.forEach((u,c)=>{u.forEach(h=>{e.emit("row",h,a[c])})}):
o.forEach(function(u){e.emit("row",u,a)})),e.state="end",e.emit("end",a),e.callback&&
e.callback(null,a)};if(d.domain&&(t=d.domain.bind(t)),this.name){this.name.length>
63&&(console.error("Warning! Postgres only supports 63 characters for query name\
s."),console.error("You supplied %s (%s)",this.name,this.name.length),console.error(
"This can cause conflicts and silent errors executing queries"));var n=(this.values||
[]).map(jr.prepareValue);if(r.namedQueries[this.name]){if(this.text&&r.namedQueries[this.
name]!==this.text){let s=new Error(`Prepared statements must be unique - '${this.
name}' was used for a different statement`);return t(s)}return r.native.execute(
this.name,n,t)}return r.native.prepare(this.name,this.text,n.length,function(s){
return s?t(s):(r.namedQueries[e.name]=e.text,e.native.execute(e.name,n,t))})}else if(this.
values){if(!Array.isArray(this.values)){let s=new Error("Query values must be an\
 array");return t(s)}var i=this.values.map(jr.prepareValue);r.native.query(this.
text,i,t)}else r.native.query(this.text,t)}});var ms=C((il,ys)=>{"use strict";f();var Xu=(us(),D(as)),ec=ur(),nl=cs(),ps=ge().
EventEmitter,tc=(He(),D(je)),rc=yt(),ds=fs(),Y=ys.exports=function(r){ps.call(this),
r=r||{},this._Promise=r.Promise||w.Promise,this._types=new ec(r.types),this.native=
new Xu({types:this._types}),this._queryQueue=[],this._ending=!1,this._connecting=
!1,this._connected=!1,this._queryable=!0;var e=this.connectionParameters=new rc(
r);this.user=e.user,Object.defineProperty(this,"password",{configurable:!0,enumerable:!1,
writable:!0,value:e.password}),this.database=e.database,this.host=e.host,this.port=
e.port,this.namedQueries={}};Y.Query=ds;tc.inherits(Y,ps);Y.prototype._errorAllQueries=
function(r){let e=t=>{d.nextTick(()=>{t.native=this.native,t.handleError(r)})};this.
_hasActiveQuery()&&(e(this._activeQuery),this._activeQuery=null),this._queryQueue.
forEach(e),this._queryQueue.length=0};Y.prototype._connect=function(r){var e=this;
if(this._connecting){d.nextTick(()=>r(new Error("Client has already been connect\
ed. You cannot reuse a client.")));return}this._connecting=!0,this.connectionParameters.
getLibpqConnectionString(function(t,n){if(t)return r(t);e.native.connect(n,function(i){
if(i)return e.native.end(),r(i);e._connected=!0,e.native.on("error",function(s){
e._queryable=!1,e._errorAllQueries(s),e.emit("error",s)}),e.native.on("notificat\
ion",function(s){e.emit("notification",{channel:s.relname,payload:s.extra})}),e.
emit("connect"),e._pulseQueryQueue(!0),r()})})};Y.prototype.connect=function(r){
if(r){this._connect(r);return}return new this._Promise((e,t)=>{this._connect(n=>{
n?t(n):e()})})};Y.prototype.query=function(r,e,t){var n,i,s,o,a;if(r==null)throw new TypeError(
"Client was passed a null or undefined query");if(typeof r.submit=="function")s=
r.query_timeout||this.connectionParameters.query_timeout,i=n=r,typeof e=="functi\
on"&&(r.callback=e);else if(s=this.connectionParameters.query_timeout,n=new ds(r,
e,t),!n.callback){let u,c;i=new this._Promise((h,y)=>{u=h,c=y}),n.callback=(h,y)=>h?
c(h):u(y)}return s&&(a=n.callback,o=setTimeout(()=>{var u=new Error("Query read \
timeout");d.nextTick(()=>{n.handleError(u,this.connection)}),a(u),n.callback=()=>{};
var c=this._queryQueue.indexOf(n);c>-1&&this._queryQueue.splice(c,1),this._pulseQueryQueue()},
s),n.callback=(u,c)=>{clearTimeout(o),a(u,c)}),this._queryable?this._ending?(n.native=
this.native,d.nextTick(()=>{n.handleError(new Error("Client was closed and is no\
t queryable"))}),i):(this._queryQueue.push(n),this._pulseQueryQueue(),i):(n.native=
this.native,d.nextTick(()=>{n.handleError(new Error("Client has encountered a co\
nnection error and is not queryable"))}),i)};Y.prototype.end=function(r){var e=this;
this._ending=!0,this._connected||this.once("connect",this.end.bind(this,r));var t;
return r||(t=new this._Promise(function(n,i){r=s=>s?i(s):n()})),this.native.end(
function(){e._errorAllQueries(new Error("Connection terminated")),d.nextTick(()=>{
e.emit("end"),r&&r()})}),t};Y.prototype._hasActiveQuery=function(){return this._activeQuery&&
this._activeQuery.state!=="error"&&this._activeQuery.state!=="end"};Y.prototype.
_pulseQueryQueue=function(r){if(this._connected&&!this._hasActiveQuery()){var e=this.
_queryQueue.shift();if(!e){r||this.emit("drain");return}this._activeQuery=e,e.submit(
this);var t=this;e.once("_done",function(){t._pulseQueryQueue()})}};Y.prototype.
cancel=function(r){this._activeQuery===r?this.native.cancel(function(){}):this._queryQueue.
indexOf(r)!==-1&&this._queryQueue.splice(this._queryQueue.indexOf(r),1)};Y.prototype.
ref=function(){};Y.prototype.unref=function(){};Y.prototype.setTypeParser=function(r,e,t){
return this._types.setTypeParser(r,e,t)};Y.prototype.getTypeParser=function(r,e){
return this._types.getTypeParser(r,e)}});var Hr=C((ol,gs)=>{"use strict";f();gs.exports=ms()});var vt=C((cl,rt)=>{"use strict";f();var nc=rs(),ic=Xe(),sc=qr(),oc=os(),{DatabaseError:ac}=Or(),
uc=r=>class extends oc{constructor(t){super(t,r)}},Gr=function(r){this.defaults=
ic,this.Client=r,this.Query=this.Client.Query,this.Pool=uc(this.Client),this._pools=
[],this.Connection=sc,this.types=Je(),this.DatabaseError=ac};typeof d.env.NODE_PG_FORCE_NATIVE<
"u"?rt.exports=new Gr(Hr()):(rt.exports=new Gr(nc),Object.defineProperty(rt.exports,
"native",{configurable:!0,enumerable:!1,get(){var r=null;try{r=new Gr(Hr())}catch(e){
if(e.code!=="MODULE_NOT_FOUND")throw e}return Object.defineProperty(rt.exports,"\
native",{value:r}),r}}))});var lc={};X(lc,{Client:()=>_t,ClientBase:()=>Z.ClientBase,Connection:()=>Z.Connection,
DatabaseError:()=>Z.DatabaseError,NeonDbError:()=>xe,Pool:()=>Kr,Query:()=>Z.Query,
defaults:()=>Z.defaults,neon:()=>$r,neonConfig:()=>be,types:()=>Z.types});module.
exports=D(lc);f();var At=Qe(vt());mt();f();hr();mt();var Ss=Qe(et());var xe=class extends Error{constructor(){super(...arguments);I(this,"name","Neon\
DbError");I(this,"code",null);I(this,"sourceError")}},ws="transaction() expects \
an array of queries, or a function returning an array of queries";function $r(r,{
arrayMode:e,fullResults:t,fetchOptions:n,isolationLevel:i,readOnly:s,deferrable:o,
queryCallback:a,resultCallback:u}={}){if(!r)throw new Error("No database connect\
ion string was provided to `neon()`. Perhaps an environment variable has not bee\
n set?");let c;try{c=cr(r)}catch{throw new Error("Database connection string pro\
vided to `neon()` is not a valid URL. Connection string: "+String(r))}let{protocol:h,
username:y,password:x,hostname:v,port:T,pathname:q}=c;if(h!=="postgres:"&&h!=="p\
ostgresql:"||!y||!x||!v||!q)throw new Error("Database connection string format f\
or `neon()` should be: postgresql://user:password@host.tld/dbname?option=value");
function J(_,...m){let M,j;if(typeof _=="string")M=_,j=m[1],m=m[0]??[];else{M="";
for(let Q=0;Q<_.length;Q++)M+=_[Q],Q<m.length&&(M+="$"+(Q+1))}m=m.map(Q=>(0,Ss.prepareValue)(
Q));let N={query:M,params:m};return a&&a(N),cc(pe,N,j)}J.transaction=async(_,m)=>{
if(typeof _=="function"&&(_=_(J)),!Array.isArray(_))throw new Error(ws);let M=_.
map(j=>{if(j[Symbol.toStringTag]!=="NeonQueryPromise")throw new Error(ws);return j.
parameterizedQuery});return pe(M,m)};async function pe(_,m){let M=n??{},{fetchEndpoint:j,
fetchConnectionCache:N,fetchFunction:Q}=be,ue=typeof j=="function"?j(v,T):j,de=Array.
isArray(_)?{queries:_}:_,B=e??!1,H=t??!1,ce=i,ye=s,Ee=o;m!==void 0&&(m.arrayMode!==
void 0&&(B=m.arrayMode),m.fullResults!==void 0&&(H=m.fullResults),m.fetchOptions!==
void 0&&(M={...M,...m.fetchOptions}),m.isolationLevel!==void 0&&(ce=m.isolationLevel),
m.readOnly!==void 0&&(ye=m.readOnly),m.deferrable!==void 0&&(Ee=m.deferrable));let he={
"Neon-Connection-String":r,"Neon-Raw-Text-Output":"true","Neon-Array-Mode":"true"};
N===!0&&(he["Neon-Pool-Opt-In"]="true"),Array.isArray(_)&&(ce!==void 0&&(he["Neo\
n-Batch-Isolation-Level"]=ce),ye!==void 0&&(he["Neon-Batch-Read-Only"]=String(ye)),
Ee!==void 0&&(he["Neon-Batch-Deferrable"]=String(Ee)));let ie;try{ie=await(Q??fetch)(
ue,{method:"POST",body:JSON.stringify(de),headers:he,...M})}catch(se){let G=new xe(
`Error connecting to database: ${se.message}`);throw G.sourceError=se,G}if(ie.ok){
let se=await ie.json();if(Array.isArray(_)){let G=se.results;if(!Array.isArray(G))
throw new xe("Neon internal error: unexpected result format");return G.map((ne,Ae)=>bs(
ne,{arrayMode:B,fullResults:H,parameterizedQuery:_[Ae],resultCallback:u}))}else return bs(
se,{arrayMode:B,fullResults:H,parameterizedQuery:_,resultCallback:u})}else{let{status:se}=ie;
if(se===400){let{message:G,code:ne}=await ie.json(),Ae=new xe(G);throw Ae.code=ne,
Ae}else{let G=await ie.text();throw new xe(`Server error (HTTP status ${se}): ${G}`)}}}
return J}function cc(r,e,t){return{[Symbol.toStringTag]:"NeonQueryPromise",parameterizedQuery:e,
opts:t,then:(n,i)=>r(e,t).then(n,i),catch:n=>r(e,t).catch(n),finally:n=>r(e,t).finally(
n)}}function bs(r,{arrayMode:e,fullResults:t,parameterizedQuery:n,resultCallback:i}){
let s=r.fields.map(u=>u.name),o=r.fields.map(u=>Z.types.getTypeParser(u.dataTypeID)),
a=e===!0?r.rows.map(u=>u.map((c,h)=>c===null?null:o[h](c))):r.rows.map(u=>Object.
fromEntries(u.map((c,h)=>[s[h],c===null?null:o[h](c)])));return i&&i(n,r,a,{arrayMode:e,
fullResults:t}),t?(r.viaNeonFetch=!0,r.rowAsArray=e,r.rows=a,r):a}var xs=Qe(yt()),Z=Qe(vt());var _t=class extends At.Client{constructor(t){super(t);this.config=t}get neonConfig(){
return this.connection.stream}connect(t){let{neonConfig:n}=this;n.forceDisablePgSSL&&
(this.ssl=this.connection.ssl=!1),this.ssl&&n.useSecureWebSocket&&console.warn("\
SSL is enabled for both Postgres (e.g. ?sslmode=require in the connection string\
 + forceDisablePgSSL = false) and the WebSocket tunnel (useSecureWebSocket = tru\
e). Double encryption will increase latency and CPU usage. It may be appropriate\
 to disable SSL in the Postgres connection parameters or set forceDisablePgSSL =\
 true.");let i=this.config?.host!==void 0||this.config?.connectionString!==void 0||
d.env.PGHOST!==void 0,s=d.env.USER??d.env.USERNAME;if(!i&&this.host==="localhost"&&
this.user===s&&this.database===s&&this.password===null)throw new Error(`No datab\
ase host or connection string was set, and key parameters have default values (h\
ost: localhost, user: ${s}, db: ${s}, password: null). Is an environment variabl\
e missing? Alternatively, if you intended to connect with these parameters, plea\
se set the host to 'localhost' explicitly.`);let o=super.connect(t),a=n.pipelineTLS&&
this.ssl,u=n.pipelineConnect==="password";if(!a&&!n.pipelineConnect)return o;let c=this.
connection;if(a&&c.on("connect",()=>c.stream.emit("data","S")),u){c.removeAllListeners(
"authenticationCleartextPassword"),c.removeAllListeners("readyForQuery"),c.once(
"readyForQuery",()=>c.on("readyForQuery",this._handleReadyForQuery.bind(this)));
let h=this.ssl?"sslconnect":"connect";c.on(h,()=>{this._handleAuthCleartextPassword(),
this._handleReadyForQuery()})}return o}async _handleAuthSASLContinue(t){let n=this.
saslSession,i=this.password,s=t.data;if(n.message!=="SASLInitialResponse"||typeof i!=
"string"||typeof s!="string")throw new Error("SASL: protocol error");let o=Object.
fromEntries(s.split(",").map(G=>{if(!/^.=/.test(G))throw new Error("SASL: Invali\
d attribute pair entry");let ne=G[0],Ae=G.substring(2);return[ne,Ae]})),a=o.r,u=o.
s,c=o.i;if(!a||!/^[!-+--~]+$/.test(a))throw new Error("SASL: SCRAM-SERVER-FIRST-\
MESSAGE: nonce missing/unprintable");if(!u||!/^(?:[a-zA-Z0-9+/]{4})*(?:[a-zA-Z0-9+/]{2}==|[a-zA-Z0-9+/]{3}=)?$/.
test(u))throw new Error("SASL: SCRAM-SERVER-FIRST-MESSAGE: salt missing/not base\
64");if(!c||!/^[1-9][0-9]*$/.test(c))throw new Error("SASL: SCRAM-SERVER-FIRST-M\
ESSAGE: missing/invalid iteration count");if(!a.startsWith(n.clientNonce))throw new Error(
"SASL: SCRAM-SERVER-FIRST-MESSAGE: server nonce does not start with client nonce");
if(a.length===n.clientNonce.length)throw new Error("SASL: SCRAM-SERVER-FIRST-MES\
SAGE: server nonce is too short");let h=parseInt(c,10),y=p.from(u,"base64"),x=new TextEncoder,
v=x.encode(i),T=await g.subtle.importKey("raw",v,{name:"HMAC",hash:{name:"SHA-25\
6"}},!1,["sign"]),q=new Uint8Array(await g.subtle.sign("HMAC",T,p.concat([y,p.from(
[0,0,0,1])]))),J=q;for(var pe=0;pe<h-1;pe++)q=new Uint8Array(await g.subtle.sign(
"HMAC",T,q)),J=p.from(J.map((G,ne)=>J[ne]^q[ne]));let _=J,m=await g.subtle.importKey(
"raw",_,{name:"HMAC",hash:{name:"SHA-256"}},!1,["sign"]),M=new Uint8Array(await g.
subtle.sign("HMAC",m,x.encode("Client Key"))),j=await g.subtle.digest("SHA-256",
M),N="n=*,r="+n.clientNonce,Q="r="+a+",s="+u+",i="+h,ue="c=biws,r="+a,de=N+","+Q+
","+ue,B=await g.subtle.importKey("raw",j,{name:"HMAC",hash:{name:"SHA-256"}},!1,
["sign"]);var H=new Uint8Array(await g.subtle.sign("HMAC",B,x.encode(de))),ce=p.
from(M.map((G,ne)=>M[ne]^H[ne])),ye=ce.toString("base64");let Ee=await g.subtle.
importKey("raw",_,{name:"HMAC",hash:{name:"SHA-256"}},!1,["sign"]),he=await g.subtle.
sign("HMAC",Ee,x.encode("Server Key")),ie=await g.subtle.importKey("raw",he,{name:"\
HMAC",hash:{name:"SHA-256"}},!1,["sign"]);var se=p.from(await g.subtle.sign("HMA\
C",ie,x.encode(de)));n.message="SASLResponse",n.serverSignature=se.toString("bas\
e64"),n.response=ue+",p="+ye,this.connection.sendSCRAMClientFinalMessage(this.saslSession.
response)}};function hc(r,e){if(e)return{callback:e,result:void 0};let t,n,i=function(o,a){
o?t(o):n(a)},s=new r(function(o,a){n=o,t=a});return{callback:i,result:s}}var Kr=class extends At.Pool{constructor(){
super(...arguments);I(this,"Client",_t);I(this,"hasFetchUnsupportedListeners",!1)}on(t,n){
return t!=="error"&&(this.hasFetchUnsupportedListeners=!0),super.on(t,n)}query(t,n,i){
if(!be.poolQueryViaFetch||this.hasFetchUnsupportedListeners||typeof t=="function")
return super.query(t,n,i);typeof n=="function"&&(i=n,n=void 0);let s=hc(this.Promise,
i);i=s.callback;try{let o=new xs.default(this.options),a=encodeURIComponent,u=encodeURI,
c=`postgresql://${a(o.user)}:${a(o.password)}@${a(o.host)}/${u(o.database)}`,h=typeof t==
"string"?t:t.text,y=n??t.values??[];$r(c,{fullResults:!0,arrayMode:t.rowMode==="\
array"})(h,y).then(v=>i(void 0,v)).catch(v=>i(v))}catch(o){i(o)}return s.result}};
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
