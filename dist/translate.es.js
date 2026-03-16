var ru = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Ir(u) {
  return u && u.__esModule && Object.prototype.hasOwnProperty.call(u, "default") ? u.default : u;
}
var xu, Le;
function Ae() {
  if (Le) return xu;
  Le = 1;
  var u = Array.isArray;
  return xu = u, xu;
}
var mu, Ne;
function Mr() {
  if (Ne) return mu;
  Ne = 1;
  var u = typeof ru == "object" && ru && ru.Object === Object && ru;
  return mu = u, mu;
}
var gu, je;
function ve() {
  if (je) return gu;
  je = 1;
  var u = Mr(), e = typeof self == "object" && self && self.Object === Object && self, r = u || e || Function("return this")();
  return gu = r, gu;
}
var ku, $e;
function we() {
  if ($e) return ku;
  $e = 1;
  var u = ve(), e = u.Symbol;
  return ku = e, ku;
}
var Cu, He;
function Br() {
  if (He) return Cu;
  He = 1;
  var u = we(), e = Object.prototype, r = e.hasOwnProperty, n = e.toString, c = u ? u.toStringTag : void 0;
  function t(a) {
    var i = r.call(a, c), o = a[c];
    try {
      a[c] = void 0;
      var s = !0;
    } catch {
    }
    var f = n.call(a);
    return s && (i ? a[c] = o : delete a[c]), f;
  }
  return Cu = t, Cu;
}
var Du, Ge;
function Or() {
  if (Ge) return Du;
  Ge = 1;
  var u = Object.prototype, e = u.toString;
  function r(n) {
    return e.call(n);
  }
  return Du = r, Du;
}
var yu, Ue;
function rr() {
  if (Ue) return yu;
  Ue = 1;
  var u = we(), e = Br(), r = Or(), n = "[object Null]", c = "[object Undefined]", t = u ? u.toStringTag : void 0;
  function a(i) {
    return i == null ? i === void 0 ? c : n : t && t in Object(i) ? e(i) : r(i);
  }
  return yu = a, yu;
}
var Eu, Ze;
function Pr() {
  if (Ze) return Eu;
  Ze = 1;
  function u(e) {
    return e != null && typeof e == "object";
  }
  return Eu = u, Eu;
}
var Fu, Ve;
function Se() {
  if (Ve) return Fu;
  Ve = 1;
  var u = rr(), e = Pr(), r = "[object Symbol]";
  function n(c) {
    return typeof c == "symbol" || e(c) && u(c) == r;
  }
  return Fu = n, Fu;
}
var Au, We;
function Lr() {
  if (We) return Au;
  We = 1;
  var u = Ae(), e = Se(), r = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, n = /^\w*$/;
  function c(t, a) {
    if (u(t))
      return !1;
    var i = typeof t;
    return i == "number" || i == "symbol" || i == "boolean" || t == null || e(t) ? !0 : n.test(t) || !r.test(t) || a != null && t in Object(a);
  }
  return Au = c, Au;
}
var vu, Je;
function tr() {
  if (Je) return vu;
  Je = 1;
  function u(e) {
    var r = typeof e;
    return e != null && (r == "object" || r == "function");
  }
  return vu = u, vu;
}
var wu, Ke;
function Nr() {
  if (Ke) return wu;
  Ke = 1;
  var u = rr(), e = tr(), r = "[object AsyncFunction]", n = "[object Function]", c = "[object GeneratorFunction]", t = "[object Proxy]";
  function a(i) {
    if (!e(i))
      return !1;
    var o = u(i);
    return o == n || o == c || o == r || o == t;
  }
  return wu = a, wu;
}
var Su, Qe;
function jr() {
  if (Qe) return Su;
  Qe = 1;
  var u = ve(), e = u["__core-js_shared__"];
  return Su = e, Su;
}
var qu, Xe;
function $r() {
  if (Xe) return qu;
  Xe = 1;
  var u = jr(), e = (function() {
    var n = /[^.]+$/.exec(u && u.keys && u.keys.IE_PROTO || "");
    return n ? "Symbol(src)_1." + n : "";
  })();
  function r(n) {
    return !!e && e in n;
  }
  return qu = r, qu;
}
var Tu, Ye;
function Hr() {
  if (Ye) return Tu;
  Ye = 1;
  var u = Function.prototype, e = u.toString;
  function r(n) {
    if (n != null) {
      try {
        return e.call(n);
      } catch {
      }
      try {
        return n + "";
      } catch {
      }
    }
    return "";
  }
  return Tu = r, Tu;
}
var Ru, u0;
function Gr() {
  if (u0) return Ru;
  u0 = 1;
  var u = Nr(), e = $r(), r = tr(), n = Hr(), c = /[\\^$.*+?()[\]{}|]/g, t = /^\[object .+?Constructor\]$/, a = Function.prototype, i = Object.prototype, o = a.toString, s = i.hasOwnProperty, f = RegExp(
    "^" + o.call(s).replace(c, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
  );
  function l(b) {
    if (!r(b) || e(b))
      return !1;
    var h = u(b) ? f : t;
    return h.test(n(b));
  }
  return Ru = l, Ru;
}
var zu, e0;
function Ur() {
  if (e0) return zu;
  e0 = 1;
  function u(e, r) {
    return e == null ? void 0 : e[r];
  }
  return zu = u, zu;
}
var Iu, r0;
function nr() {
  if (r0) return Iu;
  r0 = 1;
  var u = Gr(), e = Ur();
  function r(n, c) {
    var t = e(n, c);
    return u(t) ? t : void 0;
  }
  return Iu = r, Iu;
}
var Mu, t0;
function su() {
  if (t0) return Mu;
  t0 = 1;
  var u = nr(), e = u(Object, "create");
  return Mu = e, Mu;
}
var Bu, n0;
function Zr() {
  if (n0) return Bu;
  n0 = 1;
  var u = su();
  function e() {
    this.__data__ = u ? u(null) : {}, this.size = 0;
  }
  return Bu = e, Bu;
}
var Ou, c0;
function Vr() {
  if (c0) return Ou;
  c0 = 1;
  function u(e) {
    var r = this.has(e) && delete this.__data__[e];
    return this.size -= r ? 1 : 0, r;
  }
  return Ou = u, Ou;
}
var Pu, i0;
function Wr() {
  if (i0) return Pu;
  i0 = 1;
  var u = su(), e = "__lodash_hash_undefined__", r = Object.prototype, n = r.hasOwnProperty;
  function c(t) {
    var a = this.__data__;
    if (u) {
      var i = a[t];
      return i === e ? void 0 : i;
    }
    return n.call(a, t) ? a[t] : void 0;
  }
  return Pu = c, Pu;
}
var Lu, a0;
function Jr() {
  if (a0) return Lu;
  a0 = 1;
  var u = su(), e = Object.prototype, r = e.hasOwnProperty;
  function n(c) {
    var t = this.__data__;
    return u ? t[c] !== void 0 : r.call(t, c);
  }
  return Lu = n, Lu;
}
var Nu, o0;
function Kr() {
  if (o0) return Nu;
  o0 = 1;
  var u = su(), e = "__lodash_hash_undefined__";
  function r(n, c) {
    var t = this.__data__;
    return this.size += this.has(n) ? 0 : 1, t[n] = u && c === void 0 ? e : c, this;
  }
  return Nu = r, Nu;
}
var ju, s0;
function Qr() {
  if (s0) return ju;
  s0 = 1;
  var u = Zr(), e = Vr(), r = Wr(), n = Jr(), c = Kr();
  function t(a) {
    var i = -1, o = a == null ? 0 : a.length;
    for (this.clear(); ++i < o; ) {
      var s = a[i];
      this.set(s[0], s[1]);
    }
  }
  return t.prototype.clear = u, t.prototype.delete = e, t.prototype.get = r, t.prototype.has = n, t.prototype.set = c, ju = t, ju;
}
var $u, f0;
function Xr() {
  if (f0) return $u;
  f0 = 1;
  function u() {
    this.__data__ = [], this.size = 0;
  }
  return $u = u, $u;
}
var Hu, l0;
function Yr() {
  if (l0) return Hu;
  l0 = 1;
  function u(e, r) {
    return e === r || e !== e && r !== r;
  }
  return Hu = u, Hu;
}
var Gu, d0;
function fu() {
  if (d0) return Gu;
  d0 = 1;
  var u = Yr();
  function e(r, n) {
    for (var c = r.length; c--; )
      if (u(r[c][0], n))
        return c;
    return -1;
  }
  return Gu = e, Gu;
}
var Uu, h0;
function ut() {
  if (h0) return Uu;
  h0 = 1;
  var u = fu(), e = Array.prototype, r = e.splice;
  function n(c) {
    var t = this.__data__, a = u(t, c);
    if (a < 0)
      return !1;
    var i = t.length - 1;
    return a == i ? t.pop() : r.call(t, a, 1), --this.size, !0;
  }
  return Uu = n, Uu;
}
var Zu, b0;
function et() {
  if (b0) return Zu;
  b0 = 1;
  var u = fu();
  function e(r) {
    var n = this.__data__, c = u(n, r);
    return c < 0 ? void 0 : n[c][1];
  }
  return Zu = e, Zu;
}
var Vu, p0;
function rt() {
  if (p0) return Vu;
  p0 = 1;
  var u = fu();
  function e(r) {
    return u(this.__data__, r) > -1;
  }
  return Vu = e, Vu;
}
var Wu, _0;
function tt() {
  if (_0) return Wu;
  _0 = 1;
  var u = fu();
  function e(r, n) {
    var c = this.__data__, t = u(c, r);
    return t < 0 ? (++this.size, c.push([r, n])) : c[t][1] = n, this;
  }
  return Wu = e, Wu;
}
var Ju, x0;
function nt() {
  if (x0) return Ju;
  x0 = 1;
  var u = Xr(), e = ut(), r = et(), n = rt(), c = tt();
  function t(a) {
    var i = -1, o = a == null ? 0 : a.length;
    for (this.clear(); ++i < o; ) {
      var s = a[i];
      this.set(s[0], s[1]);
    }
  }
  return t.prototype.clear = u, t.prototype.delete = e, t.prototype.get = r, t.prototype.has = n, t.prototype.set = c, Ju = t, Ju;
}
var Ku, m0;
function ct() {
  if (m0) return Ku;
  m0 = 1;
  var u = nr(), e = ve(), r = u(e, "Map");
  return Ku = r, Ku;
}
var Qu, g0;
function it() {
  if (g0) return Qu;
  g0 = 1;
  var u = Qr(), e = nt(), r = ct();
  function n() {
    this.size = 0, this.__data__ = {
      hash: new u(),
      map: new (r || e)(),
      string: new u()
    };
  }
  return Qu = n, Qu;
}
var Xu, k0;
function at() {
  if (k0) return Xu;
  k0 = 1;
  function u(e) {
    var r = typeof e;
    return r == "string" || r == "number" || r == "symbol" || r == "boolean" ? e !== "__proto__" : e === null;
  }
  return Xu = u, Xu;
}
var Yu, C0;
function lu() {
  if (C0) return Yu;
  C0 = 1;
  var u = at();
  function e(r, n) {
    var c = r.__data__;
    return u(n) ? c[typeof n == "string" ? "string" : "hash"] : c.map;
  }
  return Yu = e, Yu;
}
var ue, D0;
function ot() {
  if (D0) return ue;
  D0 = 1;
  var u = lu();
  function e(r) {
    var n = u(this, r).delete(r);
    return this.size -= n ? 1 : 0, n;
  }
  return ue = e, ue;
}
var ee, y0;
function st() {
  if (y0) return ee;
  y0 = 1;
  var u = lu();
  function e(r) {
    return u(this, r).get(r);
  }
  return ee = e, ee;
}
var re, E0;
function ft() {
  if (E0) return re;
  E0 = 1;
  var u = lu();
  function e(r) {
    return u(this, r).has(r);
  }
  return re = e, re;
}
var te, F0;
function lt() {
  if (F0) return te;
  F0 = 1;
  var u = lu();
  function e(r, n) {
    var c = u(this, r), t = c.size;
    return c.set(r, n), this.size += c.size == t ? 0 : 1, this;
  }
  return te = e, te;
}
var ne, A0;
function dt() {
  if (A0) return ne;
  A0 = 1;
  var u = it(), e = ot(), r = st(), n = ft(), c = lt();
  function t(a) {
    var i = -1, o = a == null ? 0 : a.length;
    for (this.clear(); ++i < o; ) {
      var s = a[i];
      this.set(s[0], s[1]);
    }
  }
  return t.prototype.clear = u, t.prototype.delete = e, t.prototype.get = r, t.prototype.has = n, t.prototype.set = c, ne = t, ne;
}
var ce, v0;
function ht() {
  if (v0) return ce;
  v0 = 1;
  var u = dt(), e = "Expected a function";
  function r(n, c) {
    if (typeof n != "function" || c != null && typeof c != "function")
      throw new TypeError(e);
    var t = function() {
      var a = arguments, i = c ? c.apply(this, a) : a[0], o = t.cache;
      if (o.has(i))
        return o.get(i);
      var s = n.apply(this, a);
      return t.cache = o.set(i, s) || o, s;
    };
    return t.cache = new (r.Cache || u)(), t;
  }
  return r.Cache = u, ce = r, ce;
}
var ie, w0;
function bt() {
  if (w0) return ie;
  w0 = 1;
  var u = ht(), e = 500;
  function r(n) {
    var c = u(n, function(a) {
      return t.size === e && t.clear(), a;
    }), t = c.cache;
    return c;
  }
  return ie = r, ie;
}
var ae, S0;
function pt() {
  if (S0) return ae;
  S0 = 1;
  var u = bt(), e = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, r = /\\(\\)?/g, n = u(function(c) {
    var t = [];
    return c.charCodeAt(0) === 46 && t.push(""), c.replace(e, function(a, i, o, s) {
      t.push(o ? s.replace(r, "$1") : i || a);
    }), t;
  });
  return ae = n, ae;
}
var oe, q0;
function _t() {
  if (q0) return oe;
  q0 = 1;
  function u(e, r) {
    for (var n = -1, c = e == null ? 0 : e.length, t = Array(c); ++n < c; )
      t[n] = r(e[n], n, e);
    return t;
  }
  return oe = u, oe;
}
var se, T0;
function xt() {
  if (T0) return se;
  T0 = 1;
  var u = we(), e = _t(), r = Ae(), n = Se(), c = u ? u.prototype : void 0, t = c ? c.toString : void 0;
  function a(i) {
    if (typeof i == "string")
      return i;
    if (r(i))
      return e(i, a) + "";
    if (n(i))
      return t ? t.call(i) : "";
    var o = i + "";
    return o == "0" && 1 / i == -1 / 0 ? "-0" : o;
  }
  return se = a, se;
}
var fe, R0;
function mt() {
  if (R0) return fe;
  R0 = 1;
  var u = xt();
  function e(r) {
    return r == null ? "" : u(r);
  }
  return fe = e, fe;
}
var le, z0;
function gt() {
  if (z0) return le;
  z0 = 1;
  var u = Ae(), e = Lr(), r = pt(), n = mt();
  function c(t, a) {
    return u(t) ? t : e(t, a) ? [t] : r(n(t));
  }
  return le = c, le;
}
var de, I0;
function kt() {
  if (I0) return de;
  I0 = 1;
  var u = Se();
  function e(r) {
    if (typeof r == "string" || u(r))
      return r;
    var n = r + "";
    return n == "0" && 1 / r == -1 / 0 ? "-0" : n;
  }
  return de = e, de;
}
var he, M0;
function Ct() {
  if (M0) return he;
  M0 = 1;
  var u = gt(), e = kt();
  function r(n, c) {
    c = u(c, n);
    for (var t = 0, a = c.length; n != null && t < a; )
      n = n[e(c[t++])];
    return t && t == a ? n : void 0;
  }
  return he = r, he;
}
var be, B0;
function Dt() {
  if (B0) return be;
  B0 = 1;
  var u = Ct();
  function e(r, n, c) {
    var t = r == null ? void 0 : u(r, n);
    return t === void 0 ? c : t;
  }
  return be = e, be;
}
var yt = Dt();
const O0 = /* @__PURE__ */ Ir(yt), P0 = {};
function Et(u) {
  let e = P0[u];
  if (e)
    return e;
  e = P0[u] = [];
  for (let r = 0; r < 128; r++) {
    const n = String.fromCharCode(r);
    e.push(n);
  }
  for (let r = 0; r < u.length; r++) {
    const n = u.charCodeAt(r);
    e[n] = "%" + ("0" + n.toString(16).toUpperCase()).slice(-2);
  }
  return e;
}
function U(u, e) {
  typeof e != "string" && (e = U.defaultChars);
  const r = Et(e);
  return u.replace(/(%[a-f0-9]{2})+/gi, function(n) {
    let c = "";
    for (let t = 0, a = n.length; t < a; t += 3) {
      const i = parseInt(n.slice(t + 1, t + 3), 16);
      if (i < 128) {
        c += r[i];
        continue;
      }
      if ((i & 224) === 192 && t + 3 < a) {
        const o = parseInt(n.slice(t + 4, t + 6), 16);
        if ((o & 192) === 128) {
          const s = i << 6 & 1984 | o & 63;
          s < 128 ? c += "��" : c += String.fromCharCode(s), t += 3;
          continue;
        }
      }
      if ((i & 240) === 224 && t + 6 < a) {
        const o = parseInt(n.slice(t + 4, t + 6), 16), s = parseInt(n.slice(t + 7, t + 9), 16);
        if ((o & 192) === 128 && (s & 192) === 128) {
          const f = i << 12 & 61440 | o << 6 & 4032 | s & 63;
          f < 2048 || f >= 55296 && f <= 57343 ? c += "���" : c += String.fromCharCode(f), t += 6;
          continue;
        }
      }
      if ((i & 248) === 240 && t + 9 < a) {
        const o = parseInt(n.slice(t + 4, t + 6), 16), s = parseInt(n.slice(t + 7, t + 9), 16), f = parseInt(n.slice(t + 10, t + 12), 16);
        if ((o & 192) === 128 && (s & 192) === 128 && (f & 192) === 128) {
          let l = i << 18 & 1835008 | o << 12 & 258048 | s << 6 & 4032 | f & 63;
          l < 65536 || l > 1114111 ? c += "����" : (l -= 65536, c += String.fromCharCode(55296 + (l >> 10), 56320 + (l & 1023))), t += 9;
          continue;
        }
      }
      c += "�";
    }
    return c;
  });
}
U.defaultChars = ";/?:@&=+$,#";
U.componentChars = "";
const L0 = {};
function Ft(u) {
  let e = L0[u];
  if (e)
    return e;
  e = L0[u] = [];
  for (let r = 0; r < 128; r++) {
    const n = String.fromCharCode(r);
    /^[0-9a-z]$/i.test(n) ? e.push(n) : e.push("%" + ("0" + r.toString(16).toUpperCase()).slice(-2));
  }
  for (let r = 0; r < u.length; r++)
    e[u.charCodeAt(r)] = u[r];
  return e;
}
function Y(u, e, r) {
  typeof e != "string" && (r = e, e = Y.defaultChars), typeof r > "u" && (r = !0);
  const n = Ft(e);
  let c = "";
  for (let t = 0, a = u.length; t < a; t++) {
    const i = u.charCodeAt(t);
    if (r && i === 37 && t + 2 < a && /^[0-9a-f]{2}$/i.test(u.slice(t + 1, t + 3))) {
      c += u.slice(t, t + 3), t += 2;
      continue;
    }
    if (i < 128) {
      c += n[i];
      continue;
    }
    if (i >= 55296 && i <= 57343) {
      if (i >= 55296 && i <= 56319 && t + 1 < a) {
        const o = u.charCodeAt(t + 1);
        if (o >= 56320 && o <= 57343) {
          c += encodeURIComponent(u[t] + u[t + 1]), t++;
          continue;
        }
      }
      c += "%EF%BF%BD";
      continue;
    }
    c += encodeURIComponent(u[t]);
  }
  return c;
}
Y.defaultChars = ";/?:@&=+$,-_.!~*'()#";
Y.componentChars = "-_.!~*'()";
function qe(u) {
  let e = "";
  return e += u.protocol || "", e += u.slashes ? "//" : "", e += u.auth ? u.auth + "@" : "", u.hostname && u.hostname.indexOf(":") !== -1 ? e += "[" + u.hostname + "]" : e += u.hostname || "", e += u.port ? ":" + u.port : "", e += u.pathname || "", e += u.search || "", e += u.hash || "", e;
}
function cu() {
  this.protocol = null, this.slashes = null, this.auth = null, this.port = null, this.hostname = null, this.hash = null, this.search = null, this.pathname = null;
}
const At = /^([a-z0-9.+-]+:)/i, vt = /:[0-9]*$/, wt = /^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/, St = ["<", ">", '"', "`", " ", "\r", `
`, "	"], qt = ["{", "}", "|", "\\", "^", "`"].concat(St), Tt = ["'"].concat(qt), N0 = ["%", "/", "?", ";", "#"].concat(Tt), j0 = ["/", "?", "#"], Rt = 255, $0 = /^[+a-z0-9A-Z_-]{0,63}$/, zt = /^([+a-z0-9A-Z_-]{0,63})(.*)$/, H0 = {
  javascript: !0,
  "javascript:": !0
}, G0 = {
  http: !0,
  https: !0,
  ftp: !0,
  gopher: !0,
  file: !0,
  "http:": !0,
  "https:": !0,
  "ftp:": !0,
  "gopher:": !0,
  "file:": !0
};
function Te(u, e) {
  if (u && u instanceof cu) return u;
  const r = new cu();
  return r.parse(u, e), r;
}
cu.prototype.parse = function(u, e) {
  let r, n, c, t = u;
  if (t = t.trim(), !e && u.split("#").length === 1) {
    const s = wt.exec(t);
    if (s)
      return this.pathname = s[1], s[2] && (this.search = s[2]), this;
  }
  let a = At.exec(t);
  if (a && (a = a[0], r = a.toLowerCase(), this.protocol = a, t = t.substr(a.length)), (e || a || t.match(/^\/\/[^@\/]+@[^@\/]+/)) && (c = t.substr(0, 2) === "//", c && !(a && H0[a]) && (t = t.substr(2), this.slashes = !0)), !H0[a] && (c || a && !G0[a])) {
    let s = -1;
    for (let d = 0; d < j0.length; d++)
      n = t.indexOf(j0[d]), n !== -1 && (s === -1 || n < s) && (s = n);
    let f, l;
    s === -1 ? l = t.lastIndexOf("@") : l = t.lastIndexOf("@", s), l !== -1 && (f = t.slice(0, l), t = t.slice(l + 1), this.auth = f), s = -1;
    for (let d = 0; d < N0.length; d++)
      n = t.indexOf(N0[d]), n !== -1 && (s === -1 || n < s) && (s = n);
    s === -1 && (s = t.length), t[s - 1] === ":" && s--;
    const b = t.slice(0, s);
    t = t.slice(s), this.parseHost(b), this.hostname = this.hostname || "";
    const h = this.hostname[0] === "[" && this.hostname[this.hostname.length - 1] === "]";
    if (!h) {
      const d = this.hostname.split(/\./);
      for (let g = 0, k = d.length; g < k; g++) {
        const D = d[g];
        if (D && !D.match($0)) {
          let p = "";
          for (let x = 0, _ = D.length; x < _; x++)
            D.charCodeAt(x) > 127 ? p += "x" : p += D[x];
          if (!p.match($0)) {
            const x = d.slice(0, g), _ = d.slice(g + 1), m = D.match(zt);
            m && (x.push(m[1]), _.unshift(m[2])), _.length && (t = _.join(".") + t), this.hostname = x.join(".");
            break;
          }
        }
      }
    }
    this.hostname.length > Rt && (this.hostname = ""), h && (this.hostname = this.hostname.substr(1, this.hostname.length - 2));
  }
  const i = t.indexOf("#");
  i !== -1 && (this.hash = t.substr(i), t = t.slice(0, i));
  const o = t.indexOf("?");
  return o !== -1 && (this.search = t.substr(o), t = t.slice(0, o)), t && (this.pathname = t), G0[r] && this.hostname && !this.pathname && (this.pathname = ""), this;
};
cu.prototype.parseHost = function(u) {
  let e = vt.exec(u);
  e && (e = e[0], e !== ":" && (this.port = e.substr(1)), u = u.substr(0, u.length - e.length)), u && (this.hostname = u);
};
const It = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  decode: U,
  encode: Y,
  format: qe,
  parse: Te
}, Symbol.toStringTag, { value: "Module" })), cr = /[\0-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/, ir = /[\0-\x1F\x7F-\x9F]/, Mt = /[\xAD\u0600-\u0605\u061C\u06DD\u070F\u0890\u0891\u08E2\u180E\u200B-\u200F\u202A-\u202E\u2060-\u2064\u2066-\u206F\uFEFF\uFFF9-\uFFFB]|\uD804[\uDCBD\uDCCD]|\uD80D[\uDC30-\uDC3F]|\uD82F[\uDCA0-\uDCA3]|\uD834[\uDD73-\uDD7A]|\uDB40[\uDC01\uDC20-\uDC7F]/, Re = /[!-#%-\*,-\/:;\?@\[-\]_\{\}\xA1\xA7\xAB\xB6\xB7\xBB\xBF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061D-\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u09FD\u0A76\u0AF0\u0C77\u0C84\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1B7D\u1B7E\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E4F\u2E52-\u2E5D\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]|\uD800[\uDD00-\uDD02\uDF9F\uDFD0]|\uD801\uDD6F|\uD802[\uDC57\uDD1F\uDD3F\uDE50-\uDE58\uDE7F\uDEF0-\uDEF6\uDF39-\uDF3F\uDF99-\uDF9C]|\uD803[\uDEAD\uDF55-\uDF59\uDF86-\uDF89]|\uD804[\uDC47-\uDC4D\uDCBB\uDCBC\uDCBE-\uDCC1\uDD40-\uDD43\uDD74\uDD75\uDDC5-\uDDC8\uDDCD\uDDDB\uDDDD-\uDDDF\uDE38-\uDE3D\uDEA9]|\uD805[\uDC4B-\uDC4F\uDC5A\uDC5B\uDC5D\uDCC6\uDDC1-\uDDD7\uDE41-\uDE43\uDE60-\uDE6C\uDEB9\uDF3C-\uDF3E]|\uD806[\uDC3B\uDD44-\uDD46\uDDE2\uDE3F-\uDE46\uDE9A-\uDE9C\uDE9E-\uDEA2\uDF00-\uDF09]|\uD807[\uDC41-\uDC45\uDC70\uDC71\uDEF7\uDEF8\uDF43-\uDF4F\uDFFF]|\uD809[\uDC70-\uDC74]|\uD80B[\uDFF1\uDFF2]|\uD81A[\uDE6E\uDE6F\uDEF5\uDF37-\uDF3B\uDF44]|\uD81B[\uDE97-\uDE9A\uDFE2]|\uD82F\uDC9F|\uD836[\uDE87-\uDE8B]|\uD83A[\uDD5E\uDD5F]/, ar = /[\$\+<->\^`\|~\xA2-\xA6\xA8\xA9\xAC\xAE-\xB1\xB4\xB8\xD7\xF7\u02C2-\u02C5\u02D2-\u02DF\u02E5-\u02EB\u02ED\u02EF-\u02FF\u0375\u0384\u0385\u03F6\u0482\u058D-\u058F\u0606-\u0608\u060B\u060E\u060F\u06DE\u06E9\u06FD\u06FE\u07F6\u07FE\u07FF\u0888\u09F2\u09F3\u09FA\u09FB\u0AF1\u0B70\u0BF3-\u0BFA\u0C7F\u0D4F\u0D79\u0E3F\u0F01-\u0F03\u0F13\u0F15-\u0F17\u0F1A-\u0F1F\u0F34\u0F36\u0F38\u0FBE-\u0FC5\u0FC7-\u0FCC\u0FCE\u0FCF\u0FD5-\u0FD8\u109E\u109F\u1390-\u1399\u166D\u17DB\u1940\u19DE-\u19FF\u1B61-\u1B6A\u1B74-\u1B7C\u1FBD\u1FBF-\u1FC1\u1FCD-\u1FCF\u1FDD-\u1FDF\u1FED-\u1FEF\u1FFD\u1FFE\u2044\u2052\u207A-\u207C\u208A-\u208C\u20A0-\u20C0\u2100\u2101\u2103-\u2106\u2108\u2109\u2114\u2116-\u2118\u211E-\u2123\u2125\u2127\u2129\u212E\u213A\u213B\u2140-\u2144\u214A-\u214D\u214F\u218A\u218B\u2190-\u2307\u230C-\u2328\u232B-\u2426\u2440-\u244A\u249C-\u24E9\u2500-\u2767\u2794-\u27C4\u27C7-\u27E5\u27F0-\u2982\u2999-\u29D7\u29DC-\u29FB\u29FE-\u2B73\u2B76-\u2B95\u2B97-\u2BFF\u2CE5-\u2CEA\u2E50\u2E51\u2E80-\u2E99\u2E9B-\u2EF3\u2F00-\u2FD5\u2FF0-\u2FFF\u3004\u3012\u3013\u3020\u3036\u3037\u303E\u303F\u309B\u309C\u3190\u3191\u3196-\u319F\u31C0-\u31E3\u31EF\u3200-\u321E\u322A-\u3247\u3250\u3260-\u327F\u328A-\u32B0\u32C0-\u33FF\u4DC0-\u4DFF\uA490-\uA4C6\uA700-\uA716\uA720\uA721\uA789\uA78A\uA828-\uA82B\uA836-\uA839\uAA77-\uAA79\uAB5B\uAB6A\uAB6B\uFB29\uFBB2-\uFBC2\uFD40-\uFD4F\uFDCF\uFDFC-\uFDFF\uFE62\uFE64-\uFE66\uFE69\uFF04\uFF0B\uFF1C-\uFF1E\uFF3E\uFF40\uFF5C\uFF5E\uFFE0-\uFFE6\uFFE8-\uFFEE\uFFFC\uFFFD]|\uD800[\uDD37-\uDD3F\uDD79-\uDD89\uDD8C-\uDD8E\uDD90-\uDD9C\uDDA0\uDDD0-\uDDFC]|\uD802[\uDC77\uDC78\uDEC8]|\uD805\uDF3F|\uD807[\uDFD5-\uDFF1]|\uD81A[\uDF3C-\uDF3F\uDF45]|\uD82F\uDC9C|\uD833[\uDF50-\uDFC3]|\uD834[\uDC00-\uDCF5\uDD00-\uDD26\uDD29-\uDD64\uDD6A-\uDD6C\uDD83\uDD84\uDD8C-\uDDA9\uDDAE-\uDDEA\uDE00-\uDE41\uDE45\uDF00-\uDF56]|\uD835[\uDEC1\uDEDB\uDEFB\uDF15\uDF35\uDF4F\uDF6F\uDF89\uDFA9\uDFC3]|\uD836[\uDC00-\uDDFF\uDE37-\uDE3A\uDE6D-\uDE74\uDE76-\uDE83\uDE85\uDE86]|\uD838[\uDD4F\uDEFF]|\uD83B[\uDCAC\uDCB0\uDD2E\uDEF0\uDEF1]|\uD83C[\uDC00-\uDC2B\uDC30-\uDC93\uDCA0-\uDCAE\uDCB1-\uDCBF\uDCC1-\uDCCF\uDCD1-\uDCF5\uDD0D-\uDDAD\uDDE6-\uDE02\uDE10-\uDE3B\uDE40-\uDE48\uDE50\uDE51\uDE60-\uDE65\uDF00-\uDFFF]|\uD83D[\uDC00-\uDED7\uDEDC-\uDEEC\uDEF0-\uDEFC\uDF00-\uDF76\uDF7B-\uDFD9\uDFE0-\uDFEB\uDFF0]|\uD83E[\uDC00-\uDC0B\uDC10-\uDC47\uDC50-\uDC59\uDC60-\uDC87\uDC90-\uDCAD\uDCB0\uDCB1\uDD00-\uDE53\uDE60-\uDE6D\uDE70-\uDE7C\uDE80-\uDE88\uDE90-\uDEBD\uDEBF-\uDEC5\uDECE-\uDEDB\uDEE0-\uDEE8\uDEF0-\uDEF8\uDF00-\uDF92\uDF94-\uDFCA]/, or = /[ \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000]/, Bt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Any: cr,
  Cc: ir,
  Cf: Mt,
  P: Re,
  S: ar,
  Z: or
}, Symbol.toStringTag, { value: "Module" })), Ot = new Uint16Array(
  // prettier-ignore
  'ᵁ<Õıʊҝջאٵ۞ޢߖࠏ੊ઑඡ๭༉༦჊ረዡᐕᒝᓃᓟᔥ\0\0\0\0\0\0ᕫᛍᦍᰒᷝ὾⁠↰⊍⏀⏻⑂⠤⤒ⴈ⹈⿎〖㊺㘹㞬㣾㨨㩱㫠㬮ࠀEMabcfglmnoprstu\\bfms¦³¹ÈÏlig耻Æ䃆P耻&䀦cute耻Á䃁reve;䄂Āiyx}rc耻Â䃂;䐐r;쀀𝔄rave耻À䃀pha;䎑acr;䄀d;橓Āgp¡on;䄄f;쀀𝔸plyFunction;恡ing耻Å䃅Ācs¾Ãr;쀀𝒜ign;扔ilde耻Ã䃃ml耻Ä䃄ЀaceforsuåûþėĜĢħĪĀcrêòkslash;或Ŷöø;櫧ed;挆y;䐑ƀcrtąċĔause;戵noullis;愬a;䎒r;쀀𝔅pf;쀀𝔹eve;䋘còēmpeq;扎܀HOacdefhilorsuōőŖƀƞƢƵƷƺǜȕɳɸɾcy;䐧PY耻©䂩ƀcpyŝŢźute;䄆Ā;iŧŨ拒talDifferentialD;慅leys;愭ȀaeioƉƎƔƘron;䄌dil耻Ç䃇rc;䄈nint;戰ot;䄊ĀdnƧƭilla;䂸terDot;䂷òſi;䎧rcleȀDMPTǇǋǑǖot;抙inus;抖lus;投imes;抗oĀcsǢǸkwiseContourIntegral;戲eCurlyĀDQȃȏoubleQuote;思uote;怙ȀlnpuȞȨɇɕonĀ;eȥȦ户;橴ƀgitȯȶȺruent;扡nt;戯ourIntegral;戮ĀfrɌɎ;愂oduct;成nterClockwiseContourIntegral;戳oss;樯cr;쀀𝒞pĀ;Cʄʅ拓ap;才րDJSZacefiosʠʬʰʴʸˋ˗ˡ˦̳ҍĀ;oŹʥtrahd;椑cy;䐂cy;䐅cy;䐏ƀgrsʿ˄ˇger;怡r;憡hv;櫤Āayː˕ron;䄎;䐔lĀ;t˝˞戇a;䎔r;쀀𝔇Āaf˫̧Ācm˰̢riticalȀADGT̖̜̀̆cute;䂴oŴ̋̍;䋙bleAcute;䋝rave;䁠ilde;䋜ond;拄ferentialD;慆Ѱ̽\0\0\0͔͂\0Ѕf;쀀𝔻ƀ;DE͈͉͍䂨ot;惜qual;扐blèCDLRUVͣͲ΂ϏϢϸontourIntegraìȹoɴ͹\0\0ͻ»͉nArrow;懓Āeo·ΤftƀARTΐΖΡrrow;懐ightArrow;懔eåˊngĀLRΫτeftĀARγιrrow;柸ightArrow;柺ightArrow;柹ightĀATϘϞrrow;懒ee;抨pɁϩ\0\0ϯrrow;懑ownArrow;懕erticalBar;戥ǹABLRTaВЪаўѿͼrrowƀ;BUНОТ憓ar;椓pArrow;懵reve;䌑eft˒к\0ц\0ѐightVector;楐eeVector;楞ectorĀ;Bљњ憽ar;楖ightǔѧ\0ѱeeVector;楟ectorĀ;BѺѻ懁ar;楗eeĀ;A҆҇护rrow;憧ĀctҒҗr;쀀𝒟rok;䄐ࠀNTacdfglmopqstuxҽӀӄӋӞӢӧӮӵԡԯԶՒ՝ՠեG;䅊H耻Ð䃐cute耻É䃉ƀaiyӒӗӜron;䄚rc耻Ê䃊;䐭ot;䄖r;쀀𝔈rave耻È䃈ement;戈ĀapӺӾcr;䄒tyɓԆ\0\0ԒmallSquare;旻erySmallSquare;斫ĀgpԦԪon;䄘f;쀀𝔼silon;䎕uĀaiԼՉlĀ;TՂՃ橵ilde;扂librium;懌Āci՗՚r;愰m;橳a;䎗ml耻Ë䃋Āipժկsts;戃onentialE;慇ʀcfiosօֈ֍ֲ׌y;䐤r;쀀𝔉lledɓ֗\0\0֣mallSquare;旼erySmallSquare;斪Ͱֺ\0ֿ\0\0ׄf;쀀𝔽All;戀riertrf;愱cò׋؀JTabcdfgorstר׬ׯ׺؀ؒؖ؛؝أ٬ٲcy;䐃耻>䀾mmaĀ;d׷׸䎓;䏜reve;䄞ƀeiy؇،ؐdil;䄢rc;䄜;䐓ot;䄠r;쀀𝔊;拙pf;쀀𝔾eater̀EFGLSTصلَٖٛ٦qualĀ;Lؾؿ扥ess;招ullEqual;执reater;檢ess;扷lantEqual;橾ilde;扳cr;쀀𝒢;扫ЀAacfiosuڅڋږڛڞڪھۊRDcy;䐪Āctڐڔek;䋇;䁞irc;䄤r;愌lbertSpace;愋ǰگ\0ڲf;愍izontalLine;攀Āctۃۅòکrok;䄦mpńېۘownHumðįqual;扏܀EJOacdfgmnostuۺ۾܃܇܎ܚܞܡܨ݄ݸދޏޕcy;䐕lig;䄲cy;䐁cute耻Í䃍Āiyܓܘrc耻Î䃎;䐘ot;䄰r;愑rave耻Ì䃌ƀ;apܠܯܿĀcgܴܷr;䄪inaryI;慈lieóϝǴ݉\0ݢĀ;eݍݎ戬Āgrݓݘral;戫section;拂isibleĀCTݬݲomma;恣imes;恢ƀgptݿރވon;䄮f;쀀𝕀a;䎙cr;愐ilde;䄨ǫޚ\0ޞcy;䐆l耻Ï䃏ʀcfosuެ޷޼߂ߐĀiyޱ޵rc;䄴;䐙r;쀀𝔍pf;쀀𝕁ǣ߇\0ߌr;쀀𝒥rcy;䐈kcy;䐄΀HJacfosߤߨ߽߬߱ࠂࠈcy;䐥cy;䐌ppa;䎚Āey߶߻dil;䄶;䐚r;쀀𝔎pf;쀀𝕂cr;쀀𝒦րJTaceflmostࠥࠩࠬࡐࡣ঳সে্਷ੇcy;䐉耻<䀼ʀcmnpr࠷࠼ࡁࡄࡍute;䄹bda;䎛g;柪lacetrf;愒r;憞ƀaeyࡗ࡜ࡡron;䄽dil;䄻;䐛Āfsࡨ॰tԀACDFRTUVarࡾࢩࢱࣦ࣠ࣼयज़ΐ४Ānrࢃ࢏gleBracket;柨rowƀ;BR࢙࢚࢞憐ar;懤ightArrow;懆eiling;挈oǵࢷ\0ࣃbleBracket;柦nǔࣈ\0࣒eeVector;楡ectorĀ;Bࣛࣜ懃ar;楙loor;挊ightĀAV࣯ࣵrrow;憔ector;楎Āerँगeƀ;AVउऊऐ抣rrow;憤ector;楚iangleƀ;BEतथऩ抲ar;槏qual;抴pƀDTVषूौownVector;楑eeVector;楠ectorĀ;Bॖॗ憿ar;楘ectorĀ;B॥०憼ar;楒ightáΜs̀EFGLSTॾঋকঝঢভqualGreater;拚ullEqual;扦reater;扶ess;檡lantEqual;橽ilde;扲r;쀀𝔏Ā;eঽা拘ftarrow;懚idot;䄿ƀnpw৔ਖਛgȀLRlr৞৷ਂਐeftĀAR০৬rrow;柵ightArrow;柷ightArrow;柶eftĀarγਊightáοightáϊf;쀀𝕃erĀLRਢਬeftArrow;憙ightArrow;憘ƀchtਾੀੂòࡌ;憰rok;䅁;扪Ѐacefiosuਗ਼੝੠੷੼અઋ઎p;椅y;䐜Ādl੥੯iumSpace;恟lintrf;愳r;쀀𝔐nusPlus;戓pf;쀀𝕄cò੶;䎜ҀJacefostuણધભીଔଙඑ඗ඞcy;䐊cute;䅃ƀaey઴હાron;䅇dil;䅅;䐝ƀgswે૰଎ativeƀMTV૓૟૨ediumSpace;怋hiĀcn૦૘ë૙eryThiî૙tedĀGL૸ଆreaterGreateòٳessLesóੈLine;䀊r;쀀𝔑ȀBnptଢନଷ଺reak;恠BreakingSpace;䂠f;愕ڀ;CDEGHLNPRSTV୕ୖ୪୼஡௫ఄ౞಄ದ೘ൡඅ櫬Āou୛୤ngruent;扢pCap;扭oubleVerticalBar;戦ƀlqxஃஊ஛ement;戉ualĀ;Tஒஓ扠ilde;쀀≂̸ists;戄reater΀;EFGLSTஶஷ஽௉௓௘௥扯qual;扱ullEqual;쀀≧̸reater;쀀≫̸ess;批lantEqual;쀀⩾̸ilde;扵umpń௲௽ownHump;쀀≎̸qual;쀀≏̸eĀfsఊధtTriangleƀ;BEచఛడ拪ar;쀀⧏̸qual;括s̀;EGLSTవశ఼ౄోౘ扮qual;扰reater;扸ess;쀀≪̸lantEqual;쀀⩽̸ilde;扴estedĀGL౨౹reaterGreater;쀀⪢̸essLess;쀀⪡̸recedesƀ;ESಒಓಛ技qual;쀀⪯̸lantEqual;拠ĀeiಫಹverseElement;戌ghtTriangleƀ;BEೋೌ೒拫ar;쀀⧐̸qual;拭ĀquೝഌuareSuĀbp೨೹setĀ;E೰ೳ쀀⊏̸qual;拢ersetĀ;Eഃആ쀀⊐̸qual;拣ƀbcpഓതൎsetĀ;Eഛഞ쀀⊂⃒qual;抈ceedsȀ;ESTലള഻െ抁qual;쀀⪰̸lantEqual;拡ilde;쀀≿̸ersetĀ;E൘൛쀀⊃⃒qual;抉ildeȀ;EFT൮൯൵ൿ扁qual;扄ullEqual;扇ilde;扉erticalBar;戤cr;쀀𝒩ilde耻Ñ䃑;䎝܀Eacdfgmoprstuvලෂ෉෕ෛ෠෧෼ขภยา฿ไlig;䅒cute耻Ó䃓Āiy෎ීrc耻Ô䃔;䐞blac;䅐r;쀀𝔒rave耻Ò䃒ƀaei෮ෲ෶cr;䅌ga;䎩cron;䎟pf;쀀𝕆enCurlyĀDQฎบoubleQuote;怜uote;怘;橔Āclวฬr;쀀𝒪ash耻Ø䃘iŬื฼de耻Õ䃕es;樷ml耻Ö䃖erĀBP๋๠Āar๐๓r;怾acĀek๚๜;揞et;掴arenthesis;揜Ҁacfhilors๿ງຊຏຒດຝະ໼rtialD;戂y;䐟r;쀀𝔓i;䎦;䎠usMinus;䂱Āipຢອncareplanåڝf;愙Ȁ;eio຺ູ໠໤檻cedesȀ;EST່້໏໚扺qual;檯lantEqual;扼ilde;找me;怳Ādp໩໮uct;戏ortionĀ;aȥ໹l;戝Āci༁༆r;쀀𝒫;䎨ȀUfos༑༖༛༟OT耻"䀢r;쀀𝔔pf;愚cr;쀀𝒬؀BEacefhiorsu༾གྷཇའཱིྦྷྪྭ႖ႩႴႾarr;椐G耻®䂮ƀcnrཎནབute;䅔g;柫rĀ;tཛྷཝ憠l;椖ƀaeyཧཬཱron;䅘dil;䅖;䐠Ā;vླྀཹ愜erseĀEUྂྙĀlq྇ྎement;戋uilibrium;懋pEquilibrium;楯r»ཹo;䎡ghtЀACDFTUVa࿁࿫࿳ဢဨၛႇϘĀnr࿆࿒gleBracket;柩rowƀ;BL࿜࿝࿡憒ar;懥eftArrow;懄eiling;按oǵ࿹\0စbleBracket;柧nǔည\0နeeVector;楝ectorĀ;Bဝသ懂ar;楕loor;挋Āerိ၃eƀ;AVဵံြ抢rrow;憦ector;楛iangleƀ;BEၐၑၕ抳ar;槐qual;抵pƀDTVၣၮၸownVector;楏eeVector;楜ectorĀ;Bႂႃ憾ar;楔ectorĀ;B႑႒懀ar;楓Āpuႛ႞f;愝ndImplies;楰ightarrow;懛ĀchႹႼr;愛;憱leDelayed;槴ڀHOacfhimoqstuფჱჷჽᄙᄞᅑᅖᅡᅧᆵᆻᆿĀCcჩხHcy;䐩y;䐨FTcy;䐬cute;䅚ʀ;aeiyᄈᄉᄎᄓᄗ檼ron;䅠dil;䅞rc;䅜;䐡r;쀀𝔖ortȀDLRUᄪᄴᄾᅉownArrow»ОeftArrow»࢚ightArrow»࿝pArrow;憑gma;䎣allCircle;战pf;쀀𝕊ɲᅭ\0\0ᅰt;戚areȀ;ISUᅻᅼᆉᆯ斡ntersection;抓uĀbpᆏᆞsetĀ;Eᆗᆘ抏qual;抑ersetĀ;Eᆨᆩ抐qual;抒nion;抔cr;쀀𝒮ar;拆ȀbcmpᇈᇛሉላĀ;sᇍᇎ拐etĀ;Eᇍᇕqual;抆ĀchᇠህeedsȀ;ESTᇭᇮᇴᇿ扻qual;檰lantEqual;扽ilde;承Tháྌ;我ƀ;esሒሓሣ拑rsetĀ;Eሜም抃qual;抇et»ሓրHRSacfhiorsሾቄ቉ቕ቞ቱቶኟዂወዑORN耻Þ䃞ADE;愢ĀHc቎ቒcy;䐋y;䐦Ābuቚቜ;䀉;䎤ƀaeyብቪቯron;䅤dil;䅢;䐢r;쀀𝔗Āeiቻ኉ǲኀ\0ኇefore;戴a;䎘Ācn኎ኘkSpace;쀀  Space;怉ldeȀ;EFTካኬኲኼ戼qual;扃ullEqual;扅ilde;扈pf;쀀𝕋ipleDot;惛Āctዖዛr;쀀𝒯rok;䅦ૡዷጎጚጦ\0ጬጱ\0\0\0\0\0ጸጽ፷ᎅ\0᏿ᐄᐊᐐĀcrዻጁute耻Ú䃚rĀ;oጇገ憟cir;楉rǣጓ\0጖y;䐎ve;䅬Āiyጞጣrc耻Û䃛;䐣blac;䅰r;쀀𝔘rave耻Ù䃙acr;䅪Ādiፁ፩erĀBPፈ፝Āarፍፐr;䁟acĀekፗፙ;揟et;掵arenthesis;揝onĀ;P፰፱拃lus;抎Āgp፻፿on;䅲f;쀀𝕌ЀADETadps᎕ᎮᎸᏄϨᏒᏗᏳrrowƀ;BDᅐᎠᎤar;椒ownArrow;懅ownArrow;憕quilibrium;楮eeĀ;AᏋᏌ报rrow;憥ownáϳerĀLRᏞᏨeftArrow;憖ightArrow;憗iĀ;lᏹᏺ䏒on;䎥ing;䅮cr;쀀𝒰ilde;䅨ml耻Ü䃜ҀDbcdefosvᐧᐬᐰᐳᐾᒅᒊᒐᒖash;披ar;櫫y;䐒ashĀ;lᐻᐼ抩;櫦Āerᑃᑅ;拁ƀbtyᑌᑐᑺar;怖Ā;iᑏᑕcalȀBLSTᑡᑥᑪᑴar;戣ine;䁼eparator;杘ilde;所ThinSpace;怊r;쀀𝔙pf;쀀𝕍cr;쀀𝒱dash;抪ʀcefosᒧᒬᒱᒶᒼirc;䅴dge;拀r;쀀𝔚pf;쀀𝕎cr;쀀𝒲Ȁfiosᓋᓐᓒᓘr;쀀𝔛;䎞pf;쀀𝕏cr;쀀𝒳ҀAIUacfosuᓱᓵᓹᓽᔄᔏᔔᔚᔠcy;䐯cy;䐇cy;䐮cute耻Ý䃝Āiyᔉᔍrc;䅶;䐫r;쀀𝔜pf;쀀𝕐cr;쀀𝒴ml;䅸ЀHacdefosᔵᔹᔿᕋᕏᕝᕠᕤcy;䐖cute;䅹Āayᕄᕉron;䅽;䐗ot;䅻ǲᕔ\0ᕛoWidtè૙a;䎖r;愨pf;愤cr;쀀𝒵௡ᖃᖊᖐ\0ᖰᖶᖿ\0\0\0\0ᗆᗛᗫᙟ᙭\0ᚕ᚛ᚲᚹ\0ᚾcute耻á䃡reve;䄃̀;Ediuyᖜᖝᖡᖣᖨᖭ戾;쀀∾̳;房rc耻â䃢te肻´̆;䐰lig耻æ䃦Ā;r²ᖺ;쀀𝔞rave耻à䃠ĀepᗊᗖĀfpᗏᗔsym;愵èᗓha;䎱ĀapᗟcĀclᗤᗧr;䄁g;樿ɤᗰ\0\0ᘊʀ;adsvᗺᗻᗿᘁᘇ戧nd;橕;橜lope;橘;橚΀;elmrszᘘᘙᘛᘞᘿᙏᙙ戠;榤e»ᘙsdĀ;aᘥᘦ戡ѡᘰᘲᘴᘶᘸᘺᘼᘾ;榨;榩;榪;榫;榬;榭;榮;榯tĀ;vᙅᙆ戟bĀ;dᙌᙍ抾;榝Āptᙔᙗh;戢»¹arr;捼Āgpᙣᙧon;䄅f;쀀𝕒΀;Eaeiop዁ᙻᙽᚂᚄᚇᚊ;橰cir;橯;扊d;手s;䀧roxĀ;e዁ᚒñᚃing耻å䃥ƀctyᚡᚦᚨr;쀀𝒶;䀪mpĀ;e዁ᚯñʈilde耻ã䃣ml耻ä䃤Āciᛂᛈoninôɲnt;樑ࠀNabcdefiklnoprsu᛭ᛱᜰ᜼ᝃᝈ᝸᝽០៦ᠹᡐᜍ᤽᥈ᥰot;櫭Ācrᛶ᜞kȀcepsᜀᜅᜍᜓong;扌psilon;䏶rime;怵imĀ;e᜚᜛戽q;拍Ŷᜢᜦee;抽edĀ;gᜬᜭ挅e»ᜭrkĀ;t፜᜷brk;掶Āoyᜁᝁ;䐱quo;怞ʀcmprtᝓ᝛ᝡᝤᝨausĀ;eĊĉptyv;榰séᜌnoõēƀahwᝯ᝱ᝳ;䎲;愶een;扬r;쀀𝔟g΀costuvwឍឝឳេ៕៛៞ƀaiuបពរðݠrc;旯p»፱ƀdptឤឨឭot;樀lus;樁imes;樂ɱឹ\0\0ើcup;樆ar;昅riangleĀdu៍្own;施p;斳plus;樄eåᑄåᒭarow;植ƀako៭ᠦᠵĀcn៲ᠣkƀlst៺֫᠂ozenge;槫riangleȀ;dlr᠒᠓᠘᠝斴own;斾eft;旂ight;斸k;搣Ʊᠫ\0ᠳƲᠯ\0ᠱ;斒;斑4;斓ck;斈ĀeoᠾᡍĀ;qᡃᡆ쀀=⃥uiv;쀀≡⃥t;挐Ȁptwxᡙᡞᡧᡬf;쀀𝕓Ā;tᏋᡣom»Ꮜtie;拈؀DHUVbdhmptuvᢅᢖᢪᢻᣗᣛᣬ᣿ᤅᤊᤐᤡȀLRlrᢎᢐᢒᢔ;敗;敔;敖;敓ʀ;DUduᢡᢢᢤᢦᢨ敐;敦;敩;敤;敧ȀLRlrᢳᢵᢷᢹ;敝;敚;敜;教΀;HLRhlrᣊᣋᣍᣏᣑᣓᣕ救;敬;散;敠;敫;敢;敟ox;槉ȀLRlrᣤᣦᣨᣪ;敕;敒;攐;攌ʀ;DUduڽ᣷᣹᣻᣽;敥;敨;攬;攴inus;抟lus;択imes;抠ȀLRlrᤙᤛᤝ᤟;敛;敘;攘;攔΀;HLRhlrᤰᤱᤳᤵᤷ᤻᤹攂;敪;敡;敞;攼;攤;攜Āevģ᥂bar耻¦䂦Ȁceioᥑᥖᥚᥠr;쀀𝒷mi;恏mĀ;e᜚᜜lƀ;bhᥨᥩᥫ䁜;槅sub;柈Ŭᥴ᥾lĀ;e᥹᥺怢t»᥺pƀ;Eeįᦅᦇ;檮Ā;qۜۛೡᦧ\0᧨ᨑᨕᨲ\0ᨷᩐ\0\0᪴\0\0᫁\0\0ᬡᬮ᭍᭒\0᯽\0ᰌƀcpr᦭ᦲ᧝ute;䄇̀;abcdsᦿᧀᧄ᧊᧕᧙戩nd;橄rcup;橉Āau᧏᧒p;橋p;橇ot;橀;쀀∩︀Āeo᧢᧥t;恁îړȀaeiu᧰᧻ᨁᨅǰ᧵\0᧸s;橍on;䄍dil耻ç䃧rc;䄉psĀ;sᨌᨍ橌m;橐ot;䄋ƀdmnᨛᨠᨦil肻¸ƭptyv;榲t脀¢;eᨭᨮ䂢räƲr;쀀𝔠ƀceiᨽᩀᩍy;䑇ckĀ;mᩇᩈ朓ark»ᩈ;䏇r΀;Ecefms᩟᩠ᩢᩫ᪤᪪᪮旋;槃ƀ;elᩩᩪᩭ䋆q;扗eɡᩴ\0\0᪈rrowĀlr᩼᪁eft;憺ight;憻ʀRSacd᪒᪔᪖᪚᪟»ཇ;擈st;抛irc;抚ash;抝nint;樐id;櫯cir;槂ubsĀ;u᪻᪼晣it»᪼ˬ᫇᫔᫺\0ᬊonĀ;eᫍᫎ䀺Ā;qÇÆɭ᫙\0\0᫢aĀ;t᫞᫟䀬;䁀ƀ;fl᫨᫩᫫戁îᅠeĀmx᫱᫶ent»᫩eóɍǧ᫾\0ᬇĀ;dኻᬂot;橭nôɆƀfryᬐᬔᬗ;쀀𝕔oäɔ脀©;sŕᬝr;愗Āaoᬥᬩrr;憵ss;朗Ācuᬲᬷr;쀀𝒸Ābpᬼ᭄Ā;eᭁᭂ櫏;櫑Ā;eᭉᭊ櫐;櫒dot;拯΀delprvw᭠᭬᭷ᮂᮬᯔ᯹arrĀlr᭨᭪;椸;椵ɰ᭲\0\0᭵r;拞c;拟arrĀ;p᭿ᮀ憶;椽̀;bcdosᮏᮐᮖᮡᮥᮨ截rcap;橈Āauᮛᮞp;橆p;橊ot;抍r;橅;쀀∪︀Ȁalrv᮵ᮿᯞᯣrrĀ;mᮼᮽ憷;椼yƀevwᯇᯔᯘqɰᯎ\0\0ᯒreã᭳uã᭵ee;拎edge;拏en耻¤䂤earrowĀlrᯮ᯳eft»ᮀight»ᮽeäᯝĀciᰁᰇoninôǷnt;戱lcty;挭ঀAHabcdefhijlorstuwz᰸᰻᰿ᱝᱩᱵᲊᲞᲬᲷ᳻᳿ᴍᵻᶑᶫᶻ᷆᷍rò΁ar;楥Ȁglrs᱈ᱍ᱒᱔ger;怠eth;愸òᄳhĀ;vᱚᱛ怐»ऊūᱡᱧarow;椏aã̕Āayᱮᱳron;䄏;䐴ƀ;ao̲ᱼᲄĀgrʿᲁr;懊tseq;橷ƀglmᲑᲔᲘ耻°䂰ta;䎴ptyv;榱ĀirᲣᲨsht;楿;쀀𝔡arĀlrᲳᲵ»ࣜ»သʀaegsv᳂͸᳖᳜᳠mƀ;oș᳊᳔ndĀ;ș᳑uit;晦amma;䏝in;拲ƀ;io᳧᳨᳸䃷de脀÷;o᳧ᳰntimes;拇nø᳷cy;䑒cɯᴆ\0\0ᴊrn;挞op;挍ʀlptuwᴘᴝᴢᵉᵕlar;䀤f;쀀𝕕ʀ;emps̋ᴭᴷᴽᵂqĀ;d͒ᴳot;扑inus;戸lus;戔quare;抡blebarwedgåúnƀadhᄮᵝᵧownarrowóᲃarpoonĀlrᵲᵶefôᲴighôᲶŢᵿᶅkaro÷གɯᶊ\0\0ᶎrn;挟op;挌ƀcotᶘᶣᶦĀryᶝᶡ;쀀𝒹;䑕l;槶rok;䄑Ādrᶰᶴot;拱iĀ;fᶺ᠖斿Āah᷀᷃ròЩaòྦangle;榦Āci᷒ᷕy;䑟grarr;柿ऀDacdefglmnopqrstuxḁḉḙḸոḼṉṡṾấắẽỡἪἷὄ὎὚ĀDoḆᴴoôᲉĀcsḎḔute耻é䃩ter;橮ȀaioyḢḧḱḶron;䄛rĀ;cḭḮ扖耻ê䃪lon;払;䑍ot;䄗ĀDrṁṅot;扒;쀀𝔢ƀ;rsṐṑṗ檚ave耻è䃨Ā;dṜṝ檖ot;檘Ȁ;ilsṪṫṲṴ檙nters;揧;愓Ā;dṹṺ檕ot;檗ƀapsẅẉẗcr;䄓tyƀ;svẒẓẕ戅et»ẓpĀ1;ẝẤĳạả;怄;怅怃ĀgsẪẬ;䅋p;怂ĀgpẴẸon;䄙f;쀀𝕖ƀalsỄỎỒrĀ;sỊị拕l;槣us;橱iƀ;lvỚớở䎵on»ớ;䏵ȀcsuvỪỳἋἣĀioữḱrc»Ḯɩỹ\0\0ỻíՈantĀglἂἆtr»ṝess»Ṻƀaeiἒ἖Ἒls;䀽st;扟vĀ;DȵἠD;橸parsl;槥ĀDaἯἳot;打rr;楱ƀcdiἾὁỸr;愯oô͒ĀahὉὋ;䎷耻ð䃰Āmrὓὗl耻ë䃫o;悬ƀcipὡὤὧl;䀡sôծĀeoὬὴctatioîՙnentialåչৡᾒ\0ᾞ\0ᾡᾧ\0\0ῆῌ\0ΐ\0ῦῪ \0 ⁚llingdotseñṄy;䑄male;晀ƀilrᾭᾳ῁lig;耀ﬃɩᾹ\0\0᾽g;耀ﬀig;耀ﬄ;쀀𝔣lig;耀ﬁlig;쀀fjƀaltῙ῜ῡt;晭ig;耀ﬂns;斱of;䆒ǰ΅\0ῳf;쀀𝕗ĀakֿῷĀ;vῼ´拔;櫙artint;樍Āao‌⁕Ācs‑⁒α‚‰‸⁅⁈\0⁐β•‥‧‪‬\0‮耻½䂽;慓耻¼䂼;慕;慙;慛Ƴ‴\0‶;慔;慖ʴ‾⁁\0\0⁃耻¾䂾;慗;慜5;慘ƶ⁌\0⁎;慚;慝8;慞l;恄wn;挢cr;쀀𝒻ࢀEabcdefgijlnorstv₂₉₟₥₰₴⃰⃵⃺⃿℃ℒℸ̗ℾ⅒↞Ā;lٍ₇;檌ƀcmpₐₕ₝ute;䇵maĀ;dₜ᳚䎳;檆reve;䄟Āiy₪₮rc;䄝;䐳ot;䄡Ȁ;lqsؾق₽⃉ƀ;qsؾٌ⃄lanô٥Ȁ;cdl٥⃒⃥⃕c;檩otĀ;o⃜⃝檀Ā;l⃢⃣檂;檄Ā;e⃪⃭쀀⋛︀s;檔r;쀀𝔤Ā;gٳ؛mel;愷cy;䑓Ȁ;Eajٚℌℎℐ;檒;檥;檤ȀEaesℛℝ℩ℴ;扩pĀ;p℣ℤ檊rox»ℤĀ;q℮ℯ檈Ā;q℮ℛim;拧pf;쀀𝕘Āci⅃ⅆr;愊mƀ;el٫ⅎ⅐;檎;檐茀>;cdlqr׮ⅠⅪⅮⅳⅹĀciⅥⅧ;檧r;橺ot;拗Par;榕uest;橼ʀadelsↄⅪ←ٖ↛ǰ↉\0↎proø₞r;楸qĀlqؿ↖lesó₈ií٫Āen↣↭rtneqq;쀀≩︀Å↪ԀAabcefkosy⇄⇇⇱⇵⇺∘∝∯≨≽ròΠȀilmr⇐⇔⇗⇛rsðᒄf»․ilôکĀdr⇠⇤cy;䑊ƀ;cwࣴ⇫⇯ir;楈;憭ar;意irc;䄥ƀalr∁∎∓rtsĀ;u∉∊晥it»∊lip;怦con;抹r;쀀𝔥sĀew∣∩arow;椥arow;椦ʀamopr∺∾≃≞≣rr;懿tht;戻kĀlr≉≓eftarrow;憩ightarrow;憪f;쀀𝕙bar;怕ƀclt≯≴≸r;쀀𝒽asè⇴rok;䄧Ābp⊂⊇ull;恃hen»ᱛૡ⊣\0⊪\0⊸⋅⋎\0⋕⋳\0\0⋸⌢⍧⍢⍿\0⎆⎪⎴cute耻í䃭ƀ;iyݱ⊰⊵rc耻î䃮;䐸Ācx⊼⊿y;䐵cl耻¡䂡ĀfrΟ⋉;쀀𝔦rave耻ì䃬Ȁ;inoܾ⋝⋩⋮Āin⋢⋦nt;樌t;戭fin;槜ta;愩lig;䄳ƀaop⋾⌚⌝ƀcgt⌅⌈⌗r;䄫ƀelpܟ⌏⌓inåގarôܠh;䄱f;抷ed;䆵ʀ;cfotӴ⌬⌱⌽⍁are;愅inĀ;t⌸⌹戞ie;槝doô⌙ʀ;celpݗ⍌⍐⍛⍡al;抺Āgr⍕⍙eróᕣã⍍arhk;樗rod;樼Ȁcgpt⍯⍲⍶⍻y;䑑on;䄯f;쀀𝕚a;䎹uest耻¿䂿Āci⎊⎏r;쀀𝒾nʀ;EdsvӴ⎛⎝⎡ӳ;拹ot;拵Ā;v⎦⎧拴;拳Ā;iݷ⎮lde;䄩ǫ⎸\0⎼cy;䑖l耻ï䃯̀cfmosu⏌⏗⏜⏡⏧⏵Āiy⏑⏕rc;䄵;䐹r;쀀𝔧ath;䈷pf;쀀𝕛ǣ⏬\0⏱r;쀀𝒿rcy;䑘kcy;䑔Ѐacfghjos␋␖␢␧␭␱␵␻ppaĀ;v␓␔䎺;䏰Āey␛␠dil;䄷;䐺r;쀀𝔨reen;䄸cy;䑅cy;䑜pf;쀀𝕜cr;쀀𝓀஀ABEHabcdefghjlmnoprstuv⑰⒁⒆⒍⒑┎┽╚▀♎♞♥♹♽⚚⚲⛘❝❨➋⟀⠁⠒ƀart⑷⑺⑼rò৆òΕail;椛arr;椎Ā;gঔ⒋;檋ar;楢ॣ⒥\0⒪\0⒱\0\0\0\0\0⒵Ⓔ\0ⓆⓈⓍ\0⓹ute;䄺mptyv;榴raîࡌbda;䎻gƀ;dlࢎⓁⓃ;榑åࢎ;檅uo耻«䂫rЀ;bfhlpst࢙ⓞⓦⓩ⓫⓮⓱⓵Ā;f࢝ⓣs;椟s;椝ë≒p;憫l;椹im;楳l;憢ƀ;ae⓿─┄檫il;椙Ā;s┉┊檭;쀀⪭︀ƀabr┕┙┝rr;椌rk;杲Āak┢┬cĀek┨┪;䁻;䁛Āes┱┳;榋lĀdu┹┻;榏;榍Ȁaeuy╆╋╖╘ron;䄾Ādi═╔il;䄼ìࢰâ┩;䐻Ȁcqrs╣╦╭╽a;椶uoĀ;rนᝆĀdu╲╷har;楧shar;楋h;憲ʀ;fgqs▋▌উ◳◿扤tʀahlrt▘▤▷◂◨rrowĀ;t࢙□aé⓶arpoonĀdu▯▴own»њp»०eftarrows;懇ightƀahs◍◖◞rrowĀ;sࣴࢧarpoonó྘quigarro÷⇰hreetimes;拋ƀ;qs▋ও◺lanôবʀ;cdgsব☊☍☝☨c;檨otĀ;o☔☕橿Ā;r☚☛檁;檃Ā;e☢☥쀀⋚︀s;檓ʀadegs☳☹☽♉♋pproøⓆot;拖qĀgq♃♅ôউgtò⒌ôছiíলƀilr♕࣡♚sht;楼;쀀𝔩Ā;Eজ♣;檑š♩♶rĀdu▲♮Ā;l॥♳;楪lk;斄cy;䑙ʀ;achtੈ⚈⚋⚑⚖rò◁orneòᴈard;楫ri;旺Āio⚟⚤dot;䅀ustĀ;a⚬⚭掰che»⚭ȀEaes⚻⚽⛉⛔;扨pĀ;p⛃⛄檉rox»⛄Ā;q⛎⛏檇Ā;q⛎⚻im;拦Ѐabnoptwz⛩⛴⛷✚✯❁❇❐Ānr⛮⛱g;柬r;懽rëࣁgƀlmr⛿✍✔eftĀar০✇ightá৲apsto;柼ightá৽parrowĀlr✥✩efô⓭ight;憬ƀafl✶✹✽r;榅;쀀𝕝us;樭imes;樴š❋❏st;戗áፎƀ;ef❗❘᠀旊nge»❘arĀ;l❤❥䀨t;榓ʀachmt❳❶❼➅➇ròࢨorneòᶌarĀ;d྘➃;業;怎ri;抿̀achiqt➘➝ੀ➢➮➻quo;怹r;쀀𝓁mƀ;egল➪➬;檍;檏Ābu┪➳oĀ;rฟ➹;怚rok;䅂萀<;cdhilqrࠫ⟒☹⟜⟠⟥⟪⟰Āci⟗⟙;檦r;橹reå◲mes;拉arr;楶uest;橻ĀPi⟵⟹ar;榖ƀ;ef⠀भ᠛旃rĀdu⠇⠍shar;楊har;楦Āen⠗⠡rtneqq;쀀≨︀Å⠞܀Dacdefhilnopsu⡀⡅⢂⢎⢓⢠⢥⢨⣚⣢⣤ઃ⣳⤂Dot;戺Ȁclpr⡎⡒⡣⡽r耻¯䂯Āet⡗⡙;時Ā;e⡞⡟朠se»⡟Ā;sျ⡨toȀ;dluျ⡳⡷⡻owîҌefôएðᏑker;斮Āoy⢇⢌mma;権;䐼ash;怔asuredangle»ᘦr;쀀𝔪o;愧ƀcdn⢯⢴⣉ro耻µ䂵Ȁ;acdᑤ⢽⣀⣄sôᚧir;櫰ot肻·Ƶusƀ;bd⣒ᤃ⣓戒Ā;uᴼ⣘;横ţ⣞⣡p;櫛ò−ðઁĀdp⣩⣮els;抧f;쀀𝕞Āct⣸⣽r;쀀𝓂pos»ᖝƀ;lm⤉⤊⤍䎼timap;抸ఀGLRVabcdefghijlmoprstuvw⥂⥓⥾⦉⦘⧚⧩⨕⨚⩘⩝⪃⪕⪤⪨⬄⬇⭄⭿⮮ⰴⱧⱼ⳩Āgt⥇⥋;쀀⋙̸Ā;v⥐௏쀀≫⃒ƀelt⥚⥲⥶ftĀar⥡⥧rrow;懍ightarrow;懎;쀀⋘̸Ā;v⥻ే쀀≪⃒ightarrow;懏ĀDd⦎⦓ash;抯ash;抮ʀbcnpt⦣⦧⦬⦱⧌la»˞ute;䅄g;쀀∠⃒ʀ;Eiop඄⦼⧀⧅⧈;쀀⩰̸d;쀀≋̸s;䅉roø඄urĀ;a⧓⧔普lĀ;s⧓ସǳ⧟\0⧣p肻 ଷmpĀ;e௹ఀʀaeouy⧴⧾⨃⨐⨓ǰ⧹\0⧻;橃on;䅈dil;䅆ngĀ;dൾ⨊ot;쀀⩭̸p;橂;䐽ash;怓΀;Aadqsxஒ⨩⨭⨻⩁⩅⩐rr;懗rĀhr⨳⨶k;椤Ā;oᏲᏰot;쀀≐̸uiöୣĀei⩊⩎ar;椨í஘istĀ;s஠டr;쀀𝔫ȀEest௅⩦⩹⩼ƀ;qs஼⩭௡ƀ;qs஼௅⩴lanô௢ií௪Ā;rஶ⪁»ஷƀAap⪊⪍⪑rò⥱rr;憮ar;櫲ƀ;svྍ⪜ྌĀ;d⪡⪢拼;拺cy;䑚΀AEadest⪷⪺⪾⫂⫅⫶⫹rò⥦;쀀≦̸rr;憚r;急Ȁ;fqs఻⫎⫣⫯tĀar⫔⫙rro÷⫁ightarro÷⪐ƀ;qs఻⪺⫪lanôౕĀ;sౕ⫴»శiíౝĀ;rవ⫾iĀ;eచథiäඐĀpt⬌⬑f;쀀𝕟膀¬;in⬙⬚⬶䂬nȀ;Edvஉ⬤⬨⬮;쀀⋹̸ot;쀀⋵̸ǡஉ⬳⬵;拷;拶iĀ;vಸ⬼ǡಸ⭁⭃;拾;拽ƀaor⭋⭣⭩rȀ;ast୻⭕⭚⭟lleì୻l;쀀⫽⃥;쀀∂̸lint;樔ƀ;ceಒ⭰⭳uåಥĀ;cಘ⭸Ā;eಒ⭽ñಘȀAait⮈⮋⮝⮧rò⦈rrƀ;cw⮔⮕⮙憛;쀀⤳̸;쀀↝̸ghtarrow»⮕riĀ;eೋೖ΀chimpqu⮽⯍⯙⬄୸⯤⯯Ȁ;cerല⯆ഷ⯉uå൅;쀀𝓃ortɭ⬅\0\0⯖ará⭖mĀ;e൮⯟Ā;q൴൳suĀbp⯫⯭å೸åഋƀbcp⯶ⰑⰙȀ;Ees⯿ⰀഢⰄ抄;쀀⫅̸etĀ;eഛⰋqĀ;qണⰀcĀ;eലⰗñസȀ;EesⰢⰣൟⰧ抅;쀀⫆̸etĀ;e൘ⰮqĀ;qൠⰣȀgilrⰽⰿⱅⱇìௗlde耻ñ䃱çృiangleĀlrⱒⱜeftĀ;eచⱚñదightĀ;eೋⱥñ೗Ā;mⱬⱭ䎽ƀ;esⱴⱵⱹ䀣ro;愖p;怇ҀDHadgilrsⲏⲔⲙⲞⲣⲰⲶⳓⳣash;抭arr;椄p;쀀≍⃒ash;抬ĀetⲨⲬ;쀀≥⃒;쀀>⃒nfin;槞ƀAetⲽⳁⳅrr;椂;쀀≤⃒Ā;rⳊⳍ쀀<⃒ie;쀀⊴⃒ĀAtⳘⳜrr;椃rie;쀀⊵⃒im;쀀∼⃒ƀAan⳰⳴ⴂrr;懖rĀhr⳺⳽k;椣Ā;oᏧᏥear;椧ቓ᪕\0\0\0\0\0\0\0\0\0\0\0\0\0ⴭ\0ⴸⵈⵠⵥ⵲ⶄᬇ\0\0ⶍⶫ\0ⷈⷎ\0ⷜ⸙⸫⸾⹃Ācsⴱ᪗ute耻ó䃳ĀiyⴼⵅrĀ;c᪞ⵂ耻ô䃴;䐾ʀabios᪠ⵒⵗǈⵚlac;䅑v;樸old;榼lig;䅓Ācr⵩⵭ir;榿;쀀𝔬ͯ⵹\0\0⵼\0ⶂn;䋛ave耻ò䃲;槁Ābmⶈ෴ar;榵Ȁacitⶕ⶘ⶥⶨrò᪀Āir⶝ⶠr;榾oss;榻nå๒;槀ƀaeiⶱⶵⶹcr;䅍ga;䏉ƀcdnⷀⷅǍron;䎿;榶pf;쀀𝕠ƀaelⷔ⷗ǒr;榷rp;榹΀;adiosvⷪⷫⷮ⸈⸍⸐⸖戨rò᪆Ȁ;efmⷷⷸ⸂⸅橝rĀ;oⷾⷿ愴f»ⷿ耻ª䂪耻º䂺gof;抶r;橖lope;橗;橛ƀclo⸟⸡⸧ò⸁ash耻ø䃸l;折iŬⸯ⸴de耻õ䃵esĀ;aǛ⸺s;樶ml耻ö䃶bar;挽ૡ⹞\0⹽\0⺀⺝\0⺢⺹\0\0⻋ຜ\0⼓\0\0⼫⾼\0⿈rȀ;astЃ⹧⹲຅脀¶;l⹭⹮䂶leìЃɩ⹸\0\0⹻m;櫳;櫽y;䐿rʀcimpt⺋⺏⺓ᡥ⺗nt;䀥od;䀮il;怰enk;怱r;쀀𝔭ƀimo⺨⺰⺴Ā;v⺭⺮䏆;䏕maô੶ne;明ƀ;tv⺿⻀⻈䏀chfork»´;䏖Āau⻏⻟nĀck⻕⻝kĀ;h⇴⻛;愎ö⇴sҀ;abcdemst⻳⻴ᤈ⻹⻽⼄⼆⼊⼎䀫cir;樣ir;樢Āouᵀ⼂;樥;橲n肻±ຝim;樦wo;樧ƀipu⼙⼠⼥ntint;樕f;쀀𝕡nd耻£䂣Ԁ;Eaceinosu່⼿⽁⽄⽇⾁⾉⾒⽾⾶;檳p;檷uå໙Ā;c໎⽌̀;acens່⽙⽟⽦⽨⽾pproø⽃urlyeñ໙ñ໎ƀaes⽯⽶⽺pprox;檹qq;檵im;拨iíໟmeĀ;s⾈ຮ怲ƀEas⽸⾐⽺ð⽵ƀdfp໬⾙⾯ƀals⾠⾥⾪lar;挮ine;挒urf;挓Ā;t໻⾴ï໻rel;抰Āci⿀⿅r;쀀𝓅;䏈ncsp;怈̀fiopsu⿚⋢⿟⿥⿫⿱r;쀀𝔮pf;쀀𝕢rime;恗cr;쀀𝓆ƀaeo⿸〉〓tĀei⿾々rnionóڰnt;樖stĀ;e【】䀿ñἙô༔઀ABHabcdefhilmnoprstux぀けさすムㄎㄫㅇㅢㅲㆎ㈆㈕㈤㈩㉘㉮㉲㊐㊰㊷ƀartぇおがròႳòϝail;検aròᱥar;楤΀cdenqrtとふへみわゔヌĀeuねぱ;쀀∽̱te;䅕iãᅮmptyv;榳gȀ;del࿑らるろ;榒;榥å࿑uo耻»䂻rր;abcfhlpstw࿜ガクシスゼゾダッデナp;極Ā;f࿠ゴs;椠;椳s;椞ë≝ð✮l;楅im;楴l;憣;憝Āaiパフil;椚oĀ;nホボ戶aló༞ƀabrョリヮrò៥rk;杳ĀakンヽcĀekヹ・;䁽;䁝Āes㄂㄄;榌lĀduㄊㄌ;榎;榐Ȁaeuyㄗㄜㄧㄩron;䅙Ādiㄡㄥil;䅗ì࿲âヺ;䑀Ȁclqsㄴㄷㄽㅄa;椷dhar;楩uoĀ;rȎȍh;憳ƀacgㅎㅟངlȀ;ipsླྀㅘㅛႜnåႻarôྩt;断ƀilrㅩဣㅮsht;楽;쀀𝔯ĀaoㅷㆆrĀduㅽㅿ»ѻĀ;l႑ㆄ;楬Ā;vㆋㆌ䏁;䏱ƀgns㆕ㇹㇼht̀ahlrstㆤㆰ㇂㇘㇤㇮rrowĀ;t࿜ㆭaéトarpoonĀduㆻㆿowîㅾp»႒eftĀah㇊㇐rrowó࿪arpoonóՑightarrows;應quigarro÷ニhreetimes;拌g;䋚ingdotseñἲƀahm㈍㈐㈓rò࿪aòՑ;怏oustĀ;a㈞㈟掱che»㈟mid;櫮Ȁabpt㈲㈽㉀㉒Ānr㈷㈺g;柭r;懾rëဃƀafl㉇㉊㉎r;榆;쀀𝕣us;樮imes;樵Āap㉝㉧rĀ;g㉣㉤䀩t;榔olint;樒arò㇣Ȁachq㉻㊀Ⴜ㊅quo;怺r;쀀𝓇Ābu・㊊oĀ;rȔȓƀhir㊗㊛㊠reåㇸmes;拊iȀ;efl㊪ၙᠡ㊫方tri;槎luhar;楨;愞ൡ㋕㋛㋟㌬㌸㍱\0㍺㎤\0\0㏬㏰\0㐨㑈㑚㒭㒱㓊㓱\0㘖\0\0㘳cute;䅛quï➺Ԁ;Eaceinpsyᇭ㋳㋵㋿㌂㌋㌏㌟㌦㌩;檴ǰ㋺\0㋼;檸on;䅡uåᇾĀ;dᇳ㌇il;䅟rc;䅝ƀEas㌖㌘㌛;檶p;檺im;择olint;樓iíሄ;䑁otƀ;be㌴ᵇ㌵担;橦΀Aacmstx㍆㍊㍗㍛㍞㍣㍭rr;懘rĀhr㍐㍒ë∨Ā;oਸ਼਴t耻§䂧i;䀻war;椩mĀin㍩ðnuóñt;朶rĀ;o㍶⁕쀀𝔰Ȁacoy㎂㎆㎑㎠rp;景Āhy㎋㎏cy;䑉;䑈rtɭ㎙\0\0㎜iäᑤaraì⹯耻­䂭Āgm㎨㎴maƀ;fv㎱㎲㎲䏃;䏂Ѐ;deglnprካ㏅㏉㏎㏖㏞㏡㏦ot;橪Ā;q኱ኰĀ;E㏓㏔檞;檠Ā;E㏛㏜檝;檟e;扆lus;樤arr;楲aròᄽȀaeit㏸㐈㐏㐗Āls㏽㐄lsetmé㍪hp;樳parsl;槤Ādlᑣ㐔e;挣Ā;e㐜㐝檪Ā;s㐢㐣檬;쀀⪬︀ƀflp㐮㐳㑂tcy;䑌Ā;b㐸㐹䀯Ā;a㐾㐿槄r;挿f;쀀𝕤aĀdr㑍ЂesĀ;u㑔㑕晠it»㑕ƀcsu㑠㑹㒟Āau㑥㑯pĀ;sᆈ㑫;쀀⊓︀pĀ;sᆴ㑵;쀀⊔︀uĀbp㑿㒏ƀ;esᆗᆜ㒆etĀ;eᆗ㒍ñᆝƀ;esᆨᆭ㒖etĀ;eᆨ㒝ñᆮƀ;afᅻ㒦ְrť㒫ֱ»ᅼaròᅈȀcemt㒹㒾㓂㓅r;쀀𝓈tmîñiì㐕aræᆾĀar㓎㓕rĀ;f㓔ឿ昆Āan㓚㓭ightĀep㓣㓪psiloîỠhé⺯s»⡒ʀbcmnp㓻㕞ሉ㖋㖎Ҁ;Edemnprs㔎㔏㔑㔕㔞㔣㔬㔱㔶抂;櫅ot;檽Ā;dᇚ㔚ot;櫃ult;櫁ĀEe㔨㔪;櫋;把lus;檿arr;楹ƀeiu㔽㕒㕕tƀ;en㔎㕅㕋qĀ;qᇚ㔏eqĀ;q㔫㔨m;櫇Ābp㕚㕜;櫕;櫓c̀;acensᇭ㕬㕲㕹㕻㌦pproø㋺urlyeñᇾñᇳƀaes㖂㖈㌛pproø㌚qñ㌗g;晪ڀ123;Edehlmnps㖩㖬㖯ሜ㖲㖴㗀㗉㗕㗚㗟㗨㗭耻¹䂹耻²䂲耻³䂳;櫆Āos㖹㖼t;檾ub;櫘Ā;dሢ㗅ot;櫄sĀou㗏㗒l;柉b;櫗arr;楻ult;櫂ĀEe㗤㗦;櫌;抋lus;櫀ƀeiu㗴㘉㘌tƀ;enሜ㗼㘂qĀ;qሢ㖲eqĀ;q㗧㗤m;櫈Ābp㘑㘓;櫔;櫖ƀAan㘜㘠㘭rr;懙rĀhr㘦㘨ë∮Ā;oਫ਩war;椪lig耻ß䃟௡㙑㙝㙠ዎ㙳㙹\0㙾㛂\0\0\0\0\0㛛㜃\0㜉㝬\0\0\0㞇ɲ㙖\0\0㙛get;挖;䏄rë๟ƀaey㙦㙫㙰ron;䅥dil;䅣;䑂lrec;挕r;쀀𝔱Ȁeiko㚆㚝㚵㚼ǲ㚋\0㚑eĀ4fኄኁaƀ;sv㚘㚙㚛䎸ym;䏑Ācn㚢㚲kĀas㚨㚮pproø዁im»ኬsðኞĀas㚺㚮ð዁rn耻þ䃾Ǭ̟㛆⋧es膀×;bd㛏㛐㛘䃗Ā;aᤏ㛕r;樱;樰ƀeps㛡㛣㜀á⩍Ȁ;bcf҆㛬㛰㛴ot;挶ir;櫱Ā;o㛹㛼쀀𝕥rk;櫚á㍢rime;怴ƀaip㜏㜒㝤dåቈ΀adempst㜡㝍㝀㝑㝗㝜㝟ngleʀ;dlqr㜰㜱㜶㝀㝂斵own»ᶻeftĀ;e⠀㜾ñम;扜ightĀ;e㊪㝋ñၚot;旬inus;樺lus;樹b;槍ime;樻ezium;揢ƀcht㝲㝽㞁Āry㝷㝻;쀀𝓉;䑆cy;䑛rok;䅧Āio㞋㞎xô᝷headĀlr㞗㞠eftarro÷ࡏightarrow»ཝऀAHabcdfghlmoprstuw㟐㟓㟗㟤㟰㟼㠎㠜㠣㠴㡑㡝㡫㢩㣌㣒㣪㣶ròϭar;楣Ācr㟜㟢ute耻ú䃺òᅐrǣ㟪\0㟭y;䑞ve;䅭Āiy㟵㟺rc耻û䃻;䑃ƀabh㠃㠆㠋ròᎭlac;䅱aòᏃĀir㠓㠘sht;楾;쀀𝔲rave耻ù䃹š㠧㠱rĀlr㠬㠮»ॗ»ႃlk;斀Āct㠹㡍ɯ㠿\0\0㡊rnĀ;e㡅㡆挜r»㡆op;挏ri;旸Āal㡖㡚cr;䅫肻¨͉Āgp㡢㡦on;䅳f;쀀𝕦̀adhlsuᅋ㡸㡽፲㢑㢠ownáᎳarpoonĀlr㢈㢌efô㠭ighô㠯iƀ;hl㢙㢚㢜䏅»ᏺon»㢚parrows;懈ƀcit㢰㣄㣈ɯ㢶\0\0㣁rnĀ;e㢼㢽挝r»㢽op;挎ng;䅯ri;旹cr;쀀𝓊ƀdir㣙㣝㣢ot;拰lde;䅩iĀ;f㜰㣨»᠓Āam㣯㣲rò㢨l耻ü䃼angle;榧ހABDacdeflnoprsz㤜㤟㤩㤭㦵㦸㦽㧟㧤㧨㧳㧹㧽㨁㨠ròϷarĀ;v㤦㤧櫨;櫩asèϡĀnr㤲㤷grt;榜΀eknprst㓣㥆㥋㥒㥝㥤㦖appá␕othinçẖƀhir㓫⻈㥙opô⾵Ā;hᎷ㥢ïㆍĀiu㥩㥭gmá㎳Ābp㥲㦄setneqĀ;q㥽㦀쀀⊊︀;쀀⫋︀setneqĀ;q㦏㦒쀀⊋︀;쀀⫌︀Āhr㦛㦟etá㚜iangleĀlr㦪㦯eft»थight»ၑy;䐲ash»ံƀelr㧄㧒㧗ƀ;beⷪ㧋㧏ar;抻q;扚lip;拮Ābt㧜ᑨaòᑩr;쀀𝔳tré㦮suĀbp㧯㧱»ജ»൙pf;쀀𝕧roð໻tré㦴Ācu㨆㨋r;쀀𝓋Ābp㨐㨘nĀEe㦀㨖»㥾nĀEe㦒㨞»㦐igzag;榚΀cefoprs㨶㨻㩖㩛㩔㩡㩪irc;䅵Ādi㩀㩑Ābg㩅㩉ar;機eĀ;qᗺ㩏;扙erp;愘r;쀀𝔴pf;쀀𝕨Ā;eᑹ㩦atèᑹcr;쀀𝓌ૣណ㪇\0㪋\0㪐㪛\0\0㪝㪨㪫㪯\0\0㫃㫎\0㫘ៜ៟tré៑r;쀀𝔵ĀAa㪔㪗ròσrò৶;䎾ĀAa㪡㪤ròθrò৫að✓is;拻ƀdptឤ㪵㪾Āfl㪺ឩ;쀀𝕩imåឲĀAa㫇㫊ròώròਁĀcq㫒ីr;쀀𝓍Āpt៖㫜ré។Ѐacefiosu㫰㫽㬈㬌㬑㬕㬛㬡cĀuy㫶㫻te耻ý䃽;䑏Āiy㬂㬆rc;䅷;䑋n耻¥䂥r;쀀𝔶cy;䑗pf;쀀𝕪cr;쀀𝓎Ācm㬦㬩y;䑎l耻ÿ䃿Ԁacdefhiosw㭂㭈㭔㭘㭤㭩㭭㭴㭺㮀cute;䅺Āay㭍㭒ron;䅾;䐷ot;䅼Āet㭝㭡træᕟa;䎶r;쀀𝔷cy;䐶grarr;懝pf;쀀𝕫cr;쀀𝓏Ājn㮅㮇;怍j;怌'.split("").map((u) => u.charCodeAt(0))
), Pt = new Uint16Array(
  // prettier-ignore
  "Ȁaglq	\x1Bɭ\0\0p;䀦os;䀧t;䀾t;䀼uot;䀢".split("").map((u) => u.charCodeAt(0))
);
var pe;
const Lt = /* @__PURE__ */ new Map([
  [0, 65533],
  // C1 Unicode control character reference replacements
  [128, 8364],
  [130, 8218],
  [131, 402],
  [132, 8222],
  [133, 8230],
  [134, 8224],
  [135, 8225],
  [136, 710],
  [137, 8240],
  [138, 352],
  [139, 8249],
  [140, 338],
  [142, 381],
  [145, 8216],
  [146, 8217],
  [147, 8220],
  [148, 8221],
  [149, 8226],
  [150, 8211],
  [151, 8212],
  [152, 732],
  [153, 8482],
  [154, 353],
  [155, 8250],
  [156, 339],
  [158, 382],
  [159, 376]
]), Nt = (
  // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition, node/no-unsupported-features/es-builtins
  (pe = String.fromCodePoint) !== null && pe !== void 0 ? pe : function(u) {
    let e = "";
    return u > 65535 && (u -= 65536, e += String.fromCharCode(u >>> 10 & 1023 | 55296), u = 56320 | u & 1023), e += String.fromCharCode(u), e;
  }
);
function jt(u) {
  var e;
  return u >= 55296 && u <= 57343 || u > 1114111 ? 65533 : (e = Lt.get(u)) !== null && e !== void 0 ? e : u;
}
var F;
(function(u) {
  u[u.NUM = 35] = "NUM", u[u.SEMI = 59] = "SEMI", u[u.EQUALS = 61] = "EQUALS", u[u.ZERO = 48] = "ZERO", u[u.NINE = 57] = "NINE", u[u.LOWER_A = 97] = "LOWER_A", u[u.LOWER_F = 102] = "LOWER_F", u[u.LOWER_X = 120] = "LOWER_X", u[u.LOWER_Z = 122] = "LOWER_Z", u[u.UPPER_A = 65] = "UPPER_A", u[u.UPPER_F = 70] = "UPPER_F", u[u.UPPER_Z = 90] = "UPPER_Z";
})(F || (F = {}));
const $t = 32;
var L;
(function(u) {
  u[u.VALUE_LENGTH = 49152] = "VALUE_LENGTH", u[u.BRANCH_LENGTH = 16256] = "BRANCH_LENGTH", u[u.JUMP_TABLE = 127] = "JUMP_TABLE";
})(L || (L = {}));
function De(u) {
  return u >= F.ZERO && u <= F.NINE;
}
function Ht(u) {
  return u >= F.UPPER_A && u <= F.UPPER_F || u >= F.LOWER_A && u <= F.LOWER_F;
}
function Gt(u) {
  return u >= F.UPPER_A && u <= F.UPPER_Z || u >= F.LOWER_A && u <= F.LOWER_Z || De(u);
}
function Ut(u) {
  return u === F.EQUALS || Gt(u);
}
var E;
(function(u) {
  u[u.EntityStart = 0] = "EntityStart", u[u.NumericStart = 1] = "NumericStart", u[u.NumericDecimal = 2] = "NumericDecimal", u[u.NumericHex = 3] = "NumericHex", u[u.NamedEntity = 4] = "NamedEntity";
})(E || (E = {}));
var P;
(function(u) {
  u[u.Legacy = 0] = "Legacy", u[u.Strict = 1] = "Strict", u[u.Attribute = 2] = "Attribute";
})(P || (P = {}));
class Zt {
  constructor(e, r, n) {
    this.decodeTree = e, this.emitCodePoint = r, this.errors = n, this.state = E.EntityStart, this.consumed = 1, this.result = 0, this.treeIndex = 0, this.excess = 1, this.decodeMode = P.Strict;
  }
  /** Resets the instance to make it reusable. */
  startEntity(e) {
    this.decodeMode = e, this.state = E.EntityStart, this.result = 0, this.treeIndex = 0, this.excess = 1, this.consumed = 1;
  }
  /**
   * Write an entity to the decoder. This can be called multiple times with partial entities.
   * If the entity is incomplete, the decoder will return -1.
   *
   * Mirrors the implementation of `getDecoder`, but with the ability to stop decoding if the
   * entity is incomplete, and resume when the next string is written.
   *
   * @param string The string containing the entity (or a continuation of the entity).
   * @param offset The offset at which the entity begins. Should be 0 if this is not the first call.
   * @returns The number of characters that were consumed, or -1 if the entity is incomplete.
   */
  write(e, r) {
    switch (this.state) {
      case E.EntityStart:
        return e.charCodeAt(r) === F.NUM ? (this.state = E.NumericStart, this.consumed += 1, this.stateNumericStart(e, r + 1)) : (this.state = E.NamedEntity, this.stateNamedEntity(e, r));
      case E.NumericStart:
        return this.stateNumericStart(e, r);
      case E.NumericDecimal:
        return this.stateNumericDecimal(e, r);
      case E.NumericHex:
        return this.stateNumericHex(e, r);
      case E.NamedEntity:
        return this.stateNamedEntity(e, r);
    }
  }
  /**
   * Switches between the numeric decimal and hexadecimal states.
   *
   * Equivalent to the `Numeric character reference state` in the HTML spec.
   *
   * @param str The string containing the entity (or a continuation of the entity).
   * @param offset The current offset.
   * @returns The number of characters that were consumed, or -1 if the entity is incomplete.
   */
  stateNumericStart(e, r) {
    return r >= e.length ? -1 : (e.charCodeAt(r) | $t) === F.LOWER_X ? (this.state = E.NumericHex, this.consumed += 1, this.stateNumericHex(e, r + 1)) : (this.state = E.NumericDecimal, this.stateNumericDecimal(e, r));
  }
  addToNumericResult(e, r, n, c) {
    if (r !== n) {
      const t = n - r;
      this.result = this.result * Math.pow(c, t) + parseInt(e.substr(r, t), c), this.consumed += t;
    }
  }
  /**
   * Parses a hexadecimal numeric entity.
   *
   * Equivalent to the `Hexademical character reference state` in the HTML spec.
   *
   * @param str The string containing the entity (or a continuation of the entity).
   * @param offset The current offset.
   * @returns The number of characters that were consumed, or -1 if the entity is incomplete.
   */
  stateNumericHex(e, r) {
    const n = r;
    for (; r < e.length; ) {
      const c = e.charCodeAt(r);
      if (De(c) || Ht(c))
        r += 1;
      else
        return this.addToNumericResult(e, n, r, 16), this.emitNumericEntity(c, 3);
    }
    return this.addToNumericResult(e, n, r, 16), -1;
  }
  /**
   * Parses a decimal numeric entity.
   *
   * Equivalent to the `Decimal character reference state` in the HTML spec.
   *
   * @param str The string containing the entity (or a continuation of the entity).
   * @param offset The current offset.
   * @returns The number of characters that were consumed, or -1 if the entity is incomplete.
   */
  stateNumericDecimal(e, r) {
    const n = r;
    for (; r < e.length; ) {
      const c = e.charCodeAt(r);
      if (De(c))
        r += 1;
      else
        return this.addToNumericResult(e, n, r, 10), this.emitNumericEntity(c, 2);
    }
    return this.addToNumericResult(e, n, r, 10), -1;
  }
  /**
   * Validate and emit a numeric entity.
   *
   * Implements the logic from the `Hexademical character reference start
   * state` and `Numeric character reference end state` in the HTML spec.
   *
   * @param lastCp The last code point of the entity. Used to see if the
   *               entity was terminated with a semicolon.
   * @param expectedLength The minimum number of characters that should be
   *                       consumed. Used to validate that at least one digit
   *                       was consumed.
   * @returns The number of characters that were consumed.
   */
  emitNumericEntity(e, r) {
    var n;
    if (this.consumed <= r)
      return (n = this.errors) === null || n === void 0 || n.absenceOfDigitsInNumericCharacterReference(this.consumed), 0;
    if (e === F.SEMI)
      this.consumed += 1;
    else if (this.decodeMode === P.Strict)
      return 0;
    return this.emitCodePoint(jt(this.result), this.consumed), this.errors && (e !== F.SEMI && this.errors.missingSemicolonAfterCharacterReference(), this.errors.validateNumericCharacterReference(this.result)), this.consumed;
  }
  /**
   * Parses a named entity.
   *
   * Equivalent to the `Named character reference state` in the HTML spec.
   *
   * @param str The string containing the entity (or a continuation of the entity).
   * @param offset The current offset.
   * @returns The number of characters that were consumed, or -1 if the entity is incomplete.
   */
  stateNamedEntity(e, r) {
    const { decodeTree: n } = this;
    let c = n[this.treeIndex], t = (c & L.VALUE_LENGTH) >> 14;
    for (; r < e.length; r++, this.excess++) {
      const a = e.charCodeAt(r);
      if (this.treeIndex = Vt(n, c, this.treeIndex + Math.max(1, t), a), this.treeIndex < 0)
        return this.result === 0 || // If we are parsing an attribute
        this.decodeMode === P.Attribute && // We shouldn't have consumed any characters after the entity,
        (t === 0 || // And there should be no invalid characters.
        Ut(a)) ? 0 : this.emitNotTerminatedNamedEntity();
      if (c = n[this.treeIndex], t = (c & L.VALUE_LENGTH) >> 14, t !== 0) {
        if (a === F.SEMI)
          return this.emitNamedEntityData(this.treeIndex, t, this.consumed + this.excess);
        this.decodeMode !== P.Strict && (this.result = this.treeIndex, this.consumed += this.excess, this.excess = 0);
      }
    }
    return -1;
  }
  /**
   * Emit a named entity that was not terminated with a semicolon.
   *
   * @returns The number of characters consumed.
   */
  emitNotTerminatedNamedEntity() {
    var e;
    const { result: r, decodeTree: n } = this, c = (n[r] & L.VALUE_LENGTH) >> 14;
    return this.emitNamedEntityData(r, c, this.consumed), (e = this.errors) === null || e === void 0 || e.missingSemicolonAfterCharacterReference(), this.consumed;
  }
  /**
   * Emit a named entity.
   *
   * @param result The index of the entity in the decode tree.
   * @param valueLength The number of bytes in the entity.
   * @param consumed The number of characters consumed.
   *
   * @returns The number of characters consumed.
   */
  emitNamedEntityData(e, r, n) {
    const { decodeTree: c } = this;
    return this.emitCodePoint(r === 1 ? c[e] & ~L.VALUE_LENGTH : c[e + 1], n), r === 3 && this.emitCodePoint(c[e + 2], n), n;
  }
  /**
   * Signal to the parser that the end of the input was reached.
   *
   * Remaining data will be emitted and relevant errors will be produced.
   *
   * @returns The number of characters consumed.
   */
  end() {
    var e;
    switch (this.state) {
      case E.NamedEntity:
        return this.result !== 0 && (this.decodeMode !== P.Attribute || this.result === this.treeIndex) ? this.emitNotTerminatedNamedEntity() : 0;
      // Otherwise, emit a numeric entity if we have one.
      case E.NumericDecimal:
        return this.emitNumericEntity(0, 2);
      case E.NumericHex:
        return this.emitNumericEntity(0, 3);
      case E.NumericStart:
        return (e = this.errors) === null || e === void 0 || e.absenceOfDigitsInNumericCharacterReference(this.consumed), 0;
      case E.EntityStart:
        return 0;
    }
  }
}
function sr(u) {
  let e = "";
  const r = new Zt(u, (n) => e += Nt(n));
  return function(c, t) {
    let a = 0, i = 0;
    for (; (i = c.indexOf("&", i)) >= 0; ) {
      e += c.slice(a, i), r.startEntity(t);
      const s = r.write(
        c,
        // Skip the "&"
        i + 1
      );
      if (s < 0) {
        a = i + r.end();
        break;
      }
      a = i + s, i = s === 0 ? a + 1 : a;
    }
    const o = e + c.slice(a);
    return e = "", o;
  };
}
function Vt(u, e, r, n) {
  const c = (e & L.BRANCH_LENGTH) >> 7, t = e & L.JUMP_TABLE;
  if (c === 0)
    return t !== 0 && n === t ? r : -1;
  if (t) {
    const o = n - t;
    return o < 0 || o >= c ? -1 : u[r + o] - 1;
  }
  let a = r, i = a + c - 1;
  for (; a <= i; ) {
    const o = a + i >>> 1, s = u[o];
    if (s < n)
      a = o + 1;
    else if (s > n)
      i = o - 1;
    else
      return u[o + c];
  }
  return -1;
}
const Wt = sr(Ot);
sr(Pt);
function fr(u, e = P.Legacy) {
  return Wt(u, e);
}
function Jt(u) {
  return Object.prototype.toString.call(u);
}
function ze(u) {
  return Jt(u) === "[object String]";
}
const Kt = Object.prototype.hasOwnProperty;
function Qt(u, e) {
  return Kt.call(u, e);
}
function du(u) {
  return Array.prototype.slice.call(arguments, 1).forEach(function(r) {
    if (r) {
      if (typeof r != "object")
        throw new TypeError(r + "must be object");
      Object.keys(r).forEach(function(n) {
        u[n] = r[n];
      });
    }
  }), u;
}
function lr(u, e, r) {
  return [].concat(u.slice(0, e), r, u.slice(e + 1));
}
function Ie(u) {
  return !(u >= 55296 && u <= 57343 || u >= 64976 && u <= 65007 || (u & 65535) === 65535 || (u & 65535) === 65534 || u >= 0 && u <= 8 || u === 11 || u >= 14 && u <= 31 || u >= 127 && u <= 159 || u > 1114111);
}
function iu(u) {
  if (u > 65535) {
    u -= 65536;
    const e = 55296 + (u >> 10), r = 56320 + (u & 1023);
    return String.fromCharCode(e, r);
  }
  return String.fromCharCode(u);
}
const dr = /\\([!"#$%&'()*+,\-./:;<=>?@[\\\]^_`{|}~])/g, Xt = /&([a-z#][a-z0-9]{1,31});/gi, Yt = new RegExp(dr.source + "|" + Xt.source, "gi"), un = /^#((?:x[a-f0-9]{1,8}|[0-9]{1,8}))$/i;
function en(u, e) {
  if (e.charCodeAt(0) === 35 && un.test(e)) {
    const n = e[1].toLowerCase() === "x" ? parseInt(e.slice(2), 16) : parseInt(e.slice(1), 10);
    return Ie(n) ? iu(n) : u;
  }
  const r = fr(u);
  return r !== u ? r : u;
}
function rn(u) {
  return u.indexOf("\\") < 0 ? u : u.replace(dr, "$1");
}
function Z(u) {
  return u.indexOf("\\") < 0 && u.indexOf("&") < 0 ? u : u.replace(Yt, function(e, r, n) {
    return r || en(e, n);
  });
}
const tn = /[&<>"]/, nn = /[&<>"]/g, cn = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;"
};
function an(u) {
  return cn[u];
}
function N(u) {
  return tn.test(u) ? u.replace(nn, an) : u;
}
const on = /[.?*+^$[\]\\(){}|-]/g;
function sn(u) {
  return u.replace(on, "\\$&");
}
function y(u) {
  switch (u) {
    case 9:
    case 32:
      return !0;
  }
  return !1;
}
function J(u) {
  if (u >= 8192 && u <= 8202)
    return !0;
  switch (u) {
    case 9:
    // \t
    case 10:
    // \n
    case 11:
    // \v
    case 12:
    // \f
    case 13:
    // \r
    case 32:
    case 160:
    case 5760:
    case 8239:
    case 8287:
    case 12288:
      return !0;
  }
  return !1;
}
function K(u) {
  return Re.test(u) || ar.test(u);
}
function Q(u) {
  switch (u) {
    case 33:
    case 34:
    case 35:
    case 36:
    case 37:
    case 38:
    case 39:
    case 40:
    case 41:
    case 42:
    case 43:
    case 44:
    case 45:
    case 46:
    case 47:
    case 58:
    case 59:
    case 60:
    case 61:
    case 62:
    case 63:
    case 64:
    case 91:
    case 92:
    case 93:
    case 94:
    case 95:
    case 96:
    case 123:
    case 124:
    case 125:
    case 126:
      return !0;
    default:
      return !1;
  }
}
function hu(u) {
  return u = u.trim().replace(/\s+/g, " "), "ẞ".toLowerCase() === "Ṿ" && (u = u.replace(/ẞ/g, "ß")), u.toLowerCase().toUpperCase();
}
const fn = { mdurl: It, ucmicro: Bt }, ln = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  arrayReplaceAt: lr,
  assign: du,
  escapeHtml: N,
  escapeRE: sn,
  fromCodePoint: iu,
  has: Qt,
  isMdAsciiPunct: Q,
  isPunctChar: K,
  isSpace: y,
  isString: ze,
  isValidEntityCode: Ie,
  isWhiteSpace: J,
  lib: fn,
  normalizeReference: hu,
  unescapeAll: Z,
  unescapeMd: rn
}, Symbol.toStringTag, { value: "Module" }));
function dn(u, e, r) {
  let n, c, t, a;
  const i = u.posMax, o = u.pos;
  for (u.pos = e + 1, n = 1; u.pos < i; ) {
    if (t = u.src.charCodeAt(u.pos), t === 93 && (n--, n === 0)) {
      c = !0;
      break;
    }
    if (a = u.pos, u.md.inline.skipToken(u), t === 91) {
      if (a === u.pos - 1)
        n++;
      else if (r)
        return u.pos = o, -1;
    }
  }
  let s = -1;
  return c && (s = u.pos), u.pos = o, s;
}
function hn(u, e, r) {
  let n, c = e;
  const t = {
    ok: !1,
    pos: 0,
    str: ""
  };
  if (u.charCodeAt(c) === 60) {
    for (c++; c < r; ) {
      if (n = u.charCodeAt(c), n === 10 || n === 60)
        return t;
      if (n === 62)
        return t.pos = c + 1, t.str = Z(u.slice(e + 1, c)), t.ok = !0, t;
      if (n === 92 && c + 1 < r) {
        c += 2;
        continue;
      }
      c++;
    }
    return t;
  }
  let a = 0;
  for (; c < r && (n = u.charCodeAt(c), !(n === 32 || n < 32 || n === 127)); ) {
    if (n === 92 && c + 1 < r) {
      if (u.charCodeAt(c + 1) === 32)
        break;
      c += 2;
      continue;
    }
    if (n === 40 && (a++, a > 32))
      return t;
    if (n === 41) {
      if (a === 0)
        break;
      a--;
    }
    c++;
  }
  return e === c || a !== 0 || (t.str = Z(u.slice(e, c)), t.pos = c, t.ok = !0), t;
}
function bn(u, e, r, n) {
  let c, t = e;
  const a = {
    // if `true`, this is a valid link title
    ok: !1,
    // if `true`, this link can be continued on the next line
    can_continue: !1,
    // if `ok`, it's the position of the first character after the closing marker
    pos: 0,
    // if `ok`, it's the unescaped title
    str: "",
    // expected closing marker character code
    marker: 0
  };
  if (n)
    a.str = n.str, a.marker = n.marker;
  else {
    if (t >= r)
      return a;
    let i = u.charCodeAt(t);
    if (i !== 34 && i !== 39 && i !== 40)
      return a;
    e++, t++, i === 40 && (i = 41), a.marker = i;
  }
  for (; t < r; ) {
    if (c = u.charCodeAt(t), c === a.marker)
      return a.pos = t + 1, a.str += Z(u.slice(e, t)), a.ok = !0, a;
    if (c === 40 && a.marker === 41)
      return a;
    c === 92 && t + 1 < r && t++, t++;
  }
  return a.can_continue = !0, a.str += Z(u.slice(e, t)), a;
}
const pn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  parseLinkDestination: hn,
  parseLinkLabel: dn,
  parseLinkTitle: bn
}, Symbol.toStringTag, { value: "Module" })), I = {};
I.code_inline = function(u, e, r, n, c) {
  const t = u[e];
  return "<code" + c.renderAttrs(t) + ">" + N(t.content) + "</code>";
};
I.code_block = function(u, e, r, n, c) {
  const t = u[e];
  return "<pre" + c.renderAttrs(t) + "><code>" + N(u[e].content) + `</code></pre>
`;
};
I.fence = function(u, e, r, n, c) {
  const t = u[e], a = t.info ? Z(t.info).trim() : "";
  let i = "", o = "";
  if (a) {
    const f = a.split(/(\s+)/g);
    i = f[0], o = f.slice(2).join("");
  }
  let s;
  if (r.highlight ? s = r.highlight(t.content, i, o) || N(t.content) : s = N(t.content), s.indexOf("<pre") === 0)
    return s + `
`;
  if (a) {
    const f = t.attrIndex("class"), l = t.attrs ? t.attrs.slice() : [];
    f < 0 ? l.push(["class", r.langPrefix + i]) : (l[f] = l[f].slice(), l[f][1] += " " + r.langPrefix + i);
    const b = {
      attrs: l
    };
    return `<pre><code${c.renderAttrs(b)}>${s}</code></pre>
`;
  }
  return `<pre><code${c.renderAttrs(t)}>${s}</code></pre>
`;
};
I.image = function(u, e, r, n, c) {
  const t = u[e];
  return t.attrs[t.attrIndex("alt")][1] = c.renderInlineAsText(t.children, r, n), c.renderToken(u, e, r);
};
I.hardbreak = function(u, e, r) {
  return r.xhtmlOut ? `<br />
` : `<br>
`;
};
I.softbreak = function(u, e, r) {
  return r.breaks ? r.xhtmlOut ? `<br />
` : `<br>
` : `
`;
};
I.text = function(u, e) {
  return N(u[e].content);
};
I.html_block = function(u, e) {
  return u[e].content;
};
I.html_inline = function(u, e) {
  return u[e].content;
};
function V() {
  this.rules = du({}, I);
}
V.prototype.renderAttrs = function(e) {
  let r, n, c;
  if (!e.attrs)
    return "";
  for (c = "", r = 0, n = e.attrs.length; r < n; r++)
    c += " " + N(e.attrs[r][0]) + '="' + N(e.attrs[r][1]) + '"';
  return c;
};
V.prototype.renderToken = function(e, r, n) {
  const c = e[r];
  let t = "";
  if (c.hidden)
    return "";
  c.block && c.nesting !== -1 && r && e[r - 1].hidden && (t += `
`), t += (c.nesting === -1 ? "</" : "<") + c.tag, t += this.renderAttrs(c), c.nesting === 0 && n.xhtmlOut && (t += " /");
  let a = !1;
  if (c.block && (a = !0, c.nesting === 1 && r + 1 < e.length)) {
    const i = e[r + 1];
    (i.type === "inline" || i.hidden || i.nesting === -1 && i.tag === c.tag) && (a = !1);
  }
  return t += a ? `>
` : ">", t;
};
V.prototype.renderInline = function(u, e, r) {
  let n = "";
  const c = this.rules;
  for (let t = 0, a = u.length; t < a; t++) {
    const i = u[t].type;
    typeof c[i] < "u" ? n += c[i](u, t, e, r, this) : n += this.renderToken(u, t, e);
  }
  return n;
};
V.prototype.renderInlineAsText = function(u, e, r) {
  let n = "";
  for (let c = 0, t = u.length; c < t; c++)
    switch (u[c].type) {
      case "text":
        n += u[c].content;
        break;
      case "image":
        n += this.renderInlineAsText(u[c].children, e, r);
        break;
      case "html_inline":
      case "html_block":
        n += u[c].content;
        break;
      case "softbreak":
      case "hardbreak":
        n += `
`;
        break;
    }
  return n;
};
V.prototype.render = function(u, e, r) {
  let n = "";
  const c = this.rules;
  for (let t = 0, a = u.length; t < a; t++) {
    const i = u[t].type;
    i === "inline" ? n += this.renderInline(u[t].children, e, r) : typeof c[i] < "u" ? n += c[i](u, t, e, r, this) : n += this.renderToken(u, t, e, r);
  }
  return n;
};
function v() {
  this.__rules__ = [], this.__cache__ = null;
}
v.prototype.__find__ = function(u) {
  for (let e = 0; e < this.__rules__.length; e++)
    if (this.__rules__[e].name === u)
      return e;
  return -1;
};
v.prototype.__compile__ = function() {
  const u = this, e = [""];
  u.__rules__.forEach(function(r) {
    r.enabled && r.alt.forEach(function(n) {
      e.indexOf(n) < 0 && e.push(n);
    });
  }), u.__cache__ = {}, e.forEach(function(r) {
    u.__cache__[r] = [], u.__rules__.forEach(function(n) {
      n.enabled && (r && n.alt.indexOf(r) < 0 || u.__cache__[r].push(n.fn));
    });
  });
};
v.prototype.at = function(u, e, r) {
  const n = this.__find__(u), c = r || {};
  if (n === -1)
    throw new Error("Parser rule not found: " + u);
  this.__rules__[n].fn = e, this.__rules__[n].alt = c.alt || [], this.__cache__ = null;
};
v.prototype.before = function(u, e, r, n) {
  const c = this.__find__(u), t = n || {};
  if (c === -1)
    throw new Error("Parser rule not found: " + u);
  this.__rules__.splice(c, 0, {
    name: e,
    enabled: !0,
    fn: r,
    alt: t.alt || []
  }), this.__cache__ = null;
};
v.prototype.after = function(u, e, r, n) {
  const c = this.__find__(u), t = n || {};
  if (c === -1)
    throw new Error("Parser rule not found: " + u);
  this.__rules__.splice(c + 1, 0, {
    name: e,
    enabled: !0,
    fn: r,
    alt: t.alt || []
  }), this.__cache__ = null;
};
v.prototype.push = function(u, e, r) {
  const n = r || {};
  this.__rules__.push({
    name: u,
    enabled: !0,
    fn: e,
    alt: n.alt || []
  }), this.__cache__ = null;
};
v.prototype.enable = function(u, e) {
  Array.isArray(u) || (u = [u]);
  const r = [];
  return u.forEach(function(n) {
    const c = this.__find__(n);
    if (c < 0) {
      if (e)
        return;
      throw new Error("Rules manager: invalid rule name " + n);
    }
    this.__rules__[c].enabled = !0, r.push(n);
  }, this), this.__cache__ = null, r;
};
v.prototype.enableOnly = function(u, e) {
  Array.isArray(u) || (u = [u]), this.__rules__.forEach(function(r) {
    r.enabled = !1;
  }), this.enable(u, e);
};
v.prototype.disable = function(u, e) {
  Array.isArray(u) || (u = [u]);
  const r = [];
  return u.forEach(function(n) {
    const c = this.__find__(n);
    if (c < 0) {
      if (e)
        return;
      throw new Error("Rules manager: invalid rule name " + n);
    }
    this.__rules__[c].enabled = !1, r.push(n);
  }, this), this.__cache__ = null, r;
};
v.prototype.getRules = function(u) {
  return this.__cache__ === null && this.__compile__(), this.__cache__[u] || [];
};
function T(u, e, r) {
  this.type = u, this.tag = e, this.attrs = null, this.map = null, this.nesting = r, this.level = 0, this.children = null, this.content = "", this.markup = "", this.info = "", this.meta = null, this.block = !1, this.hidden = !1;
}
T.prototype.attrIndex = function(e) {
  if (!this.attrs)
    return -1;
  const r = this.attrs;
  for (let n = 0, c = r.length; n < c; n++)
    if (r[n][0] === e)
      return n;
  return -1;
};
T.prototype.attrPush = function(e) {
  this.attrs ? this.attrs.push(e) : this.attrs = [e];
};
T.prototype.attrSet = function(e, r) {
  const n = this.attrIndex(e), c = [e, r];
  n < 0 ? this.attrPush(c) : this.attrs[n] = c;
};
T.prototype.attrGet = function(e) {
  const r = this.attrIndex(e);
  let n = null;
  return r >= 0 && (n = this.attrs[r][1]), n;
};
T.prototype.attrJoin = function(e, r) {
  const n = this.attrIndex(e);
  n < 0 ? this.attrPush([e, r]) : this.attrs[n][1] = this.attrs[n][1] + " " + r;
};
function hr(u, e, r) {
  this.src = u, this.env = r, this.tokens = [], this.inlineMode = !1, this.md = e;
}
hr.prototype.Token = T;
const _n = /\r\n?|\n/g, xn = /\0/g;
function mn(u) {
  let e;
  e = u.src.replace(_n, `
`), e = e.replace(xn, "�"), u.src = e;
}
function gn(u) {
  let e;
  u.inlineMode ? (e = new u.Token("inline", "", 0), e.content = u.src, e.map = [0, 1], e.children = [], u.tokens.push(e)) : u.md.block.parse(u.src, u.md, u.env, u.tokens);
}
function kn(u) {
  const e = u.tokens;
  for (let r = 0, n = e.length; r < n; r++) {
    const c = e[r];
    c.type === "inline" && u.md.inline.parse(c.content, u.md, u.env, c.children);
  }
}
function Cn(u) {
  return /^<a[>\s]/i.test(u);
}
function Dn(u) {
  return /^<\/a\s*>/i.test(u);
}
function yn(u) {
  const e = u.tokens;
  if (u.md.options.linkify)
    for (let r = 0, n = e.length; r < n; r++) {
      if (e[r].type !== "inline" || !u.md.linkify.pretest(e[r].content))
        continue;
      let c = e[r].children, t = 0;
      for (let a = c.length - 1; a >= 0; a--) {
        const i = c[a];
        if (i.type === "link_close") {
          for (a--; c[a].level !== i.level && c[a].type !== "link_open"; )
            a--;
          continue;
        }
        if (i.type === "html_inline" && (Cn(i.content) && t > 0 && t--, Dn(i.content) && t++), !(t > 0) && i.type === "text" && u.md.linkify.test(i.content)) {
          const o = i.content;
          let s = u.md.linkify.match(o);
          const f = [];
          let l = i.level, b = 0;
          s.length > 0 && s[0].index === 0 && a > 0 && c[a - 1].type === "text_special" && (s = s.slice(1));
          for (let h = 0; h < s.length; h++) {
            const d = s[h].url, g = u.md.normalizeLink(d);
            if (!u.md.validateLink(g))
              continue;
            let k = s[h].text;
            s[h].schema ? s[h].schema === "mailto:" && !/^mailto:/i.test(k) ? k = u.md.normalizeLinkText("mailto:" + k).replace(/^mailto:/, "") : k = u.md.normalizeLinkText(k) : k = u.md.normalizeLinkText("http://" + k).replace(/^http:\/\//, "");
            const D = s[h].index;
            if (D > b) {
              const m = new u.Token("text", "", 0);
              m.content = o.slice(b, D), m.level = l, f.push(m);
            }
            const p = new u.Token("link_open", "a", 1);
            p.attrs = [["href", g]], p.level = l++, p.markup = "linkify", p.info = "auto", f.push(p);
            const x = new u.Token("text", "", 0);
            x.content = k, x.level = l, f.push(x);
            const _ = new u.Token("link_close", "a", -1);
            _.level = --l, _.markup = "linkify", _.info = "auto", f.push(_), b = s[h].lastIndex;
          }
          if (b < o.length) {
            const h = new u.Token("text", "", 0);
            h.content = o.slice(b), h.level = l, f.push(h);
          }
          e[r].children = c = lr(c, a, f);
        }
      }
    }
}
const br = /\+-|\.\.|\?\?\?\?|!!!!|,,|--/, En = /\((c|tm|r)\)/i, Fn = /\((c|tm|r)\)/ig, An = {
  c: "©",
  r: "®",
  tm: "™"
};
function vn(u, e) {
  return An[e.toLowerCase()];
}
function wn(u) {
  let e = 0;
  for (let r = u.length - 1; r >= 0; r--) {
    const n = u[r];
    n.type === "text" && !e && (n.content = n.content.replace(Fn, vn)), n.type === "link_open" && n.info === "auto" && e--, n.type === "link_close" && n.info === "auto" && e++;
  }
}
function Sn(u) {
  let e = 0;
  for (let r = u.length - 1; r >= 0; r--) {
    const n = u[r];
    n.type === "text" && !e && br.test(n.content) && (n.content = n.content.replace(/\+-/g, "±").replace(/\.{2,}/g, "…").replace(/([?!])…/g, "$1..").replace(/([?!]){4,}/g, "$1$1$1").replace(/,{2,}/g, ",").replace(/(^|[^-])---(?=[^-]|$)/mg, "$1—").replace(/(^|\s)--(?=\s|$)/mg, "$1–").replace(/(^|[^-\s])--(?=[^-\s]|$)/mg, "$1–")), n.type === "link_open" && n.info === "auto" && e--, n.type === "link_close" && n.info === "auto" && e++;
  }
}
function qn(u) {
  let e;
  if (u.md.options.typographer)
    for (e = u.tokens.length - 1; e >= 0; e--)
      u.tokens[e].type === "inline" && (En.test(u.tokens[e].content) && wn(u.tokens[e].children), br.test(u.tokens[e].content) && Sn(u.tokens[e].children));
}
const Tn = /['"]/, U0 = /['"]/g, Z0 = "’";
function tu(u, e, r) {
  return u.slice(0, e) + r + u.slice(e + 1);
}
function Rn(u, e) {
  let r;
  const n = [];
  for (let c = 0; c < u.length; c++) {
    const t = u[c], a = u[c].level;
    for (r = n.length - 1; r >= 0 && !(n[r].level <= a); r--)
      ;
    if (n.length = r + 1, t.type !== "text")
      continue;
    let i = t.content, o = 0, s = i.length;
    u:
      for (; o < s; ) {
        U0.lastIndex = o;
        const f = U0.exec(i);
        if (!f)
          break;
        let l = !0, b = !0;
        o = f.index + 1;
        const h = f[0] === "'";
        let d = 32;
        if (f.index - 1 >= 0)
          d = i.charCodeAt(f.index - 1);
        else
          for (r = c - 1; r >= 0 && !(u[r].type === "softbreak" || u[r].type === "hardbreak"); r--)
            if (u[r].content) {
              d = u[r].content.charCodeAt(u[r].content.length - 1);
              break;
            }
        let g = 32;
        if (o < s)
          g = i.charCodeAt(o);
        else
          for (r = c + 1; r < u.length && !(u[r].type === "softbreak" || u[r].type === "hardbreak"); r++)
            if (u[r].content) {
              g = u[r].content.charCodeAt(0);
              break;
            }
        const k = Q(d) || K(String.fromCharCode(d)), D = Q(g) || K(String.fromCharCode(g)), p = J(d), x = J(g);
        if (x ? l = !1 : D && (p || k || (l = !1)), p ? b = !1 : k && (x || D || (b = !1)), g === 34 && f[0] === '"' && d >= 48 && d <= 57 && (b = l = !1), l && b && (l = k, b = D), !l && !b) {
          h && (t.content = tu(t.content, f.index, Z0));
          continue;
        }
        if (b)
          for (r = n.length - 1; r >= 0; r--) {
            let _ = n[r];
            if (n[r].level < a)
              break;
            if (_.single === h && n[r].level === a) {
              _ = n[r];
              let m, C;
              h ? (m = e.md.options.quotes[2], C = e.md.options.quotes[3]) : (m = e.md.options.quotes[0], C = e.md.options.quotes[1]), t.content = tu(t.content, f.index, C), u[_.token].content = tu(
                u[_.token].content,
                _.pos,
                m
              ), o += C.length - 1, _.token === c && (o += m.length - 1), i = t.content, s = i.length, n.length = r;
              continue u;
            }
          }
        l ? n.push({
          token: c,
          pos: f.index,
          single: h,
          level: a
        }) : b && h && (t.content = tu(t.content, f.index, Z0));
      }
  }
}
function zn(u) {
  if (u.md.options.typographer)
    for (let e = u.tokens.length - 1; e >= 0; e--)
      u.tokens[e].type !== "inline" || !Tn.test(u.tokens[e].content) || Rn(u.tokens[e].children, u);
}
function In(u) {
  let e, r;
  const n = u.tokens, c = n.length;
  for (let t = 0; t < c; t++) {
    if (n[t].type !== "inline") continue;
    const a = n[t].children, i = a.length;
    for (e = 0; e < i; e++)
      a[e].type === "text_special" && (a[e].type = "text");
    for (e = r = 0; e < i; e++)
      a[e].type === "text" && e + 1 < i && a[e + 1].type === "text" ? a[e + 1].content = a[e].content + a[e + 1].content : (e !== r && (a[r] = a[e]), r++);
    e !== r && (a.length = r);
  }
}
const _e = [
  ["normalize", mn],
  ["block", gn],
  ["inline", kn],
  ["linkify", yn],
  ["replacements", qn],
  ["smartquotes", zn],
  // `text_join` finds `text_special` tokens (for escape sequences)
  // and joins them with the rest of the text
  ["text_join", In]
];
function Me() {
  this.ruler = new v();
  for (let u = 0; u < _e.length; u++)
    this.ruler.push(_e[u][0], _e[u][1]);
}
Me.prototype.process = function(u) {
  const e = this.ruler.getRules("");
  for (let r = 0, n = e.length; r < n; r++)
    e[r](u);
};
Me.prototype.State = hr;
function M(u, e, r, n) {
  this.src = u, this.md = e, this.env = r, this.tokens = n, this.bMarks = [], this.eMarks = [], this.tShift = [], this.sCount = [], this.bsCount = [], this.blkIndent = 0, this.line = 0, this.lineMax = 0, this.tight = !1, this.ddIndent = -1, this.listIndent = -1, this.parentType = "root", this.level = 0;
  const c = this.src;
  for (let t = 0, a = 0, i = 0, o = 0, s = c.length, f = !1; a < s; a++) {
    const l = c.charCodeAt(a);
    if (!f)
      if (y(l)) {
        i++, l === 9 ? o += 4 - o % 4 : o++;
        continue;
      } else
        f = !0;
    (l === 10 || a === s - 1) && (l !== 10 && a++, this.bMarks.push(t), this.eMarks.push(a), this.tShift.push(i), this.sCount.push(o), this.bsCount.push(0), f = !1, i = 0, o = 0, t = a + 1);
  }
  this.bMarks.push(c.length), this.eMarks.push(c.length), this.tShift.push(0), this.sCount.push(0), this.bsCount.push(0), this.lineMax = this.bMarks.length - 1;
}
M.prototype.push = function(u, e, r) {
  const n = new T(u, e, r);
  return n.block = !0, r < 0 && this.level--, n.level = this.level, r > 0 && this.level++, this.tokens.push(n), n;
};
M.prototype.isEmpty = function(e) {
  return this.bMarks[e] + this.tShift[e] >= this.eMarks[e];
};
M.prototype.skipEmptyLines = function(e) {
  for (let r = this.lineMax; e < r && !(this.bMarks[e] + this.tShift[e] < this.eMarks[e]); e++)
    ;
  return e;
};
M.prototype.skipSpaces = function(e) {
  for (let r = this.src.length; e < r; e++) {
    const n = this.src.charCodeAt(e);
    if (!y(n))
      break;
  }
  return e;
};
M.prototype.skipSpacesBack = function(e, r) {
  if (e <= r)
    return e;
  for (; e > r; )
    if (!y(this.src.charCodeAt(--e)))
      return e + 1;
  return e;
};
M.prototype.skipChars = function(e, r) {
  for (let n = this.src.length; e < n && this.src.charCodeAt(e) === r; e++)
    ;
  return e;
};
M.prototype.skipCharsBack = function(e, r, n) {
  if (e <= n)
    return e;
  for (; e > n; )
    if (r !== this.src.charCodeAt(--e))
      return e + 1;
  return e;
};
M.prototype.getLines = function(e, r, n, c) {
  if (e >= r)
    return "";
  const t = new Array(r - e);
  for (let a = 0, i = e; i < r; i++, a++) {
    let o = 0;
    const s = this.bMarks[i];
    let f = s, l;
    for (i + 1 < r || c ? l = this.eMarks[i] + 1 : l = this.eMarks[i]; f < l && o < n; ) {
      const b = this.src.charCodeAt(f);
      if (y(b))
        b === 9 ? o += 4 - (o + this.bsCount[i]) % 4 : o++;
      else if (f - s < this.tShift[i])
        o++;
      else
        break;
      f++;
    }
    o > n ? t[a] = new Array(o - n + 1).join(" ") + this.src.slice(f, l) : t[a] = this.src.slice(f, l);
  }
  return t.join("");
};
M.prototype.Token = T;
const Mn = 65536;
function xe(u, e) {
  const r = u.bMarks[e] + u.tShift[e], n = u.eMarks[e];
  return u.src.slice(r, n);
}
function V0(u) {
  const e = [], r = u.length;
  let n = 0, c = u.charCodeAt(n), t = !1, a = 0, i = "";
  for (; n < r; )
    c === 124 && (t ? (i += u.substring(a, n - 1), a = n) : (e.push(i + u.substring(a, n)), i = "", a = n + 1)), t = c === 92, n++, c = u.charCodeAt(n);
  return e.push(i + u.substring(a)), e;
}
function Bn(u, e, r, n) {
  if (e + 2 > r)
    return !1;
  let c = e + 1;
  if (u.sCount[c] < u.blkIndent || u.sCount[c] - u.blkIndent >= 4)
    return !1;
  let t = u.bMarks[c] + u.tShift[c];
  if (t >= u.eMarks[c])
    return !1;
  const a = u.src.charCodeAt(t++);
  if (a !== 124 && a !== 45 && a !== 58 || t >= u.eMarks[c])
    return !1;
  const i = u.src.charCodeAt(t++);
  if (i !== 124 && i !== 45 && i !== 58 && !y(i) || a === 45 && y(i))
    return !1;
  for (; t < u.eMarks[c]; ) {
    const _ = u.src.charCodeAt(t);
    if (_ !== 124 && _ !== 45 && _ !== 58 && !y(_))
      return !1;
    t++;
  }
  let o = xe(u, e + 1), s = o.split("|");
  const f = [];
  for (let _ = 0; _ < s.length; _++) {
    const m = s[_].trim();
    if (!m) {
      if (_ === 0 || _ === s.length - 1)
        continue;
      return !1;
    }
    if (!/^:?-+:?$/.test(m))
      return !1;
    m.charCodeAt(m.length - 1) === 58 ? f.push(m.charCodeAt(0) === 58 ? "center" : "right") : m.charCodeAt(0) === 58 ? f.push("left") : f.push("");
  }
  if (o = xe(u, e).trim(), o.indexOf("|") === -1 || u.sCount[e] - u.blkIndent >= 4)
    return !1;
  s = V0(o), s.length && s[0] === "" && s.shift(), s.length && s[s.length - 1] === "" && s.pop();
  const l = s.length;
  if (l === 0 || l !== f.length)
    return !1;
  if (n)
    return !0;
  const b = u.parentType;
  u.parentType = "table";
  const h = u.md.block.ruler.getRules("blockquote"), d = u.push("table_open", "table", 1), g = [e, 0];
  d.map = g;
  const k = u.push("thead_open", "thead", 1);
  k.map = [e, e + 1];
  const D = u.push("tr_open", "tr", 1);
  D.map = [e, e + 1];
  for (let _ = 0; _ < s.length; _++) {
    const m = u.push("th_open", "th", 1);
    f[_] && (m.attrs = [["style", "text-align:" + f[_]]]);
    const C = u.push("inline", "", 0);
    C.content = s[_].trim(), C.children = [], u.push("th_close", "th", -1);
  }
  u.push("tr_close", "tr", -1), u.push("thead_close", "thead", -1);
  let p, x = 0;
  for (c = e + 2; c < r && !(u.sCount[c] < u.blkIndent); c++) {
    let _ = !1;
    for (let C = 0, A = h.length; C < A; C++)
      if (h[C](u, c, r, !0)) {
        _ = !0;
        break;
      }
    if (_ || (o = xe(u, c).trim(), !o) || u.sCount[c] - u.blkIndent >= 4 || (s = V0(o), s.length && s[0] === "" && s.shift(), s.length && s[s.length - 1] === "" && s.pop(), x += l - s.length, x > Mn))
      break;
    if (c === e + 2) {
      const C = u.push("tbody_open", "tbody", 1);
      C.map = p = [e + 2, 0];
    }
    const m = u.push("tr_open", "tr", 1);
    m.map = [c, c + 1];
    for (let C = 0; C < l; C++) {
      const A = u.push("td_open", "td", 1);
      f[C] && (A.attrs = [["style", "text-align:" + f[C]]]);
      const q = u.push("inline", "", 0);
      q.content = s[C] ? s[C].trim() : "", q.children = [], u.push("td_close", "td", -1);
    }
    u.push("tr_close", "tr", -1);
  }
  return p && (u.push("tbody_close", "tbody", -1), p[1] = c), u.push("table_close", "table", -1), g[1] = c, u.parentType = b, u.line = c, !0;
}
function On(u, e, r) {
  if (u.sCount[e] - u.blkIndent < 4)
    return !1;
  let n = e + 1, c = n;
  for (; n < r; ) {
    if (u.isEmpty(n)) {
      n++;
      continue;
    }
    if (u.sCount[n] - u.blkIndent >= 4) {
      n++, c = n;
      continue;
    }
    break;
  }
  u.line = c;
  const t = u.push("code_block", "code", 0);
  return t.content = u.getLines(e, c, 4 + u.blkIndent, !1) + `
`, t.map = [e, u.line], !0;
}
function Pn(u, e, r, n) {
  let c = u.bMarks[e] + u.tShift[e], t = u.eMarks[e];
  if (u.sCount[e] - u.blkIndent >= 4 || c + 3 > t)
    return !1;
  const a = u.src.charCodeAt(c);
  if (a !== 126 && a !== 96)
    return !1;
  let i = c;
  c = u.skipChars(c, a);
  let o = c - i;
  if (o < 3)
    return !1;
  const s = u.src.slice(i, c), f = u.src.slice(c, t);
  if (a === 96 && f.indexOf(String.fromCharCode(a)) >= 0)
    return !1;
  if (n)
    return !0;
  let l = e, b = !1;
  for (; l++, !(l >= r || (c = i = u.bMarks[l] + u.tShift[l], t = u.eMarks[l], c < t && u.sCount[l] < u.blkIndent)); )
    if (u.src.charCodeAt(c) === a && !(u.sCount[l] - u.blkIndent >= 4) && (c = u.skipChars(c, a), !(c - i < o) && (c = u.skipSpaces(c), !(c < t)))) {
      b = !0;
      break;
    }
  o = u.sCount[e], u.line = l + (b ? 1 : 0);
  const h = u.push("fence", "code", 0);
  return h.info = f, h.content = u.getLines(e + 1, l, o, !0), h.markup = s, h.map = [e, u.line], !0;
}
function Ln(u, e, r, n) {
  let c = u.bMarks[e] + u.tShift[e], t = u.eMarks[e];
  const a = u.lineMax;
  if (u.sCount[e] - u.blkIndent >= 4 || u.src.charCodeAt(c) !== 62)
    return !1;
  if (n)
    return !0;
  const i = [], o = [], s = [], f = [], l = u.md.block.ruler.getRules("blockquote"), b = u.parentType;
  u.parentType = "blockquote";
  let h = !1, d;
  for (d = e; d < r; d++) {
    const x = u.sCount[d] < u.blkIndent;
    if (c = u.bMarks[d] + u.tShift[d], t = u.eMarks[d], c >= t)
      break;
    if (u.src.charCodeAt(c++) === 62 && !x) {
      let m = u.sCount[d] + 1, C, A;
      u.src.charCodeAt(c) === 32 ? (c++, m++, A = !1, C = !0) : u.src.charCodeAt(c) === 9 ? (C = !0, (u.bsCount[d] + m) % 4 === 3 ? (c++, m++, A = !1) : A = !0) : C = !1;
      let q = m;
      for (i.push(u.bMarks[d]), u.bMarks[d] = c; c < t; ) {
        const B = u.src.charCodeAt(c);
        if (y(B))
          B === 9 ? q += 4 - (q + u.bsCount[d] + (A ? 1 : 0)) % 4 : q++;
        else
          break;
        c++;
      }
      h = c >= t, o.push(u.bsCount[d]), u.bsCount[d] = u.sCount[d] + 1 + (C ? 1 : 0), s.push(u.sCount[d]), u.sCount[d] = q - m, f.push(u.tShift[d]), u.tShift[d] = c - u.bMarks[d];
      continue;
    }
    if (h)
      break;
    let _ = !1;
    for (let m = 0, C = l.length; m < C; m++)
      if (l[m](u, d, r, !0)) {
        _ = !0;
        break;
      }
    if (_) {
      u.lineMax = d, u.blkIndent !== 0 && (i.push(u.bMarks[d]), o.push(u.bsCount[d]), f.push(u.tShift[d]), s.push(u.sCount[d]), u.sCount[d] -= u.blkIndent);
      break;
    }
    i.push(u.bMarks[d]), o.push(u.bsCount[d]), f.push(u.tShift[d]), s.push(u.sCount[d]), u.sCount[d] = -1;
  }
  const g = u.blkIndent;
  u.blkIndent = 0;
  const k = u.push("blockquote_open", "blockquote", 1);
  k.markup = ">";
  const D = [e, 0];
  k.map = D, u.md.block.tokenize(u, e, d);
  const p = u.push("blockquote_close", "blockquote", -1);
  p.markup = ">", u.lineMax = a, u.parentType = b, D[1] = u.line;
  for (let x = 0; x < f.length; x++)
    u.bMarks[x + e] = i[x], u.tShift[x + e] = f[x], u.sCount[x + e] = s[x], u.bsCount[x + e] = o[x];
  return u.blkIndent = g, !0;
}
function Nn(u, e, r, n) {
  const c = u.eMarks[e];
  if (u.sCount[e] - u.blkIndent >= 4)
    return !1;
  let t = u.bMarks[e] + u.tShift[e];
  const a = u.src.charCodeAt(t++);
  if (a !== 42 && a !== 45 && a !== 95)
    return !1;
  let i = 1;
  for (; t < c; ) {
    const s = u.src.charCodeAt(t++);
    if (s !== a && !y(s))
      return !1;
    s === a && i++;
  }
  if (i < 3)
    return !1;
  if (n)
    return !0;
  u.line = e + 1;
  const o = u.push("hr", "hr", 0);
  return o.map = [e, u.line], o.markup = Array(i + 1).join(String.fromCharCode(a)), !0;
}
function W0(u, e) {
  const r = u.eMarks[e];
  let n = u.bMarks[e] + u.tShift[e];
  const c = u.src.charCodeAt(n++);
  if (c !== 42 && c !== 45 && c !== 43)
    return -1;
  if (n < r) {
    const t = u.src.charCodeAt(n);
    if (!y(t))
      return -1;
  }
  return n;
}
function J0(u, e) {
  const r = u.bMarks[e] + u.tShift[e], n = u.eMarks[e];
  let c = r;
  if (c + 1 >= n)
    return -1;
  let t = u.src.charCodeAt(c++);
  if (t < 48 || t > 57)
    return -1;
  for (; ; ) {
    if (c >= n)
      return -1;
    if (t = u.src.charCodeAt(c++), t >= 48 && t <= 57) {
      if (c - r >= 10)
        return -1;
      continue;
    }
    if (t === 41 || t === 46)
      break;
    return -1;
  }
  return c < n && (t = u.src.charCodeAt(c), !y(t)) ? -1 : c;
}
function jn(u, e) {
  const r = u.level + 2;
  for (let n = e + 2, c = u.tokens.length - 2; n < c; n++)
    u.tokens[n].level === r && u.tokens[n].type === "paragraph_open" && (u.tokens[n + 2].hidden = !0, u.tokens[n].hidden = !0, n += 2);
}
function $n(u, e, r, n) {
  let c, t, a, i, o = e, s = !0;
  if (u.sCount[o] - u.blkIndent >= 4 || u.listIndent >= 0 && u.sCount[o] - u.listIndent >= 4 && u.sCount[o] < u.blkIndent)
    return !1;
  let f = !1;
  n && u.parentType === "paragraph" && u.sCount[o] >= u.blkIndent && (f = !0);
  let l, b, h;
  if ((h = J0(u, o)) >= 0) {
    if (l = !0, a = u.bMarks[o] + u.tShift[o], b = Number(u.src.slice(a, h - 1)), f && b !== 1) return !1;
  } else if ((h = W0(u, o)) >= 0)
    l = !1;
  else
    return !1;
  if (f && u.skipSpaces(h) >= u.eMarks[o])
    return !1;
  if (n)
    return !0;
  const d = u.src.charCodeAt(h - 1), g = u.tokens.length;
  l ? (i = u.push("ordered_list_open", "ol", 1), b !== 1 && (i.attrs = [["start", b]])) : i = u.push("bullet_list_open", "ul", 1);
  const k = [o, 0];
  i.map = k, i.markup = String.fromCharCode(d);
  let D = !1;
  const p = u.md.block.ruler.getRules("list"), x = u.parentType;
  for (u.parentType = "list"; o < r; ) {
    t = h, c = u.eMarks[o];
    const _ = u.sCount[o] + h - (u.bMarks[o] + u.tShift[o]);
    let m = _;
    for (; t < c; ) {
      const j = u.src.charCodeAt(t);
      if (j === 9)
        m += 4 - (m + u.bsCount[o]) % 4;
      else if (j === 32)
        m++;
      else
        break;
      t++;
    }
    const C = t;
    let A;
    C >= c ? A = 1 : A = m - _, A > 4 && (A = 1);
    const q = _ + A;
    i = u.push("list_item_open", "li", 1), i.markup = String.fromCharCode(d);
    const B = [o, 0];
    i.map = B, l && (i.info = u.src.slice(a, h - 1));
    const W = u.tight, _u = u.tShift[o], Tr = u.sCount[o], Rr = u.listIndent;
    if (u.listIndent = u.blkIndent, u.blkIndent = q, u.tight = !0, u.tShift[o] = C - u.bMarks[o], u.sCount[o] = m, C >= c && u.isEmpty(o + 1) ? u.line = Math.min(u.line + 2, r) : u.md.block.tokenize(u, o, r, !0), (!u.tight || D) && (s = !1), D = u.line - o > 1 && u.isEmpty(u.line - 1), u.blkIndent = u.listIndent, u.listIndent = Rr, u.tShift[o] = _u, u.sCount[o] = Tr, u.tight = W, i = u.push("list_item_close", "li", -1), i.markup = String.fromCharCode(d), o = u.line, B[1] = o, o >= r || u.sCount[o] < u.blkIndent || u.sCount[o] - u.blkIndent >= 4)
      break;
    let Pe = !1;
    for (let j = 0, zr = p.length; j < zr; j++)
      if (p[j](u, o, r, !0)) {
        Pe = !0;
        break;
      }
    if (Pe)
      break;
    if (l) {
      if (h = J0(u, o), h < 0)
        break;
      a = u.bMarks[o] + u.tShift[o];
    } else if (h = W0(u, o), h < 0)
      break;
    if (d !== u.src.charCodeAt(h - 1))
      break;
  }
  return l ? i = u.push("ordered_list_close", "ol", -1) : i = u.push("bullet_list_close", "ul", -1), i.markup = String.fromCharCode(d), k[1] = o, u.line = o, u.parentType = x, s && jn(u, g), !0;
}
function Hn(u, e, r, n) {
  let c = u.bMarks[e] + u.tShift[e], t = u.eMarks[e], a = e + 1;
  if (u.sCount[e] - u.blkIndent >= 4 || u.src.charCodeAt(c) !== 91)
    return !1;
  function i(p) {
    const x = u.lineMax;
    if (p >= x || u.isEmpty(p))
      return null;
    let _ = !1;
    if (u.sCount[p] - u.blkIndent > 3 && (_ = !0), u.sCount[p] < 0 && (_ = !0), !_) {
      const A = u.md.block.ruler.getRules("reference"), q = u.parentType;
      u.parentType = "reference";
      let B = !1;
      for (let W = 0, _u = A.length; W < _u; W++)
        if (A[W](u, p, x, !0)) {
          B = !0;
          break;
        }
      if (u.parentType = q, B)
        return null;
    }
    const m = u.bMarks[p] + u.tShift[p], C = u.eMarks[p];
    return u.src.slice(m, C + 1);
  }
  let o = u.src.slice(c, t + 1);
  t = o.length;
  let s = -1;
  for (c = 1; c < t; c++) {
    const p = o.charCodeAt(c);
    if (p === 91)
      return !1;
    if (p === 93) {
      s = c;
      break;
    } else if (p === 10) {
      const x = i(a);
      x !== null && (o += x, t = o.length, a++);
    } else if (p === 92 && (c++, c < t && o.charCodeAt(c) === 10)) {
      const x = i(a);
      x !== null && (o += x, t = o.length, a++);
    }
  }
  if (s < 0 || o.charCodeAt(s + 1) !== 58)
    return !1;
  for (c = s + 2; c < t; c++) {
    const p = o.charCodeAt(c);
    if (p === 10) {
      const x = i(a);
      x !== null && (o += x, t = o.length, a++);
    } else if (!y(p)) break;
  }
  const f = u.md.helpers.parseLinkDestination(o, c, t);
  if (!f.ok)
    return !1;
  const l = u.md.normalizeLink(f.str);
  if (!u.md.validateLink(l))
    return !1;
  c = f.pos;
  const b = c, h = a, d = c;
  for (; c < t; c++) {
    const p = o.charCodeAt(c);
    if (p === 10) {
      const x = i(a);
      x !== null && (o += x, t = o.length, a++);
    } else if (!y(p)) break;
  }
  let g = u.md.helpers.parseLinkTitle(o, c, t);
  for (; g.can_continue; ) {
    const p = i(a);
    if (p === null) break;
    o += p, c = t, t = o.length, a++, g = u.md.helpers.parseLinkTitle(o, c, t, g);
  }
  let k;
  for (c < t && d !== c && g.ok ? (k = g.str, c = g.pos) : (k = "", c = b, a = h); c < t; ) {
    const p = o.charCodeAt(c);
    if (!y(p))
      break;
    c++;
  }
  if (c < t && o.charCodeAt(c) !== 10 && k)
    for (k = "", c = b, a = h; c < t; ) {
      const p = o.charCodeAt(c);
      if (!y(p))
        break;
      c++;
    }
  if (c < t && o.charCodeAt(c) !== 10)
    return !1;
  const D = hu(o.slice(1, s));
  return D ? (n || (typeof u.env.references > "u" && (u.env.references = {}), typeof u.env.references[D] > "u" && (u.env.references[D] = { title: k, href: l }), u.line = a), !0) : !1;
}
const Gn = [
  "address",
  "article",
  "aside",
  "base",
  "basefont",
  "blockquote",
  "body",
  "caption",
  "center",
  "col",
  "colgroup",
  "dd",
  "details",
  "dialog",
  "dir",
  "div",
  "dl",
  "dt",
  "fieldset",
  "figcaption",
  "figure",
  "footer",
  "form",
  "frame",
  "frameset",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "head",
  "header",
  "hr",
  "html",
  "iframe",
  "legend",
  "li",
  "link",
  "main",
  "menu",
  "menuitem",
  "nav",
  "noframes",
  "ol",
  "optgroup",
  "option",
  "p",
  "param",
  "search",
  "section",
  "summary",
  "table",
  "tbody",
  "td",
  "tfoot",
  "th",
  "thead",
  "title",
  "tr",
  "track",
  "ul"
], Un = "[a-zA-Z_:][a-zA-Z0-9:._-]*", Zn = "[^\"'=<>`\\x00-\\x20]+", Vn = "'[^']*'", Wn = '"[^"]*"', Jn = "(?:" + Zn + "|" + Vn + "|" + Wn + ")", Kn = "(?:\\s+" + Un + "(?:\\s*=\\s*" + Jn + ")?)", pr = "<[A-Za-z][A-Za-z0-9\\-]*" + Kn + "*\\s*\\/?>", _r = "<\\/[A-Za-z][A-Za-z0-9\\-]*\\s*>", Qn = "<!---?>|<!--(?:[^-]|-[^-]|--[^>])*-->", Xn = "<[?][\\s\\S]*?[?]>", Yn = "<![A-Za-z][^>]*>", uc = "<!\\[CDATA\\[[\\s\\S]*?\\]\\]>", ec = new RegExp("^(?:" + pr + "|" + _r + "|" + Qn + "|" + Xn + "|" + Yn + "|" + uc + ")"), rc = new RegExp("^(?:" + pr + "|" + _r + ")"), $ = [
  [/^<(script|pre|style|textarea)(?=(\s|>|$))/i, /<\/(script|pre|style|textarea)>/i, !0],
  [/^<!--/, /-->/, !0],
  [/^<\?/, /\?>/, !0],
  [/^<![A-Z]/, />/, !0],
  [/^<!\[CDATA\[/, /\]\]>/, !0],
  [new RegExp("^</?(" + Gn.join("|") + ")(?=(\\s|/?>|$))", "i"), /^$/, !0],
  [new RegExp(rc.source + "\\s*$"), /^$/, !1]
];
function tc(u, e, r, n) {
  let c = u.bMarks[e] + u.tShift[e], t = u.eMarks[e];
  if (u.sCount[e] - u.blkIndent >= 4 || !u.md.options.html || u.src.charCodeAt(c) !== 60)
    return !1;
  let a = u.src.slice(c, t), i = 0;
  for (; i < $.length && !$[i][0].test(a); i++)
    ;
  if (i === $.length)
    return !1;
  if (n)
    return $[i][2];
  let o = e + 1;
  if (!$[i][1].test(a)) {
    for (; o < r && !(u.sCount[o] < u.blkIndent); o++)
      if (c = u.bMarks[o] + u.tShift[o], t = u.eMarks[o], a = u.src.slice(c, t), $[i][1].test(a)) {
        a.length !== 0 && o++;
        break;
      }
  }
  u.line = o;
  const s = u.push("html_block", "", 0);
  return s.map = [e, o], s.content = u.getLines(e, o, u.blkIndent, !0), !0;
}
function nc(u, e, r, n) {
  let c = u.bMarks[e] + u.tShift[e], t = u.eMarks[e];
  if (u.sCount[e] - u.blkIndent >= 4)
    return !1;
  let a = u.src.charCodeAt(c);
  if (a !== 35 || c >= t)
    return !1;
  let i = 1;
  for (a = u.src.charCodeAt(++c); a === 35 && c < t && i <= 6; )
    i++, a = u.src.charCodeAt(++c);
  if (i > 6 || c < t && !y(a))
    return !1;
  if (n)
    return !0;
  t = u.skipSpacesBack(t, c);
  const o = u.skipCharsBack(t, 35, c);
  o > c && y(u.src.charCodeAt(o - 1)) && (t = o), u.line = e + 1;
  const s = u.push("heading_open", "h" + String(i), 1);
  s.markup = "########".slice(0, i), s.map = [e, u.line];
  const f = u.push("inline", "", 0);
  f.content = u.src.slice(c, t).trim(), f.map = [e, u.line], f.children = [];
  const l = u.push("heading_close", "h" + String(i), -1);
  return l.markup = "########".slice(0, i), !0;
}
function cc(u, e, r) {
  const n = u.md.block.ruler.getRules("paragraph");
  if (u.sCount[e] - u.blkIndent >= 4)
    return !1;
  const c = u.parentType;
  u.parentType = "paragraph";
  let t = 0, a, i = e + 1;
  for (; i < r && !u.isEmpty(i); i++) {
    if (u.sCount[i] - u.blkIndent > 3)
      continue;
    if (u.sCount[i] >= u.blkIndent) {
      let h = u.bMarks[i] + u.tShift[i];
      const d = u.eMarks[i];
      if (h < d && (a = u.src.charCodeAt(h), (a === 45 || a === 61) && (h = u.skipChars(h, a), h = u.skipSpaces(h), h >= d))) {
        t = a === 61 ? 1 : 2;
        break;
      }
    }
    if (u.sCount[i] < 0)
      continue;
    let b = !1;
    for (let h = 0, d = n.length; h < d; h++)
      if (n[h](u, i, r, !0)) {
        b = !0;
        break;
      }
    if (b)
      break;
  }
  if (!t)
    return !1;
  const o = u.getLines(e, i, u.blkIndent, !1).trim();
  u.line = i + 1;
  const s = u.push("heading_open", "h" + String(t), 1);
  s.markup = String.fromCharCode(a), s.map = [e, u.line];
  const f = u.push("inline", "", 0);
  f.content = o, f.map = [e, u.line - 1], f.children = [];
  const l = u.push("heading_close", "h" + String(t), -1);
  return l.markup = String.fromCharCode(a), u.parentType = c, !0;
}
function ic(u, e, r) {
  const n = u.md.block.ruler.getRules("paragraph"), c = u.parentType;
  let t = e + 1;
  for (u.parentType = "paragraph"; t < r && !u.isEmpty(t); t++) {
    if (u.sCount[t] - u.blkIndent > 3 || u.sCount[t] < 0)
      continue;
    let s = !1;
    for (let f = 0, l = n.length; f < l; f++)
      if (n[f](u, t, r, !0)) {
        s = !0;
        break;
      }
    if (s)
      break;
  }
  const a = u.getLines(e, t, u.blkIndent, !1).trim();
  u.line = t;
  const i = u.push("paragraph_open", "p", 1);
  i.map = [e, u.line];
  const o = u.push("inline", "", 0);
  return o.content = a, o.map = [e, u.line], o.children = [], u.push("paragraph_close", "p", -1), u.parentType = c, !0;
}
const nu = [
  // First 2 params - rule name & source. Secondary array - list of rules,
  // which can be terminated by this one.
  ["table", Bn, ["paragraph", "reference"]],
  ["code", On],
  ["fence", Pn, ["paragraph", "reference", "blockquote", "list"]],
  ["blockquote", Ln, ["paragraph", "reference", "blockquote", "list"]],
  ["hr", Nn, ["paragraph", "reference", "blockquote", "list"]],
  ["list", $n, ["paragraph", "reference", "blockquote"]],
  ["reference", Hn],
  ["html_block", tc, ["paragraph", "reference", "blockquote"]],
  ["heading", nc, ["paragraph", "reference", "blockquote"]],
  ["lheading", cc],
  ["paragraph", ic]
];
function bu() {
  this.ruler = new v();
  for (let u = 0; u < nu.length; u++)
    this.ruler.push(nu[u][0], nu[u][1], { alt: (nu[u][2] || []).slice() });
}
bu.prototype.tokenize = function(u, e, r) {
  const n = this.ruler.getRules(""), c = n.length, t = u.md.options.maxNesting;
  let a = e, i = !1;
  for (; a < r && (u.line = a = u.skipEmptyLines(a), !(a >= r || u.sCount[a] < u.blkIndent)); ) {
    if (u.level >= t) {
      u.line = r;
      break;
    }
    const o = u.line;
    let s = !1;
    for (let f = 0; f < c; f++)
      if (s = n[f](u, a, r, !1), s) {
        if (o >= u.line)
          throw new Error("block rule didn't increment state.line");
        break;
      }
    if (!s) throw new Error("none of the block rules matched");
    u.tight = !i, u.isEmpty(u.line - 1) && (i = !0), a = u.line, a < r && u.isEmpty(a) && (i = !0, a++, u.line = a);
  }
};
bu.prototype.parse = function(u, e, r, n) {
  if (!u)
    return;
  const c = new this.State(u, e, r, n);
  this.tokenize(c, c.line, c.lineMax);
};
bu.prototype.State = M;
function uu(u, e, r, n) {
  this.src = u, this.env = r, this.md = e, this.tokens = n, this.tokens_meta = Array(n.length), this.pos = 0, this.posMax = this.src.length, this.level = 0, this.pending = "", this.pendingLevel = 0, this.cache = {}, this.delimiters = [], this._prev_delimiters = [], this.backticks = {}, this.backticksScanned = !1, this.linkLevel = 0;
}
uu.prototype.pushPending = function() {
  const u = new T("text", "", 0);
  return u.content = this.pending, u.level = this.pendingLevel, this.tokens.push(u), this.pending = "", u;
};
uu.prototype.push = function(u, e, r) {
  this.pending && this.pushPending();
  const n = new T(u, e, r);
  let c = null;
  return r < 0 && (this.level--, this.delimiters = this._prev_delimiters.pop()), n.level = this.level, r > 0 && (this.level++, this._prev_delimiters.push(this.delimiters), this.delimiters = [], c = { delimiters: this.delimiters }), this.pendingLevel = this.level, this.tokens.push(n), this.tokens_meta.push(c), n;
};
uu.prototype.scanDelims = function(u, e) {
  const r = this.posMax, n = this.src.charCodeAt(u), c = u > 0 ? this.src.charCodeAt(u - 1) : 32;
  let t = u;
  for (; t < r && this.src.charCodeAt(t) === n; )
    t++;
  const a = t - u, i = t < r ? this.src.charCodeAt(t) : 32, o = Q(c) || K(String.fromCharCode(c)), s = Q(i) || K(String.fromCharCode(i)), f = J(c), l = J(i), b = !l && (!s || f || o), h = !f && (!o || l || s);
  return { can_open: b && (e || !h || o), can_close: h && (e || !b || s), length: a };
};
uu.prototype.Token = T;
function ac(u) {
  switch (u) {
    case 10:
    case 33:
    case 35:
    case 36:
    case 37:
    case 38:
    case 42:
    case 43:
    case 45:
    case 58:
    case 60:
    case 61:
    case 62:
    case 64:
    case 91:
    case 92:
    case 93:
    case 94:
    case 95:
    case 96:
    case 123:
    case 125:
    case 126:
      return !0;
    default:
      return !1;
  }
}
function oc(u, e) {
  let r = u.pos;
  for (; r < u.posMax && !ac(u.src.charCodeAt(r)); )
    r++;
  return r === u.pos ? !1 : (e || (u.pending += u.src.slice(u.pos, r)), u.pos = r, !0);
}
const sc = /(?:^|[^a-z0-9.+-])([a-z][a-z0-9.+-]*)$/i;
function fc(u, e) {
  if (!u.md.options.linkify || u.linkLevel > 0) return !1;
  const r = u.pos, n = u.posMax;
  if (r + 3 > n || u.src.charCodeAt(r) !== 58 || u.src.charCodeAt(r + 1) !== 47 || u.src.charCodeAt(r + 2) !== 47) return !1;
  const c = u.pending.match(sc);
  if (!c) return !1;
  const t = c[1], a = u.md.linkify.matchAtStart(u.src.slice(r - t.length));
  if (!a) return !1;
  let i = a.url;
  if (i.length <= t.length) return !1;
  let o = i.length;
  for (; o > 0 && i.charCodeAt(o - 1) === 42; )
    o--;
  o !== i.length && (i = i.slice(0, o));
  const s = u.md.normalizeLink(i);
  if (!u.md.validateLink(s)) return !1;
  if (!e) {
    u.pending = u.pending.slice(0, -t.length);
    const f = u.push("link_open", "a", 1);
    f.attrs = [["href", s]], f.markup = "linkify", f.info = "auto";
    const l = u.push("text", "", 0);
    l.content = u.md.normalizeLinkText(i);
    const b = u.push("link_close", "a", -1);
    b.markup = "linkify", b.info = "auto";
  }
  return u.pos += i.length - t.length, !0;
}
function lc(u, e) {
  let r = u.pos;
  if (u.src.charCodeAt(r) !== 10)
    return !1;
  const n = u.pending.length - 1, c = u.posMax;
  if (!e)
    if (n >= 0 && u.pending.charCodeAt(n) === 32)
      if (n >= 1 && u.pending.charCodeAt(n - 1) === 32) {
        let t = n - 1;
        for (; t >= 1 && u.pending.charCodeAt(t - 1) === 32; ) t--;
        u.pending = u.pending.slice(0, t), u.push("hardbreak", "br", 0);
      } else
        u.pending = u.pending.slice(0, -1), u.push("softbreak", "br", 0);
    else
      u.push("softbreak", "br", 0);
  for (r++; r < c && y(u.src.charCodeAt(r)); )
    r++;
  return u.pos = r, !0;
}
const Be = [];
for (let u = 0; u < 256; u++)
  Be.push(0);
"\\!\"#$%&'()*+,./:;<=>?@[]^_`{|}~-".split("").forEach(function(u) {
  Be[u.charCodeAt(0)] = 1;
});
function dc(u, e) {
  let r = u.pos;
  const n = u.posMax;
  if (u.src.charCodeAt(r) !== 92 || (r++, r >= n)) return !1;
  let c = u.src.charCodeAt(r);
  if (c === 10) {
    for (e || u.push("hardbreak", "br", 0), r++; r < n && (c = u.src.charCodeAt(r), !!y(c)); )
      r++;
    return u.pos = r, !0;
  }
  let t = u.src[r];
  if (c >= 55296 && c <= 56319 && r + 1 < n) {
    const i = u.src.charCodeAt(r + 1);
    i >= 56320 && i <= 57343 && (t += u.src[r + 1], r++);
  }
  const a = "\\" + t;
  if (!e) {
    const i = u.push("text_special", "", 0);
    c < 256 && Be[c] !== 0 ? i.content = t : i.content = a, i.markup = a, i.info = "escape";
  }
  return u.pos = r + 1, !0;
}
function hc(u, e) {
  let r = u.pos;
  if (u.src.charCodeAt(r) !== 96)
    return !1;
  const c = r;
  r++;
  const t = u.posMax;
  for (; r < t && u.src.charCodeAt(r) === 96; )
    r++;
  const a = u.src.slice(c, r), i = a.length;
  if (u.backticksScanned && (u.backticks[i] || 0) <= c)
    return e || (u.pending += a), u.pos += i, !0;
  let o = r, s;
  for (; (s = u.src.indexOf("`", o)) !== -1; ) {
    for (o = s + 1; o < t && u.src.charCodeAt(o) === 96; )
      o++;
    const f = o - s;
    if (f === i) {
      if (!e) {
        const l = u.push("code_inline", "code", 0);
        l.markup = a, l.content = u.src.slice(r, s).replace(/\n/g, " ").replace(/^ (.+) $/, "$1");
      }
      return u.pos = o, !0;
    }
    u.backticks[f] = s;
  }
  return u.backticksScanned = !0, e || (u.pending += a), u.pos += i, !0;
}
function bc(u, e) {
  const r = u.pos, n = u.src.charCodeAt(r);
  if (e || n !== 126)
    return !1;
  const c = u.scanDelims(u.pos, !0);
  let t = c.length;
  const a = String.fromCharCode(n);
  if (t < 2)
    return !1;
  let i;
  t % 2 && (i = u.push("text", "", 0), i.content = a, t--);
  for (let o = 0; o < t; o += 2)
    i = u.push("text", "", 0), i.content = a + a, u.delimiters.push({
      marker: n,
      length: 0,
      // disable "rule of 3" length checks meant for emphasis
      token: u.tokens.length - 1,
      end: -1,
      open: c.can_open,
      close: c.can_close
    });
  return u.pos += c.length, !0;
}
function K0(u, e) {
  let r;
  const n = [], c = e.length;
  for (let t = 0; t < c; t++) {
    const a = e[t];
    if (a.marker !== 126 || a.end === -1)
      continue;
    const i = e[a.end];
    r = u.tokens[a.token], r.type = "s_open", r.tag = "s", r.nesting = 1, r.markup = "~~", r.content = "", r = u.tokens[i.token], r.type = "s_close", r.tag = "s", r.nesting = -1, r.markup = "~~", r.content = "", u.tokens[i.token - 1].type === "text" && u.tokens[i.token - 1].content === "~" && n.push(i.token - 1);
  }
  for (; n.length; ) {
    const t = n.pop();
    let a = t + 1;
    for (; a < u.tokens.length && u.tokens[a].type === "s_close"; )
      a++;
    a--, t !== a && (r = u.tokens[a], u.tokens[a] = u.tokens[t], u.tokens[t] = r);
  }
}
function pc(u) {
  const e = u.tokens_meta, r = u.tokens_meta.length;
  K0(u, u.delimiters);
  for (let n = 0; n < r; n++)
    e[n] && e[n].delimiters && K0(u, e[n].delimiters);
}
const xr = {
  tokenize: bc,
  postProcess: pc
};
function _c(u, e) {
  const r = u.pos, n = u.src.charCodeAt(r);
  if (e || n !== 95 && n !== 42)
    return !1;
  const c = u.scanDelims(u.pos, n === 42);
  for (let t = 0; t < c.length; t++) {
    const a = u.push("text", "", 0);
    a.content = String.fromCharCode(n), u.delimiters.push({
      // Char code of the starting marker (number).
      //
      marker: n,
      // Total length of these series of delimiters.
      //
      length: c.length,
      // A position of the token this delimiter corresponds to.
      //
      token: u.tokens.length - 1,
      // If this delimiter is matched as a valid opener, `end` will be
      // equal to its position, otherwise it's `-1`.
      //
      end: -1,
      // Boolean flags that determine if this delimiter could open or close
      // an emphasis.
      //
      open: c.can_open,
      close: c.can_close
    });
  }
  return u.pos += c.length, !0;
}
function Q0(u, e) {
  const r = e.length;
  for (let n = r - 1; n >= 0; n--) {
    const c = e[n];
    if (c.marker !== 95 && c.marker !== 42 || c.end === -1)
      continue;
    const t = e[c.end], a = n > 0 && e[n - 1].end === c.end + 1 && // check that first two markers match and adjacent
    e[n - 1].marker === c.marker && e[n - 1].token === c.token - 1 && // check that last two markers are adjacent (we can safely assume they match)
    e[c.end + 1].token === t.token + 1, i = String.fromCharCode(c.marker), o = u.tokens[c.token];
    o.type = a ? "strong_open" : "em_open", o.tag = a ? "strong" : "em", o.nesting = 1, o.markup = a ? i + i : i, o.content = "";
    const s = u.tokens[t.token];
    s.type = a ? "strong_close" : "em_close", s.tag = a ? "strong" : "em", s.nesting = -1, s.markup = a ? i + i : i, s.content = "", a && (u.tokens[e[n - 1].token].content = "", u.tokens[e[c.end + 1].token].content = "", n--);
  }
}
function xc(u) {
  const e = u.tokens_meta, r = u.tokens_meta.length;
  Q0(u, u.delimiters);
  for (let n = 0; n < r; n++)
    e[n] && e[n].delimiters && Q0(u, e[n].delimiters);
}
const mr = {
  tokenize: _c,
  postProcess: xc
};
function mc(u, e) {
  let r, n, c, t, a = "", i = "", o = u.pos, s = !0;
  if (u.src.charCodeAt(u.pos) !== 91)
    return !1;
  const f = u.pos, l = u.posMax, b = u.pos + 1, h = u.md.helpers.parseLinkLabel(u, u.pos, !0);
  if (h < 0)
    return !1;
  let d = h + 1;
  if (d < l && u.src.charCodeAt(d) === 40) {
    for (s = !1, d++; d < l && (r = u.src.charCodeAt(d), !(!y(r) && r !== 10)); d++)
      ;
    if (d >= l)
      return !1;
    if (o = d, c = u.md.helpers.parseLinkDestination(u.src, d, u.posMax), c.ok) {
      for (a = u.md.normalizeLink(c.str), u.md.validateLink(a) ? d = c.pos : a = "", o = d; d < l && (r = u.src.charCodeAt(d), !(!y(r) && r !== 10)); d++)
        ;
      if (c = u.md.helpers.parseLinkTitle(u.src, d, u.posMax), d < l && o !== d && c.ok)
        for (i = c.str, d = c.pos; d < l && (r = u.src.charCodeAt(d), !(!y(r) && r !== 10)); d++)
          ;
    }
    (d >= l || u.src.charCodeAt(d) !== 41) && (s = !0), d++;
  }
  if (s) {
    if (typeof u.env.references > "u")
      return !1;
    if (d < l && u.src.charCodeAt(d) === 91 ? (o = d + 1, d = u.md.helpers.parseLinkLabel(u, d), d >= 0 ? n = u.src.slice(o, d++) : d = h + 1) : d = h + 1, n || (n = u.src.slice(b, h)), t = u.env.references[hu(n)], !t)
      return u.pos = f, !1;
    a = t.href, i = t.title;
  }
  if (!e) {
    u.pos = b, u.posMax = h;
    const g = u.push("link_open", "a", 1), k = [["href", a]];
    g.attrs = k, i && k.push(["title", i]), u.linkLevel++, u.md.inline.tokenize(u), u.linkLevel--, u.push("link_close", "a", -1);
  }
  return u.pos = d, u.posMax = l, !0;
}
function gc(u, e) {
  let r, n, c, t, a, i, o, s, f = "";
  const l = u.pos, b = u.posMax;
  if (u.src.charCodeAt(u.pos) !== 33 || u.src.charCodeAt(u.pos + 1) !== 91)
    return !1;
  const h = u.pos + 2, d = u.md.helpers.parseLinkLabel(u, u.pos + 1, !1);
  if (d < 0)
    return !1;
  if (t = d + 1, t < b && u.src.charCodeAt(t) === 40) {
    for (t++; t < b && (r = u.src.charCodeAt(t), !(!y(r) && r !== 10)); t++)
      ;
    if (t >= b)
      return !1;
    for (s = t, i = u.md.helpers.parseLinkDestination(u.src, t, u.posMax), i.ok && (f = u.md.normalizeLink(i.str), u.md.validateLink(f) ? t = i.pos : f = ""), s = t; t < b && (r = u.src.charCodeAt(t), !(!y(r) && r !== 10)); t++)
      ;
    if (i = u.md.helpers.parseLinkTitle(u.src, t, u.posMax), t < b && s !== t && i.ok)
      for (o = i.str, t = i.pos; t < b && (r = u.src.charCodeAt(t), !(!y(r) && r !== 10)); t++)
        ;
    else
      o = "";
    if (t >= b || u.src.charCodeAt(t) !== 41)
      return u.pos = l, !1;
    t++;
  } else {
    if (typeof u.env.references > "u")
      return !1;
    if (t < b && u.src.charCodeAt(t) === 91 ? (s = t + 1, t = u.md.helpers.parseLinkLabel(u, t), t >= 0 ? c = u.src.slice(s, t++) : t = d + 1) : t = d + 1, c || (c = u.src.slice(h, d)), a = u.env.references[hu(c)], !a)
      return u.pos = l, !1;
    f = a.href, o = a.title;
  }
  if (!e) {
    n = u.src.slice(h, d);
    const g = [];
    u.md.inline.parse(
      n,
      u.md,
      u.env,
      g
    );
    const k = u.push("image", "img", 0), D = [["src", f], ["alt", ""]];
    k.attrs = D, k.children = g, k.content = n, o && D.push(["title", o]);
  }
  return u.pos = t, u.posMax = b, !0;
}
const kc = /^([a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*)$/, Cc = /^([a-zA-Z][a-zA-Z0-9+.-]{1,31}):([^<>\x00-\x20]*)$/;
function Dc(u, e) {
  let r = u.pos;
  if (u.src.charCodeAt(r) !== 60)
    return !1;
  const n = u.pos, c = u.posMax;
  for (; ; ) {
    if (++r >= c) return !1;
    const a = u.src.charCodeAt(r);
    if (a === 60) return !1;
    if (a === 62) break;
  }
  const t = u.src.slice(n + 1, r);
  if (Cc.test(t)) {
    const a = u.md.normalizeLink(t);
    if (!u.md.validateLink(a))
      return !1;
    if (!e) {
      const i = u.push("link_open", "a", 1);
      i.attrs = [["href", a]], i.markup = "autolink", i.info = "auto";
      const o = u.push("text", "", 0);
      o.content = u.md.normalizeLinkText(t);
      const s = u.push("link_close", "a", -1);
      s.markup = "autolink", s.info = "auto";
    }
    return u.pos += t.length + 2, !0;
  }
  if (kc.test(t)) {
    const a = u.md.normalizeLink("mailto:" + t);
    if (!u.md.validateLink(a))
      return !1;
    if (!e) {
      const i = u.push("link_open", "a", 1);
      i.attrs = [["href", a]], i.markup = "autolink", i.info = "auto";
      const o = u.push("text", "", 0);
      o.content = u.md.normalizeLinkText(t);
      const s = u.push("link_close", "a", -1);
      s.markup = "autolink", s.info = "auto";
    }
    return u.pos += t.length + 2, !0;
  }
  return !1;
}
function yc(u) {
  return /^<a[>\s]/i.test(u);
}
function Ec(u) {
  return /^<\/a\s*>/i.test(u);
}
function Fc(u) {
  const e = u | 32;
  return e >= 97 && e <= 122;
}
function Ac(u, e) {
  if (!u.md.options.html)
    return !1;
  const r = u.posMax, n = u.pos;
  if (u.src.charCodeAt(n) !== 60 || n + 2 >= r)
    return !1;
  const c = u.src.charCodeAt(n + 1);
  if (c !== 33 && c !== 63 && c !== 47 && !Fc(c))
    return !1;
  const t = u.src.slice(n).match(ec);
  if (!t)
    return !1;
  if (!e) {
    const a = u.push("html_inline", "", 0);
    a.content = t[0], yc(a.content) && u.linkLevel++, Ec(a.content) && u.linkLevel--;
  }
  return u.pos += t[0].length, !0;
}
const vc = /^&#((?:x[a-f0-9]{1,6}|[0-9]{1,7}));/i, wc = /^&([a-z][a-z0-9]{1,31});/i;
function Sc(u, e) {
  const r = u.pos, n = u.posMax;
  if (u.src.charCodeAt(r) !== 38 || r + 1 >= n) return !1;
  if (u.src.charCodeAt(r + 1) === 35) {
    const t = u.src.slice(r).match(vc);
    if (t) {
      if (!e) {
        const a = t[1][0].toLowerCase() === "x" ? parseInt(t[1].slice(1), 16) : parseInt(t[1], 10), i = u.push("text_special", "", 0);
        i.content = Ie(a) ? iu(a) : iu(65533), i.markup = t[0], i.info = "entity";
      }
      return u.pos += t[0].length, !0;
    }
  } else {
    const t = u.src.slice(r).match(wc);
    if (t) {
      const a = fr(t[0]);
      if (a !== t[0]) {
        if (!e) {
          const i = u.push("text_special", "", 0);
          i.content = a, i.markup = t[0], i.info = "entity";
        }
        return u.pos += t[0].length, !0;
      }
    }
  }
  return !1;
}
function X0(u) {
  const e = {}, r = u.length;
  if (!r) return;
  let n = 0, c = -2;
  const t = [];
  for (let a = 0; a < r; a++) {
    const i = u[a];
    if (t.push(0), (u[n].marker !== i.marker || c !== i.token - 1) && (n = a), c = i.token, i.length = i.length || 0, !i.close) continue;
    e.hasOwnProperty(i.marker) || (e[i.marker] = [-1, -1, -1, -1, -1, -1]);
    const o = e[i.marker][(i.open ? 3 : 0) + i.length % 3];
    let s = n - t[n] - 1, f = s;
    for (; s > o; s -= t[s] + 1) {
      const l = u[s];
      if (l.marker === i.marker && l.open && l.end < 0) {
        let b = !1;
        if ((l.close || i.open) && (l.length + i.length) % 3 === 0 && (l.length % 3 !== 0 || i.length % 3 !== 0) && (b = !0), !b) {
          const h = s > 0 && !u[s - 1].open ? t[s - 1] + 1 : 0;
          t[a] = a - s + h, t[s] = h, i.open = !1, l.end = a, l.close = !1, f = -1, c = -2;
          break;
        }
      }
    }
    f !== -1 && (e[i.marker][(i.open ? 3 : 0) + (i.length || 0) % 3] = f);
  }
}
function qc(u) {
  const e = u.tokens_meta, r = u.tokens_meta.length;
  X0(u.delimiters);
  for (let n = 0; n < r; n++)
    e[n] && e[n].delimiters && X0(e[n].delimiters);
}
function Tc(u) {
  let e, r, n = 0;
  const c = u.tokens, t = u.tokens.length;
  for (e = r = 0; e < t; e++)
    c[e].nesting < 0 && n--, c[e].level = n, c[e].nesting > 0 && n++, c[e].type === "text" && e + 1 < t && c[e + 1].type === "text" ? c[e + 1].content = c[e].content + c[e + 1].content : (e !== r && (c[r] = c[e]), r++);
  e !== r && (c.length = r);
}
const me = [
  ["text", oc],
  ["linkify", fc],
  ["newline", lc],
  ["escape", dc],
  ["backticks", hc],
  ["strikethrough", xr.tokenize],
  ["emphasis", mr.tokenize],
  ["link", mc],
  ["image", gc],
  ["autolink", Dc],
  ["html_inline", Ac],
  ["entity", Sc]
], ge = [
  ["balance_pairs", qc],
  ["strikethrough", xr.postProcess],
  ["emphasis", mr.postProcess],
  // rules for pairs separate '**' into its own text tokens, which may be left unused,
  // rule below merges unused segments back with the rest of the text
  ["fragments_join", Tc]
];
function eu() {
  this.ruler = new v();
  for (let u = 0; u < me.length; u++)
    this.ruler.push(me[u][0], me[u][1]);
  this.ruler2 = new v();
  for (let u = 0; u < ge.length; u++)
    this.ruler2.push(ge[u][0], ge[u][1]);
}
eu.prototype.skipToken = function(u) {
  const e = u.pos, r = this.ruler.getRules(""), n = r.length, c = u.md.options.maxNesting, t = u.cache;
  if (typeof t[e] < "u") {
    u.pos = t[e];
    return;
  }
  let a = !1;
  if (u.level < c) {
    for (let i = 0; i < n; i++)
      if (u.level++, a = r[i](u, !0), u.level--, a) {
        if (e >= u.pos)
          throw new Error("inline rule didn't increment state.pos");
        break;
      }
  } else
    u.pos = u.posMax;
  a || u.pos++, t[e] = u.pos;
};
eu.prototype.tokenize = function(u) {
  const e = this.ruler.getRules(""), r = e.length, n = u.posMax, c = u.md.options.maxNesting;
  for (; u.pos < n; ) {
    const t = u.pos;
    let a = !1;
    if (u.level < c) {
      for (let i = 0; i < r; i++)
        if (a = e[i](u, !1), a) {
          if (t >= u.pos)
            throw new Error("inline rule didn't increment state.pos");
          break;
        }
    }
    if (a) {
      if (u.pos >= n)
        break;
      continue;
    }
    u.pending += u.src[u.pos++];
  }
  u.pending && u.pushPending();
};
eu.prototype.parse = function(u, e, r, n) {
  const c = new this.State(u, e, r, n);
  this.tokenize(c);
  const t = this.ruler2.getRules(""), a = t.length;
  for (let i = 0; i < a; i++)
    t[i](c);
};
eu.prototype.State = uu;
function Rc(u) {
  const e = {};
  u = u || {}, e.src_Any = cr.source, e.src_Cc = ir.source, e.src_Z = or.source, e.src_P = Re.source, e.src_ZPCc = [e.src_Z, e.src_P, e.src_Cc].join("|"), e.src_ZCc = [e.src_Z, e.src_Cc].join("|");
  const r = "[><｜]";
  return e.src_pseudo_letter = "(?:(?!" + r + "|" + e.src_ZPCc + ")" + e.src_Any + ")", e.src_ip4 = "(?:(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)", e.src_auth = "(?:(?:(?!" + e.src_ZCc + "|[@/\\[\\]()]).)+@)?", e.src_port = "(?::(?:6(?:[0-4]\\d{3}|5(?:[0-4]\\d{2}|5(?:[0-2]\\d|3[0-5])))|[1-5]?\\d{1,4}))?", e.src_host_terminator = "(?=$|" + r + "|" + e.src_ZPCc + ")(?!" + (u["---"] ? "-(?!--)|" : "-|") + "_|:\\d|\\.-|\\.(?!$|" + e.src_ZPCc + "))", e.src_path = "(?:[/?#](?:(?!" + e.src_ZCc + "|" + r + `|[()[\\]{}.,"'?!\\-;]).|\\[(?:(?!` + e.src_ZCc + "|\\]).)*\\]|\\((?:(?!" + e.src_ZCc + "|[)]).)*\\)|\\{(?:(?!" + e.src_ZCc + '|[}]).)*\\}|\\"(?:(?!' + e.src_ZCc + `|["]).)+\\"|\\'(?:(?!` + e.src_ZCc + "|[']).)+\\'|\\'(?=" + e.src_pseudo_letter + "|[-])|\\.{2,}[a-zA-Z0-9%/&]|\\.(?!" + e.src_ZCc + "|[.]|$)|" + (u["---"] ? "\\-(?!--(?:[^-]|$))(?:-*)|" : "\\-+|") + // allow `,,,` in paths
  ",(?!" + e.src_ZCc + "|$)|;(?!" + e.src_ZCc + "|$)|\\!+(?!" + e.src_ZCc + "|[!]|$)|\\?(?!" + e.src_ZCc + "|[?]|$))+|\\/)?", e.src_email_name = '[\\-;:&=\\+\\$,\\.a-zA-Z0-9_][\\-;:&=\\+\\$,\\"\\.a-zA-Z0-9_]*', e.src_xn = "xn--[a-z0-9\\-]{1,59}", e.src_domain_root = // Allow letters & digits (http://test1)
  "(?:" + e.src_xn + "|" + e.src_pseudo_letter + "{1,63})", e.src_domain = "(?:" + e.src_xn + "|(?:" + e.src_pseudo_letter + ")|(?:" + e.src_pseudo_letter + "(?:-|" + e.src_pseudo_letter + "){0,61}" + e.src_pseudo_letter + "))", e.src_host = "(?:(?:(?:(?:" + e.src_domain + ")\\.)*" + e.src_domain + "))", e.tpl_host_fuzzy = "(?:" + e.src_ip4 + "|(?:(?:(?:" + e.src_domain + ")\\.)+(?:%TLDS%)))", e.tpl_host_no_ip_fuzzy = "(?:(?:(?:" + e.src_domain + ")\\.)+(?:%TLDS%))", e.src_host_strict = e.src_host + e.src_host_terminator, e.tpl_host_fuzzy_strict = e.tpl_host_fuzzy + e.src_host_terminator, e.src_host_port_strict = e.src_host + e.src_port + e.src_host_terminator, e.tpl_host_port_fuzzy_strict = e.tpl_host_fuzzy + e.src_port + e.src_host_terminator, e.tpl_host_port_no_ip_fuzzy_strict = e.tpl_host_no_ip_fuzzy + e.src_port + e.src_host_terminator, e.tpl_host_fuzzy_test = "localhost|www\\.|\\.\\d{1,3}\\.|(?:\\.(?:%TLDS%)(?:" + e.src_ZPCc + "|>|$))", e.tpl_email_fuzzy = "(^|" + r + '|"|\\(|' + e.src_ZCc + ")(" + e.src_email_name + "@" + e.tpl_host_fuzzy_strict + ")", e.tpl_link_fuzzy = // Fuzzy link can't be prepended with .:/\- and non punctuation.
  // but can start with > (markdown blockquote)
  "(^|(?![.:/\\-_@])(?:[$+<=>^`|｜]|" + e.src_ZPCc + "))((?![$+<=>^`|｜])" + e.tpl_host_port_fuzzy_strict + e.src_path + ")", e.tpl_link_no_ip_fuzzy = // Fuzzy link can't be prepended with .:/\- and non punctuation.
  // but can start with > (markdown blockquote)
  "(^|(?![.:/\\-_@])(?:[$+<=>^`|｜]|" + e.src_ZPCc + "))((?![$+<=>^`|｜])" + e.tpl_host_port_no_ip_fuzzy_strict + e.src_path + ")", e;
}
function ye(u) {
  return Array.prototype.slice.call(arguments, 1).forEach(function(r) {
    r && Object.keys(r).forEach(function(n) {
      u[n] = r[n];
    });
  }), u;
}
function pu(u) {
  return Object.prototype.toString.call(u);
}
function zc(u) {
  return pu(u) === "[object String]";
}
function Ic(u) {
  return pu(u) === "[object Object]";
}
function Mc(u) {
  return pu(u) === "[object RegExp]";
}
function Y0(u) {
  return pu(u) === "[object Function]";
}
function Bc(u) {
  return u.replace(/[.?*+^$[\]\\(){}|-]/g, "\\$&");
}
const gr = {
  fuzzyLink: !0,
  fuzzyEmail: !0,
  fuzzyIP: !1
};
function Oc(u) {
  return Object.keys(u || {}).reduce(function(e, r) {
    return e || gr.hasOwnProperty(r);
  }, !1);
}
const Pc = {
  "http:": {
    validate: function(u, e, r) {
      const n = u.slice(e);
      return r.re.http || (r.re.http = new RegExp(
        "^\\/\\/" + r.re.src_auth + r.re.src_host_port_strict + r.re.src_path,
        "i"
      )), r.re.http.test(n) ? n.match(r.re.http)[0].length : 0;
    }
  },
  "https:": "http:",
  "ftp:": "http:",
  "//": {
    validate: function(u, e, r) {
      const n = u.slice(e);
      return r.re.no_http || (r.re.no_http = new RegExp(
        "^" + r.re.src_auth + // Don't allow single-level domains, because of false positives like '//test'
        // with code comments
        "(?:localhost|(?:(?:" + r.re.src_domain + ")\\.)+" + r.re.src_domain_root + ")" + r.re.src_port + r.re.src_host_terminator + r.re.src_path,
        "i"
      )), r.re.no_http.test(n) ? e >= 3 && u[e - 3] === ":" || e >= 3 && u[e - 3] === "/" ? 0 : n.match(r.re.no_http)[0].length : 0;
    }
  },
  "mailto:": {
    validate: function(u, e, r) {
      const n = u.slice(e);
      return r.re.mailto || (r.re.mailto = new RegExp(
        "^" + r.re.src_email_name + "@" + r.re.src_host_strict,
        "i"
      )), r.re.mailto.test(n) ? n.match(r.re.mailto)[0].length : 0;
    }
  }
}, Lc = "a[cdefgilmnoqrstuwxz]|b[abdefghijmnorstvwyz]|c[acdfghiklmnoruvwxyz]|d[ejkmoz]|e[cegrstu]|f[ijkmor]|g[abdefghilmnpqrstuwy]|h[kmnrtu]|i[delmnoqrst]|j[emop]|k[eghimnprwyz]|l[abcikrstuvy]|m[acdeghklmnopqrstuvwxyz]|n[acefgilopruz]|om|p[aefghklmnrstwy]|qa|r[eosuw]|s[abcdeghijklmnortuvxyz]|t[cdfghjklmnortvwz]|u[agksyz]|v[aceginu]|w[fs]|y[et]|z[amw]", Nc = "biz|com|edu|gov|net|org|pro|web|xxx|aero|asia|coop|info|museum|name|shop|рф".split("|");
function jc(u) {
  u.__index__ = -1, u.__text_cache__ = "";
}
function $c(u) {
  return function(e, r) {
    const n = e.slice(r);
    return u.test(n) ? n.match(u)[0].length : 0;
  };
}
function ur() {
  return function(u, e) {
    e.normalize(u);
  };
}
function au(u) {
  const e = u.re = Rc(u.__opts__), r = u.__tlds__.slice();
  u.onCompile(), u.__tlds_replaced__ || r.push(Lc), r.push(e.src_xn), e.src_tlds = r.join("|");
  function n(i) {
    return i.replace("%TLDS%", e.src_tlds);
  }
  e.email_fuzzy = RegExp(n(e.tpl_email_fuzzy), "i"), e.link_fuzzy = RegExp(n(e.tpl_link_fuzzy), "i"), e.link_no_ip_fuzzy = RegExp(n(e.tpl_link_no_ip_fuzzy), "i"), e.host_fuzzy_test = RegExp(n(e.tpl_host_fuzzy_test), "i");
  const c = [];
  u.__compiled__ = {};
  function t(i, o) {
    throw new Error('(LinkifyIt) Invalid schema "' + i + '": ' + o);
  }
  Object.keys(u.__schemas__).forEach(function(i) {
    const o = u.__schemas__[i];
    if (o === null)
      return;
    const s = { validate: null, link: null };
    if (u.__compiled__[i] = s, Ic(o)) {
      Mc(o.validate) ? s.validate = $c(o.validate) : Y0(o.validate) ? s.validate = o.validate : t(i, o), Y0(o.normalize) ? s.normalize = o.normalize : o.normalize ? t(i, o) : s.normalize = ur();
      return;
    }
    if (zc(o)) {
      c.push(i);
      return;
    }
    t(i, o);
  }), c.forEach(function(i) {
    u.__compiled__[u.__schemas__[i]] && (u.__compiled__[i].validate = u.__compiled__[u.__schemas__[i]].validate, u.__compiled__[i].normalize = u.__compiled__[u.__schemas__[i]].normalize);
  }), u.__compiled__[""] = { validate: null, normalize: ur() };
  const a = Object.keys(u.__compiled__).filter(function(i) {
    return i.length > 0 && u.__compiled__[i];
  }).map(Bc).join("|");
  u.re.schema_test = RegExp("(^|(?!_)(?:[><｜]|" + e.src_ZPCc + "))(" + a + ")", "i"), u.re.schema_search = RegExp("(^|(?!_)(?:[><｜]|" + e.src_ZPCc + "))(" + a + ")", "ig"), u.re.schema_at_start = RegExp("^" + u.re.schema_search.source, "i"), u.re.pretest = RegExp(
    "(" + u.re.schema_test.source + ")|(" + u.re.host_fuzzy_test.source + ")|@",
    "i"
  ), jc(u);
}
function Hc(u, e) {
  const r = u.__index__, n = u.__last_index__, c = u.__text_cache__.slice(r, n);
  this.schema = u.__schema__.toLowerCase(), this.index = r + e, this.lastIndex = n + e, this.raw = c, this.text = c, this.url = c;
}
function Ee(u, e) {
  const r = new Hc(u, e);
  return u.__compiled__[r.schema].normalize(r, u), r;
}
function w(u, e) {
  if (!(this instanceof w))
    return new w(u, e);
  e || Oc(u) && (e = u, u = {}), this.__opts__ = ye({}, gr, e), this.__index__ = -1, this.__last_index__ = -1, this.__schema__ = "", this.__text_cache__ = "", this.__schemas__ = ye({}, Pc, u), this.__compiled__ = {}, this.__tlds__ = Nc, this.__tlds_replaced__ = !1, this.re = {}, au(this);
}
w.prototype.add = function(e, r) {
  return this.__schemas__[e] = r, au(this), this;
};
w.prototype.set = function(e) {
  return this.__opts__ = ye(this.__opts__, e), this;
};
w.prototype.test = function(e) {
  if (this.__text_cache__ = e, this.__index__ = -1, !e.length)
    return !1;
  let r, n, c, t, a, i, o, s, f;
  if (this.re.schema_test.test(e)) {
    for (o = this.re.schema_search, o.lastIndex = 0; (r = o.exec(e)) !== null; )
      if (t = this.testSchemaAt(e, r[2], o.lastIndex), t) {
        this.__schema__ = r[2], this.__index__ = r.index + r[1].length, this.__last_index__ = r.index + r[0].length + t;
        break;
      }
  }
  return this.__opts__.fuzzyLink && this.__compiled__["http:"] && (s = e.search(this.re.host_fuzzy_test), s >= 0 && (this.__index__ < 0 || s < this.__index__) && (n = e.match(this.__opts__.fuzzyIP ? this.re.link_fuzzy : this.re.link_no_ip_fuzzy)) !== null && (a = n.index + n[1].length, (this.__index__ < 0 || a < this.__index__) && (this.__schema__ = "", this.__index__ = a, this.__last_index__ = n.index + n[0].length))), this.__opts__.fuzzyEmail && this.__compiled__["mailto:"] && (f = e.indexOf("@"), f >= 0 && (c = e.match(this.re.email_fuzzy)) !== null && (a = c.index + c[1].length, i = c.index + c[0].length, (this.__index__ < 0 || a < this.__index__ || a === this.__index__ && i > this.__last_index__) && (this.__schema__ = "mailto:", this.__index__ = a, this.__last_index__ = i))), this.__index__ >= 0;
};
w.prototype.pretest = function(e) {
  return this.re.pretest.test(e);
};
w.prototype.testSchemaAt = function(e, r, n) {
  return this.__compiled__[r.toLowerCase()] ? this.__compiled__[r.toLowerCase()].validate(e, n, this) : 0;
};
w.prototype.match = function(e) {
  const r = [];
  let n = 0;
  this.__index__ >= 0 && this.__text_cache__ === e && (r.push(Ee(this, n)), n = this.__last_index__);
  let c = n ? e.slice(n) : e;
  for (; this.test(c); )
    r.push(Ee(this, n)), c = c.slice(this.__last_index__), n += this.__last_index__;
  return r.length ? r : null;
};
w.prototype.matchAtStart = function(e) {
  if (this.__text_cache__ = e, this.__index__ = -1, !e.length) return null;
  const r = this.re.schema_at_start.exec(e);
  if (!r) return null;
  const n = this.testSchemaAt(e, r[2], r[0].length);
  return n ? (this.__schema__ = r[2], this.__index__ = r.index + r[1].length, this.__last_index__ = r.index + r[0].length + n, Ee(this, 0)) : null;
};
w.prototype.tlds = function(e, r) {
  return e = Array.isArray(e) ? e : [e], r ? (this.__tlds__ = this.__tlds__.concat(e).sort().filter(function(n, c, t) {
    return n !== t[c - 1];
  }).reverse(), au(this), this) : (this.__tlds__ = e.slice(), this.__tlds_replaced__ = !0, au(this), this);
};
w.prototype.normalize = function(e) {
  e.schema || (e.url = "http://" + e.url), e.schema === "mailto:" && !/^mailto:/i.test(e.url) && (e.url = "mailto:" + e.url);
};
w.prototype.onCompile = function() {
};
const G = 2147483647, R = 36, Oe = 1, X = 26, Gc = 38, Uc = 700, kr = 72, Cr = 128, Dr = "-", Zc = /^xn--/, Vc = /[^\0-\x7F]/, Wc = /[\x2E\u3002\uFF0E\uFF61]/g, Jc = {
  overflow: "Overflow: input needs wider integers to process",
  "not-basic": "Illegal input >= 0x80 (not a basic code point)",
  "invalid-input": "Invalid input"
}, ke = R - Oe, z = Math.floor, Ce = String.fromCharCode;
function O(u) {
  throw new RangeError(Jc[u]);
}
function Kc(u, e) {
  const r = [];
  let n = u.length;
  for (; n--; )
    r[n] = e(u[n]);
  return r;
}
function yr(u, e) {
  const r = u.split("@");
  let n = "";
  r.length > 1 && (n = r[0] + "@", u = r[1]), u = u.replace(Wc, ".");
  const c = u.split("."), t = Kc(c, e).join(".");
  return n + t;
}
function Er(u) {
  const e = [];
  let r = 0;
  const n = u.length;
  for (; r < n; ) {
    const c = u.charCodeAt(r++);
    if (c >= 55296 && c <= 56319 && r < n) {
      const t = u.charCodeAt(r++);
      (t & 64512) == 56320 ? e.push(((c & 1023) << 10) + (t & 1023) + 65536) : (e.push(c), r--);
    } else
      e.push(c);
  }
  return e;
}
const Qc = (u) => String.fromCodePoint(...u), Xc = function(u) {
  return u >= 48 && u < 58 ? 26 + (u - 48) : u >= 65 && u < 91 ? u - 65 : u >= 97 && u < 123 ? u - 97 : R;
}, er = function(u, e) {
  return u + 22 + 75 * (u < 26) - ((e != 0) << 5);
}, Fr = function(u, e, r) {
  let n = 0;
  for (u = r ? z(u / Uc) : u >> 1, u += z(u / e); u > ke * X >> 1; n += R)
    u = z(u / ke);
  return z(n + (ke + 1) * u / (u + Gc));
}, Ar = function(u) {
  const e = [], r = u.length;
  let n = 0, c = Cr, t = kr, a = u.lastIndexOf(Dr);
  a < 0 && (a = 0);
  for (let i = 0; i < a; ++i)
    u.charCodeAt(i) >= 128 && O("not-basic"), e.push(u.charCodeAt(i));
  for (let i = a > 0 ? a + 1 : 0; i < r; ) {
    const o = n;
    for (let f = 1, l = R; ; l += R) {
      i >= r && O("invalid-input");
      const b = Xc(u.charCodeAt(i++));
      b >= R && O("invalid-input"), b > z((G - n) / f) && O("overflow"), n += b * f;
      const h = l <= t ? Oe : l >= t + X ? X : l - t;
      if (b < h)
        break;
      const d = R - h;
      f > z(G / d) && O("overflow"), f *= d;
    }
    const s = e.length + 1;
    t = Fr(n - o, s, o == 0), z(n / s) > G - c && O("overflow"), c += z(n / s), n %= s, e.splice(n++, 0, c);
  }
  return String.fromCodePoint(...e);
}, vr = function(u) {
  const e = [];
  u = Er(u);
  const r = u.length;
  let n = Cr, c = 0, t = kr;
  for (const o of u)
    o < 128 && e.push(Ce(o));
  const a = e.length;
  let i = a;
  for (a && e.push(Dr); i < r; ) {
    let o = G;
    for (const f of u)
      f >= n && f < o && (o = f);
    const s = i + 1;
    o - n > z((G - c) / s) && O("overflow"), c += (o - n) * s, n = o;
    for (const f of u)
      if (f < n && ++c > G && O("overflow"), f === n) {
        let l = c;
        for (let b = R; ; b += R) {
          const h = b <= t ? Oe : b >= t + X ? X : b - t;
          if (l < h)
            break;
          const d = l - h, g = R - h;
          e.push(
            Ce(er(h + d % g, 0))
          ), l = z(d / g);
        }
        e.push(Ce(er(l, 0))), t = Fr(c, s, i === a), c = 0, ++i;
      }
    ++c, ++n;
  }
  return e.join("");
}, Yc = function(u) {
  return yr(u, function(e) {
    return Zc.test(e) ? Ar(e.slice(4).toLowerCase()) : e;
  });
}, ui = function(u) {
  return yr(u, function(e) {
    return Vc.test(e) ? "xn--" + vr(e) : e;
  });
}, wr = {
  /**
   * A string representing the current Punycode.js version number.
   * @memberOf punycode
   * @type String
   */
  version: "2.3.1",
  /**
   * An object of methods to convert from JavaScript's internal character
   * representation (UCS-2) to Unicode code points, and back.
   * @see <https://mathiasbynens.be/notes/javascript-encoding>
   * @memberOf punycode
   * @type Object
   */
  ucs2: {
    decode: Er,
    encode: Qc
  },
  decode: Ar,
  encode: vr,
  toASCII: ui,
  toUnicode: Yc
}, ei = {
  options: {
    // Enable HTML tags in source
    html: !1,
    // Use '/' to close single tags (<br />)
    xhtmlOut: !1,
    // Convert '\n' in paragraphs into <br>
    breaks: !1,
    // CSS language prefix for fenced blocks
    langPrefix: "language-",
    // autoconvert URL-like texts to links
    linkify: !1,
    // Enable some language-neutral replacements + quotes beautification
    typographer: !1,
    // Double + single quotes replacement pairs, when typographer enabled,
    // and smartquotes on. Could be either a String or an Array.
    //
    // For example, you can use '«»„“' for Russian, '„“‚‘' for German,
    // and ['«\xA0', '\xA0»', '‹\xA0', '\xA0›'] for French (including nbsp).
    quotes: "“”‘’",
    /* “”‘’ */
    // Highlighter function. Should return escaped HTML,
    // or '' if the source string is not changed and should be escaped externaly.
    // If result starts with <pre... internal wrapper is skipped.
    //
    // function (/*str, lang*/) { return ''; }
    //
    highlight: null,
    // Internal protection, recursion limit
    maxNesting: 100
  },
  components: {
    core: {},
    block: {},
    inline: {}
  }
}, ri = {
  options: {
    // Enable HTML tags in source
    html: !1,
    // Use '/' to close single tags (<br />)
    xhtmlOut: !1,
    // Convert '\n' in paragraphs into <br>
    breaks: !1,
    // CSS language prefix for fenced blocks
    langPrefix: "language-",
    // autoconvert URL-like texts to links
    linkify: !1,
    // Enable some language-neutral replacements + quotes beautification
    typographer: !1,
    // Double + single quotes replacement pairs, when typographer enabled,
    // and smartquotes on. Could be either a String or an Array.
    //
    // For example, you can use '«»„“' for Russian, '„“‚‘' for German,
    // and ['«\xA0', '\xA0»', '‹\xA0', '\xA0›'] for French (including nbsp).
    quotes: "“”‘’",
    /* “”‘’ */
    // Highlighter function. Should return escaped HTML,
    // or '' if the source string is not changed and should be escaped externaly.
    // If result starts with <pre... internal wrapper is skipped.
    //
    // function (/*str, lang*/) { return ''; }
    //
    highlight: null,
    // Internal protection, recursion limit
    maxNesting: 20
  },
  components: {
    core: {
      rules: [
        "normalize",
        "block",
        "inline",
        "text_join"
      ]
    },
    block: {
      rules: [
        "paragraph"
      ]
    },
    inline: {
      rules: [
        "text"
      ],
      rules2: [
        "balance_pairs",
        "fragments_join"
      ]
    }
  }
}, ti = {
  options: {
    // Enable HTML tags in source
    html: !0,
    // Use '/' to close single tags (<br />)
    xhtmlOut: !0,
    // Convert '\n' in paragraphs into <br>
    breaks: !1,
    // CSS language prefix for fenced blocks
    langPrefix: "language-",
    // autoconvert URL-like texts to links
    linkify: !1,
    // Enable some language-neutral replacements + quotes beautification
    typographer: !1,
    // Double + single quotes replacement pairs, when typographer enabled,
    // and smartquotes on. Could be either a String or an Array.
    //
    // For example, you can use '«»„“' for Russian, '„“‚‘' for German,
    // and ['«\xA0', '\xA0»', '‹\xA0', '\xA0›'] for French (including nbsp).
    quotes: "“”‘’",
    /* “”‘’ */
    // Highlighter function. Should return escaped HTML,
    // or '' if the source string is not changed and should be escaped externaly.
    // If result starts with <pre... internal wrapper is skipped.
    //
    // function (/*str, lang*/) { return ''; }
    //
    highlight: null,
    // Internal protection, recursion limit
    maxNesting: 20
  },
  components: {
    core: {
      rules: [
        "normalize",
        "block",
        "inline",
        "text_join"
      ]
    },
    block: {
      rules: [
        "blockquote",
        "code",
        "fence",
        "heading",
        "hr",
        "html_block",
        "lheading",
        "list",
        "reference",
        "paragraph"
      ]
    },
    inline: {
      rules: [
        "autolink",
        "backticks",
        "emphasis",
        "entity",
        "escape",
        "html_inline",
        "image",
        "link",
        "newline",
        "text"
      ],
      rules2: [
        "balance_pairs",
        "emphasis",
        "fragments_join"
      ]
    }
  }
}, ni = {
  default: ei,
  zero: ri,
  commonmark: ti
}, ci = /^(vbscript|javascript|file|data):/, ii = /^data:image\/(gif|png|jpeg|webp);/;
function ai(u) {
  const e = u.trim().toLowerCase();
  return ci.test(e) ? ii.test(e) : !0;
}
const Sr = ["http:", "https:", "mailto:"];
function oi(u) {
  const e = Te(u, !0);
  if (e.hostname && (!e.protocol || Sr.indexOf(e.protocol) >= 0))
    try {
      e.hostname = wr.toASCII(e.hostname);
    } catch {
    }
  return Y(qe(e));
}
function si(u) {
  const e = Te(u, !0);
  if (e.hostname && (!e.protocol || Sr.indexOf(e.protocol) >= 0))
    try {
      e.hostname = wr.toUnicode(e.hostname);
    } catch {
    }
  return U(qe(e), U.defaultChars + "%");
}
function S(u, e) {
  if (!(this instanceof S))
    return new S(u, e);
  e || ze(u) || (e = u || {}, u = "default"), this.inline = new eu(), this.block = new bu(), this.core = new Me(), this.renderer = new V(), this.linkify = new w(), this.validateLink = ai, this.normalizeLink = oi, this.normalizeLinkText = si, this.utils = ln, this.helpers = du({}, pn), this.options = {}, this.configure(u), e && this.set(e);
}
S.prototype.set = function(u) {
  return du(this.options, u), this;
};
S.prototype.configure = function(u) {
  const e = this;
  if (ze(u)) {
    const r = u;
    if (u = ni[r], !u)
      throw new Error('Wrong `markdown-it` preset "' + r + '", check name');
  }
  if (!u)
    throw new Error("Wrong `markdown-it` preset, can't be empty");
  return u.options && e.set(u.options), u.components && Object.keys(u.components).forEach(function(r) {
    u.components[r].rules && e[r].ruler.enableOnly(u.components[r].rules), u.components[r].rules2 && e[r].ruler2.enableOnly(u.components[r].rules2);
  }), this;
};
S.prototype.enable = function(u, e) {
  let r = [];
  Array.isArray(u) || (u = [u]), ["core", "block", "inline"].forEach(function(c) {
    r = r.concat(this[c].ruler.enable(u, !0));
  }, this), r = r.concat(this.inline.ruler2.enable(u, !0));
  const n = u.filter(function(c) {
    return r.indexOf(c) < 0;
  });
  if (n.length && !e)
    throw new Error("MarkdownIt. Failed to enable unknown rule(s): " + n);
  return this;
};
S.prototype.disable = function(u, e) {
  let r = [];
  Array.isArray(u) || (u = [u]), ["core", "block", "inline"].forEach(function(c) {
    r = r.concat(this[c].ruler.disable(u, !0));
  }, this), r = r.concat(this.inline.ruler2.disable(u, !0));
  const n = u.filter(function(c) {
    return r.indexOf(c) < 0;
  });
  if (n.length && !e)
    throw new Error("MarkdownIt. Failed to disable unknown rule(s): " + n);
  return this;
};
S.prototype.use = function(u) {
  const e = [this].concat(Array.prototype.slice.call(arguments, 1));
  return u.apply(u, e), this;
};
S.prototype.parse = function(u, e) {
  if (typeof u != "string")
    throw new Error("Input data should be a String");
  const r = new this.core.State(u, this, e);
  return this.core.process(r), r.tokens;
};
S.prototype.render = function(u, e) {
  return e = e || {}, this.renderer.render(this.parse(u, e), this.options, e);
};
S.prototype.parseInline = function(u, e) {
  const r = new this.core.State(u, this, e);
  return r.inlineMode = !0, this.core.process(r), r.tokens;
};
S.prototype.renderInline = function(u, e) {
  return e = e || {}, this.renderer.render(this.parseInline(u, e), this.options, e);
};
const Fe = "en", H = {};
let ou = Fe;
const fi = (u = 16, e = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789") => {
  let r = "";
  const n = e.length;
  for (let c = 0; c < u; c++) {
    const t = Math.floor(Math.random() * n);
    r += e[t];
  }
  return r;
}, li = (u) => u && typeof u == "object" && u.$$typeof === Symbol.for("react.element"), qr = function(u, e, r = !1) {
  if (r) {
    const s = new S({
      html: !0
    });
    s.renderer.rules.paragraph_open = () => "", s.renderer.rules.paragraph_close = () => "", u = s.render(u);
  }
  const n = u.substr(0, u.indexOf(".")), c = u;
  (!n || !H[ou].__possible_keys.includes(n) && !H[Fe].__possible_keys.includes(n)) && (u = "__global." + u);
  let t = O0(H[ou], u);
  if (t || (typeof window < "u" && window.dispatchEvent(new CustomEvent("translation:missing", { detail: { key: c } })), t = O0(H[Fe], u), t || (t = c)), !t.includes(":"))
    return t;
  const a = t.split(/(:\w+)/g);
  let i = !1;
  const o = a.map((s) => {
    if (s.startsWith(":")) {
      const f = s.substring(1);
      let l = e == null ? void 0 : e[f];
      return li(l) && (l = {
        ...l,
        key: fi()
      }, i = !0), l ?? s;
    }
    return s;
  });
  return i ? o : o.join("");
};
typeof window < "u" && (window.trans = window.translate = window.__ = qr, window.setTranslations = (u, e) => {
  H[e] = u;
}, window.setLocale = (u) => {
  ou = u;
});
const di = (u, e) => (ou = e, H[e] = u, qr);
export {
  di as jstranslate
};
