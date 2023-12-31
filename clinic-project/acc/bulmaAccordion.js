export default function bulmaAccordion() {
  return (function (n) {
    var r = {};
    function i(e) {
      if (r[e]) return r[e].exports;
      var t = (r[e] = { i: e, l: !1, exports: {} });
      return n[e].call(t.exports, t, t.exports, i), (t.l = !0), t.exports;
    }
    return (
      (i.m = n),
      (i.c = r),
      (i.d = function (e, t, n) {
        i.o(e, t) ||
          Object.defineProperty(e, t, {
            configurable: !1,
            enumerable: !0,
            get: n,
          });
      }),
      (i.n = function (e) {
        var t =
          e && e.__esModule
            ? function () {
                return e.default;
              }
            : function () {
                return e;
              };
        return i.d(t, "a", t), t;
      }),
      (i.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t);
      }),
      (i.p = ""),
      i((i.s = 0))
    );
  })([
    function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var i = n(1),
        o = (function () {
          function r(e, t) {
            for (var n = 0; n < t.length; n++) {
              var r = t[n];
              (r.enumerable = r.enumerable || !1),
                (r.configurable = !0),
                "value" in r && (r.writable = !0),
                Object.defineProperty(e, r.key, r);
            }
          }
          return function (e, t, n) {
            return t && r(e.prototype, t), n && r(e, n), e;
          };
        })();
      var a = Symbol("onBulmaAccordionClick"),
        r = (function (e) {
          function r(e) {
            1 < arguments.length && void 0 !== arguments[1] && arguments[1];
            !(function (e, t) {
              if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function");
            })(this, r);
            var t = (function (e, t) {
              if (!e)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              return !t || ("object" != typeof t && "function" != typeof t)
                ? e
                : t;
            })(this, (r.__proto__ || Object.getPrototypeOf(r)).call(this));
            if (
              ((t.element =
                "string" == typeof e ? document.querySelector(e) : e),
              !t.element)
            )
              throw new Error(
                "An invalid selector or non-DOM node has been provided."
              );
            return (
              (t._clickEvents = ["click"]), (t[a] = t[a].bind(t)), t.init(), t
            );
          }
          return (
            (function (e, t) {
              if ("function" != typeof t && null !== t)
                throw new TypeError(
                  "Super expression must either be null or a function, not " +
                    typeof t
                );
              (e.prototype = Object.create(t && t.prototype, {
                constructor: {
                  value: e,
                  enumerable: !1,
                  writable: !0,
                  configurable: !0,
                },
              })),
                t &&
                  (Object.setPrototypeOf
                    ? Object.setPrototypeOf(e, t)
                    : (e.__proto__ = t));
            })(r, i["a"]),
            o(
              r,
              [
                {
                  key: "init",
                  value: function () {
                    (this.items =
                      this.element.querySelectorAll(".accordion .toggle") ||
                      []),
                      this._bindEvents();
                  },
                },
                {
                  key: "destroy",
                  value: function () {
                    var n = this;
                    this.items.forEach(function (t) {
                      n._clickEvents.forEach(function (e) {
                        t.removeEventListener(e, n[a], !1);
                      });
                    });
                  },
                },
                {
                  key: "_bindEvents",
                  value: function () {
                    var n = this;
                    this.items.forEach(function (t) {
                      n._clickEvents.forEach(function (e) {
                        t.addEventListener(e, n[a], !1);
                      });
                    });
                  },
                },
                {
                  key: a,
                  value: function (e) {
                    e.preventDefault();
                    var t =
                      e.currentTarget.closest(".accordion") || e.currentTarget;
                    if (t.classList.contains("is-active"))
                      t.classList.remove("is-active");
                    else {
                      var n = this.element.querySelector(
                        ".accordion.is-active"
                      );
                      n && n.classList.remove("is-active"),
                        t.classList.add("is-active");
                    }
                  },
                },
              ],
              [
                {
                  key: "attach",
                  value: function () {
                    var e =
                        0 < arguments.length && void 0 !== arguments[0]
                          ? arguments[0]
                          : ".accordions",
                      t = new Array(),
                      n = document.querySelectorAll(e);
                    return (
                      [].forEach.call(n, function (e) {
                        setTimeout(function () {
                          t.push(new r(e));
                        }, 100);
                      }),
                      t
                    );
                  },
                },
              ]
            ),
            r
          );
        })();
      t.default = r;
    },
    function (e, t, n) {
      "use strict";
      var r = (function () {
        function r(e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            (r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              "value" in r && (r.writable = !0),
              Object.defineProperty(e, r.key, r);
          }
        }
        return function (e, t, n) {
          return t && r(e.prototype, t), n && r(e, n), e;
        };
      })();
      var i = (function () {
        function t() {
          var e =
            0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : [];
          !(function (e, t) {
            if (!(e instanceof t))
              throw new TypeError("Cannot call a class as a function");
          })(this, t),
            (this._listeners = new Map(e)),
            (this._middlewares = new Map());
        }
        return (
          r(t, [
            {
              key: "listenerCount",
              value: function (e) {
                return this._listeners.has(e)
                  ? this._listeners.get(e).length
                  : 0;
              },
            },
            {
              key: "removeListeners",
              value: function () {
                var t = this,
                  e =
                    0 < arguments.length && void 0 !== arguments[0]
                      ? arguments[0]
                      : null,
                  n =
                    1 < arguments.length &&
                    void 0 !== arguments[1] &&
                    arguments[1];
                null !== e
                  ? Array.isArray(e)
                    ? name.forEach(function (e) {
                        return t.removeListeners(e, n);
                      })
                    : (this._listeners.delete(e), n && this.removeMiddleware(e))
                  : (this._listeners = new Map());
              },
            },
            {
              key: "middleware",
              value: function (e, t) {
                var n = this;
                Array.isArray(e)
                  ? name.forEach(function (e) {
                      return n.middleware(e, t);
                    })
                  : (Array.isArray(this._middlewares.get(e)) ||
                      this._middlewares.set(e, []),
                    this._middlewares.get(e).push(t));
              },
            },
            {
              key: "removeMiddleware",
              value: function () {
                var t = this,
                  e =
                    0 < arguments.length && void 0 !== arguments[0]
                      ? arguments[0]
                      : null;
                null !== e
                  ? Array.isArray(e)
                    ? name.forEach(function (e) {
                        return t.removeMiddleware(e);
                      })
                    : this._middlewares.delete(e)
                  : (this._middlewares = new Map());
              },
            },
            {
              key: "on",
              value: function (e, t) {
                var n = this,
                  r =
                    2 < arguments.length &&
                    void 0 !== arguments[2] &&
                    arguments[2];
                if (Array.isArray(e))
                  e.forEach(function (e) {
                    return n.on(e, t);
                  });
                else {
                  var i = (e = e.toString()).split(/,|, | /);
                  1 < i.length
                    ? i.forEach(function (e) {
                        return n.on(e, t);
                      })
                    : (Array.isArray(this._listeners.get(e)) ||
                        this._listeners.set(e, []),
                      this._listeners.get(e).push({ once: r, callback: t }));
                }
              },
            },
            {
              key: "once",
              value: function (e, t) {
                this.on(e, t, !0);
              },
            },
            {
              key: "emit",
              value: function (n, r) {
                var i = this,
                  o =
                    2 < arguments.length &&
                    void 0 !== arguments[2] &&
                    arguments[2];
                n = n.toString();
                var a = this._listeners.get(n),
                  l = null,
                  s = 0,
                  c = o;
                if (Array.isArray(a))
                  for (
                    a.forEach(function (e, t) {
                      o ||
                        ((l = i._middlewares.get(n)),
                        Array.isArray(l)
                          ? (l.forEach(function (e) {
                              e(
                                r,
                                function () {
                                  var e =
                                    0 < arguments.length &&
                                    void 0 !== arguments[0]
                                      ? arguments[0]
                                      : null;
                                  null !== e && (r = e), s++;
                                },
                                n
                              );
                            }),
                            s >= l.length && (c = !0))
                          : (c = !0)),
                        c && (e.once && (a[t] = null), e.callback(r));
                    });
                    -1 !== a.indexOf(null);

                  )
                    a.splice(a.indexOf(null), 1);
              },
            },
          ]),
          t
        );
      })();
      t.a = i;
    },
  ]).default;
}
