(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [418],
  {
    3280: (e, t, n) => {
      Promise.resolve().then(n.t.bind(n, 8173, 23)), Promise.resolve().then(n.t.bind(n, 7970, 23)), Promise.resolve().then(n.t.bind(n, 4333, 23)), Promise.resolve().then(n.t.bind(n, 397, 23)), Promise.resolve().then(n.bind(n, 7504));
    },
    9306: (e, t, n) => {
      "use strict";
      n.d(t, { A: () => s });
      var r = n(5155);
      n(2115);
      var o = n(147),
        i = n.n(o);
      let s = function (e) {
        let { children: t, width: n = "min-content", variant: o = "secondary", ...s } = e;
        return (0, r.jsx)("button", { className: "".concat(i().btn, " ").concat(i()[o]), style: { width: n }, ...s, children: t });
      };
    },
    7504: (e, t, n) => {
      "use strict";
      n.d(t, { default: () => u });
      var r = n(5155),
        o = n(8173),
        i = n.n(o),
        s = n(2115),
        l = n(5565),
        a = n(9306),
        c = n(7741),
        _ = n(6046),
        d = n(1165),
        h = n.n(d);
      let u = function () {
        !(function () {
          let e = (0, _.useSearchParams)();
          (0, s.useEffect)(() => {
            let t = e.get("section");
            if (t) {
              let e = document.getElementById(t);
              e &&
                setTimeout(() => {
                  e.scrollIntoView({ behavior: "smooth", block: "center" });
                }, 100);
            }
            let n = () => {
              let e = window.location.pathname;
              window.history.replaceState(null, "", e);
            };
            return (
              window.addEventListener("beforeunload", n),
              () => {
                window.removeEventListener("beforeunload", n);
              }
            );
          }, [e]);
        })();
        let [e, t] = (0, s.useState)(!1),
          n = (0, s.useRef)(null);
        return (0, r.jsxs)("header", {
          className: h().header,
          children: [
            (0, r.jsxs)("svg", {
              width: "100",
              height: "72",
              viewBox: "0 0 100 72",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              children: [
                (0, r.jsx)("path", {
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  d: "M52.8365 25.1044C52.6232 25.0932 52.3283 25.0909 51.234 25.0909H50.1447C47.0635 25.0909 45.5229 25.0909 44.5657 24.1324C43.6085 23.1738 43.6085 21.631 43.6085 18.5455C43.6085 15.4599 43.6085 13.9171 44.5657 12.9586C45.5229 12 47.0635 12 50.1447 12H51.234C52.1627 12 52.8793 11.9978 53.5207 12.0314C65.2133 12.6451 74.5558 22.0009 75.1686 33.7101C75.2002 34.3138 75.2001 34.9842 75.2 35.8349C75.2 35.8892 75.2 35.9442 75.2 36C75.2 36.0558 75.2 36.1108 75.2 36.1651C75.2001 37.0158 75.2002 37.6862 75.1686 38.2899C74.5558 49.9991 65.2133 59.3549 53.5207 59.9686C52.9178 60.0002 52.2484 60.0001 51.3989 60C51.3447 60 51.2897 60 51.234 60H43.6085C40.5273 60 38.9867 60 38.0295 59.0414C37.0723 58.0828 37.0723 56.5401 37.0723 53.4545V46.9091H51.234C52.3283 46.9091 52.6232 46.9068 52.8365 46.8956C57.8476 46.6326 61.8516 42.623 62.1142 37.6047C62.1254 37.3911 62.1276 37.0959 62.1276 36C62.1276 34.9041 62.1254 34.6088 62.1142 34.3952C61.8516 29.377 57.8476 25.3674 52.8365 25.1044Z",
                  fill: "#1D53BF",
                }),
                (0, r.jsx)("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M30.5362 25.0909C33.6173 25.0909 35.1579 25.0909 36.1151 26.0494C37.0723 27.008 37.0723 28.5508 37.0723 31.6363V46.9091L30.5362 46.909C27.455 46.909 25.9144 46.909 24.9572 45.9505C24 44.9919 24 43.4491 24 40.3636V31.6363C24 28.5508 24 27.008 24.9572 26.0494C25.9144 25.0909 27.455 25.0909 30.5362 25.0909Z", fill: "#1D53BF" }),
                (0, r.jsx)("path", { d: "M37.0723 46.9091L33.8042 46.909C35.6092 46.909 37.0723 48.3743 37.0723 50.1818V46.9091Z", fill: "#1D53BF" }),
                (0, r.jsx)("path", { d: "M37.0723 46.9091L40.3404 46.909C38.5355 46.909 37.0723 45.4438 37.0723 43.6363V46.9091Z", fill: "#1D53BF" }),
              ],
            }),
            (0, r.jsxs)("div", {
              className: h().navigation_actions,
              children: [
                (0, r.jsx)(i(), { href: "/pgo_temp?section=overpgo", children: "Over PGO" }),
                (0, r.jsx)(i(), { href: "/pgo_temp?section=overdigizorg", children: "Over Digizorg" }),
                (0, r.jsx)(i(), { href: "/pgo_temp?section=faq", children: "Veelgestelde vragen" }),
                (0, r.jsx)(i(), { href: "/pgo_temp?section=contact", children: "Contact" }),
                (0, r.jsxs)("div", { className: h().auth_actions, children: [(0, r.jsx)(a.A, { variant: "text", children: (0, r.jsx)("a", { target: "_blank", href: c.Hn, rel: "noopener noreferrer", children: "Registreren" }) }), (0, r.jsx)(a.A, { children: (0, r.jsx)("a", { target: "_blank", href: c.Vt, rel: "noopener noreferrer", children: "Inloggen" }) })] }),
                (0, r.jsxs)("div", {
                  className: h().mobile_menu,
                  ref: n,
                  onClick: () => t((e) => !e),
                  children: [
                    (0, r.jsx)("span", { className: h().burger_text, children: "Menu" }),
                    (0, r.jsx)(l.default, { width: 24, height: 24, src: "/pgo_temp/menu.png", alt: "OPTIONS" }),
                    e && (0, r.jsxs)("div", { className: h().dropdown, children: [(0, r.jsx)(i(), { href: "/pgo_temp?section=overpgo", children: "Over PGO" }), (0, r.jsx)(i(), { href: "/pgo_temp?section=overdigizorg", children: "Over Digizorg" }), (0, r.jsx)(i(), { href: "/pgo_temp?section=faq", children: "Veelgestelde vragen" }), (0, r.jsx)(i(), { href: "/pgo_temp?section=contact", children: "Contact" })] }),
                  ],
                }),
              ],
            }),
          ],
        });
      };
    },
    7741: (e, t, n) => {
      "use strict";
      n.d(t, { Hn: () => o, Vt: () => r, rI: () => i });
      let r = "https://www.digizorgpgo.nl/accounts/login",
        o = "https://www.digizorgpgo.nl/accounts/signup",
        i = 1e3;
    },
    147: (e) => {
      e.exports = { btn: "Button_btn__b1BQa", text: "Button_text__bvVGC", secondary: "Button_secondary__9ex2D" };
    },
    4333: (e) => {
      e.exports = { content_section: "Content_content_section__gaxiZ", back_link: "Content_back_link__KBKqr", content_wrapper: "Content_content_wrapper__eRnSb", text: "Content_text__ly68t", link_text: "Content_link_text__5eW29" };
    },
    397: (e) => {
      e.exports = { container: "Footer_container__Dj1D9", "flex-container": "Footer_flex-container__cG2f1", "action-links": "Footer_action-links__GNPzj", "flex-1": "Footer_flex-1__Q7B8k", title: "Footer_title__D7snR", tags: "Footer_tags__VI30y" };
    },
    1165: (e) => {
      e.exports = { header: "Header_header__AF_3G", navigation_actions: "Header_navigation_actions__lV9y1", auth_actions: "Header_auth_actions__zNTOB", mobile_menu: "Header_mobile_menu___yDX7", dropdown: "Header_dropdown__f5upL", burger_text: "Header_burger_text__9Hkmc" };
    },
  },
  (e) => {
    var t = (t) => e((e.s = t));
    e.O(0, [895, 32, 992, 441, 517, 358], () => t(3280)), (_N_E = e.O());
  },
]);
