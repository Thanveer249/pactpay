import{L as Xu,_ as Yu,C as Ju,r as zi,a as Zu,F as tl,b as Lt,g as el,c as nl,d as rl,i as Qo,p as sl,u as il,e as ol,f as al,h as Ie,j as ul,k as ll,S as hl}from"./firebase-auth-Bx7BSjL6.js";var $i=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var $t,Ho;(function(){var r;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(T,m){function _(){}_.prototype=m.prototype,T.D=m.prototype,T.prototype=new _,T.prototype.constructor=T,T.C=function(y,E,A){for(var p=Array(arguments.length-2),kt=2;kt<arguments.length;kt++)p[kt-2]=arguments[kt];return m.prototype[E].apply(y,p)}}function e(){this.blockSize=-1}function n(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}t(n,e),n.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(T,m,_){_||(_=0);var y=Array(16);if(typeof m=="string")for(var E=0;16>E;++E)y[E]=m.charCodeAt(_++)|m.charCodeAt(_++)<<8|m.charCodeAt(_++)<<16|m.charCodeAt(_++)<<24;else for(E=0;16>E;++E)y[E]=m[_++]|m[_++]<<8|m[_++]<<16|m[_++]<<24;m=T.g[0],_=T.g[1],E=T.g[2];var A=T.g[3],p=m+(A^_&(E^A))+y[0]+3614090360&4294967295;m=_+(p<<7&4294967295|p>>>25),p=A+(E^m&(_^E))+y[1]+3905402710&4294967295,A=m+(p<<12&4294967295|p>>>20),p=E+(_^A&(m^_))+y[2]+606105819&4294967295,E=A+(p<<17&4294967295|p>>>15),p=_+(m^E&(A^m))+y[3]+3250441966&4294967295,_=E+(p<<22&4294967295|p>>>10),p=m+(A^_&(E^A))+y[4]+4118548399&4294967295,m=_+(p<<7&4294967295|p>>>25),p=A+(E^m&(_^E))+y[5]+1200080426&4294967295,A=m+(p<<12&4294967295|p>>>20),p=E+(_^A&(m^_))+y[6]+2821735955&4294967295,E=A+(p<<17&4294967295|p>>>15),p=_+(m^E&(A^m))+y[7]+4249261313&4294967295,_=E+(p<<22&4294967295|p>>>10),p=m+(A^_&(E^A))+y[8]+1770035416&4294967295,m=_+(p<<7&4294967295|p>>>25),p=A+(E^m&(_^E))+y[9]+2336552879&4294967295,A=m+(p<<12&4294967295|p>>>20),p=E+(_^A&(m^_))+y[10]+4294925233&4294967295,E=A+(p<<17&4294967295|p>>>15),p=_+(m^E&(A^m))+y[11]+2304563134&4294967295,_=E+(p<<22&4294967295|p>>>10),p=m+(A^_&(E^A))+y[12]+1804603682&4294967295,m=_+(p<<7&4294967295|p>>>25),p=A+(E^m&(_^E))+y[13]+4254626195&4294967295,A=m+(p<<12&4294967295|p>>>20),p=E+(_^A&(m^_))+y[14]+2792965006&4294967295,E=A+(p<<17&4294967295|p>>>15),p=_+(m^E&(A^m))+y[15]+1236535329&4294967295,_=E+(p<<22&4294967295|p>>>10),p=m+(E^A&(_^E))+y[1]+4129170786&4294967295,m=_+(p<<5&4294967295|p>>>27),p=A+(_^E&(m^_))+y[6]+3225465664&4294967295,A=m+(p<<9&4294967295|p>>>23),p=E+(m^_&(A^m))+y[11]+643717713&4294967295,E=A+(p<<14&4294967295|p>>>18),p=_+(A^m&(E^A))+y[0]+3921069994&4294967295,_=E+(p<<20&4294967295|p>>>12),p=m+(E^A&(_^E))+y[5]+3593408605&4294967295,m=_+(p<<5&4294967295|p>>>27),p=A+(_^E&(m^_))+y[10]+38016083&4294967295,A=m+(p<<9&4294967295|p>>>23),p=E+(m^_&(A^m))+y[15]+3634488961&4294967295,E=A+(p<<14&4294967295|p>>>18),p=_+(A^m&(E^A))+y[4]+3889429448&4294967295,_=E+(p<<20&4294967295|p>>>12),p=m+(E^A&(_^E))+y[9]+568446438&4294967295,m=_+(p<<5&4294967295|p>>>27),p=A+(_^E&(m^_))+y[14]+3275163606&4294967295,A=m+(p<<9&4294967295|p>>>23),p=E+(m^_&(A^m))+y[3]+4107603335&4294967295,E=A+(p<<14&4294967295|p>>>18),p=_+(A^m&(E^A))+y[8]+1163531501&4294967295,_=E+(p<<20&4294967295|p>>>12),p=m+(E^A&(_^E))+y[13]+2850285829&4294967295,m=_+(p<<5&4294967295|p>>>27),p=A+(_^E&(m^_))+y[2]+4243563512&4294967295,A=m+(p<<9&4294967295|p>>>23),p=E+(m^_&(A^m))+y[7]+1735328473&4294967295,E=A+(p<<14&4294967295|p>>>18),p=_+(A^m&(E^A))+y[12]+2368359562&4294967295,_=E+(p<<20&4294967295|p>>>12),p=m+(_^E^A)+y[5]+4294588738&4294967295,m=_+(p<<4&4294967295|p>>>28),p=A+(m^_^E)+y[8]+2272392833&4294967295,A=m+(p<<11&4294967295|p>>>21),p=E+(A^m^_)+y[11]+1839030562&4294967295,E=A+(p<<16&4294967295|p>>>16),p=_+(E^A^m)+y[14]+4259657740&4294967295,_=E+(p<<23&4294967295|p>>>9),p=m+(_^E^A)+y[1]+2763975236&4294967295,m=_+(p<<4&4294967295|p>>>28),p=A+(m^_^E)+y[4]+1272893353&4294967295,A=m+(p<<11&4294967295|p>>>21),p=E+(A^m^_)+y[7]+4139469664&4294967295,E=A+(p<<16&4294967295|p>>>16),p=_+(E^A^m)+y[10]+3200236656&4294967295,_=E+(p<<23&4294967295|p>>>9),p=m+(_^E^A)+y[13]+681279174&4294967295,m=_+(p<<4&4294967295|p>>>28),p=A+(m^_^E)+y[0]+3936430074&4294967295,A=m+(p<<11&4294967295|p>>>21),p=E+(A^m^_)+y[3]+3572445317&4294967295,E=A+(p<<16&4294967295|p>>>16),p=_+(E^A^m)+y[6]+76029189&4294967295,_=E+(p<<23&4294967295|p>>>9),p=m+(_^E^A)+y[9]+3654602809&4294967295,m=_+(p<<4&4294967295|p>>>28),p=A+(m^_^E)+y[12]+3873151461&4294967295,A=m+(p<<11&4294967295|p>>>21),p=E+(A^m^_)+y[15]+530742520&4294967295,E=A+(p<<16&4294967295|p>>>16),p=_+(E^A^m)+y[2]+3299628645&4294967295,_=E+(p<<23&4294967295|p>>>9),p=m+(E^(_|~A))+y[0]+4096336452&4294967295,m=_+(p<<6&4294967295|p>>>26),p=A+(_^(m|~E))+y[7]+1126891415&4294967295,A=m+(p<<10&4294967295|p>>>22),p=E+(m^(A|~_))+y[14]+2878612391&4294967295,E=A+(p<<15&4294967295|p>>>17),p=_+(A^(E|~m))+y[5]+4237533241&4294967295,_=E+(p<<21&4294967295|p>>>11),p=m+(E^(_|~A))+y[12]+1700485571&4294967295,m=_+(p<<6&4294967295|p>>>26),p=A+(_^(m|~E))+y[3]+2399980690&4294967295,A=m+(p<<10&4294967295|p>>>22),p=E+(m^(A|~_))+y[10]+4293915773&4294967295,E=A+(p<<15&4294967295|p>>>17),p=_+(A^(E|~m))+y[1]+2240044497&4294967295,_=E+(p<<21&4294967295|p>>>11),p=m+(E^(_|~A))+y[8]+1873313359&4294967295,m=_+(p<<6&4294967295|p>>>26),p=A+(_^(m|~E))+y[15]+4264355552&4294967295,A=m+(p<<10&4294967295|p>>>22),p=E+(m^(A|~_))+y[6]+2734768916&4294967295,E=A+(p<<15&4294967295|p>>>17),p=_+(A^(E|~m))+y[13]+1309151649&4294967295,_=E+(p<<21&4294967295|p>>>11),p=m+(E^(_|~A))+y[4]+4149444226&4294967295,m=_+(p<<6&4294967295|p>>>26),p=A+(_^(m|~E))+y[11]+3174756917&4294967295,A=m+(p<<10&4294967295|p>>>22),p=E+(m^(A|~_))+y[2]+718787259&4294967295,E=A+(p<<15&4294967295|p>>>17),p=_+(A^(E|~m))+y[9]+3951481745&4294967295,T.g[0]=T.g[0]+m&4294967295,T.g[1]=T.g[1]+(E+(p<<21&4294967295|p>>>11))&4294967295,T.g[2]=T.g[2]+E&4294967295,T.g[3]=T.g[3]+A&4294967295}n.prototype.u=function(T,m){m===void 0&&(m=T.length);for(var _=m-this.blockSize,y=this.B,E=this.h,A=0;A<m;){if(E==0)for(;A<=_;)i(this,T,A),A+=this.blockSize;if(typeof T=="string"){for(;A<m;)if(y[E++]=T.charCodeAt(A++),E==this.blockSize){i(this,y),E=0;break}}else for(;A<m;)if(y[E++]=T[A++],E==this.blockSize){i(this,y),E=0;break}}this.h=E,this.o+=m},n.prototype.v=function(){var T=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);T[0]=128;for(var m=1;m<T.length-8;++m)T[m]=0;var _=8*this.o;for(m=T.length-8;m<T.length;++m)T[m]=_&255,_/=256;for(this.u(T),T=Array(16),m=_=0;4>m;++m)for(var y=0;32>y;y+=8)T[_++]=this.g[m]>>>y&255;return T};function o(T,m){var _=h;return Object.prototype.hasOwnProperty.call(_,T)?_[T]:_[T]=m(T)}function u(T,m){this.h=m;for(var _=[],y=!0,E=T.length-1;0<=E;E--){var A=T[E]|0;y&&A==m||(_[E]=A,y=!1)}this.g=_}var h={};function d(T){return-128<=T&&128>T?o(T,function(m){return new u([m|0],0>m?-1:0)}):new u([T|0],0>T?-1:0)}function f(T){if(isNaN(T)||!isFinite(T))return I;if(0>T)return k(f(-T));for(var m=[],_=1,y=0;T>=_;y++)m[y]=T/_|0,_*=4294967296;return new u(m,0)}function g(T,m){if(T.length==0)throw Error("number format error: empty string");if(m=m||10,2>m||36<m)throw Error("radix out of range: "+m);if(T.charAt(0)=="-")return k(g(T.substring(1),m));if(0<=T.indexOf("-"))throw Error('number format error: interior "-" character');for(var _=f(Math.pow(m,8)),y=I,E=0;E<T.length;E+=8){var A=Math.min(8,T.length-E),p=parseInt(T.substring(E,E+A),m);8>A?(A=f(Math.pow(m,A)),y=y.j(A).add(f(p))):(y=y.j(_),y=y.add(f(p)))}return y}var I=d(0),R=d(1),S=d(16777216);r=u.prototype,r.m=function(){if(O(this))return-k(this).m();for(var T=0,m=1,_=0;_<this.g.length;_++){var y=this.i(_);T+=(0<=y?y:4294967296+y)*m,m*=4294967296}return T},r.toString=function(T){if(T=T||10,2>T||36<T)throw Error("radix out of range: "+T);if(N(this))return"0";if(O(this))return"-"+k(this).toString(T);for(var m=f(Math.pow(T,6)),_=this,y="";;){var E=it(_,m).g;_=W(_,E.j(m));var A=((0<_.g.length?_.g[0]:_.h)>>>0).toString(T);if(_=E,N(_))return A+y;for(;6>A.length;)A="0"+A;y=A+y}},r.i=function(T){return 0>T?0:T<this.g.length?this.g[T]:this.h};function N(T){if(T.h!=0)return!1;for(var m=0;m<T.g.length;m++)if(T.g[m]!=0)return!1;return!0}function O(T){return T.h==-1}r.l=function(T){return T=W(this,T),O(T)?-1:N(T)?0:1};function k(T){for(var m=T.g.length,_=[],y=0;y<m;y++)_[y]=~T.g[y];return new u(_,~T.h).add(R)}r.abs=function(){return O(this)?k(this):this},r.add=function(T){for(var m=Math.max(this.g.length,T.g.length),_=[],y=0,E=0;E<=m;E++){var A=y+(this.i(E)&65535)+(T.i(E)&65535),p=(A>>>16)+(this.i(E)>>>16)+(T.i(E)>>>16);y=p>>>16,A&=65535,p&=65535,_[E]=p<<16|A}return new u(_,_[_.length-1]&-2147483648?-1:0)};function W(T,m){return T.add(k(m))}r.j=function(T){if(N(this)||N(T))return I;if(O(this))return O(T)?k(this).j(k(T)):k(k(this).j(T));if(O(T))return k(this.j(k(T)));if(0>this.l(S)&&0>T.l(S))return f(this.m()*T.m());for(var m=this.g.length+T.g.length,_=[],y=0;y<2*m;y++)_[y]=0;for(y=0;y<this.g.length;y++)for(var E=0;E<T.g.length;E++){var A=this.i(y)>>>16,p=this.i(y)&65535,kt=T.i(E)>>>16,xe=T.i(E)&65535;_[2*y+2*E]+=p*xe,$(_,2*y+2*E),_[2*y+2*E+1]+=A*xe,$(_,2*y+2*E+1),_[2*y+2*E+1]+=p*kt,$(_,2*y+2*E+1),_[2*y+2*E+2]+=A*kt,$(_,2*y+2*E+2)}for(y=0;y<m;y++)_[y]=_[2*y+1]<<16|_[2*y];for(y=m;y<2*m;y++)_[y]=0;return new u(_,0)};function $(T,m){for(;(T[m]&65535)!=T[m];)T[m+1]+=T[m]>>>16,T[m]&=65535,m++}function Q(T,m){this.g=T,this.h=m}function it(T,m){if(N(m))throw Error("division by zero");if(N(T))return new Q(I,I);if(O(T))return m=it(k(T),m),new Q(k(m.g),k(m.h));if(O(m))return m=it(T,k(m)),new Q(k(m.g),m.h);if(30<T.g.length){if(O(T)||O(m))throw Error("slowDivide_ only works with positive integers.");for(var _=R,y=m;0>=y.l(T);)_=Nt(_),y=Nt(y);var E=at(_,1),A=at(y,1);for(y=at(y,2),_=at(_,2);!N(y);){var p=A.add(y);0>=p.l(T)&&(E=E.add(_),A=p),y=at(y,1),_=at(_,1)}return m=W(T,E.j(m)),new Q(E,m)}for(E=I;0<=T.l(m);){for(_=Math.max(1,Math.floor(T.m()/m.m())),y=Math.ceil(Math.log(_)/Math.LN2),y=48>=y?1:Math.pow(2,y-48),A=f(_),p=A.j(m);O(p)||0<p.l(T);)_-=y,A=f(_),p=A.j(m);N(A)&&(A=R),E=E.add(A),T=W(T,p)}return new Q(E,T)}r.A=function(T){return it(this,T).h},r.and=function(T){for(var m=Math.max(this.g.length,T.g.length),_=[],y=0;y<m;y++)_[y]=this.i(y)&T.i(y);return new u(_,this.h&T.h)},r.or=function(T){for(var m=Math.max(this.g.length,T.g.length),_=[],y=0;y<m;y++)_[y]=this.i(y)|T.i(y);return new u(_,this.h|T.h)},r.xor=function(T){for(var m=Math.max(this.g.length,T.g.length),_=[],y=0;y<m;y++)_[y]=this.i(y)^T.i(y);return new u(_,this.h^T.h)};function Nt(T){for(var m=T.g.length+1,_=[],y=0;y<m;y++)_[y]=T.i(y)<<1|T.i(y-1)>>>31;return new u(_,T.h)}function at(T,m){var _=m>>5;m%=32;for(var y=T.g.length-_,E=[],A=0;A<y;A++)E[A]=0<m?T.i(A+_)>>>m|T.i(A+_+1)<<32-m:T.i(A+_);return new u(E,T.h)}n.prototype.digest=n.prototype.v,n.prototype.reset=n.prototype.s,n.prototype.update=n.prototype.u,Ho=n,u.prototype.add=u.prototype.add,u.prototype.multiply=u.prototype.j,u.prototype.modulo=u.prototype.A,u.prototype.compare=u.prototype.l,u.prototype.toNumber=u.prototype.m,u.prototype.toString=u.prototype.toString,u.prototype.getBits=u.prototype.i,u.fromNumber=f,u.fromString=g,$t=u}).apply(typeof $i<"u"?$i:typeof self<"u"?self:typeof window<"u"?window:{});var On=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Wo,Ye,Xo,qn,Gr,Yo,Jo,Zo;(function(){var r,t=typeof Object.defineProperties=="function"?Object.defineProperty:function(s,a,l){return s==Array.prototype||s==Object.prototype||(s[a]=l.value),s};function e(s){s=[typeof globalThis=="object"&&globalThis,s,typeof window=="object"&&window,typeof self=="object"&&self,typeof On=="object"&&On];for(var a=0;a<s.length;++a){var l=s[a];if(l&&l.Math==Math)return l}throw Error("Cannot find global object")}var n=e(this);function i(s,a){if(a)t:{var l=n;s=s.split(".");for(var c=0;c<s.length-1;c++){var v=s[c];if(!(v in l))break t;l=l[v]}s=s[s.length-1],c=l[s],a=a(c),a!=c&&a!=null&&t(l,s,{configurable:!0,writable:!0,value:a})}}function o(s,a){s instanceof String&&(s+="");var l=0,c=!1,v={next:function(){if(!c&&l<s.length){var w=l++;return{value:a(w,s[w]),done:!1}}return c=!0,{done:!0,value:void 0}}};return v[Symbol.iterator]=function(){return v},v}i("Array.prototype.values",function(s){return s||function(){return o(this,function(a,l){return l})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var u=u||{},h=this||self;function d(s){var a=typeof s;return a=a!="object"?a:s?Array.isArray(s)?"array":a:"null",a=="array"||a=="object"&&typeof s.length=="number"}function f(s){var a=typeof s;return a=="object"&&s!=null||a=="function"}function g(s,a,l){return s.call.apply(s.bind,arguments)}function I(s,a,l){if(!s)throw Error();if(2<arguments.length){var c=Array.prototype.slice.call(arguments,2);return function(){var v=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(v,c),s.apply(a,v)}}return function(){return s.apply(a,arguments)}}function R(s,a,l){return R=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?g:I,R.apply(null,arguments)}function S(s,a){var l=Array.prototype.slice.call(arguments,1);return function(){var c=l.slice();return c.push.apply(c,arguments),s.apply(this,c)}}function N(s,a){function l(){}l.prototype=a.prototype,s.aa=a.prototype,s.prototype=new l,s.prototype.constructor=s,s.Qb=function(c,v,w){for(var C=Array(arguments.length-2),z=2;z<arguments.length;z++)C[z-2]=arguments[z];return a.prototype[v].apply(c,C)}}function O(s){const a=s.length;if(0<a){const l=Array(a);for(let c=0;c<a;c++)l[c]=s[c];return l}return[]}function k(s,a){for(let l=1;l<arguments.length;l++){const c=arguments[l];if(d(c)){const v=s.length||0,w=c.length||0;s.length=v+w;for(let C=0;C<w;C++)s[v+C]=c[C]}else s.push(c)}}class W{constructor(a,l){this.i=a,this.j=l,this.h=0,this.g=null}get(){let a;return 0<this.h?(this.h--,a=this.g,this.g=a.next,a.next=null):a=this.i(),a}}function $(s){return/^[\s\xa0]*$/.test(s)}function Q(){var s=h.navigator;return s&&(s=s.userAgent)?s:""}function it(s){return it[" "](s),s}it[" "]=function(){};var Nt=Q().indexOf("Gecko")!=-1&&!(Q().toLowerCase().indexOf("webkit")!=-1&&Q().indexOf("Edge")==-1)&&!(Q().indexOf("Trident")!=-1||Q().indexOf("MSIE")!=-1)&&Q().indexOf("Edge")==-1;function at(s,a,l){for(const c in s)a.call(l,s[c],c,s)}function T(s,a){for(const l in s)a.call(void 0,s[l],l,s)}function m(s){const a={};for(const l in s)a[l]=s[l];return a}const _="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function y(s,a){let l,c;for(let v=1;v<arguments.length;v++){c=arguments[v];for(l in c)s[l]=c[l];for(let w=0;w<_.length;w++)l=_[w],Object.prototype.hasOwnProperty.call(c,l)&&(s[l]=c[l])}}function E(s){var a=1;s=s.split(":");const l=[];for(;0<a&&s.length;)l.push(s.shift()),a--;return s.length&&l.push(s.join(":")),l}function A(s){h.setTimeout(()=>{throw s},0)}function p(){var s=gr;let a=null;return s.g&&(a=s.g,s.g=s.g.next,s.g||(s.h=null),a.next=null),a}class kt{constructor(){this.h=this.g=null}add(a,l){const c=xe.get();c.set(a,l),this.h?this.h.next=c:this.g=c,this.h=c}}var xe=new W(()=>new pu,s=>s.reset());class pu{constructor(){this.next=this.g=this.h=null}set(a,l){this.h=a,this.g=l,this.next=null}reset(){this.next=this.g=this.h=null}}let Oe,Le=!1,gr=new kt,zs=()=>{const s=h.Promise.resolve(void 0);Oe=()=>{s.then(gu)}};var gu=()=>{for(var s;s=p();){try{s.h.call(s.g)}catch(l){A(l)}var a=xe;a.j(s),100>a.h&&(a.h++,s.next=a.g,a.g=s)}Le=!1};function Ft(){this.s=this.s,this.C=this.C}Ft.prototype.s=!1,Ft.prototype.ma=function(){this.s||(this.s=!0,this.N())},Ft.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function ct(s,a){this.type=s,this.g=this.target=a,this.defaultPrevented=!1}ct.prototype.h=function(){this.defaultPrevented=!0};var _u=(function(){if(!h.addEventListener||!Object.defineProperty)return!1;var s=!1,a=Object.defineProperty({},"passive",{get:function(){s=!0}});try{const l=()=>{};h.addEventListener("test",l,a),h.removeEventListener("test",l,a)}catch{}return s})();function Me(s,a){if(ct.call(this,s?s.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,s){var l=this.type=s.type,c=s.changedTouches&&s.changedTouches.length?s.changedTouches[0]:null;if(this.target=s.target||s.srcElement,this.g=a,a=s.relatedTarget){if(Nt){t:{try{it(a.nodeName);var v=!0;break t}catch{}v=!1}v||(a=null)}}else l=="mouseover"?a=s.fromElement:l=="mouseout"&&(a=s.toElement);this.relatedTarget=a,c?(this.clientX=c.clientX!==void 0?c.clientX:c.pageX,this.clientY=c.clientY!==void 0?c.clientY:c.pageY,this.screenX=c.screenX||0,this.screenY=c.screenY||0):(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0),this.button=s.button,this.key=s.key||"",this.ctrlKey=s.ctrlKey,this.altKey=s.altKey,this.shiftKey=s.shiftKey,this.metaKey=s.metaKey,this.pointerId=s.pointerId||0,this.pointerType=typeof s.pointerType=="string"?s.pointerType:yu[s.pointerType]||"",this.state=s.state,this.i=s,s.defaultPrevented&&Me.aa.h.call(this)}}N(Me,ct);var yu={2:"touch",3:"pen",4:"mouse"};Me.prototype.h=function(){Me.aa.h.call(this);var s=this.i;s.preventDefault?s.preventDefault():s.returnValue=!1};var gn="closure_listenable_"+(1e6*Math.random()|0),Eu=0;function Tu(s,a,l,c,v){this.listener=s,this.proxy=null,this.src=a,this.type=l,this.capture=!!c,this.ha=v,this.key=++Eu,this.da=this.fa=!1}function _n(s){s.da=!0,s.listener=null,s.proxy=null,s.src=null,s.ha=null}function yn(s){this.src=s,this.g={},this.h=0}yn.prototype.add=function(s,a,l,c,v){var w=s.toString();s=this.g[w],s||(s=this.g[w]=[],this.h++);var C=yr(s,a,c,v);return-1<C?(a=s[C],l||(a.fa=!1)):(a=new Tu(a,this.src,w,!!c,v),a.fa=l,s.push(a)),a};function _r(s,a){var l=a.type;if(l in s.g){var c=s.g[l],v=Array.prototype.indexOf.call(c,a,void 0),w;(w=0<=v)&&Array.prototype.splice.call(c,v,1),w&&(_n(a),s.g[l].length==0&&(delete s.g[l],s.h--))}}function yr(s,a,l,c){for(var v=0;v<s.length;++v){var w=s[v];if(!w.da&&w.listener==a&&w.capture==!!l&&w.ha==c)return v}return-1}var Er="closure_lm_"+(1e6*Math.random()|0),Tr={};function $s(s,a,l,c,v){if(Array.isArray(a)){for(var w=0;w<a.length;w++)$s(s,a[w],l,c,v);return null}return l=Qs(l),s&&s[gn]?s.K(a,l,f(c)?!!c.capture:!1,v):vu(s,a,l,!1,c,v)}function vu(s,a,l,c,v,w){if(!a)throw Error("Invalid event type");var C=f(v)?!!v.capture:!!v,z=Ir(s);if(z||(s[Er]=z=new yn(s)),l=z.add(a,l,c,C,w),l.proxy)return l;if(c=Iu(),l.proxy=c,c.src=s,c.listener=l,s.addEventListener)_u||(v=C),v===void 0&&(v=!1),s.addEventListener(a.toString(),c,v);else if(s.attachEvent)s.attachEvent(Ks(a.toString()),c);else if(s.addListener&&s.removeListener)s.addListener(c);else throw Error("addEventListener and attachEvent are unavailable.");return l}function Iu(){function s(l){return a.call(s.src,s.listener,l)}const a=Au;return s}function Gs(s,a,l,c,v){if(Array.isArray(a))for(var w=0;w<a.length;w++)Gs(s,a[w],l,c,v);else c=f(c)?!!c.capture:!!c,l=Qs(l),s&&s[gn]?(s=s.i,a=String(a).toString(),a in s.g&&(w=s.g[a],l=yr(w,l,c,v),-1<l&&(_n(w[l]),Array.prototype.splice.call(w,l,1),w.length==0&&(delete s.g[a],s.h--)))):s&&(s=Ir(s))&&(a=s.g[a.toString()],s=-1,a&&(s=yr(a,l,c,v)),(l=-1<s?a[s]:null)&&vr(l))}function vr(s){if(typeof s!="number"&&s&&!s.da){var a=s.src;if(a&&a[gn])_r(a.i,s);else{var l=s.type,c=s.proxy;a.removeEventListener?a.removeEventListener(l,c,s.capture):a.detachEvent?a.detachEvent(Ks(l),c):a.addListener&&a.removeListener&&a.removeListener(c),(l=Ir(a))?(_r(l,s),l.h==0&&(l.src=null,a[Er]=null)):_n(s)}}}function Ks(s){return s in Tr?Tr[s]:Tr[s]="on"+s}function Au(s,a){if(s.da)s=!0;else{a=new Me(a,this);var l=s.listener,c=s.ha||s.src;s.fa&&vr(s),s=l.call(c,a)}return s}function Ir(s){return s=s[Er],s instanceof yn?s:null}var Ar="__closure_events_fn_"+(1e9*Math.random()>>>0);function Qs(s){return typeof s=="function"?s:(s[Ar]||(s[Ar]=function(a){return s.handleEvent(a)}),s[Ar])}function dt(){Ft.call(this),this.i=new yn(this),this.M=this,this.F=null}N(dt,Ft),dt.prototype[gn]=!0,dt.prototype.removeEventListener=function(s,a,l,c){Gs(this,s,a,l,c)};function Et(s,a){var l,c=s.F;if(c)for(l=[];c;c=c.F)l.push(c);if(s=s.M,c=a.type||a,typeof a=="string")a=new ct(a,s);else if(a instanceof ct)a.target=a.target||s;else{var v=a;a=new ct(c,s),y(a,v)}if(v=!0,l)for(var w=l.length-1;0<=w;w--){var C=a.g=l[w];v=En(C,c,!0,a)&&v}if(C=a.g=s,v=En(C,c,!0,a)&&v,v=En(C,c,!1,a)&&v,l)for(w=0;w<l.length;w++)C=a.g=l[w],v=En(C,c,!1,a)&&v}dt.prototype.N=function(){if(dt.aa.N.call(this),this.i){var s=this.i,a;for(a in s.g){for(var l=s.g[a],c=0;c<l.length;c++)_n(l[c]);delete s.g[a],s.h--}}this.F=null},dt.prototype.K=function(s,a,l,c){return this.i.add(String(s),a,!1,l,c)},dt.prototype.L=function(s,a,l,c){return this.i.add(String(s),a,!0,l,c)};function En(s,a,l,c){if(a=s.i.g[String(a)],!a)return!0;a=a.concat();for(var v=!0,w=0;w<a.length;++w){var C=a[w];if(C&&!C.da&&C.capture==l){var z=C.listener,ut=C.ha||C.src;C.fa&&_r(s.i,C),v=z.call(ut,c)!==!1&&v}}return v&&!c.defaultPrevented}function Hs(s,a,l){if(typeof s=="function")l&&(s=R(s,l));else if(s&&typeof s.handleEvent=="function")s=R(s.handleEvent,s);else throw Error("Invalid listener argument");return 2147483647<Number(a)?-1:h.setTimeout(s,a||0)}function Ws(s){s.g=Hs(()=>{s.g=null,s.i&&(s.i=!1,Ws(s))},s.l);const a=s.h;s.h=null,s.m.apply(null,a)}class wu extends Ft{constructor(a,l){super(),this.m=a,this.l=l,this.h=null,this.i=!1,this.g=null}j(a){this.h=arguments,this.g?this.i=!0:Ws(this)}N(){super.N(),this.g&&(h.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Fe(s){Ft.call(this),this.h=s,this.g={}}N(Fe,Ft);var Xs=[];function Ys(s){at(s.g,function(a,l){this.g.hasOwnProperty(l)&&vr(a)},s),s.g={}}Fe.prototype.N=function(){Fe.aa.N.call(this),Ys(this)},Fe.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var wr=h.JSON.stringify,Ru=h.JSON.parse,Vu=class{stringify(s){return h.JSON.stringify(s,void 0)}parse(s){return h.JSON.parse(s,void 0)}};function Rr(){}Rr.prototype.h=null;function Js(s){return s.h||(s.h=s.i())}function Zs(){}var Ue={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Vr(){ct.call(this,"d")}N(Vr,ct);function Pr(){ct.call(this,"c")}N(Pr,ct);var ne={},ti=null;function Tn(){return ti=ti||new dt}ne.La="serverreachability";function ei(s){ct.call(this,ne.La,s)}N(ei,ct);function qe(s){const a=Tn();Et(a,new ei(a))}ne.STAT_EVENT="statevent";function ni(s,a){ct.call(this,ne.STAT_EVENT,s),this.stat=a}N(ni,ct);function Tt(s){const a=Tn();Et(a,new ni(a,s))}ne.Ma="timingevent";function ri(s,a){ct.call(this,ne.Ma,s),this.size=a}N(ri,ct);function je(s,a){if(typeof s!="function")throw Error("Fn must not be null and must be a function");return h.setTimeout(function(){s()},a)}function Be(){this.g=!0}Be.prototype.xa=function(){this.g=!1};function Pu(s,a,l,c,v,w){s.info(function(){if(s.g)if(w)for(var C="",z=w.split("&"),ut=0;ut<z.length;ut++){var B=z[ut].split("=");if(1<B.length){var ft=B[0];B=B[1];var mt=ft.split("_");C=2<=mt.length&&mt[1]=="type"?C+(ft+"="+B+"&"):C+(ft+"=redacted&")}}else C=null;else C=w;return"XMLHTTP REQ ("+c+") [attempt "+v+"]: "+a+`
`+l+`
`+C})}function Su(s,a,l,c,v,w,C){s.info(function(){return"XMLHTTP RESP ("+c+") [ attempt "+v+"]: "+a+`
`+l+`
`+w+" "+C})}function de(s,a,l,c){s.info(function(){return"XMLHTTP TEXT ("+a+"): "+bu(s,l)+(c?" "+c:"")})}function Cu(s,a){s.info(function(){return"TIMEOUT: "+a})}Be.prototype.info=function(){};function bu(s,a){if(!s.g)return a;if(!a)return null;try{var l=JSON.parse(a);if(l){for(s=0;s<l.length;s++)if(Array.isArray(l[s])){var c=l[s];if(!(2>c.length)){var v=c[1];if(Array.isArray(v)&&!(1>v.length)){var w=v[0];if(w!="noop"&&w!="stop"&&w!="close")for(var C=1;C<v.length;C++)v[C]=""}}}}return wr(l)}catch{return a}}var vn={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},si={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Sr;function In(){}N(In,Rr),In.prototype.g=function(){return new XMLHttpRequest},In.prototype.i=function(){return{}},Sr=new In;function Ut(s,a,l,c){this.j=s,this.i=a,this.l=l,this.R=c||1,this.U=new Fe(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new ii}function ii(){this.i=null,this.g="",this.h=!1}var oi={},Cr={};function br(s,a,l){s.L=1,s.v=Vn(xt(a)),s.m=l,s.P=!0,ai(s,null)}function ai(s,a){s.F=Date.now(),An(s),s.A=xt(s.v);var l=s.A,c=s.R;Array.isArray(c)||(c=[String(c)]),vi(l.i,"t",c),s.C=0,l=s.j.J,s.h=new ii,s.g=Ui(s.j,l?a:null,!s.m),0<s.O&&(s.M=new wu(R(s.Y,s,s.g),s.O)),a=s.U,l=s.g,c=s.ca;var v="readystatechange";Array.isArray(v)||(v&&(Xs[0]=v.toString()),v=Xs);for(var w=0;w<v.length;w++){var C=$s(l,v[w],c||a.handleEvent,!1,a.h||a);if(!C)break;a.g[C.key]=C}a=s.H?m(s.H):{},s.m?(s.u||(s.u="POST"),a["Content-Type"]="application/x-www-form-urlencoded",s.g.ea(s.A,s.u,s.m,a)):(s.u="GET",s.g.ea(s.A,s.u,null,a)),qe(),Pu(s.i,s.u,s.A,s.l,s.R,s.m)}Ut.prototype.ca=function(s){s=s.target;const a=this.M;a&&Ot(s)==3?a.j():this.Y(s)},Ut.prototype.Y=function(s){try{if(s==this.g)t:{const mt=Ot(this.g);var a=this.g.Ba();const pe=this.g.Z();if(!(3>mt)&&(mt!=3||this.g&&(this.h.h||this.g.oa()||Si(this.g)))){this.J||mt!=4||a==7||(a==8||0>=pe?qe(3):qe(2)),Dr(this);var l=this.g.Z();this.X=l;e:if(ui(this)){var c=Si(this.g);s="";var v=c.length,w=Ot(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){re(this),ze(this);var C="";break e}this.h.i=new h.TextDecoder}for(a=0;a<v;a++)this.h.h=!0,s+=this.h.i.decode(c[a],{stream:!(w&&a==v-1)});c.length=0,this.h.g+=s,this.C=0,C=this.h.g}else C=this.g.oa();if(this.o=l==200,Su(this.i,this.u,this.A,this.l,this.R,mt,l),this.o){if(this.T&&!this.K){e:{if(this.g){var z,ut=this.g;if((z=ut.g?ut.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!$(z)){var B=z;break e}}B=null}if(l=B)de(this.i,this.l,l,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Nr(this,l);else{this.o=!1,this.s=3,Tt(12),re(this),ze(this);break t}}if(this.P){l=!0;let wt;for(;!this.J&&this.C<C.length;)if(wt=Du(this,C),wt==Cr){mt==4&&(this.s=4,Tt(14),l=!1),de(this.i,this.l,null,"[Incomplete Response]");break}else if(wt==oi){this.s=4,Tt(15),de(this.i,this.l,C,"[Invalid Chunk]"),l=!1;break}else de(this.i,this.l,wt,null),Nr(this,wt);if(ui(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),mt!=4||C.length!=0||this.h.h||(this.s=1,Tt(16),l=!1),this.o=this.o&&l,!l)de(this.i,this.l,C,"[Invalid Chunked Response]"),re(this),ze(this);else if(0<C.length&&!this.W){this.W=!0;var ft=this.j;ft.g==this&&ft.ba&&!ft.M&&(ft.j.info("Great, no buffering proxy detected. Bytes received: "+C.length),Fr(ft),ft.M=!0,Tt(11))}}else de(this.i,this.l,C,null),Nr(this,C);mt==4&&re(this),this.o&&!this.J&&(mt==4?Oi(this.j,this):(this.o=!1,An(this)))}else Hu(this.g),l==400&&0<C.indexOf("Unknown SID")?(this.s=3,Tt(12)):(this.s=0,Tt(13)),re(this),ze(this)}}}catch{}finally{}};function ui(s){return s.g?s.u=="GET"&&s.L!=2&&s.j.Ca:!1}function Du(s,a){var l=s.C,c=a.indexOf(`
`,l);return c==-1?Cr:(l=Number(a.substring(l,c)),isNaN(l)?oi:(c+=1,c+l>a.length?Cr:(a=a.slice(c,c+l),s.C=c+l,a)))}Ut.prototype.cancel=function(){this.J=!0,re(this)};function An(s){s.S=Date.now()+s.I,li(s,s.I)}function li(s,a){if(s.B!=null)throw Error("WatchDog timer not null");s.B=je(R(s.ba,s),a)}function Dr(s){s.B&&(h.clearTimeout(s.B),s.B=null)}Ut.prototype.ba=function(){this.B=null;const s=Date.now();0<=s-this.S?(Cu(this.i,this.A),this.L!=2&&(qe(),Tt(17)),re(this),this.s=2,ze(this)):li(this,this.S-s)};function ze(s){s.j.G==0||s.J||Oi(s.j,s)}function re(s){Dr(s);var a=s.M;a&&typeof a.ma=="function"&&a.ma(),s.M=null,Ys(s.U),s.g&&(a=s.g,s.g=null,a.abort(),a.ma())}function Nr(s,a){try{var l=s.j;if(l.G!=0&&(l.g==s||kr(l.h,s))){if(!s.K&&kr(l.h,s)&&l.G==3){try{var c=l.Da.g.parse(a)}catch{c=null}if(Array.isArray(c)&&c.length==3){var v=c;if(v[0]==0){t:if(!l.u){if(l.g)if(l.g.F+3e3<s.F)Nn(l),bn(l);else break t;Mr(l),Tt(18)}}else l.za=v[1],0<l.za-l.T&&37500>v[2]&&l.F&&l.v==0&&!l.C&&(l.C=je(R(l.Za,l),6e3));if(1>=di(l.h)&&l.ca){try{l.ca()}catch{}l.ca=void 0}}else ie(l,11)}else if((s.K||l.g==s)&&Nn(l),!$(a))for(v=l.Da.g.parse(a),a=0;a<v.length;a++){let B=v[a];if(l.T=B[0],B=B[1],l.G==2)if(B[0]=="c"){l.K=B[1],l.ia=B[2];const ft=B[3];ft!=null&&(l.la=ft,l.j.info("VER="+l.la));const mt=B[4];mt!=null&&(l.Aa=mt,l.j.info("SVER="+l.Aa));const pe=B[5];pe!=null&&typeof pe=="number"&&0<pe&&(c=1.5*pe,l.L=c,l.j.info("backChannelRequestTimeoutMs_="+c)),c=l;const wt=s.g;if(wt){const xn=wt.g?wt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(xn){var w=c.h;w.g||xn.indexOf("spdy")==-1&&xn.indexOf("quic")==-1&&xn.indexOf("h2")==-1||(w.j=w.l,w.g=new Set,w.h&&(xr(w,w.h),w.h=null))}if(c.D){const Ur=wt.g?wt.g.getResponseHeader("X-HTTP-Session-Id"):null;Ur&&(c.ya=Ur,K(c.I,c.D,Ur))}}l.G=3,l.l&&l.l.ua(),l.ba&&(l.R=Date.now()-s.F,l.j.info("Handshake RTT: "+l.R+"ms")),c=l;var C=s;if(c.qa=Fi(c,c.J?c.ia:null,c.W),C.K){fi(c.h,C);var z=C,ut=c.L;ut&&(z.I=ut),z.B&&(Dr(z),An(z)),c.g=C}else ki(c);0<l.i.length&&Dn(l)}else B[0]!="stop"&&B[0]!="close"||ie(l,7);else l.G==3&&(B[0]=="stop"||B[0]=="close"?B[0]=="stop"?ie(l,7):Lr(l):B[0]!="noop"&&l.l&&l.l.ta(B),l.v=0)}}qe(4)}catch{}}var Nu=class{constructor(s,a){this.g=s,this.map=a}};function hi(s){this.l=s||10,h.PerformanceNavigationTiming?(s=h.performance.getEntriesByType("navigation"),s=0<s.length&&(s[0].nextHopProtocol=="hq"||s[0].nextHopProtocol=="h2")):s=!!(h.chrome&&h.chrome.loadTimes&&h.chrome.loadTimes()&&h.chrome.loadTimes().wasFetchedViaSpdy),this.j=s?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function ci(s){return s.h?!0:s.g?s.g.size>=s.j:!1}function di(s){return s.h?1:s.g?s.g.size:0}function kr(s,a){return s.h?s.h==a:s.g?s.g.has(a):!1}function xr(s,a){s.g?s.g.add(a):s.h=a}function fi(s,a){s.h&&s.h==a?s.h=null:s.g&&s.g.has(a)&&s.g.delete(a)}hi.prototype.cancel=function(){if(this.i=mi(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const s of this.g.values())s.cancel();this.g.clear()}};function mi(s){if(s.h!=null)return s.i.concat(s.h.D);if(s.g!=null&&s.g.size!==0){let a=s.i;for(const l of s.g.values())a=a.concat(l.D);return a}return O(s.i)}function ku(s){if(s.V&&typeof s.V=="function")return s.V();if(typeof Map<"u"&&s instanceof Map||typeof Set<"u"&&s instanceof Set)return Array.from(s.values());if(typeof s=="string")return s.split("");if(d(s)){for(var a=[],l=s.length,c=0;c<l;c++)a.push(s[c]);return a}a=[],l=0;for(c in s)a[l++]=s[c];return a}function xu(s){if(s.na&&typeof s.na=="function")return s.na();if(!s.V||typeof s.V!="function"){if(typeof Map<"u"&&s instanceof Map)return Array.from(s.keys());if(!(typeof Set<"u"&&s instanceof Set)){if(d(s)||typeof s=="string"){var a=[];s=s.length;for(var l=0;l<s;l++)a.push(l);return a}a=[],l=0;for(const c in s)a[l++]=c;return a}}}function pi(s,a){if(s.forEach&&typeof s.forEach=="function")s.forEach(a,void 0);else if(d(s)||typeof s=="string")Array.prototype.forEach.call(s,a,void 0);else for(var l=xu(s),c=ku(s),v=c.length,w=0;w<v;w++)a.call(void 0,c[w],l&&l[w],s)}var gi=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Ou(s,a){if(s){s=s.split("&");for(var l=0;l<s.length;l++){var c=s[l].indexOf("="),v=null;if(0<=c){var w=s[l].substring(0,c);v=s[l].substring(c+1)}else w=s[l];a(w,v?decodeURIComponent(v.replace(/\+/g," ")):"")}}}function se(s){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,s instanceof se){this.h=s.h,wn(this,s.j),this.o=s.o,this.g=s.g,Rn(this,s.s),this.l=s.l;var a=s.i,l=new Ke;l.i=a.i,a.g&&(l.g=new Map(a.g),l.h=a.h),_i(this,l),this.m=s.m}else s&&(a=String(s).match(gi))?(this.h=!1,wn(this,a[1]||"",!0),this.o=$e(a[2]||""),this.g=$e(a[3]||"",!0),Rn(this,a[4]),this.l=$e(a[5]||"",!0),_i(this,a[6]||"",!0),this.m=$e(a[7]||"")):(this.h=!1,this.i=new Ke(null,this.h))}se.prototype.toString=function(){var s=[],a=this.j;a&&s.push(Ge(a,yi,!0),":");var l=this.g;return(l||a=="file")&&(s.push("//"),(a=this.o)&&s.push(Ge(a,yi,!0),"@"),s.push(encodeURIComponent(String(l)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),l=this.s,l!=null&&s.push(":",String(l))),(l=this.l)&&(this.g&&l.charAt(0)!="/"&&s.push("/"),s.push(Ge(l,l.charAt(0)=="/"?Fu:Mu,!0))),(l=this.i.toString())&&s.push("?",l),(l=this.m)&&s.push("#",Ge(l,qu)),s.join("")};function xt(s){return new se(s)}function wn(s,a,l){s.j=l?$e(a,!0):a,s.j&&(s.j=s.j.replace(/:$/,""))}function Rn(s,a){if(a){if(a=Number(a),isNaN(a)||0>a)throw Error("Bad port number "+a);s.s=a}else s.s=null}function _i(s,a,l){a instanceof Ke?(s.i=a,ju(s.i,s.h)):(l||(a=Ge(a,Uu)),s.i=new Ke(a,s.h))}function K(s,a,l){s.i.set(a,l)}function Vn(s){return K(s,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),s}function $e(s,a){return s?a?decodeURI(s.replace(/%25/g,"%2525")):decodeURIComponent(s):""}function Ge(s,a,l){return typeof s=="string"?(s=encodeURI(s).replace(a,Lu),l&&(s=s.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),s):null}function Lu(s){return s=s.charCodeAt(0),"%"+(s>>4&15).toString(16)+(s&15).toString(16)}var yi=/[#\/\?@]/g,Mu=/[#\?:]/g,Fu=/[#\?]/g,Uu=/[#\?@]/g,qu=/#/g;function Ke(s,a){this.h=this.g=null,this.i=s||null,this.j=!!a}function qt(s){s.g||(s.g=new Map,s.h=0,s.i&&Ou(s.i,function(a,l){s.add(decodeURIComponent(a.replace(/\+/g," ")),l)}))}r=Ke.prototype,r.add=function(s,a){qt(this),this.i=null,s=fe(this,s);var l=this.g.get(s);return l||this.g.set(s,l=[]),l.push(a),this.h+=1,this};function Ei(s,a){qt(s),a=fe(s,a),s.g.has(a)&&(s.i=null,s.h-=s.g.get(a).length,s.g.delete(a))}function Ti(s,a){return qt(s),a=fe(s,a),s.g.has(a)}r.forEach=function(s,a){qt(this),this.g.forEach(function(l,c){l.forEach(function(v){s.call(a,v,c,this)},this)},this)},r.na=function(){qt(this);const s=Array.from(this.g.values()),a=Array.from(this.g.keys()),l=[];for(let c=0;c<a.length;c++){const v=s[c];for(let w=0;w<v.length;w++)l.push(a[c])}return l},r.V=function(s){qt(this);let a=[];if(typeof s=="string")Ti(this,s)&&(a=a.concat(this.g.get(fe(this,s))));else{s=Array.from(this.g.values());for(let l=0;l<s.length;l++)a=a.concat(s[l])}return a},r.set=function(s,a){return qt(this),this.i=null,s=fe(this,s),Ti(this,s)&&(this.h-=this.g.get(s).length),this.g.set(s,[a]),this.h+=1,this},r.get=function(s,a){return s?(s=this.V(s),0<s.length?String(s[0]):a):a};function vi(s,a,l){Ei(s,a),0<l.length&&(s.i=null,s.g.set(fe(s,a),O(l)),s.h+=l.length)}r.toString=function(){if(this.i)return this.i;if(!this.g)return"";const s=[],a=Array.from(this.g.keys());for(var l=0;l<a.length;l++){var c=a[l];const w=encodeURIComponent(String(c)),C=this.V(c);for(c=0;c<C.length;c++){var v=w;C[c]!==""&&(v+="="+encodeURIComponent(String(C[c]))),s.push(v)}}return this.i=s.join("&")};function fe(s,a){return a=String(a),s.j&&(a=a.toLowerCase()),a}function ju(s,a){a&&!s.j&&(qt(s),s.i=null,s.g.forEach(function(l,c){var v=c.toLowerCase();c!=v&&(Ei(this,c),vi(this,v,l))},s)),s.j=a}function Bu(s,a){const l=new Be;if(h.Image){const c=new Image;c.onload=S(jt,l,"TestLoadImage: loaded",!0,a,c),c.onerror=S(jt,l,"TestLoadImage: error",!1,a,c),c.onabort=S(jt,l,"TestLoadImage: abort",!1,a,c),c.ontimeout=S(jt,l,"TestLoadImage: timeout",!1,a,c),h.setTimeout(function(){c.ontimeout&&c.ontimeout()},1e4),c.src=s}else a(!1)}function zu(s,a){const l=new Be,c=new AbortController,v=setTimeout(()=>{c.abort(),jt(l,"TestPingServer: timeout",!1,a)},1e4);fetch(s,{signal:c.signal}).then(w=>{clearTimeout(v),w.ok?jt(l,"TestPingServer: ok",!0,a):jt(l,"TestPingServer: server error",!1,a)}).catch(()=>{clearTimeout(v),jt(l,"TestPingServer: error",!1,a)})}function jt(s,a,l,c,v){try{v&&(v.onload=null,v.onerror=null,v.onabort=null,v.ontimeout=null),c(l)}catch{}}function $u(){this.g=new Vu}function Gu(s,a,l){const c=l||"";try{pi(s,function(v,w){let C=v;f(v)&&(C=wr(v)),a.push(c+w+"="+encodeURIComponent(C))})}catch(v){throw a.push(c+"type="+encodeURIComponent("_badmap")),v}}function Pn(s){this.l=s.Ub||null,this.j=s.eb||!1}N(Pn,Rr),Pn.prototype.g=function(){return new Sn(this.l,this.j)},Pn.prototype.i=(function(s){return function(){return s}})({});function Sn(s,a){dt.call(this),this.D=s,this.o=a,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}N(Sn,dt),r=Sn.prototype,r.open=function(s,a){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=s,this.A=a,this.readyState=1,He(this)},r.send=function(s){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const a={headers:this.u,method:this.B,credentials:this.m,cache:void 0};s&&(a.body=s),(this.D||h).fetch(new Request(this.A,a)).then(this.Sa.bind(this),this.ga.bind(this))},r.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Qe(this)),this.readyState=0},r.Sa=function(s){if(this.g&&(this.l=s,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=s.headers,this.readyState=2,He(this)),this.g&&(this.readyState=3,He(this),this.g)))if(this.responseType==="arraybuffer")s.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof h.ReadableStream<"u"&&"body"in s){if(this.j=s.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Ii(this)}else s.text().then(this.Ra.bind(this),this.ga.bind(this))};function Ii(s){s.j.read().then(s.Pa.bind(s)).catch(s.ga.bind(s))}r.Pa=function(s){if(this.g){if(this.o&&s.value)this.response.push(s.value);else if(!this.o){var a=s.value?s.value:new Uint8Array(0);(a=this.v.decode(a,{stream:!s.done}))&&(this.response=this.responseText+=a)}s.done?Qe(this):He(this),this.readyState==3&&Ii(this)}},r.Ra=function(s){this.g&&(this.response=this.responseText=s,Qe(this))},r.Qa=function(s){this.g&&(this.response=s,Qe(this))},r.ga=function(){this.g&&Qe(this)};function Qe(s){s.readyState=4,s.l=null,s.j=null,s.v=null,He(s)}r.setRequestHeader=function(s,a){this.u.append(s,a)},r.getResponseHeader=function(s){return this.h&&this.h.get(s.toLowerCase())||""},r.getAllResponseHeaders=function(){if(!this.h)return"";const s=[],a=this.h.entries();for(var l=a.next();!l.done;)l=l.value,s.push(l[0]+": "+l[1]),l=a.next();return s.join(`\r
`)};function He(s){s.onreadystatechange&&s.onreadystatechange.call(s)}Object.defineProperty(Sn.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(s){this.m=s?"include":"same-origin"}});function Ai(s){let a="";return at(s,function(l,c){a+=c,a+=":",a+=l,a+=`\r
`}),a}function Or(s,a,l){t:{for(c in l){var c=!1;break t}c=!0}c||(l=Ai(l),typeof s=="string"?l!=null&&encodeURIComponent(String(l)):K(s,a,l))}function Y(s){dt.call(this),this.headers=new Map,this.o=s||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}N(Y,dt);var Ku=/^https?$/i,Qu=["POST","PUT"];r=Y.prototype,r.Ha=function(s){this.J=s},r.ea=function(s,a,l,c){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+s);a=a?a.toUpperCase():"GET",this.D=s,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Sr.g(),this.v=this.o?Js(this.o):Js(Sr),this.g.onreadystatechange=R(this.Ea,this);try{this.B=!0,this.g.open(a,String(s),!0),this.B=!1}catch(w){wi(this,w);return}if(s=l||"",l=new Map(this.headers),c)if(Object.getPrototypeOf(c)===Object.prototype)for(var v in c)l.set(v,c[v]);else if(typeof c.keys=="function"&&typeof c.get=="function")for(const w of c.keys())l.set(w,c.get(w));else throw Error("Unknown input type for opt_headers: "+String(c));c=Array.from(l.keys()).find(w=>w.toLowerCase()=="content-type"),v=h.FormData&&s instanceof h.FormData,!(0<=Array.prototype.indexOf.call(Qu,a,void 0))||c||v||l.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[w,C]of l)this.g.setRequestHeader(w,C);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Pi(this),this.u=!0,this.g.send(s),this.u=!1}catch(w){wi(this,w)}};function wi(s,a){s.h=!1,s.g&&(s.j=!0,s.g.abort(),s.j=!1),s.l=a,s.m=5,Ri(s),Cn(s)}function Ri(s){s.A||(s.A=!0,Et(s,"complete"),Et(s,"error"))}r.abort=function(s){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=s||7,Et(this,"complete"),Et(this,"abort"),Cn(this))},r.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Cn(this,!0)),Y.aa.N.call(this)},r.Ea=function(){this.s||(this.B||this.u||this.j?Vi(this):this.bb())},r.bb=function(){Vi(this)};function Vi(s){if(s.h&&typeof u<"u"&&(!s.v[1]||Ot(s)!=4||s.Z()!=2)){if(s.u&&Ot(s)==4)Hs(s.Ea,0,s);else if(Et(s,"readystatechange"),Ot(s)==4){s.h=!1;try{const C=s.Z();t:switch(C){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var a=!0;break t;default:a=!1}var l;if(!(l=a)){var c;if(c=C===0){var v=String(s.D).match(gi)[1]||null;!v&&h.self&&h.self.location&&(v=h.self.location.protocol.slice(0,-1)),c=!Ku.test(v?v.toLowerCase():"")}l=c}if(l)Et(s,"complete"),Et(s,"success");else{s.m=6;try{var w=2<Ot(s)?s.g.statusText:""}catch{w=""}s.l=w+" ["+s.Z()+"]",Ri(s)}}finally{Cn(s)}}}}function Cn(s,a){if(s.g){Pi(s);const l=s.g,c=s.v[0]?()=>{}:null;s.g=null,s.v=null,a||Et(s,"ready");try{l.onreadystatechange=c}catch{}}}function Pi(s){s.I&&(h.clearTimeout(s.I),s.I=null)}r.isActive=function(){return!!this.g};function Ot(s){return s.g?s.g.readyState:0}r.Z=function(){try{return 2<Ot(this)?this.g.status:-1}catch{return-1}},r.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},r.Oa=function(s){if(this.g){var a=this.g.responseText;return s&&a.indexOf(s)==0&&(a=a.substring(s.length)),Ru(a)}};function Si(s){try{if(!s.g)return null;if("response"in s.g)return s.g.response;switch(s.H){case"":case"text":return s.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in s.g)return s.g.mozResponseArrayBuffer}return null}catch{return null}}function Hu(s){const a={};s=(s.g&&2<=Ot(s)&&s.g.getAllResponseHeaders()||"").split(`\r
`);for(let c=0;c<s.length;c++){if($(s[c]))continue;var l=E(s[c]);const v=l[0];if(l=l[1],typeof l!="string")continue;l=l.trim();const w=a[v]||[];a[v]=w,w.push(l)}T(a,function(c){return c.join(", ")})}r.Ba=function(){return this.m},r.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function We(s,a,l){return l&&l.internalChannelParams&&l.internalChannelParams[s]||a}function Ci(s){this.Aa=0,this.i=[],this.j=new Be,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=We("failFast",!1,s),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=We("baseRetryDelayMs",5e3,s),this.cb=We("retryDelaySeedMs",1e4,s),this.Wa=We("forwardChannelMaxRetries",2,s),this.wa=We("forwardChannelRequestTimeoutMs",2e4,s),this.pa=s&&s.xmlHttpFactory||void 0,this.Xa=s&&s.Tb||void 0,this.Ca=s&&s.useFetchStreams||!1,this.L=void 0,this.J=s&&s.supportsCrossDomainXhr||!1,this.K="",this.h=new hi(s&&s.concurrentRequestLimit),this.Da=new $u,this.P=s&&s.fastHandshake||!1,this.O=s&&s.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=s&&s.Rb||!1,s&&s.xa&&this.j.xa(),s&&s.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&s&&s.detectBufferingProxy||!1,this.ja=void 0,s&&s.longPollingTimeout&&0<s.longPollingTimeout&&(this.ja=s.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}r=Ci.prototype,r.la=8,r.G=1,r.connect=function(s,a,l,c){Tt(0),this.W=s,this.H=a||{},l&&c!==void 0&&(this.H.OSID=l,this.H.OAID=c),this.F=this.X,this.I=Fi(this,null,this.W),Dn(this)};function Lr(s){if(bi(s),s.G==3){var a=s.U++,l=xt(s.I);if(K(l,"SID",s.K),K(l,"RID",a),K(l,"TYPE","terminate"),Xe(s,l),a=new Ut(s,s.j,a),a.L=2,a.v=Vn(xt(l)),l=!1,h.navigator&&h.navigator.sendBeacon)try{l=h.navigator.sendBeacon(a.v.toString(),"")}catch{}!l&&h.Image&&(new Image().src=a.v,l=!0),l||(a.g=Ui(a.j,null),a.g.ea(a.v)),a.F=Date.now(),An(a)}Mi(s)}function bn(s){s.g&&(Fr(s),s.g.cancel(),s.g=null)}function bi(s){bn(s),s.u&&(h.clearTimeout(s.u),s.u=null),Nn(s),s.h.cancel(),s.s&&(typeof s.s=="number"&&h.clearTimeout(s.s),s.s=null)}function Dn(s){if(!ci(s.h)&&!s.s){s.s=!0;var a=s.Ga;Oe||zs(),Le||(Oe(),Le=!0),gr.add(a,s),s.B=0}}function Wu(s,a){return di(s.h)>=s.h.j-(s.s?1:0)?!1:s.s?(s.i=a.D.concat(s.i),!0):s.G==1||s.G==2||s.B>=(s.Va?0:s.Wa)?!1:(s.s=je(R(s.Ga,s,a),Li(s,s.B)),s.B++,!0)}r.Ga=function(s){if(this.s)if(this.s=null,this.G==1){if(!s){this.U=Math.floor(1e5*Math.random()),s=this.U++;const v=new Ut(this,this.j,s);let w=this.o;if(this.S&&(w?(w=m(w),y(w,this.S)):w=this.S),this.m!==null||this.O||(v.H=w,w=null),this.P)t:{for(var a=0,l=0;l<this.i.length;l++){e:{var c=this.i[l];if("__data__"in c.map&&(c=c.map.__data__,typeof c=="string")){c=c.length;break e}c=void 0}if(c===void 0)break;if(a+=c,4096<a){a=l;break t}if(a===4096||l===this.i.length-1){a=l+1;break t}}a=1e3}else a=1e3;a=Ni(this,v,a),l=xt(this.I),K(l,"RID",s),K(l,"CVER",22),this.D&&K(l,"X-HTTP-Session-Id",this.D),Xe(this,l),w&&(this.O?a="headers="+encodeURIComponent(String(Ai(w)))+"&"+a:this.m&&Or(l,this.m,w)),xr(this.h,v),this.Ua&&K(l,"TYPE","init"),this.P?(K(l,"$req",a),K(l,"SID","null"),v.T=!0,br(v,l,null)):br(v,l,a),this.G=2}}else this.G==3&&(s?Di(this,s):this.i.length==0||ci(this.h)||Di(this))};function Di(s,a){var l;a?l=a.l:l=s.U++;const c=xt(s.I);K(c,"SID",s.K),K(c,"RID",l),K(c,"AID",s.T),Xe(s,c),s.m&&s.o&&Or(c,s.m,s.o),l=new Ut(s,s.j,l,s.B+1),s.m===null&&(l.H=s.o),a&&(s.i=a.D.concat(s.i)),a=Ni(s,l,1e3),l.I=Math.round(.5*s.wa)+Math.round(.5*s.wa*Math.random()),xr(s.h,l),br(l,c,a)}function Xe(s,a){s.H&&at(s.H,function(l,c){K(a,c,l)}),s.l&&pi({},function(l,c){K(a,c,l)})}function Ni(s,a,l){l=Math.min(s.i.length,l);var c=s.l?R(s.l.Na,s.l,s):null;t:{var v=s.i;let w=-1;for(;;){const C=["count="+l];w==-1?0<l?(w=v[0].g,C.push("ofs="+w)):w=0:C.push("ofs="+w);let z=!0;for(let ut=0;ut<l;ut++){let B=v[ut].g;const ft=v[ut].map;if(B-=w,0>B)w=Math.max(0,v[ut].g-100),z=!1;else try{Gu(ft,C,"req"+B+"_")}catch{c&&c(ft)}}if(z){c=C.join("&");break t}}}return s=s.i.splice(0,l),a.D=s,c}function ki(s){if(!s.g&&!s.u){s.Y=1;var a=s.Fa;Oe||zs(),Le||(Oe(),Le=!0),gr.add(a,s),s.v=0}}function Mr(s){return s.g||s.u||3<=s.v?!1:(s.Y++,s.u=je(R(s.Fa,s),Li(s,s.v)),s.v++,!0)}r.Fa=function(){if(this.u=null,xi(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var s=2*this.R;this.j.info("BP detection timer enabled: "+s),this.A=je(R(this.ab,this),s)}},r.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Tt(10),bn(this),xi(this))};function Fr(s){s.A!=null&&(h.clearTimeout(s.A),s.A=null)}function xi(s){s.g=new Ut(s,s.j,"rpc",s.Y),s.m===null&&(s.g.H=s.o),s.g.O=0;var a=xt(s.qa);K(a,"RID","rpc"),K(a,"SID",s.K),K(a,"AID",s.T),K(a,"CI",s.F?"0":"1"),!s.F&&s.ja&&K(a,"TO",s.ja),K(a,"TYPE","xmlhttp"),Xe(s,a),s.m&&s.o&&Or(a,s.m,s.o),s.L&&(s.g.I=s.L);var l=s.g;s=s.ia,l.L=1,l.v=Vn(xt(a)),l.m=null,l.P=!0,ai(l,s)}r.Za=function(){this.C!=null&&(this.C=null,bn(this),Mr(this),Tt(19))};function Nn(s){s.C!=null&&(h.clearTimeout(s.C),s.C=null)}function Oi(s,a){var l=null;if(s.g==a){Nn(s),Fr(s),s.g=null;var c=2}else if(kr(s.h,a))l=a.D,fi(s.h,a),c=1;else return;if(s.G!=0){if(a.o)if(c==1){l=a.m?a.m.length:0,a=Date.now()-a.F;var v=s.B;c=Tn(),Et(c,new ri(c,l)),Dn(s)}else ki(s);else if(v=a.s,v==3||v==0&&0<a.X||!(c==1&&Wu(s,a)||c==2&&Mr(s)))switch(l&&0<l.length&&(a=s.h,a.i=a.i.concat(l)),v){case 1:ie(s,5);break;case 4:ie(s,10);break;case 3:ie(s,6);break;default:ie(s,2)}}}function Li(s,a){let l=s.Ta+Math.floor(Math.random()*s.cb);return s.isActive()||(l*=2),l*a}function ie(s,a){if(s.j.info("Error code "+a),a==2){var l=R(s.fb,s),c=s.Xa;const v=!c;c=new se(c||"//www.google.com/images/cleardot.gif"),h.location&&h.location.protocol=="http"||wn(c,"https"),Vn(c),v?Bu(c.toString(),l):zu(c.toString(),l)}else Tt(2);s.G=0,s.l&&s.l.sa(a),Mi(s),bi(s)}r.fb=function(s){s?(this.j.info("Successfully pinged google.com"),Tt(2)):(this.j.info("Failed to ping google.com"),Tt(1))};function Mi(s){if(s.G=0,s.ka=[],s.l){const a=mi(s.h);(a.length!=0||s.i.length!=0)&&(k(s.ka,a),k(s.ka,s.i),s.h.i.length=0,O(s.i),s.i.length=0),s.l.ra()}}function Fi(s,a,l){var c=l instanceof se?xt(l):new se(l);if(c.g!="")a&&(c.g=a+"."+c.g),Rn(c,c.s);else{var v=h.location;c=v.protocol,a=a?a+"."+v.hostname:v.hostname,v=+v.port;var w=new se(null);c&&wn(w,c),a&&(w.g=a),v&&Rn(w,v),l&&(w.l=l),c=w}return l=s.D,a=s.ya,l&&a&&K(c,l,a),K(c,"VER",s.la),Xe(s,c),c}function Ui(s,a,l){if(a&&!s.J)throw Error("Can't create secondary domain capable XhrIo object.");return a=s.Ca&&!s.pa?new Y(new Pn({eb:l})):new Y(s.pa),a.Ha(s.J),a}r.isActive=function(){return!!this.l&&this.l.isActive(this)};function qi(){}r=qi.prototype,r.ua=function(){},r.ta=function(){},r.sa=function(){},r.ra=function(){},r.isActive=function(){return!0},r.Na=function(){};function kn(){}kn.prototype.g=function(s,a){return new It(s,a)};function It(s,a){dt.call(this),this.g=new Ci(a),this.l=s,this.h=a&&a.messageUrlParams||null,s=a&&a.messageHeaders||null,a&&a.clientProtocolHeaderRequired&&(s?s["X-Client-Protocol"]="webchannel":s={"X-Client-Protocol":"webchannel"}),this.g.o=s,s=a&&a.initMessageHeaders||null,a&&a.messageContentType&&(s?s["X-WebChannel-Content-Type"]=a.messageContentType:s={"X-WebChannel-Content-Type":a.messageContentType}),a&&a.va&&(s?s["X-WebChannel-Client-Profile"]=a.va:s={"X-WebChannel-Client-Profile":a.va}),this.g.S=s,(s=a&&a.Sb)&&!$(s)&&(this.g.m=s),this.v=a&&a.supportsCrossDomainXhr||!1,this.u=a&&a.sendRawJson||!1,(a=a&&a.httpSessionIdParam)&&!$(a)&&(this.g.D=a,s=this.h,s!==null&&a in s&&(s=this.h,a in s&&delete s[a])),this.j=new me(this)}N(It,dt),It.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},It.prototype.close=function(){Lr(this.g)},It.prototype.o=function(s){var a=this.g;if(typeof s=="string"){var l={};l.__data__=s,s=l}else this.u&&(l={},l.__data__=wr(s),s=l);a.i.push(new Nu(a.Ya++,s)),a.G==3&&Dn(a)},It.prototype.N=function(){this.g.l=null,delete this.j,Lr(this.g),delete this.g,It.aa.N.call(this)};function ji(s){Vr.call(this),s.__headers__&&(this.headers=s.__headers__,this.statusCode=s.__status__,delete s.__headers__,delete s.__status__);var a=s.__sm__;if(a){t:{for(const l in a){s=l;break t}s=void 0}(this.i=s)&&(s=this.i,a=a!==null&&s in a?a[s]:void 0),this.data=a}else this.data=s}N(ji,Vr);function Bi(){Pr.call(this),this.status=1}N(Bi,Pr);function me(s){this.g=s}N(me,qi),me.prototype.ua=function(){Et(this.g,"a")},me.prototype.ta=function(s){Et(this.g,new ji(s))},me.prototype.sa=function(s){Et(this.g,new Bi)},me.prototype.ra=function(){Et(this.g,"b")},kn.prototype.createWebChannel=kn.prototype.g,It.prototype.send=It.prototype.o,It.prototype.open=It.prototype.m,It.prototype.close=It.prototype.close,Zo=function(){return new kn},Jo=function(){return Tn()},Yo=ne,Gr={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},vn.NO_ERROR=0,vn.TIMEOUT=8,vn.HTTP_ERROR=6,qn=vn,si.COMPLETE="complete",Xo=si,Zs.EventType=Ue,Ue.OPEN="a",Ue.CLOSE="b",Ue.ERROR="c",Ue.MESSAGE="d",dt.prototype.listen=dt.prototype.K,Ye=Zs,Y.prototype.listenOnce=Y.prototype.L,Y.prototype.getLastError=Y.prototype.Ka,Y.prototype.getLastErrorCode=Y.prototype.Ba,Y.prototype.getStatus=Y.prototype.Z,Y.prototype.getResponseJson=Y.prototype.Oa,Y.prototype.getResponseText=Y.prototype.oa,Y.prototype.send=Y.prototype.ea,Y.prototype.setWithCredentials=Y.prototype.Ha,Wo=Y}).apply(typeof On<"u"?On:typeof self<"u"?self:typeof window<"u"?window:{});const Gi="@firebase/firestore",Ki="4.8.0";/**
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
 */class gt{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}gt.UNAUTHENTICATED=new gt(null),gt.GOOGLE_CREDENTIALS=new gt("google-credentials-uid"),gt.FIRST_PARTY=new gt("first-party-uid"),gt.MOCK_USER=new gt("mock-user");/**
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
 */let Ce="11.10.0";/**
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
 */const he=new Xu("@firebase/firestore");function ge(){return he.logLevel}function D(r,...t){if(he.logLevel<=Lt.DEBUG){const e=t.map(hs);he.debug(`Firestore (${Ce}): ${r}`,...e)}}function Mt(r,...t){if(he.logLevel<=Lt.ERROR){const e=t.map(hs);he.error(`Firestore (${Ce}): ${r}`,...e)}}function Ht(r,...t){if(he.logLevel<=Lt.WARN){const e=t.map(hs);he.warn(`Firestore (${Ce}): ${r}`,...e)}}function hs(r){if(typeof r=="string")return r;try{/**
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
*/return(function(e){return JSON.stringify(e)})(r)}catch{return r}}/**
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
 */function M(r,t,e){let n="Unexpected state";typeof t=="string"?n=t:e=t,ta(r,n,e)}function ta(r,t,e){let n=`FIRESTORE (${Ce}) INTERNAL ASSERTION FAILED: ${t} (ID: ${r.toString(16)})`;if(e!==void 0)try{n+=" CONTEXT: "+JSON.stringify(e)}catch{n+=" CONTEXT: "+e}throw Mt(n),new Error(n)}function X(r,t,e,n){let i="Unexpected state";typeof e=="string"?i=e:n=e,r||ta(t,i,n)}function q(r,t){return r}/**
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
 */const P={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class b extends tl{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Gt{constructor(){this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}}/**
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
 */class ea{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class cl{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable((()=>e(gt.UNAUTHENTICATED)))}shutdown(){}}class dl{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable((()=>e(this.token.user)))}shutdown(){this.changeListener=null}}class fl{constructor(t){this.t=t,this.currentUser=gt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){X(this.o===void 0,42304);let n=this.i;const i=d=>this.i!==n?(n=this.i,e(d)):Promise.resolve();let o=new Gt;this.o=()=>{this.i++,this.currentUser=this.u(),o.resolve(),o=new Gt,t.enqueueRetryable((()=>i(this.currentUser)))};const u=()=>{const d=o;t.enqueueRetryable((async()=>{await d.promise,await i(this.currentUser)}))},h=d=>{D("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=d,this.o&&(this.auth.addAuthTokenListener(this.o),u())};this.t.onInit((d=>h(d))),setTimeout((()=>{if(!this.auth){const d=this.t.getImmediate({optional:!0});d?h(d):(D("FirebaseAuthCredentialsProvider","Auth not yet detected"),o.resolve(),o=new Gt)}}),0),u()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then((n=>this.i!==t?(D("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):n?(X(typeof n.accessToken=="string",31837,{l:n}),new ea(n.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const t=this.auth&&this.auth.getUid();return X(t===null||typeof t=="string",2055,{h:t}),new gt(t)}}class ml{constructor(t,e,n){this.P=t,this.T=e,this.I=n,this.type="FirstParty",this.user=gt.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const t=this.R();return t&&this.A.set("Authorization",t),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class pl{constructor(t,e,n){this.P=t,this.T=e,this.I=n}getToken(){return Promise.resolve(new ml(this.P,this.T,this.I))}start(t,e){t.enqueueRetryable((()=>e(gt.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class Qi{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class gl{constructor(t,e){this.V=e,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Zu(t)&&t.settings.appCheckToken&&(this.p=t.settings.appCheckToken)}start(t,e){X(this.o===void 0,3512);const n=o=>{o.error!=null&&D("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${o.error.message}`);const u=o.token!==this.m;return this.m=o.token,D("FirebaseAppCheckTokenProvider",`Received ${u?"new":"existing"} token.`),u?e(o.token):Promise.resolve()};this.o=o=>{t.enqueueRetryable((()=>n(o)))};const i=o=>{D("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=o,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((o=>i(o))),setTimeout((()=>{if(!this.appCheck){const o=this.V.getImmediate({optional:!0});o?i(o):D("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new Qi(this.p));const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then((e=>e?(X(typeof e.token=="string",44558,{tokenResult:e}),this.m=e.token,new Qi(e.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function _l(r){const t=typeof self<"u"&&(self.crypto||self.msCrypto),e=new Uint8Array(r);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(e);else for(let n=0;n<r;n++)e[n]=Math.floor(256*Math.random());return e}/**
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
 */function na(){return new TextEncoder}/**
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
 */class cs{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=62*Math.floor(4.129032258064516);let n="";for(;n.length<20;){const i=_l(40);for(let o=0;o<i.length;++o)n.length<20&&i[o]<e&&(n+=t.charAt(i[o]%62))}return n}}function F(r,t){return r<t?-1:r>t?1:0}function Kr(r,t){let e=0;for(;e<r.length&&e<t.length;){const n=r.codePointAt(e),i=t.codePointAt(e);if(n!==i){if(n<128&&i<128)return F(n,i);{const o=na(),u=yl(o.encode(Hi(r,e)),o.encode(Hi(t,e)));return u!==0?u:F(n,i)}}e+=n>65535?2:1}return F(r.length,t.length)}function Hi(r,t){return r.codePointAt(t)>65535?r.substring(t,t+2):r.substring(t,t+1)}function yl(r,t){for(let e=0;e<r.length&&e<t.length;++e)if(r[e]!==t[e])return F(r[e],t[e]);return F(r.length,t.length)}function Ae(r,t,e){return r.length===t.length&&r.every(((n,i)=>e(n,t[i])))}/**
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
 */const Wi="__name__";class Vt{constructor(t,e,n){e===void 0?e=0:e>t.length&&M(637,{offset:e,range:t.length}),n===void 0?n=t.length-e:n>t.length-e&&M(1746,{length:n,range:t.length-e}),this.segments=t,this.offset=e,this.len=n}get length(){return this.len}isEqual(t){return Vt.comparator(this,t)===0}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof Vt?t.forEach((n=>{e.push(n)})):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,n=this.limit();e<n;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const n=Math.min(t.length,e.length);for(let i=0;i<n;i++){const o=Vt.compareSegments(t.get(i),e.get(i));if(o!==0)return o}return F(t.length,e.length)}static compareSegments(t,e){const n=Vt.isNumericId(t),i=Vt.isNumericId(e);return n&&!i?-1:!n&&i?1:n&&i?Vt.extractNumericId(t).compare(Vt.extractNumericId(e)):Kr(t,e)}static isNumericId(t){return t.startsWith("__id")&&t.endsWith("__")}static extractNumericId(t){return $t.fromString(t.substring(4,t.length-2))}}class G extends Vt{construct(t,e,n){return new G(t,e,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const e=[];for(const n of t){if(n.indexOf("//")>=0)throw new b(P.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);e.push(...n.split("/").filter((i=>i.length>0)))}return new G(e)}static emptyPath(){return new G([])}}const El=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class yt extends Vt{construct(t,e,n){return new yt(t,e,n)}static isValidIdentifier(t){return El.test(t)}canonicalString(){return this.toArray().map((t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),yt.isValidIdentifier(t)||(t="`"+t+"`"),t))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Wi}static keyField(){return new yt([Wi])}static fromServerFormat(t){const e=[];let n="",i=0;const o=()=>{if(n.length===0)throw new b(P.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(n),n=""};let u=!1;for(;i<t.length;){const h=t[i];if(h==="\\"){if(i+1===t.length)throw new b(P.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const d=t[i+1];if(d!=="\\"&&d!=="."&&d!=="`")throw new b(P.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);n+=d,i+=2}else h==="`"?(u=!u,i++):h!=="."||u?(n+=h,i++):(o(),i++)}if(o(),u)throw new b(P.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new yt(e)}static emptyPath(){return new yt([])}}/**
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
 */class x{constructor(t){this.path=t}static fromPath(t){return new x(G.fromString(t))}static fromName(t){return new x(G.fromString(t).popFirst(5))}static empty(){return new x(G.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&G.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,e){return G.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new x(new G(t.slice()))}}/**
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
 */function ra(r,t,e){if(!e)throw new b(P.INVALID_ARGUMENT,`Function ${r}() cannot be called with an empty ${t}.`)}function Tl(r,t,e,n){if(t===!0&&n===!0)throw new b(P.INVALID_ARGUMENT,`${r} and ${e} cannot be used together.`)}function Xi(r){if(!x.isDocumentKey(r))throw new b(P.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${r} has ${r.length}.`)}function Yi(r){if(x.isDocumentKey(r))throw new b(P.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${r} has ${r.length}.`)}function sa(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}function tr(r){if(r===void 0)return"undefined";if(r===null)return"null";if(typeof r=="string")return r.length>20&&(r=`${r.substring(0,20)}...`),JSON.stringify(r);if(typeof r=="number"||typeof r=="boolean")return""+r;if(typeof r=="object"){if(r instanceof Array)return"an array";{const t=(function(n){return n.constructor?n.constructor.name:null})(r);return t?`a custom ${t} object`:"an object"}}return typeof r=="function"?"a function":M(12329,{type:typeof r})}function Kt(r,t){if("_delegate"in r&&(r=r._delegate),!(r instanceof t)){if(t.name===r.constructor.name)throw new b(P.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const e=tr(r);throw new b(P.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${e}`)}}return r}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nt(r,t){const e={typeString:r};return t&&(e.value=t),e}function dn(r,t){if(!sa(r))throw new b(P.INVALID_ARGUMENT,"JSON must be an object");let e;for(const n in t)if(t[n]){const i=t[n].typeString,o="value"in t[n]?{value:t[n].value}:void 0;if(!(n in r)){e=`JSON missing required field: '${n}'`;break}const u=r[n];if(i&&typeof u!==i){e=`JSON field '${n}' must be a ${i}.`;break}if(o!==void 0&&u!==o.value){e=`Expected '${n}' field to equal '${o.value}'`;break}}if(e)throw new b(P.INVALID_ARGUMENT,e);return!0}/**
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
 */const Ji=-62135596800,Zi=1e6;class H{static now(){return H.fromMillis(Date.now())}static fromDate(t){return H.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),n=Math.floor((t-1e3*e)*Zi);return new H(e,n)}constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new b(P.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new b(P.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<Ji)throw new b(P.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new b(P.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Zi}_compareTo(t){return this.seconds===t.seconds?F(this.nanoseconds,t.nanoseconds):F(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:H._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(t){if(dn(t,H._jsonSchema))return new H(t.seconds,t.nanoseconds)}valueOf(){const t=this.seconds-Ji;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}H._jsonSchemaVersion="firestore/timestamp/1.0",H._jsonSchema={type:nt("string",H._jsonSchemaVersion),seconds:nt("number"),nanoseconds:nt("number")};/**
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
 */class L{static fromTimestamp(t){return new L(t)}static min(){return new L(new H(0,0))}static max(){return new L(new H(253402300799,999999999))}constructor(t){this.timestamp=t}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const on=-1;function vl(r,t){const e=r.toTimestamp().seconds,n=r.toTimestamp().nanoseconds+1,i=L.fromTimestamp(n===1e9?new H(e+1,0):new H(e,n));return new Wt(i,x.empty(),t)}function Il(r){return new Wt(r.readTime,r.key,on)}class Wt{constructor(t,e,n){this.readTime=t,this.documentKey=e,this.largestBatchId=n}static min(){return new Wt(L.min(),x.empty(),on)}static max(){return new Wt(L.max(),x.empty(),on)}}function Al(r,t){let e=r.readTime.compareTo(t.readTime);return e!==0?e:(e=x.comparator(r.documentKey,t.documentKey),e!==0?e:F(r.largestBatchId,t.largestBatchId))}/**
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
 */const wl="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Rl{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((t=>t()))}}/**
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
 */async function er(r){if(r.code!==P.FAILED_PRECONDITION||r.message!==wl)throw r;D("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class V{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t((e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)}),(e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)}))}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&M(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new V(((n,i)=>{this.nextCallback=o=>{this.wrapSuccess(t,o).next(n,i)},this.catchCallback=o=>{this.wrapFailure(e,o).next(n,i)}}))}toPromise(){return new Promise(((t,e)=>{this.next(t,e)}))}wrapUserFunction(t){try{const e=t();return e instanceof V?e:V.resolve(e)}catch(e){return V.reject(e)}}wrapSuccess(t,e){return t?this.wrapUserFunction((()=>t(e))):V.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction((()=>t(e))):V.reject(e)}static resolve(t){return new V(((e,n)=>{e(t)}))}static reject(t){return new V(((e,n)=>{n(t)}))}static waitFor(t){return new V(((e,n)=>{let i=0,o=0,u=!1;t.forEach((h=>{++i,h.next((()=>{++o,u&&o===i&&e()}),(d=>n(d)))})),u=!0,o===i&&e()}))}static or(t){let e=V.resolve(!1);for(const n of t)e=e.next((i=>i?V.resolve(i):n()));return e}static forEach(t,e){const n=[];return t.forEach(((i,o)=>{n.push(e.call(this,i,o))})),this.waitFor(n)}static mapArray(t,e){return new V(((n,i)=>{const o=t.length,u=new Array(o);let h=0;for(let d=0;d<o;d++){const f=d;e(t[f]).next((g=>{u[f]=g,++h,h===o&&n(u)}),(g=>i(g)))}}))}static doWhile(t,e){return new V(((n,i)=>{const o=()=>{t()===!0?e().next((()=>{o()}),i):n()};o()}))}}function Vl(r){const t=r.match(/Android ([\d.]+)/i),e=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(e)}function be(r){return r.name==="IndexedDbTransactionError"}/**
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
 */class nr{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=n=>this._e(n),this.ae=n=>e.writeSequenceNumber(n))}_e(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.ae&&this.ae(t),t}}nr.ue=-1;/**
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
 */const Pl=-1;function rr(r){return r==null}function Gn(r){return r===0&&1/r==-1/0}function Sl(r){return typeof r=="number"&&Number.isInteger(r)&&!Gn(r)&&r<=Number.MAX_SAFE_INTEGER&&r>=Number.MIN_SAFE_INTEGER}/**
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
 */const ia="";function Cl(r){let t="";for(let e=0;e<r.length;e++)t.length>0&&(t=to(t)),t=bl(r.get(e),t);return to(t)}function bl(r,t){let e=t;const n=r.length;for(let i=0;i<n;i++){const o=r.charAt(i);switch(o){case"\0":e+="";break;case ia:e+="";break;default:e+=o}}return e}function to(r){return r+ia+""}/**
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
 */function eo(r){let t=0;for(const e in r)Object.prototype.hasOwnProperty.call(r,e)&&t++;return t}function De(r,t){for(const e in r)Object.prototype.hasOwnProperty.call(r,e)&&t(e,r[e])}function oa(r){for(const t in r)if(Object.prototype.hasOwnProperty.call(r,t))return!1;return!0}/**
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
 */class Z{constructor(t,e){this.comparator=t,this.root=e||lt.EMPTY}insert(t,e){return new Z(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,lt.BLACK,null,null))}remove(t){return new Z(this.comparator,this.root.remove(t,this.comparator).copy(null,null,lt.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const n=this.comparator(t,e.key);if(n===0)return e.value;n<0?e=e.left:n>0&&(e=e.right)}return null}indexOf(t){let e=0,n=this.root;for(;!n.isEmpty();){const i=this.comparator(t,n.key);if(i===0)return e+n.left.size;i<0?n=n.left:(e+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal(((e,n)=>(t(e,n),!1)))}toString(){const t=[];return this.inorderTraversal(((e,n)=>(t.push(`${e}:${n}`),!1))),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new Ln(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new Ln(this.root,t,this.comparator,!1)}getReverseIterator(){return new Ln(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new Ln(this.root,t,this.comparator,!0)}}class Ln{constructor(t,e,n,i){this.isReverse=i,this.nodeStack=[];let o=1;for(;!t.isEmpty();)if(o=e?n(t.key,e):1,e&&i&&(o*=-1),o<0)t=this.isReverse?t.left:t.right;else{if(o===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class lt{constructor(t,e,n,i,o){this.key=t,this.value=e,this.color=n??lt.RED,this.left=i??lt.EMPTY,this.right=o??lt.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,n,i,o){return new lt(t??this.key,e??this.value,n??this.color,i??this.left,o??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,n){let i=this;const o=n(t,i.key);return i=o<0?i.copy(null,null,null,i.left.insert(t,e,n),null):o===0?i.copy(null,e,null,null,null):i.copy(null,null,null,null,i.right.insert(t,e,n)),i.fixUp()}removeMin(){if(this.left.isEmpty())return lt.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let n,i=this;if(e(t,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(t,e),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),e(t,i.key)===0){if(i.right.isEmpty())return lt.EMPTY;n=i.right.min(),i=i.copy(n.key,n.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(t,e))}return i.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,lt.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,lt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw M(43730,{key:this.key,value:this.value});if(this.right.isRed())throw M(14113,{key:this.key,value:this.value});const t=this.left.check();if(t!==this.right.check())throw M(27949);return t+(this.isRed()?0:1)}}lt.EMPTY=null,lt.RED=!0,lt.BLACK=!1;lt.EMPTY=new class{constructor(){this.size=0}get key(){throw M(57766)}get value(){throw M(16141)}get color(){throw M(16727)}get left(){throw M(29726)}get right(){throw M(36894)}copy(t,e,n,i,o){return this}insert(t,e,n){return new lt(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class st{constructor(t){this.comparator=t,this.data=new Z(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal(((e,n)=>(t(e),!1)))}forEachInRange(t,e){const n=this.data.getIteratorFrom(t[0]);for(;n.hasNext();){const i=n.getNext();if(this.comparator(i.key,t[1])>=0)return;e(i.key)}}forEachWhile(t,e){let n;for(n=e!==void 0?this.data.getIteratorFrom(e):this.data.getIterator();n.hasNext();)if(!t(n.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new no(this.data.getIterator())}getIteratorFrom(t){return new no(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach((n=>{e=e.add(n)})),e}isEqual(t){if(!(t instanceof st)||this.size!==t.size)return!1;const e=this.data.getIterator(),n=t.data.getIterator();for(;e.hasNext();){const i=e.getNext().key,o=n.getNext().key;if(this.comparator(i,o)!==0)return!1}return!0}toArray(){const t=[];return this.forEach((e=>{t.push(e)})),t}toString(){const t=[];return this.forEach((e=>t.push(e))),"SortedSet("+t.toString()+")"}copy(t){const e=new st(this.comparator);return e.data=t,e}}class no{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Bt{constructor(t){this.fields=t,t.sort(yt.comparator)}static empty(){return new Bt([])}unionWith(t){let e=new st(yt.comparator);for(const n of this.fields)e=e.add(n);for(const n of t)e=e.add(n);return new Bt(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return Ae(this.fields,t.fields,((e,n)=>e.isEqual(n)))}}/**
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
 */class aa extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class ht{constructor(t){this.binaryString=t}static fromBase64String(t){const e=(function(i){try{return atob(i)}catch(o){throw typeof DOMException<"u"&&o instanceof DOMException?new aa("Invalid base64 string: "+o):o}})(t);return new ht(e)}static fromUint8Array(t){const e=(function(i){let o="";for(let u=0;u<i.length;++u)o+=String.fromCharCode(i[u]);return o})(t);return new ht(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(e){return btoa(e)})(this.binaryString)}toUint8Array(){return(function(e){const n=new Uint8Array(e.length);for(let i=0;i<e.length;i++)n[i]=e.charCodeAt(i);return n})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return F(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}ht.EMPTY_BYTE_STRING=new ht("");const Dl=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Xt(r){if(X(!!r,39018),typeof r=="string"){let t=0;const e=Dl.exec(r);if(X(!!e,46558,{timestamp:r}),e[1]){let i=e[1];i=(i+"000000000").substr(0,9),t=Number(i)}const n=new Date(r);return{seconds:Math.floor(n.getTime()/1e3),nanos:t}}return{seconds:J(r.seconds),nanos:J(r.nanos)}}function J(r){return typeof r=="number"?r:typeof r=="string"?Number(r):0}function Yt(r){return typeof r=="string"?ht.fromBase64String(r):ht.fromUint8Array(r)}/**
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
 */const ua="server_timestamp",la="__type__",ha="__previous_value__",ca="__local_write_time__";function ds(r){var t,e;return((e=(((t=r==null?void 0:r.mapValue)===null||t===void 0?void 0:t.fields)||{})[la])===null||e===void 0?void 0:e.stringValue)===ua}function sr(r){const t=r.mapValue.fields[ha];return ds(t)?sr(t):t}function an(r){const t=Xt(r.mapValue.fields[ca].timestampValue);return new H(t.seconds,t.nanos)}/**
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
 */class Nl{constructor(t,e,n,i,o,u,h,d,f,g){this.databaseId=t,this.appId=e,this.persistenceKey=n,this.host=i,this.ssl=o,this.forceLongPolling=u,this.autoDetectLongPolling=h,this.longPollingOptions=d,this.useFetchStreams=f,this.isUsingEmulator=g}}const Kn="(default)";class un{constructor(t,e){this.projectId=t,this.database=e||Kn}static empty(){return new un("","")}get isDefaultDatabase(){return this.database===Kn}isEqual(t){return t instanceof un&&t.projectId===this.projectId&&t.database===this.database}}/**
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
 */const da="__type__",kl="__max__",Mn={mapValue:{}},fa="__vector__",Qn="value";function Jt(r){return"nullValue"in r?0:"booleanValue"in r?1:"integerValue"in r||"doubleValue"in r?2:"timestampValue"in r?3:"stringValue"in r?5:"bytesValue"in r?6:"referenceValue"in r?7:"geoPointValue"in r?8:"arrayValue"in r?9:"mapValue"in r?ds(r)?4:Ol(r)?9007199254740991:xl(r)?10:11:M(28295,{value:r})}function Dt(r,t){if(r===t)return!0;const e=Jt(r);if(e!==Jt(t))return!1;switch(e){case 0:case 9007199254740991:return!0;case 1:return r.booleanValue===t.booleanValue;case 4:return an(r).isEqual(an(t));case 3:return(function(i,o){if(typeof i.timestampValue=="string"&&typeof o.timestampValue=="string"&&i.timestampValue.length===o.timestampValue.length)return i.timestampValue===o.timestampValue;const u=Xt(i.timestampValue),h=Xt(o.timestampValue);return u.seconds===h.seconds&&u.nanos===h.nanos})(r,t);case 5:return r.stringValue===t.stringValue;case 6:return(function(i,o){return Yt(i.bytesValue).isEqual(Yt(o.bytesValue))})(r,t);case 7:return r.referenceValue===t.referenceValue;case 8:return(function(i,o){return J(i.geoPointValue.latitude)===J(o.geoPointValue.latitude)&&J(i.geoPointValue.longitude)===J(o.geoPointValue.longitude)})(r,t);case 2:return(function(i,o){if("integerValue"in i&&"integerValue"in o)return J(i.integerValue)===J(o.integerValue);if("doubleValue"in i&&"doubleValue"in o){const u=J(i.doubleValue),h=J(o.doubleValue);return u===h?Gn(u)===Gn(h):isNaN(u)&&isNaN(h)}return!1})(r,t);case 9:return Ae(r.arrayValue.values||[],t.arrayValue.values||[],Dt);case 10:case 11:return(function(i,o){const u=i.mapValue.fields||{},h=o.mapValue.fields||{};if(eo(u)!==eo(h))return!1;for(const d in u)if(u.hasOwnProperty(d)&&(h[d]===void 0||!Dt(u[d],h[d])))return!1;return!0})(r,t);default:return M(52216,{left:r})}}function ln(r,t){return(r.values||[]).find((e=>Dt(e,t)))!==void 0}function we(r,t){if(r===t)return 0;const e=Jt(r),n=Jt(t);if(e!==n)return F(e,n);switch(e){case 0:case 9007199254740991:return 0;case 1:return F(r.booleanValue,t.booleanValue);case 2:return(function(o,u){const h=J(o.integerValue||o.doubleValue),d=J(u.integerValue||u.doubleValue);return h<d?-1:h>d?1:h===d?0:isNaN(h)?isNaN(d)?0:-1:1})(r,t);case 3:return ro(r.timestampValue,t.timestampValue);case 4:return ro(an(r),an(t));case 5:return Kr(r.stringValue,t.stringValue);case 6:return(function(o,u){const h=Yt(o),d=Yt(u);return h.compareTo(d)})(r.bytesValue,t.bytesValue);case 7:return(function(o,u){const h=o.split("/"),d=u.split("/");for(let f=0;f<h.length&&f<d.length;f++){const g=F(h[f],d[f]);if(g!==0)return g}return F(h.length,d.length)})(r.referenceValue,t.referenceValue);case 8:return(function(o,u){const h=F(J(o.latitude),J(u.latitude));return h!==0?h:F(J(o.longitude),J(u.longitude))})(r.geoPointValue,t.geoPointValue);case 9:return so(r.arrayValue,t.arrayValue);case 10:return(function(o,u){var h,d,f,g;const I=o.fields||{},R=u.fields||{},S=(h=I[Qn])===null||h===void 0?void 0:h.arrayValue,N=(d=R[Qn])===null||d===void 0?void 0:d.arrayValue,O=F(((f=S==null?void 0:S.values)===null||f===void 0?void 0:f.length)||0,((g=N==null?void 0:N.values)===null||g===void 0?void 0:g.length)||0);return O!==0?O:so(S,N)})(r.mapValue,t.mapValue);case 11:return(function(o,u){if(o===Mn.mapValue&&u===Mn.mapValue)return 0;if(o===Mn.mapValue)return 1;if(u===Mn.mapValue)return-1;const h=o.fields||{},d=Object.keys(h),f=u.fields||{},g=Object.keys(f);d.sort(),g.sort();for(let I=0;I<d.length&&I<g.length;++I){const R=Kr(d[I],g[I]);if(R!==0)return R;const S=we(h[d[I]],f[g[I]]);if(S!==0)return S}return F(d.length,g.length)})(r.mapValue,t.mapValue);default:throw M(23264,{le:e})}}function ro(r,t){if(typeof r=="string"&&typeof t=="string"&&r.length===t.length)return F(r,t);const e=Xt(r),n=Xt(t),i=F(e.seconds,n.seconds);return i!==0?i:F(e.nanos,n.nanos)}function so(r,t){const e=r.values||[],n=t.values||[];for(let i=0;i<e.length&&i<n.length;++i){const o=we(e[i],n[i]);if(o)return o}return F(e.length,n.length)}function Re(r){return Qr(r)}function Qr(r){return"nullValue"in r?"null":"booleanValue"in r?""+r.booleanValue:"integerValue"in r?""+r.integerValue:"doubleValue"in r?""+r.doubleValue:"timestampValue"in r?(function(e){const n=Xt(e);return`time(${n.seconds},${n.nanos})`})(r.timestampValue):"stringValue"in r?r.stringValue:"bytesValue"in r?(function(e){return Yt(e).toBase64()})(r.bytesValue):"referenceValue"in r?(function(e){return x.fromName(e).toString()})(r.referenceValue):"geoPointValue"in r?(function(e){return`geo(${e.latitude},${e.longitude})`})(r.geoPointValue):"arrayValue"in r?(function(e){let n="[",i=!0;for(const o of e.values||[])i?i=!1:n+=",",n+=Qr(o);return n+"]"})(r.arrayValue):"mapValue"in r?(function(e){const n=Object.keys(e.fields||{}).sort();let i="{",o=!0;for(const u of n)o?o=!1:i+=",",i+=`${u}:${Qr(e.fields[u])}`;return i+"}"})(r.mapValue):M(61005,{value:r})}function jn(r){switch(Jt(r)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const t=sr(r);return t?16+jn(t):16;case 5:return 2*r.stringValue.length;case 6:return Yt(r.bytesValue).approximateByteSize();case 7:return r.referenceValue.length;case 9:return(function(n){return(n.values||[]).reduce(((i,o)=>i+jn(o)),0)})(r.arrayValue);case 10:case 11:return(function(n){let i=0;return De(n.fields,((o,u)=>{i+=o.length+jn(u)})),i})(r.mapValue);default:throw M(13486,{value:r})}}function io(r,t){return{referenceValue:`projects/${r.projectId}/databases/${r.database}/documents/${t.path.canonicalString()}`}}function Hr(r){return!!r&&"integerValue"in r}function fs(r){return!!r&&"arrayValue"in r}function oo(r){return!!r&&"nullValue"in r}function ao(r){return!!r&&"doubleValue"in r&&isNaN(Number(r.doubleValue))}function qr(r){return!!r&&"mapValue"in r}function xl(r){var t,e;return((e=(((t=r==null?void 0:r.mapValue)===null||t===void 0?void 0:t.fields)||{})[da])===null||e===void 0?void 0:e.stringValue)===fa}function en(r){if(r.geoPointValue)return{geoPointValue:Object.assign({},r.geoPointValue)};if(r.timestampValue&&typeof r.timestampValue=="object")return{timestampValue:Object.assign({},r.timestampValue)};if(r.mapValue){const t={mapValue:{fields:{}}};return De(r.mapValue.fields,((e,n)=>t.mapValue.fields[e]=en(n))),t}if(r.arrayValue){const t={arrayValue:{values:[]}};for(let e=0;e<(r.arrayValue.values||[]).length;++e)t.arrayValue.values[e]=en(r.arrayValue.values[e]);return t}return Object.assign({},r)}function Ol(r){return(((r.mapValue||{}).fields||{}).__type__||{}).stringValue===kl}/**
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
 */class Pt{constructor(t){this.value=t}static empty(){return new Pt({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let n=0;n<t.length-1;++n)if(e=(e.mapValue.fields||{})[t.get(n)],!qr(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=en(e)}setAll(t){let e=yt.emptyPath(),n={},i=[];t.forEach(((u,h)=>{if(!e.isImmediateParentOf(h)){const d=this.getFieldsMap(e);this.applyChanges(d,n,i),n={},i=[],e=h.popLast()}u?n[h.lastSegment()]=en(u):i.push(h.lastSegment())}));const o=this.getFieldsMap(e);this.applyChanges(o,n,i)}delete(t){const e=this.field(t.popLast());qr(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return Dt(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let n=0;n<t.length;++n){let i=e.mapValue.fields[t.get(n)];qr(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},e.mapValue.fields[t.get(n)]=i),e=i}return e.mapValue.fields}applyChanges(t,e,n){De(e,((i,o)=>t[i]=o));for(const i of n)delete t[i]}clone(){return new Pt(en(this.value))}}/**
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
 */class _t{constructor(t,e,n,i,o,u,h){this.key=t,this.documentType=e,this.version=n,this.readTime=i,this.createTime=o,this.data=u,this.documentState=h}static newInvalidDocument(t){return new _t(t,0,L.min(),L.min(),L.min(),Pt.empty(),0)}static newFoundDocument(t,e,n,i){return new _t(t,1,e,L.min(),n,i,0)}static newNoDocument(t,e){return new _t(t,2,e,L.min(),L.min(),Pt.empty(),0)}static newUnknownDocument(t,e){return new _t(t,3,e,L.min(),L.min(),Pt.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual(L.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=Pt.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=Pt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=L.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof _t&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new _t(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Hn{constructor(t,e){this.position=t,this.inclusive=e}}function uo(r,t,e){let n=0;for(let i=0;i<r.position.length;i++){const o=t[i],u=r.position[i];if(o.field.isKeyField()?n=x.comparator(x.fromName(u.referenceValue),e.key):n=we(u,e.data.field(o.field)),o.dir==="desc"&&(n*=-1),n!==0)break}return n}function lo(r,t){if(r===null)return t===null;if(t===null||r.inclusive!==t.inclusive||r.position.length!==t.position.length)return!1;for(let e=0;e<r.position.length;e++)if(!Dt(r.position[e],t.position[e]))return!1;return!0}/**
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
 */class hn{constructor(t,e="asc"){this.field=t,this.dir=e}}function Ll(r,t){return r.dir===t.dir&&r.field.isEqual(t.field)}/**
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
 */class ma{}class et extends ma{constructor(t,e,n){super(),this.field=t,this.op=e,this.value=n}static create(t,e,n){return t.isKeyField()?e==="in"||e==="not-in"?this.createKeyFieldInFilter(t,e,n):new Fl(t,e,n):e==="array-contains"?new jl(t,n):e==="in"?new Bl(t,n):e==="not-in"?new zl(t,n):e==="array-contains-any"?new $l(t,n):new et(t,e,n)}static createKeyFieldInFilter(t,e,n){return e==="in"?new Ul(t,n):new ql(t,n)}matches(t){const e=t.data.field(this.field);return this.op==="!="?e!==null&&e.nullValue===void 0&&this.matchesComparison(we(e,this.value)):e!==null&&Jt(this.value)===Jt(e)&&this.matchesComparison(we(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return M(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Rt extends ma{constructor(t,e){super(),this.filters=t,this.op=e,this.he=null}static create(t,e){return new Rt(t,e)}matches(t){return pa(this)?this.filters.find((e=>!e.matches(t)))===void 0:this.filters.find((e=>e.matches(t)))!==void 0}getFlattenedFilters(){return this.he!==null||(this.he=this.filters.reduce(((t,e)=>t.concat(e.getFlattenedFilters())),[])),this.he}getFilters(){return Object.assign([],this.filters)}}function pa(r){return r.op==="and"}function ga(r){return Ml(r)&&pa(r)}function Ml(r){for(const t of r.filters)if(t instanceof Rt)return!1;return!0}function Wr(r){if(r instanceof et)return r.field.canonicalString()+r.op.toString()+Re(r.value);if(ga(r))return r.filters.map((t=>Wr(t))).join(",");{const t=r.filters.map((e=>Wr(e))).join(",");return`${r.op}(${t})`}}function _a(r,t){return r instanceof et?(function(n,i){return i instanceof et&&n.op===i.op&&n.field.isEqual(i.field)&&Dt(n.value,i.value)})(r,t):r instanceof Rt?(function(n,i){return i instanceof Rt&&n.op===i.op&&n.filters.length===i.filters.length?n.filters.reduce(((o,u,h)=>o&&_a(u,i.filters[h])),!0):!1})(r,t):void M(19439)}function ya(r){return r instanceof et?(function(e){return`${e.field.canonicalString()} ${e.op} ${Re(e.value)}`})(r):r instanceof Rt?(function(e){return e.op.toString()+" {"+e.getFilters().map(ya).join(" ,")+"}"})(r):"Filter"}class Fl extends et{constructor(t,e,n){super(t,e,n),this.key=x.fromName(n.referenceValue)}matches(t){const e=x.comparator(t.key,this.key);return this.matchesComparison(e)}}class Ul extends et{constructor(t,e){super(t,"in",e),this.keys=Ea("in",e)}matches(t){return this.keys.some((e=>e.isEqual(t.key)))}}class ql extends et{constructor(t,e){super(t,"not-in",e),this.keys=Ea("not-in",e)}matches(t){return!this.keys.some((e=>e.isEqual(t.key)))}}function Ea(r,t){var e;return(((e=t.arrayValue)===null||e===void 0?void 0:e.values)||[]).map((n=>x.fromName(n.referenceValue)))}class jl extends et{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return fs(e)&&ln(e.arrayValue,this.value)}}class Bl extends et{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return e!==null&&ln(this.value.arrayValue,e)}}class zl extends et{constructor(t,e){super(t,"not-in",e)}matches(t){if(ln(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return e!==null&&e.nullValue===void 0&&!ln(this.value.arrayValue,e)}}class $l extends et{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!fs(e)||!e.arrayValue.values)&&e.arrayValue.values.some((n=>ln(this.value.arrayValue,n)))}}/**
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
 */class Gl{constructor(t,e=null,n=[],i=[],o=null,u=null,h=null){this.path=t,this.collectionGroup=e,this.orderBy=n,this.filters=i,this.limit=o,this.startAt=u,this.endAt=h,this.Pe=null}}function ho(r,t=null,e=[],n=[],i=null,o=null,u=null){return new Gl(r,t,e,n,i,o,u)}function ms(r){const t=q(r);if(t.Pe===null){let e=t.path.canonicalString();t.collectionGroup!==null&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map((n=>Wr(n))).join(","),e+="|ob:",e+=t.orderBy.map((n=>(function(o){return o.field.canonicalString()+o.dir})(n))).join(","),rr(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map((n=>Re(n))).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map((n=>Re(n))).join(",")),t.Pe=e}return t.Pe}function ps(r,t){if(r.limit!==t.limit||r.orderBy.length!==t.orderBy.length)return!1;for(let e=0;e<r.orderBy.length;e++)if(!Ll(r.orderBy[e],t.orderBy[e]))return!1;if(r.filters.length!==t.filters.length)return!1;for(let e=0;e<r.filters.length;e++)if(!_a(r.filters[e],t.filters[e]))return!1;return r.collectionGroup===t.collectionGroup&&!!r.path.isEqual(t.path)&&!!lo(r.startAt,t.startAt)&&lo(r.endAt,t.endAt)}function Xr(r){return x.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}/**
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
 */class Ne{constructor(t,e=null,n=[],i=[],o=null,u="F",h=null,d=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=n,this.filters=i,this.limit=o,this.limitType=u,this.startAt=h,this.endAt=d,this.Te=null,this.Ie=null,this.de=null,this.startAt,this.endAt}}function Kl(r,t,e,n,i,o,u,h){return new Ne(r,t,e,n,i,o,u,h)}function ir(r){return new Ne(r)}function co(r){return r.filters.length===0&&r.limit===null&&r.startAt==null&&r.endAt==null&&(r.explicitOrderBy.length===0||r.explicitOrderBy.length===1&&r.explicitOrderBy[0].field.isKeyField())}function Ta(r){return r.collectionGroup!==null}function nn(r){const t=q(r);if(t.Te===null){t.Te=[];const e=new Set;for(const o of t.explicitOrderBy)t.Te.push(o),e.add(o.field.canonicalString());const n=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(u){let h=new st(yt.comparator);return u.filters.forEach((d=>{d.getFlattenedFilters().forEach((f=>{f.isInequality()&&(h=h.add(f.field))}))})),h})(t).forEach((o=>{e.has(o.canonicalString())||o.isKeyField()||t.Te.push(new hn(o,n))})),e.has(yt.keyField().canonicalString())||t.Te.push(new hn(yt.keyField(),n))}return t.Te}function St(r){const t=q(r);return t.Ie||(t.Ie=Ql(t,nn(r))),t.Ie}function Ql(r,t){if(r.limitType==="F")return ho(r.path,r.collectionGroup,t,r.filters,r.limit,r.startAt,r.endAt);{t=t.map((i=>{const o=i.dir==="desc"?"asc":"desc";return new hn(i.field,o)}));const e=r.endAt?new Hn(r.endAt.position,r.endAt.inclusive):null,n=r.startAt?new Hn(r.startAt.position,r.startAt.inclusive):null;return ho(r.path,r.collectionGroup,t,r.filters,r.limit,e,n)}}function Yr(r,t){const e=r.filters.concat([t]);return new Ne(r.path,r.collectionGroup,r.explicitOrderBy.slice(),e,r.limit,r.limitType,r.startAt,r.endAt)}function Jr(r,t,e){return new Ne(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),t,e,r.startAt,r.endAt)}function or(r,t){return ps(St(r),St(t))&&r.limitType===t.limitType}function va(r){return`${ms(St(r))}|lt:${r.limitType}`}function _e(r){return`Query(target=${(function(e){let n=e.path.canonicalString();return e.collectionGroup!==null&&(n+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(n+=`, filters: [${e.filters.map((i=>ya(i))).join(", ")}]`),rr(e.limit)||(n+=", limit: "+e.limit),e.orderBy.length>0&&(n+=`, orderBy: [${e.orderBy.map((i=>(function(u){return`${u.field.canonicalString()} (${u.dir})`})(i))).join(", ")}]`),e.startAt&&(n+=", startAt: ",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map((i=>Re(i))).join(",")),e.endAt&&(n+=", endAt: ",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map((i=>Re(i))).join(",")),`Target(${n})`})(St(r))}; limitType=${r.limitType})`}function ar(r,t){return t.isFoundDocument()&&(function(n,i){const o=i.key.path;return n.collectionGroup!==null?i.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(o):x.isDocumentKey(n.path)?n.path.isEqual(o):n.path.isImmediateParentOf(o)})(r,t)&&(function(n,i){for(const o of nn(n))if(!o.field.isKeyField()&&i.data.field(o.field)===null)return!1;return!0})(r,t)&&(function(n,i){for(const o of n.filters)if(!o.matches(i))return!1;return!0})(r,t)&&(function(n,i){return!(n.startAt&&!(function(u,h,d){const f=uo(u,h,d);return u.inclusive?f<=0:f<0})(n.startAt,nn(n),i)||n.endAt&&!(function(u,h,d){const f=uo(u,h,d);return u.inclusive?f>=0:f>0})(n.endAt,nn(n),i))})(r,t)}function Hl(r){return r.collectionGroup||(r.path.length%2==1?r.path.lastSegment():r.path.get(r.path.length-2))}function Ia(r){return(t,e)=>{let n=!1;for(const i of nn(r)){const o=Wl(i,t,e);if(o!==0)return o;n=n||i.field.isKeyField()}return 0}}function Wl(r,t,e){const n=r.field.isKeyField()?x.comparator(t.key,e.key):(function(o,u,h){const d=u.data.field(o),f=h.data.field(o);return d!==null&&f!==null?we(d,f):M(42886)})(r.field,t,e);switch(r.dir){case"asc":return n;case"desc":return-1*n;default:return M(19790,{direction:r.dir})}}/**
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
 */class ce{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),n=this.inner[e];if(n!==void 0){for(const[i,o]of n)if(this.equalsFn(i,t))return o}}has(t){return this.get(t)!==void 0}set(t,e){const n=this.mapKeyFn(t),i=this.inner[n];if(i===void 0)return this.inner[n]=[[t,e]],void this.innerSize++;for(let o=0;o<i.length;o++)if(this.equalsFn(i[o][0],t))return void(i[o]=[t,e]);i.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),n=this.inner[e];if(n===void 0)return!1;for(let i=0;i<n.length;i++)if(this.equalsFn(n[i][0],t))return n.length===1?delete this.inner[e]:n.splice(i,1),this.innerSize--,!0;return!1}forEach(t){De(this.inner,((e,n)=>{for(const[i,o]of n)t(i,o)}))}isEmpty(){return oa(this.inner)}size(){return this.innerSize}}/**
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
 */const Xl=new Z(x.comparator);function Zt(){return Xl}const Aa=new Z(x.comparator);function Je(...r){let t=Aa;for(const e of r)t=t.insert(e.key,e);return t}function Yl(r){let t=Aa;return r.forEach(((e,n)=>t=t.insert(e,n.overlayedDocument))),t}function oe(){return rn()}function wa(){return rn()}function rn(){return new ce((r=>r.toString()),((r,t)=>r.isEqual(t)))}const Jl=new st(x.comparator);function j(...r){let t=Jl;for(const e of r)t=t.add(e);return t}const Zl=new st(F);function th(){return Zl}/**
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
 */function gs(r,t){if(r.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Gn(t)?"-0":t}}function Ra(r){return{integerValue:""+r}}function eh(r,t){return Sl(t)?Ra(t):gs(r,t)}/**
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
 */class ur{constructor(){this._=void 0}}function nh(r,t,e){return r instanceof Zr?(function(i,o){const u={fields:{[la]:{stringValue:ua},[ca]:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return o&&ds(o)&&(o=sr(o)),o&&(u.fields[ha]=o),{mapValue:u}})(e,t):r instanceof Wn?Va(r,t):r instanceof Xn?Pa(r,t):(function(i,o){const u=sh(i,o),h=fo(u)+fo(i.Ee);return Hr(u)&&Hr(i.Ee)?Ra(h):gs(i.serializer,h)})(r,t)}function rh(r,t,e){return r instanceof Wn?Va(r,t):r instanceof Xn?Pa(r,t):e}function sh(r,t){return r instanceof ts?(function(n){return Hr(n)||(function(o){return!!o&&"doubleValue"in o})(n)})(t)?t:{integerValue:0}:null}class Zr extends ur{}class Wn extends ur{constructor(t){super(),this.elements=t}}function Va(r,t){const e=Sa(t);for(const n of r.elements)e.some((i=>Dt(i,n)))||e.push(n);return{arrayValue:{values:e}}}class Xn extends ur{constructor(t){super(),this.elements=t}}function Pa(r,t){let e=Sa(t);for(const n of r.elements)e=e.filter((i=>!Dt(i,n)));return{arrayValue:{values:e}}}class ts extends ur{constructor(t,e){super(),this.serializer=t,this.Ee=e}}function fo(r){return J(r.integerValue||r.doubleValue)}function Sa(r){return fs(r)&&r.arrayValue.values?r.arrayValue.values.slice():[]}function ih(r,t){return r.field.isEqual(t.field)&&(function(n,i){return n instanceof Wn&&i instanceof Wn||n instanceof Xn&&i instanceof Xn?Ae(n.elements,i.elements,Dt):n instanceof ts&&i instanceof ts?Dt(n.Ee,i.Ee):n instanceof Zr&&i instanceof Zr})(r.transform,t.transform)}class ae{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new ae}static exists(t){return new ae(void 0,t)}static updateTime(t){return new ae(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function Bn(r,t){return r.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(r.updateTime):r.exists===void 0||r.exists===t.isFoundDocument()}class _s{}function Ca(r,t){if(!r.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return r.isNoDocument()?new ah(r.key,ae.none()):new ys(r.key,r.data,ae.none());{const e=r.data,n=Pt.empty();let i=new st(yt.comparator);for(let o of t.fields)if(!i.has(o)){let u=e.field(o);u===null&&o.length>1&&(o=o.popLast(),u=e.field(o)),u===null?n.delete(o):n.set(o,u),i=i.add(o)}return new lr(r.key,n,new Bt(i.toArray()),ae.none())}}function oh(r,t,e){r instanceof ys?(function(i,o,u){const h=i.value.clone(),d=po(i.fieldTransforms,o,u.transformResults);h.setAll(d),o.convertToFoundDocument(u.version,h).setHasCommittedMutations()})(r,t,e):r instanceof lr?(function(i,o,u){if(!Bn(i.precondition,o))return void o.convertToUnknownDocument(u.version);const h=po(i.fieldTransforms,o,u.transformResults),d=o.data;d.setAll(ba(i)),d.setAll(h),o.convertToFoundDocument(u.version,d).setHasCommittedMutations()})(r,t,e):(function(i,o,u){o.convertToNoDocument(u.version).setHasCommittedMutations()})(0,t,e)}function sn(r,t,e,n){return r instanceof ys?(function(o,u,h,d){if(!Bn(o.precondition,u))return h;const f=o.value.clone(),g=go(o.fieldTransforms,d,u);return f.setAll(g),u.convertToFoundDocument(u.version,f).setHasLocalMutations(),null})(r,t,e,n):r instanceof lr?(function(o,u,h,d){if(!Bn(o.precondition,u))return h;const f=go(o.fieldTransforms,d,u),g=u.data;return g.setAll(ba(o)),g.setAll(f),u.convertToFoundDocument(u.version,g).setHasLocalMutations(),h===null?null:h.unionWith(o.fieldMask.fields).unionWith(o.fieldTransforms.map((I=>I.field)))})(r,t,e,n):(function(o,u,h){return Bn(o.precondition,u)?(u.convertToNoDocument(u.version).setHasLocalMutations(),null):h})(r,t,e)}function mo(r,t){return r.type===t.type&&!!r.key.isEqual(t.key)&&!!r.precondition.isEqual(t.precondition)&&!!(function(n,i){return n===void 0&&i===void 0||!(!n||!i)&&Ae(n,i,((o,u)=>ih(o,u)))})(r.fieldTransforms,t.fieldTransforms)&&(r.type===0?r.value.isEqual(t.value):r.type!==1||r.data.isEqual(t.data)&&r.fieldMask.isEqual(t.fieldMask))}class ys extends _s{constructor(t,e,n,i=[]){super(),this.key=t,this.value=e,this.precondition=n,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class lr extends _s{constructor(t,e,n,i,o=[]){super(),this.key=t,this.data=e,this.fieldMask=n,this.precondition=i,this.fieldTransforms=o,this.type=1}getFieldMask(){return this.fieldMask}}function ba(r){const t=new Map;return r.fieldMask.fields.forEach((e=>{if(!e.isEmpty()){const n=r.data.field(e);t.set(e,n)}})),t}function po(r,t,e){const n=new Map;X(r.length===e.length,32656,{Ae:e.length,Re:r.length});for(let i=0;i<e.length;i++){const o=r[i],u=o.transform,h=t.data.field(o.field);n.set(o.field,rh(u,h,e[i]))}return n}function go(r,t,e){const n=new Map;for(const i of r){const o=i.transform,u=e.data.field(i.field);n.set(i.field,nh(o,u,t))}return n}class ah extends _s{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class uh{constructor(t,e,n,i){this.batchId=t,this.localWriteTime=e,this.baseMutations=n,this.mutations=i}applyToRemoteDocument(t,e){const n=e.mutationResults;for(let i=0;i<this.mutations.length;i++){const o=this.mutations[i];o.key.isEqual(t.key)&&oh(o,t,n[i])}}applyToLocalView(t,e){for(const n of this.baseMutations)n.key.isEqual(t.key)&&(e=sn(n,t,e,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(t.key)&&(e=sn(n,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const n=wa();return this.mutations.forEach((i=>{const o=t.get(i.key),u=o.overlayedDocument;let h=this.applyToLocalView(u,o.mutatedFields);h=e.has(i.key)?null:h;const d=Ca(u,h);d!==null&&n.set(i.key,d),u.isValidDocument()||u.convertToNoDocument(L.min())})),n}keys(){return this.mutations.reduce(((t,e)=>t.add(e.key)),j())}isEqual(t){return this.batchId===t.batchId&&Ae(this.mutations,t.mutations,((e,n)=>mo(e,n)))&&Ae(this.baseMutations,t.baseMutations,((e,n)=>mo(e,n)))}}/**
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
 */class lh{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
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
 */class hh{constructor(t,e){this.count=t,this.unchangedNames=e}}/**
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
 */var tt,U;function Da(r){if(r===void 0)return Mt("GRPC error has no .code"),P.UNKNOWN;switch(r){case tt.OK:return P.OK;case tt.CANCELLED:return P.CANCELLED;case tt.UNKNOWN:return P.UNKNOWN;case tt.DEADLINE_EXCEEDED:return P.DEADLINE_EXCEEDED;case tt.RESOURCE_EXHAUSTED:return P.RESOURCE_EXHAUSTED;case tt.INTERNAL:return P.INTERNAL;case tt.UNAVAILABLE:return P.UNAVAILABLE;case tt.UNAUTHENTICATED:return P.UNAUTHENTICATED;case tt.INVALID_ARGUMENT:return P.INVALID_ARGUMENT;case tt.NOT_FOUND:return P.NOT_FOUND;case tt.ALREADY_EXISTS:return P.ALREADY_EXISTS;case tt.PERMISSION_DENIED:return P.PERMISSION_DENIED;case tt.FAILED_PRECONDITION:return P.FAILED_PRECONDITION;case tt.ABORTED:return P.ABORTED;case tt.OUT_OF_RANGE:return P.OUT_OF_RANGE;case tt.UNIMPLEMENTED:return P.UNIMPLEMENTED;case tt.DATA_LOSS:return P.DATA_LOSS;default:return M(39323,{code:r})}}(U=tt||(tt={}))[U.OK=0]="OK",U[U.CANCELLED=1]="CANCELLED",U[U.UNKNOWN=2]="UNKNOWN",U[U.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",U[U.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",U[U.NOT_FOUND=5]="NOT_FOUND",U[U.ALREADY_EXISTS=6]="ALREADY_EXISTS",U[U.PERMISSION_DENIED=7]="PERMISSION_DENIED",U[U.UNAUTHENTICATED=16]="UNAUTHENTICATED",U[U.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",U[U.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",U[U.ABORTED=10]="ABORTED",U[U.OUT_OF_RANGE=11]="OUT_OF_RANGE",U[U.UNIMPLEMENTED=12]="UNIMPLEMENTED",U[U.INTERNAL=13]="INTERNAL",U[U.UNAVAILABLE=14]="UNAVAILABLE",U[U.DATA_LOSS=15]="DATA_LOSS";/**
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
 */const ch=new $t([4294967295,4294967295],0);function _o(r){const t=na().encode(r),e=new Ho;return e.update(t),new Uint8Array(e.digest())}function yo(r){const t=new DataView(r.buffer),e=t.getUint32(0,!0),n=t.getUint32(4,!0),i=t.getUint32(8,!0),o=t.getUint32(12,!0);return[new $t([e,n],0),new $t([i,o],0)]}class Es{constructor(t,e,n){if(this.bitmap=t,this.padding=e,this.hashCount=n,e<0||e>=8)throw new Ze(`Invalid padding: ${e}`);if(n<0)throw new Ze(`Invalid hash count: ${n}`);if(t.length>0&&this.hashCount===0)throw new Ze(`Invalid hash count: ${n}`);if(t.length===0&&e!==0)throw new Ze(`Invalid padding when bitmap length is 0: ${e}`);this.fe=8*t.length-e,this.ge=$t.fromNumber(this.fe)}pe(t,e,n){let i=t.add(e.multiply($t.fromNumber(n)));return i.compare(ch)===1&&(i=new $t([i.getBits(0),i.getBits(1)],0)),i.modulo(this.ge).toNumber()}ye(t){return!!(this.bitmap[Math.floor(t/8)]&1<<t%8)}mightContain(t){if(this.fe===0)return!1;const e=_o(t),[n,i]=yo(e);for(let o=0;o<this.hashCount;o++){const u=this.pe(n,i,o);if(!this.ye(u))return!1}return!0}static create(t,e,n){const i=t%8==0?0:8-t%8,o=new Uint8Array(Math.ceil(t/8)),u=new Es(o,i,e);return n.forEach((h=>u.insert(h))),u}insert(t){if(this.fe===0)return;const e=_o(t),[n,i]=yo(e);for(let o=0;o<this.hashCount;o++){const u=this.pe(n,i,o);this.we(u)}}we(t){const e=Math.floor(t/8),n=t%8;this.bitmap[e]|=1<<n}}class Ze extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class hr{constructor(t,e,n,i,o){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=n,this.documentUpdates=i,this.resolvedLimboDocuments=o}static createSynthesizedRemoteEventForCurrentChange(t,e,n){const i=new Map;return i.set(t,fn.createSynthesizedTargetChangeForCurrentChange(t,e,n)),new hr(L.min(),i,new Z(F),Zt(),j())}}class fn{constructor(t,e,n,i,o){this.resumeToken=t,this.current=e,this.addedDocuments=n,this.modifiedDocuments=i,this.removedDocuments=o}static createSynthesizedTargetChangeForCurrentChange(t,e,n){return new fn(n,e,j(),j(),j())}}/**
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
 */class zn{constructor(t,e,n,i){this.Se=t,this.removedTargetIds=e,this.key=n,this.be=i}}class Na{constructor(t,e){this.targetId=t,this.De=e}}class ka{constructor(t,e,n=ht.EMPTY_BYTE_STRING,i=null){this.state=t,this.targetIds=e,this.resumeToken=n,this.cause=i}}class Eo{constructor(){this.ve=0,this.Ce=To(),this.Fe=ht.EMPTY_BYTE_STRING,this.Me=!1,this.xe=!0}get current(){return this.Me}get resumeToken(){return this.Fe}get Oe(){return this.ve!==0}get Ne(){return this.xe}Be(t){t.approximateByteSize()>0&&(this.xe=!0,this.Fe=t)}Le(){let t=j(),e=j(),n=j();return this.Ce.forEach(((i,o)=>{switch(o){case 0:t=t.add(i);break;case 2:e=e.add(i);break;case 1:n=n.add(i);break;default:M(38017,{changeType:o})}})),new fn(this.Fe,this.Me,t,e,n)}ke(){this.xe=!1,this.Ce=To()}qe(t,e){this.xe=!0,this.Ce=this.Ce.insert(t,e)}Qe(t){this.xe=!0,this.Ce=this.Ce.remove(t)}$e(){this.ve+=1}Ue(){this.ve-=1,X(this.ve>=0,3241,{ve:this.ve})}Ke(){this.xe=!0,this.Me=!0}}class dh{constructor(t){this.We=t,this.Ge=new Map,this.ze=Zt(),this.je=Fn(),this.Je=Fn(),this.He=new Z(F)}Ye(t){for(const e of t.Se)t.be&&t.be.isFoundDocument()?this.Ze(e,t.be):this.Xe(e,t.key,t.be);for(const e of t.removedTargetIds)this.Xe(e,t.key,t.be)}et(t){this.forEachTarget(t,(e=>{const n=this.tt(e);switch(t.state){case 0:this.nt(e)&&n.Be(t.resumeToken);break;case 1:n.Ue(),n.Oe||n.ke(),n.Be(t.resumeToken);break;case 2:n.Ue(),n.Oe||this.removeTarget(e);break;case 3:this.nt(e)&&(n.Ke(),n.Be(t.resumeToken));break;case 4:this.nt(e)&&(this.rt(e),n.Be(t.resumeToken));break;default:M(56790,{state:t.state})}}))}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.Ge.forEach(((n,i)=>{this.nt(i)&&e(i)}))}it(t){const e=t.targetId,n=t.De.count,i=this.st(e);if(i){const o=i.target;if(Xr(o))if(n===0){const u=new x(o.path);this.Xe(e,u,_t.newNoDocument(u,L.min()))}else X(n===1,20013,{expectedCount:n});else{const u=this.ot(e);if(u!==n){const h=this._t(t),d=h?this.ut(h,t,u):1;if(d!==0){this.rt(e);const f=d===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.He=this.He.insert(e,f)}}}}}_t(t){const e=t.De.unchangedNames;if(!e||!e.bits)return null;const{bits:{bitmap:n="",padding:i=0},hashCount:o=0}=e;let u,h;try{u=Yt(n).toUint8Array()}catch(d){if(d instanceof aa)return Ht("Decoding the base64 bloom filter in existence filter failed ("+d.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw d}try{h=new Es(u,i,o)}catch(d){return Ht(d instanceof Ze?"BloomFilter error: ":"Applying bloom filter failed: ",d),null}return h.fe===0?null:h}ut(t,e,n){return e.De.count===n-this.ht(t,e.targetId)?0:2}ht(t,e){const n=this.We.getRemoteKeysForTarget(e);let i=0;return n.forEach((o=>{const u=this.We.lt(),h=`projects/${u.projectId}/databases/${u.database}/documents/${o.path.canonicalString()}`;t.mightContain(h)||(this.Xe(e,o,null),i++)})),i}Pt(t){const e=new Map;this.Ge.forEach(((o,u)=>{const h=this.st(u);if(h){if(o.current&&Xr(h.target)){const d=new x(h.target.path);this.Tt(d).has(u)||this.It(u,d)||this.Xe(u,d,_t.newNoDocument(d,t))}o.Ne&&(e.set(u,o.Le()),o.ke())}}));let n=j();this.Je.forEach(((o,u)=>{let h=!0;u.forEachWhile((d=>{const f=this.st(d);return!f||f.purpose==="TargetPurposeLimboResolution"||(h=!1,!1)})),h&&(n=n.add(o))})),this.ze.forEach(((o,u)=>u.setReadTime(t)));const i=new hr(t,e,this.He,this.ze,n);return this.ze=Zt(),this.je=Fn(),this.Je=Fn(),this.He=new Z(F),i}Ze(t,e){if(!this.nt(t))return;const n=this.It(t,e.key)?2:0;this.tt(t).qe(e.key,n),this.ze=this.ze.insert(e.key,e),this.je=this.je.insert(e.key,this.Tt(e.key).add(t)),this.Je=this.Je.insert(e.key,this.dt(e.key).add(t))}Xe(t,e,n){if(!this.nt(t))return;const i=this.tt(t);this.It(t,e)?i.qe(e,1):i.Qe(e),this.Je=this.Je.insert(e,this.dt(e).delete(t)),this.Je=this.Je.insert(e,this.dt(e).add(t)),n&&(this.ze=this.ze.insert(e,n))}removeTarget(t){this.Ge.delete(t)}ot(t){const e=this.tt(t).Le();return this.We.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}$e(t){this.tt(t).$e()}tt(t){let e=this.Ge.get(t);return e||(e=new Eo,this.Ge.set(t,e)),e}dt(t){let e=this.Je.get(t);return e||(e=new st(F),this.Je=this.Je.insert(t,e)),e}Tt(t){let e=this.je.get(t);return e||(e=new st(F),this.je=this.je.insert(t,e)),e}nt(t){const e=this.st(t)!==null;return e||D("WatchChangeAggregator","Detected inactive target",t),e}st(t){const e=this.Ge.get(t);return e&&e.Oe?null:this.We.Et(t)}rt(t){this.Ge.set(t,new Eo),this.We.getRemoteKeysForTarget(t).forEach((e=>{this.Xe(t,e,null)}))}It(t,e){return this.We.getRemoteKeysForTarget(t).has(e)}}function Fn(){return new Z(x.comparator)}function To(){return new Z(x.comparator)}const fh={asc:"ASCENDING",desc:"DESCENDING"},mh={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},ph={and:"AND",or:"OR"};class gh{constructor(t,e){this.databaseId=t,this.useProto3Json=e}}function es(r,t){return r.useProto3Json||rr(t)?t:{value:t}}function ns(r,t){return r.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function xa(r,t){return r.useProto3Json?t.toBase64():t.toUint8Array()}function Te(r){return X(!!r,49232),L.fromTimestamp((function(e){const n=Xt(e);return new H(n.seconds,n.nanos)})(r))}function Oa(r,t){return rs(r,t).canonicalString()}function rs(r,t){const e=(function(i){return new G(["projects",i.projectId,"databases",i.database])})(r).child("documents");return t===void 0?e:e.child(t)}function La(r){const t=G.fromString(r);return X(ja(t),10190,{key:t.toString()}),t}function jr(r,t){const e=La(t);if(e.get(1)!==r.databaseId.projectId)throw new b(P.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+e.get(1)+" vs "+r.databaseId.projectId);if(e.get(3)!==r.databaseId.database)throw new b(P.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+e.get(3)+" vs "+r.databaseId.database);return new x(Fa(e))}function Ma(r,t){return Oa(r.databaseId,t)}function _h(r){const t=La(r);return t.length===4?G.emptyPath():Fa(t)}function vo(r){return new G(["projects",r.databaseId.projectId,"databases",r.databaseId.database]).canonicalString()}function Fa(r){return X(r.length>4&&r.get(4)==="documents",29091,{key:r.toString()}),r.popFirst(5)}function yh(r,t){let e;if("targetChange"in t){t.targetChange;const n=(function(f){return f==="NO_CHANGE"?0:f==="ADD"?1:f==="REMOVE"?2:f==="CURRENT"?3:f==="RESET"?4:M(39313,{state:f})})(t.targetChange.targetChangeType||"NO_CHANGE"),i=t.targetChange.targetIds||[],o=(function(f,g){return f.useProto3Json?(X(g===void 0||typeof g=="string",58123),ht.fromBase64String(g||"")):(X(g===void 0||g instanceof Buffer||g instanceof Uint8Array,16193),ht.fromUint8Array(g||new Uint8Array))})(r,t.targetChange.resumeToken),u=t.targetChange.cause,h=u&&(function(f){const g=f.code===void 0?P.UNKNOWN:Da(f.code);return new b(g,f.message||"")})(u);e=new ka(n,i,o,h||null)}else if("documentChange"in t){t.documentChange;const n=t.documentChange;n.document,n.document.name,n.document.updateTime;const i=jr(r,n.document.name),o=Te(n.document.updateTime),u=n.document.createTime?Te(n.document.createTime):L.min(),h=new Pt({mapValue:{fields:n.document.fields}}),d=_t.newFoundDocument(i,o,u,h),f=n.targetIds||[],g=n.removedTargetIds||[];e=new zn(f,g,d.key,d)}else if("documentDelete"in t){t.documentDelete;const n=t.documentDelete;n.document;const i=jr(r,n.document),o=n.readTime?Te(n.readTime):L.min(),u=_t.newNoDocument(i,o),h=n.removedTargetIds||[];e=new zn([],h,u.key,u)}else if("documentRemove"in t){t.documentRemove;const n=t.documentRemove;n.document;const i=jr(r,n.document),o=n.removedTargetIds||[];e=new zn([],o,i,null)}else{if(!("filter"in t))return M(11601,{At:t});{t.filter;const n=t.filter;n.targetId;const{count:i=0,unchangedNames:o}=n,u=new hh(i,o),h=n.targetId;e=new Na(h,u)}}return e}function Eh(r,t){return{documents:[Ma(r,t.path)]}}function Th(r,t){const e={structuredQuery:{}},n=t.path;let i;t.collectionGroup!==null?(i=n,e.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(i=n.popLast(),e.structuredQuery.from=[{collectionId:n.lastSegment()}]),e.parent=Ma(r,i);const o=(function(f){if(f.length!==0)return qa(Rt.create(f,"and"))})(t.filters);o&&(e.structuredQuery.where=o);const u=(function(f){if(f.length!==0)return f.map((g=>(function(R){return{field:ye(R.field),direction:Ah(R.dir)}})(g)))})(t.orderBy);u&&(e.structuredQuery.orderBy=u);const h=es(r,t.limit);return h!==null&&(e.structuredQuery.limit=h),t.startAt&&(e.structuredQuery.startAt=(function(f){return{before:f.inclusive,values:f.position}})(t.startAt)),t.endAt&&(e.structuredQuery.endAt=(function(f){return{before:!f.inclusive,values:f.position}})(t.endAt)),{Vt:e,parent:i}}function vh(r){let t=_h(r.parent);const e=r.structuredQuery,n=e.from?e.from.length:0;let i=null;if(n>0){X(n===1,65062);const g=e.from[0];g.allDescendants?i=g.collectionId:t=t.child(g.collectionId)}let o=[];e.where&&(o=(function(I){const R=Ua(I);return R instanceof Rt&&ga(R)?R.getFilters():[R]})(e.where));let u=[];e.orderBy&&(u=(function(I){return I.map((R=>(function(N){return new hn(Ee(N.field),(function(k){switch(k){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(N.direction))})(R)))})(e.orderBy));let h=null;e.limit&&(h=(function(I){let R;return R=typeof I=="object"?I.value:I,rr(R)?null:R})(e.limit));let d=null;e.startAt&&(d=(function(I){const R=!!I.before,S=I.values||[];return new Hn(S,R)})(e.startAt));let f=null;return e.endAt&&(f=(function(I){const R=!I.before,S=I.values||[];return new Hn(S,R)})(e.endAt)),Kl(t,i,u,o,h,"F",d,f)}function Ih(r,t){const e=(function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return M(28987,{purpose:i})}})(t.purpose);return e==null?null:{"goog-listen-tags":e}}function Ua(r){return r.unaryFilter!==void 0?(function(e){switch(e.unaryFilter.op){case"IS_NAN":const n=Ee(e.unaryFilter.field);return et.create(n,"==",{doubleValue:NaN});case"IS_NULL":const i=Ee(e.unaryFilter.field);return et.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const o=Ee(e.unaryFilter.field);return et.create(o,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const u=Ee(e.unaryFilter.field);return et.create(u,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return M(61313);default:return M(60726)}})(r):r.fieldFilter!==void 0?(function(e){return et.create(Ee(e.fieldFilter.field),(function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return M(58110);default:return M(50506)}})(e.fieldFilter.op),e.fieldFilter.value)})(r):r.compositeFilter!==void 0?(function(e){return Rt.create(e.compositeFilter.filters.map((n=>Ua(n))),(function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return M(1026)}})(e.compositeFilter.op))})(r):M(30097,{filter:r})}function Ah(r){return fh[r]}function wh(r){return mh[r]}function Rh(r){return ph[r]}function ye(r){return{fieldPath:r.canonicalString()}}function Ee(r){return yt.fromServerFormat(r.fieldPath)}function qa(r){return r instanceof et?(function(e){if(e.op==="=="){if(ao(e.value))return{unaryFilter:{field:ye(e.field),op:"IS_NAN"}};if(oo(e.value))return{unaryFilter:{field:ye(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(ao(e.value))return{unaryFilter:{field:ye(e.field),op:"IS_NOT_NAN"}};if(oo(e.value))return{unaryFilter:{field:ye(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:ye(e.field),op:wh(e.op),value:e.value}}})(r):r instanceof Rt?(function(e){const n=e.getFilters().map((i=>qa(i)));return n.length===1?n[0]:{compositeFilter:{op:Rh(e.op),filters:n}}})(r):M(54877,{filter:r})}function ja(r){return r.length>=4&&r.get(0)==="projects"&&r.get(2)==="databases"}/**
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
 */class zt{constructor(t,e,n,i,o=L.min(),u=L.min(),h=ht.EMPTY_BYTE_STRING,d=null){this.target=t,this.targetId=e,this.purpose=n,this.sequenceNumber=i,this.snapshotVersion=o,this.lastLimboFreeSnapshotVersion=u,this.resumeToken=h,this.expectedCount=d}withSequenceNumber(t){return new zt(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,e){return new zt(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new zt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new zt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
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
 */class Vh{constructor(t){this.gt=t}}function Ph(r){const t=vh({parent:r.parent,structuredQuery:r.structuredQuery});return r.limitType==="LAST"?Jr(t,t.limit,"L"):t}/**
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
 */class Sh{constructor(){this.Dn=new Ch}addToCollectionParentIndex(t,e){return this.Dn.add(e),V.resolve()}getCollectionParents(t,e){return V.resolve(this.Dn.getEntries(e))}addFieldIndex(t,e){return V.resolve()}deleteFieldIndex(t,e){return V.resolve()}deleteAllFieldIndexes(t){return V.resolve()}createTargetIndexes(t,e){return V.resolve()}getDocumentsMatchingTarget(t,e){return V.resolve(null)}getIndexType(t,e){return V.resolve(0)}getFieldIndexes(t,e){return V.resolve([])}getNextCollectionGroupToUpdate(t){return V.resolve(null)}getMinOffset(t,e){return V.resolve(Wt.min())}getMinOffsetFromCollectionGroup(t,e){return V.resolve(Wt.min())}updateCollectionGroup(t,e,n){return V.resolve()}updateIndexEntries(t,e){return V.resolve()}}class Ch{constructor(){this.index={}}add(t){const e=t.lastSegment(),n=t.popLast(),i=this.index[e]||new st(G.comparator),o=!i.has(n);return this.index[e]=i.add(n),o}has(t){const e=t.lastSegment(),n=t.popLast(),i=this.index[e];return i&&i.has(n)}getEntries(t){return(this.index[t]||new st(G.comparator)).toArray()}}/**
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
 */const Io={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},Ba=41943040;class vt{static withCacheSize(t){return new vt(t,vt.DEFAULT_COLLECTION_PERCENTILE,vt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(t,e,n){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=e,this.maximumSequenceNumbersToCollect=n}}/**
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
 */vt.DEFAULT_COLLECTION_PERCENTILE=10,vt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,vt.DEFAULT=new vt(Ba,vt.DEFAULT_COLLECTION_PERCENTILE,vt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),vt.DISABLED=new vt(-1,0,0);/**
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
 */class Ve{constructor(t){this._r=t}next(){return this._r+=2,this._r}static ar(){return new Ve(0)}static ur(){return new Ve(-1)}}/**
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
 */const Ao="LruGarbageCollector",bh=1048576;function wo([r,t],[e,n]){const i=F(r,e);return i===0?F(t,n):i}class Dh{constructor(t){this.Tr=t,this.buffer=new st(wo),this.Ir=0}dr(){return++this.Ir}Er(t){const e=[t,this.dr()];if(this.buffer.size<this.Tr)this.buffer=this.buffer.add(e);else{const n=this.buffer.last();wo(e,n)<0&&(this.buffer=this.buffer.delete(n).add(e))}}get maxValue(){return this.buffer.last()[0]}}class Nh{constructor(t,e,n){this.garbageCollector=t,this.asyncQueue=e,this.localStore=n,this.Ar=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Rr(6e4)}stop(){this.Ar&&(this.Ar.cancel(),this.Ar=null)}get started(){return this.Ar!==null}Rr(t){D(Ao,`Garbage collection scheduled in ${t}ms`),this.Ar=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",t,(async()=>{this.Ar=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(e){be(e)?D(Ao,"Ignoring IndexedDB error during garbage collection: ",e):await er(e)}await this.Rr(3e5)}))}}class kh{constructor(t,e){this.Vr=t,this.params=e}calculateTargetCount(t,e){return this.Vr.mr(t).next((n=>Math.floor(e/100*n)))}nthSequenceNumber(t,e){if(e===0)return V.resolve(nr.ue);const n=new Dh(e);return this.Vr.forEachTarget(t,(i=>n.Er(i.sequenceNumber))).next((()=>this.Vr.gr(t,(i=>n.Er(i))))).next((()=>n.maxValue))}removeTargets(t,e,n){return this.Vr.removeTargets(t,e,n)}removeOrphanedDocuments(t,e){return this.Vr.removeOrphanedDocuments(t,e)}collect(t,e){return this.params.cacheSizeCollectionThreshold===-1?(D("LruGarbageCollector","Garbage collection skipped; disabled"),V.resolve(Io)):this.getCacheSize(t).next((n=>n<this.params.cacheSizeCollectionThreshold?(D("LruGarbageCollector",`Garbage collection skipped; Cache size ${n} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Io):this.pr(t,e)))}getCacheSize(t){return this.Vr.getCacheSize(t)}pr(t,e){let n,i,o,u,h,d,f;const g=Date.now();return this.calculateTargetCount(t,this.params.percentileToCollect).next((I=>(I>this.params.maximumSequenceNumbersToCollect?(D("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${I}`),i=this.params.maximumSequenceNumbersToCollect):i=I,u=Date.now(),this.nthSequenceNumber(t,i)))).next((I=>(n=I,h=Date.now(),this.removeTargets(t,n,e)))).next((I=>(o=I,d=Date.now(),this.removeOrphanedDocuments(t,n)))).next((I=>(f=Date.now(),ge()<=Lt.DEBUG&&D("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${u-g}ms
	Determined least recently used ${i} in `+(h-u)+`ms
	Removed ${o} targets in `+(d-h)+`ms
	Removed ${I} documents in `+(f-d)+`ms
Total Duration: ${f-g}ms`),V.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:o,documentsRemoved:I}))))}}function xh(r,t){return new kh(r,t)}/**
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
 */class Oh{constructor(){this.changes=new ce((t=>t.toString()),((t,e)=>t.isEqual(e))),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,_t.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const n=this.changes.get(e);return n!==void 0?V.resolve(n):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
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
 *//**
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
 */class Lh{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}/**
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
 */class Mh{constructor(t,e,n,i){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=n,this.indexManager=i}getDocument(t,e){let n=null;return this.documentOverlayCache.getOverlay(t,e).next((i=>(n=i,this.remoteDocumentCache.getEntry(t,e)))).next((i=>(n!==null&&sn(n.mutation,i,Bt.empty(),H.now()),i)))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next((n=>this.getLocalViewOfDocuments(t,n,j()).next((()=>n))))}getLocalViewOfDocuments(t,e,n=j()){const i=oe();return this.populateOverlays(t,i,e).next((()=>this.computeViews(t,e,i,n).next((o=>{let u=Je();return o.forEach(((h,d)=>{u=u.insert(h,d.overlayedDocument)})),u}))))}getOverlayedDocuments(t,e){const n=oe();return this.populateOverlays(t,n,e).next((()=>this.computeViews(t,e,n,j())))}populateOverlays(t,e,n){const i=[];return n.forEach((o=>{e.has(o)||i.push(o)})),this.documentOverlayCache.getOverlays(t,i).next((o=>{o.forEach(((u,h)=>{e.set(u,h)}))}))}computeViews(t,e,n,i){let o=Zt();const u=rn(),h=(function(){return rn()})();return e.forEach(((d,f)=>{const g=n.get(f.key);i.has(f.key)&&(g===void 0||g.mutation instanceof lr)?o=o.insert(f.key,f):g!==void 0?(u.set(f.key,g.mutation.getFieldMask()),sn(g.mutation,f,g.mutation.getFieldMask(),H.now())):u.set(f.key,Bt.empty())})),this.recalculateAndSaveOverlays(t,o).next((d=>(d.forEach(((f,g)=>u.set(f,g))),e.forEach(((f,g)=>{var I;return h.set(f,new Lh(g,(I=u.get(f))!==null&&I!==void 0?I:null))})),h)))}recalculateAndSaveOverlays(t,e){const n=rn();let i=new Z(((u,h)=>u-h)),o=j();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next((u=>{for(const h of u)h.keys().forEach((d=>{const f=e.get(d);if(f===null)return;let g=n.get(d)||Bt.empty();g=h.applyToLocalView(f,g),n.set(d,g);const I=(i.get(h.batchId)||j()).add(d);i=i.insert(h.batchId,I)}))})).next((()=>{const u=[],h=i.getReverseIterator();for(;h.hasNext();){const d=h.getNext(),f=d.key,g=d.value,I=wa();g.forEach((R=>{if(!o.has(R)){const S=Ca(e.get(R),n.get(R));S!==null&&I.set(R,S),o=o.add(R)}})),u.push(this.documentOverlayCache.saveOverlays(t,f,I))}return V.waitFor(u)})).next((()=>n))}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next((n=>this.recalculateAndSaveOverlays(t,n)))}getDocumentsMatchingQuery(t,e,n,i){return(function(u){return x.isDocumentKey(u.path)&&u.collectionGroup===null&&u.filters.length===0})(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):Ta(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,n,i):this.getDocumentsMatchingCollectionQuery(t,e,n,i)}getNextDocuments(t,e,n,i){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,n,i).next((o=>{const u=i-o.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,n.largestBatchId,i-o.size):V.resolve(oe());let h=on,d=o;return u.next((f=>V.forEach(f,((g,I)=>(h<I.largestBatchId&&(h=I.largestBatchId),o.get(g)?V.resolve():this.remoteDocumentCache.getEntry(t,g).next((R=>{d=d.insert(g,R)}))))).next((()=>this.populateOverlays(t,f,o))).next((()=>this.computeViews(t,d,f,j()))).next((g=>({batchId:h,changes:Yl(g)})))))}))}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new x(e)).next((n=>{let i=Je();return n.isFoundDocument()&&(i=i.insert(n.key,n)),i}))}getDocumentsMatchingCollectionGroupQuery(t,e,n,i){const o=e.collectionGroup;let u=Je();return this.indexManager.getCollectionParents(t,o).next((h=>V.forEach(h,(d=>{const f=(function(I,R){return new Ne(R,null,I.explicitOrderBy.slice(),I.filters.slice(),I.limit,I.limitType,I.startAt,I.endAt)})(e,d.child(o));return this.getDocumentsMatchingCollectionQuery(t,f,n,i).next((g=>{g.forEach(((I,R)=>{u=u.insert(I,R)}))}))})).next((()=>u))))}getDocumentsMatchingCollectionQuery(t,e,n,i){let o;return this.documentOverlayCache.getOverlaysForCollection(t,e.path,n.largestBatchId).next((u=>(o=u,this.remoteDocumentCache.getDocumentsMatchingQuery(t,e,n,o,i)))).next((u=>{o.forEach(((d,f)=>{const g=f.getKey();u.get(g)===null&&(u=u.insert(g,_t.newInvalidDocument(g)))}));let h=Je();return u.forEach(((d,f)=>{const g=o.get(d);g!==void 0&&sn(g.mutation,f,Bt.empty(),H.now()),ar(e,f)&&(h=h.insert(d,f))})),h}))}}/**
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
 */class Fh{constructor(t){this.serializer=t,this.Br=new Map,this.Lr=new Map}getBundleMetadata(t,e){return V.resolve(this.Br.get(e))}saveBundleMetadata(t,e){return this.Br.set(e.id,(function(i){return{id:i.id,version:i.version,createTime:Te(i.createTime)}})(e)),V.resolve()}getNamedQuery(t,e){return V.resolve(this.Lr.get(e))}saveNamedQuery(t,e){return this.Lr.set(e.name,(function(i){return{name:i.name,query:Ph(i.bundledQuery),readTime:Te(i.readTime)}})(e)),V.resolve()}}/**
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
 */class Uh{constructor(){this.overlays=new Z(x.comparator),this.kr=new Map}getOverlay(t,e){return V.resolve(this.overlays.get(e))}getOverlays(t,e){const n=oe();return V.forEach(e,(i=>this.getOverlay(t,i).next((o=>{o!==null&&n.set(i,o)})))).next((()=>n))}saveOverlays(t,e,n){return n.forEach(((i,o)=>{this.wt(t,e,o)})),V.resolve()}removeOverlaysForBatchId(t,e,n){const i=this.kr.get(n);return i!==void 0&&(i.forEach((o=>this.overlays=this.overlays.remove(o))),this.kr.delete(n)),V.resolve()}getOverlaysForCollection(t,e,n){const i=oe(),o=e.length+1,u=new x(e.child("")),h=this.overlays.getIteratorFrom(u);for(;h.hasNext();){const d=h.getNext().value,f=d.getKey();if(!e.isPrefixOf(f.path))break;f.path.length===o&&d.largestBatchId>n&&i.set(d.getKey(),d)}return V.resolve(i)}getOverlaysForCollectionGroup(t,e,n,i){let o=new Z(((f,g)=>f-g));const u=this.overlays.getIterator();for(;u.hasNext();){const f=u.getNext().value;if(f.getKey().getCollectionGroup()===e&&f.largestBatchId>n){let g=o.get(f.largestBatchId);g===null&&(g=oe(),o=o.insert(f.largestBatchId,g)),g.set(f.getKey(),f)}}const h=oe(),d=o.getIterator();for(;d.hasNext()&&(d.getNext().value.forEach(((f,g)=>h.set(f,g))),!(h.size()>=i)););return V.resolve(h)}wt(t,e,n){const i=this.overlays.get(n.key);if(i!==null){const u=this.kr.get(i.largestBatchId).delete(n.key);this.kr.set(i.largestBatchId,u)}this.overlays=this.overlays.insert(n.key,new lh(e,n));let o=this.kr.get(e);o===void 0&&(o=j(),this.kr.set(e,o)),this.kr.set(e,o.add(n.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qh{constructor(){this.sessionToken=ht.EMPTY_BYTE_STRING}getSessionToken(t){return V.resolve(this.sessionToken)}setSessionToken(t,e){return this.sessionToken=e,V.resolve()}}/**
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
 */class Ts{constructor(){this.qr=new st(ot.Qr),this.$r=new st(ot.Ur)}isEmpty(){return this.qr.isEmpty()}addReference(t,e){const n=new ot(t,e);this.qr=this.qr.add(n),this.$r=this.$r.add(n)}Kr(t,e){t.forEach((n=>this.addReference(n,e)))}removeReference(t,e){this.Wr(new ot(t,e))}Gr(t,e){t.forEach((n=>this.removeReference(n,e)))}zr(t){const e=new x(new G([])),n=new ot(e,t),i=new ot(e,t+1),o=[];return this.$r.forEachInRange([n,i],(u=>{this.Wr(u),o.push(u.key)})),o}jr(){this.qr.forEach((t=>this.Wr(t)))}Wr(t){this.qr=this.qr.delete(t),this.$r=this.$r.delete(t)}Jr(t){const e=new x(new G([])),n=new ot(e,t),i=new ot(e,t+1);let o=j();return this.$r.forEachInRange([n,i],(u=>{o=o.add(u.key)})),o}containsKey(t){const e=new ot(t,0),n=this.qr.firstAfterOrEqual(e);return n!==null&&t.isEqual(n.key)}}class ot{constructor(t,e){this.key=t,this.Hr=e}static Qr(t,e){return x.comparator(t.key,e.key)||F(t.Hr,e.Hr)}static Ur(t,e){return F(t.Hr,e.Hr)||x.comparator(t.key,e.key)}}/**
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
 */class jh{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.er=1,this.Yr=new st(ot.Qr)}checkEmpty(t){return V.resolve(this.mutationQueue.length===0)}addMutationBatch(t,e,n,i){const o=this.er;this.er++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const u=new uh(o,e,n,i);this.mutationQueue.push(u);for(const h of i)this.Yr=this.Yr.add(new ot(h.key,o)),this.indexManager.addToCollectionParentIndex(t,h.key.path.popLast());return V.resolve(u)}lookupMutationBatch(t,e){return V.resolve(this.Zr(e))}getNextMutationBatchAfterBatchId(t,e){const n=e+1,i=this.Xr(n),o=i<0?0:i;return V.resolve(this.mutationQueue.length>o?this.mutationQueue[o]:null)}getHighestUnacknowledgedBatchId(){return V.resolve(this.mutationQueue.length===0?Pl:this.er-1)}getAllMutationBatches(t){return V.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const n=new ot(e,0),i=new ot(e,Number.POSITIVE_INFINITY),o=[];return this.Yr.forEachInRange([n,i],(u=>{const h=this.Zr(u.Hr);o.push(h)})),V.resolve(o)}getAllMutationBatchesAffectingDocumentKeys(t,e){let n=new st(F);return e.forEach((i=>{const o=new ot(i,0),u=new ot(i,Number.POSITIVE_INFINITY);this.Yr.forEachInRange([o,u],(h=>{n=n.add(h.Hr)}))})),V.resolve(this.ei(n))}getAllMutationBatchesAffectingQuery(t,e){const n=e.path,i=n.length+1;let o=n;x.isDocumentKey(o)||(o=o.child(""));const u=new ot(new x(o),0);let h=new st(F);return this.Yr.forEachWhile((d=>{const f=d.key.path;return!!n.isPrefixOf(f)&&(f.length===i&&(h=h.add(d.Hr)),!0)}),u),V.resolve(this.ei(h))}ei(t){const e=[];return t.forEach((n=>{const i=this.Zr(n);i!==null&&e.push(i)})),e}removeMutationBatch(t,e){X(this.ti(e.batchId,"removed")===0,55003),this.mutationQueue.shift();let n=this.Yr;return V.forEach(e.mutations,(i=>{const o=new ot(i.key,e.batchId);return n=n.delete(o),this.referenceDelegate.markPotentiallyOrphaned(t,i.key)})).next((()=>{this.Yr=n}))}rr(t){}containsKey(t,e){const n=new ot(e,0),i=this.Yr.firstAfterOrEqual(n);return V.resolve(e.isEqual(i&&i.key))}performConsistencyCheck(t){return this.mutationQueue.length,V.resolve()}ti(t,e){return this.Xr(t)}Xr(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}Zr(t){const e=this.Xr(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}/**
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
 */class Bh{constructor(t){this.ni=t,this.docs=(function(){return new Z(x.comparator)})(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const n=e.key,i=this.docs.get(n),o=i?i.size:0,u=this.ni(e);return this.docs=this.docs.insert(n,{document:e.mutableCopy(),size:u}),this.size+=u-o,this.indexManager.addToCollectionParentIndex(t,n.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const n=this.docs.get(e);return V.resolve(n?n.document.mutableCopy():_t.newInvalidDocument(e))}getEntries(t,e){let n=Zt();return e.forEach((i=>{const o=this.docs.get(i);n=n.insert(i,o?o.document.mutableCopy():_t.newInvalidDocument(i))})),V.resolve(n)}getDocumentsMatchingQuery(t,e,n,i){let o=Zt();const u=e.path,h=new x(u.child("__id-9223372036854775808__")),d=this.docs.getIteratorFrom(h);for(;d.hasNext();){const{key:f,value:{document:g}}=d.getNext();if(!u.isPrefixOf(f.path))break;f.path.length>u.length+1||Al(Il(g),n)<=0||(i.has(g.key)||ar(e,g))&&(o=o.insert(g.key,g.mutableCopy()))}return V.resolve(o)}getAllFromCollectionGroup(t,e,n,i){M(9500)}ri(t,e){return V.forEach(this.docs,(n=>e(n)))}newChangeBuffer(t){return new zh(this)}getSize(t){return V.resolve(this.size)}}class zh extends Oh{constructor(t){super(),this.Or=t}applyChanges(t){const e=[];return this.changes.forEach(((n,i)=>{i.isValidDocument()?e.push(this.Or.addEntry(t,i)):this.Or.removeEntry(n)})),V.waitFor(e)}getFromCache(t,e){return this.Or.getEntry(t,e)}getAllFromCache(t,e){return this.Or.getEntries(t,e)}}/**
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
 */class $h{constructor(t){this.persistence=t,this.ii=new ce((e=>ms(e)),ps),this.lastRemoteSnapshotVersion=L.min(),this.highestTargetId=0,this.si=0,this.oi=new Ts,this.targetCount=0,this._i=Ve.ar()}forEachTarget(t,e){return this.ii.forEach(((n,i)=>e(i))),V.resolve()}getLastRemoteSnapshotVersion(t){return V.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return V.resolve(this.si)}allocateTargetId(t){return this.highestTargetId=this._i.next(),V.resolve(this.highestTargetId)}setTargetsMetadata(t,e,n){return n&&(this.lastRemoteSnapshotVersion=n),e>this.si&&(this.si=e),V.resolve()}hr(t){this.ii.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this._i=new Ve(e),this.highestTargetId=e),t.sequenceNumber>this.si&&(this.si=t.sequenceNumber)}addTargetData(t,e){return this.hr(e),this.targetCount+=1,V.resolve()}updateTargetData(t,e){return this.hr(e),V.resolve()}removeTargetData(t,e){return this.ii.delete(e.target),this.oi.zr(e.targetId),this.targetCount-=1,V.resolve()}removeTargets(t,e,n){let i=0;const o=[];return this.ii.forEach(((u,h)=>{h.sequenceNumber<=e&&n.get(h.targetId)===null&&(this.ii.delete(u),o.push(this.removeMatchingKeysForTargetId(t,h.targetId)),i++)})),V.waitFor(o).next((()=>i))}getTargetCount(t){return V.resolve(this.targetCount)}getTargetData(t,e){const n=this.ii.get(e)||null;return V.resolve(n)}addMatchingKeys(t,e,n){return this.oi.Kr(e,n),V.resolve()}removeMatchingKeys(t,e,n){this.oi.Gr(e,n);const i=this.persistence.referenceDelegate,o=[];return i&&e.forEach((u=>{o.push(i.markPotentiallyOrphaned(t,u))})),V.waitFor(o)}removeMatchingKeysForTargetId(t,e){return this.oi.zr(e),V.resolve()}getMatchingKeysForTargetId(t,e){const n=this.oi.Jr(e);return V.resolve(n)}containsKey(t,e){return V.resolve(this.oi.containsKey(e))}}/**
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
 */class za{constructor(t,e){this.ai={},this.overlays={},this.ui=new nr(0),this.ci=!1,this.ci=!0,this.li=new qh,this.referenceDelegate=t(this),this.hi=new $h(this),this.indexManager=new Sh,this.remoteDocumentCache=(function(i){return new Bh(i)})((n=>this.referenceDelegate.Pi(n))),this.serializer=new Vh(e),this.Ti=new Fh(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ci=!1,Promise.resolve()}get started(){return this.ci}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new Uh,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let n=this.ai[t.toKey()];return n||(n=new jh(e,this.referenceDelegate),this.ai[t.toKey()]=n),n}getGlobalsCache(){return this.li}getTargetCache(){return this.hi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ti}runTransaction(t,e,n){D("MemoryPersistence","Starting transaction:",t);const i=new Gh(this.ui.next());return this.referenceDelegate.Ii(),n(i).next((o=>this.referenceDelegate.di(i).next((()=>o)))).toPromise().then((o=>(i.raiseOnCommittedEvent(),o)))}Ei(t,e){return V.or(Object.values(this.ai).map((n=>()=>n.containsKey(t,e))))}}class Gh extends Rl{constructor(t){super(),this.currentSequenceNumber=t}}class vs{constructor(t){this.persistence=t,this.Ai=new Ts,this.Ri=null}static Vi(t){return new vs(t)}get mi(){if(this.Ri)return this.Ri;throw M(60996)}addReference(t,e,n){return this.Ai.addReference(n,e),this.mi.delete(n.toString()),V.resolve()}removeReference(t,e,n){return this.Ai.removeReference(n,e),this.mi.add(n.toString()),V.resolve()}markPotentiallyOrphaned(t,e){return this.mi.add(e.toString()),V.resolve()}removeTarget(t,e){this.Ai.zr(e.targetId).forEach((i=>this.mi.add(i.toString())));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(t,e.targetId).next((i=>{i.forEach((o=>this.mi.add(o.toString())))})).next((()=>n.removeTargetData(t,e)))}Ii(){this.Ri=new Set}di(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return V.forEach(this.mi,(n=>{const i=x.fromPath(n);return this.fi(t,i).next((o=>{o||e.removeEntry(i,L.min())}))})).next((()=>(this.Ri=null,e.apply(t))))}updateLimboDocument(t,e){return this.fi(t,e).next((n=>{n?this.mi.delete(e.toString()):this.mi.add(e.toString())}))}Pi(t){return 0}fi(t,e){return V.or([()=>V.resolve(this.Ai.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Ei(t,e)])}}class Yn{constructor(t,e){this.persistence=t,this.gi=new ce((n=>Cl(n.path)),((n,i)=>n.isEqual(i))),this.garbageCollector=xh(this,e)}static Vi(t,e){return new Yn(t,e)}Ii(){}di(t){return V.resolve()}forEachTarget(t,e){return this.persistence.getTargetCache().forEachTarget(t,e)}mr(t){const e=this.yr(t);return this.persistence.getTargetCache().getTargetCount(t).next((n=>e.next((i=>n+i))))}yr(t){let e=0;return this.gr(t,(n=>{e++})).next((()=>e))}gr(t,e){return V.forEach(this.gi,((n,i)=>this.Sr(t,n,i).next((o=>o?V.resolve():e(i)))))}removeTargets(t,e,n){return this.persistence.getTargetCache().removeTargets(t,e,n)}removeOrphanedDocuments(t,e){let n=0;const i=this.persistence.getRemoteDocumentCache(),o=i.newChangeBuffer();return i.ri(t,(u=>this.Sr(t,u,e).next((h=>{h||(n++,o.removeEntry(u,L.min()))})))).next((()=>o.apply(t))).next((()=>n))}markPotentiallyOrphaned(t,e){return this.gi.set(e,t.currentSequenceNumber),V.resolve()}removeTarget(t,e){const n=e.withSequenceNumber(t.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(t,n)}addReference(t,e,n){return this.gi.set(n,t.currentSequenceNumber),V.resolve()}removeReference(t,e,n){return this.gi.set(n,t.currentSequenceNumber),V.resolve()}updateLimboDocument(t,e){return this.gi.set(e,t.currentSequenceNumber),V.resolve()}Pi(t){let e=t.key.toString().length;return t.isFoundDocument()&&(e+=jn(t.data.value)),e}Sr(t,e,n){return V.or([()=>this.persistence.Ei(t,e),()=>this.persistence.getTargetCache().containsKey(t,e),()=>{const i=this.gi.get(e);return V.resolve(i!==void 0&&i>n)}])}getCacheSize(t){return this.persistence.getRemoteDocumentCache().getSize(t)}}/**
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
 */class Is{constructor(t,e,n,i){this.targetId=t,this.fromCache=e,this.Is=n,this.ds=i}static Es(t,e){let n=j(),i=j();for(const o of e.docChanges)switch(o.type){case 0:n=n.add(o.doc.key);break;case 1:i=i.add(o.doc.key)}return new Is(t,e.fromCache,n,i)}}/**
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
 */class Kh{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
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
 */class Qh{constructor(){this.As=!1,this.Rs=!1,this.Vs=100,this.fs=(function(){return ul()?8:Vl(ll())>0?6:4})()}initialize(t,e){this.gs=t,this.indexManager=e,this.As=!0}getDocumentsMatchingQuery(t,e,n,i){const o={result:null};return this.ps(t,e).next((u=>{o.result=u})).next((()=>{if(!o.result)return this.ys(t,e,i,n).next((u=>{o.result=u}))})).next((()=>{if(o.result)return;const u=new Kh;return this.ws(t,e,u).next((h=>{if(o.result=h,this.Rs)return this.Ss(t,e,u,h.size)}))})).next((()=>o.result))}Ss(t,e,n,i){return n.documentReadCount<this.Vs?(ge()<=Lt.DEBUG&&D("QueryEngine","SDK will not create cache indexes for query:",_e(e),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),V.resolve()):(ge()<=Lt.DEBUG&&D("QueryEngine","Query:",_e(e),"scans",n.documentReadCount,"local documents and returns",i,"documents as results."),n.documentReadCount>this.fs*i?(ge()<=Lt.DEBUG&&D("QueryEngine","The SDK decides to create cache indexes for query:",_e(e),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,St(e))):V.resolve())}ps(t,e){if(co(e))return V.resolve(null);let n=St(e);return this.indexManager.getIndexType(t,n).next((i=>i===0?null:(e.limit!==null&&i===1&&(e=Jr(e,null,"F"),n=St(e)),this.indexManager.getDocumentsMatchingTarget(t,n).next((o=>{const u=j(...o);return this.gs.getDocuments(t,u).next((h=>this.indexManager.getMinOffset(t,n).next((d=>{const f=this.bs(e,h);return this.Ds(e,f,u,d.readTime)?this.ps(t,Jr(e,null,"F")):this.vs(t,f,e,d)}))))})))))}ys(t,e,n,i){return co(e)||i.isEqual(L.min())?V.resolve(null):this.gs.getDocuments(t,n).next((o=>{const u=this.bs(e,o);return this.Ds(e,u,n,i)?V.resolve(null):(ge()<=Lt.DEBUG&&D("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),_e(e)),this.vs(t,u,e,vl(i,on)).next((h=>h)))}))}bs(t,e){let n=new st(Ia(t));return e.forEach(((i,o)=>{ar(t,o)&&(n=n.add(o))})),n}Ds(t,e,n,i){if(t.limit===null)return!1;if(n.size!==e.size)return!0;const o=t.limitType==="F"?e.last():e.first();return!!o&&(o.hasPendingWrites||o.version.compareTo(i)>0)}ws(t,e,n){return ge()<=Lt.DEBUG&&D("QueryEngine","Using full collection scan to execute query:",_e(e)),this.gs.getDocumentsMatchingQuery(t,e,Wt.min(),n)}vs(t,e,n,i){return this.gs.getDocumentsMatchingQuery(t,n,i).next((o=>(e.forEach((u=>{o=o.insert(u.key,u)})),o)))}}/**
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
 */const As="LocalStore",Hh=3e8;class Wh{constructor(t,e,n,i){this.persistence=t,this.Cs=e,this.serializer=i,this.Fs=new Z(F),this.Ms=new ce((o=>ms(o)),ps),this.xs=new Map,this.Os=t.getRemoteDocumentCache(),this.hi=t.getTargetCache(),this.Ti=t.getBundleCache(),this.Ns(n)}Ns(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new Mh(this.Os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Os.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(e=>t.collect(e,this.Fs)))}}function Xh(r,t,e,n){return new Wh(r,t,e,n)}async function $a(r,t){const e=q(r);return await e.persistence.runTransaction("Handle user change","readonly",(n=>{let i;return e.mutationQueue.getAllMutationBatches(n).next((o=>(i=o,e.Ns(t),e.mutationQueue.getAllMutationBatches(n)))).next((o=>{const u=[],h=[];let d=j();for(const f of i){u.push(f.batchId);for(const g of f.mutations)d=d.add(g.key)}for(const f of o){h.push(f.batchId);for(const g of f.mutations)d=d.add(g.key)}return e.localDocuments.getDocuments(n,d).next((f=>({Bs:f,removedBatchIds:u,addedBatchIds:h})))}))}))}function Ga(r){const t=q(r);return t.persistence.runTransaction("Get last remote snapshot version","readonly",(e=>t.hi.getLastRemoteSnapshotVersion(e)))}function Yh(r,t){const e=q(r),n=t.snapshotVersion;let i=e.Fs;return e.persistence.runTransaction("Apply remote event","readwrite-primary",(o=>{const u=e.Os.newChangeBuffer({trackRemovals:!0});i=e.Fs;const h=[];t.targetChanges.forEach(((g,I)=>{const R=i.get(I);if(!R)return;h.push(e.hi.removeMatchingKeys(o,g.removedDocuments,I).next((()=>e.hi.addMatchingKeys(o,g.addedDocuments,I))));let S=R.withSequenceNumber(o.currentSequenceNumber);t.targetMismatches.get(I)!==null?S=S.withResumeToken(ht.EMPTY_BYTE_STRING,L.min()).withLastLimboFreeSnapshotVersion(L.min()):g.resumeToken.approximateByteSize()>0&&(S=S.withResumeToken(g.resumeToken,n)),i=i.insert(I,S),(function(O,k,W){return O.resumeToken.approximateByteSize()===0||k.snapshotVersion.toMicroseconds()-O.snapshotVersion.toMicroseconds()>=Hh?!0:W.addedDocuments.size+W.modifiedDocuments.size+W.removedDocuments.size>0})(R,S,g)&&h.push(e.hi.updateTargetData(o,S))}));let d=Zt(),f=j();if(t.documentUpdates.forEach((g=>{t.resolvedLimboDocuments.has(g)&&h.push(e.persistence.referenceDelegate.updateLimboDocument(o,g))})),h.push(Jh(o,u,t.documentUpdates).next((g=>{d=g.Ls,f=g.ks}))),!n.isEqual(L.min())){const g=e.hi.getLastRemoteSnapshotVersion(o).next((I=>e.hi.setTargetsMetadata(o,o.currentSequenceNumber,n)));h.push(g)}return V.waitFor(h).next((()=>u.apply(o))).next((()=>e.localDocuments.getLocalViewOfDocuments(o,d,f))).next((()=>d))})).then((o=>(e.Fs=i,o)))}function Jh(r,t,e){let n=j(),i=j();return e.forEach((o=>n=n.add(o))),t.getEntries(r,n).next((o=>{let u=Zt();return e.forEach(((h,d)=>{const f=o.get(h);d.isFoundDocument()!==f.isFoundDocument()&&(i=i.add(h)),d.isNoDocument()&&d.version.isEqual(L.min())?(t.removeEntry(h,d.readTime),u=u.insert(h,d)):!f.isValidDocument()||d.version.compareTo(f.version)>0||d.version.compareTo(f.version)===0&&f.hasPendingWrites?(t.addEntry(d),u=u.insert(h,d)):D(As,"Ignoring outdated watch update for ",h,". Current version:",f.version," Watch version:",d.version)})),{Ls:u,ks:i}}))}function Zh(r,t){const e=q(r);return e.persistence.runTransaction("Allocate target","readwrite",(n=>{let i;return e.hi.getTargetData(n,t).next((o=>o?(i=o,V.resolve(i)):e.hi.allocateTargetId(n).next((u=>(i=new zt(t,u,"TargetPurposeListen",n.currentSequenceNumber),e.hi.addTargetData(n,i).next((()=>i)))))))})).then((n=>{const i=e.Fs.get(n.targetId);return(i===null||n.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(e.Fs=e.Fs.insert(n.targetId,n),e.Ms.set(t,n.targetId)),n}))}async function ss(r,t,e){const n=q(r),i=n.Fs.get(t),o=e?"readwrite":"readwrite-primary";try{e||await n.persistence.runTransaction("Release target",o,(u=>n.persistence.referenceDelegate.removeTarget(u,i)))}catch(u){if(!be(u))throw u;D(As,`Failed to update sequence numbers for target ${t}: ${u}`)}n.Fs=n.Fs.remove(t),n.Ms.delete(i.target)}function Ro(r,t,e){const n=q(r);let i=L.min(),o=j();return n.persistence.runTransaction("Execute query","readwrite",(u=>(function(d,f,g){const I=q(d),R=I.Ms.get(g);return R!==void 0?V.resolve(I.Fs.get(R)):I.hi.getTargetData(f,g)})(n,u,St(t)).next((h=>{if(h)return i=h.lastLimboFreeSnapshotVersion,n.hi.getMatchingKeysForTargetId(u,h.targetId).next((d=>{o=d}))})).next((()=>n.Cs.getDocumentsMatchingQuery(u,t,e?i:L.min(),e?o:j()))).next((h=>(tc(n,Hl(t),h),{documents:h,qs:o})))))}function tc(r,t,e){let n=r.xs.get(t)||L.min();e.forEach(((i,o)=>{o.readTime.compareTo(n)>0&&(n=o.readTime)})),r.xs.set(t,n)}class Vo{constructor(){this.activeTargetIds=th()}Gs(t){this.activeTargetIds=this.activeTargetIds.add(t)}zs(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Ws(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class ec{constructor(){this.Fo=new Vo,this.Mo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,n){}addLocalQueryTarget(t,e=!0){return e&&this.Fo.Gs(t),this.Mo[t]||"not-current"}updateQueryState(t,e,n){this.Mo[t]=e}removeLocalQueryTarget(t){this.Fo.zs(t)}isLocalQueryTarget(t){return this.Fo.activeTargetIds.has(t)}clearQueryState(t){delete this.Mo[t]}getAllActiveQueryTargets(){return this.Fo.activeTargetIds}isActiveQueryTarget(t){return this.Fo.activeTargetIds.has(t)}start(){return this.Fo=new Vo,Promise.resolve()}handleUserChange(t,e,n){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
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
 */class nc{xo(t){}shutdown(){}}/**
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
 */const Po="ConnectivityMonitor";class So{constructor(){this.Oo=()=>this.No(),this.Bo=()=>this.Lo(),this.ko=[],this.qo()}xo(t){this.ko.push(t)}shutdown(){window.removeEventListener("online",this.Oo),window.removeEventListener("offline",this.Bo)}qo(){window.addEventListener("online",this.Oo),window.addEventListener("offline",this.Bo)}No(){D(Po,"Network connectivity changed: AVAILABLE");for(const t of this.ko)t(0)}Lo(){D(Po,"Network connectivity changed: UNAVAILABLE");for(const t of this.ko)t(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Un=null;function is(){return Un===null?Un=(function(){return 268435456+Math.round(2147483648*Math.random())})():Un++,"0x"+Un.toString(16)}/**
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
 */const Br="RestConnection",rc={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class sc{get Qo(){return!1}constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const e=t.ssl?"https":"http",n=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.$o=e+"://"+t.host,this.Uo=`projects/${n}/databases/${i}`,this.Ko=this.databaseId.database===Kn?`project_id=${n}`:`project_id=${n}&database_id=${i}`}Wo(t,e,n,i,o){const u=is(),h=this.Go(t,e.toUriEncodedString());D(Br,`Sending RPC '${t}' ${u}:`,h,n);const d={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.Ko};this.zo(d,i,o);const{host:f}=new URL(h),g=Qo(f);return this.jo(t,h,d,n,g).then((I=>(D(Br,`Received RPC '${t}' ${u}: `,I),I)),(I=>{throw Ht(Br,`RPC '${t}' ${u} failed with error: `,I,"url: ",h,"request:",n),I}))}Jo(t,e,n,i,o,u){return this.Wo(t,e,n,i,o)}zo(t,e,n){t["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+Ce})(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),e&&e.headers.forEach(((i,o)=>t[o]=i)),n&&n.headers.forEach(((i,o)=>t[o]=i))}Go(t,e){const n=rc[t];return`${this.$o}/v1/${e}:${n}`}terminate(){}}/**
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
 */class ic{constructor(t){this.Ho=t.Ho,this.Yo=t.Yo}Zo(t){this.Xo=t}e_(t){this.t_=t}n_(t){this.r_=t}onMessage(t){this.i_=t}close(){this.Yo()}send(t){this.Ho(t)}s_(){this.Xo()}o_(){this.t_()}__(t){this.r_(t)}a_(t){this.i_(t)}}/**
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
 */const pt="WebChannelConnection";class oc extends sc{constructor(t){super(t),this.u_=[],this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}jo(t,e,n,i,o){const u=is();return new Promise(((h,d)=>{const f=new Wo;f.setWithCredentials(!0),f.listenOnce(Xo.COMPLETE,(()=>{try{switch(f.getLastErrorCode()){case qn.NO_ERROR:const I=f.getResponseJson();D(pt,`XHR for RPC '${t}' ${u} received:`,JSON.stringify(I)),h(I);break;case qn.TIMEOUT:D(pt,`RPC '${t}' ${u} timed out`),d(new b(P.DEADLINE_EXCEEDED,"Request time out"));break;case qn.HTTP_ERROR:const R=f.getStatus();if(D(pt,`RPC '${t}' ${u} failed with status:`,R,"response text:",f.getResponseText()),R>0){let S=f.getResponseJson();Array.isArray(S)&&(S=S[0]);const N=S==null?void 0:S.error;if(N&&N.status&&N.message){const O=(function(W){const $=W.toLowerCase().replace(/_/g,"-");return Object.values(P).indexOf($)>=0?$:P.UNKNOWN})(N.status);d(new b(O,N.message))}else d(new b(P.UNKNOWN,"Server responded with status "+f.getStatus()))}else d(new b(P.UNAVAILABLE,"Connection failed."));break;default:M(9055,{c_:t,streamId:u,l_:f.getLastErrorCode(),h_:f.getLastError()})}}finally{D(pt,`RPC '${t}' ${u} completed.`)}}));const g=JSON.stringify(i);D(pt,`RPC '${t}' ${u} sending request:`,i),f.send(e,"POST",g,n,15)}))}P_(t,e,n){const i=is(),o=[this.$o,"/","google.firestore.v1.Firestore","/",t,"/channel"],u=Zo(),h=Jo(),d={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},f=this.longPollingOptions.timeoutSeconds;f!==void 0&&(d.longPollingTimeout=Math.round(1e3*f)),this.useFetchStreams&&(d.useFetchStreams=!0),this.zo(d.initMessageHeaders,e,n),d.encodeInitMessageHeaders=!0;const g=o.join("");D(pt,`Creating RPC '${t}' stream ${i}: ${g}`,d);const I=u.createWebChannel(g,d);this.T_(I);let R=!1,S=!1;const N=new ic({Ho:k=>{S?D(pt,`Not sending because RPC '${t}' stream ${i} is closed:`,k):(R||(D(pt,`Opening RPC '${t}' stream ${i} transport.`),I.open(),R=!0),D(pt,`RPC '${t}' stream ${i} sending:`,k),I.send(k))},Yo:()=>I.close()}),O=(k,W,$)=>{k.listen(W,(Q=>{try{$(Q)}catch(it){setTimeout((()=>{throw it}),0)}}))};return O(I,Ye.EventType.OPEN,(()=>{S||(D(pt,`RPC '${t}' stream ${i} transport opened.`),N.s_())})),O(I,Ye.EventType.CLOSE,(()=>{S||(S=!0,D(pt,`RPC '${t}' stream ${i} transport closed`),N.__(),this.I_(I))})),O(I,Ye.EventType.ERROR,(k=>{S||(S=!0,Ht(pt,`RPC '${t}' stream ${i} transport errored. Name:`,k.name,"Message:",k.message),N.__(new b(P.UNAVAILABLE,"The operation could not be completed")))})),O(I,Ye.EventType.MESSAGE,(k=>{var W;if(!S){const $=k.data[0];X(!!$,16349);const Q=$,it=(Q==null?void 0:Q.error)||((W=Q[0])===null||W===void 0?void 0:W.error);if(it){D(pt,`RPC '${t}' stream ${i} received error:`,it);const Nt=it.status;let at=(function(_){const y=tt[_];if(y!==void 0)return Da(y)})(Nt),T=it.message;at===void 0&&(at=P.INTERNAL,T="Unknown error status: "+Nt+" with message "+it.message),S=!0,N.__(new b(at,T)),I.close()}else D(pt,`RPC '${t}' stream ${i} received:`,$),N.a_($)}})),O(h,Yo.STAT_EVENT,(k=>{k.stat===Gr.PROXY?D(pt,`RPC '${t}' stream ${i} detected buffering proxy`):k.stat===Gr.NOPROXY&&D(pt,`RPC '${t}' stream ${i} detected no buffering proxy`)})),setTimeout((()=>{N.o_()}),0),N}terminate(){this.u_.forEach((t=>t.close())),this.u_=[]}T_(t){this.u_.push(t)}I_(t){this.u_=this.u_.filter((e=>e===t))}}function zr(){return typeof document<"u"?document:null}/**
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
 */function cr(r){return new gh(r,!0)}/**
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
 */class Ka{constructor(t,e,n=1e3,i=1.5,o=6e4){this.Fi=t,this.timerId=e,this.d_=n,this.E_=i,this.A_=o,this.R_=0,this.V_=null,this.m_=Date.now(),this.reset()}reset(){this.R_=0}f_(){this.R_=this.A_}g_(t){this.cancel();const e=Math.floor(this.R_+this.p_()),n=Math.max(0,Date.now()-this.m_),i=Math.max(0,e-n);i>0&&D("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.R_} ms, delay with jitter: ${e} ms, last attempt: ${n} ms ago)`),this.V_=this.Fi.enqueueAfterDelay(this.timerId,i,(()=>(this.m_=Date.now(),t()))),this.R_*=this.E_,this.R_<this.d_&&(this.R_=this.d_),this.R_>this.A_&&(this.R_=this.A_)}y_(){this.V_!==null&&(this.V_.skipDelay(),this.V_=null)}cancel(){this.V_!==null&&(this.V_.cancel(),this.V_=null)}p_(){return(Math.random()-.5)*this.R_}}/**
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
 */const Co="PersistentStream";class ac{constructor(t,e,n,i,o,u,h,d){this.Fi=t,this.w_=n,this.S_=i,this.connection=o,this.authCredentialsProvider=u,this.appCheckCredentialsProvider=h,this.listener=d,this.state=0,this.b_=0,this.D_=null,this.v_=null,this.stream=null,this.C_=0,this.F_=new Ka(t,e)}M_(){return this.state===1||this.state===5||this.x_()}x_(){return this.state===2||this.state===3}start(){this.C_=0,this.state!==4?this.auth():this.O_()}async stop(){this.M_()&&await this.close(0)}N_(){this.state=0,this.F_.reset()}B_(){this.x_()&&this.D_===null&&(this.D_=this.Fi.enqueueAfterDelay(this.w_,6e4,(()=>this.L_())))}k_(t){this.q_(),this.stream.send(t)}async L_(){if(this.x_())return this.close(0)}q_(){this.D_&&(this.D_.cancel(),this.D_=null)}Q_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(t,e){this.q_(),this.Q_(),this.F_.cancel(),this.b_++,t!==4?this.F_.reset():e&&e.code===P.RESOURCE_EXHAUSTED?(Mt(e.toString()),Mt("Using maximum backoff delay to prevent overloading the backend."),this.F_.f_()):e&&e.code===P.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.U_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.n_(e)}U_(){}auth(){this.state=1;const t=this.K_(this.b_),e=this.b_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([n,i])=>{this.b_===e&&this.W_(n,i)}),(n=>{t((()=>{const i=new b(P.UNKNOWN,"Fetching auth token failed: "+n.message);return this.G_(i)}))}))}W_(t,e){const n=this.K_(this.b_);this.stream=this.z_(t,e),this.stream.Zo((()=>{n((()=>this.listener.Zo()))})),this.stream.e_((()=>{n((()=>(this.state=2,this.v_=this.Fi.enqueueAfterDelay(this.S_,1e4,(()=>(this.x_()&&(this.state=3),Promise.resolve()))),this.listener.e_())))})),this.stream.n_((i=>{n((()=>this.G_(i)))})),this.stream.onMessage((i=>{n((()=>++this.C_==1?this.j_(i):this.onNext(i)))}))}O_(){this.state=5,this.F_.g_((async()=>{this.state=0,this.start()}))}G_(t){return D(Co,`close with error: ${t}`),this.stream=null,this.close(4,t)}K_(t){return e=>{this.Fi.enqueueAndForget((()=>this.b_===t?e():(D(Co,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class uc extends ac{constructor(t,e,n,i,o,u){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,n,i,u),this.serializer=o}z_(t,e){return this.connection.P_("Listen",t,e)}j_(t){return this.onNext(t)}onNext(t){this.F_.reset();const e=yh(this.serializer,t),n=(function(o){if(!("targetChange"in o))return L.min();const u=o.targetChange;return u.targetIds&&u.targetIds.length?L.min():u.readTime?Te(u.readTime):L.min()})(t);return this.listener.J_(e,n)}H_(t){const e={};e.database=vo(this.serializer),e.addTarget=(function(o,u){let h;const d=u.target;if(h=Xr(d)?{documents:Eh(o,d)}:{query:Th(o,d).Vt},h.targetId=u.targetId,u.resumeToken.approximateByteSize()>0){h.resumeToken=xa(o,u.resumeToken);const f=es(o,u.expectedCount);f!==null&&(h.expectedCount=f)}else if(u.snapshotVersion.compareTo(L.min())>0){h.readTime=ns(o,u.snapshotVersion.toTimestamp());const f=es(o,u.expectedCount);f!==null&&(h.expectedCount=f)}return h})(this.serializer,t);const n=Ih(this.serializer,t);n&&(e.labels=n),this.k_(e)}Y_(t){const e={};e.database=vo(this.serializer),e.removeTarget=t,this.k_(e)}}/**
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
 */class lc{}class hc extends lc{constructor(t,e,n,i){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=n,this.serializer=i,this.ra=!1}ia(){if(this.ra)throw new b(P.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(t,e,n,i){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([o,u])=>this.connection.Wo(t,rs(e,n),i,o,u))).catch((o=>{throw o.name==="FirebaseError"?(o.code===P.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new b(P.UNKNOWN,o.toString())}))}Jo(t,e,n,i,o){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([u,h])=>this.connection.Jo(t,rs(e,n),i,u,h,o))).catch((u=>{throw u.name==="FirebaseError"?(u.code===P.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),u):new b(P.UNKNOWN,u.toString())}))}terminate(){this.ra=!0,this.connection.terminate()}}class cc{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.sa=0,this.oa=null,this._a=!0}aa(){this.sa===0&&(this.ua("Unknown"),this.oa=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.oa=null,this.ca("Backend didn't respond within 10 seconds."),this.ua("Offline"),Promise.resolve()))))}la(t){this.state==="Online"?this.ua("Unknown"):(this.sa++,this.sa>=1&&(this.ha(),this.ca(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.ua("Offline")))}set(t){this.ha(),this.sa=0,t==="Online"&&(this._a=!1),this.ua(t)}ua(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}ca(t){const e=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this._a?(Mt(e),this._a=!1):D("OnlineStateTracker",e)}ha(){this.oa!==null&&(this.oa.cancel(),this.oa=null)}}/**
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
 */const Pe="RemoteStore";class dc{constructor(t,e,n,i,o){this.localStore=t,this.datastore=e,this.asyncQueue=n,this.remoteSyncer={},this.Pa=[],this.Ta=new Map,this.Ia=new Set,this.da=[],this.Ea=o,this.Ea.xo((u=>{n.enqueueAndForget((async()=>{pn(this)&&(D(Pe,"Restarting streams for network reachability change."),await(async function(d){const f=q(d);f.Ia.add(4),await mn(f),f.Aa.set("Unknown"),f.Ia.delete(4),await dr(f)})(this))}))})),this.Aa=new cc(n,i)}}async function dr(r){if(pn(r))for(const t of r.da)await t(!0)}async function mn(r){for(const t of r.da)await t(!1)}function Qa(r,t){const e=q(r);e.Ta.has(t.targetId)||(e.Ta.set(t.targetId,t),Ps(e)?Vs(e):ke(e).x_()&&Rs(e,t))}function ws(r,t){const e=q(r),n=ke(e);e.Ta.delete(t),n.x_()&&Ha(e,t),e.Ta.size===0&&(n.x_()?n.B_():pn(e)&&e.Aa.set("Unknown"))}function Rs(r,t){if(r.Ra.$e(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(L.min())>0){const e=r.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(e)}ke(r).H_(t)}function Ha(r,t){r.Ra.$e(t),ke(r).Y_(t)}function Vs(r){r.Ra=new dh({getRemoteKeysForTarget:t=>r.remoteSyncer.getRemoteKeysForTarget(t),Et:t=>r.Ta.get(t)||null,lt:()=>r.datastore.serializer.databaseId}),ke(r).start(),r.Aa.aa()}function Ps(r){return pn(r)&&!ke(r).M_()&&r.Ta.size>0}function pn(r){return q(r).Ia.size===0}function Wa(r){r.Ra=void 0}async function fc(r){r.Aa.set("Online")}async function mc(r){r.Ta.forEach(((t,e)=>{Rs(r,t)}))}async function pc(r,t){Wa(r),Ps(r)?(r.Aa.la(t),Vs(r)):r.Aa.set("Unknown")}async function gc(r,t,e){if(r.Aa.set("Online"),t instanceof ka&&t.state===2&&t.cause)try{await(async function(i,o){const u=o.cause;for(const h of o.targetIds)i.Ta.has(h)&&(await i.remoteSyncer.rejectListen(h,u),i.Ta.delete(h),i.Ra.removeTarget(h))})(r,t)}catch(n){D(Pe,"Failed to remove targets %s: %s ",t.targetIds.join(","),n),await bo(r,n)}else if(t instanceof zn?r.Ra.Ye(t):t instanceof Na?r.Ra.it(t):r.Ra.et(t),!e.isEqual(L.min()))try{const n=await Ga(r.localStore);e.compareTo(n)>=0&&await(function(o,u){const h=o.Ra.Pt(u);return h.targetChanges.forEach(((d,f)=>{if(d.resumeToken.approximateByteSize()>0){const g=o.Ta.get(f);g&&o.Ta.set(f,g.withResumeToken(d.resumeToken,u))}})),h.targetMismatches.forEach(((d,f)=>{const g=o.Ta.get(d);if(!g)return;o.Ta.set(d,g.withResumeToken(ht.EMPTY_BYTE_STRING,g.snapshotVersion)),Ha(o,d);const I=new zt(g.target,d,f,g.sequenceNumber);Rs(o,I)})),o.remoteSyncer.applyRemoteEvent(h)})(r,e)}catch(n){D(Pe,"Failed to raise snapshot:",n),await bo(r,n)}}async function bo(r,t,e){if(!be(t))throw t;r.Ia.add(1),await mn(r),r.Aa.set("Offline"),e||(e=()=>Ga(r.localStore)),r.asyncQueue.enqueueRetryable((async()=>{D(Pe,"Retrying IndexedDB access"),await e(),r.Ia.delete(1),await dr(r)}))}async function Do(r,t){const e=q(r);e.asyncQueue.verifyOperationInProgress(),D(Pe,"RemoteStore received new credentials");const n=pn(e);e.Ia.add(3),await mn(e),n&&e.Aa.set("Unknown"),await e.remoteSyncer.handleCredentialChange(t),e.Ia.delete(3),await dr(e)}async function _c(r,t){const e=q(r);t?(e.Ia.delete(2),await dr(e)):t||(e.Ia.add(2),await mn(e),e.Aa.set("Unknown"))}function ke(r){return r.Va||(r.Va=(function(e,n,i){const o=q(e);return o.ia(),new uc(n,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,i)})(r.datastore,r.asyncQueue,{Zo:fc.bind(null,r),e_:mc.bind(null,r),n_:pc.bind(null,r),J_:gc.bind(null,r)}),r.da.push((async t=>{t?(r.Va.N_(),Ps(r)?Vs(r):r.Aa.set("Unknown")):(await r.Va.stop(),Wa(r))}))),r.Va}/**
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
 */class Ss{constructor(t,e,n,i,o){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=n,this.op=i,this.removalCallback=o,this.deferred=new Gt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((u=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(t,e,n,i,o){const u=Date.now()+n,h=new Ss(t,e,u,i,o);return h.start(n),h}start(t){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new b(P.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((t=>this.deferred.resolve(t)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Xa(r,t){if(Mt("AsyncQueue",`${t}: ${r}`),be(r))return new b(P.UNAVAILABLE,`${t}: ${r}`);throw r}/**
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
 */class ve{static emptySet(t){return new ve(t.comparator)}constructor(t){this.comparator=t?(e,n)=>t(e,n)||x.comparator(e.key,n.key):(e,n)=>x.comparator(e.key,n.key),this.keyedMap=Je(),this.sortedSet=new Z(this.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal(((e,n)=>(t(e),!1)))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof ve)||this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),n=t.sortedSet.getIterator();for(;e.hasNext();){const i=e.getNext().key,o=n.getNext().key;if(!i.isEqual(o))return!1}return!0}toString(){const t=[];return this.forEach((e=>{t.push(e.toString())})),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,e){const n=new ve;return n.comparator=this.comparator,n.keyedMap=t,n.sortedSet=e,n}}/**
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
 */class No{constructor(){this.fa=new Z(x.comparator)}track(t){const e=t.doc.key,n=this.fa.get(e);n?t.type!==0&&n.type===3?this.fa=this.fa.insert(e,t):t.type===3&&n.type!==1?this.fa=this.fa.insert(e,{type:n.type,doc:t.doc}):t.type===2&&n.type===2?this.fa=this.fa.insert(e,{type:2,doc:t.doc}):t.type===2&&n.type===0?this.fa=this.fa.insert(e,{type:0,doc:t.doc}):t.type===1&&n.type===0?this.fa=this.fa.remove(e):t.type===1&&n.type===2?this.fa=this.fa.insert(e,{type:1,doc:n.doc}):t.type===0&&n.type===1?this.fa=this.fa.insert(e,{type:2,doc:t.doc}):M(63341,{At:t,ga:n}):this.fa=this.fa.insert(e,t)}pa(){const t=[];return this.fa.inorderTraversal(((e,n)=>{t.push(n)})),t}}class Se{constructor(t,e,n,i,o,u,h,d,f){this.query=t,this.docs=e,this.oldDocs=n,this.docChanges=i,this.mutatedKeys=o,this.fromCache=u,this.syncStateChanged=h,this.excludesMetadataChanges=d,this.hasCachedResults=f}static fromInitialDocuments(t,e,n,i,o){const u=[];return e.forEach((h=>{u.push({type:0,doc:h})})),new Se(t,e,ve.emptySet(e),u,n,i,!0,!1,o)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&or(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,n=t.docChanges;if(e.length!==n.length)return!1;for(let i=0;i<e.length;i++)if(e[i].type!==n[i].type||!e[i].doc.isEqual(n[i].doc))return!1;return!0}}/**
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
 */class yc{constructor(){this.ya=void 0,this.wa=[]}Sa(){return this.wa.some((t=>t.ba()))}}class Ec{constructor(){this.queries=ko(),this.onlineState="Unknown",this.Da=new Set}terminate(){(function(e,n){const i=q(e),o=i.queries;i.queries=ko(),o.forEach(((u,h)=>{for(const d of h.wa)d.onError(n)}))})(this,new b(P.ABORTED,"Firestore shutting down"))}}function ko(){return new ce((r=>va(r)),or)}async function Cs(r,t){const e=q(r);let n=3;const i=t.query;let o=e.queries.get(i);o?!o.Sa()&&t.ba()&&(n=2):(o=new yc,n=t.ba()?0:1);try{switch(n){case 0:o.ya=await e.onListen(i,!0);break;case 1:o.ya=await e.onListen(i,!1);break;case 2:await e.onFirstRemoteStoreListen(i)}}catch(u){const h=Xa(u,`Initialization of query '${_e(t.query)}' failed`);return void t.onError(h)}e.queries.set(i,o),o.wa.push(t),t.va(e.onlineState),o.ya&&t.Ca(o.ya)&&Ds(e)}async function bs(r,t){const e=q(r),n=t.query;let i=3;const o=e.queries.get(n);if(o){const u=o.wa.indexOf(t);u>=0&&(o.wa.splice(u,1),o.wa.length===0?i=t.ba()?0:1:!o.Sa()&&t.ba()&&(i=2))}switch(i){case 0:return e.queries.delete(n),e.onUnlisten(n,!0);case 1:return e.queries.delete(n),e.onUnlisten(n,!1);case 2:return e.onLastRemoteStoreUnlisten(n);default:return}}function Tc(r,t){const e=q(r);let n=!1;for(const i of t){const o=i.query,u=e.queries.get(o);if(u){for(const h of u.wa)h.Ca(i)&&(n=!0);u.ya=i}}n&&Ds(e)}function vc(r,t,e){const n=q(r),i=n.queries.get(t);if(i)for(const o of i.wa)o.onError(e);n.queries.delete(t)}function Ds(r){r.Da.forEach((t=>{t.next()}))}var os,xo;(xo=os||(os={})).Fa="default",xo.Cache="cache";class Ns{constructor(t,e,n){this.query=t,this.Ma=e,this.xa=!1,this.Oa=null,this.onlineState="Unknown",this.options=n||{}}Ca(t){if(!this.options.includeMetadataChanges){const n=[];for(const i of t.docChanges)i.type!==3&&n.push(i);t=new Se(t.query,t.docs,t.oldDocs,n,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let e=!1;return this.xa?this.Na(t)&&(this.Ma.next(t),e=!0):this.Ba(t,this.onlineState)&&(this.La(t),e=!0),this.Oa=t,e}onError(t){this.Ma.error(t)}va(t){this.onlineState=t;let e=!1;return this.Oa&&!this.xa&&this.Ba(this.Oa,t)&&(this.La(this.Oa),e=!0),e}Ba(t,e){if(!t.fromCache||!this.ba())return!0;const n=e!=="Offline";return(!this.options.ka||!n)&&(!t.docs.isEmpty()||t.hasCachedResults||e==="Offline")}Na(t){if(t.docChanges.length>0)return!0;const e=this.Oa&&this.Oa.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&this.options.includeMetadataChanges===!0}La(t){t=Se.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.xa=!0,this.Ma.next(t)}ba(){return this.options.source!==os.Cache}}/**
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
 */class Ya{constructor(t){this.key=t}}class Ja{constructor(t){this.key=t}}class Ic{constructor(t,e){this.query=t,this.Ha=e,this.Ya=null,this.hasCachedResults=!1,this.current=!1,this.Za=j(),this.mutatedKeys=j(),this.Xa=Ia(t),this.eu=new ve(this.Xa)}get tu(){return this.Ha}nu(t,e){const n=e?e.ru:new No,i=e?e.eu:this.eu;let o=e?e.mutatedKeys:this.mutatedKeys,u=i,h=!1;const d=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,f=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(t.inorderTraversal(((g,I)=>{const R=i.get(g),S=ar(this.query,I)?I:null,N=!!R&&this.mutatedKeys.has(R.key),O=!!S&&(S.hasLocalMutations||this.mutatedKeys.has(S.key)&&S.hasCommittedMutations);let k=!1;R&&S?R.data.isEqual(S.data)?N!==O&&(n.track({type:3,doc:S}),k=!0):this.iu(R,S)||(n.track({type:2,doc:S}),k=!0,(d&&this.Xa(S,d)>0||f&&this.Xa(S,f)<0)&&(h=!0)):!R&&S?(n.track({type:0,doc:S}),k=!0):R&&!S&&(n.track({type:1,doc:R}),k=!0,(d||f)&&(h=!0)),k&&(S?(u=u.add(S),o=O?o.add(g):o.delete(g)):(u=u.delete(g),o=o.delete(g)))})),this.query.limit!==null)for(;u.size>this.query.limit;){const g=this.query.limitType==="F"?u.last():u.first();u=u.delete(g.key),o=o.delete(g.key),n.track({type:1,doc:g})}return{eu:u,ru:n,Ds:h,mutatedKeys:o}}iu(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,n,i){const o=this.eu;this.eu=t.eu,this.mutatedKeys=t.mutatedKeys;const u=t.ru.pa();u.sort(((g,I)=>(function(S,N){const O=k=>{switch(k){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return M(20277,{At:k})}};return O(S)-O(N)})(g.type,I.type)||this.Xa(g.doc,I.doc))),this.su(n),i=i!=null&&i;const h=e&&!i?this.ou():[],d=this.Za.size===0&&this.current&&!i?1:0,f=d!==this.Ya;return this.Ya=d,u.length!==0||f?{snapshot:new Se(this.query,t.eu,o,u,t.mutatedKeys,d===0,f,!1,!!n&&n.resumeToken.approximateByteSize()>0),_u:h}:{_u:h}}va(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({eu:this.eu,ru:new No,mutatedKeys:this.mutatedKeys,Ds:!1},!1)):{_u:[]}}au(t){return!this.Ha.has(t)&&!!this.eu.has(t)&&!this.eu.get(t).hasLocalMutations}su(t){t&&(t.addedDocuments.forEach((e=>this.Ha=this.Ha.add(e))),t.modifiedDocuments.forEach((e=>{})),t.removedDocuments.forEach((e=>this.Ha=this.Ha.delete(e))),this.current=t.current)}ou(){if(!this.current)return[];const t=this.Za;this.Za=j(),this.eu.forEach((n=>{this.au(n.key)&&(this.Za=this.Za.add(n.key))}));const e=[];return t.forEach((n=>{this.Za.has(n)||e.push(new Ja(n))})),this.Za.forEach((n=>{t.has(n)||e.push(new Ya(n))})),e}uu(t){this.Ha=t.qs,this.Za=j();const e=this.nu(t.documents);return this.applyChanges(e,!0)}cu(){return Se.fromInitialDocuments(this.query,this.eu,this.mutatedKeys,this.Ya===0,this.hasCachedResults)}}const ks="SyncEngine";class Ac{constructor(t,e,n){this.query=t,this.targetId=e,this.view=n}}class wc{constructor(t){this.key=t,this.lu=!1}}class Rc{constructor(t,e,n,i,o,u){this.localStore=t,this.remoteStore=e,this.eventManager=n,this.sharedClientState=i,this.currentUser=o,this.maxConcurrentLimboResolutions=u,this.hu={},this.Pu=new ce((h=>va(h)),or),this.Tu=new Map,this.Iu=new Set,this.du=new Z(x.comparator),this.Eu=new Map,this.Au=new Ts,this.Ru={},this.Vu=new Map,this.mu=Ve.ur(),this.onlineState="Unknown",this.fu=void 0}get isPrimaryClient(){return this.fu===!0}}async function Vc(r,t,e=!0){const n=ru(r);let i;const o=n.Pu.get(t);return o?(n.sharedClientState.addLocalQueryTarget(o.targetId),i=o.view.cu()):i=await Za(n,t,e,!0),i}async function Pc(r,t){const e=ru(r);await Za(e,t,!0,!1)}async function Za(r,t,e,n){const i=await Zh(r.localStore,St(t)),o=i.targetId,u=r.sharedClientState.addLocalQueryTarget(o,e);let h;return n&&(h=await Sc(r,t,o,u==="current",i.resumeToken)),r.isPrimaryClient&&e&&Qa(r.remoteStore,i),h}async function Sc(r,t,e,n,i){r.gu=(I,R,S)=>(async function(O,k,W,$){let Q=k.view.nu(W);Q.Ds&&(Q=await Ro(O.localStore,k.query,!1).then((({documents:T})=>k.view.nu(T,Q))));const it=$&&$.targetChanges.get(k.targetId),Nt=$&&$.targetMismatches.get(k.targetId)!=null,at=k.view.applyChanges(Q,O.isPrimaryClient,it,Nt);return Lo(O,k.targetId,at._u),at.snapshot})(r,I,R,S);const o=await Ro(r.localStore,t,!0),u=new Ic(t,o.qs),h=u.nu(o.documents),d=fn.createSynthesizedTargetChangeForCurrentChange(e,n&&r.onlineState!=="Offline",i),f=u.applyChanges(h,r.isPrimaryClient,d);Lo(r,e,f._u);const g=new Ac(t,e,u);return r.Pu.set(t,g),r.Tu.has(e)?r.Tu.get(e).push(t):r.Tu.set(e,[t]),f.snapshot}async function Cc(r,t,e){const n=q(r),i=n.Pu.get(t),o=n.Tu.get(i.targetId);if(o.length>1)return n.Tu.set(i.targetId,o.filter((u=>!or(u,t)))),void n.Pu.delete(t);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(i.targetId),n.sharedClientState.isActiveQueryTarget(i.targetId)||await ss(n.localStore,i.targetId,!1).then((()=>{n.sharedClientState.clearQueryState(i.targetId),e&&ws(n.remoteStore,i.targetId),as(n,i.targetId)})).catch(er)):(as(n,i.targetId),await ss(n.localStore,i.targetId,!0))}async function bc(r,t){const e=q(r),n=e.Pu.get(t),i=e.Tu.get(n.targetId);e.isPrimaryClient&&i.length===1&&(e.sharedClientState.removeLocalQueryTarget(n.targetId),ws(e.remoteStore,n.targetId))}async function tu(r,t){const e=q(r);try{const n=await Yh(e.localStore,t);t.targetChanges.forEach(((i,o)=>{const u=e.Eu.get(o);u&&(X(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1,22616),i.addedDocuments.size>0?u.lu=!0:i.modifiedDocuments.size>0?X(u.lu,14607):i.removedDocuments.size>0&&(X(u.lu,42227),u.lu=!1))})),await nu(e,n,t)}catch(n){await er(n)}}function Oo(r,t,e){const n=q(r);if(n.isPrimaryClient&&e===0||!n.isPrimaryClient&&e===1){const i=[];n.Pu.forEach(((o,u)=>{const h=u.view.va(t);h.snapshot&&i.push(h.snapshot)})),(function(u,h){const d=q(u);d.onlineState=h;let f=!1;d.queries.forEach(((g,I)=>{for(const R of I.wa)R.va(h)&&(f=!0)})),f&&Ds(d)})(n.eventManager,t),i.length&&n.hu.J_(i),n.onlineState=t,n.isPrimaryClient&&n.sharedClientState.setOnlineState(t)}}async function Dc(r,t,e){const n=q(r);n.sharedClientState.updateQueryState(t,"rejected",e);const i=n.Eu.get(t),o=i&&i.key;if(o){let u=new Z(x.comparator);u=u.insert(o,_t.newNoDocument(o,L.min()));const h=j().add(o),d=new hr(L.min(),new Map,new Z(F),u,h);await tu(n,d),n.du=n.du.remove(o),n.Eu.delete(t),xs(n)}else await ss(n.localStore,t,!1).then((()=>as(n,t,e))).catch(er)}function as(r,t,e=null){r.sharedClientState.removeLocalQueryTarget(t);for(const n of r.Tu.get(t))r.Pu.delete(n),e&&r.hu.pu(n,e);r.Tu.delete(t),r.isPrimaryClient&&r.Au.zr(t).forEach((n=>{r.Au.containsKey(n)||eu(r,n)}))}function eu(r,t){r.Iu.delete(t.path.canonicalString());const e=r.du.get(t);e!==null&&(ws(r.remoteStore,e),r.du=r.du.remove(t),r.Eu.delete(e),xs(r))}function Lo(r,t,e){for(const n of e)n instanceof Ya?(r.Au.addReference(n.key,t),Nc(r,n)):n instanceof Ja?(D(ks,"Document no longer in limbo: "+n.key),r.Au.removeReference(n.key,t),r.Au.containsKey(n.key)||eu(r,n.key)):M(19791,{yu:n})}function Nc(r,t){const e=t.key,n=e.path.canonicalString();r.du.get(e)||r.Iu.has(n)||(D(ks,"New document in limbo: "+e),r.Iu.add(n),xs(r))}function xs(r){for(;r.Iu.size>0&&r.du.size<r.maxConcurrentLimboResolutions;){const t=r.Iu.values().next().value;r.Iu.delete(t);const e=new x(G.fromString(t)),n=r.mu.next();r.Eu.set(n,new wc(e)),r.du=r.du.insert(e,n),Qa(r.remoteStore,new zt(St(ir(e.path)),n,"TargetPurposeLimboResolution",nr.ue))}}async function nu(r,t,e){const n=q(r),i=[],o=[],u=[];n.Pu.isEmpty()||(n.Pu.forEach(((h,d)=>{u.push(n.gu(d,t,e).then((f=>{var g;if((f||e)&&n.isPrimaryClient){const I=f?!f.fromCache:(g=e==null?void 0:e.targetChanges.get(d.targetId))===null||g===void 0?void 0:g.current;n.sharedClientState.updateQueryState(d.targetId,I?"current":"not-current")}if(f){i.push(f);const I=Is.Es(d.targetId,f);o.push(I)}})))})),await Promise.all(u),n.hu.J_(i),await(async function(d,f){const g=q(d);try{await g.persistence.runTransaction("notifyLocalViewChanges","readwrite",(I=>V.forEach(f,(R=>V.forEach(R.Is,(S=>g.persistence.referenceDelegate.addReference(I,R.targetId,S))).next((()=>V.forEach(R.ds,(S=>g.persistence.referenceDelegate.removeReference(I,R.targetId,S)))))))))}catch(I){if(!be(I))throw I;D(As,"Failed to update sequence numbers: "+I)}for(const I of f){const R=I.targetId;if(!I.fromCache){const S=g.Fs.get(R),N=S.snapshotVersion,O=S.withLastLimboFreeSnapshotVersion(N);g.Fs=g.Fs.insert(R,O)}}})(n.localStore,o))}async function kc(r,t){const e=q(r);if(!e.currentUser.isEqual(t)){D(ks,"User change. New user:",t.toKey());const n=await $a(e.localStore,t);e.currentUser=t,(function(o,u){o.Vu.forEach((h=>{h.forEach((d=>{d.reject(new b(P.CANCELLED,u))}))})),o.Vu.clear()})(e,"'waitForPendingWrites' promise is rejected due to a user change."),e.sharedClientState.handleUserChange(t,n.removedBatchIds,n.addedBatchIds),await nu(e,n.Bs)}}function xc(r,t){const e=q(r),n=e.Eu.get(t);if(n&&n.lu)return j().add(n.key);{let i=j();const o=e.Tu.get(t);if(!o)return i;for(const u of o){const h=e.Pu.get(u);i=i.unionWith(h.view.tu)}return i}}function ru(r){const t=q(r);return t.remoteStore.remoteSyncer.applyRemoteEvent=tu.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=xc.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=Dc.bind(null,t),t.hu.J_=Tc.bind(null,t.eventManager),t.hu.pu=vc.bind(null,t.eventManager),t}class Jn{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(t){this.serializer=cr(t.databaseInfo.databaseId),this.sharedClientState=this.bu(t),this.persistence=this.Du(t),await this.persistence.start(),this.localStore=this.vu(t),this.gcScheduler=this.Cu(t,this.localStore),this.indexBackfillerScheduler=this.Fu(t,this.localStore)}Cu(t,e){return null}Fu(t,e){return null}vu(t){return Xh(this.persistence,new Qh,t.initialUser,this.serializer)}Du(t){return new za(vs.Vi,this.serializer)}bu(t){return new ec}async terminate(){var t,e;(t=this.gcScheduler)===null||t===void 0||t.stop(),(e=this.indexBackfillerScheduler)===null||e===void 0||e.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Jn.provider={build:()=>new Jn};class Oc extends Jn{constructor(t){super(),this.cacheSizeBytes=t}Cu(t,e){X(this.persistence.referenceDelegate instanceof Yn,46915);const n=this.persistence.referenceDelegate.garbageCollector;return new Nh(n,t.asyncQueue,e)}Du(t){const e=this.cacheSizeBytes!==void 0?vt.withCacheSize(this.cacheSizeBytes):vt.DEFAULT;return new za((n=>Yn.Vi(n,e)),this.serializer)}}class us{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=n=>Oo(this.syncEngine,n,1),this.remoteStore.remoteSyncer.handleCredentialChange=kc.bind(null,this.syncEngine),await _c(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return(function(){return new Ec})()}createDatastore(t){const e=cr(t.databaseInfo.databaseId),n=(function(o){return new oc(o)})(t.databaseInfo);return(function(o,u,h,d){return new hc(o,u,h,d)})(t.authCredentials,t.appCheckCredentials,n,e)}createRemoteStore(t){return(function(n,i,o,u,h){return new dc(n,i,o,u,h)})(this.localStore,this.datastore,t.asyncQueue,(e=>Oo(this.syncEngine,e,0)),(function(){return So.C()?new So:new nc})())}createSyncEngine(t,e){return(function(i,o,u,h,d,f,g){const I=new Rc(i,o,u,h,d,f);return g&&(I.fu=!0),I})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}async terminate(){var t,e;await(async function(i){const o=q(i);D(Pe,"RemoteStore shutting down."),o.Ia.add(5),await mn(o),o.Ea.shutdown(),o.Aa.set("Unknown")})(this.remoteStore),(t=this.datastore)===null||t===void 0||t.terminate(),(e=this.eventManager)===null||e===void 0||e.terminate()}}us.provider={build:()=>new us};/**
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
 *//**
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
 */class Os{constructor(t){this.observer=t,this.muted=!1}next(t){this.muted||this.observer.next&&this.xu(this.observer.next,t)}error(t){this.muted||(this.observer.error?this.xu(this.observer.error,t):Mt("Uncaught Error in snapshot listener:",t.toString()))}Ou(){this.muted=!0}xu(t,e){setTimeout((()=>{this.muted||t(e)}),0)}}/**
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
 */const te="FirestoreClient";class Lc{constructor(t,e,n,i,o){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=n,this.databaseInfo=i,this.user=gt.UNAUTHENTICATED,this.clientId=cs.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=o,this.authCredentials.start(n,(async u=>{D(te,"Received user=",u.uid),await this.authCredentialListener(u),this.user=u})),this.appCheckCredentials.start(n,(u=>(D(te,"Received new app check token=",u),this.appCheckCredentialListener(u,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}terminate(){this.asyncQueue.enterRestrictedMode();const t=new Gt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const n=Xa(e,"Failed to shutdown persistence");t.reject(n)}})),t.promise}}async function $r(r,t){r.asyncQueue.verifyOperationInProgress(),D(te,"Initializing OfflineComponentProvider");const e=r.configuration;await t.initialize(e);let n=e.initialUser;r.setCredentialChangeListener((async i=>{n.isEqual(i)||(await $a(t.localStore,i),n=i)})),t.persistence.setDatabaseDeletedListener((()=>{Ht("Terminating Firestore due to IndexedDb database deletion"),r.terminate().then((()=>{D("Terminating Firestore due to IndexedDb database deletion completed successfully")})).catch((i=>{Ht("Terminating Firestore due to IndexedDb database deletion failed",i)}))})),r._offlineComponents=t}async function Mo(r,t){r.asyncQueue.verifyOperationInProgress();const e=await Mc(r);D(te,"Initializing OnlineComponentProvider"),await t.initialize(e,r.configuration),r.setCredentialChangeListener((n=>Do(t.remoteStore,n))),r.setAppCheckTokenChangeListener(((n,i)=>Do(t.remoteStore,i))),r._onlineComponents=t}async function Mc(r){if(!r._offlineComponents)if(r._uninitializedComponentsProvider){D(te,"Using user provided OfflineComponentProvider");try{await $r(r,r._uninitializedComponentsProvider._offline)}catch(t){const e=t;if(!(function(i){return i.name==="FirebaseError"?i.code===P.FAILED_PRECONDITION||i.code===P.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11})(e))throw e;Ht("Error using user provided cache. Falling back to memory cache: "+e),await $r(r,new Jn)}}else D(te,"Using default OfflineComponentProvider"),await $r(r,new Oc(void 0));return r._offlineComponents}async function Fc(r){return r._onlineComponents||(r._uninitializedComponentsProvider?(D(te,"Using user provided OnlineComponentProvider"),await Mo(r,r._uninitializedComponentsProvider._online)):(D(te,"Using default OnlineComponentProvider"),await Mo(r,new us))),r._onlineComponents}async function Zn(r){const t=await Fc(r),e=t.eventManager;return e.onListen=Vc.bind(null,t.syncEngine),e.onUnlisten=Cc.bind(null,t.syncEngine),e.onFirstRemoteStoreListen=Pc.bind(null,t.syncEngine),e.onLastRemoteStoreUnlisten=bc.bind(null,t.syncEngine),e}function Uc(r,t,e={}){const n=new Gt;return r.asyncQueue.enqueueAndForget((async()=>(function(o,u,h,d,f){const g=new Os({next:R=>{g.Ou(),u.enqueueAndForget((()=>bs(o,I)));const S=R.docs.has(h);!S&&R.fromCache?f.reject(new b(P.UNAVAILABLE,"Failed to get document because the client is offline.")):S&&R.fromCache&&d&&d.source==="server"?f.reject(new b(P.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):f.resolve(R)},error:R=>f.reject(R)}),I=new Ns(ir(h.path),g,{includeMetadataChanges:!0,ka:!0});return Cs(o,I)})(await Zn(r),r.asyncQueue,t,e,n))),n.promise}function qc(r,t,e={}){const n=new Gt;return r.asyncQueue.enqueueAndForget((async()=>(function(o,u,h,d,f){const g=new Os({next:R=>{g.Ou(),u.enqueueAndForget((()=>bs(o,I))),R.fromCache&&d.source==="server"?f.reject(new b(P.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):f.resolve(R)},error:R=>f.reject(R)}),I=new Ns(h,g,{includeMetadataChanges:!0,ka:!0});return Cs(o,I)})(await Zn(r),r.asyncQueue,t,e,n))),n.promise}/**
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
 */function su(r){const t={};return r.timeoutSeconds!==void 0&&(t.timeoutSeconds=r.timeoutSeconds),t}/**
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
 */const Fo=new Map;/**
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
 */const iu="firestore.googleapis.com",Uo=!0;class qo{constructor(t){var e,n;if(t.host===void 0){if(t.ssl!==void 0)throw new b(P.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=iu,this.ssl=Uo}else this.host=t.host,this.ssl=(e=t.ssl)!==null&&e!==void 0?e:Uo;if(this.isUsingEmulator=t.emulatorOptions!==void 0,this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=Ba;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<bh)throw new b(P.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}Tl("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=su((n=t.experimentalLongPollingOptions)!==null&&n!==void 0?n:{}),(function(o){if(o.timeoutSeconds!==void 0){if(isNaN(o.timeoutSeconds))throw new b(P.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (must not be NaN)`);if(o.timeoutSeconds<5)throw new b(P.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (minimum allowed value is 5)`);if(o.timeoutSeconds>30)throw new b(P.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&(function(n,i){return n.timeoutSeconds===i.timeoutSeconds})(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class fr{constructor(t,e,n,i){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=n,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new qo({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new b(P.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(t){if(this._settingsFrozen)throw new b(P.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new qo(t),this._emulatorOptions=t.emulatorOptions||{},t.credentials!==void 0&&(this._authCredentials=(function(n){if(!n)return new cl;switch(n.type){case"firstParty":return new pl(n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new b(P.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(t.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(e){const n=Fo.get(e);n&&(D("ComponentProvider","Removing Datastore"),Fo.delete(e),n.terminate())})(this),Promise.resolve()}}function jc(r,t,e,n={}){var i;r=Kt(r,fr);const o=Qo(t),u=r._getSettings(),h=Object.assign(Object.assign({},u),{emulatorOptions:r._getEmulatorOptions()}),d=`${t}:${e}`;o&&(sl(`https://${d}`),il("Firestore",!0)),u.host!==iu&&u.host!==d&&Ht("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const f=Object.assign(Object.assign({},u),{host:d,ssl:o,emulatorOptions:n});if(!ol(f,h)&&(r._setSettings(f),n.mockUserToken)){let g,I;if(typeof n.mockUserToken=="string")g=n.mockUserToken,I=gt.MOCK_USER;else{g=al(n.mockUserToken,(i=r._app)===null||i===void 0?void 0:i.options.projectId);const R=n.mockUserToken.sub||n.mockUserToken.user_id;if(!R)throw new b(P.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");I=new gt(R)}r._authCredentials=new dl(new ea(g,I))}}/**
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
 */class ee{constructor(t,e,n){this.converter=e,this._query=n,this.type="query",this.firestore=t}withConverter(t){return new ee(this.firestore,t,this._query)}}class rt{constructor(t,e,n){this.converter=e,this._key=n,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Qt(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new rt(this.firestore,t,this._key)}toJSON(){return{type:rt._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(t,e,n){if(dn(e,rt._jsonSchema))return new rt(t,n||null,new x(G.fromString(e.referencePath)))}}rt._jsonSchemaVersion="firestore/documentReference/1.0",rt._jsonSchema={type:nt("string",rt._jsonSchemaVersion),referencePath:nt("string")};class Qt extends ee{constructor(t,e,n){super(t,e,ir(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new rt(this.firestore,null,new x(t))}withConverter(t){return new Qt(this.firestore,t,this._path)}}function nd(r,t,...e){if(r=Ie(r),ra("collection","path",t),r instanceof fr){const n=G.fromString(t,...e);return Yi(n),new Qt(r,null,n)}{if(!(r instanceof rt||r instanceof Qt))throw new b(P.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const n=r._path.child(G.fromString(t,...e));return Yi(n),new Qt(r.firestore,null,n)}}function rd(r,t,...e){if(r=Ie(r),arguments.length===1&&(t=cs.newId()),ra("doc","path",t),r instanceof fr){const n=G.fromString(t,...e);return Xi(n),new rt(r,null,new x(n))}{if(!(r instanceof rt||r instanceof Qt))throw new b(P.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const n=r._path.child(G.fromString(t,...e));return Xi(n),new rt(r.firestore,r instanceof Qt?r.converter:null,new x(n))}}/**
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
 */const jo="AsyncQueue";class Bo{constructor(t=Promise.resolve()){this.Zu=[],this.Xu=!1,this.ec=[],this.tc=null,this.nc=!1,this.rc=!1,this.sc=[],this.F_=new Ka(this,"async_queue_retry"),this.oc=()=>{const n=zr();n&&D(jo,"Visibility state changed to "+n.visibilityState),this.F_.y_()},this._c=t;const e=zr();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.oc)}get isShuttingDown(){return this.Xu}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.ac(),this.uc(t)}enterRestrictedMode(t){if(!this.Xu){this.Xu=!0,this.rc=t||!1;const e=zr();e&&typeof e.removeEventListener=="function"&&e.removeEventListener("visibilitychange",this.oc)}}enqueue(t){if(this.ac(),this.Xu)return new Promise((()=>{}));const e=new Gt;return this.uc((()=>this.Xu&&this.rc?Promise.resolve():(t().then(e.resolve,e.reject),e.promise))).then((()=>e.promise))}enqueueRetryable(t){this.enqueueAndForget((()=>(this.Zu.push(t),this.cc())))}async cc(){if(this.Zu.length!==0){try{await this.Zu[0](),this.Zu.shift(),this.F_.reset()}catch(t){if(!be(t))throw t;D(jo,"Operation failed with retryable error: "+t)}this.Zu.length>0&&this.F_.g_((()=>this.cc()))}}uc(t){const e=this._c.then((()=>(this.nc=!0,t().catch((n=>{throw this.tc=n,this.nc=!1,Mt("INTERNAL UNHANDLED ERROR: ",zo(n)),n})).then((n=>(this.nc=!1,n))))));return this._c=e,e}enqueueAfterDelay(t,e,n){this.ac(),this.sc.indexOf(t)>-1&&(e=0);const i=Ss.createAndSchedule(this,t,e,n,(o=>this.lc(o)));return this.ec.push(i),i}ac(){this.tc&&M(47125,{hc:zo(this.tc)})}verifyOperationInProgress(){}async Pc(){let t;do t=this._c,await t;while(t!==this._c)}Tc(t){for(const e of this.ec)if(e.timerId===t)return!0;return!1}Ic(t){return this.Pc().then((()=>{this.ec.sort(((e,n)=>e.targetTimeMs-n.targetTimeMs));for(const e of this.ec)if(e.skipDelay(),t!=="all"&&e.timerId===t)break;return this.Pc()}))}dc(t){this.sc.push(t)}lc(t){const e=this.ec.indexOf(t);this.ec.splice(e,1)}}function zo(r){let t=r.message||"";return r.stack&&(t=r.stack.includes(r.message)?r.stack:r.message+`
`+r.stack),t}/**
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
 */function $o(r){return(function(e,n){if(typeof e!="object"||e===null)return!1;const i=e;for(const o of n)if(o in i&&typeof i[o]=="function")return!0;return!1})(r,["next","error","complete"])}class cn extends fr{constructor(t,e,n,i){super(t,e,n,i),this.type="firestore",this._queue=new Bo,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const t=this._firestoreClient.terminate();this._queue=new Bo(t),this._firestoreClient=void 0,await t}}}function sd(r,t){const e=typeof r=="object"?r:el(),n=typeof r=="string"?r:Kn,i=nl(e,"firestore").getImmediate({identifier:n});if(!i._initialized){const o=rl("firestore");o&&jc(i,...o)}return i}function Ls(r){if(r._terminated)throw new b(P.FAILED_PRECONDITION,"The client has already been terminated.");return r._firestoreClient||Bc(r),r._firestoreClient}function Bc(r){var t,e,n;const i=r._freezeSettings(),o=(function(h,d,f,g){return new Nl(h,d,f,g.host,g.ssl,g.experimentalForceLongPolling,g.experimentalAutoDetectLongPolling,su(g.experimentalLongPollingOptions),g.useFetchStreams,g.isUsingEmulator)})(r._databaseId,((t=r._app)===null||t===void 0?void 0:t.options.appId)||"",r._persistenceKey,i);r._componentsProvider||!((e=i.localCache)===null||e===void 0)&&e._offlineComponentProvider&&(!((n=i.localCache)===null||n===void 0)&&n._onlineComponentProvider)&&(r._componentsProvider={_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider}),r._firestoreClient=new Lc(r._authCredentials,r._appCheckCredentials,r._queue,o,r._componentsProvider&&(function(h){const d=h==null?void 0:h._online.build();return{_offline:h==null?void 0:h._offline.build(d),_online:d}})(r._componentsProvider))}/**
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
 */class At{constructor(t){this._byteString=t}static fromBase64String(t){try{return new At(ht.fromBase64String(t))}catch(e){throw new b(P.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(t){return new At(ht.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}toJSON(){return{type:At._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(t){if(dn(t,At._jsonSchema))return At.fromBase64String(t.bytes)}}At._jsonSchemaVersion="firestore/bytes/1.0",At._jsonSchema={type:nt("string",At._jsonSchemaVersion),bytes:nt("string")};/**
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
 */class ou{constructor(...t){for(let e=0;e<t.length;++e)if(t[e].length===0)throw new b(P.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new yt(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
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
 */class au{constructor(t){this._methodName=t}}/**
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
 */class Ct{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new b(P.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new b(P.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}_compareTo(t){return F(this._lat,t._lat)||F(this._long,t._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Ct._jsonSchemaVersion}}static fromJSON(t){if(dn(t,Ct._jsonSchema))return new Ct(t.latitude,t.longitude)}}Ct._jsonSchemaVersion="firestore/geoPoint/1.0",Ct._jsonSchema={type:nt("string",Ct._jsonSchemaVersion),latitude:nt("number"),longitude:nt("number")};/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bt{constructor(t){this._values=(t||[]).map((e=>e))}toArray(){return this._values.map((t=>t))}isEqual(t){return(function(n,i){if(n.length!==i.length)return!1;for(let o=0;o<n.length;++o)if(n[o]!==i[o])return!1;return!0})(this._values,t._values)}toJSON(){return{type:bt._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(t){if(dn(t,bt._jsonSchema)){if(Array.isArray(t.vectorValues)&&t.vectorValues.every((e=>typeof e=="number")))return new bt(t.vectorValues);throw new b(P.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}bt._jsonSchemaVersion="firestore/vectorValue/1.0",bt._jsonSchema={type:nt("string",bt._jsonSchemaVersion),vectorValues:nt("object")};/**
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
 */const zc=/^__.*__$/;function uu(r){switch(r){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw M(40011,{Ec:r})}}class Ms{constructor(t,e,n,i,o,u){this.settings=t,this.databaseId=e,this.serializer=n,this.ignoreUndefinedProperties=i,o===void 0&&this.Ac(),this.fieldTransforms=o||[],this.fieldMask=u||[]}get path(){return this.settings.path}get Ec(){return this.settings.Ec}Rc(t){return new Ms(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Vc(t){var e;const n=(e=this.path)===null||e===void 0?void 0:e.child(t),i=this.Rc({path:n,mc:!1});return i.fc(t),i}gc(t){var e;const n=(e=this.path)===null||e===void 0?void 0:e.child(t),i=this.Rc({path:n,mc:!1});return i.Ac(),i}yc(t){return this.Rc({path:void 0,mc:!0})}wc(t){return ls(t,this.settings.methodName,this.settings.Sc||!1,this.path,this.settings.bc)}contains(t){return this.fieldMask.find((e=>t.isPrefixOf(e)))!==void 0||this.fieldTransforms.find((e=>t.isPrefixOf(e.field)))!==void 0}Ac(){if(this.path)for(let t=0;t<this.path.length;t++)this.fc(this.path.get(t))}fc(t){if(t.length===0)throw this.wc("Document fields must not be empty");if(uu(this.Ec)&&zc.test(t))throw this.wc('Document fields cannot begin and end with "__"')}}class $c{constructor(t,e,n){this.databaseId=t,this.ignoreUndefinedProperties=e,this.serializer=n||cr(t)}Dc(t,e,n,i=!1){return new Ms({Ec:t,methodName:e,bc:n,path:yt.emptyPath(),mc:!1,Sc:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Gc(r){const t=r._freezeSettings(),e=cr(r._databaseId);return new $c(r._databaseId,!!t.ignoreUndefinedProperties,e)}function Kc(r,t,e,n=!1){return Fs(e,r.Dc(n?4:3,t))}function Fs(r,t){if(lu(r=Ie(r)))return Hc("Unsupported field value:",t,r),Qc(r,t);if(r instanceof au)return(function(n,i){if(!uu(i.Ec))throw i.wc(`${n._methodName}() can only be used with update() and set()`);if(!i.path)throw i.wc(`${n._methodName}() is not currently supported inside arrays`);const o=n._toFieldTransform(i);o&&i.fieldTransforms.push(o)})(r,t),null;if(r===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),r instanceof Array){if(t.settings.mc&&t.Ec!==4)throw t.wc("Nested arrays are not supported");return(function(n,i){const o=[];let u=0;for(const h of n){let d=Fs(h,i.yc(u));d==null&&(d={nullValue:"NULL_VALUE"}),o.push(d),u++}return{arrayValue:{values:o}}})(r,t)}return(function(n,i){if((n=Ie(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return eh(i.serializer,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const o=H.fromDate(n);return{timestampValue:ns(i.serializer,o)}}if(n instanceof H){const o=new H(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:ns(i.serializer,o)}}if(n instanceof Ct)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof At)return{bytesValue:xa(i.serializer,n._byteString)};if(n instanceof rt){const o=i.databaseId,u=n.firestore._databaseId;if(!u.isEqual(o))throw i.wc(`Document reference is for database ${u.projectId}/${u.database} but should be for database ${o.projectId}/${o.database}`);return{referenceValue:Oa(n.firestore._databaseId||i.databaseId,n._key.path)}}if(n instanceof bt)return(function(u,h){return{mapValue:{fields:{[da]:{stringValue:fa},[Qn]:{arrayValue:{values:u.toArray().map((f=>{if(typeof f!="number")throw h.wc("VectorValues must only contain numeric values.");return gs(h.serializer,f)}))}}}}}})(n,i);throw i.wc(`Unsupported field value: ${tr(n)}`)})(r,t)}function Qc(r,t){const e={};return oa(r)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):De(r,((n,i)=>{const o=Fs(i,t.Vc(n));o!=null&&(e[n]=o)})),{mapValue:{fields:e}}}function lu(r){return!(typeof r!="object"||r===null||r instanceof Array||r instanceof Date||r instanceof H||r instanceof Ct||r instanceof At||r instanceof rt||r instanceof au||r instanceof bt)}function Hc(r,t,e){if(!lu(e)||!sa(e)){const n=tr(e);throw n==="an object"?t.wc(r+" a custom object"):t.wc(r+" "+n)}}const Wc=new RegExp("[~\\*/\\[\\]]");function Xc(r,t,e){if(t.search(Wc)>=0)throw ls(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,r,!1,void 0,e);try{return new ou(...t.split("."))._internalPath}catch{throw ls(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,r,!1,void 0,e)}}function ls(r,t,e,n,i){const o=n&&!n.isEmpty(),u=i!==void 0;let h=`Function ${t}() called with invalid data`;e&&(h+=" (via `toFirestore()`)"),h+=". ";let d="";return(o||u)&&(d+=" (found",o&&(d+=` in field ${n}`),u&&(d+=` in document ${i}`),d+=")"),new b(P.INVALID_ARGUMENT,h+r+d)}/**
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
 */class hu{constructor(t,e,n,i,o){this._firestore=t,this._userDataWriter=e,this._key=n,this._document=i,this._converter=o}get id(){return this._key.path.lastSegment()}get ref(){return new rt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new Yc(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(mr("DocumentSnapshot.get",t));if(e!==null)return this._userDataWriter.convertValue(e)}}}class Yc extends hu{data(){return super.data()}}function mr(r,t){return typeof t=="string"?Xc(r,t):t instanceof ou?t._internalPath:t._delegate._internalPath}/**
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
 */function cu(r){if(r.limitType==="L"&&r.explicitOrderBy.length===0)throw new b(P.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Us{}class du extends Us{}function id(r,t,...e){let n=[];t instanceof Us&&n.push(t),n=n.concat(e),(function(o){const u=o.filter((d=>d instanceof qs)).length,h=o.filter((d=>d instanceof pr)).length;if(u>1||u>0&&h>0)throw new b(P.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")})(n);for(const i of n)r=i._apply(r);return r}class pr extends du{constructor(t,e,n){super(),this._field=t,this._op=e,this._value=n,this.type="where"}static _create(t,e,n){return new pr(t,e,n)}_apply(t){const e=this._parse(t);return fu(t._query,e),new ee(t.firestore,t.converter,Yr(t._query,e))}_parse(t){const e=Gc(t.firestore);return(function(o,u,h,d,f,g,I){let R;if(f.isKeyField()){if(g==="array-contains"||g==="array-contains-any")throw new b(P.INVALID_ARGUMENT,`Invalid Query. You can't perform '${g}' queries on documentId().`);if(g==="in"||g==="not-in"){Ko(I,g);const N=[];for(const O of I)N.push(Go(d,o,O));R={arrayValue:{values:N}}}else R=Go(d,o,I)}else g!=="in"&&g!=="not-in"&&g!=="array-contains-any"||Ko(I,g),R=Kc(h,u,I,g==="in"||g==="not-in");return et.create(f,g,R)})(t._query,"where",e,t.firestore._databaseId,this._field,this._op,this._value)}}function od(r,t,e){const n=t,i=mr("where",r);return pr._create(i,n,e)}class qs extends Us{constructor(t,e){super(),this.type=t,this._queryConstraints=e}static _create(t,e){return new qs(t,e)}_parse(t){const e=this._queryConstraints.map((n=>n._parse(t))).filter((n=>n.getFilters().length>0));return e.length===1?e[0]:Rt.create(e,this._getOperator())}_apply(t){const e=this._parse(t);return e.getFilters().length===0?t:((function(i,o){let u=i;const h=o.getFlattenedFilters();for(const d of h)fu(u,d),u=Yr(u,d)})(t._query,e),new ee(t.firestore,t.converter,Yr(t._query,e)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class js extends du{constructor(t,e){super(),this._field=t,this._direction=e,this.type="orderBy"}static _create(t,e){return new js(t,e)}_apply(t){const e=(function(i,o,u){if(i.startAt!==null)throw new b(P.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(i.endAt!==null)throw new b(P.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new hn(o,u)})(t._query,this._field,this._direction);return new ee(t.firestore,t.converter,(function(i,o){const u=i.explicitOrderBy.concat([o]);return new Ne(i.path,i.collectionGroup,u,i.filters.slice(),i.limit,i.limitType,i.startAt,i.endAt)})(t._query,e))}}function ad(r,t="asc"){const e=t,n=mr("orderBy",r);return js._create(n,e)}function Go(r,t,e){if(typeof(e=Ie(e))=="string"){if(e==="")throw new b(P.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Ta(t)&&e.indexOf("/")!==-1)throw new b(P.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${e}' contains a '/' character.`);const n=t.path.child(G.fromString(e));if(!x.isDocumentKey(n))throw new b(P.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${n}' is not because it has an odd number of segments (${n.length}).`);return io(r,new x(n))}if(e instanceof rt)return io(r,e._key);throw new b(P.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${tr(e)}.`)}function Ko(r,t){if(!Array.isArray(r)||r.length===0)throw new b(P.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`)}function fu(r,t){const e=(function(i,o){for(const u of i)for(const h of u.getFlattenedFilters())if(o.indexOf(h.op)>=0)return h.op;return null})(r.filters,(function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}})(t.op));if(e!==null)throw e===t.op?new b(P.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${t.op.toString()}' filter.`):new b(P.INVALID_ARGUMENT,`Invalid query. You cannot use '${t.op.toString()}' filters with '${e.toString()}' filters.`)}class Jc{convertValue(t,e="none"){switch(Jt(t)){case 0:return null;case 1:return t.booleanValue;case 2:return J(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(Yt(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 11:return this.convertObject(t.mapValue,e);case 10:return this.convertVectorValue(t.mapValue);default:throw M(62114,{value:t})}}convertObject(t,e){return this.convertObjectMap(t.fields,e)}convertObjectMap(t,e="none"){const n={};return De(t,((i,o)=>{n[i]=this.convertValue(o,e)})),n}convertVectorValue(t){var e,n,i;const o=(i=(n=(e=t.fields)===null||e===void 0?void 0:e[Qn].arrayValue)===null||n===void 0?void 0:n.values)===null||i===void 0?void 0:i.map((u=>J(u.doubleValue)));return new bt(o)}convertGeoPoint(t){return new Ct(J(t.latitude),J(t.longitude))}convertArray(t,e){return(t.values||[]).map((n=>this.convertValue(n,e)))}convertServerTimestamp(t,e){switch(e){case"previous":const n=sr(t);return n==null?null:this.convertValue(n,e);case"estimate":return this.convertTimestamp(an(t));default:return null}}convertTimestamp(t){const e=Xt(t);return new H(e.seconds,e.nanos)}convertDocumentKey(t,e){const n=G.fromString(t);X(ja(n),9688,{name:t});const i=new un(n.get(1),n.get(3)),o=new x(n.popFirst(5));return i.isEqual(e)||Mt(`Document ${o} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),o}}class tn{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class ue extends hu{constructor(t,e,n,i,o,u){super(t,e,n,i,u),this._firestore=t,this._firestoreImpl=t,this.metadata=o}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new $n(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const n=this._document.data.field(mr("DocumentSnapshot.get",t));if(n!==null)return this._userDataWriter.convertValue(n,e.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new b(P.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const t=this._document,e={};return e.type=ue._jsonSchemaVersion,e.bundle="",e.bundleSource="DocumentSnapshot",e.bundleName=this._key.toString(),!t||!t.isValidDocument()||!t.isFoundDocument()?e:(this._userDataWriter.convertObjectMap(t.data.value.mapValue.fields,"previous"),e.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),e)}}ue._jsonSchemaVersion="firestore/documentSnapshot/1.0",ue._jsonSchema={type:nt("string",ue._jsonSchemaVersion),bundleSource:nt("string","DocumentSnapshot"),bundleName:nt("string"),bundle:nt("string")};class $n extends ue{data(t={}){return super.data(t)}}class le{constructor(t,e,n,i){this._firestore=t,this._userDataWriter=e,this._snapshot=i,this.metadata=new tn(i.hasPendingWrites,i.fromCache),this.query=n}get docs(){const t=[];return this.forEach((e=>t.push(e))),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,e){this._snapshot.docs.forEach((n=>{t.call(e,new $n(this._firestore,this._userDataWriter,n.key,n,new tn(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new b(P.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=(function(i,o){if(i._snapshot.oldDocs.isEmpty()){let u=0;return i._snapshot.docChanges.map((h=>{const d=new $n(i._firestore,i._userDataWriter,h.doc.key,h.doc,new tn(i._snapshot.mutatedKeys.has(h.doc.key),i._snapshot.fromCache),i.query.converter);return h.doc,{type:"added",doc:d,oldIndex:-1,newIndex:u++}}))}{let u=i._snapshot.oldDocs;return i._snapshot.docChanges.filter((h=>o||h.type!==3)).map((h=>{const d=new $n(i._firestore,i._userDataWriter,h.doc.key,h.doc,new tn(i._snapshot.mutatedKeys.has(h.doc.key),i._snapshot.fromCache),i.query.converter);let f=-1,g=-1;return h.type!==0&&(f=u.indexOf(h.doc.key),u=u.delete(h.doc.key)),h.type!==1&&(u=u.add(h.doc),g=u.indexOf(h.doc.key)),{type:Zc(h.type),doc:d,oldIndex:f,newIndex:g}}))}})(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new b(P.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const t={};t.type=le._jsonSchemaVersion,t.bundleSource="QuerySnapshot",t.bundleName=cs.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const e=[],n=[],i=[];return this.docs.forEach((o=>{o._document!==null&&(e.push(o._document),n.push(this._userDataWriter.convertObjectMap(o._document.data.value.mapValue.fields,"previous")),i.push(o.ref.path))})),t.bundle=(this._firestore,this.query._query,t.bundleName,"NOT SUPPORTED"),t}}function Zc(r){switch(r){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return M(61501,{type:r})}}/**
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
 */function ud(r){r=Kt(r,rt);const t=Kt(r.firestore,cn);return Uc(Ls(t),r._key).then((e=>mu(t,r,e)))}le._jsonSchemaVersion="firestore/querySnapshot/1.0",le._jsonSchema={type:nt("string",le._jsonSchemaVersion),bundleSource:nt("string","QuerySnapshot"),bundleName:nt("string"),bundle:nt("string")};class Bs extends Jc{constructor(t){super(),this.firestore=t}convertBytes(t){return new At(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new rt(this.firestore,null,e)}}function ld(r){r=Kt(r,ee);const t=Kt(r.firestore,cn),e=Ls(t),n=new Bs(t);return cu(r._query),qc(e,r._query).then((i=>new le(t,n,r,i)))}function hd(r,...t){var e,n,i;r=Ie(r);let o={includeMetadataChanges:!1,source:"default"},u=0;typeof t[u]!="object"||$o(t[u])||(o=t[u++]);const h={includeMetadataChanges:o.includeMetadataChanges,source:o.source};if($o(t[u])){const I=t[u];t[u]=(e=I.next)===null||e===void 0?void 0:e.bind(I),t[u+1]=(n=I.error)===null||n===void 0?void 0:n.bind(I),t[u+2]=(i=I.complete)===null||i===void 0?void 0:i.bind(I)}let d,f,g;if(r instanceof rt)f=Kt(r.firestore,cn),g=ir(r._key.path),d={next:I=>{t[u]&&t[u](mu(f,r,I))},error:t[u+1],complete:t[u+2]};else{const I=Kt(r,ee);f=Kt(I.firestore,cn),g=I._query;const R=new Bs(f);d={next:S=>{t[u]&&t[u](new le(f,R,I,S))},error:t[u+1],complete:t[u+2]},cu(r._query)}return(function(R,S,N,O){const k=new Os(O),W=new Ns(S,k,N);return R.asyncQueue.enqueueAndForget((async()=>Cs(await Zn(R),W))),()=>{k.Ou(),R.asyncQueue.enqueueAndForget((async()=>bs(await Zn(R),W)))}})(Ls(f),g,h,d)}function mu(r,t,e){const n=e.docs.get(t._key),i=new Bs(r);return new ue(r,i,t._key,n,new tn(e.hasPendingWrites,e.fromCache),t.converter)}(function(t,e=!0){(function(i){Ce=i})(hl),Yu(new Ju("firestore",((n,{instanceIdentifier:i,options:o})=>{const u=n.getProvider("app").getImmediate(),h=new cn(new fl(n.getProvider("auth-internal")),new gl(u,n.getProvider("app-check-internal")),(function(f,g){if(!Object.prototype.hasOwnProperty.apply(f.options,["projectId"]))throw new b(P.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new un(f.options.projectId,g)})(u,i),u);return o=Object.assign({useFetchStreams:e},o),h._setSettings(o),h}),"PUBLIC").setMultipleInstances(!0)),zi(Gi,Ki,t),zi(Gi,Ki,"esm2017")})();export{ud as a,ld as b,nd as c,rd as d,ad as e,sd as g,hd as o,id as q,od as w};
//# sourceMappingURL=firebase-firestore-CPlZS7BR.js.map
