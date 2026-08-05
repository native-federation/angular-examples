import { a as ce, b as E, f as A } from "@nf-internal/chunk-LD32UVVN";
import { F as Qe, G as Xe, H as de, I as ze, J as en, K as nn, a as D, b as m, c as Ye, s as ue, w as Je, y as Ke } from "@nf-internal/chunk-QMUFVTBX";
import { a as G, b as Z, d as ae } from "@nf-internal/chunk-PZNONLPT";
import { BehaviorSubject as ut, Observable as ct, Subject as dt, Subscription as lt } from "rxjs";
var fe = class {
    full;
    major;
    minor;
    patch;
    constructor(n) { this.full = n; let t = n.split("."); this.major = t[0], this.minor = t[1], this.patch = t.slice(2).join("."); }
}, tn = new fe("22.0.8"), ft = (() => { let e = tn.full; return `https://${e.includes("-next") || e.includes("-rc") || e === "0.0.0-PLACEHOLDER" ? "next" : `v${tn.major}`}.angular.dev`; })(), so = `${ft}/errors`, ao = "https://angular.dev/best-practices/security#preventing-cross-site-scripting-xss", g = class extends Error {
    code;
    constructor(n, t) { super(xe(n, t)), this.code = n; }
};
function gt(e) { return `NG0${Math.abs(e)}`; }
function xe(e, n) { return `${gt(e)}${n ? ": " + n : ""}`; }
function c(e) { for (let n in e)
    if (e[n] === c)
        return n; throw Error(""); }
function uo(e, n) { for (let t in n)
    n.hasOwnProperty(t) && !e.hasOwnProperty(t) && (e[t] = n[t]); }
function ht(e) {
    if (typeof e == "string")
        return e;
    if (Array.isArray(e))
        return `[${e.map(ht).join(", ")}]`;
    if (e == null)
        return "" + e;
    let n = e.overriddenName || e.name;
    if (n)
        return `${n}`;
    let t = e.toString();
    if (t == null)
        return "" + t;
    let r = t.indexOf(`
`);
    return r >= 0 ? t.slice(0, r) : t;
}
function co(e, n) { return e ? n ? `${e} ${n}` : e : n || ""; }
function lo(e, n = 100) { if (!e || n < 1 || e.length <= n)
    return e; if (n == 1)
    return e.substring(0, 1) + "..."; let t = Math.round(n / 2); return e.substring(0, t) + "..." + e.substring(e.length - t); }
var pt = c({ __forward_ref__: c });
function vn(e) { return e.__forward_ref__ = vn, e; }
function I(e) { return mt(e) ? e() : e; }
function mt(e) { return typeof e == "function" && e.hasOwnProperty(pt) && e.__forward_ref__ === vn; }
function vt(e, n, t) { e != n && q(t, e, n, "=="); }
function yn(e, n) { e == null && q(n, e, null, "!="); }
function q(e, n, t, r) { throw new Error(`ASSERTION ERROR: ${e}` + (r == null ? "" : ` [Expected=> ${t} ${r} ${n} <=Actual]`)); }
function k(e) { return { token: e.token, providedIn: e.providedIn || null, factory: e.factory, value: void 0 }; }
function fo(e) { return { providers: e.providers || [], imports: e.imports || [] }; }
function ee(e) { return yt(e, Dn); }
function go(e) { return ee(e) !== null; }
function yt(e, n) { return e.hasOwnProperty(n) && e[n] || null; }
function Dt(e) { let n = e?.[Dn] ?? null; return n || null; }
function rn(e) { return e && e.hasOwnProperty(on) ? e[on] : null; }
var Dn = c({ \u0275prov: c }), on = c({ \u0275inj: c }), h = class {
    _desc;
    ngMetadataName = "InjectionToken";
    \u0275prov;
    constructor(n, t) { this._desc = n, this.\u0275prov = void 0, typeof t == "number" ? this.__NG_ELEMENT_ID__ = t : t !== void 0 && (this.\u0275prov = k({ token: this, providedIn: t.providedIn || "root", factory: t.factory })); }
    get multi() { return this; }
    toString() { return `InjectionToken ${this._desc}`; }
}, sn;
function ho(e) { q("setInjectorProfilerContext should never be called in production mode"); let n = sn; return sn = e, n; }
function In(e) { return e && !!e.\u0275providers; }
var It = c({ \u0275cmp: c }), Et = c({ \u0275dir: c }), wt = c({ \u0275pipe: c }), Tt = c({ \u0275mod: c }), an = c({ \u0275fac: c }), po = c({ __NG_ELEMENT_ID__: c }), un = c({ __NG_ENV_ID__: c });
function Mt(e) { return ne(e, "@NgModule"), e[Tt] || null; }
function mo(e) { let n = Mt(e); if (!n)
    throw new g(915, !1); return n; }
function En(e) { return ne(e, "@Component"), e[It] || null; }
function Nt(e) { return ne(e, "@Directive"), e[Et] || null; }
function bt(e) { return ne(e, "@Pipe"), e[wt] || null; }
function ne(e, n) { if (e == null)
    throw new g(-919, !1); }
function vo(e) { let n = En(e) || Nt(e) || bt(e); return n !== null && n.standalone; }
function Ct(e) { return typeof e == "string" ? e : e == null ? "" : String(e); }
function yo(e) { return typeof e == "function" ? e.name || e.toString() : typeof e == "object" && e != null && typeof e.type == "function" ? e.type.name || e.type.toString() : Ct(e); }
var wn = c({ ngErrorCode: c }), _t = c({ ngErrorMessage: c }), xt = c({ ngTokenPath: c });
function Ft(e, n) { return Tn("", -200, n); }
function Rt(e, n) { throw new g(-201, !1); }
function Tn(e, n, t) { let r = new g(n, e); return r[wn] = n, r[_t] = e, t && (r[xt] = t), r; }
function St(e) { return e[wn]; }
var ge;
function Mn() { return ge; }
function w(e) { let n = ge; return ge = e, n; }
function kt(e, n, t) { let r = ee(e); if (r && r.providedIn == "root")
    return r.value === void 0 ? r.value = r.factory() : r.value; if (t & 8)
    return null; if (n !== void 0)
    return n; Rt(e, ""); }
var Do = globalThis;
var jt = {}, N = jt, he = "__NG_DI_FLAG__", pe = class {
    injector;
    constructor(n) { this.injector = n; }
    retrieve(n, t) { let r = U(t) || 0; try {
        return this.injector.get(n, r & 8 ? null : N, r);
    }
    catch (o) {
        if (A(o))
            return o;
        throw o;
    } }
};
function Pt(e, n = 0) { let t = ce(); if (t === void 0)
    throw new g(-203, !1); if (t === null)
    return kt(e, void 0, n); {
    let r = Ot(n), o = t.retrieve(e, r);
    if (A(o)) {
        if (r.optional)
            return null;
        throw o;
    }
    return o;
} }
function R(e, n = 0) { return (Mn() || Pt)(I(e), n); }
function Io(e) { throw new g(202, !1); }
function p(e, n) { return R(e, U(n)); }
function U(e) { return typeof e > "u" || typeof e == "number" ? e : 0 | (e.optional && 8) | (e.host && 1) | (e.self && 2) | (e.skipSelf && 4); }
function Ot(e) { return { optional: !!(e & 8), host: !!(e & 1), self: !!(e & 2), skipSelf: !!(e & 4) }; }
function me(e) { let n = []; for (let t = 0; t < e.length; t++) {
    let r = I(e[t]);
    if (Array.isArray(r)) {
        if (r.length === 0)
            throw new g(900, !1);
        let o, i = 0;
        for (let s = 0; s < r.length; s++) {
            let d = r[s], u = At(d);
            typeof u == "number" ? u === -1 ? o = d.token : i |= u : o = d;
        }
        n.push(R(o, i));
    }
    else
        n.push(R(r));
} return n; }
function Eo(e, n) { return e[he] = n, e.prototype[he] = n, e; }
function At(e) { return e[he]; }
function W(e, n) { let t = e.hasOwnProperty(an); return t ? e[an] : null; }
function wo(e, n, t) { if (e.length !== n.length)
    return !1; for (let r = 0; r < e.length; r++) {
    let o = e[r], i = n[r];
    if (t && (o = t(o), i = t(i)), i !== o)
        return !1;
} return !0; }
function To(e) { return e.flat(Number.POSITIVE_INFINITY); }
function Fe(e, n) { e.forEach(t => Array.isArray(t) ? Fe(t, n) : n(t)); }
function Mo(e, n, t) { n >= e.length ? e.push(t) : e.splice(n, 0, t); }
function No(e, n) { return n >= e.length - 1 ? e.pop() : e.splice(n, 1)[0]; }
function bo(e, n) { let t = []; for (let r = 0; r < e; r++)
    t.push(n); return t; }
function Co(e, n, t) { let r = e.length - t; for (; n < r;)
    e[n] = e[n + t], n++; for (; t--;)
    e.pop(); }
function Lt(e, n, t, r) { let o = e.length; if (o == n)
    e.push(t, r);
else if (o === 1)
    e.push(r, e[0]), e[0] = t;
else {
    for (o--, e.push(e[o - 1], e[o]); o > n;) {
        let i = o - 2;
        e[o] = e[i], o--;
    }
    e[n] = t, e[n + 1] = r;
} }
function _o(e, n, t) { let r = Nn(e, n); return r >= 0 ? e[r | 1] = t : (r = ~r, Lt(e, r, n, t)), r; }
function xo(e, n) { let t = Nn(e, n); if (t >= 0)
    return e[t | 1]; }
function Nn(e, n) { return Vt(e, n, 1); }
function Vt(e, n, t) { let r = 0, o = e.length >> t; for (; o !== r;) {
    let i = r + (o - r >> 1), s = e[i << t];
    if (n === s)
        return i << t;
    s > n ? o = i : r = i + 1;
} return ~(o << t); }
var Fo = {}, Y = [], te = new h(""), bn = new h("", -1), Cn = new h(""), J = class {
    get(n, t = N) { if (t === N) {
        let o = Tn("", -201);
        throw o.name = "\u0275NotFound", o;
    } return t; }
};
function _n(e) { return { \u0275providers: e }; }
function $t(e) { return _n([{ provide: te, multi: !0, useValue: e }]); }
function qt(...e) { return { \u0275providers: Ht(!0, e), \u0275fromNgModule: !0 }; }
function Ht(e, ...n) { let t = [], r = new Set, o, i = s => { t.push(s); }; return Fe(n, s => { let d = s; ve(d, i, [], r) && (o ||= [], o.push(d)); }), o !== void 0 && xn(o, i), t; }
function xn(e, n) { for (let t = 0; t < e.length; t++) {
    let { ngModule: r, providers: o } = e[t];
    Re(o, i => { n(i, r); });
} }
function ve(e, n, t, r) { if (e = I(e), !e)
    return !1; let o = null, i = rn(e), s = !i && En(e); if (!i && !s) {
    let u = e.ngModule;
    if (i = rn(u), i)
        o = u;
    else
        return !1;
}
else {
    if (s && !s.standalone)
        return !1;
    o = e;
} let d = r.has(o); if (s) {
    if (d)
        return !1;
    if (r.add(o), s.dependencies) {
        let u = typeof s.dependencies == "function" ? s.dependencies() : s.dependencies;
        for (let l of u)
            ve(l, n, t, r);
    }
}
else if (i) {
    if (i.imports != null && !d) {
        r.add(o);
        let l;
        Fe(i.imports, f => { ve(f, n, t, r) && (l ||= [], l.push(f)); }), l !== void 0 && xn(l, n);
    }
    if (!d) {
        let l = W(o) || (() => new o);
        n({ provide: o, useFactory: l, deps: Y }, o), n({ provide: Cn, useValue: o, multi: !0 }, o), n({ provide: te, useValue: () => R(o), multi: !0 }, o);
    }
    let u = i.providers;
    if (u != null && !d) {
        let l = e;
        Re(u, f => { n(f, l); });
    }
}
else
    return !1; return o !== e && e.providers !== void 0; }
function Re(e, n) { for (let t of e)
    In(t) && (t = t.\u0275providers), Array.isArray(t) ? Re(t, n) : n(t); }
var Gt = c({ provide: String, useValue: c });
function Fn(e) { return e !== null && typeof e == "object" && Gt in e; }
function Zt(e) { return !!(e && e.useExisting); }
function Bt(e) { return !!(e && e.useFactory); }
function ye(e) { return typeof e == "function"; }
function Ro(e) { return !!e.useClass; }
var Ut = new h(""), B = {}, cn = {}, le;
function Rn() { return le === void 0 && (le = new J), le; }
var V = class {
}, K = class extends V {
    parent;
    source;
    scopes;
    records = new Map;
    _ngOnDestroyHooks = new Set;
    _onDestroyHooks = [];
    get destroyed() { return this._destroyed; }
    _destroyed = !1;
    injectorDefTypes;
    constructor(n, t, r, o) { super(), this.parent = t, this.source = r, this.scopes = o, Ie(n, s => this.processProvider(s)), this.records.set(bn, x(void 0, this)), o.has("environment") && this.records.set(V, x(void 0, this)); let i = this.records.get(Ut); i != null && typeof i.value == "string" && this.scopes.add(i.value), this.injectorDefTypes = new Set(this.get(Cn, Y, { self: !0 })); }
    retrieve(n, t) { let r = U(t) || 0; try {
        return this.get(n, N, r);
    }
    catch (o) {
        if (A(o))
            return o;
        throw o;
    } }
    destroy() { L(this), this._destroyed = !0; let n = m(null); try {
        for (let r of this._ngOnDestroyHooks)
            r.ngOnDestroy();
        let t = this._onDestroyHooks;
        this._onDestroyHooks = [];
        for (let r of t)
            r();
    }
    finally {
        this.records.clear(), this._ngOnDestroyHooks.clear(), this.injectorDefTypes.clear(), m(n);
    } }
    onDestroy(n) { return L(this), this._onDestroyHooks.push(n), () => this.removeOnDestroy(n); }
    runInContext(n) { L(this); let t = E(this), r = w(void 0), o; try {
        return n();
    }
    finally {
        E(t), w(r);
    } }
    get(n, t = N, r) { if (L(this), n.hasOwnProperty(un))
        return n[un](this); let o = U(r), i, s = E(this), d = w(void 0); try {
        if (!(o & 4)) {
            let l = this.records.get(n);
            if (l === void 0) {
                let f = Xt(n) && ee(n);
                f && this.injectableDefInScope(f) ? l = x(De(n), B) : l = null, this.records.set(n, l);
            }
            if (l != null)
                return this.hydrate(n, l, o);
        }
        let u = o & 2 ? Rn() : this.parent;
        return t = o & 8 && t === N ? null : t, u.get(n, t);
    }
    catch (u) {
        let l = St(u);
        throw l === -200 || l === -201 ? new g(l, null) : u;
    }
    finally {
        w(d), E(s);
    } }
    resolveInjectorInitializers() { let n = m(null), t = E(this), r = w(void 0), o; try {
        let i = this.get(te, Y, { self: !0 });
        for (let s of i)
            s();
    }
    finally {
        E(t), w(r), m(n);
    } }
    toString() { return "R3Injector[...]"; }
    processProvider(n) { n = I(n); let t = ye(n) ? n : I(n && n.provide), r = Yt(n); if (!ye(n) && n.multi === !0) {
        let o = this.records.get(t);
        o || (o = x(void 0, B, !0), o.factory = () => me(o.multi), this.records.set(t, o)), t = n, o.multi.push(n);
    } this.records.set(t, r); }
    hydrate(n, t, r) { let o = m(null); try {
        if (t.value === cn)
            throw Ft("");
        return t.value === B && (t.value = cn, t.value = t.factory(void 0, r)), typeof t.value == "object" && t.value && Qt(t.value) && this._ngOnDestroyHooks.add(t.value), t.value;
    }
    finally {
        m(o);
    } }
    injectableDefInScope(n) { if (!n.providedIn)
        return !1; let t = I(n.providedIn); return typeof t == "string" ? t === "any" || this.scopes.has(t) : this.injectorDefTypes.has(t); }
    removeOnDestroy(n) { let t = this._onDestroyHooks.indexOf(n); t !== -1 && this._onDestroyHooks.splice(t, 1); }
};
function De(e) { let n = ee(e), t = n !== null ? n.factory : W(e); if (t !== null)
    return t; if (e instanceof h)
    throw new g(-204, !1); if (e instanceof Function)
    return Wt(e); throw new g(-204, !1); }
function Wt(e) { if (e.length > 0)
    throw new g(-204, !1); let t = Dt(e); return t !== null ? () => t.factory(e) : () => new e; }
function Yt(e) { if (Fn(e))
    return x(void 0, e.useValue); {
    let n = Jt(e);
    return x(n, B);
} }
function Jt(e, n, t) { let r; if (ye(e)) {
    let o = I(e);
    return W(o) || De(o);
}
else if (Fn(e))
    r = () => I(e.useValue);
else if (Bt(e))
    r = () => e.useFactory(...me(e.deps || []));
else if (Zt(e))
    r = (o, i) => R(I(e.useExisting), i !== void 0 && i & 8 ? 8 : void 0);
else {
    let o = I(e && (e.useClass || e.provide));
    if (Kt(e))
        r = () => new o(...me(e.deps));
    else
        return W(o) || De(o);
} return r; }
function L(e) { if (e.destroyed)
    throw new g(-205, !1); }
function x(e, n, t = !1) { return { factory: e, value: n, multi: t ? [] : void 0 }; }
function Kt(e) { return !!e.deps; }
function Qt(e) { return e !== null && typeof e == "object" && typeof e.ngOnDestroy == "function"; }
function Xt(e) { return typeof e == "function" || typeof e == "object" && e.ngMetadataName === "InjectionToken"; }
function Ie(e, n) { for (let t of e)
    Array.isArray(t) ? Ie(t, n) : t && In(t) ? Ie(t.\u0275providers, n) : n(t); }
function So(e, n) { let t; e instanceof K ? (L(e), t = e) : t = new pe(e); let r, o = E(t), i = w(void 0); try {
    return n();
}
finally {
    E(o), w(i);
} }
function Sn() { return Mn() !== void 0 || ce() != null; }
function ko(e) { if (!Sn())
    throw new g(-203, !1); }
var Se = 0, ke = 1, v = 2, Ee = 3, jo = 4, zt = 5, Po = 6, er = 7, kn = 8, Oo = 9, jn = 10, Ao = 11, Lo = 12, Vo = 13, Pn = 14, $o = 15, qo = 16, nr = 17, Ho = 18, Go = 19, Zo = 20, F = 21, Bo = 22, we = 23, tr = 24, Uo = 25, Wo = 26, rr = 27, je = 1, Yo = 6, Jo = 7, Ko = 8, Qo = 9, Xo = 10;
function On(e) { return Array.isArray(e) && typeof e[je] == "object"; }
function An(e) { return Array.isArray(e) && e[je] === !0; }
function zo(e) { return (e.flags & 4) !== 0; }
function ei(e) { return e.componentOffset > -1; }
function ni(e) { return (e.flags & 1) === 1; }
function ti(e) { return !!e.template; }
function ri(e) { return (e[v] & 512) !== 0; }
function oi(e) { return (e.type & 16) === 16; }
function ii(e) { return (e[v] & 32) === 32; }
function Ln(e) { return (e[v] & 256) === 256; }
function si(e, n) { or(e, n[ke]); }
function or(e, n) { ir(e); let t = n.data; for (let r = rr; r < t.length; r++)
    if (t[r] === e)
        return; q("This TNode does not belong to this TView."); }
function ir(e) { yn(e, "TNode must be defined"), e && typeof e == "object" && e.hasOwnProperty("directiveStylingLast") || q("Not of type TNode, got: " + e); }
function ai(e) { yn(e, "LView must be defined"), vt(On(e), !0, "Expecting LView"); }
var sr = "svg", ar = "math";
function Pe(e) { for (; Array.isArray(e);)
    e = e[Se]; return e; }
function ui(e) { for (; Array.isArray(e);) {
    if (typeof e[je] == "object")
        return e;
    e = e[Se];
} return null; }
function ci(e, n) { return Pe(n[e]); }
function di(e, n) { return Pe(n[e.index]); }
function li(e, n) { let t = e === null ? -1 : e.index; return t !== -1 ? Pe(n[t]) : null; }
function ur(e, n) { return e.data[n]; }
function fi(e, n) { return e[n]; }
function gi(e, n, t, r) { t >= e.data.length && (e.data[t] = null, e.blueprint[t] = null), n[t] = r; }
function hi(e, n) { let t = n[e]; return On(t) ? t : t[Se]; }
function pi(e) { return (e[v] & 4) === 4; }
function Vn(e) { return (e[v] & 128) === 128; }
function mi(e) { return An(e[Ee]); }
function vi(e, n) { return n == null ? null : e[n]; }
function yi(e) { e[nr] = 0; }
function Di(e) { e[v] & 1024 || (e[v] |= 1024, Vn(e) && Oe(e)); }
function cr(e, n) { for (; e > 0;)
    n = n[Pn], e--; return n; }
function dr(e) { return !!(e[v] & 9216 || e[tr]?.dirty); }
function Ii(e) { e[jn].changeDetectionScheduler?.notify(8), e[v] & 64 && (e[v] |= 1024), dr(e) && Oe(e); }
function Oe(e) { e[jn].changeDetectionScheduler?.notify(0); let n = dn(e); for (; n !== null && !(n[v] & 8192 || (n[v] |= 8192, !Vn(n)));)
    n = dn(n); }
function lr(e, n) { if (Ln(e))
    throw new g(911, !1); e[F] === null && (e[F] = []), e[F].push(n); }
function fr(e, n) { if (e[F] === null)
    return; let t = e[F].indexOf(n); t !== -1 && e[F].splice(t, 1); }
function dn(e) { let n = e[Ee]; return An(n) ? n[Ee] : n; }
function gr(e) { return e[er] ??= []; }
function hr(e) { return e.cleanup ??= []; }
function Ei(e, n, t, r) { let o = gr(n); o.push(t), e.firstCreatePass && hr(e).push(r, o.length - 1); }
var a = { lFrame: Hn(null), bindingsEnabled: !0, skipHydrationRootTNode: null };
var Te = !1;
function wi() { return a.lFrame.elementDepthCount; }
function Ti() { a.lFrame.elementDepthCount++; }
function Mi() { a.lFrame.elementDepthCount--; }
function Ni() { return a.bindingsEnabled; }
function bi() { return a.skipHydrationRootTNode !== null; }
function Ci(e) { return a.skipHydrationRootTNode === e; }
function _i() { a.bindingsEnabled = !0; }
function xi(e) { a.skipHydrationRootTNode = e; }
function Fi() { a.bindingsEnabled = !1; }
function Ri() { a.skipHydrationRootTNode = null; }
function $n() { return a.lFrame.lView; }
function Si() { return a.lFrame.tView; }
function ki(e) { return a.lFrame.contextLView = e, e[kn]; }
function ji(e) { return a.lFrame.contextLView = null, e; }
function pr() { let e = mr(); for (; e !== null && e.type === 64;)
    e = e.parent; return e; }
function mr() { return a.lFrame.currentTNode; }
function Pi() { let e = a.lFrame, n = e.currentTNode; return e.isParent ? n : n.parent; }
function Oi(e, n) { let t = a.lFrame; t.currentTNode = e, t.isParent = n; }
function Ai() { return a.lFrame.isParent; }
function Li() { a.lFrame.isParent = !1; }
function Vi() { return a.lFrame.contextLView; }
function $i() { return Te; }
function ln(e) { let n = Te; return Te = e, n; }
function qi() { let e = a.lFrame, n = e.bindingRootIndex; return n === -1 && (n = e.bindingRootIndex = e.tView.bindingStartIndex), n; }
function Hi() { return a.lFrame.bindingIndex; }
function Gi(e) { return a.lFrame.bindingIndex = e; }
function Zi() { return a.lFrame.bindingIndex++; }
function Bi(e) { let n = a.lFrame, t = n.bindingIndex; return n.bindingIndex = n.bindingIndex + e, t; }
function Ui() { return a.lFrame.inI18n; }
function Wi(e) { a.lFrame.inI18n = e; }
function Yi(e, n) { let t = a.lFrame; t.bindingIndex = t.bindingRootIndex = e, vr(n); }
function Ji() { return a.lFrame.currentDirectiveIndex; }
function vr(e) { a.lFrame.currentDirectiveIndex = e; }
function Ki(e) { let n = a.lFrame.currentDirectiveIndex; return n === -1 ? null : e[n]; }
function Qi() { return a.lFrame.currentQueryIndex; }
function Xi(e) { a.lFrame.currentQueryIndex = e; }
function yr(e) { let n = e[ke]; return n.type === 2 ? n.declTNode : n.type === 1 ? e[zt] : null; }
function zi(e, n, t) { if (t & 4) {
    let o = n, i = e;
    for (; o = o.parent, o === null && !(t & 1);)
        if (o = yr(i), o === null || (i = i[Pn], o.type & 10))
            break;
    if (o === null)
        return !1;
    n = o, e = i;
} let r = a.lFrame = qn(); return r.currentTNode = n, r.lView = e, !0; }
function es(e) { let n = qn(), t = e[ke]; a.lFrame = n, n.currentTNode = t.firstChild, n.lView = e, n.tView = t, n.contextLView = e, n.bindingIndex = t.bindingStartIndex, n.inI18n = !1; }
function qn() { let e = a.lFrame, n = e === null ? null : e.child; return n === null ? Hn(e) : n; }
function Hn(e) { let n = { currentTNode: null, isParent: !0, lView: null, tView: null, selectedIndex: -1, contextLView: null, elementDepthCount: 0, currentNamespace: null, currentDirectiveIndex: -1, bindingRootIndex: -1, bindingIndex: -1, currentQueryIndex: 0, parent: e, child: null, inI18n: !1 }; return e !== null && (e.child = n), n; }
function Gn() { let e = a.lFrame; return a.lFrame = e.parent, e.currentTNode = null, e.lView = null, e; }
var ns = Gn;
function ts() { let e = Gn(); e.isParent = !0, e.tView = null, e.selectedIndex = -1, e.contextLView = null, e.elementDepthCount = 0, e.currentDirectiveIndex = -1, e.currentNamespace = null, e.bindingRootIndex = -1, e.bindingIndex = -1, e.currentQueryIndex = 0; }
function rs(e) { return (a.lFrame.contextLView = cr(e, a.lFrame.contextLView))[kn]; }
function os() { return a.lFrame.selectedIndex; }
function is(e) { a.lFrame.selectedIndex = e; }
function ss() { let e = a.lFrame; return ur(e.tView, e.selectedIndex); }
function as() { a.lFrame.currentNamespace = sr; }
function us() { a.lFrame.currentNamespace = ar; }
function cs() { Dr(); }
function Dr() { a.lFrame.currentNamespace = null; }
function ds() { return a.lFrame.currentNamespace; }
var Zn = !0;
function ls() { return Zn; }
function fs(e) { Zn = e; }
function gs() { let e, n; return { promise: new Promise((r, o) => { e = r, n = o; }), resolve: e, reject: n }; }
function fn(e, n = null, t = null, r) { let o = Ir(e, n, t, r); return o.resolveInjectorInitializers(), o; }
function Ir(e, n = null, t = null, r, o = new Set) { let i = [t || Y, qt(e)], s; return new K(i, n || Rn(), s || null, o); }
var Er = new Set;
function hs() { return Er; }
var $ = class e {
    static THROW_IF_NOT_FOUND = N;
    static NULL = new J;
    static create(n, t) { if (Array.isArray(n))
        return fn({ name: "" }, t, n, ""); {
        let r = n.name ?? "";
        return fn({ name: r }, n.parent, n.providers, r);
    } }
    static \u0275prov = k({ token: e, providedIn: "any", factory: () => R(bn) });
    static __NG_ELEMENT_ID__ = -1;
}, Ae = new h(""), b = (() => { class e {
    static __NG_ELEMENT_ID__ = wr;
    static __NG_ENV_ID__ = t => t;
} return e; })(), Q = class extends b {
    _lView;
    constructor(n) { super(), this._lView = n; }
    get destroyed() { return Ln(this._lView); }
    onDestroy(n) { let t = this._lView; return lr(t, n), () => fr(t, n); }
};
function wr() { return new Q($n()); }
var Tr = !1, Mr = new h(""), Bn = (() => { class e {
    taskId = 0;
    pendingTasks = new Set;
    destroyed = !1;
    pendingTask = new ut(!1);
    debugTaskTracker = p(Mr, { optional: !0 });
    get hasPendingTasks() { return this.destroyed ? !1 : this.pendingTask.value; }
    get hasPendingTasksObservable() { return this.destroyed ? new ct(t => { t.next(!1), t.complete(); }) : this.pendingTask; }
    add() { !this.hasPendingTasks && !this.destroyed && this.pendingTask.next(!0); let t = this.taskId++; return this.pendingTasks.add(t), this.debugTaskTracker?.add(t), t; }
    has(t) { return this.pendingTasks.has(t); }
    remove(t) { this.pendingTasks.delete(t), this.debugTaskTracker?.remove(t), this.pendingTasks.size === 0 && this.hasPendingTasks && this.pendingTask.next(!1); }
    ngOnDestroy() { this.pendingTasks.clear(), this.hasPendingTasks && this.pendingTask.next(!1), this.destroyed = !0, this.pendingTask.unsubscribe(); }
    static \u0275prov = k({ token: e, providedIn: "root", factory: () => new e });
} return e; })(), Me = class extends dt {
    __isAsync;
    destroyRef = void 0;
    pendingTasks = void 0;
    constructor(n = !1) { super(), this.__isAsync = n, Sn() && (this.destroyRef = p(b, { optional: !0 }) ?? void 0, this.pendingTasks = p(Bn, { optional: !0 }) ?? void 0); }
    emit(n) { let t = m(null); try {
        super.next(n);
    }
    finally {
        m(t);
    } }
    subscribe(n, t, r) { let o = n, i = t || (() => null), s = r; if (n && typeof n == "object") {
        let u = n;
        o = u.next?.bind(u), i = u.error?.bind(u), s = u.complete?.bind(u);
    } this.__isAsync && (i = this.wrapInTimeout(i), o && (o = this.wrapInTimeout(o)), s && (s = this.wrapInTimeout(s))); let d = super.subscribe({ next: o, error: i, complete: s }); return n instanceof lt && n.add(d), d; }
    wrapInTimeout(n) { return t => { let r = this.pendingTasks?.add(); setTimeout(() => { try {
        n(t);
    }
    finally {
        r !== void 0 && this.pendingTasks?.remove(r);
    } }); }; }
}, T = Me;
function X(...e) { }
function Nr(e) { let n, t; function r() { e = X; try {
    t !== void 0 && typeof cancelAnimationFrame == "function" && cancelAnimationFrame(t), n !== void 0 && clearTimeout(n);
}
catch { } } return n = setTimeout(() => { e(), r(); }), typeof requestAnimationFrame == "function" && (t = requestAnimationFrame(() => { e(), r(); })), () => r(); }
function ps(e) { return queueMicrotask(() => e()), () => { e = X; }; }
var Le = "isAngularZone", gn = Le + "_ID", br = 0, Ne = class e {
    hasPendingMacrotasks = !1;
    hasPendingMicrotasks = !1;
    isStable = !0;
    onUnstable = new T(!1);
    onMicrotaskEmpty = new T(!1);
    onStable = new T(!1);
    onError = new T(!1);
    constructor(n) { let { enableLongStackTrace: t = !1, shouldCoalesceEventChangeDetection: r = !1, shouldCoalesceRunChangeDetection: o = !1, scheduleInRootZone: i = Tr } = n; if (typeof Zone > "u")
        throw new g(908, !1); Zone.assertZonePatched(); let s = this; s._nesting = 0, s._outer = s._inner = Zone.current, Zone.TaskTrackingZoneSpec && (s._inner = s._inner.fork(new Zone.TaskTrackingZoneSpec)), t && Zone.longStackTraceZoneSpec && (s._inner = s._inner.fork(Zone.longStackTraceZoneSpec)), s.shouldCoalesceEventChangeDetection = !o && r, s.shouldCoalesceRunChangeDetection = o, s.callbackScheduled = !1, s.scheduleInRootZone = i, xr(s); }
    static isInAngularZone() { return typeof Zone < "u" && Zone.current.get(Le) === !0; }
    static assertInAngularZone() { if (!e.isInAngularZone())
        throw new g(909, !1); }
    static assertNotInAngularZone() { if (e.isInAngularZone())
        throw new g(909, !1); }
    run(n, t, r) { return this._inner.run(n, t, r); }
    runTask(n, t, r, o) { let i = this._inner, s = i.scheduleEventTask("NgZoneEvent: " + o, n, Cr, X, X); try {
        return i.runTask(s, t, r);
    }
    finally {
        i.cancelTask(s);
    } }
    runGuarded(n, t, r) { return this._inner.runGuarded(n, t, r); }
    runOutsideAngular(n) { return this._outer.run(n); }
}, Cr = {};
function Ve(e) { if (e._nesting == 0 && !e.hasPendingMicrotasks && !e.isStable)
    try {
        e._nesting++, e.onMicrotaskEmpty.emit(null);
    }
    finally {
        if (e._nesting--, !e.hasPendingMicrotasks)
            try {
                e.runOutsideAngular(() => e.onStable.emit(null));
            }
            finally {
                e.isStable = !0;
            }
    } }
function _r(e) { if (e.isCheckStableRunning || e.callbackScheduled)
    return; e.callbackScheduled = !0; function n() { Nr(() => { e.callbackScheduled = !1, be(e), e.isCheckStableRunning = !0, Ve(e), e.isCheckStableRunning = !1; }); } e.scheduleInRootZone ? Zone.root.run(() => { n(); }) : e._outer.run(() => { n(); }), be(e); }
function xr(e) { let n = () => { _r(e); }, t = br++; e._inner = e._inner.fork({ name: "angular", properties: { [Le]: !0, [gn]: t, [gn + t]: !0 }, onInvokeTask: (r, o, i, s, d, u) => { if (Fr(u))
        return r.invokeTask(i, s, d, u); try {
        return hn(e), r.invokeTask(i, s, d, u);
    }
    finally {
        (e.shouldCoalesceEventChangeDetection && s.type === "eventTask" || e.shouldCoalesceRunChangeDetection) && n(), pn(e);
    } }, onInvoke: (r, o, i, s, d, u, l) => { try {
        return hn(e), r.invoke(i, s, d, u, l);
    }
    finally {
        e.shouldCoalesceRunChangeDetection && !e.callbackScheduled && !Rr(u) && n(), pn(e);
    } }, onHasTask: (r, o, i, s) => { r.hasTask(i, s), o === i && (s.change == "microTask" ? (e._hasPendingMicrotasks = s.microTask, be(e), Ve(e)) : s.change == "macroTask" && (e.hasPendingMacrotasks = s.macroTask)); }, onHandleError: (r, o, i, s) => (r.handleError(i, s), e.runOutsideAngular(() => e.onError.emit(s)), !1) }); }
function be(e) { e._hasPendingMicrotasks || (e.shouldCoalesceEventChangeDetection || e.shouldCoalesceRunChangeDetection) && e.callbackScheduled === !0 ? e.hasPendingMicrotasks = !0 : e.hasPendingMicrotasks = !1; }
function hn(e) { e._nesting++, e.isStable && (e.isStable = !1, e.onUnstable.emit(null)); }
function pn(e) { e._nesting--, Ve(e); }
var mn = class {
    hasPendingMicrotasks = !1;
    hasPendingMacrotasks = !1;
    isStable = !0;
    onUnstable = new T;
    onMicrotaskEmpty = new T;
    onStable = new T;
    onError = new T;
    run(n, t, r) { return n.apply(t, r); }
    runGuarded(n, t, r) { return n.apply(t, r); }
    runOutsideAngular(n) { return n(); }
    runTask(n, t, r, o) { return n.apply(t, r); }
};
function Fr(e) { return Un(e, "__ignore_ng_zone__"); }
function Rr(e) { return Un(e, "__scheduler_tick__"); }
function Un(e, n) { return !Array.isArray(e) || e.length !== 1 ? !1 : e[0]?.data?.[n] === !0; }
var S = class {
    _console = console;
    handleError(n) { this._console.error("ERROR", n); }
}, Wn = new h("", { factory: () => { let e = p(Ne), n = p(V), t; return r => { e.runOutsideAngular(() => { n.destroyed && !t ? setTimeout(() => { throw r; }) : (t ??= n.get(S), t.handleError(r)); }); }; } }), ms = { provide: te, useValue: () => { let e = p(S, { optional: !0 }); }, multi: !0 }, Sr = new h("", { factory: () => { if (typeof ngServerMode < "u" && ngServerMode)
        return; let e = p(Ae).defaultView; if (!e)
        return; let n = p(Wn), t = i => { n(i.reason), i.preventDefault(); }, r = i => { i.error ? n(i.error) : n(new Error(i.message, { cause: i })), i.preventDefault(); }, o = () => { e.addEventListener("unhandledrejection", t), e.addEventListener("error", r); }; typeof Zone < "u" ? Zone.root.run(o) : o(), p(b).onDestroy(() => { e.removeEventListener("error", r), e.removeEventListener("unhandledrejection", t); }); } });
function vs() { return _n([$t(() => { p(Sr); })]); }
function ys(e) { return null; }
function C(e, n) { let [t, r, o] = Ke(e, n?.equal), i = t, s = i[D]; return i.set = r, i.update = o, i.asReadonly = re.bind(i), i; }
function re() { let e = this[D]; if (e.readonlyFn === void 0) {
    let n = () => this();
    n[D] = e, e.readonlyFn = n;
} return e.readonlyFn; }
var kr = new h("", { factory: () => jr }), jr = "ng";
var Ds = new h(""), Is = new h("", { providedIn: "platform", factory: () => "unknown" }), Es = new h(""), ws = new h("", { factory: () => p(Ae).body?.querySelector("[ngCspNonce]")?.getAttribute("ngCspNonce") || null }), Pr = { breakpoints: [16, 32, 48, 64, 96, 128, 256, 384, 640, 750, 828, 1080, 1200, 1920, 2048, 3840], placeholderResolution: 30, disableImageSizeWarning: !1, disableImageLazyLoadWarning: !1 }, Ts = new h("", { factory: () => Pr });
function Ms(e) { return e; }
var Yn = (() => { class e {
    static \u0275prov = k({ token: e, providedIn: "root", factory: () => { let t = new e; return (typeof ngServerMode > "u" || !ngServerMode) && (t.store = Or(p(Ae), p(kr))), t; } });
    store = {};
    onSerializeCallbacks = {};
    get(t, r) { return this.store[t] !== void 0 ? this.store[t] : r; }
    set(t, r) { this.store[t] = r; }
    remove(t) { delete this.store[t]; }
    hasKey(t) { return this.store.hasOwnProperty(t); }
    get isEmpty() { return Object.keys(this.store).length === 0; }
    onSerialize(t, r) { this.onSerializeCallbacks[t] = r; }
    toJson() { for (let t in this.onSerializeCallbacks)
        if (this.onSerializeCallbacks.hasOwnProperty(t))
            try {
                this.store[t] = this.onSerializeCallbacks[t]();
            }
            catch (r) {
                console.warn("Exception in onSerialize callback: ", r);
            } return JSON.stringify(this.store).replace(/</g, "\\u003C").replace(/\//g, "\\u002F"); }
} return e; })();
function Or(e, n) { let t = e.getElementById(n + "-state"); if (t?.tagName === "SCRIPT" && t.textContent)
    try {
        return JSON.parse(t.textContent);
    }
    catch (r) {
        console.warn("Exception while restoring TransferState for app " + n, r);
    } return {}; }
function Ns(e, n) { if (Ye() !== null)
    throw new g(-602, !1); }
var Jn = (() => { class e {
    view;
    node;
    constructor(t, r) { this.view = t, this.node = r; }
    static __NG_ELEMENT_ID__ = Ar;
} return e; })();
function Ar() { return new Jn($n(), pr()); }
var z = class {
}, bs = new h("", { factory: () => !0 }), Cs = new h("", { factory: () => !1 }), _s = new h(""), Lr = (() => { class e {
    static \u0275prov = k({ token: e, providedIn: "root", factory: () => new Ce });
} return e; })(), Ce = class {
    dirtyEffectCount = 0;
    queues = new Map;
    add(n) { this.enqueue(n), this.schedule(n); }
    schedule(n) { n.dirty && this.dirtyEffectCount++; }
    remove(n) { let t = n.zone, r = this.queues.get(t); r.has(n) && (r.delete(n), n.dirty && this.dirtyEffectCount--); }
    enqueue(n) { let t = n.zone; this.queues.has(t) || this.queues.set(t, new Set); let r = this.queues.get(t); r.has(n) || r.add(n); }
    flush() { for (; this.dirtyEffectCount > 0;) {
        let n = !1;
        for (let [t, r] of this.queues)
            t === null ? n ||= this.flushQueue(r) : n ||= t.run(() => this.flushQueue(r));
        n || (this.dirtyEffectCount = 0);
    } }
    flushQueue(n) { let t = !1; for (let r of n)
        r.dirty && (this.dirtyEffectCount--, t = !0, r.run()); return t; }
}, _e = class {
    [D];
    constructor(n) { this[D] = n; }
    destroy() { this[D].destroy(); }
};
function Kn(e, n) { let t = n?.injector ?? p($), r = n?.manualCleanup !== !0 ? t.get(b) : null, o, i = t.get(Jn, null, { optional: !0 }), s = t.get(z); return i !== null ? (o = qr(i.view, s, e), r instanceof Q && r._lView === i.view && (r = null)) : o = Hr(e, t.get(Lr), s), o.injector = t, r !== null && (o.onDestroyFns = [r.onDestroy(() => o.destroy())]), new _e(o); }
var Qn = Z(G({}, Qe), { cleanupFns: void 0, zone: null, onDestroyFns: null, run() { let e = ln(!1); try {
        Xe(this);
    }
    finally {
        ln(e);
    } }, cleanup() { if (!this.cleanupFns?.length)
        return; let e = m(null); try {
        for (; this.cleanupFns.length;)
            this.cleanupFns.pop()();
    }
    finally {
        this.cleanupFns = [], m(e);
    } } }), Vr = Z(G({}, Qn), { consumerMarkedDirty() { this.scheduler.schedule(this), this.notifier.notify(12); }, destroy() { if (ue(this), this.onDestroyFns !== null)
        for (let e of this.onDestroyFns)
            e(); this.cleanup(), this.scheduler.remove(this); } }), $r = Z(G({}, Qn), { consumerMarkedDirty() { this.view[v] |= 8192, Oe(this.view), this.notifier.notify(13); }, destroy() { if (ue(this), this.onDestroyFns !== null)
        for (let e of this.onDestroyFns)
            e(); this.cleanup(), this.view[we]?.delete(this); } });
function qr(e, n, t) { let r = Object.create($r); return r.view = e, r.zone = typeof Zone < "u" ? Zone.current : null, r.notifier = n, r.fn = Xn(r, t), e[we] ??= new Set, e[we].add(r), r.consumerMarkedDirty(r), r; }
function Hr(e, n, t) { let r = Object.create(Vr); return r.fn = Xn(r, e), r.scheduler = n, r.notifier = t, r.zone = typeof Zone < "u" ? Zone.current : null, r.scheduler.add(r), r.notifier.notify(12), r; }
function Xn(e, n) { return () => { n(t => (e.cleanupFns ??= []).push(t)); }; }
function $e(e) { return typeof e == "function" && e[D] !== void 0; }
function xs(e) { return $e(e) && typeof e.set == "function"; }
var zn = (() => { class e {
    internalPendingTasks = p(Bn);
    scheduler = p(z);
    errorHandler = p(Wn);
    add() { let t = this.internalPendingTasks.add(); return () => { this.internalPendingTasks.has(t) && (this.scheduler.notify(11), this.internalPendingTasks.remove(t)); }; }
    run(t) { let r = this.add(); try {
        t().catch(this.errorHandler).finally(r);
    }
    catch (o) {
        this.errorHandler(o), r();
    } }
    static \u0275prov = k({ token: e, providedIn: "root", factory: () => new e });
} return e; })();
var et = class {
    destroyed = !1;
    listeners = null;
    errorHandler = p(S, { optional: !0 });
    isEmitting = !1;
    hasNullListeners = !1;
    destroyRef = p(b);
    constructor() { this.destroyRef.onDestroy(() => { this.destroyed = !0, this.listeners = null; }); }
    subscribe(n) { if (this.destroyed)
        throw new g(953, !1); return (this.listeners ??= []).push(n), { unsubscribe: () => { let t = this.listeners ? this.listeners.indexOf(n) : -1; t > -1 && (this.isEmitting ? (this.hasNullListeners = !0, this.listeners[t] = null) : this.listeners.splice(t, 1)); } }; }
    emit(n) { if (this.destroyed) {
        console.warn(xe(953, !1));
        return;
    } if (this.listeners === null)
        return; this.isEmitting = !0; let t = m(null); try {
        for (let r of this.listeners)
            try {
                r !== null && r(n);
            }
            catch (o) {
                this.errorHandler?.handleError(o);
            }
    }
    finally {
        this.hasNullListeners && (this.hasNullListeners = !1, this.listeners && Gr(this.listeners)), m(t), this.isEmitting = !1;
    } }
};
function Gr(e) { let n = e.length - 1; for (; n > -1;)
    e[n] === null && e.splice(n, 1), n--; }
function Os(e) { return e.destroyRef; }
var Zr = new h("");
function _(e, n) { return Je(e, n?.equal); }
function y(e) { return nn(e); }
var qe = class extends Error {
    dependency;
    constructor(n) { super("Dependency error", { cause: n.error() }), this.name = "ResourceDependencyError", this.dependency = n; }
}, j = class e extends Error {
    _brand;
    constructor(n) { super(n); }
    static IDLE = new e("IDLE");
    static LOADING = new e("LOADING");
}, Br = e => e;
function nt(e, n) { if (typeof e == "function") {
    let t = de(e, Br, n?.equal);
    return tt(t, n?.debugName);
}
else {
    let t = de(e.source, e.computation, e.equal);
    return tt(t, e.debugName);
} }
function tt(e, n) { let t = e[D], r = e; return r.set = o => ze(t, o), r.update = o => en(t, o), r.asReadonly = re.bind(e), r; }
function As(e) { let n = e.request, t = e.params ?? n ?? (() => null); return new Ge(t, Wr(e), e.defaultValue, e.equal ? Ur(e.equal) : void 0, e.debugName, e.injector ?? p($), e.id); }
var He = class {
    value;
    isLoading;
    constructor(n, t) { this.value = n, this.value.set = this.set.bind(this), this.value.update = this.update.bind(this), this.value.asReadonly = re, this.isLoading = _(() => this.status() === "loading" || this.status() === "reloading", void 0); }
    isError = _(() => this.status() === "error");
    update(n) { this.set(n(y(this.value))); }
    isValueDefined = _(() => this.isError() ? !1 : this.value() !== void 0);
    _snapshot;
    get snapshot() { return this._snapshot ??= _(() => { let n = this.status(); return n === "error" ? { status: "error", error: this.error() } : { status: n, value: this.value() }; }); }
    hasValue() { return this.isValueDefined(); }
    asReadonly() { return this; }
}, Ge = class extends He {
    loaderFn;
    equal;
    debugName;
    transferCacheKey;
    pendingTasks;
    state;
    extRequest;
    effectRef;
    pendingController;
    resolvePendingTask = void 0;
    destroyed = !1;
    unregisterOnDestroy;
    status;
    error;
    transferState;
    constructor(n, t, r, o, i, s, d, u) { if (Xr())
        throw zr(); super(_(() => { let f = this.state().stream?.(); if (!f || this.state().status === "loading" && this.error())
        return r; if (!oe(f))
        throw new Be(this.error()); return f.value; }, { equal: o }), i), this.loaderFn = t, this.equal = o, this.debugName = i, this.transferCacheKey = d; let l = s.get(Zr, void 0, { optional: !0 }) ?? { isActive: !1 }; this.transferState = s.get(Yn, void 0, { optional: !0 }) ?? void 0, this.extRequest = nt(() => { try {
        return it(!0), { request: n(Qr), reload: 0 };
    }
    catch (f) {
        return st(f), f === j.IDLE ? { status: "idle", reload: 0 } : f === j.LOADING ? { status: "loading", reload: 0 } : { error: f, reload: 0 };
    }
    finally {
        it(!1);
    } }, void 0), this.state = nt({ source: this.extRequest, computation: (f, P) => { let { request: H, status: O, error: We } = f, M; if (We)
            O = "resolved", M = C({ error: Ze(We) }, void 0);
        else if (!O)
            if (P)
                O = H === void 0 ? "idle" : "loading", P.value.extRequest.request === H && (M = P.value.stream);
            else {
                let ie = this.transferState, se = this.transferCacheKey;
                l.isActive && se && ie && H !== void 0 && ie.hasKey(se) && (M = C({ value: ie.get(se, r) }, void 0)), M || (M = u?.(f.request)), u = void 0, O = H === void 0 ? "idle" : M ? "resolved" : "loading";
            } return { extRequest: f, status: O, previousStatus: P ? ot(P.value) : "idle", stream: M }; } }), this.effectRef = Kn(this.loadEffect.bind(this), { injector: s, manualCleanup: !0 }), this.pendingTasks = s.get(zn), this.unregisterOnDestroy = s.get(b).onDestroy(() => this.destroy()), this.status = _(() => ot(this.state()), void 0), this.error = _(() => { let f = this.state().stream?.(); return f && !oe(f) ? f.error : void 0; }, void 0); }
    set(n) { if (this.destroyed)
        return; let t = y(this.error), r = y(this.state); if (!t) {
        let o = y(this.value);
        if (r.status === "local" && (this.equal ? this.equal(o, n) : o === n))
            return;
    } this.state.set({ extRequest: r.extRequest, status: "local", previousStatus: "local", stream: C({ value: n }, void 0) }), this.abortInProgressLoad(); }
    reload() { let { status: n } = y(this.state); return n === "idle" || n === "loading" ? !1 : (this.extRequest.update(({ request: t, reload: r }) => ({ request: t, reload: r + 1 })), !0); }
    destroy() { this.destroyed = !0, this.unregisterOnDestroy(), this.effectRef.destroy(), this.abortInProgressLoad(), this.state.set({ extRequest: { request: void 0, reload: 0 }, status: "idle", previousStatus: "idle", stream: void 0 }); }
    loadEffect() { return ae(this, null, function* () { let n = this.extRequest(), { status: t, previousStatus: r } = y(this.state); if (n.request === void 0)
        return; if (t !== "loading")
        return; this.abortInProgressLoad(); let o = this.resolvePendingTask = this.pendingTasks.add(), { signal: i } = this.pendingController = new AbortController; try {
        let s = y(() => this.loaderFn({ params: n.request, abortSignal: i, previous: { status: r } })), d = () => i.aborted || y(this.extRequest) !== n;
        if ($e(s)) {
            if (d())
                return;
            this.state.set({ extRequest: n, status: "resolved", previousStatus: "resolved", stream: s });
            let u = y(s);
            typeof ngServerMode < "u" && ngServerMode && rt(u, this.transferCacheKey, this.transferState);
        }
        else {
            let u = yield s;
            if (d())
                return;
            this.state.set({ extRequest: n, status: "resolved", previousStatus: "resolved", stream: u });
            let l = u ? y(u) : void 0;
            typeof ngServerMode < "u" && ngServerMode && rt(l, this.transferCacheKey, this.transferState);
        }
    }
    catch (s) {
        if (st(s), i.aborted || y(this.extRequest) !== n)
            return;
        this.state.set({ extRequest: n, status: "resolved", previousStatus: "error", stream: C({ error: Ze(s) }, void 0) });
    }
    finally {
        o?.(), o = void 0;
    } }); }
    abortInProgressLoad() { y(() => this.pendingController?.abort()), this.pendingController = void 0, this.resolvePendingTask?.(), this.resolvePendingTask = void 0; }
};
function rt(e, n, t) { n && t && e && oe(e) && t.set(n, e.value); }
function Ur(e) { return (n, t) => n === void 0 || t === void 0 ? n === t : e(n, t); }
function Wr(e) { return Yr(e) ? e.stream : n => ae(null, null, function* () { try {
    return C({ value: yield e.loader(n) }, void 0);
}
catch (t) {
    return C({ error: Ze(t) }, void 0);
} }); }
function Yr(e) { return !!e.stream; }
function ot(e) { switch (e.status) {
    case "loading": return e.extRequest.reload === 0 ? "loading" : "reloading";
    case "resolved": return oe(e.stream()) ? "resolved" : "error";
    default: return e.status;
} }
function oe(e) { return e.error === void 0; }
function Ze(e) { return Jr(e) ? e : new Ue(e); }
function Jr(e) { return e instanceof Error || typeof e == "object" && typeof e.name == "string" && typeof e.message == "string"; }
var Be = class extends Error {
    constructor(n) { super(n.message, { cause: n }); }
}, Ue = class extends Error {
    constructor(n) { super(String(n), { cause: n }); }
};
function Kr(e) { switch (e.status()) {
    case "idle": throw j.IDLE;
    case "error": throw new qe(e);
    case "loading":
    case "reloading": throw j.LOADING;
} return e.value(); }
var Qr = { chain: Kr }, at = !1;
function Xr() { return at; }
function it(e) { at = e; }
function zr() { return new g(992, !1); }
function st(e) { if (e instanceof g && e.code === 992)
    throw e; }
export { fe as a, tn as b, ft as c, ao as d, g as e, xe as f, c as g, uo as h, ht as i, co as j, lo as k, vn as l, I as m, mt as n, vt as o, q as p, k as q, fo as r, ee as s, go as t, rn as u, Dn as v, on as w, h as x, ho as y, In as z, It as A, Et as B, wt as C, Tt as D, an as E, po as F, Mt as G, mo as H, En as I, Nt as J, bt as K, vo as L, Ct as M, yo as N, Ft as O, Rt as P, w as Q, kt as R, Do as S, R as T, Io as U, p as V, U as W, Eo as X, W as Y, wo as Z, To as _, Fe as $, Mo as aa, No as ba, bo as ca, Co as da, Lt as ea, _o as fa, xo as ga, Nn as ha, Fo as ia, Y as ja, te as ka, bn as la, Cn as ma, J as na, _n as oa, $t as pa, qt as qa, Ht as ra, ve as sa, ye as ta, Ro as ua, Ut as va, Rn as wa, V as xa, K as ya, Jt as za, So as Aa, Sn as Ba, ko as Ca, Se as Da, ke as Ea, v as Fa, Ee as Ga, jo as Ha, zt as Ia, Po as Ja, er as Ka, kn as La, Oo as Ma, jn as Na, Ao as Oa, Lo as Pa, Vo as Qa, Pn as Ra, $o as Sa, qo as Ta, nr as Ua, Ho as Va, Go as Wa, Zo as Xa, F as Ya, Bo as Za, we as _a, tr as $a, Uo as ab, Wo as bb, rr as cb, Yo as db, Jo as eb, Ko as fb, Qo as gb, Xo as hb, On as ib, An as jb, zo as kb, ei as lb, ni as mb, ti as nb, ri as ob, oi as pb, ii as qb, Ln as rb, si as sb, ir as tb, ai as ub, sr as vb, ar as wb, Pe as xb, ui as yb, ci as zb, di as Ab, li as Bb, ur as Cb, fi as Db, gi as Eb, hi as Fb, pi as Gb, Vn as Hb, mi as Ib, vi as Jb, yi as Kb, Di as Lb, cr as Mb, dr as Nb, Ii as Ob, Oe as Pb, lr as Qb, fr as Rb, dn as Sb, gr as Tb, hr as Ub, Ei as Vb, wi as Wb, Ti as Xb, Mi as Yb, Ni as Zb, bi as _b, Ci as $b, _i as ac, xi as bc, Fi as cc, Ri as dc, $n as ec, Si as fc, ki as gc, ji as hc, pr as ic, mr as jc, Pi as kc, Oi as lc, Ai as mc, Li as nc, Vi as oc, $i as pc, ln as qc, qi as rc, Hi as sc, Gi as tc, Zi as uc, Bi as vc, Ui as wc, Wi as xc, Yi as yc, Ji as zc, vr as Ac, Ki as Bc, Qi as Cc, Xi as Dc, zi as Ec, es as Fc, ns as Gc, ts as Hc, rs as Ic, os as Jc, is as Kc, ss as Lc, as as Mc, us as Nc, cs as Oc, ds as Pc, ls as Qc, fs as Rc, gs as Sc, fn as Tc, Ir as Uc, hs as Vc, $ as Wc, Ae as Xc, b as Yc, Tr as Zc, Mr as _c, Bn as $c, T as ad, Nr as bd, ps as cd, gn as dd, Ne as ed, mn as fd, S as gd, Wn as hd, ms as id, vs as jd, ys as kd, C as ld, re as md, kr as nd, Ds as od, Is as pd, Es as qd, ws as rd, Pr as sd, Ts as td, Ms as ud, Yn as vd, Or as wd, Ns as xd, Jn as yd, z as zd, bs as Ad, Cs as Bd, _s as Cd, Lr as Dd, _e as Ed, Kn as Fd, $e as Gd, xs as Hd, zn as Id, et as Jd, Os as Kd, Zr as Ld, _ as Md, y as Nd, qe as Od, j as Pd, nt as Qd, As as Rd, Ge as Sd, Ze as Td, Be as Ud, Kr as Vd, Xr as Wd, it as Xd, zr as Yd, st as Zd };
/*! Bundled license information:

@angular/core/fesm2022/_pending_tasks-chunk.mjs:
@angular/core/fesm2022/_resource-chunk.mjs:
  (**
   * @license Angular v22.0.8
   * (c) 2010-2026 Google LLC. https://angular.dev/
   * License: MIT
   *)
*/
