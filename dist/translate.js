var _=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Sr(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var g,qe;function pe(){if(qe)return g;qe=1;var e=Array.isArray;return g=e,g}var y,Ce;function Rr(){if(Ce)return y;Ce=1;var e=typeof _=="object"&&_&&_.Object===Object&&_;return y=e,y}var b,me;function ge(){if(me)return b;me=1;var e=Rr(),r=typeof self=="object"&&self&&self.Object===Object&&self,t=e||r||Function("return this")();return b=t,b}var q,Se;function ye(){if(Se)return q;Se=1;var e=ge(),r=e.Symbol;return q=r,q}var C,Re;function Tr(){if(Re)return C;Re=1;var e=ye(),r=Object.prototype,t=r.hasOwnProperty,n=r.toString,i=e?e.toStringTag:void 0;function a(u){var o=t.call(u,i),s=u[i];try{u[i]=void 0;var c=!0}catch{}var f=n.call(u);return c&&(o?u[i]=s:delete u[i]),f}return C=a,C}var m,Te;function wr(){if(Te)return m;Te=1;var e=Object.prototype,r=e.toString;function t(n){return r.call(n)}return m=t,m}var S,we;function br(){if(we)return S;we=1;var e=ye(),r=Tr(),t=wr(),n="[object Null]",i="[object Undefined]",a=e?e.toStringTag:void 0;function u(o){return o==null?o===void 0?i:n:a&&a in Object(o)?r(o):t(o)}return S=u,S}var R,Oe;function Or(){if(Oe)return R;Oe=1;function e(r){return r!=null&&typeof r=="object"}return R=e,R}var T,je;function be(){if(je)return T;je=1;var e=br(),r=Or(),t="[object Symbol]";function n(i){return typeof i=="symbol"||r(i)&&e(i)==t}return T=n,T}var w,Ie;function jr(){if(Ie)return w;Ie=1;var e=pe(),r=be(),t=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,n=/^\w*$/;function i(a,u){if(e(a))return!1;var o=typeof a;return o=="number"||o=="symbol"||o=="boolean"||a==null||r(a)?!0:n.test(a)||!t.test(a)||u!=null&&a in Object(u)}return w=i,w}var O,Me;function qr(){if(Me)return O;Me=1;function e(r){var t=typeof r;return r!=null&&(t=="object"||t=="function")}return O=e,O}var j,Ge;function Ir(){if(Ge)return j;Ge=1;var e=br(),r=qr(),t="[object AsyncFunction]",n="[object Function]",i="[object GeneratorFunction]",a="[object Proxy]";function u(o){if(!r(o))return!1;var s=e(o);return s==n||s==i||s==t||s==a}return j=u,j}var I,Pe;function Mr(){if(Pe)return I;Pe=1;var e=ge(),r=e["__core-js_shared__"];return I=r,I}var M,De;function Gr(){if(De)return M;De=1;var e=Mr(),r=function(){var n=/[^.]+$/.exec(e&&e.keys&&e.keys.IE_PROTO||"");return n?"Symbol(src)_1."+n:""}();function t(n){return!!r&&r in n}return M=t,M}var G,He;function Pr(){if(He)return G;He=1;var e=Function.prototype,r=e.toString;function t(n){if(n!=null){try{return r.call(n)}catch{}try{return n+""}catch{}}return""}return G=t,G}var P,ze;function Dr(){if(ze)return P;ze=1;var e=Ir(),r=Gr(),t=qr(),n=Pr(),i=/[\\^$.*+?()[\]{}|]/g,a=/^\[object .+?Constructor\]$/,u=Function.prototype,o=Object.prototype,s=u.toString,c=o.hasOwnProperty,f=RegExp("^"+s.call(c).replace(i,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function h(l){if(!t(l)||r(l))return!1;var mr=e(l)?f:a;return mr.test(n(l))}return P=h,P}var D,Ee;function Hr(){if(Ee)return D;Ee=1;function e(r,t){return r==null?void 0:r[t]}return D=e,D}var H,xe;function Cr(){if(xe)return H;xe=1;var e=Dr(),r=Hr();function t(n,i){var a=r(n,i);return e(a)?a:void 0}return H=t,H}var z,Ne;function v(){if(Ne)return z;Ne=1;var e=Cr(),r=e(Object,"create");return z=r,z}var E,Fe;function zr(){if(Fe)return E;Fe=1;var e=v();function r(){this.__data__=e?e(null):{},this.size=0}return E=r,E}var x,Ae;function Er(){if(Ae)return x;Ae=1;function e(r){var t=this.has(r)&&delete this.__data__[r];return this.size-=t?1:0,t}return x=e,x}var N,Ke;function xr(){if(Ke)return N;Ke=1;var e=v(),r="__lodash_hash_undefined__",t=Object.prototype,n=t.hasOwnProperty;function i(a){var u=this.__data__;if(e){var o=u[a];return o===r?void 0:o}return n.call(u,a)?u[a]:void 0}return N=i,N}var F,Le;function Nr(){if(Le)return F;Le=1;var e=v(),r=Object.prototype,t=r.hasOwnProperty;function n(i){var a=this.__data__;return e?a[i]!==void 0:t.call(a,i)}return F=n,F}var A,$e;function Fr(){if($e)return A;$e=1;var e=v(),r="__lodash_hash_undefined__";function t(n,i){var a=this.__data__;return this.size+=this.has(n)?0:1,a[n]=e&&i===void 0?r:i,this}return A=t,A}var K,ke;function Ar(){if(ke)return K;ke=1;var e=zr(),r=Er(),t=xr(),n=Nr(),i=Fr();function a(u){var o=-1,s=u==null?0:u.length;for(this.clear();++o<s;){var c=u[o];this.set(c[0],c[1])}}return a.prototype.clear=e,a.prototype.delete=r,a.prototype.get=t,a.prototype.has=n,a.prototype.set=i,K=a,K}var L,Je;function Kr(){if(Je)return L;Je=1;function e(){this.__data__=[],this.size=0}return L=e,L}var $,Ve;function Lr(){if(Ve)return $;Ve=1;function e(r,t){return r===t||r!==r&&t!==t}return $=e,$}var k,Ue;function d(){if(Ue)return k;Ue=1;var e=Lr();function r(t,n){for(var i=t.length;i--;)if(e(t[i][0],n))return i;return-1}return k=r,k}var J,Xe;function $r(){if(Xe)return J;Xe=1;var e=d(),r=Array.prototype,t=r.splice;function n(i){var a=this.__data__,u=e(a,i);if(u<0)return!1;var o=a.length-1;return u==o?a.pop():t.call(a,u,1),--this.size,!0}return J=n,J}var V,Ye;function kr(){if(Ye)return V;Ye=1;var e=d();function r(t){var n=this.__data__,i=e(n,t);return i<0?void 0:n[i][1]}return V=r,V}var U,Ze;function Jr(){if(Ze)return U;Ze=1;var e=d();function r(t){return e(this.__data__,t)>-1}return U=r,U}var X,We;function Vr(){if(We)return X;We=1;var e=d();function r(t,n){var i=this.__data__,a=e(i,t);return a<0?(++this.size,i.push([t,n])):i[a][1]=n,this}return X=r,X}var Y,Be;function Ur(){if(Be)return Y;Be=1;var e=Kr(),r=$r(),t=kr(),n=Jr(),i=Vr();function a(u){var o=-1,s=u==null?0:u.length;for(this.clear();++o<s;){var c=u[o];this.set(c[0],c[1])}}return a.prototype.clear=e,a.prototype.delete=r,a.prototype.get=t,a.prototype.has=n,a.prototype.set=i,Y=a,Y}var Z,Qe;function Xr(){if(Qe)return Z;Qe=1;var e=Cr(),r=ge(),t=e(r,"Map");return Z=t,Z}var W,er;function Yr(){if(er)return W;er=1;var e=Ar(),r=Ur(),t=Xr();function n(){this.size=0,this.__data__={hash:new e,map:new(t||r),string:new e}}return W=n,W}var B,rr;function Zr(){if(rr)return B;rr=1;function e(r){var t=typeof r;return t=="string"||t=="number"||t=="symbol"||t=="boolean"?r!=="__proto__":r===null}return B=e,B}var Q,tr;function p(){if(tr)return Q;tr=1;var e=Zr();function r(t,n){var i=t.__data__;return e(n)?i[typeof n=="string"?"string":"hash"]:i.map}return Q=r,Q}var ee,ar;function Wr(){if(ar)return ee;ar=1;var e=p();function r(t){var n=e(this,t).delete(t);return this.size-=n?1:0,n}return ee=r,ee}var re,nr;function Br(){if(nr)return re;nr=1;var e=p();function r(t){return e(this,t).get(t)}return re=r,re}var te,ir;function Qr(){if(ir)return te;ir=1;var e=p();function r(t){return e(this,t).has(t)}return te=r,te}var ae,ur;function et(){if(ur)return ae;ur=1;var e=p();function r(t,n){var i=e(this,t),a=i.size;return i.set(t,n),this.size+=i.size==a?0:1,this}return ae=r,ae}var ne,or;function rt(){if(or)return ne;or=1;var e=Yr(),r=Wr(),t=Br(),n=Qr(),i=et();function a(u){var o=-1,s=u==null?0:u.length;for(this.clear();++o<s;){var c=u[o];this.set(c[0],c[1])}}return a.prototype.clear=e,a.prototype.delete=r,a.prototype.get=t,a.prototype.has=n,a.prototype.set=i,ne=a,ne}var ie,sr;function tt(){if(sr)return ie;sr=1;var e=rt(),r="Expected a function";function t(n,i){if(typeof n!="function"||i!=null&&typeof i!="function")throw new TypeError(r);var a=function(){var u=arguments,o=i?i.apply(this,u):u[0],s=a.cache;if(s.has(o))return s.get(o);var c=n.apply(this,u);return a.cache=s.set(o,c)||s,c};return a.cache=new(t.Cache||e),a}return t.Cache=e,ie=t,ie}var ue,cr;function at(){if(cr)return ue;cr=1;var e=tt(),r=500;function t(n){var i=e(n,function(u){return a.size===r&&a.clear(),u}),a=i.cache;return i}return ue=t,ue}var oe,hr;function nt(){if(hr)return oe;hr=1;var e=at(),r=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,t=/\\(\\)?/g,n=e(function(i){var a=[];return i.charCodeAt(0)===46&&a.push(""),i.replace(r,function(u,o,s,c){a.push(s?c.replace(t,"$1"):o||u)}),a});return oe=n,oe}var se,fr;function it(){if(fr)return se;fr=1;function e(r,t){for(var n=-1,i=r==null?0:r.length,a=Array(i);++n<i;)a[n]=t(r[n],n,r);return a}return se=e,se}var ce,lr;function ut(){if(lr)return ce;lr=1;var e=ye(),r=it(),t=pe(),n=be(),i=1/0,a=e?e.prototype:void 0,u=a?a.toString:void 0;function o(s){if(typeof s=="string")return s;if(t(s))return r(s,o)+"";if(n(s))return u?u.call(s):"";var c=s+"";return c=="0"&&1/s==-i?"-0":c}return ce=o,ce}var he,_r;function ot(){if(_r)return he;_r=1;var e=ut();function r(t){return t==null?"":e(t)}return he=r,he}var fe,vr;function st(){if(vr)return fe;vr=1;var e=pe(),r=jr(),t=nt(),n=ot();function i(a,u){return e(a)?a:r(a,u)?[a]:t(n(a))}return fe=i,fe}var le,dr;function ct(){if(dr)return le;dr=1;var e=be(),r=1/0;function t(n){if(typeof n=="string"||e(n))return n;var i=n+"";return i=="0"&&1/n==-r?"-0":i}return le=t,le}var _e,pr;function ht(){if(pr)return _e;pr=1;var e=st(),r=ct();function t(n,i){i=e(i,n);for(var a=0,u=i.length;n!=null&&a<u;)n=n[r(i[a++])];return a&&a==u?n:void 0}return _e=t,_e}var ve,gr;function ft(){if(gr)return ve;gr=1;var e=ht();function r(t,n,i){var a=t==null?void 0:e(t,n);return a===void 0?i:a}return ve=r,ve}var lt=ft();const yr=Sr(lt),de="en",_t=()=>document.documentElement.lang||de,vt=(e=16,r="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789")=>{let t="";const n=r.length;for(let i=0;i<e;i++){const a=Math.floor(Math.random()*n);t+=r[a]}return t},dt=e=>e&&typeof e=="object"&&e.$$typeof===Symbol.for("react.element");window.trans=window.translate=window.__=function(e,r){const t=e.substr(0,e.indexOf(".")),n=e,i=_t();(!t||!window.i18n[i].__possible_keys.includes(t)&&!window.i18n[de].__possible_keys.includes(t))&&(e="__global."+e);let a=yr(window.i18n[i],e);if(!a){const c=new CustomEvent("translation:missing",{detail:{key:n}});window.dispatchEvent(c),a=yr(window.i18n[de],e),a||(a=n)}if(!a.includes(":"))return a;const u=a.split(/(:\w+)/g);let o=!1;const s=u.map(c=>{if(c.startsWith(":")){const f=c.substring(1);let h=r==null?void 0:r[f];return dt(h)&&(h={...h,key:vt()},o=!0),h||c}return c});return o?s:s.join("")};
