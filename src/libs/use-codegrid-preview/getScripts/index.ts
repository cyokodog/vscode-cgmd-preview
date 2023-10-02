export const getScripts = () => {
  return /* script */ `var wt = Object.defineProperty;
var Et = (o, t, e) => t in o ? wt(o, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : o[t] = e;
var u = (o, t, e) => (Et(o, typeof t != "symbol" ? t + "" : t, e), e);
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const k = window, et = k.ShadowRoot && (k.ShadyCSS === void 0 || k.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, it = Symbol(), ot = /* @__PURE__ */ new WeakMap();
class yt {
  constructor(t, e, i) {
    if (this._$cssResult$ = !0, i !== it)
      throw Error("CSSResult is not constructable. Use \`unsafeCSS\` or \`css\` instead.");
    this.cssText = t, this.t = e;
  }
  get styleSheet() {
    let t = this.o;
    const e = this.t;
    if (et && t === void 0) {
      const i = e !== void 0 && e.length === 1;
      i && (t = ot.get(e)), t === void 0 && ((this.o = t = new CSSStyleSheet()).replaceSync(this.cssText), i && ot.set(e, t));
    }
    return t;
  }
  toString() {
    return this.cssText;
  }
}
const m = (o) => new yt(typeof o == "string" ? o : o + "", void 0, it), A = (o, ...t) => {
  const e = o.length === 1 ? o[0] : t.reduce((i, s, r) => i + ((n) => {
    if (n._$cssResult$ === !0)
      return n.cssText;
    if (typeof n == "number")
      return n;
    throw Error("Value passed to 'css' function must be a 'css' function result: " + n + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
  })(s) + o[r + 1], o[0]);
  return new yt(e, o, it);
}, Ct = (o, t) => {
  et ? o.adoptedStyleSheets = t.map((e) => e instanceof CSSStyleSheet ? e : e.styleSheet) : t.forEach((e) => {
    const i = document.createElement("style"), s = k.litNonce;
    s !== void 0 && i.setAttribute("nonce", s), i.textContent = e.cssText, o.appendChild(i);
  });
}, nt = et ? (o) => o : (o) => o instanceof CSSStyleSheet ? ((t) => {
  let e = "";
  for (const i of t.cssRules)
    e += i.cssText;
  return m(e);
})(o) : o;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var J;
const D = window, rt = D.trustedTypes, St = rt ? rt.emptyScript : "", lt = D.reactiveElementPolyfillSupport, tt = { toAttribute(o, t) {
  switch (t) {
    case Boolean:
      o = o ? St : null;
      break;
    case Object:
    case Array:
      o = o == null ? o : JSON.stringify(o);
  }
  return o;
}, fromAttribute(o, t) {
  let e = o;
  switch (t) {
    case Boolean:
      e = o !== null;
      break;
    case Number:
      e = o === null ? null : Number(o);
      break;
    case Object:
    case Array:
      try {
        e = JSON.parse(o);
      } catch {
        e = null;
      }
  }
  return e;
} }, mt = (o, t) => t !== o && (t == t || o == o), F = { attribute: !0, type: String, converter: tt, reflect: !1, hasChanged: mt };
class w extends HTMLElement {
  constructor() {
    super(), this._$Ei = /* @__PURE__ */ new Map(), this.isUpdatePending = !1, this.hasUpdated = !1, this._$El = null, this.u();
  }
  static addInitializer(t) {
    var e;
    this.finalize(), ((e = this.h) !== null && e !== void 0 ? e : this.h = []).push(t);
  }
  static get observedAttributes() {
    this.finalize();
    const t = [];
    return this.elementProperties.forEach((e, i) => {
      const s = this._$Ep(i, e);
      s !== void 0 && (this._$Ev.set(s, i), t.push(s));
    }), t;
  }
  static createProperty(t, e = F) {
    if (e.state && (e.attribute = !1), this.finalize(), this.elementProperties.set(t, e), !e.noAccessor && !this.prototype.hasOwnProperty(t)) {
      const i = typeof t == "symbol" ? Symbol() : "__" + t, s = this.getPropertyDescriptor(t, i, e);
      s !== void 0 && Object.defineProperty(this.prototype, t, s);
    }
  }
  static getPropertyDescriptor(t, e, i) {
    return { get() {
      return this[e];
    }, set(s) {
      const r = this[t];
      this[e] = s, this.requestUpdate(t, r, i);
    }, configurable: !0, enumerable: !0 };
  }
  static getPropertyOptions(t) {
    return this.elementProperties.get(t) || F;
  }
  static finalize() {
    if (this.hasOwnProperty("finalized"))
      return !1;
    this.finalized = !0;
    const t = Object.getPrototypeOf(this);
    if (t.finalize(), t.h !== void 0 && (this.h = [...t.h]), this.elementProperties = new Map(t.elementProperties), this._$Ev = /* @__PURE__ */ new Map(), this.hasOwnProperty("properties")) {
      const e = this.properties, i = [...Object.getOwnPropertyNames(e), ...Object.getOwnPropertySymbols(e)];
      for (const s of i)
        this.createProperty(s, e[s]);
    }
    return this.elementStyles = this.finalizeStyles(this.styles), !0;
  }
  static finalizeStyles(t) {
    const e = [];
    if (Array.isArray(t)) {
      const i = new Set(t.flat(1 / 0).reverse());
      for (const s of i)
        e.unshift(nt(s));
    } else
      t !== void 0 && e.push(nt(t));
    return e;
  }
  static _$Ep(t, e) {
    const i = e.attribute;
    return i === !1 ? void 0 : typeof i == "string" ? i : typeof t == "string" ? t.toLowerCase() : void 0;
  }
  u() {
    var t;
    this._$E_ = new Promise((e) => this.enableUpdating = e), this._$AL = /* @__PURE__ */ new Map(), this._$Eg(), this.requestUpdate(), (t = this.constructor.h) === null || t === void 0 || t.forEach((e) => e(this));
  }
  addController(t) {
    var e, i;
    ((e = this._$ES) !== null && e !== void 0 ? e : this._$ES = []).push(t), this.renderRoot !== void 0 && this.isConnected && ((i = t.hostConnected) === null || i === void 0 || i.call(t));
  }
  removeController(t) {
    var e;
    (e = this._$ES) === null || e === void 0 || e.splice(this._$ES.indexOf(t) >>> 0, 1);
  }
  _$Eg() {
    this.constructor.elementProperties.forEach((t, e) => {
      this.hasOwnProperty(e) && (this._$Ei.set(e, this[e]), delete this[e]);
    });
  }
  createRenderRoot() {
    var t;
    const e = (t = this.shadowRoot) !== null && t !== void 0 ? t : this.attachShadow(this.constructor.shadowRootOptions);
    return Ct(e, this.constructor.elementStyles), e;
  }
  connectedCallback() {
    var t;
    this.renderRoot === void 0 && (this.renderRoot = this.createRenderRoot()), this.enableUpdating(!0), (t = this._$ES) === null || t === void 0 || t.forEach((e) => {
      var i;
      return (i = e.hostConnected) === null || i === void 0 ? void 0 : i.call(e);
    });
  }
  enableUpdating(t) {
  }
  disconnectedCallback() {
    var t;
    (t = this._$ES) === null || t === void 0 || t.forEach((e) => {
      var i;
      return (i = e.hostDisconnected) === null || i === void 0 ? void 0 : i.call(e);
    });
  }
  attributeChangedCallback(t, e, i) {
    this._$AK(t, i);
  }
  _$EO(t, e, i = F) {
    var s;
    const r = this.constructor._$Ep(t, i);
    if (r !== void 0 && i.reflect === !0) {
      const n = (((s = i.converter) === null || s === void 0 ? void 0 : s.toAttribute) !== void 0 ? i.converter : tt).toAttribute(e, i.type);
      this._$El = t, n == null ? this.removeAttribute(r) : this.setAttribute(r, n), this._$El = null;
    }
  }
  _$AK(t, e) {
    var i;
    const s = this.constructor, r = s._$Ev.get(t);
    if (r !== void 0 && this._$El !== r) {
      const n = s.getPropertyOptions(r), d = typeof n.converter == "function" ? { fromAttribute: n.converter } : ((i = n.converter) === null || i === void 0 ? void 0 : i.fromAttribute) !== void 0 ? n.converter : tt;
      this._$El = r, this[r] = d.fromAttribute(e, n.type), this._$El = null;
    }
  }
  requestUpdate(t, e, i) {
    let s = !0;
    t !== void 0 && (((i = i || this.constructor.getPropertyOptions(t)).hasChanged || mt)(this[t], e) ? (this._$AL.has(t) || this._$AL.set(t, e), i.reflect === !0 && this._$El !== t && (this._$EC === void 0 && (this._$EC = /* @__PURE__ */ new Map()), this._$EC.set(t, i))) : s = !1), !this.isUpdatePending && s && (this._$E_ = this._$Ej());
  }
  async _$Ej() {
    this.isUpdatePending = !0;
    try {
      await this._$E_;
    } catch (e) {
      Promise.reject(e);
    }
    const t = this.scheduleUpdate();
    return t != null && await t, !this.isUpdatePending;
  }
  scheduleUpdate() {
    return this.performUpdate();
  }
  performUpdate() {
    var t;
    if (!this.isUpdatePending)
      return;
    this.hasUpdated, this._$Ei && (this._$Ei.forEach((s, r) => this[r] = s), this._$Ei = void 0);
    let e = !1;
    const i = this._$AL;
    try {
      e = this.shouldUpdate(i), e ? (this.willUpdate(i), (t = this._$ES) === null || t === void 0 || t.forEach((s) => {
        var r;
        return (r = s.hostUpdate) === null || r === void 0 ? void 0 : r.call(s);
      }), this.update(i)) : this._$Ek();
    } catch (s) {
      throw e = !1, this._$Ek(), s;
    }
    e && this._$AE(i);
  }
  willUpdate(t) {
  }
  _$AE(t) {
    var e;
    (e = this._$ES) === null || e === void 0 || e.forEach((i) => {
      var s;
      return (s = i.hostUpdated) === null || s === void 0 ? void 0 : s.call(i);
    }), this.hasUpdated || (this.hasUpdated = !0, this.firstUpdated(t)), this.updated(t);
  }
  _$Ek() {
    this._$AL = /* @__PURE__ */ new Map(), this.isUpdatePending = !1;
  }
  get updateComplete() {
    return this.getUpdateComplete();
  }
  getUpdateComplete() {
    return this._$E_;
  }
  shouldUpdate(t) {
    return !0;
  }
  update(t) {
    this._$EC !== void 0 && (this._$EC.forEach((e, i) => this._$EO(i, this[i], e)), this._$EC = void 0), this._$Ek();
  }
  updated(t) {
  }
  firstUpdated(t) {
  }
}
w.finalized = !0, w.elementProperties = /* @__PURE__ */ new Map(), w.elementStyles = [], w.shadowRootOptions = { mode: "open" }, lt == null || lt({ ReactiveElement: w }), ((J = D.reactiveElementVersions) !== null && J !== void 0 ? J : D.reactiveElementVersions = []).push("1.4.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var G;
const V = window, C = V.trustedTypes, ct = C ? C.createPolicy("lit-html", { createHTML: (o) => o }) : void 0, y = \`lit$\${(Math.random() + "").slice(9)}$\`, bt = "?" + y, Pt = \`<\${bt}>\`, S = document, U = (o = "") => S.createComment(o), T = (o) => o === null || typeof o != "object" && typeof o != "function", At = Array.isArray, Ot = (o) => At(o) || typeof (o == null ? void 0 : o[Symbol.iterator]) == "function", N = /<(?:(!--|\\/[^a-zA-Z])|(\\/?[a-zA-Z][^>\\s]*)|(\\/?$))/g, at = /-->/g, dt = />/g, b = RegExp(\`>|[ 	
\\f\\r](?:([^\\\\s"'>=/]+)([ 	
\\f\\r]*=[ 	
\\f\\r]*(?:[^ 	
\\f\\r"'\\\`<>=]|("|')|))|$)\`, "g"), ht = /'/g, pt = /"/g, xt = /^(?:script|style|textarea|title)$/i, Lt = (o) => (t, ...e) => ({ _$litType$: o, strings: t, values: e }), v = Lt(1), P = Symbol.for("lit-noChange"), p = Symbol.for("lit-nothing"), ut = /* @__PURE__ */ new WeakMap(), E = S.createTreeWalker(S, 129, null, !1), Nt = (o, t) => {
  const e = o.length - 1, i = [];
  let s, r = t === 2 ? "<svg>" : "", n = N;
  for (let l = 0; l < e; l++) {
    const c = o[l];
    let _, a, h = -1, f = 0;
    for (; f < c.length && (n.lastIndex = f, a = n.exec(c), a !== null); )
      f = n.lastIndex, n === N ? a[1] === "!--" ? n = at : a[1] !== void 0 ? n = dt : a[2] !== void 0 ? (xt.test(a[2]) && (s = RegExp("</" + a[2], "g")), n = b) : a[3] !== void 0 && (n = b) : n === b ? a[0] === ">" ? (n = s != null ? s : N, h = -1) : a[1] === void 0 ? h = -2 : (h = n.lastIndex - a[2].length, _ = a[1], n = a[3] === void 0 ? b : a[3] === '"' ? pt : ht) : n === pt || n === ht ? n = b : n === at || n === dt ? n = N : (n = b, s = void 0);
    const I = n === b && o[l + 1].startsWith("/>") ? " " : "";
    r += n === N ? c + Pt : h >= 0 ? (i.push(_), c.slice(0, h) + "$lit$" + c.slice(h) + y + I) : c + y + (h === -2 ? (i.push(void 0), l) : I);
  }
  const d = r + (o[e] || "<?>") + (t === 2 ? "</svg>" : "");
  if (!Array.isArray(o) || !o.hasOwnProperty("raw"))
    throw Error("invalid template strings array");
  return [ct !== void 0 ? ct.createHTML(d) : d, i];
};
class H {
  constructor({ strings: t, _$litType$: e }, i) {
    let s;
    this.parts = [];
    let r = 0, n = 0;
    const d = t.length - 1, l = this.parts, [c, _] = Nt(t, e);
    if (this.el = H.createElement(c, i), E.currentNode = this.el.content, e === 2) {
      const a = this.el.content, h = a.firstChild;
      h.remove(), a.append(...h.childNodes);
    }
    for (; (s = E.nextNode()) !== null && l.length < d; ) {
      if (s.nodeType === 1) {
        if (s.hasAttributes()) {
          const a = [];
          for (const h of s.getAttributeNames())
            if (h.endsWith("$lit$") || h.startsWith(y)) {
              const f = _[n++];
              if (a.push(h), f !== void 0) {
                const I = s.getAttribute(f.toLowerCase() + "$lit$").split(y), R = /([.?@])?(.*)/.exec(f);
                l.push({ type: 1, index: r, name: R[2], strings: I, ctor: R[1] === "." ? Tt : R[1] === "?" ? Mt : R[1] === "@" ? jt : W });
              } else
                l.push({ type: 6, index: r });
            }
          for (const h of a)
            s.removeAttribute(h);
        }
        if (xt.test(s.tagName)) {
          const a = s.textContent.split(y), h = a.length - 1;
          if (h > 0) {
            s.textContent = C ? C.emptyScript : "";
            for (let f = 0; f < h; f++)
              s.append(a[f], U()), E.nextNode(), l.push({ type: 2, index: ++r });
            s.append(a[h], U());
          }
        }
      } else if (s.nodeType === 8)
        if (s.data === bt)
          l.push({ type: 2, index: r });
        else {
          let a = -1;
          for (; (a = s.data.indexOf(y, a + 1)) !== -1; )
            l.push({ type: 7, index: r }), a += y.length - 1;
        }
      r++;
    }
  }
  static createElement(t, e) {
    const i = S.createElement("template");
    return i.innerHTML = t, i;
  }
}
function O(o, t, e = o, i) {
  var s, r, n, d;
  if (t === P)
    return t;
  let l = i !== void 0 ? (s = e._$Co) === null || s === void 0 ? void 0 : s[i] : e._$Cl;
  const c = T(t) ? void 0 : t._$litDirective$;
  return (l == null ? void 0 : l.constructor) !== c && ((r = l == null ? void 0 : l._$AO) === null || r === void 0 || r.call(l, !1), c === void 0 ? l = void 0 : (l = new c(o), l._$AT(o, e, i)), i !== void 0 ? ((n = (d = e)._$Co) !== null && n !== void 0 ? n : d._$Co = [])[i] = l : e._$Cl = l), l !== void 0 && (t = O(o, l._$AS(o, t.values), l, i)), t;
}
class Ut {
  constructor(t, e) {
    this.u = [], this._$AN = void 0, this._$AD = t, this._$AM = e;
  }
  get parentNode() {
    return this._$AM.parentNode;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  v(t) {
    var e;
    const { el: { content: i }, parts: s } = this._$AD, r = ((e = t == null ? void 0 : t.creationScope) !== null && e !== void 0 ? e : S).importNode(i, !0);
    E.currentNode = r;
    let n = E.nextNode(), d = 0, l = 0, c = s[0];
    for (; c !== void 0; ) {
      if (d === c.index) {
        let _;
        c.type === 2 ? _ = new z(n, n.nextSibling, this, t) : c.type === 1 ? _ = new c.ctor(n, c.name, c.strings, this, t) : c.type === 6 && (_ = new zt(n, this, t)), this.u.push(_), c = s[++l];
      }
      d !== (c == null ? void 0 : c.index) && (n = E.nextNode(), d++);
    }
    return r;
  }
  p(t) {
    let e = 0;
    for (const i of this.u)
      i !== void 0 && (i.strings !== void 0 ? (i._$AI(t, i, e), e += i.strings.length - 2) : i._$AI(t[e])), e++;
  }
}
class z {
  constructor(t, e, i, s) {
    var r;
    this.type = 2, this._$AH = p, this._$AN = void 0, this._$AA = t, this._$AB = e, this._$AM = i, this.options = s, this._$Cm = (r = s == null ? void 0 : s.isConnected) === null || r === void 0 || r;
  }
  get _$AU() {
    var t, e;
    return (e = (t = this._$AM) === null || t === void 0 ? void 0 : t._$AU) !== null && e !== void 0 ? e : this._$Cm;
  }
  get parentNode() {
    let t = this._$AA.parentNode;
    const e = this._$AM;
    return e !== void 0 && t.nodeType === 11 && (t = e.parentNode), t;
  }
  get startNode() {
    return this._$AA;
  }
  get endNode() {
    return this._$AB;
  }
  _$AI(t, e = this) {
    t = O(this, t, e), T(t) ? t === p || t == null || t === "" ? (this._$AH !== p && this._$AR(), this._$AH = p) : t !== this._$AH && t !== P && this.g(t) : t._$litType$ !== void 0 ? this.$(t) : t.nodeType !== void 0 ? this.T(t) : Ot(t) ? this.k(t) : this.g(t);
  }
  O(t, e = this._$AB) {
    return this._$AA.parentNode.insertBefore(t, e);
  }
  T(t) {
    this._$AH !== t && (this._$AR(), this._$AH = this.O(t));
  }
  g(t) {
    this._$AH !== p && T(this._$AH) ? this._$AA.nextSibling.data = t : this.T(S.createTextNode(t)), this._$AH = t;
  }
  $(t) {
    var e;
    const { values: i, _$litType$: s } = t, r = typeof s == "number" ? this._$AC(t) : (s.el === void 0 && (s.el = H.createElement(s.h, this.options)), s);
    if (((e = this._$AH) === null || e === void 0 ? void 0 : e._$AD) === r)
      this._$AH.p(i);
    else {
      const n = new Ut(r, this), d = n.v(this.options);
      n.p(i), this.T(d), this._$AH = n;
    }
  }
  _$AC(t) {
    let e = ut.get(t.strings);
    return e === void 0 && ut.set(t.strings, e = new H(t)), e;
  }
  k(t) {
    At(this._$AH) || (this._$AH = [], this._$AR());
    const e = this._$AH;
    let i, s = 0;
    for (const r of t)
      s === e.length ? e.push(i = new z(this.O(U()), this.O(U()), this, this.options)) : i = e[s], i._$AI(r), s++;
    s < e.length && (this._$AR(i && i._$AB.nextSibling, s), e.length = s);
  }
  _$AR(t = this._$AA.nextSibling, e) {
    var i;
    for ((i = this._$AP) === null || i === void 0 || i.call(this, !1, !0, e); t && t !== this._$AB; ) {
      const s = t.nextSibling;
      t.remove(), t = s;
    }
  }
  setConnected(t) {
    var e;
    this._$AM === void 0 && (this._$Cm = t, (e = this._$AP) === null || e === void 0 || e.call(this, t));
  }
}
class W {
  constructor(t, e, i, s, r) {
    this.type = 1, this._$AH = p, this._$AN = void 0, this.element = t, this.name = e, this._$AM = s, this.options = r, i.length > 2 || i[0] !== "" || i[1] !== "" ? (this._$AH = Array(i.length - 1).fill(new String()), this.strings = i) : this._$AH = p;
  }
  get tagName() {
    return this.element.tagName;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(t, e = this, i, s) {
    const r = this.strings;
    let n = !1;
    if (r === void 0)
      t = O(this, t, e, 0), n = !T(t) || t !== this._$AH && t !== P, n && (this._$AH = t);
    else {
      const d = t;
      let l, c;
      for (t = r[0], l = 0; l < r.length - 1; l++)
        c = O(this, d[i + l], e, l), c === P && (c = this._$AH[l]), n || (n = !T(c) || c !== this._$AH[l]), c === p ? t = p : t !== p && (t += (c != null ? c : "") + r[l + 1]), this._$AH[l] = c;
    }
    n && !s && this.j(t);
  }
  j(t) {
    t === p ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, t != null ? t : "");
  }
}
class Tt extends W {
  constructor() {
    super(...arguments), this.type = 3;
  }
  j(t) {
    this.element[this.name] = t === p ? void 0 : t;
  }
}
const Ht = C ? C.emptyScript : "";
class Mt extends W {
  constructor() {
    super(...arguments), this.type = 4;
  }
  j(t) {
    t && t !== p ? this.element.setAttribute(this.name, Ht) : this.element.removeAttribute(this.name);
  }
}
class jt extends W {
  constructor(t, e, i, s, r) {
    super(t, e, i, s, r), this.type = 5;
  }
  _$AI(t, e = this) {
    var i;
    if ((t = (i = O(this, t, e, 0)) !== null && i !== void 0 ? i : p) === P)
      return;
    const s = this._$AH, r = t === p && s !== p || t.capture !== s.capture || t.once !== s.once || t.passive !== s.passive, n = t !== p && (s === p || r);
    r && this.element.removeEventListener(this.name, this, s), n && this.element.addEventListener(this.name, this, t), this._$AH = t;
  }
  handleEvent(t) {
    var e, i;
    typeof this._$AH == "function" ? this._$AH.call((i = (e = this.options) === null || e === void 0 ? void 0 : e.host) !== null && i !== void 0 ? i : this.element, t) : this._$AH.handleEvent(t);
  }
}
class zt {
  constructor(t, e, i) {
    this.element = t, this.type = 6, this._$AN = void 0, this._$AM = e, this.options = i;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(t) {
    O(this, t);
  }
}
const vt = V.litHtmlPolyfillSupport;
vt == null || vt(H, z), ((G = V.litHtmlVersions) !== null && G !== void 0 ? G : V.litHtmlVersions = []).push("2.4.0");
const Bt = (o, t, e) => {
  var i, s;
  const r = (i = e == null ? void 0 : e.renderBefore) !== null && i !== void 0 ? i : t;
  let n = r._$litPart$;
  if (n === void 0) {
    const d = (s = e == null ? void 0 : e.renderBefore) !== null && s !== void 0 ? s : null;
    r._$litPart$ = n = new z(t.insertBefore(U(), d), d, void 0, e != null ? e : {});
  }
  return n._$AI(o), n;
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var Q, X;
class $ extends w {
  constructor() {
    super(...arguments), this.renderOptions = { host: this }, this._$Do = void 0;
  }
  createRenderRoot() {
    var t, e;
    const i = super.createRenderRoot();
    return (t = (e = this.renderOptions).renderBefore) !== null && t !== void 0 || (e.renderBefore = i.firstChild), i;
  }
  update(t) {
    const e = this.render();
    this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(t), this._$Do = Bt(e, this.renderRoot, this.renderOptions);
  }
  connectedCallback() {
    var t;
    super.connectedCallback(), (t = this._$Do) === null || t === void 0 || t.setConnected(!0);
  }
  disconnectedCallback() {
    var t;
    super.disconnectedCallback(), (t = this._$Do) === null || t === void 0 || t.setConnected(!1);
  }
  render() {
    return P;
  }
}
$.finalized = !0, $._$litElement$ = !0, (Q = globalThis.litElementHydrateSupport) === null || Q === void 0 || Q.call(globalThis, { LitElement: $ });
const gt = globalThis.litElementPolyfillSupport;
gt == null || gt({ LitElement: $ });
((X = globalThis.litElementVersions) !== null && X !== void 0 ? X : globalThis.litElementVersions = []).push("3.2.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const x = (o) => (t) => typeof t == "function" ? ((e, i) => (customElements.define(e, i), i))(o, t) : ((e, i) => {
  const { kind: s, elements: r } = i;
  return { kind: s, elements: r, finisher(n) {
    customElements.define(e, n);
  } };
})(o, t);
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const It = (o, t) => t.kind === "method" && t.descriptor && !("value" in t.descriptor) ? { ...t, finisher(e) {
  e.createProperty(t.key, o);
} } : { kind: "field", key: Symbol(), placement: "own", descriptor: {}, originalKey: t.key, initializer() {
  typeof t.initializer == "function" && (this[t.key] = t.initializer.call(this));
}, finisher(e) {
  e.createProperty(t.key, o);
} };
function g(o) {
  return (t, e) => e !== void 0 ? ((i, s, r) => {
    s.constructor.createProperty(r, i);
  })(o, t, e) : It(o, t);
}
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var Y;
((Y = window.HTMLSlotElement) === null || Y === void 0 ? void 0 : Y.prototype.assignedElements) != null;
const Rt = (o) => Object.entries(o).reduce((t, [e, i]) => i ? t.concat(e) : t, []).join(" "), kt = \`.cg-Livecode_Header{display:flex;min-height:41px;margin-bottom:1px;background-color:#ebe8e6}.cg-Livecode_Title{box-sizing:border-box;flex:0 1 auto;align-self:center;margin:0;line-height:1;font-weight:400;font-size:14px;padding:10px 10px 10px 15px}.cg-Livecode_Nav{flex:0 0 auto;margin-left:auto;font-size:14px}.cg-Livecode_NavList{display:flex;height:100%;margin:0;padding:0;list-style:none}.cg-Livecode_NavListItem{flex:0 0 auto;height:100%}.cg-Livecode_NavListButton{-webkit-appearance:none;display:flex;align-items:center;justify-content:center;height:100%;padding:0 10px;border:0;border-left:1px solid #fff;border-radius:0;background:transparent;font:inherit;line-height:1.3;color:inherit;text-decoration:none;text-align:left}.cg-Livecode_Body{box-sizing:border-box;position:relative;width:100%;height:var(--livecode-iframe-height, 340px);border:1px solid #ccc}.cg-Livecode_Iframe{border:0;width:100%;height:100%}.cg-Livecode_ClickToPlay{position:absolute;top:0;left:0;width:100%;height:100%;background-color:#777;z-index:1;color:#fff;opacity:1;visibility:visible;transition:0s visibility .2s,.2s opacity;font:inherit;font-size:16px}.-running .cg-Livecode_ClickToPlay{opacity:0;visibility:hidden}@media screen and (max-width: 750px){.cg-Livecode_Header{flex-wrap:wrap}.cg-Livecode_Title{width:100%}.cg-Livecode_Nav{width:100%;min-height:30px;border-top:1px solid #fff}.cg-Livecode_NavList{justify-content:flex-end}.cg-Livecode_NavListItem{flex:0 1 auto}}
\`;
var Dt = Object.defineProperty, Vt = Object.getOwnPropertyDescriptor, B = (o, t, e, i) => {
  for (var s = i > 1 ? void 0 : i ? Vt(t, e) : t, r = o.length - 1, n; r >= 0; r--)
    (n = o[r]) && (s = (i ? n(t, e, s) : n(s)) || s);
  return i && s && Dt(t, e, s), s;
};
let L = class extends $ {
  constructor() {
    super(...arguments);
    u(this, "src");
    u(this, "file");
    u(this, "title", "");
    u(this, "deferred", !1);
    u(this, "running", !1);
  }
  static get styles() {
    return A\`
      \${m(kt)}
    \`;
  }
  connectedCallback() {
    if (typeof this.src > "u")
      throw new Error("Missing required property 'src'.");
    super.connectedCallback();
  }
  render() {
    return v\`
      <section
        class=\${Rt({
      "cg-Livecode": !0,
      "-running": this.deferred && this.running
    })}
      >
        <header class="cg-Livecode_Header">
          <h1 class="cg-Livecode_Title">\${this.title}</h1>
          <nav class="cg-Livecode_Nav">
            <ul class="cg-Livecode_NavList">
              \${this.deferred ? v\`
                    <li
                      class="cg-Livecode_NavListItem"
                      class="cg-Livecode_NavListItem"
                    >
                      <button
                        class="cg-Livecode_NavListButton"
                        type="button"
                        @click=\${this.togglePlay}
                      >
                        繧ｵ繝ｳ繝励Ν繧�\${this.running ? "\\u505C\\u6B62" : "\\u518D\\u751F"}縺吶ｋ
                      </button>
                    </li>
                  \` : ""}
              \${this.file ? v\`
                    <li
                      class="cg-Livecode_NavListItem"
                      class="cg-Livecode_NavListItem"
                    >
                      <a
                        class="cg-Livecode_NavListButton"
                        href=\${this.file}
                        target="_blank"
                        >繧ｽ繝ｼ繧ｹ繧ｳ繝ｼ繝�</a
                      >
                    </li>
                  \` : ""}
              <li class="cg-Livecode_NavListItem">
                <a
                  class="cg-Livecode_NavListButton"
                  href=\${this.src}
                  target="_blank"
                  >譁ｰ隕上ち繝悶〒髢九￥</a
                >
              </li>
            </ul>
          </nav>
        </header>
        <div class="cg-Livecode_Body">
          <iframe
            class="cg-Livecode_Iframe"
            src=\${!this.deferred || this.running ? this.src : ""}
          ></iframe>
          \${this.deferred ? v\`
                <button
                  class="cg-Livecode_ClickToPlay"
                  @click=\${this.togglePlay}
                  type="button"
                >
                  繧ｯ繝ｪ繝�け縺励※蜀咲函縺吶ｋ
                </button>
              \` : ""}
        </div>
      </section>
    \`;
  }
  togglePlay() {
    this.running = !this.running, this.requestUpdate();
  }
};
B([
  g({ type: String })
], L.prototype, "src", 2);
B([
  g({ type: String })
], L.prototype, "file", 2);
B([
  g({ type: String })
], L.prototype, "title", 2);
B([
  g({ type: Boolean })
], L.prototype, "deferred", 2);
L = B([
  x("cg-livecode")
], L);
const qt = \`.cg-CodeBlock{--code-block-pre-side-padding: 40px;background-color:#f5f2f0}@media screen and (max-width: 950px){.cg-CodeBlock{--code-block-pre-side-padding: 10px}}::slotted(h5),::slotted(h4),::slotted(h3),::slotted(h2),::slotted(h1){box-sizing:border-box;height:40px;padding:10px var(--code-block-pre-side-padding);margin-bottom:0;border-bottom:1px solid #fff;background-color:#ebe8e6;line-height:1;font-size:14px;font-weight:500}::slotted(pre){line-height:1.6;margin:0;padding:var(--code-block-pre-side-padding);overflow:auto;font-family:Consolas,Monaco,Andale Mono,Ubuntu Mono,monospace}
\`;
var Wt = Object.defineProperty, Kt = Object.getOwnPropertyDescriptor, Zt = (o, t, e, i) => {
  for (var s = i > 1 ? void 0 : i ? Kt(t, e) : t, r = o.length - 1, n; r >= 0; r--)
    (n = o[r]) && (s = (i ? n(t, e, s) : n(s)) || s);
  return i && s && Wt(t, e, s), s;
};
let ft = class extends $ {
  static get styles() {
    return A\`
      \${m(qt)}
    \`;
  }
  render() {
    return v\`
      <div class="cg-CodeBlock">
        <slot></slot>
      </div>
    \`;
  }
};
ft = Zt([
  x("cg-code-block")
], ft);
const Jt = \`.cg-Note{color:#666}::slotted(h6),::slotted(h5),::slotted(h4),::slotted(h3),::slotted(h2),::slotted(h1){margin:0 0 1em;font-weight:700}
\`;
var Ft = Object.defineProperty, Gt = Object.getOwnPropertyDescriptor, Qt = (o, t, e, i) => {
  for (var s = i > 1 ? void 0 : i ? Gt(t, e) : t, r = o.length - 1, n; r >= 0; r--)
    (n = o[r]) && (s = (i ? n(t, e, s) : n(s)) || s);
  return i && s && Ft(t, e, s), s;
};
let $t = class extends $ {
  static get styles() {
    return A\`
      \${m(Jt)}
    \`;
  }
  render() {
    return v\`
      <div class="cg-Note">
        <slot></slot>
      </div>
    \`;
  }
};
$t = Qt([
  x("cg-note")
], $t);
const Xt = \`.cg-Column{padding:30px;border:1px solid #ccc}::slotted(h5),::slotted(h4),::slotted(h3),::slotted(h2),::slotted(h1){margin:0 0 1em}
\`;
var Yt = Object.defineProperty, te = Object.getOwnPropertyDescriptor, ee = (o, t, e, i) => {
  for (var s = i > 1 ? void 0 : i ? te(t, e) : t, r = o.length - 1, n; r >= 0; r--)
    (n = o[r]) && (s = (i ? n(t, e, s) : n(s)) || s);
  return i && s && Yt(t, e, s), s;
};
let _t = class extends $ {
  static get styles() {
    return A\`
      \${m(Xt)}
    \`;
  }
  render() {
    return v\`
      <div class="cg-Column">
        <slot></slot>
      </div>
    \`;
  }
};
_t = ee([
  x("cg-column")
], _t);
const ie = \`.cg-ImgBox{font-size:14px;margin:0}.cg-ImgBox_Caption{font-size:16px;font-weight:500}.cg-ImgBox_Img{display:block;max-width:100%;width:auto;height:auto;margin:10px 0 5px;border:1px solid #ccc}
\`;
var se = Object.defineProperty, oe = Object.getOwnPropertyDescriptor, K = (o, t, e, i) => {
  for (var s = i > 1 ? void 0 : i ? oe(t, e) : t, r = o.length - 1, n; r >= 0; r--)
    (n = o[r]) && (s = (i ? n(t, e, s) : n(s)) || s);
  return i && s && se(t, e, s), s;
};
let M = class extends $ {
  constructor() {
    super(...arguments);
    u(this, "src");
    u(this, "caption");
    u(this, "alt", "");
  }
  static get styles() {
    return A\`
      \${m(ie)}
    \`;
  }
  connectedCallback() {
    if (!this.src)
      throw new Error("Missing required property 'src'.");
    if (typeof this.caption > "u")
      throw new Error("Missing required property 'caption'.");
    super.connectedCallback();
  }
  render() {
    return v\`
      <figure class="cg-ImgBox">
        <figcaption class="cg-ImgBox_Caption">\${this.caption}</figcaption>
        <img class="cg-ImgBox_Img" src="\${this.src}" alt="\${this.alt}" />
        <slot></slot>
      </figure>
    \`;
  }
};
K([
  g({ type: String })
], M.prototype, "src", 2);
K([
  g({ type: String })
], M.prototype, "caption", 2);
K([
  g({ type: String })
], M.prototype, "alt", 2);
M = K([
  x("cg-imgbox")
], M);
const ne = \`.cg-Video{font-size:14px;margin:0}.cg-Video_Caption{font-size:16px;font-weight:500}.cg-Video_VideoEl{display:block;max-width:100%;width:auto;height:auto;margin:10px 0 5px}
\`;
var re = Object.defineProperty, le = Object.getOwnPropertyDescriptor, Z = (o, t, e, i) => {
  for (var s = i > 1 ? void 0 : i ? le(t, e) : t, r = o.length - 1, n; r >= 0; r--)
    (n = o[r]) && (s = (i ? n(t, e, s) : n(s)) || s);
  return i && s && re(t, e, s), s;
};
const ce = (o) => o.every((t) => t.length === 2 && t.every((e) => typeof e == "string"));
let j = class extends $ {
  constructor() {
    super(...arguments);
    u(this, "srcset");
    u(this, "type");
    u(this, "caption", "");
  }
  static get styles() {
    return A\`
      \${m(ne)}
    \`;
  }
  connectedCallback() {
    if (!this.srcset)
      throw new Error("Missing required property 'srcset'.");
    if (!ce(this.srcset))
      throw new Error("Invalid value of 'srcset'.");
    super.connectedCallback();
  }
  render() {
    return v\`
      <figure class="cg-Video">
        \${this.caption ? v\`
              <figcaption class="cg-Video_Caption">\${this.caption}</figcaption>
            \` : ""}
        <video class="cg-Video_VideoEl" controls muted>
          \${this.srcset.map(
      ([t, e]) => v\` <source src="\${t}" type="\${e}" /> \`
    )}
        </video>
        <slot></slot>
      </figure>
    \`;
  }
};
Z([
  g({ type: Array })
], j.prototype, "srcset", 2);
Z([
  g({ type: String })
], j.prototype, "type", 2);
Z([
  g({ type: String })
], j.prototype, "caption", 2);
j = Z([
  x("cg-video")
], j);
const ae = \`.cg-Audio{font-size:14px;margin:0}.cg-Audio_Caption{font-size:16px;font-weight:500}.cg-Audio_AudioEl{display:block;margin:10px 0 5px}
\`;
var de = Object.defineProperty, he = Object.getOwnPropertyDescriptor, st = (o, t, e, i) => {
  for (var s = i > 1 ? void 0 : i ? he(t, e) : t, r = o.length - 1, n; r >= 0; r--)
    (n = o[r]) && (s = (i ? n(t, e, s) : n(s)) || s);
  return i && s && de(t, e, s), s;
};
let q = class extends $ {
  constructor() {
    super(...arguments);
    u(this, "src");
    u(this, "caption", "");
  }
  static get styles() {
    return A\`
      \${m(ae)}
    \`;
  }
  connectedCallback() {
    if (!this.src)
      throw new Error("Missing required property 'src'.");
    super.connectedCallback();
  }
  render() {
    return v\`
      <figure class="cg-Audio">
        \${this.caption ? v\`
              <figcaption class="cg-Audio_Caption">\${this.caption}</figcaption>
            \` : ""}
        <audio class="cg-Audio_AudioEl" src="\${this.src}" controls></audio>
        <slot></slot>
      </figure>
    \`;
  }
};
st([
  g({ type: String })
], q.prototype, "src", 2);
st([
  g({ type: String })
], q.prototype, "caption", 2);
q = st([
  x("cg-audio")
], q);`;
};
