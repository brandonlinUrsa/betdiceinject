webpackJsonp([0], {
    "+J1r": function(t, a, e) {
        "use strict";
        var n = e("DUJh")
          , r = e("hj09")
          , i = !1;
        var s = function(t) {
            i || e("CxNS")
        }
          , o = e("VU/8")(n.a, r.a, !1, s, "data-v-ef1ae5d2", null);
        o.options.__file = "components/baccarat/sub/crown.vue",
        a.a = o.exports
    },
    "+biz": function(t, a, e) {
        "use strict";
        var n = e("Zx67")
          , r = e.n(n)
          , i = e("QVop")
          , s = e("GwgP");
        a.a = {
            data: function() {
                return {
                    defalut_val: [{
                        result: "player",
                        isBankerPair: !1,
                        isPlayerPair: !1
                    }, {
                        result: "banker",
                        isBankerPair: !1,
                        isPlayerPair: !1
                    }, {
                        result: "tie",
                        isBankerPair: !1,
                        isPlayerPair: !1
                    }, {
                        result: "playerPair",
                        isBankerPair: !1,
                        isPlayerPair: !0
                    }, {
                        result: "bankerPair",
                        isBankerPair: !0,
                        isPlayerPair: !1
                    }],
                    table_results: {
                        one: [],
                        two: [],
                        three: [],
                        four: [],
                        five: [],
                        six: []
                    },
                    ops: {
                        vuescroll: {
                            mode: "native",
                            detectResize: !0,
                            scroller: {
                                bouncing: !1,
                                locking: !0,
                                minZoom: 1,
                                maxZoom: 1
                            }
                        },
                        scrollPanel: {
                            scrollingY: !1,
                            initialScrollX: "50%"
                        },
                        bar: {
                            background: "gray",
                            hoverStyle: !0
                        },
                        list: null
                    },
                    coolTime: !0
                }
            },
            props: ["resultData"],
            watch: {
                resultData: {
                    handler: function(t, a) {
                        this.init()
                    },
                    deep: !0,
                    immediate: !0
                },
                "$store.state.baccarat.responsive": function() {
                    this.init()
                }
            },
            computed: {
                betsResultData: function() {
                    return this.resultData || []
                },
                table_left_data: function() {
                    var t = {
                        banker: 0,
                        player: 0,
                        tie: 0,
                        isBankerPair: 0,
                        isPlayerPair: 0
                    };
                    return this.betsResultData.forEach(function(a, e) {
                        "banker" === a.result ? t.banker += 1 : "player" === a.result ? t.player += 1 : t.tie += 1,
                        a.isBankerPair && (t.isBankerPair += 1),
                        a.isPlayerPair && (t.isPlayerPair += 1)
                    }),
                    t
                }
            },
            methods: {
                init: function() {
                    var t = this;
                    this.ops.list = null,
                    this.coolTime && (this.coolTime = !1,
                    setTimeout(function() {
                        if (t.resultData) {
                            var a = t.resultData.length / 126 * 100;
                            t.ops.scrollPanel.initialScrollX = Math.floor(a) + "%",
                            t.ops.list = t.resultData
                        }
                        t.coolTime = !0
                    }, 100))
                },
                makeRandom: function(t) {
                    for (var a = void 0, e = 0; e < t; e++)
                        a += Math.floor(1e3 * Math.random());
                    return a
                },
                autoScroll_mounted: function(t) {
                    var a = this
                      , e = 120 * Number(1..toFixed(1));
                    this.$nextTick(function() {
                        a.ops.scrollPanel.initialScrollX = e >= 100 ? "99%" : e + "%"
                    })
                }
            },
            components: {
                bets: i.a,
                bets_other: s.a
            },
            mounted: function() {
                console.log(22, r()([1, 2]))
            },
            beforeMount: function() {
                this.init()
            }
        }
    },
    "+ftz": function(t, a, e) {
        var n = e("hKCo");
        "string" == typeof n && (n = [[t.i, n, ""]]),
        n.locals && (t.exports = n.locals);
        (0,
        e("rjj0").default)("10ce3de9", n, !1, {
            sourceMap: !1
        })
    },
    "0GRu": function(t, a, e) {
        var n = e("lHGo");
        "string" == typeof n && (n = [[t.i, n, ""]]),
        n.locals && (t.exports = n.locals);
        (0,
        e("rjj0").default)("7213a86a", n, !1, {
            sourceMap: !1
        })
    },
    "0T/v": function(t, a, e) {
        "use strict";
        a.a = {
            props: ["val"]
        }
    },
    "1Rj0": function(t, a, e) {
        "use strict";
        var n = e("NHOO")
          , r = e("a7eL")
          , i = !1;
        var s = function(t) {
            i || (e("p0uR"),
            e("Q0ft"))
        }
          , o = e("VU/8")(n.a, r.a, !1, s, "data-v-b36b3586", null);
        o.options.__file = "components/baccarat/sub/betting_progress.vue",
        a.a = o.exports
    },
    "1upv": function(t, a, e) {
        "use strict";
        var n = e("O3Ic")
          , r = e("RUiO")
          , i = !1;
        var s = function(t) {
            i || e("0GRu")
        }
          , o = e("VU/8")(n.a, r.a, !1, s, "data-v-e73221bc", null);
        o.options.__file = "components/baccarat/sub/count_down.vue",
        a.a = o.exports
    },
    "21pm": function(t, a, e) {
        (t.exports = e("FZ+f")(!1)).push([t.i, "\n.bet_result_table2[data-v-5ebb1538] {\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, .3);\n  border: 1px solid rgba(245, 240, 240, .4);\n}\n.bet_result_table2 .title[data-v-5ebb1538] {\n  height: 15%;\n  border-bottom: 1px solid rgba(245, 240, 240, .4);\n  padding: 1.6px 1.28px;\n  padding: 0.1rem 0.08rem;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  background-color: rgba(0, 0, 0, .3);\n  -ms-flex-pack: distribute;\n      justify-content: space-around;\n}\n.bet_result_table2 .title > div[data-v-5ebb1538] {\n  width: 15%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-pack: distribute;\n      justify-content: space-around;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n.bet_result_table2 .title .hollow_circle > div[data-v-5ebb1538]:first-child {\n  border: 1px solid #283485;\n}\n.bet_result_table2 .title .hollow_circle > div[data-v-5ebb1538]:last-child {\n  border: 1px solid #b01c2f;\n}\n.bet_result_table2 .title .solid_circle > div[data-v-5ebb1538]:first-child {\n  background: #283485;\n}\n.bet_result_table2 .title .solid_circle > div[data-v-5ebb1538]:last-child {\n  background: #b01c2f;\n}\n.bet_result_table2 .title .bias > div[data-v-5ebb1538] {\n  height: 5.12px;\n  height: 0.32rem;\n  min-height: 22px;\n  -webkit-transform: rotate(45deg);\n          transform: rotate(45deg);\n}\n.bet_result_table2 .title .bias > div[data-v-5ebb1538]:first-child {\n  border-right: 2px solid #283485;\n}\n.bet_result_table2 .title .bias > div[data-v-5ebb1538]:last-child {\n  border-right: 2px solid #b01c2f;\n}\n.bet_result_table2 .title .circle[data-v-5ebb1538] {\n  width: 5.12px;\n  width: 0.32rem;\n  min-width: 22px;\n  min-height: 22px;\n  height: 5.12px;\n  height: 0.32rem;\n  border-radius: 50%;\n}\n.bet_result_table2 .bets_result_wrap[data-v-5ebb1538] {\n  width: 23px;\n  height: 23px;\n  margin: 2px 2px 0;\n  border-radius: 6px;\n  background: rgba(187, 185, 185, .3);\n}\n.bet_result_table2 .first_result[data-v-5ebb1538],\n.bet_result_table2 .second_result[data-v-5ebb1538],\n.bet_result_table2 .thirdly_result[data-v-5ebb1538] {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -ms-flex-wrap: wrap ;\n      flex-wrap: wrap ;\n}\n.bet_result_table2 .first_result[data-v-5ebb1538] {\n  height: 158px;\n}\n.bet_result_table2 .second_result[data-v-5ebb1538] {\n  height: 82px;\n}\n.bet_result_table2 .thirdly_result[data-v-5ebb1538] {\n  height: 80px;\n}\n.bet_result_table2 .thirdly_result > div[data-v-5ebb1538]:nth-child(40) {\n  margin-left: 27px;\n}\n.bet_result_table2 .thirdly_result > div[data-v-5ebb1538]:nth-child(41) {\n  margin-left: 27px;\n}\n.bet_result_table2 .thirdly_result > div[data-v-5ebb1538]:nth-child(42) {\n  margin-left: 27px;\n}\n.bet_result_table2 .thirdly_result_left[data-v-5ebb1538],\n.bet_result_table2 .thirdly_result_right[data-v-5ebb1538] {\n  width: 100%;\n  height: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -ms-flex-wrap: wrap ;\n      flex-wrap: wrap ;\n}\n.bet_result_table2 .thirdly_result_left > div[data-v-5ebb1538],\n.bet_result_table2 .thirdly_result_right > div[data-v-5ebb1538] {\n  display: inline-block;\n}\n", ""])
    },
    "2qup": function(t, a, e) {
        "use strict";
        var n = e("4uOo")
          , r = e("8azz")
          , i = !1;
        var s = function(t) {
            i || e("4P3z")
        }
          , o = e("VU/8")(n.a, r.a, !1, s, "data-v-39d2e8b6", null);
        o.options.__file = "components/baccarat/sub/audio.vue",
        a.a = o.exports
    },
    "3P9G": function(t, a, e) {
        var n = e("G6QZ");
        "string" == typeof n && (n = [[t.i, n, ""]]),
        n.locals && (t.exports = n.locals);
        (0,
        e("rjj0").default)("3ca4ba18", n, !1, {
            sourceMap: !1
        })
    },
    "4P3z": function(t, a, e) {
        var n = e("nGcV");
        "string" == typeof n && (n = [[t.i, n, ""]]),
        n.locals && (t.exports = n.locals);
        (0,
        e("rjj0").default)("b6450e58", n, !1, {
            sourceMap: !1
        })
    },
    "4uOo": function(t, a, e) {
        "use strict";
        a.a = {
            data: function() {
                return {
                    file_name: "",
                    close_time: ""
                }
            },
            props: ["audio_name"],
            watch: {
                audio_name: function(t) {
                    this.file_name = this.audio_name
                }
            },
            methods: {
                updateTime: function(t) {
                    var a = t.target.currentTime;
                    this.close_time = a
                }
            }
        }
    },
    "4x+j": function(t, a, e) {
        (t.exports = e("FZ+f")(!1)).push([t.i, "\n.bets_other .other[data-v-61b9b763] {\n  width: 26px;\n  height: 26px;\n  border-radius: 50%;\n  color: white;\n  position: relative;\n  background: #cccccc;\n}\n.bets_other .other .small_red[data-v-61b9b763] {\n  position: absolute;\n  left: -1px;\n  top: -1px;\n  border-radius: 50%;\n  background: #b21d30;\n  width: 8px;\n  height: 8px;\n  border: 1px solid #ab9859;\n}\n.bets_other .other .small_blue[data-v-61b9b763] {\n  width: 8px;\n  height: 8px;\n  position: absolute;\n  right: -1px;\n  bottom: -1px;\n  border-radius: 50%;\n  background: #283185;\n  border: 1px solid #ab9859;\n}\n", ""])
    },
    "5FnK": function(t, a, e) {
        "use strict";
        var n = e("N71J")
          , r = e("gC42")
          , i = !1;
        var s = function(t) {
            i || e("yrAc")
        }
          , o = e("VU/8")(n.a, r.a, !1, s, "data-v-06f78cda", null);
        o.options.__file = "components/baccarat/sub/poker_items.vue",
        a.a = o.exports
    },
    "5Iel": function(t, a, e) {
        (t.exports = e("FZ+f")(!1)).push([t.i, "\n.bet_wrap[data-v-49255abc] {\n  position: absolute;\n  left: 15%;\n  top: 52%;\n  -webkit-transform: translateY(-52%);\n          transform: translateY(-52%);\n}\n.bet_wrap .playerT[data-v-49255abc] {\n  -webkit-animation: player1T-data-v-49255abc 1s linear;\n          animation: player1T-data-v-49255abc 1s linear;\n}\n.bet_wrap .bankerT[data-v-49255abc] {\n  -webkit-animation: banker1T-data-v-49255abc 1s linear;\n          animation: banker1T-data-v-49255abc 1s linear;\n}\n.bet_wrap .tieT[data-v-49255abc] {\n  -webkit-animation: tieT-data-v-49255abc 1s linear;\n          animation: tieT-data-v-49255abc 1s linear;\n}\n.bet_wrap .playerPairT[data-v-49255abc] {\n  -webkit-animation: playerT-data-v-49255abc 1s linear;\n          animation: playerT-data-v-49255abc 1s linear;\n}\n.bet_wrap .bankerPairT[data-v-49255abc] {\n  -webkit-animation: bankerT-data-v-49255abc 1s linear;\n          animation: bankerT-data-v-49255abc 1s linear;\n}\n.bet_wrap .playerA[data-v-49255abc] {\n  -webkit-animation: player1A-data-v-49255abc 1s linear;\n          animation: player1A-data-v-49255abc 1s linear;\n}\n.bet_wrap .bankerA[data-v-49255abc] {\n  -webkit-animation: banker1A-data-v-49255abc 1s linear;\n          animation: banker1A-data-v-49255abc 1s linear;\n}\n.bet_wrap .tieA[data-v-49255abc] {\n  -webkit-animation: tieA-data-v-49255abc 1s linear;\n          animation: tieA-data-v-49255abc 1s linear;\n}\n.bet_wrap .playerPairA[data-v-49255abc] {\n  -webkit-animation: playerA-data-v-49255abc 1s linear;\n          animation: playerA-data-v-49255abc 1s linear;\n}\n.bet_wrap .bankerPairA[data-v-49255abc] {\n  -webkit-animation: bankerA-data-v-49255abc 1s linear;\n          animation: bankerA-data-v-49255abc 1s linear;\n}\n.bet_wrap .playerF[data-v-49255abc] {\n  -webkit-animation: player1F-data-v-49255abc 1s linear;\n          animation: player1F-data-v-49255abc 1s linear;\n}\n.bet_wrap .bankerF[data-v-49255abc] {\n  -webkit-animation: banker1F-data-v-49255abc 1s linear;\n          animation: banker1F-data-v-49255abc 1s linear;\n}\n.bet_wrap .tieF[data-v-49255abc] {\n  -webkit-animation: tieF-data-v-49255abc 1s linear;\n          animation: tieF-data-v-49255abc 1s linear;\n}\n.bet_wrap .playerPairF[data-v-49255abc] {\n  -webkit-animation: playerF-data-v-49255abc 1s linear;\n          animation: playerF-data-v-49255abc 1s linear;\n}\n.bet_wrap .bankerPairF[data-v-49255abc] {\n  -webkit-animation: bankerF-data-v-49255abc 1s linear;\n          animation: bankerF-data-v-49255abc 1s linear;\n}\n@-webkit-keyframes player1T-data-v-49255abc {\n0% {\n    opacity: 0.5;\n}\n100% {\n    opacity: 0.3;\n    -webkit-transform: translate(-1rem, 2rem);\n            transform: translate(-1rem, 2rem);\n    opacity: 0;\n    top: 0;\n}\n}\n@keyframes player1T-data-v-49255abc {\n0% {\n    opacity: 0.5;\n}\n100% {\n    opacity: 0.3;\n    -webkit-transform: translate(-1rem, 2rem);\n            transform: translate(-1rem, 2rem);\n    opacity: 0;\n    top: 0;\n}\n}\n@-webkit-keyframes banker1T-data-v-49255abc {\n0% {\n    opacity: 0.5;\n}\n100% {\n    opacity: 0.3;\n    -webkit-transform: translate(1rem, 3rem);\n            transform: translate(1rem, 3rem);\n    opacity: 0;\n    top: 0;\n}\n}\n@keyframes banker1T-data-v-49255abc {\n0% {\n    opacity: 0.5;\n}\n100% {\n    opacity: 0.3;\n    -webkit-transform: translate(1rem, 3rem);\n            transform: translate(1rem, 3rem);\n    opacity: 0;\n    top: 0;\n}\n}\n@-webkit-keyframes tieT-data-v-49255abc {\n0% {\n    opacity: 0.8;\n}\n100% {\n    opacity: 0.3;\n    -webkit-transform: translate(1rem, 4rem);\n            transform: translate(1rem, 4rem);\n    opacity: 0;\n    top: 0;\n}\n}\n@keyframes tieT-data-v-49255abc {\n0% {\n    opacity: 0.8;\n}\n100% {\n    opacity: 0.3;\n    -webkit-transform: translate(1rem, 4rem);\n            transform: translate(1rem, 4rem);\n    opacity: 0;\n    top: 0;\n}\n}\n@-webkit-keyframes playerT-data-v-49255abc {\n0% {\n    opacity: 0.5;\n}\n100% {\n    opacity: 0.3;\n    -webkit-transform: translate(0, 6rem);\n            transform: translate(0, 6rem);\n    opacity: 0;\n    top: 0;\n}\n}\n@keyframes playerT-data-v-49255abc {\n0% {\n    opacity: 0.5;\n}\n100% {\n    opacity: 0.3;\n    -webkit-transform: translate(0, 6rem);\n            transform: translate(0, 6rem);\n    opacity: 0;\n    top: 0;\n}\n}\n@-webkit-keyframes bankerT-data-v-49255abc {\n0% {\n    opacity: 0.5;\n}\n100% {\n    opacity: 0.3;\n    -webkit-transform: translate(-2rem, 6rem);\n            transform: translate(-2rem, 6rem);\n    top: 0;\n}\n}\n@keyframes bankerT-data-v-49255abc {\n0% {\n    opacity: 0.5;\n}\n100% {\n    opacity: 0.3;\n    -webkit-transform: translate(-2rem, 6rem);\n            transform: translate(-2rem, 6rem);\n    top: 0;\n}\n}\n@-webkit-keyframes player1A-data-v-49255abc {\n0% {\n    opacity: 0.5;\n}\n100% {\n    opacity: 0.3;\n    -webkit-transform: translate(1rem, 2rem);\n            transform: translate(1rem, 2rem);\n    opacity: 0;\n    top: 0;\n}\n}\n@keyframes player1A-data-v-49255abc {\n0% {\n    opacity: 0.5;\n}\n100% {\n    opacity: 0.3;\n    -webkit-transform: translate(1rem, 2rem);\n            transform: translate(1rem, 2rem);\n    opacity: 0;\n    top: 0;\n}\n}\n@-webkit-keyframes banker1A-data-v-49255abc {\n0% {\n    opacity: 0.5;\n}\n100% {\n    opacity: 0.3;\n    -webkit-transform: translate(1rem, 3rem);\n            transform: translate(1rem, 3rem);\n    opacity: 0;\n    top: 0;\n}\n}\n@keyframes banker1A-data-v-49255abc {\n0% {\n    opacity: 0.5;\n}\n100% {\n    opacity: 0.3;\n    -webkit-transform: translate(1rem, 3rem);\n            transform: translate(1rem, 3rem);\n    opacity: 0;\n    top: 0;\n}\n}\n@-webkit-keyframes tieA-data-v-49255abc {\n0% {\n    opacity: 0.8;\n}\n100% {\n    opacity: 0.3;\n    -webkit-transform: translate(1rem, 4rem);\n            transform: translate(1rem, 4rem);\n    opacity: 0;\n    top: 0;\n}\n}\n@keyframes tieA-data-v-49255abc {\n0% {\n    opacity: 0.8;\n}\n100% {\n    opacity: 0.3;\n    -webkit-transform: translate(1rem, 4rem);\n            transform: translate(1rem, 4rem);\n    opacity: 0;\n    top: 0;\n}\n}\n@-webkit-keyframes playerA-data-v-49255abc {\n0% {\n    opacity: 0.5;\n}\n100% {\n    opacity: 0.3;\n    -webkit-transform: translate(0, 6rem);\n            transform: translate(0, 6rem);\n    opacity: 0;\n    top: 0;\n}\n}\n@keyframes playerA-data-v-49255abc {\n0% {\n    opacity: 0.5;\n}\n100% {\n    opacity: 0.3;\n    -webkit-transform: translate(0, 6rem);\n            transform: translate(0, 6rem);\n    opacity: 0;\n    top: 0;\n}\n}\n@-webkit-keyframes bankerA-data-v-49255abc {\n0% {\n    opacity: 0.5;\n}\n100% {\n    opacity: 0.3;\n    -webkit-transform: translate(-2rem, 6rem);\n            transform: translate(-2rem, 6rem);\n    top: 0;\n}\n}\n@keyframes bankerA-data-v-49255abc {\n0% {\n    opacity: 0.5;\n}\n100% {\n    opacity: 0.3;\n    -webkit-transform: translate(-2rem, 6rem);\n            transform: translate(-2rem, 6rem);\n    top: 0;\n}\n}\n@-webkit-keyframes player1F-data-v-49255abc {\n0% {\n    opacity: 0.5;\n}\n20% {\n    -webkit-transform: translate(0, 0);\n            transform: translate(0, 0);\n}\n100% {\n    opacity: 0.3;\n    -webkit-transform: translate(3rem, -8rem);\n            transform: translate(3rem, -8rem);\n    opacity: 0;\n    top: 0;\n}\n}\n@keyframes player1F-data-v-49255abc {\n0% {\n    opacity: 0.5;\n}\n20% {\n    -webkit-transform: translate(0, 0);\n            transform: translate(0, 0);\n}\n100% {\n    opacity: 0.3;\n    -webkit-transform: translate(3rem, -8rem);\n            transform: translate(3rem, -8rem);\n    opacity: 0;\n    top: 0;\n}\n}\n@-webkit-keyframes banker1F-data-v-49255abc {\n0% {\n    opacity: 0.5;\n}\n20% {\n    -webkit-transform: translate(0, 0);\n            transform: translate(0, 0);\n}\n100% {\n    opacity: 0.3;\n    -webkit-transform: translate(2rem, -6rem);\n            transform: translate(2rem, -6rem);\n    opacity: 0;\n    top: 0;\n}\n}\n@keyframes banker1F-data-v-49255abc {\n0% {\n    opacity: 0.5;\n}\n20% {\n    -webkit-transform: translate(0, 0);\n            transform: translate(0, 0);\n}\n100% {\n    opacity: 0.3;\n    -webkit-transform: translate(2rem, -6rem);\n            transform: translate(2rem, -6rem);\n    opacity: 0;\n    top: 0;\n}\n}\n@-webkit-keyframes tieF-data-v-49255abc {\n0% {\n    opacity: 0.5;\n}\n20% {\n    -webkit-transform: translate(0, 0);\n            transform: translate(0, 0);\n}\n100% {\n    opacity: 0.3;\n    -webkit-transform: translate(1.5rem, -4rem);\n            transform: translate(1.5rem, -4rem);\n    opacity: 0;\n    top: 0;\n}\n}\n@keyframes tieF-data-v-49255abc {\n0% {\n    opacity: 0.5;\n}\n20% {\n    -webkit-transform: translate(0, 0);\n            transform: translate(0, 0);\n}\n100% {\n    opacity: 0.3;\n    -webkit-transform: translate(1.5rem, -4rem);\n            transform: translate(1.5rem, -4rem);\n    opacity: 0;\n    top: 0;\n}\n}\n@-webkit-keyframes playerF-data-v-49255abc {\n0% {\n    opacity: 0.5;\n}\n20% {\n    -webkit-transform: translate(0, 0);\n            transform: translate(0, 0);\n}\n100% {\n    opacity: 0.3;\n    -webkit-transform: translate(4rem, -4rem);\n            transform: translate(4rem, -4rem);\n    opacity: 0;\n    top: 0;\n}\n}\n@keyframes playerF-data-v-49255abc {\n0% {\n    opacity: 0.5;\n}\n20% {\n    -webkit-transform: translate(0, 0);\n            transform: translate(0, 0);\n}\n100% {\n    opacity: 0.3;\n    -webkit-transform: translate(4rem, -4rem);\n            transform: translate(4rem, -4rem);\n    opacity: 0;\n    top: 0;\n}\n}\n@-webkit-keyframes bankerF-data-v-49255abc {\n0% {\n    opacity: 0.5;\n}\n20% {\n    -webkit-transform: translate(0, 0);\n            transform: translate(0, 0);\n}\n100% {\n    opacity: 0.3;\n    -webkit-transform: translate(-4rem, -4rem);\n            transform: translate(-4rem, -4rem);\n    opacity: 0;\n    top: 0;\n}\n}\n@keyframes bankerF-data-v-49255abc {\n0% {\n    opacity: 0.5;\n}\n20% {\n    -webkit-transform: translate(0, 0);\n            transform: translate(0, 0);\n}\n100% {\n    opacity: 0.3;\n    -webkit-transform: translate(-4rem, -4rem);\n            transform: translate(-4rem, -4rem);\n    opacity: 0;\n    top: 0;\n}\n}\n.bet_wrap .select_bets[data-v-49255abc] {\n  margin: 0 auto;\n  width: 13.12px;\n  width: 0.82rem;\n  min-width: 36px;\n  min-height: 36px;\n  height: 13.12px;\n  height: 0.82rem;\n  position: relative;\n}\n.bet_wrap .select_bets .opc1[data-v-49255abc] {\n  opacity: 0.4;\n}\n.bet_wrap .select_bets .opc2[data-v-49255abc] {\n  opacity: 1;\n}\n.bet_wrap .select_bets .img_wrap[data-v-49255abc] {\n  position: relative;\n  width: 13.12px;\n  width: 0.82rem;\n  min-width: 100%;\n  height: 13.12px;\n  height: 0.82rem;\n  min-height: 100%;\n}\n.bet_wrap .select_bets .img_wrap > img[data-v-49255abc] {\n  width: 100%;\n  position: absolute;\n  left: 0;\n  bottom: 0;\n}\n.bet_wrap .select_bets .img_wrap .img_animation[data-v-49255abc] {\n  width: 13.12px;\n  width: 0.82rem;\n  min-width: 36px;\n  min-height: 36px;\n  height: 13.12px;\n  height: 0.82rem;\n  position: relative;\n  -webkit-animation-iteration-count: 1;\n          animation-iteration-count: 1;\n  opacity: 0.8;\n  -webkit-transform: translateX(150%);\n          transform: translateX(150%);\n  display: none;\n  left: 0;\n}\n.bet_wrap .select_bets .img_wrap .img_animation > img[data-v-49255abc] {\n  width: 100%;\n}\n.bet_wrap .select_bets .img_wrap .player[data-v-49255abc] {\n  -webkit-animation: player1-data-v-49255abc 0.5s linear;\n          animation: player1-data-v-49255abc 0.5s linear;\n}\n.bet_wrap .select_bets .img_wrap .banker[data-v-49255abc] {\n  -webkit-animation: banker1-data-v-49255abc 0.5s linear;\n          animation: banker1-data-v-49255abc 0.5s linear;\n}\n.bet_wrap .select_bets .img_wrap .tie[data-v-49255abc] {\n  -webkit-animation: tie-data-v-49255abc 0.5s linear;\n          animation: tie-data-v-49255abc 0.5s linear;\n}\n.bet_wrap .select_bets .img_wrap .playerPair[data-v-49255abc] {\n  -webkit-animation: player-data-v-49255abc 0.5s linear;\n          animation: player-data-v-49255abc 0.5s linear;\n}\n.bet_wrap .select_bets .img_wrap .bankerPair[data-v-49255abc] {\n  -webkit-animation: banker-data-v-49255abc 0.5s linear;\n          animation: banker-data-v-49255abc 0.5s linear;\n}\n@-webkit-keyframes player1-data-v-49255abc {\n0% {\n    opacity: 0.5;\n    -webkit-transform: translateX(0);\n            transform: translateX(0);\n}\n100% {\n    -webkit-transform: translateX(150%);\n            transform: translateX(150%);\n}\n}\n@keyframes player1-data-v-49255abc {\n0% {\n    opacity: 0.5;\n    -webkit-transform: translateX(0);\n            transform: translateX(0);\n}\n100% {\n    -webkit-transform: translateX(150%);\n            transform: translateX(150%);\n}\n}\n@-webkit-keyframes banker1-data-v-49255abc {\n0% {\n    opacity: 0.5;\n    -webkit-transform: translateX(0);\n            transform: translateX(0);\n}\n100% {\n    -webkit-transform: translateX(150%);\n            transform: translateX(150%);\n}\n}\n@keyframes banker1-data-v-49255abc {\n0% {\n    opacity: 0.5;\n    -webkit-transform: translateX(0);\n            transform: translateX(0);\n}\n100% {\n    -webkit-transform: translateX(150%);\n            transform: translateX(150%);\n}\n}\n@-webkit-keyframes tie-data-v-49255abc {\n0% {\n    opacity: 0.5;\n    -webkit-transform: translateX(0);\n            transform: translateX(0);\n}\n100% {\n    -webkit-transform: translateX(150%);\n            transform: translateX(150%);\n}\n}\n@keyframes tie-data-v-49255abc {\n0% {\n    opacity: 0.5;\n    -webkit-transform: translateX(0);\n            transform: translateX(0);\n}\n100% {\n    -webkit-transform: translateX(150%);\n            transform: translateX(150%);\n}\n}\n@-webkit-keyframes player-data-v-49255abc {\n0% {\n    opacity: 0.5;\n    -webkit-transform: translateX(0);\n            transform: translateX(0);\n}\n100% {\n    -webkit-transform: translateX(150%);\n            transform: translateX(150%);\n}\n}\n@keyframes player-data-v-49255abc {\n0% {\n    opacity: 0.5;\n    -webkit-transform: translateX(0);\n            transform: translateX(0);\n}\n100% {\n    -webkit-transform: translateX(150%);\n            transform: translateX(150%);\n}\n}\n@-webkit-keyframes banker-data-v-49255abc {\n0% {\n    opacity: 0.5;\n    -webkit-transform: translateX(0);\n            transform: translateX(0);\n}\n100% {\n    -webkit-transform: translateX(150%);\n            transform: translateX(150%);\n}\n}\n@keyframes banker-data-v-49255abc {\n0% {\n    opacity: 0.5;\n    -webkit-transform: translateX(0);\n            transform: translateX(0);\n}\n100% {\n    -webkit-transform: translateX(150%);\n            transform: translateX(150%);\n}\n}\n.bet_wrap .select_bets .btns[data-v-49255abc] {\n  width: 25.6px;\n  width: 1.6rem;\n  min-width: 72px;\n  min-height: 14px;\n  height: 5.76px;\n  height: 0.36rem;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  position: absolute;\n  bottom: -2px;\n  left: 0;\n  -webkit-transform: translate3d(-28%, 100%, 0);\n          transform: translate3d(-28%, 100%, 0);\n}\n.bet_wrap .select_bets .btns i[data-v-49255abc] {\n  color: white;\n}\n.bet_wrap .select_bets .btns ._send_loading[data-v-49255abc] {\n  background: #53d13f;\n}\n.bet_wrap .select_bets .btns ._send_btn[data-v-49255abc] {\n  width: 5.12px;\n  width: 0.32rem;\n  min-width: 28%;\n  min-height: 18px;\n  height: 5.44px;\n  height: 0.34rem;\n  border-radius: 50%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  cursor: pointer;\n  margin: 0 0.32px;\n  margin: 0 0.02rem;\n  border-right: 1px solid #f5d702;\n  border-bottom: 1px solid #f5d702;\n  border-left: 1px solid #f5d702;\n  overflow: hidden;\n}\n.bet_wrap .select_bets .btns ._send_btn img[data-v-49255abc] {\n  width: 100%;\n  height: 100%;\n  opacity: 1;\n}\n.bet_wrap .select_bets .btns ._send_btn i[data-v-49255abc] {\n  font-size: 3.2px;\n  font-size: 0.2rem;\n  -webkit-transition: all 0.5s;\n  transition: all 0.5s;\n  -webkit-transform: translate3d(0, 0, 0) rotate(0);\n          transform: translate3d(0, 0, 0) rotate(0);\n}\n.bet_wrap .select_bets .btns ._send_btn:hover img[data-v-49255abc] {\n  -webkit-transform: translate3d(0, 3%, 0) rotate(360deg);\n          transform: translate3d(0, 3%, 0) rotate(360deg);\n  opacity: 0.8;\n}\n.bet_wrap .select_bets .btns ._rorate_btn[data-v-49255abc] {\n  width: 5.12px;\n  width: 0.32rem;\n  height: 5.44px;\n  height: 0.34rem;\n  min-width: 28%;\n  min-height: 18px;\n  border-radius: 50%;\n  overflow: hidden;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  border-right: 1px solid #f5d702;\n  border-bottom: 1px solid #f5d702;\n  border-left: 1px solid #f5d702;\n  cursor: pointer;\n}\n.bet_wrap .select_bets .btns ._rorate_btn img[data-v-49255abc] {\n  width: 100%;\n  height: 100%;\n  opacity: 1;\n}\n.bet_wrap .select_bets .btns ._rorate_btn i[data-v-49255abc] {\n  font-size: 3.2px;\n  font-size: 0.2rem;\n  -webkit-transition: all 1s;\n  transition: all 1s;\n  -webkit-transform: translate3d(0, 0, 0) rotate(0);\n          transform: translate3d(0, 0, 0) rotate(0);\n}\n.bet_wrap .select_bets .btns ._rorate_btn:hover img[data-v-49255abc] {\n  -webkit-transform: translate3d(0, 3%, 0) rotate(360deg);\n          transform: translate3d(0, 3%, 0) rotate(360deg);\n  opacity: 0.8;\n}\n.bet_wrap .select_bets .btns ._close_btn[data-v-49255abc] {\n  width: 5.12px;\n  width: 0.32rem;\n  height: 5.44px;\n  height: 0.34rem;\n  min-width: 28%;\n  min-height: 18px;\n  border-radius: 50%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  cursor: pointer;\n  overflow: hidden;\n  border-right: 1px solid #f5d702;\n  border-bottom: 1px solid #f5d702;\n  border-left: 1px solid #f5d702;\n}\n.bet_wrap .select_bets .btns ._close_btn img[data-v-49255abc] {\n  width: 100%;\n  height: 100%;\n  opacity: 1;\n}\n.bet_wrap .select_bets .btns ._close_btn i[data-v-49255abc] {\n  color: white;\n  font-size: 3.2px;\n  font-size: 0.2rem;\n  -webkit-transition: all 1s;\n  transition: all 1s;\n  -webkit-transform-origin: center center;\n          transform-origin: center center;\n}\n.bet_wrap .select_bets .btns ._close_btn:hover img[data-v-49255abc] {\n  -webkit-transform: translate3d(0, 3%, 0) rotate(360deg);\n          transform: translate3d(0, 3%, 0) rotate(360deg);\n  opacity: 0.8;\n}\n.bet_wrap .select_bets .btn_hide[data-v-49255abc] {\n  -webkit-animation: btn-data-v-49255abc 1s;\n          animation: btn-data-v-49255abc 1s;\n}\n@-webkit-keyframes btn-data-v-49255abc {\nfrom {\n    opacity: 1;\n}\nto {\n    opacity: 0;\n}\n}\n@keyframes btn-data-v-49255abc {\nfrom {\n    opacity: 1;\n}\nto {\n    opacity: 0;\n}\n}\n.bet_wrap .select_bets .chara_btn[data-v-49255abc] {\n  min-height: 16px;\n  height: 5.76px;\n  height: 0.36rem;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  position: absolute;\n  bottom: 0;\n  left: 50%;\n  -webkit-transform: translateX(-50%);\n          transform: translateX(-50%);\n  border-top: 0.32px solid;\n  border-top: 0.02rem solid;\n  border-bottom: 0.32px solid;\n  border-bottom: 0.02rem solid;\n  -o-border-image: linear-gradient(to left, rgba(3, 123, 61, .1), #f5d702, rgba(3, 123, 61, .1)) 30 0;\n     border-image: -webkit-gradient(linear, right top, left top, from(rgba(3, 123, 61, .1)), color-stop(#f5d702), to(rgba(3, 123, 61, .1))) 30 0;\n     border-image: linear-gradient(to left, rgba(3, 123, 61, .1), #f5d702, rgba(3, 123, 61, .1)) 30 0;\n  padding-left: 5px;\n  padding-right: 5px;\n  background: -webkit-gradient(linear, right top, left top, from(rgba(0, 0, 0, .6)), color-stop(rgba(0, 0, 0, .9)), to(rgba(0, 0, 0, .6)));\n  background: linear-gradient(to left, rgba(0, 0, 0, .6), rgba(0, 0, 0, .9), rgba(0, 0, 0, .6));\n}\n.bet_wrap .select_bets .chara_btn .chara[data-v-49255abc] {\n  min-width: 100%;\n  text-align: center;\n}\n.bet_wrap .select_bets .chara_btn .chara > .line[data-v-49255abc] {\n  width: 100%;\n  height: 0.32px;\n  height: 0.02rem;\n  background: radial-gradient(#f5d702, rgba(245, 215, 2, .2), rgba(3, 123, 61, .1));\n}\n.bet_wrap .select_bets .chara_btn .chara ._chara[data-v-49255abc] {\n  height: 100%;\n  min-height: 14px;\n  color: #f4d903;\n  font-size: 3.2px;\n  font-size: 0.2rem;\n}\n.bet_wrap .select_bets .chara_btn .chara ._chara span[data-v-49255abc] {\n  font-size: 3.36px;\n  font-size: 0.21rem;\n  font-weight: 600;\n  white-space: nowrap;\n  text-shadow: 0 0 1.28px #f4d903;\n  text-shadow: 0 0 0.08rem #f4d903;\n}\n.bet_wrap .bet-tips[data-v-49255abc] {\n  background-color: red;\n  position: absolute;\n  bottom: 0%;\n  left: 50%;\n  -webkit-transform: translate(-50%, 150%);\n          transform: translate(-50%, 150%);\n  font-size: 13px;\n  padding: 1px 4px;\n  background-color: rgba(0, 0, 0, .6);\n  white-space: nowrap;\n}\n@media screen and (max-width: 470px) {\n.bet_wrap[data-v-49255abc] {\n    -webkit-transform: scale(1.6) !important;\n            transform: scale(1.6) !important;\n    -webkit-transform-origin: center center !important;\n            transform-origin: center center !important;\n}\n.chara_btn .chara ._chara[data-v-49255abc] {\n    line-height: 14px;\n}\n.chara_btn .chara ._chara span[data-v-49255abc] {\n    font-size: 14px !important;\n    font-weight: 300 !important;\n}\n.bet-tips[data-v-49255abc] {\n    -webkit-transform: translate(-50%, 190%) !important;\n            transform: translate(-50%, 190%) !important;\n    font-size: 7px !important;\n}\n.btns[data-v-49255abc] {\n    -webkit-transform: translate3d(-24%, 100%, 0) !important;\n            transform: translate3d(-24%, 100%, 0) !important;\n}\n.bet_wrap.at-right .select_bets .btns[data-v-49255abc] {\n    bottom: 17px !important;\n    left: 190% !important;\n}\n}\n", ""])
    },
    "5e/Z": function(t, a, e) {
        "use strict";
        var n = e("QVop")
          , r = e("GwgP");
        a.a = {
            data: function() {
                return {
                    defalut_val: [{
                        result: "player",
                        isBankerPair: !1,
                        isPlayerPair: !1
                    }, {
                        result: "banker",
                        isBankerPair: !1,
                        isPlayerPair: !1
                    }, {
                        result: "tie",
                        isBankerPair: !1,
                        isPlayerPair: !1
                    }, {
                        result: "player",
                        isBankerPair: !0,
                        isPlayerPair: !1
                    }, {
                        result: "banker",
                        isBankerPair: !1,
                        isPlayerPair: !0
                    }],
                    null_chara: this.$store.state.currentLang.baccarat[22],
                    bet_on: "押注了"
                }
            },
            components: {
                bets: n.a,
                bets_other: r.a
            },
            computed: {
                total: function() {
                    var t = []
                      , a = 0;
                    for (var e in this.$store.state.baccarat.betTopData)
                        t.push(),
                        a += Number(this.$store.state.baccarat.betTopData[e].subTotal.split(" ")[0]);
                    return a.toFixed(4)
                }
            },
            mounted: function() {}
        }
    },
    "5kgm": function(t, a, e) {
        "use strict";
        var n = function() {
            var t = this
              , a = t.$createElement
              , e = t._self._c || a;
            return e("div", {
                staticClass: "max-bet-progress",
                on: {
                    click: function(a) {
                        t.stopPropaga(a)
                    }
                }
            }, [e("ul", [t.showData ? e("li", {
                class: "open-warn"
            }, [e("el-progress", {
                staticStyle: {
                    width: "44px"
                },
                attrs: {
                    type: "circle",
                    percentage: t.showData.prog > 100 ? 100 : t.showData.prog,
                    "stroke-width": 12
                }
            }), e("span", [t._v("可投注金额："), e("br"), t._v(t._s(t.showData.remainStr + "/" + t.showData.remain))])], 1) : t._e()])])
        };
        n._withStripped = !0;
        var r = {
            render: n,
            staticRenderFns: []
        };
        a.a = r
    },
    "5toN": function(t, a, e) {
        "use strict";
        var n = function() {
            var t = this
              , a = t.$createElement
              , e = t._self._c || a;
            return e("div", {
                staticClass: "bet_result_table"
            }, [e("div", {
                staticClass: "title"
            }, [e("div", [e("div", [t._v("#")]), e("div", [t._v(t._s(t.betsResultData.length))])]), e("div", [e("div", [e("bets", {
                attrs: {
                    val: t.defalut_val[0]
                }
            })], 1), e("div", [t._v(t._s(t.table_left_data.player))])]), e("div", [e("div", [e("bets", {
                attrs: {
                    val: t.defalut_val[1]
                }
            })], 1), e("div", [t._v(t._s(t.table_left_data.banker))])]), e("div", [e("div", [e("bets", {
                attrs: {
                    val: t.defalut_val[2]
                }
            })], 1), e("div", [t._v(t._s(t.table_left_data.tie))])]), e("div", [e("bets_other", {
                attrs: {
                    val: t.defalut_val[3]
                }
            }), e("div", [t._v(t._s(t.table_left_data.isPlayerPair))])], 1), e("div", [e("bets_other", {
                attrs: {
                    val: t.defalut_val[4]
                }
            }), e("div", [t._v(t._s(t.table_left_data.isBankerPair))])], 1)]), t.ops.list ? e("div", {
                staticClass: "bet_result_wrap"
            }, [e("vue-scroll", {
                attrs: {
                    ops: t.ops
                }
            }, [e("div", {
                staticClass: "result_wrap"
            }, t._l(126, function(a, n) {
                return e("div", {
                    key: n
                }, [t.ops.list[n] ? e("bets", {
                    attrs: {
                        val: t.ops.list[n]
                    }
                }) : t._e()], 1)
            }))])], 1) : t._e()])
        };
        n._withStripped = !0;
        var r = {
            render: n,
            staticRenderFns: []
        };
        a.a = r
    },
    "5zde": function(t, a, e) {
        e("zQR9"),
        e("qyJz"),
        t.exports = e("FeBl").Array.from
    },
    "6bRM": function(t, a, e) {
        (t.exports = e("FZ+f")(!1)).push([t.i, "\n.crown[data-v-ef1ae5d2] {\n  position: absolute;\n  right: 10%;\n  -webkit-transform: translateX(-50%);\n          transform: translateX(-50%);\n  top: 10%;\n  width: 16px;\n  width: 1rem;\n  height: 16px;\n  height: 1rem;\n  -webkit-animation: rorate-data-v-ef1ae5d2 2s ease;\n          animation: rorate-data-v-ef1ae5d2 2s ease;\n}\n.crown > img[data-v-ef1ae5d2] {\n  width: 100%;\n  -webkit-animation: shine-data-v-ef1ae5d2 1s ease;\n          animation: shine-data-v-ef1ae5d2 1s ease;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n}\n.crown > img.img-1[data-v-ef1ae5d2] {\n  width: 16px;\n  width: 1rem;\n  height: 16px;\n  height: 1rem;\n  -webkit-animation: runRotate-data-v-ef1ae5d2 30s infinite;\n          animation: runRotate-data-v-ef1ae5d2 30s infinite;\n  opacity: 0.4;\n  top: -33%;\n  left: -52%;\n  width: 32px !important;\n  width: 2rem !important;\n  height: 32px !important;\n  height: 2rem !important;\n}\n@-webkit-keyframes runRotate-data-v-ef1ae5d2 {\nfrom {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n}\nto {\n    -webkit-transform: rotate(3600deg);\n            transform: rotate(3600deg);\n}\n}\n@keyframes runRotate-data-v-ef1ae5d2 {\nfrom {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n}\nto {\n    -webkit-transform: rotate(3600deg);\n            transform: rotate(3600deg);\n}\n}\n@-webkit-keyframes rorate-data-v-ef1ae5d2 {\nfrom {\n    -webkit-transform: rotate(0) translateY(-10rem) translateX(0);\n            transform: rotate(0) translateY(-10rem) translateX(0);\n}\nto {\n    -webkit-transform: rotate(360deg) translateX(-50%) translateY(0);\n            transform: rotate(360deg) translateX(-50%) translateY(0);\n}\n}\n@keyframes rorate-data-v-ef1ae5d2 {\nfrom {\n    -webkit-transform: rotate(0) translateY(-10rem) translateX(0);\n            transform: rotate(0) translateY(-10rem) translateX(0);\n}\nto {\n    -webkit-transform: rotate(360deg) translateX(-50%) translateY(0);\n            transform: rotate(360deg) translateX(-50%) translateY(0);\n}\n}\n@-webkit-keyframes shine-data-v-ef1ae5d2 {\n0% {\n    width: 0.1rem;\n}\n25% {\n    width: 0.2rem;\n}\n50% {\n    width: 0.5rem;\n}\n75% {\n    width: 0.8rem;\n}\n100% {\n    width: 1rem;\n}\n}\n@keyframes shine-data-v-ef1ae5d2 {\n0% {\n    width: 0.1rem;\n}\n25% {\n    width: 0.2rem;\n}\n50% {\n    width: 0.5rem;\n}\n75% {\n    width: 0.8rem;\n}\n100% {\n    width: 1rem;\n}\n}\n", ""])
    },
    "7G1+": function(t, a, e) {
        var n = e("21pm");
        "string" == typeof n && (n = [[t.i, n, ""]]),
        n.locals && (t.exports = n.locals);
        (0,
        e("rjj0").default)("3c229c0c", n, !1, {
            sourceMap: !1
        })
    },
    "8Y2o": function(t, a, e) {
        (t.exports = e("FZ+f")(!1)).push([t.i, "\n.audio_constrol[data-v-1a0565a5] {\n  cursor: pointer;\n}\n.audio_constrol i[data-v-1a0565a5] {\n  font-size: 6.4px;\n  font-size: 0.4rem;\n  color: #ccc;\n}\n.audio_constrol i[data-v-1a0565a5]:hover {\n  text-shadow: 0 0 0.48px #ccc;\n  text-shadow: 0 0 0.03rem #ccc;\n}\n", ""])
    },
    "8azz": function(t, a, e) {
        "use strict";
        var n = function() {
            var t = this.$createElement
              , a = this._self._c || t;
            return a("div", {
                staticClass: "baccarat_audio"
            }, [a("audio", {
                ref: "baccarat_audio",
                attrs: {
                    controls: "",
                    muted: !this.$store.state.baccarat.audio.open
                },
                on: {
                    timeupdate: this.updateTime
                }
            }, [a("source", {
                attrs: {
                    src: "/audio/baccarat/OGG/" + this.audio_name + ".ogg",
                    type: "audio/ogg"
                }
            }), a("source", {
                attrs: {
                    src: "/audio/baccarat/MP3/" + this.audio_name + ".mp3",
                    type: "audio/mp3"
                }
            })])])
        };
        n._withStripped = !0;
        var r = {
            render: n,
            staticRenderFns: []
        };
        a.a = r
    },
    "9J+Y": function(t, a, e) {
        var n = e("k8Ja");
        "string" == typeof n && (n = [[t.i, n, ""]]),
        n.locals && (t.exports = n.locals);
        (0,
        e("rjj0").default)("29aa774b", n, !1, {
            sourceMap: !1
        })
    },
    "9SVb": function(t, a, e) {
        "use strict";
        var n = e("KCzL")
          , r = e("rtgh")
          , i = !1;
        var s = function(t) {
            i || e("gQnr")
        }
          , o = e("VU/8")(n.a, r.a, !1, s, null, null);
        o.options.__file = "components/baccarat/sub/baccarat_audio.vue",
        a.a = o.exports
    },
    "9g89": function(t, a, e) {
        "use strict";
        var n = e("ZC0P")
          , r = e("LSwx")
          , i = !1;
        var s = function(t) {
            i || e("y7vi")
        }
          , o = e("VU/8")(n.a, r.a, !1, s, "data-v-35289c84", null);
        o.options.__file = "components/baccarat/sub/horse_race_lamp.vue",
        a.a = o.exports
    },
    "9ysO": function(t, a, e) {
        (t.exports = e("FZ+f")(!1)).push([t.i, "\n.pop_up[data-v-9ae925ce] {\n  max-width: 136px;\n  max-width: 8.5rem;\n  width: 100%;\n  height: 56px;\n  height: 3.5rem;\n  min-height: 230px;\n  border-top: 2px solid ;\n  border-bottom: 2px solid ;\n  -o-border-image: linear-gradient(to left, rgba(3, 123, 61, .2), rgba(245, 215, 2, .8), rgba(3, 123, 61, .2)) 30 0;\n     border-image: -webkit-gradient(linear, right top, left top, from(rgba(3, 123, 61, .2)), color-stop(rgba(245, 215, 2, .8)), to(rgba(3, 123, 61, .2))) 30 0;\n     border-image: linear-gradient(to left, rgba(3, 123, 61, .2), rgba(245, 215, 2, .8), rgba(3, 123, 61, .2)) 30 0;\n  background: -webkit-gradient(linear, right top, left top, from(rgba(0, 0, 0, 0)), color-stop(rgba(0, 0, 0, .4)), to(rgba(0, 0, 0, 0)));\n  background: linear-gradient(to left, rgba(0, 0, 0, 0), rgba(0, 0, 0, .4), rgba(0, 0, 0, 0));\n  position: absolute;\n  left: 50%;\n  top: 8px;\n  top: 0.5rem;\n  -webkit-transform: translate(-50%, 0);\n          transform: translate(-50%, 0);\n  z-index: 5;\n  text-align: center;\n  overflow: hidden;\n  -webkit-animation: pop-data-v-9ae925ce 1s linear;\n          animation: pop-data-v-9ae925ce 1s linear;\n  padding-top: 11.2px;\n  padding-top: 0.7rem;\n}\n.pop_up > img[data-v-9ae925ce] {\n  margin-top: 3.2px;\n  margin-top: 0.2rem;\n}\n.pop_up .title[data-v-9ae925ce] {\n  height: 6.72px;\n  height: 0.42rem;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: end;\n      -ms-flex-align: end;\n          align-items: flex-end;\n}\n.pop_up .title .chara[data-v-9ae925ce] {\n  font-size: 4.8px;\n  font-size: 0.3rem;\n  font-weight: 900;\n}\n@media screen and (max-width: 500px) {\n.pop_up > img[data-v-9ae925ce] {\n    display: block;\n    width: 20vw;\n    margin: 0 auto 0.3rem;\n}\n}\n@-webkit-keyframes pop-data-v-9ae925ce {\n0% {\n    width: 1%;\n    height: 0.04rem;\n    opacity: 0;\n}\n25% {\n    width: 1%;\n}\n50% {\n    width: 1%;\n    height: 3.5rem;\n}\n75% {\n    width: 50%;\n    height: 3.5rem;\n}\n100% {\n    opacity: 1;\n    width: 100%;\n    height: 3.5rem;\n}\n}\n@keyframes pop-data-v-9ae925ce {\n0% {\n    width: 1%;\n    height: 0.04rem;\n    opacity: 0;\n}\n25% {\n    width: 1%;\n}\n50% {\n    width: 1%;\n    height: 3.5rem;\n}\n75% {\n    width: 50%;\n    height: 3.5rem;\n}\n100% {\n    opacity: 1;\n    width: 100%;\n    height: 3.5rem;\n}\n}\n", ""])
    },
    A15a: function(t, a, e) {
        "use strict";
        a.a = {}
    },
    A7Pk: function(t, a, e) {
        var n = e("8Y2o");
        "string" == typeof n && (n = [[t.i, n, ""]]),
        n.locals && (t.exports = n.locals);
        (0,
        e("rjj0").default)("07d7ed9a", n, !1, {
            sourceMap: !1
        })
    },
    Aj58: function(t, a, e) {
        "use strict";
        var n = function() {
            var t = this
              , a = t.$createElement
              , e = t._self._c || a;
            return e("div", {
                staticClass: "accumulated-income"
            }, [e("div", {
                staticClass: "title1"
            }, [e("i", {
                staticClass: "fa fa-bar-chart"
            }), e("span", {
                staticStyle: {
                    "margin-left": "0.1rem"
                }
            }, [t._v(t._s(t.$store.state.currentLang.baccarat[24]))])]), e("div", {
                staticClass: "accumulated-income-wrap"
            }, [e("div", [e("div", [e("bets", {
                attrs: {
                    val: t.defalut_val[0]
                }
            })], 1), e("div", [t._v(t._s(t.bet_on))]), e("div", {
                staticClass: "accumulated-income-yellow",
                staticStyle: {
                    "white-space": "norwal"
                }
            }, [t._v(t._s(t.$store.state.baccarat.betTopData ? t.$store.state.baccarat.betTopData.player.subTotal : "--"))])]), e("div", [e("div", [e("bets", {
                attrs: {
                    val: t.defalut_val[1]
                }
            })], 1), e("div", [t._v(t._s(t.bet_on))]), e("div", {
                staticClass: "accumulated-income-yellow"
            }, [t._v(t._s(t.$store.state.baccarat.betTopData ? t.$store.state.baccarat.betTopData.banker.subTotal : "--"))])]), e("div", [e("div", [e("bets", {
                attrs: {
                    val: t.defalut_val[2]
                }
            })], 1), e("div", [t._v(t._s(t.bet_on))]), e("div", {
                staticClass: "accumulated-income-yellow"
            }, [t._v(t._s(t.$store.state.baccarat.betTopData ? t.$store.state.baccarat.betTopData.tie.subTotal : "--"))])]), e("div", [e("bets_other", {
                attrs: {
                    val: "bankerPair"
                }
            }), e("div", [t._v(t._s(t.bet_on))]), e("div", {
                staticClass: "accumulated-income-yellow"
            }, [t._v(t._s(t.$store.state.baccarat.betTopData ? t.$store.state.baccarat.betTopData.playerPair.subTotal : "--"))])], 1), e("div", [e("bets_other", {
                attrs: {
                    val: "playerPair"
                }
            }), e("div", [t._v(t._s(t.bet_on))]), e("div", {
                staticClass: "accumulated-income-yellow"
            }, [t._v(t._s(t.$store.state.baccarat.betTopData ? t.$store.state.baccarat.betTopData.bankerPair.subTotal : "--"))])], 1)]), e("div", {
                staticClass: "title2"
            }, [e("span", {
                staticStyle: {
                    "margin-left": "0.1rem",
                    "white-space": "nowrap"
                }
            }, [t._v(t._s(t.$store.state.currentLang.baccarat[27]) + "   ")]), e("span", {
                staticClass: "accumulated-income-yellow",
                staticStyle: {
                    "white-space": "nowrap"
                }
            }, [t._v(t._s(t.total) + " EOS")])])])
        };
        n._withStripped = !0;
        var r = {
            render: n,
            staticRenderFns: []
        };
        a.a = r
    },
    AqI7: function(t, a, e) {
        "use strict";
        var n = function() {
            var t = this.$createElement
              , a = this._self._c || t;
            return a("div", {
                staticClass: "betting_phone_progress"
            }, [a("el-progress", {
                attrs: {
                    type: "circle",
                    percentage: this.percentage,
                    color: "#dbc201"
                }
            })], 1)
        };
        n._withStripped = !0;
        var r = {
            render: n,
            staticRenderFns: []
        };
        a.a = r
    },
    Ashj: function(t, a, e) {
        "use strict";
        var n = e("ESj2")
          , r = e("j1xC")
          , i = !1;
        var s = function(t) {
            i || (e("dqvO"),
            e("tYGq"))
        }
          , o = e("VU/8")(n.a, r.a, !1, s, "data-v-653670cb", null);
        o.options.__file = "components/baccarat/sub/current-allBet-log.vue",
        a.a = o.exports
    },
    AtFV: function(t, a, e) {
        var n = e("BYlZ");
        "string" == typeof n && (n = [[t.i, n, ""]]),
        n.locals && (t.exports = n.locals);
        (0,
        e("rjj0").default)("aaa67772", n, !1, {
            sourceMap: !1
        })
    },
    Aud9: function(t, a, e) {
        "use strict";
        var n = function() {
            var t = this
              , a = t.$createElement
              , e = t._self._c || a;
            return e("div", {
                staticClass: "betting_state"
            }, [e("div", [e("div", {
                staticClass: "font-box"
            }, [t.$store.state.baccarat.gameId ? e("span", {
                staticStyle: {
                    color: "#d39469",
                    "font-size": ".6em"
                }
            }, [t._v("#" + t._s(t.$store.state.baccarat.gameId))]) : t._e(), t.$store.state.baccarat.isWait ? e("span", [t._v(t._s(t.$store.state.currentLang.baccarat[10]))]) : e("span", [t._v(t._s(t.$store.state.currentLang.baccarat[11]))])])])])
        };
        n._withStripped = !0;
        var r = {
            render: n,
            staticRenderFns: []
        };
        a.a = r
    },
    BYlZ: function(t, a, e) {
        (t.exports = e("FZ+f")(!1)).push([t.i, "\n.betting_state[data-v-3dcfca9e] {\n  width: 25.6px;\n  width: 1.6rem;\n  height: 25.6px;\n  height: 1.6rem;\n  border-radius: 50%;\n  padding: 1.28px;\n  padding: 0.08rem;\n}\n.betting_state > div[data-v-3dcfca9e] {\n  width: 100%;\n  height: 100%;\n  background: url(/img/baccarar_state.png);\n  background-repeat: no-repeat;\n  background-size: 100% 100%;\n  border-radius: 50%;\n  -webkit-box-shadow: 0 0 0.4rem #444343;\n          box-shadow: 0 0 0.4rem #444343;\n  position: relative;\n}\n.betting_state > div .font-box[data-v-3dcfca9e] {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n}\n.betting_state > div .font-box span[data-v-3dcfca9e] {\n  display: block;\n  font-size: 2.24px;\n  font-size: 0.14rem;\n  font-weight: 600;\n  color: #d69566;\n  text-shadow: 0.32px 0.32px 1.28px black;\n  text-shadow: 0.02rem 0.02rem 0.08rem black;\n  white-space: nowrap;\n}\n", ""])
    },
    CNxB: function(t, a, e) {
        "use strict";
        var n = function() {
            var t = this
              , a = t.$createElement
              , e = t._self._c || a;
            return t.val ? e("div", {
                staticClass: "bet"
            }, ["player" == t.val.result || "player" == t.val ? e("div", {
                staticClass: "xian"
            }, [t.val.isBankerPair ? e("div", {
                staticClass: "small_red"
            }) : t._e(), t.val.isPlayerPair ? e("div", {
                staticClass: "small_blue"
            }) : t._e(), t._v("\n        " + t._s(this.$store.state.lang && this.$store.state.lang.indexOf("zh") > -1 ? "閒" : "P") + "\n        ")]) : t._e(), "banker" == t.val.result || "banker" == t.val ? e("div", {
                staticClass: "zhuang"
            }, [t.val.isBankerPair ? e("div", {
                staticClass: "small_red"
            }) : t._e(), t.val.isPlayerPair ? e("div", {
                staticClass: "small_blue"
            }) : t._e(), t._v("\n        " + t._s(this.$store.state.lang && this.$store.state.lang.indexOf("zh") > -1 ? "莊" : "B") + "\n        ")]) : t._e(), "tie" == t.val.result || "tie" == t.val ? e("div", {
                staticClass: "he"
            }, [t.val.isBankerPair ? e("div", {
                staticClass: "small_red"
            }) : t._e(), t.val.isPlayerPair ? e("div", {
                staticClass: "small_blue"
            }) : t._e(), t._v("\n        " + t._s(this.$store.state.lang && this.$store.state.lang.indexOf("zh") > -1 ? "和" : "T") + "\n        ")]) : t._e()]) : t._e()
        };
        n._withStripped = !0;
        var r = {
            render: n,
            staticRenderFns: []
        };
        a.a = r
    },
    CWyh: function(t, a, e) {
        "use strict";
        var n = e("RVa5")
          , r = e("u2Fw")
          , i = !1;
        var s = function(t) {
            i || (e("xqDL"),
            e("jKPN"))
        }
          , o = e("VU/8")(n.a, r.a, !1, s, "data-v-a1acc538", null);
        o.options.__file = "components/baccarat/baccarat.vue",
        a.a = o.exports
    },
    CxNS: function(t, a, e) {
        var n = e("6bRM");
        "string" == typeof n && (n = [[t.i, n, ""]]),
        n.locals && (t.exports = n.locals);
        (0,
        e("rjj0").default)("e8a2b9bc", n, !1, {
            sourceMap: !1
        })
    },
    DUJh: function(t, a, e) {
        "use strict";
        a.a = {}
    },
    ESj2: function(t, a, e) {
        "use strict";
        var n = e("QVop")
          , r = e("GwgP");
        a.a = {
            data: function() {
                return {
                    ops: {
                        vuescroll: {
                            mode: "native",
                            scrollPanel: {
                                scrollingY: !0
                            },
                            scroller: {
                                bouncing: !1,
                                locking: !0,
                                minZoom: 1,
                                maxZoom: 1
                            }
                        },
                        bar: {
                            background: "gray",
                            hoverStyle: !0
                        }
                    }
                }
            },
            components: {
                bets: n.a,
                bets_other: r.a
            },
            computed: {
                _betRecord: function() {
                    return this.$store.state.baccarat.betRecord instanceof Array ? this.$store.state.baccarat.betRecord.slice().reverse() : []
                }
            },
            methods: {}
        }
    },
    Emif: function(t, a, e) {
        (t.exports = e("FZ+f")(!1)).push([t.i, "\n.top-punter[data-v-7d1f8640] {\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, .3);\n  border: 1px solid rgba(245, 240, 240, .4);\n  overflow: hidden;\n  min-height: 200px;\n}\n.top-punter .title1[data-v-7d1f8640],\n.top-punter .title2[data-v-7d1f8640] {\n  padding: 3.12% 0;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  border-bottom: 1px solid rgba(245, 240, 240, .4);\n  background: rgba(0, 0, 0, .4);\n}\n.top-punter .title2[data-v-7d1f8640] {\n  border-top: 1px solid rgba(245, 240, 240, .4);\n}\n.top-punter .current_allBet_yellow[data-v-7d1f8640] {\n  color: #fadb00;\n  font-weight: 600;\n  text-shadow: 0 0 3px #fadb00;\n  white-space: nowrap;\n}\n.top-punter .current_allBet_wrap[data-v-7d1f8640] {\n  width: 100%;\n  padding: 1% 0;\n  height: 72%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -ms-flex-pack: distribute;\n      justify-content: space-around;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  font-size: 12px;\n}\n.top-punter .current_allBet_wrap > div[data-v-7d1f8640] {\n  padding: 1.6px 2.4px;\n  padding: 0.1rem 0.15rem;\n  width: 100%;\n  height: 16.8%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -ms-flex-line-pack: start;\n      align-content: flex-start;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n.top-punter .current_allBet_wrap > div > div[data-v-7d1f8640]:last-child {\n  padding-left: 1.6px;\n  padding-left: 0.1rem;\n}\n.top-punter .current_allBet_wrap > div > div[data-v-7d1f8640]:last-child {\n  margin-left: 6%;\n}\n.top-punter .current_allBet_wrap > div > div:last-child p[data-v-7d1f8640] {\n  margin: 0;\n  white-space: nowrap;\n}\n.top-punter .current_allBet_wrap .diagonal[data-v-7d1f8640] {\n  color: white;\n  font-size: 2.4px;\n  font-size: 0.15rem;\n  vertical-align: middle;\n}\n.top-punter .current_allBet_wrap .kuohao[data-v-7d1f8640] {\n  font-size: 1.92px;\n  font-size: 0.12rem;\n}\n", ""])
    },
    EstF: function(t, a, e) {
        var n = e("yDwg");
        "string" == typeof n && (n = [[t.i, n, ""]]),
        n.locals && (t.exports = n.locals);
        (0,
        e("rjj0").default)("7f6d0b6c", n, !1, {
            sourceMap: !1
        })
    },
    "F+3C": function(t, a, e) {
        "use strict";
        a.a = {
            data: function() {
                return {}
            },
            props: ["item"],
            computed: {
                showData: function() {
                    var t = {};
                    return this.item && this.item.remain && this.item.min ? (t.remain = this.item.remain.split(" ")[0],
                    t.remainStr = t.remain - this.item.betPayout,
                    t.prog = Math.floor(this.item.betPayout / t.remain * 100),
                    isNaN(t.prog) && (console.log("nan:", t.prog),
                    t.prog = 0),
                    t) : null
                }
            },
            methods: {
                stopPropaga: function(t) {
                    t.stopPropagation()
                }
            },
            beforeMount: function() {},
            beforeDestroy: function() {}
        }
    },
    G6QZ: function(t, a, e) {
        (t.exports = e("FZ+f")(!1)).push([t.i, "\n.bet_result_table .__vuescroll {\r\n  margin: 0 7px;\n}\n.bet_result_table .__vuescroll .__panel.__slide {\r\n  min-height: 0;\r\n  height: 100%;\n}\r\n", ""])
    },
    GEJH: function(t, a, e) {
        (t.exports = e("FZ+f")(!1)).push([t.i, '\n.game-comp-baccarat-bet[data-v-a1acc538] {\n  background-color: #161a35;\n  min-height: 500px;\n  padding-bottom: 50px;\n  color: #fff;\n  max-width: 3380px;\n  margin: 0 auto;\n  position: relative;\n  overflow: hidden;\n}\n.game-comp-baccarat-bet p[data-v-a1acc538] {\n  margin: 0 0 5px;\n}\n.game-comp-baccarat-bet .game-view[data-v-a1acc538] {\n  width: 100%;\n  position: relative;\n  overflow: hidden;\n  background-color: #140b04;\n}\n.game-comp-baccarat-bet .roll-log[data-v-a1acc538] {\n  background: url(/img/baccarat/bg_clip.jpg);\n}\n.game-comp-baccarat-bet .table-on-pc[data-v-a1acc538] {\n  height: 0;\n  width: 100%;\n  position: absolute;\n  left: 0;\n  top: 0;\n  z-index: 3;\n}\n.game-comp-baccarat-bet .table-on-pc .left-section[data-v-a1acc538],\n.game-comp-baccarat-bet .table-on-pc .right-section[data-v-a1acc538] {\n  width: 0;\n  height: 100vh;\n  position: absolute;\n  top: 0;\n}\n.game-comp-baccarat-bet .table-on-pc .left-section div.small-btn[data-v-a1acc538],\n.game-comp-baccarat-bet .table-on-pc .right-section div.small-btn[data-v-a1acc538] {\n  display: none;\n  position: absolute;\n  top: 0;\n  text-align: center;\n  background-color: rgba(4, 96, 49, .6);\n  min-height: 50px;\n  font-size: 14px;\n  padding: 8px 0px;\n  margin-bottom: 1.76px;\n  margin-bottom: 0.11rem;\n  width: 40px;\n  line-height: 40px;\n  cursor: pointer;\n  border-radius: 1px;\n  -webkit-writing-mode: tb-rl;\n      -ms-writing-mode: tb-rl;\n          writing-mode: tb-rl;\n}\n.game-comp-baccarat-bet .table-on-pc .left-section div.small-btn.active[data-v-a1acc538],\n.game-comp-baccarat-bet .table-on-pc .right-section div.small-btn.active[data-v-a1acc538] {\n  background: #d8892d;\n}\n.game-comp-baccarat-bet .table-on-pc .left-section .table-list[data-v-a1acc538],\n.game-comp-baccarat-bet .table-on-pc .right-section .table-list[data-v-a1acc538] {\n  height: 250px;\n  width: 250px;\n  -webkit-transition: all 0.2s;\n  transition: all 0.2s;\n  position: relative;\n  margin-top: 10px;\n}\n.game-comp-baccarat-bet .table-on-pc .left-section[data-v-a1acc538] {\n  left: 10px;\n  position: relative;\n}\n.game-comp-baccarat-bet .table-on-pc .left-section div.small-btn[data-v-a1acc538] {\n  right: 0;\n  top: 0;\n  -webkit-transform: translate(100%, 0);\n          transform: translate(100%, 0);\n}\n.game-comp-baccarat-bet .table-on-pc .left-section .record[data-v-a1acc538] {\n  width: 270px;\n  margin-bottom: 2.56px;\n  margin-bottom: 0.16rem;\n}\n.game-comp-baccarat-bet .table-on-pc .left-section .record.pc-small[data-v-a1acc538] {\n  width: 0;\n}\n.game-comp-baccarat-bet .table-on-pc .left-section .record.pc-small .table-item[data-v-a1acc538] {\n  opacity: 0;\n  -webkit-transition: all 0.2s;\n  transition: all 0.2s;\n}\n.game-comp-baccarat-bet .table-on-pc .left-section .record.pc-small div.small-btn[data-v-a1acc538] {\n  display: block;\n}\n.game-comp-baccarat-bet .table-on-pc .left-section .record.pc-small.active[data-v-a1acc538] {\n  width: 250px;\n}\n.game-comp-baccarat-bet .table-on-pc .left-section .record.pc-small.active .table-item[data-v-a1acc538] {\n  opacity: 1;\n}\n.game-comp-baccarat-bet .table-on-pc .left-section .t1[data-v-a1acc538] {\n  height: 272px;\n  max-width: 710px;\n}\n.game-comp-baccarat-bet .table-on-pc .left-section .t1.pc-small[data-v-a1acc538] {\n  width: 0 !important;\n}\n.game-comp-baccarat-bet .table-on-pc .left-section .t1.pc-small .table-item[data-v-a1acc538] {\n  opacity: 0;\n  -webkit-transition: all 0.2s;\n  transition: all 0.2s;\n}\n.game-comp-baccarat-bet .table-on-pc .left-section .t1.pc-small div.small-btn[data-v-a1acc538] {\n  display: block;\n}\n.game-comp-baccarat-bet .table-on-pc .left-section .t1.pc-small.active[data-v-a1acc538] {\n  width: 320px !important;\n}\n.game-comp-baccarat-bet .table-on-pc .left-section .t1.pc-small.active .table-item[data-v-a1acc538] {\n  opacity: 1;\n}\n.game-comp-baccarat-bet .table-on-pc .right-section[data-v-a1acc538] {\n  right: 10px;\n}\n.game-comp-baccarat-bet .table-on-pc .right-section .table-list[data-v-a1acc538] {\n  float: right;\n}\n.game-comp-baccarat-bet .table-on-pc .right-section .table-list[data-v-a1acc538]:before,\n.game-comp-baccarat-bet .table-on-pc .right-section .table-list[data-v-a1acc538]:after {\n  content: "";\n  height: 0;\n  display: block;\n  visibility: hidden;\n  clear: both;\n}\n.game-comp-baccarat-bet .table-on-pc .right-section div.small-btn[data-v-a1acc538] {\n  left: 0;\n  top: 0;\n  -webkit-transform: translate(-100%, 0);\n          transform: translate(-100%, 0);\n}\n.game-comp-baccarat-bet .table-on-pc .right-section .statis[data-v-a1acc538] {\n  height: 272px;\n  width: 280px;\n}\n.game-comp-baccarat-bet .table-on-pc .right-section .statis.pc-small[data-v-a1acc538] {\n  width: 0;\n}\n.game-comp-baccarat-bet .table-on-pc .right-section .statis.pc-small .table-item[data-v-a1acc538] {\n  opacity: 0;\n  -webkit-transition: all 0.2s;\n  transition: all 0.2s;\n}\n.game-comp-baccarat-bet .table-on-pc .right-section .statis.pc-small div.small-btn[data-v-a1acc538] {\n  display: block;\n}\n.game-comp-baccarat-bet .table-on-pc .right-section .statis.pc-small.active[data-v-a1acc538] {\n  width: 280px;\n}\n.game-comp-baccarat-bet .table-on-pc .right-section .statis.pc-small.active .table-item[data-v-a1acc538] {\n  opacity: 1;\n}\n.game-comp-baccarat-bet .table-on-pc .right-section .chat-list[data-v-a1acc538] {\n  width: 297px;\n  position: absolute;\n  right: -10px;\n  top: 5vh;\n  max-height: 90vh;\n  -webkit-transition: all 0.3s;\n  transition: all 0.3s;\n}\n.game-comp-baccarat-bet .table-on-pc .right-section .chat-list .aside-btn[data-v-a1acc538] {\n  width: 18px;\n  height: 105px;\n  border-radius: 18px 0 0 18px;\n  background-color: #171f36;\n  -webkit-box-shadow: 2px 0 12px #5ea8f3 inset;\n          box-shadow: 2px 0 12px #5ea8f3 inset;\n  color: #61adf9;\n  line-height: 105px;\n  text-align: center;\n  font-size: 14px;\n  position: absolute;\n  top: 50%;\n  left: 0;\n  -webkit-transform: translate(-100%, -50%);\n          transform: translate(-100%, -50%);\n}\n.game-comp-baccarat-bet .table-on-mobile.only-mobile .bet-tabs[data-v-a1acc538] {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-pack: distribute;\n      justify-content: space-around;\n  padding: 2.88px 0;\n  padding: 0.18rem 0;\n  margin-bottom: -0.16px;\n  margin-bottom: -0.01rem;\n  background-color: #0c3b59;\n}\n.game-comp-baccarat-bet .table-on-mobile.only-mobile .bet-tabs > li[data-v-a1acc538] {\n  height: 40px;\n  padding: 0.32px 1.6px;\n  padding: 0.02rem 0.1rem;\n  margin-left: 2.4px;\n  margin-left: 0.15rem;\n  text-align: center;\n  font-size: 14px;\n}\n.game-comp-baccarat-bet .table-on-mobile.only-mobile .bet-tabs > li.active[data-v-a1acc538] {\n  color: #e2c103;\n  border-bottom: 0.48px solid #e2c103;\n  border-bottom: 0.03rem solid #e2c103;\n}\n.game-comp-baccarat-bet .table-on-mobile.only-mobile .table-list[data-v-a1acc538] {\n  height: 350px;\n  -webkit-transition: all 0.3s;\n  transition: all 0.3s;\n}\n.game-comp-baccarat-bet .table-on-mobile.only-mobile .table-list.t1[data-v-a1acc538] {\n  height: 272px;\n}\n.game-comp-baccarat-bet .table-on-mobile.only-mobile .table-list.statis[data-v-a1acc538] {\n  height: 270px;\n}\n.game-comp-baccarat-bet .table-on-mobile.only-pc-small[data-v-a1acc538] {\n  position: absolute;\n  right: 10px;\n  top: 15vh;\n  z-index: 3;\n  padding-right: 45px;\n}\n.game-comp-baccarat-bet .table-on-mobile.only-pc-small .bet-tabs[data-v-a1acc538] {\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n.game-comp-baccarat-bet .table-on-mobile.only-pc-small .bet-tabs > li[data-v-a1acc538] {\n  background-color: rgba(4, 96, 49, .6);\n  min-height: 50px;\n  font-size: 14px;\n  padding: 8px 0px;\n  margin-bottom: 1.76px;\n  margin-bottom: 0.11rem;\n  width: 40px;\n  line-height: 40px;\n  cursor: pointer;\n  border-radius: 1px;\n  -webkit-writing-mode: tb-rl;\n      -ms-writing-mode: tb-rl;\n          writing-mode: tb-rl;\n}\n.game-comp-baccarat-bet .table-on-mobile.only-pc-small .bet-tabs > li br[data-v-a1acc538] {\n  display: none;\n}\n.game-comp-baccarat-bet .table-on-mobile.only-pc-small .bet-tabs > li.active[data-v-a1acc538] {\n  background: #d8892d;\n}\n.game-comp-baccarat-bet .table-on-mobile.only-pc-small .table-list[data-v-a1acc538] {\n  width: 300px;\n  background-color: rgba(0, 0, 0, .77);\n}\n.game-comp-baccarat-bet .table-on-mobile.only-pc-small .table-list.t1[data-v-a1acc538] {\n  width: 80vw;\n  height: 272px;\n  max-width: 510px;\n}\n.game-comp-baccarat-bet .table-on-mobile.only-pc-small .table-list.record[data-v-a1acc538] {\n  height: 70vh;\n  max-height: 510px;\n}\n.game-comp-baccarat-bet .table-on-mobile.only-pc-small .chat-view[data-v-a1acc538] {\n  display: none;\n}\n.game-comp-baccarat-bet .bet-top-bar[data-v-a1acc538] {\n  position: absolute;\n  top: -0.32px;\n  top: -0.02rem;\n  left: 50%;\n  height: 16px;\n  height: 1rem;\n  z-index: 1;\n}\n.game-comp-baccarat-bet .bet-top-bar .bet-clock-progress[data-v-a1acc538] {\n  position: absolute;\n  top: 3.2px;\n  top: 0.2rem;\n  left: 50%;\n  -webkit-transform: translate(-5.9rem, 0);\n          transform: translate(-5.9rem, 0);\n}\n.game-comp-baccarat-bet .bet-top-bar .bet-clock-progress .progress-item[data-v-a1acc538] {\n  margin-top: 2px;\n}\n.game-comp-baccarat-bet .bet-top-bar .bet-state[data-v-a1acc538] {\n  position: absolute;\n  top: 3.2px;\n  top: 0.2rem;\n  left: 50%;\n  -webkit-transform: translate(3.88rem, 0);\n          transform: translate(3.88rem, 0);\n}\n.game-comp-baccarat-bet .bet-top-bar .audio-ctrl[data-v-a1acc538] {\n  position: absolute;\n  top: 90%;\n  left: 96px;\n  left: 6rem;\n  -webkit-transform: translate(0, -50%);\n          transform: translate(0, -50%);\n}\n.game-comp-baccarat-bet .bet-top-bar.at-top[data-v-a1acc538] {\n  width: 100%;\n  height: 23.2px;\n  height: 1.45rem;\n  position: relative;\n  top: 0;\n  left: 0;\n  border-bottom: 0.32px solid #153b5d;\n  border-bottom: 0.02rem solid #153b5d;\n  background: #254f7b;\n}\n.game-comp-baccarat-bet .bet-top-bar.at-top .bet-clock-progress[data-v-a1acc538] {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n}\n.game-comp-baccarat-bet .bet-top-bar.at-top .bet-clock-progress .progress-item[data-v-a1acc538] {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(105%, -47%);\n          transform: translate(105%, -47%);\n}\n.game-comp-baccarat-bet .bet-top-bar.at-top .bet-state[data-v-a1acc538] {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-200%, -50%);\n          transform: translate(-200%, -50%);\n}\n.game-comp-baccarat-bet .bet-top-bar.at-top .betting_state[data-v-a1acc538] {\n  width: 21.44px;\n  width: 1.34rem;\n  height: 21.44px;\n  height: 1.34rem;\n}\n.game-comp-baccarat-bet .bet-top-bar.at-top .audio-ctrl[data-v-a1acc538] {\n  position: absolute;\n  top: 50%;\n  left: 82%;\n  -webkit-transform: translate(0, -50%);\n          transform: translate(0, -50%);\n}\n.game-comp-baccarat-bet .bet-top-bar.at-top.small-mobile[data-v-a1acc538] {\n  background: #204f7c;\n}\n@media screen and (max-width: 1024px) {\n.game-comp-baccarat-bet .current-allBet-log[data-v-a1acc538] {\n    font-size: 12px;\n}\n}\n@media screen and (max-width: 0px) {\n.game-comp-baccarat-bet .current-allBet-log[data-v-a1acc538] {\n    display: none;\n}\n.game-comp-baccarat-bet .current-bet-log[data-v-a1acc538] {\n    top: 4rem;\n    width: 2.1rem;\n    left: 0;\n    display: none;\n}\n.game-comp-baccarat-bet .game-view[data-v-a1acc538] {\n    width: 208%;\n}\n.game-comp-baccarat-bet .bet-table[data-v-a1acc538] {\n    margin-top: 0rem;\n    position: relative;\n}\n}\n@media screen and (max-width: 470px) {\n.game-comp-baccarat-bet .clock-time[data-v-a1acc538] {\n    position: absolute;\n    left: 50% !important;\n    -webkit-transform: translateX(-50%) !important;\n            transform: translateX(-50%) !important;\n    top: 8% !important;\n}\n.game-comp-baccarat-bet .clock-time .clock[data-v-a1acc538] {\n    padding-top: 0.06rem !important;\n}\n.game-comp-baccarat-bet .clock-time > div[data-v-a1acc538] {\n    padding-top: 0px;\n    padding-left: 0rem;\n}\n.game-comp-baccarat-bet .clock-time > div p[data-v-a1acc538] {\n    font-size: 10px !important;\n}\n.game-comp-baccarat-bet .clock-time > div h3[data-v-a1acc538] {\n    font-size: 12px;\n}\n.game-comp-baccarat-bet .game-status[data-v-a1acc538] {\n    font-size: 10px !important;\n    top: 86%;\n    -webkit-transform: translateY(-50%);\n            transform: translateY(-50%);\n}\n.game-comp-baccarat-bet .usedpct[data-v-a1acc538] {\n    width: 100%;\n    bottom: 0;\n    top: 60% !important;\n}\n}\n', ""])
    },
    Gu7T: function(t, a, e) {
        "use strict";
        a.__esModule = !0;
        var n = function(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }(e("c/Tr"));
        a.default = function(t) {
            if (Array.isArray(t)) {
                for (var a = 0, e = Array(t.length); a < t.length; a++)
                    e[a] = t[a];
                return e
            }
            return (0,
            n.default)(t)
        }
    },
    GwgP: function(t, a, e) {
        "use strict";
        var n = e("0T/v")
          , r = e("duPy")
          , i = !1;
        var s = function(t) {
            i || e("uqkm")
        }
          , o = e("VU/8")(n.a, r.a, !1, s, "data-v-61b9b763", null);
        o.options.__file = "components/baccarat/sub/bets_other.vue",
        a.a = o.exports
    },
    HbxW: function(t, a, e) {
        "use strict";
        a.a = {
            data: function() {
                return {
                    open: !1
                }
            },
            watch: {
                open: function() {
                    localStorage.setItem("baccarat_open", this.open ? "true" : ""),
                    this.$store.commit("setBaccarat", {
                        audio: {
                            open: this.open
                        }
                    })
                }
            },
            methods: {
                auto_checkout: function() {
                    this.open = !this.open
                }
            },
            created: function() {
                localStorage.getItem("baccarat_open") && (this.open = !0)
            }
        }
    },
    IKhs: function(t, a, e) {
        var n = e("ZNHY");
        "string" == typeof n && (n = [[t.i, n, ""]]),
        n.locals && (t.exports = n.locals);
        (0,
        e("rjj0").default)("bb110cea", n, !1, {
            sourceMap: !1
        })
    },
    J9LY: function(t, a, e) {
        "use strict";
        var n = e("agh4")
          , r = e("ppPR")
          , i = !1;
        var s = function(t) {
            i || (e("7G1+"),
            e("wNwr"))
        }
          , o = e("VU/8")(n.a, r.a, !1, s, "data-v-5ebb1538", null);
        o.options.__file = "components/baccarat/sub/bet_result_table2.vue",
        a.a = o.exports
    },
    JmBG: function(t, a, e) {
        (t.exports = e("FZ+f")(!1)).push([t.i, "\n.baccarat_bet.is-mobile-screen .baccart_others .select_bets .chara_btn .chara ._chara span {\r\n    /* color: red !important; */\r\n    font-size: 9px;\n}\n.baccarat_bet.is-mobile-screen .bet_wrap .select_bets .chara_btn .chara ._chara span {\r\n    /* color: red !important; */\r\n    font-size: 9px !important;\n}\n.baccarat_bet.is-mobile-screen .bet_wrap .select_bets .chara_btn .chara ._chara {\r\n    background-color: rgba(0, 0, 0, .6);\n}\n.baccarat_bet.is-mobile-screen .select_bet .select_bet_wrap .select_img > div > span {\r\n    font-size: 11px;\r\n    text-shadow: 0 0 1px #111;\r\n    background-color: rgba(255, 255, 255, .3);\n}\n.baccarat_bet.is-mobile-screen .select_bet .select_bet_wrap .select_total .chara {\r\n    font-size: 14px;\n}\r\n", ""])
    },
    KCzL: function(t, a, e) {
        "use strict";
        a.a = {
            data: function() {
                return {
                    init: !1,
                    isIOS: !1,
                    src: {
                        mp3: "/audio/baccarat/MP3/" + this.fileName + ".mp3",
                        ogg: "/audio/baccarat/OGG/" + this.fileName + ".ogg"
                    }
                }
            },
            props: ["fileName", "play", "loop"],
            watch: {
                play: function() {
                    this.$refs.audioTag && this.$store.state.baccarat.audio.open && (this.play ? (this.loop && this.$refs.audioTag.load(),
                    this.$refs.audioTag.play()) : this.$refs.audioTag.pause())
                },
                "$store.state.baccarat.audio.open": function() {
                    this.$store.state.baccarat.audio.open || this.$refs.audioTag && this.$refs.audioTag.pause()
                }
            },
            computed: {},
            methods: {},
            mounted: function() {
                var t = this;
                this.$refs.audioTag && this.$refs.audioTag.load(),
                this.isIOS && document.addEventListener("touchstart", function() {
                    t.$refs.audioTag && (t.init || (t.init = !0,
                    t.$refs.audioTag.play(),
                    setTimeout(function() {
                        t.$refs.audioTag.pause()
                    }, 2)))
                })
            },
            created: function() {
                this.isIOS = !(!this.$browser || !this.$browser.version.ios)
            }
        }
    },
    Kh5d: function(t, a, e) {
        var n = e("sB3e")
          , r = e("PzxK");
        e("uqUo")("getPrototypeOf", function() {
            return function(t) {
                return r(n(t))
            }
        })
    },
    Kv33: function(t, a, e) {
        "use strict";
        var n = e("Gu7T")
          , r = e.n(n)
          , i = e("2qup");
        a.a = {
            data: function() {
                return {
                    player: [],
                    tie: [],
                    banker: [],
                    total: 0,
                    bg_photo: [],
                    bets: [],
                    de_bets: this.$config.baccarat.array_gather,
                    an: !1,
                    ani: "",
                    btn_style: "",
                    length: "",
                    player_val_: [],
                    img_location_array: [],
                    load: !0,
                    opc: "",
                    result_: "",
                    ania: ""
                }
            },
            props: ["player_val", "type", "count", "currencyType", "betSuccess", "betSuccessAll", "loading", "payout", "betLimitMin", "maxBet", "typeText"],
            components: {
                audios: i.a
            },
            watch: {
                "$store.state.baccarat.betLimitMin": {
                    handler: function(t, a) {
                        for (var e = 0; e < this.de_bets.length; e++)
                            if (t == this.de_bets[e]) {
                                for (var n = [], r = e; r < e + this.$config.baccarat.array_gather.length; r++)
                                    n.push(this.de_bets[r]);
                                n.push(1e8),
                                this.bets = n
                            }
                    },
                    immediate: !0,
                    deep: !0
                },
                payout: function() {},
                player: function(t) {
                    var a = 0;
                    this.bg_photo = [];
                    for (var e = 0; e < this.player.length; e++)
                        a += this.player[e];
                    if (this.img_location_array.push(this.randomOffset()),
                    this.$emit("sendCurrentCount", {
                        key: this.type,
                        value: Number(a.toFixed(1))
                    }),
                    this.algorithm(Number(a.toFixed(1))))
                        for (var n = 0; n < this.algorithm(a).length; n++)
                            for (var r = 0; r < this.bets.length; r++)
                                this.algorithm(Number(a.toFixed(1)))[n] == this.bets[r] && this.bg_photo.push(this.bets[r])
                },
                player_val: {
                    handler: function(t, a) {
                        t.length !== this.player_val_.length && (this.player_val_ = $.extend(!0, [], t),
                        this.select_bet(this.player_val_[this.player_val_.length - 1], this.type, this.count))
                    },
                    immediate: !0,
                    deep: !0
                },
                betSuccess: function(t) {
                    this.betSuccess_(t)
                },
                total: function() {
                    this.total <= 0 && this.clear_all()
                },
                loading: function(t) {
                    this.loading_(t)
                },
                betSuccessAll: function(t) {
                    this.betSuccessAll_(t)
                }
            },
            computed: {
                _unit: function() {
                    return this.currencyType
                }
            },
            created: function() {},
            methods: {
                loading_: function(t) {
                    this.opc = t ? " opc1" : " opc2"
                },
                betSuccessAll_: function(t) {
                    var a = this;
                    "win" == t ? (this.$nextTick(function() {
                        a.$refs.targets && (a.$refs.targets.style.display = "block",
                        a.ani = " " + a.type)
                    }),
                    setTimeout(function() {
                        a.result_ = " " + a.type + "A"
                    }, 2e3),
                    setTimeout(function() {
                        a.$refs.result_dis && (a.$refs.result_dis.style.display = "none")
                    }, 3e3)) : "lose" == t ? (this.$nextTick(function() {
                        a.result_ = " " + a.type + "F"
                    }),
                    setTimeout(function() {
                        a.$refs.result_dis && (a.$refs.result_dis.style.display = "none")
                    }, 800)) : "tie" == t && (this.$nextTick(function() {
                        a.result_ = " " + a.type + "T"
                    }),
                    setTimeout(function() {
                        a.$refs.result_dis && (a.$refs.result_dis.style.display = "none")
                    }, 800))
                },
                betSuccess_: function(t) {
                    t && this.$refs.btn && (this.$refs.btn.style.display = "none")
                },
                send_bet: function() {
                    this.loading || this.$emit("clickBet")
                },
                clear_all: function() {
                    this.loading || this.$emit("clear", "all")
                },
                emit_count: function() {
                    this.loading || this.$emit("children_count", -1)
                },
                select_bet: function(t, a, e) {
                    e > 0 ? this.player.push(t) : this.player.pop(t),
                    this.compute()
                },
                compute: function() {
                    for (var t = this.player.concat(this.tie, this.banker), a = null, e = 0; e < t.length; e++)
                        a += 10 * t[e];
                    this.total = a / 10
                },
                algorithm: function(t) {
                    var a = []
                      , e = ""
                      , n = "";
                    if (t) {
                        for (var i = 0; i < this.bets.length; i++)
                            if (this.bets[i] <= t && t < this.bets[i + 1] && this.bets[i + 1]) {
                                if (0 != Number((t % this.bets[i]).toFixed(1))) {
                                    e = Number((t % this.bets[i]).toFixed(1)),
                                    n = (Number(t.toFixed(1)) - e) / this.bets[i];
                                    for (var s = 0; s < n; s++)
                                        a.push(this.bets[i]);
                                    return 0 != e && a.push.apply(a, r()(this.algorithm(e))),
                                    a
                                }
                                for (var o = 0; o < t / this.bets[i]; o++)
                                    a.push(this.bets[i]);
                                return a
                            }
                    } else
                        this.total = 0
                },
                algorithm_unit: function(t) {},
                repeat: function(t, a) {
                    for (var e = [], n = 0; n < t; n++)
                        e.push(a[n]);
                    return e
                },
                randomOffset: function() {
                    return (Math.floor(7 * Math.random() + 2) % 2 == 0 ? "-" : "") + Math.floor(7 * Math.random() + 2) / 100
                }
            },
            mounted: function() {
                var t = this;
                this.loading_(this.loading),
                this.betSuccessAll_(this.betSuccessAll),
                this.betSuccess_(this.betSuccess),
                setTimeout(function() {
                    t.an = !0
                }, 0)
            }
        }
    },
    LSwx: function(t, a, e) {
        "use strict";
        var n = function() {
            var t = this
              , a = t.$createElement
              , e = t._self._c || a;
            return e("div", {
                staticClass: "horse_race_lamp"
            }, [e("div", {
                ref: "move_obj",
                staticClass: "move_obj"
            }, t._l(t.horse_race_running, function(a, n) {
                return e("div", {
                    key: n,
                    staticClass: "aa"
                }, [e("div", ["banker" == a.item || "player" == a.item || "tie" == a.item ? e("bets", {
                    attrs: {
                        val: a.item
                    }
                }) : t._e(), e("bets_other", {
                    attrs: {
                        val: a.item
                    }
                })], 1), e("div", {
                    staticStyle: {
                        "white-space": "nowrap"
                    }
                }, [t._v(t._s(a.username))]), e("div", [t._v(t._s(t.$store.state.currentLang.baccarat[9]))]), e("div", {
                    staticClass: "current-allBet_yellow"
                }, [t._v(t._s(a.betAsset))])])
            }))])
        };
        n._withStripped = !0;
        var r = {
            render: n,
            staticRenderFns: []
        };
        a.a = r
    },
    LUgZ: function(t, a, e) {
        "use strict";
        var n = e("A15a")
          , r = e("j9Fs")
          , i = !1;
        var s = function(t) {
            i || e("h0p6")
        }
          , o = e("VU/8")(n.a, r.a, !1, s, "data-v-2ff53d0a", null);
        o.options.__file = "components/baccarat/sub/rediex.vue",
        a.a = o.exports
    },
    LUvl: function(t, a, e) {
        (t.exports = e("FZ+f")(!1)).push([t.i, "\n.bet_result_table2 .__vuescroll {\r\n  /* margin: 0 7px; */\r\n  height: 85% !important;\n}\n.bet_result_table2 .__vuescroll .__panel.__slide {\r\n  min-height: 0;\r\n  height: 100%;\n}\r\n", ""])
    },
    Lapo: function(t, a, e) {
        (t.exports = e("FZ+f")(!1)).push([t.i, "\n.baccart_others .select_bets[data-v-0308e5a8] {\n  margin: 0 auto;\n  width: 8.64px;\n  width: 0.54rem;\n  min-width: 36px;\n  min-height: 36px;\n  height: 8.64px;\n  height: 0.54rem;\n  position: relative;\n}\n.baccart_others .select_bets .img_wrap[data-v-0308e5a8] {\n  position: relative;\n  width: 8.64px;\n  width: 0.54rem;\n  min-width: 100%;\n  height: 8.64px;\n  height: 0.54rem;\n  min-height: 100%;\n}\n.baccart_others .select_bets .img_wrap > img[data-v-0308e5a8] {\n  width: 100%;\n  position: absolute;\n  left: 0;\n  bottom: 0;\n}\n.baccart_others .select_bets .chara_btn[data-v-0308e5a8] {\n  min-height: 16px;\n  height: 1.92px;\n  height: 0.12rem;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  position: absolute;\n  bottom: 0;\n  left: 50%;\n  -webkit-transform: translateX(-50%);\n          transform: translateX(-50%);\n  background: -webkit-gradient(linear, right top, left top, from(rgba(0, 0, 0, .1)), color-stop(rgba(0, 0, 0, .6)), to(rgba(0, 0, 0, .1)));\n  background: linear-gradient(to left, rgba(0, 0, 0, .1), rgba(0, 0, 0, .6), rgba(0, 0, 0, .1));\n}\n.baccart_others .select_bets .chara_btn .chara[data-v-0308e5a8] {\n  min-width: 100%;\n  text-align: center;\n}\n.baccart_others .select_bets .chara_btn .chara ._chara[data-v-0308e5a8] {\n  height: 100%;\n  min-height: 14px;\n  color: white;\n  font-size: 1.92px;\n  font-size: 0.12rem;\n}\n.baccart_others .select_bets .chara_btn .chara ._chara span[data-v-0308e5a8] {\n  white-space: nowrap;\n  text-shadow: 0 0 1.28px #f4d903;\n  text-shadow: 0 0 0.08rem #f4d903;\n}\n.baccart_others .select_bets .pop_up_num[data-v-0308e5a8] {\n  font-size: 1.92px;\n  font-size: 0.12rem;\n  width: 12.48px;\n  width: 0.78rem;\n  min-width: 40px;\n  min-height: 16px;\n  height: 1.92px;\n  height: 0.12rem;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-transform: translateX(-25%);\n          transform: translateX(-25%);\n  color: #f5d702;\n  white-space: nowrap;\n}\n.baccart_others.win .select_bets[data-v-0308e5a8],\n.baccart_others.lose .select_bets[data-v-0308e5a8] {\n  -webkit-transition: all 5s;\n  transition: all 5s;\n  opacity: 0;\n}\n.baccart_others.win .select_bets > .pop_up_num[data-v-0308e5a8],\n.baccart_others.lose .select_bets > .pop_up_num[data-v-0308e5a8] {\n  color: #9ae22e;\n  -webkit-transition: all 4s;\n  transition: all 4s;\n  position: relative;\n  -webkit-transform: translateY(-300%) scale(2);\n          transform: translateY(-300%) scale(2);\n  font-size: 1.2em;\n  opacity: 0;\n}\n.baccart_others.lose[data-v-0308e5a8] {\n  -webkit-transition: all 4s;\n  transition: all 4s;\n  opacity: 0;\n}\n.baccart_others.lose .select_bets > .pop_up_num[data-v-0308e5a8] {\n  color: red;\n  -webkit-transform: translateY(300%) scale(0.5);\n          transform: translateY(300%) scale(0.5);\n}\n", ""])
    },
    Lsg3: function(t, a, e) {
        var n = e("9ysO");
        "string" == typeof n && (n = [[t.i, n, ""]]),
        n.locals && (t.exports = n.locals);
        (0,
        e("rjj0").default)("783d7e3a", n, !1, {
            sourceMap: !1
        })
    },
    Lxox: function(t, a, e) {
        var n = e("JmBG");
        "string" == typeof n && (n = [[t.i, n, ""]]),
        n.locals && (t.exports = n.locals);
        (0,
        e("rjj0").default)("1e537102", n, !1, {
            sourceMap: !1
        })
    },
    MXKp: function(t, a, e) {
        (t.exports = e("FZ+f")(!1)).push([t.i, "", ""])
    },
    MZUK: function(t, a, e) {
        "use strict";
        var n = e("+biz")
          , r = e("5toN")
          , i = !1;
        var s = function(t) {
            i || (e("9J+Y"),
            e("3P9G"))
        }
          , o = e("VU/8")(n.a, r.a, !1, s, "data-v-c0167d2c", null);
        o.options.__file = "components/baccarat/sub/bet_result_table.vue",
        a.a = o.exports
    },
    N71J: function(t, a, e) {
        "use strict";
        var n = e("9SVb");
        a.a = {
            data: function() {
                return {
                    show: !1,
                    timer: null,
                    audio: {
                        poker: {
                            play: !1,
                            file: "Card_Open_New_UI_01"
                        }
                    }
                }
            },
            components: {
                audioComp: n.a
            },
            props: ["poker", "delay", "index"],
            watch: {
                poker: "add"
            },
            computed: {},
            methods: {
                add: function() {
                    var t = this
                      , a = 0;
                    this.poker && (void 0 !== this.delay && (a = this.delay),
                    this.timer = setTimeout(function() {
                        t.show = !0,
                        setTimeout(function() {
                            var a = t.$refs.items.children[0];
                            a.style.transformStyle = "preserve-3d",
                            a.style.animationDuration = ".3s",
                            a.style.transition = "all .4s",
                            a.style.top = "-0px",
                            t.audio.poker.play = !0,
                            setTimeout(function() {
                                a.style.transition = "all .6s",
                                a.style.transform = "rotateY(0deg)",
                                setTimeout(function() {
                                    a.src = "/img/poker/" + t.poker + ".jpg",
                                    2 === t.index && (a.style.transform = "translate(-50%,35%) rotate(90deg)")
                                }, 180)
                            }, 200)
                        }, 200)
                    }, a))
                }
            },
            mounted: function() {
                this.add()
            },
            beforeDestroy: function() {
                this.timer && clearTimeout(this.timer)
            }
        }
    },
    NFwT: function(t, a, e) {
        "use strict";
        var n = e("NbeJ")
          , r = e("ds7N")
          , i = !1;
        var s = function(t) {
            i || e("Lsg3")
        }
          , o = e("VU/8")(n.a, r.a, !1, s, "data-v-9ae925ce", null);
        o.options.__file = "components/baccarat/sub/pop_up.vue",
        a.a = o.exports
    },
    NHOO: function(t, a, e) {
        "use strict";
        a.a = {
            data: function() {
                return {
                    screenHeight: document.documentElement.clientHeight
                }
            },
            computed: {
                percentage: function() {
                    return document.body.clientWidth <= 768 ? Number(Number(this.$store.state.baccarat.usedPct).toFixed(1)) : Number(this.$store.state.baccarat.usedPct)
                }
            },
            props: ["isMobile"],
            mounted: function() {
                var t = this;
                this.screenHeight <= 798 && this.$nextTick(function() {
                    $(".betting_progress .el-progress-bar").css("width", "140%")
                }),
                window.onresize = function() {
                    t.screenHeight <= 798 && t.$nextTick(function() {
                        $(".betting_progress .el-progress-bar").css("width", "140%")
                    })
                }
            }
        }
    },
    NbeJ: function(t, a, e) {
        "use strict";
        var n = e("LUgZ")
          , r = e("2qup");
        a.a = {
            data: function() {
                return {
                    audio_name: ""
                }
            },
            components: {
                rediex: n.a,
                audios: r.a
            },
            methods: {},
            mounted: function() {
                var t = this;
                this.$nextTick(function() {
                    t.$store.state.baccarat.audio.open && t.$refs.pop_up_audio && t.$refs.pop_up_audio.$el.children[0].play()
                })
            }
        }
    },
    NqLw: function(t, a, e) {
        "use strict";
        var n = e("CWyh");
        a.a = {
            data: function() {
                return {}
            },
            components: {
                GameBaccarat: n.a
            },
            watch: {},
            computed: {}
        }
    },
    O3Ic: function(t, a, e) {
        "use strict";
        var n = e("9SVb");
        a.a = {
            data: function() {
                return {
                    audio: {
                        clock: {
                            play: !1,
                            file: "5_Sec_Time_UI"
                        }
                    }
                }
            },
            watch: {
                "$store.state.baccarat.offsetTime": function() {
                    this.$store.state.baccarat.offsetTime && this.$store.state.baccarat.offsetTime.split(":")[1] <= 5 ? this.audio.clock.play = !0 : this.audio.clock.play = !1
                }
            },
            mounted: function() {},
            components: {
                audioComp: n.a
            }
        }
    },
    OC5v: function(t, a, e) {
        "use strict";
        var n = e("UvWb")
          , r = e("x4jR")
          , i = !1;
        var s = function(t) {
            i || e("jdM9")
        }
          , o = e("VU/8")(n.a, r.a, !1, s, "data-v-0308e5a8", null);
        o.options.__file = "components/baccarat/sub/others_deal.vue",
        a.a = o.exports
    },
    Ovu7: function(t, a, e) {
        "use strict";
        var n = e("fdGT")
          , r = e("AqI7")
          , i = !1;
        var s = function(t) {
            i || (e("xRtd"),
            e("dyN1"))
        }
          , o = e("VU/8")(n.a, r.a, !1, s, "data-v-33bd3a6e", null);
        o.options.__file = "components/baccarat/sub/betting_phone_progress.vue",
        a.a = o.exports
    },
    PZcJ: function(t, a, e) {
        "use strict";
        var n = function() {
            var t = this
              , a = t.$createElement
              , e = t._self._c || a;
            return e("div", {
                ref: "select_bet",
                staticClass: "select_bet"
            }, [e("div", {
                ref: "select_bet_wrap",
                staticClass: "select_bet_wrap"
            }, [e("vue-scroll", {
                attrs: {
                    ops: t.ops
                }
            }, [e("div", {
                staticClass: "select_img",
                attrs: {
                    id: "select-img-list"
                }
            }, t._l(t.bet_array, function(a, n) {
                return e("div", {
                    key: n,
                    ref: "bet",
                    refInFor: !0,
                    class: a.val ? "" : "opc",
                    on: {
                        mouseover: function(a) {
                            t.hover(n)
                        },
                        mouseout: function(a) {
                            t.hoverout(n)
                        },
                        click: function(e) {
                            t.select_bet(a.val, a.index)
                        }
                    }
                }, [e("img", {
                    attrs: {
                        src: a.src
                    },
                    on: {
                        mousedown: t.stop_drap
                    }
                }), e("span", {
                    style: "color:" + a.font_color
                }, [t._v(t._s(a.val))])])
            }))]), e("div", {
                staticClass: "select_total"
            }, [e("img", {
                staticClass: "img",
                attrs: {
                    src: t.$config.tokens[t.$store.state.currentCurrency].icon,
                    alt: ""
                }
            }), e("span", {
                staticClass: "chara"
            }, [t._v(" " + t._s(t.$store.state.account[t.$store.state.currentCurrency] ? t.$store.state.account[t.$store.state.currentCurrency] : ""))])])], 1), e("audios", {
                ref: "red",
                attrs: {
                    audio_name: "Select_(Baccarat)"
                }
            }), e("audios", {
                ref: "gold",
                attrs: {
                    audio_name: "1000_Coin"
                }
            }), e("audios", {
                ref: "rainbow",
                attrs: {
                    audio_name: "5000_Coin"
                }
            })], 1)
        };
        n._withStripped = !0;
        var r = {
            render: n,
            staticRenderFns: []
        };
        a.a = r
    },
    PyhH: function(t, a, e) {
        (t.exports = e("FZ+f")(!1)).push([t.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""])
    },
    Q0ft: function(t, a, e) {
        var n = e("bKmQ");
        "string" == typeof n && (n = [[t.i, n, ""]]),
        n.locals && (t.exports = n.locals);
        (0,
        e("rjj0").default)("3712013e", n, !1, {
            sourceMap: !1
        })
    },
    QVop: function(t, a, e) {
        "use strict";
        var n = e("jqu2")
          , r = e("CNxB")
          , i = !1;
        var s = function(t) {
            i || e("QncS")
        }
          , o = e("VU/8")(n.a, r.a, !1, s, "data-v-41501d84", null);
        o.options.__file = "components/baccarat/sub/bets_style.vue",
        a.a = o.exports
    },
    QncS: function(t, a, e) {
        var n = e("q/v8");
        "string" == typeof n && (n = [[t.i, n, ""]]),
        n.locals && (t.exports = n.locals);
        (0,
        e("rjj0").default)("1b92ce14", n, !1, {
            sourceMap: !1
        })
    },
    RUiO: function(t, a, e) {
        "use strict";
        var n = function() {
            var t = this
              , a = t.$createElement
              , e = t._self._c || a;
            return e("div", {
                staticClass: "count_down_01"
            }, [e("div", {
                staticClass: "clock-view"
            }, [e("p", [t._v(t._s(t.$store.state.currentLang.baccarat[8]))]), e("p", [t._v(t._s(t.$store.state.baccarat.offsetTime))])]), e("audioComp", {
                attrs: {
                    fileName: t.audio.clock.file,
                    play: t.audio.clock.play,
                    loop: !0
                }
            })], 1)
        };
        n._withStripped = !0;
        var r = {
            render: n,
            staticRenderFns: []
        };
        a.a = r
    },
    RVa5: function(t, a, e) {
        "use strict";
        e("KX8D");
        var n = e("km5A")
          , r = e("DmT9")
          , i = (e.n(r),
        e("/5sW"),
        e("SaVE"))
          , s = e("ZOko")
          , o = e("Ashj")
          , c = e("hiIt")
          , l = e("1Rj0")
          , b = e("1upv")
          , d = e("MZUK")
          , p = e("J9LY")
          , m = e("Ovu7")
          , u = e("9g89")
          , f = e("caIu");
        a.a = {
            data: function() {
                return {
                    activeTab: "",
                    timer: null,
                    transparentValue: 1,
                    containerWidth: "",
                    view: {
                        height: 0,
                        width: 0
                    },
                    screenRatio: 2,
                    btns: {
                        t1: !1,
                        table2: !1,
                        log: !1,
                        user: !1,
                        income: !1,
                        statis: !1
                    },
                    size: {
                        t1: {
                            isPCSmall: !1,
                            width: 320
                        },
                        log: {
                            isPCSmall: !1
                        }
                    },
                    chat: {
                        small: !1,
                        mobile_small: !1
                    },
                    lastTouchEnd: 0
                }
            },
            components: {
                baccaratBet: n.a,
                current_allBet_log: o.a,
                betting_state: c.a,
                count_down: b.a,
                betting_progress: l.a,
                top_punter: i.a,
                accumulated_income: s.a,
                bet_result_table: d.a,
                betting_phone_progress: m.a,
                horse_race_lamp: u.a,
                bet_result_table2: p.a,
                audio_constrol: f.a
            },
            watch: {
                screenRatio: function() {}
            },
            computed: {
                _betRecord: function() {
                    return this.$store.state.baccarat.betRecord instanceof Array ? this.$store.state.baccarat.betRecord.slice().reverse() : []
                }
            },
            methods: {
                setHtmlFont: function() {
                    if (this.view.height = document.documentElement.clientHeight,
                    this.view.width = document.documentElement.clientWidth,
                    this.$store.commit("setBaccarat", {
                        responsive: this.view.height + " " + this.view.width
                    }),
                    document.documentElement.clientWidth > .86 * document.documentElement.clientHeight ? (this.containerWidth = "",
                    document.getElementsByTagName("html")[0].style.fontSize = Math.floor(document.documentElement.clientHeight / 10.1) + "px",
                    this.$store.commit("setBaccarat", {
                        isMobileScreen: !1
                    })) : (document.getElementsByTagName("html")[0].style.fontSize = Math.floor(document.documentElement.clientWidth / 8.686) + "px",
                    this.containerWidth = document.documentElement.clientWidth + "px",
                    this.$store.commit("setBaccarat", {
                        isMobileScreen: !0
                    })),
                    this.screenRatio = document.documentElement.clientWidth / document.documentElement.clientHeight,
                    document.documentElement.clientHeight < 495 && document.documentElement.clientWidth > document.documentElement.clientHeight && (this.screenRatio = 1.1),
                    document.documentElement.clientWidth > document.documentElement.clientHeight && document.getElementById("select-img-list") && document.getElementById("baccarat-t1")) {
                        var t = document.documentElement.clientWidth / 2 - document.getElementById("select-img-list").offsetWidth / 2;
                        this.size.t1.isPCSmall = t < 310,
                        this.size.t1.width = t - 15
                    }
                },
                rightListClick: function() {
                    document.body.clientWidth <= 768 && (Number(this.transparentValue) > .2 ? this.transparentValue = (Number(this.transparentValue) - .2).toFixed(2) : this.transparentValue = 1)
                }
            },
            mounted: function() {
                var t = this;
                this.setHtmlFont();
                window;
                window.addEventListener("resize", function() {
                    t.$refs.gameView && t.setHtmlFont()
                })
            },
            beforeMount: function() {},
            created: function() {
                this.screenRatio = 2
            },
            beforeDestroy: function() {}
        }
    },
    SHyG: function(t, a, e) {
        (t.exports = e("FZ+f")(!1)).push([t.i, "\n.spinner[data-v-2ff53d0a] {\n  height: 3.2px;\n  height: 0.2rem;\n  text-align: center;\n  font-size: 1.6px;\n  font-size: 0.1rem;\n  margin-left: 1.6px;\n  margin-left: 0.1rem;\n}\n.spinner > div[data-v-2ff53d0a] {\n  background-color: rgb(241, 151, 35);\n  height: 100%;\n  width: 6px;\n  display: inline-block;\n  margin-left: 0.8px;\n  margin-left: 0.05rem;\n  -webkit-animation: stretchdelay-data-v-2ff53d0a 1.2s infinite ease-in-out;\n  animation: stretchdelay-data-v-2ff53d0a 1.2s infinite ease-in-out;\n}\n.spinner .rect2[data-v-2ff53d0a] {\n  -webkit-animation-delay: -1.1s;\n  animation-delay: -1.1s;\n}\n.spinner .rect3[data-v-2ff53d0a] {\n  -webkit-animation-delay: -1.0s;\n  animation-delay: -1.0s;\n}\n.spinner .rect4[data-v-2ff53d0a] {\n  -webkit-animation-delay: -0.9s;\n  animation-delay: -0.9s;\n}\n.spinner .rect5[data-v-2ff53d0a] {\n  -webkit-animation-delay: -0.8s;\n  animation-delay: -0.8s;\n}\n@-webkit-keyframes stretchdelay-data-v-2ff53d0a {\n0%, 40%, 100% { -webkit-transform: scaleY(0.4)\n}\n20% { -webkit-transform: scaleY(1.0)\n}\n}\n@keyframes stretchdelay-data-v-2ff53d0a {\n0%, 40%, 100% {\n    transform: scaleY(0.4);\n    -webkit-transform: scaleY(0.4);\n}\n20% {\n       transform: scaleY(1.0);\n       -webkit-transform: scaleY(1.0);\n}\n}\n", ""])
    },
    SaVE: function(t, a, e) {
        "use strict";
        var n = e("lEL9")
          , r = e("i56X")
          , i = !1;
        var s = function(t) {
            i || (e("quWa"),
            e("cYhM"))
        }
          , o = e("VU/8")(n.a, r.a, !1, s, "data-v-7d1f8640", null);
        o.options.__file = "components/baccarat/sub/top-punter.vue",
        a.a = o.exports
    },
    T1O8: function(t, a, e) {
        "use strict";
        var n = function() {
            var t = this.$createElement
              , a = this._self._c || t;
            return a("div", {
                staticClass: "audio_constrol",
                on: {
                    click: this.auto_checkout
                }
            }, [this.open ? a("i", {
                staticClass: "fa fa-volume-up"
            }) : this._e(), this.open ? this._e() : a("i", {
                staticClass: "fa fa-volume-off"
            })])
        };
        n._withStripped = !0;
        var r = {
            render: n,
            staticRenderFns: []
        };
        a.a = r
    },
    TLzd: function(t, a, e) {
        "use strict";
        var n = e("gRE1")
          , r = e.n(n)
          , i = e("//Fk")
          , s = e.n(i)
          , o = e("fZjL")
          , c = e.n(o)
          , l = e("Xxa5")
          , b = e.n(l)
          , d = e("exGp")
          , p = e.n(d)
          , m = e("mvHQ")
          , u = e.n(m)
          , f = e("woOf")
          , h = e.n(f)
          , v = e("NFwT")
          , g = e("5FnK")
          , _ = e("lwRF")
          , x = e("OC5v")
          , y = e("hdGj")
          , w = e("+J1r")
          , k = e("bqcX")
          , $ = e("q0nB")
          , C = e("DmT9")
          , P = e.n(C)
          , T = e("/5sW")
          , S = e("9SVb");
        a.a = {
            data: function() {
                return {
                    playerPoker: ["", "", ""],
                    bankerPoker: ["", "", ""],
                    delay: 1500,
                    bets_img: [{
                        src: "/img/bet1.png",
                        val: .1,
                        font_color: "#ffeb53",
                        index: 0
                    }, {
                        src: "/img/bet2.png",
                        val: 1,
                        font_color: "#f73b44",
                        index: 1
                    }, {
                        src: "/img/bet3.png",
                        val: 5,
                        font_color: "#2fbef3",
                        index: 2
                    }, {
                        src: "/img/bet4.png",
                        val: 10,
                        font_color: "#49a636",
                        index: 3
                    }, {
                        src: "/img/bet5.png",
                        val: 50,
                        font_color: "#7e847d",
                        index: 4
                    }, {
                        src: "/img/bet6.png",
                        val: 100,
                        font_color: "#c857d4",
                        index: 5
                    }],
                    buy_val: "",
                    player_val: [],
                    all_val: {
                        player: {},
                        banker: {},
                        tie: {},
                        playerPair: {},
                        bankerPair: {}
                    },
                    count: 1,
                    betCount: 0,
                    gameState: "betstart",
                    otherBet: {
                        player: [],
                        banker: [],
                        tie: [],
                        playerPair: [],
                        bankerPair: []
                    },
                    isUpdate: !0,
                    gameStatusData: null,
                    gameStartRevealData: null,
                    gameFinishRevealData: null,
                    loading: !1,
                    score: {
                        player: "",
                        blanker: ""
                    },
                    isRefreshPage: !1,
                    timer: null,
                    timer1: null,
                    isFinish_result: null,
                    maxBet: null,
                    showStartBetMsg: !1,
                    showBetResult: {},
                    timer3: null,
                    timer4: null,
                    isWait: !1,
                    payoutConfig: {
                        player: 1,
                        banker: .95,
                        tie: 8,
                        playerPair: 11,
                        bankerPair: 11
                    },
                    wagerConfig: null,
                    timer5: null,
                    betLimitMin: 0,
                    temp: {
                        gameHistoryData: null,
                        betRecord: null
                    },
                    tempOtherBet: null,
                    audio_: {
                        win: {
                            file: "Who_Win_UI",
                            play: !1
                        },
                        tie: {
                            file: "Tie",
                            play: !1
                        },
                        sort: {
                            file: "Take the Coins",
                            play: !1
                        }
                    }
                }
            },
            components: {
                plkerItems: g.a,
                deal: _.a,
                other_deal: x.a,
                pop_up: v.a,
                crown: w.a,
                maxBetComp: k.a,
                start: $.a,
                select_bets: y.a,
                audioComp: S.a
            },
            props: ["screenRatio"],
            watch: {
                isWait: function() {
                    if (!this.isWait) {
                        var t = {};
                        this.temp.gameHistoryData && (t.gameHistoryData = this.temp.gameHistoryData),
                        this.temp.betRecord && (t.betRecord = this.temp.betRecord),
                        this.temp.gameId && (t.gameId = this.temp.gameId),
                        this.temp.usedPct && (t.usedPct = this.temp.usedPct),
                        this.temp.betTopData && (t.betTopData = this.temp.betTopData),
                        this.$store.commit("setBaccarat", t),
                        this.tempOtherBet && this.getOtherBetData()
                    }
                },
                gameFinishRevealData: function() {
                    var t = this;
                    this.gameStartRevealData && (setTimeout(function() {
                        t.gameStartRevealData = null,
                        t.clearNotBetChip(),
                        t.gameFinishRevealData && t.dealPoker().then(function(a) {
                            console.log("finish!"),
                            t.revealFinishHandler()
                        })
                    }, 1e3),
                    this.isWait = !0,
                    this.$store.commit("setBaccarat", {
                        isWait: this.isWait
                    })),
                    this.gameFinishRevealData || (this.showStartBetMsg = !0,
                    setTimeout(function() {
                        t.showStartBetMsg = !1
                    }, 2200))
                },
                gameStartRevealData: function() {
                    this.gameStartRevealData && (this.isWait = !0,
                    this.$store.commit("setBaccarat", {
                        isWait: this.isWait
                    }))
                },
                "$store.state.currentCurrency": function() {
                    this.initData(),
                    this.initMaxBet(),
                    this.isRefreshPage = !1,
                    this.connectSocket(),
                    this.$store.commit("setBaccarat", {
                        gameHistoryData: []
                    })
                },
                all_val: {
                    handler: function(t, a) {},
                    immediate: !0,
                    deep: !0
                },
                "$store.state.account.name": function() {
                    this.initData(),
                    this.isRefreshPage = !1
                }
            },
            computed: {
                testBets: function() {
                    for (var t = {}, a = 0; a < 40; a++) {
                        var e = this.$utils.randomLetter(7);
                        t[e] = {},
                        t[e].player = {
                            EOS: "5000.0000 EOS"
                        }
                    }
                    return t
                }
            },
            methods: {
                initMaxBet: function() {
                    var t = {};
                    for (var a in t[this.$store.state.currentCurrency] = {},
                    this.payoutConfig)
                        t[this.$store.state.currentCurrency][a] = {
                            betPayout: 0,
                            type: a,
                            payout: this.payoutConfig[a]
                        };
                    this.maxBet = t
                },
                buy_val_fun: function(t) {
                    this.buy_val = t
                },
                clearNotBetChip: function() {
                    for (var t in this.all_val)
                        for (var a in this.all_val[t])
                            this.all_val[t][a].betSuccess || (this.all_val[t][a].value = [])
                },
                revealFinishHandler: function() {
                    var t = this;
                    console.log("yes!!!");
                    console.log("this.gameFinishRevealData:", this.gameFinishRevealData),
                    this.isFinish_result = this.gameFinishRevealData.result,
                    this.showBetResult = h()({}, this.gameFinishRevealData);
                    var a = this.gameFinishRevealData.result;
                    a = "" === a ? "tie" : a,
                    "tie" === this.gameFinishRevealData.result ? this.audio_.tie.play = !0 : this.audio_.win.play = !0,
                    setTimeout(function() {
                        try {
                            if (!t.$store.state.account.name)
                                return;
                            var a = t.gameFinishRevealData.payout;
                            if (a && a[t.$store.state.account.name]) {
                                var e = a[t.$store.state.account.name];
                                for (var n in e) {
                                    var r = e[n][t.$store.state.currentCurrency].split(" ")[0]
                                      , i = t.getArraySum(t.all_val[n][t.$store.state.currentCurrency].value).toFixed(4)
                                      , s = Number(r) > Number(i)
                                      , o = Number(r) === Number(i);
                                    0 === Number(r) ? t.all_val[n][t.$store.state.currentCurrency].betSuccessAll = "lose" : s ? (t.all_val[n][t.$store.state.currentCurrency].betSuccessAll = "win",
                                    t.all_val[n][t.$store.state.currentCurrency].payout = t.$utils.float4(r - i) + " " + e[n][t.$store.state.currentCurrency].split(" ")[1]) : o && (t.all_val[n][t.$store.state.currentCurrency].betSuccessAll = "tie")
                                }
                            }
                        } catch (t) {
                            console.log("revealFinishHandler error:", t)
                        }
                    }, 3e3),
                    setTimeout(function() {
                        for (var e in t.otherBet)
                            e === a ? t.otherBet[e].forEach(function(t, a) {
                                t.result = "win"
                            }) : t.otherBet[e].forEach(function(t, a) {
                                t.result = "lose"
                            });
                        setTimeout(function() {
                            t.audio_.sort.play = !0
                        }, 250)
                    }, 2e3),
                    setTimeout(function() {
                        t.initData(),
                        t.$getCurrency()
                    }, 6e3)
                },
                getArraySum: function(t) {
                    var a = 0;
                    return t.forEach(function(t, e) {
                        a += Number(t)
                    }),
                    a
                },
                virtualReveal: function() {
                    var t = this;
                    this.gameStartRevealData = !0,
                    setTimeout(function() {
                        t.gameFinishRevealData = JSON.parse('{\n                    "id":21854,\n                    "bankerCards":[9,46,4],\n                    "playerCards":[33,22,14],\n                    "isBankerPair":false,\n                    "isPlayerPair":false,\n                    "result":"tie",\n                    "bets":{"guang":{"player":{"EOS":"10.0000 EOS"},"banker":{"EOS":"10.0000 EOS"},"tie":{"EOS":"10.0000 EOS"},"bankerPair":{"EOS":"10.0000 EOS"},\n                    "playerPair":{"EOS":"10.0000 EOS"}}},\n                    "payout":{"guang":{"player":{"EOS":"10.0000 EOS"},"banker":{"EOS":"10.0000 EOS"},"tie":{"EOS":"90.0000 EOS"},\n                    "bankerPair":{"EOS":"0.0000 EOS"},"playerPair":{"EOS":"0.0000 EOS"}}}}')
                    }, 2e3)
                },
                all_val_activeUpdate: function() {
                    var t = JSON.parse(u()(this.all_val));
                    this.all_val = t
                },
                submit: function() {
                    var t = p()(b.a.mark(function t(a, e) {
                        var n, r, i, s, o = this;
                        return b.a.wrap(function(t) {
                            for (; ; )
                                switch (t.prev = t.next) {
                                case 0:
                                    if (!this.isWait) {
                                        t.next = 2;
                                        break
                                    }
                                    return t.abrupt("return");
                                case 2:
                                    if (!this.eos) {
                                        t.next = 35;
                                        break
                                    }
                                    if (!this.loading) {
                                        t.next = 5;
                                        break
                                    }
                                    return t.abrupt("return", console.log("正在提交中..."));
                                case 5:
                                    if (n = this.$store.state.account.name,
                                    this.$store.state.currentCurrency,
                                    r = void 0,
                                    !this.$contract || !this.$contract[this.$store.state.currentCurrency]) {
                                        t.next = 12;
                                        break
                                    }
                                    r = this.$contract[this.$store.state.currentCurrency],
                                    t.next = 13;
                                    break;
                                case 12:
                                    return t.abrupt("return", console.log("提取合约失败"));
                                case 13:
                                    if (i = this.getRef(this.$store.state.account.name),
                                    void 0 !== this.gameId) {
                                        t.next = 16;
                                        break
                                    }
                                    return t.abrupt("return", console.log("gameId undefined"));
                                case 16:
                                    if (e,
                                    s = 0,
                                    void 0,
                                    this.all_val[a][e].value.forEach(function(t, a) {
                                        s += Number(t)
                                    }),
                                    t.prev = 20,
                                    !(s < this.maxBet[this.$store.state.currentCurrency][a].min.split(" ")[0])) {
                                        t.next = 23;
                                        break
                                    }
                                    return t.abrupt("return", this.$message({
                                        showClose: !0,
                                        message: this.$store.state.currentLang.baccarat[12] + this.maxBet[this.$store.state.currentCurrency][a].min,
                                        type: "warning",
                                        duration: 2300
                                    }));
                                case 23:
                                    t.next = 28;
                                    break;
                                case 25:
                                    return t.prev = 25,
                                    t.t0 = t.catch(20),
                                    t.abrupt("return", console.log("提交验证 config数据获取失败。err:", t.t0));
                                case 28:
                                    s = this.$utils.float4(s.toFixed(4), this.$config.tokens[e].precision) + " " + e,
                                    this.all_val[a][e].loading = !0,
                                    this.all_val_activeUpdate(),
                                    this.loading = !0,
                                    clearTimeout(this.timer3),
                                    this.timer3 = setTimeout(function() {
                                        o.loading = !1,
                                        o.all_val[a][e].loading = !1,
                                        console.log("timer run....")
                                    }, 3e4),
                                    r.transfer({
                                        from: n,
                                        to: this.$config.baccarat.contract,
                                        quantity: s,
                                        memo: "action:bet,gameId:" + this.gameId + ",item:" + a + i
                                    }, {
                                        authorization: this.$store.state.account.name + "@" + this.$store.state.account.authority
                                    }).then(function(t) {
                                        o.all_val[a][e].loading = !1,
                                        o.all_val[a][e].betSuccess = !0,
                                        setTimeout(function(t, a) {
                                            o.loading = !1
                                        }, 400),
                                        o.$message({
                                            showClose: !0,
                                            message: o.$store.state.lang && o.$store.state.lang.indexOf("zh") > -1 ? "操作成功！" : "Successful",
                                            type: "success",
                                            duration: 1800
                                        }),
                                        o.$store.commit("refreshCurrency")
                                    }).catch(function(t) {
                                        o.loading = !1,
                                        o.all_val[a][e].loading = !1,
                                        o.$message({
                                            showClose: !0,
                                            message: o.$errorHandler(t),
                                            duration: 2500
                                        })
                                    });
                                case 35:
                                case "end":
                                    return t.stop()
                                }
                        }, t, this, [[20, 25]])
                    }));
                    return function(a, e) {
                        return t.apply(this, arguments)
                    }
                }(),
                getTranslate: function(t) {
                    var a = this.randomNumber(7, 42)
                      , e = this.randomNumber(25, 85);
                    return document.body.clientWidth <= 470 && ("player" === t || "banker" === t) && (e = this.randomNumber(10, 98)),
                    this.randomNumber(0, 1) && (a += 50),
                    "left: " + a + "%;top: " + e + "%;"
                },
                initData: function() {
                    var t = {
                        player: {},
                        banker: {},
                        tie: {},
                        playerPair: {},
                        bankerPair: {}
                    };
                    c()(this.$config.tokens).forEach(function(a, e) {
                        for (var n in t)
                            t[n][a] = {
                                value: [],
                                display: !1,
                                betSuccess: !1,
                                betSuccessAll: !1,
                                loading: !1,
                                payout: ""
                            }
                    }),
                    this.all_val = t,
                    this.score = {
                        player: "",
                        blanker: ""
                    },
                    this.playerPoker = ["", "", ""],
                    this.bankerPoker = ["", "", ""],
                    this.isFinish_result = null,
                    this.showStartBetMsg = !1,
                    this.gameFinishRevealData = null,
                    this.gameStartRevealData = null,
                    this.showBetResult = {},
                    this.isWait = !1,
                    this.otherBet = {
                        player: [],
                        banker: [],
                        tie: [],
                        playerPair: [],
                        bankerPair: []
                    },
                    this.$store.commit("setBaccarat", {
                        offsetTime: "",
                        gameState: "",
                        betRecord: [],
                        isWait: !1,
                        betTopData: null,
                        gameId: ""
                    }),
                    this.audio_.win.play = !1,
                    this.audio_.tie.play = !1,
                    this.audio_.sort.play = !1,
                    this.$store.commit("setBaccarat", {
                        usedPct: 0
                    }),
                    this.localTimeLift = null
                },
                connectSocket: function() {
                    var t = this;
                    this.$baccarat_socket && this.$baccarat_socket.disconnect();
                    var a = this.$config.baccarat.io.host;
                    a += this.$store.state.currentCurrency,
                    T.default.prototype.$baccarat_socket = P()(a, this.$config.baccarat.io.params),
                    this.$baccarat_socket.on("connect", function() {
                        console.log("baccarat_socket.io is connected", t.$baccarat_socket.nsp)
                    }),
                    this.$baccarat_socket.on("gameStatus", function(a) {
                        t.gameId = a.id,
                        ("number" != typeof t.localTimeLift || Math.abs(t.localTimeLift - a.timeLeft) > 3) && (0 === a.timeLeft ? t.isWait || (t.gameStartRevealData = !0,
                        t.localTimeLift = null,
                        t.$store.commit("setBaccarat", {
                            offsetTime: "--:--"
                        })) : (t.localTimeLift = a.timeLeft,
                        t.timer5 || (t.timer5 = setInterval(function() {
                            if (t.isWait)
                                t.$store.commit("setBaccarat", {
                                    offsetTime: "--:--"
                                });
                            else if ("number" == typeof t.localTimeLift && t.localTimeLift > 0) {
                                t.localTimeLift--;
                                var a = t.$moment(1e3 * t.localTimeLift).utc()
                                  , e = [a.minutes().toString().padStart(2, "0"), a.seconds().toString().padStart(2, "0")].join(":");
                                t.$store.commit("setBaccarat", {
                                    offsetTime: e
                                }),
                                0 === t.localTimeLift && (t.gameStartRevealData = !0,
                                t.localTimeLift = null)
                            }
                        }, 1e3)))),
                        t.isWait ? (t.temp.betRecord = a.betRecord || [],
                        t.temp.gameId = a.id || "") : t.$store.commit("setBaccarat", {
                            betRecord: a.betRecord || [],
                            gameId: a.id || ""
                        }),
                        t.gameStatusHandler(a)
                    }),
                    this.$baccarat_socket.on("gameReveal", function(a) {
                        console.log("gameReveal", a),
                        t.gameFinishRevealData = a
                    }),
                    this.$baccarat_socket.on("gameHistory", function(a) {
                        t.isWait ? t.temp.gameHistoryData = a || [] : t.$store.commit("setBaccarat", {
                            gameHistoryData: a || []
                        })
                    }),
                    this.$baccarat_socket.on("disconnect", function() {
                        console.log("baccarat_socket disconnect")
                    })
                },
                getCurrentCount: function(t) {},
                clear_all: function(t, a) {
                    t && (this.all_val[t][a].value = [],
                    this.all_val[t][a].display = !1)
                },
                select_bet: function(t, a) {
                    this.buy_val = t;
                    for (var e = 0; e < this.bets_img.length; e++)
                        this.$refs.bet[this.bets_img[e].index].style.transform = "translateY(0)",
                        this.$refs.bet[this.bets_img[e].index].style.boxShadow = "";
                    this.$refs.bet[a].style.transform = "translateY(-30%)",
                    this.$refs.bet[a].style.boxShadow = "0 0 0.3rem" + this.bets_img[a].font_color
                },
                player_display: function(t, a, e) {
                    if (!this.$store.state.account.name && !this.$route.query.dev)
                        return this.$message({
                            showClose: !0,
                            message: this.$store.state.currentLang.baccarat[13],
                            type: "warning",
                            duration: 2300
                        });
                    if (this.loading)
                        return this.$message({
                            showClose: !0,
                            message: this.$store.state.currentLang.baccarat[14],
                            type: "warning",
                            duration: 2300
                        });
                    if (this.isWait)
                        return console.log("bet is stop");
                    if (this.all_val[a][this.$store.state.currentCurrency].betSuccess)
                        return this.$message({
                            showClose: !0,
                            message: this.$store.state.currentLang.baccarat[15],
                            type: "warning",
                            duration: 2300
                        });
                    if (e && e.preventDefault(),
                    this.buy_val) {
                        if (-1 === t && 0 === this.all_val[a][this.$store.state.currentCurrency].value.length)
                            return;
                        if (t > 0) {
                            this.count = 1;
                            try {
                                if (this.maxBet && this.maxBet[this.$store.state.currentCurrency] && this.maxBet[this.$store.state.currentCurrency][a].remain) {
                                    var n = this.maxBet[this.$store.state.currentCurrency][a].remain.split(" ")[0]
                                      , r = 0;
                                    this.all_val[a][this.$store.state.currentCurrency].value.forEach(function(t, a) {
                                        r += Number(t)
                                    }),
                                    r + Number(this.buy_val) <= n || this.$route.query.dev ? a && !this.all_val[a][this.$store.state.currentCurrency].betSuccess && (this.all_val[a][this.$store.state.currentCurrency].value.push(this.buy_val),
                                    this.all_val[a][this.$store.state.currentCurrency].display = !0) : this.$message({
                                        showClose: !0,
                                        message: this.$store.state.currentLang.baccarat[16],
                                        type: "warning",
                                        duration: 2e3
                                    })
                                } else
                                    console.log("获取config数据失败")
                            } catch (t) {
                                console.log("betBet 额度比对失败", t)
                            }
                        } else if (this.count = -1,
                        a)
                            this.all_val[a][this.$store.state.currentCurrency].value.pop()
                    } else {
                        if (!(-1 === t && this.all_val[a][this.$store.state.currentCurrency].value.length > 0))
                            return this.$message({
                                showClose: !0,
                                message: this.$store.state.currentLang.baccarat[17],
                                type: "warning",
                                duration: 2300
                            });
                        this.count = -1;
                        this.all_val[a][this.$store.state.currentCurrency].value.pop()
                    }
                },
                dealPoker: function() {
                    var t = this;
                    return new s.a(function(a, e) {
                        t.score = {
                            player: 0,
                            banker: 0
                        };
                        var n = t.gameFinishRevealData.playerCards
                          , r = t.gameFinishRevealData.bankerCards
                          , i = n.length;
                        i = i < r.length ? r.length : i,
                        t.playerPoker = n,
                        2 === t.playerPoker.length && t.playerPoker.push("");
                        for (var s = function(a) {
                            setTimeout(function() {
                                t.score.player += Number(t.playerPoker[a]) % 13 > 10 ? 0 : Number(t.playerPoker[a]) % 13
                            }, t.delay / 2 + 1200 * a + 160)
                        }, o = 0; o < 2; o++)
                            s(o);
                        setTimeout(function() {
                            t.bankerPoker = r,
                            2 === t.bankerPoker.length && t.bankerPoker.push("");
                            for (var a = function(a) {
                                setTimeout(function() {
                                    t.score.banker += Number(t.bankerPoker[a]) % 13 > 10 ? 0 : Number(t.bankerPoker[a]) % 13
                                }, t.delay / 2 + 1200 * a + 160)
                            }, e = 0; e < 2; e++)
                                a(e)
                        }, t.delay / 2),
                        t.timer2 = setTimeout(function() {
                            for (var e = {
                                player: 0,
                                banker: 0
                            }, n = 0; n < 3; n++)
                                e.player += Number(t.playerPoker[n]) % 13 > 10 ? 0 : Number(t.playerPoker[n]) % 13,
                                e.banker += Number(t.bankerPoker[n]) % 13 > 10 ? 0 : Number(t.bankerPoker[n]) % 13;
                            t.timer1 = setTimeout(function() {
                                t.score = e,
                                t.timer4 = setTimeout(function() {
                                    console.log("dealPoker finish"),
                                    a()
                                }, 1e3)
                            }, 500)
                        }, t.delay * i + 1e3)
                    }
                    )
                },
                randomNumber: function(t, a) {
                    return Math.floor(Math.random() * (a - t + 1) + t)
                },
                getOtherBetData: function() {
                    var t = this
                      , a = function(a) {
                        t.tempOtherBet[a].forEach(function(e, n) {
                            if (t.otherBet[a].length > 0) {
                                for (var r = !1, i = 0; i < t.otherBet[a].length; i++)
                                    t.otherBet[a][i].name === e.name && t.otherBet[a][i].quantity === e.quantity && (r = !0);
                                r || t.otherBet[a].push(e)
                            } else
                                t.otherBet[a].push(e)
                        })
                    };
                    for (var e in this.tempOtherBet)
                        a(e)
                },
                gameStatusHandler: function(t) {
                    var a = this;
                    try {
                        if (t.wagerConfig.itemConfig) {
                            for (var e in t.wagerConfig.itemConfig)
                                this.maxBet[this.$store.state.currentCurrency][e] = h()(this.maxBet[this.$store.state.currentCurrency][e], t.wagerConfig.itemConfig[e]);
                            this.temp.usedPct = t.wagerConfig.usedPct || 0,
                            this.temp.betTopData = t.wagerConfig.itemConfig,
                            this.isWait || this.$store.commit("setBaccarat", {
                                usedPct: this.temp.usedPct,
                                betTopData: this.temp.betTopData
                            }),
                            (this.betLimitMin = t.wagerConfig.itemConfig.banker.min) && (this.betLimitMin = t.wagerConfig.itemConfig.banker.min.split(" ")[0],
                            this.$store.commit("setBaccarat", {
                                betLimitMin: this.betLimitMin
                            }))
                        }
                    } catch (a) {
                        console.log("data.wagerConfig.itemConfig 处理出错:", a, t.wagerConfig)
                    }
                    this.tempOtherBet = {
                        player: [],
                        banker: [],
                        tie: [],
                        playerPair: [],
                        bankerPair: []
                    };
                    var n = !1;
                    if (this.isRefreshPage || (n = !0,
                    this.isRefreshPage = !0),
                    t.bets && c()(t.bets).length > 0) {
                        var i = function(e) {
                            var i = e;
                            if (a.$store.state.account.name && i === a.$store.state.account.name) {
                                if (n)
                                    try {
                                        for (var s in t.bets[e])
                                            for (var o in t.bets[e][s]) {
                                                var l = t.bets[e][s][o].split(" ")[0];
                                                t.bets[e][s][o].split(" ")[1];
                                                a.all_val[s][o].value = [Number(l)],
                                                a.all_val[s][o].display = !0,
                                                a.all_val[s][o].betSuccess = !0
                                            }
                                    } catch (t) {
                                        console.log("获取用户本局投注数据失败", t)
                                    }
                            } else
                                c()(t.bets[e]).forEach(function(n, s) {
                                    t.bets[e][n];
                                    for (var o = r()(t.bets[e][n]), c = 0; c < o.length; c++) {
                                        o[c].split(" ")[1];
                                        a.tempOtherBet[n].push({
                                            type: n,
                                            name: i,
                                            quantity: o[c],
                                            translateStyle: a.getTranslate(n),
                                            keyId: Math.floor(1e7 * Math.random()),
                                            result: ""
                                        })
                                    }
                                })
                        };
                        for (var s in t.bets)
                            i(s);
                        this.isWait || this.getOtherBetData()
                    }
                }
            },
            mounted: function() {
                var t = this;
                this.$nextTick(function() {
                    console.log(11, t.$refs.sss)
                }),
                document.addEventListener("click", function() {
                    t.showStartBetMsg && (t.showStartBetMsg = !1)
                })
            },
            beforeMount: function() {
                this.connectSocket()
            },
            created: function() {
                this.initData(),
                this.initMaxBet()
            },
            beforeDestroy: function() {
                this.initData(),
                this.$baccarat_socket && this.$baccarat_socket.disconnect(),
                this.timer && clearInterval(this.timer),
                this.timer1 && clearTimeout(this.timer1),
                this.timer4 && clearTimeout(this.timer4),
                this.timer2 && clearTimeout(this.timer2),
                this.timer3 && clearTimeout(this.timer3),
                this.timer5 && clearInterval(this.timer5)
            }
        }
    },
    TcPW: function(t, a, e) {
        "use strict";
        var n = e("LUgZ")
          , r = e("2qup");
        a.a = {
            data: function() {
                return {}
            },
            mounted: function() {
                var t = this;
                this.$nextTick(function() {
                    t.$store.state.baccarat.audio.open && t.$refs.pop_up_audio && t.$refs.pop_up_audio.$el.children[0].play()
                })
            },
            components: {
                rediex: n.a,
                audios: r.a
            }
        }
    },
    TmV0: function(t, a, e) {
        e("fZOM"),
        t.exports = e("FeBl").Object.values
    },
    UvWb: function(t, a, e) {
        "use strict";
        var n = e("Gu7T")
          , r = e.n(n)
          , i = e("2qup");
        a.a = {
            data: function() {
                return {
                    bg_photo: [],
                    img_location_array: [],
                    de_bets: this.$config.baccarat.array_gather,
                    bets: [],
                    total: "",
                    opc: ""
                }
            },
            components: {
                audios: i.a
            },
            props: ["name", "quantity", "result"],
            watch: {
                "$store.state.baccarat.betLimitMin": {
                    handler: function(t, a) {
                        for (var e = 0; e < this.de_bets.length; e++)
                            if (t == this.de_bets[e]) {
                                for (var n = [], r = e; r < e + this.de_bets.length; r++)
                                    n.push(this.de_bets[r]);
                                this.bets = n
                            }
                    },
                    immediate: !0,
                    deep: !0
                },
                result: function(t) {},
                quantity: {
                    handler: function(t, a) {
                        var e = Number(t.split(" ")[0]);
                        if (this.algorithm(Number(e.toFixed(1))))
                            for (var n = 0; n < this.algorithm(e).length; n++)
                                for (var r = 0; r < this.bets.length; r++)
                                    this.algorithm(Number(e.toFixed(1)))[n] == this.bets[r] && (this.img_location_array.push(this.randomOffset()),
                                    this.bg_photo.push(this.bets[r]))
                    },
                    immediate: !0,
                    deep: !0
                }
            },
            computed: {
                _name: function() {
                    return this.name || ""
                },
                _quantity: function() {
                    return this.quantity || ""
                },
                _result: function() {
                    var t = "";
                    return t = "win" === this.result ? "+" : t,
                    t = "lose" === this.result ? "-" : t
                }
            },
            methods: {
                randomOffset: function() {
                    return (Math.floor(4 * Math.random() + 2) % 2 == 0 ? "-" : "") + Math.floor(4 * Math.random() + 2) / 100
                },
                clickHandler: function(t) {},
                algorithm: function(t) {
                    var a = []
                      , e = ""
                      , n = "";
                    if (t) {
                        for (var i = 0; i < this.bets.length; i++)
                            if (this.bets[i] <= t && t < this.bets[i + 1] && this.bets[i + 1]) {
                                if (0 != Number((t % this.bets[i]).toFixed(1))) {
                                    e = Number((t % this.bets[i]).toFixed(1)),
                                    n = (Number(t.toFixed(1)) - e) / this.bets[i];
                                    for (var s = 0; s < n; s++)
                                        a.push(this.bets[i]);
                                    return 0 != e && a.push.apply(a, r()(this.algorithm(e))),
                                    a
                                }
                                for (var o = 0; o < t / this.bets[i]; o++)
                                    a.push(this.bets[i]);
                                return a
                            }
                    } else
                        this.total = 0
                }
            },
            mounted: function() {
                var t = this;
                this.$nextTick(function() {
                    t.$store.state.baccarat.audio.open && t.$refs.ohters_deal_audio && t.$refs.ohters_deal_audio.$el.children[0].play()
                })
            }
        }
    },
    Vj8r: function(t, a, e) {
        (t.exports = e("FZ+f")(!1)).push([t.i, "\n.game-comp-baccarat-bet .el-scrollbar__wrap {\r\n  overflow-x: hidden;\n}\n.bet-top-bar.at-top .el-progress-circle {\r\n  width: 17.6px !important;\r\n  width: 1.1rem !important;\r\n  height: 17.6px !important;\r\n  height: 1.1rem !important;\r\n  display: block;\n}\n.bet-top-bar\r\n  .progress-item\r\n  .betting_progress\r\n  .betting_progress_wrap\r\n  > p:first-child {\r\n  font-size: 10px;\r\n  padding-top: 3px;\r\n  padding-bottom: 3px;\n}\n.bet-top-bar .progress-item .betting_progress .el-progress-bar__innerText {\r\n  position: relative;\r\n  top: -2px;\r\n  font-size: 10px !important;\n}\n.bet-top-bar .betting_state > div span {\r\n  text-shadow: 0 0 3px #000 !important;\r\n  color: #b55e44;\r\n  text-align: center;\n}\n#is-mobile-01 .bet-top-bar .betting_state > div span {\r\n  font-size: 3.84px !important;\r\n  font-size: 0.24rem !important;\r\n  line-height: 1;\n}\n#is-mobile-01 .bet-top-bar .count_down_01 > div p:first-child {\r\n  font-size: 4.16px !important;\r\n  font-size: 0.26rem !important;\n}\n#is-mobile-01 .bet-top-bar .count_down_01 > div p:last-child {\r\n  position: relative;\r\n  top: -4px;\r\n  font-size: 16px;\n}\n.game-comp-baccarat-bet\r\n  .table-on-mobile\r\n  .current-allBet-log\r\n  .current-allBet-wrap\r\n  .scroll-wrap\r\n  > div {\r\n  padding-left: 4.8px;\r\n  padding-left: 0.3rem;\n}\n.game-comp-baccarat-bet\r\n  .table-on-mobile\r\n  .top-punter\r\n  .current_allBet_wrap\r\n  > div {\r\n  padding-left: 8px;\r\n  padding-left: 0.5rem;\n}\n.bet-top-bar .el-progress-circle__track {\r\n  stroke: #0c3a55;\n}\n.table-on-pc .chat-comp .close-icon {\r\n  display: none !important;\n}\r\n", ""])
    },
    Wn2q: function(t, a, e) {
        (t.exports = e("FZ+f")(!1)).push([t.i, "\n.current-allBet-log .el-scrollbar__wrap {\r\n      overflow-x: hidden;\r\n      margin-right: -17px !important;\n}\r\n/* .current-allBet-log .__vuescroll .__panel.__slide {\r\n  min-height: 0;\r\n  height: 100%;\r\n} */\r\n/* .current-allBet-log .__vuescroll {\r\n  height: 90% !important;\r\n} */\r\n", ""])
    },
    "WoP/": function(t, a, e) {
        "use strict";
        a.a = {}
    },
    "Xi+U": function(t, a, e) {
        (t.exports = e("FZ+f")(!1)).push([t.i, "\n.accumulated-income[data-v-7eec7ee4] {\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, .3);\n  border: 1px solid rgba(245, 240, 240, .4);\n  overflow: hidden;\n}\n.accumulated-income .title1[data-v-7eec7ee4],\n.accumulated-income .title2[data-v-7eec7ee4] {\n  height: 16%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  border-bottom: 1px solid rgba(245, 240, 240, .4);\n  background: rgba(0, 0, 0, .4);\n}\n.accumulated-income .accumulated-income-yellow[data-v-7eec7ee4] {\n  color: #fadb00;\n  font-weight: 600;\n  text-shadow: 0 0 3px #fadb00;\n}\n.accumulated-income .title2[data-v-7eec7ee4] {\n  border-top: 1px solid rgba(245, 240, 240, .4);\n  border-bottom: none;\n  padding: 1.6px 0;\n  padding: 0.1rem 0;\n  font-size: 13px;\n}\n.accumulated-income .accumulated-income-wrap[data-v-7eec7ee4] {\n  min-height: 68%;\n  padding-left: 2.4px;\n  padding-left: 0.15rem;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-align: start;\n      -ms-flex-align: start;\n          align-items: flex-start;\n  -ms-flex-pack: distribute;\n      justify-content: space-around;\n  font-size: 12px;\n}\n.accumulated-income .accumulated-income-wrap > div[data-v-7eec7ee4] {\n  width: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-pack: distribute;\n      justify-content: space-around;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n.accumulated-income .accumulated-income-wrap > div > div[data-v-7eec7ee4]:nth-child(2) {\n  margin-left: 13%;\n  width: 30%;\n  white-space: nowrap;\n}\n.accumulated-income .accumulated-income-wrap > div > div[data-v-7eec7ee4]:nth-child(3) {\n  width: 43%;\n  white-space: nowrap;\n}\n.accumulated-income .accumulated-income-wrap .other[data-v-7eec7ee4] {\n  width: 4.16px;\n  width: 0.26rem;\n  min-width: 22px;\n  min-height: 22px;\n  height: 4.16px;\n  height: 0.26rem;\n  border-radius: 50%;\n  color: white;\n  position: relative;\n  background: #cccccc;\n}\n.accumulated-income .accumulated-income-wrap .other .small_red[data-v-7eec7ee4] {\n  position: absolute;\n  left: -0.16px;\n  left: -0.01rem;\n  top: -0.16px;\n  top: -0.01rem;\n  border-radius: 50%;\n  background: #b21d30;\n  width: 1.76px;\n  width: 0.11rem;\n  height: 1.76px;\n  height: 0.11rem;\n}\n.accumulated-income .accumulated-income-wrap .other .small_blue[data-v-7eec7ee4] {\n  width: 1.76px;\n  width: 0.11rem;\n  height: 1.76px;\n  height: 0.11rem;\n  position: absolute;\n  right: -0.16px;\n  right: -0.01rem;\n  bottom: -0.16px;\n  bottom: -0.01rem;\n  border-radius: 50%;\n  background: #283185;\n}\n", ""])
    },
    Y6cx: function(t, a, e) {
        "use strict";
        var n = function() {
            var t = this
              , a = t.$createElement
              , e = t._self._c || a;
            return e("div", {
                class: "bet_wrap"
            }, [e("div", {
                ref: "result_dis",
                class: "select_bets" + t.result_
            }, [e("div", {
                class: "img_wrap" + t.opc
            }, [t._l(t.bg_photo, function(a, n) {
                return t.bg_photo ? e("img", {
                    key: n,
                    style: "position:absolute;left:" + t.img_location_array[n] + "rem;bottom:" + 5 * n + "px",
                    attrs: {
                        src: "/img/buy" + a + "_.png",
                        alt: ""
                    }
                }) : t._e()
            }), e("div", {
                ref: "targets",
                class: "img_animation" + t.ani
            }, [t._l(t.bg_photo, function(a, n) {
                return t.bg_photo ? e("img", {
                    key: n,
                    style: "position:absolute;left:" + t.img_location_array[n] + "rem;bottom:" + 5 * n + "px",
                    attrs: {
                        src: "/img/buy" + a + "_.png",
                        alt: ""
                    }
                }) : t._e()
            }), e("div", {
                staticClass: "chara_btn"
            }, [e("div", {
                staticClass: "chara"
            }, [e("div", {
                staticClass: "_chara"
            }, [e("span", [t._v("+" + t._s(t.payout))]), e("span", {
                staticStyle: {
                    "font-size": "0.13rem",
                    "padding-left": ".04rem"
                }
            }, [t._v(t._s(t._unit))])])])])], 2)], 2), e("div", {
                staticClass: "chara_btn"
            }, [e("div", {
                staticClass: "chara"
            }, [e("div", {
                staticClass: "_chara"
            }, [e("span", [t._v(t._s(t.total))]), e("span", {
                staticStyle: {
                    "padding-left": ".06rem",
                    "padding-right": ".06rem"
                }
            }, [t._v(t._s(t._unit))]), e("span", [t._v(t._s(t.typeText))])])])]), e("div", {
                ref: "btn",
                class: "btns" + t.opc
            }, [e("div", {
                staticClass: "_rorate_btn",
                on: {
                    click: function(a) {
                        return a.stopPropagation(),
                        t.emit_count(a)
                    }
                }
            }, [e("img", {
                attrs: {
                    src: "/img/btn3.png",
                    alt: ""
                }
            })]), e("div", {
                staticClass: "_close_btn",
                on: {
                    click: function(a) {
                        return a.stopPropagation(),
                        t.clear_all(a)
                    }
                }
            }, [e("img", {
                attrs: {
                    src: "/img/btn2.png",
                    alt: ""
                }
            })]), e("div", {
                class: 1 == t.loading ? "_send_btn _send_loading" : "_send_btn",
                on: {
                    click: function(a) {
                        return a.stopPropagation(),
                        t.send_bet(a)
                    }
                }
            }, [0 == t.loading ? e("img", {
                attrs: {
                    src: "/img/btn1.png",
                    alt: ""
                }
            }) : 1 == t.loading ? e("i", {
                staticClass: "fa fa-refresh fa-spin"
            }) : t._e()]), t.maxBet ? e("p", {
                staticClass: "bet-tips"
            }, [t._v(t._s(t.$store.state.currentLang.baccarat[18] + " " + t.maxBet))]) : t._e()])])])
        };
        n._withStripped = !0;
        var r = {
            render: n,
            staticRenderFns: []
        };
        a.a = r
    },
    "Ymi/": function(t, a, e) {
        "use strict";
        var n = function() {
            var t = this
              , a = t.$createElement
              , e = t._self._c || a;
            return e("div", {
                class: "baccarat_bet " + (t.screenRatio < .79 ? "is-mobile-screen" : "")
            }, [e("div", {
                staticClass: "lazyload-poker",
                staticStyle: {
                    height: "0px",
                    width: "0px",
                    overflow: "hidden"
                }
            }, [t._l(52, function(t, a) {
                return e("img", {
                    key: a,
                    attrs: {
                        src: "/img/poker/" + (a + 1) + ".jpg"
                    }
                })
            }), e("img", {
                attrs: {
                    src: "/img/poker/back.jpg"
                }
            })], 2), e("div", {
                staticClass: "base-container"
            }, [e("div", {
                staticClass: "poker-box poker-box-player"
            }, [e("div", {
                staticClass: "poker-item player"
            }, [t._l(t.playerPoker, function(a, n) {
                return e("div", {
                    key: n,
                    staticClass: "item"
                }, [a ? e("plkerItems", {
                    attrs: {
                        poker: a,
                        delay: 2 === n ? n * t.delay + t.delay : n * t.delay,
                        index: n
                    }
                }) : t._e()], 1)
            }), e("div", {
                staticClass: "score l"
            }, [e("h4", [t._v(t._s(t.$store.state.currentLang.baccarat[1]))]), "number" == typeof t.score.player ? e("p", {
                staticStyle: {
                    "text-align": "center"
                }
            }, [t._v(t._s(t.score.player % 10))]) : t._e()])], 2)]), e("div", {
                staticClass: "poker-box poker-box-banker"
            }, [e("div", {
                staticClass: "poker-item banker"
            }, [t._l(t.bankerPoker, function(a, n) {
                return e("div", {
                    key: n,
                    staticClass: "item"
                }, [a ? e("plkerItems", {
                    attrs: {
                        poker: a,
                        delay: 2 === n ? n * t.delay + t.delay : n * t.delay,
                        index: n
                    }
                }) : t._e()], 1)
            }), e("div", {
                staticClass: "score r"
            }, [e("h4", [t._v(t._s(t.$store.state.currentLang.baccarat[0]))]), "number" == typeof t.score.banker ? e("p", {
                staticStyle: {
                    "text-align": "center"
                }
            }, [t._v(t._s(t.score.banker % 10))]) : t._e()])], 2)])]), e("div", {
                staticClass: "bets-5"
            }, [e("div", {
                staticClass: "middle-bets playerPair",
                attrs: {
                    id: t.showBetResult.isPlayerPair ? "active-win-1" : ""
                },
                on: {
                    click: function(a) {
                        t.player_display(1, "playerPair")
                    },
                    contextmenu: function(a) {
                        t.player_display(-1, "playerPair", a)
                    }
                }
            }, [e("h4", [t._v(t._s(t.$store.state.currentLang.baccarat[1]) + " " + t._s(t.$store.state.currentLang.baccarat[4]))]), e("p", [t._v("1:" + t._s(t.payoutConfig.playerPair))]), t._l(t.otherBet.playerPair, function(t, a) {
                return e("other_deal", {
                    key: t.keyId,
                    class: "other-bet s" + (a + 1),
                    style: t.translateStyle,
                    attrs: {
                        name: t.name,
                        quantity: t.quantity,
                        result: t.result
                    }
                })
            }), t._l(Object.keys(t.all_val.playerPair), function(a, n) {
                return t.all_val.playerPair[a].display ? e("deal", {
                    key: n,
                    staticClass: "deal-comp",
                    attrs: {
                        player_val: t.all_val.playerPair[a].value,
                        type: "playerPair",
                        count: t.count,
                        currencyType: a,
                        betSuccess: t.all_val.playerPair[a].betSuccess,
                        betSuccessAll: t.all_val.playerPair[a].betSuccessAll,
                        loading: t.all_val.playerPair[a].loading,
                        payout: t.all_val.playerPair[a].payout,
                        maxBet: t.maxBet[t.$store.state.currentCurrency].playerPair.remain,
                        typeText: t.$store.state.currentLang.baccarat[1] + " " + t.$store.state.currentLang.baccarat[4]
                    },
                    on: {
                        sendCurrentCount: t.getCurrentCount,
                        clickBet: function(e) {
                            t.submit("playerPair", a)
                        },
                        clear: function(e) {
                            t.clear_all("playerPair", a)
                        },
                        children_count: function(a) {
                            t.player_display(-1, "playerPair")
                        }
                    }
                }) : t._e()
            }), !t.isWait && t.maxBet[this.$store.state.currentCurrency].playerPair.remain ? e("div", {
                class: "max-bet-tips " + (t.all_val.playerPair[t.$store.state.currentCurrency].display && !t.all_val.playerPair[t.$store.state.currentCurrency].betSuccess ? "active" : "")
            }, [t._v(t._s(t.$store.state.currentLang.baccarat[18])), e("em", [t._v(t._s(t.maxBet[t.$store.state.currentCurrency].playerPair.remain))])]) : t._e()], 2), e("div", {
                staticClass: "middle-bets tie",
                attrs: {
                    id: "tie" === t.isFinish_result ? "active-win" : ""
                },
                on: {
                    click: function(a) {
                        t.player_display(1, "tie")
                    },
                    contextmenu: function(a) {
                        t.player_display(-1, "tie", a)
                    }
                }
            }, [e("h4", [t._v(t._s(t.$store.state.currentLang.baccarat[2]))]), e("p", [t._v("1:" + t._s(t.payoutConfig.tie))]), t._l(t.otherBet.tie, function(t, a) {
                return e("other_deal", {
                    key: t.keyId,
                    class: "other-bet s" + (a + 1),
                    style: t.translateStyle,
                    attrs: {
                        name: t.name,
                        quantity: t.quantity,
                        result: t.result
                    }
                })
            }), t._l(Object.keys(t.all_val.tie), function(a, n) {
                return t.all_val.tie[a].display ? e("deal", {
                    key: n,
                    staticClass: "deal-comp",
                    attrs: {
                        player_val: t.all_val.tie[a].value,
                        type: "tie",
                        count: t.count,
                        currencyType: a,
                        betSuccess: t.all_val.tie[a].betSuccess,
                        betSuccessAll: t.all_val.tie[a].betSuccessAll,
                        loading: t.all_val.tie[a].loading,
                        payout: t.all_val.tie[a].payout,
                        maxBet: t.maxBet[t.$store.state.currentCurrency].tie.remain,
                        typeText: t.$store.state.currentLang.baccarat[2]
                    },
                    on: {
                        sendCurrentCount: t.getCurrentCount,
                        clickBet: function(e) {
                            t.submit("tie", a)
                        },
                        clear: function(e) {
                            t.clear_all("tie", a)
                        },
                        children_count: function(a) {
                            t.player_display(-1, "tie")
                        }
                    }
                }) : t._e()
            }), !t.isWait && t.maxBet[this.$store.state.currentCurrency].tie.remain ? e("div", {
                class: "max-bet-tips " + (t.all_val.tie[t.$store.state.currentCurrency].display && !t.all_val.tie[t.$store.state.currentCurrency].betSuccess ? "active" : "")
            }, [t._v(t._s(t.$store.state.currentLang.baccarat[18])), e("em", [t._v(t._s(t.maxBet[t.$store.state.currentCurrency].tie.remain))])]) : t._e()], 2), e("div", {
                staticClass: "middle-bets bankerPair",
                attrs: {
                    id: t.showBetResult.isBankerPair ? "active-win-2" : ""
                },
                on: {
                    click: function(a) {
                        t.player_display(1, "bankerPair")
                    },
                    contextmenu: function(a) {
                        t.player_display(-1, "bankerPair", a)
                    }
                }
            }, [e("h4", [t._v(t._s(t.$store.state.currentLang.baccarat[0]) + " " + t._s(t.$store.state.currentLang.baccarat[4]))]), e("p", [t._v("1:" + t._s(t.payoutConfig.bankerPair))]), t._l(t.otherBet.bankerPair, function(t, a) {
                return e("other_deal", {
                    key: t.keyId,
                    class: "other-bet s" + (a + 1),
                    style: t.translateStyle,
                    attrs: {
                        name: t.name,
                        quantity: t.quantity,
                        result: t.result
                    }
                })
            }), t._l(Object.keys(t.all_val.bankerPair), function(a, n) {
                return t.all_val.bankerPair[a].display ? e("deal", {
                    key: n,
                    staticClass: "deal-comp at-right",
                    attrs: {
                        player_val: t.all_val.bankerPair[a].value,
                        type: "bankerPair",
                        count: t.count,
                        currencyType: a,
                        betSuccess: t.all_val.bankerPair[a].betSuccess,
                        betSuccessAll: t.all_val.bankerPair[a].betSuccessAll,
                        loading: t.all_val.bankerPair[a].loading,
                        payout: t.all_val.bankerPair[a].payout,
                        maxBet: t.maxBet[t.$store.state.currentCurrency].bankerPair.remain,
                        typeText: t.$store.state.currentLang.baccarat[0] + " " + t.$store.state.currentLang.baccarat[4]
                    },
                    on: {
                        sendCurrentCount: t.getCurrentCount,
                        clickBet: function(e) {
                            t.submit("bankerPair", a)
                        },
                        clear: function(e) {
                            t.clear_all("bankerPair", a)
                        },
                        children_count: function(a) {
                            t.player_display(-1, "bankerPair")
                        }
                    }
                }) : t._e()
            }), !t.isWait && t.maxBet[this.$store.state.currentCurrency].bankerPair.remain ? e("div", {
                class: "max-bet-tips " + (t.all_val.bankerPair[t.$store.state.currentCurrency].display && !t.all_val.bankerPair[t.$store.state.currentCurrency].betSuccess ? "active" : "")
            }, [t._v(t._s(t.$store.state.currentLang.baccarat[18])), e("em", [t._v(t._s(t.maxBet[t.$store.state.currentCurrency].bankerPair.remain))])]) : t._e()], 2), e("div", {
                class: "aside-bets banker ",
                style: t.screenRatio < 1.22 && t.screenRatio > .79 ? "width:31vw;max-width:4.3rem" : "",
                attrs: {
                    id: "banker" === t.isFinish_result ? "active-win" : ""
                },
                on: {
                    click: function(a) {
                        t.player_display(1, "banker")
                    },
                    contextmenu: function(a) {
                        t.player_display(-1, "banker", a)
                    }
                }
            }, [e("h4", [t._v(t._s(t.$store.state.currentLang.baccarat[0]))]), e("p", [t._v("1:" + t._s(t.payoutConfig.banker))]), t._l(t.otherBet.banker, function(t, a) {
                return e("other_deal", {
                    key: t.keyId,
                    ref: "sss",
                    refInFor: !0,
                    class: "other-bet s" + (a + 1),
                    style: t.translateStyle,
                    attrs: {
                        name: t.name,
                        quantity: t.quantity,
                        result: t.result
                    }
                })
            }), t._l(Object.keys(t.all_val.banker), function(a, n) {
                return t.all_val.banker[a].display ? e("deal", {
                    key: n,
                    staticClass: "deal-comp",
                    attrs: {
                        player_val: t.all_val.banker[a].value,
                        type: "banker",
                        count: t.count,
                        currencyType: a,
                        betSuccess: t.all_val.banker[a].betSuccess,
                        betSuccessAll: t.all_val.banker[a].betSuccessAll,
                        loading: t.all_val.banker[a].loading,
                        payout: t.all_val.banker[a].payout,
                        maxBet: t.maxBet[t.$store.state.currentCurrency].banker.remain,
                        typeText: t.$store.state.currentLang.baccarat[0]
                    },
                    on: {
                        sendCurrentCount: t.getCurrentCount,
                        clickBet: function(e) {
                            t.submit("banker", a)
                        },
                        clear: function(e) {
                            t.clear_all("banker", a)
                        },
                        children_count: function(a) {
                            t.player_display(-1, "banker")
                        }
                    }
                }) : t._e()
            }), !t.isWait && t.maxBet[this.$store.state.currentCurrency].banker.remain ? e("div", {
                class: "max-bet-tips " + (t.all_val.banker[t.$store.state.currentCurrency].display && !t.all_val.banker[t.$store.state.currentCurrency].betSuccess ? "active" : "")
            }, [t._v(t._s(t.$store.state.currentLang.baccarat[18])), e("br"), e("em", [t._v(t._s(t.maxBet[t.$store.state.currentCurrency].banker.remain))])]) : t._e()], 2), e("div", {
                class: "aside-bets player ",
                style: t.screenRatio < 1.22 && t.screenRatio > .79 ? "width:31vw;max-width:4.3rem" : "",
                attrs: {
                    id: "player" === t.isFinish_result ? "active-win" : ""
                },
                on: {
                    click: function(a) {
                        t.player_display(1, "player")
                    },
                    contextmenu: function(a) {
                        t.player_display(-1, "player", a)
                    }
                }
            }, [e("h4", [t._v(t._s(t.$store.state.currentLang.baccarat[1]))]), e("p", [t._v("1:" + t._s(t.payoutConfig.player))]), t._l(t.otherBet.player, function(t, a) {
                return e("other_deal", {
                    key: t.keyId,
                    class: "other-bet s" + (a + 1),
                    style: t.translateStyle,
                    attrs: {
                        name: t.name,
                        quantity: t.quantity,
                        result: t.result
                    }
                })
            }), t._l(Object.keys(t.all_val.player), function(a, n) {
                return t.all_val.player[a].display ? e("deal", {
                    key: n,
                    staticClass: "deal-comp",
                    attrs: {
                        player_val: t.all_val.player[a].value,
                        type: "player",
                        count: t.count,
                        currencyType: a,
                        betSuccess: t.all_val.player[a].betSuccess,
                        betSuccessAll: t.all_val.player[a].betSuccessAll,
                        loading: t.all_val.player[a].loading,
                        payout: t.all_val.player[a].payout,
                        maxBet: t.maxBet[t.$store.state.currentCurrency].player.remain,
                        typeText: t.$store.state.currentLang.baccarat[1]
                    },
                    on: {
                        sendCurrentCount: t.getCurrentCount,
                        clickBet: function(e) {
                            t.submit("player", a)
                        },
                        clear: function(e) {
                            t.clear_all("player", a)
                        },
                        children_count: function(a) {
                            t.player_display(-1, "player")
                        }
                    }
                }) : t._e()
            }), !t.isWait && t.maxBet[this.$store.state.currentCurrency].player.remain ? e("div", {
                class: "max-bet-tips " + (t.all_val.player[t.$store.state.currentCurrency].display && !t.all_val.player[t.$store.state.currentCurrency].betSuccess ? "active" : "")
            }, [t._v(t._s(t.$store.state.currentLang.baccarat[18])), e("br"), e("em", [t._v(t._s(t.maxBet[t.$store.state.currentCurrency].player.remain))])]) : t._e()], 2)]), e("select_bets", {
                class: "select-bet-bar ",
                attrs: {
                    betLimitMin: t.betLimitMin,
                    id: "select-img-list"
                },
                on: {
                    buy_val: t.buy_val_fun
                }
            }), t.gameStartRevealData ? e("pop_up") : t._e(), t.showStartBetMsg ? e("start") : t._e(), e("audioComp", {
                attrs: {
                    fileName: t.audio_.win.file,
                    play: t.audio_.win.play
                }
            }), e("audioComp", {
                attrs: {
                    fileName: t.audio_.tie.file,
                    play: t.audio_.tie.play
                }
            }), e("audioComp", {
                attrs: {
                    fileName: t.audio_.sort.file,
                    play: t.audio_.sort.play,
                    loop: !0
                }
            })], 1)
        };
        n._withStripped = !0;
        var r = {
            render: n,
            staticRenderFns: []
        };
        a.a = r
    },
    ZC0P: function(t, a, e) {
        "use strict";
        var n = e("QVop")
          , r = e("GwgP");
        a.a = {
            data: function() {
                return {
                    horse_race_array: [],
                    after_length: 0,
                    setTimeout_timer: [],
                    horse_race_running: []
                }
            },
            components: {
                bets: n.a,
                bets_other: r.a
            },
            watch: {
                "$store.state.baccarat.betRecord": {
                    handler: function(t, a) {
                        0 == t.length && (this.horse_race_array = [],
                        this.horse_race_running = [],
                        this.after_length = 0);
                        if (this.after_length != t.length) {
                            t.length,
                            this.after_length;
                            for (var e = this.after_length; e < t.length; e++)
                                this.horse_race_array.push(t[e]);
                            this.after_length = this.horse_race_array.length
                        }
                    },
                    deep: !0,
                    immediate: !0
                },
                horse_race_array: function(t) {
                    var a = this;
                    if (t[t.length - 1]) {
                        var e = t.length;
                        setTimeout(function() {
                            console.log(11, e),
                            t.length != a.horse_race_running.length && (a.horse_race_running.push(t[t.length - 1]),
                            console.log(22, a.horse_race_running.length))
                        }, 3e3)
                    }
                }
            },
            computed: {
                _betRecord: function() {
                    return this.$store.state.baccarat.betRecord instanceof Array ? this.$store.state.baccarat.betRecord : []
                }
            }
        }
    },
    "ZF/q": function(t, a, e) {
        (t.exports = e("FZ+f")(!1)).push([t.i, "\n.betting_progress[data-v-b36b3586] {\n  width: 32.64px;\n  width: 2.04rem;\n  border-radius: 0.1rem;\n  background: rgba(0, 0, 0, .2);\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  padding: 0 3px;\n  padding-bottom: 5px;\n}\n.betting_progress .betting_progress_wrap[data-v-b36b3586] {\n  width: 92%;\n  margin: 0 auto;\n}\n.betting_progress .betting_progress_wrap p[data-v-b36b3586] {\n  margin: 0;\n  font-size: 1.92px;\n  font-size: 0.12rem;\n}\n.betting_progress .betting_progress_wrap > p[data-v-b36b3586]:first-child {\n  color: #367a9d;\n  white-space: nowrap;\n  font-size: 10px;\n}\n.phone_progress[data-v-b36b3586] {\n  border-radius: 50%;\n  padding: 1.28px;\n  padding: 0.08rem;\n}\n", ""])
    },
    ZNHY: function(t, a, e) {
        (t.exports = e("FZ+f")(!1)).push([t.i, "\n.select_bet[data-v-1a0a533d] {\n  width: 100%;\n  height: 32px;\n  height: 2rem;\n  margin: 0 auto;\n  position: absolute;\n  bottom: 0;\n  left: 50%;\n  -webkit-transform: translateX(-50%);\n          transform: translateX(-50%);\n}\n.select_bet .opc[data-v-1a0a533d] {\n  display: none;\n}\n.select_bet .select_bet_wrap[data-v-1a0a533d] {\n  position: relative;\n  margin: 0 auto;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: end;\n      -ms-flex-pack: end;\n          justify-content: flex-end;\n  height: 84%;\n}\n.select_bet .select_bet_wrap .select_img[data-v-1a0a533d] {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-pack: distribute;\n      justify-content: space-around;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  margin-bottom: 1.6px;\n  margin-bottom: 0.1rem;\n}\n.select_bet .select_bet_wrap .select_img > div[data-v-1a0a533d] {\n  position: relative;\n  width: 16px;\n  width: 1rem;\n  min-width: 36px;\n  min-height: 36px;\n  -webkit-transition: all 0.4s;\n  transition: all 0.4s;\n  border-radius: 50%;\n  margin: 0 2.24px;\n  margin: 0 0.14rem;\n  cursor: pointer;\n}\n.select_bet .select_bet_wrap .select_img > div > span[data-v-1a0a533d] {\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  font-size: 3.2px;\n  font-size: 0.2rem;\n  font-weight: 600;\n}\n.select_bet .select_bet_wrap .select_img > div img[data-v-1a0a533d] {\n  width: 100%;\n}\n.select_bet .select_bet_wrap .select_total[data-v-1a0a533d] {\n  max-width: 42.88px;\n  max-width: 2.68rem;\n  width: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  font-size: 4px;\n  font-size: 0.25rem;\n  font-weight: 600;\n  color: #f7dd00;\n  max-width: 100%;\n  position: absolute;\n  bottom: 1.6px;\n  bottom: 0.1rem;\n  left: 50%;\n  -webkit-transform: translate(-50%, 132%);\n          transform: translate(-50%, 132%);\n}\n.select_bet .select_bet_wrap .select_total > .img[data-v-1a0a533d] {\n  display: inline-block;\n  width: 4.8px;\n  width: 0.3rem;\n  vertical-align: bottom;\n  margin-right: 1.12px;\n  margin-right: 0.07rem;\n}\n.select_bet .select_bet_wrap .select_total .chara[data-v-1a0a533d] {\n  vertical-align: bottom;\n  white-space: nowrap;\n  max-width: 28.8px;\n  max-width: 1.8rem;\n}\n@media screen and (max-width: 414px) {\n.select_bet[data-v-1a0a533d] {\n    height: 2.2rem;\n}\n.select_bet .select_bet_wrap .select_img > div > span[data-v-1a0a533d] {\n    font-weight: 300;\n}\n}\n", ""])
    },
    ZOko: function(t, a, e) {
        "use strict";
        var n = e("5e/Z")
          , r = e("Aj58")
          , i = !1;
        var s = function(t) {
            i || e("Zory")
        }
          , o = e("VU/8")(n.a, r.a, !1, s, "data-v-7eec7ee4", null);
        o.options.__file = "components/baccarat/sub/accumulated-income.vue",
        a.a = o.exports
    },
    Zory: function(t, a, e) {
        var n = e("Xi+U");
        "string" == typeof n && (n = [[t.i, n, ""]]),
        n.locals && (t.exports = n.locals);
        (0,
        e("rjj0").default)("403d0312", n, !1, {
            sourceMap: !1
        })
    },
    Zx67: function(t, a, e) {
        t.exports = {
            default: e("fS6E"),
            __esModule: !0
        }
    },
    a7eL: function(t, a, e) {
        "use strict";
        var n = function() {
            var t = this
              , a = t.$createElement
              , e = t._self._c || a;
            return e("div", [t.isMobile ? t._e() : e("div", {
                staticClass: "betting_progress"
            }, [e("div", {
                staticClass: "betting_progress_wrap"
            }, [e("p", {
                staticStyle: {
                    "font-size": "0.14rem"
                }
            }, [t._v(t._s(t.$store.state.currentLang.baccarat[7]) + ":  ")]), e("p", [e("el-progress", {
                attrs: {
                    "text-inside": !0,
                    "stroke-width": 13,
                    percentage: t.percentage,
                    color: t.percentage > 75 ? "red" : "#f1940f",
                    status: "exception"
                }
            })], 1)])]), t.isMobile ? e("div", {
                staticClass: "phone_progress"
            }, [e("el-progress", {
                attrs: {
                    type: "circle",
                    percentage: t.percentage,
                    width: 68,
                    "stroke-width": 9,
                    color: t.percentage > 75 ? "red" : "#cc7a21"
                }
            })], 1) : t._e()])
        };
        n._withStripped = !0;
        var r = {
            render: n,
            staticRenderFns: []
        };
        a.a = r
    },
    agh4: function(t, a, e) {
        "use strict";
        var n = e("QVop");
        a.a = {
            data: function() {
                return {
                    defalut_val: [{
                        result: "player",
                        isBankerPair: !1,
                        isPlayerPair: !1
                    }, {
                        result: "banker",
                        isBankerPair: !1,
                        isPlayerPair: !1
                    }],
                    ops: {
                        vuescroll: {
                            mode: "native",
                            detectResize: !0,
                            scroller: {
                                bouncing: !1,
                                locking: !0,
                                minZoom: 1,
                                maxZoom: 1
                            }
                        },
                        scrollPanel: {
                            scrollingY: !0,
                            initialScrollX: "50%"
                        },
                        bar: {
                            background: "gray",
                            hoverStyle: !0
                        },
                        list: null
                    }
                }
            },
            components: {
                bets: n.a
            }
        }
    },
    bDbK: function(t, a, e) {
        var n = e("5Iel");
        "string" == typeof n && (n = [[t.i, n, ""]]),
        n.locals && (t.exports = n.locals);
        (0,
        e("rjj0").default)("973a6fb4", n, !1, {
            sourceMap: !1
        })
    },
    bKmQ: function(t, a, e) {
        (t.exports = e("FZ+f")(!1)).push([t.i, "\n.betting_progress .el-progress-bar__innerText {\r\n  color: white;\n}\n.betting_progress .el-progress-bar__outer {\r\n  background: #051c2f;\n}\n.phone_progress .el-progress--circle .el-progress__text {\r\n  font-size: 11px !important;\r\n  color: #dbc201;\n}\n.betting_progress .el-progress-circle {\r\n  width: 100% !important;\r\n  height: 100% !important;\r\n  display: block;\n}\n.betting_progress .el-progress {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  width: 100% !important;\r\n  height: 100% !important;\n}\n.betting_progress .el-progress-bar__outer {\r\n  /* height: 14px !important; */\r\n  background-color: rgba(0, 0, 0, .3) !important;\n}\n.betting_progress .el-progress-bar__innerText {\r\n  font-size: 9px !important;\r\n  /* top: 0 !important ; */\r\n  margin-top: 3px;\n}\n.betting_progress .el-progress__text {\r\n  font-size: 9px !important;\r\n  color: white;\n}\r\n", ""])
    },
    bqcX: function(t, a, e) {
        "use strict";
        var n = e("F+3C")
          , r = e("5kgm")
          , i = !1;
        var s = function(t) {
            i || e("EstF")
        }
          , o = e("VU/8")(n.a, r.a, !1, s, null, null);
        o.options.__file = "components/baccarat/sub/max_bet_progress.vue",
        a.a = o.exports
    },
    "c/Tr": function(t, a, e) {
        t.exports = {
            default: e("5zde"),
            __esModule: !0
        }
    },
    "cRm+": function(t, a, e) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var n = e("NqLw")
          , r = e("uG+Q")
          , i = !1;
        var s = function(t) {
            i || e("+ftz")
        }
          , o = e("VU/8")(n.a, r.a, !1, s, "data-v-753d42d9", null);
        o.options.__file = "pages/index/baccarat.vue",
        a.default = o.exports
    },
    cYhM: function(t, a, e) {
        var n = e("r/mL");
        "string" == typeof n && (n = [[t.i, n, ""]]),
        n.locals && (t.exports = n.locals);
        (0,
        e("rjj0").default)("d75e8200", n, !1, {
            sourceMap: !1
        })
    },
    caIu: function(t, a, e) {
        "use strict";
        var n = e("HbxW")
          , r = e("T1O8")
          , i = !1;
        var s = function(t) {
            i || e("A7Pk")
        }
          , o = e("VU/8")(n.a, r.a, !1, s, "data-v-1a0565a5", null);
        o.options.__file = "components/baccarat/sub/audio_constrol.vue",
        a.a = o.exports
    },
    dpO7: function(t, a, e) {
        "use strict";
        var n = function() {
            var t = this.$createElement
              , a = this._self._c || t;
            return a("div", {
                staticClass: "pop_up"
            }, [a("img", {
                attrs: {
                    src: "/img/loading.gif",
                    alt: ""
                }
            }), a("div", {
                staticClass: "title"
            }, [a("div", {
                staticClass: "chara",
                staticStyle: {
                    color: "orange"
                }
            }, [this._v(this._s(this.$store.state.currentLang.baccarat[6]))])]), a("audios", {
                ref: "pop_up_audio",
                attrs: {
                    audio_name: "Start"
                }
            })], 1)
        };
        n._withStripped = !0;
        var r = {
            render: n,
            staticRenderFns: []
        };
        a.a = r
    },
    dqvO: function(t, a, e) {
        var n = e("mAAp");
        "string" == typeof n && (n = [[t.i, n, ""]]),
        n.locals && (t.exports = n.locals);
        (0,
        e("rjj0").default)("e7ef26be", n, !1, {
            sourceMap: !1
        })
    },
    ds7N: function(t, a, e) {
        "use strict";
        var n = function() {
            var t = this.$createElement
              , a = this._self._c || t;
            return a("div", {
                staticClass: "pop_up"
            }, [a("img", {
                attrs: {
                    src: "/img/loading.gif",
                    alt: ""
                }
            }), a("div", {
                staticClass: "title"
            }, [a("div", {
                staticClass: "chara",
                staticStyle: {
                    color: "orange"
                }
            }, [this._v(this._s(this.$store.state.currentLang.baccarat[5]))])]), a("audios", {
                ref: "pop_up_audio",
                attrs: {
                    audio_name: "Stop"
                }
            })], 1)
        };
        n._withStripped = !0;
        var r = {
            render: n,
            staticRenderFns: []
        };
        a.a = r
    },
    duPy: function(t, a, e) {
        "use strict";
        var n = function() {
            var t = this.$createElement
              , a = this._self._c || t;
            return a("div", {
                staticClass: "bets_other"
            }, ["bankerPair" == this.val.result || "bankerPair" == this.val ? a("div", {
                staticClass: "other"
            }, [a("div", {
                staticClass: "small_red"
            })]) : this._e(), "playerPair" == this.val.result || "playerPair" == this.val ? a("div", {
                staticClass: "other"
            }, [a("div", {
                staticClass: "small_blue"
            })]) : this._e()])
        };
        n._withStripped = !0;
        var r = {
            render: n,
            staticRenderFns: []
        };
        a.a = r
    },
    dyN1: function(t, a, e) {
        var n = e("PyhH");
        "string" == typeof n && (n = [[t.i, n, ""]]),
        n.locals && (t.exports = n.locals);
        (0,
        e("rjj0").default)("575ef643", n, !1, {
            sourceMap: !1
        })
    },
    fBQ2: function(t, a, e) {
        "use strict";
        var n = e("evD5")
          , r = e("X8DO");
        t.exports = function(t, a, e) {
            a in t ? n.f(t, a, r(0, e)) : t[a] = e
        }
    },
    fS6E: function(t, a, e) {
        e("Kh5d"),
        t.exports = e("FeBl").Object.getPrototypeOf
    },
    fUP3: function(t, a, e) {
        (t.exports = e("FZ+f")(!1)).push([t.i, "\n.select_bet .__vuescroll .__panel.__slide {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-align: end;\r\n      -ms-flex-align: end;\r\n          align-items: flex-end;\n}\n.select_bet .__rail-is-horizontal {\r\n  height: 4px !important;\n}\r\n", ""])
    },
    fWcD: function(t, a, e) {
        (t.exports = e("FZ+f")(!1)).push([t.i, "\n.baccarat_bet[data-v-424dca36] {\n  height: 162.4px;\n  height: 10.15rem;\n  width: 307.2px;\n  width: 19.2rem;\n  background-image: url(/img/baccarat/bg_new.jpg);\n  background-position: 0 0;\n  background-size: cover;\n  position: relative;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  left: 50%;\n  -webkit-transform: translate(-50%, 0);\n          transform: translate(-50%, 0);\n}\n.baccarat_bet .base-container[data-v-424dca36] {\n  width: 114.88px;\n  width: 7.18rem;\n  height: 49.6px;\n  height: 3.1rem;\n  border-top: none;\n  margin: 0 auto;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  position: relative;\n  z-index: 3;\n}\n.baccarat_bet .base-container .poker-box[data-v-424dca36] {\n  height: 49.6px;\n  height: 3.1rem;\n  width: 57.6px;\n  width: 3.6rem;\n  border-radius: 0 0 1.36rem 0;\n}\n.baccarat_bet .base-container .poker-box .poker-item[data-v-424dca36] {\n  width: 44px;\n  width: 2.75rem;\n  height: 28.8px;\n  height: 1.8rem;\n  position: absolute;\n  top: 5.6px;\n  top: 0.35rem;\n  left: 50%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  -webkit-transform: translateX(10%);\n          transform: translateX(10%);\n}\n.baccarat_bet .base-container .poker-box .poker-item .item[data-v-424dca36] {\n  border-radius: 0.05rem;\n  -webkit-box-flex: 0;\n      -ms-flex: 0 0 20px;\n          flex: 0 0 20px;\n  -ms-flex: 0 0 1.25rem;\n      flex: 0 0 1.25rem;\n  padding: 0.48px;\n  padding: 0.03rem;\n  height: 100%;\n}\n.baccarat_bet .base-container .poker-box .poker-item .item[data-v-424dca36]:nth-of-type(3) {\n  width: 20.16px;\n  width: 1.26rem;\n  height: 28.8px;\n  height: 1.8rem;\n  position: absolute;\n  bottom: 0;\n  left: 50%;\n  z-index: 1;\n}\n.baccarat_bet .base-container .poker-box .poker-item div.score[data-v-424dca36] {\n  position: absolute;\n  top: 35.2px;\n  top: 2.2rem;\n}\n.baccarat_bet .base-container .poker-box .poker-item div.score > h4[data-v-424dca36] {\n  font-size: 5.12px;\n  font-size: 0.32rem;\n  text-shadow: 0.16px 0.16px 0.48px #111;\n  text-shadow: 0.01rem 0.01rem 0.03rem #111;\n}\n.baccarat_bet .base-container .poker-box .poker-item div.score > p[data-v-424dca36] {\n  font-size: 5.12px;\n  font-size: 0.32rem;\n  text-shadow: 0.16px 0.16px 1.12px #111;\n  text-shadow: 0.01rem 0.01rem 0.07rem #111;\n  color: #f4d604;\n  margin-top: -0.96px;\n  margin-top: -0.06rem;\n  padding-left: 0.96px;\n  padding-left: 0.06rem;\n}\n.baccarat_bet .base-container .poker-box .poker-item div.score h4[data-v-424dca36],\n.baccarat_bet .base-container .poker-box .poker-item div.score p[data-v-424dca36] {\n  display: inline-block;\n}\n.baccarat_bet .base-container .poker-box .poker-item div.score.l[data-v-424dca36] {\n  right: 0px;\n  right: 0rem;\n}\n.baccarat_bet .base-container .poker-box .poker-item div.score.r[data-v-424dca36] {\n  position: absolute;\n  left: 0px;\n  left: 0rem;\n}\n.baccarat_bet .base-container .poker-box .poker-item.player[data-v-424dca36] {\n  -webkit-transform: translateX(-110%);\n          transform: translateX(-110%);\n}\n.baccarat_bet .base-container .poker-box-player[data-v-424dca36] {\n  border-radius: 0 0 0 1.36rem;\n}\n.baccarat_bet .base-container .poker-box-banker[data-v-424dca36] {\n  margin-left: -0.32px;\n  margin-left: -0.02rem;\n}\n.baccarat_bet h4[data-v-424dca36],\n.baccarat_bet p[data-v-424dca36] {\n  font-family: 'SimSun', 'Microsoft YaHei';\n  margin: 0;\n  color: #e6e6e6;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n.baccarat_bet #active-win h4[data-v-424dca36],\n.baccarat_bet #active-win-1 h4[data-v-424dca36],\n.baccarat_bet #active-win-2 h4[data-v-424dca36],\n.baccarat_bet #active-win p[data-v-424dca36],\n.baccarat_bet #active-win-1 p[data-v-424dca36],\n.baccarat_bet #active-win-2 p[data-v-424dca36] {\n  color: #fff;\n  position: relative;\n  z-index: 7;\n  -webkit-animation: fontShadow-data-v-424dca36 0.9s linear infinite;\n          animation: fontShadow-data-v-424dca36 0.9s linear infinite;\n}\n@-webkit-keyframes fontShadow-data-v-424dca36 {\n0% {\n    text-shadow: 0 0 0.12rem #fff;\n    font-weight: 600;\n    -webkit-transform: scale(1.1);\n            transform: scale(1.1);\n}\n50% {\n    text-shadow: 0 0 0.05rem #fff;\n    font-weight: 600;\n    -webkit-transform: scale(0.9);\n            transform: scale(0.9);\n}\n100% {\n    text-shadow: 0 0 0.12rem #fff;\n    font-weight: 600;\n    -webkit-transform: scale(1.2);\n            transform: scale(1.2);\n}\n}\n@keyframes fontShadow-data-v-424dca36 {\n0% {\n    text-shadow: 0 0 0.12rem #fff;\n    font-weight: 600;\n    -webkit-transform: scale(1.1);\n            transform: scale(1.1);\n}\n50% {\n    text-shadow: 0 0 0.05rem #fff;\n    font-weight: 600;\n    -webkit-transform: scale(0.9);\n            transform: scale(0.9);\n}\n100% {\n    text-shadow: 0 0 0.12rem #fff;\n    font-weight: 600;\n    -webkit-transform: scale(1.2);\n            transform: scale(1.2);\n}\n}\n.baccarat_bet #active-win p[data-v-424dca36]:after,\n.baccarat_bet #active-win-1 p[data-v-424dca36]:after,\n.baccarat_bet #active-win-2 p[data-v-424dca36]:after {\n  content: \"WIN\";\n  font-size: 8px;\n  font-size: 0.5rem;\n  color: #fbe452;\n  position: absolute;\n  bottom: 0;\n  left: 50%;\n  -webkit-transform: translate(-50%, 75%);\n          transform: translate(-50%, 75%);\n}\n.baccarat_bet .poker-item1.banker[data-v-424dca36] {\n  -webkit-transform: translateX(5%) translateY(0) translateZ(0);\n          transform: translateX(5%) translateY(0) translateZ(0);\n}\n.baccarat_bet .bets-5[data-v-424dca36] {\n  width: 62.4px;\n  width: 3.9rem;\n  margin: 0 auto;\n  position: relative;\n  z-index: 2;\n}\n.baccarat_bet .bets-5 .middle-bets[data-v-424dca36] {\n  width: 100%;\n  height: 24px;\n  height: 1.5rem;\n  border-top-width: 0.16px;\n  border-top-width: 0.01rem;\n  border-bottom-width: 0.16px;\n  border-bottom-width: 0.01rem;\n  position: relative;\n}\n.baccarat_bet .bets-5 .middle-bets[data-v-424dca36]:hover {\n  z-index: 4;\n}\n.baccarat_bet .bets-5 .middle-bets.bankerPair[data-v-424dca36] {\n  height: 24.32px;\n  height: 1.52rem;\n  border-bottom: none;\n}\n.baccarat_bet .bets-5 .middle-bets.bankerPair .max-bet-tips[data-v-424dca36] {\n  bottom: 1.6px;\n  bottom: 0.1rem;\n}\n.baccarat_bet .bets-5 .aside-bets[data-v-424dca36] {\n  width: 67.2px;\n  width: 4.2rem;\n  height: 90.08px;\n  height: 5.63rem;\n  position: absolute;\n  top: -16.8px;\n  top: -1.05rem;\n  padding-top: 22.4px;\n  padding-top: 1.4rem;\n}\n.baccarat_bet .bets-5 .aside-bets[data-v-424dca36]:after {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  height: 0;\n  width: 96px;\n  width: 6rem;\n  z-index: 1;\n}\n.baccarat_bet .bets-5 .aside-bets > h4[data-v-424dca36] {\n  font-size: 5.76px;\n  font-size: 0.36rem;\n  margin: 0;\n  text-align: center;\n}\n.baccarat_bet .bets-5 .aside-bets > p[data-v-424dca36] {\n  font-size: 4.48px;\n  font-size: 0.28rem;\n  margin-top: -0.8px;\n  margin-top: -0.05rem;\n  text-align: center;\n}\n.baccarat_bet .bets-5 .aside-bets:hover > h4[data-v-424dca36],\n.baccarat_bet .bets-5 .aside-bets:hover > p[data-v-424dca36] {\n  color: #eee;\n  text-shadow: 0 0 2.4px #fff;\n  text-shadow: 0 0 0.15rem #fff;\n}\n.baccarat_bet .bets-5 .aside-bets.player[data-v-424dca36] {\n  left: 0;\n  -webkit-transform: translate(-100%, 0);\n          transform: translate(-100%, 0);\n}\n.baccarat_bet .bets-5 .aside-bets.player[data-v-424dca36]:after {\n  right: 24.8px;\n  right: 1.55rem;\n}\n.baccarat_bet .bets-5 .aside-bets.banker[data-v-424dca36] {\n  right: 0;\n  -webkit-transform: translate(100%, 0);\n          transform: translate(100%, 0);\n}\n.baccarat_bet .bets-5 .aside-bets.banker[data-v-424dca36]:after {\n  left: 24.8px;\n  left: 1.55rem;\n}\n.baccarat_bet .middle-bets[data-v-424dca36],\n.baccarat_bet .aside-bets[data-v-424dca36],\n.baccarat_bet .other-bet-item[data-v-424dca36] {\n  margin: 0 auto;\n  background-color: rgba(255, 255, 255, 0);\n  text-align: center;\n  padding-top: 6.4px;\n  padding-top: 0.4rem;\n}\n.baccarat_bet .middle-bets > h4[data-v-424dca36],\n.baccarat_bet .aside-bets > h4[data-v-424dca36],\n.baccarat_bet .other-bet-item > h4[data-v-424dca36] {\n  font-size: 5.76px;\n  font-size: 0.36rem;\n  margin: 0;\n}\n.baccarat_bet .middle-bets > p[data-v-424dca36],\n.baccarat_bet .aside-bets > p[data-v-424dca36],\n.baccarat_bet .other-bet-item > p[data-v-424dca36] {\n  font-size: 4.8px;\n  font-size: 0.3rem;\n  margin-top: -0.32px;\n  margin-top: -0.02rem;\n}\n.baccarat_bet .middle-bets:hover > h4[data-v-424dca36],\n.baccarat_bet .aside-bets:hover > h4[data-v-424dca36],\n.baccarat_bet .other-bet-item:hover > h4[data-v-424dca36],\n.baccarat_bet .middle-bets:hover > p[data-v-424dca36],\n.baccarat_bet .aside-bets:hover > p[data-v-424dca36],\n.baccarat_bet .other-bet-item:hover > p[data-v-424dca36] {\n  color: #eee;\n  text-shadow: 0 0 2.4px #fff;\n  text-shadow: 0 0 0.15rem #fff;\n}\n.baccarat_bet .other-bet-item[data-v-424dca36] {\n  width: 0px;\n  width: 0rem;\n}\n.baccarat_bet .deal-comp[data-v-424dca36] {\n  left: 38%;\n  top: 38%;\n  z-index: 3;\n}\n.baccarat_bet .other-bet[data-v-424dca36] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n}\n.baccarat_bet .max-bet[data-v-424dca36] {\n  position: absolute;\n  right: 4.8px;\n  right: 0.3rem;\n  top: 0;\n  z-index: 2;\n}\n.baccarat_bet .max-bet-tips[data-v-424dca36] {\n  position: absolute;\n  left: 50%;\n  bottom: 0px;\n  bottom: 0rem;\n  z-index: 0;\n  -webkit-transform: translate(-50%, 0);\n          transform: translate(-50%, 0);\n  white-space: nowrap;\n  font-size: 12px;\n  color: #7cb597;\n  text-shadow: 0 0 4px #333;\n  max-height: 38px;\n}\n.baccarat_bet .max-bet-tips em[data-v-424dca36] {\n  font-weight: 700;\n  color: #f5dd2b;\n  font-size: 12px;\n  padding-left: 0.64px;\n  padding-left: 0.04rem;\n  opacity: 0.8;\n}\n.baccarat_bet .max-bet-tips.active[data-v-424dca36] {\n  display: none !important;\n}\n.baccarat_bet .middle-bets .max-bet-tips[data-v-424dca36],\n.baccarat_bet .aside-bets .max-bet-tips[data-v-424dca36] {\n  display: none;\n}\n.baccarat_bet .middle-bets:hover .max-bet-tips[data-v-424dca36],\n.baccarat_bet .aside-bets:hover .max-bet-tips[data-v-424dca36] {\n  display: block;\n  padding: 3px 2px 1px;\n  border-radius: 3px;\n  background-color: rgba(0, 0, 0, .4);\n}\n.baccarat_bet .aside-bets .max-bet-tips[data-v-424dca36] {\n  top: 40%;\n}\n.baccarat_bet .show-bet-result[data-v-424dca36] {\n  position: absolute;\n  left: 10%;\n  top: 27%;\n  z-index: 1;\n}\n.baccarat_bet .show-bet-result > span[data-v-424dca36] {\n  font-size: 6.4px;\n  font-size: 0.4rem;\n  color: #f9dc2b;\n  -webkit-animation: fontScale-data-v-424dca36 0.9s linear infinite;\n          animation: fontScale-data-v-424dca36 0.9s linear infinite;\n}\n@-webkit-keyframes fontScale-data-v-424dca36 {\n0% {\n    text-shadow: 0 0 0.08rem #fff;\n    font-weight: 600;\n    -webkit-transform: scale(1.05);\n            transform: scale(1.05);\n}\n50% {\n    text-shadow: 0 0 0.02rem #fff;\n    font-weight: 600;\n    -webkit-transform: scale(0.95);\n            transform: scale(0.95);\n}\n100% {\n    text-shadow: 0 0 0.08rem #fff;\n    font-weight: 600;\n    -webkit-transform: scale(1.05);\n            transform: scale(1.05);\n}\n}\n@keyframes fontScale-data-v-424dca36 {\n0% {\n    text-shadow: 0 0 0.08rem #fff;\n    font-weight: 600;\n    -webkit-transform: scale(1.05);\n            transform: scale(1.05);\n}\n50% {\n    text-shadow: 0 0 0.02rem #fff;\n    font-weight: 600;\n    -webkit-transform: scale(0.95);\n            transform: scale(0.95);\n}\n100% {\n    text-shadow: 0 0 0.08rem #fff;\n    font-weight: 600;\n    -webkit-transform: scale(1.05);\n            transform: scale(1.05);\n}\n}\n.baccarat_bet .r .show-bet-result[data-v-424dca36] {\n  -webkit-transform: rotate(40deg);\n          transform: rotate(40deg);\n}\n.baccarat_bet .l .show-bet-result[data-v-424dca36] {\n  -webkit-transform: rotate(-40deg);\n          transform: rotate(-40deg);\n}\n.baccarat_bet .select-bet-bar[data-v-424dca36] {\n  bottom: 7.2px;\n  bottom: 0.45rem;\n  width: 124px;\n  width: 7.75rem;\n  z-index: 2;\n}\n@media screen and (max-width: 0px) {\n.baccarat_bet[data-v-424dca36] {\n    margin-left: -4.94rem;\n    height: 11rem;\n}\n}\n@media screen and (max-width: 414px) {\n.baccarat_bet .aside-bets[data-v-424dca36] {\n    padding-top: 0.36rem;\n}\n.baccarat_bet .aside-bets.l[data-v-424dca36] {\n    left: 50%;\n    -webkit-transform: translateX(-140%) translateY(0) translateZ(0) rotate(40deg);\n            transform: translateX(-140%) translateY(0) translateZ(0) rotate(40deg);\n}\n.baccarat_bet .aside-bets.r[data-v-424dca36] {\n    left: 50%;\n    -webkit-transform: translateX(40%) translateY(0) translateZ(0) rotate(-40deg);\n            transform: translateX(40%) translateY(0) translateZ(0) rotate(-40deg);\n}\n.baccarat_bet div.score > p[data-v-424dca36],\n  .baccarat_bet .middle-bets > p[data-v-424dca36],\n  .baccarat_bet .other-bet-item > p[data-v-424dca36],\n  .baccarat_bet .aside-bets > p[data-v-424dca36] {\n    font-size: 0.32rem;\n}\n.baccarat_bet .max-bet-tips[data-v-424dca36] {\n    left: 50%;\n    bottom: 0rem;\n    -webkit-transform: translate(-50%, 0);\n            transform: translate(-50%, 0);\n    font-size: 11px;\n}\n.baccarat_bet .max-bet-tips em[data-v-424dca36] {\n    font-size: 11px;\n}\n.baccarat_bet .max-bet-tips.active[data-v-424dca36] {\n    display: none !important;\n}\n}\n.baccarat_bet.is-mobile-screen[data-v-424dca36] {\n  background-image: url(/img/baccarat/bg_mobile_new.jpg);\n  background-position: -1px 0;\n}\n.baccarat_bet.is-mobile-screen .base-container .poker-box .poker-item[data-v-424dca36] {\n  width: 49.6px;\n  width: 3.1rem;\n  height: 30.4px;\n  height: 1.9rem;\n  top: 4.16px;\n  top: 0.26rem;\n}\n.baccarat_bet.is-mobile-screen .base-container .poker-box .poker-item .item[data-v-424dca36] {\n  -webkit-box-flex: 0;\n      -ms-flex: 0 0 21.6px;\n          flex: 0 0 21.6px;\n  -ms-flex: 0 0 1.35rem;\n      flex: 0 0 1.35rem;\n}\n.baccarat_bet.is-mobile-screen .base-container .poker-box .poker-item .item[data-v-424dca36]:nth-of-type(3) {\n  height: 30.4px;\n  height: 1.9rem;\n  width: 21.6px;\n  width: 1.35rem;\n}\n.baccarat_bet.is-mobile-screen .base-container .poker-box div.score[data-v-424dca36] {\n  top: 36.8px;\n  top: 2.3rem;\n}\n.baccarat_bet.is-mobile-screen .base-container .poker-box div.score h4[data-v-424dca36],\n.baccarat_bet.is-mobile-screen .base-container .poker-box div.score p[data-v-424dca36] {\n  font-size: 6.4px !important;\n  font-size: 0.4rem !important;\n}\n.baccarat_bet.is-mobile-screen .base-container .poker-box div.score.l[data-v-424dca36] {\n  -webkit-box-pack: end;\n      -ms-flex-pack: end;\n          justify-content: flex-end;\n}\n.baccarat_bet.is-mobile-screen .bets-5[data-v-424dca36] {\n  width: 41.6px;\n  width: 2.6rem;\n  -webkit-transform: translate(-1px, 0);\n          transform: translate(-1px, 0);\n}\n.baccarat_bet.is-mobile-screen .bets-5 .deal-comp[data-v-424dca36] {\n  top: 22%;\n}\n.baccarat_bet.is-mobile-screen .bets-5 .aside-bets[data-v-424dca36] {\n  width: 33.3vw;\n  max-width: 390px;\n  padding-top: 22.4px;\n  padding-top: 1.4rem;\n  height: 74.08px;\n  height: 4.63rem;\n  top: 0;\n}\n.baccarat_bet.is-mobile-screen .bets-5 .aside-bets[data-v-424dca36]:after {\n  display: none;\n}\n.baccarat_bet.is-mobile-screen .bets-5 .aside-bets > p[data-v-424dca36] {\n  font-size: 6.4px;\n  font-size: 0.4rem;\n}\n.baccarat_bet.is-mobile-screen .bets-5 .aside-bets .deal-comp[data-v-424dca36] {\n  top: 36%;\n}\n.baccarat_bet.is-mobile-screen .bets-5 .aside-bets .max-bet-tips[data-v-424dca36] {\n  top: 50%;\n}\n.baccarat_bet.is-mobile-screen .bets-5 .aside-bets.banker .deal-comp[data-v-424dca36] {\n  left: 27%;\n}\n", ""])
    },
    fZOM: function(t, a, e) {
        var n = e("kM2E")
          , r = e("mbce")(!1);
        n(n.S, "Object", {
            values: function(t) {
                return r(t)
            }
        })
    },
    fdGT: function(t, a, e) {
        "use strict";
        a.a = {
            computed: {
                percentage: function() {
                    return document.body.clientWidth <= 768 ? Number(Number(this.$store.state.baccarat.usedPct).toFixed(1)) : Number(this.$store.state.baccarat.usedPct)
                }
            }
        }
    },
    gC42: function(t, a, e) {
        "use strict";
        var n = function() {
            var t = this.$createElement
              , a = this._self._c || t;
            return a("div", {
                ref: "items",
                staticClass: "poker-items"
            }, [this.show ? a("img", {
                staticClass: "img-active",
                attrs: {
                    src: "/img/poker/back.jpg",
                    alt: ""
                }
            }) : this._e(), a("div", {
                staticStyle: {
                    width: "0",
                    height: "0",
                    overflow: "hidden"
                }
            }, [a("audioComp", {
                attrs: {
                    fileName: this.audio.poker.file,
                    play: this.audio.poker.play
                }
            }), a("img", {
                attrs: {
                    src: "/img/poker/" + this.poker + ".jpg",
                    alt: ""
                }
            })], 1)])
        };
        n._withStripped = !0;
        var r = {
            render: n,
            staticRenderFns: []
        };
        a.a = r
    },
    gQnr: function(t, a, e) {
        var n = e("jC2G");
        "string" == typeof n && (n = [[t.i, n, ""]]),
        n.locals && (t.exports = n.locals);
        (0,
        e("rjj0").default)("5040795e", n, !1, {
            sourceMap: !1
        })
    },
    gRE1: function(t, a, e) {
        t.exports = {
            default: e("TmV0"),
            __esModule: !0
        }
    },
    gplx: function(t, a, e) {
        (t.exports = e("FZ+f")(!1)).push([t.i, "\n.pop_up[data-v-a09e297c] {\n  max-width: 136px;\n  max-width: 8.5rem;\n  width: 100%;\n  height: 56px;\n  height: 3.5rem;\n  border-top: 2px solid ;\n  border-bottom: 2px solid ;\n  -o-border-image: linear-gradient(to left, rgba(3, 123, 61, .2), rgba(245, 215, 2, .8), rgba(3, 123, 61, .2)) 30 0;\n     border-image: -webkit-gradient(linear, right top, left top, from(rgba(3, 123, 61, .2)), color-stop(rgba(245, 215, 2, .8)), to(rgba(3, 123, 61, .2))) 30 0;\n     border-image: linear-gradient(to left, rgba(3, 123, 61, .2), rgba(245, 215, 2, .8), rgba(3, 123, 61, .2)) 30 0;\n  background: -webkit-gradient(linear, right top, left top, from(rgba(0, 0, 0, 0)), color-stop(rgba(0, 0, 0, .4)), to(rgba(0, 0, 0, 0)));\n  background: linear-gradient(to left, rgba(0, 0, 0, 0), rgba(0, 0, 0, .4), rgba(0, 0, 0, 0));\n  position: absolute;\n  left: 50%;\n  top: 8px;\n  top: 0.5rem;\n  -webkit-transform: translate(-50%, 0%);\n          transform: translate(-50%, 0%);\n  z-index: 5;\n  text-align: center;\n  overflow: hidden;\n  -webkit-animation: pop-data-v-a09e297c 1s linear;\n          animation: pop-data-v-a09e297c 1s linear;\n  padding-top: 9.28px;\n  padding-top: 0.58rem;\n}\n.pop_up > img[data-v-a09e297c] {\n  margin-top: 3.2px;\n  margin-top: 0.2rem;\n}\n.pop_up .title[data-v-a09e297c] {\n  height: 6.72px;\n  height: 0.42rem;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: end;\n      -ms-flex-align: end;\n          align-items: flex-end;\n}\n.pop_up .title .chara[data-v-a09e297c] {\n  font-size: 4.8px;\n  font-size: 0.3rem;\n  font-weight: 900;\n}\n@media screen and (max-width: 500px) {\n.pop_up > img[data-v-a09e297c] {\n    display: block;\n    width: 20vw;\n    margin: 0 auto 0.3rem;\n}\n}\n@-webkit-keyframes pop-data-v-a09e297c {\n0% {\n    width: 1%;\n    height: 0.04rem;\n    opacity: 0;\n}\n25% {\n    width: 1%;\n}\n50% {\n    width: 1%;\n    height: 3.5rem;\n}\n75% {\n    width: 50%;\n    height: 3.5rem;\n}\n100% {\n    opacity: 1;\n    width: 100%;\n    height: 3.5rem;\n}\n}\n@keyframes pop-data-v-a09e297c {\n0% {\n    width: 1%;\n    height: 0.04rem;\n    opacity: 0;\n}\n25% {\n    width: 1%;\n}\n50% {\n    width: 1%;\n    height: 3.5rem;\n}\n75% {\n    width: 50%;\n    height: 3.5rem;\n}\n100% {\n    opacity: 1;\n    width: 100%;\n    height: 3.5rem;\n}\n}\n", ""])
    },
    h0p6: function(t, a, e) {
        var n = e("SHyG");
        "string" == typeof n && (n = [[t.i, n, ""]]),
        n.locals && (t.exports = n.locals);
        (0,
        e("rjj0").default)("52ad7b19", n, !1, {
            sourceMap: !1
        })
    },
    hKCo: function(t, a, e) {
        (t.exports = e("FZ+f")(!1)).push([t.i, "", ""])
    },
    hdGj: function(t, a, e) {
        "use strict";
        var n = e("jJgY")
          , r = e("PZcJ")
          , i = !1;
        var s = function(t) {
            i || (e("IKhs"),
            e("sTdI"))
        }
          , o = e("VU/8")(n.a, r.a, !1, s, "data-v-1a0a533d", null);
        o.options.__file = "components/baccarat/sub/select_bets2.vue",
        a.a = o.exports
    },
    hiIt: function(t, a, e) {
        "use strict";
        var n = e("WoP/")
          , r = e("Aud9")
          , i = !1;
        var s = function(t) {
            i || e("AtFV")
        }
          , o = e("VU/8")(n.a, r.a, !1, s, "data-v-3dcfca9e", null);
        o.options.__file = "components/baccarat/sub/betting_state.vue",
        a.a = o.exports
    },
    hj09: function(t, a, e) {
        "use strict";
        var n = function() {
            var t = this.$createElement;
            return (this._self._c || t)("div", {
                staticClass: "crown"
            })
        };
        n._withStripped = !0;
        var r = {
            render: n,
            staticRenderFns: []
        };
        a.a = r
    },
    i56X: function(t, a, e) {
        "use strict";
        var n = function() {
            var t = this
              , a = t.$createElement
              , e = t._self._c || a;
            return e("div", {
                staticClass: "top-punter"
            }, [e("div", {
                staticClass: "title1"
            }, [e("i", {
                staticClass: "fa fa-bar-chart"
            }), e("span", {
                staticStyle: {
                    "margin-left": "0.1rem"
                }
            }, [t._v(t._s(t.$store.state.currentLang.baccarat[28]))])]), t.$store.state.baccarat.betTopData ? e("div", {
                staticClass: "current_allBet_wrap"
            }, [e("div", [e("div", [e("bets", {
                attrs: {
                    val: t.defalut_val[0]
                }
            })], 1), t.$store.state.baccarat.betTopData.player.topBets ? e("div", [e("p", {
                staticStyle: {
                    margin: "0",
                    "white-space": "nowrap"
                }
            }, [t._v(t._s(t.$store.state.currentLang.baccarat[29]) + ":"), e("span", {
                staticClass: "current_allBet_yellow"
            }, [t._v(t._s(t.$store.state.baccarat.betTopData.player.subTotal))])]), e("p", {
                staticStyle: {
                    margin: "0",
                    "white-space": "nowrap"
                }
            }, [t._v(t._s(t.$store.state.baccarat.betTopData.player.topBets ? t.$store.state.baccarat.betTopData.player.topBets.username : "") + " "), e("span", {
                staticClass: "current_allBet_yellow"
            }, [t._v(t._s(t.$store.state.baccarat.betTopData.player.topBets ? t.$store.state.baccarat.betTopData.player.topBets.amount : "--"))])])]) : t._e(), t.$store.state.baccarat.betTopData.player.topBets ? t._e() : e("div", [t._v("\n                    --\n                ")])]), e("div", [e("div", [e("bets", {
                attrs: {
                    val: t.defalut_val[1]
                }
            })], 1), t.$store.state.baccarat.betTopData.banker.topBets ? e("div", [e("p", {
                staticStyle: {
                    margin: "0",
                    "white-space": "nowrap"
                }
            }, [t._v(t._s(t.$store.state.currentLang.baccarat[29]) + ":"), e("span", {
                staticClass: "current_allBet_yellow"
            }, [t._v(t._s(t.$store.state.baccarat.betTopData.banker.subTotal))])]), e("p", {
                staticStyle: {
                    margin: "0",
                    "white-space": "nowrap"
                }
            }, [t._v(t._s(t.$store.state.baccarat.betTopData.banker.topBets ? t.$store.state.baccarat.betTopData.banker.topBets.username : "") + " "), e("span", {
                staticClass: "current_allBet_yellow"
            }, [t._v(t._s(t.$store.state.baccarat.betTopData.banker.topBets ? t.$store.state.baccarat.betTopData.banker.topBets.amount : "--"))])])]) : t._e(), t.$store.state.baccarat.betTopData.banker.topBets ? t._e() : e("div", [t._v("\n                    --\n                ")])]), e("div", [e("div", [e("bets", {
                attrs: {
                    val: t.defalut_val[2]
                }
            })], 1), t.$store.state.baccarat.betTopData.tie.topBets ? e("div", [e("p", {
                staticStyle: {
                    margin: "0",
                    "white-space": "nowrap"
                }
            }, [t._v(t._s(t.$store.state.currentLang.baccarat[29]) + ":"), e("span", {
                staticClass: "current_allBet_yellow"
            }, [t._v(t._s(t.$store.state.baccarat.betTopData.tie.subTotal))])]), e("p", {
                staticStyle: {
                    margin: "0",
                    "white-space": "nowrap"
                }
            }, [t._v(t._s(t.$store.state.baccarat.betTopData.tie.topBets ? t.$store.state.baccarat.betTopData.tie.topBets.username : "") + " "), e("span", {
                staticClass: "current_allBet_yellow"
            }, [t._v(t._s(t.$store.state.baccarat.betTopData.tie.topBets ? t.$store.state.baccarat.betTopData.tie.topBets.amount : "--"))])])]) : t._e(), t.$store.state.baccarat.betTopData.tie.topBets ? t._e() : e("div", [t._v("\n                    --\n                ")])]), e("div", [e("bets_other", {
                attrs: {
                    val: "bankerPair"
                }
            }), t.$store.state.baccarat.betTopData.bankerPair.topBets ? e("div", [e("p", {
                staticStyle: {
                    margin: "0",
                    "white-space": "nowrap"
                }
            }, [t._v(t._s(t.$store.state.currentLang.baccarat[29]) + ":"), e("span", {
                staticClass: "current_allBet_yellow"
            }, [t._v(t._s(t.$store.state.baccarat.betTopData.bankerPair.subTotal))])]), e("p", {
                staticStyle: {
                    margin: "0",
                    "white-space": "nowrap"
                }
            }, [t._v(t._s(t.$store.state.baccarat.betTopData.bankerPair.topBets ? t.$store.state.baccarat.betTopData.bankerPair.topBets.username : "") + " "), e("span", {
                staticClass: "current_allBet_yellow"
            }, [t._v(t._s(t.$store.state.baccarat.betTopData.bankerPair.topBets ? t.$store.state.baccarat.betTopData.bankerPair.topBets.amount : "--"))])])]) : t._e(), t.$store.state.baccarat.betTopData.bankerPair.topBets ? t._e() : e("div", [t._v("\n                    --\n                ")])], 1), e("div", [e("bets_other", {
                attrs: {
                    val: "playerPair"
                }
            }), t.$store.state.baccarat.betTopData.playerPair.topBets ? e("div", [e("p", {
                staticStyle: {
                    margin: "0",
                    "white-space": "nowrap"
                }
            }, [t._v(t._s(t.$store.state.currentLang.baccarat[29]) + ":"), e("span", {
                staticClass: "current_allBet_yellow"
            }, [t._v(t._s(t.$store.state.baccarat.betTopData.playerPair.subTotal))])]), e("p", {
                staticStyle: {
                    margin: "0",
                    "white-space": "nowrap"
                }
            }, [t._v(t._s(t.$store.state.baccarat.betTopData.playerPair.topBets ? t.$store.state.baccarat.betTopData.playerPair.topBets.username : "") + " "), e("span", {
                staticClass: "current_allBet_yellow"
            }, [t._v(t._s(t.$store.state.baccarat.betTopData.playerPair.topBets ? t.$store.state.baccarat.betTopData.playerPair.topBets.amount : "--"))])])]) : t._e(), t.$store.state.baccarat.betTopData.playerPair.topBets ? t._e() : e("div", [t._v("\n                    --\n                ")])], 1)]) : t._e(), t.total ? e("div", {
                staticClass: "title2"
            }, [e("span", {
                staticStyle: {
                    "margin-left": "0.1rem",
                    "white-space": "nowrap"
                }
            }, [t._v(t._s(t.$store.state.currentLang.baccarat[27]) + "   ")]), e("span", {
                staticClass: "current_allBet_yellow",
                staticStyle: {
                    "white-space": "nowrap"
                }
            }, [t._v(t._s(t.total))])]) : t._e()])
        };
        n._withStripped = !0;
        var r = {
            render: n,
            staticRenderFns: []
        };
        a.a = r
    },
    j1xC: function(t, a, e) {
        "use strict";
        var n = function() {
            var t = this
              , a = t.$createElement
              , e = t._self._c || a;
            return e("div", {
                staticClass: "current-allBet-log"
            }, [e("div", {
                staticClass: "title"
            }, [e("i", {
                staticClass: "fa fa-list-alt"
            }), e("span", {
                staticStyle: {
                    "margin-left": "0.1rem"
                }
            }, [t._v(t._s(t.$store.state.currentLang.baccarat[25]))])]), e("el-scrollbar", {
                staticStyle: {
                    height: "90%"
                }
            }, [e("div", {
                staticClass: "current-allBet-wrap"
            }, [e("div", {
                staticClass: "scroll-wrap"
            }, t._l(t._betRecord, function(a, n) {
                return e("div", {
                    key: n
                }, [e("div", ["banker" == a.item || "player" == a.item || "tie" == a.item ? e("bets", {
                    attrs: {
                        val: a.item
                    }
                }) : t._e(), e("bets_other", {
                    attrs: {
                        val: a.item
                    }
                })], 1), e("div", {
                    staticStyle: {
                        "white-space": "nowrap"
                    }
                }, [t._v(t._s(a.username))]), e("div", {
                    staticClass: "current-allBet_yellow"
                }, [t._v(t._s(a.betAsset))])])
            }))])])], 1)
        };
        n._withStripped = !0;
        var r = {
            render: n,
            staticRenderFns: []
        };
        a.a = r
    },
    j9Fs: function(t, a, e) {
        "use strict";
        var n = function() {
            var t = this.$createElement;
            this._self._c;
            return this._m(0)
        };
        n._withStripped = !0;
        var r = {
            render: n,
            staticRenderFns: [function() {
                var t = this.$createElement
                  , a = this._self._c || t;
                return a("div", {
                    staticClass: "spinner"
                }, [a("div", {
                    staticClass: "rect1"
                }), a("div", {
                    staticClass: "rect2"
                }), a("div", {
                    staticClass: "rect3"
                })])
            }
            ]
        };
        a.a = r
    },
    jC2G: function(t, a, e) {
        (t.exports = e("FZ+f")(!1)).push([t.i, "\n.baccarat-andio-comp {\n  height: 0px;\n  width: 0px;\n  overflow: hidden;\n}\n", ""])
    },
    jJgY: function(t, a, e) {
        "use strict";
        var n = e("mvHQ")
          , r = e.n(n)
          , i = e("BO1k")
          , s = e.n(i)
          , o = e("2qup");
        a.a = {
            data: function() {
                return {
                    bets_img: this.$config.baccarat.bets_img,
                    ops: {
                        vuescroll: {
                            mode: "native",
                            detectResize: !0,
                            scroller: {
                                bouncing: [],
                                locking: !0,
                                minZoom: 1,
                                maxZoom: 1
                            }
                        },
                        scrollPanel: {
                            scrollingY: !1
                        },
                        bar: {
                            background: "gray",
                            showDelay: 200
                        }
                    },
                    array_gather: this.$config.baccarat.array_gather,
                    bet_array: [],
                    record: "",
                    audio_name: ""
                }
            },
            components: {
                audios: o.a
            },
            props: ["betLimitMin"],
            watch: {
                betLimitMin: {
                    handler: function(t, a) {
                        this.bet_array = [],
                        this.record = "",
                        t || (t = .1),
                        this.detection(Number(t))
                    },
                    immediate: !0,
                    deep: !0
                }
            },
            methods: {
                stop_drap: function(t) {
                    console.log(123),
                    t.preventDefault()
                },
                self_adapain: function() {
                    var t = this
                      , a = document.documentElement.clientHeight
                      , e = (document.documentElement.clientWidth,
                    void 0)
                      , n = void 0;
                    this.$nextTick(function() {
                        if (t.$refs.select_bet_wrap && (a < 842 ? (e = Number(((842 - a) / 20).toFixed(2)),
                        t.$refs.select_bet_wrap.style.height = 76 + e + "%") : t.$refs.select_bet_wrap.style.height = "80%"),
                        t.$refs.bet)
                            if (a <= 324) {
                                var r = !0
                                  , i = !1
                                  , o = void 0;
                                try {
                                    for (var c, l = s()(t.$refs.bet); !(r = (c = l.next()).done); r = !0) {
                                        var b = c.value;
                                        b.style.minWidth = "32px",
                                        b.style.minHeight = "32px"
                                    }
                                } catch (t) {
                                    i = !0,
                                    o = t
                                } finally {
                                    try {
                                        !r && l.return && l.return()
                                    } finally {
                                        if (i)
                                            throw o
                                    }
                                }
                            } else {
                                var d = !0
                                  , p = !1
                                  , m = void 0;
                                try {
                                    for (var u, f = s()(t.$refs.bet); !(d = (u = f.next()).done); d = !0) {
                                        var h = u.value;
                                        h.style.minWidth = "36px",
                                        h.style.minHeight = "36px"
                                    }
                                } catch (t) {
                                    p = !0,
                                    m = t
                                } finally {
                                    try {
                                        !d && f.return && f.return()
                                    } finally {
                                        if (p)
                                            throw m
                                    }
                                }
                            }
                        t.$refs.select_bet && (a < 842 ? (n = Number(((842 - a) / 700).toFixed(2)),
                        t.$refs.select_bet.style.bottom = .45 + n + "rem") : t.$refs.select_bet.style.bottom = "0.6rem")
                    })
                },
                detection: function(t, a, e) {
                    var n = this;
                    if (t) {
                        for (var i = JSON.parse(r()(this.bets_img)), s = 0; s < this.array_gather.length; s++)
                            if (t == this.array_gather[s]) {
                                for (var o = [], c = s; c < s + i.length; c++)
                                    this.array_gather[c] && o.push(this.array_gather[c]);
                                for (var l = 0; l < i.length; l++)
                                    this.bet_array.push(i[l]),
                                    o[l] >= this.array_gather[this.array_gather.length - 1] ? this.bet_array[l].val = "" : this.bet_array[l].val = o[l];
                                for (var b = 0; b < this.bet_array.length; b++)
                                    if (this.bet_array[0].val == this.bets_img[b].val)
                                        for (var d = this.bets_img[b].index, p = 0; p < this.bet_array.length; p++)
                                            this.bet_array[p].src = this.bets_img[p + d] ? this.bets_img[p + d].src : "",
                                            this.bet_array[p].font_color = this.bets_img[p + d] ? this.bets_img[p + d].font_color : ""
                            }
                        this.$nextTick(function() {
                            n.select_bet("")
                        })
                    }
                },
                hoverout: function(t) {
                    this.$refs.bet[t].style.boxShadow = "none"
                },
                hover: function(t) {
                    this.$refs.bet[t].style.boxShadow = "0 0 0.3rem " + this.bet_array[t].font_color
                },
                init: function() {},
                select_bet: function(t, a) {
                    if (t) {
                        var e = void 0;
                        this.$store.state.baccarat.audio.open && ("5000" == t ? this.$refs.rainbow && this.$refs.rainbow.$el.children[0].play() : "1000" == t ? this.$refs.gold && this.$refs.gold.$el.children[0].play() : this.$refs.red && this.$refs.red.$el.children[0].play());
                        for (var n = 0; n < this.bet_array.length; n++)
                            a == this.bet_array[n].index && (e = n);
                        if ("translateY(-30%)" == this.$refs.bet[e].style.transform)
                            this.$emit("buy_val", 0),
                            this.$refs.bet[e].style.transform = "translateY(0)",
                            this.$refs.bet[e].style.boxShadow = "0 0 0.3rem" + this.bet_array[e].font_color;
                        else {
                            this.$emit("buy_val", Number(t));
                            for (var r = 0; r < this.bet_array.length; r++)
                                this.$refs.bet[r].style.transform = "translateY(0)",
                                this.$refs.bet[r].style.boxShadow = "";
                            this.$refs.bet[e].style.transform = "translateY(-30%)",
                            this.$refs.bet[e].style.boxShadow = "0 0 0.3rem" + this.bet_array[e].font_color
                        }
                    } else {
                        for (var i = 0; i < this.$refs.bet.length; i++)
                            this.$refs.bet[i].style.transform = "translateY(0)",
                            this.$refs.bet[i].style.boxShadow = "";
                        this.$emit("buy_val", 0)
                    }
                }
            },
            mounted: function() {
                var t = this;
                this.$nextTick(function() {
                    t.self_adapain(),
                    window.addEventListener("resize", function() {
                        t.self_adapain()
                    })
                })
            }
        }
    },
    jKPN: function(t, a, e) {
        var n = e("Vj8r");
        "string" == typeof n && (n = [[t.i, n, ""]]),
        n.locals && (t.exports = n.locals);
        (0,
        e("rjj0").default)("c4e62a76", n, !1, {
            sourceMap: !1
        })
    },
    jdM9: function(t, a, e) {
        var n = e("Lapo");
        "string" == typeof n && (n = [[t.i, n, ""]]),
        n.locals && (t.exports = n.locals);
        (0,
        e("rjj0").default)("b0b50a3e", n, !1, {
            sourceMap: !1
        })
    },
    jqu2: function(t, a, e) {
        "use strict";
        a.a = {
            data: function() {
                return {}
            },
            props: ["val"],
            watch: {
                val: function(t) {}
            },
            mounted: function() {}
        }
    },
    k8Ja: function(t, a, e) {
        (t.exports = e("FZ+f")(!1)).push([t.i, "\n.bet_result_table[data-v-c0167d2c] {\n  width: 100%;\n  height: 272px;\n  min-height: 200px;\n  background-color: rgba(0, 0, 0, .3);\n  border: 1px solid rgba(245, 240, 240, .4);\n  z-index: 3;\n}\n.bet_result_table .title[data-v-c0167d2c] {\n  height: 15%;\n  border-bottom: 1px solid rgba(245, 240, 240, .4);\n  padding: 1.6px 1.28px;\n  padding: 0.1rem 0.08rem;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  background-color: rgba(0, 0, 0, .3);\n  -ms-flex-pack: distribute;\n      justify-content: space-around;\n}\n.bet_result_table .title > div[data-v-c0167d2c] {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -ms-flex-line-pack: center;\n      align-content: center;\n}\n.bet_result_table .title > div > div[data-v-c0167d2c] {\n  vertical-align: middle;\n  margin: 0 0.8px;\n  margin: 0 0.05rem;\n}\n.bet_result_table .title > div > div[data-v-c0167d2c]:last-child {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n.bet_result_table .bet_result_wrap[data-v-c0167d2c] {\n  width: 100%;\n  height: 85%;\n  z-index: 2;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-line-pack: center;\n      align-content: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n}\n.bet_result_table .bet_result_wrap .result_wrap[data-v-c0167d2c] {\n  width: 100%;\n  height: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-pack: start;\n      -ms-flex-pack: start;\n          justify-content: flex-start;\n  padding: 7px 0;\n}\n.bet_result_table .bet_result_wrap .result_wrap > div[data-v-c0167d2c] {\n  width: 32px;\n  height: 32px;\n  margin: 0.32px 0.64px;\n  margin: 0.02rem 0.04rem;\n  background: rgba(187, 185, 185, .3);\n  border-radius: 0.06rem;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n}\n", ""])
    },
    km5A: function(t, a, e) {
        "use strict";
        var n = e("TLzd")
          , r = e("Ymi/")
          , i = !1;
        var s = function(t) {
            i || (e("vCqz"),
            e("Lxox"))
        }
          , o = e("VU/8")(n.a, r.a, !1, s, "data-v-424dca36", null);
        o.options.__file = "components/baccarat/baccarat_bet.vue",
        a.a = o.exports
    },
    lEL9: function(t, a, e) {
        "use strict";
        var n = e("QVop")
          , r = e("GwgP");
        a.a = {
            data: function() {
                return {
                    defalut_val: [{
                        result: "player",
                        isBankerPair: !1,
                        isPlayerPair: !1
                    }, {
                        result: "banker",
                        isBankerPair: !1,
                        isPlayerPair: !1
                    }, {
                        result: "tie",
                        isBankerPair: !1,
                        isPlayerPair: !1
                    }, {
                        result: "player",
                        isBankerPair: !0,
                        isPlayerPair: !1
                    }, {
                        result: "banker",
                        isBankerPair: !1,
                        isPlayerPair: !0
                    }],
                    null_chara: this.$store.state.currentLang.baccarat[22]
                }
            },
            components: {
                bets: n.a,
                bets_other: r.a
            },
            watch: {
                "$store.state.baccarat.betTopData": function(t) {}
            },
            computed: {
                total: function() {
                    var t = []
                      , a = 0
                      , e = "";
                    try {
                        for (var n in this.$store.state.baccarat.betTopData)
                            t.push(),
                            a += Number(this.$store.state.baccarat.betTopData[n].subTotal.split(" ")[0]),
                            e || (e = this.$store.state.baccarat.betTopData[n].subTotal.split(" ")[1]);
                        return 0 === Number(a) ? "" : a.toFixed(4) + " " + e
                    } catch (t) {
                        return ""
                    }
                }
            },
            mounted: function() {}
        }
    },
    lHGo: function(t, a, e) {
        (t.exports = e("FZ+f")(!1)).push([t.i, "\n.count_down_01[data-v-e73221bc] {\n  width: 32.64px;\n  width: 2.04rem;\n  height: 16.96px;\n  height: 1.06rem;\n  padding: 0.64px 1.44px;\n  padding: 0.04rem 0.09rem;\n}\n.count_down_01 > div.clock-view[data-v-e73221bc] {\n  width: 100%;\n  height: 100%;\n  background: url(/img/count_down.png);\n  background-repeat: no-repeat;\n  background-size: 100% 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  padding: 2.24px 0;\n  padding: 0.14rem 0;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  border-radius: 0.14rem;\n  -webkit-box-shadow: 0 0 0.4rem #444343;\n          box-shadow: 0 0 0.4rem #444343;\n}\n.count_down_01 > div.clock-view p[data-v-e73221bc]:first-child {\n  font-size: 2.24px;\n  font-size: 0.14rem;\n  color: #b69e91;\n  font-weight: 600;\n  margin: 0 ;\n}\n.count_down_01 > div.clock-view p[data-v-e73221bc]:last-child {\n  font-size: 4.8px;\n  font-size: 0.3rem;\n  color: #f8db00;\n  text-shadow: 0 0 1.6px #f8db00;\n  text-shadow: 0 0 0.1rem #f8db00;\n  font-weight: 600;\n  margin: 0 ;\n}\n", ""])
    },
    lwRF: function(t, a, e) {
        "use strict";
        var n = e("Kv33")
          , r = e("Y6cx")
          , i = !1;
        var s = function(t) {
            i || e("bDbK")
        }
          , o = e("VU/8")(n.a, r.a, !1, s, "data-v-49255abc", null);
        o.options.__file = "components/baccarat/sub/deal.vue",
        a.a = o.exports
    },
    mAAp: function(t, a, e) {
        (t.exports = e("FZ+f")(!1)).push([t.i, "\n.current-allBet-log[data-v-653670cb] {\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, .3);\n  border: 1px solid rgba(245, 240, 240, .4);\n  overflow: hidden;\n}\n.current-allBet-log .title[data-v-653670cb] {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  padding: 1.6px 0;\n  padding: 0.1rem 0;\n  border-bottom: 1px solid rgba(245, 240, 240, .4);\n  background: rgba(0, 0, 0, .4);\n  font-size: 14px;\n}\n.current-allBet-log .current-allBet_yellow[data-v-653670cb] {\n  color: #fadb00;\n  font-weight: 600;\n  text-shadow: 0 0 3px #fadb00;\n}\n.current-allBet-log .current-allBet-wrap[data-v-653670cb] {\n  width: 100%;\n  height: 90%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -ms-flex-pack: distribute;\n      justify-content: space-around;\n  -webkit-box-align: start;\n      -ms-flex-align: start;\n          align-items: flex-start;\n  font-size: 12px;\n}\n.current-allBet-log .current-allBet-wrap .scroll-wrap[data-v-653670cb] {\n  padding: 1.6px;\n  padding: 0.1rem;\n}\n.current-allBet-log .current-allBet-wrap .scroll-wrap > div[data-v-653670cb] {\n  width: 100%;\n  padding: 1.6px 0;\n  padding: 0.1rem 0;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-pack: start;\n      -ms-flex-pack: start;\n          justify-content: flex-start;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  white-space: nowrap;\n}\n.current-allBet-log .current-allBet-wrap .scroll-wrap > div > div[data-v-653670cb]:nth-child(2) {\n  min-width: 35%;\n  margin-left: 13%;\n}\n.current-allBet-log .current-allBet-wrap .scroll-wrap > div > div[data-v-653670cb]:nth-child(3) {\n  margin-left: 20px;\n}\n", ""])
    },
    mbce: function(t, a, e) {
        var n = e("lktj")
          , r = e("TcQ7")
          , i = e("NpIQ").f;
        t.exports = function(t) {
            return function(a) {
                for (var e, s = r(a), o = n(s), c = o.length, l = 0, b = []; c > l; )
                    i.call(s, e = o[l++]) && b.push(t ? [e, s[e]] : s[e]);
                return b
            }
        }
    },
    nGcV: function(t, a, e) {
        (t.exports = e("FZ+f")(!1)).push([t.i, "\n.baccarat_audio[data-v-39d2e8b6] {\n  position: absolute;\n  display: none;\n}\n", ""])
    },
    p0uR: function(t, a, e) {
        var n = e("ZF/q");
        "string" == typeof n && (n = [[t.i, n, ""]]),
        n.locals && (t.exports = n.locals);
        (0,
        e("rjj0").default)("84034404", n, !1, {
            sourceMap: !1
        })
    },
    ppPR: function(t, a, e) {
        "use strict";
        var n = function() {
            var t = this
              , a = t.$createElement
              , e = t._self._c || a;
            return e("div", {
                staticClass: "bet_result_table2"
            }, [e("div", {
                staticClass: "title"
            }, [e("div", {
                staticClass: "chara_circle"
            }, [e("bets", {
                attrs: {
                    val: t.defalut_val[0]
                }
            }), e("bets", {
                attrs: {
                    val: t.defalut_val[1]
                }
            })], 1), t._m(0), t._m(1), t._m(2)]), e("vue-scroll", {
                attrs: {
                    ops: t.ops
                }
            }, [e("div", {
                staticClass: "first_result"
            }, t._l(162, function(t, a) {
                return e("div", {
                    key: a,
                    staticClass: "bets_result_wrap"
                })
            })), e("div", {
                staticClass: "second_result"
            }, t._l(81, function(t, a) {
                return e("div", {
                    key: a,
                    staticClass: "bets_result_wrap"
                })
            })), e("div", {
                staticClass: "thirdly_result"
            }, [t._l(39, function(t, a) {
                return e("div", {
                    key: a,
                    staticClass: "bets_result_wrap"
                })
            }), t._l(39, function(t, a) {
                return e("div", {
                    key: a,
                    staticClass: "bets_result_wrap"
                })
            })], 2)])], 1)
        };
        n._withStripped = !0;
        var r = {
            render: n,
            staticRenderFns: [function() {
                var t = this.$createElement
                  , a = this._self._c || t;
                return a("div", {
                    staticClass: "hollow_circle"
                }, [a("div", {
                    staticClass: "circle"
                }), a("div", {
                    staticClass: "circle"
                })])
            }
            , function() {
                var t = this.$createElement
                  , a = this._self._c || t;
                return a("div", {
                    staticClass: "solid_circle"
                }, [a("div", {
                    staticClass: "circle"
                }), a("div", {
                    staticClass: "circle"
                })])
            }
            , function() {
                var t = this.$createElement
                  , a = this._self._c || t;
                return a("div", {
                    staticClass: "bias"
                }, [a("div"), a("div")])
            }
            ]
        };
        a.a = r
    },
    "q/v8": function(t, a, e) {
        (t.exports = e("FZ+f")(!1)).push([t.i, "\n.bet[data-v-41501d84] {\n  font-family: 'Microsoft';\n}\n.bet > div[data-v-41501d84] {\n  width: 26px;\n  height: 26px;\n  border-radius: 50%;\n  color: white;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  position: relative;\n  font-size: 12px;\n}\n.bet > div > div[data-v-41501d84] {\n  width: 8px;\n  height: 8px;\n}\n.bet > div .small_red[data-v-41501d84] {\n  position: absolute;\n  left: -1px;\n  top: -1px;\n  border-radius: 50%;\n  background: #b21d30;\n  border: 1px solid #ab9859;\n}\n.bet > div .small_blue[data-v-41501d84] {\n  position: absolute;\n  right: -1px;\n  bottom: -1px;\n  border-radius: 50%;\n  background: #283185;\n  border: 1px solid #ab9859;\n}\n.bet .he[data-v-41501d84] {\n  background: #166538;\n}\n.bet .zhuang[data-v-41501d84] {\n  background: #b11c2f;\n}\n.bet .xian[data-v-41501d84] {\n  background: #253385;\n}\n.bet .other[data-v-41501d84] {\n  background: #cccccc;\n}\n", ""])
    },
    q0nB: function(t, a, e) {
        "use strict";
        var n = e("TcPW")
          , r = e("dpO7")
          , i = !1;
        var s = function(t) {
            i || e("udCQ")
        }
          , o = e("VU/8")(n.a, r.a, !1, s, "data-v-a09e297c", null);
        o.options.__file = "components/baccarat/sub/start.vue",
        a.a = o.exports
    },
    quWa: function(t, a, e) {
        var n = e("Emif");
        "string" == typeof n && (n = [[t.i, n, ""]]),
        n.locals && (t.exports = n.locals);
        (0,
        e("rjj0").default)("725e04bf", n, !1, {
            sourceMap: !1
        })
    },
    qyJz: function(t, a, e) {
        "use strict";
        var n = e("+ZMJ")
          , r = e("kM2E")
          , i = e("sB3e")
          , s = e("msXi")
          , o = e("Mhyx")
          , c = e("QRG4")
          , l = e("fBQ2")
          , b = e("3fs2");
        r(r.S + r.F * !e("dY0y")(function(t) {
            Array.from(t)
        }), "Array", {
            from: function(t) {
                var a, e, r, d, p = i(t), m = "function" == typeof this ? this : Array, u = arguments.length, f = u > 1 ? arguments[1] : void 0, h = void 0 !== f, v = 0, g = b(p);
                if (h && (f = n(f, u > 2 ? arguments[2] : void 0, 2)),
                void 0 == g || m == Array && o(g))
                    for (e = new m(a = c(p.length)); a > v; v++)
                        l(e, v, h ? f(p[v], v) : p[v]);
                else
                    for (d = g.call(p),
                    e = new m; !(r = d.next()).done; v++)
                        l(e, v, h ? s(d, f, [r.value, v], !0) : r.value);
                return e.length = v,
                e
            }
        })
    },
    "r/mL": function(t, a, e) {
        (t.exports = e("FZ+f")(!1)).push([t.i, "\n.top-punter .el-scrollbar__wrap {\r\n  overflow-x: hidden;\n}\r\n", ""])
    },
    rtgh: function(t, a, e) {
        "use strict";
        var n = function() {
            var t = this.$createElement
              , a = this._self._c || t;
            return a("div", {
                staticClass: "baccarat-andio-comp"
            }, [a("audio", {
                ref: "audioTag",
                attrs: {
                    loop: this.loop
                }
            }, [a("source", {
                attrs: {
                    src: "/audio/baccarat/MP3/" + this.fileName + ".mp3",
                    type: "audio/mpeg"
                }
            })])])
        };
        n._withStripped = !0;
        var r = {
            render: n,
            staticRenderFns: []
        };
        a.a = r
    },
    sTdI: function(t, a, e) {
        var n = e("fUP3");
        "string" == typeof n && (n = [[t.i, n, ""]]),
        n.locals && (t.exports = n.locals);
        (0,
        e("rjj0").default)("2e7814f4", n, !1, {
            sourceMap: !1
        })
    },
    tYGq: function(t, a, e) {
        var n = e("Wn2q");
        "string" == typeof n && (n = [[t.i, n, ""]]),
        n.locals && (t.exports = n.locals);
        (0,
        e("rjj0").default)("9d821bc4", n, !1, {
            sourceMap: !1
        })
    },
    u2Fw: function(t, a, e) {
        "use strict";
        var n = function() {
            var t = this
              , a = t.$createElement
              , e = t._self._c || a;
            return e("div", {
                staticClass: "game-comp-baccarat-bet",
                style: "width:" + t.containerWidth,
                attrs: {
                    id: t.screenRatio < .79 ? "is-mobile-01" : "is-pc-01"
                }
            }, [e("div", {
                staticClass: "roll-log"
            }), t.screenRatio > 1.18 ? e("div", {
                staticClass: "table-on-pc"
            }, [e("div", {
                staticClass: "left-section"
            }, [e("div", {
                class: "table-list record " + (t.screenRatio < 1.91 ? "pc-small" : "") + (t.btns.log ? " active" : ""),
                style: "height:" + (t.view.height ? t.view.height - 310 + "px" : "")
            }, [e("current_allBet_log", {
                staticClass: "table-item"
            }), e("div", {
                class: "small-btn " + (t.btns.log ? "active" : ""),
                on: {
                    click: function(a) {
                        t.btns.log = !t.btns.log
                    }
                }
            }, [e("i", {
                staticClass: "fa fa-list-alt"
            }), t._v(" " + t._s(t.$store.state.currentLang.baccarat[25]))])], 1), e("div", {
                class: "table-list t1 " + (t.size.t1.isPCSmall ? "pc-small" : "") + (t.btns.t1 ? " active" : ""),
                style: "width:" + t.size.t1.width + "px",
                attrs: {
                    id: "baccarat-t1"
                }
            }, [e("bet_result_table", {
                staticClass: "table-item",
                attrs: {
                    resultData: t.$store.state.baccarat.gameHistoryData
                }
            }), e("div", {
                class: "small-btn " + (t.btns.t1 ? "active" : ""),
                on: {
                    click: function(a) {
                        t.btns.t1 = !t.btns.t1
                    }
                }
            }, [e("i", {
                staticClass: "fa fa-file-text"
            }), t._v(" " + t._s(t.$store.state.currentLang.baccarat[23]))])], 1)]), e("div", {
                staticClass: "right-section"
            }, [e("div", {
                class: "table-list statis " + (t.screenRatio < 1.87 ? "pc-small" : "") + (t.btns.statis ? " active" : "")
            }, [e("top_punter", {
                staticClass: "table-item"
            }), e("div", {
                class: "small-btn " + (t.btns.statis ? "active" : ""),
                on: {
                    click: function(a) {
                        t.btns.statis = !t.btns.statis
                    }
                }
            }, [e("i", {
                staticClass: "fa fa-bar-chart"
            }), t._v(" " + t._s(t.$store.state.currentLang.baccarat[28]))])], 1)])]) : t._e(), t.screenRatio <= 1.18 ? e("div", {
                class: "table-on-mobile " + (t.screenRatio > .79 ? "only-pc-small" : "only-mobile")
            }, [e("ul", {
                staticClass: "bet-tabs"
            }, [e("li", {
                class: "1" === t.activeTab ? "active" : "",
                on: {
                    click: function(a) {
                        "1" === t.activeTab ? t.activeTab = "" : t.activeTab = "1"
                    }
                }
            }, [e("i", {
                staticClass: "fa fa-file-text"
            }), e("br", {
                staticClass: "br-tag"
            }), t._v(" " + t._s(t.$store.state.currentLang.baccarat[23]))]), e("li", {
                class: "2" === t.activeTab ? "active" : "",
                on: {
                    click: function(a) {
                        "2" === t.activeTab ? t.activeTab = "" : t.activeTab = "2"
                    }
                }
            }, [e("i", {
                staticClass: "fa fa-bar-chart"
            }), e("br", {
                staticClass: "br-tag"
            }), t._v(" " + t._s(t.$store.state.currentLang.baccarat[28]))]), e("li", {
                class: "0" === t.activeTab ? "active" : "",
                on: {
                    click: function(a) {
                        "0" === t.activeTab ? t.activeTab = "" : t.activeTab = "0"
                    }
                }
            }, [e("i", {
                staticClass: "fa fa-list-alt"
            }), e("br", {
                staticClass: "br-tag"
            }), t._v(" " + t._s(t.$store.state.currentLang.baccarat[25]))])]), "0" === t.activeTab ? e("div", {
                class: "table-list record "
            }, [e("current_allBet_log", {
                staticClass: "table-item"
            })], 1) : t._e(), "1" === t.activeTab ? e("div", {
                class: "table-list t1 "
            }, [e("bet_result_table", {
                staticClass: "table-item",
                attrs: {
                    resultData: t.$store.state.baccarat.gameHistoryData
                }
            })], 1) : t._e(), "2" === t.activeTab ? e("div", {
                class: "table-list statis "
            }, [e("top_punter", {
                staticClass: "table-item"
            })], 1) : t._e()]) : t._e(), e("div", {
                class: "bet-top-bar " + (t.screenRatio < 1.1 ? "at-top " : "") + (t.screenRatio < .79 ? " small-mobile" : "")
            }, [e("div", {
                staticClass: "bet-clock-progress"
            }, [e("count_down", {
                staticClass: "clock-item"
            }), e("betting_progress", {
                staticClass: "progress-item",
                attrs: {
                    isMobile: t.screenRatio < 1.1
                }
            })], 1), e("div", {
                staticClass: "bet-state"
            }, [e("betting_state")], 1), e("div", {
                staticClass: "audio-ctrl"
            }, [e("audio_constrol")], 1)]), e("div", {
                ref: "gameView",
                staticClass: "game-view"
            }, [e("baccaratBet", {
                attrs: {
                    screenRatio: t.screenRatio
                }
            })], 1)])
        };
        n._withStripped = !0;
        var r = {
            render: n,
            staticRenderFns: []
        };
        a.a = r
    },
    "uG+Q": function(t, a, e) {
        "use strict";
        var n = function() {
            var t = this.$createElement;
            return (this._self._c || t)("GameBaccarat")
        };
        n._withStripped = !0;
        var r = {
            render: n,
            staticRenderFns: []
        };
        a.a = r
    },
    udCQ: function(t, a, e) {
        var n = e("gplx");
        "string" == typeof n && (n = [[t.i, n, ""]]),
        n.locals && (t.exports = n.locals);
        (0,
        e("rjj0").default)("19e974b9", n, !1, {
            sourceMap: !1
        })
    },
    uqkm: function(t, a, e) {
        var n = e("4x+j");
        "string" == typeof n && (n = [[t.i, n, ""]]),
        n.locals && (t.exports = n.locals);
        (0,
        e("rjj0").default)("40632f17", n, !1, {
            sourceMap: !1
        })
    },
    vCqz: function(t, a, e) {
        var n = e("fWcD");
        "string" == typeof n && (n = [[t.i, n, ""]]),
        n.locals && (t.exports = n.locals);
        (0,
        e("rjj0").default)("693fd227", n, !1, {
            sourceMap: !1
        })
    },
    vmpA: function(t, a, e) {
        (t.exports = e("FZ+f")(!1)).push([t.i, "\n.poker-items[data-v-06f78cda] {\n  width: 100%;\n  height: 100%;\n}\n.poker-items img[data-v-06f78cda] {\n  width: 100%;\n  height: 100%;\n  position: relative;\n  top: -300px;\n  left: 0;\n  -webkit-box-shadow: -1px 1px 0.1rem #555;\n          box-shadow: -1px 1px 0.1rem #555;\n  border-radius: 0.18rem;\n}\n.poker-items img + img[data-v-06f78cda] {\n  margin-left: 2%;\n}\n.poker-items .img-active[data-v-06f78cda] {\n  -webkit-transition: 'all 1s';\n  transition: 'all 1s';\n  -webkit-transform: rotateY(-180deg);\n          transform: rotateY(-180deg);\n}\n@-webkit-keyframes addPoker-data-v-06f78cda {\n0% {\n    top: -500px;\n}\n100% {\n    top: 0px;\n}\n}\n@keyframes addPoker-data-v-06f78cda {\n0% {\n    top: -500px;\n}\n100% {\n    top: 0px;\n}\n}\n", ""])
    },
    wNwr: function(t, a, e) {
        var n = e("LUvl");
        "string" == typeof n && (n = [[t.i, n, ""]]),
        n.locals && (t.exports = n.locals);
        (0,
        e("rjj0").default)("f2412dd6", n, !1, {
            sourceMap: !1
        })
    },
    wwre: function(t, a, e) {
        (t.exports = e("FZ+f")(!1)).push([t.i, "\n.horse_race_lamp[data-v-35289c84] {\n  width: 100%;\n  height: 5.76px;\n  height: 0.36rem;\n  min-height: 30px;\n  border-bottom: 1px solid;\n  -o-border-image: linear-gradient(to left, rgba(3, 123, 61, .1), #f5d702, rgba(3, 123, 61, .1)) 30 0;\n     border-image: -webkit-gradient(linear, right top, left top, from(rgba(3, 123, 61, .1)), color-stop(#f5d702), to(rgba(3, 123, 61, .1))) 30 0;\n     border-image: linear-gradient(to left, rgba(3, 123, 61, .1), #f5d702, rgba(3, 123, 61, .1)) 30 0;\n  background: rgba(0, 0, 0, .2);\n  position: relative;\n}\n.horse_race_lamp > .move_obj[data-v-35289c84] {\n  width: 100%;\n  height: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n}\n.horse_race_lamp > .move_obj > div[data-v-35289c84] {\n  position: absolute;\n  top: 0;\n  left: 100%;\n  -webkit-animation: move-data-v-35289c84 5s linear;\n          animation: move-data-v-35289c84 5s linear;\n  width: 25%;\n  padding: 1.6px 0;\n  padding: 0.1rem 0;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-pack: start;\n      -ms-flex-pack: start;\n          justify-content: flex-start;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  white-space: nowrap;\n}\n.horse_race_lamp > .move_obj > div > div[data-v-35289c84]:first-child {\n  width: 6.4px;\n  width: 0.4rem;\n}\n.horse_race_lamp > .move_obj > div > div[data-v-35289c84]:nth-child(2) {\n  margin-left: 3.2px;\n  margin-left: 0.2rem;\n}\n.horse_race_lamp > .move_obj > div > div[data-v-35289c84]:nth-child(3) {\n  margin-left: 3.2px;\n  margin-left: 0.2rem;\n}\n.horse_race_lamp > .move_obj > div > div[data-v-35289c84]:nth-child(4) {\n  margin-left: 3.2px;\n  margin-left: 0.2rem;\n}\n@media screen and (max-width: 768px) {\n.horse_race_lamp .move_obj > div[data-v-35289c84] {\n    -webkit-animation: move-data-v-35289c84 2s linear;\n            animation: move-data-v-35289c84 2s linear;\n}\n}\n@media screen and (max-width: 768px) {\n.horse_race_lamp .move_obj > div[data-v-35289c84] {\n    -webkit-animation: move-data-v-35289c84 1s linear;\n            animation: move-data-v-35289c84 1s linear;\n}\n}\n@-webkit-keyframes move-data-v-35289c84 {\n0% {\n    left: 100%;\n}\n100% {\n    left: 0;\n}\n}\n@keyframes move-data-v-35289c84 {\n0% {\n    left: 100%;\n}\n100% {\n    left: 0;\n}\n}\n", ""])
    },
    x4jR: function(t, a, e) {
        "use strict";
        var n = function() {
            var t = this
              , a = t.$createElement
              , e = t._self._c || a;
            return e("div", {
                staticClass: "baccart_others",
                class: t.result
            }, [e("div", {
                ref: "result_dis",
                staticClass: "select_bets",
                on: {
                    click: function(a) {
                        t.clickHandler(a)
                    }
                }
            }, [e("div", {
                class: "img_wrap"
            }, t._l(t.bg_photo, function(a, n) {
                return t.bg_photo ? e("img", {
                    key: n,
                    style: "position:absolute;left:" + t.img_location_array[n] + "rem;bottom:" + 5 * n + "px",
                    attrs: {
                        src: "/img/buy" + a + "_.png",
                        alt: ""
                    }
                }) : t._e()
            })), e("div", {
                staticClass: "chara_btn"
            }, [e("div", {
                staticClass: "chara"
            }, [e("div", {
                staticClass: "_chara"
            }, [e("span", [t._v(t._s(t._name))])])])]), e("div", {
                staticClass: "pop_up_num"
            }), t._quantity && ("" + t._quantity).split(" ")[0] < 1e3 ? e("audios", {
                ref: "ohters_deal_audio",
                attrs: {
                    audio_name: "Baccarat_Coin_Many_01"
                }
            }) : t._quantity && ("" + t._quantity).split(" ")[0] < 5e3 ? e("audios", {
                ref: "ohters_deal_audio",
                attrs: {
                    audio_name: "1000_Coin"
                }
            }) : t._quantity && ("" + t._quantity).split(" ")[0] > 4999 ? e("audios", {
                ref: "ohters_deal_audio",
                attrs: {
                    audio_name: "5000_Coin"
                }
            }) : t._e()], 1)])
        };
        n._withStripped = !0;
        var r = {
            render: n,
            staticRenderFns: []
        };
        a.a = r
    },
    xRtd: function(t, a, e) {
        var n = e("MXKp");
        "string" == typeof n && (n = [[t.i, n, ""]]),
        n.locals && (t.exports = n.locals);
        (0,
        e("rjj0").default)("97eb0dc8", n, !1, {
            sourceMap: !1
        })
    },
    xqDL: function(t, a, e) {
        var n = e("GEJH");
        "string" == typeof n && (n = [[t.i, n, ""]]),
        n.locals && (t.exports = n.locals);
        (0,
        e("rjj0").default)("25f46d6d", n, !1, {
            sourceMap: !1
        })
    },
    y7vi: function(t, a, e) {
        var n = e("wwre");
        "string" == typeof n && (n = [[t.i, n, ""]]),
        n.locals && (t.exports = n.locals);
        (0,
        e("rjj0").default)("52e5625d", n, !1, {
            sourceMap: !1
        })
    },
    yDwg: function(t, a, e) {
        (t.exports = e("FZ+f")(!1)).push([t.i, "\n.max-bet-progress ul {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n}\n.max-bet-progress ul li {\n  position: relative;\n  max-height: 42px;\n}\n.max-bet-progress ul li > img {\n  font-size: 12px;\n  position: absolute;\n  width: 22px;\n  height: 9px;\n  top: 21px;\n  left: 50%;\n  -webkit-transform: translateX(-50%);\n          transform: translateX(-50%);\n  margin: 0;\n  color: #aaa;\n  z-index: 1;\n}\n.max-bet-progress ul li > img.net {\n  width: 21px;\n  height: 8px;\n}\n.max-bet-progress ul li a.el-icon-warning {\n  position: absolute;\n  padding: 0;\n  bottom: -5px;\n  right: -8px;\n  color: #e3a245;\n  display: none;\n}\n.max-bet-progress ul li > span {\n  display: none;\n  opacity: 0;\n  position: absolute;\n  top: 0%;\n  right: 0%;\n  -webkit-transform: translate(105%, 0%);\n          transform: translate(105%, 0%);\n  white-space: nowrap;\n  font-size: 2.08px;\n  font-size: 0.13rem;\n  color: #eee;\n}\n.max-bet-progress ul li:hover > span {\n  display: block;\n  -webkit-transition: all 1s;\n  transition: all 1s;\n  opacity: 1;\n}\n.max-bet-progress .el-progress-circle {\n  width: 42px !important;\n  height: 42px !important;\n  font-size: 12px !important;\n  background: rgba(2, 2, 2, .3);\n  border-radius: 50%;\n  padding: 1px;\n}\n.max-bet-progress .el-progress__text {\n  font-size: 12px !important;\n  color: #fff;\n  position: relative;\n  top: -22px;\n  left: 2px;\n}\n.max-bet-progress .el-progress {\n  width: 38px !important;\n  margin: 0 3px;\n}\n", ""])
    },
    yrAc: function(t, a, e) {
        var n = e("vmpA");
        "string" == typeof n && (n = [[t.i, n, ""]]),
        n.locals && (t.exports = n.locals);
        (0,
        e("rjj0").default)("37fa68d0", n, !1, {
            sourceMap: !1
        })
    }
});
