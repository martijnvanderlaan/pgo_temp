(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [974],
  {
    9904: (e, n, t) => {
      Promise.resolve().then(t.t.bind(t, 7970, 23)), Promise.resolve().then(t.bind(t, 5732)), Promise.resolve().then(t.bind(t, 6285)), Promise.resolve().then(t.t.bind(t, 397, 23)), Promise.resolve().then(t.t.bind(t, 9811, 23)), Promise.resolve().then(t.bind(t, 3259)), Promise.resolve().then(t.bind(t, 3716)), Promise.resolve().then(t.bind(t, 7504));
    },
    5732: (e, n, t) => {
      "use strict";
      t.d(n, { default: () => r });
      var s = t(5155);
      t(2115);
      var l = t(9306),
        a = t(3981),
        i = t.n(a);
      let r = function (e) {
        let { title: n, description: t, id: a, redirectUrl: r } = e;
        return (0, s.jsxs)("section", { id: a, className: i().section, children: [n && (0, s.jsx)("p", { className: i().title, children: n }), (0, s.jsx)("p", { className: i().description, children: t }), (0, s.jsx)(l.A, { variant: "secondary", children: (0, s.jsx)("a", { href: r, rel: "noopener noreferrer", children: "Lees meer" }) })] });
      };
    },
    9306: (e, n, t) => {
      "use strict";
      t.d(n, { A: () => i });
      var s = t(5155);
      t(2115);
      var l = t(147),
        a = t.n(l);
      let i = function (e) {
        let { children: n, width: t = "min-content", variant: l = "secondary", ...i } = e;
        return (0, s.jsx)("button", { className: "".concat(a().btn, " ").concat(a()[l]), style: { width: t }, ...i, children: n });
      };
    },
    6285: (e, n, t) => {
      "use strict";
      t.d(n, { default: () => r });
      var s = t(5155),
        l = t(2115),
        a = t(9577),
        i = t.n(a);
      let r = function (e) {
        let { faq: n } = e,
          [t, a] = (0, l.useState)(null),
          r = (e) => {
            a(t === e ? null : e);
          },
          o = (e) =>
            e
              .replace(/\b[\w\.-]+@[\w\.-]+\.\w{2,4}\b/g, (e) => '<a href="mailto:'.concat(e, '">').concat(e, "</a>"))
              .replace(/(?:https?|ftp):\/\/[\n\S]+/g, (e) => '<a href="'.concat(e, '">').concat(e, "</a>"))
              .replace(/(?:\r\n|\r|\n)/g, "<br>");
        return (0, s.jsxs)("section", {
          id: "faq",
          className: i()["main-section"],
          children: [
            (0, s.jsx)("h3", { className: i().tag, children: "FAQ" }),
            (0, s.jsx)("h2", { className: i().title, children: "Veelgestelde vragen" }),
            (0, s.jsx)("div", {
              className: i().accordion,
              children: n.map((e, n) =>
                (0, s.jsxs)(
                  "div",
                  {
                    className: i().item,
                    children: [
                      (0, s.jsxs)("button", {
                        className: i().question,
                        onClick: () => r(n),
                        children: [
                          e.question,
                          (0, s.jsx)("span", {
                            className: "".concat(i().icon, " ").concat(t === n ? i().rotate : ""),
                            children: (0, s.jsx)("svg", {
                              width: "26",
                              height: "24",
                              viewBox: "0 0 26 24",
                              fill: "none",
                              xmlns: "http://www.w3.org/2000/svg",
                              children: (0, s.jsx)("path", {
                                fillRule: "evenodd",
                                clipRule: "evenodd",
                                d: "M13.9696 12.6441L17.714 8.48779L19.0428 9.51209L15.2984 13.6684C15.2863 13.6818 15.2743 13.6952 15.2623 13.7085C14.9086 14.1011 14.5863 14.459 14.2844 14.7112C13.9544 14.9868 13.5321 15.2379 12.973 15.2379C12.4139 15.2379 11.9916 14.9868 11.6617 14.7112C11.3597 14.459 11.0374 14.1011 10.6838 13.7085C10.6717 13.6952 10.6597 13.6818 10.6476 13.6684L6.9032 9.51209L8.23201 8.48779L11.9764 12.6441C12.3783 13.0902 12.6217 13.3573 12.8209 13.5237C12.8981 13.5882 12.9467 13.6185 12.973 13.632C12.9993 13.6185 13.0479 13.5882 13.1251 13.5237C13.3244 13.3573 13.5677 13.0902 13.9696 12.6441ZM12.9483 13.6418C12.9485 13.6414 12.9518 13.64 12.958 13.639C12.9512 13.6418 12.9481 13.6423 12.9483 13.6418ZM12.9881 13.639C12.9942 13.64 12.9976 13.6414 12.9977 13.6418C12.9979 13.6423 12.9948 13.6418 12.9881 13.639Z",
                                fill: "#1D53BF",
                              }),
                            }),
                          }),
                        ],
                      }),
                      (0, s.jsx)("div", { className: "".concat(i().content, " ").concat(t === n ? i().show : ""), dangerouslySetInnerHTML: { __html: o(e.answer) } }),
                    ],
                  },
                  e.id
                )
              ),
            }),
            (0, s.jsxs)("p", { className: i().note, children: ["Voor algemene informatie over het delen van gegevens, verwijzen we naar:", (0, s.jsx)("a", { target: "_blank", href: "https://www.erasmusmc.nl/nl-nl/patientenzorg/toestemming-geven-voor-het-delen-van-uw-elektronisch-patientendossier", rel: "noopener noreferrer", children: "https://www.erasmusmc.nl/nl-nl/patientenzorg/toestemming-geven-voor-het-delen-van-uw-elektronisch-patientendossier" })] }),
          ],
        });
      };
    },
    3259: (e, n, t) => {
      "use strict";
      t.d(n, { default: () => g });
      var s = t(5155),
        l = t(2115),
        a = t(4623),
        i = t.n(a),
        r = t(1549),
        o = t.n(r);
      let c = function (e) {
        let { label: n, ...t } = e;
        return (0, s.jsxs)("div", { className: o().field, children: [(0, s.jsx)("label", { htmlFor: t.name, children: n }), (0, s.jsx)("input", { ...t })] });
      };
      var d = t(9306),
        _ = t(7741),
        h = t(6519),
        m = t.n(h);
      let u = function (e) {
          var n;
          let { label: t, ...l } = e;
          return (0, s.jsxs)("div", { className: m().field, children: [(0, s.jsx)("label", { htmlFor: l.name, children: t }), (0, s.jsx)("textarea", { ...l }), (0, s.jsxs)("p", { className: m().char_count, children: ["".concat(null !== (n = l.value) && void 0 !== n ? n : "").length, " / ", _.rI] })] });
        },
        g = function () {
          let [e, n] = (0, l.useState)(),
            [t, a] = (0, l.useState)({ name: "", email: "", topic: "", message: "" }),
            r = (e) => {
              let { name: n, value: t } = e.target;
              a((e) => ({ ...e, [n]: t }));
            },
            o = async (e) => {
              e.preventDefault(), n(void 0);
              try {
                let e = await fetch("/api/send-email", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(t) }),
                  s = await e.json();
                e.ok ? (n({ status: "success", message: s.message }), a({ name: "", email: "", message: "", topic: "" })) : n({ status: "error", message: s.message });
              } catch (e) {
                n({ status: "error", message: "Failed to send form" });
              }
            };
          return (0, s.jsxs)("section", {
            id: "contact",
            className: i().form_container,
            children: [
              (0, s.jsx)("h2", { className: i().title, children: "Contactformulier" }),
              (0, s.jsx)("span", { className: i().subtitle, children: "Heb je vragen over de Digizorg PGO? Vul dan het onderstaande formulier in." }),
              (0, s.jsxs)("form", {
                className: i().form,
                onSubmit: o,
                children: [
                  (0, s.jsxs)("div", { className: i().flex_container, children: [(0, s.jsx)(c, { id: "name", label: "Voor- en achternaam", name: "name", value: t.name, onChange: r, required: !0 }), (0, s.jsx)(c, { label: "E-mailadres", id: "email", name: "email", value: t.email, onChange: r, required: !0 })] }),
                  (0, s.jsx)(c, { label: "Onderwerp", id: "topic", name: "topic", value: t.topic, onChange: r, required: !0 }),
                  (0, s.jsx)(u, { label: "Bericht", maxLength: _.rI, id: "message", name: "message", value: t.message, onChange: r, required: !0 }),
                  (0, s.jsx)(d.A, { type: "submit", width: "375px", children: "Versturen" }),
                  (null == e ? void 0 : e.status) === "success" && (0, s.jsx)("p", { className: i().success, children: e.message }),
                  (null == e ? void 0 : e.status) === "error" && (0, s.jsx)("p", { className: i().error, children: e.message }),
                ],
              }),
            ],
          });
        };
    },
    3716: (e, n, t) => {
      "use strict";
      t.d(n, { default: () => d });
      var s = t(5155),
        l = t(2115),
        a = t(2802),
        i = t.n(a),
        r = t(5565),
        o = t(1661),
        c = t.n(o);
      let d = function (e) {
        let { data: n } = e,
          [t, a] = (0, l.useState)(!0),
          o = (0, l.useRef)(null),
          [d, _] = (0, l.useState)({ 0: !1, 1: !1, 2: !1 }),
          h = (e) => () => {
            _((n) => ({ ...n, [e]: !n[e] }));
          };
        return ((0, l.useEffect)(() => {
          a(!1);
        }, []),
        t)
          ? null
          : (0, s.jsxs)("section", {
              className: c()["gallery-section"],
              children: [
                (0, s.jsxs)("div", {
                  className: c()["flex-container"],
                  children: [
                    (0, s.jsxs)("div", {
                      className: c()["video-container"],
                      children: [
                        (0, s.jsx)(i(), {
                          ref: o,
                          controls: !1,
                          className: c().video,
                          playing: d[0],
                          playIcon: (0, s.jsx)("i", { className: c().play_button, onClick: h(0), children: (0, s.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "25", viewBox: "0 0 24 25", fill: "none", children: (0, s.jsx)("path", { d: "M8 19.425V5.42505L19 12.425L8 19.425Z", fill: "#1D53BF" }) }) }),
                          light: (0, s.jsx)("div", { className: c().thumbnail_container, children: (0, s.jsx)(r.default, { width: 660, height: 537, className: c()["image-thumbnail"], src: "/pgo_temp/image (1).png", alt: "Thumbnail" }) }),
                          loop: !0,
                          config: { youtube: { playerVars: { modestbranding: 1, rel: 0, controls: 0, showinfo: 0 } } },
                          url: n[0].file_url,
                        }),
                        (0, s.jsx)("svg", { className: c().absolute_bottom, width: "245", height: "184", viewBox: "0 0 245 184", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: (0, s.jsx)("path", { d: "M95 122V184L96.5 155L119 92.5L245 74H167C140.49 74 119 52.5097 119 26V0.5L95 56L0 74H47C73.5097 74 95 95.4903 95 122Z", fill: "#BBCBEB" }) }),
                      ],
                    }),
                    (0, s.jsx)("div", { className: "".concat(c()["description-container"], " ").concat(c()["ml-24"]), dangerouslySetInnerHTML: { __html: n[0].content } }),
                  ],
                }),
                (0, s.jsxs)("div", {
                  className: c()["flex-container"],
                  children: [
                    (0, s.jsx)("div", { className: "".concat(c()["description-container"], " ").concat(c()["mr-24"], " ").concat(c().web), dangerouslySetInnerHTML: { __html: n[1].content } }),
                    (0, s.jsx)("div", {
                      className: c()["video-container"],
                      children: (0, s.jsx)(i(), {
                        controls: !1,
                        className: c().video,
                        playing: d[1],
                        playIcon: (0, s.jsx)("i", { className: c().play_button, onClick: h(1), children: (0, s.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "25", viewBox: "0 0 24 25", fill: "none", children: (0, s.jsx)("path", { d: "M8 19.425V5.42505L19 12.425L8 19.425Z", fill: "#1D53BF" }) }) }),
                        light: (0, s.jsx)("div", { className: c().thumbnail_container, children: (0, s.jsx)(r.default, { width: 660, height: 537, className: c()["image-thumbnail"], src: "/pgo_temp/image (2).png", alt: "Thumbnail" }) }),
                        config: { youtube: { playerVars: { modestbranding: 1, rel: 0, controls: 0, showinfo: 0 } } },
                        loop: !0,
                        url: n[1].file_url,
                      }),
                    }),
                    (0, s.jsx)("div", { className: "".concat(c()["description-container"], " ").concat(c()["mr-24"], " ").concat(c().mobile), dangerouslySetInnerHTML: { __html: n[1].content } }),
                  ],
                }),
                (0, s.jsxs)("div", {
                  className: c()["flex-container"],
                  children: [
                    (0, s.jsxs)("div", {
                      className: c()["video-container"],
                      children: [
                        (0, s.jsx)("svg", { className: c().absolute_top, width: "246", height: "184", viewBox: "0 0 246 184", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: (0, s.jsx)("path", { d: "M150.002 122V183.5L148.502 154.5L126.002 92L0.00175476 74L78.1922 73.6897C104.627 73.5848 126.002 52.1254 126.002 25.6901V0L150.002 55.5L245.172 74H198.002C171.492 74 150.002 95.4903 150.002 122Z", fill: "#BBCBEB" }) }),
                        (0, s.jsx)(i(), {
                          controls: !1,
                          className: c().video,
                          playing: d[2],
                          playIcon: (0, s.jsx)("i", { className: c().play_button, onClick: h(2), children: (0, s.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "25", viewBox: "0 0 24 25", fill: "none", children: (0, s.jsx)("path", { d: "M8 19.425V5.42505L19 12.425L8 19.425Z", fill: "#1D53BF" }) }) }),
                          light: (0, s.jsx)("div", { className: c().thumbnail_container, children: (0, s.jsx)(r.default, { width: 660, height: 537, className: c()["image-thumbnail"], src: "/pgo_temp/image (3).png", alt: "Thumbnail" }) }),
                          config: { youtube: { playerVars: { modestbranding: 1, rel: 0, controls: 0, showinfo: 0 } } },
                          loop: !0,
                          url: n[2].file_url,
                        }),
                      ],
                    }),
                    (0, s.jsx)("div", { className: "".concat(c()["description-container"], " ").concat(c()["ml-24"]), dangerouslySetInnerHTML: { __html: n[2].content } }),
                  ],
                }),
              ],
            });
      };
    },
    7504: (e, n, t) => {
      "use strict";
      t.d(n, { default: () => m });
      var s = t(5155),
        l = t(8173),
        a = t.n(l),
        i = t(2115),
        r = t(5565),
        o = t(9306),
        c = t(7741),
        d = t(6046),
        _ = t(1165),
        h = t.n(_);
      let m = function () {
        !(function () {
          let e = (0, d.useSearchParams)();
          (0, i.useEffect)(() => {
            let n = e.get("section");
            if (n) {
              let e = document.getElementById(n);
              e &&
                setTimeout(() => {
                  e.scrollIntoView({ behavior: "smooth", block: "center" });
                }, 100);
            }
            let t = () => {
              let e = window.location.pathname;
              window.history.replaceState(null, "", e);
            };
            return (
              window.addEventListener("beforeunload", t),
              () => {
                window.removeEventListener("beforeunload", t);
              }
            );
          }, [e]);
        })();
        let [e, n] = (0, i.useState)(!1),
          t = (0, i.useRef)(null);
        return (0, s.jsxs)("header", {
          className: h().header,
          children: [
            (0, s.jsxs)("svg", {
              width: "100",
              height: "72",
              viewBox: "0 0 100 72",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              children: [
                (0, s.jsx)("path", {
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  d: "M52.8365 25.1044C52.6232 25.0932 52.3283 25.0909 51.234 25.0909H50.1447C47.0635 25.0909 45.5229 25.0909 44.5657 24.1324C43.6085 23.1738 43.6085 21.631 43.6085 18.5455C43.6085 15.4599 43.6085 13.9171 44.5657 12.9586C45.5229 12 47.0635 12 50.1447 12H51.234C52.1627 12 52.8793 11.9978 53.5207 12.0314C65.2133 12.6451 74.5558 22.0009 75.1686 33.7101C75.2002 34.3138 75.2001 34.9842 75.2 35.8349C75.2 35.8892 75.2 35.9442 75.2 36C75.2 36.0558 75.2 36.1108 75.2 36.1651C75.2001 37.0158 75.2002 37.6862 75.1686 38.2899C74.5558 49.9991 65.2133 59.3549 53.5207 59.9686C52.9178 60.0002 52.2484 60.0001 51.3989 60C51.3447 60 51.2897 60 51.234 60H43.6085C40.5273 60 38.9867 60 38.0295 59.0414C37.0723 58.0828 37.0723 56.5401 37.0723 53.4545V46.9091H51.234C52.3283 46.9091 52.6232 46.9068 52.8365 46.8956C57.8476 46.6326 61.8516 42.623 62.1142 37.6047C62.1254 37.3911 62.1276 37.0959 62.1276 36C62.1276 34.9041 62.1254 34.6088 62.1142 34.3952C61.8516 29.377 57.8476 25.3674 52.8365 25.1044Z",
                  fill: "#1D53BF",
                }),
                (0, s.jsx)("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M30.5362 25.0909C33.6173 25.0909 35.1579 25.0909 36.1151 26.0494C37.0723 27.008 37.0723 28.5508 37.0723 31.6363V46.9091L30.5362 46.909C27.455 46.909 25.9144 46.909 24.9572 45.9505C24 44.9919 24 43.4491 24 40.3636V31.6363C24 28.5508 24 27.008 24.9572 26.0494C25.9144 25.0909 27.455 25.0909 30.5362 25.0909Z", fill: "#1D53BF" }),
                (0, s.jsx)("path", { d: "M37.0723 46.9091L33.8042 46.909C35.6092 46.909 37.0723 48.3743 37.0723 50.1818V46.9091Z", fill: "#1D53BF" }),
                (0, s.jsx)("path", { d: "M37.0723 46.9091L40.3404 46.909C38.5355 46.909 37.0723 45.4438 37.0723 43.6363V46.9091Z", fill: "#1D53BF" }),
              ],
            }),
            (0, s.jsxs)("div", {
              className: h().navigation_actions,
              children: [
                (0, s.jsx)(a(), { href: "/pgo_temp/?section=overpgo", children: "Over PGO" }),
                (0, s.jsx)(a(), { href: "/pgo_temp/?section=overdigizorg", children: "Over Digizorg" }),
                (0, s.jsx)(a(), { href: "/pgo_temp/?section=faq", children: "Veelgestelde vragen" }),
                (0, s.jsx)(a(), { href: "/pgo_temp/?section=contact", children: "Contact" }),
                (0, s.jsxs)("div", { className: h().auth_actions, children: [(0, s.jsx)(o.A, { variant: "text", children: (0, s.jsx)("a", { target: "_blank", href: c.Hn, rel: "noopener noreferrer", children: "Registreren" }) }), (0, s.jsx)(o.A, { children: (0, s.jsx)("a", { target: "_blank", href: c.Vt, rel: "noopener noreferrer", children: "Inloggen" }) })] }),
                (0, s.jsxs)("div", {
                  className: h().mobile_menu,
                  ref: t,
                  onClick: () => n((e) => !e),
                  children: [
                    (0, s.jsx)("span", { className: h().burger_text, children: "Menu" }),
                    (0, s.jsx)(r.default, { width: 24, height: 24, src: "/menu.png", alt: "OPTIONS" }),
                    e && (0, s.jsxs)("div", { className: h().dropdown, children: [(0, s.jsx)(a(), { href: "/pgo_temp/?section=overpgo", children: "Over PGO" }), (0, s.jsx)(a(), { href: "/pgo_temp/?section=overdigizorg", children: "Over Digizorg" }), (0, s.jsx)(a(), { href: "/pgo_temp/?section=faq", children: "Veelgestelde vragen" }), (0, s.jsx)(a(), { href: "/pgo_temp/?section=contact", children: "Contact" })] }),
                  ],
                }),
              ],
            }),
          ],
        });
      };
    },
    7741: (e, n, t) => {
      "use strict";
      t.d(n, { Hn: () => l, Vt: () => s, rI: () => a });
      let s = "https://www.digizorgpgo.nl/accounts/login",
        l = "https://www.digizorgpgo.nl/accounts/signup",
        a = 1e3;
    },
    3981: (e) => {
      e.exports = { section: "Article_section__DmRYM", title: "Article_title__BOXdp", description: "Article_description__Mpky9" };
    },
    9811: (e) => {
      e.exports = { "banner-section": "Banner_banner-section__aOMm5", title: "Banner_title__EHy_I" };
    },
    147: (e) => {
      e.exports = { btn: "Button_btn__b1BQa", text: "Button_text__bvVGC", secondary: "Button_secondary__9ex2D" };
    },
    9577: (e) => {
      e.exports = { "main-section": "FAQ_main-section__Wgf8x", tag: "FAQ_tag__33E_X", title: "FAQ_title__wztBs", accordion: "FAQ_accordion__hd4NP", item: "FAQ_item__gnkvT", question: "FAQ_question__1kBzu", icon: "FAQ_icon__rSdfM", rotate: "FAQ_rotate___uHmf", content: "FAQ_content__Jf4GZ", show: "FAQ_show__cJ6gV", note: "FAQ_note__0bniy" };
    },
    397: (e) => {
      e.exports = { container: "Footer_container__Dj1D9", "flex-container": "Footer_flex-container__cG2f1", "action-links": "Footer_action-links__GNPzj", "flex-1": "Footer_flex-1__Q7B8k", title: "Footer_title__D7snR", tags: "Footer_tags__VI30y" };
    },
    4623: (e) => {
      e.exports = { form_container: "Form_form_container__7L0CR", title: "Form_title__RzSET", subtitle: "Form_subtitle__Y_DxF", flex_container: "Form_flex_container__2KFHZ", form: "Form_form__ngj4g" };
    },
    1661: (e) => {
      e.exports = {
        "gallery-section": "Gallery_gallery-section__qNqgM",
        "flex-container": "Gallery_flex-container__FmSAE",
        "video-container": "Gallery_video-container__l0nbZ",
        play_button: "Gallery_play_button__RHZtN",
        absolute_bottom: "Gallery_absolute_bottom__4qZuW",
        absolute_top: "Gallery_absolute_top__uEVK7",
        video: "Gallery_video__qk8a2",
        "description-container": "Gallery_description-container__xtz8p",
        "ml-24": "Gallery_ml-24__LTfQO",
        "mr-24": "Gallery_mr-24__ce45T",
        thumbnail_container: "Gallery_thumbnail_container__OiK1O",
        "image-thumbnail": "Gallery_image-thumbnail___WFDm",
        mobile: "Gallery_mobile__2zeAq",
        web: "Gallery_web__QuKW_",
      };
    },
    1165: (e) => {
      e.exports = { header: "Header_header__AF_3G", navigation_actions: "Header_navigation_actions__lV9y1", auth_actions: "Header_auth_actions__zNTOB", mobile_menu: "Header_mobile_menu___yDX7", dropdown: "Header_dropdown__f5upL", burger_text: "Header_burger_text__9Hkmc" };
    },
    1549: (e) => {
      e.exports = { field: "Input_field__psflL" };
    },
    6519: (e) => {
      e.exports = { field: "Textarea_field__AYkNV", char_count: "Textarea_char_count__qG01T" };
    },
  },
  (e) => {
    var n = (n) => e((e.s = n));
    e.O(0, [32, 229, 895, 992, 802, 441, 517, 358], () => n(9904)), (_N_E = e.O());
  },
]);
