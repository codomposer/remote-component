(() => {
  "use strict";
  var e = {
      15: e => {
        e.exports = require("react");
      }
    },
    r = {};
  function t(o) {
    var n = r[o];
    if (void 0 !== n) return n.exports;
    var a = (r[o] = { exports: {} });
    return e[o](a, a.exports, t), a.exports;
  }
  (t.n = e => {
    var r = e && e.__esModule ? () => e.default : () => e;
    return t.d(r, { a: r }), r;
  }),
    (t.d = (e, r) => {
      for (var o in r)
        t.o(r, o) &&
          !t.o(e, o) &&
          Object.defineProperty(e, o, { enumerable: !0, get: r[o] });
    }),
    (t.o = (e, r) => Object.prototype.hasOwnProperty.call(e, r)),
    (t.r = e => {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    });
  var o = {};
  t.r(o), t.d(o, { default: () => u });
  var n = t(15),
    a = t.n(n);
  const u = function (e) {
    var r = e.children;
    return a().createElement("h1", null, r);
  };
  var l = exports;
  for (var d in o) l[d] = o[d];
  o.__esModule && Object.defineProperty(l, "__esModule", { value: !0 });
})();
