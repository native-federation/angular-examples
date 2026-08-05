var I = Object.defineProperty, _ = Object.defineProperties;
var D = Object.getOwnPropertyDescriptors;
var s = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty, v = Object.prototype.propertyIsEnumerable;
var u = (t, n, e) => n in t ? I(t, n, { enumerable: !0, configurable: !0, writable: !0, value: e }) : t[n] = e, j = (t, n) => { for (var e in n ||= {})
    p.call(n, e) && u(t, e, n[e]); if (s)
    for (var e of s(n))
        v.call(n, e) && u(t, e, n[e]); return t; }, S = (t, n) => _(t, D(n));
var C = (t, n) => { var e = {}; for (var o in t)
    p.call(t, o) && n.indexOf(o) < 0 && (e[o] = t[o]); if (t != null && s)
    for (var o of s(t))
        n.indexOf(o) < 0 && v.call(t, o) && (e[o] = t[o]); return e; };
var F = (t, n, e) => new Promise((o, r) => { var c = i => { try {
    d(e.next(i));
}
catch (l) {
    r(l);
} }, w = i => { try {
    d(e.throw(i));
}
catch (l) {
    r(l);
} }, d = i => i.done ? o(i.value) : Promise.resolve(i.value).then(c, w); d((e = e.apply(t, n)).next()); });
import * as f from "@angular/core";
import { InjectionToken as M, inject as y, DOCUMENT as k } from "@angular/core";
var m = null;
function h() { return m; }
function T(t) { m ??= t; }
var g = class {
}, b = (() => { class t {
    historyGo(e) { throw new Error(""); }
    static \u0275fac = function (o) { return new (o || t); };
    static \u0275prov = f.\u0275\u0275defineInjectable({ token: t, factory: () => y(E), providedIn: "platform" });
} return t; })(), G = new M(""), E = (() => { class t extends b {
    _location;
    _history;
    _doc = y(k);
    constructor() { super(), this._location = window.location, this._history = window.history; }
    getBaseHrefFromDOM() { return h().getBaseHref(this._doc); }
    onPopState(e) { let o = h().getGlobalEventTarget(this._doc, "window"); return o.addEventListener("popstate", e, !1), () => o.removeEventListener("popstate", e); }
    onHashChange(e) { let o = h().getGlobalEventTarget(this._doc, "window"); return o.addEventListener("hashchange", e, !1), () => o.removeEventListener("hashchange", e); }
    get href() { return this._location.href; }
    get protocol() { return this._location.protocol; }
    get hostname() { return this._location.hostname; }
    get port() { return this._location.port; }
    get pathname() { return this._location.pathname; }
    get search() { return this._location.search; }
    get hash() { return this._location.hash; }
    set pathname(e) { this._location.pathname = e; }
    pushState(e, o, r) { this._history.pushState(e, o, r); }
    replaceState(e, o, r) { this._history.replaceState(e, o, r); }
    forward() { this._history.forward(); }
    back() { this._history.back(); }
    historyGo(e = 0) { this._history.go(e); }
    getState() { return this._history.state; }
    static \u0275fac = function (o) { return new (o || t); };
    static \u0275prov = f.\u0275\u0275defineInjectable({ token: t, factory: () => new t, providedIn: "platform" });
} return t; })();
import * as a from "@angular/core";
import "@angular/core";
function q(t, n) { n = encodeURIComponent(n); for (let e of t.split(";")) {
    let o = e.indexOf("="), [r, c] = o == -1 ? [e, ""] : [e.slice(0, o), e.slice(o + 1)];
    if (r.trim() === n)
        return decodeURIComponent(c);
} return null; }
var L = (() => { class t {
    build() { return new XMLHttpRequest; }
    static \u0275fac = function (o) { return new (o || t); };
    static \u0275prov = a.\u0275\u0275defineService({ token: t, factory: t.\u0275fac });
} return t; })(), A = (() => { class t {
    static \u0275fac = function (o) { return new (o || t); };
    static \u0275prov = a.\u0275\u0275defineInjectable({ token: t, factory: function (o) { let r = null; return o ? r = new (o || t) : r = a.\u0275\u0275inject(L), r; }, providedIn: "root" });
} return t; })();
export { j as a, S as b, C as c, F as d, h as e, T as f, g, b as h, G as i, E as j, q as k, A as l };
/*! Bundled license information:

@angular/common/fesm2022/_platform_location-chunk.mjs:
@angular/common/fesm2022/_xhr-chunk.mjs:
  (**
   * @license Angular v22.0.8
   * (c) 2010-2026 Google LLC. https://angular.dev/
   * License: MIT
   *)
*/
