// ../../../../../../home/majora/.cache/deno/npm/registry.npmjs.org/@lit/reactive-element/2.1.2/css-tag.js
var t = globalThis;
var e = t.ShadowRoot && (void 0 === t.ShadyCSS || t.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype;
var s = Symbol();
var o = /* @__PURE__ */ new WeakMap();
var n = class {
  constructor(t6, e7, o7) {
    if (this._$cssResult$ = true, o7 !== s) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = t6, this.t = e7;
  }
  get styleSheet() {
    let t6 = this.o;
    const s5 = this.t;
    if (e && void 0 === t6) {
      const e7 = void 0 !== s5 && 1 === s5.length;
      e7 && (t6 = o.get(s5)), void 0 === t6 && ((this.o = t6 = new CSSStyleSheet()).replaceSync(this.cssText), e7 && o.set(s5, t6));
    }
    return t6;
  }
  toString() {
    return this.cssText;
  }
};
var r = (t6) => new n("string" == typeof t6 ? t6 : t6 + "", void 0, s);
var i = (t6, ...e7) => {
  const o7 = 1 === t6.length ? t6[0] : e7.reduce((e8, s5, o8) => e8 + ((t7) => {
    if (true === t7._$cssResult$) return t7.cssText;
    if ("number" == typeof t7) return t7;
    throw Error("Value passed to 'css' function must be a 'css' function result: " + t7 + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
  })(s5) + t6[o8 + 1], t6[0]);
  return new n(o7, t6, s);
};
var S = (s5, o7) => {
  if (e) s5.adoptedStyleSheets = o7.map((t6) => t6 instanceof CSSStyleSheet ? t6 : t6.styleSheet);
  else for (const e7 of o7) {
    const o8 = document.createElement("style"), n6 = t.litNonce;
    void 0 !== n6 && o8.setAttribute("nonce", n6), o8.textContent = e7.cssText, s5.appendChild(o8);
  }
};
var c = e ? (t6) => t6 : (t6) => t6 instanceof CSSStyleSheet ? ((t7) => {
  let e7 = "";
  for (const s5 of t7.cssRules) e7 += s5.cssText;
  return r(e7);
})(t6) : t6;

// ../../../../../../home/majora/.cache/deno/npm/registry.npmjs.org/@lit/reactive-element/2.1.2/reactive-element.js
var { is: i2, defineProperty: e2, getOwnPropertyDescriptor: h, getOwnPropertyNames: r2, getOwnPropertySymbols: o2, getPrototypeOf: n2 } = Object;
var a = globalThis;
var c2 = a.trustedTypes;
var l = c2 ? c2.emptyScript : "";
var p = a.reactiveElementPolyfillSupport;
var d = (t6, s5) => t6;
var u = {
  toAttribute(t6, s5) {
    switch (s5) {
      case Boolean:
        t6 = t6 ? l : null;
        break;
      case Object:
      case Array:
        t6 = null == t6 ? t6 : JSON.stringify(t6);
    }
    return t6;
  },
  fromAttribute(t6, s5) {
    let i7 = t6;
    switch (s5) {
      case Boolean:
        i7 = null !== t6;
        break;
      case Number:
        i7 = null === t6 ? null : Number(t6);
        break;
      case Object:
      case Array:
        try {
          i7 = JSON.parse(t6);
        } catch (t7) {
          i7 = null;
        }
    }
    return i7;
  }
};
var f = (t6, s5) => !i2(t6, s5);
var b = {
  attribute: true,
  type: String,
  converter: u,
  reflect: false,
  useDefault: false,
  hasChanged: f
};
Symbol.metadata ??= Symbol("metadata"), a.litPropertyMetadata ??= /* @__PURE__ */ new WeakMap();
var y = class extends HTMLElement {
  static addInitializer(t6) {
    this._$Ei(), (this.l ??= []).push(t6);
  }
  static get observedAttributes() {
    return this.finalize(), this._$Eh && [
      ...this._$Eh.keys()
    ];
  }
  static createProperty(t6, s5 = b) {
    if (s5.state && (s5.attribute = false), this._$Ei(), this.prototype.hasOwnProperty(t6) && ((s5 = Object.create(s5)).wrapped = true), this.elementProperties.set(t6, s5), !s5.noAccessor) {
      const i7 = Symbol(), h4 = this.getPropertyDescriptor(t6, i7, s5);
      void 0 !== h4 && e2(this.prototype, t6, h4);
    }
  }
  static getPropertyDescriptor(t6, s5, i7) {
    const { get: e7, set: r8 } = h(this.prototype, t6) ?? {
      get() {
        return this[s5];
      },
      set(t7) {
        this[s5] = t7;
      }
    };
    return {
      get: e7,
      set(s6) {
        const h4 = e7?.call(this);
        r8?.call(this, s6), this.requestUpdate(t6, h4, i7);
      },
      configurable: true,
      enumerable: true
    };
  }
  static getPropertyOptions(t6) {
    return this.elementProperties.get(t6) ?? b;
  }
  static _$Ei() {
    if (this.hasOwnProperty(d("elementProperties"))) return;
    const t6 = n2(this);
    t6.finalize(), void 0 !== t6.l && (this.l = [
      ...t6.l
    ]), this.elementProperties = new Map(t6.elementProperties);
  }
  static finalize() {
    if (this.hasOwnProperty(d("finalized"))) return;
    if (this.finalized = true, this._$Ei(), this.hasOwnProperty(d("properties"))) {
      const t7 = this.properties, s5 = [
        ...r2(t7),
        ...o2(t7)
      ];
      for (const i7 of s5) this.createProperty(i7, t7[i7]);
    }
    const t6 = this[Symbol.metadata];
    if (null !== t6) {
      const s5 = litPropertyMetadata.get(t6);
      if (void 0 !== s5) for (const [t7, i7] of s5) this.elementProperties.set(t7, i7);
    }
    this._$Eh = /* @__PURE__ */ new Map();
    for (const [t7, s5] of this.elementProperties) {
      const i7 = this._$Eu(t7, s5);
      void 0 !== i7 && this._$Eh.set(i7, t7);
    }
    this.elementStyles = this.finalizeStyles(this.styles);
  }
  static finalizeStyles(s5) {
    const i7 = [];
    if (Array.isArray(s5)) {
      const e7 = new Set(s5.flat(1 / 0).reverse());
      for (const s6 of e7) i7.unshift(c(s6));
    } else void 0 !== s5 && i7.push(c(s5));
    return i7;
  }
  static _$Eu(t6, s5) {
    const i7 = s5.attribute;
    return false === i7 ? void 0 : "string" == typeof i7 ? i7 : "string" == typeof t6 ? t6.toLowerCase() : void 0;
  }
  constructor() {
    super(), this._$Ep = void 0, this.isUpdatePending = false, this.hasUpdated = false, this._$Em = null, this._$Ev();
  }
  _$Ev() {
    this._$ES = new Promise((t6) => this.enableUpdating = t6), this._$AL = /* @__PURE__ */ new Map(), this._$E_(), this.requestUpdate(), this.constructor.l?.forEach((t6) => t6(this));
  }
  addController(t6) {
    (this._$EO ??= /* @__PURE__ */ new Set()).add(t6), void 0 !== this.renderRoot && this.isConnected && t6.hostConnected?.();
  }
  removeController(t6) {
    this._$EO?.delete(t6);
  }
  _$E_() {
    const t6 = /* @__PURE__ */ new Map(), s5 = this.constructor.elementProperties;
    for (const i7 of s5.keys()) this.hasOwnProperty(i7) && (t6.set(i7, this[i7]), delete this[i7]);
    t6.size > 0 && (this._$Ep = t6);
  }
  createRenderRoot() {
    const t6 = this.shadowRoot ?? this.attachShadow(this.constructor.shadowRootOptions);
    return S(t6, this.constructor.elementStyles), t6;
  }
  connectedCallback() {
    this.renderRoot ??= this.createRenderRoot(), this.enableUpdating(true), this._$EO?.forEach((t6) => t6.hostConnected?.());
  }
  enableUpdating(t6) {
  }
  disconnectedCallback() {
    this._$EO?.forEach((t6) => t6.hostDisconnected?.());
  }
  attributeChangedCallback(t6, s5, i7) {
    this._$AK(t6, i7);
  }
  _$ET(t6, s5) {
    const i7 = this.constructor.elementProperties.get(t6), e7 = this.constructor._$Eu(t6, i7);
    if (void 0 !== e7 && true === i7.reflect) {
      const h4 = (void 0 !== i7.converter?.toAttribute ? i7.converter : u).toAttribute(s5, i7.type);
      this._$Em = t6, null == h4 ? this.removeAttribute(e7) : this.setAttribute(e7, h4), this._$Em = null;
    }
  }
  _$AK(t6, s5) {
    const i7 = this.constructor, e7 = i7._$Eh.get(t6);
    if (void 0 !== e7 && this._$Em !== e7) {
      const t7 = i7.getPropertyOptions(e7), h4 = "function" == typeof t7.converter ? {
        fromAttribute: t7.converter
      } : void 0 !== t7.converter?.fromAttribute ? t7.converter : u;
      this._$Em = e7;
      const r8 = h4.fromAttribute(s5, t7.type);
      this[e7] = r8 ?? this._$Ej?.get(e7) ?? r8, this._$Em = null;
    }
  }
  requestUpdate(t6, s5, i7, e7 = false, h4) {
    if (void 0 !== t6) {
      const r8 = this.constructor;
      if (false === e7 && (h4 = this[t6]), i7 ??= r8.getPropertyOptions(t6), !((i7.hasChanged ?? f)(h4, s5) || i7.useDefault && i7.reflect && h4 === this._$Ej?.get(t6) && !this.hasAttribute(r8._$Eu(t6, i7)))) return;
      this.C(t6, s5, i7);
    }
    false === this.isUpdatePending && (this._$ES = this._$EP());
  }
  C(t6, s5, { useDefault: i7, reflect: e7, wrapped: h4 }, r8) {
    i7 && !(this._$Ej ??= /* @__PURE__ */ new Map()).has(t6) && (this._$Ej.set(t6, r8 ?? s5 ?? this[t6]), true !== h4 || void 0 !== r8) || (this._$AL.has(t6) || (this.hasUpdated || i7 || (s5 = void 0), this._$AL.set(t6, s5)), true === e7 && this._$Em !== t6 && (this._$Eq ??= /* @__PURE__ */ new Set()).add(t6));
  }
  async _$EP() {
    this.isUpdatePending = true;
    try {
      await this._$ES;
    } catch (t7) {
      Promise.reject(t7);
    }
    const t6 = this.scheduleUpdate();
    return null != t6 && await t6, !this.isUpdatePending;
  }
  scheduleUpdate() {
    return this.performUpdate();
  }
  performUpdate() {
    if (!this.isUpdatePending) return;
    if (!this.hasUpdated) {
      if (this.renderRoot ??= this.createRenderRoot(), this._$Ep) {
        for (const [t8, s6] of this._$Ep) this[t8] = s6;
        this._$Ep = void 0;
      }
      const t7 = this.constructor.elementProperties;
      if (t7.size > 0) for (const [s6, i7] of t7) {
        const { wrapped: t8 } = i7, e7 = this[s6];
        true !== t8 || this._$AL.has(s6) || void 0 === e7 || this.C(s6, void 0, i7, e7);
      }
    }
    let t6 = false;
    const s5 = this._$AL;
    try {
      t6 = this.shouldUpdate(s5), t6 ? (this.willUpdate(s5), this._$EO?.forEach((t7) => t7.hostUpdate?.()), this.update(s5)) : this._$EM();
    } catch (s6) {
      throw t6 = false, this._$EM(), s6;
    }
    t6 && this._$AE(s5);
  }
  willUpdate(t6) {
  }
  _$AE(t6) {
    this._$EO?.forEach((t7) => t7.hostUpdated?.()), this.hasUpdated || (this.hasUpdated = true, this.firstUpdated(t6)), this.updated(t6);
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
  shouldUpdate(t6) {
    return true;
  }
  update(t6) {
    this._$Eq &&= this._$Eq.forEach((t7) => this._$ET(t7, this[t7])), this._$EM();
  }
  updated(t6) {
  }
  firstUpdated(t6) {
  }
};
y.elementStyles = [], y.shadowRootOptions = {
  mode: "open"
}, y[d("elementProperties")] = /* @__PURE__ */ new Map(), y[d("finalized")] = /* @__PURE__ */ new Map(), p?.({
  ReactiveElement: y
}), (a.reactiveElementVersions ??= []).push("2.1.2");

// ../../../../../../home/majora/.cache/deno/npm/registry.npmjs.org/lit-html/3.3.2/lit-html.js
var t2 = globalThis;
var i3 = (t6) => t6;
var s2 = t2.trustedTypes;
var e3 = s2 ? s2.createPolicy("lit-html", {
  createHTML: (t6) => t6
}) : void 0;
var h2 = "$lit$";
var o3 = `lit$${Math.random().toFixed(9).slice(2)}$`;
var n3 = "?" + o3;
var r3 = `<${n3}>`;
var l2 = document;
var c3 = () => l2.createComment("");
var a2 = (t6) => null === t6 || "object" != typeof t6 && "function" != typeof t6;
var u2 = Array.isArray;
var d2 = (t6) => u2(t6) || "function" == typeof t6?.[Symbol.iterator];
var f2 = "[ 	\n\f\r]";
var v = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g;
var _ = /-->/g;
var m = />/g;
var p2 = RegExp(`>|${f2}(?:([^\\s"'>=/]+)(${f2}*=${f2}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g");
var g = /'/g;
var $ = /"/g;
var y2 = /^(?:script|style|textarea|title)$/i;
var x = (t6) => (i7, ...s5) => ({
  _$litType$: t6,
  strings: i7,
  values: s5
});
var b2 = x(1);
var w = x(2);
var T = x(3);
var E = Symbol.for("lit-noChange");
var A = Symbol.for("lit-nothing");
var C = /* @__PURE__ */ new WeakMap();
var P = l2.createTreeWalker(l2, 129);
function V(t6, i7) {
  if (!u2(t6) || !t6.hasOwnProperty("raw")) throw Error("invalid template strings array");
  return void 0 !== e3 ? e3.createHTML(i7) : i7;
}
var N = (t6, i7) => {
  const s5 = t6.length - 1, e7 = [];
  let n6, l4 = 2 === i7 ? "<svg>" : 3 === i7 ? "<math>" : "", c5 = v;
  for (let i8 = 0; i8 < s5; i8++) {
    const s6 = t6[i8];
    let a4, u4, d4 = -1, f5 = 0;
    for (; f5 < s6.length && (c5.lastIndex = f5, u4 = c5.exec(s6), null !== u4); ) f5 = c5.lastIndex, c5 === v ? "!--" === u4[1] ? c5 = _ : void 0 !== u4[1] ? c5 = m : void 0 !== u4[2] ? (y2.test(u4[2]) && (n6 = RegExp("</" + u4[2], "g")), c5 = p2) : void 0 !== u4[3] && (c5 = p2) : c5 === p2 ? ">" === u4[0] ? (c5 = n6 ?? v, d4 = -1) : void 0 === u4[1] ? d4 = -2 : (d4 = c5.lastIndex - u4[2].length, a4 = u4[1], c5 = void 0 === u4[3] ? p2 : '"' === u4[3] ? $ : g) : c5 === $ || c5 === g ? c5 = p2 : c5 === _ || c5 === m ? c5 = v : (c5 = p2, n6 = void 0);
    const x2 = c5 === p2 && t6[i8 + 1].startsWith("/>") ? " " : "";
    l4 += c5 === v ? s6 + r3 : d4 >= 0 ? (e7.push(a4), s6.slice(0, d4) + h2 + s6.slice(d4) + o3 + x2) : s6 + o3 + (-2 === d4 ? i8 : x2);
  }
  return [
    V(t6, l4 + (t6[s5] || "<?>") + (2 === i7 ? "</svg>" : 3 === i7 ? "</math>" : "")),
    e7
  ];
};
var S2 = class _S {
  constructor({ strings: t6, _$litType$: i7 }, e7) {
    let r8;
    this.parts = [];
    let l4 = 0, a4 = 0;
    const u4 = t6.length - 1, d4 = this.parts, [f5, v3] = N(t6, i7);
    if (this.el = _S.createElement(f5, e7), P.currentNode = this.el.content, 2 === i7 || 3 === i7) {
      const t7 = this.el.content.firstChild;
      t7.replaceWith(...t7.childNodes);
    }
    for (; null !== (r8 = P.nextNode()) && d4.length < u4; ) {
      if (1 === r8.nodeType) {
        if (r8.hasAttributes()) for (const t7 of r8.getAttributeNames()) if (t7.endsWith(h2)) {
          const i8 = v3[a4++], s5 = r8.getAttribute(t7).split(o3), e8 = /([.?@])?(.*)/.exec(i8);
          d4.push({
            type: 1,
            index: l4,
            name: e8[2],
            strings: s5,
            ctor: "." === e8[1] ? I : "?" === e8[1] ? L : "@" === e8[1] ? z : H
          }), r8.removeAttribute(t7);
        } else t7.startsWith(o3) && (d4.push({
          type: 6,
          index: l4
        }), r8.removeAttribute(t7));
        if (y2.test(r8.tagName)) {
          const t7 = r8.textContent.split(o3), i8 = t7.length - 1;
          if (i8 > 0) {
            r8.textContent = s2 ? s2.emptyScript : "";
            for (let s5 = 0; s5 < i8; s5++) r8.append(t7[s5], c3()), P.nextNode(), d4.push({
              type: 2,
              index: ++l4
            });
            r8.append(t7[i8], c3());
          }
        }
      } else if (8 === r8.nodeType) if (r8.data === n3) d4.push({
        type: 2,
        index: l4
      });
      else {
        let t7 = -1;
        for (; -1 !== (t7 = r8.data.indexOf(o3, t7 + 1)); ) d4.push({
          type: 7,
          index: l4
        }), t7 += o3.length - 1;
      }
      l4++;
    }
  }
  static createElement(t6, i7) {
    const s5 = l2.createElement("template");
    return s5.innerHTML = t6, s5;
  }
};
function M(t6, i7, s5 = t6, e7) {
  if (i7 === E) return i7;
  let h4 = void 0 !== e7 ? s5._$Co?.[e7] : s5._$Cl;
  const o7 = a2(i7) ? void 0 : i7._$litDirective$;
  return h4?.constructor !== o7 && (h4?._$AO?.(false), void 0 === o7 ? h4 = void 0 : (h4 = new o7(t6), h4._$AT(t6, s5, e7)), void 0 !== e7 ? (s5._$Co ??= [])[e7] = h4 : s5._$Cl = h4), void 0 !== h4 && (i7 = M(t6, h4._$AS(t6, i7.values), h4, e7)), i7;
}
var R = class {
  constructor(t6, i7) {
    this._$AV = [], this._$AN = void 0, this._$AD = t6, this._$AM = i7;
  }
  get parentNode() {
    return this._$AM.parentNode;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  u(t6) {
    const { el: { content: i7 }, parts: s5 } = this._$AD, e7 = (t6?.creationScope ?? l2).importNode(i7, true);
    P.currentNode = e7;
    let h4 = P.nextNode(), o7 = 0, n6 = 0, r8 = s5[0];
    for (; void 0 !== r8; ) {
      if (o7 === r8.index) {
        let i8;
        2 === r8.type ? i8 = new k(h4, h4.nextSibling, this, t6) : 1 === r8.type ? i8 = new r8.ctor(h4, r8.name, r8.strings, this, t6) : 6 === r8.type && (i8 = new Z(h4, this, t6)), this._$AV.push(i8), r8 = s5[++n6];
      }
      o7 !== r8?.index && (h4 = P.nextNode(), o7++);
    }
    return P.currentNode = l2, e7;
  }
  p(t6) {
    let i7 = 0;
    for (const s5 of this._$AV) void 0 !== s5 && (void 0 !== s5.strings ? (s5._$AI(t6, s5, i7), i7 += s5.strings.length - 2) : s5._$AI(t6[i7])), i7++;
  }
};
var k = class _k {
  get _$AU() {
    return this._$AM?._$AU ?? this._$Cv;
  }
  constructor(t6, i7, s5, e7) {
    this.type = 2, this._$AH = A, this._$AN = void 0, this._$AA = t6, this._$AB = i7, this._$AM = s5, this.options = e7, this._$Cv = e7?.isConnected ?? true;
  }
  get parentNode() {
    let t6 = this._$AA.parentNode;
    const i7 = this._$AM;
    return void 0 !== i7 && 11 === t6?.nodeType && (t6 = i7.parentNode), t6;
  }
  get startNode() {
    return this._$AA;
  }
  get endNode() {
    return this._$AB;
  }
  _$AI(t6, i7 = this) {
    t6 = M(this, t6, i7), a2(t6) ? t6 === A || null == t6 || "" === t6 ? (this._$AH !== A && this._$AR(), this._$AH = A) : t6 !== this._$AH && t6 !== E && this._(t6) : void 0 !== t6._$litType$ ? this.$(t6) : void 0 !== t6.nodeType ? this.T(t6) : d2(t6) ? this.k(t6) : this._(t6);
  }
  O(t6) {
    return this._$AA.parentNode.insertBefore(t6, this._$AB);
  }
  T(t6) {
    this._$AH !== t6 && (this._$AR(), this._$AH = this.O(t6));
  }
  _(t6) {
    this._$AH !== A && a2(this._$AH) ? this._$AA.nextSibling.data = t6 : this.T(l2.createTextNode(t6)), this._$AH = t6;
  }
  $(t6) {
    const { values: i7, _$litType$: s5 } = t6, e7 = "number" == typeof s5 ? this._$AC(t6) : (void 0 === s5.el && (s5.el = S2.createElement(V(s5.h, s5.h[0]), this.options)), s5);
    if (this._$AH?._$AD === e7) this._$AH.p(i7);
    else {
      const t7 = new R(e7, this), s6 = t7.u(this.options);
      t7.p(i7), this.T(s6), this._$AH = t7;
    }
  }
  _$AC(t6) {
    let i7 = C.get(t6.strings);
    return void 0 === i7 && C.set(t6.strings, i7 = new S2(t6)), i7;
  }
  k(t6) {
    u2(this._$AH) || (this._$AH = [], this._$AR());
    const i7 = this._$AH;
    let s5, e7 = 0;
    for (const h4 of t6) e7 === i7.length ? i7.push(s5 = new _k(this.O(c3()), this.O(c3()), this, this.options)) : s5 = i7[e7], s5._$AI(h4), e7++;
    e7 < i7.length && (this._$AR(s5 && s5._$AB.nextSibling, e7), i7.length = e7);
  }
  _$AR(t6 = this._$AA.nextSibling, s5) {
    for (this._$AP?.(false, true, s5); t6 !== this._$AB; ) {
      const s6 = i3(t6).nextSibling;
      i3(t6).remove(), t6 = s6;
    }
  }
  setConnected(t6) {
    void 0 === this._$AM && (this._$Cv = t6, this._$AP?.(t6));
  }
};
var H = class {
  get tagName() {
    return this.element.tagName;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  constructor(t6, i7, s5, e7, h4) {
    this.type = 1, this._$AH = A, this._$AN = void 0, this.element = t6, this.name = i7, this._$AM = e7, this.options = h4, s5.length > 2 || "" !== s5[0] || "" !== s5[1] ? (this._$AH = Array(s5.length - 1).fill(new String()), this.strings = s5) : this._$AH = A;
  }
  _$AI(t6, i7 = this, s5, e7) {
    const h4 = this.strings;
    let o7 = false;
    if (void 0 === h4) t6 = M(this, t6, i7, 0), o7 = !a2(t6) || t6 !== this._$AH && t6 !== E, o7 && (this._$AH = t6);
    else {
      const e8 = t6;
      let n6, r8;
      for (t6 = h4[0], n6 = 0; n6 < h4.length - 1; n6++) r8 = M(this, e8[s5 + n6], i7, n6), r8 === E && (r8 = this._$AH[n6]), o7 ||= !a2(r8) || r8 !== this._$AH[n6], r8 === A ? t6 = A : t6 !== A && (t6 += (r8 ?? "") + h4[n6 + 1]), this._$AH[n6] = r8;
    }
    o7 && !e7 && this.j(t6);
  }
  j(t6) {
    t6 === A ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, t6 ?? "");
  }
};
var I = class extends H {
  constructor() {
    super(...arguments), this.type = 3;
  }
  j(t6) {
    this.element[this.name] = t6 === A ? void 0 : t6;
  }
};
var L = class extends H {
  constructor() {
    super(...arguments), this.type = 4;
  }
  j(t6) {
    this.element.toggleAttribute(this.name, !!t6 && t6 !== A);
  }
};
var z = class extends H {
  constructor(t6, i7, s5, e7, h4) {
    super(t6, i7, s5, e7, h4), this.type = 5;
  }
  _$AI(t6, i7 = this) {
    if ((t6 = M(this, t6, i7, 0) ?? A) === E) return;
    const s5 = this._$AH, e7 = t6 === A && s5 !== A || t6.capture !== s5.capture || t6.once !== s5.once || t6.passive !== s5.passive, h4 = t6 !== A && (s5 === A || e7);
    e7 && this.element.removeEventListener(this.name, this, s5), h4 && this.element.addEventListener(this.name, this, t6), this._$AH = t6;
  }
  handleEvent(t6) {
    "function" == typeof this._$AH ? this._$AH.call(this.options?.host ?? this.element, t6) : this._$AH.handleEvent(t6);
  }
};
var Z = class {
  constructor(t6, i7, s5) {
    this.element = t6, this.type = 6, this._$AN = void 0, this._$AM = i7, this.options = s5;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(t6) {
    M(this, t6);
  }
};
var j = {
  M: h2,
  P: o3,
  A: n3,
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
var D = (t6, i7, s5) => {
  const e7 = s5?.renderBefore ?? i7;
  let h4 = e7._$litPart$;
  if (void 0 === h4) {
    const t7 = s5?.renderBefore ?? null;
    e7._$litPart$ = h4 = new k(i7.insertBefore(c3(), t7), t7, void 0, s5 ?? {});
  }
  return h4._$AI(t6), h4;
};

// ../../../../../../home/majora/.cache/deno/npm/registry.npmjs.org/lit-element/4.2.2/lit-element.js
var s3 = globalThis;
var i4 = class extends y {
  constructor() {
    super(...arguments), this.renderOptions = {
      host: this
    }, this._$Do = void 0;
  }
  createRenderRoot() {
    const t6 = super.createRenderRoot();
    return this.renderOptions.renderBefore ??= t6.firstChild, t6;
  }
  update(t6) {
    const r8 = this.render();
    this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(t6), this._$Do = D(r8, this.renderRoot, this.renderOptions);
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
i4._$litElement$ = true, i4["finalized"] = true, s3.litElementHydrateSupport?.({
  LitElement: i4
});
var o4 = s3.litElementPolyfillSupport;
o4?.({
  LitElement: i4
});
(s3.litElementVersions ??= []).push("4.2.2");

// ../../../../../../home/majora/.cache/deno/npm/registry.npmjs.org/@preact/signals-core/1.13.0/dist/signals-core.module.js
var i5 = Symbol.for("preact-signals");
function t3() {
  if (!(s4 > 1)) {
    var i7, t6 = false;
    while (void 0 !== h3) {
      var n6 = h3;
      h3 = void 0;
      v2++;
      while (void 0 !== n6) {
        var r8 = n6.o;
        n6.o = void 0;
        n6.f &= -3;
        if (!(8 & n6.f) && a3(n6)) try {
          n6.c();
        } catch (n7) {
          if (!t6) {
            i7 = n7;
            t6 = true;
          }
        }
        n6 = r8;
      }
    }
    v2 = 0;
    s4--;
    if (t6) throw i7;
  } else s4--;
}
var r4 = void 0;
function o5(i7) {
  var t6 = r4;
  r4 = void 0;
  try {
    return i7();
  } finally {
    r4 = t6;
  }
}
var f3;
var h3 = void 0;
var s4 = 0;
var v2 = 0;
var u3 = 0;
function e4(i7) {
  if (void 0 !== r4) {
    var t6 = i7.n;
    if (void 0 === t6 || t6.t !== r4) {
      t6 = {
        i: 0,
        S: i7,
        p: r4.s,
        n: void 0,
        t: r4,
        e: void 0,
        x: void 0,
        r: t6
      };
      if (void 0 !== r4.s) r4.s.n = t6;
      r4.s = t6;
      i7.n = t6;
      if (32 & r4.f) i7.S(t6);
      return t6;
    } else if (-1 === t6.i) {
      t6.i = 0;
      if (void 0 !== t6.n) {
        t6.n.p = t6.p;
        if (void 0 !== t6.p) t6.p.n = t6.n;
        t6.p = r4.s;
        t6.n = void 0;
        r4.s.n = t6;
        r4.s = t6;
      }
      return t6;
    }
  }
}
function d3(i7, t6) {
  this.v = i7;
  this.i = 0;
  this.n = void 0;
  this.t = void 0;
  this.W = null == t6 ? void 0 : t6.watched;
  this.Z = null == t6 ? void 0 : t6.unwatched;
  this.name = null == t6 ? void 0 : t6.name;
}
d3.prototype.brand = i5;
d3.prototype.h = function() {
  return true;
};
d3.prototype.S = function(i7) {
  var t6 = this, n6 = this.t;
  if (n6 !== i7 && void 0 === i7.e) {
    i7.x = n6;
    this.t = i7;
    if (void 0 !== n6) n6.e = i7;
    else o5(function() {
      var i8;
      null == (i8 = t6.W) || i8.call(t6);
    });
  }
};
d3.prototype.U = function(i7) {
  var t6 = this;
  if (void 0 !== this.t) {
    var n6 = i7.e, r8 = i7.x;
    if (void 0 !== n6) {
      n6.x = r8;
      i7.e = void 0;
    }
    if (void 0 !== r8) {
      r8.e = n6;
      i7.x = void 0;
    }
    if (i7 === this.t) {
      this.t = r8;
      if (void 0 === r8) o5(function() {
        var i8;
        null == (i8 = t6.Z) || i8.call(t6);
      });
    }
  }
};
d3.prototype.subscribe = function(i7) {
  var t6 = this;
  return m2(function() {
    var n6 = t6.value, o7 = r4;
    r4 = void 0;
    try {
      i7(n6);
    } finally {
      r4 = o7;
    }
  }, {
    name: "sub"
  });
};
d3.prototype.valueOf = function() {
  return this.value;
};
d3.prototype.toString = function() {
  return this.value + "";
};
d3.prototype.toJSON = function() {
  return this.value;
};
d3.prototype.peek = function() {
  var i7 = r4;
  r4 = void 0;
  try {
    return this.value;
  } finally {
    r4 = i7;
  }
};
Object.defineProperty(d3.prototype, "value", {
  get: function() {
    var i7 = e4(this);
    if (void 0 !== i7) i7.i = this.i;
    return this.v;
  },
  set: function(i7) {
    if (i7 !== this.v) {
      if (v2 > 100) throw new Error("Cycle detected");
      this.v = i7;
      this.i++;
      u3++;
      s4++;
      try {
        for (var n6 = this.t; void 0 !== n6; n6 = n6.x) n6.t.N();
      } finally {
        t3();
      }
    }
  }
});
function c4(i7, t6) {
  return new d3(i7, t6);
}
function a3(i7) {
  for (var t6 = i7.s; void 0 !== t6; t6 = t6.n) if (t6.S.i !== t6.i || !t6.S.h() || t6.S.i !== t6.i) return true;
  return false;
}
function l3(i7) {
  for (var t6 = i7.s; void 0 !== t6; t6 = t6.n) {
    var n6 = t6.S.n;
    if (void 0 !== n6) t6.r = n6;
    t6.S.n = t6;
    t6.i = -1;
    if (void 0 === t6.n) {
      i7.s = t6;
      break;
    }
  }
}
function y3(i7) {
  var t6 = i7.s, n6 = void 0;
  while (void 0 !== t6) {
    var r8 = t6.p;
    if (-1 === t6.i) {
      t6.S.U(t6);
      if (void 0 !== r8) r8.n = t6.n;
      if (void 0 !== t6.n) t6.n.p = r8;
    } else n6 = t6;
    t6.S.n = t6.r;
    if (void 0 !== t6.r) t6.r = void 0;
    t6 = r8;
  }
  i7.s = n6;
}
function w2(i7, t6) {
  d3.call(this, void 0);
  this.x = i7;
  this.s = void 0;
  this.g = u3 - 1;
  this.f = 4;
  this.W = null == t6 ? void 0 : t6.watched;
  this.Z = null == t6 ? void 0 : t6.unwatched;
  this.name = null == t6 ? void 0 : t6.name;
}
w2.prototype = new d3();
w2.prototype.h = function() {
  this.f &= -3;
  if (1 & this.f) return false;
  if (32 == (36 & this.f)) return true;
  this.f &= -5;
  if (this.g === u3) return true;
  this.g = u3;
  this.f |= 1;
  if (this.i > 0 && !a3(this)) {
    this.f &= -2;
    return true;
  }
  var i7 = r4;
  try {
    l3(this);
    r4 = this;
    var t6 = this.x();
    if (16 & this.f || this.v !== t6 || 0 === this.i) {
      this.v = t6;
      this.f &= -17;
      this.i++;
    }
  } catch (i8) {
    this.v = i8;
    this.f |= 16;
    this.i++;
  }
  r4 = i7;
  y3(this);
  this.f &= -2;
  return true;
};
w2.prototype.S = function(i7) {
  if (void 0 === this.t) {
    this.f |= 36;
    for (var t6 = this.s; void 0 !== t6; t6 = t6.n) t6.S.S(t6);
  }
  d3.prototype.S.call(this, i7);
};
w2.prototype.U = function(i7) {
  if (void 0 !== this.t) {
    d3.prototype.U.call(this, i7);
    if (void 0 === this.t) {
      this.f &= -33;
      for (var t6 = this.s; void 0 !== t6; t6 = t6.n) t6.S.U(t6);
    }
  }
};
w2.prototype.N = function() {
  if (!(2 & this.f)) {
    this.f |= 6;
    for (var i7 = this.t; void 0 !== i7; i7 = i7.x) i7.t.N();
  }
};
Object.defineProperty(w2.prototype, "value", {
  get: function() {
    if (1 & this.f) throw new Error("Cycle detected");
    var i7 = e4(this);
    this.h();
    if (void 0 !== i7) i7.i = this.i;
    if (16 & this.f) throw this.v;
    return this.v;
  }
});
function b3(i7, t6) {
  return new w2(i7, t6);
}
function _2(i7) {
  var n6 = i7.u;
  i7.u = void 0;
  if ("function" == typeof n6) {
    s4++;
    var o7 = r4;
    r4 = void 0;
    try {
      n6();
    } catch (t6) {
      i7.f &= -2;
      i7.f |= 8;
      p3(i7);
      throw t6;
    } finally {
      r4 = o7;
      t3();
    }
  }
}
function p3(i7) {
  for (var t6 = i7.s; void 0 !== t6; t6 = t6.n) t6.S.U(t6);
  i7.x = void 0;
  i7.s = void 0;
  _2(i7);
}
function g2(i7) {
  if (r4 !== this) throw new Error("Out-of-order effect");
  y3(this);
  r4 = i7;
  this.f &= -2;
  if (8 & this.f) p3(this);
  t3();
}
function S3(i7, t6) {
  this.x = i7;
  this.u = void 0;
  this.s = void 0;
  this.o = void 0;
  this.f = 32;
  this.name = null == t6 ? void 0 : t6.name;
  if (f3) f3.push(this);
}
S3.prototype.c = function() {
  var i7 = this.S();
  try {
    if (8 & this.f) return;
    if (void 0 === this.x) return;
    var t6 = this.x();
    if ("function" == typeof t6) this.u = t6;
  } finally {
    i7();
  }
};
S3.prototype.S = function() {
  if (1 & this.f) throw new Error("Cycle detected");
  this.f |= 1;
  this.f &= -9;
  _2(this);
  l3(this);
  s4++;
  var i7 = r4;
  r4 = this;
  return g2.bind(this, i7);
};
S3.prototype.N = function() {
  if (!(2 & this.f)) {
    this.f |= 2;
    this.o = h3;
    h3 = this;
  }
};
S3.prototype.d = function() {
  this.f |= 8;
  if (!(1 & this.f)) p3(this);
};
S3.prototype.dispose = function() {
  this.d();
};
function m2(i7, t6) {
  var n6 = new S3(i7, t6);
  try {
    n6.c();
  } catch (i8) {
    n6.d();
    throw i8;
  }
  var r8 = n6.d.bind(n6);
  r8[Symbol.dispose] = r8;
  return r8;
}

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
  const stop = m2(() => {
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
  const data = c4(initialValue);
  const pending2 = c4(false);
  const error = c4(null);
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
var routes = c4([]);
var pathname = c4(getBrowserWindow()?.location.pathname ?? "/");
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
    for (let i7 = 0; i7 < patternSegments.length; i7 += 1) {
      const patternSegment = patternSegments[i7];
      const pathSegment = pathSegments[i7];
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
var currentRoute = b3(() => matchPath(pathname.value, routes.value));
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
var pending = c4(false);

// ../../../../../../home/majora/.cache/deno/npm/registry.npmjs.org/lit-html/3.3.2/directive-helpers.js
var { I: t4 } = j;

// src/utils/define.ts
function defineCustomElement(tagName, constructor) {
  if (!customElements.get(tagName)) {
    customElements.define(tagName, constructor);
  }
}

// src/components/lv-app.ts
var LvApp = class extends i4 {
  static styles = i`
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
  converter: u,
  reflect: false,
  hasChanged: f
};
var r6 = (t6 = o6, e7, r8) => {
  const { kind: n6, metadata: i7 } = r8;
  let s5 = globalThis.litPropertyMetadata.get(i7);
  if (void 0 === s5 && globalThis.litPropertyMetadata.set(i7, s5 = /* @__PURE__ */ new Map()), "setter" === n6 && ((t6 = Object.create(t6)).wrapped = true), s5.set(r8.name, t6), "accessor" === n6) {
    const { name: o7 } = r8;
    return {
      set(r9) {
        const n7 = e7.get.call(this);
        e7.set.call(this, r9), this.requestUpdate(o7, n7, t6, true, r9);
      },
      init(e8) {
        return void 0 !== e8 && this.C(o7, void 0, t6, e8), e8;
      }
    };
  }
  if ("setter" === n6) {
    const { name: o7 } = r8;
    return function(r9) {
      const n7 = this[o7];
      e7.call(this, r9), this.requestUpdate(o7, n7, t6, true, r9);
    };
  }
  throw Error("Unsupported decorator location: " + n6);
};
function n5(t6) {
  return (e7, o7) => "object" == typeof o7 ? r6(t6, e7, o7) : ((t7, e8, o8) => {
    const r8 = e8.hasOwnProperty(o8);
    return e8.constructor.createProperty(o8, t7), r8 ? Object.getOwnPropertyDescriptor(e8, o8) : void 0;
  })(t6, e7, o7);
}

// ../../../../../../home/majora/.cache/deno/npm/registry.npmjs.org/@lit/reactive-element/2.1.2/decorators/state.js
function r7(r8) {
  return n5({
    ...r8,
    state: true,
    attribute: false
  });
}

// src/components/lv-nav.ts
function _ts_decorate(decorators, target, key, desc) {
  var c5 = arguments.length, r8 = c5 < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d4;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r8 = Reflect.decorate(decorators, target, key, desc);
  else for (var i7 = decorators.length - 1; i7 >= 0; i7--) if (d4 = decorators[i7]) r8 = (c5 < 3 ? d4(r8) : c5 > 3 ? d4(target, key, r8) : d4(target, key)) || r8;
  return c5 > 3 && r8 && Object.defineProperty(target, key, r8), r8;
}
var LvNav = class extends i4 {
  links = [];
  title = "";
  mobileOpen = false;
  static styles = i`
    :host {
      display: block;
      position: sticky;
      top: 0;
      z-index: 40;
      background: var(--lv-color-surface, #fff);
      border-bottom: 1px solid var(--lv-color-border, #e5e7eb);
      box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
    }

    .container {
      width: min(100%, 80rem);
      margin-inline: auto;
      padding: 0.75rem 1rem;
      display: grid;
      gap: 0.7rem;
    }

    .top {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 0.75rem;
    }

    .brand {
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      min-width: 0;
      color: #111827;
      font-size: 1.25rem;
      font-weight: 700;
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
      gap: 1.5rem;
    }

    a {
      text-decoration: none;
      color: #4b5563;
      font-size: 0.95rem;
      font-weight: 500;
      transition: color 150ms ease;
    }

    a:hover {
      color: #2563eb;
    }

    a[data-active="true"] {
      color: #2563eb;
      font-weight: 600;
    }

    .actions {
      display: none;
      align-items: center;
      gap: 0.5rem;
      flex-shrink: 0;
    }

    .toggle {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 2rem;
      height: 2rem;
      border: 0;
      border-radius: 0.375rem;
      background: transparent;
      color: #4b5563;
      cursor: pointer;
      padding: 0;
    }

    .toggle:hover {
      background: #f3f4f6;
      color: #111827;
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
      gap: 0.35rem;
      border-top: 1px solid #e5e7eb;
      padding-top: 0.7rem;
    }

    .mobile a {
      padding: 0.55rem 0.65rem;
      border-radius: 0.45rem;
    }

    .mobile a:hover,
    .mobile a[data-active="true"] {
      background: #f3f4f6;
      color: #111827;
    }

    @media (min-width: 768px) {
      .container {
        display: flex;
        align-items: center;
        justify-content: space-between;
      }

      .top {
        gap: 1rem;
      }

      .toggle,
      .mobile {
        display: none;
      }

      nav,
      .actions {
        display: inline-flex;
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

          <button class="toggle" @click="${this.toggleMobile}" aria-label="Toggle navigation">
            ${this.renderMenuIcon()}
          </button>
        </div>

        ${this.mobileOpen ? b2`
            <div class="mobile">${this.links.map((link) => this.renderLink(link))}<slot name="mobile-actions"></slot></div>
          ` : null}
      </div>
    `;
  }
};
_ts_decorate([
  n5({
    attribute: false
  })
], LvNav.prototype, "links", void 0);
_ts_decorate([
  n5({
    reflect: true
  })
], LvNav.prototype, "title", void 0);
_ts_decorate([
  r7()
], LvNav.prototype, "mobileOpen", void 0);
function defineLvNav() {
  defineCustomElement("lv-nav", LvNav);
}

// src/components/lv-button.ts
function _ts_decorate2(decorators, target, key, desc) {
  var c5 = arguments.length, r8 = c5 < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d4;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r8 = Reflect.decorate(decorators, target, key, desc);
  else for (var i7 = decorators.length - 1; i7 >= 0; i7--) if (d4 = decorators[i7]) r8 = (c5 < 3 ? d4(r8) : c5 > 3 ? d4(target, key, r8) : d4(target, key)) || r8;
  return c5 > 3 && r8 && Object.defineProperty(target, key, r8), r8;
}
var LvButton = class extends i4 {
  variant = "primary";
  size = "md";
  loading = false;
  disabled = false;
  static styles = i`
    :host {
      display: inline-block;
    }

    button {
      border: 1px solid transparent;
      border-radius: var(--lv-radius-md, 0.5rem);
      font-weight: 600;
      cursor: pointer;
      transition: all 160ms ease;
      font-family: inherit;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 0.5rem;
      width: 100%;
    }

    :host([size="sm"]) button {
      font-size: 0.8125rem;
      padding: 0.45rem 0.75rem;
    }

    :host([size="md"]) button {
      font-size: 0.875rem;
      padding: 0.6rem 0.95rem;
    }

    :host([size="lg"]) button {
      font-size: 0.95rem;
      padding: 0.75rem 1.125rem;
    }

    :host([variant="primary"]) button {
      background: var(--lv-color-primary, #2563eb);
      color: #fff;
    }

    :host([variant="primary"]) button:hover {
      background: var(--lv-color-primary-hover, #1d4ed8);
    }

    :host([variant="secondary"]) button {
      background: var(--lv-color-surface, #fff);
      color: var(--lv-color-text, #111827);
      border-color: var(--lv-color-border, #e5e7eb);
    }

    :host([variant="secondary"]) button:hover {
      background: #f3f4f6;
    }

    :host([variant="ghost"]) button {
      background: transparent;
      color: var(--lv-color-text, #111827);
    }

    :host([variant="ghost"]) button:hover {
      background: rgba(148, 163, 184, 0.15);
    }

    :host([variant="danger"]) button {
      background: var(--lv-color-danger, #dc2626);
      color: #fff;
    }

    :host([variant="danger"]) button:hover {
      filter: brightness(0.95);
    }

    button:disabled {
      opacity: 0.6;
      cursor: not-allowed;
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
_ts_decorate2([
  n5({
    reflect: true
  })
], LvButton.prototype, "variant", void 0);
_ts_decorate2([
  n5({
    reflect: true
  })
], LvButton.prototype, "size", void 0);
_ts_decorate2([
  n5({
    type: Boolean,
    reflect: true
  })
], LvButton.prototype, "loading", void 0);
_ts_decorate2([
  n5({
    type: Boolean,
    reflect: true
  })
], LvButton.prototype, "disabled", void 0);
function defineLvButton() {
  defineCustomElement("lv-button", LvButton);
}

// src/components/lv-input.ts
function _ts_decorate3(decorators, target, key, desc) {
  var c5 = arguments.length, r8 = c5 < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d4;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r8 = Reflect.decorate(decorators, target, key, desc);
  else for (var i7 = decorators.length - 1; i7 >= 0; i7--) if (d4 = decorators[i7]) r8 = (c5 < 3 ? d4(r8) : c5 > 3 ? d4(target, key, r8) : d4(target, key)) || r8;
  return c5 > 3 && r8 && Object.defineProperty(target, key, r8), r8;
}
var LvInput = class extends i4 {
  label = "";
  placeholder = "";
  value = "";
  type = "text";
  hint = "";
  static styles = i`
    :host {
      display: block;
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
      box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.18);
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
_ts_decorate3([
  n5({
    reflect: true
  })
], LvInput.prototype, "label", void 0);
_ts_decorate3([
  n5({
    reflect: true
  })
], LvInput.prototype, "placeholder", void 0);
_ts_decorate3([
  n5({
    reflect: true
  })
], LvInput.prototype, "value", void 0);
_ts_decorate3([
  n5({
    reflect: true
  })
], LvInput.prototype, "type", void 0);
_ts_decorate3([
  n5({
    reflect: true
  })
], LvInput.prototype, "hint", void 0);
function defineLvInput() {
  defineCustomElement("lv-input", LvInput);
}

// src/components/lv-surface.ts
function _ts_decorate4(decorators, target, key, desc) {
  var c5 = arguments.length, r8 = c5 < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d4;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r8 = Reflect.decorate(decorators, target, key, desc);
  else for (var i7 = decorators.length - 1; i7 >= 0; i7--) if (d4 = decorators[i7]) r8 = (c5 < 3 ? d4(r8) : c5 > 3 ? d4(target, key, r8) : d4(target, key)) || r8;
  return c5 > 3 && r8 && Object.defineProperty(target, key, r8), r8;
}
var LvSurface = class extends i4 {
  elevation = "flat";
  padding = "md";
  static styles = i`
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
_ts_decorate4([
  n5({
    reflect: true
  })
], LvSurface.prototype, "elevation", void 0);
_ts_decorate4([
  n5({
    reflect: true
  })
], LvSurface.prototype, "padding", void 0);
function defineLvSurface() {
  defineCustomElement("lv-surface", LvSurface);
}

// src/components/lv-grid.ts
function _ts_decorate5(decorators, target, key, desc) {
  var c5 = arguments.length, r8 = c5 < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d4;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r8 = Reflect.decorate(decorators, target, key, desc);
  else for (var i7 = decorators.length - 1; i7 >= 0; i7--) if (d4 = decorators[i7]) r8 = (c5 < 3 ? d4(r8) : c5 > 3 ? d4(target, key, r8) : d4(target, key)) || r8;
  return c5 > 3 && r8 && Object.defineProperty(target, key, r8), r8;
}
var LvGrid = class extends i4 {
  cols = 4;
  gap = 16;
  static styles = i`
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
_ts_decorate5([
  n5({
    type: Number,
    reflect: true
  })
], LvGrid.prototype, "cols", void 0);
_ts_decorate5([
  n5({
    type: Number,
    reflect: true
  })
], LvGrid.prototype, "gap", void 0);
function defineLvGrid() {
  defineCustomElement("lv-grid", LvGrid);
}

// src/components/lv-card.ts
function _ts_decorate6(decorators, target, key, desc) {
  var c5 = arguments.length, r8 = c5 < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d4;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r8 = Reflect.decorate(decorators, target, key, desc);
  else for (var i7 = decorators.length - 1; i7 >= 0; i7--) if (d4 = decorators[i7]) r8 = (c5 < 3 ? d4(r8) : c5 > 3 ? d4(target, key, r8) : d4(target, key)) || r8;
  return c5 > 3 && r8 && Object.defineProperty(target, key, r8), r8;
}
var LvCard = class extends i4 {
  title = "";
  subtitle = "";
  compact = false;
  static styles = i`
    :host {
      display: block;
      border: 1px solid var(--lv-color-border, #e5e7eb);
      background: var(--lv-color-surface, #fff);
      border-radius: var(--lv-radius-lg, 0.75rem);
      overflow: hidden;
      transition: transform 180ms ease, box-shadow 180ms ease;
    }

    :host(:hover) {
      transform: translateY(-2px);
      box-shadow: var(--lv-shadow-sm, 0 1px 2px rgba(0, 0, 0, 0.07));
    }

    .header {
      padding: 1rem 1rem 0.65rem;
      display: grid;
      gap: 0.25rem;
    }

    :host([compact]) .header {
      padding: 0.75rem 0.75rem 0.5rem;
    }

    .title {
      margin: 0;
      font-size: 0.95rem;
      font-weight: 700;
      color: var(--lv-color-text, #111827);
    }

    .subtitle {
      margin: 0;
      font-size: 0.8rem;
      color: var(--lv-color-muted, #6b7280);
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
_ts_decorate6([
  n5({
    reflect: true
  })
], LvCard.prototype, "title", void 0);
_ts_decorate6([
  n5({
    reflect: true
  })
], LvCard.prototype, "subtitle", void 0);
_ts_decorate6([
  n5({
    type: Boolean,
    reflect: true
  })
], LvCard.prototype, "compact", void 0);
function defineLvCard() {
  defineCustomElement("lv-card", LvCard);
}

// src/components/lv-badge.ts
function _ts_decorate7(decorators, target, key, desc) {
  var c5 = arguments.length, r8 = c5 < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d4;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r8 = Reflect.decorate(decorators, target, key, desc);
  else for (var i7 = decorators.length - 1; i7 >= 0; i7--) if (d4 = decorators[i7]) r8 = (c5 < 3 ? d4(r8) : c5 > 3 ? d4(target, key, r8) : d4(target, key)) || r8;
  return c5 > 3 && r8 && Object.defineProperty(target, key, r8), r8;
}
var LvBadge = class extends i4 {
  tone = "default";
  static styles = i`
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
      color: #374151;
      background: #f3f4f6;
      border-color: #e5e7eb;
    }

    :host([tone="success"]) {
      color: #065f46;
      background: #d1fae5;
      border-color: #a7f3d0;
    }

    :host([tone="warning"]) {
      color: #92400e;
      background: #fef3c7;
      border-color: #fde68a;
    }

    :host([tone="danger"]) {
      color: #991b1b;
      background: #fee2e2;
      border-color: #fecaca;
    }

    :host([tone="info"]) {
      color: #1e40af;
      background: #dbeafe;
      border-color: #bfdbfe;
    }
  `;
  render() {
    return b2`
      <slot></slot>
    `;
  }
};
_ts_decorate7([
  n5({
    reflect: true
  })
], LvBadge.prototype, "tone", void 0);
function defineLvBadge() {
  defineCustomElement("lv-badge", LvBadge);
}

// src/components/lv-table.ts
var LvTable = class extends i4 {
  static styles = i`
    :host {
      display: block;
      border: 1px solid var(--lv-color-border, #e5e7eb);
      border-radius: var(--lv-radius-lg, 0.75rem);
      overflow: auto;
      background: var(--lv-color-surface, #fff);
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

      lv-table thead th {
        text-align: left;
        color: var(--lv-color-muted, #6b7280);
        font-size: 0.75rem;
        font-weight: 600;
        text-transform: uppercase;
        letter-spacing: 0.04em;
        padding: 0.75rem;
        border-bottom: 1px solid var(--lv-color-border, #e5e7eb);
      }

      lv-table tbody td {
        padding: 0.75rem;
        border-bottom: 1px solid var(--lv-color-border, #e5e7eb);
        color: var(--lv-color-text, #111827);
      }

      lv-table tbody tr:hover {
        background: rgba(37, 99, 235, 0.04);
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

// src/components/lv-toolbar.ts
var LvToolbar = class extends i4 {
  static styles = i`
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

// src/components/lv-stat-card.ts
function _ts_decorate8(decorators, target, key, desc) {
  var c5 = arguments.length, r8 = c5 < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d4;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r8 = Reflect.decorate(decorators, target, key, desc);
  else for (var i7 = decorators.length - 1; i7 >= 0; i7--) if (d4 = decorators[i7]) r8 = (c5 < 3 ? d4(r8) : c5 > 3 ? d4(target, key, r8) : d4(target, key)) || r8;
  return c5 > 3 && r8 && Object.defineProperty(target, key, r8), r8;
}
var LvStatCard = class extends i4 {
  label = "";
  value = "";
  subtitle = "";
  tone = "default";
  static styles = i`
    :host {
      display: block;
      border: 1px solid #e5e7eb;
      border-radius: 0.5rem;
      padding: 1.5rem;
      transition: box-shadow 160ms ease;
      background: #f9fafb;
    }

    :host(:hover) {
      box-shadow: 0 4px 14px rgba(0, 0, 0, 0.08);
    }

    :host([tone="default"]) {
      background: #f9fafb;
      border-color: #e5e7eb;
    }

    :host([tone="success"]) {
      background: #f0fdf4;
      border-color: #bbf7d0;
    }

    :host([tone="warning"]) {
      background: #fefce8;
      border-color: #fde68a;
    }

    :host([tone="danger"]),
    :host([tone="error"]) {
      background: #fef2f2;
      border-color: #fecaca;
    }

    :host([tone="info"]) {
      background: #eff6ff;
      border-color: #bfdbfe;
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
      color: #6b7280;
    }

    .value {
      margin: 0.45rem 0 0;
      font-size: 1.875rem;
      line-height: 1.1;
      font-weight: 700;
      color: #111827;
    }

    .subtitle {
      margin: 0.25rem 0 0;
      font-size: 0.75rem;
      color: #6b7280;
    }

    .icon {
      display: inline-flex;
      padding: 0.75rem;
      border-radius: 0.5rem;
      color: #4b5563;
    }

    :host([tone="success"]) .icon {
      color: #16a34a;
    }

    :host([tone="warning"]) .icon {
      color: #ca8a04;
    }

    :host([tone="danger"]) .icon,
    :host([tone="error"]) .icon {
      color: #dc2626;
    }

    :host([tone="info"]) .icon {
      color: #2563eb;
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
_ts_decorate8([
  n5({
    reflect: true
  })
], LvStatCard.prototype, "label", void 0);
_ts_decorate8([
  n5({
    reflect: true
  })
], LvStatCard.prototype, "value", void 0);
_ts_decorate8([
  n5({
    reflect: true
  })
], LvStatCard.prototype, "subtitle", void 0);
_ts_decorate8([
  n5({
    reflect: true
  })
], LvStatCard.prototype, "tone", void 0);
function defineLvStatCard() {
  defineCustomElement("lv-stat-card", LvStatCard);
}

// src/components/lv-modal.ts
function _ts_decorate9(decorators, target, key, desc) {
  var c5 = arguments.length, r8 = c5 < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d4;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r8 = Reflect.decorate(decorators, target, key, desc);
  else for (var i7 = decorators.length - 1; i7 >= 0; i7--) if (d4 = decorators[i7]) r8 = (c5 < 3 ? d4(r8) : c5 > 3 ? d4(target, key, r8) : d4(target, key)) || r8;
  return c5 > 3 && r8 && Object.defineProperty(target, key, r8), r8;
}
var LvModal = class extends i4 {
  open = false;
  heading = "";
  static styles = i`
    :host {
      display: contents;
    }

    .overlay {
      position: fixed;
      inset: 0;
      background: rgba(17, 24, 39, 0.56);
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
      box-shadow: 0 25px 65px rgba(17, 24, 39, 0.35);
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
      background: #f3f4f6;
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
_ts_decorate9([
  n5({
    type: Boolean,
    reflect: true
  })
], LvModal.prototype, "open", void 0);
_ts_decorate9([
  n5({
    reflect: true
  })
], LvModal.prototype, "heading", void 0);
function defineLvModal() {
  defineCustomElement("lv-modal", LvModal);
}

// src/components/lv-tabs.ts
function _ts_decorate10(decorators, target, key, desc) {
  var c5 = arguments.length, r8 = c5 < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d4;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r8 = Reflect.decorate(decorators, target, key, desc);
  else for (var i7 = decorators.length - 1; i7 >= 0; i7--) if (d4 = decorators[i7]) r8 = (c5 < 3 ? d4(r8) : c5 > 3 ? d4(target, key, r8) : d4(target, key)) || r8;
  return c5 > 3 && r8 && Object.defineProperty(target, key, r8), r8;
}
var LvTabs = class extends i4 {
  tabs = [];
  active = "";
  static styles = i`
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
      border-color: #cbd5e1;
      color: var(--lv-color-text, #111827);
    }

    button[data-active="true"] {
      background: #dbeafe;
      border-color: #bfdbfe;
      color: #1e40af;
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
_ts_decorate10([
  n5({
    attribute: false
  })
], LvTabs.prototype, "tabs", void 0);
_ts_decorate10([
  n5({
    reflect: true
  })
], LvTabs.prototype, "active", void 0);
function defineLvTabs() {
  defineCustomElement("lv-tabs", LvTabs);
}

// src/components/lv-pagination.ts
function _ts_decorate11(decorators, target, key, desc) {
  var c5 = arguments.length, r8 = c5 < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d4;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r8 = Reflect.decorate(decorators, target, key, desc);
  else for (var i7 = decorators.length - 1; i7 >= 0; i7--) if (d4 = decorators[i7]) r8 = (c5 < 3 ? d4(r8) : c5 > 3 ? d4(target, key, r8) : d4(target, key)) || r8;
  return c5 > 3 && r8 && Object.defineProperty(target, key, r8), r8;
}
var LvPagination = class extends i4 {
  page = 1;
  total = 1;
  static styles = i`
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
      background: rgba(148, 163, 184, 0.16);
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
_ts_decorate11([
  n5({
    type: Number,
    reflect: true
  })
], LvPagination.prototype, "page", void 0);
_ts_decorate11([
  n5({
    type: Number,
    reflect: true
  })
], LvPagination.prototype, "total", void 0);
function defineLvPagination() {
  defineCustomElement("lv-pagination", LvPagination);
}

// src/components/lv-empty-state.ts
function _ts_decorate12(decorators, target, key, desc) {
  var c5 = arguments.length, r8 = c5 < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d4;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r8 = Reflect.decorate(decorators, target, key, desc);
  else for (var i7 = decorators.length - 1; i7 >= 0; i7--) if (d4 = decorators[i7]) r8 = (c5 < 3 ? d4(r8) : c5 > 3 ? d4(target, key, r8) : d4(target, key)) || r8;
  return c5 > 3 && r8 && Object.defineProperty(target, key, r8), r8;
}
var LvEmptyState = class extends i4 {
  heading = "No data";
  description = "";
  static styles = i`
    :host {
      display: block;
      border: 1px dashed var(--lv-color-border, #d1d5db);
      border-radius: var(--lv-radius-lg, 0.75rem);
      padding: 1.2rem;
      text-align: center;
      color: var(--lv-color-muted, #6b7280);
      background: #fff;
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
_ts_decorate12([
  n5({
    reflect: true
  })
], LvEmptyState.prototype, "heading", void 0);
_ts_decorate12([
  n5({
    reflect: true
  })
], LvEmptyState.prototype, "description", void 0);
function defineLvEmptyState() {
  defineCustomElement("lv-empty-state", LvEmptyState);
}

// src/components/lv-skeleton.ts
function _ts_decorate13(decorators, target, key, desc) {
  var c5 = arguments.length, r8 = c5 < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d4;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r8 = Reflect.decorate(decorators, target, key, desc);
  else for (var i7 = decorators.length - 1; i7 >= 0; i7--) if (d4 = decorators[i7]) r8 = (c5 < 3 ? d4(r8) : c5 > 3 ? d4(target, key, r8) : d4(target, key)) || r8;
  return c5 > 3 && r8 && Object.defineProperty(target, key, r8), r8;
}
var LvSkeleton = class extends i4 {
  shape = "line";
  width = "100%";
  height = "14px";
  static styles = i`
    :host {
      display: block;
    }

    .sk {
      width: var(--w, 100%);
      height: var(--h, 14px);
      border-radius: 0.55rem;
      background: linear-gradient(90deg, #e5e7eb 25%, #f3f4f6 37%, #e5e7eb 63%);
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
_ts_decorate13([
  n5({
    reflect: true
  })
], LvSkeleton.prototype, "shape", void 0);
_ts_decorate13([
  n5({
    reflect: true
  })
], LvSkeleton.prototype, "width", void 0);
_ts_decorate13([
  n5({
    reflect: true
  })
], LvSkeleton.prototype, "height", void 0);
function defineLvSkeleton() {
  defineCustomElement("lv-skeleton", LvSkeleton);
}

// src/components/lv-spinner.ts
function _ts_decorate14(decorators, target, key, desc) {
  var c5 = arguments.length, r8 = c5 < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d4;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r8 = Reflect.decorate(decorators, target, key, desc);
  else for (var i7 = decorators.length - 1; i7 >= 0; i7--) if (d4 = decorators[i7]) r8 = (c5 < 3 ? d4(r8) : c5 > 3 ? d4(target, key, r8) : d4(target, key)) || r8;
  return c5 > 3 && r8 && Object.defineProperty(target, key, r8), r8;
}
var LvSpinner = class extends i4 {
  size = "20px";
  static styles = i`
    :host {
      display: inline-flex;
      width: var(--s, 20px);
      height: var(--s, 20px);
      border: 2px solid rgba(37, 99, 235, 0.28);
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
_ts_decorate14([
  n5({
    reflect: true
  })
], LvSpinner.prototype, "size", void 0);
function defineLvSpinner() {
  defineCustomElement("lv-spinner", LvSpinner);
}

// src/components/lv-icon.ts
function _ts_decorate15(decorators, target, key, desc) {
  var c5 = arguments.length, r8 = c5 < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d4;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r8 = Reflect.decorate(decorators, target, key, desc);
  else for (var i7 = decorators.length - 1; i7 >= 0; i7--) if (d4 = decorators[i7]) r8 = (c5 < 3 ? d4(r8) : c5 > 3 ? d4(target, key, r8) : d4(target, key)) || r8;
  return c5 > 3 && r8 && Object.defineProperty(target, key, r8), r8;
}
var ICONS = {
  menu: w`
    <path d="M4 6h16M4 12h16M4 18h16" />
  `,
  close: w`
    <path d="M6 18L18 6M6 6l12 12" />
  `,
  search: w`
    <path d="m21 21-4.35-4.35" /><circle cx="11" cy="11" r="7" />
  `,
  settings: w`
    <path d="M12 15.5A3.5 3.5 0 1 0 12 8.5a3.5 3.5 0 0 0 0 7Z" /><path
      d="M19.4 15a1.6 1.6 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.6 1.6 0 0 0-1.8-.3 1.6 1.6 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.2a1.6 1.6 0 0 0-1-1.5 1.6 1.6 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.6 1.6 0 0 0 .3-1.8 1.6 1.6 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.2a1.6 1.6 0 0 0 1.5-1 1.6 1.6 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.6 1.6 0 0 0 1.8.3h.1a1.6 1.6 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.2a1.6 1.6 0 0 0 1 1.5h.1a1.6 1.6 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.6 1.6 0 0 0-.3 1.8v.1a1.6 1.6 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.2a1.6 1.6 0 0 0-1.4 1Z"
    />
  `,
  user: w`
    <circle cx="12" cy="8" r="4" /><path d="M4 20a8 8 0 0 1 16 0" />
  `,
  warning: w`
    <path
      d="M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0Z"
    /><path d="M12 9v4" /><path d="M12 17h.01" />
  `,
  check: w`
    <path d="m20 6-11 11-5-5" />
  `,
  download: w`
    <path d="M12 3v12" /><path d="m7 10 5 5 5-5" /><path d="M5 21h14" />
  `,
  activity: w`
    <path d="M22 12H2" /><path d="m15 5 7 7-7 7" />
  `,
  chart: w`
    <path d="M3 3v18h18" /><path d="m19 9-5 5-4-4-3 3" />
  `,
  clock: w`
    <circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" />
  `,
  filter: w`
    <path d="M4 6h16" /><path d="M7 12h10" /><path d="M10 18h4" />
  `,
  dots: w`
    <circle cx="12" cy="5" r="1" /><circle cx="12" cy="12" r="1" /><circle
      cx="12"
      cy="19"
      r="1"
    />
  `,
  flag: w`
    <path d="M4 21V5" /><path d="m4 5 4-2 4 2 4-2 4 2v8l-4-2-4 2-4-2-4 2" />
  `,
  book: w`
    <path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v17H6.5A2.5 2.5 0 0 0 4 22Z" /><path
      d="M4 5.5V22"
    /><path d="M9 7h7" />
  `
};
var LvIcon = class extends i4 {
  name = "dots";
  size = "16";
  stroke = "2";
  static styles = i`
    :host {
      display: inline-flex;
      width: 1em;
      height: 1em;
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
_ts_decorate15([
  n5({
    reflect: true
  })
], LvIcon.prototype, "name", void 0);
_ts_decorate15([
  n5({
    reflect: true
  })
], LvIcon.prototype, "size", void 0);
_ts_decorate15([
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
  defineLvNav();
  defineLvButton();
  defineLvInput();
  defineLvSurface();
  defineLvGrid();
  defineLvCard();
  defineLvBadge();
  defineLvTable();
  defineLvToolbar();
  defineLvStatCard();
  defineLvModal();
  defineLvTabs();
  defineLvPagination();
  defineLvEmptyState();
  defineLvSkeleton();
  defineLvSpinner();
  defineLvIcon();
}

// demo/src/main.ts
var popularBooks = [
  {
    title: "Project Hail Mary",
    author: "Andy Weir",
    cover: "/placeholder_cover.svg",
    rating: 4.8,
    status: "available"
  },
  {
    title: "The Way of Kings",
    author: "Brandon Sanderson",
    cover: "/placeholder_cover.svg",
    rating: 4.7
  },
  {
    title: "Dune",
    author: "Frank Herbert",
    cover: "/placeholder_cover.svg",
    rating: 4.6,
    status: "requested"
  },
  {
    title: "The Name of the Wind",
    author: "Patrick Rothfuss",
    cover: "/placeholder_cover.svg",
    rating: 4.8,
    status: "processing"
  },
  {
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    cover: "/placeholder_cover.svg",
    rating: 4.7
  },
  {
    title: "Red Rising",
    author: "Pierce Brown",
    cover: "/placeholder_cover.svg",
    rating: 4.6
  },
  {
    title: "The Expanse",
    author: "James S. A. Corey",
    cover: "/placeholder_cover.svg",
    rating: 4.5
  },
  {
    title: "Mistborn",
    author: "Brandon Sanderson",
    cover: "/placeholder_cover.svg",
    rating: 4.8
  }
];
var newReleaseBooks = [
  {
    title: "Wind and Truth",
    author: "Brandon Sanderson",
    cover: "/placeholder_cover.svg",
    rating: 4.6
  },
  {
    title: "The Will of the Many",
    author: "James Islington",
    cover: "/placeholder_cover.svg",
    rating: 4.5
  },
  {
    title: "Dungeon Crawler Carl",
    author: "Matt Dinniman",
    cover: "/placeholder_cover.svg",
    rating: 4.9
  },
  {
    title: "The Sunlit Man",
    author: "Brandon Sanderson",
    cover: "/placeholder_cover.svg",
    rating: 4.4,
    status: "available"
  },
  {
    title: "The Mercy of Gods",
    author: "James S. A. Corey",
    cover: "/placeholder_cover.svg",
    rating: 4.2
  },
  {
    title: "Empire of the Damned",
    author: "Jay Kristoff",
    cover: "/placeholder_cover.svg",
    rating: 4.1
  },
  {
    title: "Service Model",
    author: "Adrian Tchaikovsky",
    cover: "/placeholder_cover.svg",
    rating: 4
  },
  {
    title: "House of Open Wounds",
    author: "Adrian Tchaikovsky",
    cover: "/placeholder_cover.svg",
    rating: 4.3
  }
];
var dashboardData = resource(async () => {
  await new Promise((resolve) => setTimeout(resolve, 120));
  return {
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
        title: "Project Hail Mary",
        author: "Andy Weir",
        user: "majora",
        progress: 62,
        speed: "7.4 MB/s",
        eta: "18m",
        started: "11m ago"
      },
      {
        title: "The Expanse Collection",
        author: "James S. A. Corey",
        user: "rachel",
        progress: 31,
        speed: "4.1 MB/s",
        eta: "43m",
        started: "22m ago"
      },
      {
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
        title: "Project Hail Mary",
        user: "majora",
        status: "downloading",
        createdAt: "2m ago"
      },
      {
        title: "The Way of Kings",
        user: "rachel",
        status: "awaiting_approval",
        createdAt: "8m ago"
      },
      {
        title: "The Name of the Wind",
        user: "sam",
        status: "processing",
        createdAt: "24m ago"
      },
      {
        title: "The Sunlit Man",
        user: "leo",
        status: "completed",
        createdAt: "56m ago"
      }
    ],
    reportedIssues: [
      {
        title: "The Expanse: Cibola Burn",
        author: "James S. A. Corey",
        reporter: "rachel",
        reason: "Wrong narrator edition downloaded. Looking for Jefferson Mays version.",
        createdAt: "2h ago"
      },
      {
        title: "The Final Empire",
        author: "Brandon Sanderson",
        reporter: "sam",
        reason: "Corrupted chapters near 01:14:23 and 01:18:51.",
        createdAt: "4h ago"
      },
      {
        title: "Dune Messiah",
        author: "Frank Herbert",
        reporter: "majora",
        reason: "Metadata mismatch on release year and language tags.",
        createdAt: "7h ago"
      }
    ]
  };
});
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
function iconForMetric(label) {
  if (label.includes("Total")) return "chart";
  if (label.includes("Active")) return "activity";
  if (label.includes("Completed")) return "check";
  return "warning";
}
function bookCard(book) {
  return b2`
    <article class="book-card">
      <div class="book-cover-wrap">
        <img src="${book.cover}" alt="" />
        ${book.rating ? b2`
            <span class="rating-pill">★ ${book.rating.toFixed(1)}</span>
          ` : null} ${book.status === "available" ? b2`
            <span class="status-dot status-available"></span>
          ` : book.status === "requested" ? b2`
            <span class="status-dot status-requested"></span>
          ` : book.status === "processing" ? b2`
            <span class="status-dot status-processing"></span>
          ` : null}
      </div>
      <div class="book-meta">
        <p class="book-title">${book.title}</p>
        <p class="book-author">${book.author}</p>
      </div>
    </article>
  `;
}
function homeSection(title, dotClass, books) {
  return b2`
    <section class="home-section">
      <div class="sticky-wrap">
        <div class="sticky-head">
          <span class="section-dot ${dotClass}"></span>
          <h2 class="title-with-icon"><lv-icon name="book" size="18"></lv-icon>${title}</h2>
          <div class="head-actions">
            <lv-button size="sm" variant="secondary"><lv-icon name="filter" size="14"></lv-icon>Hide Available</lv-button>
            <lv-button size="sm" variant="secondary"><lv-icon name="settings" size="14"></lv-icon>Card Size</lv-button>
          </div>
        </div>
      </div>
      <div class="section-content">
        <div class="cards">${books.map((book) => bookCard(book))}</div>
      </div>
    </section>
  `;
}
function homeView() {
  return b2`
    <main class="page-main">
      ${homeSection("Popular Audiobooks", "dot-blue", popularBooks)} ${homeSection("New Releases", "dot-green", newReleaseBooks)}

      <section class="hero">
        <h3>Can't find what you're looking for?</h3>
        <p>Use our search to find any audiobook from Audible.</p>
        <div class="hero-cta"><lv-button><lv-icon name="search" size="15"></lv-icon>Search Audiobooks</lv-button></div>
      </section>
    </main>
  `;
}
function activeDownloadsTable(downloads) {
  return b2`
    <section class="admin-section">
      <div class="table-card">
        <div class="table-head"><span class="title-with-icon"><lv-icon name="download" size="16"></lv-icon>Active Downloads</span></div>
        <div class="table-wrap">
          <table class="admin-table">
            <thead>
              <tr>
                <th>Request</th>
                <th>User</th>
                <th>Progress</th>
                <th>Speed</th>
                <th>ETA</th>
                <th>Started</th>
              </tr>
            </thead>
            <tbody>
              ${downloads.map((download) => b2`
                  <tr>
                    <td>
                      <div class="request-main">
                        ${download.title} ${download.type === "ebook" ? b2`
                            <span class="ebook-pill">Ebook</span>
                          ` : null}
                      </div>
                      <div class="request-sub">${download.author}</div>
                    </td>
                    <td>${download.user}</td>
                    <td>
                      <div class="progress-wrap">
                        <div class="progress-track">
                          <div class="progress-fill" style="${`width:${download.progress}%`}"></div>
                        </div>
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
function recentRequestsTable(requests) {
  return b2`
    <section class="admin-section">
      <div class="table-card">
        <div class="table-toolbar">
          <h3 class="title-with-icon"><lv-icon name="clock" size="16"></lv-icon>Recent Requests</h3>
          <div class="toolbar-actions">
            <lv-input placeholder="Search requests"></lv-input>
            <lv-button size="sm"><lv-icon name="download" size="14"></lv-icon>Export</lv-button>
          </div>
        </div>
        <div class="table-wrap">
          <table class="admin-table">
            <thead>
              <tr>
                <th>Title</th>
                <th>User</th>
                <th>Status</th>
                <th>Created</th>
              </tr>
            </thead>
            <tbody>
              ${requests.map((request) => b2`
                  <tr>
                    <td>
                      <div class="request-main">
                        ${request.title} ${request.type === "ebook" ? b2`
                            <span class="ebook-pill">Ebook</span>
                          ` : null}
                      </div>
                    </td>
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
function reportedIssuesGrid(issues) {
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
function adminView() {
  if (dashboardData.pending.value) {
    return b2`
      <main class="page-main">
        <div class="admin-title">
          <h1 class="title-with-icon"><lv-icon name="chart" size="20"></lv-icon>Admin Dashboard</h1>
          <p>Loading metrics and request activity...</p>
        </div>
        <section class="admin-grid">
          ${Array.from({
      length: 4
    }).map(() => b2`
              <lv-skeleton shape="box" height="120px"></lv-skeleton>
            `)}
        </section>
      </main>
    `;
  }
  const data = dashboardData.data.value;
  if (!data) {
    return b2`

    `;
  }
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

      ${activeDownloadsTable(data.activeDownloads)} ${recentRequestsTable(data.recentRequests)} ${reportedIssuesGrid(data.reportedIssues)}
    </main>
  `;
}
function requestsView() {
  return b2`
    <main class="page-main">
      <div class="admin-title">
        <h1 class="title-with-icon"><lv-icon name="activity" size="20"></lv-icon>My Requests</h1>
        <p>Track all requests and current download status.</p>
      </div>
      <section class="admin-section">
        <div class="table-card">
          <div class="table-toolbar">
            <lv-tabs
              .tabs="${[
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
    }
  ]}"
              active="all"
            ></lv-tabs>
            <lv-pagination page="1" total="8"></lv-pagination>
          </div>
          <div class="cards compact-cards">
            ${popularBooks.slice(0, 4).map((book) => b2`
                <lv-card title="${book.title}" subtitle="${book.author}" compact>
                  <div class="request-card-foot">
                    <lv-badge tone="warning">downloading</lv-badge>
                    <span class="muted">updated 5m ago</span>
                  </div>
                </lv-card>
              `)}
          </div>
        </div>
      </section>
    </main>
  `;
}
function searchView() {
  return b2`
    <main class="page-main">
      <div class="admin-title">
        <h1 class="title-with-icon"><lv-icon name="search" size="20"></lv-icon>Search</h1>
        <p>Find and request audiobooks from Audible metadata.</p>
      </div>
      <section class="admin-section">
        <div class="table-card">
          <div class="table-toolbar">
            <div style="width:min(100%,28rem)">
              <lv-input
                label="Search Audible"
                placeholder="Book title, author, narrator"
              ></lv-input>
            </div>
            <lv-button><lv-icon name="search" size="15"></lv-icon>Search</lv-button>
          </div>
        </div>
      </section>
      <section class="admin-section">
        <lv-empty-state
          heading="No results yet"
          description="Start a search to populate the result grid in this frontend-only demo."
        ></lv-empty-state>
      </section>
    </main>
  `;
}
function notFoundView() {
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
dashboardData.run();
enhance("app-root", () => {
  const routeName = currentRoute.value?.name ?? "home";
  return b2`
    <lv-app>
      <lv-nav slot="header" title="ReadMeABook" .links="${navLinks()}">
        <img
          slot="brand-mark"
          src="/RMAB_1024x1024_ICON.png"
          width="32"
          height="32"
          alt=""
        />
        <span slot="actions" class="version-pill">v0.9.4</span>
        <lv-button slot="actions" size="sm" variant="secondary"><lv-icon name="user" size="14"></lv-icon>Profile</lv-button>
      </lv-nav>

      ${routeName === "home" ? homeView() : routeName === "admin" ? adminView() : routeName === "requests" ? requestsView() : routeName === "search" ? searchView() : notFoundView()}

      <footer slot="footer" class="demo-footer">
        ReadMeABook parity demo using Lightverb UI components and Extinguish state.
      </footer>
    </lv-app>
  `;
});
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
