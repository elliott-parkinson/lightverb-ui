// ../../../../../../home/majora/.cache/deno/npm/registry.npmjs.org/@preact/signals-core/1.13.0/dist/signals-core.module.js
var i = Symbol.for("preact-signals");
function t() {
  if (!(s > 1)) {
    var i9, t8 = false;
    while (void 0 !== h) {
      var n7 = h;
      h = void 0;
      v++;
      while (void 0 !== n7) {
        var r10 = n7.o;
        n7.o = void 0;
        n7.f &= -3;
        if (!(8 & n7.f) && a(n7)) try {
          n7.c();
        } catch (n8) {
          if (!t8) {
            i9 = n8;
            t8 = true;
          }
        }
        n7 = r10;
      }
    }
    v = 0;
    s--;
    if (t8) throw i9;
  } else s--;
}
function n(i9) {
  if (s > 0) return i9();
  s++;
  try {
    return i9();
  } finally {
    t();
  }
}
var r = void 0;
function o(i9) {
  var t8 = r;
  r = void 0;
  try {
    return i9();
  } finally {
    r = t8;
  }
}
var f;
var h = void 0;
var s = 0;
var v = 0;
var u = 0;
function e(i9) {
  if (void 0 !== r) {
    var t8 = i9.n;
    if (void 0 === t8 || t8.t !== r) {
      t8 = {
        i: 0,
        S: i9,
        p: r.s,
        n: void 0,
        t: r,
        e: void 0,
        x: void 0,
        r: t8
      };
      if (void 0 !== r.s) r.s.n = t8;
      r.s = t8;
      i9.n = t8;
      if (32 & r.f) i9.S(t8);
      return t8;
    } else if (-1 === t8.i) {
      t8.i = 0;
      if (void 0 !== t8.n) {
        t8.n.p = t8.p;
        if (void 0 !== t8.p) t8.p.n = t8.n;
        t8.p = r.s;
        t8.n = void 0;
        r.s.n = t8;
        r.s = t8;
      }
      return t8;
    }
  }
}
function d(i9, t8) {
  this.v = i9;
  this.i = 0;
  this.n = void 0;
  this.t = void 0;
  this.W = null == t8 ? void 0 : t8.watched;
  this.Z = null == t8 ? void 0 : t8.unwatched;
  this.name = null == t8 ? void 0 : t8.name;
}
d.prototype.brand = i;
d.prototype.h = function() {
  return true;
};
d.prototype.S = function(i9) {
  var t8 = this, n7 = this.t;
  if (n7 !== i9 && void 0 === i9.e) {
    i9.x = n7;
    this.t = i9;
    if (void 0 !== n7) n7.e = i9;
    else o(function() {
      var i10;
      null == (i10 = t8.W) || i10.call(t8);
    });
  }
};
d.prototype.U = function(i9) {
  var t8 = this;
  if (void 0 !== this.t) {
    var n7 = i9.e, r10 = i9.x;
    if (void 0 !== n7) {
      n7.x = r10;
      i9.e = void 0;
    }
    if (void 0 !== r10) {
      r10.e = n7;
      i9.x = void 0;
    }
    if (i9 === this.t) {
      this.t = r10;
      if (void 0 === r10) o(function() {
        var i10;
        null == (i10 = t8.Z) || i10.call(t8);
      });
    }
  }
};
d.prototype.subscribe = function(i9) {
  var t8 = this;
  return m(function() {
    var n7 = t8.value, o9 = r;
    r = void 0;
    try {
      i9(n7);
    } finally {
      r = o9;
    }
  }, {
    name: "sub"
  });
};
d.prototype.valueOf = function() {
  return this.value;
};
d.prototype.toString = function() {
  return this.value + "";
};
d.prototype.toJSON = function() {
  return this.value;
};
d.prototype.peek = function() {
  var i9 = r;
  r = void 0;
  try {
    return this.value;
  } finally {
    r = i9;
  }
};
Object.defineProperty(d.prototype, "value", {
  get: function() {
    var i9 = e(this);
    if (void 0 !== i9) i9.i = this.i;
    return this.v;
  },
  set: function(i9) {
    if (i9 !== this.v) {
      if (v > 100) throw new Error("Cycle detected");
      this.v = i9;
      this.i++;
      u++;
      s++;
      try {
        for (var n7 = this.t; void 0 !== n7; n7 = n7.x) n7.t.N();
      } finally {
        t();
      }
    }
  }
});
function c(i9, t8) {
  return new d(i9, t8);
}
function a(i9) {
  for (var t8 = i9.s; void 0 !== t8; t8 = t8.n) if (t8.S.i !== t8.i || !t8.S.h() || t8.S.i !== t8.i) return true;
  return false;
}
function l(i9) {
  for (var t8 = i9.s; void 0 !== t8; t8 = t8.n) {
    var n7 = t8.S.n;
    if (void 0 !== n7) t8.r = n7;
    t8.S.n = t8;
    t8.i = -1;
    if (void 0 === t8.n) {
      i9.s = t8;
      break;
    }
  }
}
function y(i9) {
  var t8 = i9.s, n7 = void 0;
  while (void 0 !== t8) {
    var r10 = t8.p;
    if (-1 === t8.i) {
      t8.S.U(t8);
      if (void 0 !== r10) r10.n = t8.n;
      if (void 0 !== t8.n) t8.n.p = r10;
    } else n7 = t8;
    t8.S.n = t8.r;
    if (void 0 !== t8.r) t8.r = void 0;
    t8 = r10;
  }
  i9.s = n7;
}
function w(i9, t8) {
  d.call(this, void 0);
  this.x = i9;
  this.s = void 0;
  this.g = u - 1;
  this.f = 4;
  this.W = null == t8 ? void 0 : t8.watched;
  this.Z = null == t8 ? void 0 : t8.unwatched;
  this.name = null == t8 ? void 0 : t8.name;
}
w.prototype = new d();
w.prototype.h = function() {
  this.f &= -3;
  if (1 & this.f) return false;
  if (32 == (36 & this.f)) return true;
  this.f &= -5;
  if (this.g === u) return true;
  this.g = u;
  this.f |= 1;
  if (this.i > 0 && !a(this)) {
    this.f &= -2;
    return true;
  }
  var i9 = r;
  try {
    l(this);
    r = this;
    var t8 = this.x();
    if (16 & this.f || this.v !== t8 || 0 === this.i) {
      this.v = t8;
      this.f &= -17;
      this.i++;
    }
  } catch (i10) {
    this.v = i10;
    this.f |= 16;
    this.i++;
  }
  r = i9;
  y(this);
  this.f &= -2;
  return true;
};
w.prototype.S = function(i9) {
  if (void 0 === this.t) {
    this.f |= 36;
    for (var t8 = this.s; void 0 !== t8; t8 = t8.n) t8.S.S(t8);
  }
  d.prototype.S.call(this, i9);
};
w.prototype.U = function(i9) {
  if (void 0 !== this.t) {
    d.prototype.U.call(this, i9);
    if (void 0 === this.t) {
      this.f &= -33;
      for (var t8 = this.s; void 0 !== t8; t8 = t8.n) t8.S.U(t8);
    }
  }
};
w.prototype.N = function() {
  if (!(2 & this.f)) {
    this.f |= 6;
    for (var i9 = this.t; void 0 !== i9; i9 = i9.x) i9.t.N();
  }
};
Object.defineProperty(w.prototype, "value", {
  get: function() {
    if (1 & this.f) throw new Error("Cycle detected");
    var i9 = e(this);
    this.h();
    if (void 0 !== i9) i9.i = this.i;
    if (16 & this.f) throw this.v;
    return this.v;
  }
});
function b(i9, t8) {
  return new w(i9, t8);
}
function _(i9) {
  var n7 = i9.u;
  i9.u = void 0;
  if ("function" == typeof n7) {
    s++;
    var o9 = r;
    r = void 0;
    try {
      n7();
    } catch (t8) {
      i9.f &= -2;
      i9.f |= 8;
      p(i9);
      throw t8;
    } finally {
      r = o9;
      t();
    }
  }
}
function p(i9) {
  for (var t8 = i9.s; void 0 !== t8; t8 = t8.n) t8.S.U(t8);
  i9.x = void 0;
  i9.s = void 0;
  _(i9);
}
function g(i9) {
  if (r !== this) throw new Error("Out-of-order effect");
  y(this);
  r = i9;
  this.f &= -2;
  if (8 & this.f) p(this);
  t();
}
function S(i9, t8) {
  this.x = i9;
  this.u = void 0;
  this.s = void 0;
  this.o = void 0;
  this.f = 32;
  this.name = null == t8 ? void 0 : t8.name;
  if (f) f.push(this);
}
S.prototype.c = function() {
  var i9 = this.S();
  try {
    if (8 & this.f) return;
    if (void 0 === this.x) return;
    var t8 = this.x();
    if ("function" == typeof t8) this.u = t8;
  } finally {
    i9();
  }
};
S.prototype.S = function() {
  if (1 & this.f) throw new Error("Cycle detected");
  this.f |= 1;
  this.f &= -9;
  _(this);
  l(this);
  s++;
  var i9 = r;
  r = this;
  return g.bind(this, i9);
};
S.prototype.N = function() {
  if (!(2 & this.f)) {
    this.f |= 2;
    this.o = h;
    h = this;
  }
};
S.prototype.d = function() {
  this.f |= 8;
  if (!(1 & this.f)) p(this);
};
S.prototype.dispose = function() {
  this.d();
};
function m(i9, t8) {
  var n7 = new S(i9, t8);
  try {
    n7.c();
  } catch (i10) {
    n7.d();
    throw i10;
  }
  var r10 = n7.d.bind(n7);
  r10[Symbol.dispose] = r10;
  return r10;
}

// ../../../../../../home/majora/.cache/deno/npm/registry.npmjs.org/lit-html/3.3.2/lit-html.js
var t2 = globalThis;
var i2 = (t8) => t8;
var s2 = t2.trustedTypes;
var e2 = s2 ? s2.createPolicy("lit-html", {
  createHTML: (t8) => t8
}) : void 0;
var h2 = "$lit$";
var o2 = `lit$${Math.random().toFixed(9).slice(2)}$`;
var n2 = "?" + o2;
var r2 = `<${n2}>`;
var l2 = document;
var c2 = () => l2.createComment("");
var a2 = (t8) => null === t8 || "object" != typeof t8 && "function" != typeof t8;
var u2 = Array.isArray;
var d2 = (t8) => u2(t8) || "function" == typeof t8?.[Symbol.iterator];
var f2 = "[ 	\n\f\r]";
var v2 = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g;
var _2 = /-->/g;
var m2 = />/g;
var p2 = RegExp(`>|${f2}(?:([^\\s"'>=/]+)(${f2}*=${f2}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g");
var g2 = /'/g;
var $ = /"/g;
var y2 = /^(?:script|style|textarea|title)$/i;
var x = (t8) => (i9, ...s7) => ({
  _$litType$: t8,
  strings: i9,
  values: s7
});
var b2 = x(1);
var w2 = x(2);
var T = x(3);
var E = Symbol.for("lit-noChange");
var A = Symbol.for("lit-nothing");
var C = /* @__PURE__ */ new WeakMap();
var P = l2.createTreeWalker(l2, 129);
function V(t8, i9) {
  if (!u2(t8) || !t8.hasOwnProperty("raw")) throw Error("invalid template strings array");
  return void 0 !== e2 ? e2.createHTML(i9) : i9;
}
var N = (t8, i9) => {
  const s7 = t8.length - 1, e9 = [];
  let n7, l7 = 2 === i9 ? "<svg>" : 3 === i9 ? "<math>" : "", c7 = v2;
  for (let i10 = 0; i10 < s7; i10++) {
    const s8 = t8[i10];
    let a6, u6, d6 = -1, f7 = 0;
    for (; f7 < s8.length && (c7.lastIndex = f7, u6 = c7.exec(s8), null !== u6); ) f7 = c7.lastIndex, c7 === v2 ? "!--" === u6[1] ? c7 = _2 : void 0 !== u6[1] ? c7 = m2 : void 0 !== u6[2] ? (y2.test(u6[2]) && (n7 = RegExp("</" + u6[2], "g")), c7 = p2) : void 0 !== u6[3] && (c7 = p2) : c7 === p2 ? ">" === u6[0] ? (c7 = n7 ?? v2, d6 = -1) : void 0 === u6[1] ? d6 = -2 : (d6 = c7.lastIndex - u6[2].length, a6 = u6[1], c7 = void 0 === u6[3] ? p2 : '"' === u6[3] ? $ : g2) : c7 === $ || c7 === g2 ? c7 = p2 : c7 === _2 || c7 === m2 ? c7 = v2 : (c7 = p2, n7 = void 0);
    const x4 = c7 === p2 && t8[i10 + 1].startsWith("/>") ? " " : "";
    l7 += c7 === v2 ? s8 + r2 : d6 >= 0 ? (e9.push(a6), s8.slice(0, d6) + h2 + s8.slice(d6) + o2 + x4) : s8 + o2 + (-2 === d6 ? i10 : x4);
  }
  return [
    V(t8, l7 + (t8[s7] || "<?>") + (2 === i9 ? "</svg>" : 3 === i9 ? "</math>" : "")),
    e9
  ];
};
var S2 = class _S {
  constructor({ strings: t8, _$litType$: i9 }, e9) {
    let r10;
    this.parts = [];
    let l7 = 0, a6 = 0;
    const u6 = t8.length - 1, d6 = this.parts, [f7, v5] = N(t8, i9);
    if (this.el = _S.createElement(f7, e9), P.currentNode = this.el.content, 2 === i9 || 3 === i9) {
      const t9 = this.el.content.firstChild;
      t9.replaceWith(...t9.childNodes);
    }
    for (; null !== (r10 = P.nextNode()) && d6.length < u6; ) {
      if (1 === r10.nodeType) {
        if (r10.hasAttributes()) for (const t9 of r10.getAttributeNames()) if (t9.endsWith(h2)) {
          const i10 = v5[a6++], s7 = r10.getAttribute(t9).split(o2), e10 = /([.?@])?(.*)/.exec(i10);
          d6.push({
            type: 1,
            index: l7,
            name: e10[2],
            strings: s7,
            ctor: "." === e10[1] ? I : "?" === e10[1] ? L : "@" === e10[1] ? z : H
          }), r10.removeAttribute(t9);
        } else t9.startsWith(o2) && (d6.push({
          type: 6,
          index: l7
        }), r10.removeAttribute(t9));
        if (y2.test(r10.tagName)) {
          const t9 = r10.textContent.split(o2), i10 = t9.length - 1;
          if (i10 > 0) {
            r10.textContent = s2 ? s2.emptyScript : "";
            for (let s7 = 0; s7 < i10; s7++) r10.append(t9[s7], c2()), P.nextNode(), d6.push({
              type: 2,
              index: ++l7
            });
            r10.append(t9[i10], c2());
          }
        }
      } else if (8 === r10.nodeType) if (r10.data === n2) d6.push({
        type: 2,
        index: l7
      });
      else {
        let t9 = -1;
        for (; -1 !== (t9 = r10.data.indexOf(o2, t9 + 1)); ) d6.push({
          type: 7,
          index: l7
        }), t9 += o2.length - 1;
      }
      l7++;
    }
  }
  static createElement(t8, i9) {
    const s7 = l2.createElement("template");
    return s7.innerHTML = t8, s7;
  }
};
function M(t8, i9, s7 = t8, e9) {
  if (i9 === E) return i9;
  let h6 = void 0 !== e9 ? s7._$Co?.[e9] : s7._$Cl;
  const o9 = a2(i9) ? void 0 : i9._$litDirective$;
  return h6?.constructor !== o9 && (h6?._$AO?.(false), void 0 === o9 ? h6 = void 0 : (h6 = new o9(t8), h6._$AT(t8, s7, e9)), void 0 !== e9 ? (s7._$Co ??= [])[e9] = h6 : s7._$Cl = h6), void 0 !== h6 && (i9 = M(t8, h6._$AS(t8, i9.values), h6, e9)), i9;
}
var R = class {
  constructor(t8, i9) {
    this._$AV = [], this._$AN = void 0, this._$AD = t8, this._$AM = i9;
  }
  get parentNode() {
    return this._$AM.parentNode;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  u(t8) {
    const { el: { content: i9 }, parts: s7 } = this._$AD, e9 = (t8?.creationScope ?? l2).importNode(i9, true);
    P.currentNode = e9;
    let h6 = P.nextNode(), o9 = 0, n7 = 0, r10 = s7[0];
    for (; void 0 !== r10; ) {
      if (o9 === r10.index) {
        let i10;
        2 === r10.type ? i10 = new k(h6, h6.nextSibling, this, t8) : 1 === r10.type ? i10 = new r10.ctor(h6, r10.name, r10.strings, this, t8) : 6 === r10.type && (i10 = new Z(h6, this, t8)), this._$AV.push(i10), r10 = s7[++n7];
      }
      o9 !== r10?.index && (h6 = P.nextNode(), o9++);
    }
    return P.currentNode = l2, e9;
  }
  p(t8) {
    let i9 = 0;
    for (const s7 of this._$AV) void 0 !== s7 && (void 0 !== s7.strings ? (s7._$AI(t8, s7, i9), i9 += s7.strings.length - 2) : s7._$AI(t8[i9])), i9++;
  }
};
var k = class _k {
  get _$AU() {
    return this._$AM?._$AU ?? this._$Cv;
  }
  constructor(t8, i9, s7, e9) {
    this.type = 2, this._$AH = A, this._$AN = void 0, this._$AA = t8, this._$AB = i9, this._$AM = s7, this.options = e9, this._$Cv = e9?.isConnected ?? true;
  }
  get parentNode() {
    let t8 = this._$AA.parentNode;
    const i9 = this._$AM;
    return void 0 !== i9 && 11 === t8?.nodeType && (t8 = i9.parentNode), t8;
  }
  get startNode() {
    return this._$AA;
  }
  get endNode() {
    return this._$AB;
  }
  _$AI(t8, i9 = this) {
    t8 = M(this, t8, i9), a2(t8) ? t8 === A || null == t8 || "" === t8 ? (this._$AH !== A && this._$AR(), this._$AH = A) : t8 !== this._$AH && t8 !== E && this._(t8) : void 0 !== t8._$litType$ ? this.$(t8) : void 0 !== t8.nodeType ? this.T(t8) : d2(t8) ? this.k(t8) : this._(t8);
  }
  O(t8) {
    return this._$AA.parentNode.insertBefore(t8, this._$AB);
  }
  T(t8) {
    this._$AH !== t8 && (this._$AR(), this._$AH = this.O(t8));
  }
  _(t8) {
    this._$AH !== A && a2(this._$AH) ? this._$AA.nextSibling.data = t8 : this.T(l2.createTextNode(t8)), this._$AH = t8;
  }
  $(t8) {
    const { values: i9, _$litType$: s7 } = t8, e9 = "number" == typeof s7 ? this._$AC(t8) : (void 0 === s7.el && (s7.el = S2.createElement(V(s7.h, s7.h[0]), this.options)), s7);
    if (this._$AH?._$AD === e9) this._$AH.p(i9);
    else {
      const t9 = new R(e9, this), s8 = t9.u(this.options);
      t9.p(i9), this.T(s8), this._$AH = t9;
    }
  }
  _$AC(t8) {
    let i9 = C.get(t8.strings);
    return void 0 === i9 && C.set(t8.strings, i9 = new S2(t8)), i9;
  }
  k(t8) {
    u2(this._$AH) || (this._$AH = [], this._$AR());
    const i9 = this._$AH;
    let s7, e9 = 0;
    for (const h6 of t8) e9 === i9.length ? i9.push(s7 = new _k(this.O(c2()), this.O(c2()), this, this.options)) : s7 = i9[e9], s7._$AI(h6), e9++;
    e9 < i9.length && (this._$AR(s7 && s7._$AB.nextSibling, e9), i9.length = e9);
  }
  _$AR(t8 = this._$AA.nextSibling, s7) {
    for (this._$AP?.(false, true, s7); t8 !== this._$AB; ) {
      const s8 = i2(t8).nextSibling;
      i2(t8).remove(), t8 = s8;
    }
  }
  setConnected(t8) {
    void 0 === this._$AM && (this._$Cv = t8, this._$AP?.(t8));
  }
};
var H = class {
  get tagName() {
    return this.element.tagName;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  constructor(t8, i9, s7, e9, h6) {
    this.type = 1, this._$AH = A, this._$AN = void 0, this.element = t8, this.name = i9, this._$AM = e9, this.options = h6, s7.length > 2 || "" !== s7[0] || "" !== s7[1] ? (this._$AH = Array(s7.length - 1).fill(new String()), this.strings = s7) : this._$AH = A;
  }
  _$AI(t8, i9 = this, s7, e9) {
    const h6 = this.strings;
    let o9 = false;
    if (void 0 === h6) t8 = M(this, t8, i9, 0), o9 = !a2(t8) || t8 !== this._$AH && t8 !== E, o9 && (this._$AH = t8);
    else {
      const e10 = t8;
      let n7, r10;
      for (t8 = h6[0], n7 = 0; n7 < h6.length - 1; n7++) r10 = M(this, e10[s7 + n7], i9, n7), r10 === E && (r10 = this._$AH[n7]), o9 ||= !a2(r10) || r10 !== this._$AH[n7], r10 === A ? t8 = A : t8 !== A && (t8 += (r10 ?? "") + h6[n7 + 1]), this._$AH[n7] = r10;
    }
    o9 && !e9 && this.j(t8);
  }
  j(t8) {
    t8 === A ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, t8 ?? "");
  }
};
var I = class extends H {
  constructor() {
    super(...arguments), this.type = 3;
  }
  j(t8) {
    this.element[this.name] = t8 === A ? void 0 : t8;
  }
};
var L = class extends H {
  constructor() {
    super(...arguments), this.type = 4;
  }
  j(t8) {
    this.element.toggleAttribute(this.name, !!t8 && t8 !== A);
  }
};
var z = class extends H {
  constructor(t8, i9, s7, e9, h6) {
    super(t8, i9, s7, e9, h6), this.type = 5;
  }
  _$AI(t8, i9 = this) {
    if ((t8 = M(this, t8, i9, 0) ?? A) === E) return;
    const s7 = this._$AH, e9 = t8 === A && s7 !== A || t8.capture !== s7.capture || t8.once !== s7.once || t8.passive !== s7.passive, h6 = t8 !== A && (s7 === A || e9);
    e9 && this.element.removeEventListener(this.name, this, s7), h6 && this.element.addEventListener(this.name, this, t8), this._$AH = t8;
  }
  handleEvent(t8) {
    "function" == typeof this._$AH ? this._$AH.call(this.options?.host ?? this.element, t8) : this._$AH.handleEvent(t8);
  }
};
var Z = class {
  constructor(t8, i9, s7) {
    this.element = t8, this.type = 6, this._$AN = void 0, this._$AM = i9, this.options = s7;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(t8) {
    M(this, t8);
  }
};
var j = {
  M: h2,
  P: o2,
  A: n2,
  C: 1,
  L: N,
  R,
  D: d2,
  V: M,
  I: k,
  H,
  N: L,
  U: z,
  B: I,
  F: Z
};
var B = t2.litHtmlPolyfillSupport;
B?.(S2, k), (t2.litHtmlVersions ??= []).push("3.3.2");
var D = (t8, i9, s7) => {
  const e9 = s7?.renderBefore ?? i9;
  let h6 = e9._$litPart$;
  if (void 0 === h6) {
    const t9 = s7?.renderBefore ?? null;
    e9._$litPart$ = h6 = new k(i9.insertBefore(c2(), t9), t9, void 0, s7 ?? {});
  }
  return h6._$AI(t8), h6;
};

// deno:https://jsr.io/@collapse-theory/extinguish/0.1.4/src/enhance.ts
var registry = /* @__PURE__ */ new Map();
var mounted = /* @__PURE__ */ new WeakMap();
var currentHookRuntime;
var observer;
function mountElement(el, fn) {
  if (!el) return;
  mounted.get(el)?.();
  const runtime = {
    locked: false,
    cleanups: []
  };
  const stop = m(() => {
    const previousRuntime = currentHookRuntime;
    currentHookRuntime = runtime;
    let result;
    try {
      result = fn(el);
    } finally {
      currentHookRuntime = previousRuntime;
      runtime.locked = true;
    }
    if (result !== void 0) {
      D(result, el);
    }
  });
  mounted.set(el, () => {
    stop();
    for (const callback of runtime.cleanups) {
      callback();
    }
  });
}
function unmount(el) {
  if (!el) return;
  const dispose = mounted.get(el);
  if (!dispose) return;
  dispose();
  mounted.delete(el);
  D(null, el);
}
function forEachByClassName(className, callback) {
  const nodes = document.getElementsByClassName(className);
  for (const node of nodes) {
    if (!(node instanceof HTMLElement)) continue;
    callback(node);
  }
}
function walk(node, onElement) {
  if (!(node instanceof Element)) return;
  if (node instanceof HTMLElement) {
    onElement(node);
  }
  node.querySelectorAll("*").forEach(onElement);
}
function ensureObserver() {
  if (observer) return;
  observer = new MutationObserver((records) => {
    records.forEach((record) => {
      record.addedNodes.forEach((node) => walk(node, (el) => {
        registry.forEach((fn, className) => {
          if (!el.classList.contains(className)) return;
          mountElement(el, fn);
        });
      }));
      record.removedNodes.forEach((node) => walk(node, unmount));
    });
  });
  observer.observe(document, {
    childList: true,
    subtree: true
  });
}
function enhance(className, fn) {
  registry.set(className, fn);
  forEachByClassName(className, (el) => mountElement(el, fn));
  ensureObserver();
  return () => {
    registry.delete(className);
    forEachByClassName(className, (el) => unmount(el));
  };
}

// deno:https://jsr.io/@collapse-theory/extinguish/0.1.4/src/resource.ts
function resource(loader, { initialValue } = {}) {
  const data = c(initialValue);
  const pending2 = c(false);
  const error = c(null);
  let requestId = 0;
  const run = async (...args) => {
    const currentId = ++requestId;
    pending2.value = true;
    error.value = null;
    try {
      const result = await loader(...args);
      if (currentId === requestId) {
        data.value = result;
        return result;
      }
    } catch (caught) {
      if (currentId === requestId) {
        error.value = caught;
      }
    } finally {
      if (currentId === requestId) {
        pending2.value = false;
      }
    }
    return void 0;
  };
  return {
    data,
    pending: pending2,
    error,
    run,
    reload: run
  };
}

// deno:https://jsr.io/@collapse-theory/extinguish/0.1.4/src/router.ts
var routes = c([]);
var pathname = c(getBrowserWindow()?.location.pathname ?? "/");
var started = false;
var stopRouter;
function splitPath(value) {
  return value.split("/").filter(Boolean);
}
function getBrowserWindow() {
  if (typeof globalThis.document === "undefined" || typeof globalThis.location === "undefined" || typeof globalThis.history === "undefined") {
    return null;
  }
  return globalThis;
}
function defineRoute(name, pattern, meta) {
  return {
    name,
    pattern,
    meta
  };
}
function setRoutes(definitions) {
  routes.value = definitions;
}
function matchPath(path, definitions) {
  const pathSegments = splitPath(path);
  for (const definition of definitions) {
    const patternSegments = splitPath(definition.pattern);
    if (patternSegments.length !== pathSegments.length) continue;
    const params = {};
    let matches = true;
    for (let i9 = 0; i9 < patternSegments.length; i9 += 1) {
      const patternSegment = patternSegments[i9];
      const pathSegment = pathSegments[i9];
      if (patternSegment.startsWith(":")) {
        params[patternSegment.slice(1)] = decodeURIComponent(pathSegment);
        continue;
      }
      if (patternSegment !== pathSegment) {
        matches = false;
        break;
      }
    }
    if (matches) {
      return {
        name: definition.name,
        pattern: definition.pattern,
        params,
        meta: definition.meta
      };
    }
  }
  return null;
}
var currentRoute = b(() => matchPath(pathname.value, routes.value));
function updatePathFromLocation(scope) {
  pathname.value = scope.location.pathname;
}
function canInterceptClick(scope, event, selector) {
  if (event.defaultPrevented) return false;
  if (event.button !== 0) return false;
  if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) {
    return false;
  }
  const target = event.target;
  if (!(target instanceof Element)) return false;
  const anchor = target.closest(selector);
  if (!(anchor instanceof HTMLAnchorElement)) return false;
  if (anchor.target && anchor.target !== "_self") return false;
  if (anchor.hasAttribute("download")) return false;
  const href = anchor.getAttribute("href");
  if (!href || href.startsWith("#")) return false;
  const nextUrl = new URL(href, scope.location.href);
  if (nextUrl.origin !== scope.location.origin) return false;
  navigate(nextUrl.pathname, {
    state: scope.history.state
  });
  event.preventDefault();
  return true;
}
function navigate(to, options = {}) {
  const scope = getBrowserWindow();
  if (!scope) return;
  const nextUrl = new URL(to, scope.location.href);
  const nextPath = nextUrl.pathname;
  const method = options.replace ? "replaceState" : "pushState";
  scope.history[method](options.state ?? null, "", nextPath);
  pathname.value = nextPath;
}
function startRouter(options = {}) {
  const scope = getBrowserWindow();
  if (!scope) return () => {
  };
  if (started && stopRouter) return stopRouter;
  const selector = options.linkSelector ?? "a[data-nav]";
  const interceptLinks = options.interceptLinks ?? true;
  const onPopState = () => updatePathFromLocation(scope);
  const onClick = (event) => {
    if (!interceptLinks) return;
    canInterceptClick(scope, event, selector);
  };
  scope.addEventListener("popstate", onPopState);
  document.addEventListener("click", onClick);
  updatePathFromLocation(scope);
  started = true;
  stopRouter = () => {
    scope.removeEventListener("popstate", onPopState);
    document.removeEventListener("click", onClick);
    started = false;
    stopRouter = void 0;
  };
  return stopRouter;
}

// deno:https://jsr.io/@collapse-theory/extinguish/0.1.4/src/transition.ts
var pending = c(false);

// ../../../../../../home/majora/.cache/deno/npm/registry.npmjs.org/lit-html/3.3.2/directive-helpers.js
var { I: t3 } = j;

// ../../../../../../home/majora/.cache/deno/npm/registry.npmjs.org/@lit/reactive-element/2.1.2/css-tag.js
var t5 = globalThis;
var e4 = t5.ShadowRoot && (void 0 === t5.ShadyCSS || t5.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype;
var s3 = Symbol();
var o3 = /* @__PURE__ */ new WeakMap();
var n3 = class {
  constructor(t8, e9, o9) {
    if (this._$cssResult$ = true, o9 !== s3) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = t8, this.t = e9;
  }
  get styleSheet() {
    let t8 = this.o;
    const s7 = this.t;
    if (e4 && void 0 === t8) {
      const e9 = void 0 !== s7 && 1 === s7.length;
      e9 && (t8 = o3.get(s7)), void 0 === t8 && ((this.o = t8 = new CSSStyleSheet()).replaceSync(this.cssText), e9 && o3.set(s7, t8));
    }
    return t8;
  }
  toString() {
    return this.cssText;
  }
};
var r4 = (t8) => new n3("string" == typeof t8 ? t8 : t8 + "", void 0, s3);
var i4 = (t8, ...e9) => {
  const o9 = 1 === t8.length ? t8[0] : e9.reduce((e10, s7, o10) => e10 + ((t9) => {
    if (true === t9._$cssResult$) return t9.cssText;
    if ("number" == typeof t9) return t9;
    throw Error("Value passed to 'css' function must be a 'css' function result: " + t9 + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
  })(s7) + t8[o10 + 1], t8[0]);
  return new n3(o9, t8, s3);
};
var S3 = (s7, o9) => {
  if (e4) s7.adoptedStyleSheets = o9.map((t8) => t8 instanceof CSSStyleSheet ? t8 : t8.styleSheet);
  else for (const e9 of o9) {
    const o10 = document.createElement("style"), n7 = t5.litNonce;
    void 0 !== n7 && o10.setAttribute("nonce", n7), o10.textContent = e9.cssText, s7.appendChild(o10);
  }
};
var c3 = e4 ? (t8) => t8 : (t8) => t8 instanceof CSSStyleSheet ? ((t9) => {
  let e9 = "";
  for (const s7 of t9.cssRules) e9 += s7.cssText;
  return r4(e9);
})(t8) : t8;

// ../../../../../../home/majora/.cache/deno/npm/registry.npmjs.org/@lit/reactive-element/2.1.2/reactive-element.js
var { is: i5, defineProperty: e5, getOwnPropertyDescriptor: h3, getOwnPropertyNames: r5, getOwnPropertySymbols: o4, getPrototypeOf: n4 } = Object;
var a3 = globalThis;
var c4 = a3.trustedTypes;
var l3 = c4 ? c4.emptyScript : "";
var p3 = a3.reactiveElementPolyfillSupport;
var d3 = (t8, s7) => t8;
var u3 = {
  toAttribute(t8, s7) {
    switch (s7) {
      case Boolean:
        t8 = t8 ? l3 : null;
        break;
      case Object:
      case Array:
        t8 = null == t8 ? t8 : JSON.stringify(t8);
    }
    return t8;
  },
  fromAttribute(t8, s7) {
    let i9 = t8;
    switch (s7) {
      case Boolean:
        i9 = null !== t8;
        break;
      case Number:
        i9 = null === t8 ? null : Number(t8);
        break;
      case Object:
      case Array:
        try {
          i9 = JSON.parse(t8);
        } catch (t9) {
          i9 = null;
        }
    }
    return i9;
  }
};
var f4 = (t8, s7) => !i5(t8, s7);
var b3 = {
  attribute: true,
  type: String,
  converter: u3,
  reflect: false,
  useDefault: false,
  hasChanged: f4
};
Symbol.metadata ??= Symbol("metadata"), a3.litPropertyMetadata ??= /* @__PURE__ */ new WeakMap();
var y3 = class extends HTMLElement {
  static addInitializer(t8) {
    this._$Ei(), (this.l ??= []).push(t8);
  }
  static get observedAttributes() {
    return this.finalize(), this._$Eh && [
      ...this._$Eh.keys()
    ];
  }
  static createProperty(t8, s7 = b3) {
    if (s7.state && (s7.attribute = false), this._$Ei(), this.prototype.hasOwnProperty(t8) && ((s7 = Object.create(s7)).wrapped = true), this.elementProperties.set(t8, s7), !s7.noAccessor) {
      const i9 = Symbol(), h6 = this.getPropertyDescriptor(t8, i9, s7);
      void 0 !== h6 && e5(this.prototype, t8, h6);
    }
  }
  static getPropertyDescriptor(t8, s7, i9) {
    const { get: e9, set: r10 } = h3(this.prototype, t8) ?? {
      get() {
        return this[s7];
      },
      set(t9) {
        this[s7] = t9;
      }
    };
    return {
      get: e9,
      set(s8) {
        const h6 = e9?.call(this);
        r10?.call(this, s8), this.requestUpdate(t8, h6, i9);
      },
      configurable: true,
      enumerable: true
    };
  }
  static getPropertyOptions(t8) {
    return this.elementProperties.get(t8) ?? b3;
  }
  static _$Ei() {
    if (this.hasOwnProperty(d3("elementProperties"))) return;
    const t8 = n4(this);
    t8.finalize(), void 0 !== t8.l && (this.l = [
      ...t8.l
    ]), this.elementProperties = new Map(t8.elementProperties);
  }
  static finalize() {
    if (this.hasOwnProperty(d3("finalized"))) return;
    if (this.finalized = true, this._$Ei(), this.hasOwnProperty(d3("properties"))) {
      const t9 = this.properties, s7 = [
        ...r5(t9),
        ...o4(t9)
      ];
      for (const i9 of s7) this.createProperty(i9, t9[i9]);
    }
    const t8 = this[Symbol.metadata];
    if (null !== t8) {
      const s7 = litPropertyMetadata.get(t8);
      if (void 0 !== s7) for (const [t9, i9] of s7) this.elementProperties.set(t9, i9);
    }
    this._$Eh = /* @__PURE__ */ new Map();
    for (const [t9, s7] of this.elementProperties) {
      const i9 = this._$Eu(t9, s7);
      void 0 !== i9 && this._$Eh.set(i9, t9);
    }
    this.elementStyles = this.finalizeStyles(this.styles);
  }
  static finalizeStyles(s7) {
    const i9 = [];
    if (Array.isArray(s7)) {
      const e9 = new Set(s7.flat(1 / 0).reverse());
      for (const s8 of e9) i9.unshift(c3(s8));
    } else void 0 !== s7 && i9.push(c3(s7));
    return i9;
  }
  static _$Eu(t8, s7) {
    const i9 = s7.attribute;
    return false === i9 ? void 0 : "string" == typeof i9 ? i9 : "string" == typeof t8 ? t8.toLowerCase() : void 0;
  }
  constructor() {
    super(), this._$Ep = void 0, this.isUpdatePending = false, this.hasUpdated = false, this._$Em = null, this._$Ev();
  }
  _$Ev() {
    this._$ES = new Promise((t8) => this.enableUpdating = t8), this._$AL = /* @__PURE__ */ new Map(), this._$E_(), this.requestUpdate(), this.constructor.l?.forEach((t8) => t8(this));
  }
  addController(t8) {
    (this._$EO ??= /* @__PURE__ */ new Set()).add(t8), void 0 !== this.renderRoot && this.isConnected && t8.hostConnected?.();
  }
  removeController(t8) {
    this._$EO?.delete(t8);
  }
  _$E_() {
    const t8 = /* @__PURE__ */ new Map(), s7 = this.constructor.elementProperties;
    for (const i9 of s7.keys()) this.hasOwnProperty(i9) && (t8.set(i9, this[i9]), delete this[i9]);
    t8.size > 0 && (this._$Ep = t8);
  }
  createRenderRoot() {
    const t8 = this.shadowRoot ?? this.attachShadow(this.constructor.shadowRootOptions);
    return S3(t8, this.constructor.elementStyles), t8;
  }
  connectedCallback() {
    this.renderRoot ??= this.createRenderRoot(), this.enableUpdating(true), this._$EO?.forEach((t8) => t8.hostConnected?.());
  }
  enableUpdating(t8) {
  }
  disconnectedCallback() {
    this._$EO?.forEach((t8) => t8.hostDisconnected?.());
  }
  attributeChangedCallback(t8, s7, i9) {
    this._$AK(t8, i9);
  }
  _$ET(t8, s7) {
    const i9 = this.constructor.elementProperties.get(t8), e9 = this.constructor._$Eu(t8, i9);
    if (void 0 !== e9 && true === i9.reflect) {
      const h6 = (void 0 !== i9.converter?.toAttribute ? i9.converter : u3).toAttribute(s7, i9.type);
      this._$Em = t8, null == h6 ? this.removeAttribute(e9) : this.setAttribute(e9, h6), this._$Em = null;
    }
  }
  _$AK(t8, s7) {
    const i9 = this.constructor, e9 = i9._$Eh.get(t8);
    if (void 0 !== e9 && this._$Em !== e9) {
      const t9 = i9.getPropertyOptions(e9), h6 = "function" == typeof t9.converter ? {
        fromAttribute: t9.converter
      } : void 0 !== t9.converter?.fromAttribute ? t9.converter : u3;
      this._$Em = e9;
      const r10 = h6.fromAttribute(s7, t9.type);
      this[e9] = r10 ?? this._$Ej?.get(e9) ?? r10, this._$Em = null;
    }
  }
  requestUpdate(t8, s7, i9, e9 = false, h6) {
    if (void 0 !== t8) {
      const r10 = this.constructor;
      if (false === e9 && (h6 = this[t8]), i9 ??= r10.getPropertyOptions(t8), !((i9.hasChanged ?? f4)(h6, s7) || i9.useDefault && i9.reflect && h6 === this._$Ej?.get(t8) && !this.hasAttribute(r10._$Eu(t8, i9)))) return;
      this.C(t8, s7, i9);
    }
    false === this.isUpdatePending && (this._$ES = this._$EP());
  }
  C(t8, s7, { useDefault: i9, reflect: e9, wrapped: h6 }, r10) {
    i9 && !(this._$Ej ??= /* @__PURE__ */ new Map()).has(t8) && (this._$Ej.set(t8, r10 ?? s7 ?? this[t8]), true !== h6 || void 0 !== r10) || (this._$AL.has(t8) || (this.hasUpdated || i9 || (s7 = void 0), this._$AL.set(t8, s7)), true === e9 && this._$Em !== t8 && (this._$Eq ??= /* @__PURE__ */ new Set()).add(t8));
  }
  async _$EP() {
    this.isUpdatePending = true;
    try {
      await this._$ES;
    } catch (t9) {
      Promise.reject(t9);
    }
    const t8 = this.scheduleUpdate();
    return null != t8 && await t8, !this.isUpdatePending;
  }
  scheduleUpdate() {
    return this.performUpdate();
  }
  performUpdate() {
    if (!this.isUpdatePending) return;
    if (!this.hasUpdated) {
      if (this.renderRoot ??= this.createRenderRoot(), this._$Ep) {
        for (const [t10, s8] of this._$Ep) this[t10] = s8;
        this._$Ep = void 0;
      }
      const t9 = this.constructor.elementProperties;
      if (t9.size > 0) for (const [s8, i9] of t9) {
        const { wrapped: t10 } = i9, e9 = this[s8];
        true !== t10 || this._$AL.has(s8) || void 0 === e9 || this.C(s8, void 0, i9, e9);
      }
    }
    let t8 = false;
    const s7 = this._$AL;
    try {
      t8 = this.shouldUpdate(s7), t8 ? (this.willUpdate(s7), this._$EO?.forEach((t9) => t9.hostUpdate?.()), this.update(s7)) : this._$EM();
    } catch (s8) {
      throw t8 = false, this._$EM(), s8;
    }
    t8 && this._$AE(s7);
  }
  willUpdate(t8) {
  }
  _$AE(t8) {
    this._$EO?.forEach((t9) => t9.hostUpdated?.()), this.hasUpdated || (this.hasUpdated = true, this.firstUpdated(t8)), this.updated(t8);
  }
  _$EM() {
    this._$AL = /* @__PURE__ */ new Map(), this.isUpdatePending = false;
  }
  get updateComplete() {
    return this.getUpdateComplete();
  }
  getUpdateComplete() {
    return this._$ES;
  }
  shouldUpdate(t8) {
    return true;
  }
  update(t8) {
    this._$Eq &&= this._$Eq.forEach((t9) => this._$ET(t9, this[t9])), this._$EM();
  }
  updated(t8) {
  }
  firstUpdated(t8) {
  }
};
y3.elementStyles = [], y3.shadowRootOptions = {
  mode: "open"
}, y3[d3("elementProperties")] = /* @__PURE__ */ new Map(), y3[d3("finalized")] = /* @__PURE__ */ new Map(), p3?.({
  ReactiveElement: y3
}), (a3.reactiveElementVersions ??= []).push("2.1.2");

// ../../../../../../home/majora/.cache/deno/npm/registry.npmjs.org/lit-element/4.2.2/lit-element.js
var s4 = globalThis;
var i6 = class extends y3 {
  constructor() {
    super(...arguments), this.renderOptions = {
      host: this
    }, this._$Do = void 0;
  }
  createRenderRoot() {
    const t8 = super.createRenderRoot();
    return this.renderOptions.renderBefore ??= t8.firstChild, t8;
  }
  update(t8) {
    const r10 = this.render();
    this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(t8), this._$Do = D(r10, this.renderRoot, this.renderOptions);
  }
  connectedCallback() {
    super.connectedCallback(), this._$Do?.setConnected(true);
  }
  disconnectedCallback() {
    super.disconnectedCallback(), this._$Do?.setConnected(false);
  }
  render() {
    return E;
  }
};
i6._$litElement$ = true, i6["finalized"] = true, s4.litElementHydrateSupport?.({
  LitElement: i6
});
var o5 = s4.litElementPolyfillSupport;
o5?.({
  LitElement: i6
});
(s4.litElementVersions ??= []).push("4.2.2");

// src/utils/define.ts
function defineCustomElement(tagName, constructor) {
  if (!customElements.get(tagName)) {
    customElements.define(tagName, constructor);
  }
}

// src/components/lv-app.ts
var LvApp = class extends i6 {
  static styles = i4`
    :host {
      display: block;
      min-height: 100vh;
      background: var(--lv-color-bg, #f9fafb);
      color: var(--lv-color-text, #111827);
      font-family: var(--lv-font-sans, Arial, Helvetica, sans-serif);
    }

    .shell {
      min-height: 100vh;
      display: grid;
      grid-template-rows: auto 1fr auto;
    }
  `;
  render() {
    return b2`
      <div class="shell">
        <slot name="header"></slot>
        <slot></slot>
        <slot name="footer"></slot>
      </div>
    `;
  }
};
function defineLvApp() {
  defineCustomElement("lv-app", LvApp);
}

// ../../../../../../home/majora/.cache/deno/npm/registry.npmjs.org/@lit/reactive-element/2.1.2/decorators/property.js
var o6 = {
  attribute: true,
  type: String,
  converter: u3,
  reflect: false,
  hasChanged: f4
};
var r6 = (t8 = o6, e9, r10) => {
  const { kind: n7, metadata: i9 } = r10;
  let s7 = globalThis.litPropertyMetadata.get(i9);
  if (void 0 === s7 && globalThis.litPropertyMetadata.set(i9, s7 = /* @__PURE__ */ new Map()), "setter" === n7 && ((t8 = Object.create(t8)).wrapped = true), s7.set(r10.name, t8), "accessor" === n7) {
    const { name: o9 } = r10;
    return {
      set(r11) {
        const n8 = e9.get.call(this);
        e9.set.call(this, r11), this.requestUpdate(o9, n8, t8, true, r11);
      },
      init(e10) {
        return void 0 !== e10 && this.C(o9, void 0, t8, e10), e10;
      }
    };
  }
  if ("setter" === n7) {
    const { name: o9 } = r10;
    return function(r11) {
      const n8 = this[o9];
      e9.call(this, r11), this.requestUpdate(o9, n8, t8, true, r11);
    };
  }
  throw Error("Unsupported decorator location: " + n7);
};
function n5(t8) {
  return (e9, o9) => "object" == typeof o9 ? r6(t8, e9, o9) : ((t9, e10, o10) => {
    const r10 = e10.hasOwnProperty(o10);
    return e10.constructor.createProperty(o10, t9), r10 ? Object.getOwnPropertyDescriptor(e10, o10) : void 0;
  })(t8, e9, o9);
}

// ../../../../../../home/majora/.cache/deno/npm/registry.npmjs.org/@lit/reactive-element/2.1.2/decorators/state.js
function r7(r10) {
  return n5({
    ...r10,
    state: true,
    attribute: false
  });
}

// src/components/lv-admin-page.ts
function _ts_decorate(decorators, target, key, desc) {
  var c7 = arguments.length, r10 = c7 < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d6;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r10 = Reflect.decorate(decorators, target, key, desc);
  else for (var i9 = decorators.length - 1; i9 >= 0; i9--) if (d6 = decorators[i9]) r10 = (c7 < 3 ? d6(r10) : c7 > 3 ? d6(target, key, r10) : d6(target, key)) || r10;
  return c7 > 3 && r10 && Object.defineProperty(target, key, r10), r10;
}
var LvAdminPage = class extends i6 {
  heading = "";
  description = "";
  static styles = i4`
    :host {
      display: block;
      min-height: 100%;
      background: var(--lv-color-bg, #f9fafb);
    }

    .page {
      box-sizing: border-box;
      width: min(100%, 80rem);
      margin-inline: auto;
      padding: 1.5rem 1rem 2rem;
    }

    .header {
      position: sticky;
      top: 0;
      z-index: 10;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 1rem;
      margin: -1.5rem -1rem 1.5rem;
      padding: 1rem;
      background: var(--lv-color-bg, #f9fafb);
      border-bottom: 1px solid var(--lv-color-border, #e5e7eb);
    }

    h1 {
      margin: 0;
      color: var(--lv-color-text, #111827);
      font-size: clamp(1.5rem, 1.35rem + 0.55vw, 1.875rem);
      font-weight: 800;
      line-height: 1.15;
    }

    p {
      margin: 0.25rem 0 0;
      color: var(--lv-color-muted, #6b7280);
      font-size: 0.875rem;
      line-height: 1.4;
    }

    .actions {
      display: inline-flex;
      align-items: center;
      justify-content: flex-end;
      gap: 0.5rem;
      flex-shrink: 0;
    }

    @media (max-width: 640px) {
      .page {
        padding-top: 1.25rem;
      }

      .header {
        position: static;
        display: grid;
        justify-content: stretch;
      }

      .actions {
        justify-content: flex-start;
      }
    }
  `;
  render() {
    return b2`
      <main class="page">
        <div class="header">
          <div>
            <h1>${this.heading}</h1>
            <p>${this.description}</p>
          </div>
          <div class="actions"><slot name="actions"></slot></div>
        </div>
        <slot></slot>
      </main>
    `;
  }
};
_ts_decorate([
  n5({
    reflect: true
  })
], LvAdminPage.prototype, "heading", void 0);
_ts_decorate([
  n5({
    reflect: true
  })
], LvAdminPage.prototype, "description", void 0);
function defineLvAdminPage() {
  defineCustomElement("lv-admin-page", LvAdminPage);
}

// src/components/lv-avatar.ts
function _ts_decorate2(decorators, target, key, desc) {
  var c7 = arguments.length, r10 = c7 < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d6;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r10 = Reflect.decorate(decorators, target, key, desc);
  else for (var i9 = decorators.length - 1; i9 >= 0; i9--) if (d6 = decorators[i9]) r10 = (c7 < 3 ? d6(r10) : c7 > 3 ? d6(target, key, r10) : d6(target, key)) || r10;
  return c7 > 3 && r10 && Object.defineProperty(target, key, r10), r10;
}
var LvAvatar = class extends i6 {
  initials = "";
  size = "md";
  static styles = i4`
    :host {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      border-radius: 999px;
      overflow: hidden;
      flex-shrink: 0;
      line-height: 1;
      color: var(--lv-color-avatar-text, #ffffff);
      background: linear-gradient(145deg, var(--lv-color-avatar-start, #e6c9b2), var(--lv-color-avatar-end, #7f614f));
      box-shadow: 0 1px 2px rgba(15, 23, 42, 0.22);
      font-weight: 800;
      user-select: none;
    }

    :host([size="sm"]) {
      width: 1.85rem;
      height: 1.85rem;
      font-size: 0.72rem;
    }

    :host([size="md"]) {
      width: 2.5rem;
      height: 2.5rem;
      font-size: 0.875rem;
    }

    :host([size="lg"]) {
      width: 3rem;
      height: 3rem;
      font-size: 1rem;
    }

    .label {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 100%;
      letter-spacing: 0;
      transform: translateY(0.02em);
    }
  `;
  render() {
    return b2`<span class="label">${this.initials}</span>`;
  }
};
_ts_decorate2([
  n5({
    reflect: true
  })
], LvAvatar.prototype, "initials", void 0);
_ts_decorate2([
  n5({
    reflect: true
  })
], LvAvatar.prototype, "size", void 0);
function defineLvAvatar() {
  defineCustomElement("lv-avatar", LvAvatar);
}

// src/components/lv-nav.ts
function _ts_decorate3(decorators, target, key, desc) {
  var c7 = arguments.length, r10 = c7 < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d6;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r10 = Reflect.decorate(decorators, target, key, desc);
  else for (var i9 = decorators.length - 1; i9 >= 0; i9--) if (d6 = decorators[i9]) r10 = (c7 < 3 ? d6(r10) : c7 > 3 ? d6(target, key, r10) : d6(target, key)) || r10;
  return c7 > 3 && r10 && Object.defineProperty(target, key, r10), r10;
}
var LvNav = class extends i6 {
  links = [];
  title = "";
  mobileOpen = false;
  static styles = i4`
    :host {
      display: block;
      position: sticky;
      top: 0;
      z-index: 40;
      background: var(--lv-color-nav-bg, var(--lv-color-surface, #fff));
      border-bottom: 1px solid var(--lv-color-border, #e5e7eb);
      box-shadow: var(--lv-shadow-sm, 0 1px 2px rgba(15, 23, 42, 0.05));
    }

    @keyframes nav-mobile-in {
      from {
        opacity: 0;
        transform: translateY(-4px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    .container {
      box-sizing: border-box;
      width: min(100%, 80rem);
      margin-inline: auto;
      padding: 0.8rem 1rem;
      display: grid;
      gap: 0.6rem;
      overflow: hidden;
    }

    *,
    *::before,
    *::after {
      box-sizing: border-box;
    }

    .top {
      display: grid;
      grid-template-columns: minmax(0, 1fr) auto auto;
      align-items: center;
      gap: 0.5rem;
      min-width: 0;
    }

    .brand {
      display: inline-flex;
      align-items: center;
      gap: 0.55rem;
      min-width: 0;
      overflow: hidden;
      color: var(--lv-color-text, #111827);
      font-size: 1.25rem;
      font-weight: 700;
      letter-spacing: normal;
      text-decoration: none;
    }

    .brand span {
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      max-width: 11.5rem;
    }

    nav {
      display: none;
      align-items: center;
      gap: 1.6rem;
    }

    a {
      text-decoration: none;
      color: var(--lv-color-nav-link, var(--lv-color-subtle-text, #374151));
      opacity: 1;
      font-size: 1rem;
      font-weight: 500;
      transition: color 160ms ease, opacity 160ms ease;
    }

    a:visited {
      color: var(--lv-color-nav-link, var(--lv-color-subtle-text, #374151));
    }

    a:hover {
      color: var(--lv-color-nav-link-hover, var(--lv-color-text, #111827));
    }

    a[data-active="true"] {
      color: var(--lv-color-nav-link-active, var(--lv-color-text, #1f2937));
      font-weight: 500;
    }

    .actions {
      display: none;
      align-items: center;
      gap: 0.85rem;
      flex-shrink: 0;
    }

    .mobile-actions-bar {
      display: inline-flex;
      align-items: center;
      justify-content: flex-end;
      gap: 0.35rem;
      flex-shrink: 0;
      min-width: 0;
    }

    .toggle {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 2.25rem;
      height: 2.25rem;
      flex: 0 0 2.25rem;
      border: 0;
      border-radius: 0.45rem;
      background: transparent;
      color: var(--lv-color-subtle-text, #4b5563);
      cursor: pointer;
      padding: 0;
      transition: background-color 160ms ease, color 160ms ease, transform 120ms ease;
    }

    .toggle:hover {
      background: var(--lv-color-surface-alt, #f3f4f6);
      color: var(--lv-color-text, #111827);
      transform: translateY(-1px);
    }

    .toggle svg {
      width: 1.2rem;
      height: 1.2rem;
      stroke: currentColor;
      fill: none;
      stroke-width: 2;
      stroke-linecap: round;
      stroke-linejoin: round;
    }

    .mobile {
      display: grid;
      gap: 0.2rem;
      border-top: 1px solid var(--lv-color-border, #e5e7eb);
      padding-top: 0.7rem;
      animation: nav-mobile-in 150ms ease-out both;
      width: 100%;
      min-width: 0;
    }

    .mobile a {
      display: block;
      padding: 0.58rem 0.75rem;
      border-radius: 0.45rem;
      font-size: 1rem;
    }

    .mobile a:hover,
    .mobile a[data-active="true"] {
      background: var(--lv-color-surface-alt, #f3f4f6);
      color: var(--lv-color-text, #111827);
    }

    @media (min-width: 768px) {
      .container {
        display: grid;
        grid-template-columns: auto 1fr auto;
        align-items: center;
        padding-top: 0.95rem;
        padding-bottom: 0.95rem;
        column-gap: 1rem;
      }

      .top {
        display: contents;
      }

      .toggle,
      .mobile {
        display: none;
      }

      nav,
      .actions {
        display: inline-flex;
      }

      .mobile-actions-bar {
        display: none;
      }

      .brand {
        justify-self: start;
      }

      nav {
        justify-self: center;
      }

      .actions {
        justify-self: end;
      }
    }
  `;
  toggleMobile() {
    this.mobileOpen = !this.mobileOpen;
  }
  renderLink(link) {
    return b2`
      <a href="${link.href}" data-active="${String(Boolean(link.active))}">${link.label}</a>
    `;
  }
  renderMenuIcon() {
    if (this.mobileOpen) {
      return b2`
        <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
          <path d="M6 18L18 6M6 6l12 12"></path>
        </svg>
      `;
    }
    return b2`
      <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <path d="M4 6h16M4 12h16M4 18h16"></path>
      </svg>
    `;
  }
  render() {
    return b2`
      <div class="container">
        <div class="top">
          <a class="brand" href="/">
            <slot name="brand-mark"></slot>
            <span>${this.title}</span>
          </a>

          <nav>${this.links.map((link) => this.renderLink(link))}</nav>

          <div class="actions"><slot name="actions"></slot></div>

          <div class="mobile-actions-bar"><slot name="mobile-actions"></slot></div>

          <button class="toggle" @click="${this.toggleMobile}" aria-label="Toggle navigation">
            ${this.renderMenuIcon()}
          </button>
        </div>

        ${this.mobileOpen ? b2`
            <div class="mobile">${this.links.map((link) => this.renderLink(link))}<slot name="mobile-menu-actions"></slot></div>
          ` : null}
      </div>
    `;
  }
};
_ts_decorate3([
  n5({
    attribute: false
  })
], LvNav.prototype, "links", void 0);
_ts_decorate3([
  n5({
    reflect: true
  })
], LvNav.prototype, "title", void 0);
_ts_decorate3([
  r7()
], LvNav.prototype, "mobileOpen", void 0);
function defineLvNav() {
  defineCustomElement("lv-nav", LvNav);
}

// src/components/lv-button.ts
function _ts_decorate4(decorators, target, key, desc) {
  var c7 = arguments.length, r10 = c7 < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d6;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r10 = Reflect.decorate(decorators, target, key, desc);
  else for (var i9 = decorators.length - 1; i9 >= 0; i9--) if (d6 = decorators[i9]) r10 = (c7 < 3 ? d6(r10) : c7 > 3 ? d6(target, key, r10) : d6(target, key)) || r10;
  return c7 > 3 && r10 && Object.defineProperty(target, key, r10), r10;
}
var LvButton = class extends i6 {
  variant = "primary";
  size = "md";
  loading = false;
  disabled = false;
  static styles = i4`
    :host {
      display: inline-block;
    }

    button {
      border: 1px solid transparent;
      border-radius: 0.75rem;
      font-weight: 500;
      cursor: pointer;
      transition: background-color 140ms ease, color 140ms ease, border-color 140ms ease,
        box-shadow 140ms ease, transform 120ms ease;
      font-family: inherit;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 0.5rem;
      width: auto;
      white-space: nowrap;
      outline: none;
      line-height: 1;
      min-height: 2.5rem;
      padding: 0 1rem;
    }

    :host([size="sm"]) button {
      font-size: 0.875rem;
      min-height: 2rem;
      padding: 0 0.75rem;
    }

    :host([size="md"]) button {
      font-size: 1rem;
      min-height: 2.5rem;
      padding: 0 1rem;
    }

    :host([size="lg"]) button {
      font-size: 1.125rem;
      min-height: 3rem;
      padding: 0 1.25rem;
    }

    :host([size="xl"]) button {
      font-size: 1.18rem;
      min-height: 4rem;
      padding: 0 2.2rem;
      border-radius: 0.9rem;
    }

    :host([variant="primary"]) button {
      background: var(--lv-color-primary, #2563eb);
      color: var(--lv-color-on-primary, #fff);
      box-shadow: 0 7px 16px var(--lv-color-primary-shadow, rgba(37, 99, 235, 0.24));
    }

    :host([variant="primary"]) button:hover {
      background: var(--lv-color-primary-hover, #1d4ed8);
    }

    :host([variant="secondary"]) button {
      background: var(--lv-color-border, #e5e7eb);
      color: var(--lv-color-text, #111827);
      border-color: transparent;
    }

    :host([variant="secondary"]) button:hover {
      background: var(--lv-color-border-strong, #d1d5db);
    }

    :host([variant="neutral"]) button {
      background: var(--lv-color-surface, #ffffff);
      color: var(--lv-color-text, #111827);
      border-color: var(--lv-color-border-strong, #d1d5db);
    }

    :host([variant="neutral"]) button:hover {
      background: var(--lv-color-surface-alt, #f9fafb);
    }

    :host([variant="outline"]) button {
      border-width: 2px;
      border-color: var(--lv-color-primary, #2563eb);
      color: var(--lv-color-primary, #2563eb);
      background: var(--lv-color-surface, #fff);
    }

    :host([variant="outline"]) button:hover {
      background: var(--lv-color-primary-soft, #eff6ff);
    }

    :host([variant="ghost"]) button {
      background: transparent;
      color: var(--lv-color-subtle-text, #374151);
    }

    :host([variant="ghost"]) button:hover {
      background: var(--lv-color-surface-alt, #f3f4f6);
    }

    :host([variant="danger"]) button {
      background: var(--lv-color-danger, #dc2626);
      color: var(--lv-color-on-primary, #fff);
    }

    :host([variant="danger"]) button:hover {
      background: var(--lv-color-danger-hover, #b91c1c);
    }

    button:focus-visible {
      box-shadow: 0 0 0 2px var(--lv-color-focus-outline, #fff),
        0 0 0 4px var(--lv-color-focus-ring, rgba(59, 130, 246, 0.55));
    }

    button:hover:not(:disabled) {
      transform: translateY(-1px);
    }

    button:active:not(:disabled) {
      transform: translateY(0);
    }

    button:disabled {
      opacity: 0.6;
      pointer-events: none;
    }

    .spinner {
      width: 14px;
      height: 14px;
      border: 2px solid currentColor;
      border-right-color: transparent;
      border-radius: 999px;
      animation: spin 0.8s linear infinite;
    }

    @keyframes spin {
      to {
        transform: rotate(360deg);
      }
    }
  `;
  render() {
    return b2`
      <button ?disabled="${this.disabled || this.loading}">
        ${this.loading ? b2`
            <span class="spinner" aria-hidden="true"></span>
          ` : null}
        <slot></slot>
      </button>
    `;
  }
};
_ts_decorate4([
  n5({
    reflect: true
  })
], LvButton.prototype, "variant", void 0);
_ts_decorate4([
  n5({
    reflect: true
  })
], LvButton.prototype, "size", void 0);
_ts_decorate4([
  n5({
    type: Boolean,
    reflect: true
  })
], LvButton.prototype, "loading", void 0);
_ts_decorate4([
  n5({
    type: Boolean,
    reflect: true
  })
], LvButton.prototype, "disabled", void 0);
function defineLvButton() {
  defineCustomElement("lv-button", LvButton);
}

// src/components/lv-input.ts
function _ts_decorate5(decorators, target, key, desc) {
  var c7 = arguments.length, r10 = c7 < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d6;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r10 = Reflect.decorate(decorators, target, key, desc);
  else for (var i9 = decorators.length - 1; i9 >= 0; i9--) if (d6 = decorators[i9]) r10 = (c7 < 3 ? d6(r10) : c7 > 3 ? d6(target, key, r10) : d6(target, key)) || r10;
  return c7 > 3 && r10 && Object.defineProperty(target, key, r10), r10;
}
var LvInput = class extends i6 {
  label = "";
  placeholder = "";
  value = "";
  type = "text";
  hint = "";
  static styles = i4`
    :host {
      display: block;
      width: 100%;
    }

    label {
      display: grid;
      gap: 0.35rem;
      color: var(--lv-color-text, #111827);
      font-size: 0.875rem;
      font-weight: 500;
    }

    input {
      width: 100%;
      border: 1px solid var(--lv-color-border, #e5e7eb);
      background: var(--lv-color-surface, #fff);
      color: var(--lv-color-text, #111827);
      border-radius: var(--lv-radius-md, 0.5rem);
      padding: 0.65rem 0.75rem;
      font-size: 0.875rem;
      outline: none;
      transition: border-color 140ms ease, box-shadow 140ms ease;
    }

    input:focus {
      border-color: var(--lv-color-primary, #2563eb);
      box-shadow: 0 0 0 3px var(--lv-color-focus-soft, rgba(37, 99, 235, 0.18));
    }

    .hint {
      margin: 0;
      font-size: 0.75rem;
      color: var(--lv-color-muted, #6b7280);
    }
  `;
  onInput(event) {
    const value = event.target.value;
    this.value = value;
    this.dispatchEvent(new CustomEvent("lv-change", {
      detail: {
        value
      },
      bubbles: true,
      composed: true
    }));
  }
  render() {
    return b2`
      <label>
        ${this.label ? b2`
            <span>${this.label}</span>
          ` : null}
        <input
          .value="${this.value}"
          type="${this.type}"
          placeholder="${this.placeholder}"
          @input="${this.onInput}"
        />
        ${this.hint ? b2`
            <p class="hint">${this.hint}</p>
          ` : null}
      </label>
    `;
  }
};
_ts_decorate5([
  n5({
    reflect: true
  })
], LvInput.prototype, "label", void 0);
_ts_decorate5([
  n5({
    reflect: true
  })
], LvInput.prototype, "placeholder", void 0);
_ts_decorate5([
  n5({
    reflect: true
  })
], LvInput.prototype, "value", void 0);
_ts_decorate5([
  n5({
    reflect: true
  })
], LvInput.prototype, "type", void 0);
_ts_decorate5([
  n5({
    reflect: true
  })
], LvInput.prototype, "hint", void 0);
function defineLvInput() {
  defineCustomElement("lv-input", LvInput);
}

// src/components/lv-input-group.ts
function _ts_decorate6(decorators, target, key, desc) {
  var c7 = arguments.length, r10 = c7 < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d6;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r10 = Reflect.decorate(decorators, target, key, desc);
  else for (var i9 = decorators.length - 1; i9 >= 0; i9--) if (d6 = decorators[i9]) r10 = (c7 < 3 ? d6(r10) : c7 > 3 ? d6(target, key, r10) : d6(target, key)) || r10;
  return c7 > 3 && r10 && Object.defineProperty(target, key, r10), r10;
}
var LvInputGroup = class extends i6 {
  label = "";
  compact = false;
  size = "md";
  static styles = i4`
    :host {
      display: block;
      width: 100%;
    }

    .label {
      display: block;
      margin: 0 0 0.35rem;
      color: var(--lv-color-text, #111827);
      font-size: 0.875rem;
      font-weight: 500;
      line-height: 1.2;
    }

    .group {
      width: 100%;
      min-height: 2.5rem;
      display: flex;
      align-items: stretch;
      gap: 0;
      border: 1px solid var(--lv-color-border-strong, #d1d5db);
      border-radius: 0.5rem;
      background: var(--lv-color-surface, #fff);
      overflow: clip;
      transition: border-color 140ms ease, box-shadow 140ms ease;
    }

    :host([compact]) .group {
      min-height: 2.25rem;
      border-radius: 0.5rem;
    }

    :host([size="lg"]) .group {
      min-height: 4.25rem;
      border-radius: 0.75rem;
    }

    .prefix,
    .suffix {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      color: var(--lv-color-muted, #6b7280);
      flex: 0 0 auto;
    }

    .prefix {
      padding: 0 0.5rem 0 0.75rem;
    }

    .field {
      min-width: 0;
      flex: 1 1 auto;
      display: flex;
      align-items: stretch;
    }

    ::slotted(input) {
      width: 100%;
      height: 100%;
      border: 0;
      outline: 0;
      background: transparent;
      color: var(--lv-color-text, #111827);
      font-size: 0.875rem;
      line-height: 1.2;
      padding: 0 0.75rem;
      margin: 0;
      box-sizing: border-box;
      min-width: 0;
    }

    :host([compact]) ::slotted(input) {
      height: 100%;
      font-size: 0.84rem;
      padding: 0 0.7rem;
    }

    :host([size="lg"]) ::slotted(input) {
      font-size: 1.15rem;
      padding: 0 1rem;
    }

    ::slotted(*[slot="suffix"]) {
      height: calc(100% - 0.375rem);
      display: inline-flex;
      align-items: center;
      justify-content: center;
      margin: 0 0.1875rem 0 0;
      box-sizing: border-box;
      transition: transform 120ms ease, box-shadow 140ms ease;
    }

    :host([compact]) ::slotted(*[slot="suffix"]) {
      height: calc(100% - 0.25rem);
      margin-right: 0.125rem;
    }

    .group:focus-within {
      border-color: var(--lv-color-primary, #3b82f6);
      box-shadow: 0 0 0 3px var(--lv-color-focus-soft, rgba(59, 130, 246, 0.16));
    }

    ::slotted(*[slot="suffix"]:hover) {
      transform: translateY(-1px);
    }
  `;
  render() {
    return b2`
      ${this.label ? b2`<label class="label">${this.label}</label>` : null}
      <div class="group">
        <span class="prefix"><slot name="prefix"></slot></span>
        <div class="field"><slot></slot></div>
        <span class="suffix"><slot name="suffix"></slot></span>
      </div>
    `;
  }
};
_ts_decorate6([
  n5({
    reflect: true
  })
], LvInputGroup.prototype, "label", void 0);
_ts_decorate6([
  n5({
    reflect: true
  })
], LvInputGroup.prototype, "compact", void 0);
_ts_decorate6([
  n5({
    reflect: true
  })
], LvInputGroup.prototype, "size", void 0);
function defineLvInputGroup() {
  defineCustomElement("lv-input-group", LvInputGroup);
}

// src/components/lv-surface.ts
function _ts_decorate7(decorators, target, key, desc) {
  var c7 = arguments.length, r10 = c7 < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d6;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r10 = Reflect.decorate(decorators, target, key, desc);
  else for (var i9 = decorators.length - 1; i9 >= 0; i9--) if (d6 = decorators[i9]) r10 = (c7 < 3 ? d6(r10) : c7 > 3 ? d6(target, key, r10) : d6(target, key)) || r10;
  return c7 > 3 && r10 && Object.defineProperty(target, key, r10), r10;
}
var LvSurface = class extends i6 {
  elevation = "flat";
  padding = "md";
  static styles = i4`
    :host {
      display: block;
      background: var(--lv-color-surface, #fff);
      border: 1px solid var(--lv-color-border, #e5e7eb);
      border-radius: var(--lv-radius-lg, 0.75rem);
    }

    :host([elevation="raised"]) {
      box-shadow: var(--lv-shadow-md, 0 8px 20px rgba(0, 0, 0, 0.09));
    }

    .content {
      padding: 0;
    }

    :host([padding="sm"]) .content {
      padding: var(--lv-spacing-3, 0.75rem);
    }

    :host([padding="md"]) .content {
      padding: var(--lv-spacing-4, 1rem);
    }

    :host([padding="lg"]) .content {
      padding: var(--lv-spacing-6, 1.5rem);
    }
  `;
  render() {
    return b2`
      <div class="content"><slot></slot></div>
    `;
  }
};
_ts_decorate7([
  n5({
    reflect: true
  })
], LvSurface.prototype, "elevation", void 0);
_ts_decorate7([
  n5({
    reflect: true
  })
], LvSurface.prototype, "padding", void 0);
function defineLvSurface() {
  defineCustomElement("lv-surface", LvSurface);
}

// src/components/lv-grid.ts
function _ts_decorate8(decorators, target, key, desc) {
  var c7 = arguments.length, r10 = c7 < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d6;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r10 = Reflect.decorate(decorators, target, key, desc);
  else for (var i9 = decorators.length - 1; i9 >= 0; i9--) if (d6 = decorators[i9]) r10 = (c7 < 3 ? d6(r10) : c7 > 3 ? d6(target, key, r10) : d6(target, key)) || r10;
  return c7 > 3 && r10 && Object.defineProperty(target, key, r10), r10;
}
var LvGrid = class extends i6 {
  cols = 4;
  gap = 16;
  static styles = i4`
    :host {
      display: block;
    }

    .grid {
      display: grid;
      grid-template-columns: repeat(1, minmax(0, 1fr));
      gap: var(--gap, 1rem);
    }

    @media (min-width: 640px) {
      .grid {
        grid-template-columns: repeat(2, minmax(0, 1fr));
      }
    }

    @media (min-width: 1024px) {
      .grid {
        grid-template-columns: repeat(var(--lg-cols, 4), minmax(0, 1fr));
      }
    }
  `;
  render() {
    const style = `--lg-cols:${Math.max(1, this.cols)};--gap:${Math.max(4, this.gap)}px;`;
    return b2`
      <div class="grid" style="${style}"><slot></slot></div>
    `;
  }
};
_ts_decorate8([
  n5({
    type: Number,
    reflect: true
  })
], LvGrid.prototype, "cols", void 0);
_ts_decorate8([
  n5({
    type: Number,
    reflect: true
  })
], LvGrid.prototype, "gap", void 0);
function defineLvGrid() {
  defineCustomElement("lv-grid", LvGrid);
}

// src/components/lv-card.ts
function _ts_decorate9(decorators, target, key, desc) {
  var c7 = arguments.length, r10 = c7 < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d6;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r10 = Reflect.decorate(decorators, target, key, desc);
  else for (var i9 = decorators.length - 1; i9 >= 0; i9--) if (d6 = decorators[i9]) r10 = (c7 < 3 ? d6(r10) : c7 > 3 ? d6(target, key, r10) : d6(target, key)) || r10;
  return c7 > 3 && r10 && Object.defineProperty(target, key, r10), r10;
}
var LvCard = class extends i6 {
  title = "";
  subtitle = "";
  compact = false;
  static styles = i4`
    :host {
      display: block;
      border: 1px solid var(--lv-color-border, #e5e7eb);
      background: var(--lv-color-surface, #fff);
      border-radius: 0.5rem;
      overflow: hidden;
      box-shadow: var(--lv-shadow-sm, 0 1px 2px rgba(15, 23, 42, 0.06));
    }

    .header {
      padding: 1rem 1rem 0.45rem;
      display: grid;
      gap: 0.25rem;
    }

    :host([compact]) .header {
      padding: 0.75rem 0.75rem 0.5rem;
    }

    .title {
      margin: 0;
      font-size: 1rem;
      font-weight: 600;
      color: var(--lv-color-text, #111827);
    }

    .subtitle {
      margin: 0;
      font-size: 0.875rem;
      color: var(--lv-color-subtle-text, #4b5563);
    }

    .body {
      padding: 0 1rem 1rem;
    }

    :host([compact]) .body {
      padding: 0 0.75rem 0.75rem;
    }
  `;
  render() {
    return b2`
      ${this.title || this.subtitle ? b2`
          <header class="header">
            ${this.title ? b2`
                <h3 class="title">${this.title}</h3>
              ` : null} ${this.subtitle ? b2`
                <p class="subtitle">${this.subtitle}</p>
              ` : null}
          </header>
        ` : null}
      <div class="body"><slot></slot></div>
    `;
  }
};
_ts_decorate9([
  n5({
    reflect: true
  })
], LvCard.prototype, "title", void 0);
_ts_decorate9([
  n5({
    reflect: true
  })
], LvCard.prototype, "subtitle", void 0);
_ts_decorate9([
  n5({
    type: Boolean,
    reflect: true
  })
], LvCard.prototype, "compact", void 0);
function defineLvCard() {
  defineCustomElement("lv-card", LvCard);
}

// src/components/lv-badge.ts
function _ts_decorate10(decorators, target, key, desc) {
  var c7 = arguments.length, r10 = c7 < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d6;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r10 = Reflect.decorate(decorators, target, key, desc);
  else for (var i9 = decorators.length - 1; i9 >= 0; i9--) if (d6 = decorators[i9]) r10 = (c7 < 3 ? d6(r10) : c7 > 3 ? d6(target, key, r10) : d6(target, key)) || r10;
  return c7 > 3 && r10 && Object.defineProperty(target, key, r10), r10;
}
var LvBadge = class extends i6 {
  tone = "default";
  static styles = i4`
    :host {
      display: inline-flex;
      align-items: center;
      padding: 0.2rem 0.5rem;
      border-radius: 999px;
      border: 1px solid transparent;
      font-size: 0.75rem;
      font-weight: 600;
      line-height: 1;
    }

    :host([tone="default"]) {
      color: var(--lv-color-subtle-text, #374151);
      background: var(--lv-color-surface-alt, #f3f4f6);
      border-color: var(--lv-color-border, #e5e7eb);
    }

    :host([tone="success"]) {
      color: var(--lv-color-status-success-text, #065f46);
      background: var(--lv-color-status-success-bg, #d1fae5);
      border-color: var(--lv-color-status-success-border, #a7f3d0);
    }

    :host([tone="warning"]) {
      color: var(--lv-color-status-warning-text, #92400e);
      background: var(--lv-color-status-warning-bg, #fef3c7);
      border-color: var(--lv-color-status-warning-border, #fde68a);
    }

    :host([tone="danger"]) {
      color: var(--lv-color-status-danger-text, #991b1b);
      background: var(--lv-color-status-danger-bg, #fee2e2);
      border-color: var(--lv-color-status-danger-border, #fecaca);
    }

    :host([tone="info"]) {
      color: var(--lv-color-status-info-text, #1e40af);
      background: var(--lv-color-status-info-bg, #dbeafe);
      border-color: var(--lv-color-status-info-border, #bfdbfe);
    }
  `;
  render() {
    return b2`
      <slot></slot>
    `;
  }
};
_ts_decorate10([
  n5({
    reflect: true
  })
], LvBadge.prototype, "tone", void 0);
function defineLvBadge() {
  defineCustomElement("lv-badge", LvBadge);
}

// src/components/lv-table.ts
var LvTable = class extends i6 {
  static styles = i4`
    :host {
      display: block;
      border-radius: 0.5rem;
      overflow: hidden;
      background: var(--lv-color-surface, #fff);
      box-shadow: var(--lv-shadow-md, 0 8px 20px rgb(15 23 42 / 0.09));
    }

    .wrap {
      overflow: auto;
    }

    ::slotted(table) {
      border-collapse: collapse;
      width: 100%;
      min-width: 640px;
      font-size: 0.875rem;
    }
  `;
  createRenderRoot() {
    return this;
  }
  render() {
    return b2`
      <style>
      lv-table table {
        border-collapse: collapse;
        width: 100%;
        min-width: 640px;
        font-size: 0.875rem;
      }

      lv-table thead {
        background: var(--lv-color-surface-alt, #f9fafb);
      }

      lv-table thead th {
        text-align: left;
        color: var(--lv-color-muted, #6b7280);
        font-size: 0.75rem;
        font-weight: 500;
        text-transform: uppercase;
        letter-spacing: 0.04em;
        padding: 0.75rem 1.5rem;
        border-bottom: 1px solid var(--lv-color-border, #e5e7eb);
        white-space: nowrap;
      }

      lv-table tbody td {
        padding: 1rem 1.5rem;
        border-bottom: 1px solid var(--lv-color-border, #e5e7eb);
        color: var(--lv-color-text, #111827);
        vertical-align: middle;
      }

      lv-table tbody tr:hover {
        background: var(--lv-color-surface-alt, #f9fafb);
      }

      lv-table tbody tr:last-child td {
        border-bottom: 0;
      }

      lv-table .text-right {
        text-align: right;
      }

      lv-table .muted {
        color: var(--lv-color-muted, #6b7280);
      }

      lv-table .mono {
        font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
        font-size: 0.75rem;
      }
      </style>
      <div class="wrap">
        <slot></slot>
      </div>
    `;
  }
};
function defineLvTable() {
  defineCustomElement("lv-table", LvTable);
}

// src/components/lv-list.ts
var LvList = class extends i6 {
  static styles = i4`
    :host {
      display: grid;
      gap: 0.75rem;
    }
  `;
  render() {
    return b2`<slot></slot>`;
  }
};
var LvListItem = class extends i6 {
  static styles = i4`
    :host {
      display: block;
      border: 1px solid var(--lv-color-border, #e5e7eb);
      border-radius: 0.75rem;
      background: var(--lv-color-surface, #fff);
      overflow: hidden;
      box-shadow: none;
    }

    .item {
      display: grid;
      grid-template-columns: minmax(0, 1fr);
      gap: 0;
    }

    .media {
      min-width: 0;
    }

    .body {
      min-width: 0;
      display: grid;
      gap: 0.55rem;
      padding: 1rem;
    }

    .head {
      display: grid;
      gap: 0.35rem;
      min-width: 0;
    }

    .title-row {
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
      gap: 0.75rem;
      min-width: 0;
    }

    .title {
      min-width: 0;
      color: var(--lv-color-text, #111827);
      font-size: 0.875rem;
      font-weight: 700;
      line-height: 1.25;
    }

    .meta {
      color: var(--lv-color-muted, #6b7280);
      font-size: 0.875rem;
      line-height: 1.35;
      min-width: 0;
    }

    .details {
      color: var(--lv-color-subtle-text, #374151);
      min-width: 0;
    }

    .actions {
      display: flex;
      align-items: center;
      justify-content: flex-end;
      gap: 0.45rem;
      flex-wrap: wrap;
    }

    ::slotted([slot="media"]) {
      display: inline-flex;
    }

    @media (max-width: 640px) {
      .item {
        grid-template-columns: minmax(0, 1fr);
      }

      .title-row {
        align-items: flex-start;
      }

      .actions {
        justify-content: flex-start;
      }
    }
  `;
  render() {
    return b2`
      <article class="item">
        <div class="media"><slot name="media"></slot></div>
        <div class="body">
          <div class="head">
            <div class="title-row">
              <div class="title"><slot name="title"></slot></div>
              <div class="actions"><slot name="actions"></slot></div>
            </div>
            <div class="meta"><slot name="meta"></slot></div>
          </div>
          <div class="details"><slot></slot></div>
        </div>
      </article>
    `;
  }
};
function defineLvList() {
  defineCustomElement("lv-list", LvList);
  defineCustomElement("lv-list-item", LvListItem);
}

// src/components/lv-toolbar.ts
var LvToolbar = class extends i6 {
  static styles = i4`
    :host {
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-wrap: wrap;
      gap: 0.75rem;
      padding: 0.75rem 1rem;
      background: var(--lv-color-surface, #fff);
      border: 1px solid var(--lv-color-border, #e5e7eb);
      border-radius: var(--lv-radius-lg, 0.75rem);
    }

    .group {
      display: inline-flex;
      align-items: center;
      flex-wrap: wrap;
      gap: 0.5rem;
    }
  `;
  render() {
    return b2`
      <div class="group"><slot name="start"></slot></div>
      <div class="group"><slot name="end"></slot></div>
    `;
  }
};
function defineLvToolbar() {
  defineCustomElement("lv-toolbar", LvToolbar);
}

// src/components/lv-section-toolbar.ts
function _ts_decorate11(decorators, target, key, desc) {
  var c7 = arguments.length, r10 = c7 < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d6;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r10 = Reflect.decorate(decorators, target, key, desc);
  else for (var i9 = decorators.length - 1; i9 >= 0; i9--) if (d6 = decorators[i9]) r10 = (c7 < 3 ? d6(r10) : c7 > 3 ? d6(target, key, r10) : d6(target, key)) || r10;
  return c7 > 3 && r10 && Object.defineProperty(target, key, r10), r10;
}
var COLUMN_MAP = {
  base: {
    1: 4,
    2: 3,
    3: 3,
    4: 2,
    5: 2,
    6: 2,
    7: 2,
    8: 2,
    9: 1
  },
  md: {
    1: 6,
    2: 5,
    3: 4,
    4: 4,
    5: 3,
    6: 3,
    7: 3,
    8: 2,
    9: 1
  },
  lg: {
    1: 8,
    2: 7,
    3: 6,
    4: 5,
    5: 4,
    6: 4,
    7: 3,
    8: 2,
    9: 1
  },
  xl: {
    1: 10,
    2: 9,
    3: 8,
    4: 7,
    5: 5,
    6: 4,
    7: 3,
    8: 2,
    9: 1
  }
};
var LvSectionToolbar = class extends i6 {
  hideAvailable = false;
  squareCovers = false;
  cardSize = 5;
  mobileOpen = false;
  static styles = i4`
    :host {
      margin-left: auto;
      display: inline-flex;
      align-items: center;
      position: relative;
    }

    @keyframes menu-in {
      from {
        opacity: 0;
        transform: translateY(8px) scale(0.98);
      }
      to {
        opacity: 1;
        transform: translateY(0) scale(1);
      }
    }

    @keyframes item-in {
      from {
        opacity: 0;
        transform: translateY(5px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    .desktop {
      display: none;
      align-items: center;
      gap: 0.3rem;
    }

    .mobile-trigger {
      border: 0;
      background: transparent;
      color: var(--lv-color-subtle-text, #4b5563);
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 2rem;
      height: 2rem;
      border-radius: 0.38rem;
      cursor: pointer;
    }

    .mobile-trigger:hover {
      background: var(--lv-color-hover-soft, rgba(255, 255, 255, 0.6));
      color: var(--lv-color-text, #111827);
    }

    .toggle {
      border: 1px solid transparent;
      background: transparent;
      color: var(--lv-color-subtle-text, #475569);
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 2.25rem;
      height: 2.25rem;
      border-radius: 0.55rem;
      cursor: pointer;
      transition: background-color 160ms ease, color 160ms ease, border-color 160ms ease,
        box-shadow 160ms ease, transform 120ms ease;
    }

    .toggle:hover {
      color: var(--lv-color-text, #334155);
      background: var(--lv-color-hover-soft, rgba(241, 245, 249, 0.92));
      border-color: var(--lv-color-border-strong, #d1d5db);
    }

    .toggle:active:not(:disabled) {
      transform: translateY(1px);
    }

    .toggle:focus-visible {
      outline: none;
      box-shadow: 0 0 0 2px var(--lv-color-focus-outline, #fff),
        0 0 0 4px var(--lv-color-focus-ring, rgba(59, 130, 246, 0.55));
    }

    .toggle:disabled {
      opacity: 0.35;
      cursor: not-allowed;
    }

    .toggle:disabled:hover {
      background: transparent;
      color: var(--lv-color-subtle-text, #4b5563);
    }

    .toggle[data-active="true"] {
      background: var(--lv-color-primary-active-bg, #224876);
      color: var(--lv-color-primary-active-text, #2563eb);
      border-color: var(--lv-color-primary-active-border, #35649b);
      box-shadow: inset 0 0 0 1px var(--lv-color-primary-soft, rgba(59, 130, 246, 0.16)),
        var(--lv-shadow-sm, 0 1px 2px rgba(15, 23, 42, 0.06));
    }

    .toggle.settings {
      color: var(--lv-color-muted, #94a3b8);
      width: 2.05rem;
      height: 2.05rem;
    }

    .toggle.settings:hover {
      color: var(--lv-color-muted, #6b7280);
      background: transparent;
    }

    .zoom-wrap {
      display: inline-flex;
      align-items: center;
      gap: 0.08rem;
    }

    lv-icon {
      pointer-events: none;
    }

    .mobile-menu {
      position: absolute;
      top: calc(100% + 0.45rem);
      right: 0;
      min-width: 13.5rem;
      z-index: 70;
      border: 1px solid var(--lv-color-border, #e5e7eb);
      border-radius: 0.55rem;
      background: var(--lv-color-surface, #fff);
      box-shadow: 0 12px 32px rgb(var(--lv-color-shadow-rgb, 15 23 42) / 0.16);
      overflow: hidden;
      display: grid;
      gap: 0;
      animation: menu-in 150ms ease-out both;
      transform-origin: top right;
    }

    .menu-item {
      border: 0;
      background: transparent;
      color: var(--lv-color-subtle-text, #374151);
      display: flex;
      align-items: center;
      gap: 0.65rem;
      width: 100%;
      text-align: left;
      padding: 0.55rem 0.75rem;
      font-size: 0.875rem;
      cursor: pointer;
      transition: background-color 150ms ease;
    }

    .menu-item:hover {
      background: var(--lv-color-surface-alt, #f9fafb);
    }

    .menu-item .label {
      flex: 1;
    }

    .menu-item .state {
      color: var(--lv-color-primary, #2563eb);
      font-size: 0.75rem;
      font-weight: 600;
    }

    .menu-zoom {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 0.5rem;
      padding: 0.55rem 0.75rem;
      border-top: 1px solid var(--lv-color-border, #e5e7eb);
    }

    .mobile-menu .menu-item:nth-child(1) {
      animation: item-in 180ms ease-out both;
      animation-delay: 20ms;
    }

    .mobile-menu .menu-item:nth-child(2) {
      animation: item-in 180ms ease-out both;
      animation-delay: 40ms;
    }

    .mobile-menu .menu-zoom {
      animation: item-in 180ms ease-out both;
      animation-delay: 60ms;
    }

    .menu-zoom .label {
      color: var(--lv-color-subtle-text, #374151);
      font-size: 0.875rem;
    }

    .menu-zoom .actions {
      display: inline-flex;
      gap: 0.15rem;
    }

    @media (min-width: 640px) {
      .mobile-trigger,
      .mobile-menu {
        display: none;
      }

      .desktop {
        display: inline-flex;
      }
    }
  `;
  emitToggleHideAvailable() {
    this.hideAvailable = !this.hideAvailable;
    this.dispatchEvent(new CustomEvent("lv-toggle-hide-available", {
      detail: {
        value: this.hideAvailable
      },
      bubbles: true,
      composed: true
    }));
  }
  emitToggleSquareCovers() {
    this.squareCovers = !this.squareCovers;
    this.dispatchEvent(new CustomEvent("lv-toggle-square-covers", {
      detail: {
        value: this.squareCovers
      },
      bubbles: true,
      composed: true
    }));
  }
  emitCardSize(size) {
    const bounded = Math.max(1, Math.min(9, size));
    this.cardSize = bounded;
    this.dispatchEvent(new CustomEvent("lv-change-card-size", {
      detail: {
        value: bounded
      },
      bubbles: true,
      composed: true
    }));
  }
  currentBreakpoint() {
    if (typeof window === "undefined") return "base";
    const width = window.innerWidth;
    if (width >= 1280) return "xl";
    if (width >= 1024) return "lg";
    if (width >= 768) return "md";
    return "base";
  }
  columnCount(size) {
    const breakpoint = this.currentBreakpoint();
    const map = COLUMN_MAP[breakpoint];
    const key = Math.max(1, Math.min(9, size));
    return map[key];
  }
  findNextVisibleSize(direction) {
    const currentCols = this.columnCount(this.cardSize);
    if (direction === "in") {
      for (let size = this.cardSize + 1; size <= 9; size++) {
        if (this.columnCount(size) < currentCols) return size;
      }
      return this.cardSize;
    }
    for (let size = this.cardSize - 1; size >= 1; size--) {
      if (this.columnCount(size) > currentCols) return size;
    }
    return this.cardSize;
  }
  zoomIn() {
    const next = this.findNextVisibleSize("in");
    if (next !== this.cardSize) this.emitCardSize(next);
  }
  zoomOut() {
    const next = this.findNextVisibleSize("out");
    if (next !== this.cardSize) this.emitCardSize(next);
  }
  toggleMobile() {
    this.mobileOpen = !this.mobileOpen;
  }
  closeMobile() {
    this.mobileOpen = false;
  }
  render() {
    const canZoomIn = this.findNextVisibleSize("in") !== this.cardSize;
    const canZoomOut = this.findNextVisibleSize("out") !== this.cardSize;
    return b2`
      <div class="desktop">
        <button
          class="toggle"
          data-active="${String(this.hideAvailable)}"
          @click=${() => this.emitToggleHideAvailable()}
          aria-label="Hide available"
          aria-pressed="${String(this.hideAvailable)}"
          title="Hide available"
        >
          <lv-icon name="${this.hideAvailable ? "eye-off" : "eye"}" size="22"></lv-icon>
        </button>
        <button
          class="toggle"
          data-active="${String(this.squareCovers)}"
          @click=${() => this.emitToggleSquareCovers()}
          aria-label="Square covers"
          aria-pressed="${String(this.squareCovers)}"
          title="Square covers"
        >
          <lv-icon name="view-mode" size="22"></lv-icon>
        </button>
        <div class="zoom-wrap">
          <button class="toggle" ?disabled=${!canZoomOut} @click=${() => this.zoomOut()} aria-label="Zoom out">
            <lv-icon name="zoom-out" size="22"></lv-icon>
          </button>
          <button class="toggle" ?disabled=${!canZoomIn} @click=${() => this.zoomIn()} aria-label="Zoom in">
            <lv-icon name="zoom-in" size="22"></lv-icon>
          </button>
        </div>
        <button class="toggle settings" aria-label="Section settings" title="Section settings">
          <lv-icon name="settings" size="20"></lv-icon>
        </button>
      </div>

      <button class="mobile-trigger" @click=${() => this.toggleMobile()} aria-label="View options" aria-expanded="${String(this.mobileOpen)}">
        <lv-icon name="ellipsis" size="18"></lv-icon>
      </button>

      ${this.mobileOpen ? b2`
          <div class="mobile-menu">
            <button class="menu-item" @click=${() => {
      this.emitToggleHideAvailable();
      this.closeMobile();
    }}>
              <lv-icon name="${this.hideAvailable ? "eye-off" : "eye"}" size="16"></lv-icon>
              <span class="label">Hide Available</span>
              ${this.hideAvailable ? b2`<span class="state">On</span>` : null}
            </button>
            <button class="menu-item" @click=${() => {
      this.emitToggleSquareCovers();
      this.closeMobile();
    }}>
              <lv-icon name="crop" size="16"></lv-icon>
              <span class="label">Square Covers</span>
              ${this.squareCovers ? b2`<span class="state">On</span>` : null}
            </button>
            <div class="menu-zoom">
              <span class="label">Card Size</span>
              <div class="actions">
                <button class="toggle" ?disabled=${!canZoomOut} @click=${() => this.zoomOut()} aria-label="Zoom out">
                  <lv-icon name="zoom-out" size="16"></lv-icon>
                </button>
                <button class="toggle" ?disabled=${!canZoomIn} @click=${() => this.zoomIn()} aria-label="Zoom in">
                  <lv-icon name="zoom-in" size="16"></lv-icon>
                </button>
              </div>
            </div>
          </div>
        ` : null}
    `;
  }
};
_ts_decorate11([
  n5({
    type: Boolean,
    reflect: true
  })
], LvSectionToolbar.prototype, "hideAvailable", void 0);
_ts_decorate11([
  n5({
    type: Boolean,
    reflect: true
  })
], LvSectionToolbar.prototype, "squareCovers", void 0);
_ts_decorate11([
  n5({
    type: Number,
    reflect: true
  })
], LvSectionToolbar.prototype, "cardSize", void 0);
_ts_decorate11([
  r7()
], LvSectionToolbar.prototype, "mobileOpen", void 0);
function defineLvSectionToolbar() {
  defineCustomElement("lv-section-toolbar", LvSectionToolbar);
}

// src/components/lv-stat-card.ts
function _ts_decorate12(decorators, target, key, desc) {
  var c7 = arguments.length, r10 = c7 < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d6;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r10 = Reflect.decorate(decorators, target, key, desc);
  else for (var i9 = decorators.length - 1; i9 >= 0; i9--) if (d6 = decorators[i9]) r10 = (c7 < 3 ? d6(r10) : c7 > 3 ? d6(target, key, r10) : d6(target, key)) || r10;
  return c7 > 3 && r10 && Object.defineProperty(target, key, r10), r10;
}
var LvStatCard = class extends i6 {
  label = "";
  value = "";
  subtitle = "";
  tone = "default";
  static styles = i4`
    :host {
      display: block;
      border: 1px solid var(--lv-color-border, #e5e7eb);
      border-radius: 0.5rem;
      padding: 1.5rem;
      background: var(--lv-color-surface-alt, #f9fafb);
    }

    :host([tone="default"]) {
      background: var(--lv-color-surface-alt, #f9fafb);
      border-color: var(--lv-color-border, #e5e7eb);
    }

    :host([tone="success"]) {
      background: var(--lv-color-status-success-bg, #d1fae5);
      border-color: var(--lv-color-status-success-border, #bbf7d0);
    }

    :host([tone="warning"]) {
      background: var(--lv-color-status-warning-bg, #fef3c7);
      border-color: var(--lv-color-status-warning-border, #fde68a);
    }

    :host([tone="danger"]),
    :host([tone="error"]) {
      background: var(--lv-color-status-danger-bg, #fee2e2);
      border-color: var(--lv-color-status-danger-border, #fecaca);
    }

    :host([tone="info"]) {
      background: var(--lv-color-status-info-bg, #dbeafe);
      border-color: var(--lv-color-status-info-border, #bfdbfe);
    }

    .top {
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
      gap: 0.5rem;
    }

    .label {
      margin: 0;
      font-size: 0.875rem;
      font-weight: 500;
      color: var(--lv-color-muted, #6b7280);
    }

    .value {
      margin: 0.45rem 0 0;
      font-size: 1.875rem;
      line-height: 1.1;
      font-weight: 700;
      color: var(--lv-color-text, #111827);
    }

    .subtitle {
      margin: 0.25rem 0 0;
      font-size: 0.75rem;
      color: var(--lv-color-muted, #6b7280);
    }

    .icon {
      display: inline-flex;
      color: var(--lv-color-subtle-text, #4b5563);
    }

    :host([tone="success"]) .icon {
      color: var(--lv-color-status-success-text, #16a34a);
    }

    :host([tone="warning"]) .icon {
      color: var(--lv-color-status-warning-text, #ca8a04);
    }

    :host([tone="danger"]) .icon,
    :host([tone="error"]) .icon {
      color: var(--lv-color-status-danger-text, #dc2626);
    }

    :host([tone="info"]) .icon {
      color: var(--lv-color-status-info-text, #2563eb);
    }
  `;
  render() {
    return b2`
      <div class="top">
        <div>
          ${this.label ? b2`
              <p class="label">${this.label}</p>
            ` : null}
          <p class="value">${this.value}</p>
          ${this.subtitle ? b2`
              <p class="subtitle">${this.subtitle}</p>
            ` : null}
        </div>
        <div class="icon"><slot name="icon"></slot></div>
      </div>
    `;
  }
};
_ts_decorate12([
  n5({
    reflect: true
  })
], LvStatCard.prototype, "label", void 0);
_ts_decorate12([
  n5({
    reflect: true
  })
], LvStatCard.prototype, "value", void 0);
_ts_decorate12([
  n5({
    reflect: true
  })
], LvStatCard.prototype, "subtitle", void 0);
_ts_decorate12([
  n5({
    reflect: true
  })
], LvStatCard.prototype, "tone", void 0);
function defineLvStatCard() {
  defineCustomElement("lv-stat-card", LvStatCard);
}

// src/components/lv-modal.ts
function _ts_decorate13(decorators, target, key, desc) {
  var c7 = arguments.length, r10 = c7 < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d6;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r10 = Reflect.decorate(decorators, target, key, desc);
  else for (var i9 = decorators.length - 1; i9 >= 0; i9--) if (d6 = decorators[i9]) r10 = (c7 < 3 ? d6(r10) : c7 > 3 ? d6(target, key, r10) : d6(target, key)) || r10;
  return c7 > 3 && r10 && Object.defineProperty(target, key, r10), r10;
}
var LvModal = class extends i6 {
  open = false;
  heading = "";
  static styles = i4`
    :host {
      display: contents;
    }

    .overlay {
      position: fixed;
      inset: 0;
      background: var(--lv-color-overlay, rgba(17, 24, 39, 0.56));
      display: grid;
      place-items: center;
      z-index: 1000;
      padding: 1rem;
    }

    .panel {
      width: min(100%, 42rem);
      border-radius: var(--lv-radius-xl, 1rem);
      border: 1px solid var(--lv-color-border, #e5e7eb);
      background: var(--lv-color-surface, #fff);
      box-shadow: 0 25px 65px rgb(var(--lv-color-shadow-rgb, 15 23 42) / 0.35);
      overflow: hidden;
    }

    .head {
      padding: 0.9rem 1rem;
      border-bottom: 1px solid var(--lv-color-border, #e5e7eb);
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 0.75rem;
    }

    .heading {
      margin: 0;
      font-size: 0.95rem;
      font-weight: 700;
    }

    .close {
      border: 0;
      background: transparent;
      color: var(--lv-color-muted, #6b7280);
      cursor: pointer;
      border-radius: 0.45rem;
      padding: 0.35rem;
    }

    .close:hover {
      background: var(--lv-color-surface-alt, #f3f4f6);
      color: var(--lv-color-text, #111827);
    }

    .body {
      padding: 1rem;
    }

    .foot {
      border-top: 1px solid var(--lv-color-border, #e5e7eb);
      padding: 0.8rem 1rem;
      display: flex;
      justify-content: flex-end;
      gap: 0.5rem;
    }
  `;
  closeModal() {
    this.open = false;
    this.dispatchEvent(new CustomEvent("lv-close", {
      bubbles: true,
      composed: true
    }));
  }
  render() {
    if (!this.open) return null;
    return b2`
      <div class="overlay" @click="${this.closeModal}">
        <div class="panel" @click="${(event) => event.stopPropagation()}">
          <header class="head">
            <h3 class="heading">${this.heading}</h3>
            <button class="close" @click="${this.closeModal}" aria-label="Close modal">
              ✕
            </button>
          </header>
          <section class="body">
            <slot></slot>
          </section>
          <footer class="foot">
            <slot name="actions"></slot>
          </footer>
        </div>
      </div>
    `;
  }
};
_ts_decorate13([
  n5({
    type: Boolean,
    reflect: true
  })
], LvModal.prototype, "open", void 0);
_ts_decorate13([
  n5({
    reflect: true
  })
], LvModal.prototype, "heading", void 0);
function defineLvModal() {
  defineCustomElement("lv-modal", LvModal);
}

// src/components/lv-tabs.ts
function _ts_decorate14(decorators, target, key, desc) {
  var c7 = arguments.length, r10 = c7 < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d6;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r10 = Reflect.decorate(decorators, target, key, desc);
  else for (var i9 = decorators.length - 1; i9 >= 0; i9--) if (d6 = decorators[i9]) r10 = (c7 < 3 ? d6(r10) : c7 > 3 ? d6(target, key, r10) : d6(target, key)) || r10;
  return c7 > 3 && r10 && Object.defineProperty(target, key, r10), r10;
}
var LvTabs = class extends i6 {
  tabs = [];
  active = "";
  static styles = i4`
    :host {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      gap: 0.5rem;
    }

    button {
      border: 1px solid var(--lv-color-border, #e5e7eb);
      border-radius: 999px;
      background: var(--lv-color-surface, #fff);
      color: var(--lv-color-muted, #6b7280);
      cursor: pointer;
      font-size: 0.82rem;
      font-weight: 600;
      padding: 0.4rem 0.75rem;
      transition: all 120ms ease;
    }

    button:hover {
      border-color: var(--lv-color-border-strong, #cbd5e1);
      color: var(--lv-color-text, #111827);
    }

    button[data-active="true"] {
      background: var(--lv-color-status-info-bg, #dbeafe);
      border-color: var(--lv-color-status-info-border, #bfdbfe);
      color: var(--lv-color-status-info-text, #1e40af);
    }
  `;
  selectTab(id) {
    this.active = id;
    this.dispatchEvent(new CustomEvent("lv-change", {
      detail: {
        id
      },
      bubbles: true,
      composed: true
    }));
  }
  render() {
    return b2`
      ${this.tabs.map((tab) => b2`
          <button data-active="${String(this.active === tab.id)}" @click="${() => this.selectTab(tab.id)}">${tab.label}</button>
        `)}
    `;
  }
};
_ts_decorate14([
  n5({
    attribute: false
  })
], LvTabs.prototype, "tabs", void 0);
_ts_decorate14([
  n5({
    reflect: true
  })
], LvTabs.prototype, "active", void 0);
function defineLvTabs() {
  defineCustomElement("lv-tabs", LvTabs);
}

// src/components/lv-pagination.ts
function _ts_decorate15(decorators, target, key, desc) {
  var c7 = arguments.length, r10 = c7 < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d6;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r10 = Reflect.decorate(decorators, target, key, desc);
  else for (var i9 = decorators.length - 1; i9 >= 0; i9--) if (d6 = decorators[i9]) r10 = (c7 < 3 ? d6(r10) : c7 > 3 ? d6(target, key, r10) : d6(target, key)) || r10;
  return c7 > 3 && r10 && Object.defineProperty(target, key, r10), r10;
}
var LvPagination = class extends i6 {
  page = 1;
  total = 1;
  static styles = i4`
    :host {
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      background: var(--lv-color-surface, #fff);
      border: 1px solid var(--lv-color-border, #e5e7eb);
      border-radius: 999px;
      padding: 0.35rem;
      box-shadow: var(--lv-shadow-sm, 0 1px 2px rgba(0, 0, 0, 0.07));
    }

    button {
      border: 0;
      background: transparent;
      color: var(--lv-color-text, #111827);
      border-radius: 999px;
      padding: 0.4rem 0.65rem;
      font-weight: 700;
      cursor: pointer;
    }

    button:hover {
      background: var(--lv-color-hover-soft, rgba(148, 163, 184, 0.16));
    }

    button:disabled {
      opacity: 0.35;
      cursor: not-allowed;
    }

    .text {
      font-size: 0.8rem;
      color: var(--lv-color-muted, #6b7280);
      min-width: 5rem;
      text-align: center;
    }
  `;
  updatePage(nextPage) {
    this.page = Math.min(Math.max(nextPage, 1), Math.max(this.total, 1));
    this.dispatchEvent(new CustomEvent("lv-change", {
      detail: {
        page: this.page
      },
      bubbles: true,
      composed: true
    }));
  }
  render() {
    return b2`
      <button ?disabled="${this.page <= 1}" @click="${() => this.updatePage(this.page - 1)}" aria-label="Previous page">
        ←
      </button>
      <span class="text">${this.page} / ${this.total}</span>
      <button ?disabled="${this.page >= this.total}" @click="${() => this.updatePage(this.page + 1)}" aria-label="Next page">
        →
      </button>
    `;
  }
};
_ts_decorate15([
  n5({
    type: Number,
    reflect: true
  })
], LvPagination.prototype, "page", void 0);
_ts_decorate15([
  n5({
    type: Number,
    reflect: true
  })
], LvPagination.prototype, "total", void 0);
function defineLvPagination() {
  defineCustomElement("lv-pagination", LvPagination);
}

// src/components/lv-empty-state.ts
function _ts_decorate16(decorators, target, key, desc) {
  var c7 = arguments.length, r10 = c7 < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d6;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r10 = Reflect.decorate(decorators, target, key, desc);
  else for (var i9 = decorators.length - 1; i9 >= 0; i9--) if (d6 = decorators[i9]) r10 = (c7 < 3 ? d6(r10) : c7 > 3 ? d6(target, key, r10) : d6(target, key)) || r10;
  return c7 > 3 && r10 && Object.defineProperty(target, key, r10), r10;
}
var LvEmptyState = class extends i6 {
  heading = "No data";
  description = "";
  static styles = i4`
    :host {
      display: block;
      border: 1px dashed var(--lv-color-border, #d1d5db);
      border-radius: var(--lv-radius-lg, 0.75rem);
      padding: 1.2rem;
      text-align: center;
      color: var(--lv-color-muted, #6b7280);
      background: var(--lv-color-surface, #fff);
    }

    h3 {
      margin: 0;
      font-size: 0.95rem;
      color: var(--lv-color-text, #111827);
    }

    p {
      margin: 0.45rem 0 0;
      font-size: 0.82rem;
    }
  `;
  render() {
    return b2`
      <h3>${this.heading}</h3>
      ${this.description ? b2`
          <p>${this.description}</p>
        ` : null}
      <slot></slot>
    `;
  }
};
_ts_decorate16([
  n5({
    reflect: true
  })
], LvEmptyState.prototype, "heading", void 0);
_ts_decorate16([
  n5({
    reflect: true
  })
], LvEmptyState.prototype, "description", void 0);
function defineLvEmptyState() {
  defineCustomElement("lv-empty-state", LvEmptyState);
}

// src/components/lv-skeleton.ts
function _ts_decorate17(decorators, target, key, desc) {
  var c7 = arguments.length, r10 = c7 < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d6;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r10 = Reflect.decorate(decorators, target, key, desc);
  else for (var i9 = decorators.length - 1; i9 >= 0; i9--) if (d6 = decorators[i9]) r10 = (c7 < 3 ? d6(r10) : c7 > 3 ? d6(target, key, r10) : d6(target, key)) || r10;
  return c7 > 3 && r10 && Object.defineProperty(target, key, r10), r10;
}
var LvSkeleton = class extends i6 {
  shape = "line";
  width = "100%";
  height = "14px";
  static styles = i4`
    :host {
      display: block;
    }

    .sk {
      width: var(--w, 100%);
      height: var(--h, 14px);
      border-radius: 0.55rem;
      background: linear-gradient(
        90deg,
        var(--lv-color-skeleton-a, #e5e7eb) 25%,
        var(--lv-color-skeleton-b, #f3f4f6) 37%,
        var(--lv-color-skeleton-a, #e5e7eb) 63%
      );
      background-size: 400% 100%;
      animation: shimmer 1.25s ease infinite;
    }

    :host([shape="box"]) .sk {
      border-radius: var(--lv-radius-md, 0.5rem);
    }

    @keyframes shimmer {
      0% {
        background-position: 100% 0;
      }
      100% {
        background-position: 0 0;
      }
    }
  `;
  render() {
    const style = `--w:${this.width};--h:${this.height};`;
    return b2`
      <div class="sk" style="${style}"></div>
    `;
  }
};
_ts_decorate17([
  n5({
    reflect: true
  })
], LvSkeleton.prototype, "shape", void 0);
_ts_decorate17([
  n5({
    reflect: true
  })
], LvSkeleton.prototype, "width", void 0);
_ts_decorate17([
  n5({
    reflect: true
  })
], LvSkeleton.prototype, "height", void 0);
function defineLvSkeleton() {
  defineCustomElement("lv-skeleton", LvSkeleton);
}

// src/components/lv-spinner.ts
function _ts_decorate18(decorators, target, key, desc) {
  var c7 = arguments.length, r10 = c7 < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d6;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r10 = Reflect.decorate(decorators, target, key, desc);
  else for (var i9 = decorators.length - 1; i9 >= 0; i9--) if (d6 = decorators[i9]) r10 = (c7 < 3 ? d6(r10) : c7 > 3 ? d6(target, key, r10) : d6(target, key)) || r10;
  return c7 > 3 && r10 && Object.defineProperty(target, key, r10), r10;
}
var LvSpinner = class extends i6 {
  size = "20px";
  static styles = i4`
    :host {
      display: inline-flex;
      width: var(--s, 20px);
      height: var(--s, 20px);
      border: 2px solid var(--lv-color-primary-track, rgba(37, 99, 235, 0.28));
      border-right-color: var(--lv-color-primary, #2563eb);
      border-radius: 999px;
      animation: spin 0.75s linear infinite;
    }

    @keyframes spin {
      to {
        transform: rotate(360deg);
      }
    }
  `;
  render() {
    this.style.setProperty("--s", this.size);
    return b2`

    `;
  }
};
_ts_decorate18([
  n5({
    reflect: true
  })
], LvSpinner.prototype, "size", void 0);
function defineLvSpinner() {
  defineCustomElement("lv-spinner", LvSpinner);
}

// src/components/lv-icon.ts
function _ts_decorate19(decorators, target, key, desc) {
  var c7 = arguments.length, r10 = c7 < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d6;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r10 = Reflect.decorate(decorators, target, key, desc);
  else for (var i9 = decorators.length - 1; i9 >= 0; i9--) if (d6 = decorators[i9]) r10 = (c7 < 3 ? d6(r10) : c7 > 3 ? d6(target, key, r10) : d6(target, key)) || r10;
  return c7 > 3 && r10 && Object.defineProperty(target, key, r10), r10;
}
var ICONS = {
  menu: w2`
    <path d="M4 6h16M4 12h16M4 18h16" />
  `,
  close: w2`
    <path d="M6 18L18 6M6 6l12 12" />
  `,
  search: w2`
    <path d="m21 21-4.35-4.35" /><circle cx="11" cy="11" r="7" />
  `,
  settings: w2`
    <path d="M12 15.5A3.5 3.5 0 1 0 12 8.5a3.5 3.5 0 0 0 0 7Z" /><path
      d="M19.4 15a1.6 1.6 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.6 1.6 0 0 0-1.8-.3 1.6 1.6 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.2a1.6 1.6 0 0 0-1-1.5 1.6 1.6 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.6 1.6 0 0 0 .3-1.8 1.6 1.6 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.2a1.6 1.6 0 0 0 1.5-1 1.6 1.6 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.6 1.6 0 0 0 1.8.3h.1a1.6 1.6 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.2a1.6 1.6 0 0 0 1 1.5h.1a1.6 1.6 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.6 1.6 0 0 0-.3 1.8v.1a1.6 1.6 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.2a1.6 1.6 0 0 0-1.4 1Z"
    />
  `,
  user: w2`
    <circle cx="12" cy="8" r="4" /><path d="M4 20a8 8 0 0 1 16 0" />
  `,
  warning: w2`
    <path
      d="M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0Z"
    /><path d="M12 9v4" /><path d="M12 17h.01" />
  `,
  check: w2`
    <path d="m20 6-11 11-5-5" />
  `,
  download: w2`
    <path d="M12 3v12" /><path d="m7 10 5 5 5-5" /><path d="M5 21h14" />
  `,
  activity: w2`
    <path d="M22 12H2" /><path d="m15 5 7 7-7 7" />
  `,
  chart: w2`
    <path d="M3 3v18h18" /><path d="m19 9-5 5-4-4-3 3" />
  `,
  clock: w2`
    <circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" />
  `,
  filter: w2`
    <path d="M4 6h16" /><path d="M7 12h10" /><path d="M10 18h4" />
  `,
  eye: w2`
    <path d="M2 12s3.5-6 10-6 10 6 10 6-3.5 6-10 6-10-6-10-6Z" /><circle
      cx="12"
      cy="12"
      r="2.5"
    />
  `,
  "eye-off": w2`
    <path d="M3 3l18 18" /><path
      d="M10.58 10.58a2 2 0 0 0 2.83 2.83"
    /><path
      d="M9.36 5.36A11.6 11.6 0 0 1 12 5c6.5 0 10 7 10 7a18.4 18.4 0 0 1-4.1 4.9"
    /><path d="M6.24 6.24C3.8 7.88 2 12 2 12s3.5 6 10 6a11.7 11.7 0 0 0 3.1-.4" />
  `,
  crop: w2`
    <rect x="3" y="3" width="18" height="18" rx="2" /><path d="M3 9h4M3 15h4M21 9h-4M21 15h-4" />
  `,
  "view-mode": w2`
    <rect x="4" y="3.5" width="16" height="17" rx="2.5" />
    <path d="M9 8.5h6M9 12h6M9 15.5h4" />
    <circle cx="7" cy="8.5" r="0.7" fill="currentColor" stroke="none" />
    <circle cx="7" cy="12" r="0.7" fill="currentColor" stroke="none" />
    <circle cx="7" cy="15.5" r="0.7" fill="currentColor" stroke="none" />
  `,
  "zoom-in": w2`
    <circle cx="12" cy="12" r="9" /><path d="M12 8v8M8 12h8" />
  `,
  "zoom-out": w2`
    <circle cx="12" cy="12" r="9" /><path d="M8 12h8" />
  `,
  ellipsis: w2`
    <circle cx="5" cy="12" r="2" /><circle cx="12" cy="12" r="2" /><circle cx="19" cy="12" r="2" />
  `,
  dots: w2`
    <circle cx="12" cy="5" r="1" /><circle cx="12" cy="12" r="1" /><circle
      cx="12"
      cy="19"
      r="1"
    />
  `,
  flag: w2`
    <path d="M4 21V5" /><path d="m4 5 4-2 4 2 4-2 4 2v8l-4-2-4 2-4-2-4 2" />
  `,
  book: w2`
    <path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v17H6.5A2.5 2.5 0 0 0 4 22Z" /><path
      d="M4 5.5V22"
    /><path d="M9 7h7" />
  `,
  moon: w2`
    <path d="M21 14.8A8.5 8.5 0 0 1 9.2 3 7 7 0 1 0 21 14.8Z" />
  `,
  sun: w2`
    <circle cx="12" cy="12" r="4" /><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
  `,
  key: w2`
    <circle cx="7.5" cy="14.5" r="4.5" /><path d="M11 11 21 1" /><path d="m16 6 2 2" /><path d="m19 3 2 2" />
  `
};
var LvIcon = class extends i6 {
  name = "dots";
  size = "16";
  stroke = "2";
  static styles = i4`
    :host {
      display: inline-flex;
      width: var(--lv-icon-size, 1em);
      height: var(--lv-icon-size, 1em);
      line-height: 1;
      color: currentColor;
      flex-shrink: 0;
    }

    svg {
      width: var(--lv-icon-size, 1em);
      height: var(--lv-icon-size, 1em);
      stroke: currentColor;
      fill: none;
      stroke-linecap: round;
      stroke-linejoin: round;
    }
  `;
  render() {
    const size = Number(this.size) || 16;
    const stroke = Number(this.stroke) || 2;
    this.style.setProperty("--lv-icon-size", `${size}px`);
    const path = ICONS[this.name] ?? ICONS.dots;
    return b2`
      <svg
        viewBox="0 0 24 24"
        stroke-width="${stroke}"
        aria-hidden="true"
        focusable="false"
      >
        ${path}
      </svg>
    `;
  }
};
_ts_decorate19([
  n5({
    reflect: true
  })
], LvIcon.prototype, "name", void 0);
_ts_decorate19([
  n5({
    reflect: true
  })
], LvIcon.prototype, "size", void 0);
_ts_decorate19([
  n5({
    reflect: true
  })
], LvIcon.prototype, "stroke", void 0);
function defineLvIcon() {
  defineCustomElement("lv-icon", LvIcon);
}

// index.ts
function defineAllLvComponents() {
  defineLvApp();
  defineLvAdminPage();
  defineLvAvatar();
  defineLvNav();
  defineLvButton();
  defineLvInput();
  defineLvInputGroup();
  defineLvSurface();
  defineLvGrid();
  defineLvCard();
  defineLvBadge();
  defineLvTable();
  defineLvList();
  defineLvToolbar();
  defineLvSectionToolbar();
  defineLvStatCard();
  defineLvModal();
  defineLvTabs();
  defineLvPagination();
  defineLvEmptyState();
  defineLvSkeleton();
  defineLvSpinner();
  defineLvIcon();
}

// demo/src/services/stub-data.ts
var HOME_STUB = {
  popular: [
    {
      asin: "B08G9PRS1K",
      title: "Project Hail Mary",
      author: "Andy Weir",
      cover: "/placeholder_cover.svg",
      rating: 4.8,
      status: "available"
    },
    {
      asin: "B003ZWFO7E",
      title: "The Way of Kings",
      author: "Brandon Sanderson",
      cover: "/placeholder_cover.svg",
      rating: 4.7
    },
    {
      asin: "B002V1OF70",
      title: "Dune",
      author: "Frank Herbert",
      cover: "/placeholder_cover.svg",
      rating: 4.6,
      status: "requested"
    },
    {
      asin: "B004A90BXS",
      title: "The Name of the Wind",
      author: "Patrick Rothfuss",
      cover: "/placeholder_cover.svg",
      rating: 4.8,
      status: "processing"
    },
    {
      asin: "B0099RKI5W",
      title: "The Hobbit",
      author: "J.R.R. Tolkien",
      cover: "/placeholder_cover.svg",
      rating: 4.7
    },
    {
      asin: "B00I2VWW5U",
      title: "Red Rising",
      author: "Pierce Brown",
      cover: "/placeholder_cover.svg",
      rating: 4.6
    },
    {
      asin: "B073H9PF2D",
      title: "Leviathan Wakes",
      author: "James S. A. Corey",
      cover: "/placeholder_cover.svg",
      rating: 4.5
    },
    {
      asin: "B002UZHIEA",
      title: "Mistborn",
      author: "Brandon Sanderson",
      cover: "/placeholder_cover.svg",
      rating: 4.8
    }
  ],
  newReleases: [
    {
      asin: "B0CRJ3QBHM",
      title: "Wind and Truth",
      author: "Brandon Sanderson",
      cover: "/placeholder_cover.svg",
      rating: 4.6
    },
    {
      asin: "B0BHTY5N6Y",
      title: "The Will of the Many",
      author: "James Islington",
      cover: "/placeholder_cover.svg",
      rating: 4.5
    },
    {
      asin: "B0CZ95Y4G9",
      title: "Dungeon Crawler Carl",
      author: "Matt Dinniman",
      cover: "/placeholder_cover.svg",
      rating: 4.9
    },
    {
      asin: "B0CP46D99V",
      title: "The Sunlit Man",
      author: "Brandon Sanderson",
      cover: "/placeholder_cover.svg",
      rating: 4.4,
      status: "available"
    },
    {
      asin: "B0D7M9NNPV",
      title: "The Mercy of Gods",
      author: "James S. A. Corey",
      cover: "/placeholder_cover.svg",
      rating: 4.2
    },
    {
      asin: "B0BX79Y5X5",
      title: "Empire of the Damned",
      author: "Jay Kristoff",
      cover: "/placeholder_cover.svg",
      rating: 4.1
    },
    {
      asin: "B0D2TR7WS2",
      title: "Service Model",
      author: "Adrian Tchaikovsky",
      cover: "/placeholder_cover.svg",
      rating: 4
    },
    {
      asin: "B0C8W3JGHK",
      title: "House of Open Wounds",
      author: "Adrian Tchaikovsky",
      cover: "/placeholder_cover.svg",
      rating: 4.3
    }
  ]
};
var DASHBOARD_STUB = {
  metrics: [
    {
      label: "Total Requests",
      value: "128",
      subtitle: "Across all users",
      tone: "info"
    },
    {
      label: "Active Downloads",
      value: "7",
      subtitle: "qBittorrent + SABnzbd",
      tone: "warning"
    },
    {
      label: "Completed Today",
      value: "23",
      subtitle: "Last 24 hours",
      tone: "success"
    },
    {
      label: "Failed",
      value: "2",
      subtitle: "Needs review",
      tone: "error"
    }
  ],
  activeDownloads: [
    {
      requestId: "r-301",
      title: "Project Hail Mary",
      author: "Andy Weir",
      user: "majora",
      progress: 62,
      speed: "7.4 MB/s",
      eta: "18m",
      started: "11m ago"
    },
    {
      requestId: "r-302",
      title: "The Expanse Collection",
      author: "James S. A. Corey",
      user: "rachel",
      progress: 31,
      speed: "4.1 MB/s",
      eta: "43m",
      started: "22m ago"
    },
    {
      requestId: "r-303",
      title: "Dungeon Crawler Carl 7",
      author: "Matt Dinniman",
      user: "sam",
      progress: 84,
      speed: "10.6 MB/s",
      eta: "6m",
      started: "6m ago",
      type: "ebook"
    }
  ],
  recentRequests: [
    {
      requestId: "r-401",
      title: "Project Hail Mary",
      user: "majora",
      status: "downloading",
      createdAt: "2m ago"
    },
    {
      requestId: "r-402",
      title: "The Way of Kings",
      user: "rachel",
      status: "awaiting_approval",
      createdAt: "8m ago"
    },
    {
      requestId: "r-403",
      title: "The Name of the Wind",
      user: "sam",
      status: "processing",
      createdAt: "24m ago"
    },
    {
      requestId: "r-404",
      title: "The Sunlit Man",
      user: "leo",
      status: "completed",
      createdAt: "56m ago"
    }
  ],
  reportedIssues: [
    {
      issueId: "i-101",
      title: "The Expanse: Cibola Burn",
      author: "James S. A. Corey",
      reporter: "rachel",
      reason: "Wrong narrator edition downloaded. Looking for Jefferson Mays version.",
      createdAt: "2h ago"
    },
    {
      issueId: "i-102",
      title: "The Final Empire",
      author: "Brandon Sanderson",
      reporter: "sam",
      reason: "Corrupted chapters near 01:14:23 and 01:18:51.",
      createdAt: "4h ago"
    },
    {
      issueId: "i-103",
      title: "Dune Messiah",
      author: "Frank Herbert",
      reporter: "majora",
      reason: "Metadata mismatch on release year and language tags.",
      createdAt: "7h ago"
    }
  ]
};
var REQUESTS_STUB = [
  {
    requestId: "rq-1001",
    title: "Love, Death + Robots: The Official Anthology: Volume 4",
    author: "Stan Litore",
    user: "hydrate31",
    status: "awaiting_search",
    createdAt: "7m ago",
    cover: "/placeholder_cover.svg"
  },
  {
    requestId: "rq-1002",
    title: "Love, Death + Robots: The Official Anthology: Volume 2 & 3",
    author: "John Scalzi",
    user: "hydrate31",
    status: "awaiting_search",
    createdAt: "8m ago",
    cover: "/placeholder_cover.svg"
  },
  {
    requestId: "rq-1003",
    title: "Expansion",
    author: "Peter F. Hamilton",
    user: "hydrate31",
    status: "awaiting_search",
    createdAt: "8m ago",
    cover: "/placeholder_cover.svg"
  },
  {
    requestId: "rq-1004",
    title: "Pandore abusee",
    author: "Peter F. Hamilton",
    user: "hydrate31",
    status: "awaiting_search",
    createdAt: "9m ago",
    cover: "/placeholder_cover.svg"
  },
  {
    requestId: "rq-1005",
    title: "Dungeon Crawler Carl 7",
    author: "Matt Dinniman",
    user: "hydrate31",
    status: "processing",
    createdAt: "15m ago",
    cover: "/placeholder_cover.svg"
  },
  {
    requestId: "rq-1006",
    title: "The Way of Kings",
    author: "Brandon Sanderson",
    user: "hydrate31",
    status: "searching",
    createdAt: "32m ago",
    cover: "/placeholder_cover.svg"
  },
  {
    requestId: "rq-1007",
    title: "The Sunlit Man",
    author: "Brandon Sanderson",
    user: "hydrate31",
    status: "completed",
    createdAt: "1h ago",
    cover: "/placeholder_cover.svg"
  }
];
var VERSION_STUB = {
  version: "0.9.4",
  name: "ReadMeABook"
};
var HOME_SECTIONS_STUB = {
  sections: [
    {
      sectionType: "popular",
      categoryId: null,
      categoryName: null
    },
    {
      sectionType: "new_releases",
      categoryId: null,
      categoryName: null
    }
  ],
  nextRefresh: new Date(Date.now() + 1e3 * 60 * 45).toISOString()
};

// demo/src/services/rmab-api-manifest.ts
var RMAB_API_ENDPOINTS = [
  {
    path: "/api/admin/api-tokens/:id",
    methods: [
      "DELETE"
    ]
  },
  {
    path: "/api/admin/api-tokens",
    methods: [
      "GET",
      "POST"
    ]
  },
  {
    path: "/api/admin/backend-mode",
    methods: [
      "GET",
      "PUT"
    ]
  },
  {
    path: "/api/admin/bookdate/toggle",
    methods: [
      "PATCH"
    ]
  },
  {
    path: "/api/admin/bulk-import/execute",
    methods: [
      "POST"
    ]
  },
  {
    path: "/api/admin/bulk-import/scan",
    methods: [
      "POST"
    ]
  },
  {
    path: "/api/admin/downloads/active",
    methods: [
      "GET"
    ]
  },
  {
    path: "/api/admin/filesystem/browse",
    methods: [
      "GET"
    ]
  },
  {
    path: "/api/admin/jobs/:id",
    methods: [
      "DELETE",
      "PUT"
    ]
  },
  {
    path: "/api/admin/jobs/:id/trigger",
    methods: [
      "POST"
    ]
  },
  {
    path: "/api/admin/jobs",
    methods: [
      "GET",
      "POST"
    ]
  },
  {
    path: "/api/admin/job-status/:id",
    methods: [
      "GET"
    ]
  },
  {
    path: "/api/admin/logs",
    methods: [
      "GET"
    ]
  },
  {
    path: "/api/admin/manual-import",
    methods: [
      "POST"
    ]
  },
  {
    path: "/api/admin/metrics",
    methods: [
      "GET"
    ]
  },
  {
    path: "/api/admin/notifications/:id",
    methods: [
      "DELETE",
      "GET",
      "PUT"
    ]
  },
  {
    path: "/api/admin/notifications/providers",
    methods: [
      "GET"
    ]
  },
  {
    path: "/api/admin/notifications",
    methods: [
      "GET",
      "POST"
    ]
  },
  {
    path: "/api/admin/notifications/test",
    methods: [
      "POST"
    ]
  },
  {
    path: "/api/admin/plex/scan",
    methods: [
      "POST"
    ]
  },
  {
    path: "/api/admin/reported-issues/:id/replace",
    methods: [
      "POST"
    ]
  },
  {
    path: "/api/admin/reported-issues/:id/resolve",
    methods: [
      "POST"
    ]
  },
  {
    path: "/api/admin/reported-issues",
    methods: [
      "GET"
    ]
  },
  {
    path: "/api/admin/requests/:id/approve",
    methods: [
      "POST"
    ]
  },
  {
    path: "/api/admin/requests/:id/retry-download",
    methods: [
      "POST"
    ]
  },
  {
    path: "/api/admin/requests/:id",
    methods: [
      "DELETE"
    ]
  },
  {
    path: "/api/admin/requests/:id/search-terms",
    methods: [
      "PATCH"
    ]
  },
  {
    path: "/api/admin/requests/pending-approval",
    methods: [
      "GET"
    ]
  },
  {
    path: "/api/admin/requests/recent",
    methods: [
      "GET"
    ]
  },
  {
    path: "/api/admin/requests",
    methods: [
      "GET"
    ]
  },
  {
    path: "/api/admin/settings/audible",
    methods: [
      "PUT"
    ]
  },
  {
    path: "/api/admin/settings/audiobookshelf/libraries",
    methods: [
      "GET"
    ]
  },
  {
    path: "/api/admin/settings/audiobookshelf",
    methods: [
      "PUT"
    ]
  },
  {
    path: "/api/admin/settings/auto-approve",
    methods: [
      "GET",
      "PATCH"
    ]
  },
  {
    path: "/api/admin/settings/download-access",
    methods: [
      "GET",
      "PATCH"
    ]
  },
  {
    path: "/api/admin/settings/download-client",
    methods: [
      "PUT"
    ]
  },
  {
    path: "/api/admin/settings/download-clients/categories",
    methods: [
      "POST"
    ]
  },
  {
    path: "/api/admin/settings/download-clients/:id",
    methods: [
      "DELETE",
      "PUT"
    ]
  },
  {
    path: "/api/admin/settings/download-clients",
    methods: [
      "GET",
      "POST"
    ]
  },
  {
    path: "/api/admin/settings/download-clients/test",
    methods: [
      "POST"
    ]
  },
  {
    path: "/api/admin/settings/ebook",
    methods: [
      "PUT"
    ]
  },
  {
    path: "/api/admin/settings/ebook/test-flaresolverr",
    methods: [
      "POST"
    ]
  },
  {
    path: "/api/admin/settings/interactive-search",
    methods: [
      "GET",
      "PATCH"
    ]
  },
  {
    path: "/api/admin/settings/oidc",
    methods: [
      "PUT"
    ]
  },
  {
    path: "/api/admin/settings/paths",
    methods: [
      "PUT"
    ]
  },
  {
    path: "/api/admin/settings/plex/libraries",
    methods: [
      "GET"
    ]
  },
  {
    path: "/api/admin/settings/plex",
    methods: [
      "PUT"
    ]
  },
  {
    path: "/api/admin/settings/prowlarr/indexers",
    methods: [
      "GET",
      "PUT"
    ]
  },
  {
    path: "/api/admin/settings/prowlarr",
    methods: [
      "PUT"
    ]
  },
  {
    path: "/api/admin/settings/registration",
    methods: [
      "PUT"
    ]
  },
  {
    path: "/api/admin/settings",
    methods: [
      "GET"
    ]
  },
  {
    path: "/api/admin/settings/test-download-client",
    methods: [
      "POST"
    ]
  },
  {
    path: "/api/admin/settings/test-plex",
    methods: [
      "POST"
    ]
  },
  {
    path: "/api/admin/settings/test-prowlarr",
    methods: [
      "POST"
    ]
  },
  {
    path: "/api/admin/users/:id/approve",
    methods: [
      "POST"
    ]
  },
  {
    path: "/api/admin/users/:id/login-token",
    methods: [
      "DELETE",
      "POST"
    ]
  },
  {
    path: "/api/admin/users/:id",
    methods: [
      "DELETE",
      "PUT"
    ]
  },
  {
    path: "/api/admin/users/pending",
    methods: [
      "GET"
    ]
  },
  {
    path: "/api/admin/users",
    methods: [
      "GET"
    ]
  },
  {
    path: "/api/audible/categories",
    methods: [
      "GET"
    ]
  },
  {
    path: "/api/audiobooks/:asin/download-status",
    methods: [
      "GET"
    ]
  },
  {
    path: "/api/audiobooks/:asin/ebook-status",
    methods: [
      "GET"
    ]
  },
  {
    path: "/api/audiobooks/:asin/fetch-ebook",
    methods: [
      "POST"
    ]
  },
  {
    path: "/api/audiobooks/:asin/interactive-search-ebook",
    methods: [
      "POST"
    ]
  },
  {
    path: "/api/audiobooks/:asin/report-issue",
    methods: [
      "POST"
    ]
  },
  {
    path: "/api/audiobooks/:asin",
    methods: [
      "GET"
    ]
  },
  {
    path: "/api/audiobooks/:asin/select-ebook",
    methods: [
      "POST"
    ]
  },
  {
    path: "/api/audiobooks/category/:categoryId",
    methods: [
      "GET"
    ]
  },
  {
    path: "/api/audiobooks/covers",
    methods: [
      "GET"
    ]
  },
  {
    path: "/api/audiobooks/new-releases",
    methods: [
      "GET"
    ]
  },
  {
    path: "/api/audiobooks/popular",
    methods: [
      "GET"
    ]
  },
  {
    path: "/api/audiobooks/request-with-torrent",
    methods: [
      "POST"
    ]
  },
  {
    path: "/api/audiobooks/search",
    methods: [
      "GET"
    ]
  },
  {
    path: "/api/audiobooks/search-torrents",
    methods: [
      "POST"
    ]
  },
  {
    path: "/api/auth/admin/login",
    methods: [
      "POST"
    ]
  },
  {
    path: "/api/auth/change-password",
    methods: [
      "POST"
    ]
  },
  {
    path: "/api/auth/is-local-admin",
    methods: [
      "GET"
    ]
  },
  {
    path: "/api/auth/local/login",
    methods: [
      "POST"
    ]
  },
  {
    path: "/api/auth/logout",
    methods: [
      "POST"
    ]
  },
  {
    path: "/api/auth/me",
    methods: [
      "GET"
    ]
  },
  {
    path: "/api/auth/oidc/callback",
    methods: [
      "GET"
    ]
  },
  {
    path: "/api/auth/oidc/login",
    methods: [
      "GET"
    ]
  },
  {
    path: "/api/authors/:asin/books",
    methods: [
      "GET"
    ]
  },
  {
    path: "/api/authors/:asin",
    methods: [
      "GET"
    ]
  },
  {
    path: "/api/authors/search",
    methods: [
      "GET"
    ]
  },
  {
    path: "/api/auth/plex/callback",
    methods: [
      "GET"
    ]
  },
  {
    path: "/api/auth/plex/home-users",
    methods: [
      "GET"
    ]
  },
  {
    path: "/api/auth/plex/login",
    methods: [
      "POST"
    ]
  },
  {
    path: "/api/auth/plex/switch-profile",
    methods: [
      "POST"
    ]
  },
  {
    path: "/api/auth/providers",
    methods: [
      "GET"
    ]
  },
  {
    path: "/api/auth/refresh",
    methods: [
      "POST"
    ]
  },
  {
    path: "/api/auth/register",
    methods: [
      "POST"
    ]
  },
  {
    path: "/api/auth/token/login",
    methods: [
      "POST"
    ]
  },
  {
    path: "/api/bookdate/config",
    methods: [
      "DELETE",
      "GET",
      "POST"
    ]
  },
  {
    path: "/api/bookdate/generate",
    methods: [
      "POST"
    ]
  },
  {
    path: "/api/bookdate/library",
    methods: [
      "GET"
    ]
  },
  {
    path: "/api/bookdate/preferences",
    methods: [
      "GET",
      "PUT"
    ]
  },
  {
    path: "/api/bookdate/recommendations",
    methods: [
      "GET"
    ]
  },
  {
    path: "/api/bookdate/swipe",
    methods: [
      "POST"
    ]
  },
  {
    path: "/api/bookdate/swipes",
    methods: [
      "DELETE"
    ]
  },
  {
    path: "/api/bookdate/test-connection",
    methods: [
      "POST"
    ]
  },
  {
    path: "/api/bookdate/undo",
    methods: [
      "POST"
    ]
  },
  {
    path: "/api/cache/library/:filename",
    methods: [
      "GET"
    ]
  },
  {
    path: "/api/cache/thumbnails/:filename",
    methods: [
      "GET"
    ]
  },
  {
    path: "/api/health",
    methods: [
      "GET"
    ]
  },
  {
    path: "/api/init",
    methods: [
      "GET"
    ]
  },
  {
    path: "/api/requests/:id/download",
    methods: [
      "GET"
    ]
  },
  {
    path: "/api/requests/:id/download-token",
    methods: [
      "POST"
    ]
  },
  {
    path: "/api/requests/:id/fetch-ebook",
    methods: [
      "POST"
    ]
  },
  {
    path: "/api/requests/:id/interactive-search-ebook",
    methods: [
      "POST"
    ]
  },
  {
    path: "/api/requests/:id/interactive-search",
    methods: [
      "POST"
    ]
  },
  {
    path: "/api/requests/:id/manual-search",
    methods: [
      "POST"
    ]
  },
  {
    path: "/api/requests/:id",
    methods: [
      "DELETE",
      "GET",
      "PATCH"
    ]
  },
  {
    path: "/api/requests/:id/select-ebook",
    methods: [
      "POST"
    ]
  },
  {
    path: "/api/requests/:id/select-torrent",
    methods: [
      "POST"
    ]
  },
  {
    path: "/api/requests",
    methods: [
      "GET",
      "POST"
    ]
  },
  {
    path: "/api/series/:asin",
    methods: [
      "GET"
    ]
  },
  {
    path: "/api/series/search",
    methods: [
      "GET"
    ]
  },
  {
    path: "/api/setup/complete",
    methods: [
      "POST"
    ]
  },
  {
    path: "/api/setup/download-client-categories",
    methods: [
      "POST"
    ]
  },
  {
    path: "/api/setup/status",
    methods: [
      "GET"
    ]
  },
  {
    path: "/api/setup/test-abs",
    methods: [
      "POST"
    ]
  },
  {
    path: "/api/setup/test-download-client",
    methods: [
      "POST"
    ]
  },
  {
    path: "/api/setup/test-oidc",
    methods: [
      "POST"
    ]
  },
  {
    path: "/api/setup/test-paths",
    methods: [
      "POST"
    ]
  },
  {
    path: "/api/setup/test-plex",
    methods: [
      "POST"
    ]
  },
  {
    path: "/api/setup/test-prowlarr",
    methods: [
      "POST"
    ]
  },
  {
    path: "/api/user/api-tokens/:id",
    methods: [
      "DELETE"
    ]
  },
  {
    path: "/api/user/api-tokens",
    methods: [
      "GET",
      "POST"
    ]
  },
  {
    path: "/api/user/goodreads-shelves/:id",
    methods: [
      "DELETE",
      "PATCH"
    ]
  },
  {
    path: "/api/user/goodreads-shelves",
    methods: [
      "GET",
      "POST"
    ]
  },
  {
    path: "/api/user/hardcover-shelves/:id",
    methods: [
      "DELETE",
      "PATCH"
    ]
  },
  {
    path: "/api/user/hardcover-shelves",
    methods: [
      "GET",
      "POST"
    ]
  },
  {
    path: "/api/user/home-sections",
    methods: [
      "GET",
      "PUT"
    ]
  },
  {
    path: "/api/user/ignored-audiobooks/check/:asin",
    methods: [
      "GET"
    ]
  },
  {
    path: "/api/user/ignored-audiobooks/:id",
    methods: [
      "DELETE"
    ]
  },
  {
    path: "/api/user/ignored-audiobooks",
    methods: [
      "GET",
      "POST"
    ]
  },
  {
    path: "/api/user/shelves",
    methods: [
      "GET"
    ]
  },
  {
    path: "/api/user/shelves/sync",
    methods: [
      "POST"
    ]
  },
  {
    path: "/api/user/watched-authors/:id",
    methods: [
      "DELETE"
    ]
  },
  {
    path: "/api/user/watched-authors",
    methods: [
      "GET",
      "POST"
    ]
  },
  {
    path: "/api/user/watched-series/:id",
    methods: [
      "DELETE"
    ]
  },
  {
    path: "/api/user/watched-series",
    methods: [
      "GET",
      "POST"
    ]
  },
  {
    path: "/api/version",
    methods: [
      "GET"
    ]
  }
];

// demo/src/services/rmab-page-manifest.ts
var RMAB_PAGE_ROUTES = [
  {
    route: "/",
    source: "src/app/page.tsx"
  },
  {
    route: "/admin",
    source: "src/app/admin/page.tsx"
  },
  {
    route: "/admin/jobs",
    source: "src/app/admin/jobs/page.tsx"
  },
  {
    route: "/admin/logs",
    source: "src/app/admin/logs/page.tsx"
  },
  {
    route: "/admin/settings",
    source: "src/app/admin/settings/page.tsx"
  },
  {
    route: "/admin/users",
    source: "src/app/admin/users/page.tsx"
  },
  {
    route: "/api-docs",
    source: "src/app/api-docs/page.tsx"
  },
  {
    route: "/authors",
    source: "src/app/authors/page.tsx"
  },
  {
    route: "/authors/:asin",
    source: "src/app/authors/[asin]/page.tsx"
  },
  {
    route: "/auth/select-profile",
    source: "src/app/auth/select-profile/page.tsx"
  },
  {
    route: "/auth/token/login",
    source: "src/app/auth/token/login/page.tsx"
  },
  {
    route: "/bookdate",
    source: "src/app/bookdate/page.tsx"
  },
  {
    route: "/login",
    source: "src/app/login/page.tsx"
  },
  {
    route: "/profile",
    source: "src/app/profile/page.tsx"
  },
  {
    route: "/requests",
    source: "src/app/requests/page.tsx"
  },
  {
    route: "/search",
    source: "src/app/search/page.tsx"
  },
  {
    route: "/series",
    source: "src/app/series/page.tsx"
  },
  {
    route: "/series/:asin",
    source: "src/app/series/[asin]/page.tsx"
  },
  {
    route: "/setup",
    source: "src/app/setup/page.tsx"
  },
  {
    route: "/setup/initializing",
    source: "src/app/setup/initializing/page.tsx"
  }
];

// demo/src/services/rmab-service.ts
function deepClone(value) {
  return structuredClone(value);
}
function normalizePath(path) {
  return path.split("?")[0].replace(/\/+$/, "") || "/";
}
function toEndpointPattern(endpoint) {
  const source = endpoint.path.replace(/[.*+?^${}()|[\]\\]/g, "\\$&").replace(/:([A-Za-z0-9_]+)\*/g, "(?<$1>.+)").replace(/:([A-Za-z0-9_]+)/g, "(?<$1>[^/]+)");
  return {
    ...endpoint,
    regexp: new RegExp(`^${source}$`)
  };
}
var RmabStubService = class {
  latencyMs;
  patterns;
  constructor(latencyMs = 90) {
    this.latencyMs = latencyMs;
    this.patterns = RMAB_API_ENDPOINTS.map(toEndpointPattern);
  }
  async simulateLatency() {
    await new Promise((resolve) => setTimeout(resolve, this.latencyMs));
  }
  async getHomeData() {
    await this.simulateLatency();
    return deepClone(HOME_STUB);
  }
  async getAdminDashboardData() {
    await this.simulateLatency();
    return deepClone(DASHBOARD_STUB);
  }
  async getRecentRequests() {
    await this.simulateLatency();
    return deepClone(REQUESTS_STUB);
  }
  async searchAudiobooks(query) {
    await this.simulateLatency();
    const q3 = query.trim().toLowerCase();
    const all = [
      ...HOME_STUB.popular,
      ...HOME_STUB.newReleases
    ];
    const unique = Array.from(new Map(all.map((book) => [
      book.asin,
      book
    ])).values());
    const filtered = q3 ? unique.filter((book) => `${book.title} ${book.author}`.toLowerCase().includes(q3)) : [];
    return {
      query,
      total: filtered.length,
      results: deepClone(filtered)
    };
  }
  async getApiManifest() {
    await this.simulateLatency();
    return deepClone(RMAB_API_ENDPOINTS);
  }
  async getPageManifest() {
    await this.simulateLatency();
    return deepClone(RMAB_PAGE_ROUTES);
  }
  async request(path, method, query = {}) {
    await this.simulateLatency();
    const cleanPath = normalizePath(path);
    const endpoint = this.patterns.find((candidate) => candidate.regexp.test(cleanPath));
    if (!endpoint) {
      return {
        ok: false,
        status: 404,
        path: cleanPath,
        method,
        data: {
          message: "Stub endpoint not found"
        }
      };
    }
    if (!endpoint.methods.includes(method)) {
      return {
        ok: false,
        status: 405,
        path: cleanPath,
        method,
        data: {
          message: "Method not allowed",
          allowed: endpoint.methods
        }
      };
    }
    const data = this.resolveData(cleanPath, method, query);
    return {
      ok: true,
      status: 200,
      path: cleanPath,
      method,
      data
    };
  }
  resolveData(path, method, query) {
    if (path === "/api/admin/metrics" && method === "GET") {
      return {
        metrics: deepClone(DASHBOARD_STUB.metrics)
      };
    }
    if (path === "/api/admin/downloads/active" && method === "GET") {
      return {
        downloads: deepClone(DASHBOARD_STUB.activeDownloads)
      };
    }
    if (path === "/api/admin/requests/recent" && method === "GET") {
      return {
        requests: deepClone(DASHBOARD_STUB.recentRequests),
        total: DASHBOARD_STUB.recentRequests.length
      };
    }
    if (path === "/api/admin/reported-issues" && method === "GET") {
      return {
        issues: deepClone(DASHBOARD_STUB.reportedIssues),
        total: DASHBOARD_STUB.reportedIssues.length
      };
    }
    if (path === "/api/audiobooks/popular" && method === "GET") {
      return {
        books: deepClone(HOME_STUB.popular),
        total: HOME_STUB.popular.length
      };
    }
    if (path === "/api/audiobooks/new-releases" && method === "GET") {
      return {
        books: deepClone(HOME_STUB.newReleases),
        total: HOME_STUB.newReleases.length
      };
    }
    if (path === "/api/audiobooks/search" && method === "GET") {
      const q3 = query.q ?? query.query ?? "";
      const all = [
        ...HOME_STUB.popular,
        ...HOME_STUB.newReleases
      ];
      const results = q3 ? all.filter((book) => `${book.title} ${book.author}`.toLowerCase().includes(q3.toLowerCase())) : [];
      return {
        results: deepClone(results),
        totalResults: results.length
      };
    }
    if (path === "/api/user/home-sections" && method === "GET") {
      return deepClone(HOME_SECTIONS_STUB);
    }
    if (path === "/api/version" && method === "GET") {
      return deepClone(VERSION_STUB);
    }
    return {
      stub: true,
      parity: "route-signature",
      message: "Endpoint is represented in local parity mode with generic stub data.",
      path,
      method,
      query
    };
  }
};
var rmabService = new RmabStubService();

// demo/src/services/resources.ts
var homeDataResource = resource(async () => rmabService.getHomeData());
var adminDashboardResource = resource(async () => rmabService.getAdminDashboardData());
var requestsResource = resource(async () => rmabService.getRecentRequests());
var apiManifestResource = resource(async () => rmabService.getApiManifest());
var pageManifestResource = resource(async () => rmabService.getPageManifest());

// ../../../../../../home/majora/.cache/deno/npm/registry.npmjs.org/preact/10.28.3/dist/preact.module.js
var n6;
var l4;
var u4;
var t6;
var i7;
var o7;
var r8;
var e7;
var f5;
var c5;
var s5;
var a4;
var h4;
var p4 = {};
var v3 = [];
var y4 = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
var d4 = Array.isArray;
function w3(n7, l7) {
  for (var u6 in l7) n7[u6] = l7[u6];
  return n7;
}
function g3(n7) {
  n7 && n7.parentNode && n7.parentNode.removeChild(n7);
}
function m3(n7, t8, i9, o9, r10) {
  var e9 = {
    type: n7,
    props: t8,
    key: i9,
    ref: o9,
    __k: null,
    __: null,
    __b: 0,
    __e: null,
    __c: null,
    constructor: void 0,
    __v: null == r10 ? ++u4 : r10,
    __i: -1,
    __u: 0
  };
  return null == r10 && null != l4.vnode && l4.vnode(e9), e9;
}
function k2(n7) {
  return n7.children;
}
function x2(n7, l7) {
  this.props = n7, this.context = l7;
}
function S4(n7, l7) {
  if (null == l7) return n7.__ ? S4(n7.__, n7.__i + 1) : null;
  for (var u6; l7 < n7.__k.length; l7++) if (null != (u6 = n7.__k[l7]) && null != u6.__e) return u6.__e;
  return "function" == typeof n7.type ? S4(n7) : null;
}
function C2(n7) {
  var l7, u6;
  if (null != (n7 = n7.__) && null != n7.__c) {
    for (n7.__e = n7.__c.base = null, l7 = 0; l7 < n7.__k.length; l7++) if (null != (u6 = n7.__k[l7]) && null != u6.__e) {
      n7.__e = n7.__c.base = u6.__e;
      break;
    }
    return C2(n7);
  }
}
function M2(n7) {
  (!n7.__d && (n7.__d = true) && i7.push(n7) && !$2.__r++ || o7 != l4.debounceRendering) && ((o7 = l4.debounceRendering) || r8)($2);
}
function $2() {
  for (var n7, u6, t8, o9, r10, f7, c7, s7 = 1; i7.length; ) i7.length > s7 && i7.sort(e7), n7 = i7.shift(), s7 = i7.length, n7.__d && (t8 = void 0, o9 = void 0, r10 = (o9 = (u6 = n7).__v).__e, f7 = [], c7 = [], u6.__P && ((t8 = w3({}, o9)).__v = o9.__v + 1, l4.vnode && l4.vnode(t8), O(u6.__P, t8, o9, u6.__n, u6.__P.namespaceURI, 32 & o9.__u ? [
    r10
  ] : null, f7, null == r10 ? S4(o9) : r10, !!(32 & o9.__u), c7), t8.__v = o9.__v, t8.__.__k[t8.__i] = t8, N2(f7, t8, c7), o9.__e = o9.__ = null, t8.__e != r10 && C2(t8)));
  $2.__r = 0;
}
function I2(n7, l7, u6, t8, i9, o9, r10, e9, f7, c7, s7) {
  var a6, h6, y7, d6, w6, g5, _4, m5 = t8 && t8.__k || v3, b5 = l7.length;
  for (f7 = P2(u6, l7, m5, f7, b5), a6 = 0; a6 < b5; a6++) null != (y7 = u6.__k[a6]) && (h6 = -1 == y7.__i ? p4 : m5[y7.__i] || p4, y7.__i = a6, g5 = O(n7, y7, h6, i9, o9, r10, e9, f7, c7, s7), d6 = y7.__e, y7.ref && h6.ref != y7.ref && (h6.ref && B2(h6.ref, null, y7), s7.push(y7.ref, y7.__c || d6, y7)), null == w6 && null != d6 && (w6 = d6), (_4 = !!(4 & y7.__u)) || h6.__k === y7.__k ? f7 = A2(y7, f7, n7, _4) : "function" == typeof y7.type && void 0 !== g5 ? f7 = g5 : d6 && (f7 = d6.nextSibling), y7.__u &= -7);
  return u6.__e = w6, f7;
}
function P2(n7, l7, u6, t8, i9) {
  var o9, r10, e9, f7, c7, s7 = u6.length, a6 = s7, h6 = 0;
  for (n7.__k = new Array(i9), o9 = 0; o9 < i9; o9++) null != (r10 = l7[o9]) && "boolean" != typeof r10 && "function" != typeof r10 ? ("string" == typeof r10 || "number" == typeof r10 || "bigint" == typeof r10 || r10.constructor == String ? r10 = n7.__k[o9] = m3(null, r10, null, null, null) : d4(r10) ? r10 = n7.__k[o9] = m3(k2, {
    children: r10
  }, null, null, null) : void 0 === r10.constructor && r10.__b > 0 ? r10 = n7.__k[o9] = m3(r10.type, r10.props, r10.key, r10.ref ? r10.ref : null, r10.__v) : n7.__k[o9] = r10, f7 = o9 + h6, r10.__ = n7, r10.__b = n7.__b + 1, e9 = null, -1 != (c7 = r10.__i = L2(r10, u6, f7, a6)) && (a6--, (e9 = u6[c7]) && (e9.__u |= 2)), null == e9 || null == e9.__v ? (-1 == c7 && (i9 > s7 ? h6-- : i9 < s7 && h6++), "function" != typeof r10.type && (r10.__u |= 4)) : c7 != f7 && (c7 == f7 - 1 ? h6-- : c7 == f7 + 1 ? h6++ : (c7 > f7 ? h6-- : h6++, r10.__u |= 4))) : n7.__k[o9] = null;
  if (a6) for (o9 = 0; o9 < s7; o9++) null != (e9 = u6[o9]) && 0 == (2 & e9.__u) && (e9.__e == t8 && (t8 = S4(e9)), D2(e9, e9));
  return t8;
}
function A2(n7, l7, u6, t8) {
  var i9, o9;
  if ("function" == typeof n7.type) {
    for (i9 = n7.__k, o9 = 0; i9 && o9 < i9.length; o9++) i9[o9] && (i9[o9].__ = n7, l7 = A2(i9[o9], l7, u6, t8));
    return l7;
  }
  n7.__e != l7 && (t8 && (l7 && n7.type && !l7.parentNode && (l7 = S4(n7)), u6.insertBefore(n7.__e, l7 || null)), l7 = n7.__e);
  do {
    l7 = l7 && l7.nextSibling;
  } while (null != l7 && 8 == l7.nodeType);
  return l7;
}
function L2(n7, l7, u6, t8) {
  var i9, o9, r10, e9 = n7.key, f7 = n7.type, c7 = l7[u6], s7 = null != c7 && 0 == (2 & c7.__u);
  if (null === c7 && null == e9 || s7 && e9 == c7.key && f7 == c7.type) return u6;
  if (t8 > (s7 ? 1 : 0)) {
    for (i9 = u6 - 1, o9 = u6 + 1; i9 >= 0 || o9 < l7.length; ) if (null != (c7 = l7[r10 = i9 >= 0 ? i9-- : o9++]) && 0 == (2 & c7.__u) && e9 == c7.key && f7 == c7.type) return r10;
  }
  return -1;
}
function T2(n7, l7, u6) {
  "-" == l7[0] ? n7.setProperty(l7, null == u6 ? "" : u6) : n7[l7] = null == u6 ? "" : "number" != typeof u6 || y4.test(l7) ? u6 : u6 + "px";
}
function j2(n7, l7, u6, t8, i9) {
  var o9, r10;
  n: if ("style" == l7) if ("string" == typeof u6) n7.style.cssText = u6;
  else {
    if ("string" == typeof t8 && (n7.style.cssText = t8 = ""), t8) for (l7 in t8) u6 && l7 in u6 || T2(n7.style, l7, "");
    if (u6) for (l7 in u6) t8 && u6[l7] == t8[l7] || T2(n7.style, l7, u6[l7]);
  }
  else if ("o" == l7[0] && "n" == l7[1]) o9 = l7 != (l7 = l7.replace(f5, "$1")), r10 = l7.toLowerCase(), l7 = r10 in n7 || "onFocusOut" == l7 || "onFocusIn" == l7 ? r10.slice(2) : l7.slice(2), n7.l || (n7.l = {}), n7.l[l7 + o9] = u6, u6 ? t8 ? u6.u = t8.u : (u6.u = c5, n7.addEventListener(l7, o9 ? a4 : s5, o9)) : n7.removeEventListener(l7, o9 ? a4 : s5, o9);
  else {
    if ("http://www.w3.org/2000/svg" == i9) l7 = l7.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
    else if ("width" != l7 && "height" != l7 && "href" != l7 && "list" != l7 && "form" != l7 && "tabIndex" != l7 && "download" != l7 && "rowSpan" != l7 && "colSpan" != l7 && "role" != l7 && "popover" != l7 && l7 in n7) try {
      n7[l7] = null == u6 ? "" : u6;
      break n;
    } catch (n8) {
    }
    "function" == typeof u6 || (null == u6 || false === u6 && "-" != l7[4] ? n7.removeAttribute(l7) : n7.setAttribute(l7, "popover" == l7 && 1 == u6 ? "" : u6));
  }
}
function F(n7) {
  return function(u6) {
    if (this.l) {
      var t8 = this.l[u6.type + n7];
      if (null == u6.t) u6.t = c5++;
      else if (u6.t < t8.u) return;
      return t8(l4.event ? l4.event(u6) : u6);
    }
  };
}
function O(n7, u6, t8, i9, o9, r10, e9, f7, c7, s7) {
  var a6, h6, p7, v5, y7, _4, m5, b5, S5, C5, M3, $3, P3, A4, H2, L3, T4, j4 = u6.type;
  if (void 0 !== u6.constructor) return null;
  128 & t8.__u && (c7 = !!(32 & t8.__u), r10 = [
    f7 = u6.__e = t8.__e
  ]), (a6 = l4.__b) && a6(u6);
  n: if ("function" == typeof j4) try {
    if (b5 = u6.props, S5 = "prototype" in j4 && j4.prototype.render, C5 = (a6 = j4.contextType) && i9[a6.__c], M3 = a6 ? C5 ? C5.props.value : a6.__ : i9, t8.__c ? m5 = (h6 = u6.__c = t8.__c).__ = h6.__E : (S5 ? u6.__c = h6 = new j4(b5, M3) : (u6.__c = h6 = new x2(b5, M3), h6.constructor = j4, h6.render = E2), C5 && C5.sub(h6), h6.state || (h6.state = {}), h6.__n = i9, p7 = h6.__d = true, h6.__h = [], h6._sb = []), S5 && null == h6.__s && (h6.__s = h6.state), S5 && null != j4.getDerivedStateFromProps && (h6.__s == h6.state && (h6.__s = w3({}, h6.__s)), w3(h6.__s, j4.getDerivedStateFromProps(b5, h6.__s))), v5 = h6.props, y7 = h6.state, h6.__v = u6, p7) S5 && null == j4.getDerivedStateFromProps && null != h6.componentWillMount && h6.componentWillMount(), S5 && null != h6.componentDidMount && h6.__h.push(h6.componentDidMount);
    else {
      if (S5 && null == j4.getDerivedStateFromProps && b5 !== v5 && null != h6.componentWillReceiveProps && h6.componentWillReceiveProps(b5, M3), u6.__v == t8.__v || !h6.__e && null != h6.shouldComponentUpdate && false === h6.shouldComponentUpdate(b5, h6.__s, M3)) {
        for (u6.__v != t8.__v && (h6.props = b5, h6.state = h6.__s, h6.__d = false), u6.__e = t8.__e, u6.__k = t8.__k, u6.__k.some(function(n8) {
          n8 && (n8.__ = u6);
        }), $3 = 0; $3 < h6._sb.length; $3++) h6.__h.push(h6._sb[$3]);
        h6._sb = [], h6.__h.length && e9.push(h6);
        break n;
      }
      null != h6.componentWillUpdate && h6.componentWillUpdate(b5, h6.__s, M3), S5 && null != h6.componentDidUpdate && h6.__h.push(function() {
        h6.componentDidUpdate(v5, y7, _4);
      });
    }
    if (h6.context = M3, h6.props = b5, h6.__P = n7, h6.__e = false, P3 = l4.__r, A4 = 0, S5) {
      for (h6.state = h6.__s, h6.__d = false, P3 && P3(u6), a6 = h6.render(h6.props, h6.state, h6.context), H2 = 0; H2 < h6._sb.length; H2++) h6.__h.push(h6._sb[H2]);
      h6._sb = [];
    } else do {
      h6.__d = false, P3 && P3(u6), a6 = h6.render(h6.props, h6.state, h6.context), h6.state = h6.__s;
    } while (h6.__d && ++A4 < 25);
    h6.state = h6.__s, null != h6.getChildContext && (i9 = w3(w3({}, i9), h6.getChildContext())), S5 && !p7 && null != h6.getSnapshotBeforeUpdate && (_4 = h6.getSnapshotBeforeUpdate(v5, y7)), L3 = a6, null != a6 && a6.type === k2 && null == a6.key && (L3 = V2(a6.props.children)), f7 = I2(n7, d4(L3) ? L3 : [
      L3
    ], u6, t8, i9, o9, r10, e9, f7, c7, s7), h6.base = u6.__e, u6.__u &= -161, h6.__h.length && e9.push(h6), m5 && (h6.__E = h6.__ = null);
  } catch (n8) {
    if (u6.__v = null, c7 || null != r10) if (n8.then) {
      for (u6.__u |= c7 ? 160 : 128; f7 && 8 == f7.nodeType && f7.nextSibling; ) f7 = f7.nextSibling;
      r10[r10.indexOf(f7)] = null, u6.__e = f7;
    } else {
      for (T4 = r10.length; T4--; ) g3(r10[T4]);
      z2(u6);
    }
    else u6.__e = t8.__e, u6.__k = t8.__k, n8.then || z2(u6);
    l4.__e(n8, u6, t8);
  }
  else null == r10 && u6.__v == t8.__v ? (u6.__k = t8.__k, u6.__e = t8.__e) : f7 = u6.__e = q(t8.__e, u6, t8, i9, o9, r10, e9, c7, s7);
  return (a6 = l4.diffed) && a6(u6), 128 & u6.__u ? void 0 : f7;
}
function z2(n7) {
  n7 && n7.__c && (n7.__c.__e = true), n7 && n7.__k && n7.__k.forEach(z2);
}
function N2(n7, u6, t8) {
  for (var i9 = 0; i9 < t8.length; i9++) B2(t8[i9], t8[++i9], t8[++i9]);
  l4.__c && l4.__c(u6, n7), n7.some(function(u7) {
    try {
      n7 = u7.__h, u7.__h = [], n7.some(function(n8) {
        n8.call(u7);
      });
    } catch (n8) {
      l4.__e(n8, u7.__v);
    }
  });
}
function V2(n7) {
  return "object" != typeof n7 || null == n7 || n7.__b && n7.__b > 0 ? n7 : d4(n7) ? n7.map(V2) : w3({}, n7);
}
function q(u6, t8, i9, o9, r10, e9, f7, c7, s7) {
  var a6, h6, v5, y7, w6, _4, m5, b5 = i9.props || p4, k4 = t8.props, x4 = t8.type;
  if ("svg" == x4 ? r10 = "http://www.w3.org/2000/svg" : "math" == x4 ? r10 = "http://www.w3.org/1998/Math/MathML" : r10 || (r10 = "http://www.w3.org/1999/xhtml"), null != e9) {
    for (a6 = 0; a6 < e9.length; a6++) if ((w6 = e9[a6]) && "setAttribute" in w6 == !!x4 && (x4 ? w6.localName == x4 : 3 == w6.nodeType)) {
      u6 = w6, e9[a6] = null;
      break;
    }
  }
  if (null == u6) {
    if (null == x4) return document.createTextNode(k4);
    u6 = document.createElementNS(r10, x4, k4.is && k4), c7 && (l4.__m && l4.__m(t8, e9), c7 = false), e9 = null;
  }
  if (null == x4) b5 === k4 || c7 && u6.data == k4 || (u6.data = k4);
  else {
    if (e9 = e9 && n6.call(u6.childNodes), !c7 && null != e9) for (b5 = {}, a6 = 0; a6 < u6.attributes.length; a6++) b5[(w6 = u6.attributes[a6]).name] = w6.value;
    for (a6 in b5) if (w6 = b5[a6], "children" == a6) ;
    else if ("dangerouslySetInnerHTML" == a6) v5 = w6;
    else if (!(a6 in k4)) {
      if ("value" == a6 && "defaultValue" in k4 || "checked" == a6 && "defaultChecked" in k4) continue;
      j2(u6, a6, null, w6, r10);
    }
    for (a6 in k4) w6 = k4[a6], "children" == a6 ? y7 = w6 : "dangerouslySetInnerHTML" == a6 ? h6 = w6 : "value" == a6 ? _4 = w6 : "checked" == a6 ? m5 = w6 : c7 && "function" != typeof w6 || b5[a6] === w6 || j2(u6, a6, w6, b5[a6], r10);
    if (h6) c7 || v5 && (h6.__html == v5.__html || h6.__html == u6.innerHTML) || (u6.innerHTML = h6.__html), t8.__k = [];
    else if (v5 && (u6.innerHTML = ""), I2("template" == t8.type ? u6.content : u6, d4(y7) ? y7 : [
      y7
    ], t8, i9, o9, "foreignObject" == x4 ? "http://www.w3.org/1999/xhtml" : r10, e9, f7, e9 ? e9[0] : i9.__k && S4(i9, 0), c7, s7), null != e9) for (a6 = e9.length; a6--; ) g3(e9[a6]);
    c7 || (a6 = "value", "progress" == x4 && null == _4 ? u6.removeAttribute("value") : null != _4 && (_4 !== u6[a6] || "progress" == x4 && !_4 || "option" == x4 && _4 != b5[a6]) && j2(u6, a6, _4, b5[a6], r10), a6 = "checked", null != m5 && m5 != u6[a6] && j2(u6, a6, m5, b5[a6], r10));
  }
  return u6;
}
function B2(n7, u6, t8) {
  try {
    if ("function" == typeof n7) {
      var i9 = "function" == typeof n7.__u;
      i9 && n7.__u(), i9 && null == u6 || (n7.__u = n7(u6));
    } else n7.current = u6;
  } catch (n8) {
    l4.__e(n8, t8);
  }
}
function D2(n7, u6, t8) {
  var i9, o9;
  if (l4.unmount && l4.unmount(n7), (i9 = n7.ref) && (i9.current && i9.current != n7.__e || B2(i9, null, u6)), null != (i9 = n7.__c)) {
    if (i9.componentWillUnmount) try {
      i9.componentWillUnmount();
    } catch (n8) {
      l4.__e(n8, u6);
    }
    i9.base = i9.__P = null;
  }
  if (i9 = n7.__k) for (o9 = 0; o9 < i9.length; o9++) i9[o9] && D2(i9[o9], u6, t8 || "function" != typeof n7.type);
  t8 || g3(n7.__e), n7.__c = n7.__ = n7.__e = void 0;
}
function E2(n7, l7, u6) {
  return this.constructor(n7, u6);
}
n6 = v3.slice, l4 = {
  __e: function(n7, l7, u6, t8) {
    for (var i9, o9, r10; l7 = l7.__; ) if ((i9 = l7.__c) && !i9.__) try {
      if ((o9 = i9.constructor) && null != o9.getDerivedStateFromError && (i9.setState(o9.getDerivedStateFromError(n7)), r10 = i9.__d), null != i9.componentDidCatch && (i9.componentDidCatch(n7, t8 || {}), r10 = i9.__d), r10) return i9.__E = i9;
    } catch (l8) {
      n7 = l8;
    }
    throw n7;
  }
}, u4 = 0, t6 = function(n7) {
  return null != n7 && void 0 === n7.constructor;
}, x2.prototype.setState = function(n7, l7) {
  var u6;
  u6 = null != this.__s && this.__s != this.state ? this.__s : this.__s = w3({}, this.state), "function" == typeof n7 && (n7 = n7(w3({}, u6), this.props)), n7 && w3(u6, n7), null != n7 && this.__v && (l7 && this._sb.push(l7), M2(this));
}, x2.prototype.forceUpdate = function(n7) {
  this.__v && (this.__e = true, n7 && this.__h.push(n7), M2(this));
}, x2.prototype.render = k2, i7 = [], r8 = "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, e7 = function(n7, l7) {
  return n7.__v.__b - l7.__v.__b;
}, $2.__r = 0, f5 = /(PointerCapture)$|Capture$/i, c5 = 0, s5 = F(false), a4 = F(true), h4 = 0;

// ../../../../../../home/majora/.cache/deno/npm/registry.npmjs.org/preact/10.28.3/hooks/dist/hooks.module.js
var t7;
var r9;
var u5;
var i8;
var o8 = 0;
var f6 = [];
var c6 = l4;
var e8 = c6.__b;
var a5 = c6.__r;
var v4 = c6.diffed;
var l5 = c6.__c;
var m4 = c6.unmount;
var s6 = c6.__;
function p5(n7, t8) {
  c6.__h && c6.__h(r9, n7, o8 || t8), o8 = 0;
  var u6 = r9.__H || (r9.__H = {
    __: [],
    __h: []
  });
  return n7 >= u6.__.length && u6.__.push({}), u6.__[n7];
}
function T3(n7, r10) {
  var u6 = p5(t7++, 7);
  return C3(u6.__H, r10) && (u6.__ = n7(), u6.__H = r10, u6.__h = n7), u6.__;
}
function j3() {
  for (var n7; n7 = f6.shift(); ) if (n7.__P && n7.__H) try {
    n7.__H.__h.forEach(z3), n7.__H.__h.forEach(B3), n7.__H.__h = [];
  } catch (t8) {
    n7.__H.__h = [], c6.__e(t8, n7.__v);
  }
}
c6.__b = function(n7) {
  r9 = null, e8 && e8(n7);
}, c6.__ = function(n7, t8) {
  n7 && t8.__k && t8.__k.__m && (n7.__m = t8.__k.__m), s6 && s6(n7, t8);
}, c6.__r = function(n7) {
  a5 && a5(n7), t7 = 0;
  var i9 = (r9 = n7.__c).__H;
  i9 && (u5 === r9 ? (i9.__h = [], r9.__h = [], i9.__.forEach(function(n8) {
    n8.__N && (n8.__ = n8.__N), n8.u = n8.__N = void 0;
  })) : (i9.__h.forEach(z3), i9.__h.forEach(B3), i9.__h = [], t7 = 0)), u5 = r9;
}, c6.diffed = function(n7) {
  v4 && v4(n7);
  var t8 = n7.__c;
  t8 && t8.__H && (t8.__H.__h.length && (1 !== f6.push(t8) && i8 === c6.requestAnimationFrame || ((i8 = c6.requestAnimationFrame) || w4)(j3)), t8.__H.__.forEach(function(n8) {
    n8.u && (n8.__H = n8.u), n8.u = void 0;
  })), u5 = r9 = null;
}, c6.__c = function(n7, t8) {
  t8.some(function(n8) {
    try {
      n8.__h.forEach(z3), n8.__h = n8.__h.filter(function(n9) {
        return !n9.__ || B3(n9);
      });
    } catch (r10) {
      t8.some(function(n9) {
        n9.__h && (n9.__h = []);
      }), t8 = [], c6.__e(r10, n8.__v);
    }
  }), l5 && l5(n7, t8);
}, c6.unmount = function(n7) {
  m4 && m4(n7);
  var t8, r10 = n7.__c;
  r10 && r10.__H && (r10.__H.__.forEach(function(n8) {
    try {
      z3(n8);
    } catch (n9) {
      t8 = n9;
    }
  }), r10.__H = void 0, t8 && c6.__e(t8, r10.__v));
};
var k3 = "function" == typeof requestAnimationFrame;
function w4(n7) {
  var t8, r10 = function() {
    clearTimeout(u6), k3 && cancelAnimationFrame(t8), setTimeout(n7);
  }, u6 = setTimeout(r10, 35);
  k3 && (t8 = requestAnimationFrame(r10));
}
function z3(n7) {
  var t8 = r9, u6 = n7.__c;
  "function" == typeof u6 && (n7.__c = void 0, u6()), r9 = t8;
}
function B3(n7) {
  var t8 = r9;
  n7.__c = n7.__(), r9 = t8;
}
function C3(n7, t8) {
  return !n7 || n7.length !== t8.length || t8.some(function(t9, r10) {
    return t9 !== n7[r10];
  });
}

// ../../../../../../home/majora/.cache/deno/npm/registry.npmjs.org/@preact/signals/2.8.0/dist/signals.module.js
var l6;
var h5;
var d5;
var p6 = "undefined" != typeof window && !!window.__PREACT_SIGNALS_DEVTOOLS__;
var _3 = [];
m(function() {
  l6 = this.N;
})();
function g4(i9, t8) {
  l4[i9] = t8.bind(null, l4[i9] || function() {
  });
}
function b4(i9) {
  if (d5) {
    var n7 = d5;
    d5 = void 0;
    n7();
  }
  d5 = i9 && i9.S();
}
function y6(i9) {
  var n7 = this, r10 = i9.data, f7 = useSignal(r10);
  f7.value = r10;
  var e9 = T3(function() {
    var i10 = n7, r11 = n7.__v;
    while (r11 = r11.__) if (r11.__c) {
      r11.__c.__$f |= 4;
      break;
    }
    var o9 = b(function() {
      var i11 = f7.value.value;
      return 0 === i11 ? 0 : true === i11 ? "" : i11 || "";
    }), e10 = b(function() {
      return !Array.isArray(o9.value) && !t6(o9.value);
    }), a7 = m(function() {
      this.N = F2;
      if (e10.value) {
        var n8 = o9.value;
        if (i10.__v && i10.__v.__e && 3 === i10.__v.__e.nodeType) i10.__v.__e.data = n8;
      }
    }), v6 = n7.__$u.d;
    n7.__$u.d = function() {
      a7();
      v6.call(this);
    };
    return [
      e10,
      o9
    ];
  }, []), a6 = e9[0], v5 = e9[1];
  return a6.value ? v5.peek() : v5.value;
}
y6.displayName = "ReactiveTextNode";
Object.defineProperties(d.prototype, {
  constructor: {
    configurable: true,
    value: void 0
  },
  type: {
    configurable: true,
    value: y6
  },
  props: {
    configurable: true,
    get: function() {
      return {
        data: this
      };
    }
  },
  __b: {
    configurable: true,
    value: 1
  }
});
g4("__b", function(i9, n7) {
  if ("string" == typeof n7.type) {
    var t8, r10 = n7.props;
    for (var o9 in r10) if ("children" !== o9) {
      var f7 = r10[o9];
      if (f7 instanceof d) {
        if (!t8) n7.__np = t8 = {};
        t8[o9] = f7;
        r10[o9] = f7.peek();
      }
    }
  }
  i9(n7);
});
g4("__r", function(i9, n7) {
  i9(n7);
  if (n7.type !== k2) {
    b4();
    var t8, o9 = n7.__c;
    if (o9) {
      o9.__$f &= -2;
      if (void 0 === (t8 = o9.__$u)) o9.__$u = t8 = function(i10, n8) {
        var t9;
        m(function() {
          t9 = this;
        }, {
          name: n8
        });
        t9.c = i10;
        return t9;
      }(function() {
        var i10;
        if (p6) null == (i10 = t8.y) || i10.call(t8);
        o9.__$f |= 1;
        o9.setState({});
      }, "function" == typeof n7.type ? n7.type.displayName || n7.type.name : "");
    }
    h5 = o9;
    b4(t8);
  }
});
g4("__e", function(i9, n7, t8, r10) {
  b4();
  h5 = void 0;
  i9(n7, t8, r10);
});
g4("diffed", function(i9, n7) {
  b4();
  h5 = void 0;
  var t8;
  if ("string" == typeof n7.type && (t8 = n7.__e)) {
    var r10 = n7.__np, o9 = n7.props;
    if (r10) {
      var f7 = t8.U;
      if (f7) for (var e9 in f7) {
        var u6 = f7[e9];
        if (void 0 !== u6 && !(e9 in r10)) {
          u6.d();
          f7[e9] = void 0;
        }
      }
      else {
        f7 = {};
        t8.U = f7;
      }
      for (var a6 in r10) {
        var c7 = f7[a6], v5 = r10[a6];
        if (void 0 === c7) {
          c7 = w5(t8, a6, v5, o9);
          f7[a6] = c7;
        } else c7.o(v5, o9);
      }
    }
  }
  i9(n7);
});
function w5(i9, n7, t8, r10) {
  var o9 = n7 in i9 && void 0 === i9.ownerSVGElement, f7 = c(t8);
  return {
    o: function(i10, n8) {
      f7.value = i10;
      r10 = n8;
    },
    d: m(function() {
      this.N = F2;
      var t9 = f7.value.value;
      if (r10[n7] !== t9) {
        r10[n7] = t9;
        if (o9) i9[n7] = t9;
        else if (null != t9 && (false !== t9 || "-" === n7[4])) i9.setAttribute(n7, t9);
        else i9.removeAttribute(n7);
      }
    })
  };
}
g4("unmount", function(i9, n7) {
  if ("string" == typeof n7.type) {
    var t8 = n7.__e;
    if (t8) {
      var r10 = t8.U;
      if (r10) {
        t8.U = void 0;
        for (var o9 in r10) {
          var f7 = r10[o9];
          if (f7) f7.d();
        }
      }
    }
  } else {
    var e9 = n7.__c;
    if (e9) {
      var u6 = e9.__$u;
      if (u6) {
        e9.__$u = void 0;
        u6.d();
      }
    }
  }
  i9(n7);
});
g4("__h", function(i9, n7, t8, r10) {
  if (r10 < 3 || 9 === r10) n7.__$f |= 2;
  i9(n7, t8, r10);
});
x2.prototype.shouldComponentUpdate = function(i9, n7) {
  if (this.__R) return true;
  var t8 = this.__$u, r10 = t8 && void 0 !== t8.s;
  for (var o9 in n7) return true;
  if (this.__f || "boolean" == typeof this.u && true === this.u) {
    var f7 = 2 & this.__$f;
    if (!(r10 || f7 || 4 & this.__$f)) return true;
    if (1 & this.__$f) return true;
  } else {
    if (!(r10 || 4 & this.__$f)) return true;
    if (3 & this.__$f) return true;
  }
  for (var e9 in i9) if ("__source" !== e9 && i9[e9] !== this.props[e9]) return true;
  for (var u6 in this.props) if (!(u6 in i9)) return true;
  return false;
};
function useSignal(i9, n7) {
  return T3(function() {
    return c(i9, n7);
  }, []);
}
var q2 = function(i9) {
  queueMicrotask(function() {
    queueMicrotask(i9);
  });
};
function x3() {
  n(function() {
    var i9;
    while (i9 = _3.shift()) l6.call(i9);
  });
}
function F2() {
  if (1 === _3.push(this)) (l4.requestAnimationFrame || q2)(x3);
}

// demo/src/app/state.ts
var hideAvailable = c(false);
var squareCovers = c(false);
var cardSize = c(5);
var searchQuery = c("");
var requestsFilter = c("all");
var theme = c(document.documentElement.dataset.theme === "dark" ? "dark" : "light");
var searchResultsResource = resource(async () => rmabService.searchAudiobooks(searchQuery.value));

// demo/src/app/bootstrap.ts
function bootstrapApp() {
  const savedTheme = localStorage.getItem("lv-demo-theme");
  if (savedTheme === "dark" || savedTheme === "light") {
    document.documentElement.dataset.theme = savedTheme;
    theme.value = savedTheme;
  }
  defineAllLvComponents();
  setRoutes([
    defineRoute("home", "/"),
    defineRoute("search", "/search"),
    defineRoute("requests", "/requests"),
    defineRoute("admin", "/admin")
  ]);
  startRouter({
    linkSelector: "a"
  });
  homeDataResource.run();
  adminDashboardResource.run();
  requestsResource.run();
  apiManifestResource.run();
  pageManifestResource.run();
  searchResultsResource.run();
}

// demo/src/app/helpers.ts
function navLinks() {
  const active = currentRoute.value?.name ?? "home";
  return [
    {
      label: "Home",
      href: "/",
      active: active === "home"
    },
    {
      label: "Search",
      href: "/search",
      active: active === "search"
    },
    {
      label: "Authors",
      href: "/authors"
    },
    {
      label: "Series",
      href: "/series"
    },
    {
      label: "My Requests",
      href: "/requests",
      active: active === "requests"
    },
    {
      label: "Admin",
      href: "/admin",
      active: active === "admin"
    }
  ];
}
function statusTone(status) {
  if ([
    "completed",
    "available",
    "downloaded"
  ].includes(status)) {
    return "success";
  }
  if ([
    "failed",
    "denied"
  ].includes(status)) return "danger";
  if ([
    "downloading",
    "processing",
    "awaiting_approval"
  ].includes(status)) {
    return "warning";
  }
  return "info";
}
function requestStatusGroup(status) {
  if ([
    "awaiting_search",
    "awaiting_approval",
    "pending"
  ].includes(status)) {
    return "waiting";
  }
  if ([
    "searching",
    "downloading",
    "processing",
    "awaiting_import"
  ].includes(status)) {
    return "active";
  }
  if ([
    "available",
    "completed",
    "downloaded"
  ].includes(status)) return "completed";
  if ([
    "failed",
    "denied"
  ].includes(status)) return "failed";
  return "cancelled";
}
function requestStatusLabel(status) {
  if (status === "awaiting_search") return "Awaiting Search";
  if (status === "awaiting_approval") return "Pending Approval";
  if (status === "awaiting_import") return "Awaiting Import";
  return status.replaceAll("_", " ").replace(/\b\w/g, (char) => char.toUpperCase());
}
function iconForMetric(label) {
  if (label.includes("Total")) return "chart";
  if (label.includes("Active")) return "activity";
  if (label.includes("Completed")) return "check";
  return "warning";
}

// demo/src/app/views/admin.ts
function renderActiveDownloadsTable(downloads) {
  return b2`
    <section class="admin-section">
      <div class="table-card">
        <div class="table-head"><span class="title-with-icon"><lv-icon name="download" size="16"></lv-icon>Active Downloads</span></div>
        <div class="table-wrap">
          <table class="admin-table">
            <thead>
              <tr>
                <th>Request</th><th>User</th><th>Progress</th><th>Speed</th><th>ETA</th><th>Started</th>
              </tr>
            </thead>
            <tbody>
              ${downloads.map((download) => b2`
                <tr>
                  <td>
                    <div class="request-main">
                      ${download.title}
                      ${download.type === "ebook" ? b2`<span class="ebook-pill">Ebook</span>` : null}
                    </div>
                    <div class="request-sub">${download.author}</div>
                  </td>
                  <td>${download.user}</td>
                  <td>
                    <div class="progress-wrap">
                      <div class="progress-track"><div class="progress-fill" style="${`width:${download.progress}%`}"></div></div>
                      <span>${download.progress}%</span>
                    </div>
                  </td>
                  <td>${download.speed}</td>
                  <td>${download.eta}</td>
                  <td class="muted">${download.started}</td>
                </tr>
              `)}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  `;
}
function renderRecentRequestsTable(requests) {
  return b2`
    <section class="admin-section">
      <div class="table-card">
        <div class="table-toolbar recent-requests-toolbar">
          <h3 class="title-with-icon"><lv-icon name="clock" size="16"></lv-icon>Recent Requests</h3>
          <div class="recent-requests-controls">
            <lv-input-group class="recent-requests-search"><input type="text" placeholder="Search requests" /></lv-input-group>
            <lv-button class="recent-requests-export" size="md" variant="neutral"><lv-icon name="download" size="15"></lv-icon>Export</lv-button>
          </div>
        </div>
        <div class="table-wrap">
          <table class="admin-table">
            <thead><tr><th>Title</th><th>User</th><th>Status</th><th>Created</th></tr></thead>
            <tbody>
              ${requests.map((request) => b2`
                <tr>
                  <td><div class="request-main">${request.title} ${request.type === "ebook" ? b2`<span class="ebook-pill">Ebook</span>` : null}</div></td>
                  <td>${request.user}</td>
                  <td><lv-badge tone="${statusTone(request.status)}">${request.status.replaceAll("_", " ")}</lv-badge></td>
                  <td class="muted">${request.createdAt}</td>
                </tr>
              `)}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  `;
}
function renderReportedIssuesGrid(issues) {
  return b2`
    <section class="admin-section">
      <div class="section-title-row">
        <h3 class="title-with-icon"><lv-icon name="flag" size="18"></lv-icon>Reported Issues</h3>
        <span class="count-pill">${issues.length}</span>
      </div>
      <div class="issues-grid">
        ${issues.map((issue) => b2`
          <article class="issue-card">
            <div class="issue-top">
              <img src="/placeholder_cover.svg" alt="" class="issue-cover" />
              <div>
                <p class="issue-title">${issue.title}</p>
                <p class="issue-author">${issue.author}</p>
                <p class="issue-reporter">by ${issue.reporter} • ${issue.createdAt}</p>
              </div>
            </div>
            <p class="issue-reason">${issue.reason}</p>
            <div class="issue-actions">
              <lv-button size="sm" variant="secondary"><lv-icon name="close" size="14"></lv-icon>Dismiss</lv-button>
              <lv-button size="sm"><lv-icon name="search" size="14"></lv-icon>Replace</lv-button>
            </div>
          </article>
        `)}
      </div>
    </section>
  `;
}
function renderAdminView() {
  if (adminDashboardResource.pending.value) {
    return b2`
      <main class="page-main">
        <div class="admin-title">
          <h1 class="title-with-icon"><lv-icon name="chart" size="20"></lv-icon>Admin Dashboard</h1>
          <p>Loading metrics and request activity...</p>
        </div>
        <section class="admin-grid">
          ${Array.from({
      length: 4
    }).map(() => b2`<lv-skeleton shape="box" height="120px"></lv-skeleton>`)}
        </section>
      </main>
    `;
  }
  const data = adminDashboardResource.data.value;
  if (!data) return b2``;
  return b2`
    <main class="page-main">
      <div class="admin-title">
        <h1 class="title-with-icon"><lv-icon name="chart" size="20"></lv-icon>Admin Dashboard</h1>
        <p>Live overview of request pipeline and issue resolution.</p>
      </div>

      <section class="admin-grid">
        ${data.metrics.map((metric) => b2`
          <lv-stat-card
            label="${metric.label}"
            value="${metric.value}"
            subtitle="${metric.subtitle ?? ""}"
            tone="${metric.tone}"
          >
            <span slot="icon"><lv-icon .name=${iconForMetric(metric.label)} size="20"></lv-icon></span>
          </lv-stat-card>
        `)}
      </section>

      ${renderActiveDownloadsTable(data.activeDownloads)}
      ${renderRecentRequestsTable(data.recentRequests)}
      ${renderReportedIssuesGrid(data.reportedIssues)}
    </main>
  `;
}

// demo/src/app/cards.ts
function renderBookCard(book) {
  return b2`
    <article class="book-card">
      <div class="book-cover-wrap">
        <img src="${book.cover}" alt="" />
        ${book.rating ? b2`<span class="rating-pill">★ ${book.rating.toFixed(1)}</span>` : null}
        ${book.status === "available" ? b2`<span class="status-dot status-available"></span>` : book.status === "requested" ? b2`<span class="status-dot status-requested"></span>` : book.status === "processing" ? b2`<span class="status-dot status-processing"></span>` : null}
      </div>
      <div class="book-meta">
        <p class="book-title">${book.title}</p>
        <p class="book-author">${book.author}</p>
      </div>
    </article>
  `;
}

// demo/src/app/views/home.ts
function renderHomeSection(title, dotClass, books) {
  const visibleBooks = hideAvailable.value ? books.filter((book) => book.status !== "available") : books;
  return b2`
    <section class="home-section">
      <div class="sticky-wrap">
        <div class="sticky-head">
          <span class="section-dot ${dotClass}"></span>
          <h2 class="section-title">${title}</h2>
          <lv-section-toolbar
            .hideAvailable=${hideAvailable.value}
            .squareCovers=${squareCovers.value}
            .cardSize=${cardSize.value}
            @lv-toggle-hide-available=${(event) => {
    hideAvailable.value = event.detail.value;
  }}
            @lv-toggle-square-covers=${(event) => {
    squareCovers.value = event.detail.value;
  }}
            @lv-change-card-size=${(event) => {
    cardSize.value = event.detail.value;
  }}
          ></lv-section-toolbar>
        </div>
      </div>
      <div class="section-content">
        <div class="cards cards-size-${cardSize.value} ${squareCovers.value ? "covers-square" : ""}">
          ${visibleBooks.map((book) => renderBookCard(book))}
        </div>
      </div>
    </section>
  `;
}
function renderHomeView() {
  if (homeDataResource.pending.value) {
    return b2`
      <main class="page-main home-main">
        <section class="cards cards-default">
          ${Array.from({
      length: 8
    }).map(() => b2`<lv-skeleton shape="box" height="240px"></lv-skeleton>`)}
        </section>
      </main>
    `;
  }
  const homeData = homeDataResource.data.value;
  if (!homeData) {
    return b2`<main class="page-main"></main>`;
  }
  return b2`
    <main class="page-main home-main">
      ${renderHomeSection("Popular Audiobooks", "dot-blue", homeData.popular)}
      ${renderHomeSection("New Releases", "dot-green", homeData.newReleases)}

      <section class="hero">
        <h3>Can't find what you're looking for?</h3>
        <p>Use our search to find any audiobook from Audible.</p>
        <div class="hero-cta"><lv-button variant="primary">Search Audiobooks</lv-button></div>
      </section>
    </main>
  `;
}

// demo/src/app/views/not-found.ts
function renderNotFoundView() {
  return b2`
    <main class="page-main">
      <lv-surface elevation="raised" padding="lg">
        <h2>Page not found</h2>
        <p class="muted" style="margin-top:0.35rem">
          This route is not implemented in the parity demo.
        </p>
      </lv-surface>
    </main>
  `;
}

// demo/src/app/views/requests.ts
var FILTERS = [
  {
    id: "all",
    label: "All"
  },
  {
    id: "active",
    label: "Active"
  },
  {
    id: "waiting",
    label: "Waiting"
  },
  {
    id: "completed",
    label: "Completed"
  },
  {
    id: "failed",
    label: "Failed"
  },
  {
    id: "cancelled",
    label: "Cancelled"
  }
];
function renderRequestsView() {
  if (requestsResource.pending.value) {
    return b2`
      <main class="page-main">
        <div class="admin-title">
          <h1 class="title-with-icon"><lv-icon name="activity" size="20"></lv-icon>My Requests</h1>
          <p>Track all requests and current download status.</p>
        </div>
        <section class="cards compact-cards">
          ${Array.from({
      length: 4
    }).map(() => b2`<lv-skeleton shape="box" height="98px"></lv-skeleton>`)}
        </section>
      </main>
    `;
  }
  const requests = requestsResource.data.value ?? [];
  const groupedCounts = {
    all: requests.length,
    active: requests.filter((request) => requestStatusGroup(request.status) === "active").length,
    waiting: requests.filter((request) => requestStatusGroup(request.status) === "waiting").length,
    completed: requests.filter((request) => requestStatusGroup(request.status) === "completed").length,
    failed: requests.filter((request) => requestStatusGroup(request.status) === "failed").length,
    cancelled: requests.filter((request) => requestStatusGroup(request.status) === "cancelled").length
  };
  const activeFilter = requestsFilter.value;
  const visibleRequests = activeFilter === "all" ? requests : requests.filter((request) => requestStatusGroup(request.status) === activeFilter);
  const hasLive = requests.some((request) => [
    "searching",
    "downloading",
    "processing",
    "awaiting_import"
  ].includes(request.status));
  return b2`
    <main class="page-main requests-page">
      <div class="requests-head">
        <h1>My Requests</h1>
        <p>Track the status of your audiobook requests in real-time</p>
      </div>

      <section class="requests-tabs" role="tablist" aria-label="Request filters">
        ${FILTERS.map((filter) => {
    const count = groupedCounts[filter.id];
    if (filter.id !== "all" && count === 0) return null;
    return b2`
            <button
              class="requests-tab ${activeFilter === filter.id ? "is-active" : ""}"
              type="button"
              @click=${() => {
      requestsFilter.value = filter.id;
    }}
            >
              <span>${filter.label}</span>
              ${count > 0 ? b2`<span class="requests-tab-count">${count}</span>` : null}
            </button>
          `;
  })}
      </section>

      <div class="requests-summary">
        <p>Showing ${visibleRequests.length} of ${groupedCounts.all} requests</p>
        ${hasLive ? b2`<span class="requests-live"><span class="dot"></span>Live</span>` : null}
      </div>

      <section class="requests-list">
        ${visibleRequests.map((request) => b2`
          <article class="request-item-card">
            <div class="request-item-main">
              <img class="request-cover" src="${request.cover ?? "/placeholder_cover.svg"}" alt="" />
              <div class="request-body">
                <h3>${request.title}</h3>
                <p class="request-author">By ${request.author ?? "Unknown Author"}</p>
                <span class="request-status-chip">${requestStatusLabel(request.status)}</span>
                <div class="request-item-footer">
                  <span>Requested ${request.createdAt}</span>
                  <button class="request-cancel-btn" type="button">Cancel</button>
                </div>
              </div>
            </div>
          </article>
        `)}
      </section>
    </main>
  `;
}

// demo/src/app/views/search.ts
function renderSearchView() {
  const searchData = searchResultsResource.data.value;
  const results = searchData?.results ?? [];
  return b2`
    <main class="page-main search-page">
      <header class="search-hero">
        <h1>Search Audiobooks</h1>
        <p>Find and request any audiobook from Audible</p>
        <div class="search-bar-shell">
          <lv-input-group class="search-field-modern" size="lg">
            <lv-icon slot="prefix" name="search" size="26"></lv-icon>
            <input
              type="text"
              .value=${searchQuery.value}
              @input=${(event) => {
    searchQuery.value = event.target.value;
    searchResultsResource.run();
  }}
              placeholder="Search by title, author, or narrator..."
            />
          </lv-input-group>
        </div>
      </header>
      <section class="search-results-area">
        ${searchResultsResource.pending.value ? b2`<lv-skeleton shape="box" height="220px"></lv-skeleton>` : results.length ? b2`<div class="cards cards-default">${results.map((book) => renderBookCard(book))}</div>` : b2`
            <div class="search-empty">
              <lv-icon name="search" size="86"></lv-icon>
              <h3>Start typing to search for audiobooks</h3>
              <p>Search by title, author, or narrator name</p>
            </div>
          `}
      </section>
    </main>
  `;
}

// demo/src/app/render-app.ts
function renderCurrentRoute() {
  const routeName = currentRoute.value?.name ?? "home";
  if (routeName === "home") return renderHomeView();
  if (routeName === "admin") return renderAdminView();
  if (routeName === "requests") return renderRequestsView();
  if (routeName === "search") return renderSearchView();
  return renderNotFoundView();
}
function renderAppShell() {
  const toggleTheme = () => {
    const nextTheme = theme.value === "dark" ? "light" : "dark";
    theme.value = nextTheme;
    document.documentElement.dataset.theme = nextTheme;
    localStorage.setItem("lv-demo-theme", nextTheme);
  };
  return b2`
    <lv-nav slot="header" title="ReadMeABook" .links="${navLinks()}">
      <img slot="brand-mark" src="/RMAB_1024x1024_ICON.png" width="32" height="32" alt="" />
      <button
        slot="actions"
        class="theme-toggle"
        type="button"
        aria-label="${theme.value === "dark" ? "Use light theme" : "Use dark theme"}"
        title="${theme.value === "dark" ? "Use light theme" : "Use dark theme"}"
        @click="${toggleTheme}"
      >
        <lv-icon name="${theme.value === "dark" ? "sun" : "moon"}" size="18"></lv-icon>
      </button>
      <a slot="mobile-actions" class="mobile-search-link" href="/search" aria-label="Search" title="Search">
        <lv-icon name="search" size="22"></lv-icon>
      </a>
      <button
        slot="mobile-actions"
        class="theme-toggle"
        type="button"
        aria-label="${theme.value === "dark" ? "Use light theme" : "Use dark theme"}"
        title="${theme.value === "dark" ? "Use light theme" : "Use dark theme"}"
        @click="${toggleTheme}"
      >
        <lv-icon name="${theme.value === "dark" ? "sun" : "moon"}" size="18"></lv-icon>
      </button>
      <span slot="actions" class="version-pill">v1.1.6</span>
      <span slot="actions" class="profile-chip">
        <span class="profile-avatar">H</span>
        <span class="profile-name">hydrate31</span>
      </span>
      <span slot="mobile-actions" class="profile-chip profile-chip-mobile">
        <span class="profile-avatar">H</span>
      </span>
      <span slot="mobile-menu-actions" class="mobile-version-pill">v1.1.6</span>
    </lv-nav>

    ${renderCurrentRoute()}

    <footer slot="footer" class="demo-footer">
      ReadMeABook - Audiobook Library Management System
      ${apiManifestResource.data.value ? b2`<span class="footer-meta">• API endpoints mirrored: ${apiManifestResource.data.value.length}</span>` : null}
      ${pageManifestResource.data.value ? b2`<span class="footer-meta">• page routes mirrored: ${pageManifestResource.data.value.length}</span>` : null}
    </footer>
  `;
}

// demo/src/main.ts
bootstrapApp();
enhance("app-root", () => renderAppShell());
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
