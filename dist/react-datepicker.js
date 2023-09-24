!(function (e, t) {
  "object" == typeof exports && "undefined" != typeof module
    ? t(
        exports,
        require("react"),
        require("prop-types"),
        require("classnames"),
        require("date-fns/isDate"),
        require("date-fns/isValid"),
        require("date-fns/format"),
        require("date-fns/addMinutes"),
        require("date-fns/addHours"),
        require("date-fns/addDays"),
        require("date-fns/addWeeks"),
        require("date-fns/addMonths"),
        require("date-fns/addQuarters"),
        require("date-fns/addYears"),
        require("date-fns/subDays"),
        require("date-fns/subWeeks"),
        require("date-fns/subMonths"),
        require("date-fns/subQuarters"),
        require("date-fns/subYears"),
        require("date-fns/getSeconds"),
        require("date-fns/getMinutes"),
        require("date-fns/getHours"),
        require("date-fns/getDay"),
        require("date-fns/getDate"),
        require("date-fns/getISOWeek"),
        require("date-fns/getMonth"),
        require("date-fns/getQuarter"),
        require("date-fns/getYear"),
        require("date-fns/getTime"),
        require("date-fns/setSeconds"),
        require("date-fns/setMinutes"),
        require("date-fns/setHours"),
        require("date-fns/setMonth"),
        require("date-fns/setQuarter"),
        require("date-fns/setYear"),
        require("date-fns/min"),
        require("date-fns/max"),
        require("date-fns/differenceInCalendarDays"),
        require("date-fns/differenceInCalendarMonths"),
        require("date-fns/differenceInCalendarYears"),
        require("date-fns/startOfDay"),
        require("date-fns/startOfWeek"),
        require("date-fns/startOfMonth"),
        require("date-fns/startOfQuarter"),
        require("date-fns/startOfYear"),
        require("date-fns/endOfDay"),
        require("date-fns/endOfWeek"),
        require("date-fns/endOfMonth"),
        require("date-fns/endOfYear"),
        require("date-fns/isEqual"),
        require("date-fns/isSameDay"),
        require("date-fns/isSameMonth"),
        require("date-fns/isSameYear"),
        require("date-fns/isSameQuarter"),
        require("date-fns/isAfter"),
        require("date-fns/isBefore"),
        require("date-fns/isWithinInterval"),
        require("date-fns/toDate"),
        require("date-fns/parse"),
        require("date-fns/parseISO"),
        require("react-onclickoutside"),
        require("react-mobile-datepicker"),
        require("react-dom"),
        require("react-popper"),
        require("date-fns/set"),
      )
    : "function" == typeof define && define.amd
    ? define(
        [
          "exports",
          "react",
          "prop-types",
          "classnames",
          "date-fns/isDate",
          "date-fns/isValid",
          "date-fns/format",
          "date-fns/addMinutes",
          "date-fns/addHours",
          "date-fns/addDays",
          "date-fns/addWeeks",
          "date-fns/addMonths",
          "date-fns/addQuarters",
          "date-fns/addYears",
          "date-fns/subDays",
          "date-fns/subWeeks",
          "date-fns/subMonths",
          "date-fns/subQuarters",
          "date-fns/subYears",
          "date-fns/getSeconds",
          "date-fns/getMinutes",
          "date-fns/getHours",
          "date-fns/getDay",
          "date-fns/getDate",
          "date-fns/getISOWeek",
          "date-fns/getMonth",
          "date-fns/getQuarter",
          "date-fns/getYear",
          "date-fns/getTime",
          "date-fns/setSeconds",
          "date-fns/setMinutes",
          "date-fns/setHours",
          "date-fns/setMonth",
          "date-fns/setQuarter",
          "date-fns/setYear",
          "date-fns/min",
          "date-fns/max",
          "date-fns/differenceInCalendarDays",
          "date-fns/differenceInCalendarMonths",
          "date-fns/differenceInCalendarYears",
          "date-fns/startOfDay",
          "date-fns/startOfWeek",
          "date-fns/startOfMonth",
          "date-fns/startOfQuarter",
          "date-fns/startOfYear",
          "date-fns/endOfDay",
          "date-fns/endOfWeek",
          "date-fns/endOfMonth",
          "date-fns/endOfYear",
          "date-fns/isEqual",
          "date-fns/isSameDay",
          "date-fns/isSameMonth",
          "date-fns/isSameYear",
          "date-fns/isSameQuarter",
          "date-fns/isAfter",
          "date-fns/isBefore",
          "date-fns/isWithinInterval",
          "date-fns/toDate",
          "date-fns/parse",
          "date-fns/parseISO",
          "react-onclickoutside",
          "react-mobile-datepicker",
          "react-dom",
          "react-popper",
          "date-fns/set",
        ],
        t,
      )
    : t(
        ((e =
          "undefined" != typeof globalThis
            ? globalThis
            : e || self).DatePicker = {}),
        e.React,
        e.PropTypes,
        e.classNames,
        e.isDate,
        e.isValidDate,
        e.format,
        e.addMinutes,
        e.addHours,
        e.addDays,
        e.addWeeks,
        e.addMonths,
        e.addQuarters,
        e.addYears,
        e.subDays,
        e.subWeeks,
        e.subMonths,
        e.subQuarters,
        e.subYears,
        e.getSeconds,
        e.getMinutes,
        e.getHours,
        e.getDay,
        e.getDate,
        e.getISOWeek,
        e.getMonth,
        e.getQuarter,
        e.getYear,
        e.getTime,
        e.setSeconds,
        e.setMinutes,
        e.setHours,
        e.setMonth,
        e.setQuarter,
        e.setYear,
        e.min,
        e.max,
        e.differenceInCalendarDays,
        e.differenceInCalendarMonths,
        e.differenceInCalendarYears,
        e.startOfDay,
        e.startOfWeek,
        e.startOfMonth,
        e.startOfQuarter,
        e.startOfYear,
        e.endOfDay,
        null,
        e.endOfMonth,
        e.endOfYear,
        e.dfIsEqual,
        e.dfIsSameDay,
        e.dfIsSameMonth,
        e.dfIsSameYear,
        e.dfIsSameQuarter,
        e.isAfter,
        e.isBefore,
        e.isWithinInterval,
        e.toDate,
        e.parse,
        e.parseISO,
        e.onClickOutside,
        e.DatePicker$1,
        e.ReactDOM,
        e.ReactPopper,
        e.set,
      );
})(
  this,
  function (
    e,
    t,
    a,
    r,
    n,
    o,
    s,
    l,
    i,
    d,
    u,
    p,
    c,
    f,
    h,
    m,
    D,
    y,
    g,
    v,
    b,
    w,
    k,
    S,
    C,
    M,
    _,
    O,
    P,
    x,
    N,
    E,
    Y,
    T,
    I,
    R,
    L,
    F,
    A,
    q,
    B,
    W,
    K,
    j,
    Q,
    H,
    V,
    U,
    J,
    $,
    z,
    G,
    X,
    Z,
    ee,
    te,
    ae,
    re,
    ne,
    oe,
    se,
    le,
    ie,
    de,
    ue,
  ) {
    "use strict";
    function pe(e) {
      return e && "object" == typeof e && "default" in e ? e : { default: e };
    }
    var ce = pe(t),
      fe = pe(a),
      he = pe(r),
      me = pe(n),
      De = pe(o),
      ye = pe(s),
      ge = pe(l),
      ve = pe(i),
      be = pe(d),
      we = pe(u),
      ke = pe(p),
      Se = pe(c),
      Ce = pe(f),
      Me = pe(h),
      _e = pe(m),
      Oe = pe(D),
      Pe = pe(y),
      xe = pe(g),
      Ne = pe(v),
      Ee = pe(b),
      Ye = pe(w),
      Te = pe(k),
      Ie = pe(S),
      Re = pe(C),
      Le = pe(M),
      Fe = pe(_),
      Ae = pe(O),
      qe = pe(P),
      Be = pe(x),
      We = pe(N),
      Ke = pe(E),
      je = pe(Y),
      Qe = pe(T),
      He = pe(I),
      Ve = pe(R),
      Ue = pe(L),
      Je = pe(F),
      $e = pe(A),
      ze = pe(q),
      Ge = pe(B),
      Xe = pe(W),
      Ze = pe(K),
      et = pe(j),
      tt = pe(Q),
      at = pe(H),
      rt = pe(U),
      nt = pe(J),
      ot = pe($),
      st = pe(z),
      lt = pe(G),
      it = pe(X),
      dt = pe(Z),
      ut = pe(ee),
      pt = pe(te),
      ct = pe(ae),
      ft = pe(re),
      ht = pe(ne),
      mt = pe(oe),
      Dt = pe(se),
      yt = pe(le),
      gt = pe(ie),
      vt = pe(ue);
    function bt(e, t) {
      var a = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
          (r = r.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          })),
          a.push.apply(a, r);
      }
      return a;
    }
    function wt(e) {
      for (var t = 1; t < arguments.length; t++) {
        var a = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? bt(Object(a), !0).forEach(function (t) {
              _t(e, t, a[t]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a))
          : bt(Object(a)).forEach(function (t) {
              Object.defineProperty(
                e,
                t,
                Object.getOwnPropertyDescriptor(a, t),
              );
            });
      }
      return e;
    }
    function kt(e) {
      return (
        (kt =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e &&
                  "function" == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              }),
        kt(e)
      );
    }
    function St(e, t) {
      if (!(e instanceof t))
        throw new TypeError("Cannot call a class as a function");
    }
    function Ct(e, t) {
      for (var a = 0; a < t.length; a++) {
        var r = t[a];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          "value" in r && (r.writable = !0),
          Object.defineProperty(e, Rt(r.key), r);
      }
    }
    function Mt(e, t, a) {
      return (
        t && Ct(e.prototype, t),
        a && Ct(e, a),
        Object.defineProperty(e, "prototype", { writable: !1 }),
        e
      );
    }
    function _t(e, t, a) {
      return (
        (t = Rt(t)) in e
          ? Object.defineProperty(e, t, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (e[t] = a),
        e
      );
    }
    function Ot() {
      return (
        (Ot = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var a = arguments[t];
                for (var r in a)
                  Object.prototype.hasOwnProperty.call(a, r) && (e[r] = a[r]);
              }
              return e;
            }),
        Ot.apply(this, arguments)
      );
    }
    function Pt(e, t) {
      if ("function" != typeof t && null !== t)
        throw new TypeError(
          "Super expression must either be null or a function",
        );
      (e.prototype = Object.create(t && t.prototype, {
        constructor: { value: e, writable: !0, configurable: !0 },
      })),
        Object.defineProperty(e, "prototype", { writable: !1 }),
        t && Nt(e, t);
    }
    function xt(e) {
      return (
        (xt = Object.setPrototypeOf
          ? Object.getPrototypeOf.bind()
          : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            }),
        xt(e)
      );
    }
    function Nt(e, t) {
      return (
        (Nt = Object.setPrototypeOf
          ? Object.setPrototypeOf.bind()
          : function (e, t) {
              return (e.__proto__ = t), e;
            }),
        Nt(e, t)
      );
    }
    function Et(e) {
      if (void 0 === e)
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called",
        );
      return e;
    }
    function Yt(e) {
      var t = (function () {
        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ("function" == typeof Proxy) return !0;
        try {
          return (
            Boolean.prototype.valueOf.call(
              Reflect.construct(Boolean, [], function () {}),
            ),
            !0
          );
        } catch (e) {
          return !1;
        }
      })();
      return function () {
        var a,
          r = xt(e);
        if (t) {
          var n = xt(this).constructor;
          a = Reflect.construct(r, arguments, n);
        } else a = r.apply(this, arguments);
        return (function (e, t) {
          if (t && ("object" == typeof t || "function" == typeof t)) return t;
          if (void 0 !== t)
            throw new TypeError(
              "Derived constructors may only return object or undefined",
            );
          return Et(e);
        })(this, a);
      };
    }
    function Tt(e) {
      return (
        (function (e) {
          if (Array.isArray(e)) return It(e);
        })(e) ||
        (function (e) {
          if (
            ("undefined" != typeof Symbol && null != e[Symbol.iterator]) ||
            null != e["@@iterator"]
          )
            return Array.from(e);
        })(e) ||
        (function (e, t) {
          if (!e) return;
          if ("string" == typeof e) return It(e, t);
          var a = Object.prototype.toString.call(e).slice(8, -1);
          "Object" === a && e.constructor && (a = e.constructor.name);
          if ("Map" === a || "Set" === a) return Array.from(e);
          if (
            "Arguments" === a ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)
          )
            return It(e, t);
        })(e) ||
        (function () {
          throw new TypeError(
            "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
          );
        })()
      );
    }
    function It(e, t) {
      (null == t || t > e.length) && (t = e.length);
      for (var a = 0, r = new Array(t); a < t; a++) r[a] = e[a];
      return r;
    }
    function Rt(e) {
      var t = (function (e, t) {
        if ("object" != typeof e || null === e) return e;
        var a = e[Symbol.toPrimitive];
        if (void 0 !== a) {
          var r = a.call(e, t || "default");
          if ("object" != typeof r) return r;
          throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return ("string" === t ? String : Number)(e);
      })(e, "string");
      return "symbol" == typeof t ? t : String(t);
    }
    var Lt = function (e, t) {
        switch (e) {
          case "P":
            return t.date({ width: "short" });
          case "PP":
            return t.date({ width: "medium" });
          case "PPP":
            return t.date({ width: "long" });
          default:
            return t.date({ width: "full" });
        }
      },
      Ft = function (e, t) {
        switch (e) {
          case "p":
            return t.time({ width: "short" });
          case "pp":
            return t.time({ width: "medium" });
          case "ppp":
            return t.time({ width: "long" });
          default:
            return t.time({ width: "full" });
        }
      },
      At = {
        p: Ft,
        P: function (e, t) {
          var a,
            r = e.match(/(P+)(p+)?/) || [],
            n = r[1],
            o = r[2];
          if (!o) return Lt(e, t);
          switch (n) {
            case "P":
              a = t.dateTime({ width: "short" });
              break;
            case "PP":
              a = t.dateTime({ width: "medium" });
              break;
            case "PPP":
              a = t.dateTime({ width: "long" });
              break;
            default:
              a = t.dateTime({ width: "full" });
          }
          return a.replace("{{date}}", Lt(n, t)).replace("{{time}}", Ft(o, t));
        },
      },
      qt = 12,
      Bt = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g;
    function Wt(e) {
      var t = e
        ? "string" == typeof e || e instanceof String
          ? mt.default(e)
          : ft.default(e)
        : new Date();
      return Kt(t) ? t : null;
    }
    function Kt(e, t) {
      return (
        (t = t || new Date("1/1/1000")), De.default(e) && !pt.default(e, t)
      );
    }
    function jt(e, t, a) {
      if ("en" === a) return ye.default(e, t, { awareOfUnicodeTokens: !0 });
      var r = na(a);
      return (
        a &&
          !r &&
          console.warn(
            'A locale object was not found for the provided string ["'.concat(
              a,
              '"].',
            ),
          ),
        !r && ra() && na(ra()) && (r = na(ra())),
        ye.default(e, t, { locale: r || null, awareOfUnicodeTokens: !0 })
      );
    }
    function Qt(e, t) {
      var a = t.dateFormat,
        r = t.locale;
      return (e && jt(e, Array.isArray(a) ? a[0] : a, r)) || "";
    }
    function Ht(e, t) {
      var a = t.hour,
        r = void 0 === a ? 0 : a,
        n = t.minute,
        o = void 0 === n ? 0 : n,
        s = t.second,
        l = void 0 === s ? 0 : s;
      return Ke.default(We.default(Be.default(e, l), o), r);
    }
    function Vt(e, t, a) {
      var r = na(t || ra());
      return Xe.default(e, { locale: r, weekStartsOn: a });
    }
    function Ut(e) {
      return Ze.default(e);
    }
    function Jt(e) {
      return tt.default(e);
    }
    function $t(e) {
      return et.default(e);
    }
    function zt() {
      return Ge.default(Wt());
    }
    function Gt(e, t) {
      return e && t ? it.default(e, t) : !e && !t;
    }
    function Xt(e, t) {
      return e && t ? lt.default(e, t) : !e && !t;
    }
    function Zt(e, t) {
      return e && t ? dt.default(e, t) : !e && !t;
    }
    function ea(e, t) {
      return e && t ? st.default(e, t) : !e && !t;
    }
    function ta(e, t) {
      return e && t ? ot.default(e, t) : !e && !t;
    }
    function aa(e, t, a) {
      var r,
        n = Ge.default(t),
        o = at.default(a);
      try {
        r = ct.default(e, { start: n, end: o });
      } catch (e) {
        r = !1;
      }
      return r;
    }
    function ra() {
      return ("undefined" != typeof window ? window : globalThis).__localeId__;
    }
    function na(e) {
      if ("string" == typeof e) {
        var t = "undefined" != typeof window ? window : globalThis;
        return t.__localeData__ ? t.__localeData__[e] : null;
      }
      return e;
    }
    function oa(e, t) {
      return jt(je.default(Wt(), e), "LLLL", t);
    }
    function sa(e, t) {
      return jt(je.default(Wt(), e), "LLL", t);
    }
    function la(e) {
      var t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        a = t.minDate,
        r = t.maxDate,
        n = t.excludeDates,
        o = t.excludeDateIntervals,
        s = t.includeDates,
        l = t.includeDateIntervals,
        i = t.filterDate;
      return (
        ma(e, { minDate: a, maxDate: r }) ||
        (n &&
          n.some(function (t) {
            return ea(e, t);
          })) ||
        (o &&
          o.some(function (t) {
            var a = t.start,
              r = t.end;
            return ct.default(e, { start: a, end: r });
          })) ||
        (s &&
          !s.some(function (t) {
            return ea(e, t);
          })) ||
        (l &&
          !l.some(function (t) {
            var a = t.start,
              r = t.end;
            return ct.default(e, { start: a, end: r });
          })) ||
        (i && !i(Wt(e))) ||
        !1
      );
    }
    function ia(e) {
      var t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        a = t.excludeDates,
        r = t.excludeDateIntervals;
      return r && r.length > 0
        ? r.some(function (t) {
            var a = t.start,
              r = t.end;
            return ct.default(e, { start: a, end: r });
          })
        : (a &&
            a.some(function (t) {
              return ea(e, t);
            })) ||
            !1;
    }
    function da(e) {
      var t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        a = t.minDate,
        r = t.maxDate,
        n = t.excludeDates,
        o = t.includeDates,
        s = t.filterDate;
      return (
        ma(e, { minDate: Ze.default(a), maxDate: rt.default(r) }) ||
        (n &&
          n.some(function (t) {
            return Xt(e, t);
          })) ||
        (o &&
          !o.some(function (t) {
            return Xt(e, t);
          })) ||
        (s && !s(Wt(e))) ||
        !1
      );
    }
    function ua(e, t, a, r) {
      var n = Ae.default(e),
        o = Le.default(e),
        s = Ae.default(t),
        l = Le.default(t),
        i = Ae.default(r);
      return n === s && n === i
        ? o <= a && a <= l
        : n < s
        ? (i === n && o <= a) || (i === s && l >= a) || (i < s && i > n)
        : void 0;
    }
    function pa(e) {
      var t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        a = t.minDate,
        r = t.maxDate,
        n = t.excludeDates,
        o = t.includeDates,
        s = t.filterDate;
      return (
        ma(e, { minDate: a, maxDate: r }) ||
        (n &&
          n.some(function (t) {
            return Zt(e, t);
          })) ||
        (o &&
          !o.some(function (t) {
            return Zt(e, t);
          })) ||
        (s && !s(Wt(e))) ||
        !1
      );
    }
    function ca(e, t, a) {
      if (!De.default(t) || !De.default(a)) return !1;
      var r = Ae.default(t),
        n = Ae.default(a);
      return r <= e && n >= e;
    }
    function fa(e) {
      var t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        a = t.minDate,
        r = t.maxDate,
        n = t.excludeDates,
        o = t.includeDates,
        s = t.filterDate,
        l = new Date(e, 0, 1);
      return (
        ma(l, { minDate: tt.default(a), maxDate: nt.default(r) }) ||
        (n &&
          n.some(function (e) {
            return Gt(l, e);
          })) ||
        (o &&
          !o.some(function (e) {
            return Gt(l, e);
          })) ||
        (s && !s(Wt(l))) ||
        !1
      );
    }
    function ha(e, t, a, r) {
      var n = Ae.default(e),
        o = Fe.default(e),
        s = Ae.default(t),
        l = Fe.default(t),
        i = Ae.default(r);
      return n === s && n === i
        ? o <= a && a <= l
        : n < s
        ? (i === n && o <= a) || (i === s && l >= a) || (i < s && i > n)
        : void 0;
    }
    function ma(e) {
      var t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        a = t.minDate,
        r = t.maxDate;
      return (a && Je.default(e, a) < 0) || (r && Je.default(e, r) > 0);
    }
    function Da(e, t) {
      return t.some(function (t) {
        return (
          Ye.default(t) === Ye.default(e) && Ee.default(t) === Ee.default(e)
        );
      });
    }
    function ya(e) {
      var t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        a = t.excludeTimes,
        r = t.includeTimes,
        n = t.filterTime;
      return (a && Da(e, a)) || (r && !Da(e, r)) || (n && !n(e)) || !1;
    }
    function ga(e, t) {
      var a = t.minTime,
        r = t.maxTime;
      if (!a || !r) throw new Error("Both minTime and maxTime props required");
      var n,
        o = Wt(),
        s = Ke.default(We.default(o, Ee.default(e)), Ye.default(e)),
        l = Ke.default(We.default(o, Ee.default(a)), Ye.default(a)),
        i = Ke.default(We.default(o, Ee.default(r)), Ye.default(r));
      try {
        n = !ct.default(s, { start: l, end: i });
      } catch (e) {
        n = !1;
      }
      return n;
    }
    function va(e) {
      var t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        a = t.minDate,
        r = t.includeDates,
        n = Oe.default(e, 1);
      return (
        (a && $e.default(a, n) > 0) ||
        (r &&
          r.every(function (e) {
            return $e.default(e, n) > 0;
          })) ||
        !1
      );
    }
    function ba(e) {
      var t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        a = t.maxDate,
        r = t.includeDates,
        n = ke.default(e, 1);
      return (
        (a && $e.default(n, a) > 0) ||
        (r &&
          r.every(function (e) {
            return $e.default(n, e) > 0;
          })) ||
        !1
      );
    }
    function wa(e) {
      var t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        a = t.minDate,
        r = t.includeDates,
        n = xe.default(e, 1);
      return (
        (a && ze.default(a, n) > 0) ||
        (r &&
          r.every(function (e) {
            return ze.default(e, n) > 0;
          })) ||
        !1
      );
    }
    function ka(e) {
      var t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        a = t.maxDate,
        r = t.includeDates,
        n = Ce.default(e, 1);
      return (
        (a && ze.default(n, a) > 0) ||
        (r &&
          r.every(function (e) {
            return ze.default(n, e) > 0;
          })) ||
        !1
      );
    }
    function Sa(e) {
      var t = e.minDate,
        a = e.includeDates;
      if (a && t) {
        var r = a.filter(function (e) {
          return Je.default(e, t) >= 0;
        });
        return Ve.default(r);
      }
      return a ? Ve.default(a) : t;
    }
    function Ca(e) {
      var t = e.maxDate,
        a = e.includeDates;
      if (a && t) {
        var r = a.filter(function (e) {
          return Je.default(e, t) <= 0;
        });
        return Ue.default(r);
      }
      return a ? Ue.default(a) : t;
    }
    function Ma() {
      for (
        var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
          t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : "react-datepicker__day--highlighted",
          a = new Map(),
          r = 0,
          n = e.length;
        r < n;
        r++
      ) {
        var o = e[r];
        if (me.default(o)) {
          var s = jt(o, "MM.dd.yyyy"),
            l = a.get(s) || [];
          l.includes(t) || (l.push(t), a.set(s, l));
        } else if ("object" === kt(o)) {
          var i = Object.keys(o),
            d = i[0],
            u = o[i[0]];
          if ("string" == typeof d && u.constructor === Array)
            for (var p = 0, c = u.length; p < c; p++) {
              var f = jt(u[p], "MM.dd.yyyy"),
                h = a.get(f) || [];
              h.includes(d) || (h.push(d), a.set(f, h));
            }
        }
      }
      return a;
    }
    function _a() {
      var e =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
        t =
          arguments.length > 1 && void 0 !== arguments[1]
            ? arguments[1]
            : "react-datepicker__day--holidays",
        a = new Map();
      return (
        e.forEach(function (e) {
          var r = e.date,
            n = e.holidayName;
          if (me.default(r)) {
            var o = jt(r, "MM.dd.yyyy"),
              s = a.get(o) || {};
            if (
              !("className" in s) ||
              s.className !== t ||
              ((l = s.holidayNames),
              (i = [n]),
              l.length !== i.length ||
                !l.every(function (e, t) {
                  return e === i[t];
                }))
            ) {
              var l, i;
              s.className = t;
              var d = s.holidayNames;
              (s.holidayNames = d ? [].concat(Tt(d), [n]) : [n]), a.set(o, s);
            }
          }
        }),
        a
      );
    }
    function Oa(e, t, a, r, n) {
      for (var o = n.length, s = [], l = 0; l < o; l++) {
        var i = ge.default(ve.default(e, Ye.default(n[l])), Ee.default(n[l])),
          d = ge.default(e, (a + 1) * r);
        ut.default(i, t) && pt.default(i, d) && s.push(n[l]);
      }
      return s;
    }
    function Pa(e) {
      return e < 10 ? "0".concat(e) : "".concat(e);
    }
    function xa(e) {
      var t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : qt,
        a = Math.ceil(Ae.default(e) / t) * t;
      return { startPeriod: a - (t - 1), endPeriod: a };
    }
    function Na(e) {
      var t = e.getSeconds(),
        a = e.getMilliseconds();
      return ft.default(e.getTime() - 1e3 * t - a);
    }
    function Ea(e, t, a, r) {
      for (var n = [], o = 0; o < 2 * t + 1; o++) {
        var s = e + t - o,
          l = !0;
        a && (l = Ae.default(a) <= s),
          r && l && (l = Ae.default(r) >= s),
          l && n.push(s);
      }
      return n;
    }
    var Ya = (function (e) {
      Pt(r, e);
      var a = Yt(r);
      function r(e) {
        var n;
        St(this, r),
          _t(Et((n = a.call(this, e))), "renderOptions", function () {
            var e = n.props.year,
              t = n.state.yearsList.map(function (t) {
                return ce.default.createElement(
                  "div",
                  {
                    className:
                      e === t
                        ? "react-datepicker__year-option react-datepicker__year-option--selected_year"
                        : "react-datepicker__year-option",
                    key: t,
                    onClick: n.onChange.bind(Et(n), t),
                    "aria-selected": e === t ? "true" : void 0,
                  },
                  e === t
                    ? ce.default.createElement(
                        "span",
                        {
                          className: "react-datepicker__year-option--selected",
                        },
                        "✓",
                      )
                    : "",
                  t,
                );
              }),
              a = n.props.minDate ? Ae.default(n.props.minDate) : null,
              r = n.props.maxDate ? Ae.default(n.props.maxDate) : null;
            return (
              (r &&
                n.state.yearsList.find(function (e) {
                  return e === r;
                })) ||
                t.unshift(
                  ce.default.createElement(
                    "div",
                    {
                      className: "react-datepicker__year-option",
                      key: "upcoming",
                      onClick: n.incrementYears,
                    },
                    ce.default.createElement("a", {
                      className:
                        "react-datepicker__navigation react-datepicker__navigation--years react-datepicker__navigation--years-upcoming",
                    }),
                  ),
                ),
              (a &&
                n.state.yearsList.find(function (e) {
                  return e === a;
                })) ||
                t.push(
                  ce.default.createElement(
                    "div",
                    {
                      className: "react-datepicker__year-option",
                      key: "previous",
                      onClick: n.decrementYears,
                    },
                    ce.default.createElement("a", {
                      className:
                        "react-datepicker__navigation react-datepicker__navigation--years react-datepicker__navigation--years-previous",
                    }),
                  ),
                ),
              t
            );
          }),
          _t(Et(n), "onChange", function (e) {
            n.props.onChange(e);
          }),
          _t(Et(n), "handleClickOutside", function () {
            n.props.onCancel();
          }),
          _t(Et(n), "shiftYears", function (e) {
            var t = n.state.yearsList.map(function (t) {
              return t + e;
            });
            n.setState({ yearsList: t });
          }),
          _t(Et(n), "incrementYears", function () {
            return n.shiftYears(1);
          }),
          _t(Et(n), "decrementYears", function () {
            return n.shiftYears(-1);
          });
        var o = e.yearDropdownItemNumber,
          s = e.scrollableYearDropdown,
          l = o || (s ? 10 : 5);
        return (
          (n.state = {
            yearsList: Ea(n.props.year, l, n.props.minDate, n.props.maxDate),
          }),
          (n.dropdownRef = t.createRef()),
          n
        );
      }
      return (
        Mt(r, [
          {
            key: "componentDidMount",
            value: function () {
              var e = this.dropdownRef.current;
              if (e) {
                var t = e.children ? Array.from(e.children) : null,
                  a = t
                    ? t.find(function (e) {
                        return e.ariaSelected;
                      })
                    : null;
                e.scrollTop = a
                  ? a.offsetTop + (a.clientHeight - e.clientHeight) / 2
                  : (e.scrollHeight - e.clientHeight) / 2;
              }
            },
          },
          {
            key: "render",
            value: function () {
              var e = he.default({
                "react-datepicker__year-dropdown": !0,
                "react-datepicker__year-dropdown--scrollable":
                  this.props.scrollableYearDropdown,
              });
              return ce.default.createElement(
                "div",
                { className: e, ref: this.dropdownRef },
                this.renderOptions(),
              );
            },
          },
        ]),
        r
      );
    })(ce.default.Component);
    _t(Ya, "propTypes", {
      minDate: fe.default.instanceOf(Date),
      maxDate: fe.default.instanceOf(Date),
      onCancel: fe.default.func.isRequired,
      onChange: fe.default.func.isRequired,
      scrollableYearDropdown: fe.default.bool,
      year: fe.default.number.isRequired,
      yearDropdownItemNumber: fe.default.number,
    });
    var Ta = Dt.default(Ya),
      Ia = (function (e) {
        Pt(a, e);
        var t = Yt(a);
        function a() {
          var e;
          St(this, a);
          for (var r = arguments.length, n = new Array(r), o = 0; o < r; o++)
            n[o] = arguments[o];
          return (
            _t(Et((e = t.call.apply(t, [this].concat(n)))), "state", {
              dropdownVisible: !1,
            }),
            _t(Et(e), "renderSelectOptions", function () {
              for (
                var t = e.props.minDate ? Ae.default(e.props.minDate) : 1900,
                  a = e.props.maxDate ? Ae.default(e.props.maxDate) : 2100,
                  r = [],
                  n = t;
                n <= a;
                n++
              )
                r.push(
                  ce.default.createElement("option", { key: n, value: n }, n),
                );
              return r;
            }),
            _t(Et(e), "onSelectChange", function (t) {
              e.onChange(t.target.value);
            }),
            _t(Et(e), "renderSelectMode", function () {
              return ce.default.createElement(
                "select",
                {
                  value: e.props.year,
                  className: "react-datepicker__year-select",
                  onChange: e.onSelectChange,
                },
                e.renderSelectOptions(),
              );
            }),
            _t(Et(e), "renderReadView", function (t) {
              return ce.default.createElement(
                "div",
                {
                  key: "read",
                  style: { visibility: t ? "visible" : "hidden" },
                  className: "react-datepicker__year-read-view",
                  onClick: function (t) {
                    return e.toggleDropdown(t);
                  },
                },
                ce.default.createElement("span", {
                  className: "react-datepicker__year-read-view--down-arrow",
                }),
                ce.default.createElement(
                  "span",
                  {
                    className:
                      "react-datepicker__year-read-view--selected-year",
                  },
                  e.props.year,
                ),
              );
            }),
            _t(Et(e), "renderDropdown", function () {
              return ce.default.createElement(Ta, {
                key: "dropdown",
                year: e.props.year,
                onChange: e.onChange,
                onCancel: e.toggleDropdown,
                minDate: e.props.minDate,
                maxDate: e.props.maxDate,
                scrollableYearDropdown: e.props.scrollableYearDropdown,
                yearDropdownItemNumber: e.props.yearDropdownItemNumber,
              });
            }),
            _t(Et(e), "renderScrollMode", function () {
              var t = e.state.dropdownVisible,
                a = [e.renderReadView(!t)];
              return t && a.unshift(e.renderDropdown()), a;
            }),
            _t(Et(e), "onChange", function (t) {
              e.toggleDropdown(), t !== e.props.year && e.props.onChange(t);
            }),
            _t(Et(e), "toggleDropdown", function (t) {
              e.setState(
                { dropdownVisible: !e.state.dropdownVisible },
                function () {
                  e.props.adjustDateOnChange &&
                    e.handleYearChange(e.props.date, t);
                },
              );
            }),
            _t(Et(e), "handleYearChange", function (t, a) {
              e.onSelect(t, a), e.setOpen();
            }),
            _t(Et(e), "onSelect", function (t, a) {
              e.props.onSelect && e.props.onSelect(t, a);
            }),
            _t(Et(e), "setOpen", function () {
              e.props.setOpen && e.props.setOpen(!0);
            }),
            e
          );
        }
        return (
          Mt(a, [
            {
              key: "render",
              value: function () {
                var e;
                switch (this.props.dropdownMode) {
                  case "scroll":
                    e = this.renderScrollMode();
                    break;
                  case "select":
                    e = this.renderSelectMode();
                }
                return ce.default.createElement(
                  "div",
                  {
                    className:
                      "react-datepicker__year-dropdown-container react-datepicker__year-dropdown-container--".concat(
                        this.props.dropdownMode,
                      ),
                  },
                  e,
                );
              },
            },
          ]),
          a
        );
      })(ce.default.Component);
    _t(Ia, "propTypes", {
      adjustDateOnChange: fe.default.bool,
      dropdownMode: fe.default.oneOf(["scroll", "select"]).isRequired,
      maxDate: fe.default.instanceOf(Date),
      minDate: fe.default.instanceOf(Date),
      onChange: fe.default.func.isRequired,
      scrollableYearDropdown: fe.default.bool,
      year: fe.default.number.isRequired,
      yearDropdownItemNumber: fe.default.number,
      date: fe.default.instanceOf(Date),
      onSelect: fe.default.func,
      setOpen: fe.default.func,
    });
    var Ra = (function (e) {
      Pt(a, e);
      var t = Yt(a);
      function a() {
        var e;
        St(this, a);
        for (var r = arguments.length, n = new Array(r), o = 0; o < r; o++)
          n[o] = arguments[o];
        return (
          _t(
            Et((e = t.call.apply(t, [this].concat(n)))),
            "isSelectedMonth",
            function (t) {
              return e.props.month === t;
            },
          ),
          _t(Et(e), "renderOptions", function () {
            return e.props.monthNames.map(function (t, a) {
              return ce.default.createElement(
                "div",
                {
                  className: e.isSelectedMonth(a)
                    ? "react-datepicker__month-option react-datepicker__month-option--selected_month"
                    : "react-datepicker__month-option",
                  key: t,
                  onClick: e.onChange.bind(Et(e), a),
                  "aria-selected": e.isSelectedMonth(a) ? "true" : void 0,
                },
                e.isSelectedMonth(a)
                  ? ce.default.createElement(
                      "span",
                      { className: "react-datepicker__month-option--selected" },
                      "✓",
                    )
                  : "",
                t,
              );
            });
          }),
          _t(Et(e), "onChange", function (t) {
            return e.props.onChange(t);
          }),
          _t(Et(e), "handleClickOutside", function () {
            return e.props.onCancel();
          }),
          e
        );
      }
      return (
        Mt(a, [
          {
            key: "render",
            value: function () {
              return ce.default.createElement(
                "div",
                { className: "react-datepicker__month-dropdown" },
                this.renderOptions(),
              );
            },
          },
        ]),
        a
      );
    })(ce.default.Component);
    _t(Ra, "propTypes", {
      onCancel: fe.default.func.isRequired,
      onChange: fe.default.func.isRequired,
      month: fe.default.number.isRequired,
      monthNames: fe.default.arrayOf(fe.default.string.isRequired).isRequired,
    });
    var La = Dt.default(Ra),
      Fa = (function (e) {
        Pt(a, e);
        var t = Yt(a);
        function a() {
          var e;
          St(this, a);
          for (var r = arguments.length, n = new Array(r), o = 0; o < r; o++)
            n[o] = arguments[o];
          return (
            _t(Et((e = t.call.apply(t, [this].concat(n)))), "state", {
              dropdownVisible: !1,
            }),
            _t(Et(e), "renderSelectOptions", function (e) {
              return e.map(function (e, t) {
                return ce.default.createElement(
                  "option",
                  { key: t, value: t },
                  e,
                );
              });
            }),
            _t(Et(e), "renderSelectMode", function (t) {
              return ce.default.createElement(
                "select",
                {
                  value: e.props.month,
                  className: "react-datepicker__month-select",
                  onChange: function (t) {
                    return e.onChange(t.target.value);
                  },
                },
                e.renderSelectOptions(t),
              );
            }),
            _t(Et(e), "renderReadView", function (t, a) {
              return ce.default.createElement(
                "div",
                {
                  key: "read",
                  style: { visibility: t ? "visible" : "hidden" },
                  className: "react-datepicker__month-read-view",
                  onClick: e.toggleDropdown,
                },
                ce.default.createElement("span", {
                  className: "react-datepicker__month-read-view--down-arrow",
                }),
                ce.default.createElement(
                  "span",
                  {
                    className:
                      "react-datepicker__month-read-view--selected-month",
                  },
                  a[e.props.month],
                ),
              );
            }),
            _t(Et(e), "renderDropdown", function (t) {
              return ce.default.createElement(La, {
                key: "dropdown",
                month: e.props.month,
                monthNames: t,
                onChange: e.onChange,
                onCancel: e.toggleDropdown,
              });
            }),
            _t(Et(e), "renderScrollMode", function (t) {
              var a = e.state.dropdownVisible,
                r = [e.renderReadView(!a, t)];
              return a && r.unshift(e.renderDropdown(t)), r;
            }),
            _t(Et(e), "onChange", function (t) {
              e.toggleDropdown(), t !== e.props.month && e.props.onChange(t);
            }),
            _t(Et(e), "toggleDropdown", function () {
              return e.setState({ dropdownVisible: !e.state.dropdownVisible });
            }),
            e
          );
        }
        return (
          Mt(a, [
            {
              key: "render",
              value: function () {
                var e,
                  t = this,
                  a = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map(
                    this.props.useShortMonthInDropdown
                      ? function (e) {
                          return sa(e, t.props.locale);
                        }
                      : function (e) {
                          return oa(e, t.props.locale);
                        },
                  );
                switch (this.props.dropdownMode) {
                  case "scroll":
                    e = this.renderScrollMode(a);
                    break;
                  case "select":
                    e = this.renderSelectMode(a);
                }
                return ce.default.createElement(
                  "div",
                  {
                    className:
                      "react-datepicker__month-dropdown-container react-datepicker__month-dropdown-container--".concat(
                        this.props.dropdownMode,
                      ),
                  },
                  e,
                );
              },
            },
          ]),
          a
        );
      })(ce.default.Component);
    function Aa(e, t) {
      for (var a = [], r = Ut(e), n = Ut(t); !ut.default(r, n); )
        a.push(Wt(r)), (r = ke.default(r, 1));
      return a;
    }
    _t(Fa, "propTypes", {
      dropdownMode: fe.default.oneOf(["scroll", "select"]).isRequired,
      locale: fe.default.string,
      month: fe.default.number.isRequired,
      onChange: fe.default.func.isRequired,
      useShortMonthInDropdown: fe.default.bool,
    });
    var qa = (function (e) {
      Pt(a, e);
      var t = Yt(a);
      function a(e) {
        var r;
        return (
          St(this, a),
          _t(Et((r = t.call(this, e))), "renderOptions", function () {
            return r.state.monthYearsList.map(function (e) {
              var t = qe.default(e),
                a = Gt(r.props.date, e) && Xt(r.props.date, e);
              return ce.default.createElement(
                "div",
                {
                  className: a
                    ? "react-datepicker__month-year-option--selected_month-year"
                    : "react-datepicker__month-year-option",
                  key: t,
                  onClick: r.onChange.bind(Et(r), t),
                  "aria-selected": a ? "true" : void 0,
                },
                a
                  ? ce.default.createElement(
                      "span",
                      {
                        className:
                          "react-datepicker__month-year-option--selected",
                      },
                      "✓",
                    )
                  : "",
                jt(e, r.props.dateFormat, r.props.locale),
              );
            });
          }),
          _t(Et(r), "onChange", function (e) {
            return r.props.onChange(e);
          }),
          _t(Et(r), "handleClickOutside", function () {
            r.props.onCancel();
          }),
          (r.state = { monthYearsList: Aa(r.props.minDate, r.props.maxDate) }),
          r
        );
      }
      return (
        Mt(a, [
          {
            key: "render",
            value: function () {
              var e = he.default({
                "react-datepicker__month-year-dropdown": !0,
                "react-datepicker__month-year-dropdown--scrollable":
                  this.props.scrollableMonthYearDropdown,
              });
              return ce.default.createElement(
                "div",
                { className: e },
                this.renderOptions(),
              );
            },
          },
        ]),
        a
      );
    })(ce.default.Component);
    _t(qa, "propTypes", {
      minDate: fe.default.instanceOf(Date).isRequired,
      maxDate: fe.default.instanceOf(Date).isRequired,
      onCancel: fe.default.func.isRequired,
      onChange: fe.default.func.isRequired,
      scrollableMonthYearDropdown: fe.default.bool,
      date: fe.default.instanceOf(Date).isRequired,
      dateFormat: fe.default.string.isRequired,
      locale: fe.default.string,
    });
    var Ba = Dt.default(qa),
      Wa = (function (e) {
        Pt(a, e);
        var t = Yt(a);
        function a() {
          var e;
          St(this, a);
          for (var r = arguments.length, n = new Array(r), o = 0; o < r; o++)
            n[o] = arguments[o];
          return (
            _t(Et((e = t.call.apply(t, [this].concat(n)))), "state", {
              dropdownVisible: !1,
            }),
            _t(Et(e), "renderSelectOptions", function () {
              for (
                var t = Ut(e.props.minDate), a = Ut(e.props.maxDate), r = [];
                !ut.default(t, a);

              ) {
                var n = qe.default(t);
                r.push(
                  ce.default.createElement(
                    "option",
                    { key: n, value: n },
                    jt(t, e.props.dateFormat, e.props.locale),
                  ),
                ),
                  (t = ke.default(t, 1));
              }
              return r;
            }),
            _t(Et(e), "onSelectChange", function (t) {
              e.onChange(t.target.value);
            }),
            _t(Et(e), "renderSelectMode", function () {
              return ce.default.createElement(
                "select",
                {
                  value: qe.default(Ut(e.props.date)),
                  className: "react-datepicker__month-year-select",
                  onChange: e.onSelectChange,
                },
                e.renderSelectOptions(),
              );
            }),
            _t(Et(e), "renderReadView", function (t) {
              var a = jt(e.props.date, e.props.dateFormat, e.props.locale);
              return ce.default.createElement(
                "div",
                {
                  key: "read",
                  style: { visibility: t ? "visible" : "hidden" },
                  className: "react-datepicker__month-year-read-view",
                  onClick: function (t) {
                    return e.toggleDropdown(t);
                  },
                },
                ce.default.createElement("span", {
                  className:
                    "react-datepicker__month-year-read-view--down-arrow",
                }),
                ce.default.createElement(
                  "span",
                  {
                    className:
                      "react-datepicker__month-year-read-view--selected-month-year",
                  },
                  a,
                ),
              );
            }),
            _t(Et(e), "renderDropdown", function () {
              return ce.default.createElement(Ba, {
                key: "dropdown",
                date: e.props.date,
                dateFormat: e.props.dateFormat,
                onChange: e.onChange,
                onCancel: e.toggleDropdown,
                minDate: e.props.minDate,
                maxDate: e.props.maxDate,
                scrollableMonthYearDropdown:
                  e.props.scrollableMonthYearDropdown,
                locale: e.props.locale,
              });
            }),
            _t(Et(e), "renderScrollMode", function () {
              var t = e.state.dropdownVisible,
                a = [e.renderReadView(!t)];
              return t && a.unshift(e.renderDropdown()), a;
            }),
            _t(Et(e), "onChange", function (t) {
              e.toggleDropdown();
              var a = Wt(parseInt(t));
              (Gt(e.props.date, a) && Xt(e.props.date, a)) ||
                e.props.onChange(a);
            }),
            _t(Et(e), "toggleDropdown", function () {
              return e.setState({ dropdownVisible: !e.state.dropdownVisible });
            }),
            e
          );
        }
        return (
          Mt(a, [
            {
              key: "render",
              value: function () {
                var e;
                switch (this.props.dropdownMode) {
                  case "scroll":
                    e = this.renderScrollMode();
                    break;
                  case "select":
                    e = this.renderSelectMode();
                }
                return ce.default.createElement(
                  "div",
                  {
                    className:
                      "react-datepicker__month-year-dropdown-container react-datepicker__month-year-dropdown-container--".concat(
                        this.props.dropdownMode,
                      ),
                  },
                  e,
                );
              },
            },
          ]),
          a
        );
      })(ce.default.Component);
    _t(Wa, "propTypes", {
      dropdownMode: fe.default.oneOf(["scroll", "select"]).isRequired,
      dateFormat: fe.default.string.isRequired,
      locale: fe.default.string,
      maxDate: fe.default.instanceOf(Date).isRequired,
      minDate: fe.default.instanceOf(Date).isRequired,
      date: fe.default.instanceOf(Date).isRequired,
      onChange: fe.default.func.isRequired,
      scrollableMonthYearDropdown: fe.default.bool,
    });
    var Ka = (function (e) {
      Pt(a, e);
      var t = Yt(a);
      function a() {
        var e;
        St(this, a);
        for (var r = arguments.length, n = new Array(r), o = 0; o < r; o++)
          n[o] = arguments[o];
        return (
          _t(
            Et((e = t.call.apply(t, [this].concat(n)))),
            "dayEl",
            ce.default.createRef(),
          ),
          _t(Et(e), "handleClick", function (t) {
            !e.isDisabled() && e.props.onClick && e.props.onClick(t);
          }),
          _t(Et(e), "handleMouseEnter", function (t) {
            !e.isDisabled() && e.props.onMouseEnter && e.props.onMouseEnter(t);
          }),
          _t(Et(e), "handleOnKeyDown", function (t) {
            " " === t.key && (t.preventDefault(), (t.key = "Enter")),
              e.props.handleOnKeyDown(t);
          }),
          _t(Et(e), "isSameDay", function (t) {
            return ea(e.props.day, t);
          }),
          _t(Et(e), "isKeyboardSelected", function () {
            return (
              !e.props.disabledKeyboardNavigation &&
              !e.isSameDay(e.props.selected) &&
              e.isSameDay(e.props.preSelection)
            );
          }),
          _t(Et(e), "isDisabled", function () {
            return la(e.props.day, e.props);
          }),
          _t(Et(e), "isExcluded", function () {
            return ia(e.props.day, e.props);
          }),
          _t(Et(e), "getHighLightedClass", function () {
            var t = e.props,
              a = t.day,
              r = t.highlightDates;
            if (!r) return !1;
            var n = jt(a, "MM.dd.yyyy");
            return r.get(n);
          }),
          _t(Et(e), "getHolidaysClass", function () {
            var t = e.props,
              a = t.day,
              r = t.holidays;
            if (!r) return !1;
            var n = jt(a, "MM.dd.yyyy");
            return r.has(n) ? [r.get(n).className] : void 0;
          }),
          _t(Et(e), "isInRange", function () {
            var t = e.props,
              a = t.day,
              r = t.startDate,
              n = t.endDate;
            return !(!r || !n) && aa(a, r, n);
          }),
          _t(Et(e), "isInSelectingRange", function () {
            var t,
              a = e.props,
              r = a.day,
              n = a.selectsStart,
              o = a.selectsEnd,
              s = a.selectsRange,
              l = a.selectsDisabledDaysInRange,
              i = a.startDate,
              d = a.endDate,
              u =
                null !== (t = e.props.selectingDate) && void 0 !== t
                  ? t
                  : e.props.preSelection;
            return (
              !(!(n || o || s) || !u || (!l && e.isDisabled())) &&
              (n && d && (pt.default(u, d) || ta(u, d))
                ? aa(r, u, d)
                : ((o && i && (ut.default(u, i) || ta(u, i))) ||
                    !(!s || !i || d || (!ut.default(u, i) && !ta(u, i)))) &&
                  aa(r, i, u))
            );
          }),
          _t(Et(e), "isSelectingRangeStart", function () {
            var t;
            if (!e.isInSelectingRange()) return !1;
            var a = e.props,
              r = a.day,
              n = a.startDate,
              o = a.selectsStart,
              s =
                null !== (t = e.props.selectingDate) && void 0 !== t
                  ? t
                  : e.props.preSelection;
            return ea(r, o ? s : n);
          }),
          _t(Et(e), "isSelectingRangeEnd", function () {
            var t;
            if (!e.isInSelectingRange()) return !1;
            var a = e.props,
              r = a.day,
              n = a.endDate,
              o = a.selectsEnd,
              s = a.selectsRange,
              l =
                null !== (t = e.props.selectingDate) && void 0 !== t
                  ? t
                  : e.props.preSelection;
            return ea(r, o || s ? l : n);
          }),
          _t(Et(e), "isRangeStart", function () {
            var t = e.props,
              a = t.day,
              r = t.startDate,
              n = t.endDate;
            return !(!r || !n) && ea(r, a);
          }),
          _t(Et(e), "isRangeEnd", function () {
            var t = e.props,
              a = t.day,
              r = t.startDate,
              n = t.endDate;
            return !(!r || !n) && ea(n, a);
          }),
          _t(Et(e), "isWeekend", function () {
            var t = Te.default(e.props.day);
            return 0 === t || 6 === t;
          }),
          _t(Et(e), "isAfterMonth", function () {
            return (
              void 0 !== e.props.month &&
              (e.props.month + 1) % 12 === Le.default(e.props.day)
            );
          }),
          _t(Et(e), "isBeforeMonth", function () {
            return (
              void 0 !== e.props.month &&
              (Le.default(e.props.day) + 1) % 12 === e.props.month
            );
          }),
          _t(Et(e), "isCurrentDay", function () {
            return e.isSameDay(Wt());
          }),
          _t(Et(e), "isSelected", function () {
            return e.isSameDay(e.props.selected);
          }),
          _t(Et(e), "getClassNames", function (t) {
            var a,
              r = e.props.dayClassName ? e.props.dayClassName(t) : void 0;
            return he.default(
              "react-datepicker__day",
              r,
              "react-datepicker__day--" + jt(e.props.day, "ddd", a),
              {
                "react-datepicker__day--disabled": e.isDisabled(),
                "react-datepicker__day--excluded": e.isExcluded(),
                "react-datepicker__day--selected": e.isSelected(),
                "react-datepicker__day--keyboard-selected":
                  e.isKeyboardSelected(),
                "react-datepicker__day--range-start": e.isRangeStart(),
                "react-datepicker__day--range-end": e.isRangeEnd(),
                "react-datepicker__day--in-range": e.isInRange(),
                "react-datepicker__day--in-selecting-range":
                  e.isInSelectingRange(),
                "react-datepicker__day--selecting-range-start":
                  e.isSelectingRangeStart(),
                "react-datepicker__day--selecting-range-end":
                  e.isSelectingRangeEnd(),
                "react-datepicker__day--today": e.isCurrentDay(),
                "react-datepicker__day--weekend": e.isWeekend(),
                "react-datepicker__day--outside-month":
                  e.isAfterMonth() || e.isBeforeMonth(),
              },
              e.getHighLightedClass("react-datepicker__day--highlighted"),
              e.getHolidaysClass(),
            );
          }),
          _t(Et(e), "getAriaLabel", function () {
            var t = e.props,
              a = t.day,
              r = t.ariaLabelPrefixWhenEnabled,
              n = void 0 === r ? "Choose" : r,
              o = t.ariaLabelPrefixWhenDisabled,
              s = void 0 === o ? "Not available" : o,
              l = e.isDisabled() || e.isExcluded() ? s : n;
            return "".concat(l, " ").concat(jt(a, "PPPP", e.props.locale));
          }),
          _t(Et(e), "getTitle", function () {
            var t = e.props,
              a = t.day,
              r = t.holidays,
              n = void 0 === r ? new Map() : r,
              o = jt(a, "MM.dd.yyyy");
            return n.has(o) && n.get(o).holidayNames.length > 0
              ? n.get(o).holidayNames.join(", ")
              : "";
          }),
          _t(Et(e), "getTabIndex", function (t, a) {
            var r = t || e.props.selected,
              n = a || e.props.preSelection;
            return e.isKeyboardSelected() || (e.isSameDay(r) && ea(n, r))
              ? 0
              : -1;
          }),
          _t(Et(e), "handleFocusDay", function () {
            var t,
              a =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {},
              r = !1;
            0 === e.getTabIndex() &&
              !a.isInputFocused &&
              e.isSameDay(e.props.preSelection) &&
              ((document.activeElement &&
                document.activeElement !== document.body) ||
                (r = !0),
              e.props.inline && !e.props.shouldFocusDayInline && (r = !1),
              e.props.containerRef &&
                e.props.containerRef.current &&
                e.props.containerRef.current.contains(document.activeElement) &&
                document.activeElement.classList.contains(
                  "react-datepicker__day",
                ) &&
                (r = !0),
              e.props.monthShowsDuplicateDaysEnd &&
                e.isAfterMonth() &&
                (r = !1),
              e.props.monthShowsDuplicateDaysStart &&
                e.isBeforeMonth() &&
                (r = !1)),
              r &&
                (null === (t = e.dayEl.current) ||
                  void 0 === t ||
                  t.focus({ preventScroll: !0 }));
          }),
          _t(Et(e), "renderDayContents", function () {
            return (e.props.monthShowsDuplicateDaysEnd && e.isAfterMonth()) ||
              (e.props.monthShowsDuplicateDaysStart && e.isBeforeMonth())
              ? null
              : e.props.renderDayContents
              ? e.props.renderDayContents(Ie.default(e.props.day), e.props.day)
              : Ie.default(e.props.day);
          }),
          _t(Et(e), "render", function () {
            return ce.default.createElement(
              "div",
              {
                ref: e.dayEl,
                className: e.getClassNames(e.props.day),
                onKeyDown: e.handleOnKeyDown,
                onClick: e.handleClick,
                onMouseEnter: e.handleMouseEnter,
                tabIndex: e.getTabIndex(),
                "aria-label": e.getAriaLabel(),
                role: "option",
                title: e.getTitle(),
                "aria-disabled": e.isDisabled(),
                "aria-current": e.isCurrentDay() ? "date" : void 0,
                "aria-selected": e.isSelected() || e.isInRange(),
              },
              e.renderDayContents(),
              "" !== e.getTitle() &&
                ce.default.createElement(
                  "span",
                  { className: "holiday-overlay" },
                  e.getTitle(),
                ),
            );
          }),
          e
        );
      }
      return (
        Mt(a, [
          {
            key: "componentDidMount",
            value: function () {
              this.handleFocusDay();
            },
          },
          {
            key: "componentDidUpdate",
            value: function (e) {
              this.handleFocusDay(e);
            },
          },
        ]),
        a
      );
    })(ce.default.Component);
    _t(Ka, "propTypes", {
      ariaLabelPrefixWhenEnabled: fe.default.string,
      ariaLabelPrefixWhenDisabled: fe.default.string,
      disabledKeyboardNavigation: fe.default.bool,
      day: fe.default.instanceOf(Date).isRequired,
      dayClassName: fe.default.func,
      endDate: fe.default.instanceOf(Date),
      highlightDates: fe.default.instanceOf(Map),
      holidays: fe.default.instanceOf(Map),
      inline: fe.default.bool,
      shouldFocusDayInline: fe.default.bool,
      month: fe.default.number,
      onClick: fe.default.func,
      onMouseEnter: fe.default.func,
      preSelection: fe.default.instanceOf(Date),
      selected: fe.default.object,
      selectingDate: fe.default.instanceOf(Date),
      selectsEnd: fe.default.bool,
      selectsStart: fe.default.bool,
      selectsRange: fe.default.bool,
      selectsDisabledDaysInRange: fe.default.bool,
      startDate: fe.default.instanceOf(Date),
      renderDayContents: fe.default.func,
      handleOnKeyDown: fe.default.func,
      containerRef: fe.default.oneOfType([
        fe.default.func,
        fe.default.shape({ current: fe.default.object }),
      ]),
      monthShowsDuplicateDaysEnd: fe.default.bool,
      monthShowsDuplicateDaysStart: fe.default.bool,
      locale: fe.default.oneOfType([
        fe.default.string,
        fe.default.shape({ locale: fe.default.object }),
      ]),
    });
    var ja = (function (e) {
      Pt(a, e);
      var t = Yt(a);
      function a() {
        var e;
        St(this, a);
        for (var r = arguments.length, n = new Array(r), o = 0; o < r; o++)
          n[o] = arguments[o];
        return (
          _t(
            Et((e = t.call.apply(t, [this].concat(n)))),
            "handleClick",
            function (t) {
              e.props.onClick && e.props.onClick(t);
            },
          ),
          e
        );
      }
      return (
        Mt(
          a,
          [
            {
              key: "render",
              value: function () {
                var e = this.props,
                  t = e.weekNumber,
                  a = e.ariaLabelPrefix,
                  r = void 0 === a ? "week " : a,
                  n = {
                    "react-datepicker__week-number": !0,
                    "react-datepicker__week-number--clickable": !!e.onClick,
                  };
                return ce.default.createElement(
                  "div",
                  {
                    className: he.default(n),
                    "aria-label": ""
                      .concat(r, " ")
                      .concat(this.props.weekNumber),
                    onClick: this.handleClick,
                  },
                  t,
                );
              },
            },
          ],
          [
            {
              key: "defaultProps",
              get: function () {
                return { ariaLabelPrefix: "week " };
              },
            },
          ],
        ),
        a
      );
    })(ce.default.Component);
    _t(ja, "propTypes", {
      weekNumber: fe.default.number.isRequired,
      onClick: fe.default.func,
      ariaLabelPrefix: fe.default.string,
    });
    var Qa,
      Ha = (function (e) {
        Pt(a, e);
        var t = Yt(a);
        function a() {
          var e;
          St(this, a);
          for (var r = arguments.length, n = new Array(r), o = 0; o < r; o++)
            n[o] = arguments[o];
          return (
            _t(
              Et((e = t.call.apply(t, [this].concat(n)))),
              "handleDayClick",
              function (t, a) {
                e.props.onDayClick && e.props.onDayClick(t, a);
              },
            ),
            _t(Et(e), "handleDayMouseEnter", function (t) {
              e.props.onDayMouseEnter && e.props.onDayMouseEnter(t);
            }),
            _t(Et(e), "handleWeekClick", function (t, a, r) {
              "function" == typeof e.props.onWeekSelect &&
                e.props.onWeekSelect(t, a, r),
                e.props.shouldCloseOnSelect && e.props.setOpen(!1);
            }),
            _t(Et(e), "formatWeekNumber", function (t) {
              return e.props.formatWeekNumber
                ? e.props.formatWeekNumber(t)
                : (function (e, t) {
                    var a = (t && na(t)) || (ra() && na(ra()));
                    return Re.default(e, a ? { locale: a } : null);
                  })(t);
            }),
            _t(Et(e), "renderDays", function () {
              var t = Vt(e.props.day, e.props.locale, e.props.calendarStartDay),
                a = [],
                r = e.formatWeekNumber(t);
              if (e.props.showWeekNumber) {
                var n = e.props.onWeekSelect
                  ? e.handleWeekClick.bind(Et(e), t, r)
                  : void 0;
                a.push(
                  ce.default.createElement(ja, {
                    key: "W",
                    weekNumber: r,
                    onClick: n,
                    ariaLabelPrefix: e.props.ariaLabelPrefix,
                  }),
                );
              }
              return a.concat(
                [0, 1, 2, 3, 4, 5, 6].map(function (a) {
                  var r = be.default(t, a);
                  return ce.default.createElement(Ka, {
                    ariaLabelPrefixWhenEnabled:
                      e.props.chooseDayAriaLabelPrefix,
                    ariaLabelPrefixWhenDisabled:
                      e.props.disabledDayAriaLabelPrefix,
                    key: r.valueOf(),
                    day: r,
                    month: e.props.month,
                    onClick: e.handleDayClick.bind(Et(e), r),
                    onMouseEnter: e.handleDayMouseEnter.bind(Et(e), r),
                    minDate: e.props.minDate,
                    maxDate: e.props.maxDate,
                    excludeDates: e.props.excludeDates,
                    excludeDateIntervals: e.props.excludeDateIntervals,
                    includeDates: e.props.includeDates,
                    includeDateIntervals: e.props.includeDateIntervals,
                    highlightDates: e.props.highlightDates,
                    holidays: e.props.holidays,
                    selectingDate: e.props.selectingDate,
                    filterDate: e.props.filterDate,
                    preSelection: e.props.preSelection,
                    selected: e.props.selected,
                    selectsStart: e.props.selectsStart,
                    selectsEnd: e.props.selectsEnd,
                    selectsRange: e.props.selectsRange,
                    selectsDisabledDaysInRange:
                      e.props.selectsDisabledDaysInRange,
                    startDate: e.props.startDate,
                    endDate: e.props.endDate,
                    dayClassName: e.props.dayClassName,
                    renderDayContents: e.props.renderDayContents,
                    disabledKeyboardNavigation:
                      e.props.disabledKeyboardNavigation,
                    handleOnKeyDown: e.props.handleOnKeyDown,
                    isInputFocused: e.props.isInputFocused,
                    containerRef: e.props.containerRef,
                    inline: e.props.inline,
                    shouldFocusDayInline: e.props.shouldFocusDayInline,
                    monthShowsDuplicateDaysEnd:
                      e.props.monthShowsDuplicateDaysEnd,
                    monthShowsDuplicateDaysStart:
                      e.props.monthShowsDuplicateDaysStart,
                    locale: e.props.locale,
                  });
                }),
              );
            }),
            e
          );
        }
        return (
          Mt(
            a,
            [
              {
                key: "render",
                value: function () {
                  return ce.default.createElement(
                    "div",
                    { className: "react-datepicker__week" },
                    this.renderDays(),
                  );
                },
              },
            ],
            [
              {
                key: "defaultProps",
                get: function () {
                  return { shouldCloseOnSelect: !0 };
                },
              },
            ],
          ),
          a
        );
      })(ce.default.Component);
    _t(Ha, "propTypes", {
      ariaLabelPrefix: fe.default.string,
      disabledKeyboardNavigation: fe.default.bool,
      day: fe.default.instanceOf(Date).isRequired,
      dayClassName: fe.default.func,
      disabledDayAriaLabelPrefix: fe.default.string,
      chooseDayAriaLabelPrefix: fe.default.string,
      endDate: fe.default.instanceOf(Date),
      excludeDates: fe.default.array,
      excludeDateIntervals: fe.default.arrayOf(
        fe.default.shape({
          start: fe.default.instanceOf(Date),
          end: fe.default.instanceOf(Date),
        }),
      ),
      filterDate: fe.default.func,
      formatWeekNumber: fe.default.func,
      highlightDates: fe.default.instanceOf(Map),
      holidays: fe.default.instanceOf(Map),
      includeDates: fe.default.array,
      includeDateIntervals: fe.default.array,
      inline: fe.default.bool,
      shouldFocusDayInline: fe.default.bool,
      locale: fe.default.oneOfType([
        fe.default.string,
        fe.default.shape({ locale: fe.default.object }),
      ]),
      maxDate: fe.default.instanceOf(Date),
      calendarStartDay: fe.default.number,
      minDate: fe.default.instanceOf(Date),
      month: fe.default.number,
      onDayClick: fe.default.func,
      onDayMouseEnter: fe.default.func,
      onWeekSelect: fe.default.func,
      preSelection: fe.default.instanceOf(Date),
      selected: fe.default.instanceOf(Date),
      selectingDate: fe.default.instanceOf(Date),
      selectsEnd: fe.default.bool,
      selectsStart: fe.default.bool,
      selectsRange: fe.default.bool,
      selectsDisabledDaysInRange: fe.default.bool,
      showWeekNumber: fe.default.bool,
      startDate: fe.default.instanceOf(Date),
      setOpen: fe.default.func,
      shouldCloseOnSelect: fe.default.bool,
      renderDayContents: fe.default.func,
      handleOnKeyDown: fe.default.func,
      isInputFocused: fe.default.bool,
      containerRef: fe.default.oneOfType([
        fe.default.func,
        fe.default.shape({ current: fe.default.object }),
      ]),
      monthShowsDuplicateDaysEnd: fe.default.bool,
      monthShowsDuplicateDaysStart: fe.default.bool,
    });
    var Va = "two_columns",
      Ua = "three_columns",
      Ja = "four_columns",
      $a =
        (_t((Qa = {}), Va, {
          grid: [
            [0, 1],
            [2, 3],
            [4, 5],
            [6, 7],
            [8, 9],
            [10, 11],
          ],
          verticalNavigationOffset: 2,
        }),
        _t(Qa, Ua, {
          grid: [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [9, 10, 11],
          ],
          verticalNavigationOffset: 3,
        }),
        _t(Qa, Ja, {
          grid: [
            [0, 1, 2, 3],
            [4, 5, 6, 7],
            [8, 9, 10, 11],
          ],
          verticalNavigationOffset: 4,
        }),
        Qa);
    function za(e, t) {
      return e ? Ja : t ? Va : Ua;
    }
    var Ga = (function (e) {
      Pt(a, e);
      var t = Yt(a);
      function a() {
        var e;
        St(this, a);
        for (var r = arguments.length, n = new Array(r), o = 0; o < r; o++)
          n[o] = arguments[o];
        return (
          _t(
            Et((e = t.call.apply(t, [this].concat(n)))),
            "MONTH_REFS",
            Tt(Array(12)).map(function () {
              return ce.default.createRef();
            }),
          ),
          _t(
            Et(e),
            "QUARTER_REFS",
            Tt(Array(4)).map(function () {
              return ce.default.createRef();
            }),
          ),
          _t(Et(e), "isDisabled", function (t) {
            return la(t, e.props);
          }),
          _t(Et(e), "isExcluded", function (t) {
            return ia(t, e.props);
          }),
          _t(Et(e), "handleDayClick", function (t, a) {
            e.props.onDayClick &&
              e.props.onDayClick(t, a, e.props.orderInDisplay);
          }),
          _t(Et(e), "handleDayMouseEnter", function (t) {
            e.props.onDayMouseEnter && e.props.onDayMouseEnter(t);
          }),
          _t(Et(e), "handleMouseLeave", function () {
            e.props.onMouseLeave && e.props.onMouseLeave();
          }),
          _t(Et(e), "isRangeStartMonth", function (t) {
            var a = e.props,
              r = a.day,
              n = a.startDate,
              o = a.endDate;
            return !(!n || !o) && Xt(je.default(r, t), n);
          }),
          _t(Et(e), "isRangeStartQuarter", function (t) {
            var a = e.props,
              r = a.day,
              n = a.startDate,
              o = a.endDate;
            return !(!n || !o) && Zt(Qe.default(r, t), n);
          }),
          _t(Et(e), "isRangeEndMonth", function (t) {
            var a = e.props,
              r = a.day,
              n = a.startDate,
              o = a.endDate;
            return !(!n || !o) && Xt(je.default(r, t), o);
          }),
          _t(Et(e), "isRangeEndQuarter", function (t) {
            var a = e.props,
              r = a.day,
              n = a.startDate,
              o = a.endDate;
            return !(!n || !o) && Zt(Qe.default(r, t), o);
          }),
          _t(Et(e), "isInSelectingRangeMonth", function (t) {
            var a,
              r = e.props,
              n = r.day,
              o = r.selectsStart,
              s = r.selectsEnd,
              l = r.selectsRange,
              i = r.startDate,
              d = r.endDate,
              u =
                null !== (a = e.props.selectingDate) && void 0 !== a
                  ? a
                  : e.props.preSelection;
            return (
              !(!(o || s || l) || !u) &&
              (o && d
                ? ua(u, d, t, n)
                : ((s && i) || !(!l || !i || d)) && ua(i, u, t, n))
            );
          }),
          _t(Et(e), "isSelectingMonthRangeStart", function (t) {
            var a;
            if (!e.isInSelectingRangeMonth(t)) return !1;
            var r = e.props,
              n = r.day,
              o = r.startDate,
              s = r.selectsStart,
              l = je.default(n, t),
              i =
                null !== (a = e.props.selectingDate) && void 0 !== a
                  ? a
                  : e.props.preSelection;
            return Xt(l, s ? i : o);
          }),
          _t(Et(e), "isSelectingMonthRangeEnd", function (t) {
            var a;
            if (!e.isInSelectingRangeMonth(t)) return !1;
            var r = e.props,
              n = r.day,
              o = r.endDate,
              s = r.selectsEnd,
              l = r.selectsRange,
              i = je.default(n, t),
              d =
                null !== (a = e.props.selectingDate) && void 0 !== a
                  ? a
                  : e.props.preSelection;
            return Xt(i, s || l ? d : o);
          }),
          _t(Et(e), "isInSelectingRangeQuarter", function (t) {
            var a,
              r = e.props,
              n = r.day,
              o = r.selectsStart,
              s = r.selectsEnd,
              l = r.selectsRange,
              i = r.startDate,
              d = r.endDate,
              u =
                null !== (a = e.props.selectingDate) && void 0 !== a
                  ? a
                  : e.props.preSelection;
            return (
              !(!(o || s || l) || !u) &&
              (o && d
                ? ha(u, d, t, n)
                : ((s && i) || !(!l || !i || d)) && ha(i, u, t, n))
            );
          }),
          _t(Et(e), "isWeekInMonth", function (t) {
            var a = e.props.day,
              r = be.default(t, 6);
            return Xt(t, a) || Xt(r, a);
          }),
          _t(Et(e), "isCurrentMonth", function (e, t) {
            return Ae.default(e) === Ae.default(Wt()) && t === Le.default(Wt());
          }),
          _t(Et(e), "isCurrentQuarter", function (e, t) {
            return Ae.default(e) === Ae.default(Wt()) && t === Fe.default(Wt());
          }),
          _t(Et(e), "isSelectedMonth", function (e, t, a) {
            return Le.default(a) === t && Ae.default(e) === Ae.default(a);
          }),
          _t(Et(e), "isSelectedQuarter", function (e, t, a) {
            return Fe.default(e) === t && Ae.default(e) === Ae.default(a);
          }),
          _t(Et(e), "renderWeeks", function () {
            for (
              var t = [],
                a = e.props.fixedHeight,
                r = 0,
                n = !1,
                o = Vt(
                  Ut(e.props.day),
                  e.props.locale,
                  e.props.calendarStartDay,
                );
              t.push(
                ce.default.createElement(Ha, {
                  ariaLabelPrefix: e.props.weekAriaLabelPrefix,
                  chooseDayAriaLabelPrefix: e.props.chooseDayAriaLabelPrefix,
                  disabledDayAriaLabelPrefix:
                    e.props.disabledDayAriaLabelPrefix,
                  key: r,
                  day: o,
                  month: Le.default(e.props.day),
                  onDayClick: e.handleDayClick,
                  onDayMouseEnter: e.handleDayMouseEnter,
                  onWeekSelect: e.props.onWeekSelect,
                  formatWeekNumber: e.props.formatWeekNumber,
                  locale: e.props.locale,
                  minDate: e.props.minDate,
                  maxDate: e.props.maxDate,
                  excludeDates: e.props.excludeDates,
                  excludeDateIntervals: e.props.excludeDateIntervals,
                  includeDates: e.props.includeDates,
                  includeDateIntervals: e.props.includeDateIntervals,
                  inline: e.props.inline,
                  shouldFocusDayInline: e.props.shouldFocusDayInline,
                  highlightDates: e.props.highlightDates,
                  holidays: e.props.holidays,
                  selectingDate: e.props.selectingDate,
                  filterDate: e.props.filterDate,
                  preSelection: e.props.preSelection,
                  selected: e.props.selected,
                  selectsStart: e.props.selectsStart,
                  selectsEnd: e.props.selectsEnd,
                  selectsRange: e.props.selectsRange,
                  selectsDisabledDaysInRange:
                    e.props.selectsDisabledDaysInRange,
                  showWeekNumber: e.props.showWeekNumbers,
                  startDate: e.props.startDate,
                  endDate: e.props.endDate,
                  dayClassName: e.props.dayClassName,
                  setOpen: e.props.setOpen,
                  shouldCloseOnSelect: e.props.shouldCloseOnSelect,
                  disabledKeyboardNavigation:
                    e.props.disabledKeyboardNavigation,
                  renderDayContents: e.props.renderDayContents,
                  handleOnKeyDown: e.props.handleOnKeyDown,
                  isInputFocused: e.props.isInputFocused,
                  containerRef: e.props.containerRef,
                  calendarStartDay: e.props.calendarStartDay,
                  monthShowsDuplicateDaysEnd:
                    e.props.monthShowsDuplicateDaysEnd,
                  monthShowsDuplicateDaysStart:
                    e.props.monthShowsDuplicateDaysStart,
                }),
              ),
                !n;

            ) {
              r++, (o = we.default(o, 1));
              var s = a && r >= 6,
                l = !a && !e.isWeekInMonth(o);
              if (s || l) {
                if (!e.props.peekNextMonth) break;
                n = !0;
              }
            }
            return t;
          }),
          _t(Et(e), "onMonthClick", function (t, a) {
            e.handleDayClick(Ut(je.default(e.props.day, a)), t);
          }),
          _t(Et(e), "onMonthMouseEnter", function (t) {
            e.handleDayMouseEnter(Ut(je.default(e.props.day, t)));
          }),
          _t(Et(e), "handleMonthNavigation", function (t, a) {
            e.isDisabled(a) ||
              e.isExcluded(a) ||
              (e.props.setPreSelection(a),
              e.MONTH_REFS[t].current && e.MONTH_REFS[t].current.focus());
          }),
          _t(Et(e), "onMonthKeyDown", function (t, a) {
            var r = e.props,
              n = r.selected,
              o = r.preSelection,
              s = r.disabledKeyboardNavigation,
              l = r.showTwoColumnMonthYearPicker,
              i = r.showFourColumnMonthYearPicker,
              d = r.setPreSelection,
              u = t.key;
            if (("Tab" !== u && t.preventDefault(), !s)) {
              var p = za(i, l),
                c = $a[p].verticalNavigationOffset,
                f = $a[p].grid;
              switch (u) {
                case "Enter":
                  e.onMonthClick(t, a), d(n);
                  break;
                case "ArrowRight":
                  e.handleMonthNavigation(
                    11 === a ? 0 : a + 1,
                    ke.default(o, 1),
                  );
                  break;
                case "ArrowLeft":
                  e.handleMonthNavigation(
                    0 === a ? 11 : a - 1,
                    Oe.default(o, 1),
                  );
                  break;
                case "ArrowUp":
                  e.handleMonthNavigation(
                    f[0].includes(a) ? a + 12 - c : a - c,
                    Oe.default(o, c),
                  );
                  break;
                case "ArrowDown":
                  e.handleMonthNavigation(
                    f[f.length - 1].includes(a) ? a - 12 + c : a + c,
                    ke.default(o, c),
                  );
              }
            }
          }),
          _t(Et(e), "onQuarterClick", function (t, a) {
            e.handleDayClick($t(Qe.default(e.props.day, a)), t);
          }),
          _t(Et(e), "onQuarterMouseEnter", function (t) {
            e.handleDayMouseEnter($t(Qe.default(e.props.day, t)));
          }),
          _t(Et(e), "handleQuarterNavigation", function (t, a) {
            e.isDisabled(a) ||
              e.isExcluded(a) ||
              (e.props.setPreSelection(a),
              e.QUARTER_REFS[t - 1].current &&
                e.QUARTER_REFS[t - 1].current.focus());
          }),
          _t(Et(e), "onQuarterKeyDown", function (t, a) {
            var r = t.key;
            if (!e.props.disabledKeyboardNavigation)
              switch (r) {
                case "Enter":
                  e.onQuarterClick(t, a),
                    e.props.setPreSelection(e.props.selected);
                  break;
                case "ArrowRight":
                  e.handleQuarterNavigation(
                    4 === a ? 1 : a + 1,
                    Se.default(e.props.preSelection, 1),
                  );
                  break;
                case "ArrowLeft":
                  e.handleQuarterNavigation(
                    1 === a ? 4 : a - 1,
                    Pe.default(e.props.preSelection, 1),
                  );
              }
          }),
          _t(Et(e), "getMonthClassNames", function (t) {
            var a = e.props,
              r = a.day,
              n = a.startDate,
              o = a.endDate,
              s = a.selected,
              l = a.minDate,
              i = a.maxDate,
              d = a.preSelection,
              u = a.monthClassName,
              p = a.excludeDates,
              c = a.includeDates,
              f = u ? u(je.default(r, t)) : void 0,
              h = je.default(r, t);
            return he.default(
              "react-datepicker__month-text",
              "react-datepicker__month-".concat(t),
              f,
              {
                "react-datepicker__month-text--disabled":
                  (l || i || p || c) && da(h, e.props),
                "react-datepicker__month-text--selected": e.isSelectedMonth(
                  r,
                  t,
                  s,
                ),
                "react-datepicker__month-text--keyboard-selected":
                  !e.props.disabledKeyboardNavigation && Le.default(d) === t,
                "react-datepicker__month-text--in-selecting-range":
                  e.isInSelectingRangeMonth(t),
                "react-datepicker__month-text--in-range": ua(n, o, t, r),
                "react-datepicker__month-text--range-start":
                  e.isRangeStartMonth(t),
                "react-datepicker__month-text--range-end": e.isRangeEndMonth(t),
                "react-datepicker__month-text--selecting-range-start":
                  e.isSelectingMonthRangeStart(t),
                "react-datepicker__month-text--selecting-range-end":
                  e.isSelectingMonthRangeEnd(t),
                "react-datepicker__month-text--today": e.isCurrentMonth(r, t),
              },
            );
          }),
          _t(Et(e), "getTabIndex", function (t) {
            var a = Le.default(e.props.preSelection);
            return e.props.disabledKeyboardNavigation || t !== a ? "-1" : "0";
          }),
          _t(Et(e), "getQuarterTabIndex", function (t) {
            var a = Fe.default(e.props.preSelection);
            return e.props.disabledKeyboardNavigation || t !== a ? "-1" : "0";
          }),
          _t(Et(e), "getAriaLabel", function (t) {
            var a = e.props,
              r = a.chooseDayAriaLabelPrefix,
              n = void 0 === r ? "Choose" : r,
              o = a.disabledDayAriaLabelPrefix,
              s = void 0 === o ? "Not available" : o,
              l = a.day,
              i = je.default(l, t),
              d = e.isDisabled(i) || e.isExcluded(i) ? s : n;
            return "".concat(d, " ").concat(jt(i, "MMMM yyyy"));
          }),
          _t(Et(e), "getQuarterClassNames", function (t) {
            var a = e.props,
              r = a.day,
              n = a.startDate,
              o = a.endDate,
              s = a.selected,
              l = a.minDate,
              i = a.maxDate,
              d = a.preSelection;
            return he.default(
              "react-datepicker__quarter-text",
              "react-datepicker__quarter-".concat(t),
              {
                "react-datepicker__quarter-text--disabled":
                  (l || i) && pa(Qe.default(r, t), e.props),
                "react-datepicker__quarter-text--selected": e.isSelectedQuarter(
                  r,
                  t,
                  s,
                ),
                "react-datepicker__quarter-text--keyboard-selected":
                  Fe.default(d) === t,
                "react-datepicker__quarter-text--in-selecting-range":
                  e.isInSelectingRangeQuarter(t),
                "react-datepicker__quarter-text--in-range": ha(n, o, t, r),
                "react-datepicker__quarter-text--range-start":
                  e.isRangeStartQuarter(t),
                "react-datepicker__quarter-text--range-end":
                  e.isRangeEndQuarter(t),
              },
            );
          }),
          _t(Et(e), "getMonthContent", function (t) {
            var a = e.props,
              r = a.showFullMonthYearPicker,
              n = a.renderMonthContent,
              o = a.locale,
              s = sa(t, o),
              l = oa(t, o);
            return n ? n(t, s, l) : r ? l : s;
          }),
          _t(Et(e), "getQuarterContent", function (t) {
            var a = e.props,
              r = a.renderQuarterContent,
              n = (function (e, t) {
                return jt(Qe.default(Wt(), e), "QQQ", t);
              })(t, a.locale);
            return r ? r(t, n) : n;
          }),
          _t(Et(e), "renderMonths", function () {
            var t = e.props,
              a = t.showTwoColumnMonthYearPicker,
              r = t.showFourColumnMonthYearPicker,
              n = t.day,
              o = t.selected;
            return $a[za(r, a)].grid.map(function (t, a) {
              return ce.default.createElement(
                "div",
                { className: "react-datepicker__month-wrapper", key: a },
                t.map(function (t, a) {
                  return ce.default.createElement(
                    "div",
                    {
                      ref: e.MONTH_REFS[t],
                      key: a,
                      onClick: function (a) {
                        e.onMonthClick(a, t);
                      },
                      onKeyDown: function (a) {
                        e.onMonthKeyDown(a, t);
                      },
                      onMouseEnter: function () {
                        return e.onMonthMouseEnter(t);
                      },
                      tabIndex: e.getTabIndex(t),
                      className: e.getMonthClassNames(t),
                      role: "option",
                      "aria-label": e.getAriaLabel(t),
                      "aria-current": e.isCurrentMonth(n, t) ? "date" : void 0,
                      "aria-selected": e.isSelectedMonth(n, t, o),
                    },
                    e.getMonthContent(t),
                  );
                }),
              );
            });
          }),
          _t(Et(e), "renderQuarters", function () {
            var t = e.props,
              a = t.day,
              r = t.selected;
            return ce.default.createElement(
              "div",
              { className: "react-datepicker__quarter-wrapper" },
              [1, 2, 3, 4].map(function (t, n) {
                return ce.default.createElement(
                  "div",
                  {
                    key: n,
                    ref: e.QUARTER_REFS[n],
                    role: "option",
                    onClick: function (a) {
                      e.onQuarterClick(a, t);
                    },
                    onKeyDown: function (a) {
                      e.onQuarterKeyDown(a, t);
                    },
                    onMouseEnter: function () {
                      return e.onQuarterMouseEnter(t);
                    },
                    className: e.getQuarterClassNames(t),
                    "aria-selected": e.isSelectedQuarter(a, t, r),
                    tabIndex: e.getQuarterTabIndex(t),
                    "aria-current": e.isCurrentQuarter(a, t) ? "date" : void 0,
                  },
                  e.getQuarterContent(t),
                );
              }),
            );
          }),
          _t(Et(e), "getClassNames", function () {
            var t = e.props,
              a = t.selectingDate,
              r = t.selectsStart,
              n = t.selectsEnd,
              o = t.showMonthYearPicker,
              s = t.showQuarterYearPicker;
            return he.default(
              "react-datepicker__month",
              { "react-datepicker__month--selecting-range": a && (r || n) },
              { "react-datepicker__monthPicker": o },
              { "react-datepicker__quarterPicker": s },
            );
          }),
          e
        );
      }
      return (
        Mt(a, [
          {
            key: "render",
            value: function () {
              var e = this.props,
                t = e.showMonthYearPicker,
                a = e.showQuarterYearPicker,
                r = e.day,
                n = e.ariaLabelPrefix,
                o = void 0 === n ? "month " : n;
              return ce.default.createElement(
                "div",
                {
                  className: this.getClassNames(),
                  onMouseLeave: this.handleMouseLeave,
                  "aria-label": "".concat(o, " ").concat(jt(r, "yyyy-MM")),
                  role: "listbox",
                },
                t
                  ? this.renderMonths()
                  : a
                  ? this.renderQuarters()
                  : this.renderWeeks(),
              );
            },
          },
        ]),
        a
      );
    })(ce.default.Component);
    _t(Ga, "propTypes", {
      ariaLabelPrefix: fe.default.string,
      chooseDayAriaLabelPrefix: fe.default.string,
      disabledDayAriaLabelPrefix: fe.default.string,
      disabledKeyboardNavigation: fe.default.bool,
      day: fe.default.instanceOf(Date).isRequired,
      dayClassName: fe.default.func,
      monthClassName: fe.default.func,
      endDate: fe.default.instanceOf(Date),
      orderInDisplay: fe.default.number,
      excludeDates: fe.default.array,
      excludeDateIntervals: fe.default.arrayOf(
        fe.default.shape({
          start: fe.default.instanceOf(Date),
          end: fe.default.instanceOf(Date),
        }),
      ),
      filterDate: fe.default.func,
      fixedHeight: fe.default.bool,
      formatWeekNumber: fe.default.func,
      highlightDates: fe.default.instanceOf(Map),
      holidays: fe.default.PropTypes.instanceOf(Map),
      includeDates: fe.default.array,
      includeDateIntervals: fe.default.array,
      inline: fe.default.bool,
      shouldFocusDayInline: fe.default.bool,
      locale: fe.default.oneOfType([
        fe.default.string,
        fe.default.shape({ locale: fe.default.object }),
      ]),
      maxDate: fe.default.instanceOf(Date),
      minDate: fe.default.instanceOf(Date),
      onDayClick: fe.default.func,
      onDayMouseEnter: fe.default.func,
      onMouseLeave: fe.default.func,
      onWeekSelect: fe.default.func,
      peekNextMonth: fe.default.bool,
      preSelection: fe.default.instanceOf(Date),
      setPreSelection: fe.default.func,
      selected: fe.default.instanceOf(Date),
      selectingDate: fe.default.instanceOf(Date),
      calendarStartDay: fe.default.number,
      selectsEnd: fe.default.bool,
      selectsStart: fe.default.bool,
      selectsRange: fe.default.bool,
      selectsDisabledDaysInRange: fe.default.bool,
      showWeekNumbers: fe.default.bool,
      startDate: fe.default.instanceOf(Date),
      setOpen: fe.default.func,
      shouldCloseOnSelect: fe.default.bool,
      renderDayContents: fe.default.func,
      renderMonthContent: fe.default.func,
      renderQuarterContent: fe.default.func,
      showMonthYearPicker: fe.default.bool,
      showFullMonthYearPicker: fe.default.bool,
      showTwoColumnMonthYearPicker: fe.default.bool,
      showFourColumnMonthYearPicker: fe.default.bool,
      showQuarterYearPicker: fe.default.bool,
      handleOnKeyDown: fe.default.func,
      isInputFocused: fe.default.bool,
      weekAriaLabelPrefix: fe.default.string,
      containerRef: fe.default.oneOfType([
        fe.default.func,
        fe.default.shape({ current: fe.default.object }),
      ]),
      monthShowsDuplicateDaysEnd: fe.default.bool,
      monthShowsDuplicateDaysStart: fe.default.bool,
    });
    var Xa = (function (e) {
      Pt(a, e);
      var t = Yt(a);
      function a() {
        var e;
        St(this, a);
        for (var r = arguments.length, n = new Array(r), o = 0; o < r; o++)
          n[o] = arguments[o];
        return (
          _t(Et((e = t.call.apply(t, [this].concat(n)))), "state", {
            height: null,
          }),
          _t(Et(e), "handleClick", function (t) {
            ((e.props.minTime || e.props.maxTime) && ga(t, e.props)) ||
              ((e.props.excludeTimes ||
                e.props.includeTimes ||
                e.props.filterTime) &&
                ya(t, e.props)) ||
              e.props.onChange(t);
          }),
          _t(Et(e), "isSelectedTime", function (t) {
            return (
              e.props.selected &&
              ((a = e.props.selected),
              (r = t),
              Na(a).getTime() === Na(r).getTime())
            );
            var a, r;
          }),
          _t(Et(e), "liClasses", function (t) {
            var a = [
              "react-datepicker__time-list-item",
              e.props.timeClassName ? e.props.timeClassName(t) : void 0,
            ];
            return (
              e.isSelectedTime(t) &&
                a.push("react-datepicker__time-list-item--selected"),
              (((e.props.minTime || e.props.maxTime) && ga(t, e.props)) ||
                ((e.props.excludeTimes ||
                  e.props.includeTimes ||
                  e.props.filterTime) &&
                  ya(t, e.props))) &&
                a.push("react-datepicker__time-list-item--disabled"),
              e.props.injectTimes &&
                (60 * Ye.default(t) + Ee.default(t)) % e.props.intervals != 0 &&
                a.push("react-datepicker__time-list-item--injected"),
              a.join(" ")
            );
          }),
          _t(Et(e), "handleOnKeyDown", function (t, a) {
            " " === t.key && (t.preventDefault(), (t.key = "Enter")),
              ("ArrowUp" !== t.key && "ArrowLeft" !== t.key) ||
                !t.target.previousSibling ||
                (t.preventDefault(), t.target.previousSibling.focus()),
              ("ArrowDown" !== t.key && "ArrowRight" !== t.key) ||
                !t.target.nextSibling ||
                (t.preventDefault(), t.target.nextSibling.focus()),
              "Enter" === t.key && e.handleClick(a),
              e.props.handleOnKeyDown(t);
          }),
          _t(Et(e), "renderTimes", function () {
            for (
              var t,
                a = [],
                r = e.props.format ? e.props.format : "p",
                n = e.props.intervals,
                o = e.props.selected || e.props.openToDate || Wt(),
                s = ((t = o), Ge.default(t)),
                l =
                  e.props.injectTimes &&
                  e.props.injectTimes.sort(function (e, t) {
                    return e - t;
                  }),
                i =
                  60 *
                  (function (e) {
                    var t = new Date(
                        e.getFullYear(),
                        e.getMonth(),
                        e.getDate(),
                      ),
                      a = new Date(
                        e.getFullYear(),
                        e.getMonth(),
                        e.getDate(),
                        24,
                      );
                    return Math.round((+a - +t) / 36e5);
                  })(o),
                d = i / n,
                u = 0;
              u < d;
              u++
            ) {
              var p = ge.default(s, u * n);
              if ((a.push(p), l)) {
                var c = Oa(s, p, u, n, l);
                a = a.concat(c);
              }
            }
            var f = a.reduce(function (e, t) {
              return t.getTime() <= o.getTime() ? t : e;
            }, a[0]);
            return a.map(function (t, a) {
              return ce.default.createElement(
                "li",
                {
                  key: a,
                  onClick: e.handleClick.bind(Et(e), t),
                  className: e.liClasses(t),
                  ref: function (a) {
                    t === f && (e.centerLi = a);
                  },
                  onKeyDown: function (a) {
                    e.handleOnKeyDown(a, t);
                  },
                  tabIndex: t === f ? 0 : -1,
                  role: "option",
                  "aria-selected": e.isSelectedTime(t) ? "true" : void 0,
                },
                jt(t, r, e.props.locale),
              );
            });
          }),
          e
        );
      }
      return (
        Mt(
          a,
          [
            {
              key: "componentDidMount",
              value: function () {
                (this.list.scrollTop =
                  this.centerLi &&
                  a.calcCenterPosition(
                    this.props.monthRef
                      ? this.props.monthRef.clientHeight -
                          this.header.clientHeight
                      : this.list.clientHeight,
                    this.centerLi,
                  )),
                  this.props.monthRef &&
                    this.header &&
                    this.setState({
                      height:
                        this.props.monthRef.clientHeight -
                        this.header.clientHeight,
                    });
              },
            },
            {
              key: "render",
              value: function () {
                var e = this,
                  t = this.state.height;
                return ce.default.createElement(
                  "div",
                  {
                    className: "react-datepicker__time-container ".concat(
                      this.props.todayButton
                        ? "react-datepicker__time-container--with-today-button"
                        : "",
                    ),
                  },
                  ce.default.createElement(
                    "div",
                    {
                      className:
                        "react-datepicker__header react-datepicker__header--time ".concat(
                          this.props.showTimeSelectOnly
                            ? "react-datepicker__header--time--only"
                            : "",
                        ),
                      ref: function (t) {
                        e.header = t;
                      },
                    },
                    ce.default.createElement(
                      "div",
                      { className: "react-datepicker-time__header" },
                      this.props.timeCaption,
                    ),
                  ),
                  ce.default.createElement(
                    "div",
                    { className: "react-datepicker__time" },
                    ce.default.createElement(
                      "div",
                      { className: "react-datepicker__time-box" },
                      ce.default.createElement(
                        "ul",
                        {
                          className: "react-datepicker__time-list",
                          ref: function (t) {
                            e.list = t;
                          },
                          style: t ? { height: t } : {},
                          role: "listbox",
                          "aria-label": this.props.timeCaption,
                        },
                        this.renderTimes(),
                      ),
                    ),
                  ),
                );
              },
            },
          ],
          [
            {
              key: "defaultProps",
              get: function () {
                return {
                  intervals: 30,
                  onTimeChange: function () {},
                  todayButton: null,
                  timeCaption: "Time",
                };
              },
            },
          ],
        ),
        a
      );
    })(ce.default.Component);
    _t(Xa, "calcCenterPosition", function (e, t) {
      return t.offsetTop - (e / 2 - t.clientHeight / 2);
    }),
      _t(Xa, "propTypes", {
        format: fe.default.string,
        includeTimes: fe.default.array,
        intervals: fe.default.number,
        selected: fe.default.instanceOf(Date),
        openToDate: fe.default.instanceOf(Date),
        onChange: fe.default.func,
        timeClassName: fe.default.func,
        todayButton: fe.default.node,
        minTime: fe.default.instanceOf(Date),
        maxTime: fe.default.instanceOf(Date),
        excludeTimes: fe.default.array,
        filterTime: fe.default.func,
        monthRef: fe.default.object,
        timeCaption: fe.default.string,
        injectTimes: fe.default.array,
        handleOnKeyDown: fe.default.func,
        locale: fe.default.oneOfType([
          fe.default.string,
          fe.default.shape({ locale: fe.default.object }),
        ]),
        showTimeSelectOnly: fe.default.bool,
      });
    var Za = (function (e) {
      Pt(a, e);
      var t = Yt(a);
      function a(e) {
        var r;
        return (
          St(this, a),
          _t(
            Et((r = t.call(this, e))),
            "YEAR_REFS",
            Tt(Array(r.props.yearItemNumber)).map(function () {
              return ce.default.createRef();
            }),
          ),
          _t(Et(r), "isDisabled", function (e) {
            return la(e, r.props);
          }),
          _t(Et(r), "isExcluded", function (e) {
            return ia(e, r.props);
          }),
          _t(Et(r), "selectingDate", function () {
            var e;
            return null !== (e = r.props.selectingDate) && void 0 !== e
              ? e
              : r.props.preSelection;
          }),
          _t(Et(r), "updateFocusOnPaginate", function (e) {
            var t = function () {
              this.YEAR_REFS[e].current.focus();
            }.bind(Et(r));
            window.requestAnimationFrame(t);
          }),
          _t(Et(r), "handleYearClick", function (e, t) {
            r.props.onDayClick && r.props.onDayClick(e, t);
          }),
          _t(Et(r), "handleYearNavigation", function (e, t) {
            var a = r.props,
              n = a.date,
              o = a.yearItemNumber,
              s = xa(n, o).startPeriod;
            r.isDisabled(t) ||
              r.isExcluded(t) ||
              (r.props.setPreSelection(t),
              e - s == -1
                ? r.updateFocusOnPaginate(o - 1)
                : e - s === o
                ? r.updateFocusOnPaginate(0)
                : r.YEAR_REFS[e - s].current.focus());
          }),
          _t(Et(r), "isSameDay", function (e, t) {
            return ea(e, t);
          }),
          _t(Et(r), "isCurrentYear", function (e) {
            return e === Ae.default(Wt());
          }),
          _t(Et(r), "isRangeStart", function (e) {
            return (
              r.props.startDate &&
              r.props.endDate &&
              Gt(He.default(Wt(), e), r.props.startDate)
            );
          }),
          _t(Et(r), "isRangeEnd", function (e) {
            return (
              r.props.startDate &&
              r.props.endDate &&
              Gt(He.default(Wt(), e), r.props.endDate)
            );
          }),
          _t(Et(r), "isInRange", function (e) {
            return ca(e, r.props.startDate, r.props.endDate);
          }),
          _t(Et(r), "isInSelectingRange", function (e) {
            var t = r.props,
              a = t.selectsStart,
              n = t.selectsEnd,
              o = t.selectsRange,
              s = t.startDate,
              l = t.endDate;
            return (
              !(!(a || n || o) || !r.selectingDate()) &&
              (a && l
                ? ca(e, r.selectingDate(), l)
                : ((n && s) || !(!o || !s || l)) && ca(e, s, r.selectingDate()))
            );
          }),
          _t(Et(r), "isSelectingRangeStart", function (e) {
            if (!r.isInSelectingRange(e)) return !1;
            var t = r.props,
              a = t.startDate,
              n = t.selectsStart,
              o = He.default(Wt(), e);
            return Gt(o, n ? r.selectingDate() : a);
          }),
          _t(Et(r), "isSelectingRangeEnd", function (e) {
            if (!r.isInSelectingRange(e)) return !1;
            var t = r.props,
              a = t.endDate,
              n = t.selectsEnd,
              o = t.selectsRange,
              s = He.default(Wt(), e);
            return Gt(s, n || o ? r.selectingDate() : a);
          }),
          _t(Et(r), "isKeyboardSelected", function (e) {
            var t = Jt(He.default(r.props.date, e));
            return (
              !r.props.disabledKeyboardNavigation &&
              !r.props.inline &&
              !ea(t, Jt(r.props.selected)) &&
              ea(t, Jt(r.props.preSelection))
            );
          }),
          _t(Et(r), "onYearClick", function (e, t) {
            var a = r.props.date;
            r.handleYearClick(Jt(He.default(a, t)), e);
          }),
          _t(Et(r), "onYearKeyDown", function (e, t) {
            var a = e.key;
            if (!r.props.disabledKeyboardNavigation)
              switch (a) {
                case "Enter":
                  r.onYearClick(e, t),
                    r.props.setPreSelection(r.props.selected);
                  break;
                case "ArrowRight":
                  r.handleYearNavigation(
                    t + 1,
                    Ce.default(r.props.preSelection, 1),
                  );
                  break;
                case "ArrowLeft":
                  r.handleYearNavigation(
                    t - 1,
                    xe.default(r.props.preSelection, 1),
                  );
              }
          }),
          _t(Et(r), "getYearClassNames", function (e) {
            var t = r.props,
              a = t.minDate,
              n = t.maxDate,
              o = t.selected,
              s = t.excludeDates,
              l = t.includeDates,
              i = t.filterDate;
            return he.default("react-datepicker__year-text", {
              "react-datepicker__year-text--selected": e === Ae.default(o),
              "react-datepicker__year-text--disabled":
                (a || n || s || l || i) && fa(e, r.props),
              "react-datepicker__year-text--keyboard-selected":
                r.isKeyboardSelected(e),
              "react-datepicker__year-text--range-start": r.isRangeStart(e),
              "react-datepicker__year-text--range-end": r.isRangeEnd(e),
              "react-datepicker__year-text--in-range": r.isInRange(e),
              "react-datepicker__year-text--in-selecting-range":
                r.isInSelectingRange(e),
              "react-datepicker__year-text--selecting-range-start":
                r.isSelectingRangeStart(e),
              "react-datepicker__year-text--selecting-range-end":
                r.isSelectingRangeEnd(e),
              "react-datepicker__year-text--today": r.isCurrentYear(e),
            });
          }),
          _t(Et(r), "getYearTabIndex", function (e) {
            return r.props.disabledKeyboardNavigation
              ? "-1"
              : e === Ae.default(r.props.preSelection)
              ? "0"
              : "-1";
          }),
          _t(Et(r), "getYearContainerClassNames", function () {
            var e = r.props,
              t = e.selectingDate,
              a = e.selectsStart,
              n = e.selectsEnd,
              o = e.selectsRange;
            return he.default("react-datepicker__year", {
              "react-datepicker__year--selecting-range": t && (a || n || o),
            });
          }),
          _t(Et(r), "getYearContent", function (e) {
            return r.props.renderYearContent ? r.props.renderYearContent(e) : e;
          }),
          r
        );
      }
      return (
        Mt(a, [
          {
            key: "render",
            value: function () {
              for (
                var e = this,
                  t = [],
                  a = this.props,
                  r = a.date,
                  n = a.yearItemNumber,
                  o = a.onYearMouseEnter,
                  s = a.onYearMouseLeave,
                  l = xa(r, n),
                  i = l.startPeriod,
                  d = l.endPeriod,
                  u = function (a) {
                    t.push(
                      ce.default.createElement(
                        "div",
                        {
                          ref: e.YEAR_REFS[a - i],
                          onClick: function (t) {
                            e.onYearClick(t, a);
                          },
                          onKeyDown: function (t) {
                            e.onYearKeyDown(t, a);
                          },
                          tabIndex: e.getYearTabIndex(a),
                          className: e.getYearClassNames(a),
                          onMouseEnter: function (e) {
                            return o(e, a);
                          },
                          onMouseLeave: function (e) {
                            return s(e, a);
                          },
                          key: a,
                          "aria-current": e.isCurrentYear(a) ? "date" : void 0,
                        },
                        e.getYearContent(a),
                      ),
                    );
                  },
                  p = i;
                p <= d;
                p++
              )
                u(p);
              return ce.default.createElement(
                "div",
                { className: this.getYearContainerClassNames() },
                ce.default.createElement(
                  "div",
                  {
                    className: "react-datepicker__year-wrapper",
                    onMouseLeave: this.props.clearSelectingDate,
                  },
                  t,
                ),
              );
            },
          },
        ]),
        a
      );
    })(ce.default.Component);
    _t(Za, "propTypes", {
      clearSelectingDate: fe.default.func,
      date: fe.default.instanceOf(Date),
      disabledKeyboardNavigation: fe.default.bool,
      endDate: fe.default.instanceOf(Date),
      onDayClick: fe.default.func,
      preSelection: fe.default.instanceOf(Date),
      setPreSelection: fe.default.func,
      selected: fe.default.object,
      inline: fe.default.bool,
      maxDate: fe.default.instanceOf(Date),
      minDate: fe.default.instanceOf(Date),
      onYearMouseEnter: fe.default.func.isRequired,
      onYearMouseLeave: fe.default.func.isRequired,
      selectingDate: fe.default.instanceOf(Date),
      renderYearContent: fe.default.func,
      selectsEnd: fe.default.bool,
      selectsStart: fe.default.bool,
      selectsRange: fe.default.bool,
      startDate: fe.default.instanceOf(Date),
      excludeDates: fe.default.array,
      includeDates: fe.default.array,
      filterDate: fe.default.func,
      yearItemNumber: fe.default.number,
    });
    var er = (function (e) {
      Pt(a, e);
      var t = Yt(a);
      function a(e) {
        var r;
        return (
          St(this, a),
          _t(Et((r = t.call(this, e))), "onTimeChange", function (e) {
            r.setState({ time: e });
            var t = new Date();
            t.setHours(e.split(":")[0]),
              t.setMinutes(e.split(":")[1]),
              r.props.onChange(t);
          }),
          _t(Et(r), "renderTimeInput", function () {
            var e = r.state.time,
              t = r.props,
              a = t.date,
              n = t.timeString,
              o = t.customTimeInput;
            return o
              ? ce.default.cloneElement(o, {
                  date: a,
                  value: e,
                  onChange: r.onTimeChange,
                })
              : ce.default.createElement("input", {
                  type: "time",
                  className: "react-datepicker-time__input",
                  placeholder: "Time",
                  name: "time-input",
                  required: !0,
                  value: e,
                  onChange: function (e) {
                    r.onTimeChange(e.target.value || n);
                  },
                });
          }),
          (r.state = { time: r.props.timeString }),
          r
        );
      }
      return (
        Mt(
          a,
          [
            {
              key: "render",
              value: function () {
                return ce.default.createElement(
                  "div",
                  { className: "react-datepicker__input-time-container" },
                  ce.default.createElement(
                    "div",
                    { className: "react-datepicker-time__caption" },
                    this.props.timeInputLabel,
                  ),
                  ce.default.createElement(
                    "div",
                    { className: "react-datepicker-time__input-container" },
                    ce.default.createElement(
                      "div",
                      { className: "react-datepicker-time__input" },
                      this.renderTimeInput(),
                    ),
                  ),
                );
              },
            },
          ],
          [
            {
              key: "getDerivedStateFromProps",
              value: function (e, t) {
                return e.timeString !== t.time ? { time: e.timeString } : null;
              },
            },
          ],
        ),
        a
      );
    })(ce.default.Component);
    function tr(e) {
      var t = e.className,
        a = e.children,
        r = e.showPopperArrow,
        n = e.arrowProps,
        o = void 0 === n ? {} : n;
      return ce.default.createElement(
        "div",
        { className: t },
        r &&
          ce.default.createElement(
            "div",
            Ot({ className: "react-datepicker__triangle" }, o),
          ),
        a,
      );
    }
    _t(er, "propTypes", {
      onChange: fe.default.func,
      date: fe.default.instanceOf(Date),
      timeString: fe.default.string,
      timeInputLabel: fe.default.string,
      customTimeInput: fe.default.element,
    }),
      (tr.propTypes = {
        className: fe.default.string,
        children: fe.default.node,
        arrowProps: fe.default.object,
        showPopperArrow: fe.default.bool,
      });
    var ar = [
        "react-datepicker__year-select",
        "react-datepicker__month-select",
        "react-datepicker__month-year-select",
      ],
      rr = {
        1: "January",
        2: "February",
        3: "March",
        4: "April",
        5: "May",
        6: "June",
        7: "July",
        8: "August",
        9: "September",
        10: "October",
        11: "November",
        12: "December",
      },
      nr = (function (e) {
        Pt(a, e);
        var t = Yt(a);
        function a(e) {
          var r;
          return (
            St(this, a),
            _t(Et((r = t.call(this, e))), "handleClickOutside", function (e) {
              r.props.onClickOutside(e);
            }),
            _t(Et(r), "setClickOutsideRef", function () {
              return r.containerRef.current;
            }),
            _t(Et(r), "handleDropdownFocus", function (e) {
              (function () {
                var e = (
                  (arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : {}
                  ).className || ""
                ).split(/\s+/);
                return ar.some(function (t) {
                  return e.indexOf(t) >= 0;
                });
              })(e.target) && r.props.onDropdownFocus();
            }),
            _t(Et(r), "getDateInView", function () {
              var e = r.props,
                t = e.preSelection,
                a = e.selected,
                n = e.openToDate,
                o = Sa(r.props),
                s = Ca(r.props),
                l = Wt(),
                i = n || a || t;
              return (
                i || (o && pt.default(l, o) ? o : s && ut.default(l, s) ? s : l)
              );
            }),
            _t(Et(r), "increaseMonth", function () {
              r.setState(
                function (e) {
                  var t = e.date;
                  return { date: ke.default(t, 1) };
                },
                function () {
                  return r.handleMonthChange(r.state.date);
                },
              );
            }),
            _t(Et(r), "decreaseMonth", function () {
              r.setState(
                function (e) {
                  var t = e.date;
                  return { date: Oe.default(t, 1) };
                },
                function () {
                  return r.handleMonthChange(r.state.date);
                },
              );
            }),
            _t(Et(r), "handleDayClick", function (e, t, a) {
              console.info("handleDayClick", e, t, a),
                r.props.onSelect(e, t, a),
                r.props.setPreSelection && r.props.setPreSelection(e);
            }),
            _t(Et(r), "handleDayMouseEnter", function (e) {
              r.setState({ selectingDate: e }),
                r.props.onDayMouseEnter && r.props.onDayMouseEnter(e);
            }),
            _t(Et(r), "handleMonthMouseLeave", function () {
              r.setState({ selectingDate: null }),
                r.props.onMonthMouseLeave && r.props.onMonthMouseLeave();
            }),
            _t(Et(r), "handleYearMouseEnter", function (e, t) {
              r.setState({ selectingDate: He.default(Wt(), t) }),
                r.props.onYearMouseEnter && r.props.onYearMouseEnter(e, t);
            }),
            _t(Et(r), "handleYearMouseLeave", function (e, t) {
              r.props.onYearMouseLeave && r.props.onYearMouseLeave(e, t);
            }),
            _t(Et(r), "handleYearChange", function (e) {
              r.props.onYearChange &&
                (r.props.onYearChange(e),
                r.setState({ isRenderAriaLiveMessage: !0 })),
                r.props.adjustDateOnChange &&
                  (r.props.onSelect && r.props.onSelect(e),
                  r.props.setOpen && r.props.setOpen(!0)),
                r.props.setPreSelection && r.props.setPreSelection(e);
            }),
            _t(Et(r), "handleMonthChange", function (e) {
              r.handleCustomMonthChange(e),
                r.props.adjustDateOnChange &&
                  (r.props.onSelect && r.props.onSelect(e),
                  r.props.setOpen && r.props.setOpen(!0)),
                r.props.setPreSelection && r.props.setPreSelection(e);
            }),
            _t(Et(r), "handleCustomMonthChange", function (e) {
              r.props.onMonthChange &&
                (r.props.onMonthChange(e),
                r.setState({ isRenderAriaLiveMessage: !0 }));
            }),
            _t(Et(r), "handleMonthYearChange", function (e) {
              r.handleYearChange(e), r.handleMonthChange(e);
            }),
            _t(Et(r), "changeYear", function (e) {
              r.setState(
                function (t) {
                  var a = t.date;
                  return { date: He.default(a, e) };
                },
                function () {
                  return r.handleYearChange(r.state.date);
                },
              );
            }),
            _t(Et(r), "changeMonth", function (e) {
              r.setState(
                function (t) {
                  var a = t.date;
                  return { date: je.default(a, e) };
                },
                function () {
                  return r.handleMonthChange(r.state.date);
                },
              );
            }),
            _t(Et(r), "changeMonthYear", function (e) {
              r.setState(
                function (t) {
                  var a = t.date;
                  return {
                    date: He.default(
                      je.default(a, Le.default(e)),
                      Ae.default(e),
                    ),
                  };
                },
                function () {
                  return r.handleMonthYearChange(r.state.date);
                },
              );
            }),
            _t(Et(r), "header", function () {
              var e = Vt(
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : r.state.date,
                  r.props.locale,
                  r.props.calendarStartDay,
                ),
                t = [];
              return (
                r.props.showWeekNumbers &&
                  t.push(
                    ce.default.createElement(
                      "div",
                      { key: "W", className: "react-datepicker__day-name" },
                      r.props.weekLabel || "#",
                    ),
                  ),
                t.concat(
                  [0, 1, 2, 3, 4, 5, 6].map(function (t) {
                    var a = be.default(e, t),
                      n = r.formatWeekday(a, r.props.locale),
                      o = r.props.weekDayClassName
                        ? r.props.weekDayClassName(a)
                        : void 0;
                    return ce.default.createElement(
                      "div",
                      {
                        key: t,
                        className: he.default("react-datepicker__day-name", o),
                      },
                      n,
                    );
                  }),
                )
              );
            }),
            _t(Et(r), "formatWeekday", function (e, t) {
              return r.props.formatWeekDay
                ? (function (e, t, a) {
                    return t(jt(e, "EEEE", a));
                  })(e, r.props.formatWeekDay, t)
                : r.props.useWeekdaysShort
                ? (function (e, t) {
                    return jt(e, "EEE", t);
                  })(e, t)
                : (function (e, t) {
                    return jt(e, "EEEEEE", t);
                  })(e, t);
            }),
            _t(Et(r), "decreaseYear", function () {
              r.setState(
                function (e) {
                  var t = e.date;
                  return {
                    date: xe.default(
                      t,
                      r.props.showYearPicker ? r.props.yearItemNumber : 1,
                    ),
                  };
                },
                function () {
                  return r.handleYearChange(r.state.date);
                },
              );
            }),
            _t(Et(r), "clearSelectingDate", function () {
              r.setState({ selectingDate: null });
            }),
            _t(Et(r), "renderPreviousButton", function () {
              if (!r.props.renderCustomHeader) {
                var e;
                switch (!0) {
                  case r.props.showMonthYearPicker:
                    e = wa(r.state.date, r.props);
                    break;
                  case r.props.showYearPicker:
                    e = (function (e) {
                      var t =
                          arguments.length > 1 && void 0 !== arguments[1]
                            ? arguments[1]
                            : {},
                        a = t.minDate,
                        r = t.yearItemNumber,
                        n = void 0 === r ? qt : r,
                        o = xa(Jt(xe.default(e, n)), n).endPeriod,
                        s = a && Ae.default(a);
                      return (s && s > o) || !1;
                    })(r.state.date, r.props);
                    break;
                  default:
                    e = va(r.state.date, r.props);
                }
                if (
                  (r.props.forceShowMonthNavigation ||
                    r.props.showDisabledMonthNavigation ||
                    !e) &&
                  !r.props.showTimeSelectOnly
                ) {
                  var t = [
                      "react-datepicker__navigation",
                      "react-datepicker__navigation--previous",
                    ],
                    a = r.decreaseMonth;
                  (r.props.showMonthYearPicker ||
                    r.props.showQuarterYearPicker ||
                    r.props.showYearPicker) &&
                    (a = r.decreaseYear),
                    e &&
                      r.props.showDisabledMonthNavigation &&
                      (t.push(
                        "react-datepicker__navigation--previous--disabled",
                      ),
                      (a = null));
                  var n =
                      r.props.showMonthYearPicker ||
                      r.props.showQuarterYearPicker ||
                      r.props.showYearPicker,
                    o = r.props,
                    s = o.previousMonthButtonLabel,
                    l = o.previousYearButtonLabel,
                    i = r.props,
                    d = i.previousMonthAriaLabel,
                    u =
                      void 0 === d
                        ? "string" == typeof s
                          ? s
                          : "Previous Month"
                        : d,
                    p = i.previousYearAriaLabel,
                    c =
                      void 0 === p
                        ? "string" == typeof l
                          ? l
                          : "Previous Year"
                        : p;
                  return ce.default.createElement(
                    "button",
                    {
                      type: "button",
                      className: t.join(" "),
                      onClick: a,
                      onKeyDown: r.props.handleOnKeyDown,
                      "aria-label": n ? c : u,
                    },
                    ce.default.createElement(
                      "span",
                      {
                        className: [
                          "react-datepicker__navigation-icon",
                          "react-datepicker__navigation-icon--previous",
                        ].join(" "),
                      },
                      n
                        ? r.props.previousYearButtonLabel
                        : r.props.previousMonthButtonLabel,
                    ),
                  );
                }
              }
            }),
            _t(Et(r), "increaseYear", function () {
              r.setState(
                function (e) {
                  var t = e.date;
                  return {
                    date: Ce.default(
                      t,
                      r.props.showYearPicker ? r.props.yearItemNumber : 1,
                    ),
                  };
                },
                function () {
                  return r.handleYearChange(r.state.date);
                },
              );
            }),
            _t(Et(r), "renderNextButton", function () {
              if (!r.props.renderCustomHeader) {
                var e;
                switch (!0) {
                  case r.props.showMonthYearPicker:
                    e = ka(r.state.date, r.props);
                    break;
                  case r.props.showYearPicker:
                    e = (function (e) {
                      var t =
                          arguments.length > 1 && void 0 !== arguments[1]
                            ? arguments[1]
                            : {},
                        a = t.maxDate,
                        r = t.yearItemNumber,
                        n = void 0 === r ? qt : r,
                        o = xa(Ce.default(e, n), n).startPeriod,
                        s = a && Ae.default(a);
                      return (s && s < o) || !1;
                    })(r.state.date, r.props);
                    break;
                  default:
                    e = ba(r.state.date, r.props);
                }
                if (
                  (r.props.forceShowMonthNavigation ||
                    r.props.showDisabledMonthNavigation ||
                    !e) &&
                  !r.props.showTimeSelectOnly
                ) {
                  var t = [
                    "react-datepicker__navigation",
                    "react-datepicker__navigation--next",
                  ];
                  r.props.showTimeSelect &&
                    t.push("react-datepicker__navigation--next--with-time"),
                    r.props.todayButton &&
                      t.push(
                        "react-datepicker__navigation--next--with-today-button",
                      );
                  var a = r.increaseMonth;
                  (r.props.showMonthYearPicker ||
                    r.props.showQuarterYearPicker ||
                    r.props.showYearPicker) &&
                    (a = r.increaseYear),
                    e &&
                      r.props.showDisabledMonthNavigation &&
                      (t.push("react-datepicker__navigation--next--disabled"),
                      (a = null));
                  var n =
                      r.props.showMonthYearPicker ||
                      r.props.showQuarterYearPicker ||
                      r.props.showYearPicker,
                    o = r.props,
                    s = o.nextMonthButtonLabel,
                    l = o.nextYearButtonLabel,
                    i = r.props,
                    d = i.nextMonthAriaLabel,
                    u =
                      void 0 === d
                        ? "string" == typeof s
                          ? s
                          : "Next Month"
                        : d,
                    p = i.nextYearAriaLabel,
                    c =
                      void 0 === p
                        ? "string" == typeof l
                          ? l
                          : "Next Year"
                        : p;
                  return ce.default.createElement(
                    "button",
                    {
                      type: "button",
                      className: t.join(" "),
                      onClick: a,
                      onKeyDown: r.props.handleOnKeyDown,
                      "aria-label": n ? c : u,
                    },
                    ce.default.createElement(
                      "span",
                      {
                        className: [
                          "react-datepicker__navigation-icon",
                          "react-datepicker__navigation-icon--next",
                        ].join(" "),
                      },
                      n
                        ? r.props.nextYearButtonLabel
                        : r.props.nextMonthButtonLabel,
                    ),
                  );
                }
              }
            }),
            _t(Et(r), "renderCurrentMonth", function () {
              var e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : r.state.date,
                t = ["react-datepicker__current-month"];
              return (
                r.props.showYearDropdown &&
                  t.push("react-datepicker__current-month--hasYearDropdown"),
                r.props.showMonthDropdown &&
                  t.push("react-datepicker__current-month--hasMonthDropdown"),
                r.props.showMonthYearDropdown &&
                  t.push(
                    "react-datepicker__current-month--hasMonthYearDropdown",
                  ),
                ce.default.createElement(
                  "div",
                  {
                    onClick: r.toggleMobileMonthPicker,
                    className: t.join(" "),
                  },
                  jt(e, r.props.dateFormat, r.props.locale),
                )
              );
            }),
            _t(Et(r), "renderYearDropdown", function () {
              var e =
                arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
              if (r.props.showYearDropdown && !e)
                return ce.default.createElement(Ia, {
                  adjustDateOnChange: r.props.adjustDateOnChange,
                  date: r.state.date,
                  onSelect: r.props.onSelect,
                  setOpen: r.props.setOpen,
                  dropdownMode: r.props.dropdownMode,
                  onChange: r.changeYear,
                  minDate: r.props.minDate,
                  maxDate: r.props.maxDate,
                  year: Ae.default(r.state.date),
                  scrollableYearDropdown: r.props.scrollableYearDropdown,
                  yearDropdownItemNumber: r.props.yearDropdownItemNumber,
                });
            }),
            _t(Et(r), "renderMonthDropdown", function () {
              var e =
                arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
              if (r.props.showMonthDropdown && !e)
                return ce.default.createElement(Fa, {
                  dropdownMode: r.props.dropdownMode,
                  locale: r.props.locale,
                  onChange: r.changeMonth,
                  month: Le.default(r.state.date),
                  useShortMonthInDropdown: r.props.useShortMonthInDropdown,
                });
            }),
            _t(Et(r), "renderMonthYearDropdown", function () {
              var e =
                arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
              if (r.props.showMonthYearDropdown && !e)
                return ce.default.createElement(Wa, {
                  dropdownMode: r.props.dropdownMode,
                  locale: r.props.locale,
                  dateFormat: r.props.dateFormat,
                  onChange: r.changeMonthYear,
                  minDate: r.props.minDate,
                  maxDate: r.props.maxDate,
                  date: r.state.date,
                  scrollableMonthYearDropdown:
                    r.props.scrollableMonthYearDropdown,
                });
            }),
            _t(Et(r), "handleTodayButtonClick", function (e) {
              r.props.onSelect(zt(), e),
                r.props.setPreSelection && r.props.setPreSelection(zt());
            }),
            _t(Et(r), "renderTodayButton", function () {
              if (r.props.todayButton && !r.props.showTimeSelectOnly)
                return ce.default.createElement(
                  "div",
                  {
                    className: "react-datepicker__today-button",
                    onClick: function (e) {
                      return r.handleTodayButtonClick(e);
                    },
                  },
                  r.props.todayButton,
                );
            }),
            _t(Et(r), "renderDefaultHeader", function (e) {
              var t = e.monthDate,
                a = e.i;
              return ce.default.createElement(
                "div",
                {
                  className: "react-datepicker__header ".concat(
                    r.props.showTimeSelect
                      ? "react-datepicker__header--has-time-select"
                      : "",
                  ),
                },
                r.renderCurrentMonth(t),
                ce.default.createElement(
                  "div",
                  {
                    className:
                      "react-datepicker__header__dropdown react-datepicker__header__dropdown--".concat(
                        r.props.dropdownMode,
                      ),
                    onFocus: r.handleDropdownFocus,
                  },
                  r.renderMonthDropdown(0 !== a),
                  r.renderMonthYearDropdown(0 !== a),
                  r.renderYearDropdown(0 !== a),
                ),
                ce.default.createElement(
                  "div",
                  { className: "react-datepicker__day-names" },
                  r.header(t),
                ),
              );
            }),
            _t(Et(r), "renderCustomHeader", function () {
              var e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : {},
                t = e.monthDate,
                a = e.i;
              if (
                (r.props.showTimeSelect && !r.state.monthContainer) ||
                r.props.showTimeSelectOnly
              )
                return null;
              var n = va(r.state.date, r.props),
                o = ba(r.state.date, r.props),
                s = wa(r.state.date, r.props),
                l = ka(r.state.date, r.props),
                i =
                  !r.props.showMonthYearPicker &&
                  !r.props.showQuarterYearPicker &&
                  !r.props.showYearPicker;
              return ce.default.createElement(
                "div",
                {
                  className:
                    "react-datepicker__header react-datepicker__header--custom",
                  onFocus: r.props.onDropdownFocus,
                },
                r.props.renderCustomHeader(
                  wt(
                    wt({}, r.state),
                    {},
                    {
                      customHeaderCount: a,
                      monthDate: t,
                      changeMonth: r.changeMonth,
                      changeYear: r.changeYear,
                      decreaseMonth: r.decreaseMonth,
                      increaseMonth: r.increaseMonth,
                      decreaseYear: r.decreaseYear,
                      increaseYear: r.increaseYear,
                      prevMonthButtonDisabled: n,
                      nextMonthButtonDisabled: o,
                      prevYearButtonDisabled: s,
                      nextYearButtonDisabled: l,
                    },
                  ),
                ),
                i &&
                  ce.default.createElement(
                    "div",
                    { className: "react-datepicker__day-names" },
                    r.header(t),
                  ),
              );
            }),
            _t(Et(r), "renderYearHeader", function () {
              var e = r.state.date,
                t = r.props,
                a = t.showYearPicker,
                n = xa(e, t.yearItemNumber),
                o = n.startPeriod,
                s = n.endPeriod;
              return ce.default.createElement(
                "div",
                {
                  className:
                    "react-datepicker__header react-datepicker-year-header",
                },
                a ? "".concat(o, " - ").concat(s) : Ae.default(e),
              );
            }),
            _t(Et(r), "renderHeader", function (e) {
              switch (!0) {
                case void 0 !== r.props.renderCustomHeader:
                  return r.renderCustomHeader(e);
                case r.props.showMonthYearPicker ||
                  r.props.showQuarterYearPicker ||
                  r.props.showYearPicker:
                  return r.renderYearHeader(e);
                default:
                  return r.renderDefaultHeader(e);
              }
            }),
            _t(Et(r), "renderMonths", function () {
              var e;
              if (!r.props.showTimeSelectOnly && !r.props.showYearPicker) {
                for (
                  var t = [],
                    a = r.props.showPreviousMonths
                      ? r.props.monthsShown - 1
                      : 0,
                    n = Oe.default(r.state.date, a),
                    o =
                      null !== (e = r.props.monthSelectedIn) && void 0 !== e
                        ? e
                        : a,
                    s = 0;
                  s < r.props.monthsShown;
                  ++s
                ) {
                  var l = s - o + a,
                    i = ke.default(n, l),
                    d = "month-".concat(s),
                    u = s < r.props.monthsShown - 1,
                    p = s > 0;
                  t.push(
                    ce.default.createElement(
                      "div",
                      {
                        key: d,
                        ref: function (e) {
                          r.monthContainer = e;
                        },
                        className: "react-datepicker__month-container",
                      },
                      r.renderHeader({ monthDate: i, i: s }),
                      ce.default.createElement(Ga, {
                        chooseDayAriaLabelPrefix:
                          r.props.chooseDayAriaLabelPrefix,
                        disabledDayAriaLabelPrefix:
                          r.props.disabledDayAriaLabelPrefix,
                        weekAriaLabelPrefix: r.props.weekAriaLabelPrefix,
                        ariaLabelPrefix: r.props.monthAriaLabelPrefix,
                        onChange: r.changeMonthYear,
                        day: i,
                        dayClassName: r.props.dayClassName,
                        calendarStartDay: r.props.calendarStartDay,
                        monthClassName: r.props.monthClassName,
                        onDayClick: r.handleDayClick,
                        handleOnKeyDown: r.props.handleOnDayKeyDown,
                        onDayMouseEnter: r.handleDayMouseEnter,
                        onMouseLeave: r.handleMonthMouseLeave,
                        onWeekSelect: r.props.onWeekSelect,
                        orderInDisplay: s,
                        formatWeekNumber: r.props.formatWeekNumber,
                        locale: r.props.locale,
                        minDate: r.props.minDate,
                        maxDate: r.props.maxDate,
                        excludeDates: r.props.excludeDates,
                        excludeDateIntervals: r.props.excludeDateIntervals,
                        highlightDates: r.props.highlightDates,
                        holidays: r.props.holidays,
                        selectingDate: r.state.selectingDate,
                        includeDates: r.props.includeDates,
                        includeDateIntervals: r.props.includeDateIntervals,
                        inline: r.props.inline,
                        shouldFocusDayInline: r.props.shouldFocusDayInline,
                        fixedHeight: r.props.fixedHeight,
                        filterDate: r.props.filterDate,
                        preSelection: r.props.preSelection,
                        setPreSelection: r.props.setPreSelection,
                        selected: r.props.selected,
                        selectsStart: r.props.selectsStart,
                        selectsEnd: r.props.selectsEnd,
                        selectsRange: r.props.selectsRange,
                        selectsDisabledDaysInRange:
                          r.props.selectsDisabledDaysInRange,
                        showWeekNumbers: r.props.showWeekNumbers,
                        startDate: r.props.startDate,
                        endDate: r.props.endDate,
                        peekNextMonth: r.props.peekNextMonth,
                        setOpen: r.props.setOpen,
                        shouldCloseOnSelect: r.props.shouldCloseOnSelect,
                        renderDayContents: r.props.renderDayContents,
                        renderMonthContent: r.props.renderMonthContent,
                        renderQuarterContent: r.props.renderQuarterContent,
                        renderYearContent: r.props.renderYearContent,
                        disabledKeyboardNavigation:
                          r.props.disabledKeyboardNavigation,
                        showMonthYearPicker: r.props.showMonthYearPicker,
                        showFullMonthYearPicker:
                          r.props.showFullMonthYearPicker,
                        showTwoColumnMonthYearPicker:
                          r.props.showTwoColumnMonthYearPicker,
                        showFourColumnMonthYearPicker:
                          r.props.showFourColumnMonthYearPicker,
                        showYearPicker: r.props.showYearPicker,
                        showQuarterYearPicker: r.props.showQuarterYearPicker,
                        isInputFocused: r.props.isInputFocused,
                        containerRef: r.containerRef,
                        monthShowsDuplicateDaysEnd: u,
                        monthShowsDuplicateDaysStart: p,
                      }),
                    ),
                  );
                }
                return t;
              }
            }),
            _t(Et(r), "renderYears", function () {
              if (!r.props.showTimeSelectOnly)
                return r.props.showYearPicker
                  ? ce.default.createElement(
                      "div",
                      { className: "react-datepicker__year--container" },
                      r.renderHeader(),
                      ce.default.createElement(
                        Za,
                        Ot(
                          {
                            onDayClick: r.handleDayClick,
                            selectingDate: r.state.selectingDate,
                            clearSelectingDate: r.clearSelectingDate,
                            date: r.state.date,
                          },
                          r.props,
                          {
                            onYearMouseEnter: r.handleYearMouseEnter,
                            onYearMouseLeave: r.handleYearMouseLeave,
                          },
                        ),
                      ),
                    )
                  : void 0;
            }),
            _t(Et(r), "renderTimeSection", function () {
              if (
                r.props.showTimeSelect &&
                (r.state.monthContainer || r.props.showTimeSelectOnly)
              )
                return ce.default.createElement(Xa, {
                  selected: r.props.selected,
                  openToDate: r.props.openToDate,
                  onChange: r.props.onTimeChange,
                  timeClassName: r.props.timeClassName,
                  format: r.props.timeFormat,
                  includeTimes: r.props.includeTimes,
                  intervals: r.props.timeIntervals,
                  minTime: r.props.minTime,
                  maxTime: r.props.maxTime,
                  excludeTimes: r.props.excludeTimes,
                  filterTime: r.props.filterTime,
                  timeCaption: r.props.timeCaption,
                  todayButton: r.props.todayButton,
                  showMonthDropdown: r.props.showMonthDropdown,
                  showMonthYearDropdown: r.props.showMonthYearDropdown,
                  showYearDropdown: r.props.showYearDropdown,
                  withPortal: r.props.withPortal,
                  monthRef: r.state.monthContainer,
                  injectTimes: r.props.injectTimes,
                  locale: r.props.locale,
                  handleOnKeyDown: r.props.handleOnKeyDown,
                  showTimeSelectOnly: r.props.showTimeSelectOnly,
                });
            }),
            _t(Et(r), "ignoreClickOutSideEvent", function () {
              setTimeout(function () {
                for (
                  var e = document.getElementsByClassName("Modal-Portal"),
                    t = 0;
                  t < e.length;
                  t++
                )
                  e[t].classList.add("react-datepicker-ignore-onclickoutside");
              }, 200);
            }),
            _t(Et(r), "renderInputTimeSection", function () {
              var e = new Date(r.props.selected),
                t =
                  Kt(e) && Boolean(r.props.selected)
                    ? ""
                        .concat(Pa(e.getHours()), ":")
                        .concat(Pa(e.getMinutes()))
                    : "";
              if (r.props.showTimeInput)
                return ce.default.createElement(er, {
                  date: e,
                  timeString: t,
                  timeInputLabel: r.props.timeInputLabel,
                  onChange: r.props.onTimeChange,
                  customTimeInput: r.props.customTimeInput,
                });
            }),
            _t(Et(r), "renderAriaLiveRegion", function () {
              var e,
                t = xa(r.state.date, r.props.yearItemNumber),
                a = t.startPeriod,
                n = t.endPeriod;
              return (
                (e = r.props.showYearPicker
                  ? "".concat(a, " - ").concat(n)
                  : r.props.showMonthYearPicker || r.props.showQuarterYearPicker
                  ? Ae.default(r.state.date)
                  : ""
                      .concat(oa(Le.default(r.state.date), r.props.locale), " ")
                      .concat(Ae.default(r.state.date))),
                ce.default.createElement(
                  "span",
                  {
                    role: "alert",
                    "aria-live": "polite",
                    className: "react-datepicker__aria-live",
                  },
                  r.state.isRenderAriaLiveMessage && e,
                )
              );
            }),
            _t(Et(r), "renderChildren", function () {
              if (r.props.children)
                return ce.default.createElement(
                  "div",
                  { className: "react-datepicker__children-container" },
                  r.props.children,
                );
            }),
            _t(Et(r), "handleMobileMonthPickerClick", function () {
              r.setState({ isShowMobileMonthPicker: !0 }),
                document.body.classList.add("no-scroll");
            }),
            _t(Et(r), "handleMobileMonthPickerCancel", function () {
              r.setState({ isShowMobileMonthPicker: !1 }, function () {
                r.ignoreClickOutSideEvent();
              }),
                document.body.classList.remove("no-scroll");
            }),
            _t(Et(r), "handleMobileMonthPickerSelect", function (e) {
              console.info("handleMobileMonthPickerSelect 1", e),
                r.setState(
                  { date: e, isShowMobileMonthPicker: !1 },
                  function () {
                    return r.handleDayClick(r.state.date, null, 0);
                  },
                );
            }),
            _t(Et(r), "toggleMobileMonthPicker", function () {
              console.info("toggleMobileMonthPicker"),
                r.setState(
                  { isShowMobileMonthPicker: !r.state.isShowMobileMonthPicker },
                  function () {
                    r.ignoreClickOutSideEvent(),
                      r.state.isShowMobileMonthPicker
                        ? document.body.classList.add("no-scroll")
                        : document.body.classList.remove("no-scroll");
                  },
                );
            }),
            (r.containerRef = ce.default.createRef()),
            (r.state = {
              date: r.getDateInView(),
              selectingDate: null,
              monthContainer: null,
              isRenderAriaLiveMessage: !1,
              isShowMobileMonthPicker: !1,
            }),
            r
          );
        }
        return (
          Mt(
            a,
            [
              {
                key: "componentDidMount",
                value: function () {
                  var e = this;
                  this.props.showTimeSelect &&
                    (this.assignMonthContainer = void e.setState({
                      monthContainer: e.monthContainer,
                    }));
                },
              },
              {
                key: "componentDidUpdate",
                value: function (e) {
                  var t = this;
                  if (
                    !this.props.preSelection ||
                    (ea(this.props.preSelection, e.preSelection) &&
                      this.props.monthSelectedIn === e.monthSelectedIn)
                  )
                    this.props.openToDate &&
                      !ea(this.props.openToDate, e.openToDate) &&
                      this.setState({ date: this.props.openToDate });
                  else {
                    var a = !Xt(this.state.date, this.props.preSelection);
                    this.setState(
                      { date: this.props.preSelection },
                      function () {
                        return a && t.handleCustomMonthChange(t.state.date);
                      },
                    );
                  }
                },
              },
              {
                key: "render",
                value: function () {
                  var e = this.props.container || tr;
                  return ce.default.createElement(
                    "div",
                    { ref: this.containerRef },
                    ce.default.createElement(
                      e,
                      {
                        className: he.default(
                          "react-datepicker",
                          this.props.className,
                          {
                            "react-datepicker--time-only":
                              this.props.showTimeSelectOnly,
                          },
                        ),
                        showPopperArrow: this.props.showPopperArrow,
                        arrowProps: this.props.arrowProps,
                      },
                      this.renderAriaLiveRegion(),
                      this.renderPreviousButton(),
                      this.renderNextButton(),
                      this.renderMonths(),
                      this.renderYears(),
                      this.renderTodayButton(),
                      this.renderTimeSection(),
                      this.renderInputTimeSection(),
                      this.renderChildren(),
                    ),
                    this.state.isShowMobileMonthPicker &&
                      ce.default.createElement(yt.default, {
                        dateConfig: {
                          month: {
                            format: function (e) {
                              return rr[e.getMonth() + 1];
                            },
                            caption: "Mon",
                            step: 1,
                          },
                          year: { format: "YYYY", caption: "Year", step: 1 },
                        },
                        className:
                          "inside-mobile-month-picker react-datepicker-ignore-onclickoutside",
                        showHeader: !1,
                        showFooter: !0,
                        isPopup: !0,
                        min: this.props.minDate,
                        max: this.props.maxDate,
                        confirmText: this.props.confirmText,
                        cancelText: this.props.cancelText,
                        value: this.state.date,
                        isOpen: this.state.isShowMobileMonthPicker,
                        onSelect: this.handleMobileMonthPickerSelect,
                        onCancel: this.handleMobileMonthPickerCancel,
                      }),
                  );
                },
              },
            ],
            [
              {
                key: "defaultProps",
                get: function () {
                  return {
                    onDropdownFocus: function () {},
                    monthsShown: 1,
                    forceShowMonthNavigation: !1,
                    timeCaption: "Time",
                    previousYearButtonLabel: "Previous Year",
                    nextYearButtonLabel: "Next Year",
                    previousMonthButtonLabel: "Previous Month",
                    nextMonthButtonLabel: "Next Month",
                    customTimeInput: null,
                    yearItemNumber: qt,
                    cancelText: "Cancel",
                    confirmText: "Save",
                  };
                },
              },
            ],
          ),
          a
        );
      })(ce.default.Component);
    _t(nr, "propTypes", {
      adjustDateOnChange: fe.default.bool,
      arrowProps: fe.default.object,
      chooseDayAriaLabelPrefix: fe.default.string,
      className: fe.default.string,
      children: fe.default.node,
      container: fe.default.func,
      dateFormat: fe.default.oneOfType([fe.default.string, fe.default.array])
        .isRequired,
      dayClassName: fe.default.func,
      weekDayClassName: fe.default.func,
      disabledDayAriaLabelPrefix: fe.default.string,
      monthClassName: fe.default.func,
      timeClassName: fe.default.func,
      disabledKeyboardNavigation: fe.default.bool,
      calendarStartDay: fe.default.number,
      dropdownMode: fe.default.oneOf(["scroll", "select"]),
      endDate: fe.default.instanceOf(Date),
      excludeDates: fe.default.array,
      excludeDateIntervals: fe.default.arrayOf(
        fe.default.shape({
          start: fe.default.instanceOf(Date),
          end: fe.default.instanceOf(Date),
        }),
      ),
      filterDate: fe.default.func,
      fixedHeight: fe.default.bool,
      formatWeekNumber: fe.default.func,
      highlightDates: fe.default.instanceOf(Map),
      holidays: fe.default.instanceOf(Map),
      includeDates: fe.default.array,
      includeDateIntervals: fe.default.arrayOf(
        fe.default.shape({
          start: fe.default.instanceOf(Date),
          end: fe.default.instanceOf(Date),
        }),
      ),
      includeTimes: fe.default.array,
      injectTimes: fe.default.array,
      inline: fe.default.bool,
      shouldFocusDayInline: fe.default.bool,
      locale: fe.default.oneOfType([
        fe.default.string,
        fe.default.shape({ locale: fe.default.object }),
      ]),
      maxDate: fe.default.instanceOf(Date),
      minDate: fe.default.instanceOf(Date),
      monthsShown: fe.default.number,
      monthSelectedIn: fe.default.number,
      nextMonthAriaLabel: fe.default.string,
      nextYearAriaLabel: fe.default.string,
      onClickOutside: fe.default.func.isRequired,
      onMonthChange: fe.default.func,
      onYearChange: fe.default.func,
      forceShowMonthNavigation: fe.default.bool,
      onDropdownFocus: fe.default.func,
      onSelect: fe.default.func.isRequired,
      onWeekSelect: fe.default.func,
      showTimeSelect: fe.default.bool,
      showTimeInput: fe.default.bool,
      showMonthYearPicker: fe.default.bool,
      showFullMonthYearPicker: fe.default.bool,
      showTwoColumnMonthYearPicker: fe.default.bool,
      showFourColumnMonthYearPicker: fe.default.bool,
      showYearPicker: fe.default.bool,
      showQuarterYearPicker: fe.default.bool,
      showTimeSelectOnly: fe.default.bool,
      timeFormat: fe.default.string,
      timeIntervals: fe.default.number,
      onTimeChange: fe.default.func,
      timeInputLabel: fe.default.string,
      minTime: fe.default.instanceOf(Date),
      maxTime: fe.default.instanceOf(Date),
      excludeTimes: fe.default.array,
      filterTime: fe.default.func,
      timeCaption: fe.default.string,
      openToDate: fe.default.instanceOf(Date),
      peekNextMonth: fe.default.bool,
      previousMonthAriaLabel: fe.default.string,
      previousYearAriaLabel: fe.default.string,
      scrollableYearDropdown: fe.default.bool,
      scrollableMonthYearDropdown: fe.default.bool,
      preSelection: fe.default.instanceOf(Date),
      selected: fe.default.instanceOf(Date),
      selectsEnd: fe.default.bool,
      selectsStart: fe.default.bool,
      selectsRange: fe.default.bool,
      selectsDisabledDaysInRange: fe.default.bool,
      showMonthDropdown: fe.default.bool,
      showPreviousMonths: fe.default.bool,
      showMonthYearDropdown: fe.default.bool,
      showWeekNumbers: fe.default.bool,
      showYearDropdown: fe.default.bool,
      startDate: fe.default.instanceOf(Date),
      todayButton: fe.default.string,
      useWeekdaysShort: fe.default.bool,
      formatWeekDay: fe.default.func,
      withPortal: fe.default.bool,
      weekLabel: fe.default.string,
      yearItemNumber: fe.default.number,
      yearDropdownItemNumber: fe.default.number,
      setOpen: fe.default.func,
      shouldCloseOnSelect: fe.default.bool,
      useShortMonthInDropdown: fe.default.bool,
      showDisabledMonthNavigation: fe.default.bool,
      previousMonthButtonLabel: fe.default.oneOfType([
        fe.default.string,
        fe.default.node,
      ]),
      nextMonthButtonLabel: fe.default.oneOfType([
        fe.default.string,
        fe.default.node,
      ]),
      previousYearButtonLabel: fe.default.string,
      nextYearButtonLabel: fe.default.string,
      renderCustomHeader: fe.default.func,
      renderDayContents: fe.default.func,
      renderMonthContent: fe.default.func,
      renderQuarterContent: fe.default.func,
      renderYearContent: fe.default.func,
      onDayMouseEnter: fe.default.func,
      onMonthMouseLeave: fe.default.func,
      onYearMouseEnter: fe.default.func,
      onYearMouseLeave: fe.default.func,
      showPopperArrow: fe.default.bool,
      handleOnKeyDown: fe.default.func,
      handleOnDayKeyDown: fe.default.func,
      isInputFocused: fe.default.bool,
      customTimeInput: fe.default.element,
      weekAriaLabelPrefix: fe.default.string,
      monthAriaLabelPrefix: fe.default.string,
      setPreSelection: fe.default.func,
    });
    var or = (function (e) {
      Pt(a, e);
      var t = Yt(a);
      function a(e) {
        var r;
        return (
          St(this, a),
          ((r = t.call(this, e)).el = document.createElement("div")),
          r
        );
      }
      return (
        Mt(a, [
          {
            key: "componentDidMount",
            value: function () {
              (this.portalRoot = (
                this.props.portalHost || document
              ).getElementById(this.props.portalId)),
                this.portalRoot ||
                  ((this.portalRoot = document.createElement("div")),
                  this.portalRoot.setAttribute("id", this.props.portalId),
                  (this.props.portalHost || document.body).appendChild(
                    this.portalRoot,
                  )),
                this.portalRoot.appendChild(this.el);
            },
          },
          {
            key: "componentWillUnmount",
            value: function () {
              this.portalRoot.removeChild(this.el);
            },
          },
          {
            key: "render",
            value: function () {
              return gt.default.createPortal(this.props.children, this.el);
            },
          },
        ]),
        a
      );
    })(ce.default.Component);
    _t(or, "propTypes", {
      children: fe.default.any,
      portalId: fe.default.string,
      portalHost: fe.default.instanceOf(ShadowRoot),
    });
    var sr = []
        .concat(["top", "bottom", "right", "left"], ["auto"])
        .reduce(function (e, t) {
          return e.concat([t, t + "-start", t + "-end"]);
        }, []),
      lr = function (e) {
        return !e.disabled && -1 !== e.tabIndex;
      },
      ir = (function (e) {
        Pt(a, e);
        var t = Yt(a);
        function a(e) {
          var r;
          return (
            St(this, a),
            _t(Et((r = t.call(this, e))), "getTabChildren", function () {
              return Array.prototype.slice
                .call(
                  r.tabLoopRef.current.querySelectorAll(
                    "[tabindex], a, button, input, select, textarea",
                  ),
                  1,
                  -1,
                )
                .filter(lr);
            }),
            _t(Et(r), "handleFocusStart", function () {
              var e = r.getTabChildren();
              e && e.length > 1 && e[e.length - 1].focus();
            }),
            _t(Et(r), "handleFocusEnd", function () {
              var e = r.getTabChildren();
              e && e.length > 1 && e[0].focus();
            }),
            (r.tabLoopRef = ce.default.createRef()),
            r
          );
        }
        return (
          Mt(
            a,
            [
              {
                key: "render",
                value: function () {
                  return this.props.enableTabLoop
                    ? ce.default.createElement(
                        "div",
                        {
                          className: "react-datepicker__tab-loop",
                          ref: this.tabLoopRef,
                        },
                        ce.default.createElement("div", {
                          className: "react-datepicker__tab-loop__start",
                          tabIndex: "0",
                          onFocus: this.handleFocusStart,
                        }),
                        this.props.children,
                        ce.default.createElement("div", {
                          className: "react-datepicker__tab-loop__end",
                          tabIndex: "0",
                          onFocus: this.handleFocusEnd,
                        }),
                      )
                    : this.props.children;
                },
              },
            ],
            [
              {
                key: "defaultProps",
                get: function () {
                  return { enableTabLoop: !0 };
                },
              },
            ],
          ),
          a
        );
      })(ce.default.Component);
    _t(ir, "propTypes", {
      children: fe.default.any,
      enableTabLoop: fe.default.bool,
    });
    var dr = sr,
      ur = (function (e) {
        Pt(a, e);
        var t = Yt(a);
        function a() {
          return St(this, a), t.apply(this, arguments);
        }
        return (
          Mt(
            a,
            [
              {
                key: "render",
                value: function () {
                  var e,
                    t = this.props,
                    a = t.className,
                    r = t.wrapperClassName,
                    n = t.hidePopper,
                    o = t.popperComponent,
                    s = t.popperModifiers,
                    l = t.popperPlacement,
                    i = t.popperProps,
                    d = t.targetComponent,
                    u = t.enableTabLoop,
                    p = t.popperOnKeyDown,
                    c = t.portalId,
                    f = t.portalHost;
                  if (!n) {
                    var h = he.default("react-datepicker-popper", a);
                    e = ce.default.createElement(
                      de.Popper,
                      Ot({ modifiers: s, placement: l }, i),
                      function (e) {
                        var t = e.ref,
                          a = e.style,
                          r = e.placement,
                          n = e.arrowProps;
                        return ce.default.createElement(
                          ir,
                          { enableTabLoop: u },
                          ce.default.createElement(
                            "div",
                            {
                              ref: t,
                              style: a,
                              className: h,
                              "data-placement": r,
                              onKeyDown: p,
                            },
                            ce.default.cloneElement(o, { arrowProps: n }),
                          ),
                        );
                      },
                    );
                  }
                  this.props.popperContainer &&
                    (e = ce.default.createElement(
                      this.props.popperContainer,
                      {},
                      e,
                    )),
                    c &&
                      !n &&
                      (e = ce.default.createElement(
                        or,
                        { portalId: c, portalHost: f },
                        e,
                      ));
                  var m = he.default("react-datepicker-wrapper", r);
                  return ce.default.createElement(
                    de.Manager,
                    { className: "react-datepicker-manager" },
                    ce.default.createElement(de.Reference, null, function (e) {
                      var t = e.ref;
                      return ce.default.createElement(
                        "div",
                        { ref: t, className: m },
                        d,
                      );
                    }),
                    e,
                  );
                },
              },
            ],
            [
              {
                key: "defaultProps",
                get: function () {
                  return {
                    hidePopper: !0,
                    popperModifiers: [],
                    popperProps: {},
                    popperPlacement: "bottom-start",
                  };
                },
              },
            ],
          ),
          a
        );
      })(ce.default.Component);
    _t(ur, "propTypes", {
      className: fe.default.string,
      wrapperClassName: fe.default.string,
      hidePopper: fe.default.bool,
      popperComponent: fe.default.element,
      popperModifiers: fe.default.arrayOf(fe.default.object),
      popperPlacement: fe.default.oneOf(dr),
      popperContainer: fe.default.func,
      popperProps: fe.default.object,
      targetComponent: fe.default.element,
      enableTabLoop: fe.default.bool,
      popperOnKeyDown: fe.default.func,
      portalId: fe.default.string,
      portalHost: fe.default.instanceOf(ShadowRoot),
    });
    var pr = "react-datepicker-ignore-onclickoutside",
      cr = Dt.default(nr);
    var fr = "Date input not valid.",
      hr = (function (e) {
        Pt(a, e);
        var t = Yt(a);
        function a(e) {
          var r;
          return (
            St(this, a),
            _t(Et((r = t.call(this, e))), "getPreSelection", function () {
              return r.props.openToDate
                ? r.props.openToDate
                : r.props.selectsEnd && r.props.startDate
                ? r.props.startDate
                : r.props.selectsStart && r.props.endDate
                ? r.props.endDate
                : Wt();
            }),
            _t(Et(r), "calcInitialState", function () {
              var e,
                t,
                a =
                  null === (e = r.props.holidays) || void 0 === e
                    ? void 0
                    : e.reduce(function (e, t) {
                        var a = new Date(t.date);
                        return De.default(a)
                          ? [].concat(Tt(e), [wt(wt({}, t), {}, { date: a })])
                          : e;
                      }, []),
                n = r.getPreSelection(),
                o = Sa(r.props),
                s = Ca(r.props),
                l =
                  o && pt.default(n, Ge.default(o))
                    ? o
                    : s && ut.default(n, at.default(s))
                    ? s
                    : n;
              return {
                open: r.props.startOpen || !1,
                preventFocus: !1,
                preSelection:
                  null !==
                    (t = r.props.selectsRange
                      ? r.props.startDate
                      : r.props.selected) && void 0 !== t
                    ? t
                    : l,
                highlightDates: Ma(r.props.highlightDates),
                holidays: _a(a),
                focused: !1,
                shouldFocusDayInline: !1,
                isRenderAriaLiveMessage: !1,
              };
            }),
            _t(Et(r), "clearPreventFocusTimeout", function () {
              r.preventFocusTimeout && clearTimeout(r.preventFocusTimeout);
            }),
            _t(Et(r), "setFocus", function () {
              r.input && r.input.focus && r.input.focus({ preventScroll: !0 });
            }),
            _t(Et(r), "setBlur", function () {
              r.input && r.input.blur && r.input.blur(), r.cancelFocusInput();
            }),
            _t(Et(r), "setOpen", function (e) {
              var t =
                arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
              r.setState(
                {
                  open: e,
                  preSelection:
                    e && r.state.open
                      ? r.state.preSelection
                      : r.calcInitialState().preSelection,
                  lastPreSelectChange: Dr,
                },
                function () {
                  e ||
                    r.setState(
                      function (e) {
                        return { focused: !!t && e.focused };
                      },
                      function () {
                        !t && r.setBlur(), r.setState({ inputValue: null });
                      },
                    );
                },
              );
            }),
            _t(Et(r), "inputOk", function () {
              return me.default(r.state.preSelection);
            }),
            _t(Et(r), "isCalendarOpen", function () {
              return void 0 === r.props.open
                ? r.state.open && !r.props.disabled && !r.props.readOnly
                : r.props.open;
            }),
            _t(Et(r), "handleFocus", function (e) {
              r.state.preventFocus ||
                (r.props.onFocus(e),
                r.props.preventOpenOnFocus ||
                  r.props.readOnly ||
                  r.setOpen(!0)),
                r.setState({ focused: !0 });
            }),
            _t(Et(r), "cancelFocusInput", function () {
              clearTimeout(r.inputFocusTimeout), (r.inputFocusTimeout = null);
            }),
            _t(Et(r), "deferFocusInput", function () {
              r.cancelFocusInput(),
                (r.inputFocusTimeout = setTimeout(function () {
                  return r.setFocus();
                }, 1));
            }),
            _t(Et(r), "handleDropdownFocus", function () {
              r.cancelFocusInput();
            }),
            _t(Et(r), "handleBlur", function (e) {
              (!r.state.open || r.props.withPortal || r.props.showTimeInput) &&
                r.props.onBlur(e),
                r.setState({ focused: !1 });
            }),
            _t(Et(r), "handleCalendarClickOutside", function (e) {
              r.props.inline || r.setOpen(!1),
                r.props.onClickOutside(e),
                r.props.withPortal && e.preventDefault();
            }),
            _t(Et(r), "handleChange", function () {
              for (
                var e = arguments.length, t = new Array(e), a = 0;
                a < e;
                a++
              )
                t[a] = arguments[a];
              var n = t[0];
              if (
                !r.props.onChangeRaw ||
                (r.props.onChangeRaw.apply(Et(r), t),
                "function" == typeof n.isDefaultPrevented &&
                  !n.isDefaultPrevented())
              ) {
                r.setState({
                  inputValue: n.target.value,
                  lastPreSelectChange: mr,
                });
                var o,
                  s,
                  l,
                  i,
                  d,
                  u,
                  p,
                  c,
                  f =
                    ((o = n.target.value),
                    (s = r.props.dateFormat),
                    (l = r.props.locale),
                    (i = r.props.strictParsing),
                    (d = r.props.minDate),
                    (u = null),
                    (p = na(l) || na(ra())),
                    (c = !0),
                    Array.isArray(s)
                      ? (s.forEach(function (e) {
                          var t = ht.default(o, e, new Date(), { locale: p });
                          i && (c = Kt(t, d) && o === jt(t, e, l)),
                            Kt(t, d) && c && (u = t);
                        }),
                        u)
                      : ((u = ht.default(o, s, new Date(), { locale: p })),
                        i
                          ? (c = Kt(u) && o === jt(u, s, l))
                          : Kt(u) ||
                            ((s = s
                              .match(Bt)
                              .map(function (e) {
                                var t = e[0];
                                return "p" === t || "P" === t
                                  ? p
                                    ? (0, At[t])(e, p.formatLong)
                                    : t
                                  : e;
                              })
                              .join("")),
                            o.length > 0 &&
                              (u = ht.default(
                                o,
                                s.slice(0, o.length),
                                new Date(),
                              )),
                            Kt(u) || (u = new Date(o))),
                        Kt(u) && c ? u : null));
                r.props.showTimeSelectOnly &&
                  r.props.selected &&
                  !ea(f, r.props.selected) &&
                  (f =
                    null == f
                      ? vt.default(r.props.selected, {
                          hours: Ye.default(r.props.selected),
                          minutes: Ee.default(r.props.selected),
                          seconds: Ne.default(r.props.selected),
                        })
                      : vt.default(r.props.selected, {
                          hours: Ye.default(f),
                          minutes: Ee.default(f),
                          seconds: Ne.default(f),
                        })),
                  (!f && n.target.value) || r.setSelected(f, n, !0);
              }
            }),
            _t(Et(r), "handleSelect", function (e, t, a) {
              if (
                (r.setState({ preventFocus: !0 }, function () {
                  return (
                    (r.preventFocusTimeout = setTimeout(function () {
                      return r.setState({ preventFocus: !1 });
                    }, 50)),
                    r.preventFocusTimeout
                  );
                }),
                r.props.onChangeRaw && r.props.onChangeRaw(t),
                r.setSelected(e, t, !1, a),
                r.props.showDateSelect &&
                  r.setState({ isRenderAriaLiveMessage: !0 }),
                !r.props.shouldCloseOnSelect || r.props.showTimeSelect)
              )
                r.setPreSelection(e);
              else if (!r.props.inline) {
                r.props.selectsRange || r.setOpen(!1);
                var n = r.props,
                  o = n.startDate,
                  s = n.endDate;
                !o || s || pt.default(e, o) || r.setOpen(!1);
              }
            }),
            _t(Et(r), "setSelected", function (e, t, a, n) {
              var o = e;
              if (r.props.showYearPicker) {
                if (null !== o && fa(Ae.default(o), r.props)) return;
              } else if (r.props.showMonthYearPicker) {
                if (null !== o && da(o, r.props)) return;
              } else if (null !== o && la(o, r.props)) return;
              var s = r.props,
                l = s.onChange,
                i = s.selectsRange,
                d = s.startDate,
                u = s.endDate;
              if (!ta(r.props.selected, o) || r.props.allowSameDay || i)
                if (
                  (null !== o &&
                    (!r.props.selected ||
                      (a &&
                        (r.props.showTimeSelect ||
                          r.props.showTimeSelectOnly ||
                          r.props.showTimeInput)) ||
                      (o = Ht(o, {
                        hour: Ye.default(r.props.selected),
                        minute: Ee.default(r.props.selected),
                        second: Ne.default(r.props.selected),
                      })),
                    r.props.inline || r.setState({ preSelection: o }),
                    r.props.focusSelectedMonth ||
                      r.setState({ monthSelectedIn: n })),
                  i)
                ) {
                  var p = d && !u,
                    c = d && u;
                  !d && !u
                    ? l([o, null], t)
                    : p && (pt.default(o, d) ? l([o, null], t) : l([d, o], t)),
                    c && l([o, null], t);
                } else l(o, t);
              a || (r.props.onSelect(o, t), r.setState({ inputValue: null }));
            }),
            _t(Et(r), "setPreSelection", function (e) {
              var t = void 0 !== r.props.minDate,
                a = void 0 !== r.props.maxDate,
                n = !0;
              if (e) {
                var o = Ge.default(e);
                if (t && a) n = aa(e, r.props.minDate, r.props.maxDate);
                else if (t) {
                  var s = Ge.default(r.props.minDate);
                  n = ut.default(e, s) || ta(o, s);
                } else if (a) {
                  var l = at.default(r.props.maxDate);
                  n = pt.default(e, l) || ta(o, l);
                }
              }
              n && r.setState({ preSelection: e });
            }),
            _t(Et(r), "handleTimeChange", function (e) {
              var t = r.props.selected ? r.props.selected : r.getPreSelection(),
                a = r.props.selected
                  ? e
                  : Ht(t, { hour: Ye.default(e), minute: Ee.default(e) });
              r.setState({ preSelection: a }),
                r.props.onChange(a),
                r.props.shouldCloseOnSelect && r.setOpen(!1),
                r.props.showTimeInput && r.setOpen(!0),
                (r.props.showTimeSelectOnly || r.props.showTimeSelect) &&
                  r.setState({ isRenderAriaLiveMessage: !0 }),
                r.setState({ inputValue: null });
            }),
            _t(Et(r), "onInputClick", function () {
              r.props.disabled || r.props.readOnly || r.setOpen(!0),
                r.props.onInputClick();
            }),
            _t(Et(r), "onInputKeyDown", function (e) {
              r.props.onKeyDown(e);
              var t = e.key;
              if (
                r.state.open ||
                r.props.inline ||
                r.props.preventOpenOnFocus
              ) {
                if (r.state.open) {
                  if ("ArrowDown" === t || "ArrowUp" === t) {
                    e.preventDefault();
                    var a =
                      r.calendar.componentNode &&
                      r.calendar.componentNode.querySelector(
                        '.react-datepicker__day[tabindex="0"]',
                      );
                    return void (a && a.focus({ preventScroll: !0 }));
                  }
                  var n = Wt(r.state.preSelection);
                  "Enter" === t
                    ? (e.preventDefault(),
                      r.inputOk() && r.state.lastPreSelectChange === Dr
                        ? (r.handleSelect(n, e),
                          !r.props.shouldCloseOnSelect && r.setPreSelection(n))
                        : r.setOpen(!1))
                    : "Escape" === t
                    ? (e.preventDefault(), r.setOpen(!1))
                    : "Tab" === t && r.setOpen(!1),
                    r.inputOk() || r.props.onInputError({ code: 1, msg: fr });
                }
              } else
                ("ArrowDown" !== t && "ArrowUp" !== t && "Enter" !== t) ||
                  r.onInputClick();
            }),
            _t(Et(r), "onPortalKeyDown", function (e) {
              "Escape" === e.key &&
                (e.preventDefault(),
                r.setState({ preventFocus: !0 }, function () {
                  r.setOpen(!1),
                    setTimeout(function () {
                      r.setFocus(), r.setState({ preventFocus: !1 });
                    });
                }));
            }),
            _t(Et(r), "onDayKeyDown", function (e) {
              r.props.onKeyDown(e);
              var t = e.key,
                a = Wt(r.state.preSelection);
              if ("Enter" === t)
                e.preventDefault(),
                  r.handleSelect(a, e),
                  !r.props.shouldCloseOnSelect && r.setPreSelection(a);
              else if ("Escape" === t)
                e.preventDefault(),
                  r.setOpen(!1),
                  r.inputOk() || r.props.onInputError({ code: 1, msg: fr });
              else if (!r.props.disabledKeyboardNavigation) {
                var n;
                switch (t) {
                  case "ArrowLeft":
                    n = Me.default(a, 1);
                    break;
                  case "ArrowRight":
                    n = be.default(a, 1);
                    break;
                  case "ArrowUp":
                    n = _e.default(a, 1);
                    break;
                  case "ArrowDown":
                    n = we.default(a, 1);
                    break;
                  case "PageUp":
                    n = Oe.default(a, 1);
                    break;
                  case "PageDown":
                    n = ke.default(a, 1);
                    break;
                  case "Home":
                    n = xe.default(a, 1);
                    break;
                  case "End":
                    n = Ce.default(a, 1);
                }
                if (!n)
                  return void (
                    r.props.onInputError &&
                    r.props.onInputError({ code: 1, msg: fr })
                  );
                if (
                  (e.preventDefault(),
                  r.setState({ lastPreSelectChange: Dr }),
                  r.props.adjustDateOnChange && r.setSelected(n),
                  r.setPreSelection(n),
                  r.props.inline)
                ) {
                  var o = Le.default(a),
                    s = Le.default(n),
                    l = Ae.default(a),
                    i = Ae.default(n);
                  o !== s || l !== i
                    ? r.setState({ shouldFocusDayInline: !0 })
                    : r.setState({ shouldFocusDayInline: !1 });
                }
              }
            }),
            _t(Et(r), "onPopperKeyDown", function (e) {
              "Escape" === e.key &&
                (e.preventDefault(),
                r.setState({ preventFocus: !0 }, function () {
                  r.setOpen(!1),
                    setTimeout(function () {
                      r.setFocus(), r.setState({ preventFocus: !1 });
                    });
                }));
            }),
            _t(Et(r), "onClearClick", function (e) {
              e && e.preventDefault && e.preventDefault(),
                r.props.selectsRange
                  ? r.props.onChange([null, null], e)
                  : r.props.onChange(null, e),
                r.setState({ inputValue: null });
            }),
            _t(Et(r), "clear", function () {
              r.onClearClick();
            }),
            _t(Et(r), "onScroll", function (e) {
              "boolean" == typeof r.props.closeOnScroll && r.props.closeOnScroll
                ? (e.target !== document &&
                    e.target !== document.documentElement &&
                    e.target !== document.body) ||
                  r.setOpen(!1)
                : "function" == typeof r.props.closeOnScroll &&
                  r.props.closeOnScroll(e) &&
                  r.setOpen(!1);
            }),
            _t(Et(r), "renderCalendar", function () {
              return r.props.inline || r.isCalendarOpen()
                ? ce.default.createElement(
                    cr,
                    {
                      ref: function (e) {
                        r.calendar = e;
                      },
                      locale: r.props.locale,
                      calendarStartDay: r.props.calendarStartDay,
                      chooseDayAriaLabelPrefix:
                        r.props.chooseDayAriaLabelPrefix,
                      disabledDayAriaLabelPrefix:
                        r.props.disabledDayAriaLabelPrefix,
                      weekAriaLabelPrefix: r.props.weekAriaLabelPrefix,
                      monthAriaLabelPrefix: r.props.monthAriaLabelPrefix,
                      adjustDateOnChange: r.props.adjustDateOnChange,
                      setOpen: r.setOpen,
                      shouldCloseOnSelect: r.props.shouldCloseOnSelect,
                      dateFormat: r.props.dateFormatCalendar,
                      useWeekdaysShort: r.props.useWeekdaysShort,
                      formatWeekDay: r.props.formatWeekDay,
                      dropdownMode: r.props.dropdownMode,
                      selected: r.props.selected,
                      preSelection: r.state.preSelection,
                      onSelect: r.handleSelect,
                      onWeekSelect: r.props.onWeekSelect,
                      openToDate: r.props.openToDate,
                      minDate: r.props.minDate,
                      maxDate: r.props.maxDate,
                      selectsStart: r.props.selectsStart,
                      selectsEnd: r.props.selectsEnd,
                      selectsRange: r.props.selectsRange,
                      startDate: r.props.startDate,
                      endDate: r.props.endDate,
                      excludeDates: r.props.excludeDates,
                      excludeDateIntervals: r.props.excludeDateIntervals,
                      filterDate: r.props.filterDate,
                      onClickOutside: r.handleCalendarClickOutside,
                      formatWeekNumber: r.props.formatWeekNumber,
                      highlightDates: r.state.highlightDates,
                      holidays: r.state.holidays,
                      includeDates: r.props.includeDates,
                      includeDateIntervals: r.props.includeDateIntervals,
                      includeTimes: r.props.includeTimes,
                      injectTimes: r.props.injectTimes,
                      inline: r.props.inline,
                      shouldFocusDayInline: r.state.shouldFocusDayInline,
                      peekNextMonth: r.props.peekNextMonth,
                      showMonthDropdown: r.props.showMonthDropdown,
                      showPreviousMonths: r.props.showPreviousMonths,
                      useShortMonthInDropdown: r.props.useShortMonthInDropdown,
                      showMonthYearDropdown: r.props.showMonthYearDropdown,
                      showWeekNumbers: r.props.showWeekNumbers,
                      showYearDropdown: r.props.showYearDropdown,
                      withPortal: r.props.withPortal,
                      forceShowMonthNavigation:
                        r.props.forceShowMonthNavigation,
                      showDisabledMonthNavigation:
                        r.props.showDisabledMonthNavigation,
                      scrollableYearDropdown: r.props.scrollableYearDropdown,
                      scrollableMonthYearDropdown:
                        r.props.scrollableMonthYearDropdown,
                      todayButton: r.props.todayButton,
                      weekLabel: r.props.weekLabel,
                      outsideClickIgnoreClass: pr,
                      fixedHeight: r.props.fixedHeight,
                      monthsShown: r.props.monthsShown,
                      monthSelectedIn: r.state.monthSelectedIn,
                      onDropdownFocus: r.handleDropdownFocus,
                      onMonthChange: r.props.onMonthChange,
                      onYearChange: r.props.onYearChange,
                      dayClassName: r.props.dayClassName,
                      weekDayClassName: r.props.weekDayClassName,
                      monthClassName: r.props.monthClassName,
                      timeClassName: r.props.timeClassName,
                      showDateSelect: r.props.showDateSelect,
                      showTimeSelect: r.props.showTimeSelect,
                      showTimeSelectOnly: r.props.showTimeSelectOnly,
                      onTimeChange: r.handleTimeChange,
                      timeFormat: r.props.timeFormat,
                      timeIntervals: r.props.timeIntervals,
                      minTime: r.props.minTime,
                      maxTime: r.props.maxTime,
                      excludeTimes: r.props.excludeTimes,
                      filterTime: r.props.filterTime,
                      timeCaption: r.props.timeCaption,
                      className: r.props.calendarClassName,
                      container: r.props.calendarContainer,
                      yearItemNumber: r.props.yearItemNumber,
                      yearDropdownItemNumber: r.props.yearDropdownItemNumber,
                      previousMonthAriaLabel: r.props.previousMonthAriaLabel,
                      previousMonthButtonLabel:
                        r.props.previousMonthButtonLabel,
                      nextMonthAriaLabel: r.props.nextMonthAriaLabel,
                      nextMonthButtonLabel: r.props.nextMonthButtonLabel,
                      previousYearAriaLabel: r.props.previousYearAriaLabel,
                      previousYearButtonLabel: r.props.previousYearButtonLabel,
                      nextYearAriaLabel: r.props.nextYearAriaLabel,
                      nextYearButtonLabel: r.props.nextYearButtonLabel,
                      timeInputLabel: r.props.timeInputLabel,
                      disabledKeyboardNavigation:
                        r.props.disabledKeyboardNavigation,
                      renderCustomHeader: r.props.renderCustomHeader,
                      popperProps: r.props.popperProps,
                      renderDayContents: r.props.renderDayContents,
                      renderMonthContent: r.props.renderMonthContent,
                      renderQuarterContent: r.props.renderQuarterContent,
                      renderYearContent: r.props.renderYearContent,
                      onDayMouseEnter: r.props.onDayMouseEnter,
                      onMonthMouseLeave: r.props.onMonthMouseLeave,
                      onYearMouseEnter: r.props.onYearMouseEnter,
                      onYearMouseLeave: r.props.onYearMouseLeave,
                      selectsDisabledDaysInRange:
                        r.props.selectsDisabledDaysInRange,
                      showTimeInput: r.props.showTimeInput,
                      showMonthYearPicker: r.props.showMonthYearPicker,
                      showFullMonthYearPicker: r.props.showFullMonthYearPicker,
                      showTwoColumnMonthYearPicker:
                        r.props.showTwoColumnMonthYearPicker,
                      showFourColumnMonthYearPicker:
                        r.props.showFourColumnMonthYearPicker,
                      showYearPicker: r.props.showYearPicker,
                      showQuarterYearPicker: r.props.showQuarterYearPicker,
                      showPopperArrow: r.props.showPopperArrow,
                      excludeScrollbar: r.props.excludeScrollbar,
                      handleOnKeyDown: r.props.onKeyDown,
                      handleOnDayKeyDown: r.onDayKeyDown,
                      isInputFocused: r.state.focused,
                      customTimeInput: r.props.customTimeInput,
                      setPreSelection: r.setPreSelection,
                    },
                    r.props.children,
                  )
                : null;
            }),
            _t(Et(r), "renderAriaLiveRegion", function () {
              var e,
                t = r.props,
                a = t.dateFormat,
                n = t.locale,
                o =
                  r.props.showTimeInput || r.props.showTimeSelect
                    ? "PPPPp"
                    : "PPPP";
              return (
                (e = r.props.selectsRange
                  ? "Selected start date: "
                      .concat(
                        Qt(r.props.startDate, { dateFormat: o, locale: n }),
                        ". ",
                      )
                      .concat(
                        r.props.endDate
                          ? "End date: " +
                              Qt(r.props.endDate, { dateFormat: o, locale: n })
                          : "",
                      )
                  : r.props.showTimeSelectOnly
                  ? "Selected time: ".concat(
                      Qt(r.props.selected, { dateFormat: a, locale: n }),
                    )
                  : r.props.showYearPicker
                  ? "Selected year: ".concat(
                      Qt(r.props.selected, { dateFormat: "yyyy", locale: n }),
                    )
                  : r.props.showMonthYearPicker
                  ? "Selected month: ".concat(
                      Qt(r.props.selected, {
                        dateFormat: "MMMM yyyy",
                        locale: n,
                      }),
                    )
                  : r.props.showQuarterYearPicker
                  ? "Selected quarter: ".concat(
                      Qt(r.props.selected, {
                        dateFormat: "yyyy, QQQ",
                        locale: n,
                      }),
                    )
                  : "Selected date: ".concat(
                      Qt(r.props.selected, { dateFormat: o, locale: n }),
                    )),
                ce.default.createElement(
                  "span",
                  {
                    role: "alert",
                    "aria-live": "polite",
                    className: "react-datepicker__aria-live",
                  },
                  e,
                )
              );
            }),
            _t(Et(r), "renderDateInput", function () {
              var e,
                t = he.default(r.props.className, _t({}, pr, r.state.open)),
                a =
                  r.props.customInput ||
                  ce.default.createElement("input", { type: "text" }),
                n = r.props.customInputRef || "ref",
                o =
                  "string" == typeof r.props.value
                    ? r.props.value
                    : "string" == typeof r.state.inputValue
                    ? r.state.inputValue
                    : r.props.selectsRange
                    ? (function (e, t, a) {
                        if (!e) return "";
                        var r = Qt(e, a),
                          n = t ? Qt(t, a) : "";
                        return "".concat(r, " - ").concat(n);
                      })(r.props.startDate, r.props.endDate, r.props)
                    : Qt(r.props.selected, r.props);
              return ce.default.cloneElement(
                a,
                (_t((e = {}), n, function (e) {
                  r.input = e;
                }),
                _t(e, "value", o),
                _t(e, "onBlur", r.handleBlur),
                _t(e, "onChange", r.handleChange),
                _t(e, "onClick", r.onInputClick),
                _t(e, "onFocus", r.handleFocus),
                _t(e, "onKeyDown", r.onInputKeyDown),
                _t(e, "id", r.props.id),
                _t(e, "name", r.props.name),
                _t(e, "form", r.props.form),
                _t(e, "autoFocus", r.props.autoFocus),
                _t(e, "placeholder", r.props.placeholderText),
                _t(e, "disabled", r.props.disabled),
                _t(e, "autoComplete", r.props.autoComplete),
                _t(e, "className", he.default(a.props.className, t)),
                _t(e, "title", r.props.title),
                _t(e, "readOnly", r.props.readOnly),
                _t(e, "required", r.props.required),
                _t(e, "tabIndex", r.props.tabIndex),
                _t(e, "aria-describedby", r.props.ariaDescribedBy),
                _t(e, "aria-invalid", r.props.ariaInvalid),
                _t(e, "aria-labelledby", r.props.ariaLabelledBy),
                _t(e, "aria-required", r.props.ariaRequired),
                e),
              );
            }),
            _t(Et(r), "renderClearButton", function () {
              var e = r.props,
                t = e.isClearable,
                a = e.selected,
                n = e.startDate,
                o = e.endDate,
                s = e.clearButtonTitle,
                l = e.clearButtonClassName,
                i = void 0 === l ? "" : l,
                d = e.ariaLabelClose,
                u = void 0 === d ? "Close" : d;
              return !t || (null == a && null == n && null == o)
                ? null
                : ce.default.createElement("button", {
                    type: "button",
                    className: "react-datepicker__close-icon ".concat(i).trim(),
                    "aria-label": u,
                    onClick: r.onClearClick,
                    title: s,
                    tabIndex: -1,
                  });
            }),
            (r.state = r.calcInitialState()),
            r
          );
        }
        return (
          Mt(
            a,
            [
              {
                key: "componentDidMount",
                value: function () {
                  window.addEventListener("scroll", this.onScroll, !0);
                },
              },
              {
                key: "componentDidUpdate",
                value: function (e, t) {
                  var a, r;
                  e.inline &&
                    ((a = e.selected),
                    (r = this.props.selected),
                    a && r
                      ? Le.default(a) !== Le.default(r) ||
                        Ae.default(a) !== Ae.default(r)
                      : a !== r) &&
                    this.setPreSelection(this.props.selected),
                    void 0 !== this.state.monthSelectedIn &&
                      e.monthsShown !== this.props.monthsShown &&
                      this.setState({ monthSelectedIn: 0 }),
                    e.highlightDates !== this.props.highlightDates &&
                      this.setState({
                        highlightDates: Ma(this.props.highlightDates),
                      }),
                    t.focused ||
                      ta(e.selected, this.props.selected) ||
                      this.setState({ inputValue: null }),
                    t.open !== this.state.open &&
                      (!1 === t.open &&
                        !0 === this.state.open &&
                        this.props.onCalendarOpen(),
                      !0 === t.open &&
                        !1 === this.state.open &&
                        this.props.onCalendarClose());
                },
              },
              {
                key: "componentWillUnmount",
                value: function () {
                  this.clearPreventFocusTimeout(),
                    window.removeEventListener("scroll", this.onScroll, !0);
                },
              },
              {
                key: "renderInputContainer",
                value: function () {
                  var e = this.props.showIcon;
                  return ce.default.createElement(
                    "div",
                    {
                      className: "react-datepicker__input-container".concat(
                        e ? " react-datepicker__view-calendar-icon" : "",
                      ),
                    },
                    e &&
                      ce.default.createElement(
                        "svg",
                        {
                          className: "react-datepicker__calendar-icon",
                          xmlns: "http://www.w3.org/2000/svg",
                          viewBox: "0 0 448 512",
                        },
                        ce.default.createElement("path", {
                          d: "M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z",
                        }),
                      ),
                    this.state.isRenderAriaLiveMessage &&
                      this.renderAriaLiveRegion(),
                    this.renderDateInput(),
                    this.renderClearButton(),
                  );
                },
              },
              {
                key: "render",
                value: function () {
                  var e = this.renderCalendar();
                  if (this.props.inline) return e;
                  if (this.props.withPortal) {
                    var t = this.state.open
                      ? ce.default.createElement(
                          ir,
                          { enableTabLoop: this.props.enableTabLoop },
                          ce.default.createElement(
                            "div",
                            {
                              className: "react-datepicker__portal",
                              tabIndex: -1,
                              onKeyDown: this.onPortalKeyDown,
                            },
                            e,
                          ),
                        )
                      : null;
                    return (
                      this.state.open &&
                        this.props.portalId &&
                        (t = ce.default.createElement(
                          or,
                          {
                            portalId: this.props.portalId,
                            portalHost: this.props.portalHost,
                          },
                          t,
                        )),
                      ce.default.createElement(
                        "div",
                        null,
                        this.renderInputContainer(),
                        t,
                      )
                    );
                  }
                  return ce.default.createElement(ur, {
                    className: this.props.popperClassName,
                    wrapperClassName: this.props.wrapperClassName,
                    hidePopper: !this.isCalendarOpen(),
                    portalId: this.props.portalId,
                    portalHost: this.props.portalHost,
                    popperModifiers: this.props.popperModifiers,
                    targetComponent: this.renderInputContainer(),
                    popperContainer: this.props.popperContainer,
                    popperComponent: e,
                    popperPlacement: this.props.popperPlacement,
                    popperProps: this.props.popperProps,
                    popperOnKeyDown: this.onPopperKeyDown,
                    enableTabLoop: this.props.enableTabLoop,
                  });
                },
              },
            ],
            [
              {
                key: "defaultProps",
                get: function () {
                  return {
                    allowSameDay: !1,
                    dateFormat: "MM/dd/yyyy",
                    dateFormatCalendar: "LLLL yyyy",
                    onChange: function () {},
                    disabled: !1,
                    disabledKeyboardNavigation: !1,
                    dropdownMode: "scroll",
                    onFocus: function () {},
                    onBlur: function () {},
                    onKeyDown: function () {},
                    onInputClick: function () {},
                    onSelect: function () {},
                    onClickOutside: function () {},
                    onMonthChange: function () {},
                    onCalendarOpen: function () {},
                    onCalendarClose: function () {},
                    preventOpenOnFocus: !1,
                    onYearChange: function () {},
                    onInputError: function () {},
                    monthsShown: 1,
                    readOnly: !1,
                    withPortal: !1,
                    selectsDisabledDaysInRange: !1,
                    shouldCloseOnSelect: !0,
                    showTimeSelect: !1,
                    showTimeInput: !1,
                    showPreviousMonths: !1,
                    showMonthYearPicker: !1,
                    showFullMonthYearPicker: !1,
                    showTwoColumnMonthYearPicker: !1,
                    showFourColumnMonthYearPicker: !1,
                    showYearPicker: !1,
                    showQuarterYearPicker: !1,
                    strictParsing: !1,
                    timeIntervals: 30,
                    timeCaption: "Time",
                    previousMonthAriaLabel: "Previous Month",
                    previousMonthButtonLabel: "Previous Month",
                    nextMonthAriaLabel: "Next Month",
                    nextMonthButtonLabel: "Next Month",
                    previousYearAriaLabel: "Previous Year",
                    previousYearButtonLabel: "Previous Year",
                    nextYearAriaLabel: "Next Year",
                    nextYearButtonLabel: "Next Year",
                    timeInputLabel: "Time",
                    enableTabLoop: !0,
                    yearItemNumber: qt,
                    focusSelectedMonth: !1,
                    showPopperArrow: !0,
                    excludeScrollbar: !0,
                    customTimeInput: null,
                    calendarStartDay: void 0,
                  };
                },
              },
            ],
          ),
          a
        );
      })(ce.default.Component);
    _t(hr, "propTypes", {
      adjustDateOnChange: fe.default.bool,
      allowSameDay: fe.default.bool,
      ariaDescribedBy: fe.default.string,
      ariaInvalid: fe.default.string,
      ariaLabelClose: fe.default.string,
      ariaLabelledBy: fe.default.string,
      ariaRequired: fe.default.string,
      autoComplete: fe.default.string,
      autoFocus: fe.default.bool,
      calendarClassName: fe.default.string,
      calendarContainer: fe.default.func,
      children: fe.default.node,
      chooseDayAriaLabelPrefix: fe.default.string,
      closeOnScroll: fe.default.oneOfType([fe.default.bool, fe.default.func]),
      className: fe.default.string,
      customInput: fe.default.element,
      customInputRef: fe.default.string,
      calendarStartDay: fe.default.number,
      dateFormat: fe.default.oneOfType([fe.default.string, fe.default.array]),
      dateFormatCalendar: fe.default.string,
      dayClassName: fe.default.func,
      weekDayClassName: fe.default.func,
      disabledDayAriaLabelPrefix: fe.default.string,
      monthClassName: fe.default.func,
      timeClassName: fe.default.func,
      disabled: fe.default.bool,
      disabledKeyboardNavigation: fe.default.bool,
      dropdownMode: fe.default.oneOf(["scroll", "select"]).isRequired,
      endDate: fe.default.instanceOf(Date),
      excludeDates: fe.default.array,
      excludeDateIntervals: fe.default.arrayOf(
        fe.default.shape({
          start: fe.default.instanceOf(Date),
          end: fe.default.instanceOf(Date),
        }),
      ),
      filterDate: fe.default.func,
      fixedHeight: fe.default.bool,
      form: fe.default.string,
      formatWeekNumber: fe.default.func,
      highlightDates: fe.default.array,
      holidays: fe.default.array,
      id: fe.default.string,
      includeDates: fe.default.array,
      includeDateIntervals: fe.default.array,
      includeTimes: fe.default.array,
      injectTimes: fe.default.array,
      inline: fe.default.bool,
      isClearable: fe.default.bool,
      showIcon: fe.default.bool,
      locale: fe.default.oneOfType([
        fe.default.string,
        fe.default.shape({ locale: fe.default.object }),
      ]),
      maxDate: fe.default.instanceOf(Date),
      minDate: fe.default.instanceOf(Date),
      monthsShown: fe.default.number,
      name: fe.default.string,
      onBlur: fe.default.func,
      onChange: fe.default.func.isRequired,
      onSelect: fe.default.func,
      onWeekSelect: fe.default.func,
      onClickOutside: fe.default.func,
      onChangeRaw: fe.default.func,
      onFocus: fe.default.func,
      onInputClick: fe.default.func,
      onKeyDown: fe.default.func,
      onMonthChange: fe.default.func,
      onYearChange: fe.default.func,
      onInputError: fe.default.func,
      open: fe.default.bool,
      onCalendarOpen: fe.default.func,
      onCalendarClose: fe.default.func,
      openToDate: fe.default.instanceOf(Date),
      peekNextMonth: fe.default.bool,
      placeholderText: fe.default.string,
      popperContainer: fe.default.func,
      popperClassName: fe.default.string,
      popperModifiers: fe.default.arrayOf(fe.default.object),
      popperPlacement: fe.default.oneOf(dr),
      popperProps: fe.default.object,
      preventOpenOnFocus: fe.default.bool,
      readOnly: fe.default.bool,
      required: fe.default.bool,
      scrollableYearDropdown: fe.default.bool,
      scrollableMonthYearDropdown: fe.default.bool,
      selected: fe.default.instanceOf(Date),
      selectsEnd: fe.default.bool,
      selectsStart: fe.default.bool,
      selectsRange: fe.default.bool,
      selectsDisabledDaysInRange: fe.default.bool,
      showMonthDropdown: fe.default.bool,
      showPreviousMonths: fe.default.bool,
      showMonthYearDropdown: fe.default.bool,
      showWeekNumbers: fe.default.bool,
      showYearDropdown: fe.default.bool,
      strictParsing: fe.default.bool,
      forceShowMonthNavigation: fe.default.bool,
      showDisabledMonthNavigation: fe.default.bool,
      startDate: fe.default.instanceOf(Date),
      startOpen: fe.default.bool,
      tabIndex: fe.default.number,
      timeCaption: fe.default.string,
      title: fe.default.string,
      todayButton: fe.default.node,
      useWeekdaysShort: fe.default.bool,
      formatWeekDay: fe.default.func,
      value: fe.default.string,
      weekLabel: fe.default.string,
      withPortal: fe.default.bool,
      portalId: fe.default.string,
      portalHost: fe.default.instanceOf(ShadowRoot),
      yearItemNumber: fe.default.number,
      yearDropdownItemNumber: fe.default.number,
      shouldCloseOnSelect: fe.default.bool,
      showTimeInput: fe.default.bool,
      showMonthYearPicker: fe.default.bool,
      showFullMonthYearPicker: fe.default.bool,
      showTwoColumnMonthYearPicker: fe.default.bool,
      showFourColumnMonthYearPicker: fe.default.bool,
      showYearPicker: fe.default.bool,
      showQuarterYearPicker: fe.default.bool,
      showDateSelect: fe.default.bool,
      showTimeSelect: fe.default.bool,
      showTimeSelectOnly: fe.default.bool,
      timeFormat: fe.default.string,
      timeIntervals: fe.default.number,
      minTime: fe.default.instanceOf(Date),
      maxTime: fe.default.instanceOf(Date),
      excludeTimes: fe.default.array,
      filterTime: fe.default.func,
      useShortMonthInDropdown: fe.default.bool,
      clearButtonTitle: fe.default.string,
      clearButtonClassName: fe.default.string,
      previousMonthAriaLabel: fe.default.string,
      previousMonthButtonLabel: fe.default.oneOfType([
        fe.default.string,
        fe.default.node,
      ]),
      nextMonthAriaLabel: fe.default.string,
      nextMonthButtonLabel: fe.default.oneOfType([
        fe.default.string,
        fe.default.node,
      ]),
      previousYearAriaLabel: fe.default.string,
      previousYearButtonLabel: fe.default.string,
      nextYearAriaLabel: fe.default.string,
      nextYearButtonLabel: fe.default.string,
      timeInputLabel: fe.default.string,
      renderCustomHeader: fe.default.func,
      renderDayContents: fe.default.func,
      renderMonthContent: fe.default.func,
      renderQuarterContent: fe.default.func,
      renderYearContent: fe.default.func,
      wrapperClassName: fe.default.string,
      focusSelectedMonth: fe.default.bool,
      onDayMouseEnter: fe.default.func,
      onMonthMouseLeave: fe.default.func,
      onYearMouseEnter: fe.default.func,
      onYearMouseLeave: fe.default.func,
      showPopperArrow: fe.default.bool,
      excludeScrollbar: fe.default.bool,
      enableTabLoop: fe.default.bool,
      customTimeInput: fe.default.element,
      weekAriaLabelPrefix: fe.default.string,
      monthAriaLabelPrefix: fe.default.string,
    });
    var mr = "input",
      Dr = "navigate";
    (e.CalendarContainer = tr),
      (e.default = hr),
      (e.getDefaultLocale = ra),
      (e.registerLocale = function (e, t) {
        var a = "undefined" != typeof window ? window : globalThis;
        a.__localeData__ || (a.__localeData__ = {}), (a.__localeData__[e] = t);
      }),
      (e.setDefaultLocale = function (e) {
        ("undefined" != typeof window ? window : globalThis).__localeId__ = e;
      }),
      Object.defineProperty(e, "__esModule", { value: !0 });
  },
);
