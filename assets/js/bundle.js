!(function() {
  var t,
    e = { exports: {} };
  (t = function() {
    "use strict";
    var t, n;
    function i() {
      return t.apply(null, arguments);
    }
    function a(t) {
      return (
        t instanceof Array ||
        "[object Array]" === Object.prototype.toString.call(t)
      );
    }
    function r(t) {
      return (
        null != t && "[object Object]" === Object.prototype.toString.call(t)
      );
    }
    function o(t) {
      return void 0 === t;
    }
    function s(t) {
      return (
        "number" == typeof t ||
        "[object Number]" === Object.prototype.toString.call(t)
      );
    }
    function l(t) {
      return (
        t instanceof Date ||
        "[object Date]" === Object.prototype.toString.call(t)
      );
    }
    function u(t, e) {
      var n,
        i = [];
      for (n = 0; n < t.length; ++n) i.push(e(t[n], n));
      return i;
    }
    function h(t, e) {
      return Object.prototype.hasOwnProperty.call(t, e);
    }
    function d(t, e) {
      for (var n in e) h(e, n) && (t[n] = e[n]);
      return (
        h(e, "toString") && (t.toString = e.toString),
        h(e, "valueOf") && (t.valueOf = e.valueOf),
        t
      );
    }
    function c(t, e, n, i) {
      return Te(t, e, n, i, !0).utc();
    }
    function f(t) {
      return (
        null == t._pf &&
          (t._pf = {
            empty: !1,
            unusedTokens: [],
            unusedInput: [],
            overflow: -2,
            charsLeftOver: 0,
            nullInput: !1,
            invalidMonth: null,
            invalidFormat: !1,
            userInvalidated: !1,
            iso: !1,
            parsedDateParts: [],
            meridiem: null,
            rfc2822: !1,
            weekdayMismatch: !1
          }),
        t._pf
      );
    }
    function g(t) {
      if (null == t._isValid) {
        var e = f(t),
          i = n.call(e.parsedDateParts, function(t) {
            return null != t;
          }),
          a =
            !isNaN(t._d.getTime()) &&
            e.overflow < 0 &&
            !e.empty &&
            !e.invalidMonth &&
            !e.invalidWeekday &&
            !e.weekdayMismatch &&
            !e.nullInput &&
            !e.invalidFormat &&
            !e.userInvalidated &&
            (!e.meridiem || (e.meridiem && i));
        if (
          (t._strict &&
            (a =
              a &&
              0 === e.charsLeftOver &&
              0 === e.unusedTokens.length &&
              void 0 === e.bigHour),
          null != Object.isFrozen && Object.isFrozen(t))
        )
          return a;
        t._isValid = a;
      }
      return t._isValid;
    }
    function p(t) {
      var e = c(NaN);
      return null != t ? d(f(e), t) : (f(e).userInvalidated = !0), e;
    }
    n = Array.prototype.some
      ? Array.prototype.some
      : function(t) {
          for (var e = Object(this), n = e.length >>> 0, i = 0; i < n; i++)
            if (i in e && t.call(this, e[i], i, e)) return !0;
          return !1;
        };
    var m = (i.momentProperties = []);
    function v(t, e) {
      var n, i, a;
      if (
        (o(e._isAMomentObject) || (t._isAMomentObject = e._isAMomentObject),
        o(e._i) || (t._i = e._i),
        o(e._f) || (t._f = e._f),
        o(e._l) || (t._l = e._l),
        o(e._strict) || (t._strict = e._strict),
        o(e._tzm) || (t._tzm = e._tzm),
        o(e._isUTC) || (t._isUTC = e._isUTC),
        o(e._offset) || (t._offset = e._offset),
        o(e._pf) || (t._pf = f(e)),
        o(e._locale) || (t._locale = e._locale),
        m.length > 0)
      )
        for (n = 0; n < m.length; n++) o((a = e[(i = m[n])])) || (t[i] = a);
      return t;
    }
    var y = !1;
    function b(t) {
      v(this, t),
        (this._d = new Date(null != t._d ? t._d.getTime() : NaN)),
        this.isValid() || (this._d = new Date(NaN)),
        !1 === y && ((y = !0), i.updateOffset(this), (y = !1));
    }
    function _(t) {
      return t instanceof b || (null != t && null != t._isAMomentObject);
    }
    function x(t) {
      return t < 0 ? Math.ceil(t) || 0 : Math.floor(t);
    }
    function w(t) {
      var e = +t,
        n = 0;
      return 0 !== e && isFinite(e) && (n = x(e)), n;
    }
    function k(t, e, n) {
      var i,
        a = Math.min(t.length, e.length),
        r = Math.abs(t.length - e.length),
        o = 0;
      for (i = 0; i < a; i++)
        ((n && t[i] !== e[i]) || (!n && w(t[i]) !== w(e[i]))) && o++;
      return o + r;
    }
    function M(t) {
      !1 === i.suppressDeprecationWarnings &&
        "undefined" != typeof console &&
        console.warn &&
        console.warn("Deprecation warning: " + t);
    }
    function S(t, e) {
      var n = !0;
      return d(function() {
        if (
          (null != i.deprecationHandler && i.deprecationHandler(null, t), n)
        ) {
          for (var a, r = [], o = 0; o < arguments.length; o++) {
            if (((a = ""), "object" == typeof arguments[o])) {
              for (var s in ((a += "\n[" + o + "] "), arguments[0]))
                a += s + ": " + arguments[0][s] + ", ";
              a = a.slice(0, -2);
            } else a = arguments[o];
            r.push(a);
          }
          M(
            t +
              "\nArguments: " +
              Array.prototype.slice.call(r).join("") +
              "\n" +
              new Error().stack
          ),
            (n = !1);
        }
        return e.apply(this, arguments);
      }, e);
    }
    var D,
      C = {};
    function A(t, e) {
      null != i.deprecationHandler && i.deprecationHandler(t, e),
        C[t] || (M(e), (C[t] = !0));
    }
    function T(t) {
      return (
        t instanceof Function ||
        "[object Function]" === Object.prototype.toString.call(t)
      );
    }
    function P(t, e) {
      var n,
        i = d({}, t);
      for (n in e)
        h(e, n) &&
          (r(t[n]) && r(e[n])
            ? ((i[n] = {}), d(i[n], t[n]), d(i[n], e[n]))
            : null != e[n]
            ? (i[n] = e[n])
            : delete i[n]);
      for (n in t) h(t, n) && !h(e, n) && r(t[n]) && (i[n] = d({}, i[n]));
      return i;
    }
    function O(t) {
      null != t && this.set(t);
    }
    (i.suppressDeprecationWarnings = !1),
      (i.deprecationHandler = null),
      (D = Object.keys
        ? Object.keys
        : function(t) {
            var e,
              n = [];
            for (e in t) h(t, e) && n.push(e);
            return n;
          });
    var I = {};
    function F(t, e) {
      var n = t.toLowerCase();
      I[n] = I[n + "s"] = I[e] = t;
    }
    function V(t) {
      return "string" == typeof t ? I[t] || I[t.toLowerCase()] : void 0;
    }
    function L(t) {
      var e,
        n,
        i = {};
      for (n in t) h(t, n) && (e = V(n)) && (i[e] = t[n]);
      return i;
    }
    var R = {};
    function N(t, e) {
      R[t] = e;
    }
    function W(t, e, n) {
      var i = "" + Math.abs(t),
        a = e - i.length;
      return (
        (t >= 0 ? (n ? "+" : "") : "-") +
        Math.pow(10, Math.max(0, a))
          .toString()
          .substr(1) +
        i
      );
    }
    var Y = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,
      E = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,
      j = {},
      z = {};
    function B(t, e, n, i) {
      var a = i;
      "string" == typeof i &&
        (a = function() {
          return this[i]();
        }),
        t && (z[t] = a),
        e &&
          (z[e[0]] = function() {
            return W(a.apply(this, arguments), e[1], e[2]);
          }),
        n &&
          (z[n] = function() {
            return this.localeData().ordinal(a.apply(this, arguments), t);
          });
    }
    function H(t, e) {
      return t.isValid()
        ? ((e = U(e, t.localeData())),
          (j[e] =
            j[e] ||
            (function(t) {
              var e,
                n,
                i,
                a = t.match(Y);
              for (e = 0, n = a.length; e < n; e++)
                z[a[e]]
                  ? (a[e] = z[a[e]])
                  : (a[e] = (i = a[e]).match(/\[[\s\S]/)
                      ? i.replace(/^\[|\]$/g, "")
                      : i.replace(/\\/g, ""));
              return function(e) {
                var i,
                  r = "";
                for (i = 0; i < n; i++) r += T(a[i]) ? a[i].call(e, t) : a[i];
                return r;
              };
            })(e)),
          j[e](t))
        : t.localeData().invalidDate();
    }
    function U(t, e) {
      var n = 5;
      function i(t) {
        return e.longDateFormat(t) || t;
      }
      for (E.lastIndex = 0; n >= 0 && E.test(t); )
        (t = t.replace(E, i)), (E.lastIndex = 0), (n -= 1);
      return t;
    }
    var q = /\d/,
      G = /\d\d/,
      Z = /\d{3}/,
      $ = /\d{4}/,
      X = /[+-]?\d{6}/,
      K = /\d\d?/,
      J = /\d\d\d\d?/,
      Q = /\d\d\d\d\d\d?/,
      tt = /\d{1,3}/,
      et = /\d{1,4}/,
      nt = /[+-]?\d{1,6}/,
      it = /\d+/,
      at = /[+-]?\d+/,
      rt = /Z|[+-]\d\d:?\d\d/gi,
      ot = /Z|[+-]\d\d(?::?\d\d)?/gi,
      st = /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i,
      lt = {};
    function ut(t, e, n) {
      lt[t] = T(e)
        ? e
        : function(t, i) {
            return t && n ? n : e;
          };
    }
    function ht(t, e) {
      return h(lt, t)
        ? lt[t](e._strict, e._locale)
        : new RegExp(
            dt(
              t
                .replace("\\", "")
                .replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function(
                  t,
                  e,
                  n,
                  i,
                  a
                ) {
                  return e || n || i || a;
                })
            )
          );
    }
    function dt(t) {
      return t.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
    }
    var ct = {};
    function ft(t, e) {
      var n,
        i = e;
      for (
        "string" == typeof t && (t = [t]),
          s(e) &&
            (i = function(t, n) {
              n[e] = w(t);
            }),
          n = 0;
        n < t.length;
        n++
      )
        ct[t[n]] = i;
    }
    function gt(t, e) {
      ft(t, function(t, n, i, a) {
        (i._w = i._w || {}), e(t, i._w, i, a);
      });
    }
    function pt(t, e, n) {
      null != e && h(ct, t) && ct[t](e, n._a, n, t);
    }
    var mt = 0,
      vt = 1,
      yt = 2,
      bt = 3,
      _t = 4,
      xt = 5,
      wt = 6,
      kt = 7,
      Mt = 8;
    function St(t) {
      return Dt(t) ? 366 : 365;
    }
    function Dt(t) {
      return (t % 4 == 0 && t % 100 != 0) || t % 400 == 0;
    }
    B("Y", 0, 0, function() {
      var t = this.year();
      return t <= 9999 ? "" + t : "+" + t;
    }),
      B(0, ["YY", 2], 0, function() {
        return this.year() % 100;
      }),
      B(0, ["YYYY", 4], 0, "year"),
      B(0, ["YYYYY", 5], 0, "year"),
      B(0, ["YYYYYY", 6, !0], 0, "year"),
      F("year", "y"),
      N("year", 1),
      ut("Y", at),
      ut("YY", K, G),
      ut("YYYY", et, $),
      ut("YYYYY", nt, X),
      ut("YYYYYY", nt, X),
      ft(["YYYYY", "YYYYYY"], mt),
      ft("YYYY", function(t, e) {
        e[mt] = 2 === t.length ? i.parseTwoDigitYear(t) : w(t);
      }),
      ft("YY", function(t, e) {
        e[mt] = i.parseTwoDigitYear(t);
      }),
      ft("Y", function(t, e) {
        e[mt] = parseInt(t, 10);
      }),
      (i.parseTwoDigitYear = function(t) {
        return w(t) + (w(t) > 68 ? 1900 : 2e3);
      });
    var Ct,
      At = Tt("FullYear", !0);
    function Tt(t, e) {
      return function(n) {
        return null != n
          ? (Ot(this, t, n), i.updateOffset(this, e), this)
          : Pt(this, t);
      };
    }
    function Pt(t, e) {
      return t.isValid() ? t._d["get" + (t._isUTC ? "UTC" : "") + e]() : NaN;
    }
    function Ot(t, e, n) {
      t.isValid() &&
        !isNaN(n) &&
        ("FullYear" === e && Dt(t.year()) && 1 === t.month() && 29 === t.date()
          ? t._d["set" + (t._isUTC ? "UTC" : "") + e](
              n,
              t.month(),
              It(n, t.month())
            )
          : t._d["set" + (t._isUTC ? "UTC" : "") + e](n));
    }
    function It(t, e) {
      if (isNaN(t) || isNaN(e)) return NaN;
      var n = ((e % 12) + 12) % 12;
      return (
        (t += (e - n) / 12), 1 === n ? (Dt(t) ? 29 : 28) : 31 - ((n % 7) % 2)
      );
    }
    (Ct = Array.prototype.indexOf
      ? Array.prototype.indexOf
      : function(t) {
          var e;
          for (e = 0; e < this.length; ++e) if (this[e] === t) return e;
          return -1;
        }),
      B("M", ["MM", 2], "Mo", function() {
        return this.month() + 1;
      }),
      B("MMM", 0, 0, function(t) {
        return this.localeData().monthsShort(this, t);
      }),
      B("MMMM", 0, 0, function(t) {
        return this.localeData().months(this, t);
      }),
      F("month", "M"),
      N("month", 8),
      ut("M", K),
      ut("MM", K, G),
      ut("MMM", function(t, e) {
        return e.monthsShortRegex(t);
      }),
      ut("MMMM", function(t, e) {
        return e.monthsRegex(t);
      }),
      ft(["M", "MM"], function(t, e) {
        e[vt] = w(t) - 1;
      }),
      ft(["MMM", "MMMM"], function(t, e, n, i) {
        var a = n._locale.monthsParse(t, i, n._strict);
        null != a ? (e[vt] = a) : (f(n).invalidMonth = t);
      });
    var Ft = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/,
      Vt = "January_February_March_April_May_June_July_August_September_October_November_December".split(
        "_"
      ),
      Lt = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_");
    function Rt(t, e) {
      var n;
      if (!t.isValid()) return t;
      if ("string" == typeof e)
        if (/^\d+$/.test(e)) e = w(e);
        else if (!s((e = t.localeData().monthsParse(e)))) return t;
      return (
        (n = Math.min(t.date(), It(t.year(), e))),
        t._d["set" + (t._isUTC ? "UTC" : "") + "Month"](e, n),
        t
      );
    }
    function Nt(t) {
      return null != t
        ? (Rt(this, t), i.updateOffset(this, !0), this)
        : Pt(this, "Month");
    }
    var Wt = st,
      Yt = st;
    function Et() {
      function t(t, e) {
        return e.length - t.length;
      }
      var e,
        n,
        i = [],
        a = [],
        r = [];
      for (e = 0; e < 12; e++)
        (n = c([2e3, e])),
          i.push(this.monthsShort(n, "")),
          a.push(this.months(n, "")),
          r.push(this.months(n, "")),
          r.push(this.monthsShort(n, ""));
      for (i.sort(t), a.sort(t), r.sort(t), e = 0; e < 12; e++)
        (i[e] = dt(i[e])), (a[e] = dt(a[e]));
      for (e = 0; e < 24; e++) r[e] = dt(r[e]);
      (this._monthsRegex = new RegExp("^(" + r.join("|") + ")", "i")),
        (this._monthsShortRegex = this._monthsRegex),
        (this._monthsStrictRegex = new RegExp("^(" + a.join("|") + ")", "i")),
        (this._monthsShortStrictRegex = new RegExp(
          "^(" + i.join("|") + ")",
          "i"
        ));
    }
    function jt(t) {
      var e;
      if (t < 100 && t >= 0) {
        var n = Array.prototype.slice.call(arguments);
        (n[0] = t + 400),
          (e = new Date(Date.UTC.apply(null, n))),
          isFinite(e.getUTCFullYear()) && e.setUTCFullYear(t);
      } else e = new Date(Date.UTC.apply(null, arguments));
      return e;
    }
    function zt(t, e, n) {
      var i = 7 + e - n;
      return (-(7 + jt(t, 0, i).getUTCDay() - e) % 7) + i - 1;
    }
    function Bt(t, e, n, i, a) {
      var r,
        o,
        s = 1 + 7 * (e - 1) + ((7 + n - i) % 7) + zt(t, i, a);
      return (
        s <= 0
          ? (o = St((r = t - 1)) + s)
          : s > St(t)
          ? ((r = t + 1), (o = s - St(t)))
          : ((r = t), (o = s)),
        { year: r, dayOfYear: o }
      );
    }
    function Ht(t, e, n) {
      var i,
        a,
        r = zt(t.year(), e, n),
        o = Math.floor((t.dayOfYear() - r - 1) / 7) + 1;
      return (
        o < 1
          ? (i = o + Ut((a = t.year() - 1), e, n))
          : o > Ut(t.year(), e, n)
          ? ((i = o - Ut(t.year(), e, n)), (a = t.year() + 1))
          : ((a = t.year()), (i = o)),
        { week: i, year: a }
      );
    }
    function Ut(t, e, n) {
      var i = zt(t, e, n),
        a = zt(t + 1, e, n);
      return (St(t) - i + a) / 7;
    }
    function qt(t, e) {
      return t.slice(e, 7).concat(t.slice(0, e));
    }
    B("w", ["ww", 2], "wo", "week"),
      B("W", ["WW", 2], "Wo", "isoWeek"),
      F("week", "w"),
      F("isoWeek", "W"),
      N("week", 5),
      N("isoWeek", 5),
      ut("w", K),
      ut("ww", K, G),
      ut("W", K),
      ut("WW", K, G),
      gt(["w", "ww", "W", "WW"], function(t, e, n, i) {
        e[i.substr(0, 1)] = w(t);
      }),
      B("d", 0, "do", "day"),
      B("dd", 0, 0, function(t) {
        return this.localeData().weekdaysMin(this, t);
      }),
      B("ddd", 0, 0, function(t) {
        return this.localeData().weekdaysShort(this, t);
      }),
      B("dddd", 0, 0, function(t) {
        return this.localeData().weekdays(this, t);
      }),
      B("e", 0, 0, "weekday"),
      B("E", 0, 0, "isoWeekday"),
      F("day", "d"),
      F("weekday", "e"),
      F("isoWeekday", "E"),
      N("day", 11),
      N("weekday", 11),
      N("isoWeekday", 11),
      ut("d", K),
      ut("e", K),
      ut("E", K),
      ut("dd", function(t, e) {
        return e.weekdaysMinRegex(t);
      }),
      ut("ddd", function(t, e) {
        return e.weekdaysShortRegex(t);
      }),
      ut("dddd", function(t, e) {
        return e.weekdaysRegex(t);
      }),
      gt(["dd", "ddd", "dddd"], function(t, e, n, i) {
        var a = n._locale.weekdaysParse(t, i, n._strict);
        null != a ? (e.d = a) : (f(n).invalidWeekday = t);
      }),
      gt(["d", "e", "E"], function(t, e, n, i) {
        e[i] = w(t);
      });
    var Gt = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split(
        "_"
      ),
      Zt = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
      $t = "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
      Xt = st,
      Kt = st,
      Jt = st;
    function Qt() {
      function t(t, e) {
        return e.length - t.length;
      }
      var e,
        n,
        i,
        a,
        r,
        o = [],
        s = [],
        l = [],
        u = [];
      for (e = 0; e < 7; e++)
        (n = c([2e3, 1]).day(e)),
          (i = this.weekdaysMin(n, "")),
          (a = this.weekdaysShort(n, "")),
          (r = this.weekdays(n, "")),
          o.push(i),
          s.push(a),
          l.push(r),
          u.push(i),
          u.push(a),
          u.push(r);
      for (o.sort(t), s.sort(t), l.sort(t), u.sort(t), e = 0; e < 7; e++)
        (s[e] = dt(s[e])), (l[e] = dt(l[e])), (u[e] = dt(u[e]));
      (this._weekdaysRegex = new RegExp("^(" + u.join("|") + ")", "i")),
        (this._weekdaysShortRegex = this._weekdaysRegex),
        (this._weekdaysMinRegex = this._weekdaysRegex),
        (this._weekdaysStrictRegex = new RegExp("^(" + l.join("|") + ")", "i")),
        (this._weekdaysShortStrictRegex = new RegExp(
          "^(" + s.join("|") + ")",
          "i"
        )),
        (this._weekdaysMinStrictRegex = new RegExp(
          "^(" + o.join("|") + ")",
          "i"
        ));
    }
    function te() {
      return this.hours() % 12 || 12;
    }
    function ee(t, e) {
      B(t, 0, 0, function() {
        return this.localeData().meridiem(this.hours(), this.minutes(), e);
      });
    }
    function ne(t, e) {
      return e._meridiemParse;
    }
    B("H", ["HH", 2], 0, "hour"),
      B("h", ["hh", 2], 0, te),
      B("k", ["kk", 2], 0, function() {
        return this.hours() || 24;
      }),
      B("hmm", 0, 0, function() {
        return "" + te.apply(this) + W(this.minutes(), 2);
      }),
      B("hmmss", 0, 0, function() {
        return (
          "" + te.apply(this) + W(this.minutes(), 2) + W(this.seconds(), 2)
        );
      }),
      B("Hmm", 0, 0, function() {
        return "" + this.hours() + W(this.minutes(), 2);
      }),
      B("Hmmss", 0, 0, function() {
        return "" + this.hours() + W(this.minutes(), 2) + W(this.seconds(), 2);
      }),
      ee("a", !0),
      ee("A", !1),
      F("hour", "h"),
      N("hour", 13),
      ut("a", ne),
      ut("A", ne),
      ut("H", K),
      ut("h", K),
      ut("k", K),
      ut("HH", K, G),
      ut("hh", K, G),
      ut("kk", K, G),
      ut("hmm", J),
      ut("hmmss", Q),
      ut("Hmm", J),
      ut("Hmmss", Q),
      ft(["H", "HH"], bt),
      ft(["k", "kk"], function(t, e, n) {
        var i = w(t);
        e[bt] = 24 === i ? 0 : i;
      }),
      ft(["a", "A"], function(t, e, n) {
        (n._isPm = n._locale.isPM(t)), (n._meridiem = t);
      }),
      ft(["h", "hh"], function(t, e, n) {
        (e[bt] = w(t)), (f(n).bigHour = !0);
      }),
      ft("hmm", function(t, e, n) {
        var i = t.length - 2;
        (e[bt] = w(t.substr(0, i))),
          (e[_t] = w(t.substr(i))),
          (f(n).bigHour = !0);
      }),
      ft("hmmss", function(t, e, n) {
        var i = t.length - 4,
          a = t.length - 2;
        (e[bt] = w(t.substr(0, i))),
          (e[_t] = w(t.substr(i, 2))),
          (e[xt] = w(t.substr(a))),
          (f(n).bigHour = !0);
      }),
      ft("Hmm", function(t, e, n) {
        var i = t.length - 2;
        (e[bt] = w(t.substr(0, i))), (e[_t] = w(t.substr(i)));
      }),
      ft("Hmmss", function(t, e, n) {
        var i = t.length - 4,
          a = t.length - 2;
        (e[bt] = w(t.substr(0, i))),
          (e[_t] = w(t.substr(i, 2))),
          (e[xt] = w(t.substr(a)));
      });
    var ie,
      ae = Tt("Hours", !0),
      re = {
        calendar: {
          sameDay: "[Today at] LT",
          nextDay: "[Tomorrow at] LT",
          nextWeek: "dddd [at] LT",
          lastDay: "[Yesterday at] LT",
          lastWeek: "[Last] dddd [at] LT",
          sameElse: "L"
        },
        longDateFormat: {
          LTS: "h:mm:ss A",
          LT: "h:mm A",
          L: "MM/DD/YYYY",
          LL: "MMMM D, YYYY",
          LLL: "MMMM D, YYYY h:mm A",
          LLLL: "dddd, MMMM D, YYYY h:mm A"
        },
        invalidDate: "Invalid date",
        ordinal: "%d",
        dayOfMonthOrdinalParse: /\d{1,2}/,
        relativeTime: {
          future: "in %s",
          past: "%s ago",
          s: "a few seconds",
          ss: "%d seconds",
          m: "a minute",
          mm: "%d minutes",
          h: "an hour",
          hh: "%d hours",
          d: "a day",
          dd: "%d days",
          M: "a month",
          MM: "%d months",
          y: "a year",
          yy: "%d years"
        },
        months: Vt,
        monthsShort: Lt,
        week: { dow: 0, doy: 6 },
        weekdays: Gt,
        weekdaysMin: $t,
        weekdaysShort: Zt,
        meridiemParse: /[ap]\.?m?\.?/i
      },
      oe = {},
      se = {};
    function le(t) {
      return t ? t.toLowerCase().replace("_", "-") : t;
    }
    function ue(t) {
      var n = null;
      if (!oe[t] && e && e.exports)
        try {
          (n = ie._abbr), require("./locale/" + t), he(n);
        } catch (i) {}
      return oe[t];
    }
    function he(t, e) {
      var n;
      return (
        t &&
          ((n = o(e) ? ce(t) : de(t, e))
            ? (ie = n)
            : "undefined" != typeof console &&
              console.warn &&
              console.warn(
                "Locale " + t + " not found. Did you forget to load it?"
              )),
        ie._abbr
      );
    }
    function de(t, e) {
      if (null !== e) {
        var n,
          i = re;
        if (((e.abbr = t), null != oe[t]))
          A(
            "defineLocaleOverride",
            "use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."
          ),
            (i = oe[t]._config);
        else if (null != e.parentLocale)
          if (null != oe[e.parentLocale]) i = oe[e.parentLocale]._config;
          else {
            if (null == (n = ue(e.parentLocale)))
              return (
                se[e.parentLocale] || (se[e.parentLocale] = []),
                se[e.parentLocale].push({ name: t, config: e }),
                null
              );
            i = n._config;
          }
        return (
          (oe[t] = new O(P(i, e))),
          se[t] &&
            se[t].forEach(function(t) {
              de(t.name, t.config);
            }),
          he(t),
          oe[t]
        );
      }
      return delete oe[t], null;
    }
    function ce(t) {
      var e;
      if ((t && t._locale && t._locale._abbr && (t = t._locale._abbr), !t))
        return ie;
      if (!a(t)) {
        if ((e = ue(t))) return e;
        t = [t];
      }
      return (function(t) {
        for (var e, n, i, a, r = 0; r < t.length; ) {
          for (
            e = (a = le(t[r]).split("-")).length,
              n = (n = le(t[r + 1])) ? n.split("-") : null;
            e > 0;

          ) {
            if ((i = ue(a.slice(0, e).join("-")))) return i;
            if (n && n.length >= e && k(a, n, !0) >= e - 1) break;
            e--;
          }
          r++;
        }
        return ie;
      })(t);
    }
    function fe(t) {
      var e,
        n = t._a;
      return (
        n &&
          -2 === f(t).overflow &&
          ((e =
            n[vt] < 0 || n[vt] > 11
              ? vt
              : n[yt] < 1 || n[yt] > It(n[mt], n[vt])
              ? yt
              : n[bt] < 0 ||
                n[bt] > 24 ||
                (24 === n[bt] && (0 !== n[_t] || 0 !== n[xt] || 0 !== n[wt]))
              ? bt
              : n[_t] < 0 || n[_t] > 59
              ? _t
              : n[xt] < 0 || n[xt] > 59
              ? xt
              : n[wt] < 0 || n[wt] > 999
              ? wt
              : -1),
          f(t)._overflowDayOfYear && (e < mt || e > yt) && (e = yt),
          f(t)._overflowWeeks && -1 === e && (e = kt),
          f(t)._overflowWeekday && -1 === e && (e = Mt),
          (f(t).overflow = e)),
        t
      );
    }
    function ge(t, e, n) {
      return null != t ? t : null != e ? e : n;
    }
    function pe(t) {
      var e,
        n,
        a,
        r,
        o,
        s = [];
      if (!t._d) {
        for (
          a = (function(t) {
            var e = new Date(i.now());
            return t._useUTC
              ? [e.getUTCFullYear(), e.getUTCMonth(), e.getUTCDate()]
              : [e.getFullYear(), e.getMonth(), e.getDate()];
          })(t),
            t._w &&
              null == t._a[yt] &&
              null == t._a[vt] &&
              (function(t) {
                var e, n, i, a, r, o, s, l;
                if (null != (e = t._w).GG || null != e.W || null != e.E)
                  (r = 1),
                    (o = 4),
                    (n = ge(e.GG, t._a[mt], Ht(Pe(), 1, 4).year)),
                    (i = ge(e.W, 1)),
                    ((a = ge(e.E, 1)) < 1 || a > 7) && (l = !0);
                else {
                  (r = t._locale._week.dow), (o = t._locale._week.doy);
                  var u = Ht(Pe(), r, o);
                  (n = ge(e.gg, t._a[mt], u.year)),
                    (i = ge(e.w, u.week)),
                    null != e.d
                      ? ((a = e.d) < 0 || a > 6) && (l = !0)
                      : null != e.e
                      ? ((a = e.e + r), (e.e < 0 || e.e > 6) && (l = !0))
                      : (a = r);
                }
                i < 1 || i > Ut(n, r, o)
                  ? (f(t)._overflowWeeks = !0)
                  : null != l
                  ? (f(t)._overflowWeekday = !0)
                  : ((s = Bt(n, i, a, r, o)),
                    (t._a[mt] = s.year),
                    (t._dayOfYear = s.dayOfYear));
              })(t),
            null != t._dayOfYear &&
              ((o = ge(t._a[mt], a[mt])),
              (t._dayOfYear > St(o) || 0 === t._dayOfYear) &&
                (f(t)._overflowDayOfYear = !0),
              (n = jt(o, 0, t._dayOfYear)),
              (t._a[vt] = n.getUTCMonth()),
              (t._a[yt] = n.getUTCDate())),
            e = 0;
          e < 3 && null == t._a[e];
          ++e
        )
          t._a[e] = s[e] = a[e];
        for (; e < 7; e++)
          t._a[e] = s[e] = null == t._a[e] ? (2 === e ? 1 : 0) : t._a[e];
        24 === t._a[bt] &&
          0 === t._a[_t] &&
          0 === t._a[xt] &&
          0 === t._a[wt] &&
          ((t._nextDay = !0), (t._a[bt] = 0)),
          (t._d = (t._useUTC
            ? jt
            : function(t, e, n, i, a, r, o) {
                var s;
                return (
                  t < 100 && t >= 0
                    ? ((s = new Date(t + 400, e, n, i, a, r, o)),
                      isFinite(s.getFullYear()) && s.setFullYear(t))
                    : (s = new Date(t, e, n, i, a, r, o)),
                  s
                );
              }
          ).apply(null, s)),
          (r = t._useUTC ? t._d.getUTCDay() : t._d.getDay()),
          null != t._tzm && t._d.setUTCMinutes(t._d.getUTCMinutes() - t._tzm),
          t._nextDay && (t._a[bt] = 24),
          t._w &&
            void 0 !== t._w.d &&
            t._w.d !== r &&
            (f(t).weekdayMismatch = !0);
      }
    }
    var me = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
      ve = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
      ye = /Z|[+-]\d\d(?::?\d\d)?/,
      be = [
        ["YYYYYY-MM-DD", /[+-]\d{6}-\d\d-\d\d/],
        ["YYYY-MM-DD", /\d{4}-\d\d-\d\d/],
        ["GGGG-[W]WW-E", /\d{4}-W\d\d-\d/],
        ["GGGG-[W]WW", /\d{4}-W\d\d/, !1],
        ["YYYY-DDD", /\d{4}-\d{3}/],
        ["YYYY-MM", /\d{4}-\d\d/, !1],
        ["YYYYYYMMDD", /[+-]\d{10}/],
        ["YYYYMMDD", /\d{8}/],
        ["GGGG[W]WWE", /\d{4}W\d{3}/],
        ["GGGG[W]WW", /\d{4}W\d{2}/, !1],
        ["YYYYDDD", /\d{7}/]
      ],
      _e = [
        ["HH:mm:ss.SSSS", /\d\d:\d\d:\d\d\.\d+/],
        ["HH:mm:ss,SSSS", /\d\d:\d\d:\d\d,\d+/],
        ["HH:mm:ss", /\d\d:\d\d:\d\d/],
        ["HH:mm", /\d\d:\d\d/],
        ["HHmmss.SSSS", /\d\d\d\d\d\d\.\d+/],
        ["HHmmss,SSSS", /\d\d\d\d\d\d,\d+/],
        ["HHmmss", /\d\d\d\d\d\d/],
        ["HHmm", /\d\d\d\d/],
        ["HH", /\d\d/]
      ],
      xe = /^\/?Date\((\-?\d+)/i;
    function we(t) {
      var e,
        n,
        i,
        a,
        r,
        o,
        s = t._i,
        l = me.exec(s) || ve.exec(s);
      if (l) {
        for (f(t).iso = !0, e = 0, n = be.length; e < n; e++)
          if (be[e][1].exec(l[1])) {
            (a = be[e][0]), (i = !1 !== be[e][2]);
            break;
          }
        if (null == a) return void (t._isValid = !1);
        if (l[3]) {
          for (e = 0, n = _e.length; e < n; e++)
            if (_e[e][1].exec(l[3])) {
              r = (l[2] || " ") + _e[e][0];
              break;
            }
          if (null == r) return void (t._isValid = !1);
        }
        if (!i && null != r) return void (t._isValid = !1);
        if (l[4]) {
          if (!ye.exec(l[4])) return void (t._isValid = !1);
          o = "Z";
        }
        (t._f = a + (r || "") + (o || "")), Ce(t);
      } else t._isValid = !1;
    }
    var ke = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/;
    function Me(t) {
      var e = parseInt(t, 10);
      return e <= 49 ? 2e3 + e : e <= 999 ? 1900 + e : e;
    }
    var Se = {
      UT: 0,
      GMT: 0,
      EDT: -240,
      EST: -300,
      CDT: -300,
      CST: -360,
      MDT: -360,
      MST: -420,
      PDT: -420,
      PST: -480
    };
    function De(t) {
      var e,
        n,
        i,
        a,
        r,
        o,
        s,
        l = ke.exec(
          t._i
            .replace(/\([^)]*\)|[\n\t]/g, " ")
            .replace(/(\s\s+)/g, " ")
            .replace(/^\s\s*/, "")
            .replace(/\s\s*$/, "")
        );
      if (l) {
        var u =
          ((e = l[4]),
          (n = l[3]),
          (i = l[2]),
          (a = l[5]),
          (r = l[6]),
          (o = l[7]),
          (s = [
            Me(e),
            Lt.indexOf(n),
            parseInt(i, 10),
            parseInt(a, 10),
            parseInt(r, 10)
          ]),
          o && s.push(parseInt(o, 10)),
          s);
        if (
          !(function(t, e, n) {
            return (
              !t ||
              Zt.indexOf(t) === new Date(e[0], e[1], e[2]).getDay() ||
              ((f(n).weekdayMismatch = !0), (n._isValid = !1), !1)
            );
          })(l[1], u, t)
        )
          return;
        (t._a = u),
          (t._tzm = (function(t, e, n) {
            if (t) return Se[t];
            if (e) return 0;
            var i = parseInt(n, 10),
              a = i % 100;
            return ((i - a) / 100) * 60 + a;
          })(l[8], l[9], l[10])),
          (t._d = jt.apply(null, t._a)),
          t._d.setUTCMinutes(t._d.getUTCMinutes() - t._tzm),
          (f(t).rfc2822 = !0);
      } else t._isValid = !1;
    }
    function Ce(t) {
      if (t._f !== i.ISO_8601)
        if (t._f !== i.RFC_2822) {
          (t._a = []), (f(t).empty = !0);
          var e,
            n,
            a,
            r,
            o,
            s = "" + t._i,
            l = s.length,
            u = 0;
          for (a = U(t._f, t._locale).match(Y) || [], e = 0; e < a.length; e++)
            (r = a[e]),
              (n = (s.match(ht(r, t)) || [])[0]) &&
                ((o = s.substr(0, s.indexOf(n))).length > 0 &&
                  f(t).unusedInput.push(o),
                (s = s.slice(s.indexOf(n) + n.length)),
                (u += n.length)),
              z[r]
                ? (n ? (f(t).empty = !1) : f(t).unusedTokens.push(r),
                  pt(r, n, t))
                : t._strict && !n && f(t).unusedTokens.push(r);
          (f(t).charsLeftOver = l - u),
            s.length > 0 && f(t).unusedInput.push(s),
            t._a[bt] <= 12 &&
              !0 === f(t).bigHour &&
              t._a[bt] > 0 &&
              (f(t).bigHour = void 0),
            (f(t).parsedDateParts = t._a.slice(0)),
            (f(t).meridiem = t._meridiem),
            (t._a[bt] =
              ((h = t._locale),
              (d = t._a[bt]),
              null == (c = t._meridiem)
                ? d
                : null != h.meridiemHour
                ? h.meridiemHour(d, c)
                : null != h.isPM
                ? ((g = h.isPM(c)) && d < 12 && (d += 12),
                  g || 12 !== d || (d = 0),
                  d)
                : d)),
            pe(t),
            fe(t);
        } else De(t);
      else we(t);
      var h, d, c, g;
    }
    function Ae(t) {
      var e = t._i,
        n = t._f;
      return (
        (t._locale = t._locale || ce(t._l)),
        null === e || (void 0 === n && "" === e)
          ? p({ nullInput: !0 })
          : ("string" == typeof e && (t._i = e = t._locale.preparse(e)),
            _(e)
              ? new b(fe(e))
              : (l(e)
                  ? (t._d = e)
                  : a(n)
                  ? (function(t) {
                      var e, n, i, a, r;
                      if (0 === t._f.length)
                        return (
                          (f(t).invalidFormat = !0), void (t._d = new Date(NaN))
                        );
                      for (a = 0; a < t._f.length; a++)
                        (r = 0),
                          (e = v({}, t)),
                          null != t._useUTC && (e._useUTC = t._useUTC),
                          (e._f = t._f[a]),
                          Ce(e),
                          g(e) &&
                            ((r += f(e).charsLeftOver),
                            (r += 10 * f(e).unusedTokens.length),
                            (f(e).score = r),
                            (null == i || r < i) && ((i = r), (n = e)));
                      d(t, n || e);
                    })(t)
                  : n
                  ? Ce(t)
                  : (function(t) {
                      var e = t._i;
                      o(e)
                        ? (t._d = new Date(i.now()))
                        : l(e)
                        ? (t._d = new Date(e.valueOf()))
                        : "string" == typeof e
                        ? (function(t) {
                            var e = xe.exec(t._i);
                            null === e
                              ? (we(t),
                                !1 === t._isValid &&
                                  (delete t._isValid,
                                  De(t),
                                  !1 === t._isValid &&
                                    (delete t._isValid,
                                    i.createFromInputFallback(t))))
                              : (t._d = new Date(+e[1]));
                          })(t)
                        : a(e)
                        ? ((t._a = u(e.slice(0), function(t) {
                            return parseInt(t, 10);
                          })),
                          pe(t))
                        : r(e)
                        ? (function(t) {
                            if (!t._d) {
                              var e = L(t._i);
                              (t._a = u(
                                [
                                  e.year,
                                  e.month,
                                  e.day || e.date,
                                  e.hour,
                                  e.minute,
                                  e.second,
                                  e.millisecond
                                ],
                                function(t) {
                                  return t && parseInt(t, 10);
                                }
                              )),
                                pe(t);
                            }
                          })(t)
                        : s(e)
                        ? (t._d = new Date(e))
                        : i.createFromInputFallback(t);
                    })(t),
                g(t) || (t._d = null),
                t))
      );
    }
    function Te(t, e, n, i, o) {
      var s,
        l = {};
      return (
        (!0 !== n && !1 !== n) || ((i = n), (n = void 0)),
        ((r(t) &&
          (function(t) {
            if (Object.getOwnPropertyNames)
              return 0 === Object.getOwnPropertyNames(t).length;
            var e;
            for (e in t) if (t.hasOwnProperty(e)) return !1;
            return !0;
          })(t)) ||
          (a(t) && 0 === t.length)) &&
          (t = void 0),
        (l._isAMomentObject = !0),
        (l._useUTC = l._isUTC = o),
        (l._l = n),
        (l._i = t),
        (l._f = e),
        (l._strict = i),
        (s = new b(fe(Ae(l))))._nextDay &&
          (s.add(1, "d"), (s._nextDay = void 0)),
        s
      );
    }
    function Pe(t, e, n, i) {
      return Te(t, e, n, i, !1);
    }
    (i.createFromInputFallback = S(
      "value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged and will be removed in an upcoming major release. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.",
      function(t) {
        t._d = new Date(t._i + (t._useUTC ? " UTC" : ""));
      }
    )),
      (i.ISO_8601 = function() {}),
      (i.RFC_2822 = function() {});
    var Oe = S(
        "moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/",
        function() {
          var t = Pe.apply(null, arguments);
          return this.isValid() && t.isValid() ? (t < this ? this : t) : p();
        }
      ),
      Ie = S(
        "moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/",
        function() {
          var t = Pe.apply(null, arguments);
          return this.isValid() && t.isValid() ? (t > this ? this : t) : p();
        }
      );
    function Fe(t, e) {
      var n, i;
      if ((1 === e.length && a(e[0]) && (e = e[0]), !e.length)) return Pe();
      for (n = e[0], i = 1; i < e.length; ++i)
        (e[i].isValid() && !e[i][t](n)) || (n = e[i]);
      return n;
    }
    var Ve = [
      "year",
      "quarter",
      "month",
      "week",
      "day",
      "hour",
      "minute",
      "second",
      "millisecond"
    ];
    function Le(t) {
      var e = L(t),
        n = e.year || 0,
        i = e.quarter || 0,
        a = e.month || 0,
        r = e.week || e.isoWeek || 0,
        o = e.day || 0,
        s = e.hour || 0,
        l = e.minute || 0,
        u = e.second || 0,
        h = e.millisecond || 0;
      (this._isValid = (function(t) {
        for (var e in t)
          if (-1 === Ct.call(Ve, e) || (null != t[e] && isNaN(t[e]))) return !1;
        for (var n = !1, i = 0; i < Ve.length; ++i)
          if (t[Ve[i]]) {
            if (n) return !1;
            parseFloat(t[Ve[i]]) !== w(t[Ve[i]]) && (n = !0);
          }
        return !0;
      })(e)),
        (this._milliseconds = +h + 1e3 * u + 6e4 * l + 1e3 * s * 60 * 60),
        (this._days = +o + 7 * r),
        (this._months = +a + 3 * i + 12 * n),
        (this._data = {}),
        (this._locale = ce()),
        this._bubble();
    }
    function Re(t) {
      return t instanceof Le;
    }
    function Ne(t) {
      return t < 0 ? -1 * Math.round(-1 * t) : Math.round(t);
    }
    function We(t, e) {
      B(t, 0, 0, function() {
        var t = this.utcOffset(),
          n = "+";
        return (
          t < 0 && ((t = -t), (n = "-")),
          n + W(~~(t / 60), 2) + e + W(~~t % 60, 2)
        );
      });
    }
    We("Z", ":"),
      We("ZZ", ""),
      ut("Z", ot),
      ut("ZZ", ot),
      ft(["Z", "ZZ"], function(t, e, n) {
        (n._useUTC = !0), (n._tzm = Ee(ot, t));
      });
    var Ye = /([\+\-]|\d\d)/gi;
    function Ee(t, e) {
      var n = (e || "").match(t);
      if (null === n) return null;
      var i = ((n[n.length - 1] || []) + "").match(Ye) || ["-", 0, 0],
        a = 60 * i[1] + w(i[2]);
      return 0 === a ? 0 : "+" === i[0] ? a : -a;
    }
    function je(t, e) {
      var n, a;
      return e._isUTC
        ? ((n = e.clone()),
          (a = (_(t) || l(t) ? t.valueOf() : Pe(t).valueOf()) - n.valueOf()),
          n._d.setTime(n._d.valueOf() + a),
          i.updateOffset(n, !1),
          n)
        : Pe(t).local();
    }
    function ze(t) {
      return 15 * -Math.round(t._d.getTimezoneOffset() / 15);
    }
    function Be() {
      return !!this.isValid() && this._isUTC && 0 === this._offset;
    }
    i.updateOffset = function() {};
    var He = /^(\-|\+)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)(\.\d*)?)?$/,
      Ue = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;
    function qe(t, e) {
      var n,
        i,
        a,
        r,
        o,
        l,
        u = t,
        d = null;
      return (
        Re(t)
          ? (u = { ms: t._milliseconds, d: t._days, M: t._months })
          : s(t)
          ? ((u = {}), e ? (u[e] = t) : (u.milliseconds = t))
          : (d = He.exec(t))
          ? ((n = "-" === d[1] ? -1 : 1),
            (u = {
              y: 0,
              d: w(d[yt]) * n,
              h: w(d[bt]) * n,
              m: w(d[_t]) * n,
              s: w(d[xt]) * n,
              ms: w(Ne(1e3 * d[wt])) * n
            }))
          : (d = Ue.exec(t))
          ? ((n = "-" === d[1] ? -1 : 1),
            (u = {
              y: Ge(d[2], n),
              M: Ge(d[3], n),
              w: Ge(d[4], n),
              d: Ge(d[5], n),
              h: Ge(d[6], n),
              m: Ge(d[7], n),
              s: Ge(d[8], n)
            }))
          : null == u
          ? (u = {})
          : "object" == typeof u &&
            ("from" in u || "to" in u) &&
            ((r = Pe(u.from)),
            (o = Pe(u.to)),
            (a =
              r.isValid() && o.isValid()
                ? ((o = je(o, r)),
                  r.isBefore(o)
                    ? (l = Ze(r, o))
                    : (((l = Ze(o, r)).milliseconds = -l.milliseconds),
                      (l.months = -l.months)),
                  l)
                : { milliseconds: 0, months: 0 }),
            ((u = {}).ms = a.milliseconds),
            (u.M = a.months)),
        (i = new Le(u)),
        Re(t) && h(t, "_locale") && (i._locale = t._locale),
        i
      );
    }
    function Ge(t, e) {
      var n = t && parseFloat(t.replace(",", "."));
      return (isNaN(n) ? 0 : n) * e;
    }
    function Ze(t, e) {
      var n = {};
      return (
        (n.months = e.month() - t.month() + 12 * (e.year() - t.year())),
        t
          .clone()
          .add(n.months, "M")
          .isAfter(e) && --n.months,
        (n.milliseconds = +e - +t.clone().add(n.months, "M")),
        n
      );
    }
    function $e(t, e) {
      return function(n, i) {
        var a;
        return (
          null === i ||
            isNaN(+i) ||
            (A(
              e,
              "moment()." +
                e +
                "(period, number) is deprecated. Please use moment()." +
                e +
                "(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."
            ),
            (a = n),
            (n = i),
            (i = a)),
          Xe(this, qe((n = "string" == typeof n ? +n : n), i), t),
          this
        );
      };
    }
    function Xe(t, e, n, a) {
      var r = e._milliseconds,
        o = Ne(e._days),
        s = Ne(e._months);
      t.isValid() &&
        ((a = null == a || a),
        s && Rt(t, Pt(t, "Month") + s * n),
        o && Ot(t, "Date", Pt(t, "Date") + o * n),
        r && t._d.setTime(t._d.valueOf() + r * n),
        a && i.updateOffset(t, o || s));
    }
    (qe.fn = Le.prototype),
      (qe.invalid = function() {
        return qe(NaN);
      });
    var Ke = $e(1, "add"),
      Je = $e(-1, "subtract");
    function Qe(t, e) {
      var n = 12 * (e.year() - t.year()) + (e.month() - t.month()),
        i = t.clone().add(n, "months");
      return (
        -(
          n +
          (e - i < 0
            ? (e - i) / (i - t.clone().add(n - 1, "months"))
            : (e - i) / (t.clone().add(n + 1, "months") - i))
        ) || 0
      );
    }
    function tn(t) {
      var e;
      return void 0 === t
        ? this._locale._abbr
        : (null != (e = ce(t)) && (this._locale = e), this);
    }
    (i.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ"),
      (i.defaultFormatUtc = "YYYY-MM-DDTHH:mm:ss[Z]");
    var en = S(
      "moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.",
      function(t) {
        return void 0 === t ? this.localeData() : this.locale(t);
      }
    );
    function nn() {
      return this._locale;
    }
    var an = 126227808e5;
    function rn(t, e) {
      return ((t % e) + e) % e;
    }
    function on(t, e, n) {
      return t < 100 && t >= 0
        ? new Date(t + 400, e, n) - an
        : new Date(t, e, n).valueOf();
    }
    function sn(t, e, n) {
      return t < 100 && t >= 0
        ? Date.UTC(t + 400, e, n) - an
        : Date.UTC(t, e, n);
    }
    function ln(t, e) {
      B(0, [t, t.length], 0, e);
    }
    function un(t, e, n, i, a) {
      var r;
      return null == t
        ? Ht(this, i, a).year
        : (e > (r = Ut(t, i, a)) && (e = r),
          function(t, e, n, i, a) {
            var r = Bt(t, e, n, i, a),
              o = jt(r.year, 0, r.dayOfYear);
            return (
              this.year(o.getUTCFullYear()),
              this.month(o.getUTCMonth()),
              this.date(o.getUTCDate()),
              this
            );
          }.call(this, t, e, n, i, a));
    }
    B(0, ["gg", 2], 0, function() {
      return this.weekYear() % 100;
    }),
      B(0, ["GG", 2], 0, function() {
        return this.isoWeekYear() % 100;
      }),
      ln("gggg", "weekYear"),
      ln("ggggg", "weekYear"),
      ln("GGGG", "isoWeekYear"),
      ln("GGGGG", "isoWeekYear"),
      F("weekYear", "gg"),
      F("isoWeekYear", "GG"),
      N("weekYear", 1),
      N("isoWeekYear", 1),
      ut("G", at),
      ut("g", at),
      ut("GG", K, G),
      ut("gg", K, G),
      ut("GGGG", et, $),
      ut("gggg", et, $),
      ut("GGGGG", nt, X),
      ut("ggggg", nt, X),
      gt(["gggg", "ggggg", "GGGG", "GGGGG"], function(t, e, n, i) {
        e[i.substr(0, 2)] = w(t);
      }),
      gt(["gg", "GG"], function(t, e, n, a) {
        e[a] = i.parseTwoDigitYear(t);
      }),
      B("Q", 0, "Qo", "quarter"),
      F("quarter", "Q"),
      N("quarter", 7),
      ut("Q", q),
      ft("Q", function(t, e) {
        e[vt] = 3 * (w(t) - 1);
      }),
      B("D", ["DD", 2], "Do", "date"),
      F("date", "D"),
      N("date", 9),
      ut("D", K),
      ut("DD", K, G),
      ut("Do", function(t, e) {
        return t
          ? e._dayOfMonthOrdinalParse || e._ordinalParse
          : e._dayOfMonthOrdinalParseLenient;
      }),
      ft(["D", "DD"], yt),
      ft("Do", function(t, e) {
        e[yt] = w(t.match(K)[0]);
      });
    var hn = Tt("Date", !0);
    B("DDD", ["DDDD", 3], "DDDo", "dayOfYear"),
      F("dayOfYear", "DDD"),
      N("dayOfYear", 4),
      ut("DDD", tt),
      ut("DDDD", Z),
      ft(["DDD", "DDDD"], function(t, e, n) {
        n._dayOfYear = w(t);
      }),
      B("m", ["mm", 2], 0, "minute"),
      F("minute", "m"),
      N("minute", 14),
      ut("m", K),
      ut("mm", K, G),
      ft(["m", "mm"], _t);
    var dn = Tt("Minutes", !1);
    B("s", ["ss", 2], 0, "second"),
      F("second", "s"),
      N("second", 15),
      ut("s", K),
      ut("ss", K, G),
      ft(["s", "ss"], xt);
    var cn,
      fn = Tt("Seconds", !1);
    for (
      B("S", 0, 0, function() {
        return ~~(this.millisecond() / 100);
      }),
        B(0, ["SS", 2], 0, function() {
          return ~~(this.millisecond() / 10);
        }),
        B(0, ["SSS", 3], 0, "millisecond"),
        B(0, ["SSSS", 4], 0, function() {
          return 10 * this.millisecond();
        }),
        B(0, ["SSSSS", 5], 0, function() {
          return 100 * this.millisecond();
        }),
        B(0, ["SSSSSS", 6], 0, function() {
          return 1e3 * this.millisecond();
        }),
        B(0, ["SSSSSSS", 7], 0, function() {
          return 1e4 * this.millisecond();
        }),
        B(0, ["SSSSSSSS", 8], 0, function() {
          return 1e5 * this.millisecond();
        }),
        B(0, ["SSSSSSSSS", 9], 0, function() {
          return 1e6 * this.millisecond();
        }),
        F("millisecond", "ms"),
        N("millisecond", 16),
        ut("S", tt, q),
        ut("SS", tt, G),
        ut("SSS", tt, Z),
        cn = "SSSS";
      cn.length <= 9;
      cn += "S"
    )
      ut(cn, it);
    function gn(t, e) {
      e[wt] = w(1e3 * ("0." + t));
    }
    for (cn = "S"; cn.length <= 9; cn += "S") ft(cn, gn);
    var pn = Tt("Milliseconds", !1);
    B("z", 0, 0, "zoneAbbr"), B("zz", 0, 0, "zoneName");
    var mn = b.prototype;
    function vn(t) {
      return t;
    }
    (mn.add = Ke),
      (mn.calendar = function(t, e) {
        var n = t || Pe(),
          a = je(n, this).startOf("day"),
          r = i.calendarFormat(this, a) || "sameElse",
          o = e && (T(e[r]) ? e[r].call(this, n) : e[r]);
        return this.format(o || this.localeData().calendar(r, this, Pe(n)));
      }),
      (mn.clone = function() {
        return new b(this);
      }),
      (mn.diff = function(t, e, n) {
        var i, a, r;
        if (!this.isValid()) return NaN;
        if (!(i = je(t, this)).isValid()) return NaN;
        switch (((a = 6e4 * (i.utcOffset() - this.utcOffset())), (e = V(e)))) {
          case "year":
            r = Qe(this, i) / 12;
            break;
          case "month":
            r = Qe(this, i);
            break;
          case "quarter":
            r = Qe(this, i) / 3;
            break;
          case "second":
            r = (this - i) / 1e3;
            break;
          case "minute":
            r = (this - i) / 6e4;
            break;
          case "hour":
            r = (this - i) / 36e5;
            break;
          case "day":
            r = (this - i - a) / 864e5;
            break;
          case "week":
            r = (this - i - a) / 6048e5;
            break;
          default:
            r = this - i;
        }
        return n ? r : x(r);
      }),
      (mn.endOf = function(t) {
        var e;
        if (void 0 === (t = V(t)) || "millisecond" === t || !this.isValid())
          return this;
        var n = this._isUTC ? sn : on;
        switch (t) {
          case "year":
            e = n(this.year() + 1, 0, 1) - 1;
            break;
          case "quarter":
            e = n(this.year(), this.month() - (this.month() % 3) + 3, 1) - 1;
            break;
          case "month":
            e = n(this.year(), this.month() + 1, 1) - 1;
            break;
          case "week":
            e =
              n(this.year(), this.month(), this.date() - this.weekday() + 7) -
              1;
            break;
          case "isoWeek":
            e =
              n(
                this.year(),
                this.month(),
                this.date() - (this.isoWeekday() - 1) + 7
              ) - 1;
            break;
          case "day":
          case "date":
            e = n(this.year(), this.month(), this.date() + 1) - 1;
            break;
          case "hour":
            (e = this._d.valueOf()),
              (e +=
                36e5 -
                rn(e + (this._isUTC ? 0 : 6e4 * this.utcOffset()), 36e5) -
                1);
            break;
          case "minute":
            (e = this._d.valueOf()), (e += 6e4 - rn(e, 6e4) - 1);
            break;
          case "second":
            (e = this._d.valueOf()), (e += 1e3 - rn(e, 1e3) - 1);
        }
        return this._d.setTime(e), i.updateOffset(this, !0), this;
      }),
      (mn.format = function(t) {
        t || (t = this.isUtc() ? i.defaultFormatUtc : i.defaultFormat);
        var e = H(this, t);
        return this.localeData().postformat(e);
      }),
      (mn.from = function(t, e) {
        return this.isValid() && ((_(t) && t.isValid()) || Pe(t).isValid())
          ? qe({ to: this, from: t })
              .locale(this.locale())
              .humanize(!e)
          : this.localeData().invalidDate();
      }),
      (mn.fromNow = function(t) {
        return this.from(Pe(), t);
      }),
      (mn.to = function(t, e) {
        return this.isValid() && ((_(t) && t.isValid()) || Pe(t).isValid())
          ? qe({ from: this, to: t })
              .locale(this.locale())
              .humanize(!e)
          : this.localeData().invalidDate();
      }),
      (mn.toNow = function(t) {
        return this.to(Pe(), t);
      }),
      (mn.get = function(t) {
        return T(this[(t = V(t))]) ? this[t]() : this;
      }),
      (mn.invalidAt = function() {
        return f(this).overflow;
      }),
      (mn.isAfter = function(t, e) {
        var n = _(t) ? t : Pe(t);
        return (
          !(!this.isValid() || !n.isValid()) &&
          ("millisecond" === (e = V(e) || "millisecond")
            ? this.valueOf() > n.valueOf()
            : n.valueOf() <
              this.clone()
                .startOf(e)
                .valueOf())
        );
      }),
      (mn.isBefore = function(t, e) {
        var n = _(t) ? t : Pe(t);
        return (
          !(!this.isValid() || !n.isValid()) &&
          ("millisecond" === (e = V(e) || "millisecond")
            ? this.valueOf() < n.valueOf()
            : this.clone()
                .endOf(e)
                .valueOf() < n.valueOf())
        );
      }),
      (mn.isBetween = function(t, e, n, i) {
        var a = _(t) ? t : Pe(t),
          r = _(e) ? e : Pe(e);
        return (
          !!(this.isValid() && a.isValid() && r.isValid()) &&
          ("(" === (i = i || "()")[0]
            ? this.isAfter(a, n)
            : !this.isBefore(a, n)) &&
          (")" === i[1] ? this.isBefore(r, n) : !this.isAfter(r, n))
        );
      }),
      (mn.isSame = function(t, e) {
        var n,
          i = _(t) ? t : Pe(t);
        return (
          !(!this.isValid() || !i.isValid()) &&
          ("millisecond" === (e = V(e) || "millisecond")
            ? this.valueOf() === i.valueOf()
            : ((n = i.valueOf()),
              this.clone()
                .startOf(e)
                .valueOf() <= n &&
                n <=
                  this.clone()
                    .endOf(e)
                    .valueOf()))
        );
      }),
      (mn.isSameOrAfter = function(t, e) {
        return this.isSame(t, e) || this.isAfter(t, e);
      }),
      (mn.isSameOrBefore = function(t, e) {
        return this.isSame(t, e) || this.isBefore(t, e);
      }),
      (mn.isValid = function() {
        return g(this);
      }),
      (mn.lang = en),
      (mn.locale = tn),
      (mn.localeData = nn),
      (mn.max = Ie),
      (mn.min = Oe),
      (mn.parsingFlags = function() {
        return d({}, f(this));
      }),
      (mn.set = function(t, e) {
        if ("object" == typeof t)
          for (
            var n = (function(t) {
                var e = [];
                for (var n in t) e.push({ unit: n, priority: R[n] });
                return (
                  e.sort(function(t, e) {
                    return t.priority - e.priority;
                  }),
                  e
                );
              })((t = L(t))),
              i = 0;
            i < n.length;
            i++
          )
            this[n[i].unit](t[n[i].unit]);
        else if (T(this[(t = V(t))])) return this[t](e);
        return this;
      }),
      (mn.startOf = function(t) {
        var e;
        if (void 0 === (t = V(t)) || "millisecond" === t || !this.isValid())
          return this;
        var n = this._isUTC ? sn : on;
        switch (t) {
          case "year":
            e = n(this.year(), 0, 1);
            break;
          case "quarter":
            e = n(this.year(), this.month() - (this.month() % 3), 1);
            break;
          case "month":
            e = n(this.year(), this.month(), 1);
            break;
          case "week":
            e = n(this.year(), this.month(), this.date() - this.weekday());
            break;
          case "isoWeek":
            e = n(
              this.year(),
              this.month(),
              this.date() - (this.isoWeekday() - 1)
            );
            break;
          case "day":
          case "date":
            e = n(this.year(), this.month(), this.date());
            break;
          case "hour":
            (e = this._d.valueOf()),
              (e -= rn(e + (this._isUTC ? 0 : 6e4 * this.utcOffset()), 36e5));
            break;
          case "minute":
            (e = this._d.valueOf()), (e -= rn(e, 6e4));
            break;
          case "second":
            (e = this._d.valueOf()), (e -= rn(e, 1e3));
        }
        return this._d.setTime(e), i.updateOffset(this, !0), this;
      }),
      (mn.subtract = Je),
      (mn.toArray = function() {
        var t = this;
        return [
          t.year(),
          t.month(),
          t.date(),
          t.hour(),
          t.minute(),
          t.second(),
          t.millisecond()
        ];
      }),
      (mn.toObject = function() {
        var t = this;
        return {
          years: t.year(),
          months: t.month(),
          date: t.date(),
          hours: t.hours(),
          minutes: t.minutes(),
          seconds: t.seconds(),
          milliseconds: t.milliseconds()
        };
      }),
      (mn.toDate = function() {
        return new Date(this.valueOf());
      }),
      (mn.toISOString = function(t) {
        if (!this.isValid()) return null;
        var e = !0 !== t,
          n = e ? this.clone().utc() : this;
        return n.year() < 0 || n.year() > 9999
          ? H(
              n,
              e
                ? "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]"
                : "YYYYYY-MM-DD[T]HH:mm:ss.SSSZ"
            )
          : T(Date.prototype.toISOString)
          ? e
            ? this.toDate().toISOString()
            : new Date(this.valueOf() + 60 * this.utcOffset() * 1e3)
                .toISOString()
                .replace("Z", H(n, "Z"))
          : H(
              n,
              e ? "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYY-MM-DD[T]HH:mm:ss.SSSZ"
            );
      }),
      (mn.inspect = function() {
        if (!this.isValid()) return "moment.invalid(/* " + this._i + " */)";
        var t = "moment",
          e = "";
        this.isLocal() ||
          ((t = 0 === this.utcOffset() ? "moment.utc" : "moment.parseZone"),
          (e = "Z"));
        var n = "[" + t + '("]',
          i = 0 <= this.year() && this.year() <= 9999 ? "YYYY" : "YYYYYY",
          a = e + '[")]';
        return this.format(n + i + "-MM-DD[T]HH:mm:ss.SSS" + a);
      }),
      (mn.toJSON = function() {
        return this.isValid() ? this.toISOString() : null;
      }),
      (mn.toString = function() {
        return this.clone()
          .locale("en")
          .format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ");
      }),
      (mn.unix = function() {
        return Math.floor(this.valueOf() / 1e3);
      }),
      (mn.valueOf = function() {
        return this._d.valueOf() - 6e4 * (this._offset || 0);
      }),
      (mn.creationData = function() {
        return {
          input: this._i,
          format: this._f,
          locale: this._locale,
          isUTC: this._isUTC,
          strict: this._strict
        };
      }),
      (mn.year = At),
      (mn.isLeapYear = function() {
        return Dt(this.year());
      }),
      (mn.weekYear = function(t) {
        return un.call(
          this,
          t,
          this.week(),
          this.weekday(),
          this.localeData()._week.dow,
          this.localeData()._week.doy
        );
      }),
      (mn.isoWeekYear = function(t) {
        return un.call(this, t, this.isoWeek(), this.isoWeekday(), 1, 4);
      }),
      (mn.quarter = mn.quarters = function(t) {
        return null == t
          ? Math.ceil((this.month() + 1) / 3)
          : this.month(3 * (t - 1) + (this.month() % 3));
      }),
      (mn.month = Nt),
      (mn.daysInMonth = function() {
        return It(this.year(), this.month());
      }),
      (mn.week = mn.weeks = function(t) {
        var e = this.localeData().week(this);
        return null == t ? e : this.add(7 * (t - e), "d");
      }),
      (mn.isoWeek = mn.isoWeeks = function(t) {
        var e = Ht(this, 1, 4).week;
        return null == t ? e : this.add(7 * (t - e), "d");
      }),
      (mn.weeksInYear = function() {
        var t = this.localeData()._week;
        return Ut(this.year(), t.dow, t.doy);
      }),
      (mn.isoWeeksInYear = function() {
        return Ut(this.year(), 1, 4);
      }),
      (mn.date = hn),
      (mn.day = mn.days = function(t) {
        if (!this.isValid()) return null != t ? this : NaN;
        var e = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
        return null != t
          ? ((t = (function(t, e) {
              return "string" != typeof t
                ? t
                : isNaN(t)
                ? "number" == typeof (t = e.weekdaysParse(t))
                  ? t
                  : null
                : parseInt(t, 10);
            })(t, this.localeData())),
            this.add(t - e, "d"))
          : e;
      }),
      (mn.weekday = function(t) {
        if (!this.isValid()) return null != t ? this : NaN;
        var e = (this.day() + 7 - this.localeData()._week.dow) % 7;
        return null == t ? e : this.add(t - e, "d");
      }),
      (mn.isoWeekday = function(t) {
        if (!this.isValid()) return null != t ? this : NaN;
        if (null != t) {
          var e = (function(t, e) {
            return "string" == typeof t
              ? e.weekdaysParse(t) % 7 || 7
              : isNaN(t)
              ? null
              : t;
          })(t, this.localeData());
          return this.day(this.day() % 7 ? e : e - 7);
        }
        return this.day() || 7;
      }),
      (mn.dayOfYear = function(t) {
        var e =
          Math.round(
            (this.clone().startOf("day") - this.clone().startOf("year")) / 864e5
          ) + 1;
        return null == t ? e : this.add(t - e, "d");
      }),
      (mn.hour = mn.hours = ae),
      (mn.minute = mn.minutes = dn),
      (mn.second = mn.seconds = fn),
      (mn.millisecond = mn.milliseconds = pn),
      (mn.utcOffset = function(t, e, n) {
        var a,
          r = this._offset || 0;
        if (!this.isValid()) return null != t ? this : NaN;
        if (null != t) {
          if ("string" == typeof t) {
            if (null === (t = Ee(ot, t))) return this;
          } else Math.abs(t) < 16 && !n && (t *= 60);
          return (
            !this._isUTC && e && (a = ze(this)),
            (this._offset = t),
            (this._isUTC = !0),
            null != a && this.add(a, "m"),
            r !== t &&
              (!e || this._changeInProgress
                ? Xe(this, qe(t - r, "m"), 1, !1)
                : this._changeInProgress ||
                  ((this._changeInProgress = !0),
                  i.updateOffset(this, !0),
                  (this._changeInProgress = null))),
            this
          );
        }
        return this._isUTC ? r : ze(this);
      }),
      (mn.utc = function(t) {
        return this.utcOffset(0, t);
      }),
      (mn.local = function(t) {
        return (
          this._isUTC &&
            (this.utcOffset(0, t),
            (this._isUTC = !1),
            t && this.subtract(ze(this), "m")),
          this
        );
      }),
      (mn.parseZone = function() {
        if (null != this._tzm) this.utcOffset(this._tzm, !1, !0);
        else if ("string" == typeof this._i) {
          var t = Ee(rt, this._i);
          null != t ? this.utcOffset(t) : this.utcOffset(0, !0);
        }
        return this;
      }),
      (mn.hasAlignedHourOffset = function(t) {
        return (
          !!this.isValid() &&
          ((t = t ? Pe(t).utcOffset() : 0), (this.utcOffset() - t) % 60 == 0)
        );
      }),
      (mn.isDST = function() {
        return (
          this.utcOffset() >
            this.clone()
              .month(0)
              .utcOffset() ||
          this.utcOffset() >
            this.clone()
              .month(5)
              .utcOffset()
        );
      }),
      (mn.isLocal = function() {
        return !!this.isValid() && !this._isUTC;
      }),
      (mn.isUtcOffset = function() {
        return !!this.isValid() && this._isUTC;
      }),
      (mn.isUtc = Be),
      (mn.isUTC = Be),
      (mn.zoneAbbr = function() {
        return this._isUTC ? "UTC" : "";
      }),
      (mn.zoneName = function() {
        return this._isUTC ? "Coordinated Universal Time" : "";
      }),
      (mn.dates = S("dates accessor is deprecated. Use date instead.", hn)),
      (mn.months = S("months accessor is deprecated. Use month instead", Nt)),
      (mn.years = S("years accessor is deprecated. Use year instead", At)),
      (mn.zone = S(
        "moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/",
        function(t, e) {
          return null != t
            ? ("string" != typeof t && (t = -t), this.utcOffset(t, e), this)
            : -this.utcOffset();
        }
      )),
      (mn.isDSTShifted = S(
        "isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information",
        function() {
          if (!o(this._isDSTShifted)) return this._isDSTShifted;
          var t = {};
          if ((v(t, this), (t = Ae(t))._a)) {
            var e = t._isUTC ? c(t._a) : Pe(t._a);
            this._isDSTShifted = this.isValid() && k(t._a, e.toArray()) > 0;
          } else this._isDSTShifted = !1;
          return this._isDSTShifted;
        }
      ));
    var yn = O.prototype;
    function bn(t, e, n, i) {
      var a = ce(),
        r = c().set(i, e);
      return a[n](r, t);
    }
    function _n(t, e, n) {
      if ((s(t) && ((e = t), (t = void 0)), (t = t || ""), null != e))
        return bn(t, e, n, "month");
      var i,
        a = [];
      for (i = 0; i < 12; i++) a[i] = bn(t, i, n, "month");
      return a;
    }
    function xn(t, e, n, i) {
      "boolean" == typeof t
        ? (s(e) && ((n = e), (e = void 0)), (e = e || ""))
        : ((n = e = t),
          (t = !1),
          s(e) && ((n = e), (e = void 0)),
          (e = e || ""));
      var a,
        r = ce(),
        o = t ? r._week.dow : 0;
      if (null != n) return bn(e, (n + o) % 7, i, "day");
      var l = [];
      for (a = 0; a < 7; a++) l[a] = bn(e, (a + o) % 7, i, "day");
      return l;
    }
    (yn.calendar = function(t, e, n) {
      var i = this._calendar[t] || this._calendar.sameElse;
      return T(i) ? i.call(e, n) : i;
    }),
      (yn.longDateFormat = function(t) {
        var e = this._longDateFormat[t],
          n = this._longDateFormat[t.toUpperCase()];
        return e || !n
          ? e
          : ((this._longDateFormat[t] = n.replace(/MMMM|MM|DD|dddd/g, function(
              t
            ) {
              return t.slice(1);
            })),
            this._longDateFormat[t]);
      }),
      (yn.invalidDate = function() {
        return this._invalidDate;
      }),
      (yn.ordinal = function(t) {
        return this._ordinal.replace("%d", t);
      }),
      (yn.preparse = vn),
      (yn.postformat = vn),
      (yn.relativeTime = function(t, e, n, i) {
        var a = this._relativeTime[n];
        return T(a) ? a(t, e, n, i) : a.replace(/%d/i, t);
      }),
      (yn.pastFuture = function(t, e) {
        var n = this._relativeTime[t > 0 ? "future" : "past"];
        return T(n) ? n(e) : n.replace(/%s/i, e);
      }),
      (yn.set = function(t) {
        var e, n;
        for (n in t) T((e = t[n])) ? (this[n] = e) : (this["_" + n] = e);
        (this._config = t),
          (this._dayOfMonthOrdinalParseLenient = new RegExp(
            (this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) +
              "|" +
              /\d{1,2}/.source
          ));
      }),
      (yn.months = function(t, e) {
        return t
          ? a(this._months)
            ? this._months[t.month()]
            : this._months[
                (this._months.isFormat || Ft).test(e) ? "format" : "standalone"
              ][t.month()]
          : a(this._months)
          ? this._months
          : this._months.standalone;
      }),
      (yn.monthsShort = function(t, e) {
        return t
          ? a(this._monthsShort)
            ? this._monthsShort[t.month()]
            : this._monthsShort[Ft.test(e) ? "format" : "standalone"][t.month()]
          : a(this._monthsShort)
          ? this._monthsShort
          : this._monthsShort.standalone;
      }),
      (yn.monthsParse = function(t, e, n) {
        var i, a, r;
        if (this._monthsParseExact)
          return function(t, e, n) {
            var i,
              a,
              r,
              o = t.toLocaleLowerCase();
            if (!this._monthsParse)
              for (
                this._monthsParse = [],
                  this._longMonthsParse = [],
                  this._shortMonthsParse = [],
                  i = 0;
                i < 12;
                ++i
              )
                (r = c([2e3, i])),
                  (this._shortMonthsParse[i] = this.monthsShort(
                    r,
                    ""
                  ).toLocaleLowerCase()),
                  (this._longMonthsParse[i] = this.months(
                    r,
                    ""
                  ).toLocaleLowerCase());
            return n
              ? "MMM" === e
                ? -1 !== (a = Ct.call(this._shortMonthsParse, o))
                  ? a
                  : null
                : -1 !== (a = Ct.call(this._longMonthsParse, o))
                ? a
                : null
              : "MMM" === e
              ? -1 !== (a = Ct.call(this._shortMonthsParse, o))
                ? a
                : -1 !== (a = Ct.call(this._longMonthsParse, o))
                ? a
                : null
              : -1 !== (a = Ct.call(this._longMonthsParse, o))
              ? a
              : -1 !== (a = Ct.call(this._shortMonthsParse, o))
              ? a
              : null;
          }.call(this, t, e, n);
        for (
          this._monthsParse ||
            ((this._monthsParse = []),
            (this._longMonthsParse = []),
            (this._shortMonthsParse = [])),
            i = 0;
          i < 12;
          i++
        ) {
          if (
            ((a = c([2e3, i])),
            n &&
              !this._longMonthsParse[i] &&
              ((this._longMonthsParse[i] = new RegExp(
                "^" + this.months(a, "").replace(".", "") + "$",
                "i"
              )),
              (this._shortMonthsParse[i] = new RegExp(
                "^" + this.monthsShort(a, "").replace(".", "") + "$",
                "i"
              ))),
            n ||
              this._monthsParse[i] ||
              ((r = "^" + this.months(a, "") + "|^" + this.monthsShort(a, "")),
              (this._monthsParse[i] = new RegExp(r.replace(".", ""), "i"))),
            n && "MMMM" === e && this._longMonthsParse[i].test(t))
          )
            return i;
          if (n && "MMM" === e && this._shortMonthsParse[i].test(t)) return i;
          if (!n && this._monthsParse[i].test(t)) return i;
        }
      }),
      (yn.monthsRegex = function(t) {
        return this._monthsParseExact
          ? (h(this, "_monthsRegex") || Et.call(this),
            t ? this._monthsStrictRegex : this._monthsRegex)
          : (h(this, "_monthsRegex") || (this._monthsRegex = Yt),
            this._monthsStrictRegex && t
              ? this._monthsStrictRegex
              : this._monthsRegex);
      }),
      (yn.monthsShortRegex = function(t) {
        return this._monthsParseExact
          ? (h(this, "_monthsRegex") || Et.call(this),
            t ? this._monthsShortStrictRegex : this._monthsShortRegex)
          : (h(this, "_monthsShortRegex") || (this._monthsShortRegex = Wt),
            this._monthsShortStrictRegex && t
              ? this._monthsShortStrictRegex
              : this._monthsShortRegex);
      }),
      (yn.week = function(t) {
        return Ht(t, this._week.dow, this._week.doy).week;
      }),
      (yn.firstDayOfYear = function() {
        return this._week.doy;
      }),
      (yn.firstDayOfWeek = function() {
        return this._week.dow;
      }),
      (yn.weekdays = function(t, e) {
        var n = a(this._weekdays)
          ? this._weekdays
          : this._weekdays[
              t && !0 !== t && this._weekdays.isFormat.test(e)
                ? "format"
                : "standalone"
            ];
        return !0 === t ? qt(n, this._week.dow) : t ? n[t.day()] : n;
      }),
      (yn.weekdaysMin = function(t) {
        return !0 === t
          ? qt(this._weekdaysMin, this._week.dow)
          : t
          ? this._weekdaysMin[t.day()]
          : this._weekdaysMin;
      }),
      (yn.weekdaysShort = function(t) {
        return !0 === t
          ? qt(this._weekdaysShort, this._week.dow)
          : t
          ? this._weekdaysShort[t.day()]
          : this._weekdaysShort;
      }),
      (yn.weekdaysParse = function(t, e, n) {
        var i, a, r;
        if (this._weekdaysParseExact)
          return function(t, e, n) {
            var i,
              a,
              r,
              o = t.toLocaleLowerCase();
            if (!this._weekdaysParse)
              for (
                this._weekdaysParse = [],
                  this._shortWeekdaysParse = [],
                  this._minWeekdaysParse = [],
                  i = 0;
                i < 7;
                ++i
              )
                (r = c([2e3, 1]).day(i)),
                  (this._minWeekdaysParse[i] = this.weekdaysMin(
                    r,
                    ""
                  ).toLocaleLowerCase()),
                  (this._shortWeekdaysParse[i] = this.weekdaysShort(
                    r,
                    ""
                  ).toLocaleLowerCase()),
                  (this._weekdaysParse[i] = this.weekdays(
                    r,
                    ""
                  ).toLocaleLowerCase());
            return n
              ? "dddd" === e
                ? -1 !== (a = Ct.call(this._weekdaysParse, o))
                  ? a
                  : null
                : "ddd" === e
                ? -1 !== (a = Ct.call(this._shortWeekdaysParse, o))
                  ? a
                  : null
                : -1 !== (a = Ct.call(this._minWeekdaysParse, o))
                ? a
                : null
              : "dddd" === e
              ? -1 !== (a = Ct.call(this._weekdaysParse, o))
                ? a
                : -1 !== (a = Ct.call(this._shortWeekdaysParse, o))
                ? a
                : -1 !== (a = Ct.call(this._minWeekdaysParse, o))
                ? a
                : null
              : "ddd" === e
              ? -1 !== (a = Ct.call(this._shortWeekdaysParse, o))
                ? a
                : -1 !== (a = Ct.call(this._weekdaysParse, o))
                ? a
                : -1 !== (a = Ct.call(this._minWeekdaysParse, o))
                ? a
                : null
              : -1 !== (a = Ct.call(this._minWeekdaysParse, o))
              ? a
              : -1 !== (a = Ct.call(this._weekdaysParse, o))
              ? a
              : -1 !== (a = Ct.call(this._shortWeekdaysParse, o))
              ? a
              : null;
          }.call(this, t, e, n);
        for (
          this._weekdaysParse ||
            ((this._weekdaysParse = []),
            (this._minWeekdaysParse = []),
            (this._shortWeekdaysParse = []),
            (this._fullWeekdaysParse = [])),
            i = 0;
          i < 7;
          i++
        ) {
          if (
            ((a = c([2e3, 1]).day(i)),
            n &&
              !this._fullWeekdaysParse[i] &&
              ((this._fullWeekdaysParse[i] = new RegExp(
                "^" + this.weekdays(a, "").replace(".", "\\.?") + "$",
                "i"
              )),
              (this._shortWeekdaysParse[i] = new RegExp(
                "^" + this.weekdaysShort(a, "").replace(".", "\\.?") + "$",
                "i"
              )),
              (this._minWeekdaysParse[i] = new RegExp(
                "^" + this.weekdaysMin(a, "").replace(".", "\\.?") + "$",
                "i"
              ))),
            this._weekdaysParse[i] ||
              ((r =
                "^" +
                this.weekdays(a, "") +
                "|^" +
                this.weekdaysShort(a, "") +
                "|^" +
                this.weekdaysMin(a, "")),
              (this._weekdaysParse[i] = new RegExp(r.replace(".", ""), "i"))),
            n && "dddd" === e && this._fullWeekdaysParse[i].test(t))
          )
            return i;
          if (n && "ddd" === e && this._shortWeekdaysParse[i].test(t)) return i;
          if (n && "dd" === e && this._minWeekdaysParse[i].test(t)) return i;
          if (!n && this._weekdaysParse[i].test(t)) return i;
        }
      }),
      (yn.weekdaysRegex = function(t) {
        return this._weekdaysParseExact
          ? (h(this, "_weekdaysRegex") || Qt.call(this),
            t ? this._weekdaysStrictRegex : this._weekdaysRegex)
          : (h(this, "_weekdaysRegex") || (this._weekdaysRegex = Xt),
            this._weekdaysStrictRegex && t
              ? this._weekdaysStrictRegex
              : this._weekdaysRegex);
      }),
      (yn.weekdaysShortRegex = function(t) {
        return this._weekdaysParseExact
          ? (h(this, "_weekdaysRegex") || Qt.call(this),
            t ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex)
          : (h(this, "_weekdaysShortRegex") || (this._weekdaysShortRegex = Kt),
            this._weekdaysShortStrictRegex && t
              ? this._weekdaysShortStrictRegex
              : this._weekdaysShortRegex);
      }),
      (yn.weekdaysMinRegex = function(t) {
        return this._weekdaysParseExact
          ? (h(this, "_weekdaysRegex") || Qt.call(this),
            t ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex)
          : (h(this, "_weekdaysMinRegex") || (this._weekdaysMinRegex = Jt),
            this._weekdaysMinStrictRegex && t
              ? this._weekdaysMinStrictRegex
              : this._weekdaysMinRegex);
      }),
      (yn.isPM = function(t) {
        return "p" === (t + "").toLowerCase().charAt(0);
      }),
      (yn.meridiem = function(t, e, n) {
        return t > 11 ? (n ? "pm" : "PM") : n ? "am" : "AM";
      }),
      he("en", {
        dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
        ordinal: function(t) {
          var e = t % 10;
          return (
            t +
            (1 === w((t % 100) / 10)
              ? "th"
              : 1 === e
              ? "st"
              : 2 === e
              ? "nd"
              : 3 === e
              ? "rd"
              : "th")
          );
        }
      }),
      (i.lang = S("moment.lang is deprecated. Use moment.locale instead.", he)),
      (i.langData = S(
        "moment.langData is deprecated. Use moment.localeData instead.",
        ce
      ));
    var wn = Math.abs;
    function kn(t, e, n, i) {
      var a = qe(e, n);
      return (
        (t._milliseconds += i * a._milliseconds),
        (t._days += i * a._days),
        (t._months += i * a._months),
        t._bubble()
      );
    }
    function Mn(t) {
      return t < 0 ? Math.floor(t) : Math.ceil(t);
    }
    function Sn(t) {
      return (4800 * t) / 146097;
    }
    function Dn(t) {
      return (146097 * t) / 4800;
    }
    function Cn(t) {
      return function() {
        return this.as(t);
      };
    }
    var An = Cn("ms"),
      Tn = Cn("s"),
      Pn = Cn("m"),
      On = Cn("h"),
      In = Cn("d"),
      Fn = Cn("w"),
      Vn = Cn("M"),
      Ln = Cn("Q"),
      Rn = Cn("y");
    function Nn(t) {
      return function() {
        return this.isValid() ? this._data[t] : NaN;
      };
    }
    var Wn = Nn("milliseconds"),
      Yn = Nn("seconds"),
      En = Nn("minutes"),
      jn = Nn("hours"),
      zn = Nn("days"),
      Bn = Nn("months"),
      Hn = Nn("years"),
      Un = Math.round,
      qn = { ss: 44, s: 45, m: 45, h: 22, d: 26, M: 11 },
      Gn = Math.abs;
    function Zn(t) {
      return (t > 0) - (t < 0) || +t;
    }
    function $n() {
      if (!this.isValid()) return this.localeData().invalidDate();
      var t,
        e,
        n = Gn(this._milliseconds) / 1e3,
        i = Gn(this._days),
        a = Gn(this._months);
      (t = x(n / 60)), (e = x(t / 60)), (n %= 60), (t %= 60);
      var r = x(a / 12),
        o = (a %= 12),
        s = i,
        l = e,
        u = t,
        h = n ? n.toFixed(3).replace(/\.?0+$/, "") : "",
        d = this.asSeconds();
      if (!d) return "P0D";
      var c = d < 0 ? "-" : "",
        f = Zn(this._months) !== Zn(d) ? "-" : "",
        g = Zn(this._days) !== Zn(d) ? "-" : "",
        p = Zn(this._milliseconds) !== Zn(d) ? "-" : "";
      return (
        c +
        "P" +
        (r ? f + r + "Y" : "") +
        (o ? f + o + "M" : "") +
        (s ? g + s + "D" : "") +
        (l || u || h ? "T" : "") +
        (l ? p + l + "H" : "") +
        (u ? p + u + "M" : "") +
        (h ? p + h + "S" : "")
      );
    }
    var Xn = Le.prototype;
    return (
      (Xn.isValid = function() {
        return this._isValid;
      }),
      (Xn.abs = function() {
        var t = this._data;
        return (
          (this._milliseconds = wn(this._milliseconds)),
          (this._days = wn(this._days)),
          (this._months = wn(this._months)),
          (t.milliseconds = wn(t.milliseconds)),
          (t.seconds = wn(t.seconds)),
          (t.minutes = wn(t.minutes)),
          (t.hours = wn(t.hours)),
          (t.months = wn(t.months)),
          (t.years = wn(t.years)),
          this
        );
      }),
      (Xn.add = function(t, e) {
        return kn(this, t, e, 1);
      }),
      (Xn.subtract = function(t, e) {
        return kn(this, t, e, -1);
      }),
      (Xn.as = function(t) {
        if (!this.isValid()) return NaN;
        var e,
          n,
          i = this._milliseconds;
        if ("month" === (t = V(t)) || "quarter" === t || "year" === t)
          switch (
            ((e = this._days + i / 864e5), (n = this._months + Sn(e)), t)
          ) {
            case "month":
              return n;
            case "quarter":
              return n / 3;
            case "year":
              return n / 12;
          }
        else
          switch (((e = this._days + Math.round(Dn(this._months))), t)) {
            case "week":
              return e / 7 + i / 6048e5;
            case "day":
              return e + i / 864e5;
            case "hour":
              return 24 * e + i / 36e5;
            case "minute":
              return 1440 * e + i / 6e4;
            case "second":
              return 86400 * e + i / 1e3;
            case "millisecond":
              return Math.floor(864e5 * e) + i;
            default:
              throw new Error("Unknown unit " + t);
          }
      }),
      (Xn.asMilliseconds = An),
      (Xn.asSeconds = Tn),
      (Xn.asMinutes = Pn),
      (Xn.asHours = On),
      (Xn.asDays = In),
      (Xn.asWeeks = Fn),
      (Xn.asMonths = Vn),
      (Xn.asQuarters = Ln),
      (Xn.asYears = Rn),
      (Xn.valueOf = function() {
        return this.isValid()
          ? this._milliseconds +
              864e5 * this._days +
              (this._months % 12) * 2592e6 +
              31536e6 * w(this._months / 12)
          : NaN;
      }),
      (Xn._bubble = function() {
        var t,
          e,
          n,
          i,
          a,
          r = this._milliseconds,
          o = this._days,
          s = this._months,
          l = this._data;
        return (
          (r >= 0 && o >= 0 && s >= 0) ||
            (r <= 0 && o <= 0 && s <= 0) ||
            ((r += 864e5 * Mn(Dn(s) + o)), (o = 0), (s = 0)),
          (l.milliseconds = r % 1e3),
          (t = x(r / 1e3)),
          (l.seconds = t % 60),
          (e = x(t / 60)),
          (l.minutes = e % 60),
          (n = x(e / 60)),
          (l.hours = n % 24),
          (o += x(n / 24)),
          (s += a = x(Sn(o))),
          (o -= Mn(Dn(a))),
          (i = x(s / 12)),
          (s %= 12),
          (l.days = o),
          (l.months = s),
          (l.years = i),
          this
        );
      }),
      (Xn.clone = function() {
        return qe(this);
      }),
      (Xn.get = function(t) {
        return (t = V(t)), this.isValid() ? this[t + "s"]() : NaN;
      }),
      (Xn.milliseconds = Wn),
      (Xn.seconds = Yn),
      (Xn.minutes = En),
      (Xn.hours = jn),
      (Xn.days = zn),
      (Xn.weeks = function() {
        return x(this.days() / 7);
      }),
      (Xn.months = Bn),
      (Xn.years = Hn),
      (Xn.humanize = function(t) {
        if (!this.isValid()) return this.localeData().invalidDate();
        var e = this.localeData(),
          n = (function(t, e, n) {
            var i = qe(t).abs(),
              a = Un(i.as("s")),
              r = Un(i.as("m")),
              o = Un(i.as("h")),
              s = Un(i.as("d")),
              l = Un(i.as("M")),
              u = Un(i.as("y")),
              h = (a <= qn.ss && ["s", a]) ||
                (a < qn.s && ["ss", a]) ||
                (r <= 1 && ["m"]) ||
                (r < qn.m && ["mm", r]) ||
                (o <= 1 && ["h"]) ||
                (o < qn.h && ["hh", o]) ||
                (s <= 1 && ["d"]) ||
                (s < qn.d && ["dd", s]) ||
                (l <= 1 && ["M"]) ||
                (l < qn.M && ["MM", l]) ||
                (u <= 1 && ["y"]) || ["yy", u];
            return (
              (h[2] = e),
              (h[3] = +t > 0),
              (h[4] = n),
              function(t, e, n, i, a) {
                return a.relativeTime(e || 1, !!n, t, i);
              }.apply(null, h)
            );
          })(this, !t, e);
        return t && (n = e.pastFuture(+this, n)), e.postformat(n);
      }),
      (Xn.toISOString = $n),
      (Xn.toString = $n),
      (Xn.toJSON = $n),
      (Xn.locale = tn),
      (Xn.localeData = nn),
      (Xn.toIsoString = S(
        "toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)",
        $n
      )),
      (Xn.lang = en),
      B("X", 0, 0, "unix"),
      B("x", 0, 0, "valueOf"),
      ut("x", at),
      ut("X", /[+-]?\d+(\.\d{1,3})?/),
      ft("X", function(t, e, n) {
        n._d = new Date(1e3 * parseFloat(t, 10));
      }),
      ft("x", function(t, e, n) {
        n._d = new Date(w(t));
      }),
      (i.version = "2.24.0"),
      (t = Pe),
      (i.fn = mn),
      (i.min = function() {
        return Fe("isBefore", [].slice.call(arguments, 0));
      }),
      (i.max = function() {
        return Fe("isAfter", [].slice.call(arguments, 0));
      }),
      (i.now = function() {
        return Date.now ? Date.now() : +new Date();
      }),
      (i.utc = c),
      (i.unix = function(t) {
        return Pe(1e3 * t);
      }),
      (i.months = function(t, e) {
        return _n(t, e, "months");
      }),
      (i.isDate = l),
      (i.locale = he),
      (i.invalid = p),
      (i.duration = qe),
      (i.isMoment = _),
      (i.weekdays = function(t, e, n) {
        return xn(t, e, n, "weekdays");
      }),
      (i.parseZone = function() {
        return Pe.apply(null, arguments).parseZone();
      }),
      (i.localeData = ce),
      (i.isDuration = Re),
      (i.monthsShort = function(t, e) {
        return _n(t, e, "monthsShort");
      }),
      (i.weekdaysMin = function(t, e, n) {
        return xn(t, e, n, "weekdaysMin");
      }),
      (i.defineLocale = de),
      (i.updateLocale = function(t, e) {
        if (null != e) {
          var n,
            i,
            a = re;
          null != (i = ue(t)) && (a = i._config),
            ((n = new O((e = P(a, e)))).parentLocale = oe[t]),
            (oe[t] = n),
            he(t);
        } else
          null != oe[t] &&
            (null != oe[t].parentLocale
              ? (oe[t] = oe[t].parentLocale)
              : null != oe[t] && delete oe[t]);
        return oe[t];
      }),
      (i.locales = function() {
        return D(oe);
      }),
      (i.weekdaysShort = function(t, e, n) {
        return xn(t, e, n, "weekdaysShort");
      }),
      (i.normalizeUnits = V),
      (i.relativeTimeRounding = function(t) {
        return void 0 === t ? Un : "function" == typeof t && ((Un = t), !0);
      }),
      (i.relativeTimeThreshold = function(t, e) {
        return (
          void 0 !== qn[t] &&
          (void 0 === e
            ? qn[t]
            : ((qn[t] = e), "s" === t && (qn.ss = e - 1), !0))
        );
      }),
      (i.calendarFormat = function(t, e) {
        var n = t.diff(e, "days", !0);
        return n < -6
          ? "sameElse"
          : n < -1
          ? "lastWeek"
          : n < 0
          ? "lastDay"
          : n < 1
          ? "sameDay"
          : n < 2
          ? "nextDay"
          : n < 7
          ? "nextWeek"
          : "sameElse";
      }),
      (i.prototype = mn),
      (i.HTML5_FMT = {
        DATETIME_LOCAL: "YYYY-MM-DDTHH:mm",
        DATETIME_LOCAL_SECONDS: "YYYY-MM-DDTHH:mm:ss",
        DATETIME_LOCAL_MS: "YYYY-MM-DDTHH:mm:ss.SSS",
        DATE: "YYYY-MM-DD",
        TIME: "HH:mm",
        TIME_SECONDS: "HH:mm:ss",
        TIME_MS: "HH:mm:ss.SSS",
        WEEK: "GGGG-[W]WW",
        MONTH: "YYYY-MM"
      }),
      i
    );
  }),
    "object" == typeof e.exports
      ? (e.exports = t())
      : "function" == typeof define && define.amd
      ? define(t)
      : (this.moment = t()),
    (e = e.exports);
  var n,
    i,
    a = { exports: {} };
  (n = this),
    (i = function(t) {
      "use strict";
      t = t && t.hasOwnProperty("default") ? t.default : t;
      var e,
        n = {
          aliceblue: [240, 248, 255],
          antiquewhite: [250, 235, 215],
          aqua: [0, 255, 255],
          aquamarine: [127, 255, 212],
          azure: [240, 255, 255],
          beige: [245, 245, 220],
          bisque: [255, 228, 196],
          black: [0, 0, 0],
          blanchedalmond: [255, 235, 205],
          blue: [0, 0, 255],
          blueviolet: [138, 43, 226],
          brown: [165, 42, 42],
          burlywood: [222, 184, 135],
          cadetblue: [95, 158, 160],
          chartreuse: [127, 255, 0],
          chocolate: [210, 105, 30],
          coral: [255, 127, 80],
          cornflowerblue: [100, 149, 237],
          cornsilk: [255, 248, 220],
          crimson: [220, 20, 60],
          cyan: [0, 255, 255],
          darkblue: [0, 0, 139],
          darkcyan: [0, 139, 139],
          darkgoldenrod: [184, 134, 11],
          darkgray: [169, 169, 169],
          darkgreen: [0, 100, 0],
          darkgrey: [169, 169, 169],
          darkkhaki: [189, 183, 107],
          darkmagenta: [139, 0, 139],
          darkolivegreen: [85, 107, 47],
          darkorange: [255, 140, 0],
          darkorchid: [153, 50, 204],
          darkred: [139, 0, 0],
          darksalmon: [233, 150, 122],
          darkseagreen: [143, 188, 143],
          darkslateblue: [72, 61, 139],
          darkslategray: [47, 79, 79],
          darkslategrey: [47, 79, 79],
          darkturquoise: [0, 206, 209],
          darkviolet: [148, 0, 211],
          deeppink: [255, 20, 147],
          deepskyblue: [0, 191, 255],
          dimgray: [105, 105, 105],
          dimgrey: [105, 105, 105],
          dodgerblue: [30, 144, 255],
          firebrick: [178, 34, 34],
          floralwhite: [255, 250, 240],
          forestgreen: [34, 139, 34],
          fuchsia: [255, 0, 255],
          gainsboro: [220, 220, 220],
          ghostwhite: [248, 248, 255],
          gold: [255, 215, 0],
          goldenrod: [218, 165, 32],
          gray: [128, 128, 128],
          green: [0, 128, 0],
          greenyellow: [173, 255, 47],
          grey: [128, 128, 128],
          honeydew: [240, 255, 240],
          hotpink: [255, 105, 180],
          indianred: [205, 92, 92],
          indigo: [75, 0, 130],
          ivory: [255, 255, 240],
          khaki: [240, 230, 140],
          lavender: [230, 230, 250],
          lavenderblush: [255, 240, 245],
          lawngreen: [124, 252, 0],
          lemonchiffon: [255, 250, 205],
          lightblue: [173, 216, 230],
          lightcoral: [240, 128, 128],
          lightcyan: [224, 255, 255],
          lightgoldenrodyellow: [250, 250, 210],
          lightgray: [211, 211, 211],
          lightgreen: [144, 238, 144],
          lightgrey: [211, 211, 211],
          lightpink: [255, 182, 193],
          lightsalmon: [255, 160, 122],
          lightseagreen: [32, 178, 170],
          lightskyblue: [135, 206, 250],
          lightslategray: [119, 136, 153],
          lightslategrey: [119, 136, 153],
          lightsteelblue: [176, 196, 222],
          lightyellow: [255, 255, 224],
          lime: [0, 255, 0],
          limegreen: [50, 205, 50],
          linen: [250, 240, 230],
          magenta: [255, 0, 255],
          maroon: [128, 0, 0],
          mediumaquamarine: [102, 205, 170],
          mediumblue: [0, 0, 205],
          mediumorchid: [186, 85, 211],
          mediumpurple: [147, 112, 219],
          mediumseagreen: [60, 179, 113],
          mediumslateblue: [123, 104, 238],
          mediumspringgreen: [0, 250, 154],
          mediumturquoise: [72, 209, 204],
          mediumvioletred: [199, 21, 133],
          midnightblue: [25, 25, 112],
          mintcream: [245, 255, 250],
          mistyrose: [255, 228, 225],
          moccasin: [255, 228, 181],
          navajowhite: [255, 222, 173],
          navy: [0, 0, 128],
          oldlace: [253, 245, 230],
          olive: [128, 128, 0],
          olivedrab: [107, 142, 35],
          orange: [255, 165, 0],
          orangered: [255, 69, 0],
          orchid: [218, 112, 214],
          palegoldenrod: [238, 232, 170],
          palegreen: [152, 251, 152],
          paleturquoise: [175, 238, 238],
          palevioletred: [219, 112, 147],
          papayawhip: [255, 239, 213],
          peachpuff: [255, 218, 185],
          peru: [205, 133, 63],
          pink: [255, 192, 203],
          plum: [221, 160, 221],
          powderblue: [176, 224, 230],
          purple: [128, 0, 128],
          rebeccapurple: [102, 51, 153],
          red: [255, 0, 0],
          rosybrown: [188, 143, 143],
          royalblue: [65, 105, 225],
          saddlebrown: [139, 69, 19],
          salmon: [250, 128, 114],
          sandybrown: [244, 164, 96],
          seagreen: [46, 139, 87],
          seashell: [255, 245, 238],
          sienna: [160, 82, 45],
          silver: [192, 192, 192],
          skyblue: [135, 206, 235],
          slateblue: [106, 90, 205],
          slategray: [112, 128, 144],
          slategrey: [112, 128, 144],
          snow: [255, 250, 250],
          springgreen: [0, 255, 127],
          steelblue: [70, 130, 180],
          tan: [210, 180, 140],
          teal: [0, 128, 128],
          thistle: [216, 191, 216],
          tomato: [255, 99, 71],
          turquoise: [64, 224, 208],
          violet: [238, 130, 238],
          wheat: [245, 222, 179],
          white: [255, 255, 255],
          whitesmoke: [245, 245, 245],
          yellow: [255, 255, 0],
          yellowgreen: [154, 205, 50]
        },
        i =
          ((function(t) {
            var e = {};
            for (var i in n) n.hasOwnProperty(i) && (e[n[i]] = i);
            var a = (t.exports = {
              rgb: { channels: 3, labels: "rgb" },
              hsl: { channels: 3, labels: "hsl" },
              hsv: { channels: 3, labels: "hsv" },
              hwb: { channels: 3, labels: "hwb" },
              cmyk: { channels: 4, labels: "cmyk" },
              xyz: { channels: 3, labels: "xyz" },
              lab: { channels: 3, labels: "lab" },
              lch: { channels: 3, labels: "lch" },
              hex: { channels: 1, labels: ["hex"] },
              keyword: { channels: 1, labels: ["keyword"] },
              ansi16: { channels: 1, labels: ["ansi16"] },
              ansi256: { channels: 1, labels: ["ansi256"] },
              hcg: { channels: 3, labels: ["h", "c", "g"] },
              apple: { channels: 3, labels: ["r16", "g16", "b16"] },
              gray: { channels: 1, labels: ["gray"] }
            });
            for (var r in a)
              if (a.hasOwnProperty(r)) {
                if (!("channels" in a[r]))
                  throw new Error("missing channels property: " + r);
                if (!("labels" in a[r]))
                  throw new Error("missing channel labels property: " + r);
                if (a[r].labels.length !== a[r].channels)
                  throw new Error("channel and label counts mismatch: " + r);
                var o = a[r].channels,
                  s = a[r].labels;
                delete a[r].channels,
                  delete a[r].labels,
                  Object.defineProperty(a[r], "channels", { value: o }),
                  Object.defineProperty(a[r], "labels", { value: s });
              }
            (a.rgb.hsl = function(t) {
              var e,
                n,
                i = t[0] / 255,
                a = t[1] / 255,
                r = t[2] / 255,
                o = Math.min(i, a, r),
                s = Math.max(i, a, r),
                l = s - o;
              return (
                s === o
                  ? (e = 0)
                  : i === s
                  ? (e = (a - r) / l)
                  : a === s
                  ? (e = 2 + (r - i) / l)
                  : r === s && (e = 4 + (i - a) / l),
                (e = Math.min(60 * e, 360)) < 0 && (e += 360),
                (n = (o + s) / 2),
                [
                  e,
                  100 *
                    (s === o ? 0 : n <= 0.5 ? l / (s + o) : l / (2 - s - o)),
                  100 * n
                ]
              );
            }),
              (a.rgb.hsv = function(t) {
                var e,
                  n,
                  i,
                  a,
                  r,
                  o = t[0] / 255,
                  s = t[1] / 255,
                  l = t[2] / 255,
                  u = Math.max(o, s, l),
                  h = u - Math.min(o, s, l),
                  d = function(t) {
                    return (u - t) / 6 / h + 0.5;
                  };
                return (
                  0 === h
                    ? (a = r = 0)
                    : ((r = h / u),
                      (e = d(o)),
                      (n = d(s)),
                      (i = d(l)),
                      o === u
                        ? (a = i - n)
                        : s === u
                        ? (a = 1 / 3 + e - i)
                        : l === u && (a = 2 / 3 + n - e),
                      a < 0 ? (a += 1) : a > 1 && (a -= 1)),
                  [360 * a, 100 * r, 100 * u]
                );
              }),
              (a.rgb.hwb = function(t) {
                var e = t[0],
                  n = t[1],
                  i = t[2];
                return [
                  a.rgb.hsl(t)[0],
                  (1 / 255) * Math.min(e, Math.min(n, i)) * 100,
                  100 * (i = 1 - (1 / 255) * Math.max(e, Math.max(n, i)))
                ];
              }),
              (a.rgb.cmyk = function(t) {
                var e,
                  n = t[0] / 255,
                  i = t[1] / 255,
                  a = t[2] / 255;
                return [
                  100 *
                    ((1 - n - (e = Math.min(1 - n, 1 - i, 1 - a))) / (1 - e) ||
                      0),
                  100 * ((1 - i - e) / (1 - e) || 0),
                  100 * ((1 - a - e) / (1 - e) || 0),
                  100 * e
                ];
              }),
              (a.rgb.keyword = function(t) {
                var i = e[t];
                if (i) return i;
                var a,
                  r,
                  o,
                  s = 1 / 0;
                for (var l in n)
                  if (n.hasOwnProperty(l)) {
                    var u =
                      ((r = t),
                      (o = n[l]),
                      Math.pow(r[0] - o[0], 2) +
                        Math.pow(r[1] - o[1], 2) +
                        Math.pow(r[2] - o[2], 2));
                    u < s && ((s = u), (a = l));
                  }
                return a;
              }),
              (a.keyword.rgb = function(t) {
                return n[t];
              }),
              (a.rgb.xyz = function(t) {
                var e = t[0] / 255,
                  n = t[1] / 255,
                  i = t[2] / 255;
                return [
                  100 *
                    (0.4124 *
                      (e =
                        e > 0.04045
                          ? Math.pow((e + 0.055) / 1.055, 2.4)
                          : e / 12.92) +
                      0.3576 *
                        (n =
                          n > 0.04045
                            ? Math.pow((n + 0.055) / 1.055, 2.4)
                            : n / 12.92) +
                      0.1805 *
                        (i =
                          i > 0.04045
                            ? Math.pow((i + 0.055) / 1.055, 2.4)
                            : i / 12.92)),
                  100 * (0.2126 * e + 0.7152 * n + 0.0722 * i),
                  100 * (0.0193 * e + 0.1192 * n + 0.9505 * i)
                ];
              }),
              (a.rgb.lab = function(t) {
                var e = a.rgb.xyz(t),
                  n = e[0],
                  i = e[1],
                  r = e[2];
                return (
                  (i /= 100),
                  (r /= 108.883),
                  (n =
                    (n /= 95.047) > 0.008856
                      ? Math.pow(n, 1 / 3)
                      : 7.787 * n + 16 / 116),
                  [
                    116 *
                      (i =
                        i > 0.008856
                          ? Math.pow(i, 1 / 3)
                          : 7.787 * i + 16 / 116) -
                      16,
                    500 * (n - i),
                    200 *
                      (i -
                        (r =
                          r > 0.008856
                            ? Math.pow(r, 1 / 3)
                            : 7.787 * r + 16 / 116))
                  ]
                );
              }),
              (a.hsl.rgb = function(t) {
                var e,
                  n,
                  i,
                  a,
                  r,
                  o = t[0] / 360,
                  s = t[1] / 100,
                  l = t[2] / 100;
                if (0 === s) return [(r = 255 * l), r, r];
                (e = 2 * l - (n = l < 0.5 ? l * (1 + s) : l + s - l * s)),
                  (a = [0, 0, 0]);
                for (var u = 0; u < 3; u++)
                  (i = o + (1 / 3) * -(u - 1)) < 0 && i++,
                    i > 1 && i--,
                    (r =
                      6 * i < 1
                        ? e + 6 * (n - e) * i
                        : 2 * i < 1
                        ? n
                        : 3 * i < 2
                        ? e + (n - e) * (2 / 3 - i) * 6
                        : e),
                    (a[u] = 255 * r);
                return a;
              }),
              (a.hsl.hsv = function(t) {
                var e = t[0],
                  n = t[1] / 100,
                  i = t[2] / 100,
                  a = n,
                  r = Math.max(i, 0.01);
                return (
                  (n *= (i *= 2) <= 1 ? i : 2 - i),
                  (a *= r <= 1 ? r : 2 - r),
                  [
                    e,
                    100 * (0 === i ? (2 * a) / (r + a) : (2 * n) / (i + n)),
                    ((i + n) / 2) * 100
                  ]
                );
              }),
              (a.hsv.rgb = function(t) {
                var e = t[0] / 60,
                  n = t[1] / 100,
                  i = t[2] / 100,
                  a = Math.floor(e) % 6,
                  r = e - Math.floor(e),
                  o = 255 * i * (1 - n),
                  s = 255 * i * (1 - n * r),
                  l = 255 * i * (1 - n * (1 - r));
                switch (((i *= 255), a)) {
                  case 0:
                    return [i, l, o];
                  case 1:
                    return [s, i, o];
                  case 2:
                    return [o, i, l];
                  case 3:
                    return [o, s, i];
                  case 4:
                    return [l, o, i];
                  case 5:
                    return [i, o, s];
                }
              }),
              (a.hsv.hsl = function(t) {
                var e,
                  n,
                  i,
                  a = t[0],
                  r = t[1] / 100,
                  o = t[2] / 100,
                  s = Math.max(o, 0.01);
                return (
                  (i = (2 - r) * o),
                  (n = r * s),
                  [
                    a,
                    100 * (n = (n /= (e = (2 - r) * s) <= 1 ? e : 2 - e) || 0),
                    100 * (i /= 2)
                  ]
                );
              }),
              (a.hwb.rgb = function(t) {
                var e,
                  n,
                  i,
                  a,
                  r,
                  o,
                  s,
                  l = t[0] / 360,
                  u = t[1] / 100,
                  h = t[2] / 100,
                  d = u + h;
                switch (
                  (d > 1 && ((u /= d), (h /= d)),
                  (i = 6 * l - (e = Math.floor(6 * l))),
                  0 != (1 & e) && (i = 1 - i),
                  (a = u + i * ((n = 1 - h) - u)),
                  e)
                ) {
                  default:
                  case 6:
                  case 0:
                    (r = n), (o = a), (s = u);
                    break;
                  case 1:
                    (r = a), (o = n), (s = u);
                    break;
                  case 2:
                    (r = u), (o = n), (s = a);
                    break;
                  case 3:
                    (r = u), (o = a), (s = n);
                    break;
                  case 4:
                    (r = a), (o = u), (s = n);
                    break;
                  case 5:
                    (r = n), (o = u), (s = a);
                }
                return [255 * r, 255 * o, 255 * s];
              }),
              (a.cmyk.rgb = function(t) {
                var e = t[0] / 100,
                  n = t[1] / 100,
                  i = t[2] / 100,
                  a = t[3] / 100;
                return [
                  255 * (1 - Math.min(1, e * (1 - a) + a)),
                  255 * (1 - Math.min(1, n * (1 - a) + a)),
                  255 * (1 - Math.min(1, i * (1 - a) + a))
                ];
              }),
              (a.xyz.rgb = function(t) {
                var e,
                  n,
                  i,
                  a = t[0] / 100,
                  r = t[1] / 100,
                  o = t[2] / 100;
                return (
                  (n = -0.9689 * a + 1.8758 * r + 0.0415 * o),
                  (i = 0.0557 * a + -0.204 * r + 1.057 * o),
                  (e =
                    (e = 3.2406 * a + -1.5372 * r + -0.4986 * o) > 0.0031308
                      ? 1.055 * Math.pow(e, 1 / 2.4) - 0.055
                      : 12.92 * e),
                  (n =
                    n > 0.0031308
                      ? 1.055 * Math.pow(n, 1 / 2.4) - 0.055
                      : 12.92 * n),
                  (i =
                    i > 0.0031308
                      ? 1.055 * Math.pow(i, 1 / 2.4) - 0.055
                      : 12.92 * i),
                  [
                    255 * (e = Math.min(Math.max(0, e), 1)),
                    255 * (n = Math.min(Math.max(0, n), 1)),
                    255 * (i = Math.min(Math.max(0, i), 1))
                  ]
                );
              }),
              (a.xyz.lab = function(t) {
                var e = t[0],
                  n = t[1],
                  i = t[2];
                return (
                  (n /= 100),
                  (i /= 108.883),
                  (e =
                    (e /= 95.047) > 0.008856
                      ? Math.pow(e, 1 / 3)
                      : 7.787 * e + 16 / 116),
                  [
                    116 *
                      (n =
                        n > 0.008856
                          ? Math.pow(n, 1 / 3)
                          : 7.787 * n + 16 / 116) -
                      16,
                    500 * (e - n),
                    200 *
                      (n -
                        (i =
                          i > 0.008856
                            ? Math.pow(i, 1 / 3)
                            : 7.787 * i + 16 / 116))
                  ]
                );
              }),
              (a.lab.xyz = function(t) {
                var e,
                  n,
                  i,
                  a = t[0];
                (e = t[1] / 500 + (n = (a + 16) / 116)), (i = n - t[2] / 200);
                var r = Math.pow(n, 3),
                  o = Math.pow(e, 3),
                  s = Math.pow(i, 3);
                return (
                  (n = r > 0.008856 ? r : (n - 16 / 116) / 7.787),
                  (e = o > 0.008856 ? o : (e - 16 / 116) / 7.787),
                  (i = s > 0.008856 ? s : (i - 16 / 116) / 7.787),
                  [(e *= 95.047), (n *= 100), (i *= 108.883)]
                );
              }),
              (a.lab.lch = function(t) {
                var e,
                  n = t[0],
                  i = t[1],
                  a = t[2];
                return (
                  (e = (360 * Math.atan2(a, i)) / 2 / Math.PI) < 0 &&
                    (e += 360),
                  [n, Math.sqrt(i * i + a * a), e]
                );
              }),
              (a.lch.lab = function(t) {
                var e,
                  n = t[0],
                  i = t[1];
                return (
                  (e = (t[2] / 360) * 2 * Math.PI),
                  [n, i * Math.cos(e), i * Math.sin(e)]
                );
              }),
              (a.rgb.ansi16 = function(t) {
                var e = t[0],
                  n = t[1],
                  i = t[2],
                  r = 1 in arguments ? arguments[1] : a.rgb.hsv(t)[2];
                if (0 === (r = Math.round(r / 50))) return 30;
                var o =
                  30 +
                  ((Math.round(i / 255) << 2) |
                    (Math.round(n / 255) << 1) |
                    Math.round(e / 255));
                return 2 === r && (o += 60), o;
              }),
              (a.hsv.ansi16 = function(t) {
                return a.rgb.ansi16(a.hsv.rgb(t), t[2]);
              }),
              (a.rgb.ansi256 = function(t) {
                var e = t[0],
                  n = t[1],
                  i = t[2];
                return e === n && n === i
                  ? e < 8
                    ? 16
                    : e > 248
                    ? 231
                    : Math.round(((e - 8) / 247) * 24) + 232
                  : 16 +
                      36 * Math.round((e / 255) * 5) +
                      6 * Math.round((n / 255) * 5) +
                      Math.round((i / 255) * 5);
              }),
              (a.ansi16.rgb = function(t) {
                var e = t % 10;
                if (0 === e || 7 === e)
                  return t > 50 && (e += 3.5), [(e = (e / 10.5) * 255), e, e];
                var n = 0.5 * (1 + ~~(t > 50));
                return [
                  (1 & e) * n * 255,
                  ((e >> 1) & 1) * n * 255,
                  ((e >> 2) & 1) * n * 255
                ];
              }),
              (a.ansi256.rgb = function(t) {
                if (t >= 232) {
                  var e = 10 * (t - 232) + 8;
                  return [e, e, e];
                }
                var n;
                return (
                  (t -= 16),
                  [
                    (Math.floor(t / 36) / 5) * 255,
                    (Math.floor((n = t % 36) / 6) / 5) * 255,
                    ((n % 6) / 5) * 255
                  ]
                );
              }),
              (a.rgb.hex = function(t) {
                var e = (
                  ((255 & Math.round(t[0])) << 16) +
                  ((255 & Math.round(t[1])) << 8) +
                  (255 & Math.round(t[2]))
                )
                  .toString(16)
                  .toUpperCase();
                return "000000".substring(e.length) + e;
              }),
              (a.hex.rgb = function(t) {
                var e = t.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);
                if (!e) return [0, 0, 0];
                var n = e[0];
                3 === e[0].length &&
                  (n = n
                    .split("")
                    .map(function(t) {
                      return t + t;
                    })
                    .join(""));
                var i = parseInt(n, 16);
                return [(i >> 16) & 255, (i >> 8) & 255, 255 & i];
              }),
              (a.rgb.hcg = function(t) {
                var e,
                  n = t[0] / 255,
                  i = t[1] / 255,
                  a = t[2] / 255,
                  r = Math.max(Math.max(n, i), a),
                  o = Math.min(Math.min(n, i), a),
                  s = r - o;
                return (
                  (e =
                    s <= 0
                      ? 0
                      : r === n
                      ? ((i - a) / s) % 6
                      : r === i
                      ? 2 + (a - n) / s
                      : 4 + (n - i) / s + 4),
                  (e /= 6),
                  [360 * (e %= 1), 100 * s, 100 * (s < 1 ? o / (1 - s) : 0)]
                );
              }),
              (a.hsl.hcg = function(t) {
                var e,
                  n = t[1] / 100,
                  i = t[2] / 100,
                  a = 0;
                return (
                  (e = i < 0.5 ? 2 * n * i : 2 * n * (1 - i)) < 1 &&
                    (a = (i - 0.5 * e) / (1 - e)),
                  [t[0], 100 * e, 100 * a]
                );
              }),
              (a.hsv.hcg = function(t) {
                var e = t[1] / 100,
                  n = t[2] / 100,
                  i = e * n,
                  a = 0;
                return (
                  i < 1 && (a = (n - i) / (1 - i)), [t[0], 100 * i, 100 * a]
                );
              }),
              (a.hcg.rgb = function(t) {
                var e = t[0] / 360,
                  n = t[1] / 100,
                  i = t[2] / 100;
                if (0 === n) return [255 * i, 255 * i, 255 * i];
                var a,
                  r = [0, 0, 0],
                  o = (e % 1) * 6,
                  s = o % 1,
                  l = 1 - s;
                switch (Math.floor(o)) {
                  case 0:
                    (r[0] = 1), (r[1] = s), (r[2] = 0);
                    break;
                  case 1:
                    (r[0] = l), (r[1] = 1), (r[2] = 0);
                    break;
                  case 2:
                    (r[0] = 0), (r[1] = 1), (r[2] = s);
                    break;
                  case 3:
                    (r[0] = 0), (r[1] = l), (r[2] = 1);
                    break;
                  case 4:
                    (r[0] = s), (r[1] = 0), (r[2] = 1);
                    break;
                  default:
                    (r[0] = 1), (r[1] = 0), (r[2] = l);
                }
                return (
                  (a = (1 - n) * i),
                  [
                    255 * (n * r[0] + a),
                    255 * (n * r[1] + a),
                    255 * (n * r[2] + a)
                  ]
                );
              }),
              (a.hcg.hsv = function(t) {
                var e = t[1] / 100,
                  n = e + (t[2] / 100) * (1 - e),
                  i = 0;
                return n > 0 && (i = e / n), [t[0], 100 * i, 100 * n];
              }),
              (a.hcg.hsl = function(t) {
                var e = t[1] / 100,
                  n = (t[2] / 100) * (1 - e) + 0.5 * e,
                  i = 0;
                return (
                  n > 0 && n < 0.5
                    ? (i = e / (2 * n))
                    : n >= 0.5 && n < 1 && (i = e / (2 * (1 - n))),
                  [t[0], 100 * i, 100 * n]
                );
              }),
              (a.hcg.hwb = function(t) {
                var e = t[1] / 100,
                  n = e + (t[2] / 100) * (1 - e);
                return [t[0], 100 * (n - e), 100 * (1 - n)];
              }),
              (a.hwb.hcg = function(t) {
                var e = t[1] / 100,
                  n = 1 - t[2] / 100,
                  i = n - e,
                  a = 0;
                return (
                  i < 1 && (a = (n - i) / (1 - i)), [t[0], 100 * i, 100 * a]
                );
              }),
              (a.apple.rgb = function(t) {
                return [
                  (t[0] / 65535) * 255,
                  (t[1] / 65535) * 255,
                  (t[2] / 65535) * 255
                ];
              }),
              (a.rgb.apple = function(t) {
                return [
                  (t[0] / 255) * 65535,
                  (t[1] / 255) * 65535,
                  (t[2] / 255) * 65535
                ];
              }),
              (a.gray.rgb = function(t) {
                return [
                  (t[0] / 100) * 255,
                  (t[0] / 100) * 255,
                  (t[0] / 100) * 255
                ];
              }),
              (a.gray.hsl = a.gray.hsv = function(t) {
                return [0, 0, t[0]];
              }),
              (a.gray.hwb = function(t) {
                return [0, 100, t[0]];
              }),
              (a.gray.cmyk = function(t) {
                return [0, 0, 0, t[0]];
              }),
              (a.gray.lab = function(t) {
                return [t[0], 0, 0];
              }),
              (a.gray.hex = function(t) {
                var e = 255 & Math.round((t[0] / 100) * 255),
                  n = ((e << 16) + (e << 8) + e).toString(16).toUpperCase();
                return "000000".substring(n.length) + n;
              }),
              (a.rgb.gray = function(t) {
                return [((t[0] + t[1] + t[2]) / 3 / 255) * 100];
              });
          })((e = { exports: {} })),
          e.exports);
      function a(t, e) {
        return function(n) {
          return e(t(n));
        };
      }
      function r(t, e) {
        for (
          var n = [e[t].parent, t], r = i[e[t].parent][t], o = e[t].parent;
          e[o].parent;

        )
          n.unshift(e[o].parent),
            (r = a(i[e[o].parent][o], r)),
            (o = e[o].parent);
        return (r.conversion = n), r;
      }
      i.rgb,
        i.hsl,
        i.hsv,
        i.hwb,
        i.cmyk,
        i.xyz,
        i.lab,
        i.lch,
        i.hex,
        i.keyword,
        i.ansi16,
        i.ansi256,
        i.hcg,
        i.apple,
        i.gray;
      var o = {};
      Object.keys(i).forEach(function(t) {
        (o[t] = {}),
          Object.defineProperty(o[t], "channels", { value: i[t].channels }),
          Object.defineProperty(o[t], "labels", { value: i[t].labels });
        var e = (function(t) {
          for (
            var e = (function(t) {
                var e = (function() {
                    for (
                      var t = {}, e = Object.keys(i), n = e.length, a = 0;
                      a < n;
                      a++
                    )
                      t[e[a]] = { distance: -1, parent: null };
                    return t;
                  })(),
                  n = [t];
                for (e[t].distance = 0; n.length; )
                  for (
                    var a = n.pop(), r = Object.keys(i[a]), o = r.length, s = 0;
                    s < o;
                    s++
                  ) {
                    var l = r[s],
                      u = e[l];
                    -1 === u.distance &&
                      ((u.distance = e[a].distance + 1),
                      (u.parent = a),
                      n.unshift(l));
                  }
                return e;
              })(t),
              n = {},
              a = Object.keys(e),
              o = a.length,
              s = 0;
            s < o;
            s++
          ) {
            var l = a[s];
            null !== e[l].parent && (n[l] = r(l, e));
          }
          return n;
        })(t);
        Object.keys(e).forEach(function(n) {
          var i = e[n];
          (o[t][n] = (function(t) {
            var e = function(e) {
              if (null == e) return e;
              arguments.length > 1 &&
                (e = Array.prototype.slice.call(arguments));
              var n = t(e);
              if ("object" == typeof n)
                for (var i = n.length, a = 0; a < i; a++)
                  n[a] = Math.round(n[a]);
              return n;
            };
            return "conversion" in t && (e.conversion = t.conversion), e;
          })(i)),
            (o[t][n].raw = (function(t) {
              var e = function(e) {
                return null == e
                  ? e
                  : (arguments.length > 1 &&
                      (e = Array.prototype.slice.call(arguments)),
                    t(e));
              };
              return "conversion" in t && (e.conversion = t.conversion), e;
            })(i));
        });
      });
      var s = o,
        l = {
          aliceblue: [240, 248, 255],
          antiquewhite: [250, 235, 215],
          aqua: [0, 255, 255],
          aquamarine: [127, 255, 212],
          azure: [240, 255, 255],
          beige: [245, 245, 220],
          bisque: [255, 228, 196],
          black: [0, 0, 0],
          blanchedalmond: [255, 235, 205],
          blue: [0, 0, 255],
          blueviolet: [138, 43, 226],
          brown: [165, 42, 42],
          burlywood: [222, 184, 135],
          cadetblue: [95, 158, 160],
          chartreuse: [127, 255, 0],
          chocolate: [210, 105, 30],
          coral: [255, 127, 80],
          cornflowerblue: [100, 149, 237],
          cornsilk: [255, 248, 220],
          crimson: [220, 20, 60],
          cyan: [0, 255, 255],
          darkblue: [0, 0, 139],
          darkcyan: [0, 139, 139],
          darkgoldenrod: [184, 134, 11],
          darkgray: [169, 169, 169],
          darkgreen: [0, 100, 0],
          darkgrey: [169, 169, 169],
          darkkhaki: [189, 183, 107],
          darkmagenta: [139, 0, 139],
          darkolivegreen: [85, 107, 47],
          darkorange: [255, 140, 0],
          darkorchid: [153, 50, 204],
          darkred: [139, 0, 0],
          darksalmon: [233, 150, 122],
          darkseagreen: [143, 188, 143],
          darkslateblue: [72, 61, 139],
          darkslategray: [47, 79, 79],
          darkslategrey: [47, 79, 79],
          darkturquoise: [0, 206, 209],
          darkviolet: [148, 0, 211],
          deeppink: [255, 20, 147],
          deepskyblue: [0, 191, 255],
          dimgray: [105, 105, 105],
          dimgrey: [105, 105, 105],
          dodgerblue: [30, 144, 255],
          firebrick: [178, 34, 34],
          floralwhite: [255, 250, 240],
          forestgreen: [34, 139, 34],
          fuchsia: [255, 0, 255],
          gainsboro: [220, 220, 220],
          ghostwhite: [248, 248, 255],
          gold: [255, 215, 0],
          goldenrod: [218, 165, 32],
          gray: [128, 128, 128],
          green: [0, 128, 0],
          greenyellow: [173, 255, 47],
          grey: [128, 128, 128],
          honeydew: [240, 255, 240],
          hotpink: [255, 105, 180],
          indianred: [205, 92, 92],
          indigo: [75, 0, 130],
          ivory: [255, 255, 240],
          khaki: [240, 230, 140],
          lavender: [230, 230, 250],
          lavenderblush: [255, 240, 245],
          lawngreen: [124, 252, 0],
          lemonchiffon: [255, 250, 205],
          lightblue: [173, 216, 230],
          lightcoral: [240, 128, 128],
          lightcyan: [224, 255, 255],
          lightgoldenrodyellow: [250, 250, 210],
          lightgray: [211, 211, 211],
          lightgreen: [144, 238, 144],
          lightgrey: [211, 211, 211],
          lightpink: [255, 182, 193],
          lightsalmon: [255, 160, 122],
          lightseagreen: [32, 178, 170],
          lightskyblue: [135, 206, 250],
          lightslategray: [119, 136, 153],
          lightslategrey: [119, 136, 153],
          lightsteelblue: [176, 196, 222],
          lightyellow: [255, 255, 224],
          lime: [0, 255, 0],
          limegreen: [50, 205, 50],
          linen: [250, 240, 230],
          magenta: [255, 0, 255],
          maroon: [128, 0, 0],
          mediumaquamarine: [102, 205, 170],
          mediumblue: [0, 0, 205],
          mediumorchid: [186, 85, 211],
          mediumpurple: [147, 112, 219],
          mediumseagreen: [60, 179, 113],
          mediumslateblue: [123, 104, 238],
          mediumspringgreen: [0, 250, 154],
          mediumturquoise: [72, 209, 204],
          mediumvioletred: [199, 21, 133],
          midnightblue: [25, 25, 112],
          mintcream: [245, 255, 250],
          mistyrose: [255, 228, 225],
          moccasin: [255, 228, 181],
          navajowhite: [255, 222, 173],
          navy: [0, 0, 128],
          oldlace: [253, 245, 230],
          olive: [128, 128, 0],
          olivedrab: [107, 142, 35],
          orange: [255, 165, 0],
          orangered: [255, 69, 0],
          orchid: [218, 112, 214],
          palegoldenrod: [238, 232, 170],
          palegreen: [152, 251, 152],
          paleturquoise: [175, 238, 238],
          palevioletred: [219, 112, 147],
          papayawhip: [255, 239, 213],
          peachpuff: [255, 218, 185],
          peru: [205, 133, 63],
          pink: [255, 192, 203],
          plum: [221, 160, 221],
          powderblue: [176, 224, 230],
          purple: [128, 0, 128],
          rebeccapurple: [102, 51, 153],
          red: [255, 0, 0],
          rosybrown: [188, 143, 143],
          royalblue: [65, 105, 225],
          saddlebrown: [139, 69, 19],
          salmon: [250, 128, 114],
          sandybrown: [244, 164, 96],
          seagreen: [46, 139, 87],
          seashell: [255, 245, 238],
          sienna: [160, 82, 45],
          silver: [192, 192, 192],
          skyblue: [135, 206, 235],
          slateblue: [106, 90, 205],
          slategray: [112, 128, 144],
          slategrey: [112, 128, 144],
          snow: [255, 250, 250],
          springgreen: [0, 255, 127],
          steelblue: [70, 130, 180],
          tan: [210, 180, 140],
          teal: [0, 128, 128],
          thistle: [216, 191, 216],
          tomato: [255, 99, 71],
          turquoise: [64, 224, 208],
          violet: [238, 130, 238],
          wheat: [245, 222, 179],
          white: [255, 255, 255],
          whitesmoke: [245, 245, 245],
          yellow: [255, 255, 0],
          yellowgreen: [154, 205, 50]
        },
        u = {
          getRgba: h,
          getHsla: d,
          getRgb: function(t) {
            var e = h(t);
            return e && e.slice(0, 3);
          },
          getHsl: function(t) {
            var e = d(t);
            return e && e.slice(0, 3);
          },
          getHwb: c,
          getAlpha: function(t) {
            var e = h(t);
            return e ? e[3] : (e = d(t)) ? e[3] : (e = c(t)) ? e[3] : void 0;
          },
          hexString: function(t, e) {
            e = void 0 !== e && 3 === t.length ? e : t[3];
            return (
              "#" +
              v(t[0]) +
              v(t[1]) +
              v(t[2]) +
              (e >= 0 && e < 1 ? v(Math.round(255 * e)) : "")
            );
          },
          rgbString: function(t, e) {
            return e < 1 || (t[3] && t[3] < 1)
              ? f(t, e)
              : "rgb(" + t[0] + ", " + t[1] + ", " + t[2] + ")";
          },
          rgbaString: f,
          percentString: function(t, e) {
            return e < 1 || (t[3] && t[3] < 1)
              ? g(t, e)
              : "rgb(" +
                  Math.round((t[0] / 255) * 100) +
                  "%, " +
                  Math.round((t[1] / 255) * 100) +
                  "%, " +
                  Math.round((t[2] / 255) * 100) +
                  "%)";
          },
          percentaString: g,
          hslString: function(t, e) {
            return e < 1 || (t[3] && t[3] < 1)
              ? p(t, e)
              : "hsl(" + t[0] + ", " + t[1] + "%, " + t[2] + "%)";
          },
          hslaString: p,
          hwbString: function(t, e) {
            return (
              void 0 === e && (e = void 0 !== t[3] ? t[3] : 1),
              "hwb(" +
                t[0] +
                ", " +
                t[1] +
                "%, " +
                t[2] +
                "%" +
                (void 0 !== e && 1 !== e ? ", " + e : "") +
                ")"
            );
          },
          keyword: function(t) {
            return y[t.slice(0, 3)];
          }
        };
      function h(t) {
        if (t) {
          var e = [0, 0, 0],
            n = 1,
            i = t.match(/^#([a-fA-F0-9]{3,4})$/i),
            a = "";
          if (i) {
            a = (i = i[1])[3];
            for (var r = 0; r < e.length; r++) e[r] = parseInt(i[r] + i[r], 16);
            a && (n = Math.round((parseInt(a + a, 16) / 255) * 100) / 100);
          } else if ((i = t.match(/^#([a-fA-F0-9]{6}([a-fA-F0-9]{2})?)$/i))) {
            for (a = i[2], i = i[1], r = 0; r < e.length; r++)
              e[r] = parseInt(i.slice(2 * r, 2 * r + 2), 16);
            a && (n = Math.round((parseInt(a, 16) / 255) * 100) / 100);
          } else if (
            (i = t.match(
              /^rgba?\(\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/i
            ))
          ) {
            for (r = 0; r < e.length; r++) e[r] = parseInt(i[r + 1]);
            n = parseFloat(i[4]);
          } else if (
            (i = t.match(
              /^rgba?\(\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/i
            ))
          ) {
            for (r = 0; r < e.length; r++)
              e[r] = Math.round(2.55 * parseFloat(i[r + 1]));
            n = parseFloat(i[4]);
          } else if ((i = t.match(/(\w+)/))) {
            if ("transparent" == i[1]) return [0, 0, 0, 0];
            if (!(e = l[i[1]])) return;
          }
          for (r = 0; r < e.length; r++) e[r] = m(e[r], 0, 255);
          return (n = n || 0 == n ? m(n, 0, 1) : 1), (e[3] = n), e;
        }
      }
      function d(t) {
        if (t) {
          var e = t.match(
            /^hsla?\(\s*([+-]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)/
          );
          if (e) {
            var n = parseFloat(e[4]);
            return [
              m(parseInt(e[1]), 0, 360),
              m(parseFloat(e[2]), 0, 100),
              m(parseFloat(e[3]), 0, 100),
              m(isNaN(n) ? 1 : n, 0, 1)
            ];
          }
        }
      }
      function c(t) {
        if (t) {
          var e = t.match(
            /^hwb\(\s*([+-]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)/
          );
          if (e) {
            var n = parseFloat(e[4]);
            return [
              m(parseInt(e[1]), 0, 360),
              m(parseFloat(e[2]), 0, 100),
              m(parseFloat(e[3]), 0, 100),
              m(isNaN(n) ? 1 : n, 0, 1)
            ];
          }
        }
      }
      function f(t, e) {
        return (
          void 0 === e && (e = void 0 !== t[3] ? t[3] : 1),
          "rgba(" + t[0] + ", " + t[1] + ", " + t[2] + ", " + e + ")"
        );
      }
      function g(t, e) {
        return (
          "rgba(" +
          Math.round((t[0] / 255) * 100) +
          "%, " +
          Math.round((t[1] / 255) * 100) +
          "%, " +
          Math.round((t[2] / 255) * 100) +
          "%, " +
          (e || t[3] || 1) +
          ")"
        );
      }
      function p(t, e) {
        return (
          void 0 === e && (e = void 0 !== t[3] ? t[3] : 1),
          "hsla(" + t[0] + ", " + t[1] + "%, " + t[2] + "%, " + e + ")"
        );
      }
      function m(t, e, n) {
        return Math.min(Math.max(e, t), n);
      }
      function v(t) {
        var e = t.toString(16).toUpperCase();
        return e.length < 2 ? "0" + e : e;
      }
      var y = {};
      for (var b in l) y[l[b]] = b;
      var _ = function(t) {
        return t instanceof _
          ? t
          : this instanceof _
          ? ((this.valid = !1),
            (this.values = {
              rgb: [0, 0, 0],
              hsl: [0, 0, 0],
              hsv: [0, 0, 0],
              hwb: [0, 0, 0],
              cmyk: [0, 0, 0, 0],
              alpha: 1
            }),
            void ("string" == typeof t
              ? (e = u.getRgba(t))
                ? this.setValues("rgb", e)
                : (e = u.getHsla(t))
                ? this.setValues("hsl", e)
                : (e = u.getHwb(t)) && this.setValues("hwb", e)
              : "object" == typeof t &&
                (void 0 !== (e = t).r || void 0 !== e.red
                  ? this.setValues("rgb", e)
                  : void 0 !== e.l || void 0 !== e.lightness
                  ? this.setValues("hsl", e)
                  : void 0 !== e.v || void 0 !== e.value
                  ? this.setValues("hsv", e)
                  : void 0 !== e.w || void 0 !== e.whiteness
                  ? this.setValues("hwb", e)
                  : (void 0 === e.c && void 0 === e.cyan) ||
                    this.setValues("cmyk", e))))
          : new _(t);
        var e;
      };
      (_.prototype = {
        isValid: function() {
          return this.valid;
        },
        rgb: function() {
          return this.setSpace("rgb", arguments);
        },
        hsl: function() {
          return this.setSpace("hsl", arguments);
        },
        hsv: function() {
          return this.setSpace("hsv", arguments);
        },
        hwb: function() {
          return this.setSpace("hwb", arguments);
        },
        cmyk: function() {
          return this.setSpace("cmyk", arguments);
        },
        rgbArray: function() {
          return this.values.rgb;
        },
        hslArray: function() {
          return this.values.hsl;
        },
        hsvArray: function() {
          return this.values.hsv;
        },
        hwbArray: function() {
          var t = this.values;
          return 1 !== t.alpha ? t.hwb.concat([t.alpha]) : t.hwb;
        },
        cmykArray: function() {
          return this.values.cmyk;
        },
        rgbaArray: function() {
          var t = this.values;
          return t.rgb.concat([t.alpha]);
        },
        hslaArray: function() {
          var t = this.values;
          return t.hsl.concat([t.alpha]);
        },
        alpha: function(t) {
          return void 0 === t
            ? this.values.alpha
            : (this.setValues("alpha", t), this);
        },
        red: function(t) {
          return this.setChannel("rgb", 0, t);
        },
        green: function(t) {
          return this.setChannel("rgb", 1, t);
        },
        blue: function(t) {
          return this.setChannel("rgb", 2, t);
        },
        hue: function(t) {
          return (
            t && (t = (t %= 360) < 0 ? 360 + t : t),
            this.setChannel("hsl", 0, t)
          );
        },
        saturation: function(t) {
          return this.setChannel("hsl", 1, t);
        },
        lightness: function(t) {
          return this.setChannel("hsl", 2, t);
        },
        saturationv: function(t) {
          return this.setChannel("hsv", 1, t);
        },
        whiteness: function(t) {
          return this.setChannel("hwb", 1, t);
        },
        blackness: function(t) {
          return this.setChannel("hwb", 2, t);
        },
        value: function(t) {
          return this.setChannel("hsv", 2, t);
        },
        cyan: function(t) {
          return this.setChannel("cmyk", 0, t);
        },
        magenta: function(t) {
          return this.setChannel("cmyk", 1, t);
        },
        yellow: function(t) {
          return this.setChannel("cmyk", 2, t);
        },
        black: function(t) {
          return this.setChannel("cmyk", 3, t);
        },
        hexString: function() {
          return u.hexString(this.values.rgb);
        },
        rgbString: function() {
          return u.rgbString(this.values.rgb, this.values.alpha);
        },
        rgbaString: function() {
          return u.rgbaString(this.values.rgb, this.values.alpha);
        },
        percentString: function() {
          return u.percentString(this.values.rgb, this.values.alpha);
        },
        hslString: function() {
          return u.hslString(this.values.hsl, this.values.alpha);
        },
        hslaString: function() {
          return u.hslaString(this.values.hsl, this.values.alpha);
        },
        hwbString: function() {
          return u.hwbString(this.values.hwb, this.values.alpha);
        },
        keyword: function() {
          return u.keyword(this.values.rgb, this.values.alpha);
        },
        rgbNumber: function() {
          var t = this.values.rgb;
          return (t[0] << 16) | (t[1] << 8) | t[2];
        },
        luminosity: function() {
          for (var t = this.values.rgb, e = [], n = 0; n < t.length; n++) {
            var i = t[n] / 255;
            e[n] =
              i <= 0.03928 ? i / 12.92 : Math.pow((i + 0.055) / 1.055, 2.4);
          }
          return 0.2126 * e[0] + 0.7152 * e[1] + 0.0722 * e[2];
        },
        contrast: function(t) {
          var e = this.luminosity(),
            n = t.luminosity();
          return e > n ? (e + 0.05) / (n + 0.05) : (n + 0.05) / (e + 0.05);
        },
        level: function(t) {
          var e = this.contrast(t);
          return e >= 7.1 ? "AAA" : e >= 4.5 ? "AA" : "";
        },
        dark: function() {
          var t = this.values.rgb;
          return (299 * t[0] + 587 * t[1] + 114 * t[2]) / 1e3 < 128;
        },
        light: function() {
          return !this.dark();
        },
        negate: function() {
          for (var t = [], e = 0; e < 3; e++) t[e] = 255 - this.values.rgb[e];
          return this.setValues("rgb", t), this;
        },
        lighten: function(t) {
          var e = this.values.hsl;
          return (e[2] += e[2] * t), this.setValues("hsl", e), this;
        },
        darken: function(t) {
          var e = this.values.hsl;
          return (e[2] -= e[2] * t), this.setValues("hsl", e), this;
        },
        saturate: function(t) {
          var e = this.values.hsl;
          return (e[1] += e[1] * t), this.setValues("hsl", e), this;
        },
        desaturate: function(t) {
          var e = this.values.hsl;
          return (e[1] -= e[1] * t), this.setValues("hsl", e), this;
        },
        whiten: function(t) {
          var e = this.values.hwb;
          return (e[1] += e[1] * t), this.setValues("hwb", e), this;
        },
        blacken: function(t) {
          var e = this.values.hwb;
          return (e[2] += e[2] * t), this.setValues("hwb", e), this;
        },
        greyscale: function() {
          var t = this.values.rgb,
            e = 0.3 * t[0] + 0.59 * t[1] + 0.11 * t[2];
          return this.setValues("rgb", [e, e, e]), this;
        },
        clearer: function(t) {
          var e = this.values.alpha;
          return this.setValues("alpha", e - e * t), this;
        },
        opaquer: function(t) {
          var e = this.values.alpha;
          return this.setValues("alpha", e + e * t), this;
        },
        rotate: function(t) {
          var e = this.values.hsl,
            n = (e[0] + t) % 360;
          return (e[0] = n < 0 ? 360 + n : n), this.setValues("hsl", e), this;
        },
        mix: function(t, e) {
          var n = t,
            i = void 0 === e ? 0.5 : e,
            a = 2 * i - 1,
            r = this.alpha() - n.alpha(),
            o = ((a * r == -1 ? a : (a + r) / (1 + a * r)) + 1) / 2,
            s = 1 - o;
          return this.rgb(
            o * this.red() + s * n.red(),
            o * this.green() + s * n.green(),
            o * this.blue() + s * n.blue()
          ).alpha(this.alpha() * i + n.alpha() * (1 - i));
        },
        toJSON: function() {
          return this.rgb();
        },
        clone: function() {
          var t,
            e,
            n = new _(),
            i = this.values,
            a = n.values;
          for (var r in i)
            i.hasOwnProperty(r) &&
              ((t = i[r]),
              "[object Array]" === (e = {}.toString.call(t))
                ? (a[r] = t.slice(0))
                : "[object Number]" === e
                ? (a[r] = t)
                : console.error("unexpected color value:", t));
          return n;
        }
      }),
        (_.prototype.spaces = {
          rgb: ["red", "green", "blue"],
          hsl: ["hue", "saturation", "lightness"],
          hsv: ["hue", "saturation", "value"],
          hwb: ["hue", "whiteness", "blackness"],
          cmyk: ["cyan", "magenta", "yellow", "black"]
        }),
        (_.prototype.maxes = {
          rgb: [255, 255, 255],
          hsl: [360, 100, 100],
          hsv: [360, 100, 100],
          hwb: [360, 100, 100],
          cmyk: [100, 100, 100, 100]
        }),
        (_.prototype.getValues = function(t) {
          for (var e = this.values, n = {}, i = 0; i < t.length; i++)
            n[t.charAt(i)] = e[t][i];
          return 1 !== e.alpha && (n.a = e.alpha), n;
        }),
        (_.prototype.setValues = function(t, e) {
          var n,
            i,
            a = this.values,
            r = this.spaces,
            o = this.maxes,
            l = 1;
          if (((this.valid = !0), "alpha" === t)) l = e;
          else if (e.length) (a[t] = e.slice(0, t.length)), (l = e[t.length]);
          else if (void 0 !== e[t.charAt(0)]) {
            for (n = 0; n < t.length; n++) a[t][n] = e[t.charAt(n)];
            l = e.a;
          } else if (void 0 !== e[r[t][0]]) {
            var u = r[t];
            for (n = 0; n < t.length; n++) a[t][n] = e[u[n]];
            l = e.alpha;
          }
          if (
            ((a.alpha = Math.max(0, Math.min(1, void 0 === l ? a.alpha : l))),
            "alpha" === t)
          )
            return !1;
          for (n = 0; n < t.length; n++)
            (i = Math.max(0, Math.min(o[t][n], a[t][n]))),
              (a[t][n] = Math.round(i));
          for (var h in r) h !== t && (a[h] = s[t][h](a[t]));
          return !0;
        }),
        (_.prototype.setSpace = function(t, e) {
          var n = e[0];
          return void 0 === n
            ? this.getValues(t)
            : ("number" == typeof n && (n = Array.prototype.slice.call(e)),
              this.setValues(t, n),
              this);
        }),
        (_.prototype.setChannel = function(t, e, n) {
          var i = this.values[t];
          return void 0 === n
            ? i[e]
            : n === i[e]
            ? this
            : ((i[e] = n), this.setValues(t, i), this);
        }),
        "undefined" != typeof window && (window.Color = _);
      var x,
        w = _,
        k = {
          noop: function() {},
          uid:
            ((x = 0),
            function() {
              return x++;
            }),
          isNullOrUndef: function(t) {
            return null == t;
          },
          isArray: function(t) {
            if (Array.isArray && Array.isArray(t)) return !0;
            var e = Object.prototype.toString.call(t);
            return "[object" === e.substr(0, 7) && "Array]" === e.substr(-6);
          },
          isObject: function(t) {
            return (
              null !== t &&
              "[object Object]" === Object.prototype.toString.call(t)
            );
          },
          isFinite: function(t) {
            return ("number" == typeof t || t instanceof Number) && isFinite(t);
          },
          valueOrDefault: function(t, e) {
            return void 0 === t ? e : t;
          },
          valueAtIndexOrDefault: function(t, e, n) {
            return k.valueOrDefault(k.isArray(t) ? t[e] : t, n);
          },
          callback: function(t, e, n) {
            if (t && "function" == typeof t.call) return t.apply(n, e);
          },
          each: function(t, e, n, i) {
            var a, r, o;
            if (k.isArray(t))
              if (((r = t.length), i))
                for (a = r - 1; a >= 0; a--) e.call(n, t[a], a);
              else for (a = 0; a < r; a++) e.call(n, t[a], a);
            else if (k.isObject(t))
              for (r = (o = Object.keys(t)).length, a = 0; a < r; a++)
                e.call(n, t[o[a]], o[a]);
          },
          arrayEquals: function(t, e) {
            var n, i, a, r;
            if (!t || !e || t.length !== e.length) return !1;
            for (n = 0, i = t.length; n < i; ++n)
              if (
                ((a = t[n]),
                (r = e[n]),
                a instanceof Array && r instanceof Array)
              ) {
                if (!k.arrayEquals(a, r)) return !1;
              } else if (a !== r) return !1;
            return !0;
          },
          clone: function(t) {
            if (k.isArray(t)) return t.map(k.clone);
            if (k.isObject(t)) {
              for (
                var e = {}, n = Object.keys(t), i = n.length, a = 0;
                a < i;
                ++a
              )
                e[n[a]] = k.clone(t[n[a]]);
              return e;
            }
            return t;
          },
          _merger: function(t, e, n, i) {
            var a = e[t],
              r = n[t];
            k.isObject(a) && k.isObject(r)
              ? k.merge(a, r, i)
              : (e[t] = k.clone(r));
          },
          _mergerIf: function(t, e, n) {
            var i = e[t],
              a = n[t];
            k.isObject(i) && k.isObject(a)
              ? k.mergeIf(i, a)
              : e.hasOwnProperty(t) || (e[t] = k.clone(a));
          },
          merge: function(t, e, n) {
            var i,
              a,
              r,
              o,
              s,
              l = k.isArray(e) ? e : [e],
              u = l.length;
            if (!k.isObject(t)) return t;
            for (i = (n = n || {}).merger || k._merger, a = 0; a < u; ++a)
              if (((e = l[a]), k.isObject(e)))
                for (s = 0, o = (r = Object.keys(e)).length; s < o; ++s)
                  i(r[s], t, e, n);
            return t;
          },
          mergeIf: function(t, e) {
            return k.merge(t, e, { merger: k._mergerIf });
          },
          extend:
            Object.assign ||
            function(t) {
              return k.merge(t, [].slice.call(arguments, 1), {
                merger: function(t, e, n) {
                  e[t] = n[t];
                }
              });
            },
          inherits: function(t) {
            var e = this,
              n =
                t && t.hasOwnProperty("constructor")
                  ? t.constructor
                  : function() {
                      return e.apply(this, arguments);
                    },
              i = function() {
                this.constructor = n;
              };
            return (
              (i.prototype = e.prototype),
              (n.prototype = new i()),
              (n.extend = k.inherits),
              t && k.extend(n.prototype, t),
              (n.__super__ = e.prototype),
              n
            );
          },
          _deprecated: function(t, e, n, i) {
            void 0 !== e &&
              console.warn(
                t +
                  ': "' +
                  n +
                  '" is deprecated. Please use "' +
                  i +
                  '" instead'
              );
          }
        },
        M = k;
      (k.callCallback = k.callback),
        (k.indexOf = function(t, e, n) {
          return Array.prototype.indexOf.call(t, e, n);
        }),
        (k.getValueOrDefault = k.valueOrDefault),
        (k.getValueAtIndexOrDefault = k.valueAtIndexOrDefault);
      var S = {
          linear: function(t) {
            return t;
          },
          easeInQuad: function(t) {
            return t * t;
          },
          easeOutQuad: function(t) {
            return -t * (t - 2);
          },
          easeInOutQuad: function(t) {
            return (t /= 0.5) < 1 ? 0.5 * t * t : -0.5 * (--t * (t - 2) - 1);
          },
          easeInCubic: function(t) {
            return t * t * t;
          },
          easeOutCubic: function(t) {
            return (t -= 1) * t * t + 1;
          },
          easeInOutCubic: function(t) {
            return (t /= 0.5) < 1
              ? 0.5 * t * t * t
              : 0.5 * ((t -= 2) * t * t + 2);
          },
          easeInQuart: function(t) {
            return t * t * t * t;
          },
          easeOutQuart: function(t) {
            return -((t -= 1) * t * t * t - 1);
          },
          easeInOutQuart: function(t) {
            return (t /= 0.5) < 1
              ? 0.5 * t * t * t * t
              : -0.5 * ((t -= 2) * t * t * t - 2);
          },
          easeInQuint: function(t) {
            return t * t * t * t * t;
          },
          easeOutQuint: function(t) {
            return (t -= 1) * t * t * t * t + 1;
          },
          easeInOutQuint: function(t) {
            return (t /= 0.5) < 1
              ? 0.5 * t * t * t * t * t
              : 0.5 * ((t -= 2) * t * t * t * t + 2);
          },
          easeInSine: function(t) {
            return 1 - Math.cos(t * (Math.PI / 2));
          },
          easeOutSine: function(t) {
            return Math.sin(t * (Math.PI / 2));
          },
          easeInOutSine: function(t) {
            return -0.5 * (Math.cos(Math.PI * t) - 1);
          },
          easeInExpo: function(t) {
            return 0 === t ? 0 : Math.pow(2, 10 * (t - 1));
          },
          easeOutExpo: function(t) {
            return 1 === t ? 1 : 1 - Math.pow(2, -10 * t);
          },
          easeInOutExpo: function(t) {
            return 0 === t
              ? 0
              : 1 === t
              ? 1
              : (t /= 0.5) < 1
              ? 0.5 * Math.pow(2, 10 * (t - 1))
              : 0.5 * (2 - Math.pow(2, -10 * --t));
          },
          easeInCirc: function(t) {
            return t >= 1 ? t : -(Math.sqrt(1 - t * t) - 1);
          },
          easeOutCirc: function(t) {
            return Math.sqrt(1 - (t -= 1) * t);
          },
          easeInOutCirc: function(t) {
            return (t /= 0.5) < 1
              ? -0.5 * (Math.sqrt(1 - t * t) - 1)
              : 0.5 * (Math.sqrt(1 - (t -= 2) * t) + 1);
          },
          easeInElastic: function(t) {
            var e = 1.70158,
              n = 0,
              i = 1;
            return 0 === t
              ? 0
              : 1 === t
              ? 1
              : (n || (n = 0.3),
                i < 1
                  ? ((i = 1), (e = n / 4))
                  : (e = (n / (2 * Math.PI)) * Math.asin(1 / i)),
                -i *
                  Math.pow(2, 10 * (t -= 1)) *
                  Math.sin(((t - e) * (2 * Math.PI)) / n));
          },
          easeOutElastic: function(t) {
            var e = 1.70158,
              n = 0,
              i = 1;
            return 0 === t
              ? 0
              : 1 === t
              ? 1
              : (n || (n = 0.3),
                i < 1
                  ? ((i = 1), (e = n / 4))
                  : (e = (n / (2 * Math.PI)) * Math.asin(1 / i)),
                i *
                  Math.pow(2, -10 * t) *
                  Math.sin(((t - e) * (2 * Math.PI)) / n) +
                  1);
          },
          easeInOutElastic: function(t) {
            var e = 1.70158,
              n = 0,
              i = 1;
            return 0 === t
              ? 0
              : 2 == (t /= 0.5)
              ? 1
              : (n || (n = 0.45),
                i < 1
                  ? ((i = 1), (e = n / 4))
                  : (e = (n / (2 * Math.PI)) * Math.asin(1 / i)),
                t < 1
                  ? i *
                    Math.pow(2, 10 * (t -= 1)) *
                    Math.sin(((t - e) * (2 * Math.PI)) / n) *
                    -0.5
                  : i *
                      Math.pow(2, -10 * (t -= 1)) *
                      Math.sin(((t - e) * (2 * Math.PI)) / n) *
                      0.5 +
                    1);
          },
          easeInBack: function(t) {
            var e = 1.70158;
            return t * t * ((e + 1) * t - e);
          },
          easeOutBack: function(t) {
            var e = 1.70158;
            return (t -= 1) * t * ((e + 1) * t + e) + 1;
          },
          easeInOutBack: function(t) {
            var e = 1.70158;
            return (t /= 0.5) < 1
              ? t * t * ((1 + (e *= 1.525)) * t - e) * 0.5
              : 0.5 * ((t -= 2) * t * ((1 + (e *= 1.525)) * t + e) + 2);
          },
          easeInBounce: function(t) {
            return 1 - S.easeOutBounce(1 - t);
          },
          easeOutBounce: function(t) {
            return t < 1 / 2.75
              ? 7.5625 * t * t
              : t < 2 / 2.75
              ? 7.5625 * (t -= 1.5 / 2.75) * t + 0.75
              : t < 2.5 / 2.75
              ? 7.5625 * (t -= 2.25 / 2.75) * t + 0.9375
              : 7.5625 * (t -= 2.625 / 2.75) * t + 0.984375;
          },
          easeInOutBounce: function(t) {
            return t < 0.5
              ? 0.5 * S.easeInBounce(2 * t)
              : 0.5 * S.easeOutBounce(2 * t - 1) + 0.5;
          }
        },
        D = { effects: S };
      M.easingEffects = S;
      var C = Math.PI,
        A = C / 180,
        T = 2 * C,
        P = C / 2,
        O = C / 4,
        I = (2 * C) / 3,
        F = {
          clear: function(t) {
            t.ctx.clearRect(0, 0, t.width, t.height);
          },
          roundedRect: function(t, e, n, i, a, r) {
            if (r) {
              var o = Math.min(r, a / 2, i / 2),
                s = e + o,
                l = n + o,
                u = e + i - o,
                h = n + a - o;
              t.moveTo(e, l),
                s < u && l < h
                  ? (t.arc(s, l, o, -C, -P),
                    t.arc(u, l, o, -P, 0),
                    t.arc(u, h, o, 0, P),
                    t.arc(s, h, o, P, C))
                  : s < u
                  ? (t.moveTo(s, n),
                    t.arc(u, l, o, -P, P),
                    t.arc(s, l, o, P, C + P))
                  : l < h
                  ? (t.arc(s, l, o, -C, 0), t.arc(s, h, o, 0, C))
                  : t.arc(s, l, o, -C, C),
                t.closePath(),
                t.moveTo(e, n);
            } else t.rect(e, n, i, a);
          },
          drawPoint: function(t, e, n, i, a, r) {
            var o,
              s,
              l,
              u,
              h,
              d = (r || 0) * A;
            if (
              e &&
              "object" == typeof e &&
              ("[object HTMLImageElement]" === (o = e.toString()) ||
                "[object HTMLCanvasElement]" === o)
            )
              return (
                t.save(),
                t.translate(i, a),
                t.rotate(d),
                t.drawImage(e, -e.width / 2, -e.height / 2, e.width, e.height),
                void t.restore()
              );
            if (!(isNaN(n) || n <= 0)) {
              switch ((t.beginPath(), e)) {
                default:
                  t.arc(i, a, n, 0, T), t.closePath();
                  break;
                case "triangle":
                  t.moveTo(i + Math.sin(d) * n, a - Math.cos(d) * n),
                    (d += I),
                    t.lineTo(i + Math.sin(d) * n, a - Math.cos(d) * n),
                    (d += I),
                    t.lineTo(i + Math.sin(d) * n, a - Math.cos(d) * n),
                    t.closePath();
                  break;
                case "rectRounded":
                  (u = n - (h = 0.516 * n)),
                    (s = Math.cos(d + O) * u),
                    (l = Math.sin(d + O) * u),
                    t.arc(i - s, a - l, h, d - C, d - P),
                    t.arc(i + l, a - s, h, d - P, d),
                    t.arc(i + s, a + l, h, d, d + P),
                    t.arc(i - l, a + s, h, d + P, d + C),
                    t.closePath();
                  break;
                case "rect":
                  if (!r) {
                    (u = Math.SQRT1_2 * n), t.rect(i - u, a - u, 2 * u, 2 * u);
                    break;
                  }
                  d += O;
                case "rectRot":
                  (s = Math.cos(d) * n),
                    (l = Math.sin(d) * n),
                    t.moveTo(i - s, a - l),
                    t.lineTo(i + l, a - s),
                    t.lineTo(i + s, a + l),
                    t.lineTo(i - l, a + s),
                    t.closePath();
                  break;
                case "crossRot":
                  d += O;
                case "cross":
                  (s = Math.cos(d) * n),
                    (l = Math.sin(d) * n),
                    t.moveTo(i - s, a - l),
                    t.lineTo(i + s, a + l),
                    t.moveTo(i + l, a - s),
                    t.lineTo(i - l, a + s);
                  break;
                case "star":
                  (s = Math.cos(d) * n),
                    (l = Math.sin(d) * n),
                    t.moveTo(i - s, a - l),
                    t.lineTo(i + s, a + l),
                    t.moveTo(i + l, a - s),
                    t.lineTo(i - l, a + s),
                    (d += O),
                    (s = Math.cos(d) * n),
                    (l = Math.sin(d) * n),
                    t.moveTo(i - s, a - l),
                    t.lineTo(i + s, a + l),
                    t.moveTo(i + l, a - s),
                    t.lineTo(i - l, a + s);
                  break;
                case "line":
                  (s = Math.cos(d) * n),
                    (l = Math.sin(d) * n),
                    t.moveTo(i - s, a - l),
                    t.lineTo(i + s, a + l);
                  break;
                case "dash":
                  t.moveTo(i, a),
                    t.lineTo(i + Math.cos(d) * n, a + Math.sin(d) * n);
              }
              t.fill(), t.stroke();
            }
          },
          _isPointInArea: function(t, e) {
            return (
              t.x > e.left - 1e-6 &&
              t.x < e.right + 1e-6 &&
              t.y > e.top - 1e-6 &&
              t.y < e.bottom + 1e-6
            );
          },
          clipArea: function(t, e) {
            t.save(),
              t.beginPath(),
              t.rect(e.left, e.top, e.right - e.left, e.bottom - e.top),
              t.clip();
          },
          unclipArea: function(t) {
            t.restore();
          },
          lineTo: function(t, e, n, i) {
            var a = n.steppedLine;
            if (a) {
              if ("middle" === a) {
                var r = (e.x + n.x) / 2;
                t.lineTo(r, i ? n.y : e.y), t.lineTo(r, i ? e.y : n.y);
              } else
                ("after" === a && !i) || ("after" !== a && i)
                  ? t.lineTo(e.x, n.y)
                  : t.lineTo(n.x, e.y);
              t.lineTo(n.x, n.y);
            } else
              n.tension
                ? t.bezierCurveTo(
                    i ? e.controlPointPreviousX : e.controlPointNextX,
                    i ? e.controlPointPreviousY : e.controlPointNextY,
                    i ? n.controlPointNextX : n.controlPointPreviousX,
                    i ? n.controlPointNextY : n.controlPointPreviousY,
                    n.x,
                    n.y
                  )
                : t.lineTo(n.x, n.y);
          }
        },
        V = F;
      (M.clear = F.clear),
        (M.drawRoundedRectangle = function(t) {
          t.beginPath(), F.roundedRect.apply(F, arguments);
        });
      var L = {
        _set: function(t, e) {
          return M.merge(this[t] || (this[t] = {}), e);
        }
      };
      L._set("global", {
        defaultColor: "rgba(0,0,0,0.1)",
        defaultFontColor: "#666",
        defaultFontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
        defaultFontSize: 12,
        defaultFontStyle: "normal",
        defaultLineHeight: 1.2,
        showLines: !0
      });
      var R = L,
        N = M.valueOrDefault,
        W = {
          toLineHeight: function(t, e) {
            var n = ("" + t).match(/^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/);
            if (!n || "normal" === n[1]) return 1.2 * e;
            switch (((t = +n[2]), n[3])) {
              case "px":
                return t;
              case "%":
                t /= 100;
            }
            return e * t;
          },
          toPadding: function(t) {
            var e, n, i, a;
            return (
              M.isObject(t)
                ? ((e = +t.top || 0),
                  (n = +t.right || 0),
                  (i = +t.bottom || 0),
                  (a = +t.left || 0))
                : (e = n = i = a = +t || 0),
              {
                top: e,
                right: n,
                bottom: i,
                left: a,
                height: e + i,
                width: a + n
              }
            );
          },
          _parseFont: function(t) {
            var e = R.global,
              n = N(t.fontSize, e.defaultFontSize),
              i = {
                family: N(t.fontFamily, e.defaultFontFamily),
                lineHeight: M.options.toLineHeight(
                  N(t.lineHeight, e.defaultLineHeight),
                  n
                ),
                size: n,
                style: N(t.fontStyle, e.defaultFontStyle),
                weight: null,
                string: ""
              };
            return (
              (i.string = (function(t) {
                return !t ||
                  M.isNullOrUndef(t.size) ||
                  M.isNullOrUndef(t.family)
                  ? null
                  : (t.style ? t.style + " " : "") +
                      (t.weight ? t.weight + " " : "") +
                      t.size +
                      "px " +
                      t.family;
              })(i)),
              i
            );
          },
          resolve: function(t, e, n, i) {
            var a,
              r,
              o,
              s = !0;
            for (a = 0, r = t.length; a < r; ++a)
              if (
                void 0 !== (o = t[a]) &&
                (void 0 !== e &&
                  "function" == typeof o &&
                  ((o = o(e)), (s = !1)),
                void 0 !== n && M.isArray(o) && ((o = o[n]), (s = !1)),
                void 0 !== o)
              )
                return i && !s && (i.cacheable = !1), o;
          }
        },
        Y = {
          _factorize: function(t) {
            var e,
              n = [],
              i = Math.sqrt(t);
            for (e = 1; e < i; e++) t % e == 0 && (n.push(e), n.push(t / e));
            return (
              i === (0 | i) && n.push(i),
              n
                .sort(function(t, e) {
                  return t - e;
                })
                .pop(),
              n
            );
          },
          log10:
            Math.log10 ||
            function(t) {
              var e = Math.log(t) * Math.LOG10E,
                n = Math.round(e);
              return t === Math.pow(10, n) ? n : e;
            }
        },
        E = Y;
      M.log10 = Y.log10;
      var j = M,
        z = D,
        B = V,
        H = W,
        U = E;
      (j.easing = z),
        (j.canvas = B),
        (j.options = H),
        (j.math = U),
        (j.rtl = {
          getRtlAdapter: function(t, e, n) {
            return t
              ? (function(t, e) {
                  return {
                    x: function(n) {
                      return t + t + e - n;
                    },
                    setWidth: function(t) {
                      e = t;
                    },
                    textAlign: function(t) {
                      return "center" === t
                        ? t
                        : "right" === t
                        ? "left"
                        : "right";
                    },
                    xPlus: function(t, e) {
                      return t - e;
                    },
                    leftForLtr: function(t, e) {
                      return t - e;
                    }
                  };
                })(e, n)
              : {
                  x: function(t) {
                    return t;
                  },
                  setWidth: function(t) {},
                  textAlign: function(t) {
                    return t;
                  },
                  xPlus: function(t, e) {
                    return t + e;
                  },
                  leftForLtr: function(t, e) {
                    return t;
                  }
                };
          },
          overrideTextDirection: function(t, e) {
            var n, i;
            ("ltr" !== e && "rtl" !== e) ||
              ((i = [
                (n = t.canvas.style).getPropertyValue("direction"),
                n.getPropertyPriority("direction")
              ]),
              n.setProperty("direction", e, "important"),
              (t.prevTextDirection = i));
          },
          restoreTextDirection: function(t) {
            var e = t.prevTextDirection;
            void 0 !== e &&
              (delete t.prevTextDirection,
              t.canvas.style.setProperty("direction", e[0], e[1]));
          }
        });
      var q = function(t) {
        j.extend(this, t), this.initialize.apply(this, arguments);
      };
      j.extend(q.prototype, {
        _type: void 0,
        initialize: function() {
          this.hidden = !1;
        },
        pivot: function() {
          var t = this;
          return (
            t._view || (t._view = j.extend({}, t._model)), (t._start = {}), t
          );
        },
        transition: function(t) {
          var e = this,
            n = e._model,
            i = e._start,
            a = e._view;
          return n && 1 !== t
            ? (a || (a = e._view = {}),
              i || (i = e._start = {}),
              (function(t, e, n, i) {
                var a,
                  r,
                  o,
                  s,
                  l,
                  u,
                  h,
                  d,
                  c,
                  f = Object.keys(n);
                for (a = 0, r = f.length; a < r; ++a)
                  if (
                    ((u = n[(o = f[a])]),
                    e.hasOwnProperty(o) || (e[o] = u),
                    (s = e[o]) !== u && "_" !== o[0])
                  ) {
                    if (
                      (t.hasOwnProperty(o) || (t[o] = s),
                      (h = typeof u) == typeof (l = t[o]))
                    )
                      if ("string" === h) {
                        if ((d = w(l)).valid && (c = w(u)).valid) {
                          e[o] = c.mix(d, i).rgbString();
                          continue;
                        }
                      } else if (j.isFinite(l) && j.isFinite(u)) {
                        e[o] = l + (u - l) * i;
                        continue;
                      }
                    e[o] = u;
                  }
              })(i, a, n, t),
              e)
            : ((e._view = j.extend({}, n)), (e._start = null), e);
        },
        tooltipPosition: function() {
          return { x: this._model.x, y: this._model.y };
        },
        hasValue: function() {
          return j.isNumber(this._model.x) && j.isNumber(this._model.y);
        }
      }),
        (q.extend = j.inherits);
      var G = q,
        Z = G.extend({
          chart: null,
          currentStep: 0,
          numSteps: 60,
          easing: "",
          render: null,
          onAnimationProgress: null,
          onAnimationComplete: null
        }),
        $ = Z;
      Object.defineProperty(Z.prototype, "animationObject", {
        get: function() {
          return this;
        }
      }),
        Object.defineProperty(Z.prototype, "chartInstance", {
          get: function() {
            return this.chart;
          },
          set: function(t) {
            this.chart = t;
          }
        }),
        R._set("global", {
          animation: {
            duration: 1e3,
            easing: "easeOutQuart",
            onProgress: j.noop,
            onComplete: j.noop
          }
        });
      var X = {
          animations: [],
          request: null,
          addAnimation: function(t, e, n, i) {
            var a,
              r,
              o = this.animations;
            for (
              e.chart = t,
                e.startTime = Date.now(),
                e.duration = n,
                i || (t.animating = !0),
                a = 0,
                r = o.length;
              a < r;
              ++a
            )
              if (o[a].chart === t) return void (o[a] = e);
            o.push(e), 1 === o.length && this.requestAnimationFrame();
          },
          cancelAnimation: function(t) {
            var e = j.findIndex(this.animations, function(e) {
              return e.chart === t;
            });
            -1 !== e && (this.animations.splice(e, 1), (t.animating = !1));
          },
          requestAnimationFrame: function() {
            var t = this;
            null === t.request &&
              (t.request = j.requestAnimFrame.call(window, function() {
                (t.request = null), t.startDigest();
              }));
          },
          startDigest: function() {
            this.advance(),
              this.animations.length > 0 && this.requestAnimationFrame();
          },
          advance: function() {
            for (var t, e, n, i, a = this.animations, r = 0; r < a.length; )
              (e = (t = a[r]).chart),
                (n = t.numSteps),
                (i =
                  Math.floor(((Date.now() - t.startTime) / t.duration) * n) +
                  1),
                (t.currentStep = Math.min(i, n)),
                j.callback(t.render, [e, t], e),
                j.callback(t.onAnimationProgress, [t], e),
                t.currentStep >= n
                  ? (j.callback(t.onAnimationComplete, [t], e),
                    (e.animating = !1),
                    a.splice(r, 1))
                  : ++r;
          }
        },
        K = j.options.resolve,
        J = ["push", "pop", "shift", "splice", "unshift"];
      function Q(t, e) {
        var n = t._chartjs;
        if (n) {
          var i = n.listeners,
            a = i.indexOf(e);
          -1 !== a && i.splice(a, 1),
            i.length > 0 ||
              (J.forEach(function(e) {
                delete t[e];
              }),
              delete t._chartjs);
        }
      }
      var tt = function(t, e) {
        this.initialize(t, e);
      };
      j.extend(tt.prototype, {
        datasetElementType: null,
        dataElementType: null,
        _datasetElementOptions: [
          "backgroundColor",
          "borderCapStyle",
          "borderColor",
          "borderDash",
          "borderDashOffset",
          "borderJoinStyle",
          "borderWidth"
        ],
        _dataElementOptions: [
          "backgroundColor",
          "borderColor",
          "borderWidth",
          "pointStyle"
        ],
        initialize: function(t, e) {
          var n = this;
          (n.chart = t),
            (n.index = e),
            n.linkScales(),
            n.addElements(),
            (n._type = n.getMeta().type);
        },
        updateIndex: function(t) {
          this.index = t;
        },
        linkScales: function() {
          var t = this.getMeta(),
            e = this.chart,
            n = e.scales,
            i = this.getDataset(),
            a = e.options.scales;
          (null !== t.xAxisID && t.xAxisID in n && !i.xAxisID) ||
            (t.xAxisID = i.xAxisID || a.xAxes[0].id),
            (null !== t.yAxisID && t.yAxisID in n && !i.yAxisID) ||
              (t.yAxisID = i.yAxisID || a.yAxes[0].id);
        },
        getDataset: function() {
          return this.chart.data.datasets[this.index];
        },
        getMeta: function() {
          return this.chart.getDatasetMeta(this.index);
        },
        getScaleForId: function(t) {
          return this.chart.scales[t];
        },
        _getValueScaleId: function() {
          return this.getMeta().yAxisID;
        },
        _getIndexScaleId: function() {
          return this.getMeta().xAxisID;
        },
        _getValueScale: function() {
          return this.getScaleForId(this._getValueScaleId());
        },
        _getIndexScale: function() {
          return this.getScaleForId(this._getIndexScaleId());
        },
        reset: function() {
          this._update(!0);
        },
        destroy: function() {
          this._data && Q(this._data, this);
        },
        createMetaDataset: function() {
          var t = this.datasetElementType;
          return t && new t({ _chart: this.chart, _datasetIndex: this.index });
        },
        createMetaData: function(t) {
          var e = this.dataElementType;
          return (
            e &&
            new e({ _chart: this.chart, _datasetIndex: this.index, _index: t })
          );
        },
        addElements: function() {
          var t,
            e,
            n = this.getMeta(),
            i = this.getDataset().data || [],
            a = n.data;
          for (t = 0, e = i.length; t < e; ++t)
            a[t] = a[t] || this.createMetaData(t);
          n.dataset = n.dataset || this.createMetaDataset();
        },
        addElementAndReset: function(t) {
          var e = this.createMetaData(t);
          this.getMeta().data.splice(t, 0, e), this.updateElement(e, t, !0);
        },
        buildOrUpdateElements: function() {
          var t,
            e,
            n = this,
            i = n.getDataset(),
            a = i.data || (i.data = []);
          n._data !== a &&
            (n._data && Q(n._data, n),
            a &&
              Object.isExtensible(a) &&
              ((e = n),
              (t = a)._chartjs
                ? t._chartjs.listeners.push(e)
                : (Object.defineProperty(t, "_chartjs", {
                    configurable: !0,
                    enumerable: !1,
                    value: { listeners: [e] }
                  }),
                  J.forEach(function(e) {
                    var n = "onData" + e.charAt(0).toUpperCase() + e.slice(1),
                      i = t[e];
                    Object.defineProperty(t, e, {
                      configurable: !0,
                      enumerable: !1,
                      value: function() {
                        var e = Array.prototype.slice.call(arguments),
                          a = i.apply(this, e);
                        return (
                          j.each(t._chartjs.listeners, function(t) {
                            "function" == typeof t[n] && t[n].apply(t, e);
                          }),
                          a
                        );
                      }
                    });
                  }))),
            (n._data = a)),
            n.resyncElements();
        },
        _configure: function() {
          this._config = j.merge(
            {},
            [this.chart.options.datasets[this._type], this.getDataset()],
            {
              merger: function(t, e, n) {
                "_meta" !== t && "data" !== t && j._merger(t, e, n);
              }
            }
          );
        },
        _update: function(t) {
          this._configure(), (this._cachedDataOpts = null), this.update(t);
        },
        update: j.noop,
        transition: function(t) {
          for (
            var e = this.getMeta(), n = e.data || [], i = n.length, a = 0;
            a < i;
            ++a
          )
            n[a].transition(t);
          e.dataset && e.dataset.transition(t);
        },
        draw: function() {
          var t = this.getMeta(),
            e = t.data || [],
            n = e.length,
            i = 0;
          for (t.dataset && t.dataset.draw(); i < n; ++i) e[i].draw();
        },
        getStyle: function(t) {
          var e,
            n = this.getMeta(),
            i = n.dataset;
          return (
            this._configure(),
            i && void 0 === t
              ? (e = this._resolveDatasetElementOptions(i || {}))
              : ((t = t || 0),
                (e = this._resolveDataElementOptions(n.data[t] || {}, t))),
            (!1 !== e.fill && null !== e.fill) ||
              (e.backgroundColor = e.borderColor),
            e
          );
        },
        _resolveDatasetElementOptions: function(t, e) {
          var n,
            i,
            a,
            r,
            o = this,
            s = o.chart,
            l = o._config,
            u = t.custom || {},
            h = s.options.elements[o.datasetElementType.prototype._type] || {},
            d = o._datasetElementOptions,
            c = {},
            f = {
              chart: s,
              dataset: o.getDataset(),
              datasetIndex: o.index,
              hover: e
            };
          for (n = 0, i = d.length; n < i; ++n)
            (a = d[n]),
              (r = e ? "hover" + a.charAt(0).toUpperCase() + a.slice(1) : a),
              (c[a] = K([u[r], l[r], h[r]], f));
          return c;
        },
        _resolveDataElementOptions: function(t, e) {
          var n = this,
            i = t && t.custom,
            a = n._cachedDataOpts;
          if (a && !i) return a;
          var r,
            o,
            s,
            l,
            u = n.chart,
            h = n._config,
            d = u.options.elements[n.dataElementType.prototype._type] || {},
            c = n._dataElementOptions,
            f = {},
            g = {
              chart: u,
              dataIndex: e,
              dataset: n.getDataset(),
              datasetIndex: n.index
            },
            p = { cacheable: !i };
          if (((i = i || {}), j.isArray(c)))
            for (o = 0, s = c.length; o < s; ++o)
              f[(l = c[o])] = K([i[l], h[l], d[l]], g, e, p);
          else
            for (o = 0, s = (r = Object.keys(c)).length; o < s; ++o)
              f[(l = r[o])] = K([i[l], h[c[l]], h[l], d[l]], g, e, p);
          return p.cacheable && (n._cachedDataOpts = Object.freeze(f)), f;
        },
        removeHoverStyle: function(t) {
          j.merge(t._model, t.$previousStyle || {}), delete t.$previousStyle;
        },
        setHoverStyle: function(t) {
          var e = this.chart.data.datasets[t._datasetIndex],
            n = t._index,
            i = t.custom || {},
            a = t._model,
            r = j.getHoverColor;
          (t.$previousStyle = {
            backgroundColor: a.backgroundColor,
            borderColor: a.borderColor,
            borderWidth: a.borderWidth
          }),
            (a.backgroundColor = K(
              [
                i.hoverBackgroundColor,
                e.hoverBackgroundColor,
                r(a.backgroundColor)
              ],
              void 0,
              n
            )),
            (a.borderColor = K(
              [i.hoverBorderColor, e.hoverBorderColor, r(a.borderColor)],
              void 0,
              n
            )),
            (a.borderWidth = K(
              [i.hoverBorderWidth, e.hoverBorderWidth, a.borderWidth],
              void 0,
              n
            ));
        },
        _removeDatasetHoverStyle: function() {
          var t = this.getMeta().dataset;
          t && this.removeHoverStyle(t);
        },
        _setDatasetHoverStyle: function() {
          var t,
            e,
            n,
            i,
            a,
            r,
            o = this.getMeta().dataset,
            s = {};
          if (o) {
            for (
              r = o._model,
                a = this._resolveDatasetElementOptions(o, !0),
                t = 0,
                e = (i = Object.keys(a)).length;
              t < e;
              ++t
            )
              (s[(n = i[t])] = r[n]), (r[n] = a[n]);
            o.$previousStyle = s;
          }
        },
        resyncElements: function() {
          var t = this.getMeta(),
            e = this.getDataset().data,
            n = t.data.length,
            i = e.length;
          i < n
            ? t.data.splice(i, n - i)
            : i > n && this.insertElements(n, i - n);
        },
        insertElements: function(t, e) {
          for (var n = 0; n < e; ++n) this.addElementAndReset(t + n);
        },
        onDataPush: function() {
          var t = arguments.length;
          this.insertElements(this.getDataset().data.length - t, t);
        },
        onDataPop: function() {
          this.getMeta().data.pop();
        },
        onDataShift: function() {
          this.getMeta().data.shift();
        },
        onDataSplice: function(t, e) {
          this.getMeta().data.splice(t, e),
            this.insertElements(t, arguments.length - 2);
        },
        onDataUnshift: function() {
          this.insertElements(0, arguments.length);
        }
      }),
        (tt.extend = j.inherits);
      var et = tt,
        nt = 2 * Math.PI;
      function it(t, e) {
        var n = e.startAngle,
          i = e.endAngle,
          a = e.pixelMargin,
          r = a / e.outerRadius,
          o = e.x,
          s = e.y;
        t.beginPath(),
          t.arc(o, s, e.outerRadius, n - r, i + r),
          e.innerRadius > a
            ? ((r = a / e.innerRadius),
              t.arc(o, s, e.innerRadius - a, i + r, n - r, !0))
            : t.arc(o, s, a, i + Math.PI / 2, n - Math.PI / 2),
          t.closePath(),
          t.clip();
      }
      R._set("global", {
        elements: {
          arc: {
            backgroundColor: R.global.defaultColor,
            borderColor: "#fff",
            borderWidth: 2,
            borderAlign: "center"
          }
        }
      });
      var at = G.extend({
          _type: "arc",
          inLabelRange: function(t) {
            var e = this._view;
            return (
              !!e &&
              Math.pow(t - e.x, 2) < Math.pow(e.radius + e.hoverRadius, 2)
            );
          },
          inRange: function(t, e) {
            var n = this._view;
            if (n) {
              for (
                var i = j.getAngleFromPoint(n, { x: t, y: e }),
                  a = i.angle,
                  r = i.distance,
                  o = n.startAngle,
                  s = n.endAngle;
                s < o;

              )
                s += nt;
              for (; a > s; ) a -= nt;
              for (; a < o; ) a += nt;
              var l = a >= o && a <= s,
                u = r >= n.innerRadius && r <= n.outerRadius;
              return l && u;
            }
            return !1;
          },
          getCenterPoint: function() {
            var t = this._view,
              e = (t.startAngle + t.endAngle) / 2,
              n = (t.innerRadius + t.outerRadius) / 2;
            return { x: t.x + Math.cos(e) * n, y: t.y + Math.sin(e) * n };
          },
          getArea: function() {
            var t = this._view;
            return (
              Math.PI *
              ((t.endAngle - t.startAngle) / (2 * Math.PI)) *
              (Math.pow(t.outerRadius, 2) - Math.pow(t.innerRadius, 2))
            );
          },
          tooltipPosition: function() {
            var t = this._view,
              e = t.startAngle + (t.endAngle - t.startAngle) / 2,
              n = (t.outerRadius - t.innerRadius) / 2 + t.innerRadius;
            return { x: t.x + Math.cos(e) * n, y: t.y + Math.sin(e) * n };
          },
          draw: function() {
            var t,
              e = this._chart.ctx,
              n = this._view,
              i = "inner" === n.borderAlign ? 0.33 : 0,
              a = {
                x: n.x,
                y: n.y,
                innerRadius: n.innerRadius,
                outerRadius: Math.max(n.outerRadius - i, 0),
                pixelMargin: i,
                startAngle: n.startAngle,
                endAngle: n.endAngle,
                fullCircles: Math.floor(n.circumference / nt)
              };
            if (
              (e.save(),
              (e.fillStyle = n.backgroundColor),
              (e.strokeStyle = n.borderColor),
              a.fullCircles)
            ) {
              for (
                a.endAngle = a.startAngle + nt,
                  e.beginPath(),
                  e.arc(a.x, a.y, a.outerRadius, a.startAngle, a.endAngle),
                  e.arc(a.x, a.y, a.innerRadius, a.endAngle, a.startAngle, !0),
                  e.closePath(),
                  t = 0;
                t < a.fullCircles;
                ++t
              )
                e.fill();
              a.endAngle = a.startAngle + (n.circumference % nt);
            }
            e.beginPath(),
              e.arc(a.x, a.y, a.outerRadius, a.startAngle, a.endAngle),
              e.arc(a.x, a.y, a.innerRadius, a.endAngle, a.startAngle, !0),
              e.closePath(),
              e.fill(),
              n.borderWidth &&
                (function(t, e, n) {
                  var i = "inner" === e.borderAlign;
                  i
                    ? ((t.lineWidth = 2 * e.borderWidth),
                      (t.lineJoin = "round"))
                    : ((t.lineWidth = e.borderWidth), (t.lineJoin = "bevel")),
                    n.fullCircles &&
                      (function(t, e, n, i) {
                        var a,
                          r = n.endAngle;
                        for (
                          i &&
                            ((n.endAngle = n.startAngle + nt),
                            it(t, n),
                            (n.endAngle = r),
                            n.endAngle === n.startAngle &&
                              n.fullCircles &&
                              ((n.endAngle += nt), n.fullCircles--)),
                            t.beginPath(),
                            t.arc(
                              n.x,
                              n.y,
                              n.innerRadius,
                              n.startAngle + nt,
                              n.startAngle,
                              !0
                            ),
                            a = 0;
                          a < n.fullCircles;
                          ++a
                        )
                          t.stroke();
                        for (
                          t.beginPath(),
                            t.arc(
                              n.x,
                              n.y,
                              e.outerRadius,
                              n.startAngle,
                              n.startAngle + nt
                            ),
                            a = 0;
                          a < n.fullCircles;
                          ++a
                        )
                          t.stroke();
                      })(t, e, n, i),
                    i && it(t, n),
                    t.beginPath(),
                    t.arc(n.x, n.y, e.outerRadius, n.startAngle, n.endAngle),
                    t.arc(
                      n.x,
                      n.y,
                      n.innerRadius,
                      n.endAngle,
                      n.startAngle,
                      !0
                    ),
                    t.closePath(),
                    t.stroke();
                })(e, n, a),
              e.restore();
          }
        }),
        rt = j.valueOrDefault,
        ot = R.global.defaultColor;
      R._set("global", {
        elements: {
          line: {
            tension: 0.4,
            backgroundColor: ot,
            borderWidth: 3,
            borderColor: ot,
            borderCapStyle: "butt",
            borderDash: [],
            borderDashOffset: 0,
            borderJoinStyle: "miter",
            capBezierPoints: !0,
            fill: !0
          }
        }
      });
      var st = G.extend({
          _type: "line",
          draw: function() {
            var t,
              e,
              n,
              i = this,
              a = i._view,
              r = i._chart.ctx,
              o = a.spanGaps,
              s = i._children.slice(),
              l = R.global,
              u = l.elements.line,
              h = -1,
              d = i._loop;
            if (s.length) {
              if (i._loop) {
                for (t = 0; t < s.length; ++t)
                  if (
                    ((e = j.previousItem(s, t)),
                    !s[t]._view.skip && e._view.skip)
                  ) {
                    (s = s.slice(t).concat(s.slice(0, t))), (d = o);
                    break;
                  }
                d && s.push(s[0]);
              }
              for (
                r.save(),
                  r.lineCap = a.borderCapStyle || u.borderCapStyle,
                  r.setLineDash && r.setLineDash(a.borderDash || u.borderDash),
                  r.lineDashOffset = rt(a.borderDashOffset, u.borderDashOffset),
                  r.lineJoin = a.borderJoinStyle || u.borderJoinStyle,
                  r.lineWidth = rt(a.borderWidth, u.borderWidth),
                  r.strokeStyle = a.borderColor || l.defaultColor,
                  r.beginPath(),
                  (n = s[0]._view).skip || (r.moveTo(n.x, n.y), (h = 0)),
                  t = 1;
                t < s.length;
                ++t
              )
                (n = s[t]._view),
                  (e = -1 === h ? j.previousItem(s, t) : s[h]),
                  n.skip ||
                    ((h !== t - 1 && !o) || -1 === h
                      ? r.moveTo(n.x, n.y)
                      : j.canvas.lineTo(r, e._view, n),
                    (h = t));
              d && r.closePath(), r.stroke(), r.restore();
            }
          }
        }),
        lt = j.valueOrDefault,
        ut = R.global.defaultColor;
      function ht(t) {
        var e = this._view;
        return !!e && Math.abs(t - e.x) < e.radius + e.hitRadius;
      }
      R._set("global", {
        elements: {
          point: {
            radius: 3,
            pointStyle: "circle",
            backgroundColor: ut,
            borderColor: ut,
            borderWidth: 1,
            hitRadius: 1,
            hoverRadius: 4,
            hoverBorderWidth: 1
          }
        }
      });
      var dt = G.extend({
          _type: "point",
          inRange: function(t, e) {
            var n = this._view;
            return (
              !!n &&
              Math.pow(t - n.x, 2) + Math.pow(e - n.y, 2) <
                Math.pow(n.hitRadius + n.radius, 2)
            );
          },
          inLabelRange: ht,
          inXRange: ht,
          inYRange: function(t) {
            var e = this._view;
            return !!e && Math.abs(t - e.y) < e.radius + e.hitRadius;
          },
          getCenterPoint: function() {
            var t = this._view;
            return { x: t.x, y: t.y };
          },
          getArea: function() {
            return Math.PI * Math.pow(this._view.radius, 2);
          },
          tooltipPosition: function() {
            var t = this._view;
            return { x: t.x, y: t.y, padding: t.radius + t.borderWidth };
          },
          draw: function(t) {
            var e = this._view,
              n = this._chart.ctx,
              i = e.pointStyle,
              a = e.rotation,
              r = e.radius,
              o = e.x,
              s = e.y,
              l = R.global,
              u = l.defaultColor;
            e.skip ||
              ((void 0 === t || j.canvas._isPointInArea(e, t)) &&
                ((n.strokeStyle = e.borderColor || u),
                (n.lineWidth = lt(e.borderWidth, l.elements.point.borderWidth)),
                (n.fillStyle = e.backgroundColor || u),
                j.canvas.drawPoint(n, i, r, o, s, a)));
          }
        }),
        ct = R.global.defaultColor;
      function ft(t) {
        return t && void 0 !== t.width;
      }
      function gt(t) {
        var e, n, i, a, r;
        return (
          ft(t)
            ? ((r = t.width / 2),
              (e = t.x - r),
              (n = t.x + r),
              (i = Math.min(t.y, t.base)),
              (a = Math.max(t.y, t.base)))
            : ((r = t.height / 2),
              (e = Math.min(t.x, t.base)),
              (n = Math.max(t.x, t.base)),
              (i = t.y - r),
              (a = t.y + r)),
          { left: e, top: i, right: n, bottom: a }
        );
      }
      function pt(t, e, n) {
        return t === e ? n : t === n ? e : t;
      }
      function mt(t, e, n) {
        var i = null === e,
          a = null === n,
          r = !(!t || (i && a)) && gt(t);
        return (
          r &&
          (i || (e >= r.left && e <= r.right)) &&
          (a || (n >= r.top && n <= r.bottom))
        );
      }
      R._set("global", {
        elements: {
          rectangle: {
            backgroundColor: ct,
            borderColor: ct,
            borderSkipped: "bottom",
            borderWidth: 0
          }
        }
      });
      var vt = G.extend({
          _type: "rectangle",
          draw: function() {
            var t = this._chart.ctx,
              e = this._view,
              n = (function(t) {
                var e = gt(t),
                  n = e.right - e.left,
                  i = e.bottom - e.top,
                  a = (function(t, e, n) {
                    var i,
                      a,
                      r,
                      o,
                      s = t.borderWidth,
                      l = (function(t) {
                        var e = t.borderSkipped,
                          n = {};
                        return e
                          ? (t.horizontal
                              ? t.base > t.x && (e = pt(e, "left", "right"))
                              : t.base < t.y && (e = pt(e, "bottom", "top")),
                            (n[e] = !0),
                            n)
                          : n;
                      })(t);
                    return (
                      j.isObject(s)
                        ? ((i = +s.top || 0),
                          (a = +s.right || 0),
                          (r = +s.bottom || 0),
                          (o = +s.left || 0))
                        : (i = a = r = o = +s || 0),
                      {
                        t: l.top || i < 0 ? 0 : i > n ? n : i,
                        r: l.right || a < 0 ? 0 : a > e ? e : a,
                        b: l.bottom || r < 0 ? 0 : r > n ? n : r,
                        l: l.left || o < 0 ? 0 : o > e ? e : o
                      }
                    );
                  })(t, n / 2, i / 2);
                return {
                  outer: { x: e.left, y: e.top, w: n, h: i },
                  inner: {
                    x: e.left + a.l,
                    y: e.top + a.t,
                    w: n - a.l - a.r,
                    h: i - a.t - a.b
                  }
                };
              })(e),
              i = n.outer,
              a = n.inner;
            (t.fillStyle = e.backgroundColor),
              t.fillRect(i.x, i.y, i.w, i.h),
              (i.w === a.w && i.h === a.h) ||
                (t.save(),
                t.beginPath(),
                t.rect(i.x, i.y, i.w, i.h),
                t.clip(),
                (t.fillStyle = e.borderColor),
                t.rect(a.x, a.y, a.w, a.h),
                t.fill("evenodd"),
                t.restore());
          },
          height: function() {
            var t = this._view;
            return t.base - t.y;
          },
          inRange: function(t, e) {
            return mt(this._view, t, e);
          },
          inLabelRange: function(t, e) {
            var n = this._view;
            return ft(n) ? mt(n, t, null) : mt(n, null, e);
          },
          inXRange: function(t) {
            return mt(this._view, t, null);
          },
          inYRange: function(t) {
            return mt(this._view, null, t);
          },
          getCenterPoint: function() {
            var t,
              e,
              n = this._view;
            return (
              ft(n)
                ? ((t = n.x), (e = (n.y + n.base) / 2))
                : ((t = (n.x + n.base) / 2), (e = n.y)),
              { x: t, y: e }
            );
          },
          getArea: function() {
            var t = this._view;
            return ft(t)
              ? t.width * Math.abs(t.y - t.base)
              : t.height * Math.abs(t.x - t.base);
          },
          tooltipPosition: function() {
            var t = this._view;
            return { x: t.x, y: t.y };
          }
        }),
        yt = {},
        bt = at,
        _t = st,
        xt = dt,
        wt = vt;
      (yt.Arc = bt), (yt.Line = _t), (yt.Point = xt), (yt.Rectangle = wt);
      var kt = j._deprecated,
        Mt = j.valueOrDefault;
      R._set("bar", {
        hover: { mode: "label" },
        scales: {
          xAxes: [
            { type: "category", offset: !0, gridLines: { offsetGridLines: !0 } }
          ],
          yAxes: [{ type: "linear" }]
        }
      }),
        R._set("global", {
          datasets: { bar: { categoryPercentage: 0.8, barPercentage: 0.9 } }
        });
      var St = et.extend({
          dataElementType: yt.Rectangle,
          _dataElementOptions: [
            "backgroundColor",
            "borderColor",
            "borderSkipped",
            "borderWidth",
            "barPercentage",
            "barThickness",
            "categoryPercentage",
            "maxBarThickness",
            "minBarLength"
          ],
          initialize: function() {
            var t,
              e,
              n = this;
            et.prototype.initialize.apply(n, arguments),
              ((t = n.getMeta()).stack = n.getDataset().stack),
              (t.bar = !0),
              (e = n._getIndexScale().options),
              kt(
                "bar chart",
                e.barPercentage,
                "scales.[x/y]Axes.barPercentage",
                "dataset.barPercentage"
              ),
              kt(
                "bar chart",
                e.barThickness,
                "scales.[x/y]Axes.barThickness",
                "dataset.barThickness"
              ),
              kt(
                "bar chart",
                e.categoryPercentage,
                "scales.[x/y]Axes.categoryPercentage",
                "dataset.categoryPercentage"
              ),
              kt(
                "bar chart",
                n._getValueScale().options.minBarLength,
                "scales.[x/y]Axes.minBarLength",
                "dataset.minBarLength"
              ),
              kt(
                "bar chart",
                e.maxBarThickness,
                "scales.[x/y]Axes.maxBarThickness",
                "dataset.maxBarThickness"
              );
          },
          update: function(t) {
            var e,
              n,
              i = this.getMeta().data;
            for (this._ruler = this.getRuler(), e = 0, n = i.length; e < n; ++e)
              this.updateElement(i[e], e, t);
          },
          updateElement: function(t, e, n) {
            var i = this,
              a = i.getMeta(),
              r = i.getDataset(),
              o = i._resolveDataElementOptions(t, e);
            (t._xScale = i.getScaleForId(a.xAxisID)),
              (t._yScale = i.getScaleForId(a.yAxisID)),
              (t._datasetIndex = i.index),
              (t._index = e),
              (t._model = {
                backgroundColor: o.backgroundColor,
                borderColor: o.borderColor,
                borderSkipped: o.borderSkipped,
                borderWidth: o.borderWidth,
                datasetLabel: r.label,
                label: i.chart.data.labels[e]
              }),
              j.isArray(r.data[e]) && (t._model.borderSkipped = null),
              i._updateElementGeometry(t, e, n, o),
              t.pivot();
          },
          _updateElementGeometry: function(t, e, n, i) {
            var a = this,
              r = t._model,
              o = a._getValueScale(),
              s = o.getBasePixel(),
              l = o.isHorizontal(),
              u = a._ruler || a.getRuler(),
              h = a.calculateBarValuePixels(a.index, e, i),
              d = a.calculateBarIndexPixels(a.index, e, u, i);
            (r.horizontal = l),
              (r.base = n ? s : h.base),
              (r.x = l ? (n ? s : h.head) : d.center),
              (r.y = l ? d.center : n ? s : h.head),
              (r.height = l ? d.size : void 0),
              (r.width = l ? void 0 : d.size);
          },
          _getStacks: function(t) {
            var e,
              n,
              i = this._getIndexScale(),
              a = i._getMatchingVisibleMetas(this._type),
              r = i.options.stacked,
              o = a.length,
              s = [];
            for (
              e = 0;
              e < o &&
              ((n = a[e]),
              (!1 === r ||
                -1 === s.indexOf(n.stack) ||
                (void 0 === r && void 0 === n.stack)) &&
                s.push(n.stack),
              n.index !== t);
              ++e
            );
            return s;
          },
          getStackCount: function() {
            return this._getStacks().length;
          },
          getStackIndex: function(t, e) {
            var n = this._getStacks(t),
              i = void 0 !== e ? n.indexOf(e) : -1;
            return -1 === i ? n.length - 1 : i;
          },
          getRuler: function() {
            var t,
              e,
              n = this._getIndexScale(),
              i = [];
            for (t = 0, e = this.getMeta().data.length; t < e; ++t)
              i.push(n.getPixelForValue(null, t, this.index));
            return {
              pixels: i,
              start: n._startPixel,
              end: n._endPixel,
              stackCount: this.getStackCount(),
              scale: n
            };
          },
          calculateBarValuePixels: function(t, e, n) {
            var i,
              a,
              r,
              o,
              s,
              l,
              u,
              h = this.chart,
              d = this._getValueScale(),
              c = d.isHorizontal(),
              f = h.data.datasets,
              g = d._getMatchingVisibleMetas(this._type),
              p = d._parseValue(f[t].data[e]),
              m = n.minBarLength,
              v = d.options.stacked,
              y = this.getMeta().stack,
              b =
                void 0 === p.start
                  ? 0
                  : p.max >= 0 && p.min >= 0
                  ? p.min
                  : p.max,
              _ =
                void 0 === p.start
                  ? p.end
                  : p.max >= 0 && p.min >= 0
                  ? p.max - p.min
                  : p.min - p.max,
              x = g.length;
            if (v || (void 0 === v && void 0 !== y))
              for (i = 0; i < x && (a = g[i]).index !== t; ++i)
                a.stack === y &&
                  ((r =
                    void 0 === (u = d._parseValue(f[a.index].data[e])).start
                      ? u.end
                      : u.min >= 0 && u.max >= 0
                      ? u.max
                      : u.min),
                  ((p.min < 0 && r < 0) || (p.max >= 0 && r > 0)) && (b += r));
            return (
              (o = d.getPixelForValue(b)),
              (l = (s = d.getPixelForValue(b + _)) - o),
              void 0 !== m &&
                Math.abs(l) < m &&
                ((l = m), (s = (_ >= 0 && !c) || (_ < 0 && c) ? o - m : o + m)),
              { size: l, base: o, head: s, center: s + l / 2 }
            );
          },
          calculateBarIndexPixels: function(t, e, n, i) {
            var a =
                "flex" === i.barThickness
                  ? (function(t, e, n) {
                      var i,
                        a = e.pixels,
                        r = a[t],
                        o = t > 0 ? a[t - 1] : null,
                        s = t < a.length - 1 ? a[t + 1] : null,
                        l = n.categoryPercentage;
                      return (
                        null === o &&
                          (o = r - (null === s ? e.end - e.start : s - r)),
                        null === s && (s = r + r - o),
                        (i = r - ((r - Math.min(o, s)) / 2) * l),
                        {
                          chunk: ((Math.abs(s - o) / 2) * l) / e.stackCount,
                          ratio: n.barPercentage,
                          start: i
                        }
                      );
                    })(e, n, i)
                  : (function(t, e, n) {
                      var i,
                        a,
                        r = n.barThickness,
                        o = e.stackCount,
                        s = e.pixels[t],
                        l = j.isNullOrUndef(r)
                          ? (function(t, e) {
                              var n,
                                i,
                                a,
                                r,
                                o = t._length;
                              for (a = 1, r = e.length; a < r; ++a)
                                o = Math.min(o, Math.abs(e[a] - e[a - 1]));
                              for (a = 0, r = t.getTicks().length; a < r; ++a)
                                (i = t.getPixelForTick(a)),
                                  (o =
                                    a > 0 ? Math.min(o, Math.abs(i - n)) : o),
                                  (n = i);
                              return o;
                            })(e.scale, e.pixels)
                          : -1;
                      return (
                        j.isNullOrUndef(r)
                          ? ((i = l * n.categoryPercentage),
                            (a = n.barPercentage))
                          : ((i = r * o), (a = 1)),
                        { chunk: i / o, ratio: a, start: s - i / 2 }
                      );
                    })(e, n, i),
              r = this.getStackIndex(t, this.getMeta().stack),
              o = a.start + a.chunk * r + a.chunk / 2,
              s = Math.min(Mt(i.maxBarThickness, 1 / 0), a.chunk * a.ratio);
            return { base: o - s / 2, head: o + s / 2, center: o, size: s };
          },
          draw: function() {
            var t = this.chart,
              e = this._getValueScale(),
              n = this.getMeta().data,
              i = this.getDataset(),
              a = n.length,
              r = 0;
            for (j.canvas.clipArea(t.ctx, t.chartArea); r < a; ++r) {
              var o = e._parseValue(i.data[r]);
              isNaN(o.min) || isNaN(o.max) || n[r].draw();
            }
            j.canvas.unclipArea(t.ctx);
          },
          _resolveDataElementOptions: function() {
            var t = j.extend(
                {},
                et.prototype._resolveDataElementOptions.apply(this, arguments)
              ),
              e = this._getIndexScale().options,
              n = this._getValueScale().options;
            return (
              (t.barPercentage = Mt(e.barPercentage, t.barPercentage)),
              (t.barThickness = Mt(e.barThickness, t.barThickness)),
              (t.categoryPercentage = Mt(
                e.categoryPercentage,
                t.categoryPercentage
              )),
              (t.maxBarThickness = Mt(e.maxBarThickness, t.maxBarThickness)),
              (t.minBarLength = Mt(n.minBarLength, t.minBarLength)),
              t
            );
          }
        }),
        Dt = j.valueOrDefault,
        Ct = j.options.resolve;
      R._set("bubble", {
        hover: { mode: "single" },
        scales: {
          xAxes: [{ type: "linear", position: "bottom", id: "x-axis-0" }],
          yAxes: [{ type: "linear", position: "left", id: "y-axis-0" }]
        },
        tooltips: {
          callbacks: {
            title: function() {
              return "";
            },
            label: function(t, e) {
              var n = e.datasets[t.datasetIndex].label || "",
                i = e.datasets[t.datasetIndex].data[t.index];
              return n + ": (" + t.xLabel + ", " + t.yLabel + ", " + i.r + ")";
            }
          }
        }
      });
      var At = et.extend({
          dataElementType: yt.Point,
          _dataElementOptions: [
            "backgroundColor",
            "borderColor",
            "borderWidth",
            "hoverBackgroundColor",
            "hoverBorderColor",
            "hoverBorderWidth",
            "hoverRadius",
            "hitRadius",
            "pointStyle",
            "rotation"
          ],
          update: function(t) {
            var e = this,
              n = e.getMeta().data;
            j.each(n, function(n, i) {
              e.updateElement(n, i, t);
            });
          },
          updateElement: function(t, e, n) {
            var i = this,
              a = i.getMeta(),
              r = t.custom || {},
              o = i.getScaleForId(a.xAxisID),
              s = i.getScaleForId(a.yAxisID),
              l = i._resolveDataElementOptions(t, e),
              u = i.getDataset().data[e],
              h = i.index,
              d = n
                ? o.getPixelForDecimal(0.5)
                : o.getPixelForValue("object" == typeof u ? u : NaN, e, h),
              c = n ? s.getBasePixel() : s.getPixelForValue(u, e, h);
            (t._xScale = o),
              (t._yScale = s),
              (t._options = l),
              (t._datasetIndex = h),
              (t._index = e),
              (t._model = {
                backgroundColor: l.backgroundColor,
                borderColor: l.borderColor,
                borderWidth: l.borderWidth,
                hitRadius: l.hitRadius,
                pointStyle: l.pointStyle,
                rotation: l.rotation,
                radius: n ? 0 : l.radius,
                skip: r.skip || isNaN(d) || isNaN(c),
                x: d,
                y: c
              }),
              t.pivot();
          },
          setHoverStyle: function(t) {
            var e = t._model,
              n = t._options,
              i = j.getHoverColor;
            (t.$previousStyle = {
              backgroundColor: e.backgroundColor,
              borderColor: e.borderColor,
              borderWidth: e.borderWidth,
              radius: e.radius
            }),
              (e.backgroundColor = Dt(
                n.hoverBackgroundColor,
                i(n.backgroundColor)
              )),
              (e.borderColor = Dt(n.hoverBorderColor, i(n.borderColor))),
              (e.borderWidth = Dt(n.hoverBorderWidth, n.borderWidth)),
              (e.radius = n.radius + n.hoverRadius);
          },
          _resolveDataElementOptions: function(t, e) {
            var n = this,
              i = n.chart,
              a = n.getDataset(),
              r = t.custom || {},
              o = a.data[e] || {},
              s = et.prototype._resolveDataElementOptions.apply(n, arguments),
              l = { chart: i, dataIndex: e, dataset: a, datasetIndex: n.index };
            return (
              n._cachedDataOpts === s && (s = j.extend({}, s)),
              (s.radius = Ct(
                [
                  r.radius,
                  o.r,
                  n._config.radius,
                  i.options.elements.point.radius
                ],
                l,
                e
              )),
              s
            );
          }
        }),
        Tt = j.valueOrDefault,
        Pt = Math.PI,
        Ot = 2 * Pt,
        It = Pt / 2;
      R._set("doughnut", {
        animation: { animateRotate: !0, animateScale: !1 },
        hover: { mode: "single" },
        legendCallback: function(t) {
          var e,
            n,
            i,
            a = document.createElement("ul"),
            r = t.data,
            o = r.datasets,
            s = r.labels;
          if ((a.setAttribute("class", t.id + "-legend"), o.length))
            for (e = 0, n = o[0].data.length; e < n; ++e)
              ((i = a.appendChild(document.createElement("li"))).appendChild(
                document.createElement("span")
              ).style.backgroundColor = o[0].backgroundColor[e]),
                s[e] && i.appendChild(document.createTextNode(s[e]));
          return a.outerHTML;
        },
        legend: {
          labels: {
            generateLabels: function(t) {
              var e = t.data;
              return e.labels.length && e.datasets.length
                ? e.labels.map(function(n, i) {
                    var a = t.getDatasetMeta(0),
                      r = a.controller.getStyle(i);
                    return {
                      text: n,
                      fillStyle: r.backgroundColor,
                      strokeStyle: r.borderColor,
                      lineWidth: r.borderWidth,
                      hidden: isNaN(e.datasets[0].data[i]) || a.data[i].hidden,
                      index: i
                    };
                  })
                : [];
            }
          },
          onClick: function(t, e) {
            var n,
              i,
              a,
              r = e.index,
              o = this.chart;
            for (n = 0, i = (o.data.datasets || []).length; n < i; ++n)
              (a = o.getDatasetMeta(n)).data[r] &&
                (a.data[r].hidden = !a.data[r].hidden);
            o.update();
          }
        },
        cutoutPercentage: 50,
        rotation: -It,
        circumference: Ot,
        tooltips: {
          callbacks: {
            title: function() {
              return "";
            },
            label: function(t, e) {
              var n = e.labels[t.index],
                i = ": " + e.datasets[t.datasetIndex].data[t.index];
              return j.isArray(n) ? ((n = n.slice())[0] += i) : (n += i), n;
            }
          }
        }
      });
      var Ft = et.extend({
        dataElementType: yt.Arc,
        linkScales: j.noop,
        _dataElementOptions: [
          "backgroundColor",
          "borderColor",
          "borderWidth",
          "borderAlign",
          "hoverBackgroundColor",
          "hoverBorderColor",
          "hoverBorderWidth"
        ],
        getRingIndex: function(t) {
          for (var e = 0, n = 0; n < t; ++n)
            this.chart.isDatasetVisible(n) && ++e;
          return e;
        },
        update: function(t) {
          var e,
            n,
            i,
            a,
            r = this,
            o = r.chart,
            s = o.chartArea,
            l = o.options,
            u = 1,
            h = 1,
            d = 0,
            c = 0,
            f = r.getMeta(),
            g = f.data,
            p = l.cutoutPercentage / 100 || 0,
            m = l.circumference,
            v = r._getRingWeight(r.index);
          if (m < Ot) {
            var y = l.rotation % Ot,
              b = (y += y >= Pt ? -Ot : y < -Pt ? Ot : 0) + m,
              _ = Math.cos(y),
              x = Math.sin(y),
              w = Math.cos(b),
              k = Math.sin(b),
              M = (y <= 0 && b >= 0) || b >= Ot,
              S = (y <= It && b >= It) || b >= Ot + It,
              D = (y <= -It && b >= -It) || b >= Pt + It,
              C = y === -Pt || b >= Pt ? -1 : Math.min(_, _ * p, w, w * p),
              A = D ? -1 : Math.min(x, x * p, k, k * p),
              T = M ? 1 : Math.max(_, _ * p, w, w * p),
              P = S ? 1 : Math.max(x, x * p, k, k * p);
            (u = (T - C) / 2),
              (h = (P - A) / 2),
              (d = -(T + C) / 2),
              (c = -(P + A) / 2);
          }
          for (i = 0, a = g.length; i < a; ++i)
            g[i]._options = r._resolveDataElementOptions(g[i], i);
          for (
            o.borderWidth = r.getMaxBorderWidth(),
              e = (s.right - s.left - o.borderWidth) / u,
              n = (s.bottom - s.top - o.borderWidth) / h,
              o.outerRadius = Math.max(Math.min(e, n) / 2, 0),
              o.innerRadius = Math.max(o.outerRadius * p, 0),
              o.radiusLength =
                (o.outerRadius - o.innerRadius) /
                (r._getVisibleDatasetWeightTotal() || 1),
              o.offsetX = d * o.outerRadius,
              o.offsetY = c * o.outerRadius,
              f.total = r.calculateTotal(),
              r.outerRadius =
                o.outerRadius -
                o.radiusLength * r._getRingWeightOffset(r.index),
              r.innerRadius = Math.max(r.outerRadius - o.radiusLength * v, 0),
              i = 0,
              a = g.length;
            i < a;
            ++i
          )
            r.updateElement(g[i], i, t);
        },
        updateElement: function(t, e, n) {
          var i = this,
            a = i.chart,
            r = a.chartArea,
            o = a.options,
            s = o.animation,
            l = (r.left + r.right) / 2,
            u = (r.top + r.bottom) / 2,
            h = o.rotation,
            d = o.rotation,
            c = i.getDataset(),
            f =
              n && s.animateRotate
                ? 0
                : t.hidden
                ? 0
                : i.calculateCircumference(c.data[e]) * (o.circumference / Ot),
            g = n && s.animateScale ? 0 : i.innerRadius,
            p = n && s.animateScale ? 0 : i.outerRadius,
            m = t._options || {};
          j.extend(t, {
            _datasetIndex: i.index,
            _index: e,
            _model: {
              backgroundColor: m.backgroundColor,
              borderColor: m.borderColor,
              borderWidth: m.borderWidth,
              borderAlign: m.borderAlign,
              x: l + a.offsetX,
              y: u + a.offsetY,
              startAngle: h,
              endAngle: d,
              circumference: f,
              outerRadius: p,
              innerRadius: g,
              label: j.valueAtIndexOrDefault(c.label, e, a.data.labels[e])
            }
          });
          var v = t._model;
          (n && s.animateRotate) ||
            ((v.startAngle =
              0 === e ? o.rotation : i.getMeta().data[e - 1]._model.endAngle),
            (v.endAngle = v.startAngle + v.circumference)),
            t.pivot();
        },
        calculateTotal: function() {
          var t,
            e = this.getDataset(),
            n = this.getMeta(),
            i = 0;
          return (
            j.each(n.data, function(n, a) {
              (t = e.data[a]), isNaN(t) || n.hidden || (i += Math.abs(t));
            }),
            i
          );
        },
        calculateCircumference: function(t) {
          var e = this.getMeta().total;
          return e > 0 && !isNaN(t) ? Ot * (Math.abs(t) / e) : 0;
        },
        getMaxBorderWidth: function(t) {
          var e,
            n,
            i,
            a,
            r,
            o,
            s,
            l,
            u = 0,
            h = this.chart;
          if (!t)
            for (e = 0, n = h.data.datasets.length; e < n; ++e)
              if (h.isDatasetVisible(e)) {
                (t = (i = h.getDatasetMeta(e)).data),
                  e !== this.index && (r = i.controller);
                break;
              }
          if (!t) return 0;
          for (e = 0, n = t.length; e < n; ++e)
            (a = t[e]),
              r
                ? (r._configure(), (o = r._resolveDataElementOptions(a, e)))
                : (o = a._options),
              "inner" !== o.borderAlign &&
                ((s = o.borderWidth),
                (u = (l = o.hoverBorderWidth) > (u = s > u ? s : u) ? l : u));
          return u;
        },
        setHoverStyle: function(t) {
          var e = t._model,
            n = t._options,
            i = j.getHoverColor;
          (t.$previousStyle = {
            backgroundColor: e.backgroundColor,
            borderColor: e.borderColor,
            borderWidth: e.borderWidth
          }),
            (e.backgroundColor = Tt(
              n.hoverBackgroundColor,
              i(n.backgroundColor)
            )),
            (e.borderColor = Tt(n.hoverBorderColor, i(n.borderColor))),
            (e.borderWidth = Tt(n.hoverBorderWidth, n.borderWidth));
        },
        _getRingWeightOffset: function(t) {
          for (var e = 0, n = 0; n < t; ++n)
            this.chart.isDatasetVisible(n) && (e += this._getRingWeight(n));
          return e;
        },
        _getRingWeight: function(t) {
          return Math.max(Tt(this.chart.data.datasets[t].weight, 1), 0);
        },
        _getVisibleDatasetWeightTotal: function() {
          return this._getRingWeightOffset(this.chart.data.datasets.length);
        }
      });
      R._set("horizontalBar", {
        hover: { mode: "index", axis: "y" },
        scales: {
          xAxes: [{ type: "linear", position: "bottom" }],
          yAxes: [
            {
              type: "category",
              position: "left",
              offset: !0,
              gridLines: { offsetGridLines: !0 }
            }
          ]
        },
        elements: { rectangle: { borderSkipped: "left" } },
        tooltips: { mode: "index", axis: "y" }
      }),
        R._set("global", {
          datasets: {
            horizontalBar: { categoryPercentage: 0.8, barPercentage: 0.9 }
          }
        });
      var Vt = St.extend({
          _getValueScaleId: function() {
            return this.getMeta().xAxisID;
          },
          _getIndexScaleId: function() {
            return this.getMeta().yAxisID;
          }
        }),
        Lt = j.valueOrDefault,
        Rt = j.options.resolve,
        Nt = j.canvas._isPointInArea;
      function Wt(t, e) {
        var n = (t && t.options.ticks) || {},
          i = n.reverse,
          a = void 0 === n.min ? e : 0,
          r = void 0 === n.max ? e : 0;
        return { start: i ? r : a, end: i ? a : r };
      }
      R._set("line", {
        showLines: !0,
        spanGaps: !1,
        hover: { mode: "label" },
        scales: {
          xAxes: [{ type: "category", id: "x-axis-0" }],
          yAxes: [{ type: "linear", id: "y-axis-0" }]
        }
      });
      var Yt = et.extend({
          datasetElementType: yt.Line,
          dataElementType: yt.Point,
          _datasetElementOptions: [
            "backgroundColor",
            "borderCapStyle",
            "borderColor",
            "borderDash",
            "borderDashOffset",
            "borderJoinStyle",
            "borderWidth",
            "cubicInterpolationMode",
            "fill"
          ],
          _dataElementOptions: {
            backgroundColor: "pointBackgroundColor",
            borderColor: "pointBorderColor",
            borderWidth: "pointBorderWidth",
            hitRadius: "pointHitRadius",
            hoverBackgroundColor: "pointHoverBackgroundColor",
            hoverBorderColor: "pointHoverBorderColor",
            hoverBorderWidth: "pointHoverBorderWidth",
            hoverRadius: "pointHoverRadius",
            pointStyle: "pointStyle",
            radius: "pointRadius",
            rotation: "pointRotation"
          },
          update: function(t) {
            var e,
              n,
              i = this,
              a = i.getMeta(),
              r = a.dataset,
              o = a.data || [],
              s = i.chart.options,
              l = i._config,
              u = (i._showLine = Lt(l.showLine, s.showLines));
            for (
              i._xScale = i.getScaleForId(a.xAxisID),
                i._yScale = i.getScaleForId(a.yAxisID),
                u &&
                  (void 0 !== l.tension &&
                    void 0 === l.lineTension &&
                    (l.lineTension = l.tension),
                  (r._scale = i._yScale),
                  (r._datasetIndex = i.index),
                  (r._children = o),
                  (r._model = i._resolveDatasetElementOptions(r)),
                  r.pivot()),
                e = 0,
                n = o.length;
              e < n;
              ++e
            )
              i.updateElement(o[e], e, t);
            for (
              u && 0 !== r._model.tension && i.updateBezierControlPoints(),
                e = 0,
                n = o.length;
              e < n;
              ++e
            )
              o[e].pivot();
          },
          updateElement: function(t, e, n) {
            var i,
              a,
              r = this,
              o = r.getMeta(),
              s = t.custom || {},
              l = r.getDataset(),
              u = r.index,
              h = l.data[e],
              d = r._xScale,
              c = r._yScale,
              f = o.dataset._model,
              g = r._resolveDataElementOptions(t, e);
            (i = d.getPixelForValue("object" == typeof h ? h : NaN, e, u)),
              (a = n ? c.getBasePixel() : r.calculatePointY(h, e, u)),
              (t._xScale = d),
              (t._yScale = c),
              (t._options = g),
              (t._datasetIndex = u),
              (t._index = e),
              (t._model = {
                x: i,
                y: a,
                skip: s.skip || isNaN(i) || isNaN(a),
                radius: g.radius,
                pointStyle: g.pointStyle,
                rotation: g.rotation,
                backgroundColor: g.backgroundColor,
                borderColor: g.borderColor,
                borderWidth: g.borderWidth,
                tension: Lt(s.tension, f ? f.tension : 0),
                steppedLine: !!f && f.steppedLine,
                hitRadius: g.hitRadius
              });
          },
          _resolveDatasetElementOptions: function(t) {
            var e,
              n,
              i,
              a,
              r,
              o,
              s,
              l,
              u,
              h,
              d = this,
              c = d._config,
              f = t.custom || {},
              g = d.chart.options,
              p = g.elements.line,
              m = et.prototype._resolveDatasetElementOptions.apply(
                d,
                arguments
              );
            return (
              (m.spanGaps = Lt(c.spanGaps, g.spanGaps)),
              (m.tension = Lt(c.lineTension, p.tension)),
              (m.steppedLine = Rt([f.steppedLine, c.steppedLine, p.stepped])),
              (m.clip =
                ((e = Lt(
                  c.clip,
                  ((o = d._xScale),
                  (s = d._yScale),
                  (u = Wt(o, (l = m.borderWidth / 2))),
                  {
                    top: (h = Wt(s, l)).end,
                    right: u.end,
                    bottom: h.start,
                    left: u.start
                  })
                )),
                j.isObject(e)
                  ? ((n = e.top), (i = e.right), (a = e.bottom), (r = e.left))
                  : (n = i = a = r = e),
                { top: n, right: i, bottom: a, left: r })),
              m
            );
          },
          calculatePointY: function(t, e, n) {
            var i,
              a,
              r,
              o,
              s,
              l,
              u,
              h = this.chart,
              d = this._yScale,
              c = 0,
              f = 0;
            if (d.options.stacked) {
              for (
                s = +d.getRightValue(t),
                  u = (l = h._getSortedVisibleDatasetMetas()).length,
                  i = 0;
                i < u && (r = l[i]).index !== n;
                ++i
              )
                (a = h.data.datasets[r.index]),
                  "line" === r.type &&
                    r.yAxisID === d.id &&
                    ((o = +d.getRightValue(a.data[e])) < 0
                      ? (f += o || 0)
                      : (c += o || 0));
              return s < 0
                ? d.getPixelForValue(f + s)
                : d.getPixelForValue(c + s);
            }
            return d.getPixelForValue(t);
          },
          updateBezierControlPoints: function() {
            var t,
              e,
              n,
              i,
              a = this.chart,
              r = this.getMeta(),
              o = r.dataset._model,
              s = a.chartArea,
              l = r.data || [];
            function u(t, e, n) {
              return Math.max(Math.min(t, n), e);
            }
            if (
              (o.spanGaps &&
                (l = l.filter(function(t) {
                  return !t._model.skip;
                })),
              "monotone" === o.cubicInterpolationMode)
            )
              j.splineCurveMonotone(l);
            else
              for (t = 0, e = l.length; t < e; ++t)
                (n = l[t]._model),
                  (i = j.splineCurve(
                    j.previousItem(l, t)._model,
                    n,
                    j.nextItem(l, t)._model,
                    o.tension
                  )),
                  (n.controlPointPreviousX = i.previous.x),
                  (n.controlPointPreviousY = i.previous.y),
                  (n.controlPointNextX = i.next.x),
                  (n.controlPointNextY = i.next.y);
            if (a.options.elements.line.capBezierPoints)
              for (t = 0, e = l.length; t < e; ++t)
                (n = l[t]._model),
                  Nt(n, s) &&
                    (t > 0 &&
                      Nt(l[t - 1]._model, s) &&
                      ((n.controlPointPreviousX = u(
                        n.controlPointPreviousX,
                        s.left,
                        s.right
                      )),
                      (n.controlPointPreviousY = u(
                        n.controlPointPreviousY,
                        s.top,
                        s.bottom
                      ))),
                    t < l.length - 1 &&
                      Nt(l[t + 1]._model, s) &&
                      ((n.controlPointNextX = u(
                        n.controlPointNextX,
                        s.left,
                        s.right
                      )),
                      (n.controlPointNextY = u(
                        n.controlPointNextY,
                        s.top,
                        s.bottom
                      ))));
          },
          draw: function() {
            var t,
              e = this.chart,
              n = this.getMeta(),
              i = n.data || [],
              a = e.chartArea,
              r = e.canvas,
              o = 0,
              s = i.length;
            for (
              this._showLine &&
              ((t = n.dataset._model.clip),
              j.canvas.clipArea(e.ctx, {
                left: !1 === t.left ? 0 : a.left - t.left,
                right: !1 === t.right ? r.width : a.right + t.right,
                top: !1 === t.top ? 0 : a.top - t.top,
                bottom: !1 === t.bottom ? r.height : a.bottom + t.bottom
              }),
              n.dataset.draw(),
              j.canvas.unclipArea(e.ctx));
              o < s;
              ++o
            )
              i[o].draw(a);
          },
          setHoverStyle: function(t) {
            var e = t._model,
              n = t._options,
              i = j.getHoverColor;
            (t.$previousStyle = {
              backgroundColor: e.backgroundColor,
              borderColor: e.borderColor,
              borderWidth: e.borderWidth,
              radius: e.radius
            }),
              (e.backgroundColor = Lt(
                n.hoverBackgroundColor,
                i(n.backgroundColor)
              )),
              (e.borderColor = Lt(n.hoverBorderColor, i(n.borderColor))),
              (e.borderWidth = Lt(n.hoverBorderWidth, n.borderWidth)),
              (e.radius = Lt(n.hoverRadius, n.radius));
          }
        }),
        Et = j.options.resolve;
      R._set("polarArea", {
        scale: {
          type: "radialLinear",
          angleLines: { display: !1 },
          gridLines: { circular: !0 },
          pointLabels: { display: !1 },
          ticks: { beginAtZero: !0 }
        },
        animation: { animateRotate: !0, animateScale: !0 },
        startAngle: -0.5 * Math.PI,
        legendCallback: function(t) {
          var e,
            n,
            i,
            a = document.createElement("ul"),
            r = t.data,
            o = r.datasets,
            s = r.labels;
          if ((a.setAttribute("class", t.id + "-legend"), o.length))
            for (e = 0, n = o[0].data.length; e < n; ++e)
              ((i = a.appendChild(document.createElement("li"))).appendChild(
                document.createElement("span")
              ).style.backgroundColor = o[0].backgroundColor[e]),
                s[e] && i.appendChild(document.createTextNode(s[e]));
          return a.outerHTML;
        },
        legend: {
          labels: {
            generateLabels: function(t) {
              var e = t.data;
              return e.labels.length && e.datasets.length
                ? e.labels.map(function(n, i) {
                    var a = t.getDatasetMeta(0),
                      r = a.controller.getStyle(i);
                    return {
                      text: n,
                      fillStyle: r.backgroundColor,
                      strokeStyle: r.borderColor,
                      lineWidth: r.borderWidth,
                      hidden: isNaN(e.datasets[0].data[i]) || a.data[i].hidden,
                      index: i
                    };
                  })
                : [];
            }
          },
          onClick: function(t, e) {
            var n,
              i,
              a,
              r = e.index,
              o = this.chart;
            for (n = 0, i = (o.data.datasets || []).length; n < i; ++n)
              (a = o.getDatasetMeta(n)).data[r].hidden = !a.data[r].hidden;
            o.update();
          }
        },
        tooltips: {
          callbacks: {
            title: function() {
              return "";
            },
            label: function(t, e) {
              return e.labels[t.index] + ": " + t.yLabel;
            }
          }
        }
      });
      var jt = et.extend({
        dataElementType: yt.Arc,
        linkScales: j.noop,
        _dataElementOptions: [
          "backgroundColor",
          "borderColor",
          "borderWidth",
          "borderAlign",
          "hoverBackgroundColor",
          "hoverBorderColor",
          "hoverBorderWidth"
        ],
        _getIndexScaleId: function() {
          return this.chart.scale.id;
        },
        _getValueScaleId: function() {
          return this.chart.scale.id;
        },
        update: function(t) {
          var e,
            n,
            i,
            a = this,
            r = a.getDataset(),
            o = a.getMeta(),
            s = a.chart.options.startAngle || 0,
            l = (a._starts = []),
            u = (a._angles = []),
            h = o.data;
          for (
            a._updateRadius(),
              o.count = a.countVisibleElements(),
              e = 0,
              n = r.data.length;
            e < n;
            e++
          )
            (l[e] = s), (i = a._computeAngle(e)), (u[e] = i), (s += i);
          for (e = 0, n = h.length; e < n; ++e)
            (h[e]._options = a._resolveDataElementOptions(h[e], e)),
              a.updateElement(h[e], e, t);
        },
        _updateRadius: function() {
          var t = this,
            e = t.chart,
            n = e.chartArea,
            i = e.options,
            a = Math.min(n.right - n.left, n.bottom - n.top);
          (e.outerRadius = Math.max(a / 2, 0)),
            (e.innerRadius = Math.max(
              i.cutoutPercentage
                ? (e.outerRadius / 100) * i.cutoutPercentage
                : 1,
              0
            )),
            (e.radiusLength =
              (e.outerRadius - e.innerRadius) / e.getVisibleDatasetCount()),
            (t.outerRadius = e.outerRadius - e.radiusLength * t.index),
            (t.innerRadius = t.outerRadius - e.radiusLength);
        },
        updateElement: function(t, e, n) {
          var i = this,
            a = i.chart,
            r = i.getDataset(),
            o = a.options,
            s = o.animation,
            l = a.scale,
            u = a.data.labels,
            h = l.xCenter,
            d = l.yCenter,
            c = o.startAngle,
            f = t.hidden ? 0 : l.getDistanceFromCenterForValue(r.data[e]),
            g = i._starts[e],
            p = g + (t.hidden ? 0 : i._angles[e]),
            m = s.animateScale ? 0 : l.getDistanceFromCenterForValue(r.data[e]),
            v = t._options || {};
          j.extend(t, {
            _datasetIndex: i.index,
            _index: e,
            _scale: l,
            _model: {
              backgroundColor: v.backgroundColor,
              borderColor: v.borderColor,
              borderWidth: v.borderWidth,
              borderAlign: v.borderAlign,
              x: h,
              y: d,
              innerRadius: 0,
              outerRadius: n ? m : f,
              startAngle: n && s.animateRotate ? c : g,
              endAngle: n && s.animateRotate ? c : p,
              label: j.valueAtIndexOrDefault(u, e, u[e])
            }
          }),
            t.pivot();
        },
        countVisibleElements: function() {
          var t = this.getDataset(),
            e = this.getMeta(),
            n = 0;
          return (
            j.each(e.data, function(e, i) {
              isNaN(t.data[i]) || e.hidden || n++;
            }),
            n
          );
        },
        setHoverStyle: function(t) {
          var e = t._model,
            n = t._options,
            i = j.getHoverColor,
            a = j.valueOrDefault;
          (t.$previousStyle = {
            backgroundColor: e.backgroundColor,
            borderColor: e.borderColor,
            borderWidth: e.borderWidth
          }),
            (e.backgroundColor = a(
              n.hoverBackgroundColor,
              i(n.backgroundColor)
            )),
            (e.borderColor = a(n.hoverBorderColor, i(n.borderColor))),
            (e.borderWidth = a(n.hoverBorderWidth, n.borderWidth));
        },
        _computeAngle: function(t) {
          var e = this,
            n = this.getMeta().count,
            i = e.getDataset(),
            a = e.getMeta();
          if (isNaN(i.data[t]) || a.data[t].hidden) return 0;
          var r = {
            chart: e.chart,
            dataIndex: t,
            dataset: i,
            datasetIndex: e.index
          };
          return Et(
            [e.chart.options.elements.arc.angle, (2 * Math.PI) / n],
            r,
            t
          );
        }
      });
      R._set("pie", j.clone(R.doughnut)),
        R._set("pie", { cutoutPercentage: 0 });
      var zt = Ft,
        Bt = j.valueOrDefault;
      R._set("radar", {
        spanGaps: !1,
        scale: { type: "radialLinear" },
        elements: { line: { fill: "start", tension: 0 } }
      });
      var Ht = et.extend({
        datasetElementType: yt.Line,
        dataElementType: yt.Point,
        linkScales: j.noop,
        _datasetElementOptions: [
          "backgroundColor",
          "borderWidth",
          "borderColor",
          "borderCapStyle",
          "borderDash",
          "borderDashOffset",
          "borderJoinStyle",
          "fill"
        ],
        _dataElementOptions: {
          backgroundColor: "pointBackgroundColor",
          borderColor: "pointBorderColor",
          borderWidth: "pointBorderWidth",
          hitRadius: "pointHitRadius",
          hoverBackgroundColor: "pointHoverBackgroundColor",
          hoverBorderColor: "pointHoverBorderColor",
          hoverBorderWidth: "pointHoverBorderWidth",
          hoverRadius: "pointHoverRadius",
          pointStyle: "pointStyle",
          radius: "pointRadius",
          rotation: "pointRotation"
        },
        _getIndexScaleId: function() {
          return this.chart.scale.id;
        },
        _getValueScaleId: function() {
          return this.chart.scale.id;
        },
        update: function(t) {
          var e,
            n,
            i = this,
            a = i.getMeta(),
            r = a.dataset,
            o = a.data || [],
            s = i.chart.scale,
            l = i._config;
          for (
            void 0 !== l.tension &&
              void 0 === l.lineTension &&
              (l.lineTension = l.tension),
              r._scale = s,
              r._datasetIndex = i.index,
              r._children = o,
              r._loop = !0,
              r._model = i._resolveDatasetElementOptions(r),
              r.pivot(),
              e = 0,
              n = o.length;
            e < n;
            ++e
          )
            i.updateElement(o[e], e, t);
          for (i.updateBezierControlPoints(), e = 0, n = o.length; e < n; ++e)
            o[e].pivot();
        },
        updateElement: function(t, e, n) {
          var i = this,
            a = t.custom || {},
            r = i.getDataset(),
            o = i.chart.scale,
            s = o.getPointPositionForValue(e, r.data[e]),
            l = i._resolveDataElementOptions(t, e),
            u = i.getMeta().dataset._model,
            h = n ? o.xCenter : s.x,
            d = n ? o.yCenter : s.y;
          (t._scale = o),
            (t._options = l),
            (t._datasetIndex = i.index),
            (t._index = e),
            (t._model = {
              x: h,
              y: d,
              skip: a.skip || isNaN(h) || isNaN(d),
              radius: l.radius,
              pointStyle: l.pointStyle,
              rotation: l.rotation,
              backgroundColor: l.backgroundColor,
              borderColor: l.borderColor,
              borderWidth: l.borderWidth,
              tension: Bt(a.tension, u ? u.tension : 0),
              hitRadius: l.hitRadius
            });
        },
        _resolveDatasetElementOptions: function() {
          var t = this._config,
            e = this.chart.options,
            n = et.prototype._resolveDatasetElementOptions.apply(
              this,
              arguments
            );
          return (
            (n.spanGaps = Bt(t.spanGaps, e.spanGaps)),
            (n.tension = Bt(t.lineTension, e.elements.line.tension)),
            n
          );
        },
        updateBezierControlPoints: function() {
          var t,
            e,
            n,
            i,
            a = this.getMeta(),
            r = this.chart.chartArea,
            o = a.data || [];
          function s(t, e, n) {
            return Math.max(Math.min(t, n), e);
          }
          for (
            a.dataset._model.spanGaps &&
              (o = o.filter(function(t) {
                return !t._model.skip;
              })),
              t = 0,
              e = o.length;
            t < e;
            ++t
          )
            (n = o[t]._model),
              (i = j.splineCurve(
                j.previousItem(o, t, !0)._model,
                n,
                j.nextItem(o, t, !0)._model,
                n.tension
              )),
              (n.controlPointPreviousX = s(i.previous.x, r.left, r.right)),
              (n.controlPointPreviousY = s(i.previous.y, r.top, r.bottom)),
              (n.controlPointNextX = s(i.next.x, r.left, r.right)),
              (n.controlPointNextY = s(i.next.y, r.top, r.bottom));
        },
        setHoverStyle: function(t) {
          var e = t._model,
            n = t._options,
            i = j.getHoverColor;
          (t.$previousStyle = {
            backgroundColor: e.backgroundColor,
            borderColor: e.borderColor,
            borderWidth: e.borderWidth,
            radius: e.radius
          }),
            (e.backgroundColor = Bt(
              n.hoverBackgroundColor,
              i(n.backgroundColor)
            )),
            (e.borderColor = Bt(n.hoverBorderColor, i(n.borderColor))),
            (e.borderWidth = Bt(n.hoverBorderWidth, n.borderWidth)),
            (e.radius = Bt(n.hoverRadius, n.radius));
        }
      });
      R._set("scatter", {
        hover: { mode: "single" },
        scales: {
          xAxes: [{ id: "x-axis-1", type: "linear", position: "bottom" }],
          yAxes: [{ id: "y-axis-1", type: "linear", position: "left" }]
        },
        tooltips: {
          callbacks: {
            title: function() {
              return "";
            },
            label: function(t) {
              return "(" + t.xLabel + ", " + t.yLabel + ")";
            }
          }
        }
      }),
        R._set("global", { datasets: { scatter: { showLine: !1 } } });
      var Ut = {
        bar: St,
        bubble: At,
        doughnut: Ft,
        horizontalBar: Vt,
        line: Yt,
        polarArea: jt,
        pie: zt,
        radar: Ht,
        scatter: Yt
      };
      function qt(t, e) {
        return t.native ? { x: t.x, y: t.y } : j.getRelativePosition(t, e);
      }
      function Gt(t, e) {
        var n,
          i,
          a,
          r,
          o,
          s,
          l = t._getSortedVisibleDatasetMetas();
        for (i = 0, r = l.length; i < r; ++i)
          for (a = 0, o = (n = l[i].data).length; a < o; ++a)
            (s = n[a])._view.skip || e(s);
      }
      function Zt(t, e) {
        var n = [];
        return (
          Gt(t, function(t) {
            t.inRange(e.x, e.y) && n.push(t);
          }),
          n
        );
      }
      function $t(t, e, n, i) {
        var a = Number.POSITIVE_INFINITY,
          r = [];
        return (
          Gt(t, function(t) {
            if (!n || t.inRange(e.x, e.y)) {
              var o = t.getCenterPoint(),
                s = i(e, o);
              s < a ? ((r = [t]), (a = s)) : s === a && r.push(t);
            }
          }),
          r
        );
      }
      function Xt(t) {
        var e = -1 !== t.indexOf("x"),
          n = -1 !== t.indexOf("y");
        return function(t, i) {
          var a = e ? Math.abs(t.x - i.x) : 0,
            r = n ? Math.abs(t.y - i.y) : 0;
          return Math.sqrt(Math.pow(a, 2) + Math.pow(r, 2));
        };
      }
      function Kt(t, e, n) {
        var i = qt(e, t);
        n.axis = n.axis || "x";
        var a = Xt(n.axis),
          r = n.intersect ? Zt(t, i) : $t(t, i, !1, a),
          o = [];
        return r.length
          ? (t._getSortedVisibleDatasetMetas().forEach(function(t) {
              var e = t.data[r[0]._index];
              e && !e._view.skip && o.push(e);
            }),
            o)
          : [];
      }
      var Jt = {
          modes: {
            single: function(t, e) {
              var n = qt(e, t),
                i = [];
              return (
                Gt(t, function(t) {
                  if (t.inRange(n.x, n.y)) return i.push(t), i;
                }),
                i.slice(0, 1)
              );
            },
            label: Kt,
            index: Kt,
            dataset: function(t, e, n) {
              var i = qt(e, t);
              n.axis = n.axis || "xy";
              var a = Xt(n.axis),
                r = n.intersect ? Zt(t, i) : $t(t, i, !1, a);
              return (
                r.length > 0 && (r = t.getDatasetMeta(r[0]._datasetIndex).data),
                r
              );
            },
            "x-axis": function(t, e) {
              return Kt(t, e, { intersect: !1 });
            },
            point: function(t, e) {
              return Zt(t, qt(e, t));
            },
            nearest: function(t, e, n) {
              var i = qt(e, t);
              n.axis = n.axis || "xy";
              var a = Xt(n.axis);
              return $t(t, i, n.intersect, a);
            },
            x: function(t, e, n) {
              var i = qt(e, t),
                a = [],
                r = !1;
              return (
                Gt(t, function(t) {
                  t.inXRange(i.x) && a.push(t), t.inRange(i.x, i.y) && (r = !0);
                }),
                n.intersect && !r && (a = []),
                a
              );
            },
            y: function(t, e, n) {
              var i = qt(e, t),
                a = [],
                r = !1;
              return (
                Gt(t, function(t) {
                  t.inYRange(i.y) && a.push(t), t.inRange(i.x, i.y) && (r = !0);
                }),
                n.intersect && !r && (a = []),
                a
              );
            }
          }
        },
        Qt = j.extend;
      function te(t, e) {
        return j.where(t, function(t) {
          return t.pos === e;
        });
      }
      function ee(t, e) {
        return t.sort(function(t, n) {
          var i = e ? n : t,
            a = e ? t : n;
          return i.weight === a.weight
            ? i.index - a.index
            : i.weight - a.weight;
        });
      }
      function ne(t, e, n, i) {
        return Math.max(t[n], e[n]) + Math.max(t[i], e[i]);
      }
      function ie(t, e, n) {
        var i,
          a,
          r = n.box,
          o = t.maxPadding;
        if (
          (n.size && (t[n.pos] -= n.size),
          (n.size = n.horizontal ? r.height : r.width),
          (t[n.pos] += n.size),
          r.getPadding)
        ) {
          var s = r.getPadding();
          (o.top = Math.max(o.top, s.top)),
            (o.left = Math.max(o.left, s.left)),
            (o.bottom = Math.max(o.bottom, s.bottom)),
            (o.right = Math.max(o.right, s.right));
        }
        if (
          ((i = e.outerWidth - ne(o, t, "left", "right")),
          (a = e.outerHeight - ne(o, t, "top", "bottom")),
          i !== t.w || a !== t.h)
        )
          return (t.w = i), (t.h = a), n.horizontal ? i !== t.w : a !== t.h;
      }
      function ae(t, e) {
        var n,
          i = e.maxPadding;
        return (
          (n = { left: 0, top: 0, right: 0, bottom: 0 }),
          (t ? ["left", "right"] : ["top", "bottom"]).forEach(function(t) {
            n[t] = Math.max(e[t], i[t]);
          }),
          n
        );
      }
      function re(t, e, n) {
        var i,
          a,
          r,
          o,
          s,
          l,
          u = [];
        for (i = 0, a = t.length; i < a; ++i)
          (o = (r = t[i]).box).update(
            r.width || e.w,
            r.height || e.h,
            ae(r.horizontal, e)
          ),
            ie(e, n, r) && ((l = !0), u.length && (s = !0)),
            o.fullWidth || u.push(r);
        return (s && re(u, e, n)) || l;
      }
      function oe(t, e, n) {
        var i,
          a,
          r,
          o,
          s = n.padding,
          l = e.x,
          u = e.y;
        for (i = 0, a = t.length; i < a; ++i)
          (o = (r = t[i]).box),
            r.horizontal
              ? ((o.left = o.fullWidth ? s.left : e.left),
                (o.right = o.fullWidth ? n.outerWidth - s.right : e.left + e.w),
                (o.top = u),
                (o.bottom = u + o.height),
                (o.width = o.right - o.left),
                (u = o.bottom))
              : ((o.left = l),
                (o.right = l + o.width),
                (o.top = e.top),
                (o.bottom = e.top + e.h),
                (o.height = o.bottom - o.top),
                (l = o.right));
        (e.x = l), (e.y = u);
      }
      R._set("global", {
        layout: { padding: { top: 0, right: 0, bottom: 0, left: 0 } }
      });
      var se,
        le = {
          defaults: {},
          addBox: function(t, e) {
            t.boxes || (t.boxes = []),
              (e.fullWidth = e.fullWidth || !1),
              (e.position = e.position || "top"),
              (e.weight = e.weight || 0),
              (e._layers =
                e._layers ||
                function() {
                  return [
                    {
                      z: 0,
                      draw: function() {
                        e.draw.apply(e, arguments);
                      }
                    }
                  ];
                }),
              t.boxes.push(e);
          },
          removeBox: function(t, e) {
            var n = t.boxes ? t.boxes.indexOf(e) : -1;
            -1 !== n && t.boxes.splice(n, 1);
          },
          configure: function(t, e, n) {
            for (
              var i,
                a = ["fullWidth", "position", "weight"],
                r = a.length,
                o = 0;
              o < r;
              ++o
            )
              (i = a[o]), n.hasOwnProperty(i) && (e[i] = n[i]);
          },
          update: function(t, e, n) {
            if (t) {
              var i = t.options.layout || {},
                a = j.options.toPadding(i.padding),
                r = e - a.width,
                o = n - a.height,
                s =
                  ((c = (function(t) {
                    var e,
                      n,
                      i,
                      a = [];
                    for (e = 0, n = (t || []).length; e < n; ++e)
                      (i = t[e]),
                        a.push({
                          index: e,
                          box: i,
                          pos: i.position,
                          horizontal: i.isHorizontal(),
                          weight: i.weight
                        });
                    return a;
                  })(t.boxes)),
                  (f = ee(te(c, "left"), !0)),
                  (g = ee(te(c, "right"))),
                  (p = ee(te(c, "top"), !0)),
                  (m = ee(te(c, "bottom"))),
                  {
                    leftAndTop: f.concat(p),
                    rightAndBottom: g.concat(m),
                    chartArea: te(c, "chartArea"),
                    vertical: f.concat(g),
                    horizontal: p.concat(m)
                  }),
                l = s.vertical,
                u = s.horizontal,
                h = Object.freeze({
                  outerWidth: e,
                  outerHeight: n,
                  padding: a,
                  availableWidth: r,
                  vBoxMaxWidth: r / 2 / l.length,
                  hBoxMaxHeight: o / 2
                }),
                d = Qt(
                  { maxPadding: Qt({}, a), w: r, h: o, x: a.left, y: a.top },
                  a
                );
              !(function(t, e) {
                var n, i, a;
                for (n = 0, i = t.length; n < i; ++n)
                  ((a = t[n]).width = a.horizontal
                    ? a.box.fullWidth && e.availableWidth
                    : e.vBoxMaxWidth),
                    (a.height = a.horizontal && e.hBoxMaxHeight);
              })(l.concat(u), h),
                re(l, d, h),
                re(u, d, h) && re(l, d, h),
                (function(t) {
                  var e = t.maxPadding;
                  function n(n) {
                    var i = Math.max(e[n] - t[n], 0);
                    return (t[n] += i), i;
                  }
                  (t.y += n("top")),
                    (t.x += n("left")),
                    n("right"),
                    n("bottom");
                })(d),
                oe(s.leftAndTop, d, h),
                (d.x += d.w),
                (d.y += d.h),
                oe(s.rightAndBottom, d, h),
                (t.chartArea = {
                  left: d.left,
                  top: d.top,
                  right: d.left + d.w,
                  bottom: d.top + d.h
                }),
                j.each(s.chartArea, function(e) {
                  var n = e.box;
                  Qt(n, t.chartArea), n.update(d.w, d.h);
                });
            }
            var c, f, g, p, m;
          }
        },
        ue =
          ((se = Object.freeze({
            __proto__: null,
            default:
              "/*\n * DOM element rendering detection\n * https://davidwalsh.name/detect-node-insertion\n */\n@keyframes chartjs-render-animation {\n\tfrom { opacity: 0.99; }\n\tto { opacity: 1; }\n}\n\n.chartjs-render-monitor {\n\tanimation: chartjs-render-animation 0.001s;\n}\n\n/*\n * DOM element resizing detection\n * https://github.com/marcj/css-element-queries\n */\n.chartjs-size-monitor,\n.chartjs-size-monitor-expand,\n.chartjs-size-monitor-shrink {\n\tposition: absolute;\n\tdirection: ltr;\n\tleft: 0;\n\ttop: 0;\n\tright: 0;\n\tbottom: 0;\n\toverflow: hidden;\n\tpointer-events: none;\n\tvisibility: hidden;\n\tz-index: -1;\n}\n\n.chartjs-size-monitor-expand > div {\n\tposition: absolute;\n\twidth: 1000000px;\n\theight: 1000000px;\n\tleft: 0;\n\ttop: 0;\n}\n\n.chartjs-size-monitor-shrink > div {\n\tposition: absolute;\n\twidth: 200%;\n\theight: 200%;\n\tleft: 0;\n\ttop: 0;\n}\n"
          })) &&
            se.default) ||
          se,
        he = "$chartjs",
        de = "chartjs-size-monitor",
        ce = "chartjs-render-monitor",
        fe = "chartjs-render-animation",
        ge = ["animationstart", "webkitAnimationStart"],
        pe = {
          touchstart: "mousedown",
          touchmove: "mousemove",
          touchend: "mouseup",
          pointerenter: "mouseenter",
          pointerdown: "mousedown",
          pointermove: "mousemove",
          pointerup: "mouseup",
          pointerleave: "mouseout",
          pointerout: "mouseout"
        };
      function me(t, e) {
        var n = j.getStyle(t, e),
          i = n && n.match(/^(\d+)(\.\d+)?px$/);
        return i ? Number(i[1]) : void 0;
      }
      var ve = !!(function() {
        var t = !1;
        try {
          var e = Object.defineProperty({}, "passive", {
            get: function() {
              t = !0;
            }
          });
          window.addEventListener("e", null, e);
        } catch (n) {}
        return t;
      })() && { passive: !0 };
      function ye(t, e, n) {
        t.addEventListener(e, n, ve);
      }
      function be(t, e, n) {
        t.removeEventListener(e, n, ve);
      }
      function _e(t, e, n, i, a) {
        return {
          type: t,
          chart: e,
          native: a || null,
          x: void 0 !== n ? n : null,
          y: void 0 !== i ? i : null
        };
      }
      function xe(t) {
        var e = document.createElement("div");
        return (e.className = t || ""), e;
      }
      var we = {
        disableCSSInjection: !1,
        _enabled:
          "undefined" != typeof window && "undefined" != typeof document,
        _ensureLoaded: function(t) {
          if (!this.disableCSSInjection) {
            var e = t.getRootNode ? t.getRootNode() : document;
            !(function(t, e) {
              var n = t[he] || (t[he] = {});
              if (!n.containsStyles) {
                (n.containsStyles = !0), (e = "/* Chart.js */\n" + e);
                var i = document.createElement("style");
                i.setAttribute("type", "text/css"),
                  i.appendChild(document.createTextNode(e)),
                  t.appendChild(i);
              }
            })(e.host ? e : document.head, ue);
          }
        },
        acquireContext: function(t, e) {
          "string" == typeof t
            ? (t = document.getElementById(t))
            : t.length && (t = t[0]),
            t && t.canvas && (t = t.canvas);
          var n = t && t.getContext && t.getContext("2d");
          return n && n.canvas === t
            ? (this._ensureLoaded(t),
              (function(t, e) {
                var n = t.style,
                  i = t.getAttribute("height"),
                  a = t.getAttribute("width");
                if (
                  ((t[he] = {
                    initial: {
                      height: i,
                      width: a,
                      style: {
                        display: n.display,
                        height: n.height,
                        width: n.width
                      }
                    }
                  }),
                  (n.display = n.display || "block"),
                  null === a || "" === a)
                ) {
                  var r = me(t, "width");
                  void 0 !== r && (t.width = r);
                }
                if (null === i || "" === i)
                  if ("" === t.style.height)
                    t.height = t.width / (e.options.aspectRatio || 2);
                  else {
                    var o = me(t, "height");
                    void 0 !== r && (t.height = o);
                  }
              })(t, e),
              n)
            : null;
        },
        releaseContext: function(t) {
          var e = t.canvas;
          if (e[he]) {
            var n = e[he].initial;
            ["height", "width"].forEach(function(t) {
              var i = n[t];
              j.isNullOrUndef(i) ? e.removeAttribute(t) : e.setAttribute(t, i);
            }),
              j.each(n.style || {}, function(t, n) {
                e.style[n] = t;
              }),
              (e.width = e.width),
              delete e[he];
          }
        },
        addEventListener: function(t, e, n) {
          var i = t.canvas;
          if ("resize" !== e) {
            var a = n[he] || (n[he] = {});
            ye(
              i,
              e,
              ((a.proxies || (a.proxies = {}))[t.id + "_" + e] = function(e) {
                n(
                  (function(t, e) {
                    var n = pe[t.type] || t.type,
                      i = j.getRelativePosition(t, e);
                    return _e(n, e, i.x, i.y, t);
                  })(e, t)
                );
              })
            );
          } else
            !(function(t, e, n) {
              var i,
                a,
                r,
                o,
                s = t[he] || (t[he] = {}),
                l = (s.resizer = (function(t) {
                  var e = xe(de),
                    n = xe(de + "-expand"),
                    i = xe(de + "-shrink");
                  n.appendChild(xe()),
                    i.appendChild(xe()),
                    e.appendChild(n),
                    e.appendChild(i),
                    (e._reset = function() {
                      (n.scrollLeft = 1e6),
                        (n.scrollTop = 1e6),
                        (i.scrollLeft = 1e6),
                        (i.scrollTop = 1e6);
                    });
                  var a = function() {
                    e._reset(), t();
                  };
                  return (
                    ye(n, "scroll", a.bind(n, "expand")),
                    ye(i, "scroll", a.bind(i, "shrink")),
                    e
                  );
                })(
                  ((i = function() {
                    if (s.resizer) {
                      var i = n.options.maintainAspectRatio && t.parentNode,
                        a = i ? i.clientWidth : 0;
                      e(_e("resize", n)),
                        i &&
                          i.clientWidth < a &&
                          n.canvas &&
                          e(_e("resize", n));
                    }
                  }),
                  (r = !1),
                  (o = []),
                  function() {
                    (o = Array.prototype.slice.call(arguments)),
                      (a = a || this),
                      r ||
                        ((r = !0),
                        j.requestAnimFrame.call(window, function() {
                          (r = !1), i.apply(a, o);
                        }));
                  })
                ));
              !(function(t, e) {
                var n = t[he] || (t[he] = {}),
                  i = (n.renderProxy = function(t) {
                    t.animationName === fe && e();
                  });
                j.each(ge, function(e) {
                  ye(t, e, i);
                }),
                  (n.reflow = !!t.offsetParent),
                  t.classList.add(ce);
              })(t, function() {
                if (s.resizer) {
                  var e = t.parentNode;
                  e && e !== l.parentNode && e.insertBefore(l, e.firstChild),
                    l._reset();
                }
              });
            })(i, n, t);
        },
        removeEventListener: function(t, e, n) {
          var i,
            a,
            r,
            o = t.canvas;
          if ("resize" !== e) {
            var s = ((n[he] || {}).proxies || {})[t.id + "_" + e];
            s && be(o, e, s);
          } else
            (a = (i = o)[he] || {}),
              (r = a.resizer),
              delete a.resizer,
              (function(t) {
                var e = t[he] || {},
                  n = e.renderProxy;
                n &&
                  (j.each(ge, function(e) {
                    be(t, e, n);
                  }),
                  delete e.renderProxy),
                  t.classList.remove(ce);
              })(i),
              r && r.parentNode && r.parentNode.removeChild(r);
        }
      };
      (j.addEvent = ye), (j.removeEvent = be);
      var ke = we._enabled
          ? we
          : {
              acquireContext: function(t) {
                return (
                  t && t.canvas && (t = t.canvas),
                  (t && t.getContext("2d")) || null
                );
              }
            },
        Me = j.extend(
          {
            initialize: function() {},
            acquireContext: function() {},
            releaseContext: function() {},
            addEventListener: function() {},
            removeEventListener: function() {}
          },
          ke
        );
      R._set("global", { plugins: {} });
      var Se = {
          _plugins: [],
          _cacheId: 0,
          register: function(t) {
            var e = this._plugins;
            [].concat(t).forEach(function(t) {
              -1 === e.indexOf(t) && e.push(t);
            }),
              this._cacheId++;
          },
          unregister: function(t) {
            var e = this._plugins;
            [].concat(t).forEach(function(t) {
              var n = e.indexOf(t);
              -1 !== n && e.splice(n, 1);
            }),
              this._cacheId++;
          },
          clear: function() {
            (this._plugins = []), this._cacheId++;
          },
          count: function() {
            return this._plugins.length;
          },
          getAll: function() {
            return this._plugins;
          },
          notify: function(t, e, n) {
            var i,
              a,
              r,
              o,
              s,
              l = this.descriptors(t),
              u = l.length;
            for (i = 0; i < u; ++i)
              if (
                "function" == typeof (s = (r = (a = l[i]).plugin)[e]) &&
                ((o = [t].concat(n || [])).push(a.options),
                !1 === s.apply(r, o))
              )
                return !1;
            return !0;
          },
          descriptors: function(t) {
            var e = t.$plugins || (t.$plugins = {});
            if (e.id === this._cacheId) return e.descriptors;
            var n = [],
              i = [],
              a = (t && t.config) || {},
              r = (a.options && a.options.plugins) || {};
            return (
              this._plugins.concat(a.plugins || []).forEach(function(t) {
                if (-1 === n.indexOf(t)) {
                  var e = t.id,
                    a = r[e];
                  !1 !== a &&
                    (!0 === a && (a = j.clone(R.global.plugins[e])),
                    n.push(t),
                    i.push({ plugin: t, options: a || {} }));
                }
              }),
              (e.descriptors = i),
              (e.id = this._cacheId),
              i
            );
          },
          _invalidate: function(t) {
            delete t.$plugins;
          }
        },
        De = {
          constructors: {},
          defaults: {},
          registerScaleType: function(t, e, n) {
            (this.constructors[t] = e), (this.defaults[t] = j.clone(n));
          },
          getScaleConstructor: function(t) {
            return this.constructors.hasOwnProperty(t)
              ? this.constructors[t]
              : void 0;
          },
          getScaleDefaults: function(t) {
            return this.defaults.hasOwnProperty(t)
              ? j.merge({}, [R.scale, this.defaults[t]])
              : {};
          },
          updateScaleDefaults: function(t, e) {
            this.defaults.hasOwnProperty(t) &&
              (this.defaults[t] = j.extend(this.defaults[t], e));
          },
          addScalesToLayout: function(t) {
            j.each(t.scales, function(e) {
              (e.fullWidth = e.options.fullWidth),
                (e.position = e.options.position),
                (e.weight = e.options.weight),
                le.addBox(t, e);
            });
          }
        },
        Ce = j.valueOrDefault,
        Ae = j.rtl.getRtlAdapter;
      R._set("global", {
        tooltips: {
          enabled: !0,
          custom: null,
          mode: "nearest",
          position: "average",
          intersect: !0,
          backgroundColor: "rgba(0,0,0,0.8)",
          titleFontStyle: "bold",
          titleSpacing: 2,
          titleMarginBottom: 6,
          titleFontColor: "#fff",
          titleAlign: "left",
          bodySpacing: 2,
          bodyFontColor: "#fff",
          bodyAlign: "left",
          footerFontStyle: "bold",
          footerSpacing: 2,
          footerMarginTop: 6,
          footerFontColor: "#fff",
          footerAlign: "left",
          yPadding: 6,
          xPadding: 6,
          caretPadding: 2,
          caretSize: 5,
          cornerRadius: 6,
          multiKeyBackground: "#fff",
          displayColors: !0,
          borderColor: "rgba(0,0,0,0)",
          borderWidth: 0,
          callbacks: {
            beforeTitle: j.noop,
            title: function(t, e) {
              var n = "",
                i = e.labels,
                a = i ? i.length : 0;
              if (t.length > 0) {
                var r = t[0];
                r.label
                  ? (n = r.label)
                  : r.xLabel
                  ? (n = r.xLabel)
                  : a > 0 && r.index < a && (n = i[r.index]);
              }
              return n;
            },
            afterTitle: j.noop,
            beforeBody: j.noop,
            beforeLabel: j.noop,
            label: function(t, e) {
              var n = e.datasets[t.datasetIndex].label || "";
              return (
                n && (n += ": "),
                j.isNullOrUndef(t.value) ? (n += t.yLabel) : (n += t.value),
                n
              );
            },
            labelColor: function(t, e) {
              var n = e.getDatasetMeta(t.datasetIndex).data[t.index]._view;
              return {
                borderColor: n.borderColor,
                backgroundColor: n.backgroundColor
              };
            },
            labelTextColor: function() {
              return this._options.bodyFontColor;
            },
            afterLabel: j.noop,
            afterBody: j.noop,
            beforeFooter: j.noop,
            footer: j.noop,
            afterFooter: j.noop
          }
        }
      });
      var Te = {
        average: function(t) {
          if (!t.length) return !1;
          var e,
            n,
            i = 0,
            a = 0,
            r = 0;
          for (e = 0, n = t.length; e < n; ++e) {
            var o = t[e];
            if (o && o.hasValue()) {
              var s = o.tooltipPosition();
              (i += s.x), (a += s.y), ++r;
            }
          }
          return { x: i / r, y: a / r };
        },
        nearest: function(t, e) {
          var n,
            i,
            a,
            r = e.x,
            o = e.y,
            s = Number.POSITIVE_INFINITY;
          for (n = 0, i = t.length; n < i; ++n) {
            var l = t[n];
            if (l && l.hasValue()) {
              var u = l.getCenterPoint(),
                h = j.distanceBetweenPoints(e, u);
              h < s && ((s = h), (a = l));
            }
          }
          if (a) {
            var d = a.tooltipPosition();
            (r = d.x), (o = d.y);
          }
          return { x: r, y: o };
        }
      };
      function Pe(t, e) {
        return (
          e && (j.isArray(e) ? Array.prototype.push.apply(t, e) : t.push(e)), t
        );
      }
      function Oe(t) {
        return ("string" == typeof t || t instanceof String) &&
          t.indexOf("\n") > -1
          ? t.split("\n")
          : t;
      }
      function Ie(t) {
        var e = R.global;
        return {
          xPadding: t.xPadding,
          yPadding: t.yPadding,
          xAlign: t.xAlign,
          yAlign: t.yAlign,
          rtl: t.rtl,
          textDirection: t.textDirection,
          bodyFontColor: t.bodyFontColor,
          _bodyFontFamily: Ce(t.bodyFontFamily, e.defaultFontFamily),
          _bodyFontStyle: Ce(t.bodyFontStyle, e.defaultFontStyle),
          _bodyAlign: t.bodyAlign,
          bodyFontSize: Ce(t.bodyFontSize, e.defaultFontSize),
          bodySpacing: t.bodySpacing,
          titleFontColor: t.titleFontColor,
          _titleFontFamily: Ce(t.titleFontFamily, e.defaultFontFamily),
          _titleFontStyle: Ce(t.titleFontStyle, e.defaultFontStyle),
          titleFontSize: Ce(t.titleFontSize, e.defaultFontSize),
          _titleAlign: t.titleAlign,
          titleSpacing: t.titleSpacing,
          titleMarginBottom: t.titleMarginBottom,
          footerFontColor: t.footerFontColor,
          _footerFontFamily: Ce(t.footerFontFamily, e.defaultFontFamily),
          _footerFontStyle: Ce(t.footerFontStyle, e.defaultFontStyle),
          footerFontSize: Ce(t.footerFontSize, e.defaultFontSize),
          _footerAlign: t.footerAlign,
          footerSpacing: t.footerSpacing,
          footerMarginTop: t.footerMarginTop,
          caretSize: t.caretSize,
          cornerRadius: t.cornerRadius,
          backgroundColor: t.backgroundColor,
          opacity: 0,
          legendColorBackground: t.multiKeyBackground,
          displayColors: t.displayColors,
          borderColor: t.borderColor,
          borderWidth: t.borderWidth
        };
      }
      function Fe(t, e) {
        return "center" === e
          ? t.x + t.width / 2
          : "right" === e
          ? t.x + t.width - t.xPadding
          : t.x + t.xPadding;
      }
      function Ve(t) {
        return Pe([], Oe(t));
      }
      var Le = G.extend({
          initialize: function() {
            (this._model = Ie(this._options)), (this._lastActive = []);
          },
          getTitle: function() {
            var t = this._options.callbacks,
              e = t.beforeTitle.apply(this, arguments),
              n = t.title.apply(this, arguments),
              i = t.afterTitle.apply(this, arguments),
              a = [];
            return (a = Pe(a, Oe(e))), (a = Pe(a, Oe(n))), Pe(a, Oe(i));
          },
          getBeforeBody: function() {
            return Ve(
              this._options.callbacks.beforeBody.apply(this, arguments)
            );
          },
          getBody: function(t, e) {
            var n = this,
              i = n._options.callbacks,
              a = [];
            return (
              j.each(t, function(t) {
                var r = { before: [], lines: [], after: [] };
                Pe(r.before, Oe(i.beforeLabel.call(n, t, e))),
                  Pe(r.lines, i.label.call(n, t, e)),
                  Pe(r.after, Oe(i.afterLabel.call(n, t, e))),
                  a.push(r);
              }),
              a
            );
          },
          getAfterBody: function() {
            return Ve(this._options.callbacks.afterBody.apply(this, arguments));
          },
          getFooter: function() {
            var t = this._options.callbacks,
              e = t.beforeFooter.apply(this, arguments),
              n = t.footer.apply(this, arguments),
              i = t.afterFooter.apply(this, arguments),
              a = [];
            return (a = Pe(a, Oe(e))), (a = Pe(a, Oe(n))), Pe(a, Oe(i));
          },
          update: function(t) {
            var e,
              n,
              i,
              a,
              r,
              o,
              s,
              l,
              u,
              h,
              d = this,
              c = d._options,
              f = d._model,
              g = (d._model = Ie(c)),
              p = d._active,
              m = d._data,
              v = { xAlign: f.xAlign, yAlign: f.yAlign },
              y = { x: f.x, y: f.y },
              b = { width: f.width, height: f.height },
              _ = { x: f.caretX, y: f.caretY };
            if (p.length) {
              g.opacity = 1;
              var x = [],
                w = [];
              _ = Te[c.position].call(d, p, d._eventPosition);
              var k = [];
              for (e = 0, n = p.length; e < n; ++e)
                k.push(
                  ((a = void 0),
                  (r = void 0),
                  void 0,
                  void 0,
                  (l = void 0),
                  (u = void 0),
                  (h = void 0),
                  (a = (i = p[e])._xScale),
                  (r = i._yScale || i._scale),
                  (o = i._index),
                  (s = i._datasetIndex),
                  (u = (l = i._chart.getDatasetMeta(s)
                    .controller)._getIndexScale()),
                  (h = l._getValueScale()),
                  {
                    xLabel: a ? a.getLabelForIndex(o, s) : "",
                    yLabel: r ? r.getLabelForIndex(o, s) : "",
                    label: u ? "" + u.getLabelForIndex(o, s) : "",
                    value: h ? "" + h.getLabelForIndex(o, s) : "",
                    index: o,
                    datasetIndex: s,
                    x: i._model.x,
                    y: i._model.y
                  })
                );
              c.filter &&
                (k = k.filter(function(t) {
                  return c.filter(t, m);
                })),
                c.itemSort &&
                  (k = k.sort(function(t, e) {
                    return c.itemSort(t, e, m);
                  })),
                j.each(k, function(t) {
                  x.push(c.callbacks.labelColor.call(d, t, d._chart)),
                    w.push(c.callbacks.labelTextColor.call(d, t, d._chart));
                }),
                (g.title = d.getTitle(k, m)),
                (g.beforeBody = d.getBeforeBody(k, m)),
                (g.body = d.getBody(k, m)),
                (g.afterBody = d.getAfterBody(k, m)),
                (g.footer = d.getFooter(k, m)),
                (g.x = _.x),
                (g.y = _.y),
                (g.caretPadding = c.caretPadding),
                (g.labelColors = x),
                (g.labelTextColors = w),
                (g.dataPoints = k),
                (b = (function(t, e) {
                  var n = t._chart.ctx,
                    i = 2 * e.yPadding,
                    a = 0,
                    r = e.body,
                    o = r.reduce(function(t, e) {
                      return (
                        t + e.before.length + e.lines.length + e.after.length
                      );
                    }, 0);
                  o += e.beforeBody.length + e.afterBody.length;
                  var s = e.title.length,
                    l = e.footer.length,
                    u = e.titleFontSize,
                    h = e.bodyFontSize,
                    d = e.footerFontSize;
                  (i += s * u),
                    (i += s ? (s - 1) * e.titleSpacing : 0),
                    (i += s ? e.titleMarginBottom : 0),
                    (i += o * h),
                    (i += o ? (o - 1) * e.bodySpacing : 0),
                    (i += l ? e.footerMarginTop : 0),
                    (i += l * d),
                    (i += l ? (l - 1) * e.footerSpacing : 0);
                  var c = 0,
                    f = function(t) {
                      a = Math.max(a, n.measureText(t).width + c);
                    };
                  return (
                    (n.font = j.fontString(
                      u,
                      e._titleFontStyle,
                      e._titleFontFamily
                    )),
                    j.each(e.title, f),
                    (n.font = j.fontString(
                      h,
                      e._bodyFontStyle,
                      e._bodyFontFamily
                    )),
                    j.each(e.beforeBody.concat(e.afterBody), f),
                    (c = e.displayColors ? h + 2 : 0),
                    j.each(r, function(t) {
                      j.each(t.before, f),
                        j.each(t.lines, f),
                        j.each(t.after, f);
                    }),
                    (c = 0),
                    (n.font = j.fontString(
                      d,
                      e._footerFontStyle,
                      e._footerFontFamily
                    )),
                    j.each(e.footer, f),
                    { width: (a += 2 * e.xPadding), height: i }
                  );
                })(this, g)),
                (y = (function(t, e, n, i) {
                  var a = t.x,
                    r = t.y,
                    o = t.caretSize,
                    s = t.caretPadding,
                    l = t.cornerRadius,
                    u = n.xAlign,
                    h = n.yAlign,
                    d = o + s,
                    c = l + s;
                  return (
                    "right" === u
                      ? (a -= e.width)
                      : "center" === u &&
                        ((a -= e.width / 2) + e.width > i.width &&
                          (a = i.width - e.width),
                        a < 0 && (a = 0)),
                    "top" === h
                      ? (r += d)
                      : (r -= "bottom" === h ? e.height + d : e.height / 2),
                    "center" === h
                      ? "left" === u
                        ? (a += d)
                        : "right" === u && (a -= d)
                      : "left" === u
                      ? (a -= c)
                      : "right" === u && (a += c),
                    { x: a, y: r }
                  );
                })(
                  g,
                  b,
                  (v = (function(t, e) {
                    var n,
                      i,
                      a,
                      r,
                      o,
                      s = t._model,
                      l = t._chart,
                      u = t._chart.chartArea,
                      h = "center",
                      d = "center";
                    s.y < e.height
                      ? (d = "top")
                      : s.y > l.height - e.height && (d = "bottom");
                    var c = (u.left + u.right) / 2,
                      f = (u.top + u.bottom) / 2;
                    "center" === d
                      ? ((n = function(t) {
                          return t <= c;
                        }),
                        (i = function(t) {
                          return t > c;
                        }))
                      : ((n = function(t) {
                          return t <= e.width / 2;
                        }),
                        (i = function(t) {
                          return t >= l.width - e.width / 2;
                        })),
                      (a = function(t) {
                        return (
                          t + e.width + s.caretSize + s.caretPadding > l.width
                        );
                      }),
                      (r = function(t) {
                        return t - e.width - s.caretSize - s.caretPadding < 0;
                      }),
                      (o = function(t) {
                        return t <= f ? "top" : "bottom";
                      }),
                      n(s.x)
                        ? ((h = "left"),
                          a(s.x) && ((h = "center"), (d = o(s.y))))
                        : i(s.x) &&
                          ((h = "right"),
                          r(s.x) && ((h = "center"), (d = o(s.y))));
                    var g = t._options;
                    return {
                      xAlign: g.xAlign ? g.xAlign : h,
                      yAlign: g.yAlign ? g.yAlign : d
                    };
                  })(this, b)),
                  d._chart
                ));
            } else g.opacity = 0;
            return (
              (g.xAlign = v.xAlign),
              (g.yAlign = v.yAlign),
              (g.x = y.x),
              (g.y = y.y),
              (g.width = b.width),
              (g.height = b.height),
              (g.caretX = _.x),
              (g.caretY = _.y),
              (d._model = g),
              t && c.custom && c.custom.call(d, g),
              d
            );
          },
          drawCaret: function(t, e) {
            var n = this._chart.ctx,
              i = this._view,
              a = this.getCaretPosition(t, e, i);
            n.lineTo(a.x1, a.y1), n.lineTo(a.x2, a.y2), n.lineTo(a.x3, a.y3);
          },
          getCaretPosition: function(t, e, n) {
            var i,
              a,
              r,
              o,
              s,
              l,
              u = n.caretSize,
              h = n.cornerRadius,
              d = n.xAlign,
              c = n.yAlign,
              f = t.x,
              g = t.y,
              p = e.width,
              m = e.height;
            if ("center" === c)
              (s = g + m / 2),
                "left" === d
                  ? ((a = (i = f) - u), (r = i), (o = s + u), (l = s - u))
                  : ((a = (i = f + p) + u), (r = i), (o = s - u), (l = s + u));
            else if (
              ("left" === d
                ? ((i = (a = f + h + u) - u), (r = a + u))
                : "right" === d
                ? ((i = (a = f + p - h - u) - u), (r = a + u))
                : ((i = (a = n.caretX) - u), (r = a + u)),
              "top" === c)
            )
              (s = (o = g) - u), (l = o);
            else {
              (s = (o = g + m) + u), (l = o);
              var v = r;
              (r = i), (i = v);
            }
            return { x1: i, x2: a, x3: r, y1: o, y2: s, y3: l };
          },
          drawTitle: function(t, e, n) {
            var i,
              a,
              r,
              o = e.title,
              s = o.length;
            if (s) {
              var l = Ae(e.rtl, e.x, e.width);
              for (
                t.x = Fe(e, e._titleAlign),
                  n.textAlign = l.textAlign(e._titleAlign),
                  n.textBaseline = "middle",
                  i = e.titleFontSize,
                  a = e.titleSpacing,
                  n.fillStyle = e.titleFontColor,
                  n.font = j.fontString(
                    i,
                    e._titleFontStyle,
                    e._titleFontFamily
                  ),
                  r = 0;
                r < s;
                ++r
              )
                n.fillText(o[r], l.x(t.x), t.y + i / 2),
                  (t.y += i + a),
                  r + 1 === s && (t.y += e.titleMarginBottom - a);
            }
          },
          drawBody: function(t, e, n) {
            var i,
              a,
              r,
              o,
              s,
              l,
              u,
              h,
              d = e.bodyFontSize,
              c = e.bodySpacing,
              f = e._bodyAlign,
              g = e.body,
              p = e.displayColors,
              m = 0,
              v = p ? Fe(e, "left") : 0,
              y = Ae(e.rtl, e.x, e.width),
              b = function(e) {
                n.fillText(e, y.x(t.x + m), t.y + d / 2), (t.y += d + c);
              },
              _ = y.textAlign(f);
            for (
              n.textAlign = f,
                n.textBaseline = "middle",
                n.font = j.fontString(d, e._bodyFontStyle, e._bodyFontFamily),
                t.x = Fe(e, _),
                n.fillStyle = e.bodyFontColor,
                j.each(e.beforeBody, b),
                m =
                  p && "right" !== _ ? ("center" === f ? d / 2 + 1 : d + 2) : 0,
                s = 0,
                u = g.length;
              s < u;
              ++s
            ) {
              for (
                i = g[s],
                  a = e.labelTextColors[s],
                  r = e.labelColors[s],
                  n.fillStyle = a,
                  j.each(i.before, b),
                  l = 0,
                  h = (o = i.lines).length;
                l < h;
                ++l
              ) {
                if (p) {
                  var x = y.x(v);
                  (n.fillStyle = e.legendColorBackground),
                    n.fillRect(y.leftForLtr(x, d), t.y, d, d),
                    (n.lineWidth = 1),
                    (n.strokeStyle = r.borderColor),
                    n.strokeRect(y.leftForLtr(x, d), t.y, d, d),
                    (n.fillStyle = r.backgroundColor),
                    n.fillRect(
                      y.leftForLtr(y.xPlus(x, 1), d - 2),
                      t.y + 1,
                      d - 2,
                      d - 2
                    ),
                    (n.fillStyle = a);
                }
                b(o[l]);
              }
              j.each(i.after, b);
            }
            (m = 0), j.each(e.afterBody, b), (t.y -= c);
          },
          drawFooter: function(t, e, n) {
            var i,
              a,
              r = e.footer,
              o = r.length;
            if (o) {
              var s = Ae(e.rtl, e.x, e.width);
              for (
                t.x = Fe(e, e._footerAlign),
                  t.y += e.footerMarginTop,
                  n.textAlign = s.textAlign(e._footerAlign),
                  n.textBaseline = "middle",
                  i = e.footerFontSize,
                  n.fillStyle = e.footerFontColor,
                  n.font = j.fontString(
                    i,
                    e._footerFontStyle,
                    e._footerFontFamily
                  ),
                  a = 0;
                a < o;
                ++a
              )
                n.fillText(r[a], s.x(t.x), t.y + i / 2),
                  (t.y += i + e.footerSpacing);
            }
          },
          drawBackground: function(t, e, n, i) {
            (n.fillStyle = e.backgroundColor),
              (n.strokeStyle = e.borderColor),
              (n.lineWidth = e.borderWidth);
            var a = e.xAlign,
              r = e.yAlign,
              o = t.x,
              s = t.y,
              l = i.width,
              u = i.height,
              h = e.cornerRadius;
            n.beginPath(),
              n.moveTo(o + h, s),
              "top" === r && this.drawCaret(t, i),
              n.lineTo(o + l - h, s),
              n.quadraticCurveTo(o + l, s, o + l, s + h),
              "center" === r && "right" === a && this.drawCaret(t, i),
              n.lineTo(o + l, s + u - h),
              n.quadraticCurveTo(o + l, s + u, o + l - h, s + u),
              "bottom" === r && this.drawCaret(t, i),
              n.lineTo(o + h, s + u),
              n.quadraticCurveTo(o, s + u, o, s + u - h),
              "center" === r && "left" === a && this.drawCaret(t, i),
              n.lineTo(o, s + h),
              n.quadraticCurveTo(o, s, o + h, s),
              n.closePath(),
              n.fill(),
              e.borderWidth > 0 && n.stroke();
          },
          draw: function() {
            var t = this._chart.ctx,
              e = this._view;
            if (0 !== e.opacity) {
              var n = { width: e.width, height: e.height },
                i = { x: e.x, y: e.y },
                a = Math.abs(e.opacity < 0.001) ? 0 : e.opacity,
                r =
                  e.title.length ||
                  e.beforeBody.length ||
                  e.body.length ||
                  e.afterBody.length ||
                  e.footer.length;
              this._options.enabled &&
                r &&
                (t.save(),
                (t.globalAlpha = a),
                this.drawBackground(i, e, t, n),
                (i.y += e.yPadding),
                j.rtl.overrideTextDirection(t, e.textDirection),
                this.drawTitle(i, e, t),
                this.drawBody(i, e, t),
                this.drawFooter(i, e, t),
                j.rtl.restoreTextDirection(t, e.textDirection),
                t.restore());
            }
          },
          handleEvent: function(t) {
            var e,
              n = this,
              i = n._options;
            return (
              (n._lastActive = n._lastActive || []),
              "mouseout" === t.type
                ? (n._active = [])
                : ((n._active = n._chart.getElementsAtEventForMode(
                    t,
                    i.mode,
                    i
                  )),
                  i.reverse && n._active.reverse()),
              (e = !j.arrayEquals(n._active, n._lastActive)) &&
                ((n._lastActive = n._active),
                (i.enabled || i.custom) &&
                  ((n._eventPosition = { x: t.x, y: t.y }),
                  n.update(!0),
                  n.pivot())),
              e
            );
          }
        }),
        Re = Te,
        Ne = Le;
      Ne.positioners = Re;
      var We = j.valueOrDefault;
      function Ye() {
        return j.merge({}, [].slice.call(arguments), {
          merger: function(t, e, n, i) {
            if ("xAxes" === t || "yAxes" === t) {
              var a,
                r,
                o,
                s = n[t].length;
              for (e[t] || (e[t] = []), a = 0; a < s; ++a)
                (o = n[t][a]),
                  (r = We(o.type, "xAxes" === t ? "category" : "linear")),
                  a >= e[t].length && e[t].push({}),
                  !e[t][a].type || (o.type && o.type !== e[t][a].type)
                    ? j.merge(e[t][a], [De.getScaleDefaults(r), o])
                    : j.merge(e[t][a], o);
            } else j._merger(t, e, n, i);
          }
        });
      }
      function Ee() {
        return j.merge({}, [].slice.call(arguments), {
          merger: function(t, e, n, i) {
            var a = e[t] || {},
              r = n[t];
            "scales" === t
              ? (e[t] = Ye(a, r))
              : "scale" === t
              ? (e[t] = j.merge(a, [De.getScaleDefaults(r.type), r]))
              : j._merger(t, e, n, i);
          }
        });
      }
      function je(t, e, n) {
        var i,
          a = function(t) {
            return t.id === i;
          };
        do {
          i = e + n++;
        } while (j.findIndex(t, a) >= 0);
        return i;
      }
      function ze(t) {
        return "top" === t || "bottom" === t;
      }
      function Be(t, e) {
        return function(n, i) {
          return n[t] === i[t] ? n[e] - i[e] : n[t] - i[t];
        };
      }
      R._set("global", {
        elements: {},
        events: ["mousemove", "mouseout", "click", "touchstart", "touchmove"],
        hover: {
          onHover: null,
          mode: "nearest",
          intersect: !0,
          animationDuration: 400
        },
        onClick: null,
        maintainAspectRatio: !0,
        responsive: !0,
        responsiveAnimationDuration: 0
      });
      var He = function(t, e) {
        return this.construct(t, e), this;
      };
      j.extend(He.prototype, {
        construct: function(t, e) {
          var n = this;
          e = (function(t) {
            var e = ((t = t || {}).data = t.data || {});
            return (
              (e.datasets = e.datasets || []),
              (e.labels = e.labels || []),
              (t.options = Ee(R.global, R[t.type], t.options || {})),
              t
            );
          })(e);
          var i = Me.acquireContext(t, e),
            a = i && i.canvas,
            r = a && a.height,
            o = a && a.width;
          (n.id = j.uid()),
            (n.ctx = i),
            (n.canvas = a),
            (n.config = e),
            (n.width = o),
            (n.height = r),
            (n.aspectRatio = r ? o / r : null),
            (n.options = e.options),
            (n._bufferedRender = !1),
            (n._layers = []),
            (n.chart = n),
            (n.controller = n),
            (He.instances[n.id] = n),
            Object.defineProperty(n, "data", {
              get: function() {
                return n.config.data;
              },
              set: function(t) {
                n.config.data = t;
              }
            }),
            i && a
              ? (n.initialize(), n.update())
              : console.error(
                  "Failed to create chart: can't acquire context from the given item"
                );
        },
        initialize: function() {
          var t = this;
          return (
            Se.notify(t, "beforeInit"),
            j.retinaScale(t, t.options.devicePixelRatio),
            t.bindEvents(),
            t.options.responsive && t.resize(!0),
            t.initToolTip(),
            Se.notify(t, "afterInit"),
            t
          );
        },
        clear: function() {
          return j.canvas.clear(this), this;
        },
        stop: function() {
          return X.cancelAnimation(this), this;
        },
        resize: function(t) {
          var e = this,
            n = e.options,
            i = e.canvas,
            a = (n.maintainAspectRatio && e.aspectRatio) || null,
            r = Math.max(0, Math.floor(j.getMaximumWidth(i))),
            o = Math.max(0, Math.floor(a ? r / a : j.getMaximumHeight(i)));
          if (
            (e.width !== r || e.height !== o) &&
            ((i.width = e.width = r),
            (i.height = e.height = o),
            (i.style.width = r + "px"),
            (i.style.height = o + "px"),
            j.retinaScale(e, n.devicePixelRatio),
            !t)
          ) {
            var s = { width: r, height: o };
            Se.notify(e, "resize", [s]),
              n.onResize && n.onResize(e, s),
              e.stop(),
              e.update({ duration: n.responsiveAnimationDuration });
          }
        },
        ensureScalesHaveIDs: function() {
          var t = this.options,
            e = t.scales || {},
            n = t.scale;
          j.each(e.xAxes, function(t, n) {
            t.id || (t.id = je(e.xAxes, "x-axis-", n));
          }),
            j.each(e.yAxes, function(t, n) {
              t.id || (t.id = je(e.yAxes, "y-axis-", n));
            }),
            n && (n.id = n.id || "scale");
        },
        buildOrUpdateScales: function() {
          var t = this,
            e = t.options,
            n = t.scales || {},
            i = [],
            a = Object.keys(n).reduce(function(t, e) {
              return (t[e] = !1), t;
            }, {});
          e.scales &&
            (i = i.concat(
              (e.scales.xAxes || []).map(function(t) {
                return { options: t, dtype: "category", dposition: "bottom" };
              }),
              (e.scales.yAxes || []).map(function(t) {
                return { options: t, dtype: "linear", dposition: "left" };
              })
            )),
            e.scale &&
              i.push({
                options: e.scale,
                dtype: "radialLinear",
                isDefault: !0,
                dposition: "chartArea"
              }),
            j.each(i, function(e) {
              var i = e.options,
                r = i.id,
                o = We(i.type, e.dtype);
              ze(i.position) !== ze(e.dposition) && (i.position = e.dposition),
                (a[r] = !0);
              var s = null;
              if (r in n && n[r].type === o)
                ((s = n[r]).options = i), (s.ctx = t.ctx), (s.chart = t);
              else {
                var l = De.getScaleConstructor(o);
                if (!l) return;
                (s = new l({
                  id: r,
                  type: o,
                  options: i,
                  ctx: t.ctx,
                  chart: t
                })),
                  (n[s.id] = s);
              }
              s.mergeTicksOptions(), e.isDefault && (t.scale = s);
            }),
            j.each(a, function(t, e) {
              t || delete n[e];
            }),
            (t.scales = n),
            De.addScalesToLayout(this);
        },
        buildOrUpdateControllers: function() {
          var t,
            e,
            n = this,
            i = [],
            a = n.data.datasets;
          for (t = 0, e = a.length; t < e; t++) {
            var r = a[t],
              o = n.getDatasetMeta(t),
              s = r.type || n.config.type;
            if (
              (o.type &&
                o.type !== s &&
                (n.destroyDatasetMeta(t), (o = n.getDatasetMeta(t))),
              (o.type = s),
              (o.order = r.order || 0),
              (o.index = t),
              o.controller)
            )
              o.controller.updateIndex(t), o.controller.linkScales();
            else {
              var l = Ut[o.type];
              if (void 0 === l)
                throw new Error('"' + o.type + '" is not a chart type.');
              (o.controller = new l(n, t)), i.push(o.controller);
            }
          }
          return i;
        },
        resetElements: function() {
          var t = this;
          j.each(
            t.data.datasets,
            function(e, n) {
              t.getDatasetMeta(n).controller.reset();
            },
            t
          );
        },
        reset: function() {
          this.resetElements(), this.tooltip.initialize();
        },
        update: function(t) {
          var e,
            n,
            i,
            a,
            r = this;
          if (
            ((t && "object" == typeof t) ||
              (t = { duration: t, lazy: arguments[1] }),
            (a = (i = r).options),
            j.each(i.scales, function(t) {
              le.removeBox(i, t);
            }),
            (a = Ee(R.global, R[i.config.type], a)),
            (i.options = i.config.options = a),
            i.ensureScalesHaveIDs(),
            i.buildOrUpdateScales(),
            (i.tooltip._options = a.tooltips),
            i.tooltip.initialize(),
            Se._invalidate(r),
            !1 !== Se.notify(r, "beforeUpdate"))
          ) {
            r.tooltip._data = r.data;
            var o = r.buildOrUpdateControllers();
            for (e = 0, n = r.data.datasets.length; e < n; e++)
              r.getDatasetMeta(e).controller.buildOrUpdateElements();
            r.updateLayout(),
              r.options.animation &&
                r.options.animation.duration &&
                j.each(o, function(t) {
                  t.reset();
                }),
              r.updateDatasets(),
              r.tooltip.initialize(),
              (r.lastActive = []),
              Se.notify(r, "afterUpdate"),
              r._layers.sort(Be("z", "_idx")),
              r._bufferedRender
                ? (r._bufferedRequest = {
                    duration: t.duration,
                    easing: t.easing,
                    lazy: t.lazy
                  })
                : r.render(t);
          }
        },
        updateLayout: function() {
          var t = this;
          !1 !== Se.notify(t, "beforeLayout") &&
            (le.update(this, this.width, this.height),
            (t._layers = []),
            j.each(
              t.boxes,
              function(e) {
                e._configure && e._configure(),
                  t._layers.push.apply(t._layers, e._layers());
              },
              t
            ),
            t._layers.forEach(function(t, e) {
              t._idx = e;
            }),
            Se.notify(t, "afterScaleUpdate"),
            Se.notify(t, "afterLayout"));
        },
        updateDatasets: function() {
          if (!1 !== Se.notify(this, "beforeDatasetsUpdate")) {
            for (var t = 0, e = this.data.datasets.length; t < e; ++t)
              this.updateDataset(t);
            Se.notify(this, "afterDatasetsUpdate");
          }
        },
        updateDataset: function(t) {
          var e = this.getDatasetMeta(t),
            n = { meta: e, index: t };
          !1 !== Se.notify(this, "beforeDatasetUpdate", [n]) &&
            (e.controller._update(),
            Se.notify(this, "afterDatasetUpdate", [n]));
        },
        render: function(t) {
          var e = this;
          (t && "object" == typeof t) ||
            (t = { duration: t, lazy: arguments[1] });
          var n = e.options.animation,
            i = We(t.duration, n && n.duration),
            a = t.lazy;
          if (!1 !== Se.notify(e, "beforeRender")) {
            var r = function(t) {
              Se.notify(e, "afterRender"),
                j.callback(n && n.onComplete, [t], e);
            };
            if (n && i) {
              var o = new $({
                numSteps: i / 16.66,
                easing: t.easing || n.easing,
                render: function(t, e) {
                  var n = j.easing.effects[e.easing],
                    i = e.currentStep,
                    a = i / e.numSteps;
                  t.draw(n(a), a, i);
                },
                onAnimationProgress: n.onProgress,
                onAnimationComplete: r
              });
              X.addAnimation(e, o, i, a);
            } else e.draw(), r(new $({ numSteps: 0, chart: e }));
            return e;
          }
        },
        draw: function(t) {
          var e,
            n,
            i = this;
          if (
            (i.clear(),
            j.isNullOrUndef(t) && (t = 1),
            i.transition(t),
            !(i.width <= 0 || i.height <= 0) &&
              !1 !== Se.notify(i, "beforeDraw", [t]))
          ) {
            for (n = i._layers, e = 0; e < n.length && n[e].z <= 0; ++e)
              n[e].draw(i.chartArea);
            for (i.drawDatasets(t); e < n.length; ++e) n[e].draw(i.chartArea);
            i._drawTooltip(t), Se.notify(i, "afterDraw", [t]);
          }
        },
        transition: function(t) {
          for (var e = 0, n = (this.data.datasets || []).length; e < n; ++e)
            this.isDatasetVisible(e) &&
              this.getDatasetMeta(e).controller.transition(t);
          this.tooltip.transition(t);
        },
        _getSortedDatasetMetas: function(t) {
          var e,
            n,
            i = [];
          for (e = 0, n = (this.data.datasets || []).length; e < n; ++e)
            (t && !this.isDatasetVisible(e)) || i.push(this.getDatasetMeta(e));
          return i.sort(Be("order", "index")), i;
        },
        _getSortedVisibleDatasetMetas: function() {
          return this._getSortedDatasetMetas(!0);
        },
        drawDatasets: function(t) {
          var e, n;
          if (!1 !== Se.notify(this, "beforeDatasetsDraw", [t])) {
            for (
              n = (e = this._getSortedVisibleDatasetMetas()).length - 1;
              n >= 0;
              --n
            )
              this.drawDataset(e[n], t);
            Se.notify(this, "afterDatasetsDraw", [t]);
          }
        },
        drawDataset: function(t, e) {
          var n = { meta: t, index: t.index, easingValue: e };
          !1 !== Se.notify(this, "beforeDatasetDraw", [n]) &&
            (t.controller.draw(e), Se.notify(this, "afterDatasetDraw", [n]));
        },
        _drawTooltip: function(t) {
          var e = this.tooltip,
            n = { tooltip: e, easingValue: t };
          !1 !== Se.notify(this, "beforeTooltipDraw", [n]) &&
            (e.draw(), Se.notify(this, "afterTooltipDraw", [n]));
        },
        getElementAtEvent: function(t) {
          return Jt.modes.single(this, t);
        },
        getElementsAtEvent: function(t) {
          return Jt.modes.label(this, t, { intersect: !0 });
        },
        getElementsAtXAxis: function(t) {
          return Jt.modes["x-axis"](this, t, { intersect: !0 });
        },
        getElementsAtEventForMode: function(t, e, n) {
          var i = Jt.modes[e];
          return "function" == typeof i ? i(this, t, n) : [];
        },
        getDatasetAtEvent: function(t) {
          return Jt.modes.dataset(this, t, { intersect: !0 });
        },
        getDatasetMeta: function(t) {
          var e = this.data.datasets[t];
          e._meta || (e._meta = {});
          var n = e._meta[this.id];
          return (
            n ||
              (n = e._meta[this.id] = {
                type: null,
                data: [],
                dataset: null,
                controller: null,
                hidden: null,
                xAxisID: null,
                yAxisID: null,
                order: e.order || 0,
                index: t
              }),
            n
          );
        },
        getVisibleDatasetCount: function() {
          for (var t = 0, e = 0, n = this.data.datasets.length; e < n; ++e)
            this.isDatasetVisible(e) && t++;
          return t;
        },
        isDatasetVisible: function(t) {
          var e = this.getDatasetMeta(t);
          return "boolean" == typeof e.hidden
            ? !e.hidden
            : !this.data.datasets[t].hidden;
        },
        generateLegend: function() {
          return this.options.legendCallback(this);
        },
        destroyDatasetMeta: function(t) {
          var e = this.id,
            n = this.data.datasets[t],
            i = n._meta && n._meta[e];
          i && (i.controller.destroy(), delete n._meta[e]);
        },
        destroy: function() {
          var t,
            e,
            n = this,
            i = n.canvas;
          for (n.stop(), t = 0, e = n.data.datasets.length; t < e; ++t)
            n.destroyDatasetMeta(t);
          i &&
            (n.unbindEvents(),
            j.canvas.clear(n),
            Me.releaseContext(n.ctx),
            (n.canvas = null),
            (n.ctx = null)),
            Se.notify(n, "destroy"),
            delete He.instances[n.id];
        },
        toBase64Image: function() {
          return this.canvas.toDataURL.apply(this.canvas, arguments);
        },
        initToolTip: function() {
          var t = this;
          t.tooltip = new Ne(
            {
              _chart: t,
              _chartInstance: t,
              _data: t.data,
              _options: t.options.tooltips
            },
            t
          );
        },
        bindEvents: function() {
          var t = this,
            e = (t._listeners = {}),
            n = function() {
              t.eventHandler.apply(t, arguments);
            };
          j.each(t.options.events, function(i) {
            Me.addEventListener(t, i, n), (e[i] = n);
          }),
            t.options.responsive &&
              ((n = function() {
                t.resize();
              }),
              Me.addEventListener(t, "resize", n),
              (e.resize = n));
        },
        unbindEvents: function() {
          var t = this,
            e = t._listeners;
          e &&
            (delete t._listeners,
            j.each(e, function(e, n) {
              Me.removeEventListener(t, n, e);
            }));
        },
        updateHoverStyle: function(t, e, n) {
          var i,
            a,
            r,
            o = n ? "set" : "remove";
          for (a = 0, r = t.length; a < r; ++a)
            (i = t[a]) &&
              this.getDatasetMeta(i._datasetIndex).controller[o + "HoverStyle"](
                i
              );
          "dataset" === e &&
            this.getDatasetMeta(t[0]._datasetIndex).controller[
              "_" + o + "DatasetHoverStyle"
            ]();
        },
        eventHandler: function(t) {
          var e = this,
            n = e.tooltip;
          if (!1 !== Se.notify(e, "beforeEvent", [t])) {
            (e._bufferedRender = !0), (e._bufferedRequest = null);
            var i = e.handleEvent(t);
            n && (i = n._start ? n.handleEvent(t) : i | n.handleEvent(t)),
              Se.notify(e, "afterEvent", [t]);
            var a = e._bufferedRequest;
            return (
              a
                ? e.render(a)
                : i &&
                  !e.animating &&
                  (e.stop(),
                  e.render({
                    duration: e.options.hover.animationDuration,
                    lazy: !0
                  })),
              (e._bufferedRender = !1),
              (e._bufferedRequest = null),
              e
            );
          }
        },
        handleEvent: function(t) {
          var e,
            n = this,
            i = n.options || {},
            a = i.hover;
          return (
            (n.lastActive = n.lastActive || []),
            "mouseout" === t.type
              ? (n.active = [])
              : (n.active = n.getElementsAtEventForMode(t, a.mode, a)),
            j.callback(i.onHover || i.hover.onHover, [t.native, n.active], n),
            ("mouseup" !== t.type && "click" !== t.type) ||
              (i.onClick && i.onClick.call(n, t.native, n.active)),
            n.lastActive.length && n.updateHoverStyle(n.lastActive, a.mode, !1),
            n.active.length &&
              a.mode &&
              n.updateHoverStyle(n.active, a.mode, !0),
            (e = !j.arrayEquals(n.active, n.lastActive)),
            (n.lastActive = n.active),
            e
          );
        }
      }),
        (He.instances = {});
      var Ue = He;
      function qe() {
        throw new Error(
          "This method is not implemented: either no adapter can be found or an incomplete integration was provided."
        );
      }
      function Ge(t) {
        this.options = t || {};
      }
      (He.Controller = He),
        (He.types = {}),
        (j.configMerge = Ee),
        (j.scaleMerge = Ye),
        j.extend(Ge.prototype, {
          formats: qe,
          parse: qe,
          format: qe,
          add: qe,
          diff: qe,
          startOf: qe,
          endOf: qe,
          _create: function(t) {
            return t;
          }
        }),
        (Ge.override = function(t) {
          j.extend(Ge.prototype, t);
        });
      var Ze = { _date: Ge },
        $e = {
          formatters: {
            values: function(t) {
              return j.isArray(t) ? t : "" + t;
            },
            linear: function(t, e, n) {
              var i = n.length > 3 ? n[2] - n[1] : n[1] - n[0];
              Math.abs(i) > 1 && t !== Math.floor(t) && (i = t - Math.floor(t));
              var a = j.log10(Math.abs(i)),
                r = "";
              if (0 !== t)
                if (
                  Math.max(Math.abs(n[0]), Math.abs(n[n.length - 1])) < 1e-4
                ) {
                  var o = j.log10(Math.abs(t)),
                    s = Math.floor(o) - Math.floor(a);
                  (s = Math.max(Math.min(s, 20), 0)), (r = t.toExponential(s));
                } else {
                  var l = -1 * Math.floor(a);
                  (l = Math.max(Math.min(l, 20), 0)), (r = t.toFixed(l));
                }
              else r = "0";
              return r;
            },
            logarithmic: function(t, e, n) {
              var i = t / Math.pow(10, Math.floor(j.log10(t)));
              return 0 === t
                ? "0"
                : 1 === i || 2 === i || 5 === i || 0 === e || e === n.length - 1
                ? t.toExponential()
                : "";
            }
          }
        },
        Xe = j.isArray,
        Ke = j.isNullOrUndef,
        Je = j.valueOrDefault,
        Qe = j.valueAtIndexOrDefault;
      function tn(t, e, n) {
        var i,
          a = t.getTicks().length,
          r = Math.min(e, a - 1),
          o = t.getPixelForTick(r),
          s = t._startPixel,
          l = t._endPixel;
        if (
          !(
            n &&
            ((i =
              1 === a
                ? Math.max(o - s, l - o)
                : 0 === e
                ? (t.getPixelForTick(1) - o) / 2
                : (o - t.getPixelForTick(r - 1)) / 2),
            (o += r < e ? i : -i) < s - 1e-6 || o > l + 1e-6)
          )
        )
          return o;
      }
      function en(t) {
        return t.drawTicks ? t.tickMarkLength : 0;
      }
      function nn(t) {
        var e, n;
        return t.display
          ? ((e = j.options._parseFont(t)),
            (n = j.options.toPadding(t.padding)),
            e.lineHeight + n.height)
          : 0;
      }
      function an(t, e) {
        return j.extend(
          j.options._parseFont({
            fontFamily: Je(e.fontFamily, t.fontFamily),
            fontSize: Je(e.fontSize, t.fontSize),
            fontStyle: Je(e.fontStyle, t.fontStyle),
            lineHeight: Je(e.lineHeight, t.lineHeight)
          }),
          {
            color: j.options.resolve([
              e.fontColor,
              t.fontColor,
              R.global.defaultFontColor
            ])
          }
        );
      }
      function rn(t) {
        var e = an(t, t.minor);
        return { minor: e, major: t.major.enabled ? an(t, t.major) : e };
      }
      function on(t) {
        var e,
          n,
          i,
          a = [];
        for (n = 0, i = t.length; n < i; ++n)
          void 0 !== (e = t[n])._index && a.push(e);
        return a;
      }
      function sn(t, e, n, i) {
        var a,
          r,
          o,
          s,
          l = Je(n, 0),
          u = Math.min(Je(i, t.length), t.length),
          h = 0;
        for (
          e = Math.ceil(e), i && (e = (a = i - n) / Math.floor(a / e)), s = l;
          s < 0;

        )
          h++, (s = Math.round(l + h * e));
        for (r = Math.max(l, 0); r < u; r++)
          (o = t[r]),
            r === s
              ? ((o._index = r), h++, (s = Math.round(l + h * e)))
              : delete o.label;
      }
      R._set("scale", {
        display: !0,
        position: "left",
        offset: !1,
        gridLines: {
          display: !0,
          color: "rgba(0,0,0,0.1)",
          lineWidth: 1,
          drawBorder: !0,
          drawOnChartArea: !0,
          drawTicks: !0,
          tickMarkLength: 10,
          zeroLineWidth: 1,
          zeroLineColor: "rgba(0,0,0,0.25)",
          zeroLineBorderDash: [],
          zeroLineBorderDashOffset: 0,
          offsetGridLines: !1,
          borderDash: [],
          borderDashOffset: 0
        },
        scaleLabel: {
          display: !1,
          labelString: "",
          padding: { top: 4, bottom: 4 }
        },
        ticks: {
          beginAtZero: !1,
          minRotation: 0,
          maxRotation: 50,
          mirror: !1,
          padding: 0,
          reverse: !1,
          display: !0,
          autoSkip: !0,
          autoSkipPadding: 0,
          labelOffset: 0,
          callback: $e.formatters.values,
          minor: {},
          major: {}
        }
      });
      var ln = G.extend({
        zeroLineIndex: 0,
        getPadding: function() {
          return {
            left: this.paddingLeft || 0,
            top: this.paddingTop || 0,
            right: this.paddingRight || 0,
            bottom: this.paddingBottom || 0
          };
        },
        getTicks: function() {
          return this._ticks;
        },
        _getLabels: function() {
          var t = this.chart.data;
          return (
            this.options.labels ||
            (this.isHorizontal() ? t.xLabels : t.yLabels) ||
            t.labels ||
            []
          );
        },
        mergeTicksOptions: function() {},
        beforeUpdate: function() {
          j.callback(this.options.beforeUpdate, [this]);
        },
        update: function(t, e, n) {
          var i,
            a,
            r,
            o,
            s,
            l = this,
            u = l.options.ticks,
            h = u.sampleSize;
          if (
            (l.beforeUpdate(),
            (l.maxWidth = t),
            (l.maxHeight = e),
            (l.margins = j.extend({ left: 0, right: 0, top: 0, bottom: 0 }, n)),
            (l._ticks = null),
            (l.ticks = null),
            (l._labelSizes = null),
            (l._maxLabelLines = 0),
            (l.longestLabelWidth = 0),
            (l.longestTextCache = l.longestTextCache || {}),
            (l._gridLineItems = null),
            (l._labelItems = null),
            l.beforeSetDimensions(),
            l.setDimensions(),
            l.afterSetDimensions(),
            l.beforeDataLimits(),
            l.determineDataLimits(),
            l.afterDataLimits(),
            l.beforeBuildTicks(),
            (o = l.buildTicks() || []),
            (!(o = l.afterBuildTicks(o) || o) || !o.length) && l.ticks)
          )
            for (o = [], i = 0, a = l.ticks.length; i < a; ++i)
              o.push({ value: l.ticks[i], major: !1 });
          return (
            (l._ticks = o),
            (s = h < o.length),
            (r = l._convertTicksToLabels(
              s
                ? (function(t, e) {
                    for (
                      var n = [], i = t.length / e, a = 0, r = t.length;
                      a < r;
                      a += i
                    )
                      n.push(t[Math.floor(a)]);
                    return n;
                  })(o, h)
                : o
            )),
            l._configure(),
            l.beforeCalculateTickRotation(),
            l.calculateTickRotation(),
            l.afterCalculateTickRotation(),
            l.beforeFit(),
            l.fit(),
            l.afterFit(),
            (l._ticksToDraw =
              u.display && (u.autoSkip || "auto" === u.source)
                ? l._autoSkip(o)
                : o),
            s && (r = l._convertTicksToLabels(l._ticksToDraw)),
            (l.ticks = r),
            l.afterUpdate(),
            l.minSize
          );
        },
        _configure: function() {
          var t,
            e,
            n = this,
            i = n.options.ticks.reverse;
          n.isHorizontal()
            ? ((t = n.left), (e = n.right))
            : ((t = n.top), (e = n.bottom), (i = !i)),
            (n._startPixel = t),
            (n._endPixel = e),
            (n._reversePixels = i),
            (n._length = e - t);
        },
        afterUpdate: function() {
          j.callback(this.options.afterUpdate, [this]);
        },
        beforeSetDimensions: function() {
          j.callback(this.options.beforeSetDimensions, [this]);
        },
        setDimensions: function() {
          var t = this;
          t.isHorizontal()
            ? ((t.width = t.maxWidth), (t.left = 0), (t.right = t.width))
            : ((t.height = t.maxHeight), (t.top = 0), (t.bottom = t.height)),
            (t.paddingLeft = 0),
            (t.paddingTop = 0),
            (t.paddingRight = 0),
            (t.paddingBottom = 0);
        },
        afterSetDimensions: function() {
          j.callback(this.options.afterSetDimensions, [this]);
        },
        beforeDataLimits: function() {
          j.callback(this.options.beforeDataLimits, [this]);
        },
        determineDataLimits: j.noop,
        afterDataLimits: function() {
          j.callback(this.options.afterDataLimits, [this]);
        },
        beforeBuildTicks: function() {
          j.callback(this.options.beforeBuildTicks, [this]);
        },
        buildTicks: j.noop,
        afterBuildTicks: function(t) {
          var e = this;
          return Xe(t) && t.length
            ? j.callback(e.options.afterBuildTicks, [e, t])
            : ((e.ticks =
                j.callback(e.options.afterBuildTicks, [e, e.ticks]) || e.ticks),
              t);
        },
        beforeTickToLabelConversion: function() {
          j.callback(this.options.beforeTickToLabelConversion, [this]);
        },
        convertTicksToLabels: function() {
          var t = this.options.ticks;
          this.ticks = this.ticks.map(t.userCallback || t.callback, this);
        },
        afterTickToLabelConversion: function() {
          j.callback(this.options.afterTickToLabelConversion, [this]);
        },
        beforeCalculateTickRotation: function() {
          j.callback(this.options.beforeCalculateTickRotation, [this]);
        },
        calculateTickRotation: function() {
          var t,
            e,
            n,
            i,
            a,
            r,
            o,
            s = this,
            l = s.options,
            u = l.ticks,
            h = s.getTicks().length,
            d = u.minRotation || 0,
            c = u.maxRotation,
            f = d;
          !s._isVisible() || !u.display || d >= c || h <= 1 || !s.isHorizontal()
            ? (s.labelRotation = d)
            : ((e = (t = s._getLabelSizes()).widest.width),
              (n = t.highest.height - t.highest.offset),
              (i = Math.min(s.maxWidth, s.chart.width - e)),
              e + 6 > (a = l.offset ? s.maxWidth / h : i / (h - 1)) &&
                ((a = i / (h - (l.offset ? 0.5 : 1))),
                (r =
                  s.maxHeight - en(l.gridLines) - u.padding - nn(l.scaleLabel)),
                (o = Math.sqrt(e * e + n * n)),
                (f = j.toDegrees(
                  Math.min(
                    Math.asin(Math.min((t.highest.height + 6) / a, 1)),
                    Math.asin(Math.min(r / o, 1)) - Math.asin(n / o)
                  )
                )),
                (f = Math.max(d, Math.min(c, f)))),
              (s.labelRotation = f));
        },
        afterCalculateTickRotation: function() {
          j.callback(this.options.afterCalculateTickRotation, [this]);
        },
        beforeFit: function() {
          j.callback(this.options.beforeFit, [this]);
        },
        fit: function() {
          var t = this,
            e = (t.minSize = { width: 0, height: 0 }),
            n = t.chart,
            i = t.options,
            a = i.ticks,
            r = i.scaleLabel,
            o = i.gridLines,
            s = t._isVisible(),
            l = "bottom" === i.position,
            u = t.isHorizontal();
          if (
            (u ? (e.width = t.maxWidth) : s && (e.width = en(o) + nn(r)),
            u ? s && (e.height = en(o) + nn(r)) : (e.height = t.maxHeight),
            a.display && s)
          ) {
            var h = rn(a),
              d = t._getLabelSizes(),
              c = d.first,
              f = d.last,
              g = d.widest,
              p = d.highest,
              m = 0.4 * h.minor.lineHeight,
              v = a.padding;
            if (u) {
              var y = 0 !== t.labelRotation,
                b = j.toRadians(t.labelRotation),
                _ = Math.cos(b),
                x = Math.sin(b),
                w =
                  x * g.width +
                  _ * (p.height - (y ? p.offset : 0)) +
                  (y ? 0 : m);
              e.height = Math.min(t.maxHeight, e.height + w + v);
              var k,
                M,
                S = t.getPixelForTick(0) - t.left,
                D = t.right - t.getPixelForTick(t.getTicks().length - 1);
              y
                ? ((k = l
                    ? _ * c.width + x * c.offset
                    : x * (c.height - c.offset)),
                  (M = l
                    ? x * (f.height - f.offset)
                    : _ * f.width + x * f.offset))
                : ((k = c.width / 2), (M = f.width / 2)),
                (t.paddingLeft =
                  Math.max(((k - S) * t.width) / (t.width - S), 0) + 3),
                (t.paddingRight =
                  Math.max(((M - D) * t.width) / (t.width - D), 0) + 3);
            } else {
              var C = a.mirror ? 0 : g.width + v + m;
              (e.width = Math.min(t.maxWidth, e.width + C)),
                (t.paddingTop = c.height / 2),
                (t.paddingBottom = f.height / 2);
            }
          }
          t.handleMargins(),
            u
              ? ((t.width = t._length =
                  n.width - t.margins.left - t.margins.right),
                (t.height = e.height))
              : ((t.width = e.width),
                (t.height = t._length =
                  n.height - t.margins.top - t.margins.bottom));
        },
        handleMargins: function() {
          var t = this;
          t.margins &&
            ((t.margins.left = Math.max(t.paddingLeft, t.margins.left)),
            (t.margins.top = Math.max(t.paddingTop, t.margins.top)),
            (t.margins.right = Math.max(t.paddingRight, t.margins.right)),
            (t.margins.bottom = Math.max(t.paddingBottom, t.margins.bottom)));
        },
        afterFit: function() {
          j.callback(this.options.afterFit, [this]);
        },
        isHorizontal: function() {
          var t = this.options.position;
          return "top" === t || "bottom" === t;
        },
        isFullWidth: function() {
          return this.options.fullWidth;
        },
        getRightValue: function(t) {
          if (Ke(t)) return NaN;
          if (("number" == typeof t || t instanceof Number) && !isFinite(t))
            return NaN;
          if (t)
            if (this.isHorizontal()) {
              if (void 0 !== t.x) return this.getRightValue(t.x);
            } else if (void 0 !== t.y) return this.getRightValue(t.y);
          return t;
        },
        _convertTicksToLabels: function(t) {
          var e,
            n,
            i,
            a = this;
          for (
            a.ticks = t.map(function(t) {
              return t.value;
            }),
              a.beforeTickToLabelConversion(),
              e = a.convertTicksToLabels(t) || a.ticks,
              a.afterTickToLabelConversion(),
              n = 0,
              i = t.length;
            n < i;
            ++n
          )
            t[n].label = e[n];
          return e;
        },
        _getLabelSizes: function() {
          var t = this,
            e = t._labelSizes;
          return (
            e ||
              ((t._labelSizes = e = (function(t, e, n, i) {
                var a,
                  r,
                  o,
                  s,
                  l,
                  u,
                  h,
                  d,
                  c,
                  f,
                  g,
                  p,
                  m,
                  v = n.length,
                  y = [],
                  b = [],
                  _ = [];
                for (a = 0; a < v; ++a) {
                  if (
                    ((s = n[a].label),
                    (l = n[a].major ? e.major : e.minor),
                    (t.font = u = l.string),
                    (h = i[u] = i[u] || { data: {}, gc: [] }),
                    (d = l.lineHeight),
                    (c = f = 0),
                    Ke(s) || Xe(s))
                  ) {
                    if (Xe(s))
                      for (r = 0, o = s.length; r < o; ++r)
                        (g = s[r]),
                          Ke(g) ||
                            Xe(g) ||
                            ((c = j.measureText(t, h.data, h.gc, c, g)),
                            (f += d));
                  } else (c = j.measureText(t, h.data, h.gc, c, s)), (f = d);
                  y.push(c), b.push(f), _.push(d / 2);
                }
                function x(t) {
                  return {
                    width: y[t] || 0,
                    height: b[t] || 0,
                    offset: _[t] || 0
                  };
                }
                return (
                  (function(t, e) {
                    j.each(t, function(t) {
                      var n,
                        i = t.gc,
                        a = i.length / 2;
                      if (a > e) {
                        for (n = 0; n < a; ++n) delete t.data[i[n]];
                        i.splice(0, a);
                      }
                    });
                  })(i, v),
                  (p = y.indexOf(Math.max.apply(null, y))),
                  (m = b.indexOf(Math.max.apply(null, b))),
                  { first: x(0), last: x(v - 1), widest: x(p), highest: x(m) }
                );
              })(t.ctx, rn(t.options.ticks), t.getTicks(), t.longestTextCache)),
              (t.longestLabelWidth = e.widest.width)),
            e
          );
        },
        _parseValue: function(t) {
          var e, n, i, a;
          return (
            Xe(t)
              ? ((e = +this.getRightValue(t[0])),
                (n = +this.getRightValue(t[1])),
                (i = Math.min(e, n)),
                (a = Math.max(e, n)))
              : ((e = void 0),
                (n = t = +this.getRightValue(t)),
                (i = t),
                (a = t)),
            { min: i, max: a, start: e, end: n }
          );
        },
        _getScaleLabel: function(t) {
          var e = this._parseValue(t);
          return void 0 !== e.start
            ? "[" + e.start + ", " + e.end + "]"
            : +this.getRightValue(t);
        },
        getLabelForIndex: j.noop,
        getPixelForValue: j.noop,
        getValueForPixel: j.noop,
        getPixelForTick: function(t) {
          var e = this.options.offset,
            n = this._ticks.length,
            i = 1 / Math.max(n - (e ? 0 : 1), 1);
          return t < 0 || t > n - 1
            ? null
            : this.getPixelForDecimal(t * i + (e ? i / 2 : 0));
        },
        getPixelForDecimal: function(t) {
          return (
            this._reversePixels && (t = 1 - t),
            this._startPixel + t * this._length
          );
        },
        getDecimalForPixel: function(t) {
          var e = (t - this._startPixel) / this._length;
          return this._reversePixels ? 1 - e : e;
        },
        getBasePixel: function() {
          return this.getPixelForValue(this.getBaseValue());
        },
        getBaseValue: function() {
          var t = this.min,
            e = this.max;
          return this.beginAtZero
            ? 0
            : t < 0 && e < 0
            ? e
            : t > 0 && e > 0
            ? t
            : 0;
        },
        _autoSkip: function(t) {
          var e,
            n,
            i,
            a,
            r = this.options.ticks,
            o = this._length,
            s = r.maxTicksLimit || o / this._tickSize() + 1,
            l = r.major.enabled
              ? (function(t) {
                  var e,
                    n,
                    i = [];
                  for (e = 0, n = t.length; e < n; e++) t[e].major && i.push(e);
                  return i;
                })(t)
              : [],
            u = l.length,
            h = l[0],
            d = l[u - 1];
          if (u > s)
            return (
              (function(t, e, n) {
                var i,
                  a,
                  r = 0,
                  o = e[0];
                for (n = Math.ceil(n), i = 0; i < t.length; i++)
                  (a = t[i]),
                    i === o
                      ? ((a._index = i), (o = e[++r * n]))
                      : delete a.label;
              })(t, l, u / s),
              on(t)
            );
          if (
            ((i = (function(t, e, n, i) {
              var a,
                r,
                o,
                s,
                l = (function(t) {
                  var e,
                    n,
                    i = t.length;
                  if (i < 2) return !1;
                  for (n = t[0], e = 1; e < i; ++e)
                    if (t[e] - t[e - 1] !== n) return !1;
                  return n;
                })(t),
                u = (e.length - 1) / i;
              if (!l) return Math.max(u, 1);
              for (o = 0, s = (a = j.math._factorize(l)).length - 1; o < s; o++)
                if ((r = a[o]) > u) return r;
              return Math.max(u, 1);
            })(l, t, 0, s)),
            u > 0)
          ) {
            for (e = 0, n = u - 1; e < n; e++) sn(t, i, l[e], l[e + 1]);
            return (
              (a = u > 1 ? (d - h) / (u - 1) : null),
              sn(t, i, j.isNullOrUndef(a) ? 0 : h - a, h),
              sn(t, i, d, j.isNullOrUndef(a) ? t.length : d + a),
              on(t)
            );
          }
          return sn(t, i), on(t);
        },
        _tickSize: function() {
          var t = this.options.ticks,
            e = j.toRadians(this.labelRotation),
            n = Math.abs(Math.cos(e)),
            i = Math.abs(Math.sin(e)),
            a = this._getLabelSizes(),
            r = t.autoSkipPadding || 0,
            o = a ? a.widest.width + r : 0,
            s = a ? a.highest.height + r : 0;
          return this.isHorizontal()
            ? s * n > o * i
              ? o / n
              : s / i
            : s * i < o * n
            ? s / n
            : o / i;
        },
        _isVisible: function() {
          var t,
            e,
            n,
            i = this.chart,
            a = this.options.display;
          if ("auto" !== a) return !!a;
          for (t = 0, e = i.data.datasets.length; t < e; ++t)
            if (
              i.isDatasetVisible(t) &&
              ((n = i.getDatasetMeta(t)).xAxisID === this.id ||
                n.yAxisID === this.id)
            )
              return !0;
          return !1;
        },
        _computeGridLineItems: function(t) {
          var e,
            n,
            i,
            a,
            r,
            o,
            s,
            l,
            u,
            h,
            d,
            c,
            f,
            g,
            p,
            m,
            v,
            y = this,
            b = y.chart,
            _ = y.options,
            x = _.gridLines,
            w = _.position,
            k = x.offsetGridLines,
            M = y.isHorizontal(),
            S = y._ticksToDraw,
            D = S.length + (k ? 1 : 0),
            C = en(x),
            A = [],
            T = x.drawBorder ? Qe(x.lineWidth, 0, 0) : 0,
            P = T / 2,
            O = j._alignPixel,
            I = function(t) {
              return O(b, t, T);
            };
          for (
            "top" === w
              ? ((e = I(y.bottom)),
                (s = y.bottom - C),
                (u = e - P),
                (d = I(t.top) + P),
                (f = t.bottom))
              : "bottom" === w
              ? ((e = I(y.top)),
                (d = t.top),
                (f = I(t.bottom) - P),
                (s = e + P),
                (u = y.top + C))
              : "left" === w
              ? ((e = I(y.right)),
                (o = y.right - C),
                (l = e - P),
                (h = I(t.left) + P),
                (c = t.right))
              : ((e = I(y.left)),
                (h = t.left),
                (c = I(t.right) - P),
                (o = e + P),
                (l = y.left + C)),
              n = 0;
            n < D;
            ++n
          )
            (i = S[n] || {}),
              (Ke(i.label) && n < S.length) ||
                (n === y.zeroLineIndex && _.offset === k
                  ? ((g = x.zeroLineWidth),
                    (p = x.zeroLineColor),
                    (m = x.zeroLineBorderDash || []),
                    (v = x.zeroLineBorderDashOffset || 0))
                  : ((g = Qe(x.lineWidth, n, 1)),
                    (p = Qe(x.color, n, "rgba(0,0,0,0.1)")),
                    (m = x.borderDash || []),
                    (v = x.borderDashOffset || 0)),
                void 0 !== (a = tn(y, i._index || n, k)) &&
                  ((r = O(b, a, g)),
                  M ? (o = l = h = c = r) : (s = u = d = f = r),
                  A.push({
                    tx1: o,
                    ty1: s,
                    tx2: l,
                    ty2: u,
                    x1: h,
                    y1: d,
                    x2: c,
                    y2: f,
                    width: g,
                    color: p,
                    borderDash: m,
                    borderDashOffset: v
                  })));
          return (A.ticksLength = D), (A.borderValue = e), A;
        },
        _computeLabelItems: function() {
          var t,
            e,
            n,
            i,
            a,
            r,
            o,
            s,
            l,
            u,
            h,
            d,
            c = this,
            f = c.options,
            g = f.ticks,
            p = f.position,
            m = g.mirror,
            v = c.isHorizontal(),
            y = c._ticksToDraw,
            b = rn(g),
            _ = g.padding,
            x = en(f.gridLines),
            w = -j.toRadians(c.labelRotation),
            k = [];
          for (
            "top" === p
              ? ((r = c.bottom - x - _), (o = w ? "left" : "center"))
              : "bottom" === p
              ? ((r = c.top + x + _), (o = w ? "right" : "center"))
              : "left" === p
              ? ((a = c.right - (m ? 0 : x) - _), (o = m ? "left" : "right"))
              : ((a = c.left + (m ? 0 : x) + _), (o = m ? "right" : "left")),
              t = 0,
              e = y.length;
            t < e;
            ++t
          )
            (i = (n = y[t]).label),
              Ke(i) ||
                ((s = c.getPixelForTick(n._index || t) + g.labelOffset),
                (u = (l = n.major ? b.major : b.minor).lineHeight),
                (h = Xe(i) ? i.length : 1),
                v
                  ? ((a = s),
                    (d =
                      "top" === p
                        ? ((w ? 1 : 0.5) - h) * u
                        : (w ? 0 : 0.5) * u))
                  : ((r = s), (d = ((1 - h) * u) / 2)),
                k.push({
                  x: a,
                  y: r,
                  rotation: w,
                  label: i,
                  font: l,
                  textOffset: d,
                  textAlign: o
                }));
          return k;
        },
        _drawGrid: function(t) {
          var e = this,
            n = e.options.gridLines;
          if (n.display) {
            var i,
              a,
              r,
              o,
              s,
              l = e.ctx,
              u = e.chart,
              h = j._alignPixel,
              d = n.drawBorder ? Qe(n.lineWidth, 0, 0) : 0,
              c =
                e._gridLineItems ||
                (e._gridLineItems = e._computeGridLineItems(t));
            for (r = 0, o = c.length; r < o; ++r)
              (i = (s = c[r]).width),
                (a = s.color),
                i &&
                  a &&
                  (l.save(),
                  (l.lineWidth = i),
                  (l.strokeStyle = a),
                  l.setLineDash &&
                    (l.setLineDash(s.borderDash),
                    (l.lineDashOffset = s.borderDashOffset)),
                  l.beginPath(),
                  n.drawTicks &&
                    (l.moveTo(s.tx1, s.ty1), l.lineTo(s.tx2, s.ty2)),
                  n.drawOnChartArea &&
                    (l.moveTo(s.x1, s.y1), l.lineTo(s.x2, s.y2)),
                  l.stroke(),
                  l.restore());
            if (d) {
              var f,
                g,
                p,
                m,
                v = d,
                y = Qe(n.lineWidth, c.ticksLength - 1, 1),
                b = c.borderValue;
              e.isHorizontal()
                ? ((f = h(u, e.left, v) - v / 2),
                  (g = h(u, e.right, y) + y / 2),
                  (p = m = b))
                : ((p = h(u, e.top, v) - v / 2),
                  (m = h(u, e.bottom, y) + y / 2),
                  (f = g = b)),
                (l.lineWidth = d),
                (l.strokeStyle = Qe(n.color, 0)),
                l.beginPath(),
                l.moveTo(f, p),
                l.lineTo(g, m),
                l.stroke();
            }
          }
        },
        _drawLabels: function() {
          var t = this;
          if (t.options.ticks.display) {
            var e,
              n,
              i,
              a,
              r,
              o,
              s,
              l,
              u = t.ctx,
              h = t._labelItems || (t._labelItems = t._computeLabelItems());
            for (e = 0, i = h.length; e < i; ++e) {
              if (
                ((o = (r = h[e]).font),
                u.save(),
                u.translate(r.x, r.y),
                u.rotate(r.rotation),
                (u.font = o.string),
                (u.fillStyle = o.color),
                (u.textBaseline = "middle"),
                (u.textAlign = r.textAlign),
                (s = r.label),
                (l = r.textOffset),
                Xe(s))
              )
                for (n = 0, a = s.length; n < a; ++n)
                  u.fillText("" + s[n], 0, l), (l += o.lineHeight);
              else u.fillText(s, 0, l);
              u.restore();
            }
          }
        },
        _drawTitle: function() {
          var t = this,
            e = t.ctx,
            n = t.options,
            i = n.scaleLabel;
          if (i.display) {
            var a,
              r,
              o = Je(i.fontColor, R.global.defaultFontColor),
              s = j.options._parseFont(i),
              l = j.options.toPadding(i.padding),
              u = s.lineHeight / 2,
              h = n.position,
              d = 0;
            if (t.isHorizontal())
              (a = t.left + t.width / 2),
                (r =
                  "bottom" === h ? t.bottom - u - l.bottom : t.top + u + l.top);
            else {
              var c = "left" === h;
              (a = c ? t.left + u + l.top : t.right - u - l.top),
                (r = t.top + t.height / 2),
                (d = c ? -0.5 * Math.PI : 0.5 * Math.PI);
            }
            e.save(),
              e.translate(a, r),
              e.rotate(d),
              (e.textAlign = "center"),
              (e.textBaseline = "middle"),
              (e.fillStyle = o),
              (e.font = s.string),
              e.fillText(i.labelString, 0, 0),
              e.restore();
          }
        },
        draw: function(t) {
          this._isVisible() &&
            (this._drawGrid(t), this._drawTitle(), this._drawLabels());
        },
        _layers: function() {
          var t = this,
            e = t.options,
            n = (e.ticks && e.ticks.z) || 0,
            i = (e.gridLines && e.gridLines.z) || 0;
          return t._isVisible() && n !== i && t.draw === t._draw
            ? [
                {
                  z: i,
                  draw: function() {
                    t._drawGrid.apply(t, arguments),
                      t._drawTitle.apply(t, arguments);
                  }
                },
                {
                  z: n,
                  draw: function() {
                    t._drawLabels.apply(t, arguments);
                  }
                }
              ]
            : [
                {
                  z: n,
                  draw: function() {
                    t.draw.apply(t, arguments);
                  }
                }
              ];
        },
        _getMatchingVisibleMetas: function(t) {
          var e = this,
            n = e.isHorizontal();
          return e.chart._getSortedVisibleDatasetMetas().filter(function(i) {
            return (
              (!t || i.type === t) &&
              (n ? i.xAxisID === e.id : i.yAxisID === e.id)
            );
          });
        }
      });
      ln.prototype._draw = ln.prototype.draw;
      var un = ln,
        hn = j.isNullOrUndef,
        dn = un.extend({
          determineDataLimits: function() {
            var t,
              e = this,
              n = e._getLabels(),
              i = e.options.ticks,
              a = i.min,
              r = i.max,
              o = 0,
              s = n.length - 1;
            void 0 !== a && (t = n.indexOf(a)) >= 0 && (o = t),
              void 0 !== r && (t = n.indexOf(r)) >= 0 && (s = t),
              (e.minIndex = o),
              (e.maxIndex = s),
              (e.min = n[o]),
              (e.max = n[s]);
          },
          buildTicks: function() {
            var t = this._getLabels(),
              e = this.minIndex,
              n = this.maxIndex;
            this.ticks = 0 === e && n === t.length - 1 ? t : t.slice(e, n + 1);
          },
          getLabelForIndex: function(t, e) {
            var n = this.chart;
            return n.getDatasetMeta(e).controller._getValueScaleId() === this.id
              ? this.getRightValue(n.data.datasets[e].data[t])
              : this._getLabels()[t];
          },
          _configure: function() {
            var t = this,
              e = t.options.offset,
              n = t.ticks;
            un.prototype._configure.call(t),
              t.isHorizontal() || (t._reversePixels = !t._reversePixels),
              n &&
                ((t._startValue = t.minIndex - (e ? 0.5 : 0)),
                (t._valueRange = Math.max(n.length - (e ? 0 : 1), 1)));
          },
          getPixelForValue: function(t, e, n) {
            var i,
              a,
              r,
              o = this;
            return (
              hn(e) || hn(n) || (t = o.chart.data.datasets[n].data[e]),
              hn(t) || (i = o.isHorizontal() ? t.x : t.y),
              (void 0 !== i || (void 0 !== t && isNaN(e))) &&
                ((a = o._getLabels()),
                (t = j.valueOrDefault(i, t)),
                (e = -1 !== (r = a.indexOf(t)) ? r : e),
                isNaN(e) && (e = t)),
              o.getPixelForDecimal((e - o._startValue) / o._valueRange)
            );
          },
          getPixelForTick: function(t) {
            var e = this.ticks;
            return t < 0 || t > e.length - 1
              ? null
              : this.getPixelForValue(e[t], t + this.minIndex);
          },
          getValueForPixel: function(t) {
            var e = Math.round(
              this._startValue + this.getDecimalForPixel(t) * this._valueRange
            );
            return Math.min(Math.max(e, 0), this.ticks.length - 1);
          },
          getBasePixel: function() {
            return this.bottom;
          }
        });
      dn._defaults = { position: "bottom" };
      var cn = j.noop,
        fn = j.isNullOrUndef,
        gn = un.extend({
          getRightValue: function(t) {
            return "string" == typeof t
              ? +t
              : un.prototype.getRightValue.call(this, t);
          },
          handleTickRangeOptions: function() {
            var t = this,
              e = t.options.ticks;
            if (e.beginAtZero) {
              var n = j.sign(t.min),
                i = j.sign(t.max);
              n < 0 && i < 0 ? (t.max = 0) : n > 0 && i > 0 && (t.min = 0);
            }
            var a = void 0 !== e.min || void 0 !== e.suggestedMin,
              r = void 0 !== e.max || void 0 !== e.suggestedMax;
            void 0 !== e.min
              ? (t.min = e.min)
              : void 0 !== e.suggestedMin &&
                (null === t.min
                  ? (t.min = e.suggestedMin)
                  : (t.min = Math.min(t.min, e.suggestedMin))),
              void 0 !== e.max
                ? (t.max = e.max)
                : void 0 !== e.suggestedMax &&
                  (null === t.max
                    ? (t.max = e.suggestedMax)
                    : (t.max = Math.max(t.max, e.suggestedMax))),
              a !== r &&
                t.min >= t.max &&
                (a ? (t.max = t.min + 1) : (t.min = t.max - 1)),
              t.min === t.max && (t.max++, e.beginAtZero || t.min--);
          },
          getTickLimit: function() {
            var t,
              e = this.options.ticks,
              n = e.stepSize,
              i = e.maxTicksLimit;
            return (
              n
                ? (t = Math.ceil(this.max / n) - Math.floor(this.min / n) + 1)
                : ((t = this._computeTickLimit()), (i = i || 11)),
              i && (t = Math.min(i, t)),
              t
            );
          },
          _computeTickLimit: function() {
            return Number.POSITIVE_INFINITY;
          },
          handleDirectionalChanges: cn,
          buildTicks: function() {
            var t = this,
              e = t.options.ticks,
              n = t.getTickLimit(),
              i = {
                maxTicks: (n = Math.max(2, n)),
                min: e.min,
                max: e.max,
                precision: e.precision,
                stepSize: j.valueOrDefault(e.fixedStepSize, e.stepSize)
              },
              a = (t.ticks = (function(t, e) {
                var n,
                  a,
                  r,
                  o,
                  s = [],
                  l = i.stepSize,
                  u = l || 1,
                  h = i.maxTicks - 1,
                  d = i.min,
                  c = i.max,
                  f = i.precision,
                  g = e.min,
                  p = e.max,
                  m = j.niceNum((p - g) / h / u) * u;
                if (m < 1e-14 && fn(d) && fn(c)) return [g, p];
                (o = Math.ceil(p / m) - Math.floor(g / m)) > h &&
                  (m = j.niceNum((o * m) / h / u) * u),
                  l || fn(f)
                    ? (n = Math.pow(10, j._decimalPlaces(m)))
                    : ((n = Math.pow(10, f)), (m = Math.ceil(m * n) / n)),
                  (a = Math.floor(g / m) * m),
                  (r = Math.ceil(p / m) * m),
                  l &&
                    (!fn(d) && j.almostWhole(d / m, m / 1e3) && (a = d),
                    !fn(c) && j.almostWhole(c / m, m / 1e3) && (r = c)),
                  (o = (r - a) / m),
                  (o = j.almostEquals(o, Math.round(o), m / 1e3)
                    ? Math.round(o)
                    : Math.ceil(o)),
                  (a = Math.round(a * n) / n),
                  (r = Math.round(r * n) / n),
                  s.push(fn(d) ? a : d);
                for (var v = 1; v < o; ++v)
                  s.push(Math.round((a + v * m) * n) / n);
                return s.push(fn(c) ? r : c), s;
              })(0, t));
            t.handleDirectionalChanges(),
              (t.max = j.max(a)),
              (t.min = j.min(a)),
              e.reverse
                ? (a.reverse(), (t.start = t.max), (t.end = t.min))
                : ((t.start = t.min), (t.end = t.max));
          },
          convertTicksToLabels: function() {
            var t = this;
            (t.ticksAsNumbers = t.ticks.slice()),
              (t.zeroLineIndex = t.ticks.indexOf(0)),
              un.prototype.convertTicksToLabels.call(t);
          },
          _configure: function() {
            var t,
              e = this,
              n = e.getTicks(),
              i = e.min,
              a = e.max;
            un.prototype._configure.call(e),
              e.options.offset &&
                n.length &&
                ((i -= t = (a - i) / Math.max(n.length - 1, 1) / 2), (a += t)),
              (e._startValue = i),
              (e._endValue = a),
              (e._valueRange = a - i);
          }
        }),
        pn = { position: "left", ticks: { callback: $e.formatters.linear } };
      function mn(t, e, n, i) {
        var a,
          r,
          o = t.options,
          s = (function(t, e, n) {
            var i = [
              n.type,
              void 0 === e && void 0 === n.stack ? n.index : "",
              n.stack
            ].join(".");
            return void 0 === t[i] && (t[i] = { pos: [], neg: [] }), t[i];
          })(e, o.stacked, n),
          l = s.pos,
          u = s.neg,
          h = i.length;
        for (a = 0; a < h; ++a)
          (r = t._parseValue(i[a])),
            isNaN(r.min) ||
              isNaN(r.max) ||
              n.data[a].hidden ||
              ((l[a] = l[a] || 0),
              (u[a] = u[a] || 0),
              o.relativePoints
                ? (l[a] = 100)
                : r.min < 0 || r.max < 0
                ? (u[a] += r.min)
                : (l[a] += r.max));
      }
      function vn(t, e, n) {
        var i,
          a,
          r = n.length;
        for (i = 0; i < r; ++i)
          (a = t._parseValue(n[i])),
            isNaN(a.min) ||
              isNaN(a.max) ||
              e.data[i].hidden ||
              ((t.min = Math.min(t.min, a.min)),
              (t.max = Math.max(t.max, a.max)));
      }
      var yn = gn.extend({
          determineDataLimits: function() {
            var t,
              e,
              n,
              i,
              a = this,
              r = a.options,
              o = a.chart.data.datasets,
              s = a._getMatchingVisibleMetas(),
              l = r.stacked,
              u = {},
              h = s.length;
            if (
              ((a.min = Number.POSITIVE_INFINITY),
              (a.max = Number.NEGATIVE_INFINITY),
              void 0 === l)
            )
              for (t = 0; !l && t < h; ++t) l = void 0 !== (e = s[t]).stack;
            for (t = 0; t < h; ++t)
              (n = o[(e = s[t]).index].data), l ? mn(a, u, e, n) : vn(a, e, n);
            j.each(u, function(t) {
              (i = t.pos.concat(t.neg)),
                (a.min = Math.min(a.min, j.min(i))),
                (a.max = Math.max(a.max, j.max(i)));
            }),
              (a.min = j.isFinite(a.min) && !isNaN(a.min) ? a.min : 0),
              (a.max = j.isFinite(a.max) && !isNaN(a.max) ? a.max : 1),
              a.handleTickRangeOptions();
          },
          _computeTickLimit: function() {
            var t;
            return this.isHorizontal()
              ? Math.ceil(this.width / 40)
              : ((t = j.options._parseFont(this.options.ticks)),
                Math.ceil(this.height / t.lineHeight));
          },
          handleDirectionalChanges: function() {
            this.isHorizontal() || this.ticks.reverse();
          },
          getLabelForIndex: function(t, e) {
            return this._getScaleLabel(this.chart.data.datasets[e].data[t]);
          },
          getPixelForValue: function(t) {
            return this.getPixelForDecimal(
              (+this.getRightValue(t) - this._startValue) / this._valueRange
            );
          },
          getValueForPixel: function(t) {
            return (
              this._startValue + this.getDecimalForPixel(t) * this._valueRange
            );
          },
          getPixelForTick: function(t) {
            var e = this.ticksAsNumbers;
            return t < 0 || t > e.length - 1
              ? null
              : this.getPixelForValue(e[t]);
          }
        }),
        bn = pn;
      yn._defaults = bn;
      var _n = j.valueOrDefault,
        xn = j.math.log10,
        wn = {
          position: "left",
          ticks: { callback: $e.formatters.logarithmic }
        };
      function kn(t, e) {
        return j.isFinite(t) && t >= 0 ? t : e;
      }
      var Mn = un.extend({
          determineDataLimits: function() {
            var t,
              e,
              n,
              i,
              a,
              r,
              o = this,
              s = o.options,
              l = o.chart,
              u = l.data.datasets,
              h = o.isHorizontal();
            function d(t) {
              return h ? t.xAxisID === o.id : t.yAxisID === o.id;
            }
            (o.min = Number.POSITIVE_INFINITY),
              (o.max = Number.NEGATIVE_INFINITY),
              (o.minNotZero = Number.POSITIVE_INFINITY);
            var c = s.stacked;
            if (void 0 === c)
              for (t = 0; t < u.length; t++)
                if (
                  ((e = l.getDatasetMeta(t)),
                  l.isDatasetVisible(t) && d(e) && void 0 !== e.stack)
                ) {
                  c = !0;
                  break;
                }
            if (s.stacked || c) {
              var f = {};
              for (t = 0; t < u.length; t++) {
                var g = [
                  (e = l.getDatasetMeta(t)).type,
                  void 0 === s.stacked && void 0 === e.stack ? t : "",
                  e.stack
                ].join(".");
                if (l.isDatasetVisible(t) && d(e))
                  for (
                    void 0 === f[g] && (f[g] = []),
                      a = 0,
                      r = (i = u[t].data).length;
                    a < r;
                    a++
                  ) {
                    var p = f[g];
                    (n = o._parseValue(i[a])),
                      isNaN(n.min) ||
                        isNaN(n.max) ||
                        e.data[a].hidden ||
                        n.min < 0 ||
                        n.max < 0 ||
                        ((p[a] = p[a] || 0), (p[a] += n.max));
                  }
              }
              j.each(f, function(t) {
                if (t.length > 0) {
                  var e = j.min(t),
                    n = j.max(t);
                  (o.min = Math.min(o.min, e)), (o.max = Math.max(o.max, n));
                }
              });
            } else
              for (t = 0; t < u.length; t++)
                if (((e = l.getDatasetMeta(t)), l.isDatasetVisible(t) && d(e)))
                  for (a = 0, r = (i = u[t].data).length; a < r; a++)
                    (n = o._parseValue(i[a])),
                      isNaN(n.min) ||
                        isNaN(n.max) ||
                        e.data[a].hidden ||
                        n.min < 0 ||
                        n.max < 0 ||
                        ((o.min = Math.min(n.min, o.min)),
                        (o.max = Math.max(n.max, o.max)),
                        0 !== n.min &&
                          (o.minNotZero = Math.min(n.min, o.minNotZero)));
            (o.min = j.isFinite(o.min) ? o.min : null),
              (o.max = j.isFinite(o.max) ? o.max : null),
              (o.minNotZero = j.isFinite(o.minNotZero) ? o.minNotZero : null),
              this.handleTickRangeOptions();
          },
          handleTickRangeOptions: function() {
            var t = this,
              e = t.options.ticks;
            (t.min = kn(e.min, t.min)),
              (t.max = kn(e.max, t.max)),
              t.min === t.max &&
                (0 !== t.min && null !== t.min
                  ? ((t.min = Math.pow(10, Math.floor(xn(t.min)) - 1)),
                    (t.max = Math.pow(10, Math.floor(xn(t.max)) + 1)))
                  : ((t.min = 1), (t.max = 10))),
              null === t.min &&
                (t.min = Math.pow(10, Math.floor(xn(t.max)) - 1)),
              null === t.max &&
                (t.max =
                  0 !== t.min ? Math.pow(10, Math.floor(xn(t.min)) + 1) : 10),
              null === t.minNotZero &&
                (t.min > 0
                  ? (t.minNotZero = t.min)
                  : t.max < 1
                  ? (t.minNotZero = Math.pow(10, Math.floor(xn(t.max))))
                  : (t.minNotZero = 1));
          },
          buildTicks: function() {
            var t = this,
              e = t.options.ticks,
              n = !t.isHorizontal(),
              i = { min: kn(e.min), max: kn(e.max) },
              a = (t.ticks = (function(t, e) {
                var n,
                  i,
                  a = [],
                  r = _n(t.min, Math.pow(10, Math.floor(xn(e.min)))),
                  o = Math.floor(xn(e.max)),
                  s = Math.ceil(e.max / Math.pow(10, o));
                0 === r
                  ? ((n = Math.floor(xn(e.minNotZero))),
                    (i = Math.floor(e.minNotZero / Math.pow(10, n))),
                    a.push(r),
                    (r = i * Math.pow(10, n)))
                  : ((n = Math.floor(xn(r))),
                    (i = Math.floor(r / Math.pow(10, n))));
                var l = n < 0 ? Math.pow(10, Math.abs(n)) : 1;
                do {
                  a.push(r),
                    10 == ++i && ((i = 1), (l = ++n >= 0 ? 1 : l)),
                    (r = Math.round(i * Math.pow(10, n) * l) / l);
                } while (n < o || (n === o && i < s));
                var u = _n(t.max, r);
                return a.push(u), a;
              })(i, t));
            (t.max = j.max(a)),
              (t.min = j.min(a)),
              e.reverse
                ? ((n = !n), (t.start = t.max), (t.end = t.min))
                : ((t.start = t.min), (t.end = t.max)),
              n && a.reverse();
          },
          convertTicksToLabels: function() {
            (this.tickValues = this.ticks.slice()),
              un.prototype.convertTicksToLabels.call(this);
          },
          getLabelForIndex: function(t, e) {
            return this._getScaleLabel(this.chart.data.datasets[e].data[t]);
          },
          getPixelForTick: function(t) {
            var e = this.tickValues;
            return t < 0 || t > e.length - 1
              ? null
              : this.getPixelForValue(e[t]);
          },
          _getFirstTickValue: function(t) {
            var e = Math.floor(xn(t));
            return Math.floor(t / Math.pow(10, e)) * Math.pow(10, e);
          },
          _configure: function() {
            var t = this,
              e = t.min,
              n = 0;
            un.prototype._configure.call(t),
              0 === e &&
                ((e = t._getFirstTickValue(t.minNotZero)),
                (n =
                  _n(t.options.ticks.fontSize, R.global.defaultFontSize) /
                  t._length)),
              (t._startValue = xn(e)),
              (t._valueOffset = n),
              (t._valueRange = (xn(t.max) - xn(e)) / (1 - n));
          },
          getPixelForValue: function(t) {
            var e = this,
              n = 0;
            return (
              (t = +e.getRightValue(t)) > e.min &&
                t > 0 &&
                (n = (xn(t) - e._startValue) / e._valueRange + e._valueOffset),
              e.getPixelForDecimal(n)
            );
          },
          getValueForPixel: function(t) {
            var e = this,
              n = e.getDecimalForPixel(t);
            return 0 === n && 0 === e.min
              ? 0
              : Math.pow(
                  10,
                  e._startValue + (n - e._valueOffset) * e._valueRange
                );
          }
        }),
        Sn = wn;
      Mn._defaults = Sn;
      var Dn = j.valueOrDefault,
        Cn = j.valueAtIndexOrDefault,
        An = j.options.resolve,
        Tn = {
          display: !0,
          animate: !0,
          position: "chartArea",
          angleLines: {
            display: !0,
            color: "rgba(0,0,0,0.1)",
            lineWidth: 1,
            borderDash: [],
            borderDashOffset: 0
          },
          gridLines: { circular: !1 },
          ticks: {
            showLabelBackdrop: !0,
            backdropColor: "rgba(255,255,255,0.75)",
            backdropPaddingY: 2,
            backdropPaddingX: 2,
            callback: $e.formatters.linear
          },
          pointLabels: {
            display: !0,
            fontSize: 10,
            callback: function(t) {
              return t;
            }
          }
        };
      function Pn(t) {
        var e = t.ticks;
        return e.display && t.display
          ? Dn(e.fontSize, R.global.defaultFontSize) + 2 * e.backdropPaddingY
          : 0;
      }
      function On(t, e, n, i, a) {
        return t === i || t === a
          ? { start: e - n / 2, end: e + n / 2 }
          : t < i || t > a
          ? { start: e - n, end: e }
          : { start: e, end: e + n };
      }
      function In(t) {
        return 0 === t || 180 === t ? "center" : t < 180 ? "left" : "right";
      }
      function Fn(t, e, n, i) {
        var a,
          r,
          o = n.y + i / 2;
        if (j.isArray(e))
          for (a = 0, r = e.length; a < r; ++a)
            t.fillText(e[a], n.x, o), (o += i);
        else t.fillText(e, n.x, o);
      }
      function Vn(t, e, n) {
        90 === t || 270 === t
          ? (n.y -= e.h / 2)
          : (t > 270 || t < 90) && (n.y -= e.h);
      }
      function Ln(t) {
        return j.isNumber(t) ? t : 0;
      }
      var Rn = gn.extend({
          setDimensions: function() {
            var t = this;
            (t.width = t.maxWidth),
              (t.height = t.maxHeight),
              (t.paddingTop = Pn(t.options) / 2),
              (t.xCenter = Math.floor(t.width / 2)),
              (t.yCenter = Math.floor((t.height - t.paddingTop) / 2)),
              (t.drawingArea = Math.min(t.height - t.paddingTop, t.width) / 2);
          },
          determineDataLimits: function() {
            var t = this,
              e = t.chart,
              n = Number.POSITIVE_INFINITY,
              i = Number.NEGATIVE_INFINITY;
            j.each(e.data.datasets, function(a, r) {
              if (e.isDatasetVisible(r)) {
                var o = e.getDatasetMeta(r);
                j.each(a.data, function(e, a) {
                  var r = +t.getRightValue(e);
                  isNaN(r) ||
                    o.data[a].hidden ||
                    ((n = Math.min(r, n)), (i = Math.max(r, i)));
                });
              }
            }),
              (t.min = n === Number.POSITIVE_INFINITY ? 0 : n),
              (t.max = i === Number.NEGATIVE_INFINITY ? 0 : i),
              t.handleTickRangeOptions();
          },
          _computeTickLimit: function() {
            return Math.ceil(this.drawingArea / Pn(this.options));
          },
          convertTicksToLabels: function() {
            var t = this;
            gn.prototype.convertTicksToLabels.call(t),
              (t.pointLabels = t.chart.data.labels.map(function() {
                var e = j.callback(
                  t.options.pointLabels.callback,
                  arguments,
                  t
                );
                return e || 0 === e ? e : "";
              }));
          },
          getLabelForIndex: function(t, e) {
            return +this.getRightValue(this.chart.data.datasets[e].data[t]);
          },
          fit: function() {
            var t = this.options;
            t.display && t.pointLabels.display
              ? (function(t) {
                  var e,
                    n,
                    i,
                    a = j.options._parseFont(t.options.pointLabels),
                    r = { l: 0, r: t.width, t: 0, b: t.height - t.paddingTop },
                    o = {};
                  (t.ctx.font = a.string), (t._pointLabelSizes = []);
                  var s,
                    l,
                    u,
                    h = t.chart.data.labels.length;
                  for (e = 0; e < h; e++) {
                    (i = t.getPointPosition(e, t.drawingArea + 5)),
                      (s = t.ctx),
                      (l = a.lineHeight),
                      (u = t.pointLabels[e]),
                      (n = j.isArray(u)
                        ? { w: j.longestText(s, s.font, u), h: u.length * l }
                        : { w: s.measureText(u).width, h: l }),
                      (t._pointLabelSizes[e] = n);
                    var d = t.getIndexAngle(e),
                      c = j.toDegrees(d) % 360,
                      f = On(c, i.x, n.w, 0, 180),
                      g = On(c, i.y, n.h, 90, 270);
                    f.start < r.l && ((r.l = f.start), (o.l = d)),
                      f.end > r.r && ((r.r = f.end), (o.r = d)),
                      g.start < r.t && ((r.t = g.start), (o.t = d)),
                      g.end > r.b && ((r.b = g.end), (o.b = d));
                  }
                  t.setReductions(t.drawingArea, r, o);
                })(this)
              : this.setCenterPoint(0, 0, 0, 0);
          },
          setReductions: function(t, e, n) {
            var i = this,
              a = e.l / Math.sin(n.l),
              r = Math.max(e.r - i.width, 0) / Math.sin(n.r),
              o = -e.t / Math.cos(n.t),
              s = -Math.max(e.b - (i.height - i.paddingTop), 0) / Math.cos(n.b);
            (a = Ln(a)),
              (r = Ln(r)),
              (o = Ln(o)),
              (s = Ln(s)),
              (i.drawingArea = Math.min(
                Math.floor(t - (a + r) / 2),
                Math.floor(t - (o + s) / 2)
              )),
              i.setCenterPoint(a, r, o, s);
          },
          setCenterPoint: function(t, e, n, i) {
            var a = this,
              r = a.width - e - a.drawingArea,
              o = t + a.drawingArea,
              s = n + a.drawingArea,
              l = a.height - a.paddingTop - i - a.drawingArea;
            (a.xCenter = Math.floor((o + r) / 2 + a.left)),
              (a.yCenter = Math.floor((s + l) / 2 + a.top + a.paddingTop));
          },
          getIndexAngle: function(t) {
            var e = this.chart,
              n =
                (t * (360 / e.data.labels.length) +
                  ((e.options || {}).startAngle || 0)) %
                360;
            return ((n < 0 ? n + 360 : n) * Math.PI * 2) / 360;
          },
          getDistanceFromCenterForValue: function(t) {
            var e = this;
            if (j.isNullOrUndef(t)) return NaN;
            var n = e.drawingArea / (e.max - e.min);
            return e.options.ticks.reverse ? (e.max - t) * n : (t - e.min) * n;
          },
          getPointPosition: function(t, e) {
            var n = this.getIndexAngle(t) - Math.PI / 2;
            return {
              x: Math.cos(n) * e + this.xCenter,
              y: Math.sin(n) * e + this.yCenter
            };
          },
          getPointPositionForValue: function(t, e) {
            return this.getPointPosition(
              t,
              this.getDistanceFromCenterForValue(e)
            );
          },
          getBasePosition: function(t) {
            var e = this.min,
              n = this.max;
            return this.getPointPositionForValue(
              t || 0,
              this.beginAtZero ? 0 : e < 0 && n < 0 ? n : e > 0 && n > 0 ? e : 0
            );
          },
          _drawGrid: function() {
            var t,
              e,
              n,
              i = this,
              a = i.ctx,
              r = i.options,
              o = r.gridLines,
              s = r.angleLines,
              l = Dn(s.lineWidth, o.lineWidth),
              u = Dn(s.color, o.color);
            if (
              (r.pointLabels.display &&
                (function(t) {
                  var e = t.ctx,
                    n = t.options,
                    i = n.pointLabels,
                    a = Pn(n),
                    r = t.getDistanceFromCenterForValue(
                      n.ticks.reverse ? t.min : t.max
                    ),
                    o = j.options._parseFont(i);
                  e.save(), (e.font = o.string), (e.textBaseline = "middle");
                  for (var s = t.chart.data.labels.length - 1; s >= 0; s--) {
                    var l = 0 === s ? a / 2 : 0,
                      u = t.getPointPosition(s, r + l + 5),
                      h = Cn(i.fontColor, s, R.global.defaultFontColor);
                    e.fillStyle = h;
                    var d = t.getIndexAngle(s),
                      c = j.toDegrees(d);
                    (e.textAlign = In(c)),
                      Vn(c, t._pointLabelSizes[s], u),
                      Fn(e, t.pointLabels[s], u, o.lineHeight);
                  }
                  e.restore();
                })(i),
              o.display &&
                j.each(i.ticks, function(t, n) {
                  0 !== n &&
                    ((e = i.getDistanceFromCenterForValue(i.ticksAsNumbers[n])),
                    (function(t, e, n, i) {
                      var a,
                        r = t.ctx,
                        o = e.circular,
                        s = t.chart.data.labels.length,
                        l = Cn(e.color, i - 1),
                        u = Cn(e.lineWidth, i - 1);
                      if ((o || s) && l && u) {
                        if (
                          (r.save(),
                          (r.strokeStyle = l),
                          (r.lineWidth = u),
                          r.setLineDash &&
                            (r.setLineDash(e.borderDash || []),
                            (r.lineDashOffset = e.borderDashOffset || 0)),
                          r.beginPath(),
                          o)
                        )
                          r.arc(t.xCenter, t.yCenter, n, 0, 2 * Math.PI);
                        else {
                          (a = t.getPointPosition(0, n)), r.moveTo(a.x, a.y);
                          for (var h = 1; h < s; h++)
                            (a = t.getPointPosition(h, n)), r.lineTo(a.x, a.y);
                        }
                        r.closePath(), r.stroke(), r.restore();
                      }
                    })(i, o, e, n));
                }),
              s.display && l && u)
            ) {
              for (
                a.save(),
                  a.lineWidth = l,
                  a.strokeStyle = u,
                  a.setLineDash &&
                    (a.setLineDash(An([s.borderDash, o.borderDash, []])),
                    (a.lineDashOffset = An([
                      s.borderDashOffset,
                      o.borderDashOffset,
                      0
                    ]))),
                  t = i.chart.data.labels.length - 1;
                t >= 0;
                t--
              )
                (e = i.getDistanceFromCenterForValue(
                  r.ticks.reverse ? i.min : i.max
                )),
                  (n = i.getPointPosition(t, e)),
                  a.beginPath(),
                  a.moveTo(i.xCenter, i.yCenter),
                  a.lineTo(n.x, n.y),
                  a.stroke();
              a.restore();
            }
          },
          _drawLabels: function() {
            var t = this,
              e = t.ctx,
              n = t.options.ticks;
            if (n.display) {
              var i,
                a,
                r = t.getIndexAngle(0),
                o = j.options._parseFont(n),
                s = Dn(n.fontColor, R.global.defaultFontColor);
              e.save(),
                (e.font = o.string),
                e.translate(t.xCenter, t.yCenter),
                e.rotate(r),
                (e.textAlign = "center"),
                (e.textBaseline = "middle"),
                j.each(t.ticks, function(r, l) {
                  (0 !== l || n.reverse) &&
                    ((i = t.getDistanceFromCenterForValue(t.ticksAsNumbers[l])),
                    n.showLabelBackdrop &&
                      ((a = e.measureText(r).width),
                      (e.fillStyle = n.backdropColor),
                      e.fillRect(
                        -a / 2 - n.backdropPaddingX,
                        -i - o.size / 2 - n.backdropPaddingY,
                        a + 2 * n.backdropPaddingX,
                        o.size + 2 * n.backdropPaddingY
                      )),
                    (e.fillStyle = s),
                    e.fillText(r, 0, -i));
                }),
                e.restore();
            }
          },
          _drawTitle: j.noop
        }),
        Nn = Tn;
      Rn._defaults = Nn;
      var Wn = j._deprecated,
        Yn = j.options.resolve,
        En = j.valueOrDefault,
        jn = Number.MIN_SAFE_INTEGER || -9007199254740991,
        zn = Number.MAX_SAFE_INTEGER || 9007199254740991,
        Bn = {
          millisecond: { common: !0, size: 1, steps: 1e3 },
          second: { common: !0, size: 1e3, steps: 60 },
          minute: { common: !0, size: 6e4, steps: 60 },
          hour: { common: !0, size: 36e5, steps: 24 },
          day: { common: !0, size: 864e5, steps: 30 },
          week: { common: !1, size: 6048e5, steps: 4 },
          month: { common: !0, size: 2628e6, steps: 12 },
          quarter: { common: !1, size: 7884e6, steps: 4 },
          year: { common: !0, size: 3154e7 }
        },
        Hn = Object.keys(Bn);
      function Un(t, e) {
        return t - e;
      }
      function qn(t) {
        return j.valueOrDefault(t.time.min, t.ticks.min);
      }
      function Gn(t) {
        return j.valueOrDefault(t.time.max, t.ticks.max);
      }
      function Zn(t, e, n, i) {
        var a = (function(t, e, n) {
            for (var i, a, r, o = 0, s = t.length - 1; o >= 0 && o <= s; ) {
              if (((a = t[(i = (o + s) >> 1) - 1] || null), (r = t[i]), !a))
                return { lo: null, hi: r };
              if (r[e] < n) o = i + 1;
              else {
                if (!(a[e] > n)) return { lo: a, hi: r };
                s = i - 1;
              }
            }
            return { lo: r, hi: null };
          })(t, e, n),
          r = a.lo ? (a.hi ? a.lo : t[t.length - 2]) : t[0],
          o = a.lo ? (a.hi ? a.hi : t[t.length - 1]) : t[1],
          s = o[e] - r[e],
          l = s ? (n - r[e]) / s : 0,
          u = (o[i] - r[i]) * l;
        return r[i] + u;
      }
      function $n(t, e) {
        var n = t._adapter,
          i = t.options.time,
          a = i.parser,
          r = a || i.format,
          o = e;
        return (
          "function" == typeof a && (o = a(o)),
          j.isFinite(o) ||
            (o = "string" == typeof r ? n.parse(o, r) : n.parse(o)),
          null !== o
            ? +o
            : (a ||
                "function" != typeof r ||
                ((o = r(e)), j.isFinite(o) || (o = n.parse(o))),
              o)
        );
      }
      function Xn(t, e) {
        if (j.isNullOrUndef(e)) return null;
        var n = t.options.time,
          i = $n(t, t.getRightValue(e));
        return null === i
          ? i
          : (n.round && (i = +t._adapter.startOf(i, n.round)), i);
      }
      function Kn(t, e, n, i) {
        var a,
          r,
          o,
          s = Hn.length;
        for (a = Hn.indexOf(t); a < s - 1; ++a)
          if (
            ((o = (r = Bn[Hn[a]]).steps ? r.steps : zn),
            r.common && Math.ceil((n - e) / (o * r.size)) <= i)
          )
            return Hn[a];
        return Hn[s - 1];
      }
      function Jn(t, e, n) {
        var i,
          a,
          r = [],
          o = {},
          s = e.length;
        for (i = 0; i < s; ++i)
          (o[(a = e[i])] = i), r.push({ value: a, major: !1 });
        return 0 !== s && n
          ? (function(t, e, n, i) {
              var a,
                r,
                o = t._adapter,
                s = +o.startOf(e[0].value, i),
                l = e[e.length - 1].value;
              for (a = s; a <= l; a = +o.add(a, 1, i))
                (r = n[a]) >= 0 && (e[r].major = !0);
              return e;
            })(t, r, o, n)
          : r;
      }
      var Qn = un.extend({
        initialize: function() {
          this.mergeTicksOptions(), un.prototype.initialize.call(this);
        },
        update: function() {
          var t = this.options,
            e = t.time || (t.time = {}),
            n = (this._adapter = new Ze._date(t.adapters.date));
          return (
            Wn("time scale", e.format, "time.format", "time.parser"),
            Wn("time scale", e.min, "time.min", "ticks.min"),
            Wn("time scale", e.max, "time.max", "ticks.max"),
            j.mergeIf(e.displayFormats, n.formats()),
            un.prototype.update.apply(this, arguments)
          );
        },
        getRightValue: function(t) {
          return (
            t && void 0 !== t.t && (t = t.t),
            un.prototype.getRightValue.call(this, t)
          );
        },
        determineDataLimits: function() {
          var t,
            e,
            n,
            i,
            a,
            r,
            o,
            s = this,
            l = s.chart,
            u = s._adapter,
            h = s.options,
            d = h.time.unit || "day",
            c = zn,
            f = jn,
            g = [],
            p = [],
            m = [],
            v = s._getLabels();
          for (t = 0, n = v.length; t < n; ++t) m.push(Xn(s, v[t]));
          for (t = 0, n = (l.data.datasets || []).length; t < n; ++t)
            if (l.isDatasetVisible(t))
              if (((a = l.data.datasets[t].data), j.isObject(a[0])))
                for (p[t] = [], e = 0, i = a.length; e < i; ++e)
                  (r = Xn(s, a[e])), g.push(r), (p[t][e] = r);
              else (p[t] = m.slice(0)), o || ((g = g.concat(m)), (o = !0));
            else p[t] = [];
          m.length &&
            ((c = Math.min(c, m[0])), (f = Math.max(f, m[m.length - 1]))),
            g.length &&
              ((g =
                n > 1
                  ? (function(t) {
                      var e,
                        n,
                        i,
                        a = {},
                        r = [];
                      for (e = 0, n = t.length; e < n; ++e)
                        a[(i = t[e])] || ((a[i] = !0), r.push(i));
                      return r;
                    })(g).sort(Un)
                  : g.sort(Un)),
              (c = Math.min(c, g[0])),
              (f = Math.max(f, g[g.length - 1]))),
            (c = Xn(s, qn(h)) || c),
            (f = Xn(s, Gn(h)) || f),
            (c = c === zn ? +u.startOf(Date.now(), d) : c),
            (f = f === jn ? +u.endOf(Date.now(), d) + 1 : f),
            (s.min = Math.min(c, f)),
            (s.max = Math.max(c + 1, f)),
            (s._table = []),
            (s._timestamps = { data: g, datasets: p, labels: m });
        },
        buildTicks: function() {
          var t,
            e,
            n,
            i = this,
            a = i.min,
            r = i.max,
            o = i.options,
            s = o.ticks,
            l = o.time,
            u = i._timestamps,
            h = [],
            d = i.getLabelCapacity(a),
            c = s.source,
            f = o.distribution;
          for (
            u =
              "data" === c || ("auto" === c && "series" === f)
                ? u.data
                : "labels" === c
                ? u.labels
                : (function(t, e, n, i) {
                    var a,
                      r = t._adapter,
                      o = t.options,
                      s = o.time,
                      l = s.unit || Kn(s.minUnit, e, n, i),
                      u = Yn([s.stepSize, s.unitStepSize, 1]),
                      h = "week" === l && s.isoWeekday,
                      d = e,
                      c = [];
                    if (
                      (h && (d = +r.startOf(d, "isoWeek", h)),
                      (d = +r.startOf(d, h ? "day" : l)),
                      r.diff(n, e, l) > 1e5 * u)
                    )
                      throw e +
                        " and " +
                        n +
                        " are too far apart with stepSize of " +
                        u +
                        " " +
                        l;
                    for (a = d; a < n; a = +r.add(a, u, l)) c.push(a);
                    return (a !== n && "ticks" !== o.bounds) || c.push(a), c;
                  })(i, a, r, d),
              "ticks" === o.bounds &&
                u.length &&
                ((a = u[0]), (r = u[u.length - 1])),
              a = Xn(i, qn(o)) || a,
              r = Xn(i, Gn(o)) || r,
              t = 0,
              e = u.length;
            t < e;
            ++t
          )
            (n = u[t]) >= a && n <= r && h.push(n);
          return (
            (i.min = a),
            (i.max = r),
            (i._unit =
              l.unit ||
              (s.autoSkip
                ? Kn(l.minUnit, i.min, i.max, d)
                : (function(t, e, n, i, a) {
                    var r, o;
                    for (r = Hn.length - 1; r >= Hn.indexOf(n); r--)
                      if (
                        ((o = Hn[r]),
                        Bn[o].common && t._adapter.diff(a, i, o) >= e - 1)
                      )
                        return o;
                    return Hn[n ? Hn.indexOf(n) : 0];
                  })(i, h.length, l.minUnit, i.min, i.max))),
            (i._majorUnit =
              s.major.enabled && "year" !== i._unit
                ? (function(t) {
                    for (var e = Hn.indexOf(t) + 1, n = Hn.length; e < n; ++e)
                      if (Bn[Hn[e]].common) return Hn[e];
                  })(i._unit)
                : void 0),
            (i._table = (function(t, e, n, i) {
              if ("linear" === i || !t.length)
                return [
                  { time: e, pos: 0 },
                  { time: n, pos: 1 }
                ];
              var a,
                r,
                o,
                s,
                l,
                u = [],
                h = [e];
              for (a = 0, r = t.length; a < r; ++a)
                (s = t[a]) > e && s < n && h.push(s);
              for (h.push(n), a = 0, r = h.length; a < r; ++a)
                (l = h[a + 1]),
                  (o = h[a - 1]),
                  (s = h[a]),
                  (void 0 !== o &&
                    void 0 !== l &&
                    Math.round((l + o) / 2) === s) ||
                    u.push({ time: s, pos: a / (r - 1) });
              return u;
            })(i._timestamps.data, a, r, f)),
            (i._offsets = (function(t, e, n, i, a) {
              var r,
                o,
                s = 0,
                l = 0;
              return (
                a.offset &&
                  e.length &&
                  ((r = Zn(t, "time", e[0], "pos")),
                  (s =
                    1 === e.length
                      ? 1 - r
                      : (Zn(t, "time", e[1], "pos") - r) / 2),
                  (o = Zn(t, "time", e[e.length - 1], "pos")),
                  (l =
                    1 === e.length
                      ? o
                      : (o - Zn(t, "time", e[e.length - 2], "pos")) / 2)),
                { start: s, end: l, factor: 1 / (s + 1 + l) }
              );
            })(i._table, h, 0, 0, o)),
            s.reverse && h.reverse(),
            Jn(i, h, i._majorUnit)
          );
        },
        getLabelForIndex: function(t, e) {
          var n = this,
            i = n._adapter,
            a = n.chart.data,
            r = n.options.time,
            o = a.labels && t < a.labels.length ? a.labels[t] : "",
            s = a.datasets[e].data[t];
          return (
            j.isObject(s) && (o = n.getRightValue(s)),
            r.tooltipFormat
              ? i.format($n(n, o), r.tooltipFormat)
              : "string" == typeof o
              ? o
              : i.format($n(n, o), r.displayFormats.datetime)
          );
        },
        tickFormatFunction: function(t, e, n, i) {
          var a = this._adapter,
            r = this.options,
            o = r.time.displayFormats,
            s = o[this._unit],
            l = this._majorUnit,
            u = o[l],
            h = n[e],
            d = r.ticks,
            c = l && u && h && h.major,
            f = a.format(t, i || (c ? u : s)),
            g = c ? d.major : d.minor,
            p = Yn([g.callback, g.userCallback, d.callback, d.userCallback]);
          return p ? p(f, e, n) : f;
        },
        convertTicksToLabels: function(t) {
          var e,
            n,
            i = [];
          for (e = 0, n = t.length; e < n; ++e)
            i.push(this.tickFormatFunction(t[e].value, e, t));
          return i;
        },
        getPixelForOffset: function(t) {
          var e = this._offsets,
            n = Zn(this._table, "time", t, "pos");
          return this.getPixelForDecimal((e.start + n) * e.factor);
        },
        getPixelForValue: function(t, e, n) {
          var i = null;
          if (
            (void 0 !== e &&
              void 0 !== n &&
              (i = this._timestamps.datasets[n][e]),
            null === i && (i = Xn(this, t)),
            null !== i)
          )
            return this.getPixelForOffset(i);
        },
        getPixelForTick: function(t) {
          var e = this.getTicks();
          return t >= 0 && t < e.length
            ? this.getPixelForOffset(e[t].value)
            : null;
        },
        getValueForPixel: function(t) {
          var e = this._offsets,
            n = this.getDecimalForPixel(t) / e.factor - e.end,
            i = Zn(this._table, "pos", n, "time");
          return this._adapter._create(i);
        },
        _getLabelSize: function(t) {
          var e = this.options.ticks,
            n = this.ctx.measureText(t).width,
            i = j.toRadians(
              this.isHorizontal() ? e.maxRotation : e.minRotation
            ),
            a = Math.cos(i),
            r = Math.sin(i),
            o = En(e.fontSize, R.global.defaultFontSize);
          return { w: n * a + o * r, h: n * r + o * a };
        },
        getLabelWidth: function(t) {
          return this._getLabelSize(t).w;
        },
        getLabelCapacity: function(t) {
          var e = this,
            n = e.options.time,
            i = n.displayFormats,
            a = i[n.unit] || i.millisecond,
            r = e.tickFormatFunction(t, 0, Jn(e, [t], e._majorUnit), a),
            o = e._getLabelSize(r),
            s = Math.floor(e.isHorizontal() ? e.width / o.w : e.height / o.h);
          return e.options.offset && s--, s > 0 ? s : 1;
        }
      });
      Qn._defaults = {
        position: "bottom",
        distribution: "linear",
        bounds: "data",
        adapters: {},
        time: {
          parser: !1,
          unit: !1,
          round: !1,
          displayFormat: !1,
          isoWeekday: !1,
          minUnit: "millisecond",
          displayFormats: {}
        },
        ticks: { autoSkip: !1, source: "auto", major: { enabled: !1 } }
      };
      var ti = {
          category: dn,
          linear: yn,
          logarithmic: Mn,
          radialLinear: Rn,
          time: Qn
        },
        ei = {
          datetime: "MMM D, YYYY, h:mm:ss a",
          millisecond: "h:mm:ss.SSS a",
          second: "h:mm:ss a",
          minute: "h:mm a",
          hour: "hA",
          day: "MMM D",
          week: "ll",
          month: "MMM YYYY",
          quarter: "[Q]Q - YYYY",
          year: "YYYY"
        };
      Ze._date.override(
        "function" == typeof t
          ? {
              _id: "moment",
              formats: function() {
                return ei;
              },
              parse: function(e, n) {
                return (
                  "string" == typeof e && "string" == typeof n
                    ? (e = t(e, n))
                    : e instanceof t || (e = t(e)),
                  e.isValid() ? e.valueOf() : null
                );
              },
              format: function(e, n) {
                return t(e).format(n);
              },
              add: function(e, n, i) {
                return t(e)
                  .add(n, i)
                  .valueOf();
              },
              diff: function(e, n, i) {
                return t(e).diff(t(n), i);
              },
              startOf: function(e, n, i) {
                return (
                  (e = t(e)),
                  "isoWeek" === n
                    ? e.isoWeekday(i).valueOf()
                    : e.startOf(n).valueOf()
                );
              },
              endOf: function(e, n) {
                return t(e)
                  .endOf(n)
                  .valueOf();
              },
              _create: function(e) {
                return t(e);
              }
            }
          : {}
      ),
        R._set("global", { plugins: { filler: { propagate: !0 } } });
      var ni = {
        dataset: function(t) {
          var e = t.fill,
            n = t.chart,
            i = n.getDatasetMeta(e),
            a = (i && n.isDatasetVisible(e) && i.dataset._children) || [],
            r = a.length || 0;
          return r
            ? function(t, e) {
                return (e < r && a[e]._view) || null;
              }
            : null;
        },
        boundary: function(t) {
          var e = t.boundary,
            n = e ? e.x : null,
            i = e ? e.y : null;
          return j.isArray(e)
            ? function(t, n) {
                return e[n];
              }
            : function(t) {
                return { x: null === n ? t.x : n, y: null === i ? t.y : i };
              };
        }
      };
      function ii(t, e, n) {
        var i,
          a = t._model || {},
          r = a.fill;
        if ((void 0 === r && (r = !!a.backgroundColor), !1 === r || null === r))
          return !1;
        if (!0 === r) return "origin";
        if (((i = parseFloat(r, 10)), isFinite(i) && Math.floor(i) === i))
          return (
            ("-" !== r[0] && "+" !== r[0]) || (i = e + i),
            !(i === e || i < 0 || i >= n) && i
          );
        switch (r) {
          case "bottom":
            return "start";
          case "top":
            return "end";
          case "zero":
            return "origin";
          case "origin":
          case "start":
          case "end":
            return r;
          default:
            return !1;
        }
      }
      function ai(t) {
        return (t.el._scale || {}).getPointPositionForValue
          ? (function(t) {
              var e,
                n,
                i,
                a,
                r,
                o = t.el._scale,
                s = o.options,
                l = o.chart.data.labels.length,
                u = t.fill,
                h = [];
              if (!l) return null;
              for (
                e = s.ticks.reverse ? o.max : o.min,
                  n = s.ticks.reverse ? o.min : o.max,
                  i = o.getPointPositionForValue(0, e),
                  a = 0;
                a < l;
                ++a
              )
                (r =
                  "start" === u || "end" === u
                    ? o.getPointPositionForValue(a, "start" === u ? e : n)
                    : o.getBasePosition(a)),
                  s.gridLines.circular &&
                    ((r.cx = i.x),
                    (r.cy = i.y),
                    (r.angle = o.getIndexAngle(a) - Math.PI / 2)),
                  h.push(r);
              return h;
            })(t)
          : (function(t) {
              var e,
                n = t.el._model || {},
                i = t.el._scale || {},
                a = t.fill,
                r = null;
              if (isFinite(a)) return null;
              if (
                ("start" === a
                  ? (r = void 0 === n.scaleBottom ? i.bottom : n.scaleBottom)
                  : "end" === a
                  ? (r = void 0 === n.scaleTop ? i.top : n.scaleTop)
                  : void 0 !== n.scaleZero
                  ? (r = n.scaleZero)
                  : i.getBasePixel && (r = i.getBasePixel()),
                null != r)
              ) {
                if (void 0 !== r.x && void 0 !== r.y) return r;
                if (j.isFinite(r))
                  return {
                    x: (e = i.isHorizontal()) ? r : null,
                    y: e ? null : r
                  };
              }
              return null;
            })(t);
      }
      function ri(t, e, n) {
        var i,
          a = t[e].fill,
          r = [e];
        if (!n) return a;
        for (; !1 !== a && -1 === r.indexOf(a); ) {
          if (!isFinite(a)) return a;
          if (!(i = t[a])) return !1;
          if (i.visible) return a;
          r.push(a), (a = i.fill);
        }
        return !1;
      }
      function oi(t) {
        var e = t.fill,
          n = "dataset";
        return !1 === e ? null : (isFinite(e) || (n = "boundary"), ni[n](t));
      }
      function si(t) {
        return t && !t.skip;
      }
      function li(t, e, n, i, a) {
        var r, o, s, l;
        if (i && a) {
          for (t.moveTo(e[0].x, e[0].y), r = 1; r < i; ++r)
            j.canvas.lineTo(t, e[r - 1], e[r]);
          if (void 0 === n[0].angle)
            for (t.lineTo(n[a - 1].x, n[a - 1].y), r = a - 1; r > 0; --r)
              j.canvas.lineTo(t, n[r], n[r - 1], !0);
          else
            for (
              o = n[0].cx,
                s = n[0].cy,
                l = Math.sqrt(
                  Math.pow(n[0].x - o, 2) + Math.pow(n[0].y - s, 2)
                ),
                r = a - 1;
              r > 0;
              --r
            )
              t.arc(o, s, l, n[r].angle, n[r - 1].angle, !0);
        }
      }
      function ui(t, e, n, i, a, r) {
        var o,
          s,
          l,
          u,
          h,
          d,
          c,
          f,
          g = e.length,
          p = i.spanGaps,
          m = [],
          v = [],
          y = 0,
          b = 0;
        for (t.beginPath(), o = 0, s = g; o < s; ++o)
          (h = n((u = e[(l = o % g)]._view), l, i)),
            (d = si(u)),
            (c = si(h)),
            r && void 0 === f && d && (s = g + (f = o + 1)),
            d && c
              ? ((y = m.push(u)), (b = v.push(h)))
              : y &&
                b &&
                (p
                  ? (d && m.push(u), c && v.push(h))
                  : (li(t, m, v, y, b), (y = b = 0), (m = []), (v = [])));
        li(t, m, v, y, b), t.closePath(), (t.fillStyle = a), t.fill();
      }
      var hi = {
          id: "filler",
          afterDatasetsUpdate: function(t, e) {
            var n,
              i,
              a,
              r,
              o = (t.data.datasets || []).length,
              s = e.propagate,
              l = [];
            for (i = 0; i < o; ++i)
              (r = null),
                (a = (n = t.getDatasetMeta(i)).dataset) &&
                  a._model &&
                  a instanceof yt.Line &&
                  (r = {
                    visible: t.isDatasetVisible(i),
                    fill: ii(a, i, o),
                    chart: t,
                    el: a
                  }),
                (n.$filler = r),
                l.push(r);
            for (i = 0; i < o; ++i)
              (r = l[i]) &&
                ((r.fill = ri(l, i, s)),
                (r.boundary = ai(r)),
                (r.mapper = oi(r)));
          },
          beforeDatasetsDraw: function(t) {
            var e,
              n,
              i,
              a,
              r,
              o,
              s,
              l = t._getSortedVisibleDatasetMetas(),
              u = t.ctx;
            for (n = l.length - 1; n >= 0; --n)
              (e = l[n].$filler) &&
                e.visible &&
                ((a = (i = e.el)._view),
                (r = i._children || []),
                (o = e.mapper),
                (s = a.backgroundColor || R.global.defaultColor),
                o &&
                  s &&
                  r.length &&
                  (j.canvas.clipArea(u, t.chartArea),
                  ui(u, r, o, a, s, i._loop),
                  j.canvas.unclipArea(u)));
          }
        },
        di = j.rtl.getRtlAdapter,
        ci = j.noop,
        fi = j.valueOrDefault;
      function gi(t, e) {
        return t.usePointStyle && t.boxWidth > e ? e : t.boxWidth;
      }
      R._set("global", {
        legend: {
          display: !0,
          position: "top",
          align: "center",
          fullWidth: !0,
          reverse: !1,
          weight: 1e3,
          onClick: function(t, e) {
            var n = e.datasetIndex,
              i = this.chart,
              a = i.getDatasetMeta(n);
            (a.hidden = null === a.hidden ? !i.data.datasets[n].hidden : null),
              i.update();
          },
          onHover: null,
          onLeave: null,
          labels: {
            boxWidth: 40,
            padding: 10,
            generateLabels: function(t) {
              var e = t.data.datasets,
                n = t.options.legend || {},
                i = n.labels && n.labels.usePointStyle;
              return t._getSortedDatasetMetas().map(function(n) {
                var a = n.controller.getStyle(i ? 0 : void 0);
                return {
                  text: e[n.index].label,
                  fillStyle: a.backgroundColor,
                  hidden: !t.isDatasetVisible(n.index),
                  lineCap: a.borderCapStyle,
                  lineDash: a.borderDash,
                  lineDashOffset: a.borderDashOffset,
                  lineJoin: a.borderJoinStyle,
                  lineWidth: a.borderWidth,
                  strokeStyle: a.borderColor,
                  pointStyle: a.pointStyle,
                  rotation: a.rotation,
                  datasetIndex: n.index
                };
              }, this);
            }
          }
        },
        legendCallback: function(t) {
          var e,
            n,
            i,
            a = document.createElement("ul"),
            r = t.data.datasets;
          for (
            a.setAttribute("class", t.id + "-legend"), e = 0, n = r.length;
            e < n;
            e++
          )
            ((i = a.appendChild(document.createElement("li"))).appendChild(
              document.createElement("span")
            ).style.backgroundColor = r[e].backgroundColor),
              r[e].label && i.appendChild(document.createTextNode(r[e].label));
          return a.outerHTML;
        }
      });
      var pi = G.extend({
        initialize: function(t) {
          j.extend(this, t),
            (this.legendHitBoxes = []),
            (this._hoveredItem = null),
            (this.doughnutMode = !1);
        },
        beforeUpdate: ci,
        update: function(t, e, n) {
          var i = this;
          return (
            i.beforeUpdate(),
            (i.maxWidth = t),
            (i.maxHeight = e),
            (i.margins = n),
            i.beforeSetDimensions(),
            i.setDimensions(),
            i.afterSetDimensions(),
            i.beforeBuildLabels(),
            i.buildLabels(),
            i.afterBuildLabels(),
            i.beforeFit(),
            i.fit(),
            i.afterFit(),
            i.afterUpdate(),
            i.minSize
          );
        },
        afterUpdate: ci,
        beforeSetDimensions: ci,
        setDimensions: function() {
          var t = this;
          t.isHorizontal()
            ? ((t.width = t.maxWidth), (t.left = 0), (t.right = t.width))
            : ((t.height = t.maxHeight), (t.top = 0), (t.bottom = t.height)),
            (t.paddingLeft = 0),
            (t.paddingTop = 0),
            (t.paddingRight = 0),
            (t.paddingBottom = 0),
            (t.minSize = { width: 0, height: 0 });
        },
        afterSetDimensions: ci,
        beforeBuildLabels: ci,
        buildLabels: function() {
          var t = this,
            e = t.options.labels || {},
            n = j.callback(e.generateLabels, [t.chart], t) || [];
          e.filter &&
            (n = n.filter(function(n) {
              return e.filter(n, t.chart.data);
            })),
            t.options.reverse && n.reverse(),
            (t.legendItems = n);
        },
        afterBuildLabels: ci,
        beforeFit: ci,
        fit: function() {
          var t = this,
            e = t.options,
            n = e.labels,
            i = e.display,
            a = t.ctx,
            r = j.options._parseFont(n),
            o = r.size,
            s = (t.legendHitBoxes = []),
            l = t.minSize,
            u = t.isHorizontal();
          if (
            (u
              ? ((l.width = t.maxWidth), (l.height = i ? 10 : 0))
              : ((l.width = i ? 10 : 0), (l.height = t.maxHeight)),
            i)
          ) {
            if (((a.font = r.string), u)) {
              var h = (t.lineWidths = [0]),
                d = 0;
              (a.textAlign = "left"),
                (a.textBaseline = "middle"),
                j.each(t.legendItems, function(t, e) {
                  var i = gi(n, o) + o / 2 + a.measureText(t.text).width;
                  (0 === e || h[h.length - 1] + i + 2 * n.padding > l.width) &&
                    ((d += o + n.padding), (h[h.length - (e > 0 ? 0 : 1)] = 0)),
                    (s[e] = { left: 0, top: 0, width: i, height: o }),
                    (h[h.length - 1] += i + n.padding);
                }),
                (l.height += d);
            } else {
              var c = n.padding,
                f = (t.columnWidths = []),
                g = (t.columnHeights = []),
                p = n.padding,
                m = 0,
                v = 0;
              j.each(t.legendItems, function(t, e) {
                var i = gi(n, o) + o / 2 + a.measureText(t.text).width;
                e > 0 &&
                  v + o + 2 * c > l.height &&
                  ((p += m + n.padding),
                  f.push(m),
                  g.push(v),
                  (m = 0),
                  (v = 0)),
                  (m = Math.max(m, i)),
                  (v += o + c),
                  (s[e] = { left: 0, top: 0, width: i, height: o });
              }),
                (p += m),
                f.push(m),
                g.push(v),
                (l.width += p);
            }
            (t.width = l.width), (t.height = l.height);
          } else t.width = l.width = t.height = l.height = 0;
        },
        afterFit: ci,
        isHorizontal: function() {
          return (
            "top" === this.options.position ||
            "bottom" === this.options.position
          );
        },
        draw: function() {
          var t = this,
            e = t.options,
            n = e.labels,
            i = R.global,
            a = i.defaultColor,
            r = i.elements.line,
            o = t.height,
            s = t.columnHeights,
            l = t.width,
            u = t.lineWidths;
          if (e.display) {
            var h,
              d = di(e.rtl, t.left, t.minSize.width),
              c = t.ctx,
              f = fi(n.fontColor, i.defaultFontColor),
              g = j.options._parseFont(n),
              p = g.size;
            (c.textAlign = d.textAlign("left")),
              (c.textBaseline = "middle"),
              (c.lineWidth = 0.5),
              (c.strokeStyle = f),
              (c.fillStyle = f),
              (c.font = g.string);
            var m = gi(n, p),
              v = t.legendHitBoxes,
              y = function(t, i) {
                switch (e.align) {
                  case "start":
                    return n.padding;
                  case "end":
                    return t - i;
                  default:
                    return (t - i + n.padding) / 2;
                }
              },
              b = t.isHorizontal();
            (h = b
              ? { x: t.left + y(l, u[0]), y: t.top + n.padding, line: 0 }
              : { x: t.left + n.padding, y: t.top + y(o, s[0]), line: 0 }),
              j.rtl.overrideTextDirection(t.ctx, e.textDirection);
            var _ = p + n.padding;
            j.each(t.legendItems, function(e, i) {
              var f = c.measureText(e.text).width,
                g = m + p / 2 + f,
                x = h.x,
                w = h.y;
              d.setWidth(t.minSize.width),
                b
                  ? i > 0 &&
                    x + g + n.padding > t.left + t.minSize.width &&
                    ((w = h.y += _),
                    h.line++,
                    (x = h.x = t.left + y(l, u[h.line])))
                  : i > 0 &&
                    w + _ > t.top + t.minSize.height &&
                    ((x = h.x = x + t.columnWidths[h.line] + n.padding),
                    h.line++,
                    (w = h.y = t.top + y(o, s[h.line])));
              var k = d.x(x);
              !(function(t, e, i) {
                if (!(isNaN(m) || m <= 0)) {
                  c.save();
                  var o = fi(i.lineWidth, r.borderWidth);
                  if (
                    ((c.fillStyle = fi(i.fillStyle, a)),
                    (c.lineCap = fi(i.lineCap, r.borderCapStyle)),
                    (c.lineDashOffset = fi(
                      i.lineDashOffset,
                      r.borderDashOffset
                    )),
                    (c.lineJoin = fi(i.lineJoin, r.borderJoinStyle)),
                    (c.lineWidth = o),
                    (c.strokeStyle = fi(i.strokeStyle, a)),
                    c.setLineDash &&
                      c.setLineDash(fi(i.lineDash, r.borderDash)),
                    n && n.usePointStyle)
                  ) {
                    var s = (m * Math.SQRT2) / 2,
                      l = d.xPlus(t, m / 2),
                      u = e + p / 2;
                    j.canvas.drawPoint(c, i.pointStyle, s, l, u, i.rotation);
                  } else
                    c.fillRect(d.leftForLtr(t, m), e, m, p),
                      0 !== o && c.strokeRect(d.leftForLtr(t, m), e, m, p);
                  c.restore();
                }
              })(k, w, e),
                (v[i].left = d.leftForLtr(k, v[i].width)),
                (v[i].top = w),
                (function(t, e, n, i) {
                  var a = p / 2,
                    r = d.xPlus(t, m + a),
                    o = e + a;
                  c.fillText(n.text, r, o),
                    n.hidden &&
                      (c.beginPath(),
                      (c.lineWidth = 2),
                      c.moveTo(r, o),
                      c.lineTo(d.xPlus(r, i), o),
                      c.stroke());
                })(k, w, e, f),
                b ? (h.x += g + n.padding) : (h.y += _);
            }),
              j.rtl.restoreTextDirection(t.ctx, e.textDirection);
          }
        },
        _getLegendItemAt: function(t, e) {
          var n,
            i,
            a,
            r = this;
          if (t >= r.left && t <= r.right && e >= r.top && e <= r.bottom)
            for (a = r.legendHitBoxes, n = 0; n < a.length; ++n)
              if (
                t >= (i = a[n]).left &&
                t <= i.left + i.width &&
                e >= i.top &&
                e <= i.top + i.height
              )
                return r.legendItems[n];
          return null;
        },
        handleEvent: function(t) {
          var e,
            n = this,
            i = n.options,
            a = "mouseup" === t.type ? "click" : t.type;
          if ("mousemove" === a) {
            if (!i.onHover && !i.onLeave) return;
          } else {
            if ("click" !== a) return;
            if (!i.onClick) return;
          }
          (e = n._getLegendItemAt(t.x, t.y)),
            "click" === a
              ? e && i.onClick && i.onClick.call(n, t.native, e)
              : (i.onLeave &&
                  e !== n._hoveredItem &&
                  (n._hoveredItem &&
                    i.onLeave.call(n, t.native, n._hoveredItem),
                  (n._hoveredItem = e)),
                i.onHover && e && i.onHover.call(n, t.native, e));
        }
      });
      function mi(t, e) {
        var n = new pi({ ctx: t.ctx, options: e, chart: t });
        le.configure(t, n, e), le.addBox(t, n), (t.legend = n);
      }
      var vi = {
          id: "legend",
          _element: pi,
          beforeInit: function(t) {
            var e = t.options.legend;
            e && mi(t, e);
          },
          beforeUpdate: function(t) {
            var e = t.options.legend,
              n = t.legend;
            e
              ? (j.mergeIf(e, R.global.legend),
                n ? (le.configure(t, n, e), (n.options = e)) : mi(t, e))
              : n && (le.removeBox(t, n), delete t.legend);
          },
          afterEvent: function(t, e) {
            var n = t.legend;
            n && n.handleEvent(e);
          }
        },
        yi = j.noop;
      R._set("global", {
        title: {
          display: !1,
          fontStyle: "bold",
          fullWidth: !0,
          padding: 10,
          position: "top",
          text: "",
          weight: 2e3
        }
      });
      var bi = G.extend({
        initialize: function(t) {
          j.extend(this, t), (this.legendHitBoxes = []);
        },
        beforeUpdate: yi,
        update: function(t, e, n) {
          var i = this;
          return (
            i.beforeUpdate(),
            (i.maxWidth = t),
            (i.maxHeight = e),
            (i.margins = n),
            i.beforeSetDimensions(),
            i.setDimensions(),
            i.afterSetDimensions(),
            i.beforeBuildLabels(),
            i.buildLabels(),
            i.afterBuildLabels(),
            i.beforeFit(),
            i.fit(),
            i.afterFit(),
            i.afterUpdate(),
            i.minSize
          );
        },
        afterUpdate: yi,
        beforeSetDimensions: yi,
        setDimensions: function() {
          var t = this;
          t.isHorizontal()
            ? ((t.width = t.maxWidth), (t.left = 0), (t.right = t.width))
            : ((t.height = t.maxHeight), (t.top = 0), (t.bottom = t.height)),
            (t.paddingLeft = 0),
            (t.paddingTop = 0),
            (t.paddingRight = 0),
            (t.paddingBottom = 0),
            (t.minSize = { width: 0, height: 0 });
        },
        afterSetDimensions: yi,
        beforeBuildLabels: yi,
        buildLabels: yi,
        afterBuildLabels: yi,
        beforeFit: yi,
        fit: function() {
          var t,
            e = this,
            n = e.options,
            i = (e.minSize = {}),
            a = e.isHorizontal();
          n.display
            ? ((t =
                (j.isArray(n.text) ? n.text.length : 1) *
                  j.options._parseFont(n).lineHeight +
                2 * n.padding),
              (e.width = i.width = a ? e.maxWidth : t),
              (e.height = i.height = a ? t : e.maxHeight))
            : (e.width = i.width = e.height = i.height = 0);
        },
        afterFit: yi,
        isHorizontal: function() {
          var t = this.options.position;
          return "top" === t || "bottom" === t;
        },
        draw: function() {
          var t = this,
            e = t.ctx,
            n = t.options;
          if (n.display) {
            var i,
              a,
              r,
              o = j.options._parseFont(n),
              s = o.lineHeight,
              l = s / 2 + n.padding,
              u = 0,
              h = t.top,
              d = t.left,
              c = t.bottom,
              f = t.right;
            (e.fillStyle = j.valueOrDefault(
              n.fontColor,
              R.global.defaultFontColor
            )),
              (e.font = o.string),
              t.isHorizontal()
                ? ((a = d + (f - d) / 2), (r = h + l), (i = f - d))
                : ((a = "left" === n.position ? d + l : f - l),
                  (r = h + (c - h) / 2),
                  (i = c - h),
                  (u = Math.PI * ("left" === n.position ? -0.5 : 0.5))),
              e.save(),
              e.translate(a, r),
              e.rotate(u),
              (e.textAlign = "center"),
              (e.textBaseline = "middle");
            var g = n.text;
            if (j.isArray(g))
              for (var p = 0, m = 0; m < g.length; ++m)
                e.fillText(g[m], 0, p, i), (p += s);
            else e.fillText(g, 0, 0, i);
            e.restore();
          }
        }
      });
      function _i(t, e) {
        var n = new bi({ ctx: t.ctx, options: e, chart: t });
        le.configure(t, n, e), le.addBox(t, n), (t.titleBlock = n);
      }
      var xi = {},
        wi = hi,
        ki = vi,
        Mi = {
          id: "title",
          _element: bi,
          beforeInit: function(t) {
            var e = t.options.title;
            e && _i(t, e);
          },
          beforeUpdate: function(t) {
            var e = t.options.title,
              n = t.titleBlock;
            e
              ? (j.mergeIf(e, R.global.title),
                n ? (le.configure(t, n, e), (n.options = e)) : _i(t, e))
              : n && (le.removeBox(t, n), delete t.titleBlock);
          }
        };
      for (var Si in ((xi.filler = wi),
      (xi.legend = ki),
      (xi.title = Mi),
      (Ue.helpers = j),
      (function() {
        function t(t, e, n) {
          var i;
          return (
            "string" == typeof t
              ? ((i = parseInt(t, 10)),
                -1 !== t.indexOf("%") && (i = (i / 100) * e.parentNode[n]))
              : (i = t),
            i
          );
        }
        function e(t) {
          return null != t && "none" !== t;
        }
        function n(n, i, a) {
          var r = document.defaultView,
            o = j._getParentNode(n),
            s = r.getComputedStyle(n)[i],
            l = r.getComputedStyle(o)[i],
            u = e(s),
            h = e(l),
            d = Number.POSITIVE_INFINITY;
          return u || h
            ? Math.min(u ? t(s, n, a) : d, h ? t(l, o, a) : d)
            : "none";
        }
        (j.where = function(t, e) {
          if (j.isArray(t) && Array.prototype.filter) return t.filter(e);
          var n = [];
          return (
            j.each(t, function(t) {
              e(t) && n.push(t);
            }),
            n
          );
        }),
          (j.findIndex = Array.prototype.findIndex
            ? function(t, e, n) {
                return t.findIndex(e, n);
              }
            : function(t, e, n) {
                n = void 0 === n ? t : n;
                for (var i = 0, a = t.length; i < a; ++i)
                  if (e.call(n, t[i], i, t)) return i;
                return -1;
              }),
          (j.findNextWhere = function(t, e, n) {
            j.isNullOrUndef(n) && (n = -1);
            for (var i = n + 1; i < t.length; i++) {
              var a = t[i];
              if (e(a)) return a;
            }
          }),
          (j.findPreviousWhere = function(t, e, n) {
            j.isNullOrUndef(n) && (n = t.length);
            for (var i = n - 1; i >= 0; i--) {
              var a = t[i];
              if (e(a)) return a;
            }
          }),
          (j.isNumber = function(t) {
            return !isNaN(parseFloat(t)) && isFinite(t);
          }),
          (j.almostEquals = function(t, e, n) {
            return Math.abs(t - e) < n;
          }),
          (j.almostWhole = function(t, e) {
            var n = Math.round(t);
            return n - e <= t && n + e >= t;
          }),
          (j.max = function(t) {
            return t.reduce(function(t, e) {
              return isNaN(e) ? t : Math.max(t, e);
            }, Number.NEGATIVE_INFINITY);
          }),
          (j.min = function(t) {
            return t.reduce(function(t, e) {
              return isNaN(e) ? t : Math.min(t, e);
            }, Number.POSITIVE_INFINITY);
          }),
          (j.sign = Math.sign
            ? function(t) {
                return Math.sign(t);
              }
            : function(t) {
                return 0 == (t = +t) || isNaN(t) ? t : t > 0 ? 1 : -1;
              }),
          (j.toRadians = function(t) {
            return t * (Math.PI / 180);
          }),
          (j.toDegrees = function(t) {
            return t * (180 / Math.PI);
          }),
          (j._decimalPlaces = function(t) {
            if (j.isFinite(t)) {
              for (var e = 1, n = 0; Math.round(t * e) / e !== t; )
                (e *= 10), n++;
              return n;
            }
          }),
          (j.getAngleFromPoint = function(t, e) {
            var n = e.x - t.x,
              i = e.y - t.y,
              a = Math.sqrt(n * n + i * i),
              r = Math.atan2(i, n);
            return (
              r < -0.5 * Math.PI && (r += 2 * Math.PI),
              { angle: r, distance: a }
            );
          }),
          (j.distanceBetweenPoints = function(t, e) {
            return Math.sqrt(Math.pow(e.x - t.x, 2) + Math.pow(e.y - t.y, 2));
          }),
          (j.aliasPixel = function(t) {
            return t % 2 == 0 ? 0 : 0.5;
          }),
          (j._alignPixel = function(t, e, n) {
            var i = t.currentDevicePixelRatio,
              a = n / 2;
            return Math.round((e - a) * i) / i + a;
          }),
          (j.splineCurve = function(t, e, n, i) {
            var a = t.skip ? e : t,
              r = e,
              o = n.skip ? e : n,
              s = Math.sqrt(Math.pow(r.x - a.x, 2) + Math.pow(r.y - a.y, 2)),
              l = Math.sqrt(Math.pow(o.x - r.x, 2) + Math.pow(o.y - r.y, 2)),
              u = s / (s + l),
              h = l / (s + l),
              d = i * (u = isNaN(u) ? 0 : u),
              c = i * (h = isNaN(h) ? 0 : h);
            return {
              previous: { x: r.x - d * (o.x - a.x), y: r.y - d * (o.y - a.y) },
              next: { x: r.x + c * (o.x - a.x), y: r.y + c * (o.y - a.y) }
            };
          }),
          (j.EPSILON = Number.EPSILON || 1e-14),
          (j.splineCurveMonotone = function(t) {
            var e,
              n,
              i,
              a,
              r,
              o,
              s,
              l,
              u,
              h = (t || []).map(function(t) {
                return { model: t._model, deltaK: 0, mK: 0 };
              }),
              d = h.length;
            for (e = 0; e < d; ++e)
              if (!(i = h[e]).model.skip) {
                if (
                  ((n = e > 0 ? h[e - 1] : null),
                  (a = e < d - 1 ? h[e + 1] : null) && !a.model.skip)
                ) {
                  var c = a.model.x - i.model.x;
                  i.deltaK = 0 !== c ? (a.model.y - i.model.y) / c : 0;
                }
                !n || n.model.skip
                  ? (i.mK = i.deltaK)
                  : !a || a.model.skip
                  ? (i.mK = n.deltaK)
                  : this.sign(n.deltaK) !== this.sign(i.deltaK)
                  ? (i.mK = 0)
                  : (i.mK = (n.deltaK + i.deltaK) / 2);
              }
            for (e = 0; e < d - 1; ++e)
              (i = h[e]),
                (a = h[e + 1]),
                i.model.skip ||
                  a.model.skip ||
                  (j.almostEquals(i.deltaK, 0, this.EPSILON)
                    ? (i.mK = a.mK = 0)
                    : ((r = i.mK / i.deltaK),
                      (o = a.mK / i.deltaK),
                      (l = Math.pow(r, 2) + Math.pow(o, 2)) <= 9 ||
                        ((s = 3 / Math.sqrt(l)),
                        (i.mK = r * s * i.deltaK),
                        (a.mK = o * s * i.deltaK))));
            for (e = 0; e < d; ++e)
              (i = h[e]).model.skip ||
                ((n = e > 0 ? h[e - 1] : null),
                (a = e < d - 1 ? h[e + 1] : null),
                n &&
                  !n.model.skip &&
                  ((u = (i.model.x - n.model.x) / 3),
                  (i.model.controlPointPreviousX = i.model.x - u),
                  (i.model.controlPointPreviousY = i.model.y - u * i.mK)),
                a &&
                  !a.model.skip &&
                  ((u = (a.model.x - i.model.x) / 3),
                  (i.model.controlPointNextX = i.model.x + u),
                  (i.model.controlPointNextY = i.model.y + u * i.mK)));
          }),
          (j.nextItem = function(t, e, n) {
            return n
              ? e >= t.length - 1
                ? t[0]
                : t[e + 1]
              : e >= t.length - 1
              ? t[t.length - 1]
              : t[e + 1];
          }),
          (j.previousItem = function(t, e, n) {
            return n
              ? e <= 0
                ? t[t.length - 1]
                : t[e - 1]
              : e <= 0
              ? t[0]
              : t[e - 1];
          }),
          (j.niceNum = function(t, e) {
            var n = Math.floor(j.log10(t)),
              i = t / Math.pow(10, n);
            return (
              (e
                ? i < 1.5
                  ? 1
                  : i < 3
                  ? 2
                  : i < 7
                  ? 5
                  : 10
                : i <= 1
                ? 1
                : i <= 2
                ? 2
                : i <= 5
                ? 5
                : 10) * Math.pow(10, n)
            );
          }),
          (j.requestAnimFrame =
            "undefined" == typeof window
              ? function(t) {
                  t();
                }
              : window.requestAnimationFrame ||
                window.webkitRequestAnimationFrame ||
                window.mozRequestAnimationFrame ||
                window.oRequestAnimationFrame ||
                window.msRequestAnimationFrame ||
                function(t) {
                  return window.setTimeout(t, 1e3 / 60);
                }),
          (j.getRelativePosition = function(t, e) {
            var n,
              i,
              a = t.originalEvent || t,
              r = t.target || t.srcElement,
              o = r.getBoundingClientRect(),
              s = a.touches;
            s && s.length > 0
              ? ((n = s[0].clientX), (i = s[0].clientY))
              : ((n = a.clientX), (i = a.clientY));
            var l = parseFloat(j.getStyle(r, "padding-left")),
              u = parseFloat(j.getStyle(r, "padding-top")),
              h = parseFloat(j.getStyle(r, "padding-right")),
              d = parseFloat(j.getStyle(r, "padding-bottom")),
              c = o.right - o.left - l - h,
              f = o.bottom - o.top - u - d;
            return {
              x: (n = Math.round(
                (((n - o.left - l) / c) * r.width) / e.currentDevicePixelRatio
              )),
              y: (i = Math.round(
                (((i - o.top - u) / f) * r.height) / e.currentDevicePixelRatio
              ))
            };
          }),
          (j.getConstraintWidth = function(t) {
            return n(t, "max-width", "clientWidth");
          }),
          (j.getConstraintHeight = function(t) {
            return n(t, "max-height", "clientHeight");
          }),
          (j._calculatePadding = function(t, e, n) {
            return (e = j.getStyle(t, e)).indexOf("%") > -1
              ? (n * parseInt(e, 10)) / 100
              : parseInt(e, 10);
          }),
          (j._getParentNode = function(t) {
            var e = t.parentNode;
            return (
              e && "[object ShadowRoot]" === e.toString() && (e = e.host), e
            );
          }),
          (j.getMaximumWidth = function(t) {
            var e = j._getParentNode(t);
            if (!e) return t.clientWidth;
            var n = e.clientWidth,
              i =
                n -
                j._calculatePadding(e, "padding-left", n) -
                j._calculatePadding(e, "padding-right", n),
              a = j.getConstraintWidth(t);
            return isNaN(a) ? i : Math.min(i, a);
          }),
          (j.getMaximumHeight = function(t) {
            var e = j._getParentNode(t);
            if (!e) return t.clientHeight;
            var n = e.clientHeight,
              i =
                n -
                j._calculatePadding(e, "padding-top", n) -
                j._calculatePadding(e, "padding-bottom", n),
              a = j.getConstraintHeight(t);
            return isNaN(a) ? i : Math.min(i, a);
          }),
          (j.getStyle = function(t, e) {
            return t.currentStyle
              ? t.currentStyle[e]
              : document.defaultView
                  .getComputedStyle(t, null)
                  .getPropertyValue(e);
          }),
          (j.retinaScale = function(t, e) {
            var n = (t.currentDevicePixelRatio =
              e ||
              ("undefined" != typeof window && window.devicePixelRatio) ||
              1);
            if (1 !== n) {
              var i = t.canvas,
                a = t.height,
                r = t.width;
              (i.height = a * n),
                (i.width = r * n),
                t.ctx.scale(n, n),
                i.style.height ||
                  i.style.width ||
                  ((i.style.height = a + "px"), (i.style.width = r + "px"));
            }
          }),
          (j.fontString = function(t, e, n) {
            return e + " " + t + "px " + n;
          }),
          (j.longestText = function(t, e, n, i) {
            var a = ((i = i || {}).data = i.data || {}),
              r = (i.garbageCollect = i.garbageCollect || []);
            i.font !== e &&
              ((a = i.data = {}), (r = i.garbageCollect = []), (i.font = e)),
              (t.font = e);
            var o,
              s,
              l,
              u,
              h,
              d = 0,
              c = n.length;
            for (o = 0; o < c; o++)
              if (null != (u = n[o]) && !0 !== j.isArray(u))
                d = j.measureText(t, a, r, d, u);
              else if (j.isArray(u))
                for (s = 0, l = u.length; s < l; s++)
                  null == (h = u[s]) ||
                    j.isArray(h) ||
                    (d = j.measureText(t, a, r, d, h));
            var f = r.length / 2;
            if (f > n.length) {
              for (o = 0; o < f; o++) delete a[r[o]];
              r.splice(0, f);
            }
            return d;
          }),
          (j.measureText = function(t, e, n, i, a) {
            var r = e[a];
            return (
              r || ((r = e[a] = t.measureText(a).width), n.push(a)),
              r > i && (i = r),
              i
            );
          }),
          (j.numberOfLabelLines = function(t) {
            var e = 1;
            return (
              j.each(t, function(t) {
                j.isArray(t) && t.length > e && (e = t.length);
              }),
              e
            );
          }),
          (j.color = w
            ? function(t) {
                return (
                  t instanceof CanvasGradient && (t = R.global.defaultColor),
                  w(t)
                );
              }
            : function(t) {
                return console.error("Color.js not found!"), t;
              }),
          (j.getHoverColor = function(t) {
            return t instanceof CanvasPattern || t instanceof CanvasGradient
              ? t
              : j
                  .color(t)
                  .saturate(0.5)
                  .darken(0.1)
                  .rgbString();
          });
      })(),
      (Ue._adapters = Ze),
      (Ue.Animation = $),
      (Ue.animationService = X),
      (Ue.controllers = Ut),
      (Ue.DatasetController = et),
      (Ue.defaults = R),
      (Ue.Element = G),
      (Ue.elements = yt),
      (Ue.Interaction = Jt),
      (Ue.layouts = le),
      (Ue.platform = Me),
      (Ue.plugins = Se),
      (Ue.Scale = un),
      (Ue.scaleService = De),
      (Ue.Ticks = $e),
      (Ue.Tooltip = Ne),
      Ue.helpers.each(ti, function(t, e) {
        Ue.scaleService.registerScaleType(e, t, t._defaults);
      }),
      xi))
        xi.hasOwnProperty(Si) && Ue.plugins.register(xi[Si]);
      Ue.platform.initialize();
      var Di = Ue;
      return (
        "undefined" != typeof window && (window.Chart = Ue),
        (Ue.Chart = Ue),
        (Ue.Legend = xi.legend._element),
        (Ue.Title = xi.title._element),
        (Ue.pluginService = Ue.plugins),
        (Ue.PluginBase = Ue.Element.extend({})),
        (Ue.canvasHelpers = Ue.helpers.canvas),
        (Ue.layoutService = Ue.layouts),
        (Ue.LinearScaleBase = gn),
        Ue.helpers.each(
          [
            "Bar",
            "Bubble",
            "Doughnut",
            "Line",
            "PolarArea",
            "Radar",
            "Scatter"
          ],
          function(t) {
            Ue[t] = function(e, n) {
              return new Ue(
                e,
                Ue.helpers.merge(n || {}, {
                  type: t.charAt(0).toLowerCase() + t.slice(1)
                })
              );
            };
          }
        ),
        Di
      );
    }),
    "object" == typeof a.exports
      ? (a.exports = i(
          (function() {
            try {
              return e;
            } catch (t) {}
          })()
        ))
      : "function" == typeof define && define.amd
      ? define(["require"], function(t) {
          return i(
            (function() {
              try {
                return e;
              } catch (t) {}
            })()
          );
        })
      : ((n = n || self).Chart = i(n.moment)),
    (a = a.exports);
  function r(t, e, n) {
    var i,
      a,
      r = t.length,
      o = e.arrayArgs.length,
      s = e.indexArgs.length > 0,
      l = [],
      u = [],
      h = 0,
      d = 0;
    for (i = 0; i < r; ++i) u.push(["i", i, "=0"].join(""));
    for (a = 0; a < o; ++a)
      for (i = 0; i < r; ++i)
        (d = h),
          (h = t[i]),
          0 === i
            ? u.push(["d", a, "s", i, "=t", a, "p", h].join(""))
            : u.push(
                [
                  "d",
                  a,
                  "s",
                  i,
                  "=(t",
                  a,
                  "p",
                  h,
                  "-s",
                  d,
                  "*t",
                  a,
                  "p",
                  d,
                  ")"
                ].join("")
              );
    for (u.length > 0 && l.push("var " + u.join(",")), i = r - 1; i >= 0; --i)
      (h = t[i]),
        l.push(["for(i", i, "=0;i", i, "<s", h, ";++i", i, "){"].join(""));
    for (l.push(n), i = 0; i < r; ++i) {
      for (d = h, h = t[i], a = 0; a < o; ++a)
        l.push(["p", a, "+=d", a, "s", i].join(""));
      s &&
        (i > 0 && l.push(["index[", d, "]-=s", d].join("")),
        l.push(["++index[", h, "]"].join(""))),
        l.push("}");
    }
    return l.join("\n");
  }
  function o(t, e, n) {
    for (var i = t.body, a = [], r = [], o = 0; o < t.args.length; ++o) {
      var s = t.args[o];
      if (!(s.count <= 0)) {
        var l = new RegExp(s.name, "g"),
          u = "",
          h = e.arrayArgs.indexOf(o);
        switch (e.argTypes[o]) {
          case "offset":
            var d = e.offsetArgIndex.indexOf(o);
            (h = e.offsetArgs[d].array), (u = "+q" + d);
          case "array":
            u = "p" + h + u;
            var c = "l" + o,
              f = "a" + h;
            if (0 === e.arrayBlockIndices[h])
              1 === s.count
                ? "generic" === n[h]
                  ? s.lvalue
                    ? (a.push(["var ", c, "=", f, ".get(", u, ")"].join("")),
                      (i = i.replace(l, c)),
                      r.push([f, ".set(", u, ",", c, ")"].join("")))
                    : (i = i.replace(l, [f, ".get(", u, ")"].join("")))
                  : (i = i.replace(l, [f, "[", u, "]"].join("")))
                : "generic" === n[h]
                ? (a.push(["var ", c, "=", f, ".get(", u, ")"].join("")),
                  (i = i.replace(l, c)),
                  s.lvalue && r.push([f, ".set(", u, ",", c, ")"].join("")))
                : (a.push(["var ", c, "=", f, "[", u, "]"].join("")),
                  (i = i.replace(l, c)),
                  s.lvalue && r.push([f, "[", u, "]=", c].join("")));
            else {
              for (
                var g = [s.name], p = [u], m = 0;
                m < Math.abs(e.arrayBlockIndices[h]);
                m++
              )
                g.push("\\s*\\[([^\\]]+)\\]"),
                  p.push("$" + (m + 1) + "*t" + h + "b" + m);
              if (
                ((l = new RegExp(g.join(""), "g")),
                (u = p.join("+")),
                "generic" === n[h])
              )
                throw new Error(
                  "cwise: Generic arrays not supported in combination with blocks!"
                );
              i = i.replace(l, [f, "[", u, "]"].join(""));
            }
            break;
          case "scalar":
            i = i.replace(l, "Y" + e.scalarArgs.indexOf(o));
            break;
          case "index":
            i = i.replace(l, "index");
            break;
          case "shape":
            i = i.replace(l, "shape");
        }
      }
    }
    return [a.join("\n"), i, r.join("\n")].join("\n").trim();
  }
  function s(t) {
    for (var e = new Array(t.length), n = !0, i = 0; i < t.length; ++i) {
      var a = t[i],
        r = a.match(/\d+/);
      (r = r ? r[0] : ""),
        0 === a.charAt(0)
          ? (e[i] = "u" + a.charAt(1) + r)
          : (e[i] = a.charAt(0) + r),
        i > 0 && (n = n && e[i] === e[i - 1]);
    }
    return n ? e[0] : e.join("");
  }
  var l = function(t) {
    var e = ["'use strict'", "var CACHED={}"],
      n = [],
      i = t.funcName + "_cwise_thunk";
    e.push(["return function ", i, "(", t.shimArgs.join(","), "){"].join(""));
    for (
      var a = [],
        l = [],
        u = [
          [
            "array",
            t.arrayArgs[0],
            ".shape.slice(",
            Math.max(0, t.arrayBlockIndices[0]),
            t.arrayBlockIndices[0] < 0
              ? "," + t.arrayBlockIndices[0] + ")"
              : ")"
          ].join("")
        ],
        h = [],
        d = [],
        c = 0;
      c < t.arrayArgs.length;
      ++c
    ) {
      var f = t.arrayArgs[c];
      n.push(
        ["t", f, "=array", f, ".dtype,", "r", f, "=array", f, ".order"].join("")
      ),
        a.push("t" + f),
        a.push("r" + f),
        l.push("t" + f),
        l.push("r" + f + ".join()"),
        u.push("array" + f + ".data"),
        u.push("array" + f + ".stride"),
        u.push("array" + f + ".offset|0"),
        c > 0 &&
          (h.push(
            "array" +
              t.arrayArgs[0] +
              ".shape.length===array" +
              f +
              ".shape.length+" +
              (Math.abs(t.arrayBlockIndices[0]) -
                Math.abs(t.arrayBlockIndices[c]))
          ),
          d.push(
            "array" +
              t.arrayArgs[0] +
              ".shape[shapeIndex+" +
              Math.max(0, t.arrayBlockIndices[0]) +
              "]===array" +
              f +
              ".shape[shapeIndex+" +
              Math.max(0, t.arrayBlockIndices[c]) +
              "]"
          ));
    }
    for (
      t.arrayArgs.length > 1 &&
        (e.push(
          "if (!(" +
            h.join(" && ") +
            ")) throw new Error('cwise: Arrays do not all have the same dimensionality!')"
        ),
        e.push(
          "for(var shapeIndex=array" +
            t.arrayArgs[0] +
            ".shape.length-" +
            Math.abs(t.arrayBlockIndices[0]) +
            "; shapeIndex--\x3e0;) {"
        ),
        e.push(
          "if (!(" +
            d.join(" && ") +
            ")) throw new Error('cwise: Arrays do not all have the same shape!')"
        ),
        e.push("}")),
        c = 0;
      c < t.scalarArgs.length;
      ++c
    )
      u.push("scalar" + t.scalarArgs[c]);
    return (
      n.push(["type=[", l.join(","), "].join()"].join("")),
      n.push("proc=CACHED[type]"),
      e.push("var " + n.join(",")),
      e.push(
        [
          "if(!proc){",
          "CACHED[type]=proc=compile([",
          a.join(","),
          "])}",
          "return proc(",
          u.join(","),
          ")}"
        ].join("")
      ),
      t.debug &&
        console.log("-----Generated thunk:\n" + e.join("\n") + "\n----------"),
      new Function("compile", e.join("\n"))(
        function(t, e) {
          for (
            var n = (e[1].length - Math.abs(t.arrayBlockIndices[0])) | 0,
              i = new Array(t.arrayArgs.length),
              a = new Array(t.arrayArgs.length),
              l = 0;
            l < t.arrayArgs.length;
            ++l
          )
            (a[l] = e[2 * l]), (i[l] = e[2 * l + 1]);
          var u = [],
            h = [],
            d = [],
            c = [],
            f = [];
          for (l = 0; l < t.arrayArgs.length; ++l) {
            t.arrayBlockIndices[l] < 0
              ? (d.push(0),
                c.push(n),
                u.push(n),
                h.push(n + t.arrayBlockIndices[l]))
              : (d.push(t.arrayBlockIndices[l]),
                c.push(t.arrayBlockIndices[l] + n),
                u.push(0),
                h.push(t.arrayBlockIndices[l]));
            for (var g = [], p = 0; p < i[l].length; p++)
              d[l] <= i[l][p] && i[l][p] < c[l] && g.push(i[l][p] - d[l]);
            f.push(g);
          }
          var m = ["SS"],
            v = ["'use strict'"],
            y = [];
          for (p = 0; p < n; ++p) y.push(["s", p, "=SS[", p, "]"].join(""));
          for (l = 0; l < t.arrayArgs.length; ++l) {
            for (
              m.push("a" + l), m.push("t" + l), m.push("p" + l), p = 0;
              p < n;
              ++p
            )
              y.push(["t", l, "p", p, "=t", l, "[", d[l] + p, "]"].join(""));
            for (p = 0; p < Math.abs(t.arrayBlockIndices[l]); ++p)
              y.push(["t", l, "b", p, "=t", l, "[", u[l] + p, "]"].join(""));
          }
          for (l = 0; l < t.scalarArgs.length; ++l) m.push("Y" + l);
          if (
            (t.shapeArgs.length > 0 && y.push("shape=SS.slice(0)"),
            t.indexArgs.length > 0)
          ) {
            var b = new Array(n);
            for (l = 0; l < n; ++l) b[l] = "0";
            y.push(["index=[", b.join(","), "]"].join(""));
          }
          for (l = 0; l < t.offsetArgs.length; ++l) {
            var _ = t.offsetArgs[l],
              x = [];
            for (p = 0; p < _.offset.length; ++p)
              0 !== _.offset[p] &&
                (1 === _.offset[p]
                  ? x.push(["t", _.array, "p", p].join(""))
                  : x.push([_.offset[p], "*t", _.array, "p", p].join("")));
            0 === x.length
              ? y.push("q" + l + "=0")
              : y.push(["q", l, "=", x.join("+")].join(""));
          }
          var w,
            k,
            M,
            S =
              0 ===
              (w = []
                .concat(t.pre.thisVars)
                .concat(t.body.thisVars)
                .concat(t.post.thisVars)).length
                ? w
                : k
                ? (M || w.sort(k),
                  (function(t, e) {
                    for (
                      var n = 1, i = t.length, a = t[0], r = t[0], o = 1;
                      o < i;
                      ++o
                    )
                      if (((r = a), e((a = t[o]), r))) {
                        if (o === n) {
                          n++;
                          continue;
                        }
                        t[n++] = a;
                      }
                    return (t.length = n), t;
                  })(w, k))
                : (M || w.sort(),
                  (function(t) {
                    for (
                      var e = 1, n = t.length, i = t[0], a = t[0], r = 1;
                      r < n;
                      ++r, a = i
                    )
                      if (((a = i), (i = t[r]) !== a)) {
                        if (r === e) {
                          e++;
                          continue;
                        }
                        t[e++] = i;
                      }
                    return (t.length = e), t;
                  })(w));
          for (
            (y = y.concat(S)).length > 0 && v.push("var " + y.join(",")), l = 0;
            l < t.arrayArgs.length;
            ++l
          )
            v.push("p" + l + "|=0");
          t.pre.body.length > 3 && v.push(o(t.pre, t, a));
          var D = o(t.body, t, a),
            C = (function(t) {
              for (var e = 0, n = t[0].length; e < n; ) {
                for (var i = 1; i < t.length; ++i)
                  if (t[i][e] !== t[0][e]) return e;
                ++e;
              }
              return e;
            })(f);
          C < n
            ? v.push(
                (function(t, e, n, i) {
                  for (
                    var a = e.length,
                      o = n.arrayArgs.length,
                      s = n.blockSize,
                      l = n.indexArgs.length > 0,
                      u = [],
                      h = 0;
                    h < o;
                    ++h
                  )
                    u.push(["var offset", h, "=p", h].join(""));
                  for (h = t; h < a; ++h)
                    u.push(
                      [
                        "for(var j" + h + "=SS[",
                        e[h],
                        "]|0;j",
                        h,
                        ">0;){"
                      ].join("")
                    ),
                      u.push(["if(j", h, "<", s, "){"].join("")),
                      u.push(["s", e[h], "=j", h].join("")),
                      u.push(["j", h, "=0"].join("")),
                      u.push(["}else{s", e[h], "=", s].join("")),
                      u.push(["j", h, "-=", s, "}"].join("")),
                      l && u.push(["index[", e[h], "]=j", h].join(""));
                  for (h = 0; h < o; ++h) {
                    for (var d = ["offset" + h], c = t; c < a; ++c)
                      d.push(["j", c, "*t", h, "p", e[c]].join(""));
                    u.push(["p", h, "=(", d.join("+"), ")"].join(""));
                  }
                  for (u.push(r(e, n, i)), h = t; h < a; ++h) u.push("}");
                  return u.join("\n");
                })(C, f[0], t, D)
              )
            : v.push(r(f[0], t, D)),
            t.post.body.length > 3 && v.push(o(t.post, t, a)),
            t.debug &&
              console.log(
                "-----Generated cwise routine for ",
                e,
                ":\n" + v.join("\n") + "\n----------"
              );
          var A = [
            t.funcName || "unnamed",
            "_cwise_loop_",
            i[0].join("s"),
            "m",
            C,
            s(a)
          ].join("");
          return new Function(
            [
              "function ",
              A,
              "(",
              m.join(","),
              "){",
              v.join("\n"),
              "} return ",
              A
            ].join("")
          )();
        }.bind(void 0, t)
      )
    );
  };
  function u() {
    (this.argTypes = []),
      (this.shimArgs = []),
      (this.arrayArgs = []),
      (this.arrayBlockIndices = []),
      (this.scalarArgs = []),
      (this.offsetArgs = []),
      (this.offsetArgIndex = []),
      (this.indexArgs = []),
      (this.shapeArgs = []),
      (this.funcName = ""),
      (this.pre = null),
      (this.body = null),
      (this.post = null),
      (this.debug = !1);
  }
  var h = function(t) {
      var e = new u();
      (e.pre = t.pre), (e.body = t.body), (e.post = t.post);
      var n = t.args.slice(0);
      e.argTypes = n;
      for (var i = 0; i < n.length; ++i) {
        var a = n[i];
        if ("array" === a || ("object" == typeof a && a.blockIndices)) {
          if (
            ((e.argTypes[i] = "array"),
            e.arrayArgs.push(i),
            e.arrayBlockIndices.push(a.blockIndices ? a.blockIndices : 0),
            e.shimArgs.push("array" + i),
            i < e.pre.args.length && e.pre.args[i].count > 0)
          )
            throw new Error("cwise: pre() block may not reference array args");
          if (i < e.post.args.length && e.post.args[i].count > 0)
            throw new Error("cwise: post() block may not reference array args");
        } else if ("scalar" === a)
          e.scalarArgs.push(i), e.shimArgs.push("scalar" + i);
        else if ("index" === a) {
          if (
            (e.indexArgs.push(i),
            i < e.pre.args.length && e.pre.args[i].count > 0)
          )
            throw new Error("cwise: pre() block may not reference array index");
          if (i < e.body.args.length && e.body.args[i].lvalue)
            throw new Error("cwise: body() block may not write to array index");
          if (i < e.post.args.length && e.post.args[i].count > 0)
            throw new Error(
              "cwise: post() block may not reference array index"
            );
        } else if ("shape" === a) {
          if (
            (e.shapeArgs.push(i), i < e.pre.args.length && e.pre.args[i].lvalue)
          )
            throw new Error("cwise: pre() block may not write to array shape");
          if (i < e.body.args.length && e.body.args[i].lvalue)
            throw new Error("cwise: body() block may not write to array shape");
          if (i < e.post.args.length && e.post.args[i].lvalue)
            throw new Error("cwise: post() block may not write to array shape");
        } else {
          if ("object" != typeof a || !a.offset)
            throw new Error("cwise: Unknown argument type " + n[i]);
          (e.argTypes[i] = "offset"),
            e.offsetArgs.push({ array: a.array, offset: a.offset }),
            e.offsetArgIndex.push(i);
        }
      }
      if (e.arrayArgs.length <= 0)
        throw new Error("cwise: No array arguments specified");
      if (e.pre.args.length > n.length)
        throw new Error("cwise: Too many arguments in pre() block");
      if (e.body.args.length > n.length)
        throw new Error("cwise: Too many arguments in body() block");
      if (e.post.args.length > n.length)
        throw new Error("cwise: Too many arguments in post() block");
      return (
        (e.debug = !!t.printCode || !!t.debug),
        (e.funcName = t.funcName || "cwise"),
        (e.blockSize = t.blockSize || 64),
        l(e)
      );
    },
    d = h,
    c = d({
      args: ["array", "scalar", "index"],
      pre: { body: "{}", args: [], thisVars: [], localVars: [] },
      body: {
        body:
          "{var _inline_1_a,_inline_1_e=_inline_1_arg1_;for(_inline_1_a=0;_inline_1_a<_inline_1_arg2_.length-1;++_inline_1_a)_inline_1_e=_inline_1_e[_inline_1_arg2_[_inline_1_a]];_inline_1_e[_inline_1_arg2_[_inline_1_arg2_.length-1]]=_inline_1_arg0_}",
        args: [
          { name: "_inline_1_arg0_", lvalue: !1, rvalue: !0, count: 1 },
          { name: "_inline_1_arg1_", lvalue: !1, rvalue: !0, count: 1 },
          { name: "_inline_1_arg2_", lvalue: !1, rvalue: !0, count: 4 }
        ],
        thisVars: [],
        localVars: ["_inline_1_a", "_inline_1_e"]
      },
      post: { body: "{}", args: [], thisVars: [], localVars: [] },
      debug: !1,
      funcName: "unpackCwise",
      blockSize: 64
    }),
    f = {
      unpackArray: function(t) {
        var e = (function t(e, n) {
          var i = 0 | e[(n = n || 0)];
          if (i <= 0) return [];
          var a,
            r = new Array(i);
          if (n === e.length - 1) for (a = 0; a < i; ++a) r[a] = 0;
          else for (a = 0; a < i; ++a) r[a] = t(e, n + 1);
          return r;
        })(t.shape, 0);
        return c(t, e), e;
      },
      range: function(t) {
        return Array.apply(null, Array(t)).map(function(t, e) {
          return e;
        });
      }
    },
    g = function(t) {
      for (var e = new Array(t), n = 0; n < t; ++n) e[n] = n;
      return e;
    };
  function p(t) {
    return (
      !!t.constructor &&
      "function" == typeof t.constructor.isBuffer &&
      t.constructor.isBuffer(t)
    );
  }
  var m = "undefined" != typeof Float64Array;
  function v(t, e) {
    return t[0] - e[0];
  }
  function y() {
    var t,
      e = this.stride,
      n = new Array(e.length);
    for (t = 0; t < n.length; ++t) n[t] = [Math.abs(e[t]), t];
    n.sort(v);
    var i = new Array(n.length);
    for (t = 0; t < i.length; ++t) i[t] = n[t][1];
    return i;
  }
  function b(t, e) {
    var n = ["View", e, "d", t].join("");
    e < 0 && (n = "View_Nil" + t);
    var i = "generic" === t;
    if (-1 === e) {
      var a =
        "function " +
        n +
        "(a){this.data=a;};var proto=" +
        n +
        ".prototype;proto.dtype='" +
        t +
        "';proto.index=function(){return -1};proto.size=0;proto.dimension=-1;proto.shape=proto.stride=proto.order=[];proto.lo=proto.hi=proto.transpose=proto.step=function(){return new " +
        n +
        "(this.data);};proto.get=proto.set=function(){};proto.pick=function(){return null};return function construct_" +
        n +
        "(a){return new " +
        n +
        "(a);}";
      return new Function(a)();
    }
    if (0 === e)
      return (
        (a =
          "function " +
          n +
          "(a,d) {this.data = a;this.offset = d};var proto=" +
          n +
          ".prototype;proto.dtype='" +
          t +
          "';proto.index=function(){return this.offset};proto.dimension=0;proto.size=1;proto.shape=proto.stride=proto.order=[];proto.lo=proto.hi=proto.transpose=proto.step=function " +
          n +
          "_copy() {return new " +
          n +
          "(this.data,this.offset)};proto.pick=function " +
          n +
          "_pick(){return TrivialArray(this.data);};proto.valueOf=proto.get=function " +
          n +
          "_get(){return " +
          (i ? "this.data.get(this.offset)" : "this.data[this.offset]") +
          "};proto.set=function " +
          n +
          "_set(v){return " +
          (i ? "this.data.set(this.offset,v)" : "this.data[this.offset]=v") +
          "};return function construct_" +
          n +
          "(a,b,c,d){return new " +
          n +
          "(a,d)}"),
        new Function("TrivialArray", a)(_[t][0])
      );
    a = ["'use strict'"];
    var r = g(e),
      o = r.map(function(t) {
        return "i" + t;
      }),
      s =
        "this.offset+" +
        r
          .map(function(t) {
            return "this.stride[" + t + "]*i" + t;
          })
          .join("+"),
      l = r
        .map(function(t) {
          return "b" + t;
        })
        .join(","),
      u = r
        .map(function(t) {
          return "c" + t;
        })
        .join(",");
    a.push(
      "function " + n + "(a," + l + "," + u + ",d){this.data=a",
      "this.shape=[" + l + "]",
      "this.stride=[" + u + "]",
      "this.offset=d|0}",
      "var proto=" + n + ".prototype",
      "proto.dtype='" + t + "'",
      "proto.dimension=" + e
    ),
      a.push(
        "Object.defineProperty(proto,'size',{get:function " +
          n +
          "_size(){return " +
          r
            .map(function(t) {
              return "this.shape[" + t + "]";
            })
            .join("*"),
        "}})"
      ),
      1 === e
        ? a.push("proto.order=[0]")
        : (a.push("Object.defineProperty(proto,'order',{get:"),
          e < 4
            ? (a.push("function " + n + "_order(){"),
              2 === e
                ? a.push(
                    "return (Math.abs(this.stride[0])>Math.abs(this.stride[1]))?[1,0]:[0,1]}})"
                  )
                : 3 === e &&
                  a.push(
                    "var s0=Math.abs(this.stride[0]),s1=Math.abs(this.stride[1]),s2=Math.abs(this.stride[2]);if(s0>s1){if(s1>s2){return [2,1,0];}else if(s0>s2){return [1,2,0];}else{return [1,0,2];}}else if(s0>s2){return [2,0,1];}else if(s2>s1){return [0,1,2];}else{return [0,2,1];}}})"
                  ))
            : a.push("ORDER})")),
      a.push("proto.set=function " + n + "_set(" + o.join(",") + ",v){"),
      i
        ? a.push("return this.data.set(" + s + ",v)}")
        : a.push("return this.data[" + s + "]=v}"),
      a.push("proto.get=function " + n + "_get(" + o.join(",") + "){"),
      i
        ? a.push("return this.data.get(" + s + ")}")
        : a.push("return this.data[" + s + "]}"),
      a.push(
        "proto.index=function " + n + "_index(",
        o.join(),
        "){return " + s + "}"
      ),
      a.push(
        "proto.hi=function " +
          n +
          "_hi(" +
          o.join(",") +
          "){return new " +
          n +
          "(this.data," +
          r
            .map(function(t) {
              return [
                "(typeof i",
                t,
                "!=='number'||i",
                t,
                "<0)?this.shape[",
                t,
                "]:i",
                t,
                "|0"
              ].join("");
            })
            .join(",") +
          "," +
          r
            .map(function(t) {
              return "this.stride[" + t + "]";
            })
            .join(",") +
          ",this.offset)}"
      );
    var h = r.map(function(t) {
        return "a" + t + "=this.shape[" + t + "]";
      }),
      d = r.map(function(t) {
        return "c" + t + "=this.stride[" + t + "]";
      });
    a.push(
      "proto.lo=function " +
        n +
        "_lo(" +
        o.join(",") +
        "){var b=this.offset,d=0," +
        h.join(",") +
        "," +
        d.join(",")
    );
    for (var c = 0; c < e; ++c)
      a.push(
        "if(typeof i" +
          c +
          "==='number'&&i" +
          c +
          ">=0){d=i" +
          c +
          "|0;b+=c" +
          c +
          "*d;a" +
          c +
          "-=d}"
      );
    for (
      a.push(
        "return new " +
          n +
          "(this.data," +
          r
            .map(function(t) {
              return "a" + t;
            })
            .join(",") +
          "," +
          r
            .map(function(t) {
              return "c" + t;
            })
            .join(",") +
          ",b)}"
      ),
        a.push(
          "proto.step=function " +
            n +
            "_step(" +
            o.join(",") +
            "){var " +
            r
              .map(function(t) {
                return "a" + t + "=this.shape[" + t + "]";
              })
              .join(",") +
            "," +
            r
              .map(function(t) {
                return "b" + t + "=this.stride[" + t + "]";
              })
              .join(",") +
            ",c=this.offset,d=0,ceil=Math.ceil"
        ),
        c = 0;
      c < e;
      ++c
    )
      a.push(
        "if(typeof i" +
          c +
          "==='number'){d=i" +
          c +
          "|0;if(d<0){c+=b" +
          c +
          "*(a" +
          c +
          "-1);a" +
          c +
          "=ceil(-a" +
          c +
          "/d)}else{a" +
          c +
          "=ceil(a" +
          c +
          "/d)}b" +
          c +
          "*=d}"
      );
    a.push(
      "return new " +
        n +
        "(this.data," +
        r
          .map(function(t) {
            return "a" + t;
          })
          .join(",") +
        "," +
        r
          .map(function(t) {
            return "b" + t;
          })
          .join(",") +
        ",c)}"
    );
    var f = new Array(e),
      p = new Array(e);
    for (c = 0; c < e; ++c) (f[c] = "a[i" + c + "]"), (p[c] = "b[i" + c + "]");
    for (
      a.push(
        "proto.transpose=function " +
          n +
          "_transpose(" +
          o +
          "){" +
          o
            .map(function(t, e) {
              return t + "=(" + t + "===undefined?" + e + ":" + t + "|0)";
            })
            .join(";"),
        "var a=this.shape,b=this.stride;return new " +
          n +
          "(this.data," +
          f.join(",") +
          "," +
          p.join(",") +
          ",this.offset)}"
      ),
        a.push(
          "proto.pick=function " +
            n +
            "_pick(" +
            o +
            "){var a=[],b=[],c=this.offset"
        ),
        c = 0;
      c < e;
      ++c
    )
      a.push(
        "if(typeof i" +
          c +
          "==='number'&&i" +
          c +
          ">=0){c=(c+this.stride[" +
          c +
          "]*i" +
          c +
          ")|0}else{a.push(this.shape[" +
          c +
          "]);b.push(this.stride[" +
          c +
          "])}"
      );
    return (
      a.push("var ctor=CTOR_LIST[a.length+1];return ctor(this.data,a,b,c)}"),
      a.push(
        "return function construct_" +
          n +
          "(data,shape,stride,offset){return new " +
          n +
          "(data," +
          r
            .map(function(t) {
              return "shape[" + t + "]";
            })
            .join(",") +
          "," +
          r
            .map(function(t) {
              return "stride[" + t + "]";
            })
            .join(",") +
          ",offset)}"
      ),
      new Function("CTOR_LIST", "ORDER", a.join("\n"))(_[t], y)
    );
  }
  var _ = {
      float32: [],
      float64: [],
      int8: [],
      int16: [],
      int32: [],
      uint8: [],
      uint16: [],
      uint32: [],
      array: [],
      uint8_clamped: [],
      buffer: [],
      generic: []
    },
    x = function(t, e, n, i) {
      if (void 0 === t) return (0, _.array[0])([]);
      "number" == typeof t && (t = [t]), void 0 === e && (e = [t.length]);
      var a = e.length;
      if (void 0 === n) {
        n = new Array(a);
        for (var r = a - 1, o = 1; r >= 0; --r) (n[r] = o), (o *= e[r]);
      }
      if (void 0 === i)
        for (i = 0, r = 0; r < a; ++r) n[r] < 0 && (i -= (e[r] - 1) * n[r]);
      for (
        var s = (function(t) {
            if (
              null != (e = t) &&
              (p(e) ||
                (function(t) {
                  return (
                    "function" == typeof t.readFloatLE &&
                    "function" == typeof t.slice &&
                    p(t.slice(0, 0))
                  );
                })(e) ||
                e._isBuffer)
            )
              return "buffer";
            var e;
            if (m)
              switch (Object.prototype.toString.call(t)) {
                case "[object Float64Array]":
                  return "float64";
                case "[object Float32Array]":
                  return "float32";
                case "[object Int8Array]":
                  return "int8";
                case "[object Int16Array]":
                  return "int16";
                case "[object Int32Array]":
                  return "int32";
                case "[object Uint8Array]":
                  return "uint8";
                case "[object Uint16Array]":
                  return "uint16";
                case "[object Uint32Array]":
                  return "uint32";
                case "[object Uint8ClampedArray]":
                  return "uint8_clamped";
              }
            return Array.isArray(t) ? "array" : "generic";
          })(t),
          l = _[s];
        l.length <= a + 1;

      )
        l.push(b(s, l.length - 1));
      return (0, l[a + 1])(t, e, n, i);
    },
    w = {},
    k = { body: "", args: [], thisVars: [], localVars: [] };
  function M(t) {
    if (!t) return k;
    for (var e = 0; e < t.args.length; ++e) {
      var n = t.args[e];
      t.args[e] =
        0 === e
          ? { name: n, lvalue: !0, rvalue: !!t.rvalue, count: t.count || 1 }
          : { name: n, lvalue: !1, rvalue: !0, count: 1 };
    }
    return (
      t.thisVars || (t.thisVars = []), t.localVars || (t.localVars = []), t
    );
  }
  function S(t) {
    for (var e = [], n = 0; n < t.args.length; ++n) e.push("a" + n);
    return new Function(
      "P",
      [
        "return function ",
        t.funcName,
        "_ndarrayops(",
        e.join(","),
        ") {P(",
        e.join(","),
        ");return a0}"
      ].join("")
    )(
      (function(t) {
        return h({
          args: t.args,
          pre: M(t.pre),
          body: M(t.body),
          post: M(t.proc),
          funcName: t.funcName
        });
      })(t)
    );
  }
  var D = {
    add: "+",
    sub: "-",
    mul: "*",
    div: "/",
    mod: "%",
    band: "&",
    bor: "|",
    bxor: "^",
    lshift: "<<",
    rshift: ">>",
    rrshift: ">>>"
  };
  !(function() {
    for (var t in D) {
      var e = D[t];
      (w[t] = S({
        args: ["array", "array", "array"],
        body: { args: ["a", "b", "c"], body: "a=b" + e + "c" },
        funcName: t
      })),
        (w[t + "eq"] = S({
          args: ["array", "array"],
          body: { args: ["a", "b"], body: "a" + e + "=b" },
          rvalue: !0,
          funcName: t + "eq"
        })),
        (w[t + "s"] = S({
          args: ["array", "array", "scalar"],
          body: { args: ["a", "b", "s"], body: "a=b" + e + "s" },
          funcName: t + "s"
        })),
        (w[t + "seq"] = S({
          args: ["array", "scalar"],
          body: { args: ["a", "s"], body: "a" + e + "=s" },
          rvalue: !0,
          funcName: t + "seq"
        }));
    }
  })();
  var C = { not: "!", bnot: "~", neg: "-", recip: "1.0/" };
  !(function() {
    for (var t in C) {
      var e = C[t];
      (w[t] = S({
        args: ["array", "array"],
        body: { args: ["a", "b"], body: "a=" + e + "b" },
        funcName: t
      })),
        (w[t + "eq"] = S({
          args: ["array"],
          body: { args: ["a"], body: "a=" + e + "a" },
          rvalue: !0,
          count: 2,
          funcName: t + "eq"
        }));
    }
  })();
  var A = {
    and: "&&",
    or: "||",
    eq: "===",
    neq: "!==",
    lt: "<",
    gt: ">",
    leq: "<=",
    geq: ">="
  };
  !(function() {
    for (var t in A) {
      var e = A[t];
      (w[t] = S({
        args: ["array", "array", "array"],
        body: { args: ["a", "b", "c"], body: "a=b" + e + "c" },
        funcName: t
      })),
        (w[t + "s"] = S({
          args: ["array", "array", "scalar"],
          body: { args: ["a", "b", "s"], body: "a=b" + e + "s" },
          funcName: t + "s"
        })),
        (w[t + "eq"] = S({
          args: ["array", "array"],
          body: { args: ["a", "b"], body: "a=a" + e + "b" },
          rvalue: !0,
          count: 2,
          funcName: t + "eq"
        })),
        (w[t + "seq"] = S({
          args: ["array", "scalar"],
          body: { args: ["a", "s"], body: "a=a" + e + "s" },
          rvalue: !0,
          count: 2,
          funcName: t + "seq"
        }));
    }
  })();
  var T = [
    "abs",
    "acos",
    "asin",
    "atan",
    "ceil",
    "cos",
    "exp",
    "floor",
    "log",
    "round",
    "sin",
    "sqrt",
    "tan"
  ];
  !(function() {
    for (var t = 0; t < T.length; ++t) {
      var e = T[t];
      (w[e] = S({
        args: ["array", "array"],
        pre: { args: [], body: "this_f=Math." + e, thisVars: ["this_f"] },
        body: { args: ["a", "b"], body: "a=this_f(b)", thisVars: ["this_f"] },
        funcName: e
      })),
        (w[e + "eq"] = S({
          args: ["array"],
          pre: { args: [], body: "this_f=Math." + e, thisVars: ["this_f"] },
          body: { args: ["a"], body: "a=this_f(a)", thisVars: ["this_f"] },
          rvalue: !0,
          count: 2,
          funcName: e + "eq"
        }));
    }
  })();
  var P = ["max", "min", "atan2", "pow"];
  !(function() {
    for (var t = 0; t < P.length; ++t) {
      var e = P[t];
      (w[e] = S({
        args: ["array", "array", "array"],
        pre: { args: [], body: "this_f=Math." + e, thisVars: ["this_f"] },
        body: {
          args: ["a", "b", "c"],
          body: "a=this_f(b,c)",
          thisVars: ["this_f"]
        },
        funcName: e
      })),
        (w[e + "s"] = S({
          args: ["array", "array", "scalar"],
          pre: { args: [], body: "this_f=Math." + e, thisVars: ["this_f"] },
          body: {
            args: ["a", "b", "c"],
            body: "a=this_f(b,c)",
            thisVars: ["this_f"]
          },
          funcName: e + "s"
        })),
        (w[e + "eq"] = S({
          args: ["array", "array"],
          pre: { args: [], body: "this_f=Math." + e, thisVars: ["this_f"] },
          body: {
            args: ["a", "b"],
            body: "a=this_f(a,b)",
            thisVars: ["this_f"]
          },
          rvalue: !0,
          count: 2,
          funcName: e + "eq"
        })),
        (w[e + "seq"] = S({
          args: ["array", "scalar"],
          pre: { args: [], body: "this_f=Math." + e, thisVars: ["this_f"] },
          body: {
            args: ["a", "b"],
            body: "a=this_f(a,b)",
            thisVars: ["this_f"]
          },
          rvalue: !0,
          count: 2,
          funcName: e + "seq"
        }));
    }
  })();
  var O = ["atan2", "pow"];
  !(function() {
    for (var t = 0; t < O.length; ++t) {
      var e = O[t];
      (w[e + "op"] = S({
        args: ["array", "array", "array"],
        pre: { args: [], body: "this_f=Math." + e, thisVars: ["this_f"] },
        body: {
          args: ["a", "b", "c"],
          body: "a=this_f(c,b)",
          thisVars: ["this_f"]
        },
        funcName: e + "op"
      })),
        (w[e + "ops"] = S({
          args: ["array", "array", "scalar"],
          pre: { args: [], body: "this_f=Math." + e, thisVars: ["this_f"] },
          body: {
            args: ["a", "b", "c"],
            body: "a=this_f(c,b)",
            thisVars: ["this_f"]
          },
          funcName: e + "ops"
        })),
        (w[e + "opeq"] = S({
          args: ["array", "array"],
          pre: { args: [], body: "this_f=Math." + e, thisVars: ["this_f"] },
          body: {
            args: ["a", "b"],
            body: "a=this_f(b,a)",
            thisVars: ["this_f"]
          },
          rvalue: !0,
          count: 2,
          funcName: e + "opeq"
        })),
        (w[e + "opseq"] = S({
          args: ["array", "scalar"],
          pre: { args: [], body: "this_f=Math." + e, thisVars: ["this_f"] },
          body: {
            args: ["a", "b"],
            body: "a=this_f(b,a)",
            thisVars: ["this_f"]
          },
          rvalue: !0,
          count: 2,
          funcName: e + "opseq"
        }));
    }
  })(),
    (w.any = h({
      args: ["array"],
      pre: k,
      body: {
        args: [{ name: "a", lvalue: !1, rvalue: !0, count: 1 }],
        body: "if(a){return true}",
        localVars: [],
        thisVars: []
      },
      post: { args: [], localVars: [], thisVars: [], body: "return false" },
      funcName: "any"
    })),
    (w.all = h({
      args: ["array"],
      pre: k,
      body: {
        args: [{ name: "x", lvalue: !1, rvalue: !0, count: 1 }],
        body: "if(!x){return false}",
        localVars: [],
        thisVars: []
      },
      post: { args: [], localVars: [], thisVars: [], body: "return true" },
      funcName: "all"
    })),
    (w.sum = h({
      args: ["array"],
      pre: { args: [], localVars: [], thisVars: ["this_s"], body: "this_s=0" },
      body: {
        args: [{ name: "a", lvalue: !1, rvalue: !0, count: 1 }],
        body: "this_s+=a",
        localVars: [],
        thisVars: ["this_s"]
      },
      post: {
        args: [],
        localVars: [],
        thisVars: ["this_s"],
        body: "return this_s"
      },
      funcName: "sum"
    })),
    (w.prod = h({
      args: ["array"],
      pre: { args: [], localVars: [], thisVars: ["this_s"], body: "this_s=1" },
      body: {
        args: [{ name: "a", lvalue: !1, rvalue: !0, count: 1 }],
        body: "this_s*=a",
        localVars: [],
        thisVars: ["this_s"]
      },
      post: {
        args: [],
        localVars: [],
        thisVars: ["this_s"],
        body: "return this_s"
      },
      funcName: "prod"
    })),
    (w.norm2squared = h({
      args: ["array"],
      pre: { args: [], localVars: [], thisVars: ["this_s"], body: "this_s=0" },
      body: {
        args: [{ name: "a", lvalue: !1, rvalue: !0, count: 2 }],
        body: "this_s+=a*a",
        localVars: [],
        thisVars: ["this_s"]
      },
      post: {
        args: [],
        localVars: [],
        thisVars: ["this_s"],
        body: "return this_s"
      },
      funcName: "norm2squared"
    })),
    (w.norm2 = h({
      args: ["array"],
      pre: { args: [], localVars: [], thisVars: ["this_s"], body: "this_s=0" },
      body: {
        args: [{ name: "a", lvalue: !1, rvalue: !0, count: 2 }],
        body: "this_s+=a*a",
        localVars: [],
        thisVars: ["this_s"]
      },
      post: {
        args: [],
        localVars: [],
        thisVars: ["this_s"],
        body: "return Math.sqrt(this_s)"
      },
      funcName: "norm2"
    })),
    (w.norminf = h({
      args: ["array"],
      pre: { args: [], localVars: [], thisVars: ["this_s"], body: "this_s=0" },
      body: {
        args: [{ name: "a", lvalue: !1, rvalue: !0, count: 4 }],
        body: "if(-a>this_s){this_s=-a}else if(a>this_s){this_s=a}",
        localVars: [],
        thisVars: ["this_s"]
      },
      post: {
        args: [],
        localVars: [],
        thisVars: ["this_s"],
        body: "return this_s"
      },
      funcName: "norminf"
    })),
    (w.norm1 = h({
      args: ["array"],
      pre: { args: [], localVars: [], thisVars: ["this_s"], body: "this_s=0" },
      body: {
        args: [{ name: "a", lvalue: !1, rvalue: !0, count: 3 }],
        body: "this_s+=a<0?-a:a",
        localVars: [],
        thisVars: ["this_s"]
      },
      post: {
        args: [],
        localVars: [],
        thisVars: ["this_s"],
        body: "return this_s"
      },
      funcName: "norm1"
    })),
    (w.sup = h({
      args: ["array"],
      pre: {
        body: "this_h=-Infinity",
        args: [],
        thisVars: ["this_h"],
        localVars: []
      },
      body: {
        body: "if(_inline_1_arg0_>this_h)this_h=_inline_1_arg0_",
        args: [{ name: "_inline_1_arg0_", lvalue: !1, rvalue: !0, count: 2 }],
        thisVars: ["this_h"],
        localVars: []
      },
      post: {
        body: "return this_h",
        args: [],
        thisVars: ["this_h"],
        localVars: []
      }
    })),
    (w.inf = h({
      args: ["array"],
      pre: {
        body: "this_h=Infinity",
        args: [],
        thisVars: ["this_h"],
        localVars: []
      },
      body: {
        body: "if(_inline_1_arg0_<this_h)this_h=_inline_1_arg0_",
        args: [{ name: "_inline_1_arg0_", lvalue: !1, rvalue: !0, count: 2 }],
        thisVars: ["this_h"],
        localVars: []
      },
      post: {
        body: "return this_h",
        args: [],
        thisVars: ["this_h"],
        localVars: []
      }
    })),
    (w.argmin = h({
      args: ["index", "array", "shape"],
      pre: {
        body: "{this_v=Infinity;this_i=_inline_0_arg2_.slice(0)}",
        args: [
          { name: "_inline_0_arg0_", lvalue: !1, rvalue: !1, count: 0 },
          { name: "_inline_0_arg1_", lvalue: !1, rvalue: !1, count: 0 },
          { name: "_inline_0_arg2_", lvalue: !1, rvalue: !0, count: 1 }
        ],
        thisVars: ["this_i", "this_v"],
        localVars: []
      },
      body: {
        body:
          "{if(_inline_1_arg1_<this_v){this_v=_inline_1_arg1_;for(var _inline_1_k=0;_inline_1_k<_inline_1_arg0_.length;++_inline_1_k){this_i[_inline_1_k]=_inline_1_arg0_[_inline_1_k]}}}",
        args: [
          { name: "_inline_1_arg0_", lvalue: !1, rvalue: !0, count: 2 },
          { name: "_inline_1_arg1_", lvalue: !1, rvalue: !0, count: 2 }
        ],
        thisVars: ["this_i", "this_v"],
        localVars: ["_inline_1_k"]
      },
      post: {
        body: "{return this_i}",
        args: [],
        thisVars: ["this_i"],
        localVars: []
      }
    })),
    (w.argmax = h({
      args: ["index", "array", "shape"],
      pre: {
        body: "{this_v=-Infinity;this_i=_inline_0_arg2_.slice(0)}",
        args: [
          { name: "_inline_0_arg0_", lvalue: !1, rvalue: !1, count: 0 },
          { name: "_inline_0_arg1_", lvalue: !1, rvalue: !1, count: 0 },
          { name: "_inline_0_arg2_", lvalue: !1, rvalue: !0, count: 1 }
        ],
        thisVars: ["this_i", "this_v"],
        localVars: []
      },
      body: {
        body:
          "{if(_inline_1_arg1_>this_v){this_v=_inline_1_arg1_;for(var _inline_1_k=0;_inline_1_k<_inline_1_arg0_.length;++_inline_1_k){this_i[_inline_1_k]=_inline_1_arg0_[_inline_1_k]}}}",
        args: [
          { name: "_inline_1_arg0_", lvalue: !1, rvalue: !0, count: 2 },
          { name: "_inline_1_arg1_", lvalue: !1, rvalue: !0, count: 2 }
        ],
        thisVars: ["this_i", "this_v"],
        localVars: ["_inline_1_k"]
      },
      post: {
        body: "{return this_i}",
        args: [],
        thisVars: ["this_i"],
        localVars: []
      }
    })),
    (w.random = S({
      args: ["array"],
      pre: { args: [], body: "this_f=Math.random", thisVars: ["this_f"] },
      body: { args: ["a"], body: "a=this_f()", thisVars: ["this_f"] },
      funcName: "random"
    })),
    (w.assign = S({
      args: ["array", "array"],
      body: { args: ["a", "b"], body: "a=b" },
      funcName: "assign"
    })),
    (w.assigns = S({
      args: ["array", "scalar"],
      body: { args: ["a", "b"], body: "a=b" },
      funcName: "assigns"
    })),
    (w.equals = h({
      args: ["array", "array"],
      pre: k,
      body: {
        args: [
          { name: "x", lvalue: !1, rvalue: !0, count: 1 },
          { name: "y", lvalue: !1, rvalue: !0, count: 1 }
        ],
        body: "if(x!==y){return false}",
        localVars: [],
        thisVars: []
      },
      post: { args: [], localVars: [], thisVars: [], body: "return true" },
      funcName: "equals"
    }));
  const I = d({
    args: ["array"],
    pre: {
      body: "{this_shuffle=!1}",
      args: [],
      thisVars: ["this_shuffle"],
      localVars: []
    },
    body: {
      body:
        "{var _inline_4_t,_inline_4_s,_inline_4_a=0;if(this_shuffle=!this_shuffle,this_shuffle){do{_inline_4_t=2*Math.random()-1,_inline_4_s=2*Math.random()-1,_inline_4_a=_inline_4_t*_inline_4_t+_inline_4_s*_inline_4_s}while(_inline_4_a>=1);var _inline_4_e=Math.sqrt(-2*Math.log(_inline_4_a)/_inline_4_a);this_next=_inline_4_e*_inline_4_s,_inline_4_arg0_=_inline_4_e*_inline_4_t}else _inline_4_arg0_=this_next}",
      args: [{ name: "_inline_4_arg0_", lvalue: !0, rvalue: !1, count: 2 }],
      thisVars: ["this_next", "this_shuffle"],
      localVars: ["_inline_4_a", "_inline_4_e", "_inline_4_s", "_inline_4_t"]
    },
    post: { body: "{}", args: [], thisVars: [], localVars: [] },
    debug: !1,
    funcName: "cwise",
    blockSize: 64
  });
  var F = {
    generateWealthTrajectories: function(t, e, n, i, a, r) {
      (t = void 0 !== t ? t : 100),
        (e = void 0 !== e ? e : 100),
        (n = void 0 !== n ? n : 0.1),
        (i = void 0 !== i ? i : 0.08),
        (a = void 0 !== a ? a : 0.18),
        (r = void 0 !== r ? r : 0.01);
      const o = Math.floor(e / n),
        s = Math.sqrt(n);
      var l = x(new Float64Array(o * t), [o, t]);
      w.assigns(l, 1);
      for (
        var u = (function(t) {
            "number" == typeof t && t >= 0 && (t = [t]);
            var e = t.reduce((t, e) => t * e, 1),
              n = new x(new Float64Array(e), t);
            return I(n), n;
          })([o, t]),
          h = x(new Float64Array(t)),
          d = 1;
        d < o;
        d++
      ) {
        var c = l.pick(d - 1, null),
          f = l.pick(d, null),
          g = u.pick(d, null);
        w.assign(f, c),
          w.mulseq(f, i * n),
          w.assign(h, c),
          w.mulseq(h, a * s),
          w.muleq(h, g),
          w.addeq(f, h),
          w.addeq(f, c),
          w.assign(h, c),
          w.addseq(h, -w.sum(c) / c.size),
          w.mulseq(h, -r * n),
          w.addeq(f, h);
        const t = w.sup(f);
        w.divseq(f, t);
      }
      return l;
    },
    getHistograms: function(t, e) {
      (rows = t.shape[0]), (columns = t.shape[1]);
      for (
        var n = x(new Float64Array(rows * columns), [rows, columns]),
          i = x(new Float64Array(rows * e), [rows, e]),
          a = 0;
        a < rows;
        a++
      ) {
        var r = t.pick(a, null),
          o = n.pick(a, null),
          s = i.pick(a, null);
        (min = w.inf(r)),
          (max = w.sup(r)),
          (spread = max - min),
          (step = spread / e),
          w.assign(o, r),
          w.addseq(o, -min),
          0 != step && w.mulseq(o, 1 / step),
          w.flooreq(o);
        for (var l = 0; l < columns; l++)
          (bin_number = o.get(l)),
            bin_number == e && (bin_number = e - 1),
            (current = s.get(bin_number)),
            s.set(bin_number, current + 1);
      }
      return i;
    }
  };
  const { unpackArray: V, range: L } = f,
    { generateWealthTrajectories: R, getHistograms: N } = F;
  var W = {
    type: "bar",
    options: {
      legend: { display: !1 },
      animation: !1,
      events: [],
      scales: {
        xAxes: [{ gridLines: { display: !1 }, ticks: { display: !1 } }],
        yAxes: [{ display: !0, ticks: { steps: 10, stepValue: 5, min: 0 } }]
      }
    }
  };
  function Y(t, e, n) {
      (t.data.labels = L(n.length)),
      (t.data.datasets = [{ backgroundColor: "#c45850", data: n }]),
      t.update();
  }
  (window.onload = function() {
    var t = document.getElementById("animation").getContext("2d"),
      e = document.getElementById("histogram").getContext("2d");
    (window.barplot = new a(t, W)), (window.histogram = new a(e, W));
  }),
    (window.isPaused = !1),
    (window.isDone = !0);
  var E = document.getElementById("startAnimation"),
    j = document.getElementById("pauseAnimation"),
    z = document.getElementById("stopAnimation");
  function B(t) {
    return parseFloat(document.getElementById(t).value);
  }
  j.addEventListener("click", function() {
    window.isPaused = !0;
  }),
    z.addEventListener("click", function() {
      window.animate && clearInterval(window.animate),
        window.barplot.clear(),
        window.histogram.clear(),
        (window.isPaused = !0),
        (window.isDone = !0);
    }),
    E.addEventListener("click", function() {
      if (window.isDone) {
        window.animate && clearInterval(window.animate);
        var t = 0,
          e = B("N"),
          n = B("T"),
          i = B("dt"),
          a = B("mu"),
          r = B("sigma"),
          o = B("tau"),
          s = B("bins");
        (wealthTrajectories = R(e, n, i, a, r, o)),
          (histograms = N(wealthTrajectories, s));
        const l = Math.floor(n / i / 10);
        (window.animate = window.setInterval(function() {
          if (!window.isPaused)
            if (t < l) {
              var e = V(wealthTrajectories.pick(10 * t, null)),
                n = V(histograms.pick(10 * t, null));
              Y(window.barplot, t, e), Y(window.histogram, t, n), t++;
              const histogram_time_span = document.getElementById("histogram_time");
              histogram_time_span.innerHTML = "Time " + t
              const animation_time_span = document.getElementById("animation_time");
              animation_time_span.innerHTML = "Time " + t

            } else (window.isDone = !0), clearInterval(window.animate);
        }, 300)),
          (window.isDone = !1);
      }
      window.isPaused = !1;
    });
})();
