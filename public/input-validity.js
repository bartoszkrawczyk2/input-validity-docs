function t(t, e) {
  if (e != null && typeof Symbol !== "undefined" && e[Symbol.hasInstance]) {
    return !!e[Symbol.hasInstance](t);
  } else {
    return t instanceof e;
  }
}
var InputValidity = (function () {
  var e = Object.defineProperty;
  var r = Object.getOwnPropertyDescriptor;
  var n = Object.getOwnPropertyNames;
  var a = Object.prototype.hasOwnProperty;
  var i = function (t, r) {
      for (var n in r) e(t, n, { get: r[n], enumerable: !0 });
    },
    u = function (t, i, u, o) {
      var s = true,
        l = false,
        c = undefined;
      if ((i && typeof i == "object") || typeof i == "function")
        try {
          var f = function () {
            var n = g.value;
            !a.call(t, n) &&
              n !== u &&
              e(t, n, {
                get: function () {
                  return i[n];
                },
                enumerable: !(o = r(i, n)) || o.enumerable,
              });
          };
          for (
            var m = n(i)[Symbol.iterator](), g;
            !(s = (g = m.next()).done);
            s = true
          )
            f();
        } catch (t) {
          l = true;
          c = t;
        } finally {
          try {
            if (!s && m.return != null) {
              m.return();
            }
          } finally {
            if (l) {
              throw c;
            }
          }
        }
      return t;
    };
  var o = function (t) {
    return u(e({}, "__esModule", { value: !0 }), t);
  };
  var s = {};
  i(s, {
    init: function () {
      return f;
    },
  });
  var l = {
      badInput: "message-bad-input",
      customError: "message-custom-error",
      patternMismatch: "message-pattern-mismatch",
      rangeOverflow: "message-range-overflow",
      rangeUnderflow: "message-range-underflow",
      stepMismatch: "message-step-mismatch",
      tooLong: "message-too-long",
      tooShort: "message-too-short",
      typeMismatch: "message-type-mismatch",
      valid: "message-valid",
      valueMissing: "message-value-missing",
    },
    c = function (t) {
      var e = null;
      for (var r in t.validity)
        if (t.validity[r]) {
          e = t.getAttribute(l[r]);
          break;
        }
      return e || t.validationMessage;
    };
  document.addEventListener(
    "invalid",
    function (e) {
      if (!t(e.target, HTMLInputElement)) return;
      e.target.setAttribute("data-dirty", "true");
      var r = e.target.getAttribute("validation-message");
      if (!r) return;
      e.preventDefault();
      var n = document.querySelector(r);
      n && (n.textContent = c(e.target));
    },
    !0
  );
  window.addEventListener("input", function (e) {
    if (!t(e.target, HTMLInputElement) || !e.target.getAttribute("data-dirty"))
      return;
    var r = e.target.getAttribute("validation-message");
    if (!r) return;
    var n = document.querySelector(r);
    n && (n.textContent = c(e.target));
  });
  var f = function () {
    document.querySelectorAll("[pattern-value]").forEach(function (e) {
      var r = e.getAttribute("pattern-value");
      if (!r) return;
      var n = document.querySelector(r);
      n &&
        n.addEventListener("input", function (r) {
          t(r.target, HTMLInputElement) &&
            e.setAttribute(
              "pattern",
              r.target.value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
            );
        });
    });
  };
  f();
  return o(s);
})();
