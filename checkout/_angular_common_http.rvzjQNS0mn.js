import { a as G, c as Me, d as ae, h as Ne, k as De, l as Oe } from "@nf-internal/chunk-MO7I3UEP";
import * as h from "@angular/core";
import { \u0275RuntimeError as D, InjectionToken as C, inject as v, NgZone as Dt, DestroyRef as Ot, \u0275formatRuntimeError as Ar, runInInjectionContext as pe, PendingTasks as je, untracked as _e, CSP_NONCE as _t, DOCUMENT as Be, \u0275TracingService as At, EnvironmentInjector as It, makeEnvironmentProviders as kt } from "@angular/core";
import { finalize as Xe, concatMap as St, filter as Ft, map as K, switchMap as Ut } from "rxjs/operators";
import { Observable as ye, of as ze, from as Ct } from "rxjs";
var _ = class e {
    headers;
    normalizedNames = new Map;
    lazyInit;
    lazyUpdate = null;
    constructor(r) {
        r ? typeof r == "string" ? this.lazyInit = () => {
            this.headers = new Map, r.split(`
`).forEach(t => { let n = t.indexOf(":"); if (n > 0) {
                let o = t.slice(0, n), s = t.slice(n + 1).trim();
                this.addHeaderEntry(o, s);
            } });
        } : typeof Headers < "u" && r instanceof Headers ? (this.headers = new Map, r.forEach((t, n) => { this.addHeaderEntry(n, t); })) : this.lazyInit = () => { this.headers = new Map, Object.entries(r).forEach(([t, n]) => { this.setHeaderEntries(t, n); }); } : this.headers = new Map;
    }
    has(r) { return this.init(), this.headers.has(r.toLowerCase()); }
    get(r) { this.init(); let t = this.headers.get(r.toLowerCase()); return t && t.length > 0 ? t[0] : null; }
    keys() { return this.init(), Array.from(this.normalizedNames.values()); }
    getAll(r) { return this.init(), this.headers.get(r.toLowerCase()) || null; }
    append(r, t) { return this.clone({ name: r, value: t, op: "a" }); }
    set(r, t) { return this.clone({ name: r, value: t, op: "s" }); }
    delete(r, t) { return this.clone({ name: r, value: t, op: "d" }); }
    maybeSetNormalizedName(r, t) { this.normalizedNames.has(t) || this.normalizedNames.set(t, r); }
    init() { this.lazyInit && (this.lazyInit instanceof e ? this.copyFrom(this.lazyInit) : this.lazyInit(), this.lazyInit = null, this.lazyUpdate && (this.lazyUpdate.forEach(r => this.applyUpdate(r)), this.lazyUpdate = null)); }
    copyFrom(r) { r.init(), Array.from(r.headers.keys()).forEach(t => { this.headers.set(t, r.headers.get(t)), this.normalizedNames.set(t, r.normalizedNames.get(t)); }); }
    clone(r) { let t = new e; return t.lazyInit = this.lazyInit && this.lazyInit instanceof e ? this.lazyInit : this, t.lazyUpdate = (this.lazyUpdate || []).concat([r]), t; }
    applyUpdate(r) { let t = r.name.toLowerCase(); switch (r.op) {
        case "a":
        case "s":
            let n = r.value;
            if (typeof n == "string" && (n = [n]), n.length === 0)
                return;
            this.maybeSetNormalizedName(r.name, t);
            let o = (r.op === "a" ? this.headers.get(t) : void 0) || [];
            o.push(...n), this.headers.set(t, o);
            break;
        case "d":
            let s = r.value;
            if (!s)
                this.headers.delete(t), this.normalizedNames.delete(t);
            else {
                let i = this.headers.get(t);
                if (!i)
                    return;
                i = i.filter(c => s.indexOf(c) === -1), i.length === 0 ? (this.headers.delete(t), this.normalizedNames.delete(t)) : this.headers.set(t, i);
            }
            break;
    } }
    addHeaderEntry(r, t) { let n = r.toLowerCase(); this.maybeSetNormalizedName(r, n), this.headers.has(n) ? this.headers.get(n).push(t) : this.headers.set(n, [t]); }
    setHeaderEntries(r, t) { let n = (Array.isArray(t) ? t : [t]).map(s => s.toString()), o = r.toLowerCase(); this.headers.set(o, n), this.maybeSetNormalizedName(r, o); }
    forEach(r) { this.init(), Array.from(this.normalizedNames.keys()).forEach(t => r(this.normalizedNames.get(t), this.headers.get(t))); }
};
var de = class {
    defaultValue;
    constructor(r) { this.defaultValue = r; }
}, q = class {
    map = new Map;
    set(r, t) { return this.map.set(r, t), this; }
    get(r) { return this.map.has(r) || this.map.set(r, r.defaultValue()), this.map.get(r); }
    delete(r) { return this.map.delete(r), this; }
    has(r) { return this.map.has(r); }
    keys() { return this.map.keys(); }
}, H = class {
    encodeKey(r) { return Ae(r); }
    encodeValue(r) { return Ae(r); }
    decodeKey(r) { return decodeURIComponent(r); }
    decodeValue(r) { return decodeURIComponent(r); }
};
function Lt(e, r) { let t = new Map; return e.length > 0 && e.replace(/^\?/, "").split("&").forEach(o => { let s = o.indexOf("="), [i, c] = s == -1 ? [r.decodeKey(o), ""] : [r.decodeKey(o.slice(0, s)), r.decodeValue(o.slice(s + 1))], a = t.get(i) || []; a.push(c), t.set(i, a); }), t; }
var jt = /%(\d[a-f0-9])/gi, Bt = { 40: "@", "3A": ":", 24: "$", "2C": ",", "3B": ";", "3D": "=", "3F": "?", "2F": "/" };
function Ae(e) { return encodeURIComponent(e).replace(jt, (r, t) => Bt[t] ?? r); }
function Q(e) { return `${e}`; }
var S = class e {
    map;
    encoder;
    updates = null;
    cloneFrom = null;
    constructor(r = {}) { if (this.encoder = r.encoder || new H, r.fromString) {
        if (r.fromObject)
            throw new D(2805, !1);
        this.map = Lt(r.fromString, this.encoder);
    }
    else
        r.fromObject ? (this.map = new Map, Object.keys(r.fromObject).forEach(t => { let n = r.fromObject[t], o = Array.isArray(n) ? n.map(Q) : [Q(n)]; this.map.set(t, o); })) : this.map = null; }
    has(r) { return this.init(), this.map.has(r); }
    get(r) { this.init(); let t = this.map.get(r); return t ? t[0] : null; }
    getAll(r) { return this.init(), this.map.get(r) || null; }
    keys() { return this.init(), Array.from(this.map.keys()); }
    append(r, t) { return this.clone({ param: r, value: t, op: "a" }); }
    appendAll(r) { let t = []; return Object.keys(r).forEach(n => { let o = r[n]; Array.isArray(o) ? o.forEach(s => { t.push({ param: n, value: s, op: "a" }); }) : t.push({ param: n, value: o, op: "a" }); }), this.clone(t); }
    set(r, t) { return this.clone({ param: r, value: t, op: "s" }); }
    delete(r, t) { return this.clone({ param: r, value: t, op: "d" }); }
    toString() { return this.init(), this.keys().map(r => { let t = this.encoder.encodeKey(r); return this.map.get(r).map(n => t + "=" + this.encoder.encodeValue(n)).join("&"); }).filter(r => r !== "").join("&"); }
    clone(r) { let t = new e({ encoder: this.encoder }); return t.cloneFrom = this.cloneFrom || this, t.updates = (this.updates || []).concat(r), t; }
    init() { this.map === null && (this.map = new Map), this.cloneFrom !== null && (this.cloneFrom.init(), this.cloneFrom.keys().forEach(r => this.map.set(r, this.cloneFrom.map.get(r))), this.updates.forEach(r => { switch (r.op) {
        case "a":
        case "s":
            let t = (r.op === "a" ? this.map.get(r.param) : void 0) || [];
            t.push(Q(r.value)), this.map.set(r.param, t);
            break;
        case "d": if (r.value !== void 0) {
            let n = this.map.get(r.param) || [], o = n.indexOf(Q(r.value));
            o !== -1 && n.splice(o, 1), n.length > 0 ? this.map.set(r.param, n) : this.map.delete(r.param);
        }
        else {
            this.map.delete(r.param);
            break;
        }
    } }), this.cloneFrom = this.updates = null); }
};
function Xt(e) { switch (e) {
    case "DELETE":
    case "GET":
    case "HEAD":
    case "OPTIONS":
    case "JSONP": return !1;
    default: return !0;
} }
function Ie(e) { return typeof ArrayBuffer < "u" && e instanceof ArrayBuffer; }
function ke(e) { return typeof Blob < "u" && e instanceof Blob; }
function Se(e) { return typeof FormData < "u" && e instanceof FormData; }
function zt(e) { return typeof URLSearchParams < "u" && e instanceof URLSearchParams; }
var W = "Content-Type", ee = "Accept", Je = "text/plain", Ve = "application/json", $e = `${Ve}, ${Je}, */*`, B = class e {
    url;
    body = null;
    headers;
    context;
    reportProgress = !1;
    reportUploadProgress = !1;
    reportDownloadProgress = !1;
    withCredentials = !1;
    credentials;
    keepalive = !1;
    cache;
    priority;
    mode;
    redirect;
    referrer;
    integrity;
    referrerPolicy;
    responseType = "json";
    method;
    params;
    urlWithParams;
    transferCache;
    timeout;
    constructor(r, t, n, o) { this.url = t, this.method = r.toUpperCase(); let s; if (Xt(this.method) || o ? (this.body = n !== void 0 ? n : null, s = o) : s = n, s) {
        if (this.reportProgress = !!s.reportProgress, this.reportUploadProgress = !!s.reportUploadProgress, this.reportDownloadProgress = !!s.reportDownloadProgress, this.withCredentials = !!s.withCredentials, this.keepalive = !!s.keepalive, s.responseType && (this.responseType = s.responseType), s.headers && (this.headers = s.headers), s.context && (this.context = s.context), s.params && (this.params = s.params), s.priority && (this.priority = s.priority), s.cache && (this.cache = s.cache), s.credentials && (this.credentials = s.credentials), typeof s.timeout == "number") {
            if (s.timeout < 1 || !Number.isInteger(s.timeout))
                throw new D(2822, "");
            this.timeout = s.timeout;
        }
        s.mode && (this.mode = s.mode), s.redirect && (this.redirect = s.redirect), s.integrity && (this.integrity = s.integrity), s.referrer !== void 0 && (this.referrer = s.referrer), s.referrerPolicy && (this.referrerPolicy = s.referrerPolicy), this.transferCache = s.transferCache;
    } if (this.headers ??= new _, this.context ??= new q, !this.params)
        this.params = new S, this.urlWithParams = t;
    else {
        let i = this.params.toString();
        if (i.length === 0)
            this.urlWithParams = t;
        else {
            let c = t, a = "", l = t.indexOf("#");
            l !== -1 && (a = t.substring(l), c = t.substring(0, l));
            let u = c.indexOf("?"), f = u === -1 ? "?" : u < c.length - 1 ? "&" : "";
            this.urlWithParams = c + f + i + a;
        }
    } }
    serializeBody() { return this.body === null ? null : typeof this.body == "string" || Ie(this.body) || ke(this.body) || Se(this.body) || zt(this.body) ? this.body : this.body instanceof S ? this.body.toString() : typeof this.body == "object" || typeof this.body == "boolean" || Array.isArray(this.body) ? JSON.stringify(this.body) : this.body.toString(); }
    detectContentTypeHeader() { return this.body === null || Se(this.body) ? null : ke(this.body) ? this.body.type || null : Ie(this.body) ? null : typeof this.body == "string" ? Je : this.body instanceof S ? "application/x-www-form-urlencoded;charset=UTF-8" : typeof this.body == "object" || typeof this.body == "number" || typeof this.body == "boolean" ? Ve : null; }
    clone(r = {}) { let t = r.method || this.method, n = r.url || this.url, o = r.responseType || this.responseType, s = r.keepalive ?? this.keepalive, i = r.priority || this.priority, c = r.cache || this.cache, a = r.mode || this.mode, l = r.redirect || this.redirect, u = r.credentials || this.credentials, f = r.referrer ?? this.referrer, T = r.integrity || this.integrity, E = r.referrerPolicy || this.referrerPolicy, R = r.transferCache ?? this.transferCache, P = r.timeout ?? this.timeout, g = r.body !== void 0 ? r.body : this.body, m = r.withCredentials ?? this.withCredentials, d = r.reportProgress ?? this.reportProgress, p = r.reportUploadProgress ?? this.reportUploadProgress, b = r.reportDownloadProgress ?? this.reportDownloadProgress, A = r.headers || this.headers, y = r.params || this.params, x = r.context ?? this.context; return r.setHeaders !== void 0 && (A = Object.keys(r.setHeaders).reduce((M, N) => M.set(N, r.setHeaders[N]), A)), r.setParams && (y = Object.keys(r.setParams).reduce((M, N) => M.set(N, r.setParams[N]), y)), new e(t, n, g, { params: y, headers: A, context: x, reportProgress: d, reportUploadProgress: p, reportDownloadProgress: b, responseType: o, withCredentials: m, transferCache: R, keepalive: s, cache: c, priority: i, timeout: P, mode: a, redirect: l, credentials: u, referrer: f, integrity: T, referrerPolicy: E }); }
}, I = (function (e) { return e[e.Sent = 0] = "Sent", e[e.UploadProgress = 1] = "UploadProgress", e[e.ResponseHeader = 2] = "ResponseHeader", e[e.DownloadProgress = 3] = "DownloadProgress", e[e.Response = 4] = "Response", e[e.User = 5] = "User", e; })(I || {}), z = class {
    headers;
    status;
    statusText;
    url;
    ok;
    type;
    redirected;
    responseType;
    constructor(r, t = 200, n = "OK") { this.headers = r.headers || new _, this.status = r.status !== void 0 ? r.status : t, this.statusText = r.statusText || n, this.url = r.url || null, this.redirected = r.redirected, this.responseType = r.responseType, this.ok = this.status >= 200 && this.status < 300; }
}, Y = class e extends z {
    constructor(r = {}) { super(r); }
    type = I.ResponseHeader;
    clone(r = {}) { return new e({ headers: r.headers || this.headers, status: r.status !== void 0 ? r.status : this.status, statusText: r.statusText || this.statusText, url: r.url || this.url || void 0 }); }
}, U = class e extends z {
    body;
    constructor(r = {}) { super(r), this.body = r.body !== void 0 ? r.body : null; }
    type = I.Response;
    clone(r = {}) { return new e({ body: r.body !== void 0 ? r.body : this.body, headers: r.headers || this.headers, status: r.status !== void 0 ? r.status : this.status, statusText: r.statusText || this.statusText, url: r.url || this.url || void 0, redirected: r.redirected ?? this.redirected, responseType: r.responseType ?? this.responseType }); }
}, O = class extends z {
    name = "HttpErrorResponse";
    message;
    error;
    ok = !1;
    constructor(r) { super(r, 0, "Unknown Error"), this.status >= 200 && this.status < 300 ? this.message = `Http failure during parsing for ${r.url || "(unknown url)"}` : this.message = `Http failure response for ${r.url || "(unknown url)"}: ${r.status} ${r.statusText}`, this.error = r.error || null; }
}, ge = 200, Jt = 204, Ge = (function (e) { return e[e.Continue = 100] = "Continue", e[e.SwitchingProtocols = 101] = "SwitchingProtocols", e[e.Processing = 102] = "Processing", e[e.EarlyHints = 103] = "EarlyHints", e[e.Ok = 200] = "Ok", e[e.Created = 201] = "Created", e[e.Accepted = 202] = "Accepted", e[e.NonAuthoritativeInformation = 203] = "NonAuthoritativeInformation", e[e.NoContent = 204] = "NoContent", e[e.ResetContent = 205] = "ResetContent", e[e.PartialContent = 206] = "PartialContent", e[e.MultiStatus = 207] = "MultiStatus", e[e.AlreadyReported = 208] = "AlreadyReported", e[e.ImUsed = 226] = "ImUsed", e[e.MultipleChoices = 300] = "MultipleChoices", e[e.MovedPermanently = 301] = "MovedPermanently", e[e.Found = 302] = "Found", e[e.SeeOther = 303] = "SeeOther", e[e.NotModified = 304] = "NotModified", e[e.UseProxy = 305] = "UseProxy", e[e.Unused = 306] = "Unused", e[e.TemporaryRedirect = 307] = "TemporaryRedirect", e[e.PermanentRedirect = 308] = "PermanentRedirect", e[e.BadRequest = 400] = "BadRequest", e[e.Unauthorized = 401] = "Unauthorized", e[e.PaymentRequired = 402] = "PaymentRequired", e[e.Forbidden = 403] = "Forbidden", e[e.NotFound = 404] = "NotFound", e[e.MethodNotAllowed = 405] = "MethodNotAllowed", e[e.NotAcceptable = 406] = "NotAcceptable", e[e.ProxyAuthenticationRequired = 407] = "ProxyAuthenticationRequired", e[e.RequestTimeout = 408] = "RequestTimeout", e[e.Conflict = 409] = "Conflict", e[e.Gone = 410] = "Gone", e[e.LengthRequired = 411] = "LengthRequired", e[e.PreconditionFailed = 412] = "PreconditionFailed", e[e.PayloadTooLarge = 413] = "PayloadTooLarge", e[e.UriTooLong = 414] = "UriTooLong", e[e.UnsupportedMediaType = 415] = "UnsupportedMediaType", e[e.RangeNotSatisfiable = 416] = "RangeNotSatisfiable", e[e.ExpectationFailed = 417] = "ExpectationFailed", e[e.ImATeapot = 418] = "ImATeapot", e[e.MisdirectedRequest = 421] = "MisdirectedRequest", e[e.UnprocessableEntity = 422] = "UnprocessableEntity", e[e.Locked = 423] = "Locked", e[e.FailedDependency = 424] = "FailedDependency", e[e.TooEarly = 425] = "TooEarly", e[e.UpgradeRequired = 426] = "UpgradeRequired", e[e.PreconditionRequired = 428] = "PreconditionRequired", e[e.TooManyRequests = 429] = "TooManyRequests", e[e.RequestHeaderFieldsTooLarge = 431] = "RequestHeaderFieldsTooLarge", e[e.UnavailableForLegalReasons = 451] = "UnavailableForLegalReasons", e[e.InternalServerError = 500] = "InternalServerError", e[e.NotImplemented = 501] = "NotImplemented", e[e.BadGateway = 502] = "BadGateway", e[e.ServiceUnavailable = 503] = "ServiceUnavailable", e[e.GatewayTimeout = 504] = "GatewayTimeout", e[e.HttpVersionNotSupported = 505] = "HttpVersionNotSupported", e[e.VariantAlsoNegotiates = 506] = "VariantAlsoNegotiates", e[e.InsufficientStorage = 507] = "InsufficientStorage", e[e.LoopDetected = 508] = "LoopDetected", e[e.NotExtended = 510] = "NotExtended", e[e.NetworkAuthenticationRequired = 511] = "NetworkAuthenticationRequired", e; })(Ge || {}), Vt = /^\)\]\}',?\n/, $t = 1024 * 1024, We = new C("", { factory: () => typeof ngServerMode < "u" && ngServerMode ? $t : null }), J = (() => { class e {
    fetchImpl = v(le, { optional: !0 })?.fetch ?? ((...t) => globalThis.fetch(...t));
    ngZone = v(Dt);
    destroyRef = v(Ot);
    maxResponseSize = v(We);
    handle(t) { return new ye(n => { let o = new AbortController; this.doRequest(t, o.signal, n).then(ue, i => n.error(new O({ error: i }))); let s; return t.timeout && (s = this.ngZone.runOutsideAngular(() => setTimeout(() => { o.signal.aborted || o.abort(new DOMException("signal timed out", "TimeoutError")); }, t.timeout))), () => { s !== void 0 && clearTimeout(s), o.abort(); }; }); }
    doRequest(t, n, o) { return ae(this, null, function* () { let s = this.createRequestInit(t), i; try {
        let g = this.ngZone.runOutsideAngular(() => this.fetchImpl(t.urlWithParams, G({ signal: n }, s)));
        Gt(g), o.next({ type: I.Sent }), i = yield g;
    }
    catch (g) {
        o.error(new O({ error: g, status: g.status ?? 0, statusText: g.statusText, url: t.urlWithParams, headers: g.headers }));
        return;
    } let c = new _(i.headers), a = i.statusText, l = i.url || t.urlWithParams, u = i.status, f = null, T = t.reportProgress || t.reportDownloadProgress; if (T && o.next(new Y({ headers: c, status: u, statusText: a, url: l })), i.body) {
        let g = i.headers.get("content-length"), m = g !== null ? Number(g) : NaN;
        this.maxResponseSize !== null && Number.isFinite(m) && m > this.maxResponseSize && Fe(this.maxResponseSize);
        let d = [], p = i.body.getReader(), b = 0, A, y, x = typeof Zone < "u" && Zone.current, M = !1;
        if (yield this.ngZone.runOutsideAngular(() => ae(this, null, function* () { for (;;) {
            if (this.destroyRef.destroyed) {
                yield p.cancel(), M = !0;
                break;
            }
            let { done: w, value: k } = yield p.read();
            if (w)
                break;
            if (d.push(k), b += k.length, this.maxResponseSize !== null && b > this.maxResponseSize && (yield p.cancel(), Fe(this.maxResponseSize)), T) {
                y = t.responseType === "text" ? (y ?? "") + (A ??= new TextDecoder).decode(k, { stream: !0 }) : void 0;
                let X = () => o.next({ type: I.DownloadProgress, total: Number.isFinite(m) ? m : void 0, loaded: b, partialText: y });
                x ? x.run(X) : X();
            }
        } })), M) {
            o.complete();
            return;
        }
        let N = this.concatChunks(d, b);
        try {
            let w = i.headers.get(W) ?? "";
            f = this.parseBody(t, N, w, u);
        }
        catch (w) {
            o.error(new O({ error: w, headers: new _(i.headers), status: i.status, statusText: i.statusText, url: i.url || t.urlWithParams }));
            return;
        }
    } u === 0 && (u = f ? ge : 0); let E = u >= 200 && u < 300, R = i.redirected, P = i.type; E ? (o.next(new U({ body: f, headers: c, status: u, statusText: a, url: l, redirected: R, responseType: P })), o.complete()) : o.error(new O({ error: f, headers: c, status: u, statusText: a, url: l, redirected: R, responseType: P })); }); }
    parseBody(t, n, o, s) { switch (t.responseType) {
        case "json":
            let i = new TextDecoder().decode(n).replace(Vt, "");
            if (i === "")
                return null;
            try {
                return JSON.parse(i);
            }
            catch (c) {
                if (s < 200 || s >= 300)
                    return i;
                throw c;
            }
        case "text": return new TextDecoder().decode(n);
        case "blob": return new Blob([n], { type: o });
        case "arraybuffer": return n.buffer;
    } }
    createRequestInit(t) { if (t.reportUploadProgress)
        throw new D(2824, !1); let n = {}, o; if (o = t.credentials, t.withCredentials && (o = "include"), t.headers.forEach((s, i) => n[s] = i.join(",")), t.headers.has(ee) || (n[ee] = $e), !t.headers.has(W)) {
        let s = t.detectContentTypeHeader();
        s !== null && (n[W] = s);
    } return { body: t.serializeBody(), method: t.method, headers: n, credentials: o, keepalive: t.keepalive, cache: t.cache, priority: t.priority, mode: t.mode, redirect: t.redirect, referrer: t.referrer, integrity: t.integrity, referrerPolicy: t.referrerPolicy }; }
    concatChunks(t, n) { let o = new Uint8Array(n), s = 0; for (let i of t)
        o.set(i, s), s += i.length; return o; }
    static \u0275fac = function (n) { return new (n || e); };
    static \u0275prov = h.\u0275\u0275defineService({ token: e, factory: e.\u0275fac });
} return e; })(), le = class {
};
function ue() { }
function Gt(e) { e.then(ue, ue); }
function Fe(e) { throw new D(-2825, !1); }
function Ye(e, r) { return r(e); }
function Wt(e, r) { return (t, n) => r.intercept(t, { handle: o => e(o, n) }); }
function Yt(e, r, t) { return (n, o) => pe(t, () => r(n, s => e(s, o))); }
var me = new C(""), Z = new C("", { factory: () => [] }), Te = new C(""), we = new C("", { factory: () => !0 });
function Zt() { let e = null; return (r, t) => { e === null && (e = (v(me, { optional: !0 }) ?? []).reduceRight(Wt, Ye)); let n = v(je); if (v(we)) {
    let s = n.add();
    return e(r, t).pipe(Xe(s));
}
else
    return e(r, t); }; }
var V = (() => { class e {
    static \u0275fac = function (n) { return new (n || e); };
    static \u0275prov = h.\u0275\u0275defineInjectable({ token: e, factory: function (n) { let o = null; return n ? o = new (n || e) : o = h.\u0275\u0275inject(J), o; }, providedIn: "root" });
} return e; })();
var te = (() => { class e {
    backend;
    injector;
    chain = null;
    pendingTasks = v(je);
    contributeToStability = v(we);
    constructor(t, n) { this.backend = t, this.injector = n; }
    handle(t) { if (this.chain === null) {
        let o = Array.from(new Set([...this.injector.get(Z), ...this.injector.get(Te, [])]));
        this.chain = o.reduceRight((s, i) => Yt(s, i, this.injector), Ye);
    } let n = this.chain; if (this.contributeToStability) {
        let o = this.pendingTasks.add();
        return _e(() => n(t, s => this.backend.handle(s))).pipe(Xe(o));
    }
    else
        return _e(() => n(t, o => this.backend.handle(o))); }
    static \u0275fac = function (n) { return new (n || e)(h.\u0275\u0275inject(V), h.\u0275\u0275inject(h.EnvironmentInjector)); };
    static \u0275prov = h.\u0275\u0275defineInjectable({ token: e, factory: e.\u0275fac, providedIn: "root" });
} return e; })(), ne = (() => { class e {
    static \u0275fac = function (n) { return new (n || e); };
    static \u0275prov = h.\u0275\u0275defineInjectable({ token: e, factory: function (n) { let o = null; return n ? o = new (n || e) : o = h.\u0275\u0275inject(te), o; }, providedIn: "root" });
} return e; })();
function ce(e, r) { return G({ body: r }, e); }
var be = (() => { class e {
    handler;
    constructor(t) { this.handler = t; }
    request(t, n, o = {}) { let s; if (t instanceof B)
        s = t;
    else {
        let a;
        o.headers instanceof _ ? a = o.headers : a = new _(o.headers);
        let l;
        o.params && (o.params instanceof S ? l = o.params : l = new S({ fromObject: o.params })), s = new B(t, n, o.body !== void 0 ? o.body : null, { headers: a, context: o.context, params: l, reportProgress: o.reportProgress, reportUploadProgress: o.reportUploadProgress, reportDownloadProgress: o.reportDownloadProgress, responseType: o.responseType || "json", withCredentials: o.withCredentials, transferCache: o.transferCache, keepalive: o.keepalive, priority: o.priority, cache: o.cache, mode: o.mode, redirect: o.redirect, credentials: o.credentials, referrer: o.referrer, referrerPolicy: o.referrerPolicy, integrity: o.integrity, timeout: o.timeout });
    } let i = ze(s).pipe(St(a => this.handler.handle(a))); if (t instanceof B || o.observe === "events")
        return i; let c = i.pipe(Ft(a => a instanceof U)); switch (o.observe || "body") {
        case "body": switch (s.responseType) {
            case "arraybuffer": return c.pipe(K(a => { if (a.body !== null && !(a.body instanceof ArrayBuffer))
                throw new D(2806, !1); return a.body; }));
            case "blob": return c.pipe(K(a => { if (a.body !== null && !(a.body instanceof Blob))
                throw new D(2807, !1); return a.body; }));
            case "text": return c.pipe(K(a => { if (a.body !== null && typeof a.body != "string")
                throw new D(2808, !1); return a.body; }));
            default: return c.pipe(K(a => a.body));
        }
        case "response": return c;
        default: throw new D(2809, !1);
    } }
    delete(t, n = {}) { return this.request("DELETE", t, n); }
    get(t, n = {}) { return this.request("GET", t, n); }
    head(t, n = {}) { return this.request("HEAD", t, n); }
    jsonp(t, n) { return this.request("JSONP", t, { params: new S().append(n, "JSONP_CALLBACK"), observe: "body", responseType: "json" }); }
    options(t, n = {}) { return this.request("OPTIONS", t, n); }
    patch(t, n, o = {}) { return this.request("PATCH", t, ce(o, n)); }
    post(t, n, o = {}) { return this.request("POST", t, ce(o, n)); }
    put(t, n, o = {}) { return this.request("PUT", t, ce(o, n)); }
    static \u0275fac = function (n) { return new (n || e)(h.\u0275\u0275inject(ne)); };
    static \u0275prov = h.\u0275\u0275defineInjectable({ token: e, factory: e.\u0275fac, providedIn: "root" });
} return e; })(), Kt = 0, Ue, Qt = "JSONP injected script did not invoke callback.";
var re = class {
};
function qt() { return typeof window == "object" ? window : {}; }
var ve = (() => { class e {
    callbackMap;
    document;
    resolvedPromise = Promise.resolve();
    nonce = v(_t, { optional: !0 });
    constructor(t, n) { this.callbackMap = t, this.document = n; }
    nextCallback() { return `ng_jsonp_callback_${Kt++}`; }
    handle(t) { if (t.method !== "JSONP")
        throw new D(2810, !1); if (t.responseType !== "json")
        throw new D(2811, !1); if (t.headers.keys().length > 0)
        throw new D(2812, !1); if (!this.isAllowedJsonpUrl(t.urlWithParams))
        throw new D(2826, !1); return new ye(n => { let o = this.nextCallback(), s = t.urlWithParams.replace(/=JSONP_CALLBACK(&|$)/, `=${o}$1`), i = this.document.createElement("script"); i.src = s, this.nonce && i.setAttribute("nonce", this.nonce); let c = null, a = !1; this.callbackMap[o] = T => { delete this.callbackMap[o], c = T, a = !0; }; let l = () => { i.removeEventListener("load", u), i.removeEventListener("error", f), i.remove(), delete this.callbackMap[o]; }, u = () => { this.resolvedPromise.then(() => { if (l(), !a) {
        n.error(new O({ url: s, status: 0, statusText: "JSONP Error", error: new Error(Qt) }));
        return;
    } n.next(new U({ body: c, status: ge, statusText: "OK", url: s })), n.complete(); }); }, f = T => { l(), n.error(new O({ error: T, status: 0, statusText: "JSONP Error", url: s })); }; return i.addEventListener("load", u), i.addEventListener("error", f), this.document.body.appendChild(i), n.next({ type: I.Sent }), () => { a || this.removeListeners(i), l(); }; }); }
    removeListeners(t) { Ue ??= this.document.implementation.createHTMLDocument(), Ue.adoptNode(t); }
    isAllowedJsonpUrl(t) { return /^https?:\/\//i.test(t); }
    static \u0275fac = function (n) { return new (n || e)(h.\u0275\u0275inject(re), h.\u0275\u0275inject(Be)); };
    static \u0275prov = h.\u0275\u0275defineInjectable({ token: e, factory: e.\u0275fac });
} return e; })();
function Ze(e, r) { return e.method === "JSONP" ? v(ve).handle(e) : r(e); }
var Ht = (() => { class e {
    injector;
    constructor(t) { this.injector = t; }
    intercept(t, n) { return pe(this.injector, () => Ze(t, o => n.handle(o))); }
    static \u0275fac = function (n) { return new (n || e)(h.\u0275\u0275inject(h.EnvironmentInjector)); };
    static \u0275prov = h.\u0275\u0275defineInjectable({ token: e, factory: e.\u0275fac });
} return e; })(), er = /^\)\]\}',?\n/;
var he = (() => { class e {
    xhrFactory;
    tracingService = v(At, { optional: !0 });
    constructor(t) { this.xhrFactory = t; }
    maybePropagateTrace(t) { return this.tracingService?.propagate ? this.tracingService.propagate(t) : t; }
    handle(t) { if (t.method === "JSONP")
        throw new D(-2800, !1); let n = this.xhrFactory; return (typeof ngServerMode < "u" && ngServerMode && n.\u0275loadImpl ? Ct(n.\u0275loadImpl()) : ze(null)).pipe(Ut(() => new ye(s => { let i = n.build(); if (i.open(t.method, t.urlWithParams), t.withCredentials && (i.withCredentials = !0), t.headers.forEach((d, p) => i.setRequestHeader(d, p.join(","))), t.headers.has(ee) || i.setRequestHeader(ee, $e), !t.headers.has(W)) {
        let d = t.detectContentTypeHeader();
        d !== null && i.setRequestHeader(W, d);
    } if (t.timeout && (i.timeout = t.timeout), t.responseType) {
        let d = t.responseType.toLowerCase();
        i.responseType = d !== "json" ? d : "text";
    } let c = t.serializeBody(), a = null, l = () => { if (a !== null)
        return a; let d = i.statusText || "OK", p = new _(i.getAllResponseHeaders()), b = i.responseURL || t.url; return a = new Y({ headers: p, status: i.status, statusText: d, url: b }), a; }, u = this.maybePropagateTrace(() => { let { headers: d, status: p, statusText: b, url: A } = l(), y = null; p !== Jt && (y = typeof i.response > "u" ? i.responseText : i.response), p === 0 && (p = y ? ge : 0); let x = p >= 200 && p < 300; if (t.responseType === "json" && typeof y == "string") {
        let M = y;
        y = y.replace(er, "");
        try {
            y = y !== "" ? JSON.parse(y) : null;
        }
        catch (N) {
            y = M, x && (x = !1, y = { error: N, text: y });
        }
    } x ? (s.next(new U({ body: y, headers: d, status: p, statusText: b, url: A || void 0 })), s.complete()) : s.error(new O({ error: y, headers: d, status: p, statusText: b, url: A || void 0 })); }), f = this.maybePropagateTrace(d => { let { url: p } = l(), b = new O({ error: d, status: i.status || 0, statusText: i.statusText || "Unknown Error", url: p || void 0 }); s.error(b); }), T = f; t.timeout && (T = this.maybePropagateTrace(d => { let { url: p } = l(), b = new O({ error: new DOMException("Request timed out", "TimeoutError"), status: i.status || 0, statusText: i.statusText || "Request timeout", url: p || void 0 }); s.error(b); })); let E = !1, R = this.maybePropagateTrace(d => { E || (s.next(l()), E = !0); let p = { type: I.DownloadProgress, loaded: d.loaded }; d.lengthComputable && (p.total = d.total), t.responseType === "text" && i.responseText && (p.partialText = i.responseText), s.next(p); }), P = this.maybePropagateTrace(d => { let p = { type: I.UploadProgress, loaded: d.loaded }; d.lengthComputable && (p.total = d.total), s.next(p); }); i.addEventListener("load", u), i.addEventListener("error", f), i.addEventListener("timeout", T), i.addEventListener("abort", f); let g = t.reportProgress || t.reportUploadProgress, m = t.reportProgress || t.reportDownloadProgress; return m && i.addEventListener("progress", R), g && c !== null && i.upload && i.upload.addEventListener("progress", P), i.send(c), s.next({ type: I.Sent }), () => { i.removeEventListener("error", f), i.removeEventListener("abort", f), i.removeEventListener("load", u), i.removeEventListener("timeout", T), m && i.removeEventListener("progress", R), g && c !== null && i.upload && i.upload.removeEventListener("progress", P), i.readyState !== i.DONE && i.abort(); }; }))); }
    static \u0275fac = function (n) { return new (n || e)(h.\u0275\u0275inject(Oe)); };
    static \u0275prov = h.\u0275\u0275defineInjectable({ token: e, factory: e.\u0275fac, providedIn: "root" });
} return e; })(), Ee = new C("", { factory: () => !0 }), Ke = "XSRF-TOKEN", Qe = new C("", { factory: () => Ke }), qe = "X-XSRF-TOKEN", He = new C("", { factory: () => qe }), et = (() => { class e {
    cookieName = v(Qe);
    doc = v(Be);
    lastCookieString = "";
    lastToken = null;
    parseCount = 0;
    getToken() { if (typeof ngServerMode < "u" && ngServerMode)
        return null; let t = this.doc.cookie || ""; return t !== this.lastCookieString && (this.parseCount++, this.lastToken = De(t, this.cookieName), this.lastCookieString = t), this.lastToken; }
    static \u0275fac = function (n) { return new (n || e); };
    static \u0275prov = h.\u0275\u0275defineService({ token: e, factory: e.\u0275fac });
} return e; })(), Re = (() => { class e {
    static \u0275fac = function (n) { return new (n || e); };
    static \u0275prov = h.\u0275\u0275defineInjectable({ token: e, factory: function (n) { let o = null; return n ? o = new (n || e) : o = h.\u0275\u0275inject(et), o; }, providedIn: "root" });
} return e; })();
function tt(e, r) { if (!v(Ee) || e.method === "GET" || e.method === "HEAD")
    return r(e); try {
    let o = v(Ne).href, { origin: s } = new URL(o), { origin: i } = new URL(e.url, s);
    if (s !== i)
        return r(e);
}
catch {
    return r(e);
} let t = v(Re).getToken(), n = v(He); return t != null && !e.headers.has(n) && (e = e.clone({ headers: e.headers.set(n, t) })), r(e); }
var Ce = (() => { class e {
    injector = v(It);
    intercept(t, n) { return pe(this.injector, () => tt(t, o => n.handle(o))); }
    static \u0275fac = function (n) { return new (n || e); };
    static \u0275prov = h.\u0275\u0275defineInjectable({ token: e, factory: e.\u0275fac });
} return e; })(), F = (function (e) { return e[e.Interceptors = 0] = "Interceptors", e[e.LegacyInterceptors = 1] = "LegacyInterceptors", e[e.CustomXsrfConfiguration = 2] = "CustomXsrfConfiguration", e[e.NoXsrfProtection = 3] = "NoXsrfProtection", e[e.JsonpSupport = 4] = "JsonpSupport", e[e.RequestsMadeViaParent = 5] = "RequestsMadeViaParent", e[e.Fetch = 6] = "Fetch", e[e.Xhr = 7] = "Xhr", e; })(F || {});
function j(e, r) { return { \u0275kind: e, \u0275providers: r }; }
function rt(...e) { let r = [be, J, te, { provide: ne, useExisting: te }, { provide: V, useFactory: () => v(J) }, { provide: Z, useValue: tt, multi: !0 }]; for (let t of e)
    r.push(...t.\u0275providers); return kt(r); }
function tr(e) { return j(F.Interceptors, e.map(r => ({ provide: Z, useValue: r, multi: !0 }))); }
var Le = new C("");
function nt() { return j(F.LegacyInterceptors, [{ provide: Le, useFactory: Zt }, { provide: Z, useExisting: Le, multi: !0 }]); }
function fe({ cookieName: e, headerName: r }) { let t = []; return e !== void 0 && t.push({ provide: Qe, useValue: e }), r !== void 0 && t.push({ provide: He, useValue: r }), j(F.CustomXsrfConfiguration, t); }
function ot() { return j(F.NoXsrfProtection, [{ provide: Ee, useValue: !1 }]); }
function st() { return j(F.JsonpSupport, [ve, { provide: re, useFactory: qt }, { provide: Z, useValue: Ze, multi: !0 }]); }
function rr() { return j(F.RequestsMadeViaParent, [{ provide: V, useFactory: () => v(ne, { skipSelf: !0, optional: !0 }) }]); }
function nr() { return j(F.Fetch, [J, { provide: V, useExisting: J }]); }
function it() { return j(F.Xhr, [he, { provide: V, useExisting: he }]); }
var or = (() => { class e {
    static disable() { return { ngModule: e, providers: [ot().\u0275providers] }; }
    static withOptions(t = {}) { return { ngModule: e, providers: fe(t).\u0275providers }; }
    static \u0275fac = function (n) { return new (n || e); };
    static \u0275mod = h.\u0275\u0275defineNgModule({ type: e });
    static \u0275inj = h.\u0275\u0275defineInjector({ providers: [Ce, { provide: me, useExisting: Ce, multi: !0 }, { provide: Re, useClass: et }, fe({ cookieName: Ke, headerName: qe }).\u0275providers, { provide: Ee, useValue: !0 }] });
} return e; })(), sr = (() => { class e {
    static \u0275fac = function (n) { return new (n || e); };
    static \u0275mod = h.\u0275\u0275defineNgModule({ type: e });
    static \u0275inj = h.\u0275\u0275defineInjector({ providers: [rt(nt(), it())] });
} return e; })(), ir = (() => { class e {
    static \u0275fac = function (n) { return new (n || e); };
    static \u0275mod = h.\u0275\u0275defineNgModule({ type: e });
    static \u0275inj = h.\u0275\u0275defineInjector({ providers: [st().\u0275providers] });
} return e; })();
import { InjectionToken as lt, APP_BOOTSTRAP_LISTENER as ar, \u0275performanceMarkFeature as cr, inject as $, ApplicationRef as dr, TransferState as ut, makeStateKey as lr, \u0275RuntimeError as ht, \u0275truncateMiddle as $r, \u0275formatRuntimeError as Gr, Injector as ur, signal as ft, \u0275ResourceImpl as hr, linkedSignal as Pe, computed as fr, \u0275encapsulateResourceError as pr } from "@angular/core";
import { of as yr } from "rxjs";
import { tap as gr } from "rxjs/operators";
var pt = new lt(""), yt = "b", gt = "h", mt = "s", Tt = "st", wt = "u", bt = "rt", se = new lt(""), mr = ["GET", "HEAD"];
function vt(e, r) { let i = r, { isCacheActive: t } = i, n = Me(i, ["isCacheActive"]), { transferCache: o, method: s } = e; return !(!t || o === !1 || Pr(e) || s === "POST" && !n.includePostRequests && !o || s !== "POST" && !mr.includes(s) || !n.includeRequestsWithAuthHeaders && br(e) || Rt(e.headers) || Rr(e.cache) || n.filter?.(e) === !1); }
function Tr(e, r) { return typeof r == "object" && r.includeHeaders ? r.includeHeaders : e.includeHeaders; }
function Et(e, r, t, n, o, s = !1) { if (!s && !vt(e, r))
    return null; if (typeof ngServerMode < "u" && !ngServerMode && n)
    throw new ht(2803, !1); if (!o) {
    let P = typeof ngServerMode < "u" && ngServerMode && n ? xt(e.url, n) : e.url;
    o = Pt(e, P);
} let i = t.get(o, null); if (!i)
    return null; let { [yt]: c, [bt]: a, [gt]: l, [mt]: u, [Tt]: f, [wt]: T } = i, E = c; switch (a) {
    case "arraybuffer":
        E = ct(c);
        break;
    case "blob":
        E = new Blob([ct(c)]);
        break;
} let R = new _(l); return new U({ body: E, headers: R, status: u, statusText: f, url: T }); }
function wr(e, r) { let t = $(se); if (!vt(e, t))
    return r(e); let n = $(ut), o = $(pt, { optional: !0 }), s = typeof ngServerMode < "u" && ngServerMode && o ? xt(e.url, o) : e.url, i = Pt(e, s), c = Et(e, t, n, null, i, !0); if (c)
    return yr(c); let a = r(e); return typeof ngServerMode < "u" && ngServerMode ? a.pipe(gr(l => { if (l instanceof U) {
    let { headers: u, body: f, status: T, statusText: E } = l;
    if (Rt(u) || Er(u))
        return;
    let { transferCache: R, responseType: P } = e, g = Tr(t, R);
    n.set(i, { [yt]: P === "arraybuffer" || P === "blob" ? Mr(f) : f, [gt]: xr(u, g), [mt]: T, [Tt]: E, [wt]: s, [bt]: P });
} })) : a; }
function br(e) { let r = e.headers; return r.has("authorization") || r.has("proxy-authorization") || r.has("cookie"); }
var vr = new Set(["no-store", "private", "no-cache"]);
function Rt(e) { let r = e.get("cache-control"); return r ? r.split(",").some(t => { let n = t.split("=", 1)[0].trim().toLowerCase(); return vr.has(n); }) : !1; }
function Er(e) { return e.has("set-cookie"); }
function Rr(e) { return e === "no-cache" || e === "no-store"; }
function Pr(e) { let { withCredentials: r, credentials: t } = e; return r || t === "include" || t === "same-origin"; }
function xr(e, r) { if (!r)
    return {}; let t = {}; for (let n of r) {
    let o = e.getAll(n);
    o !== null && (t[n] = o);
} return t; }
function at(e) { let r = new URLSearchParams(e instanceof URLSearchParams ? e : e.toString()); return r.sort(), r.toString(); }
function Pt(e, r) { let { params: t, method: n, responseType: o } = e, s = at(t), i = e.serializeBody(); i instanceof URLSearchParams ? i = at(i) : typeof i != "string" && (i = ""); let c = [n, o, r, i, s].join("\0"), a = Dr(c); return lr(a); }
function Mr(e) { let r = new Uint8Array(e), t = 32768, n = ""; for (let o = 0; o < r.length; o += t) {
    let s = r.subarray(o, o + t);
    n += String.fromCharCode.apply(null, s);
} return btoa(n); }
function ct(e) { let r = atob(e); return Uint8Array.from(r, n => n.charCodeAt(0)).buffer; }
function Kr(e) { return [{ provide: se, useFactory: () => (cr("NgHttpTransferCache"), G({ isCacheActive: !0 }, e)) }, { provide: Te, useValue: wr, multi: !0 }, { provide: ar, multi: !0, useFactory: () => { let r = $(dr), t = $(se); return () => { r.whenStable().then(() => { t.isCacheActive = !1; }); }; } }]; }
function xt(e, r) { let t = new URL(e, "resolve://").origin, n = r[t]; return n ? e.replace(t, n) : e; }
var Nr = new Uint32Array([1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298]), dt;
function Dr(e) { dt ??= new TextEncoder; let r = dt.encode(e), t = 1779033703, n = 3144134277, o = 1013904242, s = 2773480762, i = 1359893119, c = 2600822924, a = 528734635, l = 1541459225, u = r.length * 8, f = (r.length + 8 >> 6) + 1 << 6, T = new Uint8Array(f); T.set(r), T[r.length] = 128; let E = new DataView(T.buffer), R = u >>> 0, P = u / 4294967296 >>> 0; E.setUint32(f - 8, P, !1), E.setUint32(f - 4, R, !1); let g = new Uint32Array(64); for (let m = 0; m < f; m += 64) {
    for (let w = 0; w < 16; w++)
        g[w] = E.getUint32(m + w * 4, !1);
    for (let w = 16; w < 64; w++) {
        let k = g[w - 15], X = ((k >>> 7 | k << 25) ^ (k >>> 18 | k << 14) ^ k >>> 3) >>> 0, L = g[w - 2], ie = ((L >>> 17 | L << 15) ^ (L >>> 19 | L << 13) ^ L >>> 10) >>> 0;
        g[w] = g[w - 16] + X + g[w - 7] + ie >>> 0;
    }
    let d = t, p = n, b = o, A = s, y = i, x = c, M = a, N = l;
    for (let w = 0; w < 64; w++) {
        let k = ((y >>> 6 | y << 26) ^ (y >>> 11 | y << 21) ^ (y >>> 25 | y << 7)) >>> 0, X = (y & x ^ ~y & M) >>> 0, L = N + k + X + Nr[w] + g[w] >>> 0, ie = ((d >>> 2 | d << 30) ^ (d >>> 13 | d << 19) ^ (d >>> 22 | d << 10)) >>> 0, Mt = (d & p ^ d & b ^ p & b) >>> 0, Nt = ie + Mt >>> 0;
        N = M, M = x, x = y, y = A + L >>> 0, A = b, b = p, p = d, d = L + Nt >>> 0;
    }
    t = t + d >>> 0, n = n + p >>> 0, o = o + b >>> 0, s = s + A >>> 0, i = i + y >>> 0, c = c + x >>> 0, a = a + M >>> 0, l = l + N >>> 0;
} return [t, n, o, s, i, c, a, l].map(m => m.toString(16).padStart(8, "0")).join(""); }
var Qr = (() => { let e = oe("json"); return e.arrayBuffer = oe("arraybuffer"), e.blob = oe("blob"), e.text = oe("text"), e; })();
function oe(e) { return function (t, n) { let o = n?.injector ?? $(ur), s = o.get(se, null, { optional: !0 }), i = o.get(ut, null, { optional: !0 }), c = o.get(pt, null, { optional: !0 }), a = l => { if (s && i && l) {
    let u = Et(l, s, i, c);
    if (u)
        try {
            let f = u.body, T = n?.parse ? n.parse(f) : f;
            return ft({ value: T });
        }
        catch { }
} }; return new xe(o, l => Or(l, t, e), n?.defaultValue, n?.debugName, n?.parse, n?.equal, a); }; }
function Or(e, r, t) { let n = typeof r == "function" ? r(e) : r; if (n === void 0)
    return; typeof n == "string" && (n = { url: n }); let o = n.headers instanceof _ ? n.headers : new _(n.headers), s = n.params instanceof S ? n.params : new S({ fromObject: n.params }); return new B(n.method ?? "GET", n.url, n.body ?? null, { headers: o, params: s, reportProgress: n.reportProgress, withCredentials: n.withCredentials, keepalive: n.keepalive, cache: n.cache, priority: n.priority, mode: n.mode, redirect: n.redirect, responseType: t, context: n.context, transferCache: n.transferCache, credentials: n.credentials, referrer: n.referrer, referrerPolicy: n.referrerPolicy, integrity: n.integrity, timeout: n.timeout }); }
var xe = class extends hr {
    client;
    _headers = Pe({ source: this.extRequest, computation: () => { } });
    _progress = Pe({ source: this.extRequest, computation: () => { } });
    _statusCode = Pe({ source: this.extRequest, computation: () => { } });
    headers = fr(() => this.status() === "resolved" || this.status() === "error" ? this._headers() : void 0);
    progress = this._progress.asReadonly();
    statusCode = this._statusCode.asReadonly();
    constructor(r, t, n, o, s, i, c) { super(t, ({ params: a, abortSignal: l }) => { let u, f = !1, T = () => { f = !0, u?.unsubscribe(); }; l.addEventListener("abort", T); let E = ft({ value: void 0 }), R, P = new Promise(m => R = m), g = m => { E.set(m), R?.(E), R = void 0; }; return u = this.client.request(a).subscribe({ next: m => { switch (m.type) {
            case I.Response:
                this._headers.set(m.headers), this._statusCode.set(m.status);
                try {
                    g({ value: s ? s(m.body) : m.body });
                }
                catch (d) {
                    g({ error: pr(d) });
                }
                break;
            case I.DownloadProgress:
                this._progress.set(m);
                break;
        } }, error: m => { m instanceof O && (this._headers.set(m.headers), this._statusCode.set(m.status)), g({ error: m }), l.removeEventListener("abort", T); }, complete: () => { R && g({ error: new ht(991, !1) }), l.removeEventListener("abort", T); } }), f && u.unsubscribe(), P; }, n, i, o, r, void 0, c), this.client = r.get(be); }
    set(r) { super.set(r), this._headers.set(void 0), this._progress.set(void 0), this._statusCode.set(void 0); }
};
export { J as FetchBackend, me as HTTP_INTERCEPTORS, pt as HTTP_TRANSFER_CACHE_ORIGIN_MAP, V as HttpBackend, be as HttpClient, ir as HttpClientJsonpModule, sr as HttpClientModule, or as HttpClientXsrfModule, q as HttpContext, de as HttpContextToken, O as HttpErrorResponse, I as HttpEventType, F as HttpFeatureKind, ne as HttpHandler, Y as HttpHeaderResponse, _ as HttpHeaders, S as HttpParams, B as HttpRequest, U as HttpResponse, z as HttpResponseBase, Ge as HttpStatusCode, H as HttpUrlEncodingCodec, he as HttpXhrBackend, Re as HttpXsrfTokenExtractor, ve as JsonpClientBackend, Ht as JsonpInterceptor, Qr as httpResource, rt as provideHttpClient, nr as withFetch, tr as withInterceptors, nt as withInterceptorsFromDi, st as withJsonpSupport, ot as withNoXsrfProtection, rr as withRequestsMadeViaParent, it as withXhr, fe as withXsrfConfiguration, We as \u0275HTTP_FETCH_MAX_RESPONSE_SIZE, Te as \u0275HTTP_ROOT_INTERCEPTOR_FNS, te as \u0275HttpInterceptingHandler, we as \u0275REQUESTS_CONTRIBUTE_TO_STABILITY, Kr as \u0275withHttpTransferCache };
/*! Bundled license information:

@angular/common/fesm2022/_module-chunk.mjs:
@angular/common/fesm2022/http.mjs:
  (**
   * @license Angular v22.0.8
   * (c) 2010-2026 Google LLC. https://angular.dev/
   * License: MIT
   *)
*/
