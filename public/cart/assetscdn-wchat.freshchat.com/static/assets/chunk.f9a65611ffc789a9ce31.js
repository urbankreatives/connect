(self.webpackChunkhotline_web = self.webpackChunkhotline_web || []).push([
    [8849], {
        48849: function(e, t, n) {
            var i = window.define;
            i("hotline-web/templates/home", (function() {
                return n(87986)
            })), i("hotline-web/routes/home", (function() {
                return n(15490)
            })), i("hotline-web/templates/home/index", (function() {
                return n(50122)
            }))
        },
        33470: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return O
                }
            });
            var i, o, s, r, l, a, u, c, d, h, f, g = n(1522),
                p = n(76227),
                m = n(75330),
                v = n(55365),
                b = n(58880),
                y = n(53234),
                w = n(63537),
                E = n(77963),
                C = n(65888),
                M = n(21951),
                A = n(80033),
                I = n(67117);

            function R(e) {
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
                    var n, i = (0, w.Z)(e);
                    if (t) {
                        var o = (0, w.Z)(this).constructor;
                        n = Reflect.construct(i, arguments, o)
                    } else n = i.apply(this, arguments);
                    return (0, y.Z)(this, n)
                }
            }
            var O = (i = (0, M.classNames)("channel", "animated", "fadeInLeft"), o = (0, M.classNameBindings)("enabledAgentTypingIndicator"), s = Ember.computed.alias("hotlineUI.config.enabledAgentTypingIndicator"), r = Ember.computed("channel.channelId"), l = Ember.computed("lastAgentMessage.messageId"), a = Ember.computed("unreadCount"), u = Ember.computed.gt("lastMessage.messageFragments.length", 0), i(c = o((d = function(e) {
                (0, b.Z)(n, e);
                var t = R(n);

                function n() {
                    var e;
                    (0, p.Z)(this, n);
                    for (var i = arguments.length, o = new Array(i), s = 0; s < i; s++) o[s] = arguments[s];
                    return e = t.call.apply(t, [this].concat(o)), (0, g.Z)((0, v.Z)(e), "enabledAgentTypingIndicator", h, (0, v.Z)(e)), (0, E.Z)((0, v.Z)(e), "USER", I.default.CONVERSATION.USER_TYPE.USER), (0, g.Z)((0, v.Z)(e), "isNonWelcomeMessage", f, (0, v.Z)(e)), e
                }
                return (0, m.Z)(n, [{
                    key: "channelId",
                    get: function() {
                        var e;
                        return null === (e = this.channel) || void 0 === e ? void 0 : e.channelId
                    }
                }, {
                    key: "currentAgent",
                    get: function() {
                        var e = this.lastAgentMessage,
                            t = e && e.get("messageUserAlias");
                        return !!t && this.agentService.getAgentInfo(t)
                    }
                }, {
                    key: "getAriaLabel",
                    get: function() {
                        var e = this.unreadCount;
                        return e ? e <= 9 ? e > 1 ? this.intl.t("aria_labels.unread_msg_other", {
                            count: e
                        }) : this.intl.t("aria_labels.unread_msg_one") : this.intl.t("aria_labels.unread_msg_other", {
                            count: this.intl.t("common.numbers.nine") + "+"
                        }) : ""
                    }
                }]), n
            }(Ember.Component.extend(A.default)), h = (0, C.Z)(d.prototype, "enabledAgentTypingIndicator", [s], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: null
            }), (0, C.Z)(d.prototype, "channelId", [r], Object.getOwnPropertyDescriptor(d.prototype, "channelId"), d.prototype), (0, C.Z)(d.prototype, "currentAgent", [l], Object.getOwnPropertyDescriptor(d.prototype, "currentAgent"), d.prototype), (0, C.Z)(d.prototype, "getAriaLabel", [a], Object.getOwnPropertyDescriptor(d.prototype, "getAriaLabel"), d.prototype), f = (0, C.Z)(d.prototype, "isNonWelcomeMessage", [u], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: null
            }), c = d)) || c) || c)
        },
        82169: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return C
                }
            });
            var i, o, s, r, l = n(78933),
                a = n(76227),
                u = n(75330),
                c = n(39806),
                d = n(58880),
                h = n(53234),
                f = n(63537),
                g = n(65888),
                p = n(21951),
                m = n(86907),
                v = n(46377),
                b = n(67117),
                y = n(22620),
                w = n(35854);

            function E(e) {
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
                    var n, i = (0, f.Z)(e);
                    if (t) {
                        var o = (0, f.Z)(this).constructor;
                        n = Reflect.construct(i, arguments, o)
                    } else n = i.apply(this, arguments);
                    return (0, h.Z)(this, n)
                }
            }
            var C = (i = (0, p.tagName)(""), o = Ember.computed("session.{config.content.headers.chat,isMultiWidget}", "hotline.ui.config.{title,appearanceConfig.conversationTitle}"), i((r = function(e) {
                (0, d.Z)(n, e);
                var t = E(n);

                function n() {
                    return (0, a.Z)(this, n), t.apply(this, arguments)
                }
                return (0, u.Z)(n, [{
                    key: "fetchConversations",
                    value: function() {
                        var e, t = this,
                            n = b.default.EmberModelUrl,
                            i = this.session,
                            o = this.localds,
                            s = i && i.user,
                            r = i && i.siteId,
                            a = i && i.token,
                            u = o && o.messageAfter || i && i.didMessage,
                            c = n.conversations,
                            d = c.url.replace("{token}", a).replace("{userAlias}", s.alias),
                            h = {
                                src: b.default.CONVERSATION.FETCH.CHANNELS_LOADED,
                                limit: b.default.CONVERSATION.LIMIT
                            };
                        u && (h.messageAfter = u), h.hideResolvedConversation = (0, w.isHideResolvedConversationEnabled)(null === (e = this.hotlineUI) || void 0 === e ? void 0 : e.config), r && (d += "?siteId=".concat(r)), this.store.getRequest(c.model, d, h).then(function(e) {
                            var n, i, o, s;
                            ((0, l.Z)(this, t), this.isDestroyed && this.isDestroying) || e && e.conversations && ((null === (n = this.hotline) || void 0 === n || null === (i = n.ui) || void 0 === i || null === (o = i.offlineExperience) || void 0 === o || null === (s = o.awayMessage) || void 0 === s ? void 0 : s.localeId) !== b.default.DefaultLocale && this.replaceUnrepliedOfflineMessageWithCurrentLocaleMessage(), this.loadConversation(e.conversations))
                        }.bind(this))
                    }
                }, {
                    key: "headerTitle",
                    get: function() {
                        var e, t, n, i, o, s, r, l, a, u, c, d = this.intl,
                            h = null === (e = this.session) || void 0 === e || null === (t = e.config) || void 0 === t || null === (n = t.content) || void 0 === n || null === (i = n.headers) || void 0 === i ? void 0 : i.chat,
                            f = this.session.isMultiWidget ? null === (o = this.hotline) || void 0 === o || null === (s = o.ui) || void 0 === s || null === (r = s.config) || void 0 === r || null === (l = r.appearanceConfig) || void 0 === l ? void 0 : l.conversationTitle : null === (a = this.hotline) || void 0 === a || null === (u = a.ui) || void 0 === u || null === (c = u.config) || void 0 === c ? void 0 : c.title;
                        return h ? (0, v.sanitizeHTML)(this, h, "strict") : f ? (0, v.sanitizeHTML)(this, f, "strict") : this.session.isMultiWidget ? d.t("channel.heading_title_chat") : d.t("channel.heading_title")
                    }
                }, {
                    key: "didInsertElement",
                    value: function() {
                        (0, c.Z)((0, f.Z)(n.prototype), "didInsertElement", this).apply(this, arguments), this.session && this.session.user && this.session.user.alias && (this.handleHideResolvedConversation(), this.fetchConversations())
                    }
                }, {
                    key: "handleHideResolvedConversation",
                    value: function() {
                        var e, t = this;
                        (0, w.isHideResolvedConversationEnabled)(null === (e = this.hotlineUI) || void 0 === e ? void 0 : e.config) && (this.conversations || []).forEach(function(e) {
                            (0, l.Z)(this, t), e.isResolved && e.deleteMessages()
                        }.bind(this))
                    }
                }, {
                    key: "replaceUnrepliedOfflineMessageWithCurrentLocaleMessage",
                    value: function() {
                        var e, t, n, i, o, s, r = this,
                            a = this.conversations,
                            u = this.localds,
                            c = null === (e = this.hotline) || void 0 === e || null === (t = e.ui) || void 0 === t || null === (n = t.offlineExperience) || void 0 === n || null === (i = n.awayMessage) || void 0 === i || null === (o = i.messageFragments) || void 0 === o || null === (s = o.firstObject) || void 0 === s ? void 0 : s.content;
                        a && a.forEach(function(e) {
                            var t = this;
                            (0, l.Z)(this, r);
                            var n = e && e.get("messages").toArray();
                            n && n.forEach(function(e) {
                                (0, l.Z)(this, t), e && !0 === e.get("offlineMessage") && e && !1 === e.get("hasBeenRepliedToOffline") && e.get("messageFragments.firstObject.content") !== c && e.set("messageFragments.firstObject.content", c)
                            }.bind(this))
                        }.bind(this)), u && u.save()
                    }
                }]), n
            }(Ember.Component.extend(y.default, m.default)), (0, g.Z)(r.prototype, "headerTitle", [o], Object.getOwnPropertyDescriptor(r.prototype, "headerTitle"), r.prototype), s = r)) || s)
        },
        5420: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return U
                }
            });
            var i, o, s, r, l, a, u, c, d, h, f, g, p, m, v = n(1522),
                b = n(76227),
                y = n(75330),
                w = n(55365),
                E = n(39806),
                C = n(58880),
                M = n(53234),
                A = n(63537),
                I = n(77963),
                R = n(65888),
                O = n(21951),
                T = n(86907),
                Z = n(44493),
                S = n(37271),
                _ = n(4754);

            function k(e) {
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
                    var n, i = (0, A.Z)(e);
                    if (t) {
                        var o = (0, A.Z)(this).constructor;
                        n = Reflect.construct(i, arguments, o)
                    } else n = i.apply(this, arguments);
                    return (0, M.Z)(this, n)
                }
            }
            var U = (i = (0, O.tagName)(""), o = Ember.inject.service, s = Ember.computed.gt("faqCategories.length", 3), r = Ember.computed.gt("faqCategories.length", 0), l = Ember.computed("categories", "categories.[]", "session.faqTags"), a = Ember.computed("session.isMultiWidget", "hotline.ui.config.appearanceConfig.faqTitle"), u = Ember.computed("faqCategories"), c = Ember._action, d = Ember._action, i((f = function(e) {
                (0, C.Z)(n, e);
                var t = k(n);

                function n() {
                    var e;
                    (0, b.Z)(this, n);
                    for (var i = arguments.length, o = new Array(i), s = 0; s < i; s++) o[s] = arguments[s];
                    return e = t.call.apply(t, [this].concat(o)), (0, I.Z)((0, w.Z)(e), "images", {
                        UploadingNew: _.Z
                    }), (0, v.Z)((0, w.Z)(e), "hotline", g, (0, w.Z)(e)), (0, v.Z)((0, w.Z)(e), "isShowMoreCategories", p, (0, w.Z)(e)), (0, v.Z)((0, w.Z)(e), "isCategoriesPresent", m, (0, w.Z)(e)), e
                }
                return (0, y.Z)(n, [{
                    key: "faqCategories",
                    get: function() {
                        if (this.isKbaseEnabled) return this.store.peekAll("category");
                        var e, t = this.categories,
                            n = null === (e = this.session) || void 0 === e ? void 0 : e.faqTags;
                        return this.filterFAQCategories(t, n)
                    }
                }, {
                    key: "getFaqTitle",
                    get: function() {
                        var e, t, n, i;
                        return this.session.isMultiWidget && null !== (e = this.hotline) && void 0 !== e && null !== (t = e.ui) && void 0 !== t && null !== (n = t.config) && void 0 !== n && null !== (i = n.appearanceConfig) && void 0 !== i && i.faqTitle ? this.hotline.ui.config.appearanceConfig.faqTitle : this.intl.t("faqs.faq_title")
                    }
                }, {
                    key: "willDestroyElement",
                    value: function() {
                        var e, t;
                        (0, E.Z)((0, A.Z)(n.prototype), "willDestroyElement", this).apply(this, arguments), this.isKbaseEnabled && null !== (e = this.hotline) && void 0 !== e && null !== (t = e.ui) && void 0 !== t && t.lastSelectedCategoryId && this.set("hotline.ui.lastSelectedCategoryId", null)
                    }
                }, {
                    key: "sliceCategories",
                    get: function() {
                        return this.faqCategories && this.faqCategories.length > 3 ? this.faqCategories.slice(0, 3) : this.faqCategories
                    }
                }, {
                    key: "selectCategory",
                    value: function(e) {
                        var t, n;
                        !this.isKbaseEnabled || null !== (t = this.hotline) && void 0 !== t && null !== (n = t.ui) && void 0 !== n && n.lastSelectedCategoryId || this.set("hotline.ui.lastSelectedCategoryId", e.categoryId), S.default.moveFocusTo(".search-input-text"), this.router.send("gotoFAQArticles", e.categoryId)
                    }
                }, {
                    key: "goToCategory",
                    value: function() {
                        this.router.send("gotoFAQCategory"), S.default.moveFocusTo(".search-input-text")
                    }
                }]), n
            }(Ember.Component.extend(T.default, Z.default)), g = (0, R.Z)(f.prototype, "hotline", [o], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: null
            }), p = (0, R.Z)(f.prototype, "isShowMoreCategories", [s], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: null
            }), m = (0, R.Z)(f.prototype, "isCategoriesPresent", [r], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: null
            }), (0, R.Z)(f.prototype, "faqCategories", [l], Object.getOwnPropertyDescriptor(f.prototype, "faqCategories"), f.prototype), (0, R.Z)(f.prototype, "getFaqTitle", [a], Object.getOwnPropertyDescriptor(f.prototype, "getFaqTitle"), f.prototype), (0, R.Z)(f.prototype, "sliceCategories", [u], Object.getOwnPropertyDescriptor(f.prototype, "sliceCategories"), f.prototype), (0, R.Z)(f.prototype, "selectCategory", [c], Object.getOwnPropertyDescriptor(f.prototype, "selectCategory"), f.prototype), (0, R.Z)(f.prototype, "goToCategory", [d], Object.getOwnPropertyDescriptor(f.prototype, "goToCategory"), f.prototype), h = f)) || h)
        },
        56183: function(e, t, n) {
            "use strict";
            n.r(t);
            var i = n(86907),
                o = n(61230),
                s = n(52340);
            t.default = Ember.Component.extend(i.default, {
                classNames: ["h-channel"],
                brand: Ember.inject.service("brand-check"),
                images: Ember.Object.create({
                    HomeIcon: s.Z
                }),
                isRoutedFromFAQ: Ember.computed.reads("model.isRoutedFromFAQ"),
                isRateLimited: Ember.computed("hotline.ui.{isKbaseCategoryRateLimited,rateLimitedCategoryArticles}", {
                    get: function() {
                        var e, t, n, i;
                        return (null === (e = this.hotline) || void 0 === e || null === (t = e.ui) || void 0 === t ? void 0 : t.isKbaseCategoryRateLimited) || (null === (n = this.hotline) || void 0 === n || null === (i = n.ui) || void 0 === i ? void 0 : i.rateLimitedCategoryArticles)
                    }
                }),
                headerStyle: Ember.computed("hotline.ui.config.appearanceConfig.brandColorStyle", "session.isMultiWidget", {
                    get: function() {
                        var e, t, n, i, o, s, r, l;
                        return this.session.isMultiWidget ? null === (e = this.hotline) || void 0 === e || null === (t = e.ui) || void 0 === t || null === (n = t.config) || void 0 === n || null === (i = n.appearanceConfig) || void 0 === i ? void 0 : i.brandColorStyle : null === (o = this.hotline) || void 0 === o || null === (s = o.ui) || void 0 === s || null === (r = s.config) || void 0 === r || null === (l = r.headerProperty) || void 0 === l ? void 0 : l.headerStyle
                    }
                }),
                welcomeMsg: Ember.computed("session.{isMultiWidget,config.content.welcomeMessage}", "hotline.ui.config.appearanceConfig.welcomeMessage", {
                    get: function() {
                        var e, t, n, i, o, s, r;
                        return this.session.isMultiWidget && ((null === (e = this.session) || void 0 === e || null === (t = e.config) || void 0 === t || null === (n = t.content) || void 0 === n ? void 0 : n.welcomeMessage) || (null === (i = this.hotline) || void 0 === i || null === (o = i.ui) || void 0 === o || null === (s = o.config) || void 0 === s || null === (r = s.appearanceConfig) || void 0 === r ? void 0 : r.welcomeMessage))
                    }
                }),
                welcomeSubMessage: Ember.computed("session.{isMultiWidget,config.content.welcomeSubMessage}", "hotline.ui.config.appearanceConfig.welcomeSubMessage", {
                    get: function() {
                        var e, t, n, i, o, s, r;
                        return this.session.isMultiWidget && ((null === (e = this.session) || void 0 === e || null === (t = e.config) || void 0 === t || null === (n = t.content) || void 0 === n ? void 0 : n.welcomeSubMessage) || (null === (i = this.hotline) || void 0 === i || null === (o = i.ui) || void 0 === o || null === (s = o.config) || void 0 === s || null === (r = s.appearanceConfig) || void 0 === r ? void 0 : r.welcomeSubMessage))
                    }
                }),
                brandLogoURL: Ember.computed("session.isMultiWidget", "hotline.ui.config.{appearanceConfig.brandLogoURL,widgetLogoUrl}", {
                    get: function() {
                        var e, t, n, i, o, s, r;
                        return this.session.isMultiWidget ? null === (e = this.hotline) || void 0 === e || null === (t = e.ui) || void 0 === t || null === (n = t.config) || void 0 === n || null === (i = n.appearanceConfig) || void 0 === i ? void 0 : i.brandLogoURL : null === (o = this.hotline) || void 0 === o || null === (s = o.ui) || void 0 === s || null === (r = s.config) || void 0 === r ? void 0 : r.widgetLogoUrl
                    }
                }),
                retryRateLimitedUrlIn: Ember.computed.alias("hotline.ui.retryAfter"),
                get hidePoweredBy() {
                    return this.brand.hidePoweredBy
                },
                onScroll: function(e) {
                    var t = e && e.target;
                    t && (parseInt(t.scrollHeight - t.scrollTop - t.clientHeight) <= 0 ? (0, o.addCSSInline)(this.element.querySelector(".bottom-gradient"), "visibility", "hidden") : (0, o.addCSSInline)(this.element.querySelector(".bottom-gradient"), "visibility", "visible"), t.scrollHeight - t.scrollTop - t.clientHeight <= 20 ? (0, o.addClass)(this.element.querySelector(".footer-note"), "show-when-zoom") : (0, o.removeClass)(this.element.querySelector(".footer-note"), "show-when-zoom"), t.scrollTop <= 0 ? (0, o.addCSSInline)(this.element.querySelector(".dummy-bar"), "height", this.session.isMultiWidget ? "3rem" : "1.5rem") : (0, o.addCSSInline)(this.element.querySelector(".dummy-bar"), "height", "0"))
                },
                scrollCallback: Ember.computed({
                    get: function() {
                        return this.onScroll.bind(this)
                    }
                }),
                didInsertElement: function() {
                    this._super.apply(this, arguments), (0, o.bindEvent)(this.element.querySelector(".scroll-section"), "scroll", this.scrollCallback), this.onScroll({
                        target: this.element.querySelector(".scroll-section")
                    })
                },
                willDestroyElement: function() {
                    this._super.apply(this, arguments), this.set("model.isRoutedFromFAQ", !1), (0, o.unbindEvent)(this.element.querySelector(".scroll-section"), "scroll", this.scrollCallback)
                },
                actions: {
                    retryCallbackOnRateLimit: function() {
                        this.router.send("retryCallbackOnRateLimitedUrl")
                    }
                }
            })
        },
        68689: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return I
                }
            });
            var i, o, s, r, l, a, u, c = n(78933),
                d = n(1522),
                h = n(76227),
                f = n(75330),
                g = n(55365),
                p = n(39806),
                m = n(58880),
                v = n(53234),
                b = n(63537),
                y = n(77963),
                w = n(65888),
                E = n(54393),
                C = n(67117),
                M = n(23798);

            function A(e) {
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
                    var n, i = (0, b.Z)(e);
                    if (t) {
                        var o = (0, b.Z)(this).constructor;
                        n = Reflect.construct(i, arguments, o)
                    } else n = i.apply(this, arguments);
                    return (0, v.Z)(this, n)
                }
            }
            var I = (i = Ember._tracked, o = Ember.inject.service, s = Ember.inject.service, r = function(e) {
                (0, m.Z)(n, e);
                var t = A(n);

                function n(e, i) {
                    var o;
                    return (0, h.Z)(this, n), o = t.call(this, e, i), (0, d.Z)((0, g.Z)(o), "isAgentTyping", l, (0, g.Z)(o)), (0, y.Z)((0, g.Z)(o), "agentThread", void 0), (0, y.Z)((0, g.Z)(o), "freddyThread", void 0), (0, y.Z)((0, g.Z)(o), "chatWindow", document.querySelector(".h-conv-chat")), (0, y.Z)((0, g.Z)(o), "onRTSMessageCB", o.onRTSMessage.bind((0, g.Z)(o))), (0, d.Z)((0, g.Z)(o), "rts", a, (0, g.Z)(o)), (0, d.Z)((0, g.Z)(o), "session", u, (0, g.Z)(o)), Ember.addListener(o.rts, "didRTSMessage", o.onRTSMessageCB), o
                }
                return (0, f.Z)(n, [{
                    key: "channelId",
                    get: function() {
                        var e;
                        return null !== (e = this.args.channelId) && void 0 !== e ? e : void 0
                    }
                }, {
                    key: "willDestroy",
                    value: function() {
                        (0, p.Z)((0, b.Z)(n.prototype), "willDestroy", this).apply(this, arguments), Ember.removeListener(this.rts, "didRTSMessage", this.onRTSMessageCB)
                    }
                }, {
                    key: "hideTypingIndicator",
                    value: function() {
                        var e = this.agentThread,
                            t = this.freddyThread;
                        this.isAgentTyping = !1, e && clearTimeout(e), t && clearTimeout(t)
                    }
                }, {
                    key: "showTypingIndicator",
                    value: function(e) {
                        var t = this,
                            n = this.chatWindow,
                            i = this.agentThread;
                        this.isAgentTyping = !0, n && n.scrollTop >= n.scrollHeight - n.offsetHeight - 30 && !document.querySelector(".h-conv-chat .notification-container") && M.default.scrollTo(n, n.scrollHeight, 1500), i && clearTimeout(i), this.agentThread = setTimeout(function() {
                            (0, c.Z)(this, t), this.isDestroying || this.isDestroyed || (this.isAgentTyping = !1)
                        }.bind(this), e)
                    }
                }, {
                    key: "onRTSMessage",
                    value: function(e) {
                        var t = this,
                            n = e && e.userId,
                            i = this.channelId,
                            o = this.session.user.id;
                        if ("is_typing" === e.action && e.channelId && e.channelId === i && o && o !== parseInt(n, 10)) this.showTypingIndicator(C.default.TYPING_INDICATOR_DURATION.AGENT);
                        else if ("MESSAGE_RECEIVED" === e.type && e.conversation && e.conversation.channelId === i) {
                            o === (e.conversation && e.conversation.messages && e.conversation.messages.length && e.conversation.messages[0].messageUserId) ? e.conversation && e.conversation.status === C.default.CONVERSATION.CONVERSATION_STATUS.FREDDY_BOT && (this.hideTypingIndicator(), this.freddyThread = setTimeout(function() {
                                (0, c.Z)(this, t), this.showTypingIndicator(C.default.TYPING_INDICATOR_DURATION.FREDDY_BOT)
                            }.bind(this), 1e3)) : this.hideTypingIndicator()
                        }
                    }
                }]), n
            }(E.default), l = (0, w.Z)(r.prototype, "isAgentTyping", [i], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function() {
                    return !1
                }
            }), a = (0, w.Z)(r.prototype, "rts", [o], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: null
            }), u = (0, w.Z)(r.prototype, "session", [s], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: null
            }), r)
        },
        24175: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return E
                }
            });
            var i, o, s, r, l, a, u = n(1522),
                c = n(76227),
                d = n(75330),
                h = n(55365),
                f = n(58880),
                g = n(53234),
                p = n(63537),
                m = n(77963),
                v = n(65888),
                b = n(54393),
                y = n.p + "freshchat_logo.f6e2dc08072c0bf69ca4c005e561b7dc.png";

            function w(e) {
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
                    var n, i = (0, p.Z)(e);
                    if (t) {
                        var o = (0, p.Z)(this).constructor;
                        n = Reflect.construct(i, arguments, o)
                    } else n = i.apply(this, arguments);
                    return (0, g.Z)(this, n)
                }
            }
            var E = (i = Ember.inject.service, o = Ember.inject.service, s = Ember.computed("hotline"), r = function(e) {
                (0, f.Z)(n, e);
                var t = w(n);

                function n() {
                    var e;
                    (0, c.Z)(this, n);
                    for (var i = arguments.length, o = new Array(i), s = 0; s < i; s++) o[s] = arguments[s];
                    return e = t.call.apply(t, [this].concat(o)), (0, u.Z)((0, h.Z)(e), "session", l, (0, h.Z)(e)), (0, u.Z)((0, h.Z)(e), "hotline", a, (0, h.Z)(e)), (0, m.Z)((0, h.Z)(e), "images", {
                        Logo: y
                    }), e
                }
                return (0, d.Z)(n, [{
                    key: "getRemoveFooter",
                    get: function() {
                        var e, t, n, i;
                        return !!this.session.isMultiWidget && (null === (e = this.hotline) || void 0 === e || null === (t = e.ui) || void 0 === t || null === (n = t.config) || void 0 === n || null === (i = n.appearanceConfig) || void 0 === i ? void 0 : i.removeFreshworksBranding)
                    }
                }]), n
            }(b.default), l = (0, v.Z)(r.prototype, "session", [i], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: null
            }), a = (0, v.Z)(r.prototype, "hotline", [o], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: null
            }), (0, v.Z)(r.prototype, "getRemoveFooter", [s], Object.getOwnPropertyDescriptor(r.prototype, "getRemoveFooter"), r.prototype), r)
        },
        15366: function(e, t, n) {
            "use strict";
            n.r(t);
            var i = n(78933),
                o = n(26894),
                s = n(5016);

            function r(e, t, n) {
                return (e - t) * (e - n) <= 0
            }
            t.default = Ember.Helper.extend({
                compute: function(e, t) {
                    var n = this,
                        l = (0, o.Z)(e, 2),
                        a = l[0],
                        u = l[1];
                    if (a && !isNaN(a)) {
                        var c, d = 0,
                            h = (0, s.default)(a).diff((0, s.default)(), "seconds"),
                            f = !0;
                        if (t && t.updateOnInterval && (f = Boolean(t.updateOnInterval)), u) c = (0, s.default)(a).format(u);
                        else try {
                            c = h < 44 ? (0, s.default)(a).fromNow() : (0, s.default)().fromNow()
                        } catch (e) {
                            c = (0, s.default)(a).format("ddd, LT")
                        }
                        return f && (this.clearTimer(), d = function(e) {
                            return r(e, -89, 89) ? 3 : r(e, -5340, 5340) ? 120 : r(e, -86400, 86400) ? 1800 : 86400
                        }(h), this.intervalTimer = setInterval(function() {
                            var e = this;
                            (0, i.Z)(this, n), Ember.run(function() {
                                return (0, i.Z)(this, e), this.recompute()
                            }.bind(this))
                        }.bind(this), parseInt(1e3 * d, 10))), c
                    }
                    return ""
                },
                clearTimer: function() {
                    clearInterval(this.intervalTimer)
                },
                destroy: function() {
                    this.clearTimer()
                }
            })
        },
        15490: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return re
                }
            });
            var i, o, s, r, l, a, u, c, d, h, f, g, p, m, v, b, y, w, E, C, M, A, I, R, O, T = n(78933),
                Z = n(1522),
                S = n(76227),
                _ = n(75330),
                k = n(55365),
                U = n(39806),
                N = n(58880),
                P = n(53234),
                B = n(63537),
                L = n(77963),
                D = n(65888),
                j = n(81387),
                F = n(72194),
                q = n(67117),
                H = n(8797),
                x = n(86907),
                W = n(44493),
                V = n(56612),
                z = n(22620),
                Q = n(17067),
                G = n(5016),
                K = n(8209),
                Y = n(57214),
                J = n(4779),
                X = n(80033),
                $ = n(62588),
                ee = n(84319),
                te = n(35854);

            function ne(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    t && (i = i.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, i)
                }
                return n
            }

            function ie(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? ne(Object(n), !0).forEach((function(t) {
                        (0, L.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : ne(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }

            function oe(e) {
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
                    var n, i = (0, B.Z)(e);
                    if (t) {
                        var o = (0, B.Z)(this).constructor;
                        n = Reflect.construct(i, arguments, o)
                    } else n = i.apply(this, arguments);
                    return (0, P.Z)(this, n)
                }
            }
            var se = q.default.CONVERSATION.MESSAGE_TYPE.IMAGE,
                re = (i = Ember.inject.service, o = Ember.inject.service, s = Ember.inject.service, r = Ember.inject.service, l = Ember.inject.service, a = Ember.inject.service("window-listener"), u = Ember.computed, c = Ember.computed("isKbaseEnabled"), d = Ember.computed("commandHelper"), h = Ember.computed, f = Ember.computed, g = Ember.computed, p = (0, j.observes)("session.user.id"), m = Ember._action, v = Ember._action, b = Ember._action, y = Ember._action, w = Ember._action, E = function(e) {
                    (0, N.Z)(n, e);
                    var t = oe(n);

                    function n() {
                        var e;
                        (0, S.Z)(this, n);
                        for (var i = arguments.length, o = new Array(i), s = 0; s < i; s++) o[s] = arguments[s];
                        return e = t.call.apply(t, [this].concat(o)), (0, Z.Z)((0, k.Z)(e), "ruleEngine", C, (0, k.Z)(e)), (0, Z.Z)((0, k.Z)(e), "notification", M, (0, k.Z)(e)), (0, L.Z)((0, k.Z)(e), "fetchFaqs", !1), (0, Z.Z)((0, k.Z)(e), "messageStacker", A, (0, k.Z)(e)), (0, Z.Z)((0, k.Z)(e), "postMessage", I, (0, k.Z)(e)), (0, Z.Z)((0, k.Z)(e), "user", R, (0, k.Z)(e)), (0, Z.Z)((0, k.Z)(e), "windowListener", O, (0, k.Z)(e)), e
                    }
                    return (0, _.Z)(n, [{
                        key: "model",
                        value: function() {
                            var e, t = null === (e = this.hotline) || void 0 === e ? void 0 : e.ui,
                                n = t && t.userBehaviour,
                                i = t && t.channels,
                                o = t && t.hours,
                                s = n && n.eventRules,
                                r = t && t.rspTime,
                                l = t && t.offlineExperience;
                            return Ember.RSVP.hash({
                                channels: i,
                                hours: o,
                                rspTime: r,
                                eventRules: s,
                                offlineExperience: l
                            })
                        }
                    }, {
                        key: "afterModel",
                        value: function(e) {
                            var t, i, o;
                            (null === (t = this.session.integrations) || void 0 === t ? void 0 : t.shopify) && Ember.addListener(this.rts, "didCampaignMessage", this.onCampaignMessageCB), null !== (i = this.session) && void 0 !== i && null !== (o = i.user) && void 0 !== o && o.id || this.hotline.broadcastConversationLoaded(), this.windowListener.bindNetworkEvents(), e && (this.setupModel(e), this.getAgentsInformationForRules(e), this.getAgentsInformationForChannels(e)), (0, U.Z)((0, B.Z)(n.prototype), "afterModel", this).call(this)
                        }
                    }, {
                        key: "getAgentsInformationForRules",
                        value: function(e) {
                            var t = e && e.eventRules;
                            if (t && t.length > 0)
                                for (var n = t.length - 1; n >= 0; n--) {
                                    var i = t[n];
                                    i.agent && this.store.pushPayload("agent", {
                                        agent: i.agent
                                    }), i.serviceAccount && this.store.pushPayload("agent", {
                                        agent: i.serviceAccount
                                    })
                                }
                        }
                    }, {
                        key: "getAgentsInformationForChannels",
                        value: function(e) {
                            var t = e && e.channels;
                            if (t && t.length > 0)
                                for (var n = t.length - 1; n >= 0; n--) {
                                    var i = t[n];
                                    i.serviceAccount && this.store.pushPayload("agent", {
                                        agent: i.serviceAccount
                                    })
                                }
                        }
                    }, {
                        key: "setupModel",
                        value: function(e) {
                            this.postModel(e), this.isKbaseEnabled ? (this.resetDsFaq(), this.fetchKbaseCategories()) : this.loadFAQS()
                        }
                    }, {
                        key: "fetchKbaseCategories",
                        value: function() {
                            var e = this;
                            this.getKbaseCategories(!0).then(function(t) {
                                var n, i;
                                (0, T.Z)(this, e), t && null !== (n = t.categories) && void 0 !== n && n.length && Ember.set(this.session, "isKbaseFaqAvailable", !0), Ember.setProperties(null === (i = this.hotline) || void 0 === i ? void 0 : i.ui, {
                                    isKbaseCategoryRateLimited: !1,
                                    retryingRateLimitedUrl: !1
                                })
                            }.bind(this), function(t) {
                                var n;
                                (0, T.Z)(this, e);
                                var i, o, s = t && t.errors && t.errors.length && t.errors[0];
                                s && s.status === q.default.HTTP_STATUS_CODES.RATE_LIMIT_ERROR ? Ember.setProperties(null === (i = this.hotline) || void 0 === i ? void 0 : i.ui, {
                                    isKbaseCategoryRateLimited: !0,
                                    retryAfter: s.retryAfter
                                }) : Ember.set(null === (o = this.hotline) || void 0 === o ? void 0 : o.ui, "isKbaseCategoryRateLimited", !1);
                                Ember.set(null === (n = this.hotline) || void 0 === n ? void 0 : n.ui, "retryingRateLimitedUrl", !1)
                            }.bind(this))
                        }
                    }, {
                        key: "postModel",
                        value: function(e) {
                            var t, n, i, o, s, r = null === (t = this.hotline) || void 0 === t ? void 0 : t.ui;
                            e.hours && (e.hours.operatingHours && (e.hours.operatingHours.clientTimeInMillis = (new Date).getTime()), Ember.set(r, "hours", e.hours), this.processOperatingHours(), this.pollster || ((s = Y.Z.create({
                                onPoll: this.processOperatingHours.bind(this),
                                interval: 6e4
                            })).start(), this.set("pollster", s))), e.rspTime && Ember.set(r, "rspTime", e.rspTime), Ember.set(r, "userBehaviour", {
                                eventRules: e.eventRules
                            }), -1 !== (null === (n = this.transition) || void 0 === n ? void 0 : n.targetName.indexOf("channels.index")) && this.openChannel(), this.connectSocket(), this.isJWTStrictMode && Ember.addListener(this.jwt, "didAuthenticateUser", this.didAuthUserCB), null !== (i = this.session) && void 0 !== i && null !== (o = i.user) && void 0 !== o && o.id || r.dsLoaded || (Ember.set(r, "dsLoaded", !0), this.postMessage.post({
                                action: "datastore_loaded"
                            })), Ember.set(r, "homeRouteLoadMillis", (new Date).getTime()), e.isRoutedFromFAQ = this.transition.to.queryParams.isRoutedFromFAQ
                        }
                    }, {
                        key: "didAuthUserCB",
                        get: function() {
                            return this.didAuthenticateUser.bind(this)
                        }
                    }, {
                        key: "faqRouteName",
                        get: function() {
                            return this.isKbaseEnabled ? "home.kbase-faq" : "home.faqs"
                        }
                    }, {
                        key: "helper",
                        get: function() {
                            return J.Z.create({
                                scope: this
                            })
                        }
                    }, {
                        key: "didAuthenticateUser",
                        value: function() {
                            this.jwt.auth.expired ? this.disconnectSocket(!1) : this.jwt.auth.user && this.connectSocket()
                        }
                    }, {
                        key: "canShowBusinessClosedBanner",
                        value: function(e) {
                            var t, n, i, o, s, r, l, a, u, c = this;
                            return !!e && (1 === e.filter(function(e) {
                                return (0, T.Z)(this, c), e.enabled && e.defaultBhr
                            }.bind(this)).length && (this.session.isMultiWidget ? null === (t = this.hotline) || void 0 === t || null === (n = t.ui) || void 0 === n || null === (i = n.config) || void 0 === i || null === (o = i.appearanceConfig) || void 0 === o || null === (s = o.widgetVisiblity) || void 0 === s ? void 0 : s.selected : null === (r = this.hotline) || void 0 === r || null === (l = r.ui) || void 0 === l || null === (a = l.config) || void 0 === a || null === (u = a.messengerVisibility) || void 0 === u ? void 0 : u.selected) === q.default.messengerVisibilityOptions.businessHours)
                        }
                    }, {
                        key: "isCurrentDayInHolidays",
                        value: function(e, t) {
                            var n = !1,
                                i = e && e.length;
                            if (i && t)
                                for (var o = 0; o < i; o++) {
                                    var s = e[o],
                                        r = String(s.date).toUpperCase(),
                                        l = (0, G.default)(K.default.convert(new Date, t.replace(" - ", "/"), !0));
                                    if (l && r === l.format("MMM DD").toUpperCase() || r === l.format("MMM D").toUpperCase()) {
                                        n = !0;
                                        break
                                    }
                                }
                            return n
                        }
                    }, {
                        key: "processOperatingHours",
                        value: function() {
                            var e, t, n, i, o, s, r = this,
                                l = null === (e = this.hotline) || void 0 === e || null === (t = e.ui) || void 0 === t ? void 0 : t.hours,
                                a = l && l.operatingHours,
                                u = void 0,
                                c = this.canShowBusinessClosedBanner(a);
                            Ember.set(null === (n = this.hotline) || void 0 === n ? void 0 : n.ui, "awayMessage", []);
                            for (var d = 0, h = a.length; d < h; d++) {
                                var f, g, p = a[d],
                                    m = (new Date).getTime(),
                                    v = this.isCurrentDayInHolidays(p.holidays, p.timezone),
                                    b = void 0,
                                    y = void 0,
                                    w = void 0,
                                    E = !0,
                                    C = void 0;
                                if (Ember.set(p, "clientTimeInMillis", (new Date).getTime()), p)
                                    if (p.enabled) {
                                        if (!v)
                                            if (b = m - a.clientTimeInMillis, w = ((y = (0, G.default)(K.default.convert(p.serverTimeInMillis + b, p.timezone.replace(" - ", "/"), !0))).day() + 6) % 7, "true" !== p.working[w]) E = !0;
                                            else
                                                for (var M = 0, A = (C = this.workingHours(p.days[w])).length; M < A; M++) {
                                                    var I = C[M],
                                                        R = parseInt(I[0], 10),
                                                        O = parseInt(I[1], 10),
                                                        Z = y.clone().startOf("day").add(R, "s"),
                                                        S = y.clone().startOf("day").add(O, "s");
                                                    if (y.isAfter(Z) && y.isBefore(S)) {
                                                        E = !1, c && (u = S.diff(y));
                                                        break
                                                    }
                                                }
                                    } else E = !1;
                                else E = !1;
                                var _ = {
                                    operatingHoursId: p.operatingHoursId,
                                    awayMessage: E ? p.awayMessage : "",
                                    defaultBhr: p.defaultBhr,
                                    enabled: p.enabled
                                };
                                null === (f = this.hotline) || void 0 === f || null === (g = f.ui) || void 0 === g || g.awayMessage.push(_)
                            }
                            c && (null === (i = this.hotline) || void 0 === i || null === (o = i.ui) || void 0 === o || !o.triggerTimerForBusinessHours) && u && u > 0 && (Ember.set(null === (s = this.hotline) || void 0 === s ? void 0 : s.ui, "triggerTimerForBusinessHours", !0), this.logger.log("Countdown timer to show Business Closed banner after end of Business hours has begun. Duration: ".concat(u, " milliseconds")), Ember.run.later(function() {
                                var e, t;
                                (0, T.Z)(this, r), Ember.set(null === (e = this.hotline) || void 0 === e ? void 0 : e.ui, "showBusinessClosedBanner", !0), Ember.set(null === (t = this.hotline) || void 0 === t ? void 0 : t.ui, "triggerTimerForBusinessHours", q.default.messengerVisibilityOptions.businessHours), this.logger.log("Countdown timer to show Business Closed banner has completed. Duration: ".concat(u, " milliseconds"))
                            }.bind(this), u))
                        }
                    }, {
                        key: "workingHours",
                        value: function(e) {
                            var t = this;
                            return e.substr(0, e.length - 1).split(";").reduce(function(e, n, i) {
                                (0, T.Z)(this, t);
                                var o = Math.floor(i / 2);
                                return e[o] = [].concat(e[o] || [], n), e
                            }.bind(this), [])
                        }
                    }, {
                        key: "onAdvicePullCB",
                        get: function() {
                            return this.onAdvicePull.bind(this)
                        }
                    }, {
                        key: "onUserMessageCB",
                        get: function() {
                            return this.onUserMessage.bind(this)
                        }
                    }, {
                        key: "onCampaignMessageCB",
                        get: function() {
                            return this.onCampaignMessage.bind(this)
                        }
                    }, {
                        key: "onCampaignMessage",
                        value: function(e, t, n) {
                            var i, o, s = this,
                                r = null === (i = this.hotline) || void 0 === i || null === (o = i.ui) || void 0 === o ? void 0 : o.userBehaviour.eventRules;
                            (r = r.find(function(t) {
                                return (0, T.Z)(this, s), t.ruleId === e.campaignId
                            }.bind(this))).command.delay = e.timeOnCurrentPage ? (0, H.convertOperand)("NUMBER", e.timeOnCurrentPage) : 0, r.command.ruleId = e.campaignId, this.commandHelper.execute([r])
                        }
                    }, {
                        key: "disconnectSocket",
                        value: function() {
                            var e, t = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
                            !this.rts.connection || this.rts.connecting || this.rts.reconnecting || (Ember.removeListener(this.rts, "didUserMessage", this.onUserMessageCB), (null === (e = this.session.integrations) || void 0 === e ? void 0 : e.shopify) && Ember.removeListener(this.rts, "didCampaignMessage", this.onCampaignMessageCB), Ember.removeListener(this.rts, "didAdvicePull", this.onAdvicePullCB), t && this.rts.connection.unsubscribeAll(), this.rts.close())
                        }
                    }, {
                        key: "connectSocket",
                        value: function() {
                            var e, t, n, i, o;
                            this.rts.connection || this.rts.connecting || this.rts.reconnecting || null === (e = this.session) || void 0 === e || null === (t = e.user) || void 0 === t || !t.id ? this.rts.connection && this.rts.didDisconnect && !this.rts.connecting && !this.rts.reconnecting && null !== (n = this.session) && void 0 !== n && null !== (i = n.user) && void 0 !== i && i.id && (this.rts.close(), this.rts.create()) : (Ember.addListener(this.rts, "didUserMessage", this.onUserMessageCB), Ember.addListener(this.rts, "didAdvicePull", this.onAdvicePullCB), (null === (o = this.session.integrations) || void 0 === o ? void 0 : o.shopify) && this.rts.close(), this.rts.create())
                        }
                    }, {
                        key: "sessionUserObserver",
                        value: function() {
                            var e, t;
                            null !== (e = this.session) && void 0 !== e && null !== (t = e.user) && void 0 !== t && t.id ? this.connectSocket() : this.disconnectSocket()
                        }
                    }, {
                        key: "onUserMessage",
                        value: function(e, t, n) {
                            var i, o, s, r = this,
                                l = null === (i = this.hotline) || void 0 === i ? void 0 : i.ui,
                                a = this.messageStacker,
                                u = this.session,
                                c = u && u.config,
                                d = c && c.agent,
                                h = d && d.hideName,
                                f = u && u.appDisplayName || u.appName,
                                g = this.store,
                                p = this.localds,
                                m = p.get("seq"),
                                v = this.conversations,
                                b = this.displayChannels,
                                y = e && e.type,
                                w = e && (null === (o = e.conversation) || void 0 === o ? void 0 : o.conversationReferenceId);
                            if (this.isJWTStrictMode) {
                                if (this.jwt.auth.expiredAt || this.jwt.auth.scheduled || this.jwt.auth.expired) return void this.disconnectSocket(!1);
                                if (this.isJwtExpired()) return this.disconnectSocket(!1), void this.initiateSendingMode()
                            }
                            if (e.userRules) {
                                var E = e.userRules.filter(function(e) {
                                    return (0, T.Z)(this, r), !(l.prevExecutedRuleIds.length > 0 && l.prevExecutedRuleIds.includes(e.ruleId))
                                }.bind(this));
                                E.length > 0 && E.forEach(function(e) {
                                    (0, T.Z)(this, r), e.command.delay = 0, e.command.ruleId = e.ruleId
                                }.bind(this)), E.length > 0 && this.commandHelper.execute(E)
                            } else {
                                var C, M, A, I, R = e && e.conversation,
                                    O = R && R.messages && R.messages.length && R.messages[0],
                                    Z = R && R.channelId,
                                    S = (0, H.findObjectByValueProperty)(b, Z, "channelId"),
                                    _ = null === (C = this.hotline) || void 0 === C || null === (M = C.ui) || void 0 === M ? void 0 : M.conversationReferenceId;
                                if (_) {
                                    var k = v.filter(function(e) {
                                        return (0, T.Z)(this, r), e.conversationReferenceId === R.conversationReferenceId
                                    }.bind(this));
                                    A = 0 !== (null == k ? void 0 : k.length) ? k.findBy("channelId", Z) : void 0
                                } else A = v.findBy("conversationId", R.conversationId);
                                if (O && O.messageType === q.default.CONVERSATION.MESSAGE_TYPE.SCREEN_SHARING.ENDED && window.parent && this.postMessage.post({
                                        event_id: "cobrowsingStop"
                                    }), this.send("ackMessageInRTS", O, t), "MESSAGE_RECEIVED" === y)
                                    if (I = (O && O.messageUserType) === q.default.CONVERSATION.USER_TYPE.USER ? "message_from_user" : "message_from_agent", this.rts.checkForSubscription(), O) {
                                        var U = O.messageUserName;
                                        q.default.CONVERSATION.MESSAGE_TYPE.BOT !== O.messageType && q.default.CONVERSATION.MESSAGE_TYPE.FREDDY_BOT !== O.messageType && (U = h || !U ? f : U.split(" ")[0]), this.postMessage.post({
                                            action: I,
                                            data: {
                                                message: {
                                                    messageFragments: O.messageFragments,
                                                    messageUserName: U,
                                                    appName: f,
                                                    createdMillis: O.createdMillis,
                                                    channelId: Z,
                                                    conversationId: R.conversationId,
                                                    stepId: O.flowStepId
                                                }
                                            }
                                        })
                                    }
                                if (1 === n || 0 === m.id || n === m.id + 1) {
                                    if ("MESSAGE_RECEIVED" === y || "COBOROWSING_STATUS_UPDATED" === y) {
                                        if (R) {
                                            var N, P, B, L, D, j, F, x = O && O.messageId,
                                                W = O && O.marketingId,
                                                V = O && O.msgHopId,
                                                z = O && O.messageUserType,
                                                Q = A && A.get("messages"),
                                                G = this.notification;
                                            if (-1 !== se.indexOf(O.messageType) && (0, H.resizeImage)(O), Z && Ember.set(O, "channelId", Z), w ? (Ember.set(O, "conversationReferenceId", w), Ember.set(l, "receivedMsgRefId", w)) : Ember.set(l, "receivedMsgRefId", void 0), Ember.set(O, "delivered", !0), Q) {
                                                P = x && Q.findBy("messageId", x) || W && Q.findBy("marketingId", W) || V && Q.findBy("msgHopId", V), O && O.flowStepId && 0 !== O.messageUserType && (F = (0, H.updateAndGetLastFlowMessage)(Q, O)), O && O.ruleId && 0 !== O.messageUserType && (B = (0, H.updateAndGetLastAutoMessage)(Q, O)), O && O.source === q.default.CONVERSATION.MESSAGE_SOURCE.OFFLINE && (L = (j = (D = Q.filter(function(e) {
                                                    return (0, T.Z)(this, r), e.get("source") === q.default.CONVERSATION.MESSAGE_SOURCE.OFFLINE && e.get("needsUpdation")
                                                }.bind(this))) && D.length) ? D[j - 1] : null);
                                                var K = Q.filterBy("offlineMessage", !0).filterBy("hasBeenRepliedToOffline", !1);
                                                if ((O && O.messageUserType === q.default.CONVERSATION.USER_TYPE.AGENT && K.length || O.internalMeta) && K.length && K[K.length - 1].set("hasBeenRepliedToOffline", !0), P && V && P.get("msgHopId") && x && P.get("messageId") && P.get("msgHopId") === V && P.get("messageId") !== x && (P = null), P) "COBOROWSING_STATUS_UPDATED" === y ? P.set("messageType", O.messageType) : g.cloneRecord(P, O), this.logger.log("Updating Message");
                                                else if (B) Ember.set(B, "messageUserAlias", O.messageUserAlias), (0, H.checkAndUpdateReadMillis)(B.get("createdMillis"), O.createdMillis, A), g.cloneRecord(B, O), this.logger.log("Updated automessage via Websockets");
                                                else if (F) Ember.set(F, "messageUserAlias", O.messageUserAlias), (0, H.checkAndUpdateReadMillis)(F.get("createdMillis"), O.createdMillis, A), g.cloneRecord(F, O), this.logger.log("Updated flowmessage via Websockets");
                                                else if (L) {
                                                    Ember.set(L, "messageUserAlias", O.messageUserAlias), g.cloneRecord(L, O), L.set("needsUpdation", !1);
                                                    for (var Y = 0; Y < j - 1; Y++) D[Y].set("needsUpdation", !1);
                                                    this.logger.log("Updated offlineMessage via Websockets")
                                                } else {
                                                    var J = g.createRecord("message", O),
                                                        X = Q.lastObject;
                                                    if (Q.firstObject && Q.firstObject.messageId && Q.firstObject.createdMillis > O.createdMillis) Q.unshiftObjects([J]);
                                                    else if (X && X.messageId) {
                                                        for (var $ = Q.length - 1; $ >= 0; $--) {
                                                            if (Q.objectAt($).createdMillis < O.createdMillis) {
                                                                Q.insertAt($ + 1, J);
                                                                break
                                                            }
                                                        }
                                                        $ < 0 && Q.pushObject(J)
                                                    } else Q.pushObject(J);
                                                    this.logger.log("Adding Message"), O && O.messageUserType === q.default.CONVERSATION.USER_TYPE.USER && this.postMessage.post({
                                                        action: "notify_frame",
                                                        data: "close"
                                                    })
                                                }
                                            } else {
                                                var ee, te = Ember.A([]);
                                                if (te.pushObject(g.createRecord("message", O)), ee = g.createRecord("conversation", {
                                                        conversationId: R.conversationId,
                                                        channelId: R.channelId,
                                                        messages: te,
                                                        conversationReferenceId: R.conversationReferenceId || _
                                                    }), v) v.pushObject(ee);
                                                else {
                                                    var ne = Ember.A([]);
                                                    ne.pushObject(ee), p.set("conversations", ne)
                                                }
                                            }
                                            s = O.createdMillis, p.set("messageAfter", s), this.send("save", S && !P), S && (z && !O.ruleId ? (a.isSameAsLastAgentChannelId(O.channelId) ? Ember.setProperties(l, {
                                                lockAgentMessage: !0
                                            }) : l.lockAgentMessage || Ember.setProperties(l, {
                                                lockAgentMessage: void 0
                                            }), a.setLastAgentMessage(O), Ember.run.later(function() {
                                                var e;
                                                (0, T.Z)(this, r), _ !== (null === (e = A) || void 0 === e ? void 0 : e.conversationReferenceId) && _ || G.playSound()
                                            }.bind(this), 0)) : l.lockAgentMessage || (Ember.setProperties(l, {
                                                lockAgentMessage: void 0
                                            }), a.resetLastAgentMessages())), null === (N = A) || void 0 === N || N.set("status", R.status)
                                        }
                                    } else if ("CONVERSATION_RESOLVED" === y) {
                                        if (R.hasPendingCsat && (A.set("csat", g.createRecord("csat", R.csat)), A.set("hasPendingCsat", R.hasPendingCsat)), A.set("status", R.status), A.messages) {
                                            var ie = R.messages.lastObject.restrictResponse;
                                            A.set("messages.lastObject.restrictResponse", ie)
                                        }
                                        this.send("save")
                                    } else "CSAT_RESPONSE_RECEIVED" === y ? A.get("csat") && (Ember.set(A, "hasPendingCsat", !1), this.send("save")) : "GDPR_USER_DELETED" === y && (this.user.delete(), this.send("reset", null, !0));
                                    p.set("seq", {
                                        id: n,
                                        millis: s
                                    }), this.send("save")
                                } else this.populateConversation(q.default.CONVERSATION.FETCH.RTS_SEQ_ID_MISMATCH, null, m.millis)
                            }
                        }
                    }, {
                        key: "onAdvicePull",
                        value: function(e) {
                            var t = e && e.src,
                                n = this.router.currentRouteName,
                                i = n && "home.faqs" !== n;
                            this.populateConversation(t, e.channel && i ? this.openChannel : null, e && e.reset ? 0 : null)
                        }
                    }, {
                        key: "openChannel",
                        value: function() {
                            var e, t, n = this.displayChannels,
                                i = n && n.length,
                                o = null === (e = this.session) || void 0 === e || null === (t = e.config) || void 0 === t ? void 0 : t.openChannelId;
                            if (i && 1 === i && !this.isFAQAvailable) this.transition.abort(), this.replaceWith("home.channel", n[0].channelId);
                            else if (o) {
                                var s = n.findBy("channelId", o);
                                s && s.channelId && this.replaceWith("home.channel", s.channelId)
                            }
                        }
                    }, {
                        key: "populateConversation",
                        value: function() {
                            var e, t, n, i = this,
                                o = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
                                s = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                                r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
                                l = q.default.EmberModelUrl,
                                a = l.conversations,
                                u = this.session,
                                c = u && u.user,
                                d = a.url.replace("{token}", u.token).replace("{userAlias}", c.alias),
                                h = u && u.siteId,
                                f = null !== r ? r : u && u.didMessage,
                                g = o ? {
                                    src: o
                                } : {
                                    src: q.default.CONVERSATION.FETCH.DEFAULT
                                };
                            g = ie(ie({}, g), {}, {
                                limit: q.default.CONVERSATION.LIMIT
                            }), f && (g.messageAfter = f), g.hideResolvedConversation = (0, te.isHideResolvedConversationEnabled)(null === (e = this.hotlineUI) || void 0 === e ? void 0 : e.config);
                            var p = null === (t = this.hotline) || void 0 === t || null === (n = t.ui) || void 0 === n ? void 0 : n.conversationReferenceId;
                            p && (g.conversationReferenceId = p), h && (d += "?siteId=".concat(h)), this.store.getRequest(a.model, d, g).then(function(e) {
                                var t, n = this;
                                (0, T.Z)(this, i);
                                var o = e && e.errorCode,
                                    l = null === (t = this.hotline) || void 0 === t ? void 0 : t.ui;
                                if (l && l.helpNote && Ember.set(l, "helpNote", void 0), e && e.conversations && !o) {
                                    var a = this.conversations,
                                        u = [];
                                    if (0 === r && a) {
                                        a.forEach(function(e) {
                                            var t = this;
                                            (0, T.Z)(this, n);
                                            var i = [];
                                            if (e.get("messages").forEach(function(e) {
                                                    (0, T.Z)(this, t), 0 === e.get("messageUserType") && e.get("status") === q.default.MESSAGE_STATUS.PENDING && i.push(e)
                                                }.bind(this)), i.length) {
                                                var o = e.serialize();
                                                e.messages = i, u.push(o)
                                            }
                                        }.bind(this));
                                        var c = e && e.conversations;
                                        c && c.forEach(function(e) {
                                            (0, T.Z)(this, n);
                                            var t = a.findBy("channelId", e.channelId);
                                            a.removeObject(t)
                                        }.bind(this)), this.send("save", !1)
                                    }
                                    this.loadConversation(e.conversations || []), this.loadConversation(u)
                                } else;
                                s && s.call(this)
                            }.bind(this))
                        }
                    }, {
                        key: "restoreConversation",
                        value: function() {
                            this.populateConversation(q.default.CONVERSATION.FETCH.CONVERSATION_RESTORED, this.openChannel)
                        }
                    }, {
                        key: "gotoFAQArticle",
                        value: function(e, t) {
                            var n, i = null === (n = this.hotline) || void 0 === n ? void 0 : n.ui;
                            Ember.set(i, "modal", e), this.transitionTo(this.faqRouteName, {
                                queryParams: {
                                    fromChannelId: t
                                }
                            })
                        }
                    }, {
                        key: "gotoFAQArticles",
                        value: function(e) {
                            this.transitionTo(this.faqRouteName, {
                                queryParams: {
                                    categoryID: e
                                }
                            })
                        }
                    }, {
                        key: "gotoFAQCategory",
                        value: function() {
                            this.transitionTo(this.faqRouteName)
                        }
                    }, {
                        key: "retryCallbackOnRateLimitedUrl",
                        value: function() {
                            var e, t, n, i, o;
                            if (null !== (e = this.hotline) && void 0 !== e && null !== (t = e.ui) && void 0 !== t && t.isKbaseCategoryRateLimited) Ember.set(null === (o = this.hotline) || void 0 === o ? void 0 : o.ui, "retryingRateLimitedUrl", !0), this.fetchKbaseCategories();
                            else if (null !== (n = this.hotline) && void 0 !== n && null !== (i = n.ui) && void 0 !== i && i.rateLimitedCategoryArticles) {
                                var s, r, l;
                                Ember.set(null === (s = this.hotline) || void 0 === s ? void 0 : s.ui, "retryingRateLimitedUrl", !0), this.send("gotoFAQArticles", null === (r = this.hotline) || void 0 === r || null === (l = r.ui) || void 0 === l ? void 0 : l.rateLimitedCategoryArticles)
                            }
                        }
                    }]), n
                }(F.default.extend(x.default, W.default, z.default, V.default, Q.default, $.default, X.default, ee.default)), C = (0, D.Z)(E.prototype, "ruleEngine", [i], {
                    configurable: !0,
                    enumerable: !0,
                    writable: !0,
                    initializer: null
                }), M = (0, D.Z)(E.prototype, "notification", [o], {
                    configurable: !0,
                    enumerable: !0,
                    writable: !0,
                    initializer: null
                }), A = (0, D.Z)(E.prototype, "messageStacker", [s], {
                    configurable: !0,
                    enumerable: !0,
                    writable: !0,
                    initializer: null
                }), I = (0, D.Z)(E.prototype, "postMessage", [r], {
                    configurable: !0,
                    enumerable: !0,
                    writable: !0,
                    initializer: null
                }), R = (0, D.Z)(E.prototype, "user", [l], {
                    configurable: !0,
                    enumerable: !0,
                    writable: !0,
                    initializer: null
                }), O = (0, D.Z)(E.prototype, "windowListener", [a], {
                    configurable: !0,
                    enumerable: !0,
                    writable: !0,
                    initializer: null
                }), (0, D.Z)(E.prototype, "didAuthUserCB", [u], Object.getOwnPropertyDescriptor(E.prototype, "didAuthUserCB"), E.prototype), (0, D.Z)(E.prototype, "faqRouteName", [c], Object.getOwnPropertyDescriptor(E.prototype, "faqRouteName"), E.prototype), (0, D.Z)(E.prototype, "helper", [d], Object.getOwnPropertyDescriptor(E.prototype, "helper"), E.prototype), (0, D.Z)(E.prototype, "onAdvicePullCB", [h], Object.getOwnPropertyDescriptor(E.prototype, "onAdvicePullCB"), E.prototype), (0, D.Z)(E.prototype, "onUserMessageCB", [f], Object.getOwnPropertyDescriptor(E.prototype, "onUserMessageCB"), E.prototype), (0, D.Z)(E.prototype, "onCampaignMessageCB", [g], Object.getOwnPropertyDescriptor(E.prototype, "onCampaignMessageCB"), E.prototype), (0, D.Z)(E.prototype, "sessionUserObserver", [p], Object.getOwnPropertyDescriptor(E.prototype, "sessionUserObserver"), E.prototype), (0, D.Z)(E.prototype, "restoreConversation", [m], Object.getOwnPropertyDescriptor(E.prototype, "restoreConversation"), E.prototype), (0, D.Z)(E.prototype, "gotoFAQArticle", [v], Object.getOwnPropertyDescriptor(E.prototype, "gotoFAQArticle"), E.prototype), (0, D.Z)(E.prototype, "gotoFAQArticles", [b], Object.getOwnPropertyDescriptor(E.prototype, "gotoFAQArticles"), E.prototype), (0, D.Z)(E.prototype, "gotoFAQCategory", [y], Object.getOwnPropertyDescriptor(E.prototype, "gotoFAQCategory"), E.prototype), (0, D.Z)(E.prototype, "retryCallbackOnRateLimitedUrl", [w], Object.getOwnPropertyDescriptor(E.prototype, "retryCallbackOnRateLimitedUrl"), E.prototype), E)
        },
        90603: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var i = g(n(31052)),
                o = g(n(96389)),
                s = g(n(45697)),
                r = g(n(20830)),
                l = g(n(45370)),
                a = g(n(68689)),
                u = g(n(19136)),
                c = g(n(72754)),
                d = g(n(19591)),
                h = g(n(15366)),
                f = g(n(21581));

            function g(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            window.define("hotline-web/helpers/t", (function() {
                return i.default
            })), window.define("hotline-web/helpers/choose-theme", (function() {
                return o.default
            })), window.define("hotline-web/helpers/avatar-content", (function() {
                return s.default
            })), window.define("hotline-web/helpers/sanitize-html", (function() {
                return r.default
            })), window.define("hotline-web/components/ui-agent-typing-indicator/template", (function() {
                return l.default
            })), window.define("hotline-web/components/ui-agent-typing-indicator/component", (function() {
                return a.default
            })), window.define("hotline-web/helpers/eq", (function() {
                return u.default
            })), window.define("hotline-web/components/ui-unity-message-fragment/template", (function() {
                return c.default
            })), window.define("hotline-web/components/ui-unity-message-fragment/component", (function() {
                return d.default
            })), window.define("hotline-web/helpers/format-time", (function() {
                return h.default
            })), window.define("hotline-web/helpers/gt", (function() {
                return f.default
            }));
            var p = (0, Ember.HTMLBars.template)({
                id: "AIHYZ0k4",
                block: '[[[8,[39,0],[[24,0,"channel-link"]],[["@route","@model","@replace"],["home.channel",[30,0,["channel","channelId"]],true]],[["default"],[[[[1,"\\n  "],[10,0],[14,0,"h-category-item"],[12],[1,"\\n    "],[10,0],[14,0,"h-category-icon"],[12],[1,"\\n"],[41,[30,0,["channel","iconUrl"]],[[[1,"        "],[10,"img"],[14,0,"img-circle avatar-image"],[15,"src",[30,0,["channel","iconUrl"]]],[15,"alt",[28,[37,2],["alt.channel_icon"],null]],[12],[13],[1,"\\n"]],[]],[[[1,"        "],[10,1],[15,0,[29,["category-content-wrap ",[28,[37,3],[[30,0,["channel","name"]]],null]]]],[12],[1,"\\n          "],[10,1],[14,0,"category-content"],[12],[1,"\\n            "],[1,[28,[35,4],[[30,0,["channel","name"]]],null]],[1,"\\n          "],[13],[1,"\\n        "],[13],[1,"\\n"]],[]]],[1,"    "],[13],[1,"\\n    "],[10,0],[14,0,"channel-names"],[12],[1,"\\n      "],[10,0],[14,0,"channel-content"],[12],[1,"\\n        "],[10,0],[15,0,[29,["h-category-detail ",[52,[30,0,["lastMessage"]],"aw"]]]],[12],[1,"\\n          "],[10,"h2"],[14,0,"channel-name"],[12],[1,"\\n            "],[1,[28,[35,5],[[30,0,["channel","name"]],"strict"],null]],[1,"\\n          "],[13],[1,"\\n          "],[10,0],[15,0,[29,["welcome-text ",[52,[30,0,["unreadCount"]],"unreadMessage"]]]],[12],[1,"\\n"],[41,[30,0,["enabledAgentTypingIndicator"]],[[[1,"              "],[8,[39,6],null,[["@channelId"],[[30,0,["channel","channelId"]]]],null],[1,"\\n"]],[]],null],[1,"            "],[10,0],[14,0,"message-text"],[12],[1,"\\n"],[41,[30,0,["isNonWelcomeMessage"]],[[[41,[28,[37,7],[[30,0,["USER"]],[30,0,["lastMessage","messageUserType"]]],null],[[[1,"                  "],[10,"i"],[14,0,"icon-ic_reply"],[12],[13],[1,"\\n"]],[]],null],[1,"                "],[10,0],[14,0,"last-msg-preview"],[12],[1,"\\n                  "],[8,[39,8],null,[["@message","@isListView"],[[30,0,["lastMessage"]],true]],null],[1,"\\n                "],[13],[1,"\\n"]],[]],[[[41,[30,0,["channel","welcomeMessage","messageFragments","length"]],[[[1,"                "],[10,0],[14,0,"last-msg-preview"],[12],[1,"\\n                  "],[8,[39,8],null,[["@message","@isListView"],[[30,0,["channel","welcomeMessage"]],true]],null],[1,"\\n                "],[13],[1,"\\n              "]],[]],null]],[]]],[1,"            "],[13],[1,"\\n          "],[13],[1,"\\n        "],[13],[1,"\\n        "],[10,0],[14,0,"h-conv-user"],[12],[1,"\\n"],[41,[30,0,["lastMessage"]],[[[1,"            "],[10,0],[14,0,"time-stamp"],[12],[1,"\\n              "],[1,[28,[35,9],[[30,0,["lastMessage","createdMillis"]],"LT"],null]],[1,"\\n            "],[13],[1,"\\n"],[41,[30,0,["unreadCount"]],[[[1,"              "],[10,0],[15,0,[29,["h-notify ",[52,[28,[37,10],[[30,0,["unreadCount"]],9],null],"large-count"]]]],[15,"aria-label",[30,0,["getAriaLabel"]]],[12],[1,"\\n                "],[10,1],[14,"aria-hidden","true"],[12],[1,"\\n"],[41,[28,[37,10],[[30,0,["unreadCount"]],9],null],[[[1,"                    "],[1,[28,[35,2],["common.numbers.nine"],null]],[1,"+\\n"]],[]],[[[1,"                    "],[1,[30,0,["unreadCount"]]],[1,"\\n"]],[]]],[1,"                "],[13],[1,"\\n              "],[13],[1,"\\n"]],[]],null]],[]],null],[1,"        "],[13],[1,"\\n      "],[13],[1,"\\n    "],[13],[1,"\\n\\n  "],[13],[1,"\\n"]],[]]]]]],[],false,["link-to","if","t","choose-theme","avatar-content","sanitize-html","ui-agent-typing-indicator","eq","ui-unity-message-fragment","format-time","gt"]]',
                moduleName: "hotline-web/components/app-channel/template.hbs",
                isStrictMode: !1
            });
            t.default = p
        },
        73278: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var i = s(n(90603)),
                o = s(n(33470));

            function s(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            window.define("hotline-web/components/app-channel/template", (function() {
                return i.default
            })), window.define("hotline-web/components/app-channel/component", (function() {
                return o.default
            }));
            var r = (0, Ember.HTMLBars.template)({
                id: "tWNiBpkU",
                block: '[[[10,0],[14,0,"channel-section animated fadeInUp delay faster h-categories"],[12],[1,"\\n  "],[10,0],[14,0,"channel-title"],[12],[1,"\\n    "],[10,0],[14,0,"list-sub-title"],[14,"role","heading"],[14,"aria-level","1"],[12],[1,"\\n      "],[1,[30,0,["headerTitle"]]],[1,"\\n    "],[13],[1,"\\n  "],[13],[1,"\\n  "],[10,"ul"],[14,0,"channel-list"],[12],[1,"\\n"],[42,[28,[37,1],[[28,[37,1],[[30,0,["displayChannels"]]],null]],null],null,[[[1,"      "],[10,"li"],[12],[1,"\\n        "],[8,[39,2],null,[["@channel","@update"],[[30,1],[30,0,["session","didMessage"]]]],null],[1,"\\n        "],[10,0],[14,0,"border-bottom"],[12],[13],[1,"\\n      "],[13],[1,"\\n"]],[1]],null],[1,"  "],[13],[1,"\\n"],[13]],["channel"],false,["each","-track-array","app-channel"]]',
                moduleName: "hotline-web/components/app-channels-list/template.hbs",
                isStrictMode: !1
            });
            t.default = r
        },
        914: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var i = a(n(20830)),
                o = a(n(31052)),
                s = a(n(96389)),
                r = a(n(45697)),
                l = a(n(19136));

            function a(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            window.define("hotline-web/helpers/sanitize-html", (function() {
                return i.default
            })), window.define("hotline-web/helpers/t", (function() {
                return o.default
            })), window.define("hotline-web/helpers/choose-theme", (function() {
                return s.default
            })), window.define("hotline-web/helpers/avatar-content", (function() {
                return r.default
            })), window.define("hotline-web/helpers/eq", (function() {
                return l.default
            }));
            var u = (0, Ember.HTMLBars.template)({
                id: "HhC3ftYs",
                block: '[[[41,[30,0,["isCategoriesPresent"]],[[[1,"  "],[10,0],[15,0,[29,["faq-list animated fadeInUp delay faster ",[52,[30,0,["isShowMoreCategories"]],"show-more"]]]],[12],[1,"\\n    "],[10,0],[14,0,"faq-header"],[12],[1,"\\n      "],[10,0],[14,0,"title-header"],[12],[1,"\\n        "],[10,0],[14,0,"list-sub-title"],[14,"role","heading"],[14,"aria-level","1"],[12],[1,"\\n"],[41,[30,0,["session","config","content","headers","faq"]],[[[1,"            "],[1,[28,[35,1],[[30,0,["session","config","content","headers","faq"]],"strict"],null]],[1,"\\n"]],[]],[[[1,"            "],[1,[30,0,["getFaqTitle"]]],[1,"\\n"]],[]]],[1,"        "],[13],[1,"\\n      "],[13],[1,"\\n      "],[11,0],[24,0,"search-category"],[24,"role","button"],[24,"tabindex","0"],[16,"aria-label",[28,[37,2],["aria_labels.search_faq"],null]],[4,[38,3],[[30,0],"goToCategory"],null],[12],[1,"\\n        "],[10,"i"],[14,0,"icon-ic_search"],[12],[13],[1,"\\n      "],[13],[1,"\\n    "],[13],[1,"\\n    "],[10,0],[14,0,"faq-categories"],[12],[1,"\\n      "],[10,"ul"],[14,0,"categories-list"],[12],[1,"\\n"],[42,[28,[37,5],[[28,[37,5],[[30,0,["sliceCategories"]]],null]],null],null,[[[1,"          "],[11,"li"],[24,"tabindex","0"],[4,[38,3],[[30,0],"selectCategory",[30,1]],null],[12],[1,"\\n            "],[10,0],[14,0,"category-item"],[12],[1,"\\n              "],[10,0],[14,0,"category-icon"],[12],[1,"\\n"],[41,[30,1,["icon"]],[[[1,"                  "],[10,"img"],[15,"src",[30,1,["icon"]]],[14,0,"img-circle avatar-image"],[15,"alt",[28,[37,2],["alt.category_icon"],null]],[12],[13],[1,"\\n"]],[]],[[[1,"                  "],[10,1],[15,0,[29,["category-content-wrap ",[28,[37,6],[[30,1,["title"]]],null]]]],[12],[1,"\\n                    "],[1,[28,[35,7],[[30,1,["title"]]],null]],[1,"\\n                  "],[13],[1,"\\n"]],[]]],[1,"              "],[13],[1,"\\n              "],[10,0],[14,0,"category-name"],[12],[1,"\\n                "],[10,0],[14,0,"faq-title"],[14,"role","heading"],[14,"aria-level","2"],[12],[1,"\\n                  "],[1,[28,[35,1],[[30,1,["title"]],"strict"],null]],[1,"\\n                "],[13],[1,"\\n              "],[13],[1,"\\n\\n"],[41,[28,[37,8],[[30,0,["hotline","ui","lastSelectedCategoryId"]],[30,1,["categoryId"]]],null],[[[1,"                "],[10,"img"],[14,0,"faq-loader"],[15,"src",[30,0,["images","UploadingNew"]]],[15,"alt",[28,[37,2],["alt.loading_icon"],null]],[12],[13],[1,"\\n"]],[]],null],[1,"            "],[13],[1,"\\n            "],[10,0],[14,0,"border-bottom"],[12],[13],[1,"\\n          "],[13],[1,"\\n"]],[1,2]],null],[1,"      "],[13],[1,"\\n"],[41,[30,0,["isShowMoreCategories"]],[[[1,"        "],[11,0],[24,0,"see_more_faqs"],[24,"role","button"],[24,"tabindex","0"],[4,[38,3],[[30,0],"goToCategory"],null],[12],[1,"\\n          "],[1,[28,[35,2],["faqs.show_more_categories"],null]],[1,"\\n        "],[13],[1,"\\n"]],[]],null],[1,"    "],[13],[1,"\\n  "],[13],[1,"\\n"]],[]],null]],["obj","index"],false,["if","sanitize-html","t","action","each","-track-array","choose-theme","avatar-content","eq"]]',
                moduleName: "hotline-web/components/app-faq-list/template.hbs",
                isStrictMode: !1
            });
            t.default = u
        },
        52669: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var i = g(n(31052)),
                o = g(n(84937)),
                s = g(n(6014)),
                r = g(n(73278)),
                l = g(n(82169)),
                a = g(n(914)),
                u = g(n(5420)),
                c = g(n(53957)),
                d = g(n(86292)),
                h = g(n(87917)),
                f = g(n(24175));

            function g(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            window.define("hotline-web/helpers/t", (function() {
                return i.default
            })), window.define("hotline-web/helpers/and", (function() {
                return o.default
            })), window.define("hotline-web/helpers/or", (function() {
                return s.default
            })), window.define("hotline-web/components/app-channels-list/template", (function() {
                return r.default
            })), window.define("hotline-web/components/app-channels-list/component", (function() {
                return l.default
            })), window.define("hotline-web/components/app-faq-list/template", (function() {
                return a.default
            })), window.define("hotline-web/components/app-faq-list/component", (function() {
                return u.default
            })), window.define("hotline-web/components/ui-rate-limit-error/template", (function() {
                return c.default
            })), window.define("hotline-web/components/ui-rate-limit-error/component", (function() {
                return d.default
            })), window.define("hotline-web/components/ui-footer-note/template", (function() {
                return h.default
            })), window.define("hotline-web/components/ui-footer-note/component", (function() {
                return f.default
            }));
            var p = (0, Ember.HTMLBars.template)({
                id: "wY1hHFGb",
                block: '[[[10,0],[14,0,"home-content"],[12],[1,"\\n  "],[10,0],[15,0,[29,["h-header ",[30,0,["headerStyle"]]]]],[12],[1,"\\n    "],[10,0],[15,0,[29,["title fadeIn ",[52,[30,0,["isRoutedFromFAQ"]],"home-header"]]]],[12],[1,"\\n      "],[10,0],[14,0,"logo"],[12],[1,"\\n"],[41,[30,0,["brandLogoURL"]],[[[1,"          "],[10,"img"],[15,0,[52,[30,0,["isRoutedFromFAQ"]],"home-logo","animated zoomIn faster"]],[15,"src",[30,0,["brandLogoURL"]]],[15,"alt",[28,[37,1],["alt.logo"],null]],[12],[13],[1,"\\n"]],[]],[[[1,"          "],[10,"img"],[15,0,[52,[30,0,["isRoutedFromFAQ"]],"home-logo","animated zoomIn faster"]],[15,"src",[30,0,["images","HomeIcon"]]],[15,"alt",[28,[37,1],["alt.product_name"],null]],[12],[13],[1,"\\n"]],[]]],[1,"      "],[13],[1,"\\n"],[41,[28,[37,2],[[30,0,["session","isMultiWidget"]],[28,[37,3],[[30,0,["welcomeMsg"]],[30,0,["welcomeSubMessage"]]],null]],null],[[[1,"        "],[10,0],[14,0,"head-text"],[12],[1,"\\n"],[41,[30,0,["welcomeMsg"]],[[[1,"            "],[10,"h3"],[12],[1,[30,0,["welcomeMsg"]]],[13],[1,"\\n"]],[]],null],[41,[30,0,["welcomeSubMessage"]],[[[1,"            "],[10,"h5"],[12],[1,[30,0,["welcomeSubMessage"]]],[13],[1,"\\n"]],[]],null],[1,"        "],[13],[1,"\\n"]],[]],null],[1,"    "],[13],[1,"\\n  "],[13],[1,"\\n  "],[10,0],[15,0,[29,["body sections faq-body ",[52,[30,0,["hidePoweredBy"]],"no-footer"]]]],[12],[1,"\\n"],[1,"    "],[10,0],[15,0,[29,["dummy-bar ",[30,0,["headerStyle"]]," ",[52,[30,0,["isRoutedFromFAQ"]],"dummyBar"]]]],[12],[13],[1,"\\n    "],[10,0],[14,0,"card-layout scroll-section"],[12],[1,"\\n"],[1,"      "],[8,[39,4],null,null,null],[1,"\\n"],[41,[30,0,["isFAQAvailable"]],[[[1,"        "],[8,[39,5],null,null,null],[1,"\\n"]],[]],null],[1,"\\n"],[41,[30,0,["isRateLimited"]],[[[1,"        "],[8,[39,6],null,[["@retryAfter","@retryCallback","@isRateLimitExceededOnScroll","@retryingRateLimitedUrl"],[[30,0,["retryRateLimitedUrlIn"]],[28,[37,7],[[30,0],"retryCallbackOnRateLimit"],null],"true",[30,0,["hotline","ui","retryingRateLimitedUrl"]]]],null],[1,"\\n"]],[]],null],[1,"\\n      "],[10,0],[14,0,"bottom-gradient"],[12],[13],[1,"\\n    "],[13],[1,"\\n  "],[13],[1,"\\n"],[13],[1,"\\n"],[41,[51,[30,0,["hidePoweredBy"]]],[[[1,"  "],[8,[39,9],null,[["@hidePoweredBy"],[[30,0,["hidePoweredBy"]]]],null],[1,"\\n"]],[]],null]],[],false,["if","t","and","or","app-channels-list","app-faq-list","ui-rate-limit-error","action","unless","ui-footer-note"]]',
                moduleName: "hotline-web/components/app-home/template.hbs",
                isStrictMode: !1
            });
            t.default = p
        },
        45370: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var i, o = (i = n(31052)) && i.__esModule ? i : {
                default: i
            };
            window.define("hotline-web/helpers/t", (function() {
                return o.default
            }));
            var s = (0, Ember.HTMLBars.template)({
                id: "S7WUDywq",
                block: '[[[11,0],[16,0,[29,["ui-agent-typing-indicator ",[52,[51,[30,0,["isAgentTyping"]]],"hidden"]]]],[16,"aria-label",[28,[37,1],["aria_labels.agent_typing"],null]],[17,1],[12],[1,"\\n  "],[10,1],[14,0,"indicator-dot"],[14,"aria-hidden","true"],[12],[13],[1,"\\n  "],[10,1],[14,0,"indicator-dot"],[14,"aria-hidden","true"],[12],[13],[1,"\\n  "],[10,1],[14,0,"indicator-dot"],[14,"aria-hidden","true"],[12],[13],[1,"\\n"],[13],[1,"\\n"]],["&attrs"],false,["unless","t"]]',
                moduleName: "hotline-web/components/ui-agent-typing-indicator/template.hbs",
                isStrictMode: !1
            });
            t.default = s
        },
        87917: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var i = s(n(6014)),
                o = s(n(31052));

            function s(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            window.define("hotline-web/helpers/or", (function() {
                return i.default
            })), window.define("hotline-web/helpers/t", (function() {
                return o.default
            }));
            var r = (0, Ember.HTMLBars.template)({
                id: "dWd6xBN8",
                block: '[[[11,0],[16,0,[29,["footer-note animated slideInUp faster ",[52,[28,[37,1],[[30,0,["getRemoveFooter"]],[30,1]],null],"hide-footer"]]]],[17,2],[12],[1,"\\n"],[41,[51,[28,[37,1],[[30,0,["getRemoveFooter"]],[30,1]],null]],[[[1,"    "],[1,[28,[35,3],["by_in_powered_by"],null]],[1,"  "],[10,"img"],[14,0,"icon"],[15,"src",[30,0,["images","Logo"]]],[15,"alt",[28,[37,3],["alt.powered_by"],null]],[12],[13],[1,"  \\n"],[1,"    "],[10,3],[14,6,"https://www.freshworks.com/live-chat-software/powered-by-freshchat/"],[14,0,"product"],[14,"target","_blank"],[14,"rel","noopener noreferrer"],[12],[1,"\\n      "],[1,[28,[35,3],["freshchat"],null]],[1,"\\n    "],[13],[1,"\\n"]],[]],[[[1,"    "],[10,"img"],[14,"src","data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="],[14,"width","0"],[14,"height","0"],[15,"alt",[28,[37,3],["alt.product_name"],null]],[12],[13],[1,"\\n"]],[]]],[13],[1,"\\n"]],["@hidePoweredBy","&attrs"],false,["if","or","unless","t"]]',
                moduleName: "hotline-web/components/ui-footer-note/template.hbs",
                isStrictMode: !1
            });
            t.default = r
        },
        87986: function(e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var n = (0, Ember.HTMLBars.template)({
                id: "Y+fKQKsX",
                block: '[[[46,[28,[37,1],null,null],null,null,null]],[],false,["component","-outlet"]]',
                moduleName: "hotline-web/templates/home.hbs",
                isStrictMode: !1
            });
            t.default = n
        },
        50122: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var i = s(n(52669)),
                o = s(n(56183));

            function s(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            window.define("hotline-web/components/app-home/template", (function() {
                return i.default
            })), window.define("hotline-web/components/app-home/component", (function() {
                return o.default
            }));
            var r = (0, Ember.HTMLBars.template)({
                id: "ItfW6C1z",
                block: '[[[8,[39,0],null,[["@model"],[[30,0,["model"]]]],null]],[],false,["app-home"]]',
                moduleName: "hotline-web/templates/home/index.hbs",
                isStrictMode: !1
            });
            t.default = r
        },
        4754: function(e, t, n) {
            "use strict";
            t.Z = n.p + "uploading_new.98b10ec655025f35a4f07a99ec6e6de9.gif"
        }
    }
]);