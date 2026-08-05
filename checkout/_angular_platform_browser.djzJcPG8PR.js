var Ue = Object.defineProperty, xe = Object.defineProperties;
var Be = Object.getOwnPropertyDescriptors;
var q = Object.getOwnPropertySymbols;
var je = Object.prototype.hasOwnProperty, Ve = Object.prototype.propertyIsEnumerable;
var Q = (n, r, e) => r in n ? Ue(n, r, { enumerable: !0, configurable: !0, writable: !0, value: e }) : n[r] = e, I = (n, r) => { for (var e in r ||= {})
    je.call(r, e) && Q(n, e, r[e]); if (q)
    for (var e of q(r))
        Ve.call(r, e) && Q(n, e, r[e]); return n; }, ee = (n, r) => xe(n, Be(r));
var j = (n, r, e) => new Promise((t, o) => { var s = c => { try {
    a(e.next(c));
}
catch (d) {
    o(d);
} }, i = c => { try {
    a(e.throw(c));
}
catch (d) {
    o(d);
} }, a = c => c.done ? t(c.value) : Promise.resolve(c.value).then(s, i); a((e = e.apply(n, r)).next()); });
import { \u0275DomAdapter as Qe, \u0275setRootDomAdapter as et, \u0275parseCookieValue as tt, \u0275getDOM as he, DOCUMENT as me, CommonModule as nt, \u0275PLATFORM_BROWSER_ID as rt } from "@angular/common";
import * as m from "@angular/core";
import { \u0275global as g, \u0275RuntimeError as ot, InjectionToken as sn, ApplicationModule as st, \u0275INJECTOR_SCOPE as it, ErrorHandler as ge, \u0275SHARED_STYLES_HOST as de, RendererFactory2 as at, \u0275TESTABILITY_GETTER as Y, NgZone as ue, TestabilityRegistry as fe, Testability as K, \u0275TESTABILITY as ct, \u0275internalCreateApplication as ye, createPlatformFactory as lt, platformCore as dt, PLATFORM_ID as ut, PLATFORM_INITIALIZER as ft, \u0275USE_PENDING_TASKS as pt, \u0275resolveComponentResources as an, \u0275setDocument as ht } from "@angular/core";
import { DOCUMENT as $, \u0275getDOM as Fe } from "@angular/common";
import * as l from "@angular/core";
import { InjectionToken as oe, \u0275RuntimeError as F, APP_ID as se, CSP_NONCE as ie, PLATFORM_ID as ze, ViewEncapsulation as E, \u0275SHARED_STYLES_HOST as $e, \u0275TracingService as Ge, RendererStyleFlags2 as O, \u0275allLeavingAnimations as Ye } from "@angular/core";
var v = class {
    _doc;
    constructor(r) { this._doc = r; }
    manager;
}, w = (() => { class n extends v {
    constructor(e) { super(e); }
    supports(e) { return !0; }
    addEventListener(e, t, o, s) { return e.addEventListener(t, o, s), () => this.removeEventListener(e, t, o, s); }
    removeEventListener(e, t, o, s) { return e.removeEventListener(t, o, s); }
    static \u0275fac = function (t) { return new (t || n)(l.\u0275\u0275inject($)); };
    static \u0275prov = l.\u0275\u0275defineInjectable({ token: n, factory: n.\u0275fac });
} return n; })(), R = new oe(""), H = (() => { class n {
    _zone;
    _plugins;
    _eventNameToPlugin = new Map;
    constructor(e, t) { this._zone = t, e.forEach(i => { i.manager = this; }); let o = e.filter(i => !(i instanceof w)); this._plugins = o.slice().reverse(); let s = e.find(i => i instanceof w); s && this._plugins.push(s); }
    addEventListener(e, t, o, s) { return this._findPluginFor(t).addEventListener(e, t, o, s); }
    getZone() { return this._zone; }
    _findPluginFor(e) { let t = this._eventNameToPlugin.get(e); if (t)
        return t; if (t = this._plugins.find(s => s.supports(e)), !t)
        throw new F(-5101, !1); return this._eventNameToPlugin.set(e, t), t; }
    static \u0275fac = function (t) { return new (t || n)(l.\u0275\u0275inject(R), l.\u0275\u0275inject(l.NgZone)); };
    static \u0275prov = l.\u0275\u0275defineInjectable({ token: n, factory: n.\u0275fac });
} return n; })(), b = "ng-app-id";
function te(n) { for (let r of n)
    r.remove(); }
function ne(n, r) { let e = r.createElement("style"); return e.textContent = n, e; }
function Ke(n, r, e, t) { let o = n.head?.querySelectorAll(`style[${b}="${r}"],link[${b}="${r}"]`); if (!o || o.length === 0)
    return !1; for (let s of o)
    s.removeAttribute(b), s instanceof HTMLLinkElement ? t.set(s.href.slice(s.href.lastIndexOf("/") + 1), { usage: 0, elements: [s] }) : s.textContent && e.set(s.textContent, { usage: 0, elements: [s] }); return !0; }
function z(n, r) { let e = r.createElement("link"); return e.setAttribute("rel", "stylesheet"), e.setAttribute("href", n), e; }
var P = (() => { class n {
    doc;
    appId;
    nonce;
    inline = new Map;
    external = new Map;
    hosts = new Set;
    constructor(e, t, o, s = {}) { this.doc = e, this.appId = t, this.nonce = o, Ke(e, t, this.inline, this.external) && this.hosts.add(e.head); }
    addStyles(e, t) { for (let o of e)
        this.addUsage(o, this.inline, ne); t?.forEach(o => this.addUsage(o, this.external, z)); }
    removeStyles(e, t) { for (let o of e)
        this.removeUsage(o, this.inline); t?.forEach(o => this.removeUsage(o, this.external)); }
    addUsage(e, t, o) { let s = t.get(e); s ? s.usage++ : t.set(e, { usage: 1, elements: [...this.hosts].map(i => this.addElement(i, o(e, this.doc))) }); }
    removeUsage(e, t) { let o = t.get(e); o && (o.usage--, o.usage <= 0 && (te(o.elements), t.delete(e))); }
    ngOnDestroy() { for (let [, { elements: e }] of [...this.inline, ...this.external])
        te(e); this.hosts.clear(); }
    addHost(e) { if (!this.hosts.has(e)) {
        this.hosts.add(e);
        for (let [t, { elements: o }] of this.inline)
            o.push(this.addElement(e, ne(t, this.doc)));
        for (let [t, { elements: o }] of this.external)
            o.push(this.addElement(e, z(t, this.doc)));
    } }
    removeHost(e) { this.hosts.delete(e); for (let t of [...this.inline.values(), ...this.external.values()]) {
        let o = [];
        for (let s of t.elements)
            s.parentNode === e ? s.remove() : o.push(s);
        t.elements = o;
    } }
    addElement(e, t) { return this.nonce && t.setAttribute("nonce", this.nonce), typeof ngServerMode < "u" && ngServerMode && t.setAttribute(b, this.appId), e.appendChild(t); }
    static \u0275fac = function (t) { return new (t || n)(l.\u0275\u0275inject($), l.\u0275\u0275inject(se), l.\u0275\u0275inject(ie, 8), l.\u0275\u0275inject(ze)); };
    static \u0275prov = l.\u0275\u0275defineInjectable({ token: n, factory: n.\u0275fac });
} return n; })(), V = { svg: "http://www.w3.org/2000/svg", xhtml: "http://www.w3.org/1999/xhtml", xlink: "http://www.w3.org/1999/xlink", xml: "http://www.w3.org/XML/1998/namespace", xmlns: "http://www.w3.org/2000/xmlns/", math: "http://www.w3.org/1998/Math/MathML" }, G = /%COMP%/g;
var ae = "%COMP%", Ze = `_nghost-${ae}`, We = `_ngcontent-${ae}`, Je = !0, ce = new oe("", { factory: () => Je });
function Xe(n) { return We.replace(G, n); }
function qe(n) { return Ze.replace(G, n); }
function le(n, r) { return r.map(e => e.replace(G, n)); }
var k = (() => { class n {
    eventManager;
    sharedStylesHost;
    appId;
    removeStylesOnCompDestroy;
    doc;
    ngZone;
    nonce;
    tracingService;
    rendererByCompId = new Map;
    defaultRenderer;
    constructor(e, t, o, s, i, a, c = null, d = null) { this.eventManager = e, this.sharedStylesHost = t, this.appId = o, this.removeStylesOnCompDestroy = s, this.doc = i, this.ngZone = a, this.nonce = c, this.tracingService = d, this.defaultRenderer = new _(e, i, a, this.tracingService); }
    createRenderer(e, t) { if (!e || !t)
        return this.defaultRenderer; typeof ngServerMode < "u" && ngServerMode && (t.encapsulation === E.ShadowDom || t.encapsulation === E.ExperimentalIsolatedShadowDom) && (t = ee(I({}, t), { encapsulation: E.Emulated })); let o = this.getOrCreateRenderer(e, t); return o instanceof L ? o.applyToHost(e) : o instanceof M && o.applyStyles(), o; }
    getOrCreateRenderer(e, t) { let o = this.rendererByCompId, s = o.get(t.id); if (!s) {
        let i = this.doc, a = this.ngZone, c = this.eventManager, d = this.sharedStylesHost, f = this.removeStylesOnCompDestroy, p = this.tracingService;
        switch (t.encapsulation) {
            case E.Emulated:
                s = new L(c, d, t, this.appId, f, i, a, p);
                break;
            case E.ShadowDom: return new N(c, e, t, i, a, this.nonce, p, d);
            case E.ExperimentalIsolatedShadowDom: return new N(c, e, t, i, a, this.nonce, p);
            default:
                s = new M(c, d, t, f, i, a, p);
                break;
        }
        o.set(t.id, s);
    } return s; }
    ngOnDestroy() { this.rendererByCompId.clear(); }
    componentReplaced(e) { this.rendererByCompId.delete(e); }
    static \u0275fac = function (t) { return new (t || n)(l.\u0275\u0275inject(H), l.\u0275\u0275inject($e), l.\u0275\u0275inject(se), l.\u0275\u0275inject(ce), l.\u0275\u0275inject($), l.\u0275\u0275inject(l.NgZone), l.\u0275\u0275inject(ie), l.\u0275\u0275inject(Ge, 8)); };
    static \u0275prov = l.\u0275\u0275defineInjectable({ token: n, factory: n.\u0275fac });
} return n; })(), _ = class {
    eventManager;
    doc;
    ngZone;
    tracingService;
    data = Object.create(null);
    throwOnSyntheticProps = !0;
    constructor(r, e, t, o) { this.eventManager = r, this.doc = e, this.ngZone = t, this.tracingService = o; }
    destroy() { }
    destroyNode = null;
    createElement(r, e) { return e ? this.doc.createElementNS(V[e] || e, r) : this.doc.createElement(r); }
    createComment(r) { return this.doc.createComment(r); }
    createText(r) { return this.doc.createTextNode(r); }
    appendChild(r, e) { (re(r) ? r.content : r).appendChild(e); }
    insertBefore(r, e, t) { r && (re(r) ? r.content : r).insertBefore(e, t); }
    removeChild(r, e) { e.remove(); }
    selectRootElement(r, e) { let t = typeof r == "string" ? this.doc.querySelector(r) : r; if (!t)
        throw new F(-5104, !1); return e || (t.textContent = ""), t; }
    parentNode(r) { return r.parentNode; }
    nextSibling(r) { return r.nextSibling; }
    setAttribute(r, e, t, o) { if (o) {
        e = o + ":" + e;
        let s = V[o];
        s ? r.setAttributeNS(s, e, t) : r.setAttribute(e, t);
    }
    else
        r.setAttribute(e, t); }
    removeAttribute(r, e, t) { if (t) {
        let o = V[t];
        o ? r.removeAttributeNS(o, e) : r.removeAttribute(`${t}:${e}`);
    }
    else
        r.removeAttribute(e); }
    addClass(r, e) { r.classList.add(e); }
    removeClass(r, e) { r.classList.remove(e); }
    setStyle(r, e, t, o) { o & (O.DashCase | O.Important) ? r.style.setProperty(e, t, o & O.Important ? "important" : "") : r.style[e] = t; }
    removeStyle(r, e, t) { t & O.DashCase ? r.style.removeProperty(e) : r.style[e] = ""; }
    setProperty(r, e, t) { r != null && (r[e] = t); }
    setValue(r, e) { r.nodeValue = e; }
    listen(r, e, t, o) { if (typeof r == "string" && (r = Fe().getGlobalEventTarget(this.doc, r), !r))
        throw new F(-5102, !1); let s = this.decoratePreventDefault(t); return this.tracingService?.wrapEventListener && (s = this.tracingService.wrapEventListener(r, e, s)), this.eventManager.addEventListener(r, e, s, o); }
    decoratePreventDefault(r) { return e => { if (e === "__ngUnwrap__")
        return r; (typeof ngServerMode < "u" && ngServerMode ? this.ngZone.runGuarded(() => r(e)) : r(e)) === !1 && e.preventDefault(); }; }
};
function re(n) { return n.tagName === "TEMPLATE" && n.content !== void 0; }
var N = class extends _ {
    hostEl;
    sharedStylesHost;
    shadowRoot;
    constructor(r, e, t, o, s, i, a, c) { super(r, o, s, a), this.hostEl = e, this.sharedStylesHost = c, this.shadowRoot = e.attachShadow({ mode: "open" }), this.sharedStylesHost && this.sharedStylesHost.addHost(this.shadowRoot); let d = t.styles; d = le(t.id, d); for (let p of d) {
        let y = document.createElement("style");
        i && y.setAttribute("nonce", i), y.textContent = p, this.shadowRoot.appendChild(y);
    } let f = t.getExternalStyles?.(); if (f)
        for (let p of f) {
            let y = z(p, o);
            i && y.setAttribute("nonce", i), this.shadowRoot.appendChild(y);
        } }
    nodeOrShadowRoot(r) { return r === this.hostEl ? this.shadowRoot : r; }
    appendChild(r, e) { return super.appendChild(this.nodeOrShadowRoot(r), e); }
    insertBefore(r, e, t) { return super.insertBefore(this.nodeOrShadowRoot(r), e, t); }
    removeChild(r, e) { return super.removeChild(null, e); }
    parentNode(r) { return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(r))); }
    destroy() { this.sharedStylesHost && this.sharedStylesHost.removeHost(this.shadowRoot); }
}, M = class extends _ {
    sharedStylesHost;
    removeStylesOnCompDestroy;
    styles;
    styleUrls;
    constructor(r, e, t, o, s, i, a, c) { super(r, s, i, a), this.sharedStylesHost = e, this.removeStylesOnCompDestroy = o; let d = t.styles; this.styles = c ? le(c, d) : d, this.styleUrls = t.getExternalStyles?.(c); }
    applyStyles() { this.sharedStylesHost.addStyles(this.styles, this.styleUrls); }
    destroy() { this.removeStylesOnCompDestroy && Ye.size === 0 && this.sharedStylesHost.removeStyles(this.styles, this.styleUrls); }
}, L = class extends M {
    contentAttr;
    hostAttr;
    constructor(r, e, t, o, s, i, a, c) { let d = o + "-" + t.id; super(r, e, t, s, i, a, c, d), this.contentAttr = Xe(d), this.hostAttr = qe(d); }
    applyToHost(r) { this.applyStyles(), this.setAttribute(r, this.hostAttr, ""); }
    createElement(r, e) { let t = super.createElement(r, e); return super.setAttribute(t, this.contentAttr, ""), t; }
};
var U = class n extends Qe {
    supportsDOMEvents = !0;
    static makeCurrent() { et(new n); }
    onAndCancel(r, e, t, o) { return r.addEventListener(e, t, o), () => { r.removeEventListener(e, t, o); }; }
    dispatchEvent(r, e) { r.dispatchEvent(e); }
    remove(r) { r.remove(); }
    createElement(r, e) { return e = e || this.getDefaultDocument(), e.createElement(r); }
    createHtmlDocument() { return document.implementation.createHTMLDocument("fakeTitle"); }
    getDefaultDocument() { return document; }
    isElementNode(r) { return r.nodeType === Node.ELEMENT_NODE; }
    isShadowRoot(r) { return r instanceof DocumentFragment; }
    getGlobalEventTarget(r, e) { return e === "window" ? window : e === "document" ? r : e === "body" ? r.body : null; }
    getBaseHref(r) { let e = mt(); return e == null ? null : gt(e); }
    resetBaseElement() { D = null; }
    getUserAgent() { return window.navigator.userAgent; }
    getCookie(r) { return tt(document.cookie, r); }
}, D = null;
function mt() { return D = D || document.head.querySelector("base"), D ? D.getAttribute("href") : null; }
function gt(n) { return new URL(n, document.baseURI).pathname; }
var x = class {
    addToWindow(r) { g.getAngularTestability = (t, o = !0) => { let s = r.findTestabilityInTree(t, o); if (s == null)
        throw new ot(5103, !1); return s; }, g.getAllAngularTestabilities = () => r.getAllTestabilities(), g.getAllAngularRootElements = () => r.getAllRootElements(); let e = t => { let o = g.getAllAngularTestabilities(), s = o.length, i = function () { s--, s == 0 && t(); }; o.forEach(a => { a.whenStable(i); }); }; g.frameworkStabilizers || (g.frameworkStabilizers = []), g.frameworkStabilizers.push(e); }
    findTestabilityInTree(r, e, t) { if (e == null)
        return null; let o = r.getTestability(e); return o ?? (t ? he().isShadowRoot(e) ? this.findTestabilityInTree(r, e.host, !0) : this.findTestabilityInTree(r, e.parentElement, !0) : null); }
}, pe = ["alt", "control", "meta", "shift"], yt = { "\b": "Backspace", "	": "Tab", "\x7F": "Delete", "\x1B": "Escape", Del: "Delete", Esc: "Escape", Left: "ArrowLeft", Right: "ArrowRight", Up: "ArrowUp", Down: "ArrowDown", Menu: "ContextMenu", Scroll: "ScrollLock", Win: "OS" }, Et = { alt: n => n.altKey, control: n => n.ctrlKey, meta: n => n.metaKey, shift: n => n.shiftKey }, Ee = (() => { class n extends v {
    constructor(e) { super(e); }
    supports(e) { return n.parseEventName(e) != null; }
    addEventListener(e, t, o, s) { let i = n.parseEventName(t), a = n.eventCallback(i.fullKey, o, this.manager.getZone()); return this.manager.getZone().runOutsideAngular(() => he().onAndCancel(e, i.domEventName, a, s)); }
    static parseEventName(e) { let t = e.toLowerCase().split("."), o = t.shift(); if (t.length === 0 || !(o === "keydown" || o === "keyup"))
        return null; let s = n._normalizeKey(t.pop()), i = "", a = t.indexOf("code"); if (a > -1 && (t.splice(a, 1), i = "code."), pe.forEach(d => { let f = t.indexOf(d); f > -1 && (t.splice(f, 1), i += d + "."); }), i += s, t.length != 0 || s.length === 0)
        return null; let c = {}; return c.domEventName = o, c.fullKey = i, c; }
    static matchEventFullKeyCode(e, t) { let o = yt[e.key] || e.key, s = ""; return t.indexOf("code.") > -1 && (o = e.code, s = "code."), o == null || !o ? !1 : (o = o.toLowerCase(), o === " " ? o = "space" : o === "." && (o = "dot"), pe.forEach(i => { if (i !== o) {
        let a = Et[i];
        a(e) && (s += i + ".");
    } }), s += o, s === t); }
    static eventCallback(e, t, o) { return s => { n.matchEventFullKeyCode(s, e) && o.runGuarded(() => t(s)); }; }
    static _normalizeKey(e) { return e === "esc" ? "escape" : e; }
    static \u0275fac = function (t) { return new (t || n)(m.\u0275\u0275inject(me)); };
    static \u0275prov = m.\u0275\u0275defineInjectable({ token: n, factory: n.\u0275fac });
} return n; })();
function vt(n, r, e) { return j(this, null, function* () { let t = I({ rootComponent: n }, ve(r, e)); return ye(t); }); }
function St(n, r) { return j(this, null, function* () { return ye(ve(n, r)); }); }
function ve(n, r) { return { platformRef: r?.platformRef, appProviders: [...we, ...n?.providers ?? []], platformProviders: Se }; }
function Tt(n = {}) { return [...Te, n?.usePendingTasksForStability !== void 0 ? { provide: pt, useValue: n.usePendingTasksForStability ?? !1 } : []]; }
function wt() { U.makeCurrent(); }
function _t() { return new ge; }
function Mt() { return ht(document), document; }
var Se = [{ provide: ut, useValue: rt }, { provide: ft, useValue: wt, multi: !0 }, { provide: me, useFactory: Mt }], Rt = lt(dt, "browser", Se);
var Te = [{ provide: Y, useClass: x }, { provide: ct, useClass: K, deps: [ue, fe, Y] }, { provide: K, useClass: K, deps: [ue, fe, Y] }], we = [{ provide: it, useValue: "root" }, { provide: ge, useFactory: _t }, { provide: R, useClass: w, multi: !0 }, { provide: R, useClass: Ee, multi: !0 }, k, { provide: de, useClass: P }, { provide: P, useExisting: de }, H, { provide: at, useExisting: k }, []], Dt = (() => { class n {
    constructor() { }
    static \u0275fac = function (t) { return new (t || n); };
    static \u0275mod = m.\u0275\u0275defineNgModule({ type: n });
    static \u0275inj = m.\u0275\u0275defineInjector({ providers: [...we, ...Te], imports: [nt, st] });
} return n; })();
import { DOCUMENT as X, \u0275getDOM as Oe } from "@angular/common";
import { \u0275getDOM as jn } from "@angular/common";
import * as h from "@angular/core";
import { inject as B, \u0275global as _e, ApplicationRef as be, \u0275RuntimeError as Z, makeEnvironmentProviders as Ct, \u0275CACHE_ACTIVE as Me, APP_BOOTSTRAP_LISTENER as At, \u0275withDomHydration as It, \u0275withIncrementalHydration as Ne, \u0275withEventReplay as Ot, \u0275withI18nSupport as bt, ENVIRONMENT_INITIALIZER as En, \u0275IS_ENABLED_BLOCKING_INITIAL_NAVIGATION as vn, \u0275Console as Sn, \u0275formatRuntimeError as Tn, SecurityContext as S, \u0275allowSanitizationBypassAndThrow as C, \u0275unwrapSafeValue as A, \u0275_sanitizeUrl as Nt, \u0275_sanitizeHtml as Lt, \u0275bypassSanitizationTrustHtml as Ht, \u0275bypassSanitizationTrustStyle as Pt, \u0275bypassSanitizationTrustScript as kt, \u0275bypassSanitizationTrustUrl as Ut, \u0275bypassSanitizationTrustResourceUrl as xt, Version as Bt } from "@angular/core";
import { \u0275withHttpTransferCache as Le } from "@angular/common/http";
var Rn = (() => { class n {
    _doc = B(X);
    _dom = Oe();
    _cachedHead;
    addTag(e, t = !1) { return e ? this._getOrCreateElement(e, t) : null; }
    addTags(e, t = !1) { return e.filter(o => !!o).map(o => this._getOrCreateElement(o, t)); }
    getTag(e) { if (!e)
        return null; let t = this._doc.querySelector(Re(e)); return Ae(t) ? t : null; }
    getTags(e) { if (!e)
        return []; let t = this._doc.querySelectorAll(Re(e)); return t ? Array.from(t).filter(o => Ae(o)) : []; }
    updateTag(e, t) { t ??= Ce(e); let o = this.getTag(t); return o ? (De(e, o), o) : this._getOrCreateElement(e, !0); }
    removeTag(e) { this.removeTagElement(this.getTag(e)); }
    removeTagElement(e) { e && this._dom.remove(e); }
    _getOrCreateElement(e, t = !1) { if (!t) {
        let i = Ce(e), a = this.getTags(i).filter(c => Vt(e, c))[0];
        if (a !== void 0)
            return a;
    } let o = this._dom.createElement("meta"); return De(e, o), this._doc.getElementsByTagName("head")[0].appendChild(o), o; }
    static \u0275fac = function (t) { return new (t || n); };
    static \u0275prov = h.\u0275\u0275defineService({ token: n, factory: n.\u0275fac });
} return n; })();
function Re(n) { return `meta[${n}]`; }
function De(n, r) { Object.keys(n).forEach(e => r.setAttribute(He(e), n[e])); }
function Ce(n) { let r = n.name ? "name" : "property"; return `${r}=${jt(String(n[r]))}`; }
function jt(n) { return `"${n.replace(/\\/g, "\\\\").replace(/"/g, '\\"')}"`; }
function Vt(n, r) { return Object.keys(n).every(e => r.getAttribute(He(e)) === n[e]); }
function He(n) { return Ft[n] || n; }
function Ae(n) { return n?.nodeName.toLowerCase() === "meta"; }
var Ft = { httpEquiv: "http-equiv" }, Dn = (() => { class n {
    _doc;
    constructor(e) { this._doc = e; }
    getTitle() { return this._doc.title; }
    setTitle(e) { this._doc.title = e || ""; }
    static \u0275fac = function (t) { return new (t || n)(h.\u0275\u0275inject(X)); };
    static \u0275prov = h.\u0275\u0275defineInjectable({ token: n, factory: n.\u0275fac, providedIn: "root" });
} return n; })();
function Pe(n, r) { if (typeof COMPILED > "u" || !COMPILED) {
    let e = _e.ng = _e.ng || {};
    e[n] = r;
} }
var W = class {
    msPerTick;
    numTicks;
    constructor(r, e) { this.msPerTick = r, this.numTicks = e; }
}, J = class {
    appRef;
    constructor(r) { this.appRef = r.injector.get(be); }
    timeChangeDetection(r) { let e = r && r.record, t = "Change Detection"; e && "profile" in console && typeof console.profile == "function" && console.profile(t); let o = performance.now(), s = 0; for (; s < 5 || performance.now() - o < 500;)
        this.appRef.tick(), s++; let i = performance.now(); e && "profileEnd" in console && typeof console.profileEnd == "function" && console.profileEnd(t); let a = (i - o) / s; return console.log(`ran ${s} change detection cycles`), console.log(`${a.toFixed(2)} ms per check`), new W(a, s); }
}, ke = "profiler";
function Cn(n) { return Pe(ke, new J(n)), n; }
function An() { Pe(ke, null); }
var Ie = class {
    static all() { return () => !0; }
    static css(r) { return e => e.nativeElement != null ? zt(e.nativeElement, r) : !1; }
    static directive(r) { return e => e.providerTokens.indexOf(r) !== -1; }
};
function zt(n, r) { return Oe().isElementNode(n) ? n.matches && n.matches(r) || n.msMatchesSelector && n.msMatchesSelector(r) || n.webkitMatchesSelector && n.webkitMatchesSelector(r) : !1; }
var u = (function (n) { return n[n.NoHttpTransferCache = 0] = "NoHttpTransferCache", n[n.HttpTransferCacheOptions = 1] = "HttpTransferCacheOptions", n[n.I18nSupport = 2] = "I18nSupport", n[n.EventReplay = 3] = "EventReplay", n[n.IncrementalHydration = 4] = "IncrementalHydration", n[n.NoIncrementalHydration = 5] = "NoIncrementalHydration", n; })(u || {});
function T(n, r = [], e = {}) { return { \u0275kind: n, \u0275providers: r }; }
function In() { return T(u.NoHttpTransferCache); }
function On(n) { return T(u.HttpTransferCacheOptions, Le(n)); }
function bn() { return T(u.I18nSupport, bt()); }
function Nn() { return T(u.EventReplay, Ot()); }
function Ln() { return T(u.IncrementalHydration, Ne()); }
function Hn() { return T(u.NoIncrementalHydration); }
function Pn(...n) { let r = [], e = new Set; for (let { \u0275providers: o, \u0275kind: s } of n)
    e.add(s), o.length && r.push(o); let t = e.has(u.HttpTransferCacheOptions); return Ct([[], [], It(), e.has(u.NoHttpTransferCache) || t ? [] : Le({}), e.has(u.NoIncrementalHydration) ? [] : Ne(), r, { provide: Me, useValue: { isActive: !0 } }, { provide: At, multi: !0, useFactory: () => { let o = B(be), s = B(Me); return () => { o.whenStable().then(() => { s.isActive = !1; }); }; } }]); }
var $t = (() => { class n {
    static \u0275fac = function (t) { return new (t || n); };
    static \u0275prov = h.\u0275\u0275defineInjectable({ token: n, factory: function (t) { let o = null; return t ? o = new (t || n) : o = h.\u0275\u0275inject(Gt), o; }, providedIn: "root" });
} return n; })(), Gt = (() => { class n extends $t {
    _doc = B(X);
    sanitize(e, t) { if (t == null)
        return null; switch (e) {
        case S.NONE: return t;
        case S.HTML: return C(t, "HTML") ? A(t) : Lt(this._doc, String(t)).toString();
        case S.STYLE: return C(t, "Style") ? A(t) : t;
        case S.SCRIPT:
            if (C(t, "Script"))
                return A(t);
            throw new Z(5200, !1);
        case S.URL: return C(t, "URL") ? A(t) : Nt(String(t));
        case S.RESOURCE_URL:
            if (C(t, "ResourceURL"))
                return A(t);
            throw new Z(-5201, !1);
        default: throw new Z(5202, !1);
    } }
    bypassSecurityTrustHtml(e) { return Ht(e); }
    bypassSecurityTrustStyle(e) { return Pt(e); }
    bypassSecurityTrustScript(e) { return kt(e); }
    bypassSecurityTrustUrl(e) { return Ut(e); }
    bypassSecurityTrustResourceUrl(e) { return xt(e); }
    static \u0275fac = function (t) { return new (t || n); };
    static \u0275prov = h.\u0275\u0275defineService({ token: n, factory: n.\u0275fac });
} return n; })(), kn = new Bt("22.0.8");
export { Dt as BrowserModule, Ie as By, $t as DomSanitizer, R as EVENT_MANAGER_PLUGINS, H as EventManager, v as EventManagerPlugin, u as HydrationFeatureKind, Rn as Meta, ce as REMOVE_STYLES_ON_COMPONENT_DESTROY, Dn as Title, kn as VERSION, vt as bootstrapApplication, St as createApplication, An as disableDebugTools, Cn as enableDebugTools, Rt as platformBrowser, Pn as provideClientHydration, Tt as provideProtractorTestingSupport, Nn as withEventReplay, On as withHttpTransferCacheOptions, bn as withI18nSupport, Ln as withIncrementalHydration, In as withNoHttpTransferCache, Hn as withNoIncrementalHydration, U as \u0275BrowserDomAdapter, x as \u0275BrowserGetTestability, w as \u0275DomEventsPlugin, k as \u0275DomRendererFactory2, Gt as \u0275DomSanitizerImpl, Ee as \u0275KeyEventsPlugin, P as \u0275SharedStylesHost, jn as \u0275getDOM };
/*! Bundled license information:

@angular/platform-browser/fesm2022/_dom_renderer-chunk.mjs:
@angular/platform-browser/fesm2022/_browser-chunk.mjs:
@angular/platform-browser/fesm2022/platform-browser.mjs:
  (**
   * @license Angular v22.0.8
   * (c) 2010-2026 Google LLC. https://angular.dev/
   * License: MIT
   *)
*/
