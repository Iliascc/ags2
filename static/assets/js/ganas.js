var swfobject = function () {
  function x() {
    if (!v) {
      try {
        var a = d.getElementsByTagName("body")[0].appendChild(d.createElement("span"));
        a.parentNode.removeChild(a)
      }
      catch (b) {
        return
      }
      v = !0;
      for (var a = A.length, c = 0; c < a; c++) A[c]()
    }
  }

  function O(a) {
    v ? a() : A[A.length] = a
  }

  function P(a) {
    if (typeof p.addEventListener != k) p.addEventListener("load", a, !1);
    else if (typeof d.addEventListener != k) d.addEventListener("load", a, !1);
    else if (typeof p.attachEvent != k) X(p, "onload", a);
    else if ("function" == typeof p.onload) {
      var b = p.onload;
      p.onload = function () {
        b();
        a()
      }
    }
    else p.onload = a
  }

  function Y() {
    var a = d.getElementsByTagName("body")[0]
      , b = d.createElement(u);
    b.setAttribute("type", B);
    var c = a.appendChild(b);
    if (c) {
      var f = 0;
      (function () {
        if (typeof c.GetVariable != k) {
          var g = c.GetVariable("$version");
          g && (g = g.split(" ")[1].split(","), e.pv = [parseInt(g[0], 10), parseInt(g[1], 10), parseInt(g[2], 10)])
        }
        else if (10 > f) {
          f++;
          setTimeout(arguments.callee, 10);
          return
        }
        a.removeChild(b);
        c = null;
        G()
      })()
    }
    else G()
  }

  function G() {
    var a = s.length;
    if (0 < a)
      for (var b = 0; b < a; b++) {
        var c = s[b].id
          , f = s[b].callbackFn
          , g = {
            success: !1
            , id: c
          };
        if (0 < e.pv[0]) {
          var d = q(c);
          if (d)
            if (!C(s[b].swfVersion) || e.wk && 312 > e.wk)
              if (s[b].expressInstall && H()) {
                g = {};
                g.data = s[b].expressInstall;
                g.width = d.getAttribute("width") || "0";
                g.height = d.getAttribute("height") || "0";
                d.getAttribute("class") && (g.styleclass = d.getAttribute("class"));
                d.getAttribute("align") && (g.align = d.getAttribute("align"));
                for (var h = {}, d = d.getElementsByTagName("param"), l = d.length, m = 0; m < l; m++) "movie" != d[m].getAttribute("name").toLowerCase() && (h[d[m].getAttribute("name")] = d[m].getAttribute("value"));
                I(g, h, c, f)
              }
              else Z(d), f && f(g);
          else w(c, !0), f && (g.success = !0, g.ref = J(c), f(g))
        }
        else w(c, !0), f && ((c = J(c)) && typeof c.SetVariable != k && (g.success = !0, g.ref = c), f(g))
      }
  }

  function J(a) {
    var b = null;
    (a = q(a)) && "OBJECT" == a.nodeName && (typeof a.SetVariable != k ? b = a : (a = a.getElementsByTagName(u)[0]) && (b = a));
    return b
  }

  function H() {
    return !D && C("6.0.65") && (e.win || e.mac) && !(e.wk && 312 > e.wk)
  }

  function I(a, b, c, f) {
    D = !0;
    K = f || null;
    Q = {
      success: !1
      , id: c
    };
    var g = q(c);
    if (g) {
      "OBJECT" == g.nodeName ? (z = L(g), E = null) : (z = g, E = c);
      a.id = R;
      if (typeof a.width == k || !/%$/.test(a.width) && 310 > parseInt(a.width, 10)) a.width = "310";
      if (typeof a.height == k || !/%$/.test(a.height) && 137 > parseInt(a.height, 10)) a.height = "137";
      d.title = d.title.slice(0, 47) + " - Flash Player Installation";
      f = e.ie && e.win ? "ActiveX" : "PlugIn";
      f = "MMredirectURL=" + p.location.toString().replace(/&/g, "%26") + "&MMplayerType=" + f + "&MMdoctitle=" + d.title;
      b.flashvars = typeof b.flashvars != k ? b.flashvars + ("&" + f) : f;
      e.ie && (e.win && 4 != g.readyState) && (f = d.createElement("div"), c += "SWFObjectNew", f.setAttribute("id", c), g.parentNode.insertBefore(f, g), g.style.display = "none", function () {
        4 == g.readyState ? g.parentNode.removeChild(g) : setTimeout(arguments.callee, 10)
      }());
      M(a, b, c)
    }
  }

  function Z(a) {
    if (e.ie && e.win && 4 != a.readyState) {
      var b = d.createElement("div");
      a.parentNode.insertBefore(b, a);
      b.parentNode.replaceChild(L(a), b);
      a.style.display = "none";
      (function () {
        4 == a.readyState ? a.parentNode.removeChild(a) : setTimeout(arguments.callee, 10)
      })()
    }
    else a.parentNode.replaceChild(L(a), a)
  }

  function L(a) {
    var b = d.createElement("div");
    if (e.win && e.ie) b.innerHTML = a.innerHTML;
    else if (a = a.getElementsByTagName(u)[0])
      if (a = a.childNodes)
        for (var c = a.length, f = 0; f < c; f++) 1 == a[f].nodeType && "PARAM" == a[f].nodeName || 8 == a[f].nodeType || b.appendChild(a[f].cloneNode(!0));
    return b
  }

  function M(a, b, c) {
    var f, g = q(c);
    if (e.wk && 312 > e.wk) return f;
    if (g)
      if (typeof a.id == k && (a.id = c), e.ie && e.win) {
        var r = ""
          , h;
        for (h in a) a[h] != Object.prototype[h] && ("data" == h.toLowerCase() ? b.movie = a[h] : "styleclass" == h.toLowerCase() ? r += ' class="' + a[h] + '"' : "classid" != h.toLowerCase() && (r += " " + h + '="' + a[h] + '"'));
        h = "";
        for (var l in b) b[l] != Object.prototype[l] && (h += '<param name="' + l + '" value="' + b[l] + '" />');
        g.outerHTML = '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"' + r + ">" + h + "</object>";
        F[F.length] = a.id;
        f = q(a.id)
      }
      else {
        l = d.createElement(u);
        l.setAttribute("type", B);
        for (var m in a) a[m] != Object.prototype[m] && ("styleclass" == m.toLowerCase() ? l.setAttribute("class", a[m]) : "classid" != m.toLowerCase() && l.setAttribute(m, a[m]));
        for (r in b) b[r] != Object.prototype[r] && "movie" != r.toLowerCase() && (a = l, h = r, m = b[r], c = d.createElement("param"), c.setAttribute("name", h), c.setAttribute("value", m), a.appendChild(c));
        g.parentNode.replaceChild(l, g);
        f = l
      }
    return f
  }

  function S(a) {
    var b = q(a);
    b && "OBJECT" == b.nodeName && (e.ie && e.win ? (b.style.display = "none", function () {
      if (4 == b.readyState) {
        var c = q(a);
        if (c) {
          for (var f in c) "function" == typeof c[f] && (c[f] = null);
          c.parentNode.removeChild(c)
        }
      }
      else setTimeout(arguments.callee, 10)
    }()) : b.parentNode.removeChild(b))
  }

  function q(a) {
    var b = null;
    try {
      b = d.getElementById(a)
    }
    catch (c) {}
    return b
  }

  function X(a, b, c) {
    a.attachEvent(b, c);
    y[y.length] = [a, b, c]
  }

  function C(a) {
    var b = e.pv;
    a = a.split(".");
    a[0] = parseInt(a[0], 10);
    a[1] = parseInt(a[1], 10) || 0;
    a[2] = parseInt(a[2], 10) || 0;
    return b[0] > a[0] || b[0] == a[0] && b[1] > a[1] || b[0] == a[0] && b[1] == a[1] && b[2] >= a[2] ? !0 : !1
  }

  function T(a, b, c, f) {
    if (!e.ie || !e.mac) {
      var g = d.getElementsByTagName("head")[0];
      g && (c = c && "string" == typeof c ? c : "screen", f && (N = n = null), n && N == c || (f = d.createElement("style"), f.setAttribute("type", "text/css"), f.setAttribute("media", c), n = g.appendChild(f), e.ie && (e.win && typeof d.styleSheets != k && 0 < d.styleSheets.length) && (n = d.styleSheets[d.styleSheets.length - 1]), N = c), e.ie && e.win ? n && typeof n.addRule == u && n.addRule(a, b) : n && typeof d.createTextNode != k && n.appendChild(d.createTextNode(a + " {" + b + "}")))
    }
  }

  function w(a, b) {
    if (U) {
      var c = b ? "visible" : "hidden";
      v && q(a) ? q(a).style.visibility = c : T("#" + a, "visibility:" + c)
    }
  }

  function V(a) {
    return null != /[\\\"<>\.;]/.exec(a) && typeof encodeURIComponent != k ? encodeURIComponent(a) : a
  }
  var k = "undefined"
    , u = "object"
    , B = "application/x-shockwave-flash"
    , R = "SWFObjectExprInst"
    , p = window
    , d = document
    , t = navigator
    , W = !1
    , A = [function () {
      W ? Y() : G()
    }]
    , s = []
    , F = []
    , y = []
    , z, E, K, Q, v = !1
    , D = !1
    , n, N, U = !0
    , e = function () {
      var a = typeof d.getElementById != k && typeof d.getElementsByTagName != k && typeof d.createElement != k
        , b = t.userAgent.toLowerCase()
        , c = t.platform.toLowerCase()
        , f = c ? /win/.test(c) : /win/.test(b)
        , c = c ? /mac/.test(c) : /mac/.test(b)
        , b = /webkit/.test(b) ? parseFloat(b.replace(/^.*webkit\/(\d+(\.\d+)?).*$/, "$1")) : !1
        , g = !+"\v1"
        , e = [0, 0, 0]
        , h = null;
      if (typeof t.plugins != k && typeof t.plugins["Shockwave Flash"] == u) !(h = t.plugins["Shockwave Flash"].description) || typeof t.mimeTypes != k && t.mimeTypes[B] && !t.mimeTypes[B].enabledPlugin || (W = !0, g = !1, h = h.replace(/^.*\s+(\S+\s+\S+$)/, "$1"), e[0] = parseInt(h.replace(/^(.*)\..*$/, "$1"), 10), e[1] = parseInt(h.replace(/^.*\.(.*)\s.*$/, "$1"), 10), e[2] = /[a-zA-Z]/.test(h) ? parseInt(h.replace(/^.*[a-zA-Z]+(.*)$/, "$1"), 10) : 0);
      else if (typeof p.ActiveXObject != k) try {
        var l = new ActiveXObject("ShockwaveFlash.ShockwaveFlash");
        l && (h = l.GetVariable("$version")) && (g = !0, h = h.split(" ")[1].split(","), e = [parseInt(h[0], 10), parseInt(h[1], 10), parseInt(h[2], 10)])
      }
      catch (m) {}
      return {
        w3: a
        , pv: e
        , wk: b
        , ie: g
        , win: f
        , mac: c
      }
    }();
  (function () {
    e.w3 && ((typeof d.readyState != k && "complete" == d.readyState || typeof d.readyState == k && (d.getElementsByTagName("body")[0] || d.body)) && x(), v || (typeof d.addEventListener != k && d.addEventListener("DOMContentLoaded", x, !1), e.ie && e.win && (d.attachEvent("onreadystatechange", function () {
      "complete" == d.readyState && (d.detachEvent("onreadystatechange", arguments.callee), x())
    }), p == top && function () {
      if (!v) {
        try {
          d.documentElement.doScroll("left")
        }
        catch (a) {
          setTimeout(arguments.callee, 0);
          return
        }
        x()
      }
    }()), e.wk && function () {
      v || (/loaded|complete/.test(d.readyState) ? x() : setTimeout(arguments.callee, 0))
    }(), P(x)))
  })();
  (function () {
    e.ie && e.win && window.attachEvent("onunload", function () {
      for (var a = y.length, b = 0; b < a; b++) y[b][0].detachEvent(y[b][1], y[b][2]);
      a = F.length;
      for (b = 0; b < a; b++) S(F[b]);
      for (var c in e) e[c] = null;
      e = null;
      for (var f in swfobject) swfobject[f] = null;
      swfobject = null
    })
  })();
  return {
    registerObject: function (a, b, c, f) {
      if (e.w3 && a && b) {
        var d = {};
        d.id = a;
        d.swfVersion = b;
        d.expressInstall = c;
        d.callbackFn = f;
        s[s.length] = d;
        w(a, !1)
      }
      else f && f({
        success: !1
        , id: a
      })
    }
    , getObjectById: function (a) {
      if (e.w3) return J(a)
    }
    , embedSWF: function (a, b, c, d, g, r, h, l, m, p) {
      var q = {
        success: !1
        , id: b
      };
      e.w3 && !(e.wk && 312 > e.wk) && a && b && c && d && g ? (w(b, !1), O(function () {
        c += "";
        d += "";
        var e = {};
        if (m && typeof m === u)
          for (var n in m) e[n] = m[n];
        e.data = a;
        e.width = c;
        e.height = d;
        n = {};
        if (l && typeof l === u)
          for (var s in l) n[s] = l[s];
        if (h && typeof h === u)
          for (var t in h) n.flashvars = typeof n.flashvars != k ? n.flashvars + ("&" + t + "=" + h[t]) : t + "=" + h[t];
        if (C(g)) s = M(e, n, b), e.id == b && w(b, !0), q.success = !0, q.ref = s;
        else {
          if (r && H()) {
            e.data = r;
            I(e, n, b, p);
            return
          }
          w(b, !0)
        }
        p && p(q)
      })) : p && p(q)
    }
    , switchOffAutoHideShow: function () {
      U = !1
    }
    , ua: e
    , getFlashPlayerVersion: function () {
      return {
        major: e.pv[0]
        , minor: e.pv[1]
        , release: e.pv[2]
      }
    }
    , hasFlashPlayerVersion: C
    , createSWF: function (a, b, c) {
      if (e.w3) return M(a, b, c)
    }
    , showExpressInstall: function (a, b, c, d) {
      e.w3 && H() && I(a, b, c, d)
    }
    , removeSWF: function (a) {
      e.w3 && S(a)
    }
    , createCSS: function (a, b, c, d) {
      e.w3 && T(a, b, c, d)
    }
    , addDomLoadEvent: O
    , addLoadEvent: P
    , getQueryParamValue: function (a) {
      var b = d.location.search || d.location.hash;
      if (b) {
        /\?/.test(b) && (b = b.split("?")[1]);
        if (null == a) return V(b);
        for (var b = b.split("&"), c = 0; c < b.length; c++)
          if (b[c].substring(0, b[c].indexOf("=")) == a) return V(b[c].substring(b[c].indexOf("=") + 1))
      }
      return ""
    }
    , expressInstallCallback: function () {
      if (D) {
        var a = q(R);
        a && z && (a.parentNode.replaceChild(z, a), E && (w(E, !0), e.ie && e.win && (z.style.display = "block")), K && K(Q));
        D = !1
      }
    }
  }
}();
window.Modernizr = function (p, d, t) {
  function k(b, a) {
    for (var c in b)
      if (D[b[c]] !== t) return "pfx" == a ? b[c] : !0;
    return !1
  }
  var f = {}
    , B = d.documentElement;
  d.head || d.getElementsByTagName("head");
  var m = d.createElement("modernizr")
    , D = m.style
    , E = ["Webkit", "Moz", "O", "ms", "Khtml"]
    , m = {}
    , C = []
    , z = function () {
      var b = {
        select: "input"
        , change: "input"
        , submit: "form"
        , reset: "form"
        , error: "img"
        , load: "img"
        , abort: "img"
      };
      return function (a, c) {
        c = c || d.createElement(b[a] || "div");
        a = "on" + a;
        var w = a in c;
        w || (c.setAttribute || (c = d.createElement("div")), c.setAttribute && c.removeAttribute && (c.setAttribute(a, ""), w = "function" === typeof c[a], typeof c[a] === t || (c[a] = t), c.removeAttribute(a)));
        return w
      }
    }()
    , e, q = {}.hasOwnProperty
    , x;
  typeof q !== t && typeof q.call !== t ? x = function (b, a) {
    return q.call(b, a)
  } : x = function (b, a) {
    return a in b && typeof b.constructor.prototype[a] === t
  };
  m.video = function () {
    var b = d.createElement("video")
      , a = !1;
    try {
      if (a = !!b.canPlayType) a = new Boolean(a), a.ogg = b.canPlayType('video/ogg; codecs="theora"'), a.h264 = b.canPlayType('video/mp4; codecs="avc1.42E01E"') || b.canPlayType('video/mp4; codecs="avc1.42E01E, mp4a.40.2"'), a.webm = b.canPlayType('video/webm; codecs="vp8, vorbis"')
    }
    catch (c) {}
    return a
  };
  m.audio = function () {
    var b = d.createElement("audio")
      , a = !1;
    try {
      if (a = !!b.canPlayType) a = new Boolean(a), a.ogg = b.canPlayType('audio/ogg; codecs="vorbis"'), a.mp3 = b.canPlayType("audio/mpeg;"), a.wav = b.canPlayType('audio/wav; codecs="1"'), a.m4a = b.canPlayType("audio/x-m4a;") || b.canPlayType("audio/aac;")
    }
    catch (c) {}
    return a
  };
  for (var n in m) x(m, n) && (e = n.toLowerCase(), f[e] = m[n](), C.push((f[e] ? "" : "no-") + e));
  D.cssText = "";
  m = null;
  p.attachEvent && function () {
    var b = d.createElement("div");
    b.innerHTML = "<elem></elem>";
    return 1 !== b.childNodes.length
  }() && function (b, a) {
    function c(h) {
      for (var a = -1; ++a < k;) h.createElement(g[a])
    }
    b.iepp = b.iepp || {};
    var d = b.iepp
      , e = d.html5elements || "abbr|article|aside|audio|canvas|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video"
      , g = e.split("|")
      , k = g.length
      , f = RegExp("(^|\\s)(" + e + ")", "gi")
      , m = RegExp("<(/*)(" + e + ")", "gi")
      , n = /^\s*[\{\}]\s*$/
      , q = RegExp("(^|[^\\n]*?\\s)(" + e + ")([^\\n]*)({[\\n\\w\\W]*?})", "gi")
      , p = a.createDocumentFragment()
      , u = a.documentElement
      , e = u.firstChild
      , r = a.createElement("body")
      , v = a.createElement("style")
      , s = /print|all/
      , h;
    d.getCSS = function (h, a) {
      if (h + "" === t) return "";
      for (var b = -1, c = h.length, e, g = []; ++b < c;) e = h[b], e.disabled || (a = e.media || a, s.test(a) && g.push(d.getCSS(e.imports, a), e.cssText), a = "all");
      return g.join("")
    };
    d.parseCSS = function (h) {
      for (var a = [], b; null != (b = q.exec(h));) a.push(((n.exec(b[1]) ? "\n" : b[1]) + b[2] + b[3]).replace(f, "$1.iepp_$2") + b[4]);
      return a.join("\n")
    };
    d.writeHTML = function () {
      var b = -1;
      for (h = h || a.body; ++b < k;)
        for (var d = a.getElementsByTagName(g[b]), c = d.length, e = -1; ++e < c;) 0 > d[e].className.indexOf("iepp_") && (d[e].className += " iepp_" + g[b]);
      p.appendChild(h);
      u.appendChild(r);
      r.className = h.className;
      r.id = h.id;
      r.innerHTML = h.innerHTML.replace(m, "<$1font")
    };
    d._beforePrint = function () {
      v.styleSheet.cssText = d.parseCSS(d.getCSS(a.styleSheets, "all"));
      d.writeHTML()
    };
    d.restoreHTML = function () {
      r.innerHTML = "";
      u.removeChild(r);
      u.appendChild(h)
    };
    d._afterPrint = function () {
      d.restoreHTML();
      v.styleSheet.cssText = ""
    };
    c(a);
    c(p);
    d.disablePP || (e.insertBefore(v, e.firstChild), v.media = "print", v.className = "iepp-printshim", b.attachEvent("onbeforeprint", d._beforePrint), b.attachEvent("onafterprint", d._afterPrint))
  }(p, d);
  f._version = "2.0.6";
  f._prefixes = " -webkit- -moz- -o- -ms- -khtml- ".split(" ");
  f._domPrefixes = E;
  f.hasEvent = z;
  f.testProp = function (b) {
    return k([b])
  };
  f.testAllProps = function (b, a) {
    var d = b.charAt(0).toUpperCase() + b.substr(1)
      , d = (b + " " + E.join(d + " ") + d).split(" ");
    return k(d, a)
  };
  f.testStyles = function (b, a, c, e) {
    var k, g = d.createElement("div");
    if (parseInt(c, 10))
      for (; c--;) k = d.createElement("div"), k.id = e ? e[c] : "modernizr" + (c + 1), g.appendChild(k);
    c = ["&shy;<style>", b, "</style>"].join("");
    g.id = "modernizr";
    g.innerHTML += c;
    B.appendChild(g);
    b = a(g, b);
    g.parentNode.removeChild(g);
    return !!b
  };
  B.className = B.className.replace(/\bno-js\b/, "") + (" js " + C.join(" "));
  return f
}(this, this.document);
(function (p, d, t) {
  function k() {
    for (var h = 1, b = -1; n.length - ++b && (!n[b].s || (h = n[b].r)););
    h && m()
  }

  function f(b) {
    var a = d.createElement("script")
      , c;
    a.src = b.s;
    a.onreadystatechange = a.onload = function () {
      c || a.readyState && "loaded" != a.readyState && "complete" != a.readyState || (c = 1, k(), a.onload = a.onreadystatechange = null)
    };
    e(function () {
      c || (c = 1, k())
    }, s.errorTimeout);
    b.e ? a.onload() : q.parentNode.insertBefore(a, q)
  }

  function B(b) {
    var c = d.createElement("link")
      , y;
    c.href = b.s;
    c.rel = "stylesheet";
    c.type = "text/css";
    if (b.e || !g && !a) c.onload = function () {
      y || (y = 1, e(function () {
        k()
      }, 0))
    }, b.e && c.onload();
    else {
      var f = function (b) {
        e(function () {
          if (!y) try {
            b.sheet.cssRules.length ? (y = 1, k()) : f(b)
          }
          catch (a) {
            1E3 == a.code || "security" == a.message || "denied" == a.message ? (y = 1, e(function () {
              k()
            }, 0)) : f(b)
          }
        }, 0)
      };
      f(c)
    }
    e(function () {
      y || (y = 1, k())
    }, s.errorTimeout);
    !b.e && q.parentNode.insertBefore(c, q)
  }

  function m() {
    var a = n.shift();
    b = 1;
    a ? a.t ? e(function () {
      "c" == a.t ? B(a) : f(a)
    }, 0) : (a(), k()) : b = 0
  }

  function D(a, g, f, p, t, N) {
    function r() {
      G || l.readyState && "loaded" != l.readyState && "complete" != l.readyState || (A.r = G = 1, !b && k(), l.onload = l.onreadystatechange = null, e(function () {
        w.removeChild(l)
      }, 0))
    }
    var l = d.createElement(a)
      , G = 0
      , A = {
        t: f
        , s: g
        , e: N
      };
    l.src = l.data = g;
    !c && (l.style.display = "none");
    l.width = l.height = "0";
    "object" != a && (l.type = f);
    l.onload = l.onreadystatechange = r;
    "img" == a ? l.onerror = r : "script" == a && (l.onerror = function () {
      A.e = A.r = 1;
      m()
    });
    n.splice(p, 0, A);
    w.insertBefore(l, c ? null : q);
    e(function () {
      G || (w.removeChild(l), A.r = A.e = G = 1, k())
    }, s.errorTimeout)
  }

  function E(a, d, c) {
    var e = "c" == d ? M : I;
    b = 0;
    d = d || "j";
    F(a) ? D(e, a, d, this.i++, z, c) : (n.splice(this.i++, 0, a), 1 == n.length && m());
    return this
  }

  function C() {
    var a = s;
    a.loader = {
      load: E
      , i: 0
    };
    return a
  }
  var z = d.documentElement
    , e = p.setTimeout
    , q = d.getElementsByTagName("script")[0]
    , x = {}.toString
    , n = []
    , b = 0
    , a = "MozAppearance" in z.style
    , c = a && !!d.createRange().compareNode
    , w = c ? z : q.parentNode
    , L = p.opera && "[object Opera]" == x.call(p.opera)
    , g = "webkitAppearance" in z.style
    , K = g && "async" in d.createElement("script")
    , I = a ? "object" : L || K ? "img" : "script"
    , M = g ? "img" : I
    , J = Array.isArray || function (a) {
      return "[object Array]" == x.call(a)
    }
    , F = function (a) {
      return "string" == typeof a
    }
    , H = function (a) {
      return "[object Function]" == x.call(a)
    }
    , u = []
    , r = {}
    , v, s;
  s = function (a) {
    function b(a) {
      a = a.split("!");
      var d = u.length
        , c = a.pop()
        , e = a.length
        , c = {
          url: c
          , origUrl: c
          , prefixes: a
        }
        , g, f;
      for (f = 0; f < e; f++)(g = r[a[f]]) && (c = g(c));
      for (f = 0; f < d; f++) c = u[f](c);
      return c
    }

    function d(a, c, e, f, g) {
      var h = b(a)
        , k = h.autoCallback;
      if (!h.bypass) {
        c && (c = H(c) ? c : c[a] || c[f] || c[a.split("/").pop().split("?")[0]]);
        if (h.instead) return h.instead(a, c, e, f, g);
        e.load(h.url, h.forceCSS || !h.forceJS && /css$/.test(h.url) ? "c" : t, h.noexec);
        (H(c) || H(k)) && e.load(function () {
          C();
          c && c(h.origUrl, g, f);
          k && k(h.origUrl, g, f)
        })
      }
    }

    function c(a, b) {
      function e(a) {
        if (F(a)) d(a, h, b, 0, f);
        else if (Object(a) === a)
          for (k in a) a.hasOwnProperty(k) && d(a[k], h, b, k, f)
      }
      var f = !!a.test
        , g = a.load || a.both
        , h = a.callback
        , k;
      e(f ? a.yep : a.nope);
      e(g);
      a.complete && b.load(a.complete)
    }
    var e, g, f = this.yepnope.loader;
    if (F(a)) d(a, 0, f, 0);
    else if (J(a))
      for (e = 0; e < a.length; e++) g = a[e], F(g) ? d(g, 0, f, 0) : J(g) ? s(g) : Object(g) === g && c(g, f);
    else Object(a) === a && c(a, f)
  };
  s.addPrefix = function (a, b) {
    r[a] = b
  };
  s.addFilter = function (a) {
    u.push(a)
  };
  s.errorTimeout = 1E4;
  null == d.readyState && d.addEventListener && (d.readyState = "loading", d.addEventListener("DOMContentLoaded", v = function () {
    d.removeEventListener("DOMContentLoaded", v, 0);
    d.readyState = "complete"
  }, 0));
  p.yepnope = C()
})(this, this.document);
Modernizr.load = function () {
  yepnope.apply(window, [].slice.call(arguments, 0))
};
(function () {
  function h() {
    var a = navigator.userAgent.toLowerCase();
    return -1 != a.indexOf("msie") ? parseInt(a.split("msie")[1]) : !1
  }
  if (void 0 == jQuery) console.log("Jquery not included!");
  else if (void 0 == Modernizr.video) console.log("Modernizr not included!");
  else {
    var b = jQuery
      , k = h()
      , g = 0
      , e = 0;
    jQuery.fn.extend({
      ensureLoad: function (a) {
        return this.each(function () {
          this.complete || 4 === this.readyState ? a.call(this) : "uninitialized" === this.readyState && 0 === this.src.indexOf("data:") ? (b(this).trigger("error"), a.call(this)) : (b(this).one("load", a), k && (void 0 != this.src && -1 == this.src.indexOf("?")) && (this.src = this.src + "?" + (new Date).getTime()))
        })
      }
    });
    video_background = function (a, f) {
      this.hidden = !1;
      this.$holder = a;
      this.id = "video_background_video_" + g;
      g++;
      this.parameters = {
        position: "absolute"
        , "z-index": "-1"
        , video_ratio: !1
        , loop: !0
        , autoplay: !0
        , muted: !1
        , mp4: !1
        , webm: !1
        , ogg: !1
        , flv: !1
        , youtube: !1
        , priority: "html5"
        , fallback_image: !1
        , sizing: "fill"
        , start: 0
      };
      b.each(f, b.proxy(function (a, b) {
        this.parameters[a] = b
      }, this));
      this.$video_holder = b('<div id="' + this.id + '"></div>').appendTo(a).css({
        "z-index": this.parameters["z-index"]
        , position: this.parameters.position
        , top: 0
        , left: 0
        , right: 0
        , bottom: 0
        , overflow: "hidden"
      });
      this.ismobile = navigator.userAgent.match(/(iPad)|(iPhone)|(iPod)|(android)|(webOS)/i);
      this.supports_flash = 9 < swfobject.getFlashPlayerVersion().major && (!1 !== this.parameters.mp4 || !1 !== this.parameters.flv);
      this.supports_video = Modernizr.video && (Modernizr.video.h264 && !1 !== this.parameters.mp4 || Modernizr.video.ogg && !1 !== this.parameters.ogg || Modernizr.video.webm && !1 !== this.parameters.webm);
      this.decision = "image";
      this.ismobile || !this.supports_flash && !this.supports_video && !1 === this.parameters.youtube || (this.decision = this.parameters.priority, !1 !== this.parameters.youtube ? this.decision = "youtube" : "flash" == this.parameters.priority && this.supports_flash ? this.decision = "flash" : "html5" == this.parameters.priority && this.supports_video ? this.decision = "html5" : this.supports_flash ? this.decision = "flash" : this.supports_video && (this.decision = "html5"));
      "image" == this.decision ? this.make_image() : "youtube" == this.decision ? this.make_youtube() : "html5" == this.decision ? this.make_video() : this.make_flash();
      return this
    };
    video_background.prototype = {
      make_video: function () {
        var a = '<video width="100%" height="100%" ' + ((this.parameters.autoplay ? "autoplay " : "") + (this.parameters.loop ? 'loop onended="this.play()" ' : "")) + ">";
        !1 !== this.parameters.mp4 && (a += '<source src="' + this.parameters.mp4 + '" type="video/mp4"></source>');
        !1 !== this.parameters.webm && (a += '<source src="' + this.parameters.webm + '" type="video/webm"></source>');
        !1 !== this.parameters.ogg && (a += '<source src="' + this.parameters.ogg + '" type="video/ogg"></source>');
        this.$video = b(a + "</video>").css({
          position: "absolute"
        });
        this.$video_holder.append(this.$video);
        this.video = this.$video.get(0);
        !1 !== this.parameters.video_ratio && (this.resize_timeout = !1, b(window).resize(b.proxy(function () {
          clearTimeout(this.resize_timeout);
          this.resize_timeout = setTimeout(b.proxy(this.video_resize, this), 10)
        }, this)), this.video_resize());
        this.parameters.muted && this.mute()
      }
      , video_resize: function () {
        var a = this.$video_holder.width()
          , b = this.$video_holder.height()
          , c = a
          , d = a / this.parameters.video_ratio;
        d < b && (d = b, c = b * this.parameters.video_ratio);
        d = Math.ceil(d);
        c = Math.ceil(c);
        b = Math.round(b / 2 - d / 2);
        a = Math.round(a / 2 - c / 2);
        this.$video.attr("width", c);
        this.$video.attr("height", d);
        this.$video.css({
          top: b + "px"
          , left: a + "px"
        })
      }
      , make_youtube: function () {
        var a = b("html");
        this.$video = b('<div id="' + this.id + '_yt"></div>').appendTo(this.$video_holder).css({
          position: "absolute"
        });
        this.youtube_ready = !1;
        if (0 == e) {
          var f = document.createElement("script");
          f.src = "https://www.youtube.com/iframe_api";
          var c = document.getElementsByTagName("script")[0];
          c.parentNode.insertBefore(f, c);
          e = 1;
          window.onYouTubeIframeAPIReady = b.proxy(function () {
            a.trigger("yt_loaded");
            this.build_youtube();
            e = 2
          }, this)
        }
        else 1 == e ? a.bind("yt_loaded", b.proxy(this.build_youtube, this)) : 2 == e && this.build_youtube()
      }
      , build_youtube: function () {
        var a = {
          loop: this.parameters.loop ? 1 : 0
          , start: this.parameters.start
          , autoplay: this.parameters.autoplay ? 1 : 0
          , controls: 0
          , showinfo: 0
          , wmode: "transparent"
          , iv_load_policy: 3
          , modestbranding: 1
          , rel: 0
        };
        this.parameters.loop && (a.playlist = this.parameters.youtube);
        this.player = new YT.Player(this.id + "_yt", {
          height: "100%"
          , width: "100%"
          , playerVars: a
          , videoId: this.parameters.youtube
          , events: {
            onReady: b.proxy(this.youtube_ready_fun, this)
          }
        })
      }
      , youtube_ready_fun: function (a) {
        this.youtube_ready = !0;
        this.$video = b("#" + this.id + "_yt");
        !1 !== this.parameters.video_ratio && (this.resize_timeout = !1, b(window).resize(b.proxy(function () {
          clearTimeout(this.resize_timeout);
          this.resize_timeout = setTimeout(b.proxy(this.video_resize, this), 10)
        }, this)), this.video_resize());
        this.parameters.muted && this.mute()
      }
      , make_flash: function () {
        var a = {
          url: !1 != this.parameters.mp4 ? this.parameters.mp4 : this.parameters.flv
          , loop: this.parameters.loop
          , autoplay: this.parameters.autoplay
          , muted: this.parameters.muted
        };
        this.$video_holder.append('<div id="' + this.id + '_flash"></div>');
        swfobject.embedSWF("flash/video.swf", this.id + "_flash", "100%", "100%", "9.0", null, a, {
          allowfullscreen: !0
          , allowScriptAccess: "always"
          , wmode: "transparent"
        }, {
          name: "background-video-swf"
        }, b.proxy(this.flash_callback, this))
      }
      , flash_callback: function (a) {
        this.video = b(a.target).get(0);
        this.parameters.muted && this.mute()
      }
      , make_image: function () {
        !1 !== this.parameters.fallback_image && (this.$img = b('<img src="' + this.parameters.fallback_image + '" alt=""/>').appendTo(this.$video_holder).css({
          position: "absolute"
        }), this.$img.ensureLoad(b.proxy(this.image_loaded, this)))
      }
      , image_loaded: function () {
        this.original_width = this.$img.width();
        this.original_height = this.$img.height();
        this.resize_timeout = !1;
        b(window).resize(b.proxy(function () {
          clearTimeout(this.resize_timeout);
          this.resize_timeout = setTimeout(b.proxy(this.image_resize, this), 10)
        }, this));
        this.image_resize()
      }
      , image_resize: function () {
        var a = this.$video_holder.width()
          , b = this.$video_holder.height()
          , c = a
          , d = this.original_height / (this.original_width / a);
        if ("adjust" == this.parameters.sizing && d > b || "fill" == this.parameters.sizing && d < b) d = b, c = this.original_width / (this.original_height / b);
        d = Math.ceil(d);
        c = Math.ceil(c);
        b = Math.round(b / 2 - d / 2);
        a = Math.round(a / 2 - c / 2);
        this.$img.css({
          width: c + "px"
          , height: d + "px"
          , top: b + "px"
          , left: a + "px"
        })
      }
      , isPlaying: function () {
        return "html5" == this.decision ? !this.video.paused : "flash" == this.decision ? video.isPlaying() : "youtube" == this.decision && this.youtube_ready ? 1 === this.player.getPlayerState() : !1
      }
      , play: function () {
        "html5" == this.decision ? this.video.play() : "flash" == this.decision ? this.video.resume() : "youtube" == this.decision && this.youtube_ready && this.player.playVideo()
      }
      , pause: function () {
        "html5" == this.decision || "flash" == this.decision ? this.video.pause() : "youtube" == this.decision && this.youtube_ready && this.player.pauseVideo()
      }
      , toggle_play: function () {
        this.isPlaying() ? this.pause() : this.play()
      }
      , isMuted: function () {
        return "html5" == this.decision ? !this.video.volume : "flash" == this.decision ? video.isMute() : "youtube" == this.decision && this.youtube_ready ? this.player.isMuted() : !1
      }
      , mute: function () {
        "html5" == this.decision ? this.video.volume = 0 : "flash" == this.decision ? this.video.mute() : "youtube" == this.decision && this.youtube_ready && this.player.mute()
      }
      , unmute: function () {
        "html5" == this.decision ? this.video.volume = 1 : "flash" == this.decision ? this.video.unmute() : "youtube" == this.decision && this.youtube_ready && this.player.unMute()
      }
      , toggle_mute: function () {
        this.isMuted() ? this.unmute() : this.mute()
      }
      , hide: function () {
        this.pause();
        this.$video_holder.stop().fadeTo(700, 0);
        this.hidden = !0
      }
      , show: function () {
        this.play();
        this.$video_holder.stop().fadeTo(700, 1);
        this.hidden = !1
      }
      , toogle_hidden: function () {
        this.hidden ? this.show() : this.hide()
      }
      , rewind: function () {
        "html5" == this.decision ? this.video.currentTime = 0 : "flash" == this.decision ? this.video.rewind() : "youtube" == this.decision && this.youtube_ready && this.player.seekTo(0)
      }
    }
  }
})(void 0);

jQuery(document).ready(function ($) {
  /********************
   Bootstrap Tooltips
  /*******************/
  $('[data-toggle="tooltip"]').tooltip();
  /********************
   Bootstrap Popovers
  /*******************/
  $('[data-toggle="popover"]').popover();
  /********************
   Progress Bar Indicator
  /*******************/
  $('.progress').each(function () {
    var progress = $(this);
    var value = progress.attr('value');
    progress.parent().find('.progress-indicator').css('left', value + '%');
  });
});

/* global Waypoint Pace */
jQuery(document).ready(function ($) {
  /********************
   LOACALIZED DATA
  /*******************/
  var theme = window.theme || {
    siteLoader: 'on'
  };
  /********************
   IOS Classes
  /*******************/
  // Assign the 'oxy-agent' class when not assigned by PHP - for the html Version
  if ($('body').not('.agent-iphone') && (/iPhone/i).test(navigator.userAgent || navigator.vendor || window.opera)) {
    $('body').addClass('agent-iphone');
  }
  if ($('body').not('.agent-ipad') && (/iPad/i).test(navigator.userAgent || navigator.vendor || window.opera)) {
    $('body').addClass('agent-ipad');
  }
  // Check for touch device
  if ($('body').not('.agent-touch') && ('ontouchstart' in window || navigator.msMaxTouchPoints)) {
    $('body').addClass('agent-touch');
  }
  /********************
   IE Classes
  /*******************/
  // Check for IE (version 6-11)
  if (navigator.userAgent.indexOf('MSIE') !== -1 || navigator.appVersion.indexOf('Trident/') > 0) {
    $('body').addClass('agent-explorer');
  }
  // Check for Edge
  if (window.navigator.userAgent.indexOf('Edge') > -1) {
    $('body').addClass('agent-edge');
  }
  /********************
   Object Fit Fix For IE in Card Images
  /*******************/
  $('body.agent-explorer, body.agent-edge').find('.card-horizontal .card-img').each(function () {
    var image = $(this);
    var imageSrc = image.attr('src');
    image.parent('.card-img-container').css('background-image', 'url(' + imageSrc + ')');
  });
  /********************
   Expanding Icon Animation (see social networks)
  /*******************/
  $('.icon-set-expandable a').on('click', function (e) {
    if (!$(this).hasClass('icon-set-item-action')) {
      e.preventDefault();
      e.stopPropagation();
    }
    $(this).parent('.icon-set-expandable').toggleClass('open');
  });
  /********************
   On scroll animations
  /*******************/
  function onScrollInit(items) {
    items.each(function () {
      var osElement = $(this)
        , osAnimationClass = osElement.attr('data-os-animation')
        , osAnimationDelay = osElement.attr('data-os-animation-delay');
      osElement.css({
        '-webkit-animation-delay': osAnimationDelay
        , '-moz-animation-delay': osAnimationDelay
        , 'animation-delay': osAnimationDelay
      });
      new Waypoint({
        element: osElement[0]
        , handler: function () {
          $(this.element).addClass('animated').addClass(osAnimationClass);
        }
        , offset: '90%'
      });
    });
  }
  /********************
   Pace Loading Screen
  /*******************/
  window.paceOptions = {
    startOnPageLoad: theme.siteLoader === 'on'
    , restartOnRequestAfter: false
  };
  Pace.on('done', function () {
    setTimeout(function () {
      // When loader has finished start the scroll animations.
      onScrollInit($('.os-animation'));
    }, 500);
  });
});

jQuery(document).ready(function ($) {
  if (window.self !== window.top) {
    // wait for load event if we are in vc's iframe.
    $(window).on('load', function () {
      initCountdown();
    });
  }
  else {
    initCountdown();
  }
  /********************
   Countdown Timer
  /*******************/
  function initCountdown() {
    $('.countdown-clock').each(function () {
      var countdown = $(this);
      var date = countdown.attr('data-date');
      countdown.countdown(date).on('update.countdown', function (event) {
        $(this).find('.counter-days').html(event.offset.totalDays);
        $(this).find('.counter-hours').html(event.offset.hours);
        $(this).find('.counter-minutes').html(event.offset.minutes);
        $(this).find('.counter-seconds').html(event.offset.seconds);
      });
    });
  }
});

jQuery(document).ready(function ($) {
  /********************
   Magnific Image Popup
  /*******************/
  $('.magnific').each(function () {
    var myimage = $(this);
    var imageTitle = '';
    if ($(this).data('captions') !== undefined) {
      imageTitle = $(this).data('captions');
    }
    myimage.magnificPopup({
      type: 'image'
      , removalDelay: 300
      , items: {
        src: myimage.attr('href')
        , title: imageTitle
      }
      , mainClass: 'mfp-fade'
    });
  });
  /********************
   Magnific Video Popup
  /*******************/
  $('.magnific-youtube, .magnific-vimeo, .magnific-gmaps').magnificPopup({
    type: 'iframe'
    , mainClass: 'mfp-fade'
    , removalDelay: 300
    , preloader: false
    , fixedContentPos: false
  });
  /********************
   Magnific Audio Popup
  /*******************/
  $('.magnific-audio').each(function () {
    var myUrl = $(this);
    myUrl.magnificPopup({
      items: {
        src: '<div class="audio-popup">' + '<audio controls>' + '<source src="' + myUrl.attr('href') + '" type="audio/mpeg">' + '</audio>' + '</div>'
        , type: 'inline'
      }
    });
  });
  /********************
   Magnific Gallery Popup
  /*******************/
  $('.magnific-gallery').each(function () {
    var gallery = $(this);
    var galleryImages = $(this).data('links').split(',');
    var galleryTitle = '';
    if ($(this).data('captions') !== undefined) {
      galleryTitle = $(this).data('captions').split(',');
    }
    var items = [];
    for (var i = 0; i < galleryImages.length; i++) {
      items.push({
        src: galleryImages[i]
        , title: galleryTitle[i]
      });
    }
    gallery.magnificPopup({
      mainClass: 'mfp-fade'
      , items: items
      , gallery: {
        enabled: true
        , tPrev: $(this).data('prev-text')
        , tNext: $(this).data('next-text')
      }
      , type: 'image'
    });
  });
});

/* global google */
/* change the variables below to modify your map position / style & markers */
window.map = {
  map_type: 'ROADMAP'
  , auto_zoom: 'manual', // set to 'manual' to set the zoom manually. Leave empty for auto zoom
  map_zoom: 7, // set the zoom if auto_zoom is set to
  map_scrollable: 'on', // makes the map draggable
  map_style: 'retro', // if set to blackwhite it takes a black/white saturation
  addresses: ['London', 'Paris'], // addresses separated by comma. Addresses are picked up first
  latlngs: ['51.511084, -0.133202', '51.506623, -0.111916'], // Lat/Lng separated by comma. if no addresses are set these coordinates will get used
  labels: ['London', 'Paris'], // labels that will be added to the markeres respectively. Keep the same number as markers
  auto_center: 'auto', // center the map 'auto' or 'custom'
  center_latlng: '', // centers the map to this point, unless it is set to auto
  show_markers: 'on', // shows/Hides the markers
  markerURL: 'assets/images/marker.png' // the marker URL
};
jQuery(document).ready(function ($) {
  /********************
   Google Maps
  /*******************/
  $('.google-map').each(function () {
    var mapDiv = $(this);
    var mapData = window[mapDiv.attr('id')];
    $(window).resize(function () {
      googleMap(mapDiv, mapData);
    });
    googleMap(mapDiv, mapData);
  });
  // Google Map
  function googleMap(element, data) {
    if (undefined === window.google) {
      $.getScript('https://maps.googleapis.com/maps/api/js?v=3.22', function () {
        createMap(element, data);
      });
    }
    else {
      createMap(element, data);
    }
  }

  function createMap(element, data) {
    // create map
    var map = createGoogleMap(element, data);
    data.bounds = new google.maps.LatLngBounds();
    setupMarkers(map, element, data);
    var boundsListener;
    if (data.auto_zoom === 'manual') {
      boundsListener = google.maps.event.addListener(map, 'bounds_changed', function () {
        this.setZoom(parseInt(data.map_zoom));
        google.maps.event.removeListener(boundsListener);
      });
    }
    else {
      if (undefined !== boundsListener) {
        google.maps.event.removeListener(boundsListener);
      }
    }
  }

  function createGoogleMap(element, data) {
    var options = {
      zoom: parseInt(data.map_zoom, 10)
      , scrollwheel: false
      , draggable: data.map_scrollable === 'on'
      , mapTypeId: google.maps.MapTypeId[data.map_type]
    };
    if (data.map_style === 'blackwhite') {
      options.styles = [{
        'stylers': [{
          'saturation': -100
                }]
            }];
    }
    if (data.map_style === 'retro') {
      options.styles = [{
        'featureType': 'administrative'
        , 'elementType': 'labels.text.fill'
        , 'stylers': [{
          'color': '#575e66'
        }]
      }, {
        'featureType': 'landscape'
        , 'elementType': 'all'
        , 'stylers': [{
          'color': '#f8f2e6'
        }]
      }, {
        'featureType': 'poi'
        , 'elementType': 'all'
        , 'stylers': [{
          'visibility': 'off'
        }]
      }, {
        'featureType': 'road'
        , 'elementType': 'all'
        , 'stylers': [{
          'saturation': -100
        }, {
          'lightness': 45
        }, {
          'visibility': 'simplified'
        }]
      }, {
        'featureType': 'road.highway'
        , 'elementType': 'all'
        , 'stylers': [{
          'visibility': 'simplified'
        }]
      }, {
        'featureType': 'road.highway'
        , 'elementType': 'labels'
        , 'stylers': [{
          'visibility': 'off'
        }]
      }, {
        'featureType': 'road.arterial'
        , 'elementType': 'labels.icon'
        , 'stylers': [{
          'visibility': 'off'
        }]
      }, {
        'featureType': 'transit'
        , 'elementType': 'all'
        , 'stylers': [{
          'visibility': 'off'
        }]
      }, {
        'featureType': 'water'
        , 'elementType': 'all'
        , 'stylers': [{
          'color': '#c9bfac'
        }, {
          'visibility': 'on'
        }, {
          'saturation': '0'
        }, {
          'lightness': '50'
        }]
      }];
    }
    return new google.maps.Map(element[0], options);
  }

  function setupMarkers(map, mapDiv, mapData) {
    mapData.markers = [];
    if (mapData.addresses) {
      geocodeMarkerList(map, mapData);
    }
    else if (mapData.latlngs) {
      latLngMarkerList(map, mapData);
    }
  }

  function geocodeMarkerList(map, mapData) {
    // lookup addresses
    var markerAddressCount = 0;
    $.each(mapData.addresses, function (index, address) {
      var geocoder = new google.maps.Geocoder();
      geocoder.geocode({
        'address': address
      }, function (results, status) {
        if (status === google.maps.GeocoderStatus.OK) {
          if (undefined !== results[0]) {
            var location = results[0].geometry.location;
            mapData.markers[index] = {
              position: new google.maps.LatLng(location.lat(), location.lng())
            };
            mapData.bounds.extend(mapData.markers[index].position);
          }
          // increment count so we can keep track of all markers loaded
          markerAddressCount++;
          // if all markers are loaded then fit map
          if (markerAddressCount === mapData.addresses.length) {
            createMarkers(map, mapData);
          }
        }
      });
    });
  }

  function latLngMarkerList(map, mapData) {
    for (var index = 0; index < mapData.latlngs.length; index++) {
      var coordinates = mapData.latlngs[index].split(',');
      mapData.markers[index] = {
        position: new google.maps.LatLng(coordinates[0], coordinates[1])
      };
      mapData.bounds.extend(mapData.markers[index].position);
    }
    createMarkers(map, mapData);
  }

  function createMarkers(map, mapData) {
    $.each(mapData.markers, function (index, marker) {
      var markerData = {
        position: marker.position
        , icon: mapData.markerURL
        , visible: mapData.show_markers === 'on'
        , map: map
      };
      var mapMarker = new google.maps.Marker(markerData);
      mapMarker.setMap(map);
      // add label popup to marker
      if (mapData.labels[index] !== undefined) {
        var infoWindow = new google.maps.InfoWindow({
          content: mapData.labels[index]
        });
        google.maps.event.addListener(mapMarker, 'click', function () {
          infoWindow.open(map, this);
        });
      }
    });
    centerMap(map, mapData);
  }

  function centerMap(map, mapData) {
    // centre map
    if (mapData.auto_center === 'auto') {
      if (mapData.auto_zoom === 'manual') {
        map.setCenter(mapData.bounds.getCenter());
      }
      else {
        map.fitBounds(mapData.bounds);
      }
    }
    else {
      if (mapData.center_latlng !== '') {
        var center_lat_lng = mapData.center_latlng.split(',');
        var center_map = new google.maps.LatLng(center_lat_lng[0], center_lat_lng[1]);
        map.setCenter(center_map);
      }
      else {
        map.fitBounds(mapData.bounds);
      }
    }
  }
});

/* global Waypoint */
jQuery(document).ready(function ($) {
  /********************
   Navigation Drop Downs
  /*******************/
  if (!$('body').hasClass('agent-touch') && $('.nav').hasClass('nav-hover')) {
    $('.nav-menu ul li').on('mouseover', function () {
      $(this).find('.nav-dropdown').removeClass('closed');
    }).on('mouseout', function () {
      $(this).find('.nav-dropdown').addClass('closed');
    });
  }
  else {
    $('.nav-menu ul li a:not(:only-child)').on('click', function (e) {
      $(this).siblings('.nav-dropdown').toggleClass('closed');
      $('.nav-dropdown').not($(this).siblings()).addClass('closed');
      e.stopPropagation();
      e.preventDefault();
    });
  }
  $('html').click(function () {
    $('.nav-dropdown').addClass('closed');
  });
  $('#nav-toggle').click(function (e) {
    $('.nav-menu .nav-list').slideToggle();
    $('.nav-menu .nav-widget').slideToggle();
    e.preventDefault();
  });
  $('#nav-toggle').on('click', function () {
    this.classList.toggle('active');
  });
  /********************
   Sticky header
  /*******************/
  var $header = $('body').find('.nav-sticky');
  if ($header.length > 0) {
    new Waypoint.Sticky({
      element: $header[0]
      , stuckClass: 'nav-stuck'
    });
    new Waypoint({
      element: document.body
      , offset: -200
      , handler: function (direction) {
        if (direction === 'down') {
          $header.addClass('nav-scrolled');
        }
        else {
          $header.removeClass('nav-scrolled');
        }
      }
    });
  }
  /********************
   Back to top button
  /*******************/
  new Waypoint({
    element: document.body
    , offset: -200
    , handler: function (direction) {
      if (direction === 'down') {
        $('.go-top').removeClass('hide');
      }
      else {
        $('.go-top').addClass('hide');
      }
    }
  });
  $('.go-top').click(function (event) {
    event.preventDefault();
    $('html, body').animate({
      scrollTop: 0
    }, 300);
  });
});

jQuery(document).ready(function ($) {
  if (window.self !== window.top) {
    // wait for load event if we are in vc's iframe.
    $(window).on('load', function () {
      initParallax();
    });
  }
  else {
    initParallax();
  }
  /********************
   Parallax Backgrounds
  /*******************/
  function initParallax() {
    $('body:not(.agent-touch) .section-background').parallaxBackground({
      'image': '.section-bg-image-paralax'
    });
  }
});

/* global smoothScroll */
jQuery(document).ready(function ($) {
  // Do we have smoothScroll?
  if (undefined === smoothScroll) {
    return;
  }
  // Smooth scrolling from a menu click
  $('.nav-smooth-scroll').click(function (event) {
    scrollToMenuLinkHash(event.target);
  });
  // Smooth scrolling from another page
  if (window.location.hash) {
    $('.nav-smooth-scroll').each(function (index, menuLink) {
      if (window.location.href === menuLink.href) {
        scrollToMenuLinkHash(menuLink);
        return false;
      }
    });
  }

  function scrollToMenuLinkHash(link) {
    // Do we have a hash link?
    if (!link.hash) {
      return;
    }
    // Is it on this page?
    if (window.location.hostname !== link.hostname || link.pathname !== window.location.pathname) {
      return;
    }
    // Get the element to scroll to
    var scrollToMe = $(link.hash);
    // Is the scroll to element on the page?
    if (scrollToMe.length === 0) {
      return;
    }
    // Ok we have a has link and something to go to.  Lets scroll to it...smoothly!
    var options = {};
    var offsetAttr = $(link).attr('data-offset');
    if (undefined !== offsetAttr && offsetAttr !== '') {
      options.offset = offsetAttr;
    }
    // scroll to section.
    smoothScroll.animateScroll(scrollToMe[0], null, options);
    // if we are on mobile, close the mobile menu.
    var mobileAttr = $(link).attr('data-mobile');
    if (undefined !== mobileAttr && mobileAttr === 'true') {
      $('#nav-toggle').trigger('click');
    }
    // Prevent regular events.
    event.preventDefault();
    event.stopPropagation();
  }
  /********************
   Smooth Scrolling init
  /*******************/
  smoothScroll.init({
    speed: 500, // Integer. How fast to complete the scroll in milliseconds
    easing: 'easeInOutCubic' // Easing pattern to use
  });
});

/* global video_background */
jQuery(document).ready(function ($) {
  /********************
   Background Videos
  /*******************/
  $('.section-background-video').each(function () {
    var $this = $(this);
    var args = {
      'position': 'absolute', //Stick within the div
      'z-index': '-1', //Behind everything
      'loop': true, //Loop when it reaches the end
      'autoplay': true, //Autoplay at start
      'start': 5, //Start with 6 seconds offset (to pass the introduction in this case for example)
      'video_ratio': 1.7778, // width/height -> If none provided sizing of the video is set to adjust
      'priority': 'html5'
    };
    // Wrapped around ifs to avoid undefined properties
    if ($this.data('muted')) {
      args.muted = $this.data('muted');
    }
    if ($this.data('youtube')) {
      args.youtube = $this.data('youtube');
    }
    if ($this.data('mp4')) {
      args.mp4 = $this.data('mp4');
    }
    if ($this.data('webm')) {
      args.webm = $this.data('webm');
    }
    if ($this.data('poster')) {
      args.fallback_image = $this.data('poster');
    }
    new video_background($this, args);
  });
});