(self.webpackChunkhotline_web = self.webpackChunkhotline_web || []).push([
    [3185], {
        43185: function(e, t, a) {
            var n = window.define;
            n("hotline-web/templates/widget", (function() {
                return a(57327)
            })), n("hotline-web/routes/widget", (function() {
                return a(27420)
            }))
        },
        27420: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return k
                }
            });
            var n, r, i, o, l, s = a(78933),
                u = a(1522),
                d = a(76227),
                c = a(75330),
                p = a(55365),
                f = a(58880),
                m = a(53234),
                h = a(63537),
                b = a(65888),
                w = a(67117),
                g = a(86907),
                v = a(22620),
                E = a(72194),
                y = a(8797),
                M = a(4970);

            function Z(e) {
                var t = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function() {
                    var a, n = (0, h.Z)(e);
                    if (t) {
                        var r = (0, h.Z)(this).constructor;
                        a = Reflect.construct(n, arguments, r)
                    } else a = n.apply(this, arguments);
                    return (0, m.Z)(this, a)
                }
            }
            var k = (n = Ember.inject.service, r = Ember.inject.service, i = function(e) {
                (0, f.Z)(a, e);
                var t = Z(a);

                function a() {
                    var e;
                    (0, d.Z)(this, a);
                    for (var n = arguments.length, r = new Array(n), i = 0; i < n; i++) r[i] = arguments[i];
                    return e = t.call.apply(t, [this].concat(r)), (0, u.Z)((0, p.Z)(e), "locale", o, (0, p.Z)(e)), (0, u.Z)((0, p.Z)(e), "postMessage", l, (0, p.Z)(e)), e
                }
                return (0, c.Z)(a, [{
                    key: "beforeModel",
                    value: function() {
                        this.locale.updateAppLocale()
                    }
                }, {
                    key: "model",
                    value: function(e, t) {
                        var a = this,
                            n = t.to.queryParams.token && t.to.queryParams.token.trim(),
                            r = t.to.queryParams.widgetUuid && t.to.queryParams.widgetUuid.trim(),
                            i = t.to.queryParams.referrer,
                            o = t.to.queryParams.previewMode,
                            l = w.default.EmberModelUrl.config,
                            u = l.url.replace("{token}", n).replace("{domainName}", i),
                            d = this.session,
                            c = t.to.queryParams.eagerLoad;
                        return n && n.toUpperCase() === w.default.SAMPLE_TOKEN ? null : n && i && d ? (Ember.set(d, "token", n), r && (Ember.set(d, "widgetUuid", r), u = w.default.EmberModelUrl.configV2.url.replace("{token}", n).replace("{domainName}", i).replace("{widgetUuid}", t.to.queryParams.widgetUuid)), Ember.set(d, "referrer", i), Ember.set(d, "previewMode", o), Ember.set(d, "config", {}), c ? new Promise(function(e) {
                            var t = this;
                            (0, s.Z)(this, a);
                            var n = !1;
                            Ember.run.later(function() {
                                (0, s.Z)(this, t), n || (window.removeEventListener("message", r), e(this.store.getRequest(l.model, u)))
                            }.bind(this), 3e3);
                            var r = function(t) {
                                var a;
                                n = !0, null != t && null !== (a = t.data) && void 0 !== a && a.payload ? e(t.data.payload) : e(this.store.getRequest(l.model, u)), window.removeEventListener("message", r)
                            }.bind(this);
                            window.addEventListener("message", r), this.postMessage.post({
                                action: w.default.impostor.getFreshChatConfigs
                            })
                        }.bind(this)) : this.store.getRequest(l.model, u)) : null
                    }
                }, {
                    key: "afterModel",
                    value: function(e, t) {
                        var a, n, r = this.session,
                            i = this.hotlineUI,
                            o = e && e.appId,
                            l = e && e.appName,
                            s = e && e.userAuthConfig,
                            u = e && (0, y.bulidBetaFeatureFlagObject)(e.betaFeatures);
                        e && (e.betaFeatures = u, u[w.default.FEATURES.KUBE_CANARY_ENABLED_FLAG] && (0, M.setWCFCToken)(!0), this.jwt.enable(s && s.jwtAuthEnabled || !1), this.jwt.strict(s && s.strictModeEnabled || !1), this.jwt.isEnabled && (this.jwt.auth.timeoutInterval = s && s.authTimeOutInterval), u[w.default.unifiedWidgetBetaFeature] && "TEXT" === (null == e || null === (a = e.appearanceConfig) || void 0 === a ? void 0 : a.widgetLauncherStyle) && "" === (null == e || null === (n = e.appearanceConfig) || void 0 === n ? void 0 : n.widgetLauncherValue) && (e.appearanceConfig.widgetLauncherValue = this.intl.t("common.labels.help")), Ember.set(i, "config", e), Ember.set(r, "appId", o), Ember.set(r, "appName", l), Ember.set(r, "appDisplayName", l), Ember.set(r, "isKbaseEnabled", e.support360App && e.omniKBaseEnabled));
                        if (this.session.previewMode && (e.hideMessenger = !1), u[w.default.unifiedWidgetBetaFeature] && Ember.set(r, "isMultiWidget", !0), e.hideMessenger) return this.postMessage.post({
                            action: "hide_widget"
                        }), t.abort(), this.replaceWith("access-denied"), !1
                    }
                }]), a
            }(E.default.extend(g.default, v.default)), o = (0, b.Z)(i.prototype, "locale", [n], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: null
            }), l = (0, b.Z)(i.prototype, "postMessage", [r], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: null
            }), i)
        },
        54314: function(e, t, a) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var n, r = (n = a(62392)) && n.__esModule ? n : {
                default: n
            };
            window.define("hotline-web/components/app-loader/template", (function() {
                return r.default
            }));
            var i = (0, Ember.HTMLBars.template)({
                id: "pGdpav8T",
                block: '[[[10,0],[14,0,"h-channel"],[12],[1,"\\n  "],[8,[39,0],null,null,null],[1,"\\n"],[13]],[],false,["app-loader"]]',
                moduleName: "hotline-web/components/app-widget/template.hbs",
                isStrictMode: !1
            });
            t.default = i
        },
        57327: function(e, t, a) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var n, r = (n = a(54314)) && n.__esModule ? n : {
                default: n
            };
            window.define("hotline-web/components/app-widget/template", (function() {
                return r.default
            }));
            var i = (0, Ember.HTMLBars.template)({
                id: "A+RpcPGD",
                block: '[[[8,[39,0],null,null,null]],[],false,["app-widget"]]',
                moduleName: "hotline-web/templates/widget.hbs",
                isStrictMode: !1
            });
            t.default = i
        }
    }
]);