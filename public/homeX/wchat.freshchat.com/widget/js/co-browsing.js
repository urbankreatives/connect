! function() {
    var e = {
            44004: function() {
                window._fc_cbtemplate = window._fc_cbtemplate || {}, _fc_cbtemplate.audiopopup = '\x3c!-- Audio Control Modal --\x3e<div id="_fc_cb_audio_container" class="fc-request-audio-container fc-modal fc-micro-phone-container">\x3c!-- Modal content --\x3e<div class="fc-modal-content"><div class="fc-modal-header"><h2>{{audiopopup.title}} <span class="fc-agent-name-modal fc-agent-name-on-audio-request"></span></h2></div><div class="fc-modal-body"><p class="fc-call-desc"><span class="fc-agent-name-modal fc-agent-name-on-audio-request"></span> {{audiopopup.call_desc}}</p><p id="_fc_micro_phone_desc" class="fc-micro-phone-desc">{{audiopopup.micro_phone_desc}}</p></div><div class="fc-modal-footer"><input type="button" id="_fc_deny_call" value="{{deny}}" /><input type="button" id="_fc_accept_call" value="{{accept}}" /></div></div></div>', _fc_cbtemplate.cobrowse = '\x3c!-- <link href="//webchat-msgreen.freshpori.com/cb_static_file/fc_cb_style.css" rel="stylesheet"> --\x3e<link href="{{host}}/cb_static_file/fc_cb_style.css" rel="stylesheet"><link href="//cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet"><div class="fc-screen-viewing" id="_fc_cb_header_container" tabindex="-1"><div class="fc-header-status"><span id="fc-agent-name-modal-header-name" class="fc-agent-name-modal-header"></span></div><div class="fc-header-div" id="_fc-control-div"><div id="_fc_hide_control" class="cb-tooltip-top fc-hide-bar" data-cb-tooltip="{{cobrowse.tooltip.hide}}" tabindex="0" role="button" aria-label="Hide controls"><img src="{{host}}/cb_static_file/images/icons/ic_minimize.svg" alt="minimize"></div><div class="fc-control-bar"><div class="fc-request-section"><div id="_fc_getBack_Control" class="cb-tooltip-top fc-request-icon-bar"><div id="_fc_getBack_Control_div" class="fc-request-control"></div></div></div><div class="fc-info-section"><div class="fc-image-container fc-wave"><div class="fc-visitor-icon-small fc-wave cb-tooltip-top" data-cb-tooltip="{{cobrowse.tooltip.you}}" tabindex="0" role="button" aria-label="Visitor Icon"><img class="fc-visitor-default" src="{{host}}/cb_static_file/images/icons/ic_user.svg" alt="Visitor"/></div><div id="_fc_visitor_circle" class="fc-circle"></div></div><div id="_fc_timer" class="fc-timer">00:00</div><div class="fc-image-container fc-wave cb-tooltip-top" id="_fc_agent_data_tooltip" data-cb-tooltip="{{cobrowse.tooltip.unknown}}"><div class="fc-agent-icon-small" tabindex="0" role="button" aria-label="Agent Icon"><img class="fc-agent-default" src="{{host}}/cb_static_file/images/icons/ic_user.svg" id="_fc_agent_pic" alt="User"/><span class="fc-agent-status"><div id="_fc_eye_icon" class="fc-view-only"></div></span></div><div id="_fc_agent_circle" class="fc-circle"></div></div></div><div class="fc-action-section"><div id="_fc_muteMic" class="cb-tooltip-top fc-microphone fc-mute fc-mic-hide" data-cb-tooltip="{{cobrowse.tooltip.mute}}"><div class="fc-mute" id="_fc_muteMic-div"></div></div><div id="_fc_endsession" class="cb-tooltip-top fc-endSession" data-cb-tooltip="{{cobrowse.tooltip.end_session}}" tabindex="0"><img src="{{host}}/cb_static_file/images/icons/ic_end_session.svg" alt="End Session"/></div></div></div></div><div class="fc-footer-hide-bar" id="_fc-footer-hide-bar"><div class="cb-tooltip-top fc-show-bar" data-cb-tooltip="{{cobrowse.tooltip.show}}" id="_fc_show_control" tabindex="0" role="button" aria-label="Show Controls"><img src="{{host}}/cb_static_file/images/icons/ic_maximize.svg" alt="Maximize"></div><div class="fc-timer">00:00</div><div id="_fc_muteMic_small" class="fc-microphone-small fc-mute fc-mic-hide" data-cb-tooltip="{{cobrowse.tooltip.mute}}"><div class="fc-mute" id="_fc_muteMic_small_div"></div></div></div></div>\x3c!-- Access control Modal --\x3e<div id="_fc_cb_message_container" class="fc-request-msg-container fc-modal">\x3c!-- Modal content --\x3e<div class="fc-modal-content"><div class="fc-modal-header"><h2><span class="fc-agent-name-modal _fc_agent_name_req"></span> {{cobrowse.access_control.title}}</h2></div><div class="fc-modal-body"><p><span class="fc-agent-name-modal _fc_agent_name_req"></span> {{cobrowse.access_control.desc}}</p></div><div class="fc-modal-footer"><input type="button" id="_fc_DenyedControl" value="{{deny}}" /><input type="button" id="_fc_allowControl" value="{{allow}}" /></div></div></div>\x3c!-- Session confirmation Modal --\x3e<div id="_fc_cb_notifyContainer" class="fc-confirm-msg-container fc-modal">\x3c!-- Modal content --\x3e<div class="fc-modal-content"><div class="fc-modal-header"><h2>{{cobrowse.end_session.title}}</h2></div><div class="fc-modal-body"><p>{{cobrowse.end_session.desc}}</p></div><div class="fc-modal-footer"><input type="button" id="_fc_close_modal_window" value="{{no}}" /><input type="button" id="_fc_close_session" value="{{yes}}" /></div></div></div>\x3c!-- Session Notification--\x3e<div id ="_fc_close_msg" class="fc-notify-exit fc-notification"><div class="fc-notify"><p class="fc-notify-text" id="_fc-notify-text"></p><span id="_fc_notify_close"><span>x</span></span></div></div>'
            }
        },
        t = {};

    function i(n) {
        var o = t[n];
        if (void 0 !== o) return o.exports;
        var a = t[n] = {
            exports: {}
        };
        return e[n](a, a.exports, i), a.exports
    }! function() {
        "use strict";
        var e = "Unknown",
            t = "View only",
            n = "View & Control",
            o = "is viewing your screen.",
            a = "You are on a Co-browsing session with",
            c = "Agent can now view & control this tab.",
            s = "You have gained back control over the tab.",
            l = "You have denied the view & control request.",
            r = "You have declined the audio call.",
            d = "Audio call connected",
            u = "Audio call ended",
            f = "Unmute",
            _ = "Mute",
            m = "Get back control",
            h = {
                LOCALSTORAGE: "localStorage",
                SESSIONSTORAGE: "sessionStorage"
            },
            v = {
                audio: {
                    disableAudioCalls: "DISABLE_AUDIO_CALLS",
                    initiate: "AGENTS_CAN_INITIATE_AUDIO_CALL",
                    startAutomatically: "AUTOMATICALLY_START_AUDIO_CALL"
                }
            };
        var g = function() {
            return function(e, t) {
                if (e !== t) throw new TypeError("Cannot instantiate an arrow function")
            }(this, undefined), {
                isAvailable: function(e) {
                    var t, i = "__storage_test__";
                    try {
                        return (t = window[e]).setItem(i, i), t.removeItem(i), !0
                    } catch (e) {
                        return e instanceof window.DOMException && (22 === e.code || 1014 === e.code || "QuotaExceededError" === e.name || "NS_ERROR_DOM_QUOTA_REACHED" === e.name) && 0 !== t.length
                    }
                },
                setItem: function(e, t, i) {
                    this.isAvailable(e) ? window[e].setItem(t, i) : (window.fc_store_fall_back || (window.fc_store_fall_back = {
                        localStorage: {},
                        sessionStorage: {}
                    }), window.fc_store_fall_back[e][t] = i)
                },
                getItem: function(e, t) {
                    return this.isAvailable(e) ? window[e].getItem(t) : window.fc_store_fall_back && window.fc_store_fall_back[e] && window.fc_store_fall_back[e][t]
                },
                removeItem: function(e, t) {
                    this.isAvailable(e) ? window[e].removeItem(t) : window.fc_store_fall_back && window.fc_store_fall_back[e] && window.fc_store_fall_back[e][t] && delete window.fc_store_fall_back[e][t]
                }
            }
        }.bind(void 0)();

        function C(e, t) {
            if (e !== t) throw new TypeError("Cannot instantiate an arrow function")
        }
        var w = function() {
            return C(this, undefined), {
                timeOut: null,
                setStartTime: function() {
                    g.setItem(h.SESSIONSTORAGE, "_fc_start_time", new Date)
                },
                getStarttime: function() {
                    return g.getItem(h.SESSIONSTORAGE, "_fc_start_time")
                },
                resetStartTime: function() {
                    g.removeItem(h.SESSIONSTORAGE, "_fc_start_time")
                },
                secondsToHms: function() {
                    var e = Number(((new Date).getTime() - new Date(this.getStarttime()).getTime()) / 1e3);
                    return {
                        h: Math.floor(e / 3600),
                        m: Math.floor(e % 3600 / 60),
                        s: Math.floor(e % 3600 % 60)
                    }
                },
                clearTimer: function() {
                    this.timeOut && clearInterval(this.timeOut)
                },
                startTimer: function() {
                    var e = this;
                    this.clearTimer();
                    var t = 0,
                        i = 0,
                        n = 0;
                    if (this.getStarttime()) {
                        var o = this.secondsToHms();
                        t = o.s, i = o.m, n = o.h
                    } else this.setStartTime();
                    var a = function() {
                        C(this, e);
                        var o = document.getElementsByClassName("fc-timer");
                        ++t >= 60 && (t = 0, ++i >= 60 && (i = 0, n++));
                        for (var a = 0; a < o.length; a++) {
                            o[a].textContent = (n ? n > 9 ? n : "0" + n : "00") + ":" + (i ? i > 9 ? i : "0" + i : "00") + ":" + (t > 9 ? t : "0" + t)
                        }
                    }.bind(this);
                    this.timeOut = setInterval(a, 1e3)
                }
            }
        }.bind(void 0)();
        var b = function() {
            return function(e, t) {
                if (e !== t) throw new TypeError("Cannot instantiate an arrow function")
            }(this, undefined), {
                init: function() {
                    this.agentPic = this.getByID("_fc_agent_pic"), this.agentName = this.getByID("fc-agent-name-modal-header-name"), this.muteMic = this.getByID("_fc_muteMic"), this.notifyText = this.getByID("_fc-notify-text"), this.getBackControl = this.getByID("_fc_getBack_Control"), this.getBackControlContainer = this.getByID("_fc_getBack_Control_div"), this.agentNameOnRequest = document.getElementsByClassName("_fc_agent_name_req"), this.muteMicSmall = this.getByID("_fc_muteMic_small"), this.endSession = this.getByID("_fc_endsession"), this.closeModalWindow = this.getByID("_fc_close_modal_window"), this.closeSession = this.getByID("_fc_close_session"), this.denyedControl = this.getByID("_fc_DenyedControl"), this.allowControl = this.getByID("_fc_allowControl"), this.hideControl = this.getByID("_fc_hide_control"), this.showControl = this.getByID("_fc_show_control"), this.notifyClose = this.getByID("_fc_notify_close"), this.agentDataToolTip = this.getByID("_fc_agent_data_tooltip"), this.visitoCircle = this.getByID("_fc_visitor_circle"), this.agentCircle = this.getByID("_fc_agent_circle"), this.closeMessage = this.getByID("_fc_close_msg"), this.muteMicContainer = this.getByID("_fc_muteMic-div"), this.muteMicSmallContainer = this.getByID("_fc_muteMic_small_div"), this.eyeIcon = this.getByID("_fc_eye_icon"), this.controlContainer = this.getByID("_fc-control-div"), this.footerHideBar = this.getByID("_fc-footer-hide-bar"), this.headerContainer = this.getByID("_fc_cb_header_container"), this.notifyContainer = this.getByID("_fc_cb_notifyContainer"), this.topHeader = this.getByID("_fc_hide_top"), this.messageContainer = this.getByID("_fc_cb_message_container")
                },
                audioInit: function() {
                    this.audioContainer = this.getByID("_fc_cb_audio_container"), this.agentNameOnAudioRequest = document.getElementsByClassName("fc-agent-name-on-audio-request"), this.acceptCall = this.getByID("_fc_accept_call"), this.denyCall = this.getByID("_fc_deny_call")
                },
                bindEvent: function(e, t, i) {
                    var n = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
                    e && (e.addEventListener ? (e.removeEventListener(t, i, n), e.addEventListener(t, i, n)) : (e.detachEvent(t, i, n), e.attachEvent(t, i, n)))
                },
                unbindEvent: function(e, t, i) {
                    var n = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
                    e && (e.removeEventListener ? e.removeEventListener(t, i, n) : e.detachEvent(t, i, n))
                },
                getByID: function(e) {
                    return document.getElementById(e)
                },
                show: function(e) {
                    return e && (e.style.display = "block"), this
                },
                hide: function(e) {
                    return e && (e.style.display = "none"), this
                },
                setAttribute: function(e, t, i) {
                    return e && e.setAttribute(t, i)
                },
                getAttribute: function(e, t) {
                    return e && e.getAttribute(t)
                },
                addClass: function(e, t) {
                    return e && e.classList && t && e.classList.add(t)
                },
                removeClass: function(e, t) {
                    return e && e.classList && t && e.classList.remove(t)
                },
                replaceClass: function(e, t, i) {
                    this.removeClass(e, t), this.addClass(e, i)
                },
                setValue: function(e, t) {
                    if (e)
                        for (var i = e.length, n = 0; n < i; n++) e[n].innerText = t
                }
            }
        }.bind(void 0)();
        var p = function() {
            return function(e, t) {
                if (e !== t) throw new TypeError("Cannot instantiate an arrow function")
            }(this, undefined), {
                notifyTimer: function() {
                    setTimeout(this.close.bind(this), 3e3)
                },
                show: function(e) {
                    b.notifyText.innerText = e, b.removeClass(b.closeMessage, "fc-notify-exit"), clearTimeout(this.notifyTimer), this.notifyTimer()
                },
                close: function() {
                    b.addClass(b.closeMessage, "fc-notify-exit"), clearTimeout(this.notifyTimer)
                }
            }
        }.bind(void 0)();

        function S(e, t) {
            if (e !== t) throw new TypeError("Cannot instantiate an arrow function")
        }
        var y = function() {
            return S(this, undefined), {
                getBackCtrl: function() {
                    if (g.getItem(h.SESSIONSTORAGE, "_fc_isControlling")) {
                        OneClickCbUtils.takeControl(), this.gainedControlCSSAction(), b.getBackControl.removeAttribute("data-cb-tooltip"), b.replaceClass(b.eyeIcon, "fc-view-control", "fc-view-only");
                        var e = OneClickCbUtils.safeSessionGetItem("_fc_cb_agentName");
                        b.agentName.innerText = "".concat(e, " ").concat(o), b.setAttribute(b.agentDataToolTip, "data-cb-tooltip", "".concat(e, " (").concat(t, ")")), g.removeItem(h.SESSIONSTORAGE, "_fc_isControlling"), p.show(s)
                    }
                },
                transferCompleteCSSAction: function() {
                    b.replaceClass(b.getBackControl, "fc-request-control", "fc-return-control"), b.replaceClass(b.getBackControlContainer, "fc-request-control", "fc-return-control")
                },
                gainedControlCSSAction: function() {
                    b.replaceClass(b.getBackControl, "fc-return-control", "fc-request-control"), b.replaceClass(b.getBackControlContainer, "fc-return-control", "fc-request-control")
                },
                endScreenonClick: function() {
                    OneClickCbUtils.cobrowsingEnd();
                    var e = window.frames.fc_widget,
                        t = b.getAttribute(b.endSession, "data-channelId");
                    e.postMessage({
                        event_id: "endScreenShare",
                        channelId: t
                    }, R.host)
                },
                denyControl: function() {
                    g.removeItem(h.SESSIONSTORAGE, "isRequested"), OneClickCbUtils.master.send({
                        type: "denyControl"
                    }), b.hide(b.messageContainer), p.show(l)
                },
                allowControl: function() {
                    OneClickCbUtils.giveControl(), this.allowControlDomEvents.call(this)
                },
                allowControlDomEvents: function(e) {
                    var t = OneClickCbUtils.safeSessionGetItem("_fc_cb_agentName");
                    b.agentName.innerText = "".concat(a, " ").concat(t, "."), b.setAttribute(b.agentDataToolTip, "data-cb-tooltip", "".concat(t, " (").concat(n, ")")), b.hide(b.messageContainer), e || p.show(c), b.setAttribute(b.getBackControl, "data-cb-tooltip", m), b.replaceClass(b.eyeIcon, "fc-view-only", "fc-view-control")
                },
                hideControlDiv: function() {
                    var e = this;
                    b.replaceClass(b.controlContainer, "fc-slideOutUp", "fc-slideOutDown"), b.hide(b.controlContainer), setTimeout(function() {
                        S(this, e), b.replaceClass(b.footerHideBar, "fc-slideOutDown", "fc-slideInUp"), b.show(b.footerHideBar);
                        var t = document.querySelector(".fc-show-bar");
                        t && t.focus()
                    }.bind(this), 100)
                },
                hideFooterDiv: function() {
                    var e = this;
                    b.replaceClass(b.footerHideBar, "fc-slideOutUp", "fc-slideOutDown"), b.hide(b.footerHideBar), setTimeout(function() {
                        S(this, e), b.replaceClass(b.controlContainer, "fc-slideOutDown", "fc-slideInUp"), b.show(b.controlContainer);
                        var t = document.querySelector(".fc-screen-viewing");
                        t && t.focus()
                    }.bind(this), 100)
                },
                requestControl: function() {
                    b.show(b.messageContainer), b.setValue(b.agentNameOnRequest, R.agentName), g.setItem(h.SESSIONSTORAGE, "isRequested", !0), this.hideControlDiv.call(this)
                },
                transferComplete: function() {
                    g.setItem(h.SESSIONSTORAGE, "_fc_isControlling", !0), this.transferCompleteCSSAction(), this.allowControlDomEvents.call(this, !0), window.fcWidget.close()
                },
                gainedControlBack: function() {
                    g.removeItem(h.SESSIONSTORAGE, "_fc_isControlling");
                    var e = OneClickCbUtils.safeSessionGetItem("_fc_cb_agentName");
                    b.agentName.innerText = "".concat(e, " ").concat(o), this.gainedControlCSSAction(), b.replaceClass("_fc_eye_icon", "fc-view-control", "fc-view-only"), p.show(s)
                },
                checkforControl: function() {
                    g.getItem(h.SESSIONSTORAGE, "_fc_isControlling") ? this.transferCompleteCSSAction() : this.gainedControlCSSAction()
                }
            }
        }.bind(void 0)();
        var I = function() {
            return function(e, t) {
                if (e !== t) throw new TypeError("Cannot instantiate an arrow function")
            }(this, undefined), {
                hideEndSession: function() {
                    var e = document.querySelector(".fc-screen-viewing");
                    b.hide(b.notifyContainer), e && e.focus()
                },
                showEndSession: function() {
                    var e = document.querySelector("#app-conversation-editor");
                    b.show(b.notifyContainer), e && e.focus()
                }
            }
        }.bind(void 0)();
        var E = function() {
                return function(e, t) {
                    if (e !== t) throw new TypeError("Cannot instantiate an arrow function")
                }(this, undefined), {
                    addListnersForControl: function() {
                        b.bindEvent(b.muteMic, "click", B.muteMic.bind(B)), b.bindEvent(b.muteMicSmall, "click", B.muteMic.bind(B)), b.bindEvent(b.getBackControl, "click", y.getBackCtrl.bind(y)), b.bindEvent(b.endSession, "click", I.showEndSession.bind(I)), b.bindEvent(b.closeModalWindow, "click", I.hideEndSession.bind(I)), b.bindEvent(b.closeSession, "click", y.endScreenonClick.bind(y)), b.bindEvent(b.denyedControl, "click", y.denyControl.bind(y)), b.bindEvent(b.allowControl, "click", y.allowControl.bind(y)), b.bindEvent(b.hideControl, "click", y.hideControlDiv.bind(y)), b.bindEvent(b.showControl, "click", y.hideFooterDiv.bind(y)), b.bindEvent(b.notifyClose, "click", p.close.bind(p))
                    },
                    addListnersForAudio: function() {
                        b.bindEvent(b.acceptCall, "click", k.acceptCall.bind(k)), b.bindEvent(b.denyCall, "click", k.denyCall.bind(k))
                    }
                }
            }.bind(void 0)(),
            A = {
                "en-us": {
                    audiopopup: {
                        title: "Incoming audio call from",
                        call_desc: "is requesting for an audio call with this co-browsing session (Once you accept, you can mute the call at any time).",
                        micro_phone_desc: "This will require access to your microphone. Please ensure you 'allow' access."
                    },
                    cobrowse: {
                        access_control: {
                            title: "wants to co-browse with you",
                            desc: "will be able to view & control actions on the current tab only."
                        },
                        end_session: {
                            title: "End Session",
                            desc: "Are you sure you want to end this session?"
                        },
                        tooltip: {
                            mute: "Mute",
                            show: "Show",
                            end_session: "End session",
                            unknown: "Unknown",
                            you: "You",
                            hide: "Hide"
                        }
                    },
                    yes: "Yes",
                    no: "No",
                    allow: "Allow",
                    deny: "Deny",
                    accept: "Accept"
                }
            };

        function O(e) {
            return O = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }, O(e)
        }
        var T = function() {
            return function(e, t) {
                if (e !== t) throw new TypeError("Cannot instantiate an arrow function")
            }(this, undefined), {
                i18n: function(e, t) {
                    t || (t = window.navigator.languages && window.navigator.languages.length && window.navigator.languages[0] || window.navigator.language), A.hasOwnProperty(t) || (t = "en-us");
                    var i = A[t];
                    return this.data = e, this.doTraverse(i), this.data
                },
                doTraverse: function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
                    for (var i in e) e.hasOwnProperty(i) && ("object" === O(e[i]) ? this.doTraverse(e[i], (t ? t + "." : "") + i) : this.doTranslate(e[i], (t ? t + "." : "") + i))
                },
                doTranslate: function(e, t) {
                    this.data && (this.data = this.data.replace(new RegExp("{{" + t + "}}", "g"), e))
                }
            }
        }.bind(void 0)();
        var k = function() {
            return function(e, t) {
                if (e !== t) throw new TypeError("Cannot instantiate an arrow function")
            }(this, undefined), {
                isAudioPopupLoaded: !1,
                acceptCall: function() {
                    g.setItem(h.LOCALSTORAGE, "_fc_audio_permission", !0), g.getItem(h.SESSIONSTORAGE, "_fc_audio_window_initialized") ? M.commonChannel.send({
                        event: "_fc_audio_call_value",
                        value: !0
                    }) : (this.initializeAudioWindow(), this.isAutomaticCall && R.loadOrStartCobrowsing()), b.hide(b.audioContainer)
                },
                denyCall: function() {
                    g.getItem(h.SESSIONSTORAGE, "_fc_audio_window_initialized") ? (M.commonChannel.send({
                        event: "_fc_audio_call_value",
                        value: !1
                    }), p.show(r)) : this.isAutomaticCall ? R.loadOrStartCobrowsing() : this.sendEventToParent("deniedAudioCall"), b.hide(b.audioContainer)
                },
                showPopup: function(t) {
                    R.cb_data = t, R.agentName = t.agentName || e;
                    var i = t && t.cobrowsingSettings && t.cobrowsingSettings.audio;
                    this.isAutomaticCall = !i || i === v.audio.startAutomatically, this.isAutomaticCall ? g.getItem(h.LOCALSTORAGE, "_fc_audio_permission") ? (this.initializeAudioWindow(), R.loadOrStartCobrowsing()) : this.showAudioPopup() : R.loadOrStartCobrowsing()
                },
                requestForAudioCall: function() {
                    g.getItem(h.SESSIONSTORAGE, "_fc_call_initated") ? this.showAudioPopup() : this.acceptCall()
                },
                showAudioPopup: function() {
                    var e = g.getItem(h.LOCALSTORAGE, "_fc_audio_permission");
                    this.isAudioPopupLoaded || this.generatePopupDom(), e ? b.removeClass(b.audioContainer, "fc-micro-phone-container") : b.addClass(b.audioContainer, "fc-micro-phone-container"), b.show(b.audioContainer), b.setValue(b.agentNameOnAudioRequest, R.agentName)
                },
                disconnectedByDialer: function() {
                    b.hide(b.audioContainer)
                },
                initializeAudioWindow: function() {
                    if (!g.getItem(h.SESSIONSTORAGE, "_fc_audio_window_initialized")) {
                        var e = R.cb_data,
                            t = e.app_alias,
                            i = e.viewerId,
                            n = e.conversationId,
                            o = t + "-" + n + "-" + i;
                        window.open(R.host + "/cb_static_file/audio.html?isMuted=false&app_alias=" + t + "&clientId=" + o + "&conversationId=" + n + "&viewerId=" + i, "_blank", "audioWindow", "toolbar=no, scrollbars=yes, resizable=no, top=30, left=100, width=auto, height=auto"), g.setItem(h.SESSIONSTORAGE, "_fc_audio_window_initialized", !0)
                    }
                },
                readyToAcceptCall: function() {
                    this.isAutomaticCall || this.sendEventToParent("acceptedAudioCall")
                },
                sendEventToParent: function(e) {
                    window.frames.fc_widget.postMessage({
                        event_id: e,
                        data: R.cb_data
                    }, R.host)
                },
                generatePopupDom: function() {
                    this.isAudioPopupLoaded = !0;
                    var e = T.i18n(window._fc_cbtemplate.audiopopup, R.locale);
                    document.body.appendChild(document.createRange().createContextualFragment(e)), b.audioInit(), E.addListnersForAudio()
                },
                addStyleSheet: function() {
                    var e, t = document,
                        i = t.createElement("link");
                    e = R.host, i.href = e + "/widget/css/cb.css?t=" + (new Date).getTime(), i.rel = "stylesheet", t.getElementsByTagName("head")[0].appendChild(i)
                },
                init: function(e) {
                    var t = e.max,
                        i = e.whoIsSpeeking;
                    t ? "you" === i ? (b.addClass(b.visitoCircle, "delay1"), b.removeClass(b.agentCircle, "delay1")) : (b.addClass(b.agentCircle, "delay1"), b.removeClass(b.visitoCircle, "delay1")) : (b.removeClass(b.visitoCircle, "delay1"), b.removeClass(b.agentCircle, "delay1"))
                }
            }
        }.bind(void 0)();

        function D(e, t) {
            if (e !== t) throw new TypeError("Cannot instantiate an arrow function")
        }
        var M = function() {
            return D(this, undefined), {
                audioChannel: null,
                commonChannel: null,
                register: function() {
                    var e = this;
                    this.audioChannel || (this.audioChannel = new TabsChannel({
                        id: "_fc_channel_for_audio_data"
                    }), this.audioChannel.onReceive = function(t) {
                        switch (D(this, e), t && t.event) {
                            case "initAudioBar":
                                k.init(t);
                                break;
                            case "showMic":
                                B.show();
                                break;
                            case "hideMic":
                                B.hide();
                                break;
                            case "_fc_mute_value":
                                B.updateIcon(t.value);
                                break;
                            case "requestForAudioCall":
                                k.requestForAudioCall();
                                break;
                            case "readyToAcceptCall":
                                k.readyToAcceptCall();
                                break;
                            case "disconnectedByDialer":
                                k.disconnectedByDialer()
                        }
                    }.bind(this)), this.commonChannel || (this.commonChannel = new TabsChannel({
                        id: "_fc_common_channel"
                    }), this.commonChannel.onReceive = function(t) {
                        switch (D(this, e), event) {
                            case "showMic":
                                B.show();
                                break;
                            case "_fc_mute_value":
                                B.updateIcon(t.value)
                        }
                    }.bind(this))
                }
            }
        }.bind(void 0)();
        var B = function() {
            return function(e, t) {
                if (e !== t) throw new TypeError("Cannot instantiate an arrow function")
            }(this, undefined), {
                show: function() {
                    g.setItem(h.SESSIONSTORAGE, "_fc_call_initated", !0), b.removeClass(b.muteMicSmall, "fc-mic-hide"), b.removeClass(b.muteMic, "fc-mic-hide"), p.show(d)
                },
                hide: function() {
                    b.addClass(b.muteMic, "fc-mic-hide"), b.addClass(b.muteMicSmall, "fc-mic-hide"), g.getItem(h.SESSIONSTORAGE, "_fc_call_initated") && p.show(u)
                },
                updateIcon: function(e) {
                    e ? this.toggleDOM(!0) : this.toggleDOM(!1)
                },
                toggleDOM: function(e) {
                    e ? (b.replaceClass(b.muteMicContainer, "fc-mute", "fc-unmute"), b.replaceClass(b.muteMic, "fc-mute", "fc-unmute"), b.replaceClass(b.muteMicSmallContainer, "fc-mute", "fc-unmute"), b.replaceClass(b.muteMicSmall, "fc-mute", "fc-unmute"), b.setAttribute(b.muteMic, "data-cb-tooltip", f), b.setAttribute(b.muteMicSmall, "data-cb-tooltip", f)) : (b.replaceClass(b.muteMicContainer, "fc-unmute", "fc-mute"), b.replaceClass(b.muteMic, "fc-unmute", "fc-mute"), b.replaceClass(b.muteMicSmallContainer, "fc-unmute", "fc-mute"), b.replaceClass(b.muteMicSmall, "fc-unmute", "fc-mute"), b.setAttribute(b.muteMic, "data-cb-tooltip", _), b.setAttribute(b.muteMicSmall, "data-cb-tooltip", _)), g.setItem(h.LOCALSTORAGE, "_fc_mute_value", e)
                },
                muteMic: function() {
                    var e = b.muteMic,
                        t = e && e.classList && Object.values(e.classList) && Object.values(e.classList).indexOf("fc-mute") > -1;
                    M.commonChannel.send({
                        event: "_fc_mute_value",
                        value: t
                    }), this.toggleDOM(t)
                }
            }
        }.bind(void 0)();
        var N = function() {
            return function(e, t) {
                if (e !== t) throw new TypeError("Cannot instantiate an arrow function")
            }(this, undefined), {
                generate: function(e) {
                    R.isLoaded = !0;
                    var t = document.createElement("script");
                    t.src = "".concat(R.host, "/cb_static_file/fcCblib.js"), e && (t.onload = e), document.body.appendChild(t);
                    var i = T.i18n(window._fc_cbtemplate.cobrowse, R.locale);
                    document.body.appendChild(document.createRange().createContextualFragment(i.replace(new RegExp("{{host}}", "g"), R.host))), b.init(), g.getItem(h.SESSIONSTORAGE, "_fc_call_initated") && (b.removeClass(b.muteMic, "fc-hide-div"), "true" === g.getItem(h.LOCALSTORAGE, "_fc_mute_value") ? b.replaceClass(b.muteMic, "fc-unmute", "fc-mute") : b.replaceClass(b.muteMic, "fc-mute", "fc-unmute"));
                    var n = g.getItem(h.LOCALSTORAGE, "_fc_cb_agentPic");
                    n && (b.agentPic.src = n, b.replaceClass(b.agentPic, "fc-agent-default", "fc-agent")), E.addListnersForControl()
                },
                updateNameAndMike: function() {
                    var e = OneClickCbUtils.safeSessionGetItem("_fc_cb_agentName"),
                        i = "true" === g.getItem(h.LOCALSTORAGE, "_fc_mute_value");
                    b.agentName.innerText = "".concat(e, " ").concat(o), b.setAttribute(b.agentDataToolTip, "data-cb-tooltip", "".concat(e, " (").concat(t, ")"));
                    var n = document.getElementsByTagName("html") && document.getElementsByTagName("html")[0];
                    n && n.classList && Object.values(n.classList) && -1 === Object.values(n.classList).indexOf("lc-cb-controlling-vi") && n.classList.add("lc-cb-controlling-vi"), B.toggleDOM(i), b.show(b.headerContainer), b.show(b.topHeader)
                }
            }
        }.bind(void 0)();
        i(44004);

        function L(e, t) {
            if (e !== t) throw new TypeError("Cannot instantiate an arrow function")
        }
        var R = function() {
            return L(this, undefined), {
                agentName: null,
                isLoaded: !1,
                cb_data: null,
                startCoborowsing: function() {
                    var t = document.querySelector(".fc-screen-viewing");
                    t && t.focus(), w.setStartTime();
                    var i = this.cb_data,
                        n = i.name,
                        o = i.app_alias,
                        a = i.role,
                        c = i.viewerId,
                        s = i.conversationId,
                        l = i.sdata,
                        r = i.messageId,
                        d = i.agentName,
                        u = i.messageUserId,
                        f = i.isMuted,
                        _ = i.cobrowsingId,
                        m = i.channelId,
                        v = i.pic;
                    this.agentName = d || e, this.cb_data ? OneClickCbUtils.cobrowsingStart(n, a, c, l, o, s, u) : OneClickCbUtils.cobrowsingStart();
                    var C = OneClickCbUtils.getRoom(),
                        p = !0;
                    C || (p = !1), window.frames.fc_widget.postMessage({
                        event_id: "startScreenShare",
                        cb_data: {
                            room: C,
                            name: n,
                            isCbstarted: p,
                            conversationId: s,
                            messageId: r,
                            messageUserId: u,
                            app_alias: o,
                            role: a,
                            viewerId: c,
                            sdata: l,
                            cobrowsingId: _,
                            channelId: m,
                            startTime: w.getStarttime()
                        }
                    }, this.host), d || (d = e), OneClickCbUtils.safeSessionSetItem("_fc_cb_agentName", d || e), g.setItem(h.LOCALSTORAGE, "_fc_cb_agentName", d || e), g.setItem(h.LOCALSTORAGE, "_fc_cb_agentPic", v), g.setItem(h.LOCALSTORAGE, "_fc_mute_value", f), b.setAttribute(b.endSession, "data-channelId", m)
                },
                onCobrowsingStart: function() {
                    M.register(), N.updateNameAndMike(), w.startTimer(), g.getItem(h.SESSIONSTORAGE, "_fc_isRequested") && y.requestControl(), g.getItem(h.SESSIONSTORAGE, "_fc_isControlling") && y.allowControlDomEvents.call(this, !0), y.checkforControl()
                },
                onCobrowsingEnd: function() {
                    this.cleanUp()
                },
                allowScreenShare: function(e) {
                    k.showPopup(e.data.cbData)
                },
                requestForAudioCall: function() {
                    k.showAudioPopup()
                },
                requestForControl: function() {
                    y.requestControl()
                },
                gainedControlBack: function() {
                    y.gainedControlBack()
                },
                lostControl: function() {
                    y.transferComplete()
                },
                init: function() {
                    "true" === g.getItem(h.SESSIONSTORAGE, "1click-cobrowsing") && N.generate(), k.addStyleSheet()
                },
                loadOrStartCobrowsing: function() {
                    var e = this;
                    this.isLoaded ? this.startCoborowsing() : N.generate(function() {
                        L(this, e), this.startCoborowsing()
                    }.bind(this))
                },
                cleanUp: function() {
                    g.removeItem(h.SESSIONSTORAGE, "_fc_call_initated"), g.removeItem(h.SESSIONSTORAGE, "_fc_audio_window_initialized"), document.getElementsByTagName("html")[0].classList.remove("lc-cb-controlling-vi"), b.hide(b.headerContainer), w.clearTimer(), b.hide(b.messageContainer), b.hide(b.audioContainer), b.hide(b.notifyContainer), g.removeItem(h.SESSIONSTORAGE, "_fc_isControlling"), g.removeItem(h.SESSIONSTORAGE, "_fc_isRequested"), g.removeItem(h.LOCALSTORAGE, "_fc_mute_value"), OneClickCbUtils.cobrowsingEnd(), w.resetStartTime(), y.checkforControl(), B.hide(), M.commonChannel.send({
                        event: "_fc_cobrowsing_closed",
                        value: !0
                    }), window._fc_cb_AudioConnection = null
                }
            }
        }.bind(void 0)();
        ! function(e, t) {
            var i = e.fc_cobrowse && e.fc_cobrowse.host,
                n = e.fc_cobrowse.locale;
            i && (t.host = i, t.locale = n, e.fc_cobrowse = t, t.init())
        }(window, R)
    }()
}();