(() => {
  "use strict";
  var t = {
      56: (t, e, n) => {
        t.exports = function (t) {
          var e = n.nc;
          e && t.setAttribute("nonce", e);
        };
      },
      72: (t) => {
        var e = [];
        function n(t) {
          for (var n = -1, r = 0; r < e.length; r++)
            if (e[r].identifier === t) {
              n = r;
              break;
            }
          return n;
        }
        function r(t, r) {
          for (var a = {}, i = [], u = 0; u < t.length; u++) {
            var c = t[u],
              s = r.base ? c[0] + r.base : c[0],
              l = a[s] || 0,
              p = "".concat(s, " ").concat(l);
            a[s] = l + 1;
            var d = n(p),
              f = {
                css: c[1],
                media: c[2],
                sourceMap: c[3],
                supports: c[4],
                layer: c[5],
              };
            if (-1 !== d) (e[d].references++, e[d].updater(f));
            else {
              var h = o(f, r);
              ((r.byIndex = u),
                e.splice(u, 0, { identifier: p, updater: h, references: 1 }));
            }
            i.push(p);
          }
          return i;
        }
        function o(t, e) {
          var n = e.domAPI(e);
          return (
            n.update(t),
            function (e) {
              if (e) {
                if (
                  e.css === t.css &&
                  e.media === t.media &&
                  e.sourceMap === t.sourceMap &&
                  e.supports === t.supports &&
                  e.layer === t.layer
                )
                  return;
                n.update((t = e));
              } else n.remove();
            }
          );
        }
        t.exports = function (t, o) {
          var a = r((t = t || []), (o = o || {}));
          return function (t) {
            t = t || [];
            for (var i = 0; i < a.length; i++) {
              var u = n(a[i]);
              e[u].references--;
            }
            for (var c = r(t, o), s = 0; s < a.length; s++) {
              var l = n(a[s]);
              0 === e[l].references && (e[l].updater(), e.splice(l, 1));
            }
            a = c;
          };
        };
      },
      113: (t) => {
        t.exports = function (t, e) {
          if (e.styleSheet) e.styleSheet.cssText = t;
          else {
            for (; e.firstChild; ) e.removeChild(e.firstChild);
            e.appendChild(document.createTextNode(t));
          }
        };
      },
      208: (t, e, n) => {
        n.d(e, { A: () => u });
        var r = n(601),
          o = n.n(r),
          a = n(314),
          i = n.n(a)()(o());
        i.push([
          t.id,
          "body {\n  font-family: Arial, sans-serif;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 100vh;\n  margin: 0;\n  background-color: #f0f0f0;\n}\n\n.calculator {\n  background-color: #333;\n  border-radius: 10px;\n  padding: 20px;\n  width: 320px;\n  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5);\n}\n\n.display {\n  background-color: #eee;\n  border-radius: 5px;\n  padding: 10px;\n  margin-bottom: 10px;\n  text-align: right;\n  font-size: 24px;\n  height: 60px;\n  overflow: hidden;\n}\n\n.buttons {\n  display: grid;\n  grid-template-columns: repeat(5, 1fr);\n  grid-template-rows: repeat(7, 1fr);\n  grid-gap: 8px;\n}\n\n.number-pad {\n  grid-area: 4/ 2 / 8 / 5;\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  grid-template-rows: repeat(4, 1fr);\n  grid-gap: 10px;\n  .function {\n    background-color: #555;\n  }\n  .function:hover {\n    background-color: #777;\n  }\n}\n\n.operator-pad {\n  grid-area: 3/ 5 / 8 / 5;\n  display: grid;\n  grid-template-rows: repeat(5, 1fr);\n  grid-gap: 10px;\n}\n\n.function-pad {\n  grid-area: 1 / 1 / 1 / 6;\n  button {\n    width: 57px;\n    margin-right: 5px;\n  }\n}\n\n.memory-info {\n  color: #aaa;\n  font-size: 12px;\n  text-align: left;\n  margin-bottom: 5px;\n  height: 15px;\n}\n\nbutton {\n  border: none;\n  border-radius: 5px;\n  padding: 12px;\n  font-size: 16px;\n  cursor: pointer;\n  background-color: #555;\n  color: white;\n  transition: background-color 0.2s;\n}\n\nbutton:hover {\n  background-color: #777;\n}\n\nbutton.operator,\nbutton.equals {\n  background-color: #ff9500;\n}\n\nbutton.operator:hover,\nbutton.equals:hover {\n  background-color: #ffaa33;\n}\n\nbutton.function {\n  background-color: #444;\n}\n\nbutton.function:hover {\n  background-color: #666;\n}\n\nbutton.undo {\n  background-color: #4466aa;\n}\n\nbutton.undo:hover {\n  background-color: #5588cc;\n}\n",
          "",
        ]);
        const u = i;
      },
      314: (t) => {
        t.exports = function (t) {
          var e = [];
          return (
            (e.toString = function () {
              return this.map(function (e) {
                var n = "",
                  r = void 0 !== e[5];
                return (
                  e[4] && (n += "@supports (".concat(e[4], ") {")),
                  e[2] && (n += "@media ".concat(e[2], " {")),
                  r &&
                    (n += "@layer".concat(
                      e[5].length > 0 ? " ".concat(e[5]) : "",
                      " {"
                    )),
                  (n += t(e)),
                  r && (n += "}"),
                  e[2] && (n += "}"),
                  e[4] && (n += "}"),
                  n
                );
              }).join("");
            }),
            (e.i = function (t, n, r, o, a) {
              "string" == typeof t && (t = [[null, t, void 0]]);
              var i = {};
              if (r)
                for (var u = 0; u < this.length; u++) {
                  var c = this[u][0];
                  null != c && (i[c] = !0);
                }
              for (var s = 0; s < t.length; s++) {
                var l = [].concat(t[s]);
                (r && i[l[0]]) ||
                  (void 0 !== a &&
                    (void 0 === l[5] ||
                      (l[1] = "@layer"
                        .concat(l[5].length > 0 ? " ".concat(l[5]) : "", " {")
                        .concat(l[1], "}")),
                    (l[5] = a)),
                  n &&
                    (l[2]
                      ? ((l[1] = "@media "
                          .concat(l[2], " {")
                          .concat(l[1], "}")),
                        (l[2] = n))
                      : (l[2] = n)),
                  o &&
                    (l[4]
                      ? ((l[1] = "@supports ("
                          .concat(l[4], ") {")
                          .concat(l[1], "}")),
                        (l[4] = o))
                      : (l[4] = "".concat(o))),
                  e.push(l));
              }
            }),
            e
          );
        };
      },
      540: (t) => {
        t.exports = function (t) {
          var e = document.createElement("style");
          return (t.setAttributes(e, t.attributes), t.insert(e, t.options), e);
        };
      },
      601: (t) => {
        t.exports = function (t) {
          return t[1];
        };
      },
      659: (t) => {
        var e = {};
        t.exports = function (t, n) {
          var r = (function (t) {
            if (void 0 === e[t]) {
              var n = document.querySelector(t);
              if (
                window.HTMLIFrameElement &&
                n instanceof window.HTMLIFrameElement
              )
                try {
                  n = n.contentDocument.head;
                } catch (t) {
                  n = null;
                }
              e[t] = n;
            }
            return e[t];
          })(t);
          if (!r)
            throw new Error(
              "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
            );
          r.appendChild(n);
        };
      },
      825: (t) => {
        t.exports = function (t) {
          if ("undefined" == typeof document)
            return { update: function () {}, remove: function () {} };
          var e = t.insertStyleElement(t);
          return {
            update: function (n) {
              !(function (t, e, n) {
                var r = "";
                (n.supports && (r += "@supports (".concat(n.supports, ") {")),
                  n.media && (r += "@media ".concat(n.media, " {")));
                var o = void 0 !== n.layer;
                (o &&
                  (r += "@layer".concat(
                    n.layer.length > 0 ? " ".concat(n.layer) : "",
                    " {"
                  )),
                  (r += n.css),
                  o && (r += "}"),
                  n.media && (r += "}"),
                  n.supports && (r += "}"));
                var a = n.sourceMap;
                (a &&
                  "undefined" != typeof btoa &&
                  (r +=
                    "\n/*# sourceMappingURL=data:application/json;base64,".concat(
                      btoa(unescape(encodeURIComponent(JSON.stringify(a)))),
                      " */"
                    )),
                  e.styleTagTransform(r, t, e.options));
              })(e, t, n);
            },
            remove: function () {
              !(function (t) {
                if (null === t.parentNode) return !1;
                t.parentNode.removeChild(t);
              })(e);
            },
          };
        };
      },
    },
    e = {};
  function n(r) {
    var o = e[r];
    if (void 0 !== o) return o.exports;
    var a = (e[r] = { id: r, exports: {} });
    return (t[r](a, a.exports, n), a.exports);
  }
  function r(t) {
    return (
      (r =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (t) {
              return typeof t;
            }
          : function (t) {
              return t &&
                "function" == typeof Symbol &&
                t.constructor === Symbol &&
                t !== Symbol.prototype
                ? "symbol"
                : typeof t;
            }),
      r(t)
    );
  }
  function o(t) {
    return (
      (o = Object.setPrototypeOf
        ? Object.getPrototypeOf.bind()
        : function (t) {
            return t.__proto__ || Object.getPrototypeOf(t);
          }),
      o(t)
    );
  }
  function a(t, e) {
    return (
      (a = Object.setPrototypeOf
        ? Object.setPrototypeOf.bind()
        : function (t, e) {
            return ((t.__proto__ = e), t);
          }),
      a(t, e)
    );
  }
  function i(t, e) {
    if ("function" != typeof e && null !== e)
      throw new TypeError("Super expression must either be null or a function");
    ((t.prototype = Object.create(e && e.prototype, {
      constructor: { value: t, writable: !0, configurable: !0 },
    })),
      Object.defineProperty(t, "prototype", { writable: !1 }),
      e && a(t, e));
  }
  function u(t, e) {
    if (!(t instanceof e))
      throw new TypeError("Cannot call a class as a function");
  }
  function c(t) {
    var e = (function (t) {
      if ("object" != r(t) || !t) return t;
      var e = t[Symbol.toPrimitive];
      if (void 0 !== e) {
        var n = e.call(t, "string");
        if ("object" != r(n)) return n;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return String(t);
    })(t);
    return "symbol" == r(e) ? e : e + "";
  }
  function s(t, e) {
    for (var n = 0; n < e.length; n++) {
      var r = e[n];
      ((r.enumerable = r.enumerable || !1),
        (r.configurable = !0),
        "value" in r && (r.writable = !0),
        Object.defineProperty(t, c(r.key), r));
    }
  }
  function l(t, e, n) {
    return (
      e && s(t.prototype, e),
      n && s(t, n),
      Object.defineProperty(t, "prototype", { writable: !1 }),
      t
    );
  }
  ((n.n = (t) => {
    var e = t && t.__esModule ? () => t.default : () => t;
    return (n.d(e, { a: e }), e);
  }),
    (n.d = (t, e) => {
      for (var r in e)
        n.o(e, r) &&
          !n.o(t, r) &&
          Object.defineProperty(t, r, { enumerable: !0, get: e[r] });
    }),
    (n.o = (t, e) => Object.prototype.hasOwnProperty.call(t, e)),
    (n.nc = void 0));
  var p = n(72),
    d = n.n(p),
    f = n(825),
    h = n.n(f),
    y = n(659),
    m = n.n(y),
    v = n(56),
    g = n.n(v),
    b = n(540),
    w = n.n(b),
    x = n(113),
    k = n.n(x),
    O = n(208),
    C = {};
  function S(t, e, n) {
    return (
      (e = o(e)),
      (function (t, e) {
        if (e && ("object" == r(e) || "function" == typeof e)) return e;
        if (void 0 !== e)
          throw new TypeError(
            "Derived constructors may only return object or undefined"
          );
        return (function (t) {
          if (void 0 === t)
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called"
            );
          return t;
        })(t);
      })(
        t,
        V() ? Reflect.construct(e, n || [], o(t).constructor) : e.apply(t, n)
      )
    );
  }
  function V() {
    try {
      var t = !Boolean.prototype.valueOf.call(
        Reflect.construct(Boolean, [], function () {})
      );
    } catch (t) {}
    return (V = function () {
      return !!t;
    })();
  }
  ((C.styleTagTransform = k()),
    (C.setAttributes = g()),
    (C.insert = m().bind(null, "head")),
    (C.domAPI = h()),
    (C.insertStyleElement = w()),
    d()(O.A, C),
    O.A && O.A.locals && O.A.locals);
  var F = (function () {
      return l(
        function t(e) {
          (u(this, t),
            (this.calculator = e),
            (this.previousValue = e.displayValue),
            (this.previousFirstOperand = e.firstOperand),
            (this.previousOperator = e.operator),
            (this.previousWaiting = e.waitingForSecondOperand),
            (this.previousMemory = e.memory));
        },
        [
          { key: "execute", value: function () {} },
          {
            key: "undo",
            value: function () {
              (Object.assign(this.calculator, {
                displayValue: this.previousValue,
                firstOperand: this.previousFirstOperand,
                operator: this.previousOperator,
                waitingForSecondOperand: this.previousWaiting,
                memory: this.previousMemory,
              }),
                this.calculator.updateDisplay(),
                this.calculator.updateMemoryIndicator());
            },
          },
        ]
      );
    })(),
    I = (function (t) {
      function e(t, n) {
        var r;
        return (u(this, e), ((r = S(this, e, [t])).number = n), r);
      }
      return (
        i(e, t),
        l(e, [
          {
            key: "execute",
            value: function () {
              var t = this.calculator;
              (t.waitingForSecondOperand
                ? ((t.displayValue = this.number),
                  (t.waitingForSecondOperand = !1))
                : (t.displayValue =
                    "0" === t.displayValue
                      ? this.number
                      : t.displayValue + this.number),
                t.updateDisplay());
            },
          },
        ])
      );
    })(F),
    D = (function (t) {
      function e() {
        return (u(this, e), S(this, e, arguments));
      }
      return (
        i(e, t),
        l(e, [
          {
            key: "execute",
            value: function () {
              var t = this.calculator;
              (t.waitingForSecondOperand
                ? ((t.displayValue = "0."), (t.waitingForSecondOperand = !1))
                : t.displayValue.includes(".") || (t.displayValue += "."),
                t.updateDisplay());
            },
          },
        ])
      );
    })(F),
    M = (function (t) {
      function e() {
        return (u(this, e), S(this, e, arguments));
      }
      return (
        i(e, t),
        l(e, [
          {
            key: "execute",
            value: function () {
              (Object.assign(this.calculator, {
                displayValue: "0",
                firstOperand: null,
                operator: null,
                waitingForSecondOperand: !1,
                memory: 0,
                history: [],
              }),
                this.calculator.updateDisplay());
            },
          },
        ])
      );
    })(F),
    j = (function (t) {
      function e() {
        return (u(this, e), S(this, e, arguments));
      }
      return (
        i(e, t),
        l(e, [
          {
            key: "execute",
            value: function () {
              var t = this.calculator;
              ((t.displayValue = (-1 * parseFloat(t.displayValue)).toString()),
                t.updateDisplay());
            },
          },
        ])
      );
    })(F),
    E = (function (t) {
      function e() {
        return (u(this, e), S(this, e, arguments));
      }
      return (
        i(e, t),
        l(e, [
          {
            key: "execute",
            value: function () {
              var t = this.calculator,
                e = parseFloat(t.displayValue);
              (0 !== e
                ? (t.displayValue = (1 / e).toString())
                : t.showErrorAndClear(),
                t.updateDisplay());
            },
          },
        ])
      );
    })(F),
    A = (function (t) {
      function e(t, n) {
        var r;
        return (u(this, e), ((r = S(this, e, [t])).operator = n), r);
      }
      return (
        i(e, t),
        l(e, [
          {
            key: "execute",
            value: function () {
              var t = this.calculator,
                e = parseFloat(t.displayValue);
              if (t.operator && t.waitingForSecondOperand)
                return ((t.operator = this.operator), void t.updateDisplay());
              if (null === t.firstOperand) t.firstOperand = e;
              else if (t.operator) {
                var n = t.calculateResult(t.firstOperand, e, t.operator);
                ((t.displayValue = parseFloat(n.toFixed(10)).toString()),
                  (t.firstOperand = n),
                  t.updateDisplay());
              }
              ((t.waitingForSecondOperand = !0),
                (t.operator = this.operator),
                t.updateDisplay());
            },
          },
        ])
      );
    })(F),
    T = (function (t) {
      function e() {
        return (u(this, e), S(this, e, arguments));
      }
      return (
        i(e, t),
        l(e, [
          {
            key: "execute",
            value: function () {
              var t = this.calculator;
              if (null !== t.operator && !t.waitingForSecondOperand) {
                var e = parseFloat(t.displayValue),
                  n = t.calculateResult(t.firstOperand, e, t.operator);
                (Object.assign(t, {
                  displayValue: parseFloat(n.toFixed(10)).toString(),
                  firstOperand: null,
                  operator: null,
                  waitingForSecondOperand: !1,
                }),
                  t.updateDisplay());
              }
            },
          },
        ])
      );
    })(F),
    P = (function (t) {
      function e() {
        return (u(this, e), S(this, e, arguments));
      }
      return (
        i(e, t),
        l(e, [
          {
            key: "execute",
            value: function () {
              var t = this.calculator,
                e = parseFloat(t.displayValue);
              (e >= 0
                ? (t.displayValue = Math.pow(e, 0.5).toString())
                : t.showErrorAndClear(),
                t.updateDisplay());
            },
          },
        ])
      );
    })(F),
    R = (function (t) {
      function e() {
        return (u(this, e), S(this, e, arguments));
      }
      return (
        i(e, t),
        l(e, [
          {
            key: "execute",
            value: function () {
              var t = this.calculator;
              ((t.displayValue = Math.pow(
                parseFloat(t.displayValue),
                1 / 3
              ).toString()),
                t.updateDisplay());
            },
          },
        ])
      );
    })(F),
    _ = (function (t) {
      function e() {
        return (u(this, e), S(this, e, arguments));
      }
      return (
        i(e, t),
        l(e, [
          {
            key: "execute",
            value: function () {
              var t = this.calculator;
              ((t.firstOperand = parseFloat(t.displayValue)),
                (t.operator = "root"),
                (t.waitingForSecondOperand = !0));
            },
          },
        ])
      );
    })(F),
    H = (function (t) {
      function e() {
        return (u(this, e), S(this, e, arguments));
      }
      return (
        i(e, t),
        l(e, [
          {
            key: "execute",
            value: function () {
              var t = this.calculator;
              ((t.firstOperand = parseFloat(t.displayValue)),
                (t.operator = "pow"),
                (t.waitingForSecondOperand = !0));
            },
          },
        ])
      );
    })(F),
    N = (function (t) {
      function e() {
        return (u(this, e), S(this, e, arguments));
      }
      return (
        i(e, t),
        l(e, [
          {
            key: "execute",
            value: function () {
              var t = this.calculator;
              ((t.displayValue = Math.pow(
                parseFloat(t.displayValue),
                2
              ).toString()),
                t.updateDisplay());
            },
          },
        ])
      );
    })(F),
    B = (function (t) {
      function e() {
        return (u(this, e), S(this, e, arguments));
      }
      return (
        i(e, t),
        l(e, [
          {
            key: "execute",
            value: function () {
              var t = this.calculator;
              ((t.displayValue = Math.pow(
                parseFloat(t.displayValue),
                3
              ).toString()),
                t.updateDisplay());
            },
          },
        ])
      );
    })(F),
    q = (function (t) {
      function e() {
        return (u(this, e), S(this, e, arguments));
      }
      return (
        i(e, t),
        l(e, [
          {
            key: "execute",
            value: function () {
              var t = this.calculator;
              ((t.displayValue = Math.pow(
                10,
                parseFloat(t.displayValue)
              ).toString()),
                t.updateDisplay());
            },
          },
        ])
      );
    })(F),
    z = (function (t) {
      function e() {
        return (u(this, e), S(this, e, arguments));
      }
      return (
        i(e, t),
        l(e, [
          {
            key: "execute",
            value: function () {
              var t = this.calculator;
              if ("0" === t.displayValue) t.displayValue = "1";
              else if (
                t.displayValue < 0 ||
                !Number.isInteger(parseFloat(t.displayValue))
              )
                t.showErrorAndClear();
              else {
                for (var e = 1, n = 1; n <= parseFloat(t.displayValue); n++)
                  e *= n;
                t.displayValue = e.toString();
              }
              t.updateDisplay();
            },
          },
        ])
      );
    })(F),
    L = (function (t) {
      function e() {
        return (u(this, e), S(this, e, arguments));
      }
      return (
        i(e, t),
        l(e, [
          {
            key: "execute",
            value: function () {
              ((this.calculator.memory = 0),
                this.calculator.updateMemoryIndicator());
            },
          },
        ])
      );
    })(F),
    U = (function (t) {
      function e() {
        return (u(this, e), S(this, e, arguments));
      }
      return (
        i(e, t),
        l(e, [
          {
            key: "execute",
            value: function () {
              ((this.calculator.displayValue =
                this.calculator.memory.toString()),
                this.calculator.updateDisplay());
            },
          },
        ])
      );
    })(F),
    W = (function (t) {
      function e() {
        return (u(this, e), S(this, e, arguments));
      }
      return (
        i(e, t),
        l(e, [
          {
            key: "execute",
            value: function () {
              ((this.calculator.memory += parseFloat(
                this.calculator.displayValue
              )),
                this.calculator.updateMemoryIndicator());
            },
          },
        ])
      );
    })(F),
    J = (function (t) {
      function e() {
        return (u(this, e), S(this, e, arguments));
      }
      return (
        i(e, t),
        l(e, [
          {
            key: "execute",
            value: function () {
              ((this.calculator.memory -= parseFloat(
                this.calculator.displayValue
              )),
                this.calculator.updateMemoryIndicator());
            },
          },
        ])
      );
    })(F),
    G = (function () {
      return l(
        function t() {
          (u(this, t),
            (this.displayValue = "0"),
            (this.firstOperand = null),
            (this.operator = null),
            (this.waitingForSecondOperand = !1),
            (this.memory = 0),
            (this.history = []),
            (this.inputHistory = document.getElementById("input-history")),
            (this.display = document.getElementById("display")),
            (this.memoryIndicator =
              document.getElementById("memory-indicator")),
            (this.historyIndicator =
              document.getElementById("history-indicator")));
        },
        [
          {
            key: "executeCommand",
            value: function (t) {
              (t.execute(),
                t instanceof M || this.history.push(t),
                this.updateHistoryIndicator());
            },
          },
          {
            key: "undo",
            value: function () {
              this.history.length > 0 &&
                (this.history.pop().undo(), this.updateHistoryIndicator());
            },
          },
          {
            key: "appendNumber",
            value: function (t) {
              this.executeCommand(new I(this, t));
            },
          },
          {
            key: "appendDecimal",
            value: function () {
              this.executeCommand(new D(this));
            },
          },
          {
            key: "clear",
            value: function () {
              this.executeCommand(new M(this));
            },
          },
          {
            key: "toggleSign",
            value: function () {
              this.executeCommand(new j(this));
            },
          },
          {
            key: "reciprocal",
            value: function () {
              this.executeCommand(new E(this));
            },
          },
          {
            key: "setOperator",
            value: function (t) {
              this.executeCommand(new A(this, t));
            },
          },
          {
            key: "calculate",
            value: function () {
              this.executeCommand(new T(this));
            },
          },
          {
            key: "squareRoot",
            value: function () {
              this.executeCommand(new P(this));
            },
          },
          {
            key: "cubeRoot",
            value: function () {
              this.executeCommand(new R(this));
            },
          },
          {
            key: "nthRoot",
            value: function () {
              this.executeCommand(new _(this));
            },
          },
          {
            key: "powerOfTwo",
            value: function () {
              this.executeCommand(new N(this));
            },
          },
          {
            key: "powerOfThree",
            value: function () {
              this.executeCommand(new B(this));
            },
          },
          {
            key: "power",
            value: function () {
              this.executeCommand(new H(this));
            },
          },
          {
            key: "powerOfTen",
            value: function () {
              this.executeCommand(new q(this));
            },
          },
          {
            key: "factorial",
            value: function () {
              this.executeCommand(new z(this));
            },
          },
          {
            key: "memoryClear",
            value: function () {
              this.executeCommand(new L(this));
            },
          },
          {
            key: "memoryRecall",
            value: function () {
              this.executeCommand(new U(this));
            },
          },
          {
            key: "memoryAdd",
            value: function () {
              this.executeCommand(new W(this));
            },
          },
          {
            key: "memorySubtract",
            value: function () {
              this.executeCommand(new J(this));
            },
          },
          {
            key: "calculateResult",
            value: function (t, e, n) {
              switch (n) {
                case "+":
                  return t + e;
                case "-":
                  return t - e;
                case "*":
                  return t * e;
                case "/":
                  return t / e;
                case "pow":
                  return Math.pow(t, e);
                case "root":
                  return 0 === e ? NaN : Math.pow(t, 1 / e);
                default:
                  return e;
              }
            },
          },
          {
            key: "updateInputHistory",
            value: function () {
              var t = "";
              if (
                null !== this.firstOperand &&
                ((t += this.firstOperand), this.operator)
              ) {
                var e = this.operator;
                ("*" === e && (e = "×"),
                  "/" === e && (e = "÷"),
                  "pow" === e && (e = "^"),
                  "root" === e && (e = "√"),
                  (t += " " + e),
                  this.waitingForSecondOperand &&
                    (t += " " + this.displayValue));
              }
              (!1 === this.waitingForSecondOperand &&
                this.operator &&
                (t += " " + this.displayValue),
                (this.inputHistory.textContent = t.trim()));
            },
          },
          {
            key: "updateDisplay",
            value: function () {
              ((this.display.textContent = this.displayValue),
                this.updateInputHistory());
            },
          },
          {
            key: "updateMemoryIndicator",
            value: function () {
              this.memoryIndicator.textContent = 0 !== this.memory ? "M" : "";
            },
          },
          {
            key: "updateHistoryIndicator",
            value: function () {
              this.historyIndicator.textContent = this.history.length;
            },
          },
          {
            key: "showErrorAndClear",
            value: function () {
              var t = this;
              ((this.displayValue = "Error"),
                this.updateDisplay(),
                setTimeout(function () {
                  return t.executeCommand(new M(t));
                }, 1e3));
            },
          },
        ]
      );
    })();
  ("undefined" != typeof module &&
    module.exports &&
    (module.exports = {
      Calculator: G,
      AppendNumberCommand: I,
      AppendDecimalCommand: D,
      ClearCommand: M,
      ToggleSignCommand: j,
      ReciprocalCommand: E,
      SetOperatorCommand: A,
      CalculateCommand: T,
      Factorial: z,
    }),
    "undefined" != typeof window &&
      ((window.calculator = new G()), (window.Calculator = G)));
})();
