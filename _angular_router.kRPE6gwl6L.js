var Vn = Object.defineProperty, Gn = Object.defineProperties;
var Wn = Object.getOwnPropertyDescriptors;
var Cr = Object.getOwnPropertySymbols;
var Qn = Object.prototype.hasOwnProperty, Kn = Object.prototype.propertyIsEnumerable;
var wr = (t, n, e) => n in t ? Vn(t, n, { enumerable: !0, configurable: !0, writable: !0, value: e }) : t[n] = e, l = (t, n) => { for (var e in n ||= {})
    Qn.call(n, e) && wr(t, e, n[e]); if (Cr)
    for (var e of Cr(n))
        Kn.call(n, e) && wr(t, e, n[e]); return t; }, N = (t, n) => Gn(t, Wn(n));
var S = (t, n, e) => new Promise((r, i) => { var o = s => { try {
    c(e.next(s));
}
catch (u) {
    i(u);
} }, a = s => { try {
    c(e.throw(s));
}
catch (u) {
    i(u);
} }, c = s => s.done ? r(s.value) : Promise.resolve(s.value).then(o, a); c((e = e.apply(t, n)).next()); });
import { DOCUMENT as Yn, Location as Xt } from "@angular/common";
import * as R from "@angular/core";
import { \u0275isPromise as Zn, \u0275RuntimeError as M, computed as Jn, InjectionToken as ee, EventEmitter as Ye, input as Xn, inject as g, ViewContainerRef as ei, ChangeDetectorRef as ti, reflectComponentType as ri, runInInjectionContext as $, \u0275isInjectable as ni, \u0275isNgModule as ns, isStandalone as is, createEnvironmentInjector as ii, Compiler as oi, \u0275maybeUnwrapDefaultExport as _r, NgModuleFactory as ai, afterNextRender as si, signal as br, EnvironmentInjector as er, DestroyRef as ci, untracked as Ue, \u0275Console as ui, \u0275PendingTasksInternal as li, \u0275INTERNAL_APPLICATION_ERROR_HANDLER as hi, \u0275formatRuntimeError as di } from "@angular/core";
import { isObservable as Ur, from as W, of as m, BehaviorSubject as F, combineLatest as Or, EmptyError as fi, Observable as pi, concat as gi, defer as tr, pipe as vi, EMPTY as z, throwError as mi, Subject as Lt, Subscription as yi } from "rxjs";
import { first as fe, map as U, switchMap as H, take as Le, startWith as Ri, filter as je, takeUntil as jt, mergeMap as le, concatMap as Pr, tap as G, takeLast as Lr, catchError as jr, finalize as Si } from "rxjs/operators";
import * as xr from "@angular/platform-browser";
var f = "primary", Be = Symbol("RouteTitle"), xt = class {
    params;
    constructor(n) { this.params = n || {}; }
    has(n) { return Object.prototype.hasOwnProperty.call(this.params, n); }
    get(n) { if (this.has(n)) {
        let e = this.params[n];
        return Array.isArray(e) ? e[0] : e;
    } return null; }
    getAll(n) { if (this.has(n)) {
        let e = this.params[n];
        return Array.isArray(e) ? e : [e];
    } return []; }
    get keys() { return Object.keys(this.params); }
};
function he(t) { return new xt(t); }
function _t(t, n, e) { for (let r = 0; r < t.length; r++) {
    let i = t[r], o = n[r];
    if (i[0] === ":")
        e[i.substring(1)] = o;
    else if (i !== o.path)
        return !1;
} return !0; }
function kr(t, n, e) { let r = e.path.split("/"), i = r.indexOf("**"); if (i === -1) {
    if (r.length > t.length || e.pathMatch === "full" && (n.hasChildren() || r.length < t.length))
        return null;
    let s = {}, u = t.slice(0, r.length);
    return _t(r, u, s) ? { consumed: u, posParams: s } : null;
} if (i !== r.lastIndexOf("**"))
    return null; let o = r.slice(0, i), a = r.slice(i + 1); if (o.length + a.length > t.length || e.pathMatch === "full" && n.hasChildren() && e.path !== "**")
    return null; let c = {}; return !_t(o, t.slice(0, o.length), c) || !_t(a, t.slice(t.length - a.length), c) ? null : { consumed: t, posParams: c }; }
function rt(t) { return new Promise((n, e) => { t.pipe(fe()).subscribe({ next: r => n(r), error: r => e(r) }); }); }
function Ci(t, n) { if (t.length !== n.length)
    return !1; for (let e = 0; e < t.length; ++e)
    if (!Q(t[e], n[e]))
        return !1; return !0; }
function Q(t, n) { let e = t ? kt(t) : void 0, r = n ? kt(n) : void 0; if (!e || !r || e.length != r.length)
    return !1; let i; for (let o = 0; o < e.length; o++)
    if (i = e[o], !$r(t[i], n[i]))
        return !1; return !0; }
function kt(t) { return [...Object.keys(t), ...Object.getOwnPropertySymbols(t)]; }
function $r(t, n) { if (Array.isArray(t) && Array.isArray(n)) {
    if (t.length !== n.length)
        return !1;
    let e = [...t].sort(), r = [...n].sort();
    return e.every((i, o) => r[o] === i);
}
else
    return t === n; }
function wi(t) { return t.length > 0 ? t[t.length - 1] : null; }
function pe(t) { return Ur(t) ? t : Zn(t) ? W(Promise.resolve(t)) : m(t); }
function zr(t) { return Ur(t) ? rt(t) : Promise.resolve(t); }
var bi = { exact: Fr, subset: qr }, Hr = { exact: Ii, subset: Ai, ignored: () => !0 }, rr = { paths: "exact", fragment: "ignored", matrixParams: "ignored", queryParams: "exact" }, xe = { paths: "subset", fragment: "ignored", matrixParams: "ignored", queryParams: "subset" };
function nr(t, n, e) { let r = t instanceof _ ? t : n.parseUrl(t); return Jn(() => $t(n.lastSuccessfulNavigation()?.finalUrl ?? new _, r, l(l({}, xe), e))); }
function $t(t, n, e) { return bi[e.paths](t.root, n.root, e.matrixParams) && Hr[e.queryParams](t.queryParams, n.queryParams) && !(e.fragment === "exact" && t.fragment !== n.fragment); }
function Ii(t, n) { return Q(t, n); }
function Fr(t, n, e) { if (!ue(t.segments, n.segments) || !Xe(t.segments, n.segments, e) || t.numberOfChildren !== n.numberOfChildren)
    return !1; for (let r in n.children)
    if (!t.children[r] || !Fr(t.children[r], n.children[r], e))
        return !1; return !0; }
function Ai(t, n) { return Object.keys(n).length <= Object.keys(t).length && Object.keys(n).every(e => $r(t[e], n[e])); }
function qr(t, n, e) { return Br(t, n, n.segments, e); }
function Br(t, n, e, r) { if (t.segments.length > e.length) {
    let i = t.segments.slice(0, e.length);
    return !(!ue(i, e) || n.hasChildren() || !Xe(i, e, r));
}
else if (t.segments.length === e.length) {
    if (!ue(t.segments, e) || !Xe(t.segments, e, r))
        return !1;
    for (let i in n.children)
        if (!t.children[i] || !qr(t.children[i], n.children[i], r))
            return !1;
    return !0;
}
else {
    let i = e.slice(0, t.segments.length), o = e.slice(t.segments.length);
    return !ue(t.segments, i) || !Xe(t.segments, i, r) || !t.children[f] ? !1 : Br(t.children[f], n, o, r);
} }
function Xe(t, n, e) { return n.every((r, i) => Hr[e](t[i].parameters, r.parameters)); }
var _ = class {
    root;
    queryParams;
    fragment;
    _queryParamMap;
    constructor(n = new y([], {}), e = {}, r = null) { this.root = n, this.queryParams = e, this.fragment = r; }
    get queryParamMap() { return this._queryParamMap ??= he(this.queryParams), this._queryParamMap; }
    toString() { return Ni.serialize(this); }
}, y = class {
    segments;
    children;
    parent = null;
    constructor(n, e) { this.segments = n, this.children = e, Object.values(e).forEach(r => r.parent = this); }
    hasChildren() { return this.numberOfChildren > 0; }
    get numberOfChildren() { return Object.keys(this.children).length; }
    toString() { return et(this); }
}, ne = class {
    path;
    parameters;
    _parameterMap;
    constructor(n, e) { this.path = n, this.parameters = e; }
    get parameterMap() { return this._parameterMap ??= he(this.parameters), this._parameterMap; }
    toString() { return Gr(this); }
};
function Ei(t, n) { return ue(t, n) && t.every((e, r) => Q(e.parameters, n[r].parameters)); }
function ue(t, n) { return t.length !== n.length ? !1 : t.every((e, r) => e.path === n[r].path); }
function Ti(t, n) { let e = []; return Object.entries(t.children).forEach(([r, i]) => { r === f && (e = e.concat(n(i, r))); }), Object.entries(t.children).forEach(([r, i]) => { r !== f && (e = e.concat(n(i, r))); }), e; }
var ae = (() => { class t {
    static \u0275fac = function (r) { return new (r || t); };
    static \u0275prov = R.\u0275\u0275defineService({ token: t, factory: () => new J });
} return t; })(), J = class {
    parse(n) { let e = new Ht(n); return new _(e.parseRootSegment(), e.parseQueryParams(), e.parseFragment()); }
    serialize(n) { let e = `/${De(n.root, !0)}`, r = _i(n.queryParams), i = typeof n.fragment == "string" ? `#${Mi(n.fragment)}` : ""; return `${e}${r}${i}`; }
}, Ni = new J;
function et(t) { return t.segments.map(n => Gr(n)).join("/"); }
function De(t, n) { if (!t.hasChildren())
    return et(t); if (n) {
    let e = t.children[f] ? De(t.children[f], !1) : "", r = [];
    return Object.entries(t.children).forEach(([i, o]) => { i !== f && r.push(`${i}:${De(o, !1)}`); }), r.length > 0 ? `${e}(${r.join("//")})` : e;
}
else {
    let e = Ti(t, (r, i) => i === f ? [De(t.children[f], !1)] : [`${i}:${De(r, !1)}`]);
    return Object.keys(t.children).length === 1 && t.children[f] != null ? `${et(t)}/${e[0]}` : `${et(t)}/(${e.join("//")})`;
} }
function Vr(t) { return encodeURIComponent(t).replace(/%40/g, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ","); }
function Ze(t) { return Vr(t).replace(/%3B/gi, ";"); }
function Mi(t) { return encodeURI(t); }
function zt(t) { return Vr(t).replace(/\(/g, "%28").replace(/\)/g, "%29").replace(/%26/gi, "&"); }
function tt(t) { return decodeURIComponent(t); }
function Ir(t) { return tt(t.replace(/\+/g, "%20")); }
function Gr(t) { return `${zt(t.path)}${Di(t.parameters)}`; }
function Di(t) { return Object.entries(t).map(([n, e]) => `;${zt(n)}=${zt(e)}`).join(""); }
function _i(t) { let n = Object.entries(t).map(([e, r]) => Array.isArray(r) ? r.map(i => `${Ze(e)}=${Ze(i)}`).join("&") : `${Ze(e)}=${Ze(r)}`).filter(e => e); return n.length ? `?${n.join("&")}` : ""; }
var Ui = /^[^\/()?;#]+/;
function Ut(t) { let n = t.match(Ui); return n ? n[0] : ""; }
var Oi = /^[^\/()?;=#]+/;
function Pi(t) { let n = t.match(Oi); return n ? n[0] : ""; }
var Li = /^[^=?&#]+/;
function ji(t) { let n = t.match(Li); return n ? n[0] : ""; }
var xi = /^[^&#]+/;
function ki(t) { let n = t.match(xi); return n ? n[0] : ""; }
var Ht = class {
    url;
    remaining;
    constructor(n) { this.url = n, this.remaining = n; }
    parseRootSegment() { for (; this.consumeOptional("/");)
        ; return this.remaining === "" || this.peekStartsWith("?") || this.peekStartsWith("#") ? new y([], {}) : new y([], this.parseChildren()); }
    parseQueryParams() { let n = {}; if (this.consumeOptional("?"))
        do
            this.parseQueryParam(n);
        while (this.consumeOptional("&")); return n; }
    parseFragment() { return this.consumeOptional("#") ? decodeURIComponent(this.remaining) : null; }
    parseChildren(n = 0) { if (n > 50)
        throw new M(4010, !1); if (this.remaining === "")
        return {}; this.consumeOptional("/"); let e = []; for (this.peekStartsWith("(") || e.push(this.parseSegment()); this.peekStartsWith("/") && !this.peekStartsWith("//") && !this.peekStartsWith("/(");)
        this.capture("/"), e.push(this.parseSegment()); let r = {}; this.peekStartsWith("/(") && (this.capture("/"), r = this.parseParens(!0, n)); let i = {}; return this.peekStartsWith("(") && (i = this.parseParens(!1, n)), (e.length > 0 || Object.keys(r).length > 0) && (i[f] = new y(e, r)), i; }
    parseSegment() { let n = Ut(this.remaining); if (n === "" && this.peekStartsWith(";"))
        throw new M(4009, !1); return this.capture(n), new ne(tt(n), this.parseMatrixParams()); }
    parseMatrixParams() { let n = {}; for (; this.consumeOptional(";");)
        this.parseParam(n); return n; }
    parseParam(n) { let e = Pi(this.remaining); if (!e)
        return; this.capture(e); let r = ""; if (this.consumeOptional("=")) {
        let i = Ut(this.remaining);
        i && (r = i, this.capture(r));
    } n[tt(e)] = tt(r); }
    parseQueryParam(n) { let e = ji(this.remaining); if (!e)
        return; this.capture(e); let r = ""; if (this.consumeOptional("=")) {
        let a = ki(this.remaining);
        a && (r = a, this.capture(r));
    } let i = Ir(e), o = Ir(r); if (Object.hasOwn(n, i)) {
        let a = n[i];
        Array.isArray(a) || (a = [a], n[i] = a), a.push(o);
    }
    else
        n[i] = o; }
    parseParens(n, e) { let r = Object.create(null); for (this.capture("("); !this.consumeOptional(")") && this.remaining.length > 0;) {
        let i = Ut(this.remaining), o = this.remaining[i.length];
        if (o !== "/" && o !== ")" && o !== ";")
            throw new M(4010, !1);
        let a;
        i.indexOf(":") > -1 ? (a = i.slice(0, i.indexOf(":")), this.capture(a), this.capture(":")) : n && (a = f);
        let c = this.parseChildren(e + 1);
        r[a ?? f] = Object.keys(c).length === 1 && c[f] ? c[f] : new y([], c), this.consumeOptional("//");
    } return r; }
    peekStartsWith(n) { return this.remaining.startsWith(n); }
    consumeOptional(n) { return this.peekStartsWith(n) ? (this.remaining = this.remaining.substring(n.length), !0) : !1; }
    capture(n) { if (!this.consumeOptional(n))
        throw new M(4011, !1); }
};
function Wr(t) { return t.segments.length > 0 ? new y([], { [f]: t }) : t; }
function Qr(t) { let n = Object.create(null); for (let [r, i] of Object.entries(t.children)) {
    let o = Qr(i);
    if (r === f && o.segments.length === 0 && o.hasChildren())
        for (let [a, c] of Object.entries(o.children))
            n[a] = c;
    else
        (o.segments.length > 0 || o.hasChildren()) && (n[r] = o);
} let e = new y(t.segments, n); return $i(e); }
function $i(t) { if (t.numberOfChildren === 1 && t.children[f]) {
    let n = t.children[f];
    return new y(t.segments.concat(n.segments), n.children);
} return t; }
function ie(t) { return t instanceof _; }
function Kr(t, n, e = null, r = null, i = new J) { let o = Yr(t); return Zr(o, n, e, r, i); }
function Yr(t) { let n; function e(o) { let a = {}; for (let s of o.children) {
    let u = e(s);
    a[s.outlet] = u;
} let c = new y(o.url, a); return o === t && (n = c), c; } let r = e(t.root), i = Wr(r); return n ?? i; }
function Zr(t, n, e, r, i) { let o = t; for (; o.parent;)
    o = o.parent; if (n.length === 0)
    return Ot(o, o, o, e, r, i); let a = zi(n); if (a.toRoot())
    return Ot(o, o, new y([], {}), e, r, i); let c = Hi(a, o, t), s = c.processChildren ? Oe(c.segmentGroup, c.index, a.commands) : Xr(c.segmentGroup, c.index, a.commands); return Ot(o, c.segmentGroup, s, e, r, i); }
function nt(t) { return typeof t == "object" && t != null && !t.outlets && !t.segmentPath; }
function ke(t) { return typeof t == "object" && t != null && t.outlets; }
function Ar(t, n, e) { t ||= "\u0275"; let r = new _; return r.queryParams = { [t]: n }, e.parse(e.serialize(r)).queryParams[t]; }
function Ot(t, n, e, r, i, o) { let a = {}; for (let [u, h] of Object.entries(r ?? {}))
    a[u] = Array.isArray(h) ? h.map(v => Ar(u, v, o)) : Ar(u, h, o); let c; t === n ? c = e : c = Jr(t, n, e); let s = Wr(Qr(c)); return new _(s, a, i); }
function Jr(t, n, e) { let r = Object.create(null); return Object.entries(t.children).forEach(([i, o]) => { o === n ? r[i] = e : r[i] = Jr(o, n, e); }), new y(t.segments, r); }
var it = class {
    isAbsolute;
    numberOfDoubleDots;
    commands;
    constructor(n, e, r) { if (this.isAbsolute = n, this.numberOfDoubleDots = e, this.commands = r, n && r.length > 0 && nt(r[0]))
        throw new M(4003, !1); let i = r.find(ke); if (i && i !== wi(r))
        throw new M(4004, !1); }
    toRoot() { return this.isAbsolute && this.commands.length === 1 && this.commands[0] == "/"; }
};
function zi(t) { if (typeof t[0] == "string" && t.length === 1 && t[0] === "/")
    return new it(!0, 0, t); let n = 0, e = !1, r = t.reduce((i, o, a) => { if (typeof o == "object" && o != null) {
    if (o.outlets) {
        let c = {};
        return Object.entries(o.outlets).forEach(([s, u]) => { c[s] = typeof u == "string" ? u.split("/") : u; }), [...i, { outlets: c }];
    }
    if (o.segmentPath)
        return [...i, o.segmentPath];
} return typeof o != "string" ? [...i, o] : a === 0 ? (o.split("/").forEach((c, s) => { s == 0 && c === "." || (s == 0 && c === "" ? e = !0 : c === ".." ? n++ : c != "" && i.push(c)); }), i) : [...i, o]; }, []); return new it(e, n, r); }
var ye = class {
    segmentGroup;
    processChildren;
    index;
    constructor(n, e, r) { this.segmentGroup = n, this.processChildren = e, this.index = r; }
};
function Hi(t, n, e) { if (t.isAbsolute)
    return new ye(n, !0, 0); if (!e)
    return new ye(n, !1, NaN); if (e.parent === null)
    return new ye(e, !0, 0); let r = nt(t.commands[0]) ? 0 : 1, i = e.segments.length - 1 + r; return Fi(e, i, t.numberOfDoubleDots); }
function Fi(t, n, e) { let r = t, i = n, o = e; for (; o > i;) {
    if (o -= i, r = r.parent, !r)
        throw new M(4005, !1);
    i = r.segments.length;
} return new ye(r, !1, i - o); }
function qi(t) { return ke(t[0]) ? t[0].outlets : { [f]: t }; }
function Xr(t, n, e) { if (t ??= new y([], {}), t.segments.length === 0 && t.hasChildren())
    return Oe(t, n, e); let r = Bi(t, n, e), i = e.slice(r.commandIndex); if (r.match && r.pathIndex < t.segments.length) {
    let o = new y(t.segments.slice(0, r.pathIndex), {});
    return o.children[f] = new y(t.segments.slice(r.pathIndex), t.children), Oe(o, 0, i);
}
else
    return r.match && i.length === 0 ? new y(t.segments, {}) : r.match && !t.hasChildren() ? Ft(t, n, e) : r.match ? Oe(t, 0, i) : Ft(t, n, e); }
function Oe(t, n, e) { if (e.length === 0)
    return new y(t.segments, {}); {
    let r = qi(e), i = Object.create(null);
    if (Object.keys(r).some(o => o !== f) && t.children[f] && t.numberOfChildren === 1 && t.children[f].segments.length === 0) {
        let o = Oe(t.children[f], n, e);
        return new y(t.segments, o.children);
    }
    return Object.entries(r).forEach(([o, a]) => { typeof a == "string" && (a = [a]), a !== null && (i[o] = Xr(t.children[o], n, a)); }), Object.entries(t.children).forEach(([o, a]) => { r[o] === void 0 && (i[o] = a); }), new y(t.segments, i);
} }
function Bi(t, n, e) { let r = 0, i = n, o = { match: !1, pathIndex: 0, commandIndex: 0 }; for (; i < t.segments.length;) {
    if (r >= e.length)
        return o;
    let a = t.segments[i], c = e[r];
    if (ke(c))
        break;
    let s = `${c}`, u = r < e.length - 1 ? e[r + 1] : null;
    if (i > 0 && s === void 0)
        break;
    if (s && u && typeof u == "object" && u.outlets === void 0) {
        if (!Tr(s, u, a))
            return o;
        r += 2;
    }
    else {
        if (!Tr(s, {}, a))
            return o;
        r++;
    }
    i++;
} return { match: !0, pathIndex: i, commandIndex: r }; }
function Ft(t, n, e) { let r = t.segments.slice(0, n), i = 0; for (; i < e.length;) {
    let o = e[i];
    if (ke(o)) {
        let s = Vi(o.outlets);
        return new y(r, s);
    }
    if (i === 0 && nt(e[0])) {
        let s = t.segments[n];
        r.push(new ne(s.path, Er(e[0]))), i++;
        continue;
    }
    let a = ke(o) ? o.outlets[f] : `${o}`, c = i < e.length - 1 ? e[i + 1] : null;
    a && c && nt(c) ? (r.push(new ne(a, Er(c))), i += 2) : (r.push(new ne(a, {})), i++);
} return new y(r, {}); }
function Vi(t) { let n = {}; return Object.entries(t).forEach(([e, r]) => { typeof r == "string" && (r = [r]), r !== null && (n[e] = Ft(new y([], {}), 0, r)); }), n; }
function Er(t) { let n = {}; return Object.entries(t).forEach(([e, r]) => n[e] = `${r}`), n; }
function Tr(t, n, e) { return t == e.path && Q(n, e.parameters); }
var Re = "imperative", b = (function (t) { return t[t.NavigationStart = 0] = "NavigationStart", t[t.NavigationEnd = 1] = "NavigationEnd", t[t.NavigationCancel = 2] = "NavigationCancel", t[t.NavigationError = 3] = "NavigationError", t[t.RoutesRecognized = 4] = "RoutesRecognized", t[t.ResolveStart = 5] = "ResolveStart", t[t.ResolveEnd = 6] = "ResolveEnd", t[t.GuardsCheckStart = 7] = "GuardsCheckStart", t[t.GuardsCheckEnd = 8] = "GuardsCheckEnd", t[t.RouteConfigLoadStart = 9] = "RouteConfigLoadStart", t[t.RouteConfigLoadEnd = 10] = "RouteConfigLoadEnd", t[t.ChildActivationStart = 11] = "ChildActivationStart", t[t.ChildActivationEnd = 12] = "ChildActivationEnd", t[t.ActivationStart = 13] = "ActivationStart", t[t.ActivationEnd = 14] = "ActivationEnd", t[t.Scroll = 15] = "Scroll", t[t.NavigationSkipped = 16] = "NavigationSkipped", t; })(b || {}), x = class {
    id;
    url;
    constructor(n, e) { this.id = n, this.url = e; }
}, X = class extends x {
    type = b.NavigationStart;
    navigationTrigger;
    restoredState;
    constructor(n, e, r = "imperative", i = null) { super(n, e), this.navigationTrigger = r, this.restoredState = i; }
    toString() { return `NavigationStart(id: ${this.id}, url: '${this.url}')`; }
}, O = class extends x {
    urlAfterRedirects;
    type = b.NavigationEnd;
    constructor(n, e, r) { super(n, e), this.urlAfterRedirects = r; }
    toString() { return `NavigationEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}')`; }
}, I = (function (t) { return t[t.Redirect = 0] = "Redirect", t[t.SupersededByNewNavigation = 1] = "SupersededByNewNavigation", t[t.NoDataFromResolver = 2] = "NoDataFromResolver", t[t.GuardRejected = 3] = "GuardRejected", t[t.Aborted = 4] = "Aborted", t; })(I || {}), Ce = (function (t) { return t[t.IgnoredSameUrlNavigation = 0] = "IgnoredSameUrlNavigation", t[t.IgnoredByUrlHandlingStrategy = 1] = "IgnoredByUrlHandlingStrategy", t; })(Ce || {}), D = class extends x {
    reason;
    code;
    type = b.NavigationCancel;
    constructor(n, e, r, i) { super(n, e), this.reason = r, this.code = i; }
    toString() { return `NavigationCancel(id: ${this.id}, url: '${this.url}')`; }
};
function ir(t) { return t instanceof D && (t.code === I.Redirect || t.code === I.SupersededByNewNavigation); }
var B = class extends x {
    reason;
    code;
    type = b.NavigationSkipped;
    constructor(n, e, r, i) { super(n, e), this.reason = r, this.code = i; }
}, oe = class extends x {
    error;
    target;
    type = b.NavigationError;
    constructor(n, e, r, i) { super(n, e), this.error = r, this.target = i; }
    toString() { return `NavigationError(id: ${this.id}, url: '${this.url}', error: ${this.error})`; }
}, $e = class extends x {
    urlAfterRedirects;
    state;
    type = b.RoutesRecognized;
    constructor(n, e, r, i) { super(n, e), this.urlAfterRedirects = r, this.state = i; }
    toString() { return `RoutesRecognized(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`; }
}, ot = class extends x {
    urlAfterRedirects;
    state;
    type = b.GuardsCheckStart;
    constructor(n, e, r, i) { super(n, e), this.urlAfterRedirects = r, this.state = i; }
    toString() { return `GuardsCheckStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`; }
}, at = class extends x {
    urlAfterRedirects;
    state;
    shouldActivate;
    type = b.GuardsCheckEnd;
    constructor(n, e, r, i, o) { super(n, e), this.urlAfterRedirects = r, this.state = i, this.shouldActivate = o; }
    toString() { return `GuardsCheckEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state}, shouldActivate: ${this.shouldActivate})`; }
}, st = class extends x {
    urlAfterRedirects;
    state;
    type = b.ResolveStart;
    constructor(n, e, r, i) { super(n, e), this.urlAfterRedirects = r, this.state = i; }
    toString() { return `ResolveStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`; }
}, ct = class extends x {
    urlAfterRedirects;
    state;
    type = b.ResolveEnd;
    constructor(n, e, r, i) { super(n, e), this.urlAfterRedirects = r, this.state = i; }
    toString() { return `ResolveEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`; }
}, ut = class {
    route;
    type = b.RouteConfigLoadStart;
    constructor(n) { this.route = n; }
    toString() { return `RouteConfigLoadStart(path: ${this.route.path})`; }
}, lt = class {
    route;
    type = b.RouteConfigLoadEnd;
    constructor(n) { this.route = n; }
    toString() { return `RouteConfigLoadEnd(path: ${this.route.path})`; }
}, ht = class {
    snapshot;
    type = b.ChildActivationStart;
    constructor(n) { this.snapshot = n; }
    toString() { return `ChildActivationStart(path: '${this.snapshot.routeConfig && this.snapshot.routeConfig.path || ""}')`; }
}, dt = class {
    snapshot;
    type = b.ChildActivationEnd;
    constructor(n) { this.snapshot = n; }
    toString() { return `ChildActivationEnd(path: '${this.snapshot.routeConfig && this.snapshot.routeConfig.path || ""}')`; }
}, ft = class {
    snapshot;
    type = b.ActivationStart;
    constructor(n) { this.snapshot = n; }
    toString() { return `ActivationStart(path: '${this.snapshot.routeConfig && this.snapshot.routeConfig.path || ""}')`; }
}, pt = class {
    snapshot;
    type = b.ActivationEnd;
    constructor(n) { this.snapshot = n; }
    toString() { return `ActivationEnd(path: '${this.snapshot.routeConfig && this.snapshot.routeConfig.path || ""}')`; }
}, we = class {
    routerEvent;
    position;
    anchor;
    scrollBehavior;
    type = b.Scroll;
    constructor(n, e, r, i) { this.routerEvent = n, this.position = e, this.anchor = r, this.scrollBehavior = i; }
    toString() { let n = this.position ? `${this.position[0]}, ${this.position[1]}` : null; return `Scroll(anchor: '${this.anchor}', position: '${n}')`; }
}, de = class {
}, be = class {
}, Ie = class {
    url;
    navigationBehaviorOptions;
    constructor(n, e) { this.url = n, this.navigationBehaviorOptions = e; }
};
function Gi(t) { return !(t instanceof de) && !(t instanceof Ie) && !(t instanceof be); }
var gt = class {
    rootInjector;
    outlet = null;
    route = null;
    children;
    attachRef = null;
    get injector() { return this.route?.snapshot._environmentInjector ?? this.rootInjector; }
    constructor(n) { this.rootInjector = n, this.children = new ge(this.rootInjector); }
}, ge = (() => { class t {
    rootInjector;
    contexts = new Map;
    constructor(e) { this.rootInjector = e; }
    onChildOutletCreated(e, r) { let i = this.getOrCreateContext(e); i.outlet = r, this.contexts.set(e, i); }
    onChildOutletDestroyed(e) { let r = this.getContext(e); r && (r.outlet = null, r.attachRef = null); }
    onOutletDeactivated() { let e = this.contexts; return this.contexts = new Map, e; }
    onOutletReAttached(e) { this.contexts = e; }
    getOrCreateContext(e) { let r = this.getContext(e); return r || (r = new gt(this.rootInjector), this.contexts.set(e, r)), r; }
    getContext(e) { return this.contexts.get(e) || null; }
    static \u0275fac = function (r) { return new (r || t)(R.\u0275\u0275inject(R.EnvironmentInjector)); };
    static \u0275prov = R.\u0275\u0275defineInjectable({ token: t, factory: t.\u0275fac, providedIn: "root" });
} return t; })(), vt = class {
    _root;
    constructor(n) { this._root = n; }
    get root() { return this._root.value; }
    parent(n) { let e = this.pathFromRoot(n); return e.length > 1 ? e[e.length - 2] : null; }
    children(n) { let e = qt(n, this._root); return e ? e.children.map(r => r.value) : []; }
    firstChild(n) { let e = qt(n, this._root); return e && e.children.length > 0 ? e.children[0].value : null; }
    siblings(n) { let e = Bt(n, this._root); return e.length < 2 ? [] : e[e.length - 2].children.map(i => i.value).filter(i => i !== n); }
    pathFromRoot(n) { return Bt(n, this._root).map(e => e.value); }
};
function qt(t, n) { if (t === n.value)
    return n; for (let e of n.children) {
    let r = qt(t, e);
    if (r)
        return r;
} return null; }
function Bt(t, n) { if (t === n.value)
    return [n]; for (let e of n.children) {
    let r = Bt(t, e);
    if (r.length)
        return r.unshift(n), r;
} return []; }
var j = class {
    value;
    children;
    constructor(n, e) { this.value = n, this.children = e; }
    toString() { return `TreeNode(${this.value})`; }
};
function me(t) { let n = {}; return t && t.children.forEach(e => n[e.value.outlet] = e), n; }
var ze = class extends vt {
    snapshot;
    constructor(n, e) { super(n), this.snapshot = e, ar(this, n); }
    toString() { return this.snapshot.toString(); }
};
function en(t, n) { let e = Wi(t, n), r = new F([new ne("", {})]), i = new F({}), o = new F({}), a = new F({}), c = new F(""), s = new K(r, i, a, c, o, f, t, e.root); return s.snapshot = e.root, new ze(new j(s, []), e); }
function Wi(t, n) { let e = {}, r = {}, i = {}, a = new Ae([], e, i, "", r, f, t, null, {}, n); return new He("", new j(a, [])); }
var K = class {
    urlSubject;
    paramsSubject;
    queryParamsSubject;
    fragmentSubject;
    dataSubject;
    outlet;
    component;
    snapshot;
    _futureSnapshot;
    _routerState;
    _paramMap;
    _queryParamMap;
    title;
    url;
    params;
    queryParams;
    fragment;
    data;
    _localInjector;
    constructor(n, e, r, i, o, a, c, s) { this.urlSubject = n, this.paramsSubject = e, this.queryParamsSubject = r, this.fragmentSubject = i, this.dataSubject = o, this.outlet = a, this.component = c, this._futureSnapshot = s, this.title = this.dataSubject?.pipe(U(u => u[Be])) ?? m(void 0), this.url = n, this.params = e, this.queryParams = r, this.fragment = i, this.data = o; }
    get routeConfig() { return this._futureSnapshot.routeConfig; }
    get root() { return this._routerState.root; }
    get parent() { return this._routerState.parent(this); }
    get firstChild() { return this._routerState.firstChild(this); }
    get children() { return this._routerState.children(this); }
    get pathFromRoot() { return this._routerState.pathFromRoot(this); }
    get paramMap() { return this._paramMap ??= this.params.pipe(U(n => he(n))), this._paramMap; }
    get queryParamMap() { return this._queryParamMap ??= this.queryParams.pipe(U(n => he(n))), this._queryParamMap; }
    toString() { return this.snapshot ? this.snapshot.toString() : `Future(${this._futureSnapshot})`; }
}, Qi = "always";
function or(t, n, e) { let r, { routeConfig: i } = t; return n !== null && (e === "always" || i?.path === "" || !n.component && !n.routeConfig?.loadComponent) ? r = { params: l(l({}, n.params), t.params), data: l(l({}, n.data), t.data), resolve: l(l(l(l({}, t.data), n.data), i?.data), t._resolvedData) } : r = { params: l({}, t.params), data: l({}, t.data), resolve: l(l({}, t.data), t._resolvedData ?? {}) }, i && rn(i) && (r.resolve[Be] = i.title), r; }
var Ae = class {
    url;
    params;
    queryParams;
    fragment;
    data;
    outlet;
    component;
    routeConfig;
    _resolve;
    _resolvedData;
    _routerState;
    _paramMap;
    _queryParamMap;
    _environmentInjector;
    get title() { return this.data?.[Be]; }
    constructor(n, e, r, i, o, a, c, s, u, h) { this.url = n, this.params = e, this.queryParams = r, this.fragment = i, this.data = o, this.outlet = a, this.component = c, this.routeConfig = s, this._resolve = u, this._environmentInjector = h; }
    get root() { return this._routerState.root; }
    get parent() { return this._routerState.parent(this); }
    get firstChild() { return this._routerState.firstChild(this); }
    get children() { return this._routerState.children(this); }
    get pathFromRoot() { return this._routerState.pathFromRoot(this); }
    get paramMap() { return this._paramMap ??= he(this.params), this._paramMap; }
    get queryParamMap() { return this._queryParamMap ??= he(this.queryParams), this._queryParamMap; }
    toString() { let n = this.url.map(r => r.toString()).join("/"), e = this.routeConfig ? this.routeConfig.path : ""; return `Route(url:'${n}', path:'${e}')`; }
}, He = class extends vt {
    url;
    constructor(n, e) { super(e), this.url = n, ar(this, e); }
    toString() { return tn(this._root); }
};
function ar(t, n) { n.value._routerState = t, n.children.forEach(e => ar(t, e)); }
function tn(t) { let n = t.children.length > 0 ? ` { ${t.children.map(tn).join(", ")} } ` : ""; return `${t.value}${n}`; }
function Pt(t) { if (t.snapshot) {
    let n = t.snapshot, e = t._futureSnapshot;
    t.snapshot = e, Q(n.queryParams, e.queryParams) || t.queryParamsSubject.next(e.queryParams), n.fragment !== e.fragment && t.fragmentSubject.next(e.fragment), Q(n.params, e.params) || t.paramsSubject.next(e.params), Ci(n.url, e.url) || t.urlSubject.next(e.url), Q(n.data, e.data) || t.dataSubject.next(e.data);
}
else
    t.snapshot = t._futureSnapshot, t.dataSubject.next(t._futureSnapshot.data); }
function Vt(t, n) { let e = Q(t.params, n.params) && Ei(t.url, n.url), r = !t.parent != !n.parent; return e && !r && (!t.parent || Vt(t.parent, n.parent)); }
function rn(t) { return typeof t.title == "string" || t.title === null; }
var nn = new ee(""), sr = (() => { class t {
    activated = null;
    get activatedComponentRef() { return this.activated; }
    _activatedRoute = null;
    name = f;
    activateEvents = new Ye;
    deactivateEvents = new Ye;
    attachEvents = new Ye;
    detachEvents = new Ye;
    routerOutletData = Xn();
    parentContexts = g(ge);
    location = g(ei);
    changeDetector = g(ti);
    inputBinder = g(Ve, { optional: !0 });
    supportsBindingToComponentInputs = !0;
    ngOnChanges(e) { if (e.name) {
        let { firstChange: r, previousValue: i } = e.name;
        if (r)
            return;
        this.isTrackedInParentContexts(i) && (this.deactivate(), this.parentContexts.onChildOutletDestroyed(i)), this.initializeOutletWithName();
    } }
    ngOnDestroy() { this.isTrackedInParentContexts(this.name) && this.parentContexts.onChildOutletDestroyed(this.name), this.inputBinder?.unsubscribeFromRouteData(this); }
    isTrackedInParentContexts(e) { return this.parentContexts.getContext(e)?.outlet === this; }
    ngOnInit() { this.initializeOutletWithName(); }
    initializeOutletWithName() { if (this.parentContexts.onChildOutletCreated(this.name, this), this.activated)
        return; let e = this.parentContexts.getContext(this.name); e?.route && (e.attachRef ? this.attach(e.attachRef, e.route) : this.activateWith(e.route, e.injector)); }
    get isActivated() { return !!this.activated; }
    get component() { if (!this.activated)
        throw new M(4012, !1); return this.activated.instance; }
    get activatedRoute() { if (!this.activated)
        throw new M(4012, !1); return this._activatedRoute; }
    get activatedRouteData() { return this._activatedRoute ? this._activatedRoute.snapshot.data : {}; }
    detach() { if (!this.activated)
        throw new M(4012, !1); this.location.detach(); let e = this.activated; return this.activated = null, this._activatedRoute = null, this.detachEvents.emit(e.instance), e; }
    attach(e, r) { this.activated = e, this._activatedRoute = r, this.location.insert(e.hostView), this.inputBinder?.bindActivatedRouteToOutletComponent(this), this.attachEvents.emit(e.instance); }
    deactivate() { if (this.activated) {
        let e = this.component;
        this.activated.destroy(), this.activated = null, this._activatedRoute = null, this.deactivateEvents.emit(e);
    } }
    activateWith(e, r) { if (this.isActivated)
        throw new M(4013, !1); this._activatedRoute = e; let i = this.location, a = e.snapshot.component, c = this.parentContexts.getOrCreateContext(this.name).children, s = new Gt(e, c, i.injector, this.routerOutletData); this.activated = i.createComponent(a, { index: i.length, injector: s, environmentInjector: r }), this.changeDetector.markForCheck(), this.inputBinder?.bindActivatedRouteToOutletComponent(this), this.activateEvents.emit(this.activated.instance); }
    static \u0275fac = function (r) { return new (r || t); };
    static \u0275dir = R.\u0275\u0275defineDirective({ type: t, selectors: [["router-outlet"]], inputs: { name: "name", routerOutletData: [1, "routerOutletData"] }, outputs: { activateEvents: "activate", deactivateEvents: "deactivate", attachEvents: "attach", detachEvents: "detach" }, exportAs: ["outlet"], features: [R.\u0275\u0275NgOnChangesFeature] });
} return t; })(), Gt = class {
    route;
    childContexts;
    parent;
    outletData;
    constructor(n, e, r, i) { this.route = n, this.childContexts = e, this.parent = r, this.outletData = i; }
    get(n, e) { return n === K ? this.route : n === ge ? this.childContexts : n === nn ? this.outletData : this.parent.get(n, e); }
}, Ve = new ee(""), on = (() => { class t {
    options;
    outletDataSubscriptions = new Map;
    outletSeenKeys = new Map;
    constructor(e) { this.options = e, this.options.queryParams ??= !0; }
    bindActivatedRouteToOutletComponent(e) { this.unsubscribeFromRouteData(e), this.subscribeToRouteData(e); }
    unsubscribeFromRouteData(e) { this.outletDataSubscriptions.get(e)?.unsubscribe(), this.outletDataSubscriptions.delete(e), this.outletSeenKeys.delete(e); }
    subscribeToRouteData(e) { let { activatedRoute: r } = e, i = Or([this.options.queryParams ? r.queryParams : m({}), r.params, r.data]).pipe(H(([o, a, c], s) => (c = l(l(l({}, o), a), c), s === 0 ? m(c) : Promise.resolve(c)))).subscribe(o => { if (!e.isActivated || !e.activatedComponentRef || e.activatedRoute !== r || r.component === null) {
        this.unsubscribeFromRouteData(e);
        return;
    } let a = ri(r.component); if (!a) {
        this.unsubscribeFromRouteData(e);
        return;
    } let c = this.outletSeenKeys.get(e); c || (c = new Set, this.outletSeenKeys.set(e, c)); for (let u of Object.keys(o))
        c.add(u); let s = this.options.unmatchedInputBehavior ?? "alwaysUndefined"; for (let { templateName: u } of a.inputs) {
        let h = o[u];
        (h !== void 0 || s === "alwaysUndefined" || c.has(u)) && e.activatedComponentRef.setInput(u, h);
    } }); this.outletDataSubscriptions.set(e, i); }
    static \u0275fac = function (r) { R.\u0275\u0275invalidFactory(); };
    static \u0275prov = R.\u0275\u0275defineInjectable({ token: t, factory: t.\u0275fac });
} return t; })(), cr = (() => { class t {
    static \u0275fac = function (r) { return new (r || t); };
    static \u0275cmp = R.\u0275\u0275defineComponent({ type: t, selectors: [["ng-component"]], exportAs: ["emptyRouterOutlet"], decls: 1, vars: 0, template: function (r, i) { r & 1 && R.\u0275\u0275element(0, "router-outlet"); }, dependencies: [sr], encapsulation: 2, changeDetection: 1 });
} return t; })();
function ur(t) { let n = t.children && t.children.map(ur), e = n ? N(l({}, t), { children: n }) : l({}, t); return !e.component && !e.loadComponent && (n || e.loadChildren) && e.outlet && e.outlet !== f && (e.component = cr), e; }
function Ki(t, n, e) { let r = new Set, i = Fe(t, n._root, e ? e._root : void 0, r); return { newlyCreatedRoutes: r, state: new ze(i, n) }; }
function Fe(t, n, e, r) { if (e && t.shouldReuseRoute(n.value, e.value.snapshot)) {
    let i = e.value;
    i._futureSnapshot = n.value;
    let o = Yi(t, n, e, r);
    return new j(i, o);
}
else {
    if (t.shouldAttach(n.value)) {
        let a = t.retrieve(n.value);
        if (a !== null) {
            let c = a.route;
            return c.value._futureSnapshot = n.value, c.children = n.children.map(s => Fe(t, s, void 0, r)), c;
        }
    }
    let i = Zi(n.value);
    r.add(i);
    let o = n.children.map(a => Fe(t, a, void 0, r));
    return new j(i, o);
} }
function Yi(t, n, e, r) { return n.children.map(i => { for (let o of e.children)
    if (t.shouldReuseRoute(i.value, o.value.snapshot))
        return Fe(t, i, o, r); return Fe(t, i, void 0, r); }); }
function Zi(t) { return new K(new F(t.url), new F(t.params), new F(t.queryParams), new F(t.fragment), new F(t.data), t.outlet, t.component, t); }
var Ee = class {
    redirectTo;
    navigationBehaviorOptions;
    constructor(n, e) { this.redirectTo = n, this.navigationBehaviorOptions = e; }
}, an = "ngNavigationCancelingError";
function mt(t, n) { let { redirectTo: e, navigationBehaviorOptions: r } = ie(n) ? { redirectTo: n, navigationBehaviorOptions: void 0 } : n, i = sn(!1, I.Redirect); return i.url = e, i.navigationBehaviorOptions = r, i; }
function sn(t, n) { let e = new Error(`NavigationCancelingError: ${t || ""}`); return e[an] = !0, e.cancellationCode = n, e; }
function Ji(t) { return cn(t) && ie(t.url); }
function cn(t) { return !!t && t[an]; }
var Wt = class {
    routeReuseStrategy;
    futureState;
    currState;
    forwardEvent;
    inputBindingEnabled;
    constructor(n, e, r, i, o) { this.routeReuseStrategy = n, this.futureState = e, this.currState = r, this.forwardEvent = i, this.inputBindingEnabled = o; }
    activate(n) { let e = this.futureState._root, r = this.currState ? this.currState._root : null; this.deactivateChildRoutes(e, r, n), Pt(this.futureState.root), this.activateChildRoutes(e, r, n); }
    deactivateChildRoutes(n, e, r) { let i = me(e); n.children.forEach(o => { let a = o.value.outlet; this.deactivateRoutes(o, i[a], r), delete i[a]; }), Object.values(i).forEach(o => { this.deactivateRouteAndItsChildren(o, r); }); }
    deactivateRoutes(n, e, r) { let i = n.value, o = e ? e.value : null; if (i === o)
        if (i.component) {
            let a = r.getContext(i.outlet);
            a && this.deactivateChildRoutes(n, e, a.children);
        }
        else
            this.deactivateChildRoutes(n, e, r);
    else
        o && this.deactivateRouteAndItsChildren(e, r); }
    deactivateRouteAndItsChildren(n, e) { n.value.component && this.routeReuseStrategy.shouldDetach(n.value.snapshot) ? this.detachAndStoreRouteSubtree(n, e) : this.deactivateRouteAndOutlet(n, e); }
    detachAndStoreRouteSubtree(n, e) { let r = e.getContext(n.value.outlet), i = r && n.value.component ? r.children : e, o = me(n); for (let a of Object.values(o))
        this.deactivateRouteAndItsChildren(a, i); if (r && r.outlet) {
        let a = r.outlet.detach(), c = r.children.onOutletDeactivated();
        this.routeReuseStrategy.store(n.value.snapshot, { componentRef: a, route: n, contexts: c });
    } }
    deactivateRouteAndOutlet(n, e) { let r = e.getContext(n.value.outlet), i = r && n.value.component ? r.children : e, o = me(n); for (let a of Object.values(o))
        this.deactivateRouteAndItsChildren(a, i); r && (r.outlet && (r.outlet.deactivate(), r.children.onOutletDeactivated()), r.attachRef = null, r.route = null), n.value._localInjector?.destroy(); }
    activateChildRoutes(n, e, r) { let i = me(e); n.children.forEach(o => { this.activateRoutes(o, i[o.value.outlet], r), this.forwardEvent(new pt(o.value.snapshot)); }), n.children.length && this.forwardEvent(new dt(n.value.snapshot)); }
    activateRoutes(n, e, r) { let i = n.value, o = e ? e.value : null; if (Pt(i), i === o)
        if (i.component) {
            let a = r.getOrCreateContext(i.outlet);
            this.activateChildRoutes(n, e, a.children);
        }
        else
            this.activateChildRoutes(n, e, r);
    else if (i.component) {
        let a = r.getOrCreateContext(i.outlet);
        if (this.routeReuseStrategy.shouldAttach(i.snapshot)) {
            let c = this.routeReuseStrategy.retrieve(i.snapshot);
            this.routeReuseStrategy.store(i.snapshot, null), a.children.onOutletReAttached(c.contexts), a.attachRef = c.componentRef, a.route = c.route.value, a.outlet && a.outlet.attach(c.componentRef, c.route.value), Pt(c.route.value), this.activateChildRoutes(n, null, a.children);
        }
        else
            a.attachRef = null, a.route = i, a.outlet && a.outlet.activateWith(i, a.injector), this.activateChildRoutes(n, null, a.children);
    }
    else
        this.activateChildRoutes(n, null, r); }
}, yt = class {
    path;
    route;
    constructor(n) { this.path = n, this.route = this.path[this.path.length - 1]; }
}, Se = class {
    component;
    route;
    constructor(n, e) { this.component = n, this.route = e; }
};
function Xi(t, n, e) { let r = t._root, i = n ? n._root : null; return _e(r, i, e, [r.value]); }
function eo(t) { let n = t.routeConfig ? t.routeConfig.canActivateChild : null; return !n || n.length === 0 ? null : { node: t, guards: n }; }
function Ne(t, n) { let e = Symbol(), r = n.get(t, e); return r === e ? typeof t == "function" && !ni(t) ? t : n.get(t) : r; }
function _e(t, n, e, r, i = { canDeactivateChecks: [], canActivateChecks: [] }) { let o = me(n); return t.children.forEach(a => { to(a, o[a.value.outlet], e, r.concat([a.value]), i), delete o[a.value.outlet]; }), Object.entries(o).forEach(([a, c]) => Pe(c, e.getContext(a), i)), i; }
function to(t, n, e, r, i = { canDeactivateChecks: [], canActivateChecks: [] }) { let o = t.value, a = n ? n.value : null, c = e ? e.getContext(t.value.outlet) : null; if (a && o.routeConfig === a.routeConfig) {
    let s = ro(a, o, o.routeConfig.runGuardsAndResolvers);
    s ? i.canActivateChecks.push(new yt(r)) : (o.data = a.data, o._resolvedData = a._resolvedData), o.component ? _e(t, n, c ? c.children : null, r, i) : _e(t, n, e, r, i), s && c && c.outlet && c.outlet.isActivated && i.canDeactivateChecks.push(new Se(c.outlet.component, a));
}
else
    a && Pe(n, c, i), i.canActivateChecks.push(new yt(r)), o.component ? _e(t, null, c ? c.children : null, r, i) : _e(t, null, e, r, i); return i; }
function ro(t, n, e) { if (typeof e == "function")
    return $(n._environmentInjector, () => e(t, n)); switch (e) {
    case "pathParamsChange": return !ue(t.url, n.url);
    case "pathParamsOrQueryParamsChange": return !ue(t.url, n.url) || !Q(t.queryParams, n.queryParams);
    case "always": return !0;
    case "paramsOrQueryParamsChange": return !Vt(t, n) || !Q(t.queryParams, n.queryParams);
    default: return !Vt(t, n);
} }
function Pe(t, n, e) { let r = me(t), i = t.value; Object.entries(r).forEach(([o, a]) => { i.component ? n ? Pe(a, n.children.getContext(o), e) : Pe(a, null, e) : Pe(a, n, e); }), i.component ? n && n.outlet && n.outlet.isActivated ? e.canDeactivateChecks.push(new Se(n.outlet.component, i)) : e.canDeactivateChecks.push(new Se(null, i)) : e.canDeactivateChecks.push(new Se(null, i)); }
function Ge(t) { return typeof t == "function"; }
function no(t) { return typeof t == "boolean"; }
function io(t) { return t && Ge(t.canLoad); }
function oo(t) { return t && Ge(t.canActivate); }
function ao(t) { return t && Ge(t.canActivateChild); }
function so(t) { return t && Ge(t.canDeactivate); }
function co(t) { return t && Ge(t.canMatch); }
function un(t) { return t instanceof fi || t?.name === "EmptyError"; }
var Je = Symbol("INITIAL_VALUE");
function Te() { return H(t => Or(t.map(n => n.pipe(Le(1), Ri(Je)))).pipe(U(n => { for (let e of n)
    if (e !== !0) {
        if (e === Je)
            return Je;
        if (e === !1 || uo(e))
            return e;
    } return !0; }), je(n => n !== Je), Le(1))); }
function uo(t) { return ie(t) || t instanceof Ee; }
function ln(t) { return t.aborted ? m(void 0).pipe(Le(1)) : new pi(n => { let e = () => { n.next(), n.complete(); }; return t.addEventListener("abort", e), () => t.removeEventListener("abort", e); }); }
function hn(t) { return jt(ln(t)); }
function lo(t) { return le(n => { let { targetSnapshot: e, currentSnapshot: r, guards: { canActivateChecks: i, canDeactivateChecks: o } } = n; return o.length === 0 && i.length === 0 ? m(N(l({}, n), { guardsResult: !0 })) : ho(o, e, r).pipe(le(a => a && no(a) ? fo(e, i, t) : m(a)), U(a => N(l({}, n), { guardsResult: a }))); }); }
function ho(t, n, e) { return W(t).pipe(le(r => yo(r.component, r.route, e, n)), fe(r => r !== !0, !0)); }
function fo(t, n, e) { return W(n).pipe(Pr(r => gi(go(r.route.parent, e), po(r.route, e), mo(t, r.path), vo(t, r.route))), fe(r => r !== !0, !0)); }
function po(t, n) { return t !== null && n && n(new ft(t)), m(!0); }
function go(t, n) { return t !== null && n && n(new ht(t)), m(!0); }
function vo(t, n) { let e = n.routeConfig ? n.routeConfig.canActivate : null; if (!e || e.length === 0)
    return m(!0); let r = e.map(i => tr(() => { let o = n._environmentInjector, a = Ne(i, o), c = oo(a) ? a.canActivate(n, t) : $(o, () => a(n, t)); return pe(c).pipe(fe()); })); return m(r).pipe(Te()); }
function mo(t, n) { let e = n[n.length - 1], i = n.slice(0, n.length - 1).reverse().map(o => eo(o)).filter(o => o !== null).map(o => tr(() => { let a = o.guards.map(c => { let s = o.node._environmentInjector, u = Ne(c, s), h = ao(u) ? u.canActivateChild(e, t) : $(s, () => u(e, t)); return pe(h).pipe(fe()); }); return m(a).pipe(Te()); })); return m(i).pipe(Te()); }
function yo(t, n, e, r) { let i = n && n.routeConfig ? n.routeConfig.canDeactivate : null; if (!i || i.length === 0)
    return m(!0); let o = i.map(a => { let c = n._environmentInjector, s = Ne(a, c), u = so(s) ? s.canDeactivate(t, n, e, r) : $(c, () => s(t, n, e, r)); return pe(u).pipe(fe()); }); return m(o).pipe(Te()); }
function Ro(t, n, e, r, i) { let o = n.canLoad; if (o === void 0 || o.length === 0)
    return m(!0); let a = o.map(c => { let s = Ne(c, t), u = io(s) ? s.canLoad(n, e) : $(t, () => s(n, e)), h = pe(u); return i ? h.pipe(hn(i)) : h; }); return m(a).pipe(Te(), dn(r)); }
function dn(t) { return vi(G(n => { if (typeof n != "boolean")
    throw mt(t, n); }), U(n => n === !0)); }
function So(t, n, e, r, i, o) { let a = n.canMatch; if (!a || a.length === 0)
    return m(!0); let c = a.map(s => { let u = Ne(s, t), h = co(u) ? u.canMatch(n, e, i) : $(t, () => u(n, e, i)); return pe(h).pipe(hn(o)); }); return m(c).pipe(Te(), dn(r)); }
var Z = class t extends Error {
    segmentGroup;
    constructor(n) { super(), this.segmentGroup = n || null, Object.setPrototypeOf(this, t.prototype); }
}, qe = class t extends Error {
    urlTree;
    constructor(n) { super(), this.urlTree = n, Object.setPrototypeOf(this, t.prototype); }
};
function Co(t) { throw new M(4e3, !1); }
function wo(t) { throw sn(!1, I.GuardRejected); }
var Qt = class {
    urlSerializer;
    urlTree;
    constructor(n, e) { this.urlSerializer = n, this.urlTree = e; }
    lineralizeSegments(n, e) { return S(this, null, function* () { let r = [], i = e.root; for (;;) {
        if (r = r.concat(i.segments), i.numberOfChildren === 0)
            return r;
        if (i.numberOfChildren > 1 || !i.children[f])
            throw Co(`${n.redirectTo}`);
        i = i.children[f];
    } }); }
    applyRedirectCommands(n, e, r, i, o) { return S(this, null, function* () { let a = yield bo(e, i, o); if (a instanceof _)
        throw new qe(a); let c = this.applyRedirectCreateUrlTree(a, this.urlSerializer.parse(a), n, r); if (a[0] === "/")
        throw new qe(c); return c; }); }
    applyRedirectCreateUrlTree(n, e, r, i) { let o = this.createSegmentGroup(n, e.root, r, i); return new _(o, this.createQueryParams(e.queryParams, this.urlTree.queryParams), e.fragment); }
    createQueryParams(n, e) { let r = {}; return Object.entries(n).forEach(([i, o]) => { if (typeof o == "string" && o[0] === ":") {
        let c = o.substring(1);
        r[i] = e[c];
    }
    else
        r[i] = o; }), r; }
    createSegmentGroup(n, e, r, i) { let o = this.createSegments(n, e.segments, r, i), a = Object.create(null); return Object.entries(e.children).forEach(([c, s]) => { a[c] = this.createSegmentGroup(n, s, r, i); }), new y(o, a); }
    createSegments(n, e, r, i) { return e.map(o => o.path[0] === ":" ? this.findPosParam(n, o, i) : this.findOrReturn(o, r)); }
    findPosParam(n, e, r) { let i = r[e.path.substring(1)]; if (!i)
        throw new M(4001, !1); return i; }
    findOrReturn(n, e) { let r = 0; for (let i of e) {
        if (i.path === n.path)
            return e.splice(r), i;
        r++;
    } return n; }
};
function bo(t, n, e) { if (typeof t == "string")
    return Promise.resolve(t); let r = t; return rt(pe($(e, () => r(n)))); }
function Io(t, n) { return t.providers && !t._injector && (t._injector = ii(t.providers, n, `Route: ${t.path}`)), t._injector ?? n; }
function q(t) { return t.outlet || f; }
function Ao(t, n) { let e = t.filter(r => q(r) === n); return e.push(...t.filter(r => q(r) !== n)), e; }
var Kt = { matched: !1, consumedSegments: [], remainingSegments: [], parameters: {}, positionalParamSegments: {} };
function fn(t) { return { routeConfig: t.routeConfig, url: t.url, params: t.params, queryParams: t.queryParams, fragment: t.fragment, data: t.data, outlet: t.outlet, title: t.title, paramMap: t.paramMap, queryParamMap: t.queryParamMap }; }
function Eo(t, n, e, r, i, o, a) { let c = pn(t, n, e); if (!c.matched)
    return m(c); let s = fn(o(c)); return r = Io(n, r), So(r, n, e, i, s, a).pipe(U(u => u === !0 ? c : l({}, Kt))); }
function pn(t, n, e) { if (n.path === "")
    return n.pathMatch === "full" && (t.hasChildren() || e.length > 0) ? l({}, Kt) : { matched: !0, consumedSegments: [], remainingSegments: e, parameters: {}, positionalParamSegments: {} }; let i = (n.matcher || kr)(e, t, n); if (!i)
    return l({}, Kt); let o = {}; Object.entries(i.posParams ?? {}).forEach(([c, s]) => { o[c] = s.path; }); let a = i.consumed.length > 0 ? l(l({}, o), i.consumed[i.consumed.length - 1].parameters) : o; return { matched: !0, consumedSegments: i.consumed, remainingSegments: e.slice(i.consumed.length), parameters: a, positionalParamSegments: i.posParams ?? {} }; }
function Nr(t, n, e, r, i) { return e.length > 0 && Mo(t, e, r, i) ? { segmentGroup: new y(n, No(r, new y(e, t.children))), slicedSegments: [] } : e.length === 0 && Do(t, e, r) ? { segmentGroup: new y(t.segments, To(t, e, r, t.children)), slicedSegments: e } : { segmentGroup: new y(t.segments, t.children), slicedSegments: e }; }
function To(t, n, e, r) { let i = {}; for (let o of e)
    if (St(t, n, o) && !r[q(o)]) {
        let a = new y([], {});
        i[q(o)] = a;
    } return l(l({}, r), i); }
function No(t, n) { let e = {}; e[f] = n; for (let r of t)
    if (r.path === "" && q(r) !== f) {
        let i = new y([], {});
        e[q(r)] = i;
    } return e; }
function Mo(t, n, e, r) { return e.some(i => !St(t, n, i) || !(q(i) !== f) ? !1 : !(r !== void 0 && q(i) === r)); }
function Do(t, n, e) { return e.some(r => St(t, n, r)); }
function St(t, n, e) { return (t.hasChildren() || n.length > 0) && e.pathMatch === "full" ? !1 : e.path === ""; }
function _o(t, n, e) { return n.length === 0 && !t.children[e]; }
var Yt = class {
};
function Uo(t, n, e, r, i, o, a, c) { return S(this, null, function* () { return new Zt(t, n, e, r, i, a, o, c).recognize(); }); }
var Oo = 31, Zt = class {
    injector;
    configLoader;
    rootComponentType;
    config;
    urlTree;
    paramsInheritanceStrategy;
    urlSerializer;
    abortSignal;
    applyRedirects;
    absoluteRedirectCount = 0;
    allowRedirects = !0;
    constructor(n, e, r, i, o, a, c, s) { this.injector = n, this.configLoader = e, this.rootComponentType = r, this.config = i, this.urlTree = o, this.paramsInheritanceStrategy = a, this.urlSerializer = c, this.abortSignal = s, this.applyRedirects = new Qt(this.urlSerializer, this.urlTree); }
    noMatchError(n) { return new M(4002, `'${n.segmentGroup}'`); }
    recognize() { return S(this, null, function* () { let n = Nr(this.urlTree.root, [], [], this.config).segmentGroup, { children: e, rootSnapshot: r } = yield this.match(n), i = new j(r, e), o = new He("", i), a = Kr(r, [], this.urlTree.queryParams, this.urlTree.fragment); return a.queryParams = this.urlTree.queryParams, o.url = this.urlSerializer.serialize(a), { state: o, tree: a }; }); }
    match(n) { return S(this, null, function* () { let e = new Ae([], Object.freeze({}), Object.freeze(l({}, this.urlTree.queryParams)), this.urlTree.fragment, Object.freeze({}), f, this.rootComponentType, null, {}, this.injector); try {
        return { children: yield this.processSegmentGroup(this.injector, this.config, n, f, e), rootSnapshot: e };
    }
    catch (r) {
        if (r instanceof qe)
            return this.urlTree = r.urlTree, this.match(r.urlTree.root);
        throw r instanceof Z ? this.noMatchError(r) : r;
    } }); }
    processSegmentGroup(n, e, r, i, o) { return S(this, null, function* () { if (r.segments.length === 0 && r.hasChildren())
        return this.processChildren(n, e, r, o); let a = yield this.processSegment(n, e, r, r.segments, i, !0, o); return a instanceof j ? [a] : []; }); }
    processChildren(n, e, r, i) { return S(this, null, function* () { let o = []; for (let s of Object.keys(r.children))
        s === "primary" ? o.unshift(s) : o.push(s); let a = []; for (let s of o) {
        let u = r.children[s], h = Ao(e, s), v = yield this.processSegmentGroup(n, h, u, s, i);
        a.push(...v);
    } let c = gn(a); return Po(c), c; }); }
    processSegment(n, e, r, i, o, a, c) { return S(this, null, function* () { for (let s of e)
        try {
            return yield this.processSegmentAgainstRoute(s._injector ?? n, e, s, r, i, o, a, c);
        }
        catch (u) {
            if (u instanceof Z || un(u))
                continue;
            throw u;
        } if (_o(r, i, o))
        return new Yt; throw new Z(r); }); }
    processSegmentAgainstRoute(n, e, r, i, o, a, c, s) { return S(this, null, function* () { if (q(r) !== a && (a === f || !St(i, o, r)))
        throw new Z(i); if (r.redirectTo === void 0)
        return this.matchSegmentAgainstRoute(n, i, r, o, a, s); if (this.allowRedirects && c)
        return this.expandSegmentAgainstRouteUsingRedirect(n, i, e, r, o, a, s); throw new Z(i); }); }
    expandSegmentAgainstRouteUsingRedirect(n, e, r, i, o, a, c) { return S(this, null, function* () { let { matched: s, parameters: u, consumedSegments: h, positionalParamSegments: v, remainingSegments: p } = pn(e, i, o); if (!s)
        throw new Z(e); typeof i.redirectTo == "string" && i.redirectTo[0] === "/" && (this.absoluteRedirectCount++, this.absoluteRedirectCount > Oo && (this.allowRedirects = !1)); let A = this.createSnapshot(n, i, o, u, c); if (this.abortSignal.aborted)
        throw new Error(this.abortSignal.reason); let E = yield this.applyRedirects.applyRedirectCommands(h, i.redirectTo, v, fn(A), n), w = yield this.applyRedirects.lineralizeSegments(i, E); return this.processSegment(n, r, e, w.concat(p), a, !1, c); }); }
    createSnapshot(n, e, r, i, o) { let a = new Ae(r, i, Object.freeze(l({}, this.urlTree.queryParams)), this.urlTree.fragment, jo(e), q(e), e.component ?? e._loadedComponent ?? null, e, xo(e), n), c = or(a, o, this.paramsInheritanceStrategy); return a.params = Object.freeze(c.params), a.data = Object.freeze(c.data), a; }
    matchSegmentAgainstRoute(n, e, r, i, o, a) { return S(this, null, function* () { if (this.abortSignal.aborted)
        throw new Error(this.abortSignal.reason); let c = Y => this.createSnapshot(n, r, Y.consumedSegments, Y.parameters, a), s = yield rt(Eo(e, r, i, n, this.urlSerializer, c, this.abortSignal)); if (r.path === "**" && (e.children = {}), !s?.matched)
        throw new Z(e); n = r._injector ?? n; let { routes: u } = yield this.getChildConfig(n, r, i), h = r._loadedInjector ?? n, { parameters: v, consumedSegments: p, remainingSegments: A } = s, E = this.createSnapshot(n, r, p, v, a), { segmentGroup: w, slicedSegments: T } = Nr(e, p, A, u, o); if (T.length === 0 && w.hasChildren()) {
        let Y = yield this.processChildren(h, u, w, E);
        return new j(E, Y);
    } if (u.length === 0 && T.length === 0)
        return new j(E, []); let ce = q(r) === o, re = yield this.processSegment(h, u, w, T, ce ? f : o, !0, E); return new j(E, re instanceof j ? [re] : []); }); }
    getChildConfig(n, e, r) { return S(this, null, function* () { if (e.children)
        return { routes: e.children, injector: n }; if (e.loadChildren) {
        if (e._loadedRoutes !== void 0) {
            let o = e._loadedNgModuleFactory;
            return o && !e._loadedInjector && (e._loadedInjector = o.create(n).injector), { routes: e._loadedRoutes, injector: e._loadedInjector };
        }
        if (this.abortSignal.aborted)
            throw new Error(this.abortSignal.reason);
        if (yield rt(Ro(n, e, r, this.urlSerializer, this.abortSignal))) {
            let o = yield this.configLoader.loadChildren(n, e);
            return e._loadedRoutes = o.routes, e._loadedInjector = o.injector, e._loadedNgModuleFactory = o.factory, o;
        }
        throw wo(e);
    } return { routes: [], injector: n }; }); }
};
function Po(t) { t.sort((n, e) => n.value.outlet === f ? -1 : e.value.outlet === f ? 1 : n.value.outlet.localeCompare(e.value.outlet)); }
function Lo(t) { let n = t.value.routeConfig; return n && n.path === ""; }
function gn(t) { let n = [], e = new Set; for (let r of t) {
    if (!Lo(r)) {
        n.push(r);
        continue;
    }
    let i = n.find(o => r.value.routeConfig === o.value.routeConfig);
    i !== void 0 ? (i.children.push(...r.children), e.add(i)) : n.push(r);
} for (let r of e) {
    let i = gn(r.children);
    n.push(new j(r.value, i));
} return n.filter(r => !e.has(r)); }
function jo(t) { return t.data || {}; }
function xo(t) { return t.resolve || {}; }
function ko(t, n, e, r, i, o, a) { return le(c => S(null, null, function* () { let { state: s, tree: u } = yield Uo(t, n, e, r, c.extractedUrl, i, o, a); return N(l({}, c), { targetSnapshot: s, urlAfterRedirects: u }); })); }
function $o(t) { return le(n => { let { targetSnapshot: e, guards: { canActivateChecks: r } } = n; if (!r.length)
    return m(n); let i = new Set(r.map(c => c.route)), o = new Set; for (let c of i)
    if (!o.has(c))
        for (let s of vn(c))
            o.add(s); let a = 0; return W(o).pipe(Pr(c => i.has(c) ? zo(c, e, t) : (c.data = or(c, c.parent, t).resolve, m(void 0))), G(() => a++), Lr(1), le(c => a === o.size ? m(n) : z)); }); }
function vn(t) { let n = t.children.map(e => vn(e)).flat(); return [t, ...n]; }
function zo(t, n, e) { let r = t.routeConfig, i = t._resolve; return r?.title !== void 0 && !rn(r) && (i[Be] = r.title), tr(() => (t.data = or(t, t.parent, e).resolve, Ho(i, t, n).pipe(U(o => (t._resolvedData = o, t.data = l(l({}, t.data), o), null))))); }
function Ho(t, n, e) { let r = kt(t); if (r.length === 0)
    return m({}); let i = {}; return W(r).pipe(le(o => Fo(t[o], n, e).pipe(fe(), G(a => { if (a instanceof Ee)
    throw mt(new J, a); i[o] = a; }))), Lr(1), U(() => i), jr(o => un(o) ? z : mi(o))); }
function Fo(t, n, e) { let r = n._environmentInjector, i = Ne(t, r), o = i.resolve ? i.resolve(n, e) : $(r, () => i(n, e)); return pe(o); }
function Mr(t) { return H(n => { let e = t(n); return e ? W(e).pipe(U(() => n)) : m(n); }); }
var lr = (() => { class t {
    buildTitle(e) { let r, i = e.root; for (; i !== void 0;)
        r = this.getResolvedTitleForRoute(i) ?? r, i = i.children.find(o => o.outlet === f); return r; }
    getResolvedTitleForRoute(e) { return e.data[Be]; }
    static \u0275fac = function (r) { return new (r || t); };
    static \u0275prov = R.\u0275\u0275defineService({ token: t, factory: () => g(mn) });
} return t; })(), mn = (() => { class t extends lr {
    title;
    constructor(e) { super(), this.title = e; }
    updateTitle(e) { let r = this.buildTitle(e); r !== void 0 && this.title.setTitle(r); }
    static \u0275fac = function (r) { return new (r || t)(R.\u0275\u0275inject(xr.Title)); };
    static \u0275prov = R.\u0275\u0275defineInjectable({ token: t, factory: t.\u0275fac, providedIn: "root" });
} return t; })(), te = new ee("", { factory: () => ({}) }), ve = new ee(""), Ct = (() => { class t {
    componentLoaders = new WeakMap;
    childrenLoaders = new WeakMap;
    onLoadStartListener;
    onLoadEndListener;
    compiler = g(oi);
    loadComponent(e, r) { return S(this, null, function* () { if (this.componentLoaders.get(r))
        return this.componentLoaders.get(r); if (r._loadedComponent)
        return Promise.resolve(r._loadedComponent); this.onLoadStartListener && this.onLoadStartListener(r); let i = S(this, null, function* () { try {
        let o = yield zr($(e, () => r.loadComponent())), a = yield Rn(_r(o));
        return this.onLoadEndListener && this.onLoadEndListener(r), r._loadedComponent = a, a;
    }
    finally {
        this.componentLoaders.delete(r);
    } }); return this.componentLoaders.set(r, i), i; }); }
    loadChildren(e, r) { if (this.childrenLoaders.get(r))
        return this.childrenLoaders.get(r); if (r._loadedRoutes)
        return Promise.resolve({ routes: r._loadedRoutes, injector: r._loadedInjector }); this.onLoadStartListener && this.onLoadStartListener(r); let i = S(this, null, function* () { try {
        let o = yield yn(r, this.compiler, e, this.onLoadEndListener);
        return r._loadedRoutes = o.routes, r._loadedInjector = o.injector, r._loadedNgModuleFactory = o.factory, o;
    }
    finally {
        this.childrenLoaders.delete(r);
    } }); return this.childrenLoaders.set(r, i), i; }
    static \u0275fac = function (r) { return new (r || t); };
    static \u0275prov = R.\u0275\u0275defineService({ token: t, factory: t.\u0275fac });
} return t; })();
function yn(t, n, e, r) { return S(this, null, function* () { let i = yield zr($(e, () => t.loadChildren())), o = yield Rn(_r(i)), a; o instanceof ai || Array.isArray(o) ? a = o : a = yield n.compileModuleAsync(o), r && r(t); let c, s, u = !1, h; return Array.isArray(a) ? (s = a, u = !0) : (c = a.create(e).injector, h = a, s = c.get(ve, [], { optional: !0, self: !0 }).flat()), { routes: s.map(ur), injector: c, factory: h }; }); }
function Rn(t) { return S(this, null, function* () { return t; }); }
var wt = (() => { class t {
    static \u0275fac = function (r) { return new (r || t); };
    static \u0275prov = R.\u0275\u0275defineService({ token: t, factory: () => g(qo) });
} return t; })(), qo = (() => { class t {
    shouldProcessUrl(e) { return !0; }
    extract(e) { return e; }
    merge(e, r) { return e; }
    static \u0275fac = function (r) { return new (r || t); };
    static \u0275prov = R.\u0275\u0275defineService({ token: t, factory: t.\u0275fac });
} return t; })(), hr = new ee(""), dr = new ee("");
function Sn(t, n, e) { let r = t.get(dr), i = t.get(Yn); if (!i.startViewTransition || r.skipNextTransition)
    return r.skipNextTransition = !1, new Promise(u => setTimeout(u)); let o, a = new Promise(u => { o = u; }), c = i.startViewTransition(() => (o(), Bo(t))); c.updateCallbackDone.catch(u => { }), c.ready.catch(u => { }), c.finished.catch(u => { }); let { onViewTransitionCreated: s } = r; return s && $(t, () => s({ transition: c, from: n, to: e })), a; }
function Bo(t) { return new Promise(n => { si({ read: () => setTimeout(n) }, { injector: t }); }); }
var fr = new ee(""), Vo = () => { }, bt = new ee(""), It = (() => { class t {
    currentNavigation = br(null, { equal: () => !1 });
    currentTransition = null;
    lastSuccessfulNavigation = br(null);
    events = new Lt;
    transitionAbortWithErrorSubject = new Lt;
    configLoader = g(Ct);
    environmentInjector = g(er);
    destroyRef = g(ci);
    urlSerializer = g(ae);
    rootContexts = g(ge);
    location = g(Xt);
    inputBindingEnabled = g(Ve, { optional: !0 }) !== null;
    titleStrategy = g(lr);
    options = g(te, { optional: !0 }) || {};
    paramsInheritanceStrategy = this.options.paramsInheritanceStrategy || Qi;
    urlHandlingStrategy = g(wt);
    createViewTransition = g(hr, { optional: !0 });
    navigationErrorHandler = g(bt, { optional: !0 });
    activatedRouteInjectorFeature = g(fr, { optional: !0 });
    navigationId = 0;
    get hasRequestedNavigation() { return this.navigationId !== 0; }
    transitions;
    afterPreactivation = () => m(void 0);
    rootComponentType = null;
    destroyed = !1;
    constructor() { let e = i => this.events.next(new ut(i)), r = i => this.events.next(new lt(i)); this.configLoader.onLoadEndListener = r, this.configLoader.onLoadStartListener = e, this.destroyRef.onDestroy(() => { this.destroyed = !0; }); }
    complete() { this.transitions?.complete(); }
    handleNavigationRequest(e) { let r = ++this.navigationId; Ue(() => { this.transitions?.next(N(l({}, e), { extractedUrl: this.urlHandlingStrategy.extract(e.rawUrl), targetSnapshot: null, targetRouterState: null, guards: { canActivateChecks: [], canDeactivateChecks: [] }, guardsResult: null, id: r, routesRecognizeHandler: {}, beforeActivateHandler: {} })); }); }
    setupNavigations(e) { return this.transitions = new F(null), this.transitions.pipe(je(r => r !== null), H(r => { let i = !0, o = !1, a = new AbortController, c = () => !o && this.currentTransition?.id === r.id; return m(r).pipe(H(s => { if (this.navigationId > r.id)
        return this.cancelNavigationTransition(r, "", I.SupersededByNewNavigation), z; this.currentTransition = r; let u = this.lastSuccessfulNavigation(); this.currentNavigation.set({ id: s.id, initialUrl: s.rawUrl, extractedUrl: s.extractedUrl, targetBrowserUrl: typeof s.extras.browserUrl == "string" ? this.urlSerializer.parse(s.extras.browserUrl) : s.extras.browserUrl, trigger: s.source, extras: s.extras, previousNavigation: u ? N(l({}, u), { previousNavigation: null }) : null, abort: () => a.abort(), routesRecognizeHandler: s.routesRecognizeHandler, beforeActivateHandler: s.beforeActivateHandler }); let h = !e.navigated || this.isUpdatingInternalState() || this.isUpdatedBrowserUrl(), v = s.extras.onSameUrlNavigation ?? e.onSameUrlNavigation; if (!h && v !== "reload")
        return this.events.next(new B(s.id, this.urlSerializer.serialize(s.rawUrl), "", Ce.IgnoredSameUrlNavigation)), s.resolve(!1), z; if (this.urlHandlingStrategy.shouldProcessUrl(s.rawUrl))
        return m(s).pipe(H(p => (this.events.next(new X(p.id, this.urlSerializer.serialize(p.extractedUrl), p.source, p.restoredState)), p.id !== this.navigationId ? z : Promise.resolve(p))), ko(this.environmentInjector, this.configLoader, this.rootComponentType, e.config, this.urlSerializer, this.paramsInheritanceStrategy, a.signal), G(p => { r.targetSnapshot = p.targetSnapshot, r.urlAfterRedirects = p.urlAfterRedirects, this.currentNavigation.update(A => (A.finalUrl = p.urlAfterRedirects, A)), this.events.next(new be); }), H(p => W(r.routesRecognizeHandler.deferredHandle ?? m(void 0)).pipe(U(() => p))), G(() => { let p = new $e(s.id, this.urlSerializer.serialize(s.extractedUrl), this.urlSerializer.serialize(s.urlAfterRedirects), s.targetSnapshot); this.events.next(p); })); if (h && this.urlHandlingStrategy.shouldProcessUrl(s.currentRawUrl)) {
        let { id: p, extractedUrl: A, source: E, restoredState: w, extras: T } = s, ce = new X(p, this.urlSerializer.serialize(A), E, w);
        this.events.next(ce);
        let re = en(this.rootComponentType, this.environmentInjector).snapshot;
        return this.currentTransition = r = N(l({}, s), { targetSnapshot: re, urlAfterRedirects: A, extras: N(l({}, T), { skipLocationChange: !1, replaceUrl: !1 }) }), this.currentNavigation.update(Y => (Y.finalUrl = A, Y)), m(r);
    }
    else
        return this.events.next(new B(s.id, this.urlSerializer.serialize(s.extractedUrl), "", Ce.IgnoredByUrlHandlingStrategy)), s.resolve(!1), z; }), U(s => { let u = new ot(s.id, this.urlSerializer.serialize(s.extractedUrl), this.urlSerializer.serialize(s.urlAfterRedirects), s.targetSnapshot); return this.events.next(u), this.currentTransition = r = N(l({}, s), { guards: Xi(s.targetSnapshot, s.currentSnapshot, this.rootContexts) }), r; }), lo(s => this.events.next(s)), H(s => { if (r.guardsResult = s.guardsResult, s.guardsResult && typeof s.guardsResult != "boolean")
        throw mt(this.urlSerializer, s.guardsResult); let u = new at(s.id, this.urlSerializer.serialize(s.extractedUrl), this.urlSerializer.serialize(s.urlAfterRedirects), s.targetSnapshot, !!s.guardsResult); if (this.events.next(u), !c())
        return z; if (!s.guardsResult)
        return this.cancelNavigationTransition(s, "", I.GuardRejected), z; if (s.guards.canActivateChecks.length === 0)
        return m(s); let h = new st(s.id, this.urlSerializer.serialize(s.extractedUrl), this.urlSerializer.serialize(s.urlAfterRedirects), s.targetSnapshot); if (this.events.next(h), !c())
        return z; let v = !1; return m(s).pipe($o(this.paramsInheritanceStrategy), G({ next: () => { v = !0; let p = new ct(s.id, this.urlSerializer.serialize(s.extractedUrl), this.urlSerializer.serialize(s.urlAfterRedirects), s.targetSnapshot); this.events.next(p); }, complete: () => { v || this.cancelNavigationTransition(s, "", I.NoDataFromResolver); } })); }), Mr(s => { let u = v => { let p = []; if (v.routeConfig?._loadedComponent)
        v.component = v.routeConfig?._loadedComponent;
    else if (v.routeConfig?.loadComponent) {
        let A = v._environmentInjector;
        p.push(this.configLoader.loadComponent(A, v.routeConfig).then(E => { v.component = E; }));
    } for (let A of v.children)
        p.push(...u(A)); return p; }, h = u(s.targetSnapshot.root); return h.length === 0 ? m(s) : W(Promise.all(h).then(() => s)); }), H(s => { let { newlyCreatedRoutes: u, state: h } = Ki(e.routeReuseStrategy, s.targetSnapshot, s.currentRouterState); return this.currentTransition = r = s = N(l({}, s), { targetRouterState: h, newlyCreatedRoutes: u }), this.currentNavigation.update(v => (v.targetRouterState = h, v)), m(s); }), this.activatedRouteInjectorFeature?.operator() ?? (s => s), Mr(() => this.afterPreactivation()), H(() => { let { currentSnapshot: s, targetSnapshot: u } = r, h = this.createViewTransition?.(this.environmentInjector, s.root, u.root); return h ? W(h).pipe(U(() => r)) : m(r); }), Le(1), H(s => { i = !1, this.events.next(new de); let u = r.beforeActivateHandler.deferredHandle; return u ? W(u.then(() => s)) : m(s); }), G(s => { new Wt(e.routeReuseStrategy, r.targetRouterState, r.currentRouterState, u => this.events.next(u), this.inputBindingEnabled).activate(this.rootContexts), s.newlyCreatedRoutes?.clear(), c() && (o = !0, this.currentNavigation.update(u => (u.abort = Vo, u)), this.lastSuccessfulNavigation.set(Ue(this.currentNavigation)), this.events.next(new O(s.id, this.urlSerializer.serialize(s.extractedUrl), this.urlSerializer.serialize(s.urlAfterRedirects))), this.titleStrategy?.updateTitle(s.targetRouterState.snapshot), s.resolve(!0)); }), jt(ln(a.signal).pipe(je(() => !o && i), G(() => { this.cancelNavigationTransition(r, a.signal.reason + "", I.Aborted); }))), G({ complete: () => { o = !0; } }), jt(this.transitionAbortWithErrorSubject.pipe(G(s => { throw s; }))), Si(() => { a.abort(), o || this.cancelNavigationTransition(r, "", I.SupersededByNewNavigation), this.currentTransition?.id === r.id && (this.currentNavigation.set(null), this.currentTransition = null); }), jr(s => { if (o = !0, Dr(r), this.destroyed)
        return r.resolve(!1), z; if (cn(s))
        this.events.next(new D(r.id, this.urlSerializer.serialize(r.extractedUrl), s.message, s.cancellationCode)), Ji(s) ? this.events.next(new Ie(s.url, s.navigationBehaviorOptions)) : r.resolve(!1);
    else {
        let u = new oe(r.id, this.urlSerializer.serialize(r.extractedUrl), s, r.targetSnapshot ?? void 0);
        try {
            let h = $(this.environmentInjector, () => this.navigationErrorHandler?.(u));
            if (h instanceof Ee) {
                let { message: v, cancellationCode: p } = mt(this.urlSerializer, h);
                this.events.next(new D(r.id, this.urlSerializer.serialize(r.extractedUrl), v, p)), this.events.next(new Ie(h.redirectTo, h.navigationBehaviorOptions));
            }
            else
                throw this.events.next(u), s;
        }
        catch (h) {
            this.options.resolveNavigationPromiseOnError ? r.resolve(!1) : r.reject(h);
        }
    } return z; })); })); }
    cancelNavigationTransition(e, r, i) { Dr(e); let o = new D(e.id, this.urlSerializer.serialize(e.extractedUrl), r, i); this.events.next(o), e.resolve(!1); }
    isUpdatingInternalState() { return this.currentTransition?.extractedUrl.toString() !== this.currentTransition?.currentUrlTree.toString(); }
    isUpdatedBrowserUrl() { let e = this.urlHandlingStrategy.extract(this.urlSerializer.parse(this.location.path(!0))), r = Ue(this.currentNavigation), i = r?.targetBrowserUrl ?? r?.extractedUrl; return e.toString() !== i?.toString() && !r?.extras.skipLocationChange; }
    static \u0275fac = function (r) { return new (r || t); };
    static \u0275prov = R.\u0275\u0275defineService({ token: t, factory: t.\u0275fac });
} return t; })();
function Go(t) { return t !== Re; }
function Dr(t) { if (t.newlyCreatedRoutes)
    for (let n of t.newlyCreatedRoutes)
        n._localInjector?.destroy(); }
var pr = new ee("");
function Cn(t, n, e) { let r = new Set; n.snapshot.root && wn(n.snapshot.root, r); let i = t.retrieveStoredRouteHandles?.() || []; for (let o of i) {
    let a = o;
    if (a?.route?.value?.snapshot)
        for (let c of a.route.value.snapshot.pathFromRoot)
            c.routeConfig && r.add(c.routeConfig);
} Jt(e, r, t, !1); }
function wn(t, n) { t.routeConfig && n.add(t.routeConfig); for (let e of t.children)
    wn(e, n); }
function Jt(t, n, e, r) { for (let i of t) {
    let o = r || !!((i._injector || i._loadedInjector) && !n.has(i) && (e.shouldDestroyInjector?.(i) ?? !1));
    i.children && Jt(i.children, n, e, o), i.loadChildren && i._loadedRoutes && Jt(i._loadedRoutes, n, e, o), o && (i._injector && (i._injector.destroy(), i._injector = void 0), i._loadedInjector && (i._loadedInjector.destroy(), i._loadedInjector = void 0));
} }
function Wo(t) { let n = t; n && n.componentRef && (n.componentRef.destroy(), n.route.value._localInjector?.destroy()); }
var bn = (() => { class t {
    static \u0275fac = function (r) { return new (r || t); };
    static \u0275prov = R.\u0275\u0275defineService({ token: t, factory: () => g(Qo) });
} return t; })(), Rt = class {
    shouldDetach(n) { return !1; }
    store(n, e) { }
    shouldAttach(n) { return !1; }
    retrieve(n) { return null; }
    shouldReuseRoute(n, e) { return n.routeConfig === e.routeConfig; }
    shouldDestroyInjector(n) { return !0; }
}, Qo = (() => { class t extends Rt {
    static \u0275fac = function (r) { return new (r || t); };
    static \u0275prov = R.\u0275\u0275defineService({ token: t, factory: t.\u0275fac });
} return t; })(), Me = (() => { class t {
    urlSerializer = g(ae);
    options = g(te, { optional: !0 }) || {};
    canceledNavigationResolution = this.options.canceledNavigationResolution || "replace";
    location = g(Xt);
    urlHandlingStrategy = g(wt);
    urlUpdateStrategy = this.options.urlUpdateStrategy || "deferred";
    currentUrlTree = new _;
    getCurrentUrlTree() { return this.currentUrlTree; }
    rawUrlTree = this.currentUrlTree;
    getRawUrlTree() { return this.rawUrlTree; }
    createBrowserPath({ finalUrl: e, initialUrl: r, targetBrowserUrl: i }) { let o = e !== void 0 ? this.urlHandlingStrategy.merge(e, r) : r, a = i ?? o; return a instanceof _ ? this.urlSerializer.serialize(a) : a; }
    routerUrlState(e) { return e?.targetBrowserUrl === void 0 || e?.finalUrl === void 0 ? {} : { \u0275routerUrl: this.urlSerializer.serialize(e.finalUrl) }; }
    commitTransition({ targetRouterState: e, finalUrl: r, initialUrl: i }) { r && e ? (this.currentUrlTree = r, this.rawUrlTree = this.urlHandlingStrategy.merge(r, i), this.routerState = e) : this.rawUrlTree = i; }
    routerState = en(null, g(er));
    getRouterState() { return this.routerState; }
    _stateMemento = this.createStateMemento();
    get stateMemento() { return this._stateMemento; }
    updateStateMemento() { this._stateMemento = this.createStateMemento(); }
    createStateMemento() { return { rawUrlTree: this.rawUrlTree, currentUrlTree: this.currentUrlTree, routerState: this.routerState }; }
    restoredState() { return this.location.getState(); }
    static \u0275fac = function (r) { return new (r || t); };
    static \u0275prov = R.\u0275\u0275defineService({ token: t, factory: () => g(Ko) });
} return t; })(), Ko = (() => { class t extends Me {
    currentPageId = 0;
    lastSuccessfulId = -1;
    get browserPageId() { return this.canceledNavigationResolution !== "computed" ? this.currentPageId : this.restoredState()?.\u0275routerPageId ?? this.currentPageId; }
    registerNonRouterCurrentEntryChangeListener(e) { return this.location.subscribe(r => { r.type === "popstate" && setTimeout(() => { e(r.url, r.state, "popstate", { replaceUrl: !0 }); }); }); }
    handleRouterEvent(e, r) { e instanceof X ? this.updateStateMemento() : e instanceof B ? this.commitTransition(r) : e instanceof $e ? this.urlUpdateStrategy === "eager" && (r.extras.skipLocationChange || this.setBrowserUrl(this.createBrowserPath(r), r)) : e instanceof de ? (this.commitTransition(r), this.urlUpdateStrategy === "deferred" && !r.extras.skipLocationChange && this.setBrowserUrl(this.createBrowserPath(r), r)) : e instanceof D && !ir(e) ? this.restoreHistory(r) : e instanceof oe ? this.restoreHistory(r, !0) : e instanceof O && (this.lastSuccessfulId = e.id, this.currentPageId = this.browserPageId); }
    setBrowserUrl(e, r) { let { extras: i, id: o } = r, { replaceUrl: a, state: c } = i; if (this.location.isCurrentPathEqualTo(e) || a) {
        let s = this.browserPageId, u = l(l({}, c), this.generateNgRouterState(o, s, r));
        this.location.replaceState(e, "", u);
    }
    else {
        let s = l(l({}, c), this.generateNgRouterState(o, this.browserPageId + 1, r));
        this.location.go(e, "", s);
    } }
    restoreHistory(e, r = !1) { if (this.canceledNavigationResolution === "computed") {
        let i = this.browserPageId, o = this.currentPageId - i;
        o !== 0 ? this.location.historyGo(o) : this.getCurrentUrlTree() === e.finalUrl && o === 0 && (this.resetInternalState(e), this.resetUrlToCurrentUrlTree());
    }
    else
        this.canceledNavigationResolution === "replace" && (r && this.resetInternalState(e), this.resetUrlToCurrentUrlTree()); }
    resetInternalState({ finalUrl: e }) { this.routerState = this.stateMemento.routerState, this.currentUrlTree = this.stateMemento.currentUrlTree, this.rawUrlTree = this.urlHandlingStrategy.merge(this.currentUrlTree, e ?? this.rawUrlTree); }
    resetUrlToCurrentUrlTree() { this.location.replaceState(this.urlSerializer.serialize(this.getRawUrlTree()), "", this.generateNgRouterState(this.lastSuccessfulId, this.currentPageId)); }
    generateNgRouterState(e, r, i) { return this.canceledNavigationResolution === "computed" ? l({ navigationId: e, \u0275routerPageId: r }, this.routerUrlState(i)) : l({ navigationId: e }, this.routerUrlState(i)); }
    static \u0275fac = function (r) { return new (r || t); };
    static \u0275prov = R.\u0275\u0275defineService({ token: t, factory: t.\u0275fac });
} return t; })();
function At(t, n) { t.events.pipe(je(e => e instanceof O || e instanceof D || e instanceof oe || e instanceof B), U(e => e instanceof O || e instanceof B ? 0 : (e instanceof D ? e.code === I.Redirect || e.code === I.SupersededByNewNavigation : !1) ? 2 : 1), je(e => e !== 2), Le(1)).subscribe(() => { n(); }); }
var V = (() => { class t {
    get currentUrlTree() { return this.stateManager.getCurrentUrlTree(); }
    get rawUrlTree() { return this.stateManager.getRawUrlTree(); }
    disposed = !1;
    nonRouterCurrentEntryChangeSubscription;
    console = g(ui);
    stateManager = g(Me);
    options = g(te, { optional: !0 }) || {};
    pendingTasks = g(li);
    urlUpdateStrategy = this.options.urlUpdateStrategy || "deferred";
    navigationTransitions = g(It);
    urlSerializer = g(ae);
    location = g(Xt);
    urlHandlingStrategy = g(wt);
    injector = g(er);
    _events = new Lt;
    get events() { return this._events; }
    get routerState() { return this.stateManager.getRouterState(); }
    navigated = !1;
    routeReuseStrategy = g(bn);
    injectorCleanup = g(pr, { optional: !0 });
    onSameUrlNavigation = this.options.onSameUrlNavigation || "ignore";
    config = g(ve, { optional: !0 })?.flat() ?? [];
    componentInputBindingEnabled = !!g(Ve, { optional: !0 });
    currentNavigation = this.navigationTransitions.currentNavigation.asReadonly();
    constructor() { this.resetConfig(this.config), this.navigationTransitions.setupNavigations(this).subscribe({ error: e => { } }), this.subscribeToNavigationEvents(); }
    eventsSubscription = new yi;
    subscribeToNavigationEvents() { let e = this.navigationTransitions.events.subscribe(r => { try {
        let i = this.navigationTransitions.currentTransition, o = Ue(this.navigationTransitions.currentNavigation);
        if (i !== null && o !== null) {
            if (this.stateManager.handleRouterEvent(r, o), r instanceof D && r.code !== I.Redirect && r.code !== I.SupersededByNewNavigation)
                this.navigated = !0;
            else if (r instanceof O)
                this.navigated = !0, this.injectorCleanup?.(this.routeReuseStrategy, this.routerState, this.config);
            else if (r instanceof Ie) {
                let a = r.navigationBehaviorOptions, c = this.urlHandlingStrategy.merge(r.url, i.currentRawUrl), s = l({ scroll: i.extras.scroll, browserUrl: i.extras.browserUrl, info: i.extras.info, skipLocationChange: i.extras.skipLocationChange, replaceUrl: i.extras.replaceUrl || this.urlUpdateStrategy === "eager" || Go(i.source) }, a);
                this.scheduleNavigation(c, Re, null, s, { resolve: i.resolve, reject: i.reject, promise: i.promise });
            }
        }
        Gi(r) && this._events.next(r);
    }
    catch (i) {
        this.navigationTransitions.transitionAbortWithErrorSubject.next(i);
    } }); this.eventsSubscription.add(e); }
    resetRootComponentType(e) { this.routerState.root.component = e, this.navigationTransitions.rootComponentType = e; }
    initialNavigation() { this.setUpLocationChangeListener(), this.navigationTransitions.hasRequestedNavigation || this.navigateToSyncWithBrowser(this.location.path(!0), Re, this.stateManager.restoredState(), { replaceUrl: !0 }); }
    setUpLocationChangeListener() { this.nonRouterCurrentEntryChangeSubscription ??= this.stateManager.registerNonRouterCurrentEntryChangeListener((e, r, i, o) => { this.navigateToSyncWithBrowser(e, i, r, o); }); }
    navigateToSyncWithBrowser(e, r, i, o) { let a = i?.navigationId ? i : null, c = i?.\u0275routerUrl ?? e; if (i?.\u0275routerUrl && (o = N(l({}, o), { browserUrl: e })), i) {
        let u = l({}, i);
        delete u.navigationId, delete u.\u0275routerPageId, delete u.\u0275routerUrl, Object.keys(u).length !== 0 && (o.state = u);
    } let s = this.parseUrl(c); this.scheduleNavigation(s, r, a, o).catch(u => { this.disposed || this.injector.get(hi)(u); }); }
    get url() { return this.serializeUrl(this.currentUrlTree); }
    getCurrentNavigation() { return Ue(this.navigationTransitions.currentNavigation); }
    get lastSuccessfulNavigation() { return this.navigationTransitions.lastSuccessfulNavigation; }
    resetConfig(e) { this.config = e.map(ur), this.navigated = !1; }
    ngOnDestroy() { this.dispose(); }
    dispose() { this._events.unsubscribe(), this.navigationTransitions.complete(), this.nonRouterCurrentEntryChangeSubscription?.unsubscribe(), this.nonRouterCurrentEntryChangeSubscription = void 0, this.disposed = !0, this.eventsSubscription.unsubscribe(); }
    createUrlTree(e, r = {}) { let { relativeTo: i, queryParams: o, fragment: a, queryParamsHandling: c, preserveFragment: s } = r, u = s ? this.currentUrlTree.fragment : a, h = null; switch (c ?? this.options.defaultQueryParamsHandling) {
        case "merge":
            h = l(l({}, this.currentUrlTree.queryParams), o);
            break;
        case "preserve":
            h = this.currentUrlTree.queryParams;
            break;
        default: h = o || null;
    } h !== null && (h = this.removeEmptyProps(h)); let v; try {
        let p = i ? i.snapshot : this.routerState.snapshot.root;
        v = Yr(p);
    }
    catch {
        (typeof e[0] != "string" || e[0][0] !== "/") && (e = []), v = this.currentUrlTree.root;
    } return Zr(v, e, h, u ?? null, this.urlSerializer); }
    navigateByUrl(e, r = { skipLocationChange: !1 }) { let i = ie(e) ? e : this.parseUrl(e), o = this.urlHandlingStrategy.merge(i, this.rawUrlTree); return this.scheduleNavigation(o, Re, null, r); }
    navigate(e, r = { skipLocationChange: !1 }) { return Yo(e), this.navigateByUrl(this.createUrlTree(e, r), r); }
    serializeUrl(e) { return this.urlSerializer.serialize(e); }
    parseUrl(e) { try {
        return this.urlSerializer.parse(e);
    }
    catch {
        return this.console.warn(di(4018, !1)), this.urlSerializer.parse("/");
    } }
    isActive(e, r) { let i; if (r === !0 ? i = l({}, rr) : r === !1 ? i = l({}, xe) : i = l(l({}, xe), r), ie(e))
        return $t(this.currentUrlTree, e, i); let o = this.parseUrl(e); return $t(this.currentUrlTree, o, i); }
    removeEmptyProps(e) { return Object.entries(e).reduce((r, [i, o]) => (o != null && (r[i] = o), r), {}); }
    scheduleNavigation(e, r, i, o, a) { if (this.disposed)
        return Promise.resolve(!1); let c, s, u; a ? (c = a.resolve, s = a.reject, u = a.promise) : u = new Promise((v, p) => { c = v, s = p; }); let h = this.pendingTasks.add(); return At(this, () => { queueMicrotask(() => this.pendingTasks.remove(h)); }), this.navigationTransitions.handleNavigationRequest({ source: r, restoredState: i, currentUrlTree: this.currentUrlTree, currentRawUrl: this.currentUrlTree, rawUrl: e, extras: o, resolve: c, reject: s, promise: u, currentSnapshot: this.routerState.snapshot, currentRouterState: this.routerState }), u.catch(Promise.reject.bind(Promise)); }
    static \u0275fac = function (r) { return new (r || t); };
    static \u0275prov = R.\u0275\u0275defineService({ token: t, factory: t.\u0275fac });
} return t; })();
function Yo(t) { for (let n = 0; n < t.length; n++)
    if (t[n] == null)
        throw new M(4008, !1); }
import * as An from "@angular/common";
import { ViewportScroller as En, PlatformNavigation as Zo, PlatformLocation as Jo, \u0275PRECOMMIT_HANDLER_SUPPORTED as Xo, Location as Tt, LOCATION_INITIALIZED as ea, \u0275NavigationAdapterForLocation as ta, HashLocationStrategy as Tn, LocationStrategy as yr, PathLocationStrategy as ra } from "@angular/common";
import * as d from "@angular/core";
import { inject as C, HostAttributeToken as na, linkedSignal as ia, untracked as P, signal as L, input as oa, \u0275INTERNAL_APPLICATION_ERROR_HANDLER as aa, \u0275RuntimeError as fs, computed as sa, booleanAttribute as gr, EventEmitter as ca, createEnvironmentInjector as Nn, InjectionToken as Qe, \u0275IS_HYDRATION_DOM_REUSE_ENABLED as ua, NgZone as la, ApplicationRef as Mn, EnvironmentInjector as ha, DestroyRef as da, afterNextRender as fa, \u0275promiseWithResolvers as In, makeEnvironmentProviders as pa, APP_BOOTSTRAP_LISTENER as Dn, provideAppInitializer as _n, \u0275IS_ENABLED_BLOCKING_INITIAL_NAVIGATION as ga, Injector as Un, \u0275performanceMarkFeature as va } from "@angular/core";
import { Subject as Rr, of as se, from as Et } from "rxjs";
import { mergeAll as Nt, catchError as ma, filter as ya, concatMap as Ra, mergeMap as Sa, tap as Ca } from "rxjs/operators";
var wa = (() => { class t {
    router = C(V);
    stateManager = C(Me);
    fragment = L("");
    queryParams = L({});
    path = L("");
    serializer = C(ae);
    constructor() { this.updateState(), this.router.events?.subscribe(e => { e instanceof O && this.updateState(); }); }
    updateState() { let { fragment: e, root: r, queryParams: i } = this.stateManager.getCurrentUrlTree(); this.fragment.set(e), this.queryParams.set(i), this.path.set(this.serializer.serialize(new _(r))); }
    static \u0275fac = function (r) { return new (r || t); };
    static \u0275prov = d.\u0275\u0275defineService({ token: t, factory: t.\u0275fac });
} return t; })(), Mt = (() => { class t {
    router;
    route;
    tabIndexAttribute;
    renderer;
    el;
    locationStrategy;
    hrefAttributeValue = C(new na("href"), { optional: !0 });
    reactiveHref = ia(() => this.isAnchorElement ? this.computeHref(this._urlTree()) : this.hrefAttributeValue);
    get href() { return P(this.reactiveHref); }
    set href(e) { this.reactiveHref.set(e); }
    set target(e) { this._target.set(e); }
    get target() { return P(this._target); }
    _target = L(void 0);
    set queryParams(e) { this._queryParams.set(e); }
    get queryParams() { return P(this._queryParams); }
    _queryParams = L(void 0, { equal: () => !1 });
    set fragment(e) { this._fragment.set(e); }
    get fragment() { return P(this._fragment); }
    _fragment = L(void 0);
    set queryParamsHandling(e) { this._queryParamsHandling.set(e); }
    get queryParamsHandling() { return P(this._queryParamsHandling); }
    _queryParamsHandling = L(void 0);
    set state(e) { this._state.set(e); }
    get state() { return P(this._state); }
    _state = L(void 0, { equal: () => !1 });
    set info(e) { this._info.set(e); }
    get info() { return P(this._info); }
    _info = L(void 0, { equal: () => !1 });
    set relativeTo(e) { this._relativeTo.set(e); }
    get relativeTo() { return P(this._relativeTo); }
    _relativeTo = L(void 0);
    set preserveFragment(e) { this._preserveFragment.set(e); }
    get preserveFragment() { return P(this._preserveFragment); }
    _preserveFragment = L(!1);
    set skipLocationChange(e) { this._skipLocationChange.set(e); }
    get skipLocationChange() { return P(this._skipLocationChange); }
    _skipLocationChange = L(!1);
    set replaceUrl(e) { this._replaceUrl.set(e); }
    get replaceUrl() { return P(this._replaceUrl); }
    _replaceUrl = L(!1);
    browserUrl = oa(void 0);
    isAnchorElement;
    onChanges = new Rr;
    applicationErrorHandler = C(aa);
    options = C(te, { optional: !0 });
    reactiveRouterState = C(wa);
    constructor(e, r, i, o, a, c) { this.router = e, this.route = r, this.tabIndexAttribute = i, this.renderer = o, this.el = a, this.locationStrategy = c; let s = a.nativeElement.tagName?.toLowerCase(); this.isAnchorElement = s === "a" || s === "area" || !!(typeof customElements == "object" && customElements.get(s)?.observedAttributes?.includes?.("href")); }
    setTabIndexIfNotOnNativeEl(e) { this.tabIndexAttribute != null || this.isAnchorElement || this.applyAttributeValue("tabindex", e); }
    ngOnChanges(e) { this.onChanges.next(this); }
    routerLinkInput = L(null);
    set routerLink(e) { e == null ? (this.routerLinkInput.set(null), this.setTabIndexIfNotOnNativeEl(null)) : (ie(e) ? this.routerLinkInput.set(e) : this.routerLinkInput.set(Array.isArray(e) ? e : [e]), this.setTabIndexIfNotOnNativeEl("0")); }
    onClick(e, r, i, o, a) { let c = this._urlTree(); if (c === null || this.isAnchorElement && (e !== 0 || r || i || o || a || typeof this.target == "string" && this.target != "_self"))
        return !0; let s = this.browserUrl(), u = l({ skipLocationChange: this.skipLocationChange, replaceUrl: this.replaceUrl, state: this.state, info: this.info }, s !== void 0 && { browserUrl: s }); return this.router.navigateByUrl(c, u)?.catch(h => { this.applicationErrorHandler(h); }), !this.isAnchorElement; }
    ngOnDestroy() { }
    applyAttributeValue(e, r) { let i = this.renderer, o = this.el.nativeElement; r !== null ? i.setAttribute(o, e, r) : i.removeAttribute(o, e); }
    _urlTree = sa(() => { this.reactiveRouterState.path(), this._preserveFragment() && this.reactiveRouterState.fragment(); let e = i => i === "preserve" || i === "merge"; (e(this._queryParamsHandling()) || e(this.options?.defaultQueryParamsHandling)) && this.reactiveRouterState.queryParams(); let r = this.routerLinkInput(); return r === null || !this.router.createUrlTree ? null : ie(r) ? r : this.router.createUrlTree(r, { relativeTo: this._relativeTo() !== void 0 ? this._relativeTo() : this.route, queryParams: this._queryParams(), fragment: this._fragment(), queryParamsHandling: this._queryParamsHandling(), preserveFragment: this._preserveFragment() }); }, { equal: (e, r) => this.computeHref(e) === this.computeHref(r) });
    get urlTree() { return P(this._urlTree); }
    computeHref(e) { return e !== null && this.locationStrategy ? this.locationStrategy?.prepareExternalUrl(this.router.serializeUrl(e)) ?? "" : null; }
    static \u0275fac = function (r) { return new (r || t)(d.\u0275\u0275directiveInject(V), d.\u0275\u0275directiveInject(K), d.\u0275\u0275injectAttribute("tabindex"), d.\u0275\u0275directiveInject(d.Renderer2), d.\u0275\u0275directiveInject(d.ElementRef), d.\u0275\u0275directiveInject(An.LocationStrategy)); };
    static \u0275dir = d.\u0275\u0275defineDirective({ type: t, selectors: [["", "routerLink", ""]], hostVars: 2, hostBindings: function (r, i) { r & 1 && d.\u0275\u0275listener("click", function (a) { return i.onClick(a.button, a.ctrlKey, a.shiftKey, a.altKey, a.metaKey); }), r & 2 && d.\u0275\u0275attribute("href", i.reactiveHref(), d.\u0275\u0275sanitizeUrlOrResourceUrl)("target", i._target()); }, inputs: { target: "target", queryParams: "queryParams", fragment: "fragment", queryParamsHandling: "queryParamsHandling", state: "state", info: "info", relativeTo: "relativeTo", preserveFragment: [2, "preserveFragment", "preserveFragment", gr], skipLocationChange: [2, "skipLocationChange", "skipLocationChange", gr], replaceUrl: [2, "replaceUrl", "replaceUrl", gr], browserUrl: [1, "browserUrl"], routerLink: "routerLink" }, features: [d.\u0275\u0275NgOnChangesFeature] });
} return t; })(), ba = (() => { class t {
    router;
    element;
    renderer;
    cdr;
    links;
    classes = [];
    routerEventsSubscription;
    linkInputChangesSubscription;
    _isActive = !1;
    get isActive() { return this._isActive; }
    routerLinkActiveOptions = { exact: !1 };
    ariaCurrentWhenActive;
    isActiveChange = new ca;
    link = C(Mt, { optional: !0 });
    constructor(e, r, i, o) { this.router = e, this.element = r, this.renderer = i, this.cdr = o, this.routerEventsSubscription = e.events.subscribe(a => { a instanceof O && this.update(); }); }
    ngAfterContentInit() { se(this.links.changes, se(null)).pipe(Nt()).subscribe(e => { this.update(), this.subscribeToEachLinkOnChanges(); }); }
    subscribeToEachLinkOnChanges() { this.linkInputChangesSubscription?.unsubscribe(); let e = [...this.links.toArray(), this.link].filter(r => !!r).map(r => r.onChanges); this.linkInputChangesSubscription = Et(e).pipe(Nt()).subscribe(r => { this._isActive !== this.isLinkActive(this.router)(r) && this.update(); }); }
    set routerLinkActive(e) { let r = Array.isArray(e) ? e : e.split(" "); this.classes = r.filter(i => !!i); }
    ngOnChanges(e) { this.update(); }
    ngOnDestroy() { this.routerEventsSubscription.unsubscribe(), this.linkInputChangesSubscription?.unsubscribe(); }
    update() { !this.links || !this.router.navigated || queueMicrotask(() => { let e = this.hasActiveLinks(); this.classes.forEach(r => { e ? this.renderer.addClass(this.element.nativeElement, r) : this.renderer.removeClass(this.element.nativeElement, r); }), e && this.ariaCurrentWhenActive !== void 0 ? this.renderer.setAttribute(this.element.nativeElement, "aria-current", this.ariaCurrentWhenActive.toString()) : this.renderer.removeAttribute(this.element.nativeElement, "aria-current"), this._isActive !== e && (this._isActive = e, this.cdr.markForCheck(), this.isActiveChange.emit(e)); }); }
    isLinkActive(e) { let r = Ia(this.routerLinkActiveOptions) ? this.routerLinkActiveOptions : this.routerLinkActiveOptions.exact ?? !1 ? l({}, rr) : l({}, xe); return i => { let o = i.urlTree; return o ? P(nr(o, e, r)) : !1; }; }
    hasActiveLinks() { let e = this.isLinkActive(this.router); return this.link && e(this.link) || this.links.some(e); }
    static \u0275fac = function (r) { return new (r || t)(d.\u0275\u0275directiveInject(V), d.\u0275\u0275directiveInject(d.ElementRef), d.\u0275\u0275directiveInject(d.Renderer2), d.\u0275\u0275directiveInject(d.ChangeDetectorRef)); };
    static \u0275dir = d.\u0275\u0275defineDirective({ type: t, selectors: [["", "routerLinkActive", ""]], contentQueries: function (r, i, o) { if (r & 1 && d.\u0275\u0275contentQuery(o, Mt, 5), r & 2) {
            let a;
            d.\u0275\u0275queryRefresh(a = d.\u0275\u0275loadQuery()) && (i.links = a);
        } }, inputs: { routerLinkActiveOptions: "routerLinkActiveOptions", ariaCurrentWhenActive: "ariaCurrentWhenActive", routerLinkActive: "routerLinkActive" }, outputs: { isActiveChange: "isActiveChange" }, exportAs: ["routerLinkActive"], features: [d.\u0275\u0275NgOnChangesFeature] });
} return t; })();
function Ia(t) { let n = t; return !!(n.paths || n.matrixParams || n.queryParams || n.fragment); }
var We = class {
}, Aa = (() => { class t {
    preload(e, r) { return r().pipe(ma(() => se(null))); }
    static \u0275fac = function (r) { return new (r || t); };
    static \u0275prov = d.\u0275\u0275defineService({ token: t, factory: t.\u0275fac });
} return t; })(), Ea = (() => { class t {
    preload(e, r) { return se(null); }
    static \u0275fac = function (r) { return new (r || t); };
    static \u0275prov = d.\u0275\u0275defineService({ token: t, factory: t.\u0275fac });
} return t; })(), On = (() => { class t {
    router;
    injector;
    preloadingStrategy;
    loader;
    subscription;
    constructor(e, r, i, o) { this.router = e, this.injector = r, this.preloadingStrategy = i, this.loader = o; }
    setUpPreloading() { this.subscription = this.router.events.pipe(ya(e => e instanceof O), Ra(() => this.preload())).subscribe(() => { }); }
    preload() { return this.processRoutes(this.injector, this.router.config); }
    ngOnDestroy() { this.subscription?.unsubscribe(); }
    processRoutes(e, r) { let i = []; for (let o of r) {
        o.providers && !o._injector && (o._injector = Nn(o.providers, e, ""));
        let a = o._injector ?? e;
        o._loadedNgModuleFactory && !o._loadedInjector && (o._loadedInjector = o._loadedNgModuleFactory.create(a).injector);
        let c = o._loadedInjector ?? a;
        (o.loadChildren && !o._loadedRoutes && o.canLoad === void 0 || o.loadComponent && !o._loadedComponent) && i.push(this.preloadConfig(a, o)), (o.children || o._loadedRoutes) && i.push(this.processRoutes(c, o.children ?? o._loadedRoutes));
    } return Et(i).pipe(Nt()); }
    preloadConfig(e, r) { return this.preloadingStrategy.preload(r, () => { if (e.destroyed)
        return se(null); let i; r.loadChildren && r.canLoad === void 0 ? i = Et(this.loader.loadChildren(e, r)) : i = se(null); let o = i.pipe(Sa(a => a === null ? se(void 0) : (r._loadedRoutes = a.routes, r._loadedInjector = a.injector, r._loadedNgModuleFactory = a.factory, this.processRoutes(a.injector ?? e, a.routes)))); if (r.loadComponent && !r._loadedComponent) {
        let a = this.loader.loadComponent(e, r);
        return Et([o, a]).pipe(Nt());
    }
    else
        return o; }); }
    static \u0275fac = function (r) { return new (r || t)(d.\u0275\u0275inject(V), d.\u0275\u0275inject(d.EnvironmentInjector), d.\u0275\u0275inject(We), d.\u0275\u0275inject(Ct)); };
    static \u0275prov = d.\u0275\u0275defineInjectable({ token: t, factory: t.\u0275fac, providedIn: "root" });
} return t; })(), Dt = new Qe(""), Pn = (() => { class t {
    options;
    routerEventsSubscription;
    scrollEventsSubscription;
    lastId = 0;
    lastSource = Re;
    restoredId = 0;
    store = {};
    isHydrating = C(ua, { optional: !0 }) ?? !1;
    urlSerializer = C(ae);
    zone = C(la);
    viewportScroller = C(En);
    transitions = C(It);
    constructor(e) { this.options = e, this.options.scrollPositionRestoration ||= "disabled", this.options.anchorScrolling ||= "disabled", this.isHydrating && C(Mn).whenStable().then(() => { this.isHydrating = !1; }); }
    init() { this.options.scrollPositionRestoration !== "disabled" && this.viewportScroller.setHistoryScrollRestoration("manual"), this.routerEventsSubscription = this.createScrollEvents(), this.scrollEventsSubscription = this.consumeScrollEvents(); }
    createScrollEvents() { return this.transitions.events.subscribe(e => { e instanceof X ? (this.store[this.lastId] = this.viewportScroller.getScrollPosition(), this.lastSource = e.navigationTrigger, this.restoredId = e.restoredState ? e.restoredState.navigationId : 0) : e instanceof O ? (this.lastId = e.id, this.scheduleScrollEvent(e, this.urlSerializer.parse(e.urlAfterRedirects).fragment)) : e instanceof B && e.code === Ce.IgnoredSameUrlNavigation && (this.lastSource = void 0, this.restoredId = 0, this.scheduleScrollEvent(e, this.urlSerializer.parse(e.url).fragment)); }); }
    consumeScrollEvents() { return this.transitions.events.subscribe(e => { if (!(e instanceof we) || e.scrollBehavior === "manual")
        return; let r = { behavior: "instant" }; e.position ? this.options.scrollPositionRestoration === "top" ? this.viewportScroller.scrollToPosition([0, 0], r) : this.options.scrollPositionRestoration === "enabled" && this.viewportScroller.scrollToPosition(e.position, r) : e.anchor && this.options.anchorScrolling === "enabled" ? this.viewportScroller.scrollToAnchor(e.anchor) : this.options.scrollPositionRestoration !== "disabled" && this.viewportScroller.scrollToPosition([0, 0]); }); }
    scheduleScrollEvent(e, r) { if (this.isHydrating)
        return; let i = P(this.transitions.currentNavigation)?.extras.scroll; this.zone.runOutsideAngular(() => S(this, null, function* () { yield new Promise(o => { setTimeout(o), typeof requestAnimationFrame < "u" && requestAnimationFrame(o); }), this.zone.run(() => { this.transitions.events.next(new we(e, this.lastSource === "popstate" ? this.store[this.restoredId] : null, r, i)); }); })); }
    ngOnDestroy() { this.routerEventsSubscription?.unsubscribe(), this.scrollEventsSubscription?.unsubscribe(); }
    static \u0275fac = function (r) { d.\u0275\u0275invalidFactory(); };
    static \u0275prov = d.\u0275\u0275defineInjectable({ token: t, factory: t.\u0275fac });
} return t; })();
var Ta = (() => { class t extends Me {
    injector = C(ha);
    navigation = C(Zo);
    inMemoryScrollingEnabled = C(Dt, { optional: !0 }) !== null;
    base = new URL(C(Jo).href).origin;
    appRootUrl = new URL(this.location.prepareExternalUrl?.("/") ?? "/", this.base);
    precommitHandlerSupported = C(Xo);
    activeHistoryEntry = this.navigation.currentEntry;
    currentNavigation = {};
    nonRouterCurrentEntryChangeSubject = new Rr;
    nonRouterEntryChangeListener;
    get registered() { return this.nonRouterEntryChangeListener !== void 0 && !this.nonRouterEntryChangeListener.closed; }
    constructor() { super(); let e = r => { this.handleNavigate(r); }; this.navigation.addEventListener("navigate", e), C(da).onDestroy(() => this.navigation.removeEventListener("navigate", e)); }
    registerNonRouterCurrentEntryChangeListener(e) { return this.activeHistoryEntry = this.navigation.currentEntry, this.nonRouterEntryChangeListener = this.nonRouterCurrentEntryChangeSubject.subscribe(({ path: r, state: i }) => { e(r, i, "popstate", this.precommitHandlerSupported ? {} : { replaceUrl: !0 }); }), this.nonRouterEntryChangeListener; }
    handleRouterEvent(e, r) { return S(this, null, function* () { if (this.currentNavigation = N(l({}, this.currentNavigation), { routerTransition: r }), e instanceof X)
        this.updateStateMemento(), this.precommitHandlerSupported && this.maybeCreateNavigationForTransition(r);
    else if (e instanceof B)
        this.finishNavigation(), this.commitTransition(r);
    else if (e instanceof be)
        r.routesRecognizeHandler.deferredHandle = new Promise(i => S(this, null, function* () { if (this.urlUpdateStrategy === "eager")
            try {
                this.maybeCreateNavigationForTransition(r), yield this.currentNavigation.commitUrl?.();
            }
            catch {
                return;
            } i(); }));
    else if (e instanceof de)
        r.beforeActivateHandler.deferredHandle = new Promise(i => S(this, null, function* () { if (this.urlUpdateStrategy === "deferred")
            try {
                this.maybeCreateNavigationForTransition(r), yield this.currentNavigation.commitUrl?.();
            }
            catch {
                return;
            } this.commitTransition(r), i(); }));
    else if (e instanceof D || e instanceof oe) {
        if (e instanceof D && e.code === I.Redirect && !!this.currentNavigation.commitUrl)
            return;
        this.cancel(r, e);
    }
    else if (e instanceof O) {
        let { resolveHandler: i, removeAbortListener: o } = this.currentNavigation;
        this.currentNavigation = {}, o?.(), this.activeHistoryEntry = this.navigation.currentEntry, fa({ read: () => i?.() }, { injector: this.injector });
    } }); }
    maybeCreateNavigationForTransition(e) { let { navigationEvent: r, commitUrl: i } = this.currentNavigation; if (i || r && r.navigationType === "traverse" && this.eventAndRouterDestinationsMatch(r, e))
        return; this.currentNavigation.removeAbortListener?.(); let o = this.createBrowserPath(e); this.navigate(o, e); }
    navigate(e, r) { let i = r.extras.skipLocationChange ? this.navigation.currentEntry.url : this.location.prepareExternalUrl(e), o = l(l({}, r.extras.state), this.generateNgRouterState(r)), a = { \u0275routerInfo: { intercept: !0 } }; !this.navigation.transition && this.currentNavigation.navigationEvent && (r.extras.replaceUrl = !1); let c = this.location.isCurrentPathEqualTo(i) || r.extras.replaceUrl || r.extras.skipLocationChange ? "replace" : "push"; vr(this.navigation.navigate(i, { state: o, history: c, info: a })); }
    finishNavigation() { this.currentNavigation.commitUrl?.(), this.currentNavigation?.resolveHandler?.(), this.currentNavigation = {}; }
    cancel(e, r) { return S(this, null, function* () { this.currentNavigation.rejectNavigateEvent?.(); let i = {}; if (this.currentNavigation = i, ir(r))
        return; let o = this.canceledNavigationResolution === "computed" && this.navigation.currentEntry.key !== this.activeHistoryEntry.key; if (this.resetInternalState(e.finalUrl, o), this.navigation.currentEntry.id !== this.activeHistoryEntry.id && !(r instanceof D && r.code === I.Aborted && (yield Promise.resolve(), this.currentNavigation !== i)))
        if (o)
            vr(this.navigation.traverseTo(this.activeHistoryEntry.key, { info: { \u0275routerInfo: { intercept: !1 } } }));
        else {
            let a = this.urlSerializer.serialize(this.getCurrentUrlTree()), c = this.location.prepareExternalUrl(a);
            vr(this.navigation.navigate(c, { state: this.activeHistoryEntry.getState(), history: "replace", info: { \u0275routerInfo: { intercept: !1 } } }));
        } }); }
    resetInternalState(e, r) { this.routerState = this.stateMemento.routerState, this.currentUrlTree = this.stateMemento.currentUrlTree, this.rawUrlTree = r ? this.stateMemento.rawUrlTree : this.urlHandlingStrategy.merge(this.currentUrlTree, e ?? this.rawUrlTree); }
    handleNavigate(e) { if (!e.canIntercept || e.navigationType === "reload")
        return; let r = e?.info?.\u0275routerInfo; if (r && !r.intercept)
        return; let i = !!r; if (!i) {
        let { pathname: E, origin: w } = new URL(e.destination.url), { pathname: T, origin: ce } = this.appRootUrl, re = T.endsWith("/") ? T : T + "/";
        if (w !== ce || E !== T && !E.startsWith(re))
            return;
        if (this.currentNavigation.routerTransition?.abort(), !this.registered) {
            this.finishNavigation();
            return;
        }
    } this.currentNavigation = l({}, this.currentNavigation), this.currentNavigation.navigationEvent = e; let o = () => { this.currentNavigation.routerTransition?.abort(); }; e.signal.addEventListener("abort", o), this.currentNavigation.removeAbortListener = () => e.signal.removeEventListener("abort", o); let c = { scroll: this.inMemoryScrollingEnabled ? "manual" : this.currentNavigation.routerTransition?.extras.scroll ?? "after-transition" }, { promise: s, resolve: u, reject: h } = In(), { promise: v, resolve: p, reject: A } = In(); if (this.currentNavigation.rejectNavigateEvent = () => { e.signal.removeEventListener("abort", o), A(), h(); }, this.currentNavigation.resolveHandler = () => { this.currentNavigation.removeAbortListener?.(), u(); }, s.catch(() => { }), v.catch(() => { }), c.handler = () => s, this.deferredCommitSupported(e)) {
        let E = new Promise(w => { c.precommitHandler = T => (this.navigation.transition?.navigationType === "traverse" ? w(() => { }) : w(T.redirect.bind(T)), v); });
        this.currentNavigation.commitUrl = () => S(this, null, function* () { this.currentNavigation.commitUrl = void 0; let w = this.currentNavigation.routerTransition; if (w && !w.extras.skipLocationChange) {
            let T = this.createBrowserPath(w), ce = this.location.isCurrentPathEqualTo(T) || w.extras.replaceUrl ? "replace" : "push", re = l(l({}, w.extras.state), this.generateNgRouterState(w)), Y = this.location.prepareExternalUrl(T);
            (yield E)(Y, { state: re, history: ce });
        } return p(), yield this.navigation.transition?.committed; });
    } e.intercept(c), i || this.handleNavigateEventTriggeredOutsideRouterAPIs(e); }
    handleNavigateEventTriggeredOutsideRouterAPIs(e) { let r = e.destination.url.substring(this.appRootUrl.href.length - 1), i = e.destination.getState(); this.nonRouterCurrentEntryChangeSubject.next({ path: r, state: i }); }
    eventAndRouterDestinationsMatch(e, r) { let i = this.createBrowserPath(r), o = new URL(e.destination.url), a = new URL(this.location.prepareExternalUrl(i), o.origin); o.searchParams.sort(), a.searchParams.sort(); let { pathname: c, search: s, hash: u } = a, { pathname: h, search: v, hash: p } = o; return s === v && u === p && Tt.stripTrailingSlash(c) === Tt.stripTrailingSlash(h); }
    generateNgRouterState(e) { return N(l({}, this.routerUrlState(e)), { navigationId: e.id }); }
    deferredCommitSupported(e) { return this.precommitHandlerSupported && e.cancelable; }
    static \u0275fac = function (r) { return new (r || t); };
    static \u0275prov = d.\u0275\u0275defineService({ token: t, factory: t.\u0275fac });
} return t; })();
function vr(t) { return t.finished?.catch(() => { }), t.committed?.catch(() => { }), t; }
function Na() { return Ca(({ newlyCreatedRoutes: t, targetRouterState: n }) => { if (!t || !n)
    return; let e = r => { let i = r.value; i && Ma(i, t); for (let o of r.children)
    e(o); }; e(n._root); }); }
function Ma(t, n) { t?.routeConfig?.\u0275UseActivatedRouteInjector && n.has(t) && Da(t._futureSnapshot, t); }
function Da(t, n) { n._localInjector = Nn([], t._environmentInjector); }
function _a(t, ...n) { return pa([{ provide: ve, multi: !0, useValue: t }, { provide: K, useFactory: Ln }, { provide: Dn, multi: !0, useFactory: jn }, n.map(e => e.\u0275providers)]); }
function Ln() { return C(V).routerState.root; }
function k(t, n) { return { \u0275kind: t, \u0275providers: n }; }
function Ua(t = {}) { return k(4, [{ provide: Dt, useFactory: () => new Pn(t) }]); }
function Oa() { return k(11, [{ provide: Me, useExisting: Ta }, { provide: Tt, useClass: ta }, []]); }
function jn() { let t = C(Un); return n => { let e = t.get(Mn); if (n !== e.components[0])
    return; let r = t.get(V), i = t.get(xn); t.get(Sr) === 1 && r.initialNavigation(), t.get(zn, null, { optional: !0 })?.setUpPreloading(), t.get(Dt, null, { optional: !0 })?.init(), r.resetRootComponentType(e.componentTypes[0]), i.closed || (i.next(), i.complete(), i.unsubscribe()); }; }
var xn = new Qe("", { factory: () => new Rr }), Sr = new Qe("", { factory: () => 1 });
function kn() { let t = [{ provide: ga, useValue: !0 }, { provide: Sr, useValue: 0 }, _n(() => { let n = C(Un); return n.get(ea, Promise.resolve()).then(() => new Promise(r => { let i = n.get(V), o = n.get(xn); At(i, () => { r(!0); }), n.get(It).afterPreactivation = () => (r(!0), o.closed ? se(void 0) : o), i.initialNavigation(); })); })]; return k(2, t); }
function $n() { let t = [_n(() => { C(V).setUpLocationChangeListener(); }), { provide: Sr, useValue: 2 }]; return k(3, t); }
function Pa() { let t = []; return t = [], k(1, t); }
var zn = new Qe("");
function Hn(t) { return k(0, [{ provide: zn, useExisting: On }, { provide: We, useExisting: t }]); }
function La(t) { return k(5, [{ provide: te, useValue: t }]); }
function ja() { return k(6, [{ provide: yr, useClass: Tn }]); }
function xa(t) { return k(7, [{ provide: bt, useValue: t }]); }
function ka() { return k(10, [{ provide: pr, useValue: Cn }]); }
function Fn(t = {}) { return k(8, [{ provide: Ve, useFactory: () => new on(t) }]); }
function qn(t) { va("NgRouterViewTransitions"); let n = [{ provide: hr, useValue: Sn }, { provide: dr, useValue: l({ skipNextTransition: !!t?.skipInitialTransition }, t) }]; return k(9, n); }
function $a() { return k(9, [{ provide: fr, useValue: { operator: Na } }]); }
var Bn = [Tt, { provide: ae, useClass: J }, V, ge, { provide: K, useFactory: Ln }, Ct], za = (() => { class t {
    constructor() { }
    static forRoot(e, r) { return { ngModule: t, providers: [Bn, [], { provide: ve, multi: !0, useValue: e }, [], r?.errorHandler ? { provide: bt, useValue: r.errorHandler } : [], { provide: te, useValue: r || {} }, r?.useHash ? Fa() : qa(), Ha(), r?.preloadingStrategy ? Hn(r.preloadingStrategy).\u0275providers : [], r?.initialNavigation ? Ba(r) : [], r?.bindToComponentInputs ? Fn(typeof r.bindToComponentInputs == "object" ? r.bindToComponentInputs : {}).\u0275providers : [], r?.enableViewTransitions ? qn().\u0275providers : [], Va()] }; }
    static forChild(e) { return { ngModule: t, providers: [{ provide: ve, multi: !0, useValue: e }] }; }
    static \u0275fac = function (r) { return new (r || t); };
    static \u0275mod = d.\u0275\u0275defineNgModule({ type: t });
    static \u0275inj = d.\u0275\u0275defineInjector({});
} return t; })();
function Ha() { return { provide: Dt, useFactory: () => { let t = C(En), n = C(te); return n.scrollOffset && t.setOffset(n.scrollOffset), new Pn(n); } }; }
function Fa() { return { provide: yr, useClass: Tn }; }
function qa() { return { provide: yr, useClass: ra }; }
function Ba(t) { return [t.initialNavigation === "disabled" ? $n().\u0275providers : [], t.initialNavigation === "enabledBlocking" ? kn().\u0275providers : []]; }
var mr = new Qe("");
function Va() { return [{ provide: mr, useFactory: jn }, { provide: Dn, multi: !0, useExisting: mr }]; }
import { inject as Ke, Version as Ga } from "@angular/core";
import "@angular/common";
import "rxjs";
import "rxjs/operators";
import "@angular/platform-browser";
function xs(t) { return t.map(n => (...e) => Ke(n).canMatch(...e)); }
function ks(t) { return t.map(n => (...e) => Ke(n).canActivate(...e)); }
function $s(t) { return t.map(n => (...e) => Ke(n).canActivateChild(...e)); }
function zs(t) { return t.map(n => (...e) => Ke(n).canDeactivate(...e)); }
function Hs(t) { return (...n) => Ke(t).resolve(...n); }
var Fs = new Ga("22.0.8");
export { K as ActivatedRoute, Ae as ActivatedRouteSnapshot, pt as ActivationEnd, ft as ActivationStart, Rt as BaseRouteReuseStrategy, dt as ChildActivationEnd, ht as ChildActivationStart, ge as ChildrenOutletContexts, mn as DefaultTitleStrategy, J as DefaultUrlSerializer, b as EventType, at as GuardsCheckEnd, ot as GuardsCheckStart, D as NavigationCancel, I as NavigationCancellationCode, O as NavigationEnd, oe as NavigationError, B as NavigationSkipped, Ce as NavigationSkippedCode, X as NavigationStart, Ea as NoPreloading, gt as OutletContext, f as PRIMARY_OUTLET, Aa as PreloadAllModules, We as PreloadingStrategy, te as ROUTER_CONFIGURATION, mr as ROUTER_INITIALIZER, nn as ROUTER_OUTLET_DATA, ve as ROUTES, Ee as RedirectCommand, ct as ResolveEnd, st as ResolveStart, lt as RouteConfigLoadEnd, ut as RouteConfigLoadStart, bn as RouteReuseStrategy, V as Router, x as RouterEvent, Mt as RouterLink, ba as RouterLinkActive, Mt as RouterLinkWithHref, za as RouterModule, sr as RouterOutlet, On as RouterPreloader, ze as RouterState, He as RouterStateSnapshot, $e as RoutesRecognized, we as Scroll, lr as TitleStrategy, wt as UrlHandlingStrategy, ne as UrlSegment, y as UrlSegmentGroup, ae as UrlSerializer, _ as UrlTree, Fs as VERSION, he as convertToParamMap, Kr as createUrlTreeFromSnapshot, kr as defaultUrlMatcher, Wo as destroyDetachedRouteHandle, nr as isActive, ks as mapToCanActivate, $s as mapToCanActivateChild, zs as mapToCanDeactivate, xs as mapToCanMatch, Hs as mapToResolve, _a as provideRouter, Fn as withComponentInputBinding, Pa as withDebugTracing, $n as withDisabledInitialNavigation, kn as withEnabledBlockingInitialNavigation, ka as withExperimentalAutoCleanupInjectors, Oa as withExperimentalPlatformNavigation, ja as withHashLocation, Ua as withInMemoryScrolling, xa as withNavigationErrorHandler, Hn as withPreloading, La as withRouterConfig, qn as withViewTransitions, cr as \u0275EmptyOutletComponent, Bn as \u0275ROUTER_PROVIDERS, At as \u0275afterNextNavigation, yn as \u0275loadChildren, $a as \u0275withActivatedRouteInjectors };
/*! Bundled license information:

@angular/router/fesm2022/_router-chunk.mjs:
@angular/router/fesm2022/_router_module-chunk.mjs:
@angular/router/fesm2022/router.mjs:
  (**
   * @license Angular v22.0.8
   * (c) 2010-2026 Google LLC. https://angular.dev/
   * License: MIT
   *)
*/
